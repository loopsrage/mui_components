import { AppBar as e, Box as t, Button as n, CircularProgress as r, Container as i, CssBaseline as a, Dialog as o, DialogActions as s, DialogContent as c, DialogTitle as l, FormControl as u, IconButton as d, Input as f, InputAdornment as p, InputLabel as m, Paper as h, Select as g, Stack as _, Switch as v, Tab as y, Tabs as b, TextField as x, ThemeProvider as S, Toolbar as ee, Typography as C, createTheme as w } from "@mui/material";
import te from "@mui/icons-material/BugReport";
import { Fragment as ne, jsx as T, jsxs as E } from "react/jsx-runtime";
import re, { createContext as ie, useCallback as ae, useContext as oe, useEffect as D, useLayoutEffect as O, useMemo as se, useRef as k, useState as A } from "react";
import { DataGrid as ce, GridGetRowsError as le, useGridApiRef as ue } from "@mui/x-data-grid";
import { LexicalComposer as de } from "@lexical/react/LexicalComposer";
import { RichTextPlugin as fe } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable as pe } from "@lexical/react/LexicalContentEditable";
import { LexicalErrorBoundary as me } from "@lexical/react/LexicalErrorBoundary";
import { useLexicalComposerContext as he } from "@lexical/react/LexicalComposerContext";
import { $generateHtmlFromNodes as ge, $generateNodesFromDOM as _e } from "@lexical/html";
import { $getRoot as ve, ParagraphNode as ye, TextNode as be } from "lexical";
import { Image as xe } from "mui-image";
import Se from "@mui/icons-material/Description";
import Ce from "@mui/icons-material/Close";
import { useDropzone as we } from "react-dropzone";
import Te from "@mui/icons-material/CloudUpload";
import Ee from "@mui/icons-material/Send";
//#region \0rolldown/runtime.js
var De = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), j = ({ title: n, appbar_sx: r }) => /* @__PURE__ */ T(e, {
	position: "static",
	sx: {
		minHeight: 50,
		px: 2,
		mt: "auto",
		backgroundColor: "black",
		width: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-end",
		...r
	},
	children: /* @__PURE__ */ E(ee, {
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
			/* @__PURE__ */ T(C, {
				variant: "h6",
				component: "div",
				sx: { flexGrow: 1 },
				children: n
			}),
			/* @__PURE__ */ T(d, {
				size: "small",
				sx: { color: "white" },
				onClick: () => console.log("Debug Clicked"),
				children: /* @__PURE__ */ T(te, { fontSize: "small" })
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
}), Oe = ({ api: e, endpoint: t, children: r, get_args: i, fetch_params: a, callback: o, ...s }) => /* @__PURE__ */ T(n, {
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
}), ke = ({ children: e, sx: n = {} }) => /* @__PURE__ */ T(t, {
	sx: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		minHeight: "100vh",
		...n
	},
	children: /* @__PURE__ */ T(_, {
		direction: "column",
		sx: { width: "100%" },
		children: e
	})
}), N = ({ title: e, body: t, show: n, footer: r, title_sx: i, footer_sx: a, content_sx: u, paper_sx: d }) => /* @__PURE__ */ E(o, {
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
		/* @__PURE__ */ T(l, {
			id: "centered-modal-title",
			sx: { ...i },
			children: e
		}),
		/* @__PURE__ */ T(c, {
			dividers: !0,
			sx: { ...u },
			children: t
		}),
		/* @__PURE__ */ T(s, {
			sx: a,
			children: r
		})
	]
}), P = (e) => {
	if (e === null) return !0;
	let t = typeof e;
	return t === "string" || t === "number" || t === "boolean" || t === "undefined" || t === "symbol" || t === "bigint" || t === "int";
}, F = (e) => e == null, I = (e, t) => F(e) ? "" : e.split(t).map((e) => e.charAt(0).toUpperCase() + e.slice(1)).join(" "), L = "Values", R = "Containers", z = (e, t, n, r) => {
	let i = r || {
		[L]: /* @__PURE__ */ new Map(),
		[R]: /* @__PURE__ */ new Map()
	}, a = e ? t : "root", o = {
		parent: e,
		path: a,
		value: n,
		children: [],
		root: e ? e.root : null,
		containerIndex: i
	};
	return e || (o.root = o), i[L].set(a, n), i[R].set(a, o), Object.freeze(o);
}, B = (e, t, n) => {
	let r = z(e, t, n, e.containerIndex);
	return {
		...e,
		children: [...e.children, r]
	};
}, V = (e, t) => e.containerIndex[R].get(t), Ae = (e, t) => {
	for (let [n, r] of e.containerIndex[L].entries()) t(n, r);
}, je = (e, t) => {
	for (let [, n] of e.containerIndex[R].entries()) t(n);
}, H = (e, t, n = 2) => {
	Ae(e, (e, r) => {
		let i = Object.keys(r);
		for (let a = 0; a < i.length; a++) {
			let o = e.split(".");
			o.push(i[a]);
			let s = o.slice(2).join("."), c = r[i[a]];
			o.length > n && P(c) && t({
				i: a,
				value: c,
				path: s,
				fullpath: o.join("."),
				key: e,
				containerValue: r
			});
		}
	});
}, Me = (e, t, n, r) => {
	if (!e || !t) return e;
	let i = e.containerIndex[R].get(t);
	if (!i) return console.warn(`Container at path "${t}" not found.`), e;
	let a = {};
	a[n] = r;
	let o = {
		...i.value,
		...a
	}, s = z(i.parent, i.path, o, e.containerIndex);
	e.containerIndex[R].set(t, s), e.containerIndex[L].set(t, o);
	let c = s;
	for (; c.parent;) {
		let t = c.parent, n = t.children.map((e) => e.path === c.path ? c : e), r = c.path.split("."), i = r.slice(r.length - 1), a = { ...e.containerIndex[L].get(t.path) };
		a[i] = o;
		let s = Object.freeze({
			...t,
			children: n,
			value: a
		});
		e.containerIndex[R].set(s.path, s), c = s;
	}
	return e.containerIndex[R].get("root");
}, U = (e = null, t = [], n = "_", ...r) => {
	e === null && (e = z(null, "root", r.length === 0 ? {} : r[0]), t = ["root"]);
	let i = (e, t) => {
		let r = e.value;
		return typeof r == "object" && r && (Array.isArray(r) ? r.forEach((r, a) => {
			if (typeof r == "object" && r) {
				let o = [...t, String(a)];
				i(B(e, o.join(n), r).children.at(-1), o);
			}
		}) : Object.entries(r).forEach(([r, a]) => {
			if (typeof a == "object" && a) {
				let o = [...t, r];
				i(B(e, o.join(n), a).children.at(-1), o);
			}
		})), e;
	};
	return i(e, t);
}, Ne = ({ inputKey: e, inputProps: t }) => {
	let n = Object.keys(t.defaultValue)[0], r = t.defaultValue[n], [i, a] = A(/* @__PURE__ */ T(u, {
		type: "text",
		onChange: t.onChange,
		defaultValue: r
	})), o = (e, n) => {
		a(re.cloneElement(i, {
			...t,
			defaultValue: r,
			name: e + "." + n
		}));
	}, [s, c] = A(/* @__PURE__ */ T(u, {
		type: "text",
		...t,
		defaultValue: n,
		onChange: (t) => o(e, t.target.value)
	}));
	return D(() => {
		o(e, n);
	}, []), /* @__PURE__ */ E(_, {
		direction: "horizontal",
		gap: 2,
		children: [s, i]
	});
}, Pe = ({ fileData: e, onChange: t, name: n }) => {
	let [r] = he(), i = k("");
	return D(() => {
		e && (async () => {
			if (!e) return;
			let t = String(e).replace(/^"|"$/g, "").replace(/\\n/g, "<br/>");
			t !== i.current && (i.current = t, r.update(() => {
				let e = ve();
				e.clear();
				let n = _e(r, new DOMParser().parseFromString(`<div>${t}</div>`, "text/html"));
				n.length > 0 && e.append(...n);
			}));
		})();
	}, [e, r]), D(() => r.registerUpdateListener(({ editorState: e }) => {
		e.read(() => {
			let e = ge(r);
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
}, Fe = ({ fileData: e, subtype: n, inputProps: r }) => /* @__PURE__ */ T(t, {
	sx: { width: "100%" },
	children: /* @__PURE__ */ T(h, {
		variant: "outlined",
		sx: {
			p: 2,
			minHeight: "200px",
			position: "relative"
		},
		children: /* @__PURE__ */ E(de, {
			initialConfig: {
				namespace: "MyEditor",
				nodes: [ye, be],
				theme: {},
				onError: (e) => console.error("Lexical Error:", e),
				editable: n !== 0
			},
			children: [/* @__PURE__ */ T(fe, {
				contentEditable: /* @__PURE__ */ T(pe, { style: {
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
				ErrorBoundary: me
			}), /* @__PURE__ */ T(Pe, {
				fileData: e,
				onChange: r.onChange,
				name: r.name
			})]
		})
	})
}), Ie = (/* @__PURE__ */ De(((e, t) => {
	t.exports = {};
})))(), Le = async (e) => {
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
}, Re = (e) => {
	e = atob(e);
	let t = new ArrayBuffer(e.length), n = new Uint8Array(t);
	for (let t = 0; t < e.length; t++) n[t] = e.charCodeAt(t);
	return n;
}, ze = "data:image/#{encoding};base64,#{data}", Be = ({ data: e, encoding: t, alt: n }) => {
	let r = ze, [i, a] = A(void 0);
	return F(t) && (t = "png"), F(n) && (n = "ERROR"), Le(new Blob([Re(e)])).then((e) => {
		r = r.replace("#{encoding}", t), r = r.replace("#{data}", Ie.Buffer.from(e).toString("base64")), a(r);
	}), /* @__PURE__ */ T(xe, {
		src: i,
		fluid: !0,
		alt: n
	});
}, Ve = (e) => {
	let t = "", n = Object.keys(e).map((t) => {
		let n = e[t];
		return F(n) ? "" : `${encodeURIComponent(t)}=${encodeURIComponent(n)}`;
	}).filter((e) => e !== "").join("&");
	if (n) {
		let e = t.indexOf("#");
		e !== -1 && (t = t.slice(0, e)), t += (t.indexOf("?") === -1 ? "?" : "&") + n;
	}
	return t;
}, W = (e, { baseHeaders: t, handleErr: n, handleFinally: r, debug: i } = {}) => {
	let a = {
		"Content-Type": "application/json",
		...t
	}, o = (e) => {
		console.log(e);
	}, s = ({ endpoint: t, inputHeaders: s, fetchParams: c, args: l }) => {
		F(t) && (t = "");
		let u = e + t, d = {
			...a,
			...s
		};
		Object.keys(d).forEach((e) => {
			F(d[e]) && delete d[e];
		});
		let f = {
			method: "GET",
			headers: { ...d },
			...c
		};
		return F(l) || (f.method === "POST" && (f.body = JSON.stringify(l)), f.method === "GET" && (u += Ve(l))), fetch(u, f).catch((e) => n(e)).finally(() => {
			i && o({
				endpoint: t,
				inputHeaders: s,
				fetchParams: c
			}), !F(r) && r({
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
W("http://localhost:8080/", {
	handleErr: (e) => console.log(e),
	debug: !0
});
//#endregion
//#region src/utility/api.js
var He = ({ endpoint: e, handleErr: t }) => {
	F(t) && (t = (e) => console.log(e));
	let n = W(e, { handleErr: t });
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
	let [r, i] = A([/* @__PURE__ */ T("option", {
		value: n.defaultValue,
		children: n.defaultValue
	}, e + "-" + n.defaultValue)]), a = He({ endpoint: t });
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
	}, []), /* @__PURE__ */ T(g, {
		...n,
		defaultValue: n.defaultValue,
		children: [...r || /* @__PURE__ */ T(ne, {})]
	}, e);
}, Ge = ({ buttons: e, endpoint: t, title: n, title_topology_params: r, button_stack_params: i, ...a }) => {
	let o = e?.map((e) => e);
	return /* @__PURE__ */ E(_, {
		direction: "column",
		gap: 2,
		sx: { width: "100%" },
		children: [/* @__PURE__ */ E(_, {
			justifyContent: "space-between",
			alignItems: "center",
			direction: "row",
			children: [/* @__PURE__ */ T(C, {
				variant: "h6",
				sx: {
					m: 2,
					whiteSpace: "nowrap",
					overflow: "hidden",
					textOverflow: "ellipsis"
				},
				...r,
				children: n
			}), /* @__PURE__ */ T(_, {
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
		}), /* @__PURE__ */ T($, {
			...a,
			endpoint: t
		})]
	});
}, Ke = () => {
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
}, qe = ({ api: e, endpoint: t, refKey: n, register_component: r, ...i }) => /* @__PURE__ */ T(Ge, {
	api: e,
	endpoint: "get_paginated",
	buttons: [],
	title: "",
	refKey: n,
	register_component: r,
	...i
}), Je = ({ jsxKey: e, key: t, inputProps: n }) => {
	let r;
	return t.charAt(t.length - 1) === "D" && t.charAt(t.length - 2) === "I" || t.charAt(t.length - 1) === "S" && t.charAt(t.length - 2) === "D" ? (t.charAt(t.length - 1) === "D" && t.charAt(t.length - 2) === "I" && (r = t.slice(5, t.length - 2)), t.charAt(t.length - 1) === "S" && t.charAt(t.length - 2) === "D" && (r = t.slice(5, t.length - 3), n = {
		...n,
		multiple: !0
	}), /* @__PURE__ */ T(We, {
		endpoint: r,
		jsxKey: e,
		inputProps: n
	})) : null;
}, Ye = () => ({ formRef: e, jsxKey: t, key: n, currentType: r, inputProps: i }) => {
	let a = Je({
		jsxKey: t,
		key: n,
		inputProps: i
	});
	if (!F(a)) return a;
	if (a = /* @__PURE__ */ T(f, {
		type: "text",
		...i
	}, t), r === "number" || r === "bigint") return /* @__PURE__ */ T(f, {
		type: "number",
		...i
	}, t);
	if (r === "boolean") return /* @__PURE__ */ T(v, {
		...i,
		defaultChecked: i.defaultValue
	}, t);
	if (r === "object") {
		if (i.defaultValue.Subtype === 20) return /* @__PURE__ */ T(qe, {
			context: { api: e.current.api },
			refKey: "csv_grid",
			register_component: !0
		}, t);
		if (i.defaultValue.Subtype === 19) return /* @__PURE__ */ T(Qt, { data: V(K(e), n.slice(0, n.lastIndexOf(".")))?.value.Data }, t);
		if (i.defaultValue.Subtype === 17) return /* @__PURE__ */ T(Be, { data: V(K(e), n.slice(0, n.lastIndexOf(".")))?.value.Data }, t);
		if (i.defaultValue.Subtype === 16 || i.defaultValue.Subtype === 0) {
			let r = V(K(e), n.slice(0, n.lastIndexOf(".")));
			return i.name = n.slice(0, n.lastIndexOf(".")) + ".Data", /* @__PURE__ */ T(Fe, {
				fileData: JSON.stringify(r?.value.Data, null, 2),
				inputProps: i,
				subtype: i.defaultValue.Subtype
			}, t);
		}
		if (!F(i.defaultValue.Subtype) || !F(i.defaultValue.Data)) return null;
		if (Array.isArray(i.defaultValue)) return Object.keys(i.defaultValue).map((e) => /* @__PURE__ */ T(f, {
			type: "text",
			...i,
			defaultValue: i.defaultValue[e]
		}, t));
		if (F(i.defaultValue)) return;
		let r = Object.keys(i.defaultValue)[0];
		return typeof i.defaultValue[r] == "object" ? null : /* @__PURE__ */ T(Ne, {
			inputKey: n,
			inputProps: i
		});
	}
	return a;
}, Xe = (e, t = {}) => ({
	index: 0,
	elements: {},
	nameIndex: {},
	labels: {},
	useLabels: {},
	element_component: {},
	container: void 0,
	handleOnClose: void 0,
	elementSelector: e || Ye(),
	context: t
}), Ze = (e) => {
	e.current.handleOnClose();
}, Qe = (e, t) => {
	let n = e.current;
	n.handleClose = t, e.current = n;
}, G = (e, t) => {
	let n = e.current;
	F(n) || (n.container = t), e.current = n;
}, K = (e) => e.current.container, $e = (e, n) => {
	let r = e.current, i = r.labels[n], a = r.element_component[n];
	return r.useLabels[n] ? /* @__PURE__ */ E(_, {
		direction: "column",
		spacing: 1,
		sx: {
			width: "100%",
			pb: 1
		},
		children: [/* @__PURE__ */ T(t, {
			sx: { width: "100%" },
			children: i
		}), /* @__PURE__ */ T(t, {
			sx: { width: "100%" },
			children: a
		})]
	}, n) : /* @__PURE__ */ E(_, {
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
}, et = (e) => {
	let t = {};
	return Object.keys(e.current.nameIndex).map((n, r) => {
		t[n] = $e(e, r);
	}), /* @__PURE__ */ T(_, {
		direction: "column",
		gap: 0,
		children: Object.keys(t).map((e) => t[e])
	});
}, tt = (e) => {
	let t = e.current;
	return { onChange: (n) => {
		let r = n.target.value, i = n.target.selectedOptions;
		if (!F(i)) {
			let e = [].slice.call(i);
			r = e.map((e) => e.value), e.length === 1 && (r = r[0]);
		}
		n.target.type === "datetime-local" && (r = new Date(Date.parse(r)).toISOString());
		let a = n.target.name, o = t.nameIndex[a];
		F(o) && (t.nameIndex[a] = t.index, o = t.index, e.current = t), t.elements[o] = r;
		let s = a.split("."), c = s.slice(0, s.length - 1).join("."), l = s.slice(s.length - 1);
		F(V(K(e), c)) && (c = s.slice(0, s.length - 2).join(".")), n.target.type === "checkbox" && (r = n.currentTarget.checked), e.current = t, G(e, Me(K(e), c, l, r)), e.current = t;
	} };
}, nt = (e, t) => {
	let n = e.current, r = n.nameIndex[t];
	return n.elements[r];
}, rt = (e, t, n) => {
	let r = typeof n, i = e.current, a = t + i.index, o = {
		name: t,
		defaultValue: nt(e, t),
		onChange: tt(e).onChange,
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
	let r = e.current, i = I(t.replace(/root\./, ""), "_"), a = i.split(".");
	if (!a.some((e) => e.toLowerCase() === "data")) {
		if (F(r.nameIndex[t])) {
			r.nameIndex[t] = r.index, r.elements[r.index] = n;
			let o = rt(e, t, n);
			if (!F(o)) {
				let e = a[a.length - 1], n = e.toLowerCase() === "subtype", s = /^\d+$/.test(e);
				r.useLabels[r.index] = n || !s;
				let c = i;
				n && a.length > 1 && (c = a[a.length - 2]), r.labels[r.index] = /* @__PURE__ */ T(m, {
					column: t,
					children: c
				}, "Label" + t + r.index), r.element_component[r.index] = o, r.index++;
			}
		}
		e.current = r;
	}
}, it = (e, t) => e.current.nameIndex[t], at = (e, t) => {
	let n = e.current;
	delete n.labels[it(e, t)], e.current = n;
}, ot = ({ formRef: e, container: t }) => {
	je(t, (t) => {
		let n = t.path, r = t.value;
		if (Array.isArray(r)) {
			let t = [];
			Object.keys(r).forEach((e) => {
				F(r[e]) || Array.isArray(r[e]) || t.push(r[e]);
			}), t.length > 0 && q(e, n, t);
			return;
		}
		Object.keys(r).forEach((t) => {
			F(r[t]) || (typeof r[t] == "object" && Object.keys(r[t]).forEach((i) => {
				let a = {};
				a[i] = r[t][i], q(e, n + "." + t + "." + i, a);
			}), P(r[t]) && q(e, n + "." + t, r[t]));
		});
	});
}, J = ie(null), Y = () => oe(J), st = (e) => {
	let t = Y();
	return (n) => {
		n ? t?.register(e, n) : t?.unregister(e);
	};
}, X = (e, t = !0) => {
	let n = Y();
	return (r) => {
		t && r ? n?.register(e, r) : n?.unregister(e);
	};
}, ct = ({ title: e, getSchema: n, handleSave: r, elementSelector: i, footerButtons: a, refKey: o, register_component: s = !1, context: c = null }) => {
	let l = X(o, s), u = k(null), [f, p] = A(!1), m = () => {
		p(!1);
	};
	u.current ||= Xe(i, {
		setShow: (e) => {
			p(e);
		},
		...c
	}), O(() => (l(u.current), () => l(null)), [l]);
	let [h, g] = A(void 0), [v, x] = A(0);
	return a ||= [], /* @__PURE__ */ E(_, {
		direction: "row",
		gap: 3,
		children: [/* @__PURE__ */ T(d, {
			onClick: async () => {
				try {
					G(u, U(null, [], ".", await n())), Qe(u, m), ot({
						formRef: u,
						container: K(u)
					}), g(et(u)), p(!0);
				} catch (e) {
					console.error("Failed to load schema:", e);
				}
			},
			children: /* @__PURE__ */ T(Se, { sx: { color: "red" } })
		}), /* @__PURE__ */ T(N, {
			title: e,
			body: /* @__PURE__ */ E(t, {
				sx: { width: "100%" },
				children: [
					u.current.tabs && /* @__PURE__ */ T(t, {
						sx: {
							borderBottom: 1,
							borderColor: "divider"
						},
						children: /* @__PURE__ */ E(b, {
							value: v,
							onChange: (e, t) => x(t),
							"aria-label": "custom tabs",
							children: [/* @__PURE__ */ T(y, { label: "File Upload" }), /* @__PURE__ */ T(y, { label: "File Viewer" })]
						})
					}),
					v === 0 && /* @__PURE__ */ T(t, {
						sx: {
							borderBottom: 1,
							borderColor: "divider",
							width: "100%"
						},
						children: h
					}),
					v === 1 && /* @__PURE__ */ T(t, {
						sx: { p: 3 },
						children: /* @__PURE__ */ T("pre", { children: JSON.stringify(K(u)?.value, null, 2) })
					})
				]
			}),
			show: f,
			footer: a,
			title_sx: {
				background: "black",
				color: "white"
			}
		})]
	});
}, lt = ({ title: e, show: t, onCancel: r, onConfirm: i }) => /* @__PURE__ */ T(N, {
	title: e || "Are you sure?",
	show: t,
	footer: /* @__PURE__ */ E(_, {
		direction: "column",
		gap: 3,
		children: [/* @__PURE__ */ T(n, {
			onClick: () => {
				F(r) || r();
			},
			children: "Cancel"
		}), /* @__PURE__ */ T(n, {
			onClick: () => {
				F(i) || i();
			},
			children: "Confirm"
		})]
	})
}), ut = ({ refreshGrid: e, api: t, ...n }) => /* @__PURE__ */ T(ct, {
	title: "Create",
	getSchema: t.schema,
	handleSave: (n) => {
		t.create(n).then(() => e());
	},
	...n
}), dt = ({ refreshGrid: e, api: t, id: n, title: r, footerButtons: i, ...a }) => /* @__PURE__ */ T(ct, {
	title: r,
	button_title: "Update",
	getSchema: Ue(t, n),
	handleSave: (r) => {
		t.update(r, n).then(() => e());
	},
	footerButtons: i,
	register_component: !0,
	refKey: "update_modal",
	...a
}), ft = ({ refreshGrid: e, api: t, handleSelectedIds: r }) => {
	let [i, a] = A(!1);
	return /* @__PURE__ */ E(_, {
		direction: "horizontal",
		gap: 2,
		children: [/* @__PURE__ */ T(n, {
			onClick: () => {
				a(!i);
			},
			children: "Delete"
		}), /* @__PURE__ */ T(lt, {
			onConfirm: () => {
				t.deleteIds(r()).then(e()), a(!1);
			},
			show: i
		})]
	});
}, pt = ({ refreshGrid: e, api: t, id: r }) => {
	let [i, a] = A(!1);
	return /* @__PURE__ */ E(_, {
		direction: "row",
		gap: 3,
		children: [/* @__PURE__ */ T(n, {
			onClick: () => {
				a(!i);
			},
			children: "Delete"
		}), /* @__PURE__ */ T(lt, {
			onConfirm: () => {
				t.deleteId(r).then(e());
			},
			show: i
		})]
	});
}, mt = ({ handleRefreshGrid: e, api: t, id: n, params: r, context: i }) => /* @__PURE__ */ T(_, {
	direction: "row",
	gap: 1,
	children: /* @__PURE__ */ T(dt, {
		...r,
		refreshGrid: e,
		api: t,
		id: n,
		context: i
	})
}), ht = (e, t) => {
	let n = e.current;
	n && (n.endpoint = t);
}, gt = (e) => e.current.endpoint, _t = (e) => e.current.api, vt = (e, t) => {
	e.current && (e.current.api = t);
}, yt = (e, t) => {
	let n = e.current;
	H(t, (e) => {
		let t = e.value, r = e.path, i = typeof t;
		if (n.headers_ri[r] !== void 0) return;
		let a = "string";
		i === "number" ? a = "number" : r.toLowerCase().includes("date") || r.toLowerCase().includes("modified") ? a = "date" : i === "string" && (a = "string"), n.headers[n.index] = {
			field: r,
			type: a,
			headerName: r
		}, n.rows[n.index] = [], n.headers_ri[r] = n.index, n.index++;
	}), e.current = n;
}, bt = (e) => {
	let t = e.current;
	t && (t.index = 0, t.headers = [], t.rows = [], t.headers_ri = {}, ["Field", "Value"].forEach((e) => {
		let n = e;
		t.headers[t.index] = {
			field: n,
			sortable: !0,
			filterable: !0,
			flex: 1,
			width: 500,
			minWidth: 250,
			type: "string",
			headerName: e
		}, t.rows[t.index] = [], t.headers_ri[n] = t.index, t.index++;
	}), e.current = t);
}, xt = (e, t) => {
	let n = e.current;
	if (!n) return;
	n.rows = [[], []], n.row_count = 0;
	let r = n.headers_ri.Field, i = n.headers_ri.Value;
	Object.entries(t).forEach(([e, t]) => {
		if (r !== void 0 && n.rows[r].push(I(e, "_")), i !== void 0) {
			let e = Array.isArray(t) ? t.join(", ") : t;
			n.rows[i].push(e);
		}
		n.row_count++;
	}), e.current = n;
}, St = (e, t) => {
	let n = e.current;
	n && (n.rows = [], n.row_count = 0, n.headers.forEach(() => {
		n.rows.push([]);
	}), H(t, (e) => {
		if (P(e.value)) {
			let t = n.headers_ri[e.path];
			t !== void 0 && n.rows[t].push(e.value);
		}
	}), e.current = n);
}, Ct = (e) => {
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
}, wt = (e) => {
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
}, Tt = (e) => {
	let t = e.current;
	return !t || !t.headers ? [] : t.headers;
}, Et = (e) => {
	let t = e.current, n = Object.keys(t.headers_ri).map((e) => ({
		field: e,
		sortable: !0,
		filterable: !0,
		headerName: I(e.split(".").pop(), "_"),
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
			renderCell: zt(e)
		}, r = Math.max(0, n.length - 1);
		n.splice(r, 0, t);
	}
	return n;
}, Dt = (e) => e.current.paginationModel, Ot = (e, t) => {
	let n = e.current;
	n && (n.args = t, e.current = n, n.refresh());
}, kt = (e, t) => {
	let n = e.current;
	n && (n.args = {
		...n.args,
		...t
	}, e.current = n, n.refresh());
}, At = (e, t) => {
	let n = e.current;
	n && (n.args.sortModel = JSON.stringify(t), e.current = n);
}, jt = (e, t) => {
	let n = e.current;
	n && (n.args.filterModel = JSON.stringify(t), e.current = n);
}, Mt = (e, t) => () => {
	let n = e.current;
	n && (n.paginationModel = t, n.args.paginationModel = JSON.stringify(t), e.current = n);
}, Nt = (e, t) => {
	let n = e.current;
	n && (n.fetch_params = t, e.current = n);
}, Pt = (e) => e.current.fetch_params, Z = (e, t) => ({ getRows: async (n) => {
	let r = e.current;
	if (!r) return {
		rows: [],
		rowCount: 0
	};
	jt(e, n.filterModel), At(e, n.sortModel);
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
		Array.isArray(t) && t.length === 0 || F(t) || (s[e] = t);
	}), F(n.sortModel) || Array.isArray(n.sortModel) && n.sortModel.length === 0 && delete s.sortModel, F(n.filterModel) || Array.isArray(n.filterModel.items) && n.filterModel.items.length === 0 && delete s.filterModel;
	let c = await r.api?.at("/" + r.endpoint, {
		fetchParams: {
			method: "GET",
			...Pt(e)
		},
		args: s
	}), l = U(null, [], ".", c.results);
	return yt(e, l), St(e, l), r.row_count = c.pagination?.total || 0, e.current = r, t(), {
		rows: wt(e),
		rowCount: c.pagination?.total || 0
	};
} }), Ft = (e, t) => {
	let n = e.current;
	n && (n.args.search = t, e.current = n);
}, It = (e) => e.current?.datasource, Q = async (e) => {
	let t = e.current;
	if (!t) return;
	let n = t.gridRef.current;
	n.dataSource.cache.clear(), await n.dataSource.fetchRows(), t.refresh();
}, Lt = (e) => (t) => {
	let n = e.current;
	if (!n || n.rows.length === 0) return;
	let r = t.ids, i = n.rows[0].length, a = Array.from({ length: i }, (e, t) => t).filter((e) => {
		let t = n.rows[0][e];
		return r.has(t);
	});
	n.selected_data = n.rows.map((e) => a.map((t) => e[t])), n.selected_ids = t, e.current = n;
}, Rt = (e, t) => {
	let n = e.current;
	n && (n.cellRenderer = t, e.current = n);
}, zt = (e) => {
	let t = e.current;
	if (t) return t.cellRenderer ? t.cellRenderer(e) : Bt(e);
}, Bt = (e) => {
	let r = Y();
	return (i) => {
		let a = e.current;
		if (!a) return;
		let o = (e = !1) => {
			let t = r?.get("update_modal")?.context;
			if (!t) return;
			let n = t.setShow;
			n(e);
		}, s = /* @__PURE__ */ E(_, {
			direction: "column",
			justifyContent: "space-between",
			spacing: 2,
			sx: { width: "100%" },
			children: [/* @__PURE__ */ E(_, {
				gap: 3,
				direction: "row",
				children: [
					/* @__PURE__ */ T(t, {
						sx: { ...a.modal_header_sx },
						children: "Update"
					}),
					/* @__PURE__ */ T(t, { sx: { flexGrow: 1 } }, "spacer"),
					/* @__PURE__ */ T(d, {
						onClick: () => o(!1),
						sx: {
							backgroundColor: "black",
							color: "white"
						},
						children: /* @__PURE__ */ T(Ce, {})
					})
				]
			}), /* @__PURE__ */ T(_, {
				gap: 3,
				direction: "row",
				children: Object.entries(a.modal_header_rows || []).map((e) => e)
			})]
		});
		return /* @__PURE__ */ T(mt, {
			params: {
				footerButtons: [
					/* @__PURE__ */ T(n, {
						onClick: () => o(!1),
						children: "Close"
					}),
					/* @__PURE__ */ T(t, { sx: { flexGrow: 1 } }, "spacer"),
					/* @__PURE__ */ T(n, {
						sx: { backgroundColor: "red" },
						children: "Update"
					})
				],
				title: s,
				...i.row
			},
			handleRefreshGrid: async () => await Q(e),
			api: a.api,
			id: i.id
		});
	};
}, $ = ({ api: e, endpoint: t, row_details: n, refKey: r, cellRenderer: i, register_component: a = !1, toolbar: o = !1, checkbox_select: s = !1, datagrid_sx: c = void 0, grid_options: l = void 0, context: u = void 0 }) => {
	let d = X(r, a), f = k(null), [, p] = A(!1), [m, h] = A({
		page: 0,
		pageSize: 25
	}), [g, _] = A(0), [v, y] = A({ id: !1 }), b = ue(), x = () => {
		f.current && _(f.current?.row_count ?? 0), p((e) => !e);
	};
	return f.current ||= {
		context: u,
		gridRef: b,
		index: 0,
		headers: [],
		headers_ri: {},
		rows: [],
		row_count: t ? 0 : void 0,
		datasource: t ? Z(f, x) : void 0,
		paginationModel: {
			page: 0,
			pageSize: 5
		},
		args: {},
		selected_data: [],
		selected_ids: null,
		refresh: x,
		cellRenderer: i,
		filter_model: null,
		api: e,
		row_details: n,
		fetch_params: null,
		endpoint: t,
		register_component: a,
		refKey: r,
		modal_title: null,
		modal_header_rows: null,
		modal_header_sx: null,
		modal_header_row: null,
		...l
	}, O(() => (d(f.current), () => d(null)), [d]), /* @__PURE__ */ T(ce, {
		apiRef: b,
		disableVirtualization: !0,
		columnVisibilityModel: v,
		onColumnVisibilityModelChange: (e) => y(e),
		rowCount: g,
		sx: {
			width: "100%",
			...c
		},
		columns: Et(f),
		dataSource: It(f),
		pageSizeOptions: [
			25,
			50,
			100
		],
		paginationModel: m,
		onPaginationModelChange: (e) => {
			h(e);
		},
		onRowSelectionModelChange: (e) => Lt(f)(e),
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
			console.error("DataGrid Error Type:", e.name), console.error("DataGrid Error Message:", e.message), e.cause && (console.group("Original Error Cause"), console.error("Message:", e.cause.message), console.error("Stack:", e.cause.stack), console.groupEnd()), e instanceof le ? console.warn("Fetch failed. Check your API mock or network.") : console.warn("Row update failed.");
		},
		...l
	});
}, Vt = ({ loading: e, value: n }) => /* @__PURE__ */ T(t, {
	sx: {
		position: "relative",
		display: "inline-flex"
	},
	children: /* @__PURE__ */ E(p, {
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
			children: /* @__PURE__ */ T(C, {
				variant: "caption",
				component: "div",
				sx: { color: "text.secondary" },
				children: `${Math.round(n)}%`
			})
		})]
	})
}), Ht = ({ ...e }) => /* @__PURE__ */ T(d, {
	...e,
	children: /* @__PURE__ */ T(Ee, {})
}), Ut = (e, t) => {
	let n = e.current;
	n && (n.setProgressValue(t), n.progressValue = t, e.current = n);
}, Wt = (e) => !e || !e.current ? 1 : e.current.progressValue, Gt = (e, t) => {
	let n = e.current;
	n && n.handleToggle(t);
}, Kt = ({ refKey: e, register_component: t, hidden: n, onDropSuccess: r, onSend: i, textFieldSx: a, textFieldProps: o, sendButtonProps: s }) => {
	let [c, l] = A(""), [u, f] = A(!1), [m, h] = A(0), g = X(e, t), _ = k({
		handleToggle: (e) => {
			f(e);
		},
		progressValue: 0,
		setProgressValue: h
	}), { getRootProps: v, getInputProps: y, open: b, isDragActive: S } = we({
		onDrop: ae((e) => {
			if (e.length > 0) {
				let t = _.current;
				f(!0), t.setProgressValue = h, r(_, e), _.current = t;
			}
		}, [r]),
		noClick: !0,
		noKeyboard: !0,
		multiple: !1
	});
	O(() => (g(_.current), () => g(null)), [g]);
	let { ref: ee, ...C } = v(), w = u ? /* @__PURE__ */ T(Vt, {
		loading: !0,
		value: m
	}) : /* @__PURE__ */ T(Ht, {
		onClick: i,
		sx: { color: m === 100 ? "red" : "inherit" },
		...s
	});
	return /* @__PURE__ */ T(x, {
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
				...C,
				inputRef: ee,
				startAdornment: /* @__PURE__ */ E(p, {
					position: "start",
					children: [/* @__PURE__ */ T("input", { ...y() }), /* @__PURE__ */ T(d, {
						onClick: b,
						children: /* @__PURE__ */ T(Te, {})
					})]
				}),
				endAdornment: w
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
}, qt = ({ children: e }) => /* @__PURE__ */ E(t, {
	sx: { width: "100%" },
	children: [
		/* @__PURE__ */ T(j, {}),
		e,
		/* @__PURE__ */ T(M, {})
	]
}), Jt = ({ children: e }) => {
	let t = k({}), n = se(() => ({
		register: (e, n) => {
			t.current[e] = n;
		},
		unregister: (e) => {
			delete t.current[e];
		},
		get: (e) => t.current[e] || null,
		registry: () => t.current
	}), []);
	return /* @__PURE__ */ T(J.Provider, {
		value: n,
		children: e
	});
}, Yt = w({
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
}), Xt = ({ children: e, theme: t }) => {
	let n = Yt;
	return t || (n = Yt), /* @__PURE__ */ T(Jt, { children: /* @__PURE__ */ E(S, {
		theme: n,
		children: [/* @__PURE__ */ T(a, {}), /* @__PURE__ */ T(qt, { children: /* @__PURE__ */ T(_, {
			direction: "column",
			gap: 2,
			alignItems: "center",
			sx: { width: "100%" },
			children: e
		}) })]
	}) });
}, Zt = () => {
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
}, Qt = ({ data: e, ...t }) => {
	let n = Y(), [r, i] = A({
		rows: [],
		columns: []
	});
	return D(() => {
		(async () => {
			let t = n?.get("key_value_grid");
			if (!t) return;
			let r = { current: { ...t } };
			bt(r), xt(r, e), i({
				rows: [...Ct(r)],
				columns: [...Tt(r)]
			}), await Q(r);
		})();
	}, [e, n]), /* @__PURE__ */ T($, {
		register_component: !0,
		datagrid_sx: Zt(),
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
export { q as AddElement, He as Api, Oe as ApiButton, ke as CenteredContainer, N as CenteredModal, Ze as Close, ut as Create, Ke as CsvDatagridSx, qe as CsvGrid, Z as DataSourceWrapper, Zt as DatagridSx, pt as Delete, at as DeleteLabel, ft as DeleteMany, mt as EditCellRenderer, Qt as FieldValueGrid, _t as GetApi, zt as GetCellRenderer, K as GetContainer, It as GetDatasource, it as GetElementIndex, rt as GetElementTypes, nt as GetElementValue, et as GetElements, gt as GetEndpoint, Pt as GetFetchParams, Et as GetHeaders, Ct as GetKeyValueRows, Dt as GetPaginationModel, Wt as GetProgressValue, Tt as GetRawHeaders, wt as GetRows, $e as GetSet, Ge as GridWithButtons, Xt as HFCenteredLayout, Ue as HandleGet, qt as HeaderFooterLayout, Xe as InitialTypeFormBuilderRefState, F as IsNullOrUndefined, P as IsPrimitive, Bt as ModalCellRendererWrapper, Vt as ProgressAdornment, J as RefIndexContext, Jt as RefProvider, Q as Refresh, Je as SelectAssociation, Ht as SendIconButton, vt as SetApi, Ot as SetArgs, Rt as SetCellRenderer, G as SetContainer, ht as SetEndpoint, Nt as SetFetchParams, jt as SetFilterModel, Qe as SetHandleClose, yt as SetHeadersFromJson, bt as SetKeyValueHeaders, xt as SetKeyValueRows, Gt as SetLoading, kt as SetOrAddArgs, Mt as SetPaginationModel, Ut as SetProgressValue, St as SetRowsFromJson, Ft as SetSearch, Lt as SetSelectedRows, At as SetSortModel, I as TitleCase, ot as TypeFormBuilder, j as UIAppBar, M as UIBottomNav, Kt as UIInput, $ as UITable, dt as Update, tt as UpdateElementValues, X as useConditionalRef, st as useManagedRef, Y as useRefIndex };
