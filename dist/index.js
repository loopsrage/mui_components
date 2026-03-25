import { AppBar as e, Box as t, Button as n, CircularProgress as r, Container as i, CssBaseline as a, Dialog as o, DialogActions as s, DialogContent as c, DialogTitle as l, FormControl as u, IconButton as d, Input as f, InputAdornment as p, InputLabel as m, Paper as h, Select as g, Stack as _, Switch as v, Tab as y, Tabs as ee, TextField as te, ThemeProvider as b, Toolbar as x, Typography as S, createTheme as ne } from "@mui/material";
import re from "@mui/icons-material/BugReport";
import { Fragment as ie, jsx as C, jsxs as w } from "react/jsx-runtime";
import ae, { createContext as oe, useCallback as se, useContext as ce, useEffect as T, useLayoutEffect as E, useMemo as le, useRef as D, useState as O } from "react";
import { DataGrid as ue, GridGetRowsError as de, useGridApiRef as fe } from "@mui/x-data-grid";
import { LexicalComposer as pe } from "@lexical/react/LexicalComposer";
import { RichTextPlugin as me } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable as he } from "@lexical/react/LexicalContentEditable";
import { LexicalErrorBoundary as ge } from "@lexical/react/LexicalErrorBoundary";
import { useLexicalComposerContext as _e } from "@lexical/react/LexicalComposerContext";
import { $generateHtmlFromNodes as ve, $generateNodesFromDOM as ye } from "@lexical/html";
import { $getRoot as be, ParagraphNode as xe, TextNode as Se } from "lexical";
import { Image as Ce } from "mui-image";
import we from "@mui/icons-material/Description";
import Te from "@mui/icons-material/Download";
import Ee from "@mui/icons-material/Close";
import { useDropzone as De } from "react-dropzone";
import Oe from "@mui/icons-material/CloudUpload";
import ke from "@mui/icons-material/Send";
//#region \0rolldown/runtime.js
var Ae = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), je = () => /* @__PURE__ */ C(e, {
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
	children: /* @__PURE__ */ w(x, {
		disableGutters: !0,
		children: [
			/* @__PURE__ */ C(t, {
				component: "img",
				sx: {
					height: 20,
					marginRight: 2
				},
				alt: "Logo",
				src: "/logo.png"
			}),
			/* @__PURE__ */ C(S, {
				variant: "h6",
				component: "div",
				sx: { flexGrow: 1 },
				children: "HTS Product Classification"
			}),
			/* @__PURE__ */ C(d, {
				size: "small",
				sx: { color: "white" },
				onClick: () => console.log("Debug Clicked"),
				children: /* @__PURE__ */ C(re, { fontSize: "small" })
			})
		]
	})
}), Me = () => /* @__PURE__ */ C(t, {
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
	children: /* @__PURE__ */ C(i, { maxWidth: "sm" })
}), k = ({ api: e, endpoint: t, children: r, get_args: i, fetch_params: a, callback: o, ...s }) => /* @__PURE__ */ C(n, {
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
}), Ne = ({ children: e, sx: n = {} }) => /* @__PURE__ */ C(t, {
	sx: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		minHeight: "100vh",
		...n
	},
	children: /* @__PURE__ */ C(_, {
		direction: "column",
		sx: { width: "100%" },
		children: e
	})
}), A = ({ title: e, body: t, show: n, footer: r, title_sx: i, footer_sx: a, content_sx: u, paper_sx: d }) => /* @__PURE__ */ w(o, {
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
		/* @__PURE__ */ C(l, {
			id: "centered-modal-title",
			sx: { ...i },
			children: e
		}),
		/* @__PURE__ */ C(c, {
			dividers: !0,
			sx: { ...u },
			children: t
		}),
		/* @__PURE__ */ C(s, {
			sx: a,
			children: r
		})
	]
}), j = (e) => {
	if (e === null) return !0;
	let t = typeof e;
	return t === "string" || t === "number" || t === "boolean" || t === "undefined" || t === "symbol" || t === "bigint" || t === "int";
}, M = (e) => e == null, N = (e, t) => M(e) ? "" : e.toLowerCase().split(t).map((e) => e.charAt(0).toUpperCase() + e.slice(1)).join(" "), P = "Values", F = "Containers", I = (e, t, n, r) => {
	let i = r || {
		[P]: /* @__PURE__ */ new Map(),
		[F]: /* @__PURE__ */ new Map()
	}, a = e ? t : "root", o = {
		parent: e,
		path: a,
		value: n,
		children: [],
		root: e ? e.root : null,
		containerIndex: i
	};
	return e || (o.root = o), i[P].set(a, n), i[F].set(a, o), Object.freeze(o);
}, Pe = (e, t, n) => {
	let r = I(e, t, n, e.containerIndex);
	return {
		...e,
		children: [...e.children, r]
	};
}, L = (e, t) => e.containerIndex[F].get(t), Fe = (e, t) => {
	for (let [n, r] of e.containerIndex[P].entries()) t(n, r);
}, Ie = (e, t) => {
	for (let [, n] of e.containerIndex[F].entries()) t(n);
}, Le = (e, t, n = 2) => {
	Fe(e, (e, r) => {
		let i = Object.keys(r);
		for (let a = 0; a < i.length; a++) {
			let o = e.split(".");
			o.push(i[a]);
			let s = o.slice(2).join("."), c = r[i[a]];
			o.length > n && j(c) && t({
				i: a,
				value: c,
				path: s,
				fullpath: o.join("."),
				key: e,
				containerValue: r
			});
		}
	});
}, Re = (e, t, n, r) => {
	if (!e || !t) return e;
	let i = e.containerIndex[F].get(t);
	if (!i) return console.warn(`Container at path "${t}" not found.`), e;
	let a = {};
	a[n] = r;
	let o = {
		...i.value,
		...a
	}, s = I(i.parent, i.path, o, e.containerIndex);
	e.containerIndex[F].set(t, s), e.containerIndex[P].set(t, o);
	let c = s;
	for (; c.parent;) {
		let t = c.parent, n = t.children.map((e) => e.path === c.path ? c : e), r = c.path.split("."), i = r.slice(r.length - 1), a = { ...e.containerIndex[P].get(t.path) };
		a[i] = o;
		let s = Object.freeze({
			...t,
			children: n,
			value: a
		});
		e.containerIndex[F].set(s.path, s), c = s;
	}
	return e.containerIndex[F].get("root");
}, R = (e = null, t = [], n = "_", ...r) => {
	e === null && (e = I(null, "root", r.length === 0 ? {} : r[0]), t = ["root"]);
	let i = (e, t) => {
		let r = e.value;
		return typeof r == "object" && r && (Array.isArray(r) ? r.forEach((r, a) => {
			if (typeof r == "object" && r) {
				let o = [...t, String(a)];
				i(Pe(e, o.join(n), r).children.at(-1), o);
			}
		}) : Object.entries(r).forEach(([r, a]) => {
			if (typeof a == "object" && a) {
				let o = [...t, r];
				i(Pe(e, o.join(n), a).children.at(-1), o);
			}
		})), e;
	};
	return i(e, t);
}, ze = ({ inputKey: e, inputProps: t }) => {
	let n = Object.keys(t.defaultValue)[0], r = t.defaultValue[n], [i, a] = O(/* @__PURE__ */ C(u, {
		type: "text",
		onChange: t.onChange,
		defaultValue: r
	})), o = (e, n) => {
		a(ae.cloneElement(i, {
			...t,
			defaultValue: r,
			name: e + "." + n
		}));
	}, [s, c] = O(/* @__PURE__ */ C(u, {
		type: "text",
		...t,
		defaultValue: n,
		onChange: (t) => o(e, t.target.value)
	}));
	return T(() => {
		o(e, n);
	}, []), /* @__PURE__ */ w(_, {
		direction: "horizontal",
		gap: 2,
		children: [s, i]
	});
}, Be = ({ fileData: e, onChange: t, name: n }) => {
	let [r] = _e(), i = D("");
	return T(() => {
		e && (async () => {
			if (!e) return;
			let t = String(e).replace(/^"|"$/g, "").replace(/\\n/g, "<br/>");
			t !== i.current && (i.current = t, r.update(() => {
				let e = be();
				e.clear();
				let n = ye(r, new DOMParser().parseFromString(`<div>${t}</div>`, "text/html"));
				n.length > 0 && e.append(...n);
			}));
		})();
	}, [e, r]), T(() => r.registerUpdateListener(({ editorState: e }) => {
		e.read(() => {
			let e = ve(r);
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
}, z = ({ fileData: e, subtype: n, inputProps: r }) => /* @__PURE__ */ C(t, {
	sx: { width: "100%" },
	children: /* @__PURE__ */ C(h, {
		variant: "outlined",
		sx: {
			p: 2,
			minHeight: "200px",
			position: "relative"
		},
		children: /* @__PURE__ */ w(pe, {
			initialConfig: {
				namespace: "MyEditor",
				nodes: [xe, Se],
				theme: {},
				onError: (e) => console.error("Lexical Error:", e),
				editable: n !== 0
			},
			children: [/* @__PURE__ */ C(me, {
				contentEditable: /* @__PURE__ */ C(he, { style: {
					outline: "none",
					minHeight: "170px"
				} }),
				placeholder: /* @__PURE__ */ C("div", {
					style: {
						position: "absolute",
						top: 20,
						left: 20,
						color: "#aaa"
					},
					children: "Enter text..."
				}),
				ErrorBoundary: ge
			}), /* @__PURE__ */ C(Be, {
				fileData: e,
				onChange: r.onChange,
				name: r.name
			})]
		})
	})
}), Ve = (/* @__PURE__ */ Ae(((e, t) => {
	t.exports = {};
})))(), He = async (e) => {
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
}, Ue = (e) => {
	e = atob(e);
	let t = new ArrayBuffer(e.length), n = new Uint8Array(t);
	for (let t = 0; t < e.length; t++) n[t] = e.charCodeAt(t);
	return n;
}, We = "data:image/#{encoding};base64,#{data}", Ge = ({ data: e, encoding: t, alt: n }) => {
	let r = We, [i, a] = O(void 0);
	return M(t) && (t = "png"), M(n) && (n = "ERROR"), He(new Blob([Ue(e)])).then((e) => {
		r = r.replace("#{encoding}", t), r = r.replace("#{data}", Ve.Buffer.from(e).toString("base64")), a(r);
	}), /* @__PURE__ */ C(Ce, {
		src: i,
		fluid: !0,
		alt: n
	});
}, Ke = (e) => {
	let t = "", n = Object.keys(e).map((t) => {
		let n = e[t];
		return M(n) ? "" : `${encodeURIComponent(t)}=${encodeURIComponent(n)}`;
	}).filter((e) => e !== "").join("&");
	if (n) {
		let e = t.indexOf("#");
		e !== -1 && (t = t.slice(0, e)), t += (t.indexOf("?") === -1 ? "?" : "&") + n;
	}
	return t;
}, B = (e, { baseHeaders: t, handleErr: n, handleFinally: r, debug: i } = {}) => {
	let a = {
		"Content-Type": "application/json",
		...t
	}, o = (e) => {
		console.log(e);
	}, s = ({ endpoint: t, inputHeaders: s, fetchParams: c, args: l }) => {
		M(t) && (t = "");
		let u = e + t, d = {
			method: "GET",
			headers: {
				...a,
				...s
			},
			...c
		};
		return M(l) || (d.method === "POST" && (d.body = JSON.stringify(l)), d.method === "GET" && (u += Ke(l))), fetch(u, d).catch((e) => n(e)).finally(() => {
			i && o({
				endpoint: t,
				inputHeaders: s,
				fetchParams: c
			}), !M(r) && r({
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
B("http://localhost:8080/", {
	handleErr: (e) => console.log(e),
	debug: !0
});
//#endregion
//#region src/utility/api.js
var V = ({ endpoint: e, handleErr: t }) => {
	M(t) && (t = (e) => console.log(e));
	let n = B(e, { handleErr: t });
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
}, H = (e, t) => () => e.get(t), qe = ({ jsxKey: e, endpoint: t, inputProps: n }) => {
	let [r, i] = O([/* @__PURE__ */ C("option", {
		value: n.defaultValue,
		children: n.defaultValue
	}, e + "-" + n.defaultValue)]), a = V({ endpoint: t });
	return T(() => {
		a.selectOptions().then((t) => {
			i(Object.keys(t).map((n) => {
				let r = t[n][Object.keys(t[n])[1]], i = t[n][Object.keys(t[n])[0]];
				return /* @__PURE__ */ C("option", {
					value: i,
					children: r
				}, e + "-" + n);
			}));
		});
	}, []), /* @__PURE__ */ C(g, {
		...n,
		defaultValue: n.defaultValue,
		children: [...r || /* @__PURE__ */ C(ie, {})]
	}, e);
}, U = ({ jsxKey: e, key: t, inputProps: n }) => {
	let r;
	return t.charAt(t.length - 1) === "D" && t.charAt(t.length - 2) === "I" || t.charAt(t.length - 1) === "S" && t.charAt(t.length - 2) === "D" ? (t.charAt(t.length - 1) === "D" && t.charAt(t.length - 2) === "I" && (r = t.slice(5, t.length - 2)), t.charAt(t.length - 1) === "S" && t.charAt(t.length - 2) === "D" && (r = t.slice(5, t.length - 3), n = {
		...n,
		multiple: !0
	}), /* @__PURE__ */ C(qe, {
		endpoint: r,
		jsxKey: e,
		inputProps: n
	})) : null;
}, Je = () => ({ formRef: e, jsxKey: t, key: n, currentType: r, inputProps: i }) => {
	let a = U({
		jsxKey: t,
		key: n,
		inputProps: i
	});
	if (!M(a)) return a;
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
	if (a = /* @__PURE__ */ C(f, {
		type: "text",
		disableUnderline: !0,
		readOnly: !0,
		sx: o,
		...i
	}, t), r === "number" || r === "bigint") return /* @__PURE__ */ C(f, {
		type: "number",
		disableUnderline: !0,
		readOnly: !0,
		sx: o,
		...i
	}, t);
	if (r === "boolean") return /* @__PURE__ */ C(v, {
		...i,
		defaultChecked: i.defaultValue
	}, t);
	if (r === "object") {
		if (i.defaultValue.Subtype === 17) return /* @__PURE__ */ C(Ge, { data: L(q(e), n.slice(0, n.lastIndexOf(".")))?.value.Data }, t);
		if (i.defaultValue.Subtype === 16 || i.defaultValue.Subtype === 0) {
			let r = L(q(e), n.slice(0, n.lastIndexOf(".")));
			return i.name = n.slice(0, n.lastIndexOf(".")) + ".Data", /* @__PURE__ */ C(z, {
				fileData: JSON.stringify(r?.value.Data, null, 2),
				inputProps: i,
				subtype: i.defaultValue.Subtype
			}, t);
		}
		if (i.defaultValue.Subtype === 18) {
			let r = L(q(e), n.slice(0, n.lastIndexOf(".")));
			return i.name = n.slice(0, n.lastIndexOf(".")) + ".Data", /* @__PURE__ */ C(z, {
				fileData: r?.value.Data,
				inputProps: i,
				subtype: i.defaultValue.Subtype
			}, t);
		}
		if (!M(i.defaultValue.Subtype) || !M(i.defaultValue.Data)) return null;
		if (Array.isArray(i.defaultValue)) return Object.keys(i.defaultValue).map((e) => /* @__PURE__ */ C(f, {
			type: "text",
			disableUnderline: !0,
			readOnly: !0,
			sx: o,
			...i,
			defaultValue: i.defaultValue[e]
		}, t));
		if (M(i.defaultValue)) return;
		let r = Object.keys(i.defaultValue)[0];
		return typeof i.defaultValue[r] == "object" ? null : /* @__PURE__ */ C(ze, {
			inputKey: n,
			inputProps: i
		});
	}
	return a;
}, W = (e, t = {}) => ({
	index: 0,
	elements: {},
	nameIndex: {},
	labels: {},
	element_component: {},
	container: void 0,
	handleOnClose: void 0,
	elementSelector: e || Je(),
	context: t
}), Ye = (e) => {
	e.current.handleOnClose();
}, G = (e, t) => {
	let n = e.current;
	n.handleClose = t, e.current = n;
}, K = (e, t) => {
	let n = e.current;
	M(n) || (n.container = t), e.current = n;
}, q = (e) => e.current.container, Xe = (e, n) => {
	let r = e.current, i = r.labels[n], a = r.element_component[n];
	return i === "None" ? /* @__PURE__ */ C(ie, { children: a }) : /* @__PURE__ */ w(_, {
		direction: "row",
		gap: 1,
		sx: {
			justifyContent: "space-between",
			width: "100%",
			borderBottom: "1px solid rgba(0, 0, 0, 0.42)",
			pb: .5,
			alignItems: "flex-end"
		},
		children: [/* @__PURE__ */ C(t, {
			sx: {
				width: "50%",
				flexShrink: 0
			},
			children: i
		}), /* @__PURE__ */ C(t, {
			sx: { flexGrow: 1 },
			children: a
		})]
	}, n);
}, Ze = (e) => {
	let t = {};
	return Object.keys(e.current.nameIndex).map((n, r) => {
		t[n] = Xe(e, r);
	}), /* @__PURE__ */ C(_, {
		direction: "column",
		gap: 0,
		children: Object.keys(t).map((e) => t[e])
	});
}, Qe = (e) => {
	let t = e.current;
	return { onChange: (n) => {
		let r = n.target.value, i = n.target.selectedOptions;
		if (!M(i)) {
			let e = [].slice.call(i);
			r = e.map((e) => e.value), e.length === 1 && (r = r[0]);
		}
		n.target.type === "datetime-local" && (r = new Date(Date.parse(r)).toISOString());
		let a = n.target.name, o = t.nameIndex[a];
		M(o) && (t.nameIndex[a] = t.index, o = t.index, e.current = t), t.elements[o] = r;
		let s = a.split("."), c = s.slice(0, s.length - 1).join("."), l = s.slice(s.length - 1);
		M(L(q(e), c)) && (c = s.slice(0, s.length - 2).join(".")), n.target.type === "checkbox" && (r = n.currentTarget.checked), e.current = t, K(e, Re(q(e), c, l, r)), e.current = t;
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
}, J = (e, t, n) => {
	let r = e.current;
	if (M(r.nameIndex[t])) {
		r.nameIndex[t] = r.index, r.elements[r.index] = n;
		let i = et(e, t, n);
		if (!M(i)) {
			let e = N(t.replace(/root\./, ""), "_"), n = e.split("."), a = n[n.length - 1];
			/^\d+$/.test(a) ? r.labels[r.index] = "None" : r.labels[r.index] = /* @__PURE__ */ C(m, {
				column: t,
				children: e
			}, "Label" + t + r.index), r.element_component[r.index] = i, r.index++;
		}
	}
	e.current = r;
}, tt = (e, t) => e.current.nameIndex[t], nt = (e, t) => {
	let n = e.current;
	delete n.labels[tt(e, t)], e.current = n;
}, rt = ({ formRef: e, container: t }) => {
	Ie(t, (t) => {
		let n = t.path, r = t.value;
		if (Array.isArray(r)) {
			let t = [];
			Object.keys(r).forEach((e) => {
				M(r[e]) || Array.isArray(r[e]) || t.push(r[e]);
			}), t.length > 0 && J(e, n, t);
			return;
		}
		Object.keys(r).forEach((t) => {
			M(r[t]) || (typeof r[t] == "object" && Object.keys(r[t]).forEach((i) => {
				let a = {};
				a[i] = r[t][i], J(e, n + "." + t + "." + i, a);
			}), j(r[t]) && J(e, n + "." + t, r[t]));
		});
	});
}, Y = oe(null), X = () => ce(Y), it = (e) => {
	let t = X();
	return (n) => {
		n ? t?.register(e, n) : t?.unregister(e);
	};
}, Z = (e, t = !0) => {
	let n = X();
	return (r) => {
		t && r ? n?.register(e, r) : n?.unregister(e);
	};
}, at = ({ title: e, getSchema: n, handleSave: r, elementSelector: i, footerButtons: a, refKey: o, register_component: s = !1 }) => {
	let c = Z(o, s), l = D(null), [u, f] = O(!1), p = () => {
		f(!1);
	};
	l.current ||= W(i, { setShow: (e) => {
		f(e);
	} }), E(() => (c(l.current), () => c(null)), [c]);
	let [m, h] = O(void 0), [g, v] = O(0);
	return a ||= [], /* @__PURE__ */ w(_, {
		direction: "row",
		gap: 3,
		children: [/* @__PURE__ */ C(d, {
			onClick: async () => {
				try {
					K(l, R(null, [], ".", await n())), G(l, p), rt({
						formRef: l,
						container: q(l)
					}), h(Ze(l)), f(!0);
				} catch (e) {
					console.error("Failed to load schema:", e);
				}
			},
			children: /* @__PURE__ */ C(we, { sx: { color: "red" } })
		}), /* @__PURE__ */ C(A, {
			title: e,
			body: /* @__PURE__ */ w(t, {
				sx: { width: "100%" },
				children: [
					/* @__PURE__ */ C(t, {
						sx: {
							borderBottom: 1,
							borderColor: "divider"
						},
						children: /* @__PURE__ */ w(ee, {
							value: g,
							onChange: (e, t) => v(t),
							"aria-label": "custom tabs",
							children: [/* @__PURE__ */ C(y, { label: "File Upload" }), /* @__PURE__ */ C(y, { label: "File Viewer" })]
						})
					}),
					g === 0 && /* @__PURE__ */ C(t, {
						sx: {
							borderBottom: 1,
							borderColor: "divider",
							width: "100%"
						},
						children: m
					}),
					g === 1 && /* @__PURE__ */ C(t, {
						sx: { p: 3 },
						children: /* @__PURE__ */ C("pre", { children: JSON.stringify(q(l)?.value, null, 2) })
					})
				]
			}),
			show: u,
			footer: a,
			title_sx: {
				background: "black",
				color: "white"
			}
		})]
	});
}, ot = ({ title: e, show: t, onCancel: r, onConfirm: i }) => /* @__PURE__ */ C(A, {
	title: e || "Are you sure?",
	show: t,
	footer: /* @__PURE__ */ w(_, {
		direction: "column",
		gap: 3,
		children: [/* @__PURE__ */ C(n, {
			onClick: () => {
				M(r) || r();
			},
			children: "Cancel"
		}), /* @__PURE__ */ C(n, {
			onClick: () => {
				M(i) || i();
			},
			children: "Confirm"
		})]
	})
}), st = ({ refreshGrid: e, api: t }) => /* @__PURE__ */ C(at, {
	title: "Create",
	getSchema: t.schema,
	handleSave: (n) => {
		t.create(n).then(() => e());
	}
}), ct = ({ refreshGrid: e, api: t, id: n, title: r, footerButtons: i }) => /* @__PURE__ */ C(at, {
	title: r,
	button_title: "Update",
	getSchema: H(t, n),
	handleSave: (r) => {
		t.update(r, n).then(() => e());
	},
	footerButtons: i,
	register_component: !0,
	refKey: "update_modal"
}), lt = ({ refreshGrid: e, api: t, handleSelectedIds: r }) => {
	let [i, a] = O(!1);
	return /* @__PURE__ */ w(_, {
		direction: "horizontal",
		gap: 2,
		children: [/* @__PURE__ */ C(n, {
			onClick: () => {
				a(!i);
			},
			children: "Delete"
		}), /* @__PURE__ */ C(ot, {
			onConfirm: () => {
				t.deleteIds(r()).then(e()), a(!1);
			},
			show: i
		})]
	});
}, ut = ({ refreshGrid: e, api: t, id: r }) => {
	let [i, a] = O(!1);
	return /* @__PURE__ */ w(_, {
		direction: "row",
		gap: 3,
		children: [/* @__PURE__ */ C(n, {
			onClick: () => {
				a(!i);
			},
			children: "Delete"
		}), /* @__PURE__ */ C(ot, {
			onConfirm: () => {
				t.deleteId(r).then(e());
			},
			show: i
		})]
	});
}, dt = ({ handleRefreshGrid: e, api: t, id: n, params: r }) => /* @__PURE__ */ C(_, {
	direction: "row",
	gap: 1,
	children: /* @__PURE__ */ C(ct, {
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
	Le(t, (e) => {
		let t = e.value, r = e.path, i = typeof t;
		if (n.headers_ri[r] !== void 0) return;
		let a = "string";
		i === "number" ? a = "number" : r.toLowerCase().includes("date") || r.toLowerCase().includes("modified") ? a = "date" : i === "string" && (a = "string"), n.headers[n.index] = {
			field: r,
			type: a,
			headerName: r
		}, n.rows[n.index] = [], n.headers_ri[r] = n.index, n.index++;
	}), e.current = n;
}, ht = (e, t) => {
	let n = e.current;
	n && (n.rows = [], n.row_count = 0, n.headers.forEach(() => {
		n.rows.push([]);
	}), Le(t, (e) => {
		if (j(e.value)) {
			let t = n.headers_ri[e.path];
			t !== void 0 && n.rows[t].push(e.value);
		}
	}), e.current = n);
}, gt = (e) => {
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
}, _t = (e) => {
	let t = e.current, n = Object.keys(t.headers_ri).map((e) => ({
		field: e,
		sortable: !0,
		filterable: !0,
		headerName: N(e.split(".").pop(), "_"),
		flex: 2,
		type: "string",
		hideable: e !== "row.id"
	}));
	if (t.row_details) {
		let t = {
			field: "edit",
			headerName: "Details / Approvals",
			sortable: !1,
			filterable: !1,
			flex: 1,
			type: "actions",
			renderCell: $(e)
		}, r = Math.max(0, n.length - 1);
		n.splice(r, 0, t);
	}
	return n;
}, vt = (e) => e.current.paginationModel, yt = (e, t) => {
	let n = e.current;
	n && (n.args = t, e.current = n, n.refresh());
}, bt = (e, t) => {
	let n = e.current;
	n && (n.args = {
		...n.args,
		...t
	}, e.current = n, n.refresh());
}, xt = (e, t) => {
	let n = e.current;
	n && (n.args.sortModel = JSON.stringify(t), e.current = n);
}, St = (e, t) => {
	let n = e.current;
	n && (n.args.filterModel = JSON.stringify(t), e.current = n);
}, Ct = (e, t) => () => {
	let n = e.current;
	n && (n.paginationModel = t, n.args.paginationModel = JSON.stringify(t), e.current = n);
}, wt = (e, t) => {
	let n = e.current;
	n && (n.fetch_params = t, e.current = n);
}, Tt = (e) => e.current.fetch_params, Et = (e, t) => ({ getRows: async (n) => {
	let r = e.current;
	if (!r) return {
		rows: [],
		rowCount: 0
	};
	St(e, n.filterModel), xt(e, n.sortModel);
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
		Array.isArray(t) && t.length === 0 || M(t) || (s[e] = t);
	}), M(n.sortModel) || Array.isArray(n.sortModel) && n.sortModel.length === 0 && delete s.sortModel, M(n.filterModel) || Array.isArray(n.filterModel.items) && n.filterModel.items.length === 0 && delete s.filterModel;
	let c = await r.api.at("/" + r.endpoint, {
		fetchParams: {
			method: "GET",
			...Tt(e)
		},
		args: s
	}), l = R(null, [], ".", c.results);
	return mt(e, l), ht(e, l), r.row_count = c.pagination?.total || 0, e.current = r, t(), {
		rows: gt(e),
		rowCount: c.pagination?.total || 0
	};
} }), Dt = (e, t) => {
	let n = e.current;
	n && (n.args.search = t, e.current = n);
}, Ot = (e) => e.current.datasource, Q = async (e) => {
	let t = e.current;
	if (!t) return;
	let n = t.gridRef.current;
	n.dataSource.cache.clear(), await n.dataSource.fetchRows(), t.refresh();
}, kt = (e) => (t) => {
	let n = e.current;
	if (!n || n.rows.length === 0) return;
	let r = t.ids, i = n.rows[0].length, a = Array.from({ length: i }, (e, t) => t).filter((e) => {
		let t = n.rows[0][e];
		return r.has(t);
	});
	n.selected_data = n.rows.map((e) => a.map((t) => e[t])), n.selected_ids = t, e.current = n;
}, At = (e, t) => {
	let n = e.current;
	n && (n.cellRenderer = t, e.current = n);
}, $ = (e) => {
	let t = e.current;
	if (t) return t.cellRenderer ? t.cellRenderer(e) : jt(e);
}, jt = (e) => {
	let r = X();
	return (i) => {
		let [a, o] = O(!1), [s, c] = O(""), l = e.current;
		if (!l) return;
		let u = "white";
		i.row.stage === "rejected" && (u = "red"), i.row.stage === "approved" && (u = "green");
		let f = (e = !1) => {
			let t = r?.get("update_modal")?.context;
			if (!t) return;
			let n = t.setShow;
			n(e);
		}, p = /* @__PURE__ */ w(_, {
			direction: "column",
			justifyContent: "space-between",
			spacing: 2,
			sx: { width: "100%" },
			children: [/* @__PURE__ */ w(_, {
				gap: 3,
				direction: "row",
				children: [
					i.row.item_id,
					/* @__PURE__ */ C(t, {
						sx: {
							backgroundColor: u,
							color: "black",
							borderRadius: 2,
							px: 1.5,
							fontSize: "0.875rem"
						},
						children: i.row.stage
					}),
					/* @__PURE__ */ C(t, { sx: { flexGrow: 1 } }, "spacer"),
					/* @__PURE__ */ C(d, {
						onClick: () => f(!1),
						sx: {
							backgroundColor: "black",
							color: "white"
						},
						children: /* @__PURE__ */ C(Ee, {})
					})
				]
			}), /* @__PURE__ */ w(_, {
				gap: 3,
				direction: "row",
				children: [i.row.code, i.row.description]
			})]
		}), m = () => ({
			item_id: i.row.item_id,
			comments: s
		});
		return /* @__PURE__ */ C(dt, {
			params: {
				footerButtons: [
					a && /* @__PURE__ */ C(te, {
						label: "Reason for rejection",
						multiline: !0,
						rows: 4,
						sx: { mb: 2 },
						variant: "outlined",
						fullWidth: !0,
						defaultValue: s,
						onChange: (e) => c(e.target.value)
					}),
					/* @__PURE__ */ C(n, {
						variant: "outlined",
						sx: {
							color: "black",
							backgroundColor: "white",
							borderColor: "black"
						},
						startIcon: /* @__PURE__ */ C(Te, {}),
						children: "Extract"
					}),
					/* @__PURE__ */ C(t, { sx: { flexGrow: 1 } }, "spacer"),
					a && /* @__PURE__ */ C(n, {
						onClick: () => o(!1),
						children: "Cancel"
					}),
					!a && /* @__PURE__ */ C(n, {
						sx: { backgroundColor: "red" },
						onClick: () => o(!0),
						children: "Reject"
					}),
					a && /* @__PURE__ */ C(k, {
						api: l.api,
						endpoint: "reject",
						sx: { backgroundColor: "red" },
						variant: "contained",
						get_args: m,
						callback: async () => {
							o(!0), c(""), f(!1), await Q(e);
						},
						children: "Reject"
					}),
					!a && /* @__PURE__ */ C(k, {
						api: l.api,
						sx: { backgroundColor: "green" },
						variant: "contained",
						endpoint: "approve",
						get_args: m,
						callback: async () => {
							f(!1), await Q(e);
						},
						children: "Approve"
					})
				],
				title: p,
				...i.row
			},
			handleRefreshGrid: async () => await Q(e),
			api: l.api,
			id: i.id
		});
	};
}, Mt = ({ api: e, endpoint: t, row_details: n, refKey: r, cellRenderer: i, register_component: a = !1, toolbar: o = !1, checkbox_select: s = !1, datagrid_sx: c = void 0 }) => {
	let l = Z(r, a), u = D(null), [, d] = O(!1), [f, p] = O({
		page: 0,
		pageSize: 5
	}), [m, h] = O(0), [g, _] = O({ "row.id": !1 }), v = fe(), y = () => {
		u.current && h(u.current.row_count), d((e) => !e);
	};
	return u.current ||= {
		gridRef: v,
		index: 0,
		headers: [],
		headers_ri: {},
		rows: [],
		row_count: 0,
		datasource: Et(u, y),
		paginationModel: {
			page: 0,
			pageSize: 5
		},
		args: {},
		selected_data: [],
		selected_ids: null,
		refresh: y,
		cellRenderer: i,
		filter_model: null,
		api: e,
		row_details: n,
		fetch_params: null,
		endpoint: t,
		register_component: a,
		refKey: r,
		modal_title: null
	}, E(() => (l(u.current), () => l(null)), [l]), /* @__PURE__ */ C(ue, {
		apiRef: v,
		disableVirtualization: !0,
		columnVisibilityModel: g,
		onColumnVisibilityModelChange: (e) => _(e),
		rowCount: m,
		sx: {
			width: "80hv",
			...c
		},
		columns: _t(u),
		dataSource: Ot(u),
		pageSizeOptions: [
			5,
			10,
			25,
			50,
			100
		],
		paginationModel: f,
		onPaginationModelChange: (e) => {
			p(e);
		},
		onRowSelectionModelChange: (e) => kt(u)(e),
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
			console.error("DataGrid Error Type:", e.name), console.error("DataGrid Error Message:", e.message), e.cause && (console.group("Original Error Cause"), console.error("Message:", e.cause.message), console.error("Stack:", e.cause.stack), console.groupEnd()), e instanceof de ? console.warn("Fetch failed. Check your API mock or network.") : console.warn("Row update failed.");
		}
	});
}, Nt = ({ loading: e, value: n }) => /* @__PURE__ */ C(t, {
	sx: {
		position: "relative",
		display: "inline-flex"
	},
	children: /* @__PURE__ */ w(p, {
		position: "end",
		children: [e && /* @__PURE__ */ C(r, {
			sx: { color: "#ff0000" },
			variant: "determinate",
			value: n
		}), /* @__PURE__ */ C(t, {
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
			children: /* @__PURE__ */ C(S, {
				variant: "caption",
				component: "div",
				sx: { color: "text.secondary" },
				children: `${Math.round(n)}%`
			})
		})]
	})
}), Pt = ({ ...e }) => /* @__PURE__ */ C(d, {
	...e,
	children: /* @__PURE__ */ C(ke, {})
}), Ft = (e, t) => {
	let n = e.current;
	n && (n.setProgressValue(t), n.progressValue = t, e.current = n);
}, It = (e) => !e || !e.current ? 1 : e.current.progressValue, Lt = (e, t) => {
	let n = e.current;
	n && n.handleToggle(t);
}, Rt = ({ refKey: e, register_component: t, hidden: n, onDropSuccess: r, onSend: i, textFieldSx: a, textFieldProps: o, sendButtonProps: s }) => {
	let [c, l] = O(""), [u, f] = O(!1), [m, h] = O(0), g = Z(e, t), _ = D({
		handleToggle: (e) => {
			f(e);
		},
		progressValue: 0,
		setProgressValue: h
	}), { getRootProps: v, getInputProps: y, open: ee, isDragActive: b } = De({
		onDrop: se((e) => {
			if (e.length > 0) {
				let t = _.current;
				f(!0), t.setProgressValue = h, r(_, e), _.current = t;
			}
		}, [r]),
		noClick: !0,
		noKeyboard: !0,
		multiple: !1
	});
	E(() => (g(_.current), () => g(null)), [g]);
	let { ref: x, ...S } = v(), ne = u ? /* @__PURE__ */ C(Nt, {
		loading: !0,
		value: m
	}) : /* @__PURE__ */ C(Pt, {
		onClick: i,
		sx: { color: m === 100 ? "red" : "inherit" },
		...s
	});
	return /* @__PURE__ */ C(te, {
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
				...S,
				inputRef: x,
				startAdornment: /* @__PURE__ */ w(p, {
					position: "start",
					children: [/* @__PURE__ */ C("input", { ...y() }), /* @__PURE__ */ C(d, {
						onClick: ee,
						children: /* @__PURE__ */ C(Oe, {})
					})]
				}),
				endAdornment: ne
			}
		},
		sx: {
			width: "100%",
			backgroundColor: b ? "action.hover" : "inherit",
			"& .MuiOutlinedInput-root": { transition: "background-color 0.2s" },
			display: n ? "none" : "flex",
			...a
		},
		...o
	});
}, zt = ({ buttons: e, endpoint: t, title: n, ...r }) => {
	let i = e?.map((e) => e);
	return /* @__PURE__ */ w(_, {
		direction: "column",
		gap: 2,
		sx: { width: "100%" },
		children: [/* @__PURE__ */ w(_, {
			justifyContent: "space-between",
			alignItems: "center",
			direction: "row",
			children: [/* @__PURE__ */ C(S, {
				sx: {
					whiteSpace: "nowrap",
					overflow: "hidden",
					textOverflow: "ellipsis"
				},
				children: n
			}), /* @__PURE__ */ C(_, {
				direction: "row",
				gap: 1,
				sx: {
					justifyContent: "flex-end",
					width: "20%"
				},
				children: i
			})]
		}), /* @__PURE__ */ C(Mt, {
			...r,
			endpoint: t
		})]
	});
}, Bt = ({ children: e }) => /* @__PURE__ */ w(t, {
	sx: { width: "100%" },
	children: [
		/* @__PURE__ */ C(je, {}),
		e,
		/* @__PURE__ */ C(Me, {})
	]
}), Vt = ({ children: e }) => {
	let t = D({}), n = le(() => ({
		register: (e, n) => {
			t.current[e] = n;
		},
		unregister: (e) => {
			delete t.current[e];
		},
		get: (e) => t.current[e] || null,
		registry: () => t.current
	}), []);
	return /* @__PURE__ */ C(Y.Provider, {
		value: n,
		children: e
	});
}, Ht = ne({ typography: {
	fontFamily: "Inter, Arial, sans-serif",
	allVariants: { fontFamily: "Inter, Arial, sans-serif" }
} }), Ut = ({ children: e, theme: t }) => {
	let n = Ht;
	return t || (n = Ht), /* @__PURE__ */ C(Vt, { children: /* @__PURE__ */ w(b, {
		theme: n,
		children: [/* @__PURE__ */ C(a, {}), /* @__PURE__ */ C(Bt, { children: /* @__PURE__ */ C(_, {
			direction: "column",
			gap: 2,
			alignItems: "center",
			sx: { width: "100%" },
			children: e
		}) })]
	}) });
};
//#endregion
export { J as AddElement, V as Api, k as ApiButton, Ne as CenteredContainer, A as CenteredModal, Ye as Close, st as Create, Et as DataSourceWrapper, ut as Delete, nt as DeleteLabel, lt as DeleteMany, dt as EditCellRenderer, $ as GetCellRenderer, q as GetContainer, Ot as GetDatasource, tt as GetElementIndex, et as GetElementTypes, $e as GetElementValue, Ze as GetElements, pt as GetEndpoint, Tt as GetFetchParams, _t as GetHeaders, vt as GetPaginationModel, It as GetProgressValue, gt as GetRows, Xe as GetSet, zt as GridWithButtons, Ut as HFCenteredLayout, H as HandleGet, Bt as HeaderFooterLayout, W as InitialTypeFormBuilderRefState, M as IsNullOrUndefined, j as IsPrimitive, jt as ModalCellRendererWrapper, Nt as ProgressAdornment, Y as RefIndexContext, Vt as RefProvider, Q as Refresh, U as SelectAssociation, Pt as SendIconButton, yt as SetArgs, At as SetCellRenderer, K as SetContainer, ft as SetEndpoint, wt as SetFetchParams, St as SetFilterModel, G as SetHandleClose, mt as SetHeadersFromJson, Lt as SetLoading, bt as SetOrAddArgs, Ct as SetPaginationModel, Ft as SetProgressValue, ht as SetRowsFromJson, Dt as SetSearch, kt as SetSelectedRows, xt as SetSortModel, N as TitleCase, rt as TypeFormBuilder, je as UIAppBar, Me as UIBottomNav, Rt as UIInput, Mt as UITable, ct as Update, Qe as UpdateElementValues, Z as useConditionalRef, it as useManagedRef, X as useRefIndex };
