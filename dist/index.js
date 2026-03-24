import { AppBar as e, Box as t, Button as n, CircularProgress as r, Container as i, Dialog as a, DialogActions as o, DialogContent as s, DialogTitle as c, FormControl as l, IconButton as u, Input as d, InputAdornment as f, InputLabel as p, Paper as m, Select as h, Stack as g, Switch as _, Tab as v, Tabs as y, TextField as b, Toolbar as x, Typography as S } from "@mui/material";
import C from "@mui/icons-material/BugReport";
import { Fragment as w, jsx as T, jsxs as E } from "react/jsx-runtime";
import ee, { createContext as te, useCallback as ne, useContext as D, useEffect as O, useLayoutEffect as k, useMemo as re, useRef as A, useState as j } from "react";
import { DataGrid as ie, GridGetRowsError as M, useGridApiRef as N } from "@mui/x-data-grid";
import { LexicalComposer as ae } from "@lexical/react/LexicalComposer";
import { RichTextPlugin as oe } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable as se } from "@lexical/react/LexicalContentEditable";
import { LexicalErrorBoundary as ce } from "@lexical/react/LexicalErrorBoundary";
import { useLexicalComposerContext as P } from "@lexical/react/LexicalComposerContext";
import { $generateHtmlFromNodes as F, $generateNodesFromDOM as I } from "@lexical/html";
import { $getRoot as L, ParagraphNode as le, TextNode as R } from "lexical";
import { Image as z } from "mui-image";
import B from "@mui/icons-material/Description";
import ue from "@mui/icons-material/Download";
import de from "@mui/icons-material/Close";
import { useDropzone as V } from "react-dropzone";
import fe from "@mui/icons-material/CloudUpload";
import pe from "@mui/icons-material/Send";
//#region \0rolldown/runtime.js
var H = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), U = () => /* @__PURE__ */ T(e, {
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
}), W = () => /* @__PURE__ */ T(t, {
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
}), G = ({ api: e, endpoint: t, children: r, get_args: i, fetch_params: a, callback: o, ...s }) => /* @__PURE__ */ T(n, {
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
}), me = ({ children: e, sx: n = {} }) => /* @__PURE__ */ T(t, {
	sx: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		minHeight: "100vh",
		...n
	},
	children: /* @__PURE__ */ T(i, {
		maxWidth: "sm",
		children: /* @__PURE__ */ T(g, {
			direction: "column",
			children: e
		})
	})
}), K = ({ title: e, body: t, show: n, footer: r, title_sx: i, footer_sx: l, content_sx: u }) => /* @__PURE__ */ E(a, {
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
}), q = (e) => {
	if (e === null) return !0;
	let t = typeof e;
	return t === "string" || t === "number" || t === "boolean" || t === "undefined" || t === "symbol" || t === "bigint" || t === "int";
}, J = (e) => e == null, he = (e, t) => J(e) ? "" : e.toLowerCase().split(t).map((e) => e.charAt(0).toUpperCase() + e.slice(1)).join(" "), Y = "Values", X = "Containers", ge = (e, t, n, r) => {
	let i = r || {
		[Y]: /* @__PURE__ */ new Map(),
		[X]: /* @__PURE__ */ new Map()
	}, a = e ? t : "root", o = {
		parent: e,
		path: a,
		value: n,
		children: [],
		root: e ? e.root : null,
		containerIndex: i
	};
	return e || (o.root = o), i[Y].set(a, n), i[X].set(a, o), Object.freeze(o);
}, _e = (e, t, n) => {
	let r = ge(e, t, n, e.containerIndex);
	return {
		...e,
		children: [...e.children, r]
	};
}, Z = (e, t) => e.containerIndex[X].get(t), ve = (e, t) => {
	for (let [n, r] of e.containerIndex[Y].entries()) t(n, r);
}, ye = (e, t) => {
	for (let [, n] of e.containerIndex[X].entries()) t(n);
}, be = (e, t, n = 2) => {
	ve(e, (e, r) => {
		let i = Object.keys(r);
		for (let a = 0; a < i.length; a++) {
			let o = e.split(".");
			o.push(i[a]);
			let s = o.slice(2).join("."), c = r[i[a]];
			o.length > n && q(c) && t({
				i: a,
				value: c,
				path: s,
				fullpath: o.join("."),
				key: e,
				containerValue: r
			});
		}
	});
}, xe = (e, t, n, r) => {
	if (!e || !t) return e;
	let i = e.containerIndex[X].get(t);
	if (!i) return console.warn(`Container at path "${t}" not found.`), e;
	let a = {};
	a[n] = r;
	let o = {
		...i.value,
		...a
	}, s = ge(i.parent, i.path, o, e.containerIndex);
	e.containerIndex[X].set(t, s), e.containerIndex[Y].set(t, o);
	let c = s;
	for (; c.parent;) {
		let t = c.parent, n = t.children.map((e) => e.path === c.path ? c : e), r = c.path.split("."), i = r.slice(r.length - 1), a = { ...e.containerIndex[Y].get(t.path) };
		a[i] = o;
		let s = Object.freeze({
			...t,
			children: n,
			value: a
		});
		e.containerIndex[X].set(s.path, s), c = s;
	}
	return e.containerIndex[X].get("root");
}, Se = (e = null, t = [], n = "_", ...r) => {
	e === null && (e = ge(null, "root", r.length === 0 ? {} : r[0]), t = ["root"]);
	let i = (e, t) => {
		let r = e.value;
		return typeof r == "object" && r && (Array.isArray(r) ? r.forEach((r, a) => {
			if (typeof r == "object" && r) {
				let o = [...t, String(a)];
				i(_e(e, o.join(n), r).children.at(-1), o);
			}
		}) : Object.entries(r).forEach(([r, a]) => {
			if (typeof a == "object" && a) {
				let o = [...t, r];
				i(_e(e, o.join(n), a).children.at(-1), o);
			}
		})), e;
	};
	return i(e, t);
}, Ce = ({ inputKey: e, inputProps: t }) => {
	let n = Object.keys(t.defaultValue)[0], r = t.defaultValue[n], [i, a] = j(/* @__PURE__ */ T(l, {
		type: "text",
		onChange: t.onChange,
		defaultValue: r
	})), o = (e, n) => {
		a(ee.cloneElement(i, {
			...t,
			defaultValue: r,
			name: e + "." + n
		}));
	}, [s, c] = j(/* @__PURE__ */ T(l, {
		type: "text",
		...t,
		defaultValue: n,
		onChange: (t) => o(e, t.target.value)
	}));
	return O(() => {
		o(e, n);
	}, []), /* @__PURE__ */ E(g, {
		direction: "horizontal",
		gap: 2,
		children: [s, i]
	});
}, we = ({ fileData: e, onChange: t, name: n }) => {
	let [r] = P(), i = A("");
	return O(() => {
		e && (async () => {
			let t = "";
			t = typeof e == "object" && e ? e || JSON.stringify(e, null, 2) : String(e), t !== i.current && (i.current = t, r.update(() => {
				let e = L();
				e.clear();
				let n = new DOMParser(), i = t.includes("<") && t.includes(">") ? t : `<div>${t.replace(/\n/g, "<br/>")}</div>`, a = I(r, n.parseFromString(i, "text/html"));
				a.length > 0 && e.append(...a);
			}));
		})();
	}, [e, r]), O(() => r.registerUpdateListener(({ editorState: e }) => {
		e.read(() => {
			let e = F(r);
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
}, Te = ({ fileData: e, subtype: n, inputProps: r }) => /* @__PURE__ */ T(t, {
	sx: { width: "100%" },
	children: /* @__PURE__ */ T(m, {
		variant: "outlined",
		sx: {
			p: 2,
			minHeight: "200px",
			position: "relative"
		},
		children: /* @__PURE__ */ E(ae, {
			initialConfig: {
				namespace: "MyEditor",
				nodes: [le, R],
				theme: {},
				onError: (e) => console.error("Lexical Error:", e),
				editable: n !== 0
			},
			children: [/* @__PURE__ */ T(oe, {
				contentEditable: /* @__PURE__ */ T(se, { style: {
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
				ErrorBoundary: ce
			}), /* @__PURE__ */ T(we, {
				fileData: e,
				onChange: r.onChange,
				name: r.name
			})]
		})
	})
}), Ee = /* @__PURE__ */ H(((e) => {
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
})), De = /* @__PURE__ */ H(((e) => {
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
})), Oe = (/* @__PURE__ */ H(((e) => {
	var t = Ee(), n = De(), r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
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
		if (W(e, ArrayBuffer) || e && W(e.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (W(e, SharedArrayBuffer) || e && W(e.buffer, SharedArrayBuffer))) return h(e, t, n);
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
		if (W(e, Uint8Array)) {
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
		if (e.length !== void 0) return typeof e.length != "number" || G(e.length) ? o(0) : p(e);
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
		if (W(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), W(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), !s.isBuffer(e) || !s.isBuffer(t)) throw TypeError("The \"buf1\", \"buf2\" arguments must be one of type Buffer or Uint8Array");
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
			if (W(t, Uint8Array)) i + t.length > r.length ? (s.isBuffer(t) || (t = s.from(t)), t.copy(r, i)) : Uint8Array.prototype.set.call(r, t, i);
			else if (s.isBuffer(t)) t.copy(r, i);
			else throw TypeError("\"list\" argument must be an Array of Buffers");
			i += t.length;
		}
		return r;
	};
	function y(e, t) {
		if (s.isBuffer(e)) return e.length;
		if (ArrayBuffer.isView(e) || W(e, ArrayBuffer)) return e.byteLength;
		if (typeof e != "string") throw TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + typeof e);
		let n = e.length, r = arguments.length > 2 && arguments[2] === !0;
		if (!r && n === 0) return 0;
		let i = !1;
		for (;;) switch (t) {
			case "ascii":
			case "latin1":
			case "binary": return n;
			case "utf8":
			case "utf-8": return V(e).length;
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return n * 2;
			case "hex": return n >>> 1;
			case "base64": return H(e).length;
			default:
				if (i) return r ? -1 : V(e).length;
				t = ("" + t).toLowerCase(), i = !0;
		}
	}
	s.byteLength = y;
	function b(e, t, n) {
		let r = !1;
		if ((t === void 0 || t < 0) && (t = 0), t > this.length || ((n === void 0 || n > this.length) && (n = this.length), n <= 0) || (n >>>= 0, t >>>= 0, n <= t)) return "";
		for (e ||= "utf8";;) switch (e) {
			case "hex": return j(this, t, n);
			case "utf8":
			case "utf-8": return D(this, t, n);
			case "ascii": return re(this, t, n);
			case "latin1":
			case "binary": return A(this, t, n);
			case "base64": return ne(this, t, n);
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return ie(this, t, n);
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
		return e === 0 ? "" : arguments.length === 0 ? D(this, 0, e) : b.apply(this, arguments);
	}, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(e) {
		if (!s.isBuffer(e)) throw TypeError("Argument must be a Buffer");
		return this === e ? !0 : s.compare(this, e) === 0;
	}, s.prototype.inspect = function() {
		let t = "", n = e.INSPECT_MAX_BYTES;
		return t = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(), this.length > n && (t += " ... "), "<Buffer " + t + ">";
	}, r && (s.prototype[r] = s.prototype.inspect), s.prototype.compare = function(e, t, n, r, i) {
		if (W(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), !s.isBuffer(e)) throw TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof e);
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
		if (typeof n == "string" ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, G(n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
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
			if (G(r)) return o;
			e[n + o] = r;
		}
		return o;
	}
	function T(e, t, n, r) {
		return U(V(t, e.length - n), e, n, r);
	}
	function E(e, t, n, r) {
		return U(fe(t), e, n, r);
	}
	function ee(e, t, n, r) {
		return U(H(t), e, n, r);
	}
	function te(e, t, n, r) {
		return U(pe(t, e.length - n), e, n, r);
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
			case "base64": return ee(this, e, t, n);
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return te(this, e, t, n);
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
	function ne(e, n, r) {
		return n === 0 && r === e.length ? t.fromByteArray(e) : t.fromByteArray(e.slice(n, r));
	}
	function D(e, t, n) {
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
		return k(r);
	}
	var O = 4096;
	function k(e) {
		let t = e.length;
		if (t <= O) return String.fromCharCode.apply(String, e);
		let n = "", r = 0;
		for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += O));
		return n;
	}
	function re(e, t, n) {
		let r = "";
		n = Math.min(e.length, n);
		for (let i = t; i < n; ++i) r += String.fromCharCode(e[i] & 127);
		return r;
	}
	function A(e, t, n) {
		let r = "";
		n = Math.min(e.length, n);
		for (let i = t; i < n; ++i) r += String.fromCharCode(e[i]);
		return r;
	}
	function j(e, t, n) {
		let r = e.length;
		(!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
		let i = "";
		for (let r = t; r < n; ++r) i += me[e[r]];
		return i;
	}
	function ie(e, t, n) {
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
	function M(e, t, n) {
		if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
		if (e + t > n) throw RangeError("Trying to access beyond buffer length");
	}
	s.prototype.readUintLE = s.prototype.readUIntLE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || M(e, t, this.length);
		let r = this[e], i = 1, a = 0;
		for (; ++a < t && (i *= 256);) r += this[e + a] * i;
		return r;
	}, s.prototype.readUintBE = s.prototype.readUIntBE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || M(e, t, this.length);
		let r = this[e + --t], i = 1;
		for (; t > 0 && (i *= 256);) r += this[e + --t] * i;
		return r;
	}, s.prototype.readUint8 = s.prototype.readUInt8 = function(e, t) {
		return e >>>= 0, t || M(e, 1, this.length), this[e];
	}, s.prototype.readUint16LE = s.prototype.readUInt16LE = function(e, t) {
		return e >>>= 0, t || M(e, 2, this.length), this[e] | this[e + 1] << 8;
	}, s.prototype.readUint16BE = s.prototype.readUInt16BE = function(e, t) {
		return e >>>= 0, t || M(e, 2, this.length), this[e] << 8 | this[e + 1];
	}, s.prototype.readUint32LE = s.prototype.readUInt32LE = function(e, t) {
		return e >>>= 0, t || M(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
	}, s.prototype.readUint32BE = s.prototype.readUInt32BE = function(e, t) {
		return e >>>= 0, t || M(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
	}, s.prototype.readBigUInt64LE = K(function(e) {
		e >>>= 0, z(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && B(e, this.length - 8);
		let r = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24, i = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + n * 2 ** 24;
		return BigInt(r) + (BigInt(i) << BigInt(32));
	}), s.prototype.readBigUInt64BE = K(function(e) {
		e >>>= 0, z(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && B(e, this.length - 8);
		let r = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e], i = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n;
		return (BigInt(r) << BigInt(32)) + BigInt(i);
	}), s.prototype.readIntLE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || M(e, t, this.length);
		let r = this[e], i = 1, a = 0;
		for (; ++a < t && (i *= 256);) r += this[e + a] * i;
		return i *= 128, r >= i && (r -= 2 ** (8 * t)), r;
	}, s.prototype.readIntBE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || M(e, t, this.length);
		let r = t, i = 1, a = this[e + --r];
		for (; r > 0 && (i *= 256);) a += this[e + --r] * i;
		return i *= 128, a >= i && (a -= 2 ** (8 * t)), a;
	}, s.prototype.readInt8 = function(e, t) {
		return e >>>= 0, t || M(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e];
	}, s.prototype.readInt16LE = function(e, t) {
		e >>>= 0, t || M(e, 2, this.length);
		let n = this[e] | this[e + 1] << 8;
		return n & 32768 ? n | 4294901760 : n;
	}, s.prototype.readInt16BE = function(e, t) {
		e >>>= 0, t || M(e, 2, this.length);
		let n = this[e + 1] | this[e] << 8;
		return n & 32768 ? n | 4294901760 : n;
	}, s.prototype.readInt32LE = function(e, t) {
		return e >>>= 0, t || M(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
	}, s.prototype.readInt32BE = function(e, t) {
		return e >>>= 0, t || M(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
	}, s.prototype.readBigInt64LE = K(function(e) {
		e >>>= 0, z(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && B(e, this.length - 8);
		let r = this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (n << 24);
		return (BigInt(r) << BigInt(32)) + BigInt(t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24);
	}), s.prototype.readBigInt64BE = K(function(e) {
		e >>>= 0, z(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && B(e, this.length - 8);
		let r = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
		return (BigInt(r) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n);
	}), s.prototype.readFloatLE = function(e, t) {
		return e >>>= 0, t || M(e, 4, this.length), n.read(this, e, !0, 23, 4);
	}, s.prototype.readFloatBE = function(e, t) {
		return e >>>= 0, t || M(e, 4, this.length), n.read(this, e, !1, 23, 4);
	}, s.prototype.readDoubleLE = function(e, t) {
		return e >>>= 0, t || M(e, 8, this.length), n.read(this, e, !0, 52, 8);
	}, s.prototype.readDoubleBE = function(e, t) {
		return e >>>= 0, t || M(e, 8, this.length), n.read(this, e, !1, 52, 8);
	};
	function N(e, t, n, r, i, a) {
		if (!s.isBuffer(e)) throw TypeError("\"buffer\" argument must be a Buffer instance");
		if (t > i || t < a) throw RangeError("\"value\" argument is out of bounds");
		if (n + r > e.length) throw RangeError("Index out of range");
	}
	s.prototype.writeUintLE = s.prototype.writeUIntLE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, n >>>= 0, !r) {
			let r = 2 ** (8 * n) - 1;
			N(this, e, t, n, r, 0);
		}
		let i = 1, a = 0;
		for (this[t] = e & 255; ++a < n && (i *= 256);) this[t + a] = e / i & 255;
		return t + n;
	}, s.prototype.writeUintBE = s.prototype.writeUIntBE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, n >>>= 0, !r) {
			let r = 2 ** (8 * n) - 1;
			N(this, e, t, n, r, 0);
		}
		let i = n - 1, a = 1;
		for (this[t + i] = e & 255; --i >= 0 && (a *= 256);) this[t + i] = e / a & 255;
		return t + n;
	}, s.prototype.writeUint8 = s.prototype.writeUInt8 = function(e, t, n) {
		return e = +e, t >>>= 0, n || N(this, e, t, 1, 255, 0), this[t] = e & 255, t + 1;
	}, s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || N(this, e, t, 2, 65535, 0), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
	}, s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || N(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
	}, s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || N(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = e & 255, t + 4;
	}, s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || N(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
	};
	function ae(e, t, n, r, i) {
		R(t, r, i, e, n, 7);
		let a = Number(t & BigInt(4294967295));
		e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a;
		let o = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, n;
	}
	function oe(e, t, n, r, i) {
		R(t, r, i, e, n, 7);
		let a = Number(t & BigInt(4294967295));
		e[n + 7] = a, a >>= 8, e[n + 6] = a, a >>= 8, e[n + 5] = a, a >>= 8, e[n + 4] = a;
		let o = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[n + 3] = o, o >>= 8, e[n + 2] = o, o >>= 8, e[n + 1] = o, o >>= 8, e[n] = o, n + 8;
	}
	s.prototype.writeBigUInt64LE = K(function(e, t = 0) {
		return ae(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
	}), s.prototype.writeBigUInt64BE = K(function(e, t = 0) {
		return oe(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
	}), s.prototype.writeIntLE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, !r) {
			let r = 2 ** (8 * n - 1);
			N(this, e, t, n, r - 1, -r);
		}
		let i = 0, a = 1, o = 0;
		for (this[t] = e & 255; ++i < n && (a *= 256);) e < 0 && o === 0 && this[t + i - 1] !== 0 && (o = 1), this[t + i] = (e / a >> 0) - o & 255;
		return t + n;
	}, s.prototype.writeIntBE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, !r) {
			let r = 2 ** (8 * n - 1);
			N(this, e, t, n, r - 1, -r);
		}
		let i = n - 1, a = 1, o = 0;
		for (this[t + i] = e & 255; --i >= 0 && (a *= 256);) e < 0 && o === 0 && this[t + i + 1] !== 0 && (o = 1), this[t + i] = (e / a >> 0) - o & 255;
		return t + n;
	}, s.prototype.writeInt8 = function(e, t, n) {
		return e = +e, t >>>= 0, n || N(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = e & 255, t + 1;
	}, s.prototype.writeInt16LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || N(this, e, t, 2, 32767, -32768), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
	}, s.prototype.writeInt16BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || N(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
	}, s.prototype.writeInt32LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || N(this, e, t, 4, 2147483647, -2147483648), this[t] = e & 255, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4;
	}, s.prototype.writeInt32BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || N(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
	}, s.prototype.writeBigInt64LE = K(function(e, t = 0) {
		return ae(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
	}), s.prototype.writeBigInt64BE = K(function(e, t = 0) {
		return oe(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
	});
	function se(e, t, n, r, i, a) {
		if (n + r > e.length || n < 0) throw RangeError("Index out of range");
	}
	function ce(e, t, r, i, a) {
		return t = +t, r >>>= 0, a || se(e, t, r, 4, 34028234663852886e22, -34028234663852886e22), n.write(e, t, r, i, 23, 4), r + 4;
	}
	s.prototype.writeFloatLE = function(e, t, n) {
		return ce(this, e, t, !0, n);
	}, s.prototype.writeFloatBE = function(e, t, n) {
		return ce(this, e, t, !1, n);
	};
	function P(e, t, r, i, a) {
		return t = +t, r >>>= 0, a || se(e, t, r, 8, 17976931348623157e292, -17976931348623157e292), n.write(e, t, r, i, 52, 8), r + 8;
	}
	s.prototype.writeDoubleLE = function(e, t, n) {
		return P(this, e, t, !0, n);
	}, s.prototype.writeDoubleBE = function(e, t, n) {
		return P(this, e, t, !1, n);
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
	var F = {};
	function I(e, t, n) {
		F[e] = class extends n {
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
	I("ERR_BUFFER_OUT_OF_BOUNDS", function(e) {
		return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
	}, RangeError), I("ERR_INVALID_ARG_TYPE", function(e, t) {
		return `The "${e}" argument must be of type number. Received type ${typeof t}`;
	}, TypeError), I("ERR_OUT_OF_RANGE", function(e, t, n) {
		let r = `The value of "${e}" is out of range.`, i = n;
		return Number.isInteger(n) && Math.abs(n) > 2 ** 32 ? i = L(String(n)) : typeof n == "bigint" && (i = String(n), (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (i = L(i)), i += "n"), r += ` It must be ${t}. Received ${i}`, r;
	}, RangeError);
	function L(e) {
		let t = "", n = e.length, r = e[0] === "-" ? 1 : 0;
		for (; n >= r + 4; n -= 3) t = `_${e.slice(n - 3, n)}${t}`;
		return `${e.slice(0, n)}${t}`;
	}
	function le(e, t, n) {
		z(t, "offset"), (e[t] === void 0 || e[t + n] === void 0) && B(t, e.length - (n + 1));
	}
	function R(e, t, n, r, i, a) {
		if (e > n || e < t) {
			let r = typeof t == "bigint" ? "n" : "", i;
			throw i = a > 3 ? t === 0 || t === BigInt(0) ? `>= 0${r} and < 2${r} ** ${(a + 1) * 8}${r}` : `>= -(2${r} ** ${(a + 1) * 8 - 1}${r}) and < 2 ** ${(a + 1) * 8 - 1}${r}` : `>= ${t}${r} and <= ${n}${r}`, new F.ERR_OUT_OF_RANGE("value", i, e);
		}
		le(r, i, a);
	}
	function z(e, t) {
		if (typeof e != "number") throw new F.ERR_INVALID_ARG_TYPE(t, "number", e);
	}
	function B(e, t, n) {
		throw Math.floor(e) === e ? t < 0 ? new F.ERR_BUFFER_OUT_OF_BOUNDS() : new F.ERR_OUT_OF_RANGE(n || "offset", `>= ${n ? 1 : 0} and <= ${t}`, e) : (z(e, n), new F.ERR_OUT_OF_RANGE(n || "offset", "an integer", e));
	}
	var ue = /[^+/0-9A-Za-z-_]/g;
	function de(e) {
		if (e = e.split("=")[0], e = e.trim().replace(ue, ""), e.length < 2) return "";
		for (; e.length % 4 != 0;) e += "=";
		return e;
	}
	function V(e, t) {
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
	function fe(e) {
		let t = [];
		for (let n = 0; n < e.length; ++n) t.push(e.charCodeAt(n) & 255);
		return t;
	}
	function pe(e, t) {
		let n, r, i, a = [];
		for (let o = 0; o < e.length && !((t -= 2) < 0); ++o) n = e.charCodeAt(o), r = n >> 8, i = n % 256, a.push(i), a.push(r);
		return a;
	}
	function H(e) {
		return t.toByteArray(de(e));
	}
	function U(e, t, n, r) {
		let i;
		for (i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
		return i;
	}
	function W(e, t) {
		return e instanceof t || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === t.name;
	}
	function G(e) {
		return e !== e;
	}
	var me = (function() {
		let e = "0123456789abcdef", t = Array(256);
		for (let n = 0; n < 16; ++n) {
			let r = n * 16;
			for (let i = 0; i < 16; ++i) t[r + i] = e[n] + e[i];
		}
		return t;
	})();
	function K(e) {
		return typeof BigInt > "u" ? q : e;
	}
	function q() {
		throw Error("BigInt not supported");
	}
})))(), ke = async (e) => {
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
}, Ae = (e) => {
	e = atob(e);
	let t = new ArrayBuffer(e.length), n = new Uint8Array(t);
	for (let t = 0; t < e.length; t++) n[t] = e.charCodeAt(t);
	return n;
}, je = "data:image/#{encoding};base64,#{data}", Me = ({ data: e, encoding: t, alt: n }) => {
	let r = je, [i, a] = j(void 0);
	return J(t) && (t = "png"), J(n) && (n = "ERROR"), ke(new Blob([Ae(e)])).then((e) => {
		r = r.replace("#{encoding}", t), r = r.replace("#{data}", Oe.Buffer.from(e).toString("base64")), a(r);
	}), /* @__PURE__ */ T(z, {
		src: i,
		fluid: !0,
		alt: n
	});
}, Ne = (e) => {
	let t = "", n = Object.keys(e).map((t) => {
		let n = e[t];
		return J(n) ? "" : `${encodeURIComponent(t)}=${encodeURIComponent(n)}`;
	}).filter((e) => e !== "").join("&");
	if (n) {
		let e = t.indexOf("#");
		e !== -1 && (t = t.slice(0, e)), t += (t.indexOf("?") === -1 ? "?" : "&") + n;
	}
	return t;
}, Pe = (e, { baseHeaders: t, handleErr: n, handleFinally: r, debug: i } = {}) => {
	let a = {
		"Content-Type": "application/json",
		...t
	}, o = (e) => {
		console.log(e);
	}, s = ({ endpoint: t, inputHeaders: s, fetchParams: c, args: l }) => {
		J(t) && (t = "");
		let u = e + t, d = {
			method: "GET",
			headers: {
				...a,
				...s
			},
			...c
		};
		return J(l) || (d.method === "POST" && (d.body = JSON.stringify(l)), d.method === "GET" && (u += Ne(l))), fetch(u, d).catch((e) => n(e)).finally(() => {
			i && o({
				endpoint: t,
				inputHeaders: s,
				fetchParams: c
			}), !J(r) && r({
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
Pe("http://localhost:8080/", {
	handleErr: (e) => console.log(e),
	debug: !0
});
//#endregion
//#region src/utility/api.js
var Fe = ({ endpoint: e, handleErr: t }) => {
	J(t) && (t = (e) => console.log(e));
	let n = Pe(e, { handleErr: t });
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
}, Ie = (e, t) => () => e.get(t), Le = ({ jsxKey: e, endpoint: t, inputProps: n }) => {
	let [r, i] = j([/* @__PURE__ */ T("option", {
		value: n.defaultValue,
		children: n.defaultValue
	}, e + "-" + n.defaultValue)]), a = Fe({ endpoint: t });
	return O(() => {
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
}, Re = ({ jsxKey: e, key: t, inputProps: n }) => {
	let r;
	return t.charAt(t.length - 1) === "D" && t.charAt(t.length - 2) === "I" || t.charAt(t.length - 1) === "S" && t.charAt(t.length - 2) === "D" ? (t.charAt(t.length - 1) === "D" && t.charAt(t.length - 2) === "I" && (r = t.slice(5, t.length - 2)), t.charAt(t.length - 1) === "S" && t.charAt(t.length - 2) === "D" && (r = t.slice(5, t.length - 3), n = {
		...n,
		multiple: !0
	}), /* @__PURE__ */ T(Le, {
		endpoint: r,
		jsxKey: e,
		inputProps: n
	})) : null;
}, ze = () => ({ formRef: e, jsxKey: t, key: n, currentType: r, inputProps: i }) => {
	let a = Re({
		jsxKey: t,
		key: n,
		inputProps: i
	});
	if (!J(a)) return a;
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
		if (i.defaultValue.Subtype === 17) return /* @__PURE__ */ T(Me, { data: Z(Q(e), n.slice(0, n.lastIndexOf(".")))?.value.Data }, t);
		if (i.defaultValue.Subtype === 16 || i.defaultValue.Subtype === 0) {
			let r = Z(Q(e), n.slice(0, n.lastIndexOf(".")));
			return i.name = n.slice(0, n.lastIndexOf(".")) + ".Data", /* @__PURE__ */ T(Te, {
				fileData: JSON.stringify(r?.value.Data, null, 2),
				inputProps: i,
				subtype: i.defaultValue.Subtype
			}, t);
		}
		if (i.defaultValue.Subtype === 18) {
			let r = Z(Q(e), n.slice(0, n.lastIndexOf(".")));
			return i.name = n.slice(0, n.lastIndexOf(".")) + ".Data", /* @__PURE__ */ T(Te, {
				fileData: r?.value.Data,
				inputProps: i,
				subtype: i.defaultValue.Subtype
			}, t);
		}
		if (!J(i.defaultValue.Subtype) || !J(i.defaultValue.Data)) return null;
		if (Array.isArray(i.defaultValue)) return Object.keys(i.defaultValue).map((e) => /* @__PURE__ */ T(d, {
			type: "text",
			disableUnderline: !0,
			readOnly: !0,
			sx: o,
			...i,
			defaultValue: i.defaultValue[e]
		}, t));
		if (J(i.defaultValue)) return;
		let r = Object.keys(i.defaultValue)[0];
		return typeof i.defaultValue[r] == "object" ? null : /* @__PURE__ */ T(Ce, {
			inputKey: n,
			inputProps: i
		});
	}
	return a;
}, Be = (e, t = {}) => ({
	index: 0,
	elements: {},
	nameIndex: {},
	labels: {},
	element_component: {},
	container: void 0,
	handleOnClose: void 0,
	elementSelector: e || ze(),
	context: t
}), Ve = (e) => {
	e.current.handleOnClose();
}, He = (e, t) => {
	let n = e.current;
	n.handleClose = t, e.current = n;
}, Ue = (e, t) => {
	let n = e.current;
	J(n) || (n.container = t), e.current = n;
}, Q = (e) => e.current.container, We = (e, n) => {
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
}, Ge = (e) => {
	let t = {};
	return Object.keys(e.current.nameIndex).map((n, r) => {
		t[n] = We(e, r);
	}), /* @__PURE__ */ T(g, {
		direction: "column",
		gap: 0,
		children: Object.keys(t).map((e) => t[e])
	});
}, Ke = (e) => {
	let t = e.current;
	return { onChange: (n) => {
		let r = n.target.value, i = n.target.selectedOptions;
		if (!J(i)) {
			let e = [].slice.call(i);
			r = e.map((e) => e.value), e.length === 1 && (r = r[0]);
		}
		n.target.type === "datetime-local" && (r = new Date(Date.parse(r)).toISOString());
		let a = n.target.name, o = t.nameIndex[a];
		J(o) && (t.nameIndex[a] = t.index, o = t.index, e.current = t), t.elements[o] = r;
		let s = a.split("."), c = s.slice(0, s.length - 1).join("."), l = s.slice(s.length - 1);
		J(Z(Q(e), c)) && (c = s.slice(0, s.length - 2).join(".")), n.target.type === "checkbox" && (r = n.currentTarget.checked), e.current = t, Ue(e, xe(Q(e), c, l, r)), e.current = t;
	} };
}, qe = (e, t) => {
	let n = e.current, r = n.nameIndex[t];
	return n.elements[r];
}, Je = (e, t, n) => {
	let r = typeof n, i = e.current, a = t + i.index, o = {
		name: t,
		defaultValue: qe(e, t),
		onChange: Ke(e).onChange,
		sx: { width: "100%" }
	};
	return i.elementSelector({
		key: t,
		formRef: e,
		jsxKey: a,
		currentType: r,
		inputProps: o
	});
}, $ = (e, t, n) => {
	let r = e.current;
	if (J(r.nameIndex[t])) {
		r.nameIndex[t] = r.index, r.elements[r.index] = n;
		let i = Je(e, t, n);
		if (!J(i)) {
			let e = he(t.replace(/root\./, ""), "."), n = e.split(" "), a = n[n.length - 1];
			/^\d+$/.test(a) ? r.labels[r.index] = "None" : r.labels[r.index] = /* @__PURE__ */ T(p, {
				column: t,
				children: e
			}, "Label" + t + r.index), r.element_component[r.index] = i, r.index++;
		}
	}
	e.current = r;
}, Ye = (e, t) => e.current.nameIndex[t], Xe = (e, t) => {
	let n = e.current;
	delete n.labels[Ye(e, t)], e.current = n;
}, Ze = ({ formRef: e, container: t }) => {
	ye(t, (t) => {
		let n = t.path, r = t.value;
		if (Array.isArray(r)) {
			let t = [];
			Object.keys(r).forEach((e) => {
				J(r[e]) || Array.isArray(r[e]) || t.push(r[e]);
			}), t.length > 0 && $(e, n, t);
			return;
		}
		Object.keys(r).forEach((t) => {
			J(r[t]) || (typeof r[t] == "object" && Object.keys(r[t]).forEach((i) => {
				let a = {};
				a[i] = r[t][i], $(e, n + "." + t + "." + i, a);
			}), q(r[t]) && $(e, n + "." + t, r[t]));
		});
	});
}, Qe = te(null), $e = () => D(Qe), et = (e, t = !0) => {
	let n = $e();
	return (r) => {
		t && r ? n?.register(e, r) : n?.unregister(e);
	};
}, tt = ({ title: e, getSchema: n, handleSave: r, elementSelector: i, footerButtons: a, refKey: o, register_component: s = !1 }) => {
	let c = et(o, s), l = A(null), [d, f] = j(!1), p = () => {
		f(!1);
	};
	l.current ||= Be(i, { setShow: (e) => {
		f(e);
	} }), k(() => (c(l.current), () => c(null)), [c]);
	let [m, h] = j(void 0), [_, b] = j(0);
	return a ||= [], /* @__PURE__ */ E(g, {
		direction: "row",
		gap: 3,
		children: [/* @__PURE__ */ T(u, {
			onClick: async () => {
				try {
					Ue(l, Se(null, [], ".", await n())), He(l, p), Ze({
						formRef: l,
						container: Q(l)
					}), h(Ge(l)), f(!0);
				} catch (e) {
					console.error("Failed to load schema:", e);
				}
			},
			children: /* @__PURE__ */ T(B, { sx: { color: "red" } })
		}), /* @__PURE__ */ T(K, {
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
						children: /* @__PURE__ */ T("pre", { children: JSON.stringify(Q(l)?.value, null, 2) })
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
}, nt = ({ refreshGrid: e, api: t, id: n, title: r, footerButtons: i }) => /* @__PURE__ */ T(tt, {
	title: r,
	button_title: "Update",
	getSchema: Ie(t, n),
	handleSave: (r) => {
		t.update(r, n).then(() => e());
	},
	footerButtons: i,
	register_component: !0,
	refKey: "update_modal"
}), rt = ({ handleRefreshGrid: e, api: t, id: n, params: r }) => /* @__PURE__ */ T(g, {
	direction: "row",
	gap: 1,
	children: /* @__PURE__ */ T(nt, {
		...r,
		refreshGrid: e,
		api: t,
		id: n
	})
}), it = (e, t) => {
	let n = e.current;
	n && (n.endpoint = t);
}, at = (e) => e.current.endpoint, ot = (e, t) => {
	let n = e.current;
	be(t, (e) => {
		let t = e.value, r = e.path, i = typeof t;
		if (n.headers_ri[r] !== void 0) return;
		let a = "string";
		i === "number" ? a = "number" : r.toLowerCase().includes("date") || r.toLowerCase().includes("modified") ? a = "date" : i === "string" && (a = "string"), n.headers[n.index] = {
			field: r,
			type: a,
			headerName: r
		}, n.rows[n.index] = [], n.headers_ri[r] = n.index, n.index++;
	}), e.current = n;
}, st = (e, t) => {
	let n = e.current;
	n && (n.rows = [], n.row_count = 0, n.headers.forEach(() => {
		n.rows.push([]);
	}), be(t, (e) => {
		if (q(e.value)) {
			let t = n.headers_ri[e.path];
			t !== void 0 && n.rows[t].push(e.value);
		}
	}), e.current = n);
}, ct = (e) => {
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
}, lt = (e) => {
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
}, ut = (e) => e.current.paginationModel, dt = (e, t) => {
	let n = e.current;
	n && (n.args = t, e.current = n);
}, ft = (e, t) => {
	let n = e.current;
	n && (n.args = {
		...n.args,
		...t
	}, e.current = n);
}, pt = (e, t) => {
	let n = e.current;
	n && (n.args.sortModel = JSON.stringify(t), e.current = n);
}, mt = (e, t) => {
	let n = e.current;
	n && (n.args.filterModel = JSON.stringify(t), e.current = n);
}, ht = (e, t) => () => {
	let n = e.current;
	n && (n.paginationModel = t, n.args.paginationModel = JSON.stringify(t), e.current = n);
}, gt = (e, t) => {
	let n = e.current;
	n && (n.fetch_params = t, e.current = n);
}, _t = (e) => e.current.fetch_params, vt = (e, t) => ({ getRows: async (n) => {
	let r = e.current;
	if (!r) return {
		rows: [],
		rowCount: 0
	};
	mt(e, n.filterModel), pt(e, n.sortModel);
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
		Array.isArray(t) && t.length === 0 || J(t) || (s[e] = t);
	}), J(n.sortModel) || Array.isArray(n.sortModel) && n.sortModel.length === 0 && delete s.sortModel, J(n.filterModel) || Array.isArray(n.filterModel.items) && n.filterModel.items.length === 0 && delete s.filterModel;
	let c = await r.api.at("/" + r.endpoint, {
		fetchParams: {
			method: "GET",
			..._t(e)
		},
		args: s
	}), l = Se(null, [], ".", c.results);
	return ot(e, l), st(e, l), r.row_count = c.pagination?.total || 0, e.current = r, t(), {
		rows: ct(e),
		rowCount: c.pagination?.total || 0
	};
} }), yt = (e, t) => {
	let n = e.current;
	n && (n.args.search = t, e.current = n);
}, bt = (e) => e.current.datasource, xt = (e) => {
	let t = e.current;
	t && t.refresh();
}, St = (e) => (t) => {
	let n = e.current;
	if (!n || n.rows.length === 0) return;
	let r = t.ids, i = n.rows[0].length, a = Array.from({ length: i }, (e, t) => t).filter((e) => {
		let t = n.rows[0][e];
		return r.has(t);
	});
	n.selected_data = n.rows.map((e) => a.map((t) => e[t])), n.selected_ids = t, e.current = n;
}, Ct = (e) => {
	let r = $e();
	return (i) => {
		let a = e.current;
		if (!a) return;
		let o = "white";
		i.row.stage === "rejected" && (o = "red"), i.row.stage === "approved" && (o = "green");
		let s = /* @__PURE__ */ E(g, {
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
							backgroundColor: o,
							color: "black",
							borderRadius: 2,
							px: 1.5,
							fontSize: "0.875rem"
						},
						children: i.row.stage
					}),
					/* @__PURE__ */ T(t, { sx: { flexGrow: 1 } }, "spacer"),
					/* @__PURE__ */ T(u, {
						onClick: () => {
							let e = r?.get("update_modal")?.context;
							if (!e) return;
							let t = e.setShow;
							t(!1);
						},
						sx: {
							backgroundColor: "black",
							color: "white"
						},
						children: /* @__PURE__ */ T(de, {})
					})
				]
			}), /* @__PURE__ */ E(g, {
				gap: 3,
				direction: "row",
				children: [i.row.code, i.row.description]
			})]
		});
		return /* @__PURE__ */ T(rt, {
			params: {
				footerButtons: [
					/* @__PURE__ */ T(n, {
						variant: "outlined",
						sx: {
							color: "black",
							backgroundColor: "white",
							borderColor: "black"
						},
						startIcon: /* @__PURE__ */ T(ue, {}),
						children: "Extract"
					}),
					/* @__PURE__ */ T(t, { sx: { flexGrow: 1 } }, "spacer"),
					/* @__PURE__ */ T(n, {
						sx: { backgroundColor: "red" },
						variant: "contained",
						children: "Reject"
					}),
					/* @__PURE__ */ T(G, {
						api: a.api,
						sx: { backgroundColor: "green" },
						variant: "contained",
						endpoint: "Approve",
						children: "Approve"
					})
				],
				title: s,
				...i.row
			},
			handleRefreshGrid: () => xt(e),
			api: a.api,
			id: i.id
		});
	};
}, wt = ({ api: e, endpoint: t, row_details: n, refKey: r, register_component: i = !1, toolbar: a = !1, checkbox_select: o = !1 }) => {
	let s = et(r, i), c = A(null), [, l] = j(!1), [u, d] = j({
		page: 0,
		pageSize: 5
	}), [f, p] = j(0), m = N(), h = () => ({
		gridRef: m,
		index: 0,
		headers: [],
		headers_ri: {},
		rows: [],
		row_count: 0,
		datasource: vt(c, g),
		paginationModel: {
			page: 0,
			pageSize: 5
		},
		args: {},
		selected_data: [],
		selected_ids: null,
		refresh: g,
		filter_model: null,
		api: e,
		row_details: n,
		fetch_params: null,
		endpoint: t,
		modal_title: null
	}), g = () => {
		c.current && p(c.current.row_count), l((e) => !e);
	};
	return c.current ||= h(), k(() => (s(c.current), () => s(null)), [s]), /* @__PURE__ */ T(ie, {
		disableVirtualization: !0,
		rowCount: f,
		sx: {
			width: "100%",
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
		columns: lt(c),
		dataSource: bt(c),
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
			console.error("DataGrid Error Type:", e.name), console.error("DataGrid Error Message:", e.message), e.cause && (console.group("Original Error Cause"), console.error("Message:", e.cause.message), console.error("Stack:", e.cause.stack), console.groupEnd()), e instanceof M ? console.warn("Fetch failed. Check your API mock or network.") : console.warn("Row update failed.");
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
	children: /* @__PURE__ */ T(pe, {})
}), Dt = (e, t) => {
	let n = e.current;
	n && (n.setProgressValue(t), n.progressValue = t, e.current = n);
}, Ot = (e) => !e || !e.current ? 1 : e.current.progressValue, kt = ({ refKey: e, register_component: t, onDropSuccess: n, onSend: r }) => {
	let [i, a] = j(""), [o, s] = j(!1), [c, l] = j(0), d = et(e, t), p = A({
		progressValue: 0,
		setProgressValue: l
	}), { getRootProps: m, getInputProps: h, open: g, isDragActive: _ } = V({
		onDrop: ne((e) => {
			if (e.length > 0) {
				let t = p.current;
				s(!0), t.setProgressValue = l, n(p, e), p.current = t;
			}
		}, [n]),
		noClick: !0,
		noKeyboard: !0,
		multiple: !1
	});
	k(() => (d(p.current), () => d(null)), [d]);
	let { ref: v, ...y } = m(), x = o || c == 100 ? /* @__PURE__ */ T(Tt, {
		loading: !0,
		value: c
	}) : /* @__PURE__ */ T(Et, {
		onClick: r,
		sx: { color: c === 100 ? "red" : "inherit" }
	});
	return /* @__PURE__ */ T(b, {
		variant: "outlined",
		value: i,
		onChange: (e) => a(e.target.value),
		slotProps: { input: {
			...y,
			inputRef: v,
			startAdornment: /* @__PURE__ */ E(f, {
				position: "start",
				children: [/* @__PURE__ */ T("input", { ...h() }), /* @__PURE__ */ T(u, {
					onClick: g,
					children: /* @__PURE__ */ T(fe, {})
				})]
			}),
			endAdornment: x
		} },
		sx: {
			backgroundColor: _ ? "action.hover" : "inherit",
			"& .MuiOutlinedInput-root": { transition: "background-color 0.2s" }
		}
	});
}, At = ({ api: e, title: t, grid_endpoint: n, row_details: r, buttons: i, refKey: a }) => {
	let o = i?.map((e) => e);
	return /* @__PURE__ */ E(g, {
		direction: "column",
		gap: 2,
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
					width: "50%"
				},
				children: o
			})]
		}), /* @__PURE__ */ T(wt, {
			api: e,
			endpoint: n,
			row_details: r,
			refKey: a
		})]
	});
}, jt = ({ children: e }) => /* @__PURE__ */ E(t, { children: [
	/* @__PURE__ */ T(U, {}),
	e,
	/* @__PURE__ */ T(W, {})
] }), Mt = ({ children: e }) => {
	let t = A({}), n = re(() => ({
		register: (e, n) => {
			t.current[e] = n;
		},
		unregister: (e) => {
			delete t.current[e];
		},
		get: (e) => t.current[e] || null,
		registry: () => t.current
	}), []);
	return /* @__PURE__ */ T(Qe.Provider, {
		value: n,
		children: e
	});
}, Nt = ({ children: e }) => /* @__PURE__ */ T(Mt, { children: /* @__PURE__ */ T(jt, { children: /* @__PURE__ */ T(g, {
	direction: "column",
	gap: 2,
	children: e
}) }) });
//#endregion
export { $ as AddElement, Fe as Api, G as ApiButton, me as CenteredContainer, K as CenteredModal, Ve as Close, vt as DataSourceWrapper, Xe as DeleteLabel, Q as GetContainer, bt as GetDatasource, Ye as GetElementIndex, Je as GetElementTypes, qe as GetElementValue, Ge as GetElements, at as GetEndpoint, _t as GetFetchParams, lt as GetHeaders, ut as GetPaginationModel, Ot as GetProgressValue, ct as GetRows, We as GetSet, At as GridWithButtons, Nt as HFCenteredLayout, Ie as HandleGet, jt as HeaderFooterLayout, Be as InitialTypeFormBuilderRefState, J as IsNullOrUndefined, q as IsPrimitive, Ct as ModalCellRendererWrapper, Tt as ProgressAdornment, Mt as RefProvider, xt as Refresh, Re as SelectAssociation, Et as SendIconButton, dt as SetArgs, Ue as SetContainer, it as SetEndpoint, gt as SetFetchParams, mt as SetFilterModel, He as SetHandleClose, ot as SetHeadersFromJson, ft as SetOrAddArgs, ht as SetPaginationModel, Dt as SetProgressValue, st as SetRowsFromJson, yt as SetSearch, St as SetSelectedRows, pt as SetSortModel, he as TitleCase, Ze as TypeFormBuilder, U as UIAppBar, W as UIBottomNav, kt as UIInput, wt as UITable, Ke as UpdateElementValues };
