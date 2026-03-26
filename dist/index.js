import { AppBar as e, Box as t, Button as n, CircularProgress as r, Container as i, CssBaseline as a, Dialog as o, DialogActions as s, DialogContent as c, DialogTitle as l, FormControl as u, IconButton as d, Input as f, InputAdornment as p, InputLabel as m, Paper as h, Select as g, Stack as _, Switch as v, TextField as y, ThemeProvider as b, Toolbar as x, Typography as S, createTheme as C } from "@mui/material";
import w from "@mui/icons-material/BugReport";
import { Fragment as T, jsx as E, jsxs as D } from "react/jsx-runtime";
import ee, { createContext as te, useCallback as ne, useContext as re, useEffect as O, useLayoutEffect as k, useMemo as ie, useRef as A, useState as j } from "react";
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
var Te = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), M = () => /* @__PURE__ */ E(e, {
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
	children: /* @__PURE__ */ D(x, {
		disableGutters: !0,
		children: [
			/* @__PURE__ */ E(t, {
				component: "img",
				sx: {
					height: 20,
					marginRight: 2
				},
				alt: "Logo",
				src: "/logo.png"
			}),
			/* @__PURE__ */ E(S, {
				variant: "h6",
				component: "div",
				sx: { flexGrow: 1 },
				children: "HTS Product Classification"
			}),
			/* @__PURE__ */ E(d, {
				size: "small",
				sx: { color: "white" },
				onClick: () => console.log("Debug Clicked"),
				children: /* @__PURE__ */ E(w, { fontSize: "small" })
			})
		]
	})
}), N = () => /* @__PURE__ */ E(t, {
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
	children: /* @__PURE__ */ E(i, { maxWidth: "sm" })
}), P = ({ api: e, endpoint: t, children: r, get_args: i, fetch_params: a, callback: o, ...s }) => /* @__PURE__ */ E(n, {
	onClick: async () => {
		try {
			let n = {};
			i && (n = i());
			let r = { method: "GET" };
			a && (r = {
				...r,
				...a()
			});
			let s = await e?.at("/" + t, {
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
}), Ee = ({ children: e, sx: n = {} }) => /* @__PURE__ */ E(t, {
	sx: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		minHeight: "100vh",
		...n
	},
	children: /* @__PURE__ */ E(_, {
		direction: "column",
		sx: { width: "100%" },
		children: e
	})
}), F = ({ title: e, body: t, show: n, footer: r, title_sx: i, footer_sx: a, content_sx: u, paper_sx: d }) => /* @__PURE__ */ D(o, {
	open: n,
	maxWidth: "lg",
	fullWidth: !0,
	scroll: "paper",
	slotProps: { paper: { sx: {
		maxHeight: "70vh",
		display: "flex",
		flexDirection: "column",
		...d
	} } },
	"aria-labelledby": "centered-modal-title",
	children: [
		/* @__PURE__ */ E(l, {
			id: "centered-modal-title",
			sx: { ...i },
			children: e
		}),
		/* @__PURE__ */ E(c, {
			dividers: !0,
			sx: { ...u },
			children: t
		}),
		/* @__PURE__ */ E(s, {
			sx: a,
			children: r
		})
	]
}), I = (e) => {
	if (e === null) return !0;
	let t = typeof e;
	return t === "string" || t === "number" || t === "boolean" || t === "undefined" || t === "symbol" || t === "bigint" || t === "int";
}, L = (e) => e == null, R = (e, t) => L(e) ? "" : e.split(t).map((e) => e.charAt(0).toUpperCase() + e.slice(1)).join(" "), z = "Values", B = "Containers", V = (e, t, n, r) => {
	let i = r || {
		[z]: /* @__PURE__ */ new Map(),
		[B]: /* @__PURE__ */ new Map()
	}, a = e ? t : "root", o = {
		parent: e,
		path: a,
		value: n,
		children: [],
		root: e ? e.root : null,
		containerIndex: i
	};
	return e || (o.root = o), i[z].set(a, n), i[B].set(a, o), Object.freeze(o);
}, H = (e, t, n) => {
	let r = V(e, t, n, e.containerIndex);
	return {
		...e,
		children: [...e.children, r]
	};
}, U = (e, t) => e.containerIndex[B].get(t), De = (e, t) => {
	for (let [n, r] of e.containerIndex[z].entries()) t(n, r);
}, Oe = (e, t) => {
	for (let [, n] of e.containerIndex[B].entries()) t(n);
}, ke = (e, t, n = 2) => {
	De(e, (e, r) => {
		let i = Object.keys(r);
		for (let a = 0; a < i.length; a++) {
			let o = e.split(".");
			o.push(i[a]);
			let s = o.slice(2).join("."), c = r[i[a]];
			o.length > n && I(c) && t({
				i: a,
				value: c,
				path: s,
				fullpath: o.join("."),
				key: e,
				containerValue: r
			});
		}
	});
}, Ae = (e, t, n, r) => {
	if (!e || !t) return e;
	let i = e.containerIndex[B].get(t);
	if (!i) return console.warn(`Container at path "${t}" not found.`), e;
	let a = {};
	a[n] = r;
	let o = {
		...i.value,
		...a
	}, s = V(i.parent, i.path, o, e.containerIndex);
	e.containerIndex[B].set(t, s), e.containerIndex[z].set(t, o);
	let c = s;
	for (; c.parent;) {
		let t = c.parent, n = t.children.map((e) => e.path === c.path ? c : e), r = c.path.split("."), i = r.slice(r.length - 1), a = { ...e.containerIndex[z].get(t.path) };
		a[i] = o;
		let s = Object.freeze({
			...t,
			children: n,
			value: a
		});
		e.containerIndex[B].set(s.path, s), c = s;
	}
	return e.containerIndex[B].get("root");
}, je = (e = null, t = [], n = "_", ...r) => {
	e === null && (e = V(null, "root", r.length === 0 ? {} : r[0]), t = ["root"]);
	let i = (e, t) => {
		let r = e.value;
		return typeof r == "object" && r && (Array.isArray(r) ? r.forEach((r, a) => {
			if (typeof r == "object" && r) {
				let o = [...t, String(a)];
				i(H(e, o.join(n), r).children.at(-1), o);
			}
		}) : Object.entries(r).forEach(([r, a]) => {
			if (typeof a == "object" && a) {
				let o = [...t, r];
				i(H(e, o.join(n), a).children.at(-1), o);
			}
		})), e;
	};
	return i(e, t);
}, Me = ({ inputKey: e, inputProps: t }) => {
	let n = Object.keys(t.defaultValue)[0], r = t.defaultValue[n], [i, a] = j(/* @__PURE__ */ E(u, {
		type: "text",
		onChange: t.onChange,
		defaultValue: r
	})), o = (e, n) => {
		a(ee.cloneElement(i, {
			...t,
			defaultValue: r,
			name: e + "." + n
		}));
	}, [s, c] = j(/* @__PURE__ */ E(u, {
		type: "text",
		...t,
		defaultValue: n,
		onChange: (t) => o(e, t.target.value)
	}));
	return O(() => {
		o(e, n);
	}, []), /* @__PURE__ */ D(_, {
		direction: "horizontal",
		gap: 2,
		children: [s, i]
	});
}, Ne = ({ fileData: e, onChange: t, name: n }) => {
	let [r] = fe(), i = A("");
	return O(() => {
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
	}, [e, r]), O(() => r.registerUpdateListener(({ editorState: e }) => {
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
}, Pe = ({ fileData: e, subtype: n, inputProps: r }) => /* @__PURE__ */ E(t, {
	sx: { width: "100%" },
	children: /* @__PURE__ */ E(h, {
		variant: "outlined",
		sx: {
			p: 2,
			minHeight: "200px",
			position: "relative"
		},
		children: /* @__PURE__ */ D(ce, {
			initialConfig: {
				namespace: "MyEditor",
				nodes: [ge, _e],
				theme: {},
				onError: (e) => console.error("Lexical Error:", e),
				editable: n !== 0
			},
			children: [/* @__PURE__ */ E(le, {
				contentEditable: /* @__PURE__ */ E(ue, { style: {
					outline: "none",
					minHeight: "170px"
				} }),
				placeholder: /* @__PURE__ */ E("div", {
					style: {
						position: "absolute",
						top: 20,
						left: 20,
						color: "#aaa"
					},
					children: "Enter text..."
				}),
				ErrorBoundary: de
			}), /* @__PURE__ */ E(Ne, {
				fileData: e,
				onChange: r.onChange,
				name: r.name
			})]
		})
	})
}), Fe = (/* @__PURE__ */ Te(((e, t) => {
	t.exports = {};
})))(), Ie = async (e) => {
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
}, Le = (e) => {
	e = atob(e);
	let t = new ArrayBuffer(e.length), n = new Uint8Array(t);
	for (let t = 0; t < e.length; t++) n[t] = e.charCodeAt(t);
	return n;
}, Re = "data:image/#{encoding};base64,#{data}", ze = ({ data: e, encoding: t, alt: n }) => {
	let r = Re, [i, a] = j(void 0);
	return L(t) && (t = "png"), L(n) && (n = "ERROR"), Ie(new Blob([Le(e)])).then((e) => {
		r = r.replace("#{encoding}", t), r = r.replace("#{data}", Fe.Buffer.from(e).toString("base64")), a(r);
	}), /* @__PURE__ */ E(ve, {
		src: i,
		fluid: !0,
		alt: n
	});
}, Be = (e) => {
	let t = "", n = Object.keys(e).map((t) => {
		let n = e[t];
		return L(n) ? "" : `${encodeURIComponent(t)}=${encodeURIComponent(n)}`;
	}).filter((e) => e !== "").join("&");
	if (n) {
		let e = t.indexOf("#");
		e !== -1 && (t = t.slice(0, e)), t += (t.indexOf("?") === -1 ? "?" : "&") + n;
	}
	return t;
}, Ve = (e, { baseHeaders: t, handleErr: n, handleFinally: r, debug: i } = {}) => {
	let a = {
		"Content-Type": "application/json",
		...t
	}, o = (e) => {
		console.log(e);
	}, s = ({ endpoint: t, inputHeaders: s, fetchParams: c, args: l }) => {
		L(t) && (t = "");
		let u = e + t, d = {
			method: "GET",
			headers: {
				...a,
				...s
			},
			...c
		};
		return L(l) || (d.method === "POST" && (d.body = JSON.stringify(l)), d.method === "GET" && (u += Be(l))), fetch(u, d).catch((e) => n(e)).finally(() => {
			i && o({
				endpoint: t,
				inputHeaders: s,
				fetchParams: c
			}), !L(r) && r({
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
Ve("http://localhost:8080/", {
	handleErr: (e) => console.log(e),
	debug: !0
});
//#endregion
//#region src/utility/api.js
var He = ({ endpoint: e, handleErr: t }) => {
	L(t) && (t = (e) => console.log(e));
	let n = Ve(e, { handleErr: t });
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
}, Ue = (e, t) => () => e.get(t), We = ({ jsxKey: e, endpoint: t, inputProps: n }) => {
	let [r, i] = j([/* @__PURE__ */ E("option", {
		value: n.defaultValue,
		children: n.defaultValue
	}, e + "-" + n.defaultValue)]), a = He({ endpoint: t });
	return O(() => {
		a.selectOptions().then((t) => {
			i(Object.keys(t).map((n) => {
				let r = t[n][Object.keys(t[n])[1]], i = t[n][Object.keys(t[n])[0]];
				return /* @__PURE__ */ E("option", {
					value: i,
					children: r
				}, e + "-" + n);
			}));
		});
	}, []), /* @__PURE__ */ E(g, {
		...n,
		defaultValue: n.defaultValue,
		children: [...r || /* @__PURE__ */ E(T, {})]
	}, e);
}, Ge = ({ jsxKey: e, key: t, inputProps: n }) => {
	let r;
	return t.charAt(t.length - 1) === "D" && t.charAt(t.length - 2) === "I" || t.charAt(t.length - 1) === "S" && t.charAt(t.length - 2) === "D" ? (t.charAt(t.length - 1) === "D" && t.charAt(t.length - 2) === "I" && (r = t.slice(5, t.length - 2)), t.charAt(t.length - 1) === "S" && t.charAt(t.length - 2) === "D" && (r = t.slice(5, t.length - 3), n = {
		...n,
		multiple: !0
	}), /* @__PURE__ */ E(We, {
		endpoint: r,
		jsxKey: e,
		inputProps: n
	})) : null;
}, Ke = () => ({ formRef: e, jsxKey: t, key: n, currentType: r, inputProps: i }) => {
	let a = Ge({
		jsxKey: t,
		key: n,
		inputProps: i
	});
	if (!L(a)) return a;
	if (a = /* @__PURE__ */ E(f, {
		type: "text",
		...i
	}, t), r === "number" || r === "bigint") return /* @__PURE__ */ E(f, {
		type: "number",
		...i
	}, t);
	if (r === "boolean") return /* @__PURE__ */ E(v, {
		...i,
		defaultChecked: i.defaultValue
	}, t);
	if (r === "object") {
		if (i.defaultValue.Subtype === 19) return /* @__PURE__ */ E($, { data: U(G(e), n.slice(0, n.lastIndexOf(".")))?.value.Data });
		if (i.defaultValue.Subtype === 17) return /* @__PURE__ */ E(ze, { data: U(G(e), n.slice(0, n.lastIndexOf(".")))?.value.Data }, t);
		if (i.defaultValue.Subtype === 16 || i.defaultValue.Subtype === 0) {
			let r = U(G(e), n.slice(0, n.lastIndexOf(".")));
			return i.name = n.slice(0, n.lastIndexOf(".")) + ".Data", /* @__PURE__ */ E(Pe, {
				fileData: JSON.stringify(r?.value.Data, null, 2),
				inputProps: i,
				subtype: i.defaultValue.Subtype
			}, t);
		}
		if (i.defaultValue.Subtype === 18) {
			let r = U(G(e), n.slice(0, n.lastIndexOf(".")));
			return i.name = n.slice(0, n.lastIndexOf(".")) + ".Data", /* @__PURE__ */ E(Pe, {
				fileData: r?.value.Data,
				inputProps: i,
				subtype: i.defaultValue.Subtype
			}, t);
		}
		if (!L(i.defaultValue.Subtype) || !L(i.defaultValue.Data)) return null;
		if (Array.isArray(i.defaultValue)) return Object.keys(i.defaultValue).map((e) => /* @__PURE__ */ E(f, {
			type: "text",
			...i,
			defaultValue: i.defaultValue[e]
		}, t));
		if (L(i.defaultValue)) return;
		let r = Object.keys(i.defaultValue)[0];
		return typeof i.defaultValue[r] == "object" ? null : /* @__PURE__ */ E(Me, {
			inputKey: n,
			inputProps: i
		});
	}
	return a;
}, qe = (e, t = {}) => ({
	index: 0,
	elements: {},
	nameIndex: {},
	labels: {},
	useLabels: {},
	element_component: {},
	container: void 0,
	handleOnClose: void 0,
	elementSelector: e || Ke(),
	context: t
}), Je = (e) => {
	e.current.handleOnClose();
}, Ye = (e, t) => {
	let n = e.current;
	n.handleClose = t, e.current = n;
}, W = (e, t) => {
	let n = e.current;
	L(n) || (n.container = t), e.current = n;
}, G = (e) => e.current.container, Xe = (e, n) => {
	let r = e.current, i = r.labels[n], a = r.element_component[n];
	return r.useLabels[r.index] ? /* @__PURE__ */ D(_, {
		direction: "column",
		spacing: 1,
		sx: {
			width: "100%",
			pb: 1
		},
		children: [/* @__PURE__ */ E(t, {
			sx: { width: "100%" },
			children: i
		}), /* @__PURE__ */ E(t, {
			sx: { width: "100%" },
			children: a
		})]
	}, n) : /* @__PURE__ */ D(_, {
		direction: "row",
		gap: 1,
		sx: {
			justifyContent: "space-between",
			width: "100%",
			borderBottom: "1px solid rgba(0, 0, 0, 0.42)",
			pb: .5,
			alignItems: "flex-end"
		},
		children: [/* @__PURE__ */ E(t, {
			sx: {
				width: "50%",
				flexShrink: 0
			},
			children: i
		}), /* @__PURE__ */ E(t, {
			sx: { flexGrow: 1 },
			children: a
		})]
	}, n);
}, Ze = (e) => {
	let t = {};
	return Object.keys(e.current.nameIndex).map((n, r) => {
		t[n] = Xe(e, r);
	}), /* @__PURE__ */ E(_, {
		direction: "column",
		gap: 0,
		children: Object.keys(t).map((e) => t[e])
	});
}, Qe = (e) => {
	let t = e.current;
	return { onChange: (n) => {
		let r = n.target.value, i = n.target.selectedOptions;
		if (!L(i)) {
			let e = [].slice.call(i);
			r = e.map((e) => e.value), e.length === 1 && (r = r[0]);
		}
		n.target.type === "datetime-local" && (r = new Date(Date.parse(r)).toISOString());
		let a = n.target.name, o = t.nameIndex[a];
		L(o) && (t.nameIndex[a] = t.index, o = t.index, e.current = t), t.elements[o] = r;
		let s = a.split("."), c = s.slice(0, s.length - 1).join("."), l = s.slice(s.length - 1);
		L(U(G(e), c)) && (c = s.slice(0, s.length - 2).join(".")), n.target.type === "checkbox" && (r = n.currentTarget.checked), e.current = t, W(e, Ae(G(e), c, l, r)), e.current = t;
	} };
}, $e = (e, t) => {
	let n = e.current, r = n.nameIndex[t];
	return n.elements[r];
}, et = (e, t, n) => {
	let r = typeof n, i = e.current, a = t + i.index, o = {
		name: t,
		defaultValue: $e(e, t),
		onChange: Qe(e).onChange,
		sx: { width: "100%" }
	};
	return i.elementSelector({
		key: t,
		formRef: e,
		jsxKey: a,
		currentType: r,
		inputProps: o
	});
}, K = (e, t, n) => {
	let r = e.current, i = R(t.replace(/root\./, ""), "_"), a = i.split(".");
	if (!a.some((e) => e.toLowerCase() === "data")) {
		if (L(r.nameIndex[t])) {
			r.nameIndex[t] = r.index, r.elements[r.index] = n;
			let o = et(e, t, n);
			if (!L(o)) {
				let e = a[a.length - 1], n = e.toLowerCase() === "subtype", s = /^\d+$/.test(e), c = i;
				n && a.length > 1 && (c = a[a.length - 2]), r.useLabels[r.index] = n ? !0 : !s, r.labels[r.index] = /* @__PURE__ */ E(m, {
					column: t,
					children: c
				}, "Label" + t + r.index), r.element_component[r.index] = o, r.index++;
			}
		}
		e.current = r;
	}
}, tt = (e, t) => e.current.nameIndex[t], nt = (e, t) => {
	let n = e.current;
	delete n.labels[tt(e, t)], e.current = n;
}, rt = ({ formRef: e, container: t }) => {
	Oe(t, (t) => {
		let n = t.path, r = t.value;
		if (Array.isArray(r)) {
			let t = [];
			Object.keys(r).forEach((e) => {
				L(r[e]) || Array.isArray(r[e]) || t.push(r[e]);
			}), t.length > 0 && K(e, n, t);
			return;
		}
		Object.keys(r).forEach((t) => {
			L(r[t]) || (typeof r[t] == "object" && Object.keys(r[t]).forEach((i) => {
				let a = {};
				a[i] = r[t][i], K(e, n + "." + t + "." + i, a);
			}), I(r[t]) && K(e, n + "." + t, r[t]));
		});
	});
}, q = te(null), J = () => re(q), it = (e) => {
	let t = J();
	return (n) => {
		n ? t?.register(e, n) : t?.unregister(e);
	};
}, Y = (e, t = !0) => {
	let n = J();
	return (r) => {
		t && r ? n?.register(e, r) : n?.unregister(e);
	};
}, at = ({ title: e, getSchema: n, handleSave: r, elementSelector: i, footerButtons: a, refKey: o, register_component: s = !1 }) => {
	let c = Y(o, s), l = A(null), [u, f] = j(!1), p = () => {
		f(!1);
	};
	l.current ||= qe(i, { setShow: (e) => {
		f(e);
	} }), k(() => (c(l.current), () => c(null)), [c]);
	let [m, h] = j(void 0), [g, v] = j(0);
	return a ||= [], /* @__PURE__ */ D(_, {
		direction: "row",
		gap: 3,
		children: [/* @__PURE__ */ E(d, {
			onClick: async () => {
				try {
					W(l, je(null, [], ".", await n())), Ye(l, p), rt({
						formRef: l,
						container: G(l)
					}), h(Ze(l)), f(!0);
				} catch (e) {
					console.error("Failed to load schema:", e);
				}
			},
			children: /* @__PURE__ */ E(ye, { sx: { color: "red" } })
		}), /* @__PURE__ */ E(F, {
			title: e,
			body: /* @__PURE__ */ D(t, {
				sx: { width: "100%" },
				children: [g === 0 && /* @__PURE__ */ E(t, {
					sx: {
						borderBottom: 1,
						borderColor: "divider",
						width: "100%"
					},
					children: m
				}), g === 1 && /* @__PURE__ */ E(t, {
					sx: { p: 3 },
					children: /* @__PURE__ */ E("pre", { children: JSON.stringify(G(l)?.value, null, 2) })
				})]
			}),
			show: u,
			footer: a,
			title_sx: {
				background: "black",
				color: "white"
			}
		})]
	});
}, ot = ({ title: e, show: t, onCancel: r, onConfirm: i }) => /* @__PURE__ */ E(F, {
	title: e || "Are you sure?",
	show: t,
	footer: /* @__PURE__ */ D(_, {
		direction: "column",
		gap: 3,
		children: [/* @__PURE__ */ E(n, {
			onClick: () => {
				L(r) || r();
			},
			children: "Cancel"
		}), /* @__PURE__ */ E(n, {
			onClick: () => {
				L(i) || i();
			},
			children: "Confirm"
		})]
	})
}), st = ({ refreshGrid: e, api: t }) => /* @__PURE__ */ E(at, {
	title: "Create",
	getSchema: t.schema,
	handleSave: (n) => {
		t.create(n).then(() => e());
	}
}), ct = ({ refreshGrid: e, api: t, id: n, title: r, footerButtons: i }) => /* @__PURE__ */ E(at, {
	title: r,
	button_title: "Update",
	getSchema: Ue(t, n),
	handleSave: (r) => {
		t.update(r, n).then(() => e());
	},
	footerButtons: i,
	register_component: !0,
	refKey: "update_modal"
}), lt = ({ refreshGrid: e, api: t, handleSelectedIds: r }) => {
	let [i, a] = j(!1);
	return /* @__PURE__ */ D(_, {
		direction: "horizontal",
		gap: 2,
		children: [/* @__PURE__ */ E(n, {
			onClick: () => {
				a(!i);
			},
			children: "Delete"
		}), /* @__PURE__ */ E(ot, {
			onConfirm: () => {
				t.deleteIds(r()).then(e()), a(!1);
			},
			show: i
		})]
	});
}, ut = ({ refreshGrid: e, api: t, id: r }) => {
	let [i, a] = j(!1);
	return /* @__PURE__ */ D(_, {
		direction: "row",
		gap: 3,
		children: [/* @__PURE__ */ E(n, {
			onClick: () => {
				a(!i);
			},
			children: "Delete"
		}), /* @__PURE__ */ E(ot, {
			onConfirm: () => {
				t.deleteId(r).then(e());
			},
			show: i
		})]
	});
}, dt = ({ handleRefreshGrid: e, api: t, id: n, params: r }) => /* @__PURE__ */ E(_, {
	direction: "row",
	gap: 1,
	children: /* @__PURE__ */ E(ct, {
		...r,
		refreshGrid: e,
		api: t,
		id: n
	})
}), ft = (e, t) => {
	let n = e.current;
	n && (n.endpoint = t);
}, pt = (e) => e.current.endpoint, mt = (e, t) => {
	let n = e.current;
	ke(t, (e) => {
		let t = e.value, r = e.path, i = typeof t;
		if (n.headers_ri[r] !== void 0) return;
		let a = "string";
		i === "number" ? a = "number" : r.toLowerCase().includes("date") || r.toLowerCase().includes("modified") ? a = "date" : i === "string" && (a = "string"), n.headers[n.index] = {
			field: r,
			type: a,
			headerName: r
		}, n.rows[n.index] = [], n.headers_ri[r] = n.index, n.index++;
	}), e.current = n;
}, ht = (e) => {
	let t = e.current;
	t && (t.index = 0, t.headers = [], t.rows = [], t.headers_ri = {}, ["Field", "Value"].forEach((e) => {
		let n = e;
		t.headers[t.index] = {
			field: n,
			sortable: !0,
			filterable: !0,
			flex: 1,
			minWidth: 250,
			type: "string",
			headerName: e
		}, t.rows[t.index] = [], t.headers_ri[n] = t.index, t.index++;
	}), e.current = t);
}, gt = (e, t) => {
	let n = e.current;
	if (!n) return;
	n.rows = [[], []], n.row_count = 0;
	let r = n.headers_ri.Field, i = n.headers_ri.Value;
	Object.entries(t).forEach(([e, t]) => {
		if (r !== void 0 && n.rows[r].push(R(e, "_")), i !== void 0) {
			let e = Array.isArray(t) ? t.join(", ") : t;
			n.rows[i].push(e);
		}
		n.row_count++;
	}), e.current = n;
}, _t = (e, t) => {
	let n = e.current;
	n && (n.rows = [], n.row_count = 0, n.headers.forEach(() => {
		n.rows.push([]);
	}), ke(t, (e) => {
		if (I(e.value)) {
			let t = n.headers_ri[e.path];
			t !== void 0 && n.rows[t].push(e.value);
		}
	}), e.current = n);
}, vt = (e) => {
	let t = e.current;
	if (!t || !t.rows || t.rows.length === 0) return [];
	let n = t.rows[0].length;
	return Array.from({ length: n }).map((e, n) => {
		let r = {};
		return t.headers.forEach((e, i) => {
			let a = t.rows[i];
			r[e.field] = a ? a[n] : null;
		}), r.Field = r.Field, r;
	});
}, yt = (e) => {
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
}, bt = (e) => {
	let t = e.current;
	return !t || !t.headers ? [] : t.headers;
}, xt = (e) => {
	let t = e.current, n = Object.keys(t.headers_ri).map((e) => ({
		field: e,
		sortable: !0,
		filterable: !0,
		headerName: R(e.split(".").pop(), "_"),
		flex: 2,
		type: "string",
		hideable: !0
	}));
	if (t.row_details) {
		let t = {
			field: "edit",
			headerName: "Details / Approvals",
			sortable: !1,
			filterable: !1,
			flex: 1,
			type: "actions",
			renderCell: Pt(e)
		}, r = Math.max(0, n.length - 1);
		n.splice(r, 0, t);
	}
	return n;
}, St = (e) => e.current.paginationModel, Ct = (e, t) => {
	let n = e.current;
	n && (n.args = t, e.current = n, n.refresh());
}, wt = (e, t) => {
	let n = e.current;
	n && (n.args = {
		...n.args,
		...t
	}, e.current = n, n.refresh());
}, Tt = (e, t) => {
	let n = e.current;
	n && (n.args.sortModel = JSON.stringify(t), e.current = n);
}, Et = (e, t) => {
	let n = e.current;
	n && (n.args.filterModel = JSON.stringify(t), e.current = n);
}, Dt = (e, t) => () => {
	let n = e.current;
	n && (n.paginationModel = t, n.args.paginationModel = JSON.stringify(t), e.current = n);
}, Ot = (e, t) => {
	let n = e.current;
	n && (n.fetch_params = t, e.current = n);
}, X = (e) => e.current.fetch_params, kt = (e, t) => ({ getRows: async (n) => {
	let r = e.current;
	if (!r) return {
		rows: [],
		rowCount: 0
	};
	Et(e, n.filterModel), Tt(e, n.sortModel);
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
		Array.isArray(t) && t.length === 0 || L(t) || (s[e] = t);
	}), L(n.sortModel) || Array.isArray(n.sortModel) && n.sortModel.length === 0 && delete s.sortModel, L(n.filterModel) || Array.isArray(n.filterModel.items) && n.filterModel.items.length === 0 && delete s.filterModel;
	let c = await r.api?.at("/" + r.endpoint, {
		fetchParams: {
			method: "GET",
			...X(e)
		},
		args: s
	}), l = je(null, [], ".", c.results);
	return mt(e, l), _t(e, l), r.row_count = c.pagination?.total || 0, e.current = r, t(), {
		rows: yt(e),
		rowCount: c.pagination?.total || 0
	};
} }), At = (e, t) => {
	let n = e.current;
	n && (n.args.search = t, e.current = n);
}, jt = (e) => e.current?.datasource, Z = async (e) => {
	let t = e.current;
	if (!t) return;
	let n = t.gridRef.current;
	n.dataSource.cache.clear(), await n.dataSource.fetchRows(), t.refresh();
}, Mt = (e) => (t) => {
	let n = e.current;
	if (!n || n.rows.length === 0) return;
	let r = t.ids, i = n.rows[0].length, a = Array.from({ length: i }, (e, t) => t).filter((e) => {
		let t = n.rows[0][e];
		return r.has(t);
	});
	n.selected_data = n.rows.map((e) => a.map((t) => e[t])), n.selected_ids = t, e.current = n;
}, Nt = (e, t) => {
	let n = e.current;
	n && (n.cellRenderer = t, e.current = n);
}, Pt = (e) => {
	let t = e.current;
	if (t) return t.cellRenderer ? t.cellRenderer(e) : Ft(e);
}, Ft = (e) => {
	let r = J();
	return (i) => {
		let [a, o] = j(!1), [s, c] = j(""), l = e.current;
		if (!l) return;
		let u = "white";
		i.row.stage === "rejected" && (u = "red"), i.row.stage === "approved" && (u = "green");
		let f = (e = !1) => {
			let t = r?.get("update_modal")?.context;
			if (!t) return;
			let n = t.setShow;
			n(e);
		}, p = /* @__PURE__ */ D(_, {
			direction: "column",
			justifyContent: "space-between",
			spacing: 2,
			sx: { width: "100%" },
			children: [/* @__PURE__ */ D(_, {
				gap: 3,
				direction: "row",
				children: [
					i.row.item_id,
					/* @__PURE__ */ E(t, {
						sx: {
							backgroundColor: u,
							color: "black",
							borderRadius: 2,
							px: 1.5,
							fontSize: "0.875rem"
						},
						children: i.row.stage
					}),
					/* @__PURE__ */ E(t, { sx: { flexGrow: 1 } }, "spacer"),
					/* @__PURE__ */ E(d, {
						onClick: () => f(!1),
						sx: {
							backgroundColor: "black",
							color: "white"
						},
						children: /* @__PURE__ */ E(xe, {})
					})
				]
			}), /* @__PURE__ */ D(_, {
				gap: 3,
				direction: "row",
				children: [i.row.code, i.row.description]
			})]
		}), m = () => ({
			item_id: i.row.item_id,
			comments: s
		});
		return /* @__PURE__ */ E(dt, {
			params: {
				footerButtons: [
					a && /* @__PURE__ */ E(y, {
						label: "Reason for rejection",
						multiline: !0,
						rows: 4,
						sx: { mb: 2 },
						variant: "outlined",
						fullWidth: !0,
						defaultValue: s,
						onChange: (e) => c(e.target.value)
					}),
					/* @__PURE__ */ E(n, {
						variant: "outlined",
						sx: {
							color: "black",
							backgroundColor: "white",
							borderColor: "black"
						},
						startIcon: /* @__PURE__ */ E(be, {}),
						children: "Extract"
					}),
					/* @__PURE__ */ E(t, { sx: { flexGrow: 1 } }, "spacer"),
					a && /* @__PURE__ */ E(n, {
						onClick: () => o(!1),
						children: "Cancel"
					}),
					!a && /* @__PURE__ */ E(n, {
						sx: { backgroundColor: "red" },
						onClick: () => o(!0),
						children: "Reject"
					}),
					a && /* @__PURE__ */ E(P, {
						api: l.api,
						endpoint: "reject",
						sx: { backgroundColor: "red" },
						variant: "contained",
						get_args: m,
						callback: async () => {
							o(!0), c(""), f(!1), await Z(e);
						},
						children: "Reject"
					}),
					!a && /* @__PURE__ */ E(P, {
						api: l.api,
						sx: { backgroundColor: "green" },
						variant: "contained",
						endpoint: "approve",
						get_args: m,
						callback: async () => {
							f(!1), await Z(e);
						},
						children: "Approve"
					})
				],
				title: p,
				...i.row
			},
			handleRefreshGrid: async () => await Z(e),
			api: l.api,
			id: i.id
		});
	};
}, Q = ({ api: e, endpoint: t, row_details: n, refKey: r, cellRenderer: i, register_component: a = !1, toolbar: o = !1, checkbox_select: s = !1, datagrid_sx: c = void 0, grid_options: l = void 0 }) => {
	let u = Y(r, a), d = A(null), [, f] = j(!1), [p, m] = j({
		page: 0,
		pageSize: 25
	}), [h, g] = j(0), [_, v] = j({ id: !1 }), y = se(), b = () => {
		d.current && g(d.current?.row_count ?? 0), f((e) => !e);
	};
	return d.current ||= {
		gridRef: y,
		index: 0,
		headers: [],
		headers_ri: {},
		rows: [],
		row_count: t ? 0 : void 0,
		datasource: t ? kt(d, b) : void 0,
		paginationModel: {
			page: 0,
			pageSize: 5
		},
		args: {},
		selected_data: [],
		selected_ids: null,
		refresh: b,
		cellRenderer: i,
		filter_model: null,
		api: e,
		row_details: n,
		fetch_params: null,
		endpoint: t,
		register_component: a,
		refKey: r,
		modal_title: null,
		...l
	}, k(() => (u(d.current), () => u(null)), [u]), /* @__PURE__ */ E(ae, {
		apiRef: y,
		disableVirtualization: !0,
		columnVisibilityModel: _,
		onColumnVisibilityModelChange: (e) => v(e),
		rowCount: h,
		sx: {
			width: "100%",
			...c
		},
		columns: xt(d),
		dataSource: jt(d),
		pageSizeOptions: [
			25,
			50,
			100
		],
		paginationModel: p,
		onPaginationModelChange: (e) => {
			m(e);
		},
		onRowSelectionModelChange: (e) => Mt(d)(e),
		paginationMode: "server",
		sortingMode: "server",
		filterMode: "server",
		autosizeOnMount: !0,
		autosizeOptions: {
			includeOutliers: !0,
			includeHeaders: !0
		},
		checkboxSelection: s,
		showToolbar: o,
		getRowId: (e) => e.id,
		onDataSourceError: (e) => {
			console.error("DataGrid Error Type:", e.name), console.error("DataGrid Error Message:", e.message), e.cause && (console.group("Original Error Cause"), console.error("Message:", e.cause.message), console.error("Stack:", e.cause.stack), console.groupEnd()), e instanceof oe ? console.warn("Fetch failed. Check your API mock or network.") : console.warn("Row update failed.");
		},
		...l
	});
}, It = ({ loading: e, value: n }) => /* @__PURE__ */ E(t, {
	sx: {
		position: "relative",
		display: "inline-flex"
	},
	children: /* @__PURE__ */ D(p, {
		position: "end",
		children: [e && /* @__PURE__ */ E(r, {
			sx: { color: "#ff0000" },
			variant: "determinate",
			value: n
		}), /* @__PURE__ */ E(t, {
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
			children: /* @__PURE__ */ E(S, {
				variant: "caption",
				component: "div",
				sx: { color: "text.secondary" },
				children: `${Math.round(n)}%`
			})
		})]
	})
}), Lt = ({ ...e }) => /* @__PURE__ */ E(d, {
	...e,
	children: /* @__PURE__ */ E(we, {})
}), Rt = (e, t) => {
	let n = e.current;
	n && (n.setProgressValue(t), n.progressValue = t, e.current = n);
}, zt = (e) => !e || !e.current ? 1 : e.current.progressValue, Bt = (e, t) => {
	let n = e.current;
	n && n.handleToggle(t);
}, Vt = ({ refKey: e, register_component: t, hidden: n, onDropSuccess: r, onSend: i, textFieldSx: a, textFieldProps: o, sendButtonProps: s }) => {
	let [c, l] = j(""), [u, f] = j(!1), [m, h] = j(0), g = Y(e, t), _ = A({
		handleToggle: (e) => {
			f(e);
		},
		progressValue: 0,
		setProgressValue: h
	}), { getRootProps: v, getInputProps: b, open: x, isDragActive: S } = Se({
		onDrop: ne((e) => {
			if (e.length > 0) {
				let t = _.current;
				f(!0), t.setProgressValue = h, r(_, e), _.current = t;
			}
		}, [r]),
		noClick: !0,
		noKeyboard: !0,
		multiple: !1
	});
	k(() => (g(_.current), () => g(null)), [g]);
	let { ref: C, ...w } = v(), T = u ? /* @__PURE__ */ E(It, {
		loading: !0,
		value: m
	}) : /* @__PURE__ */ E(Lt, {
		onClick: i,
		sx: { color: m === 100 ? "red" : "inherit" },
		...s
	});
	return /* @__PURE__ */ E(y, {
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
				startAdornment: /* @__PURE__ */ D(p, {
					position: "start",
					children: [/* @__PURE__ */ E("input", { ...b() }), /* @__PURE__ */ E(d, {
						onClick: x,
						children: /* @__PURE__ */ E(Ce, {})
					})]
				}),
				endAdornment: T
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
}, Ht = ({ buttons: e, endpoint: t, title: n, title_topology_params: r, button_stack_params: i, ...a }) => {
	let o = e?.map((e) => e);
	return /* @__PURE__ */ D(_, {
		direction: "column",
		gap: 2,
		sx: { width: "100%" },
		children: [/* @__PURE__ */ D(_, {
			justifyContent: "space-between",
			alignItems: "center",
			direction: "row",
			children: [/* @__PURE__ */ E(S, {
				variant: "h6",
				sx: {
					m: 2,
					whiteSpace: "nowrap",
					overflow: "hidden",
					textOverflow: "ellipsis"
				},
				...r,
				children: n
			}), /* @__PURE__ */ E(_, {
				direction: "row",
				gap: 2,
				sx: {
					pr: 16,
					pl: 16,
					justifyContent: "flex-end",
					width: "20%"
				},
				...i,
				children: o
			})]
		}), /* @__PURE__ */ E(Q, {
			...a,
			endpoint: t
		})]
	});
}, Ut = ({ children: e }) => /* @__PURE__ */ D(t, {
	sx: { width: "100%" },
	children: [
		/* @__PURE__ */ E(M, {}),
		e,
		/* @__PURE__ */ E(N, {})
	]
}), Wt = ({ children: e }) => {
	let t = A({}), n = ie(() => ({
		register: (e, n) => {
			t.current[e] = n;
		},
		unregister: (e) => {
			delete t.current[e];
		},
		get: (e) => t.current[e] || null,
		registry: () => t.current
	}), []);
	return /* @__PURE__ */ E(q.Provider, {
		value: n,
		children: e
	});
}, Gt = C({
	shape: { borderRadius: 8 },
	typography: {
		fontFamily: "Inter, Arial, sans-serif",
		allVariants: { fontFamily: "Inter, Arial, sans-serif" }
	},
	components: {
		MuiButton: { styleOverrides: { root: {
			textTransform: "capitalize",
			borderRadius: 12
		} } },
		MuiOutlinedInput: { styleOverrides: { root: { borderRadius: 8 } } }
	}
}), Kt = ({ children: e, theme: t }) => {
	let n = Gt;
	return t || (n = Gt), /* @__PURE__ */ E(Wt, { children: /* @__PURE__ */ D(b, {
		theme: n,
		children: [/* @__PURE__ */ E(a, {}), /* @__PURE__ */ E(Ut, { children: /* @__PURE__ */ E(_, {
			direction: "column",
			gap: 2,
			alignItems: "center",
			sx: { width: "100%" },
			children: e
		}) })]
	}) });
}, qt = () => {
	let e = {
		position: "sticky",
		zIndex: 2,
		backgroundColor: "white"
	}, t = {
		position: "sticky",
		zIndex: 3,
		backgroundColor: "#191E23 !important"
	};
	return {
		"& .MuiDataGrid-columnHeader[data-field=\"Field\"]": {
			...t,
			left: 0
		},
		"& .MuiDataGrid-cell[data-field=\"Field\"]": {
			...e,
			left: 0,
			borderRight: "1px solid #e0e0e0"
		},
		"& .MuiDataGrid-columnHeader[data-field=\"Value\"]": {
			...t,
			right: 0
		},
		"& .MuiDataGrid-cell[data-field=\"Value\"]": {
			...e,
			right: 0,
			borderLeft: "1px solid #e0e0e0"
		},
		"& .MuiSvgIcon-root MuiSvgIcon-fontSizeSmall MuiDataGrid-sortIcon": { color: "#fff" },
		"& .MuiDataGrid-columnHeaderTitle": {
			fontSize: "1rem",
			fontWeight: "bold"
		},
		"& .MuiDataGrid-columnHeaders div[role=\"row\"]": {
			backgroundColor: "#191E23 !important",
			color: "white"
		},
		"& .MuiDataGrid-columnHeader": {
			backgroundColor: "#191E23 !important",
			color: "white"
		},
		"& .MuiDataGrid-filler": { backgroundColor: "black !important" },
		"& .MuiDataGrid-menuIcon": { color: "white" },
		"& .MuiDataGrid-columnSeparator": { color: "#333" },
		"& .MuiDataGrid-main": {
			overflow: "auto",
			minWidth: "100%"
		},
		"&": { width: "100%" }
	};
}, $ = ({ data: e, ...t }) => {
	let n = J(), [r, i] = j({
		rows: [],
		columns: []
	});
	return O(() => {
		(async () => {
			let t = n?.get("key_value_grid");
			if (!t) return;
			let r = { current: { ...t } };
			ht(r), gt(r, e), i({
				rows: [...vt(r)],
				columns: [...bt(r)]
			}), await Z(r);
		})();
	}, [e, n]), /* @__PURE__ */ E(Q, {
		register_component: !0,
		datagrid_sx: qt(),
		...t,
		grid_options: {
			columns: r.columns,
			rows: r.rows,
			paginationMode: "client",
			sortingMode: "client",
			filterMode: "client",
			dataSource: void 0,
			rowSelection: !1,
			disableVirtualization: !0,
			getRowId: (e) => e.id || e.Field,
			rowCount: void 0
		},
		refKey: "key_value_grid"
	});
};
//#endregion
export { K as AddElement, He as Api, P as ApiButton, Ee as CenteredContainer, F as CenteredModal, Je as Close, st as Create, kt as DataSourceWrapper, qt as DatagridSx, ut as Delete, nt as DeleteLabel, lt as DeleteMany, dt as EditCellRenderer, $ as FieldValueGrid, Pt as GetCellRenderer, G as GetContainer, jt as GetDatasource, tt as GetElementIndex, et as GetElementTypes, $e as GetElementValue, Ze as GetElements, pt as GetEndpoint, X as GetFetchParams, xt as GetHeaders, vt as GetKeyValueRows, St as GetPaginationModel, zt as GetProgressValue, bt as GetRawHeaders, yt as GetRows, Xe as GetSet, Ht as GridWithButtons, Kt as HFCenteredLayout, Ue as HandleGet, Ut as HeaderFooterLayout, qe as InitialTypeFormBuilderRefState, L as IsNullOrUndefined, I as IsPrimitive, Ft as ModalCellRendererWrapper, It as ProgressAdornment, q as RefIndexContext, Wt as RefProvider, Z as Refresh, Ge as SelectAssociation, Lt as SendIconButton, Ct as SetArgs, Nt as SetCellRenderer, W as SetContainer, ft as SetEndpoint, Ot as SetFetchParams, Et as SetFilterModel, Ye as SetHandleClose, mt as SetHeadersFromJson, ht as SetKeyValueHeaders, gt as SetKeyValueRows, Bt as SetLoading, wt as SetOrAddArgs, Dt as SetPaginationModel, Rt as SetProgressValue, _t as SetRowsFromJson, At as SetSearch, Mt as SetSelectedRows, Tt as SetSortModel, R as TitleCase, rt as TypeFormBuilder, M as UIAppBar, N as UIBottomNav, Vt as UIInput, Q as UITable, ct as Update, Qe as UpdateElementValues, Y as useConditionalRef, it as useManagedRef, J as useRefIndex };
