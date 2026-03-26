import { AppBar as e, Box as t, Button as n, CircularProgress as r, Container as i, CssBaseline as a, Dialog as o, DialogActions as s, DialogContent as c, DialogTitle as l, FormControl as u, IconButton as d, Input as f, InputAdornment as p, InputLabel as m, Paper as h, Select as g, Stack as _, Switch as v, Tab as y, Tabs as b, TextField as ee, ThemeProvider as te, Toolbar as ne, Typography as x, createTheme as S } from "@mui/material";
import re from "@mui/icons-material/BugReport";
import { Fragment as C, jsx as w, jsxs as T } from "react/jsx-runtime";
import ie, { createContext as ae, useCallback as oe, useContext as se, useEffect as E, useLayoutEffect as D, useMemo as ce, useRef as O, useState as k } from "react";
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
var ke = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), Ae = () => /* @__PURE__ */ w(e, {
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
	children: /* @__PURE__ */ T(ne, {
		disableGutters: !0,
		children: [
			/* @__PURE__ */ w(t, {
				component: "img",
				sx: {
					height: 20,
					marginRight: 2
				},
				alt: "Logo",
				src: "/logo.png"
			}),
			/* @__PURE__ */ w(x, {
				variant: "h6",
				component: "div",
				sx: { flexGrow: 1 },
				children: "HTS Product Classification"
			}),
			/* @__PURE__ */ w(d, {
				size: "small",
				sx: { color: "white" },
				onClick: () => console.log("Debug Clicked"),
				children: /* @__PURE__ */ w(re, { fontSize: "small" })
			})
		]
	})
}), je = () => /* @__PURE__ */ w(t, {
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
	children: /* @__PURE__ */ w(i, { maxWidth: "sm" })
}), A = ({ api: e, endpoint: t, children: r, get_args: i, fetch_params: a, callback: o, ...s }) => /* @__PURE__ */ w(n, {
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
}), Me = ({ children: e, sx: n = {} }) => /* @__PURE__ */ w(t, {
	sx: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		minHeight: "100vh",
		...n
	},
	children: /* @__PURE__ */ w(_, {
		direction: "column",
		sx: { width: "100%" },
		children: e
	})
}), j = ({ title: e, body: t, show: n, footer: r, title_sx: i, footer_sx: a, content_sx: u, paper_sx: d }) => /* @__PURE__ */ T(o, {
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
		/* @__PURE__ */ w(l, {
			id: "centered-modal-title",
			sx: { ...i },
			children: e
		}),
		/* @__PURE__ */ w(c, {
			dividers: !0,
			sx: { ...u },
			children: t
		}),
		/* @__PURE__ */ w(s, {
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
}, Ie = (e, t, n = 2) => {
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
}, Le = (e, t, n, r) => {
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
}, Re = (e = null, t = [], n = "_", ...r) => {
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
}, ze = ({ inputKey: e, inputProps: t }) => {
	let n = Object.keys(t.defaultValue)[0], r = t.defaultValue[n], [i, a] = k(/* @__PURE__ */ w(u, {
		type: "text",
		onChange: t.onChange,
		defaultValue: r
	})), o = (e, n) => {
		a(ie.cloneElement(i, {
			...t,
			defaultValue: r,
			name: e + "." + n
		}));
	}, [s, c] = k(/* @__PURE__ */ w(u, {
		type: "text",
		...t,
		defaultValue: n,
		onChange: (t) => o(e, t.target.value)
	}));
	return E(() => {
		o(e, n);
	}, []), /* @__PURE__ */ T(_, {
		direction: "horizontal",
		gap: 2,
		children: [s, i]
	});
}, Be = ({ fileData: e, onChange: t, name: n }) => {
	let [r] = ge(), i = O("");
	return E(() => {
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
	}, [e, r]), E(() => r.registerUpdateListener(({ editorState: e }) => {
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
}, Ve = ({ fileData: e, subtype: n, inputProps: r }) => /* @__PURE__ */ w(t, {
	sx: { width: "100%" },
	children: /* @__PURE__ */ w(h, {
		variant: "outlined",
		sx: {
			p: 2,
			minHeight: "200px",
			position: "relative"
		},
		children: /* @__PURE__ */ T(fe, {
			initialConfig: {
				namespace: "MyEditor",
				nodes: [be, xe],
				theme: {},
				onError: (e) => console.error("Lexical Error:", e),
				editable: n !== 0
			},
			children: [/* @__PURE__ */ w(pe, {
				contentEditable: /* @__PURE__ */ w(me, { style: {
					outline: "none",
					minHeight: "170px"
				} }),
				placeholder: /* @__PURE__ */ w("div", {
					style: {
						position: "absolute",
						top: 20,
						left: 20,
						color: "#aaa"
					},
					children: "Enter text..."
				}),
				ErrorBoundary: he
			}), /* @__PURE__ */ w(Be, {
				fileData: e,
				onChange: r.onChange,
				name: r.name
			})]
		})
	})
}), He = (/* @__PURE__ */ ke(((e, t) => {
	t.exports = {};
})))(), Ue = async (e) => {
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
}, We = (e) => {
	e = atob(e);
	let t = new ArrayBuffer(e.length), n = new Uint8Array(t);
	for (let t = 0; t < e.length; t++) n[t] = e.charCodeAt(t);
	return n;
}, Ge = "data:image/#{encoding};base64,#{data}", Ke = ({ data: e, encoding: t, alt: n }) => {
	let r = Ge, [i, a] = k(void 0);
	return N(t) && (t = "png"), N(n) && (n = "ERROR"), Ue(new Blob([We(e)])).then((e) => {
		r = r.replace("#{encoding}", t), r = r.replace("#{data}", He.Buffer.from(e).toString("base64")), a(r);
	}), /* @__PURE__ */ w(Se, {
		src: i,
		fluid: !0,
		alt: n
	});
}, qe = (e) => {
	let t = "", n = Object.keys(e).map((t) => {
		let n = e[t];
		return N(n) ? "" : `${encodeURIComponent(t)}=${encodeURIComponent(n)}`;
	}).filter((e) => e !== "").join("&");
	if (n) {
		let e = t.indexOf("#");
		e !== -1 && (t = t.slice(0, e)), t += (t.indexOf("?") === -1 ? "?" : "&") + n;
	}
	return t;
}, z = (e, { baseHeaders: t, handleErr: n, handleFinally: r, debug: i } = {}) => {
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
		return N(l) || (d.method === "POST" && (d.body = JSON.stringify(l)), d.method === "GET" && (u += qe(l))), fetch(u, d).catch((e) => n(e)).finally(() => {
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
z("http://localhost:8080/", {
	handleErr: (e) => console.log(e),
	debug: !0
});
//#endregion
//#region src/utility/api.js
var B = ({ endpoint: e, handleErr: t }) => {
	N(t) && (t = (e) => console.log(e));
	let n = z(e, { handleErr: t });
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
}, V = (e, t) => () => e.get(t), Je = ({ jsxKey: e, endpoint: t, inputProps: n }) => {
	let [r, i] = k([/* @__PURE__ */ w("option", {
		value: n.defaultValue,
		children: n.defaultValue
	}, e + "-" + n.defaultValue)]), a = B({ endpoint: t });
	return E(() => {
		a.selectOptions().then((t) => {
			i(Object.keys(t).map((n) => {
				let r = t[n][Object.keys(t[n])[1]], i = t[n][Object.keys(t[n])[0]];
				return /* @__PURE__ */ w("option", {
					value: i,
					children: r
				}, e + "-" + n);
			}));
		});
	}, []), /* @__PURE__ */ w(g, {
		...n,
		defaultValue: n.defaultValue,
		children: [...r || /* @__PURE__ */ w(C, {})]
	}, e);
}, H = ({ jsxKey: e, key: t, inputProps: n }) => {
	let r;
	return t.charAt(t.length - 1) === "D" && t.charAt(t.length - 2) === "I" || t.charAt(t.length - 1) === "S" && t.charAt(t.length - 2) === "D" ? (t.charAt(t.length - 1) === "D" && t.charAt(t.length - 2) === "I" && (r = t.slice(5, t.length - 2)), t.charAt(t.length - 1) === "S" && t.charAt(t.length - 2) === "D" && (r = t.slice(5, t.length - 3), n = {
		...n,
		multiple: !0
	}), /* @__PURE__ */ w(Je, {
		endpoint: r,
		jsxKey: e,
		inputProps: n
	})) : null;
}, Ye = () => ({ formRef: e, jsxKey: t, key: n, currentType: r, inputProps: i }) => {
	let a = H({
		jsxKey: t,
		key: n,
		inputProps: i
	});
	if (!N(a)) return a;
	if (a = /* @__PURE__ */ w(f, {
		type: "text",
		...i
	}, t), r === "number" || r === "bigint") return /* @__PURE__ */ w(f, {
		type: "number",
		...i
	}, t);
	if (r === "boolean") return /* @__PURE__ */ w(v, {
		...i,
		defaultChecked: i.defaultValue
	}, t);
	if (r === "object") {
		if (i.defaultValue.Subtype === 19) return /* @__PURE__ */ w(Yt, { data: R(K(e), n.slice(0, n.lastIndexOf(".")))?.value.Data });
		if (i.defaultValue.Subtype === 17) return /* @__PURE__ */ w(Ke, { data: R(K(e), n.slice(0, n.lastIndexOf(".")))?.value.Data }, t);
		if (i.defaultValue.Subtype === 16 || i.defaultValue.Subtype === 0) {
			let r = R(K(e), n.slice(0, n.lastIndexOf(".")));
			return i.name = n.slice(0, n.lastIndexOf(".")) + ".Data", /* @__PURE__ */ w(Ve, {
				fileData: JSON.stringify(r?.value.Data, null, 2),
				inputProps: i,
				subtype: i.defaultValue.Subtype
			}, t);
		}
		if (i.defaultValue.Subtype === 18) {
			let r = R(K(e), n.slice(0, n.lastIndexOf(".")));
			return i.name = n.slice(0, n.lastIndexOf(".")) + ".Data", /* @__PURE__ */ w(Ve, {
				fileData: r?.value.Data,
				inputProps: i,
				subtype: i.defaultValue.Subtype
			}, t);
		}
		if (!N(i.defaultValue.Subtype) || !N(i.defaultValue.Data)) return null;
		if (Array.isArray(i.defaultValue)) return Object.keys(i.defaultValue).map((e) => /* @__PURE__ */ w(f, {
			type: "text",
			...i,
			defaultValue: i.defaultValue[e]
		}, t));
		if (N(i.defaultValue)) return;
		let r = Object.keys(i.defaultValue)[0];
		return typeof i.defaultValue[r] == "object" ? null : /* @__PURE__ */ w(ze, {
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
	element_component: {},
	container: void 0,
	handleOnClose: void 0,
	elementSelector: e || Ye(),
	context: t
}), Xe = (e) => {
	e.current.handleOnClose();
}, W = (e, t) => {
	let n = e.current;
	n.handleClose = t, e.current = n;
}, G = (e, t) => {
	let n = e.current;
	N(n) || (n.container = t), e.current = n;
}, K = (e) => e.current.container, Ze = (e, n) => {
	let r = e.current, i = r.labels[n], a = r.element_component[n];
	return i === "None" ? /* @__PURE__ */ w(C, { children: a }) : /* @__PURE__ */ T(_, {
		direction: "row",
		gap: 1,
		sx: {
			justifyContent: "space-between",
			width: "100%",
			borderBottom: "1px solid rgba(0, 0, 0, 0.42)",
			pb: .5,
			alignItems: "flex-end"
		},
		children: [/* @__PURE__ */ w(t, {
			sx: {
				width: "50%",
				flexShrink: 0
			},
			children: i
		}), /* @__PURE__ */ w(t, {
			sx: { flexGrow: 1 },
			children: a
		})]
	}, n);
}, Qe = (e) => {
	let t = {};
	return Object.keys(e.current.nameIndex).map((n, r) => {
		t[n] = Ze(e, r);
	}), /* @__PURE__ */ w(_, {
		direction: "column",
		gap: 0,
		children: Object.keys(t).map((e) => t[e])
	});
}, $e = (e) => {
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
		N(R(K(e), c)) && (c = s.slice(0, s.length - 2).join(".")), n.target.type === "checkbox" && (r = n.currentTarget.checked), e.current = t, G(e, Le(K(e), c, l, r)), e.current = t;
	} };
}, et = (e, t) => {
	let n = e.current, r = n.nameIndex[t];
	return n.elements[r];
}, tt = (e, t, n) => {
	let r = typeof n, i = e.current, a = t + i.index, o = {
		name: t,
		defaultValue: et(e, t),
		onChange: $e(e).onChange,
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
	let r = e.current, i = P(t.replace(/root\./, ""), "_"), a = i.split(".");
	if (!a.some((e) => e.toLowerCase() === "data")) {
		if (N(r.nameIndex[t])) {
			r.nameIndex[t] = r.index, r.elements[r.index] = n;
			let o = tt(e, t, n);
			if (!N(o)) {
				let e = a[a.length - 1], n = e.toLowerCase() === "subtype";
				!/^\d+$/.test(e) && !n ? r.labels[r.index] = /* @__PURE__ */ w(m, {
					column: t,
					children: i
				}, "Label" + t + r.index) : r.labels[r.index] = "None", r.element_component[r.index] = o, r.index++;
			}
		}
		e.current = r;
	}
}, nt = (e, t) => e.current.nameIndex[t], rt = (e, t) => {
	let n = e.current;
	delete n.labels[nt(e, t)], e.current = n;
}, it = ({ formRef: e, container: t }) => {
	Fe(t, (t) => {
		let n = t.path, r = t.value;
		if (Array.isArray(r)) {
			let t = [];
			Object.keys(r).forEach((e) => {
				N(r[e]) || Array.isArray(r[e]) || t.push(r[e]);
			}), t.length > 0 && q(e, n, t);
			return;
		}
		Object.keys(r).forEach((t) => {
			N(r[t]) || (typeof r[t] == "object" && Object.keys(r[t]).forEach((i) => {
				let a = {};
				a[i] = r[t][i], q(e, n + "." + t + "." + i, a);
			}), M(r[t]) && q(e, n + "." + t, r[t]));
		});
	});
}, J = ae(null), Y = () => se(J), at = (e) => {
	let t = Y();
	return (n) => {
		n ? t?.register(e, n) : t?.unregister(e);
	};
}, X = (e, t = !0) => {
	let n = Y();
	return (r) => {
		t && r ? n?.register(e, r) : n?.unregister(e);
	};
}, ot = ({ title: e, getSchema: n, handleSave: r, elementSelector: i, footerButtons: a, refKey: o, register_component: s = !1 }) => {
	let c = X(o, s), l = O(null), [u, f] = k(!1), p = () => {
		f(!1);
	};
	l.current ||= U(i, { setShow: (e) => {
		f(e);
	} }), D(() => (c(l.current), () => c(null)), [c]);
	let [m, h] = k(void 0), [g, v] = k(0);
	return a ||= [], /* @__PURE__ */ T(_, {
		direction: "row",
		gap: 3,
		children: [/* @__PURE__ */ w(d, {
			onClick: async () => {
				try {
					G(l, Re(null, [], ".", await n())), W(l, p), it({
						formRef: l,
						container: K(l)
					}), h(Qe(l)), f(!0);
				} catch (e) {
					console.error("Failed to load schema:", e);
				}
			},
			children: /* @__PURE__ */ w(Ce, { sx: { color: "red" } })
		}), /* @__PURE__ */ w(j, {
			title: e,
			body: /* @__PURE__ */ T(t, {
				sx: { width: "100%" },
				children: [
					/* @__PURE__ */ w(t, {
						sx: {
							borderBottom: 1,
							borderColor: "divider"
						},
						children: /* @__PURE__ */ T(b, {
							value: g,
							onChange: (e, t) => v(t),
							"aria-label": "custom tabs",
							children: [/* @__PURE__ */ w(y, { label: "File Upload" }), /* @__PURE__ */ w(y, { label: "File Viewer" })]
						})
					}),
					g === 0 && /* @__PURE__ */ w(t, {
						sx: {
							borderBottom: 1,
							borderColor: "divider",
							width: "100%"
						},
						children: m
					}),
					g === 1 && /* @__PURE__ */ w(t, {
						sx: { p: 3 },
						children: /* @__PURE__ */ w("pre", { children: JSON.stringify(K(l)?.value, null, 2) })
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
}, st = ({ title: e, show: t, onCancel: r, onConfirm: i }) => /* @__PURE__ */ w(j, {
	title: e || "Are you sure?",
	show: t,
	footer: /* @__PURE__ */ T(_, {
		direction: "column",
		gap: 3,
		children: [/* @__PURE__ */ w(n, {
			onClick: () => {
				N(r) || r();
			},
			children: "Cancel"
		}), /* @__PURE__ */ w(n, {
			onClick: () => {
				N(i) || i();
			},
			children: "Confirm"
		})]
	})
}), ct = ({ refreshGrid: e, api: t }) => /* @__PURE__ */ w(ot, {
	title: "Create",
	getSchema: t.schema,
	handleSave: (n) => {
		t.create(n).then(() => e());
	}
}), lt = ({ refreshGrid: e, api: t, id: n, title: r, footerButtons: i }) => /* @__PURE__ */ w(ot, {
	title: r,
	button_title: "Update",
	getSchema: V(t, n),
	handleSave: (r) => {
		t.update(r, n).then(() => e());
	},
	footerButtons: i,
	register_component: !0,
	refKey: "update_modal"
}), ut = ({ refreshGrid: e, api: t, handleSelectedIds: r }) => {
	let [i, a] = k(!1);
	return /* @__PURE__ */ T(_, {
		direction: "horizontal",
		gap: 2,
		children: [/* @__PURE__ */ w(n, {
			onClick: () => {
				a(!i);
			},
			children: "Delete"
		}), /* @__PURE__ */ w(st, {
			onConfirm: () => {
				t.deleteIds(r()).then(e()), a(!1);
			},
			show: i
		})]
	});
}, dt = ({ refreshGrid: e, api: t, id: r }) => {
	let [i, a] = k(!1);
	return /* @__PURE__ */ T(_, {
		direction: "row",
		gap: 3,
		children: [/* @__PURE__ */ w(n, {
			onClick: () => {
				a(!i);
			},
			children: "Delete"
		}), /* @__PURE__ */ w(st, {
			onConfirm: () => {
				t.deleteId(r).then(e());
			},
			show: i
		})]
	});
}, ft = ({ handleRefreshGrid: e, api: t, id: n, params: r }) => /* @__PURE__ */ w(_, {
	direction: "row",
	gap: 1,
	children: /* @__PURE__ */ w(lt, {
		...r,
		refreshGrid: e,
		api: t,
		id: n
	})
}), pt = (e, t) => {
	let n = e.current;
	n && (n.endpoint = t);
}, mt = (e) => e.current.endpoint, ht = (e, t) => {
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
}, gt = (e) => {
	let t = e.current;
	t && (t.index = 0, t.headers = [], t.rows = [], t.headers_ri = {}, ["Field", "Value"].forEach((e) => {
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
}, _t = (e, t) => {
	let n = e.current;
	if (!n) return;
	n.rows = [[], []], n.row_count = 0;
	let r = n.headers_ri.Field, i = n.headers_ri.Value;
	Object.entries(t).forEach(([e, t]) => {
		if (r !== void 0 && n.rows[r].push(P(e, "_")), i !== void 0) {
			let e = Array.isArray(t) ? t.join(", ") : t;
			n.rows[i].push(e);
		}
		n.row_count++;
	}), e.current = n;
}, vt = (e, t) => {
	let n = e.current;
	n && (n.rows = [], n.row_count = 0, n.headers.forEach(() => {
		n.rows.push([]);
	}), Ie(t, (e) => {
		if (M(e.value)) {
			let t = n.headers_ri[e.path];
			t !== void 0 && n.rows[t].push(e.value);
		}
	}), e.current = n);
}, yt = (e) => {
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
}, bt = (e) => {
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
}, xt = (e) => {
	let t = e.current;
	return !t || !t.headers ? [] : t.headers;
}, St = (e) => {
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
		Array.isArray(t) && t.length === 0 || N(t) || (s[e] = t);
	}), N(n.sortModel) || Array.isArray(n.sortModel) && n.sortModel.length === 0 && delete s.sortModel, N(n.filterModel) || Array.isArray(n.filterModel.items) && n.filterModel.items.length === 0 && delete s.filterModel;
	let c = await r.api?.at("/" + r.endpoint, {
		fetchParams: {
			method: "GET",
			...At(e)
		},
		args: s
	}), l = Re(null, [], ".", c.results);
	return ht(e, l), vt(e, l), r.row_count = c.pagination?.total || 0, e.current = r, t(), {
		rows: bt(e),
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
	let r = Y();
	return (i) => {
		let [a, o] = k(!1), [s, c] = k(""), l = e.current;
		if (!l) return;
		let u = "white";
		i.row.stage === "rejected" && (u = "red"), i.row.stage === "approved" && (u = "green");
		let f = (e = !1) => {
			let t = r?.get("update_modal")?.context;
			if (!t) return;
			let n = t.setShow;
			n(e);
		}, p = /* @__PURE__ */ T(_, {
			direction: "column",
			justifyContent: "space-between",
			spacing: 2,
			sx: { width: "100%" },
			children: [/* @__PURE__ */ T(_, {
				gap: 3,
				direction: "row",
				children: [
					i.row.item_id,
					/* @__PURE__ */ w(t, {
						sx: {
							backgroundColor: u,
							color: "black",
							borderRadius: 2,
							px: 1.5,
							fontSize: "0.875rem"
						},
						children: i.row.stage
					}),
					/* @__PURE__ */ w(t, { sx: { flexGrow: 1 } }, "spacer"),
					/* @__PURE__ */ w(d, {
						onClick: () => f(!1),
						sx: {
							backgroundColor: "black",
							color: "white"
						},
						children: /* @__PURE__ */ w(Te, {})
					})
				]
			}), /* @__PURE__ */ T(_, {
				gap: 3,
				direction: "row",
				children: [i.row.code, i.row.description]
			})]
		}), m = () => ({
			item_id: i.row.item_id,
			comments: s
		});
		return /* @__PURE__ */ w(ft, {
			params: {
				footerButtons: [
					a && /* @__PURE__ */ w(ee, {
						label: "Reason for rejection",
						multiline: !0,
						rows: 4,
						sx: { mb: 2 },
						variant: "outlined",
						fullWidth: !0,
						defaultValue: s,
						onChange: (e) => c(e.target.value)
					}),
					/* @__PURE__ */ w(n, {
						variant: "outlined",
						sx: {
							color: "black",
							backgroundColor: "white",
							borderColor: "black"
						},
						startIcon: /* @__PURE__ */ w(we, {}),
						children: "Extract"
					}),
					/* @__PURE__ */ w(t, { sx: { flexGrow: 1 } }, "spacer"),
					a && /* @__PURE__ */ w(n, {
						onClick: () => o(!1),
						children: "Cancel"
					}),
					!a && /* @__PURE__ */ w(n, {
						sx: { backgroundColor: "red" },
						onClick: () => o(!0),
						children: "Reject"
					}),
					a && /* @__PURE__ */ w(A, {
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
					!a && /* @__PURE__ */ w(A, {
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
	let u = X(r, a), d = O(null), [, f] = k(!1), [p, m] = k({
		page: 0,
		pageSize: 25
	}), [h, g] = k(0), [_, v] = k({ id: !1 }), y = de(), b = () => {
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
	}, D(() => (u(d.current), () => u(null)), [u]), /* @__PURE__ */ w(le, {
		apiRef: y,
		disableVirtualization: !0,
		columnVisibilityModel: _,
		onColumnVisibilityModelChange: (e) => v(e),
		rowCount: h,
		sx: {
			width: "100%",
			...c
		},
		columns: St(d),
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
}, Rt = ({ loading: e, value: n }) => /* @__PURE__ */ w(t, {
	sx: {
		position: "relative",
		display: "inline-flex"
	},
	children: /* @__PURE__ */ T(p, {
		position: "end",
		children: [e && /* @__PURE__ */ w(r, {
			sx: { color: "#ff0000" },
			variant: "determinate",
			value: n
		}), /* @__PURE__ */ w(t, {
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
			children: /* @__PURE__ */ w(x, {
				variant: "caption",
				component: "div",
				sx: { color: "text.secondary" },
				children: `${Math.round(n)}%`
			})
		})]
	})
}), zt = ({ ...e }) => /* @__PURE__ */ w(d, {
	...e,
	children: /* @__PURE__ */ w(Oe, {})
}), Bt = (e, t) => {
	let n = e.current;
	n && (n.setProgressValue(t), n.progressValue = t, e.current = n);
}, Vt = (e) => !e || !e.current ? 1 : e.current.progressValue, Ht = (e, t) => {
	let n = e.current;
	n && n.handleToggle(t);
}, Ut = ({ refKey: e, register_component: t, hidden: n, onDropSuccess: r, onSend: i, textFieldSx: a, textFieldProps: o, sendButtonProps: s }) => {
	let [c, l] = k(""), [u, f] = k(!1), [m, h] = k(0), g = X(e, t), _ = O({
		handleToggle: (e) => {
			f(e);
		},
		progressValue: 0,
		setProgressValue: h
	}), { getRootProps: v, getInputProps: y, open: b, isDragActive: te } = Ee({
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
	D(() => (g(_.current), () => g(null)), [g]);
	let { ref: ne, ...x } = v(), S = u ? /* @__PURE__ */ w(Rt, {
		loading: !0,
		value: m
	}) : /* @__PURE__ */ w(zt, {
		onClick: i,
		sx: { color: m === 100 ? "red" : "inherit" },
		...s
	});
	return /* @__PURE__ */ w(ee, {
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
				...x,
				inputRef: ne,
				startAdornment: /* @__PURE__ */ T(p, {
					position: "start",
					children: [/* @__PURE__ */ w("input", { ...y() }), /* @__PURE__ */ w(d, {
						onClick: b,
						children: /* @__PURE__ */ w(De, {})
					})]
				}),
				endAdornment: S
			}
		},
		sx: {
			width: "100%",
			backgroundColor: te ? "action.hover" : "inherit",
			"& .MuiOutlinedInput-root": { transition: "background-color 0.2s" },
			display: n ? "none" : "flex",
			...a
		},
		...o
	});
}, Wt = ({ buttons: e, endpoint: t, title: n, title_topology_params: r, button_stack_params: i, ...a }) => {
	let o = e?.map((e) => e);
	return /* @__PURE__ */ T(_, {
		direction: "column",
		gap: 2,
		sx: { width: "100%" },
		children: [/* @__PURE__ */ T(_, {
			justifyContent: "space-between",
			alignItems: "center",
			direction: "row",
			children: [/* @__PURE__ */ w(x, {
				variant: "h6",
				sx: {
					m: 2,
					whiteSpace: "nowrap",
					overflow: "hidden",
					textOverflow: "ellipsis"
				},
				...r,
				children: n
			}), /* @__PURE__ */ w(_, {
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
		}), /* @__PURE__ */ w(Q, {
			...a,
			endpoint: t
		})]
	});
}, $ = ({ children: e }) => /* @__PURE__ */ T(t, {
	sx: { width: "100%" },
	children: [
		/* @__PURE__ */ w(Ae, {}),
		e,
		/* @__PURE__ */ w(je, {})
	]
}), Gt = ({ children: e }) => {
	let t = O({}), n = ce(() => ({
		register: (e, n) => {
			t.current[e] = n;
		},
		unregister: (e) => {
			delete t.current[e];
		},
		get: (e) => t.current[e] || null,
		registry: () => t.current
	}), []);
	return /* @__PURE__ */ w(J.Provider, {
		value: n,
		children: e
	});
}, Kt = S({
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
	return t || (n = Kt), /* @__PURE__ */ w(Gt, { children: /* @__PURE__ */ T(te, {
		theme: n,
		children: [/* @__PURE__ */ w(a, {}), /* @__PURE__ */ w($, { children: /* @__PURE__ */ w(_, {
			direction: "column",
			gap: 2,
			alignItems: "center",
			sx: { width: "100%" },
			children: e
		}) })]
	}) });
}, Jt = () => ({
	"& .MuiDataGrid-cell[data-field=\"edit\"]": {
		position: "sticky",
		right: 0,
		width: "auto",
		backgroundColor: "white",
		zIndex: 2
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
}), Yt = ({ data: e, ...t }) => {
	let n = Y(), [r, i] = k({
		rows: [],
		columns: []
	});
	return E(() => {
		(async () => {
			let t = n?.get("key_value_grid");
			if (!t) return;
			let r = { current: { ...t } };
			gt(r), _t(r, e), i({
				rows: [...yt(r)],
				columns: [...xt(r)]
			}), await Z(r);
		})();
	}, [e, n]), /* @__PURE__ */ w(Q, {
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
export { q as AddElement, B as Api, A as ApiButton, Me as CenteredContainer, j as CenteredModal, Xe as Close, ct as Create, jt as DataSourceWrapper, Jt as DatagridSx, dt as Delete, rt as DeleteLabel, ut as DeleteMany, ft as EditCellRenderer, Yt as FieldValueGrid, It as GetCellRenderer, K as GetContainer, Nt as GetDatasource, nt as GetElementIndex, tt as GetElementTypes, et as GetElementValue, Qe as GetElements, mt as GetEndpoint, At as GetFetchParams, St as GetHeaders, yt as GetKeyValueRows, Ct as GetPaginationModel, Vt as GetProgressValue, xt as GetRawHeaders, bt as GetRows, Ze as GetSet, Wt as GridWithButtons, qt as HFCenteredLayout, V as HandleGet, $ as HeaderFooterLayout, U as InitialTypeFormBuilderRefState, N as IsNullOrUndefined, M as IsPrimitive, Lt as ModalCellRendererWrapper, Rt as ProgressAdornment, J as RefIndexContext, Gt as RefProvider, Z as Refresh, H as SelectAssociation, zt as SendIconButton, wt as SetArgs, Ft as SetCellRenderer, G as SetContainer, pt as SetEndpoint, kt as SetFetchParams, Dt as SetFilterModel, W as SetHandleClose, ht as SetHeadersFromJson, gt as SetKeyValueHeaders, _t as SetKeyValueRows, Ht as SetLoading, Tt as SetOrAddArgs, Ot as SetPaginationModel, Bt as SetProgressValue, vt as SetRowsFromJson, Mt as SetSearch, Pt as SetSelectedRows, Et as SetSortModel, P as TitleCase, it as TypeFormBuilder, Ae as UIAppBar, je as UIBottomNav, Ut as UIInput, Q as UITable, lt as Update, $e as UpdateElementValues, X as useConditionalRef, at as useManagedRef, Y as useRefIndex };
