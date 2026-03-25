import { AppBar as e, Box as t, Button as n, CircularProgress as r, Container as i, Dialog as a, DialogActions as o, DialogContent as s, DialogTitle as c, FormControl as l, IconButton as u, Input as d, InputAdornment as f, InputLabel as p, Paper as m, Select as h, Stack as g, Switch as _, Tab as v, Tabs as y, TextField as b, Toolbar as x, Typography as S } from "@mui/material";
import C from "@mui/icons-material/BugReport";
import { Fragment as w, jsx as T, jsxs as E } from "react/jsx-runtime";
import ee, { createContext as te, useCallback as ne, useContext as re, useEffect as D, useLayoutEffect as O, useMemo as ie, useRef as k, useState as A } from "react";
import { DataGrid as ae, GridGetRowsError as oe, useGridApiRef as se } from "@mui/x-data-grid";
import { LexicalComposer as ce } from "@lexical/react/LexicalComposer";
import { RichTextPlugin as le } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable as ue } from "@lexical/react/LexicalContentEditable";
import { LexicalErrorBoundary as de } from "@lexical/react/LexicalErrorBoundary";
import { useLexicalComposerContext as fe } from "@lexical/react/LexicalComposerContext";
import { $generateHtmlFromNodes as pe, $generateNodesFromDOM as me } from "@lexical/html";
import { $getRoot as he, ParagraphNode as ge, TextNode as _e } from "lexical";
import { Image as ve } from "mui-image";
import ye from "@mui/icons-material/Description";
import be from "@mui/icons-material/Download";
import xe from "@mui/icons-material/Close";
import { useDropzone as Se } from "react-dropzone";
import Ce from "@mui/icons-material/CloudUpload";
import we from "@mui/icons-material/Send";
//#region \0rolldown/runtime.js
var Te = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), j = () => /* @__PURE__ */ T(e, {
	position: "static",
	sx: {
		minHeight: 50,
		px: 2,
		mt: "auto",
		backgroundColor: "black",
		width: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-end"
	},
	children: /* @__PURE__ */ E(x, {
		disableGutters: !0,
		children: [
			/* @__PURE__ */ T(t, {
				component: "img",
				sx: {
					height: 20,
					marginRight: 2
				},
				alt: "Logo",
				src: "/logo.png"
			}),
			/* @__PURE__ */ T(S, {
				variant: "h6",
				component: "div",
				sx: { flexGrow: 1 },
				children: "HTS Product Classification"
			}),
			/* @__PURE__ */ T(u, {
				size: "small",
				sx: { color: "white" },
				onClick: () => console.log("Debug Clicked"),
				children: /* @__PURE__ */ T(C, { fontSize: "small" })
			})
		]
	})
}), M = () => /* @__PURE__ */ T(t, {
	component: "footer",
	sx: {
		py: 2,
		px: 2,
		mt: "auto",
		backgroundColor: "black",
		position: "fixed",
		bottom: 0,
		width: "100%"
	},
	children: /* @__PURE__ */ T(i, { maxWidth: "sm" })
}), N = ({ api: e, endpoint: t, children: r, get_args: i, fetch_params: a, callback: o, ...s }) => /* @__PURE__ */ T(n, {
	onClick: async () => {
		try {
			let n = {};
			i && (n = i());
			let r = { method: "GET" };
			a && (r = {
				...r,
				...a()
			});
			let s = await e.at("/" + t, {
				fetchParams: r,
				args: n
			});
			o && o(r, n, s);
		} catch (e) {
			console.error("Button Action Failed:", e);
		}
	},
	...s,
	children: r
}), Ee = ({ children: e, sx: n = {} }) => /* @__PURE__ */ T(t, {
	sx: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		minHeight: "100vh",
		...n
	},
	children: /* @__PURE__ */ T(g, {
		direction: "column",
		sx: { width: "100%" },
		children: e
	})
}), P = ({ title: e, body: t, show: n, footer: r, title_sx: i, footer_sx: l, content_sx: u }) => /* @__PURE__ */ E(a, {
	open: n,
	maxWidth: "lg",
	fullWidth: !0,
	scroll: "paper",
	"aria-labelledby": "centered-modal-title",
	children: [
		/* @__PURE__ */ T(c, {
			id: "centered-modal-title",
			sx: { ...i },
			children: e
		}),
		/* @__PURE__ */ T(s, {
			dividers: !0,
			sx: { ...u },
			children: t
		}),
		/* @__PURE__ */ T(o, {
			sx: l,
			children: r
		})
	]
}), F = (e) => {
	if (e === null) return !0;
	let t = typeof e;
	return t === "string" || t === "number" || t === "boolean" || t === "undefined" || t === "symbol" || t === "bigint" || t === "int";
}, I = (e) => e == null, L = (e, t) => I(e) ? "" : e.toLowerCase().split(t).map((e) => e.charAt(0).toUpperCase() + e.slice(1)).join(" "), R = "Values", z = "Containers", B = (e, t, n, r) => {
	let i = r || {
		[R]: /* @__PURE__ */ new Map(),
		[z]: /* @__PURE__ */ new Map()
	}, a = e ? t : "root", o = {
		parent: e,
		path: a,
		value: n,
		children: [],
		root: e ? e.root : null,
		containerIndex: i
	};
	return e || (o.root = o), i[R].set(a, n), i[z].set(a, o), Object.freeze(o);
}, V = (e, t, n) => {
	let r = B(e, t, n, e.containerIndex);
	return {
		...e,
		children: [...e.children, r]
	};
}, H = (e, t) => e.containerIndex[z].get(t), De = (e, t) => {
	for (let [n, r] of e.containerIndex[R].entries()) t(n, r);
}, Oe = (e, t) => {
	for (let [, n] of e.containerIndex[z].entries()) t(n);
}, U = (e, t, n = 2) => {
	De(e, (e, r) => {
		let i = Object.keys(r);
		for (let a = 0; a < i.length; a++) {
			let o = e.split(".");
			o.push(i[a]);
			let s = o.slice(2).join("."), c = r[i[a]];
			o.length > n && F(c) && t({
				i: a,
				value: c,
				path: s,
				fullpath: o.join("."),
				key: e,
				containerValue: r
			});
		}
	});
}, ke = (e, t, n, r) => {
	if (!e || !t) return e;
	let i = e.containerIndex[z].get(t);
	if (!i) return console.warn(`Container at path "${t}" not found.`), e;
	let a = {};
	a[n] = r;
	let o = {
		...i.value,
		...a
	}, s = B(i.parent, i.path, o, e.containerIndex);
	e.containerIndex[z].set(t, s), e.containerIndex[R].set(t, o);
	let c = s;
	for (; c.parent;) {
		let t = c.parent, n = t.children.map((e) => e.path === c.path ? c : e), r = c.path.split("."), i = r.slice(r.length - 1), a = { ...e.containerIndex[R].get(t.path) };
		a[i] = o;
		let s = Object.freeze({
			...t,
			children: n,
			value: a
		});
		e.containerIndex[z].set(s.path, s), c = s;
	}
	return e.containerIndex[z].get("root");
}, W = (e = null, t = [], n = "_", ...r) => {
	e === null && (e = B(null, "root", r.length === 0 ? {} : r[0]), t = ["root"]);
	let i = (e, t) => {
		let r = e.value;
		return typeof r == "object" && r && (Array.isArray(r) ? r.forEach((r, a) => {
			if (typeof r == "object" && r) {
				let o = [...t, String(a)];
				i(V(e, o.join(n), r).children.at(-1), o);
			}
		}) : Object.entries(r).forEach(([r, a]) => {
			if (typeof a == "object" && a) {
				let o = [...t, r];
				i(V(e, o.join(n), a).children.at(-1), o);
			}
		})), e;
	};
	return i(e, t);
}, Ae = ({ inputKey: e, inputProps: t }) => {
	let n = Object.keys(t.defaultValue)[0], r = t.defaultValue[n], [i, a] = A(/* @__PURE__ */ T(l, {
		type: "text",
		onChange: t.onChange,
		defaultValue: r
	})), o = (e, n) => {
		a(ee.cloneElement(i, {
			...t,
			defaultValue: r,
			name: e + "." + n
		}));
	}, [s, c] = A(/* @__PURE__ */ T(l, {
		type: "text",
		...t,
		defaultValue: n,
		onChange: (t) => o(e, t.target.value)
	}));
	return D(() => {
		o(e, n);
	}, []), /* @__PURE__ */ E(g, {
		direction: "horizontal",
		gap: 2,
		children: [s, i]
	});
}, je = ({ fileData: e, onChange: t, name: n }) => {
	let [r] = fe(), i = k("");
	return D(() => {
		e && (async () => {
			if (!e) return;
			let t = String(e).replace(/^"|"$/g, "").replace(/\\n/g, "<br/>");
			t !== i.current && (i.current = t, r.update(() => {
				let e = he();
				e.clear();
				let n = me(r, new DOMParser().parseFromString(`<div>${t}</div>`, "text/html"));
				n.length > 0 && e.append(...n);
			}));
		})();
	}, [e, r]), D(() => r.registerUpdateListener(({ editorState: e }) => {
		e.read(() => {
			let e = pe(r);
			i.current = e, t({ target: {
				value: e,
				name: n
			} });
		});
	}), [
		r,
		t,
		n
	]), null;
}, G = ({ fileData: e, subtype: n, inputProps: r }) => /* @__PURE__ */ T(t, {
	sx: { width: "100%" },
	children: /* @__PURE__ */ T(m, {
		variant: "outlined",
		sx: {
			p: 2,
			minHeight: "200px",
			position: "relative"
		},
		children: /* @__PURE__ */ E(ce, {
			initialConfig: {
				namespace: "MyEditor",
				nodes: [ge, _e],
				theme: {},
				onError: (e) => console.error("Lexical Error:", e),
				editable: n !== 0
			},
			children: [/* @__PURE__ */ T(le, {
				contentEditable: /* @__PURE__ */ T(ue, { style: {
					outline: "none",
					minHeight: "170px"
				} }),
				placeholder: /* @__PURE__ */ T("div", {
					style: {
						position: "absolute",
						top: 20,
						left: 20,
						color: "#aaa"
					},
					children: "Enter text..."
				}),
				ErrorBoundary: de
			}), /* @__PURE__ */ T(je, {
				fileData: e,
				onChange: r.onChange,
				name: r.name
			})]
		})
	})
}), Me = (/* @__PURE__ */ Te(((e, t) => {
	t.exports = {};
})))(), Ne = async (e) => {
	let t = new DecompressionStream("gzip"), n = e.stream().pipeThrough(t).getReader(), r = [];
	for (;;) try {
		let { done: e, value: t } = await n.read();
		if (e) break;
		r.push(t);
	} catch (e) {
		throw console.error("Decompression failed:", e), e;
	}
	let i = r.reduce((e, t) => e + t.length, 0), a = new Uint8Array(i), o = 0;
	for (let e of r) a.set(e, o), o += e.length;
	return a;
}, Pe = (e) => {
	e = atob(e);
	let t = new ArrayBuffer(e.length), n = new Uint8Array(t);
	for (let t = 0; t < e.length; t++) n[t] = e.charCodeAt(t);
	return n;
}, Fe = "data:image/#{encoding};base64,#{data}", Ie = ({ data: e, encoding: t, alt: n }) => {
	let r = Fe, [i, a] = A(void 0);
	return I(t) && (t = "png"), I(n) && (n = "ERROR"), Ne(new Blob([Pe(e)])).then((e) => {
		r = r.replace("#{encoding}", t), r = r.replace("#{data}", Me.Buffer.from(e).toString("base64")), a(r);
	}), /* @__PURE__ */ T(ve, {
		src: i,
		fluid: !0,
		alt: n
	});
}, Le = (e) => {
	let t = "", n = Object.keys(e).map((t) => {
		let n = e[t];
		return I(n) ? "" : `${encodeURIComponent(t)}=${encodeURIComponent(n)}`;
	}).filter((e) => e !== "").join("&");
	if (n) {
		let e = t.indexOf("#");
		e !== -1 && (t = t.slice(0, e)), t += (t.indexOf("?") === -1 ? "?" : "&") + n;
	}
	return t;
}, Re = (e, { baseHeaders: t, handleErr: n, handleFinally: r, debug: i } = {}) => {
	let a = {
		"Content-Type": "application/json",
		...t
	}, o = (e) => {
		console.log(e);
	}, s = ({ endpoint: t, inputHeaders: s, fetchParams: c, args: l }) => {
		I(t) && (t = "");
		let u = e + t, d = {
			method: "GET",
			headers: {
				...a,
				...s
			},
			...c
		};
		return I(l) || (d.method === "POST" && (d.body = JSON.stringify(l)), d.method === "GET" && (u += Le(l))), fetch(u, d).catch((e) => n(e)).finally(() => {
			i && o({
				endpoint: t,
				inputHeaders: s,
				fetchParams: c
			}), !I(r) && r({
				endpoint: t,
				inputHeaders: s,
				fetchParams: c
			});
		});
	}, c = (e) => s(e).then((e) => DecompressGzip(e)), l = (e) => s(e).then((e) => e.json() || {}), u = (e) => l(e).then((e) => BuildContainerTree(null, [], ".", e));
	return {
		fetchPromise: s,
		fetchJson: l,
		fetchGunzip: c,
		fetchContainer: u,
		at: (e, t = {}) => l({
			endpoint: e,
			...t
		}),
		atContainer: (e, t = {}) => u({
			endpoint: e,
			...t
		})
	};
};
Re("http://localhost:8080/", {
	handleErr: (e) => console.log(e),
	debug: !0
});
//#endregion
//#region src/utility/api.js
var ze = ({ endpoint: e, handleErr: t }) => {
	I(t) && (t = (e) => console.log(e));
	let n = Re(e, { handleErr: t });
	return {
		at: async (e, t) => await n.fetchJson({
			endpoint: e,
			...t
		}),
		atContainer: async (e, t) => await n.fetchContainer({
			endpoint: e,
			...t
		}),
		selectOptions: async (e) => await n.fetchJson({
			endpoint: "/select_options",
			args: e
		}),
		create: async (e, t = {}) => await n.fetchJson({
			endpoint: "/create",
			fetchParams: {
				method: "POST",
				...t
			},
			args: e
		}),
		update: async (e, t) => await n.fetchJson({
			endpoint: "/update?id=" + t,
			fetchParams: { method: "POST" },
			args: e
		}),
		list: async (e) => await n.fetchJson({
			endpoint: "/list",
			args: e
		}),
		get: async (e) => await n.fetchJson({
			endpoint: "/get",
			args: { id: e }
		}),
		deleteId: async (e) => await n.fetchJson({
			endpoint: "/delete",
			args: { id: e }
		}),
		deleteIds: async (e) => await n.fetchJson({
			fetchParams: { method: "POST" },
			endpoint: "/delete",
			args: { ...e }
		}),
		endpoint: () => e
	};
}, Be = (e, t) => () => e.get(t), Ve = ({ jsxKey: e, endpoint: t, inputProps: n }) => {
	let [r, i] = A([/* @__PURE__ */ T("option", {
		value: n.defaultValue,
		children: n.defaultValue
	}, e + "-" + n.defaultValue)]), a = ze({ endpoint: t });
	return D(() => {
		a.selectOptions().then((t) => {
			i(Object.keys(t).map((n) => {
				let r = t[n][Object.keys(t[n])[1]], i = t[n][Object.keys(t[n])[0]];
				return /* @__PURE__ */ T("option", {
					value: i,
					children: r
				}, e + "-" + n);
			}));
		});
	}, []), /* @__PURE__ */ T(h, {
		...n,
		defaultValue: n.defaultValue,
		children: [...r || /* @__PURE__ */ T(w, {})]
	}, e);
}, He = ({ jsxKey: e, key: t, inputProps: n }) => {
	let r;
	return t.charAt(t.length - 1) === "D" && t.charAt(t.length - 2) === "I" || t.charAt(t.length - 1) === "S" && t.charAt(t.length - 2) === "D" ? (t.charAt(t.length - 1) === "D" && t.charAt(t.length - 2) === "I" && (r = t.slice(5, t.length - 2)), t.charAt(t.length - 1) === "S" && t.charAt(t.length - 2) === "D" && (r = t.slice(5, t.length - 3), n = {
		...n,
		multiple: !0
	}), /* @__PURE__ */ T(Ve, {
		endpoint: r,
		jsxKey: e,
		inputProps: n
	})) : null;
}, Ue = () => ({ formRef: e, jsxKey: t, key: n, currentType: r, inputProps: i }) => {
	let a = He({
		jsxKey: t,
		key: n,
		inputProps: i
	});
	if (!I(a)) return a;
	let o = {
		width: "100%",
		"&:before, &:after": { display: "none !important" },
		"&:hover:not(.Mui-disabled):before": { display: "none !important" },
		"& .MuiInput-input": {
			padding: "4px 0",
			cursor: "default",
			"&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
				"-webkit-appearance": "none",
				margin: 0
			},
			"&[type=number]": { "-moz-appearance": "textfield" }
		}
	};
	if (a = /* @__PURE__ */ T(d, {
		type: "text",
		disableUnderline: !0,
		readOnly: !0,
		sx: o,
		...i
	}, t), r === "number" || r === "bigint") return /* @__PURE__ */ T(d, {
		type: "number",
		disableUnderline: !0,
		readOnly: !0,
		sx: o,
		...i
	}, t);
	if (r === "boolean") return /* @__PURE__ */ T(_, {
		...i,
		defaultChecked: i.defaultValue
	}, t);
	if (r === "object") {
		if (i.defaultValue.Subtype === 17) return /* @__PURE__ */ T(Ie, { data: H(q(e), n.slice(0, n.lastIndexOf(".")))?.value.Data }, t);
		if (i.defaultValue.Subtype === 16 || i.defaultValue.Subtype === 0) {
			let r = H(q(e), n.slice(0, n.lastIndexOf(".")));
			return i.name = n.slice(0, n.lastIndexOf(".")) + ".Data", /* @__PURE__ */ T(G, {
				fileData: JSON.stringify(r?.value.Data, null, 2),
				inputProps: i,
				subtype: i.defaultValue.Subtype
			}, t);
		}
		if (i.defaultValue.Subtype === 18) {
			let r = H(q(e), n.slice(0, n.lastIndexOf(".")));
			return i.name = n.slice(0, n.lastIndexOf(".")) + ".Data", /* @__PURE__ */ T(G, {
				fileData: r?.value.Data,
				inputProps: i,
				subtype: i.defaultValue.Subtype
			}, t);
		}
		if (!I(i.defaultValue.Subtype) || !I(i.defaultValue.Data)) return null;
		if (Array.isArray(i.defaultValue)) return Object.keys(i.defaultValue).map((e) => /* @__PURE__ */ T(d, {
			type: "text",
			disableUnderline: !0,
			readOnly: !0,
			sx: o,
			...i,
			defaultValue: i.defaultValue[e]
		}, t));
		if (I(i.defaultValue)) return;
		let r = Object.keys(i.defaultValue)[0];
		return typeof i.defaultValue[r] == "object" ? null : /* @__PURE__ */ T(Ae, {
			inputKey: n,
			inputProps: i
		});
	}
	return a;
}, We = (e, t = {}) => ({
	index: 0,
	elements: {},
	nameIndex: {},
	labels: {},
	element_component: {},
	container: void 0,
	handleOnClose: void 0,
	elementSelector: e || Ue(),
	context: t
}), Ge = (e) => {
	e.current.handleOnClose();
}, Ke = (e, t) => {
	let n = e.current;
	n.handleClose = t, e.current = n;
}, K = (e, t) => {
	let n = e.current;
	I(n) || (n.container = t), e.current = n;
}, q = (e) => e.current.container, qe = (e, n) => {
	let r = e.current, i = r.labels[n], a = r.element_component[n];
	return i === "None" ? /* @__PURE__ */ T(w, { children: a }) : /* @__PURE__ */ E(g, {
		direction: "row",
		gap: 1,
		sx: {
			justifyContent: "space-between",
			width: "100%",
			borderBottom: "1px solid rgba(0, 0, 0, 0.42)",
			pb: .5,
			alignItems: "flex-end"
		},
		children: [/* @__PURE__ */ T(t, {
			sx: {
				width: "50%",
				flexShrink: 0
			},
			children: i
		}), /* @__PURE__ */ T(t, {
			sx: { flexGrow: 1 },
			children: a
		})]
	}, n);
}, Je = (e) => {
	let t = {};
	return Object.keys(e.current.nameIndex).map((n, r) => {
		t[n] = qe(e, r);
	}), /* @__PURE__ */ T(g, {
		direction: "column",
		gap: 0,
		children: Object.keys(t).map((e) => t[e])
	});
}, Ye = (e) => {
	let t = e.current;
	return { onChange: (n) => {
		let r = n.target.value, i = n.target.selectedOptions;
		if (!I(i)) {
			let e = [].slice.call(i);
			r = e.map((e) => e.value), e.length === 1 && (r = r[0]);
		}
		n.target.type === "datetime-local" && (r = new Date(Date.parse(r)).toISOString());
		let a = n.target.name, o = t.nameIndex[a];
		I(o) && (t.nameIndex[a] = t.index, o = t.index, e.current = t), t.elements[o] = r;
		let s = a.split("."), c = s.slice(0, s.length - 1).join("."), l = s.slice(s.length - 1);
		I(H(q(e), c)) && (c = s.slice(0, s.length - 2).join(".")), n.target.type === "checkbox" && (r = n.currentTarget.checked), e.current = t, K(e, ke(q(e), c, l, r)), e.current = t;
	} };
}, Xe = (e, t) => {
	let n = e.current, r = n.nameIndex[t];
	return n.elements[r];
}, Ze = (e, t, n) => {
	let r = typeof n, i = e.current, a = t + i.index, o = {
		name: t,
		defaultValue: Xe(e, t),
		onChange: Ye(e).onChange,
		sx: { width: "100%" }
	};
	return i.elementSelector({
		key: t,
		formRef: e,
		jsxKey: a,
		currentType: r,
		inputProps: o
	});
}, J = (e, t, n) => {
	let r = e.current;
	if (I(r.nameIndex[t])) {
		r.nameIndex[t] = r.index, r.elements[r.index] = n;
		let i = Ze(e, t, n);
		if (!I(i)) {
			let e = L(t.replace(/root\./, ""), "."), n = e.split(" "), a = n[n.length - 1];
			/^\d+$/.test(a) ? r.labels[r.index] = "None" : r.labels[r.index] = /* @__PURE__ */ T(p, {
				column: t,
				children: e
			}, "Label" + t + r.index), r.element_component[r.index] = i, r.index++;
		}
	}
	e.current = r;
}, Qe = (e, t) => e.current.nameIndex[t], $e = (e, t) => {
	let n = e.current;
	delete n.labels[Qe(e, t)], e.current = n;
}, et = ({ formRef: e, container: t }) => {
	Oe(t, (t) => {
		let n = t.path, r = t.value;
		if (Array.isArray(r)) {
			let t = [];
			Object.keys(r).forEach((e) => {
				I(r[e]) || Array.isArray(r[e]) || t.push(r[e]);
			}), t.length > 0 && J(e, n, t);
			return;
		}
		Object.keys(r).forEach((t) => {
			I(r[t]) || (typeof r[t] == "object" && Object.keys(r[t]).forEach((i) => {
				let a = {};
				a[i] = r[t][i], J(e, n + "." + t + "." + i, a);
			}), F(r[t]) && J(e, n + "." + t, r[t]));
		});
	});
}, Y = te(null), X = () => re(Y), tt = (e) => {
	let t = X();
	return (n) => {
		n ? t?.register(e, n) : t?.unregister(e);
	};
}, Z = (e, t = !0) => {
	let n = X();
	return (r) => {
		t && r ? n?.register(e, r) : n?.unregister(e);
	};
}, nt = ({ title: e, getSchema: n, handleSave: r, elementSelector: i, footerButtons: a, refKey: o, register_component: s = !1 }) => {
	let c = Z(o, s), l = k(null), [d, f] = A(!1), p = () => {
		f(!1);
	};
	l.current ||= We(i, { setShow: (e) => {
		f(e);
	} }), O(() => (c(l.current), () => c(null)), [c]);
	let [m, h] = A(void 0), [_, b] = A(0);
	return a ||= [], /* @__PURE__ */ E(g, {
		direction: "row",
		gap: 3,
		children: [/* @__PURE__ */ T(u, {
			onClick: async () => {
				try {
					K(l, W(null, [], ".", await n())), Ke(l, p), et({
						formRef: l,
						container: q(l)
					}), h(Je(l)), f(!0);
				} catch (e) {
					console.error("Failed to load schema:", e);
				}
			},
			children: /* @__PURE__ */ T(ye, { sx: { color: "red" } })
		}), /* @__PURE__ */ T(P, {
			title: e,
			body: /* @__PURE__ */ E(t, {
				sx: { width: "100%" },
				children: [
					/* @__PURE__ */ T(t, {
						sx: {
							borderBottom: 1,
							borderColor: "divider"
						},
						children: /* @__PURE__ */ E(y, {
							value: _,
							onChange: (e, t) => b(t),
							"aria-label": "custom tabs",
							children: [/* @__PURE__ */ T(v, { label: "File Upload" }), /* @__PURE__ */ T(v, { label: "File Viewer" })]
						})
					}),
					_ === 0 && /* @__PURE__ */ T(t, {
						sx: {
							borderBottom: 1,
							borderColor: "divider",
							width: "100%"
						},
						children: m
					}),
					_ === 1 && /* @__PURE__ */ T(t, {
						sx: { p: 3 },
						children: /* @__PURE__ */ T("pre", { children: JSON.stringify(q(l)?.value, null, 2) })
					})
				]
			}),
			show: d,
			footer: a,
			title_sx: {
				background: "black",
				color: "white"
			}
		})]
	});
}, rt = ({ refreshGrid: e, api: t, id: n, title: r, footerButtons: i }) => /* @__PURE__ */ T(nt, {
	title: r,
	button_title: "Update",
	getSchema: Be(t, n),
	handleSave: (r) => {
		t.update(r, n).then(() => e());
	},
	footerButtons: i,
	register_component: !0,
	refKey: "update_modal"
}), it = ({ handleRefreshGrid: e, api: t, id: n, params: r }) => /* @__PURE__ */ T(g, {
	direction: "row",
	gap: 1,
	children: /* @__PURE__ */ T(rt, {
		...r,
		refreshGrid: e,
		api: t,
		id: n
	})
}), at = (e, t) => {
	let n = e.current;
	n && (n.endpoint = t);
}, ot = (e) => e.current.endpoint, st = (e, t) => {
	let n = e.current;
	U(t, (e) => {
		let t = e.value, r = e.path, i = typeof t;
		if (n.headers_ri[r] !== void 0) return;
		let a = "string";
		i === "number" ? a = "number" : r.toLowerCase().includes("date") || r.toLowerCase().includes("modified") ? a = "date" : i === "string" && (a = "string"), n.headers[n.index] = {
			field: r,
			type: a,
			headerName: r
		}, n.rows[n.index] = [], n.headers_ri[r] = n.index, n.index++;
	}), e.current = n;
}, ct = (e, t) => {
	let n = e.current;
	n && (n.rows = [], n.row_count = 0, n.headers.forEach(() => {
		n.rows.push([]);
	}), U(t, (e) => {
		if (F(e.value)) {
			let t = n.headers_ri[e.path];
			t !== void 0 && n.rows[t].push(e.value);
		}
	}), e.current = n);
}, lt = (e) => {
	let t = e.current;
	if (!t || !t.rows || t.rows.length === 0) return [];
	let n = t.rows[0].length;
	return Array.from({ length: n }).map((e, n) => {
		let r = {};
		return t.headers.forEach((e, i) => {
			let a = t.rows[i];
			r[e.field] = a ? a[n] : null;
		}), r.id = r.id, r;
	});
}, ut = (e) => {
	let t = e.current, n = Object.keys(t.headers_ri).map((e) => ({
		field: e,
		sortable: !0,
		filterable: !0,
		headerName: e.split(".").pop(),
		flex: 2,
		type: "string"
	}));
	return t.row_details && n.push({
		sortable: !1,
		filterable: !1,
		width: 100,
		field: "edit",
		headerName: "Edit",
		pinnable: !0,
		flex: 1,
		type: "actions",
		renderCell: Ct(e)
	}), n;
}, dt = (e) => e.current.paginationModel, ft = (e, t) => {
	let n = e.current;
	n && (n.args = t, e.current = n, n.refresh());
}, pt = (e, t) => {
	let n = e.current;
	n && (n.args = {
		...n.args,
		...t
	}, e.current = n, n.refresh());
}, mt = (e, t) => {
	let n = e.current;
	n && (n.args.sortModel = JSON.stringify(t), e.current = n);
}, ht = (e, t) => {
	let n = e.current;
	n && (n.args.filterModel = JSON.stringify(t), e.current = n);
}, gt = (e, t) => () => {
	let n = e.current;
	n && (n.paginationModel = t, n.args.paginationModel = JSON.stringify(t), e.current = n);
}, _t = (e, t) => {
	let n = e.current;
	n && (n.fetch_params = t, e.current = n);
}, vt = (e) => e.current.fetch_params, yt = (e, t) => ({ getRows: async (n) => {
	let r = e.current;
	if (!r) return {
		rows: [],
		rowCount: 0
	};
	ht(e, n.filterModel), mt(e, n.sortModel);
	let { page: i, pageSize: a } = n.paginationModel ?? {
		page: 0,
		pageSize: 10
	}, o = {
		...r.args,
		offset: i * a,
		limit: a
	}, s = {};
	Object.keys(o).forEach((e) => {
		let t = o[e];
		Array.isArray(t) && t.length === 0 || I(t) || (s[e] = t);
	}), I(n.sortModel) || Array.isArray(n.sortModel) && n.sortModel.length === 0 && delete s.sortModel, I(n.filterModel) || Array.isArray(n.filterModel.items) && n.filterModel.items.length === 0 && delete s.filterModel;
	let c = await r.api.at("/" + r.endpoint, {
		fetchParams: {
			method: "GET",
			...vt(e)
		},
		args: s
	}), l = W(null, [], ".", c.results);
	return st(e, l), ct(e, l), r.row_count = c.pagination?.total || 0, e.current = r, t(), {
		rows: lt(e),
		rowCount: c.pagination?.total || 0
	};
} }), bt = (e, t) => {
	let n = e.current;
	n && (n.args.search = t, e.current = n);
}, Q = (e) => e.current.datasource, xt = async (e) => {
	let t = e.current;
	if (!t) return;
	let n = t.gridRef.current;
	n.dataSource.cache.clear(), await n.dataSource.fetchRows(), t.refresh();
}, St = (e) => (t) => {
	let n = e.current;
	if (!n || n.rows.length === 0) return;
	let r = t.ids, i = n.rows[0].length, a = Array.from({ length: i }, (e, t) => t).filter((e) => {
		let t = n.rows[0][e];
		return r.has(t);
	});
	n.selected_data = n.rows.map((e) => a.map((t) => e[t])), n.selected_ids = t, e.current = n;
}, Ct = (e) => {
	let r = X();
	return (i) => {
		let [a, o] = A(!1), [s, c] = A(""), l = e.current;
		if (!l) return;
		let d = "white";
		i.row.stage === "rejected" && (d = "red"), i.row.stage === "approved" && (d = "green");
		let f = (e = !1) => {
			let t = r?.get("update_modal")?.context;
			if (!t) return;
			let n = t.setShow;
			n(e);
		}, p = /* @__PURE__ */ E(g, {
			direction: "column",
			justifyContent: "space-between",
			spacing: 2,
			sx: { width: "100%" },
			children: [/* @__PURE__ */ E(g, {
				gap: 3,
				direction: "row",
				children: [
					i.row.item_id,
					/* @__PURE__ */ T(t, {
						sx: {
							backgroundColor: d,
							color: "black",
							borderRadius: 2,
							px: 1.5,
							fontSize: "0.875rem"
						},
						children: i.row.stage
					}),
					/* @__PURE__ */ T(t, { sx: { flexGrow: 1 } }, "spacer"),
					/* @__PURE__ */ T(u, {
						onClick: () => f(!1),
						sx: {
							backgroundColor: "black",
							color: "white"
						},
						children: /* @__PURE__ */ T(xe, {})
					})
				]
			}), /* @__PURE__ */ E(g, {
				gap: 3,
				direction: "row",
				children: [i.row.code, i.row.description]
			})]
		}), m = () => ({
			item_id: i.row.item_id,
			comments: s
		});
		return /* @__PURE__ */ T(it, {
			params: {
				footerButtons: [
					/* @__PURE__ */ T(b, {
						label: "Reason for rejection",
						multiline: !0,
						rows: 4,
						variant: "outlined",
						fullWidth: !0,
						hidden: a,
						onChange: (e) => c(e.target.value)
					}),
					/* @__PURE__ */ T(n, {
						variant: "outlined",
						sx: {
							color: "black",
							backgroundColor: "white",
							borderColor: "black"
						},
						startIcon: /* @__PURE__ */ T(be, {}),
						children: "Extract"
					}),
					/* @__PURE__ */ T(t, { sx: { flexGrow: 1 } }, "spacer"),
					/* @__PURE__ */ T(N, {
						api: l.api,
						endpoint: "reject",
						sx: { backgroundColor: "red" },
						variant: "contained",
						get_args: m,
						callback: () => {
							o(!0);
						},
						children: "Reject"
					}),
					/* @__PURE__ */ T(N, {
						api: l.api,
						sx: { backgroundColor: "green" },
						variant: "contained",
						endpoint: "approve",
						get_args: m,
						callback: () => {
							f(!1);
						},
						hidden: a,
						children: "Approve"
					})
				],
				title: p,
				...i.row
			},
			handleRefreshGrid: async () => await xt(e),
			api: l.api,
			id: i.id
		});
	};
}, wt = ({ api: e, endpoint: t, row_details: n, refKey: r, register_component: i = !1, toolbar: a = !1, checkbox_select: o = !1 }) => {
	let s = Z(r, i), c = k(null), [, l] = A(!1), [u, d] = A({
		page: 0,
		pageSize: 5
	}), [f, p] = A(0), m = se(), h = () => {
		c.current && p(c.current.row_count), l((e) => !e);
	};
	return c.current ||= {
		gridRef: m,
		index: 0,
		headers: [],
		headers_ri: {},
		rows: [],
		row_count: 0,
		datasource: yt(c, h),
		paginationModel: {
			page: 0,
			pageSize: 5
		},
		args: {},
		selected_data: [],
		selected_ids: null,
		refresh: h,
		filter_model: null,
		api: e,
		row_details: n,
		fetch_params: null,
		endpoint: t,
		modal_title: null
	}, O(() => (s(c.current), () => s(null)), [s]), /* @__PURE__ */ T(ae, {
		apiRef: m,
		disableVirtualization: !0,
		rowCount: f,
		sx: {
			width: "80hv",
			"& .MuiDataGrid-columnHeader[data-field=\"edit\"]": {
				position: "sticky",
				right: 0,
				backgroundColor: "black !important",
				color: "white",
				zIndex: 3
			},
			"& .MuiDataGrid-cell[data-field=\"edit\"]": {
				position: "sticky",
				right: 0,
				backgroundColor: "white",
				zIndex: 2,
				boxShadow: "-4px 0px 4px -2px rgba(0,0,0,0.1)"
			},
			"& .MuiDataGrid-main": { overflow: "auto" },
			"& .MuiDataGrid-cell--pinnedRight": {
				boxShadow: "-2px 0px 4px rgba(0,0,0,0.1)",
				backgroundColor: "#fff"
			},
			"& .MuiDataGrid-columnHeader--pinnedRight": {
				backgroundColor: "black",
				color: "white"
			},
			"& .MuiDataGrid-columnHeaders div[role=\"row\"]": {
				backgroundColor: "black !important",
				color: "white"
			},
			"& .MuiDataGrid-columnHeader": {
				backgroundColor: "black !important",
				color: "white"
			},
			"& .MuiDataGrid-filler": { backgroundColor: "black !important" },
			"& .MuiDataGrid-iconButtonContainer": { color: "white" },
			"& .MuiDataGrid-menuIcon": { color: "white" },
			"& .MuiDataGrid-columnSeparator": { color: "#333" }
		},
		columns: ut(c),
		dataSource: Q(c),
		pageSizeOptions: [
			5,
			10,
			25,
			50,
			100
		],
		paginationModel: u,
		onPaginationModelChange: (e) => {
			d(e);
		},
		onRowSelectionModelChange: (e) => St(c)(e),
		paginationMode: "server",
		sortingMode: "server",
		filterMode: "server",
		autosizeOnMount: !0,
		autosizeOptions: {
			includeOutliers: !0,
			includeHeaders: !0
		},
		checkboxSelection: o,
		showToolbar: a,
		getRowId: (e) => e.id,
		onDataSourceError: (e) => {
			console.error("DataGrid Error Type:", e.name), console.error("DataGrid Error Message:", e.message), e.cause && (console.group("Original Error Cause"), console.error("Message:", e.cause.message), console.error("Stack:", e.cause.stack), console.groupEnd()), e instanceof oe ? console.warn("Fetch failed. Check your API mock or network.") : console.warn("Row update failed.");
		}
	});
}, Tt = ({ loading: e, value: n }) => /* @__PURE__ */ T(t, {
	sx: {
		position: "relative",
		display: "inline-flex"
	},
	children: /* @__PURE__ */ E(f, {
		position: "end",
		children: [e && /* @__PURE__ */ T(r, {
			sx: { color: "#ff0000" },
			variant: "determinate",
			value: n
		}), /* @__PURE__ */ T(t, {
			sx: {
				top: 0,
				left: 0,
				bottom: 0,
				right: 0,
				position: "absolute",
				display: "flex",
				alignItems: "center",
				justifyContent: "center"
			},
			children: /* @__PURE__ */ T(S, {
				variant: "caption",
				component: "div",
				sx: { color: "text.secondary" },
				children: `${Math.round(n)}%`
			})
		})]
	})
}), Et = ({ ...e }) => /* @__PURE__ */ T(u, {
	...e,
	children: /* @__PURE__ */ T(we, {})
}), Dt = (e, t) => {
	let n = e.current;
	n && (n.setProgressValue(t), n.progressValue = t, e.current = n);
}, Ot = (e) => !e || !e.current ? 1 : e.current.progressValue, kt = (e, t) => {
	let n = e.current;
	n && n.handleToggle(t);
}, At = ({ refKey: e, register_component: t, hidden: n, onDropSuccess: r, onSend: i, textFieldSx: a, textFieldProps: o, sendButtonProps: s }) => {
	let [c, l] = A(""), [d, p] = A(!1), [m, h] = A(0), g = Z(e, t), _ = k({
		handleToggle: (e) => {
			p(e);
		},
		progressValue: 0,
		setProgressValue: h
	}), { getRootProps: v, getInputProps: y, open: x, isDragActive: S } = Se({
		onDrop: ne((e) => {
			if (e.length > 0) {
				let t = _.current;
				p(!0), t.setProgressValue = h, r(_, e), _.current = t;
			}
		}, [r]),
		noClick: !0,
		noKeyboard: !0,
		multiple: !1
	});
	O(() => (g(_.current), () => g(null)), [g]);
	let { ref: C, ...w } = v(), ee = d ? /* @__PURE__ */ T(Tt, {
		loading: !0,
		value: m
	}) : /* @__PURE__ */ T(Et, {
		onClick: i,
		sx: { color: m === 100 ? "red" : "inherit" },
		...s
	});
	return /* @__PURE__ */ T(b, {
		variant: "outlined",
		value: c,
		onChange: (e) => {
			let t = e.target.value;
			/^[0-9,]*$/.test(t) && l(t);
		},
		placeholder: "3186815,3192062,3107146,3192072....",
		slotProps: {
			htmlInput: { inputMode: "numeric" },
			input: {
				...w,
				inputRef: C,
				startAdornment: /* @__PURE__ */ E(f, {
					position: "start",
					children: [/* @__PURE__ */ T("input", { ...y() }), /* @__PURE__ */ T(u, {
						onClick: x,
						children: /* @__PURE__ */ T(Ce, {})
					})]
				}),
				endAdornment: ee
			}
		},
		sx: {
			width: "100%",
			backgroundColor: S ? "action.hover" : "inherit",
			"& .MuiOutlinedInput-root": { transition: "background-color 0.2s" },
			display: n ? "none" : "flex",
			...a
		},
		...o
	});
}, jt = ({ api: e, title: t, grid_endpoint: n, row_details: r, buttons: i, refKey: a, register_component: o }) => {
	let s = i?.map((e) => e);
	return /* @__PURE__ */ E(g, {
		direction: "column",
		gap: 2,
		sx: { width: "100%" },
		children: [/* @__PURE__ */ E(g, {
			justifyContent: "space-between",
			alignItems: "center",
			direction: "row",
			children: [/* @__PURE__ */ T(S, {
				sx: {
					whiteSpace: "nowrap",
					overflow: "hidden",
					textOverflow: "ellipsis"
				},
				children: t
			}), /* @__PURE__ */ T(g, {
				direction: "row",
				gap: 1,
				sx: {
					justifyContent: "flex-end",
					width: "20%"
				},
				children: s
			})]
		}), /* @__PURE__ */ T(wt, {
			api: e,
			endpoint: n,
			row_details: r,
			refKey: a,
			register_component: o
		})]
	});
}, Mt = ({ children: e }) => /* @__PURE__ */ E(t, {
	sx: { width: "100%" },
	children: [
		/* @__PURE__ */ T(j, {}),
		e,
		/* @__PURE__ */ T(M, {})
	]
}), $ = ({ children: e }) => {
	let t = k({}), n = ie(() => ({
		register: (e, n) => {
			t.current[e] = n;
		},
		unregister: (e) => {
			delete t.current[e];
		},
		get: (e) => t.current[e] || null,
		registry: () => t.current
	}), []);
	return /* @__PURE__ */ T(Y.Provider, {
		value: n,
		children: e
	});
}, Nt = ({ children: e }) => /* @__PURE__ */ T($, { children: /* @__PURE__ */ T(Mt, { children: /* @__PURE__ */ T(g, {
	direction: "column",
	gap: 2,
	alignItems: "center",
	sx: { width: "100%" },
	children: e
}) }) });
//#endregion
export { J as AddElement, ze as Api, N as ApiButton, Ee as CenteredContainer, P as CenteredModal, Ge as Close, yt as DataSourceWrapper, $e as DeleteLabel, q as GetContainer, Q as GetDatasource, Qe as GetElementIndex, Ze as GetElementTypes, Xe as GetElementValue, Je as GetElements, ot as GetEndpoint, vt as GetFetchParams, ut as GetHeaders, dt as GetPaginationModel, Ot as GetProgressValue, lt as GetRows, qe as GetSet, jt as GridWithButtons, Nt as HFCenteredLayout, Be as HandleGet, Mt as HeaderFooterLayout, We as InitialTypeFormBuilderRefState, I as IsNullOrUndefined, F as IsPrimitive, Ct as ModalCellRendererWrapper, Tt as ProgressAdornment, Y as RefIndexContext, $ as RefProvider, xt as Refresh, He as SelectAssociation, Et as SendIconButton, ft as SetArgs, K as SetContainer, at as SetEndpoint, _t as SetFetchParams, ht as SetFilterModel, Ke as SetHandleClose, st as SetHeadersFromJson, kt as SetLoading, pt as SetOrAddArgs, gt as SetPaginationModel, Dt as SetProgressValue, ct as SetRowsFromJson, bt as SetSearch, St as SetSelectedRows, mt as SetSortModel, L as TitleCase, et as TypeFormBuilder, j as UIAppBar, M as UIBottomNav, At as UIInput, wt as UITable, Ye as UpdateElementValues, Z as useConditionalRef, tt as useManagedRef, X as useRefIndex };
