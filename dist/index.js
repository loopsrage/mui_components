import { AppBar as e, Box as t, Button as n, CircularProgress as r, Container as i, CssBaseline as a, Dialog as o, DialogActions as s, DialogContent as c, DialogTitle as l, FormControl as u, IconButton as d, Input as f, InputAdornment as p, InputLabel as m, Paper as h, Select as g, Stack as _, Switch as v, TextField as y, ThemeProvider as b, Toolbar as ee, Typography as x, createTheme as te } from "@mui/material";
import ne from "@mui/icons-material/BugReport";
import { Fragment as re, jsx as S, jsxs as C } from "react/jsx-runtime";
import ie, { createContext as ae, useCallback as oe, useContext as se, useEffect as w, useLayoutEffect as T, useMemo as ce, useRef as E, useState as D } from "react";
import { DataGrid as le, GridGetRowsError as ue, useGridApiRef as de } from "@mui/x-data-grid";
import { LexicalComposer as fe } from "@lexical/react/LexicalComposer";
import { RichTextPlugin as pe } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable as me } from "@lexical/react/LexicalContentEditable";
import { LexicalErrorBoundary as he } from "@lexical/react/LexicalErrorBoundary";
import { useLexicalComposerContext as ge } from "@lexical/react/LexicalComposerContext";
import { $generateHtmlFromNodes as _e, $generateNodesFromDOM as ve } from "@lexical/html";
import { $getRoot as ye, ParagraphNode as be, TextNode as xe } from "lexical";
import { Image as Se } from "mui-image";
import Ce from "@mui/icons-material/Description";
import we from "@mui/icons-material/Download";
import Te from "@mui/icons-material/Close";
import { useDropzone as Ee } from "react-dropzone";
import De from "@mui/icons-material/CloudUpload";
import Oe from "@mui/icons-material/Send";
//#region \0rolldown/runtime.js
var ke = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), Ae = () => /* @__PURE__ */ S(e, {
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
	children: /* @__PURE__ */ C(ee, {
		disableGutters: !0,
		children: [
			/* @__PURE__ */ S(t, {
				component: "img",
				sx: {
					height: 20,
					marginRight: 2
				},
				alt: "Logo",
				src: "/logo.png"
			}),
			/* @__PURE__ */ S(x, {
				variant: "h6",
				component: "div",
				sx: { flexGrow: 1 },
				children: "HTS Product Classification"
			}),
			/* @__PURE__ */ S(d, {
				size: "small",
				sx: { color: "white" },
				onClick: () => console.log("Debug Clicked"),
				children: /* @__PURE__ */ S(ne, { fontSize: "small" })
			})
		]
	})
}), je = () => /* @__PURE__ */ S(t, {
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
	children: /* @__PURE__ */ S(i, { maxWidth: "sm" })
}), O = ({ api: e, endpoint: t, children: r, get_args: i, fetch_params: a, callback: o, ...s }) => /* @__PURE__ */ S(n, {
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
}), Me = ({ children: e, sx: n = {} }) => /* @__PURE__ */ S(t, {
	sx: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		minHeight: "100vh",
		...n
	},
	children: /* @__PURE__ */ S(_, {
		direction: "column",
		sx: { width: "100%" },
		children: e
	})
}), k = ({ title: e, body: t, show: n, footer: r, title_sx: i, footer_sx: a, content_sx: u, paper_sx: d }) => /* @__PURE__ */ C(o, {
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
		/* @__PURE__ */ S(l, {
			id: "centered-modal-title",
			sx: { ...i },
			children: e
		}),
		/* @__PURE__ */ S(c, {
			dividers: !0,
			sx: { ...u },
			children: t
		}),
		/* @__PURE__ */ S(s, {
			sx: a,
			children: r
		})
	]
}), A = (e) => {
	if (e === null) return !0;
	let t = typeof e;
	return t === "string" || t === "number" || t === "boolean" || t === "undefined" || t === "symbol" || t === "bigint" || t === "int";
}, j = (e) => e == null, M = (e, t) => j(e) ? "" : e.split(t).map((e) => e.charAt(0).toUpperCase() + e.slice(1)).join(" "), N = "Values", P = "Containers", F = (e, t, n, r) => {
	let i = r || {
		[N]: /* @__PURE__ */ new Map(),
		[P]: /* @__PURE__ */ new Map()
	}, a = e ? t : "root", o = {
		parent: e,
		path: a,
		value: n,
		children: [],
		root: e ? e.root : null,
		containerIndex: i
	};
	return e || (o.root = o), i[N].set(a, n), i[P].set(a, o), Object.freeze(o);
}, Ne = (e, t, n) => {
	let r = F(e, t, n, e.containerIndex);
	return {
		...e,
		children: [...e.children, r]
	};
}, I = (e, t) => e.containerIndex[P].get(t), Pe = (e, t) => {
	for (let [n, r] of e.containerIndex[N].entries()) t(n, r);
}, Fe = (e, t) => {
	for (let [, n] of e.containerIndex[P].entries()) t(n);
}, Ie = (e, t, n = 2) => {
	Pe(e, (e, r) => {
		let i = Object.keys(r);
		for (let a = 0; a < i.length; a++) {
			let o = e.split(".");
			o.push(i[a]);
			let s = o.slice(2).join("."), c = r[i[a]];
			o.length > n && A(c) && t({
				i: a,
				value: c,
				path: s,
				fullpath: o.join("."),
				key: e,
				containerValue: r
			});
		}
	});
}, Le = (e, t, n, r) => {
	if (!e || !t) return e;
	let i = e.containerIndex[P].get(t);
	if (!i) return console.warn(`Container at path "${t}" not found.`), e;
	let a = {};
	a[n] = r;
	let o = {
		...i.value,
		...a
	}, s = F(i.parent, i.path, o, e.containerIndex);
	e.containerIndex[P].set(t, s), e.containerIndex[N].set(t, o);
	let c = s;
	for (; c.parent;) {
		let t = c.parent, n = t.children.map((e) => e.path === c.path ? c : e), r = c.path.split("."), i = r.slice(r.length - 1), a = { ...e.containerIndex[N].get(t.path) };
		a[i] = o;
		let s = Object.freeze({
			...t,
			children: n,
			value: a
		});
		e.containerIndex[P].set(s.path, s), c = s;
	}
	return e.containerIndex[P].get("root");
}, L = (e = null, t = [], n = "_", ...r) => {
	e === null && (e = F(null, "root", r.length === 0 ? {} : r[0]), t = ["root"]);
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
}, Re = ({ inputKey: e, inputProps: t }) => {
	let n = Object.keys(t.defaultValue)[0], r = t.defaultValue[n], [i, a] = D(/* @__PURE__ */ S(u, {
		type: "text",
		onChange: t.onChange,
		defaultValue: r
	})), o = (e, n) => {
		a(ie.cloneElement(i, {
			...t,
			defaultValue: r,
			name: e + "." + n
		}));
	}, [s, c] = D(/* @__PURE__ */ S(u, {
		type: "text",
		...t,
		defaultValue: n,
		onChange: (t) => o(e, t.target.value)
	}));
	return w(() => {
		o(e, n);
	}, []), /* @__PURE__ */ C(_, {
		direction: "horizontal",
		gap: 2,
		children: [s, i]
	});
}, ze = ({ fileData: e, onChange: t, name: n }) => {
	let [r] = ge(), i = E("");
	return w(() => {
		e && (async () => {
			if (!e) return;
			let t = String(e).replace(/^"|"$/g, "").replace(/\\n/g, "<br/>");
			t !== i.current && (i.current = t, r.update(() => {
				let e = ye();
				e.clear();
				let n = ve(r, new DOMParser().parseFromString(`<div>${t}</div>`, "text/html"));
				n.length > 0 && e.append(...n);
			}));
		})();
	}, [e, r]), w(() => r.registerUpdateListener(({ editorState: e }) => {
		e.read(() => {
			let e = _e(r);
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
}, Be = ({ fileData: e, subtype: n, inputProps: r }) => /* @__PURE__ */ S(t, {
	sx: { width: "100%" },
	children: /* @__PURE__ */ S(h, {
		variant: "outlined",
		sx: {
			p: 2,
			minHeight: "200px",
			position: "relative"
		},
		children: /* @__PURE__ */ C(fe, {
			initialConfig: {
				namespace: "MyEditor",
				nodes: [be, xe],
				theme: {},
				onError: (e) => console.error("Lexical Error:", e),
				editable: n !== 0
			},
			children: [/* @__PURE__ */ S(pe, {
				contentEditable: /* @__PURE__ */ S(me, { style: {
					outline: "none",
					minHeight: "170px"
				} }),
				placeholder: /* @__PURE__ */ S("div", {
					style: {
						position: "absolute",
						top: 20,
						left: 20,
						color: "#aaa"
					},
					children: "Enter text..."
				}),
				ErrorBoundary: he
			}), /* @__PURE__ */ S(ze, {
				fileData: e,
				onChange: r.onChange,
				name: r.name
			})]
		})
	})
}), Ve = (/* @__PURE__ */ ke(((e, t) => {
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
	let r = We, [i, a] = D(void 0);
	return j(t) && (t = "png"), j(n) && (n = "ERROR"), He(new Blob([Ue(e)])).then((e) => {
		r = r.replace("#{encoding}", t), r = r.replace("#{data}", Ve.Buffer.from(e).toString("base64")), a(r);
	}), /* @__PURE__ */ S(Se, {
		src: i,
		fluid: !0,
		alt: n
	});
}, Ke = (e) => {
	let t = "", n = Object.keys(e).map((t) => {
		let n = e[t];
		return j(n) ? "" : `${encodeURIComponent(t)}=${encodeURIComponent(n)}`;
	}).filter((e) => e !== "").join("&");
	if (n) {
		let e = t.indexOf("#");
		e !== -1 && (t = t.slice(0, e)), t += (t.indexOf("?") === -1 ? "?" : "&") + n;
	}
	return t;
}, qe = (e, { baseHeaders: t, handleErr: n, handleFinally: r, debug: i } = {}) => {
	let a = {
		"Content-Type": "application/json",
		...t
	}, o = (e) => {
		console.log(e);
	}, s = ({ endpoint: t, inputHeaders: s, fetchParams: c, args: l }) => {
		j(t) && (t = "");
		let u = e + t, d = {
			...a,
			...s
		};
		Object.keys(d).forEach((e) => {
			j(d[e]) && delete d[e];
		});
		let f = {
			method: "GET",
			headers: { ...d },
			...c
		};
		return j(l) || (f.method === "POST" && (f.body = JSON.stringify(l)), f.method === "GET" && (u += Ke(l))), fetch(u, f).catch((e) => n(e)).finally(() => {
			i && o({
				endpoint: t,
				inputHeaders: s,
				fetchParams: c
			}), !j(r) && r({
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
qe("http://localhost:8080/", {
	handleErr: (e) => console.log(e),
	debug: !0
});
//#endregion
//#region src/utility/api.js
var Je = ({ endpoint: e, handleErr: t }) => {
	j(t) && (t = (e) => console.log(e));
	let n = qe(e, { handleErr: t });
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
}, Ye = (e, t) => () => e.get(t), Xe = ({ jsxKey: e, endpoint: t, inputProps: n }) => {
	let [r, i] = D([/* @__PURE__ */ S("option", {
		value: n.defaultValue,
		children: n.defaultValue
	}, e + "-" + n.defaultValue)]), a = Je({ endpoint: t });
	return w(() => {
		a.selectOptions().then((t) => {
			i(Object.keys(t).map((n) => {
				let r = t[n][Object.keys(t[n])[1]], i = t[n][Object.keys(t[n])[0]];
				return /* @__PURE__ */ S("option", {
					value: i,
					children: r
				}, e + "-" + n);
			}));
		});
	}, []), /* @__PURE__ */ S(g, {
		...n,
		defaultValue: n.defaultValue,
		children: [...r || /* @__PURE__ */ S(re, {})]
	}, e);
}, R = ae(null), z = () => se(R), Ze = (e) => {
	let t = z();
	return (n) => {
		n ? t?.register(e, n) : t?.unregister(e);
	};
}, B = (e, t = !0) => {
	let n = z();
	return (r) => {
		t && r ? n?.register(e, r) : n?.unregister(e);
	};
}, Qe = () => {
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
}, V = ({ data: e, ...t }) => {
	let n = z(), [r, i] = D({
		rows: [],
		columns: []
	});
	return w(() => {
		(async () => {
			let t = n?.get("csv_grid");
			if (!t) return;
			let r = { current: { ...t } }, a = L(null, [], ".", e);
			q(r, a), J(r, a), i({
				rows: [...Y(r)],
				columns: [...X(r)]
			}), await Z(r);
		})();
	}, [e, n]), /* @__PURE__ */ S(Q, {
		register_component: !0,
		datagrid_sx: Qe(),
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
		refKey: "csv_grid"
	});
}, H = ({ jsxKey: e, key: t, inputProps: n }) => {
	let r;
	return t.charAt(t.length - 1) === "D" && t.charAt(t.length - 2) === "I" || t.charAt(t.length - 1) === "S" && t.charAt(t.length - 2) === "D" ? (t.charAt(t.length - 1) === "D" && t.charAt(t.length - 2) === "I" && (r = t.slice(5, t.length - 2)), t.charAt(t.length - 1) === "S" && t.charAt(t.length - 2) === "D" && (r = t.slice(5, t.length - 3), n = {
		...n,
		multiple: !0
	}), /* @__PURE__ */ S(Xe, {
		endpoint: r,
		jsxKey: e,
		inputProps: n
	})) : null;
}, $e = () => ({ formRef: e, jsxKey: t, key: n, currentType: r, inputProps: i }) => {
	let a = H({
		jsxKey: t,
		key: n,
		inputProps: i
	});
	if (!j(a)) return a;
	if (a = /* @__PURE__ */ S(f, {
		type: "text",
		...i
	}, t), r === "number" || r === "bigint") return /* @__PURE__ */ S(f, {
		type: "number",
		...i
	}, t);
	if (r === "boolean") return /* @__PURE__ */ S(v, {
		...i,
		defaultChecked: i.defaultValue
	}, t);
	if (r === "object") {
		if (i.defaultValue.Subtype === 20) return /* @__PURE__ */ S(V, { data: I(G(e), n.slice(0, n.lastIndexOf(".")))?.value.Data }, t);
		if (i.defaultValue.Subtype === 19) return /* @__PURE__ */ S(Yt, { data: I(G(e), n.slice(0, n.lastIndexOf(".")))?.value.Data });
		if (i.defaultValue.Subtype === 17) return /* @__PURE__ */ S(Ge, { data: I(G(e), n.slice(0, n.lastIndexOf(".")))?.value.Data }, t);
		if (i.defaultValue.Subtype === 16 || i.defaultValue.Subtype === 0) {
			let r = I(G(e), n.slice(0, n.lastIndexOf(".")));
			return i.name = n.slice(0, n.lastIndexOf(".")) + ".Data", /* @__PURE__ */ S(Be, {
				fileData: JSON.stringify(r?.value.Data, null, 2),
				inputProps: i,
				subtype: i.defaultValue.Subtype
			}, t);
		}
		if (!j(i.defaultValue.Subtype) || !j(i.defaultValue.Data)) return null;
		if (Array.isArray(i.defaultValue)) return Object.keys(i.defaultValue).map((e) => /* @__PURE__ */ S(f, {
			type: "text",
			...i,
			defaultValue: i.defaultValue[e]
		}, t));
		if (j(i.defaultValue)) return;
		let r = Object.keys(i.defaultValue)[0];
		return typeof i.defaultValue[r] == "object" ? null : /* @__PURE__ */ S(Re, {
			inputKey: n,
			inputProps: i
		});
	}
	return a;
}, U = (e, t = {}) => ({
	index: 0,
	elements: {},
	nameIndex: {},
	labels: {},
	useLabels: {},
	element_component: {},
	container: void 0,
	handleOnClose: void 0,
	elementSelector: e || $e(),
	context: t
}), et = (e) => {
	e.current.handleOnClose();
}, tt = (e, t) => {
	let n = e.current;
	n.handleClose = t, e.current = n;
}, W = (e, t) => {
	let n = e.current;
	j(n) || (n.container = t), e.current = n;
}, G = (e) => e.current.container, nt = (e, n) => {
	let r = e.current, i = r.labels[n], a = r.element_component[n];
	return r.useLabels[n] ? /* @__PURE__ */ C(_, {
		direction: "column",
		spacing: 1,
		sx: {
			width: "100%",
			pb: 1
		},
		children: [/* @__PURE__ */ S(t, {
			sx: { width: "100%" },
			children: i
		}), /* @__PURE__ */ S(t, {
			sx: { width: "100%" },
			children: a
		})]
	}, n) : /* @__PURE__ */ C(_, {
		direction: "row",
		gap: 1,
		sx: {
			justifyContent: "space-between",
			width: "100%",
			borderBottom: "1px solid rgba(0, 0, 0, 0.42)",
			pb: .5,
			alignItems: "flex-end"
		},
		children: [/* @__PURE__ */ S(t, {
			sx: {
				width: "50%",
				flexShrink: 0
			},
			children: i
		}), /* @__PURE__ */ S(t, {
			sx: { flexGrow: 1 },
			children: a
		})]
	}, n);
}, rt = (e) => {
	let t = {};
	return Object.keys(e.current.nameIndex).map((n, r) => {
		t[n] = nt(e, r);
	}), /* @__PURE__ */ S(_, {
		direction: "column",
		gap: 0,
		children: Object.keys(t).map((e) => t[e])
	});
}, it = (e) => {
	let t = e.current;
	return { onChange: (n) => {
		let r = n.target.value, i = n.target.selectedOptions;
		if (!j(i)) {
			let e = [].slice.call(i);
			r = e.map((e) => e.value), e.length === 1 && (r = r[0]);
		}
		n.target.type === "datetime-local" && (r = new Date(Date.parse(r)).toISOString());
		let a = n.target.name, o = t.nameIndex[a];
		j(o) && (t.nameIndex[a] = t.index, o = t.index, e.current = t), t.elements[o] = r;
		let s = a.split("."), c = s.slice(0, s.length - 1).join("."), l = s.slice(s.length - 1);
		j(I(G(e), c)) && (c = s.slice(0, s.length - 2).join(".")), n.target.type === "checkbox" && (r = n.currentTarget.checked), e.current = t, W(e, Le(G(e), c, l, r)), e.current = t;
	} };
}, at = (e, t) => {
	let n = e.current, r = n.nameIndex[t];
	return n.elements[r];
}, ot = (e, t, n) => {
	let r = typeof n, i = e.current, a = t + i.index, o = {
		name: t,
		defaultValue: at(e, t),
		onChange: it(e).onChange,
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
	let r = e.current, i = M(t.replace(/root\./, ""), "_"), a = i.split(".");
	if (!a.some((e) => e.toLowerCase() === "data")) {
		if (j(r.nameIndex[t])) {
			r.nameIndex[t] = r.index, r.elements[r.index] = n;
			let o = ot(e, t, n);
			if (!j(o)) {
				let e = a[a.length - 1], n = e.toLowerCase() === "subtype", s = /^\d+$/.test(e);
				r.useLabels[r.index] = n || !s;
				let c = i;
				n && a.length > 1 && (c = a[a.length - 2]), r.labels[r.index] = /* @__PURE__ */ S(m, {
					column: t,
					children: c
				}, "Label" + t + r.index), r.element_component[r.index] = o, r.index++;
			}
		}
		e.current = r;
	}
}, st = (e, t) => e.current.nameIndex[t], ct = (e, t) => {
	let n = e.current;
	delete n.labels[st(e, t)], e.current = n;
}, lt = ({ formRef: e, container: t }) => {
	Fe(t, (t) => {
		let n = t.path, r = t.value;
		if (Array.isArray(r)) {
			let t = [];
			Object.keys(r).forEach((e) => {
				j(r[e]) || Array.isArray(r[e]) || t.push(r[e]);
			}), t.length > 0 && K(e, n, t);
			return;
		}
		Object.keys(r).forEach((t) => {
			j(r[t]) || (typeof r[t] == "object" && Object.keys(r[t]).forEach((i) => {
				let a = {};
				a[i] = r[t][i], K(e, n + "." + t + "." + i, a);
			}), A(r[t]) && K(e, n + "." + t, r[t]));
		});
	});
}, ut = ({ title: e, getSchema: n, handleSave: r, elementSelector: i, footerButtons: a, refKey: o, register_component: s = !1 }) => {
	let c = B(o, s), l = E(null), [u, f] = D(!1), p = () => {
		f(!1);
	};
	l.current ||= U(i, { setShow: (e) => {
		f(e);
	} }), T(() => (c(l.current), () => c(null)), [c]);
	let [m, h] = D(void 0), [g, v] = D(0);
	return a ||= [], /* @__PURE__ */ C(_, {
		direction: "row",
		gap: 3,
		children: [/* @__PURE__ */ S(d, {
			onClick: async () => {
				try {
					W(l, L(null, [], ".", await n())), tt(l, p), lt({
						formRef: l,
						container: G(l)
					}), h(rt(l)), f(!0);
				} catch (e) {
					console.error("Failed to load schema:", e);
				}
			},
			children: /* @__PURE__ */ S(Ce, { sx: { color: "red" } })
		}), /* @__PURE__ */ S(k, {
			title: e,
			body: /* @__PURE__ */ C(t, {
				sx: { width: "100%" },
				children: [g === 0 && /* @__PURE__ */ S(t, {
					sx: {
						borderBottom: 1,
						borderColor: "divider",
						width: "100%"
					},
					children: m
				}), g === 1 && /* @__PURE__ */ S(t, {
					sx: { p: 3 },
					children: /* @__PURE__ */ S("pre", { children: JSON.stringify(G(l)?.value, null, 2) })
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
}, dt = ({ title: e, show: t, onCancel: r, onConfirm: i }) => /* @__PURE__ */ S(k, {
	title: e || "Are you sure?",
	show: t,
	footer: /* @__PURE__ */ C(_, {
		direction: "column",
		gap: 3,
		children: [/* @__PURE__ */ S(n, {
			onClick: () => {
				j(r) || r();
			},
			children: "Cancel"
		}), /* @__PURE__ */ S(n, {
			onClick: () => {
				j(i) || i();
			},
			children: "Confirm"
		})]
	})
}), ft = ({ refreshGrid: e, api: t }) => /* @__PURE__ */ S(ut, {
	title: "Create",
	getSchema: t.schema,
	handleSave: (n) => {
		t.create(n).then(() => e());
	}
}), pt = ({ refreshGrid: e, api: t, id: n, title: r, footerButtons: i }) => /* @__PURE__ */ S(ut, {
	title: r,
	button_title: "Update",
	getSchema: Ye(t, n),
	handleSave: (r) => {
		t.update(r, n).then(() => e());
	},
	footerButtons: i,
	register_component: !0,
	refKey: "update_modal"
}), mt = ({ refreshGrid: e, api: t, handleSelectedIds: r }) => {
	let [i, a] = D(!1);
	return /* @__PURE__ */ C(_, {
		direction: "horizontal",
		gap: 2,
		children: [/* @__PURE__ */ S(n, {
			onClick: () => {
				a(!i);
			},
			children: "Delete"
		}), /* @__PURE__ */ S(dt, {
			onConfirm: () => {
				t.deleteIds(r()).then(e()), a(!1);
			},
			show: i
		})]
	});
}, ht = ({ refreshGrid: e, api: t, id: r }) => {
	let [i, a] = D(!1);
	return /* @__PURE__ */ C(_, {
		direction: "row",
		gap: 3,
		children: [/* @__PURE__ */ S(n, {
			onClick: () => {
				a(!i);
			},
			children: "Delete"
		}), /* @__PURE__ */ S(dt, {
			onConfirm: () => {
				t.deleteId(r).then(e());
			},
			show: i
		})]
	});
}, gt = ({ handleRefreshGrid: e, api: t, id: n, params: r }) => /* @__PURE__ */ S(_, {
	direction: "row",
	gap: 1,
	children: /* @__PURE__ */ S(pt, {
		...r,
		refreshGrid: e,
		api: t,
		id: n
	})
}), _t = (e, t) => {
	let n = e.current;
	n && (n.endpoint = t);
}, vt = (e) => e.current.endpoint, q = (e, t) => {
	let n = e.current;
	Ie(t, (e) => {
		let t = e.value, r = e.path, i = typeof t;
		if (n.headers_ri[r] !== void 0) return;
		let a = "string";
		i === "number" ? a = "number" : r.toLowerCase().includes("date") || r.toLowerCase().includes("modified") ? a = "date" : i === "string" && (a = "string"), n.headers[n.index] = {
			field: r,
			type: a,
			headerName: r
		}, n.rows[n.index] = [], n.headers_ri[r] = n.index, n.index++;
	}), e.current = n;
}, yt = (e) => {
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
}, bt = (e, t) => {
	let n = e.current;
	if (!n) return;
	n.rows = [[], []], n.row_count = 0;
	let r = n.headers_ri.Field, i = n.headers_ri.Value;
	Object.entries(t).forEach(([e, t]) => {
		if (r !== void 0 && n.rows[r].push(M(e, "_")), i !== void 0) {
			let e = Array.isArray(t) ? t.join(", ") : t;
			n.rows[i].push(e);
		}
		n.row_count++;
	}), e.current = n;
}, J = (e, t) => {
	let n = e.current;
	n && (n.rows = [], n.row_count = 0, n.headers.forEach(() => {
		n.rows.push([]);
	}), Ie(t, (e) => {
		if (A(e.value)) {
			let t = n.headers_ri[e.path];
			t !== void 0 && n.rows[t].push(e.value);
		}
	}), e.current = n);
}, xt = (e) => {
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
}, Y = (e) => {
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
}, St = (e) => {
	let t = e.current;
	return !t || !t.headers ? [] : t.headers;
}, X = (e) => {
	let t = e.current, n = Object.keys(t.headers_ri).map((e) => ({
		field: e,
		sortable: !0,
		filterable: !0,
		headerName: M(e.split(".").pop(), "_"),
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
			renderCell: It(e)
		}, r = Math.max(0, n.length - 1);
		n.splice(r, 0, t);
	}
	return n;
}, Ct = (e) => e.current.paginationModel, wt = (e, t) => {
	let n = e.current;
	n && (n.args = t, e.current = n, n.refresh());
}, Tt = (e, t) => {
	let n = e.current;
	n && (n.args = {
		...n.args,
		...t
	}, e.current = n, n.refresh());
}, Et = (e, t) => {
	let n = e.current;
	n && (n.args.sortModel = JSON.stringify(t), e.current = n);
}, Dt = (e, t) => {
	let n = e.current;
	n && (n.args.filterModel = JSON.stringify(t), e.current = n);
}, Ot = (e, t) => () => {
	let n = e.current;
	n && (n.paginationModel = t, n.args.paginationModel = JSON.stringify(t), e.current = n);
}, kt = (e, t) => {
	let n = e.current;
	n && (n.fetch_params = t, e.current = n);
}, At = (e) => e.current.fetch_params, jt = (e, t) => ({ getRows: async (n) => {
	let r = e.current;
	if (!r) return {
		rows: [],
		rowCount: 0
	};
	Dt(e, n.filterModel), Et(e, n.sortModel);
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
		Array.isArray(t) && t.length === 0 || j(t) || (s[e] = t);
	}), j(n.sortModel) || Array.isArray(n.sortModel) && n.sortModel.length === 0 && delete s.sortModel, j(n.filterModel) || Array.isArray(n.filterModel.items) && n.filterModel.items.length === 0 && delete s.filterModel;
	let c = await r.api?.at("/" + r.endpoint, {
		fetchParams: {
			method: "GET",
			...At(e)
		},
		args: s
	}), l = L(null, [], ".", c.results);
	return q(e, l), J(e, l), r.row_count = c.pagination?.total || 0, e.current = r, t(), {
		rows: Y(e),
		rowCount: c.pagination?.total || 0
	};
} }), Mt = (e, t) => {
	let n = e.current;
	n && (n.args.search = t, e.current = n);
}, Nt = (e) => e.current?.datasource, Z = async (e) => {
	let t = e.current;
	if (!t) return;
	let n = t.gridRef.current;
	n.dataSource.cache.clear(), await n.dataSource.fetchRows(), t.refresh();
}, Pt = (e) => (t) => {
	let n = e.current;
	if (!n || n.rows.length === 0) return;
	let r = t.ids, i = n.rows[0].length, a = Array.from({ length: i }, (e, t) => t).filter((e) => {
		let t = n.rows[0][e];
		return r.has(t);
	});
	n.selected_data = n.rows.map((e) => a.map((t) => e[t])), n.selected_ids = t, e.current = n;
}, Ft = (e, t) => {
	let n = e.current;
	n && (n.cellRenderer = t, e.current = n);
}, It = (e) => {
	let t = e.current;
	if (t) return t.cellRenderer ? t.cellRenderer(e) : Lt(e);
}, Lt = (e) => {
	let r = z();
	return (i) => {
		let [a, o] = D(!1), [s, c] = D(""), l = e.current;
		if (!l) return;
		let u = "white";
		i.row.stage === "rejected" && (u = "red"), i.row.stage === "approved" && (u = "green");
		let f = (e = !1) => {
			let t = r?.get("update_modal")?.context;
			if (!t) return;
			let n = t.setShow;
			n(e);
		}, p = /* @__PURE__ */ C(_, {
			direction: "column",
			justifyContent: "space-between",
			spacing: 2,
			sx: { width: "100%" },
			children: [/* @__PURE__ */ C(_, {
				gap: 3,
				direction: "row",
				children: [
					i.row.item_id,
					/* @__PURE__ */ S(t, {
						sx: {
							backgroundColor: u,
							color: "black",
							borderRadius: 2,
							px: 1.5,
							fontSize: "0.875rem"
						},
						children: i.row.stage
					}),
					/* @__PURE__ */ S(t, { sx: { flexGrow: 1 } }, "spacer"),
					/* @__PURE__ */ S(d, {
						onClick: () => f(!1),
						sx: {
							backgroundColor: "black",
							color: "white"
						},
						children: /* @__PURE__ */ S(Te, {})
					})
				]
			}), /* @__PURE__ */ C(_, {
				gap: 3,
				direction: "row",
				children: [i.row.code, i.row.description]
			})]
		}), m = () => ({
			item_id: i.row.item_id,
			comments: s
		});
		return /* @__PURE__ */ S(gt, {
			params: {
				footerButtons: [
					a && /* @__PURE__ */ S(y, {
						label: "Reason for rejection",
						multiline: !0,
						rows: 4,
						sx: { mb: 2 },
						variant: "outlined",
						fullWidth: !0,
						defaultValue: s,
						onChange: (e) => c(e.target.value)
					}),
					/* @__PURE__ */ S(n, {
						variant: "outlined",
						sx: {
							color: "black",
							backgroundColor: "white",
							borderColor: "black"
						},
						startIcon: /* @__PURE__ */ S(we, {}),
						children: "Extract"
					}),
					/* @__PURE__ */ S(t, { sx: { flexGrow: 1 } }, "spacer"),
					a && /* @__PURE__ */ S(n, {
						onClick: () => o(!1),
						children: "Cancel"
					}),
					!a && /* @__PURE__ */ S(n, {
						sx: { backgroundColor: "red" },
						onClick: () => o(!0),
						children: "Reject"
					}),
					a && /* @__PURE__ */ S(O, {
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
					!a && /* @__PURE__ */ S(O, {
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
	let u = B(r, a), d = E(null), [, f] = D(!1), [p, m] = D({
		page: 0,
		pageSize: 25
	}), [h, g] = D(0), [_, v] = D({ id: !1 }), y = de(), b = () => {
		d.current && g(d.current?.row_count ?? 0), f((e) => !e);
	};
	return d.current ||= {
		gridRef: y,
		index: 0,
		headers: [],
		headers_ri: {},
		rows: [],
		row_count: t ? 0 : void 0,
		datasource: t ? jt(d, b) : void 0,
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
	}, T(() => (u(d.current), () => u(null)), [u]), /* @__PURE__ */ S(le, {
		apiRef: y,
		disableVirtualization: !0,
		columnVisibilityModel: _,
		onColumnVisibilityModelChange: (e) => v(e),
		rowCount: h,
		sx: {
			width: "100%",
			...c
		},
		columns: X(d),
		dataSource: Nt(d),
		pageSizeOptions: [
			25,
			50,
			100
		],
		paginationModel: p,
		onPaginationModelChange: (e) => {
			m(e);
		},
		onRowSelectionModelChange: (e) => Pt(d)(e),
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
			console.error("DataGrid Error Type:", e.name), console.error("DataGrid Error Message:", e.message), e.cause && (console.group("Original Error Cause"), console.error("Message:", e.cause.message), console.error("Stack:", e.cause.stack), console.groupEnd()), e instanceof ue ? console.warn("Fetch failed. Check your API mock or network.") : console.warn("Row update failed.");
		},
		...l
	});
}, Rt = ({ loading: e, value: n }) => /* @__PURE__ */ S(t, {
	sx: {
		position: "relative",
		display: "inline-flex"
	},
	children: /* @__PURE__ */ C(p, {
		position: "end",
		children: [e && /* @__PURE__ */ S(r, {
			sx: { color: "#ff0000" },
			variant: "determinate",
			value: n
		}), /* @__PURE__ */ S(t, {
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
			children: /* @__PURE__ */ S(x, {
				variant: "caption",
				component: "div",
				sx: { color: "text.secondary" },
				children: `${Math.round(n)}%`
			})
		})]
	})
}), zt = ({ ...e }) => /* @__PURE__ */ S(d, {
	...e,
	children: /* @__PURE__ */ S(Oe, {})
}), Bt = (e, t) => {
	let n = e.current;
	n && (n.setProgressValue(t), n.progressValue = t, e.current = n);
}, Vt = (e) => !e || !e.current ? 1 : e.current.progressValue, Ht = (e, t) => {
	let n = e.current;
	n && n.handleToggle(t);
}, Ut = ({ refKey: e, register_component: t, hidden: n, onDropSuccess: r, onSend: i, textFieldSx: a, textFieldProps: o, sendButtonProps: s }) => {
	let [c, l] = D(""), [u, f] = D(!1), [m, h] = D(0), g = B(e, t), _ = E({
		handleToggle: (e) => {
			f(e);
		},
		progressValue: 0,
		setProgressValue: h
	}), { getRootProps: v, getInputProps: b, open: ee, isDragActive: x } = Ee({
		onDrop: oe((e) => {
			if (e.length > 0) {
				let t = _.current;
				f(!0), t.setProgressValue = h, r(_, e), _.current = t;
			}
		}, [r]),
		noClick: !0,
		noKeyboard: !0,
		multiple: !1
	});
	T(() => (g(_.current), () => g(null)), [g]);
	let { ref: te, ...ne } = v(), re = u ? /* @__PURE__ */ S(Rt, {
		loading: !0,
		value: m
	}) : /* @__PURE__ */ S(zt, {
		onClick: i,
		sx: { color: m === 100 ? "red" : "inherit" },
		...s
	});
	return /* @__PURE__ */ S(y, {
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
				...ne,
				inputRef: te,
				startAdornment: /* @__PURE__ */ C(p, {
					position: "start",
					children: [/* @__PURE__ */ S("input", { ...b() }), /* @__PURE__ */ S(d, {
						onClick: ee,
						children: /* @__PURE__ */ S(De, {})
					})]
				}),
				endAdornment: re
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
}, Wt = ({ buttons: e, endpoint: t, title: n, title_topology_params: r, button_stack_params: i, ...a }) => {
	let o = e?.map((e) => e);
	return /* @__PURE__ */ C(_, {
		direction: "column",
		gap: 2,
		sx: { width: "100%" },
		children: [/* @__PURE__ */ C(_, {
			justifyContent: "space-between",
			alignItems: "center",
			direction: "row",
			children: [/* @__PURE__ */ S(x, {
				variant: "h6",
				sx: {
					m: 2,
					whiteSpace: "nowrap",
					overflow: "hidden",
					textOverflow: "ellipsis"
				},
				...r,
				children: n
			}), /* @__PURE__ */ S(_, {
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
		}), /* @__PURE__ */ S(Q, {
			...a,
			endpoint: t
		})]
	});
}, $ = ({ children: e }) => /* @__PURE__ */ C(t, {
	sx: { width: "100%" },
	children: [
		/* @__PURE__ */ S(Ae, {}),
		e,
		/* @__PURE__ */ S(je, {})
	]
}), Gt = ({ children: e }) => {
	let t = E({}), n = ce(() => ({
		register: (e, n) => {
			t.current[e] = n;
		},
		unregister: (e) => {
			delete t.current[e];
		},
		get: (e) => t.current[e] || null,
		registry: () => t.current
	}), []);
	return /* @__PURE__ */ S(R.Provider, {
		value: n,
		children: e
	});
}, Kt = te({
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
}), qt = ({ children: e, theme: t }) => {
	let n = Kt;
	return t || (n = Kt), /* @__PURE__ */ S(Gt, { children: /* @__PURE__ */ C(b, {
		theme: n,
		children: [/* @__PURE__ */ S(a, {}), /* @__PURE__ */ S($, { children: /* @__PURE__ */ S(_, {
			direction: "column",
			gap: 2,
			alignItems: "center",
			sx: { width: "100%" },
			children: e
		}) })]
	}) });
}, Jt = () => {
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
}, Yt = ({ data: e, ...t }) => {
	let n = z(), [r, i] = D({
		rows: [],
		columns: []
	});
	return w(() => {
		(async () => {
			let t = n?.get("key_value_grid");
			if (!t) return;
			let r = { current: { ...t } };
			yt(r), bt(r, e), i({
				rows: [...xt(r)],
				columns: [...St(r)]
			}), await Z(r);
		})();
	}, [e, n]), /* @__PURE__ */ S(Q, {
		register_component: !0,
		datagrid_sx: Jt(),
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
export { K as AddElement, Je as Api, O as ApiButton, Me as CenteredContainer, k as CenteredModal, et as Close, ft as Create, Qe as CsvDatagridSx, V as CsvGrid, jt as DataSourceWrapper, Jt as DatagridSx, ht as Delete, ct as DeleteLabel, mt as DeleteMany, gt as EditCellRenderer, Yt as FieldValueGrid, It as GetCellRenderer, G as GetContainer, Nt as GetDatasource, st as GetElementIndex, ot as GetElementTypes, at as GetElementValue, rt as GetElements, vt as GetEndpoint, At as GetFetchParams, X as GetHeaders, xt as GetKeyValueRows, Ct as GetPaginationModel, Vt as GetProgressValue, St as GetRawHeaders, Y as GetRows, nt as GetSet, Wt as GridWithButtons, qt as HFCenteredLayout, Ye as HandleGet, $ as HeaderFooterLayout, U as InitialTypeFormBuilderRefState, j as IsNullOrUndefined, A as IsPrimitive, Lt as ModalCellRendererWrapper, Rt as ProgressAdornment, R as RefIndexContext, Gt as RefProvider, Z as Refresh, H as SelectAssociation, zt as SendIconButton, wt as SetArgs, Ft as SetCellRenderer, W as SetContainer, _t as SetEndpoint, kt as SetFetchParams, Dt as SetFilterModel, tt as SetHandleClose, q as SetHeadersFromJson, yt as SetKeyValueHeaders, bt as SetKeyValueRows, Ht as SetLoading, Tt as SetOrAddArgs, Ot as SetPaginationModel, Bt as SetProgressValue, J as SetRowsFromJson, Mt as SetSearch, Pt as SetSelectedRows, Et as SetSortModel, M as TitleCase, lt as TypeFormBuilder, Ae as UIAppBar, je as UIBottomNav, Ut as UIInput, Q as UITable, pt as Update, it as UpdateElementValues, B as useConditionalRef, Ze as useManagedRef, z as useRefIndex };
