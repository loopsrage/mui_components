import { AppBar as e, Box as t, Button as n, CircularProgress as r, Container as i, CssBaseline as a, Dialog as o, DialogActions as s, DialogContent as c, DialogTitle as l, FormControl as u, IconButton as d, Input as f, InputAdornment as p, InputLabel as m, Paper as h, Select as g, Stack as _, Switch as v, Tab as y, Tabs as b, TextField as x, ThemeProvider as S, Toolbar as C, Typography as w, createTheme as T } from "@mui/material";
import ee from "@mui/icons-material/BugReport";
import { Fragment as te, jsx as E, jsxs as D } from "react/jsx-runtime";
import ne, { createContext as re, useCallback as ie, useContext as ae, useEffect as O, useLayoutEffect as k, useMemo as oe, useRef as A, useState as j } from "react";
import { DataGrid as se, GridGetRowsError as ce, useGridApiRef as le } from "@mui/x-data-grid";
import { LexicalComposer as ue } from "@lexical/react/LexicalComposer";
import { RichTextPlugin as de } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable as M } from "@lexical/react/LexicalContentEditable";
import { LexicalErrorBoundary as N } from "@lexical/react/LexicalErrorBoundary";
import { useLexicalComposerContext as fe } from "@lexical/react/LexicalComposerContext";
import { $generateHtmlFromNodes as pe, $generateNodesFromDOM as P } from "@lexical/html";
import { $getRoot as F, ParagraphNode as I, TextNode as me } from "lexical";
import { Image as he } from "mui-image";
import L from "@mui/icons-material/Description";
import ge from "@mui/icons-material/Close";
import { useDropzone as _e } from "react-dropzone";
import R from "@mui/icons-material/CloudUpload";
import z from "@mui/icons-material/Send";
//#region \0rolldown/runtime.js
var B = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), V = ({ title: n, appbar_sx: r }) => /* @__PURE__ */ E(e, {
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
	children: /* @__PURE__ */ D(C, {
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
			/* @__PURE__ */ E(w, {
				variant: "h6",
				component: "div",
				sx: { flexGrow: 1 },
				children: n
			}),
			/* @__PURE__ */ E(d, {
				size: "small",
				sx: { color: "white" },
				onClick: () => console.log("Debug Clicked"),
				children: /* @__PURE__ */ E(ee, { fontSize: "small" })
			})
		]
	})
}), ve = () => /* @__PURE__ */ E(t, {
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
}), H = ({ api: e, endpoint: t, children: r, get_args: i, fetch_params: a, callback: o, ...s }) => /* @__PURE__ */ E(n, {
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
}), ye = ({ children: e, sx: n = {} }) => /* @__PURE__ */ E(t, {
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
}), be = ({ title: e, body: t, show: n, footer: r, title_sx: i, footer_sx: a, content_sx: u, paper_sx: d }) => /* @__PURE__ */ D(o, {
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
}), U = (e) => {
	if (e === null) return !0;
	let t = typeof e;
	return t === "string" || t === "number" || t === "boolean" || t === "undefined" || t === "symbol" || t === "bigint" || t === "int";
}, W = (e) => e == null, G = (e, t) => W(e) ? "" : e.split(t).map((e) => e.charAt(0).toUpperCase() + e.slice(1)).join(" "), K = "Values", q = "Containers", xe = (e, t, n, r) => {
	let i = r || {
		[K]: /* @__PURE__ */ new Map(),
		[q]: /* @__PURE__ */ new Map()
	}, a = e ? t : "root", o = {
		parent: e,
		path: a,
		value: n,
		children: [],
		root: e ? e.root : null,
		containerIndex: i
	};
	return e || (o.root = o), i[K].set(a, n), i[q].set(a, o), Object.freeze(o);
}, Se = (e, t, n) => {
	let r = xe(e, t, n, e.containerIndex);
	return {
		...e,
		children: [...e.children, r]
	};
}, J = (e, t) => e.containerIndex[q].get(t), Ce = (e, t) => {
	for (let [n, r] of e.containerIndex[K].entries()) t(n, r);
}, we = (e, t) => {
	for (let [, n] of e.containerIndex[q].entries()) t(n);
}, Te = (e, t, n = 2) => {
	Ce(e, (e, r) => {
		let i = Object.keys(r);
		for (let a = 0; a < i.length; a++) {
			let o = e.split(".");
			o.push(i[a]);
			let s = o.slice(2).join("."), c = r[i[a]];
			o.length > n && U(c) && t({
				i: a,
				value: c,
				path: s,
				fullpath: o.join("."),
				key: e,
				containerValue: r
			});
		}
	});
}, Ee = (e, t, n, r) => {
	if (!e || !t) return e;
	let i = e.containerIndex[q].get(t);
	if (!i) return console.warn(`Container at path "${t}" not found.`), e;
	let a = {};
	a[n] = r;
	let o = {
		...i.value,
		...a
	}, s = xe(i.parent, i.path, o, e.containerIndex);
	e.containerIndex[q].set(t, s), e.containerIndex[K].set(t, o);
	let c = s;
	for (; c.parent;) {
		let t = c.parent, n = t.children.map((e) => e.path === c.path ? c : e), r = c.path.split("."), i = r.slice(r.length - 1), a = { ...e.containerIndex[K].get(t.path) };
		a[i] = o;
		let s = Object.freeze({
			...t,
			children: n,
			value: a
		});
		e.containerIndex[q].set(s.path, s), c = s;
	}
	return e.containerIndex[q].get("root");
}, De = (e = null, t = [], n = "_", ...r) => {
	e === null && (e = xe(null, "root", r.length === 0 ? {} : r[0]), t = ["root"]);
	let i = (e, t) => {
		let r = e.value;
		return typeof r == "object" && r && (Array.isArray(r) ? r.forEach((r, a) => {
			if (typeof r == "object" && r) {
				let o = [...t, String(a)];
				i(Se(e, o.join(n), r).children.at(-1), o);
			}
		}) : Object.entries(r).forEach(([r, a]) => {
			if (typeof a == "object" && a) {
				let o = [...t, r];
				i(Se(e, o.join(n), a).children.at(-1), o);
			}
		})), e;
	};
	return i(e, t);
}, Oe = ({ inputKey: e, inputProps: t }) => {
	let n = Object.keys(t.defaultValue)[0], r = t.defaultValue[n], [i, a] = j(/* @__PURE__ */ E(u, {
		type: "text",
		onChange: t.onChange,
		defaultValue: r
	})), o = (e, n) => {
		a(ne.cloneElement(i, {
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
}, ke = ({ fileData: e, onChange: t, name: n }) => {
	let [r] = fe(), i = A("");
	return O(() => {
		e && (async () => {
			if (!e) return;
			let t = String(e).replace(/^"|"$/g, "").replace(/\\n/g, "<br/>");
			t !== i.current && (i.current = t, r.update(() => {
				let e = F();
				e.clear();
				let n = P(r, new DOMParser().parseFromString(`<div>${t}</div>`, "text/html"));
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
}, Ae = ({ fileData: e, subtype: n, inputProps: r }) => /* @__PURE__ */ E(t, {
	sx: { width: "100%" },
	children: /* @__PURE__ */ E(h, {
		variant: "outlined",
		sx: {
			p: 2,
			minHeight: "200px",
			position: "relative"
		},
		children: /* @__PURE__ */ D(ue, {
			initialConfig: {
				namespace: "MyEditor",
				nodes: [I, me],
				theme: {},
				onError: (e) => console.error("Lexical Error:", e),
				editable: n !== 0
			},
			children: [/* @__PURE__ */ E(de, {
				contentEditable: /* @__PURE__ */ E(M, { style: {
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
				ErrorBoundary: N
			}), /* @__PURE__ */ E(ke, {
				fileData: e,
				onChange: r.onChange,
				name: r.name
			})]
		})
	})
}), je = /* @__PURE__ */ B(((e) => {
	e.byteLength = c, e.toByteArray = u, e.fromByteArray = p;
	for (var t = [], n = [], r = typeof Uint8Array < "u" ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, o = i.length; a < o; ++a) t[a] = i[a], n[i.charCodeAt(a)] = a;
	n[45] = 62, n[95] = 63;
	function s(e) {
		var t = e.length;
		if (t % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
		var n = e.indexOf("=");
		n === -1 && (n = t);
		var r = n === t ? 0 : 4 - n % 4;
		return [n, r];
	}
	function c(e) {
		var t = s(e), n = t[0], r = t[1];
		return (n + r) * 3 / 4 - r;
	}
	function l(e, t, n) {
		return (t + n) * 3 / 4 - n;
	}
	function u(e) {
		var t, i = s(e), a = i[0], o = i[1], c = new r(l(e, a, o)), u = 0, d = o > 0 ? a - 4 : a, f;
		for (f = 0; f < d; f += 4) t = n[e.charCodeAt(f)] << 18 | n[e.charCodeAt(f + 1)] << 12 | n[e.charCodeAt(f + 2)] << 6 | n[e.charCodeAt(f + 3)], c[u++] = t >> 16 & 255, c[u++] = t >> 8 & 255, c[u++] = t & 255;
		return o === 2 && (t = n[e.charCodeAt(f)] << 2 | n[e.charCodeAt(f + 1)] >> 4, c[u++] = t & 255), o === 1 && (t = n[e.charCodeAt(f)] << 10 | n[e.charCodeAt(f + 1)] << 4 | n[e.charCodeAt(f + 2)] >> 2, c[u++] = t >> 8 & 255, c[u++] = t & 255), c;
	}
	function d(e) {
		return t[e >> 18 & 63] + t[e >> 12 & 63] + t[e >> 6 & 63] + t[e & 63];
	}
	function f(e, t, n) {
		for (var r, i = [], a = t; a < n; a += 3) r = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (e[a + 2] & 255), i.push(d(r));
		return i.join("");
	}
	function p(e) {
		for (var n, r = e.length, i = r % 3, a = [], o = 16383, s = 0, c = r - i; s < c; s += o) a.push(f(e, s, s + o > c ? c : s + o));
		return i === 1 ? (n = e[r - 1], a.push(t[n >> 2] + t[n << 4 & 63] + "==")) : i === 2 && (n = (e[r - 2] << 8) + e[r - 1], a.push(t[n >> 10] + t[n >> 4 & 63] + t[n << 2 & 63] + "=")), a.join("");
	}
})), Me = /* @__PURE__ */ B(((e) => {
	e.read = function(e, t, n, r, i) {
		var a, o, s = i * 8 - r - 1, c = (1 << s) - 1, l = c >> 1, u = -7, d = n ? i - 1 : 0, f = n ? -1 : 1, p = e[t + d];
		for (d += f, a = p & (1 << -u) - 1, p >>= -u, u += s; u > 0; a = a * 256 + e[t + d], d += f, u -= 8);
		for (o = a & (1 << -u) - 1, a >>= -u, u += r; u > 0; o = o * 256 + e[t + d], d += f, u -= 8);
		if (a === 0) a = 1 - l;
		else if (a === c) return o ? NaN : (p ? -1 : 1) * Infinity;
		else o += 2 ** r, a -= l;
		return (p ? -1 : 1) * o * 2 ** (a - r);
	}, e.write = function(e, t, n, r, i, a) {
		var o, s, c, l = a * 8 - i - 1, u = (1 << l) - 1, d = u >> 1, f = i === 23 ? 2 ** -24 - 2 ** -77 : 0, p = r ? 0 : a - 1, m = r ? 1 : -1, h = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
		for (t = Math.abs(t), isNaN(t) || t === Infinity ? (s = isNaN(t) ? 1 : 0, o = u) : (o = Math.floor(Math.log(t) / Math.LN2), t * (c = 2 ** -o) < 1 && (o--, c *= 2), o + d >= 1 ? t += f / c : t += f * 2 ** (1 - d), t * c >= 2 && (o++, c /= 2), o + d >= u ? (s = 0, o = u) : o + d >= 1 ? (s = (t * c - 1) * 2 ** i, o += d) : (s = t * 2 ** (d - 1) * 2 ** i, o = 0)); i >= 8; e[n + p] = s & 255, p += m, s /= 256, i -= 8);
		for (o = o << i | s, l += i; l > 0; e[n + p] = o & 255, p += m, o /= 256, l -= 8);
		e[n + p - m] |= h * 128;
	};
})), Ne = (/* @__PURE__ */ B(((e) => {
	var t = je(), n = Me(), r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
	e.Buffer = s, e.SlowBuffer = v, e.INSPECT_MAX_BYTES = 50;
	var i = 2147483647;
	e.kMaxLength = i, s.TYPED_ARRAY_SUPPORT = a(), !s.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
	function a() {
		try {
			let e = new Uint8Array(1), t = { foo: function() {
				return 42;
			} };
			return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), e.foo() === 42;
		} catch {
			return !1;
		}
	}
	Object.defineProperty(s.prototype, "parent", {
		enumerable: !0,
		get: function() {
			if (s.isBuffer(this)) return this.buffer;
		}
	}), Object.defineProperty(s.prototype, "offset", {
		enumerable: !0,
		get: function() {
			if (s.isBuffer(this)) return this.byteOffset;
		}
	});
	function o(e) {
		if (e > i) throw RangeError("The value \"" + e + "\" is invalid for option \"size\"");
		let t = new Uint8Array(e);
		return Object.setPrototypeOf(t, s.prototype), t;
	}
	function s(e, t, n) {
		if (typeof e == "number") {
			if (typeof t == "string") throw TypeError("The \"string\" argument must be of type string. Received type number");
			return d(e);
		}
		return c(e, t, n);
	}
	s.poolSize = 8192;
	function c(e, t, n) {
		if (typeof e == "string") return f(e, t);
		if (ArrayBuffer.isView(e)) return m(e);
		if (e == null) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
		if (B(e, ArrayBuffer) || e && B(e.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (B(e, SharedArrayBuffer) || e && B(e.buffer, SharedArrayBuffer))) return h(e, t, n);
		if (typeof e == "number") throw TypeError("The \"value\" argument must not be of type number. Received type number");
		let r = e.valueOf && e.valueOf();
		if (r != null && r !== e) return s.from(r, t, n);
		let i = g(e);
		if (i) return i;
		if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof e[Symbol.toPrimitive] == "function") return s.from(e[Symbol.toPrimitive]("string"), t, n);
		throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
	}
	s.from = function(e, t, n) {
		return c(e, t, n);
	}, Object.setPrototypeOf(s.prototype, Uint8Array.prototype), Object.setPrototypeOf(s, Uint8Array);
	function l(e) {
		if (typeof e != "number") throw TypeError("\"size\" argument must be of type number");
		if (e < 0) throw RangeError("The value \"" + e + "\" is invalid for option \"size\"");
	}
	function u(e, t, n) {
		return l(e), e <= 0 || t === void 0 ? o(e) : typeof n == "string" ? o(e).fill(t, n) : o(e).fill(t);
	}
	s.alloc = function(e, t, n) {
		return u(e, t, n);
	};
	function d(e) {
		return l(e), o(e < 0 ? 0 : _(e) | 0);
	}
	s.allocUnsafe = function(e) {
		return d(e);
	}, s.allocUnsafeSlow = function(e) {
		return d(e);
	};
	function f(e, t) {
		if ((typeof t != "string" || t === "") && (t = "utf8"), !s.isEncoding(t)) throw TypeError("Unknown encoding: " + t);
		let n = y(e, t) | 0, r = o(n), i = r.write(e, t);
		return i !== n && (r = r.slice(0, i)), r;
	}
	function p(e) {
		let t = e.length < 0 ? 0 : _(e.length) | 0, n = o(t);
		for (let r = 0; r < t; r += 1) n[r] = e[r] & 255;
		return n;
	}
	function m(e) {
		if (B(e, Uint8Array)) {
			let t = new Uint8Array(e);
			return h(t.buffer, t.byteOffset, t.byteLength);
		}
		return p(e);
	}
	function h(e, t, n) {
		if (t < 0 || e.byteLength < t) throw RangeError("\"offset\" is outside of buffer bounds");
		if (e.byteLength < t + (n || 0)) throw RangeError("\"length\" is outside of buffer bounds");
		let r;
		return r = t === void 0 && n === void 0 ? new Uint8Array(e) : n === void 0 ? new Uint8Array(e, t) : new Uint8Array(e, t, n), Object.setPrototypeOf(r, s.prototype), r;
	}
	function g(e) {
		if (s.isBuffer(e)) {
			let t = _(e.length) | 0, n = o(t);
			return n.length === 0 || e.copy(n, 0, 0, t), n;
		}
		if (e.length !== void 0) return typeof e.length != "number" || V(e.length) ? o(0) : p(e);
		if (e.type === "Buffer" && Array.isArray(e.data)) return p(e.data);
	}
	function _(e) {
		if (e >= i) throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
		return e | 0;
	}
	function v(e) {
		return +e != e && (e = 0), s.alloc(+e);
	}
	s.isBuffer = function(e) {
		return e != null && e._isBuffer === !0 && e !== s.prototype;
	}, s.compare = function(e, t) {
		if (B(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), B(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), !s.isBuffer(e) || !s.isBuffer(t)) throw TypeError("The \"buf1\", \"buf2\" arguments must be one of type Buffer or Uint8Array");
		if (e === t) return 0;
		let n = e.length, r = t.length;
		for (let i = 0, a = Math.min(n, r); i < a; ++i) if (e[i] !== t[i]) {
			n = e[i], r = t[i];
			break;
		}
		return n < r ? -1 : r < n ? 1 : 0;
	}, s.isEncoding = function(e) {
		switch (String(e).toLowerCase()) {
			case "hex":
			case "utf8":
			case "utf-8":
			case "ascii":
			case "latin1":
			case "binary":
			case "base64":
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return !0;
			default: return !1;
		}
	}, s.concat = function(e, t) {
		if (!Array.isArray(e)) throw TypeError("\"list\" argument must be an Array of Buffers");
		if (e.length === 0) return s.alloc(0);
		let n;
		if (t === void 0) for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
		let r = s.allocUnsafe(t), i = 0;
		for (n = 0; n < e.length; ++n) {
			let t = e[n];
			if (B(t, Uint8Array)) i + t.length > r.length ? (s.isBuffer(t) || (t = s.from(t)), t.copy(r, i)) : Uint8Array.prototype.set.call(r, t, i);
			else if (s.isBuffer(t)) t.copy(r, i);
			else throw TypeError("\"list\" argument must be an Array of Buffers");
			i += t.length;
		}
		return r;
	};
	function y(e, t) {
		if (s.isBuffer(e)) return e.length;
		if (ArrayBuffer.isView(e) || B(e, ArrayBuffer)) return e.byteLength;
		if (typeof e != "string") throw TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + typeof e);
		let n = e.length, r = arguments.length > 2 && arguments[2] === !0;
		if (!r && n === 0) return 0;
		let i = !1;
		for (;;) switch (t) {
			case "ascii":
			case "latin1":
			case "binary": return n;
			case "utf8":
			case "utf-8": return L(e).length;
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return n * 2;
			case "hex": return n >>> 1;
			case "base64": return R(e).length;
			default:
				if (i) return r ? -1 : L(e).length;
				t = ("" + t).toLowerCase(), i = !0;
		}
	}
	s.byteLength = y;
	function b(e, t, n) {
		let r = !1;
		if ((t === void 0 || t < 0) && (t = 0), t > this.length || ((n === void 0 || n > this.length) && (n = this.length), n <= 0) || (n >>>= 0, t >>>= 0, n <= t)) return "";
		for (e ||= "utf8";;) switch (e) {
			case "hex": return k(this, t, n);
			case "utf8":
			case "utf-8": return ne(this, t, n);
			case "ascii": return ae(this, t, n);
			case "latin1":
			case "binary": return O(this, t, n);
			case "base64": return D(this, t, n);
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return oe(this, t, n);
			default:
				if (r) throw TypeError("Unknown encoding: " + e);
				e = (e + "").toLowerCase(), r = !0;
		}
	}
	s.prototype._isBuffer = !0;
	function x(e, t, n) {
		let r = e[t];
		e[t] = e[n], e[n] = r;
	}
	s.prototype.swap16 = function() {
		let e = this.length;
		if (e % 2 != 0) throw RangeError("Buffer size must be a multiple of 16-bits");
		for (let t = 0; t < e; t += 2) x(this, t, t + 1);
		return this;
	}, s.prototype.swap32 = function() {
		let e = this.length;
		if (e % 4 != 0) throw RangeError("Buffer size must be a multiple of 32-bits");
		for (let t = 0; t < e; t += 4) x(this, t, t + 3), x(this, t + 1, t + 2);
		return this;
	}, s.prototype.swap64 = function() {
		let e = this.length;
		if (e % 8 != 0) throw RangeError("Buffer size must be a multiple of 64-bits");
		for (let t = 0; t < e; t += 8) x(this, t, t + 7), x(this, t + 1, t + 6), x(this, t + 2, t + 5), x(this, t + 3, t + 4);
		return this;
	}, s.prototype.toString = function() {
		let e = this.length;
		return e === 0 ? "" : arguments.length === 0 ? ne(this, 0, e) : b.apply(this, arguments);
	}, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(e) {
		if (!s.isBuffer(e)) throw TypeError("Argument must be a Buffer");
		return this === e ? !0 : s.compare(this, e) === 0;
	}, s.prototype.inspect = function() {
		let t = "", n = e.INSPECT_MAX_BYTES;
		return t = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(), this.length > n && (t += " ... "), "<Buffer " + t + ">";
	}, r && (s.prototype[r] = s.prototype.inspect), s.prototype.compare = function(e, t, n, r, i) {
		if (B(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), !s.isBuffer(e)) throw TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof e);
		if (t === void 0 && (t = 0), n === void 0 && (n = e ? e.length : 0), r === void 0 && (r = 0), i === void 0 && (i = this.length), t < 0 || n > e.length || r < 0 || i > this.length) throw RangeError("out of range index");
		if (r >= i && t >= n) return 0;
		if (r >= i) return -1;
		if (t >= n) return 1;
		if (t >>>= 0, n >>>= 0, r >>>= 0, i >>>= 0, this === e) return 0;
		let a = i - r, o = n - t, c = Math.min(a, o), l = this.slice(r, i), u = e.slice(t, n);
		for (let e = 0; e < c; ++e) if (l[e] !== u[e]) {
			a = l[e], o = u[e];
			break;
		}
		return a < o ? -1 : o < a ? 1 : 0;
	};
	function S(e, t, n, r, i) {
		if (e.length === 0) return -1;
		if (typeof n == "string" ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, V(n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
			if (i) return -1;
			n = e.length - 1;
		} else if (n < 0) if (i) n = 0;
		else return -1;
		if (typeof t == "string" && (t = s.from(t, r)), s.isBuffer(t)) return t.length === 0 ? -1 : C(e, t, n, r, i);
		if (typeof t == "number") return t &= 255, typeof Uint8Array.prototype.indexOf == "function" ? i ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : C(e, [t], n, r, i);
		throw TypeError("val must be string, number or Buffer");
	}
	function C(e, t, n, r, i) {
		let a = 1, o = e.length, s = t.length;
		if (r !== void 0 && (r = String(r).toLowerCase(), r === "ucs2" || r === "ucs-2" || r === "utf16le" || r === "utf-16le")) {
			if (e.length < 2 || t.length < 2) return -1;
			a = 2, o /= 2, s /= 2, n /= 2;
		}
		function c(e, t) {
			return a === 1 ? e[t] : e.readUInt16BE(t * a);
		}
		let l;
		if (i) {
			let r = -1;
			for (l = n; l < o; l++) if (c(e, l) === c(t, r === -1 ? 0 : l - r)) {
				if (r === -1 && (r = l), l - r + 1 === s) return r * a;
			} else r !== -1 && (l -= l - r), r = -1;
		} else for (n + s > o && (n = o - s), l = n; l >= 0; l--) {
			let n = !0;
			for (let r = 0; r < s; r++) if (c(e, l + r) !== c(t, r)) {
				n = !1;
				break;
			}
			if (n) return l;
		}
		return -1;
	}
	s.prototype.includes = function(e, t, n) {
		return this.indexOf(e, t, n) !== -1;
	}, s.prototype.indexOf = function(e, t, n) {
		return S(this, e, t, n, !0);
	}, s.prototype.lastIndexOf = function(e, t, n) {
		return S(this, e, t, n, !1);
	};
	function w(e, t, n, r) {
		n = Number(n) || 0;
		let i = e.length - n;
		r ? (r = Number(r), r > i && (r = i)) : r = i;
		let a = t.length;
		r > a / 2 && (r = a / 2);
		let o;
		for (o = 0; o < r; ++o) {
			let r = parseInt(t.substr(o * 2, 2), 16);
			if (V(r)) return o;
			e[n + o] = r;
		}
		return o;
	}
	function T(e, t, n, r) {
		return z(L(t, e.length - n), e, n, r);
	}
	function ee(e, t, n, r) {
		return z(ge(t), e, n, r);
	}
	function te(e, t, n, r) {
		return z(R(t), e, n, r);
	}
	function E(e, t, n, r) {
		return z(_e(t, e.length - n), e, n, r);
	}
	s.prototype.write = function(e, t, n, r) {
		if (t === void 0) r = "utf8", n = this.length, t = 0;
		else if (n === void 0 && typeof t == "string") r = t, n = this.length, t = 0;
		else if (isFinite(t)) t >>>= 0, isFinite(n) ? (n >>>= 0, r === void 0 && (r = "utf8")) : (r = n, n = void 0);
		else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
		let i = this.length - t;
		if ((n === void 0 || n > i) && (n = i), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw RangeError("Attempt to write outside buffer bounds");
		r ||= "utf8";
		let a = !1;
		for (;;) switch (r) {
			case "hex": return w(this, e, t, n);
			case "utf8":
			case "utf-8": return T(this, e, t, n);
			case "ascii":
			case "latin1":
			case "binary": return ee(this, e, t, n);
			case "base64": return te(this, e, t, n);
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return E(this, e, t, n);
			default:
				if (a) throw TypeError("Unknown encoding: " + r);
				r = ("" + r).toLowerCase(), a = !0;
		}
	}, s.prototype.toJSON = function() {
		return {
			type: "Buffer",
			data: Array.prototype.slice.call(this._arr || this, 0)
		};
	};
	function D(e, n, r) {
		return n === 0 && r === e.length ? t.fromByteArray(e) : t.fromByteArray(e.slice(n, r));
	}
	function ne(e, t, n) {
		n = Math.min(e.length, n);
		let r = [], i = t;
		for (; i < n;) {
			let t = e[i], a = null, o = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1;
			if (i + o <= n) {
				let n, r, s, c;
				switch (o) {
					case 1:
						t < 128 && (a = t);
						break;
					case 2:
						n = e[i + 1], (n & 192) == 128 && (c = (t & 31) << 6 | n & 63, c > 127 && (a = c));
						break;
					case 3:
						n = e[i + 1], r = e[i + 2], (n & 192) == 128 && (r & 192) == 128 && (c = (t & 15) << 12 | (n & 63) << 6 | r & 63, c > 2047 && (c < 55296 || c > 57343) && (a = c));
						break;
					case 4: n = e[i + 1], r = e[i + 2], s = e[i + 3], (n & 192) == 128 && (r & 192) == 128 && (s & 192) == 128 && (c = (t & 15) << 18 | (n & 63) << 12 | (r & 63) << 6 | s & 63, c > 65535 && c < 1114112 && (a = c));
				}
			}
			a === null ? (a = 65533, o = 1) : a > 65535 && (a -= 65536, r.push(a >>> 10 & 1023 | 55296), a = 56320 | a & 1023), r.push(a), i += o;
		}
		return ie(r);
	}
	var re = 4096;
	function ie(e) {
		let t = e.length;
		if (t <= re) return String.fromCharCode.apply(String, e);
		let n = "", r = 0;
		for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += re));
		return n;
	}
	function ae(e, t, n) {
		let r = "";
		n = Math.min(e.length, n);
		for (let i = t; i < n; ++i) r += String.fromCharCode(e[i] & 127);
		return r;
	}
	function O(e, t, n) {
		let r = "";
		n = Math.min(e.length, n);
		for (let i = t; i < n; ++i) r += String.fromCharCode(e[i]);
		return r;
	}
	function k(e, t, n) {
		let r = e.length;
		(!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
		let i = "";
		for (let r = t; r < n; ++r) i += ve[e[r]];
		return i;
	}
	function oe(e, t, n) {
		let r = e.slice(t, n), i = "";
		for (let e = 0; e < r.length - 1; e += 2) i += String.fromCharCode(r[e] + r[e + 1] * 256);
		return i;
	}
	s.prototype.slice = function(e, t) {
		let n = this.length;
		e = ~~e, t = t === void 0 ? n : ~~t, e < 0 ? (e += n, e < 0 && (e = 0)) : e > n && (e = n), t < 0 ? (t += n, t < 0 && (t = 0)) : t > n && (t = n), t < e && (t = e);
		let r = this.subarray(e, t);
		return Object.setPrototypeOf(r, s.prototype), r;
	};
	function A(e, t, n) {
		if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
		if (e + t > n) throw RangeError("Trying to access beyond buffer length");
	}
	s.prototype.readUintLE = s.prototype.readUIntLE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || A(e, t, this.length);
		let r = this[e], i = 1, a = 0;
		for (; ++a < t && (i *= 256);) r += this[e + a] * i;
		return r;
	}, s.prototype.readUintBE = s.prototype.readUIntBE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || A(e, t, this.length);
		let r = this[e + --t], i = 1;
		for (; t > 0 && (i *= 256);) r += this[e + --t] * i;
		return r;
	}, s.prototype.readUint8 = s.prototype.readUInt8 = function(e, t) {
		return e >>>= 0, t || A(e, 1, this.length), this[e];
	}, s.prototype.readUint16LE = s.prototype.readUInt16LE = function(e, t) {
		return e >>>= 0, t || A(e, 2, this.length), this[e] | this[e + 1] << 8;
	}, s.prototype.readUint16BE = s.prototype.readUInt16BE = function(e, t) {
		return e >>>= 0, t || A(e, 2, this.length), this[e] << 8 | this[e + 1];
	}, s.prototype.readUint32LE = s.prototype.readUInt32LE = function(e, t) {
		return e >>>= 0, t || A(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
	}, s.prototype.readUint32BE = s.prototype.readUInt32BE = function(e, t) {
		return e >>>= 0, t || A(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
	}, s.prototype.readBigUInt64LE = H(function(e) {
		e >>>= 0, F(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && I(e, this.length - 8);
		let r = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24, i = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + n * 2 ** 24;
		return BigInt(r) + (BigInt(i) << BigInt(32));
	}), s.prototype.readBigUInt64BE = H(function(e) {
		e >>>= 0, F(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && I(e, this.length - 8);
		let r = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e], i = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n;
		return (BigInt(r) << BigInt(32)) + BigInt(i);
	}), s.prototype.readIntLE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || A(e, t, this.length);
		let r = this[e], i = 1, a = 0;
		for (; ++a < t && (i *= 256);) r += this[e + a] * i;
		return i *= 128, r >= i && (r -= 2 ** (8 * t)), r;
	}, s.prototype.readIntBE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || A(e, t, this.length);
		let r = t, i = 1, a = this[e + --r];
		for (; r > 0 && (i *= 256);) a += this[e + --r] * i;
		return i *= 128, a >= i && (a -= 2 ** (8 * t)), a;
	}, s.prototype.readInt8 = function(e, t) {
		return e >>>= 0, t || A(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e];
	}, s.prototype.readInt16LE = function(e, t) {
		e >>>= 0, t || A(e, 2, this.length);
		let n = this[e] | this[e + 1] << 8;
		return n & 32768 ? n | 4294901760 : n;
	}, s.prototype.readInt16BE = function(e, t) {
		e >>>= 0, t || A(e, 2, this.length);
		let n = this[e + 1] | this[e] << 8;
		return n & 32768 ? n | 4294901760 : n;
	}, s.prototype.readInt32LE = function(e, t) {
		return e >>>= 0, t || A(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
	}, s.prototype.readInt32BE = function(e, t) {
		return e >>>= 0, t || A(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
	}, s.prototype.readBigInt64LE = H(function(e) {
		e >>>= 0, F(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && I(e, this.length - 8);
		let r = this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (n << 24);
		return (BigInt(r) << BigInt(32)) + BigInt(t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24);
	}), s.prototype.readBigInt64BE = H(function(e) {
		e >>>= 0, F(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && I(e, this.length - 8);
		let r = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
		return (BigInt(r) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n);
	}), s.prototype.readFloatLE = function(e, t) {
		return e >>>= 0, t || A(e, 4, this.length), n.read(this, e, !0, 23, 4);
	}, s.prototype.readFloatBE = function(e, t) {
		return e >>>= 0, t || A(e, 4, this.length), n.read(this, e, !1, 23, 4);
	}, s.prototype.readDoubleLE = function(e, t) {
		return e >>>= 0, t || A(e, 8, this.length), n.read(this, e, !0, 52, 8);
	}, s.prototype.readDoubleBE = function(e, t) {
		return e >>>= 0, t || A(e, 8, this.length), n.read(this, e, !1, 52, 8);
	};
	function j(e, t, n, r, i, a) {
		if (!s.isBuffer(e)) throw TypeError("\"buffer\" argument must be a Buffer instance");
		if (t > i || t < a) throw RangeError("\"value\" argument is out of bounds");
		if (n + r > e.length) throw RangeError("Index out of range");
	}
	s.prototype.writeUintLE = s.prototype.writeUIntLE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, n >>>= 0, !r) {
			let r = 2 ** (8 * n) - 1;
			j(this, e, t, n, r, 0);
		}
		let i = 1, a = 0;
		for (this[t] = e & 255; ++a < n && (i *= 256);) this[t + a] = e / i & 255;
		return t + n;
	}, s.prototype.writeUintBE = s.prototype.writeUIntBE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, n >>>= 0, !r) {
			let r = 2 ** (8 * n) - 1;
			j(this, e, t, n, r, 0);
		}
		let i = n - 1, a = 1;
		for (this[t + i] = e & 255; --i >= 0 && (a *= 256);) this[t + i] = e / a & 255;
		return t + n;
	}, s.prototype.writeUint8 = s.prototype.writeUInt8 = function(e, t, n) {
		return e = +e, t >>>= 0, n || j(this, e, t, 1, 255, 0), this[t] = e & 255, t + 1;
	}, s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || j(this, e, t, 2, 65535, 0), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
	}, s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || j(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
	}, s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || j(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = e & 255, t + 4;
	}, s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || j(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
	};
	function se(e, t, n, r, i) {
		P(t, r, i, e, n, 7);
		let a = Number(t & BigInt(4294967295));
		e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a;
		let o = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, n;
	}
	function ce(e, t, n, r, i) {
		P(t, r, i, e, n, 7);
		let a = Number(t & BigInt(4294967295));
		e[n + 7] = a, a >>= 8, e[n + 6] = a, a >>= 8, e[n + 5] = a, a >>= 8, e[n + 4] = a;
		let o = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[n + 3] = o, o >>= 8, e[n + 2] = o, o >>= 8, e[n + 1] = o, o >>= 8, e[n] = o, n + 8;
	}
	s.prototype.writeBigUInt64LE = H(function(e, t = 0) {
		return se(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
	}), s.prototype.writeBigUInt64BE = H(function(e, t = 0) {
		return ce(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
	}), s.prototype.writeIntLE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, !r) {
			let r = 2 ** (8 * n - 1);
			j(this, e, t, n, r - 1, -r);
		}
		let i = 0, a = 1, o = 0;
		for (this[t] = e & 255; ++i < n && (a *= 256);) e < 0 && o === 0 && this[t + i - 1] !== 0 && (o = 1), this[t + i] = (e / a >> 0) - o & 255;
		return t + n;
	}, s.prototype.writeIntBE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, !r) {
			let r = 2 ** (8 * n - 1);
			j(this, e, t, n, r - 1, -r);
		}
		let i = n - 1, a = 1, o = 0;
		for (this[t + i] = e & 255; --i >= 0 && (a *= 256);) e < 0 && o === 0 && this[t + i + 1] !== 0 && (o = 1), this[t + i] = (e / a >> 0) - o & 255;
		return t + n;
	}, s.prototype.writeInt8 = function(e, t, n) {
		return e = +e, t >>>= 0, n || j(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = e & 255, t + 1;
	}, s.prototype.writeInt16LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || j(this, e, t, 2, 32767, -32768), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
	}, s.prototype.writeInt16BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || j(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
	}, s.prototype.writeInt32LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || j(this, e, t, 4, 2147483647, -2147483648), this[t] = e & 255, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4;
	}, s.prototype.writeInt32BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || j(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
	}, s.prototype.writeBigInt64LE = H(function(e, t = 0) {
		return se(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
	}), s.prototype.writeBigInt64BE = H(function(e, t = 0) {
		return ce(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
	});
	function le(e, t, n, r, i, a) {
		if (n + r > e.length || n < 0) throw RangeError("Index out of range");
	}
	function ue(e, t, r, i, a) {
		return t = +t, r >>>= 0, a || le(e, t, r, 4, 34028234663852886e22, -34028234663852886e22), n.write(e, t, r, i, 23, 4), r + 4;
	}
	s.prototype.writeFloatLE = function(e, t, n) {
		return ue(this, e, t, !0, n);
	}, s.prototype.writeFloatBE = function(e, t, n) {
		return ue(this, e, t, !1, n);
	};
	function de(e, t, r, i, a) {
		return t = +t, r >>>= 0, a || le(e, t, r, 8, 17976931348623157e292, -17976931348623157e292), n.write(e, t, r, i, 52, 8), r + 8;
	}
	s.prototype.writeDoubleLE = function(e, t, n) {
		return de(this, e, t, !0, n);
	}, s.prototype.writeDoubleBE = function(e, t, n) {
		return de(this, e, t, !1, n);
	}, s.prototype.copy = function(e, t, n, r) {
		if (!s.isBuffer(e)) throw TypeError("argument should be a Buffer");
		if (n ||= 0, !r && r !== 0 && (r = this.length), t >= e.length && (t = e.length), t ||= 0, r > 0 && r < n && (r = n), r === n || e.length === 0 || this.length === 0) return 0;
		if (t < 0) throw RangeError("targetStart out of bounds");
		if (n < 0 || n >= this.length) throw RangeError("Index out of range");
		if (r < 0) throw RangeError("sourceEnd out of bounds");
		r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
		let i = r - n;
		return this === e && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(t, n, r) : Uint8Array.prototype.set.call(e, this.subarray(n, r), t), i;
	}, s.prototype.fill = function(e, t, n, r) {
		if (typeof e == "string") {
			if (typeof t == "string" ? (r = t, t = 0, n = this.length) : typeof n == "string" && (r = n, n = this.length), r !== void 0 && typeof r != "string") throw TypeError("encoding must be a string");
			if (typeof r == "string" && !s.isEncoding(r)) throw TypeError("Unknown encoding: " + r);
			if (e.length === 1) {
				let t = e.charCodeAt(0);
				(r === "utf8" && t < 128 || r === "latin1") && (e = t);
			}
		} else typeof e == "number" ? e &= 255 : typeof e == "boolean" && (e = Number(e));
		if (t < 0 || this.length < t || this.length < n) throw RangeError("Out of range index");
		if (n <= t) return this;
		t >>>= 0, n = n === void 0 ? this.length : n >>> 0, e ||= 0;
		let i;
		if (typeof e == "number") for (i = t; i < n; ++i) this[i] = e;
		else {
			let a = s.isBuffer(e) ? e : s.from(e, r), o = a.length;
			if (o === 0) throw TypeError("The value \"" + e + "\" is invalid for argument \"value\"");
			for (i = 0; i < n - t; ++i) this[i + t] = a[i % o];
		}
		return this;
	};
	var M = {};
	function N(e, t, n) {
		M[e] = class extends n {
			constructor() {
				super(), Object.defineProperty(this, "message", {
					value: t.apply(this, arguments),
					writable: !0,
					configurable: !0
				}), this.name = `${this.name} [${e}]`, this.stack, delete this.name;
			}
			get code() {
				return e;
			}
			set code(e) {
				Object.defineProperty(this, "code", {
					configurable: !0,
					enumerable: !0,
					value: e,
					writable: !0
				});
			}
			toString() {
				return `${this.name} [${e}]: ${this.message}`;
			}
		};
	}
	N("ERR_BUFFER_OUT_OF_BOUNDS", function(e) {
		return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
	}, RangeError), N("ERR_INVALID_ARG_TYPE", function(e, t) {
		return `The "${e}" argument must be of type number. Received type ${typeof t}`;
	}, TypeError), N("ERR_OUT_OF_RANGE", function(e, t, n) {
		let r = `The value of "${e}" is out of range.`, i = n;
		return Number.isInteger(n) && Math.abs(n) > 2 ** 32 ? i = fe(String(n)) : typeof n == "bigint" && (i = String(n), (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (i = fe(i)), i += "n"), r += ` It must be ${t}. Received ${i}`, r;
	}, RangeError);
	function fe(e) {
		let t = "", n = e.length, r = e[0] === "-" ? 1 : 0;
		for (; n >= r + 4; n -= 3) t = `_${e.slice(n - 3, n)}${t}`;
		return `${e.slice(0, n)}${t}`;
	}
	function pe(e, t, n) {
		F(t, "offset"), (e[t] === void 0 || e[t + n] === void 0) && I(t, e.length - (n + 1));
	}
	function P(e, t, n, r, i, a) {
		if (e > n || e < t) {
			let r = typeof t == "bigint" ? "n" : "", i;
			throw i = a > 3 ? t === 0 || t === BigInt(0) ? `>= 0${r} and < 2${r} ** ${(a + 1) * 8}${r}` : `>= -(2${r} ** ${(a + 1) * 8 - 1}${r}) and < 2 ** ${(a + 1) * 8 - 1}${r}` : `>= ${t}${r} and <= ${n}${r}`, new M.ERR_OUT_OF_RANGE("value", i, e);
		}
		pe(r, i, a);
	}
	function F(e, t) {
		if (typeof e != "number") throw new M.ERR_INVALID_ARG_TYPE(t, "number", e);
	}
	function I(e, t, n) {
		throw Math.floor(e) === e ? t < 0 ? new M.ERR_BUFFER_OUT_OF_BOUNDS() : new M.ERR_OUT_OF_RANGE(n || "offset", `>= ${n ? 1 : 0} and <= ${t}`, e) : (F(e, n), new M.ERR_OUT_OF_RANGE(n || "offset", "an integer", e));
	}
	var me = /[^+/0-9A-Za-z-_]/g;
	function he(e) {
		if (e = e.split("=")[0], e = e.trim().replace(me, ""), e.length < 2) return "";
		for (; e.length % 4 != 0;) e += "=";
		return e;
	}
	function L(e, t) {
		t ||= Infinity;
		let n, r = e.length, i = null, a = [];
		for (let o = 0; o < r; ++o) {
			if (n = e.charCodeAt(o), n > 55295 && n < 57344) {
				if (!i) {
					if (n > 56319) {
						(t -= 3) > -1 && a.push(239, 191, 189);
						continue;
					} else if (o + 1 === r) {
						(t -= 3) > -1 && a.push(239, 191, 189);
						continue;
					}
					i = n;
					continue;
				}
				if (n < 56320) {
					(t -= 3) > -1 && a.push(239, 191, 189), i = n;
					continue;
				}
				n = (i - 55296 << 10 | n - 56320) + 65536;
			} else i && (t -= 3) > -1 && a.push(239, 191, 189);
			if (i = null, n < 128) {
				if (--t < 0) break;
				a.push(n);
			} else if (n < 2048) {
				if ((t -= 2) < 0) break;
				a.push(n >> 6 | 192, n & 63 | 128);
			} else if (n < 65536) {
				if ((t -= 3) < 0) break;
				a.push(n >> 12 | 224, n >> 6 & 63 | 128, n & 63 | 128);
			} else if (n < 1114112) {
				if ((t -= 4) < 0) break;
				a.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, n & 63 | 128);
			} else throw Error("Invalid code point");
		}
		return a;
	}
	function ge(e) {
		let t = [];
		for (let n = 0; n < e.length; ++n) t.push(e.charCodeAt(n) & 255);
		return t;
	}
	function _e(e, t) {
		let n, r, i, a = [];
		for (let o = 0; o < e.length && !((t -= 2) < 0); ++o) n = e.charCodeAt(o), r = n >> 8, i = n % 256, a.push(i), a.push(r);
		return a;
	}
	function R(e) {
		return t.toByteArray(he(e));
	}
	function z(e, t, n, r) {
		let i;
		for (i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
		return i;
	}
	function B(e, t) {
		return e instanceof t || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === t.name;
	}
	function V(e) {
		return e !== e;
	}
	var ve = (function() {
		let e = "0123456789abcdef", t = Array(256);
		for (let n = 0; n < 16; ++n) {
			let r = n * 16;
			for (let i = 0; i < 16; ++i) t[r + i] = e[n] + e[i];
		}
		return t;
	})();
	function H(e) {
		return typeof BigInt > "u" ? ye : e;
	}
	function ye() {
		throw Error("BigInt not supported");
	}
})))(), Pe = async (e) => {
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
}, Fe = (e) => {
	e = atob(e);
	let t = new ArrayBuffer(e.length), n = new Uint8Array(t);
	for (let t = 0; t < e.length; t++) n[t] = e.charCodeAt(t);
	return n;
}, Ie = "data:image/#{encoding};base64,#{data}", Le = ({ data: e, encoding: t, alt: n }) => {
	let r = Ie, [i, a] = j(void 0);
	return W(t) && (t = "png"), W(n) && (n = "ERROR"), Pe(new Blob([Fe(e)])).then((e) => {
		r = r.replace("#{encoding}", t), r = r.replace("#{data}", Ne.Buffer.from(e).toString("base64")), a(r);
	}), /* @__PURE__ */ E(he, {
		src: i,
		fluid: !0,
		alt: n
	});
}, Re = (e) => {
	let t = "", n = Object.keys(e).map((t) => {
		let n = e[t];
		return W(n) ? "" : `${encodeURIComponent(t)}=${encodeURIComponent(n)}`;
	}).filter((e) => e !== "").join("&");
	if (n) {
		let e = t.indexOf("#");
		e !== -1 && (t = t.slice(0, e)), t += (t.indexOf("?") === -1 ? "?" : "&") + n;
	}
	return t;
}, ze = (e, { baseHeaders: t, handleErr: n, handleFinally: r, debug: i } = {}) => {
	let a = {
		"Content-Type": "application/json",
		...t
	}, o = (e) => {
		console.log(e);
	}, s = ({ endpoint: t, inputHeaders: s, fetchParams: c, args: l }) => {
		W(t) && (t = "");
		let u = e + t, d = {
			...a,
			...s
		};
		Object.keys(d).forEach((e) => {
			W(d[e]) && delete d[e];
		});
		let f = {
			method: "GET",
			headers: { ...d },
			...c
		};
		return W(l) || (f.method === "POST" && (f.body = JSON.stringify(l)), f.method === "GET" && (u += Re(l))), fetch(u, f).catch((e) => n(e)).finally(() => {
			i && o({
				endpoint: t,
				inputHeaders: s,
				fetchParams: c
			}), !W(r) && r({
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
ze("http://localhost:8080/", {
	handleErr: (e) => console.log(e),
	debug: !0
});
//#endregion
//#region src/utility/api.js
var Be = ({ endpoint: e, handleErr: t }) => {
	W(t) && (t = (e) => console.log(e));
	let n = ze(e, { handleErr: t });
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
}, Ve = (e, t) => () => e.get(t), He = ({ jsxKey: e, endpoint: t, inputProps: n }) => {
	let [r, i] = j([/* @__PURE__ */ E("option", {
		value: n.defaultValue,
		children: n.defaultValue
	}, e + "-" + n.defaultValue)]), a = Be({ endpoint: t });
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
		children: [...r || /* @__PURE__ */ E(te, {})]
	}, e);
}, Ue = ({ buttons: e, endpoint: t, title: n, title_topology_params: r, button_stack_params: i, ...a }) => {
	let o = e?.map((e) => e);
	return /* @__PURE__ */ D(_, {
		direction: "column",
		gap: 2,
		sx: { width: "100%" },
		children: [/* @__PURE__ */ D(_, {
			justifyContent: "space-between",
			alignItems: "center",
			direction: "row",
			children: [/* @__PURE__ */ E(w, {
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
		}), /* @__PURE__ */ E(Ht, {
			...a,
			endpoint: t
		})]
	});
}, We = re(null), Y = () => ae(We), Ge = (e) => {
	let t = Y();
	return (n) => {
		n ? t?.register(e, n) : t?.unregister(e);
	};
}, X = (e, t = !0) => {
	let n = Y();
	return (r) => {
		t && r ? n?.register(e, r) : n?.unregister(e);
	};
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
}, qe = ({ api: e, endpoint: t, refKey: n, register_component: r, ...i }) => {
	let a = Y();
	return O(() => {
		(async () => {
			let e = a?.get(n);
			if (!e) return;
			let t = { current: { ...e } };
			kt({ current: e }, { id: 17 }), await $(t);
		})();
	}, [a]), /* @__PURE__ */ E(Ue, {
		api: e,
		endpoint: "get_paginated",
		buttons: [],
		title: "",
		refKey: n,
		register_component: r,
		...i
	});
}, Je = ({ jsxKey: e, key: t, inputProps: n }) => {
	let r;
	return t.charAt(t.length - 1) === "D" && t.charAt(t.length - 2) === "I" || t.charAt(t.length - 1) === "S" && t.charAt(t.length - 2) === "D" ? (t.charAt(t.length - 1) === "D" && t.charAt(t.length - 2) === "I" && (r = t.slice(5, t.length - 2)), t.charAt(t.length - 1) === "S" && t.charAt(t.length - 2) === "D" && (r = t.slice(5, t.length - 3), n = {
		...n,
		multiple: !0
	}), /* @__PURE__ */ E(He, {
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
	if (!W(a)) return a;
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
		if (i.defaultValue.Subtype === 20) return /* @__PURE__ */ E(qe, {
			api: e.current?.api,
			refKey: "csv_grid",
			register_component: !0
		}, t);
		if (i.defaultValue.Subtype === 19) return /* @__PURE__ */ E(en, { data: J(Z(e), n.slice(0, n.lastIndexOf(".")))?.value.Data }, t);
		if (i.defaultValue.Subtype === 17) return /* @__PURE__ */ E(Le, { data: J(Z(e), n.slice(0, n.lastIndexOf(".")))?.value.Data }, t);
		if (i.defaultValue.Subtype === 16 || i.defaultValue.Subtype === 0) {
			let r = J(Z(e), n.slice(0, n.lastIndexOf(".")));
			return i.name = n.slice(0, n.lastIndexOf(".")) + ".Data", /* @__PURE__ */ E(Ae, {
				fileData: JSON.stringify(r?.value.Data, null, 2),
				inputProps: i,
				subtype: i.defaultValue.Subtype
			}, t);
		}
		if (!W(i.defaultValue.Subtype) || !W(i.defaultValue.Data)) return null;
		if (Array.isArray(i.defaultValue)) return Object.keys(i.defaultValue).map((e) => /* @__PURE__ */ E(f, {
			type: "text",
			...i,
			defaultValue: i.defaultValue[e]
		}, t));
		if (W(i.defaultValue)) return;
		let r = Object.keys(i.defaultValue)[0];
		return typeof i.defaultValue[r] == "object" ? null : /* @__PURE__ */ E(Oe, {
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
}, $e = (e, t) => {
	let n = e.current;
	W(n) || (n.container = t), e.current = n;
}, Z = (e) => e.current.container, et = (e, n) => {
	let r = e.current, i = r.labels[n], a = r.element_component[n];
	return r.useLabels[n] ? /* @__PURE__ */ D(_, {
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
}, tt = (e) => {
	let t = {};
	return Object.keys(e.current.nameIndex).map((n, r) => {
		t[n] = et(e, r);
	}), /* @__PURE__ */ E(_, {
		direction: "column",
		gap: 0,
		children: Object.keys(t).map((e) => t[e])
	});
}, nt = (e) => {
	let t = e.current;
	return { onChange: (n) => {
		let r = n.target.value, i = n.target.selectedOptions;
		if (!W(i)) {
			let e = [].slice.call(i);
			r = e.map((e) => e.value), e.length === 1 && (r = r[0]);
		}
		n.target.type === "datetime-local" && (r = new Date(Date.parse(r)).toISOString());
		let a = n.target.name, o = t.nameIndex[a];
		W(o) && (t.nameIndex[a] = t.index, o = t.index, e.current = t), t.elements[o] = r;
		let s = a.split("."), c = s.slice(0, s.length - 1).join("."), l = s.slice(s.length - 1);
		W(J(Z(e), c)) && (c = s.slice(0, s.length - 2).join(".")), n.target.type === "checkbox" && (r = n.currentTarget.checked), e.current = t, $e(e, Ee(Z(e), c, l, r)), e.current = t;
	} };
}, rt = (e, t) => {
	let n = e.current, r = n.nameIndex[t];
	return n.elements[r];
}, it = (e, t, n) => {
	let r = typeof n, i = e.current, a = t + i.index, o = {
		name: t,
		defaultValue: rt(e, t),
		onChange: nt(e).onChange,
		sx: { width: "100%" }
	};
	return i.elementSelector({
		key: t,
		formRef: e,
		jsxKey: a,
		currentType: r,
		inputProps: o
	});
}, Q = (e, t, n) => {
	let r = e.current, i = G(t.replace(/root\./, ""), "_"), a = i.split(".");
	if (!a.some((e) => e.toLowerCase() === "data")) {
		if (W(r.nameIndex[t])) {
			r.nameIndex[t] = r.index, r.elements[r.index] = n;
			let o = it(e, t, n);
			if (!W(o)) {
				let e = a[a.length - 1], n = e.toLowerCase() === "subtype", s = /^\d+$/.test(e);
				r.useLabels[r.index] = n || !s;
				let c = i;
				n && a.length > 1 && (c = a[a.length - 2]), r.labels[r.index] = /* @__PURE__ */ E(m, {
					column: t,
					children: c
				}, "Label" + t + r.index), r.element_component[r.index] = o, r.index++;
			}
		}
		e.current = r;
	}
}, at = (e, t) => e.current.nameIndex[t], ot = (e, t) => {
	let n = e.current;
	delete n.labels[at(e, t)], e.current = n;
}, st = ({ formRef: e, container: t }) => {
	we(t, (t) => {
		let n = t.path, r = t.value;
		if (Array.isArray(r)) {
			let t = [];
			Object.keys(r).forEach((e) => {
				W(r[e]) || Array.isArray(r[e]) || t.push(r[e]);
			}), t.length > 0 && Q(e, n, t);
			return;
		}
		Object.keys(r).forEach((t) => {
			W(r[t]) || (typeof r[t] == "object" && Object.keys(r[t]).forEach((i) => {
				let a = {};
				a[i] = r[t][i], Q(e, n + "." + t + "." + i, a);
			}), U(r[t]) && Q(e, n + "." + t, r[t]));
		});
	});
}, ct = ({ title: e, getSchema: n, handleSave: r, elementSelector: i, footerButtons: a, refKey: o, register_component: s = !1, context: c = null }) => {
	let l = X(o, s), u = A(null), [f, p] = j(!1), m = () => {
		p(!1);
	};
	u.current ||= Xe(i, {
		setShow: (e) => {
			p(e);
		},
		...c
	}), k(() => (l(u.current), () => l(null)), [l]);
	let [h, g] = j(void 0), [v, x] = j(0);
	return a ||= [], /* @__PURE__ */ D(_, {
		direction: "row",
		gap: 3,
		children: [/* @__PURE__ */ E(d, {
			onClick: async () => {
				try {
					$e(u, De(null, [], ".", await n())), Qe(u, m), st({
						formRef: u,
						container: Z(u)
					}), g(tt(u)), p(!0);
				} catch (e) {
					console.error("Failed to load schema:", e);
				}
			},
			children: /* @__PURE__ */ E(L, { sx: { color: "red" } })
		}), /* @__PURE__ */ E(be, {
			title: e,
			body: /* @__PURE__ */ D(t, {
				sx: { width: "100%" },
				children: [
					u.current.tabs && /* @__PURE__ */ E(t, {
						sx: {
							borderBottom: 1,
							borderColor: "divider"
						},
						children: /* @__PURE__ */ D(b, {
							value: v,
							onChange: (e, t) => x(t),
							"aria-label": "custom tabs",
							children: [/* @__PURE__ */ E(y, { label: "File Upload" }), /* @__PURE__ */ E(y, { label: "File Viewer" })]
						})
					}),
					v === 0 && /* @__PURE__ */ E(t, {
						sx: {
							borderBottom: 1,
							borderColor: "divider",
							width: "100%"
						},
						children: h
					}),
					v === 1 && /* @__PURE__ */ E(t, {
						sx: { p: 3 },
						children: /* @__PURE__ */ E("pre", { children: JSON.stringify(Z(u)?.value, null, 2) })
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
}, lt = ({ title: e, show: t, onCancel: r, onConfirm: i }) => /* @__PURE__ */ E(be, {
	title: e || "Are you sure?",
	show: t,
	footer: /* @__PURE__ */ D(_, {
		direction: "column",
		gap: 3,
		children: [/* @__PURE__ */ E(n, {
			onClick: () => {
				W(r) || r();
			},
			children: "Cancel"
		}), /* @__PURE__ */ E(n, {
			onClick: () => {
				W(i) || i();
			},
			children: "Confirm"
		})]
	})
}), ut = ({ refreshGrid: e, api: t, ...n }) => /* @__PURE__ */ E(ct, {
	title: "Create",
	getSchema: t.schema,
	handleSave: (n) => {
		t.create(n).then(() => e());
	},
	...n
}), dt = ({ refreshGrid: e, api: t, id: n, title: r, footerButtons: i, ...a }) => /* @__PURE__ */ E(ct, {
	title: r,
	button_title: "Update",
	getSchema: Ve(t, n),
	handleSave: (r) => {
		t.update(r, n).then(() => e());
	},
	footerButtons: i,
	register_component: !0,
	refKey: "update_modal",
	...a
}), ft = ({ refreshGrid: e, api: t, handleSelectedIds: r }) => {
	let [i, a] = j(!1);
	return /* @__PURE__ */ D(_, {
		direction: "horizontal",
		gap: 2,
		children: [/* @__PURE__ */ E(n, {
			onClick: () => {
				a(!i);
			},
			children: "Delete"
		}), /* @__PURE__ */ E(lt, {
			onConfirm: () => {
				t.deleteIds(r()).then(e()), a(!1);
			},
			show: i
		})]
	});
}, pt = ({ refreshGrid: e, api: t, id: r }) => {
	let [i, a] = j(!1);
	return /* @__PURE__ */ D(_, {
		direction: "row",
		gap: 3,
		children: [/* @__PURE__ */ E(n, {
			onClick: () => {
				a(!i);
			},
			children: "Delete"
		}), /* @__PURE__ */ E(lt, {
			onConfirm: () => {
				t.deleteId(r).then(e());
			},
			show: i
		})]
	});
}, mt = ({ handleRefreshGrid: e, api: t, id: n, params: r, context: i }) => /* @__PURE__ */ E(_, {
	direction: "row",
	gap: 1,
	children: /* @__PURE__ */ E(dt, {
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
	Te(t, (e) => {
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
		if (r !== void 0 && n.rows[r].push(G(e, "_")), i !== void 0) {
			let e = Array.isArray(t) ? t.join(", ") : t;
			n.rows[i].push(e);
		}
		n.row_count++;
	}), e.current = n;
}, St = (e, t) => {
	let n = e.current;
	n && (n.rows = [], n.row_count = 0, n.headers.forEach(() => {
		n.rows.push([]);
	}), Te(t, (e) => {
		if (U(e.value)) {
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
		}), r.id = r.id = r.id ?? n, r;
	});
}, Tt = (e) => {
	let t = e.current;
	return !t || !t.headers ? [] : t.headers;
}, Et = (e) => {
	let t = e.current, n = Object.keys(t.headers_ri).map((e) => ({
		field: e,
		sortable: !0,
		filterable: !0,
		headerName: G(e.split(".").pop(), "_"),
		flex: 2,
		type: "string",
		hideable: !0
	}));
	if (t.row_details) {
		let t = {
			field: "edit",
			headerName: "Edit",
			sortable: !1,
			filterable: !1,
			flex: 1,
			type: "actions",
			renderCell: Bt(e)
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
}, Pt = (e) => e.current.fetch_params, Ft = (e, t) => ({ getRows: async (n) => {
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
		Array.isArray(t) && t.length === 0 || W(t) || (s[e] = t);
	}), W(n.sortModel) || Array.isArray(n.sortModel) && n.sortModel.length === 0 && delete s.sortModel, W(n.filterModel) || Array.isArray(n.filterModel.items) && n.filterModel.items.length === 0 && delete s.filterModel;
	let c = await r.api?.at("/" + r.endpoint, {
		fetchParams: {
			method: "GET",
			...Pt(e)
		},
		args: s
	}), l = De(null, [], ".", c.results);
	return yt(e, l), St(e, l), r.row_count = c.pagination?.total || 0, e.current = r, t(), {
		rows: wt(e),
		rowCount: c.pagination?.total || 0
	};
} }), It = (e, t) => {
	let n = e.current;
	n && (n.args.search = t, e.current = n);
}, Lt = (e) => e.current?.datasource, $ = async (e) => {
	let t = e.current;
	if (!t) return;
	let n = t.gridRef.current;
	n.dataSource.cache.clear(), await n.dataSource.fetchRows(), t.refresh();
}, Rt = (e) => (t) => {
	let n = e.current;
	if (!n || n.rows.length === 0) return;
	let r = t.ids, i = n.rows[0].length, a = Array.from({ length: i }, (e, t) => t).filter((e) => {
		let t = n.rows[0][e];
		return r.has(t);
	});
	n.selected_data = n.rows.map((e) => a.map((t) => e[t])), n.selected_ids = t, e.current = n;
}, zt = (e, t) => {
	let n = e.current;
	n && (n.cellRenderer = t, e.current = n);
}, Bt = (e) => {
	let t = e.current;
	if (t) return t.cellRenderer ? t.cellRenderer(e) : Vt(e);
}, Vt = (e) => {
	let r = Y();
	return (i) => {
		let a = e.current;
		if (!a) return;
		let o = (e = !1) => {
			let t = r?.get("update_modal")?.context;
			if (!t) return;
			let n = t.setShow;
			n(e);
		}, s = /* @__PURE__ */ D(_, {
			direction: "column",
			justifyContent: "space-between",
			spacing: 2,
			sx: { width: "100%" },
			children: [/* @__PURE__ */ D(_, {
				gap: 3,
				direction: "row",
				children: [
					/* @__PURE__ */ E(t, {
						sx: { ...a.modal_header_sx },
						children: "Update"
					}),
					/* @__PURE__ */ E(t, { sx: { flexGrow: 1 } }, "spacer"),
					/* @__PURE__ */ E(d, {
						onClick: () => o(!1),
						sx: {
							backgroundColor: "black",
							color: "white"
						},
						children: /* @__PURE__ */ E(ge, {})
					})
				]
			}), /* @__PURE__ */ E(_, {
				gap: 3,
				direction: "row",
				children: Object.entries(a.modal_header_rows || []).map((e) => e)
			})]
		});
		return /* @__PURE__ */ E(mt, {
			params: {
				footerButtons: [
					/* @__PURE__ */ E(n, {
						onClick: () => o(!1),
						children: "Close"
					}),
					/* @__PURE__ */ E(t, { sx: { flexGrow: 1 } }, "spacer"),
					/* @__PURE__ */ E(n, { children: "Update" })
				],
				title: s,
				...i.row
			},
			handleRefreshGrid: async () => await $(e),
			api: a.api,
			id: i.id
		});
	};
}, Ht = ({ api: e, endpoint: t, row_details: n, refKey: r, cellRenderer: i, register_component: a = !1, toolbar: o = !1, checkbox_select: s = !1, datagrid_sx: c = void 0, grid_options: l = void 0, context: u = void 0 }) => {
	let d = X(r, a), f = A(null), [, p] = j(!1), [m, h] = j({
		page: 0,
		pageSize: 25
	}), [g, _] = j(0), [v, y] = j({ id: !1 }), b = le(), x = () => {
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
		datasource: t ? Ft(f, x) : void 0,
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
	}, k(() => (d(f.current), () => d(null)), [d]), /* @__PURE__ */ E(se, {
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
		dataSource: Lt(f),
		pageSizeOptions: [
			25,
			50,
			100
		],
		paginationModel: m,
		onPaginationModelChange: (e) => {
			h(e);
		},
		onRowSelectionModelChange: (e) => Rt(f)(e),
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
			console.error("DataGrid Error Type:", e.name), console.error("DataGrid Error Message:", e.message), e.cause && (console.group("Original Error Cause"), console.error("Message:", e.cause.message), console.error("Stack:", e.cause.stack), console.groupEnd()), e instanceof ce ? console.warn("Fetch failed. Check your API mock or network.") : console.warn("Row update failed.");
		},
		...l
	});
}, Ut = ({ loading: e, value: n }) => /* @__PURE__ */ E(t, {
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
			children: /* @__PURE__ */ E(w, {
				variant: "caption",
				component: "div",
				sx: { color: "text.secondary" },
				children: `${Math.round(n)}%`
			})
		})]
	})
}), Wt = ({ ...e }) => /* @__PURE__ */ E(d, {
	...e,
	children: /* @__PURE__ */ E(z, {})
}), Gt = (e, t) => {
	let n = e.current;
	n && (n.setProgressValue(t), n.progressValue = t, e.current = n);
}, Kt = (e) => !e || !e.current ? 1 : e.current.progressValue, qt = (e, t) => {
	let n = e.current;
	n && n.handleToggle(t);
}, Jt = ({ refKey: e, register_component: t, hidden: n, onDropSuccess: r, onSend: i, textFieldSx: a, textFieldProps: o, sendButtonProps: s }) => {
	let [c, l] = j(""), [u, f] = j(!1), [m, h] = j(0), g = X(e, t), _ = A({
		handleToggle: (e) => {
			f(e);
		},
		progressValue: 0,
		setProgressValue: h
	}), { getRootProps: v, getInputProps: y, open: b, isDragActive: S } = _e({
		onDrop: ie((e) => {
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
	let { ref: C, ...w } = v(), T = u ? /* @__PURE__ */ E(Ut, {
		loading: !0,
		value: m
	}) : /* @__PURE__ */ E(Wt, {
		onClick: i,
		sx: { color: m === 100 ? "red" : "inherit" },
		...s
	});
	return /* @__PURE__ */ E(x, {
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
					children: [/* @__PURE__ */ E("input", { ...y() }), /* @__PURE__ */ E(d, {
						onClick: b,
						children: /* @__PURE__ */ E(R, {})
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
}, Yt = ({ children: e }) => /* @__PURE__ */ D(t, {
	sx: { width: "100%" },
	children: [
		/* @__PURE__ */ E(V, {}),
		e,
		/* @__PURE__ */ E(ve, {})
	]
}), Xt = ({ children: e }) => {
	let t = A({}), n = oe(() => ({
		register: (e, n) => {
			t.current[e] = n;
		},
		unregister: (e) => {
			delete t.current[e];
		},
		get: (e) => t.current[e] || null,
		registry: () => t.current
	}), []);
	return /* @__PURE__ */ E(We.Provider, {
		value: n,
		children: e
	});
}, Zt = T({
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
}), Qt = ({ children: e, theme: t }) => {
	let n = Zt;
	return t || (n = Zt), /* @__PURE__ */ E(Xt, { children: /* @__PURE__ */ D(S, {
		theme: n,
		children: [/* @__PURE__ */ E(a, {}), /* @__PURE__ */ E(Yt, { children: /* @__PURE__ */ E(_, {
			direction: "column",
			gap: 2,
			alignItems: "center",
			sx: { width: "100%" },
			children: e
		}) })]
	}) });
}, $t = () => {
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
}, en = ({ data: e, ...t }) => {
	let n = Y(), [r, i] = j({
		rows: [],
		columns: []
	});
	return O(() => {
		(async () => {
			let t = n?.get("key_value_grid");
			if (!t) return;
			let r = { current: { ...t } };
			bt(r), xt(r, e), i({
				rows: [...Ct(r)],
				columns: [...Tt(r)]
			}), await $(r);
		})();
	}, [e, n]), /* @__PURE__ */ E(Ht, {
		register_component: !0,
		datagrid_sx: $t(),
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
export { Q as AddElement, Be as Api, H as ApiButton, ye as CenteredContainer, be as CenteredModal, Ze as Close, ut as Create, Ke as CsvDatagridSx, qe as CsvGrid, Ft as DataSourceWrapper, $t as DatagridSx, pt as Delete, ot as DeleteLabel, ft as DeleteMany, mt as EditCellRenderer, en as FieldValueGrid, _t as GetApi, Bt as GetCellRenderer, Z as GetContainer, Lt as GetDatasource, at as GetElementIndex, it as GetElementTypes, rt as GetElementValue, tt as GetElements, gt as GetEndpoint, Pt as GetFetchParams, Et as GetHeaders, Ct as GetKeyValueRows, Dt as GetPaginationModel, Kt as GetProgressValue, Tt as GetRawHeaders, wt as GetRows, et as GetSet, Ue as GridWithButtons, Qt as HFCenteredLayout, Ve as HandleGet, Yt as HeaderFooterLayout, Xe as InitialTypeFormBuilderRefState, W as IsNullOrUndefined, U as IsPrimitive, Vt as ModalCellRendererWrapper, Ut as ProgressAdornment, We as RefIndexContext, Xt as RefProvider, $ as Refresh, Je as SelectAssociation, Wt as SendIconButton, vt as SetApi, Ot as SetArgs, zt as SetCellRenderer, $e as SetContainer, ht as SetEndpoint, Nt as SetFetchParams, jt as SetFilterModel, Qe as SetHandleClose, yt as SetHeadersFromJson, bt as SetKeyValueHeaders, xt as SetKeyValueRows, qt as SetLoading, kt as SetOrAddArgs, Mt as SetPaginationModel, Gt as SetProgressValue, St as SetRowsFromJson, It as SetSearch, Rt as SetSelectedRows, At as SetSortModel, G as TitleCase, st as TypeFormBuilder, V as UIAppBar, ve as UIBottomNav, Jt as UIInput, Ht as UITable, dt as Update, nt as UpdateElementValues, X as useConditionalRef, Ge as useManagedRef, Y as useRefIndex };
