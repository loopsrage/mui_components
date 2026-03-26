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
}, W = (e, t, n = 2) => {
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
}, ke = (e, t, n, r) => {
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
}, Ae = (e = null, t = [], n = "_", ...r) => {
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
}, je = ({ inputKey: e, inputProps: t }) => {
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
}, Me = ({ fileData: e, onChange: t, name: n }) => {
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
}, Ne = ({ fileData: e, subtype: n, inputProps: r }) => /* @__PURE__ */ E(t, {
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
			}), /* @__PURE__ */ E(Me, {
				fileData: e,
				onChange: r.onChange,
				name: r.name
			})]
		})
	})
}), Pe = (/* @__PURE__ */ Te(((e, t) => {
	t.exports = {};
})))(), Fe = async (e) => {
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
}, Ie = (e) => {
	e = atob(e);
	let t = new ArrayBuffer(e.length), n = new Uint8Array(t);
	for (let t = 0; t < e.length; t++) n[t] = e.charCodeAt(t);
	return n;
}, Le = "data:image/#{encoding};base64,#{data}", Re = ({ data: e, encoding: t, alt: n }) => {
	let r = Le, [i, a] = j(void 0);
	return L(t) && (t = "png"), L(n) && (n = "ERROR"), Fe(new Blob([Ie(e)])).then((e) => {
		r = r.replace("#{encoding}", t), r = r.replace("#{data}", Pe.Buffer.from(e).toString("base64")), a(r);
	}), /* @__PURE__ */ E(ve, {
		src: i,
		fluid: !0,
		alt: n
	});
}, ze = (e) => {
	let t = "", n = Object.keys(e).map((t) => {
		let n = e[t];
		return L(n) ? "" : `${encodeURIComponent(t)}=${encodeURIComponent(n)}`;
	}).filter((e) => e !== "").join("&");
	if (n) {
		let e = t.indexOf("#");
		e !== -1 && (t = t.slice(0, e)), t += (t.indexOf("?") === -1 ? "?" : "&") + n;
	}
	return t;
}, Be = (e, { baseHeaders: t, handleErr: n, handleFinally: r, debug: i } = {}) => {
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
		return L(l) || (d.method === "POST" && (d.body = JSON.stringify(l)), d.method === "GET" && (u += ze(l))), fetch(u, d).catch((e) => n(e)).finally(() => {
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
Be("http://localhost:8080/", {
	handleErr: (e) => console.log(e),
	debug: !0
});
//#endregion
//#region src/utility/api.js
var Ve = ({ endpoint: e, handleErr: t }) => {
	L(t) && (t = (e) => console.log(e));
	let n = Be(e, { handleErr: t });
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
}, He = (e, t) => () => e.get(t), Ue = ({ jsxKey: e, endpoint: t, inputProps: n }) => {
	let [r, i] = j([/* @__PURE__ */ E("option", {
		value: n.defaultValue,
		children: n.defaultValue
	}, e + "-" + n.defaultValue)]), a = Ve({ endpoint: t });
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
}, We = ({ jsxKey: e, key: t, inputProps: n }) => {
	let r;
	return t.charAt(t.length - 1) === "D" && t.charAt(t.length - 2) === "I" || t.charAt(t.length - 1) === "S" && t.charAt(t.length - 2) === "D" ? (t.charAt(t.length - 1) === "D" && t.charAt(t.length - 2) === "I" && (r = t.slice(5, t.length - 2)), t.charAt(t.length - 1) === "S" && t.charAt(t.length - 2) === "D" && (r = t.slice(5, t.length - 3), n = {
		...n,
		multiple: !0
	}), /* @__PURE__ */ E(Ue, {
		endpoint: r,
		jsxKey: e,
		inputProps: n
	})) : null;
}, Ge = () => ({ formRef: e, jsxKey: t, key: n, currentType: r, inputProps: i }) => {
	let a = We({
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
		if (i.defaultValue.Subtype === 19) return /* @__PURE__ */ E(qt, { data: U(K(e), n.slice(0, n.lastIndexOf(".")))?.value.Data });
		if (i.defaultValue.Subtype === 17) return /* @__PURE__ */ E(Re, { data: U(K(e), n.slice(0, n.lastIndexOf(".")))?.value.Data }, t);
		if (i.defaultValue.Subtype === 16 || i.defaultValue.Subtype === 0) {
			let r = U(K(e), n.slice(0, n.lastIndexOf(".")));
			return i.name = n.slice(0, n.lastIndexOf(".")) + ".Data", /* @__PURE__ */ E(Ne, {
				fileData: JSON.stringify(r?.value.Data, null, 2),
				inputProps: i,
				subtype: i.defaultValue.Subtype
			}, t);
		}
		if (i.defaultValue.Subtype === 18) {
			let r = U(K(e), n.slice(0, n.lastIndexOf(".")));
			return i.name = n.slice(0, n.lastIndexOf(".")) + ".Data", /* @__PURE__ */ E(Ne, {
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
		return typeof i.defaultValue[r] == "object" ? null : /* @__PURE__ */ E(je, {
			inputKey: n,
			inputProps: i
		});
	}
	return a;
}, Ke = (e, t = {}) => ({
	index: 0,
	elements: {},
	nameIndex: {},
	labels: {},
	element_component: {},
	container: void 0,
	handleOnClose: void 0,
	elementSelector: e || Ge(),
	context: t
}), qe = (e) => {
	e.current.handleOnClose();
}, Je = (e, t) => {
	let n = e.current;
	n.handleClose = t, e.current = n;
}, G = (e, t) => {
	let n = e.current;
	L(n) || (n.container = t), e.current = n;
}, K = (e) => e.current.container, Ye = (e, n) => {
	let r = e.current, i = r.labels[n], a = r.element_component[n];
	return i === "None" ? /* @__PURE__ */ E(T, { children: a }) : /* @__PURE__ */ D(_, {
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
}, Xe = (e) => {
	let t = {};
	return Object.keys(e.current.nameIndex).map((n, r) => {
		t[n] = Ye(e, r);
	}), /* @__PURE__ */ E(_, {
		direction: "column",
		gap: 0,
		children: Object.keys(t).map((e) => t[e])
	});
}, Ze = (e) => {
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
		L(U(K(e), c)) && (c = s.slice(0, s.length - 2).join(".")), n.target.type === "checkbox" && (r = n.currentTarget.checked), e.current = t, G(e, ke(K(e), c, l, r)), e.current = t;
	} };
}, Qe = (e, t) => {
	let n = e.current, r = n.nameIndex[t];
	return n.elements[r];
}, $e = (e, t, n) => {
	let r = typeof n, i = e.current, a = t + i.index, o = {
		name: t,
		defaultValue: Qe(e, t),
		onChange: Ze(e).onChange,
		sx: { width: "100%" }
	};
	return i.elementSelector({
		key: t,
		formRef: e,
		jsxKey: a,
		currentType: r,
		inputProps: o
	});
}, q = (e, t, n) => {
	let r = e.current, i = R(t.replace(/root\./, ""), "_"), a = i.split(".");
	if (!a.some((e) => e.toLowerCase() === "data")) {
		if (L(r.nameIndex[t])) {
			r.nameIndex[t] = r.index, r.elements[r.index] = n;
			let o = $e(e, t, n);
			if (!L(o)) {
				let e = a[a.length - 1], n = e.toLowerCase() === "subtype";
				!/^\d+$/.test(e) && !n ? r.labels[r.index] = /* @__PURE__ */ E(m, {
					column: t,
					children: i
				}, "Label" + t + r.index) : r.labels[r.index] = "None", r.element_component[r.index] = o, r.index++;
			}
		}
		e.current = r;
	}
}, et = (e, t) => e.current.nameIndex[t], tt = (e, t) => {
	let n = e.current;
	delete n.labels[et(e, t)], e.current = n;
}, nt = ({ formRef: e, container: t }) => {
	Oe(t, (t) => {
		let n = t.path, r = t.value;
		if (Array.isArray(r)) {
			let t = [];
			Object.keys(r).forEach((e) => {
				L(r[e]) || Array.isArray(r[e]) || t.push(r[e]);
			}), t.length > 0 && q(e, n, t);
			return;
		}
		Object.keys(r).forEach((t) => {
			L(r[t]) || (typeof r[t] == "object" && Object.keys(r[t]).forEach((i) => {
				let a = {};
				a[i] = r[t][i], q(e, n + "." + t + "." + i, a);
			}), I(r[t]) && q(e, n + "." + t, r[t]));
		});
	});
}, J = te(null), Y = () => re(J), rt = (e) => {
	let t = Y();
	return (n) => {
		n ? t?.register(e, n) : t?.unregister(e);
	};
}, X = (e, t = !0) => {
	let n = Y();
	return (r) => {
		t && r ? n?.register(e, r) : n?.unregister(e);
	};
}, it = ({ title: e, getSchema: n, handleSave: r, elementSelector: i, footerButtons: a, refKey: o, register_component: s = !1 }) => {
	let c = X(o, s), l = A(null), [u, f] = j(!1), p = () => {
		f(!1);
	};
	l.current ||= Ke(i, { setShow: (e) => {
		f(e);
	} }), k(() => (c(l.current), () => c(null)), [c]);
	let [m, h] = j(void 0), [g, v] = j(0);
	return a ||= [], /* @__PURE__ */ D(_, {
		direction: "row",
		gap: 3,
		children: [/* @__PURE__ */ E(d, {
			onClick: async () => {
				try {
					G(l, Ae(null, [], ".", await n())), Je(l, p), nt({
						formRef: l,
						container: K(l)
					}), h(Xe(l)), f(!0);
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
					children: /* @__PURE__ */ E("pre", { children: JSON.stringify(K(l)?.value, null, 2) })
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
}, at = ({ title: e, show: t, onCancel: r, onConfirm: i }) => /* @__PURE__ */ E(F, {
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
}), ot = ({ refreshGrid: e, api: t }) => /* @__PURE__ */ E(it, {
	title: "Create",
	getSchema: t.schema,
	handleSave: (n) => {
		t.create(n).then(() => e());
	}
}), st = ({ refreshGrid: e, api: t, id: n, title: r, footerButtons: i }) => /* @__PURE__ */ E(it, {
	title: r,
	button_title: "Update",
	getSchema: He(t, n),
	handleSave: (r) => {
		t.update(r, n).then(() => e());
	},
	footerButtons: i,
	register_component: !0,
	refKey: "update_modal"
}), ct = ({ refreshGrid: e, api: t, handleSelectedIds: r }) => {
	let [i, a] = j(!1);
	return /* @__PURE__ */ D(_, {
		direction: "horizontal",
		gap: 2,
		children: [/* @__PURE__ */ E(n, {
			onClick: () => {
				a(!i);
			},
			children: "Delete"
		}), /* @__PURE__ */ E(at, {
			onConfirm: () => {
				t.deleteIds(r()).then(e()), a(!1);
			},
			show: i
		})]
	});
}, lt = ({ refreshGrid: e, api: t, id: r }) => {
	let [i, a] = j(!1);
	return /* @__PURE__ */ D(_, {
		direction: "row",
		gap: 3,
		children: [/* @__PURE__ */ E(n, {
			onClick: () => {
				a(!i);
			},
			children: "Delete"
		}), /* @__PURE__ */ E(at, {
			onConfirm: () => {
				t.deleteId(r).then(e());
			},
			show: i
		})]
	});
}, ut = ({ handleRefreshGrid: e, api: t, id: n, params: r }) => /* @__PURE__ */ E(_, {
	direction: "row",
	gap: 1,
	children: /* @__PURE__ */ E(st, {
		...r,
		refreshGrid: e,
		api: t,
		id: n
	})
}), dt = (e, t) => {
	let n = e.current;
	n && (n.endpoint = t);
}, ft = (e) => e.current.endpoint, pt = (e, t) => {
	let n = e.current;
	W(t, (e) => {
		let t = e.value, r = e.path, i = typeof t;
		if (n.headers_ri[r] !== void 0) return;
		let a = "string";
		i === "number" ? a = "number" : r.toLowerCase().includes("date") || r.toLowerCase().includes("modified") ? a = "date" : i === "string" && (a = "string"), n.headers[n.index] = {
			field: r,
			type: a,
			headerName: r
		}, n.rows[n.index] = [], n.headers_ri[r] = n.index, n.index++;
	}), e.current = n;
}, mt = (e) => {
	let t = e.current;
	t && (t.index = 0, t.headers = [], t.rows = [], t.headers_ri = {}, ["Field", "Value"].forEach((e) => {
		let n = e;
		t.headers[t.index] = {
			field: n,
			sortable: !0,
			filterable: !0,
			width: 200,
			type: "string",
			headerName: e
		}, t.rows[t.index] = [], t.headers_ri[n] = t.index, t.index++;
	}), e.current = t);
}, ht = (e, t) => {
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
}, gt = (e, t) => {
	let n = e.current;
	n && (n.rows = [], n.row_count = 0, n.headers.forEach(() => {
		n.rows.push([]);
	}), W(t, (e) => {
		if (I(e.value)) {
			let t = n.headers_ri[e.path];
			t !== void 0 && n.rows[t].push(e.value);
		}
	}), e.current = n);
}, _t = (e) => {
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
}, vt = (e) => {
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
}, yt = (e) => {
	let t = e.current;
	return !t || !t.headers ? [] : t.headers;
}, bt = (e) => {
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
			renderCell: Nt(e)
		}, r = Math.max(0, n.length - 1);
		n.splice(r, 0, t);
	}
	return n;
}, xt = (e) => e.current.paginationModel, St = (e, t) => {
	let n = e.current;
	n && (n.args = t, e.current = n, n.refresh());
}, Ct = (e, t) => {
	let n = e.current;
	n && (n.args = {
		...n.args,
		...t
	}, e.current = n, n.refresh());
}, wt = (e, t) => {
	let n = e.current;
	n && (n.args.sortModel = JSON.stringify(t), e.current = n);
}, Tt = (e, t) => {
	let n = e.current;
	n && (n.args.filterModel = JSON.stringify(t), e.current = n);
}, Et = (e, t) => () => {
	let n = e.current;
	n && (n.paginationModel = t, n.args.paginationModel = JSON.stringify(t), e.current = n);
}, Dt = (e, t) => {
	let n = e.current;
	n && (n.fetch_params = t, e.current = n);
}, Z = (e) => e.current.fetch_params, Ot = (e, t) => ({ getRows: async (n) => {
	let r = e.current;
	if (!r) return {
		rows: [],
		rowCount: 0
	};
	Tt(e, n.filterModel), wt(e, n.sortModel);
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
			...Z(e)
		},
		args: s
	}), l = Ae(null, [], ".", c.results);
	return pt(e, l), gt(e, l), r.row_count = c.pagination?.total || 0, e.current = r, t(), {
		rows: vt(e),
		rowCount: c.pagination?.total || 0
	};
} }), kt = (e, t) => {
	let n = e.current;
	n && (n.args.search = t, e.current = n);
}, At = (e) => e.current?.datasource, Q = async (e) => {
	let t = e.current;
	if (!t) return;
	let n = t.gridRef.current;
	n.dataSource.cache.clear(), await n.dataSource.fetchRows(), t.refresh();
}, jt = (e) => (t) => {
	let n = e.current;
	if (!n || n.rows.length === 0) return;
	let r = t.ids, i = n.rows[0].length, a = Array.from({ length: i }, (e, t) => t).filter((e) => {
		let t = n.rows[0][e];
		return r.has(t);
	});
	n.selected_data = n.rows.map((e) => a.map((t) => e[t])), n.selected_ids = t, e.current = n;
}, Mt = (e, t) => {
	let n = e.current;
	n && (n.cellRenderer = t, e.current = n);
}, Nt = (e) => {
	let t = e.current;
	if (t) return t.cellRenderer ? t.cellRenderer(e) : Pt(e);
}, Pt = (e) => {
	let r = Y();
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
		return /* @__PURE__ */ E(ut, {
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
							o(!0), c(""), f(!1), await Q(e);
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
}, $ = ({ api: e, endpoint: t, row_details: n, refKey: r, cellRenderer: i, register_component: a = !1, toolbar: o = !1, checkbox_select: s = !1, datagrid_sx: c = void 0, grid_options: l = void 0 }) => {
	let u = X(r, a), d = A(null), [, f] = j(!1), [p, m] = j({
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
		datasource: t ? Ot(d, b) : void 0,
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
		columns: bt(d),
		dataSource: At(d),
		pageSizeOptions: [
			25,
			50,
			100
		],
		paginationModel: p,
		onPaginationModelChange: (e) => {
			m(e);
		},
		onRowSelectionModelChange: (e) => jt(d)(e),
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
}, Ft = ({ loading: e, value: n }) => /* @__PURE__ */ E(t, {
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
}), It = ({ ...e }) => /* @__PURE__ */ E(d, {
	...e,
	children: /* @__PURE__ */ E(we, {})
}), Lt = (e, t) => {
	let n = e.current;
	n && (n.setProgressValue(t), n.progressValue = t, e.current = n);
}, Rt = (e) => !e || !e.current ? 1 : e.current.progressValue, zt = (e, t) => {
	let n = e.current;
	n && n.handleToggle(t);
}, Bt = ({ refKey: e, register_component: t, hidden: n, onDropSuccess: r, onSend: i, textFieldSx: a, textFieldProps: o, sendButtonProps: s }) => {
	let [c, l] = j(""), [u, f] = j(!1), [m, h] = j(0), g = X(e, t), _ = A({
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
	let { ref: C, ...w } = v(), T = u ? /* @__PURE__ */ E(Ft, {
		loading: !0,
		value: m
	}) : /* @__PURE__ */ E(It, {
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
}, Vt = ({ buttons: e, endpoint: t, title: n, title_topology_params: r, button_stack_params: i, ...a }) => {
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
		}), /* @__PURE__ */ E($, {
			...a,
			endpoint: t
		})]
	});
}, Ht = ({ children: e }) => /* @__PURE__ */ D(t, {
	sx: { width: "100%" },
	children: [
		/* @__PURE__ */ E(M, {}),
		e,
		/* @__PURE__ */ E(N, {})
	]
}), Ut = ({ children: e }) => {
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
	return /* @__PURE__ */ E(J.Provider, {
		value: n,
		children: e
	});
}, Wt = C({
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
}), Gt = ({ children: e, theme: t }) => {
	let n = Wt;
	return t || (n = Wt), /* @__PURE__ */ E(Ut, { children: /* @__PURE__ */ D(b, {
		theme: n,
		children: [/* @__PURE__ */ E(a, {}), /* @__PURE__ */ E(Ht, { children: /* @__PURE__ */ E(_, {
			direction: "column",
			gap: 2,
			alignItems: "center",
			sx: { width: "100%" },
			children: e
		}) })]
	}) });
}, Kt = () => {
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
		"& .MuiDataGrid-main": { overflow: "auto" },
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
		"& .MuiDataGrid-columnSeparator": { color: "#333" }
	};
}, qt = ({ data: e, ...t }) => {
	let n = Y(), [r, i] = j({
		rows: [],
		columns: []
	});
	return O(() => {
		(async () => {
			let t = n?.get("key_value_grid");
			if (!t) return;
			let r = { current: { ...t } };
			mt(r), ht(r, e), i({
				rows: [..._t(r)],
				columns: [...yt(r)]
			}), await Q(r);
		})();
	}, [e, n]), /* @__PURE__ */ E($, {
		register_component: !0,
		datagrid_sx: Kt(),
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
export { q as AddElement, Ve as Api, P as ApiButton, Ee as CenteredContainer, F as CenteredModal, qe as Close, ot as Create, Ot as DataSourceWrapper, Kt as DatagridSx, lt as Delete, tt as DeleteLabel, ct as DeleteMany, ut as EditCellRenderer, qt as FieldValueGrid, Nt as GetCellRenderer, K as GetContainer, At as GetDatasource, et as GetElementIndex, $e as GetElementTypes, Qe as GetElementValue, Xe as GetElements, ft as GetEndpoint, Z as GetFetchParams, bt as GetHeaders, _t as GetKeyValueRows, xt as GetPaginationModel, Rt as GetProgressValue, yt as GetRawHeaders, vt as GetRows, Ye as GetSet, Vt as GridWithButtons, Gt as HFCenteredLayout, He as HandleGet, Ht as HeaderFooterLayout, Ke as InitialTypeFormBuilderRefState, L as IsNullOrUndefined, I as IsPrimitive, Pt as ModalCellRendererWrapper, Ft as ProgressAdornment, J as RefIndexContext, Ut as RefProvider, Q as Refresh, We as SelectAssociation, It as SendIconButton, St as SetArgs, Mt as SetCellRenderer, G as SetContainer, dt as SetEndpoint, Dt as SetFetchParams, Tt as SetFilterModel, Je as SetHandleClose, pt as SetHeadersFromJson, mt as SetKeyValueHeaders, ht as SetKeyValueRows, zt as SetLoading, Ct as SetOrAddArgs, Et as SetPaginationModel, Lt as SetProgressValue, gt as SetRowsFromJson, kt as SetSearch, jt as SetSelectedRows, wt as SetSortModel, R as TitleCase, nt as TypeFormBuilder, M as UIAppBar, N as UIBottomNav, Bt as UIInput, $ as UITable, st as Update, Ze as UpdateElementValues, X as useConditionalRef, rt as useManagedRef, Y as useRefIndex };
