import { AppBar as e, Box as t, Button as n, CircularProgress as r, Container as i, CssBaseline as a, Dialog as o, DialogActions as s, DialogContent as c, DialogTitle as l, FormControl as u, IconButton as d, Input as f, InputAdornment as p, InputLabel as m, Paper as h, Select as g, Stack as _, Switch as v, Tab as y, Tabs as b, TextField as ee, ThemeProvider as x, Toolbar as te, Typography as S, createTheme as ne } from "@mui/material";
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
var Ae = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), k = () => /* @__PURE__ */ C(e, {
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
	children: /* @__PURE__ */ w(te, {
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
}), je = () => /* @__PURE__ */ C(t, {
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
}), A = ({ api: e, endpoint: t, children: r, get_args: i, fetch_params: a, callback: o, ...s }) => /* @__PURE__ */ C(n, {
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
}), Me = ({ children: e, sx: n = {} }) => /* @__PURE__ */ C(t, {
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
}), j = ({ title: e, body: t, show: n, footer: r, title_sx: i, footer_sx: a, content_sx: u, paper_sx: d }) => /* @__PURE__ */ w(o, {
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
}), M = (e) => {
	if (e === null) return !0;
	let t = typeof e;
	return t === "string" || t === "number" || t === "boolean" || t === "undefined" || t === "symbol" || t === "bigint" || t === "int";
}, N = (e) => e == null, P = (e, t) => N(e) ? "" : e.split(t).map((e) => e.charAt(0).toUpperCase() + e.slice(1)).join(" "), F = "Values", I = "Containers", L = (e, t, n, r) => {
	let i = r || {
		[F]: /* @__PURE__ */ new Map(),
		[I]: /* @__PURE__ */ new Map()
	}, a = e ? t : "root", o = {
		parent: e,
		path: a,
		value: n,
		children: [],
		root: e ? e.root : null,
		containerIndex: i
	};
	return e || (o.root = o), i[F].set(a, n), i[I].set(a, o), Object.freeze(o);
}, Ne = (e, t, n) => {
	let r = L(e, t, n, e.containerIndex);
	return {
		...e,
		children: [...e.children, r]
	};
}, R = (e, t) => e.containerIndex[I].get(t), Pe = (e, t) => {
	for (let [n, r] of e.containerIndex[F].entries()) t(n, r);
}, Fe = (e, t) => {
	for (let [, n] of e.containerIndex[I].entries()) t(n);
}, z = (e, t, n = 2) => {
	Pe(e, (e, r) => {
		let i = Object.keys(r);
		for (let a = 0; a < i.length; a++) {
			let o = e.split(".");
			o.push(i[a]);
			let s = o.slice(2).join("."), c = r[i[a]];
			o.length > n && M(c) && t({
				i: a,
				value: c,
				path: s,
				fullpath: o.join("."),
				key: e,
				containerValue: r
			});
		}
	});
}, Ie = (e, t, n, r) => {
	if (!e || !t) return e;
	let i = e.containerIndex[I].get(t);
	if (!i) return console.warn(`Container at path "${t}" not found.`), e;
	let a = {};
	a[n] = r;
	let o = {
		...i.value,
		...a
	}, s = L(i.parent, i.path, o, e.containerIndex);
	e.containerIndex[I].set(t, s), e.containerIndex[F].set(t, o);
	let c = s;
	for (; c.parent;) {
		let t = c.parent, n = t.children.map((e) => e.path === c.path ? c : e), r = c.path.split("."), i = r.slice(r.length - 1), a = { ...e.containerIndex[F].get(t.path) };
		a[i] = o;
		let s = Object.freeze({
			...t,
			children: n,
			value: a
		});
		e.containerIndex[I].set(s.path, s), c = s;
	}
	return e.containerIndex[I].get("root");
}, B = (e = null, t = [], n = "_", ...r) => {
	e === null && (e = L(null, "root", r.length === 0 ? {} : r[0]), t = ["root"]);
	let i = (e, t) => {
		let r = e.value;
		return typeof r == "object" && r && (Array.isArray(r) ? r.forEach((r, a) => {
			if (typeof r == "object" && r) {
				let o = [...t, String(a)];
				i(Ne(e, o.join(n), r).children.at(-1), o);
			}
		}) : Object.entries(r).forEach(([r, a]) => {
			if (typeof a == "object" && a) {
				let o = [...t, r];
				i(Ne(e, o.join(n), a).children.at(-1), o);
			}
		})), e;
	};
	return i(e, t);
}, Le = ({ inputKey: e, inputProps: t }) => {
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
}, Re = ({ fileData: e, onChange: t, name: n }) => {
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
}, ze = ({ fileData: e, subtype: n, inputProps: r }) => /* @__PURE__ */ C(t, {
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
			}), /* @__PURE__ */ C(Re, {
				fileData: e,
				onChange: r.onChange,
				name: r.name
			})]
		})
	})
}), Be = (/* @__PURE__ */ Ae(((e, t) => {
	t.exports = {};
})))(), Ve = async (e) => {
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
}, He = (e) => {
	e = atob(e);
	let t = new ArrayBuffer(e.length), n = new Uint8Array(t);
	for (let t = 0; t < e.length; t++) n[t] = e.charCodeAt(t);
	return n;
}, Ue = "data:image/#{encoding};base64,#{data}", We = ({ data: e, encoding: t, alt: n }) => {
	let r = Ue, [i, a] = O(void 0);
	return N(t) && (t = "png"), N(n) && (n = "ERROR"), Ve(new Blob([He(e)])).then((e) => {
		r = r.replace("#{encoding}", t), r = r.replace("#{data}", Be.Buffer.from(e).toString("base64")), a(r);
	}), /* @__PURE__ */ C(Ce, {
		src: i,
		fluid: !0,
		alt: n
	});
}, Ge = (e) => {
	let t = "", n = Object.keys(e).map((t) => {
		let n = e[t];
		return N(n) ? "" : `${encodeURIComponent(t)}=${encodeURIComponent(n)}`;
	}).filter((e) => e !== "").join("&");
	if (n) {
		let e = t.indexOf("#");
		e !== -1 && (t = t.slice(0, e)), t += (t.indexOf("?") === -1 ? "?" : "&") + n;
	}
	return t;
}, Ke = (e, { baseHeaders: t, handleErr: n, handleFinally: r, debug: i } = {}) => {
	let a = {
		"Content-Type": "application/json",
		...t
	}, o = (e) => {
		console.log(e);
	}, s = ({ endpoint: t, inputHeaders: s, fetchParams: c, args: l }) => {
		N(t) && (t = "");
		let u = e + t, d = {
			method: "GET",
			headers: {
				...a,
				...s
			},
			...c
		};
		return N(l) || (d.method === "POST" && (d.body = JSON.stringify(l)), d.method === "GET" && (u += Ge(l))), fetch(u, d).catch((e) => n(e)).finally(() => {
			i && o({
				endpoint: t,
				inputHeaders: s,
				fetchParams: c
			}), !N(r) && r({
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
Ke("http://localhost:8080/", {
	handleErr: (e) => console.log(e),
	debug: !0
});
//#endregion
//#region src/utility/api.js
var qe = ({ endpoint: e, handleErr: t }) => {
	N(t) && (t = (e) => console.log(e));
	let n = Ke(e, { handleErr: t });
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
}, Je = (e, t) => () => e.get(t), Ye = ({ jsxKey: e, endpoint: t, inputProps: n }) => {
	let [r, i] = O([/* @__PURE__ */ C("option", {
		value: n.defaultValue,
		children: n.defaultValue
	}, e + "-" + n.defaultValue)]), a = qe({ endpoint: t });
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
}, V = ({ jsxKey: e, key: t, inputProps: n }) => {
	let r;
	return t.charAt(t.length - 1) === "D" && t.charAt(t.length - 2) === "I" || t.charAt(t.length - 1) === "S" && t.charAt(t.length - 2) === "D" ? (t.charAt(t.length - 1) === "D" && t.charAt(t.length - 2) === "I" && (r = t.slice(5, t.length - 2)), t.charAt(t.length - 1) === "S" && t.charAt(t.length - 2) === "D" && (r = t.slice(5, t.length - 3), n = {
		...n,
		multiple: !0
	}), /* @__PURE__ */ C(Ye, {
		endpoint: r,
		jsxKey: e,
		inputProps: n
	})) : null;
}, Xe = () => ({ formRef: e, jsxKey: t, key: n, currentType: r, inputProps: i }) => {
	let a = V({
		jsxKey: t,
		key: n,
		inputProps: i
	});
	if (!N(a)) return a;
	if (a = /* @__PURE__ */ C(f, {
		type: "text",
		...i
	}, t), r === "number" || r === "bigint") return /* @__PURE__ */ C(f, {
		type: "number",
		...i
	}, t);
	if (r === "boolean") return /* @__PURE__ */ C(v, {
		...i,
		defaultChecked: i.defaultValue
	}, t);
	if (r === "object") {
		if (i.defaultValue.Subtype === 19) return /* @__PURE__ */ C(qt, { data: R(G(e), n.slice(0, n.lastIndexOf(".")))?.value.Data });
		if (i.defaultValue.Subtype === 17) return /* @__PURE__ */ C(We, { data: R(G(e), n.slice(0, n.lastIndexOf(".")))?.value.Data }, t);
		if (i.defaultValue.Subtype === 16 || i.defaultValue.Subtype === 0) {
			let r = R(G(e), n.slice(0, n.lastIndexOf(".")));
			return i.name = n.slice(0, n.lastIndexOf(".")) + ".Data", /* @__PURE__ */ C(ze, {
				fileData: JSON.stringify(r?.value.Data, null, 2),
				inputProps: i,
				subtype: i.defaultValue.Subtype
			}, t);
		}
		if (i.defaultValue.Subtype === 18) {
			let r = R(G(e), n.slice(0, n.lastIndexOf(".")));
			return i.name = n.slice(0, n.lastIndexOf(".")) + ".Data", /* @__PURE__ */ C(ze, {
				fileData: r?.value.Data,
				inputProps: i,
				subtype: i.defaultValue.Subtype
			}, t);
		}
		if (!N(i.defaultValue.Subtype) || !N(i.defaultValue.Data)) return null;
		if (Array.isArray(i.defaultValue)) return Object.keys(i.defaultValue).map((e) => /* @__PURE__ */ C(f, {
			type: "text",
			...i,
			defaultValue: i.defaultValue[e]
		}, t));
		if (N(i.defaultValue)) return;
		let r = Object.keys(i.defaultValue)[0];
		return typeof i.defaultValue[r] == "object" ? null : /* @__PURE__ */ C(Le, {
			inputKey: n,
			inputProps: i
		});
	}
	return a;
}, H = (e, t = {}) => ({
	index: 0,
	elements: {},
	nameIndex: {},
	labels: {},
	element_component: {},
	container: void 0,
	handleOnClose: void 0,
	elementSelector: e || Xe(),
	context: t
}), Ze = (e) => {
	e.current.handleOnClose();
}, U = (e, t) => {
	let n = e.current;
	n.handleClose = t, e.current = n;
}, W = (e, t) => {
	let n = e.current;
	N(n) || (n.container = t), e.current = n;
}, G = (e) => e.current.container, Qe = (e, n) => {
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
}, $e = (e) => {
	let t = {};
	return Object.keys(e.current.nameIndex).map((n, r) => {
		t[n] = Qe(e, r);
	}), /* @__PURE__ */ C(_, {
		direction: "column",
		gap: 0,
		children: Object.keys(t).map((e) => t[e])
	});
}, et = (e) => {
	let t = e.current;
	return { onChange: (n) => {
		let r = n.target.value, i = n.target.selectedOptions;
		if (!N(i)) {
			let e = [].slice.call(i);
			r = e.map((e) => e.value), e.length === 1 && (r = r[0]);
		}
		n.target.type === "datetime-local" && (r = new Date(Date.parse(r)).toISOString());
		let a = n.target.name, o = t.nameIndex[a];
		N(o) && (t.nameIndex[a] = t.index, o = t.index, e.current = t), t.elements[o] = r;
		let s = a.split("."), c = s.slice(0, s.length - 1).join("."), l = s.slice(s.length - 1);
		N(R(G(e), c)) && (c = s.slice(0, s.length - 2).join(".")), n.target.type === "checkbox" && (r = n.currentTarget.checked), e.current = t, W(e, Ie(G(e), c, l, r)), e.current = t;
	} };
}, tt = (e, t) => {
	let n = e.current, r = n.nameIndex[t];
	return n.elements[r];
}, nt = (e, t, n) => {
	let r = typeof n, i = e.current, a = t + i.index, o = {
		name: t,
		defaultValue: tt(e, t),
		onChange: et(e).onChange,
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
	let r = e.current;
	if (N(r.nameIndex[t])) {
		r.nameIndex[t] = r.index, r.elements[r.index] = n;
		let i = nt(e, t, n);
		if (!N(i)) {
			let e = P(t.replace(/root\./, ""), "_"), n = e.split("."), a = n[n.length - 1], o = a.toLowerCase() === "subtype", s = n.includes("data"), c = /^\d+$/.test(a);
			if (s) return;
			!c && !o ? r.labels[r.index] = /* @__PURE__ */ C(m, {
				column: t,
				children: e
			}, "Label" + t + r.index) : r.labels[r.index] = "None", r.element_component[r.index] = i, r.index++;
		}
	}
	e.current = r;
}, rt = (e, t) => e.current.nameIndex[t], it = (e, t) => {
	let n = e.current;
	delete n.labels[rt(e, t)], e.current = n;
}, at = ({ formRef: e, container: t }) => {
	Fe(t, (t) => {
		let n = t.path, r = t.value;
		if (Array.isArray(r)) {
			let t = [];
			Object.keys(r).forEach((e) => {
				N(r[e]) || Array.isArray(r[e]) || t.push(r[e]);
			}), t.length > 0 && K(e, n, t);
			return;
		}
		Object.keys(r).forEach((t) => {
			N(r[t]) || (typeof r[t] == "object" && Object.keys(r[t]).forEach((i) => {
				let a = {};
				a[i] = r[t][i], K(e, n + "." + t + "." + i, a);
			}), M(r[t]) && K(e, n + "." + t, r[t]));
		});
	});
}, q = oe(null), J = () => ce(q), ot = (e) => {
	let t = J();
	return (n) => {
		n ? t?.register(e, n) : t?.unregister(e);
	};
}, Y = (e, t = !0) => {
	let n = J();
	return (r) => {
		t && r ? n?.register(e, r) : n?.unregister(e);
	};
}, st = ({ title: e, getSchema: n, handleSave: r, elementSelector: i, footerButtons: a, refKey: o, register_component: s = !1 }) => {
	let c = Y(o, s), l = D(null), [u, f] = O(!1), p = () => {
		f(!1);
	};
	l.current ||= H(i, { setShow: (e) => {
		f(e);
	} }), E(() => (c(l.current), () => c(null)), [c]);
	let [m, h] = O(void 0), [g, v] = O(0);
	return a ||= [], /* @__PURE__ */ w(_, {
		direction: "row",
		gap: 3,
		children: [/* @__PURE__ */ C(d, {
			onClick: async () => {
				try {
					W(l, B(null, [], ".", await n())), U(l, p), at({
						formRef: l,
						container: G(l)
					}), h($e(l)), f(!0);
				} catch (e) {
					console.error("Failed to load schema:", e);
				}
			},
			children: /* @__PURE__ */ C(we, { sx: { color: "red" } })
		}), /* @__PURE__ */ C(j, {
			title: e,
			body: /* @__PURE__ */ w(t, {
				sx: { width: "100%" },
				children: [
					/* @__PURE__ */ C(t, {
						sx: {
							borderBottom: 1,
							borderColor: "divider"
						},
						children: /* @__PURE__ */ w(b, {
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
						children: /* @__PURE__ */ C("pre", { children: JSON.stringify(G(l)?.value, null, 2) })
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
}, ct = ({ title: e, show: t, onCancel: r, onConfirm: i }) => /* @__PURE__ */ C(j, {
	title: e || "Are you sure?",
	show: t,
	footer: /* @__PURE__ */ w(_, {
		direction: "column",
		gap: 3,
		children: [/* @__PURE__ */ C(n, {
			onClick: () => {
				N(r) || r();
			},
			children: "Cancel"
		}), /* @__PURE__ */ C(n, {
			onClick: () => {
				N(i) || i();
			},
			children: "Confirm"
		})]
	})
}), lt = ({ refreshGrid: e, api: t }) => /* @__PURE__ */ C(st, {
	title: "Create",
	getSchema: t.schema,
	handleSave: (n) => {
		t.create(n).then(() => e());
	}
}), ut = ({ refreshGrid: e, api: t, id: n, title: r, footerButtons: i }) => /* @__PURE__ */ C(st, {
	title: r,
	button_title: "Update",
	getSchema: Je(t, n),
	handleSave: (r) => {
		t.update(r, n).then(() => e());
	},
	footerButtons: i,
	register_component: !0,
	refKey: "update_modal"
}), dt = ({ refreshGrid: e, api: t, handleSelectedIds: r }) => {
	let [i, a] = O(!1);
	return /* @__PURE__ */ w(_, {
		direction: "horizontal",
		gap: 2,
		children: [/* @__PURE__ */ C(n, {
			onClick: () => {
				a(!i);
			},
			children: "Delete"
		}), /* @__PURE__ */ C(ct, {
			onConfirm: () => {
				t.deleteIds(r()).then(e()), a(!1);
			},
			show: i
		})]
	});
}, ft = ({ refreshGrid: e, api: t, id: r }) => {
	let [i, a] = O(!1);
	return /* @__PURE__ */ w(_, {
		direction: "row",
		gap: 3,
		children: [/* @__PURE__ */ C(n, {
			onClick: () => {
				a(!i);
			},
			children: "Delete"
		}), /* @__PURE__ */ C(ct, {
			onConfirm: () => {
				t.deleteId(r).then(e());
			},
			show: i
		})]
	});
}, pt = ({ handleRefreshGrid: e, api: t, id: n, params: r }) => /* @__PURE__ */ C(_, {
	direction: "row",
	gap: 1,
	children: /* @__PURE__ */ C(ut, {
		...r,
		refreshGrid: e,
		api: t,
		id: n
	})
}), mt = (e, t) => {
	let n = e.current;
	n && (n.endpoint = t);
}, ht = (e) => e.current.endpoint, gt = (e, t) => {
	let n = e.current;
	z(t, (e) => {
		let t = e.value, r = e.path, i = typeof t;
		if (n.headers_ri[r] !== void 0) return;
		let a = "string";
		i === "number" ? a = "number" : r.toLowerCase().includes("date") || r.toLowerCase().includes("modified") ? a = "date" : i === "string" && (a = "string"), n.headers[n.index] = {
			field: r,
			type: a,
			headerName: r
		}, n.rows[n.index] = [], n.headers_ri[r] = n.index, n.index++;
	}), e.current = n;
}, _t = (e) => {
	let t = e.current;
	t && (["Field", "Value"].map((e) => {
		let n = e;
		t.headers[t.index] = {
			field: n,
			sortable: !0,
			filterable: !0,
			flex: 2,
			type: "string",
			headerName: e
		}, t.rows[t.index] = [], t.headers_ri[n] = t.index, t.index++;
	}), e.current = t);
}, vt = (e, t) => {
	let n = e.current;
	n && (n.rows = [], n.row_count = 0, z(t, (e) => {
		M(e.value) && ["Field", "Value"].map((t) => {
			let r = n.headers_ri[t];
			r !== void 0 && n.rows[r].push(e.value);
		});
	}), e.current = n);
}, yt = (e, t) => {
	let n = e.current;
	n && (n.rows = [], n.row_count = 0, n.headers.forEach(() => {
		n.rows.push([]);
	}), z(t, (e) => {
		if (M(e.value)) {
			let t = n.headers_ri[e.path];
			t !== void 0 && n.rows[t].push(e.value);
		}
	}), e.current = n);
}, X = (e) => {
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
		headerName: P(e.split(".").pop(), "_"),
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
}, kt = (e) => e.current.fetch_params, At = (e, t) => ({ getRows: async (n) => {
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
		Array.isArray(t) && t.length === 0 || N(t) || (s[e] = t);
	}), N(n.sortModel) || Array.isArray(n.sortModel) && n.sortModel.length === 0 && delete s.sortModel, N(n.filterModel) || Array.isArray(n.filterModel.items) && n.filterModel.items.length === 0 && delete s.filterModel;
	let c = await r.api?.at("/" + r.endpoint, {
		fetchParams: {
			method: "GET",
			...kt(e)
		},
		args: s
	}), l = B(null, [], ".", c.results);
	return gt(e, l), yt(e, l), r.row_count = c.pagination?.total || 0, e.current = r, t(), {
		rows: X(e),
		rowCount: c.pagination?.total || 0
	};
} }), jt = (e, t) => {
	let n = e.current;
	n && (n.args.search = t, e.current = n);
}, Z = (e) => e.current.datasource, Q = async (e) => {
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
		return /* @__PURE__ */ C(pt, {
			params: {
				footerButtons: [
					a && /* @__PURE__ */ C(ee, {
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
					a && /* @__PURE__ */ C(A, {
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
					!a && /* @__PURE__ */ C(A, {
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
	let u = Y(r, a), d = D(null), [, f] = O(!1), [p, m] = O({
		page: 0,
		pageSize: 25
	}), [h, g] = O(0), [_, v] = O({ id: !1 }), y = fe(), b = () => {
		d.current && g(d.current.row_count), f((e) => !e);
	};
	return d.current ||= {
		gridRef: y,
		index: 0,
		headers: [],
		headers_ri: {},
		rows: [],
		row_count: 0,
		datasource: At(d, b),
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
		modal_title: null
	}, E(() => (u(d.current), () => u(null)), [u]), /* @__PURE__ */ C(ue, {
		apiRef: y,
		disableVirtualization: !0,
		columnVisibilityModel: _,
		onColumnVisibilityModelChange: (e) => v(e),
		rowCount: h,
		sx: {
			width: "80hv",
			...c
		},
		columns: xt(d),
		dataSource: Z(d),
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
			console.error("DataGrid Error Type:", e.name), console.error("DataGrid Error Message:", e.message), e.cause && (console.group("Original Error Cause"), console.error("Message:", e.cause.message), console.error("Stack:", e.cause.stack), console.groupEnd()), e instanceof de ? console.warn("Fetch failed. Check your API mock or network.") : console.warn("Row update failed.");
		},
		...l
	});
}, It = ({ loading: e, value: n }) => /* @__PURE__ */ C(t, {
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
}), Lt = ({ ...e }) => /* @__PURE__ */ C(d, {
	...e,
	children: /* @__PURE__ */ C(ke, {})
}), Rt = (e, t) => {
	let n = e.current;
	n && (n.setProgressValue(t), n.progressValue = t, e.current = n);
}, zt = (e) => !e || !e.current ? 1 : e.current.progressValue, Bt = (e, t) => {
	let n = e.current;
	n && n.handleToggle(t);
}, Vt = ({ refKey: e, register_component: t, hidden: n, onDropSuccess: r, onSend: i, textFieldSx: a, textFieldProps: o, sendButtonProps: s }) => {
	let [c, l] = O(""), [u, f] = O(!1), [m, h] = O(0), g = Y(e, t), _ = D({
		handleToggle: (e) => {
			f(e);
		},
		progressValue: 0,
		setProgressValue: h
	}), { getRootProps: v, getInputProps: y, open: b, isDragActive: x } = De({
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
	let { ref: te, ...S } = v(), ne = u ? /* @__PURE__ */ C(It, {
		loading: !0,
		value: m
	}) : /* @__PURE__ */ C(Lt, {
		onClick: i,
		sx: { color: m === 100 ? "red" : "inherit" },
		...s
	});
	return /* @__PURE__ */ C(ee, {
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
				inputRef: te,
				startAdornment: /* @__PURE__ */ w(p, {
					position: "start",
					children: [/* @__PURE__ */ C("input", { ...y() }), /* @__PURE__ */ C(d, {
						onClick: b,
						children: /* @__PURE__ */ C(Oe, {})
					})]
				}),
				endAdornment: ne
			}
		},
		sx: {
			width: "100%",
			backgroundColor: x ? "action.hover" : "inherit",
			"& .MuiOutlinedInput-root": { transition: "background-color 0.2s" },
			display: n ? "none" : "flex",
			...a
		},
		...o
	});
}, Ht = ({ buttons: e, endpoint: t, title: n, title_topology_params: r, button_stack_params: i, ...a }) => {
	let o = e?.map((e) => e);
	return /* @__PURE__ */ w(_, {
		direction: "column",
		gap: 2,
		sx: { width: "100%" },
		children: [/* @__PURE__ */ w(_, {
			justifyContent: "space-between",
			alignItems: "center",
			direction: "row",
			children: [/* @__PURE__ */ C(S, {
				variant: "h6",
				sx: {
					m: 2,
					whiteSpace: "nowrap",
					overflow: "hidden",
					textOverflow: "ellipsis"
				},
				...r,
				children: n
			}), /* @__PURE__ */ C(_, {
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
		}), /* @__PURE__ */ C($, {
			...a,
			endpoint: t
		})]
	});
}, Ut = ({ children: e }) => /* @__PURE__ */ w(t, {
	sx: { width: "100%" },
	children: [
		/* @__PURE__ */ C(k, {}),
		e,
		/* @__PURE__ */ C(je, {})
	]
}), Wt = ({ children: e }) => {
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
	return /* @__PURE__ */ C(q.Provider, {
		value: n,
		children: e
	});
}, Gt = ne({
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
	return t || (n = Gt), /* @__PURE__ */ C(Wt, { children: /* @__PURE__ */ w(x, {
		theme: n,
		children: [/* @__PURE__ */ C(a, {}), /* @__PURE__ */ C(Ut, { children: /* @__PURE__ */ C(_, {
			direction: "column",
			gap: 2,
			alignItems: "center",
			sx: { width: "100%" },
			children: e
		}) })]
	}) });
}, qt = ({ data: e, ...t }) => {
	let n = J(), [r, i] = O({
		rows: [],
		columns: []
	}), a = () => ({ current: n?.get("key_value_grid") });
	return E(() => {
		let t = a();
		_t(t), vt(t, B(null, [], ".", e)), i({
			rows: X(t),
			columns: bt(t)
		}), Q(t);
	}, [e, n]), /* @__PURE__ */ C($, {
		...t,
		grid_options: {
			columns: r.columns,
			rows: r.rows,
			paginationMode: "client",
			sortingMode: "client",
			filterMode: "client",
			datasource: void 0,
			rowSelection: !1,
			disableVirtualization: !0,
			sx: {
				height: 400,
				width: "100%",
				...t.datagrid_sx
			},
			getRowId: (e) => e.key
		},
		refKey: "key_value_grid"
	});
};
//#endregion
export { K as AddElement, qe as Api, A as ApiButton, Me as CenteredContainer, j as CenteredModal, Ze as Close, lt as Create, At as DataSourceWrapper, ft as Delete, it as DeleteLabel, dt as DeleteMany, pt as EditCellRenderer, qt as FieldValueGrid, Pt as GetCellRenderer, G as GetContainer, Z as GetDatasource, rt as GetElementIndex, nt as GetElementTypes, tt as GetElementValue, $e as GetElements, ht as GetEndpoint, kt as GetFetchParams, xt as GetHeaders, St as GetPaginationModel, zt as GetProgressValue, bt as GetRawHeaders, X as GetRows, Qe as GetSet, Ht as GridWithButtons, Kt as HFCenteredLayout, Je as HandleGet, Ut as HeaderFooterLayout, H as InitialTypeFormBuilderRefState, N as IsNullOrUndefined, M as IsPrimitive, Ft as ModalCellRendererWrapper, It as ProgressAdornment, q as RefIndexContext, Wt as RefProvider, Q as Refresh, V as SelectAssociation, Lt as SendIconButton, Ct as SetArgs, Nt as SetCellRenderer, W as SetContainer, mt as SetEndpoint, Ot as SetFetchParams, Et as SetFilterModel, U as SetHandleClose, gt as SetHeadersFromJson, _t as SetKeyValueHeaders, vt as SetKeyValueRows, Bt as SetLoading, wt as SetOrAddArgs, Dt as SetPaginationModel, Rt as SetProgressValue, yt as SetRowsFromJson, jt as SetSearch, Mt as SetSelectedRows, Tt as SetSortModel, P as TitleCase, at as TypeFormBuilder, k as UIAppBar, je as UIBottomNav, Vt as UIInput, $ as UITable, ut as Update, et as UpdateElementValues, Y as useConditionalRef, ot as useManagedRef, J as useRefIndex };
