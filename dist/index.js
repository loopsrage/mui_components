import e, { createContext as t, useCallback as n, useContext as r, useEffect as i, useLayoutEffect as a, useMemo as o, useRef as s, useState as c } from "react";
import { AppBar as l, Box as u, Button as d, CircularProgress as f, Container as p, CssBaseline as m, Dialog as h, DialogActions as g, DialogContent as _, DialogTitle as v, IconButton as y, Input as b, InputAdornment as x, InputLabel as S, Paper as C, Select as w, Stack as T, Switch as E, Tab as D, Tabs as ee, TextField as O, ThemeProvider as k, Toolbar as A, Typography as te, createTheme as j } from "@mui/material";
import { Fragment as ne, jsx as M, jsxs as N } from "react/jsx-runtime";
import { DataGrid as P, GridGetRowsError as F, useGridApiRef as I } from "@mui/x-data-grid";
import { LexicalComposer as L } from "@lexical/react/LexicalComposer";
import { RichTextPlugin as R } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable as z } from "@lexical/react/LexicalContentEditable";
import { LexicalErrorBoundary as B } from "@lexical/react/LexicalErrorBoundary";
import { useLexicalComposerContext as V } from "@lexical/react/LexicalComposerContext";
import { $generateHtmlFromNodes as H, $generateNodesFromDOM as U } from "@lexical/html";
import { $getRoot as re, ParagraphNode as W, TextNode as G } from "lexical";
import "@mui/icons-material/Description";
import K from "@mui/icons-material/Close";
import { useDropzone as ie } from "react-dropzone";
import ae from "@mui/icons-material/CloudUpload";
import q from "@mui/icons-material/Send";
import "@mui/icons-material/BugReport";
import "@mui/icons-material/Home";
import "@mui/icons-material/Settings";
//#region \0rolldown/runtime.js
var oe = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), se = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), J = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), Y = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), X = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), Z = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), ce = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), Q = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), le = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), ue = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), de = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), fe = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), pe = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), me = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), he = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), ge = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), _e = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), ve = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), ye = t(null), be = () => r(ye), xe = (e, t = !0) => {
	let n = be();
	return (r) => {
		t && r ? n?.register(e, r) : n?.unregister(e);
	};
}, Se = ({ title: e, body: t, show: n, footer: r, title_sx: i, footer_sx: a, content_sx: o, paper_sx: s }) => /* @__PURE__ */ N(h, {
	open: n,
	maxWidth: "lg",
	fullWidth: !0,
	scroll: "paper",
	slotProps: { paper: { sx: {
		maxHeight: "70vh",
		display: "flex",
		flexDirection: "column",
		...s
	} } },
	"aria-labelledby": "centered-modal-title",
	children: [
		/* @__PURE__ */ M(v, {
			id: "centered-modal-title",
			sx: { ...i },
			children: e
		}),
		/* @__PURE__ */ M(_, {
			dividers: !0,
			sx: { ...o },
			children: t
		}),
		/* @__PURE__ */ M(g, {
			sx: a,
			children: r
		})
	]
}), Ce = (e) => {
	if (e === null) return !0;
	let t = typeof e;
	return t === "string" || t === "number" || t === "boolean" || t === "undefined" || t === "symbol" || t === "bigint" || t === "int";
}, we = (e) => e == null, Te = (e, t) => we(e) ? "" : e.split(t).map((e) => e.charAt(0).toUpperCase() + e.slice(1)).join(" "), Ee = "Values", De = "Containers", Oe = (e, t, n, r) => {
	let i = r || {
		[Ee]: /* @__PURE__ */ new Map(),
		[De]: /* @__PURE__ */ new Map()
	}, a = e ? t : "root", o = {
		parent: e,
		path: a,
		value: n,
		children: [],
		root: e ? e.root : null,
		containerIndex: i
	};
	return e || (o.root = o), i[Ee].set(a, n), i[De].set(a, o), Object.freeze(o);
}, ke = (e, t, n) => {
	let r = Oe(e, t, n, e.containerIndex);
	return {
		...e,
		children: [...e.children, r]
	};
}, Ae = (e, t) => e.containerIndex[De].get(t), je = (e, t) => {
	for (let [n, r] of e.containerIndex[Ee].entries()) t(n, r);
}, Me = (e, t) => {
	for (let [, n] of e.containerIndex[De].entries()) t(n);
}, Ne = (e, t, n = 2) => {
	je(e, (e, r) => {
		let i = Object.keys(r);
		for (let a = 0; a < i.length; a++) {
			let o = e.split(".");
			o.push(i[a]);
			let s = o.slice(2).join("."), c = r[i[a]];
			o.length > n && Ce(c) && t({
				i: a,
				value: c,
				path: s,
				fullpath: o.join("."),
				key: e,
				containerValue: r
			});
		}
	});
}, Pe = (e, t, n, r) => {
	if (!e || !t) return e;
	let i = e.containerIndex[De].get(t);
	if (!i) return console.warn(`Container at path "${t}" not found.`), e;
	let a = {};
	a[n] = r;
	let o = {
		...i.value,
		...a
	}, s = Oe(i.parent, i.path, o, e.containerIndex);
	e.containerIndex[De].set(t, s), e.containerIndex[Ee].set(t, o);
	let c = s;
	for (; c.parent;) {
		let t = c.parent, n = t.children.map((e) => e.path === c.path ? c : e), r = c.path.split("."), i = r.slice(r.length - 1), a = { ...e.containerIndex[Ee].get(t.path) };
		a[i] = o;
		let s = Object.freeze({
			...t,
			children: n,
			value: a
		});
		e.containerIndex[De].set(s.path, s), c = s;
	}
	return e.containerIndex[De].get("root");
}, Fe = (e = null, t = [], n = "_", ...r) => {
	e === null && (e = Oe(null, "root", r.length === 0 ? {} : r[0]), t = ["root"]);
	let i = (e, t) => {
		let r = e.value;
		return typeof r == "object" && r && (Array.isArray(r) ? r.forEach((r, a) => {
			if (typeof r == "object" && r) {
				let o = [...t, String(a)];
				i(ke(e, o.join(n), r).children.at(-1), o);
			}
		}) : Object.entries(r).forEach(([r, a]) => {
			if (typeof a == "object" && a) {
				let o = [...t, r];
				i(ke(e, o.join(n), a).children.at(-1), o);
			}
		})), e;
	};
	return i(e, t);
}, Ie = ({ inputKey: t, inputProps: n }) => {
	let r = Object.keys(n.defaultValue)[0], a = n.defaultValue[r], [o, s] = c(/* @__PURE__ */ M(b, {
		type: "text",
		onChange: n.onChange,
		defaultValue: a
	})), l = (t, r) => {
		s(e.cloneElement(o, {
			...n,
			defaultValue: a,
			name: t + "." + r
		}));
	}, [u, d] = c(/* @__PURE__ */ M(b, {
		type: "text",
		...n,
		defaultValue: r,
		onChange: (e) => l(t, e.target.value)
	}));
	return i(() => {
		l(t, r);
	}, []), /* @__PURE__ */ N(T, {
		direction: "horizontal",
		gap: 2,
		children: [u, o]
	});
}, Le = ({ fileData: e, onChange: t, name: n }) => {
	let [r] = V(), a = s("");
	return i(() => {
		e && (async () => {
			if (!e) return;
			let t = String(e).replace(/^"|"$/g, "").replace(/\\n/g, "<br/>");
			t !== a.current && (a.current = t, r.update(() => {
				let e = re();
				e.clear();
				let n = U(r, new DOMParser().parseFromString(`<div>${t}</div>`, "text/html"));
				n.length > 0 && e.append(...n);
			}));
		})();
	}, [e, r]), i(() => r.registerUpdateListener(({ editorState: e }) => {
		e.read(() => {
			let e = H(r);
			a.current = e, t({ target: {
				value: e,
				name: n
			} });
		});
	}), [
		r,
		t,
		n
	]), null;
}, Re = ({ fileData: e, subtype: t, inputProps: n }) => /* @__PURE__ */ M(u, {
	sx: { width: "100%" },
	children: /* @__PURE__ */ M(C, {
		variant: "outlined",
		sx: {
			p: 2,
			minHeight: "200px",
			position: "relative"
		},
		children: /* @__PURE__ */ N(L, {
			initialConfig: {
				namespace: "MyEditor",
				nodes: [W, G],
				theme: {},
				onError: (e) => console.error("Lexical Error:", e),
				editable: t !== 0
			},
			children: [/* @__PURE__ */ M(R, {
				contentEditable: /* @__PURE__ */ M(z, { style: {
					outline: "none",
					minHeight: "170px"
				} }),
				placeholder: /* @__PURE__ */ M("div", {
					style: {
						position: "absolute",
						top: 20,
						left: 20,
						color: "#aaa"
					},
					children: "Enter text..."
				}),
				ErrorBoundary: B
			}), /* @__PURE__ */ M(Le, {
				fileData: e,
				onChange: n.onChange,
				name: n.name
			})]
		})
	})
}), ze = /* @__PURE__ */ ve(((e) => {
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
})), Be = /* @__PURE__ */ ve(((e) => {
	e.read = function(e, t, n, r, i) {
		var a, o, s = i * 8 - r - 1, c = (1 << s) - 1, l = c >> 1, u = -7, d = n ? i - 1 : 0, f = n ? -1 : 1, p = e[t + d];
		for (d += f, a = p & (1 << -u) - 1, p >>= -u, u += s; u > 0; a = a * 256 + e[t + d], d += f, u -= 8);
		for (o = a & (1 << -u) - 1, a >>= -u, u += r; u > 0; o = o * 256 + e[t + d], d += f, u -= 8);
		if (a === 0) a = 1 - l;
		else if (a === c) return o ? NaN : (p ? -1 : 1) * Infinity;
		else o += 2 ** r, a -= l;
		return (p ? -1 : 1) * o * 2 ** (a - r);
	}, e.write = function(e, t, n, r, i, a) {
		var o, s, c, l = a * 8 - i - 1, u = (1 << l) - 1, d = u >> 1, f = i === 23 ? 2 ** -24 - 2 ** -77 : 0, p = r ? 0 : a - 1, m = r ? 1 : -1, h = +(t < 0 || t === 0 && 1 / t < 0);
		for (t = Math.abs(t), isNaN(t) || t === Infinity ? (s = +!!isNaN(t), o = u) : (o = Math.floor(Math.log(t) / Math.LN2), t * (c = 2 ** -o) < 1 && (o--, c *= 2), o + d >= 1 ? t += f / c : t += f * 2 ** (1 - d), t * c >= 2 && (o++, c /= 2), o + d >= u ? (s = 0, o = u) : o + d >= 1 ? (s = (t * c - 1) * 2 ** i, o += d) : (s = t * 2 ** (d - 1) * 2 ** i, o = 0)); i >= 8; e[n + p] = s & 255, p += m, s /= 256, i -= 8);
		for (o = o << i | s, l += i; l > 0; e[n + p] = o & 255, p += m, o /= 256, l -= 8);
		e[n + p - m] |= h * 128;
	};
})), Ve = (/* @__PURE__ */ ve(((e) => {
	var t = ze(), n = Be(), r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
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
		if (X(e, ArrayBuffer) || e && X(e.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (X(e, SharedArrayBuffer) || e && X(e.buffer, SharedArrayBuffer))) return h(e, t, n);
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
		if (X(e, Uint8Array)) {
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
		if (e.length !== void 0) return typeof e.length != "number" || Z(e.length) ? o(0) : p(e);
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
		if (X(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), X(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), !s.isBuffer(e) || !s.isBuffer(t)) throw TypeError("The \"buf1\", \"buf2\" arguments must be one of type Buffer or Uint8Array");
		if (e === t) return 0;
		let n = e.length, r = t.length;
		for (let i = 0, a = Math.min(n, r); i < a; ++i) if (e[i] !== t[i]) {
			n = e[i], r = t[i];
			break;
		}
		return n < r ? -1 : +(r < n);
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
			if (X(t, Uint8Array)) i + t.length > r.length ? (s.isBuffer(t) || (t = s.from(t)), t.copy(r, i)) : Uint8Array.prototype.set.call(r, t, i);
			else if (s.isBuffer(t)) t.copy(r, i);
			else throw TypeError("\"list\" argument must be an Array of Buffers");
			i += t.length;
		}
		return r;
	};
	function y(e, t) {
		if (s.isBuffer(e)) return e.length;
		if (ArrayBuffer.isView(e) || X(e, ArrayBuffer)) return e.byteLength;
		if (typeof e != "string") throw TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + typeof e);
		let n = e.length, r = arguments.length > 2 && arguments[2] === !0;
		if (!r && n === 0) return 0;
		let i = !1;
		for (;;) switch (t) {
			case "ascii":
			case "latin1":
			case "binary": return n;
			case "utf8":
			case "utf-8": return q(e).length;
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return n * 2;
			case "hex": return n >>> 1;
			case "base64": return J(e).length;
			default:
				if (i) return r ? -1 : q(e).length;
				t = ("" + t).toLowerCase(), i = !0;
		}
	}
	s.byteLength = y;
	function b(e, t, n) {
		let r = !1;
		if ((t === void 0 || t < 0) && (t = 0), t > this.length || ((n === void 0 || n > this.length) && (n = this.length), n <= 0) || (n >>>= 0, t >>>= 0, n <= t)) return "";
		for (e ||= "utf8";;) switch (e) {
			case "hex": return M(this, t, n);
			case "utf8":
			case "utf-8": return k(this, t, n);
			case "ascii": return j(this, t, n);
			case "latin1":
			case "binary": return ne(this, t, n);
			case "base64": return O(this, t, n);
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return N(this, t, n);
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
		return e === 0 ? "" : arguments.length === 0 ? k(this, 0, e) : b.apply(this, arguments);
	}, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(e) {
		if (!s.isBuffer(e)) throw TypeError("Argument must be a Buffer");
		return this === e ? !0 : s.compare(this, e) === 0;
	}, s.prototype.inspect = function() {
		let t = "", n = e.INSPECT_MAX_BYTES;
		return t = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(), this.length > n && (t += " ... "), "<Buffer " + t + ">";
	}, r && (s.prototype[r] = s.prototype.inspect), s.prototype.compare = function(e, t, n, r, i) {
		if (X(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), !s.isBuffer(e)) throw TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof e);
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
		return a < o ? -1 : +(o < a);
	};
	function S(e, t, n, r, i) {
		if (e.length === 0) return -1;
		if (typeof n == "string" ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, Z(n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
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
			if (Z(r)) return o;
			e[n + o] = r;
		}
		return o;
	}
	function T(e, t, n, r) {
		return Y(q(t, e.length - n), e, n, r);
	}
	function E(e, t, n, r) {
		return Y(oe(t), e, n, r);
	}
	function D(e, t, n, r) {
		return Y(J(t), e, n, r);
	}
	function ee(e, t, n, r) {
		return Y(se(t, e.length - n), e, n, r);
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
			case "binary": return E(this, e, t, n);
			case "base64": return D(this, e, t, n);
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return ee(this, e, t, n);
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
	function O(e, n, r) {
		return n === 0 && r === e.length ? t.fromByteArray(e) : t.fromByteArray(e.slice(n, r));
	}
	function k(e, t, n) {
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
		return te(r);
	}
	var A = 4096;
	function te(e) {
		let t = e.length;
		if (t <= A) return String.fromCharCode.apply(String, e);
		let n = "", r = 0;
		for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += A));
		return n;
	}
	function j(e, t, n) {
		let r = "";
		n = Math.min(e.length, n);
		for (let i = t; i < n; ++i) r += String.fromCharCode(e[i] & 127);
		return r;
	}
	function ne(e, t, n) {
		let r = "";
		n = Math.min(e.length, n);
		for (let i = t; i < n; ++i) r += String.fromCharCode(e[i]);
		return r;
	}
	function M(e, t, n) {
		let r = e.length;
		(!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
		let i = "";
		for (let r = t; r < n; ++r) i += ce[e[r]];
		return i;
	}
	function N(e, t, n) {
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
	function P(e, t, n) {
		if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
		if (e + t > n) throw RangeError("Trying to access beyond buffer length");
	}
	s.prototype.readUintLE = s.prototype.readUIntLE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = this[e], i = 1, a = 0;
		for (; ++a < t && (i *= 256);) r += this[e + a] * i;
		return r;
	}, s.prototype.readUintBE = s.prototype.readUIntBE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = this[e + --t], i = 1;
		for (; t > 0 && (i *= 256);) r += this[e + --t] * i;
		return r;
	}, s.prototype.readUint8 = s.prototype.readUInt8 = function(e, t) {
		return e >>>= 0, t || P(e, 1, this.length), this[e];
	}, s.prototype.readUint16LE = s.prototype.readUInt16LE = function(e, t) {
		return e >>>= 0, t || P(e, 2, this.length), this[e] | this[e + 1] << 8;
	}, s.prototype.readUint16BE = s.prototype.readUInt16BE = function(e, t) {
		return e >>>= 0, t || P(e, 2, this.length), this[e] << 8 | this[e + 1];
	}, s.prototype.readUint32LE = s.prototype.readUInt32LE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
	}, s.prototype.readUint32BE = s.prototype.readUInt32BE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
	}, s.prototype.readBigUInt64LE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24, i = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + n * 2 ** 24;
		return BigInt(r) + (BigInt(i) << BigInt(32));
	}), s.prototype.readBigUInt64BE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e], i = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n;
		return (BigInt(r) << BigInt(32)) + BigInt(i);
	}), s.prototype.readIntLE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = this[e], i = 1, a = 0;
		for (; ++a < t && (i *= 256);) r += this[e + a] * i;
		return i *= 128, r >= i && (r -= 2 ** (8 * t)), r;
	}, s.prototype.readIntBE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = t, i = 1, a = this[e + --r];
		for (; r > 0 && (i *= 256);) a += this[e + --r] * i;
		return i *= 128, a >= i && (a -= 2 ** (8 * t)), a;
	}, s.prototype.readInt8 = function(e, t) {
		return e >>>= 0, t || P(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e];
	}, s.prototype.readInt16LE = function(e, t) {
		e >>>= 0, t || P(e, 2, this.length);
		let n = this[e] | this[e + 1] << 8;
		return n & 32768 ? n | 4294901760 : n;
	}, s.prototype.readInt16BE = function(e, t) {
		e >>>= 0, t || P(e, 2, this.length);
		let n = this[e + 1] | this[e] << 8;
		return n & 32768 ? n | 4294901760 : n;
	}, s.prototype.readInt32LE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
	}, s.prototype.readInt32BE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
	}, s.prototype.readBigInt64LE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (n << 24);
		return (BigInt(r) << BigInt(32)) + BigInt(t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24);
	}), s.prototype.readBigInt64BE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
		return (BigInt(r) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n);
	}), s.prototype.readFloatLE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), n.read(this, e, !0, 23, 4);
	}, s.prototype.readFloatBE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), n.read(this, e, !1, 23, 4);
	}, s.prototype.readDoubleLE = function(e, t) {
		return e >>>= 0, t || P(e, 8, this.length), n.read(this, e, !0, 52, 8);
	}, s.prototype.readDoubleBE = function(e, t) {
		return e >>>= 0, t || P(e, 8, this.length), n.read(this, e, !1, 52, 8);
	};
	function F(e, t, n, r, i, a) {
		if (!s.isBuffer(e)) throw TypeError("\"buffer\" argument must be a Buffer instance");
		if (t > i || t < a) throw RangeError("\"value\" argument is out of bounds");
		if (n + r > e.length) throw RangeError("Index out of range");
	}
	s.prototype.writeUintLE = s.prototype.writeUIntLE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, n >>>= 0, !r) {
			let r = 2 ** (8 * n) - 1;
			F(this, e, t, n, r, 0);
		}
		let i = 1, a = 0;
		for (this[t] = e & 255; ++a < n && (i *= 256);) this[t + a] = e / i & 255;
		return t + n;
	}, s.prototype.writeUintBE = s.prototype.writeUIntBE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, n >>>= 0, !r) {
			let r = 2 ** (8 * n) - 1;
			F(this, e, t, n, r, 0);
		}
		let i = n - 1, a = 1;
		for (this[t + i] = e & 255; --i >= 0 && (a *= 256);) this[t + i] = e / a & 255;
		return t + n;
	}, s.prototype.writeUint8 = s.prototype.writeUInt8 = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 1, 255, 0), this[t] = e & 255, t + 1;
	}, s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 65535, 0), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
	}, s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
	}, s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = e & 255, t + 4;
	}, s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
	};
	function I(e, t, n, r, i) {
		W(t, r, i, e, n, 7);
		let a = Number(t & BigInt(4294967295));
		e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a;
		let o = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, n;
	}
	function L(e, t, n, r, i) {
		W(t, r, i, e, n, 7);
		let a = Number(t & BigInt(4294967295));
		e[n + 7] = a, a >>= 8, e[n + 6] = a, a >>= 8, e[n + 5] = a, a >>= 8, e[n + 4] = a;
		let o = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[n + 3] = o, o >>= 8, e[n + 2] = o, o >>= 8, e[n + 1] = o, o >>= 8, e[n] = o, n + 8;
	}
	s.prototype.writeBigUInt64LE = Q(function(e, t = 0) {
		return I(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
	}), s.prototype.writeBigUInt64BE = Q(function(e, t = 0) {
		return L(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
	}), s.prototype.writeIntLE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, !r) {
			let r = 2 ** (8 * n - 1);
			F(this, e, t, n, r - 1, -r);
		}
		let i = 0, a = 1, o = 0;
		for (this[t] = e & 255; ++i < n && (a *= 256);) e < 0 && o === 0 && this[t + i - 1] !== 0 && (o = 1), this[t + i] = (e / a >> 0) - o & 255;
		return t + n;
	}, s.prototype.writeIntBE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, !r) {
			let r = 2 ** (8 * n - 1);
			F(this, e, t, n, r - 1, -r);
		}
		let i = n - 1, a = 1, o = 0;
		for (this[t + i] = e & 255; --i >= 0 && (a *= 256);) e < 0 && o === 0 && this[t + i + 1] !== 0 && (o = 1), this[t + i] = (e / a >> 0) - o & 255;
		return t + n;
	}, s.prototype.writeInt8 = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = e & 255, t + 1;
	}, s.prototype.writeInt16LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 32767, -32768), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
	}, s.prototype.writeInt16BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
	}, s.prototype.writeInt32LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 2147483647, -2147483648), this[t] = e & 255, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4;
	}, s.prototype.writeInt32BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
	}, s.prototype.writeBigInt64LE = Q(function(e, t = 0) {
		return I(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
	}), s.prototype.writeBigInt64BE = Q(function(e, t = 0) {
		return L(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
	});
	function R(e, t, n, r, i, a) {
		if (n + r > e.length || n < 0) throw RangeError("Index out of range");
	}
	function z(e, t, r, i, a) {
		return t = +t, r >>>= 0, a || R(e, t, r, 4, 34028234663852886e22, -34028234663852886e22), n.write(e, t, r, i, 23, 4), r + 4;
	}
	s.prototype.writeFloatLE = function(e, t, n) {
		return z(this, e, t, !0, n);
	}, s.prototype.writeFloatBE = function(e, t, n) {
		return z(this, e, t, !1, n);
	};
	function B(e, t, r, i, a) {
		return t = +t, r >>>= 0, a || R(e, t, r, 8, 17976931348623157e292, -17976931348623157e292), n.write(e, t, r, i, 52, 8), r + 8;
	}
	s.prototype.writeDoubleLE = function(e, t, n) {
		return B(this, e, t, !0, n);
	}, s.prototype.writeDoubleBE = function(e, t, n) {
		return B(this, e, t, !1, n);
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
	var V = {};
	function H(e, t, n) {
		V[e] = class extends n {
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
	H("ERR_BUFFER_OUT_OF_BOUNDS", function(e) {
		return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
	}, RangeError), H("ERR_INVALID_ARG_TYPE", function(e, t) {
		return `The "${e}" argument must be of type number. Received type ${typeof t}`;
	}, TypeError), H("ERR_OUT_OF_RANGE", function(e, t, n) {
		let r = `The value of "${e}" is out of range.`, i = n;
		return Number.isInteger(n) && Math.abs(n) > 2 ** 32 ? i = U(String(n)) : typeof n == "bigint" && (i = String(n), (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (i = U(i)), i += "n"), r += ` It must be ${t}. Received ${i}`, r;
	}, RangeError);
	function U(e) {
		let t = "", n = e.length, r = +(e[0] === "-");
		for (; n >= r + 4; n -= 3) t = `_${e.slice(n - 3, n)}${t}`;
		return `${e.slice(0, n)}${t}`;
	}
	function re(e, t, n) {
		G(t, "offset"), (e[t] === void 0 || e[t + n] === void 0) && K(t, e.length - (n + 1));
	}
	function W(e, t, n, r, i, a) {
		if (e > n || e < t) {
			let r = typeof t == "bigint" ? "n" : "", i;
			throw i = a > 3 ? t === 0 || t === BigInt(0) ? `>= 0${r} and < 2${r} ** ${(a + 1) * 8}${r}` : `>= -(2${r} ** ${(a + 1) * 8 - 1}${r}) and < 2 ** ${(a + 1) * 8 - 1}${r}` : `>= ${t}${r} and <= ${n}${r}`, new V.ERR_OUT_OF_RANGE("value", i, e);
		}
		re(r, i, a);
	}
	function G(e, t) {
		if (typeof e != "number") throw new V.ERR_INVALID_ARG_TYPE(t, "number", e);
	}
	function K(e, t, n) {
		throw Math.floor(e) === e ? t < 0 ? new V.ERR_BUFFER_OUT_OF_BOUNDS() : new V.ERR_OUT_OF_RANGE(n || "offset", `>= ${+!!n} and <= ${t}`, e) : (G(e, n), new V.ERR_OUT_OF_RANGE(n || "offset", "an integer", e));
	}
	var ie = /[^+/0-9A-Za-z-_]/g;
	function ae(e) {
		if (e = e.split("=")[0], e = e.trim().replace(ie, ""), e.length < 2) return "";
		for (; e.length % 4 != 0;) e += "=";
		return e;
	}
	function q(e, t) {
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
	function oe(e) {
		let t = [];
		for (let n = 0; n < e.length; ++n) t.push(e.charCodeAt(n) & 255);
		return t;
	}
	function se(e, t) {
		let n, r, i, a = [];
		for (let o = 0; o < e.length && !((t -= 2) < 0); ++o) n = e.charCodeAt(o), r = n >> 8, i = n % 256, a.push(i), a.push(r);
		return a;
	}
	function J(e) {
		return t.toByteArray(ae(e));
	}
	function Y(e, t, n, r) {
		let i;
		for (i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
		return i;
	}
	function X(e, t) {
		return e instanceof t || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === t.name;
	}
	function Z(e) {
		return e !== e;
	}
	var ce = (function() {
		let e = "0123456789abcdef", t = Array(256);
		for (let n = 0; n < 16; ++n) {
			let r = n * 16;
			for (let i = 0; i < 16; ++i) t[r + i] = e[n] + e[i];
		}
		return t;
	})();
	function Q(e) {
		return typeof BigInt > "u" ? le : e;
	}
	function le() {
		throw Error("BigInt not supported");
	}
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
	let r = We, [i, a] = c(void 0);
	return we(t) && (t = "png"), we(n) && (n = "ERROR"), He(new Blob([Ue(e)])).then((e) => {
		r = r.replace("#{encoding}", t), r = r.replace("#{data}", Ve.Buffer.from(e).toString("base64")), a(r);
	}), /* @__PURE__ */ M(Box, {
		component: "img",
		src: i,
		alt: n,
		sx: {
			width: "100%",
			height: "auto",
			display: "block",
			maxWidth: "100%"
		}
	});
}, Ke = (e) => {
	let t = "", n = Object.keys(e).map((t) => {
		let n = e[t];
		return we(n) ? "" : `${encodeURIComponent(t)}=${encodeURIComponent(n)}`;
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
		we(t) && (t = "");
		let u = e + t, d = {
			...a,
			...s
		};
		Object.keys(d).forEach((e) => {
			we(d[e]) && delete d[e];
		});
		let f = {
			method: "GET",
			headers: { ...d },
			...c
		};
		return we(l) || (f.method === "POST" && (f.body = JSON.stringify(l)), f.method === "GET" && (u += Ke(l))), fetch(u, f).catch((e) => n(e)).finally(() => {
			i && o({
				endpoint: t,
				inputHeaders: s,
				fetchParams: c
			}), !we(r) && r({
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
var Je = ({ endpoint: e, handleErr: t }) => {
	we(t) && (t = (e) => console.log(e));
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
		schema: async (e, t = {}) => await n.fetchJson({
			endpoint: "/create",
			fetchParams: {
				method: "GET",
				...t
			},
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
	let [r, a] = c([/* @__PURE__ */ M("option", {
		value: n.defaultValue,
		children: n.defaultValue
	}, e + "-" + n.defaultValue)]), o = Je({ endpoint: t });
	return i(() => {
		o.selectOptions().then((t) => {
			a(Object.keys(t).map((n) => {
				let r = t[n][Object.keys(t[n])[1]], i = t[n][Object.keys(t[n])[0]];
				return /* @__PURE__ */ M("option", {
					value: i,
					children: r
				}, e + "-" + n);
			}));
		});
	}, []), /* @__PURE__ */ M(w, {
		...n,
		defaultValue: n.defaultValue,
		children: [...r || /* @__PURE__ */ M(ne, {})]
	}, e);
}, Ze = ({ buttons: e, endpoint: t, title: n, title_topology_params: r, button_stack_params: i, header_stack_params: a, outer_stack_params: o, ...s }) => {
	let c = e?.map((e) => e);
	return /* @__PURE__ */ N(T, {
		direction: "column",
		spacing: 1,
		sx: {
			width: "100%",
			justifyContent: "flex-start",
			alignItems: "center"
		},
		...o,
		children: [/* @__PURE__ */ N(T, {
			direction: "row",
			...a,
			children: [/* @__PURE__ */ M(te, {
				variant: "h6",
				sx: {
					m: 2,
					whiteSpace: "nowrap",
					overflow: "hidden",
					textOverflow: "ellipsis"
				},
				...r,
				children: n
			}), /* @__PURE__ */ M(T, {
				direction: "row",
				spacing: 2,
				sx: {
					pr: 16,
					pl: 16,
					justifyContent: "flex-end",
					width: "20%",
					alignItems: "center"
				},
				...i,
				children: c
			})]
		}), /* @__PURE__ */ M(Ft, {
			...s,
			endpoint: t
		})]
	});
}, Qe = ({ api: e, endpoint: t, refKey: n, register_component: r, ...a }) => {
	let o = be();
	return i(() => {
		(async () => {
			let e = o?.get(n);
			if (!e) return;
			let t = { current: { ...e } };
			Tt({ current: e }, { id: 17 }), await jt(t);
		})();
	}, [o]), /* @__PURE__ */ M(Ze, {
		api: e,
		endpoint: "get_paginated",
		buttons: [],
		title: "",
		refKey: n,
		register_component: r,
		...a
	});
}, $e = ({ jsxKey: e, key: t, inputProps: n }) => {
	let r;
	return t.charAt(t.length - 1) === "D" && t.charAt(t.length - 2) === "I" || t.charAt(t.length - 1) === "S" && t.charAt(t.length - 2) === "D" ? (t.charAt(t.length - 1) === "D" && t.charAt(t.length - 2) === "I" && (r = t.slice(5, t.length - 2)), t.charAt(t.length - 1) === "S" && t.charAt(t.length - 2) === "D" && (r = t.slice(5, t.length - 3), n = {
		...n,
		multiple: !0
	}), /* @__PURE__ */ M(Xe, {
		endpoint: r,
		jsxKey: e,
		inputProps: n
	})) : null;
}, et = () => ({ formRef: e, jsxKey: t, key: n, currentType: r, inputProps: i }) => {
	let a = $e({
		jsxKey: t,
		key: n,
		inputProps: i
	});
	if (!we(a)) return a;
	if (a = /* @__PURE__ */ M(b, {
		type: "text",
		...i
	}, t), r === "number" || r === "bigint") return /* @__PURE__ */ M(b, {
		type: "number",
		...i
	}, t);
	if (r === "boolean") return /* @__PURE__ */ M(E, {
		...i,
		defaultChecked: i.defaultValue
	}, t);
	if (r === "object") {
		if (i.defaultValue.Subtype === 20) return /* @__PURE__ */ M(Qe, {
			api: e.current?.api,
			refKey: "csv_grid",
			register_component: !0
		}, t);
		if (i.defaultValue.Subtype === 19) return /* @__PURE__ */ M(Lt, { data: Ae(it(e), n.slice(0, n.lastIndexOf(".")))?.value.Data }, t);
		if (i.defaultValue.Subtype === 17) return /* @__PURE__ */ M(Ge, { data: Ae(it(e), n.slice(0, n.lastIndexOf(".")))?.value.Data }, t);
		if (i.defaultValue.Subtype === 16 || i.defaultValue.Subtype === 0) {
			let r = Ae(it(e), n.slice(0, n.lastIndexOf(".")));
			return i.name = n.slice(0, n.lastIndexOf(".")) + ".Data", /* @__PURE__ */ M(Re, {
				fileData: JSON.stringify(r?.value.Data, null, 2),
				inputProps: i,
				subtype: i.defaultValue.Subtype
			}, t);
		}
		if (!we(i.defaultValue.Subtype) || !we(i.defaultValue.Data)) return null;
		if (Array.isArray(i.defaultValue)) return Object.keys(i.defaultValue).map((e) => /* @__PURE__ */ M(b, {
			type: "text",
			...i,
			defaultValue: i.defaultValue[e]
		}, t));
		if (we(i.defaultValue)) return;
		let r = Object.keys(i.defaultValue)[0], a = i.defaultValue[r];
		return Ce(a) ? /* @__PURE__ */ M(Ie, {
			inputKey: n,
			inputProps: i
		}) : void 0;
	}
	return a;
}, tt = (e, t = {}) => ({
	index: 0,
	elements: {},
	nameIndex: {},
	labels: {},
	useLabels: {},
	element_component: {},
	container: void 0,
	handleOnClose: void 0,
	elementSelector: e || et(),
	context: t
}), nt = (e, t) => {
	let n = e.current;
	n.handleClose = t, e.current = n;
}, rt = (e, t) => {
	let n = e.current;
	we(n) || (n.container = t), e.current = n;
}, it = (e) => e.current.container, at = (e, t) => {
	let n = e.current, r = n.labels[t], i = n.element_component[t];
	return n.useLabels[t] ? /* @__PURE__ */ N(T, {
		direction: "column",
		spacing: 1,
		sx: {
			width: "100%",
			pb: 1
		},
		children: [/* @__PURE__ */ M(u, {
			sx: { width: "100%" },
			children: r
		}), /* @__PURE__ */ M(u, {
			sx: { width: "100%" },
			children: i
		})]
	}, t) : /* @__PURE__ */ N(T, {
		direction: "row",
		gap: 1,
		sx: {
			justifyContent: "space-between",
			width: "100%",
			borderBottom: "1px solid rgba(0, 0, 0, 0.42)",
			pb: .5,
			alignItems: "flex-end"
		},
		children: [/* @__PURE__ */ M(u, {
			sx: {
				width: "50%",
				flexShrink: 0
			},
			children: r
		}), /* @__PURE__ */ M(u, {
			sx: { flexGrow: 1 },
			children: i
		})]
	}, t);
}, ot = (e) => {
	let t = {};
	return Object.keys(e.current.nameIndex).map((n, r) => {
		t[n] = at(e, r);
	}), /* @__PURE__ */ M(T, {
		direction: "column",
		gap: 0,
		sx: {
			flexGrow: 1,
			width: "100%"
		},
		children: Object.keys(t).map((e) => t[e])
	});
}, st = (e) => {
	let t = e.current;
	return { onChange: (n) => {
		let r = n.target.value, i = n.target.selectedOptions;
		if (!we(i)) {
			let e = [].slice.call(i);
			r = e.map((e) => e.value), e.length === 1 && (r = r[0]);
		}
		n.target.type === "datetime-local" && (r = new Date(Date.parse(r)).toISOString());
		let a = n.target.name, o = t.nameIndex[a];
		we(o) && (t.nameIndex[a] = t.index, o = t.index, e.current = t), t.elements[o] = r;
		let s = a.split("."), c = s.slice(0, s.length - 1).join("."), l = s.slice(s.length - 1);
		we(Ae(it(e), c)) && (c = s.slice(0, s.length - 2).join(".")), n.target.type === "checkbox" && (r = n.currentTarget.checked), e.current = t, rt(e, Pe(it(e), c, l, r)), e.current = t;
	} };
}, ct = (e, t) => {
	let n = e.current, r = n.nameIndex[t];
	return n.elements[r];
}, lt = (e, t, n) => {
	let r = typeof n, i = e.current, a = t + i.index, o = {
		name: t,
		defaultValue: ct(e, t),
		onChange: st(e).onChange,
		sx: { width: "100%" }
	};
	return i.elementSelector({
		key: t,
		formRef: e,
		jsxKey: a,
		currentType: r,
		inputProps: o
	});
}, ut = (e, t, n) => {
	let r = e.current, i = Te(t.replace(/root\./, ""), "_"), a = i.split(".");
	if (!a.some((e) => e.toLowerCase() === "data")) {
		if (we(r.nameIndex[t])) {
			r.nameIndex[t] = r.index, r.elements[r.index] = n;
			let o = lt(e, t, n);
			if (!we(o)) {
				let e = a[a.length - 1], n = e.toLowerCase() === "subtype", s = /^\d+$/.test(e);
				r.useLabels[r.index] = n || !s;
				let c = i;
				n && a.length > 1 && (c = a[a.length - 2]), r.labels[r.index] = /* @__PURE__ */ M(S, {
					column: t,
					children: c
				}, "Label" + t + r.index), r.element_component[r.index] = o, r.index++;
			}
		}
		e.current = r;
	}
}, dt = ({ formRef: e, container: t }) => {
	Me(t, (t) => {
		let n = t.path, r = t.value;
		if (Array.isArray(r)) {
			let t = [];
			Object.keys(r).forEach((e) => {
				we(r[e]) || Array.isArray(r[e]) || t.push(r[e]);
			}), t.length > 0 && ut(e, n, t);
			return;
		}
		Object.keys(r).forEach((t) => {
			we(r[t]) || (typeof r[t] == "object" && Object.keys(r[t]).forEach((i) => {
				let a = {};
				a[i] = r[t][i], ut(e, n + "." + t + "." + i, a);
			}), Ce(r[t]) && ut(e, n + "." + t, r[t]));
		});
	});
}, ft = ({ title: e, button_title: t, getButton: n, tabs: r, getSchema: i, handleSave: o, elementSelector: l, footerButtons: f, refKey: p, register_component: m = !1, context: h = null }) => {
	let g = xe(p, m), _ = s(null), [v, y] = c(!1), b = () => {
		y(!1);
	}, x = () => {
		o(it(_).value), y(!1);
	};
	_.current ||= tt(l, {
		setShow: (e) => {
			y(e);
		},
		...h
	}), a(() => (g(_.current), () => g(null)), [g]);
	let [S, C] = c(void 0), [w, E] = c(0), O = async () => {
		try {
			rt(_, Fe(null, [], ".", await i())), nt(_, b), dt({
				formRef: _,
				container: it(_)
			}), C(ot(_)), y(!0);
		} catch (e) {
			console.error("Failed to load schema:", e);
		}
	};
	return f ||= [
		/* @__PURE__ */ M(d, {
			onClick: () => {
				let e = {};
				e[_.current.index] = "";
				let t = it(_);
				we(Ae(t, "root.fields")) && rt(_, ke(t, "root.fields", {})), ut(_, "root.fields." + _.current.index, e), C(ot(_));
			},
			children: "Add Field"
		}),
		/* @__PURE__ */ M(d, {
			onClick: x,
			children: "Save"
		}),
		/* @__PURE__ */ M(d, {
			onClick: b,
			children: "Close"
		})
	], /* @__PURE__ */ N(T, {
		direction: "row",
		spacing: 1,
		children: [n ? n(O) : /* @__PURE__ */ M(d, {
			onClick: O,
			children: t
		}), /* @__PURE__ */ M(Se, {
			title: e,
			body: /* @__PURE__ */ N(u, {
				sx: { width: "100%" },
				children: [
					r && /* @__PURE__ */ M(u, {
						sx: {
							borderBottom: 1,
							borderColor: "divider"
						},
						children: /* @__PURE__ */ N(ee, {
							value: w,
							onChange: (e, t) => E(t),
							"aria-label": "custom tabs",
							children: [/* @__PURE__ */ M(D, { label: "File Upload" }), /* @__PURE__ */ M(D, { label: "File Viewer" })]
						})
					}),
					w === 0 && /* @__PURE__ */ M(u, {
						sx: {
							borderBottom: 1,
							borderColor: "divider",
							width: "100%"
						},
						children: S
					}),
					w === 1 && /* @__PURE__ */ M(u, {
						sx: { p: 3 },
						children: /* @__PURE__ */ M("pre", { children: JSON.stringify(it(_)?.value, null, 2) })
					})
				]
			}),
			show: v,
			footer: f
		})]
	});
}, pt = ({ title: e, show: t, onCancel: n, onConfirm: r }) => /* @__PURE__ */ M(Se, {
	title: e || "Are you sure?",
	show: t,
	footer: /* @__PURE__ */ N(T, {
		direction: "column",
		gap: 3,
		children: [/* @__PURE__ */ M(d, {
			onClick: () => {
				we(n) || n();
			},
			children: "Cancel"
		}), /* @__PURE__ */ M(d, {
			onClick: () => {
				we(r) || r();
			},
			children: "Confirm"
		})]
	})
}), mt = ({ refreshGrid: e, api: t, id: n, title: r, footerButtons: i, ...a }) => /* @__PURE__ */ M(ft, {
	title: r,
	button_title: "Update",
	getSchema: Ye(t, n),
	handleSave: (r) => {
		t.update(r, n).then(() => e());
	},
	footerButtons: i,
	register_component: !0,
	refKey: String(n),
	...a
}), ht = ({ refreshGrid: e, api: t, id: n }) => {
	let [r, i] = c(!1);
	return /* @__PURE__ */ N(T, {
		direction: "row",
		spacing: 1,
		sx: {
			width: "100%",
			justifyContent: "center",
			alignItems: "center"
		},
		children: [/* @__PURE__ */ M(d, {
			onClick: () => {
				i(!r);
			},
			children: "Delete"
		}), /* @__PURE__ */ M(pt, {
			onConfirm: () => {
				t.deleteId(n).then(e());
			},
			show: r
		})]
	});
}, gt = ({ handleRefreshGrid: e, api: t, id: n, params: r }) => {
	let i = {
		...r,
		refreshGrid: e,
		api: t,
		id: n
	};
	return /* @__PURE__ */ N(T, {
		direction: "row",
		spacing: 1,
		sx: {
			width: "100%",
			justifyContent: "center",
			alignItems: "center"
		},
		children: [/* @__PURE__ */ M(mt, { ...i }), /* @__PURE__ */ M(ht, { ...i })]
	});
}, _t = (e, t) => {
	let n = e.current;
	Ne(t, (e) => {
		let t = e.value, r = e.path, i = typeof t;
		if (n.headers_ri[r] !== void 0) return;
		let a = "string";
		i === "number" ? a = "number" : r.toLowerCase().includes("date") || r.toLowerCase().includes("modified") ? a = "date" : i === "string" && (a = "string"), n.headers[n.index] = {
			field: r,
			type: a,
			headerName: r
		}, n.rows[n.index] = [], n.headers_ri[r] = n.index, n.index++;
	}), e.current = n;
}, vt = (e) => {
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
}, yt = (e, t) => {
	let n = e.current;
	if (!n) return;
	n.rows = [[], []], n.row_count = 0;
	let r = n.headers_ri.Field, i = n.headers_ri.Value;
	Object.entries(t).forEach(([e, t]) => {
		if (r !== void 0 && n.rows[r].push(Te(e, "_")), i !== void 0) {
			let e = Array.isArray(t) ? t.join(", ") : t;
			n.rows[i].push(e);
		}
		n.row_count++;
	}), e.current = n;
}, bt = (e, t) => {
	let n = e.current;
	n && (n.rows = [], n.row_count = 0, n.headers.forEach(() => {
		n.rows.push([]);
	}), Ne(t, (e) => {
		if (Ce(e.value)) {
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
}, St = (e) => {
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
}, Ct = (e) => {
	let t = e.current;
	return !t || !t.headers ? [] : t.headers;
}, wt = (e) => {
	let t = e.current, n = Object.keys(t.headers_ri).map((e) => ({
		field: e,
		sortable: !0,
		filterable: !0,
		headerName: Te(e.split(".").pop(), "_"),
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
			renderCell: Nt(e)
		}, r = Math.max(0, n.length - 1);
		n.splice(r, 0, t);
	}
	return n;
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
}, Ot = (e) => e.current.fetch_params, kt = (e, t) => ({ getRows: async (n) => {
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
		Array.isArray(t) && t.length === 0 || we(t) || (s[e] = t);
	}), we(n.sortModel) || Array.isArray(n.sortModel) && n.sortModel.length === 0 && delete s.sortModel, we(n.filterModel) || Array.isArray(n.filterModel.items) && n.filterModel.items.length === 0 && delete s.filterModel;
	let c = await r.api?.at("/" + r.endpoint, {
		fetchParams: {
			method: "GET",
			...Ot(e)
		},
		args: s
	}), l = Fe(null, [], ".", c.results);
	return _t(e, l), bt(e, l), r.row_count = c.pagination?.total || 0, e.current = r, t(), {
		rows: St(e),
		rowCount: c.pagination?.total || 0
	};
} }), At = (e) => e.current?.datasource, jt = async (e) => {
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
}, Nt = (e) => {
	let t = e.current;
	if (t) return t.cellRenderer ? t.cellRenderer(e) : Pt(e);
}, Pt = (e) => {
	let t = be();
	return (n) => {
		let r = e.current;
		if (!r) return;
		let i = (e = !1) => {
			let r = t?.get(String(n.id))?.context;
			if (!r) return;
			let i = r.setShow;
			i(e);
		}, a = /* @__PURE__ */ N(T, {
			direction: "column",
			spacing: 2,
			sx: { width: "100%" },
			children: [/* @__PURE__ */ N(T, {
				spacing: 3,
				direction: "row",
				children: [
					/* @__PURE__ */ M(u, {
						sx: { ...r.modal_header_sx },
						children: "Update"
					}),
					/* @__PURE__ */ M(u, { sx: { flexGrow: 1 } }, "spacer"),
					/* @__PURE__ */ M(y, {
						onClick: () => i(!1),
						sx: {
							backgroundColor: "black",
							color: "white"
						},
						children: /* @__PURE__ */ M(K, {})
					})
				]
			}), /* @__PURE__ */ M(T, {
				spacing: 3,
				direction: "row",
				children: Object.entries(r.modal_header_rows || []).map((e) => e)
			})]
		});
		return /* @__PURE__ */ M(gt, {
			params: {
				footerButtons: [
					/* @__PURE__ */ M(d, {
						onClick: () => i(!1),
						children: "Close"
					}),
					/* @__PURE__ */ M(u, { sx: { flexGrow: 1 } }, "spacer"),
					/* @__PURE__ */ M(d, { children: "Update" })
				],
				title: a,
				...n.row
			},
			handleRefreshGrid: async () => await jt(e),
			api: r.api,
			id: n.id
		});
	};
}, Ft = ({ api: e, endpoint: t, row_details: n, refKey: r, cellRenderer: i, register_component: o = !1, toolbar: l = !1, checkbox_select: u = !1, datagrid_sx: d = void 0, grid_options: f = void 0, context: p = void 0 }) => {
	let m = xe(r, o), h = s(null), [, g] = c(!1), [_, v] = c({
		page: 0,
		pageSize: 25
	}), [y, b] = c(0), [x, S] = c({ id: !1 }), C = I(), w = () => {
		h.current && b(h.current?.row_count ?? 0), g((e) => !e);
	};
	return h.current ||= {
		context: p,
		gridRef: C,
		index: 0,
		headers: [],
		headers_ri: {},
		rows: [],
		row_count: t ? 0 : void 0,
		datasource: t ? kt(h, w) : void 0,
		paginationModel: {
			page: 0,
			pageSize: 5
		},
		args: {},
		selected_data: [],
		selected_ids: null,
		refresh: w,
		cellRenderer: i,
		filter_model: null,
		api: e,
		row_details: n,
		fetch_params: null,
		endpoint: t,
		register_component: o,
		refKey: r,
		modal_title: null,
		modal_header_rows: null,
		modal_header_sx: null,
		modal_header_row: null,
		...f
	}, a(() => (m(h.current), () => m(null)), [m]), /* @__PURE__ */ M(P, {
		apiRef: C,
		disableVirtualization: !0,
		columnVisibilityModel: x,
		onColumnVisibilityModelChange: (e) => S(e),
		rowCount: y,
		sx: {
			width: "100%",
			...d
		},
		columns: wt(h),
		dataSource: At(h),
		pageSizeOptions: [
			25,
			50,
			100
		],
		paginationModel: _,
		onPaginationModelChange: (e) => {
			v(e);
		},
		onRowSelectionModelChange: (e) => Mt(h)(e),
		paginationMode: "server",
		sortingMode: "server",
		filterMode: "server",
		autosizeOnMount: !0,
		autosizeOptions: {
			includeOutliers: !0,
			includeHeaders: !0
		},
		checkboxSelection: u,
		showToolbar: l,
		getRowId: (e) => e.id,
		onDataSourceError: (e) => {
			console.error("DataGrid Error Type:", e.name), console.error("DataGrid Error Message:", e.message), e.cause && (console.group("Original Error Cause"), console.error("Message:", e.cause.message), console.error("Stack:", e.cause.stack), console.groupEnd()), e instanceof F ? console.warn("Fetch failed. Check your API mock or network.") : console.warn("Row update failed.");
		},
		...f
	});
};
j({
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
});
var It = () => {
	let e = {
		position: "sticky",
		zIndex: 2,
		backgroundColor: "white"
	}, t = {
		position: "sticky",
		width: "100%",
		zIndex: 3,
		backgroundColor: "#191E23 !important"
	};
	return {
		"& .MuiDataGrid-columnHeader-last": {
			width: "100%",
			flex: 2
		},
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
		"& .MuiDataGrid-main": { overflow: "auto" },
		"&": {
			width: "100%",
			display: "flex"
		}
	};
}, Lt = ({ data: e, ...t }) => {
	let n = be(), [r, a] = c({
		rows: [],
		columns: []
	});
	return i(() => {
		(async () => {
			let t = n?.get("key_value_grid");
			if (!t) return;
			let r = { current: { ...t } };
			vt(r), yt(r, e), a({
				rows: [...xt(r)],
				columns: [...Ct(r)]
			}), await jt(r);
		})();
	}, [e, n]), /* @__PURE__ */ M(Ft, {
		register_component: !0,
		datagrid_sx: It(),
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
}, Rt = t(null), zt = () => r(Rt), Bt = (e, t = !0) => {
	let n = zt();
	return (r) => {
		t && r ? n?.register(e, r) : n?.unregister(e);
	};
}, Vt = ({ title: e, body: t, show: n, footer: r, title_sx: i, footer_sx: a, content_sx: o, paper_sx: s }) => /* @__PURE__ */ N(h, {
	open: n,
	maxWidth: "lg",
	fullWidth: !0,
	scroll: "paper",
	slotProps: { paper: { sx: {
		maxHeight: "70vh",
		display: "flex",
		flexDirection: "column",
		...s
	} } },
	"aria-labelledby": "centered-modal-title",
	children: [
		/* @__PURE__ */ M(v, {
			id: "centered-modal-title",
			sx: { ...i },
			children: e
		}),
		/* @__PURE__ */ M(_, {
			dividers: !0,
			sx: { ...o },
			children: t
		}),
		/* @__PURE__ */ M(g, {
			sx: a,
			children: r
		})
	]
}), Ht = (e) => {
	if (e === null) return !0;
	let t = typeof e;
	return t === "string" || t === "number" || t === "boolean" || t === "undefined" || t === "symbol" || t === "bigint" || t === "int";
}, Ut = (e) => e == null, Wt = (e, t) => Ut(e) ? "" : e.split(t).map((e) => e.charAt(0).toUpperCase() + e.slice(1)).join(" "), Gt = "Values", Kt = "Containers", qt = (e, t, n, r) => {
	let i = r || {
		[Gt]: /* @__PURE__ */ new Map(),
		[Kt]: /* @__PURE__ */ new Map()
	}, a = e ? t : "root", o = {
		parent: e,
		path: a,
		value: n,
		children: [],
		root: e ? e.root : null,
		containerIndex: i
	};
	return e || (o.root = o), i[Gt].set(a, n), i[Kt].set(a, o), Object.freeze(o);
}, Jt = (e, t, n) => {
	let r = qt(e, t, n, e.containerIndex);
	return {
		...e,
		children: [...e.children, r]
	};
}, Yt = (e, t) => e.containerIndex[Kt].get(t), Xt = (e, t) => {
	for (let [n, r] of e.containerIndex[Gt].entries()) t(n, r);
}, Zt = (e, t) => {
	for (let [, n] of e.containerIndex[Kt].entries()) t(n);
}, Qt = (e, t, n = 2) => {
	Xt(e, (e, r) => {
		let i = Object.keys(r);
		for (let a = 0; a < i.length; a++) {
			let o = e.split(".");
			o.push(i[a]);
			let s = o.slice(2).join("."), c = r[i[a]];
			o.length > n && Ht(c) && t({
				i: a,
				value: c,
				path: s,
				fullpath: o.join("."),
				key: e,
				containerValue: r
			});
		}
	});
}, $t = (e, t, n, r) => {
	if (!e || !t) return e;
	let i = e.containerIndex[Kt].get(t);
	if (!i) return console.warn(`Container at path "${t}" not found.`), e;
	let a = {};
	a[n] = r;
	let o = {
		...i.value,
		...a
	}, s = qt(i.parent, i.path, o, e.containerIndex);
	e.containerIndex[Kt].set(t, s), e.containerIndex[Gt].set(t, o);
	let c = s;
	for (; c.parent;) {
		let t = c.parent, n = t.children.map((e) => e.path === c.path ? c : e), r = c.path.split("."), i = r.slice(r.length - 1), a = { ...e.containerIndex[Gt].get(t.path) };
		a[i] = o;
		let s = Object.freeze({
			...t,
			children: n,
			value: a
		});
		e.containerIndex[Kt].set(s.path, s), c = s;
	}
	return e.containerIndex[Kt].get("root");
}, en = (e = null, t = [], n = "_", ...r) => {
	e === null && (e = qt(null, "root", r.length === 0 ? {} : r[0]), t = ["root"]);
	let i = (e, t) => {
		let r = e.value;
		return typeof r == "object" && r && (Array.isArray(r) ? r.forEach((r, a) => {
			if (typeof r == "object" && r) {
				let o = [...t, String(a)];
				i(Jt(e, o.join(n), r).children.at(-1), o);
			}
		}) : Object.entries(r).forEach(([r, a]) => {
			if (typeof a == "object" && a) {
				let o = [...t, r];
				i(Jt(e, o.join(n), a).children.at(-1), o);
			}
		})), e;
	};
	return i(e, t);
}, tn = ({ inputKey: t, inputProps: n }) => {
	let r = Object.keys(n.defaultValue)[0], a = n.defaultValue[r], [o, s] = c(/* @__PURE__ */ M(b, {
		type: "text",
		onChange: n.onChange,
		defaultValue: a
	})), l = (t, r) => {
		s(e.cloneElement(o, {
			...n,
			defaultValue: a,
			name: t + "." + r
		}));
	}, [u, d] = c(/* @__PURE__ */ M(b, {
		type: "text",
		...n,
		defaultValue: r,
		onChange: (e) => l(t, e.target.value)
	}));
	return i(() => {
		l(t, r);
	}, []), /* @__PURE__ */ N(T, {
		direction: "horizontal",
		gap: 2,
		children: [u, o]
	});
}, nn = ({ fileData: e, onChange: t, name: n }) => {
	let [r] = V(), a = s("");
	return i(() => {
		e && (async () => {
			if (!e) return;
			let t = String(e).replace(/^"|"$/g, "").replace(/\\n/g, "<br/>");
			t !== a.current && (a.current = t, r.update(() => {
				let e = re();
				e.clear();
				let n = U(r, new DOMParser().parseFromString(`<div>${t}</div>`, "text/html"));
				n.length > 0 && e.append(...n);
			}));
		})();
	}, [e, r]), i(() => r.registerUpdateListener(({ editorState: e }) => {
		e.read(() => {
			let e = H(r);
			a.current = e, t({ target: {
				value: e,
				name: n
			} });
		});
	}), [
		r,
		t,
		n
	]), null;
}, rn = ({ fileData: e, subtype: t, inputProps: n }) => /* @__PURE__ */ M(u, {
	sx: { width: "100%" },
	children: /* @__PURE__ */ M(C, {
		variant: "outlined",
		sx: {
			p: 2,
			minHeight: "200px",
			position: "relative"
		},
		children: /* @__PURE__ */ N(L, {
			initialConfig: {
				namespace: "MyEditor",
				nodes: [W, G],
				theme: {},
				onError: (e) => console.error("Lexical Error:", e),
				editable: t !== 0
			},
			children: [/* @__PURE__ */ M(R, {
				contentEditable: /* @__PURE__ */ M(z, { style: {
					outline: "none",
					minHeight: "170px"
				} }),
				placeholder: /* @__PURE__ */ M("div", {
					style: {
						position: "absolute",
						top: 20,
						left: 20,
						color: "#aaa"
					},
					children: "Enter text..."
				}),
				ErrorBoundary: B
			}), /* @__PURE__ */ M(nn, {
				fileData: e,
				onChange: n.onChange,
				name: n.name
			})]
		})
	})
}), an = /* @__PURE__ */ _e(((e) => {
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
})), on = /* @__PURE__ */ _e(((e) => {
	e.read = function(e, t, n, r, i) {
		var a, o, s = i * 8 - r - 1, c = (1 << s) - 1, l = c >> 1, u = -7, d = n ? i - 1 : 0, f = n ? -1 : 1, p = e[t + d];
		for (d += f, a = p & (1 << -u) - 1, p >>= -u, u += s; u > 0; a = a * 256 + e[t + d], d += f, u -= 8);
		for (o = a & (1 << -u) - 1, a >>= -u, u += r; u > 0; o = o * 256 + e[t + d], d += f, u -= 8);
		if (a === 0) a = 1 - l;
		else if (a === c) return o ? NaN : (p ? -1 : 1) * Infinity;
		else o += 2 ** r, a -= l;
		return (p ? -1 : 1) * o * 2 ** (a - r);
	}, e.write = function(e, t, n, r, i, a) {
		var o, s, c, l = a * 8 - i - 1, u = (1 << l) - 1, d = u >> 1, f = i === 23 ? 2 ** -24 - 2 ** -77 : 0, p = r ? 0 : a - 1, m = r ? 1 : -1, h = +(t < 0 || t === 0 && 1 / t < 0);
		for (t = Math.abs(t), isNaN(t) || t === Infinity ? (s = +!!isNaN(t), o = u) : (o = Math.floor(Math.log(t) / Math.LN2), t * (c = 2 ** -o) < 1 && (o--, c *= 2), o + d >= 1 ? t += f / c : t += f * 2 ** (1 - d), t * c >= 2 && (o++, c /= 2), o + d >= u ? (s = 0, o = u) : o + d >= 1 ? (s = (t * c - 1) * 2 ** i, o += d) : (s = t * 2 ** (d - 1) * 2 ** i, o = 0)); i >= 8; e[n + p] = s & 255, p += m, s /= 256, i -= 8);
		for (o = o << i | s, l += i; l > 0; e[n + p] = o & 255, p += m, o /= 256, l -= 8);
		e[n + p - m] |= h * 128;
	};
})), sn = (/* @__PURE__ */ _e(((e) => {
	var t = an(), n = on(), r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
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
		if (X(e, ArrayBuffer) || e && X(e.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (X(e, SharedArrayBuffer) || e && X(e.buffer, SharedArrayBuffer))) return h(e, t, n);
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
		if (X(e, Uint8Array)) {
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
		if (e.length !== void 0) return typeof e.length != "number" || Z(e.length) ? o(0) : p(e);
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
		if (X(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), X(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), !s.isBuffer(e) || !s.isBuffer(t)) throw TypeError("The \"buf1\", \"buf2\" arguments must be one of type Buffer or Uint8Array");
		if (e === t) return 0;
		let n = e.length, r = t.length;
		for (let i = 0, a = Math.min(n, r); i < a; ++i) if (e[i] !== t[i]) {
			n = e[i], r = t[i];
			break;
		}
		return n < r ? -1 : +(r < n);
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
			if (X(t, Uint8Array)) i + t.length > r.length ? (s.isBuffer(t) || (t = s.from(t)), t.copy(r, i)) : Uint8Array.prototype.set.call(r, t, i);
			else if (s.isBuffer(t)) t.copy(r, i);
			else throw TypeError("\"list\" argument must be an Array of Buffers");
			i += t.length;
		}
		return r;
	};
	function y(e, t) {
		if (s.isBuffer(e)) return e.length;
		if (ArrayBuffer.isView(e) || X(e, ArrayBuffer)) return e.byteLength;
		if (typeof e != "string") throw TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + typeof e);
		let n = e.length, r = arguments.length > 2 && arguments[2] === !0;
		if (!r && n === 0) return 0;
		let i = !1;
		for (;;) switch (t) {
			case "ascii":
			case "latin1":
			case "binary": return n;
			case "utf8":
			case "utf-8": return q(e).length;
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return n * 2;
			case "hex": return n >>> 1;
			case "base64": return J(e).length;
			default:
				if (i) return r ? -1 : q(e).length;
				t = ("" + t).toLowerCase(), i = !0;
		}
	}
	s.byteLength = y;
	function b(e, t, n) {
		let r = !1;
		if ((t === void 0 || t < 0) && (t = 0), t > this.length || ((n === void 0 || n > this.length) && (n = this.length), n <= 0) || (n >>>= 0, t >>>= 0, n <= t)) return "";
		for (e ||= "utf8";;) switch (e) {
			case "hex": return M(this, t, n);
			case "utf8":
			case "utf-8": return k(this, t, n);
			case "ascii": return j(this, t, n);
			case "latin1":
			case "binary": return ne(this, t, n);
			case "base64": return O(this, t, n);
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return N(this, t, n);
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
		return e === 0 ? "" : arguments.length === 0 ? k(this, 0, e) : b.apply(this, arguments);
	}, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(e) {
		if (!s.isBuffer(e)) throw TypeError("Argument must be a Buffer");
		return this === e ? !0 : s.compare(this, e) === 0;
	}, s.prototype.inspect = function() {
		let t = "", n = e.INSPECT_MAX_BYTES;
		return t = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(), this.length > n && (t += " ... "), "<Buffer " + t + ">";
	}, r && (s.prototype[r] = s.prototype.inspect), s.prototype.compare = function(e, t, n, r, i) {
		if (X(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), !s.isBuffer(e)) throw TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof e);
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
		return a < o ? -1 : +(o < a);
	};
	function S(e, t, n, r, i) {
		if (e.length === 0) return -1;
		if (typeof n == "string" ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, Z(n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
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
			if (Z(r)) return o;
			e[n + o] = r;
		}
		return o;
	}
	function T(e, t, n, r) {
		return Y(q(t, e.length - n), e, n, r);
	}
	function E(e, t, n, r) {
		return Y(oe(t), e, n, r);
	}
	function D(e, t, n, r) {
		return Y(J(t), e, n, r);
	}
	function ee(e, t, n, r) {
		return Y(se(t, e.length - n), e, n, r);
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
			case "binary": return E(this, e, t, n);
			case "base64": return D(this, e, t, n);
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return ee(this, e, t, n);
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
	function O(e, n, r) {
		return n === 0 && r === e.length ? t.fromByteArray(e) : t.fromByteArray(e.slice(n, r));
	}
	function k(e, t, n) {
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
		return te(r);
	}
	var A = 4096;
	function te(e) {
		let t = e.length;
		if (t <= A) return String.fromCharCode.apply(String, e);
		let n = "", r = 0;
		for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += A));
		return n;
	}
	function j(e, t, n) {
		let r = "";
		n = Math.min(e.length, n);
		for (let i = t; i < n; ++i) r += String.fromCharCode(e[i] & 127);
		return r;
	}
	function ne(e, t, n) {
		let r = "";
		n = Math.min(e.length, n);
		for (let i = t; i < n; ++i) r += String.fromCharCode(e[i]);
		return r;
	}
	function M(e, t, n) {
		let r = e.length;
		(!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
		let i = "";
		for (let r = t; r < n; ++r) i += ce[e[r]];
		return i;
	}
	function N(e, t, n) {
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
	function P(e, t, n) {
		if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
		if (e + t > n) throw RangeError("Trying to access beyond buffer length");
	}
	s.prototype.readUintLE = s.prototype.readUIntLE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = this[e], i = 1, a = 0;
		for (; ++a < t && (i *= 256);) r += this[e + a] * i;
		return r;
	}, s.prototype.readUintBE = s.prototype.readUIntBE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = this[e + --t], i = 1;
		for (; t > 0 && (i *= 256);) r += this[e + --t] * i;
		return r;
	}, s.prototype.readUint8 = s.prototype.readUInt8 = function(e, t) {
		return e >>>= 0, t || P(e, 1, this.length), this[e];
	}, s.prototype.readUint16LE = s.prototype.readUInt16LE = function(e, t) {
		return e >>>= 0, t || P(e, 2, this.length), this[e] | this[e + 1] << 8;
	}, s.prototype.readUint16BE = s.prototype.readUInt16BE = function(e, t) {
		return e >>>= 0, t || P(e, 2, this.length), this[e] << 8 | this[e + 1];
	}, s.prototype.readUint32LE = s.prototype.readUInt32LE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
	}, s.prototype.readUint32BE = s.prototype.readUInt32BE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
	}, s.prototype.readBigUInt64LE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24, i = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + n * 2 ** 24;
		return BigInt(r) + (BigInt(i) << BigInt(32));
	}), s.prototype.readBigUInt64BE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e], i = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n;
		return (BigInt(r) << BigInt(32)) + BigInt(i);
	}), s.prototype.readIntLE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = this[e], i = 1, a = 0;
		for (; ++a < t && (i *= 256);) r += this[e + a] * i;
		return i *= 128, r >= i && (r -= 2 ** (8 * t)), r;
	}, s.prototype.readIntBE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = t, i = 1, a = this[e + --r];
		for (; r > 0 && (i *= 256);) a += this[e + --r] * i;
		return i *= 128, a >= i && (a -= 2 ** (8 * t)), a;
	}, s.prototype.readInt8 = function(e, t) {
		return e >>>= 0, t || P(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e];
	}, s.prototype.readInt16LE = function(e, t) {
		e >>>= 0, t || P(e, 2, this.length);
		let n = this[e] | this[e + 1] << 8;
		return n & 32768 ? n | 4294901760 : n;
	}, s.prototype.readInt16BE = function(e, t) {
		e >>>= 0, t || P(e, 2, this.length);
		let n = this[e + 1] | this[e] << 8;
		return n & 32768 ? n | 4294901760 : n;
	}, s.prototype.readInt32LE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
	}, s.prototype.readInt32BE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
	}, s.prototype.readBigInt64LE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (n << 24);
		return (BigInt(r) << BigInt(32)) + BigInt(t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24);
	}), s.prototype.readBigInt64BE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
		return (BigInt(r) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n);
	}), s.prototype.readFloatLE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), n.read(this, e, !0, 23, 4);
	}, s.prototype.readFloatBE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), n.read(this, e, !1, 23, 4);
	}, s.prototype.readDoubleLE = function(e, t) {
		return e >>>= 0, t || P(e, 8, this.length), n.read(this, e, !0, 52, 8);
	}, s.prototype.readDoubleBE = function(e, t) {
		return e >>>= 0, t || P(e, 8, this.length), n.read(this, e, !1, 52, 8);
	};
	function F(e, t, n, r, i, a) {
		if (!s.isBuffer(e)) throw TypeError("\"buffer\" argument must be a Buffer instance");
		if (t > i || t < a) throw RangeError("\"value\" argument is out of bounds");
		if (n + r > e.length) throw RangeError("Index out of range");
	}
	s.prototype.writeUintLE = s.prototype.writeUIntLE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, n >>>= 0, !r) {
			let r = 2 ** (8 * n) - 1;
			F(this, e, t, n, r, 0);
		}
		let i = 1, a = 0;
		for (this[t] = e & 255; ++a < n && (i *= 256);) this[t + a] = e / i & 255;
		return t + n;
	}, s.prototype.writeUintBE = s.prototype.writeUIntBE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, n >>>= 0, !r) {
			let r = 2 ** (8 * n) - 1;
			F(this, e, t, n, r, 0);
		}
		let i = n - 1, a = 1;
		for (this[t + i] = e & 255; --i >= 0 && (a *= 256);) this[t + i] = e / a & 255;
		return t + n;
	}, s.prototype.writeUint8 = s.prototype.writeUInt8 = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 1, 255, 0), this[t] = e & 255, t + 1;
	}, s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 65535, 0), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
	}, s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
	}, s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = e & 255, t + 4;
	}, s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
	};
	function I(e, t, n, r, i) {
		W(t, r, i, e, n, 7);
		let a = Number(t & BigInt(4294967295));
		e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a;
		let o = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, n;
	}
	function L(e, t, n, r, i) {
		W(t, r, i, e, n, 7);
		let a = Number(t & BigInt(4294967295));
		e[n + 7] = a, a >>= 8, e[n + 6] = a, a >>= 8, e[n + 5] = a, a >>= 8, e[n + 4] = a;
		let o = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[n + 3] = o, o >>= 8, e[n + 2] = o, o >>= 8, e[n + 1] = o, o >>= 8, e[n] = o, n + 8;
	}
	s.prototype.writeBigUInt64LE = Q(function(e, t = 0) {
		return I(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
	}), s.prototype.writeBigUInt64BE = Q(function(e, t = 0) {
		return L(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
	}), s.prototype.writeIntLE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, !r) {
			let r = 2 ** (8 * n - 1);
			F(this, e, t, n, r - 1, -r);
		}
		let i = 0, a = 1, o = 0;
		for (this[t] = e & 255; ++i < n && (a *= 256);) e < 0 && o === 0 && this[t + i - 1] !== 0 && (o = 1), this[t + i] = (e / a >> 0) - o & 255;
		return t + n;
	}, s.prototype.writeIntBE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, !r) {
			let r = 2 ** (8 * n - 1);
			F(this, e, t, n, r - 1, -r);
		}
		let i = n - 1, a = 1, o = 0;
		for (this[t + i] = e & 255; --i >= 0 && (a *= 256);) e < 0 && o === 0 && this[t + i + 1] !== 0 && (o = 1), this[t + i] = (e / a >> 0) - o & 255;
		return t + n;
	}, s.prototype.writeInt8 = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = e & 255, t + 1;
	}, s.prototype.writeInt16LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 32767, -32768), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
	}, s.prototype.writeInt16BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
	}, s.prototype.writeInt32LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 2147483647, -2147483648), this[t] = e & 255, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4;
	}, s.prototype.writeInt32BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
	}, s.prototype.writeBigInt64LE = Q(function(e, t = 0) {
		return I(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
	}), s.prototype.writeBigInt64BE = Q(function(e, t = 0) {
		return L(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
	});
	function R(e, t, n, r, i, a) {
		if (n + r > e.length || n < 0) throw RangeError("Index out of range");
	}
	function z(e, t, r, i, a) {
		return t = +t, r >>>= 0, a || R(e, t, r, 4, 34028234663852886e22, -34028234663852886e22), n.write(e, t, r, i, 23, 4), r + 4;
	}
	s.prototype.writeFloatLE = function(e, t, n) {
		return z(this, e, t, !0, n);
	}, s.prototype.writeFloatBE = function(e, t, n) {
		return z(this, e, t, !1, n);
	};
	function B(e, t, r, i, a) {
		return t = +t, r >>>= 0, a || R(e, t, r, 8, 17976931348623157e292, -17976931348623157e292), n.write(e, t, r, i, 52, 8), r + 8;
	}
	s.prototype.writeDoubleLE = function(e, t, n) {
		return B(this, e, t, !0, n);
	}, s.prototype.writeDoubleBE = function(e, t, n) {
		return B(this, e, t, !1, n);
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
	var V = {};
	function H(e, t, n) {
		V[e] = class extends n {
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
	H("ERR_BUFFER_OUT_OF_BOUNDS", function(e) {
		return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
	}, RangeError), H("ERR_INVALID_ARG_TYPE", function(e, t) {
		return `The "${e}" argument must be of type number. Received type ${typeof t}`;
	}, TypeError), H("ERR_OUT_OF_RANGE", function(e, t, n) {
		let r = `The value of "${e}" is out of range.`, i = n;
		return Number.isInteger(n) && Math.abs(n) > 2 ** 32 ? i = U(String(n)) : typeof n == "bigint" && (i = String(n), (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (i = U(i)), i += "n"), r += ` It must be ${t}. Received ${i}`, r;
	}, RangeError);
	function U(e) {
		let t = "", n = e.length, r = +(e[0] === "-");
		for (; n >= r + 4; n -= 3) t = `_${e.slice(n - 3, n)}${t}`;
		return `${e.slice(0, n)}${t}`;
	}
	function re(e, t, n) {
		G(t, "offset"), (e[t] === void 0 || e[t + n] === void 0) && K(t, e.length - (n + 1));
	}
	function W(e, t, n, r, i, a) {
		if (e > n || e < t) {
			let r = typeof t == "bigint" ? "n" : "", i;
			throw i = a > 3 ? t === 0 || t === BigInt(0) ? `>= 0${r} and < 2${r} ** ${(a + 1) * 8}${r}` : `>= -(2${r} ** ${(a + 1) * 8 - 1}${r}) and < 2 ** ${(a + 1) * 8 - 1}${r}` : `>= ${t}${r} and <= ${n}${r}`, new V.ERR_OUT_OF_RANGE("value", i, e);
		}
		re(r, i, a);
	}
	function G(e, t) {
		if (typeof e != "number") throw new V.ERR_INVALID_ARG_TYPE(t, "number", e);
	}
	function K(e, t, n) {
		throw Math.floor(e) === e ? t < 0 ? new V.ERR_BUFFER_OUT_OF_BOUNDS() : new V.ERR_OUT_OF_RANGE(n || "offset", `>= ${+!!n} and <= ${t}`, e) : (G(e, n), new V.ERR_OUT_OF_RANGE(n || "offset", "an integer", e));
	}
	var ie = /[^+/0-9A-Za-z-_]/g;
	function ae(e) {
		if (e = e.split("=")[0], e = e.trim().replace(ie, ""), e.length < 2) return "";
		for (; e.length % 4 != 0;) e += "=";
		return e;
	}
	function q(e, t) {
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
	function oe(e) {
		let t = [];
		for (let n = 0; n < e.length; ++n) t.push(e.charCodeAt(n) & 255);
		return t;
	}
	function se(e, t) {
		let n, r, i, a = [];
		for (let o = 0; o < e.length && !((t -= 2) < 0); ++o) n = e.charCodeAt(o), r = n >> 8, i = n % 256, a.push(i), a.push(r);
		return a;
	}
	function J(e) {
		return t.toByteArray(ae(e));
	}
	function Y(e, t, n, r) {
		let i;
		for (i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
		return i;
	}
	function X(e, t) {
		return e instanceof t || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === t.name;
	}
	function Z(e) {
		return e !== e;
	}
	var ce = (function() {
		let e = "0123456789abcdef", t = Array(256);
		for (let n = 0; n < 16; ++n) {
			let r = n * 16;
			for (let i = 0; i < 16; ++i) t[r + i] = e[n] + e[i];
		}
		return t;
	})();
	function Q(e) {
		return typeof BigInt > "u" ? le : e;
	}
	function le() {
		throw Error("BigInt not supported");
	}
})))(), cn = async (e) => {
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
}, ln = (e) => {
	e = atob(e);
	let t = new ArrayBuffer(e.length), n = new Uint8Array(t);
	for (let t = 0; t < e.length; t++) n[t] = e.charCodeAt(t);
	return n;
}, un = "data:image/#{encoding};base64,#{data}", dn = ({ data: e, encoding: t, alt: n }) => {
	let r = un, [i, a] = c(void 0);
	return Ut(t) && (t = "png"), Ut(n) && (n = "ERROR"), cn(new Blob([ln(e)])).then((e) => {
		r = r.replace("#{encoding}", t), r = r.replace("#{data}", sn.Buffer.from(e).toString("base64")), a(r);
	}), /* @__PURE__ */ M(Box, {
		component: "img",
		src: i,
		alt: n,
		sx: {
			width: "100%",
			height: "auto",
			display: "block",
			maxWidth: "100%"
		}
	});
}, fn = (e) => {
	let t = "", n = Object.keys(e).map((t) => {
		let n = e[t];
		return Ut(n) ? "" : `${encodeURIComponent(t)}=${encodeURIComponent(n)}`;
	}).filter((e) => e !== "").join("&");
	if (n) {
		let e = t.indexOf("#");
		e !== -1 && (t = t.slice(0, e)), t += (t.indexOf("?") === -1 ? "?" : "&") + n;
	}
	return t;
}, pn = (e, { baseHeaders: t, handleErr: n, handleFinally: r, debug: i } = {}) => {
	let a = {
		"Content-Type": "application/json",
		...t
	}, o = (e) => {
		console.log(e);
	}, s = ({ endpoint: t, inputHeaders: s, fetchParams: c, args: l }) => {
		Ut(t) && (t = "");
		let u = e + t, d = {
			...a,
			...s
		};
		Object.keys(d).forEach((e) => {
			Ut(d[e]) && delete d[e];
		});
		let f = {
			method: "GET",
			headers: { ...d },
			...c
		};
		return Ut(l) || (f.method === "POST" && (f.body = JSON.stringify(l)), f.method === "GET" && (u += fn(l))), fetch(u, f).catch((e) => n(e)).finally(() => {
			i && o({
				endpoint: t,
				inputHeaders: s,
				fetchParams: c
			}), !Ut(r) && r({
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
pn("http://localhost:8080/", {
	handleErr: (e) => console.log(e),
	debug: !0
});
var mn = ({ endpoint: e, handleErr: t }) => {
	Ut(t) && (t = (e) => console.log(e));
	let n = pn(e, { handleErr: t });
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
		schema: async (e, t = {}) => await n.fetchJson({
			endpoint: "/create",
			fetchParams: {
				method: "GET",
				...t
			},
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
}, hn = (e, t) => () => e.get(t), gn = ({ jsxKey: e, endpoint: t, inputProps: n }) => {
	let [r, a] = c([/* @__PURE__ */ M("option", {
		value: n.defaultValue,
		children: n.defaultValue
	}, e + "-" + n.defaultValue)]), o = mn({ endpoint: t });
	return i(() => {
		o.selectOptions().then((t) => {
			a(Object.keys(t).map((n) => {
				let r = t[n][Object.keys(t[n])[1]], i = t[n][Object.keys(t[n])[0]];
				return /* @__PURE__ */ M("option", {
					value: i,
					children: r
				}, e + "-" + n);
			}));
		});
	}, []), /* @__PURE__ */ M(w, {
		...n,
		defaultValue: n.defaultValue,
		children: [...r || /* @__PURE__ */ M(ne, {})]
	}, e);
}, _n = ({ buttons: e, endpoint: t, title: n, title_topology_params: r, button_stack_params: i, header_stack_params: a, outer_stack_params: o, ...s }) => {
	let c = e?.map((e) => e);
	return /* @__PURE__ */ N(T, {
		direction: "column",
		spacing: 1,
		sx: {
			width: "100%",
			justifyContent: "flex-start",
			alignItems: "center"
		},
		...o,
		children: [/* @__PURE__ */ N(T, {
			direction: "row",
			...a,
			children: [/* @__PURE__ */ M(te, {
				variant: "h6",
				sx: {
					m: 2,
					whiteSpace: "nowrap",
					overflow: "hidden",
					textOverflow: "ellipsis"
				},
				...r,
				children: n
			}), /* @__PURE__ */ M(T, {
				direction: "row",
				spacing: 2,
				sx: {
					pr: 16,
					pl: 16,
					justifyContent: "flex-end",
					width: "20%",
					alignItems: "center"
				},
				...i,
				children: c
			})]
		}), /* @__PURE__ */ M(tr, {
			...s,
			endpoint: t
		})]
	});
}, vn = ({ api: e, endpoint: t, refKey: n, register_component: r, ...a }) => {
	let o = zt();
	return i(() => {
		(async () => {
			let e = o?.get(n);
			if (!e) return;
			let t = { current: { ...e } };
			Gn({ current: e }, { id: 17 }), await Zn(t);
		})();
	}, [o]), /* @__PURE__ */ M(_n, {
		api: e,
		endpoint: "get_paginated",
		buttons: [],
		title: "",
		refKey: n,
		register_component: r,
		...a
	});
}, yn = ({ jsxKey: e, key: t, inputProps: n }) => {
	let r;
	return t.charAt(t.length - 1) === "D" && t.charAt(t.length - 2) === "I" || t.charAt(t.length - 1) === "S" && t.charAt(t.length - 2) === "D" ? (t.charAt(t.length - 1) === "D" && t.charAt(t.length - 2) === "I" && (r = t.slice(5, t.length - 2)), t.charAt(t.length - 1) === "S" && t.charAt(t.length - 2) === "D" && (r = t.slice(5, t.length - 3), n = {
		...n,
		multiple: !0
	}), /* @__PURE__ */ M(gn, {
		endpoint: r,
		jsxKey: e,
		inputProps: n
	})) : null;
}, bn = () => ({ formRef: e, jsxKey: t, key: n, currentType: r, inputProps: i }) => {
	let a = yn({
		jsxKey: t,
		key: n,
		inputProps: i
	});
	if (!Ut(a)) return a;
	if (a = /* @__PURE__ */ M(b, {
		type: "text",
		...i
	}, t), r === "number" || r === "bigint") return /* @__PURE__ */ M(b, {
		type: "number",
		...i
	}, t);
	if (r === "boolean") return /* @__PURE__ */ M(E, {
		...i,
		defaultChecked: i.defaultValue
	}, t);
	if (r === "object") {
		if (i.defaultValue.Subtype === 20) return /* @__PURE__ */ M(vn, {
			api: e.current?.api,
			refKey: "csv_grid",
			register_component: !0
		}, t);
		if (i.defaultValue.Subtype === 19) return /* @__PURE__ */ M(rr, { data: Yt(wn(e), n.slice(0, n.lastIndexOf(".")))?.value.Data }, t);
		if (i.defaultValue.Subtype === 17) return /* @__PURE__ */ M(dn, { data: Yt(wn(e), n.slice(0, n.lastIndexOf(".")))?.value.Data }, t);
		if (i.defaultValue.Subtype === 16 || i.defaultValue.Subtype === 0) {
			let r = Yt(wn(e), n.slice(0, n.lastIndexOf(".")));
			return i.name = n.slice(0, n.lastIndexOf(".")) + ".Data", /* @__PURE__ */ M(rn, {
				fileData: JSON.stringify(r?.value.Data, null, 2),
				inputProps: i,
				subtype: i.defaultValue.Subtype
			}, t);
		}
		if (!Ut(i.defaultValue.Subtype) || !Ut(i.defaultValue.Data)) return null;
		if (Array.isArray(i.defaultValue)) return Object.keys(i.defaultValue).map((e) => /* @__PURE__ */ M(b, {
			type: "text",
			...i,
			defaultValue: i.defaultValue[e]
		}, t));
		if (Ut(i.defaultValue)) return;
		let r = Object.keys(i.defaultValue)[0], a = i.defaultValue[r];
		return Ht(a) ? /* @__PURE__ */ M(tn, {
			inputKey: n,
			inputProps: i
		}) : void 0;
	}
	return a;
}, xn = (e, t = {}) => ({
	index: 0,
	elements: {},
	nameIndex: {},
	labels: {},
	useLabels: {},
	element_component: {},
	container: void 0,
	handleOnClose: void 0,
	elementSelector: e || bn(),
	context: t
}), Sn = (e, t) => {
	let n = e.current;
	n.handleClose = t, e.current = n;
}, Cn = (e, t) => {
	let n = e.current;
	Ut(n) || (n.container = t), e.current = n;
}, wn = (e) => e.current.container, Tn = (e, t) => {
	let n = e.current, r = n.labels[t], i = n.element_component[t];
	return n.useLabels[t] ? /* @__PURE__ */ N(T, {
		direction: "column",
		spacing: 1,
		sx: {
			width: "100%",
			pb: 1
		},
		children: [/* @__PURE__ */ M(u, {
			sx: { width: "100%" },
			children: r
		}), /* @__PURE__ */ M(u, {
			sx: { width: "100%" },
			children: i
		})]
	}, t) : /* @__PURE__ */ N(T, {
		direction: "row",
		gap: 1,
		sx: {
			justifyContent: "space-between",
			width: "100%",
			borderBottom: "1px solid rgba(0, 0, 0, 0.42)",
			pb: .5,
			alignItems: "flex-end"
		},
		children: [/* @__PURE__ */ M(u, {
			sx: {
				width: "50%",
				flexShrink: 0
			},
			children: r
		}), /* @__PURE__ */ M(u, {
			sx: { flexGrow: 1 },
			children: i
		})]
	}, t);
}, En = (e) => {
	let t = {};
	return Object.keys(e.current.nameIndex).map((n, r) => {
		t[n] = Tn(e, r);
	}), /* @__PURE__ */ M(T, {
		direction: "column",
		gap: 0,
		sx: {
			flexGrow: 1,
			width: "100%"
		},
		children: Object.keys(t).map((e) => t[e])
	});
}, Dn = (e) => {
	let t = e.current;
	return { onChange: (n) => {
		let r = n.target.value, i = n.target.selectedOptions;
		if (!Ut(i)) {
			let e = [].slice.call(i);
			r = e.map((e) => e.value), e.length === 1 && (r = r[0]);
		}
		n.target.type === "datetime-local" && (r = new Date(Date.parse(r)).toISOString());
		let a = n.target.name, o = t.nameIndex[a];
		Ut(o) && (t.nameIndex[a] = t.index, o = t.index, e.current = t), t.elements[o] = r;
		let s = a.split("."), c = s.slice(0, s.length - 1).join("."), l = s.slice(s.length - 1);
		Ut(Yt(wn(e), c)) && (c = s.slice(0, s.length - 2).join(".")), n.target.type === "checkbox" && (r = n.currentTarget.checked), e.current = t, Cn(e, $t(wn(e), c, l, r)), e.current = t;
	} };
}, On = (e, t) => {
	let n = e.current, r = n.nameIndex[t];
	return n.elements[r];
}, kn = (e, t, n) => {
	let r = typeof n, i = e.current, a = t + i.index, o = {
		name: t,
		defaultValue: On(e, t),
		onChange: Dn(e).onChange,
		sx: { width: "100%" }
	};
	return i.elementSelector({
		key: t,
		formRef: e,
		jsxKey: a,
		currentType: r,
		inputProps: o
	});
}, An = (e, t, n) => {
	let r = e.current, i = Wt(t.replace(/root\./, ""), "_"), a = i.split(".");
	if (!a.some((e) => e.toLowerCase() === "data")) {
		if (Ut(r.nameIndex[t])) {
			r.nameIndex[t] = r.index, r.elements[r.index] = n;
			let o = kn(e, t, n);
			if (!Ut(o)) {
				let e = a[a.length - 1], n = e.toLowerCase() === "subtype", s = /^\d+$/.test(e);
				r.useLabels[r.index] = n || !s;
				let c = i;
				n && a.length > 1 && (c = a[a.length - 2]), r.labels[r.index] = /* @__PURE__ */ M(S, {
					column: t,
					children: c
				}, "Label" + t + r.index), r.element_component[r.index] = o, r.index++;
			}
		}
		e.current = r;
	}
}, jn = ({ formRef: e, container: t }) => {
	Zt(t, (t) => {
		let n = t.path, r = t.value;
		if (Array.isArray(r)) {
			let t = [];
			Object.keys(r).forEach((e) => {
				Ut(r[e]) || Array.isArray(r[e]) || t.push(r[e]);
			}), t.length > 0 && An(e, n, t);
			return;
		}
		Object.keys(r).forEach((t) => {
			Ut(r[t]) || (typeof r[t] == "object" && Object.keys(r[t]).forEach((i) => {
				let a = {};
				a[i] = r[t][i], An(e, n + "." + t + "." + i, a);
			}), Ht(r[t]) && An(e, n + "." + t, r[t]));
		});
	});
}, Mn = ({ title: e, button_title: t, getButton: n, tabs: r, getSchema: i, handleSave: o, elementSelector: l, footerButtons: f, refKey: p, register_component: m = !1, context: h = null }) => {
	let g = Bt(p, m), _ = s(null), [v, y] = c(!1), b = () => {
		y(!1);
	}, x = () => {
		o(wn(_).value), y(!1);
	};
	_.current ||= xn(l, {
		setShow: (e) => {
			y(e);
		},
		...h
	}), a(() => (g(_.current), () => g(null)), [g]);
	let [S, C] = c(void 0), [w, E] = c(0), O = async () => {
		try {
			Cn(_, en(null, [], ".", await i())), Sn(_, b), jn({
				formRef: _,
				container: wn(_)
			}), C(En(_)), y(!0);
		} catch (e) {
			console.error("Failed to load schema:", e);
		}
	};
	return f ||= [
		/* @__PURE__ */ M(d, {
			onClick: () => {
				let e = {};
				e[_.current.index] = "";
				let t = wn(_);
				Ut(Yt(t, "root.fields")) && Cn(_, Jt(t, "root.fields", {})), An(_, "root.fields." + _.current.index, e), C(En(_));
			},
			children: "Add Field"
		}),
		/* @__PURE__ */ M(d, {
			onClick: x,
			children: "Save"
		}),
		/* @__PURE__ */ M(d, {
			onClick: b,
			children: "Close"
		})
	], /* @__PURE__ */ N(T, {
		direction: "row",
		spacing: 1,
		children: [n ? n(O) : /* @__PURE__ */ M(d, {
			onClick: O,
			children: t
		}), /* @__PURE__ */ M(Vt, {
			title: e,
			body: /* @__PURE__ */ N(u, {
				sx: { width: "100%" },
				children: [
					r && /* @__PURE__ */ M(u, {
						sx: {
							borderBottom: 1,
							borderColor: "divider"
						},
						children: /* @__PURE__ */ N(ee, {
							value: w,
							onChange: (e, t) => E(t),
							"aria-label": "custom tabs",
							children: [/* @__PURE__ */ M(D, { label: "File Upload" }), /* @__PURE__ */ M(D, { label: "File Viewer" })]
						})
					}),
					w === 0 && /* @__PURE__ */ M(u, {
						sx: {
							borderBottom: 1,
							borderColor: "divider",
							width: "100%"
						},
						children: S
					}),
					w === 1 && /* @__PURE__ */ M(u, {
						sx: { p: 3 },
						children: /* @__PURE__ */ M("pre", { children: JSON.stringify(wn(_)?.value, null, 2) })
					})
				]
			}),
			show: v,
			footer: f
		})]
	});
}, Nn = ({ title: e, show: t, onCancel: n, onConfirm: r }) => /* @__PURE__ */ M(Vt, {
	title: e || "Are you sure?",
	show: t,
	footer: /* @__PURE__ */ N(T, {
		direction: "column",
		gap: 3,
		children: [/* @__PURE__ */ M(d, {
			onClick: () => {
				Ut(n) || n();
			},
			children: "Cancel"
		}), /* @__PURE__ */ M(d, {
			onClick: () => {
				Ut(r) || r();
			},
			children: "Confirm"
		})]
	})
}), Pn = ({ refreshGrid: e, api: t, id: n, title: r, footerButtons: i, ...a }) => /* @__PURE__ */ M(Mn, {
	title: r,
	button_title: "Update",
	getSchema: hn(t, n),
	handleSave: (r) => {
		t.update(r, n).then(() => e());
	},
	footerButtons: i,
	register_component: !0,
	refKey: String(n),
	...a
}), Fn = ({ refreshGrid: e, api: t, id: n }) => {
	let [r, i] = c(!1);
	return /* @__PURE__ */ N(T, {
		direction: "row",
		spacing: 1,
		sx: {
			width: "100%",
			justifyContent: "center",
			alignItems: "center"
		},
		children: [/* @__PURE__ */ M(d, {
			onClick: () => {
				i(!r);
			},
			children: "Delete"
		}), /* @__PURE__ */ M(Nn, {
			onConfirm: () => {
				t.deleteId(n).then(e());
			},
			show: r
		})]
	});
}, In = ({ handleRefreshGrid: e, api: t, id: n, params: r }) => {
	let i = {
		...r,
		refreshGrid: e,
		api: t,
		id: n
	};
	return /* @__PURE__ */ N(T, {
		direction: "row",
		spacing: 1,
		sx: {
			width: "100%",
			justifyContent: "center",
			alignItems: "center"
		},
		children: [/* @__PURE__ */ M(Pn, { ...i }), /* @__PURE__ */ M(Fn, { ...i })]
	});
}, Ln = (e, t) => {
	let n = e.current;
	Qt(t, (e) => {
		let t = e.value, r = e.path, i = typeof t;
		if (n.headers_ri[r] !== void 0) return;
		let a = "string";
		i === "number" ? a = "number" : r.toLowerCase().includes("date") || r.toLowerCase().includes("modified") ? a = "date" : i === "string" && (a = "string"), n.headers[n.index] = {
			field: r,
			type: a,
			headerName: r
		}, n.rows[n.index] = [], n.headers_ri[r] = n.index, n.index++;
	}), e.current = n;
}, Rn = (e) => {
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
}, zn = (e, t) => {
	let n = e.current;
	if (!n) return;
	n.rows = [[], []], n.row_count = 0;
	let r = n.headers_ri.Field, i = n.headers_ri.Value;
	Object.entries(t).forEach(([e, t]) => {
		if (r !== void 0 && n.rows[r].push(Wt(e, "_")), i !== void 0) {
			let e = Array.isArray(t) ? t.join(", ") : t;
			n.rows[i].push(e);
		}
		n.row_count++;
	}), e.current = n;
}, Bn = (e, t) => {
	let n = e.current;
	n && (n.rows = [], n.row_count = 0, n.headers.forEach(() => {
		n.rows.push([]);
	}), Qt(t, (e) => {
		if (Ht(e.value)) {
			let t = n.headers_ri[e.path];
			t !== void 0 && n.rows[t].push(e.value);
		}
	}), e.current = n);
}, Vn = (e) => {
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
}, Hn = (e) => {
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
}, Un = (e) => {
	let t = e.current;
	return !t || !t.headers ? [] : t.headers;
}, Wn = (e) => {
	let t = e.current, n = Object.keys(t.headers_ri).map((e) => ({
		field: e,
		sortable: !0,
		filterable: !0,
		headerName: Wt(e.split(".").pop(), "_"),
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
			renderCell: $n(e)
		}, r = Math.max(0, n.length - 1);
		n.splice(r, 0, t);
	}
	return n;
}, Gn = (e, t) => {
	let n = e.current;
	n && (n.args = {
		...n.args,
		...t
	}, e.current = n, n.refresh());
}, Kn = (e, t) => {
	let n = e.current;
	n && (n.args.sortModel = JSON.stringify(t), e.current = n);
}, qn = (e, t) => {
	let n = e.current;
	n && (n.args.filterModel = JSON.stringify(t), e.current = n);
}, Jn = (e) => e.current.fetch_params, Yn = (e, t) => ({ getRows: async (n) => {
	let r = e.current;
	if (!r) return {
		rows: [],
		rowCount: 0
	};
	qn(e, n.filterModel), Kn(e, n.sortModel);
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
		Array.isArray(t) && t.length === 0 || Ut(t) || (s[e] = t);
	}), Ut(n.sortModel) || Array.isArray(n.sortModel) && n.sortModel.length === 0 && delete s.sortModel, Ut(n.filterModel) || Array.isArray(n.filterModel.items) && n.filterModel.items.length === 0 && delete s.filterModel;
	let c = await r.api?.at("/" + r.endpoint, {
		fetchParams: {
			method: "GET",
			...Jn(e)
		},
		args: s
	}), l = en(null, [], ".", c.results);
	return Ln(e, l), Bn(e, l), r.row_count = c.pagination?.total || 0, e.current = r, t(), {
		rows: Hn(e),
		rowCount: c.pagination?.total || 0
	};
} }), Xn = (e) => e.current?.datasource, Zn = async (e) => {
	let t = e.current;
	if (!t) return;
	let n = t.gridRef.current;
	n.dataSource.cache.clear(), await n.dataSource.fetchRows(), t.refresh();
}, Qn = (e) => (t) => {
	let n = e.current;
	if (!n || n.rows.length === 0) return;
	let r = t.ids, i = n.rows[0].length, a = Array.from({ length: i }, (e, t) => t).filter((e) => {
		let t = n.rows[0][e];
		return r.has(t);
	});
	n.selected_data = n.rows.map((e) => a.map((t) => e[t])), n.selected_ids = t, e.current = n;
}, $n = (e) => {
	let t = e.current;
	if (t) return t.cellRenderer ? t.cellRenderer(e) : er(e);
}, er = (e) => {
	let t = zt();
	return (n) => {
		let r = e.current;
		if (!r) return;
		let i = (e = !1) => {
			let r = t?.get(String(n.id))?.context;
			if (!r) return;
			let i = r.setShow;
			i(e);
		}, a = /* @__PURE__ */ N(T, {
			direction: "column",
			spacing: 2,
			sx: { width: "100%" },
			children: [/* @__PURE__ */ N(T, {
				spacing: 3,
				direction: "row",
				children: [
					/* @__PURE__ */ M(u, {
						sx: { ...r.modal_header_sx },
						children: "Update"
					}),
					/* @__PURE__ */ M(u, { sx: { flexGrow: 1 } }, "spacer"),
					/* @__PURE__ */ M(y, {
						onClick: () => i(!1),
						sx: {
							backgroundColor: "black",
							color: "white"
						},
						children: /* @__PURE__ */ M(K, {})
					})
				]
			}), /* @__PURE__ */ M(T, {
				spacing: 3,
				direction: "row",
				children: Object.entries(r.modal_header_rows || []).map((e) => e)
			})]
		});
		return /* @__PURE__ */ M(In, {
			params: {
				footerButtons: [
					/* @__PURE__ */ M(d, {
						onClick: () => i(!1),
						children: "Close"
					}),
					/* @__PURE__ */ M(u, { sx: { flexGrow: 1 } }, "spacer"),
					/* @__PURE__ */ M(d, { children: "Update" })
				],
				title: a,
				...n.row
			},
			handleRefreshGrid: async () => await Zn(e),
			api: r.api,
			id: n.id
		});
	};
}, tr = ({ api: e, endpoint: t, row_details: n, refKey: r, cellRenderer: i, register_component: o = !1, toolbar: l = !1, checkbox_select: u = !1, datagrid_sx: d = void 0, grid_options: f = void 0, context: p = void 0 }) => {
	let m = Bt(r, o), h = s(null), [, g] = c(!1), [_, v] = c({
		page: 0,
		pageSize: 25
	}), [y, b] = c(0), [x, S] = c({ id: !1 }), C = I(), w = () => {
		h.current && b(h.current?.row_count ?? 0), g((e) => !e);
	};
	return h.current ||= {
		context: p,
		gridRef: C,
		index: 0,
		headers: [],
		headers_ri: {},
		rows: [],
		row_count: t ? 0 : void 0,
		datasource: t ? Yn(h, w) : void 0,
		paginationModel: {
			page: 0,
			pageSize: 5
		},
		args: {},
		selected_data: [],
		selected_ids: null,
		refresh: w,
		cellRenderer: i,
		filter_model: null,
		api: e,
		row_details: n,
		fetch_params: null,
		endpoint: t,
		register_component: o,
		refKey: r,
		modal_title: null,
		modal_header_rows: null,
		modal_header_sx: null,
		modal_header_row: null,
		...f
	}, a(() => (m(h.current), () => m(null)), [m]), /* @__PURE__ */ M(P, {
		apiRef: C,
		disableVirtualization: !0,
		columnVisibilityModel: x,
		onColumnVisibilityModelChange: (e) => S(e),
		rowCount: y,
		sx: {
			width: "100%",
			...d
		},
		columns: Wn(h),
		dataSource: Xn(h),
		pageSizeOptions: [
			25,
			50,
			100
		],
		paginationModel: _,
		onPaginationModelChange: (e) => {
			v(e);
		},
		onRowSelectionModelChange: (e) => Qn(h)(e),
		paginationMode: "server",
		sortingMode: "server",
		filterMode: "server",
		autosizeOnMount: !0,
		autosizeOptions: {
			includeOutliers: !0,
			includeHeaders: !0
		},
		checkboxSelection: u,
		showToolbar: l,
		getRowId: (e) => e.id,
		onDataSourceError: (e) => {
			console.error("DataGrid Error Type:", e.name), console.error("DataGrid Error Message:", e.message), e.cause && (console.group("Original Error Cause"), console.error("Message:", e.cause.message), console.error("Stack:", e.cause.stack), console.groupEnd()), e instanceof F ? console.warn("Fetch failed. Check your API mock or network.") : console.warn("Row update failed.");
		},
		...f
	});
};
j({
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
});
var nr = () => {
	let e = {
		position: "sticky",
		zIndex: 2,
		backgroundColor: "white"
	}, t = {
		position: "sticky",
		width: "100%",
		zIndex: 3,
		backgroundColor: "#191E23 !important"
	};
	return {
		"& .MuiDataGrid-columnHeader-last": {
			width: "100%",
			flex: 2
		},
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
		"& .MuiDataGrid-main": { overflow: "auto" },
		"&": {
			width: "100%",
			display: "flex"
		}
	};
}, rr = ({ data: e, ...t }) => {
	let n = zt(), [r, a] = c({
		rows: [],
		columns: []
	});
	return i(() => {
		(async () => {
			let t = n?.get("key_value_grid");
			if (!t) return;
			let r = { current: { ...t } };
			Rn(r), zn(r, e), a({
				rows: [...Vn(r)],
				columns: [...Un(r)]
			}), await Zn(r);
		})();
	}, [e, n]), /* @__PURE__ */ M(tr, {
		register_component: !0,
		datagrid_sx: nr(),
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
}, ir = t(null), ar = () => r(ir), or = (e, t = !0) => {
	let n = ar();
	return (r) => {
		t && r ? n?.register(e, r) : n?.unregister(e);
	};
}, sr = ({ title: e, body: t, show: n, footer: r, title_sx: i, footer_sx: a, content_sx: o, paper_sx: s }) => /* @__PURE__ */ N(h, {
	open: n,
	maxWidth: "lg",
	fullWidth: !0,
	scroll: "paper",
	slotProps: { paper: { sx: {
		maxHeight: "70vh",
		display: "flex",
		flexDirection: "column",
		...s
	} } },
	"aria-labelledby": "centered-modal-title",
	children: [
		/* @__PURE__ */ M(v, {
			id: "centered-modal-title",
			sx: { ...i },
			children: e
		}),
		/* @__PURE__ */ M(_, {
			dividers: !0,
			sx: { ...o },
			children: t
		}),
		/* @__PURE__ */ M(g, {
			sx: a,
			children: r
		})
	]
}), cr = (e) => {
	if (e === null) return !0;
	let t = typeof e;
	return t === "string" || t === "number" || t === "boolean" || t === "undefined" || t === "symbol" || t === "bigint" || t === "int";
}, lr = (e) => e == null, ur = (e, t) => lr(e) ? "" : e.split(t).map((e) => e.charAt(0).toUpperCase() + e.slice(1)).join(" "), dr = "Values", fr = "Containers", pr = (e, t, n, r) => {
	let i = r || {
		[dr]: /* @__PURE__ */ new Map(),
		[fr]: /* @__PURE__ */ new Map()
	}, a = e ? t : "root", o = {
		parent: e,
		path: a,
		value: n,
		children: [],
		root: e ? e.root : null,
		containerIndex: i
	};
	return e || (o.root = o), i[dr].set(a, n), i[fr].set(a, o), Object.freeze(o);
}, mr = (e, t, n) => {
	let r = pr(e, t, n, e.containerIndex);
	return {
		...e,
		children: [...e.children, r]
	};
}, hr = (e, t) => e.containerIndex[fr].get(t), gr = (e, t) => {
	for (let [n, r] of e.containerIndex[dr].entries()) t(n, r);
}, _r = (e, t) => {
	for (let [, n] of e.containerIndex[fr].entries()) t(n);
}, vr = (e, t, n = 2) => {
	gr(e, (e, r) => {
		let i = Object.keys(r);
		for (let a = 0; a < i.length; a++) {
			let o = e.split(".");
			o.push(i[a]);
			let s = o.slice(2).join("."), c = r[i[a]];
			o.length > n && cr(c) && t({
				i: a,
				value: c,
				path: s,
				fullpath: o.join("."),
				key: e,
				containerValue: r
			});
		}
	});
}, yr = (e, t, n, r) => {
	if (!e || !t) return e;
	let i = e.containerIndex[fr].get(t);
	if (!i) return console.warn(`Container at path "${t}" not found.`), e;
	let a = {};
	a[n] = r;
	let o = {
		...i.value,
		...a
	}, s = pr(i.parent, i.path, o, e.containerIndex);
	e.containerIndex[fr].set(t, s), e.containerIndex[dr].set(t, o);
	let c = s;
	for (; c.parent;) {
		let t = c.parent, n = t.children.map((e) => e.path === c.path ? c : e), r = c.path.split("."), i = r.slice(r.length - 1), a = { ...e.containerIndex[dr].get(t.path) };
		a[i] = o;
		let s = Object.freeze({
			...t,
			children: n,
			value: a
		});
		e.containerIndex[fr].set(s.path, s), c = s;
	}
	return e.containerIndex[fr].get("root");
}, br = (e = null, t = [], n = "_", ...r) => {
	e === null && (e = pr(null, "root", r.length === 0 ? {} : r[0]), t = ["root"]);
	let i = (e, t) => {
		let r = e.value;
		return typeof r == "object" && r && (Array.isArray(r) ? r.forEach((r, a) => {
			if (typeof r == "object" && r) {
				let o = [...t, String(a)];
				i(mr(e, o.join(n), r).children.at(-1), o);
			}
		}) : Object.entries(r).forEach(([r, a]) => {
			if (typeof a == "object" && a) {
				let o = [...t, r];
				i(mr(e, o.join(n), a).children.at(-1), o);
			}
		})), e;
	};
	return i(e, t);
}, xr = ({ inputKey: t, inputProps: n }) => {
	let r = Object.keys(n.defaultValue)[0], a = n.defaultValue[r], [o, s] = c(/* @__PURE__ */ M(b, {
		type: "text",
		onChange: n.onChange,
		defaultValue: a
	})), l = (t, r) => {
		s(e.cloneElement(o, {
			...n,
			defaultValue: a,
			name: t + "." + r
		}));
	}, [u, d] = c(/* @__PURE__ */ M(b, {
		type: "text",
		...n,
		defaultValue: r,
		onChange: (e) => l(t, e.target.value)
	}));
	return i(() => {
		l(t, r);
	}, []), /* @__PURE__ */ N(T, {
		direction: "horizontal",
		gap: 2,
		children: [u, o]
	});
}, Sr = ({ fileData: e, onChange: t, name: n }) => {
	let [r] = V(), a = s("");
	return i(() => {
		e && (async () => {
			if (!e) return;
			let t = String(e).replace(/^"|"$/g, "").replace(/\\n/g, "<br/>");
			t !== a.current && (a.current = t, r.update(() => {
				let e = re();
				e.clear();
				let n = U(r, new DOMParser().parseFromString(`<div>${t}</div>`, "text/html"));
				n.length > 0 && e.append(...n);
			}));
		})();
	}, [e, r]), i(() => r.registerUpdateListener(({ editorState: e }) => {
		e.read(() => {
			let e = H(r);
			a.current = e, t({ target: {
				value: e,
				name: n
			} });
		});
	}), [
		r,
		t,
		n
	]), null;
}, Cr = ({ fileData: e, subtype: t, inputProps: n }) => /* @__PURE__ */ M(u, {
	sx: { width: "100%" },
	children: /* @__PURE__ */ M(C, {
		variant: "outlined",
		sx: {
			p: 2,
			minHeight: "200px",
			position: "relative"
		},
		children: /* @__PURE__ */ N(L, {
			initialConfig: {
				namespace: "MyEditor",
				nodes: [W, G],
				theme: {},
				onError: (e) => console.error("Lexical Error:", e),
				editable: t !== 0
			},
			children: [/* @__PURE__ */ M(R, {
				contentEditable: /* @__PURE__ */ M(z, { style: {
					outline: "none",
					minHeight: "170px"
				} }),
				placeholder: /* @__PURE__ */ M("div", {
					style: {
						position: "absolute",
						top: 20,
						left: 20,
						color: "#aaa"
					},
					children: "Enter text..."
				}),
				ErrorBoundary: B
			}), /* @__PURE__ */ M(Sr, {
				fileData: e,
				onChange: n.onChange,
				name: n.name
			})]
		})
	})
}), wr = /* @__PURE__ */ ge(((e) => {
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
})), Tr = /* @__PURE__ */ ge(((e) => {
	e.read = function(e, t, n, r, i) {
		var a, o, s = i * 8 - r - 1, c = (1 << s) - 1, l = c >> 1, u = -7, d = n ? i - 1 : 0, f = n ? -1 : 1, p = e[t + d];
		for (d += f, a = p & (1 << -u) - 1, p >>= -u, u += s; u > 0; a = a * 256 + e[t + d], d += f, u -= 8);
		for (o = a & (1 << -u) - 1, a >>= -u, u += r; u > 0; o = o * 256 + e[t + d], d += f, u -= 8);
		if (a === 0) a = 1 - l;
		else if (a === c) return o ? NaN : (p ? -1 : 1) * Infinity;
		else o += 2 ** r, a -= l;
		return (p ? -1 : 1) * o * 2 ** (a - r);
	}, e.write = function(e, t, n, r, i, a) {
		var o, s, c, l = a * 8 - i - 1, u = (1 << l) - 1, d = u >> 1, f = i === 23 ? 2 ** -24 - 2 ** -77 : 0, p = r ? 0 : a - 1, m = r ? 1 : -1, h = +(t < 0 || t === 0 && 1 / t < 0);
		for (t = Math.abs(t), isNaN(t) || t === Infinity ? (s = +!!isNaN(t), o = u) : (o = Math.floor(Math.log(t) / Math.LN2), t * (c = 2 ** -o) < 1 && (o--, c *= 2), o + d >= 1 ? t += f / c : t += f * 2 ** (1 - d), t * c >= 2 && (o++, c /= 2), o + d >= u ? (s = 0, o = u) : o + d >= 1 ? (s = (t * c - 1) * 2 ** i, o += d) : (s = t * 2 ** (d - 1) * 2 ** i, o = 0)); i >= 8; e[n + p] = s & 255, p += m, s /= 256, i -= 8);
		for (o = o << i | s, l += i; l > 0; e[n + p] = o & 255, p += m, o /= 256, l -= 8);
		e[n + p - m] |= h * 128;
	};
})), Er = (/* @__PURE__ */ ge(((e) => {
	var t = wr(), n = Tr(), r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
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
		if (X(e, ArrayBuffer) || e && X(e.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (X(e, SharedArrayBuffer) || e && X(e.buffer, SharedArrayBuffer))) return h(e, t, n);
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
		if (X(e, Uint8Array)) {
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
		if (e.length !== void 0) return typeof e.length != "number" || Z(e.length) ? o(0) : p(e);
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
		if (X(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), X(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), !s.isBuffer(e) || !s.isBuffer(t)) throw TypeError("The \"buf1\", \"buf2\" arguments must be one of type Buffer or Uint8Array");
		if (e === t) return 0;
		let n = e.length, r = t.length;
		for (let i = 0, a = Math.min(n, r); i < a; ++i) if (e[i] !== t[i]) {
			n = e[i], r = t[i];
			break;
		}
		return n < r ? -1 : +(r < n);
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
			if (X(t, Uint8Array)) i + t.length > r.length ? (s.isBuffer(t) || (t = s.from(t)), t.copy(r, i)) : Uint8Array.prototype.set.call(r, t, i);
			else if (s.isBuffer(t)) t.copy(r, i);
			else throw TypeError("\"list\" argument must be an Array of Buffers");
			i += t.length;
		}
		return r;
	};
	function y(e, t) {
		if (s.isBuffer(e)) return e.length;
		if (ArrayBuffer.isView(e) || X(e, ArrayBuffer)) return e.byteLength;
		if (typeof e != "string") throw TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + typeof e);
		let n = e.length, r = arguments.length > 2 && arguments[2] === !0;
		if (!r && n === 0) return 0;
		let i = !1;
		for (;;) switch (t) {
			case "ascii":
			case "latin1":
			case "binary": return n;
			case "utf8":
			case "utf-8": return q(e).length;
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return n * 2;
			case "hex": return n >>> 1;
			case "base64": return J(e).length;
			default:
				if (i) return r ? -1 : q(e).length;
				t = ("" + t).toLowerCase(), i = !0;
		}
	}
	s.byteLength = y;
	function b(e, t, n) {
		let r = !1;
		if ((t === void 0 || t < 0) && (t = 0), t > this.length || ((n === void 0 || n > this.length) && (n = this.length), n <= 0) || (n >>>= 0, t >>>= 0, n <= t)) return "";
		for (e ||= "utf8";;) switch (e) {
			case "hex": return M(this, t, n);
			case "utf8":
			case "utf-8": return k(this, t, n);
			case "ascii": return j(this, t, n);
			case "latin1":
			case "binary": return ne(this, t, n);
			case "base64": return O(this, t, n);
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return N(this, t, n);
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
		return e === 0 ? "" : arguments.length === 0 ? k(this, 0, e) : b.apply(this, arguments);
	}, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(e) {
		if (!s.isBuffer(e)) throw TypeError("Argument must be a Buffer");
		return this === e ? !0 : s.compare(this, e) === 0;
	}, s.prototype.inspect = function() {
		let t = "", n = e.INSPECT_MAX_BYTES;
		return t = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(), this.length > n && (t += " ... "), "<Buffer " + t + ">";
	}, r && (s.prototype[r] = s.prototype.inspect), s.prototype.compare = function(e, t, n, r, i) {
		if (X(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), !s.isBuffer(e)) throw TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof e);
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
		return a < o ? -1 : +(o < a);
	};
	function S(e, t, n, r, i) {
		if (e.length === 0) return -1;
		if (typeof n == "string" ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, Z(n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
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
			if (Z(r)) return o;
			e[n + o] = r;
		}
		return o;
	}
	function T(e, t, n, r) {
		return Y(q(t, e.length - n), e, n, r);
	}
	function E(e, t, n, r) {
		return Y(oe(t), e, n, r);
	}
	function D(e, t, n, r) {
		return Y(J(t), e, n, r);
	}
	function ee(e, t, n, r) {
		return Y(se(t, e.length - n), e, n, r);
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
			case "binary": return E(this, e, t, n);
			case "base64": return D(this, e, t, n);
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return ee(this, e, t, n);
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
	function O(e, n, r) {
		return n === 0 && r === e.length ? t.fromByteArray(e) : t.fromByteArray(e.slice(n, r));
	}
	function k(e, t, n) {
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
		return te(r);
	}
	var A = 4096;
	function te(e) {
		let t = e.length;
		if (t <= A) return String.fromCharCode.apply(String, e);
		let n = "", r = 0;
		for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += A));
		return n;
	}
	function j(e, t, n) {
		let r = "";
		n = Math.min(e.length, n);
		for (let i = t; i < n; ++i) r += String.fromCharCode(e[i] & 127);
		return r;
	}
	function ne(e, t, n) {
		let r = "";
		n = Math.min(e.length, n);
		for (let i = t; i < n; ++i) r += String.fromCharCode(e[i]);
		return r;
	}
	function M(e, t, n) {
		let r = e.length;
		(!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
		let i = "";
		for (let r = t; r < n; ++r) i += ce[e[r]];
		return i;
	}
	function N(e, t, n) {
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
	function P(e, t, n) {
		if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
		if (e + t > n) throw RangeError("Trying to access beyond buffer length");
	}
	s.prototype.readUintLE = s.prototype.readUIntLE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = this[e], i = 1, a = 0;
		for (; ++a < t && (i *= 256);) r += this[e + a] * i;
		return r;
	}, s.prototype.readUintBE = s.prototype.readUIntBE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = this[e + --t], i = 1;
		for (; t > 0 && (i *= 256);) r += this[e + --t] * i;
		return r;
	}, s.prototype.readUint8 = s.prototype.readUInt8 = function(e, t) {
		return e >>>= 0, t || P(e, 1, this.length), this[e];
	}, s.prototype.readUint16LE = s.prototype.readUInt16LE = function(e, t) {
		return e >>>= 0, t || P(e, 2, this.length), this[e] | this[e + 1] << 8;
	}, s.prototype.readUint16BE = s.prototype.readUInt16BE = function(e, t) {
		return e >>>= 0, t || P(e, 2, this.length), this[e] << 8 | this[e + 1];
	}, s.prototype.readUint32LE = s.prototype.readUInt32LE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
	}, s.prototype.readUint32BE = s.prototype.readUInt32BE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
	}, s.prototype.readBigUInt64LE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24, i = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + n * 2 ** 24;
		return BigInt(r) + (BigInt(i) << BigInt(32));
	}), s.prototype.readBigUInt64BE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e], i = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n;
		return (BigInt(r) << BigInt(32)) + BigInt(i);
	}), s.prototype.readIntLE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = this[e], i = 1, a = 0;
		for (; ++a < t && (i *= 256);) r += this[e + a] * i;
		return i *= 128, r >= i && (r -= 2 ** (8 * t)), r;
	}, s.prototype.readIntBE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = t, i = 1, a = this[e + --r];
		for (; r > 0 && (i *= 256);) a += this[e + --r] * i;
		return i *= 128, a >= i && (a -= 2 ** (8 * t)), a;
	}, s.prototype.readInt8 = function(e, t) {
		return e >>>= 0, t || P(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e];
	}, s.prototype.readInt16LE = function(e, t) {
		e >>>= 0, t || P(e, 2, this.length);
		let n = this[e] | this[e + 1] << 8;
		return n & 32768 ? n | 4294901760 : n;
	}, s.prototype.readInt16BE = function(e, t) {
		e >>>= 0, t || P(e, 2, this.length);
		let n = this[e + 1] | this[e] << 8;
		return n & 32768 ? n | 4294901760 : n;
	}, s.prototype.readInt32LE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
	}, s.prototype.readInt32BE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
	}, s.prototype.readBigInt64LE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (n << 24);
		return (BigInt(r) << BigInt(32)) + BigInt(t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24);
	}), s.prototype.readBigInt64BE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
		return (BigInt(r) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n);
	}), s.prototype.readFloatLE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), n.read(this, e, !0, 23, 4);
	}, s.prototype.readFloatBE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), n.read(this, e, !1, 23, 4);
	}, s.prototype.readDoubleLE = function(e, t) {
		return e >>>= 0, t || P(e, 8, this.length), n.read(this, e, !0, 52, 8);
	}, s.prototype.readDoubleBE = function(e, t) {
		return e >>>= 0, t || P(e, 8, this.length), n.read(this, e, !1, 52, 8);
	};
	function F(e, t, n, r, i, a) {
		if (!s.isBuffer(e)) throw TypeError("\"buffer\" argument must be a Buffer instance");
		if (t > i || t < a) throw RangeError("\"value\" argument is out of bounds");
		if (n + r > e.length) throw RangeError("Index out of range");
	}
	s.prototype.writeUintLE = s.prototype.writeUIntLE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, n >>>= 0, !r) {
			let r = 2 ** (8 * n) - 1;
			F(this, e, t, n, r, 0);
		}
		let i = 1, a = 0;
		for (this[t] = e & 255; ++a < n && (i *= 256);) this[t + a] = e / i & 255;
		return t + n;
	}, s.prototype.writeUintBE = s.prototype.writeUIntBE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, n >>>= 0, !r) {
			let r = 2 ** (8 * n) - 1;
			F(this, e, t, n, r, 0);
		}
		let i = n - 1, a = 1;
		for (this[t + i] = e & 255; --i >= 0 && (a *= 256);) this[t + i] = e / a & 255;
		return t + n;
	}, s.prototype.writeUint8 = s.prototype.writeUInt8 = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 1, 255, 0), this[t] = e & 255, t + 1;
	}, s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 65535, 0), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
	}, s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
	}, s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = e & 255, t + 4;
	}, s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
	};
	function I(e, t, n, r, i) {
		W(t, r, i, e, n, 7);
		let a = Number(t & BigInt(4294967295));
		e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a;
		let o = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, n;
	}
	function L(e, t, n, r, i) {
		W(t, r, i, e, n, 7);
		let a = Number(t & BigInt(4294967295));
		e[n + 7] = a, a >>= 8, e[n + 6] = a, a >>= 8, e[n + 5] = a, a >>= 8, e[n + 4] = a;
		let o = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[n + 3] = o, o >>= 8, e[n + 2] = o, o >>= 8, e[n + 1] = o, o >>= 8, e[n] = o, n + 8;
	}
	s.prototype.writeBigUInt64LE = Q(function(e, t = 0) {
		return I(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
	}), s.prototype.writeBigUInt64BE = Q(function(e, t = 0) {
		return L(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
	}), s.prototype.writeIntLE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, !r) {
			let r = 2 ** (8 * n - 1);
			F(this, e, t, n, r - 1, -r);
		}
		let i = 0, a = 1, o = 0;
		for (this[t] = e & 255; ++i < n && (a *= 256);) e < 0 && o === 0 && this[t + i - 1] !== 0 && (o = 1), this[t + i] = (e / a >> 0) - o & 255;
		return t + n;
	}, s.prototype.writeIntBE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, !r) {
			let r = 2 ** (8 * n - 1);
			F(this, e, t, n, r - 1, -r);
		}
		let i = n - 1, a = 1, o = 0;
		for (this[t + i] = e & 255; --i >= 0 && (a *= 256);) e < 0 && o === 0 && this[t + i + 1] !== 0 && (o = 1), this[t + i] = (e / a >> 0) - o & 255;
		return t + n;
	}, s.prototype.writeInt8 = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = e & 255, t + 1;
	}, s.prototype.writeInt16LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 32767, -32768), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
	}, s.prototype.writeInt16BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
	}, s.prototype.writeInt32LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 2147483647, -2147483648), this[t] = e & 255, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4;
	}, s.prototype.writeInt32BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
	}, s.prototype.writeBigInt64LE = Q(function(e, t = 0) {
		return I(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
	}), s.prototype.writeBigInt64BE = Q(function(e, t = 0) {
		return L(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
	});
	function R(e, t, n, r, i, a) {
		if (n + r > e.length || n < 0) throw RangeError("Index out of range");
	}
	function z(e, t, r, i, a) {
		return t = +t, r >>>= 0, a || R(e, t, r, 4, 34028234663852886e22, -34028234663852886e22), n.write(e, t, r, i, 23, 4), r + 4;
	}
	s.prototype.writeFloatLE = function(e, t, n) {
		return z(this, e, t, !0, n);
	}, s.prototype.writeFloatBE = function(e, t, n) {
		return z(this, e, t, !1, n);
	};
	function B(e, t, r, i, a) {
		return t = +t, r >>>= 0, a || R(e, t, r, 8, 17976931348623157e292, -17976931348623157e292), n.write(e, t, r, i, 52, 8), r + 8;
	}
	s.prototype.writeDoubleLE = function(e, t, n) {
		return B(this, e, t, !0, n);
	}, s.prototype.writeDoubleBE = function(e, t, n) {
		return B(this, e, t, !1, n);
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
	var V = {};
	function H(e, t, n) {
		V[e] = class extends n {
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
	H("ERR_BUFFER_OUT_OF_BOUNDS", function(e) {
		return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
	}, RangeError), H("ERR_INVALID_ARG_TYPE", function(e, t) {
		return `The "${e}" argument must be of type number. Received type ${typeof t}`;
	}, TypeError), H("ERR_OUT_OF_RANGE", function(e, t, n) {
		let r = `The value of "${e}" is out of range.`, i = n;
		return Number.isInteger(n) && Math.abs(n) > 2 ** 32 ? i = U(String(n)) : typeof n == "bigint" && (i = String(n), (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (i = U(i)), i += "n"), r += ` It must be ${t}. Received ${i}`, r;
	}, RangeError);
	function U(e) {
		let t = "", n = e.length, r = +(e[0] === "-");
		for (; n >= r + 4; n -= 3) t = `_${e.slice(n - 3, n)}${t}`;
		return `${e.slice(0, n)}${t}`;
	}
	function re(e, t, n) {
		G(t, "offset"), (e[t] === void 0 || e[t + n] === void 0) && K(t, e.length - (n + 1));
	}
	function W(e, t, n, r, i, a) {
		if (e > n || e < t) {
			let r = typeof t == "bigint" ? "n" : "", i;
			throw i = a > 3 ? t === 0 || t === BigInt(0) ? `>= 0${r} and < 2${r} ** ${(a + 1) * 8}${r}` : `>= -(2${r} ** ${(a + 1) * 8 - 1}${r}) and < 2 ** ${(a + 1) * 8 - 1}${r}` : `>= ${t}${r} and <= ${n}${r}`, new V.ERR_OUT_OF_RANGE("value", i, e);
		}
		re(r, i, a);
	}
	function G(e, t) {
		if (typeof e != "number") throw new V.ERR_INVALID_ARG_TYPE(t, "number", e);
	}
	function K(e, t, n) {
		throw Math.floor(e) === e ? t < 0 ? new V.ERR_BUFFER_OUT_OF_BOUNDS() : new V.ERR_OUT_OF_RANGE(n || "offset", `>= ${+!!n} and <= ${t}`, e) : (G(e, n), new V.ERR_OUT_OF_RANGE(n || "offset", "an integer", e));
	}
	var ie = /[^+/0-9A-Za-z-_]/g;
	function ae(e) {
		if (e = e.split("=")[0], e = e.trim().replace(ie, ""), e.length < 2) return "";
		for (; e.length % 4 != 0;) e += "=";
		return e;
	}
	function q(e, t) {
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
	function oe(e) {
		let t = [];
		for (let n = 0; n < e.length; ++n) t.push(e.charCodeAt(n) & 255);
		return t;
	}
	function se(e, t) {
		let n, r, i, a = [];
		for (let o = 0; o < e.length && !((t -= 2) < 0); ++o) n = e.charCodeAt(o), r = n >> 8, i = n % 256, a.push(i), a.push(r);
		return a;
	}
	function J(e) {
		return t.toByteArray(ae(e));
	}
	function Y(e, t, n, r) {
		let i;
		for (i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
		return i;
	}
	function X(e, t) {
		return e instanceof t || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === t.name;
	}
	function Z(e) {
		return e !== e;
	}
	var ce = (function() {
		let e = "0123456789abcdef", t = Array(256);
		for (let n = 0; n < 16; ++n) {
			let r = n * 16;
			for (let i = 0; i < 16; ++i) t[r + i] = e[n] + e[i];
		}
		return t;
	})();
	function Q(e) {
		return typeof BigInt > "u" ? le : e;
	}
	function le() {
		throw Error("BigInt not supported");
	}
})))(), Dr = async (e) => {
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
}, Or = (e) => {
	e = atob(e);
	let t = new ArrayBuffer(e.length), n = new Uint8Array(t);
	for (let t = 0; t < e.length; t++) n[t] = e.charCodeAt(t);
	return n;
}, kr = "data:image/#{encoding};base64,#{data}", Ar = ({ data: e, encoding: t, alt: n }) => {
	let r = kr, [i, a] = c(void 0);
	return lr(t) && (t = "png"), lr(n) && (n = "ERROR"), Dr(new Blob([Or(e)])).then((e) => {
		r = r.replace("#{encoding}", t), r = r.replace("#{data}", Er.Buffer.from(e).toString("base64")), a(r);
	}), /* @__PURE__ */ M(Box, {
		component: "img",
		src: i,
		alt: n,
		sx: {
			width: "100%",
			height: "auto",
			display: "block",
			maxWidth: "100%"
		}
	});
}, jr = (e) => {
	let t = "", n = Object.keys(e).map((t) => {
		let n = e[t];
		return lr(n) ? "" : `${encodeURIComponent(t)}=${encodeURIComponent(n)}`;
	}).filter((e) => e !== "").join("&");
	if (n) {
		let e = t.indexOf("#");
		e !== -1 && (t = t.slice(0, e)), t += (t.indexOf("?") === -1 ? "?" : "&") + n;
	}
	return t;
}, Mr = (e, { baseHeaders: t, handleErr: n, handleFinally: r, debug: i } = {}) => {
	let a = {
		"Content-Type": "application/json",
		...t
	}, o = (e) => {
		console.log(e);
	}, s = ({ endpoint: t, inputHeaders: s, fetchParams: c, args: l }) => {
		lr(t) && (t = "");
		let u = e + t, d = {
			...a,
			...s
		};
		Object.keys(d).forEach((e) => {
			lr(d[e]) && delete d[e];
		});
		let f = {
			method: "GET",
			headers: { ...d },
			...c
		};
		return lr(l) || (f.method === "POST" && (f.body = JSON.stringify(l)), f.method === "GET" && (u += jr(l))), fetch(u, f).catch((e) => n(e)).finally(() => {
			i && o({
				endpoint: t,
				inputHeaders: s,
				fetchParams: c
			}), !lr(r) && r({
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
Mr("http://localhost:8080/", {
	handleErr: (e) => console.log(e),
	debug: !0
});
var Nr = ({ endpoint: e, handleErr: t }) => {
	lr(t) && (t = (e) => console.log(e));
	let n = Mr(e, { handleErr: t });
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
		schema: async (e, t = {}) => await n.fetchJson({
			endpoint: "/create",
			fetchParams: {
				method: "GET",
				...t
			},
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
}, Pr = (e, t) => () => e.get(t), Fr = ({ jsxKey: e, endpoint: t, inputProps: n }) => {
	let [r, a] = c([/* @__PURE__ */ M("option", {
		value: n.defaultValue,
		children: n.defaultValue
	}, e + "-" + n.defaultValue)]), o = Nr({ endpoint: t });
	return i(() => {
		o.selectOptions().then((t) => {
			a(Object.keys(t).map((n) => {
				let r = t[n][Object.keys(t[n])[1]], i = t[n][Object.keys(t[n])[0]];
				return /* @__PURE__ */ M("option", {
					value: i,
					children: r
				}, e + "-" + n);
			}));
		});
	}, []), /* @__PURE__ */ M(w, {
		...n,
		defaultValue: n.defaultValue,
		children: [...r || /* @__PURE__ */ M(ne, {})]
	}, e);
}, Ir = ({ buttons: e, endpoint: t, title: n, title_topology_params: r, button_stack_params: i, header_stack_params: a, outer_stack_params: o, ...s }) => {
	let c = e?.map((e) => e);
	return /* @__PURE__ */ N(T, {
		direction: "column",
		spacing: 1,
		sx: {
			width: "100%",
			justifyContent: "flex-start",
			alignItems: "center"
		},
		...o,
		children: [/* @__PURE__ */ N(T, {
			direction: "row",
			...a,
			children: [/* @__PURE__ */ M(te, {
				variant: "h6",
				sx: {
					m: 2,
					whiteSpace: "nowrap",
					overflow: "hidden",
					textOverflow: "ellipsis"
				},
				...r,
				children: n
			}), /* @__PURE__ */ M(T, {
				direction: "row",
				spacing: 2,
				sx: {
					pr: 16,
					pl: 16,
					justifyContent: "flex-end",
					width: "20%",
					alignItems: "center"
				},
				...i,
				children: c
			})]
		}), /* @__PURE__ */ M(bi, {
			...s,
			endpoint: t
		})]
	});
}, Lr = ({ api: e, endpoint: t, refKey: n, register_component: r, ...a }) => {
	let o = ar();
	return i(() => {
		(async () => {
			let e = o?.get(n);
			if (!e) return;
			let t = { current: { ...e } };
			ui({ current: e }, { id: 17 }), await gi(t);
		})();
	}, [o]), /* @__PURE__ */ M(Ir, {
		api: e,
		endpoint: "get_paginated",
		buttons: [],
		title: "",
		refKey: n,
		register_component: r,
		...a
	});
}, Rr = ({ jsxKey: e, key: t, inputProps: n }) => {
	let r;
	return t.charAt(t.length - 1) === "D" && t.charAt(t.length - 2) === "I" || t.charAt(t.length - 1) === "S" && t.charAt(t.length - 2) === "D" ? (t.charAt(t.length - 1) === "D" && t.charAt(t.length - 2) === "I" && (r = t.slice(5, t.length - 2)), t.charAt(t.length - 1) === "S" && t.charAt(t.length - 2) === "D" && (r = t.slice(5, t.length - 3), n = {
		...n,
		multiple: !0
	}), /* @__PURE__ */ M(Fr, {
		endpoint: r,
		jsxKey: e,
		inputProps: n
	})) : null;
}, zr = () => ({ formRef: e, jsxKey: t, key: n, currentType: r, inputProps: i }) => {
	let a = Rr({
		jsxKey: t,
		key: n,
		inputProps: i
	});
	if (!lr(a)) return a;
	if (a = /* @__PURE__ */ M(b, {
		type: "text",
		...i
	}, t), r === "number" || r === "bigint") return /* @__PURE__ */ M(b, {
		type: "number",
		...i
	}, t);
	if (r === "boolean") return /* @__PURE__ */ M(E, {
		...i,
		defaultChecked: i.defaultValue
	}, t);
	if (r === "object") {
		if (i.defaultValue.Subtype === 20) return /* @__PURE__ */ M(Lr, {
			api: e.current?.api,
			refKey: "csv_grid",
			register_component: !0
		}, t);
		if (i.defaultValue.Subtype === 19) return /* @__PURE__ */ M(Si, { data: hr(Ur(e), n.slice(0, n.lastIndexOf(".")))?.value.Data }, t);
		if (i.defaultValue.Subtype === 17) return /* @__PURE__ */ M(Ar, { data: hr(Ur(e), n.slice(0, n.lastIndexOf(".")))?.value.Data }, t);
		if (i.defaultValue.Subtype === 16 || i.defaultValue.Subtype === 0) {
			let r = hr(Ur(e), n.slice(0, n.lastIndexOf(".")));
			return i.name = n.slice(0, n.lastIndexOf(".")) + ".Data", /* @__PURE__ */ M(Cr, {
				fileData: JSON.stringify(r?.value.Data, null, 2),
				inputProps: i,
				subtype: i.defaultValue.Subtype
			}, t);
		}
		if (!lr(i.defaultValue.Subtype) || !lr(i.defaultValue.Data)) return null;
		if (Array.isArray(i.defaultValue)) return Object.keys(i.defaultValue).map((e) => /* @__PURE__ */ M(b, {
			type: "text",
			...i,
			defaultValue: i.defaultValue[e]
		}, t));
		if (lr(i.defaultValue)) return;
		let r = Object.keys(i.defaultValue)[0], a = i.defaultValue[r];
		return cr(a) ? /* @__PURE__ */ M(xr, {
			inputKey: n,
			inputProps: i
		}) : void 0;
	}
	return a;
}, Br = (e, t = {}) => ({
	index: 0,
	elements: {},
	nameIndex: {},
	labels: {},
	useLabels: {},
	element_component: {},
	container: void 0,
	handleOnClose: void 0,
	elementSelector: e || zr(),
	context: t
}), Vr = (e, t) => {
	let n = e.current;
	n.handleClose = t, e.current = n;
}, Hr = (e, t) => {
	let n = e.current;
	lr(n) || (n.container = t), e.current = n;
}, Ur = (e) => e.current.container, Wr = (e, t) => {
	let n = e.current, r = n.labels[t], i = n.element_component[t];
	return n.useLabels[t] ? /* @__PURE__ */ N(T, {
		direction: "column",
		spacing: 1,
		sx: {
			width: "100%",
			pb: 1
		},
		children: [/* @__PURE__ */ M(u, {
			sx: { width: "100%" },
			children: r
		}), /* @__PURE__ */ M(u, {
			sx: { width: "100%" },
			children: i
		})]
	}, t) : /* @__PURE__ */ N(T, {
		direction: "row",
		gap: 1,
		sx: {
			justifyContent: "space-between",
			width: "100%",
			borderBottom: "1px solid rgba(0, 0, 0, 0.42)",
			pb: .5,
			alignItems: "flex-end"
		},
		children: [/* @__PURE__ */ M(u, {
			sx: {
				width: "50%",
				flexShrink: 0
			},
			children: r
		}), /* @__PURE__ */ M(u, {
			sx: { flexGrow: 1 },
			children: i
		})]
	}, t);
}, Gr = (e) => {
	let t = {};
	return Object.keys(e.current.nameIndex).map((n, r) => {
		t[n] = Wr(e, r);
	}), /* @__PURE__ */ M(T, {
		direction: "column",
		gap: 0,
		sx: {
			flexGrow: 1,
			width: "100%"
		},
		children: Object.keys(t).map((e) => t[e])
	});
}, Kr = (e) => {
	let t = e.current;
	return { onChange: (n) => {
		let r = n.target.value, i = n.target.selectedOptions;
		if (!lr(i)) {
			let e = [].slice.call(i);
			r = e.map((e) => e.value), e.length === 1 && (r = r[0]);
		}
		n.target.type === "datetime-local" && (r = new Date(Date.parse(r)).toISOString());
		let a = n.target.name, o = t.nameIndex[a];
		lr(o) && (t.nameIndex[a] = t.index, o = t.index, e.current = t), t.elements[o] = r;
		let s = a.split("."), c = s.slice(0, s.length - 1).join("."), l = s.slice(s.length - 1);
		lr(hr(Ur(e), c)) && (c = s.slice(0, s.length - 2).join(".")), n.target.type === "checkbox" && (r = n.currentTarget.checked), e.current = t, Hr(e, yr(Ur(e), c, l, r)), e.current = t;
	} };
}, qr = (e, t) => {
	let n = e.current, r = n.nameIndex[t];
	return n.elements[r];
}, Jr = (e, t, n) => {
	let r = typeof n, i = e.current, a = t + i.index, o = {
		name: t,
		defaultValue: qr(e, t),
		onChange: Kr(e).onChange,
		sx: { width: "100%" }
	};
	return i.elementSelector({
		key: t,
		formRef: e,
		jsxKey: a,
		currentType: r,
		inputProps: o
	});
}, Yr = (e, t, n) => {
	let r = e.current, i = ur(t.replace(/root\./, ""), "_"), a = i.split(".");
	if (!a.some((e) => e.toLowerCase() === "data")) {
		if (lr(r.nameIndex[t])) {
			r.nameIndex[t] = r.index, r.elements[r.index] = n;
			let o = Jr(e, t, n);
			if (!lr(o)) {
				let e = a[a.length - 1], n = e.toLowerCase() === "subtype", s = /^\d+$/.test(e);
				r.useLabels[r.index] = n || !s;
				let c = i;
				n && a.length > 1 && (c = a[a.length - 2]), r.labels[r.index] = /* @__PURE__ */ M(S, {
					column: t,
					children: c
				}, "Label" + t + r.index), r.element_component[r.index] = o, r.index++;
			}
		}
		e.current = r;
	}
}, Xr = ({ formRef: e, container: t }) => {
	_r(t, (t) => {
		let n = t.path, r = t.value;
		if (Array.isArray(r)) {
			let t = [];
			Object.keys(r).forEach((e) => {
				lr(r[e]) || Array.isArray(r[e]) || t.push(r[e]);
			}), t.length > 0 && Yr(e, n, t);
			return;
		}
		Object.keys(r).forEach((t) => {
			lr(r[t]) || (typeof r[t] == "object" && Object.keys(r[t]).forEach((i) => {
				let a = {};
				a[i] = r[t][i], Yr(e, n + "." + t + "." + i, a);
			}), cr(r[t]) && Yr(e, n + "." + t, r[t]));
		});
	});
}, Zr = ({ title: e, button_title: t, getButton: n, tabs: r, getSchema: i, handleSave: o, elementSelector: l, footerButtons: f, refKey: p, register_component: m = !1, context: h = null }) => {
	let g = or(p, m), _ = s(null), [v, y] = c(!1), b = () => {
		y(!1);
	}, x = () => {
		o(Ur(_).value), y(!1);
	};
	_.current ||= Br(l, {
		setShow: (e) => {
			y(e);
		},
		...h
	}), a(() => (g(_.current), () => g(null)), [g]);
	let [S, C] = c(void 0), [w, E] = c(0), O = async () => {
		try {
			Hr(_, br(null, [], ".", await i())), Vr(_, b), Xr({
				formRef: _,
				container: Ur(_)
			}), C(Gr(_)), y(!0);
		} catch (e) {
			console.error("Failed to load schema:", e);
		}
	};
	return f ||= [
		/* @__PURE__ */ M(d, {
			onClick: () => {
				let e = {};
				e[_.current.index] = "";
				let t = Ur(_);
				lr(hr(t, "root.fields")) && Hr(_, mr(t, "root.fields", {})), Yr(_, "root.fields." + _.current.index, e), C(Gr(_));
			},
			children: "Add Field"
		}),
		/* @__PURE__ */ M(d, {
			onClick: x,
			children: "Save"
		}),
		/* @__PURE__ */ M(d, {
			onClick: b,
			children: "Close"
		})
	], /* @__PURE__ */ N(T, {
		direction: "row",
		spacing: 1,
		children: [n ? n(O) : /* @__PURE__ */ M(d, {
			onClick: O,
			children: t
		}), /* @__PURE__ */ M(sr, {
			title: e,
			body: /* @__PURE__ */ N(u, {
				sx: { width: "100%" },
				children: [
					r && /* @__PURE__ */ M(u, {
						sx: {
							borderBottom: 1,
							borderColor: "divider"
						},
						children: /* @__PURE__ */ N(ee, {
							value: w,
							onChange: (e, t) => E(t),
							"aria-label": "custom tabs",
							children: [/* @__PURE__ */ M(D, { label: "File Upload" }), /* @__PURE__ */ M(D, { label: "File Viewer" })]
						})
					}),
					w === 0 && /* @__PURE__ */ M(u, {
						sx: {
							borderBottom: 1,
							borderColor: "divider",
							width: "100%"
						},
						children: S
					}),
					w === 1 && /* @__PURE__ */ M(u, {
						sx: { p: 3 },
						children: /* @__PURE__ */ M("pre", { children: JSON.stringify(Ur(_)?.value, null, 2) })
					})
				]
			}),
			show: v,
			footer: f
		})]
	});
}, Qr = ({ title: e, show: t, onCancel: n, onConfirm: r }) => /* @__PURE__ */ M(sr, {
	title: e || "Are you sure?",
	show: t,
	footer: /* @__PURE__ */ N(T, {
		direction: "column",
		gap: 3,
		children: [/* @__PURE__ */ M(d, {
			onClick: () => {
				lr(n) || n();
			},
			children: "Cancel"
		}), /* @__PURE__ */ M(d, {
			onClick: () => {
				lr(r) || r();
			},
			children: "Confirm"
		})]
	})
}), $r = ({ refreshGrid: e, api: t, id: n, title: r, footerButtons: i, ...a }) => /* @__PURE__ */ M(Zr, {
	title: r,
	button_title: "Update",
	getSchema: Pr(t, n),
	handleSave: (r) => {
		t.update(r, n).then(() => e());
	},
	footerButtons: i,
	register_component: !0,
	refKey: String(n),
	...a
}), ei = ({ refreshGrid: e, api: t, id: n }) => {
	let [r, i] = c(!1);
	return /* @__PURE__ */ N(T, {
		direction: "row",
		spacing: 1,
		sx: {
			width: "100%",
			justifyContent: "center",
			alignItems: "center"
		},
		children: [/* @__PURE__ */ M(d, {
			onClick: () => {
				i(!r);
			},
			children: "Delete"
		}), /* @__PURE__ */ M(Qr, {
			onConfirm: () => {
				t.deleteId(n).then(e());
			},
			show: r
		})]
	});
}, ti = ({ handleRefreshGrid: e, api: t, id: n, params: r }) => {
	let i = {
		...r,
		refreshGrid: e,
		api: t,
		id: n
	};
	return /* @__PURE__ */ N(T, {
		direction: "row",
		spacing: 1,
		sx: {
			width: "100%",
			justifyContent: "center",
			alignItems: "center"
		},
		children: [/* @__PURE__ */ M($r, { ...i }), /* @__PURE__ */ M(ei, { ...i })]
	});
}, ni = (e, t) => {
	let n = e.current;
	vr(t, (e) => {
		let t = e.value, r = e.path, i = typeof t;
		if (n.headers_ri[r] !== void 0) return;
		let a = "string";
		i === "number" ? a = "number" : r.toLowerCase().includes("date") || r.toLowerCase().includes("modified") ? a = "date" : i === "string" && (a = "string"), n.headers[n.index] = {
			field: r,
			type: a,
			headerName: r
		}, n.rows[n.index] = [], n.headers_ri[r] = n.index, n.index++;
	}), e.current = n;
}, ri = (e) => {
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
}, ii = (e, t) => {
	let n = e.current;
	if (!n) return;
	n.rows = [[], []], n.row_count = 0;
	let r = n.headers_ri.Field, i = n.headers_ri.Value;
	Object.entries(t).forEach(([e, t]) => {
		if (r !== void 0 && n.rows[r].push(ur(e, "_")), i !== void 0) {
			let e = Array.isArray(t) ? t.join(", ") : t;
			n.rows[i].push(e);
		}
		n.row_count++;
	}), e.current = n;
}, ai = (e, t) => {
	let n = e.current;
	n && (n.rows = [], n.row_count = 0, n.headers.forEach(() => {
		n.rows.push([]);
	}), vr(t, (e) => {
		if (cr(e.value)) {
			let t = n.headers_ri[e.path];
			t !== void 0 && n.rows[t].push(e.value);
		}
	}), e.current = n);
}, oi = (e) => {
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
}, si = (e) => {
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
}, ci = (e) => {
	let t = e.current;
	return !t || !t.headers ? [] : t.headers;
}, li = (e) => {
	let t = e.current, n = Object.keys(t.headers_ri).map((e) => ({
		field: e,
		sortable: !0,
		filterable: !0,
		headerName: ur(e.split(".").pop(), "_"),
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
			renderCell: vi(e)
		}, r = Math.max(0, n.length - 1);
		n.splice(r, 0, t);
	}
	return n;
}, ui = (e, t) => {
	let n = e.current;
	n && (n.args = {
		...n.args,
		...t
	}, e.current = n, n.refresh());
}, di = (e, t) => {
	let n = e.current;
	n && (n.args.sortModel = JSON.stringify(t), e.current = n);
}, fi = (e, t) => {
	let n = e.current;
	n && (n.args.filterModel = JSON.stringify(t), e.current = n);
}, pi = (e) => e.current.fetch_params, mi = (e, t) => ({ getRows: async (n) => {
	let r = e.current;
	if (!r) return {
		rows: [],
		rowCount: 0
	};
	fi(e, n.filterModel), di(e, n.sortModel);
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
		Array.isArray(t) && t.length === 0 || lr(t) || (s[e] = t);
	}), lr(n.sortModel) || Array.isArray(n.sortModel) && n.sortModel.length === 0 && delete s.sortModel, lr(n.filterModel) || Array.isArray(n.filterModel.items) && n.filterModel.items.length === 0 && delete s.filterModel;
	let c = await r.api?.at("/" + r.endpoint, {
		fetchParams: {
			method: "GET",
			...pi(e)
		},
		args: s
	}), l = br(null, [], ".", c.results);
	return ni(e, l), ai(e, l), r.row_count = c.pagination?.total || 0, e.current = r, t(), {
		rows: si(e),
		rowCount: c.pagination?.total || 0
	};
} }), hi = (e) => e.current?.datasource, gi = async (e) => {
	let t = e.current;
	if (!t) return;
	let n = t.gridRef.current;
	n.dataSource.cache.clear(), await n.dataSource.fetchRows(), t.refresh();
}, _i = (e) => (t) => {
	let n = e.current;
	if (!n || n.rows.length === 0) return;
	let r = t.ids, i = n.rows[0].length, a = Array.from({ length: i }, (e, t) => t).filter((e) => {
		let t = n.rows[0][e];
		return r.has(t);
	});
	n.selected_data = n.rows.map((e) => a.map((t) => e[t])), n.selected_ids = t, e.current = n;
}, vi = (e) => {
	let t = e.current;
	if (t) return t.cellRenderer ? t.cellRenderer(e) : yi(e);
}, yi = (e) => {
	let t = ar();
	return (n) => {
		let r = e.current;
		if (!r) return;
		let i = (e = !1) => {
			let r = t?.get(String(n.id))?.context;
			if (!r) return;
			let i = r.setShow;
			i(e);
		}, a = /* @__PURE__ */ N(T, {
			direction: "column",
			spacing: 2,
			sx: { width: "100%" },
			children: [/* @__PURE__ */ N(T, {
				spacing: 3,
				direction: "row",
				children: [
					/* @__PURE__ */ M(u, {
						sx: { ...r.modal_header_sx },
						children: "Update"
					}),
					/* @__PURE__ */ M(u, { sx: { flexGrow: 1 } }, "spacer"),
					/* @__PURE__ */ M(y, {
						onClick: () => i(!1),
						sx: {
							backgroundColor: "black",
							color: "white"
						},
						children: /* @__PURE__ */ M(K, {})
					})
				]
			}), /* @__PURE__ */ M(T, {
				spacing: 3,
				direction: "row",
				children: Object.entries(r.modal_header_rows || []).map((e) => e)
			})]
		});
		return /* @__PURE__ */ M(ti, {
			params: {
				footerButtons: [
					/* @__PURE__ */ M(d, {
						onClick: () => i(!1),
						children: "Close"
					}),
					/* @__PURE__ */ M(u, { sx: { flexGrow: 1 } }, "spacer"),
					/* @__PURE__ */ M(d, { children: "Update" })
				],
				title: a,
				...n.row
			},
			handleRefreshGrid: async () => await gi(e),
			api: r.api,
			id: n.id
		});
	};
}, bi = ({ api: e, endpoint: t, row_details: n, refKey: r, cellRenderer: i, register_component: o = !1, toolbar: l = !1, checkbox_select: u = !1, datagrid_sx: d = void 0, grid_options: f = void 0, context: p = void 0 }) => {
	let m = or(r, o), h = s(null), [, g] = c(!1), [_, v] = c({
		page: 0,
		pageSize: 25
	}), [y, b] = c(0), [x, S] = c({ id: !1 }), C = I(), w = () => {
		h.current && b(h.current?.row_count ?? 0), g((e) => !e);
	};
	return h.current ||= {
		context: p,
		gridRef: C,
		index: 0,
		headers: [],
		headers_ri: {},
		rows: [],
		row_count: t ? 0 : void 0,
		datasource: t ? mi(h, w) : void 0,
		paginationModel: {
			page: 0,
			pageSize: 5
		},
		args: {},
		selected_data: [],
		selected_ids: null,
		refresh: w,
		cellRenderer: i,
		filter_model: null,
		api: e,
		row_details: n,
		fetch_params: null,
		endpoint: t,
		register_component: o,
		refKey: r,
		modal_title: null,
		modal_header_rows: null,
		modal_header_sx: null,
		modal_header_row: null,
		...f
	}, a(() => (m(h.current), () => m(null)), [m]), /* @__PURE__ */ M(P, {
		apiRef: C,
		disableVirtualization: !0,
		columnVisibilityModel: x,
		onColumnVisibilityModelChange: (e) => S(e),
		rowCount: y,
		sx: {
			width: "100%",
			...d
		},
		columns: li(h),
		dataSource: hi(h),
		pageSizeOptions: [
			25,
			50,
			100
		],
		paginationModel: _,
		onPaginationModelChange: (e) => {
			v(e);
		},
		onRowSelectionModelChange: (e) => _i(h)(e),
		paginationMode: "server",
		sortingMode: "server",
		filterMode: "server",
		autosizeOnMount: !0,
		autosizeOptions: {
			includeOutliers: !0,
			includeHeaders: !0
		},
		checkboxSelection: u,
		showToolbar: l,
		getRowId: (e) => e.id,
		onDataSourceError: (e) => {
			console.error("DataGrid Error Type:", e.name), console.error("DataGrid Error Message:", e.message), e.cause && (console.group("Original Error Cause"), console.error("Message:", e.cause.message), console.error("Stack:", e.cause.stack), console.groupEnd()), e instanceof F ? console.warn("Fetch failed. Check your API mock or network.") : console.warn("Row update failed.");
		},
		...f
	});
};
j({
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
});
var xi = () => {
	let e = {
		position: "sticky",
		zIndex: 2,
		backgroundColor: "white"
	}, t = {
		position: "sticky",
		width: "100%",
		zIndex: 3,
		backgroundColor: "#191E23 !important"
	};
	return {
		"& .MuiDataGrid-columnHeader-last": {
			width: "100%",
			flex: 2
		},
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
		"& .MuiDataGrid-main": { overflow: "auto" },
		"&": {
			width: "100%",
			display: "flex"
		}
	};
}, Si = ({ data: e, ...t }) => {
	let n = ar(), [r, a] = c({
		rows: [],
		columns: []
	});
	return i(() => {
		(async () => {
			let t = n?.get("key_value_grid");
			if (!t) return;
			let r = { current: { ...t } };
			ri(r), ii(r, e), a({
				rows: [...oi(r)],
				columns: [...ci(r)]
			}), await gi(r);
		})();
	}, [e, n]), /* @__PURE__ */ M(bi, {
		register_component: !0,
		datagrid_sx: xi(),
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
}, Ci = t(null), wi = () => r(Ci), Ti = (e, t = !0) => {
	let n = wi();
	return (r) => {
		t && r ? n?.register(e, r) : n?.unregister(e);
	};
}, Ei = ({ title: e, body: t, show: n, footer: r, title_sx: i, footer_sx: a, content_sx: o, paper_sx: s }) => /* @__PURE__ */ N(h, {
	open: n,
	maxWidth: "lg",
	fullWidth: !0,
	scroll: "paper",
	slotProps: { paper: { sx: {
		maxHeight: "70vh",
		display: "flex",
		flexDirection: "column",
		...s
	} } },
	"aria-labelledby": "centered-modal-title",
	children: [
		/* @__PURE__ */ M(v, {
			id: "centered-modal-title",
			sx: { ...i },
			children: e
		}),
		/* @__PURE__ */ M(_, {
			dividers: !0,
			sx: { ...o },
			children: t
		}),
		/* @__PURE__ */ M(g, {
			sx: a,
			children: r
		})
	]
}), Di = (e) => {
	if (e === null) return !0;
	let t = typeof e;
	return t === "string" || t === "number" || t === "boolean" || t === "undefined" || t === "symbol" || t === "bigint" || t === "int";
}, Oi = (e) => e == null, ki = (e, t) => Oi(e) ? "" : e.split(t).map((e) => e.charAt(0).toUpperCase() + e.slice(1)).join(" "), Ai = "Values", ji = "Containers", Mi = (e, t, n, r) => {
	let i = r || {
		[Ai]: /* @__PURE__ */ new Map(),
		[ji]: /* @__PURE__ */ new Map()
	}, a = e ? t : "root", o = {
		parent: e,
		path: a,
		value: n,
		children: [],
		root: e ? e.root : null,
		containerIndex: i
	};
	return e || (o.root = o), i[Ai].set(a, n), i[ji].set(a, o), Object.freeze(o);
}, Ni = (e, t, n) => {
	let r = Mi(e, t, n, e.containerIndex);
	return {
		...e,
		children: [...e.children, r]
	};
}, Pi = (e, t) => e.containerIndex[ji].get(t), Fi = (e, t) => {
	for (let [n, r] of e.containerIndex[Ai].entries()) t(n, r);
}, Ii = (e, t) => {
	for (let [, n] of e.containerIndex[ji].entries()) t(n);
}, Li = (e, t, n = 2) => {
	Fi(e, (e, r) => {
		let i = Object.keys(r);
		for (let a = 0; a < i.length; a++) {
			let o = e.split(".");
			o.push(i[a]);
			let s = o.slice(2).join("."), c = r[i[a]];
			o.length > n && Di(c) && t({
				i: a,
				value: c,
				path: s,
				fullpath: o.join("."),
				key: e,
				containerValue: r
			});
		}
	});
}, Ri = (e, t, n, r) => {
	if (!e || !t) return e;
	let i = e.containerIndex[ji].get(t);
	if (!i) return console.warn(`Container at path "${t}" not found.`), e;
	let a = {};
	a[n] = r;
	let o = {
		...i.value,
		...a
	}, s = Mi(i.parent, i.path, o, e.containerIndex);
	e.containerIndex[ji].set(t, s), e.containerIndex[Ai].set(t, o);
	let c = s;
	for (; c.parent;) {
		let t = c.parent, n = t.children.map((e) => e.path === c.path ? c : e), r = c.path.split("."), i = r.slice(r.length - 1), a = { ...e.containerIndex[Ai].get(t.path) };
		a[i] = o;
		let s = Object.freeze({
			...t,
			children: n,
			value: a
		});
		e.containerIndex[ji].set(s.path, s), c = s;
	}
	return e.containerIndex[ji].get("root");
}, zi = (e = null, t = [], n = "_", ...r) => {
	e === null && (e = Mi(null, "root", r.length === 0 ? {} : r[0]), t = ["root"]);
	let i = (e, t) => {
		let r = e.value;
		return typeof r == "object" && r && (Array.isArray(r) ? r.forEach((r, a) => {
			if (typeof r == "object" && r) {
				let o = [...t, String(a)];
				i(Ni(e, o.join(n), r).children.at(-1), o);
			}
		}) : Object.entries(r).forEach(([r, a]) => {
			if (typeof a == "object" && a) {
				let o = [...t, r];
				i(Ni(e, o.join(n), a).children.at(-1), o);
			}
		})), e;
	};
	return i(e, t);
}, Bi = ({ inputKey: t, inputProps: n }) => {
	let r = Object.keys(n.defaultValue)[0], a = n.defaultValue[r], [o, s] = c(/* @__PURE__ */ M(b, {
		type: "text",
		onChange: n.onChange,
		defaultValue: a
	})), l = (t, r) => {
		s(e.cloneElement(o, {
			...n,
			defaultValue: a,
			name: t + "." + r
		}));
	}, [u, d] = c(/* @__PURE__ */ M(b, {
		type: "text",
		...n,
		defaultValue: r,
		onChange: (e) => l(t, e.target.value)
	}));
	return i(() => {
		l(t, r);
	}, []), /* @__PURE__ */ N(T, {
		direction: "horizontal",
		gap: 2,
		children: [u, o]
	});
}, Vi = ({ fileData: e, onChange: t, name: n }) => {
	let [r] = V(), a = s("");
	return i(() => {
		e && (async () => {
			if (!e) return;
			let t = String(e).replace(/^"|"$/g, "").replace(/\\n/g, "<br/>");
			t !== a.current && (a.current = t, r.update(() => {
				let e = re();
				e.clear();
				let n = U(r, new DOMParser().parseFromString(`<div>${t}</div>`, "text/html"));
				n.length > 0 && e.append(...n);
			}));
		})();
	}, [e, r]), i(() => r.registerUpdateListener(({ editorState: e }) => {
		e.read(() => {
			let e = H(r);
			a.current = e, t({ target: {
				value: e,
				name: n
			} });
		});
	}), [
		r,
		t,
		n
	]), null;
}, Hi = ({ fileData: e, subtype: t, inputProps: n }) => /* @__PURE__ */ M(u, {
	sx: { width: "100%" },
	children: /* @__PURE__ */ M(C, {
		variant: "outlined",
		sx: {
			p: 2,
			minHeight: "200px",
			position: "relative"
		},
		children: /* @__PURE__ */ N(L, {
			initialConfig: {
				namespace: "MyEditor",
				nodes: [W, G],
				theme: {},
				onError: (e) => console.error("Lexical Error:", e),
				editable: t !== 0
			},
			children: [/* @__PURE__ */ M(R, {
				contentEditable: /* @__PURE__ */ M(z, { style: {
					outline: "none",
					minHeight: "170px"
				} }),
				placeholder: /* @__PURE__ */ M("div", {
					style: {
						position: "absolute",
						top: 20,
						left: 20,
						color: "#aaa"
					},
					children: "Enter text..."
				}),
				ErrorBoundary: B
			}), /* @__PURE__ */ M(Vi, {
				fileData: e,
				onChange: n.onChange,
				name: n.name
			})]
		})
	})
}), Ui = /* @__PURE__ */ he(((e) => {
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
})), Wi = /* @__PURE__ */ he(((e) => {
	e.read = function(e, t, n, r, i) {
		var a, o, s = i * 8 - r - 1, c = (1 << s) - 1, l = c >> 1, u = -7, d = n ? i - 1 : 0, f = n ? -1 : 1, p = e[t + d];
		for (d += f, a = p & (1 << -u) - 1, p >>= -u, u += s; u > 0; a = a * 256 + e[t + d], d += f, u -= 8);
		for (o = a & (1 << -u) - 1, a >>= -u, u += r; u > 0; o = o * 256 + e[t + d], d += f, u -= 8);
		if (a === 0) a = 1 - l;
		else if (a === c) return o ? NaN : (p ? -1 : 1) * Infinity;
		else o += 2 ** r, a -= l;
		return (p ? -1 : 1) * o * 2 ** (a - r);
	}, e.write = function(e, t, n, r, i, a) {
		var o, s, c, l = a * 8 - i - 1, u = (1 << l) - 1, d = u >> 1, f = i === 23 ? 2 ** -24 - 2 ** -77 : 0, p = r ? 0 : a - 1, m = r ? 1 : -1, h = +(t < 0 || t === 0 && 1 / t < 0);
		for (t = Math.abs(t), isNaN(t) || t === Infinity ? (s = +!!isNaN(t), o = u) : (o = Math.floor(Math.log(t) / Math.LN2), t * (c = 2 ** -o) < 1 && (o--, c *= 2), o + d >= 1 ? t += f / c : t += f * 2 ** (1 - d), t * c >= 2 && (o++, c /= 2), o + d >= u ? (s = 0, o = u) : o + d >= 1 ? (s = (t * c - 1) * 2 ** i, o += d) : (s = t * 2 ** (d - 1) * 2 ** i, o = 0)); i >= 8; e[n + p] = s & 255, p += m, s /= 256, i -= 8);
		for (o = o << i | s, l += i; l > 0; e[n + p] = o & 255, p += m, o /= 256, l -= 8);
		e[n + p - m] |= h * 128;
	};
})), Gi = (/* @__PURE__ */ he(((e) => {
	var t = Ui(), n = Wi(), r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
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
		if (X(e, ArrayBuffer) || e && X(e.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (X(e, SharedArrayBuffer) || e && X(e.buffer, SharedArrayBuffer))) return h(e, t, n);
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
		if (X(e, Uint8Array)) {
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
		if (e.length !== void 0) return typeof e.length != "number" || Z(e.length) ? o(0) : p(e);
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
		if (X(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), X(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), !s.isBuffer(e) || !s.isBuffer(t)) throw TypeError("The \"buf1\", \"buf2\" arguments must be one of type Buffer or Uint8Array");
		if (e === t) return 0;
		let n = e.length, r = t.length;
		for (let i = 0, a = Math.min(n, r); i < a; ++i) if (e[i] !== t[i]) {
			n = e[i], r = t[i];
			break;
		}
		return n < r ? -1 : +(r < n);
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
			if (X(t, Uint8Array)) i + t.length > r.length ? (s.isBuffer(t) || (t = s.from(t)), t.copy(r, i)) : Uint8Array.prototype.set.call(r, t, i);
			else if (s.isBuffer(t)) t.copy(r, i);
			else throw TypeError("\"list\" argument must be an Array of Buffers");
			i += t.length;
		}
		return r;
	};
	function y(e, t) {
		if (s.isBuffer(e)) return e.length;
		if (ArrayBuffer.isView(e) || X(e, ArrayBuffer)) return e.byteLength;
		if (typeof e != "string") throw TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + typeof e);
		let n = e.length, r = arguments.length > 2 && arguments[2] === !0;
		if (!r && n === 0) return 0;
		let i = !1;
		for (;;) switch (t) {
			case "ascii":
			case "latin1":
			case "binary": return n;
			case "utf8":
			case "utf-8": return q(e).length;
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return n * 2;
			case "hex": return n >>> 1;
			case "base64": return J(e).length;
			default:
				if (i) return r ? -1 : q(e).length;
				t = ("" + t).toLowerCase(), i = !0;
		}
	}
	s.byteLength = y;
	function b(e, t, n) {
		let r = !1;
		if ((t === void 0 || t < 0) && (t = 0), t > this.length || ((n === void 0 || n > this.length) && (n = this.length), n <= 0) || (n >>>= 0, t >>>= 0, n <= t)) return "";
		for (e ||= "utf8";;) switch (e) {
			case "hex": return M(this, t, n);
			case "utf8":
			case "utf-8": return k(this, t, n);
			case "ascii": return j(this, t, n);
			case "latin1":
			case "binary": return ne(this, t, n);
			case "base64": return O(this, t, n);
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return N(this, t, n);
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
		return e === 0 ? "" : arguments.length === 0 ? k(this, 0, e) : b.apply(this, arguments);
	}, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(e) {
		if (!s.isBuffer(e)) throw TypeError("Argument must be a Buffer");
		return this === e ? !0 : s.compare(this, e) === 0;
	}, s.prototype.inspect = function() {
		let t = "", n = e.INSPECT_MAX_BYTES;
		return t = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(), this.length > n && (t += " ... "), "<Buffer " + t + ">";
	}, r && (s.prototype[r] = s.prototype.inspect), s.prototype.compare = function(e, t, n, r, i) {
		if (X(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), !s.isBuffer(e)) throw TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof e);
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
		return a < o ? -1 : +(o < a);
	};
	function S(e, t, n, r, i) {
		if (e.length === 0) return -1;
		if (typeof n == "string" ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, Z(n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
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
			if (Z(r)) return o;
			e[n + o] = r;
		}
		return o;
	}
	function T(e, t, n, r) {
		return Y(q(t, e.length - n), e, n, r);
	}
	function E(e, t, n, r) {
		return Y(oe(t), e, n, r);
	}
	function D(e, t, n, r) {
		return Y(J(t), e, n, r);
	}
	function ee(e, t, n, r) {
		return Y(se(t, e.length - n), e, n, r);
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
			case "binary": return E(this, e, t, n);
			case "base64": return D(this, e, t, n);
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return ee(this, e, t, n);
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
	function O(e, n, r) {
		return n === 0 && r === e.length ? t.fromByteArray(e) : t.fromByteArray(e.slice(n, r));
	}
	function k(e, t, n) {
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
		return te(r);
	}
	var A = 4096;
	function te(e) {
		let t = e.length;
		if (t <= A) return String.fromCharCode.apply(String, e);
		let n = "", r = 0;
		for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += A));
		return n;
	}
	function j(e, t, n) {
		let r = "";
		n = Math.min(e.length, n);
		for (let i = t; i < n; ++i) r += String.fromCharCode(e[i] & 127);
		return r;
	}
	function ne(e, t, n) {
		let r = "";
		n = Math.min(e.length, n);
		for (let i = t; i < n; ++i) r += String.fromCharCode(e[i]);
		return r;
	}
	function M(e, t, n) {
		let r = e.length;
		(!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
		let i = "";
		for (let r = t; r < n; ++r) i += ce[e[r]];
		return i;
	}
	function N(e, t, n) {
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
	function P(e, t, n) {
		if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
		if (e + t > n) throw RangeError("Trying to access beyond buffer length");
	}
	s.prototype.readUintLE = s.prototype.readUIntLE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = this[e], i = 1, a = 0;
		for (; ++a < t && (i *= 256);) r += this[e + a] * i;
		return r;
	}, s.prototype.readUintBE = s.prototype.readUIntBE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = this[e + --t], i = 1;
		for (; t > 0 && (i *= 256);) r += this[e + --t] * i;
		return r;
	}, s.prototype.readUint8 = s.prototype.readUInt8 = function(e, t) {
		return e >>>= 0, t || P(e, 1, this.length), this[e];
	}, s.prototype.readUint16LE = s.prototype.readUInt16LE = function(e, t) {
		return e >>>= 0, t || P(e, 2, this.length), this[e] | this[e + 1] << 8;
	}, s.prototype.readUint16BE = s.prototype.readUInt16BE = function(e, t) {
		return e >>>= 0, t || P(e, 2, this.length), this[e] << 8 | this[e + 1];
	}, s.prototype.readUint32LE = s.prototype.readUInt32LE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
	}, s.prototype.readUint32BE = s.prototype.readUInt32BE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
	}, s.prototype.readBigUInt64LE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24, i = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + n * 2 ** 24;
		return BigInt(r) + (BigInt(i) << BigInt(32));
	}), s.prototype.readBigUInt64BE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e], i = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n;
		return (BigInt(r) << BigInt(32)) + BigInt(i);
	}), s.prototype.readIntLE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = this[e], i = 1, a = 0;
		for (; ++a < t && (i *= 256);) r += this[e + a] * i;
		return i *= 128, r >= i && (r -= 2 ** (8 * t)), r;
	}, s.prototype.readIntBE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = t, i = 1, a = this[e + --r];
		for (; r > 0 && (i *= 256);) a += this[e + --r] * i;
		return i *= 128, a >= i && (a -= 2 ** (8 * t)), a;
	}, s.prototype.readInt8 = function(e, t) {
		return e >>>= 0, t || P(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e];
	}, s.prototype.readInt16LE = function(e, t) {
		e >>>= 0, t || P(e, 2, this.length);
		let n = this[e] | this[e + 1] << 8;
		return n & 32768 ? n | 4294901760 : n;
	}, s.prototype.readInt16BE = function(e, t) {
		e >>>= 0, t || P(e, 2, this.length);
		let n = this[e + 1] | this[e] << 8;
		return n & 32768 ? n | 4294901760 : n;
	}, s.prototype.readInt32LE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
	}, s.prototype.readInt32BE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
	}, s.prototype.readBigInt64LE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (n << 24);
		return (BigInt(r) << BigInt(32)) + BigInt(t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24);
	}), s.prototype.readBigInt64BE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
		return (BigInt(r) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n);
	}), s.prototype.readFloatLE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), n.read(this, e, !0, 23, 4);
	}, s.prototype.readFloatBE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), n.read(this, e, !1, 23, 4);
	}, s.prototype.readDoubleLE = function(e, t) {
		return e >>>= 0, t || P(e, 8, this.length), n.read(this, e, !0, 52, 8);
	}, s.prototype.readDoubleBE = function(e, t) {
		return e >>>= 0, t || P(e, 8, this.length), n.read(this, e, !1, 52, 8);
	};
	function F(e, t, n, r, i, a) {
		if (!s.isBuffer(e)) throw TypeError("\"buffer\" argument must be a Buffer instance");
		if (t > i || t < a) throw RangeError("\"value\" argument is out of bounds");
		if (n + r > e.length) throw RangeError("Index out of range");
	}
	s.prototype.writeUintLE = s.prototype.writeUIntLE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, n >>>= 0, !r) {
			let r = 2 ** (8 * n) - 1;
			F(this, e, t, n, r, 0);
		}
		let i = 1, a = 0;
		for (this[t] = e & 255; ++a < n && (i *= 256);) this[t + a] = e / i & 255;
		return t + n;
	}, s.prototype.writeUintBE = s.prototype.writeUIntBE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, n >>>= 0, !r) {
			let r = 2 ** (8 * n) - 1;
			F(this, e, t, n, r, 0);
		}
		let i = n - 1, a = 1;
		for (this[t + i] = e & 255; --i >= 0 && (a *= 256);) this[t + i] = e / a & 255;
		return t + n;
	}, s.prototype.writeUint8 = s.prototype.writeUInt8 = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 1, 255, 0), this[t] = e & 255, t + 1;
	}, s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 65535, 0), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
	}, s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
	}, s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = e & 255, t + 4;
	}, s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
	};
	function I(e, t, n, r, i) {
		W(t, r, i, e, n, 7);
		let a = Number(t & BigInt(4294967295));
		e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a;
		let o = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, n;
	}
	function L(e, t, n, r, i) {
		W(t, r, i, e, n, 7);
		let a = Number(t & BigInt(4294967295));
		e[n + 7] = a, a >>= 8, e[n + 6] = a, a >>= 8, e[n + 5] = a, a >>= 8, e[n + 4] = a;
		let o = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[n + 3] = o, o >>= 8, e[n + 2] = o, o >>= 8, e[n + 1] = o, o >>= 8, e[n] = o, n + 8;
	}
	s.prototype.writeBigUInt64LE = Q(function(e, t = 0) {
		return I(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
	}), s.prototype.writeBigUInt64BE = Q(function(e, t = 0) {
		return L(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
	}), s.prototype.writeIntLE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, !r) {
			let r = 2 ** (8 * n - 1);
			F(this, e, t, n, r - 1, -r);
		}
		let i = 0, a = 1, o = 0;
		for (this[t] = e & 255; ++i < n && (a *= 256);) e < 0 && o === 0 && this[t + i - 1] !== 0 && (o = 1), this[t + i] = (e / a >> 0) - o & 255;
		return t + n;
	}, s.prototype.writeIntBE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, !r) {
			let r = 2 ** (8 * n - 1);
			F(this, e, t, n, r - 1, -r);
		}
		let i = n - 1, a = 1, o = 0;
		for (this[t + i] = e & 255; --i >= 0 && (a *= 256);) e < 0 && o === 0 && this[t + i + 1] !== 0 && (o = 1), this[t + i] = (e / a >> 0) - o & 255;
		return t + n;
	}, s.prototype.writeInt8 = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = e & 255, t + 1;
	}, s.prototype.writeInt16LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 32767, -32768), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
	}, s.prototype.writeInt16BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
	}, s.prototype.writeInt32LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 2147483647, -2147483648), this[t] = e & 255, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4;
	}, s.prototype.writeInt32BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
	}, s.prototype.writeBigInt64LE = Q(function(e, t = 0) {
		return I(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
	}), s.prototype.writeBigInt64BE = Q(function(e, t = 0) {
		return L(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
	});
	function R(e, t, n, r, i, a) {
		if (n + r > e.length || n < 0) throw RangeError("Index out of range");
	}
	function z(e, t, r, i, a) {
		return t = +t, r >>>= 0, a || R(e, t, r, 4, 34028234663852886e22, -34028234663852886e22), n.write(e, t, r, i, 23, 4), r + 4;
	}
	s.prototype.writeFloatLE = function(e, t, n) {
		return z(this, e, t, !0, n);
	}, s.prototype.writeFloatBE = function(e, t, n) {
		return z(this, e, t, !1, n);
	};
	function B(e, t, r, i, a) {
		return t = +t, r >>>= 0, a || R(e, t, r, 8, 17976931348623157e292, -17976931348623157e292), n.write(e, t, r, i, 52, 8), r + 8;
	}
	s.prototype.writeDoubleLE = function(e, t, n) {
		return B(this, e, t, !0, n);
	}, s.prototype.writeDoubleBE = function(e, t, n) {
		return B(this, e, t, !1, n);
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
	var V = {};
	function H(e, t, n) {
		V[e] = class extends n {
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
	H("ERR_BUFFER_OUT_OF_BOUNDS", function(e) {
		return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
	}, RangeError), H("ERR_INVALID_ARG_TYPE", function(e, t) {
		return `The "${e}" argument must be of type number. Received type ${typeof t}`;
	}, TypeError), H("ERR_OUT_OF_RANGE", function(e, t, n) {
		let r = `The value of "${e}" is out of range.`, i = n;
		return Number.isInteger(n) && Math.abs(n) > 2 ** 32 ? i = U(String(n)) : typeof n == "bigint" && (i = String(n), (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (i = U(i)), i += "n"), r += ` It must be ${t}. Received ${i}`, r;
	}, RangeError);
	function U(e) {
		let t = "", n = e.length, r = +(e[0] === "-");
		for (; n >= r + 4; n -= 3) t = `_${e.slice(n - 3, n)}${t}`;
		return `${e.slice(0, n)}${t}`;
	}
	function re(e, t, n) {
		G(t, "offset"), (e[t] === void 0 || e[t + n] === void 0) && K(t, e.length - (n + 1));
	}
	function W(e, t, n, r, i, a) {
		if (e > n || e < t) {
			let r = typeof t == "bigint" ? "n" : "", i;
			throw i = a > 3 ? t === 0 || t === BigInt(0) ? `>= 0${r} and < 2${r} ** ${(a + 1) * 8}${r}` : `>= -(2${r} ** ${(a + 1) * 8 - 1}${r}) and < 2 ** ${(a + 1) * 8 - 1}${r}` : `>= ${t}${r} and <= ${n}${r}`, new V.ERR_OUT_OF_RANGE("value", i, e);
		}
		re(r, i, a);
	}
	function G(e, t) {
		if (typeof e != "number") throw new V.ERR_INVALID_ARG_TYPE(t, "number", e);
	}
	function K(e, t, n) {
		throw Math.floor(e) === e ? t < 0 ? new V.ERR_BUFFER_OUT_OF_BOUNDS() : new V.ERR_OUT_OF_RANGE(n || "offset", `>= ${+!!n} and <= ${t}`, e) : (G(e, n), new V.ERR_OUT_OF_RANGE(n || "offset", "an integer", e));
	}
	var ie = /[^+/0-9A-Za-z-_]/g;
	function ae(e) {
		if (e = e.split("=")[0], e = e.trim().replace(ie, ""), e.length < 2) return "";
		for (; e.length % 4 != 0;) e += "=";
		return e;
	}
	function q(e, t) {
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
	function oe(e) {
		let t = [];
		for (let n = 0; n < e.length; ++n) t.push(e.charCodeAt(n) & 255);
		return t;
	}
	function se(e, t) {
		let n, r, i, a = [];
		for (let o = 0; o < e.length && !((t -= 2) < 0); ++o) n = e.charCodeAt(o), r = n >> 8, i = n % 256, a.push(i), a.push(r);
		return a;
	}
	function J(e) {
		return t.toByteArray(ae(e));
	}
	function Y(e, t, n, r) {
		let i;
		for (i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
		return i;
	}
	function X(e, t) {
		return e instanceof t || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === t.name;
	}
	function Z(e) {
		return e !== e;
	}
	var ce = (function() {
		let e = "0123456789abcdef", t = Array(256);
		for (let n = 0; n < 16; ++n) {
			let r = n * 16;
			for (let i = 0; i < 16; ++i) t[r + i] = e[n] + e[i];
		}
		return t;
	})();
	function Q(e) {
		return typeof BigInt > "u" ? le : e;
	}
	function le() {
		throw Error("BigInt not supported");
	}
})))(), Ki = async (e) => {
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
}, qi = (e) => {
	e = atob(e);
	let t = new ArrayBuffer(e.length), n = new Uint8Array(t);
	for (let t = 0; t < e.length; t++) n[t] = e.charCodeAt(t);
	return n;
}, Ji = "data:image/#{encoding};base64,#{data}", Yi = ({ data: e, encoding: t, alt: n }) => {
	let r = Ji, [i, a] = c(void 0);
	return Oi(t) && (t = "png"), Oi(n) && (n = "ERROR"), Ki(new Blob([qi(e)])).then((e) => {
		r = r.replace("#{encoding}", t), r = r.replace("#{data}", Gi.Buffer.from(e).toString("base64")), a(r);
	}), /* @__PURE__ */ M(Box, {
		component: "img",
		src: i,
		alt: n,
		sx: {
			width: "100%",
			height: "auto",
			display: "block",
			maxWidth: "100%"
		}
	});
}, Xi = (e) => {
	let t = "", n = Object.keys(e).map((t) => {
		let n = e[t];
		return Oi(n) ? "" : `${encodeURIComponent(t)}=${encodeURIComponent(n)}`;
	}).filter((e) => e !== "").join("&");
	if (n) {
		let e = t.indexOf("#");
		e !== -1 && (t = t.slice(0, e)), t += (t.indexOf("?") === -1 ? "?" : "&") + n;
	}
	return t;
}, Zi = (e, { baseHeaders: t, handleErr: n, handleFinally: r, debug: i } = {}) => {
	let a = {
		"Content-Type": "application/json",
		...t
	}, o = (e) => {
		console.log(e);
	}, s = ({ endpoint: t, inputHeaders: s, fetchParams: c, args: l }) => {
		Oi(t) && (t = "");
		let u = e + t, d = {
			...a,
			...s
		};
		Object.keys(d).forEach((e) => {
			Oi(d[e]) && delete d[e];
		});
		let f = {
			method: "GET",
			headers: { ...d },
			...c
		};
		return Oi(l) || (f.method === "POST" && (f.body = JSON.stringify(l)), f.method === "GET" && (u += Xi(l))), fetch(u, f).catch((e) => n(e)).finally(() => {
			i && o({
				endpoint: t,
				inputHeaders: s,
				fetchParams: c
			}), !Oi(r) && r({
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
Zi("http://localhost:8080/", {
	handleErr: (e) => console.log(e),
	debug: !0
});
var Qi = ({ endpoint: e, handleErr: t }) => {
	Oi(t) && (t = (e) => console.log(e));
	let n = Zi(e, { handleErr: t });
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
		schema: async (e, t = {}) => await n.fetchJson({
			endpoint: "/create",
			fetchParams: {
				method: "GET",
				...t
			},
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
}, $i = (e, t) => () => e.get(t), ea = ({ jsxKey: e, endpoint: t, inputProps: n }) => {
	let [r, a] = c([/* @__PURE__ */ M("option", {
		value: n.defaultValue,
		children: n.defaultValue
	}, e + "-" + n.defaultValue)]), o = Qi({ endpoint: t });
	return i(() => {
		o.selectOptions().then((t) => {
			a(Object.keys(t).map((n) => {
				let r = t[n][Object.keys(t[n])[1]], i = t[n][Object.keys(t[n])[0]];
				return /* @__PURE__ */ M("option", {
					value: i,
					children: r
				}, e + "-" + n);
			}));
		});
	}, []), /* @__PURE__ */ M(w, {
		...n,
		defaultValue: n.defaultValue,
		children: [...r || /* @__PURE__ */ M(ne, {})]
	}, e);
}, ta = ({ buttons: e, endpoint: t, title: n, title_topology_params: r, button_stack_params: i, header_stack_params: a, outer_stack_params: o, ...s }) => {
	let c = e?.map((e) => e);
	return /* @__PURE__ */ N(T, {
		direction: "column",
		spacing: 1,
		sx: {
			width: "100%",
			justifyContent: "flex-start",
			alignItems: "center"
		},
		...o,
		children: [/* @__PURE__ */ N(T, {
			direction: "row",
			...a,
			children: [/* @__PURE__ */ M(te, {
				variant: "h6",
				sx: {
					m: 2,
					whiteSpace: "nowrap",
					overflow: "hidden",
					textOverflow: "ellipsis"
				},
				...r,
				children: n
			}), /* @__PURE__ */ M(T, {
				direction: "row",
				spacing: 2,
				sx: {
					pr: 16,
					pl: 16,
					justifyContent: "flex-end",
					width: "20%",
					alignItems: "center"
				},
				...i,
				children: c
			})]
		}), /* @__PURE__ */ M(za, {
			...s,
			endpoint: t
		})]
	});
}, na = ({ api: e, endpoint: t, refKey: n, register_component: r, ...a }) => {
	let o = wi();
	return i(() => {
		(async () => {
			let e = o?.get(n);
			if (!e) return;
			let t = { current: { ...e } };
			ka({ current: e }, { id: 17 }), await Fa(t);
		})();
	}, [o]), /* @__PURE__ */ M(ta, {
		api: e,
		endpoint: "get_paginated",
		buttons: [],
		title: "",
		refKey: n,
		register_component: r,
		...a
	});
}, ra = ({ jsxKey: e, key: t, inputProps: n }) => {
	let r;
	return t.charAt(t.length - 1) === "D" && t.charAt(t.length - 2) === "I" || t.charAt(t.length - 1) === "S" && t.charAt(t.length - 2) === "D" ? (t.charAt(t.length - 1) === "D" && t.charAt(t.length - 2) === "I" && (r = t.slice(5, t.length - 2)), t.charAt(t.length - 1) === "S" && t.charAt(t.length - 2) === "D" && (r = t.slice(5, t.length - 3), n = {
		...n,
		multiple: !0
	}), /* @__PURE__ */ M(ea, {
		endpoint: r,
		jsxKey: e,
		inputProps: n
	})) : null;
}, ia = () => ({ formRef: e, jsxKey: t, key: n, currentType: r, inputProps: i }) => {
	let a = ra({
		jsxKey: t,
		key: n,
		inputProps: i
	});
	if (!Oi(a)) return a;
	if (a = /* @__PURE__ */ M(b, {
		type: "text",
		...i
	}, t), r === "number" || r === "bigint") return /* @__PURE__ */ M(b, {
		type: "number",
		...i
	}, t);
	if (r === "boolean") return /* @__PURE__ */ M(E, {
		...i,
		defaultChecked: i.defaultValue
	}, t);
	if (r === "object") {
		if (i.defaultValue.Subtype === 20) return /* @__PURE__ */ M(na, {
			api: e.current?.api,
			refKey: "csv_grid",
			register_component: !0
		}, t);
		if (i.defaultValue.Subtype === 19) return /* @__PURE__ */ M(Va, { data: Pi(ca(e), n.slice(0, n.lastIndexOf(".")))?.value.Data }, t);
		if (i.defaultValue.Subtype === 17) return /* @__PURE__ */ M(Yi, { data: Pi(ca(e), n.slice(0, n.lastIndexOf(".")))?.value.Data }, t);
		if (i.defaultValue.Subtype === 16 || i.defaultValue.Subtype === 0) {
			let r = Pi(ca(e), n.slice(0, n.lastIndexOf(".")));
			return i.name = n.slice(0, n.lastIndexOf(".")) + ".Data", /* @__PURE__ */ M(Hi, {
				fileData: JSON.stringify(r?.value.Data, null, 2),
				inputProps: i,
				subtype: i.defaultValue.Subtype
			}, t);
		}
		if (!Oi(i.defaultValue.Subtype) || !Oi(i.defaultValue.Data)) return null;
		if (Array.isArray(i.defaultValue)) return Object.keys(i.defaultValue).map((e) => /* @__PURE__ */ M(b, {
			type: "text",
			...i,
			defaultValue: i.defaultValue[e]
		}, t));
		if (Oi(i.defaultValue)) return;
		let r = Object.keys(i.defaultValue)[0], a = i.defaultValue[r];
		return Di(a) ? /* @__PURE__ */ M(Bi, {
			inputKey: n,
			inputProps: i
		}) : void 0;
	}
	return a;
}, aa = (e, t = {}) => ({
	index: 0,
	elements: {},
	nameIndex: {},
	labels: {},
	useLabels: {},
	element_component: {},
	container: void 0,
	handleOnClose: void 0,
	elementSelector: e || ia(),
	context: t
}), oa = (e, t) => {
	let n = e.current;
	n.handleClose = t, e.current = n;
}, sa = (e, t) => {
	let n = e.current;
	Oi(n) || (n.container = t), e.current = n;
}, ca = (e) => e.current.container, la = (e, t) => {
	let n = e.current, r = n.labels[t], i = n.element_component[t];
	return n.useLabels[t] ? /* @__PURE__ */ N(T, {
		direction: "column",
		spacing: 1,
		sx: {
			width: "100%",
			pb: 1
		},
		children: [/* @__PURE__ */ M(u, {
			sx: { width: "100%" },
			children: r
		}), /* @__PURE__ */ M(u, {
			sx: { width: "100%" },
			children: i
		})]
	}, t) : /* @__PURE__ */ N(T, {
		direction: "row",
		gap: 1,
		sx: {
			justifyContent: "space-between",
			width: "100%",
			borderBottom: "1px solid rgba(0, 0, 0, 0.42)",
			pb: .5,
			alignItems: "flex-end"
		},
		children: [/* @__PURE__ */ M(u, {
			sx: {
				width: "50%",
				flexShrink: 0
			},
			children: r
		}), /* @__PURE__ */ M(u, {
			sx: { flexGrow: 1 },
			children: i
		})]
	}, t);
}, ua = (e) => {
	let t = {};
	return Object.keys(e.current.nameIndex).map((n, r) => {
		t[n] = la(e, r);
	}), /* @__PURE__ */ M(T, {
		direction: "column",
		gap: 0,
		sx: {
			flexGrow: 1,
			width: "100%"
		},
		children: Object.keys(t).map((e) => t[e])
	});
}, da = (e) => {
	let t = e.current;
	return { onChange: (n) => {
		let r = n.target.value, i = n.target.selectedOptions;
		if (!Oi(i)) {
			let e = [].slice.call(i);
			r = e.map((e) => e.value), e.length === 1 && (r = r[0]);
		}
		n.target.type === "datetime-local" && (r = new Date(Date.parse(r)).toISOString());
		let a = n.target.name, o = t.nameIndex[a];
		Oi(o) && (t.nameIndex[a] = t.index, o = t.index, e.current = t), t.elements[o] = r;
		let s = a.split("."), c = s.slice(0, s.length - 1).join("."), l = s.slice(s.length - 1);
		Oi(Pi(ca(e), c)) && (c = s.slice(0, s.length - 2).join(".")), n.target.type === "checkbox" && (r = n.currentTarget.checked), e.current = t, sa(e, Ri(ca(e), c, l, r)), e.current = t;
	} };
}, fa = (e, t) => {
	let n = e.current, r = n.nameIndex[t];
	return n.elements[r];
}, pa = (e, t, n) => {
	let r = typeof n, i = e.current, a = t + i.index, o = {
		name: t,
		defaultValue: fa(e, t),
		onChange: da(e).onChange,
		sx: { width: "100%" }
	};
	return i.elementSelector({
		key: t,
		formRef: e,
		jsxKey: a,
		currentType: r,
		inputProps: o
	});
}, ma = (e, t, n) => {
	let r = e.current, i = ki(t.replace(/root\./, ""), "_"), a = i.split(".");
	if (!a.some((e) => e.toLowerCase() === "data")) {
		if (Oi(r.nameIndex[t])) {
			r.nameIndex[t] = r.index, r.elements[r.index] = n;
			let o = pa(e, t, n);
			if (!Oi(o)) {
				let e = a[a.length - 1], n = e.toLowerCase() === "subtype", s = /^\d+$/.test(e);
				r.useLabels[r.index] = n || !s;
				let c = i;
				n && a.length > 1 && (c = a[a.length - 2]), r.labels[r.index] = /* @__PURE__ */ M(S, {
					column: t,
					children: c
				}, "Label" + t + r.index), r.element_component[r.index] = o, r.index++;
			}
		}
		e.current = r;
	}
}, ha = ({ formRef: e, container: t }) => {
	Ii(t, (t) => {
		let n = t.path, r = t.value;
		if (Array.isArray(r)) {
			let t = [];
			Object.keys(r).forEach((e) => {
				Oi(r[e]) || Array.isArray(r[e]) || t.push(r[e]);
			}), t.length > 0 && ma(e, n, t);
			return;
		}
		Object.keys(r).forEach((t) => {
			Oi(r[t]) || (typeof r[t] == "object" && Object.keys(r[t]).forEach((i) => {
				let a = {};
				a[i] = r[t][i], ma(e, n + "." + t + "." + i, a);
			}), Di(r[t]) && ma(e, n + "." + t, r[t]));
		});
	});
}, ga = ({ title: e, button_title: t, getButton: n, tabs: r, getSchema: i, handleSave: o, elementSelector: l, footerButtons: f, refKey: p, register_component: m = !1, context: h = null }) => {
	let g = Ti(p, m), _ = s(null), [v, y] = c(!1), b = () => {
		y(!1);
	}, x = () => {
		o(ca(_).value), y(!1);
	};
	_.current ||= aa(l, {
		setShow: (e) => {
			y(e);
		},
		...h
	}), a(() => (g(_.current), () => g(null)), [g]);
	let [S, C] = c(void 0), [w, E] = c(0), O = async () => {
		try {
			sa(_, zi(null, [], ".", await i())), oa(_, b), ha({
				formRef: _,
				container: ca(_)
			}), C(ua(_)), y(!0);
		} catch (e) {
			console.error("Failed to load schema:", e);
		}
	};
	return f ||= [
		/* @__PURE__ */ M(d, {
			onClick: () => {
				let e = {};
				e[_.current.index] = "";
				let t = ca(_);
				Oi(Pi(t, "root.fields")) && sa(_, Ni(t, "root.fields", {})), ma(_, "root.fields." + _.current.index, e), C(ua(_));
			},
			children: "Add Field"
		}),
		/* @__PURE__ */ M(d, {
			onClick: x,
			children: "Save"
		}),
		/* @__PURE__ */ M(d, {
			onClick: b,
			children: "Close"
		})
	], /* @__PURE__ */ N(T, {
		direction: "row",
		spacing: 1,
		children: [n ? n(O) : /* @__PURE__ */ M(d, {
			onClick: O,
			children: t
		}), /* @__PURE__ */ M(Ei, {
			title: e,
			body: /* @__PURE__ */ N(u, {
				sx: { width: "100%" },
				children: [
					r && /* @__PURE__ */ M(u, {
						sx: {
							borderBottom: 1,
							borderColor: "divider"
						},
						children: /* @__PURE__ */ N(ee, {
							value: w,
							onChange: (e, t) => E(t),
							"aria-label": "custom tabs",
							children: [/* @__PURE__ */ M(D, { label: "File Upload" }), /* @__PURE__ */ M(D, { label: "File Viewer" })]
						})
					}),
					w === 0 && /* @__PURE__ */ M(u, {
						sx: {
							borderBottom: 1,
							borderColor: "divider",
							width: "100%"
						},
						children: S
					}),
					w === 1 && /* @__PURE__ */ M(u, {
						sx: { p: 3 },
						children: /* @__PURE__ */ M("pre", { children: JSON.stringify(ca(_)?.value, null, 2) })
					})
				]
			}),
			show: v,
			footer: f
		})]
	});
}, _a = ({ title: e, show: t, onCancel: n, onConfirm: r }) => /* @__PURE__ */ M(Ei, {
	title: e || "Are you sure?",
	show: t,
	footer: /* @__PURE__ */ N(T, {
		direction: "column",
		gap: 3,
		children: [/* @__PURE__ */ M(d, {
			onClick: () => {
				Oi(n) || n();
			},
			children: "Cancel"
		}), /* @__PURE__ */ M(d, {
			onClick: () => {
				Oi(r) || r();
			},
			children: "Confirm"
		})]
	})
}), va = ({ refreshGrid: e, api: t, id: n, title: r, footerButtons: i, ...a }) => /* @__PURE__ */ M(ga, {
	title: r,
	button_title: "Update",
	getSchema: $i(t, n),
	handleSave: (r) => {
		t.update(r, n).then(() => e());
	},
	footerButtons: i,
	register_component: !0,
	refKey: String(n),
	...a
}), ya = ({ refreshGrid: e, api: t, id: n }) => {
	let [r, i] = c(!1);
	return /* @__PURE__ */ N(T, {
		direction: "row",
		spacing: 1,
		sx: {
			width: "100%",
			justifyContent: "center",
			alignItems: "center"
		},
		children: [/* @__PURE__ */ M(d, {
			onClick: () => {
				i(!r);
			},
			children: "Delete"
		}), /* @__PURE__ */ M(_a, {
			onConfirm: () => {
				t.deleteId(n).then(e());
			},
			show: r
		})]
	});
}, ba = ({ handleRefreshGrid: e, api: t, id: n, params: r }) => {
	let i = {
		...r,
		refreshGrid: e,
		api: t,
		id: n
	};
	return /* @__PURE__ */ N(T, {
		direction: "row",
		spacing: 1,
		sx: {
			width: "100%",
			justifyContent: "center",
			alignItems: "center"
		},
		children: [/* @__PURE__ */ M(va, { ...i }), /* @__PURE__ */ M(ya, { ...i })]
	});
}, xa = (e, t) => {
	let n = e.current;
	Li(t, (e) => {
		let t = e.value, r = e.path, i = typeof t;
		if (n.headers_ri[r] !== void 0) return;
		let a = "string";
		i === "number" ? a = "number" : r.toLowerCase().includes("date") || r.toLowerCase().includes("modified") ? a = "date" : i === "string" && (a = "string"), n.headers[n.index] = {
			field: r,
			type: a,
			headerName: r
		}, n.rows[n.index] = [], n.headers_ri[r] = n.index, n.index++;
	}), e.current = n;
}, Sa = (e) => {
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
}, Ca = (e, t) => {
	let n = e.current;
	if (!n) return;
	n.rows = [[], []], n.row_count = 0;
	let r = n.headers_ri.Field, i = n.headers_ri.Value;
	Object.entries(t).forEach(([e, t]) => {
		if (r !== void 0 && n.rows[r].push(ki(e, "_")), i !== void 0) {
			let e = Array.isArray(t) ? t.join(", ") : t;
			n.rows[i].push(e);
		}
		n.row_count++;
	}), e.current = n;
}, wa = (e, t) => {
	let n = e.current;
	n && (n.rows = [], n.row_count = 0, n.headers.forEach(() => {
		n.rows.push([]);
	}), Li(t, (e) => {
		if (Di(e.value)) {
			let t = n.headers_ri[e.path];
			t !== void 0 && n.rows[t].push(e.value);
		}
	}), e.current = n);
}, Ta = (e) => {
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
}, Ea = (e) => {
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
}, Da = (e) => {
	let t = e.current;
	return !t || !t.headers ? [] : t.headers;
}, Oa = (e) => {
	let t = e.current, n = Object.keys(t.headers_ri).map((e) => ({
		field: e,
		sortable: !0,
		filterable: !0,
		headerName: ki(e.split(".").pop(), "_"),
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
			renderCell: La(e)
		}, r = Math.max(0, n.length - 1);
		n.splice(r, 0, t);
	}
	return n;
}, ka = (e, t) => {
	let n = e.current;
	n && (n.args = {
		...n.args,
		...t
	}, e.current = n, n.refresh());
}, Aa = (e, t) => {
	let n = e.current;
	n && (n.args.sortModel = JSON.stringify(t), e.current = n);
}, ja = (e, t) => {
	let n = e.current;
	n && (n.args.filterModel = JSON.stringify(t), e.current = n);
}, Ma = (e) => e.current.fetch_params, Na = (e, t) => ({ getRows: async (n) => {
	let r = e.current;
	if (!r) return {
		rows: [],
		rowCount: 0
	};
	ja(e, n.filterModel), Aa(e, n.sortModel);
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
		Array.isArray(t) && t.length === 0 || Oi(t) || (s[e] = t);
	}), Oi(n.sortModel) || Array.isArray(n.sortModel) && n.sortModel.length === 0 && delete s.sortModel, Oi(n.filterModel) || Array.isArray(n.filterModel.items) && n.filterModel.items.length === 0 && delete s.filterModel;
	let c = await r.api?.at("/" + r.endpoint, {
		fetchParams: {
			method: "GET",
			...Ma(e)
		},
		args: s
	}), l = zi(null, [], ".", c.results);
	return xa(e, l), wa(e, l), r.row_count = c.pagination?.total || 0, e.current = r, t(), {
		rows: Ea(e),
		rowCount: c.pagination?.total || 0
	};
} }), Pa = (e) => e.current?.datasource, Fa = async (e) => {
	let t = e.current;
	if (!t) return;
	let n = t.gridRef.current;
	n.dataSource.cache.clear(), await n.dataSource.fetchRows(), t.refresh();
}, Ia = (e) => (t) => {
	let n = e.current;
	if (!n || n.rows.length === 0) return;
	let r = t.ids, i = n.rows[0].length, a = Array.from({ length: i }, (e, t) => t).filter((e) => {
		let t = n.rows[0][e];
		return r.has(t);
	});
	n.selected_data = n.rows.map((e) => a.map((t) => e[t])), n.selected_ids = t, e.current = n;
}, La = (e) => {
	let t = e.current;
	if (t) return t.cellRenderer ? t.cellRenderer(e) : Ra(e);
}, Ra = (e) => {
	let t = wi();
	return (n) => {
		let r = e.current;
		if (!r) return;
		let i = (e = !1) => {
			let r = t?.get(String(n.id))?.context;
			if (!r) return;
			let i = r.setShow;
			i(e);
		}, a = /* @__PURE__ */ N(T, {
			direction: "column",
			spacing: 2,
			sx: { width: "100%" },
			children: [/* @__PURE__ */ N(T, {
				spacing: 3,
				direction: "row",
				children: [
					/* @__PURE__ */ M(u, {
						sx: { ...r.modal_header_sx },
						children: "Update"
					}),
					/* @__PURE__ */ M(u, { sx: { flexGrow: 1 } }, "spacer"),
					/* @__PURE__ */ M(y, {
						onClick: () => i(!1),
						sx: {
							backgroundColor: "black",
							color: "white"
						},
						children: /* @__PURE__ */ M(K, {})
					})
				]
			}), /* @__PURE__ */ M(T, {
				spacing: 3,
				direction: "row",
				children: Object.entries(r.modal_header_rows || []).map((e) => e)
			})]
		});
		return /* @__PURE__ */ M(ba, {
			params: {
				footerButtons: [
					/* @__PURE__ */ M(d, {
						onClick: () => i(!1),
						children: "Close"
					}),
					/* @__PURE__ */ M(u, { sx: { flexGrow: 1 } }, "spacer"),
					/* @__PURE__ */ M(d, { children: "Update" })
				],
				title: a,
				...n.row
			},
			handleRefreshGrid: async () => await Fa(e),
			api: r.api,
			id: n.id
		});
	};
}, za = ({ api: e, endpoint: t, row_details: n, refKey: r, cellRenderer: i, register_component: o = !1, toolbar: l = !1, checkbox_select: u = !1, datagrid_sx: d = void 0, grid_options: f = void 0, context: p = void 0 }) => {
	let m = Ti(r, o), h = s(null), [, g] = c(!1), [_, v] = c({
		page: 0,
		pageSize: 25
	}), [y, b] = c(0), [x, S] = c({ id: !1 }), C = I(), w = () => {
		h.current && b(h.current?.row_count ?? 0), g((e) => !e);
	};
	return h.current ||= {
		context: p,
		gridRef: C,
		index: 0,
		headers: [],
		headers_ri: {},
		rows: [],
		row_count: t ? 0 : void 0,
		datasource: t ? Na(h, w) : void 0,
		paginationModel: {
			page: 0,
			pageSize: 5
		},
		args: {},
		selected_data: [],
		selected_ids: null,
		refresh: w,
		cellRenderer: i,
		filter_model: null,
		api: e,
		row_details: n,
		fetch_params: null,
		endpoint: t,
		register_component: o,
		refKey: r,
		modal_title: null,
		modal_header_rows: null,
		modal_header_sx: null,
		modal_header_row: null,
		...f
	}, a(() => (m(h.current), () => m(null)), [m]), /* @__PURE__ */ M(P, {
		apiRef: C,
		disableVirtualization: !0,
		columnVisibilityModel: x,
		onColumnVisibilityModelChange: (e) => S(e),
		rowCount: y,
		sx: {
			width: "100%",
			...d
		},
		columns: Oa(h),
		dataSource: Pa(h),
		pageSizeOptions: [
			25,
			50,
			100
		],
		paginationModel: _,
		onPaginationModelChange: (e) => {
			v(e);
		},
		onRowSelectionModelChange: (e) => Ia(h)(e),
		paginationMode: "server",
		sortingMode: "server",
		filterMode: "server",
		autosizeOnMount: !0,
		autosizeOptions: {
			includeOutliers: !0,
			includeHeaders: !0
		},
		checkboxSelection: u,
		showToolbar: l,
		getRowId: (e) => e.id,
		onDataSourceError: (e) => {
			console.error("DataGrid Error Type:", e.name), console.error("DataGrid Error Message:", e.message), e.cause && (console.group("Original Error Cause"), console.error("Message:", e.cause.message), console.error("Stack:", e.cause.stack), console.groupEnd()), e instanceof F ? console.warn("Fetch failed. Check your API mock or network.") : console.warn("Row update failed.");
		},
		...f
	});
};
j({
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
});
var Ba = () => {
	let e = {
		position: "sticky",
		zIndex: 2,
		backgroundColor: "white"
	}, t = {
		position: "sticky",
		width: "100%",
		zIndex: 3,
		backgroundColor: "#191E23 !important"
	};
	return {
		"& .MuiDataGrid-columnHeader-last": {
			width: "100%",
			flex: 2
		},
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
		"& .MuiDataGrid-main": { overflow: "auto" },
		"&": {
			width: "100%",
			display: "flex"
		}
	};
}, Va = ({ data: e, ...t }) => {
	let n = wi(), [r, a] = c({
		rows: [],
		columns: []
	});
	return i(() => {
		(async () => {
			let t = n?.get("key_value_grid");
			if (!t) return;
			let r = { current: { ...t } };
			Sa(r), Ca(r, e), a({
				rows: [...Ta(r)],
				columns: [...Da(r)]
			}), await Fa(r);
		})();
	}, [e, n]), /* @__PURE__ */ M(za, {
		register_component: !0,
		datagrid_sx: Ba(),
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
t(null);
var Ha = (e) => e == null, Ua = /* @__PURE__ */ me(((e) => {
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
})), Wa = /* @__PURE__ */ me(((e) => {
	e.read = function(e, t, n, r, i) {
		var a, o, s = i * 8 - r - 1, c = (1 << s) - 1, l = c >> 1, u = -7, d = n ? i - 1 : 0, f = n ? -1 : 1, p = e[t + d];
		for (d += f, a = p & (1 << -u) - 1, p >>= -u, u += s; u > 0; a = a * 256 + e[t + d], d += f, u -= 8);
		for (o = a & (1 << -u) - 1, a >>= -u, u += r; u > 0; o = o * 256 + e[t + d], d += f, u -= 8);
		if (a === 0) a = 1 - l;
		else if (a === c) return o ? NaN : (p ? -1 : 1) * Infinity;
		else o += 2 ** r, a -= l;
		return (p ? -1 : 1) * o * 2 ** (a - r);
	}, e.write = function(e, t, n, r, i, a) {
		var o, s, c, l = a * 8 - i - 1, u = (1 << l) - 1, d = u >> 1, f = i === 23 ? 2 ** -24 - 2 ** -77 : 0, p = r ? 0 : a - 1, m = r ? 1 : -1, h = +(t < 0 || t === 0 && 1 / t < 0);
		for (t = Math.abs(t), isNaN(t) || t === Infinity ? (s = +!!isNaN(t), o = u) : (o = Math.floor(Math.log(t) / Math.LN2), t * (c = 2 ** -o) < 1 && (o--, c *= 2), o + d >= 1 ? t += f / c : t += f * 2 ** (1 - d), t * c >= 2 && (o++, c /= 2), o + d >= u ? (s = 0, o = u) : o + d >= 1 ? (s = (t * c - 1) * 2 ** i, o += d) : (s = t * 2 ** (d - 1) * 2 ** i, o = 0)); i >= 8; e[n + p] = s & 255, p += m, s /= 256, i -= 8);
		for (o = o << i | s, l += i; l > 0; e[n + p] = o & 255, p += m, o /= 256, l -= 8);
		e[n + p - m] |= h * 128;
	};
}));
(/* @__PURE__ */ me(((e) => {
	var t = Ua(), n = Wa(), r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
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
		if (X(e, ArrayBuffer) || e && X(e.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (X(e, SharedArrayBuffer) || e && X(e.buffer, SharedArrayBuffer))) return h(e, t, n);
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
		if (X(e, Uint8Array)) {
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
		if (e.length !== void 0) return typeof e.length != "number" || Z(e.length) ? o(0) : p(e);
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
		if (X(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), X(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), !s.isBuffer(e) || !s.isBuffer(t)) throw TypeError("The \"buf1\", \"buf2\" arguments must be one of type Buffer or Uint8Array");
		if (e === t) return 0;
		let n = e.length, r = t.length;
		for (let i = 0, a = Math.min(n, r); i < a; ++i) if (e[i] !== t[i]) {
			n = e[i], r = t[i];
			break;
		}
		return n < r ? -1 : +(r < n);
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
			if (X(t, Uint8Array)) i + t.length > r.length ? (s.isBuffer(t) || (t = s.from(t)), t.copy(r, i)) : Uint8Array.prototype.set.call(r, t, i);
			else if (s.isBuffer(t)) t.copy(r, i);
			else throw TypeError("\"list\" argument must be an Array of Buffers");
			i += t.length;
		}
		return r;
	};
	function y(e, t) {
		if (s.isBuffer(e)) return e.length;
		if (ArrayBuffer.isView(e) || X(e, ArrayBuffer)) return e.byteLength;
		if (typeof e != "string") throw TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + typeof e);
		let n = e.length, r = arguments.length > 2 && arguments[2] === !0;
		if (!r && n === 0) return 0;
		let i = !1;
		for (;;) switch (t) {
			case "ascii":
			case "latin1":
			case "binary": return n;
			case "utf8":
			case "utf-8": return q(e).length;
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return n * 2;
			case "hex": return n >>> 1;
			case "base64": return J(e).length;
			default:
				if (i) return r ? -1 : q(e).length;
				t = ("" + t).toLowerCase(), i = !0;
		}
	}
	s.byteLength = y;
	function b(e, t, n) {
		let r = !1;
		if ((t === void 0 || t < 0) && (t = 0), t > this.length || ((n === void 0 || n > this.length) && (n = this.length), n <= 0) || (n >>>= 0, t >>>= 0, n <= t)) return "";
		for (e ||= "utf8";;) switch (e) {
			case "hex": return M(this, t, n);
			case "utf8":
			case "utf-8": return k(this, t, n);
			case "ascii": return j(this, t, n);
			case "latin1":
			case "binary": return ne(this, t, n);
			case "base64": return O(this, t, n);
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return N(this, t, n);
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
		return e === 0 ? "" : arguments.length === 0 ? k(this, 0, e) : b.apply(this, arguments);
	}, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(e) {
		if (!s.isBuffer(e)) throw TypeError("Argument must be a Buffer");
		return this === e ? !0 : s.compare(this, e) === 0;
	}, s.prototype.inspect = function() {
		let t = "", n = e.INSPECT_MAX_BYTES;
		return t = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(), this.length > n && (t += " ... "), "<Buffer " + t + ">";
	}, r && (s.prototype[r] = s.prototype.inspect), s.prototype.compare = function(e, t, n, r, i) {
		if (X(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), !s.isBuffer(e)) throw TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof e);
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
		return a < o ? -1 : +(o < a);
	};
	function S(e, t, n, r, i) {
		if (e.length === 0) return -1;
		if (typeof n == "string" ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, Z(n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
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
			if (Z(r)) return o;
			e[n + o] = r;
		}
		return o;
	}
	function T(e, t, n, r) {
		return Y(q(t, e.length - n), e, n, r);
	}
	function E(e, t, n, r) {
		return Y(oe(t), e, n, r);
	}
	function D(e, t, n, r) {
		return Y(J(t), e, n, r);
	}
	function ee(e, t, n, r) {
		return Y(se(t, e.length - n), e, n, r);
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
			case "binary": return E(this, e, t, n);
			case "base64": return D(this, e, t, n);
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return ee(this, e, t, n);
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
	function O(e, n, r) {
		return n === 0 && r === e.length ? t.fromByteArray(e) : t.fromByteArray(e.slice(n, r));
	}
	function k(e, t, n) {
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
		return te(r);
	}
	var A = 4096;
	function te(e) {
		let t = e.length;
		if (t <= A) return String.fromCharCode.apply(String, e);
		let n = "", r = 0;
		for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += A));
		return n;
	}
	function j(e, t, n) {
		let r = "";
		n = Math.min(e.length, n);
		for (let i = t; i < n; ++i) r += String.fromCharCode(e[i] & 127);
		return r;
	}
	function ne(e, t, n) {
		let r = "";
		n = Math.min(e.length, n);
		for (let i = t; i < n; ++i) r += String.fromCharCode(e[i]);
		return r;
	}
	function M(e, t, n) {
		let r = e.length;
		(!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
		let i = "";
		for (let r = t; r < n; ++r) i += ce[e[r]];
		return i;
	}
	function N(e, t, n) {
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
	function P(e, t, n) {
		if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
		if (e + t > n) throw RangeError("Trying to access beyond buffer length");
	}
	s.prototype.readUintLE = s.prototype.readUIntLE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = this[e], i = 1, a = 0;
		for (; ++a < t && (i *= 256);) r += this[e + a] * i;
		return r;
	}, s.prototype.readUintBE = s.prototype.readUIntBE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = this[e + --t], i = 1;
		for (; t > 0 && (i *= 256);) r += this[e + --t] * i;
		return r;
	}, s.prototype.readUint8 = s.prototype.readUInt8 = function(e, t) {
		return e >>>= 0, t || P(e, 1, this.length), this[e];
	}, s.prototype.readUint16LE = s.prototype.readUInt16LE = function(e, t) {
		return e >>>= 0, t || P(e, 2, this.length), this[e] | this[e + 1] << 8;
	}, s.prototype.readUint16BE = s.prototype.readUInt16BE = function(e, t) {
		return e >>>= 0, t || P(e, 2, this.length), this[e] << 8 | this[e + 1];
	}, s.prototype.readUint32LE = s.prototype.readUInt32LE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
	}, s.prototype.readUint32BE = s.prototype.readUInt32BE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
	}, s.prototype.readBigUInt64LE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24, i = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + n * 2 ** 24;
		return BigInt(r) + (BigInt(i) << BigInt(32));
	}), s.prototype.readBigUInt64BE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e], i = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n;
		return (BigInt(r) << BigInt(32)) + BigInt(i);
	}), s.prototype.readIntLE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = this[e], i = 1, a = 0;
		for (; ++a < t && (i *= 256);) r += this[e + a] * i;
		return i *= 128, r >= i && (r -= 2 ** (8 * t)), r;
	}, s.prototype.readIntBE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = t, i = 1, a = this[e + --r];
		for (; r > 0 && (i *= 256);) a += this[e + --r] * i;
		return i *= 128, a >= i && (a -= 2 ** (8 * t)), a;
	}, s.prototype.readInt8 = function(e, t) {
		return e >>>= 0, t || P(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e];
	}, s.prototype.readInt16LE = function(e, t) {
		e >>>= 0, t || P(e, 2, this.length);
		let n = this[e] | this[e + 1] << 8;
		return n & 32768 ? n | 4294901760 : n;
	}, s.prototype.readInt16BE = function(e, t) {
		e >>>= 0, t || P(e, 2, this.length);
		let n = this[e + 1] | this[e] << 8;
		return n & 32768 ? n | 4294901760 : n;
	}, s.prototype.readInt32LE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
	}, s.prototype.readInt32BE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
	}, s.prototype.readBigInt64LE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (n << 24);
		return (BigInt(r) << BigInt(32)) + BigInt(t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24);
	}), s.prototype.readBigInt64BE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
		return (BigInt(r) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n);
	}), s.prototype.readFloatLE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), n.read(this, e, !0, 23, 4);
	}, s.prototype.readFloatBE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), n.read(this, e, !1, 23, 4);
	}, s.prototype.readDoubleLE = function(e, t) {
		return e >>>= 0, t || P(e, 8, this.length), n.read(this, e, !0, 52, 8);
	}, s.prototype.readDoubleBE = function(e, t) {
		return e >>>= 0, t || P(e, 8, this.length), n.read(this, e, !1, 52, 8);
	};
	function F(e, t, n, r, i, a) {
		if (!s.isBuffer(e)) throw TypeError("\"buffer\" argument must be a Buffer instance");
		if (t > i || t < a) throw RangeError("\"value\" argument is out of bounds");
		if (n + r > e.length) throw RangeError("Index out of range");
	}
	s.prototype.writeUintLE = s.prototype.writeUIntLE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, n >>>= 0, !r) {
			let r = 2 ** (8 * n) - 1;
			F(this, e, t, n, r, 0);
		}
		let i = 1, a = 0;
		for (this[t] = e & 255; ++a < n && (i *= 256);) this[t + a] = e / i & 255;
		return t + n;
	}, s.prototype.writeUintBE = s.prototype.writeUIntBE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, n >>>= 0, !r) {
			let r = 2 ** (8 * n) - 1;
			F(this, e, t, n, r, 0);
		}
		let i = n - 1, a = 1;
		for (this[t + i] = e & 255; --i >= 0 && (a *= 256);) this[t + i] = e / a & 255;
		return t + n;
	}, s.prototype.writeUint8 = s.prototype.writeUInt8 = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 1, 255, 0), this[t] = e & 255, t + 1;
	}, s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 65535, 0), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
	}, s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
	}, s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = e & 255, t + 4;
	}, s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
	};
	function I(e, t, n, r, i) {
		W(t, r, i, e, n, 7);
		let a = Number(t & BigInt(4294967295));
		e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a;
		let o = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, n;
	}
	function L(e, t, n, r, i) {
		W(t, r, i, e, n, 7);
		let a = Number(t & BigInt(4294967295));
		e[n + 7] = a, a >>= 8, e[n + 6] = a, a >>= 8, e[n + 5] = a, a >>= 8, e[n + 4] = a;
		let o = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[n + 3] = o, o >>= 8, e[n + 2] = o, o >>= 8, e[n + 1] = o, o >>= 8, e[n] = o, n + 8;
	}
	s.prototype.writeBigUInt64LE = Q(function(e, t = 0) {
		return I(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
	}), s.prototype.writeBigUInt64BE = Q(function(e, t = 0) {
		return L(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
	}), s.prototype.writeIntLE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, !r) {
			let r = 2 ** (8 * n - 1);
			F(this, e, t, n, r - 1, -r);
		}
		let i = 0, a = 1, o = 0;
		for (this[t] = e & 255; ++i < n && (a *= 256);) e < 0 && o === 0 && this[t + i - 1] !== 0 && (o = 1), this[t + i] = (e / a >> 0) - o & 255;
		return t + n;
	}, s.prototype.writeIntBE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, !r) {
			let r = 2 ** (8 * n - 1);
			F(this, e, t, n, r - 1, -r);
		}
		let i = n - 1, a = 1, o = 0;
		for (this[t + i] = e & 255; --i >= 0 && (a *= 256);) e < 0 && o === 0 && this[t + i + 1] !== 0 && (o = 1), this[t + i] = (e / a >> 0) - o & 255;
		return t + n;
	}, s.prototype.writeInt8 = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = e & 255, t + 1;
	}, s.prototype.writeInt16LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 32767, -32768), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
	}, s.prototype.writeInt16BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
	}, s.prototype.writeInt32LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 2147483647, -2147483648), this[t] = e & 255, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4;
	}, s.prototype.writeInt32BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
	}, s.prototype.writeBigInt64LE = Q(function(e, t = 0) {
		return I(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
	}), s.prototype.writeBigInt64BE = Q(function(e, t = 0) {
		return L(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
	});
	function R(e, t, n, r, i, a) {
		if (n + r > e.length || n < 0) throw RangeError("Index out of range");
	}
	function z(e, t, r, i, a) {
		return t = +t, r >>>= 0, a || R(e, t, r, 4, 34028234663852886e22, -34028234663852886e22), n.write(e, t, r, i, 23, 4), r + 4;
	}
	s.prototype.writeFloatLE = function(e, t, n) {
		return z(this, e, t, !0, n);
	}, s.prototype.writeFloatBE = function(e, t, n) {
		return z(this, e, t, !1, n);
	};
	function B(e, t, r, i, a) {
		return t = +t, r >>>= 0, a || R(e, t, r, 8, 17976931348623157e292, -17976931348623157e292), n.write(e, t, r, i, 52, 8), r + 8;
	}
	s.prototype.writeDoubleLE = function(e, t, n) {
		return B(this, e, t, !0, n);
	}, s.prototype.writeDoubleBE = function(e, t, n) {
		return B(this, e, t, !1, n);
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
	var V = {};
	function H(e, t, n) {
		V[e] = class extends n {
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
	H("ERR_BUFFER_OUT_OF_BOUNDS", function(e) {
		return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
	}, RangeError), H("ERR_INVALID_ARG_TYPE", function(e, t) {
		return `The "${e}" argument must be of type number. Received type ${typeof t}`;
	}, TypeError), H("ERR_OUT_OF_RANGE", function(e, t, n) {
		let r = `The value of "${e}" is out of range.`, i = n;
		return Number.isInteger(n) && Math.abs(n) > 2 ** 32 ? i = U(String(n)) : typeof n == "bigint" && (i = String(n), (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (i = U(i)), i += "n"), r += ` It must be ${t}. Received ${i}`, r;
	}, RangeError);
	function U(e) {
		let t = "", n = e.length, r = +(e[0] === "-");
		for (; n >= r + 4; n -= 3) t = `_${e.slice(n - 3, n)}${t}`;
		return `${e.slice(0, n)}${t}`;
	}
	function re(e, t, n) {
		G(t, "offset"), (e[t] === void 0 || e[t + n] === void 0) && K(t, e.length - (n + 1));
	}
	function W(e, t, n, r, i, a) {
		if (e > n || e < t) {
			let r = typeof t == "bigint" ? "n" : "", i;
			throw i = a > 3 ? t === 0 || t === BigInt(0) ? `>= 0${r} and < 2${r} ** ${(a + 1) * 8}${r}` : `>= -(2${r} ** ${(a + 1) * 8 - 1}${r}) and < 2 ** ${(a + 1) * 8 - 1}${r}` : `>= ${t}${r} and <= ${n}${r}`, new V.ERR_OUT_OF_RANGE("value", i, e);
		}
		re(r, i, a);
	}
	function G(e, t) {
		if (typeof e != "number") throw new V.ERR_INVALID_ARG_TYPE(t, "number", e);
	}
	function K(e, t, n) {
		throw Math.floor(e) === e ? t < 0 ? new V.ERR_BUFFER_OUT_OF_BOUNDS() : new V.ERR_OUT_OF_RANGE(n || "offset", `>= ${+!!n} and <= ${t}`, e) : (G(e, n), new V.ERR_OUT_OF_RANGE(n || "offset", "an integer", e));
	}
	var ie = /[^+/0-9A-Za-z-_]/g;
	function ae(e) {
		if (e = e.split("=")[0], e = e.trim().replace(ie, ""), e.length < 2) return "";
		for (; e.length % 4 != 0;) e += "=";
		return e;
	}
	function q(e, t) {
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
	function oe(e) {
		let t = [];
		for (let n = 0; n < e.length; ++n) t.push(e.charCodeAt(n) & 255);
		return t;
	}
	function se(e, t) {
		let n, r, i, a = [];
		for (let o = 0; o < e.length && !((t -= 2) < 0); ++o) n = e.charCodeAt(o), r = n >> 8, i = n % 256, a.push(i), a.push(r);
		return a;
	}
	function J(e) {
		return t.toByteArray(ae(e));
	}
	function Y(e, t, n, r) {
		let i;
		for (i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
		return i;
	}
	function X(e, t) {
		return e instanceof t || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === t.name;
	}
	function Z(e) {
		return e !== e;
	}
	var ce = (function() {
		let e = "0123456789abcdef", t = Array(256);
		for (let n = 0; n < 16; ++n) {
			let r = n * 16;
			for (let i = 0; i < 16; ++i) t[r + i] = e[n] + e[i];
		}
		return t;
	})();
	function Q(e) {
		return typeof BigInt > "u" ? le : e;
	}
	function le() {
		throw Error("BigInt not supported");
	}
})))();
var Ga = (e) => {
	let t = "", n = Object.keys(e).map((t) => {
		let n = e[t];
		return Ha(n) ? "" : `${encodeURIComponent(t)}=${encodeURIComponent(n)}`;
	}).filter((e) => e !== "").join("&");
	if (n) {
		let e = t.indexOf("#");
		e !== -1 && (t = t.slice(0, e)), t += (t.indexOf("?") === -1 ? "?" : "&") + n;
	}
	return t;
};
((e, { baseHeaders: t, handleErr: n, handleFinally: r, debug: i } = {}) => {
	let a = {
		"Content-Type": "application/json",
		...t
	}, o = (e) => {
		console.log(e);
	}, s = ({ endpoint: t, inputHeaders: s, fetchParams: c, args: l }) => {
		Ha(t) && (t = "");
		let u = e + t, d = {
			...a,
			...s
		};
		Object.keys(d).forEach((e) => {
			Ha(d[e]) && delete d[e];
		});
		let f = {
			method: "GET",
			headers: { ...d },
			...c
		};
		return Ha(l) || (f.method === "POST" && (f.body = JSON.stringify(l)), f.method === "GET" && (u += Ga(l))), fetch(u, f).catch((e) => n(e)).finally(() => {
			i && o({
				endpoint: t,
				inputHeaders: s,
				fetchParams: c
			}), !Ha(r) && r({
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
})("http://localhost:8080/", {
	handleErr: (e) => console.log(e),
	debug: !0
}), j({
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
}), t(null);
var Ka = (e) => e == null, qa = /* @__PURE__ */ pe(((e) => {
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
})), Ja = /* @__PURE__ */ pe(((e) => {
	e.read = function(e, t, n, r, i) {
		var a, o, s = i * 8 - r - 1, c = (1 << s) - 1, l = c >> 1, u = -7, d = n ? i - 1 : 0, f = n ? -1 : 1, p = e[t + d];
		for (d += f, a = p & (1 << -u) - 1, p >>= -u, u += s; u > 0; a = a * 256 + e[t + d], d += f, u -= 8);
		for (o = a & (1 << -u) - 1, a >>= -u, u += r; u > 0; o = o * 256 + e[t + d], d += f, u -= 8);
		if (a === 0) a = 1 - l;
		else if (a === c) return o ? NaN : (p ? -1 : 1) * Infinity;
		else o += 2 ** r, a -= l;
		return (p ? -1 : 1) * o * 2 ** (a - r);
	}, e.write = function(e, t, n, r, i, a) {
		var o, s, c, l = a * 8 - i - 1, u = (1 << l) - 1, d = u >> 1, f = i === 23 ? 2 ** -24 - 2 ** -77 : 0, p = r ? 0 : a - 1, m = r ? 1 : -1, h = +(t < 0 || t === 0 && 1 / t < 0);
		for (t = Math.abs(t), isNaN(t) || t === Infinity ? (s = +!!isNaN(t), o = u) : (o = Math.floor(Math.log(t) / Math.LN2), t * (c = 2 ** -o) < 1 && (o--, c *= 2), o + d >= 1 ? t += f / c : t += f * 2 ** (1 - d), t * c >= 2 && (o++, c /= 2), o + d >= u ? (s = 0, o = u) : o + d >= 1 ? (s = (t * c - 1) * 2 ** i, o += d) : (s = t * 2 ** (d - 1) * 2 ** i, o = 0)); i >= 8; e[n + p] = s & 255, p += m, s /= 256, i -= 8);
		for (o = o << i | s, l += i; l > 0; e[n + p] = o & 255, p += m, o /= 256, l -= 8);
		e[n + p - m] |= h * 128;
	};
}));
(/* @__PURE__ */ pe(((e) => {
	var t = qa(), n = Ja(), r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
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
		if (X(e, ArrayBuffer) || e && X(e.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (X(e, SharedArrayBuffer) || e && X(e.buffer, SharedArrayBuffer))) return h(e, t, n);
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
		if (X(e, Uint8Array)) {
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
		if (e.length !== void 0) return typeof e.length != "number" || Z(e.length) ? o(0) : p(e);
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
		if (X(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), X(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), !s.isBuffer(e) || !s.isBuffer(t)) throw TypeError("The \"buf1\", \"buf2\" arguments must be one of type Buffer or Uint8Array");
		if (e === t) return 0;
		let n = e.length, r = t.length;
		for (let i = 0, a = Math.min(n, r); i < a; ++i) if (e[i] !== t[i]) {
			n = e[i], r = t[i];
			break;
		}
		return n < r ? -1 : +(r < n);
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
			if (X(t, Uint8Array)) i + t.length > r.length ? (s.isBuffer(t) || (t = s.from(t)), t.copy(r, i)) : Uint8Array.prototype.set.call(r, t, i);
			else if (s.isBuffer(t)) t.copy(r, i);
			else throw TypeError("\"list\" argument must be an Array of Buffers");
			i += t.length;
		}
		return r;
	};
	function y(e, t) {
		if (s.isBuffer(e)) return e.length;
		if (ArrayBuffer.isView(e) || X(e, ArrayBuffer)) return e.byteLength;
		if (typeof e != "string") throw TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + typeof e);
		let n = e.length, r = arguments.length > 2 && arguments[2] === !0;
		if (!r && n === 0) return 0;
		let i = !1;
		for (;;) switch (t) {
			case "ascii":
			case "latin1":
			case "binary": return n;
			case "utf8":
			case "utf-8": return q(e).length;
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return n * 2;
			case "hex": return n >>> 1;
			case "base64": return J(e).length;
			default:
				if (i) return r ? -1 : q(e).length;
				t = ("" + t).toLowerCase(), i = !0;
		}
	}
	s.byteLength = y;
	function b(e, t, n) {
		let r = !1;
		if ((t === void 0 || t < 0) && (t = 0), t > this.length || ((n === void 0 || n > this.length) && (n = this.length), n <= 0) || (n >>>= 0, t >>>= 0, n <= t)) return "";
		for (e ||= "utf8";;) switch (e) {
			case "hex": return M(this, t, n);
			case "utf8":
			case "utf-8": return k(this, t, n);
			case "ascii": return j(this, t, n);
			case "latin1":
			case "binary": return ne(this, t, n);
			case "base64": return O(this, t, n);
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return N(this, t, n);
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
		return e === 0 ? "" : arguments.length === 0 ? k(this, 0, e) : b.apply(this, arguments);
	}, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(e) {
		if (!s.isBuffer(e)) throw TypeError("Argument must be a Buffer");
		return this === e ? !0 : s.compare(this, e) === 0;
	}, s.prototype.inspect = function() {
		let t = "", n = e.INSPECT_MAX_BYTES;
		return t = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(), this.length > n && (t += " ... "), "<Buffer " + t + ">";
	}, r && (s.prototype[r] = s.prototype.inspect), s.prototype.compare = function(e, t, n, r, i) {
		if (X(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), !s.isBuffer(e)) throw TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof e);
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
		return a < o ? -1 : +(o < a);
	};
	function S(e, t, n, r, i) {
		if (e.length === 0) return -1;
		if (typeof n == "string" ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, Z(n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
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
			if (Z(r)) return o;
			e[n + o] = r;
		}
		return o;
	}
	function T(e, t, n, r) {
		return Y(q(t, e.length - n), e, n, r);
	}
	function E(e, t, n, r) {
		return Y(oe(t), e, n, r);
	}
	function D(e, t, n, r) {
		return Y(J(t), e, n, r);
	}
	function ee(e, t, n, r) {
		return Y(se(t, e.length - n), e, n, r);
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
			case "binary": return E(this, e, t, n);
			case "base64": return D(this, e, t, n);
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return ee(this, e, t, n);
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
	function O(e, n, r) {
		return n === 0 && r === e.length ? t.fromByteArray(e) : t.fromByteArray(e.slice(n, r));
	}
	function k(e, t, n) {
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
		return te(r);
	}
	var A = 4096;
	function te(e) {
		let t = e.length;
		if (t <= A) return String.fromCharCode.apply(String, e);
		let n = "", r = 0;
		for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += A));
		return n;
	}
	function j(e, t, n) {
		let r = "";
		n = Math.min(e.length, n);
		for (let i = t; i < n; ++i) r += String.fromCharCode(e[i] & 127);
		return r;
	}
	function ne(e, t, n) {
		let r = "";
		n = Math.min(e.length, n);
		for (let i = t; i < n; ++i) r += String.fromCharCode(e[i]);
		return r;
	}
	function M(e, t, n) {
		let r = e.length;
		(!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
		let i = "";
		for (let r = t; r < n; ++r) i += ce[e[r]];
		return i;
	}
	function N(e, t, n) {
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
	function P(e, t, n) {
		if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
		if (e + t > n) throw RangeError("Trying to access beyond buffer length");
	}
	s.prototype.readUintLE = s.prototype.readUIntLE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = this[e], i = 1, a = 0;
		for (; ++a < t && (i *= 256);) r += this[e + a] * i;
		return r;
	}, s.prototype.readUintBE = s.prototype.readUIntBE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = this[e + --t], i = 1;
		for (; t > 0 && (i *= 256);) r += this[e + --t] * i;
		return r;
	}, s.prototype.readUint8 = s.prototype.readUInt8 = function(e, t) {
		return e >>>= 0, t || P(e, 1, this.length), this[e];
	}, s.prototype.readUint16LE = s.prototype.readUInt16LE = function(e, t) {
		return e >>>= 0, t || P(e, 2, this.length), this[e] | this[e + 1] << 8;
	}, s.prototype.readUint16BE = s.prototype.readUInt16BE = function(e, t) {
		return e >>>= 0, t || P(e, 2, this.length), this[e] << 8 | this[e + 1];
	}, s.prototype.readUint32LE = s.prototype.readUInt32LE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
	}, s.prototype.readUint32BE = s.prototype.readUInt32BE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
	}, s.prototype.readBigUInt64LE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24, i = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + n * 2 ** 24;
		return BigInt(r) + (BigInt(i) << BigInt(32));
	}), s.prototype.readBigUInt64BE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e], i = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n;
		return (BigInt(r) << BigInt(32)) + BigInt(i);
	}), s.prototype.readIntLE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = this[e], i = 1, a = 0;
		for (; ++a < t && (i *= 256);) r += this[e + a] * i;
		return i *= 128, r >= i && (r -= 2 ** (8 * t)), r;
	}, s.prototype.readIntBE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = t, i = 1, a = this[e + --r];
		for (; r > 0 && (i *= 256);) a += this[e + --r] * i;
		return i *= 128, a >= i && (a -= 2 ** (8 * t)), a;
	}, s.prototype.readInt8 = function(e, t) {
		return e >>>= 0, t || P(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e];
	}, s.prototype.readInt16LE = function(e, t) {
		e >>>= 0, t || P(e, 2, this.length);
		let n = this[e] | this[e + 1] << 8;
		return n & 32768 ? n | 4294901760 : n;
	}, s.prototype.readInt16BE = function(e, t) {
		e >>>= 0, t || P(e, 2, this.length);
		let n = this[e + 1] | this[e] << 8;
		return n & 32768 ? n | 4294901760 : n;
	}, s.prototype.readInt32LE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
	}, s.prototype.readInt32BE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
	}, s.prototype.readBigInt64LE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (n << 24);
		return (BigInt(r) << BigInt(32)) + BigInt(t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24);
	}), s.prototype.readBigInt64BE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
		return (BigInt(r) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n);
	}), s.prototype.readFloatLE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), n.read(this, e, !0, 23, 4);
	}, s.prototype.readFloatBE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), n.read(this, e, !1, 23, 4);
	}, s.prototype.readDoubleLE = function(e, t) {
		return e >>>= 0, t || P(e, 8, this.length), n.read(this, e, !0, 52, 8);
	}, s.prototype.readDoubleBE = function(e, t) {
		return e >>>= 0, t || P(e, 8, this.length), n.read(this, e, !1, 52, 8);
	};
	function F(e, t, n, r, i, a) {
		if (!s.isBuffer(e)) throw TypeError("\"buffer\" argument must be a Buffer instance");
		if (t > i || t < a) throw RangeError("\"value\" argument is out of bounds");
		if (n + r > e.length) throw RangeError("Index out of range");
	}
	s.prototype.writeUintLE = s.prototype.writeUIntLE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, n >>>= 0, !r) {
			let r = 2 ** (8 * n) - 1;
			F(this, e, t, n, r, 0);
		}
		let i = 1, a = 0;
		for (this[t] = e & 255; ++a < n && (i *= 256);) this[t + a] = e / i & 255;
		return t + n;
	}, s.prototype.writeUintBE = s.prototype.writeUIntBE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, n >>>= 0, !r) {
			let r = 2 ** (8 * n) - 1;
			F(this, e, t, n, r, 0);
		}
		let i = n - 1, a = 1;
		for (this[t + i] = e & 255; --i >= 0 && (a *= 256);) this[t + i] = e / a & 255;
		return t + n;
	}, s.prototype.writeUint8 = s.prototype.writeUInt8 = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 1, 255, 0), this[t] = e & 255, t + 1;
	}, s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 65535, 0), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
	}, s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
	}, s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = e & 255, t + 4;
	}, s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
	};
	function I(e, t, n, r, i) {
		W(t, r, i, e, n, 7);
		let a = Number(t & BigInt(4294967295));
		e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a;
		let o = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, n;
	}
	function L(e, t, n, r, i) {
		W(t, r, i, e, n, 7);
		let a = Number(t & BigInt(4294967295));
		e[n + 7] = a, a >>= 8, e[n + 6] = a, a >>= 8, e[n + 5] = a, a >>= 8, e[n + 4] = a;
		let o = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[n + 3] = o, o >>= 8, e[n + 2] = o, o >>= 8, e[n + 1] = o, o >>= 8, e[n] = o, n + 8;
	}
	s.prototype.writeBigUInt64LE = Q(function(e, t = 0) {
		return I(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
	}), s.prototype.writeBigUInt64BE = Q(function(e, t = 0) {
		return L(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
	}), s.prototype.writeIntLE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, !r) {
			let r = 2 ** (8 * n - 1);
			F(this, e, t, n, r - 1, -r);
		}
		let i = 0, a = 1, o = 0;
		for (this[t] = e & 255; ++i < n && (a *= 256);) e < 0 && o === 0 && this[t + i - 1] !== 0 && (o = 1), this[t + i] = (e / a >> 0) - o & 255;
		return t + n;
	}, s.prototype.writeIntBE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, !r) {
			let r = 2 ** (8 * n - 1);
			F(this, e, t, n, r - 1, -r);
		}
		let i = n - 1, a = 1, o = 0;
		for (this[t + i] = e & 255; --i >= 0 && (a *= 256);) e < 0 && o === 0 && this[t + i + 1] !== 0 && (o = 1), this[t + i] = (e / a >> 0) - o & 255;
		return t + n;
	}, s.prototype.writeInt8 = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = e & 255, t + 1;
	}, s.prototype.writeInt16LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 32767, -32768), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
	}, s.prototype.writeInt16BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
	}, s.prototype.writeInt32LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 2147483647, -2147483648), this[t] = e & 255, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4;
	}, s.prototype.writeInt32BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
	}, s.prototype.writeBigInt64LE = Q(function(e, t = 0) {
		return I(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
	}), s.prototype.writeBigInt64BE = Q(function(e, t = 0) {
		return L(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
	});
	function R(e, t, n, r, i, a) {
		if (n + r > e.length || n < 0) throw RangeError("Index out of range");
	}
	function z(e, t, r, i, a) {
		return t = +t, r >>>= 0, a || R(e, t, r, 4, 34028234663852886e22, -34028234663852886e22), n.write(e, t, r, i, 23, 4), r + 4;
	}
	s.prototype.writeFloatLE = function(e, t, n) {
		return z(this, e, t, !0, n);
	}, s.prototype.writeFloatBE = function(e, t, n) {
		return z(this, e, t, !1, n);
	};
	function B(e, t, r, i, a) {
		return t = +t, r >>>= 0, a || R(e, t, r, 8, 17976931348623157e292, -17976931348623157e292), n.write(e, t, r, i, 52, 8), r + 8;
	}
	s.prototype.writeDoubleLE = function(e, t, n) {
		return B(this, e, t, !0, n);
	}, s.prototype.writeDoubleBE = function(e, t, n) {
		return B(this, e, t, !1, n);
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
	var V = {};
	function H(e, t, n) {
		V[e] = class extends n {
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
	H("ERR_BUFFER_OUT_OF_BOUNDS", function(e) {
		return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
	}, RangeError), H("ERR_INVALID_ARG_TYPE", function(e, t) {
		return `The "${e}" argument must be of type number. Received type ${typeof t}`;
	}, TypeError), H("ERR_OUT_OF_RANGE", function(e, t, n) {
		let r = `The value of "${e}" is out of range.`, i = n;
		return Number.isInteger(n) && Math.abs(n) > 2 ** 32 ? i = U(String(n)) : typeof n == "bigint" && (i = String(n), (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (i = U(i)), i += "n"), r += ` It must be ${t}. Received ${i}`, r;
	}, RangeError);
	function U(e) {
		let t = "", n = e.length, r = +(e[0] === "-");
		for (; n >= r + 4; n -= 3) t = `_${e.slice(n - 3, n)}${t}`;
		return `${e.slice(0, n)}${t}`;
	}
	function re(e, t, n) {
		G(t, "offset"), (e[t] === void 0 || e[t + n] === void 0) && K(t, e.length - (n + 1));
	}
	function W(e, t, n, r, i, a) {
		if (e > n || e < t) {
			let r = typeof t == "bigint" ? "n" : "", i;
			throw i = a > 3 ? t === 0 || t === BigInt(0) ? `>= 0${r} and < 2${r} ** ${(a + 1) * 8}${r}` : `>= -(2${r} ** ${(a + 1) * 8 - 1}${r}) and < 2 ** ${(a + 1) * 8 - 1}${r}` : `>= ${t}${r} and <= ${n}${r}`, new V.ERR_OUT_OF_RANGE("value", i, e);
		}
		re(r, i, a);
	}
	function G(e, t) {
		if (typeof e != "number") throw new V.ERR_INVALID_ARG_TYPE(t, "number", e);
	}
	function K(e, t, n) {
		throw Math.floor(e) === e ? t < 0 ? new V.ERR_BUFFER_OUT_OF_BOUNDS() : new V.ERR_OUT_OF_RANGE(n || "offset", `>= ${+!!n} and <= ${t}`, e) : (G(e, n), new V.ERR_OUT_OF_RANGE(n || "offset", "an integer", e));
	}
	var ie = /[^+/0-9A-Za-z-_]/g;
	function ae(e) {
		if (e = e.split("=")[0], e = e.trim().replace(ie, ""), e.length < 2) return "";
		for (; e.length % 4 != 0;) e += "=";
		return e;
	}
	function q(e, t) {
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
	function oe(e) {
		let t = [];
		for (let n = 0; n < e.length; ++n) t.push(e.charCodeAt(n) & 255);
		return t;
	}
	function se(e, t) {
		let n, r, i, a = [];
		for (let o = 0; o < e.length && !((t -= 2) < 0); ++o) n = e.charCodeAt(o), r = n >> 8, i = n % 256, a.push(i), a.push(r);
		return a;
	}
	function J(e) {
		return t.toByteArray(ae(e));
	}
	function Y(e, t, n, r) {
		let i;
		for (i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
		return i;
	}
	function X(e, t) {
		return e instanceof t || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === t.name;
	}
	function Z(e) {
		return e !== e;
	}
	var ce = (function() {
		let e = "0123456789abcdef", t = Array(256);
		for (let n = 0; n < 16; ++n) {
			let r = n * 16;
			for (let i = 0; i < 16; ++i) t[r + i] = e[n] + e[i];
		}
		return t;
	})();
	function Q(e) {
		return typeof BigInt > "u" ? le : e;
	}
	function le() {
		throw Error("BigInt not supported");
	}
})))();
var Ya = (e) => {
	let t = "", n = Object.keys(e).map((t) => {
		let n = e[t];
		return Ka(n) ? "" : `${encodeURIComponent(t)}=${encodeURIComponent(n)}`;
	}).filter((e) => e !== "").join("&");
	if (n) {
		let e = t.indexOf("#");
		e !== -1 && (t = t.slice(0, e)), t += (t.indexOf("?") === -1 ? "?" : "&") + n;
	}
	return t;
};
((e, { baseHeaders: t, handleErr: n, handleFinally: r, debug: i } = {}) => {
	let a = {
		"Content-Type": "application/json",
		...t
	}, o = (e) => {
		console.log(e);
	}, s = ({ endpoint: t, inputHeaders: s, fetchParams: c, args: l }) => {
		Ka(t) && (t = "");
		let u = e + t, d = {
			...a,
			...s
		};
		Object.keys(d).forEach((e) => {
			Ka(d[e]) && delete d[e];
		});
		let f = {
			method: "GET",
			headers: { ...d },
			...c
		};
		return Ka(l) || (f.method === "POST" && (f.body = JSON.stringify(l)), f.method === "GET" && (u += Ya(l))), fetch(u, f).catch((e) => n(e)).finally(() => {
			i && o({
				endpoint: t,
				inputHeaders: s,
				fetchParams: c
			}), !Ka(r) && r({
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
})("http://localhost:8080/", {
	handleErr: (e) => console.log(e),
	debug: !0
}), j({
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
}), t(null);
var Xa = (e) => e == null, Za = /* @__PURE__ */ fe(((e) => {
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
})), Qa = /* @__PURE__ */ fe(((e) => {
	e.read = function(e, t, n, r, i) {
		var a, o, s = i * 8 - r - 1, c = (1 << s) - 1, l = c >> 1, u = -7, d = n ? i - 1 : 0, f = n ? -1 : 1, p = e[t + d];
		for (d += f, a = p & (1 << -u) - 1, p >>= -u, u += s; u > 0; a = a * 256 + e[t + d], d += f, u -= 8);
		for (o = a & (1 << -u) - 1, a >>= -u, u += r; u > 0; o = o * 256 + e[t + d], d += f, u -= 8);
		if (a === 0) a = 1 - l;
		else if (a === c) return o ? NaN : (p ? -1 : 1) * Infinity;
		else o += 2 ** r, a -= l;
		return (p ? -1 : 1) * o * 2 ** (a - r);
	}, e.write = function(e, t, n, r, i, a) {
		var o, s, c, l = a * 8 - i - 1, u = (1 << l) - 1, d = u >> 1, f = i === 23 ? 2 ** -24 - 2 ** -77 : 0, p = r ? 0 : a - 1, m = r ? 1 : -1, h = +(t < 0 || t === 0 && 1 / t < 0);
		for (t = Math.abs(t), isNaN(t) || t === Infinity ? (s = +!!isNaN(t), o = u) : (o = Math.floor(Math.log(t) / Math.LN2), t * (c = 2 ** -o) < 1 && (o--, c *= 2), o + d >= 1 ? t += f / c : t += f * 2 ** (1 - d), t * c >= 2 && (o++, c /= 2), o + d >= u ? (s = 0, o = u) : o + d >= 1 ? (s = (t * c - 1) * 2 ** i, o += d) : (s = t * 2 ** (d - 1) * 2 ** i, o = 0)); i >= 8; e[n + p] = s & 255, p += m, s /= 256, i -= 8);
		for (o = o << i | s, l += i; l > 0; e[n + p] = o & 255, p += m, o /= 256, l -= 8);
		e[n + p - m] |= h * 128;
	};
}));
(/* @__PURE__ */ fe(((e) => {
	var t = Za(), n = Qa(), r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
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
		if (X(e, ArrayBuffer) || e && X(e.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (X(e, SharedArrayBuffer) || e && X(e.buffer, SharedArrayBuffer))) return h(e, t, n);
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
		if (X(e, Uint8Array)) {
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
		if (e.length !== void 0) return typeof e.length != "number" || Z(e.length) ? o(0) : p(e);
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
		if (X(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), X(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), !s.isBuffer(e) || !s.isBuffer(t)) throw TypeError("The \"buf1\", \"buf2\" arguments must be one of type Buffer or Uint8Array");
		if (e === t) return 0;
		let n = e.length, r = t.length;
		for (let i = 0, a = Math.min(n, r); i < a; ++i) if (e[i] !== t[i]) {
			n = e[i], r = t[i];
			break;
		}
		return n < r ? -1 : +(r < n);
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
			if (X(t, Uint8Array)) i + t.length > r.length ? (s.isBuffer(t) || (t = s.from(t)), t.copy(r, i)) : Uint8Array.prototype.set.call(r, t, i);
			else if (s.isBuffer(t)) t.copy(r, i);
			else throw TypeError("\"list\" argument must be an Array of Buffers");
			i += t.length;
		}
		return r;
	};
	function y(e, t) {
		if (s.isBuffer(e)) return e.length;
		if (ArrayBuffer.isView(e) || X(e, ArrayBuffer)) return e.byteLength;
		if (typeof e != "string") throw TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + typeof e);
		let n = e.length, r = arguments.length > 2 && arguments[2] === !0;
		if (!r && n === 0) return 0;
		let i = !1;
		for (;;) switch (t) {
			case "ascii":
			case "latin1":
			case "binary": return n;
			case "utf8":
			case "utf-8": return q(e).length;
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return n * 2;
			case "hex": return n >>> 1;
			case "base64": return J(e).length;
			default:
				if (i) return r ? -1 : q(e).length;
				t = ("" + t).toLowerCase(), i = !0;
		}
	}
	s.byteLength = y;
	function b(e, t, n) {
		let r = !1;
		if ((t === void 0 || t < 0) && (t = 0), t > this.length || ((n === void 0 || n > this.length) && (n = this.length), n <= 0) || (n >>>= 0, t >>>= 0, n <= t)) return "";
		for (e ||= "utf8";;) switch (e) {
			case "hex": return M(this, t, n);
			case "utf8":
			case "utf-8": return k(this, t, n);
			case "ascii": return j(this, t, n);
			case "latin1":
			case "binary": return ne(this, t, n);
			case "base64": return O(this, t, n);
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return N(this, t, n);
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
		return e === 0 ? "" : arguments.length === 0 ? k(this, 0, e) : b.apply(this, arguments);
	}, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(e) {
		if (!s.isBuffer(e)) throw TypeError("Argument must be a Buffer");
		return this === e ? !0 : s.compare(this, e) === 0;
	}, s.prototype.inspect = function() {
		let t = "", n = e.INSPECT_MAX_BYTES;
		return t = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(), this.length > n && (t += " ... "), "<Buffer " + t + ">";
	}, r && (s.prototype[r] = s.prototype.inspect), s.prototype.compare = function(e, t, n, r, i) {
		if (X(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), !s.isBuffer(e)) throw TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof e);
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
		return a < o ? -1 : +(o < a);
	};
	function S(e, t, n, r, i) {
		if (e.length === 0) return -1;
		if (typeof n == "string" ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, Z(n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
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
			if (Z(r)) return o;
			e[n + o] = r;
		}
		return o;
	}
	function T(e, t, n, r) {
		return Y(q(t, e.length - n), e, n, r);
	}
	function E(e, t, n, r) {
		return Y(oe(t), e, n, r);
	}
	function D(e, t, n, r) {
		return Y(J(t), e, n, r);
	}
	function ee(e, t, n, r) {
		return Y(se(t, e.length - n), e, n, r);
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
			case "binary": return E(this, e, t, n);
			case "base64": return D(this, e, t, n);
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return ee(this, e, t, n);
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
	function O(e, n, r) {
		return n === 0 && r === e.length ? t.fromByteArray(e) : t.fromByteArray(e.slice(n, r));
	}
	function k(e, t, n) {
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
		return te(r);
	}
	var A = 4096;
	function te(e) {
		let t = e.length;
		if (t <= A) return String.fromCharCode.apply(String, e);
		let n = "", r = 0;
		for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += A));
		return n;
	}
	function j(e, t, n) {
		let r = "";
		n = Math.min(e.length, n);
		for (let i = t; i < n; ++i) r += String.fromCharCode(e[i] & 127);
		return r;
	}
	function ne(e, t, n) {
		let r = "";
		n = Math.min(e.length, n);
		for (let i = t; i < n; ++i) r += String.fromCharCode(e[i]);
		return r;
	}
	function M(e, t, n) {
		let r = e.length;
		(!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
		let i = "";
		for (let r = t; r < n; ++r) i += ce[e[r]];
		return i;
	}
	function N(e, t, n) {
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
	function P(e, t, n) {
		if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
		if (e + t > n) throw RangeError("Trying to access beyond buffer length");
	}
	s.prototype.readUintLE = s.prototype.readUIntLE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = this[e], i = 1, a = 0;
		for (; ++a < t && (i *= 256);) r += this[e + a] * i;
		return r;
	}, s.prototype.readUintBE = s.prototype.readUIntBE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = this[e + --t], i = 1;
		for (; t > 0 && (i *= 256);) r += this[e + --t] * i;
		return r;
	}, s.prototype.readUint8 = s.prototype.readUInt8 = function(e, t) {
		return e >>>= 0, t || P(e, 1, this.length), this[e];
	}, s.prototype.readUint16LE = s.prototype.readUInt16LE = function(e, t) {
		return e >>>= 0, t || P(e, 2, this.length), this[e] | this[e + 1] << 8;
	}, s.prototype.readUint16BE = s.prototype.readUInt16BE = function(e, t) {
		return e >>>= 0, t || P(e, 2, this.length), this[e] << 8 | this[e + 1];
	}, s.prototype.readUint32LE = s.prototype.readUInt32LE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
	}, s.prototype.readUint32BE = s.prototype.readUInt32BE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
	}, s.prototype.readBigUInt64LE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24, i = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + n * 2 ** 24;
		return BigInt(r) + (BigInt(i) << BigInt(32));
	}), s.prototype.readBigUInt64BE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e], i = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n;
		return (BigInt(r) << BigInt(32)) + BigInt(i);
	}), s.prototype.readIntLE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = this[e], i = 1, a = 0;
		for (; ++a < t && (i *= 256);) r += this[e + a] * i;
		return i *= 128, r >= i && (r -= 2 ** (8 * t)), r;
	}, s.prototype.readIntBE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = t, i = 1, a = this[e + --r];
		for (; r > 0 && (i *= 256);) a += this[e + --r] * i;
		return i *= 128, a >= i && (a -= 2 ** (8 * t)), a;
	}, s.prototype.readInt8 = function(e, t) {
		return e >>>= 0, t || P(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e];
	}, s.prototype.readInt16LE = function(e, t) {
		e >>>= 0, t || P(e, 2, this.length);
		let n = this[e] | this[e + 1] << 8;
		return n & 32768 ? n | 4294901760 : n;
	}, s.prototype.readInt16BE = function(e, t) {
		e >>>= 0, t || P(e, 2, this.length);
		let n = this[e + 1] | this[e] << 8;
		return n & 32768 ? n | 4294901760 : n;
	}, s.prototype.readInt32LE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
	}, s.prototype.readInt32BE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
	}, s.prototype.readBigInt64LE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (n << 24);
		return (BigInt(r) << BigInt(32)) + BigInt(t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24);
	}), s.prototype.readBigInt64BE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
		return (BigInt(r) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n);
	}), s.prototype.readFloatLE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), n.read(this, e, !0, 23, 4);
	}, s.prototype.readFloatBE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), n.read(this, e, !1, 23, 4);
	}, s.prototype.readDoubleLE = function(e, t) {
		return e >>>= 0, t || P(e, 8, this.length), n.read(this, e, !0, 52, 8);
	}, s.prototype.readDoubleBE = function(e, t) {
		return e >>>= 0, t || P(e, 8, this.length), n.read(this, e, !1, 52, 8);
	};
	function F(e, t, n, r, i, a) {
		if (!s.isBuffer(e)) throw TypeError("\"buffer\" argument must be a Buffer instance");
		if (t > i || t < a) throw RangeError("\"value\" argument is out of bounds");
		if (n + r > e.length) throw RangeError("Index out of range");
	}
	s.prototype.writeUintLE = s.prototype.writeUIntLE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, n >>>= 0, !r) {
			let r = 2 ** (8 * n) - 1;
			F(this, e, t, n, r, 0);
		}
		let i = 1, a = 0;
		for (this[t] = e & 255; ++a < n && (i *= 256);) this[t + a] = e / i & 255;
		return t + n;
	}, s.prototype.writeUintBE = s.prototype.writeUIntBE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, n >>>= 0, !r) {
			let r = 2 ** (8 * n) - 1;
			F(this, e, t, n, r, 0);
		}
		let i = n - 1, a = 1;
		for (this[t + i] = e & 255; --i >= 0 && (a *= 256);) this[t + i] = e / a & 255;
		return t + n;
	}, s.prototype.writeUint8 = s.prototype.writeUInt8 = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 1, 255, 0), this[t] = e & 255, t + 1;
	}, s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 65535, 0), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
	}, s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
	}, s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = e & 255, t + 4;
	}, s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
	};
	function I(e, t, n, r, i) {
		W(t, r, i, e, n, 7);
		let a = Number(t & BigInt(4294967295));
		e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a;
		let o = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, n;
	}
	function L(e, t, n, r, i) {
		W(t, r, i, e, n, 7);
		let a = Number(t & BigInt(4294967295));
		e[n + 7] = a, a >>= 8, e[n + 6] = a, a >>= 8, e[n + 5] = a, a >>= 8, e[n + 4] = a;
		let o = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[n + 3] = o, o >>= 8, e[n + 2] = o, o >>= 8, e[n + 1] = o, o >>= 8, e[n] = o, n + 8;
	}
	s.prototype.writeBigUInt64LE = Q(function(e, t = 0) {
		return I(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
	}), s.prototype.writeBigUInt64BE = Q(function(e, t = 0) {
		return L(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
	}), s.prototype.writeIntLE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, !r) {
			let r = 2 ** (8 * n - 1);
			F(this, e, t, n, r - 1, -r);
		}
		let i = 0, a = 1, o = 0;
		for (this[t] = e & 255; ++i < n && (a *= 256);) e < 0 && o === 0 && this[t + i - 1] !== 0 && (o = 1), this[t + i] = (e / a >> 0) - o & 255;
		return t + n;
	}, s.prototype.writeIntBE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, !r) {
			let r = 2 ** (8 * n - 1);
			F(this, e, t, n, r - 1, -r);
		}
		let i = n - 1, a = 1, o = 0;
		for (this[t + i] = e & 255; --i >= 0 && (a *= 256);) e < 0 && o === 0 && this[t + i + 1] !== 0 && (o = 1), this[t + i] = (e / a >> 0) - o & 255;
		return t + n;
	}, s.prototype.writeInt8 = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = e & 255, t + 1;
	}, s.prototype.writeInt16LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 32767, -32768), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
	}, s.prototype.writeInt16BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
	}, s.prototype.writeInt32LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 2147483647, -2147483648), this[t] = e & 255, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4;
	}, s.prototype.writeInt32BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
	}, s.prototype.writeBigInt64LE = Q(function(e, t = 0) {
		return I(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
	}), s.prototype.writeBigInt64BE = Q(function(e, t = 0) {
		return L(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
	});
	function R(e, t, n, r, i, a) {
		if (n + r > e.length || n < 0) throw RangeError("Index out of range");
	}
	function z(e, t, r, i, a) {
		return t = +t, r >>>= 0, a || R(e, t, r, 4, 34028234663852886e22, -34028234663852886e22), n.write(e, t, r, i, 23, 4), r + 4;
	}
	s.prototype.writeFloatLE = function(e, t, n) {
		return z(this, e, t, !0, n);
	}, s.prototype.writeFloatBE = function(e, t, n) {
		return z(this, e, t, !1, n);
	};
	function B(e, t, r, i, a) {
		return t = +t, r >>>= 0, a || R(e, t, r, 8, 17976931348623157e292, -17976931348623157e292), n.write(e, t, r, i, 52, 8), r + 8;
	}
	s.prototype.writeDoubleLE = function(e, t, n) {
		return B(this, e, t, !0, n);
	}, s.prototype.writeDoubleBE = function(e, t, n) {
		return B(this, e, t, !1, n);
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
	var V = {};
	function H(e, t, n) {
		V[e] = class extends n {
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
	H("ERR_BUFFER_OUT_OF_BOUNDS", function(e) {
		return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
	}, RangeError), H("ERR_INVALID_ARG_TYPE", function(e, t) {
		return `The "${e}" argument must be of type number. Received type ${typeof t}`;
	}, TypeError), H("ERR_OUT_OF_RANGE", function(e, t, n) {
		let r = `The value of "${e}" is out of range.`, i = n;
		return Number.isInteger(n) && Math.abs(n) > 2 ** 32 ? i = U(String(n)) : typeof n == "bigint" && (i = String(n), (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (i = U(i)), i += "n"), r += ` It must be ${t}. Received ${i}`, r;
	}, RangeError);
	function U(e) {
		let t = "", n = e.length, r = +(e[0] === "-");
		for (; n >= r + 4; n -= 3) t = `_${e.slice(n - 3, n)}${t}`;
		return `${e.slice(0, n)}${t}`;
	}
	function re(e, t, n) {
		G(t, "offset"), (e[t] === void 0 || e[t + n] === void 0) && K(t, e.length - (n + 1));
	}
	function W(e, t, n, r, i, a) {
		if (e > n || e < t) {
			let r = typeof t == "bigint" ? "n" : "", i;
			throw i = a > 3 ? t === 0 || t === BigInt(0) ? `>= 0${r} and < 2${r} ** ${(a + 1) * 8}${r}` : `>= -(2${r} ** ${(a + 1) * 8 - 1}${r}) and < 2 ** ${(a + 1) * 8 - 1}${r}` : `>= ${t}${r} and <= ${n}${r}`, new V.ERR_OUT_OF_RANGE("value", i, e);
		}
		re(r, i, a);
	}
	function G(e, t) {
		if (typeof e != "number") throw new V.ERR_INVALID_ARG_TYPE(t, "number", e);
	}
	function K(e, t, n) {
		throw Math.floor(e) === e ? t < 0 ? new V.ERR_BUFFER_OUT_OF_BOUNDS() : new V.ERR_OUT_OF_RANGE(n || "offset", `>= ${+!!n} and <= ${t}`, e) : (G(e, n), new V.ERR_OUT_OF_RANGE(n || "offset", "an integer", e));
	}
	var ie = /[^+/0-9A-Za-z-_]/g;
	function ae(e) {
		if (e = e.split("=")[0], e = e.trim().replace(ie, ""), e.length < 2) return "";
		for (; e.length % 4 != 0;) e += "=";
		return e;
	}
	function q(e, t) {
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
	function oe(e) {
		let t = [];
		for (let n = 0; n < e.length; ++n) t.push(e.charCodeAt(n) & 255);
		return t;
	}
	function se(e, t) {
		let n, r, i, a = [];
		for (let o = 0; o < e.length && !((t -= 2) < 0); ++o) n = e.charCodeAt(o), r = n >> 8, i = n % 256, a.push(i), a.push(r);
		return a;
	}
	function J(e) {
		return t.toByteArray(ae(e));
	}
	function Y(e, t, n, r) {
		let i;
		for (i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
		return i;
	}
	function X(e, t) {
		return e instanceof t || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === t.name;
	}
	function Z(e) {
		return e !== e;
	}
	var ce = (function() {
		let e = "0123456789abcdef", t = Array(256);
		for (let n = 0; n < 16; ++n) {
			let r = n * 16;
			for (let i = 0; i < 16; ++i) t[r + i] = e[n] + e[i];
		}
		return t;
	})();
	function Q(e) {
		return typeof BigInt > "u" ? le : e;
	}
	function le() {
		throw Error("BigInt not supported");
	}
})))();
var $a = (e) => {
	let t = "", n = Object.keys(e).map((t) => {
		let n = e[t];
		return Xa(n) ? "" : `${encodeURIComponent(t)}=${encodeURIComponent(n)}`;
	}).filter((e) => e !== "").join("&");
	if (n) {
		let e = t.indexOf("#");
		e !== -1 && (t = t.slice(0, e)), t += (t.indexOf("?") === -1 ? "?" : "&") + n;
	}
	return t;
};
((e, { baseHeaders: t, handleErr: n, handleFinally: r, debug: i } = {}) => {
	let a = {
		"Content-Type": "application/json",
		...t
	}, o = (e) => {
		console.log(e);
	}, s = ({ endpoint: t, inputHeaders: s, fetchParams: c, args: l }) => {
		Xa(t) && (t = "");
		let u = e + t, d = {
			...a,
			...s
		};
		Object.keys(d).forEach((e) => {
			Xa(d[e]) && delete d[e];
		});
		let f = {
			method: "GET",
			headers: { ...d },
			...c
		};
		return Xa(l) || (f.method === "POST" && (f.body = JSON.stringify(l)), f.method === "GET" && (u += $a(l))), fetch(u, f).catch((e) => n(e)).finally(() => {
			i && o({
				endpoint: t,
				inputHeaders: s,
				fetchParams: c
			}), !Xa(r) && r({
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
})("http://localhost:8080/", {
	handleErr: (e) => console.log(e),
	debug: !0
}), j({
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
}), t(null);
var eo = (e) => e == null, to = /* @__PURE__ */ de(((e) => {
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
})), no = /* @__PURE__ */ de(((e) => {
	e.read = function(e, t, n, r, i) {
		var a, o, s = i * 8 - r - 1, c = (1 << s) - 1, l = c >> 1, u = -7, d = n ? i - 1 : 0, f = n ? -1 : 1, p = e[t + d];
		for (d += f, a = p & (1 << -u) - 1, p >>= -u, u += s; u > 0; a = a * 256 + e[t + d], d += f, u -= 8);
		for (o = a & (1 << -u) - 1, a >>= -u, u += r; u > 0; o = o * 256 + e[t + d], d += f, u -= 8);
		if (a === 0) a = 1 - l;
		else if (a === c) return o ? NaN : (p ? -1 : 1) * Infinity;
		else o += 2 ** r, a -= l;
		return (p ? -1 : 1) * o * 2 ** (a - r);
	}, e.write = function(e, t, n, r, i, a) {
		var o, s, c, l = a * 8 - i - 1, u = (1 << l) - 1, d = u >> 1, f = i === 23 ? 2 ** -24 - 2 ** -77 : 0, p = r ? 0 : a - 1, m = r ? 1 : -1, h = +(t < 0 || t === 0 && 1 / t < 0);
		for (t = Math.abs(t), isNaN(t) || t === Infinity ? (s = +!!isNaN(t), o = u) : (o = Math.floor(Math.log(t) / Math.LN2), t * (c = 2 ** -o) < 1 && (o--, c *= 2), o + d >= 1 ? t += f / c : t += f * 2 ** (1 - d), t * c >= 2 && (o++, c /= 2), o + d >= u ? (s = 0, o = u) : o + d >= 1 ? (s = (t * c - 1) * 2 ** i, o += d) : (s = t * 2 ** (d - 1) * 2 ** i, o = 0)); i >= 8; e[n + p] = s & 255, p += m, s /= 256, i -= 8);
		for (o = o << i | s, l += i; l > 0; e[n + p] = o & 255, p += m, o /= 256, l -= 8);
		e[n + p - m] |= h * 128;
	};
}));
(/* @__PURE__ */ de(((e) => {
	var t = to(), n = no(), r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
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
		if (X(e, ArrayBuffer) || e && X(e.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (X(e, SharedArrayBuffer) || e && X(e.buffer, SharedArrayBuffer))) return h(e, t, n);
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
		if (X(e, Uint8Array)) {
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
		if (e.length !== void 0) return typeof e.length != "number" || Z(e.length) ? o(0) : p(e);
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
		if (X(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), X(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), !s.isBuffer(e) || !s.isBuffer(t)) throw TypeError("The \"buf1\", \"buf2\" arguments must be one of type Buffer or Uint8Array");
		if (e === t) return 0;
		let n = e.length, r = t.length;
		for (let i = 0, a = Math.min(n, r); i < a; ++i) if (e[i] !== t[i]) {
			n = e[i], r = t[i];
			break;
		}
		return n < r ? -1 : +(r < n);
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
			if (X(t, Uint8Array)) i + t.length > r.length ? (s.isBuffer(t) || (t = s.from(t)), t.copy(r, i)) : Uint8Array.prototype.set.call(r, t, i);
			else if (s.isBuffer(t)) t.copy(r, i);
			else throw TypeError("\"list\" argument must be an Array of Buffers");
			i += t.length;
		}
		return r;
	};
	function y(e, t) {
		if (s.isBuffer(e)) return e.length;
		if (ArrayBuffer.isView(e) || X(e, ArrayBuffer)) return e.byteLength;
		if (typeof e != "string") throw TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + typeof e);
		let n = e.length, r = arguments.length > 2 && arguments[2] === !0;
		if (!r && n === 0) return 0;
		let i = !1;
		for (;;) switch (t) {
			case "ascii":
			case "latin1":
			case "binary": return n;
			case "utf8":
			case "utf-8": return q(e).length;
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return n * 2;
			case "hex": return n >>> 1;
			case "base64": return J(e).length;
			default:
				if (i) return r ? -1 : q(e).length;
				t = ("" + t).toLowerCase(), i = !0;
		}
	}
	s.byteLength = y;
	function b(e, t, n) {
		let r = !1;
		if ((t === void 0 || t < 0) && (t = 0), t > this.length || ((n === void 0 || n > this.length) && (n = this.length), n <= 0) || (n >>>= 0, t >>>= 0, n <= t)) return "";
		for (e ||= "utf8";;) switch (e) {
			case "hex": return M(this, t, n);
			case "utf8":
			case "utf-8": return k(this, t, n);
			case "ascii": return j(this, t, n);
			case "latin1":
			case "binary": return ne(this, t, n);
			case "base64": return O(this, t, n);
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return N(this, t, n);
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
		return e === 0 ? "" : arguments.length === 0 ? k(this, 0, e) : b.apply(this, arguments);
	}, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(e) {
		if (!s.isBuffer(e)) throw TypeError("Argument must be a Buffer");
		return this === e ? !0 : s.compare(this, e) === 0;
	}, s.prototype.inspect = function() {
		let t = "", n = e.INSPECT_MAX_BYTES;
		return t = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(), this.length > n && (t += " ... "), "<Buffer " + t + ">";
	}, r && (s.prototype[r] = s.prototype.inspect), s.prototype.compare = function(e, t, n, r, i) {
		if (X(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), !s.isBuffer(e)) throw TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof e);
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
		return a < o ? -1 : +(o < a);
	};
	function S(e, t, n, r, i) {
		if (e.length === 0) return -1;
		if (typeof n == "string" ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, Z(n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
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
			if (Z(r)) return o;
			e[n + o] = r;
		}
		return o;
	}
	function T(e, t, n, r) {
		return Y(q(t, e.length - n), e, n, r);
	}
	function E(e, t, n, r) {
		return Y(oe(t), e, n, r);
	}
	function D(e, t, n, r) {
		return Y(J(t), e, n, r);
	}
	function ee(e, t, n, r) {
		return Y(se(t, e.length - n), e, n, r);
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
			case "binary": return E(this, e, t, n);
			case "base64": return D(this, e, t, n);
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return ee(this, e, t, n);
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
	function O(e, n, r) {
		return n === 0 && r === e.length ? t.fromByteArray(e) : t.fromByteArray(e.slice(n, r));
	}
	function k(e, t, n) {
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
		return te(r);
	}
	var A = 4096;
	function te(e) {
		let t = e.length;
		if (t <= A) return String.fromCharCode.apply(String, e);
		let n = "", r = 0;
		for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += A));
		return n;
	}
	function j(e, t, n) {
		let r = "";
		n = Math.min(e.length, n);
		for (let i = t; i < n; ++i) r += String.fromCharCode(e[i] & 127);
		return r;
	}
	function ne(e, t, n) {
		let r = "";
		n = Math.min(e.length, n);
		for (let i = t; i < n; ++i) r += String.fromCharCode(e[i]);
		return r;
	}
	function M(e, t, n) {
		let r = e.length;
		(!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
		let i = "";
		for (let r = t; r < n; ++r) i += ce[e[r]];
		return i;
	}
	function N(e, t, n) {
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
	function P(e, t, n) {
		if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
		if (e + t > n) throw RangeError("Trying to access beyond buffer length");
	}
	s.prototype.readUintLE = s.prototype.readUIntLE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = this[e], i = 1, a = 0;
		for (; ++a < t && (i *= 256);) r += this[e + a] * i;
		return r;
	}, s.prototype.readUintBE = s.prototype.readUIntBE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = this[e + --t], i = 1;
		for (; t > 0 && (i *= 256);) r += this[e + --t] * i;
		return r;
	}, s.prototype.readUint8 = s.prototype.readUInt8 = function(e, t) {
		return e >>>= 0, t || P(e, 1, this.length), this[e];
	}, s.prototype.readUint16LE = s.prototype.readUInt16LE = function(e, t) {
		return e >>>= 0, t || P(e, 2, this.length), this[e] | this[e + 1] << 8;
	}, s.prototype.readUint16BE = s.prototype.readUInt16BE = function(e, t) {
		return e >>>= 0, t || P(e, 2, this.length), this[e] << 8 | this[e + 1];
	}, s.prototype.readUint32LE = s.prototype.readUInt32LE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
	}, s.prototype.readUint32BE = s.prototype.readUInt32BE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
	}, s.prototype.readBigUInt64LE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24, i = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + n * 2 ** 24;
		return BigInt(r) + (BigInt(i) << BigInt(32));
	}), s.prototype.readBigUInt64BE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e], i = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n;
		return (BigInt(r) << BigInt(32)) + BigInt(i);
	}), s.prototype.readIntLE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = this[e], i = 1, a = 0;
		for (; ++a < t && (i *= 256);) r += this[e + a] * i;
		return i *= 128, r >= i && (r -= 2 ** (8 * t)), r;
	}, s.prototype.readIntBE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = t, i = 1, a = this[e + --r];
		for (; r > 0 && (i *= 256);) a += this[e + --r] * i;
		return i *= 128, a >= i && (a -= 2 ** (8 * t)), a;
	}, s.prototype.readInt8 = function(e, t) {
		return e >>>= 0, t || P(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e];
	}, s.prototype.readInt16LE = function(e, t) {
		e >>>= 0, t || P(e, 2, this.length);
		let n = this[e] | this[e + 1] << 8;
		return n & 32768 ? n | 4294901760 : n;
	}, s.prototype.readInt16BE = function(e, t) {
		e >>>= 0, t || P(e, 2, this.length);
		let n = this[e + 1] | this[e] << 8;
		return n & 32768 ? n | 4294901760 : n;
	}, s.prototype.readInt32LE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
	}, s.prototype.readInt32BE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
	}, s.prototype.readBigInt64LE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (n << 24);
		return (BigInt(r) << BigInt(32)) + BigInt(t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24);
	}), s.prototype.readBigInt64BE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
		return (BigInt(r) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n);
	}), s.prototype.readFloatLE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), n.read(this, e, !0, 23, 4);
	}, s.prototype.readFloatBE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), n.read(this, e, !1, 23, 4);
	}, s.prototype.readDoubleLE = function(e, t) {
		return e >>>= 0, t || P(e, 8, this.length), n.read(this, e, !0, 52, 8);
	}, s.prototype.readDoubleBE = function(e, t) {
		return e >>>= 0, t || P(e, 8, this.length), n.read(this, e, !1, 52, 8);
	};
	function F(e, t, n, r, i, a) {
		if (!s.isBuffer(e)) throw TypeError("\"buffer\" argument must be a Buffer instance");
		if (t > i || t < a) throw RangeError("\"value\" argument is out of bounds");
		if (n + r > e.length) throw RangeError("Index out of range");
	}
	s.prototype.writeUintLE = s.prototype.writeUIntLE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, n >>>= 0, !r) {
			let r = 2 ** (8 * n) - 1;
			F(this, e, t, n, r, 0);
		}
		let i = 1, a = 0;
		for (this[t] = e & 255; ++a < n && (i *= 256);) this[t + a] = e / i & 255;
		return t + n;
	}, s.prototype.writeUintBE = s.prototype.writeUIntBE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, n >>>= 0, !r) {
			let r = 2 ** (8 * n) - 1;
			F(this, e, t, n, r, 0);
		}
		let i = n - 1, a = 1;
		for (this[t + i] = e & 255; --i >= 0 && (a *= 256);) this[t + i] = e / a & 255;
		return t + n;
	}, s.prototype.writeUint8 = s.prototype.writeUInt8 = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 1, 255, 0), this[t] = e & 255, t + 1;
	}, s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 65535, 0), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
	}, s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
	}, s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = e & 255, t + 4;
	}, s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
	};
	function I(e, t, n, r, i) {
		W(t, r, i, e, n, 7);
		let a = Number(t & BigInt(4294967295));
		e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a;
		let o = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, n;
	}
	function L(e, t, n, r, i) {
		W(t, r, i, e, n, 7);
		let a = Number(t & BigInt(4294967295));
		e[n + 7] = a, a >>= 8, e[n + 6] = a, a >>= 8, e[n + 5] = a, a >>= 8, e[n + 4] = a;
		let o = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[n + 3] = o, o >>= 8, e[n + 2] = o, o >>= 8, e[n + 1] = o, o >>= 8, e[n] = o, n + 8;
	}
	s.prototype.writeBigUInt64LE = Q(function(e, t = 0) {
		return I(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
	}), s.prototype.writeBigUInt64BE = Q(function(e, t = 0) {
		return L(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
	}), s.prototype.writeIntLE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, !r) {
			let r = 2 ** (8 * n - 1);
			F(this, e, t, n, r - 1, -r);
		}
		let i = 0, a = 1, o = 0;
		for (this[t] = e & 255; ++i < n && (a *= 256);) e < 0 && o === 0 && this[t + i - 1] !== 0 && (o = 1), this[t + i] = (e / a >> 0) - o & 255;
		return t + n;
	}, s.prototype.writeIntBE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, !r) {
			let r = 2 ** (8 * n - 1);
			F(this, e, t, n, r - 1, -r);
		}
		let i = n - 1, a = 1, o = 0;
		for (this[t + i] = e & 255; --i >= 0 && (a *= 256);) e < 0 && o === 0 && this[t + i + 1] !== 0 && (o = 1), this[t + i] = (e / a >> 0) - o & 255;
		return t + n;
	}, s.prototype.writeInt8 = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = e & 255, t + 1;
	}, s.prototype.writeInt16LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 32767, -32768), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
	}, s.prototype.writeInt16BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
	}, s.prototype.writeInt32LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 2147483647, -2147483648), this[t] = e & 255, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4;
	}, s.prototype.writeInt32BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
	}, s.prototype.writeBigInt64LE = Q(function(e, t = 0) {
		return I(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
	}), s.prototype.writeBigInt64BE = Q(function(e, t = 0) {
		return L(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
	});
	function R(e, t, n, r, i, a) {
		if (n + r > e.length || n < 0) throw RangeError("Index out of range");
	}
	function z(e, t, r, i, a) {
		return t = +t, r >>>= 0, a || R(e, t, r, 4, 34028234663852886e22, -34028234663852886e22), n.write(e, t, r, i, 23, 4), r + 4;
	}
	s.prototype.writeFloatLE = function(e, t, n) {
		return z(this, e, t, !0, n);
	}, s.prototype.writeFloatBE = function(e, t, n) {
		return z(this, e, t, !1, n);
	};
	function B(e, t, r, i, a) {
		return t = +t, r >>>= 0, a || R(e, t, r, 8, 17976931348623157e292, -17976931348623157e292), n.write(e, t, r, i, 52, 8), r + 8;
	}
	s.prototype.writeDoubleLE = function(e, t, n) {
		return B(this, e, t, !0, n);
	}, s.prototype.writeDoubleBE = function(e, t, n) {
		return B(this, e, t, !1, n);
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
	var V = {};
	function H(e, t, n) {
		V[e] = class extends n {
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
	H("ERR_BUFFER_OUT_OF_BOUNDS", function(e) {
		return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
	}, RangeError), H("ERR_INVALID_ARG_TYPE", function(e, t) {
		return `The "${e}" argument must be of type number. Received type ${typeof t}`;
	}, TypeError), H("ERR_OUT_OF_RANGE", function(e, t, n) {
		let r = `The value of "${e}" is out of range.`, i = n;
		return Number.isInteger(n) && Math.abs(n) > 2 ** 32 ? i = U(String(n)) : typeof n == "bigint" && (i = String(n), (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (i = U(i)), i += "n"), r += ` It must be ${t}. Received ${i}`, r;
	}, RangeError);
	function U(e) {
		let t = "", n = e.length, r = +(e[0] === "-");
		for (; n >= r + 4; n -= 3) t = `_${e.slice(n - 3, n)}${t}`;
		return `${e.slice(0, n)}${t}`;
	}
	function re(e, t, n) {
		G(t, "offset"), (e[t] === void 0 || e[t + n] === void 0) && K(t, e.length - (n + 1));
	}
	function W(e, t, n, r, i, a) {
		if (e > n || e < t) {
			let r = typeof t == "bigint" ? "n" : "", i;
			throw i = a > 3 ? t === 0 || t === BigInt(0) ? `>= 0${r} and < 2${r} ** ${(a + 1) * 8}${r}` : `>= -(2${r} ** ${(a + 1) * 8 - 1}${r}) and < 2 ** ${(a + 1) * 8 - 1}${r}` : `>= ${t}${r} and <= ${n}${r}`, new V.ERR_OUT_OF_RANGE("value", i, e);
		}
		re(r, i, a);
	}
	function G(e, t) {
		if (typeof e != "number") throw new V.ERR_INVALID_ARG_TYPE(t, "number", e);
	}
	function K(e, t, n) {
		throw Math.floor(e) === e ? t < 0 ? new V.ERR_BUFFER_OUT_OF_BOUNDS() : new V.ERR_OUT_OF_RANGE(n || "offset", `>= ${+!!n} and <= ${t}`, e) : (G(e, n), new V.ERR_OUT_OF_RANGE(n || "offset", "an integer", e));
	}
	var ie = /[^+/0-9A-Za-z-_]/g;
	function ae(e) {
		if (e = e.split("=")[0], e = e.trim().replace(ie, ""), e.length < 2) return "";
		for (; e.length % 4 != 0;) e += "=";
		return e;
	}
	function q(e, t) {
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
	function oe(e) {
		let t = [];
		for (let n = 0; n < e.length; ++n) t.push(e.charCodeAt(n) & 255);
		return t;
	}
	function se(e, t) {
		let n, r, i, a = [];
		for (let o = 0; o < e.length && !((t -= 2) < 0); ++o) n = e.charCodeAt(o), r = n >> 8, i = n % 256, a.push(i), a.push(r);
		return a;
	}
	function J(e) {
		return t.toByteArray(ae(e));
	}
	function Y(e, t, n, r) {
		let i;
		for (i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
		return i;
	}
	function X(e, t) {
		return e instanceof t || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === t.name;
	}
	function Z(e) {
		return e !== e;
	}
	var ce = (function() {
		let e = "0123456789abcdef", t = Array(256);
		for (let n = 0; n < 16; ++n) {
			let r = n * 16;
			for (let i = 0; i < 16; ++i) t[r + i] = e[n] + e[i];
		}
		return t;
	})();
	function Q(e) {
		return typeof BigInt > "u" ? le : e;
	}
	function le() {
		throw Error("BigInt not supported");
	}
})))();
var ro = (e) => {
	let t = "", n = Object.keys(e).map((t) => {
		let n = e[t];
		return eo(n) ? "" : `${encodeURIComponent(t)}=${encodeURIComponent(n)}`;
	}).filter((e) => e !== "").join("&");
	if (n) {
		let e = t.indexOf("#");
		e !== -1 && (t = t.slice(0, e)), t += (t.indexOf("?") === -1 ? "?" : "&") + n;
	}
	return t;
};
((e, { baseHeaders: t, handleErr: n, handleFinally: r, debug: i } = {}) => {
	let a = {
		"Content-Type": "application/json",
		...t
	}, o = (e) => {
		console.log(e);
	}, s = ({ endpoint: t, inputHeaders: s, fetchParams: c, args: l }) => {
		eo(t) && (t = "");
		let u = e + t, d = {
			...a,
			...s
		};
		Object.keys(d).forEach((e) => {
			eo(d[e]) && delete d[e];
		});
		let f = {
			method: "GET",
			headers: { ...d },
			...c
		};
		return eo(l) || (f.method === "POST" && (f.body = JSON.stringify(l)), f.method === "GET" && (u += ro(l))), fetch(u, f).catch((e) => n(e)).finally(() => {
			i && o({
				endpoint: t,
				inputHeaders: s,
				fetchParams: c
			}), !eo(r) && r({
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
})("http://localhost:8080/", {
	handleErr: (e) => console.log(e),
	debug: !0
}), j({
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
}), t(null);
var io = (e) => e == null, ao = /* @__PURE__ */ ue(((e) => {
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
})), oo = /* @__PURE__ */ ue(((e) => {
	e.read = function(e, t, n, r, i) {
		var a, o, s = i * 8 - r - 1, c = (1 << s) - 1, l = c >> 1, u = -7, d = n ? i - 1 : 0, f = n ? -1 : 1, p = e[t + d];
		for (d += f, a = p & (1 << -u) - 1, p >>= -u, u += s; u > 0; a = a * 256 + e[t + d], d += f, u -= 8);
		for (o = a & (1 << -u) - 1, a >>= -u, u += r; u > 0; o = o * 256 + e[t + d], d += f, u -= 8);
		if (a === 0) a = 1 - l;
		else if (a === c) return o ? NaN : (p ? -1 : 1) * Infinity;
		else o += 2 ** r, a -= l;
		return (p ? -1 : 1) * o * 2 ** (a - r);
	}, e.write = function(e, t, n, r, i, a) {
		var o, s, c, l = a * 8 - i - 1, u = (1 << l) - 1, d = u >> 1, f = i === 23 ? 2 ** -24 - 2 ** -77 : 0, p = r ? 0 : a - 1, m = r ? 1 : -1, h = +(t < 0 || t === 0 && 1 / t < 0);
		for (t = Math.abs(t), isNaN(t) || t === Infinity ? (s = +!!isNaN(t), o = u) : (o = Math.floor(Math.log(t) / Math.LN2), t * (c = 2 ** -o) < 1 && (o--, c *= 2), o + d >= 1 ? t += f / c : t += f * 2 ** (1 - d), t * c >= 2 && (o++, c /= 2), o + d >= u ? (s = 0, o = u) : o + d >= 1 ? (s = (t * c - 1) * 2 ** i, o += d) : (s = t * 2 ** (d - 1) * 2 ** i, o = 0)); i >= 8; e[n + p] = s & 255, p += m, s /= 256, i -= 8);
		for (o = o << i | s, l += i; l > 0; e[n + p] = o & 255, p += m, o /= 256, l -= 8);
		e[n + p - m] |= h * 128;
	};
}));
(/* @__PURE__ */ ue(((e) => {
	var t = ao(), n = oo(), r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
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
		if (X(e, ArrayBuffer) || e && X(e.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (X(e, SharedArrayBuffer) || e && X(e.buffer, SharedArrayBuffer))) return h(e, t, n);
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
		if (X(e, Uint8Array)) {
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
		if (e.length !== void 0) return typeof e.length != "number" || Z(e.length) ? o(0) : p(e);
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
		if (X(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), X(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), !s.isBuffer(e) || !s.isBuffer(t)) throw TypeError("The \"buf1\", \"buf2\" arguments must be one of type Buffer or Uint8Array");
		if (e === t) return 0;
		let n = e.length, r = t.length;
		for (let i = 0, a = Math.min(n, r); i < a; ++i) if (e[i] !== t[i]) {
			n = e[i], r = t[i];
			break;
		}
		return n < r ? -1 : +(r < n);
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
			if (X(t, Uint8Array)) i + t.length > r.length ? (s.isBuffer(t) || (t = s.from(t)), t.copy(r, i)) : Uint8Array.prototype.set.call(r, t, i);
			else if (s.isBuffer(t)) t.copy(r, i);
			else throw TypeError("\"list\" argument must be an Array of Buffers");
			i += t.length;
		}
		return r;
	};
	function y(e, t) {
		if (s.isBuffer(e)) return e.length;
		if (ArrayBuffer.isView(e) || X(e, ArrayBuffer)) return e.byteLength;
		if (typeof e != "string") throw TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + typeof e);
		let n = e.length, r = arguments.length > 2 && arguments[2] === !0;
		if (!r && n === 0) return 0;
		let i = !1;
		for (;;) switch (t) {
			case "ascii":
			case "latin1":
			case "binary": return n;
			case "utf8":
			case "utf-8": return q(e).length;
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return n * 2;
			case "hex": return n >>> 1;
			case "base64": return J(e).length;
			default:
				if (i) return r ? -1 : q(e).length;
				t = ("" + t).toLowerCase(), i = !0;
		}
	}
	s.byteLength = y;
	function b(e, t, n) {
		let r = !1;
		if ((t === void 0 || t < 0) && (t = 0), t > this.length || ((n === void 0 || n > this.length) && (n = this.length), n <= 0) || (n >>>= 0, t >>>= 0, n <= t)) return "";
		for (e ||= "utf8";;) switch (e) {
			case "hex": return M(this, t, n);
			case "utf8":
			case "utf-8": return k(this, t, n);
			case "ascii": return j(this, t, n);
			case "latin1":
			case "binary": return ne(this, t, n);
			case "base64": return O(this, t, n);
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return N(this, t, n);
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
		return e === 0 ? "" : arguments.length === 0 ? k(this, 0, e) : b.apply(this, arguments);
	}, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(e) {
		if (!s.isBuffer(e)) throw TypeError("Argument must be a Buffer");
		return this === e ? !0 : s.compare(this, e) === 0;
	}, s.prototype.inspect = function() {
		let t = "", n = e.INSPECT_MAX_BYTES;
		return t = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(), this.length > n && (t += " ... "), "<Buffer " + t + ">";
	}, r && (s.prototype[r] = s.prototype.inspect), s.prototype.compare = function(e, t, n, r, i) {
		if (X(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), !s.isBuffer(e)) throw TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof e);
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
		return a < o ? -1 : +(o < a);
	};
	function S(e, t, n, r, i) {
		if (e.length === 0) return -1;
		if (typeof n == "string" ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, Z(n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
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
			if (Z(r)) return o;
			e[n + o] = r;
		}
		return o;
	}
	function T(e, t, n, r) {
		return Y(q(t, e.length - n), e, n, r);
	}
	function E(e, t, n, r) {
		return Y(oe(t), e, n, r);
	}
	function D(e, t, n, r) {
		return Y(J(t), e, n, r);
	}
	function ee(e, t, n, r) {
		return Y(se(t, e.length - n), e, n, r);
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
			case "binary": return E(this, e, t, n);
			case "base64": return D(this, e, t, n);
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return ee(this, e, t, n);
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
	function O(e, n, r) {
		return n === 0 && r === e.length ? t.fromByteArray(e) : t.fromByteArray(e.slice(n, r));
	}
	function k(e, t, n) {
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
		return te(r);
	}
	var A = 4096;
	function te(e) {
		let t = e.length;
		if (t <= A) return String.fromCharCode.apply(String, e);
		let n = "", r = 0;
		for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += A));
		return n;
	}
	function j(e, t, n) {
		let r = "";
		n = Math.min(e.length, n);
		for (let i = t; i < n; ++i) r += String.fromCharCode(e[i] & 127);
		return r;
	}
	function ne(e, t, n) {
		let r = "";
		n = Math.min(e.length, n);
		for (let i = t; i < n; ++i) r += String.fromCharCode(e[i]);
		return r;
	}
	function M(e, t, n) {
		let r = e.length;
		(!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
		let i = "";
		for (let r = t; r < n; ++r) i += ce[e[r]];
		return i;
	}
	function N(e, t, n) {
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
	function P(e, t, n) {
		if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
		if (e + t > n) throw RangeError("Trying to access beyond buffer length");
	}
	s.prototype.readUintLE = s.prototype.readUIntLE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = this[e], i = 1, a = 0;
		for (; ++a < t && (i *= 256);) r += this[e + a] * i;
		return r;
	}, s.prototype.readUintBE = s.prototype.readUIntBE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = this[e + --t], i = 1;
		for (; t > 0 && (i *= 256);) r += this[e + --t] * i;
		return r;
	}, s.prototype.readUint8 = s.prototype.readUInt8 = function(e, t) {
		return e >>>= 0, t || P(e, 1, this.length), this[e];
	}, s.prototype.readUint16LE = s.prototype.readUInt16LE = function(e, t) {
		return e >>>= 0, t || P(e, 2, this.length), this[e] | this[e + 1] << 8;
	}, s.prototype.readUint16BE = s.prototype.readUInt16BE = function(e, t) {
		return e >>>= 0, t || P(e, 2, this.length), this[e] << 8 | this[e + 1];
	}, s.prototype.readUint32LE = s.prototype.readUInt32LE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
	}, s.prototype.readUint32BE = s.prototype.readUInt32BE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
	}, s.prototype.readBigUInt64LE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24, i = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + n * 2 ** 24;
		return BigInt(r) + (BigInt(i) << BigInt(32));
	}), s.prototype.readBigUInt64BE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e], i = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n;
		return (BigInt(r) << BigInt(32)) + BigInt(i);
	}), s.prototype.readIntLE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = this[e], i = 1, a = 0;
		for (; ++a < t && (i *= 256);) r += this[e + a] * i;
		return i *= 128, r >= i && (r -= 2 ** (8 * t)), r;
	}, s.prototype.readIntBE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = t, i = 1, a = this[e + --r];
		for (; r > 0 && (i *= 256);) a += this[e + --r] * i;
		return i *= 128, a >= i && (a -= 2 ** (8 * t)), a;
	}, s.prototype.readInt8 = function(e, t) {
		return e >>>= 0, t || P(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e];
	}, s.prototype.readInt16LE = function(e, t) {
		e >>>= 0, t || P(e, 2, this.length);
		let n = this[e] | this[e + 1] << 8;
		return n & 32768 ? n | 4294901760 : n;
	}, s.prototype.readInt16BE = function(e, t) {
		e >>>= 0, t || P(e, 2, this.length);
		let n = this[e + 1] | this[e] << 8;
		return n & 32768 ? n | 4294901760 : n;
	}, s.prototype.readInt32LE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
	}, s.prototype.readInt32BE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
	}, s.prototype.readBigInt64LE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (n << 24);
		return (BigInt(r) << BigInt(32)) + BigInt(t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24);
	}), s.prototype.readBigInt64BE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
		return (BigInt(r) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n);
	}), s.prototype.readFloatLE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), n.read(this, e, !0, 23, 4);
	}, s.prototype.readFloatBE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), n.read(this, e, !1, 23, 4);
	}, s.prototype.readDoubleLE = function(e, t) {
		return e >>>= 0, t || P(e, 8, this.length), n.read(this, e, !0, 52, 8);
	}, s.prototype.readDoubleBE = function(e, t) {
		return e >>>= 0, t || P(e, 8, this.length), n.read(this, e, !1, 52, 8);
	};
	function F(e, t, n, r, i, a) {
		if (!s.isBuffer(e)) throw TypeError("\"buffer\" argument must be a Buffer instance");
		if (t > i || t < a) throw RangeError("\"value\" argument is out of bounds");
		if (n + r > e.length) throw RangeError("Index out of range");
	}
	s.prototype.writeUintLE = s.prototype.writeUIntLE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, n >>>= 0, !r) {
			let r = 2 ** (8 * n) - 1;
			F(this, e, t, n, r, 0);
		}
		let i = 1, a = 0;
		for (this[t] = e & 255; ++a < n && (i *= 256);) this[t + a] = e / i & 255;
		return t + n;
	}, s.prototype.writeUintBE = s.prototype.writeUIntBE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, n >>>= 0, !r) {
			let r = 2 ** (8 * n) - 1;
			F(this, e, t, n, r, 0);
		}
		let i = n - 1, a = 1;
		for (this[t + i] = e & 255; --i >= 0 && (a *= 256);) this[t + i] = e / a & 255;
		return t + n;
	}, s.prototype.writeUint8 = s.prototype.writeUInt8 = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 1, 255, 0), this[t] = e & 255, t + 1;
	}, s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 65535, 0), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
	}, s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
	}, s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = e & 255, t + 4;
	}, s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
	};
	function I(e, t, n, r, i) {
		W(t, r, i, e, n, 7);
		let a = Number(t & BigInt(4294967295));
		e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a;
		let o = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, n;
	}
	function L(e, t, n, r, i) {
		W(t, r, i, e, n, 7);
		let a = Number(t & BigInt(4294967295));
		e[n + 7] = a, a >>= 8, e[n + 6] = a, a >>= 8, e[n + 5] = a, a >>= 8, e[n + 4] = a;
		let o = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[n + 3] = o, o >>= 8, e[n + 2] = o, o >>= 8, e[n + 1] = o, o >>= 8, e[n] = o, n + 8;
	}
	s.prototype.writeBigUInt64LE = Q(function(e, t = 0) {
		return I(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
	}), s.prototype.writeBigUInt64BE = Q(function(e, t = 0) {
		return L(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
	}), s.prototype.writeIntLE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, !r) {
			let r = 2 ** (8 * n - 1);
			F(this, e, t, n, r - 1, -r);
		}
		let i = 0, a = 1, o = 0;
		for (this[t] = e & 255; ++i < n && (a *= 256);) e < 0 && o === 0 && this[t + i - 1] !== 0 && (o = 1), this[t + i] = (e / a >> 0) - o & 255;
		return t + n;
	}, s.prototype.writeIntBE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, !r) {
			let r = 2 ** (8 * n - 1);
			F(this, e, t, n, r - 1, -r);
		}
		let i = n - 1, a = 1, o = 0;
		for (this[t + i] = e & 255; --i >= 0 && (a *= 256);) e < 0 && o === 0 && this[t + i + 1] !== 0 && (o = 1), this[t + i] = (e / a >> 0) - o & 255;
		return t + n;
	}, s.prototype.writeInt8 = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = e & 255, t + 1;
	}, s.prototype.writeInt16LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 32767, -32768), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
	}, s.prototype.writeInt16BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
	}, s.prototype.writeInt32LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 2147483647, -2147483648), this[t] = e & 255, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4;
	}, s.prototype.writeInt32BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
	}, s.prototype.writeBigInt64LE = Q(function(e, t = 0) {
		return I(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
	}), s.prototype.writeBigInt64BE = Q(function(e, t = 0) {
		return L(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
	});
	function R(e, t, n, r, i, a) {
		if (n + r > e.length || n < 0) throw RangeError("Index out of range");
	}
	function z(e, t, r, i, a) {
		return t = +t, r >>>= 0, a || R(e, t, r, 4, 34028234663852886e22, -34028234663852886e22), n.write(e, t, r, i, 23, 4), r + 4;
	}
	s.prototype.writeFloatLE = function(e, t, n) {
		return z(this, e, t, !0, n);
	}, s.prototype.writeFloatBE = function(e, t, n) {
		return z(this, e, t, !1, n);
	};
	function B(e, t, r, i, a) {
		return t = +t, r >>>= 0, a || R(e, t, r, 8, 17976931348623157e292, -17976931348623157e292), n.write(e, t, r, i, 52, 8), r + 8;
	}
	s.prototype.writeDoubleLE = function(e, t, n) {
		return B(this, e, t, !0, n);
	}, s.prototype.writeDoubleBE = function(e, t, n) {
		return B(this, e, t, !1, n);
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
	var V = {};
	function H(e, t, n) {
		V[e] = class extends n {
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
	H("ERR_BUFFER_OUT_OF_BOUNDS", function(e) {
		return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
	}, RangeError), H("ERR_INVALID_ARG_TYPE", function(e, t) {
		return `The "${e}" argument must be of type number. Received type ${typeof t}`;
	}, TypeError), H("ERR_OUT_OF_RANGE", function(e, t, n) {
		let r = `The value of "${e}" is out of range.`, i = n;
		return Number.isInteger(n) && Math.abs(n) > 2 ** 32 ? i = U(String(n)) : typeof n == "bigint" && (i = String(n), (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (i = U(i)), i += "n"), r += ` It must be ${t}. Received ${i}`, r;
	}, RangeError);
	function U(e) {
		let t = "", n = e.length, r = +(e[0] === "-");
		for (; n >= r + 4; n -= 3) t = `_${e.slice(n - 3, n)}${t}`;
		return `${e.slice(0, n)}${t}`;
	}
	function re(e, t, n) {
		G(t, "offset"), (e[t] === void 0 || e[t + n] === void 0) && K(t, e.length - (n + 1));
	}
	function W(e, t, n, r, i, a) {
		if (e > n || e < t) {
			let r = typeof t == "bigint" ? "n" : "", i;
			throw i = a > 3 ? t === 0 || t === BigInt(0) ? `>= 0${r} and < 2${r} ** ${(a + 1) * 8}${r}` : `>= -(2${r} ** ${(a + 1) * 8 - 1}${r}) and < 2 ** ${(a + 1) * 8 - 1}${r}` : `>= ${t}${r} and <= ${n}${r}`, new V.ERR_OUT_OF_RANGE("value", i, e);
		}
		re(r, i, a);
	}
	function G(e, t) {
		if (typeof e != "number") throw new V.ERR_INVALID_ARG_TYPE(t, "number", e);
	}
	function K(e, t, n) {
		throw Math.floor(e) === e ? t < 0 ? new V.ERR_BUFFER_OUT_OF_BOUNDS() : new V.ERR_OUT_OF_RANGE(n || "offset", `>= ${+!!n} and <= ${t}`, e) : (G(e, n), new V.ERR_OUT_OF_RANGE(n || "offset", "an integer", e));
	}
	var ie = /[^+/0-9A-Za-z-_]/g;
	function ae(e) {
		if (e = e.split("=")[0], e = e.trim().replace(ie, ""), e.length < 2) return "";
		for (; e.length % 4 != 0;) e += "=";
		return e;
	}
	function q(e, t) {
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
	function oe(e) {
		let t = [];
		for (let n = 0; n < e.length; ++n) t.push(e.charCodeAt(n) & 255);
		return t;
	}
	function se(e, t) {
		let n, r, i, a = [];
		for (let o = 0; o < e.length && !((t -= 2) < 0); ++o) n = e.charCodeAt(o), r = n >> 8, i = n % 256, a.push(i), a.push(r);
		return a;
	}
	function J(e) {
		return t.toByteArray(ae(e));
	}
	function Y(e, t, n, r) {
		let i;
		for (i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
		return i;
	}
	function X(e, t) {
		return e instanceof t || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === t.name;
	}
	function Z(e) {
		return e !== e;
	}
	var ce = (function() {
		let e = "0123456789abcdef", t = Array(256);
		for (let n = 0; n < 16; ++n) {
			let r = n * 16;
			for (let i = 0; i < 16; ++i) t[r + i] = e[n] + e[i];
		}
		return t;
	})();
	function Q(e) {
		return typeof BigInt > "u" ? le : e;
	}
	function le() {
		throw Error("BigInt not supported");
	}
})))();
var so = (e) => {
	let t = "", n = Object.keys(e).map((t) => {
		let n = e[t];
		return io(n) ? "" : `${encodeURIComponent(t)}=${encodeURIComponent(n)}`;
	}).filter((e) => e !== "").join("&");
	if (n) {
		let e = t.indexOf("#");
		e !== -1 && (t = t.slice(0, e)), t += (t.indexOf("?") === -1 ? "?" : "&") + n;
	}
	return t;
};
((e, { baseHeaders: t, handleErr: n, handleFinally: r, debug: i } = {}) => {
	let a = {
		"Content-Type": "application/json",
		...t
	}, o = (e) => {
		console.log(e);
	}, s = ({ endpoint: t, inputHeaders: s, fetchParams: c, args: l }) => {
		io(t) && (t = "");
		let u = e + t, d = {
			...a,
			...s
		};
		Object.keys(d).forEach((e) => {
			io(d[e]) && delete d[e];
		});
		let f = {
			method: "GET",
			headers: { ...d },
			...c
		};
		return io(l) || (f.method === "POST" && (f.body = JSON.stringify(l)), f.method === "GET" && (u += so(l))), fetch(u, f).catch((e) => n(e)).finally(() => {
			i && o({
				endpoint: t,
				inputHeaders: s,
				fetchParams: c
			}), !io(r) && r({
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
})("http://localhost:8080/", {
	handleErr: (e) => console.log(e),
	debug: !0
}), j({
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
}), t(null);
var co = (e) => e == null, lo = /* @__PURE__ */ le(((e) => {
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
})), uo = /* @__PURE__ */ le(((e) => {
	e.read = function(e, t, n, r, i) {
		var a, o, s = i * 8 - r - 1, c = (1 << s) - 1, l = c >> 1, u = -7, d = n ? i - 1 : 0, f = n ? -1 : 1, p = e[t + d];
		for (d += f, a = p & (1 << -u) - 1, p >>= -u, u += s; u > 0; a = a * 256 + e[t + d], d += f, u -= 8);
		for (o = a & (1 << -u) - 1, a >>= -u, u += r; u > 0; o = o * 256 + e[t + d], d += f, u -= 8);
		if (a === 0) a = 1 - l;
		else if (a === c) return o ? NaN : (p ? -1 : 1) * Infinity;
		else o += 2 ** r, a -= l;
		return (p ? -1 : 1) * o * 2 ** (a - r);
	}, e.write = function(e, t, n, r, i, a) {
		var o, s, c, l = a * 8 - i - 1, u = (1 << l) - 1, d = u >> 1, f = i === 23 ? 2 ** -24 - 2 ** -77 : 0, p = r ? 0 : a - 1, m = r ? 1 : -1, h = +(t < 0 || t === 0 && 1 / t < 0);
		for (t = Math.abs(t), isNaN(t) || t === Infinity ? (s = +!!isNaN(t), o = u) : (o = Math.floor(Math.log(t) / Math.LN2), t * (c = 2 ** -o) < 1 && (o--, c *= 2), o + d >= 1 ? t += f / c : t += f * 2 ** (1 - d), t * c >= 2 && (o++, c /= 2), o + d >= u ? (s = 0, o = u) : o + d >= 1 ? (s = (t * c - 1) * 2 ** i, o += d) : (s = t * 2 ** (d - 1) * 2 ** i, o = 0)); i >= 8; e[n + p] = s & 255, p += m, s /= 256, i -= 8);
		for (o = o << i | s, l += i; l > 0; e[n + p] = o & 255, p += m, o /= 256, l -= 8);
		e[n + p - m] |= h * 128;
	};
}));
(/* @__PURE__ */ le(((e) => {
	var t = lo(), n = uo(), r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
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
		if (X(e, ArrayBuffer) || e && X(e.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (X(e, SharedArrayBuffer) || e && X(e.buffer, SharedArrayBuffer))) return h(e, t, n);
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
		if (X(e, Uint8Array)) {
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
		if (e.length !== void 0) return typeof e.length != "number" || Z(e.length) ? o(0) : p(e);
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
		if (X(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), X(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), !s.isBuffer(e) || !s.isBuffer(t)) throw TypeError("The \"buf1\", \"buf2\" arguments must be one of type Buffer or Uint8Array");
		if (e === t) return 0;
		let n = e.length, r = t.length;
		for (let i = 0, a = Math.min(n, r); i < a; ++i) if (e[i] !== t[i]) {
			n = e[i], r = t[i];
			break;
		}
		return n < r ? -1 : +(r < n);
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
			if (X(t, Uint8Array)) i + t.length > r.length ? (s.isBuffer(t) || (t = s.from(t)), t.copy(r, i)) : Uint8Array.prototype.set.call(r, t, i);
			else if (s.isBuffer(t)) t.copy(r, i);
			else throw TypeError("\"list\" argument must be an Array of Buffers");
			i += t.length;
		}
		return r;
	};
	function y(e, t) {
		if (s.isBuffer(e)) return e.length;
		if (ArrayBuffer.isView(e) || X(e, ArrayBuffer)) return e.byteLength;
		if (typeof e != "string") throw TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + typeof e);
		let n = e.length, r = arguments.length > 2 && arguments[2] === !0;
		if (!r && n === 0) return 0;
		let i = !1;
		for (;;) switch (t) {
			case "ascii":
			case "latin1":
			case "binary": return n;
			case "utf8":
			case "utf-8": return q(e).length;
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return n * 2;
			case "hex": return n >>> 1;
			case "base64": return J(e).length;
			default:
				if (i) return r ? -1 : q(e).length;
				t = ("" + t).toLowerCase(), i = !0;
		}
	}
	s.byteLength = y;
	function b(e, t, n) {
		let r = !1;
		if ((t === void 0 || t < 0) && (t = 0), t > this.length || ((n === void 0 || n > this.length) && (n = this.length), n <= 0) || (n >>>= 0, t >>>= 0, n <= t)) return "";
		for (e ||= "utf8";;) switch (e) {
			case "hex": return M(this, t, n);
			case "utf8":
			case "utf-8": return k(this, t, n);
			case "ascii": return j(this, t, n);
			case "latin1":
			case "binary": return ne(this, t, n);
			case "base64": return O(this, t, n);
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return N(this, t, n);
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
		return e === 0 ? "" : arguments.length === 0 ? k(this, 0, e) : b.apply(this, arguments);
	}, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(e) {
		if (!s.isBuffer(e)) throw TypeError("Argument must be a Buffer");
		return this === e ? !0 : s.compare(this, e) === 0;
	}, s.prototype.inspect = function() {
		let t = "", n = e.INSPECT_MAX_BYTES;
		return t = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(), this.length > n && (t += " ... "), "<Buffer " + t + ">";
	}, r && (s.prototype[r] = s.prototype.inspect), s.prototype.compare = function(e, t, n, r, i) {
		if (X(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), !s.isBuffer(e)) throw TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof e);
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
		return a < o ? -1 : +(o < a);
	};
	function S(e, t, n, r, i) {
		if (e.length === 0) return -1;
		if (typeof n == "string" ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, Z(n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
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
			if (Z(r)) return o;
			e[n + o] = r;
		}
		return o;
	}
	function T(e, t, n, r) {
		return Y(q(t, e.length - n), e, n, r);
	}
	function E(e, t, n, r) {
		return Y(oe(t), e, n, r);
	}
	function D(e, t, n, r) {
		return Y(J(t), e, n, r);
	}
	function ee(e, t, n, r) {
		return Y(se(t, e.length - n), e, n, r);
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
			case "binary": return E(this, e, t, n);
			case "base64": return D(this, e, t, n);
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return ee(this, e, t, n);
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
	function O(e, n, r) {
		return n === 0 && r === e.length ? t.fromByteArray(e) : t.fromByteArray(e.slice(n, r));
	}
	function k(e, t, n) {
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
		return te(r);
	}
	var A = 4096;
	function te(e) {
		let t = e.length;
		if (t <= A) return String.fromCharCode.apply(String, e);
		let n = "", r = 0;
		for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += A));
		return n;
	}
	function j(e, t, n) {
		let r = "";
		n = Math.min(e.length, n);
		for (let i = t; i < n; ++i) r += String.fromCharCode(e[i] & 127);
		return r;
	}
	function ne(e, t, n) {
		let r = "";
		n = Math.min(e.length, n);
		for (let i = t; i < n; ++i) r += String.fromCharCode(e[i]);
		return r;
	}
	function M(e, t, n) {
		let r = e.length;
		(!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
		let i = "";
		for (let r = t; r < n; ++r) i += ce[e[r]];
		return i;
	}
	function N(e, t, n) {
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
	function P(e, t, n) {
		if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
		if (e + t > n) throw RangeError("Trying to access beyond buffer length");
	}
	s.prototype.readUintLE = s.prototype.readUIntLE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = this[e], i = 1, a = 0;
		for (; ++a < t && (i *= 256);) r += this[e + a] * i;
		return r;
	}, s.prototype.readUintBE = s.prototype.readUIntBE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = this[e + --t], i = 1;
		for (; t > 0 && (i *= 256);) r += this[e + --t] * i;
		return r;
	}, s.prototype.readUint8 = s.prototype.readUInt8 = function(e, t) {
		return e >>>= 0, t || P(e, 1, this.length), this[e];
	}, s.prototype.readUint16LE = s.prototype.readUInt16LE = function(e, t) {
		return e >>>= 0, t || P(e, 2, this.length), this[e] | this[e + 1] << 8;
	}, s.prototype.readUint16BE = s.prototype.readUInt16BE = function(e, t) {
		return e >>>= 0, t || P(e, 2, this.length), this[e] << 8 | this[e + 1];
	}, s.prototype.readUint32LE = s.prototype.readUInt32LE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
	}, s.prototype.readUint32BE = s.prototype.readUInt32BE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
	}, s.prototype.readBigUInt64LE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24, i = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + n * 2 ** 24;
		return BigInt(r) + (BigInt(i) << BigInt(32));
	}), s.prototype.readBigUInt64BE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e], i = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n;
		return (BigInt(r) << BigInt(32)) + BigInt(i);
	}), s.prototype.readIntLE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = this[e], i = 1, a = 0;
		for (; ++a < t && (i *= 256);) r += this[e + a] * i;
		return i *= 128, r >= i && (r -= 2 ** (8 * t)), r;
	}, s.prototype.readIntBE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = t, i = 1, a = this[e + --r];
		for (; r > 0 && (i *= 256);) a += this[e + --r] * i;
		return i *= 128, a >= i && (a -= 2 ** (8 * t)), a;
	}, s.prototype.readInt8 = function(e, t) {
		return e >>>= 0, t || P(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e];
	}, s.prototype.readInt16LE = function(e, t) {
		e >>>= 0, t || P(e, 2, this.length);
		let n = this[e] | this[e + 1] << 8;
		return n & 32768 ? n | 4294901760 : n;
	}, s.prototype.readInt16BE = function(e, t) {
		e >>>= 0, t || P(e, 2, this.length);
		let n = this[e + 1] | this[e] << 8;
		return n & 32768 ? n | 4294901760 : n;
	}, s.prototype.readInt32LE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
	}, s.prototype.readInt32BE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
	}, s.prototype.readBigInt64LE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (n << 24);
		return (BigInt(r) << BigInt(32)) + BigInt(t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24);
	}), s.prototype.readBigInt64BE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
		return (BigInt(r) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n);
	}), s.prototype.readFloatLE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), n.read(this, e, !0, 23, 4);
	}, s.prototype.readFloatBE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), n.read(this, e, !1, 23, 4);
	}, s.prototype.readDoubleLE = function(e, t) {
		return e >>>= 0, t || P(e, 8, this.length), n.read(this, e, !0, 52, 8);
	}, s.prototype.readDoubleBE = function(e, t) {
		return e >>>= 0, t || P(e, 8, this.length), n.read(this, e, !1, 52, 8);
	};
	function F(e, t, n, r, i, a) {
		if (!s.isBuffer(e)) throw TypeError("\"buffer\" argument must be a Buffer instance");
		if (t > i || t < a) throw RangeError("\"value\" argument is out of bounds");
		if (n + r > e.length) throw RangeError("Index out of range");
	}
	s.prototype.writeUintLE = s.prototype.writeUIntLE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, n >>>= 0, !r) {
			let r = 2 ** (8 * n) - 1;
			F(this, e, t, n, r, 0);
		}
		let i = 1, a = 0;
		for (this[t] = e & 255; ++a < n && (i *= 256);) this[t + a] = e / i & 255;
		return t + n;
	}, s.prototype.writeUintBE = s.prototype.writeUIntBE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, n >>>= 0, !r) {
			let r = 2 ** (8 * n) - 1;
			F(this, e, t, n, r, 0);
		}
		let i = n - 1, a = 1;
		for (this[t + i] = e & 255; --i >= 0 && (a *= 256);) this[t + i] = e / a & 255;
		return t + n;
	}, s.prototype.writeUint8 = s.prototype.writeUInt8 = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 1, 255, 0), this[t] = e & 255, t + 1;
	}, s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 65535, 0), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
	}, s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
	}, s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = e & 255, t + 4;
	}, s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
	};
	function I(e, t, n, r, i) {
		W(t, r, i, e, n, 7);
		let a = Number(t & BigInt(4294967295));
		e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a;
		let o = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, n;
	}
	function L(e, t, n, r, i) {
		W(t, r, i, e, n, 7);
		let a = Number(t & BigInt(4294967295));
		e[n + 7] = a, a >>= 8, e[n + 6] = a, a >>= 8, e[n + 5] = a, a >>= 8, e[n + 4] = a;
		let o = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[n + 3] = o, o >>= 8, e[n + 2] = o, o >>= 8, e[n + 1] = o, o >>= 8, e[n] = o, n + 8;
	}
	s.prototype.writeBigUInt64LE = Q(function(e, t = 0) {
		return I(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
	}), s.prototype.writeBigUInt64BE = Q(function(e, t = 0) {
		return L(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
	}), s.prototype.writeIntLE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, !r) {
			let r = 2 ** (8 * n - 1);
			F(this, e, t, n, r - 1, -r);
		}
		let i = 0, a = 1, o = 0;
		for (this[t] = e & 255; ++i < n && (a *= 256);) e < 0 && o === 0 && this[t + i - 1] !== 0 && (o = 1), this[t + i] = (e / a >> 0) - o & 255;
		return t + n;
	}, s.prototype.writeIntBE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, !r) {
			let r = 2 ** (8 * n - 1);
			F(this, e, t, n, r - 1, -r);
		}
		let i = n - 1, a = 1, o = 0;
		for (this[t + i] = e & 255; --i >= 0 && (a *= 256);) e < 0 && o === 0 && this[t + i + 1] !== 0 && (o = 1), this[t + i] = (e / a >> 0) - o & 255;
		return t + n;
	}, s.prototype.writeInt8 = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = e & 255, t + 1;
	}, s.prototype.writeInt16LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 32767, -32768), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
	}, s.prototype.writeInt16BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
	}, s.prototype.writeInt32LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 2147483647, -2147483648), this[t] = e & 255, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4;
	}, s.prototype.writeInt32BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
	}, s.prototype.writeBigInt64LE = Q(function(e, t = 0) {
		return I(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
	}), s.prototype.writeBigInt64BE = Q(function(e, t = 0) {
		return L(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
	});
	function R(e, t, n, r, i, a) {
		if (n + r > e.length || n < 0) throw RangeError("Index out of range");
	}
	function z(e, t, r, i, a) {
		return t = +t, r >>>= 0, a || R(e, t, r, 4, 34028234663852886e22, -34028234663852886e22), n.write(e, t, r, i, 23, 4), r + 4;
	}
	s.prototype.writeFloatLE = function(e, t, n) {
		return z(this, e, t, !0, n);
	}, s.prototype.writeFloatBE = function(e, t, n) {
		return z(this, e, t, !1, n);
	};
	function B(e, t, r, i, a) {
		return t = +t, r >>>= 0, a || R(e, t, r, 8, 17976931348623157e292, -17976931348623157e292), n.write(e, t, r, i, 52, 8), r + 8;
	}
	s.prototype.writeDoubleLE = function(e, t, n) {
		return B(this, e, t, !0, n);
	}, s.prototype.writeDoubleBE = function(e, t, n) {
		return B(this, e, t, !1, n);
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
	var V = {};
	function H(e, t, n) {
		V[e] = class extends n {
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
	H("ERR_BUFFER_OUT_OF_BOUNDS", function(e) {
		return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
	}, RangeError), H("ERR_INVALID_ARG_TYPE", function(e, t) {
		return `The "${e}" argument must be of type number. Received type ${typeof t}`;
	}, TypeError), H("ERR_OUT_OF_RANGE", function(e, t, n) {
		let r = `The value of "${e}" is out of range.`, i = n;
		return Number.isInteger(n) && Math.abs(n) > 2 ** 32 ? i = U(String(n)) : typeof n == "bigint" && (i = String(n), (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (i = U(i)), i += "n"), r += ` It must be ${t}. Received ${i}`, r;
	}, RangeError);
	function U(e) {
		let t = "", n = e.length, r = +(e[0] === "-");
		for (; n >= r + 4; n -= 3) t = `_${e.slice(n - 3, n)}${t}`;
		return `${e.slice(0, n)}${t}`;
	}
	function re(e, t, n) {
		G(t, "offset"), (e[t] === void 0 || e[t + n] === void 0) && K(t, e.length - (n + 1));
	}
	function W(e, t, n, r, i, a) {
		if (e > n || e < t) {
			let r = typeof t == "bigint" ? "n" : "", i;
			throw i = a > 3 ? t === 0 || t === BigInt(0) ? `>= 0${r} and < 2${r} ** ${(a + 1) * 8}${r}` : `>= -(2${r} ** ${(a + 1) * 8 - 1}${r}) and < 2 ** ${(a + 1) * 8 - 1}${r}` : `>= ${t}${r} and <= ${n}${r}`, new V.ERR_OUT_OF_RANGE("value", i, e);
		}
		re(r, i, a);
	}
	function G(e, t) {
		if (typeof e != "number") throw new V.ERR_INVALID_ARG_TYPE(t, "number", e);
	}
	function K(e, t, n) {
		throw Math.floor(e) === e ? t < 0 ? new V.ERR_BUFFER_OUT_OF_BOUNDS() : new V.ERR_OUT_OF_RANGE(n || "offset", `>= ${+!!n} and <= ${t}`, e) : (G(e, n), new V.ERR_OUT_OF_RANGE(n || "offset", "an integer", e));
	}
	var ie = /[^+/0-9A-Za-z-_]/g;
	function ae(e) {
		if (e = e.split("=")[0], e = e.trim().replace(ie, ""), e.length < 2) return "";
		for (; e.length % 4 != 0;) e += "=";
		return e;
	}
	function q(e, t) {
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
	function oe(e) {
		let t = [];
		for (let n = 0; n < e.length; ++n) t.push(e.charCodeAt(n) & 255);
		return t;
	}
	function se(e, t) {
		let n, r, i, a = [];
		for (let o = 0; o < e.length && !((t -= 2) < 0); ++o) n = e.charCodeAt(o), r = n >> 8, i = n % 256, a.push(i), a.push(r);
		return a;
	}
	function J(e) {
		return t.toByteArray(ae(e));
	}
	function Y(e, t, n, r) {
		let i;
		for (i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
		return i;
	}
	function X(e, t) {
		return e instanceof t || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === t.name;
	}
	function Z(e) {
		return e !== e;
	}
	var ce = (function() {
		let e = "0123456789abcdef", t = Array(256);
		for (let n = 0; n < 16; ++n) {
			let r = n * 16;
			for (let i = 0; i < 16; ++i) t[r + i] = e[n] + e[i];
		}
		return t;
	})();
	function Q(e) {
		return typeof BigInt > "u" ? le : e;
	}
	function le() {
		throw Error("BigInt not supported");
	}
})))();
var fo = (e) => {
	let t = "", n = Object.keys(e).map((t) => {
		let n = e[t];
		return co(n) ? "" : `${encodeURIComponent(t)}=${encodeURIComponent(n)}`;
	}).filter((e) => e !== "").join("&");
	if (n) {
		let e = t.indexOf("#");
		e !== -1 && (t = t.slice(0, e)), t += (t.indexOf("?") === -1 ? "?" : "&") + n;
	}
	return t;
};
((e, { baseHeaders: t, handleErr: n, handleFinally: r, debug: i } = {}) => {
	let a = {
		"Content-Type": "application/json",
		...t
	}, o = (e) => {
		console.log(e);
	}, s = ({ endpoint: t, inputHeaders: s, fetchParams: c, args: l }) => {
		co(t) && (t = "");
		let u = e + t, d = {
			...a,
			...s
		};
		Object.keys(d).forEach((e) => {
			co(d[e]) && delete d[e];
		});
		let f = {
			method: "GET",
			headers: { ...d },
			...c
		};
		return co(l) || (f.method === "POST" && (f.body = JSON.stringify(l)), f.method === "GET" && (u += fo(l))), fetch(u, f).catch((e) => n(e)).finally(() => {
			i && o({
				endpoint: t,
				inputHeaders: s,
				fetchParams: c
			}), !co(r) && r({
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
})("http://localhost:8080/", {
	handleErr: (e) => console.log(e),
	debug: !0
}), j({
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
}), t(null);
var po = (e) => e == null, mo = /* @__PURE__ */ Q(((e) => {
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
})), ho = /* @__PURE__ */ Q(((e) => {
	e.read = function(e, t, n, r, i) {
		var a, o, s = i * 8 - r - 1, c = (1 << s) - 1, l = c >> 1, u = -7, d = n ? i - 1 : 0, f = n ? -1 : 1, p = e[t + d];
		for (d += f, a = p & (1 << -u) - 1, p >>= -u, u += s; u > 0; a = a * 256 + e[t + d], d += f, u -= 8);
		for (o = a & (1 << -u) - 1, a >>= -u, u += r; u > 0; o = o * 256 + e[t + d], d += f, u -= 8);
		if (a === 0) a = 1 - l;
		else if (a === c) return o ? NaN : (p ? -1 : 1) * Infinity;
		else o += 2 ** r, a -= l;
		return (p ? -1 : 1) * o * 2 ** (a - r);
	}, e.write = function(e, t, n, r, i, a) {
		var o, s, c, l = a * 8 - i - 1, u = (1 << l) - 1, d = u >> 1, f = i === 23 ? 2 ** -24 - 2 ** -77 : 0, p = r ? 0 : a - 1, m = r ? 1 : -1, h = +(t < 0 || t === 0 && 1 / t < 0);
		for (t = Math.abs(t), isNaN(t) || t === Infinity ? (s = +!!isNaN(t), o = u) : (o = Math.floor(Math.log(t) / Math.LN2), t * (c = 2 ** -o) < 1 && (o--, c *= 2), o + d >= 1 ? t += f / c : t += f * 2 ** (1 - d), t * c >= 2 && (o++, c /= 2), o + d >= u ? (s = 0, o = u) : o + d >= 1 ? (s = (t * c - 1) * 2 ** i, o += d) : (s = t * 2 ** (d - 1) * 2 ** i, o = 0)); i >= 8; e[n + p] = s & 255, p += m, s /= 256, i -= 8);
		for (o = o << i | s, l += i; l > 0; e[n + p] = o & 255, p += m, o /= 256, l -= 8);
		e[n + p - m] |= h * 128;
	};
}));
(/* @__PURE__ */ Q(((e) => {
	var t = mo(), n = ho(), r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
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
		if (X(e, ArrayBuffer) || e && X(e.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (X(e, SharedArrayBuffer) || e && X(e.buffer, SharedArrayBuffer))) return h(e, t, n);
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
		if (X(e, Uint8Array)) {
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
		if (e.length !== void 0) return typeof e.length != "number" || Z(e.length) ? o(0) : p(e);
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
		if (X(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), X(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), !s.isBuffer(e) || !s.isBuffer(t)) throw TypeError("The \"buf1\", \"buf2\" arguments must be one of type Buffer or Uint8Array");
		if (e === t) return 0;
		let n = e.length, r = t.length;
		for (let i = 0, a = Math.min(n, r); i < a; ++i) if (e[i] !== t[i]) {
			n = e[i], r = t[i];
			break;
		}
		return n < r ? -1 : +(r < n);
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
			if (X(t, Uint8Array)) i + t.length > r.length ? (s.isBuffer(t) || (t = s.from(t)), t.copy(r, i)) : Uint8Array.prototype.set.call(r, t, i);
			else if (s.isBuffer(t)) t.copy(r, i);
			else throw TypeError("\"list\" argument must be an Array of Buffers");
			i += t.length;
		}
		return r;
	};
	function y(e, t) {
		if (s.isBuffer(e)) return e.length;
		if (ArrayBuffer.isView(e) || X(e, ArrayBuffer)) return e.byteLength;
		if (typeof e != "string") throw TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + typeof e);
		let n = e.length, r = arguments.length > 2 && arguments[2] === !0;
		if (!r && n === 0) return 0;
		let i = !1;
		for (;;) switch (t) {
			case "ascii":
			case "latin1":
			case "binary": return n;
			case "utf8":
			case "utf-8": return q(e).length;
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return n * 2;
			case "hex": return n >>> 1;
			case "base64": return J(e).length;
			default:
				if (i) return r ? -1 : q(e).length;
				t = ("" + t).toLowerCase(), i = !0;
		}
	}
	s.byteLength = y;
	function b(e, t, n) {
		let r = !1;
		if ((t === void 0 || t < 0) && (t = 0), t > this.length || ((n === void 0 || n > this.length) && (n = this.length), n <= 0) || (n >>>= 0, t >>>= 0, n <= t)) return "";
		for (e ||= "utf8";;) switch (e) {
			case "hex": return M(this, t, n);
			case "utf8":
			case "utf-8": return k(this, t, n);
			case "ascii": return j(this, t, n);
			case "latin1":
			case "binary": return ne(this, t, n);
			case "base64": return O(this, t, n);
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return N(this, t, n);
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
		return e === 0 ? "" : arguments.length === 0 ? k(this, 0, e) : b.apply(this, arguments);
	}, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(e) {
		if (!s.isBuffer(e)) throw TypeError("Argument must be a Buffer");
		return this === e ? !0 : s.compare(this, e) === 0;
	}, s.prototype.inspect = function() {
		let t = "", n = e.INSPECT_MAX_BYTES;
		return t = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(), this.length > n && (t += " ... "), "<Buffer " + t + ">";
	}, r && (s.prototype[r] = s.prototype.inspect), s.prototype.compare = function(e, t, n, r, i) {
		if (X(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), !s.isBuffer(e)) throw TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof e);
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
		return a < o ? -1 : +(o < a);
	};
	function S(e, t, n, r, i) {
		if (e.length === 0) return -1;
		if (typeof n == "string" ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, Z(n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
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
			if (Z(r)) return o;
			e[n + o] = r;
		}
		return o;
	}
	function T(e, t, n, r) {
		return Y(q(t, e.length - n), e, n, r);
	}
	function E(e, t, n, r) {
		return Y(oe(t), e, n, r);
	}
	function D(e, t, n, r) {
		return Y(J(t), e, n, r);
	}
	function ee(e, t, n, r) {
		return Y(se(t, e.length - n), e, n, r);
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
			case "binary": return E(this, e, t, n);
			case "base64": return D(this, e, t, n);
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return ee(this, e, t, n);
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
	function O(e, n, r) {
		return n === 0 && r === e.length ? t.fromByteArray(e) : t.fromByteArray(e.slice(n, r));
	}
	function k(e, t, n) {
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
		return te(r);
	}
	var A = 4096;
	function te(e) {
		let t = e.length;
		if (t <= A) return String.fromCharCode.apply(String, e);
		let n = "", r = 0;
		for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += A));
		return n;
	}
	function j(e, t, n) {
		let r = "";
		n = Math.min(e.length, n);
		for (let i = t; i < n; ++i) r += String.fromCharCode(e[i] & 127);
		return r;
	}
	function ne(e, t, n) {
		let r = "";
		n = Math.min(e.length, n);
		for (let i = t; i < n; ++i) r += String.fromCharCode(e[i]);
		return r;
	}
	function M(e, t, n) {
		let r = e.length;
		(!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
		let i = "";
		for (let r = t; r < n; ++r) i += ce[e[r]];
		return i;
	}
	function N(e, t, n) {
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
	function P(e, t, n) {
		if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
		if (e + t > n) throw RangeError("Trying to access beyond buffer length");
	}
	s.prototype.readUintLE = s.prototype.readUIntLE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = this[e], i = 1, a = 0;
		for (; ++a < t && (i *= 256);) r += this[e + a] * i;
		return r;
	}, s.prototype.readUintBE = s.prototype.readUIntBE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = this[e + --t], i = 1;
		for (; t > 0 && (i *= 256);) r += this[e + --t] * i;
		return r;
	}, s.prototype.readUint8 = s.prototype.readUInt8 = function(e, t) {
		return e >>>= 0, t || P(e, 1, this.length), this[e];
	}, s.prototype.readUint16LE = s.prototype.readUInt16LE = function(e, t) {
		return e >>>= 0, t || P(e, 2, this.length), this[e] | this[e + 1] << 8;
	}, s.prototype.readUint16BE = s.prototype.readUInt16BE = function(e, t) {
		return e >>>= 0, t || P(e, 2, this.length), this[e] << 8 | this[e + 1];
	}, s.prototype.readUint32LE = s.prototype.readUInt32LE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
	}, s.prototype.readUint32BE = s.prototype.readUInt32BE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
	}, s.prototype.readBigUInt64LE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24, i = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + n * 2 ** 24;
		return BigInt(r) + (BigInt(i) << BigInt(32));
	}), s.prototype.readBigUInt64BE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e], i = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n;
		return (BigInt(r) << BigInt(32)) + BigInt(i);
	}), s.prototype.readIntLE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = this[e], i = 1, a = 0;
		for (; ++a < t && (i *= 256);) r += this[e + a] * i;
		return i *= 128, r >= i && (r -= 2 ** (8 * t)), r;
	}, s.prototype.readIntBE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = t, i = 1, a = this[e + --r];
		for (; r > 0 && (i *= 256);) a += this[e + --r] * i;
		return i *= 128, a >= i && (a -= 2 ** (8 * t)), a;
	}, s.prototype.readInt8 = function(e, t) {
		return e >>>= 0, t || P(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e];
	}, s.prototype.readInt16LE = function(e, t) {
		e >>>= 0, t || P(e, 2, this.length);
		let n = this[e] | this[e + 1] << 8;
		return n & 32768 ? n | 4294901760 : n;
	}, s.prototype.readInt16BE = function(e, t) {
		e >>>= 0, t || P(e, 2, this.length);
		let n = this[e + 1] | this[e] << 8;
		return n & 32768 ? n | 4294901760 : n;
	}, s.prototype.readInt32LE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
	}, s.prototype.readInt32BE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
	}, s.prototype.readBigInt64LE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (n << 24);
		return (BigInt(r) << BigInt(32)) + BigInt(t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24);
	}), s.prototype.readBigInt64BE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
		return (BigInt(r) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n);
	}), s.prototype.readFloatLE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), n.read(this, e, !0, 23, 4);
	}, s.prototype.readFloatBE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), n.read(this, e, !1, 23, 4);
	}, s.prototype.readDoubleLE = function(e, t) {
		return e >>>= 0, t || P(e, 8, this.length), n.read(this, e, !0, 52, 8);
	}, s.prototype.readDoubleBE = function(e, t) {
		return e >>>= 0, t || P(e, 8, this.length), n.read(this, e, !1, 52, 8);
	};
	function F(e, t, n, r, i, a) {
		if (!s.isBuffer(e)) throw TypeError("\"buffer\" argument must be a Buffer instance");
		if (t > i || t < a) throw RangeError("\"value\" argument is out of bounds");
		if (n + r > e.length) throw RangeError("Index out of range");
	}
	s.prototype.writeUintLE = s.prototype.writeUIntLE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, n >>>= 0, !r) {
			let r = 2 ** (8 * n) - 1;
			F(this, e, t, n, r, 0);
		}
		let i = 1, a = 0;
		for (this[t] = e & 255; ++a < n && (i *= 256);) this[t + a] = e / i & 255;
		return t + n;
	}, s.prototype.writeUintBE = s.prototype.writeUIntBE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, n >>>= 0, !r) {
			let r = 2 ** (8 * n) - 1;
			F(this, e, t, n, r, 0);
		}
		let i = n - 1, a = 1;
		for (this[t + i] = e & 255; --i >= 0 && (a *= 256);) this[t + i] = e / a & 255;
		return t + n;
	}, s.prototype.writeUint8 = s.prototype.writeUInt8 = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 1, 255, 0), this[t] = e & 255, t + 1;
	}, s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 65535, 0), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
	}, s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
	}, s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = e & 255, t + 4;
	}, s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
	};
	function I(e, t, n, r, i) {
		W(t, r, i, e, n, 7);
		let a = Number(t & BigInt(4294967295));
		e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a;
		let o = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, n;
	}
	function L(e, t, n, r, i) {
		W(t, r, i, e, n, 7);
		let a = Number(t & BigInt(4294967295));
		e[n + 7] = a, a >>= 8, e[n + 6] = a, a >>= 8, e[n + 5] = a, a >>= 8, e[n + 4] = a;
		let o = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[n + 3] = o, o >>= 8, e[n + 2] = o, o >>= 8, e[n + 1] = o, o >>= 8, e[n] = o, n + 8;
	}
	s.prototype.writeBigUInt64LE = Q(function(e, t = 0) {
		return I(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
	}), s.prototype.writeBigUInt64BE = Q(function(e, t = 0) {
		return L(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
	}), s.prototype.writeIntLE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, !r) {
			let r = 2 ** (8 * n - 1);
			F(this, e, t, n, r - 1, -r);
		}
		let i = 0, a = 1, o = 0;
		for (this[t] = e & 255; ++i < n && (a *= 256);) e < 0 && o === 0 && this[t + i - 1] !== 0 && (o = 1), this[t + i] = (e / a >> 0) - o & 255;
		return t + n;
	}, s.prototype.writeIntBE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, !r) {
			let r = 2 ** (8 * n - 1);
			F(this, e, t, n, r - 1, -r);
		}
		let i = n - 1, a = 1, o = 0;
		for (this[t + i] = e & 255; --i >= 0 && (a *= 256);) e < 0 && o === 0 && this[t + i + 1] !== 0 && (o = 1), this[t + i] = (e / a >> 0) - o & 255;
		return t + n;
	}, s.prototype.writeInt8 = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = e & 255, t + 1;
	}, s.prototype.writeInt16LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 32767, -32768), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
	}, s.prototype.writeInt16BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
	}, s.prototype.writeInt32LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 2147483647, -2147483648), this[t] = e & 255, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4;
	}, s.prototype.writeInt32BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
	}, s.prototype.writeBigInt64LE = Q(function(e, t = 0) {
		return I(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
	}), s.prototype.writeBigInt64BE = Q(function(e, t = 0) {
		return L(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
	});
	function R(e, t, n, r, i, a) {
		if (n + r > e.length || n < 0) throw RangeError("Index out of range");
	}
	function z(e, t, r, i, a) {
		return t = +t, r >>>= 0, a || R(e, t, r, 4, 34028234663852886e22, -34028234663852886e22), n.write(e, t, r, i, 23, 4), r + 4;
	}
	s.prototype.writeFloatLE = function(e, t, n) {
		return z(this, e, t, !0, n);
	}, s.prototype.writeFloatBE = function(e, t, n) {
		return z(this, e, t, !1, n);
	};
	function B(e, t, r, i, a) {
		return t = +t, r >>>= 0, a || R(e, t, r, 8, 17976931348623157e292, -17976931348623157e292), n.write(e, t, r, i, 52, 8), r + 8;
	}
	s.prototype.writeDoubleLE = function(e, t, n) {
		return B(this, e, t, !0, n);
	}, s.prototype.writeDoubleBE = function(e, t, n) {
		return B(this, e, t, !1, n);
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
	var V = {};
	function H(e, t, n) {
		V[e] = class extends n {
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
	H("ERR_BUFFER_OUT_OF_BOUNDS", function(e) {
		return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
	}, RangeError), H("ERR_INVALID_ARG_TYPE", function(e, t) {
		return `The "${e}" argument must be of type number. Received type ${typeof t}`;
	}, TypeError), H("ERR_OUT_OF_RANGE", function(e, t, n) {
		let r = `The value of "${e}" is out of range.`, i = n;
		return Number.isInteger(n) && Math.abs(n) > 2 ** 32 ? i = U(String(n)) : typeof n == "bigint" && (i = String(n), (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (i = U(i)), i += "n"), r += ` It must be ${t}. Received ${i}`, r;
	}, RangeError);
	function U(e) {
		let t = "", n = e.length, r = +(e[0] === "-");
		for (; n >= r + 4; n -= 3) t = `_${e.slice(n - 3, n)}${t}`;
		return `${e.slice(0, n)}${t}`;
	}
	function re(e, t, n) {
		G(t, "offset"), (e[t] === void 0 || e[t + n] === void 0) && K(t, e.length - (n + 1));
	}
	function W(e, t, n, r, i, a) {
		if (e > n || e < t) {
			let r = typeof t == "bigint" ? "n" : "", i;
			throw i = a > 3 ? t === 0 || t === BigInt(0) ? `>= 0${r} and < 2${r} ** ${(a + 1) * 8}${r}` : `>= -(2${r} ** ${(a + 1) * 8 - 1}${r}) and < 2 ** ${(a + 1) * 8 - 1}${r}` : `>= ${t}${r} and <= ${n}${r}`, new V.ERR_OUT_OF_RANGE("value", i, e);
		}
		re(r, i, a);
	}
	function G(e, t) {
		if (typeof e != "number") throw new V.ERR_INVALID_ARG_TYPE(t, "number", e);
	}
	function K(e, t, n) {
		throw Math.floor(e) === e ? t < 0 ? new V.ERR_BUFFER_OUT_OF_BOUNDS() : new V.ERR_OUT_OF_RANGE(n || "offset", `>= ${+!!n} and <= ${t}`, e) : (G(e, n), new V.ERR_OUT_OF_RANGE(n || "offset", "an integer", e));
	}
	var ie = /[^+/0-9A-Za-z-_]/g;
	function ae(e) {
		if (e = e.split("=")[0], e = e.trim().replace(ie, ""), e.length < 2) return "";
		for (; e.length % 4 != 0;) e += "=";
		return e;
	}
	function q(e, t) {
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
	function oe(e) {
		let t = [];
		for (let n = 0; n < e.length; ++n) t.push(e.charCodeAt(n) & 255);
		return t;
	}
	function se(e, t) {
		let n, r, i, a = [];
		for (let o = 0; o < e.length && !((t -= 2) < 0); ++o) n = e.charCodeAt(o), r = n >> 8, i = n % 256, a.push(i), a.push(r);
		return a;
	}
	function J(e) {
		return t.toByteArray(ae(e));
	}
	function Y(e, t, n, r) {
		let i;
		for (i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
		return i;
	}
	function X(e, t) {
		return e instanceof t || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === t.name;
	}
	function Z(e) {
		return e !== e;
	}
	var ce = (function() {
		let e = "0123456789abcdef", t = Array(256);
		for (let n = 0; n < 16; ++n) {
			let r = n * 16;
			for (let i = 0; i < 16; ++i) t[r + i] = e[n] + e[i];
		}
		return t;
	})();
	function Q(e) {
		return typeof BigInt > "u" ? le : e;
	}
	function le() {
		throw Error("BigInt not supported");
	}
})))();
var go = (e) => {
	let t = "", n = Object.keys(e).map((t) => {
		let n = e[t];
		return po(n) ? "" : `${encodeURIComponent(t)}=${encodeURIComponent(n)}`;
	}).filter((e) => e !== "").join("&");
	if (n) {
		let e = t.indexOf("#");
		e !== -1 && (t = t.slice(0, e)), t += (t.indexOf("?") === -1 ? "?" : "&") + n;
	}
	return t;
};
((e, { baseHeaders: t, handleErr: n, handleFinally: r, debug: i } = {}) => {
	let a = {
		"Content-Type": "application/json",
		...t
	}, o = (e) => {
		console.log(e);
	}, s = ({ endpoint: t, inputHeaders: s, fetchParams: c, args: l }) => {
		po(t) && (t = "");
		let u = e + t, d = {
			...a,
			...s
		};
		Object.keys(d).forEach((e) => {
			po(d[e]) && delete d[e];
		});
		let f = {
			method: "GET",
			headers: { ...d },
			...c
		};
		return po(l) || (f.method === "POST" && (f.body = JSON.stringify(l)), f.method === "GET" && (u += go(l))), fetch(u, f).catch((e) => n(e)).finally(() => {
			i && o({
				endpoint: t,
				inputHeaders: s,
				fetchParams: c
			}), !po(r) && r({
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
})("http://localhost:8080/", {
	handleErr: (e) => console.log(e),
	debug: !0
}), j({
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
}), t(null);
var _o = (e) => e == null, vo = /* @__PURE__ */ ce(((e) => {
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
})), yo = /* @__PURE__ */ ce(((e) => {
	e.read = function(e, t, n, r, i) {
		var a, o, s = i * 8 - r - 1, c = (1 << s) - 1, l = c >> 1, u = -7, d = n ? i - 1 : 0, f = n ? -1 : 1, p = e[t + d];
		for (d += f, a = p & (1 << -u) - 1, p >>= -u, u += s; u > 0; a = a * 256 + e[t + d], d += f, u -= 8);
		for (o = a & (1 << -u) - 1, a >>= -u, u += r; u > 0; o = o * 256 + e[t + d], d += f, u -= 8);
		if (a === 0) a = 1 - l;
		else if (a === c) return o ? NaN : (p ? -1 : 1) * Infinity;
		else o += 2 ** r, a -= l;
		return (p ? -1 : 1) * o * 2 ** (a - r);
	}, e.write = function(e, t, n, r, i, a) {
		var o, s, c, l = a * 8 - i - 1, u = (1 << l) - 1, d = u >> 1, f = i === 23 ? 2 ** -24 - 2 ** -77 : 0, p = r ? 0 : a - 1, m = r ? 1 : -1, h = +(t < 0 || t === 0 && 1 / t < 0);
		for (t = Math.abs(t), isNaN(t) || t === Infinity ? (s = +!!isNaN(t), o = u) : (o = Math.floor(Math.log(t) / Math.LN2), t * (c = 2 ** -o) < 1 && (o--, c *= 2), o + d >= 1 ? t += f / c : t += f * 2 ** (1 - d), t * c >= 2 && (o++, c /= 2), o + d >= u ? (s = 0, o = u) : o + d >= 1 ? (s = (t * c - 1) * 2 ** i, o += d) : (s = t * 2 ** (d - 1) * 2 ** i, o = 0)); i >= 8; e[n + p] = s & 255, p += m, s /= 256, i -= 8);
		for (o = o << i | s, l += i; l > 0; e[n + p] = o & 255, p += m, o /= 256, l -= 8);
		e[n + p - m] |= h * 128;
	};
}));
(/* @__PURE__ */ ce(((e) => {
	var t = vo(), n = yo(), r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
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
		if (X(e, ArrayBuffer) || e && X(e.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (X(e, SharedArrayBuffer) || e && X(e.buffer, SharedArrayBuffer))) return h(e, t, n);
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
		if (X(e, Uint8Array)) {
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
		if (e.length !== void 0) return typeof e.length != "number" || Z(e.length) ? o(0) : p(e);
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
		if (X(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), X(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), !s.isBuffer(e) || !s.isBuffer(t)) throw TypeError("The \"buf1\", \"buf2\" arguments must be one of type Buffer or Uint8Array");
		if (e === t) return 0;
		let n = e.length, r = t.length;
		for (let i = 0, a = Math.min(n, r); i < a; ++i) if (e[i] !== t[i]) {
			n = e[i], r = t[i];
			break;
		}
		return n < r ? -1 : +(r < n);
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
			if (X(t, Uint8Array)) i + t.length > r.length ? (s.isBuffer(t) || (t = s.from(t)), t.copy(r, i)) : Uint8Array.prototype.set.call(r, t, i);
			else if (s.isBuffer(t)) t.copy(r, i);
			else throw TypeError("\"list\" argument must be an Array of Buffers");
			i += t.length;
		}
		return r;
	};
	function y(e, t) {
		if (s.isBuffer(e)) return e.length;
		if (ArrayBuffer.isView(e) || X(e, ArrayBuffer)) return e.byteLength;
		if (typeof e != "string") throw TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + typeof e);
		let n = e.length, r = arguments.length > 2 && arguments[2] === !0;
		if (!r && n === 0) return 0;
		let i = !1;
		for (;;) switch (t) {
			case "ascii":
			case "latin1":
			case "binary": return n;
			case "utf8":
			case "utf-8": return q(e).length;
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return n * 2;
			case "hex": return n >>> 1;
			case "base64": return J(e).length;
			default:
				if (i) return r ? -1 : q(e).length;
				t = ("" + t).toLowerCase(), i = !0;
		}
	}
	s.byteLength = y;
	function b(e, t, n) {
		let r = !1;
		if ((t === void 0 || t < 0) && (t = 0), t > this.length || ((n === void 0 || n > this.length) && (n = this.length), n <= 0) || (n >>>= 0, t >>>= 0, n <= t)) return "";
		for (e ||= "utf8";;) switch (e) {
			case "hex": return M(this, t, n);
			case "utf8":
			case "utf-8": return k(this, t, n);
			case "ascii": return j(this, t, n);
			case "latin1":
			case "binary": return ne(this, t, n);
			case "base64": return O(this, t, n);
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return N(this, t, n);
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
		return e === 0 ? "" : arguments.length === 0 ? k(this, 0, e) : b.apply(this, arguments);
	}, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(e) {
		if (!s.isBuffer(e)) throw TypeError("Argument must be a Buffer");
		return this === e ? !0 : s.compare(this, e) === 0;
	}, s.prototype.inspect = function() {
		let t = "", n = e.INSPECT_MAX_BYTES;
		return t = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(), this.length > n && (t += " ... "), "<Buffer " + t + ">";
	}, r && (s.prototype[r] = s.prototype.inspect), s.prototype.compare = function(e, t, n, r, i) {
		if (X(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), !s.isBuffer(e)) throw TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof e);
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
		return a < o ? -1 : +(o < a);
	};
	function S(e, t, n, r, i) {
		if (e.length === 0) return -1;
		if (typeof n == "string" ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, Z(n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
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
			if (Z(r)) return o;
			e[n + o] = r;
		}
		return o;
	}
	function T(e, t, n, r) {
		return Y(q(t, e.length - n), e, n, r);
	}
	function E(e, t, n, r) {
		return Y(oe(t), e, n, r);
	}
	function D(e, t, n, r) {
		return Y(J(t), e, n, r);
	}
	function ee(e, t, n, r) {
		return Y(se(t, e.length - n), e, n, r);
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
			case "binary": return E(this, e, t, n);
			case "base64": return D(this, e, t, n);
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return ee(this, e, t, n);
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
	function O(e, n, r) {
		return n === 0 && r === e.length ? t.fromByteArray(e) : t.fromByteArray(e.slice(n, r));
	}
	function k(e, t, n) {
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
		return te(r);
	}
	var A = 4096;
	function te(e) {
		let t = e.length;
		if (t <= A) return String.fromCharCode.apply(String, e);
		let n = "", r = 0;
		for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += A));
		return n;
	}
	function j(e, t, n) {
		let r = "";
		n = Math.min(e.length, n);
		for (let i = t; i < n; ++i) r += String.fromCharCode(e[i] & 127);
		return r;
	}
	function ne(e, t, n) {
		let r = "";
		n = Math.min(e.length, n);
		for (let i = t; i < n; ++i) r += String.fromCharCode(e[i]);
		return r;
	}
	function M(e, t, n) {
		let r = e.length;
		(!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
		let i = "";
		for (let r = t; r < n; ++r) i += ce[e[r]];
		return i;
	}
	function N(e, t, n) {
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
	function P(e, t, n) {
		if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
		if (e + t > n) throw RangeError("Trying to access beyond buffer length");
	}
	s.prototype.readUintLE = s.prototype.readUIntLE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = this[e], i = 1, a = 0;
		for (; ++a < t && (i *= 256);) r += this[e + a] * i;
		return r;
	}, s.prototype.readUintBE = s.prototype.readUIntBE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = this[e + --t], i = 1;
		for (; t > 0 && (i *= 256);) r += this[e + --t] * i;
		return r;
	}, s.prototype.readUint8 = s.prototype.readUInt8 = function(e, t) {
		return e >>>= 0, t || P(e, 1, this.length), this[e];
	}, s.prototype.readUint16LE = s.prototype.readUInt16LE = function(e, t) {
		return e >>>= 0, t || P(e, 2, this.length), this[e] | this[e + 1] << 8;
	}, s.prototype.readUint16BE = s.prototype.readUInt16BE = function(e, t) {
		return e >>>= 0, t || P(e, 2, this.length), this[e] << 8 | this[e + 1];
	}, s.prototype.readUint32LE = s.prototype.readUInt32LE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
	}, s.prototype.readUint32BE = s.prototype.readUInt32BE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
	}, s.prototype.readBigUInt64LE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24, i = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + n * 2 ** 24;
		return BigInt(r) + (BigInt(i) << BigInt(32));
	}), s.prototype.readBigUInt64BE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e], i = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n;
		return (BigInt(r) << BigInt(32)) + BigInt(i);
	}), s.prototype.readIntLE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = this[e], i = 1, a = 0;
		for (; ++a < t && (i *= 256);) r += this[e + a] * i;
		return i *= 128, r >= i && (r -= 2 ** (8 * t)), r;
	}, s.prototype.readIntBE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = t, i = 1, a = this[e + --r];
		for (; r > 0 && (i *= 256);) a += this[e + --r] * i;
		return i *= 128, a >= i && (a -= 2 ** (8 * t)), a;
	}, s.prototype.readInt8 = function(e, t) {
		return e >>>= 0, t || P(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e];
	}, s.prototype.readInt16LE = function(e, t) {
		e >>>= 0, t || P(e, 2, this.length);
		let n = this[e] | this[e + 1] << 8;
		return n & 32768 ? n | 4294901760 : n;
	}, s.prototype.readInt16BE = function(e, t) {
		e >>>= 0, t || P(e, 2, this.length);
		let n = this[e + 1] | this[e] << 8;
		return n & 32768 ? n | 4294901760 : n;
	}, s.prototype.readInt32LE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
	}, s.prototype.readInt32BE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
	}, s.prototype.readBigInt64LE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (n << 24);
		return (BigInt(r) << BigInt(32)) + BigInt(t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24);
	}), s.prototype.readBigInt64BE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
		return (BigInt(r) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n);
	}), s.prototype.readFloatLE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), n.read(this, e, !0, 23, 4);
	}, s.prototype.readFloatBE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), n.read(this, e, !1, 23, 4);
	}, s.prototype.readDoubleLE = function(e, t) {
		return e >>>= 0, t || P(e, 8, this.length), n.read(this, e, !0, 52, 8);
	}, s.prototype.readDoubleBE = function(e, t) {
		return e >>>= 0, t || P(e, 8, this.length), n.read(this, e, !1, 52, 8);
	};
	function F(e, t, n, r, i, a) {
		if (!s.isBuffer(e)) throw TypeError("\"buffer\" argument must be a Buffer instance");
		if (t > i || t < a) throw RangeError("\"value\" argument is out of bounds");
		if (n + r > e.length) throw RangeError("Index out of range");
	}
	s.prototype.writeUintLE = s.prototype.writeUIntLE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, n >>>= 0, !r) {
			let r = 2 ** (8 * n) - 1;
			F(this, e, t, n, r, 0);
		}
		let i = 1, a = 0;
		for (this[t] = e & 255; ++a < n && (i *= 256);) this[t + a] = e / i & 255;
		return t + n;
	}, s.prototype.writeUintBE = s.prototype.writeUIntBE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, n >>>= 0, !r) {
			let r = 2 ** (8 * n) - 1;
			F(this, e, t, n, r, 0);
		}
		let i = n - 1, a = 1;
		for (this[t + i] = e & 255; --i >= 0 && (a *= 256);) this[t + i] = e / a & 255;
		return t + n;
	}, s.prototype.writeUint8 = s.prototype.writeUInt8 = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 1, 255, 0), this[t] = e & 255, t + 1;
	}, s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 65535, 0), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
	}, s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
	}, s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = e & 255, t + 4;
	}, s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
	};
	function I(e, t, n, r, i) {
		W(t, r, i, e, n, 7);
		let a = Number(t & BigInt(4294967295));
		e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a;
		let o = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, n;
	}
	function L(e, t, n, r, i) {
		W(t, r, i, e, n, 7);
		let a = Number(t & BigInt(4294967295));
		e[n + 7] = a, a >>= 8, e[n + 6] = a, a >>= 8, e[n + 5] = a, a >>= 8, e[n + 4] = a;
		let o = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[n + 3] = o, o >>= 8, e[n + 2] = o, o >>= 8, e[n + 1] = o, o >>= 8, e[n] = o, n + 8;
	}
	s.prototype.writeBigUInt64LE = Q(function(e, t = 0) {
		return I(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
	}), s.prototype.writeBigUInt64BE = Q(function(e, t = 0) {
		return L(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
	}), s.prototype.writeIntLE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, !r) {
			let r = 2 ** (8 * n - 1);
			F(this, e, t, n, r - 1, -r);
		}
		let i = 0, a = 1, o = 0;
		for (this[t] = e & 255; ++i < n && (a *= 256);) e < 0 && o === 0 && this[t + i - 1] !== 0 && (o = 1), this[t + i] = (e / a >> 0) - o & 255;
		return t + n;
	}, s.prototype.writeIntBE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, !r) {
			let r = 2 ** (8 * n - 1);
			F(this, e, t, n, r - 1, -r);
		}
		let i = n - 1, a = 1, o = 0;
		for (this[t + i] = e & 255; --i >= 0 && (a *= 256);) e < 0 && o === 0 && this[t + i + 1] !== 0 && (o = 1), this[t + i] = (e / a >> 0) - o & 255;
		return t + n;
	}, s.prototype.writeInt8 = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = e & 255, t + 1;
	}, s.prototype.writeInt16LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 32767, -32768), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
	}, s.prototype.writeInt16BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
	}, s.prototype.writeInt32LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 2147483647, -2147483648), this[t] = e & 255, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4;
	}, s.prototype.writeInt32BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
	}, s.prototype.writeBigInt64LE = Q(function(e, t = 0) {
		return I(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
	}), s.prototype.writeBigInt64BE = Q(function(e, t = 0) {
		return L(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
	});
	function R(e, t, n, r, i, a) {
		if (n + r > e.length || n < 0) throw RangeError("Index out of range");
	}
	function z(e, t, r, i, a) {
		return t = +t, r >>>= 0, a || R(e, t, r, 4, 34028234663852886e22, -34028234663852886e22), n.write(e, t, r, i, 23, 4), r + 4;
	}
	s.prototype.writeFloatLE = function(e, t, n) {
		return z(this, e, t, !0, n);
	}, s.prototype.writeFloatBE = function(e, t, n) {
		return z(this, e, t, !1, n);
	};
	function B(e, t, r, i, a) {
		return t = +t, r >>>= 0, a || R(e, t, r, 8, 17976931348623157e292, -17976931348623157e292), n.write(e, t, r, i, 52, 8), r + 8;
	}
	s.prototype.writeDoubleLE = function(e, t, n) {
		return B(this, e, t, !0, n);
	}, s.prototype.writeDoubleBE = function(e, t, n) {
		return B(this, e, t, !1, n);
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
	var V = {};
	function H(e, t, n) {
		V[e] = class extends n {
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
	H("ERR_BUFFER_OUT_OF_BOUNDS", function(e) {
		return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
	}, RangeError), H("ERR_INVALID_ARG_TYPE", function(e, t) {
		return `The "${e}" argument must be of type number. Received type ${typeof t}`;
	}, TypeError), H("ERR_OUT_OF_RANGE", function(e, t, n) {
		let r = `The value of "${e}" is out of range.`, i = n;
		return Number.isInteger(n) && Math.abs(n) > 2 ** 32 ? i = U(String(n)) : typeof n == "bigint" && (i = String(n), (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (i = U(i)), i += "n"), r += ` It must be ${t}. Received ${i}`, r;
	}, RangeError);
	function U(e) {
		let t = "", n = e.length, r = +(e[0] === "-");
		for (; n >= r + 4; n -= 3) t = `_${e.slice(n - 3, n)}${t}`;
		return `${e.slice(0, n)}${t}`;
	}
	function re(e, t, n) {
		G(t, "offset"), (e[t] === void 0 || e[t + n] === void 0) && K(t, e.length - (n + 1));
	}
	function W(e, t, n, r, i, a) {
		if (e > n || e < t) {
			let r = typeof t == "bigint" ? "n" : "", i;
			throw i = a > 3 ? t === 0 || t === BigInt(0) ? `>= 0${r} and < 2${r} ** ${(a + 1) * 8}${r}` : `>= -(2${r} ** ${(a + 1) * 8 - 1}${r}) and < 2 ** ${(a + 1) * 8 - 1}${r}` : `>= ${t}${r} and <= ${n}${r}`, new V.ERR_OUT_OF_RANGE("value", i, e);
		}
		re(r, i, a);
	}
	function G(e, t) {
		if (typeof e != "number") throw new V.ERR_INVALID_ARG_TYPE(t, "number", e);
	}
	function K(e, t, n) {
		throw Math.floor(e) === e ? t < 0 ? new V.ERR_BUFFER_OUT_OF_BOUNDS() : new V.ERR_OUT_OF_RANGE(n || "offset", `>= ${+!!n} and <= ${t}`, e) : (G(e, n), new V.ERR_OUT_OF_RANGE(n || "offset", "an integer", e));
	}
	var ie = /[^+/0-9A-Za-z-_]/g;
	function ae(e) {
		if (e = e.split("=")[0], e = e.trim().replace(ie, ""), e.length < 2) return "";
		for (; e.length % 4 != 0;) e += "=";
		return e;
	}
	function q(e, t) {
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
	function oe(e) {
		let t = [];
		for (let n = 0; n < e.length; ++n) t.push(e.charCodeAt(n) & 255);
		return t;
	}
	function se(e, t) {
		let n, r, i, a = [];
		for (let o = 0; o < e.length && !((t -= 2) < 0); ++o) n = e.charCodeAt(o), r = n >> 8, i = n % 256, a.push(i), a.push(r);
		return a;
	}
	function J(e) {
		return t.toByteArray(ae(e));
	}
	function Y(e, t, n, r) {
		let i;
		for (i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
		return i;
	}
	function X(e, t) {
		return e instanceof t || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === t.name;
	}
	function Z(e) {
		return e !== e;
	}
	var ce = (function() {
		let e = "0123456789abcdef", t = Array(256);
		for (let n = 0; n < 16; ++n) {
			let r = n * 16;
			for (let i = 0; i < 16; ++i) t[r + i] = e[n] + e[i];
		}
		return t;
	})();
	function Q(e) {
		return typeof BigInt > "u" ? le : e;
	}
	function le() {
		throw Error("BigInt not supported");
	}
})))();
var bo = (e) => {
	let t = "", n = Object.keys(e).map((t) => {
		let n = e[t];
		return _o(n) ? "" : `${encodeURIComponent(t)}=${encodeURIComponent(n)}`;
	}).filter((e) => e !== "").join("&");
	if (n) {
		let e = t.indexOf("#");
		e !== -1 && (t = t.slice(0, e)), t += (t.indexOf("?") === -1 ? "?" : "&") + n;
	}
	return t;
};
((e, { baseHeaders: t, handleErr: n, handleFinally: r, debug: i } = {}) => {
	let a = {
		"Content-Type": "application/json",
		...t
	}, o = (e) => {
		console.log(e);
	}, s = ({ endpoint: t, inputHeaders: s, fetchParams: c, args: l }) => {
		_o(t) && (t = "");
		let u = e + t, d = {
			...a,
			...s
		};
		Object.keys(d).forEach((e) => {
			_o(d[e]) && delete d[e];
		});
		let f = {
			method: "GET",
			headers: { ...d },
			...c
		};
		return _o(l) || (f.method === "POST" && (f.body = JSON.stringify(l)), f.method === "GET" && (u += bo(l))), fetch(u, f).catch((e) => n(e)).finally(() => {
			i && o({
				endpoint: t,
				inputHeaders: s,
				fetchParams: c
			}), !_o(r) && r({
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
})("http://localhost:8080/", {
	handleErr: (e) => console.log(e),
	debug: !0
}), j({
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
}), t(null);
var xo = (e) => e == null, So = /* @__PURE__ */ Z(((e) => {
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
})), Co = /* @__PURE__ */ Z(((e) => {
	e.read = function(e, t, n, r, i) {
		var a, o, s = i * 8 - r - 1, c = (1 << s) - 1, l = c >> 1, u = -7, d = n ? i - 1 : 0, f = n ? -1 : 1, p = e[t + d];
		for (d += f, a = p & (1 << -u) - 1, p >>= -u, u += s; u > 0; a = a * 256 + e[t + d], d += f, u -= 8);
		for (o = a & (1 << -u) - 1, a >>= -u, u += r; u > 0; o = o * 256 + e[t + d], d += f, u -= 8);
		if (a === 0) a = 1 - l;
		else if (a === c) return o ? NaN : (p ? -1 : 1) * Infinity;
		else o += 2 ** r, a -= l;
		return (p ? -1 : 1) * o * 2 ** (a - r);
	}, e.write = function(e, t, n, r, i, a) {
		var o, s, c, l = a * 8 - i - 1, u = (1 << l) - 1, d = u >> 1, f = i === 23 ? 2 ** -24 - 2 ** -77 : 0, p = r ? 0 : a - 1, m = r ? 1 : -1, h = +(t < 0 || t === 0 && 1 / t < 0);
		for (t = Math.abs(t), isNaN(t) || t === Infinity ? (s = +!!isNaN(t), o = u) : (o = Math.floor(Math.log(t) / Math.LN2), t * (c = 2 ** -o) < 1 && (o--, c *= 2), o + d >= 1 ? t += f / c : t += f * 2 ** (1 - d), t * c >= 2 && (o++, c /= 2), o + d >= u ? (s = 0, o = u) : o + d >= 1 ? (s = (t * c - 1) * 2 ** i, o += d) : (s = t * 2 ** (d - 1) * 2 ** i, o = 0)); i >= 8; e[n + p] = s & 255, p += m, s /= 256, i -= 8);
		for (o = o << i | s, l += i; l > 0; e[n + p] = o & 255, p += m, o /= 256, l -= 8);
		e[n + p - m] |= h * 128;
	};
}));
(/* @__PURE__ */ Z(((e) => {
	var t = So(), n = Co(), r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
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
		if (X(e, ArrayBuffer) || e && X(e.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (X(e, SharedArrayBuffer) || e && X(e.buffer, SharedArrayBuffer))) return h(e, t, n);
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
		if (X(e, Uint8Array)) {
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
		if (e.length !== void 0) return typeof e.length != "number" || Z(e.length) ? o(0) : p(e);
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
		if (X(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), X(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), !s.isBuffer(e) || !s.isBuffer(t)) throw TypeError("The \"buf1\", \"buf2\" arguments must be one of type Buffer or Uint8Array");
		if (e === t) return 0;
		let n = e.length, r = t.length;
		for (let i = 0, a = Math.min(n, r); i < a; ++i) if (e[i] !== t[i]) {
			n = e[i], r = t[i];
			break;
		}
		return n < r ? -1 : +(r < n);
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
			if (X(t, Uint8Array)) i + t.length > r.length ? (s.isBuffer(t) || (t = s.from(t)), t.copy(r, i)) : Uint8Array.prototype.set.call(r, t, i);
			else if (s.isBuffer(t)) t.copy(r, i);
			else throw TypeError("\"list\" argument must be an Array of Buffers");
			i += t.length;
		}
		return r;
	};
	function y(e, t) {
		if (s.isBuffer(e)) return e.length;
		if (ArrayBuffer.isView(e) || X(e, ArrayBuffer)) return e.byteLength;
		if (typeof e != "string") throw TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + typeof e);
		let n = e.length, r = arguments.length > 2 && arguments[2] === !0;
		if (!r && n === 0) return 0;
		let i = !1;
		for (;;) switch (t) {
			case "ascii":
			case "latin1":
			case "binary": return n;
			case "utf8":
			case "utf-8": return q(e).length;
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return n * 2;
			case "hex": return n >>> 1;
			case "base64": return J(e).length;
			default:
				if (i) return r ? -1 : q(e).length;
				t = ("" + t).toLowerCase(), i = !0;
		}
	}
	s.byteLength = y;
	function b(e, t, n) {
		let r = !1;
		if ((t === void 0 || t < 0) && (t = 0), t > this.length || ((n === void 0 || n > this.length) && (n = this.length), n <= 0) || (n >>>= 0, t >>>= 0, n <= t)) return "";
		for (e ||= "utf8";;) switch (e) {
			case "hex": return M(this, t, n);
			case "utf8":
			case "utf-8": return k(this, t, n);
			case "ascii": return j(this, t, n);
			case "latin1":
			case "binary": return ne(this, t, n);
			case "base64": return O(this, t, n);
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return N(this, t, n);
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
		return e === 0 ? "" : arguments.length === 0 ? k(this, 0, e) : b.apply(this, arguments);
	}, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(e) {
		if (!s.isBuffer(e)) throw TypeError("Argument must be a Buffer");
		return this === e ? !0 : s.compare(this, e) === 0;
	}, s.prototype.inspect = function() {
		let t = "", n = e.INSPECT_MAX_BYTES;
		return t = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(), this.length > n && (t += " ... "), "<Buffer " + t + ">";
	}, r && (s.prototype[r] = s.prototype.inspect), s.prototype.compare = function(e, t, n, r, i) {
		if (X(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), !s.isBuffer(e)) throw TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof e);
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
		return a < o ? -1 : +(o < a);
	};
	function S(e, t, n, r, i) {
		if (e.length === 0) return -1;
		if (typeof n == "string" ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, Z(n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
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
			if (Z(r)) return o;
			e[n + o] = r;
		}
		return o;
	}
	function T(e, t, n, r) {
		return Y(q(t, e.length - n), e, n, r);
	}
	function E(e, t, n, r) {
		return Y(oe(t), e, n, r);
	}
	function D(e, t, n, r) {
		return Y(J(t), e, n, r);
	}
	function ee(e, t, n, r) {
		return Y(se(t, e.length - n), e, n, r);
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
			case "binary": return E(this, e, t, n);
			case "base64": return D(this, e, t, n);
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return ee(this, e, t, n);
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
	function O(e, n, r) {
		return n === 0 && r === e.length ? t.fromByteArray(e) : t.fromByteArray(e.slice(n, r));
	}
	function k(e, t, n) {
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
		return te(r);
	}
	var A = 4096;
	function te(e) {
		let t = e.length;
		if (t <= A) return String.fromCharCode.apply(String, e);
		let n = "", r = 0;
		for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += A));
		return n;
	}
	function j(e, t, n) {
		let r = "";
		n = Math.min(e.length, n);
		for (let i = t; i < n; ++i) r += String.fromCharCode(e[i] & 127);
		return r;
	}
	function ne(e, t, n) {
		let r = "";
		n = Math.min(e.length, n);
		for (let i = t; i < n; ++i) r += String.fromCharCode(e[i]);
		return r;
	}
	function M(e, t, n) {
		let r = e.length;
		(!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
		let i = "";
		for (let r = t; r < n; ++r) i += ce[e[r]];
		return i;
	}
	function N(e, t, n) {
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
	function P(e, t, n) {
		if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
		if (e + t > n) throw RangeError("Trying to access beyond buffer length");
	}
	s.prototype.readUintLE = s.prototype.readUIntLE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = this[e], i = 1, a = 0;
		for (; ++a < t && (i *= 256);) r += this[e + a] * i;
		return r;
	}, s.prototype.readUintBE = s.prototype.readUIntBE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = this[e + --t], i = 1;
		for (; t > 0 && (i *= 256);) r += this[e + --t] * i;
		return r;
	}, s.prototype.readUint8 = s.prototype.readUInt8 = function(e, t) {
		return e >>>= 0, t || P(e, 1, this.length), this[e];
	}, s.prototype.readUint16LE = s.prototype.readUInt16LE = function(e, t) {
		return e >>>= 0, t || P(e, 2, this.length), this[e] | this[e + 1] << 8;
	}, s.prototype.readUint16BE = s.prototype.readUInt16BE = function(e, t) {
		return e >>>= 0, t || P(e, 2, this.length), this[e] << 8 | this[e + 1];
	}, s.prototype.readUint32LE = s.prototype.readUInt32LE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
	}, s.prototype.readUint32BE = s.prototype.readUInt32BE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
	}, s.prototype.readBigUInt64LE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24, i = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + n * 2 ** 24;
		return BigInt(r) + (BigInt(i) << BigInt(32));
	}), s.prototype.readBigUInt64BE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e], i = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n;
		return (BigInt(r) << BigInt(32)) + BigInt(i);
	}), s.prototype.readIntLE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = this[e], i = 1, a = 0;
		for (; ++a < t && (i *= 256);) r += this[e + a] * i;
		return i *= 128, r >= i && (r -= 2 ** (8 * t)), r;
	}, s.prototype.readIntBE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = t, i = 1, a = this[e + --r];
		for (; r > 0 && (i *= 256);) a += this[e + --r] * i;
		return i *= 128, a >= i && (a -= 2 ** (8 * t)), a;
	}, s.prototype.readInt8 = function(e, t) {
		return e >>>= 0, t || P(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e];
	}, s.prototype.readInt16LE = function(e, t) {
		e >>>= 0, t || P(e, 2, this.length);
		let n = this[e] | this[e + 1] << 8;
		return n & 32768 ? n | 4294901760 : n;
	}, s.prototype.readInt16BE = function(e, t) {
		e >>>= 0, t || P(e, 2, this.length);
		let n = this[e + 1] | this[e] << 8;
		return n & 32768 ? n | 4294901760 : n;
	}, s.prototype.readInt32LE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
	}, s.prototype.readInt32BE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
	}, s.prototype.readBigInt64LE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (n << 24);
		return (BigInt(r) << BigInt(32)) + BigInt(t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24);
	}), s.prototype.readBigInt64BE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
		return (BigInt(r) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n);
	}), s.prototype.readFloatLE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), n.read(this, e, !0, 23, 4);
	}, s.prototype.readFloatBE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), n.read(this, e, !1, 23, 4);
	}, s.prototype.readDoubleLE = function(e, t) {
		return e >>>= 0, t || P(e, 8, this.length), n.read(this, e, !0, 52, 8);
	}, s.prototype.readDoubleBE = function(e, t) {
		return e >>>= 0, t || P(e, 8, this.length), n.read(this, e, !1, 52, 8);
	};
	function F(e, t, n, r, i, a) {
		if (!s.isBuffer(e)) throw TypeError("\"buffer\" argument must be a Buffer instance");
		if (t > i || t < a) throw RangeError("\"value\" argument is out of bounds");
		if (n + r > e.length) throw RangeError("Index out of range");
	}
	s.prototype.writeUintLE = s.prototype.writeUIntLE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, n >>>= 0, !r) {
			let r = 2 ** (8 * n) - 1;
			F(this, e, t, n, r, 0);
		}
		let i = 1, a = 0;
		for (this[t] = e & 255; ++a < n && (i *= 256);) this[t + a] = e / i & 255;
		return t + n;
	}, s.prototype.writeUintBE = s.prototype.writeUIntBE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, n >>>= 0, !r) {
			let r = 2 ** (8 * n) - 1;
			F(this, e, t, n, r, 0);
		}
		let i = n - 1, a = 1;
		for (this[t + i] = e & 255; --i >= 0 && (a *= 256);) this[t + i] = e / a & 255;
		return t + n;
	}, s.prototype.writeUint8 = s.prototype.writeUInt8 = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 1, 255, 0), this[t] = e & 255, t + 1;
	}, s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 65535, 0), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
	}, s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
	}, s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = e & 255, t + 4;
	}, s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
	};
	function I(e, t, n, r, i) {
		W(t, r, i, e, n, 7);
		let a = Number(t & BigInt(4294967295));
		e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a;
		let o = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, n;
	}
	function L(e, t, n, r, i) {
		W(t, r, i, e, n, 7);
		let a = Number(t & BigInt(4294967295));
		e[n + 7] = a, a >>= 8, e[n + 6] = a, a >>= 8, e[n + 5] = a, a >>= 8, e[n + 4] = a;
		let o = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[n + 3] = o, o >>= 8, e[n + 2] = o, o >>= 8, e[n + 1] = o, o >>= 8, e[n] = o, n + 8;
	}
	s.prototype.writeBigUInt64LE = Q(function(e, t = 0) {
		return I(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
	}), s.prototype.writeBigUInt64BE = Q(function(e, t = 0) {
		return L(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
	}), s.prototype.writeIntLE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, !r) {
			let r = 2 ** (8 * n - 1);
			F(this, e, t, n, r - 1, -r);
		}
		let i = 0, a = 1, o = 0;
		for (this[t] = e & 255; ++i < n && (a *= 256);) e < 0 && o === 0 && this[t + i - 1] !== 0 && (o = 1), this[t + i] = (e / a >> 0) - o & 255;
		return t + n;
	}, s.prototype.writeIntBE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, !r) {
			let r = 2 ** (8 * n - 1);
			F(this, e, t, n, r - 1, -r);
		}
		let i = n - 1, a = 1, o = 0;
		for (this[t + i] = e & 255; --i >= 0 && (a *= 256);) e < 0 && o === 0 && this[t + i + 1] !== 0 && (o = 1), this[t + i] = (e / a >> 0) - o & 255;
		return t + n;
	}, s.prototype.writeInt8 = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = e & 255, t + 1;
	}, s.prototype.writeInt16LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 32767, -32768), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
	}, s.prototype.writeInt16BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
	}, s.prototype.writeInt32LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 2147483647, -2147483648), this[t] = e & 255, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4;
	}, s.prototype.writeInt32BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
	}, s.prototype.writeBigInt64LE = Q(function(e, t = 0) {
		return I(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
	}), s.prototype.writeBigInt64BE = Q(function(e, t = 0) {
		return L(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
	});
	function R(e, t, n, r, i, a) {
		if (n + r > e.length || n < 0) throw RangeError("Index out of range");
	}
	function z(e, t, r, i, a) {
		return t = +t, r >>>= 0, a || R(e, t, r, 4, 34028234663852886e22, -34028234663852886e22), n.write(e, t, r, i, 23, 4), r + 4;
	}
	s.prototype.writeFloatLE = function(e, t, n) {
		return z(this, e, t, !0, n);
	}, s.prototype.writeFloatBE = function(e, t, n) {
		return z(this, e, t, !1, n);
	};
	function B(e, t, r, i, a) {
		return t = +t, r >>>= 0, a || R(e, t, r, 8, 17976931348623157e292, -17976931348623157e292), n.write(e, t, r, i, 52, 8), r + 8;
	}
	s.prototype.writeDoubleLE = function(e, t, n) {
		return B(this, e, t, !0, n);
	}, s.prototype.writeDoubleBE = function(e, t, n) {
		return B(this, e, t, !1, n);
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
	var V = {};
	function H(e, t, n) {
		V[e] = class extends n {
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
	H("ERR_BUFFER_OUT_OF_BOUNDS", function(e) {
		return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
	}, RangeError), H("ERR_INVALID_ARG_TYPE", function(e, t) {
		return `The "${e}" argument must be of type number. Received type ${typeof t}`;
	}, TypeError), H("ERR_OUT_OF_RANGE", function(e, t, n) {
		let r = `The value of "${e}" is out of range.`, i = n;
		return Number.isInteger(n) && Math.abs(n) > 2 ** 32 ? i = U(String(n)) : typeof n == "bigint" && (i = String(n), (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (i = U(i)), i += "n"), r += ` It must be ${t}. Received ${i}`, r;
	}, RangeError);
	function U(e) {
		let t = "", n = e.length, r = +(e[0] === "-");
		for (; n >= r + 4; n -= 3) t = `_${e.slice(n - 3, n)}${t}`;
		return `${e.slice(0, n)}${t}`;
	}
	function re(e, t, n) {
		G(t, "offset"), (e[t] === void 0 || e[t + n] === void 0) && K(t, e.length - (n + 1));
	}
	function W(e, t, n, r, i, a) {
		if (e > n || e < t) {
			let r = typeof t == "bigint" ? "n" : "", i;
			throw i = a > 3 ? t === 0 || t === BigInt(0) ? `>= 0${r} and < 2${r} ** ${(a + 1) * 8}${r}` : `>= -(2${r} ** ${(a + 1) * 8 - 1}${r}) and < 2 ** ${(a + 1) * 8 - 1}${r}` : `>= ${t}${r} and <= ${n}${r}`, new V.ERR_OUT_OF_RANGE("value", i, e);
		}
		re(r, i, a);
	}
	function G(e, t) {
		if (typeof e != "number") throw new V.ERR_INVALID_ARG_TYPE(t, "number", e);
	}
	function K(e, t, n) {
		throw Math.floor(e) === e ? t < 0 ? new V.ERR_BUFFER_OUT_OF_BOUNDS() : new V.ERR_OUT_OF_RANGE(n || "offset", `>= ${+!!n} and <= ${t}`, e) : (G(e, n), new V.ERR_OUT_OF_RANGE(n || "offset", "an integer", e));
	}
	var ie = /[^+/0-9A-Za-z-_]/g;
	function ae(e) {
		if (e = e.split("=")[0], e = e.trim().replace(ie, ""), e.length < 2) return "";
		for (; e.length % 4 != 0;) e += "=";
		return e;
	}
	function q(e, t) {
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
	function oe(e) {
		let t = [];
		for (let n = 0; n < e.length; ++n) t.push(e.charCodeAt(n) & 255);
		return t;
	}
	function se(e, t) {
		let n, r, i, a = [];
		for (let o = 0; o < e.length && !((t -= 2) < 0); ++o) n = e.charCodeAt(o), r = n >> 8, i = n % 256, a.push(i), a.push(r);
		return a;
	}
	function J(e) {
		return t.toByteArray(ae(e));
	}
	function Y(e, t, n, r) {
		let i;
		for (i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
		return i;
	}
	function X(e, t) {
		return e instanceof t || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === t.name;
	}
	function Z(e) {
		return e !== e;
	}
	var ce = (function() {
		let e = "0123456789abcdef", t = Array(256);
		for (let n = 0; n < 16; ++n) {
			let r = n * 16;
			for (let i = 0; i < 16; ++i) t[r + i] = e[n] + e[i];
		}
		return t;
	})();
	function Q(e) {
		return typeof BigInt > "u" ? le : e;
	}
	function le() {
		throw Error("BigInt not supported");
	}
})))();
var wo = (e) => {
	let t = "", n = Object.keys(e).map((t) => {
		let n = e[t];
		return xo(n) ? "" : `${encodeURIComponent(t)}=${encodeURIComponent(n)}`;
	}).filter((e) => e !== "").join("&");
	if (n) {
		let e = t.indexOf("#");
		e !== -1 && (t = t.slice(0, e)), t += (t.indexOf("?") === -1 ? "?" : "&") + n;
	}
	return t;
};
((e, { baseHeaders: t, handleErr: n, handleFinally: r, debug: i } = {}) => {
	let a = {
		"Content-Type": "application/json",
		...t
	}, o = (e) => {
		console.log(e);
	}, s = ({ endpoint: t, inputHeaders: s, fetchParams: c, args: l }) => {
		xo(t) && (t = "");
		let u = e + t, d = {
			...a,
			...s
		};
		Object.keys(d).forEach((e) => {
			xo(d[e]) && delete d[e];
		});
		let f = {
			method: "GET",
			headers: { ...d },
			...c
		};
		return xo(l) || (f.method === "POST" && (f.body = JSON.stringify(l)), f.method === "GET" && (u += wo(l))), fetch(u, f).catch((e) => n(e)).finally(() => {
			i && o({
				endpoint: t,
				inputHeaders: s,
				fetchParams: c
			}), !xo(r) && r({
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
})("http://localhost:8080/", {
	handleErr: (e) => console.log(e),
	debug: !0
}), j({
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
}), t(null);
var To = (e) => e == null, Eo = /* @__PURE__ */ X(((e) => {
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
})), Do = /* @__PURE__ */ X(((e) => {
	e.read = function(e, t, n, r, i) {
		var a, o, s = i * 8 - r - 1, c = (1 << s) - 1, l = c >> 1, u = -7, d = n ? i - 1 : 0, f = n ? -1 : 1, p = e[t + d];
		for (d += f, a = p & (1 << -u) - 1, p >>= -u, u += s; u > 0; a = a * 256 + e[t + d], d += f, u -= 8);
		for (o = a & (1 << -u) - 1, a >>= -u, u += r; u > 0; o = o * 256 + e[t + d], d += f, u -= 8);
		if (a === 0) a = 1 - l;
		else if (a === c) return o ? NaN : (p ? -1 : 1) * Infinity;
		else o += 2 ** r, a -= l;
		return (p ? -1 : 1) * o * 2 ** (a - r);
	}, e.write = function(e, t, n, r, i, a) {
		var o, s, c, l = a * 8 - i - 1, u = (1 << l) - 1, d = u >> 1, f = i === 23 ? 2 ** -24 - 2 ** -77 : 0, p = r ? 0 : a - 1, m = r ? 1 : -1, h = +(t < 0 || t === 0 && 1 / t < 0);
		for (t = Math.abs(t), isNaN(t) || t === Infinity ? (s = +!!isNaN(t), o = u) : (o = Math.floor(Math.log(t) / Math.LN2), t * (c = 2 ** -o) < 1 && (o--, c *= 2), o + d >= 1 ? t += f / c : t += f * 2 ** (1 - d), t * c >= 2 && (o++, c /= 2), o + d >= u ? (s = 0, o = u) : o + d >= 1 ? (s = (t * c - 1) * 2 ** i, o += d) : (s = t * 2 ** (d - 1) * 2 ** i, o = 0)); i >= 8; e[n + p] = s & 255, p += m, s /= 256, i -= 8);
		for (o = o << i | s, l += i; l > 0; e[n + p] = o & 255, p += m, o /= 256, l -= 8);
		e[n + p - m] |= h * 128;
	};
}));
(/* @__PURE__ */ X(((e) => {
	var t = Eo(), n = Do(), r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
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
		if (X(e, ArrayBuffer) || e && X(e.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (X(e, SharedArrayBuffer) || e && X(e.buffer, SharedArrayBuffer))) return h(e, t, n);
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
		if (X(e, Uint8Array)) {
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
		if (e.length !== void 0) return typeof e.length != "number" || Z(e.length) ? o(0) : p(e);
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
		if (X(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), X(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), !s.isBuffer(e) || !s.isBuffer(t)) throw TypeError("The \"buf1\", \"buf2\" arguments must be one of type Buffer or Uint8Array");
		if (e === t) return 0;
		let n = e.length, r = t.length;
		for (let i = 0, a = Math.min(n, r); i < a; ++i) if (e[i] !== t[i]) {
			n = e[i], r = t[i];
			break;
		}
		return n < r ? -1 : +(r < n);
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
			if (X(t, Uint8Array)) i + t.length > r.length ? (s.isBuffer(t) || (t = s.from(t)), t.copy(r, i)) : Uint8Array.prototype.set.call(r, t, i);
			else if (s.isBuffer(t)) t.copy(r, i);
			else throw TypeError("\"list\" argument must be an Array of Buffers");
			i += t.length;
		}
		return r;
	};
	function y(e, t) {
		if (s.isBuffer(e)) return e.length;
		if (ArrayBuffer.isView(e) || X(e, ArrayBuffer)) return e.byteLength;
		if (typeof e != "string") throw TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + typeof e);
		let n = e.length, r = arguments.length > 2 && arguments[2] === !0;
		if (!r && n === 0) return 0;
		let i = !1;
		for (;;) switch (t) {
			case "ascii":
			case "latin1":
			case "binary": return n;
			case "utf8":
			case "utf-8": return q(e).length;
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return n * 2;
			case "hex": return n >>> 1;
			case "base64": return J(e).length;
			default:
				if (i) return r ? -1 : q(e).length;
				t = ("" + t).toLowerCase(), i = !0;
		}
	}
	s.byteLength = y;
	function b(e, t, n) {
		let r = !1;
		if ((t === void 0 || t < 0) && (t = 0), t > this.length || ((n === void 0 || n > this.length) && (n = this.length), n <= 0) || (n >>>= 0, t >>>= 0, n <= t)) return "";
		for (e ||= "utf8";;) switch (e) {
			case "hex": return M(this, t, n);
			case "utf8":
			case "utf-8": return k(this, t, n);
			case "ascii": return j(this, t, n);
			case "latin1":
			case "binary": return ne(this, t, n);
			case "base64": return O(this, t, n);
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return N(this, t, n);
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
		return e === 0 ? "" : arguments.length === 0 ? k(this, 0, e) : b.apply(this, arguments);
	}, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(e) {
		if (!s.isBuffer(e)) throw TypeError("Argument must be a Buffer");
		return this === e ? !0 : s.compare(this, e) === 0;
	}, s.prototype.inspect = function() {
		let t = "", n = e.INSPECT_MAX_BYTES;
		return t = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(), this.length > n && (t += " ... "), "<Buffer " + t + ">";
	}, r && (s.prototype[r] = s.prototype.inspect), s.prototype.compare = function(e, t, n, r, i) {
		if (X(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), !s.isBuffer(e)) throw TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof e);
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
		return a < o ? -1 : +(o < a);
	};
	function S(e, t, n, r, i) {
		if (e.length === 0) return -1;
		if (typeof n == "string" ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, Z(n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
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
			if (Z(r)) return o;
			e[n + o] = r;
		}
		return o;
	}
	function T(e, t, n, r) {
		return Y(q(t, e.length - n), e, n, r);
	}
	function E(e, t, n, r) {
		return Y(oe(t), e, n, r);
	}
	function D(e, t, n, r) {
		return Y(J(t), e, n, r);
	}
	function ee(e, t, n, r) {
		return Y(se(t, e.length - n), e, n, r);
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
			case "binary": return E(this, e, t, n);
			case "base64": return D(this, e, t, n);
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return ee(this, e, t, n);
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
	function O(e, n, r) {
		return n === 0 && r === e.length ? t.fromByteArray(e) : t.fromByteArray(e.slice(n, r));
	}
	function k(e, t, n) {
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
		return te(r);
	}
	var A = 4096;
	function te(e) {
		let t = e.length;
		if (t <= A) return String.fromCharCode.apply(String, e);
		let n = "", r = 0;
		for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += A));
		return n;
	}
	function j(e, t, n) {
		let r = "";
		n = Math.min(e.length, n);
		for (let i = t; i < n; ++i) r += String.fromCharCode(e[i] & 127);
		return r;
	}
	function ne(e, t, n) {
		let r = "";
		n = Math.min(e.length, n);
		for (let i = t; i < n; ++i) r += String.fromCharCode(e[i]);
		return r;
	}
	function M(e, t, n) {
		let r = e.length;
		(!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
		let i = "";
		for (let r = t; r < n; ++r) i += ce[e[r]];
		return i;
	}
	function N(e, t, n) {
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
	function P(e, t, n) {
		if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
		if (e + t > n) throw RangeError("Trying to access beyond buffer length");
	}
	s.prototype.readUintLE = s.prototype.readUIntLE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = this[e], i = 1, a = 0;
		for (; ++a < t && (i *= 256);) r += this[e + a] * i;
		return r;
	}, s.prototype.readUintBE = s.prototype.readUIntBE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = this[e + --t], i = 1;
		for (; t > 0 && (i *= 256);) r += this[e + --t] * i;
		return r;
	}, s.prototype.readUint8 = s.prototype.readUInt8 = function(e, t) {
		return e >>>= 0, t || P(e, 1, this.length), this[e];
	}, s.prototype.readUint16LE = s.prototype.readUInt16LE = function(e, t) {
		return e >>>= 0, t || P(e, 2, this.length), this[e] | this[e + 1] << 8;
	}, s.prototype.readUint16BE = s.prototype.readUInt16BE = function(e, t) {
		return e >>>= 0, t || P(e, 2, this.length), this[e] << 8 | this[e + 1];
	}, s.prototype.readUint32LE = s.prototype.readUInt32LE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
	}, s.prototype.readUint32BE = s.prototype.readUInt32BE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
	}, s.prototype.readBigUInt64LE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24, i = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + n * 2 ** 24;
		return BigInt(r) + (BigInt(i) << BigInt(32));
	}), s.prototype.readBigUInt64BE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e], i = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n;
		return (BigInt(r) << BigInt(32)) + BigInt(i);
	}), s.prototype.readIntLE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = this[e], i = 1, a = 0;
		for (; ++a < t && (i *= 256);) r += this[e + a] * i;
		return i *= 128, r >= i && (r -= 2 ** (8 * t)), r;
	}, s.prototype.readIntBE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = t, i = 1, a = this[e + --r];
		for (; r > 0 && (i *= 256);) a += this[e + --r] * i;
		return i *= 128, a >= i && (a -= 2 ** (8 * t)), a;
	}, s.prototype.readInt8 = function(e, t) {
		return e >>>= 0, t || P(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e];
	}, s.prototype.readInt16LE = function(e, t) {
		e >>>= 0, t || P(e, 2, this.length);
		let n = this[e] | this[e + 1] << 8;
		return n & 32768 ? n | 4294901760 : n;
	}, s.prototype.readInt16BE = function(e, t) {
		e >>>= 0, t || P(e, 2, this.length);
		let n = this[e + 1] | this[e] << 8;
		return n & 32768 ? n | 4294901760 : n;
	}, s.prototype.readInt32LE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
	}, s.prototype.readInt32BE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
	}, s.prototype.readBigInt64LE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (n << 24);
		return (BigInt(r) << BigInt(32)) + BigInt(t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24);
	}), s.prototype.readBigInt64BE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
		return (BigInt(r) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n);
	}), s.prototype.readFloatLE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), n.read(this, e, !0, 23, 4);
	}, s.prototype.readFloatBE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), n.read(this, e, !1, 23, 4);
	}, s.prototype.readDoubleLE = function(e, t) {
		return e >>>= 0, t || P(e, 8, this.length), n.read(this, e, !0, 52, 8);
	}, s.prototype.readDoubleBE = function(e, t) {
		return e >>>= 0, t || P(e, 8, this.length), n.read(this, e, !1, 52, 8);
	};
	function F(e, t, n, r, i, a) {
		if (!s.isBuffer(e)) throw TypeError("\"buffer\" argument must be a Buffer instance");
		if (t > i || t < a) throw RangeError("\"value\" argument is out of bounds");
		if (n + r > e.length) throw RangeError("Index out of range");
	}
	s.prototype.writeUintLE = s.prototype.writeUIntLE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, n >>>= 0, !r) {
			let r = 2 ** (8 * n) - 1;
			F(this, e, t, n, r, 0);
		}
		let i = 1, a = 0;
		for (this[t] = e & 255; ++a < n && (i *= 256);) this[t + a] = e / i & 255;
		return t + n;
	}, s.prototype.writeUintBE = s.prototype.writeUIntBE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, n >>>= 0, !r) {
			let r = 2 ** (8 * n) - 1;
			F(this, e, t, n, r, 0);
		}
		let i = n - 1, a = 1;
		for (this[t + i] = e & 255; --i >= 0 && (a *= 256);) this[t + i] = e / a & 255;
		return t + n;
	}, s.prototype.writeUint8 = s.prototype.writeUInt8 = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 1, 255, 0), this[t] = e & 255, t + 1;
	}, s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 65535, 0), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
	}, s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
	}, s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = e & 255, t + 4;
	}, s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
	};
	function I(e, t, n, r, i) {
		W(t, r, i, e, n, 7);
		let a = Number(t & BigInt(4294967295));
		e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a;
		let o = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, n;
	}
	function L(e, t, n, r, i) {
		W(t, r, i, e, n, 7);
		let a = Number(t & BigInt(4294967295));
		e[n + 7] = a, a >>= 8, e[n + 6] = a, a >>= 8, e[n + 5] = a, a >>= 8, e[n + 4] = a;
		let o = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[n + 3] = o, o >>= 8, e[n + 2] = o, o >>= 8, e[n + 1] = o, o >>= 8, e[n] = o, n + 8;
	}
	s.prototype.writeBigUInt64LE = Q(function(e, t = 0) {
		return I(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
	}), s.prototype.writeBigUInt64BE = Q(function(e, t = 0) {
		return L(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
	}), s.prototype.writeIntLE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, !r) {
			let r = 2 ** (8 * n - 1);
			F(this, e, t, n, r - 1, -r);
		}
		let i = 0, a = 1, o = 0;
		for (this[t] = e & 255; ++i < n && (a *= 256);) e < 0 && o === 0 && this[t + i - 1] !== 0 && (o = 1), this[t + i] = (e / a >> 0) - o & 255;
		return t + n;
	}, s.prototype.writeIntBE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, !r) {
			let r = 2 ** (8 * n - 1);
			F(this, e, t, n, r - 1, -r);
		}
		let i = n - 1, a = 1, o = 0;
		for (this[t + i] = e & 255; --i >= 0 && (a *= 256);) e < 0 && o === 0 && this[t + i + 1] !== 0 && (o = 1), this[t + i] = (e / a >> 0) - o & 255;
		return t + n;
	}, s.prototype.writeInt8 = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = e & 255, t + 1;
	}, s.prototype.writeInt16LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 32767, -32768), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
	}, s.prototype.writeInt16BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
	}, s.prototype.writeInt32LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 2147483647, -2147483648), this[t] = e & 255, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4;
	}, s.prototype.writeInt32BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
	}, s.prototype.writeBigInt64LE = Q(function(e, t = 0) {
		return I(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
	}), s.prototype.writeBigInt64BE = Q(function(e, t = 0) {
		return L(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
	});
	function R(e, t, n, r, i, a) {
		if (n + r > e.length || n < 0) throw RangeError("Index out of range");
	}
	function z(e, t, r, i, a) {
		return t = +t, r >>>= 0, a || R(e, t, r, 4, 34028234663852886e22, -34028234663852886e22), n.write(e, t, r, i, 23, 4), r + 4;
	}
	s.prototype.writeFloatLE = function(e, t, n) {
		return z(this, e, t, !0, n);
	}, s.prototype.writeFloatBE = function(e, t, n) {
		return z(this, e, t, !1, n);
	};
	function B(e, t, r, i, a) {
		return t = +t, r >>>= 0, a || R(e, t, r, 8, 17976931348623157e292, -17976931348623157e292), n.write(e, t, r, i, 52, 8), r + 8;
	}
	s.prototype.writeDoubleLE = function(e, t, n) {
		return B(this, e, t, !0, n);
	}, s.prototype.writeDoubleBE = function(e, t, n) {
		return B(this, e, t, !1, n);
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
	var V = {};
	function H(e, t, n) {
		V[e] = class extends n {
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
	H("ERR_BUFFER_OUT_OF_BOUNDS", function(e) {
		return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
	}, RangeError), H("ERR_INVALID_ARG_TYPE", function(e, t) {
		return `The "${e}" argument must be of type number. Received type ${typeof t}`;
	}, TypeError), H("ERR_OUT_OF_RANGE", function(e, t, n) {
		let r = `The value of "${e}" is out of range.`, i = n;
		return Number.isInteger(n) && Math.abs(n) > 2 ** 32 ? i = U(String(n)) : typeof n == "bigint" && (i = String(n), (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (i = U(i)), i += "n"), r += ` It must be ${t}. Received ${i}`, r;
	}, RangeError);
	function U(e) {
		let t = "", n = e.length, r = +(e[0] === "-");
		for (; n >= r + 4; n -= 3) t = `_${e.slice(n - 3, n)}${t}`;
		return `${e.slice(0, n)}${t}`;
	}
	function re(e, t, n) {
		G(t, "offset"), (e[t] === void 0 || e[t + n] === void 0) && K(t, e.length - (n + 1));
	}
	function W(e, t, n, r, i, a) {
		if (e > n || e < t) {
			let r = typeof t == "bigint" ? "n" : "", i;
			throw i = a > 3 ? t === 0 || t === BigInt(0) ? `>= 0${r} and < 2${r} ** ${(a + 1) * 8}${r}` : `>= -(2${r} ** ${(a + 1) * 8 - 1}${r}) and < 2 ** ${(a + 1) * 8 - 1}${r}` : `>= ${t}${r} and <= ${n}${r}`, new V.ERR_OUT_OF_RANGE("value", i, e);
		}
		re(r, i, a);
	}
	function G(e, t) {
		if (typeof e != "number") throw new V.ERR_INVALID_ARG_TYPE(t, "number", e);
	}
	function K(e, t, n) {
		throw Math.floor(e) === e ? t < 0 ? new V.ERR_BUFFER_OUT_OF_BOUNDS() : new V.ERR_OUT_OF_RANGE(n || "offset", `>= ${+!!n} and <= ${t}`, e) : (G(e, n), new V.ERR_OUT_OF_RANGE(n || "offset", "an integer", e));
	}
	var ie = /[^+/0-9A-Za-z-_]/g;
	function ae(e) {
		if (e = e.split("=")[0], e = e.trim().replace(ie, ""), e.length < 2) return "";
		for (; e.length % 4 != 0;) e += "=";
		return e;
	}
	function q(e, t) {
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
	function oe(e) {
		let t = [];
		for (let n = 0; n < e.length; ++n) t.push(e.charCodeAt(n) & 255);
		return t;
	}
	function se(e, t) {
		let n, r, i, a = [];
		for (let o = 0; o < e.length && !((t -= 2) < 0); ++o) n = e.charCodeAt(o), r = n >> 8, i = n % 256, a.push(i), a.push(r);
		return a;
	}
	function J(e) {
		return t.toByteArray(ae(e));
	}
	function Y(e, t, n, r) {
		let i;
		for (i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
		return i;
	}
	function X(e, t) {
		return e instanceof t || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === t.name;
	}
	function Z(e) {
		return e !== e;
	}
	var ce = (function() {
		let e = "0123456789abcdef", t = Array(256);
		for (let n = 0; n < 16; ++n) {
			let r = n * 16;
			for (let i = 0; i < 16; ++i) t[r + i] = e[n] + e[i];
		}
		return t;
	})();
	function Q(e) {
		return typeof BigInt > "u" ? le : e;
	}
	function le() {
		throw Error("BigInt not supported");
	}
})))();
var Oo = (e) => {
	let t = "", n = Object.keys(e).map((t) => {
		let n = e[t];
		return To(n) ? "" : `${encodeURIComponent(t)}=${encodeURIComponent(n)}`;
	}).filter((e) => e !== "").join("&");
	if (n) {
		let e = t.indexOf("#");
		e !== -1 && (t = t.slice(0, e)), t += (t.indexOf("?") === -1 ? "?" : "&") + n;
	}
	return t;
};
((e, { baseHeaders: t, handleErr: n, handleFinally: r, debug: i } = {}) => {
	let a = {
		"Content-Type": "application/json",
		...t
	}, o = (e) => {
		console.log(e);
	}, s = ({ endpoint: t, inputHeaders: s, fetchParams: c, args: l }) => {
		To(t) && (t = "");
		let u = e + t, d = {
			...a,
			...s
		};
		Object.keys(d).forEach((e) => {
			To(d[e]) && delete d[e];
		});
		let f = {
			method: "GET",
			headers: { ...d },
			...c
		};
		return To(l) || (f.method === "POST" && (f.body = JSON.stringify(l)), f.method === "GET" && (u += Oo(l))), fetch(u, f).catch((e) => n(e)).finally(() => {
			i && o({
				endpoint: t,
				inputHeaders: s,
				fetchParams: c
			}), !To(r) && r({
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
})("http://localhost:8080/", {
	handleErr: (e) => console.log(e),
	debug: !0
}), j({
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
}), t(null);
var ko = (e) => e == null, Ao = /* @__PURE__ */ Y(((e) => {
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
})), jo = /* @__PURE__ */ Y(((e) => {
	e.read = function(e, t, n, r, i) {
		var a, o, s = i * 8 - r - 1, c = (1 << s) - 1, l = c >> 1, u = -7, d = n ? i - 1 : 0, f = n ? -1 : 1, p = e[t + d];
		for (d += f, a = p & (1 << -u) - 1, p >>= -u, u += s; u > 0; a = a * 256 + e[t + d], d += f, u -= 8);
		for (o = a & (1 << -u) - 1, a >>= -u, u += r; u > 0; o = o * 256 + e[t + d], d += f, u -= 8);
		if (a === 0) a = 1 - l;
		else if (a === c) return o ? NaN : (p ? -1 : 1) * Infinity;
		else o += 2 ** r, a -= l;
		return (p ? -1 : 1) * o * 2 ** (a - r);
	}, e.write = function(e, t, n, r, i, a) {
		var o, s, c, l = a * 8 - i - 1, u = (1 << l) - 1, d = u >> 1, f = i === 23 ? 2 ** -24 - 2 ** -77 : 0, p = r ? 0 : a - 1, m = r ? 1 : -1, h = +(t < 0 || t === 0 && 1 / t < 0);
		for (t = Math.abs(t), isNaN(t) || t === Infinity ? (s = +!!isNaN(t), o = u) : (o = Math.floor(Math.log(t) / Math.LN2), t * (c = 2 ** -o) < 1 && (o--, c *= 2), o + d >= 1 ? t += f / c : t += f * 2 ** (1 - d), t * c >= 2 && (o++, c /= 2), o + d >= u ? (s = 0, o = u) : o + d >= 1 ? (s = (t * c - 1) * 2 ** i, o += d) : (s = t * 2 ** (d - 1) * 2 ** i, o = 0)); i >= 8; e[n + p] = s & 255, p += m, s /= 256, i -= 8);
		for (o = o << i | s, l += i; l > 0; e[n + p] = o & 255, p += m, o /= 256, l -= 8);
		e[n + p - m] |= h * 128;
	};
}));
(/* @__PURE__ */ Y(((e) => {
	var t = Ao(), n = jo(), r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
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
		if (X(e, ArrayBuffer) || e && X(e.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (X(e, SharedArrayBuffer) || e && X(e.buffer, SharedArrayBuffer))) return h(e, t, n);
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
		if (X(e, Uint8Array)) {
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
		if (e.length !== void 0) return typeof e.length != "number" || Z(e.length) ? o(0) : p(e);
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
		if (X(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), X(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), !s.isBuffer(e) || !s.isBuffer(t)) throw TypeError("The \"buf1\", \"buf2\" arguments must be one of type Buffer or Uint8Array");
		if (e === t) return 0;
		let n = e.length, r = t.length;
		for (let i = 0, a = Math.min(n, r); i < a; ++i) if (e[i] !== t[i]) {
			n = e[i], r = t[i];
			break;
		}
		return n < r ? -1 : +(r < n);
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
			if (X(t, Uint8Array)) i + t.length > r.length ? (s.isBuffer(t) || (t = s.from(t)), t.copy(r, i)) : Uint8Array.prototype.set.call(r, t, i);
			else if (s.isBuffer(t)) t.copy(r, i);
			else throw TypeError("\"list\" argument must be an Array of Buffers");
			i += t.length;
		}
		return r;
	};
	function y(e, t) {
		if (s.isBuffer(e)) return e.length;
		if (ArrayBuffer.isView(e) || X(e, ArrayBuffer)) return e.byteLength;
		if (typeof e != "string") throw TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + typeof e);
		let n = e.length, r = arguments.length > 2 && arguments[2] === !0;
		if (!r && n === 0) return 0;
		let i = !1;
		for (;;) switch (t) {
			case "ascii":
			case "latin1":
			case "binary": return n;
			case "utf8":
			case "utf-8": return q(e).length;
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return n * 2;
			case "hex": return n >>> 1;
			case "base64": return J(e).length;
			default:
				if (i) return r ? -1 : q(e).length;
				t = ("" + t).toLowerCase(), i = !0;
		}
	}
	s.byteLength = y;
	function b(e, t, n) {
		let r = !1;
		if ((t === void 0 || t < 0) && (t = 0), t > this.length || ((n === void 0 || n > this.length) && (n = this.length), n <= 0) || (n >>>= 0, t >>>= 0, n <= t)) return "";
		for (e ||= "utf8";;) switch (e) {
			case "hex": return M(this, t, n);
			case "utf8":
			case "utf-8": return k(this, t, n);
			case "ascii": return j(this, t, n);
			case "latin1":
			case "binary": return ne(this, t, n);
			case "base64": return O(this, t, n);
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return N(this, t, n);
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
		return e === 0 ? "" : arguments.length === 0 ? k(this, 0, e) : b.apply(this, arguments);
	}, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(e) {
		if (!s.isBuffer(e)) throw TypeError("Argument must be a Buffer");
		return this === e ? !0 : s.compare(this, e) === 0;
	}, s.prototype.inspect = function() {
		let t = "", n = e.INSPECT_MAX_BYTES;
		return t = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(), this.length > n && (t += " ... "), "<Buffer " + t + ">";
	}, r && (s.prototype[r] = s.prototype.inspect), s.prototype.compare = function(e, t, n, r, i) {
		if (X(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), !s.isBuffer(e)) throw TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof e);
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
		return a < o ? -1 : +(o < a);
	};
	function S(e, t, n, r, i) {
		if (e.length === 0) return -1;
		if (typeof n == "string" ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, Z(n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
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
			if (Z(r)) return o;
			e[n + o] = r;
		}
		return o;
	}
	function T(e, t, n, r) {
		return Y(q(t, e.length - n), e, n, r);
	}
	function E(e, t, n, r) {
		return Y(oe(t), e, n, r);
	}
	function D(e, t, n, r) {
		return Y(J(t), e, n, r);
	}
	function ee(e, t, n, r) {
		return Y(se(t, e.length - n), e, n, r);
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
			case "binary": return E(this, e, t, n);
			case "base64": return D(this, e, t, n);
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return ee(this, e, t, n);
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
	function O(e, n, r) {
		return n === 0 && r === e.length ? t.fromByteArray(e) : t.fromByteArray(e.slice(n, r));
	}
	function k(e, t, n) {
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
		return te(r);
	}
	var A = 4096;
	function te(e) {
		let t = e.length;
		if (t <= A) return String.fromCharCode.apply(String, e);
		let n = "", r = 0;
		for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += A));
		return n;
	}
	function j(e, t, n) {
		let r = "";
		n = Math.min(e.length, n);
		for (let i = t; i < n; ++i) r += String.fromCharCode(e[i] & 127);
		return r;
	}
	function ne(e, t, n) {
		let r = "";
		n = Math.min(e.length, n);
		for (let i = t; i < n; ++i) r += String.fromCharCode(e[i]);
		return r;
	}
	function M(e, t, n) {
		let r = e.length;
		(!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
		let i = "";
		for (let r = t; r < n; ++r) i += ce[e[r]];
		return i;
	}
	function N(e, t, n) {
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
	function P(e, t, n) {
		if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
		if (e + t > n) throw RangeError("Trying to access beyond buffer length");
	}
	s.prototype.readUintLE = s.prototype.readUIntLE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = this[e], i = 1, a = 0;
		for (; ++a < t && (i *= 256);) r += this[e + a] * i;
		return r;
	}, s.prototype.readUintBE = s.prototype.readUIntBE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = this[e + --t], i = 1;
		for (; t > 0 && (i *= 256);) r += this[e + --t] * i;
		return r;
	}, s.prototype.readUint8 = s.prototype.readUInt8 = function(e, t) {
		return e >>>= 0, t || P(e, 1, this.length), this[e];
	}, s.prototype.readUint16LE = s.prototype.readUInt16LE = function(e, t) {
		return e >>>= 0, t || P(e, 2, this.length), this[e] | this[e + 1] << 8;
	}, s.prototype.readUint16BE = s.prototype.readUInt16BE = function(e, t) {
		return e >>>= 0, t || P(e, 2, this.length), this[e] << 8 | this[e + 1];
	}, s.prototype.readUint32LE = s.prototype.readUInt32LE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
	}, s.prototype.readUint32BE = s.prototype.readUInt32BE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
	}, s.prototype.readBigUInt64LE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24, i = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + n * 2 ** 24;
		return BigInt(r) + (BigInt(i) << BigInt(32));
	}), s.prototype.readBigUInt64BE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e], i = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n;
		return (BigInt(r) << BigInt(32)) + BigInt(i);
	}), s.prototype.readIntLE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = this[e], i = 1, a = 0;
		for (; ++a < t && (i *= 256);) r += this[e + a] * i;
		return i *= 128, r >= i && (r -= 2 ** (8 * t)), r;
	}, s.prototype.readIntBE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = t, i = 1, a = this[e + --r];
		for (; r > 0 && (i *= 256);) a += this[e + --r] * i;
		return i *= 128, a >= i && (a -= 2 ** (8 * t)), a;
	}, s.prototype.readInt8 = function(e, t) {
		return e >>>= 0, t || P(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e];
	}, s.prototype.readInt16LE = function(e, t) {
		e >>>= 0, t || P(e, 2, this.length);
		let n = this[e] | this[e + 1] << 8;
		return n & 32768 ? n | 4294901760 : n;
	}, s.prototype.readInt16BE = function(e, t) {
		e >>>= 0, t || P(e, 2, this.length);
		let n = this[e + 1] | this[e] << 8;
		return n & 32768 ? n | 4294901760 : n;
	}, s.prototype.readInt32LE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
	}, s.prototype.readInt32BE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
	}, s.prototype.readBigInt64LE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (n << 24);
		return (BigInt(r) << BigInt(32)) + BigInt(t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24);
	}), s.prototype.readBigInt64BE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
		return (BigInt(r) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n);
	}), s.prototype.readFloatLE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), n.read(this, e, !0, 23, 4);
	}, s.prototype.readFloatBE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), n.read(this, e, !1, 23, 4);
	}, s.prototype.readDoubleLE = function(e, t) {
		return e >>>= 0, t || P(e, 8, this.length), n.read(this, e, !0, 52, 8);
	}, s.prototype.readDoubleBE = function(e, t) {
		return e >>>= 0, t || P(e, 8, this.length), n.read(this, e, !1, 52, 8);
	};
	function F(e, t, n, r, i, a) {
		if (!s.isBuffer(e)) throw TypeError("\"buffer\" argument must be a Buffer instance");
		if (t > i || t < a) throw RangeError("\"value\" argument is out of bounds");
		if (n + r > e.length) throw RangeError("Index out of range");
	}
	s.prototype.writeUintLE = s.prototype.writeUIntLE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, n >>>= 0, !r) {
			let r = 2 ** (8 * n) - 1;
			F(this, e, t, n, r, 0);
		}
		let i = 1, a = 0;
		for (this[t] = e & 255; ++a < n && (i *= 256);) this[t + a] = e / i & 255;
		return t + n;
	}, s.prototype.writeUintBE = s.prototype.writeUIntBE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, n >>>= 0, !r) {
			let r = 2 ** (8 * n) - 1;
			F(this, e, t, n, r, 0);
		}
		let i = n - 1, a = 1;
		for (this[t + i] = e & 255; --i >= 0 && (a *= 256);) this[t + i] = e / a & 255;
		return t + n;
	}, s.prototype.writeUint8 = s.prototype.writeUInt8 = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 1, 255, 0), this[t] = e & 255, t + 1;
	}, s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 65535, 0), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
	}, s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
	}, s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = e & 255, t + 4;
	}, s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
	};
	function I(e, t, n, r, i) {
		W(t, r, i, e, n, 7);
		let a = Number(t & BigInt(4294967295));
		e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a;
		let o = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, n;
	}
	function L(e, t, n, r, i) {
		W(t, r, i, e, n, 7);
		let a = Number(t & BigInt(4294967295));
		e[n + 7] = a, a >>= 8, e[n + 6] = a, a >>= 8, e[n + 5] = a, a >>= 8, e[n + 4] = a;
		let o = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[n + 3] = o, o >>= 8, e[n + 2] = o, o >>= 8, e[n + 1] = o, o >>= 8, e[n] = o, n + 8;
	}
	s.prototype.writeBigUInt64LE = Q(function(e, t = 0) {
		return I(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
	}), s.prototype.writeBigUInt64BE = Q(function(e, t = 0) {
		return L(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
	}), s.prototype.writeIntLE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, !r) {
			let r = 2 ** (8 * n - 1);
			F(this, e, t, n, r - 1, -r);
		}
		let i = 0, a = 1, o = 0;
		for (this[t] = e & 255; ++i < n && (a *= 256);) e < 0 && o === 0 && this[t + i - 1] !== 0 && (o = 1), this[t + i] = (e / a >> 0) - o & 255;
		return t + n;
	}, s.prototype.writeIntBE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, !r) {
			let r = 2 ** (8 * n - 1);
			F(this, e, t, n, r - 1, -r);
		}
		let i = n - 1, a = 1, o = 0;
		for (this[t + i] = e & 255; --i >= 0 && (a *= 256);) e < 0 && o === 0 && this[t + i + 1] !== 0 && (o = 1), this[t + i] = (e / a >> 0) - o & 255;
		return t + n;
	}, s.prototype.writeInt8 = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = e & 255, t + 1;
	}, s.prototype.writeInt16LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 32767, -32768), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
	}, s.prototype.writeInt16BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
	}, s.prototype.writeInt32LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 2147483647, -2147483648), this[t] = e & 255, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4;
	}, s.prototype.writeInt32BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
	}, s.prototype.writeBigInt64LE = Q(function(e, t = 0) {
		return I(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
	}), s.prototype.writeBigInt64BE = Q(function(e, t = 0) {
		return L(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
	});
	function R(e, t, n, r, i, a) {
		if (n + r > e.length || n < 0) throw RangeError("Index out of range");
	}
	function z(e, t, r, i, a) {
		return t = +t, r >>>= 0, a || R(e, t, r, 4, 34028234663852886e22, -34028234663852886e22), n.write(e, t, r, i, 23, 4), r + 4;
	}
	s.prototype.writeFloatLE = function(e, t, n) {
		return z(this, e, t, !0, n);
	}, s.prototype.writeFloatBE = function(e, t, n) {
		return z(this, e, t, !1, n);
	};
	function B(e, t, r, i, a) {
		return t = +t, r >>>= 0, a || R(e, t, r, 8, 17976931348623157e292, -17976931348623157e292), n.write(e, t, r, i, 52, 8), r + 8;
	}
	s.prototype.writeDoubleLE = function(e, t, n) {
		return B(this, e, t, !0, n);
	}, s.prototype.writeDoubleBE = function(e, t, n) {
		return B(this, e, t, !1, n);
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
	var V = {};
	function H(e, t, n) {
		V[e] = class extends n {
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
	H("ERR_BUFFER_OUT_OF_BOUNDS", function(e) {
		return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
	}, RangeError), H("ERR_INVALID_ARG_TYPE", function(e, t) {
		return `The "${e}" argument must be of type number. Received type ${typeof t}`;
	}, TypeError), H("ERR_OUT_OF_RANGE", function(e, t, n) {
		let r = `The value of "${e}" is out of range.`, i = n;
		return Number.isInteger(n) && Math.abs(n) > 2 ** 32 ? i = U(String(n)) : typeof n == "bigint" && (i = String(n), (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (i = U(i)), i += "n"), r += ` It must be ${t}. Received ${i}`, r;
	}, RangeError);
	function U(e) {
		let t = "", n = e.length, r = +(e[0] === "-");
		for (; n >= r + 4; n -= 3) t = `_${e.slice(n - 3, n)}${t}`;
		return `${e.slice(0, n)}${t}`;
	}
	function re(e, t, n) {
		G(t, "offset"), (e[t] === void 0 || e[t + n] === void 0) && K(t, e.length - (n + 1));
	}
	function W(e, t, n, r, i, a) {
		if (e > n || e < t) {
			let r = typeof t == "bigint" ? "n" : "", i;
			throw i = a > 3 ? t === 0 || t === BigInt(0) ? `>= 0${r} and < 2${r} ** ${(a + 1) * 8}${r}` : `>= -(2${r} ** ${(a + 1) * 8 - 1}${r}) and < 2 ** ${(a + 1) * 8 - 1}${r}` : `>= ${t}${r} and <= ${n}${r}`, new V.ERR_OUT_OF_RANGE("value", i, e);
		}
		re(r, i, a);
	}
	function G(e, t) {
		if (typeof e != "number") throw new V.ERR_INVALID_ARG_TYPE(t, "number", e);
	}
	function K(e, t, n) {
		throw Math.floor(e) === e ? t < 0 ? new V.ERR_BUFFER_OUT_OF_BOUNDS() : new V.ERR_OUT_OF_RANGE(n || "offset", `>= ${+!!n} and <= ${t}`, e) : (G(e, n), new V.ERR_OUT_OF_RANGE(n || "offset", "an integer", e));
	}
	var ie = /[^+/0-9A-Za-z-_]/g;
	function ae(e) {
		if (e = e.split("=")[0], e = e.trim().replace(ie, ""), e.length < 2) return "";
		for (; e.length % 4 != 0;) e += "=";
		return e;
	}
	function q(e, t) {
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
	function oe(e) {
		let t = [];
		for (let n = 0; n < e.length; ++n) t.push(e.charCodeAt(n) & 255);
		return t;
	}
	function se(e, t) {
		let n, r, i, a = [];
		for (let o = 0; o < e.length && !((t -= 2) < 0); ++o) n = e.charCodeAt(o), r = n >> 8, i = n % 256, a.push(i), a.push(r);
		return a;
	}
	function J(e) {
		return t.toByteArray(ae(e));
	}
	function Y(e, t, n, r) {
		let i;
		for (i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
		return i;
	}
	function X(e, t) {
		return e instanceof t || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === t.name;
	}
	function Z(e) {
		return e !== e;
	}
	var ce = (function() {
		let e = "0123456789abcdef", t = Array(256);
		for (let n = 0; n < 16; ++n) {
			let r = n * 16;
			for (let i = 0; i < 16; ++i) t[r + i] = e[n] + e[i];
		}
		return t;
	})();
	function Q(e) {
		return typeof BigInt > "u" ? le : e;
	}
	function le() {
		throw Error("BigInt not supported");
	}
})))();
var Mo = (e) => {
	let t = "", n = Object.keys(e).map((t) => {
		let n = e[t];
		return ko(n) ? "" : `${encodeURIComponent(t)}=${encodeURIComponent(n)}`;
	}).filter((e) => e !== "").join("&");
	if (n) {
		let e = t.indexOf("#");
		e !== -1 && (t = t.slice(0, e)), t += (t.indexOf("?") === -1 ? "?" : "&") + n;
	}
	return t;
};
((e, { baseHeaders: t, handleErr: n, handleFinally: r, debug: i } = {}) => {
	let a = {
		"Content-Type": "application/json",
		...t
	}, o = (e) => {
		console.log(e);
	}, s = ({ endpoint: t, inputHeaders: s, fetchParams: c, args: l }) => {
		ko(t) && (t = "");
		let u = e + t, d = {
			...a,
			...s
		};
		Object.keys(d).forEach((e) => {
			ko(d[e]) && delete d[e];
		});
		let f = {
			method: "GET",
			headers: { ...d },
			...c
		};
		return ko(l) || (f.method === "POST" && (f.body = JSON.stringify(l)), f.method === "GET" && (u += Mo(l))), fetch(u, f).catch((e) => n(e)).finally(() => {
			i && o({
				endpoint: t,
				inputHeaders: s,
				fetchParams: c
			}), !ko(r) && r({
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
})("http://localhost:8080/", {
	handleErr: (e) => console.log(e),
	debug: !0
}), j({
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
});
var No = t(null), Po = () => r(No), Fo = (e, t = !0) => {
	let n = Po();
	return (r) => {
		t && r ? n?.register(e, r) : n?.unregister(e);
	};
}, Io = ({ title: e, body: t, show: n, footer: r, title_sx: i, footer_sx: a, content_sx: o, paper_sx: s }) => /* @__PURE__ */ N(h, {
	open: n,
	maxWidth: "lg",
	fullWidth: !0,
	scroll: "paper",
	slotProps: { paper: { sx: {
		maxHeight: "70vh",
		display: "flex",
		flexDirection: "column",
		...s
	} } },
	"aria-labelledby": "centered-modal-title",
	children: [
		/* @__PURE__ */ M(v, {
			id: "centered-modal-title",
			sx: { ...i },
			children: e
		}),
		/* @__PURE__ */ M(_, {
			dividers: !0,
			sx: { ...o },
			children: t
		}),
		/* @__PURE__ */ M(g, {
			sx: a,
			children: r
		})
	]
}), Lo = (e) => {
	if (e === null) return !0;
	let t = typeof e;
	return t === "string" || t === "number" || t === "boolean" || t === "undefined" || t === "symbol" || t === "bigint" || t === "int";
}, Ro = (e) => e == null, zo = (e, t) => Ro(e) ? "" : e.split(t).map((e) => e.charAt(0).toUpperCase() + e.slice(1)).join(" "), Bo = "Values", Vo = "Containers", Ho = (e, t, n, r) => {
	let i = r || {
		[Bo]: /* @__PURE__ */ new Map(),
		[Vo]: /* @__PURE__ */ new Map()
	}, a = e ? t : "root", o = {
		parent: e,
		path: a,
		value: n,
		children: [],
		root: e ? e.root : null,
		containerIndex: i
	};
	return e || (o.root = o), i[Bo].set(a, n), i[Vo].set(a, o), Object.freeze(o);
}, Uo = (e, t, n) => {
	let r = Ho(e, t, n, e.containerIndex);
	return {
		...e,
		children: [...e.children, r]
	};
}, Wo = (e, t) => e.containerIndex[Vo].get(t), Go = (e, t) => {
	for (let [n, r] of e.containerIndex[Bo].entries()) t(n, r);
}, Ko = (e, t) => {
	for (let [, n] of e.containerIndex[Vo].entries()) t(n);
}, qo = (e, t, n = 2) => {
	Go(e, (e, r) => {
		let i = Object.keys(r);
		for (let a = 0; a < i.length; a++) {
			let o = e.split(".");
			o.push(i[a]);
			let s = o.slice(2).join("."), c = r[i[a]];
			o.length > n && Lo(c) && t({
				i: a,
				value: c,
				path: s,
				fullpath: o.join("."),
				key: e,
				containerValue: r
			});
		}
	});
}, Jo = (e, t, n, r) => {
	if (!e || !t) return e;
	let i = e.containerIndex[Vo].get(t);
	if (!i) return console.warn(`Container at path "${t}" not found.`), e;
	let a = {};
	a[n] = r;
	let o = {
		...i.value,
		...a
	}, s = Ho(i.parent, i.path, o, e.containerIndex);
	e.containerIndex[Vo].set(t, s), e.containerIndex[Bo].set(t, o);
	let c = s;
	for (; c.parent;) {
		let t = c.parent, n = t.children.map((e) => e.path === c.path ? c : e), r = c.path.split("."), i = r.slice(r.length - 1), a = { ...e.containerIndex[Bo].get(t.path) };
		a[i] = o;
		let s = Object.freeze({
			...t,
			children: n,
			value: a
		});
		e.containerIndex[Vo].set(s.path, s), c = s;
	}
	return e.containerIndex[Vo].get("root");
}, Yo = (e = null, t = [], n = "_", ...r) => {
	e === null && (e = Ho(null, "root", r.length === 0 ? {} : r[0]), t = ["root"]);
	let i = (e, t) => {
		let r = e.value;
		return typeof r == "object" && r && (Array.isArray(r) ? r.forEach((r, a) => {
			if (typeof r == "object" && r) {
				let o = [...t, String(a)];
				i(Uo(e, o.join(n), r).children.at(-1), o);
			}
		}) : Object.entries(r).forEach(([r, a]) => {
			if (typeof a == "object" && a) {
				let o = [...t, r];
				i(Uo(e, o.join(n), a).children.at(-1), o);
			}
		})), e;
	};
	return i(e, t);
}, Xo = ({ inputKey: t, inputProps: n }) => {
	let r = Object.keys(n.defaultValue)[0], a = n.defaultValue[r], [o, s] = c(/* @__PURE__ */ M(b, {
		type: "text",
		onChange: n.onChange,
		defaultValue: a
	})), l = (t, r) => {
		s(e.cloneElement(o, {
			...n,
			defaultValue: a,
			name: t + "." + r
		}));
	}, [u, d] = c(/* @__PURE__ */ M(b, {
		type: "text",
		...n,
		defaultValue: r,
		onChange: (e) => l(t, e.target.value)
	}));
	return i(() => {
		l(t, r);
	}, []), /* @__PURE__ */ N(T, {
		direction: "horizontal",
		gap: 2,
		children: [u, o]
	});
}, Zo = ({ fileData: e, onChange: t, name: n }) => {
	let [r] = V(), a = s("");
	return i(() => {
		e && (async () => {
			if (!e) return;
			let t = String(e).replace(/^"|"$/g, "").replace(/\\n/g, "<br/>");
			t !== a.current && (a.current = t, r.update(() => {
				let e = re();
				e.clear();
				let n = U(r, new DOMParser().parseFromString(`<div>${t}</div>`, "text/html"));
				n.length > 0 && e.append(...n);
			}));
		})();
	}, [e, r]), i(() => r.registerUpdateListener(({ editorState: e }) => {
		e.read(() => {
			let e = H(r);
			a.current = e, t({ target: {
				value: e,
				name: n
			} });
		});
	}), [
		r,
		t,
		n
	]), null;
}, Qo = ({ fileData: e, subtype: t, inputProps: n }) => /* @__PURE__ */ M(u, {
	sx: { width: "100%" },
	children: /* @__PURE__ */ M(C, {
		variant: "outlined",
		sx: {
			p: 2,
			minHeight: "200px",
			position: "relative"
		},
		children: /* @__PURE__ */ N(L, {
			initialConfig: {
				namespace: "MyEditor",
				nodes: [W, G],
				theme: {},
				onError: (e) => console.error("Lexical Error:", e),
				editable: t !== 0
			},
			children: [/* @__PURE__ */ M(R, {
				contentEditable: /* @__PURE__ */ M(z, { style: {
					outline: "none",
					minHeight: "170px"
				} }),
				placeholder: /* @__PURE__ */ M("div", {
					style: {
						position: "absolute",
						top: 20,
						left: 20,
						color: "#aaa"
					},
					children: "Enter text..."
				}),
				ErrorBoundary: B
			}), /* @__PURE__ */ M(Zo, {
				fileData: e,
				onChange: n.onChange,
				name: n.name
			})]
		})
	})
}), $o = /* @__PURE__ */ J(((e) => {
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
})), es = /* @__PURE__ */ J(((e) => {
	e.read = function(e, t, n, r, i) {
		var a, o, s = i * 8 - r - 1, c = (1 << s) - 1, l = c >> 1, u = -7, d = n ? i - 1 : 0, f = n ? -1 : 1, p = e[t + d];
		for (d += f, a = p & (1 << -u) - 1, p >>= -u, u += s; u > 0; a = a * 256 + e[t + d], d += f, u -= 8);
		for (o = a & (1 << -u) - 1, a >>= -u, u += r; u > 0; o = o * 256 + e[t + d], d += f, u -= 8);
		if (a === 0) a = 1 - l;
		else if (a === c) return o ? NaN : (p ? -1 : 1) * Infinity;
		else o += 2 ** r, a -= l;
		return (p ? -1 : 1) * o * 2 ** (a - r);
	}, e.write = function(e, t, n, r, i, a) {
		var o, s, c, l = a * 8 - i - 1, u = (1 << l) - 1, d = u >> 1, f = i === 23 ? 2 ** -24 - 2 ** -77 : 0, p = r ? 0 : a - 1, m = r ? 1 : -1, h = +(t < 0 || t === 0 && 1 / t < 0);
		for (t = Math.abs(t), isNaN(t) || t === Infinity ? (s = +!!isNaN(t), o = u) : (o = Math.floor(Math.log(t) / Math.LN2), t * (c = 2 ** -o) < 1 && (o--, c *= 2), o + d >= 1 ? t += f / c : t += f * 2 ** (1 - d), t * c >= 2 && (o++, c /= 2), o + d >= u ? (s = 0, o = u) : o + d >= 1 ? (s = (t * c - 1) * 2 ** i, o += d) : (s = t * 2 ** (d - 1) * 2 ** i, o = 0)); i >= 8; e[n + p] = s & 255, p += m, s /= 256, i -= 8);
		for (o = o << i | s, l += i; l > 0; e[n + p] = o & 255, p += m, o /= 256, l -= 8);
		e[n + p - m] |= h * 128;
	};
})), ts = (/* @__PURE__ */ J(((e) => {
	var t = $o(), n = es(), r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
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
		if (X(e, ArrayBuffer) || e && X(e.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (X(e, SharedArrayBuffer) || e && X(e.buffer, SharedArrayBuffer))) return h(e, t, n);
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
		if (X(e, Uint8Array)) {
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
		if (e.length !== void 0) return typeof e.length != "number" || Z(e.length) ? o(0) : p(e);
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
		if (X(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), X(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), !s.isBuffer(e) || !s.isBuffer(t)) throw TypeError("The \"buf1\", \"buf2\" arguments must be one of type Buffer or Uint8Array");
		if (e === t) return 0;
		let n = e.length, r = t.length;
		for (let i = 0, a = Math.min(n, r); i < a; ++i) if (e[i] !== t[i]) {
			n = e[i], r = t[i];
			break;
		}
		return n < r ? -1 : +(r < n);
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
			if (X(t, Uint8Array)) i + t.length > r.length ? (s.isBuffer(t) || (t = s.from(t)), t.copy(r, i)) : Uint8Array.prototype.set.call(r, t, i);
			else if (s.isBuffer(t)) t.copy(r, i);
			else throw TypeError("\"list\" argument must be an Array of Buffers");
			i += t.length;
		}
		return r;
	};
	function y(e, t) {
		if (s.isBuffer(e)) return e.length;
		if (ArrayBuffer.isView(e) || X(e, ArrayBuffer)) return e.byteLength;
		if (typeof e != "string") throw TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + typeof e);
		let n = e.length, r = arguments.length > 2 && arguments[2] === !0;
		if (!r && n === 0) return 0;
		let i = !1;
		for (;;) switch (t) {
			case "ascii":
			case "latin1":
			case "binary": return n;
			case "utf8":
			case "utf-8": return q(e).length;
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return n * 2;
			case "hex": return n >>> 1;
			case "base64": return J(e).length;
			default:
				if (i) return r ? -1 : q(e).length;
				t = ("" + t).toLowerCase(), i = !0;
		}
	}
	s.byteLength = y;
	function b(e, t, n) {
		let r = !1;
		if ((t === void 0 || t < 0) && (t = 0), t > this.length || ((n === void 0 || n > this.length) && (n = this.length), n <= 0) || (n >>>= 0, t >>>= 0, n <= t)) return "";
		for (e ||= "utf8";;) switch (e) {
			case "hex": return M(this, t, n);
			case "utf8":
			case "utf-8": return k(this, t, n);
			case "ascii": return j(this, t, n);
			case "latin1":
			case "binary": return ne(this, t, n);
			case "base64": return O(this, t, n);
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return N(this, t, n);
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
		return e === 0 ? "" : arguments.length === 0 ? k(this, 0, e) : b.apply(this, arguments);
	}, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(e) {
		if (!s.isBuffer(e)) throw TypeError("Argument must be a Buffer");
		return this === e ? !0 : s.compare(this, e) === 0;
	}, s.prototype.inspect = function() {
		let t = "", n = e.INSPECT_MAX_BYTES;
		return t = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(), this.length > n && (t += " ... "), "<Buffer " + t + ">";
	}, r && (s.prototype[r] = s.prototype.inspect), s.prototype.compare = function(e, t, n, r, i) {
		if (X(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), !s.isBuffer(e)) throw TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof e);
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
		return a < o ? -1 : +(o < a);
	};
	function S(e, t, n, r, i) {
		if (e.length === 0) return -1;
		if (typeof n == "string" ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, Z(n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
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
			if (Z(r)) return o;
			e[n + o] = r;
		}
		return o;
	}
	function T(e, t, n, r) {
		return Y(q(t, e.length - n), e, n, r);
	}
	function E(e, t, n, r) {
		return Y(oe(t), e, n, r);
	}
	function D(e, t, n, r) {
		return Y(J(t), e, n, r);
	}
	function ee(e, t, n, r) {
		return Y(se(t, e.length - n), e, n, r);
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
			case "binary": return E(this, e, t, n);
			case "base64": return D(this, e, t, n);
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return ee(this, e, t, n);
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
	function O(e, n, r) {
		return n === 0 && r === e.length ? t.fromByteArray(e) : t.fromByteArray(e.slice(n, r));
	}
	function k(e, t, n) {
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
		return te(r);
	}
	var A = 4096;
	function te(e) {
		let t = e.length;
		if (t <= A) return String.fromCharCode.apply(String, e);
		let n = "", r = 0;
		for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += A));
		return n;
	}
	function j(e, t, n) {
		let r = "";
		n = Math.min(e.length, n);
		for (let i = t; i < n; ++i) r += String.fromCharCode(e[i] & 127);
		return r;
	}
	function ne(e, t, n) {
		let r = "";
		n = Math.min(e.length, n);
		for (let i = t; i < n; ++i) r += String.fromCharCode(e[i]);
		return r;
	}
	function M(e, t, n) {
		let r = e.length;
		(!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
		let i = "";
		for (let r = t; r < n; ++r) i += ce[e[r]];
		return i;
	}
	function N(e, t, n) {
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
	function P(e, t, n) {
		if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
		if (e + t > n) throw RangeError("Trying to access beyond buffer length");
	}
	s.prototype.readUintLE = s.prototype.readUIntLE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = this[e], i = 1, a = 0;
		for (; ++a < t && (i *= 256);) r += this[e + a] * i;
		return r;
	}, s.prototype.readUintBE = s.prototype.readUIntBE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = this[e + --t], i = 1;
		for (; t > 0 && (i *= 256);) r += this[e + --t] * i;
		return r;
	}, s.prototype.readUint8 = s.prototype.readUInt8 = function(e, t) {
		return e >>>= 0, t || P(e, 1, this.length), this[e];
	}, s.prototype.readUint16LE = s.prototype.readUInt16LE = function(e, t) {
		return e >>>= 0, t || P(e, 2, this.length), this[e] | this[e + 1] << 8;
	}, s.prototype.readUint16BE = s.prototype.readUInt16BE = function(e, t) {
		return e >>>= 0, t || P(e, 2, this.length), this[e] << 8 | this[e + 1];
	}, s.prototype.readUint32LE = s.prototype.readUInt32LE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
	}, s.prototype.readUint32BE = s.prototype.readUInt32BE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
	}, s.prototype.readBigUInt64LE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24, i = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + n * 2 ** 24;
		return BigInt(r) + (BigInt(i) << BigInt(32));
	}), s.prototype.readBigUInt64BE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e], i = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n;
		return (BigInt(r) << BigInt(32)) + BigInt(i);
	}), s.prototype.readIntLE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = this[e], i = 1, a = 0;
		for (; ++a < t && (i *= 256);) r += this[e + a] * i;
		return i *= 128, r >= i && (r -= 2 ** (8 * t)), r;
	}, s.prototype.readIntBE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = t, i = 1, a = this[e + --r];
		for (; r > 0 && (i *= 256);) a += this[e + --r] * i;
		return i *= 128, a >= i && (a -= 2 ** (8 * t)), a;
	}, s.prototype.readInt8 = function(e, t) {
		return e >>>= 0, t || P(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e];
	}, s.prototype.readInt16LE = function(e, t) {
		e >>>= 0, t || P(e, 2, this.length);
		let n = this[e] | this[e + 1] << 8;
		return n & 32768 ? n | 4294901760 : n;
	}, s.prototype.readInt16BE = function(e, t) {
		e >>>= 0, t || P(e, 2, this.length);
		let n = this[e + 1] | this[e] << 8;
		return n & 32768 ? n | 4294901760 : n;
	}, s.prototype.readInt32LE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
	}, s.prototype.readInt32BE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
	}, s.prototype.readBigInt64LE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (n << 24);
		return (BigInt(r) << BigInt(32)) + BigInt(t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24);
	}), s.prototype.readBigInt64BE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
		return (BigInt(r) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n);
	}), s.prototype.readFloatLE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), n.read(this, e, !0, 23, 4);
	}, s.prototype.readFloatBE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), n.read(this, e, !1, 23, 4);
	}, s.prototype.readDoubleLE = function(e, t) {
		return e >>>= 0, t || P(e, 8, this.length), n.read(this, e, !0, 52, 8);
	}, s.prototype.readDoubleBE = function(e, t) {
		return e >>>= 0, t || P(e, 8, this.length), n.read(this, e, !1, 52, 8);
	};
	function F(e, t, n, r, i, a) {
		if (!s.isBuffer(e)) throw TypeError("\"buffer\" argument must be a Buffer instance");
		if (t > i || t < a) throw RangeError("\"value\" argument is out of bounds");
		if (n + r > e.length) throw RangeError("Index out of range");
	}
	s.prototype.writeUintLE = s.prototype.writeUIntLE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, n >>>= 0, !r) {
			let r = 2 ** (8 * n) - 1;
			F(this, e, t, n, r, 0);
		}
		let i = 1, a = 0;
		for (this[t] = e & 255; ++a < n && (i *= 256);) this[t + a] = e / i & 255;
		return t + n;
	}, s.prototype.writeUintBE = s.prototype.writeUIntBE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, n >>>= 0, !r) {
			let r = 2 ** (8 * n) - 1;
			F(this, e, t, n, r, 0);
		}
		let i = n - 1, a = 1;
		for (this[t + i] = e & 255; --i >= 0 && (a *= 256);) this[t + i] = e / a & 255;
		return t + n;
	}, s.prototype.writeUint8 = s.prototype.writeUInt8 = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 1, 255, 0), this[t] = e & 255, t + 1;
	}, s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 65535, 0), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
	}, s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
	}, s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = e & 255, t + 4;
	}, s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
	};
	function I(e, t, n, r, i) {
		W(t, r, i, e, n, 7);
		let a = Number(t & BigInt(4294967295));
		e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a;
		let o = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, n;
	}
	function L(e, t, n, r, i) {
		W(t, r, i, e, n, 7);
		let a = Number(t & BigInt(4294967295));
		e[n + 7] = a, a >>= 8, e[n + 6] = a, a >>= 8, e[n + 5] = a, a >>= 8, e[n + 4] = a;
		let o = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[n + 3] = o, o >>= 8, e[n + 2] = o, o >>= 8, e[n + 1] = o, o >>= 8, e[n] = o, n + 8;
	}
	s.prototype.writeBigUInt64LE = Q(function(e, t = 0) {
		return I(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
	}), s.prototype.writeBigUInt64BE = Q(function(e, t = 0) {
		return L(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
	}), s.prototype.writeIntLE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, !r) {
			let r = 2 ** (8 * n - 1);
			F(this, e, t, n, r - 1, -r);
		}
		let i = 0, a = 1, o = 0;
		for (this[t] = e & 255; ++i < n && (a *= 256);) e < 0 && o === 0 && this[t + i - 1] !== 0 && (o = 1), this[t + i] = (e / a >> 0) - o & 255;
		return t + n;
	}, s.prototype.writeIntBE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, !r) {
			let r = 2 ** (8 * n - 1);
			F(this, e, t, n, r - 1, -r);
		}
		let i = n - 1, a = 1, o = 0;
		for (this[t + i] = e & 255; --i >= 0 && (a *= 256);) e < 0 && o === 0 && this[t + i + 1] !== 0 && (o = 1), this[t + i] = (e / a >> 0) - o & 255;
		return t + n;
	}, s.prototype.writeInt8 = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = e & 255, t + 1;
	}, s.prototype.writeInt16LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 32767, -32768), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
	}, s.prototype.writeInt16BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
	}, s.prototype.writeInt32LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 2147483647, -2147483648), this[t] = e & 255, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4;
	}, s.prototype.writeInt32BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
	}, s.prototype.writeBigInt64LE = Q(function(e, t = 0) {
		return I(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
	}), s.prototype.writeBigInt64BE = Q(function(e, t = 0) {
		return L(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
	});
	function R(e, t, n, r, i, a) {
		if (n + r > e.length || n < 0) throw RangeError("Index out of range");
	}
	function z(e, t, r, i, a) {
		return t = +t, r >>>= 0, a || R(e, t, r, 4, 34028234663852886e22, -34028234663852886e22), n.write(e, t, r, i, 23, 4), r + 4;
	}
	s.prototype.writeFloatLE = function(e, t, n) {
		return z(this, e, t, !0, n);
	}, s.prototype.writeFloatBE = function(e, t, n) {
		return z(this, e, t, !1, n);
	};
	function B(e, t, r, i, a) {
		return t = +t, r >>>= 0, a || R(e, t, r, 8, 17976931348623157e292, -17976931348623157e292), n.write(e, t, r, i, 52, 8), r + 8;
	}
	s.prototype.writeDoubleLE = function(e, t, n) {
		return B(this, e, t, !0, n);
	}, s.prototype.writeDoubleBE = function(e, t, n) {
		return B(this, e, t, !1, n);
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
	var V = {};
	function H(e, t, n) {
		V[e] = class extends n {
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
	H("ERR_BUFFER_OUT_OF_BOUNDS", function(e) {
		return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
	}, RangeError), H("ERR_INVALID_ARG_TYPE", function(e, t) {
		return `The "${e}" argument must be of type number. Received type ${typeof t}`;
	}, TypeError), H("ERR_OUT_OF_RANGE", function(e, t, n) {
		let r = `The value of "${e}" is out of range.`, i = n;
		return Number.isInteger(n) && Math.abs(n) > 2 ** 32 ? i = U(String(n)) : typeof n == "bigint" && (i = String(n), (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (i = U(i)), i += "n"), r += ` It must be ${t}. Received ${i}`, r;
	}, RangeError);
	function U(e) {
		let t = "", n = e.length, r = +(e[0] === "-");
		for (; n >= r + 4; n -= 3) t = `_${e.slice(n - 3, n)}${t}`;
		return `${e.slice(0, n)}${t}`;
	}
	function re(e, t, n) {
		G(t, "offset"), (e[t] === void 0 || e[t + n] === void 0) && K(t, e.length - (n + 1));
	}
	function W(e, t, n, r, i, a) {
		if (e > n || e < t) {
			let r = typeof t == "bigint" ? "n" : "", i;
			throw i = a > 3 ? t === 0 || t === BigInt(0) ? `>= 0${r} and < 2${r} ** ${(a + 1) * 8}${r}` : `>= -(2${r} ** ${(a + 1) * 8 - 1}${r}) and < 2 ** ${(a + 1) * 8 - 1}${r}` : `>= ${t}${r} and <= ${n}${r}`, new V.ERR_OUT_OF_RANGE("value", i, e);
		}
		re(r, i, a);
	}
	function G(e, t) {
		if (typeof e != "number") throw new V.ERR_INVALID_ARG_TYPE(t, "number", e);
	}
	function K(e, t, n) {
		throw Math.floor(e) === e ? t < 0 ? new V.ERR_BUFFER_OUT_OF_BOUNDS() : new V.ERR_OUT_OF_RANGE(n || "offset", `>= ${+!!n} and <= ${t}`, e) : (G(e, n), new V.ERR_OUT_OF_RANGE(n || "offset", "an integer", e));
	}
	var ie = /[^+/0-9A-Za-z-_]/g;
	function ae(e) {
		if (e = e.split("=")[0], e = e.trim().replace(ie, ""), e.length < 2) return "";
		for (; e.length % 4 != 0;) e += "=";
		return e;
	}
	function q(e, t) {
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
	function oe(e) {
		let t = [];
		for (let n = 0; n < e.length; ++n) t.push(e.charCodeAt(n) & 255);
		return t;
	}
	function se(e, t) {
		let n, r, i, a = [];
		for (let o = 0; o < e.length && !((t -= 2) < 0); ++o) n = e.charCodeAt(o), r = n >> 8, i = n % 256, a.push(i), a.push(r);
		return a;
	}
	function J(e) {
		return t.toByteArray(ae(e));
	}
	function Y(e, t, n, r) {
		let i;
		for (i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
		return i;
	}
	function X(e, t) {
		return e instanceof t || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === t.name;
	}
	function Z(e) {
		return e !== e;
	}
	var ce = (function() {
		let e = "0123456789abcdef", t = Array(256);
		for (let n = 0; n < 16; ++n) {
			let r = n * 16;
			for (let i = 0; i < 16; ++i) t[r + i] = e[n] + e[i];
		}
		return t;
	})();
	function Q(e) {
		return typeof BigInt > "u" ? le : e;
	}
	function le() {
		throw Error("BigInt not supported");
	}
})))(), ns = async (e) => {
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
}, rs = (e) => {
	e = atob(e);
	let t = new ArrayBuffer(e.length), n = new Uint8Array(t);
	for (let t = 0; t < e.length; t++) n[t] = e.charCodeAt(t);
	return n;
}, is = "data:image/#{encoding};base64,#{data}", as = ({ data: e, encoding: t, alt: n }) => {
	let r = is, [i, a] = c(void 0);
	return Ro(t) && (t = "png"), Ro(n) && (n = "ERROR"), ns(new Blob([rs(e)])).then((e) => {
		r = r.replace("#{encoding}", t), r = r.replace("#{data}", ts.Buffer.from(e).toString("base64")), a(r);
	}), /* @__PURE__ */ M(Box, {
		component: "img",
		src: i,
		alt: n,
		sx: {
			width: "100%",
			height: "auto",
			display: "block",
			maxWidth: "100%"
		}
	});
}, os = (e) => {
	let t = "", n = Object.keys(e).map((t) => {
		let n = e[t];
		return Ro(n) ? "" : `${encodeURIComponent(t)}=${encodeURIComponent(n)}`;
	}).filter((e) => e !== "").join("&");
	if (n) {
		let e = t.indexOf("#");
		e !== -1 && (t = t.slice(0, e)), t += (t.indexOf("?") === -1 ? "?" : "&") + n;
	}
	return t;
}, ss = (e, { baseHeaders: t, handleErr: n, handleFinally: r, debug: i } = {}) => {
	let a = {
		"Content-Type": "application/json",
		...t
	}, o = (e) => {
		console.log(e);
	}, s = ({ endpoint: t, inputHeaders: s, fetchParams: c, args: l }) => {
		Ro(t) && (t = "");
		let u = e + t, d = {
			...a,
			...s
		};
		Object.keys(d).forEach((e) => {
			Ro(d[e]) && delete d[e];
		});
		let f = {
			method: "GET",
			headers: { ...d },
			...c
		};
		return Ro(l) || (f.method === "POST" && (f.body = JSON.stringify(l)), f.method === "GET" && (u += os(l))), fetch(u, f).catch((e) => n(e)).finally(() => {
			i && o({
				endpoint: t,
				inputHeaders: s,
				fetchParams: c
			}), !Ro(r) && r({
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
ss("http://localhost:8080/", {
	handleErr: (e) => console.log(e),
	debug: !0
});
var cs = ({ endpoint: e, handleErr: t, ...n }) => {
	Ro(t) && (t = (e) => console.log(e));
	let r = ss(e, {
		handleErr: t,
		...n
	});
	return {
		at: async (e, t) => await r.fetchJson({
			endpoint: e,
			...t
		}),
		atContainer: async (e, t) => await r.fetchContainer({
			endpoint: e,
			...t
		}),
		selectOptions: async (e) => await r.fetchJson({
			endpoint: "/select_options",
			args: e
		}),
		schema: async (e, t = {}) => await r.fetchJson({
			endpoint: "/create",
			fetchParams: {
				method: "GET",
				...t
			},
			args: e
		}),
		create: async (e, t = {}) => await r.fetchJson({
			endpoint: "/create",
			fetchParams: {
				method: "POST",
				...t
			},
			args: e
		}),
		update: async (e, t) => await r.fetchJson({
			endpoint: "/update?id=" + t,
			fetchParams: { method: "POST" },
			args: e
		}),
		list: async (e) => await r.fetchJson({
			endpoint: "/list",
			args: e
		}),
		get: async (e) => await r.fetchJson({
			endpoint: "/get",
			args: { id: e }
		}),
		deleteId: async (e) => await r.fetchJson({
			endpoint: "/delete",
			args: { id: e }
		}),
		deleteIds: async (e) => await r.fetchJson({
			fetchParams: { method: "POST" },
			endpoint: "/delete",
			args: { ...e }
		}),
		endpoint: () => e
	};
}, ls = (e, t) => () => e.get(t), us = ({ jsxKey: e, endpoint: t, inputProps: n }) => {
	let [r, a] = c([/* @__PURE__ */ M("option", {
		value: n.defaultValue,
		children: n.defaultValue
	}, e + "-" + n.defaultValue)]), o = cs({ endpoint: t });
	return i(() => {
		o.selectOptions().then((t) => {
			a(Object.keys(t).map((n) => {
				let r = t[n][Object.keys(t[n])[1]], i = t[n][Object.keys(t[n])[0]];
				return /* @__PURE__ */ M("option", {
					value: i,
					children: r
				}, e + "-" + n);
			}));
		});
	}, []), /* @__PURE__ */ M(w, {
		...n,
		defaultValue: n.defaultValue,
		children: [...r || /* @__PURE__ */ M(ne, {})]
	}, e);
}, ds = () => {
	let e = {
		position: "sticky",
		zIndex: 2,
		backgroundColor: "white"
	}, t = {
		position: "sticky",
		width: "100%",
		zIndex: 3,
		backgroundColor: "#191E23 !important"
	};
	return {
		"& .MuiDataGrid-columnHeader-last": {
			width: "100%",
			flex: 2
		},
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
		"& .MuiDataGrid-main": { overflow: "auto" },
		"&": {
			width: "100%",
			display: "flex"
		}
	};
}, fs = ({ data: e, ...t }) => {
	let n = Po(), [r, a] = c({
		rows: [],
		columns: []
	});
	return i(() => {
		(async () => {
			let t = n?.get("key_value_grid");
			if (!t) return;
			let r = { current: { ...t } };
			Ns(r), Ps(r, e), a({
				rows: [...Is(r)],
				columns: [...Rs(r)]
			}), await Gs(r);
		})();
	}, [e, n]), /* @__PURE__ */ M(Ys, {
		register_component: !0,
		datagrid_sx: ds(),
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
}, ps = ({ data: e, ...t }) => {
	let n = Po(), [r, a] = c({
		rows: [],
		columns: []
	});
	return i(() => {
		(async () => {
			let t = n?.get("sub_grid");
			if (!t) return;
			let r = { current: { ...t } }, i = Yo(null, [], ".", e);
			Ms(r, i), Fs(r, i), a({
				rows: [...Ls(r)],
				columns: [...zs(r)]
			}), await Gs(r);
		})();
	}, [e, n]), /* @__PURE__ */ M(Ys, {
		register_component: !0,
		datagrid_sx: ds(),
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
		refKey: "sub_grid"
	});
}, ms = ({ jsxKey: e, key: t, inputProps: n }) => {
	let r;
	return t.charAt(t.length - 1) === "D" && t.charAt(t.length - 2) === "I" || t.charAt(t.length - 1) === "S" && t.charAt(t.length - 2) === "D" ? (t.charAt(t.length - 1) === "D" && t.charAt(t.length - 2) === "I" && (r = t.slice(5, t.length - 2)), t.charAt(t.length - 1) === "S" && t.charAt(t.length - 2) === "D" && (r = t.slice(5, t.length - 3), n = {
		...n,
		multiple: !0
	}), /* @__PURE__ */ M(us, {
		endpoint: r,
		jsxKey: e,
		inputProps: n
	})) : null;
}, hs = () => ({ formRef: e, jsxKey: t, key: n, currentType: r, inputProps: i }) => {
	let a = ms({
		jsxKey: t,
		key: n,
		inputProps: i
	});
	if (!Ro(a)) return a;
	if (a = /* @__PURE__ */ M(b, {
		type: "text",
		...i
	}, t), r === "number" || r === "bigint") return /* @__PURE__ */ M(b, {
		type: "number",
		...i
	}, t);
	if (r === "boolean") return /* @__PURE__ */ M(E, {
		...i,
		defaultChecked: i.defaultValue
	}, t);
	if (r === "object") {
		if (i.defaultValue.Subtype === 20) return /* @__PURE__ */ M(ps, { data: Wo(ys(e), n.slice(0, n.lastIndexOf(".")))?.value.Data }, t);
		if (i.defaultValue.Subtype === 19) return /* @__PURE__ */ M(fs, { data: Wo(ys(e), n.slice(0, n.lastIndexOf(".")))?.value.Data }, t);
		if (i.defaultValue.Subtype === 17) return /* @__PURE__ */ M(as, { data: Wo(ys(e), n.slice(0, n.lastIndexOf(".")))?.value.Data }, t);
		if (i.defaultValue.Subtype === 16 || i.defaultValue.Subtype === 0) {
			let r = Wo(ys(e), n.slice(0, n.lastIndexOf(".")));
			return i.name = n.slice(0, n.lastIndexOf(".")) + ".Data", /* @__PURE__ */ M(Qo, {
				fileData: JSON.stringify(r?.value.Data, null, 2),
				inputProps: i,
				subtype: i.defaultValue.Subtype
			}, t);
		}
		if (!Ro(i.defaultValue.Subtype) || !Ro(i.defaultValue.Data)) return null;
		if (Array.isArray(i.defaultValue)) return Object.keys(i.defaultValue).map((e) => /* @__PURE__ */ M(b, {
			type: "text",
			...i,
			defaultValue: i.defaultValue[e]
		}, t));
		if (Ro(i.defaultValue)) return;
		let r = Object.keys(i.defaultValue)[0], a = i.defaultValue[r];
		return Lo(a) ? /* @__PURE__ */ M(Xo, {
			inputKey: n,
			inputProps: i
		}) : void 0;
	}
	return a;
}, gs = (e, t = {}) => ({
	index: 0,
	elements: {},
	nameIndex: {},
	labels: {},
	useLabels: {},
	element_component: {},
	container: void 0,
	handleOnClose: void 0,
	elementSelector: e || hs(),
	context: t
}), _s = (e, t) => {
	let n = e.current;
	n.handleClose = t, e.current = n;
}, vs = (e, t) => {
	let n = e.current;
	Ro(n) || (n.container = t), e.current = n;
}, ys = (e) => e.current.container, bs = (e, t) => {
	let n = e.current, r = n.labels[t], i = n.element_component[t];
	return n.useLabels[t] ? /* @__PURE__ */ N(T, {
		direction: "column",
		spacing: 1,
		sx: {
			width: "100%",
			pb: 1
		},
		children: [/* @__PURE__ */ M(u, {
			sx: { width: "100%" },
			children: r
		}), /* @__PURE__ */ M(u, {
			sx: { width: "100%" },
			children: i
		})]
	}, t) : /* @__PURE__ */ N(T, {
		direction: "row",
		gap: 1,
		sx: {
			justifyContent: "space-between",
			width: "100%",
			borderBottom: "1px solid rgba(0, 0, 0, 0.42)",
			pb: .5,
			alignItems: "flex-end"
		},
		children: [/* @__PURE__ */ M(u, {
			sx: {
				width: "50%",
				flexShrink: 0
			},
			children: r
		}), /* @__PURE__ */ M(u, {
			sx: { flexGrow: 1 },
			children: i
		})]
	}, t);
}, xs = (e) => {
	let t = {};
	return Object.keys(e.current.nameIndex).map((n, r) => {
		t[n] = bs(e, r);
	}), /* @__PURE__ */ M(T, {
		direction: "column",
		gap: 0,
		sx: {
			flexGrow: 1,
			width: "100%"
		},
		children: Object.keys(t).map((e) => t[e])
	});
}, Ss = (e) => {
	let t = e.current;
	return { onChange: (n) => {
		let r = n.target.value, i = n.target.selectedOptions;
		if (!Ro(i)) {
			let e = [].slice.call(i);
			r = e.map((e) => e.value), e.length === 1 && (r = r[0]);
		}
		n.target.type === "datetime-local" && (r = new Date(Date.parse(r)).toISOString());
		let a = n.target.name, o = t.nameIndex[a];
		Ro(o) && (t.nameIndex[a] = t.index, o = t.index, e.current = t), t.elements[o] = r;
		let s = a.split("."), c = s.slice(0, s.length - 1).join("."), l = s.slice(s.length - 1);
		Ro(Wo(ys(e), c)) && (c = s.slice(0, s.length - 2).join(".")), n.target.type === "checkbox" && (r = n.currentTarget.checked), e.current = t, vs(e, Jo(ys(e), c, l, r)), e.current = t;
	} };
}, Cs = (e, t) => {
	let n = e.current, r = n.nameIndex[t];
	return n.elements[r];
}, ws = (e, t, n) => {
	let r = typeof n, i = e.current, a = t + i.index, o = {
		name: t,
		defaultValue: Cs(e, t),
		onChange: Ss(e).onChange,
		sx: { width: "100%" }
	};
	return i.elementSelector({
		key: t,
		formRef: e,
		jsxKey: a,
		currentType: r,
		inputProps: o
	});
}, Ts = (e, t, n) => {
	let r = e.current, i = zo(t.replace(/root\./, ""), "_"), a = i.split(".");
	if (!a.some((e) => e.toLowerCase() === "data")) {
		if (Ro(r.nameIndex[t])) {
			r.nameIndex[t] = r.index, r.elements[r.index] = n;
			let o = ws(e, t, n);
			if (!Ro(o)) {
				let e = a[a.length - 1], n = e.toLowerCase() === "subtype", s = /^\d+$/.test(e);
				r.useLabels[r.index] = n || !s;
				let c = i;
				n && a.length > 1 && (c = a[a.length - 2]), r.labels[r.index] = /* @__PURE__ */ M(S, {
					column: t,
					children: c
				}, "Label" + t + r.index), r.element_component[r.index] = o, r.index++;
			}
		}
		e.current = r;
	}
}, Es = ({ formRef: e, container: t }) => {
	Ko(t, (t) => {
		let n = t.path, r = t.value;
		if (Array.isArray(r)) {
			let t = [];
			Object.keys(r).forEach((e) => {
				Ro(r[e]) || Array.isArray(r[e]) || t.push(r[e]);
			}), t.length > 0 && Ts(e, n, t);
			return;
		}
		Object.keys(r).forEach((t) => {
			Ro(r[t]) || (typeof r[t] == "object" && Object.keys(r[t]).forEach((i) => {
				let a = {};
				a[i] = r[t][i], Ts(e, n + "." + t + "." + i, a);
			}), Lo(r[t]) && Ts(e, n + "." + t, r[t]));
		});
	});
}, Ds = ({ title: e, button_title: t, getButton: n, tabs: r, getSchema: i, handleSave: o, elementSelector: l, footerButtons: f, refKey: p, register_component: m = !1, context: h = null }) => {
	let g = Fo(p, m), _ = s(null), [v, y] = c(!1), b = () => {
		y(!1);
	}, x = () => {
		o(ys(_).value), y(!1);
	};
	_.current ||= gs(l, {
		setShow: (e) => {
			y(e);
		},
		...h
	}), a(() => (g(_.current), () => g(null)), [g]);
	let [S, C] = c(void 0), [w, E] = c(0), O = async () => {
		try {
			vs(_, Yo(null, [], ".", await i())), _s(_, b), Es({
				formRef: _,
				container: ys(_)
			}), C(xs(_)), y(!0);
		} catch (e) {
			console.error("Failed to load schema:", e);
		}
	};
	return f ||= [
		/* @__PURE__ */ M(d, {
			onClick: () => {
				let e = {};
				e[_.current.index] = "";
				let t = ys(_);
				Ro(Wo(t, "root.fields")) && vs(_, Uo(t, "root.fields", {})), Ts(_, "root.fields." + _.current.index, e), C(xs(_));
			},
			children: "Add Field"
		}),
		/* @__PURE__ */ M(d, {
			onClick: x,
			children: "Save"
		}),
		/* @__PURE__ */ M(d, {
			onClick: b,
			children: "Close"
		})
	], /* @__PURE__ */ N(T, {
		direction: "row",
		spacing: 1,
		children: [n ? n(O) : /* @__PURE__ */ M(d, {
			onClick: O,
			children: t
		}), /* @__PURE__ */ M(Io, {
			title: e,
			body: /* @__PURE__ */ N(u, {
				sx: { width: "100%" },
				children: [
					r && /* @__PURE__ */ M(u, {
						sx: {
							borderBottom: 1,
							borderColor: "divider"
						},
						children: /* @__PURE__ */ N(ee, {
							value: w,
							onChange: (e, t) => E(t),
							"aria-label": "custom tabs",
							children: [/* @__PURE__ */ M(D, { label: "File Upload" }), /* @__PURE__ */ M(D, { label: "File Viewer" })]
						})
					}),
					w === 0 && /* @__PURE__ */ M(u, {
						sx: {
							borderBottom: 1,
							borderColor: "divider",
							width: "100%"
						},
						children: S
					}),
					w === 1 && /* @__PURE__ */ M(u, {
						sx: { p: 3 },
						children: /* @__PURE__ */ M("pre", { children: JSON.stringify(ys(_)?.value, null, 2) })
					})
				]
			}),
			show: v,
			footer: f
		})]
	});
}, Os = ({ title: e, show: t, onCancel: n, onConfirm: r }) => /* @__PURE__ */ M(Io, {
	title: e || "Are you sure?",
	show: t,
	footer: /* @__PURE__ */ N(T, {
		direction: "column",
		gap: 3,
		children: [/* @__PURE__ */ M(d, {
			onClick: () => {
				Ro(n) || n();
			},
			children: "Cancel"
		}), /* @__PURE__ */ M(d, {
			onClick: () => {
				Ro(r) || r();
			},
			children: "Confirm"
		})]
	})
}), ks = ({ refreshGrid: e, api: t, id: n, title: r, footerButtons: i, ...a }) => /* @__PURE__ */ M(Ds, {
	title: r,
	button_title: "Update",
	getSchema: ls(t, n),
	handleSave: (r) => {
		t.update(r, n).then(() => e());
	},
	footerButtons: i,
	register_component: !0,
	refKey: String(n),
	...a
}), As = ({ refreshGrid: e, api: t, id: n }) => {
	let [r, i] = c(!1);
	return /* @__PURE__ */ N(T, {
		direction: "row",
		spacing: 1,
		sx: {
			width: "100%",
			justifyContent: "center",
			alignItems: "center"
		},
		children: [/* @__PURE__ */ M(d, {
			onClick: () => {
				i(!r);
			},
			children: "Delete"
		}), /* @__PURE__ */ M(Os, {
			onConfirm: () => {
				t.deleteId(n).then(e());
			},
			show: r
		})]
	});
}, js = ({ handleRefreshGrid: e, api: t, id: n, params: r }) => {
	let i = {
		...r,
		refreshGrid: e,
		api: t,
		id: n
	};
	return /* @__PURE__ */ N(T, {
		direction: "row",
		spacing: 1,
		sx: {
			width: "100%",
			justifyContent: "center",
			alignItems: "center"
		},
		children: [/* @__PURE__ */ M(ks, { ...i }), /* @__PURE__ */ M(As, { ...i })]
	});
}, Ms = (e, t) => {
	let n = e.current;
	qo(t, (e) => {
		let t = e.value, r = e.path, i = typeof t;
		if (n.headers_ri[r] !== void 0) return;
		let a = "string";
		i === "number" ? a = "number" : r.toLowerCase().includes("date") || r.toLowerCase().includes("modified") ? a = "date" : i === "string" && (a = "string"), n.headers[n.index] = {
			field: r,
			type: a,
			headerName: r
		}, n.rows[n.index] = [], n.headers_ri[r] = n.index, n.index++;
	}), e.current = n;
}, Ns = (e) => {
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
}, Ps = (e, t) => {
	let n = e.current;
	if (!n) return;
	n.rows = [[], []], n.row_count = 0;
	let r = n.headers_ri.Field, i = n.headers_ri.Value;
	Object.entries(t).forEach(([e, t]) => {
		if (r !== void 0 && n.rows[r].push(zo(e, "_")), i !== void 0) {
			let e = Array.isArray(t) ? t.join(", ") : t;
			n.rows[i].push(e);
		}
		n.row_count++;
	}), e.current = n;
}, Fs = (e, t) => {
	let n = e.current;
	n && (n.rows = [], n.row_count = 0, n.headers.forEach(() => {
		n.rows.push([]);
	}), qo(t, (e) => {
		if (Lo(e.value)) {
			let t = n.headers_ri[e.path];
			t !== void 0 && n.rows[t].push(e.value);
		}
	}), e.current = n);
}, Is = (e) => {
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
}, Ls = (e) => {
	let t = e.current;
	if (!t || !t.rows || t.rows.length === 0) return [];
	let n = t.rows[0].length;
	return Array.from({ length: n }).map((e, n) => {
		let r = {};
		return t.headers.forEach((e, i) => {
			let a = t.rows[i];
			r[e.field] = a ? a[n] : null;
		}), r.id = r.id = r.id ?? n + 1, r;
	});
}, Rs = (e) => {
	let t = e.current;
	return !t || !t.headers ? [] : t.headers;
}, zs = (e) => {
	let t = e.current, n = Object.keys(t.headers_ri).map((e) => ({
		field: e,
		sortable: !0,
		filterable: !0,
		headerName: zo(e.split(".").pop(), "_"),
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
			renderCell: qs(e)
		}, r = Math.max(0, n.length - 1);
		n.splice(r, 0, t);
	}
	return n;
}, Bs = (e, t) => {
	let n = e.current;
	n && (n.args.sortModel = JSON.stringify(t), e.current = n);
}, Vs = (e, t) => {
	let n = e.current;
	n && (n.args.filterModel = JSON.stringify(t), e.current = n);
}, Hs = (e) => e.current.fetch_params, Us = (e, t) => ({ getRows: async (n) => {
	let r = e.current;
	if (!r) return {
		rows: [],
		rowCount: 0
	};
	Vs(e, n.filterModel), Bs(e, n.sortModel);
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
		Array.isArray(t) && t.length === 0 || Ro(t) || (s[e] = t);
	}), Ro(n.sortModel) || Array.isArray(n.sortModel) && n.sortModel.length === 0 && delete s.sortModel, Ro(n.filterModel) || Array.isArray(n.filterModel.items) && n.filterModel.items.length === 0 && delete s.filterModel;
	let c = await r.api?.at("/" + r.endpoint, {
		fetchParams: {
			method: "GET",
			...Hs(e)
		},
		args: s
	}), l = Yo(null, [], ".", c.results);
	return Ms(e, l), Fs(e, l), r.row_count = c.pagination?.total || 0, e.current = r, t(), {
		rows: Ls(e),
		rowCount: c.pagination?.total || 0
	};
} }), Ws = (e) => e.current?.datasource, Gs = async (e) => {
	let t = e.current;
	if (!t) return;
	let n = t.gridRef.current;
	n.dataSource.cache.clear(), await n.dataSource.fetchRows(), t.refresh();
}, Ks = (e) => (t) => {
	let n = e.current;
	if (!n || n.rows.length === 0) return;
	let r = t.ids, i = n.rows[0].length, a = Array.from({ length: i }, (e, t) => t).filter((e) => {
		let t = n.rows[0][e];
		return r.has(t);
	});
	n.selected_data = n.rows.map((e) => a.map((t) => e[t])), n.selected_ids = t, e.current = n;
}, qs = (e) => {
	let t = e.current;
	if (t) return t.cellRenderer ? t.cellRenderer(e) : Js(e);
}, Js = (e) => {
	let t = Po();
	return (n) => {
		let r = e.current;
		if (!r) return;
		let i = (e = !1) => {
			let r = t?.get(String(n.id))?.context;
			if (!r) return;
			let i = r.setShow;
			i(e);
		}, a = /* @__PURE__ */ N(T, {
			direction: "column",
			spacing: 2,
			sx: { width: "100%" },
			children: [/* @__PURE__ */ N(T, {
				spacing: 3,
				direction: "row",
				children: [
					/* @__PURE__ */ M(u, {
						sx: { ...r.modal_header_sx },
						children: "Update"
					}),
					/* @__PURE__ */ M(u, { sx: { flexGrow: 1 } }, "spacer"),
					/* @__PURE__ */ M(y, {
						onClick: () => i(!1),
						sx: {
							backgroundColor: "black",
							color: "white"
						},
						children: /* @__PURE__ */ M(K, {})
					})
				]
			}), /* @__PURE__ */ M(T, {
				spacing: 3,
				direction: "row",
				children: Object.entries(r.modal_header_rows || []).map((e) => e)
			})]
		});
		return /* @__PURE__ */ M(js, {
			params: {
				footerButtons: [
					/* @__PURE__ */ M(d, {
						onClick: () => i(!1),
						children: "Close"
					}),
					/* @__PURE__ */ M(u, { sx: { flexGrow: 1 } }, "spacer"),
					/* @__PURE__ */ M(d, { children: "Update" })
				],
				title: a,
				...n.row
			},
			handleRefreshGrid: async () => await Gs(e),
			api: r.api,
			id: n.id
		});
	};
}, Ys = ({ api: e, endpoint: t, row_details: n, refKey: r, cellRenderer: i, register_component: o = !1, toolbar: l = !1, checkbox_select: u = !1, datagrid_sx: d = void 0, grid_options: f = void 0, context: p = void 0 }) => {
	let m = Fo(r, o), h = s(null), [, g] = c(!1), [_, v] = c({
		page: 0,
		pageSize: 25
	}), [y, b] = c(0), [x, S] = c({ id: !1 }), C = I(), w = () => {
		h.current && b(h.current?.row_count ?? 0), g((e) => !e);
	};
	return h.current ||= {
		context: p,
		gridRef: C,
		index: 0,
		headers: [],
		headers_ri: {},
		rows: [],
		row_count: t ? 0 : void 0,
		datasource: t ? Us(h, w) : void 0,
		paginationModel: {
			page: 0,
			pageSize: 5
		},
		args: {},
		selected_data: [],
		selected_ids: null,
		refresh: w,
		cellRenderer: i,
		filter_model: null,
		api: e,
		row_details: n,
		fetch_params: null,
		endpoint: t,
		register_component: o,
		refKey: r,
		modal_title: null,
		modal_header_rows: null,
		modal_header_sx: null,
		modal_header_row: null,
		...f
	}, a(() => (m(h.current), () => m(null)), [m]), /* @__PURE__ */ M(P, {
		apiRef: C,
		disableVirtualization: !0,
		columnVisibilityModel: x,
		onColumnVisibilityModelChange: (e) => S(e),
		rowCount: y,
		sx: {
			width: "100%",
			...d
		},
		columns: zs(h),
		dataSource: Ws(h),
		pageSizeOptions: [
			25,
			50,
			100
		],
		paginationModel: _,
		onPaginationModelChange: (e) => {
			v(e);
		},
		onRowSelectionModelChange: (e) => Ks(h)(e),
		paginationMode: "server",
		sortingMode: "server",
		filterMode: "server",
		autosizeOnMount: !0,
		autosizeOptions: {
			includeOutliers: !0,
			includeHeaders: !0
		},
		checkboxSelection: u,
		showToolbar: l,
		getRowId: (e) => e.id,
		onDataSourceError: (e) => {
			console.error("DataGrid Error Type:", e.name), console.error("DataGrid Error Message:", e.message), e.cause && (console.group("Original Error Cause"), console.error("Message:", e.cause.message), console.error("Stack:", e.cause.stack), console.groupEnd()), e instanceof F ? console.warn("Fetch failed. Check your API mock or network.") : console.warn("Row update failed.");
		},
		...f
	});
};
j({
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
});
var Xs = t(null), Zs = () => r(Xs), Qs = (e, t = !0) => {
	let n = Zs();
	return (r) => {
		t && r ? n?.register(e, r) : n?.unregister(e);
	};
}, $s = ({ title: e, body: t, show: n, footer: r, title_sx: i, footer_sx: a, content_sx: o, paper_sx: s }) => /* @__PURE__ */ N(h, {
	open: n,
	maxWidth: "lg",
	fullWidth: !0,
	scroll: "paper",
	slotProps: { paper: { sx: {
		maxHeight: "70vh",
		display: "flex",
		flexDirection: "column",
		...s
	} } },
	"aria-labelledby": "centered-modal-title",
	children: [
		/* @__PURE__ */ M(v, {
			id: "centered-modal-title",
			sx: { ...i },
			children: e
		}),
		/* @__PURE__ */ M(_, {
			dividers: !0,
			sx: { ...o },
			children: t
		}),
		/* @__PURE__ */ M(g, {
			sx: a,
			children: r
		})
	]
}), ec = (e) => {
	if (e === null) return !0;
	let t = typeof e;
	return t === "string" || t === "number" || t === "boolean" || t === "undefined" || t === "symbol" || t === "bigint" || t === "int";
}, tc = (e) => e == null, nc = (e, t) => tc(e) ? "" : e.split(t).map((e) => e.charAt(0).toUpperCase() + e.slice(1)).join(" "), rc = "Values", ic = "Containers", ac = (e, t, n, r) => {
	let i = r || {
		[rc]: /* @__PURE__ */ new Map(),
		[ic]: /* @__PURE__ */ new Map()
	}, a = e ? t : "root", o = {
		parent: e,
		path: a,
		value: n,
		children: [],
		root: e ? e.root : null,
		containerIndex: i
	};
	return e || (o.root = o), i[rc].set(a, n), i[ic].set(a, o), Object.freeze(o);
}, oc = (e, t, n) => {
	let r = ac(e, t, n, e.containerIndex);
	return {
		...e,
		children: [...e.children, r]
	};
}, sc = (e, t) => e.containerIndex[ic].get(t), cc = (e, t) => {
	for (let [n, r] of e.containerIndex[rc].entries()) t(n, r);
}, lc = (e, t) => {
	for (let [, n] of e.containerIndex[ic].entries()) t(n);
}, uc = (e, t, n = 2) => {
	cc(e, (e, r) => {
		let i = Object.keys(r);
		for (let a = 0; a < i.length; a++) {
			let o = e.split(".");
			o.push(i[a]);
			let s = o.slice(2).join("."), c = r[i[a]];
			o.length > n && ec(c) && t({
				i: a,
				value: c,
				path: s,
				fullpath: o.join("."),
				key: e,
				containerValue: r
			});
		}
	});
}, dc = (e, t, n, r) => {
	if (!e || !t) return e;
	let i = e.containerIndex[ic].get(t);
	if (!i) return console.warn(`Container at path "${t}" not found.`), e;
	let a = {};
	a[n] = r;
	let o = {
		...i.value,
		...a
	}, s = ac(i.parent, i.path, o, e.containerIndex);
	e.containerIndex[ic].set(t, s), e.containerIndex[rc].set(t, o);
	let c = s;
	for (; c.parent;) {
		let t = c.parent, n = t.children.map((e) => e.path === c.path ? c : e), r = c.path.split("."), i = r.slice(r.length - 1), a = { ...e.containerIndex[rc].get(t.path) };
		a[i] = o;
		let s = Object.freeze({
			...t,
			children: n,
			value: a
		});
		e.containerIndex[ic].set(s.path, s), c = s;
	}
	return e.containerIndex[ic].get("root");
}, fc = (e = null, t = [], n = "_", ...r) => {
	e === null && (e = ac(null, "root", r.length === 0 ? {} : r[0]), t = ["root"]);
	let i = (e, t) => {
		let r = e.value;
		return typeof r == "object" && r && (Array.isArray(r) ? r.forEach((r, a) => {
			if (typeof r == "object" && r) {
				let o = [...t, String(a)];
				i(oc(e, o.join(n), r).children.at(-1), o);
			}
		}) : Object.entries(r).forEach(([r, a]) => {
			if (typeof a == "object" && a) {
				let o = [...t, r];
				i(oc(e, o.join(n), a).children.at(-1), o);
			}
		})), e;
	};
	return i(e, t);
}, pc = ({ inputKey: t, inputProps: n }) => {
	let r = Object.keys(n.defaultValue)[0], a = n.defaultValue[r], [o, s] = c(/* @__PURE__ */ M(b, {
		type: "text",
		onChange: n.onChange,
		defaultValue: a
	})), l = (t, r) => {
		s(e.cloneElement(o, {
			...n,
			defaultValue: a,
			name: t + "." + r
		}));
	}, [u, d] = c(/* @__PURE__ */ M(b, {
		type: "text",
		...n,
		defaultValue: r,
		onChange: (e) => l(t, e.target.value)
	}));
	return i(() => {
		l(t, r);
	}, []), /* @__PURE__ */ N(T, {
		direction: "horizontal",
		gap: 2,
		children: [u, o]
	});
}, mc = ({ fileData: e, onChange: t, name: n }) => {
	let [r] = V(), a = s("");
	return i(() => {
		e && (async () => {
			if (!e) return;
			let t = String(e).replace(/^"|"$/g, "").replace(/\\n/g, "<br/>");
			t !== a.current && (a.current = t, r.update(() => {
				let e = re();
				e.clear();
				let n = U(r, new DOMParser().parseFromString(`<div>${t}</div>`, "text/html"));
				n.length > 0 && e.append(...n);
			}));
		})();
	}, [e, r]), i(() => r.registerUpdateListener(({ editorState: e }) => {
		e.read(() => {
			let e = H(r);
			a.current = e, t({ target: {
				value: e,
				name: n
			} });
		});
	}), [
		r,
		t,
		n
	]), null;
}, hc = ({ fileData: e, subtype: t, inputProps: n }) => /* @__PURE__ */ M(u, {
	sx: { width: "100%" },
	children: /* @__PURE__ */ M(C, {
		variant: "outlined",
		sx: {
			p: 2,
			minHeight: "200px",
			position: "relative"
		},
		children: /* @__PURE__ */ N(L, {
			initialConfig: {
				namespace: "MyEditor",
				nodes: [W, G],
				theme: {},
				onError: (e) => console.error("Lexical Error:", e),
				editable: t !== 0
			},
			children: [/* @__PURE__ */ M(R, {
				contentEditable: /* @__PURE__ */ M(z, { style: {
					outline: "none",
					minHeight: "170px"
				} }),
				placeholder: /* @__PURE__ */ M("div", {
					style: {
						position: "absolute",
						top: 20,
						left: 20,
						color: "#aaa"
					},
					children: "Enter text..."
				}),
				ErrorBoundary: B
			}), /* @__PURE__ */ M(mc, {
				fileData: e,
				onChange: n.onChange,
				name: n.name
			})]
		})
	})
}), gc = /* @__PURE__ */ se(((e) => {
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
})), _c = /* @__PURE__ */ se(((e) => {
	e.read = function(e, t, n, r, i) {
		var a, o, s = i * 8 - r - 1, c = (1 << s) - 1, l = c >> 1, u = -7, d = n ? i - 1 : 0, f = n ? -1 : 1, p = e[t + d];
		for (d += f, a = p & (1 << -u) - 1, p >>= -u, u += s; u > 0; a = a * 256 + e[t + d], d += f, u -= 8);
		for (o = a & (1 << -u) - 1, a >>= -u, u += r; u > 0; o = o * 256 + e[t + d], d += f, u -= 8);
		if (a === 0) a = 1 - l;
		else if (a === c) return o ? NaN : (p ? -1 : 1) * Infinity;
		else o += 2 ** r, a -= l;
		return (p ? -1 : 1) * o * 2 ** (a - r);
	}, e.write = function(e, t, n, r, i, a) {
		var o, s, c, l = a * 8 - i - 1, u = (1 << l) - 1, d = u >> 1, f = i === 23 ? 2 ** -24 - 2 ** -77 : 0, p = r ? 0 : a - 1, m = r ? 1 : -1, h = +(t < 0 || t === 0 && 1 / t < 0);
		for (t = Math.abs(t), isNaN(t) || t === Infinity ? (s = +!!isNaN(t), o = u) : (o = Math.floor(Math.log(t) / Math.LN2), t * (c = 2 ** -o) < 1 && (o--, c *= 2), o + d >= 1 ? t += f / c : t += f * 2 ** (1 - d), t * c >= 2 && (o++, c /= 2), o + d >= u ? (s = 0, o = u) : o + d >= 1 ? (s = (t * c - 1) * 2 ** i, o += d) : (s = t * 2 ** (d - 1) * 2 ** i, o = 0)); i >= 8; e[n + p] = s & 255, p += m, s /= 256, i -= 8);
		for (o = o << i | s, l += i; l > 0; e[n + p] = o & 255, p += m, o /= 256, l -= 8);
		e[n + p - m] |= h * 128;
	};
})), vc = (/* @__PURE__ */ se(((e) => {
	var t = gc(), n = _c(), r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
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
		if (X(e, ArrayBuffer) || e && X(e.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (X(e, SharedArrayBuffer) || e && X(e.buffer, SharedArrayBuffer))) return h(e, t, n);
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
		if (X(e, Uint8Array)) {
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
		if (e.length !== void 0) return typeof e.length != "number" || Z(e.length) ? o(0) : p(e);
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
		if (X(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), X(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), !s.isBuffer(e) || !s.isBuffer(t)) throw TypeError("The \"buf1\", \"buf2\" arguments must be one of type Buffer or Uint8Array");
		if (e === t) return 0;
		let n = e.length, r = t.length;
		for (let i = 0, a = Math.min(n, r); i < a; ++i) if (e[i] !== t[i]) {
			n = e[i], r = t[i];
			break;
		}
		return n < r ? -1 : +(r < n);
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
			if (X(t, Uint8Array)) i + t.length > r.length ? (s.isBuffer(t) || (t = s.from(t)), t.copy(r, i)) : Uint8Array.prototype.set.call(r, t, i);
			else if (s.isBuffer(t)) t.copy(r, i);
			else throw TypeError("\"list\" argument must be an Array of Buffers");
			i += t.length;
		}
		return r;
	};
	function y(e, t) {
		if (s.isBuffer(e)) return e.length;
		if (ArrayBuffer.isView(e) || X(e, ArrayBuffer)) return e.byteLength;
		if (typeof e != "string") throw TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + typeof e);
		let n = e.length, r = arguments.length > 2 && arguments[2] === !0;
		if (!r && n === 0) return 0;
		let i = !1;
		for (;;) switch (t) {
			case "ascii":
			case "latin1":
			case "binary": return n;
			case "utf8":
			case "utf-8": return q(e).length;
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return n * 2;
			case "hex": return n >>> 1;
			case "base64": return J(e).length;
			default:
				if (i) return r ? -1 : q(e).length;
				t = ("" + t).toLowerCase(), i = !0;
		}
	}
	s.byteLength = y;
	function b(e, t, n) {
		let r = !1;
		if ((t === void 0 || t < 0) && (t = 0), t > this.length || ((n === void 0 || n > this.length) && (n = this.length), n <= 0) || (n >>>= 0, t >>>= 0, n <= t)) return "";
		for (e ||= "utf8";;) switch (e) {
			case "hex": return M(this, t, n);
			case "utf8":
			case "utf-8": return k(this, t, n);
			case "ascii": return j(this, t, n);
			case "latin1":
			case "binary": return ne(this, t, n);
			case "base64": return O(this, t, n);
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return N(this, t, n);
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
		return e === 0 ? "" : arguments.length === 0 ? k(this, 0, e) : b.apply(this, arguments);
	}, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(e) {
		if (!s.isBuffer(e)) throw TypeError("Argument must be a Buffer");
		return this === e ? !0 : s.compare(this, e) === 0;
	}, s.prototype.inspect = function() {
		let t = "", n = e.INSPECT_MAX_BYTES;
		return t = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(), this.length > n && (t += " ... "), "<Buffer " + t + ">";
	}, r && (s.prototype[r] = s.prototype.inspect), s.prototype.compare = function(e, t, n, r, i) {
		if (X(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), !s.isBuffer(e)) throw TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof e);
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
		return a < o ? -1 : +(o < a);
	};
	function S(e, t, n, r, i) {
		if (e.length === 0) return -1;
		if (typeof n == "string" ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, Z(n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
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
			if (Z(r)) return o;
			e[n + o] = r;
		}
		return o;
	}
	function T(e, t, n, r) {
		return Y(q(t, e.length - n), e, n, r);
	}
	function E(e, t, n, r) {
		return Y(oe(t), e, n, r);
	}
	function D(e, t, n, r) {
		return Y(J(t), e, n, r);
	}
	function ee(e, t, n, r) {
		return Y(se(t, e.length - n), e, n, r);
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
			case "binary": return E(this, e, t, n);
			case "base64": return D(this, e, t, n);
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return ee(this, e, t, n);
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
	function O(e, n, r) {
		return n === 0 && r === e.length ? t.fromByteArray(e) : t.fromByteArray(e.slice(n, r));
	}
	function k(e, t, n) {
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
		return te(r);
	}
	var A = 4096;
	function te(e) {
		let t = e.length;
		if (t <= A) return String.fromCharCode.apply(String, e);
		let n = "", r = 0;
		for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += A));
		return n;
	}
	function j(e, t, n) {
		let r = "";
		n = Math.min(e.length, n);
		for (let i = t; i < n; ++i) r += String.fromCharCode(e[i] & 127);
		return r;
	}
	function ne(e, t, n) {
		let r = "";
		n = Math.min(e.length, n);
		for (let i = t; i < n; ++i) r += String.fromCharCode(e[i]);
		return r;
	}
	function M(e, t, n) {
		let r = e.length;
		(!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
		let i = "";
		for (let r = t; r < n; ++r) i += ce[e[r]];
		return i;
	}
	function N(e, t, n) {
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
	function P(e, t, n) {
		if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
		if (e + t > n) throw RangeError("Trying to access beyond buffer length");
	}
	s.prototype.readUintLE = s.prototype.readUIntLE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = this[e], i = 1, a = 0;
		for (; ++a < t && (i *= 256);) r += this[e + a] * i;
		return r;
	}, s.prototype.readUintBE = s.prototype.readUIntBE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = this[e + --t], i = 1;
		for (; t > 0 && (i *= 256);) r += this[e + --t] * i;
		return r;
	}, s.prototype.readUint8 = s.prototype.readUInt8 = function(e, t) {
		return e >>>= 0, t || P(e, 1, this.length), this[e];
	}, s.prototype.readUint16LE = s.prototype.readUInt16LE = function(e, t) {
		return e >>>= 0, t || P(e, 2, this.length), this[e] | this[e + 1] << 8;
	}, s.prototype.readUint16BE = s.prototype.readUInt16BE = function(e, t) {
		return e >>>= 0, t || P(e, 2, this.length), this[e] << 8 | this[e + 1];
	}, s.prototype.readUint32LE = s.prototype.readUInt32LE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
	}, s.prototype.readUint32BE = s.prototype.readUInt32BE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
	}, s.prototype.readBigUInt64LE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24, i = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + n * 2 ** 24;
		return BigInt(r) + (BigInt(i) << BigInt(32));
	}), s.prototype.readBigUInt64BE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e], i = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n;
		return (BigInt(r) << BigInt(32)) + BigInt(i);
	}), s.prototype.readIntLE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = this[e], i = 1, a = 0;
		for (; ++a < t && (i *= 256);) r += this[e + a] * i;
		return i *= 128, r >= i && (r -= 2 ** (8 * t)), r;
	}, s.prototype.readIntBE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = t, i = 1, a = this[e + --r];
		for (; r > 0 && (i *= 256);) a += this[e + --r] * i;
		return i *= 128, a >= i && (a -= 2 ** (8 * t)), a;
	}, s.prototype.readInt8 = function(e, t) {
		return e >>>= 0, t || P(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e];
	}, s.prototype.readInt16LE = function(e, t) {
		e >>>= 0, t || P(e, 2, this.length);
		let n = this[e] | this[e + 1] << 8;
		return n & 32768 ? n | 4294901760 : n;
	}, s.prototype.readInt16BE = function(e, t) {
		e >>>= 0, t || P(e, 2, this.length);
		let n = this[e + 1] | this[e] << 8;
		return n & 32768 ? n | 4294901760 : n;
	}, s.prototype.readInt32LE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
	}, s.prototype.readInt32BE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
	}, s.prototype.readBigInt64LE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (n << 24);
		return (BigInt(r) << BigInt(32)) + BigInt(t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24);
	}), s.prototype.readBigInt64BE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
		return (BigInt(r) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n);
	}), s.prototype.readFloatLE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), n.read(this, e, !0, 23, 4);
	}, s.prototype.readFloatBE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), n.read(this, e, !1, 23, 4);
	}, s.prototype.readDoubleLE = function(e, t) {
		return e >>>= 0, t || P(e, 8, this.length), n.read(this, e, !0, 52, 8);
	}, s.prototype.readDoubleBE = function(e, t) {
		return e >>>= 0, t || P(e, 8, this.length), n.read(this, e, !1, 52, 8);
	};
	function F(e, t, n, r, i, a) {
		if (!s.isBuffer(e)) throw TypeError("\"buffer\" argument must be a Buffer instance");
		if (t > i || t < a) throw RangeError("\"value\" argument is out of bounds");
		if (n + r > e.length) throw RangeError("Index out of range");
	}
	s.prototype.writeUintLE = s.prototype.writeUIntLE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, n >>>= 0, !r) {
			let r = 2 ** (8 * n) - 1;
			F(this, e, t, n, r, 0);
		}
		let i = 1, a = 0;
		for (this[t] = e & 255; ++a < n && (i *= 256);) this[t + a] = e / i & 255;
		return t + n;
	}, s.prototype.writeUintBE = s.prototype.writeUIntBE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, n >>>= 0, !r) {
			let r = 2 ** (8 * n) - 1;
			F(this, e, t, n, r, 0);
		}
		let i = n - 1, a = 1;
		for (this[t + i] = e & 255; --i >= 0 && (a *= 256);) this[t + i] = e / a & 255;
		return t + n;
	}, s.prototype.writeUint8 = s.prototype.writeUInt8 = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 1, 255, 0), this[t] = e & 255, t + 1;
	}, s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 65535, 0), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
	}, s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
	}, s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = e & 255, t + 4;
	}, s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
	};
	function I(e, t, n, r, i) {
		W(t, r, i, e, n, 7);
		let a = Number(t & BigInt(4294967295));
		e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a;
		let o = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, n;
	}
	function L(e, t, n, r, i) {
		W(t, r, i, e, n, 7);
		let a = Number(t & BigInt(4294967295));
		e[n + 7] = a, a >>= 8, e[n + 6] = a, a >>= 8, e[n + 5] = a, a >>= 8, e[n + 4] = a;
		let o = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[n + 3] = o, o >>= 8, e[n + 2] = o, o >>= 8, e[n + 1] = o, o >>= 8, e[n] = o, n + 8;
	}
	s.prototype.writeBigUInt64LE = Q(function(e, t = 0) {
		return I(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
	}), s.prototype.writeBigUInt64BE = Q(function(e, t = 0) {
		return L(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
	}), s.prototype.writeIntLE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, !r) {
			let r = 2 ** (8 * n - 1);
			F(this, e, t, n, r - 1, -r);
		}
		let i = 0, a = 1, o = 0;
		for (this[t] = e & 255; ++i < n && (a *= 256);) e < 0 && o === 0 && this[t + i - 1] !== 0 && (o = 1), this[t + i] = (e / a >> 0) - o & 255;
		return t + n;
	}, s.prototype.writeIntBE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, !r) {
			let r = 2 ** (8 * n - 1);
			F(this, e, t, n, r - 1, -r);
		}
		let i = n - 1, a = 1, o = 0;
		for (this[t + i] = e & 255; --i >= 0 && (a *= 256);) e < 0 && o === 0 && this[t + i + 1] !== 0 && (o = 1), this[t + i] = (e / a >> 0) - o & 255;
		return t + n;
	}, s.prototype.writeInt8 = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = e & 255, t + 1;
	}, s.prototype.writeInt16LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 32767, -32768), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
	}, s.prototype.writeInt16BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
	}, s.prototype.writeInt32LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 2147483647, -2147483648), this[t] = e & 255, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4;
	}, s.prototype.writeInt32BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
	}, s.prototype.writeBigInt64LE = Q(function(e, t = 0) {
		return I(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
	}), s.prototype.writeBigInt64BE = Q(function(e, t = 0) {
		return L(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
	});
	function R(e, t, n, r, i, a) {
		if (n + r > e.length || n < 0) throw RangeError("Index out of range");
	}
	function z(e, t, r, i, a) {
		return t = +t, r >>>= 0, a || R(e, t, r, 4, 34028234663852886e22, -34028234663852886e22), n.write(e, t, r, i, 23, 4), r + 4;
	}
	s.prototype.writeFloatLE = function(e, t, n) {
		return z(this, e, t, !0, n);
	}, s.prototype.writeFloatBE = function(e, t, n) {
		return z(this, e, t, !1, n);
	};
	function B(e, t, r, i, a) {
		return t = +t, r >>>= 0, a || R(e, t, r, 8, 17976931348623157e292, -17976931348623157e292), n.write(e, t, r, i, 52, 8), r + 8;
	}
	s.prototype.writeDoubleLE = function(e, t, n) {
		return B(this, e, t, !0, n);
	}, s.prototype.writeDoubleBE = function(e, t, n) {
		return B(this, e, t, !1, n);
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
	var V = {};
	function H(e, t, n) {
		V[e] = class extends n {
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
	H("ERR_BUFFER_OUT_OF_BOUNDS", function(e) {
		return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
	}, RangeError), H("ERR_INVALID_ARG_TYPE", function(e, t) {
		return `The "${e}" argument must be of type number. Received type ${typeof t}`;
	}, TypeError), H("ERR_OUT_OF_RANGE", function(e, t, n) {
		let r = `The value of "${e}" is out of range.`, i = n;
		return Number.isInteger(n) && Math.abs(n) > 2 ** 32 ? i = U(String(n)) : typeof n == "bigint" && (i = String(n), (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (i = U(i)), i += "n"), r += ` It must be ${t}. Received ${i}`, r;
	}, RangeError);
	function U(e) {
		let t = "", n = e.length, r = +(e[0] === "-");
		for (; n >= r + 4; n -= 3) t = `_${e.slice(n - 3, n)}${t}`;
		return `${e.slice(0, n)}${t}`;
	}
	function re(e, t, n) {
		G(t, "offset"), (e[t] === void 0 || e[t + n] === void 0) && K(t, e.length - (n + 1));
	}
	function W(e, t, n, r, i, a) {
		if (e > n || e < t) {
			let r = typeof t == "bigint" ? "n" : "", i;
			throw i = a > 3 ? t === 0 || t === BigInt(0) ? `>= 0${r} and < 2${r} ** ${(a + 1) * 8}${r}` : `>= -(2${r} ** ${(a + 1) * 8 - 1}${r}) and < 2 ** ${(a + 1) * 8 - 1}${r}` : `>= ${t}${r} and <= ${n}${r}`, new V.ERR_OUT_OF_RANGE("value", i, e);
		}
		re(r, i, a);
	}
	function G(e, t) {
		if (typeof e != "number") throw new V.ERR_INVALID_ARG_TYPE(t, "number", e);
	}
	function K(e, t, n) {
		throw Math.floor(e) === e ? t < 0 ? new V.ERR_BUFFER_OUT_OF_BOUNDS() : new V.ERR_OUT_OF_RANGE(n || "offset", `>= ${+!!n} and <= ${t}`, e) : (G(e, n), new V.ERR_OUT_OF_RANGE(n || "offset", "an integer", e));
	}
	var ie = /[^+/0-9A-Za-z-_]/g;
	function ae(e) {
		if (e = e.split("=")[0], e = e.trim().replace(ie, ""), e.length < 2) return "";
		for (; e.length % 4 != 0;) e += "=";
		return e;
	}
	function q(e, t) {
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
	function oe(e) {
		let t = [];
		for (let n = 0; n < e.length; ++n) t.push(e.charCodeAt(n) & 255);
		return t;
	}
	function se(e, t) {
		let n, r, i, a = [];
		for (let o = 0; o < e.length && !((t -= 2) < 0); ++o) n = e.charCodeAt(o), r = n >> 8, i = n % 256, a.push(i), a.push(r);
		return a;
	}
	function J(e) {
		return t.toByteArray(ae(e));
	}
	function Y(e, t, n, r) {
		let i;
		for (i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
		return i;
	}
	function X(e, t) {
		return e instanceof t || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === t.name;
	}
	function Z(e) {
		return e !== e;
	}
	var ce = (function() {
		let e = "0123456789abcdef", t = Array(256);
		for (let n = 0; n < 16; ++n) {
			let r = n * 16;
			for (let i = 0; i < 16; ++i) t[r + i] = e[n] + e[i];
		}
		return t;
	})();
	function Q(e) {
		return typeof BigInt > "u" ? le : e;
	}
	function le() {
		throw Error("BigInt not supported");
	}
})))(), yc = async (e) => {
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
}, bc = (e) => {
	e = atob(e);
	let t = new ArrayBuffer(e.length), n = new Uint8Array(t);
	for (let t = 0; t < e.length; t++) n[t] = e.charCodeAt(t);
	return n;
}, xc = "data:image/#{encoding};base64,#{data}", Sc = ({ data: e, encoding: t, alt: n }) => {
	let r = xc, [i, a] = c(void 0);
	return tc(t) && (t = "png"), tc(n) && (n = "ERROR"), yc(new Blob([bc(e)])).then((e) => {
		r = r.replace("#{encoding}", t), r = r.replace("#{data}", vc.Buffer.from(e).toString("base64")), a(r);
	}), /* @__PURE__ */ M(Box, {
		component: "img",
		src: i,
		alt: n,
		sx: {
			width: "100%",
			height: "auto",
			display: "block",
			maxWidth: "100%"
		}
	});
}, Cc = (e) => {
	let t = "", n = Object.keys(e).map((t) => {
		let n = e[t];
		return tc(n) ? "" : `${encodeURIComponent(t)}=${encodeURIComponent(n)}`;
	}).filter((e) => e !== "").join("&");
	if (n) {
		let e = t.indexOf("#");
		e !== -1 && (t = t.slice(0, e)), t += (t.indexOf("?") === -1 ? "?" : "&") + n;
	}
	return t;
}, wc = (e, { baseHeaders: t, handleErr: n, handleFinally: r, debug: i } = {}) => {
	let a = {
		"Content-Type": "application/json",
		...t
	}, o = (e) => {
		console.log(e);
	}, s = ({ endpoint: t, inputHeaders: s, fetchParams: c, args: l }) => {
		tc(t) && (t = "");
		let u = e + t, d = {
			...a,
			...s
		};
		Object.keys(d).forEach((e) => {
			tc(d[e]) && delete d[e];
		});
		let f = {
			method: "GET",
			headers: { ...d },
			...c
		};
		return tc(l) || (f.method === "POST" && (f.body = JSON.stringify(l)), f.method === "GET" && (u += Cc(l))), fetch(u, f).catch((e) => n(e)).finally(() => {
			i && o({
				endpoint: t,
				inputHeaders: s,
				fetchParams: c
			}), !tc(r) && r({
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
wc("http://localhost:8080/", {
	handleErr: (e) => console.log(e),
	debug: !0
});
var Tc = ({ endpoint: e, handleErr: t, ...n }) => {
	tc(t) && (t = (e) => console.log(e));
	let r = wc(e, {
		handleErr: t,
		...n
	});
	return {
		at: async (e, t) => await r.fetchJson({
			endpoint: e,
			...t
		}),
		atContainer: async (e, t) => await r.fetchContainer({
			endpoint: e,
			...t
		}),
		selectOptions: async (e) => await r.fetchJson({
			endpoint: "/select_options",
			args: e
		}),
		schema: async (e, t = {}) => await r.fetchJson({
			endpoint: "/create",
			fetchParams: {
				method: "GET",
				...t
			},
			args: e
		}),
		create: async (e, t = {}) => await r.fetchJson({
			endpoint: "/create",
			fetchParams: {
				method: "POST",
				...t
			},
			args: e
		}),
		update: async (e, t) => await r.fetchJson({
			endpoint: "/update?id=" + t,
			fetchParams: { method: "POST" },
			args: e
		}),
		list: async (e) => await r.fetchJson({
			endpoint: "/list",
			args: e
		}),
		get: async (e) => await r.fetchJson({
			endpoint: "/get",
			args: { id: e }
		}),
		deleteId: async (e) => await r.fetchJson({
			endpoint: "/delete",
			args: { id: e }
		}),
		deleteIds: async (e) => await r.fetchJson({
			fetchParams: { method: "POST" },
			endpoint: "/delete",
			args: { ...e }
		}),
		endpoint: () => e
	};
}, Ec = (e, t) => () => e.get(t), Dc = ({ jsxKey: e, endpoint: t, inputProps: n }) => {
	let [r, a] = c([/* @__PURE__ */ M("option", {
		value: n.defaultValue,
		children: n.defaultValue
	}, e + "-" + n.defaultValue)]), o = Tc({ endpoint: t });
	return i(() => {
		o.selectOptions().then((t) => {
			a(Object.keys(t).map((n) => {
				let r = t[n][Object.keys(t[n])[1]], i = t[n][Object.keys(t[n])[0]];
				return /* @__PURE__ */ M("option", {
					value: i,
					children: r
				}, e + "-" + n);
			}));
		});
	}, []), /* @__PURE__ */ M(w, {
		...n,
		defaultValue: n.defaultValue,
		children: [...r || /* @__PURE__ */ M(ne, {})]
	}, e);
}, Oc = () => {
	let e = {
		position: "sticky",
		zIndex: 2,
		backgroundColor: "white"
	}, t = {
		position: "sticky",
		width: "100%",
		zIndex: 3,
		backgroundColor: "#191E23 !important"
	};
	return {
		"& .MuiDataGrid-columnHeader-last": {
			width: "100%",
			flex: 2
		},
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
		"& .MuiDataGrid-main": { overflow: "auto" },
		"&": {
			width: "100%",
			display: "flex"
		}
	};
}, kc = ({ data: e, ...t }) => {
	let n = Zs(), [r, a] = c({
		rows: [],
		columns: []
	});
	return i(() => {
		(async () => {
			let t = n?.get("key_value_grid");
			if (!t) return;
			let r = { current: { ...t } };
			Zc(r), Qc(r, e), a({
				rows: [...el(r)],
				columns: [...nl(r)]
			}), await ul(r);
		})();
	}, [e, n]), /* @__PURE__ */ M(ml, {
		register_component: !0,
		datagrid_sx: Oc(),
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
}, Ac = ({ data: e, ...t }) => {
	let n = Zs(), [r, a] = c({
		rows: [],
		columns: []
	});
	return i(() => {
		(async () => {
			let t = n?.get("sub_grid");
			if (!t) return;
			let r = { current: { ...t } }, i = fc(null, [], ".", e);
			Xc(r, i), $c(r, i), a({
				rows: [...tl(r)],
				columns: [...rl(r)]
			}), await ul(r);
		})();
	}, [e, n]), /* @__PURE__ */ M(ml, {
		register_component: !0,
		datagrid_sx: Oc(),
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
		refKey: "sub_grid"
	});
}, jc = ({ buttons: e, endpoint: t, title: n, title_topology_params: r, button_stack_params: i, header_stack_params: a, outer_stack_params: o, ...s }) => {
	let c = e?.map((e) => e);
	return /* @__PURE__ */ N(T, {
		direction: "column",
		spacing: 1,
		sx: {
			width: "100%",
			justifyContent: "flex-start",
			alignItems: "center"
		},
		...o,
		children: [/* @__PURE__ */ N(T, {
			direction: "row",
			...a,
			children: [/* @__PURE__ */ M(te, {
				variant: "h6",
				sx: {
					m: 2,
					whiteSpace: "nowrap",
					overflow: "hidden",
					textOverflow: "ellipsis"
				},
				...r,
				children: n
			}), /* @__PURE__ */ M(T, {
				direction: "row",
				spacing: 2,
				sx: {
					pr: 16,
					pl: 16,
					justifyContent: "flex-end",
					width: "20%",
					alignItems: "center"
				},
				...i,
				children: c
			})]
		}), /* @__PURE__ */ M(ml, {
			...s,
			endpoint: t
		})]
	});
}, Mc = ({ jsxKey: e, key: t, inputProps: n }) => {
	let r;
	return t.charAt(t.length - 1) === "D" && t.charAt(t.length - 2) === "I" || t.charAt(t.length - 1) === "S" && t.charAt(t.length - 2) === "D" ? (t.charAt(t.length - 1) === "D" && t.charAt(t.length - 2) === "I" && (r = t.slice(5, t.length - 2)), t.charAt(t.length - 1) === "S" && t.charAt(t.length - 2) === "D" && (r = t.slice(5, t.length - 3), n = {
		...n,
		multiple: !0
	}), /* @__PURE__ */ M(Dc, {
		endpoint: r,
		jsxKey: e,
		inputProps: n
	})) : null;
}, Nc = () => ({ formRef: e, jsxKey: t, key: n, currentType: r, inputProps: i }) => {
	let a = Mc({
		jsxKey: t,
		key: n,
		inputProps: i
	});
	if (!tc(a)) return a;
	if (a = /* @__PURE__ */ M(b, {
		type: "text",
		...i
	}, t), r === "number" || r === "bigint") return /* @__PURE__ */ M(b, {
		type: "number",
		...i
	}, t);
	if (r === "boolean") return /* @__PURE__ */ M(E, {
		...i,
		defaultChecked: i.defaultValue
	}, t);
	if (r === "object") {
		if (i.defaultValue.Subtype === 20) return /* @__PURE__ */ M(Ac, { data: sc(Lc(e), n.slice(0, n.lastIndexOf(".")))?.value.Data }, t);
		if (i.defaultValue.Subtype === 19) return /* @__PURE__ */ M(kc, { data: sc(Lc(e), n.slice(0, n.lastIndexOf(".")))?.value.Data }, t);
		if (i.defaultValue.Subtype === 17) return /* @__PURE__ */ M(Sc, { data: sc(Lc(e), n.slice(0, n.lastIndexOf(".")))?.value.Data }, t);
		if (i.defaultValue.Subtype === 16 || i.defaultValue.Subtype === 0) {
			let r = sc(Lc(e), n.slice(0, n.lastIndexOf(".")));
			return i.name = n.slice(0, n.lastIndexOf(".")) + ".Data", /* @__PURE__ */ M(hc, {
				fileData: JSON.stringify(r?.value.Data, null, 2),
				inputProps: i,
				subtype: i.defaultValue.Subtype
			}, t);
		}
		if (!tc(i.defaultValue.Subtype) || !tc(i.defaultValue.Data)) return null;
		if (Array.isArray(i.defaultValue)) return Object.keys(i.defaultValue).map((e) => /* @__PURE__ */ M(b, {
			type: "text",
			...i,
			defaultValue: i.defaultValue[e]
		}, t));
		if (tc(i.defaultValue)) return;
		let r = Object.keys(i.defaultValue)[0], a = i.defaultValue[r];
		return ec(a) ? /* @__PURE__ */ M(pc, {
			inputKey: n,
			inputProps: i
		}) : void 0;
	}
	return a;
}, Pc = (e, t = {}) => ({
	index: 0,
	elements: {},
	nameIndex: {},
	labels: {},
	useLabels: {},
	element_component: {},
	container: void 0,
	handleOnClose: void 0,
	elementSelector: e || Nc(),
	context: t
}), Fc = (e, t) => {
	let n = e.current;
	n.handleClose = t, e.current = n;
}, Ic = (e, t) => {
	let n = e.current;
	tc(n) || (n.container = t), e.current = n;
}, Lc = (e) => e.current.container, Rc = (e, t) => {
	let n = e.current, r = n.labels[t], i = n.element_component[t];
	return n.useLabels[t] ? /* @__PURE__ */ N(T, {
		direction: "column",
		spacing: 1,
		sx: {
			width: "100%",
			pb: 1
		},
		children: [/* @__PURE__ */ M(u, {
			sx: { width: "100%" },
			children: r
		}), /* @__PURE__ */ M(u, {
			sx: { width: "100%" },
			children: i
		})]
	}, t) : /* @__PURE__ */ N(T, {
		direction: "row",
		gap: 1,
		sx: {
			justifyContent: "space-between",
			width: "100%",
			borderBottom: "1px solid rgba(0, 0, 0, 0.42)",
			pb: .5,
			alignItems: "flex-end"
		},
		children: [/* @__PURE__ */ M(u, {
			sx: {
				width: "50%",
				flexShrink: 0
			},
			children: r
		}), /* @__PURE__ */ M(u, {
			sx: { flexGrow: 1 },
			children: i
		})]
	}, t);
}, zc = (e) => {
	let t = {};
	return Object.keys(e.current.nameIndex).map((n, r) => {
		t[n] = Rc(e, r);
	}), /* @__PURE__ */ M(T, {
		direction: "column",
		gap: 0,
		sx: {
			flexGrow: 1,
			width: "100%"
		},
		children: Object.keys(t).map((e) => t[e])
	});
}, Bc = (e) => {
	let t = e.current;
	return { onChange: (n) => {
		let r = n.target.value, i = n.target.selectedOptions;
		if (!tc(i)) {
			let e = [].slice.call(i);
			r = e.map((e) => e.value), e.length === 1 && (r = r[0]);
		}
		n.target.type === "datetime-local" && (r = new Date(Date.parse(r)).toISOString());
		let a = n.target.name, o = t.nameIndex[a];
		tc(o) && (t.nameIndex[a] = t.index, o = t.index, e.current = t), t.elements[o] = r;
		let s = a.split("."), c = s.slice(0, s.length - 1).join("."), l = s.slice(s.length - 1);
		tc(sc(Lc(e), c)) && (c = s.slice(0, s.length - 2).join(".")), n.target.type === "checkbox" && (r = n.currentTarget.checked), e.current = t, Ic(e, dc(Lc(e), c, l, r)), e.current = t;
	} };
}, Vc = (e, t) => {
	let n = e.current, r = n.nameIndex[t];
	return n.elements[r];
}, Hc = (e, t, n) => {
	let r = typeof n, i = e.current, a = t + i.index, o = {
		name: t,
		defaultValue: Vc(e, t),
		onChange: Bc(e).onChange,
		sx: { width: "100%" }
	};
	return i.elementSelector({
		key: t,
		formRef: e,
		jsxKey: a,
		currentType: r,
		inputProps: o
	});
}, Uc = (e, t, n) => {
	let r = e.current, i = nc(t.replace(/root\./, ""), "_"), a = i.split(".");
	if (!a.some((e) => e.toLowerCase() === "data")) {
		if (tc(r.nameIndex[t])) {
			r.nameIndex[t] = r.index, r.elements[r.index] = n;
			let o = Hc(e, t, n);
			if (!tc(o)) {
				let e = a[a.length - 1], n = e.toLowerCase() === "subtype", s = /^\d+$/.test(e);
				r.useLabels[r.index] = n || !s;
				let c = i;
				n && a.length > 1 && (c = a[a.length - 2]), r.labels[r.index] = /* @__PURE__ */ M(S, {
					column: t,
					children: c
				}, "Label" + t + r.index), r.element_component[r.index] = o, r.index++;
			}
		}
		e.current = r;
	}
}, Wc = ({ formRef: e, container: t }) => {
	lc(t, (t) => {
		let n = t.path, r = t.value;
		if (Array.isArray(r)) {
			let t = [];
			Object.keys(r).forEach((e) => {
				tc(r[e]) || Array.isArray(r[e]) || t.push(r[e]);
			}), t.length > 0 && Uc(e, n, t);
			return;
		}
		Object.keys(r).forEach((t) => {
			tc(r[t]) || (typeof r[t] == "object" && Object.keys(r[t]).forEach((i) => {
				let a = {};
				a[i] = r[t][i], Uc(e, n + "." + t + "." + i, a);
			}), ec(r[t]) && Uc(e, n + "." + t, r[t]));
		});
	});
}, Gc = ({ title: e, button_title: t, getButton: n, tabs: r, getSchema: i, handleSave: o, elementSelector: l, footerButtons: f, refKey: p, register_component: m = !1, context: h = null }) => {
	let g = Qs(p, m), _ = s(null), [v, y] = c(!1), b = () => {
		y(!1);
	}, x = () => {
		o(Lc(_).value), y(!1);
	};
	_.current ||= Pc(l, {
		setShow: (e) => {
			y(e);
		},
		...h
	}), a(() => (g(_.current), () => g(null)), [g]);
	let [S, C] = c(void 0), [w, E] = c(0), O = async () => {
		try {
			Ic(_, fc(null, [], ".", await i())), Fc(_, b), Wc({
				formRef: _,
				container: Lc(_)
			}), C(zc(_)), y(!0);
		} catch (e) {
			console.error("Failed to load schema:", e);
		}
	};
	return f ||= [
		/* @__PURE__ */ M(d, {
			onClick: () => {
				let e = {};
				e[_.current.index] = "";
				let t = Lc(_);
				tc(sc(t, "root.fields")) && Ic(_, oc(t, "root.fields", {})), Uc(_, "root.fields." + _.current.index, e), C(zc(_));
			},
			children: "Add Field"
		}),
		/* @__PURE__ */ M(d, {
			onClick: x,
			children: "Save"
		}),
		/* @__PURE__ */ M(d, {
			onClick: b,
			children: "Close"
		})
	], /* @__PURE__ */ N(T, {
		direction: "row",
		spacing: 1,
		children: [n ? n(O) : /* @__PURE__ */ M(d, {
			onClick: O,
			children: t
		}), /* @__PURE__ */ M($s, {
			title: e,
			body: /* @__PURE__ */ N(u, {
				sx: { width: "100%" },
				children: [
					r && /* @__PURE__ */ M(u, {
						sx: {
							borderBottom: 1,
							borderColor: "divider"
						},
						children: /* @__PURE__ */ N(ee, {
							value: w,
							onChange: (e, t) => E(t),
							"aria-label": "custom tabs",
							children: [/* @__PURE__ */ M(D, { label: "File Upload" }), /* @__PURE__ */ M(D, { label: "File Viewer" })]
						})
					}),
					w === 0 && /* @__PURE__ */ M(u, {
						sx: {
							borderBottom: 1,
							borderColor: "divider",
							width: "100%"
						},
						children: S
					}),
					w === 1 && /* @__PURE__ */ M(u, {
						sx: { p: 3 },
						children: /* @__PURE__ */ M("pre", { children: JSON.stringify(Lc(_)?.value, null, 2) })
					})
				]
			}),
			show: v,
			footer: f
		})]
	});
}, Kc = ({ title: e, show: t, onCancel: n, onConfirm: r }) => /* @__PURE__ */ M($s, {
	title: e || "Are you sure?",
	show: t,
	footer: /* @__PURE__ */ N(T, {
		direction: "column",
		gap: 3,
		children: [/* @__PURE__ */ M(d, {
			onClick: () => {
				tc(n) || n();
			},
			children: "Cancel"
		}), /* @__PURE__ */ M(d, {
			onClick: () => {
				tc(r) || r();
			},
			children: "Confirm"
		})]
	})
}), qc = ({ refreshGrid: e, api: t, id: n, title: r, footerButtons: i, ...a }) => /* @__PURE__ */ M(Gc, {
	title: r,
	button_title: "Update",
	getSchema: Ec(t, n),
	handleSave: (r) => {
		t.update(r, n).then(() => e());
	},
	footerButtons: i,
	register_component: !0,
	refKey: String(n),
	...a
}), Jc = ({ refreshGrid: e, api: t, id: n }) => {
	let [r, i] = c(!1);
	return /* @__PURE__ */ N(T, {
		direction: "row",
		spacing: 1,
		sx: {
			width: "100%",
			justifyContent: "center",
			alignItems: "center"
		},
		children: [/* @__PURE__ */ M(d, {
			onClick: () => {
				i(!r);
			},
			children: "Delete"
		}), /* @__PURE__ */ M(Kc, {
			onConfirm: () => {
				t.deleteId(n).then(e());
			},
			show: r
		})]
	});
}, Yc = ({ handleRefreshGrid: e, api: t, id: n, params: r }) => {
	let i = {
		...r,
		refreshGrid: e,
		api: t,
		id: n
	};
	return /* @__PURE__ */ N(T, {
		direction: "row",
		spacing: 1,
		sx: {
			width: "100%",
			justifyContent: "center",
			alignItems: "center"
		},
		children: [/* @__PURE__ */ M(qc, { ...i }), /* @__PURE__ */ M(Jc, { ...i })]
	});
}, Xc = (e, t) => {
	let n = e.current;
	uc(t, (e) => {
		let t = e.value, r = e.path, i = typeof t;
		if (n.headers_ri[r] !== void 0) return;
		let a = "string";
		i === "number" ? a = "number" : r.toLowerCase().includes("date") || r.toLowerCase().includes("modified") ? a = "date" : i === "string" && (a = "string"), n.headers[n.index] = {
			field: r,
			type: a,
			headerName: r
		}, n.rows[n.index] = [], n.headers_ri[r] = n.index, n.index++;
	}), e.current = n;
}, Zc = (e) => {
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
}, Qc = (e, t) => {
	let n = e.current;
	if (!n) return;
	n.rows = [[], []], n.row_count = 0;
	let r = n.headers_ri.Field, i = n.headers_ri.Value;
	Object.entries(t).forEach(([e, t]) => {
		if (r !== void 0 && n.rows[r].push(nc(e, "_")), i !== void 0) {
			let e = Array.isArray(t) ? t.join(", ") : t;
			n.rows[i].push(e);
		}
		n.row_count++;
	}), e.current = n;
}, $c = (e, t) => {
	let n = e.current;
	n && (n.rows = [], n.row_count = 0, n.headers.forEach(() => {
		n.rows.push([]);
	}), uc(t, (e) => {
		if (ec(e.value)) {
			let t = n.headers_ri[e.path];
			t !== void 0 && n.rows[t].push(e.value);
		}
	}), e.current = n);
}, el = (e) => {
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
}, tl = (e) => {
	let t = e.current;
	if (!t || !t.rows || t.rows.length === 0) return [];
	let n = t.rows[0].length;
	return Array.from({ length: n }).map((e, n) => {
		let r = {};
		return t.headers.forEach((e, i) => {
			let a = t.rows[i];
			r[e.field] = a ? a[n] : null;
		}), r.id = r.id = r.id ?? n + 1, r;
	});
}, nl = (e) => {
	let t = e.current;
	return !t || !t.headers ? [] : t.headers;
}, rl = (e) => {
	let t = e.current, n = Object.keys(t.headers_ri).map((e) => ({
		field: e,
		sortable: !0,
		filterable: !0,
		headerName: nc(e.split(".").pop(), "_"),
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
			renderCell: fl(e)
		}, r = Math.max(0, n.length - 1);
		n.splice(r, 0, t);
	}
	return n;
}, il = (e, t) => {
	let n = e.current;
	n && (n.args.sortModel = JSON.stringify(t), e.current = n);
}, al = (e, t) => {
	let n = e.current;
	n && (n.args.filterModel = JSON.stringify(t), e.current = n);
}, ol = (e) => e.current.fetch_params, sl = (e, t) => ({ getRows: async (n) => {
	let r = e.current;
	if (!r) return {
		rows: [],
		rowCount: 0
	};
	al(e, n.filterModel), il(e, n.sortModel);
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
		Array.isArray(t) && t.length === 0 || tc(t) || (s[e] = t);
	}), tc(n.sortModel) || Array.isArray(n.sortModel) && n.sortModel.length === 0 && delete s.sortModel, tc(n.filterModel) || Array.isArray(n.filterModel.items) && n.filterModel.items.length === 0 && delete s.filterModel;
	let c = await r.api?.at("/" + r.endpoint, {
		fetchParams: {
			method: "GET",
			...ol(e)
		},
		args: s
	}), l = fc(null, [], ".", c.results);
	return Xc(e, l), $c(e, l), r.row_count = c.pagination?.total || 0, e.current = r, t(), {
		rows: tl(e),
		rowCount: c.pagination?.total || 0
	};
} }), cl = (e, t) => {
	let n = e.current;
	n && (n.args.search = t, e.current = n);
}, ll = (e) => e.current?.datasource, ul = async (e) => {
	let t = e.current;
	if (!t) return;
	let n = t.gridRef.current;
	n.dataSource.cache.clear(), await n.dataSource.fetchRows(), t.refresh();
}, dl = (e) => (t) => {
	let n = e.current;
	if (!n || n.rows.length === 0) return;
	let r = t.ids, i = n.rows[0].length, a = Array.from({ length: i }, (e, t) => t).filter((e) => {
		let t = n.rows[0][e];
		return r.has(t);
	});
	n.selected_data = n.rows.map((e) => a.map((t) => e[t])), n.selected_ids = t, e.current = n;
}, fl = (e) => {
	let t = e.current;
	if (t) return t.cellRenderer ? t.cellRenderer(e) : pl(e);
}, pl = (e) => {
	let t = Zs();
	return (n) => {
		let r = e.current;
		if (!r) return;
		let i = (e = !1) => {
			let r = t?.get(String(n.id))?.context;
			if (!r) return;
			let i = r.setShow;
			i(e);
		}, a = /* @__PURE__ */ N(T, {
			direction: "column",
			spacing: 2,
			sx: { width: "100%" },
			children: [/* @__PURE__ */ N(T, {
				spacing: 3,
				direction: "row",
				children: [
					/* @__PURE__ */ M(u, {
						sx: { ...r.modal_header_sx },
						children: "Update"
					}),
					/* @__PURE__ */ M(u, { sx: { flexGrow: 1 } }, "spacer"),
					/* @__PURE__ */ M(y, {
						onClick: () => i(!1),
						sx: {
							backgroundColor: "black",
							color: "white"
						},
						children: /* @__PURE__ */ M(K, {})
					})
				]
			}), /* @__PURE__ */ M(T, {
				spacing: 3,
				direction: "row",
				children: Object.entries(r.modal_header_rows || []).map((e) => e)
			})]
		});
		return /* @__PURE__ */ M(Yc, {
			params: {
				footerButtons: [
					/* @__PURE__ */ M(d, {
						onClick: () => i(!1),
						children: "Close"
					}),
					/* @__PURE__ */ M(u, { sx: { flexGrow: 1 } }, "spacer"),
					/* @__PURE__ */ M(d, { children: "Update" })
				],
				title: a,
				...n.row
			},
			handleRefreshGrid: async () => await ul(e),
			api: r.api,
			id: n.id
		});
	};
}, ml = ({ api: e, endpoint: t, row_details: n, refKey: r, cellRenderer: i, register_component: o = !1, toolbar: l = !1, checkbox_select: u = !1, datagrid_sx: d = void 0, grid_options: f = void 0, context: p = void 0 }) => {
	let m = Qs(r, o), h = s(null), [, g] = c(!1), [_, v] = c({
		page: 0,
		pageSize: 25
	}), [y, b] = c(0), [x, S] = c({ id: !1 }), C = I(), w = () => {
		h.current && b(h.current?.row_count ?? 0), g((e) => !e);
	};
	return h.current ||= {
		context: p,
		gridRef: C,
		index: 0,
		headers: [],
		headers_ri: {},
		rows: [],
		row_count: t ? 0 : void 0,
		datasource: t ? sl(h, w) : void 0,
		paginationModel: {
			page: 0,
			pageSize: 5
		},
		args: {},
		selected_data: [],
		selected_ids: null,
		refresh: w,
		cellRenderer: i,
		filter_model: null,
		api: e,
		row_details: n,
		fetch_params: null,
		endpoint: t,
		register_component: o,
		refKey: r,
		modal_title: null,
		modal_header_rows: null,
		modal_header_sx: null,
		modal_header_row: null,
		...f
	}, a(() => (m(h.current), () => m(null)), [m]), /* @__PURE__ */ M(P, {
		apiRef: C,
		disableVirtualization: !0,
		columnVisibilityModel: x,
		onColumnVisibilityModelChange: (e) => S(e),
		rowCount: y,
		sx: {
			width: "100%",
			...d
		},
		columns: rl(h),
		dataSource: ll(h),
		pageSizeOptions: [
			25,
			50,
			100
		],
		paginationModel: _,
		onPaginationModelChange: (e) => {
			v(e);
		},
		onRowSelectionModelChange: (e) => dl(h)(e),
		paginationMode: "server",
		sortingMode: "server",
		filterMode: "server",
		autosizeOnMount: !0,
		autosizeOptions: {
			includeOutliers: !0,
			includeHeaders: !0
		},
		checkboxSelection: u,
		showToolbar: l,
		getRowId: (e) => e.id,
		onDataSourceError: (e) => {
			console.error("DataGrid Error Type:", e.name), console.error("DataGrid Error Message:", e.message), e.cause && (console.group("Original Error Cause"), console.error("Message:", e.cause.message), console.error("Stack:", e.cause.stack), console.groupEnd()), e instanceof F ? console.warn("Fetch failed. Check your API mock or network.") : console.warn("Row update failed.");
		},
		...f
	});
};
j({
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
});
var hl = ({ defaultApp: e }) => {
	let t = Qs("app_ctrl", !0), [n, r] = c(e), i = s({
		active: e,
		setActive: (e) => {
			r(e);
		}
	});
	return a(() => (t(i), () => t(null)), [t]), n;
}, gl = t(null), _l = () => r(gl), vl = (e) => {
	let t = _l();
	return (n) => {
		n ? t?.register(e, n) : t?.unregister(e);
	};
}, yl = (e, t = !0) => {
	let n = _l();
	return (r) => {
		t && r ? n?.register(e, r) : n?.unregister(e);
	};
}, bl = ({ title: e, appbar_sx: t, refKey: n, register_component: r }) => {
	let [i, o] = c({}), d = yl(n, r), f = s({ register_element: (e) => {
		o({
			...i,
			...e
		});
	} });
	return a(() => (d(f.current), () => d(null)), [d]), /* @__PURE__ */ M(l, {
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
			...t
		},
		children: /* @__PURE__ */ N(A, {
			disableGutters: !0,
			children: [
				/* @__PURE__ */ M(u, {
					component: "img",
					sx: {
						height: 20,
						marginRight: 2
					},
					alt: "Logo",
					src: "/logo.png"
				}),
				/* @__PURE__ */ M(te, {
					variant: "h6",
					component: "div",
					sx: { flexGrow: 1 },
					children: e
				}),
				Object.keys(i).map((e) => i[e])
			]
		})
	});
}, xl = () => /* @__PURE__ */ M(u, {
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
	children: /* @__PURE__ */ M(p, { maxWidth: "sm" })
}), Sl = ({ api: e, endpoint: t, children: n, get_args: r, fetch_params: i, callback: a, ...o }) => /* @__PURE__ */ M(d, {
	onClick: async () => {
		try {
			let n = {};
			r && (n = r());
			let o = { method: "GET" };
			i && (o = {
				...o,
				...i()
			});
			let s = await e?.at("/" + t, {
				fetchParams: o,
				args: n
			});
			a && a(o, n, s);
		} catch (e) {
			console.error("Button Action Failed:", e);
		}
	},
	...o,
	children: n
}), Cl = ({ children: e, sx: t = {} }) => /* @__PURE__ */ M(u, {
	sx: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		minHeight: "100vh",
		...t
	},
	children: /* @__PURE__ */ M(T, {
		direction: "column",
		sx: { width: "100%" },
		children: e
	})
}), wl = ({ title: e, body: t, show: n, footer: r, title_sx: i, footer_sx: a, content_sx: o, paper_sx: s }) => /* @__PURE__ */ N(h, {
	open: n,
	maxWidth: "lg",
	fullWidth: !0,
	scroll: "paper",
	slotProps: { paper: { sx: {
		maxHeight: "70vh",
		display: "flex",
		flexDirection: "column",
		...s
	} } },
	"aria-labelledby": "centered-modal-title",
	children: [
		/* @__PURE__ */ M(v, {
			id: "centered-modal-title",
			sx: { ...i },
			children: e
		}),
		/* @__PURE__ */ M(_, {
			dividers: !0,
			sx: { ...o },
			children: t
		}),
		/* @__PURE__ */ M(g, {
			sx: a,
			children: r
		})
	]
}), Tl = (e) => {
	if (e === null) return !0;
	let t = typeof e;
	return t === "string" || t === "number" || t === "boolean" || t === "undefined" || t === "symbol" || t === "bigint" || t === "int";
}, $ = (e) => e == null, El = (e, t) => $(e) ? "" : e.split(t).map((e) => e.charAt(0).toUpperCase() + e.slice(1)).join(" "), Dl = "Values", Ol = "Containers", kl = (e, t, n, r) => {
	let i = r || {
		[Dl]: /* @__PURE__ */ new Map(),
		[Ol]: /* @__PURE__ */ new Map()
	}, a = e ? t : "root", o = {
		parent: e,
		path: a,
		value: n,
		children: [],
		root: e ? e.root : null,
		containerIndex: i
	};
	return e || (o.root = o), i[Dl].set(a, n), i[Ol].set(a, o), Object.freeze(o);
}, Al = (e) => e.parent || null, jl = (e) => [...e.children], Ml = (e) => e.value, Nl = (e) => e.path, Pl = (e, t, n) => {
	let r = kl(e, t, n, e.containerIndex);
	return {
		...e,
		children: [...e.children, r]
	};
}, Fl = (e, ...t) => ({
	...e,
	children: [...e.children, ...t]
}), Il = (e, t) => e.containerIndex[Dl].get(t), Ll = (e, t) => e.containerIndex[Ol].get(t), Rl = (e, t) => {
	for (let [n, r] of e.containerIndex[Dl].entries()) t(n, r);
}, zl = (e, t) => {
	for (let [, n] of e.containerIndex[Ol].entries()) t(n);
}, Bl = (e, t, n = 2) => {
	Rl(e, (e, r) => {
		let i = Object.keys(r);
		for (let a = 0; a < i.length; a++) {
			let o = e.split(".");
			o.push(i[a]);
			let s = o.slice(2).join("."), c = r[i[a]];
			o.length > n && Tl(c) && t({
				i: a,
				value: c,
				path: s,
				fullpath: o.join("."),
				key: e,
				containerValue: r
			});
		}
	});
}, Vl = (e, t, n, r) => {
	if (!e || !t) return e;
	let i = e.containerIndex[Ol].get(t);
	if (!i) return console.warn(`Container at path "${t}" not found.`), e;
	let a = {};
	a[n] = r;
	let o = {
		...i.value,
		...a
	}, s = kl(i.parent, i.path, o, e.containerIndex);
	e.containerIndex[Ol].set(t, s), e.containerIndex[Dl].set(t, o);
	let c = s;
	for (; c.parent;) {
		let t = c.parent, n = t.children.map((e) => e.path === c.path ? c : e), r = c.path.split("."), i = r.slice(r.length - 1), a = { ...e.containerIndex[Dl].get(t.path) };
		a[i] = o;
		let s = Object.freeze({
			...t,
			children: n,
			value: a
		});
		e.containerIndex[Ol].set(s.path, s), c = s;
	}
	return e.containerIndex[Ol].get("root");
}, Hl = (e = null, t = [], n = "_", ...r) => {
	e === null && (e = kl(null, "root", r.length === 0 ? {} : r[0]), t = ["root"]);
	let i = (e, t) => {
		let r = e.value;
		return typeof r == "object" && r && (Array.isArray(r) ? r.forEach((r, a) => {
			if (typeof r == "object" && r) {
				let o = [...t, String(a)];
				i(Pl(e, o.join(n), r).children.at(-1), o);
			}
		}) : Object.entries(r).forEach(([r, a]) => {
			if (typeof a == "object" && a) {
				let o = [...t, r];
				i(Pl(e, o.join(n), a).children.at(-1), o);
			}
		})), e;
	};
	return i(e, t);
}, Ul = ({ inputKey: t, inputProps: n }) => {
	let r = Object.keys(n.defaultValue)[0], a = n.defaultValue[r], [o, s] = c(/* @__PURE__ */ M(b, {
		type: "text",
		onChange: n.onChange,
		defaultValue: a
	})), l = (t, r) => {
		s(e.cloneElement(o, {
			...n,
			defaultValue: a,
			name: t + "." + r
		}));
	}, [u, d] = c(/* @__PURE__ */ M(b, {
		type: "text",
		...n,
		defaultValue: r,
		onChange: (e) => l(t, e.target.value)
	}));
	return i(() => {
		l(t, r);
	}, []), /* @__PURE__ */ N(T, {
		direction: "horizontal",
		gap: 2,
		children: [u, o]
	});
}, Wl = ({ fileData: e, onChange: t, name: n }) => {
	let [r] = V(), a = s("");
	return i(() => {
		e && (async () => {
			if (!e) return;
			let t = String(e).replace(/^"|"$/g, "").replace(/\\n/g, "<br/>");
			t !== a.current && (a.current = t, r.update(() => {
				let e = re();
				e.clear();
				let n = U(r, new DOMParser().parseFromString(`<div>${t}</div>`, "text/html"));
				n.length > 0 && e.append(...n);
			}));
		})();
	}, [e, r]), i(() => r.registerUpdateListener(({ editorState: e }) => {
		e.read(() => {
			let e = H(r);
			a.current = e, t({ target: {
				value: e,
				name: n
			} });
		});
	}), [
		r,
		t,
		n
	]), null;
}, Gl = ({ fileData: e, subtype: t, inputProps: n }) => /* @__PURE__ */ M(u, {
	sx: { width: "100%" },
	children: /* @__PURE__ */ M(C, {
		variant: "outlined",
		sx: {
			p: 2,
			minHeight: "200px",
			position: "relative"
		},
		children: /* @__PURE__ */ N(L, {
			initialConfig: {
				namespace: "MyEditor",
				nodes: [W, G],
				theme: {},
				onError: (e) => console.error("Lexical Error:", e),
				editable: t !== 0
			},
			children: [/* @__PURE__ */ M(R, {
				contentEditable: /* @__PURE__ */ M(z, { style: {
					outline: "none",
					minHeight: "170px"
				} }),
				placeholder: /* @__PURE__ */ M("div", {
					style: {
						position: "absolute",
						top: 20,
						left: 20,
						color: "#aaa"
					},
					children: "Enter text..."
				}),
				ErrorBoundary: B
			}), /* @__PURE__ */ M(Wl, {
				fileData: e,
				onChange: n.onChange,
				name: n.name
			})]
		})
	})
}), Kl = /* @__PURE__ */ oe(((e) => {
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
})), ql = /* @__PURE__ */ oe(((e) => {
	e.read = function(e, t, n, r, i) {
		var a, o, s = i * 8 - r - 1, c = (1 << s) - 1, l = c >> 1, u = -7, d = n ? i - 1 : 0, f = n ? -1 : 1, p = e[t + d];
		for (d += f, a = p & (1 << -u) - 1, p >>= -u, u += s; u > 0; a = a * 256 + e[t + d], d += f, u -= 8);
		for (o = a & (1 << -u) - 1, a >>= -u, u += r; u > 0; o = o * 256 + e[t + d], d += f, u -= 8);
		if (a === 0) a = 1 - l;
		else if (a === c) return o ? NaN : (p ? -1 : 1) * Infinity;
		else o += 2 ** r, a -= l;
		return (p ? -1 : 1) * o * 2 ** (a - r);
	}, e.write = function(e, t, n, r, i, a) {
		var o, s, c, l = a * 8 - i - 1, u = (1 << l) - 1, d = u >> 1, f = i === 23 ? 2 ** -24 - 2 ** -77 : 0, p = r ? 0 : a - 1, m = r ? 1 : -1, h = +(t < 0 || t === 0 && 1 / t < 0);
		for (t = Math.abs(t), isNaN(t) || t === Infinity ? (s = +!!isNaN(t), o = u) : (o = Math.floor(Math.log(t) / Math.LN2), t * (c = 2 ** -o) < 1 && (o--, c *= 2), o + d >= 1 ? t += f / c : t += f * 2 ** (1 - d), t * c >= 2 && (o++, c /= 2), o + d >= u ? (s = 0, o = u) : o + d >= 1 ? (s = (t * c - 1) * 2 ** i, o += d) : (s = t * 2 ** (d - 1) * 2 ** i, o = 0)); i >= 8; e[n + p] = s & 255, p += m, s /= 256, i -= 8);
		for (o = o << i | s, l += i; l > 0; e[n + p] = o & 255, p += m, o /= 256, l -= 8);
		e[n + p - m] |= h * 128;
	};
})), Jl = (/* @__PURE__ */ oe(((e) => {
	var t = Kl(), n = ql(), r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
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
		if (X(e, ArrayBuffer) || e && X(e.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (X(e, SharedArrayBuffer) || e && X(e.buffer, SharedArrayBuffer))) return h(e, t, n);
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
		if (X(e, Uint8Array)) {
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
		if (e.length !== void 0) return typeof e.length != "number" || Z(e.length) ? o(0) : p(e);
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
		if (X(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), X(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), !s.isBuffer(e) || !s.isBuffer(t)) throw TypeError("The \"buf1\", \"buf2\" arguments must be one of type Buffer or Uint8Array");
		if (e === t) return 0;
		let n = e.length, r = t.length;
		for (let i = 0, a = Math.min(n, r); i < a; ++i) if (e[i] !== t[i]) {
			n = e[i], r = t[i];
			break;
		}
		return n < r ? -1 : +(r < n);
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
			if (X(t, Uint8Array)) i + t.length > r.length ? (s.isBuffer(t) || (t = s.from(t)), t.copy(r, i)) : Uint8Array.prototype.set.call(r, t, i);
			else if (s.isBuffer(t)) t.copy(r, i);
			else throw TypeError("\"list\" argument must be an Array of Buffers");
			i += t.length;
		}
		return r;
	};
	function y(e, t) {
		if (s.isBuffer(e)) return e.length;
		if (ArrayBuffer.isView(e) || X(e, ArrayBuffer)) return e.byteLength;
		if (typeof e != "string") throw TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + typeof e);
		let n = e.length, r = arguments.length > 2 && arguments[2] === !0;
		if (!r && n === 0) return 0;
		let i = !1;
		for (;;) switch (t) {
			case "ascii":
			case "latin1":
			case "binary": return n;
			case "utf8":
			case "utf-8": return q(e).length;
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return n * 2;
			case "hex": return n >>> 1;
			case "base64": return J(e).length;
			default:
				if (i) return r ? -1 : q(e).length;
				t = ("" + t).toLowerCase(), i = !0;
		}
	}
	s.byteLength = y;
	function b(e, t, n) {
		let r = !1;
		if ((t === void 0 || t < 0) && (t = 0), t > this.length || ((n === void 0 || n > this.length) && (n = this.length), n <= 0) || (n >>>= 0, t >>>= 0, n <= t)) return "";
		for (e ||= "utf8";;) switch (e) {
			case "hex": return M(this, t, n);
			case "utf8":
			case "utf-8": return k(this, t, n);
			case "ascii": return j(this, t, n);
			case "latin1":
			case "binary": return ne(this, t, n);
			case "base64": return O(this, t, n);
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return N(this, t, n);
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
		return e === 0 ? "" : arguments.length === 0 ? k(this, 0, e) : b.apply(this, arguments);
	}, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(e) {
		if (!s.isBuffer(e)) throw TypeError("Argument must be a Buffer");
		return this === e ? !0 : s.compare(this, e) === 0;
	}, s.prototype.inspect = function() {
		let t = "", n = e.INSPECT_MAX_BYTES;
		return t = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(), this.length > n && (t += " ... "), "<Buffer " + t + ">";
	}, r && (s.prototype[r] = s.prototype.inspect), s.prototype.compare = function(e, t, n, r, i) {
		if (X(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), !s.isBuffer(e)) throw TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof e);
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
		return a < o ? -1 : +(o < a);
	};
	function S(e, t, n, r, i) {
		if (e.length === 0) return -1;
		if (typeof n == "string" ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, Z(n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
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
			if (Z(r)) return o;
			e[n + o] = r;
		}
		return o;
	}
	function T(e, t, n, r) {
		return Y(q(t, e.length - n), e, n, r);
	}
	function E(e, t, n, r) {
		return Y(oe(t), e, n, r);
	}
	function D(e, t, n, r) {
		return Y(J(t), e, n, r);
	}
	function ee(e, t, n, r) {
		return Y(se(t, e.length - n), e, n, r);
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
			case "binary": return E(this, e, t, n);
			case "base64": return D(this, e, t, n);
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return ee(this, e, t, n);
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
	function O(e, n, r) {
		return n === 0 && r === e.length ? t.fromByteArray(e) : t.fromByteArray(e.slice(n, r));
	}
	function k(e, t, n) {
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
		return te(r);
	}
	var A = 4096;
	function te(e) {
		let t = e.length;
		if (t <= A) return String.fromCharCode.apply(String, e);
		let n = "", r = 0;
		for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += A));
		return n;
	}
	function j(e, t, n) {
		let r = "";
		n = Math.min(e.length, n);
		for (let i = t; i < n; ++i) r += String.fromCharCode(e[i] & 127);
		return r;
	}
	function ne(e, t, n) {
		let r = "";
		n = Math.min(e.length, n);
		for (let i = t; i < n; ++i) r += String.fromCharCode(e[i]);
		return r;
	}
	function M(e, t, n) {
		let r = e.length;
		(!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
		let i = "";
		for (let r = t; r < n; ++r) i += ce[e[r]];
		return i;
	}
	function N(e, t, n) {
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
	function P(e, t, n) {
		if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
		if (e + t > n) throw RangeError("Trying to access beyond buffer length");
	}
	s.prototype.readUintLE = s.prototype.readUIntLE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = this[e], i = 1, a = 0;
		for (; ++a < t && (i *= 256);) r += this[e + a] * i;
		return r;
	}, s.prototype.readUintBE = s.prototype.readUIntBE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = this[e + --t], i = 1;
		for (; t > 0 && (i *= 256);) r += this[e + --t] * i;
		return r;
	}, s.prototype.readUint8 = s.prototype.readUInt8 = function(e, t) {
		return e >>>= 0, t || P(e, 1, this.length), this[e];
	}, s.prototype.readUint16LE = s.prototype.readUInt16LE = function(e, t) {
		return e >>>= 0, t || P(e, 2, this.length), this[e] | this[e + 1] << 8;
	}, s.prototype.readUint16BE = s.prototype.readUInt16BE = function(e, t) {
		return e >>>= 0, t || P(e, 2, this.length), this[e] << 8 | this[e + 1];
	}, s.prototype.readUint32LE = s.prototype.readUInt32LE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
	}, s.prototype.readUint32BE = s.prototype.readUInt32BE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
	}, s.prototype.readBigUInt64LE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24, i = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + n * 2 ** 24;
		return BigInt(r) + (BigInt(i) << BigInt(32));
	}), s.prototype.readBigUInt64BE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e], i = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n;
		return (BigInt(r) << BigInt(32)) + BigInt(i);
	}), s.prototype.readIntLE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = this[e], i = 1, a = 0;
		for (; ++a < t && (i *= 256);) r += this[e + a] * i;
		return i *= 128, r >= i && (r -= 2 ** (8 * t)), r;
	}, s.prototype.readIntBE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || P(e, t, this.length);
		let r = t, i = 1, a = this[e + --r];
		for (; r > 0 && (i *= 256);) a += this[e + --r] * i;
		return i *= 128, a >= i && (a -= 2 ** (8 * t)), a;
	}, s.prototype.readInt8 = function(e, t) {
		return e >>>= 0, t || P(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e];
	}, s.prototype.readInt16LE = function(e, t) {
		e >>>= 0, t || P(e, 2, this.length);
		let n = this[e] | this[e + 1] << 8;
		return n & 32768 ? n | 4294901760 : n;
	}, s.prototype.readInt16BE = function(e, t) {
		e >>>= 0, t || P(e, 2, this.length);
		let n = this[e + 1] | this[e] << 8;
		return n & 32768 ? n | 4294901760 : n;
	}, s.prototype.readInt32LE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
	}, s.prototype.readInt32BE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
	}, s.prototype.readBigInt64LE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (n << 24);
		return (BigInt(r) << BigInt(32)) + BigInt(t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24);
	}), s.prototype.readBigInt64BE = Q(function(e) {
		e >>>= 0, G(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && K(e, this.length - 8);
		let r = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
		return (BigInt(r) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n);
	}), s.prototype.readFloatLE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), n.read(this, e, !0, 23, 4);
	}, s.prototype.readFloatBE = function(e, t) {
		return e >>>= 0, t || P(e, 4, this.length), n.read(this, e, !1, 23, 4);
	}, s.prototype.readDoubleLE = function(e, t) {
		return e >>>= 0, t || P(e, 8, this.length), n.read(this, e, !0, 52, 8);
	}, s.prototype.readDoubleBE = function(e, t) {
		return e >>>= 0, t || P(e, 8, this.length), n.read(this, e, !1, 52, 8);
	};
	function F(e, t, n, r, i, a) {
		if (!s.isBuffer(e)) throw TypeError("\"buffer\" argument must be a Buffer instance");
		if (t > i || t < a) throw RangeError("\"value\" argument is out of bounds");
		if (n + r > e.length) throw RangeError("Index out of range");
	}
	s.prototype.writeUintLE = s.prototype.writeUIntLE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, n >>>= 0, !r) {
			let r = 2 ** (8 * n) - 1;
			F(this, e, t, n, r, 0);
		}
		let i = 1, a = 0;
		for (this[t] = e & 255; ++a < n && (i *= 256);) this[t + a] = e / i & 255;
		return t + n;
	}, s.prototype.writeUintBE = s.prototype.writeUIntBE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, n >>>= 0, !r) {
			let r = 2 ** (8 * n) - 1;
			F(this, e, t, n, r, 0);
		}
		let i = n - 1, a = 1;
		for (this[t + i] = e & 255; --i >= 0 && (a *= 256);) this[t + i] = e / a & 255;
		return t + n;
	}, s.prototype.writeUint8 = s.prototype.writeUInt8 = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 1, 255, 0), this[t] = e & 255, t + 1;
	}, s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 65535, 0), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
	}, s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
	}, s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = e & 255, t + 4;
	}, s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
	};
	function I(e, t, n, r, i) {
		W(t, r, i, e, n, 7);
		let a = Number(t & BigInt(4294967295));
		e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a;
		let o = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, n;
	}
	function L(e, t, n, r, i) {
		W(t, r, i, e, n, 7);
		let a = Number(t & BigInt(4294967295));
		e[n + 7] = a, a >>= 8, e[n + 6] = a, a >>= 8, e[n + 5] = a, a >>= 8, e[n + 4] = a;
		let o = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[n + 3] = o, o >>= 8, e[n + 2] = o, o >>= 8, e[n + 1] = o, o >>= 8, e[n] = o, n + 8;
	}
	s.prototype.writeBigUInt64LE = Q(function(e, t = 0) {
		return I(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
	}), s.prototype.writeBigUInt64BE = Q(function(e, t = 0) {
		return L(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
	}), s.prototype.writeIntLE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, !r) {
			let r = 2 ** (8 * n - 1);
			F(this, e, t, n, r - 1, -r);
		}
		let i = 0, a = 1, o = 0;
		for (this[t] = e & 255; ++i < n && (a *= 256);) e < 0 && o === 0 && this[t + i - 1] !== 0 && (o = 1), this[t + i] = (e / a >> 0) - o & 255;
		return t + n;
	}, s.prototype.writeIntBE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, !r) {
			let r = 2 ** (8 * n - 1);
			F(this, e, t, n, r - 1, -r);
		}
		let i = n - 1, a = 1, o = 0;
		for (this[t + i] = e & 255; --i >= 0 && (a *= 256);) e < 0 && o === 0 && this[t + i + 1] !== 0 && (o = 1), this[t + i] = (e / a >> 0) - o & 255;
		return t + n;
	}, s.prototype.writeInt8 = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = e & 255, t + 1;
	}, s.prototype.writeInt16LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 32767, -32768), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
	}, s.prototype.writeInt16BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
	}, s.prototype.writeInt32LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 2147483647, -2147483648), this[t] = e & 255, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4;
	}, s.prototype.writeInt32BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || F(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
	}, s.prototype.writeBigInt64LE = Q(function(e, t = 0) {
		return I(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
	}), s.prototype.writeBigInt64BE = Q(function(e, t = 0) {
		return L(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
	});
	function R(e, t, n, r, i, a) {
		if (n + r > e.length || n < 0) throw RangeError("Index out of range");
	}
	function z(e, t, r, i, a) {
		return t = +t, r >>>= 0, a || R(e, t, r, 4, 34028234663852886e22, -34028234663852886e22), n.write(e, t, r, i, 23, 4), r + 4;
	}
	s.prototype.writeFloatLE = function(e, t, n) {
		return z(this, e, t, !0, n);
	}, s.prototype.writeFloatBE = function(e, t, n) {
		return z(this, e, t, !1, n);
	};
	function B(e, t, r, i, a) {
		return t = +t, r >>>= 0, a || R(e, t, r, 8, 17976931348623157e292, -17976931348623157e292), n.write(e, t, r, i, 52, 8), r + 8;
	}
	s.prototype.writeDoubleLE = function(e, t, n) {
		return B(this, e, t, !0, n);
	}, s.prototype.writeDoubleBE = function(e, t, n) {
		return B(this, e, t, !1, n);
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
	var V = {};
	function H(e, t, n) {
		V[e] = class extends n {
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
	H("ERR_BUFFER_OUT_OF_BOUNDS", function(e) {
		return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
	}, RangeError), H("ERR_INVALID_ARG_TYPE", function(e, t) {
		return `The "${e}" argument must be of type number. Received type ${typeof t}`;
	}, TypeError), H("ERR_OUT_OF_RANGE", function(e, t, n) {
		let r = `The value of "${e}" is out of range.`, i = n;
		return Number.isInteger(n) && Math.abs(n) > 2 ** 32 ? i = U(String(n)) : typeof n == "bigint" && (i = String(n), (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (i = U(i)), i += "n"), r += ` It must be ${t}. Received ${i}`, r;
	}, RangeError);
	function U(e) {
		let t = "", n = e.length, r = +(e[0] === "-");
		for (; n >= r + 4; n -= 3) t = `_${e.slice(n - 3, n)}${t}`;
		return `${e.slice(0, n)}${t}`;
	}
	function re(e, t, n) {
		G(t, "offset"), (e[t] === void 0 || e[t + n] === void 0) && K(t, e.length - (n + 1));
	}
	function W(e, t, n, r, i, a) {
		if (e > n || e < t) {
			let r = typeof t == "bigint" ? "n" : "", i;
			throw i = a > 3 ? t === 0 || t === BigInt(0) ? `>= 0${r} and < 2${r} ** ${(a + 1) * 8}${r}` : `>= -(2${r} ** ${(a + 1) * 8 - 1}${r}) and < 2 ** ${(a + 1) * 8 - 1}${r}` : `>= ${t}${r} and <= ${n}${r}`, new V.ERR_OUT_OF_RANGE("value", i, e);
		}
		re(r, i, a);
	}
	function G(e, t) {
		if (typeof e != "number") throw new V.ERR_INVALID_ARG_TYPE(t, "number", e);
	}
	function K(e, t, n) {
		throw Math.floor(e) === e ? t < 0 ? new V.ERR_BUFFER_OUT_OF_BOUNDS() : new V.ERR_OUT_OF_RANGE(n || "offset", `>= ${+!!n} and <= ${t}`, e) : (G(e, n), new V.ERR_OUT_OF_RANGE(n || "offset", "an integer", e));
	}
	var ie = /[^+/0-9A-Za-z-_]/g;
	function ae(e) {
		if (e = e.split("=")[0], e = e.trim().replace(ie, ""), e.length < 2) return "";
		for (; e.length % 4 != 0;) e += "=";
		return e;
	}
	function q(e, t) {
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
	function oe(e) {
		let t = [];
		for (let n = 0; n < e.length; ++n) t.push(e.charCodeAt(n) & 255);
		return t;
	}
	function se(e, t) {
		let n, r, i, a = [];
		for (let o = 0; o < e.length && !((t -= 2) < 0); ++o) n = e.charCodeAt(o), r = n >> 8, i = n % 256, a.push(i), a.push(r);
		return a;
	}
	function J(e) {
		return t.toByteArray(ae(e));
	}
	function Y(e, t, n, r) {
		let i;
		for (i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
		return i;
	}
	function X(e, t) {
		return e instanceof t || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === t.name;
	}
	function Z(e) {
		return e !== e;
	}
	var ce = (function() {
		let e = "0123456789abcdef", t = Array(256);
		for (let n = 0; n < 16; ++n) {
			let r = n * 16;
			for (let i = 0; i < 16; ++i) t[r + i] = e[n] + e[i];
		}
		return t;
	})();
	function Q(e) {
		return typeof BigInt > "u" ? le : e;
	}
	function le() {
		throw Error("BigInt not supported");
	}
})))(), Yl = async (e) => {
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
}, Xl = (e) => {
	e = atob(e);
	let t = new ArrayBuffer(e.length), n = new Uint8Array(t);
	for (let t = 0; t < e.length; t++) n[t] = e.charCodeAt(t);
	return n;
}, Zl = "data:image/#{encoding};base64,#{data}", Ql = ({ data: e, encoding: t, alt: n }) => {
	let r = Zl, [i, a] = c(void 0);
	return $(t) && (t = "png"), $(n) && (n = "ERROR"), Yl(new Blob([Xl(e)])).then((e) => {
		r = r.replace("#{encoding}", t), r = r.replace("#{data}", Jl.Buffer.from(e).toString("base64")), a(r);
	}), /* @__PURE__ */ M(Box, {
		component: "img",
		src: i,
		alt: n,
		sx: {
			width: "100%",
			height: "auto",
			display: "block",
			maxWidth: "100%"
		}
	});
}, $l = (e) => {
	let t = "", n = Object.keys(e).map((t) => {
		let n = e[t];
		return $(n) ? "" : `${encodeURIComponent(t)}=${encodeURIComponent(n)}`;
	}).filter((e) => e !== "").join("&");
	if (n) {
		let e = t.indexOf("#");
		e !== -1 && (t = t.slice(0, e)), t += (t.indexOf("?") === -1 ? "?" : "&") + n;
	}
	return t;
}, eu = (e, { baseHeaders: t, handleErr: n, handleFinally: r, debug: i } = {}) => {
	let a = {
		"Content-Type": "application/json",
		...t
	}, o = (e) => {
		console.log(e);
	}, s = ({ endpoint: t, inputHeaders: s, fetchParams: c, args: l }) => {
		$(t) && (t = "");
		let u = e + t, d = {
			...a,
			...s
		};
		Object.keys(d).forEach((e) => {
			$(d[e]) && delete d[e];
		});
		let f = {
			method: "GET",
			headers: { ...d },
			...c
		};
		return $(l) || (f.method === "POST" && (f.body = JSON.stringify(l)), f.method === "GET" && (u += $l(l))), fetch(u, f).catch((e) => n(e)).finally(() => {
			i && o({
				endpoint: t,
				inputHeaders: s,
				fetchParams: c
			}), !$(r) && r({
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
eu("http://localhost:8080/", {
	handleErr: (e) => console.log(e),
	debug: !0
});
//#endregion
//#region src/utility/api.js
var tu = ({ endpoint: e, handleErr: t, ...n }) => {
	$(t) && (t = (e) => console.log(e));
	let r = eu(e, {
		handleErr: t,
		...n
	});
	return {
		at: async (e, t) => await r.fetchJson({
			endpoint: e,
			...t
		}),
		atContainer: async (e, t) => await r.fetchContainer({
			endpoint: e,
			...t
		}),
		selectOptions: async (e) => await r.fetchJson({
			endpoint: "/select_options",
			args: e
		}),
		schema: async (e, t = {}) => await r.fetchJson({
			endpoint: "/create",
			fetchParams: {
				method: "GET",
				...t
			},
			args: e
		}),
		create: async (e, t = {}) => await r.fetchJson({
			endpoint: "/create",
			fetchParams: {
				method: "POST",
				...t
			},
			args: e
		}),
		update: async (e, t) => await r.fetchJson({
			endpoint: "/update?id=" + t,
			fetchParams: { method: "POST" },
			args: e
		}),
		list: async (e) => await r.fetchJson({
			endpoint: "/list",
			args: e
		}),
		get: async (e) => await r.fetchJson({
			endpoint: "/get",
			args: { id: e }
		}),
		deleteId: async (e) => await r.fetchJson({
			endpoint: "/delete",
			args: { id: e }
		}),
		deleteIds: async (e) => await r.fetchJson({
			fetchParams: { method: "POST" },
			endpoint: "/delete",
			args: { ...e }
		}),
		endpoint: () => e
	};
}, nu = (e, t) => () => e.get(t), ru = ({ jsxKey: e, endpoint: t, inputProps: n }) => {
	let [r, a] = c([/* @__PURE__ */ M("option", {
		value: n.defaultValue,
		children: n.defaultValue
	}, e + "-" + n.defaultValue)]), o = tu({ endpoint: t });
	return i(() => {
		o.selectOptions().then((t) => {
			a(Object.keys(t).map((n) => {
				let r = t[n][Object.keys(t[n])[1]], i = t[n][Object.keys(t[n])[0]];
				return /* @__PURE__ */ M("option", {
					value: i,
					children: r
				}, e + "-" + n);
			}));
		});
	}, []), /* @__PURE__ */ M(w, {
		...n,
		defaultValue: n.defaultValue,
		children: [...r || /* @__PURE__ */ M(ne, {})]
	}, e);
}, iu = () => {
	let e = {
		position: "sticky",
		zIndex: 2,
		backgroundColor: "white"
	}, t = {
		position: "sticky",
		width: "100%",
		zIndex: 3,
		backgroundColor: "#191E23 !important"
	};
	return {
		"& .MuiDataGrid-columnHeader-last": {
			width: "100%",
			flex: 2
		},
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
		"& .MuiDataGrid-main": { overflow: "auto" },
		"&": {
			width: "100%",
			display: "flex"
		}
	};
}, au = ({ data: e, ...t }) => {
	let n = _l(), [r, a] = c({
		rows: [],
		columns: []
	});
	return i(() => {
		(async () => {
			let t = n?.get("key_value_grid");
			if (!t) return;
			let r = { current: { ...t } };
			Ru(r), zu(r, e), a({
				rows: [...Vu(r)],
				columns: [...Uu(r)]
			}), await rd(r);
		})();
	}, [e, n]), /* @__PURE__ */ M(cd, {
		register_component: !0,
		datagrid_sx: iu(),
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
}, ou = ({ data: e, ...t }) => {
	let n = _l(), [r, a] = c({
		rows: [],
		columns: []
	});
	return i(() => {
		(async () => {
			let t = n?.get("sub_grid");
			if (!t) return;
			let r = { current: { ...t } }, i = Hl(null, [], ".", e);
			Lu(r, i), Bu(r, i), a({
				rows: [...Hu(r)],
				columns: [...Wu(r)]
			}), await rd(r);
		})();
	}, [e, n]), /* @__PURE__ */ M(cd, {
		register_component: !0,
		datagrid_sx: iu(),
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
		refKey: "sub_grid"
	});
}, su = ({ buttons: e, endpoint: t, title: n, title_topology_params: r, button_stack_params: i, header_stack_params: a, outer_stack_params: o, ...s }) => {
	let c = e?.map((e) => e);
	return /* @__PURE__ */ N(T, {
		direction: "column",
		spacing: 1,
		sx: {
			width: "100%",
			justifyContent: "flex-start",
			alignItems: "center"
		},
		...o,
		children: [/* @__PURE__ */ N(T, {
			direction: "row",
			...a,
			children: [/* @__PURE__ */ M(te, {
				variant: "h6",
				sx: {
					m: 2,
					whiteSpace: "nowrap",
					overflow: "hidden",
					textOverflow: "ellipsis"
				},
				...r,
				children: n
			}), /* @__PURE__ */ M(T, {
				direction: "row",
				spacing: 2,
				sx: {
					pr: 16,
					pl: 16,
					justifyContent: "flex-end",
					width: "20%",
					alignItems: "center"
				},
				...i,
				children: c
			})]
		}), /* @__PURE__ */ M(cd, {
			...s,
			endpoint: t
		})]
	});
}, cu = () => {
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
}, lu = ({ api: e, endpoint: t, refKey: n, register_component: r, ...a }) => {
	let o = _l();
	return i(() => {
		(async () => {
			let e = o?.get(n);
			if (!e) return;
			let t = { current: { ...e } };
			qu({ current: e }, { id: 17 }), await rd(t);
		})();
	}, [o]), /* @__PURE__ */ M(su, {
		api: e,
		endpoint: "get_paginated",
		buttons: [],
		title: "",
		refKey: n,
		register_component: r,
		...a
	});
}, uu = ({ jsxKey: e, key: t, inputProps: n }) => {
	let r;
	return t.charAt(t.length - 1) === "D" && t.charAt(t.length - 2) === "I" || t.charAt(t.length - 1) === "S" && t.charAt(t.length - 2) === "D" ? (t.charAt(t.length - 1) === "D" && t.charAt(t.length - 2) === "I" && (r = t.slice(5, t.length - 2)), t.charAt(t.length - 1) === "S" && t.charAt(t.length - 2) === "D" && (r = t.slice(5, t.length - 3), n = {
		...n,
		multiple: !0
	}), /* @__PURE__ */ M(ru, {
		endpoint: r,
		jsxKey: e,
		inputProps: n
	})) : null;
}, du = () => ({ formRef: e, jsxKey: t, key: n, currentType: r, inputProps: i }) => {
	let a = uu({
		jsxKey: t,
		key: n,
		inputProps: i
	});
	if (!$(a)) return a;
	if (a = /* @__PURE__ */ M(b, {
		type: "text",
		...i
	}, t), r === "number" || r === "bigint") return /* @__PURE__ */ M(b, {
		type: "number",
		...i
	}, t);
	if (r === "boolean") return /* @__PURE__ */ M(E, {
		...i,
		defaultChecked: i.defaultValue
	}, t);
	if (r === "object") {
		if (i.defaultValue.Subtype === 20) return /* @__PURE__ */ M(ou, { data: Ll(gu(e), n.slice(0, n.lastIndexOf(".")))?.value.Data }, t);
		if (i.defaultValue.Subtype === 19) return /* @__PURE__ */ M(au, { data: Ll(gu(e), n.slice(0, n.lastIndexOf(".")))?.value.Data }, t);
		if (i.defaultValue.Subtype === 17) return /* @__PURE__ */ M(Ql, { data: Ll(gu(e), n.slice(0, n.lastIndexOf(".")))?.value.Data }, t);
		if (i.defaultValue.Subtype === 16 || i.defaultValue.Subtype === 0) {
			let r = Ll(gu(e), n.slice(0, n.lastIndexOf(".")));
			return i.name = n.slice(0, n.lastIndexOf(".")) + ".Data", /* @__PURE__ */ M(Gl, {
				fileData: JSON.stringify(r?.value.Data, null, 2),
				inputProps: i,
				subtype: i.defaultValue.Subtype
			}, t);
		}
		if (!$(i.defaultValue.Subtype) || !$(i.defaultValue.Data)) return null;
		if (Array.isArray(i.defaultValue)) return Object.keys(i.defaultValue).map((e) => /* @__PURE__ */ M(b, {
			type: "text",
			...i,
			defaultValue: i.defaultValue[e]
		}, t));
		if ($(i.defaultValue)) return;
		let r = Object.keys(i.defaultValue)[0], a = i.defaultValue[r];
		return Tl(a) ? /* @__PURE__ */ M(Ul, {
			inputKey: n,
			inputProps: i
		}) : void 0;
	}
	return a;
}, fu = (e, t = {}) => ({
	index: 0,
	elements: {},
	nameIndex: {},
	labels: {},
	useLabels: {},
	element_component: {},
	container: void 0,
	handleOnClose: void 0,
	elementSelector: e || du(),
	context: t
}), pu = (e) => {
	e.current.handleOnClose();
}, mu = (e, t) => {
	let n = e.current;
	n.handleClose = t, e.current = n;
}, hu = (e, t) => {
	let n = e.current;
	$(n) || (n.container = t), e.current = n;
}, gu = (e) => e.current.container, _u = (e, t) => {
	let n = e.current, r = n.labels[t], i = n.element_component[t];
	return n.useLabels[t] ? /* @__PURE__ */ N(T, {
		direction: "column",
		spacing: 1,
		sx: {
			width: "100%",
			pb: 1
		},
		children: [/* @__PURE__ */ M(u, {
			sx: { width: "100%" },
			children: r
		}), /* @__PURE__ */ M(u, {
			sx: { width: "100%" },
			children: i
		})]
	}, t) : /* @__PURE__ */ N(T, {
		direction: "row",
		gap: 1,
		sx: {
			justifyContent: "space-between",
			width: "100%",
			borderBottom: "1px solid rgba(0, 0, 0, 0.42)",
			pb: .5,
			alignItems: "flex-end"
		},
		children: [/* @__PURE__ */ M(u, {
			sx: {
				width: "50%",
				flexShrink: 0
			},
			children: r
		}), /* @__PURE__ */ M(u, {
			sx: { flexGrow: 1 },
			children: i
		})]
	}, t);
}, vu = (e) => {
	let t = {};
	return Object.keys(e.current.nameIndex).map((n, r) => {
		t[n] = _u(e, r);
	}), /* @__PURE__ */ M(T, {
		direction: "column",
		gap: 0,
		sx: {
			flexGrow: 1,
			width: "100%"
		},
		children: Object.keys(t).map((e) => t[e])
	});
}, yu = (e) => {
	let t = e.current;
	return { onChange: (n) => {
		let r = n.target.value, i = n.target.selectedOptions;
		if (!$(i)) {
			let e = [].slice.call(i);
			r = e.map((e) => e.value), e.length === 1 && (r = r[0]);
		}
		n.target.type === "datetime-local" && (r = new Date(Date.parse(r)).toISOString());
		let a = n.target.name, o = t.nameIndex[a];
		$(o) && (t.nameIndex[a] = t.index, o = t.index, e.current = t), t.elements[o] = r;
		let s = a.split("."), c = s.slice(0, s.length - 1).join("."), l = s.slice(s.length - 1);
		$(Ll(gu(e), c)) && (c = s.slice(0, s.length - 2).join(".")), n.target.type === "checkbox" && (r = n.currentTarget.checked), e.current = t, hu(e, Vl(gu(e), c, l, r)), e.current = t;
	} };
}, bu = (e, t) => {
	let n = e.current, r = n.nameIndex[t];
	return n.elements[r];
}, xu = (e, t, n) => {
	let r = typeof n, i = e.current, a = t + i.index, o = {
		name: t,
		defaultValue: bu(e, t),
		onChange: yu(e).onChange,
		sx: { width: "100%" }
	};
	return i.elementSelector({
		key: t,
		formRef: e,
		jsxKey: a,
		currentType: r,
		inputProps: o
	});
}, Su = (e, t, n) => {
	let r = e.current, i = El(t.replace(/root\./, ""), "_"), a = i.split(".");
	if (!a.some((e) => e.toLowerCase() === "data")) {
		if ($(r.nameIndex[t])) {
			r.nameIndex[t] = r.index, r.elements[r.index] = n;
			let o = xu(e, t, n);
			if (!$(o)) {
				let e = a[a.length - 1], n = e.toLowerCase() === "subtype", s = /^\d+$/.test(e);
				r.useLabels[r.index] = n || !s;
				let c = i;
				n && a.length > 1 && (c = a[a.length - 2]), r.labels[r.index] = /* @__PURE__ */ M(S, {
					column: t,
					children: c
				}, "Label" + t + r.index), r.element_component[r.index] = o, r.index++;
			}
		}
		e.current = r;
	}
}, Cu = (e, t) => e.current.nameIndex[t], wu = (e, t) => {
	let n = e.current;
	delete n.labels[Cu(e, t)], e.current = n;
}, Tu = ({ formRef: e, container: t }) => {
	zl(t, (t) => {
		let n = t.path, r = t.value;
		if (Array.isArray(r)) {
			let t = [];
			Object.keys(r).forEach((e) => {
				$(r[e]) || Array.isArray(r[e]) || t.push(r[e]);
			}), t.length > 0 && Su(e, n, t);
			return;
		}
		Object.keys(r).forEach((t) => {
			$(r[t]) || (typeof r[t] == "object" && Object.keys(r[t]).forEach((i) => {
				let a = {};
				a[i] = r[t][i], Su(e, n + "." + t + "." + i, a);
			}), Tl(r[t]) && Su(e, n + "." + t, r[t]));
		});
	});
}, Eu = ({ title: e, button_title: t, getButton: n, tabs: r, getSchema: i, handleSave: o, elementSelector: l, footerButtons: f, refKey: p, register_component: m = !1, context: h = null }) => {
	let g = yl(p, m), _ = s(null), [v, y] = c(!1), b = () => {
		y(!1);
	}, x = () => {
		o(gu(_).value), y(!1);
	};
	_.current ||= fu(l, {
		setShow: (e) => {
			y(e);
		},
		...h
	}), a(() => (g(_.current), () => g(null)), [g]);
	let [S, C] = c(void 0), [w, E] = c(0), O = async () => {
		try {
			hu(_, Hl(null, [], ".", await i())), mu(_, b), Tu({
				formRef: _,
				container: gu(_)
			}), C(vu(_)), y(!0);
		} catch (e) {
			console.error("Failed to load schema:", e);
		}
	};
	return f ||= [
		/* @__PURE__ */ M(d, {
			onClick: () => {
				let e = {};
				e[_.current.index] = "";
				let t = gu(_);
				$(Ll(t, "root.fields")) && hu(_, Pl(t, "root.fields", {})), Su(_, "root.fields." + _.current.index, e), C(vu(_));
			},
			children: "Add Field"
		}),
		/* @__PURE__ */ M(d, {
			onClick: x,
			children: "Save"
		}),
		/* @__PURE__ */ M(d, {
			onClick: b,
			children: "Close"
		})
	], /* @__PURE__ */ N(T, {
		direction: "row",
		spacing: 1,
		children: [n ? n(O) : /* @__PURE__ */ M(d, {
			onClick: O,
			children: t
		}), /* @__PURE__ */ M(wl, {
			title: e,
			body: /* @__PURE__ */ N(u, {
				sx: { width: "100%" },
				children: [
					r && /* @__PURE__ */ M(u, {
						sx: {
							borderBottom: 1,
							borderColor: "divider"
						},
						children: /* @__PURE__ */ N(ee, {
							value: w,
							onChange: (e, t) => E(t),
							"aria-label": "custom tabs",
							children: [/* @__PURE__ */ M(D, { label: "File Upload" }), /* @__PURE__ */ M(D, { label: "File Viewer" })]
						})
					}),
					w === 0 && /* @__PURE__ */ M(u, {
						sx: {
							borderBottom: 1,
							borderColor: "divider",
							width: "100%"
						},
						children: S
					}),
					w === 1 && /* @__PURE__ */ M(u, {
						sx: { p: 3 },
						children: /* @__PURE__ */ M("pre", { children: JSON.stringify(gu(_)?.value, null, 2) })
					})
				]
			}),
			show: v,
			footer: f
		})]
	});
}, Du = ({ title: e, show: t, onCancel: n, onConfirm: r }) => /* @__PURE__ */ M(wl, {
	title: e || "Are you sure?",
	show: t,
	footer: /* @__PURE__ */ N(T, {
		direction: "column",
		gap: 3,
		children: [/* @__PURE__ */ M(d, {
			onClick: () => {
				$(n) || n();
			},
			children: "Cancel"
		}), /* @__PURE__ */ M(d, {
			onClick: () => {
				$(r) || r();
			},
			children: "Confirm"
		})]
	})
}), Ou = ({ refreshGrid: e, api: t, ...n }) => /* @__PURE__ */ M(Eu, {
	title: "Create",
	getSchema: t.schema,
	handleSave: (n) => {
		t.create(n).then(() => e());
	},
	...n
}), ku = ({ refreshGrid: e, api: t, id: n, title: r, footerButtons: i, ...a }) => /* @__PURE__ */ M(Eu, {
	title: r,
	button_title: "Update",
	getSchema: nu(t, n),
	handleSave: (r) => {
		t.update(r, n).then(() => e());
	},
	footerButtons: i,
	register_component: !0,
	refKey: String(n),
	...a
}), Au = ({ refreshGrid: e, api: t, handleSelectedIds: n }) => {
	let [r, i] = c(!1);
	return /* @__PURE__ */ N(T, {
		direction: "horizontal",
		spacing: 2,
		sx: {
			width: "100%",
			justifyContent: "center",
			alignItems: "center"
		},
		children: [/* @__PURE__ */ M(d, {
			onClick: () => {
				i(!r);
			},
			children: "Delete"
		}), /* @__PURE__ */ M(Du, {
			onConfirm: () => {
				t.deleteIds(n()).then(e()), i(!1);
			},
			show: r
		})]
	});
}, ju = ({ refreshGrid: e, api: t, id: n }) => {
	let [r, i] = c(!1);
	return /* @__PURE__ */ N(T, {
		direction: "row",
		spacing: 1,
		sx: {
			width: "100%",
			justifyContent: "center",
			alignItems: "center"
		},
		children: [/* @__PURE__ */ M(d, {
			onClick: () => {
				i(!r);
			},
			children: "Delete"
		}), /* @__PURE__ */ M(Du, {
			onConfirm: () => {
				t.deleteId(n).then(e());
			},
			show: r
		})]
	});
}, Mu = ({ handleRefreshGrid: e, api: t, id: n, params: r }) => {
	let i = {
		...r,
		refreshGrid: e,
		api: t,
		id: n
	};
	return /* @__PURE__ */ N(T, {
		direction: "row",
		spacing: 1,
		sx: {
			width: "100%",
			justifyContent: "center",
			alignItems: "center"
		},
		children: [/* @__PURE__ */ M(ku, { ...i }), /* @__PURE__ */ M(ju, { ...i })]
	});
}, Nu = (e, t) => {
	let n = e.current;
	n && (n.endpoint = t);
}, Pu = (e) => e.current.endpoint, Fu = (e) => e.current.api, Iu = (e, t) => {
	e.current && (e.current.api = t);
}, Lu = (e, t) => {
	let n = e.current;
	Bl(t, (e) => {
		let t = e.value, r = e.path, i = typeof t;
		if (n.headers_ri[r] !== void 0) return;
		let a = "string";
		i === "number" ? a = "number" : r.toLowerCase().includes("date") || r.toLowerCase().includes("modified") ? a = "date" : i === "string" && (a = "string"), n.headers[n.index] = {
			field: r,
			type: a,
			headerName: r
		}, n.rows[n.index] = [], n.headers_ri[r] = n.index, n.index++;
	}), e.current = n;
}, Ru = (e) => {
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
}, zu = (e, t) => {
	let n = e.current;
	if (!n) return;
	n.rows = [[], []], n.row_count = 0;
	let r = n.headers_ri.Field, i = n.headers_ri.Value;
	Object.entries(t).forEach(([e, t]) => {
		if (r !== void 0 && n.rows[r].push(El(e, "_")), i !== void 0) {
			let e = Array.isArray(t) ? t.join(", ") : t;
			n.rows[i].push(e);
		}
		n.row_count++;
	}), e.current = n;
}, Bu = (e, t) => {
	let n = e.current;
	n && (n.rows = [], n.row_count = 0, n.headers.forEach(() => {
		n.rows.push([]);
	}), Bl(t, (e) => {
		if (Tl(e.value)) {
			let t = n.headers_ri[e.path];
			t !== void 0 && n.rows[t].push(e.value);
		}
	}), e.current = n);
}, Vu = (e) => {
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
}, Hu = (e) => {
	let t = e.current;
	if (!t || !t.rows || t.rows.length === 0) return [];
	let n = t.rows[0].length;
	return Array.from({ length: n }).map((e, n) => {
		let r = {};
		return t.headers.forEach((e, i) => {
			let a = t.rows[i];
			r[e.field] = a ? a[n] : null;
		}), r.id = r.id = r.id ?? n + 1, r;
	});
}, Uu = (e) => {
	let t = e.current;
	return !t || !t.headers ? [] : t.headers;
}, Wu = (e) => {
	let t = e.current, n = Object.keys(t.headers_ri).map((e) => ({
		field: e,
		sortable: !0,
		filterable: !0,
		headerName: El(e.split(".").pop(), "_"),
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
			renderCell: od(e)
		}, r = Math.max(0, n.length - 1);
		n.splice(r, 0, t);
	}
	return n;
}, Gu = (e) => e.current.paginationModel, Ku = (e, t) => {
	let n = e.current;
	n && (n.args = t, e.current = n, n.refresh());
}, qu = (e, t) => {
	let n = e.current;
	n && (n.args = {
		...n.args,
		...t
	}, e.current = n, n.refresh());
}, Ju = (e, t) => {
	let n = e.current;
	n && (n.args.sortModel = JSON.stringify(t), e.current = n);
}, Yu = (e, t) => {
	let n = e.current;
	n && (n.args.filterModel = JSON.stringify(t), e.current = n);
}, Xu = (e, t) => () => {
	let n = e.current;
	n && (n.paginationModel = t, n.args.paginationModel = JSON.stringify(t), e.current = n);
}, Zu = (e, t) => {
	let n = e.current;
	n && (n.fetch_params = t, e.current = n);
}, Qu = (e) => e.current.fetch_params, $u = (e, t) => ({ getRows: async (n) => {
	let r = e.current;
	if (!r) return {
		rows: [],
		rowCount: 0
	};
	Yu(e, n.filterModel), Ju(e, n.sortModel);
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
		Array.isArray(t) && t.length === 0 || $(t) || (s[e] = t);
	}), $(n.sortModel) || Array.isArray(n.sortModel) && n.sortModel.length === 0 && delete s.sortModel, $(n.filterModel) || Array.isArray(n.filterModel.items) && n.filterModel.items.length === 0 && delete s.filterModel;
	let c = await r.api?.at("/" + r.endpoint, {
		fetchParams: {
			method: "GET",
			...Qu(e)
		},
		args: s
	}), l = Hl(null, [], ".", c.results);
	return Lu(e, l), Bu(e, l), r.row_count = c.pagination?.total || 0, e.current = r, t(), {
		rows: Hu(e),
		rowCount: c.pagination?.total || 0
	};
} }), ed = (e, t) => {
	let n = e.current;
	n && (n.args.search = t, e.current = n);
}, td = async (e, t) => {
	let n = e.current;
	n && (n.datasource = t, e.current = n, await rd(e));
}, nd = (e) => e.current?.datasource, rd = async (e) => {
	let t = e.current;
	if (!t) return;
	let n = t.gridRef.current;
	n.dataSource.cache.clear(), await n.dataSource.fetchRows(), t.refresh();
}, id = (e) => (t) => {
	let n = e.current;
	if (!n || n.rows.length === 0) return;
	let r = t.ids, i = n.rows[0].length, a = Array.from({ length: i }, (e, t) => t).filter((e) => {
		let t = n.rows[0][e];
		return r.has(t);
	});
	n.selected_data = n.rows.map((e) => a.map((t) => e[t])), n.selected_ids = t, e.current = n;
}, ad = (e, t) => {
	let n = e.current;
	n && (n.cellRenderer = t, e.current = n);
}, od = (e) => {
	let t = e.current;
	if (t) return t.cellRenderer ? t.cellRenderer(e) : sd(e);
}, sd = (e) => {
	let t = _l();
	return (n) => {
		let r = e.current;
		if (!r) return;
		let i = (e = !1) => {
			let r = t?.get(String(n.id))?.context;
			if (!r) return;
			let i = r.setShow;
			i(e);
		}, a = /* @__PURE__ */ N(T, {
			direction: "column",
			spacing: 2,
			sx: { width: "100%" },
			children: [/* @__PURE__ */ N(T, {
				spacing: 3,
				direction: "row",
				children: [
					/* @__PURE__ */ M(u, {
						sx: { ...r.modal_header_sx },
						children: "Update"
					}),
					/* @__PURE__ */ M(u, { sx: { flexGrow: 1 } }, "spacer"),
					/* @__PURE__ */ M(y, {
						onClick: () => i(!1),
						sx: {
							backgroundColor: "black",
							color: "white"
						},
						children: /* @__PURE__ */ M(K, {})
					})
				]
			}), /* @__PURE__ */ M(T, {
				spacing: 3,
				direction: "row",
				children: Object.entries(r.modal_header_rows || []).map((e) => e)
			})]
		});
		return /* @__PURE__ */ M(Mu, {
			params: {
				footerButtons: [
					/* @__PURE__ */ M(d, {
						onClick: () => i(!1),
						children: "Close"
					}),
					/* @__PURE__ */ M(u, { sx: { flexGrow: 1 } }, "spacer"),
					/* @__PURE__ */ M(d, { children: "Update" })
				],
				title: a,
				...n.row
			},
			handleRefreshGrid: async () => await rd(e),
			api: r.api,
			id: n.id
		});
	};
}, cd = ({ api: e, endpoint: t, row_details: n, refKey: r, cellRenderer: i, register_component: o = !1, toolbar: l = !1, checkbox_select: u = !1, datagrid_sx: d = void 0, grid_options: f = void 0, context: p = void 0 }) => {
	let m = yl(r, o), h = s(null), [, g] = c(!1), [_, v] = c({
		page: 0,
		pageSize: 25
	}), [y, b] = c(0), [x, S] = c({ id: !1 }), C = I(), w = () => {
		h.current && b(h.current?.row_count ?? 0), g((e) => !e);
	};
	return h.current ||= {
		context: p,
		gridRef: C,
		index: 0,
		headers: [],
		headers_ri: {},
		rows: [],
		row_count: t ? 0 : void 0,
		datasource: t ? $u(h, w) : void 0,
		paginationModel: {
			page: 0,
			pageSize: 5
		},
		args: {},
		selected_data: [],
		selected_ids: null,
		refresh: w,
		cellRenderer: i,
		filter_model: null,
		api: e,
		row_details: n,
		fetch_params: null,
		endpoint: t,
		register_component: o,
		refKey: r,
		modal_title: null,
		modal_header_rows: null,
		modal_header_sx: null,
		modal_header_row: null,
		...f
	}, a(() => (m(h.current), () => m(null)), [m]), /* @__PURE__ */ M(P, {
		apiRef: C,
		disableVirtualization: !0,
		columnVisibilityModel: x,
		onColumnVisibilityModelChange: (e) => S(e),
		rowCount: y,
		sx: {
			width: "100%",
			...d
		},
		columns: Wu(h),
		dataSource: nd(h),
		pageSizeOptions: [
			25,
			50,
			100
		],
		paginationModel: _,
		onPaginationModelChange: (e) => {
			v(e);
		},
		onRowSelectionModelChange: (e) => id(h)(e),
		paginationMode: "server",
		sortingMode: "server",
		filterMode: "server",
		autosizeOnMount: !0,
		autosizeOptions: {
			includeOutliers: !0,
			includeHeaders: !0
		},
		checkboxSelection: u,
		showToolbar: l,
		getRowId: (e) => e.id,
		onDataSourceError: (e) => {
			console.error("DataGrid Error Type:", e.name), console.error("DataGrid Error Message:", e.message), e.cause && (console.group("Original Error Cause"), console.error("Message:", e.cause.message), console.error("Stack:", e.cause.stack), console.groupEnd()), e instanceof F ? console.warn("Fetch failed. Check your API mock or network.") : console.warn("Row update failed.");
		},
		...f
	});
}, ld = ({ loading: e, value: t }) => /* @__PURE__ */ M(u, {
	sx: {
		position: "relative",
		display: "inline-flex"
	},
	children: /* @__PURE__ */ N(x, {
		position: "end",
		children: [e && /* @__PURE__ */ M(f, {
			sx: { color: "#ff0000" },
			variant: "determinate",
			value: t
		}), /* @__PURE__ */ M(u, {
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
			children: /* @__PURE__ */ M(te, {
				variant: "caption",
				component: "div",
				sx: { color: "text.secondary" },
				children: `${Math.round(t)}%`
			})
		})]
	})
}), ud = ({ ...e }) => /* @__PURE__ */ M(y, {
	...e,
	children: /* @__PURE__ */ M(q, {})
}), dd = (e, t) => {
	let n = e.current;
	n && (n.setProgressValue(t), n.progressValue = t, e.current = n);
}, fd = (e) => !e || !e.current ? 1 : e.current.progressValue, pd = (e, t) => {
	let n = e.current;
	n && n.handleToggle(t);
}, md = ({ refKey: e, register_component: t, hidden: r, onDropSuccess: i, onSend: o, textFieldSx: l, textFieldProps: u, sendButtonProps: d }) => {
	let [f, p] = c(""), [m, h] = c(!1), [g, _] = c(0), v = yl(e, t), b = s({
		handleToggle: (e) => {
			h(e);
		},
		progressValue: 0,
		getText: () => f,
		setProgressValue: _
	}), { getRootProps: S, getInputProps: C, open: w } = ie({
		onDrop: n((e) => {
			if (e.length > 0) {
				let t = b.current;
				h(!0), t.setProgressValue = _, i(b, e), b.current = t;
			}
		}, [i]),
		noClick: !0,
		noKeyboard: !0,
		multiple: !1
	});
	a(() => (v(b.current), () => v(null)), [v]);
	let { ref: T, ...E } = S(), D = m ? /* @__PURE__ */ M(ld, {
		loading: !0,
		value: g
	}) : /* @__PURE__ */ M(ud, {
		onClick: o(b),
		sx: { color: g === 100 ? "red" : "inherit" },
		...d
	});
	return /* @__PURE__ */ M(O, {
		variant: "outlined",
		value: f,
		onChange: (e) => {
			let t = e.target.value;
			/^[0-9,]*$/.test(t) && p(t);
		},
		placeholder: "3186815,3192062,3107146,3192072....",
		slotProps: { input: {
			...E,
			inputRef: T,
			startAdornment: /* @__PURE__ */ N(x, {
				position: "start",
				children: [/* @__PURE__ */ M("input", { ...C() }), /* @__PURE__ */ M(y, {
					onClick: w,
					children: /* @__PURE__ */ M(ae, {})
				})]
			}),
			endAdornment: D
		} },
		sx: {
			width: "100%",
			display: r ? "none" : "flex",
			...l
		},
		...u
	});
}, hd = (e, t) => {
	let n = e.current;
	n && (n.onFilesSelected = t.onFilesSelected, e.current = n);
}, gd = (e, t) => {
	let n = e.current;
	n && (n.paper_props = t.paper_props, e.current = n);
}, _d = (e, t) => {
	let n = e.current;
	n && (n.box_props = t.box_props, e.current = n);
}, vd = (e, t) => {
	let n = e.current;
	n && (n.input_elem = t.input_elem, e.current = n);
}, yd = (e, t) => {
	let n = e.current;
	n && (n.icon_elem = t.icon_elem, e.current = n);
}, bd = (e, t) => {
	let n = e.current;
	n && (n.typography = t.typography, e.current = n);
}, xd = (e) => {
	let t = e.current;
	if (t) return { ...t.paper_props };
}, Sd = (e) => {
	let t = e.current;
	if (t) return t.box_props;
}, Cd = (e, t) => {
	let n = e.current;
	if (n) return n.input_elem(t);
}, wd = (e) => e.current.icon_elem(), Td = (e) => e.current.typography(), Ed = (e) => {
	let t = s(null), r = n((t) => {
		e.onFilesSelected && e.onFilesSelected(t);
	}, [e.onFilesSelected]), { getRootProps: i, getInputProps: a, isDragActive: o } = ie(e.dropzone_options);
	return t.current ||= ((t) => ({
		onFilesSelected: e.onFilesSelected,
		paper_props: e.paper_props || {
			variant: "outlined",
			sx: {
				p: 4,
				textAlign: "center",
				cursor: "pointer",
				border: "2px dashed",
				borderColor: t ? "primary.main" : "text.disabled",
				backgroundColor: t ? "action.hover" : "background.paper",
				transition: "all 0.2s ease-in-out",
				"&:hover": {
					borderColor: "primary.main",
					backgroundColor: "action.hover"
				},
				outline: "none"
			}
		},
		box_props: e.box_props || { sx: {
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			gap: 1
		} },
		icon_elem: e.icon_elem || (() => /* @__PURE__ */ M(ae, { sx: {
			fontSize: 48,
			color: t ? "primary.main" : "text.secondary"
		} })),
		input_elem: e.input_elem || ((e) => /* @__PURE__ */ M("input", { ...e })),
		dropzone_options: e.dropzone_options || {
			onDrop: r,
			accept: {
				"image/*": [
					".jpeg",
					".jpg",
					".png"
				],
				"application/pdf": [".pdf"]
			},
			multiple: !0
		},
		typography: e.typography || (() => t ? /* @__PURE__ */ M(te, {
			color: "primary.main",
			variant: "h6",
			children: "Drop the files here..."
		}) : /* @__PURE__ */ M(ne, { children: /* @__PURE__ */ M(te, {
			variant: "h6",
			color: "text.primary",
			children: "Drag & drop files here, or click to select"
		}) }))
	}))(o), /* @__PURE__ */ N(C, {
		...xd(t),
		...i(),
		children: [Cd(t, a()), /* @__PURE__ */ N(u, {
			...Sd(t),
			children: [wd(t), Td(t)]
		})]
	});
}, Dd = ({ children: e }) => /* @__PURE__ */ N(u, {
	sx: { width: "100%" },
	children: [
		/* @__PURE__ */ M(bl, {
			refKey: "appbar",
			register_component: !0
		}),
		e,
		/* @__PURE__ */ M(xl, {})
	]
}), Od = ({ children: e }) => {
	let t = s({}), n = o(() => ({
		register: (e, n) => {
			t.current[e] = n;
		},
		unregister: (e) => {
			delete t.current[e];
		},
		get: (e) => t.current[e] || null,
		registry: () => t.current
	}), []);
	return /* @__PURE__ */ M(gl.Provider, {
		value: n,
		children: e
	});
}, kd = j({
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
}), Ad = ({ children: e, theme: t }) => {
	let n = kd;
	return t || (n = kd), /* @__PURE__ */ M(Od, { children: /* @__PURE__ */ N(k, {
		theme: n,
		children: [/* @__PURE__ */ M(m, {}), /* @__PURE__ */ M(Dd, { children: /* @__PURE__ */ M(T, {
			direction: "column",
			sx: {
				width: "100%",
				justifyContent: "center",
				alignItems: "center"
			},
			children: e
		}) })]
	}) });
}, jd = (e, t, n) => {
	let r = e.current;
	r && (r.state[t] = n, e.current = r);
}, Md = ({ tables: e, compare: t, ...n }) => {
	let r = _l(), i = s({ state: {} }), a = (e) => (t) => {
		let n = r?.get(e), a = Array.from(t.ids), o = n?.gridRef.current, s = a.map((e) => o?.getRow(e));
		jd(i, e, JSON.stringify(s));
	}, o = () => {
		let e = i.current;
		t(e.state);
	};
	return /* @__PURE__ */ N(T, {
		direction: "column",
		sx: {
			width: "100%",
			justifyContent: "center",
			alignItems: "center"
		},
		...n.outside_stack_params,
		children: [/* @__PURE__ */ M(d, {
			onClick: o,
			children: "Compare"
		}, 0), /* @__PURE__ */ M(T, {
			direction: "row",
			spacing: 2,
			sx: {
				width: "100%",
				justifyContent: "center",
				alignItems: "center"
			},
			...n.inside_stack_params,
			children: /* @__PURE__ */ M(ne, { children: e.map((e) => ($(e.props.grid_options) && (e.props.grid_options = { onRowSelectionModelChange: a(e.props.refKey) }), /* @__PURE__ */ M(e.table, { ...e.props }))) })
		})]
	});
}, Nd = (e) => {
	let [t, n] = c(""), r = Zs(), i = async (e) => {
		let i = { current: r?.get(t) }, a = e.target.value;
		cl(i, a), n(e.target.value), await ul(i);
	}, a = () => e.input_elem || /* @__PURE__ */ M(b, {
		value: t,
		...e.input_props,
		onChange: i
	}), o = {
		value: t,
		...e.input_props,
		onChange: i
	};
	return /* @__PURE__ */ N(T, {
		sx: {
			justifyContent: "center",
			alignItems: "center"
		},
		direction: "column",
		...e.stack_props,
		children: [/* @__PURE__ */ M(a, { ...o }), /* @__PURE__ */ M(jc, {
			button_stack_params: { sx: {
				justifyContent: "flex-end",
				alignItems: "center",
				width: "100%"
			} },
			header_stack_params: { sx: {
				justifyContent: "flex-start",
				alignItems: "center",
				width: "100%"
			} },
			toolbar: !1,
			checkbox_select: !0,
			row_details: !1,
			api: e.api,
			endpoint: e.endpoint,
			title: t,
			refKey: t,
			datagrid_sx: e.grid_sx,
			register_component: !0
		})]
	});
};
//#endregion
export { Su as AddElement, tu as Api, Sl as ApiButton, hl as AppController, Fl as AppendChildren, Hl as BuildContainerTree, Cl as CenteredContainer, wl as CenteredModal, pu as Close, Md as CompareTables, Ou as Create, cu as CsvDatagridSx, lu as CsvGrid, $u as DataSourceWrapper, Gl as DataViewer, iu as DatagridSx, ju as Delete, wu as DeleteLabel, Au as DeleteMany, Mu as EditCellRenderer, au as FieldValueGrid, Ed as FileUpload, Fu as GetApi, Sd as GetBoxProps, od as GetCellRenderer, jl as GetChildren, gu as GetContainer, nd as GetDatasource, Cu as GetElementIndex, xu as GetElementTypes, bu as GetElementValue, vu as GetElements, Pu as GetEndpoint, Qu as GetFetchParams, Wu as GetHeaders, wd as GetIconElem, Cd as GetInputElem, Vu as GetKeyValueRows, Gu as GetPaginationModel, xd as GetPaperProps, Al as GetParent, Nl as GetPath, fd as GetProgressValue, Uu as GetRawHeaders, Hu as GetRows, _u as GetSet, Td as GetTypography, Ml as GetValue, su as GridWithButtons, Ad as HFCenteredLayout, nu as HandleGet, Dd as HeaderFooterLayout, fu as InitialTypeFormBuilderRefState, $ as IsNullOrUndefined, Tl as IsPrimitive, sd as ModalCellRendererWrapper, Pl as NewObject, ld as ProgressAdornment, zl as RangeContainers, Bl as RangePrimitiveValues, Rl as RangeValues, Ll as ReadFromContainers, Il as ReadFromValue, gl as RefIndexContext, Od as RefProvider, rd as Refresh, uu as SelectAssociation, ud as SendIconButton, Iu as SetApi, Ku as SetArgs, _d as SetBoxProps, ad as SetCellRenderer, hu as SetContainer, td as SetDatasource, Nu as SetEndpoint, Zu as SetFetchParams, hd as SetFilesSelected, Yu as SetFilterModel, mu as SetHandleClose, Lu as SetHeadersFromJson, yd as SetIconElem, vd as SetInputElem, Ru as SetKeyValueHeaders, zu as SetKeyValueRows, pd as SetLoading, qu as SetOrAddArgs, Xu as SetPaginationModel, gd as SetPaperProps, dd as SetProgressValue, Bu as SetRowsFromJson, ed as SetSearch, id as SetSelectedRows, Ju as SetSortModel, jd as SetTableState, bd as SetTypography, ou as SubGrid, El as TitleCase, Tu as TypeFormBuilder, Eu as TypeFormBuilderModal, bl as UIAppBar, xl as UIBottomNav, md as UIInput, cd as UITable, ku as Update, Vl as UpdateContainerByPath, yu as UpdateElementValues, Nd as VectorSearch, kl as createContainer, yl as useConditionalRef, vl as useManagedRef, _l as useRefIndex };
