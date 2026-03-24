import { AppBar as e, Box as t, Button as n, CircularProgress as r, Container as i, Dialog as a, DialogActions as o, DialogContent as s, DialogTitle as c, FormControl as l, IconButton as u, Input as d, InputAdornment as f, InputLabel as p, Paper as m, Select as h, Stack as g, Switch as _, Tab as v, Tabs as y, TextField as b, Toolbar as x, Typography as S } from "@mui/material";
import { createSvgIcon as C, createSvgIcon as w } from "@mui/material/utils";
import { Fragment as T, jsx as E, jsxs as D } from "react/jsx-runtime";
import * as O from "react";
import k, { Component as A, Fragment as j, Suspense as M, createContext as N, createElement as P, forwardRef as ee, useCallback as te, useContext as ne, useEffect as F, useImperativeHandle as re, useLayoutEffect as ie, useMemo as ae, useReducer as oe, useRef as se, useState as ce } from "react";
import { alpha as le, darken as ue, lighten as de, styled as I, useTheme as fe } from "@mui/material/styles";
import pe from "@mui/material/Autocomplete";
import me from "@mui/material/Badge";
import he from "@mui/material/Checkbox";
import ge from "@mui/material/Chip";
import _e from "@mui/material/CircularProgress";
import ve from "@mui/material/Divider";
import ye, { inputBaseClasses as be } from "@mui/material/InputBase";
import xe from "@mui/material/Unstable_TrapFocus";
import Se from "@mui/material/LinearProgress";
import Ce from "@mui/material/ListItemIcon";
import we, { listItemTextClasses as Te } from "@mui/material/ListItemText";
import Ee from "@mui/material/MenuList";
import De from "@mui/material/MenuItem";
import Oe from "@mui/material/TextField";
import ke from "@mui/material/TextareaAutosize";
import Ae from "@mui/material/FormControl";
import je, { formControlLabelClasses as Me } from "@mui/material/FormControlLabel";
import Ne from "@mui/material/Select";
import Pe from "@mui/material/Switch";
import Fe from "@mui/material/Button";
import Ie, { iconButtonClasses as Le } from "@mui/material/IconButton";
import Re, { inputAdornmentClasses as ze } from "@mui/material/InputAdornment";
import Be from "@mui/material/Tooltip";
import Ve, { tablePaginationClasses as He } from "@mui/material/TablePagination";
import Ue from "@mui/material/Popper";
import We from "@mui/material/ClickAwayListener";
import Ge from "@mui/material/Grow";
import Ke from "@mui/material/Paper";
import qe from "@mui/material/InputLabel";
import Je from "@mui/material/Skeleton";
import Ye from "@mui/material/Tabs";
import Xe from "@mui/material/Tab";
import Ze from "@mui/material/ToggleButton";
import Qe from "@emotion/styled";
import { serializeStyles as $e } from "@emotion/serialize";
import { keyframes as et } from "@emotion/react";
import * as tt from "react-dom";
import { createPortal as nt, flushSync as rt } from "react-dom";
//#region \0rolldown/runtime.js
var it = Object.create, at = Object.defineProperty, ot = Object.getOwnPropertyDescriptor, st = Object.getOwnPropertyNames, ct = Object.getPrototypeOf, lt = Object.prototype.hasOwnProperty, ut = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), dt = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = st(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !lt.call(e, s) && s !== n && at(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = ot(t, s)) || r.enumerable
	});
	return e;
}, ft = (e, t, n) => (n = e == null ? {} : it(ct(e)), dt(t || !e || !e.__esModule ? at(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), pt = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
}), mt = w(/* @__PURE__ */ E("path", { d: "M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5s-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20zm-6 8h-4v-2h4zm0-4h-4v-2h4z" }), "BugReport"), ht = () => /* @__PURE__ */ E(e, {
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
			/* @__PURE__ */ E(u, {
				size: "small",
				sx: { color: "white" },
				onClick: () => console.log("Debug Clicked"),
				children: /* @__PURE__ */ E(mt, { fontSize: "small" })
			})
		]
	})
}), gt = () => /* @__PURE__ */ E(t, {
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
}), _t = ({ api: e, endpoint: t, children: r, get_args: i, fetch_params: a, callback: o, ...s }) => /* @__PURE__ */ E(n, {
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
}), vt = ({ children: e, sx: n = {} }) => /* @__PURE__ */ E(t, {
	sx: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		minHeight: "100vh",
		...n
	},
	children: /* @__PURE__ */ E(i, {
		maxWidth: "sm",
		children: /* @__PURE__ */ E(g, {
			direction: "column",
			children: e
		})
	})
}), yt = ({ title: e, body: t, show: n, footer: r, title_sx: i, footer_sx: l, content_sx: u }) => /* @__PURE__ */ D(a, {
	open: n,
	maxWidth: "lg",
	fullWidth: !0,
	scroll: "paper",
	"aria-labelledby": "centered-modal-title",
	children: [
		/* @__PURE__ */ E(c, {
			id: "centered-modal-title",
			sx: { ...i },
			children: e
		}),
		/* @__PURE__ */ E(s, {
			dividers: !0,
			sx: { ...u },
			children: t
		}),
		/* @__PURE__ */ E(o, {
			sx: l,
			children: r
		})
	]
});
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/extends.js
function L() {
	return L = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, L.apply(null, arguments);
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function R(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
//#endregion
//#region node_modules/clsx/dist/clsx.mjs
function bt(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") if (Array.isArray(e)) {
		var i = e.length;
		for (t = 0; t < i; t++) e[t] && (n = bt(e[t])) && (r && (r += " "), r += n);
	} else for (n in e) e[n] && (r && (r += " "), r += n);
	return r;
}
function xt() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = bt(e)) && (r && (r += " "), r += t);
	return r;
}
//#endregion
//#region node_modules/@mui/utils/esm/useForkRef/useForkRef.js
function St(...e) {
	let t = O.useRef(void 0), n = O.useCallback((t) => {
		let n = e.map((e) => {
			if (e == null) return null;
			if (typeof e == "function") {
				let n = e, r = n(t);
				return typeof r == "function" ? r : () => {
					n(null);
				};
			}
			return e.current = t, () => {
				e.current = null;
			};
		});
		return () => {
			n.forEach((e) => e?.());
		};
	}, e);
	return O.useMemo(() => e.every((e) => e == null) ? null : (e) => {
		t.current &&= (t.current(), void 0), e != null && (t.current = n(e));
	}, e);
}
//#endregion
//#region node_modules/@mui/utils/esm/useEnhancedEffect/useEnhancedEffect.js
var Ct = typeof window < "u" ? O.useLayoutEffect : O.useEffect;
//#endregion
//#region node_modules/@mui/utils/esm/useEventCallback/useEventCallback.js
function wt(e) {
	let t = O.useRef(e);
	return Ct(() => {
		t.current = e;
	}), O.useRef((...e) => (0, t.current)(...e)).current;
}
//#endregion
//#region node_modules/@mui/x-internals/esm/reactMajor/index.js
var Tt = parseInt(O.version, 10), z = (e) => {
	if (Tt >= 19) {
		let t = (t) => e(t, t.ref ?? null);
		return t.displayName = e.displayName ?? e.name, t;
	}
	return /* @__PURE__ */ O.forwardRef(e);
};
process.env.NODE_ENV !== "production" && (z.displayName = "forwardRef");
//#endregion
//#region node_modules/@mui/utils/esm/useId/useId.js
var Et = 0;
function Dt(e) {
	let [t, n] = O.useState(e), r = e || t;
	return O.useEffect(() => {
		t ?? (Et += 1, n(`mui-${Et}`));
	}, [t]), r;
}
var Ot = { ...O }.useId;
function kt(e) {
	if (Ot !== void 0) {
		let t = Ot();
		return e ?? t;
	}
	return Dt(e);
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/material/icons/createSvgIcon.js
var At = C, jt = At(/* @__PURE__ */ E("path", { d: "M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" }), "ArrowUpward"), Mt = At(/* @__PURE__ */ E("path", { d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" }), "ArrowDownward"), Nt = At(/* @__PURE__ */ E("path", { d: "M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" }), "KeyboardArrowRight"), Pt = At(/* @__PURE__ */ E("path", { d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" }), "ExpandMore"), Ft = At(/* @__PURE__ */ E("path", { d: "M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" }), "FilterList"), It = At(/* @__PURE__ */ E("path", { d: "M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39c.51-.66.04-1.61-.79-1.61H5.04c-.83 0-1.3.95-.79 1.61z" }), "FilterAlt"), Lt = At(/* @__PURE__ */ E("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" }), "Search");
At(/* @__PURE__ */ E("path", { d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" }), "Menu"), At(/* @__PURE__ */ E("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" }), "CheckCircle");
var Rt = At(/* @__PURE__ */ E("path", { d: "M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8" }), "Undo"), zt = At(/* @__PURE__ */ E("path", { d: "M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7z" }), "Redo"), Bt = At(/* @__PURE__ */ E("path", { d: "M14.67 5v14H9.33V5zm1 14H21V5h-5.33zm-7.34 0V5H3v14z" }), "ColumnIcon"), Vt = At(/* @__PURE__ */ E("rect", {
	width: "1",
	height: "24",
	x: "11.5",
	rx: "0.5"
}), "Separator"), Ht = At(/* @__PURE__ */ E("path", { d: "M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z" }), "ViewHeadline"), Ut = At(/* @__PURE__ */ E("path", { d: "M21,8H3V4h18V8z M21,10H3v4h18V10z M21,16H3v4h18V16z" }), "TableRows"), Wt = At(/* @__PURE__ */ E("path", { d: "M4 18h17v-6H4v6zM4 5v6h17V5H4z" }), "ViewStream"), Gt = At(/* @__PURE__ */ E("path", { d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" }), "TripleDotsVertical"), Kt = At(/* @__PURE__ */ E("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }), "Close"), qt = At(/* @__PURE__ */ E("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" }), "Add"), Jt = At(/* @__PURE__ */ E("path", { d: "M19 13H5v-2h14v2z" }), "Remove"), Yt = At(/* @__PURE__ */ E("path", { d: "M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z" }), "Load"), Xt = At(/* @__PURE__ */ E("path", { d: "M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" }), "Drag"), Zt = At(/* @__PURE__ */ E("path", { d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" }), "Check"), Qt = At(/* @__PURE__ */ E("path", { d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" }), "MoreVert"), $t = At(/* @__PURE__ */ E("path", { d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" }), "VisibilityOff"), en = At(/* @__PURE__ */ E("g", { children: /* @__PURE__ */ E("path", { d: "M14.67,5v14H9.33V5H14.67z M15.67,19H21V5h-5.33V19z M8.33,19V5H3v14H8.33z" }) }), "ViewColumn"), tn = At(/* @__PURE__ */ E("path", { d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12z" }), "Clear");
At(/* @__PURE__ */ E("path", { d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" }), "Delete");
var nn = At(/* @__PURE__ */ E("path", { d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z" }), "Delete"), rn = At(/* @__PURE__ */ E("path", { d: "M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z" }), "Download"), an = At(/* @__PURE__ */ E("path", { d: "M21 11V3h-8l3.29 3.29-10 10L3 13v8h8l-3.29-3.29 10-10z" }), "OpenInFull"), on = At(/* @__PURE__ */ E("path", { d: "M5 15h2V8.41L18.59 20 20 18.59 8.41 7H15V5H5z" }), "NorthWest"), sn = /* @__PURE__ */ O.createContext(void 0);
process.env.NODE_ENV !== "production" && (sn.displayName = "GridRootPropsContext");
//#endregion
//#region node_modules/@mui/x-data-grid/esm/hooks/utils/useGridRootProps.js
var B = () => {
	let e = O.useContext(sn);
	if (!e) throw Error("MUI X: useGridRootProps should only be used inside the DataGrid, DataGridPro or DataGridPremium component.");
	return e;
}, cn = ["sortingOrder"], ln = /* @__PURE__ */ O.memo(function(e) {
	let { sortingOrder: t } = e, n = R(e, cn), r = B(), [i] = t, a = i === "asc" ? r.slots.columnSortedAscendingIcon : r.slots.columnSortedDescendingIcon;
	return a ? /* @__PURE__ */ E(a, L({}, n)) : null;
});
process.env.NODE_ENV !== "production" && (ln.displayName = "GridColumnUnsortedIcon");
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/GridApiContext.js
var un = /* @__PURE__ */ O.createContext(void 0);
process.env.NODE_ENV !== "production" && (un.displayName = "GridApiContext");
//#endregion
//#region node_modules/@mui/x-data-grid/esm/hooks/utils/useGridApiContext.js
function V() {
	let e = O.useContext(un);
	if (e === void 0) throw Error([
		"MUI X: Could not find the Data Grid context.",
		"It looks like you rendered your component outside of a DataGrid, DataGridPro or DataGridPremium parent component.",
		"This can also happen if you are bundling multiple versions of the Data Grid."
	].join("\n"));
	return e;
}
//#endregion
//#region node_modules/@mui/x-internals/esm/hash/hash.js
var dn = new TextEncoder(), fn = 2 * 1024, pn = new ArrayBuffer(fn), mn = new Uint8Array(pn), hn = new Int32Array(pn), gn = _n;
function _n(e) {
	let t = e.length * 2;
	t > fn && (fn = t + (4 - t % 4), pn = new ArrayBuffer(fn), mn = new Uint8Array(pn), hn = new Int32Array(pn));
	let n = dn.encodeInto(e, mn).written | 0, r = 0, i = (0 + n | 0) + 374761393 | 0;
	if (n < 16) for (; (r + 3 | 0) < n; r = r + 4 | 0) i = Math.imul(vn(i + Math.imul(hn[r] | 0, 3266489917) | 0, 17) | 0, 668265263);
	else {
		let e = 606290984, t = -2048144777, a = 0, o = 1640531535;
		for (; (r + 15 | 0) < n; r = r + 16 | 0) e = Math.imul(vn(e + Math.imul(hn[r + 0 | 0] | 0, 2246822519) | 0, 13) | 0, 2654435761), t = Math.imul(vn(t + Math.imul(hn[r + 4 | 0] | 0, 2246822519) | 0, 13) | 0, 2654435761), a = Math.imul(vn(a + Math.imul(hn[r + 8 | 0] | 0, 2246822519) | 0, 13) | 0, 2654435761), o = Math.imul(vn(o + Math.imul(hn[r + 12 | 0] | 0, 2246822519) | 0, 13) | 0, 2654435761);
		for (i = (((vn(e, 1) | 0 + vn(t, 7) | 0) + vn(a, 12) | 0) + vn(o, 18) | 0) + n | 0; (r + 3 | 0) < n; r = r + 4 | 0) i = Math.imul(vn(i + Math.imul(hn[r] | 0, 3266489917) | 0, 17) | 0, 668265263);
	}
	for (; r < n; r = r + 1 | 0) i = Math.imul(vn(i + Math.imul(mn[r] | 0, 374761393) | 0, 11) | 0, 2654435761);
	return i = Math.imul(i ^ i >>> 15, 2246822519), i = Math.imul(i ^ i >>> 13, 3266489917), ((i ^ i >>> 16) >>> 0).toString();
}
function vn(e, t) {
	return e << t | e >>> 32 - t;
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/constants/cssVariables.js
var yn = {
	values: {
		xs: 0,
		sm: 600,
		md: 900,
		lg: 1200,
		xl: 1536
	},
	up: (e) => {
		let t = yn.values;
		return `@media (min-width:${typeof t[e] == "number" ? t[e] : e}px)`;
	}
}, bn = {
	spacingUnit: "--DataGrid-t-spacing-unit",
	colors: {
		border: { base: "--DataGrid-t-color-border-base" },
		foreground: {
			base: "--DataGrid-t-color-foreground-base",
			muted: "--DataGrid-t-color-foreground-muted",
			accent: "--DataGrid-t-color-foreground-accent",
			disabled: "--DataGrid-t-color-foreground-disabled",
			error: "--DataGrid-t-color-foreground-error"
		},
		background: {
			base: "--DataGrid-t-color-background-base",
			overlay: "--DataGrid-t-color-background-overlay",
			backdrop: "--DataGrid-t-color-background-backdrop"
		},
		interactive: {
			hover: "--DataGrid-t-color-interactive-hover",
			hoverOpacity: "--DataGrid-t-color-interactive-hover-opacity",
			focus: "--DataGrid-t-color-interactive-focus",
			focusOpacity: "--DataGrid-t-color-interactive-focus-opacity",
			disabled: "--DataGrid-t-color-interactive-disabled",
			disabledOpacity: "--DataGrid-t-color-interactive-disabled-opacity",
			selected: "--DataGrid-t-color-interactive-selected",
			selectedOpacity: "--DataGrid-t-color-interactive-selected-opacity"
		}
	},
	header: { background: { base: "--DataGrid-t-header-background-base" } },
	cell: { background: { pinned: "--DataGrid-t-cell-background-pinned" } },
	radius: { base: "--DataGrid-t-radius-base" },
	typography: {
		font: {
			body: "--DataGrid-t-typography-font-body",
			small: "--DataGrid-t-typography-font-small",
			large: "--DataGrid-t-typography-font-large"
		},
		fontFamily: { base: "--DataGrid-t-typography-font-family-base" },
		fontWeight: {
			light: "--DataGrid-t-typography-font-weight-light",
			regular: "--DataGrid-t-typography-font-weight-regular",
			medium: "--DataGrid-t-typography-font-weight-medium",
			bold: "--DataGrid-t-typography-font-weight-bold"
		}
	},
	transitions: {
		easing: {
			easeIn: "--DataGrid-t-transition-easing-ease-in",
			easeOut: "--DataGrid-t-transition-easing-ease-out",
			easeInOut: "--DataGrid-t-transition-easing-ease-in-out"
		},
		duration: {
			short: "--DataGrid-t-transition-duration-short",
			base: "--DataGrid-t-transition-duration-base",
			long: "--DataGrid-t-transition-duration-long"
		}
	},
	shadows: {
		base: "--DataGrid-t-shadow-base",
		overlay: "--DataGrid-t-shadow-overlay"
	},
	zIndex: {
		panel: "--DataGrid-t-z-index-panel",
		menu: "--DataGrid-t-z-index-menu"
	}
}, xn = Tn(bn), H = L({
	breakpoints: yn,
	spacing: Sn,
	transition: wn,
	keys: bn
}, xn);
function Sn(e, t, n, r) {
	return e === void 0 ? Cn(1) : t === void 0 ? Cn(e) : n === void 0 ? Cn(e) + " " + Cn(t) : r === void 0 ? Cn(e) + " " + Cn(t) + " " + Cn(n) : Cn(e) + " " + Cn(t) + " " + Cn(n) + " " + Cn(r);
}
function Cn(e) {
	return e === 0 ? "0" : `calc(var(--DataGrid-t-spacing-unit) * ${e})`;
}
function wn(e, t) {
	let { duration: n = H.transitions.duration.base, easing: r = H.transitions.easing.easeInOut, delay: i = 0 } = t ?? {};
	return e.map((e) => `${e} ${n} ${r} ${i}ms`).join(", ");
}
function Tn(e) {
	if (typeof e == "string") return `var(${e})`;
	let t = {};
	for (let n in e) Object.hasOwn(e, n) && (t[n] = Tn(e[n]));
	return t;
}
//#endregion
//#region node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js
var En = (e) => e, Dn = (() => {
	let e = En;
	return {
		configure(t) {
			e = t;
		},
		generate(t) {
			return e(t);
		},
		reset() {
			e = En;
		}
	};
})(), On = {
	active: "active",
	checked: "checked",
	completed: "completed",
	disabled: "disabled",
	error: "error",
	expanded: "expanded",
	focused: "focused",
	focusVisible: "focusVisible",
	open: "open",
	readOnly: "readOnly",
	required: "required",
	selected: "selected"
};
function kn(e, t, n = "Mui") {
	let r = On[t];
	return r ? `${n}-${r}` : `${Dn.generate(e)}-${t}`;
}
//#endregion
//#region node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
function An(e, t, n = "Mui") {
	let r = {};
	return t.forEach((t) => {
		r[t] = kn(e, t, n);
	}), r;
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/constants/gridClasses.js
function jn(e) {
	return kn("MuiDataGrid", e);
}
var Mn = {
	root: [
		"autoHeight",
		"autosizing",
		"root--densityStandard",
		"root--densityComfortable",
		"root--densityCompact",
		"root--disableUserSelection",
		"root--noToolbar",
		"withVerticalBorder"
	],
	children: /* @__PURE__ */ "actionsCell.booleanCell.cell.cell--editable.cell--editing.cell--flex.cell--pinnedLeft.cell--pinnedRight.cell--rangeBottom.cell--rangeLeft.cell--rangeRight.cell--rangeTop.cell--selectionMode.cell--textCenter.cell--textLeft.cell--textRight.cell--withLeftBorder.cell--withRightBorder.cellCheckbox.cellEmpty.cellOffsetLeft.cellSkeleton.checkboxInput.columnHeader.columnHeader--alignCenter.columnHeader--alignLeft.columnHeader--alignRight.columnHeader--dragging.columnHeader--emptyGroup.columnHeader--filledGroup.columnHeader--filtered.columnHeader--last.columnHeader--moving.columnHeader--numeric.columnHeader--pinnedLeft.columnHeader--pinnedRight.columnHeader--siblingFocused.columnHeader--sortable.columnHeader--sorted.columnHeader--withLeftBorder.columnHeader--withRightBorder.columnHeaderCheckbox.columnHeaderDraggableContainer.columnHeaderTitleContainer.columnHeaderTitleContainerContent.columnSeparator.columnSeparator--resizable.columnSeparator--resizing.columnSeparator--sideLeft.columnSeparator--sideRight.container--bottom.container--top.detailPanelToggleCell.detailPanelToggleCell--expanded.editBooleanCell.filterIcon.filler--borderBottom.filler--pinnedLeft.filler--pinnedRight.groupingCriteriaCell.groupingCriteriaCellLoadingContainer.groupingCriteriaCellToggle.headerFilterRow.iconSeparator.menuIcon.menuIconButton.menuList.menuOpen.overlayWrapperInner.pinnedRows.pinnedRows--bottom.pinnedRows--top.row.row--borderBottom.row--detailPanelExpanded.row--dragging.row--dynamicHeight.row--editable.row--editing.row--firstVisible.row--lastVisible.rowReorderCell.rowReorderCell--draggable.rowReorderCellContainer.rowReorderCellPlaceholder.rowSkeleton.scrollbar.scrollbar--horizontal.scrollbar--vertical.scrollbarFiller.scrollbarFiller--pinnedRight.sortIcon.treeDataGroupingCell.treeDataGroupingCellLoadingContainer.treeDataGroupingCellToggle.withBorderColor.row--beingDragged".split(".")
}, U = An("MuiDataGrid", [
	...Mn.root,
	...Mn.children,
	"aiAssistantPanel",
	"aiAssistantPanelHeader",
	"aiAssistantPanelTitleContainer",
	"aiAssistantPanelTitle",
	"aiAssistantPanelBody",
	"aiAssistantPanelEmptyText",
	"aiAssistantPanelFooter",
	"aiAssistantPanelConversation",
	"aiAssistantPanelConversationList",
	"aiAssistantPanelConversationTitle",
	"aiAssistantPanelSuggestions",
	"aiAssistantPanelSuggestionsList",
	"aiAssistantPanelSuggestionsItem",
	"aiAssistantPanelSuggestionsLabel",
	"aggregationColumnHeader",
	"aggregationColumnHeader--alignLeft",
	"aggregationColumnHeader--alignCenter",
	"aggregationColumnHeader--alignRight",
	"aggregationColumnHeaderLabel",
	"aggregationRowOverlayWrapper",
	"mainContent",
	"withSidePanel",
	"collapsible",
	"collapsibleTrigger",
	"collapsibleIcon",
	"collapsiblePanel",
	"columnHeader--filter",
	"columnHeaderFilterInput",
	"columnHeaderFilterOperatorLabel",
	"columnHeaderTitle",
	"columnHeaders",
	"columnsManagement",
	"columnsManagementRow",
	"columnsManagementHeader",
	"columnsManagementSearchInput",
	"columnsManagementFooter",
	"columnsManagementScrollArea",
	"columnsManagementEmptyText",
	"detailPanel",
	"footerCell",
	"panel",
	"panelHeader",
	"panelWrapper",
	"panelContent",
	"panelFooter",
	"paper",
	"editInputCell",
	"longTextCell",
	"longTextCellContent",
	"longTextCellExpandButton",
	"longTextCellCollapseButton",
	"longTextCellPopup",
	"longTextCellPopperContent",
	"editLongTextCell",
	"editLongTextCellValue",
	"editLongTextCellPopup",
	"editLongTextCellPopperContent",
	"editLongTextCellTextarea",
	"filler",
	"filterForm",
	"filterFormDeleteIcon",
	"filterFormLogicOperatorInput",
	"filterFormColumnInput",
	"filterFormOperatorInput",
	"filterFormValueInput",
	"footerContainer",
	"iconButtonContainer",
	"main",
	"main--hasPinnedRight",
	"main--hiddenContent",
	"menu",
	"overlay",
	"overlayWrapper",
	"root",
	"rowCount",
	"rowReorderIcon",
	"scrollArea--left",
	"scrollArea--right",
	"scrollArea--up",
	"scrollArea--down",
	"scrollArea",
	"scrollShadow",
	"scrollShadow--vertical",
	"scrollShadow--horizontal",
	"selectedRowCount",
	"sortButton",
	"shadowScrollArea",
	"sidebar",
	"sidebarHeader",
	"toolbarContainer",
	"toolbar",
	"toolbarLabel",
	"toolbarDivider",
	"toolbarFilterList",
	"toolbarQuickFilter",
	"toolbarQuickFilterTrigger",
	"toolbarQuickFilterControl",
	"virtualScroller",
	"virtualScroller--hasScrollX",
	"virtualScrollerContent",
	"virtualScrollerContent--overflowed",
	"virtualScrollerRenderZone",
	"pivotPanelAvailableFields",
	"pivotPanelField",
	"pivotPanelField--sorted",
	"pivotPanelFieldActionContainer",
	"pivotPanelFieldCheckbox",
	"pivotPanelFieldDragIcon",
	"pivotPanelFieldList",
	"pivotPanelFieldName",
	"pivotPanelHeader",
	"pivotPanelPlaceholder",
	"pivotPanelScrollArea",
	"pivotPanelSearchContainer",
	"pivotPanelSection",
	"pivotPanelSectionTitle",
	"pivotPanelSections",
	"pivotPanelSwitch",
	"pivotPanelSwitchLabel",
	"prompt",
	"promptContent",
	"promptText",
	"promptFeedback",
	"promptChangeList",
	"promptChangesToggle",
	"promptChangesToggleIcon",
	"promptIcon",
	"promptIconContainer",
	"promptError",
	"promptAction",
	"resizablePanelHandle",
	"resizablePanelHandle--horizontal",
	"resizablePanelHandle--vertical"
]), Nn = Object.is;
function Pn(e, t) {
	if (e === t) return !0;
	if (!(e instanceof Object) || !(t instanceof Object)) return !1;
	let n = 0, r = 0;
	for (let r in e) if (n += 1, !Nn(e[r], t[r]) || !(r in t)) return !1;
	for (let e in t) r += 1;
	return n === r;
}
//#endregion
//#region node_modules/@mui/x-internals/esm/warning/warning.js
var Fn = /* @__PURE__ */ new Set();
function In(e, t = "warning") {
	if (process.env.NODE_ENV === "production") return;
	let n = Array.isArray(e) ? e.join("\n") : e;
	Fn.has(n) || (Fn.add(n), t === "error" ? console.error(n) : console.warn(n));
}
//#endregion
//#region node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.js
var Ln = /* @__PURE__ */ ut(((e) => {
	var t = pt("react");
	function n(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var r = typeof Object.is == "function" ? Object.is : n, i = t.useState, a = t.useEffect, o = t.useLayoutEffect, s = t.useDebugValue;
	function c(e, t) {
		var n = t(), r = i({ inst: {
			value: n,
			getSnapshot: t
		} }), c = r[0].inst, u = r[1];
		return o(function() {
			c.value = n, c.getSnapshot = t, l(c) && u({ inst: c });
		}, [
			e,
			n,
			t
		]), a(function() {
			return l(c) && u({ inst: c }), e(function() {
				l(c) && u({ inst: c });
			});
		}, [e]), s(n), n;
	}
	function l(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var n = t();
			return !r(e, n);
		} catch {
			return !0;
		}
	}
	function u(e, t) {
		return t();
	}
	var d = typeof window > "u" || window.document === void 0 || window.document.createElement === void 0 ? u : c;
	e.useSyncExternalStore = t.useSyncExternalStore === void 0 ? d : t.useSyncExternalStore;
})), Rn = /* @__PURE__ */ ut(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		function t(e, t) {
			return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
		}
		function n(e, t) {
			d || a.startTransition === void 0 || (d = !0, console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
			var n = t();
			if (!f) {
				var i = t();
				o(n, i) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), f = !0);
			}
			i = s({ inst: {
				value: n,
				getSnapshot: t
			} });
			var p = i[0].inst, m = i[1];
			return l(function() {
				p.value = n, p.getSnapshot = t, r(p) && m({ inst: p });
			}, [
				e,
				n,
				t
			]), c(function() {
				return r(p) && m({ inst: p }), e(function() {
					r(p) && m({ inst: p });
				});
			}, [e]), u(n), n;
		}
		function r(e) {
			var t = e.getSnapshot;
			e = e.value;
			try {
				var n = t();
				return !o(e, n);
			} catch {
				return !0;
			}
		}
		function i(e, t) {
			return t();
		}
		typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
		var a = pt("react"), o = typeof Object.is == "function" ? Object.is : t, s = a.useState, c = a.useEffect, l = a.useLayoutEffect, u = a.useDebugValue, d = !1, f = !1, p = typeof window > "u" || window.document === void 0 || window.document.createElement === void 0 ? i : n;
		e.useSyncExternalStore = a.useSyncExternalStore === void 0 ? p : a.useSyncExternalStore, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
	})();
})), zn = /* @__PURE__ */ ut(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = Ln() : t.exports = Rn();
})), Bn = {};
function Vn(e, t) {
	let n = O.useRef(Bn);
	return n.current === Bn && (n.current = e(t)), n;
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/hooks/utils/useGridSelector.js
var Hn = zn(), Un = Object.is, Wn = Pn, Gn = (e, t) => e === t ? !0 : e.length === t.length && e.every((e, n) => e === t[n]), Kn = (e, t) => {
	let n = Object.is;
	return t instanceof Array ? n = Gn : t instanceof Object && (n = Wn), n(e, t);
}, qn = () => ({
	state: null,
	equals: null,
	selector: null,
	args: void 0
}), Jn = [], Yn = () => null;
function W(e, t, n = void 0, r = Un) {
	e.current.state || In(["MUI X: `useGridSelector` has been called before the initialization of the state.", "This hook can only be used inside the context of the grid."]);
	let i = Vn(qn), a = i.current.selector !== null, [o, s] = O.useState(a ? null : t(e, n));
	i.current.state = o, i.current.equals = r, i.current.selector = t;
	let c = i.current.args;
	if (i.current.args = n, a && !Kn(c, n)) {
		let t = i.current.selector(e, i.current.args);
		i.current.equals(i.current.state, t) || (i.current.state = t, s(t));
	}
	let l = O.useCallback(() => (i.current.subscription || (i.current.subscription = e.current.store.subscribe(() => {
		let t = i.current.selector(e, i.current.args);
		i.current.equals(i.current.state, t) || (i.current.state = t, s(t));
	})), null), Jn);
	return (0, Hn.useSyncExternalStore)(O.useCallback(() => (i.current.subscription || l(), () => {
		i.current.subscription && (i.current.subscription(), i.current.subscription = void 0);
	}), Jn), l, Yn), o;
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/hooks/utils/useGridPrivateApiContext.js
var Xn = /* @__PURE__ */ O.createContext(void 0);
process.env.NODE_ENV !== "production" && (Xn.displayName = "GridPrivateApiContext");
function Zn() {
	let e = O.useContext(Xn);
	if (e === void 0) throw Error([
		"MUI X: Could not find the Data Grid private context.",
		"It looks like you rendered your component outside of a DataGrid, DataGridPro or DataGridPremium parent component.",
		"This can also happen if you are bundling multiple versions of the Data Grid."
	].join("\n"));
	return e;
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/containers/GridRootStyles.js
var Qn = 10, $n = -5, er = 1, tr = {
	width: 3,
	rx: 1.5,
	x: 10.5
}, nr = "/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */", rr = (e) => e.current.state.dimensions.isReady ? e.current.state.dimensions.hasScrollX && (!e.current.state.dimensions.hasScrollY || e.current.state.dimensions.scrollbarSize === 0) : e.current.state.dimensions.scrollbarSize === 0, ir = I("div", {
	name: "MuiDataGrid",
	slot: "Root",
	overridesResolver: (e, t) => {
		let n = [t.root];
		return Mn.root.forEach((e) => {
			n.push({ [`&.${U[e]}`]: t[e] });
		}), Mn.children.forEach((e) => {
			n.push({ [`& .${U[e]}`]: t[e] });
		}), n;
	}
})(() => {
	let e = W(Zn(), rr), t = H.colors.background.base, n = H.header.background.base, r = H.cell.background.pinned, i = or(H.colors.interactive.hover), a = H.colors.interactive.hoverOpacity, o = H.colors.interactive.selected, s = H.colors.interactive.selectedOpacity, c = o, l = `calc(${s} + ${a})`, u = {
		hover: H.colors.interactive.hover,
		selected: o,
		selectedHover: o
	}, d = lr(t, i, a, u.hover), f = lr(t, o, s, u.selected), p = lr(t, c, l, u.selectedHover), m = lr(r, i, a, u.hover), h = lr(r, o, s, u.selected), g = lr(r, c, l, u.selectedHover), _ = (e) => ({ [`& .${U["cell--pinnedLeft"]}, & .${U["cell--pinnedRight"]}`]: {
		backgroundColor: e,
		"&.Mui-selected": {
			backgroundColor: lr(e, f, s, u.selected),
			"&:hover": { backgroundColor: lr(e, p, l, u.selectedHover) }
		}
	} }), v = _(m), y = _(h), b = _(g), x = {
		backgroundColor: f,
		"&:hover": {
			backgroundColor: p,
			"@media (hover: none)": { backgroundColor: f }
		}
	};
	return {
		"--unstable_DataGrid-radius": H.radius.base,
		"--unstable_DataGrid-headWeight": H.typography.fontWeight.medium,
		"--DataGrid-rowBorderColor": H.colors.border.base,
		"--DataGrid-cellOffsetMultiplier": 2,
		"--DataGrid-width": "0px",
		"--DataGrid-hasScrollX": "0",
		"--DataGrid-hasScrollY": "0",
		"--DataGrid-scrollbarSize": "10px",
		"--DataGrid-rowWidth": "0px",
		"--DataGrid-columnsTotalWidth": "0px",
		"--DataGrid-leftPinnedWidth": "0px",
		"--DataGrid-rightPinnedWidth": "0px",
		"--DataGrid-headerHeight": "0px",
		"--DataGrid-headersTotalHeight": "0px",
		"--DataGrid-topContainerHeight": "0px",
		"--DataGrid-bottomContainerHeight": "0px",
		flex: 1,
		boxSizing: "border-box",
		position: "relative",
		borderWidth: "1px",
		borderStyle: "solid",
		borderColor: H.colors.border.base,
		borderRadius: "var(--unstable_DataGrid-radius)",
		backgroundColor: H.colors.background.base,
		color: H.colors.foreground.base,
		font: H.typography.font.body,
		outline: "none",
		height: "100%",
		display: "flex",
		minWidth: 0,
		minHeight: 0,
		flexDirection: "column",
		overflow: "hidden",
		overflowAnchor: "none",
		transform: "translate(0, 0)",
		[`.${U.main} > *:first-child${nr}`]: {
			borderTopLeftRadius: "var(--unstable_DataGrid-radius)",
			borderTopRightRadius: "var(--unstable_DataGrid-radius)"
		},
		[`&.${U.autoHeight}`]: { height: "auto" },
		[`&.${U.autosizing}`]: {
			[`& .${U.columnHeaderTitleContainerContent} > *`]: { overflow: "visible !important" },
			"@media (hover: hover)": { [`& .${U.menuIcon}`]: {
				width: "0 !important",
				visibility: "hidden !important"
			} },
			[`& .${U.cell}`]: {
				overflow: "visible !important",
				whiteSpace: "nowrap",
				minWidth: "max-content !important",
				maxWidth: "max-content !important"
			},
			[`& .${U.groupingCriteriaCell}`]: { width: "unset" },
			[`& .${U.treeDataGroupingCell}`]: { width: "unset" },
			[`& .${U["columnHeader--filter"]}`]: {
				flex: "none !important",
				width: "unset !important"
			}
		},
		[`&.${U.withSidePanel}`]: { flexDirection: "row" },
		[`& .${U.mainContent}`]: {
			display: "flex",
			flexDirection: "column",
			overflow: "hidden",
			flex: 1
		},
		[`& .${U.columnHeader}, & .${U.cell}`]: {
			WebkitTapHighlightColor: "transparent",
			padding: "0 10px",
			boxSizing: "border-box"
		},
		[`& .${U.columnHeader}:focus-within, & .${U.cell}:focus-within`]: {
			outline: `solid ${ar(H.colors.interactive.focus, .5)} ${er}px`,
			outlineOffset: er * -1
		},
		[`& .${U.columnHeader}:focus, & .${U.cell}:focus`]: {
			outline: `solid ${H.colors.interactive.focus} ${er}px`,
			outlineOffset: er * -1
		},
		[`& .${U.columnHeader}:focus,
      & .${U["columnHeader--withLeftBorder"]},
      & .${U["columnHeader--withRightBorder"]},
      & .${U["columnHeader--siblingFocused"]}
      `]: {
			[`& .${U.columnSeparator}`]: { opacity: 0 },
			"@media (hover: none)": { [`& .${U["columnSeparator--resizable"]}`]: { opacity: 1 } },
			[`& .${U["columnSeparator--resizable"]}:hover`]: { opacity: 1 }
		},
		[`&.${U["root--noToolbar"]} [aria-rowindex="1"] [aria-colindex="1"]`]: { borderTopLeftRadius: "calc(var(--unstable_DataGrid-radius) - 1px)" },
		[`&.${U["root--noToolbar"]} [aria-rowindex="1"] .${U["columnHeader--last"]}`]: { borderTopRightRadius: e ? "calc(var(--unstable_DataGrid-radius) - 1px)" : void 0 },
		[`& .${U.columnHeaderCheckbox}, & .${U.cellCheckbox}`]: {
			padding: 0,
			justifyContent: "center",
			alignItems: "center"
		},
		[`& .${U.columnHeader}`]: {
			position: "relative",
			display: "flex",
			alignItems: "center",
			backgroundColor: n
		},
		[`& .${U.columnHeader} .${U.sortButton}`]: { backgroundColor: H.header.background.base },
		[`& .${U["columnHeader--filter"]}`]: {
			paddingTop: 8,
			paddingBottom: 8,
			paddingRight: 5,
			minHeight: "min-content",
			overflow: "hidden"
		},
		[`&.${U["root--densityCompact"]} .${U["columnHeader--filter"]}`]: {
			paddingTop: 4,
			paddingBottom: 4
		},
		[`& .${U["virtualScroller--hasScrollX"]} .${U["columnHeader--last"]}`]: { overflow: "hidden" },
		[`& .${U["pivotPanelField--sorted"]} .${U.iconButtonContainer},
      & .${U["columnHeader--sorted"]} .${U.iconButtonContainer},
      & .${U["columnHeader--filtered"]} .${U.iconButtonContainer}`]: {
			visibility: "visible",
			width: "auto"
		},
		[`& .${U.pivotPanelField}:not(.${U["pivotPanelField--sorted"]}) .${U.sortButton},
      & .${U.columnHeader}:not(.${U["columnHeader--sorted"]}) .${U.sortButton}`]: {
			opacity: 0,
			transition: H.transition(["opacity"], { duration: H.transitions.duration.short })
		},
		[`& .${U.columnHeaderTitleContainer}`]: {
			display: "flex",
			alignItems: "center",
			gap: H.spacing(.25),
			minWidth: 0,
			flex: 1,
			whiteSpace: "nowrap",
			overflow: "hidden"
		},
		[`& .${U.columnHeaderTitleContainerContent}`]: {
			overflow: "hidden",
			display: "flex",
			alignItems: "center"
		},
		[`& .${U["columnHeader--filledGroup"]} .${U.columnHeaderTitleContainer}`]: {
			borderBottomWidth: "1px",
			borderBottomStyle: "solid",
			boxSizing: "border-box"
		},
		[`& .${U.sortIcon}, & .${U.filterIcon}`]: { fontSize: "inherit" },
		[`& .${U["columnHeader--sortable"]}`]: { cursor: "pointer" },
		[`& .${U["columnHeader--alignCenter"]} .${U.columnHeaderTitleContainer}`]: { justifyContent: "center" },
		[`& .${U["columnHeader--alignRight"]} .${U.columnHeaderDraggableContainer}, & .${U["columnHeader--alignRight"]} .${U.columnHeaderTitleContainer}`]: { flexDirection: "row-reverse" },
		[`& .${U["columnHeader--alignCenter"]} .${U.menuIcon}`]: { marginLeft: "auto" },
		[`& .${U["columnHeader--alignRight"]} .${U.menuIcon}`]: {
			marginRight: "auto",
			marginLeft: -5
		},
		[`& .${U["columnHeader--moving"]}`]: { backgroundColor: d },
		[`& .${U["columnHeader--pinnedLeft"]}, & .${U["columnHeader--pinnedRight"]}`]: {
			position: "sticky",
			zIndex: 40,
			background: H.header.background.base
		},
		[`& .${U.columnSeparator}`]: {
			position: "absolute",
			overflow: "hidden",
			zIndex: 30,
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
			maxWidth: Qn,
			color: H.colors.border.base
		},
		[`& .${U.columnHeaders}`]: {
			width: "var(--DataGrid-rowWidth)",
			backgroundColor: n
		},
		"@media (hover: hover)": {
			[`& .${U.columnHeader}:hover`]: {
				[`& .${U.menuIcon}`]: {
					width: "auto",
					visibility: "visible"
				},
				[`& .${U.iconButtonContainer}`]: {
					visibility: "visible",
					width: "auto"
				}
			},
			[`& .${U.columnHeader}:not(.${U["columnHeader--sorted"]}):hover .${U.sortButton},
        & .${U.pivotPanelField}:not(.${U["pivotPanelField--sorted"]}):hover .${U.sortButton},
        & .${U.pivotPanelField}:not(.${U["pivotPanelField--sorted"]}) .${U.sortButton}:focus-visible`]: { opacity: 1 },
			[`& .${U.columnHeader}:not(.${U["columnHeader--sorted"]}):hover .${U.sortButton} > *,
        & .${U.pivotPanelField}:not(.${U["pivotPanelField--sorted"]}):hover .${U.sortButton} > *,
        & .${U.pivotPanelField}:not(.${U["pivotPanelField--sorted"]}) .${U.sortButton}:focus-visible > *`]: { opacity: .78 },
			[`& .${U.pivotPanelFieldActionContainer} button:hover`]: { backgroundColor: H.colors.background.base }
		},
		"@media (hover: none)": {
			[`& .${U.columnHeader} .${U.menuIcon}`]: {
				width: "auto",
				visibility: "visible"
			},
			[`& .${U.columnHeader}:focus,
        & .${U["columnHeader--siblingFocused"]}`]: { [`.${U["columnSeparator--resizable"]}`]: { color: H.colors.foreground.accent } },
			[`& .${U.pivotPanelField}:not(.${U["pivotPanelField--sorted"]}) .${U.sortButton}`]: { opacity: .78 }
		},
		[`& .${U["columnHeader--withLeftBorder"]} .${U["columnSeparator--sideLeft"]}:not(.${U["columnSeparator--resizable"]}), & .${U["columnHeader--withRightBorder"]} .${U["columnSeparator--sideRight"]}:not(.${U["columnSeparator--resizable"]})`]: { display: "none" },
		[`& .${U["columnSeparator--sideLeft"]}`]: { left: $n },
		[`& .${U["columnSeparator--sideRight"]}`]: { right: $n },
		[`& .${U["columnHeader--withRightBorder"]} .${U["columnSeparator--sideLeft"]}`]: { left: $n - .5 },
		[`& .${U["columnHeader--withRightBorder"]} .${U["columnSeparator--sideRight"]}`]: { right: $n - .5 },
		[`& .${U["columnSeparator--resizable"]}`]: {
			cursor: "col-resize",
			touchAction: "none",
			[`&.${U["columnSeparator--resizing"]}`]: { color: H.colors.foreground.accent },
			"@media (hover: none)": { [`& .${U.iconSeparator} rect`]: tr },
			"@media (hover: hover)": { "&:hover": {
				color: H.colors.foreground.accent,
				[`& .${U.iconSeparator} rect`]: tr
			} },
			"& svg": { pointerEvents: "none" }
		},
		[`& .${U.iconSeparator}`]: {
			color: "inherit",
			transition: H.transition(["color", "width"], { duration: H.transitions.duration.short })
		},
		[`& .${U.menuIcon}`]: {
			width: 0,
			visibility: "hidden",
			fontSize: 20,
			marginRight: -5,
			display: "flex",
			alignItems: "center"
		},
		[`.${U.menuOpen}`]: {
			visibility: "visible",
			width: "auto"
		},
		[`& .${U.headerFilterRow}`]: { [`& .${U.columnHeader}, & .${U.scrollbarFiller}`]: {
			boxSizing: "border-box",
			borderBottom: "1px solid var(--DataGrid-rowBorderColor)"
		} },
		[`& .${U["row--borderBottom"]} .${U.columnHeader},
      & .${U["row--borderBottom"]} .${U.filler},
      & .${U["row--borderBottom"]} .${U.scrollbarFiller}`]: { borderBottom: "1px solid var(--DataGrid-rowBorderColor)" },
		[`& .${U["row--borderBottom"]} .${U.cell}`]: { borderBottom: "1px solid var(--rowBorderColor)" },
		[`.${U.row}`]: {
			display: "flex",
			width: "var(--DataGrid-rowWidth)",
			breakInside: "avoid",
			"--rowBorderColor": "var(--DataGrid-rowBorderColor)",
			[`&.${U["row--firstVisible"]}`]: { "--rowBorderColor": "transparent" },
			"&:hover": {
				backgroundColor: d,
				"@media (hover: none)": { backgroundColor: "transparent" }
			},
			[`&.${U.rowSkeleton}:hover`]: { backgroundColor: "transparent" },
			"&.Mui-selected": x,
			position: "relative"
		},
		[`& .${U.cell}`]: {
			flex: "0 0 auto",
			height: "var(--height)",
			width: "var(--width)",
			lineHeight: "calc(var(--height) - 1px)",
			boxSizing: "border-box",
			borderTop: "1px solid var(--rowBorderColor)",
			overflow: "hidden",
			whiteSpace: "nowrap",
			textOverflow: "ellipsis",
			"&.Mui-selected": x
		},
		[`& .${U["virtualScrollerContent--overflowed"]} .${U["row--lastVisible"]} .${U.cell}`]: { borderTopColor: "transparent" },
		[`& .${U.pinnedRows} .${U.row}, .${U.aggregationRowOverlayWrapper} .${U.row}`]: {
			backgroundColor: r,
			"&:hover": { backgroundColor: m }
		},
		[`& .${U["pinnedRows--top"]} :first-of-type`]: { [`& .${U.cell}, .${U.scrollbarFiller}`]: { borderTop: "none" } },
		[`&.${U["root--disableUserSelection"]}`]: { userSelect: "none" },
		[`& .${U["row--dynamicHeight"]} > .${U.cell}`]: {
			whiteSpace: "initial",
			lineHeight: "inherit"
		},
		[`& .${U.cellEmpty}`]: {
			flex: 1,
			padding: 0,
			height: "unset"
		},
		[`& .${U.cell}.${U["cell--selectionMode"]}`]: { cursor: "default" },
		[`& .${U.cell}.${U["cell--editing"]}`]: {
			padding: 1,
			display: "flex",
			boxShadow: H.shadows.base,
			backgroundColor: H.colors.background.overlay,
			"&:focus-within": {
				outline: `${er}px solid ${H.colors.interactive.focus}`,
				outlineOffset: er * -1
			}
		},
		[`& .${U["cell--editing"]}`]: { "& .MuiInputBase-root": { height: "100%" } },
		[`& .${U["row--editing"]}`]: { boxShadow: H.shadows.base },
		[`& .${U["row--editing"]} .${U.cell}`]: {
			boxShadow: "none",
			backgroundColor: H.colors.background.overlay
		},
		[`& .${U.editBooleanCell}`]: {
			display: "flex",
			height: "100%",
			width: "100%",
			alignItems: "center",
			justifyContent: "center"
		},
		[`& .${U.booleanCell}[data-value="true"]`]: { color: H.colors.foreground.muted },
		[`& .${U.booleanCell}[data-value="false"]`]: { color: H.colors.foreground.disabled },
		[`& .${U.actionsCell}`]: {
			display: "inline-flex",
			alignItems: "center",
			gridGap: H.spacing(1)
		},
		[`& .${U.rowReorderCell}`]: {
			display: "inline-flex",
			flex: 1,
			alignItems: "center",
			justifyContent: "center",
			opacity: H.colors.interactive.disabledOpacity
		},
		[`& .${U["rowReorderCell--draggable"]}`]: {
			cursor: "grab",
			opacity: 1
		},
		[`& .${U.rowReorderCellContainer}`]: {
			padding: 0,
			display: "flex",
			alignItems: "stretch"
		},
		[`.${U.withBorderColor}`]: { borderColor: H.colors.border.base },
		[`& .${U["cell--withLeftBorder"]}, & .${U["columnHeader--withLeftBorder"]}`]: {
			borderLeftColor: "var(--DataGrid-rowBorderColor)",
			borderLeftWidth: "1px",
			borderLeftStyle: "solid"
		},
		[`& .${U["cell--withRightBorder"]}, & .${U["columnHeader--withRightBorder"]}`]: {
			borderRightColor: "var(--DataGrid-rowBorderColor)",
			borderRightWidth: "1px",
			borderRightStyle: "solid"
		},
		[`& .${U["cell--flex"]}`]: {
			display: "flex",
			alignItems: "center",
			lineHeight: "inherit"
		},
		[`& .${U["cell--textLeft"]}`]: {
			textAlign: "left",
			justifyContent: "flex-start"
		},
		[`& .${U["cell--textRight"]}`]: {
			textAlign: "right",
			justifyContent: "flex-end"
		},
		[`& .${U["cell--textCenter"]}`]: {
			textAlign: "center",
			justifyContent: "center"
		},
		[`& .${U["cell--pinnedLeft"]}, & .${U["cell--pinnedRight"]}`]: {
			position: "sticky",
			zIndex: 30,
			background: H.cell.background.pinned,
			"&.Mui-selected": { backgroundColor: h }
		},
		[`& .${U.row}`]: {
			"&:hover": v,
			"&.Mui-selected": y,
			"&.Mui-selected:hover": b
		},
		[`& .${U.cellOffsetLeft}`]: {
			flex: "0 0 auto",
			display: "inline-block"
		},
		[`& .${U.cellSkeleton}`]: {
			flex: "0 0 auto",
			height: "100%",
			display: "inline-flex",
			alignItems: "center"
		},
		[`& .${U.columnHeaderDraggableContainer}`]: {
			display: "flex",
			width: "100%",
			height: "100%"
		},
		[`& .${U.rowReorderCellPlaceholder}`]: { display: "none" },
		[`& .${U["columnHeader--dragging"]}`]: {
			background: H.colors.background.overlay,
			padding: "0 12px",
			borderRadius: "var(--unstable_DataGrid-radius)",
			opacity: H.colors.interactive.disabledOpacity
		},
		[`& .${U["row--dragging"]}`]: {
			background: H.colors.background.overlay,
			padding: "0 12px",
			borderRadius: "var(--unstable_DataGrid-radius)",
			border: "1px solid var(--DataGrid-rowBorderColor)",
			color: H.colors.foreground.base,
			transform: "translateZ(0)",
			[`& .${U.rowReorderCellPlaceholder}`]: {
				padding: "0 6px",
				display: "flex"
			}
		},
		[`& .${U.treeDataGroupingCell}`]: {
			display: "flex",
			alignItems: "center",
			width: "100%"
		},
		[`& .${U.treeDataGroupingCellToggle}`]: {
			flex: "0 0 28px",
			alignSelf: "stretch",
			marginRight: H.spacing(2)
		},
		[`& .${U.treeDataGroupingCellLoadingContainer}, .${U.groupingCriteriaCellLoadingContainer}`]: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			height: "100%"
		},
		[`& .${U.groupingCriteriaCell}`]: {
			display: "flex",
			alignItems: "center",
			width: "100%"
		},
		[`& .${U.groupingCriteriaCellToggle}`]: {
			flex: "0 0 28px",
			alignSelf: "stretch",
			marginRight: H.spacing(2)
		},
		[`& .${U.columnHeaders} .${U.scrollbarFiller}`]: { backgroundColor: n },
		[`.${U.scrollbarFiller}`]: {
			minWidth: "calc(var(--DataGrid-hasScrollY) * var(--DataGrid-scrollbarSize))",
			alignSelf: "stretch",
			backgroundColor: n,
			[`&.${U["scrollbarFiller--pinnedRight"]}`]: {
				position: "sticky",
				zIndex: 40,
				right: 0
			}
		},
		[`& .${U.filler}`]: { flex: "1 0 auto" },
		[`& .${U["filler--borderBottom"]}`]: { borderBottom: "1px solid var(--DataGrid-rowBorderColor)" },
		[`& .${U.columnHeaders} .${U.filler}`]: { backgroundColor: n },
		[`& .${U["main--hiddenContent"]}`]: {
			[`& .${U.virtualScrollerContent}`]: {
				position: "fixed",
				visibility: "hidden"
			},
			[`& .${U.pinnedRows}`]: { display: "none" }
		},
		[`& .${U["row--beingDragged"]}`]: {
			color: H.colors.foreground.disabled,
			"&:hover": { backgroundColor: "transparent" }
		}
	};
});
function ar(e, t) {
	return `rgba(from ${e} r g b / ${t})`;
}
function or(e) {
	return ar(e, 1);
}
var sr = typeof CSS < "u" && typeof CSS.supports == "function" && CSS.supports("color", "color-mix(in srgb, red 50%, blue 50%)"), cr = (e, t) => sr ? e : t;
function lr(e, t, n, r) {
	return cr(`color-mix(in srgb,${e}, ${t} calc(${n} * 100%))`, r);
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/material/variables.js
function ur() {
	let e = fe();
	return O.useMemo(() => ({
		id: gn(_r(e)),
		variables: dr(e)
	}), [e]);
}
function dr(e) {
	let t = pr(e), n = (e.vars || e).palette.DataGrid, r = (e.vars || e).palette.background.paper, i = n?.bg ?? (e.palette.mode === "dark" ? cr(`color-mix(in srgb, ${r} 95%, #fff)`, r) : r), a = n?.headerBg ?? i, o = n?.pinnedBg ?? i, s = e.vars ? `rgba(${e.vars.palette.background.defaultChannel} / ${e.vars.palette.action.disabledOpacity})` : le(e.palette.background.default, e.palette.action.disabledOpacity), c = e.palette.mode === "dark" ? cr(`color-mix(in srgb, ${r} 90%, #fff)`, r) : r, l = e.vars ? `rgb(${e.vars.palette.primary.mainChannel})` : e.palette.primary.main, u = fr(e), d = e.vars?.font?.body2 ?? gr(e.typography.body2), f = e.vars?.font?.caption ?? gr(e.typography.caption), p = e.vars?.font?.body1 ?? gr(e.typography.body1), m = H.keys;
	return {
		[m.spacingUnit]: e.vars ? e.vars.spacing ?? e.spacing(1) : e.spacing(1),
		[m.colors.border.base]: t,
		[m.colors.background.base]: i,
		[m.colors.background.overlay]: c,
		[m.colors.background.backdrop]: s,
		[m.colors.foreground.base]: (e.vars || e).palette.text.primary,
		[m.colors.foreground.muted]: (e.vars || e).palette.text.secondary,
		[m.colors.foreground.accent]: (e.vars || e).palette.primary.dark,
		[m.colors.foreground.disabled]: (e.vars || e).palette.text.disabled,
		[m.colors.foreground.error]: (e.vars || e).palette.error.dark,
		[m.colors.interactive.hover]: sr ? (e.vars || e).palette.action.hover : (e.vars || e).palette.grey[e.palette.mode === "dark" ? 800 : 100],
		[m.colors.interactive.hoverOpacity]: (e.vars || e).palette.action.hoverOpacity,
		[m.colors.interactive.focus]: hr((e.vars || e).palette.primary.main),
		[m.colors.interactive.focusOpacity]: (e.vars || e).palette.action.focusOpacity,
		[m.colors.interactive.disabled]: hr((e.vars || e).palette.action.disabled),
		[m.colors.interactive.disabledOpacity]: (e.vars || e).palette.action.disabledOpacity,
		[m.colors.interactive.selected]: sr ? l : (e.vars || e).palette.grey[e.palette.mode === "dark" ? 700 : 200],
		[m.colors.interactive.selectedOpacity]: (e.vars || e).palette.action.selectedOpacity,
		[m.header.background.base]: a,
		[m.cell.background.pinned]: o,
		[m.radius.base]: u,
		[m.typography.fontFamily.base]: e.typography.fontFamily,
		[m.typography.fontWeight.light]: e.typography.fontWeightLight,
		[m.typography.fontWeight.regular]: e.typography.fontWeightRegular,
		[m.typography.fontWeight.medium]: e.typography.fontWeightMedium,
		[m.typography.fontWeight.bold]: e.typography.fontWeightBold,
		[m.typography.font.body]: d,
		[m.typography.font.small]: f,
		[m.typography.font.large]: p,
		[m.transitions.easing.easeIn]: e.transitions.easing.easeIn,
		[m.transitions.easing.easeOut]: e.transitions.easing.easeOut,
		[m.transitions.easing.easeInOut]: e.transitions.easing.easeInOut,
		[m.transitions.duration.short]: `${e.transitions.duration.shorter}ms`,
		[m.transitions.duration.base]: `${e.transitions.duration.short}ms`,
		[m.transitions.duration.long]: `${e.transitions.duration.standard}ms`,
		[m.shadows.base]: (e.vars || e).shadows[2],
		[m.shadows.overlay]: (e.vars || e).shadows[8],
		[m.zIndex.panel]: (e.vars || e).zIndex.modal,
		[m.zIndex.menu]: (e.vars || e).zIndex.modal
	};
}
function fr(e) {
	return e.vars ? e.vars.shape.borderRadius : typeof e.shape.borderRadius == "number" ? `${e.shape.borderRadius}px` : e.shape.borderRadius;
}
function pr(e) {
	return e.vars ? e.vars.palette.TableCell.border : e.palette.mode === "light" ? de(le(e.palette.divider, 1), .88) : ue(le(e.palette.divider, 1), .68);
}
function mr(e, t) {
	return `rgba(from ${e} r g b / ${t})`;
}
function hr(e) {
	return mr(e, 1);
}
function gr(e) {
	if (!e) return;
	let t = typeof e.fontSize == "number" ? `${e.fontSize}px` : e.fontSize;
	return `${e.fontWeight} ${t} / ${e.lineHeight} ${e.fontFamily}`;
}
function _r(e) {
	let t = /* @__PURE__ */ new WeakSet();
	return JSON.stringify(e, (e, n) => {
		if (typeof window < "u" && n === window || typeof document < "u" && n === document) return n.toString();
		if (typeof n == "object" && n) {
			if (/* @__PURE__ */ O.isValidElement(n) || t.has(n)) return null;
			t.add(n);
		}
		return n;
	});
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/material/index.js
var vr = [
	"id",
	"label",
	"labelId",
	"material",
	"disabled",
	"slotProps",
	"onChange",
	"onKeyDown",
	"onOpen",
	"onClose",
	"size",
	"style",
	"fullWidth"
], yr = [
	"onRowsPerPageChange",
	"material",
	"disabled"
], br = ["material"], xr = [
	"autoFocus",
	"label",
	"fullWidth",
	"slotProps",
	"className",
	"material"
], Sr = ["material"], Cr = ["material"], wr = ["material"], Tr = ["material"], Er = ["material"], Dr = ["material"], Or = ["material"], kr = ["material"], Ar = ["material"], jr = [
	"material",
	"label",
	"className"
], Mr = ["material"], Nr = [
	"inert",
	"iconStart",
	"iconEnd",
	"children",
	"material"
], Pr = ["slotProps", "material"], Fr = [
	"id",
	"multiple",
	"freeSolo",
	"options",
	"getOptionLabel",
	"isOptionEqualToValue",
	"value",
	"onChange",
	"label",
	"placeholder",
	"slotProps",
	"material"
], Ir = ["key"], Lr = [
	"inputProps",
	"InputProps",
	"InputLabelProps"
], Rr = ["slotProps", "material"], zr = ["material"], Br = [
	"ref",
	"open",
	"children",
	"className",
	"clickAwayTouchEvent",
	"clickAwayMouseEvent",
	"flip",
	"focusTrap",
	"onExited",
	"onClickAway",
	"onDidShow",
	"onDidHide",
	"id",
	"target",
	"transition",
	"placement",
	"material"
], Vr = ["native"], Hr = [
	"children",
	"value",
	"active"
], Ur = [
	"items",
	"value",
	"material"
], Wr = I(Re, { slot: "internal" })(({ theme: e }) => ({ [`&.${ze.positionEnd} .${Le.sizeSmall}`]: { marginRight: e.spacing(-.75) } })), Gr = I(je, {
	slot: "internal",
	shouldForwardProp: (e) => e !== "fullWidth"
})(({ theme: e }) => ({
	gap: e.spacing(.5),
	margin: 0,
	overflow: "hidden",
	[`& .${Me.label}`]: {
		fontSize: e.typography.pxToRem(14),
		overflow: "hidden",
		textOverflow: "ellipsis",
		whiteSpace: "nowrap"
	},
	variants: [{
		props: { fullWidth: !0 },
		style: { width: "100%" }
	}]
})), Kr = I(he, {
	slot: "internal",
	shouldForwardProp: (e) => e !== "density"
})(({ theme: e }) => ({ variants: [{
	props: { density: "compact" },
	style: { padding: e.spacing(.5) }
}] })), qr = I(we, { slot: "internal" })({ [`& .${Te.primary}`]: {
	overflowX: "clip",
	textOverflow: "ellipsis",
	maxWidth: "300px"
} }), Jr = z(function(e, t) {
	let { id: n, label: r, labelId: i, material: a, disabled: o, slotProps: s, onChange: c, onKeyDown: l, onOpen: u, onClose: d, size: f, style: p, fullWidth: m } = e, h = R(e, vr), g = fe().components?.MuiTextField?.defaultProps ?? {}, _ = f ?? g.size, v = g.variant ?? "outlined", y = { PaperProps: { onKeyDown: l } };
	return d && (y.onClose = d), /* @__PURE__ */ D(Ae, {
		size: _,
		fullWidth: m,
		style: p,
		disabled: o,
		ref: t,
		children: [/* @__PURE__ */ E(qe, {
			id: i,
			htmlFor: n,
			shrink: !0,
			variant: v,
			children: r
		}), /* @__PURE__ */ E(Ne, L({
			id: n,
			labelId: i,
			label: r,
			displayEmpty: !0,
			onChange: c,
			variant: v
		}, h, {
			inputProps: s?.htmlInput,
			onOpen: u,
			MenuProps: y,
			size: _
		}, a))]
	});
});
process.env.NODE_ENV !== "production" && (Jr.displayName = "BaseSelect");
var Yr = I(Ve, { slot: "internal" })(({ theme: e }) => ({
	[`& .${He.selectLabel}`]: {
		display: "none",
		[e.breakpoints.up("sm")]: { display: "block" }
	},
	[`& .${He.input}`]: {
		display: "none",
		[e.breakpoints.up("sm")]: { display: "inline-flex" }
	}
})), Xr = z(function(e, t) {
	let { onRowsPerPageChange: n, material: r, disabled: i } = e, a = R(e, yr), o = O.useMemo(() => {
		if (i) return {
			backIconButtonProps: { disabled: !0 },
			nextIconButtonProps: { disabled: !0 }
		};
	}, [i]), s = V(), { estimatedRowCount: c } = B();
	return /* @__PURE__ */ E(Yr, L({
		component: "div",
		onRowsPerPageChange: wt((e) => {
			n?.(Number(e.target.value));
		}),
		labelRowsPerPage: s.current.getLocaleText("paginationRowsPerPage"),
		labelDisplayedRows: (e) => s.current.getLocaleText("paginationDisplayedRows")(L({}, e, { estimated: c })),
		getItemAriaLabel: s.current.getLocaleText("paginationItemAriaLabel")
	}, o, a, r, { ref: t }));
});
process.env.NODE_ENV !== "production" && (Xr.displayName = "BasePagination");
var Zr = z(function(e, t) {
	let { material: n } = e;
	return /* @__PURE__ */ E(me, L({}, R(e, br), n, { ref: t }));
});
process.env.NODE_ENV !== "production" && (Zr.displayName = "BaseBadge");
var Qr = z(function(e, t) {
	let { autoFocus: n, label: r, fullWidth: i, slotProps: a, className: o, material: s } = e, c = R(e, xr), l = O.useRef(null), u = St(l, t), d = O.useRef(null);
	return O.useEffect(() => {
		n ? (l.current?.querySelector("input"))?.focus({ preventScroll: !0 }) : n === !1 && d.current && d.current.stop({});
	}, [n]), r ? /* @__PURE__ */ E(Gr, {
		className: o,
		control: /* @__PURE__ */ E(Kr, L({}, c, s, {
			inputProps: a?.htmlInput,
			ref: u,
			touchRippleRef: d
		})),
		label: r,
		fullWidth: i
	}) : /* @__PURE__ */ E(Kr, L({}, c, s, {
		className: xt(o, s?.className),
		inputProps: a?.htmlInput,
		ref: u,
		touchRippleRef: d
	}));
});
process.env.NODE_ENV !== "production" && (Qr.displayName = "BaseCheckbox");
var $r = z(function(e, t) {
	let { material: n } = e;
	return /* @__PURE__ */ E(_e, L({}, R(e, Sr), n, { ref: t }));
});
process.env.NODE_ENV !== "production" && ($r.displayName = "BaseCircularProgress");
var ei = z(function(e, t) {
	let { material: n } = e;
	return /* @__PURE__ */ E(ve, L({}, R(e, Cr), n, { ref: t }));
});
process.env.NODE_ENV !== "production" && (ei.displayName = "BaseDivider");
var ti = z(function(e, t) {
	let { material: n } = e;
	return /* @__PURE__ */ E(Se, L({}, R(e, wr), n, { ref: t }));
});
process.env.NODE_ENV !== "production" && (ti.displayName = "BaseLinearProgress");
var ni = z(function(e, t) {
	let { material: n } = e;
	return /* @__PURE__ */ E(Fe, L({}, R(e, Tr), n, { ref: t }));
});
process.env.NODE_ENV !== "production" && (ni.displayName = "BaseButton");
var ri = I(Ze, { slot: "internal" })(({ theme: e }) => ({
	gap: e.spacing(1),
	border: 0
})), ii = z(function(e, t) {
	let { material: n } = e;
	return /* @__PURE__ */ E(ri, L({
		size: "small",
		color: "primary"
	}, R(e, Er), n, { ref: t }));
});
process.env.NODE_ENV !== "production" && (ii.displayName = "BaseToggleButton");
var ai = z(function(e, t) {
	let { material: n } = e;
	return /* @__PURE__ */ E(ge, L({}, R(e, Dr), n, { ref: t }));
});
process.env.NODE_ENV !== "production" && (ai.displayName = "BaseChip");
var oi = z(function(e, t) {
	let { material: n } = e;
	return /* @__PURE__ */ E(Ie, L({}, R(e, Or), n, { ref: t }));
});
process.env.NODE_ENV !== "production" && (oi.displayName = "BaseIconButton");
var si = z(function(e, t) {
	let { material: n } = e;
	return /* @__PURE__ */ E(Be, L({}, R(e, kr), n, { ref: t }));
});
process.env.NODE_ENV !== "production" && (si.displayName = "BaseTooltip");
var ci = z(function(e, t) {
	let { material: n } = e;
	return /* @__PURE__ */ E(Je, L({}, R(e, Ar), n, { ref: t }));
});
process.env.NODE_ENV !== "production" && (ci.displayName = "BaseSkeleton");
var li = z(function(e, t) {
	let { material: n, label: r, className: i } = e, a = R(e, jr);
	return r ? /* @__PURE__ */ E(Gr, {
		className: i,
		control: /* @__PURE__ */ E(Pe, L({}, a, n, { ref: t })),
		label: r
	}) : /* @__PURE__ */ E(Pe, L({}, a, n, {
		className: i,
		ref: t
	}));
});
process.env.NODE_ENV !== "production" && (li.displayName = "BaseSwitch");
var ui = z(function(e, t) {
	let { material: n } = e;
	return /* @__PURE__ */ E(Ee, L({}, R(e, Mr), n, { ref: t }));
});
process.env.NODE_ENV !== "production" && (ui.displayName = "BaseMenuList");
function di(e) {
	let { inert: t, iconStart: n, iconEnd: r, children: i, material: a } = e, o = R(e, Nr);
	return t && (o.disableRipple = !0), /* @__PURE__ */ O.createElement(De, L({}, o, a), [
		n && /* @__PURE__ */ E(Ce, { children: n }, "1"),
		/* @__PURE__ */ E(qr, { children: i }, "2"),
		r && /* @__PURE__ */ E(Ce, { children: r }, "3")
	]);
}
function fi(e) {
	let { slotProps: t, material: n } = e, r = R(e, Pr), i = fe().components?.MuiTextField?.defaultProps ?? {};
	return /* @__PURE__ */ E(Oe, L({
		variant: r.variant ?? i.variant ?? "outlined",
		size: r.size ?? i.size
	}, r, n, {
		inputProps: t?.htmlInput,
		InputProps: hi(t?.input),
		InputLabelProps: L({ shrink: !0 }, t?.inputLabel)
	}));
}
function pi(e) {
	let t = B(), { id: n, multiple: r, freeSolo: i, options: a, getOptionLabel: o, isOptionEqualToValue: s, value: c, onChange: l, label: u, placeholder: d, slotProps: f, material: p } = e, m = R(e, Fr);
	return /* @__PURE__ */ E(pe, L({
		id: n,
		multiple: r,
		freeSolo: i,
		options: a,
		getOptionLabel: o,
		isOptionEqualToValue: s,
		value: c,
		onChange: l,
		renderTags: (e, t) => e.map((e, n) => {
			let r = t({ index: n }), { key: i } = r, a = R(r, Ir);
			return /* @__PURE__ */ E(ge, L({
				variant: "outlined",
				size: "small",
				label: typeof e == "string" ? e : o?.(e)
			}, a), i);
		}),
		renderInput: (e) => {
			let { inputProps: n, InputProps: r, InputLabelProps: i } = e;
			return /* @__PURE__ */ E(Oe, L({}, R(e, Lr), {
				label: u,
				placeholder: d,
				inputProps: n,
				InputProps: hi(r, !1),
				InputLabelProps: L({ shrink: !0 }, i)
			}, f?.textField, t.slotProps?.baseTextField));
		}
	}, m, p));
}
function mi(e) {
	return /* @__PURE__ */ E(ye, L({}, hi(e)));
}
function hi(e, t = !0) {
	if (!e) return;
	let { slotProps: n, material: r } = e, i = R(e, Rr);
	t && (i.startAdornment &&= /* @__PURE__ */ E(Wr, {
		position: "start",
		children: i.startAdornment
	}), i.endAdornment &&= /* @__PURE__ */ E(Wr, {
		position: "end",
		children: i.endAdornment
	}));
	for (let e in r) Object.hasOwn(r, e) && (i[e] = r[e]);
	return n?.htmlInput && (i.inputProps ? i.inputProps = L({}, i.inputProps, n?.htmlInput) : i.inputProps = n?.htmlInput), i;
}
var gi = z(function(e, t) {
	let { material: n } = e;
	return /* @__PURE__ */ E(ke, L({}, R(e, zr), n, { ref: t }));
});
process.env.NODE_ENV !== "production" && (gi.displayName = "BaseTextarea");
var _i = {
	"bottom-start": "top left",
	"bottom-end": "top right"
};
function vi(e) {
	let { open: t, children: n, className: r, flip: i, onExited: a, onDidShow: o, onDidHide: s, id: c, target: l, transition: u, placement: d, material: f } = e, p = R(e, Br), m = O.useMemo(() => {
		let e = [{
			name: "preventOverflow",
			options: { padding: 8 }
		}];
		return i && e.push({
			name: "flip",
			enabled: !0
		}), (o || s) && e.push({
			name: "isPlaced",
			enabled: !0,
			phase: "main",
			fn: () => {
				o?.();
			},
			effect: () => () => {
				s?.();
			}
		}), e;
	}, [
		i,
		o,
		s
	]), h;
	if (!u) h = yi(e, n);
	else {
		let t = (e) => (t) => {
			e && e(), a && a(t);
		};
		h = (r) => yi(e, /* @__PURE__ */ E(Ge, L({}, r.TransitionProps, {
			style: { transformOrigin: _i[r.placement] },
			onExited: t(r.TransitionProps?.onExited),
			children: /* @__PURE__ */ E(Ke, { children: n })
		})));
	}
	return /* @__PURE__ */ E(Ue, L({
		id: c,
		className: r,
		open: t,
		anchorEl: l,
		transition: u,
		placement: d,
		modifiers: m
	}, p, f, { children: h }));
}
function yi(e, t) {
	return xi(e, bi(e, t));
}
function bi(e, t) {
	return e.onClickAway === void 0 ? t : /* @__PURE__ */ E(We, {
		onClickAway: e.onClickAway,
		touchEvent: e.clickAwayTouchEvent,
		mouseEvent: e.clickAwayMouseEvent,
		children: t
	});
}
function xi(e, t) {
	return e.focusTrap === void 0 ? t : /* @__PURE__ */ E(xe, {
		open: !0,
		disableEnforceFocus: !0,
		disableAutoFocus: !0,
		children: /* @__PURE__ */ E("div", {
			tabIndex: -1,
			children: t
		})
	});
}
function Si(e) {
	let { native: t } = e, n = R(e, Vr);
	return E(t ? "option" : De, L({}, n));
}
var Ci = I(Ye, {
	name: "MuiDataGrid",
	slot: "Tabs"
})(({ theme: e }) => ({ borderBottom: `1px solid ${e.palette.divider}` })), wi = I(Xe, {
	name: "MuiDataGrid",
	slot: "Tab"
})({
	flex: 1,
	minWidth: "fit-content"
}), Ti = I("div", {
	name: "MuiDataGrid",
	slot: "TabPanel"
})({
	flex: 1,
	display: "flex",
	flexDirection: "column",
	overflow: "hidden"
});
function Ei(e) {
	let { children: t, active: n } = e, r = R(e, Hr);
	return /* @__PURE__ */ E(Ti, L({
		role: "tabpanel",
		style: { display: n ? "flex" : "none" }
	}, r, { children: t }));
}
function Di(e) {
	let { items: t, value: n, material: r } = e, i = R(e, Ur), a = kt(), o = `${a}-tab-${n}`, s = `${a}-tabpanel-${n}`;
	return /* @__PURE__ */ D(O.Fragment, { children: [/* @__PURE__ */ E(Ci, L({}, i, {
		value: n,
		variant: "scrollable",
		scrollButtons: "auto"
	}, r, { children: t.map((e) => /* @__PURE__ */ E(wi, {
		value: e.value,
		label: e.label,
		id: o,
		"aria-controls": s
	}, e.value)) })), t.map((e) => /* @__PURE__ */ E(Ei, {
		value: e.value,
		active: n === e.value,
		id: s,
		"aria-labelledby": o,
		children: e.children
	}, e.value))] });
}
var Oi = L({}, {
	baseAutocomplete: pi,
	baseBadge: Zr,
	baseCheckbox: Qr,
	baseChip: ai,
	baseCircularProgress: $r,
	baseDivider: ei,
	baseInput: mi,
	baseTextarea: gi,
	baseLinearProgress: ti,
	baseMenuList: ui,
	baseMenuItem: di,
	baseTextField: fi,
	baseButton: ni,
	baseIconButton: oi,
	baseToggleButton: ii,
	baseTooltip: si,
	baseTabs: Di,
	basePagination: Xr,
	basePopper: vi,
	baseSelect: Jr,
	baseSelectOption: Si,
	baseSkeleton: ci,
	baseSwitch: li
}, {
	booleanCellTrueIcon: Zt,
	booleanCellFalseIcon: Kt,
	columnMenuIcon: Gt,
	openFilterButtonIcon: Ft,
	filterPanelDeleteIcon: Kt,
	undoIcon: Rt,
	redoIcon: zt,
	columnFilteredIcon: It,
	columnSelectorIcon: Bt,
	columnUnsortedIcon: ln,
	columnSortedAscendingIcon: jt,
	columnSortedDescendingIcon: Mt,
	columnResizeIcon: Vt,
	densityCompactIcon: Ht,
	densityStandardIcon: Ut,
	densityComfortableIcon: Wt,
	exportIcon: rn,
	moreActionsIcon: Qt,
	treeDataCollapseIcon: Pt,
	treeDataExpandIcon: Nt,
	groupingCriteriaCollapseIcon: Pt,
	groupingCriteriaExpandIcon: Nt,
	detailPanelExpandIcon: qt,
	detailPanelCollapseIcon: Jt,
	rowReorderIcon: Xt,
	quickFilterIcon: Lt,
	quickFilterClearIcon: tn,
	columnMenuHideIcon: $t,
	columnMenuSortAscendingIcon: jt,
	columnMenuSortDescendingIcon: Mt,
	columnMenuUnsortIcon: null,
	columnMenuFilterIcon: It,
	columnMenuManageColumnsIcon: en,
	columnMenuClearIcon: tn,
	loadIcon: Yt,
	filterPanelAddIcon: qt,
	filterPanelRemoveAllIcon: nn,
	columnReorderIcon: Xt,
	menuItemCheckIcon: Zt,
	longTextCellExpandIcon: an,
	longTextCellCollapseIcon: on
}), ki = () => O.useRef(null), Ai = /* @__PURE__ */ ut(((e) => {
	var t = typeof Symbol == "function" && Symbol.for, n = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, i = t ? Symbol.for("react.fragment") : 60107, a = t ? Symbol.for("react.strict_mode") : 60108, o = t ? Symbol.for("react.profiler") : 60114, s = t ? Symbol.for("react.provider") : 60109, c = t ? Symbol.for("react.context") : 60110, l = t ? Symbol.for("react.async_mode") : 60111, u = t ? Symbol.for("react.concurrent_mode") : 60111, d = t ? Symbol.for("react.forward_ref") : 60112, f = t ? Symbol.for("react.suspense") : 60113, p = t ? Symbol.for("react.suspense_list") : 60120, m = t ? Symbol.for("react.memo") : 60115, h = t ? Symbol.for("react.lazy") : 60116, g = t ? Symbol.for("react.block") : 60121, _ = t ? Symbol.for("react.fundamental") : 60117, v = t ? Symbol.for("react.responder") : 60118, y = t ? Symbol.for("react.scope") : 60119;
	function b(e) {
		if (typeof e == "object" && e) {
			var t = e.$$typeof;
			switch (t) {
				case n: switch (e = e.type, e) {
					case l:
					case u:
					case i:
					case o:
					case a:
					case f: return e;
					default: switch (e &&= e.$$typeof, e) {
						case c:
						case d:
						case h:
						case m:
						case s: return e;
						default: return t;
					}
				}
				case r: return t;
			}
		}
	}
	function x(e) {
		return b(e) === u;
	}
	e.AsyncMode = l, e.ConcurrentMode = u, e.ContextConsumer = c, e.ContextProvider = s, e.Element = n, e.ForwardRef = d, e.Fragment = i, e.Lazy = h, e.Memo = m, e.Portal = r, e.Profiler = o, e.StrictMode = a, e.Suspense = f, e.isAsyncMode = function(e) {
		return x(e) || b(e) === l;
	}, e.isConcurrentMode = x, e.isContextConsumer = function(e) {
		return b(e) === c;
	}, e.isContextProvider = function(e) {
		return b(e) === s;
	}, e.isElement = function(e) {
		return typeof e == "object" && !!e && e.$$typeof === n;
	}, e.isForwardRef = function(e) {
		return b(e) === d;
	}, e.isFragment = function(e) {
		return b(e) === i;
	}, e.isLazy = function(e) {
		return b(e) === h;
	}, e.isMemo = function(e) {
		return b(e) === m;
	}, e.isPortal = function(e) {
		return b(e) === r;
	}, e.isProfiler = function(e) {
		return b(e) === o;
	}, e.isStrictMode = function(e) {
		return b(e) === a;
	}, e.isSuspense = function(e) {
		return b(e) === f;
	}, e.isValidElementType = function(e) {
		return typeof e == "string" || typeof e == "function" || e === i || e === u || e === o || e === a || e === f || e === p || typeof e == "object" && !!e && (e.$$typeof === h || e.$$typeof === m || e.$$typeof === s || e.$$typeof === c || e.$$typeof === d || e.$$typeof === _ || e.$$typeof === v || e.$$typeof === y || e.$$typeof === g);
	}, e.typeOf = b;
})), ji = /* @__PURE__ */ ut(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		var t = typeof Symbol == "function" && Symbol.for, n = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, i = t ? Symbol.for("react.fragment") : 60107, a = t ? Symbol.for("react.strict_mode") : 60108, o = t ? Symbol.for("react.profiler") : 60114, s = t ? Symbol.for("react.provider") : 60109, c = t ? Symbol.for("react.context") : 60110, l = t ? Symbol.for("react.async_mode") : 60111, u = t ? Symbol.for("react.concurrent_mode") : 60111, d = t ? Symbol.for("react.forward_ref") : 60112, f = t ? Symbol.for("react.suspense") : 60113, p = t ? Symbol.for("react.suspense_list") : 60120, m = t ? Symbol.for("react.memo") : 60115, h = t ? Symbol.for("react.lazy") : 60116, g = t ? Symbol.for("react.block") : 60121, _ = t ? Symbol.for("react.fundamental") : 60117, v = t ? Symbol.for("react.responder") : 60118, y = t ? Symbol.for("react.scope") : 60119;
		function b(e) {
			return typeof e == "string" || typeof e == "function" || e === i || e === u || e === o || e === a || e === f || e === p || typeof e == "object" && !!e && (e.$$typeof === h || e.$$typeof === m || e.$$typeof === s || e.$$typeof === c || e.$$typeof === d || e.$$typeof === _ || e.$$typeof === v || e.$$typeof === y || e.$$typeof === g);
		}
		function x(e) {
			if (typeof e == "object" && e) {
				var t = e.$$typeof;
				switch (t) {
					case n:
						var p = e.type;
						switch (p) {
							case l:
							case u:
							case i:
							case o:
							case a:
							case f: return p;
							default:
								var g = p && p.$$typeof;
								switch (g) {
									case c:
									case d:
									case h:
									case m:
									case s: return g;
									default: return t;
								}
						}
					case r: return t;
				}
			}
		}
		var S = l, C = u, w = c, T = s, E = n, D = d, O = i, k = h, A = m, j = r, M = o, N = a, P = f, ee = !1;
		function te(e) {
			return ee || (ee = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), ne(e) || x(e) === l;
		}
		function ne(e) {
			return x(e) === u;
		}
		function F(e) {
			return x(e) === c;
		}
		function re(e) {
			return x(e) === s;
		}
		function ie(e) {
			return typeof e == "object" && !!e && e.$$typeof === n;
		}
		function ae(e) {
			return x(e) === d;
		}
		function oe(e) {
			return x(e) === i;
		}
		function se(e) {
			return x(e) === h;
		}
		function ce(e) {
			return x(e) === m;
		}
		function le(e) {
			return x(e) === r;
		}
		function ue(e) {
			return x(e) === o;
		}
		function de(e) {
			return x(e) === a;
		}
		function I(e) {
			return x(e) === f;
		}
		e.AsyncMode = S, e.ConcurrentMode = C, e.ContextConsumer = w, e.ContextProvider = T, e.Element = E, e.ForwardRef = D, e.Fragment = O, e.Lazy = k, e.Memo = A, e.Portal = j, e.Profiler = M, e.StrictMode = N, e.Suspense = P, e.isAsyncMode = te, e.isConcurrentMode = ne, e.isContextConsumer = F, e.isContextProvider = re, e.isElement = ie, e.isForwardRef = ae, e.isFragment = oe, e.isLazy = se, e.isMemo = ce, e.isPortal = le, e.isProfiler = ue, e.isStrictMode = de, e.isSuspense = I, e.isValidElementType = b, e.typeOf = x;
	})();
})), Mi = /* @__PURE__ */ ut(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = Ai() : t.exports = ji();
})), Ni = /* @__PURE__ */ ut(((e, t) => {
	var n = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
	function a(e) {
		if (e == null) throw TypeError("Object.assign cannot be called with null or undefined");
		return Object(e);
	}
	function o() {
		try {
			if (!Object.assign) return !1;
			var e = /* @__PURE__ */ new String("abc");
			if (e[5] = "de", Object.getOwnPropertyNames(e)[0] === "5") return !1;
			for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
			if (Object.getOwnPropertyNames(t).map(function(e) {
				return t[e];
			}).join("") !== "0123456789") return !1;
			var r = {};
			return "abcdefghijklmnopqrst".split("").forEach(function(e) {
				r[e] = e;
			}), Object.keys(Object.assign({}, r)).join("") === "abcdefghijklmnopqrst";
		} catch {
			return !1;
		}
	}
	t.exports = o() ? Object.assign : function(e, t) {
		for (var o, s = a(e), c, l = 1; l < arguments.length; l++) {
			for (var u in o = Object(arguments[l]), o) r.call(o, u) && (s[u] = o[u]);
			if (n) {
				c = n(o);
				for (var d = 0; d < c.length; d++) i.call(o, c[d]) && (s[c[d]] = o[c[d]]);
			}
		}
		return s;
	};
})), Pi = /* @__PURE__ */ ut(((e, t) => {
	t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
})), Fi = /* @__PURE__ */ ut(((e, t) => {
	t.exports = Function.call.bind(Object.prototype.hasOwnProperty);
})), Ii = /* @__PURE__ */ ut(((e, t) => {
	var n = function() {};
	if (process.env.NODE_ENV !== "production") {
		var r = Pi(), i = {}, a = Fi();
		n = function(e) {
			var t = "Warning: " + e;
			typeof console < "u" && console.error(t);
			try {
				throw Error(t);
			} catch {}
		};
	}
	function o(e, t, o, s, c) {
		if (process.env.NODE_ENV !== "production") {
			for (var l in e) if (a(e, l)) {
				var u;
				try {
					if (typeof e[l] != "function") {
						var d = Error((s || "React class") + ": " + o + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
						throw d.name = "Invariant Violation", d;
					}
					u = e[l](t, l, s, o, null, r);
				} catch (e) {
					u = e;
				}
				if (u && !(u instanceof Error) && n((s || "React class") + ": type specification of " + o + " `" + l + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof u + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."), u instanceof Error && !(u.message in i)) {
					i[u.message] = !0;
					var f = c ? c() : "";
					n("Failed " + o + " type: " + u.message + (f ?? ""));
				}
			}
		}
	}
	o.resetWarningCache = function() {
		process.env.NODE_ENV !== "production" && (i = {});
	}, t.exports = o;
})), Li = /* @__PURE__ */ ut(((e, t) => {
	var n = Mi(), r = Ni(), i = Pi(), a = Fi(), o = Ii(), s = function() {};
	process.env.NODE_ENV !== "production" && (s = function(e) {
		var t = "Warning: " + e;
		typeof console < "u" && console.error(t);
		try {
			throw Error(t);
		} catch {}
	});
	function c() {
		return null;
	}
	t.exports = function(e, t) {
		var l = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
		function d(e) {
			var t = e && (l && e[l] || e[u]);
			if (typeof t == "function") return t;
		}
		var f = "<<anonymous>>", p = {
			array: _("array"),
			bigint: _("bigint"),
			bool: _("boolean"),
			func: _("function"),
			number: _("number"),
			object: _("object"),
			string: _("string"),
			symbol: _("symbol"),
			any: v(),
			arrayOf: y,
			element: b(),
			elementType: x(),
			instanceOf: S,
			node: E(),
			objectOf: w,
			oneOf: C,
			oneOfType: T,
			shape: O,
			exact: k
		};
		function m(e, t) {
			return e === t ? e !== 0 || 1 / e == 1 / t : e !== e && t !== t;
		}
		function h(e, t) {
			this.message = e, this.data = t && typeof t == "object" ? t : {}, this.stack = "";
		}
		h.prototype = Error.prototype;
		function g(e) {
			if (process.env.NODE_ENV !== "production") var n = {}, r = 0;
			function a(a, o, c, l, u, d, p) {
				if (l ||= f, d ||= c, p !== i) {
					if (t) {
						var m = /* @__PURE__ */ Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
						throw m.name = "Invariant Violation", m;
					} else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
						var g = l + ":" + c;
						!n[g] && r < 3 && (s("You are manually calling a React.PropTypes validation function for the `" + d + "` prop on `" + l + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."), n[g] = !0, r++);
					}
				}
				return o[c] == null ? a ? o[c] === null ? new h("The " + u + " `" + d + "` is marked as required " + ("in `" + l + "`, but its value is `null`.")) : new h("The " + u + " `" + d + "` is marked as required in " + ("`" + l + "`, but its value is `undefined`.")) : null : e(o, c, l, u, d);
			}
			var o = a.bind(null, !1);
			return o.isRequired = a.bind(null, !0), o;
		}
		function _(e) {
			function t(t, n, r, i, a, o) {
				var s = t[n];
				if (M(s) !== e) {
					var c = N(s);
					return new h("Invalid " + i + " `" + a + "` of type " + ("`" + c + "` supplied to `" + r + "`, expected ") + ("`" + e + "`."), { expectedType: e });
				}
				return null;
			}
			return g(t);
		}
		function v() {
			return g(c);
		}
		function y(e) {
			function t(t, n, r, a, o) {
				if (typeof e != "function") return new h("Property `" + o + "` of component `" + r + "` has invalid PropType notation inside arrayOf.");
				var s = t[n];
				if (!Array.isArray(s)) {
					var c = M(s);
					return new h("Invalid " + a + " `" + o + "` of type " + ("`" + c + "` supplied to `" + r + "`, expected an array."));
				}
				for (var l = 0; l < s.length; l++) {
					var u = e(s, l, r, a, o + "[" + l + "]", i);
					if (u instanceof Error) return u;
				}
				return null;
			}
			return g(t);
		}
		function b() {
			function t(t, n, r, i, a) {
				var o = t[n];
				if (!e(o)) {
					var s = M(o);
					return new h("Invalid " + i + " `" + a + "` of type " + ("`" + s + "` supplied to `" + r + "`, expected a single ReactElement."));
				}
				return null;
			}
			return g(t);
		}
		function x() {
			function e(e, t, r, i, a) {
				var o = e[t];
				if (!n.isValidElementType(o)) {
					var s = M(o);
					return new h("Invalid " + i + " `" + a + "` of type " + ("`" + s + "` supplied to `" + r + "`, expected a single ReactElement type."));
				}
				return null;
			}
			return g(e);
		}
		function S(e) {
			function t(t, n, r, i, a) {
				if (!(t[n] instanceof e)) {
					var o = e.name || f, s = ee(t[n]);
					return new h("Invalid " + i + " `" + a + "` of type " + ("`" + s + "` supplied to `" + r + "`, expected ") + ("instance of `" + o + "`."));
				}
				return null;
			}
			return g(t);
		}
		function C(e) {
			if (!Array.isArray(e)) return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s("Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).") : s("Invalid argument supplied to oneOf, expected an array.")), c;
			function t(t, n, r, i, a) {
				for (var o = t[n], s = 0; s < e.length; s++) if (m(o, e[s])) return null;
				var c = JSON.stringify(e, function(e, t) {
					return N(t) === "symbol" ? String(t) : t;
				});
				return new h("Invalid " + i + " `" + a + "` of value `" + String(o) + "` " + ("supplied to `" + r + "`, expected one of " + c + "."));
			}
			return g(t);
		}
		function w(e) {
			function t(t, n, r, o, s) {
				if (typeof e != "function") return new h("Property `" + s + "` of component `" + r + "` has invalid PropType notation inside objectOf.");
				var c = t[n], l = M(c);
				if (l !== "object") return new h("Invalid " + o + " `" + s + "` of type " + ("`" + l + "` supplied to `" + r + "`, expected an object."));
				for (var u in c) if (a(c, u)) {
					var d = e(c, u, r, o, s + "." + u, i);
					if (d instanceof Error) return d;
				}
				return null;
			}
			return g(t);
		}
		function T(e) {
			if (!Array.isArray(e)) return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), c;
			for (var t = 0; t < e.length; t++) {
				var n = e[t];
				if (typeof n != "function") return s("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + P(n) + " at index " + t + "."), c;
			}
			function r(t, n, r, o, s) {
				for (var c = [], l = 0; l < e.length; l++) {
					var u = e[l], d = u(t, n, r, o, s, i);
					if (d == null) return null;
					d.data && a(d.data, "expectedType") && c.push(d.data.expectedType);
				}
				var f = c.length > 0 ? ", expected one of type [" + c.join(", ") + "]" : "";
				return new h("Invalid " + o + " `" + s + "` supplied to " + ("`" + r + "`" + f + "."));
			}
			return g(r);
		}
		function E() {
			function e(e, t, n, r, i) {
				return A(e[t]) ? null : new h("Invalid " + r + " `" + i + "` supplied to " + ("`" + n + "`, expected a ReactNode."));
			}
			return g(e);
		}
		function D(e, t, n, r, i) {
			return new h((e || "React class") + ": " + t + " type `" + n + "." + r + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + i + "`.");
		}
		function O(e) {
			function t(t, n, r, a, o) {
				var s = t[n], c = M(s);
				if (c !== "object") return new h("Invalid " + a + " `" + o + "` of type `" + c + "` " + ("supplied to `" + r + "`, expected `object`."));
				for (var l in e) {
					var u = e[l];
					if (typeof u != "function") return D(r, a, o, l, N(u));
					var d = u(s, l, r, a, o + "." + l, i);
					if (d) return d;
				}
				return null;
			}
			return g(t);
		}
		function k(e) {
			function t(t, n, o, s, c) {
				var l = t[n], u = M(l);
				if (u !== "object") return new h("Invalid " + s + " `" + c + "` of type `" + u + "` " + ("supplied to `" + o + "`, expected `object`."));
				for (var d in r({}, t[n], e)) {
					var f = e[d];
					if (a(e, d) && typeof f != "function") return D(o, s, c, d, N(f));
					if (!f) return new h("Invalid " + s + " `" + c + "` key `" + d + "` supplied to `" + o + "`.\nBad object: " + JSON.stringify(t[n], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(e), null, "  "));
					var p = f(l, d, o, s, c + "." + d, i);
					if (p) return p;
				}
				return null;
			}
			return g(t);
		}
		function A(t) {
			switch (typeof t) {
				case "number":
				case "string":
				case "undefined": return !0;
				case "boolean": return !t;
				case "object":
					if (Array.isArray(t)) return t.every(A);
					if (t === null || e(t)) return !0;
					var n = d(t);
					if (n) {
						var r = n.call(t), i;
						if (n !== t.entries) {
							for (; !(i = r.next()).done;) if (!A(i.value)) return !1;
						} else for (; !(i = r.next()).done;) {
							var a = i.value;
							if (a && !A(a[1])) return !1;
						}
					} else return !1;
					return !0;
				default: return !1;
			}
		}
		function j(e, t) {
			return e === "symbol" ? !0 : t ? t["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && t instanceof Symbol : !1;
		}
		function M(e) {
			var t = typeof e;
			return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : j(t, e) ? "symbol" : t;
		}
		function N(e) {
			if (e == null) return "" + e;
			var t = M(e);
			if (t === "object") {
				if (e instanceof Date) return "date";
				if (e instanceof RegExp) return "regexp";
			}
			return t;
		}
		function P(e) {
			var t = N(e);
			switch (t) {
				case "array":
				case "object": return "an " + t;
				case "boolean":
				case "date":
				case "regexp": return "a " + t;
				default: return t;
			}
		}
		function ee(e) {
			return !e.constructor || !e.constructor.name ? f : e.constructor.name;
		}
		return p.checkPropTypes = o, p.resetWarningCache = o.resetWarningCache, p.PropTypes = p, p;
	};
})), Ri = /* @__PURE__ */ ut(((e, t) => {
	var n = Pi();
	function r() {}
	function i() {}
	i.resetWarningCache = r, t.exports = function() {
		function e(e, t, r, i, a, o) {
			if (o !== n) {
				var s = /* @__PURE__ */ Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
				throw s.name = "Invariant Violation", s;
			}
		}
		e.isRequired = e;
		function t() {
			return e;
		}
		var a = {
			array: e,
			bigint: e,
			bool: e,
			func: e,
			number: e,
			object: e,
			string: e,
			symbol: e,
			any: e,
			arrayOf: t,
			element: e,
			elementType: e,
			instanceOf: t,
			node: e,
			objectOf: t,
			oneOf: t,
			oneOfType: t,
			shape: t,
			exact: t,
			checkPropTypes: i,
			resetWarningCache: r
		};
		return a.PropTypes = a, a;
	};
})), zi = /* @__PURE__ */ ut(((e, t) => {
	if (process.env.NODE_ENV !== "production") {
		var n = Mi();
		t.exports = Li()(n.isElement, !0);
	} else t.exports = Ri()();
}));
//#endregion
//#region node_modules/@mui/utils/esm/composeClasses/composeClasses.js
function Bi(e, t, n = void 0) {
	let r = {};
	for (let i in e) {
		let a = e[i], o = "", s = !0;
		for (let e = 0; e < a.length; e += 1) {
			let r = a[e];
			r && (o += (s === !0 ? "" : " ") + t(r), s = !1, n && n[r] && (o += " " + n[r]));
		}
		r[i] = o;
	}
	return r;
}
//#endregion
//#region node_modules/reselect/dist/reselect.mjs
var Vi = (e, t, n) => {
	if (t.length === 1 && t[0] === n) {
		let t = !1;
		try {
			let n = {};
			e(n) === n && (t = !0);
		} catch {}
		if (t) {
			let e;
			try {
				throw Error();
			} catch (t) {
				({stack: e} = t);
			}
			console.warn("The result function returned its own inputs without modification. e.g\n`createSelector([state => state.todos], todos => todos)`\nThis could lead to inefficient memoization and unnecessary re-renders.\nEnsure transformation logic is in the result function, and extraction logic is in the input selectors.", { stack: e });
		}
	}
}, Hi = (e, t, n) => {
	let { memoize: r, memoizeOptions: i } = t, { inputSelectorResults: a, inputSelectorResultsCopy: o } = e, s = r(() => ({}), ...i);
	if (s.apply(null, a) !== s.apply(null, o)) {
		let e;
		try {
			throw Error();
		} catch (t) {
			({stack: e} = t);
		}
		console.warn("An input selector returned a different result when passed same arguments.\nThis means your output selector will likely run more frequently than intended.\nAvoid returning a new reference inside your input selector, e.g.\n`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)`", {
			arguments: n,
			firstInputs: a,
			secondInputs: o,
			stack: e
		});
	}
}, Ui = {
	inputStabilityCheck: "once",
	identityFunctionCheck: "once"
}, Wi = /* @__PURE__ */ Symbol("NOT_FOUND");
function Gi(e, t = `expected a function, instead received ${typeof e}`) {
	if (typeof e != "function") throw TypeError(t);
}
function Ki(e, t = `expected an object, instead received ${typeof e}`) {
	if (typeof e != "object") throw TypeError(t);
}
function qi(e, t = "expected all items to be functions, instead received the following types: ") {
	if (!e.every((e) => typeof e == "function")) {
		let n = e.map((e) => typeof e == "function" ? `function ${e.name || "unnamed"}()` : typeof e).join(", ");
		throw TypeError(`${t}[${n}]`);
	}
}
var Ji = (e) => Array.isArray(e) ? e : [e];
function Yi(e) {
	let t = Array.isArray(e[0]) ? e[0] : e;
	return qi(t, "createSelector expects all input-selectors to be functions, but received the following types: "), t;
}
function Xi(e, t) {
	let n = [], { length: r } = e;
	for (let i = 0; i < r; i++) n.push(e[i].apply(null, t));
	return n;
}
var Zi = (e, t) => {
	let { identityFunctionCheck: n, inputStabilityCheck: r } = {
		...Ui,
		...t
	};
	return {
		identityFunctionCheck: {
			shouldRun: n === "always" || n === "once" && e,
			run: Vi
		},
		inputStabilityCheck: {
			shouldRun: r === "always" || r === "once" && e,
			run: Hi
		}
	};
};
function Qi(e) {
	let t;
	return {
		get(n) {
			return t && e(t.key, n) ? t.value : Wi;
		},
		put(e, n) {
			t = {
				key: e,
				value: n
			};
		},
		getEntries() {
			return t ? [t] : [];
		},
		clear() {
			t = void 0;
		}
	};
}
function $i(e, t) {
	let n = [];
	function r(e) {
		let r = n.findIndex((n) => t(e, n.key));
		if (r > -1) {
			let e = n[r];
			return r > 0 && (n.splice(r, 1), n.unshift(e)), e.value;
		}
		return Wi;
	}
	function i(t, i) {
		r(t) === Wi && (n.unshift({
			key: t,
			value: i
		}), n.length > e && n.pop());
	}
	function a() {
		return n;
	}
	function o() {
		n = [];
	}
	return {
		get: r,
		put: i,
		getEntries: a,
		clear: o
	};
}
var ea = (e, t) => e === t;
function ta(e) {
	return function(t, n) {
		if (t === null || n === null || t.length !== n.length) return !1;
		let { length: r } = t;
		for (let i = 0; i < r; i++) if (!e(t[i], n[i])) return !1;
		return !0;
	};
}
function na(e, t) {
	let { equalityCheck: n = ea, maxSize: r = 1, resultEqualityCheck: i } = typeof t == "object" ? t : { equalityCheck: t }, a = ta(n), o = 0, s = r <= 1 ? Qi(a) : $i(r, a);
	function c() {
		let t = s.get(arguments);
		if (t === Wi) {
			if (t = e.apply(null, arguments), o++, i) {
				let e = s.getEntries().find((e) => i(e.value, t));
				e && (t = e.value, o !== 0 && o--);
			}
			s.put(arguments, t);
		}
		return t;
	}
	return c.clearCache = () => {
		s.clear(), c.resetResultsCount();
	}, c.resultsCount = () => o, c.resetResultsCount = () => {
		o = 0;
	}, c;
}
var ra = class {
	constructor(e) {
		this.value = e;
	}
	deref() {
		return this.value;
	}
}, ia = typeof WeakRef < "u" ? WeakRef : ra, aa = 0, oa = 1;
function sa() {
	return {
		s: aa,
		v: void 0,
		o: null,
		p: null
	};
}
function ca(e, t = {}) {
	let n = sa(), { resultEqualityCheck: r } = t, i, a = 0;
	function o() {
		let t = n, { length: o } = arguments;
		for (let e = 0, n = o; e < n; e++) {
			let n = arguments[e];
			if (typeof n == "function" || typeof n == "object" && n) {
				let e = t.o;
				e === null && (t.o = e = /* @__PURE__ */ new WeakMap());
				let r = e.get(n);
				r === void 0 ? (t = sa(), e.set(n, t)) : t = r;
			} else {
				let e = t.p;
				e === null && (t.p = e = /* @__PURE__ */ new Map());
				let r = e.get(n);
				r === void 0 ? (t = sa(), e.set(n, t)) : t = r;
			}
		}
		let s = t, c;
		if (t.s === oa) c = t.v;
		else if (c = e.apply(null, arguments), a++, r) {
			let e = i?.deref?.() ?? i;
			e != null && r(e, c) && (c = e, a !== 0 && a--), i = typeof c == "object" && c || typeof c == "function" ? new ia(c) : c;
		}
		return s.s = oa, s.v = c, c;
	}
	return o.clearCache = () => {
		n = sa(), o.resetResultsCount();
	}, o.resultsCount = () => a, o.resetResultsCount = () => {
		a = 0;
	}, o;
}
function la(e, ...t) {
	let n = typeof e == "function" ? {
		memoize: e,
		memoizeOptions: t
	} : e, r = (...e) => {
		let t = 0, r = 0, i, a = {}, o = e.pop();
		typeof o == "object" && (a = o, o = e.pop()), Gi(o, `createSelector expects an output function after the inputs, but received: [${typeof o}]`);
		let { memoize: s, memoizeOptions: c = [], argsMemoize: l = ca, argsMemoizeOptions: u = [], devModeChecks: d = {} } = {
			...n,
			...a
		}, f = Ji(c), p = Ji(u), m = Yi(e), h = s(function() {
			return t++, o.apply(null, arguments);
		}, ...f), g = !0, _ = l(function() {
			r++;
			let e = Xi(m, arguments);
			if (i = h.apply(null, e), process.env.NODE_ENV !== "production") {
				let { identityFunctionCheck: t, inputStabilityCheck: n } = Zi(g, d);
				if (t.shouldRun && t.run(o, e, i), n.shouldRun) {
					let t = Xi(m, arguments);
					n.run({
						inputSelectorResults: e,
						inputSelectorResultsCopy: t
					}, {
						memoize: s,
						memoizeOptions: f
					}, arguments);
				}
				g &&= !1;
			}
			return i;
		}, ...p);
		return Object.assign(_, {
			resultFunc: o,
			memoizedResultFunc: h,
			dependencies: m,
			dependencyRecomputations: () => r,
			resetDependencyRecomputations: () => {
				r = 0;
			},
			lastResult: () => i,
			recomputations: () => t,
			resetRecomputations: () => {
				t = 0;
			},
			memoize: s,
			argsMemoize: l
		});
	};
	return Object.assign(r, { withTypes: () => r }), r;
}
var ua = /* @__PURE__ */ la(ca), da = Object.assign((e, t = ua) => {
	Ki(e, `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);
	let n = Object.keys(e);
	return t(n.map((t) => e[t]), (...e) => e.reduce((e, t, r) => (e[n[r]] = t, e), {}));
}, { withTypes: () => da }), fa = la({
	memoize: na,
	memoizeOptions: {
		maxSize: 1,
		equalityCheck: Object.is
	}
}), pa = (e, t, n, r, i, a, o, s, ...c) => {
	if (c.length > 0) throw Error("Unsupported number of selectors");
	let l;
	if (e && t && n && r && i && a && o && s) l = (c, l, u, d) => s(e(c, l, u, d), t(c, l, u, d), n(c, l, u, d), r(c, l, u, d), i(c, l, u, d), a(c, l, u, d), o(c, l, u, d), l, u, d);
	else if (e && t && n && r && i && a && o) l = (s, c, l, u) => o(e(s, c, l, u), t(s, c, l, u), n(s, c, l, u), r(s, c, l, u), i(s, c, l, u), a(s, c, l, u), c, l, u);
	else if (e && t && n && r && i && a) l = (o, s, c, l) => a(e(o, s, c, l), t(o, s, c, l), n(o, s, c, l), r(o, s, c, l), i(o, s, c, l), s, c, l);
	else if (e && t && n && r && i) l = (a, o, s, c) => i(e(a, o, s, c), t(a, o, s, c), n(a, o, s, c), r(a, o, s, c), o, s, c);
	else if (e && t && n && r) l = (i, a, o, s) => r(e(i, a, o, s), t(i, a, o, s), n(i, a, o, s), a, o, s);
	else if (e && t && n) l = (r, i, a, o) => n(e(r, i, a, o), t(r, i, a, o), i, a, o);
	else if (e && t) l = (n, r, i, a) => t(e(n, r, i, a), r, i, a);
	else if (e) l = e;
	else throw Error("Missing arguments");
	return l;
}, ma = ((e) => (...t) => {
	let n = /* @__PURE__ */ new WeakMap(), r = 1, i = t[t.length - 1], a = t.length - 1 || 1, o = Math.max(i.length - a, 0);
	if (o > 3) throw Error("Unsupported number of arguments");
	return (a, s, c, l) => {
		let u = a.__cacheKey__;
		u || (u = { id: r }, a.__cacheKey__ = u, r += 1);
		let d = n.get(u);
		if (!d) {
			let r = t.length === 1 ? [(e) => e, i] : t, a = t, s = [
				void 0,
				void 0,
				void 0
			];
			switch (o) {
				case 0: break;
				case 1:
					a = [
						...r.slice(0, -1),
						() => s[0],
						i
					];
					break;
				case 2:
					a = [
						...r.slice(0, -1),
						() => s[0],
						() => s[1],
						i
					];
					break;
				case 3:
					a = [
						...r.slice(0, -1),
						() => s[0],
						() => s[1],
						() => s[2],
						i
					];
					break;
				default: throw Error("Unsupported number of arguments");
			}
			e && (a = [...a, e]), d = fa(...a), d.selectorArgs = s, n.set(u, d);
		}
		switch (o) {
			case 3: d.selectorArgs[2] = l;
			case 2: d.selectorArgs[1] = c;
			case 1: d.selectorArgs[0] = s;
			default:
		}
		switch (o) {
			case 0: return d(a);
			case 1: return d(a, s);
			case 2: return d(a, s, c);
			case 3: return d(a, s, c, l);
			default: throw Error("unreachable");
		}
	};
})(), ha = /* @__PURE__ */ ut(((e) => {
	var t = pt("react"), n = zn();
	function r(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var i = typeof Object.is == "function" ? Object.is : r, a = n.useSyncExternalStore, o = t.useRef, s = t.useEffect, c = t.useMemo, l = t.useDebugValue;
	e.useSyncExternalStoreWithSelector = function(e, t, n, r, u) {
		var d = o(null);
		if (d.current === null) {
			var f = {
				hasValue: !1,
				value: null
			};
			d.current = f;
		} else f = d.current;
		d = c(function() {
			function e(e) {
				if (!a) {
					if (a = !0, o = e, e = r(e), u !== void 0 && f.hasValue) {
						var t = f.value;
						if (u(t, e)) return s = t;
					}
					return s = e;
				}
				if (t = s, i(o, e)) return t;
				var n = r(e);
				return u !== void 0 && u(t, n) ? (o = e, t) : (o = e, s = n);
			}
			var a = !1, o, s, c = n === void 0 ? null : n;
			return [function() {
				return e(t());
			}, c === null ? void 0 : function() {
				return e(c());
			}];
		}, [
			t,
			n,
			r,
			u
		]);
		var p = a(e, d[0], d[1]);
		return s(function() {
			f.hasValue = !0, f.value = p;
		}, [p]), l(p), p;
	};
})), ga = /* @__PURE__ */ ut(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		function t(e, t) {
			return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
		}
		typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
		var n = pt("react"), r = zn(), i = typeof Object.is == "function" ? Object.is : t, a = r.useSyncExternalStore, o = n.useRef, s = n.useEffect, c = n.useMemo, l = n.useDebugValue;
		e.useSyncExternalStoreWithSelector = function(e, t, n, r, u) {
			var d = o(null);
			if (d.current === null) {
				var f = {
					hasValue: !1,
					value: null
				};
				d.current = f;
			} else f = d.current;
			d = c(function() {
				function e(e) {
					if (!a) {
						if (a = !0, o = e, e = r(e), u !== void 0 && f.hasValue) {
							var t = f.value;
							if (u(t, e)) return s = t;
						}
						return s = e;
					}
					if (t = s, i(o, e)) return t;
					var n = r(e);
					return u !== void 0 && u(t, n) ? (o = e, t) : (o = e, s = n);
				}
				var a = !1, o, s, c = n === void 0 ? null : n;
				return [function() {
					return e(t());
				}, c === null ? void 0 : function() {
					return e(c());
				}];
			}, [
				t,
				n,
				r,
				u
			]);
			var p = a(e, d[0], d[1]);
			return s(function() {
				f.hasValue = !0, f.value = p;
			}, [p]), l(p), p;
		}, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
	})();
})), _a = (/* @__PURE__ */ ut(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = ha() : t.exports = ga();
})))(), va = Tt >= 19 ? ba : xa;
function ya(e, t, n, r, i) {
	return va(e, t, n, r, i);
}
function ba(e, t, n, r, i) {
	let a = O.useCallback(() => t(e.getSnapshot(), n, r, i), [
		e,
		t,
		n,
		r,
		i
	]);
	return (0, Hn.useSyncExternalStore)(e.subscribe, a, a);
}
function xa(e, t, n, r, i) {
	return (0, _a.useSyncExternalStoreWithSelector)(e.subscribe, e.getSnapshot, e.getSnapshot, (e) => t(e, n, r, i));
}
//#endregion
//#region node_modules/@mui/utils/esm/useOnMount/useOnMount.js
var Sa = [];
function Ca(e) {
	O.useEffect(e, Sa);
}
//#endregion
//#region node_modules/@mui/x-internals/esm/store/useStoreEffect.js
var wa = () => {};
function Ta(e, t, n) {
	let r = Vn(Ea, {
		store: e,
		selector: t
	}).current;
	r.effect = n, Ca(r.onMount);
}
function Ea(e) {
	let { store: t, selector: n } = e, r = n(t.state), i = {
		effect: wa,
		dispose: null,
		subscribe: () => {
			i.dispose ??= t.subscribe((e) => {
				let t = n(e);
				if (!Object.is(r, t)) {
					let e = r;
					r = t, i.effect(e, t);
				}
			});
		},
		onMount: () => (i.subscribe(), () => {
			i.dispose?.(), i.dispose = null;
		})
	};
	return i.subscribe(), i;
}
//#endregion
//#region node_modules/@mui/x-internals/esm/store/Store.js
var Da = class e {
	static create(t) {
		return new e(t);
	}
	constructor(e) {
		this.state = e, this.listeners = /* @__PURE__ */ new Set(), this.updateTick = 0;
	}
	subscribe = (e) => (this.listeners.add(e), () => {
		this.listeners.delete(e);
	});
	getSnapshot = () => this.state;
	setState(e) {
		this.state = e, this.updateTick += 1;
		let t = this.updateTick, n = this.listeners.values(), r;
		for (; r = n.next(), !r.done;) {
			if (t !== this.updateTick) return;
			let n = r.value;
			n(e);
		}
	}
	update(e) {
		for (let t in e) if (!Object.is(this.state[t], e[t])) {
			this.setState(L({}, this.state, e));
			return;
		}
	}
	set(e, t) {
		Object.is(this.state[e], t) || this.setState(L({}, this.state, { [e]: t }));
	}
	use = (e, t, n, r) => ya(this, e, t, n, r);
}, G = (...e) => {
	let t = pa(...e);
	return (e, n, r, i) => t(Aa(e), n, r, i);
}, Oa = (...e) => {
	let t = ma(...e);
	return (e, n, r, i) => t(Aa(e), n, r, i);
}, ka = (e) => (t, n) => e(Aa(t), n);
function Aa(e) {
	return "current" in e ? e.current.state : e;
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/hooks/features/dimensions/gridDimensionsSelectors.js
var ja = ka((e) => e.dimensions), Ma = G(ja, (e) => e.columnsTotalWidth), Na = G(ja, (e) => e.rowHeight);
G(ja, (e) => e.contentSize.height);
var Pa = G(ja, (e) => e.hasScrollX), Fa = G(ja, (e) => e.hasScrollY), Ia = G(ja, (e) => e.columnsTotalWidth < e.viewportOuterSize.width), La = G(ja, (e) => e.headerHeight), Ra = G(ja, (e) => e.groupHeaderHeight);
G(ja, (e) => e.headerFilterHeight);
var za = G(ja, (e) => e.hasScrollX ? e.scrollbarSize : 0), Ba = G(ja, (e) => e.hasScrollY ? e.scrollbarSize : 0), Va = G(ja, za, (e, t) => {
	let n = e.viewportOuterSize.height - e.minimumSize.height > 0;
	return !(t === 0 && !n);
}), Ha = ka((e) => e.rowsMeta), Ua = ka((e) => e.rows), Wa = G(Ua, (e) => e.totalRowCount), Ga = G(Ua, (e) => e.loading), Ka = G(Ua, (e) => e.totalTopLevelRowCount), qa = G(Ua, (e) => e.dataRowIdToModelLookup);
G(qa, (e, t) => e[t]);
var Ja = G(Ua, (e) => e.tree), Ya = G(Ja, (e, t) => e[t]), Xa = G(Ua, (e) => e.groupsToFetch), Za = G(Ua, (e) => e.groupingName), Qa = G(Ua, (e) => e.treeDepths), $a = Oa(Ua, (e) => {
	let t = Object.entries(e.treeDepths);
	return t.length === 0 ? 1 : (t.filter(([, e]) => e > 0).map(([e]) => Number(e)).sort((e, t) => t - e)[0] ?? 0) + 1;
}), eo = G(Ua, (e) => e.dataRowIds), to = Oa(eo, qa, (e, t) => e.reduce((e, n) => (t[n] && e.push(t[n]), e), [])), no = Oa(G(Ua, (e) => e?.additionalRowGroups), (e) => {
	let t = e?.pinnedRows;
	return {
		bottom: t?.bottom?.map((e) => ({
			id: e.id,
			model: e.model ?? {}
		})) ?? [],
		top: t?.top?.map((e) => ({
			id: e.id,
			model: e.model ?? {}
		})) ?? []
	};
}), ro = G(no, (e) => (e?.top?.length || 0) + (e?.bottom?.length || 0)), io = "auto-generated-group-node-root", ao = Symbol("mui.id_autogenerated"), oo = () => ({
	type: "group",
	id: io,
	depth: -1,
	groupingField: null,
	groupingKey: null,
	isAutoGenerated: !0,
	children: [],
	childrenFromPath: {},
	childrenExpanded: !0,
	parent: null
});
function so(e, t, n = "A row was provided without id in the rows prop:") {
	if (e == null) throw Error([
		"MUI X: The Data Grid component requires all rows to have a unique `id` property.",
		"Alternatively, you can use the `getRowId` prop to specify a custom id for each row.",
		n,
		JSON.stringify(t)
	].join("\n"));
}
var co = (e, t, n) => {
	let r = t ? t(e) : e.id;
	return so(r, e, n), r;
}, lo = (e, t, n) => {
	let r = t.field;
	if (!t || !t.valueGetter) return e[r];
	let i = e[t.field];
	return t.valueGetter(i, e, t, n);
}, uo = ({ rows: e, getRowId: t, loading: n, rowCount: r }) => {
	let i = {
		type: "full",
		rows: []
	}, a = {};
	for (let n = 0; n < e.length; n += 1) {
		let r = e[n], o = co(r, t);
		a[o] = r, i.rows.push(o);
	}
	return {
		rowsBeforePartialUpdates: e,
		loadingPropBeforePartialUpdates: n,
		rowCountPropBeforePartialUpdates: r,
		updates: i,
		dataRowIdToModelLookup: a
	};
}, fo = ({ tree: e, rowCountProp: t = 0 }) => {
	let n = e[io];
	return Math.max(t, n.children.length + (n.footerId == null ? 0 : 1));
}, po = ({ apiRef: e, rowCountProp: t = 0, loadingProp: n, previousTree: r, previousTreeDepths: i, previousGroupsToFetch: a }) => {
	let o = e.current.caches.rows, { tree: s, treeDepths: c, dataRowIds: l, groupingName: u, groupsToFetch: d = [] } = e.current.applyStrategyProcessor("rowTreeCreation", {
		previousTree: r,
		previousTreeDepths: i,
		updates: o.updates,
		dataRowIdToModelLookup: o.dataRowIdToModelLookup,
		previousGroupsToFetch: a
	}), f = e.current.unstable_applyPipeProcessors("hydrateRows", {
		tree: s,
		treeDepths: c,
		dataRowIds: l,
		dataRowIdToModelLookup: o.dataRowIdToModelLookup
	});
	return e.current.caches.rows.updates = {
		type: "partial",
		actions: {
			insert: [],
			modify: [],
			remove: []
		},
		idToActionLookup: {}
	}, L({}, f, {
		totalRowCount: Math.max(t, f.dataRowIds.length),
		totalTopLevelRowCount: fo({
			tree: f.tree,
			rowCountProp: t
		}),
		groupingName: u,
		loading: n,
		groupsToFetch: d
	});
}, mo = (e) => ao in e, ho = (e) => e.type === "skeletonRow" || e.type === "footer" || e.type === "group" && e.isAutoGenerated || e.type === "pinnedRow" && e.isAutoGenerated, go = (e, t, n, r) => {
	let i = e[t];
	if (i.type !== "group") return [];
	let a = [];
	for (let t = 0; t < i.children.length; t += 1) {
		let o = i.children[t];
		if ((!n || !ho(e[o])) && a.push(o), r) continue;
		let s = go(e, o, n, r);
		for (let e = 0; e < s.length; e += 1) a.push(s[e]);
	}
	return !n && i.footerId != null && a.push(i.footerId), a;
}, _o = ({ previousCache: e, getRowId: t, updates: n, groupKeys: r }) => {
	if (e.updates.type === "full") throw Error("MUI X: Unable to prepare a partial update if a full update is not applied yet.");
	let i = /* @__PURE__ */ new Map();
	n.forEach((e) => {
		let n = co(e, t, "A row was provided without id when calling updateRows():");
		i.has(n) ? i.set(n, L({}, i.get(n), e)) : i.set(n, e);
	});
	let a = {
		type: "partial",
		actions: {
			insert: [...e.updates.actions.insert ?? []],
			modify: [...e.updates.actions.modify ?? []],
			remove: [...e.updates.actions.remove ?? []]
		},
		idToActionLookup: L({}, e.updates.idToActionLookup),
		groupKeys: r
	}, o = L({}, e.dataRowIdToModelLookup), s = {
		insert: {},
		modify: {},
		remove: {}
	};
	i.forEach((e, t) => {
		let n = a.idToActionLookup[t];
		if (e._action === "delete") {
			if (n === "remove" || !o[t]) return;
			n != null && (s[n][t] = !0), a.actions.remove.push(t), delete o[t];
			return;
		}
		let r = o[t];
		if (r) {
			n === "remove" ? (s.remove[t] = !0, a.actions.modify.push(t)) : n ?? a.actions.modify.push(t), o[t] = L({}, r, e);
			return;
		}
		n === "remove" ? (s.remove[t] = !0, a.actions.insert.push(t)) : n ?? a.actions.insert.push(t), o[t] = e;
	});
	let c = Object.keys(s);
	for (let e = 0; e < c.length; e += 1) {
		let t = c[e], n = s[t];
		Object.keys(n).length > 0 && (a.actions[t] = a.actions[t].filter((e) => !n[e]));
	}
	return {
		dataRowIdToModelLookup: o,
		updates: a,
		rowsBeforePartialUpdates: e.rowsBeforePartialUpdates,
		loadingPropBeforePartialUpdates: e.loadingPropBeforePartialUpdates,
		rowCountPropBeforePartialUpdates: e.rowCountPropBeforePartialUpdates
	};
}, vo = "var(--DataGrid-overlayHeight, calc(var(--height) * 2))";
function yo(e, t, n) {
	let r = [];
	return t.forEach((t) => {
		let i = co(t, n, "A row was provided without id when calling updateRows():");
		if (Ya(e, i)?.type === "pinnedRow") {
			let n = e.current.caches.pinnedRows, r = n.idLookup[i];
			r && (n.idLookup[i] = L({}, r, t));
		} else r.push(t);
	}), r;
}
var bo = !1, xo = (e, t, n) => typeof e == "number" && e > 0 ? e : (process.env.NODE_ENV !== "production" && !bo && e != null && (console.warn(n), bo = !0), t), So = ["MUI X: The `rowHeight` prop should be a number greater than 0.", "The default value will be used instead."].join("\n");
["MUI X: The `getRowHeight` prop should return a number greater than 0 or 'auto'.", "The default value will be used instead."].join("\n");
//#endregion
//#region node_modules/@mui/x-internals/esm/fastMemo/fastMemo.js
function Co(e) {
	return /* @__PURE__ */ O.memo(e, Pn);
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/constants/localeTextConstants.js
var wo = {
	noRowsLabel: "No rows",
	noResultsOverlayLabel: "No results found.",
	noColumnsOverlayLabel: "No columns",
	noColumnsOverlayManageColumns: "Manage columns",
	emptyPivotOverlayLabel: "Add fields to rows, columns, and values to create a pivot table",
	toolbarDensity: "Density",
	toolbarDensityLabel: "Density",
	toolbarDensityCompact: "Compact",
	toolbarDensityStandard: "Standard",
	toolbarDensityComfortable: "Comfortable",
	toolbarUndo: "Undo",
	toolbarRedo: "Redo",
	toolbarColumns: "Columns",
	toolbarColumnsLabel: "Select columns",
	toolbarFilters: "Filters",
	toolbarFiltersLabel: "Show filters",
	toolbarFiltersTooltipHide: "Hide filters",
	toolbarFiltersTooltipShow: "Show filters",
	toolbarFiltersTooltipActive: (e) => e === 1 ? `${e} active filter` : `${e} active filters`,
	toolbarQuickFilterPlaceholder: "Search…",
	toolbarQuickFilterLabel: "Search",
	toolbarQuickFilterDeleteIconLabel: "Clear",
	toolbarExport: "Export",
	toolbarExportLabel: "Export",
	toolbarExportCSV: "Download as CSV",
	toolbarExportPrint: "Print",
	toolbarExportExcel: "Download as Excel",
	toolbarPivot: "Pivot",
	toolbarCharts: "Charts",
	toolbarAssistant: "AI Assistant",
	columnsManagementSearchTitle: "Search",
	columnsManagementNoColumns: "No columns",
	columnsManagementShowHideAllText: "Show/Hide All",
	columnsManagementReset: "Reset",
	columnsManagementDeleteIconLabel: "Clear",
	filterPanelAddFilter: "Add filter",
	filterPanelRemoveAll: "Remove all",
	filterPanelDeleteIconLabel: "Delete",
	filterPanelLogicOperator: "Logic operator",
	filterPanelOperator: "Operator",
	filterPanelOperatorAnd: "And",
	filterPanelOperatorOr: "Or",
	filterPanelColumns: "Columns",
	filterPanelInputLabel: "Value",
	filterPanelInputPlaceholder: "Filter value",
	filterOperatorContains: "contains",
	filterOperatorDoesNotContain: "does not contain",
	filterOperatorEquals: "equals",
	filterOperatorDoesNotEqual: "does not equal",
	filterOperatorStartsWith: "starts with",
	filterOperatorEndsWith: "ends with",
	filterOperatorIs: "is",
	filterOperatorNot: "is not",
	filterOperatorAfter: "is after",
	filterOperatorOnOrAfter: "is on or after",
	filterOperatorBefore: "is before",
	filterOperatorOnOrBefore: "is on or before",
	filterOperatorIsEmpty: "is empty",
	filterOperatorIsNotEmpty: "is not empty",
	filterOperatorIsAnyOf: "is any of",
	"filterOperator=": "=",
	"filterOperator!=": "!=",
	"filterOperator>": ">",
	"filterOperator>=": ">=",
	"filterOperator<": "<",
	"filterOperator<=": "<=",
	headerFilterOperatorContains: "Contains",
	headerFilterOperatorDoesNotContain: "Does not contain",
	headerFilterOperatorEquals: "Equals",
	headerFilterOperatorDoesNotEqual: "Does not equal",
	headerFilterOperatorStartsWith: "Starts with",
	headerFilterOperatorEndsWith: "Ends with",
	headerFilterOperatorIs: "Is",
	headerFilterOperatorNot: "Is not",
	headerFilterOperatorAfter: "Is after",
	headerFilterOperatorOnOrAfter: "Is on or after",
	headerFilterOperatorBefore: "Is before",
	headerFilterOperatorOnOrBefore: "Is on or before",
	headerFilterOperatorIsEmpty: "Is empty",
	headerFilterOperatorIsNotEmpty: "Is not empty",
	headerFilterOperatorIsAnyOf: "Is any of",
	"headerFilterOperator=": "Equals",
	"headerFilterOperator!=": "Not equals",
	"headerFilterOperator>": "Greater than",
	"headerFilterOperator>=": "Greater than or equal to",
	"headerFilterOperator<": "Less than",
	"headerFilterOperator<=": "Less than or equal to",
	headerFilterClear: "Clear filter",
	filterValueAny: "any",
	filterValueTrue: "true",
	filterValueFalse: "false",
	columnMenuLabel: "Menu",
	columnMenuAriaLabel: (e) => `${e} column menu`,
	columnMenuShowColumns: "Show columns",
	columnMenuManageColumns: "Manage columns",
	columnMenuFilter: "Filter",
	columnMenuHideColumn: "Hide column",
	columnMenuUnsort: "Unsort",
	columnMenuSortAsc: "Sort by ASC",
	columnMenuSortDesc: "Sort by DESC",
	columnMenuManagePivot: "Manage pivot",
	columnMenuManageCharts: "Manage charts",
	columnHeaderFiltersTooltipActive: (e) => e === 1 ? `${e} active filter` : `${e} active filters`,
	columnHeaderFiltersLabel: "Show filters",
	columnHeaderSortIconLabel: "Sort",
	footerRowSelected: (e) => e === 1 ? `${e.toLocaleString()} row selected` : `${e.toLocaleString()} rows selected`,
	footerTotalRows: "Total Rows:",
	footerTotalVisibleRows: (e, t) => `${e.toLocaleString()} of ${t.toLocaleString()}`,
	checkboxSelectionHeaderName: "Checkbox selection",
	checkboxSelectionSelectAllRows: "Select all rows",
	checkboxSelectionUnselectAllRows: "Unselect all rows",
	checkboxSelectionSelectRow: "Select row",
	checkboxSelectionUnselectRow: "Unselect row",
	booleanCellTrueLabel: "yes",
	booleanCellFalseLabel: "no",
	longTextCellExpandLabel: "Expand",
	longTextCellCollapseLabel: "Collapse",
	actionsCellMore: "more",
	pinToLeft: "Pin to left",
	pinToRight: "Pin to right",
	unpin: "Unpin",
	treeDataGroupingHeaderName: "Group",
	treeDataExpand: "see children",
	treeDataCollapse: "hide children",
	groupingColumnHeaderName: "Group",
	groupColumn: (e) => `Group by ${e}`,
	unGroupColumn: (e) => `Stop grouping by ${e}`,
	detailPanelToggle: "Detail panel toggle",
	expandDetailPanel: "Expand",
	collapseDetailPanel: "Collapse",
	paginationRowsPerPage: "Rows per page:",
	paginationDisplayedRows: ({ from: e, to: t, count: n, estimated: r }) => {
		if (!r) return `${e}–${t} of ${n === -1 ? `more than ${t}` : n}`;
		let i = r && r > t ? `around ${r}` : `more than ${t}`;
		return `${e}–${t} of ${n === -1 ? i : n}`;
	},
	paginationItemAriaLabel: (e) => e === "first" ? "Go to first page" : e === "last" ? "Go to last page" : e === "next" ? "Go to next page" : "Go to previous page",
	rowReorderingHeaderName: "Row reordering",
	aggregationMenuItemHeader: "Aggregation",
	aggregationFunctionLabelNone: "none",
	aggregationFunctionLabelSum: "sum",
	aggregationFunctionLabelAvg: "avg",
	aggregationFunctionLabelMin: "min",
	aggregationFunctionLabelMax: "max",
	aggregationFunctionLabelSize: "size",
	pivotToggleLabel: "Pivot",
	pivotRows: "Rows",
	pivotColumns: "Columns",
	pivotValues: "Values",
	pivotCloseButton: "Close pivot settings",
	pivotSearchButton: "Search fields",
	pivotSearchControlPlaceholder: "Search fields",
	pivotSearchControlLabel: "Search fields",
	pivotSearchControlClear: "Clear search",
	pivotNoFields: "No fields",
	pivotMenuMoveUp: "Move up",
	pivotMenuMoveDown: "Move down",
	pivotMenuMoveToTop: "Move to top",
	pivotMenuMoveToBottom: "Move to bottom",
	pivotMenuRows: "Rows",
	pivotMenuColumns: "Columns",
	pivotMenuValues: "Values",
	pivotMenuOptions: "Field options",
	pivotMenuAddToRows: "Add to Rows",
	pivotMenuAddToColumns: "Add to Columns",
	pivotMenuAddToValues: "Add to Values",
	pivotMenuRemove: "Remove",
	pivotDragToRows: "Drag here to create rows",
	pivotDragToColumns: "Drag here to create columns",
	pivotDragToValues: "Drag here to create values",
	pivotYearColumnHeaderName: "(Year)",
	pivotQuarterColumnHeaderName: "(Quarter)",
	chartsNoCharts: "There are no charts available",
	chartsChartNotSelected: "Select a chart type to configure its options",
	chartsTabChart: "Chart",
	chartsTabFields: "Fields",
	chartsTabCustomize: "Customize",
	chartsCloseButton: "Close charts configuration",
	chartsSyncButtonLabel: "Sync chart",
	chartsSearchPlaceholder: "Search fields",
	chartsSearchLabel: "Search fields",
	chartsSearchClear: "Clear search",
	chartsNoFields: "No fields",
	chartsFieldBlocked: "This field cannot be added to any section",
	chartsCategories: "Categories",
	chartsSeries: "Series",
	chartsMenuAddToDimensions: (e) => `Add to ${e}`,
	chartsMenuAddToValues: (e) => `Add to ${e}`,
	chartsMenuMoveUp: "Move up",
	chartsMenuMoveDown: "Move down",
	chartsMenuMoveToTop: "Move to top",
	chartsMenuMoveToBottom: "Move to bottom",
	chartsMenuOptions: "Field options",
	chartsMenuRemove: "Remove",
	chartsDragToDimensions: (e) => `Drag here to use column as ${e}`,
	chartsDragToValues: (e) => `Drag here to use column as ${e}`,
	aiAssistantPanelTitle: "AI Assistant",
	aiAssistantPanelClose: "Close AI Assistant",
	aiAssistantPanelNewConversation: "New conversation",
	aiAssistantPanelConversationHistory: "Conversation history",
	aiAssistantPanelEmptyConversation: "No prompt history",
	aiAssistantSuggestions: "Suggestions",
	promptFieldLabel: "Prompt",
	promptFieldPlaceholder: "Type a prompt…",
	promptFieldPlaceholderWithRecording: "Type or record a prompt…",
	promptFieldPlaceholderListening: "Listening for prompt…",
	promptFieldSpeechRecognitionNotSupported: "Speech recognition is not supported in this browser",
	promptFieldSend: "Send",
	promptFieldRecord: "Record",
	promptFieldStopRecording: "Stop recording",
	promptRerun: "Run again",
	promptProcessing: "Processing…",
	promptAppliedChanges: "Applied changes",
	promptChangeGroupDescription: (e) => `Group by ${e}`,
	promptChangeAggregationLabel: (e, t) => `${e} (${t})`,
	promptChangeAggregationDescription: (e, t) => `Aggregate ${e} (${t})`,
	promptChangeFilterLabel: (e, t, n) => t === "is any of" ? `${e} is any of: ${n}` : `${e} ${t} ${n}`,
	promptChangeFilterDescription: (e, t, n) => t === "is any of" ? `Filter where ${e} is any of: ${n}` : `Filter where ${e} ${t} ${n}`,
	promptChangeSortDescription: (e, t) => `Sort by ${e} (${t})`,
	promptChangePivotEnableLabel: "Pivot",
	promptChangePivotEnableDescription: "Enable pivot",
	promptChangePivotColumnsLabel: (e) => `Columns (${e})`,
	promptChangePivotColumnsDescription: (e, t) => `${e}${t ? ` (${t})` : ""}`,
	promptChangePivotRowsLabel: (e) => `Rows (${e})`,
	promptChangePivotValuesLabel: (e) => `Values (${e})`,
	promptChangePivotValuesDescription: (e, t) => `${e} (${t})`,
	promptChangeChartsLabel: (e, t) => `Dimensions (${e}), Values (${t})`
}, To = /* @__PURE__ */ function(e) {
	return e.DataGrid = "DataGrid", e.DataGridPro = "DataGridPro", e.DataGridPremium = "DataGridPremium", e;
}({}), Eo = 1e3, Do = class {
	timeouts = /* @__PURE__ */ new Map();
	cleanupTimeout = Eo;
	constructor(e = Eo) {
		this.cleanupTimeout = e;
	}
	register(e, t, n) {
		this.timeouts ||= /* @__PURE__ */ new Map();
		let r = setTimeout(() => {
			typeof t == "function" && t(), this.timeouts.delete(n.cleanupToken);
		}, this.cleanupTimeout);
		this.timeouts.set(n.cleanupToken, r);
	}
	unregister(e) {
		let t = this.timeouts.get(e.cleanupToken);
		t && (this.timeouts.delete(e.cleanupToken), clearTimeout(t));
	}
	reset() {
		this.timeouts &&= (this.timeouts.forEach((e, t) => {
			this.unregister({ cleanupToken: t });
		}), void 0);
	}
}, Oo = class {
	registry = new FinalizationRegistry((e) => {
		typeof e == "function" && e();
	});
	register(e, t, n) {
		this.registry.register(e, t, n);
	}
	unregister(e) {
		this.registry.unregister(e);
	}
	reset() {}
}, ko = class e {
	static create() {
		return new e();
	}
}, Ao = { current: Po() }, jo = 0;
function K(e, t, n, r) {
	let i = O.useState(ko.create)[0], a = O.useRef(null), o = O.useRef(null);
	o.current = n;
	let s = O.useRef(null);
	!a.current && o.current ? (a.current = e.current.subscribeEvent(t, (e, t, n) => {
		t && !t.defaultMuiPrevented && o.current?.(e, t, n);
	}, r), jo += 1, s.current = { cleanupToken: jo }, Ao.current.register(i, () => {
		a.current?.(), a.current = null, s.current = null;
	}, s.current)) : !o.current && a.current && (a.current(), a.current = null, s.current &&= (Ao.current.unregister(s.current), null)), O.useEffect(() => (!a.current && o.current && (a.current = e.current.subscribeEvent(t, (e, t, n) => {
		t && !t.defaultMuiPrevented && o.current?.(e, t, n);
	}, r)), s.current && Ao.current && (Ao.current.unregister(s.current), s.current = null), () => {
		a.current?.(), a.current = null;
	}), [
		e,
		t,
		r
	]);
}
var Mo = { isFirst: !0 };
function No(e, t, n) {
	K(e, t, n, Mo);
}
function Po() {
	return typeof FinalizationRegistry < "u" ? new Oo() : new Do();
}
var Fo = {
	compact: .7,
	comfortable: 1.3,
	standard: 1
}, Io = ka((e) => e.density), Lo = G(Io, (e) => Fo[e]), Ro = class e {
	static create() {
		return new e();
	}
	currentId = null;
	start(e, t) {
		this.clear(), this.currentId = setTimeout(() => {
			this.currentId = null, t();
		}, e);
	}
	clear = () => {
		this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
	};
	disposeEffect = () => this.clear;
};
function zo() {
	let e = Vn(Ro.create).current;
	return Ca(e.disposeEffect), e;
}
//#endregion
//#region node_modules/@mui/utils/esm/resolveProps/resolveProps.js
function Bo(e, t, n = !1) {
	let r = { ...t };
	for (let i in e) if (Object.prototype.hasOwnProperty.call(e, i)) {
		let a = i;
		if (a === "components" || a === "slots") r[a] = {
			...e[a],
			...r[a]
		};
		else if (a === "componentsProps" || a === "slotProps") {
			let i = e[a], o = t[a];
			if (!o) r[a] = i || {};
			else if (!i) r[a] = o;
			else {
				r[a] = { ...o };
				for (let e in i) if (Object.prototype.hasOwnProperty.call(i, e)) {
					let t = e;
					r[a][t] = Bo(i[t], o[t], n);
				}
			}
		} else a === "className" && n && t.className ? r.className = xt(e?.className, t?.className) : a === "style" && n && t.style ? r.style = {
			...e?.style,
			...t?.style
		} : r[a] === void 0 && (r[a] = e[a]);
	}
	return r;
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/utils/assert.js
function Vo(e) {
	throw Error("Failed assertion: should not be rendered");
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/cell/GridEditInputCell.js
var Ho = [
	"id",
	"value",
	"formattedValue",
	"api",
	"field",
	"row",
	"rowNode",
	"colDef",
	"cellMode",
	"isEditable",
	"tabIndex",
	"hasFocus",
	"isValidating",
	"debounceMs",
	"isProcessingProps",
	"onValueChange",
	"slotProps"
], Uo = (e) => {
	let { classes: t } = e;
	return Bi({ root: ["editInputCell"] }, jn, t);
}, Wo = I(Vo, {
	name: "MuiDataGrid",
	slot: "EditInputCell"
})({
	font: H.typography.font.body,
	padding: "1px 0",
	"& input": {
		padding: "0 16px",
		height: "100%"
	}
}), Go = z((e, t) => {
	let n = B(), { id: r, value: i, field: a, colDef: o, hasFocus: s, debounceMs: c = 200, isProcessingProps: l, onValueChange: u, slotProps: d } = e, f = R(e, Ho), p = V(), m = O.useRef(null), [h, g] = O.useState(i), _ = Uo(n), v = O.useCallback(async (e) => {
		let t = e.target.value, n = p.current.getColumn(a), i = t;
		n.valueParser && (i = n.valueParser(t, p.current.getRow(r), n, p)), g(i), p.current.setEditCellValue({
			id: r,
			field: a,
			value: i,
			debounceMs: c,
			unstable_skipValueParser: !0
		}, e), u && await u(e, t);
	}, [
		p,
		c,
		a,
		r,
		u
	]), y = p.current.unstable_getEditCellMeta(r, a);
	return O.useEffect(() => {
		y?.changeReason !== "debouncedSetEditCellValue" && g(i);
	}, [y, i]), Ct(() => {
		s && m.current.focus();
	}, [s]), /* @__PURE__ */ E(Wo, L({
		as: n.slots.baseInput,
		inputRef: m,
		className: _.root,
		ownerState: n,
		fullWidth: !0,
		type: o.type === "number" ? o.type : "text",
		value: h ?? "",
		onChange: v,
		endAdornment: l ? /* @__PURE__ */ E(n.slots.loadIcon, {
			fontSize: "small",
			color: "action"
		}) : void 0
	}, f, d?.root, { ref: t }));
});
process.env.NODE_ENV !== "production" && (Go.displayName = "GridEditInputCell");
var Ko = (e) => /* @__PURE__ */ E(Go, L({}, e));
process.env.NODE_ENV !== "production" && (Ko.displayName = "renderEditInputCell");
//#endregion
//#region node_modules/@mui/x-data-grid/esm/hooks/features/sorting/gridSortingUtils.js
var qo = (e, t) => t && e.length > 1 ? (In(["MUI X: The `sortModel` can only contain a single item when the `disableMultipleColumnsSorting` prop is set to `true`.", "If you are using the community version of the Data Grid, this prop is always `true`."], "error"), [e[0]]) : e, Jo = (e, t) => (n) => L({}, n, { sorting: L({}, n.sorting, { sortModel: qo(e, t) }) }), Yo = (e) => e === "desc", Xo = (e, t) => {
	let n = t.current.getColumn(e.field);
	if (!n || e.sort === null) return null;
	let r;
	return r = n.getSortComparator ? n.getSortComparator(e.sort) : Yo(e.sort) ? (...e) => -1 * n.sortComparator(...e) : n.sortComparator, r ? {
		getSortCellParams: (e) => ({
			id: e,
			field: n.field,
			rowNode: Ya(t, e),
			value: t.current.getCellValue(e, n.field),
			api: t.current
		}),
		comparator: r
	} : null;
}, Zo = (e, t, n) => e.reduce((e, r, i) => {
	if (e !== 0) return e;
	let a = t.params[i], o = n.params[i];
	return e = r.comparator(a.value, o.value, a, o), e;
}, 0), Qo = (e, t) => {
	let n = e.map((e) => Xo(e, t)).filter((e) => !!e);
	return n.length === 0 ? null : (e) => e.map((e) => ({
		node: e,
		params: n.map((t) => t.getSortCellParams(e.id))
	})).sort((e, t) => Zo(n, e, t)).map((e) => e.node.id);
}, $o = (e, t) => {
	let n = e.indexOf(t);
	return !t || n === -1 || n + 1 === e.length ? e[0] : e[n + 1];
}, es = (e, t) => e == null && t != null ? -1 : t == null && e != null ? 1 : e == null && t == null ? 0 : null, ts = new Intl.Collator(), ns = (e, t) => {
	let n = es(e, t);
	return n === null ? typeof e == "string" ? ts.compare(e.toString(), t.toString()) : e - t : n;
}, rs = (e, t) => {
	let n = es(e, t);
	return n === null ? Number(e) - Number(t) : n;
}, is = (e, t) => {
	let n = es(e, t);
	return n === null ? e > t ? 1 : e < t ? -1 : 0 : n;
}, q = /* @__PURE__ */ ft(zi()), as = [
	"item",
	"applyValue",
	"type",
	"apiRef",
	"focusElementRef",
	"tabIndex",
	"disabled",
	"isFilterActive",
	"slotProps",
	"clearButton",
	"headerFilterMenu"
];
function os(e) {
	let { item: t, applyValue: n, type: r, apiRef: i, focusElementRef: a, tabIndex: o, disabled: s, slotProps: c, clearButton: l, headerFilterMenu: u } = e, d = R(e, as), f = c?.root, p = zo(), [m, h] = O.useState(ss(t.value)), [g, _] = O.useState(!1), v = kt(), y = B(), b = O.useCallback((e) => {
		let i = ss(e.target.value);
		h(i), _(!0), p.start(y.filterDebounceMs, () => {
			n(L({}, t, {
				value: r === "number" && !Number.isNaN(Number(i)) ? Number(i) : i,
				fromInput: v
			})), _(!1);
		});
	}, [
		p,
		y.filterDebounceMs,
		t,
		r,
		v,
		n
	]);
	return O.useEffect(() => {
		(t.fromInput !== v || t.value == null) && h(ss(t.value));
	}, [v, t]), /* @__PURE__ */ D(O.Fragment, { children: [
		/* @__PURE__ */ E(y.slots.baseTextField, L({
			id: v,
			label: i.current.getLocaleText("filterPanelInputLabel"),
			placeholder: i.current.getLocaleText("filterPanelInputPlaceholder"),
			value: m ?? "",
			onChange: b,
			type: r || "text",
			disabled: s,
			slotProps: L({}, f?.slotProps, {
				input: L({ endAdornment: g ? /* @__PURE__ */ E(y.slots.loadIcon, {
					fontSize: "small",
					color: "action"
				}) : null }, f?.slotProps?.input),
				htmlInput: L({ tabIndex: o }, f?.slotProps?.htmlInput)
			}),
			inputRef: a
		}, y.slotProps?.baseTextField, d, f)),
		u,
		l
	] });
}
function ss(e) {
	if (!(e == null || e === "")) return String(e);
}
process.env.NODE_ENV !== "production" && (os.propTypes = {
	apiRef: q.default.shape({ current: q.default.object.isRequired }).isRequired,
	applyValue: q.default.func.isRequired,
	className: q.default.string,
	clearButton: q.default.node,
	disabled: q.default.bool,
	focusElementRef: q.default.oneOfType([q.default.func, q.default.object]),
	headerFilterMenu: q.default.node,
	inputRef: q.default.oneOfType([q.default.func, q.default.shape({ current: (e, t) => e[t] == null ? null : typeof e[t] != "object" || e[t].nodeType !== 1 ? /* @__PURE__ */ Error(`Expected prop '${t}' to be of type Element`) : null })]),
	isFilterActive: q.default.bool,
	item: q.default.shape({
		field: q.default.string.isRequired,
		id: q.default.oneOfType([q.default.number, q.default.string]),
		operator: q.default.string.isRequired,
		value: q.default.any
	}).isRequired,
	onBlur: q.default.func,
	onFocus: q.default.func,
	slotProps: q.default.object,
	tabIndex: q.default.number,
	type: q.default.oneOf([
		"date",
		"datetime-local",
		"number",
		"text"
	])
});
//#endregion
//#region node_modules/@mui/x-data-grid/esm/utils/utils.js
function cs(e) {
	return typeof e == "number" && !Number.isNaN(e);
}
function ls(e) {
	return typeof e == "function";
}
function us(e) {
	return typeof e == "object" && !!e;
}
function ds() {
	try {
		let e = "__some_random_key_you_are_not_going_to_use__";
		return window.localStorage.setItem(e, e), window.localStorage.removeItem(e), !0;
	} catch {
		return !1;
	}
}
function fs(e) {
	return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
var ps = (e, t, n) => Math.max(t, Math.min(n, e));
function ms(e) {
	return () => {
		let t = e += 1831565813;
		return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
	};
}
function hs(e) {
	let t = ms(e);
	return (e, n) => e + (n - e) * t();
}
function gs(e) {
	return typeof structuredClone == "function" ? structuredClone(e) : JSON.parse(JSON.stringify(e));
}
var _s = (e, t) => (...n) => {
	e && t(...n);
}, vs = [
	"item",
	"applyValue",
	"type",
	"apiRef",
	"focusElementRef",
	"slotProps"
];
function ys(e) {
	let { item: t, applyValue: n, type: r, apiRef: i, focusElementRef: a, slotProps: o } = e, s = R(e, vs), c = kt(), [l, u] = O.useState([]), [d, f] = O.useState(t.value || []), p = B();
	O.useEffect(() => {
		f((t.value ?? []).map(String));
	}, [t.value]);
	let m = O.useCallback((e, i) => {
		f(i.map(String)), n(L({}, t, { value: [...i.map((e) => r === "number" ? Number(e) : e)] }));
	}, [
		n,
		t,
		r
	]), h = O.useCallback((e, t) => {
		u(t === "" ? [] : [t]);
	}, [u]), g = p.slots.baseAutocomplete;
	return /* @__PURE__ */ E(g, L({
		multiple: !0,
		freeSolo: !0,
		options: l,
		id: c,
		value: d,
		onChange: m,
		onInputChange: h,
		label: i.current.getLocaleText("filterPanelInputLabel"),
		placeholder: i.current.getLocaleText("filterPanelInputPlaceholder"),
		slotProps: { textField: {
			type: r || "text",
			inputRef: a
		} }
	}, s, o?.root));
}
process.env.NODE_ENV !== "production" && (ys.propTypes = {
	apiRef: q.default.shape({ current: q.default.object.isRequired }).isRequired,
	applyValue: q.default.func.isRequired,
	className: q.default.string,
	clearButton: q.default.node,
	disabled: q.default.bool,
	focusElementRef: q.default.oneOfType([q.default.func, q.default.object]),
	headerFilterMenu: q.default.node,
	inputRef: q.default.oneOfType([q.default.func, q.default.shape({ current: (e, t) => e[t] == null ? null : typeof e[t] != "object" || e[t].nodeType !== 1 ? /* @__PURE__ */ Error(`Expected prop '${t}' to be of type Element`) : null })]),
	isFilterActive: q.default.bool,
	item: q.default.shape({
		field: q.default.string.isRequired,
		id: q.default.oneOfType([q.default.number, q.default.string]),
		operator: q.default.string.isRequired,
		value: q.default.any
	}).isRequired,
	onBlur: q.default.func,
	onFocus: q.default.func,
	slotProps: q.default.object,
	tabIndex: q.default.number,
	type: q.default.oneOf([
		"date",
		"datetime-local",
		"number",
		"text"
	])
});
//#endregion
//#region node_modules/@mui/x-data-grid/esm/models/gridEditRowModel.js
var bs = /* @__PURE__ */ function(e) {
	return e.Cell = "cell", e.Row = "row", e;
}(bs || {}), xs = /* @__PURE__ */ function(e) {
	return e.Edit = "edit", e.View = "view", e;
}(xs || {}), Ss = /* @__PURE__ */ function(e) {
	return e.Edit = "edit", e.View = "view", e;
}(Ss || {}), Cs = /* @__PURE__ */ function(e) {
	return e.And = "and", e.Or = "or", e;
}(Cs || {}), ws = class {
	constructor(e) {
		this.data = e.ids;
	}
	has(e) {
		return this.data.has(e);
	}
	select(e) {
		this.data.add(e);
	}
	unselect(e) {
		this.data.delete(e);
	}
}, Ts = class {
	constructor(e) {
		this.data = e.ids;
	}
	has(e) {
		return !this.data.has(e);
	}
	select(e) {
		this.data.delete(e);
	}
	unselect(e) {
		this.data.add(e);
	}
}, Es = (e) => e.type === "include" ? new ws(e) : new Ts(e), Ds = /* @__PURE__ */ function(e) {
	return e.enterKeyDown = "enterKeyDown", e.cellDoubleClick = "cellDoubleClick", e.printableKeyDown = "printableKeyDown", e.deleteKeyDown = "deleteKeyDown", e.pasteKeyDown = "pasteKeyDown", e;
}(Ds || {}), Os = /* @__PURE__ */ function(e) {
	return e.cellFocusOut = "cellFocusOut", e.escapeKeyDown = "escapeKeyDown", e.enterKeyDown = "enterKeyDown", e.tabKeyDown = "tabKeyDown", e.shiftTabKeyDown = "shiftTabKeyDown", e;
}(Os || {}), ks = /* @__PURE__ */ function(e) {
	return e.enterKeyDown = "enterKeyDown", e.cellDoubleClick = "cellDoubleClick", e.printableKeyDown = "printableKeyDown", e.deleteKeyDown = "deleteKeyDown", e;
}(ks || {}), As = /* @__PURE__ */ function(e) {
	return e.rowFocusOut = "rowFocusOut", e.escapeKeyDown = "escapeKeyDown", e.enterKeyDown = "enterKeyDown", e.tabKeyDown = "tabKeyDown", e.shiftTabKeyDown = "shiftTabKeyDown", e;
}(As || {});
//#endregion
//#region node_modules/@mui/x-data-grid/esm/models/gridColumnGrouping.js
function js(e) {
	return e.field !== void 0;
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/hooks/features/filter/gridFilterState.js
var Ms = {
	filteredRowsLookup: {},
	filteredChildrenCountLookup: {},
	filteredDescendantCountLookup: {}
}, Ns = () => ({
	items: [],
	logicOperator: Cs.And,
	quickFilterValues: [],
	quickFilterLogicOperator: Cs.And
});
//#endregion
//#region node_modules/@mui/x-data-grid/esm/utils/getPublicApiRef.js
function Ps(e) {
	return { current: e.current.getPublicApi() };
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/hooks/features/columns/gridColumnsInterfaces.js
var Fs = /* @__PURE__ */ function(e) {
	return e.LEFT = "left", e.RIGHT = "right", e;
}({}), Is = {
	left: [],
	right: []
}, Ls = ka((e) => e.props.listView ?? !1), Rs = ka((e) => e.listViewColumn), zs = ka((e) => e.columns), Bs = G(zs, (e) => e.orderedFields), Vs = G(zs, (e) => e.lookup), Hs = Oa(Bs, Vs, (e, t) => e.map((e) => t[e])), Us = G(zs, (e) => e.columnVisibilityModel), Ws = G(zs, (e) => e.initialColumnVisibilityModel), Gs = Oa(Hs, Us, Ls, Rs, (e, t, n, r) => n && r ? [r] : e.filter((e) => t[e.field] !== !1)), Ks = Oa(Gs, (e) => e.map((e) => e.field)), qs = ka((e) => e.pinnedColumns);
Oa(qs, Bs, (e, t) => Ys(e, t));
var Js = Oa(zs, qs, Ks, Ls, (e, t, n, r) => {
	if (r) return Is;
	let i = Ys(t, n);
	return {
		left: i.left.map((t) => e.lookup[t]),
		right: i.right.map((t) => e.lookup[t])
	};
});
function Ys(e, t) {
	if (!Array.isArray(e.left) && !Array.isArray(e.right) || e.left?.length === 0 && e.right?.length === 0) return Is;
	let n = (e, t) => Array.isArray(e) ? e.filter((e) => t.includes(e)) : [], r = n(e.left, t), i = t.filter((e) => !r.includes(e));
	return {
		left: r,
		right: n(e.right, i)
	};
}
var Xs = Oa(Gs, (e) => {
	let t = [], n = 0;
	for (let r = 0; r < e.length; r += 1) t.push(n), n += e[r].computedWidth;
	return t;
}), Zs = Oa(Hs, (e) => e.filter((e) => e.filterable)), Qs = Oa(Hs, (e) => e.reduce((e, t) => (t.filterable && (e[t.field] = t), e), {})), $s = Oa(Hs, (e) => e.some((e) => e.colSpan !== void 0)), ec;
function tc() {
	if (ec !== void 0) return ec;
	try {
		ec = Function("return true")();
	} catch {
		ec = !1;
	}
	return ec;
}
var nc = (e, t) => {
	let n = L({}, e);
	if (n.id ??= Math.round(Math.random() * 1e5), n.operator == null) {
		let e = Vs(t)[n.field];
		n.operator = e && e.filterOperators[0].value;
	}
	return n;
}, rc = (e, t, n) => {
	let r = e.items.length > 1, i;
	r && t ? (In(["MUI X: The `filterModel` can only contain a single item when the `disableMultipleColumnsFiltering` prop is set to `true`.", "If you are using the community version of the Data Grid, this prop is always `true`."], "error"), i = [e.items[0]]) : i = e.items;
	let a = r && i.some((e) => e.id == null), o = i.some((e) => e.operator == null);
	return a && In("MUI X: The `id` field is required on `filterModel.items` when you use multiple filters.", "error"), o && In("MUI X: The `operator` field is required on `filterModel.items`, one or more of your filtering item has no `operator` provided.", "error"), o || a ? L({}, e, { items: i.map((e) => nc(e, n)) }) : e.items === i ? e : L({}, e, { items: i });
}, ic = (e, t, n) => (r) => L({}, r, { filterModel: rc(e, t, n) }), ac = (e) => typeof e == "string" ? e.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : e, oc = (e, t, n) => {
	if (!e.field || !e.operator) return null;
	let r = n.current.getColumn(e.field);
	if (!r) return null;
	let i;
	if (r.valueParser) {
		let t = r.valueParser;
		i = Array.isArray(e.value) ? e.value?.map((e) => t(e, void 0, r, n)) : t(e.value, void 0, r, n);
	} else i = e.value;
	let { ignoreDiacritics: a } = n.current.rootProps;
	a && (i = ac(i));
	let o = L({}, e, { value: i }), s = r.filterOperators;
	if (!s?.length) throw Error(`MUI X: No filter operators found for column '${r.field}'.`);
	let c = s.find((e) => e.value === o.operator);
	if (!c) throw Error(`MUI X: No filter operator found for column '${r.field}' and operator value '${o.operator}'.`);
	let l = Ps(n), u = c.getApplyFilterFn(o, r);
	return typeof u == "function" ? {
		item: o,
		fn: (e) => {
			let n = t(e, r);
			return a && (n = ac(n)), u(n, e, r, l);
		}
	} : null;
}, sc = 1, cc = (e, t, n, r) => {
	let { items: i } = e, a = i.map((e) => oc(e, t, n)).filter((e) => !!e);
	if (a.length === 0) return null;
	if (r || !tc()) return (e, t) => {
		let n = {};
		for (let r = 0; r < a.length; r += 1) {
			let i = a[r];
			(!t || t(i.item.field)) && (n[i.item.id] = i.fn(e));
		}
		return n;
	};
	let o = Function("appliers", "row", "shouldApplyFilter", `"use strict";
${a.map((e, t) => `const shouldApply${t} = !shouldApplyFilter || shouldApplyFilter(${JSON.stringify(e.item.field)});`).join("\n")}

const result$$ = {
${a.map((e, t) => `  ${JSON.stringify(String(e.item.id))}: !shouldApply${t} ? false : appliers[${t}].fn(row),`).join("\n")}
};

return result$$;`.replaceAll("$$", String(sc)));
	return sc += 1, (e, t) => o(a, e, t);
}, lc = (e) => e.quickFilterExcludeHiddenColumns ?? !0, uc = (e, t, n) => {
	let r = e.quickFilterValues?.filter(Boolean) ?? [];
	if (r.length === 0) return null;
	let i = Bs(n), a = Us(n), o;
	o = lc(e) ? i.filter((e) => a[e] !== !1) : i;
	let s = [], { ignoreDiacritics: c } = n.current.rootProps, l = Ps(n);
	return o.forEach((e) => {
		let t = n.current.getColumn(e), i = t?.getApplyQuickFilterFn;
		i && s.push({
			column: t,
			appliers: r.map((e) => ({ fn: i(c ? ac(e) : e, t, l) }))
		});
	}), function(e, n) {
		let i = {};
		outer: for (let a = 0; a < r.length; a += 1) {
			let o = r[a];
			for (let r = 0; r < s.length; r += 1) {
				let { column: u, appliers: d } = s[r], { field: f } = u;
				if (n && !n(f)) continue;
				let p = d[a], m = t(e, u);
				if (p.fn !== null && (c && (m = ac(m)), p.fn(m, e, u, l))) {
					i[o] = !0;
					continue outer;
				}
			}
			i[o] = !1;
		}
		return i;
	};
}, dc = (e, t, n, r) => {
	let i = cc(e, t, n, r), a = uc(e, t, n);
	return function(e, t, n) {
		n.passingFilterItems = i?.(e, t) ?? null, n.passingQuickFilterValues = a?.(e, t) ?? null;
	};
}, fc = (e) => e != null, pc = (e, t, n, r) => (e.cleanedFilterItems ||= r.filter((e) => oc(e, t, n) !== null), e.cleanedFilterItems), mc = (e, t, n, r, i, a) => {
	let o = pc(a, r, i, n.items), s = e.filter(fc), c = t.filter(fc);
	if (s.length > 0) {
		let e = (e) => s.some((t) => t[e.id]);
		if ((n.logicOperator ?? Ns().logicOperator) === Cs.And) {
			if (!o.every(e)) return !1;
		} else if (!o.some(e)) return !1;
	}
	if (c.length > 0 && n.quickFilterValues != null) {
		let e = (e) => c.some((t) => t[e]);
		if ((n.quickFilterLogicOperator ?? Ns().quickFilterLogicOperator) === Cs.And) {
			if (!n.quickFilterValues.every(e)) return !1;
		} else if (!n.quickFilterValues.some(e)) return !1;
	}
	return !0;
}, hc = (e) => {
	if (!e) return null;
	let t = new RegExp(fs(e), "i");
	return (e, n, r, i) => {
		let a = i.current.getRowFormattedValue(n, r);
		return i.current.ignoreDiacritics && (a = ac(a)), a == null ? !1 : t.test(a.toString());
	};
}, gc = (e, t) => (n) => {
	if (!n.value) return null;
	let r = e ? n.value : n.value.trim(), i = new RegExp(fs(r), "i");
	return (e) => {
		if (e == null) return t;
		let n = i.test(String(e));
		return t ? !n : n;
	};
}, _c = (e, t) => (n) => {
	if (!n.value) return null;
	let r = e ? n.value : n.value.trim(), i = new Intl.Collator(void 0, {
		sensitivity: "base",
		usage: "search"
	});
	return (e) => {
		if (e == null) return t;
		let n = i.compare(r, e.toString()) === 0;
		return t ? !n : n;
	};
}, vc = (e) => () => (t) => {
	let n = t === "" || t == null;
	return e ? !n : n;
}, yc = {
	width: 100,
	minWidth: 50,
	maxWidth: Infinity,
	hideable: !0,
	sortable: !0,
	resizable: !0,
	filterable: !0,
	groupable: !0,
	pinnable: !0,
	aggregable: !0,
	chartable: !0,
	editable: !1,
	sortComparator: ns,
	type: "string",
	align: "left",
	filterOperators: ((e = !1) => [
		{
			value: "contains",
			getApplyFilterFn: gc(e, !1),
			InputComponent: os
		},
		{
			value: "doesNotContain",
			getApplyFilterFn: gc(e, !0),
			InputComponent: os
		},
		{
			value: "equals",
			getApplyFilterFn: _c(e, !1),
			InputComponent: os
		},
		{
			value: "doesNotEqual",
			getApplyFilterFn: _c(e, !0),
			InputComponent: os
		},
		{
			value: "startsWith",
			getApplyFilterFn: (t) => {
				if (!t.value) return null;
				let n = e ? t.value : t.value.trim(), r = RegExp(`^${fs(n)}.*$`, "i");
				return (e) => e == null ? !1 : r.test(e.toString());
			},
			InputComponent: os
		},
		{
			value: "endsWith",
			getApplyFilterFn: (t) => {
				if (!t.value) return null;
				let n = e ? t.value : t.value.trim(), r = RegExp(`.*${fs(n)}$`, "i");
				return (e) => e == null ? !1 : r.test(e.toString());
			},
			InputComponent: os
		},
		{
			value: "isEmpty",
			getApplyFilterFn: vc(!1),
			requiresFilterValue: !1
		},
		{
			value: "isNotEmpty",
			getApplyFilterFn: vc(!0),
			requiresFilterValue: !1
		},
		{
			value: "isAnyOf",
			getApplyFilterFn: (t) => {
				if (!Array.isArray(t.value) || t.value.length === 0) return null;
				let n = e ? t.value : t.value.map((e) => e.trim()), r = new Intl.Collator(void 0, {
					sensitivity: "base",
					usage: "search"
				});
				return (e) => e == null ? !1 : n.some((t) => r.compare(t, e.toString() || "") === 0);
			},
			InputComponent: ys
		}
	])(),
	renderEditCell: Ko,
	getApplyQuickFilterFn: hc
}, bc = /* @__PURE__ */ O.createContext();
function xc({ value: e, ...t }) {
	return /* @__PURE__ */ E(bc.Provider, {
		value: e ?? !0,
		...t
	});
}
process.env.NODE_ENV !== "production" && (xc.propTypes = {
	children: q.default.node,
	value: q.default.bool
});
var Sc = () => O.useContext(bc) ?? !1;
//#endregion
//#region node_modules/@mui/utils/esm/HTMLElementType/HTMLElementType.js
function Cc(e, t, n, r, i) {
	if (process.env.NODE_ENV === "production") return null;
	let a = e[t], o = i || t;
	return a == null ? null : a && a.nodeType !== 1 ? /* @__PURE__ */ Error(`Invalid ${r} \`${o}\` supplied to \`${n}\`. Expected an HTMLElement.`) : null;
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/utils/keyboardUtils.js
function wc(e) {
	return e.key.length === 1 && !e.ctrlKey && !e.metaKey;
}
var Tc = (e) => e.indexOf("Arrow") === 0 || e.indexOf("Page") === 0 || e === " " || e === "Home" || e === "End", Ec = (e) => !!e.key, Dc = (e) => e === "Tab" || e === "Escape";
function Oc(e) {
	return (e.ctrlKey || e.metaKey) && String.fromCharCode(e.keyCode) === "V" && !e.shiftKey && !e.altKey;
}
function kc(e) {
	return (e.ctrlKey || e.metaKey) && String.fromCharCode(e.keyCode) === "C" && !e.shiftKey && !e.altKey;
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/GridConfigurationContext.js
var Ac = /* @__PURE__ */ O.createContext(void 0);
process.env.NODE_ENV !== "production" && (Ac.displayName = "GridConfigurationContext");
//#endregion
//#region node_modules/@mui/x-data-grid/esm/hooks/utils/useGridConfiguration.js
var jc = () => {
	let e = O.useContext(Ac);
	if (e === void 0) throw Error([
		"MUI X: Could not find the Data Grid configuration context.",
		"It looks like you rendered your component outside of a DataGrid, DataGridPro or DataGridPremium parent component.",
		"This can also happen if you are bundling multiple versions of the Data Grid."
	].join("\n"));
	return e;
}, Mc = "MuiDataGridVariables", Nc = /* @__PURE__ */ O.createContext({
	className: "unset",
	tag: /* @__PURE__ */ E("style", { href: "/unset" })
});
process.env.NODE_ENV !== "production" && (Nc.displayName = "CSSVariablesContext");
function Pc() {
	return O.useContext(Nc).className;
}
function Fc() {
	return O.useContext(Nc);
}
function Ic(e) {
	let t = jc(), n = B(), r = t.hooks.useCSSVariables(), i = O.useMemo(() => {
		let e = `${Mc}-${r.id}`, t = `.${e}{${Lc(r.variables)}}`;
		return {
			className: e,
			tag: /* @__PURE__ */ E("style", {
				href: `/${e}`,
				nonce: n.nonce,
				children: t
			})
		};
	}, [n.nonce, r]);
	return /* @__PURE__ */ E(Nc.Provider, {
		value: i,
		children: e.children
	});
}
function Lc(e) {
	let t = "";
	for (let n in e) Object.hasOwn(e, n) && e[n] !== void 0 && (t += `${n}:${e[n]};`);
	return t;
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/menu/GridMenu.js
var Rc = [
	"open",
	"target",
	"onClose",
	"children",
	"position",
	"className",
	"onExited"
], zc = (e) => {
	let { classes: t } = e;
	return Bi({ root: ["menu"] }, jn, t);
}, Bc = I(Vo, {
	name: "MuiDataGrid",
	slot: "Menu"
})({
	zIndex: H.zIndex.menu,
	[`& .${U.menuList}`]: { outline: 0 }
});
function Vc(e) {
	let { open: t, target: n, onClose: r, children: i, position: a, className: o, onExited: s } = e, c = R(e, Rc), l = V(), u = B(), d = zc(u), f = Pc(), p = O.useRef(null);
	return Ct(() => {
		t ? p.current = document.activeElement instanceof HTMLElement ? document.activeElement : null : (p.current?.focus?.(), p.current = null);
	}, [t]), O.useEffect(() => {
		let e = t ? "menuOpen" : "menuClose";
		l.current.publishEvent(e, { target: n });
	}, [
		l,
		t,
		n
	]), /* @__PURE__ */ E(Bc, L({
		as: u.slots.basePopper,
		className: xt(d.root, o, f),
		ownerState: u,
		open: t,
		target: n,
		transition: !0,
		placement: a,
		onClickAway: (e) => {
			e.target && (n === e.target || n?.contains(e.target)) || r(e);
		},
		onExited: s,
		clickAwayMouseEvent: "onMouseDown",
		onKeyDown: (e) => {
			Dc(e.key) && r(e);
		}
	}, c, u.slotProps?.basePopper, { children: i }));
}
process.env.NODE_ENV !== "production" && (Vc.propTypes = {
	children: q.default.node,
	className: q.default.string,
	onClose: q.default.func.isRequired,
	onExited: q.default.func,
	open: q.default.bool.isRequired,
	position: q.default.oneOf([
		"bottom-end",
		"bottom-start",
		"bottom",
		"left-end",
		"left-start",
		"left",
		"right-end",
		"right-start",
		"right",
		"top-end",
		"top-start",
		"top"
	]),
	target: Cc
});
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/cell/GridActionsCellItem.js
var Hc = [
	"label",
	"icon",
	"showInMenu",
	"onClick"
], Uc = [
	"label",
	"icon",
	"showInMenu",
	"onClick",
	"closeMenuOnClick",
	"closeMenu"
], Wc = z((e, t) => {
	let n = B();
	if (!e.showInMenu) {
		let { label: r, icon: i, onClick: a } = e, o = R(e, Hc), s = (e) => {
			a?.(e);
		};
		return /* @__PURE__ */ E(n.slots.baseIconButton, L({
			size: "small",
			role: "menuitem",
			"aria-label": r
		}, o, { onClick: s }, n.slotProps?.baseIconButton, {
			ref: t,
			children: /* @__PURE__ */ O.cloneElement(i, { fontSize: "small" })
		}));
	}
	let { label: r, icon: i, onClick: a, closeMenuOnClick: o = !0, closeMenu: s } = e, c = R(e, Uc);
	return /* @__PURE__ */ E(n.slots.baseMenuItem, L({ ref: t }, c, {
		onClick: (e) => {
			a?.(e), o && s?.();
		},
		iconStart: i,
		children: r
	}));
});
process.env.NODE_ENV !== "production" && (Wc.displayName = "GridActionsCellItem");
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/cell/GridActionsCell.js
var Gc = [
	"api",
	"colDef",
	"id",
	"hasFocus",
	"isEditable",
	"field",
	"value",
	"formattedValue",
	"row",
	"rowNode",
	"cellMode",
	"tabIndex",
	"position",
	"onMenuOpen",
	"onMenuClose",
	"children",
	"suppressChildrenValidation"
], Kc = (e) => typeof e.getActions == "function";
function qc(e) {
	let { id: t, hasFocus: n, tabIndex: r, position: i = "bottom-end", onMenuOpen: a, onMenuClose: o, children: s, suppressChildrenValidation: c } = e, l = R(e, Gc), [u, d] = O.useState(-1), [f, p] = O.useState(!1), m = V(), h = O.useRef(null), g = O.useRef(null), _ = O.useRef(!1), v = O.useRef({}), y = Sc(), b = kt(), x = kt(), S = B(), C = m.current.getRowParams(t), w = [];
	O.Children.forEach(s, (e) => {
		/* @__PURE__ */ O.isValidElement(e) && (e.type === O.Fragment ? O.Children.forEach(e.props.children, (e) => {
			/* @__PURE__ */ O.isValidElement(e) && w.push(e);
		}) : e.type === Wc || c ? w.push(e) : In(`MUI X: Invalid child type in \`GridActionsCell\`. Expected \`GridActionsCellItem\` or \`React.Fragment\`, got \`${typeof e.type == "function" ? e.type.name : e.type}\`.
If this is intentional, you can suppress this warning by passing the \`suppressChildrenValidation\` prop to \`GridActionsCell\`.`, "error"));
	});
	let T = w.filter((e) => !e.props.showInMenu), k = w.filter((e) => e.props.showInMenu), A = T.length + (k.length ? 1 : 0);
	O.useLayoutEffect(() => {
		n || Object.entries(v.current).forEach(([e, t]) => {
			t?.stop({}, () => {
				delete v.current[e];
			});
		});
	}, [n]), O.useEffect(() => {
		u < 0 || !h.current || u >= h.current.children.length || h.current.children[u].focus({ preventScroll: !0 });
	}, [u]);
	let j = w.findIndex((e) => !e.props.disabled);
	O.useEffect(() => {
		n && u === -1 && d(j), n || (d(-1), _.current = !1);
	}, [
		n,
		u,
		j
	]), O.useEffect(() => {
		u >= A && d(A - 1);
	}, [u, A]);
	let M = (e) => {
		a && !a(C, e) || (p(!0), d(A - 1), _.current = !0);
	}, N = (e) => {
		o && !o(C, e) || p(!1);
	}, P = (e) => {
		e.stopPropagation(), e.preventDefault(), f ? N(e) : M(e);
	}, ee = (e) => (t) => {
		v.current[e] = t;
	}, te = (e, t) => (n) => {
		d(e), _.current = !0, t && t(n);
	}, ne = A > 0 ? {
		role: "menu",
		onKeyDown: (e) => {
			if (A <= 1) return;
			let t = (e, n) => {
				if (e < 0 || e > w.length) return e;
				let r = (n === "left" ? -1 : 1) * (y ? -1 : 1);
				return w[e + r]?.props.disabled ? t(e + r, n) : e + r;
			}, n = u;
			e.key === "ArrowRight" ? n = t(u, "right") : e.key === "ArrowLeft" && (n = t(u, "left")), !(n < 0 || n >= A) && n !== u && (e.preventDefault(), e.stopPropagation(), d(n));
		}
	} : void 0;
	return /* @__PURE__ */ D("div", L({
		ref: h,
		tabIndex: -1,
		className: U.actionsCell
	}, ne, l, { children: [
		T.map((e, t) => /* @__PURE__ */ O.cloneElement(e, {
			key: t,
			touchRippleRef: ee(t),
			onClick: te(t, e.props.onClick),
			tabIndex: u === t ? r : -1
		})),
		k.length > 0 && x && /* @__PURE__ */ E(S.slots.baseIconButton, L({
			ref: g,
			id: x,
			"aria-label": m.current.getLocaleText("actionsCellMore"),
			"aria-haspopup": "menu",
			"aria-expanded": f,
			"aria-controls": f ? b : void 0,
			role: "menuitem",
			size: "small",
			onClick: P,
			touchRippleRef: ee(x),
			tabIndex: u === T.length ? r : -1
		}, S.slotProps?.baseIconButton, { children: /* @__PURE__ */ E(S.slots.moreActionsIcon, { fontSize: "small" }) })),
		k.length > 0 && /* @__PURE__ */ E(Vc, {
			open: f,
			target: g.current,
			position: i,
			onClose: N,
			children: /* @__PURE__ */ E(S.slots.baseMenuList, {
				id: b,
				className: U.menuList,
				"aria-labelledby": x,
				autoFocusItem: !0,
				children: k.map((e, t) => /* @__PURE__ */ O.cloneElement(e, {
					key: t,
					closeMenu: N
				}))
			})
		})
	] }));
}
process.env.NODE_ENV !== "production" && (qc.propTypes = {
	api: q.default.object,
	cellMode: q.default.oneOf(["edit", "view"]).isRequired,
	children: q.default.node.isRequired,
	colDef: q.default.object.isRequired,
	field: q.default.string.isRequired,
	formattedValue: q.default.any,
	hasFocus: q.default.bool.isRequired,
	id: q.default.oneOfType([q.default.number, q.default.string]).isRequired,
	isEditable: q.default.bool,
	position: q.default.oneOf([
		"bottom-end",
		"bottom-start",
		"bottom",
		"left-end",
		"left-start",
		"left",
		"right-end",
		"right-start",
		"right",
		"top-end",
		"top-start",
		"top"
	]),
	row: q.default.any.isRequired,
	rowNode: q.default.object.isRequired,
	tabIndex: q.default.oneOf([-1, 0]).isRequired,
	value: q.default.any
});
function Jc(e) {
	let { colDef: t, id: n } = e, r = V();
	if (!Kc(t)) throw Error("MUI X: Missing the `getActions` property in the `GridColDef`.");
	return /* @__PURE__ */ E(qc, L({ suppressChildrenValidation: !0 }, e, { children: t.getActions(r.current.getRowParams(n)) }));
}
var Yc = (e) => /* @__PURE__ */ E(Jc, L({}, e));
process.env.NODE_ENV !== "production" && (Yc.displayName = "renderActionsCell");
//#endregion
//#region node_modules/@mui/x-data-grid/esm/colDef/gridActionsColDef.js
var Xc = "actions", Zc = L({}, yc, {
	sortable: !1,
	filterable: !1,
	aggregable: !1,
	chartable: !1,
	width: 100,
	display: "flex",
	align: "center",
	headerAlign: "center",
	headerName: "",
	disableColumnMenu: !0,
	disableExport: !0,
	renderCell: Yc,
	getApplyQuickFilterFn: () => null
}), Qc = /* @__PURE__ */ function(e) {
	return e[e.NONE = 0] = "NONE", e[e.LEFT = 1] = "LEFT", e[e.RIGHT = 2] = "RIGHT", e[e.VIRTUAL = 3] = "VIRTUAL", e;
}({}), $c = [
	"formattedValue",
	"colDef",
	"cellMode",
	"row",
	"api",
	"id",
	"value",
	"rowNode",
	"field",
	"hasFocus",
	"tabIndex",
	"isEditable"
], el = I("div", {
	name: "MuiDataGrid",
	slot: "FooterCell"
})({
	fontWeight: H.typography.fontWeight.medium,
	color: H.colors.foreground.accent
}), tl = (e) => {
	let { classes: t } = e;
	return Bi({ root: ["footerCell"] }, jn, t);
};
function nl(e) {
	let { formattedValue: t } = e, n = R(e, $c), r = { classes: B().classes };
	return /* @__PURE__ */ E(el, L({
		ownerState: r,
		className: tl(r).root
	}, n, { children: t }));
}
var rl = /* @__PURE__ */ O.memo(nl);
process.env.NODE_ENV !== "production" && (rl.displayName = "GridFooterCell");
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/cell/GridBooleanCell.js
var il = [
	"id",
	"value",
	"formattedValue",
	"api",
	"field",
	"row",
	"rowNode",
	"colDef",
	"cellMode",
	"isEditable",
	"hasFocus",
	"tabIndex",
	"hideDescendantCount"
], al = (e) => {
	let { classes: t } = e;
	return Bi({ root: ["booleanCell"] }, jn, t);
};
function ol(e) {
	let { value: t, rowNode: n } = e, r = R(e, il), i = V(), a = B(), o = al({ classes: a.classes }), s = W(i, $a) > 0 && n.type === "group" && a.treeData === !1, c = O.useMemo(() => t ? a.slots.booleanCellTrueIcon : a.slots.booleanCellFalseIcon, [
		a.slots.booleanCellFalseIcon,
		a.slots.booleanCellTrueIcon,
		t
	]);
	return s && t === void 0 ? null : /* @__PURE__ */ E(c, L({
		fontSize: "small",
		className: o.root,
		titleAccess: i.current.getLocaleText(t ? "booleanCellTrueLabel" : "booleanCellFalseLabel"),
		"data-value": !!t
	}, r));
}
process.env.NODE_ENV !== "production" && (ol.propTypes = {
	api: q.default.object.isRequired,
	cellMode: q.default.oneOf(["edit", "view"]).isRequired,
	colDef: q.default.object.isRequired,
	field: q.default.string.isRequired,
	formattedValue: q.default.any,
	hasFocus: q.default.bool.isRequired,
	hideDescendantCount: q.default.bool,
	id: q.default.oneOfType([q.default.number, q.default.string]).isRequired,
	isEditable: q.default.bool,
	row: q.default.any.isRequired,
	rowNode: q.default.object.isRequired,
	tabIndex: q.default.oneOf([-1, 0]).isRequired,
	value: q.default.any
});
var sl = /* @__PURE__ */ O.memo(ol);
process.env.NODE_ENV !== "production" && (sl.displayName = "GridBooleanCell");
var cl = (e) => {
	if (e.field !== "__row_group_by_columns_group__" && ho(e.rowNode)) {
		let t = e.aggregation;
		return t ? t.position === "footer" ? /* @__PURE__ */ E(rl, L({}, e)) : e.formattedValue : "";
	}
	return /* @__PURE__ */ E(sl, L({}, e));
};
process.env.NODE_ENV !== "production" && (cl.displayName = "renderBooleanCell");
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/cell/GridEditBooleanCell.js
var ll = [
	"id",
	"value",
	"formattedValue",
	"api",
	"field",
	"row",
	"rowNode",
	"colDef",
	"cellMode",
	"isEditable",
	"tabIndex",
	"className",
	"hasFocus",
	"isValidating",
	"isProcessingProps",
	"error",
	"onValueChange"
], ul = (e) => {
	let { classes: t } = e;
	return Bi({ root: ["editBooleanCell"] }, jn, t);
};
function dl(e) {
	let { id: t, value: n, field: r, className: i, hasFocus: a, onValueChange: o } = e, s = R(e, ll), c = V(), l = O.useRef(null), u = kt(), [d, f] = O.useState(n), p = B(), m = ul({ classes: p.classes }), h = O.useCallback(async (e) => {
		let n = e.target.checked;
		o && await o(e, n), f(n), await c.current.setEditCellValue({
			id: t,
			field: r,
			value: n
		}, e);
	}, [
		c,
		r,
		t,
		o
	]);
	return O.useEffect(() => {
		f(n);
	}, [n]), Ct(() => {
		a && l.current.focus();
	}, [a]), /* @__PURE__ */ E("label", L({
		htmlFor: u,
		className: xt(m.root, i)
	}, s, { children: /* @__PURE__ */ E(p.slots.baseCheckbox, L({
		id: u,
		inputRef: l,
		checked: !!d,
		onChange: h,
		size: "small"
	}, p.slotProps?.baseCheckbox)) }));
}
process.env.NODE_ENV !== "production" && (dl.propTypes = {
	api: q.default.object.isRequired,
	cellMode: q.default.oneOf(["edit", "view"]).isRequired,
	changeReason: q.default.oneOf(["debouncedSetEditCellValue", "setEditCellValue"]),
	colDef: q.default.object.isRequired,
	field: q.default.string.isRequired,
	formattedValue: q.default.any,
	hasFocus: q.default.bool.isRequired,
	id: q.default.oneOfType([q.default.number, q.default.string]).isRequired,
	isEditable: q.default.bool,
	isProcessingProps: q.default.bool,
	isValidating: q.default.bool,
	onValueChange: q.default.func,
	row: q.default.any.isRequired,
	rowNode: q.default.object.isRequired,
	tabIndex: q.default.oneOf([-1, 0]).isRequired,
	value: q.default.any
});
var fl = (e) => /* @__PURE__ */ E(dl, L({}, e));
process.env.NODE_ENV !== "production" && (fl.displayName = "renderEditBooleanCell");
//#endregion
//#region node_modules/@mui/utils/esm/refType/refType.js
var pl = q.default.oneOfType([q.default.func, q.default.object]), ml = [
	"item",
	"applyValue",
	"apiRef",
	"focusElementRef",
	"isFilterActive",
	"headerFilterMenu",
	"clearButton",
	"tabIndex",
	"slotProps"
];
function hl(e) {
	let { item: t, applyValue: n, apiRef: r, focusElementRef: i, headerFilterMenu: a, clearButton: o, tabIndex: s, slotProps: c } = e, l = R(e, ml), [u, d] = O.useState(gl(t.value)), f = B(), p = kt(), m = kt(), h = f.slotProps?.baseSelect || {}, g = h.native ?? !1, _ = f.slotProps?.baseSelectOption || {}, v = O.useCallback((e) => {
		let r = gl(e.target.value);
		d(r), n(L({}, t, { value: r }));
	}, [n, t]);
	O.useEffect(() => {
		d(gl(t.value));
	}, [t.value]);
	let y = c?.root.label ?? r.current.getLocaleText("filterPanelInputLabel"), b = c?.root.slotProps;
	return /* @__PURE__ */ D(O.Fragment, { children: [
		/* @__PURE__ */ D(f.slots.baseSelect, L({
			fullWidth: !0,
			labelId: p,
			id: m,
			label: y,
			value: u === void 0 ? "" : String(u),
			onChange: v,
			native: g,
			slotProps: { htmlInput: L({
				ref: i,
				tabIndex: s
			}, b?.htmlInput) }
		}, h, l, c?.root, { children: [
			/* @__PURE__ */ E(f.slots.baseSelectOption, L({}, _, {
				native: g,
				value: "",
				children: r.current.getLocaleText("filterValueAny")
			})),
			/* @__PURE__ */ E(f.slots.baseSelectOption, L({}, _, {
				native: g,
				value: "true",
				children: r.current.getLocaleText("filterValueTrue")
			})),
			/* @__PURE__ */ E(f.slots.baseSelectOption, L({}, _, {
				native: g,
				value: "false",
				children: r.current.getLocaleText("filterValueFalse")
			}))
		] })),
		a,
		o
	] });
}
function gl(e) {
	if (String(e).toLowerCase() === "true") return !0;
	if (String(e).toLowerCase() === "false") return !1;
}
process.env.NODE_ENV !== "production" && (hl.propTypes = {
	apiRef: q.default.shape({ current: q.default.object.isRequired }).isRequired,
	applyValue: q.default.func.isRequired,
	className: q.default.string,
	clearButton: q.default.node,
	disabled: q.default.bool,
	focusElementRef: pl,
	headerFilterMenu: q.default.node,
	inputRef: q.default.oneOfType([q.default.func, q.default.shape({ current: (e, t) => e[t] == null ? null : typeof e[t] != "object" || e[t].nodeType !== 1 ? /* @__PURE__ */ Error(`Expected prop '${t}' to be of type Element`) : null })]),
	isFilterActive: q.default.bool,
	item: q.default.shape({
		field: q.default.string.isRequired,
		id: q.default.oneOfType([q.default.number, q.default.string]),
		operator: q.default.string.isRequired,
		value: q.default.any
	}).isRequired,
	onBlur: q.default.func,
	onFocus: q.default.func,
	slotProps: q.default.object,
	tabIndex: q.default.number
});
//#endregion
//#region node_modules/@mui/x-data-grid/esm/colDef/gridBooleanOperators.js
var _l = () => [{
	value: "is",
	getApplyFilterFn: (e) => {
		let t = gl(e.value);
		return t === void 0 ? null : (e) => !!e === t;
	},
	InputComponent: hl
}], vl = (e, t, n, r) => e ? r.current.getLocaleText("booleanCellTrueLabel") : r.current.getLocaleText("booleanCellFalseLabel"), yl = (e) => {
	switch (e.toLowerCase().trim()) {
		case "true":
		case "yes":
		case "1": return !0;
		case "false":
		case "no":
		case "0":
		case "null":
		case "undefined": return !1;
		default: return;
	}
}, bl = L({}, yc, {
	type: "boolean",
	display: "flex",
	align: "center",
	headerAlign: "center",
	renderCell: cl,
	renderEditCell: fl,
	sortComparator: rs,
	valueFormatter: vl,
	filterOperators: _l(),
	getApplyQuickFilterFn: () => null,
	chartable: !1,
	pastedValueParser: (e) => yl(e)
});
//#endregion
//#region node_modules/@mui/x-internals/esm/isObjectEmpty/isObjectEmpty.js
function xl(e) {
	for (let t in e) return !1;
	return !0;
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/hooks/features/sorting/gridSortingSelector.js
var Sl = ka((e) => e.sorting), Cl = G(Sl, (e) => e.sortedRows), wl = Oa(Cl, qa, Ja, (e, t, n) => e.reduce((e, r) => {
	let i = t[r];
	if (i) e.push({
		id: r,
		model: i
	});
	else {
		let t = n[r];
		t && ho(t) && e.push({
			id: r,
			model: { [ao]: r }
		});
	}
	return e;
}, [])), Tl = G(Sl, (e) => e.sortModel), El = Oa(Tl, (e) => e.reduce((t, n, r) => (t[n.field] = {
	sortDirection: n.sort,
	sortIndex: e.length > 1 ? r + 1 : void 0
}, t), {}));
Oa(Cl, (e) => e.reduce((e, t, n) => (e[t] = n, e), Object.create(null)));
//#endregion
//#region node_modules/@mui/x-data-grid/esm/hooks/features/filter/gridFilterSelector.js
var Dl = ka((e) => e.filter), Ol = G(Dl, (e) => e.filterModel), kl = G(Ol, (e) => e.quickFilterValues), Al = ka((e) => e.visibleRowsLookup), jl = G(Dl, (e) => e.filteredRowsLookup);
G(Dl, (e) => e.filteredChildrenCountLookup), G(Dl, (e) => e.filteredDescendantCountLookup);
var Ml = Oa(Al, wl, (e, t) => xl(e) ? t : t.filter((t) => e[t.id] !== !1)), Nl = Oa(Ml, (e) => e.map((e) => e.id)), Pl = Oa(jl, wl, (e, t) => xl(e) ? t : t.filter((t) => e[t.id] !== !1)), Fl = Oa(Pl, (e) => e.map((e) => e.id));
Oa(Nl, Ja, (e, t) => {
	let n = {}, r = 0;
	return e.reduce((e, i) => {
		let a = t[i];
		return n[a.depth] || (n[a.depth] = 0), a.depth > r && (n[a.depth] = 0), r = a.depth, n[a.depth] += 1, e[i] = n[a.depth], e;
	}, {});
});
var Il = G(Oa(Pl, Ja, $a, (e, t, n) => n < 2 ? [e] : e.reduce((e, n) => {
	let r = t[n.id]?.depth;
	return r === void 0 ? e : (e[r] || (e[r] = []), e[r].push(n), e);
}, [[]])), (e) => e[0] ?? []), Ll = G(Ml, (e) => e.length), Rl = G(Il, (e) => e.length), zl = G(Pl, (e) => e.length);
G(zl, Rl, (e, t) => e - t);
var Bl = Oa(Ol, Vs, (e, t) => e.items?.filter((e) => {
	if (!e.field) return !1;
	let n = t[e.field];
	if (!n?.filterOperators || n?.filterOperators?.length === 0) return !1;
	let r = n.filterOperators.find((t) => t.value === e.operator);
	return r ? !r.InputComponent || e.value != null && e.value?.toString() !== "" : !1;
})), Vl = Oa(Bl, (e) => e.reduce((e, t) => (e[t.field] ? e[t.field].push(t) : e[t.field] = [t], e), {})), Hl = Oa(Nl, (e) => e.reduce((e, t, n) => (e[t] = n, e), Object.create(null))), Ul = ka((e) => e.rowSelection), Wl = Oa(Ul, Es), Gl = G(Ul, zl, (e, t) => e.type === "include" ? e.ids.size : t - e.ids.size), Kl = Oa(Ul, qa, eo, (e, t, n) => {
	let r = /* @__PURE__ */ new Map();
	if (e.type === "include") for (let n of e.ids) r.set(n, t[n]);
	else for (let i = 0; i < n.length; i += 1) {
		let a = n[i];
		e.ids.has(a) || r.set(a, t[a]);
	}
	return r;
}), ql = ka((e, t) => ao in t ? t[ao] : e.props.getRowId ? e.props.getRowId(t) : t.id), Jl = ka((e) => e.props.isRowSelectable);
//#endregion
//#region node_modules/@mui/x-data-grid/esm/hooks/features/rowSelection/utils.js
function Yl(e, t) {
	let n = Ja(e), r = Cl(e), i = jl(e), a = n[t];
	if (!a || a.type !== "group") return [];
	let o = [], s = r.findIndex((e) => e === t) + 1;
	for (let t = s; t < r.length && n[r[t]]?.depth > a.depth; t += 1) {
		let n = r[t];
		i[n] !== !1 && e.current.isRowSelectable(n) && o.push(n);
	}
	return o;
}
var Xl = G(Hs, Ja, jl, Wl, qa, Jl, (e, t, n, r, i, a, { groupId: o, autoSelectParents: s }) => {
	let c = t[o], l = {
		id: o,
		row: i[o],
		columns: e
	}, u = !0;
	if (typeof a == "function" && i[o] && (u = a(l)), !c || c.type !== "group" || r.has(o)) return {
		isIndeterminate: !1,
		isChecked: r.has(o),
		isSelectable: u
	};
	let d = !1, f = !1, p = (o) => {
		if (n[o] === !1 || d && f) return;
		let s = t[o];
		s?.type === "group" && s.children.forEach(p);
		let c = {
			id: o,
			row: i[o],
			columns: e
		};
		(!(typeof a == "function" && i[o]) || a(c)) && (r.has(o) ? d = !0 : f = !0);
	};
	return p(o), {
		isIndeterminate: d && f,
		isChecked: s ? d && !f : !1,
		isSelectable: u
	};
});
function Zl(e) {
	return e.signature === To.DataGrid ? e.checkboxSelection && e.disableMultipleRowSelection !== !0 : !e.disableMultipleRowSelection;
}
var Ql = (e, t) => {
	let n = [], r = t;
	for (; r != null && r !== io;) {
		let t = e[r];
		if (!t) return n;
		n.push(r), r = t.parent;
	}
	return n;
}, $l = (e, t, n) => {
	let r = e[n];
	if (!r) return [];
	let i = r.parent;
	return i == null ? [] : e[i].children.filter((e) => e !== n && t[e] !== !1);
}, eu = (e, t, n, r, i, a, o = Wl(e)) => {
	let s = jl(e), c = /* @__PURE__ */ new Set([]);
	if (!(!r && !i || s[n] === !1) && (r && t[n]?.type === "group" && Yl(e, n).forEach((e) => {
		a(e), c.add(e);
	}), i)) {
		let r = (n) => {
			let i = t[n];
			return i ? i.type === "group" ? o.has(n) || c.has(n) ? !0 : i.children.every(r) : e.current.isRowSelectable(n) ? o.has(n) || c.has(n) : !0 : !1;
		}, i = (n) => {
			let o = $l(t, s, n), l = o.every((t) => e.current.isRowSelectable(t) ? r(t) : !0);
			if (o.length === 0 || l) {
				let r = t[n]?.parent;
				r != null && r !== io && e.current.isRowSelectable(r) && (a(r), c.add(r), i(r));
			}
		}, l = t[n];
		if (!l || l.parent === io) return;
		i(n);
	}
}, tu = (e, t, n, r, i, a) => {
	let o = Wl(e);
	!i && !r || (i && Ql(t, n).forEach((e) => {
		o.has(e) && a(e);
	}), r && t[n]?.type === "group" && Yl(e, n).forEach((e) => {
		a(e);
	}));
}, nu = [
	"field",
	"id",
	"formattedValue",
	"row",
	"rowNode",
	"colDef",
	"isEditable",
	"cellMode",
	"hasFocus",
	"tabIndex",
	"api"
], ru = (e) => {
	let { classes: t } = e;
	return Bi({ root: ["checkboxInput"] }, jn, t);
}, iu = z(function(e, t) {
	let { field: n, id: r, rowNode: i, tabIndex: a } = e, o = R(e, nu), s = V(), c = B(), l = ru({ classes: c.classes }), { isIndeterminate: u, isChecked: d, isSelectable: f } = W(s, Xl, {
		groupId: r,
		autoSelectParents: c.rowSelectionPropagation?.parents ?? !1
	}, Wn), p = !f, m = (e) => {
		if (p) return;
		let t = {
			value: e.target.checked,
			id: r
		};
		s.current.publishEvent("rowSelectionCheckboxChange", t, e);
	};
	O.useLayoutEffect(() => {
		if (a === 0 && !p) {
			let e = s.current.getCellElement(r, n);
			e && (e.tabIndex = -1);
		}
	}, [
		s,
		a,
		r,
		n,
		p
	]);
	let h = wt((e) => {
		e.key === " " && e.stopPropagation();
	}), g = wt((e) => {
		if (p) {
			e.preventDefault();
			return;
		}
	}), _ = wt(() => {});
	if (i.type === "footer" || i.type === "pinnedRow") return null;
	let v = s.current.getLocaleText(d && !u ? "checkboxSelectionUnselectRow" : "checkboxSelectionSelectRow");
	return /* @__PURE__ */ E(c.slots.baseCheckbox, L({
		tabIndex: p ? -1 : a,
		checked: d && !u,
		onChange: m,
		onClick: g,
		onMouseDown: _,
		className: xt(l.root, p && "Mui-disabled"),
		disabled: p,
		material: { disableRipple: p },
		slotProps: { htmlInput: {
			"aria-disabled": p || void 0,
			"aria-label": v,
			name: "select_row"
		} },
		onKeyDown: h,
		indeterminate: u
	}, c.slotProps?.baseCheckbox, o, { ref: t }));
});
process.env.NODE_ENV !== "production" && (iu.displayName = "GridCellCheckboxForwardRef"), process.env.NODE_ENV !== "production" && (iu.propTypes = {
	api: q.default.object.isRequired,
	cellMode: q.default.oneOf(["edit", "view"]).isRequired,
	colDef: q.default.object.isRequired,
	field: q.default.string.isRequired,
	formattedValue: q.default.any,
	hasFocus: q.default.bool.isRequired,
	id: q.default.oneOfType([q.default.number, q.default.string]).isRequired,
	isEditable: q.default.bool,
	row: q.default.any.isRequired,
	rowNode: q.default.object.isRequired,
	tabIndex: q.default.oneOf([-1, 0]).isRequired,
	value: q.default.any
});
var au = iu, ou = ka((e) => e.focus), su = G(ou, (e) => e.cell), cu = G(ou, (e) => e.columnHeader);
G(ou, (e) => e.columnHeaderFilter);
var lu = G(ou, (e) => e.columnGroupHeader), uu = ka((e) => e.tabIndex), du = G(uu, (e) => e.cell), fu = G(uu, (e) => e.columnHeader);
G(uu, (e) => e.columnHeaderFilter);
var pu = G(uu, (e) => e.columnGroupHeader), mu = 100, hu = (e) => e ? 0 : 100, gu = (e, t, n) => t > 0 && e > 0 ? Math.ceil(e / t) : e === -1 ? n + 2 : 0, _u = (e) => ({
	page: 0,
	pageSize: e ? 0 : 100
}), vu = (e, t = 0) => t === 0 ? e : Math.max(Math.min(e, t - 1), 0), yu = (e, t) => {
	if (t === To.DataGrid && e > mu) throw Error(["MUI X: `pageSize` cannot exceed 100 in the MIT version of the DataGrid.", "You need to upgrade to DataGridPro or DataGridPremium component to unlock this feature."].join("\n"));
}, bu = -1, xu = ka((e) => e.pagination), Su = G(xu, (e) => e.enabled && e.paginationMode === "client"), Cu = G(xu, (e) => e.paginationModel), wu = G(xu, (e) => e.rowCount), Tu = G(xu, (e) => e.meta), Eu = G(Cu, (e) => e.page), Du = G(Cu, (e) => e.pageSize), Ou = G(Cu, wu, (e, t) => gu(t, e.pageSize, e.page)), ku = Oa(Su, Cu, Ja, $a, Ml, Il, (e, t, n, r, i, a) => {
	if (!e || !i || i.length === 0) return null;
	let o = a.length, s = Math.min(t.pageSize * t.page, o - 1), c = t.pageSize === bu ? o - 1 : Math.min(s + t.pageSize - 1, o - 1);
	if (s === -1 || c === -1) return null;
	if (r < 2) return {
		firstRowIndex: s,
		lastRowIndex: c
	};
	let l = a[s], u = c - s + 1, d = i.findIndex((e) => e.id === l.id), f = d, p = 0;
	for (; f < i.length && p <= u;) {
		let e = n[i[f].id]?.depth;
		e === void 0 ? f += 1 : ((p < u || e > 0) && (f += 1), e === 0 && (p += 1));
	}
	return {
		firstRowIndex: d,
		lastRowIndex: f - 1
	};
}), Au = Oa(Ml, ku, (e, t) => t ? e.slice(t.firstRowIndex, t.lastRowIndex + 1) : []), ju = Oa(Nl, ku, (e, t) => t ? e.slice(t.firstRowIndex, t.lastRowIndex + 1) : []), Mu = Oa(Su, ku, Au, Ml, (e, t, n, r) => e ? {
	rows: n,
	range: t,
	rowIdToIndexMap: n.reduce((e, t, n) => (e.set(t.id, n), e), /* @__PURE__ */ new Map())
} : {
	rows: r,
	range: r.length === 0 ? null : {
		firstRowIndex: 0,
		lastRowIndex: r.length - 1
	},
	rowIdToIndexMap: r.reduce((e, t, n) => (e.set(t.id, n), e), /* @__PURE__ */ new Map())
}), Nu = ["field", "colDef"], Pu = (e) => {
	let { classes: t } = e;
	return Bi({ root: ["checkboxInput"] }, jn, t);
}, Fu = z(function(e, t) {
	let n = R(e, Nu), [, r] = O.useState(!1), i = V(), a = B(), o = Pu({ classes: a.classes }), s = W(i, fu), c = W(i, Ul), l = W(i, Nl), u = W(i, ju), d = O.useMemo(() => {
		let e = a.isRowSelectable;
		if (typeof e != "function" || c.type === "exclude") return c;
		let t = {
			type: "include",
			ids: /* @__PURE__ */ new Set()
		};
		for (let n of c.ids) a.keepNonExistentRowsSelected && t.ids.add(n), i.current.getRow(n) && e(i.current.getRowParams(n)) && t.ids.add(n);
		return t;
	}, [
		i,
		a.isRowSelectable,
		a.keepNonExistentRowsSelected,
		c
	]), f = O.useMemo(() => {
		let e = !a.pagination || !a.checkboxSelectionVisibleOnly || a.paginationMode === "server" ? l : u, t = /* @__PURE__ */ new Set();
		for (let n = 0; n < e.length; n += 1) {
			let r = e[n];
			i.current.getRow(r) && i.current.isRowSelectable(r) && t.add(r);
		}
		return t;
	}, [
		i,
		a.pagination,
		a.paginationMode,
		a.checkboxSelectionVisibleOnly,
		u,
		l
	]), p = O.useMemo(() => {
		let e = Es(d), t = 0;
		for (let n of f) e.has(n) && (t += 1);
		return t;
	}, [d, f]), m = O.useMemo(() => {
		if (p === 0) return !1;
		let e = Es(d);
		for (let t of f) if (!e.has(t)) return !0;
		return !1;
	}, [
		p,
		d,
		f
	]), h = p > 0, g = (e) => {
		let t = { value: e.target.checked };
		i.current.publishEvent("headerSelectionCheckboxChange", t);
	}, _ = Zl(a), v = s !== null && s.field === e.field && _ ? 0 : -1;
	Ct(() => {
		let t = i.current.getColumnHeaderElement(e.field);
		v === 0 && t && _ && (t.tabIndex = -1);
	}, [
		v,
		i,
		e.field,
		_
	]);
	let y = O.useCallback((e) => {
		e.key === " " && i.current.publishEvent("headerSelectionCheckboxChange", { value: !h });
	}, [i, h]), b = O.useCallback(() => {
		r((e) => !e);
	}, []);
	O.useEffect(() => i.current.subscribeEvent("rowSelectionChange", b), [i, b]);
	let x = i.current.getLocaleText(h && !m ? "checkboxSelectionUnselectAllRows" : "checkboxSelectionSelectAllRows");
	return /* @__PURE__ */ E(a.slots.baseCheckbox, L({
		indeterminate: m,
		checked: h && !m,
		onChange: g,
		className: o.root,
		slotProps: { htmlInput: {
			"aria-label": x,
			name: "select_all_rows"
		} },
		tabIndex: v,
		onKeyDown: y,
		disabled: !_
	}, a.slotProps?.baseCheckbox, n, { ref: t }));
});
process.env.NODE_ENV !== "production" && (Fu.displayName = "GridHeaderCheckbox"), process.env.NODE_ENV !== "production" && (Fu.propTypes = {
	colDef: q.default.object.isRequired,
	field: q.default.string.isRequired
});
//#endregion
//#region node_modules/@mui/x-data-grid/esm/colDef/gridCheckboxSelectionColDef.js
var Iu = "__check__", Lu = L({}, bl, {
	type: "custom",
	field: Iu,
	width: 50,
	resizable: !1,
	sortable: !1,
	filterable: !1,
	aggregable: !1,
	chartable: !1,
	disableColumnMenu: !0,
	disableReorder: !0,
	disableExport: !0,
	getApplyQuickFilterFn: () => null,
	display: "flex",
	valueGetter: (e, t, n, r) => {
		let i = ql(r, t);
		return r.current.isRowSelected(i);
	},
	rowSpanValueGetter: (e, t, n, r) => ql(r, t),
	renderHeader: (e) => /* @__PURE__ */ E(Fu, L({}, e)),
	renderCell: (e) => /* @__PURE__ */ E(au, L({}, e))
}), Ru = [
	"item",
	"applyValue",
	"type",
	"apiRef",
	"focusElementRef",
	"slotProps",
	"isFilterActive",
	"headerFilterMenu",
	"clearButton",
	"tabIndex",
	"disabled"
];
function zu(e, t) {
	if (e == null) return "";
	let n = new Date(e);
	return Number.isNaN(n.getTime()) ? "" : t === "date" ? n.toISOString().substring(0, 10) : t === "datetime-local" ? (n.setMinutes(n.getMinutes() - n.getTimezoneOffset()), n.toISOString().substring(0, 19)) : n.toISOString().substring(0, 10);
}
function Bu(e) {
	let { item: t, applyValue: n, type: r, apiRef: i, focusElementRef: a, slotProps: o, headerFilterMenu: s, clearButton: c, tabIndex: l, disabled: u } = e, d = R(e, Ru), f = o?.root.slotProps, p = zo(), [m, h] = O.useState(() => zu(t.value, r)), [g, _] = O.useState(!1), v = kt(), y = B(), b = O.useCallback((e) => {
		p.clear();
		let r = e.target.value;
		h(r), _(!0), p.start(y.filterDebounceMs, () => {
			let e = new Date(r);
			n(L({}, t, { value: Number.isNaN(e.getTime()) ? void 0 : e })), _(!1);
		});
	}, [
		n,
		t,
		y.filterDebounceMs,
		p
	]);
	return O.useEffect(() => {
		h(zu(t.value, r));
	}, [t.value, r]), /* @__PURE__ */ D(O.Fragment, { children: [
		/* @__PURE__ */ E(y.slots.baseTextField, L({
			fullWidth: !0,
			id: v,
			label: i.current.getLocaleText("filterPanelInputLabel"),
			placeholder: i.current.getLocaleText("filterPanelInputPlaceholder"),
			value: m,
			onChange: b,
			type: r || "text",
			disabled: u,
			inputRef: a,
			slotProps: L({}, f, {
				input: L({ endAdornment: g ? /* @__PURE__ */ E(y.slots.loadIcon, {
					fontSize: "small",
					color: "action"
				}) : null }, f?.input),
				htmlInput: L({
					max: r === "datetime-local" ? "9999-12-31T23:59" : "9999-12-31",
					tabIndex: l
				}, f?.htmlInput)
			})
		}, y.slotProps?.baseTextField, d, o?.root)),
		s,
		c
	] });
}
process.env.NODE_ENV !== "production" && (Bu.propTypes = {
	apiRef: q.default.shape({ current: q.default.object.isRequired }).isRequired,
	applyValue: q.default.func.isRequired,
	className: q.default.string,
	clearButton: q.default.node,
	disabled: q.default.bool,
	focusElementRef: q.default.oneOfType([q.default.func, q.default.object]),
	headerFilterMenu: q.default.node,
	inputRef: q.default.oneOfType([q.default.func, q.default.shape({ current: (e, t) => e[t] == null ? null : typeof e[t] != "object" || e[t].nodeType !== 1 ? /* @__PURE__ */ Error(`Expected prop '${t}' to be of type Element`) : null })]),
	isFilterActive: q.default.bool,
	item: q.default.shape({
		field: q.default.string.isRequired,
		id: q.default.oneOfType([q.default.number, q.default.string]),
		operator: q.default.string.isRequired,
		value: q.default.any
	}).isRequired,
	onBlur: q.default.func,
	onFocus: q.default.func,
	slotProps: q.default.object,
	tabIndex: q.default.number,
	type: q.default.oneOf(["date", "datetime-local"])
});
//#endregion
//#region node_modules/@mui/x-data-grid/esm/colDef/gridDateOperators.js
function Vu(e, t, n, r) {
	if (!e.value) return null;
	let i = new Date(e.value);
	n ? i.setSeconds(0, 0) : (i.setMinutes(i.getMinutes() + i.getTimezoneOffset()), i.setHours(0, 0, 0, 0));
	let a = i.getTime();
	return (e) => {
		if (!e) return !1;
		if (r) return t(e.getTime(), a);
		let i = new Date(e);
		return n ? i.setSeconds(0, 0) : i.setHours(0, 0, 0, 0), t(i.getTime(), a);
	};
}
var Hu = (e) => [
	{
		value: "is",
		getApplyFilterFn: (t) => Vu(t, (e, t) => e === t, e),
		InputComponent: Bu,
		InputComponentProps: { type: e ? "datetime-local" : "date" }
	},
	{
		value: "not",
		getApplyFilterFn: (t) => Vu(t, (e, t) => e !== t, e),
		InputComponent: Bu,
		InputComponentProps: { type: e ? "datetime-local" : "date" }
	},
	{
		value: "after",
		getApplyFilterFn: (t) => Vu(t, (e, t) => e > t, e, e),
		InputComponent: Bu,
		InputComponentProps: { type: e ? "datetime-local" : "date" }
	},
	{
		value: "onOrAfter",
		getApplyFilterFn: (t) => Vu(t, (e, t) => e >= t, e, e),
		InputComponent: Bu,
		InputComponentProps: { type: e ? "datetime-local" : "date" }
	},
	{
		value: "before",
		getApplyFilterFn: (t) => Vu(t, (e, t) => e < t, e, !0),
		InputComponent: Bu,
		InputComponentProps: { type: e ? "datetime-local" : "date" }
	},
	{
		value: "onOrBefore",
		getApplyFilterFn: (t) => Vu(t, (e, t) => e <= t, e, e),
		InputComponent: Bu,
		InputComponentProps: { type: e ? "datetime-local" : "date" }
	},
	{
		value: "isEmpty",
		getApplyFilterFn: () => (e) => e == null,
		requiresFilterValue: !1
	},
	{
		value: "isNotEmpty",
		getApplyFilterFn: () => (e) => e != null,
		requiresFilterValue: !1
	}
], Uu = [
	"id",
	"value",
	"formattedValue",
	"api",
	"field",
	"row",
	"rowNode",
	"colDef",
	"cellMode",
	"isEditable",
	"tabIndex",
	"hasFocus",
	"inputProps",
	"isValidating",
	"isProcessingProps",
	"onValueChange",
	"slotProps"
], Wu = I(Vo, { slot: "internal" })({ fontSize: "inherit" }), Gu = (e) => {
	let { classes: t } = e;
	return Bi({ root: ["editInputCell"] }, jn, t);
};
function Ku(e) {
	let { id: t, value: n, field: r, colDef: i, hasFocus: a, onValueChange: o, slotProps: s } = e, c = R(e, Uu), l = i.type === "dateTime", u = V(), d = O.useRef(null), f = O.useMemo(() => {
		let e;
		e = n == null ? null : n instanceof Date ? n : new Date((n ?? "").toString());
		let t;
		return t = e == null || Number.isNaN(e.getTime()) ? "" : (/* @__PURE__ */ new Date(e.getTime() - e.getTimezoneOffset() * 60 * 1e3)).toISOString().substr(0, l ? 16 : 10), {
			parsed: e,
			formatted: t
		};
	}, [n, l]), [p, m] = O.useState(f), h = B(), g = Gu({ classes: h.classes }), _ = O.useCallback((e) => {
		if (e === "") return null;
		let [t, n] = e.split("T"), [r, i, a] = t.split("-"), o = /* @__PURE__ */ new Date();
		if (o.setFullYear(Number(r), Number(i) - 1, Number(a)), o.setHours(0, 0, 0, 0), n) {
			let [e, t] = n.split(":");
			o.setHours(Number(e), Number(t), 0, 0);
		}
		return o;
	}, []), v = O.useCallback(async (e) => {
		let n = e.target.value, i = _(n);
		o && await o(e, i), m({
			parsed: i,
			formatted: n
		}), u.current.setEditCellValue({
			id: t,
			field: r,
			value: i
		}, e);
	}, [
		u,
		r,
		t,
		o,
		_
	]);
	return O.useEffect(() => {
		m((e) => f.parsed !== e.parsed && f.parsed?.getTime() !== e.parsed?.getTime() ? f : e);
	}, [f]), Ct(() => {
		a && d.current.focus();
	}, [a]), /* @__PURE__ */ E(Wu, L({
		as: h.slots.baseInput,
		inputRef: d,
		fullWidth: !0,
		className: g.root,
		type: l ? "datetime-local" : "date",
		value: p.formatted,
		onChange: v
	}, c, s?.root, { slotProps: { htmlInput: L({ max: l ? "9999-12-31T23:59" : "9999-12-31" }, s?.root?.slotProps?.htmlInput) } }));
}
process.env.NODE_ENV !== "production" && (Ku.propTypes = {
	api: q.default.object.isRequired,
	cellMode: q.default.oneOf(["edit", "view"]).isRequired,
	changeReason: q.default.oneOf(["debouncedSetEditCellValue", "setEditCellValue"]),
	colDef: q.default.object.isRequired,
	field: q.default.string.isRequired,
	formattedValue: q.default.any,
	hasFocus: q.default.bool.isRequired,
	id: q.default.oneOfType([q.default.number, q.default.string]).isRequired,
	isEditable: q.default.bool,
	isProcessingProps: q.default.bool,
	isValidating: q.default.bool,
	onValueChange: q.default.func,
	row: q.default.any.isRequired,
	rowNode: q.default.object.isRequired,
	slotProps: q.default.object,
	tabIndex: q.default.oneOf([-1, 0]).isRequired,
	value: q.default.any
});
var qu = (e) => /* @__PURE__ */ E(Ku, L({}, e));
process.env.NODE_ENV !== "production" && (qu.displayName = "renderEditDateCell");
//#endregion
//#region node_modules/@mui/x-data-grid/esm/colDef/gridDateColDef.js
function Ju({ value: e, columnType: t, rowId: n, field: r }) {
	if (!(e instanceof Date)) throw Error([
		`MUI X: \`${t}\` column type only accepts \`Date\` objects as values.`,
		"Use `valueGetter` to transform the value into a `Date` object.",
		`Row ID: ${n}, field: "${r}".`
	].join("\n"));
}
var Yu = (e, t, n, r) => {
	if (!e) return "";
	let i = ql(r, t);
	return mo(t) && !(e instanceof Date) ? e : (Ju({
		value: e,
		columnType: "date",
		rowId: i,
		field: n.field
	}), e.toLocaleDateString());
}, Xu = (e, t, n, r) => {
	if (!e) return "";
	let i = ql(r, t);
	return mo(t) && !(e instanceof Date) ? e : (Ju({
		value: e,
		columnType: "dateTime",
		rowId: i,
		field: n.field
	}), e.toLocaleString());
}, Zu = L({}, yc, {
	type: "date",
	sortComparator: is,
	valueFormatter: Yu,
	filterOperators: Hu(),
	renderEditCell: qu,
	pastedValueParser: (e) => new Date(e)
}), Qu = L({}, yc, {
	type: "dateTime",
	sortComparator: is,
	valueFormatter: Xu,
	filterOperators: Hu(!0),
	renderEditCell: qu,
	pastedValueParser: (e) => new Date(e)
}), $u = (e) => e == null ? null : Number(e), ed = L({}, yc, {
	type: "number",
	align: "right",
	headerAlign: "right",
	sortComparator: rs,
	valueParser: (e) => e === "" ? null : Number(e),
	valueFormatter: (e) => cs(e) ? e.toLocaleString() : e || "",
	filterOperators: [
		{
			value: "=",
			getApplyFilterFn: (e) => e.value == null || Number.isNaN(e.value) ? null : (t) => $u(t) === e.value,
			InputComponent: os,
			InputComponentProps: { type: "number" }
		},
		{
			value: "!=",
			getApplyFilterFn: (e) => e.value == null || Number.isNaN(e.value) ? null : (t) => $u(t) !== e.value,
			InputComponent: os,
			InputComponentProps: { type: "number" }
		},
		{
			value: ">",
			getApplyFilterFn: (e) => e.value == null || Number.isNaN(e.value) ? null : (t) => t == null ? !1 : $u(t) > e.value,
			InputComponent: os,
			InputComponentProps: { type: "number" }
		},
		{
			value: ">=",
			getApplyFilterFn: (e) => e.value == null || Number.isNaN(e.value) ? null : (t) => t == null ? !1 : $u(t) >= e.value,
			InputComponent: os,
			InputComponentProps: { type: "number" }
		},
		{
			value: "<",
			getApplyFilterFn: (e) => e.value == null || Number.isNaN(e.value) ? null : (t) => t == null ? !1 : $u(t) < e.value,
			InputComponent: os,
			InputComponentProps: { type: "number" }
		},
		{
			value: "<=",
			getApplyFilterFn: (e) => e.value == null || Number.isNaN(e.value) ? null : (t) => t == null ? !1 : $u(t) <= e.value,
			InputComponent: os,
			InputComponentProps: { type: "number" }
		},
		{
			value: "isEmpty",
			getApplyFilterFn: () => (e) => e == null,
			requiresFilterValue: !1
		},
		{
			value: "isNotEmpty",
			getApplyFilterFn: () => (e) => e != null,
			requiresFilterValue: !1
		},
		{
			value: "isAnyOf",
			getApplyFilterFn: (e) => !Array.isArray(e.value) || e.value.length === 0 ? null : (t) => t != null && e.value.includes(Number(t)),
			InputComponent: ys,
			InputComponentProps: { type: "number" }
		}
	],
	getApplyQuickFilterFn: (e) => e == null || Number.isNaN(e) || e === "" ? null : (t) => $u(t) === $u(e)
});
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/panel/filterPanel/filterPanelUtils.js
function td(e) {
	return e?.type === "singleSelect";
}
function nd(e, t) {
	if (e) return typeof e.valueOptions == "function" ? e.valueOptions(L({ field: e.field }, t)) : e.valueOptions;
}
function rd(e, t, n) {
	if (t !== void 0) return n(t.find((t) => {
		let r = n(t);
		return String(r) === String(e);
	}));
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/cell/GridEditSingleSelectCell.js
var id = [
	"id",
	"value",
	"formattedValue",
	"api",
	"field",
	"row",
	"rowNode",
	"colDef",
	"cellMode",
	"isEditable",
	"tabIndex",
	"className",
	"hasFocus",
	"isValidating",
	"isProcessingProps",
	"error",
	"onValueChange",
	"initialOpen",
	"slotProps"
];
function ad(e) {
	return "key" in e && !!e.key;
}
function od(e) {
	let t = B(), { id: n, value: r, field: i, row: a, colDef: o, hasFocus: s, error: c, onValueChange: l, initialOpen: u = t.editMode === bs.Cell, slotProps: d } = e, f = R(e, id), p = V(), m = O.useRef(null), h = O.useRef(null), [g, _] = O.useState(u), v = (t.slotProps?.baseSelect || {}).native ?? !1;
	if (Ct(() => {
		s && h.current?.focus();
	}, [s]), !td(o)) return null;
	let y = nd(o, {
		id: n,
		row: a
	});
	if (!y) return null;
	let b = o.getOptionValue, x = o.getOptionLabel;
	return !y || !o ? null : /* @__PURE__ */ E(t.slots.baseSelect, L({
		ref: m,
		value: r,
		onChange: async (e) => {
			if (!td(o) || !y) return;
			_(!1);
			let t = e.target, r = rd(t.value, y, b);
			l && await l(e, r), await p.current.setEditCellValue({
				id: n,
				field: i,
				value: r
			}, e);
		},
		open: g,
		onOpen: (e) => {
			ad(e) && e.key === "Enter" || _(!0);
		},
		onClose: (e, r) => {
			if (t.editMode === bs.Row) {
				_(!1);
				return;
			}
			if (r === "backdropClick" || e.key === "Escape") {
				let t = p.current.getCellParams(n, i);
				p.current.publishEvent("cellEditStop", L({}, t, { reason: e.key === "Escape" ? Os.escapeKeyDown : Os.cellFocusOut }));
			}
		},
		error: c,
		native: v,
		fullWidth: !0,
		slotProps: { htmlInput: { ref: h } }
	}, f, d?.root, t.slotProps?.baseSelect, { children: y.map((e) => {
		let n = b(e);
		return /* @__PURE__ */ P(t.slots.baseSelectOption, L({}, t.slotProps?.baseSelectOption || {}, {
			native: v,
			key: n,
			value: n
		}), x(e));
	}) }));
}
process.env.NODE_ENV !== "production" && (od.propTypes = {
	api: q.default.object.isRequired,
	cellMode: q.default.oneOf(["edit", "view"]).isRequired,
	changeReason: q.default.oneOf(["debouncedSetEditCellValue", "setEditCellValue"]),
	colDef: q.default.object.isRequired,
	field: q.default.string.isRequired,
	formattedValue: q.default.any,
	hasFocus: q.default.bool.isRequired,
	id: q.default.oneOfType([q.default.number, q.default.string]).isRequired,
	initialOpen: q.default.bool,
	isEditable: q.default.bool,
	isProcessingProps: q.default.bool,
	isValidating: q.default.bool,
	onValueChange: q.default.func,
	row: q.default.any.isRequired,
	rowNode: q.default.object.isRequired,
	tabIndex: q.default.oneOf([-1, 0]).isRequired,
	value: q.default.any
});
var sd = (e) => /* @__PURE__ */ E(od, L({}, e));
process.env.NODE_ENV !== "production" && (sd.displayName = "renderEditSingleSelectCell");
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/panel/filterPanel/GridFilterInputSingleSelect.js
var cd = [
	"item",
	"applyValue",
	"type",
	"apiRef",
	"focusElementRef",
	"tabIndex",
	"isFilterActive",
	"clearButton",
	"headerFilterMenu",
	"slotProps"
], ld = ({ column: e, OptionComponent: t, getOptionLabel: n, getOptionValue: r, isSelectNative: i, baseSelectOptionProps: a }) => ["", ...nd(e) || []].map((e) => {
	let o = r(e), s = n(e);
	return s === "" && (s = " "), /* @__PURE__ */ P(t, L({}, a, {
		native: i,
		key: o,
		value: o
	}), s);
});
function ud(e) {
	let { item: t, applyValue: n, type: r, apiRef: i, focusElementRef: a, tabIndex: o, clearButton: s, headerFilterMenu: c, slotProps: l } = e, u = R(e, cd), d = t.value ?? "", f = kt(), p = kt(), m = B(), h = m.slotProps?.baseSelect?.native ?? !1, g = i.current.getColumn(t.field), _ = g.getOptionValue, v = g.getOptionLabel, y = O.useMemo(() => nd(g), [g]), b = O.useCallback((e) => {
		let r = e.target.value;
		r = rd(r, y, _), n(L({}, t, { value: r }));
	}, [
		y,
		_,
		n,
		t
	]);
	if (!g || !td(g)) return null;
	let x = l?.root.label ?? i.current.getLocaleText("filterPanelInputLabel");
	return /* @__PURE__ */ D(O.Fragment, { children: [
		/* @__PURE__ */ E(m.slots.baseSelect, L({
			fullWidth: !0,
			id: f,
			label: x,
			labelId: p,
			value: d,
			onChange: b,
			slotProps: { htmlInput: L({
				tabIndex: o,
				ref: a,
				type: r || "text",
				placeholder: l?.root.placeholder ?? i.current.getLocaleText("filterPanelInputPlaceholder")
			}, l?.root.slotProps?.htmlInput) },
			native: h
		}, m.slotProps?.baseSelect, u, l?.root, { children: ld({
			column: g,
			OptionComponent: m.slots.baseSelectOption,
			getOptionLabel: v,
			getOptionValue: _,
			isSelectNative: h,
			baseSelectOptionProps: m.slotProps?.baseSelectOption
		}) })),
		c,
		s
	] });
}
process.env.NODE_ENV !== "production" && (ud.propTypes = {
	apiRef: q.default.shape({ current: q.default.object.isRequired }).isRequired,
	applyValue: q.default.func.isRequired,
	className: q.default.string,
	clearButton: q.default.node,
	disabled: q.default.bool,
	focusElementRef: q.default.oneOfType([q.default.func, q.default.object]),
	headerFilterMenu: q.default.node,
	inputRef: q.default.oneOfType([q.default.func, q.default.shape({ current: (e, t) => e[t] == null ? null : typeof e[t] != "object" || e[t].nodeType !== 1 ? /* @__PURE__ */ Error(`Expected prop '${t}' to be of type Element`) : null })]),
	isFilterActive: q.default.bool,
	item: q.default.shape({
		field: q.default.string.isRequired,
		id: q.default.oneOfType([q.default.number, q.default.string]),
		operator: q.default.string.isRequired,
		value: q.default.any
	}).isRequired,
	onBlur: q.default.func,
	onFocus: q.default.func,
	slotProps: q.default.object,
	tabIndex: q.default.number,
	type: q.default.oneOf(["singleSelect"])
});
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/panel/filterPanel/GridFilterInputMultipleSingleSelect.js
var dd = [
	"item",
	"applyValue",
	"type",
	"apiRef",
	"focusElementRef",
	"slotProps"
];
function fd(e) {
	let { item: t, applyValue: n, type: r, apiRef: i, focusElementRef: a, slotProps: o } = e, s = R(e, dd), c = kt(), l = B(), u = i.current.getColumn(t.field), d = u.getOptionValue, f = u.getOptionLabel, p = O.useCallback((e, t) => d(e) === d(t), [d]), m = O.useMemo(() => nd(u) || [], [u]), h = O.useMemo(() => Array.isArray(t.value) ? t.value.reduce((e, t) => {
		let n = m.find((e) => d(e) === t);
		return n != null && e.push(n), e;
	}, []) : [], [
		d,
		t.value,
		m
	]), g = O.useCallback((e, r) => {
		n(L({}, t, { value: r.map(d) }));
	}, [
		n,
		t,
		d
	]);
	if (!u || !td(u)) return null;
	let _ = l.slots.baseAutocomplete;
	return /* @__PURE__ */ E(_, L({
		multiple: !0,
		options: m,
		isOptionEqualToValue: p,
		id: c,
		value: h,
		onChange: g,
		getOptionLabel: f,
		label: i.current.getLocaleText("filterPanelInputLabel"),
		placeholder: i.current.getLocaleText("filterPanelInputPlaceholder"),
		slotProps: { textField: {
			type: r || "text",
			inputRef: a
		} }
	}, s, o?.root));
}
process.env.NODE_ENV !== "production" && (fd.propTypes = {
	apiRef: q.default.shape({ current: q.default.object.isRequired }).isRequired,
	applyValue: q.default.func.isRequired,
	className: q.default.string,
	clearButton: q.default.node,
	disabled: q.default.bool,
	focusElementRef: q.default.oneOfType([q.default.func, q.default.object]),
	headerFilterMenu: q.default.node,
	inputRef: q.default.oneOfType([q.default.func, q.default.shape({ current: (e, t) => e[t] == null ? null : typeof e[t] != "object" || e[t].nodeType !== 1 ? /* @__PURE__ */ Error(`Expected prop '${t}' to be of type Element`) : null })]),
	isFilterActive: q.default.bool,
	item: q.default.shape({
		field: q.default.string.isRequired,
		id: q.default.oneOfType([q.default.number, q.default.string]),
		operator: q.default.string.isRequired,
		value: q.default.any
	}).isRequired,
	onBlur: q.default.func,
	onFocus: q.default.func,
	slotProps: q.default.object,
	tabIndex: q.default.number,
	type: q.default.oneOf(["singleSelect"])
});
//#endregion
//#region node_modules/@mui/x-data-grid/esm/colDef/gridSingleSelectOperators.js
var pd = (e) => e == null || !us(e) ? e : e.value, md = () => [
	{
		value: "is",
		getApplyFilterFn: (e) => e.value == null || e.value === "" ? null : (t) => pd(t) === pd(e.value),
		InputComponent: ud
	},
	{
		value: "not",
		getApplyFilterFn: (e) => e.value == null || e.value === "" ? null : (t) => pd(t) !== pd(e.value),
		InputComponent: ud
	},
	{
		value: "isAnyOf",
		getApplyFilterFn: (e) => {
			if (!Array.isArray(e.value) || e.value.length === 0) return null;
			let t = e.value.map(pd);
			return (e) => t.includes(pd(e));
		},
		InputComponent: fd
	}
], hd = (e) => typeof e[0] == "object", gd = L({}, yc, {
	type: "singleSelect",
	getOptionLabel: (e) => us(e) ? e.label : String(e),
	getOptionValue: (e) => us(e) ? e.value : e,
	valueFormatter(e, t, n, r) {
		let i = ql(r, t);
		if (!td(n)) return "";
		let a = nd(n, {
			id: i,
			row: t
		});
		if (e == null) return "";
		if (!a) return e;
		if (!hd(a)) return n.getOptionLabel(e);
		let o = a.find((t) => n.getOptionValue(t) === e);
		return o ? n.getOptionLabel(o) : "";
	},
	renderEditCell: sd,
	filterOperators: md(),
	pastedValueParser: (e, t, n) => {
		let r = n, i = nd(r) || [], a = r.getOptionValue;
		if (i.find((t) => a(t) === e)) return e;
	}
}), _d = (e) => {
	let { classes: t } = e;
	return Bi({
		root: ["longTextCell"],
		content: ["longTextCellContent"],
		expandButton: ["longTextCellExpandButton"],
		collapseButton: ["longTextCellCollapseButton"],
		popup: ["longTextCellPopup"],
		popperContent: ["longTextCellPopperContent"]
	}, jn, t);
}, vd = I("div", {
	name: "MuiDataGrid",
	slot: "LongTextCell"
})({
	display: "flex",
	alignItems: "center",
	width: "100%",
	height: "100%",
	position: "relative"
}), yd = I("div", {
	name: "MuiDataGrid",
	slot: "LongTextCellContent"
})({
	overflow: "hidden",
	textOverflow: "ellipsis",
	whiteSpace: "nowrap",
	flex: 1
}), bd = I("div", {
	name: "MuiDataGrid",
	slot: "LongTextCellPopperContent"
})(({ theme: e }) => L({}, e.typography.body2, {
	letterSpacing: "normal",
	paddingBlock: 15.5,
	paddingInline: 9,
	maxHeight: 156,
	overflow: "auto",
	whiteSpace: "pre-wrap",
	wordBreak: "break-word",
	width: "var(--_width)",
	border: `1px solid ${(e.vars || e).palette.divider}`,
	boxSizing: "border-box"
})), xd = I("button", {
	name: "MuiDataGrid",
	slot: "LongTextCellCornerButton"
})(({ theme: e }) => ({
	lineHeight: 0,
	position: "absolute",
	bottom: 1,
	right: 0,
	border: "1px solid",
	color: (e.vars || e).palette.text.secondary,
	borderColor: (e.vars || e).palette.divider,
	backgroundColor: (e.vars || e).palette.background.paper,
	borderRadius: 0,
	fontSize: "0.875rem",
	padding: 2,
	"&:focus-visible": { outline: "none" },
	"&:hover": {
		backgroundColor: (e.vars || e).palette.background.paper,
		color: (e.vars || e).palette.text.primary
	},
	[`&.${U.longTextCellExpandButton}`]: {
		right: -9,
		opacity: 0,
		[`.${U.longTextCell}:hover &, .${U.longTextCell}.Mui-focused &`]: { opacity: 1 }
	},
	[`&.${U.longTextCellCollapseButton}`]: {
		bottom: 2,
		right: 2,
		border: "none"
	}
})), Sd = I(Vo, {
	name: "MuiDataGrid",
	slot: "LongTextCellPopper"
})(({ theme: e }) => ({
	zIndex: H.zIndex.menu,
	background: (e.vars || e).palette.background.paper,
	"&[data-popper-reference-hidden]": {
		visibility: "hidden",
		pointerEvents: "none"
	}
}));
function Cd(e) {
	let { id: t, value: n = "", colDef: r, hasFocus: i, slotProps: a, renderContent: o } = e, s = `${t}-${r.field}-longtext-popup`, c = B(), l = V(), u = _d(c), d = W(l, Na), [f, p] = O.useState(!1), m = O.useRef(null), h = O.useRef(null);
	O.useEffect(() => {
		i && !f && h.current && h.current !== document.activeElement && h.current.focus(), i || p(!1);
	}, [i, f]);
	let g = (e) => {
		e.detail !== 0 && (e.stopPropagation(), p(!0));
	}, _ = (e) => {
		e.key === " " && !e.shiftKey && (e.preventDefault(), e.stopPropagation(), p((e) => !e)), e.key === "Escape" && f && (e.stopPropagation(), p(!1));
	}, v = () => {
		p(!1);
	}, y = (e) => {
		e.stopPropagation(), p(!1), l.current.getCellElement(t, r.field)?.focus();
	};
	return /* @__PURE__ */ D(vd, L({ ref: m }, a?.root, {
		className: xt(u.root, a?.root?.className, i && "Mui-focused"),
		children: [
			/* @__PURE__ */ E(yd, L({}, a?.content, {
				className: xt(u.content, a?.content?.className),
				children: n
			})),
			/* @__PURE__ */ E(xd, L({
				ref: h,
				"aria-label": `${n}, ${l.current.getLocaleText("longTextCellExpandLabel")}`,
				"aria-haspopup": "dialog",
				"aria-controls": f ? s : void 0,
				"aria-expanded": f,
				"aria-keyshortcuts": "Space",
				tabIndex: 0
			}, a?.expandButton, {
				className: xt(u.expandButton, a?.expandButton?.className),
				onClick: g,
				onKeyDown: _,
				children: /* @__PURE__ */ E(c.slots.longTextCellExpandIcon, { fontSize: "inherit" })
			})),
			/* @__PURE__ */ E(Sd, L({
				id: s,
				role: "dialog",
				"aria-label": r.headerName || r.field,
				as: c.slots.basePopper,
				ownerState: c,
				open: f,
				target: m.current,
				placement: "bottom-start",
				onClickAway: v,
				clickAwayMouseEvent: "onMouseDown",
				flip: !0,
				material: {
					container: m.current?.closest("[role=\"row\"]"),
					modifiers: [{
						name: "offset",
						options: { offset: [-10, -d] }
					}]
				}
			}, a?.popper, {
				className: xt(u.popup, a?.popper?.className),
				children: /* @__PURE__ */ D(bd, L({
					tabIndex: -1,
					onKeyDown: (e) => {
						e.key === "Escape" && (e.stopPropagation(), p(!1), l.current.getCellElement(t, r.field)?.focus());
					}
				}, a?.popperContent, {
					className: xt(u.popperContent, a?.popperContent?.className),
					style: L({ "--_width": `${r.computedWidth}px` }, a?.popperContent?.style),
					children: [o ? o(n) : n, /* @__PURE__ */ E(xd, L({
						"aria-label": l.current.getLocaleText("longTextCellCollapseLabel"),
						"aria-keyshortcuts": "Escape"
					}, a?.collapseButton, {
						className: xt(u.collapseButton, a?.collapseButton?.className),
						onClick: y,
						children: /* @__PURE__ */ E(c.slots.longTextCellCollapseIcon, { fontSize: "inherit" })
					}))]
				}))
			}))
		]
	}));
}
var wd = (e) => /* @__PURE__ */ E(Cd, L({}, e));
process.env.NODE_ENV !== "production" && (wd.displayName = "renderLongTextCell");
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/cell/GridEditLongTextCell.js
var Td = (e) => {
	let { classes: t } = e;
	return Bi({
		root: ["editLongTextCell"],
		value: ["editLongTextCellValue"],
		popup: ["editLongTextCellPopup"],
		popperContent: ["editLongTextCellPopperContent"],
		textarea: ["editLongTextCellTextarea"]
	}, jn, t);
}, Ed = I(Vo, {
	name: "MuiDataGrid",
	slot: "EditLongTextCellTextarea"
})(({ theme: e }) => L({
	width: "100%",
	padding: 0
}, e.typography.body2, {
	letterSpacing: "normal",
	outline: "none",
	background: "transparent",
	border: "none",
	resize: "vertical"
})), Dd = I("div", {
	name: "MuiDataGrid",
	slot: "EditLongTextCell"
})({
	display: "flex",
	alignItems: "center",
	width: "100%",
	height: "100%",
	position: "relative"
}), Od = I("div", {
	name: "MuiDataGrid",
	slot: "EditLongTextCellValue"
})({
	overflow: "hidden",
	textOverflow: "ellipsis",
	whiteSpace: "nowrap",
	width: "100%",
	paddingInline: 10
}), kd = I(Vo, {
	name: "MuiDataGrid",
	slot: "EditLongTextCellPopper"
})(({ theme: e }) => ({
	zIndex: H.zIndex.menu,
	background: (e.vars || e).palette.background.paper,
	"&[data-popper-reference-hidden]": { opacity: 0 }
})), Ad = I("div", {
	name: "MuiDataGrid",
	slot: "EditLongTextCellPopperContent"
})(({ theme: e }) => L({}, e.typography.body2, {
	letterSpacing: "normal",
	paddingBlock: 15.5,
	paddingInline: 9,
	height: "max-content",
	overflow: "auto",
	whiteSpace: "pre-wrap",
	wordBreak: "break-word",
	width: "var(--_width)",
	border: `1px solid ${(e.vars || e).palette.divider}`,
	boxShadow: (e.vars || e).shadows[4],
	boxSizing: "border-box"
}));
function jd(e) {
	let { id: t, value: n, field: r, colDef: i, hasFocus: a, cellMode: o, slotProps: s } = e, c = B(), l = V(), u = Td(c), d = W(l, Na), [f, p] = O.useState(n), [m, h] = O.useState(null), g = l.current.unstable_getEditCellMeta(t, r), _ = `${t}-${r}-longtext-edit-popup`, v = a && !!m;
	return O.useEffect(() => {
		g?.changeReason !== "debouncedSetEditCellValue" && p(n);
	}, [g, n]), /* @__PURE__ */ D(Dd, L({
		tabIndex: o === "edit" && c.editMode === "row" ? 0 : void 0,
		ref: h,
		"aria-controls": v ? _ : void 0,
		"aria-expanded": v
	}, s?.root, {
		className: xt(u.root, s?.root?.className),
		children: [/* @__PURE__ */ E(Od, L({}, s?.value, {
			className: xt(u.value, s?.value?.className),
			children: f
		})), /* @__PURE__ */ E(kd, L({
			as: c.slots.basePopper,
			ownerState: c,
			id: _,
			role: "dialog",
			"aria-label": i.headerName || r,
			open: v,
			target: m,
			placement: "bottom-start",
			flip: !0,
			material: {
				container: m?.closest("[role=\"row\"]"),
				modifiers: [{
					name: "offset",
					options: { offset: [-1, -d] }
				}]
			}
		}, s?.popper, {
			className: xt(u.popup, s?.popper?.className),
			children: /* @__PURE__ */ E(Ad, L({}, s?.popperContent, {
				className: xt(u.popperContent, s?.popperContent?.className),
				style: { "--_width": `${i.computedWidth}px` },
				children: /* @__PURE__ */ E(Md, L({}, e, {
					valueState: f,
					setValueState: p
				}))
			}))
		}))]
	}));
}
function Md(e) {
	let { id: t, field: n, colDef: r, debounceMs: i = 200, onValueChange: a, valueState: o, setValueState: s, hasFocus: c, slotProps: l } = e, u = O.useRef(null), d = V(), f = B(), p = Td(f);
	Ct(() => {
		if (c && u.current) {
			u.current.focus({ preventScroll: !0 });
			let e = u.current.value.length;
			u.current.setSelectionRange(e, e);
		}
	}, [c]);
	let m = O.useCallback(async (e) => {
		let r = e.target.value, o = d.current.getColumn(n), c = r;
		o.valueParser && (c = o.valueParser(r, d.current.getRow(t), o, d)), s(c), d.current.setEditCellValue({
			id: t,
			field: n,
			value: c,
			debounceMs: i,
			unstable_skipValueParser: !0
		}, e), a && await a(e, r);
	}, [
		d,
		i,
		n,
		t,
		a,
		s
	]), h = O.useCallback((e) => {
		e.key === "Enter" && e.shiftKey && e.stopPropagation(), f.editMode === "cell" && e.key === "Escape" && d.current.stopCellEditMode({
			id: t,
			field: n,
			ignoreModifications: !0
		});
	}, [
		d,
		n,
		t,
		f.editMode
	]);
	return /* @__PURE__ */ E(Ed, L({
		ref: u,
		as: f.slots.baseTextarea,
		ownerState: f,
		"aria-label": r.headerName || n,
		value: o ?? "",
		onChange: m,
		onKeyDown: h
	}, l?.textarea, { className: xt(p.textarea, l?.textarea?.className) }));
}
var Nd = (e) => /* @__PURE__ */ E(jd, L({}, e));
process.env.NODE_ENV !== "production" && (Nd.displayName = "renderEditLongTextCell");
//#endregion
//#region node_modules/@mui/x-data-grid/esm/colDef/gridLongTextColDef.js
var Pd = L({}, yc, {
	type: "longText",
	display: "flex",
	renderCell: wd,
	renderEditCell: Nd
}), Fd = "string", Id = () => ({
	string: yc,
	number: ed,
	date: Zu,
	dateTime: Qu,
	boolean: bl,
	singleSelect: gd,
	[Xc]: Zc,
	custom: yc,
	longText: Pd
}), Ld = ka((e) => e.headerFiltering), Rd = G(Ld, (e) => e?.enabled ?? !1), zd = G(Ld, (e) => e.editing), Bd = G(Ld, (e) => e.menuOpen), Vd = ka((e) => e.columnGrouping), Hd = Oa(Vd, (e) => e?.unwrappedGroupingModel ?? {}), Ud = Oa(Vd, (e) => e?.lookup ?? {}), Wd = Oa(Vd, (e) => e?.headerStructure ?? []), Gd = G(Vd, (e) => e?.maxDepth ?? 0), Kd = [
	"maxWidth",
	"minWidth",
	"width",
	"flex"
], qd = Id();
function Jd({ initialFreeSpace: e, totalFlexUnits: t, flexColumns: n }) {
	let r = new Set(n.map((e) => e.field)), i = {
		all: {},
		frozenFields: [],
		freeze: (e) => {
			let t = i.all[e];
			t && t.frozen !== !0 && (i.all[e].frozen = !0, i.frozenFields.push(e));
		}
	};
	function a() {
		if (i.frozenFields.length === r.size) return;
		let o = {
			min: {},
			max: {}
		}, s = e, c = t, l = 0;
		i.frozenFields.forEach((e) => {
			s -= i.all[e].computedWidth, c -= i.all[e].flex;
		});
		for (let e = 0; e < n.length; e += 1) {
			let t = n[e];
			if (i.all[t.field] && i.all[t.field].frozen === !0) continue;
			let r = s / c * t.flex;
			r < t.minWidth ? (l += t.minWidth - r, r = t.minWidth, o.min[t.field] = !0) : r > t.maxWidth && (l += t.maxWidth - r, r = t.maxWidth, o.max[t.field] = !0), i.all[t.field] = {
				frozen: !1,
				computedWidth: r,
				flex: t.flex
			};
		}
		l < 0 ? Object.keys(o.max).forEach((e) => {
			i.freeze(e);
		}) : l > 0 ? Object.keys(o.min).forEach((e) => {
			i.freeze(e);
		}) : n.forEach(({ field: e }) => {
			i.freeze(e);
		}), a();
	}
	return a(), i.all;
}
var Yd = (e, t) => {
	let n = {}, r = 0, i = 0, a = [];
	e.orderedFields.forEach((t) => {
		let o = e.lookup[t], s = 0, c = !1;
		e.columnVisibilityModel[t] !== !1 && (o.flex && o.flex > 0 ? (r += o.flex, c = !0) : s = ps(o.width || yc.width, o.minWidth || yc.minWidth, o.maxWidth || yc.maxWidth), i += s), o.computedWidth !== s && (o = L({}, o, { computedWidth: s })), c && a.push(o), n[t] = o;
	});
	let o = t === void 0 ? 0 : t.viewportOuterSize.width - (t.hasScrollY ? t.scrollbarSize : 0), s = Math.max(o - i, 0);
	if (r > 0 && o > 0) {
		let e = Jd({
			initialFreeSpace: s,
			totalFlexUnits: r,
			flexColumns: a
		});
		Object.keys(e).forEach((t) => {
			n[t] = L({}, n[t], { computedWidth: e[t].computedWidth });
		});
	}
	return L({}, e, { lookup: n });
}, Xd = (e, t) => {
	if (!t) return e;
	let { orderedFields: n = [], dimensions: r = {} } = t, i = Object.keys(r);
	if (i.length === 0 && n.length === 0) return e;
	let a = {}, o = [];
	for (let t = 0; t < n.length; t += 1) {
		let r = n[t];
		e.lookup[r] && (a[r] = !0, o.push(r));
	}
	let s = o.length === 0 ? e.orderedFields : [...o, ...e.orderedFields.filter((e) => !a[e])], c = L({}, e.lookup);
	for (let e = 0; e < i.length; e += 1) {
		let t = i[e], n = L({}, c[t], { hasBeenResized: !0 });
		Object.entries(r[t]).forEach(([e, t]) => {
			n[e] = t === -1 ? Infinity : t;
		}), c[t] = n;
	}
	return L({}, e, {
		orderedFields: s,
		lookup: c
	});
};
function Zd(e) {
	let t = qd[Fd];
	return e && qd[e] && (t = qd[e]), t;
}
var Qd = ({ apiRef: e, columnsToUpsert: t, initialState: n, columnVisibilityModel: r = Us(e), keepOnlyColumnsToUpsert: i = !1, updateInitialVisibilityModel: a = !1 }) => {
	let o = !e.current.state.columns, s;
	if (o) s = {
		orderedFields: [],
		lookup: {},
		columnVisibilityModel: r,
		initialColumnVisibilityModel: r
	};
	else {
		let t = zs(e);
		s = {
			orderedFields: i ? [] : [...t.orderedFields],
			lookup: i ? {} : L({}, t.lookup),
			columnVisibilityModel: r,
			initialColumnVisibilityModel: a ? r : t.initialColumnVisibilityModel
		};
	}
	let c = {};
	if (i && !o) for (let e in s.lookup) Object.prototype.hasOwnProperty.call(s.lookup, e) && (c[e] = !1);
	return t.forEach((e) => {
		let { field: t } = e;
		c[t] = !0;
		let n = s.lookup[t];
		n == null ? (n = L({}, Zd(e.type), {
			field: t,
			hasBeenResized: !1
		}), s.orderedFields.push(t)) : i && s.orderedFields.push(t), n && n.type !== e.type && (n = L({}, Zd(e.type), { field: t }));
		let r = n.hasBeenResized;
		Kd.forEach((t) => {
			e[t] !== void 0 && (r = !0, e[t] === -1 && (e[t] = Infinity));
		});
		let a = L({}, Zd(e.type), {
			hasBeenResized: r,
			field: t
		}), o;
		for (o in e) e[o] !== void 0 && o !== "field" && (a[o] = e[o]);
		s.lookup[t] = Bo(n, a);
	}), i && !o && Object.keys(s.lookup).forEach((e) => {
		c[e] || delete s.lookup[e];
	}), Yd(Xd(e.current.unstable_applyPipeProcessors("hydrateColumns", s), n), e.current.getRootDimensions?.() ?? void 0);
};
function $d(e, t) {
	if (t.listView) return 0;
	let n = Lo(e), r = Gd(e), i = Rd(e), a = Math.floor(t.columnHeaderHeight * n), o = Math.floor((t.columnGroupHeaderHeight ?? t.columnHeaderHeight) * n), s = i ? Math.floor((t.headerFilterHeight ?? t.columnHeaderHeight) * n) : 0;
	return a + o * r + s;
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/GridScrollArea.js
var ef = 1, tf = 1.5, nf = (e) => {
	let { scrollDirection: t, classes: n } = e;
	return Bi({ root: ["scrollArea", `scrollArea--${t}`] }, jn, n);
}, rf = I("div", {
	name: "MuiDataGrid",
	slot: "ScrollArea",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [t.scrollArea, t[`scrollArea--${n.scrollDirection}`]];
	}
})(() => ({
	position: "absolute",
	zIndex: 101,
	[`&.${U["scrollArea--left"]}`]: {
		top: 0,
		left: 0,
		width: 20,
		bottom: 0
	},
	[`&.${U["scrollArea--right"]}`]: {
		top: 0,
		right: 0,
		width: 20,
		bottom: 0
	},
	[`&.${U["scrollArea--up"]}`]: {
		top: 0,
		left: 0,
		right: 0,
		height: 20
	},
	[`&.${U["scrollArea--down"]}`]: {
		bottom: 0,
		left: 0,
		right: 0,
		height: 20
	}
})), af = G(ja, (e, t) => t === "left" ? e.leftPinnedWidth : t === "right" ? e.rightPinnedWidth + (e.hasScrollX ? e.scrollbarSize : 0) : 0);
function of(e) {
	let t = V(), [n, r] = O.useState("none");
	return K(t, "columnHeaderDragStart", () => r("horizontal")), K(t, "columnHeaderDragEnd", () => r("none")), K(t, "rowDragStart", () => r("vertical")), K(t, "rowDragEnd", () => r("none")), n === "none" ? null : E(n === "horizontal" ? sf : cf, L({}, e));
}
function sf(e) {
	let { scrollDirection: t, scrollPosition: n } = e, r = O.useRef(null), i = V(), a = zo(), o = W(i, Lo), s = W(i, Ma), c = W(i, af, t), l = () => {
		let e = ja(i);
		if (t === "left") return n.current.left > 0;
		if (t === "right") {
			let t = s - e.viewportInnerSize.width;
			return n.current.left < t;
		}
		return !1;
	}, u = B(), d = $d(i, u), f = Math.floor(u.columnHeaderHeight * o);
	return /* @__PURE__ */ E(lf, L({}, e, {
		ref: r,
		getCanScrollMore: l,
		style: L({
			height: f,
			top: d - f
		}, t === "left" ? { left: c } : {}, t === "right" ? { right: c } : {}),
		handleDragOver: wt((e) => {
			let o;
			if (e.preventDefault(), t === "left") o = e.clientX - r.current.getBoundingClientRect().right;
			else if (t === "right") o = Math.max(1, e.clientX - r.current.getBoundingClientRect().left);
			else throw Error("MUI X: Wrong drag direction");
			o = (o - ef) * tf + ef, a.start(0, () => {
				i.current.scroll({
					left: n.current.left + o,
					top: n.current.top
				});
			});
		})
	}));
}
function cf(e) {
	let { scrollDirection: t, scrollPosition: n } = e, r = O.useRef(null), i = V(), a = zo(), o = W(i, Ha), s = () => {
		let e = ja(i);
		if (t === "up") return n.current.top > 0;
		if (t === "down") {
			let t = (o.currentPageTotalHeight || 0) - e.viewportInnerSize.height - (e.hasScrollX ? e.scrollbarSize : 0);
			return n.current.top < t;
		}
		return !1;
	}, c = $d(i, B());
	return /* @__PURE__ */ E(lf, L({}, e, {
		ref: r,
		getCanScrollMore: s,
		style: {
			top: t === "up" ? c : void 0,
			bottom: t === "down" ? 0 : void 0
		},
		handleDragOver: wt((e) => {
			let o;
			if (e.preventDefault(), t === "up") o = e.clientY - r.current.getBoundingClientRect().bottom;
			else if (t === "down") o = Math.max(1, e.clientY - r.current.getBoundingClientRect().top);
			else throw Error("MUI X: Wrong drag direction");
			o = (o - ef) * tf + ef, a.start(0, () => {
				i.current.scroll({
					left: n.current.left,
					top: n.current.top + o
				});
			});
		})
	}));
}
var lf = z(function(e, t) {
	let { scrollDirection: n, getCanScrollMore: r, style: i, handleDragOver: a } = e, o = V(), [s, c] = O.useState(r), l = L({}, B(), { scrollDirection: n }), u = nf(l);
	return K(o, "scrollPositionChange", () => {
		c(r);
	}), s ? /* @__PURE__ */ E(rf, {
		ref: t,
		className: u.root,
		ownerState: l,
		onDragOver: a,
		style: i
	}) : null;
});
process.env.NODE_ENV !== "production" && (lf.displayName = "GridScrollAreaContent");
var uf = Co(of), df = () => {}, ff = (e, t) => {
	let n = O.useRef(!1);
	Ct(() => n.current || !e ? df : (n.current = !0, t()), [n.current || e]);
};
//#endregion
//#region node_modules/@mui/x-data-grid/esm/hooks/utils/useGridApiMethod.js
function pf(e, t, n) {
	let r = O.useRef(!0);
	Ct(() => {
		r.current = !1, e.current.register(n, t);
	}, [
		e,
		n,
		t
	]), r.current && e.current.register(n, t);
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/hooks/utils/useGridLogger.js
function mf(e, t) {
	let n = O.useRef(null);
	if (n.current) return n.current;
	let r = e.current.getLogger(t);
	return n.current = r, r;
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/hooks/utils/useGridNativeEventListener.js
var hf = (e, t, n, r, i) => {
	let a = mf(e, "useNativeEventListener");
	No(e, "rootMount", () => {
		let e = t();
		if (!(!e || !n)) return a.debug(`Binding native ${n} event`), e.addEventListener(n, r, i), () => {
			a.debug(`Clearing native ${n} event`), e.removeEventListener(n, r, i);
		};
	});
};
//#endregion
//#region node_modules/@mui/x-internals/esm/useFirstRender/useFirstRender.js
function gf(e) {
	let t = O.useRef(!0);
	t.current && (t.current = !1, e());
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/hooks/utils/useRunOncePerLoop.js
function _f(e) {
	let t = O.useRef(null), n = O.useCallback((...n) => {
		t.current || queueMicrotask(() => {
			t.current && t.current();
		}), t.current = () => {
			t.current = null, e(...n);
		};
	}, [e]);
	return O.useLayoutEffect(() => {
		t.current && t.current();
	}), {
		schedule: n,
		cancel: () => t.current ? (t.current = null, !0) : !1
	};
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/hooks/features/pivoting/gridPivotingSelectors.js
var vf = ka((e) => e.pivoting), yf = G(vf, (e) => e?.active), bf = /* @__PURE__ */ new Map(), xf = G(vf, (e) => e?.initialColumns || bf), Sf = (e, t) => {
	let n = W(e, Wa), r = W(e, Ll), i = W(e, ro), a = W(e, Gs), o = n === 0 && i === 0, s = W(e, Ga), c = W(e, yf), l = !s && o, u = !s && n > 0 && r === 0, d = !s && a.length === 0, f = l && c, p = null, m = null;
	return l && (p = "noRowsOverlay"), d && (p = "noColumnsOverlay"), f && (p = "emptyPivotOverlay"), u && (p = "noResultsOverlay"), s && (p = "loadingOverlay", m = t.slotProps?.loadingOverlay?.[o ? "noRowsVariant" : "variant"] ?? (o ? "skeleton" : "linear-progress")), {
		overlayType: p,
		loadingOverlayVariant: m
	};
}, Cf = ka((e) => e.columnMenu);
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/GridHeaders.js
function wf() {
	let e = Zn(), t = B(), n = W(e, Gs), r = W(e, Vl), i = W(e, El), a = W(e, fu), o = W(e, () => du(e) === null), s = W(e, pu), c = W(e, cu), l = W(e, lu), u = W(e, Gd), d = W(e, Cf), f = W(e, Us), p = W(e, Wd), m = !(s === null && a === null && o), h = e.current.columnHeadersContainerRef;
	return /* @__PURE__ */ E(t.slots.columnHeaders, L({
		ref: h,
		visibleColumns: n,
		filterColumnLookup: r,
		sortColumnLookup: i,
		columnHeaderTabIndexState: a,
		columnGroupHeaderTabIndexState: s,
		columnHeaderFocus: c,
		columnGroupHeaderFocus: l,
		headerGroupingMaxDepth: u,
		columnMenuState: d,
		columnVisibility: f,
		columnGroupsHeaderStructure: p,
		hasOtherElementInTabSequence: m
	}, t.slotProps?.columnHeaders));
}
var Tf = Co(wf), Ef = I("div", {
	slot: "internal",
	shouldForwardProp: void 0
})({
	position: "absolute",
	top: "var(--DataGrid-headersTotalHeight)",
	left: 0,
	width: "calc(100% - (var(--DataGrid-hasScrollY) * var(--DataGrid-scrollbarSize)))"
}), Df = I("div", {
	name: "MuiDataGrid",
	slot: "Main",
	overridesResolver: (e, t) => {
		let { ownerState: n, loadingOverlayVariant: r, overlayType: i } = e, a = r === "skeleton" || i === "noColumnsOverlay";
		return [
			t.main,
			n.hasPinnedRight && t["main--hasPinnedRight"],
			a && t["main--hiddenContent"]
		];
	}
})({
	flexGrow: 1,
	position: "relative",
	overflow: "hidden",
	display: "flex",
	flexDirection: "column"
}), Of = z((e, t) => {
	let { ownerState: n } = e, r = B(), i = jc().hooks.useGridAriaAttributes();
	return /* @__PURE__ */ D(Df, L({
		ownerState: n,
		className: e.className,
		tabIndex: -1
	}, i, r.slotProps?.main, {
		ref: t,
		children: [/* @__PURE__ */ E(Ef, {
			role: "presentation",
			"data-id": "gridPanelAnchor"
		}), e.children]
	}));
});
process.env.NODE_ENV !== "production" && (Of.displayName = "GridMainContainer");
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/virtualization/GridTopContainer.js
var kf = () => Bi({ root: ["topContainer"] }, jn, {}), Af = I("div", {
	slot: "internal",
	shouldForwardProp: void 0
})({
	position: "sticky",
	zIndex: 40,
	top: 0
});
function jf(e) {
	return /* @__PURE__ */ E(Af, L({}, e, {
		className: xt(kf().root, U["container--top"]),
		role: "presentation"
	}));
}
//#endregion
//#region node_modules/@mui/utils/esm/formatMuiErrorMessage/formatMuiErrorMessage.js
function Mf(e, ...t) {
	let n = new URL(`https://mui.com/production-error/?code=${e}`);
	return t.forEach((e) => n.searchParams.append("args[]", e)), `Minified MUI error #${e}; visit ${n} for the full message.`;
}
//#endregion
//#region node_modules/@mui/styled-engine/esm/index.js
function Nf(e, t) {
	let n = Qe(e, t);
	return process.env.NODE_ENV === "production" ? n : (...t) => {
		let r = typeof e == "string" ? `"${e}"` : "component";
		return t.length === 0 ? console.error([`MUI: Seems like you called \`styled(${r})()\` without a \`style\` argument.`, "You must provide a `styles` argument: `styled(\"div\")(styleYouForgotToPass)`."].join("\n")) : t.some((e) => e === void 0) && console.error(`MUI: the styled(${r})(...args) API requires all its args to be defined.`), n(...t);
	};
}
function Pf(e, t) {
	Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
var Ff = [];
function If(e) {
	return Ff[0] = e, $e(Ff);
}
//#endregion
//#region node_modules/react-is/cjs/react-is.production.js
var Lf = /* @__PURE__ */ ut(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.consumer"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), p = Symbol.for("react.view_transition"), m = Symbol.for("react.client.reference");
	function h(e) {
		if (typeof e == "object" && e) {
			var m = e.$$typeof;
			switch (m) {
				case t: switch (e = e.type, e) {
					case r:
					case a:
					case i:
					case l:
					case u:
					case p: return e;
					default: switch (e &&= e.$$typeof, e) {
						case s:
						case c:
						case f:
						case d: return e;
						case o: return e;
						default: return m;
					}
				}
				case n: return m;
			}
		}
	}
	e.ContextConsumer = o, e.ContextProvider = s, e.Element = t, e.ForwardRef = c, e.Fragment = r, e.Lazy = f, e.Memo = d, e.Portal = n, e.Profiler = a, e.StrictMode = i, e.Suspense = l, e.SuspenseList = u, e.isContextConsumer = function(e) {
		return h(e) === o;
	}, e.isContextProvider = function(e) {
		return h(e) === s;
	}, e.isElement = function(e) {
		return typeof e == "object" && !!e && e.$$typeof === t;
	}, e.isForwardRef = function(e) {
		return h(e) === c;
	}, e.isFragment = function(e) {
		return h(e) === r;
	}, e.isLazy = function(e) {
		return h(e) === f;
	}, e.isMemo = function(e) {
		return h(e) === d;
	}, e.isPortal = function(e) {
		return h(e) === n;
	}, e.isProfiler = function(e) {
		return h(e) === a;
	}, e.isStrictMode = function(e) {
		return h(e) === i;
	}, e.isSuspense = function(e) {
		return h(e) === l;
	}, e.isSuspenseList = function(e) {
		return h(e) === u;
	}, e.isValidElementType = function(e) {
		return !!(typeof e == "string" || typeof e == "function" || e === r || e === a || e === i || e === l || e === u || typeof e == "object" && e && (e.$$typeof === f || e.$$typeof === d || e.$$typeof === s || e.$$typeof === o || e.$$typeof === c || e.$$typeof === m || e.getModuleId !== void 0));
	}, e.typeOf = h;
})), Rf = /* @__PURE__ */ ut(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		function t(e) {
			if (typeof e == "object" && e) {
				var t = e.$$typeof;
				switch (t) {
					case n: switch (e = e.type, e) {
						case i:
						case o:
						case a:
						case u:
						case d:
						case m: return e;
						default: switch (e &&= e.$$typeof, e) {
							case c:
							case l:
							case p:
							case f: return e;
							case s: return e;
							default: return t;
						}
					}
					case r: return t;
				}
			}
		}
		var n = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), m = Symbol.for("react.view_transition"), h = Symbol.for("react.client.reference");
		e.ContextConsumer = s, e.ContextProvider = c, e.Element = n, e.ForwardRef = l, e.Fragment = i, e.Lazy = p, e.Memo = f, e.Portal = r, e.Profiler = o, e.StrictMode = a, e.Suspense = u, e.SuspenseList = d, e.isContextConsumer = function(e) {
			return t(e) === s;
		}, e.isContextProvider = function(e) {
			return t(e) === c;
		}, e.isElement = function(e) {
			return typeof e == "object" && !!e && e.$$typeof === n;
		}, e.isForwardRef = function(e) {
			return t(e) === l;
		}, e.isFragment = function(e) {
			return t(e) === i;
		}, e.isLazy = function(e) {
			return t(e) === p;
		}, e.isMemo = function(e) {
			return t(e) === f;
		}, e.isPortal = function(e) {
			return t(e) === r;
		}, e.isProfiler = function(e) {
			return t(e) === o;
		}, e.isStrictMode = function(e) {
			return t(e) === a;
		}, e.isSuspense = function(e) {
			return t(e) === u;
		}, e.isSuspenseList = function(e) {
			return t(e) === d;
		}, e.isValidElementType = function(e) {
			return !!(typeof e == "string" || typeof e == "function" || e === i || e === o || e === a || e === u || e === d || typeof e == "object" && e && (e.$$typeof === p || e.$$typeof === f || e.$$typeof === c || e.$$typeof === s || e.$$typeof === l || e.$$typeof === h || e.getModuleId !== void 0));
		}, e.typeOf = t;
	})();
})), zf = (/* @__PURE__ */ ut(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = Lf() : t.exports = Rf();
})))();
function Bf(e) {
	if (typeof e != "object" || !e) return !1;
	let t = Object.getPrototypeOf(e);
	return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Vf(e) {
	if (/* @__PURE__ */ O.isValidElement(e) || (0, zf.isValidElementType)(e) || !Bf(e)) return e;
	let t = {};
	return Object.keys(e).forEach((n) => {
		t[n] = Vf(e[n]);
	}), t;
}
function Hf(e, t, n = { clone: !0 }) {
	let r = n.clone ? { ...e } : e;
	return Bf(e) && Bf(t) && Object.keys(t).forEach((i) => {
		/* @__PURE__ */ O.isValidElement(t[i]) || (0, zf.isValidElementType)(t[i]) ? r[i] = t[i] : Bf(t[i]) && Object.prototype.hasOwnProperty.call(e, i) && Bf(e[i]) ? r[i] = Hf(e[i], t[i], n) : n.clone ? r[i] = Bf(t[i]) ? Vf(t[i]) : t[i] : r[i] = t[i];
	}), r;
}
//#endregion
//#region node_modules/@mui/system/esm/createBreakpoints/createBreakpoints.js
var Uf = (e) => {
	let t = Object.keys(e).map((t) => ({
		key: t,
		val: e[t]
	})) || [];
	return t.sort((e, t) => e.val - t.val), t.reduce((e, t) => ({
		...e,
		[t.key]: t.val
	}), {});
};
function Wf(e) {
	let { values: t = {
		xs: 0,
		sm: 600,
		md: 900,
		lg: 1200,
		xl: 1536
	}, unit: n = "px", step: r = 5, ...i } = e, a = Uf(t), o = Object.keys(a);
	function s(e) {
		return `@media (min-width:${typeof t[e] == "number" ? t[e] : e}${n})`;
	}
	function c(e) {
		return `@media (max-width:${(typeof t[e] == "number" ? t[e] : e) - r / 100}${n})`;
	}
	function l(e, i) {
		let a = o.indexOf(i);
		return `@media (min-width:${typeof t[e] == "number" ? t[e] : e}${n}) and (max-width:${(a !== -1 && typeof t[o[a]] == "number" ? t[o[a]] : i) - r / 100}${n})`;
	}
	function u(e) {
		return o.indexOf(e) + 1 < o.length ? l(e, o[o.indexOf(e) + 1]) : s(e);
	}
	function d(e) {
		let t = o.indexOf(e);
		return t === 0 ? s(o[1]) : t === o.length - 1 ? c(o[t]) : l(e, o[o.indexOf(e) + 1]).replace("@media", "@media not all and");
	}
	return {
		keys: o,
		values: a,
		up: s,
		down: c,
		between: l,
		only: u,
		not: d,
		unit: n,
		...i
	};
}
//#endregion
//#region node_modules/@mui/system/esm/cssContainerQueries/cssContainerQueries.js
function Gf(e, t) {
	if (!e.containerQueries) return t;
	let n = Object.keys(t).filter((e) => e.startsWith("@container")).sort((e, t) => {
		let n = /min-width:\s*([0-9.]+)/;
		return (e.match(n)?.[1] || 0) - +(t.match(n)?.[1] || 0);
	});
	return n.length ? n.reduce((e, n) => {
		let r = t[n];
		return delete e[n], e[n] = r, e;
	}, { ...t }) : t;
}
function Kf(e, t) {
	return t === "@" || t.startsWith("@") && (e.some((e) => t.startsWith(`@${e}`)) || !!t.match(/^@\d/));
}
function qf(e, t) {
	let n = t.match(/^@([^/]+)?\/?(.+)?$/);
	if (!n) {
		if (process.env.NODE_ENV !== "production") throw Error(`MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.\nFor example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.`);
		return null;
	}
	let [, r, i] = n, a = Number.isNaN(+r) ? r || 0 : +r;
	return e.containerQueries(i).up(a);
}
function Jf(e) {
	let t = (e, t) => e.replace("@media", t ? `@container ${t}` : "@container");
	function n(n, r) {
		n.up = (...n) => t(e.breakpoints.up(...n), r), n.down = (...n) => t(e.breakpoints.down(...n), r), n.between = (...n) => t(e.breakpoints.between(...n), r), n.only = (...n) => t(e.breakpoints.only(...n), r), n.not = (...n) => {
			let i = t(e.breakpoints.not(...n), r);
			return i.includes("not all and") ? i.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : i;
		};
	}
	let r = {}, i = (e) => (n(r, e), r);
	return n(i), {
		...e,
		containerQueries: i
	};
}
//#endregion
//#region node_modules/@mui/system/esm/createTheme/shape.js
var Yf = { borderRadius: 4 }, Xf = process.env.NODE_ENV === "production" ? {} : q.default.oneOfType([
	q.default.number,
	q.default.string,
	q.default.object,
	q.default.array
]);
//#endregion
//#region node_modules/@mui/system/esm/merge/merge.js
function Zf(e, t) {
	return t ? Hf(e, t, { clone: !1 }) : e;
}
//#endregion
//#region node_modules/@mui/system/esm/breakpoints/breakpoints.js
var Qf = {
	xs: 0,
	sm: 600,
	md: 900,
	lg: 1200,
	xl: 1536
}, $f = {
	keys: [
		"xs",
		"sm",
		"md",
		"lg",
		"xl"
	],
	up: (e) => `@media (min-width:${Qf[e]}px)`
}, ep = { containerQueries: (e) => ({ up: (t) => {
	let n = typeof t == "number" ? t : Qf[t] || t;
	return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
} }) };
function tp(e, t, n) {
	let r = e.theme || {};
	if (Array.isArray(t)) {
		let e = r.breakpoints || $f;
		return t.reduce((r, i, a) => (r[e.up(e.keys[a])] = n(t[a]), r), {});
	}
	if (typeof t == "object") {
		let e = r.breakpoints || $f;
		return Object.keys(t).reduce((i, a) => {
			if (Kf(e.keys, a)) {
				let e = qf(r.containerQueries ? r : ep, a);
				e && (i[e] = n(t[a], a));
			} else if (Object.keys(e.values || Qf).includes(a)) {
				let r = e.up(a);
				i[r] = n(t[a], a);
			} else {
				let e = a;
				i[e] = t[e];
			}
			return i;
		}, {});
	}
	return n(t);
}
function np(e = {}) {
	return e.keys?.reduce((t, n) => {
		let r = e.up(n);
		return t[r] = {}, t;
	}, {}) || {};
}
function rp(e, t) {
	return e.reduce((e, t) => {
		let n = e[t];
		return (!n || Object.keys(n).length === 0) && delete e[t], e;
	}, t);
}
//#endregion
//#region node_modules/@mui/utils/esm/capitalize/capitalize.js
function ip(e) {
	if (typeof e != "string") throw Error(process.env.NODE_ENV === "production" ? Mf(7) : "MUI: `capitalize(string)` expects a string argument.");
	return e.charAt(0).toUpperCase() + e.slice(1);
}
//#endregion
//#region node_modules/@mui/system/esm/style/style.js
function ap(e, t, n = !0) {
	if (!t || typeof t != "string") return null;
	if (e && e.vars && n) {
		let n = `vars.${t}`.split(".").reduce((e, t) => e && e[t] ? e[t] : null, e);
		if (n != null) return n;
	}
	return t.split(".").reduce((e, t) => e && e[t] != null ? e[t] : null, e);
}
function op(e, t, n, r = n) {
	let i;
	return i = typeof e == "function" ? e(n) : Array.isArray(e) ? e[n] || r : ap(e, n) || r, t && (i = t(i, r, e)), i;
}
function sp(e) {
	let { prop: t, cssProperty: n = e.prop, themeKey: r, transform: i } = e, a = (e) => {
		if (e[t] == null) return null;
		let a = e[t], o = e.theme, s = ap(o, r) || {};
		return tp(e, a, (e) => {
			let r = op(s, i, e);
			return e === r && typeof e == "string" && (r = op(s, i, `${t}${e === "default" ? "" : ip(e)}`, e)), n === !1 ? r : { [n]: r };
		});
	};
	return a.propTypes = process.env.NODE_ENV === "production" ? {} : { [t]: Xf }, a.filterProps = [t], a;
}
//#endregion
//#region node_modules/@mui/system/esm/memoize/memoize.js
function cp(e) {
	let t = {};
	return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
//#endregion
//#region node_modules/@mui/system/esm/spacing/spacing.js
var lp = {
	m: "margin",
	p: "padding"
}, up = {
	t: "Top",
	r: "Right",
	b: "Bottom",
	l: "Left",
	x: ["Left", "Right"],
	y: ["Top", "Bottom"]
}, dp = {
	marginX: "mx",
	marginY: "my",
	paddingX: "px",
	paddingY: "py"
}, fp = cp((e) => {
	if (e.length > 2) if (dp[e]) e = dp[e];
	else return [e];
	let [t, n] = e.split(""), r = lp[t], i = up[n] || "";
	return Array.isArray(i) ? i.map((e) => r + e) : [r + i];
}), pp = [
	"m",
	"mt",
	"mr",
	"mb",
	"ml",
	"mx",
	"my",
	"margin",
	"marginTop",
	"marginRight",
	"marginBottom",
	"marginLeft",
	"marginX",
	"marginY",
	"marginInline",
	"marginInlineStart",
	"marginInlineEnd",
	"marginBlock",
	"marginBlockStart",
	"marginBlockEnd"
], mp = [
	"p",
	"pt",
	"pr",
	"pb",
	"pl",
	"px",
	"py",
	"padding",
	"paddingTop",
	"paddingRight",
	"paddingBottom",
	"paddingLeft",
	"paddingX",
	"paddingY",
	"paddingInline",
	"paddingInlineStart",
	"paddingInlineEnd",
	"paddingBlock",
	"paddingBlockStart",
	"paddingBlockEnd"
], hp = [...pp, ...mp];
function gp(e, t, n, r) {
	let i = ap(e, t, !0) ?? n;
	return typeof i == "number" || typeof i == "string" ? (e) => typeof e == "string" ? e : (process.env.NODE_ENV !== "production" && typeof e != "number" && console.error(`MUI: Expected ${r} argument to be a number or a string, got ${e}.`), typeof i == "string" ? i.startsWith("var(") && e === 0 ? 0 : i.startsWith("var(") && e === 1 ? i : `calc(${e} * ${i})` : i * e) : Array.isArray(i) ? (e) => {
		if (typeof e == "string") return e;
		let n = Math.abs(e);
		process.env.NODE_ENV !== "production" && (Number.isInteger(n) ? n > i.length - 1 && console.error([
			`MUI: The value provided (${n}) overflows.`,
			`The supported values are: ${JSON.stringify(i)}.`,
			`${n} > ${i.length - 1}, you need to add the missing values.`
		].join("\n")) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join("\n")));
		let r = i[n];
		return e >= 0 ? r : typeof r == "number" ? -r : typeof r == "string" && r.startsWith("var(") ? `calc(-1 * ${r})` : `-${r}`;
	} : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join("\n")), () => void 0);
}
function _p(e) {
	return gp(e, "spacing", 8, "spacing");
}
function vp(e, t) {
	return typeof t == "string" || t == null ? t : e(t);
}
function yp(e, t) {
	return (n) => e.reduce((e, r) => (e[r] = vp(t, n), e), {});
}
function bp(e, t, n, r) {
	if (!t.includes(n)) return null;
	let i = yp(fp(n), r), a = e[n];
	return tp(e, a, i);
}
function xp(e, t) {
	let n = _p(e.theme);
	return Object.keys(e).map((r) => bp(e, t, r, n)).reduce(Zf, {});
}
function Sp(e) {
	return xp(e, pp);
}
Sp.propTypes = process.env.NODE_ENV === "production" ? {} : pp.reduce((e, t) => (e[t] = Xf, e), {}), Sp.filterProps = pp;
function Cp(e) {
	return xp(e, mp);
}
Cp.propTypes = process.env.NODE_ENV === "production" ? {} : mp.reduce((e, t) => (e[t] = Xf, e), {}), Cp.filterProps = mp;
function wp(e) {
	return xp(e, hp);
}
wp.propTypes = process.env.NODE_ENV === "production" ? {} : hp.reduce((e, t) => (e[t] = Xf, e), {}), wp.filterProps = hp;
//#endregion
//#region node_modules/@mui/system/esm/createTheme/createSpacing.js
function Tp(e = 8, t = _p({ spacing: e })) {
	if (e.mui) return e;
	let n = (...e) => (process.env.NODE_ENV !== "production" && (e.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${e.length}`)), (e.length === 0 ? [1] : e).map((e) => {
		let n = t(e);
		return typeof n == "number" ? `${n}px` : n;
	}).join(" "));
	return n.mui = !0, n;
}
//#endregion
//#region node_modules/@mui/system/esm/compose/compose.js
function Ep(...e) {
	let t = e.reduce((e, t) => (t.filterProps.forEach((n) => {
		e[n] = t;
	}), e), {}), n = (e) => Object.keys(e).reduce((n, r) => t[r] ? Zf(n, t[r](e)) : n, {});
	return n.propTypes = process.env.NODE_ENV === "production" ? {} : e.reduce((e, t) => Object.assign(e, t.propTypes), {}), n.filterProps = e.reduce((e, t) => e.concat(t.filterProps), []), n;
}
//#endregion
//#region node_modules/@mui/system/esm/borders/borders.js
function Dp(e) {
	return typeof e == "number" ? `${e}px solid` : e;
}
function Op(e, t) {
	return sp({
		prop: e,
		themeKey: "borders",
		transform: t
	});
}
var kp = Op("border", Dp), Ap = Op("borderTop", Dp), jp = Op("borderRight", Dp), Mp = Op("borderBottom", Dp), Np = Op("borderLeft", Dp), Pp = Op("borderColor"), Fp = Op("borderTopColor"), Ip = Op("borderRightColor"), Lp = Op("borderBottomColor"), Rp = Op("borderLeftColor"), zp = Op("outline", Dp), Bp = Op("outlineColor"), Vp = (e) => {
	if (e.borderRadius !== void 0 && e.borderRadius !== null) {
		let t = gp(e.theme, "shape.borderRadius", 4, "borderRadius");
		return tp(e, e.borderRadius, (e) => ({ borderRadius: vp(t, e) }));
	}
	return null;
};
Vp.propTypes = process.env.NODE_ENV === "production" ? {} : { borderRadius: Xf }, Vp.filterProps = ["borderRadius"], Ep(kp, Ap, jp, Mp, Np, Pp, Fp, Ip, Lp, Rp, Vp, zp, Bp);
//#endregion
//#region node_modules/@mui/system/esm/cssGrid/cssGrid.js
var Hp = (e) => {
	if (e.gap !== void 0 && e.gap !== null) {
		let t = gp(e.theme, "spacing", 8, "gap");
		return tp(e, e.gap, (e) => ({ gap: vp(t, e) }));
	}
	return null;
};
Hp.propTypes = process.env.NODE_ENV === "production" ? {} : { gap: Xf }, Hp.filterProps = ["gap"];
var Up = (e) => {
	if (e.columnGap !== void 0 && e.columnGap !== null) {
		let t = gp(e.theme, "spacing", 8, "columnGap");
		return tp(e, e.columnGap, (e) => ({ columnGap: vp(t, e) }));
	}
	return null;
};
Up.propTypes = process.env.NODE_ENV === "production" ? {} : { columnGap: Xf }, Up.filterProps = ["columnGap"];
var Wp = (e) => {
	if (e.rowGap !== void 0 && e.rowGap !== null) {
		let t = gp(e.theme, "spacing", 8, "rowGap");
		return tp(e, e.rowGap, (e) => ({ rowGap: vp(t, e) }));
	}
	return null;
};
Wp.propTypes = process.env.NODE_ENV === "production" ? {} : { rowGap: Xf }, Wp.filterProps = ["rowGap"], Ep(Hp, Up, Wp, sp({ prop: "gridColumn" }), sp({ prop: "gridRow" }), sp({ prop: "gridAutoFlow" }), sp({ prop: "gridAutoColumns" }), sp({ prop: "gridAutoRows" }), sp({ prop: "gridTemplateColumns" }), sp({ prop: "gridTemplateRows" }), sp({ prop: "gridTemplateAreas" }), sp({ prop: "gridArea" }));
//#endregion
//#region node_modules/@mui/system/esm/palette/palette.js
function Gp(e, t) {
	return t === "grey" ? t : e;
}
Ep(sp({
	prop: "color",
	themeKey: "palette",
	transform: Gp
}), sp({
	prop: "bgcolor",
	cssProperty: "backgroundColor",
	themeKey: "palette",
	transform: Gp
}), sp({
	prop: "backgroundColor",
	themeKey: "palette",
	transform: Gp
}));
//#endregion
//#region node_modules/@mui/system/esm/sizing/sizing.js
function Kp(e) {
	return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
var qp = sp({
	prop: "width",
	transform: Kp
}), Jp = (e) => e.maxWidth !== void 0 && e.maxWidth !== null ? tp(e, e.maxWidth, (t) => {
	let n = e.theme?.breakpoints?.values?.[t] || Qf[t];
	return n ? e.theme?.breakpoints?.unit === "px" ? { maxWidth: n } : { maxWidth: `${n}${e.theme.breakpoints.unit}` } : { maxWidth: Kp(t) };
}) : null;
Jp.filterProps = ["maxWidth"];
var Yp = sp({
	prop: "minWidth",
	transform: Kp
}), Xp = sp({
	prop: "height",
	transform: Kp
}), Zp = sp({
	prop: "maxHeight",
	transform: Kp
}), Qp = sp({
	prop: "minHeight",
	transform: Kp
});
sp({
	prop: "size",
	cssProperty: "width",
	transform: Kp
}), sp({
	prop: "size",
	cssProperty: "height",
	transform: Kp
}), Ep(qp, Jp, Yp, Xp, Zp, Qp, sp({ prop: "boxSizing" }));
//#endregion
//#region node_modules/@mui/system/esm/styleFunctionSx/defaultSxConfig.js
var $p = {
	border: {
		themeKey: "borders",
		transform: Dp
	},
	borderTop: {
		themeKey: "borders",
		transform: Dp
	},
	borderRight: {
		themeKey: "borders",
		transform: Dp
	},
	borderBottom: {
		themeKey: "borders",
		transform: Dp
	},
	borderLeft: {
		themeKey: "borders",
		transform: Dp
	},
	borderColor: { themeKey: "palette" },
	borderTopColor: { themeKey: "palette" },
	borderRightColor: { themeKey: "palette" },
	borderBottomColor: { themeKey: "palette" },
	borderLeftColor: { themeKey: "palette" },
	outline: {
		themeKey: "borders",
		transform: Dp
	},
	outlineColor: { themeKey: "palette" },
	borderRadius: {
		themeKey: "shape.borderRadius",
		style: Vp
	},
	color: {
		themeKey: "palette",
		transform: Gp
	},
	bgcolor: {
		themeKey: "palette",
		cssProperty: "backgroundColor",
		transform: Gp
	},
	backgroundColor: {
		themeKey: "palette",
		transform: Gp
	},
	p: { style: Cp },
	pt: { style: Cp },
	pr: { style: Cp },
	pb: { style: Cp },
	pl: { style: Cp },
	px: { style: Cp },
	py: { style: Cp },
	padding: { style: Cp },
	paddingTop: { style: Cp },
	paddingRight: { style: Cp },
	paddingBottom: { style: Cp },
	paddingLeft: { style: Cp },
	paddingX: { style: Cp },
	paddingY: { style: Cp },
	paddingInline: { style: Cp },
	paddingInlineStart: { style: Cp },
	paddingInlineEnd: { style: Cp },
	paddingBlock: { style: Cp },
	paddingBlockStart: { style: Cp },
	paddingBlockEnd: { style: Cp },
	m: { style: Sp },
	mt: { style: Sp },
	mr: { style: Sp },
	mb: { style: Sp },
	ml: { style: Sp },
	mx: { style: Sp },
	my: { style: Sp },
	margin: { style: Sp },
	marginTop: { style: Sp },
	marginRight: { style: Sp },
	marginBottom: { style: Sp },
	marginLeft: { style: Sp },
	marginX: { style: Sp },
	marginY: { style: Sp },
	marginInline: { style: Sp },
	marginInlineStart: { style: Sp },
	marginInlineEnd: { style: Sp },
	marginBlock: { style: Sp },
	marginBlockStart: { style: Sp },
	marginBlockEnd: { style: Sp },
	displayPrint: {
		cssProperty: !1,
		transform: (e) => ({ "@media print": { display: e } })
	},
	display: {},
	overflow: {},
	textOverflow: {},
	visibility: {},
	whiteSpace: {},
	flexBasis: {},
	flexDirection: {},
	flexWrap: {},
	justifyContent: {},
	alignItems: {},
	alignContent: {},
	order: {},
	flex: {},
	flexGrow: {},
	flexShrink: {},
	alignSelf: {},
	justifyItems: {},
	justifySelf: {},
	gap: { style: Hp },
	rowGap: { style: Wp },
	columnGap: { style: Up },
	gridColumn: {},
	gridRow: {},
	gridAutoFlow: {},
	gridAutoColumns: {},
	gridAutoRows: {},
	gridTemplateColumns: {},
	gridTemplateRows: {},
	gridTemplateAreas: {},
	gridArea: {},
	position: {},
	zIndex: { themeKey: "zIndex" },
	top: {},
	right: {},
	bottom: {},
	left: {},
	boxShadow: { themeKey: "shadows" },
	width: { transform: Kp },
	maxWidth: { style: Jp },
	minWidth: { transform: Kp },
	height: { transform: Kp },
	maxHeight: { transform: Kp },
	minHeight: { transform: Kp },
	boxSizing: {},
	font: { themeKey: "font" },
	fontFamily: { themeKey: "typography" },
	fontSize: { themeKey: "typography" },
	fontStyle: { themeKey: "typography" },
	fontWeight: { themeKey: "typography" },
	letterSpacing: {},
	textTransform: {},
	lineHeight: {},
	textAlign: {},
	typography: {
		cssProperty: !1,
		themeKey: "typography"
	}
};
//#endregion
//#region node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js
function em(...e) {
	let t = e.reduce((e, t) => e.concat(Object.keys(t)), []), n = new Set(t);
	return e.every((e) => n.size === Object.keys(e).length);
}
function tm(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function nm() {
	function e(e, t, n, r) {
		let i = {
			[e]: t,
			theme: n
		}, a = r[e];
		if (!a) return { [e]: t };
		let { cssProperty: o = e, themeKey: s, transform: c, style: l } = a;
		if (t == null) return null;
		if (s === "typography" && t === "inherit") return { [e]: t };
		let u = ap(n, s) || {};
		return l ? l(i) : tp(i, t, (t) => {
			let n = op(u, c, t);
			return t === n && typeof t == "string" && (n = op(u, c, `${e}${t === "default" ? "" : ip(t)}`, t)), o === !1 ? n : { [o]: n };
		});
	}
	function t(n) {
		let { sx: r, theme: i = {}, nested: a } = n || {};
		if (!r) return null;
		let o = i.unstable_sxConfig ?? $p;
		function s(n) {
			let r = n;
			if (typeof n == "function") r = n(i);
			else if (typeof n != "object") return n;
			if (!r) return null;
			let s = np(i.breakpoints), c = Object.keys(s), l = s;
			return Object.keys(r).forEach((n) => {
				let a = tm(r[n], i);
				if (a != null) if (typeof a == "object") if (o[n]) l = Zf(l, e(n, a, i, o));
				else {
					let e = tp({ theme: i }, a, (e) => ({ [n]: e }));
					em(e, a) ? l[n] = t({
						sx: a,
						theme: i,
						nested: !0
					}) : l = Zf(l, e);
				}
				else l = Zf(l, e(n, a, i, o));
			}), !a && i.modularCssLayers ? { "@layer sx": Gf(i, rp(c, l)) } : Gf(i, rp(c, l));
		}
		return Array.isArray(r) ? r.map(s) : s(r);
	}
	return t;
}
var rm = nm();
rm.filterProps = ["sx"];
//#endregion
//#region node_modules/@mui/system/esm/createTheme/applyStyles.js
function im(e, t) {
	let n = this;
	if (n.vars) {
		if (!n.colorSchemes?.[e] || typeof n.getColorSchemeSelector != "function") return {};
		let r = n.getColorSchemeSelector(e);
		return r === "&" ? t : ((r.includes("data-") || r.includes(".")) && (r = `*:where(${r.replace(/\s*&$/, "")}) &`), { [r]: t });
	}
	return n.palette.mode === e ? t : {};
}
//#endregion
//#region node_modules/@mui/system/esm/createTheme/createTheme.js
function am(e = {}, ...t) {
	let { breakpoints: n = {}, palette: r = {}, spacing: i, shape: a = {}, ...o } = e, s = Wf(n), c = Tp(i), l = Hf({
		breakpoints: s,
		direction: "ltr",
		components: {},
		palette: {
			mode: "light",
			...r
		},
		spacing: c,
		shape: {
			...Yf,
			...a
		}
	}, o);
	return l = Jf(l), l.applyStyles = im, l = t.reduce((e, t) => Hf(e, t), l), l.unstable_sxConfig = {
		...$p,
		...o?.unstable_sxConfig
	}, l.unstable_sx = function(e) {
		return rm({
			sx: e,
			theme: this
		});
	}, l;
}
//#endregion
//#region node_modules/@mui/utils/esm/getDisplayName/getDisplayName.js
function om(e, t = "") {
	return e.displayName || e.name || t;
}
function sm(e, t, n) {
	let r = om(t);
	return e.displayName || (r === "" ? n : `${n}(${r})`);
}
function cm(e) {
	if (e != null) {
		if (typeof e == "string") return e;
		if (typeof e == "function") return om(e, "Component");
		if (typeof e == "object") switch (e.$$typeof) {
			case zf.ForwardRef: return sm(e, e.render, "ForwardRef");
			case zf.Memo: return sm(e, e.type, "memo");
			default: return;
		}
	}
}
//#endregion
//#region node_modules/@mui/system/esm/preprocessStyles.js
function lm(e) {
	let { variants: t, ...n } = e, r = {
		variants: t,
		style: If(n),
		isProcessed: !0
	};
	return r.style === n || t && t.forEach((e) => {
		typeof e.style != "function" && (e.style = If(e.style));
	}), r;
}
//#endregion
//#region node_modules/@mui/system/esm/createStyled/createStyled.js
var um = am();
function dm(e) {
	return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function fm(e, t) {
	return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function pm(e) {
	return e ? (t, n) => n[e] : null;
}
function mm(e, t, n) {
	e.theme = bm(e.theme) ? n : e.theme[t] || e.theme;
}
function hm(e, t, n) {
	let r = typeof t == "function" ? t(e) : t;
	if (Array.isArray(r)) return r.flatMap((t) => hm(e, t, n));
	if (Array.isArray(r?.variants)) {
		let t;
		if (r.isProcessed) t = n ? fm(r.style, n) : r.style;
		else {
			let { variants: e, ...i } = r;
			t = n ? fm(If(i), n) : i;
		}
		return gm(e, r.variants, [t], n);
	}
	return r?.isProcessed ? n ? fm(If(r.style), n) : r.style : n ? fm(If(r), n) : r;
}
function gm(e, t, n = [], r = void 0) {
	let i;
	variantLoop: for (let a = 0; a < t.length; a += 1) {
		let o = t[a];
		if (typeof o.props == "function") {
			if (i ??= {
				...e,
				...e.ownerState,
				ownerState: e.ownerState
			}, !o.props(i)) continue;
		} else for (let t in o.props) if (e[t] !== o.props[t] && e.ownerState?.[t] !== o.props[t]) continue variantLoop;
		typeof o.style == "function" ? (i ??= {
			...e,
			...e.ownerState,
			ownerState: e.ownerState
		}, n.push(r ? fm(If(o.style(i)), r) : o.style(i))) : n.push(r ? fm(If(o.style), r) : o.style);
	}
	return n;
}
function _m(e = {}) {
	let { themeId: t, defaultTheme: n = um, rootShouldForwardProp: r = dm, slotShouldForwardProp: i = dm } = e;
	function a(e) {
		mm(e, t, n);
	}
	return (e, t = {}) => {
		Pf(e, (e) => e.filter((e) => e !== rm));
		let { name: n, slot: o, skipVariantsResolver: s, skipSx: c, overridesResolver: l = pm(Sm(o)), ...u } = t, d = n && n.startsWith("Mui") || o ? "components" : "custom", f = s === void 0 ? o && o !== "Root" && o !== "root" || !1 : s, p = c || !1, m = dm;
		o === "Root" || o === "root" ? m = r : o ? m = i : xm(e) && (m = void 0);
		let h = Nf(e, {
			shouldForwardProp: m,
			label: ym(n, o),
			...u
		}), g = (e) => {
			if (e.__emotion_real === e) return e;
			if (typeof e == "function") return function(t) {
				return hm(t, e, t.theme.modularCssLayers ? d : void 0);
			};
			if (Bf(e)) {
				let t = lm(e);
				return function(e) {
					return t.variants ? hm(e, t, e.theme.modularCssLayers ? d : void 0) : e.theme.modularCssLayers ? fm(t.style, d) : t.style;
				};
			}
			return e;
		}, _ = (...t) => {
			let r = [], i = t.map(g), s = [];
			if (r.push(a), n && l && s.push(function(e) {
				let t = e.theme.components?.[n]?.styleOverrides;
				if (!t) return null;
				let r = {};
				for (let n in t) r[n] = hm(e, t[n], e.theme.modularCssLayers ? "theme" : void 0);
				return l(e, r);
			}), n && !f && s.push(function(e) {
				let t = e.theme?.components?.[n]?.variants;
				return t ? gm(e, t, [], e.theme.modularCssLayers ? "theme" : void 0) : null;
			}), p || s.push(rm), Array.isArray(i[0])) {
				let e = i.shift(), t = Array(r.length).fill(""), n = Array(s.length).fill(""), a;
				a = [
					...t,
					...e,
					...n
				], a.raw = [
					...t,
					...e.raw,
					...n
				], r.unshift(a);
			}
			let c = h(...r, ...i, ...s);
			return e.muiName && (c.muiName = e.muiName), process.env.NODE_ENV !== "production" && (c.displayName = vm(n, o, e)), c;
		};
		return h.withConfig && (_.withConfig = h.withConfig), _;
	};
}
function vm(e, t, n) {
	return e ? `${e}${ip(t || "")}` : `Styled(${cm(n)})`;
}
function ym(e, t) {
	let n;
	return process.env.NODE_ENV !== "production" && e && (n = `${e}-${Sm(t || "Root")}`), n;
}
function bm(e) {
	for (let t in e) return !1;
	return !0;
}
function xm(e) {
	return typeof e == "string" && e.charCodeAt(0) > 96;
}
function Sm(e) {
	return e && e.charAt(0).toLowerCase() + e.slice(1);
}
//#endregion
//#region node_modules/@mui/system/esm/styled/styled.js
var Cm = _m();
//#endregion
//#region node_modules/@mui/system/esm/useThemeProps/getThemeProps.js
function wm(e) {
	let { theme: t, name: n, props: r } = e;
	return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : Bo(t.components[n].defaultProps, r);
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/virtualization/GridVirtualScrollerContent.js
var Tm = (e, t) => {
	let { classes: n } = e;
	return Bi({ root: ["virtualScrollerContent", t && "virtualScrollerContent--overflowed"] }, jn, n);
}, Em = Cm("div", {
	name: "MuiDataGrid",
	slot: "VirtualScrollerContent",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [t.virtualScrollerContent, n.overflowedContent && t["virtualScrollerContent--overflowed"]];
	}
})({}), Dm = z(function(e, t) {
	let n = B(), r = !n.autoHeight && e.style?.minHeight === "auto", i = Tm(n, r);
	return /* @__PURE__ */ E(Em, L({}, e, {
		ownerState: {
			classes: n.classes,
			overflowedContent: r
		},
		className: xt(i.root, e.className),
		ref: t
	}));
});
process.env.NODE_ENV !== "production" && (Dm.displayName = "GridVirtualScrollerContent");
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/virtualization/GridVirtualScrollerFiller.js
var Om = I("div", {
	slot: "internal",
	shouldForwardProp: void 0
})({
	display: "flex",
	flexDirection: "row",
	width: "var(--DataGrid-rowWidth)",
	boxSizing: "border-box"
}), km = I("div", {
	slot: "internal",
	shouldForwardProp: void 0
})({
	position: "sticky",
	height: "100%",
	boxSizing: "border-box",
	borderTop: "1px solid var(--rowBorderColor)",
	backgroundColor: H.cell.background.pinned
}), Am = I(km, { slot: "internal" })({ left: 0 }), jm = I(km, { slot: "internal" })({ right: 0 }), Mm = I("div", {
	slot: "internal",
	shouldForwardProp: void 0
})({
	flexGrow: 1,
	borderTop: "1px solid var(--rowBorderColor)"
});
function Nm({ rowsLength: e }) {
	let { viewportOuterSize: t, minimumSize: n, hasScrollX: r, hasScrollY: i, scrollbarSize: a, leftPinnedWidth: o, rightPinnedWidth: s } = W(V(), ja), c = r ? a : 0, l = t.height - n.height > 0;
	return c === 0 && !l ? null : /* @__PURE__ */ D(Om, {
		className: U.filler,
		role: "presentation",
		style: {
			height: c,
			"--rowBorderColor": e === 0 ? "transparent" : "var(--DataGrid-rowBorderColor)"
		},
		children: [
			o > 0 && /* @__PURE__ */ E(Am, {
				className: U["filler--pinnedLeft"],
				style: { width: o }
			}),
			/* @__PURE__ */ E(Mm, {}),
			s > 0 && /* @__PURE__ */ E(jm, {
				className: U["filler--pinnedRight"],
				style: { width: s + (i ? a : 0) }
			})
		]
	});
}
var Pm = Co(Nm), Fm = (e) => {
	let { classes: t } = e;
	return Bi({ root: ["virtualScrollerRenderZone"] }, jn, t);
}, Im = Cm("div", {
	name: "MuiDataGrid",
	slot: "VirtualScrollerRenderZone"
})({
	position: "absolute",
	display: "flex",
	flexDirection: "column"
}), Lm = z(function(e, t) {
	let n = B(), r = Fm(n);
	return /* @__PURE__ */ E(Im, L({ ownerState: n }, e, {
		className: xt(r.root, e.className),
		ref: t
	}));
});
process.env.NODE_ENV !== "production" && (Lm.displayName = "GridVirtualScrollerRenderZone");
var Rm = G(ka((e) => e.columnResize), (e) => e.resizingColumnField), zm = {
	includeHeaders: !0,
	includeHeaderFilters: !1,
	includeOutliers: !1,
	outliersFactor: 1.5,
	expand: !1,
	disableColumnVirtualization: !0
}, Bm = ka((e) => e.editRows), Vm = G(Bm, (e, { rowId: t, editMode: n }) => n === bs.Row && !!e[t]), Hm = G(Bm, (e, { rowId: t, field: n }) => e[t]?.[n] ?? null), Um = ka((e) => e.preferencePanel), Wm = G(Um, (e, t) => !!(e.open && e.labelId === t)), Gm = /* @__PURE__ */ function(e) {
	return e.filters = "filters", e.columns = "columns", e.aiAssistant = "aiAssistant", e;
}(Gm || {}), Km = {
	initialize: qm,
	use: Jm,
	selectors: {}
};
function qm(e) {
	return { colspanMap: /* @__PURE__ */ new Map() };
}
function Jm(e, t, n) {
	let r = t.colspan?.getColspan, i = () => {
		e.state.colspanMap = /* @__PURE__ */ new Map();
	}, a = (t, n) => e.state.colspanMap.get(t)?.[n], o = wt(r ? (t, n, i, a) => {
		for (let o = n; o < i; o += 1) {
			let s = Ym(e.state.colspanMap, o, t, n, i, a, r);
			s.colSpan > 1 && (o += s.colSpan - 1);
		}
	} : () => {});
	return n.calculateColSpan = o, {
		resetColSpan: i,
		getCellColSpanInfo: a,
		calculateColSpan: o
	};
}
function Ym(e, t, n, r, i, a, o) {
	let s = a.length, c = a[t], l = o(n, c, t);
	if (!l || l === 1) return Xm(e, n, t, {
		spannedByColSpan: !1,
		cellProps: {
			colSpan: 1,
			width: c.computedWidth
		}
	}), { colSpan: 1 };
	let u = c.computedWidth;
	for (let o = 1; o < l; o += 1) {
		let c = t + o;
		if (c >= r && c < i) {
			let r = a[c];
			u += r.computedWidth, Xm(e, n, t + o, {
				spannedByColSpan: !0,
				rightVisibleCellIndex: Math.min(t + l, s - 1),
				leftVisibleCellIndex: t
			});
		}
		Xm(e, n, t, {
			spannedByColSpan: !1,
			cellProps: {
				colSpan: l,
				width: u
			}
		});
	}
	return { colSpan: l };
}
function Xm(e, t, n, r) {
	let i = e.get(t);
	i || (i = {}, e.set(t, i)), i[n] = r;
}
//#endregion
//#region node_modules/@mui/utils/esm/ownerDocument/ownerDocument.js
function Zm(e) {
	return e && e.ownerDocument || document;
}
//#endregion
//#region node_modules/@mui/x-internals/esm/throttle/throttle.js
function Qm(e, t = 166) {
	let n, r, i = () => {
		n = void 0, e(...r);
	};
	function a(...e) {
		r = e, n === void 0 && (n = setTimeout(i, t));
	}
	return a.clear = () => {
		clearTimeout(n), n = void 0;
	}, a;
}
//#endregion
//#region node_modules/@mui/x-internals/esm/isDeepEqual/isDeepEqual.js
function $m(e, t) {
	if (e === t) return !0;
	if (e && t && typeof e == "object" && typeof t == "object") {
		if (e.constructor !== t.constructor) return !1;
		if (Array.isArray(e)) {
			let n = e.length;
			if (n !== t.length) return !1;
			for (let r = 0; r < n; r += 1) if (!$m(e[r], t[r])) return !1;
			return !0;
		}
		if (e instanceof Map && t instanceof Map) {
			if (e.size !== t.size) return !1;
			let n = Array.from(e.entries());
			for (let e = 0; e < n.length; e += 1) if (!t.has(n[e][0])) return !1;
			for (let e = 0; e < n.length; e += 1) {
				let r = n[e];
				if (!$m(r[1], t.get(r[0]))) return !1;
			}
			return !0;
		}
		if (e instanceof Set && t instanceof Set) {
			if (e.size !== t.size) return !1;
			let n = Array.from(e.entries());
			for (let e = 0; e < n.length; e += 1) if (!t.has(n[e][0])) return !1;
			return !0;
		}
		if (ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
			let n = e.length;
			if (n !== t.length) return !1;
			for (let r = 0; r < n; r += 1) if (e[r] !== t[r]) return !1;
			return !0;
		}
		if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags;
		if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === t.valueOf();
		if (e.toString !== Object.prototype.toString) return e.toString() === t.toString();
		let n = Object.keys(e), r = n.length;
		if (r !== Object.keys(t).length) return !1;
		for (let e = 0; e < r; e += 1) if (!Object.prototype.hasOwnProperty.call(t, n[e])) return !1;
		for (let i = 0; i < r; i += 1) {
			let r = n[i];
			if (!$m(e[r], t[r])) return !1;
		}
		return !0;
	}
	return e !== e && t !== t;
}
//#endregion
//#region node_modules/@mui/x-internals/esm/math/index.js
function eh(e, t) {
	return Math.round(e * 10 ** t) / 10 ** t;
}
//#endregion
//#region node_modules/@mui/x-virtualizer/esm/models/core.js
var th = {
	EMPTY: {
		width: 0,
		height: 0
	},
	equals: (e, t) => e.width === t.width && e.height === t.height
}, nh = { EMPTY: {
	top: [],
	bottom: []
} }, rh = { EMPTY: {
	left: [],
	right: []
} }, ih = {
	EMPTY: {
		top: 0,
		left: 0
	},
	equals: (e, t) => e.top === t.top && e.left === t.left
}, ah = /* @__PURE__ */ function(e) {
	return e[e.NONE = 0] = "NONE", e[e.UP = 1] = "UP", e[e.DOWN = 2] = "DOWN", e[e.LEFT = 3] = "LEFT", e[e.RIGHT = 4] = "RIGHT", e;
}({});
(function(e) {
	function t(e, t) {
		return e === 0 && t === 0 ? ah.NONE : Math.abs(t) >= Math.abs(e) ? t > 0 ? ah.DOWN : ah.UP : e > 0 ? ah.RIGHT : ah.LEFT;
	}
	e.forDelta = t;
})(ah ||= {});
//#endregion
//#region node_modules/@mui/x-virtualizer/esm/features/dimensions.js
var oh = {
	isReady: !1,
	root: th.EMPTY,
	viewportOuterSize: th.EMPTY,
	viewportInnerSize: th.EMPTY,
	contentSize: th.EMPTY,
	minimumSize: th.EMPTY,
	hasScrollX: !1,
	hasScrollY: !1,
	scrollbarSize: 0,
	rowWidth: 0,
	rowHeight: 0,
	columnsTotalWidth: 0,
	leftPinnedWidth: 0,
	rightPinnedWidth: 0,
	topContainerHeight: 0,
	bottomContainerHeight: 0,
	autoHeight: !1,
	minimalContentHeight: void 0
}, sh = {
	rootSize: (e) => e.rootSize,
	dimensions: (e) => e.dimensions,
	rowHeight: (e) => e.dimensions.rowHeight,
	columnsTotalWidth: (e) => e.dimensions.columnsTotalWidth,
	contentHeight: (e) => e.dimensions.contentSize.height,
	autoHeight: (e) => e.dimensions.autoHeight,
	minimalContentHeight: (e) => e.dimensions.minimalContentHeight,
	rowsMeta: (e) => e.rowsMeta,
	rowPositions: (e) => e.rowsMeta.positions,
	columnPositions: ma((e, t) => {
		let n = [], r = 0;
		for (let e = 0; e < t.length; e += 1) n.push(r), r += t[e].computedWidth;
		return n;
	}),
	needsHorizontalScrollbar: (e) => e.dimensions.viewportOuterSize.width > 0 && e.dimensions.columnsTotalWidth > e.dimensions.viewportOuterSize.width
}, ch = {
	initialize: lh,
	use: uh,
	selectors: sh
};
function lh(e) {
	let t = L({}, oh, e.dimensions, {
		autoHeight: e.dimensions.autoHeight,
		minimalContentHeight: e.dimensions.minimalContentHeight
	}), { rowCount: n } = e, { rowHeight: r } = t, i = {
		currentPageTotalHeight: n * r,
		positions: Array.from({ length: n }, (e, t) => t * r),
		pinnedTopRowsTotalHeight: 0,
		pinnedBottomRowsTotalHeight: 0
	}, a = /* @__PURE__ */ new Map();
	return {
		rootSize: th.EMPTY,
		dimensions: t,
		rowsMeta: i,
		rowHeights: a
	};
}
function uh(e, t, n) {
	let r = O.useRef(!0), { layout: i, dimensions: { rowHeight: a, columnsTotalWidth: o, leftPinnedWidth: s, rightPinnedWidth: c, topPinnedHeight: l, bottomPinnedHeight: u }, onResize: d } = t, f = O.useCallback((n) => {
		if (n && (r.current = !1), r.current) return;
		let f = i.refs.container.current, p = sh.rootSize(e.state), m = sh.rowsMeta(e.state), h = mh(f, t.dimensions.scrollbarSize), g = l + m.pinnedTopRowsTotalHeight, _ = u + m.pinnedBottomRowsTotalHeight, v = {
			width: o,
			height: eh(m.currentPageTotalHeight, 1)
		}, y, b, x = !1, S = !1;
		if (t.dimensions.autoHeight) S = !1, x = Math.round(o) > Math.round(p.width), y = {
			width: p.width,
			height: g + _ + v.height
		}, b = {
			width: Math.max(0, y.width - (S ? h : 0)),
			height: Math.max(0, y.height - (x ? h : 0))
		};
		else {
			y = {
				width: p.width,
				height: p.height
			}, b = {
				width: Math.max(0, y.width),
				height: Math.max(0, y.height - g - _)
			};
			let e = v, t = b, n = e.width > t.width, r = e.height > t.height;
			(n || r) && (S = r, x = e.width + (S ? h : 0) > t.width, x && (S = e.height + h > t.height)), S && (b.width -= h), x && (b.height -= h);
		}
		t.disableHorizontalScroll && (x = !1), t.disableVerticalScroll && (S = !1);
		let C = Math.max(y.width, o + (S ? h : 0)), w = {
			width: o,
			height: g + v.height + _
		}, T = {
			isReady: !0,
			root: p,
			viewportOuterSize: y,
			viewportInnerSize: b,
			contentSize: v,
			minimumSize: w,
			hasScrollX: x,
			hasScrollY: S,
			scrollbarSize: h,
			rowWidth: C,
			rowHeight: a,
			columnsTotalWidth: o,
			leftPinnedWidth: s,
			rightPinnedWidth: c,
			topContainerHeight: g,
			bottomContainerHeight: _,
			autoHeight: t.dimensions.autoHeight,
			minimalContentHeight: t.dimensions.minimalContentHeight
		}, E = e.state.dimensions;
		$m(E, T) || (e.update({ dimensions: T }), d?.(T.root));
	}, [
		e,
		i.refs.container,
		t.dimensions.scrollbarSize,
		t.dimensions.autoHeight,
		t.dimensions.minimalContentHeight,
		t.disableHorizontalScroll,
		t.disableVerticalScroll,
		d,
		a,
		o,
		s,
		c,
		l,
		u
	]), { resizeThrottleMs: p } = t, m = wt(f), h = O.useMemo(() => p > 0 ? Qm(m, p) : void 0, [p, m]);
	return O.useEffect(() => h?.clear, [h]), Ct(f, [f]), Ct(() => {
		e.update({ dimensions: L({}, e.state.dimensions, {
			autoHeight: t.dimensions.autoHeight,
			minimalContentHeight: t.dimensions.minimalContentHeight
		}) });
	}, [
		e,
		t.dimensions.autoHeight,
		t.dimensions.minimalContentHeight
	]), {
		updateDimensions: f,
		debouncedUpdateDimensions: h,
		rowsMeta: dh(e, t, f)
	};
}
function dh(e, t, n) {
	let r = e.state.rowHeights, { rows: i, getRowHeight: a, getRowSpacing: o, getEstimatedRowHeight: s } = t, c = O.useRef(-1), l = O.useRef(!1), u = O.useRef(!1), d = t.pinnedRows, f = ya(e, sh.rowHeight), p = wt((t) => {
		let n = r.get(t);
		return n === void 0 && (n = {
			content: e.state.dimensions.rowHeight,
			spacingTop: 0,
			spacingBottom: 0,
			detail: 0,
			autoHeight: !1,
			needsFirstMeasurement: !0
		}, r.set(t, n)), n;
	}), { applyRowHeight: m } = t, h = O.useCallback((t) => {
		let n = sh.dimensions(e.state), r = n.rowHeight, i = p(t.id);
		if (!a) i.content = r, i.needsFirstMeasurement = !1;
		else {
			let e = a(t);
			e === "auto" ? (i.needsFirstMeasurement && (i.content = (s ? s(t) : r) ?? r), l.current = !0, i.autoHeight = !0) : (i.content = e ?? n.rowHeight, i.needsFirstMeasurement = !1, i.autoHeight = !1);
		}
		if (o) {
			let e = o(t);
			i.spacingTop = e.top ?? 0, i.spacingBottom = e.bottom ?? 0;
		} else i.spacingTop = 0, i.spacingBottom = 0;
		return m?.(i, t), i;
	}, [
		e,
		a,
		p,
		s,
		f,
		o,
		m
	]), g = O.useCallback(() => {
		l.current = !1;
		let t = d?.top.reduce((e, t) => {
			let n = h(t);
			return e + n.content + n.spacingTop + n.spacingBottom + n.detail;
		}, 0) ?? 0, r = d?.bottom.reduce((e, t) => {
			let n = h(t);
			return e + n.content + n.spacingTop + n.spacingBottom + n.detail;
		}, 0) ?? 0, a = [], o = i.reduce((e, t) => {
			a.push(e);
			let n = h(t);
			return e + (n.content + n.spacingTop + n.spacingBottom + n.detail);
		}, 0);
		l.current || (c.current = Infinity);
		let s = t !== e.state.rowsMeta.pinnedTopRowsTotalHeight || r !== e.state.rowsMeta.pinnedBottomRowsTotalHeight || o !== e.state.rowsMeta.currentPageTotalHeight, f = {
			currentPageTotalHeight: o,
			positions: a,
			pinnedTopRowsTotalHeight: t,
			pinnedBottomRowsTotalHeight: r
		};
		e.set("rowsMeta", f), s && n(), u.current = !0;
	}, [
		e,
		d,
		i,
		h,
		n
	]), _ = wt(g), v = (t) => r.get(t)?.content ?? sh.rowHeight(e.state), y = (e, t) => {
		let n = p(e), r = n.content !== t;
		n.needsFirstMeasurement = !1, n.content = t, u.current &&= !r;
	}, b = (e) => r.get(e)?.autoHeight ?? !1, x = () => c.current, S = (e) => {
		l.current && e > c.current && (c.current = e);
	}, C = () => {
		r.clear(), g();
	}, w = Vn(() => typeof ResizeObserver > "u" ? void 0 : new ResizeObserver((e) => {
		for (let n = 0; n < e.length; n += 1) {
			let r = e[n], i = r.borderBoxSize && r.borderBoxSize.length > 0 ? r.borderBoxSize[0].blockSize : r.contentRect.height, a = r.target.__mui_id;
			if (t.focusedVirtualCell?.()?.id === a && i === 0) return;
			y(a, i);
		}
		u.current || requestAnimationFrame(() => {
			_();
		});
	})).current;
	return Ct(() => {
		g();
	}, [g]), {
		getRowHeight: v,
		setLastMeasuredRowIndex: S,
		storeRowHeightMeasurement: y,
		hydrateRowsMeta: g,
		observeRowHeight: (e, t) => (e.__mui_id = t, w?.observe(e), () => w?.unobserve(e)),
		rowHasAutoHeight: b,
		getRowHeightEntry: p,
		getLastMeasuredRowIndex: x,
		resetRowHeights: C
	};
}
function fh(e, t, n) {
	if (!e) return;
	let r = e.getBoundingClientRect(), i = {
		width: eh(r.width, 1),
		height: eh(r.height, 1)
	};
	if ((t.state.rootSize === th.EMPTY || !th.equals(i, t.state.rootSize)) && n(i), typeof ResizeObserver > "u") return;
	let a = new ResizeObserver(([e]) => {
		if (!e) return;
		let r = {
			width: eh(e.contentRect.width, 1),
			height: eh(e.contentRect.height, 1)
		};
		th.equals(r, t.state.rootSize) || n(r);
	});
	return a.observe(e), () => {
		a.disconnect();
	};
}
var ph = /* @__PURE__ */ new WeakMap();
function mh(e, t) {
	if (t !== void 0) return t;
	if (e === null) return 0;
	let n = ph.get(e);
	if (n !== void 0) return n;
	let r = Zm(e).createElement("div");
	r.style.width = "99px", r.style.height = "99px", r.style.position = "absolute", r.style.overflow = "scroll", r.className = "scrollDiv", e.appendChild(r);
	let i = r.offsetWidth - r.clientWidth;
	return e.removeChild(r), ph.set(e, i), i;
}
var hh = (typeof navigator < "u" ? navigator.userAgent.toLowerCase() : "empty").includes("firefox"), gh = typeof window < "u" && /jsdom|HappyDOM/.test(window.navigator.userAgent), _h = (e, t, n) => Math.max(t, Math.min(n, e)), vh = 50, yh = {
	top: 0,
	left: 0
}, bh = Object.freeze(/* @__PURE__ */ new Map()), xh = {
	firstRowIndex: 0,
	lastRowIndex: 0,
	firstColumnIndex: 0,
	lastColumnIndex: 0
}, Sh = (() => {
	let e = pa((e) => e.virtualization.renderContext.firstRowIndex);
	return {
		store: pa((e) => e.virtualization),
		renderContext: pa((e) => e.virtualization.renderContext),
		enabledForRows: pa((e) => e.virtualization.enabledForRows),
		enabledForColumns: pa((e) => e.virtualization.enabledForColumns),
		offsetTop: pa(ch.selectors.rowPositions, e, (e, t) => e[t] ?? 0),
		context: pa((e) => e.virtualization.context),
		scrollPosition: pa((e) => e.virtualization.scrollPosition)
	};
})(), Ch = {
	initialize: wh,
	use: Th,
	selectors: Sh
};
function wh(e) {
	return {
		virtualization: L({
			enabled: !gh,
			enabledForRows: !gh,
			enabledForColumns: !gh,
			renderContext: xh,
			props: e.layout.constructor.elements.reduce((e, t) => (e[t], e), {}),
			context: {},
			scrollPosition: { current: ih.EMPTY }
		}, e.initialState?.virtualization),
		getters: null
	};
}
function Th(e, t, n) {
	let { layout: r, dimensions: { rowHeight: i, columnsTotalWidth: a = 0 }, virtualization: { isRtl: o = !1, rowBufferPx: s = 150, columnBufferPx: c = 150 }, colspan: l, initialState: u, rows: d, range: f, columns: p, pinnedRows: m = nh.EMPTY, pinnedColumns: h = rh.EMPTY, onWheel: g, onTouchMove: _, onRenderContextChange: v, onScrollChange: y, scrollReset: b, renderRow: x, renderInfiniteLoadingTrigger: S } = t, C = m.bottom.length > 0, [w, T] = O.useState(bh), E = O.useRef(!1), D = O.useRef(!1), k = ya(e, Sh.renderContext), A = ya(e, Sh.enabledForRows), j = ya(e, Sh.enabledForColumns), M = ya(e, ch.selectors.contentHeight), N = O.useRef(u?.scroll ?? yh), P = O.useRef(!1), ee = O.useRef(yh), te = O.useRef(xh), ne = zo(), F = O.useRef(void 0), re = Vn(() => Lh(o, s, c, i * 15, vh * 6)).current, ie = O.useCallback((t) => {
		Ph(t, e.state.virtualization.renderContext) || e.set("virtualization", L({}, e.state.virtualization, {
			renderContext: t,
			scrollPosition: { current: L({}, N.current) }
		}));
		let n = ch.selectors.dimensions(e.state).isReady, r = t.firstRowIndex !== te.current.firstRowIndex || t.lastRowIndex !== te.current.lastRowIndex;
		n && r && (te.current = t, v?.(t)), ee.current = N.current;
	}, [e, v]), ae = wt(() => {
		let a = r.refs.scroller.current;
		if (!a) return;
		let l = ch.selectors.dimensions(e.state), u = Math.ceil(l.contentSize.height - l.viewportInnerSize.height), d = Math.ceil(l.contentSize.width - l.viewportInnerSize.width), f = {
			top: _h(a.scrollTop, 0, u),
			left: o ? _h(a.scrollLeft, -Math.abs(d), 0) : _h(a.scrollLeft, 0, d)
		}, p = f.left - N.current.left, m = f.top - N.current.top, h = p !== 0 || m !== 0;
		N.current = f;
		let g = h ? ah.forDelta(p, m) : ah.NONE, _ = Math.abs(N.current.top - ee.current.top), v = Math.abs(N.current.left - ee.current.left), y = _ >= i || v >= vh, b = re.direction !== g;
		if (!(y || b)) return e.set("virtualization", L({}, e.state.virtualization, { scrollPosition: { current: L({}, N.current) } })), k;
		if (b) switch (g) {
			case ah.NONE:
			case ah.LEFT:
			case ah.RIGHT:
				F.current = void 0;
				break;
			default:
				F.current = k;
				break;
		}
		re.direction = g, re.buffer = Ih(o, g, s, c, i * 15, vh * 6);
		let x = Oh(Dh(e, t, n, A, j), N.current, re);
		return Ph(x, k) ? e.set("virtualization", L({}, e.state.virtualization, { scrollPosition: { current: L({}, N.current) } })) : (tt.flushSync(() => {
			ie(x);
		}), ne.start(1e3, ae)), x;
	}), oe = () => {
		if (!ch.selectors.dimensions(e.state).isReady && (A || j)) return;
		let r = Oh(Dh(e, t, n, A, j), N.current, re);
		F.current = void 0, ie(r);
	}, se = wt(oe);
	Ta(e, ch.selectors.dimensions, (e, t) => {
		t.isReady && oe();
	}), Ct(() => {
		E.current &&= (oe(), !1);
	});
	let ce = () => {
		E.current = !0;
	}, le = wt(() => {
		if (P.current) {
			P.current = !1;
			return;
		}
		let e = ae();
		e && y?.(N.current, e);
	}), ue = (r = {}, i) => {
		if (!r.rows && !f) return [];
		let o = k;
		r.renderContext && (o = r.renderContext, o.firstColumnIndex = k.firstColumnIndex, o.lastColumnIndex = k.lastColumnIndex);
		let s = !C && r.position === void 0 || C && r.position === "bottom", c = r.position !== void 0, u;
		switch (r.position) {
			case "top":
				u = 0;
				break;
			case "bottom":
				u = m.top.length + d.length;
				break;
			case void 0:
			default:
				u = m.top.length;
				break;
		}
		let g = r.rows ?? d, _ = o.firstRowIndex, v = Math.min(o.lastRowIndex, g.length), y = r.rows ? Rh(0, r.rows.length) : Rh(_, v), b = -1, T = t.focusedVirtualCell?.();
		!c && T && (T.rowIndex < _ && (y.unshift(T.rowIndex), b = T.rowIndex), T.rowIndex > v && (y.push(T.rowIndex), b = T.rowIndex));
		let E = [], D = ch.selectors.columnPositions(e.state, p);
		return y.forEach((e) => {
			let { id: t, model: m } = g[e];
			if (i && !i[t]) return;
			let _ = (f?.firstRowIndex || 0) + u + e;
			if (l?.enabled) {
				let e = h.left.length, r = p.length - h.right.length;
				n.calculateColSpan(t, e, r, p), h.left.length > 0 && n.calculateColSpan(t, 0, h.left.length, p), h.right.length > 0 && n.calculateColSpan(t, p.length - h.right.length, p.length, p);
			}
			let v = n.rowsMeta.rowHasAutoHeight(t) ? "auto" : n.rowsMeta.getRowHeight(t), y = !1;
			r.position === void 0 && (y = e === 0);
			let C = !1, O = e === g.length - 1;
			s && (c ? C = O : e === d.length - 1 && (C = !0));
			let k = o;
			F.current && e >= F.current.firstRowIndex && e < F.current.lastRowIndex && (k = F.current);
			let A = e === b, j = T?.rowIndex === _, M = Fh(D, k, h.left.length), N = O && r.position === "top", P = k.firstColumnIndex, ee = k.lastColumnIndex;
			if (E.push(x({
				id: t,
				model: m,
				rowIndex: _,
				offsetLeft: M,
				columnsTotalWidth: a,
				baseRowHeight: v,
				firstColumnIndex: P,
				lastColumnIndex: ee,
				focusedColumnIndex: j ? T.columnIndex : void 0,
				isFirstVisible: y,
				isLastVisible: C,
				isVirtualFocusRow: A,
				showBottomBorder: N
			})), A) return;
			let te = w.get(t);
			te && E.push(te), r.position === void 0 && O && S && E.push(S(t));
		}), E;
	}, de = O.useRef(null);
	Ct(() => {
		D.current && se();
	}, [
		j,
		A,
		se
	]), Ct(() => {
		r.refs.scroller.current && (r.refs.scroller.current.scrollLeft = 0);
	}, [r.refs.scroller, b]), ff(k !== xh, () => {
		if (y?.(N.current, k), D.current = !0, u?.scroll && r.refs.scroller.current) {
			let e = r.refs.scroller.current, { top: t, left: n } = u.scroll, i = {
				top: !(t > 0),
				left: !(n > 0)
			};
			!i.left && a && (e.scrollLeft = n, i.left = !0, P.current = !0), !i.top && M && (e.scrollTop = t, P.current = !0), (!i.top || !i.left) && (de.current = (r, a) => {
				!i.left && r && (e.scrollLeft = n, i.left = !0, P.current = !0), !i.top && a && (e.scrollTop = t, i.top = !0, P.current = !0), i.left && i.top && (de.current = null);
			});
		}
	}), Ta(e, ch.selectors.dimensions, oe), Ct(() => {
		r.refs.scroller && de.current?.(a, M);
	}, [
		r.refs.scroller,
		a,
		M
	]);
	let I = O.useRef(!0), fe = {
		containerRef: Eh((t) => {
			r.refs.container.current = t;
			let i = fh(t, e, (t) => {
				t.width === 0 && t.height === 0 && e.state.rootSize.height !== 0 && e.state.rootSize.width !== 0 || (e.state.rootSize = t, I.current || !n.debouncedUpdateDimensions ? (n.updateDimensions(I.current), I.current = !1) : n.debouncedUpdateDimensions());
			});
			return () => {
				i?.(), r.refs.container.current = null;
			};
		}),
		scrollerRef: Eh((e) => {
			r.refs.scroller.current = e;
			let t = { passive: !0 };
			return e.addEventListener("scroll", le, t), e.addEventListener("wheel", g, t), e.addEventListener("touchmove", _, t), () => {
				e.removeEventListener("scroll", le, t), e.removeEventListener("wheel", g, t), e.removeEventListener("touchmove", _, t), r.refs.scroller.current = null;
			};
		})
	}, pe = r.use(e, t, n, fe);
	return L({
		getters: L({
			setPanels: T,
			getRows: ue,
			rows: t.rows
		}, pe),
		setPanels: T,
		forceUpdateRenderContext: oe,
		scheduleUpdateRenderContext: ce
	}, Bh());
}
function Eh(e) {
	let t = O.useRef(void 0);
	return wt((n) => {
		if (!n) {
			t.current?.();
			return;
		}
		if (t.current = e(n), Tt >= 19) return t.current;
	});
}
function Dh(e, t, n, r, i) {
	let a = ch.selectors.dimensions(e.state), o = t.rows, s = t.range, c = t.columns, l = n.getHiddenCellsOrigin(), u = t.rows.at(-1)?.id, d = c.at(-1);
	return {
		api: n,
		enabledForRows: r,
		enabledForColumns: i,
		autoHeight: a.autoHeight,
		rowBufferPx: t.virtualization.rowBufferPx,
		columnBufferPx: t.virtualization.columnBufferPx,
		leftPinnedWidth: a.leftPinnedWidth,
		columnsTotalWidth: a.columnsTotalWidth,
		viewportInnerWidth: a.viewportInnerSize.width,
		viewportInnerHeight: a.viewportInnerSize.height,
		lastRowHeight: u === void 0 ? 0 : n.rowsMeta.getRowHeight(u),
		lastColumnWidth: d?.computedWidth ?? 0,
		rowsMeta: ch.selectors.rowsMeta(e.state),
		columnPositions: ch.selectors.columnPositions(e.state, t.columns),
		rows: o,
		range: s,
		pinnedColumns: t.pinnedColumns,
		columns: c,
		hiddenCellsOriginMap: l,
		virtualizeColumnsWithAutoRowHeight: t.virtualizeColumnsWithAutoRowHeight
	};
}
function Oh(e, t, n) {
	let r = {
		firstRowIndex: 0,
		lastRowIndex: e.rows.length,
		firstColumnIndex: 0,
		lastColumnIndex: e.columns.length
	}, { top: i, left: a } = t, o = Math.abs(a) + e.leftPinnedWidth;
	if (e.enabledForRows) {
		let t = Math.min(kh(e, i, {
			atStart: !0,
			lastPosition: e.rowsMeta.positions[e.rowsMeta.positions.length - 1] + e.lastRowHeight
		}), e.rowsMeta.positions.length - 1), n = e.hiddenCellsOriginMap[t];
		if (n) {
			let e = Math.min(...Object.values(n));
			t = Math.min(t, e);
		}
		let a = e.autoHeight ? t + e.rows.length : kh(e, i + e.viewportInnerHeight);
		r.firstRowIndex = t, r.lastRowIndex = a;
	}
	if (e.enabledForColumns) {
		let t = 0, i = e.columnPositions.length, a = !1, [s, c] = Nh({
			firstIndex: r.firstRowIndex,
			lastIndex: r.lastRowIndex,
			minFirstIndex: 0,
			maxLastIndex: e.rows.length,
			bufferBefore: n.buffer.rowBefore,
			bufferAfter: n.buffer.rowAfter,
			positions: e.rowsMeta.positions,
			lastSize: e.lastRowHeight
		});
		if (!e.virtualizeColumnsWithAutoRowHeight) for (let t = s; t < c && !a; t += 1) {
			let n = e.rows[t];
			a = e.api.rowsMeta.rowHasAutoHeight(n.id);
		}
		(!a || e.virtualizeColumnsWithAutoRowHeight) && (t = jh(o, e.columnPositions, {
			atStart: !0,
			lastPosition: e.columnsTotalWidth
		}), i = jh(o + e.viewportInnerWidth, e.columnPositions)), r.firstColumnIndex = t, r.lastColumnIndex = i;
	}
	return Ah(e, r, n);
}
function kh(e, t, n) {
	let r = e.api.rowsMeta.getLastMeasuredRowIndex(), i = r === Infinity;
	e.range?.lastRowIndex && !i && (i = r >= e.range.lastRowIndex);
	let a = _h(r - (e.range?.firstRowIndex || 0), 0, e.rowsMeta.positions.length);
	return i || e.rowsMeta.positions[a] >= t ? jh(t, e.rowsMeta.positions, n) : Mh(t, e.rowsMeta.positions, a, n);
}
function Ah(e, t, n) {
	let [r, i] = Nh({
		firstIndex: t.firstRowIndex,
		lastIndex: t.lastRowIndex,
		minFirstIndex: 0,
		maxLastIndex: e.rows.length,
		bufferBefore: n.buffer.rowBefore,
		bufferAfter: n.buffer.rowAfter,
		positions: e.rowsMeta.positions,
		lastSize: e.lastRowHeight
	}), [a, o] = Nh({
		firstIndex: t.firstColumnIndex,
		lastIndex: t.lastColumnIndex,
		minFirstIndex: e.pinnedColumns?.left.length ?? 0,
		maxLastIndex: e.columns.length - (e.pinnedColumns?.right.length ?? 0),
		bufferBefore: n.buffer.columnBefore,
		bufferAfter: n.buffer.columnAfter,
		positions: e.columnPositions,
		lastSize: e.lastColumnWidth
	});
	return {
		firstRowIndex: r,
		lastRowIndex: i,
		firstColumnIndex: zh({
			api: e.api,
			firstColumnToRender: a,
			firstRowToRender: r,
			lastRowToRender: i,
			visibleRows: e.rows
		}),
		lastColumnIndex: o
	};
}
function jh(e, t, n = void 0, r = 0, i = t.length) {
	if (t.length <= 0) return -1;
	if (r >= i) return r;
	let a = r + Math.floor((i - r) / 2), o = t[a], s;
	return s = n?.atStart ? e - ((a === t.length - 1 ? n.lastPosition : t[a + 1]) - o) < o : e <= o, s ? jh(e, t, n, r, a) : jh(e, t, n, a + 1, i);
}
function Mh(e, t, n, r = void 0) {
	let i = 1;
	for (; n < t.length && Math.abs(t[n]) < e;) n += i, i *= 2;
	return jh(e, t, r, Math.floor(n / 2), Math.min(n, t.length));
}
function Nh({ firstIndex: e, lastIndex: t, bufferBefore: n, bufferAfter: r, minFirstIndex: i, maxLastIndex: a, positions: o, lastSize: s }) {
	let c = o[e] - n, l = o[t] + r, u = jh(c, o, {
		atStart: !0,
		lastPosition: o[o.length - 1] + s
	}), d = jh(l, o);
	return [_h(u, i, a), _h(d, i, a)];
}
function Ph(e, t) {
	return e === t ? !0 : e.firstRowIndex === t.firstRowIndex && e.lastRowIndex === t.lastRowIndex && e.firstColumnIndex === t.firstColumnIndex && e.lastColumnIndex === t.lastColumnIndex;
}
function Fh(e, t, n) {
	let r = (e[t.firstColumnIndex] ?? 0) - (e[n] ?? 0);
	return Math.abs(r);
}
function Ih(e, t, n, r, i, a) {
	if (e) switch (t) {
		case ah.LEFT:
			t = ah.RIGHT;
			break;
		case ah.RIGHT:
			t = ah.LEFT;
			break;
		default:
	}
	switch (t) {
		case ah.NONE: return {
			rowAfter: n,
			rowBefore: n,
			columnAfter: r,
			columnBefore: r
		};
		case ah.LEFT: return {
			rowAfter: 0,
			rowBefore: 0,
			columnAfter: 0,
			columnBefore: a
		};
		case ah.RIGHT: return {
			rowAfter: 0,
			rowBefore: 0,
			columnAfter: a,
			columnBefore: 0
		};
		case ah.UP: return {
			rowAfter: 0,
			rowBefore: i,
			columnAfter: 0,
			columnBefore: 0
		};
		case ah.DOWN: return {
			rowAfter: i,
			rowBefore: 0,
			columnAfter: 0,
			columnBefore: 0
		};
		default: throw Error("unreachable");
	}
}
function Lh(e, t, n, r, i) {
	return {
		direction: ah.NONE,
		buffer: Ih(e, ah.NONE, t, n, r, i)
	};
}
function Rh(e, t) {
	return Array.from({ length: t - e }).map((t, n) => e + n);
}
function zh({ api: e, firstColumnToRender: t, firstRowToRender: n, lastRowToRender: r, visibleRows: i }) {
	let a = t, o = !1;
	for (; !o && a >= 0;) {
		o = !0;
		for (let t = n; t < r; t += 1) if (i[t]) {
			let n = i[t].id, r = e.getCellColSpanInfo(n, a);
			if (r && r.spannedByColSpan && r.leftVisibleCellIndex < a) {
				a = r.leftVisibleCellIndex, o = !1;
				break;
			}
		}
	}
	return a;
}
function Bh() {
	return {
		getCellColSpanInfo: () => {
			throw Error("Unimplemented: colspan feature is required");
		},
		calculateColSpan: () => {
			throw Error("Unimplemented: colspan feature is required");
		},
		getHiddenCellsOrigin: () => {
			throw Error("Unimplemented: rowspan feature is required");
		}
	};
}
//#endregion
//#region node_modules/@mui/x-virtualizer/esm/features/virtualization/layout.js
var Vh = class {
	static elements = ["scroller", "container"];
	constructor(e) {
		this.refs = e;
	}
	refSetter(e) {
		return (t) => {
			t && this.refs[e].current !== t && (this.refs[e].current = t);
		};
	}
}, Hh = class extends Vh {
	static elements = [
		"scroller",
		"container",
		"content",
		"positioner",
		"scrollbarVertical",
		"scrollbarHorizontal"
	];
	use(e, t, n, r) {
		let { scrollerRef: i, containerRef: a } = r, o = wt(this.refSetter("scrollbarVertical")), s = wt(this.refSetter("scrollbarHorizontal"));
		e.state.virtualization.context = {
			scrollerRef: i,
			containerRef: a,
			scrollbarVerticalRef: o,
			scrollbarHorizontalRef: s
		};
	}
	static selectors = {
		containerProps: ma(Ch.selectors.context, (e) => ({ ref: e.containerRef })),
		scrollerProps: ma(Ch.selectors.context, ch.selectors.autoHeight, ch.selectors.needsHorizontalScrollbar, (e, t, n) => ({
			ref: e.scrollerRef,
			style: {
				overflowX: n ? void 0 : "hidden",
				overflowY: t ? "hidden" : void 0
			},
			role: "presentation",
			tabIndex: hh ? -1 : void 0
		})),
		contentProps: ma(ch.selectors.contentHeight, ch.selectors.minimalContentHeight, ch.selectors.columnsTotalWidth, ch.selectors.needsHorizontalScrollbar, (e, t, n, r) => ({
			style: {
				width: r ? n : "auto",
				flexBasis: e === 0 ? t : e,
				flexShrink: 0
			},
			role: "presentation"
		})),
		positionerProps: ma(Ch.selectors.offsetTop, (e) => ({ style: { transform: `translate3d(0, ${e}px, 0)` } })),
		scrollbarHorizontalProps: ma(Ch.selectors.context, Ch.selectors.scrollPosition, (e, t) => ({
			ref: e.scrollbarHorizontalRef,
			scrollPosition: t
		})),
		scrollbarVerticalProps: ma(Ch.selectors.context, Ch.selectors.scrollPosition, (e, t) => ({
			ref: e.scrollbarVerticalRef,
			scrollPosition: t
		})),
		scrollAreaProps: ma(Ch.selectors.scrollPosition, (e) => ({ scrollPosition: e }))
	};
}, Uh = class extends Hh {
	use(e, t, n, r) {
		super.use(e, t, n, r);
		let i = e.use(Hh.selectors.containerProps), a = e.use(Hh.selectors.scrollerProps), o = e.use(Hh.selectors.contentProps), s = e.use(Hh.selectors.positionerProps), c = e.use(Hh.selectors.scrollbarVerticalProps), l = e.use(Hh.selectors.scrollbarHorizontalProps), u = e.use(Hh.selectors.scrollAreaProps);
		return {
			getContainerProps: () => i,
			getScrollerProps: () => a,
			getContentProps: () => o,
			getPositionerProps: () => s,
			getScrollbarVerticalProps: () => c,
			getScrollbarHorizontalProps: () => l,
			getScrollAreaProps: () => u
		};
	}
};
(class extends Vh {
	static elements = [
		"scroller",
		"container",
		"content",
		"positioner"
	];
	use(e, t, n, r) {
		let { scrollerRef: i, containerRef: a } = r, o = St(i, a);
		e.state.virtualization.context = { mergedRef: o };
	}
	static selectors = {
		containerProps: ma(Ch.selectors.context, ch.selectors.autoHeight, ch.selectors.needsHorizontalScrollbar, (e, t, n) => ({
			ref: e.mergedRef,
			style: {
				overflowX: n ? void 0 : "hidden",
				overflowY: t ? "hidden" : void 0,
				position: "relative"
			},
			role: "presentation",
			tabIndex: hh ? -1 : void 0
		})),
		contentProps: ma(ch.selectors.contentHeight, (e) => ({
			style: {
				position: "absolute",
				display: "inline-block",
				width: "100%",
				height: e,
				top: 0,
				left: 0,
				zIndex: -1
			},
			role: "presentation"
		})),
		positionerProps: ma(Ch.selectors.offsetTop, (e) => ({ style: { height: e } }))
	};
});
var Wh = {
	initialize: Gh,
	use: Kh,
	selectors: {}
};
function Gh(e) {
	return {};
}
function Kh(e, t, n) {
	return { getViewportPageSize: () => {
		let n = ch.selectors.dimensions(e.state);
		if (!n.isReady) return 0;
		if (t.getRowHeight) {
			let n = Ch.selectors.renderContext(e.state), r = n.lastRowIndex - n.firstRowIndex;
			return Math.min(r - 1, t.rows.length);
		}
		let r = Math.floor(n.viewportInnerSize.height / n.rowHeight);
		return Math.min(r, t.rows.length);
	} };
}
//#endregion
//#region node_modules/@mui/x-virtualizer/esm/features/rowspan.js
var qh = {
	firstRowIndex: 0,
	lastRowIndex: 0
}, Jh = {
	spannedCells: {},
	hiddenCells: {},
	hiddenCellOriginMap: {}
}, Yh = {
	state: (e) => e.rowSpanning,
	hiddenCells: (e) => e.rowSpanning.caches.hiddenCells,
	spannedCells: (e) => e.rowSpanning.caches.spannedCells,
	hiddenCellsOriginMap: (e) => e.rowSpanning.caches.hiddenCellOriginMap
}, Xh = {
	initialize: Zh,
	use: Qh,
	selectors: Yh
};
function Zh(e) {
	return { rowSpanning: e.initialState?.rowSpanning ?? {
		caches: Jh,
		processedRange: qh
	} };
}
function Qh(e, t, n) {
	return { getHiddenCellsOrigin: () => Yh.hiddenCellsOriginMap(e.state) };
}
var $h = {
	resizeThrottleMs: 100,
	columns: [{ field: "DEFAULT_COLUMN" }],
	dimensions: {
		autoHeight: !1,
		columnsTotalWidth: 0,
		leftPinnedWidth: 0,
		rightPinnedWidth: 0,
		topPinnedHeight: 0,
		bottomPinnedHeight: 0
	},
	virtualization: {
		isRtl: !1,
		rowBufferPx: 150,
		columnBufferPx: 150
	}
}, eg = [
	ch,
	Ch,
	Km,
	Xh,
	Wh
], tg = (e) => {
	let t = ng(e, $h), n = Vn(() => new Da(eg.map((e) => e.initialize(t)).reduce((e, t) => Object.assign(e, t), {}))).current, r = {};
	for (let e of eg) Object.assign(r, e.use(n, t, r));
	return {
		store: n,
		api: r
	};
};
function ng(e, t) {
	let n = L({}, e);
	for (let r in t) if (Object.hasOwn(t, r)) {
		let i = t[r];
		typeof i == "object" && i && !Array.isArray(i) ? n[r] = ng(e[r] ?? {}, i) : n[r] = e[r] ?? i;
	}
	return n;
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/utils/isJSDOM.js
var rg = typeof window < "u" && /jsdom|HappyDOM/.test(window.navigator.userAgent), ig = !rg, ag = (e, t) => {
	let { disableVirtualization: n, autoHeight: r } = t;
	return L({}, e, { virtualization: {
		enabled: !n && ig,
		enabledForColumns: !n && ig,
		enabledForRows: !n && !r && ig,
		renderContext: xh
	} });
};
function og(e, t) {
	let { autoHeight: n, disableVirtualization: r } = t, i = (t) => {
		let { virtualizer: r } = e.current;
		t &&= ig;
		let i = r.store.getSnapshot();
		i.virtualization.enabled === t && i.virtualization.enabledForRows === t && i.virtualization.enabledForColumns === t || r.store.set("virtualization", L({}, r.store.state.virtualization, {
			enabled: t,
			enabledForColumns: t,
			enabledForRows: t && !n
		}));
	};
	pf(e, {
		unstable_setVirtualization: i,
		unstable_setColumnVirtualization: (t) => {
			let { virtualizer: n } = e.current;
			t &&= ig, n.store.getSnapshot().virtualization.enabledForColumns !== t && n.store.set("virtualization", L({}, n.store.state.virtualization, { enabledForColumns: t }));
		}
	}, "public");
	let a = () => {
		let { virtualizer: t } = e.current;
		t?.api.scheduleUpdateRenderContext();
	};
	e.current.register("private", { updateRenderContext: a }), No(e, "sortedRowsSet", a), No(e, "paginationModelChange", a), No(e, "columnsChange", a), O.useEffect(() => {
		e.current.virtualizer && i(!t.disableVirtualization);
	}, [
		e,
		r,
		n
	]);
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/hooks/features/virtualization/gridVirtualizationSelectors.js
var sg = ka((e) => e.virtualization);
G(sg, (e) => e.enabled);
var cg = G(sg, (e) => e.enabledForColumns);
G(sg, (e) => e.enabledForRows);
var lg = G(sg, (e) => e.renderContext), ug = Oa(ka((e) => e.virtualization.renderContext.firstColumnIndex), ka((e) => e.virtualization.renderContext.lastColumnIndex), (e, t) => ({
	firstColumnIndex: e,
	lastColumnIndex: t
}));
//#endregion
//#region node_modules/@mui/x-data-grid/esm/hooks/features/dataSource/cache.js
function dg(e) {
	return JSON.stringify([
		e.filterModel,
		e.sortModel,
		e.start,
		e.end
	]);
}
var fg = class {
	constructor({ ttl: e = 3e5, getKey: t = dg }) {
		this.cache = {}, this.ttl = e, this.getKey = t;
	}
	set(e, t) {
		let n = this.getKey(e), r = Date.now() + this.ttl;
		this.cache[n] = {
			value: t,
			expiry: r
		};
	}
	get(e) {
		let t = this.getKey(e), n = this.cache[t];
		if (n) {
			if (Date.now() > n.expiry) {
				delete this.cache[t];
				return;
			}
			return n.value;
		}
	}
	clear() {
		this.cache = {};
	}
}, pg = class extends Error {
	constructor(e) {
		super(e.message), this.name = "GridGetRowsError", this.params = e.params, this.cause = e.cause;
	}
}, mg = class extends Error {
	constructor(e) {
		super(e.message), this.name = "GridUpdateRowError", this.params = e.params, this.cause = e.cause;
	}
}, hg = (e, t) => {
	let { classes: n } = e;
	return Bi({
		root: ["scrollbar", `scrollbar--${t}`],
		content: ["scrollbarContent"]
	}, jn, n);
}, gg = "calc(max(var(--DataGrid-scrollbarSize), 14px))", _g = I("div", {
	slot: "internal",
	shouldForwardProp: void 0
})({
	position: "absolute",
	display: "inline-block",
	zIndex: 60,
	"&:hover": { zIndex: 70 },
	"--size": gg
}), vg = I(_g, { slot: "internal" })({
	width: "var(--size)",
	height: "calc(var(--DataGrid-hasScrollY) * (100% - var(--DataGrid-headersTotalHeight) - var(--DataGrid-hasScrollX) * var(--DataGrid-scrollbarSize)))",
	overflowY: "auto",
	overflowX: "hidden",
	outline: 0,
	"& > div": { width: "var(--size)" },
	top: "var(--DataGrid-headersTotalHeight)",
	right: 0
}), yg = I(_g, { slot: "internal" })({
	width: "calc(var(--DataGrid-hasScrollX) * (100% - var(--DataGrid-hasScrollY) * var(--DataGrid-scrollbarSize)))",
	height: "var(--size)",
	overflowY: "hidden",
	overflowX: "auto",
	outline: 0,
	"& > div": { height: "var(--size)" },
	bottom: 0
}), bg = I(_g, { slot: "internal" })({
	width: "var(--size)",
	height: "var(--size)",
	right: 0,
	bottom: 0,
	overflow: "scroll",
	"@media print": { display: "none" }
}), xg = z(function(e, t) {
	let n = Zn(), r = B(), i = O.useRef(!1), a = O.useRef(0), o = O.useRef(null), s = hg(r, e.position), c = W(n, ja), l = e.position === "vertical" ? "height" : "width", u = e.position === "vertical" ? "scrollTop" : "scrollLeft", d = e.position === "vertical" ? "top" : "left", f = e.position === "horizontal" ? c.minimumSize.width : c.minimumSize.height - c.headersTotalHeight, p = wt(() => {
		let t = o.current, n = e.scrollPosition.current;
		if (t && n[d] !== a.current) {
			if (a.current = n[d], i.current) {
				i.current = !1;
				return;
			}
			i.current = !0, t[u] = e.scrollPosition.current[d];
		}
	}), m = wt(() => {
		let e = n.current.virtualScrollerRef.current, t = o.current;
		if (t) {
			if (i.current) {
				i.current = !1;
				return;
			}
			i.current = !0, e[u] = t[u];
		}
	});
	Ca(() => {
		let e = n.current.virtualScrollerRef.current, t = o.current, r = { passive: !0 };
		return e.addEventListener("scroll", p, r), t.addEventListener("scroll", m, r), () => {
			e.removeEventListener("scroll", p, r), t.removeEventListener("scroll", m, r);
		};
	});
	let h = e.position === "vertical" ? vg : yg, g = O.useMemo(() => ({ [l]: `${f}px` }), [l, f]);
	return /* @__PURE__ */ E(h, {
		ref: St(t, o),
		className: s.root,
		tabIndex: -1,
		"aria-hidden": "true",
		onFocus: (e) => {
			e.target.blur();
		},
		children: /* @__PURE__ */ E("div", {
			className: s.content,
			style: g
		})
	});
});
process.env.NODE_ENV !== "production" && (xg.displayName = "GridVirtualScrollbar");
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/GridScrollShadows.js
var Sg = (e) => {
	let { classes: t, position: n } = e;
	return Bi({ root: ["scrollShadow", `scrollShadow--${n}`] }, jn, t);
}, Cg = I("div", {
	name: "MuiDataGrid",
	slot: "ScrollShadow",
	overridesResolver: (e, t) => [t.root, t[e.position]]
})(({ theme: e }) => ({
	position: "absolute",
	inset: 0,
	pointerEvents: "none",
	transition: H.transition(["box-shadow"], { duration: H.transitions.duration.short }),
	"--length": e.palette.mode === "dark" ? "8px" : "6px",
	"--length-inverse": "calc(var(--length) * -1)",
	"--opacity": e.palette.mode === "dark" ? "0.7" : "0.18",
	"--blur": "var(--length)",
	"--spread": "calc(var(--length) * -1)",
	"--color": "0, 0, 0",
	"--color-start": "rgba(var(--color), calc(var(--hasScrollStart) * var(--opacity)))",
	"--color-end": "rgba(var(--color), calc(var(--hasScrollEnd) * var(--opacity)))",
	variants: [{
		props: { position: "vertical" },
		style: {
			top: "var(--DataGrid-topContainerHeight)",
			bottom: "calc(var(--DataGrid-bottomContainerHeight) + var(--DataGrid-hasScrollX) * var(--DataGrid-scrollbarSize))",
			boxShadow: "inset 0 var(--length) var(--blur) var(--spread) var(--color-start), inset 0 var(--length-inverse) var(--blur) var(--spread) var(--color-end)"
		}
	}, {
		props: { position: "horizontal" },
		style: {
			left: "var(--DataGrid-leftPinnedWidth)",
			right: "calc(var(--DataGrid-rightPinnedWidth) + var(--DataGrid-hasScrollY) * var(--DataGrid-scrollbarSize))",
			boxShadow: "inset var(--length) 0 var(--blur) var(--spread) var(--color-start), inset var(--length-inverse) 0 var(--blur) var(--spread) var(--color-end)"
		}
	}]
}));
function wg(e) {
	let { position: t } = e, n = {
		classes: B().classes,
		position: t
	}, r = Sg(n), i = O.useRef(null), a = Zn(), o = W(a, Pa), s = W(a, Fa), c = W(a, no), l = W(a, qs), u = t === "vertical" ? s && c?.bottom?.length > 0 : o && l?.right?.length !== void 0 && l?.right?.length > 0, d = Sc(), f = O.useCallback((e) => {
		if (!i.current) return;
		let n = Math.abs(Math.round(e)), r = ja(a), o = Math.round(r.contentSize[t === "vertical" ? "height" : "width"] - r.viewportInnerSize[t === "vertical" ? "height" : "width"]), s = t === "vertical" ? c?.top?.length > 0 : l?.left?.length !== void 0 && l?.left?.length > 0, u = t === "vertical" ? c?.bottom?.length > 0 : l?.right?.length !== void 0 && l?.right?.length > 0, f = d ? n < o : n > 0, p = d ? n > 0 : n < o;
		i.current.style.setProperty("--hasScrollStart", s && f ? "1" : "0"), i.current.style.setProperty("--hasScrollEnd", u && p ? "1" : "0");
	}, [
		c,
		l,
		d,
		t,
		a
	]);
	return K(a, "scrollPositionChange", (e) => {
		f(e[t === "vertical" ? "top" : "left"]);
	}), K(a, "columnResizeStop", () => {
		t === "horizontal" && f(a.current.virtualScrollerRef?.current?.scrollLeft || 0);
	}), O.useEffect(() => {
		f((t === "horizontal" ? a.current.virtualScrollerRef?.current?.scrollLeft : a.current.virtualScrollerRef?.current?.scrollTop) ?? 0);
	}, [
		f,
		a,
		t
	]), /* @__PURE__ */ E(Cg, {
		className: r.root,
		ownerState: n,
		ref: i,
		style: {
			"--hasScrollStart": 0,
			"--hasScrollEnd": u ? "1" : "0"
		}
	});
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/base/GridOverlays.js
var Tg = I("div", {
	name: "MuiDataGrid",
	slot: "OverlayWrapper",
	shouldForwardProp: (e) => e !== "overlayType" && e !== "loadingOverlayVariant" && e !== "right"
})(({ overlayType: e, loadingOverlayVariant: t, right: n }) => t === "skeleton" ? {} : {
	position: "sticky",
	top: "var(--DataGrid-headersTotalHeight)",
	left: 0,
	right: `${n}px`,
	width: 0,
	height: 0,
	zIndex: e === "loadingOverlay" ? 5 : 4
}), Eg = I("div", {
	name: "MuiDataGrid",
	slot: "OverlayWrapperInner",
	shouldForwardProp: (e) => e !== "overlayType" && e !== "loadingOverlayVariant"
})({}), Dg = (e) => {
	let { classes: t } = e;
	return Bi({
		root: ["overlayWrapper"],
		inner: ["overlayWrapperInner"]
	}, jn, t);
};
function Og(e) {
	let t = V(), n = B(), r = W(t, ja), i = Math.max(r.viewportOuterSize.height - r.topContainerHeight - r.bottomContainerHeight - (r.hasScrollX ? r.scrollbarSize : 0), 0);
	i === 0 && (i = vo);
	let a = Dg(L({}, e, { classes: n.classes }));
	return /* @__PURE__ */ E(Tg, L({ className: a.root }, e, {
		right: r.columnsTotalWidth - r.viewportOuterSize.width,
		children: /* @__PURE__ */ E(Eg, L({
			className: a.inner,
			style: {
				height: i,
				width: r.viewportOuterSize.width
			}
		}, e))
	}));
}
process.env.NODE_ENV !== "production" && (Og.propTypes = {
	loadingOverlayVariant: q.default.oneOf([
		"circular-progress",
		"linear-progress",
		"skeleton"
	]),
	overlayType: q.default.oneOf([
		"loadingOverlay",
		"noResultsOverlay",
		"noRowsOverlay",
		"noColumnsOverlay",
		"emptyPivotOverlay"
	])
});
//#endregion
//#region node_modules/@mui/x-data-grid/esm/hooks/utils/useGridVisibleRows.js
var kg = (e, t) => Mu(e), Ag = (e, t) => W(e, Mu), jg = Oa(G(su, lg, Mu, Gs, (e, t, n, r) => {
	if (!e) return !1;
	let i = n.rowIdToIndexMap.get(e.id), a = r.slice(t.firstColumnIndex, t.lastColumnIndex).findIndex((t) => t.field === e.field);
	return !(i !== void 0 && a !== -1 && i >= t.firstRowIndex && i <= t.lastRowIndex);
}), Gs, Mu, su, (e, t, n, r) => {
	if (!e) return null;
	let i = n.rowIdToIndexMap.get(r.id);
	if (i === void 0) return null;
	let a = t.findIndex((e) => e.field === r.field);
	return a === -1 ? null : L({}, r, {
		rowIndex: i,
		columnIndex: a
	});
}), Mg = {
	autoHeight: !1,
	autoPageSize: !1,
	autosizeOnMount: !1,
	checkboxSelection: !1,
	checkboxSelectionVisibleOnly: !1,
	clipboardCopyCellDelimiter: "	",
	columnBufferPx: 150,
	columnFilterDebounceMs: 150,
	columnHeaderHeight: 56,
	disableAutosize: !1,
	disableColumnFilter: !1,
	disableColumnMenu: !1,
	disableColumnReorder: !1,
	disableColumnResize: !1,
	disableColumnSelector: !1,
	disableColumnSorting: !1,
	disableDensitySelector: !1,
	disableEval: !1,
	disableMultipleColumnsFiltering: !1,
	disableMultipleColumnsSorting: !1,
	disableMultipleRowSelection: !1,
	dataSourceRevalidateMs: 0,
	disableRowSelectionOnClick: !1,
	disableRowSelectionExcludeModel: !1,
	disableVirtualization: !1,
	editMode: bs.Cell,
	filterDebounceMs: 150,
	filterMode: "client",
	hideFooter: !1,
	hideFooterPagination: !1,
	hideFooterRowCount: !1,
	hideFooterSelectedRowCount: !1,
	ignoreDiacritics: !1,
	ignoreValueFormatterDuringExport: !1,
	keepColumnPositionIfDraggedOutside: !1,
	keepNonExistentRowsSelected: !1,
	loading: !1,
	logger: console,
	logLevel: process.env.NODE_ENV === "production" ? "error" : "warn",
	pageSizeOptions: [
		25,
		50,
		100
	],
	pagination: !1,
	paginationMode: "client",
	resizeThrottleMs: 60,
	rowBufferPx: 150,
	rowHeight: 52,
	rows: [],
	rowSelection: !0,
	rowSpacingType: "margin",
	rowSpanning: !1,
	showCellVerticalBorder: !1,
	showColumnVerticalBorder: !1,
	showToolbar: !1,
	sortingMode: "client",
	sortingOrder: [
		"asc",
		"desc",
		null
	],
	throttleRowsMs: 0,
	virtualizeColumnsWithAutoRowHeight: !1,
	tabNavigation: "none"
};
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/typeof.js
function Ng(e) {
	"@babel/helpers - typeof";
	return Ng = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, Ng(e);
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function Pg(e, t) {
	if (Ng(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (Ng(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function Fg(e) {
	var t = Pg(e, "string");
	return Ng(t) == "symbol" ? t : t + "";
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/hooks/core/pipeProcessing/useGridPipeProcessing.js
var Ig = (e) => {
	let t = O.useRef({}), n = O.useRef(!1), r = O.useCallback((e) => {
		n.current || !e || (n.current = !0, Object.values(e.appliers).forEach((e) => {
			e();
		}), n.current = !1);
	}, []), i = O.useCallback((e, n, r) => {
		t.current[e] || (t.current[e] = {
			processors: /* @__PURE__ */ new Map(),
			processorsAsArray: [],
			appliers: {},
			processorsUpdated: !1
		});
		let i = t.current[e];
		return i.processors.get(n) !== r && (i.processors.set(n, r), i.processorsAsArray = Array.from(t.current[e].processors.values()).filter((e) => e !== null), i.processorsUpdated = !0), () => {
			t.current[e].processors.set(n, null), t.current[e].processorsAsArray = Array.from(t.current[e].processors.values()).filter((e) => e !== null);
		};
	}, []), a = O.useCallback((e, n, r) => (t.current[e] || (t.current[e] = {
		processors: /* @__PURE__ */ new Map(),
		processorsAsArray: [],
		appliers: {},
		processorsUpdated: !1
	}), t.current[e].appliers[n] = r, () => {
		let r = t.current[e].appliers, i = R(r, [n].map(Fg));
		t.current[e].appliers = i;
	}), []), o = O.useCallback((e) => {
		r(t.current[e]);
	}, [r]), s = O.useCallback(() => {
		for (let e in t.current) {
			if (!Object.prototype.hasOwnProperty.call(t.current, e)) continue;
			let n = t.current[e];
			n.processorsUpdated && (n.processorsUpdated = !1, r(n));
		}
	}, [r]), c = O.useCallback((...e) => {
		let [n, r, i] = e;
		if (!t.current[n]) return r;
		let a = t.current[n].processorsAsArray, o = r;
		for (let e = 0; e < a.length; e += 1) o = a[e](o, i);
		return o;
	}, []), l = {
		registerPipeProcessor: i,
		registerPipeApplier: a,
		requestPipeProcessorsApplication: o,
		runAppliersForPendingProcessors: s
	}, u = { unstable_applyPipeProcessors: c };
	pf(e, l, "private"), pf(e, u, "public");
}, Lg = (e, t, n, r = !0) => {
	let i = O.useRef(null), a = O.useRef(`mui-${Math.round(Math.random() * 1e9)}`), o = O.useCallback(() => {
		i.current = e.current.registerPipeProcessor(t, a.current, n);
	}, [
		e,
		n,
		t
	]);
	gf(() => {
		r && o();
	});
	let s = O.useRef(!0);
	O.useEffect(() => (s.current ? s.current = !1 : r && o(), () => {
		i.current &&= (i.current(), null);
	}), [o, r]);
}, Rg = (e, t, n) => {
	let r = O.useRef(null), i = O.useRef(`mui-${Math.round(Math.random() * 1e9)}`), a = O.useCallback(() => {
		r.current = e.current.registerPipeApplier(t, i.current, n);
	}, [
		e,
		n,
		t
	]);
	gf(() => {
		a();
	});
	let o = O.useRef(!0);
	O.useEffect(() => (o.current ? o.current = !1 : a(), () => {
		r.current &&= (r.current(), null);
	}), [a]);
}, zg = (e, t, n) => {
	let r = Na(n), i = Wa(n), a = xu(n), o = Math.min(a.enabled ? a.paginationModel.pageSize : i, i);
	return L({}, e, { rowsMeta: {
		currentPageTotalHeight: o * r,
		positions: Array.from({ length: o }, (e, t) => t * r),
		pinnedTopRowsTotalHeight: 0,
		pinnedBottomRowsTotalHeight: 0
	} });
}, Bg = (e, t) => {
	let { getRowHeight: n, setLastMeasuredRowIndex: r, storeRowHeightMeasurement: i, resetRowHeights: a, hydrateRowsMeta: o, observeRowHeight: s, rowHasAutoHeight: c, getRowHeightEntry: l, getLastMeasuredRowIndex: u } = e.current.virtualizer.api.rowsMeta;
	Rg(e, "rowHeight", o);
	let d = {
		unstable_getRowHeight: n,
		unstable_setLastMeasuredRowIndex: r,
		unstable_storeRowHeightMeasurement: i,
		resetRowHeights: a
	}, f = {
		hydrateRowsMeta: o,
		observeRowHeight: s,
		rowHasAutoHeight: c,
		getRowHeightEntry: l,
		getLastMeasuredRowIndex: u
	};
	pf(e, d, "public"), pf(e, f, "private");
}, Vg = G(Gs, Xs, (e, t) => {
	let n = e.length;
	return n === 0 ? 0 : eh(t[n - 1] + e[n - 1].computedWidth, 1);
}), Hg = () => na((e, t, n, r, i) => L({}, e, {
	headerHeight: t,
	groupHeaderHeight: n,
	headerFilterHeight: r,
	headersTotalHeight: i
}), { maxSize: 1 });
function Ug() {
	let e = Sc(), t = B(), n = Zn(), { listView: r } = t, i = W(n, Gs), a = W(n, no), o = Js(n), s = W(n, Wl), c = O.useCallback((e) => s.has(e) && n.current.isRowSelectable(e), [s, n]), l = Ag(n), u = W(n, $s), d = W(n, Ba), f = W(n, Ia), { autoHeight: p } = t, m = r, h = W(n, Lo), g = xo(t.rowHeight, Mg.rowHeight, So), _ = Math.floor(g * h), v = Math.floor(t.columnHeaderHeight * h), y = Math.floor((t.columnGroupHeaderHeight ?? t.columnHeaderHeight) * h), b = Math.floor((t.headerFilterHeight ?? t.columnHeaderHeight) * h), x = W(n, Vg), S = $d(n, t), C = o.left.reduce((e, t) => e + t.computedWidth, 0), w = o.right.reduce((e, t) => e + t.computedWidth, 0), T = Sf(n, t), D = {
		rowHeight: _,
		headerHeight: v,
		columnsTotalWidth: x,
		leftPinnedWidth: C,
		rightPinnedWidth: w,
		topPinnedHeight: S,
		bottomPinnedHeight: 0,
		autoHeight: p,
		minimalContentHeight: vo,
		scrollbarSize: t.scrollbarSize
	}, k = Vn(Hg).current, A = W(n, Wa), j = W(n, xu), M = Math.min(j.enabled ? j.paginationModel.pageSize : A, A), { getRowHeight: N, getEstimatedRowHeight: P, getRowSpacing: ee } = t, te = t.slots.row, ne = t.slotProps?.row;
	W(n, jg);
	let F = Vn(() => new Uh({
		container: n.current.mainElementRef,
		scroller: n.current.virtualScrollerRef,
		scrollbarVertical: n.current.virtualScrollbarVerticalRef,
		scrollbarHorizontal: n.current.virtualScrollbarHorizontalRef
	})).current, re = tg({
		layout: F,
		dimensions: D,
		virtualization: {
			isRtl: e,
			rowBufferPx: t.rowBufferPx,
			columnBufferPx: t.columnBufferPx
		},
		colspan: {
			enabled: u,
			getColspan: O.useCallback((e, t) => {
				if (typeof t.colSpan == "function") {
					let r = n.current.getRow(e), i = n.current.getRowValue(r, t);
					return t.colSpan(i, r, t, n) ?? 0;
				}
				return t.colSpan ?? 1;
			}, [n])
		},
		initialState: {
			scroll: t.initialState?.scroll,
			rowSpanning: n.current.state.rowSpanning,
			virtualization: n.current.state.virtualization
		},
		rows: l.rows,
		range: l.range,
		rowCount: M,
		columns: i,
		pinnedRows: a,
		pinnedColumns: o,
		disableHorizontalScroll: r,
		disableVerticalScroll: T.overlayType === "noColumnsOverlay" || T.loadingOverlayVariant === "skeleton",
		getRowHeight: O.useMemo(() => {
			if (N) return (e) => N(L({}, e, { densityFactor: h }));
		}, [N, h]),
		getEstimatedRowHeight: O.useMemo(() => P ? (e) => P(L({}, e, { densityFactor: h })) : void 0, [P, h]),
		getRowSpacing: O.useMemo(() => ee ? (e) => {
			let t = l.rowIdToIndexMap.get(e.id) ?? -1;
			return ee(L({}, e, {
				isFirstVisible: t === 0,
				isLastVisible: t === l.rows.length - 1,
				indexRelativeToCurrentPage: t
			}, { indexRelativeToCurrentPage: n.current.getRowIndexRelativeToVisibleRows(e.id) }));
		} : void 0, [
			n,
			ee,
			l.rows,
			l.rowIdToIndexMap
		]),
		applyRowHeight: wt((e, t) => n.current.unstable_applyPipeProcessors("rowHeight", e, t)),
		virtualizeColumnsWithAutoRowHeight: t.virtualizeColumnsWithAutoRowHeight,
		focusedVirtualCell: wt(() => jg(n)),
		resizeThrottleMs: t.resizeThrottleMs,
		onResize: wt((e) => n.current.publishEvent("resize", e)),
		onWheel: wt((e) => {
			n.current.publishEvent("virtualScrollerWheel", {}, e);
		}),
		onTouchMove: wt((e) => {
			n.current.publishEvent("virtualScrollerTouchMove", {}, e);
		}),
		onRenderContextChange: wt((e) => {
			n.current.publishEvent("renderedRowsIntervalChange", e);
		}),
		onScrollChange: O.useCallback((e, t) => {
			n.current.publishEvent("scrollPositionChange", {
				top: e.top,
				left: e.left,
				renderContext: t
			});
		}, [n]),
		scrollReset: m,
		renderRow: O.useCallback((e) => /* @__PURE__ */ E(te, L({
			row: e.model,
			rowId: e.id,
			index: e.rowIndex,
			selected: c(e.id),
			offsetLeft: e.offsetLeft,
			columnsTotalWidth: x,
			rowHeight: e.baseRowHeight,
			pinnedColumns: o,
			visibleColumns: i,
			firstColumnIndex: e.firstColumnIndex,
			lastColumnIndex: e.lastColumnIndex,
			focusedColumnIndex: e.focusedColumnIndex,
			isFirstVisible: e.isFirstVisible,
			isLastVisible: e.isLastVisible,
			isNotVisible: e.isVirtualFocusRow,
			showBottomBorder: e.showBottomBorder,
			scrollbarWidth: d,
			gridHasFiller: f
		}, ne), e.id), [
			x,
			f,
			c,
			o,
			te,
			ne,
			d,
			i
		]),
		renderInfiniteLoadingTrigger: O.useCallback((e) => n.current.getInfiniteLoadingTriggerElement?.({ lastRowId: e }), [n])
	});
	return gf(() => {
		n.current.store.state.dimensions = k(re.store.state.dimensions, v, y, b, S), n.current.store.state.rowsMeta = re.store.state.rowsMeta, n.current.store.state.virtualization = re.store.state.virtualization;
	}), Ta(re.store, ch.selectors.dimensions, (e, t) => {
		t.isReady && n.current.setState((e) => L({}, e, { dimensions: k(t, v, y, b, S) }));
	}), Ta(re.store, ch.selectors.rowsMeta, (e, t) => {
		t !== n.current.state.rowsMeta && n.current.setState((e) => L({}, e, { rowsMeta: t }));
	}), Ta(re.store, Ch.selectors.store, (e, t) => {
		t.renderContext !== xh && t !== n.current.state.virtualization && n.current.setState((e) => L({}, e, { virtualization: t }));
	}), n.current.register("private", { virtualizer: re }), Bg(n, t), re;
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/virtualization/GridVirtualScroller.js
var Wg = (e) => {
	let { classes: t, hasScrollX: n, hasPinnedRight: r, loadingOverlayVariant: i, overlayType: a } = e;
	return Bi({
		root: [
			"main",
			r && "main--hasPinnedRight",
			(i === "skeleton" || a === "noColumnsOverlay") && "main--hiddenContent"
		],
		scroller: ["virtualScroller", n && "virtualScroller--hasScrollX"]
	}, jn, t);
}, Gg = I("div", {
	name: "MuiDataGrid",
	slot: "VirtualScroller",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [t.virtualScroller, n.hasScrollX && t["virtualScroller--hasScrollX"]];
	}
})({
	position: "relative",
	height: "100%",
	flexGrow: 1,
	overflow: "scroll",
	scrollbarWidth: "none",
	display: "flex",
	flexDirection: "column",
	"&::-webkit-scrollbar": { display: "none" },
	"@media print": { overflow: "hidden" },
	zIndex: 0
}), Kg = (e) => e.current.state.dimensions.rightPinnedWidth > 0;
function qg(e) {
	let t = Zn(), n = B(), r = W(t, Fa), i = W(t, Pa), a = W(t, Kg), o = W(t, Va), { overlayType: s, loadingOverlayVariant: c } = Sf(t, n), l = n.slots?.[s], u = {
		classes: n.classes,
		hasScrollX: i,
		hasPinnedRight: a,
		overlayType: s,
		loadingOverlayVariant: c
	}, d = Wg(u), f = Ug().api.getters, { getContainerProps: p, getScrollerProps: m, getContentProps: h, getPositionerProps: g, getScrollbarVerticalProps: _, getScrollbarHorizontalProps: v, getRows: y, getScrollAreaProps: b } = f, x = y(void 0, Ja(t));
	return /* @__PURE__ */ D(Of, L({ className: d.root }, p(), {
		ownerState: u,
		children: [
			/* @__PURE__ */ E(uf, L({ scrollDirection: "left" }, b())),
			/* @__PURE__ */ E(uf, L({ scrollDirection: "right" }, b())),
			/* @__PURE__ */ E(uf, L({ scrollDirection: "up" }, b())),
			/* @__PURE__ */ E(uf, L({ scrollDirection: "down" }, b())),
			/* @__PURE__ */ D(Gg, L({ className: d.scroller }, m(), {
				ownerState: u,
				children: [
					/* @__PURE__ */ D(jf, { children: [!n.listView && /* @__PURE__ */ E(Tf, {}), /* @__PURE__ */ E(n.slots.pinnedRows, {
						position: "top",
						virtualScroller: f
					})] }),
					s && /* @__PURE__ */ E(Og, {
						overlayType: s,
						loadingOverlayVariant: c,
						children: /* @__PURE__ */ E(l, L({}, n.slotProps?.[s]))
					}),
					/* @__PURE__ */ E(Dm, L({}, h(), { children: /* @__PURE__ */ D(Lm, L({ role: "rowgroup" }, g(), { children: [x, /* @__PURE__ */ E(n.slots.detailPanels, { virtualScroller: f })] })) })),
					o && /* @__PURE__ */ E(Pm, { rowsLength: x.length }),
					/* @__PURE__ */ E(n.slots.bottomContainer, { children: /* @__PURE__ */ E(n.slots.pinnedRows, {
						position: "bottom",
						virtualScroller: f
					}) })
				]
			})),
			i && /* @__PURE__ */ D(O.Fragment, { children: [n.pinnedColumnsSectionSeparator?.endsWith("shadow") && /* @__PURE__ */ E(wg, { position: "horizontal" }), /* @__PURE__ */ E(xg, L({ position: "horizontal" }, v()))] }),
			r && /* @__PURE__ */ D(O.Fragment, { children: [n.pinnedRowsSectionSeparator?.endsWith("shadow") && /* @__PURE__ */ E(wg, { position: "vertical" }), /* @__PURE__ */ E(xg, L({ position: "vertical" }, _()))] }),
			i && r && /* @__PURE__ */ E(bg, { "aria-hidden": "true" }),
			e.children
		]
	}));
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/base/GridFooterPlaceholder.js
function Jg() {
	let e = B();
	return e.hideFooter ? null : /* @__PURE__ */ E(e.slots.footer, L({}, e.slotProps?.footer));
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/utils/doesSupportPreventScroll.js
var Yg;
function Xg() {
	return Yg === void 0 && document.createElement("div").focus({ get preventScroll() {
		return Yg = !0, !1;
	} }), Yg;
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/internals/utils/computeSlots.js
function Zg({ defaultSlots: e, slots: t }) {
	let n = t;
	if (!n || Object.keys(n).length === 0) return e;
	let r = L({}, e);
	return Object.keys(n).forEach((e) => {
		let t = e;
		n[t] !== void 0 && (r[t] = n[t]);
	}), r;
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/internals/utils/propValidation.js
var Qg = [
	(e) => e.autoPageSize && e.autoHeight && [
		"MUI X: `<DataGrid autoPageSize={true} autoHeight={true} />` are not valid props.",
		"You cannot use both the `autoPageSize` and `autoHeight` props at the same time because `autoHeight` scales the height of the Data Grid according to the `pageSize`.",
		"",
		"Please remove one of these two props."
	].join("\n") || void 0,
	(e) => e.paginationMode === "client" && e.paginationMeta != null && ["MUI X: Usage of the `paginationMeta` prop with client-side pagination (`paginationMode=\"client\"`) has no effect.", "`paginationMeta` is only meant to be used with `paginationMode=\"server\"`."].join("\n") || void 0,
	(e) => e.signature === To.DataGrid && e.paginationMode === "client" && cs(e.rowCount) && ["MUI X: Usage of the `rowCount` prop with client side pagination (`paginationMode=\"client\"`) has no effect.", "`rowCount` is only meant to be used with `paginationMode=\"server\"`."].join("\n") || void 0,
	(e) => e.paginationMode === "server" && e.rowCount == null && !e.dataSource && ["MUI X: The `rowCount` prop must be passed using `paginationMode='server'`", "For more detail, see http://mui.com/components/data-grid/pagination/#index-based-pagination"].join("\n") || void 0
];
function $g(e, t) {
	t.forEach((t) => {
		let n = t(e);
		n && In(n, "error");
	});
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/internals/utils/gridRowGroupingUtils.js
var e_ = (e) => {
	let t = e.match(/^__row_group_by_columns_group_(.*)__$/);
	return t ? t[1] : null;
}, t_ = (e) => e === "__row_group_by_columns_group__" || e_(e) !== null, n_ = (e, t) => {
	if (e) if (t) {
		if (e === Qc.LEFT) return "right";
		if (e === Qc.RIGHT) return "left";
	} else {
		if (e === Qc.LEFT) return "left";
		if (e === Qc.RIGHT) return "right";
	}
};
//#endregion
//#region node_modules/@mui/x-data-grid/esm/internals/utils/attachPinnedStyle.js
function r_(e, t, n, r) {
	let i = n_(n, t);
	return !i || r === void 0 || (e[i] = r), e;
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/cell/GridCell.js
var i_ = /* @__PURE__ */ "column.row.rowId.rowNode.align.children.colIndex.width.className.style.colSpan.disableDragEvents.isNotVisible.pinnedOffset.pinnedPosition.showRightBorder.showLeftBorder.onClick.onDoubleClick.onMouseDown.onMouseUp.onMouseOver.onKeyDown.onKeyUp.onDragEnter.onDragOver".split("."), a_ = ["changeReason", "unstable_updateValueOnRender"];
Qc.LEFT, Fs.LEFT, Qc.RIGHT, Fs.RIGHT, Qc.NONE, Qc.VIRTUAL;
var o_ = (e) => {
	let { align: t, showLeftBorder: n, showRightBorder: r, pinnedPosition: i, isEditable: a, isSelected: o, isSelectionMode: s, classes: c } = e;
	return Bi({ root: [
		"cell",
		`cell--text${ip(t)}`,
		o && "selected",
		a && "cell--editable",
		n && "cell--withLeftBorder",
		r && "cell--withRightBorder",
		i === Qc.LEFT && "cell--pinnedLeft",
		i === Qc.RIGHT && "cell--pinnedRight",
		s && !a && "cell--selectionMode"
	] }, jn, c);
}, s_ = !1, c_ = z(function(e, t) {
	let { column: n, row: r, rowId: i, rowNode: a, align: o, colIndex: s, width: c, className: l, style: u, colSpan: d, disableDragEvents: f, isNotVisible: p, pinnedOffset: m, pinnedPosition: h, showRightBorder: g, showLeftBorder: _, onClick: v, onDoubleClick: y, onMouseDown: b, onMouseUp: x, onMouseOver: S, onKeyDown: C, onKeyUp: w, onDragEnter: T, onDragOver: D } = e, k = R(e, i_), A = Zn(), j = B(), M = Sc(), N = n.field, P = W(A, Hm, {
		rowId: i,
		field: N
	}), ee = jc().hooks.useCellAggregationResult(i, N), te = P ? xs.Edit : xs.View, { value: ne, formattedValue: F } = ee || {}, re = A.current.getCellParamsForRow(i, N, r, {
		colDef: n,
		cellMode: te,
		rowNode: a,
		tabIndex: W(A, () => {
			let e = du(A);
			return e && e.field === N && e.id === i ? 0 : -1;
		}),
		hasFocus: W(A, () => {
			let e = su(A);
			return e?.id === i && e.field === N;
		}),
		value: ne,
		formattedValue: F
	});
	re.api = A.current, W(A, () => A.current.isCellEditable(re));
	let ie = W(A, () => A.current.unstable_applyPipeProcessors("isCellSelected", !1, {
		id: i,
		field: N
	})), ae = A.current.virtualizer.store, oe = ya(ae, Xh.selectors.hiddenCells), se = ya(ae, Xh.selectors.spannedCells), { hasFocus: ce, isEditable: le = !1, value: ue } = re, de = (te === "view" || !le) && n.type !== "actions" ? re.tabIndex : -1, { classes: I, getCellClassName: fe } = j, pe = [W(A, () => A.current.unstable_applyPipeProcessors("cellClassName", [], {
		id: i,
		field: N
	}).filter(Boolean).join(" "))];
	n.cellClassName && pe.push(typeof n.cellClassName == "function" ? n.cellClassName(re) : n.cellClassName), n.display === "flex" && pe.push(U["cell--flex"]), fe && pe.push(fe(re));
	let me = re.formattedValue ?? ue, he = O.useRef(null), ge = St(t, he), _e = j.cellSelection ?? !1, ve = o_({
		align: o,
		showLeftBorder: _,
		showRightBorder: g,
		isEditable: le,
		classes: j.classes,
		pinnedPosition: h,
		isSelected: ie,
		isSelectionMode: _e
	}), ye = O.useCallback((e) => (t) => {
		let n = A.current.getCellParams(i, N || "");
		A.current.publishEvent(e, n, t), x && x(t);
	}, [
		A,
		N,
		x,
		i
	]), be = O.useCallback((e) => (t) => {
		let n = A.current.getCellParams(i, N || "");
		A.current.publishEvent(e, n, t), b && b(t);
	}, [
		A,
		N,
		b,
		i
	]), xe = O.useCallback((e, t) => (n) => {
		if (!A.current.getRow(i)) return;
		let r = A.current.getCellParams(i, N || "");
		A.current.publishEvent(e, r, n), t && t(n);
	}, [
		A,
		N,
		i
	]), Se = oe[i]?.[s] ?? !1, Ce = se[i]?.[s] ?? 1, we = O.useMemo(() => {
		if (p) return {
			padding: 0,
			opacity: 0,
			width: 0,
			height: 0,
			border: 0
		};
		let e = r_(L({ "--width": `${c}px` }, u), M, h, m), t = h === Qc.LEFT, n = h === Qc.RIGHT;
		return Ce > 1 && (e.height = `calc(var(--height) * ${Ce})`, e.zIndex = 10, (t || n) && (e.zIndex = 40)), e;
	}, [
		c,
		p,
		u,
		m,
		h,
		M,
		Ce
	]);
	if (Ct(() => {
		if (!ce || te === xs.Edit) return;
		let e = Zm(A.current.rootElementRef.current);
		if (he.current && !he.current.contains(e.activeElement)) {
			let e = he.current.querySelector("[tabindex=\"0\"]") || he.current;
			if (Xg()) e.focus({ preventScroll: !0 });
			else {
				let t = A.current.getScrollPosition();
				e.focus(), A.current.scroll(t);
			}
		}
	}, [
		ce,
		te,
		A
	]), Se) return /* @__PURE__ */ E("div", {
		"data-colindex": s,
		role: "presentation",
		style: L({ width: "var(--width)" }, we)
	});
	let Te = k.onFocus;
	process.env.NODE_ENV === "test" && j.experimentalFeatures?.warnIfFocusStateIsNotSynced && (Te = (e) => {
		let t = su(A);
		if (t?.id === i && t.field === N) {
			typeof k.onFocus == "function" && k.onFocus(e);
			return;
		}
		s_ ||= (console.warn([
			`MUI X: The cell with id=${i} and field=${N} received focus.`,
			`According to the state, the focus should be at id=${t?.id}, field=${t?.field}.`,
			"Not syncing the state may cause unwanted behaviors since the `cellFocusIn` event won't be fired.",
			"Call `fireEvent.mouseUp` before the `fireEvent.click` to sync the focus with the state."
		].join("\n")), !0);
	});
	let Ee, De;
	if (P === null && n.renderCell && (Ee = n.renderCell(re)), P !== null && n.renderEditCell) {
		let e = A.current.getRowWithUpdatedValues(i, n.field), t = R(P, a_), r = L({}, re, {
			row: e,
			formattedValue: n.valueFormatter ? n.valueFormatter(P.value, e, n, A) : re.formattedValue
		}, t);
		Ee = n.renderEditCell(r), pe.push(U["cell--editing"]), pe.push(I?.["cell--editing"]);
	}
	if (Ee === void 0) {
		let e = me?.toString();
		Ee = e, De = e;
	}
	let Oe = f ? null : {
		onDragEnter: xe("cellDragEnter", T),
		onDragOver: xe("cellDragOver", D)
	};
	return /* @__PURE__ */ E("div", L({
		className: xt(ve.root, pe, l),
		role: "gridcell",
		"data-field": N,
		"data-colindex": s,
		"aria-colindex": s + 1,
		"aria-colspan": d,
		"aria-rowspan": Ce,
		style: we,
		title: De,
		tabIndex: de,
		onClick: xe("cellClick", v),
		onDoubleClick: xe("cellDoubleClick", y),
		onMouseOver: xe("cellMouseOver", S),
		onMouseDown: be("cellMouseDown"),
		onMouseUp: ye("cellMouseUp"),
		onKeyDown: xe("cellKeyDown", C),
		onKeyUp: xe("cellKeyUp", w)
	}, Oe, k, {
		onFocus: Te,
		ref: ge,
		children: Ee
	}));
});
process.env.NODE_ENV !== "production" && (c_.displayName = "GridCell"), process.env.NODE_ENV !== "production" && (c_.propTypes = {
	align: q.default.oneOf([
		"center",
		"left",
		"right"
	]).isRequired,
	colIndex: q.default.number.isRequired,
	colSpan: q.default.number,
	column: q.default.object.isRequired,
	disableDragEvents: q.default.bool,
	isNotVisible: q.default.bool.isRequired,
	pinnedOffset: q.default.number,
	pinnedPosition: q.default.oneOf([
		0,
		1,
		2,
		3
	]).isRequired,
	row: q.default.object.isRequired,
	rowId: q.default.oneOfType([q.default.number, q.default.string]).isRequired,
	rowNode: q.default.object.isRequired,
	showLeftBorder: q.default.bool.isRequired,
	showRightBorder: q.default.bool.isRequired,
	width: q.default.number.isRequired
});
var l_ = Co(c_), u_ = [
	"field",
	"type",
	"align",
	"width",
	"height",
	"empty",
	"style",
	"className"
], d_ = "1.3em", f_ = "1.2em", p_ = [40, 80], m_ = {
	number: [40, 60],
	string: [40, 80],
	date: [40, 60],
	dateTime: [60, 80],
	singleSelect: [40, 80]
}, h_ = (e) => {
	let { align: t, classes: n, empty: r } = e;
	return Bi({ root: [
		"cell",
		"cellSkeleton",
		`cell--text${t ? ip(t) : "Left"}`,
		r && "cellEmpty"
	] }, jn, n);
}, g_ = hs(12345);
function __(e) {
	let { field: t, type: n, align: r, width: i, height: a, empty: o = !1, style: s, className: c } = e, l = R(e, u_), u = B(), d = h_({
		classes: u.classes,
		align: r,
		empty: o
	}), f = O.useMemo(() => {
		if (n === "boolean" || n === "actions") return {
			variant: "circular",
			width: d_,
			height: d_
		};
		let [e, t] = n ? m_[n] ?? p_ : p_;
		return {
			variant: "text",
			width: `${Math.round(g_(e, t))}%`,
			height: f_
		};
	}, [n]);
	return /* @__PURE__ */ E("div", L({
		"data-field": t,
		className: xt(d.root, c),
		style: L({
			height: a,
			maxWidth: i,
			minWidth: i
		}, s)
	}, l, { children: !o && /* @__PURE__ */ E(u.slots.baseSkeleton, L({}, f)) }));
}
process.env.NODE_ENV !== "production" && (__.propTypes = {
	align: q.default.string,
	empty: q.default.bool,
	field: q.default.string,
	height: q.default.oneOfType([q.default.oneOf(["auto"]), q.default.number]),
	type: q.default.oneOf([
		"actions",
		"boolean",
		"custom",
		"date",
		"dateTime",
		"number",
		"singleSelect",
		"string"
	]),
	width: q.default.oneOfType([q.default.number, q.default.string])
});
var v_ = Co(__), y_ = () => () => {}, b_ = () => !1, x_ = () => !0, S_ = () => (0, Hn.useSyncExternalStore)(y_, b_, x_), C_ = /* @__PURE__ */ O.createContext(void 0);
process.env.NODE_ENV !== "production" && (C_.displayName = "GridPanelContext");
function w_() {
	let e = O.useContext(C_);
	if (e === void 0) throw Error("MUI X: Missing context.");
	return e;
}
function T_({ children: e }) {
	let t = O.useRef(null), n = O.useRef(null), r = O.useRef(null), i = O.useMemo(() => ({
		columnsPanelTriggerRef: t,
		filterPanelTriggerRef: n,
		aiAssistantPanelTriggerRef: r
	}), []);
	return /* @__PURE__ */ E(C_.Provider, {
		value: i,
		children: e
	});
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/panel/GridPreferencesPanel.js
function E_() {
	let e = V(), t = W(e, Hs), n = B(), r = W(e, Um), { columnsPanelTriggerRef: i, filterPanelTriggerRef: a, aiAssistantPanelTriggerRef: o } = w_(), s = e.current.unstable_applyPipeProcessors("preferencePanel", null, r.openedPanelValue ?? Gm.filters), c = null;
	switch (r.openedPanelValue) {
		case Gm.filters:
			c = a.current;
			break;
		case Gm.columns:
			c = i.current;
			break;
		case Gm.aiAssistant:
			c = o.current;
			break;
		default:
	}
	return /* @__PURE__ */ E(n.slots.panel, L({
		id: r.panelId,
		open: t.length > 0 && r.open,
		"aria-labelledby": r.labelId,
		target: c,
		onClose: () => e.current.hidePreferences()
	}, n.slotProps?.panel, { children: s }));
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/GridHeader.js
function D_() {
	let e = B();
	return /* @__PURE__ */ D(O.Fragment, { children: [/* @__PURE__ */ E(E_, {}), e.showToolbar && /* @__PURE__ */ E(e.slots.toolbar, L({}, e.slotProps?.toolbar))] });
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/containers/GridRoot.js
var O_ = [
	"className",
	"children",
	"sidePanel"
], k_ = (e, t) => {
	let { autoHeight: n, classes: r, showCellVerticalBorder: i } = e;
	return Bi({ root: [
		"root",
		n && "autoHeight",
		`root--density${ip(t)}`,
		e.slots.toolbar === null && "root--noToolbar",
		"withBorderColor",
		i && "withVerticalBorder"
	] }, jn, r);
}, A_ = z(function(e, t) {
	let n = B(), { className: r, children: i, sidePanel: a } = e, o = R(e, O_), s = Zn(), c = W(s, Io), l = s.current.rootElementRef, u = St(l, t, O.useCallback((e) => {
		e !== null && s.current.publishEvent("rootMount", e);
	}, [s])), d = n, f = k_(d, c), p = Fc();
	return S_() ? null : /* @__PURE__ */ D(ir, L({
		className: xt(f.root, r, p.className, a && U.withSidePanel),
		ownerState: d
	}, o, {
		ref: u,
		children: [
			/* @__PURE__ */ D("div", {
				className: U.mainContent,
				role: "presentation",
				children: [
					/* @__PURE__ */ E(D_, {}),
					/* @__PURE__ */ E(qg, { children: i }),
					/* @__PURE__ */ E(Jg, {})
				]
			}),
			a,
			p.tag
		]
	}));
});
process.env.NODE_ENV !== "production" && (A_.displayName = "GridRoot"), process.env.NODE_ENV !== "production" && (A_.propTypes = {
	sidePanel: q.default.node,
	sx: q.default.oneOfType([
		q.default.arrayOf(q.default.oneOfType([
			q.default.func,
			q.default.object,
			q.default.bool
		])),
		q.default.func,
		q.default.object
	])
});
var j_ = Co(A_), M_ = ["className"], N_ = (e) => {
	let { classes: t } = e;
	return Bi({ root: ["footerContainer", "withBorderColor"] }, jn, t);
}, P_ = Cm("div", {
	name: "MuiDataGrid",
	slot: "FooterContainer"
})({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	minHeight: 52,
	borderTop: "1px solid"
}), F_ = z(function(e, t) {
	let { className: n } = e, r = R(e, M_), i = B();
	return /* @__PURE__ */ E(P_, L({
		className: xt(N_(i).root, n),
		ownerState: i
	}, r, { ref: t }));
});
process.env.NODE_ENV !== "production" && (F_.displayName = "GridFooterContainer"), process.env.NODE_ENV !== "production" && (F_.propTypes = { sx: q.default.oneOfType([
	q.default.arrayOf(q.default.oneOfType([
		q.default.func,
		q.default.object,
		q.default.bool
	])),
	q.default.func,
	q.default.object
]) });
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/containers/GridOverlay.js
var I_ = ["className"], L_ = (e) => {
	let { classes: t } = e;
	return Bi({ root: ["overlay"] }, jn, t);
}, R_ = Cm("div", {
	name: "MuiDataGrid",
	slot: "Overlay"
})({
	width: "100%",
	height: "100%",
	display: "flex",
	gap: H.spacing(1),
	flexDirection: "column",
	alignSelf: "center",
	alignItems: "center",
	justifyContent: "center",
	textAlign: "center",
	textWrap: "balance",
	backgroundColor: H.colors.background.backdrop
}), z_ = z(function(e, t) {
	let { className: n } = e, r = R(e, I_), i = B();
	return /* @__PURE__ */ E(R_, L({
		className: xt(L_(i).root, n),
		ownerState: i
	}, r, { ref: t }));
});
process.env.NODE_ENV !== "production" && (z_.displayName = "GridOverlay"), process.env.NODE_ENV !== "production" && (z_.propTypes = { sx: q.default.oneOfType([
	q.default.arrayOf(q.default.oneOfType([
		q.default.func,
		q.default.object,
		q.default.bool
	])),
	q.default.func,
	q.default.object
]) });
//#endregion
//#region node_modules/@mui/x-internals/esm/useComponentRenderer/useComponentRenderer.js
function B_(e, t, n, r = {}) {
	return typeof t == "function" ? t(n, r) : t ? (t.props.className && (n.className = V_(t.props.className, n.className)), (t.props.style || n.style) && (n.style = L({}, n.style, t.props.style)), /* @__PURE__ */ O.cloneElement(t, n)) : /* @__PURE__ */ O.createElement(e, n);
}
function V_(e, t) {
	return !e || !t ? e || t : `${e} ${t}`;
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/toolbarV8/ToolbarContext.js
var H_ = /* @__PURE__ */ O.createContext(void 0);
process.env.NODE_ENV !== "production" && (H_.displayName = "ToolbarContext");
function U_() {
	let e = O.useContext(H_);
	if (e === void 0) throw Error("MUI X: Missing context. Toolbar subcomponents must be placed within a <Toolbar /> component.");
	return e;
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/toolbarV8/utils.js
function W_(e, t) {
	if (!e.ref.current || !t.ref.current) return 0;
	let n = e.ref.current.compareDocumentPosition(t.ref.current);
	return n ? n & Node.DOCUMENT_POSITION_FOLLOWING || n & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : n & Node.DOCUMENT_POSITION_PRECEDING || n & Node.DOCUMENT_POSITION_CONTAINS ? 1 : 0 : 0;
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/toolbarV8/Toolbar.js
var G_ = ["render", "className"], K_ = (e) => {
	let { classes: t } = e;
	return Bi({ root: ["toolbar"] }, jn, t);
}, q_ = I("div", {
	name: "MuiDataGrid",
	slot: "Toolbar"
})({
	flex: "0 1 1px",
	display: "flex",
	alignItems: "center",
	justifyContent: "end",
	gap: H.spacing(.25),
	padding: H.spacing(.75),
	minHeight: 52,
	boxSizing: "border-box",
	borderBottom: `1px solid ${H.colors.border.base}`
}), J_ = z(function(e, t) {
	let { render: n, className: r } = e, i = R(e, G_), a = B(), o = K_(a), [s, c] = O.useState(null), [l, u] = O.useState([]), d = O.useCallback(() => l.sort(W_), [l]), f = O.useCallback((e, t, n = !0) => {
		let r = e, i = d(), a = i.length;
		for (let e = 0; e < a; e += 1) {
			if (r += t, r >= a) {
				if (!n) return -1;
				r = 0;
			} else if (r < 0) {
				if (!n) return -1;
				r = a - 1;
			}
			if (!i[r].ref.current?.disabled && i[r].ref.current?.ariaDisabled !== "true") return r;
		}
		return -1;
	}, [d]), p = O.useCallback((e, t) => {
		u((n) => [...n, {
			id: e,
			ref: t
		}]);
	}, []), m = O.useCallback((e) => {
		u((t) => t.filter((t) => t.id !== e));
	}, []), h = O.useCallback((e) => {
		if (!s) return;
		let t = d(), n = t.findIndex((e) => e.id === s), r = -1;
		if (e.key === "ArrowRight" ? (e.preventDefault(), r = f(n, 1)) : e.key === "ArrowLeft" ? (e.preventDefault(), r = f(n, -1)) : e.key === "Home" ? (e.preventDefault(), r = f(-1, 1, !1)) : e.key === "End" && (e.preventDefault(), r = f(t.length, -1, !1)), r >= 0 && r < t.length) {
			let e = t[r];
			c(e.id), e.ref.current?.focus();
		}
	}, [
		d,
		s,
		f
	]), g = O.useCallback((e) => {
		s !== e && c(e);
	}, [s, c]), _ = O.useCallback((e) => {
		let t = d(), n = f(t.findIndex((t) => t.id === e), 1);
		if (n >= 0 && n < t.length) {
			let e = t[n];
			c(e.id), e.ref.current?.focus();
		}
	}, [d, f]);
	O.useEffect(() => {
		let e = d();
		if (e.length > 0) {
			if (!s) {
				c(e[0].id);
				return;
			}
			let t = e.findIndex((e) => e.id === s);
			if (!e[t]) {
				let t = e[e.length - 1];
				t && (c(t.id), t.ref.current?.focus());
			} else if (t === -1) {
				let n = e[t];
				n && (c(n.id), n.ref.current?.focus());
			}
		}
	}, [d, f]);
	let v = O.useMemo(() => ({
		focusableItemId: s,
		registerItem: p,
		unregisterItem: m,
		onItemKeyDown: h,
		onItemFocus: g,
		onItemDisabled: _
	}), [
		s,
		p,
		m,
		h,
		g,
		_
	]), y = B_(q_, n, L({
		role: "toolbar",
		"aria-orientation": "horizontal",
		"aria-label": a.label || void 0,
		className: xt(o.root, r)
	}, i, { ref: t }));
	return /* @__PURE__ */ E(H_.Provider, {
		value: v,
		children: y
	});
});
process.env.NODE_ENV !== "production" && (J_.displayName = "Toolbar"), process.env.NODE_ENV !== "production" && (J_.propTypes = { render: q.default.oneOfType([q.default.element, q.default.func]) });
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/toolbarV8/ToolbarButton.js
var Y_ = [
	"render",
	"onKeyDown",
	"onFocus",
	"disabled",
	"aria-disabled"
], X_ = z(function(e, t) {
	let { render: n, onKeyDown: r, onFocus: i, disabled: a, "aria-disabled": o } = e, s = R(e, Y_), c = kt(), l = B(), u = O.useRef(null), d = St(u, t), { focusableItemId: f, registerItem: p, unregisterItem: m, onItemKeyDown: h, onItemFocus: g, onItemDisabled: _ } = U_(), v = (e) => {
		h(e), r?.(e);
	}, y = (e) => {
		g(c), i?.(e);
	};
	O.useEffect(() => (p(c, u), () => m(c)), []);
	let b = O.useRef(a);
	O.useEffect(() => {
		b.current !== a && a === !0 && _(c, a), b.current = a;
	}, [
		a,
		c,
		_
	]);
	let x = O.useRef(o);
	O.useEffect(() => {
		x.current !== o && o === !0 && _(c, !0), x.current = o;
	}, [
		o,
		c,
		_
	]);
	let S = B_(l.slots.baseIconButton, n, L({}, l.slotProps?.baseIconButton, { tabIndex: f === c ? 0 : -1 }, s, {
		disabled: a,
		"aria-disabled": o,
		onKeyDown: v,
		onFocus: y,
		ref: d
	}));
	return /* @__PURE__ */ E(O.Fragment, { children: S });
});
process.env.NODE_ENV !== "production" && (X_.displayName = "ToolbarButton"), process.env.NODE_ENV !== "production" && (X_.propTypes = {
	className: q.default.string,
	color: q.default.oneOf([
		"default",
		"inherit",
		"primary"
	]),
	disabled: q.default.bool,
	edge: q.default.oneOf([
		"end",
		"start",
		!1
	]),
	id: q.default.string,
	label: q.default.string,
	render: q.default.oneOfType([q.default.element, q.default.func]),
	role: q.default.string,
	size: q.default.oneOf([
		"large",
		"medium",
		"small"
	]),
	style: q.default.object,
	tabIndex: q.default.number,
	title: q.default.string,
	touchRippleRef: q.default.any
});
//#endregion
//#region node_modules/@mui/x-data-grid/esm/hooks/features/columnMenu/getColumnMenuItemKeys.js
function Z_(e) {
	let { apiRef: t, colDef: n, defaultSlots: r, defaultSlotProps: i, slots: a = {}, slotProps: o = {} } = e, s = L({}, r, a), c = i;
	if (o && Object.keys(o).length > 0) {
		let e = L({}, o);
		Object.entries(i).forEach(([t, n]) => {
			e[t] = L({}, n, o[t] || {});
		}), c = e;
	}
	let l = t.current.unstable_applyPipeProcessors("columnMenu", [], n), u = Object.keys(r), d = Object.keys(a).filter((e) => !u.includes(e));
	return Array.from(new Set([...l, ...d])).filter((e) => s[e] != null).sort((e, t) => {
		let n = c[e], r = c[t];
		return (Number.isFinite(n?.displayOrder) ? n.displayOrder : 100) - (Number.isFinite(r?.displayOrder) ? r.displayOrder : 100);
	});
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/columnHeaders/ColumnHeaderMenuIcon.js
var Q_ = (e) => {
	let { classes: t, open: n } = e;
	return Bi({
		root: ["menuIcon", n && "menuOpen"],
		button: ["menuIconButton"]
	}, jn, t);
}, $_ = /* @__PURE__ */ O.memo((e) => {
	let { colDef: t, open: n, columnMenuId: r, columnMenuButtonId: i, iconButtonRef: a } = e, o = V(), s = B(), c = Q_(L({}, e, { classes: s.classes })), l = O.useCallback((e) => {
		e.preventDefault(), e.stopPropagation(), o.current.toggleColumnMenu(t.field);
	}, [o, t.field]), u = t.headerName ?? t.field;
	return /* @__PURE__ */ E("div", {
		className: c.root,
		children: /* @__PURE__ */ E(s.slots.baseTooltip, L({
			title: o.current.getLocaleText("columnMenuLabel"),
			enterDelay: 1e3
		}, s.slotProps?.baseTooltip, { children: /* @__PURE__ */ E(s.slots.baseIconButton, L({
			ref: a,
			tabIndex: -1,
			className: c.button,
			"aria-label": o.current.getLocaleText("columnMenuAriaLabel")(u),
			size: "small",
			onClick: l,
			"aria-haspopup": "menu",
			"aria-expanded": n,
			"aria-controls": n ? r : void 0,
			id: i
		}, s.slotProps?.baseIconButton, { children: /* @__PURE__ */ E(s.slots.columnMenuIcon, { fontSize: "inherit" }) })) }))
	});
});
process.env.NODE_ENV !== "production" && ($_.displayName = "ColumnHeaderMenuIcon");
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/menu/columnMenu/GridColumnHeaderMenu.js
function ev({ columnMenuId: e, columnMenuButtonId: t, ContentComponent: n, contentComponentProps: r, field: i, open: a, target: o, onExited: s }) {
	let c = V(), l = c.current.getColumn(i), u = wt((e) => {
		e && (e.stopPropagation(), o?.contains(e.target)) || c.current.hideColumnMenu();
	});
	return !o || !l ? null : /* @__PURE__ */ E(Vc, {
		position: `bottom-${l.align === "right" ? "start" : "end"}`,
		open: a,
		target: o,
		onClose: u,
		onExited: s,
		children: /* @__PURE__ */ E(n, L({
			colDef: l,
			hideMenu: u,
			open: a,
			id: e,
			labelledby: t
		}, r))
	});
}
process.env.NODE_ENV !== "production" && (ev.propTypes = {
	columnMenuButtonId: q.default.string,
	columnMenuId: q.default.string,
	ContentComponent: q.default.elementType.isRequired,
	contentComponentProps: q.default.any,
	field: q.default.string.isRequired,
	onExited: q.default.func,
	open: q.default.bool.isRequired,
	target: Cc
});
//#endregion
//#region node_modules/@mui/x-data-grid/esm/utils/domUtils.js
function tv(e) {
	return e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth;
}
function nv(e, t) {
	return e.closest(`.${t}`);
}
function rv(e) {
	return e.replace(/["\\]/g, "\\$&");
}
function iv(e, t) {
	return e.querySelector(`[role="columnheader"][data-field="${rv(t)}"]`);
}
function av(e) {
	return `.${U.row}[data-id="${rv(String(e))}"]`;
}
function ov(e, t) {
	return e.querySelector(av(t));
}
function sv(e, { id: t, field: n }) {
	let r = `${av(t)} ${`.${U.cell}[data-field="${rv(n)}"]`}`;
	return e.querySelector(r);
}
function cv(e) {
	return e.target.nodeType === 1 && !e.currentTarget.contains(e.target);
}
function lv(e) {
	return e.getAttribute("data-field");
}
function uv(e, t) {
	return e.querySelector(`[data-field="${rv(t)}"]`);
}
function dv(e) {
	return e.getAttribute("data-fields").slice(2, -2).split("-|-");
}
function fv(e, t) {
	return Array.from(e.querySelectorAll(`[data-fields*="|-${rv(t)}-|"]`) ?? []);
}
function pv(e, t) {
	if (!nv(e, U.root)) throw Error("MUI X: The root element is not found.");
	let n = e.getAttribute("aria-colindex");
	if (!n) return [];
	let r = Number(n) - 1, i = [];
	return t.virtualScrollerRef?.current ? (wv(t).forEach((e) => {
		let n = e.getAttribute("data-id");
		if (!n) return;
		let a = r, o = t.unstable_getCellColSpanInfo(n, r);
		o && o.spannedByColSpan && (a = o.leftVisibleCellIndex);
		let s = e.querySelector(`[data-colindex="${a}"]`);
		s && i.push(s);
	}), i) : [];
}
function mv(e, t) {
	return e.rootElementRef.current.querySelector(`.${U[t]}`);
}
var hv = ({ api: e, colIndex: t, position: n, filterFn: r }) => {
	if (t === null) return [];
	let i = [];
	return wv(e).forEach((e) => {
		e.getAttribute("data-id") && e.querySelectorAll(`.${U[n === "left" ? "cell--pinnedLeft" : "cell--pinnedRight"]}`).forEach((e) => {
			let t = Tv(e);
			t !== null && r(t) && i.push(e);
		});
	}), i;
};
function gv(e, t, n) {
	let r = Tv(t);
	return hv({
		api: e,
		colIndex: r,
		position: n ? "right" : "left",
		filterFn: (e) => n ? e < r : e > r
	});
}
function _v(e, t, n) {
	let r = Tv(t);
	return hv({
		api: e,
		colIndex: r,
		position: n ? "left" : "right",
		filterFn: (e) => n ? e > r : e < r
	});
}
var vv = ({ api: e, colIndex: t, position: n, filterFn: r }) => {
	if (!e.columnHeadersContainerRef?.current || t === null) return [];
	let i = [];
	return e.columnHeadersContainerRef.current.querySelectorAll(`.${U[n === "left" ? "columnHeader--pinnedLeft" : "columnHeader--pinnedRight"]}`).forEach((e) => {
		let t = Tv(e);
		t !== null && r(t, e) && i.push(e);
	}), i;
};
function yv(e, t, n) {
	let r = Tv(t);
	return vv({
		api: e,
		position: n ? "right" : "left",
		colIndex: r,
		filterFn: (e) => n ? e < r : e > r
	});
}
function bv(e, t, n) {
	let r = Tv(t);
	return vv({
		api: e,
		position: n ? "left" : "right",
		colIndex: r,
		filterFn: (e, t) => t.classList.contains(U["columnHeader--last"]) ? !1 : n ? e > r : e < r
	});
}
function xv(e, t) {
	return e.columnHeadersContainerRef.current.querySelector(`:scope > div > [data-field="${rv(t)}"][role="columnheader"]`);
}
function Sv(e, t) {
	return e.columnHeadersContainerRef.current.querySelector(`:scope > .${U.headerFilterRow} > [data-field="${rv(t)}"]`);
}
function Cv(e, t) {
	let n = e.virtualScrollerRef.current;
	return Array.from(n.querySelectorAll(`:scope > div > div > div > [data-field="${rv(t)}"][role="gridcell"]`));
}
function wv(e) {
	return e.virtualScrollerRef.current.querySelectorAll(`:scope > div > div > .${U.row}`);
}
function Tv(e) {
	let t = e.getAttribute("aria-colindex");
	return t ? Number(t) - 1 : null;
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/columnHeaders/GridColumnHeaderTitle.js
var Ev = ["className", "aria-label"], Dv = (e) => {
	let { classes: t } = e;
	return Bi({ root: ["columnHeaderTitle"] }, jn, t);
}, Ov = I("div", {
	name: "MuiDataGrid",
	slot: "ColumnHeaderTitle"
})({
	textOverflow: "ellipsis",
	overflow: "hidden",
	whiteSpace: "nowrap",
	fontWeight: "var(--unstable_DataGrid-headWeight)",
	lineHeight: "normal"
}), kv = z(function(e, t) {
	let { className: n } = e, r = R(e, Ev), i = B();
	return /* @__PURE__ */ E(Ov, L({
		className: xt(Dv(i).root, n),
		ownerState: i
	}, r, { ref: t }));
});
process.env.NODE_ENV !== "production" && (kv.displayName = "ColumnHeaderInnerTitle");
function Av(e) {
	let { label: t, description: n } = e, r = B(), i = O.useRef(null), [a, o] = O.useState(""), s = O.useCallback(() => {
		!n && i?.current && (tv(i.current) ? o(t) : o(""));
	}, [n, t]);
	return /* @__PURE__ */ E(r.slots.baseTooltip, L({ title: n || a }, r.slotProps?.baseTooltip, { children: /* @__PURE__ */ E(kv, {
		onMouseOver: s,
		ref: i,
		children: t
	}) }));
}
process.env.NODE_ENV !== "production" && (Av.propTypes = {
	columnWidth: q.default.number.isRequired,
	description: q.default.node,
	label: q.default.string.isRequired
});
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/columnHeaders/GridColumnHeaderSeparator.js
var jv = [
	"resizable",
	"resizing",
	"height",
	"side"
], Mv = /* @__PURE__ */ function(e) {
	return e.Left = "left", e.Right = "right", e;
}(Mv || {}), Nv = (e) => {
	let { resizable: t, resizing: n, classes: r, side: i } = e;
	return Bi({
		root: [
			"columnSeparator",
			t && "columnSeparator--resizable",
			n && "columnSeparator--resizing",
			i && `columnSeparator--side${ip(i)}`
		],
		icon: ["iconSeparator"]
	}, jn, r);
};
function Pv(e) {
	let { height: t, side: n = Mv.Right } = e, r = R(e, jv), i = B(), a = Nv(L({}, e, {
		side: n,
		classes: i.classes
	})), o = O.useCallback((e) => {
		e.preventDefault(), e.stopPropagation();
	}, []);
	return /* @__PURE__ */ E("div", L({
		className: a.root,
		style: { minHeight: t }
	}, r, {
		onClick: o,
		children: /* @__PURE__ */ E(i.slots.columnResizeIcon, { className: a.icon })
	}));
}
var Fv = /* @__PURE__ */ O.memo(Pv);
process.env.NODE_ENV !== "production" && (Fv.displayName = "GridColumnHeaderSeparator"), process.env.NODE_ENV !== "production" && (Pv.propTypes = {
	height: q.default.number.isRequired,
	resizable: q.default.bool.isRequired,
	resizing: q.default.bool.isRequired,
	side: q.default.oneOf(["left", "right"])
});
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/columnHeaders/GridGenericColumnHeaderItem.js
var Iv = [
	"classes",
	"columnMenuOpen",
	"colIndex",
	"height",
	"isResizing",
	"sortDirection",
	"hasFocus",
	"tabIndex",
	"separatorSide",
	"isDraggable",
	"headerComponent",
	"description",
	"elementId",
	"width",
	"columnMenuIconButton",
	"columnMenu",
	"columnTitleIconButtons",
	"headerClassName",
	"label",
	"resizable",
	"draggableContainerProps",
	"columnHeaderSeparatorProps",
	"style"
], Lv = z(function(e, t) {
	let { classes: n, colIndex: r, height: i, isResizing: a, sortDirection: o, tabIndex: s, separatorSide: c, isDraggable: l, headerComponent: u, description: d, width: f, columnMenuIconButton: p = null, columnMenu: m = null, columnTitleIconButtons: h = null, headerClassName: g, label: _, resizable: v, draggableContainerProps: y, columnHeaderSeparatorProps: b, style: x } = e, S = R(e, Iv), C = B(), w = St(O.useRef(null), t), T = "none";
	return o != null && (T = o === "asc" ? "ascending" : "descending"), /* @__PURE__ */ D("div", L({
		className: xt(n.root, g),
		style: L({}, x, { width: f }),
		role: "columnheader",
		tabIndex: s,
		"aria-colindex": r + 1,
		"aria-sort": T
	}, S, {
		ref: w,
		children: [
			/* @__PURE__ */ D("div", L({
				className: n.draggableContainer,
				draggable: l,
				role: "presentation"
			}, y, { children: [/* @__PURE__ */ D("div", {
				className: n.titleContainer,
				role: "presentation",
				children: [/* @__PURE__ */ E("div", {
					className: n.titleContainerContent,
					children: u === void 0 ? /* @__PURE__ */ E(Av, {
						label: _,
						description: d,
						columnWidth: f
					}) : u
				}), h]
			}), p] })),
			/* @__PURE__ */ E(Fv, L({
				resizable: !C.disableColumnResize && !!v,
				resizing: a,
				height: i,
				side: c
			}, b)),
			m
		]
	}));
});
process.env.NODE_ENV !== "production" && (Lv.displayName = "GridGenericColumnHeaderItem");
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/columnHeaders/GridColumnHeaderItem.js
var Rv = (e) => {
	let { disableColumnSorting: t } = B(), { colDef: n, classes: r, isDragging: i, sortDirection: a, showRightBorder: o, showLeftBorder: s, filterItemsCounter: c, pinnedPosition: l, isSiblingFocused: u } = e, d = n.sortable && !t, f = a != null, p = c != null && c > 0, m = n.type === "number";
	return Bi({
		root: [
			"columnHeader",
			n.headerAlign && `columnHeader--align${ip(n.headerAlign)}`,
			d && "columnHeader--sortable",
			i && "columnHeader--moving",
			f && "columnHeader--sorted",
			p && "columnHeader--filtered",
			m && "columnHeader--numeric",
			"withBorderColor",
			o && "columnHeader--withRightBorder",
			s && "columnHeader--withLeftBorder",
			l === Qc.LEFT && "columnHeader--pinnedLeft",
			l === Qc.RIGHT && "columnHeader--pinnedRight",
			u && "columnHeader--siblingFocused"
		],
		draggableContainer: ["columnHeaderDraggableContainer"],
		titleContainer: ["columnHeaderTitleContainer"],
		titleContainerContent: ["columnHeaderTitleContainerContent"]
	}, jn, r);
};
function zv(e) {
	let { colDef: t, columnMenuOpen: n, colIndex: r, headerHeight: i, isResizing: a, isLast: o, sortDirection: s, sortIndex: c, filterItemsCounter: l, hasFocus: u, tabIndex: d, disableReorder: f, separatorSide: p, showLeftBorder: m, showRightBorder: h, pinnedPosition: g, pinnedOffset: _ } = e, v = Zn(), y = B(), b = Sc(), x = O.useRef(null), S = kt(), C = kt(), w = O.useRef(null), [T, k] = O.useState(n), A = y.slotProps?.columnMenu, j = y.slots.columnMenu, M = j?.defaultSlots, N = j?.defaultSlotProps, P = M != null && N != null, ee = O.useMemo(() => P ? Z_({
		apiRef: v,
		colDef: t,
		defaultSlots: M,
		defaultSlotProps: N,
		slots: A?.slots,
		slotProps: A?.slotProps
	}) : [], [
		v,
		t,
		N,
		M,
		P,
		A?.slotProps,
		A?.slots
	]), te = !P || ee.length > 0, ne = !y.disableColumnReorder && !f && !t.disableReorder, F;
	t.renderHeader && (F = t.renderHeader(v.current.getColumnHeaderParams(t.field)));
	let re = Rv(L({}, e, {
		classes: y.classes,
		showRightBorder: h,
		showLeftBorder: m
	})), ie = O.useCallback((e) => (n) => {
		cv(n) || v.current.publishEvent(e, v.current.getColumnHeaderParams(t.field), n);
	}, [v, t.field]), ae = O.useMemo(() => ({
		onClick: ie("columnHeaderClick"),
		onContextMenu: ie("columnHeaderContextMenu"),
		onDoubleClick: ie("columnHeaderDoubleClick"),
		onMouseOver: ie("columnHeaderOver"),
		onMouseOut: ie("columnHeaderOut"),
		onMouseEnter: ie("columnHeaderEnter"),
		onMouseLeave: ie("columnHeaderLeave"),
		onKeyDown: ie("columnHeaderKeyDown"),
		onFocus: ie("columnHeaderFocus"),
		onBlur: ie("columnHeaderBlur")
	}), [ie]), oe = O.useMemo(() => ne ? {
		onDragStart: ie("columnHeaderDragStart"),
		onDragEnter: ie("columnHeaderDragEnter"),
		onDragOver: ie("columnHeaderDragOver"),
		onDragEndCapture: ie("columnHeaderDragEnd")
	} : {}, [ne, ie]), se = O.useMemo(() => ({
		onMouseDown: ie("columnSeparatorMouseDown"),
		onDoubleClick: ie("columnSeparatorDoubleClick")
	}), [ie]);
	O.useEffect(() => {
		!T && n && k(n);
	}, [T, n]), O.useEffect(() => {
		P && n && !te && v.current.hideColumnMenu();
	}, [
		v,
		n,
		te,
		P
	]);
	let ce = O.useCallback(() => {
		k(!1);
	}, []), le = !y.disableColumnMenu && !t.disableColumnMenu && te && /* @__PURE__ */ E($_, {
		colDef: t,
		columnMenuId: S,
		columnMenuButtonId: C,
		open: T,
		iconButtonRef: w
	}), ue = /* @__PURE__ */ E(ev, {
		columnMenuId: S,
		columnMenuButtonId: C,
		field: t.field,
		open: n,
		target: w.current,
		ContentComponent: y.slots.columnMenu,
		contentComponentProps: y.slotProps?.columnMenu,
		onExited: ce
	}), de = t.sortingOrder ?? y.sortingOrder, I = (t.sortable || s != null) && !t.hideSortIcons && !y.disableColumnSorting, fe = /* @__PURE__ */ D(O.Fragment, { children: [!y.disableColumnFilter && /* @__PURE__ */ E(y.slots.columnHeaderFilterIconButton, L({
		field: t.field,
		counter: l
	}, y.slotProps?.columnHeaderFilterIconButton)), I && /* @__PURE__ */ E(y.slots.columnHeaderSortIcon, L({
		field: t.field,
		direction: s,
		index: c,
		sortingOrder: de,
		disabled: !t.sortable
	}, y.slotProps?.columnHeaderSortIcon))] });
	O.useLayoutEffect(() => {
		let e = v.current.state.columnMenu;
		if (u && !e.open) {
			let e = x.current.querySelector("[tabindex=\"0\"]") || x.current;
			if (!e) return;
			if (Xg()) e.focus({ preventScroll: !0 });
			else {
				let t = v.current.getScrollPosition();
				e.focus(), v.current.scroll(t);
			}
		}
	}, [v, u]);
	let pe = typeof t.headerClassName == "function" ? t.headerClassName({
		field: t.field,
		colDef: t
	}) : t.headerClassName, me = t.headerName ?? t.field, he = O.useMemo(() => r_(L({}, e.style), b, g, _), [
		g,
		_,
		e.style,
		b
	]);
	return /* @__PURE__ */ E(Lv, L({
		ref: x,
		classes: re,
		columnMenuOpen: n,
		colIndex: r,
		height: i,
		isResizing: a,
		sortDirection: s,
		hasFocus: u,
		tabIndex: d,
		separatorSide: p,
		isDraggable: ne,
		headerComponent: F,
		description: t.description,
		elementId: t.field,
		width: t.computedWidth,
		columnMenuIconButton: le,
		columnTitleIconButtons: fe,
		headerClassName: xt(pe, o && U["columnHeader--last"]),
		label: me,
		resizable: !y.disableColumnResize && !!t.resizable,
		"data-field": t.field,
		columnMenu: ue,
		draggableContainerProps: oe,
		columnHeaderSeparatorProps: se,
		style: he
	}, ae));
}
process.env.NODE_ENV !== "production" && (zv.propTypes = {
	colDef: q.default.object.isRequired,
	colIndex: q.default.number.isRequired,
	columnMenuOpen: q.default.bool.isRequired,
	disableReorder: q.default.bool,
	filterItemsCounter: q.default.number,
	hasFocus: q.default.bool,
	headerHeight: q.default.number.isRequired,
	isDragging: q.default.bool.isRequired,
	isLast: q.default.bool.isRequired,
	isResizing: q.default.bool.isRequired,
	isSiblingFocused: q.default.bool.isRequired,
	pinnedOffset: q.default.number,
	pinnedPosition: q.default.oneOf([
		0,
		1,
		2,
		3
	]),
	separatorSide: q.default.oneOf(["left", "right"]),
	showLeftBorder: q.default.bool.isRequired,
	showRightBorder: q.default.bool.isRequired,
	sortDirection: q.default.oneOf(["asc", "desc"]),
	sortIndex: q.default.number,
	style: q.default.object,
	tabIndex: q.default.oneOf([-1, 0]).isRequired
});
var Bv = Co(zv), Vv = ["className"], Hv = (e) => {
	let { classes: t } = e;
	return Bi({ root: ["iconButtonContainer"] }, jn, t);
}, Uv = I("div", {
	name: "MuiDataGrid",
	slot: "IconButtonContainer"
})(() => ({
	display: "flex",
	visibility: "hidden",
	width: 0
})), Wv = z(function(e, t) {
	let { className: n } = e, r = R(e, Vv), i = B();
	return /* @__PURE__ */ E(Uv, L({
		className: xt(Hv(i).root, n),
		ownerState: i
	}, r, { ref: t }));
});
process.env.NODE_ENV !== "production" && (Wv.displayName = "GridIconButtonContainer");
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/GridColumnSortButton.js
var Gv = [
	"direction",
	"index",
	"sortingOrder",
	"disabled",
	"className"
], Kv = (e) => {
	let { classes: t } = e;
	return Bi({
		root: ["sortButton"],
		icon: ["sortIcon"]
	}, jn, t);
}, qv = I(Vo, {
	name: "MuiDataGrid",
	slot: "SortButton"
})({ transition: H.transition(["opacity"], {
	duration: H.transitions.duration.short,
	easing: H.transitions.easing.easeInOut
}) });
function Jv(e, t, n, r) {
	let i, a = {};
	return t === "asc" ? i = e.columnSortedAscendingIcon : t === "desc" ? i = e.columnSortedDescendingIcon : (i = e.columnUnsortedIcon, a.sortingOrder = r), i ? /* @__PURE__ */ E(i, L({
		fontSize: "small",
		className: n
	}, a)) : null;
}
function Yv(e) {
	let { direction: t, index: n, sortingOrder: r, disabled: i, className: a } = e, o = R(e, Gv), s = V(), c = B(), l = L({}, e, { classes: c.classes }), u = Kv(l), d = Jv(c.slots, t, u.icon, r);
	if (!d) return null;
	let f = /* @__PURE__ */ E(qv, L({
		as: c.slots.baseIconButton,
		ownerState: l,
		"aria-label": s.current.getLocaleText("columnHeaderSortIconLabel"),
		size: "small",
		disabled: i,
		className: xt(u.root, a)
	}, c.slotProps?.baseIconButton, o, { children: d }));
	return /* @__PURE__ */ E(c.slots.baseTooltip, L({
		title: s.current.getLocaleText("columnHeaderSortIconLabel"),
		enterDelay: 1e3
	}, c.slotProps?.baseTooltip, { children: /* @__PURE__ */ D("span", { children: [n != null && /* @__PURE__ */ E(c.slots.baseBadge, {
		badgeContent: n,
		color: "default",
		overlap: "circular",
		children: f
	}), n == null && f] }) }));
}
process.env.NODE_ENV !== "production" && (Yv.propTypes = {
	direction: q.default.oneOf(["asc", "desc"]),
	disabled: q.default.bool,
	field: q.default.string.isRequired,
	index: q.default.number,
	onClick: q.default.func,
	sortingOrder: q.default.arrayOf(q.default.oneOf(["asc", "desc"])).isRequired
});
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/columnHeaders/GridColumnHeaderSortIcon.js
function Xv(e) {
	return /* @__PURE__ */ E(Wv, { children: /* @__PURE__ */ E(Yv, L({}, e, { tabIndex: -1 })) });
}
var Zv = /* @__PURE__ */ O.memo(Xv);
process.env.NODE_ENV !== "production" && (Zv.displayName = "GridColumnHeaderSortIcon"), process.env.NODE_ENV !== "production" && (Xv.propTypes = {
	className: q.default.string,
	color: q.default.oneOf([
		"default",
		"inherit",
		"primary"
	]),
	direction: q.default.oneOf(["asc", "desc"]),
	disabled: q.default.bool,
	edge: q.default.oneOf([
		"end",
		"start",
		!1
	]),
	field: q.default.string.isRequired,
	id: q.default.string,
	index: q.default.number,
	label: q.default.string,
	role: q.default.string,
	size: q.default.oneOf([
		"large",
		"medium",
		"small"
	]),
	sortingOrder: q.default.arrayOf(q.default.oneOf(["asc", "desc"])).isRequired,
	style: q.default.object,
	tabIndex: q.default.number,
	title: q.default.string,
	touchRippleRef: q.default.any
});
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/columnHeaders/GridColumnHeaderFilterIconButton.js
var Qv = (e) => {
	let { classes: t } = e;
	return Bi({ icon: ["filterIcon"] }, jn, t);
};
function $v(e) {
	return e.counter ? /* @__PURE__ */ E(ey, L({}, e)) : null;
}
process.env.NODE_ENV !== "production" && ($v.propTypes = {
	counter: q.default.number,
	field: q.default.string.isRequired,
	onClick: q.default.func
});
function ey(e) {
	let { counter: t, field: n, onClick: r } = e, i = V(), a = B(), o = Qv(L({}, e, { classes: a.classes })), s = kt(), c = W(i, Wm, s), l = kt(), u = O.useCallback((e) => {
		e.preventDefault(), e.stopPropagation();
		let { open: t, openedPanelValue: a } = Um(i);
		t && a === Gm.filters ? i.current.hideFilterPanel() : i.current.showFilterPanel(void 0, l, s), r && r(i.current.getColumnHeaderParams(n), e);
	}, [
		i,
		n,
		r,
		l,
		s
	]);
	if (!t) return null;
	let d = /* @__PURE__ */ E(a.slots.baseIconButton, L({
		id: s,
		onClick: u,
		"aria-label": i.current.getLocaleText("columnHeaderFiltersLabel"),
		size: "small",
		tabIndex: -1,
		"aria-haspopup": "menu",
		"aria-expanded": c,
		"aria-controls": c ? l : void 0
	}, a.slotProps?.baseIconButton, { children: /* @__PURE__ */ E(a.slots.columnFilteredIcon, {
		className: o.icon,
		fontSize: "small"
	}) }));
	return /* @__PURE__ */ E(a.slots.baseTooltip, L({
		title: i.current.getLocaleText("columnHeaderFiltersTooltipActive")(t),
		enterDelay: 1e3
	}, a.slotProps?.baseTooltip, { children: /* @__PURE__ */ D(Wv, { children: [t > 1 && /* @__PURE__ */ E(a.slots.baseBadge, {
		badgeContent: t,
		color: "default",
		children: d
	}), t === 1 && d] }) }));
}
process.env.NODE_ENV !== "production" && (ey.propTypes = {
	counter: q.default.number,
	field: q.default.string.isRequired,
	onClick: q.default.func
});
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/menu/columnMenu/GridColumnMenuContainer.js
var ty = [
	"hideMenu",
	"colDef",
	"id",
	"labelledby",
	"className",
	"children",
	"open"
], ny = I(Vo, { slot: "internal" })(() => ({ minWidth: 248 }));
function ry(e) {
	e.currentTarget.contains(e.target) && e.stopPropagation();
}
var iy = z(function(e, t) {
	let { hideMenu: n, id: r, labelledby: i, className: a, children: o, open: s } = e, c = R(e, ty), l = B(), u = O.useCallback((e) => {
		e.key === "Tab" && e.preventDefault(), Dc(e.key) && n(e);
	}, [n]);
	return /* @__PURE__ */ E(ny, L({
		as: l.slots.baseMenuList,
		id: r,
		className: xt(U.menuList, a),
		"aria-labelledby": i,
		onKeyDown: u,
		onWheel: ry,
		onTouchMove: ry,
		autoFocus: s
	}, c, {
		ref: t,
		children: o
	}));
});
process.env.NODE_ENV !== "production" && (iy.displayName = "GridColumnMenuContainer"), process.env.NODE_ENV !== "production" && (iy.propTypes = {
	colDef: q.default.object.isRequired,
	hideMenu: q.default.func.isRequired,
	id: q.default.string,
	labelledby: q.default.string,
	open: q.default.bool.isRequired
});
//#endregion
//#region node_modules/@mui/x-data-grid/esm/hooks/features/columnMenu/useGridColumnMenuSlots.js
var ay = ["displayOrder"], oy = (e) => {
	let t = Zn(), n = B(), { defaultSlots: r, defaultSlotProps: i, slots: a = {}, slotProps: o = {}, hideMenu: s, colDef: c, addDividers: l = !0 } = e, u = O.useMemo(() => L({}, r, a), [r, a]), d = O.useMemo(() => {
		if (!o || Object.keys(o).length === 0) return i;
		let e = L({}, o);
		return Object.entries(i).forEach(([t, n]) => {
			e[t] = L({}, n, o[t] || {});
		}), e;
	}, [i, o]);
	return O.useMemo(() => {
		let e = Z_({
			apiRef: t,
			colDef: c,
			defaultSlots: r,
			defaultSlotProps: i,
			slots: a,
			slotProps: o
		});
		return e.reduce((t, r, i) => {
			let a = {
				colDef: c,
				onClick: s
			}, o = d[r];
			if (o) {
				let e = R(o, ay);
				a = L({}, a, e);
			}
			return l && i !== e.length - 1 ? [
				...t,
				[u[r], a],
				[n.slots.baseDivider, {}]
			] : [...t, [u[r], a]];
		}, []);
	}, [
		l,
		t,
		c,
		i,
		r,
		s,
		u,
		d,
		o,
		a,
		n.slots.baseDivider
	]);
};
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/menu/columnMenu/menuItems/GridColumnMenuHideItem.js
function sy(e) {
	let { colDef: t, onClick: n } = e, r = V(), i = B(), a = Gs(r).filter((e) => e.disableColumnMenu !== !0).length === 1, o = O.useCallback((e) => {
		a || (r.current.setColumnVisibility(t.field, !1), n(e));
	}, [
		r,
		t.field,
		n,
		a
	]);
	return i.disableColumnSelector || t.hideable === !1 ? null : /* @__PURE__ */ E(i.slots.baseMenuItem, {
		onClick: o,
		disabled: a,
		iconStart: /* @__PURE__ */ E(i.slots.columnMenuHideIcon, { fontSize: "small" }),
		children: r.current.getLocaleText("columnMenuHideColumn")
	});
}
process.env.NODE_ENV !== "production" && (sy.propTypes = {
	colDef: q.default.object.isRequired,
	onClick: q.default.func.isRequired
});
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/menu/columnMenu/menuItems/GridColumnMenuManageItem.js
function cy(e) {
	let { onClick: t } = e, n = V(), r = B(), i = O.useCallback((e) => {
		t(e), n.current.showPreferences(Gm.columns);
	}, [n, t]);
	return r.disableColumnSelector ? null : /* @__PURE__ */ E(r.slots.baseMenuItem, {
		onClick: i,
		iconStart: /* @__PURE__ */ E(r.slots.columnMenuManageColumnsIcon, { fontSize: "small" }),
		children: n.current.getLocaleText("columnMenuManageColumns")
	});
}
process.env.NODE_ENV !== "production" && (cy.propTypes = {
	colDef: q.default.object.isRequired,
	onClick: q.default.func.isRequired
});
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/menu/columnMenu/menuItems/GridColumnMenuColumnsItem.js
function ly(e) {
	return /* @__PURE__ */ D(O.Fragment, { children: [/* @__PURE__ */ E(sy, L({}, e)), /* @__PURE__ */ E(cy, L({}, e))] });
}
process.env.NODE_ENV !== "production" && (ly.propTypes = {
	colDef: q.default.object.isRequired,
	onClick: q.default.func.isRequired
});
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/menu/columnMenu/menuItems/GridColumnMenuFilterItem.js
function uy(e) {
	let { colDef: t, onClick: n } = e, r = V(), i = B(), a = O.useCallback((e) => {
		n(e), r.current.showFilterPanel(t.field);
	}, [
		r,
		t.field,
		n
	]);
	return i.disableColumnFilter || !t.filterable ? null : /* @__PURE__ */ E(i.slots.baseMenuItem, {
		onClick: a,
		iconStart: /* @__PURE__ */ E(i.slots.columnMenuFilterIcon, { fontSize: "small" }),
		children: r.current.getLocaleText("columnMenuFilter")
	});
}
process.env.NODE_ENV !== "production" && (uy.propTypes = {
	colDef: q.default.object.isRequired,
	onClick: q.default.func.isRequired
});
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/menu/columnMenu/menuItems/GridColumnMenuSortItem.js
function dy(e) {
	let { colDef: t, onClick: n } = e, r = V(), i = W(r, Tl), a = B(), o = O.useMemo(() => t ? i.find((e) => e.field === t.field)?.sort : null, [t, i]), s = t.sortingOrder ?? a.sortingOrder, c = O.useCallback((e) => {
		n(e);
		let i = e.currentTarget.getAttribute("data-value") || null, s = a.multipleColumnsSortingMode === "always";
		r.current.sortColumn(t.field, i === o ? null : i, s);
	}, [
		r,
		t,
		n,
		o,
		a.multipleColumnsSortingMode
	]);
	if (a.disableColumnSorting || !t || !t.sortable || !s.some((e) => !!e)) return null;
	let l = (e) => {
		let n = r.current.getLocaleText(e);
		return typeof n == "function" ? n(t) : n;
	};
	return /* @__PURE__ */ D(O.Fragment, { children: [
		s.includes("asc") && o !== "asc" ? /* @__PURE__ */ E(a.slots.baseMenuItem, {
			onClick: c,
			"data-value": "asc",
			iconStart: /* @__PURE__ */ E(a.slots.columnMenuSortAscendingIcon, { fontSize: "small" }),
			children: l("columnMenuSortAsc")
		}) : null,
		s.includes("desc") && o !== "desc" ? /* @__PURE__ */ E(a.slots.baseMenuItem, {
			onClick: c,
			"data-value": "desc",
			iconStart: /* @__PURE__ */ E(a.slots.columnMenuSortDescendingIcon, { fontSize: "small" }),
			children: l("columnMenuSortDesc")
		}) : null,
		s.includes(null) && o != null ? /* @__PURE__ */ E(a.slots.baseMenuItem, {
			onClick: c,
			iconStart: a.slots.columnMenuUnsortIcon ? /* @__PURE__ */ E(a.slots.columnMenuUnsortIcon, { fontSize: "small" }) : /* @__PURE__ */ E("span", {}),
			children: r.current.getLocaleText("columnMenuUnsort")
		}) : null
	] });
}
process.env.NODE_ENV !== "production" && (dy.propTypes = {
	colDef: q.default.object.isRequired,
	onClick: q.default.func.isRequired
});
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/menu/columnMenu/GridColumnMenu.js
var fy = [
	"defaultSlots",
	"defaultSlotProps",
	"slots",
	"slotProps"
], py = {
	columnMenuSortItem: dy,
	columnMenuFilterItem: uy,
	columnMenuColumnsItem: ly
}, my = {
	columnMenuSortItem: { displayOrder: 10 },
	columnMenuFilterItem: { displayOrder: 20 },
	columnMenuColumnsItem: { displayOrder: 30 }
}, hy = z(function(e, t) {
	let { defaultSlots: n, defaultSlotProps: r, slots: i, slotProps: a } = e, o = R(e, fy);
	return /* @__PURE__ */ E(iy, L({}, o, {
		ref: t,
		children: oy(L({}, o, {
			defaultSlots: n,
			defaultSlotProps: r,
			slots: i,
			slotProps: a
		})).map(([e, t], n) => /* @__PURE__ */ E(e, L({}, t), n))
	}));
});
process.env.NODE_ENV !== "production" && (hy.displayName = "GridGenericColumnMenu"), process.env.NODE_ENV !== "production" && (hy.propTypes = {
	colDef: q.default.object.isRequired,
	defaultSlotProps: q.default.object.isRequired,
	defaultSlots: q.default.object.isRequired,
	hideMenu: q.default.func.isRequired,
	id: q.default.string,
	labelledby: q.default.string,
	open: q.default.bool.isRequired,
	slotProps: q.default.object,
	slots: q.default.object
});
var gy = z(function(e, t) {
	return /* @__PURE__ */ E(hy, L({}, e, {
		ref: t,
		defaultSlots: py,
		defaultSlotProps: my
	}));
});
process.env.NODE_ENV !== "production" && (gy.displayName = "GridColumnMenu"), gy.defaultSlots = py, gy.defaultSlotProps = my, process.env.NODE_ENV !== "production" && (gy.propTypes = {
	colDef: q.default.object.isRequired,
	hideMenu: q.default.func.isRequired,
	id: q.default.string,
	labelledby: q.default.string,
	open: q.default.bool.isRequired,
	slotProps: q.default.object,
	slots: q.default.object
});
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/panel/GridPanelWrapper.js
var _y = ["className"], vy = (e) => {
	let { classes: t } = e;
	return Bi({ root: ["panelWrapper"] }, jn, t);
}, yy = I("div", {
	name: "MuiDataGrid",
	slot: "PanelWrapper"
})({
	display: "flex",
	flexDirection: "column",
	flex: 1,
	"&:focus": { outline: 0 }
}), by = z(function(e, t) {
	let { className: n } = e, r = R(e, _y), i = B();
	return /* @__PURE__ */ E(yy, L({
		tabIndex: -1,
		className: xt(vy(i).root, n),
		ownerState: i
	}, r, { ref: t }));
});
process.env.NODE_ENV !== "production" && (by.displayName = "GridPanelWrapper");
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/panel/GridColumnsPanel.js
function xy(e) {
	let t = B();
	return /* @__PURE__ */ E(by, L({}, e, { children: /* @__PURE__ */ E(t.slots.columnsManagement, L({}, t.slotProps?.columnsManagement)) }));
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/panel/GridPanel.js
var Sy = [
	"children",
	"className",
	"classes",
	"onClose"
], Cy = An("MuiDataGrid", ["panel", "paper"]), wy = I(Vo, {
	name: "MuiDataGrid",
	slot: "panel"
})({ zIndex: H.zIndex.panel }), Ty = I("div", {
	name: "MuiDataGrid",
	slot: "panelContent"
})({
	backgroundColor: H.colors.background.overlay,
	borderRadius: H.radius.base,
	boxShadow: H.shadows.overlay,
	display: "flex",
	maxWidth: `calc(100vw - ${H.spacing(2)})`,
	overflow: "auto"
}), Ey = z((e, t) => {
	let { children: n, className: r, onClose: i } = e, a = R(e, Sy), o = V(), s = B(), c = Cy, [l, u] = O.useState(!1), d = Pc(), f = wt(() => u(!0)), p = wt(() => u(!1)), m = wt(() => {
		i?.();
	}), h = wt((e) => {
		e.key === "Escape" && i?.();
	}), [g, _] = O.useState(null);
	return O.useEffect(() => {
		let e = o.current.rootElementRef?.current?.querySelector("[data-id=\"gridPanelAnchor\"]");
		e && _(e);
	}, [o]), g ? /* @__PURE__ */ E(wy, L({
		as: s.slots.basePopper,
		ownerState: s,
		placement: "bottom-end",
		className: xt(c.panel, r, d),
		flip: !0,
		onDidShow: f,
		onDidHide: p,
		onClickAway: m,
		clickAwayMouseEvent: "onPointerUp",
		clickAwayTouchEvent: !1,
		focusTrap: !0
	}, a, s.slotProps?.basePopper, {
		target: e.target ?? g,
		ref: t,
		children: /* @__PURE__ */ E(Ty, {
			className: c.paper,
			ownerState: s,
			onKeyDown: h,
			children: l && n
		})
	})) : null;
});
process.env.NODE_ENV !== "production" && (Ey.displayName = "GridPanel"), process.env.NODE_ENV !== "production" && (Ey.propTypes = {
	children: q.default.node,
	classes: q.default.object,
	className: q.default.string,
	flip: q.default.bool,
	id: q.default.string,
	onClose: q.default.func,
	open: q.default.bool.isRequired,
	target: q.default.any
});
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/panel/GridPanelContent.js
var Dy = ["className"], Oy = (e) => {
	let { classes: t } = e;
	return Bi({ root: ["panelContent"] }, jn, t);
}, ky = Cm("div", {
	name: "MuiDataGrid",
	slot: "PanelContent"
})({
	display: "flex",
	flexDirection: "column",
	overflow: "auto",
	flex: "1 1",
	maxHeight: 400,
	padding: H.spacing(2.5, 1.5, 2, 1),
	gap: H.spacing(2.5)
});
function Ay(e) {
	let { className: t } = e, n = R(e, Dy), r = B();
	return /* @__PURE__ */ E(ky, L({
		className: xt(Oy(r).root, t),
		ownerState: r
	}, n));
}
process.env.NODE_ENV !== "production" && (Ay.propTypes = { sx: q.default.oneOfType([
	q.default.arrayOf(q.default.oneOfType([
		q.default.func,
		q.default.object,
		q.default.bool
	])),
	q.default.func,
	q.default.object
]) });
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/panel/GridPanelFooter.js
var jy = ["className"], My = (e) => {
	let { classes: t } = e;
	return Bi({ root: ["panelFooter"] }, jn, t);
}, Ny = I("div", {
	name: "MuiDataGrid",
	slot: "PanelFooter"
})({
	padding: H.spacing(1),
	display: "flex",
	justifyContent: "space-between",
	borderTop: `1px solid ${H.colors.border.base}`
});
function Py(e) {
	let { className: t } = e, n = R(e, jy), r = B();
	return /* @__PURE__ */ E(Ny, L({
		className: xt(My(r).root, t),
		ownerState: r
	}, n));
}
process.env.NODE_ENV !== "production" && (Py.propTypes = { sx: q.default.oneOfType([
	q.default.arrayOf(q.default.oneOfType([
		q.default.func,
		q.default.object,
		q.default.bool
	])),
	q.default.func,
	q.default.object
]) });
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/panel/filterPanel/GridFilterForm.js
var Fy = [
	"item",
	"hasMultipleFilters",
	"deleteFilter",
	"applyFilterChanges",
	"showMultiFilterOperators",
	"disableMultiFilterOperator",
	"applyMultiFilterOperatorChanges",
	"focusElementRef",
	"logicOperators",
	"columnsSort",
	"filterColumns",
	"deleteIconProps",
	"logicOperatorInputProps",
	"operatorInputProps",
	"columnInputProps",
	"valueInputProps",
	"readOnly",
	"children"
], Iy = ["InputComponentProps"], Ly = (e) => {
	let { classes: t } = e;
	return Bi({
		root: ["filterForm"],
		deleteIcon: ["filterFormDeleteIcon"],
		logicOperatorInput: ["filterFormLogicOperatorInput"],
		columnInput: ["filterFormColumnInput"],
		operatorInput: ["filterFormOperatorInput"],
		valueInput: ["filterFormValueInput"]
	}, jn, t);
}, Ry = I("div", {
	name: "MuiDataGrid",
	slot: "FilterForm"
})({
	display: "flex",
	gap: H.spacing(1.5)
}), zy = I("div", {
	name: "MuiDataGrid",
	slot: "FilterFormDeleteIcon"
})({
	flexShrink: 0,
	display: "flex",
	justifyContent: "center",
	alignItems: "center"
}), By = I("div", {
	name: "MuiDataGrid",
	slot: "FilterFormLogicOperatorInput"
})({
	minWidth: 75,
	justifyContent: "end"
}), Vy = I("div", {
	name: "MuiDataGrid",
	slot: "FilterFormColumnInput"
})({ width: 150 }), Hy = I("div", {
	name: "MuiDataGrid",
	slot: "FilterFormOperatorInput"
})({ width: 150 }), Uy = I("div", {
	name: "MuiDataGrid",
	slot: "FilterFormValueInput"
})({ width: 190 }), Wy = (e) => {
	switch (e) {
		case Cs.And: return "filterPanelOperatorAnd";
		case Cs.Or: return "filterPanelOperatorOr";
		default: throw Error("MUI X: Invalid `logicOperator` property in the `GridFilterPanel`.");
	}
}, Gy = (e) => e.headerName || e.field, Ky = new Intl.Collator(), qy = z(function(e, t) {
	let { item: n, hasMultipleFilters: r, deleteFilter: i, applyFilterChanges: a, showMultiFilterOperators: o, disableMultiFilterOperator: s, applyMultiFilterOperatorChanges: c, focusElementRef: l, logicOperators: u = [Cs.And, Cs.Or], columnsSort: d, filterColumns: f, deleteIconProps: p = {}, logicOperatorInputProps: m = {}, operatorInputProps: h = {}, columnInputProps: g = {}, valueInputProps: _ = {}, readOnly: v } = e, y = R(e, Fy), b = V(), x = W(b, Vs), S = W(b, Zs), C = W(b, Ol), w = kt(), T = kt(), k = kt(), A = kt(), j = B(), M = Ly(j), N = O.useRef(null), ee = O.useRef(null), te = C.logicOperator ?? Cs.And, ne = r && u.length > 0, F = (j.slotProps?.baseSelect || {}).native ?? !1, re = j.slotProps?.baseSelectOption || {}, { InputComponentProps: ie } = _, ae = R(_, Iy), oe = W(b, yf), se = W(b, xf), { filteredColumns: ce, selectedField: le } = O.useMemo(() => {
		let e = n.field, t = x[n.field].filterable === !1 ? x[n.field] : null;
		if (t) return {
			filteredColumns: [t],
			selectedField: e
		};
		if (oe) return {
			filteredColumns: S.filter((e) => se.get(e.field) !== void 0),
			selectedField: e
		};
		if (f === void 0 || typeof f != "function") return {
			filteredColumns: S,
			selectedField: e
		};
		let r = f({
			field: n.field,
			columns: S,
			currentFilters: C?.items || []
		});
		return {
			filteredColumns: S.filter((t) => {
				let i = r.includes(t.field);
				return t.field === n.field && !i && (e = void 0), i;
			}),
			selectedField: e
		};
	}, [
		n.field,
		x,
		oe,
		f,
		S,
		C?.items,
		se
	]), ue = O.useMemo(() => {
		switch (d) {
			case "asc": return ce.sort((e, t) => Ky.compare(Gy(e), Gy(t)));
			case "desc": return ce.sort((e, t) => -Ky.compare(Gy(e), Gy(t)));
			default: return ce;
		}
	}, [ce, d]), de = n.field ? b.current.getColumn(n.field) : null, I = O.useMemo(() => !n.operator || !de ? null : de.filterOperators?.find((e) => e.value === n.operator), [n, de]), fe = O.useCallback((e) => {
		let t = e.target.value, r = b.current.getColumn(t);
		if (r.field === de.field) return;
		let i = r.filterOperators.find((e) => e.value === n.operator) || r.filterOperators[0], o = !i.InputComponent || i.InputComponent !== I?.InputComponent || r.type !== de.type ? void 0 : n.value;
		if (r.type === "singleSelect" && o !== void 0) {
			let e = r, t = nd(e);
			Array.isArray(o) ? o = o.filter((n) => rd(n, t, e?.getOptionValue) !== void 0) : rd(n.value, t, e?.getOptionValue) === void 0 && (o = void 0);
		}
		a(L({}, n, {
			field: t,
			operator: i.value,
			value: o
		}));
	}, [
		b,
		a,
		n,
		de,
		I
	]), pe = O.useCallback((e) => {
		let t = e.target.value, r = de?.filterOperators.find((e) => e.value === t);
		a(L({}, n, {
			operator: t,
			value: !r?.InputComponent || r?.InputComponent !== I?.InputComponent ? void 0 : n.value
		}));
	}, [
		a,
		n,
		de,
		I
	]), me = O.useCallback((e) => {
		c(e.target.value === Cs.And.toString() ? Cs.And : Cs.Or);
	}, [c]), he = () => {
		i(n);
	};
	return O.useImperativeHandle(l, () => ({ focus: () => {
		I?.InputComponent ? N?.current?.focus() : ee.current.focus();
	} }), [I]), /* @__PURE__ */ D(Ry, L({
		className: M.root,
		"data-id": n.id,
		ownerState: j
	}, y, {
		ref: t,
		children: [
			/* @__PURE__ */ E(zy, L({}, p, {
				className: xt(M.deleteIcon, p.className),
				ownerState: j,
				children: /* @__PURE__ */ E(j.slots.baseIconButton, L({
					"aria-label": b.current.getLocaleText("filterPanelDeleteIconLabel"),
					title: b.current.getLocaleText("filterPanelDeleteIconLabel"),
					onClick: he,
					size: "small",
					disabled: v
				}, j.slotProps?.baseIconButton, { children: /* @__PURE__ */ E(j.slots.filterPanelDeleteIcon, { fontSize: "small" }) }))
			})),
			/* @__PURE__ */ E(By, L({
				as: j.slots.baseSelect,
				sx: [
					ne ? { display: "flex" } : { display: "none" },
					o ? { visibility: "visible" } : { visibility: "hidden" },
					m.sx
				],
				className: xt(M.logicOperatorInput, m.className),
				ownerState: j
			}, m, {
				size: "small",
				slotProps: { htmlInput: { "aria-label": b.current.getLocaleText("filterPanelLogicOperator") } },
				value: te ?? "",
				onChange: me,
				disabled: !!s || u.length === 1,
				native: F
			}, j.slotProps?.baseSelect, { children: u.map((e) => /* @__PURE__ */ P(j.slots.baseSelectOption, L({}, re, {
				native: F,
				key: e.toString(),
				value: e.toString()
			}), b.current.getLocaleText(Wy(e)))) })),
			/* @__PURE__ */ E(Vy, L({ as: j.slots.baseSelect }, g, {
				className: xt(M.columnInput, g.className),
				ownerState: j,
				size: "small",
				labelId: T,
				id: w,
				label: b.current.getLocaleText("filterPanelColumns"),
				value: le ?? "",
				onChange: fe,
				native: F,
				disabled: v
			}, j.slotProps?.baseSelect, { children: ue.map((e) => /* @__PURE__ */ P(j.slots.baseSelectOption, L({}, re, {
				native: F,
				key: e.field,
				value: e.field
			}), Gy(e))) })),
			/* @__PURE__ */ E(Hy, L({
				as: j.slots.baseSelect,
				size: "small"
			}, h, {
				className: xt(M.operatorInput, h.className),
				ownerState: j,
				labelId: A,
				label: b.current.getLocaleText("filterPanelOperator"),
				id: k,
				value: n.operator,
				onChange: pe,
				native: F,
				inputRef: ee,
				disabled: v
			}, j.slotProps?.baseSelect, { children: de?.filterOperators?.map((e) => /* @__PURE__ */ P(j.slots.baseSelectOption, L({}, re, {
				native: F,
				key: e.value,
				value: e.value
			}), e.label || b.current.getLocaleText(`filterOperator${ip(e.value)}`))) })),
			/* @__PURE__ */ E(Uy, L({}, ae, {
				className: xt(M.valueInput, ae.className),
				ownerState: j,
				children: I?.InputComponent ? /* @__PURE__ */ E(I.InputComponent, L({
					apiRef: b,
					item: n,
					applyValue: a,
					focusElementRef: N,
					disabled: v,
					slotProps: { root: { size: "small" } }
				}, I.InputComponentProps, ie), n.field) : null
			}))
		]
	}));
});
process.env.NODE_ENV !== "production" && (qy.displayName = "GridFilterForm"), process.env.NODE_ENV !== "production" && (qy.propTypes = {
	applyFilterChanges: q.default.func.isRequired,
	applyMultiFilterOperatorChanges: q.default.func.isRequired,
	children: q.default.node,
	columnInputProps: q.default.any,
	columnsSort: q.default.oneOf(["asc", "desc"]),
	deleteFilter: q.default.func.isRequired,
	deleteIconProps: q.default.any,
	disableMultiFilterOperator: q.default.bool,
	filterColumns: q.default.func,
	focusElementRef: q.default.oneOfType([q.default.func, q.default.object]),
	hasMultipleFilters: q.default.bool.isRequired,
	item: q.default.shape({
		field: q.default.string.isRequired,
		id: q.default.oneOfType([q.default.number, q.default.string]),
		operator: q.default.string.isRequired,
		value: q.default.any
	}).isRequired,
	logicOperatorInputProps: q.default.any,
	logicOperators: q.default.arrayOf(q.default.oneOf(["and", "or"]).isRequired),
	operatorInputProps: q.default.any,
	readOnly: q.default.bool,
	showMultiFilterOperators: q.default.bool,
	valueInputProps: q.default.any
});
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/panel/filterPanel/GridFilterPanel.js
var Jy = [
	"logicOperators",
	"columnsSort",
	"filterFormProps",
	"getColumnForNewFilter",
	"children",
	"disableAddFilterButton",
	"disableRemoveAllButton"
], Yy = (e) => ({
	field: e.field,
	operator: e.filterOperators[0].value,
	id: Math.round(Math.random() * 1e5)
}), Xy = z(function(e, t) {
	let n = V(), r = B(), i = W(n, Ol), a = W(n, Zs), o = W(n, Qs), s = O.useRef(null), c = O.useRef(null), { logicOperators: l = [Cs.And, Cs.Or], columnsSort: u, filterFormProps: d, getColumnForNewFilter: f, disableAddFilterButton: p = !1, disableRemoveAllButton: m = !1 } = e, h = R(e, Jy), g = n.current.upsertFilterItem, _ = O.useCallback((e) => {
		n.current.setFilterLogicOperator(e);
	}, [n]), v = O.useCallback(() => {
		let e;
		if (f && typeof f == "function") {
			let t = f({
				currentFilters: i?.items || [],
				columns: a
			});
			if (t === null) return null;
			e = a.find(({ field: e }) => e === t);
		} else e = a.find((e) => e.filterOperators?.length);
		return e ? Yy(e) : null;
	}, [
		i?.items,
		a,
		f
	]), y = O.useCallback(() => {
		if (f === void 0 || typeof f != "function") return v();
		let e = f({
			currentFilters: i.items.length ? i.items : [v()].filter(Boolean),
			columns: a
		});
		if (e === null) return null;
		let t = a.find(({ field: t }) => t === e);
		return t ? Yy(t) : null;
	}, [
		i.items,
		a,
		f,
		v
	]), b = O.useMemo(() => i.items.length ? i.items : (c.current ||= v(), c.current ? [c.current] : []), [i.items, v]), x = b.length > 1, { readOnlyFilters: S, validFilters: C } = O.useMemo(() => b.reduce((e, t) => (o[t.field] ? e.validFilters.push(t) : e.readOnlyFilters.push(t), e), {
		readOnlyFilters: [],
		validFilters: []
	}), [b, o]), w = O.useCallback(() => {
		let e = y();
		e && n.current.upsertFilterItems([...b, e]);
	}, [
		n,
		y,
		b
	]), T = O.useCallback((e) => {
		let t = C.length === 1;
		n.current.deleteFilterItem(e), t && n.current.hideFilterPanel();
	}, [n, C.length]), k = O.useCallback(() => C.length === 1 && C[0].value === void 0 ? (n.current.deleteFilterItem(C[0]), n.current.hideFilterPanel()) : n.current.setFilterModel(L({}, i, { items: S }), "removeAllFilterItems"), [
		n,
		S,
		i,
		C
	]);
	return O.useEffect(() => {
		l.length > 0 && i.logicOperator && !l.includes(i.logicOperator) && _(l[0]);
	}, [
		l,
		_,
		i.logicOperator
	]), O.useEffect(() => {
		C.length > 0 && s.current.focus();
	}, [C.length]), /* @__PURE__ */ D(by, L({}, h, {
		ref: t,
		children: [/* @__PURE__ */ D(Ay, { children: [S.map((e, t) => /* @__PURE__ */ E(qy, L({
			item: e,
			applyFilterChanges: g,
			deleteFilter: T,
			hasMultipleFilters: x,
			showMultiFilterOperators: t > 0,
			disableMultiFilterOperator: t !== 1,
			applyMultiFilterOperatorChanges: _,
			focusElementRef: null,
			readOnly: !0,
			logicOperators: l,
			columnsSort: u
		}, d), e.id == null ? t : e.id)), C.map((e, t) => /* @__PURE__ */ E(qy, L({
			item: e,
			applyFilterChanges: g,
			deleteFilter: T,
			hasMultipleFilters: x,
			showMultiFilterOperators: S.length + t > 0,
			disableMultiFilterOperator: S.length + t !== 1,
			applyMultiFilterOperatorChanges: _,
			focusElementRef: t === C.length - 1 ? s : null,
			logicOperators: l,
			columnsSort: u
		}, d), e.id == null ? t + S.length : e.id))] }), !r.disableMultipleColumnsFiltering && !(p && m) ? /* @__PURE__ */ D(Py, { children: [p ? /* @__PURE__ */ E("span", {}) : /* @__PURE__ */ E(r.slots.baseButton, L({
			onClick: w,
			startIcon: /* @__PURE__ */ E(r.slots.filterPanelAddIcon, {})
		}, r.slotProps?.baseButton, { children: n.current.getLocaleText("filterPanelAddFilter") })), !m && C.length > 0 ? /* @__PURE__ */ E(r.slots.baseButton, L({
			onClick: k,
			startIcon: /* @__PURE__ */ E(r.slots.filterPanelRemoveAllIcon, {})
		}, r.slotProps?.baseButton, { children: n.current.getLocaleText("filterPanelRemoveAll") })) : null] }) : null]
	}));
});
process.env.NODE_ENV !== "production" && (Xy.displayName = "GridFilterPanel"), process.env.NODE_ENV !== "production" && (Xy.propTypes = {
	children: q.default.node,
	columnsSort: q.default.oneOf(["asc", "desc"]),
	disableAddFilterButton: q.default.bool,
	disableRemoveAllButton: q.default.bool,
	filterFormProps: q.default.shape({
		columnInputProps: q.default.any,
		columnsSort: q.default.oneOf(["asc", "desc"]),
		deleteIconProps: q.default.any,
		filterColumns: q.default.func,
		logicOperatorInputProps: q.default.any,
		operatorInputProps: q.default.any,
		valueInputProps: q.default.any
	}),
	getColumnForNewFilter: q.default.func,
	logicOperators: q.default.arrayOf(q.default.oneOf(["and", "or"]).isRequired),
	sx: q.default.oneOfType([
		q.default.arrayOf(q.default.oneOfType([
			q.default.func,
			q.default.object,
			q.default.bool
		])),
		q.default.func,
		q.default.object
	])
});
//#endregion
//#region node_modules/@mui/utils/esm/debounce/debounce.js
function Zy(e, t = 166) {
	let n;
	function r(...r) {
		clearTimeout(n), n = setTimeout(() => {
			e.apply(this, r);
		}, t);
	}
	return r.clear = () => {
		clearTimeout(n);
	}, r;
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/columnsManagement/utils.js
var Qy = (e, t) => {
	let n = new Set(Object.keys(e).filter((t) => e[t] === !1)), r = new Set(Object.keys(t).filter((e) => t[e] === !1));
	if (n.size !== r.size) return !1;
	let i = !0;
	return n.forEach((e) => {
		r.has(e) || (i = !1);
	}), i;
}, $y = (e, t) => (e.headerName || e.field).toLowerCase().indexOf(t) > -1, eb = ["children"], tb = et({
	from: { opacity: 0 },
	to: { opacity: 1 }
}), nb = et({ "from, to": { "--scrollable": "\" \"" } }), rb = Cm("div", {
	name: "MuiDataGrid",
	slot: "ShadowScrollArea"
})`
  flex: 1;
  display: flex;
  flex-direction: column;
  animation: ${nb};
  animation-timeline: --scroll-timeline;
  animation-fill-mode: none;
  box-sizing: border-box;
  overflow: auto;
  scrollbar-width: thin;
  scroll-timeline: --scroll-timeline block;

  &::before,
  &::after {
    content: '';
    flex-shrink: 0;
    display: block;
    position: sticky;
    left: 0;
    width: 100%;
    height: 4px;
    animation: ${tb} linear both;
    animation-timeline: --scroll-timeline;

    // Custom property toggle trick:
    // - Detects if the element is scrollable
    // - https://css-tricks.com/the-css-custom-property-toggle-trick/
    --visibility-scrollable: var(--scrollable) visible;
    --visibility-not-scrollable: hidden;
    visibility: var(--visibility-scrollable, var(--visibility-not-scrollable));
  }

  &::before {
    top: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 0, transparent 100%);
    animation-range: 0 4px;
  }

  &::after {
    bottom: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.05) 0, transparent 100%);
    animation-direction: reverse;
    animation-range: calc(100% - 4px) 100%;
  }
`, ib = z(function(e, t) {
	let { children: n } = e;
	return /* @__PURE__ */ E(rb, L({}, R(e, eb), {
		ref: t,
		children: n
	}));
});
process.env.NODE_ENV !== "production" && (ib.displayName = "GridShadowScrollArea"), process.env.NODE_ENV !== "production" && (ib.propTypes = { children: q.default.node });
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/columnsManagement/GridColumnsManagement.js
var ab = (e) => {
	let { classes: t } = e;
	return Bi({
		root: ["columnsManagement"],
		header: ["columnsManagementHeader"],
		searchInput: ["columnsManagementSearchInput"],
		footer: ["columnsManagementFooter"],
		row: ["columnsManagementRow"]
	}, jn, t);
}, ob = new Intl.Collator();
function sb(e) {
	let t = V(), n = O.useRef(null), r = W(t, Ws), i = W(t, Us), a = B(), [o, s] = O.useState(""), c = ab(a), l = W(t, Hs), u = W(t, yf), d = W(t, xf), f = O.useMemo(() => u ? Array.from(d.values()) : l, [
		u,
		d,
		l
	]), { sort: p, searchPredicate: m = $y, autoFocusSearchField: h = !0, disableShowHideToggle: g = !1, disableResetButton: _ = !1, toggleAllMode: v = "all", getTogglableColumns: y, searchInputProps: b, searchDebounceMs: x = a.columnFilterDebounceMs } = e, S = O.useMemo(() => Zy((e) => {
		s(e);
	}, x ?? 150), [x]), C = O.useMemo(() => Qy(i, r), [i, r]), w = O.useMemo(() => {
		switch (p) {
			case "asc": return [...f].sort((e, t) => ob.compare(e.headerName || e.field, t.headerName || t.field));
			case "desc": return [...f].sort((e, t) => -ob.compare(e.headerName || e.field, t.headerName || t.field));
			default: return f;
		}
	}, [f, p]), T = (e) => {
		let { name: n } = e.target;
		t.current.setColumnVisibility(n, i[n] === !1);
	}, k = O.useMemo(() => {
		let e = y ? y(w) : null, t = e ? w.filter(({ field: t }) => e.includes(t)) : w;
		return o ? t.filter((e) => m(e, o.toLowerCase())) : t;
	}, [
		w,
		o,
		m,
		y
	]), A = O.useCallback((e) => {
		let n = L({}, Us(t)), r = y ? y(f) : null;
		return (v === "filteredOnly" ? k : f).forEach((t) => {
			t.hideable && (r == null || r.includes(t.field)) && (e ? delete n[t.field] : n[t.field] = !1);
		}), t.current.setColumnVisibilityModel(n);
	}, [
		t,
		f,
		y,
		v,
		k
	]), j = O.useCallback((e) => {
		S(e.target.value);
	}, [S]), M = O.useMemo(() => k.filter((e) => e.hideable), [k]), N = O.useMemo(() => M.every((e) => i[e.field] == null || i[e.field] !== !1), [i, M]), P = O.useMemo(() => M.every((e) => i[e.field] === !1), [i, M]), ee = O.useRef(null);
	O.useEffect(() => {
		h ? n.current?.focus() : ee.current && typeof ee.current.focus == "function" && ee.current.focus();
	}, [h]);
	let te = !1, ne = (e) => te === !1 && e.hideable !== !1 ? (te = !0, !0) : !1, F = O.useCallback(() => {
		s(""), n.current && (n.current.value = "", n.current.focus());
	}, []);
	return /* @__PURE__ */ D(O.Fragment, { children: [
		/* @__PURE__ */ E(ub, {
			className: c.header,
			ownerState: a,
			children: /* @__PURE__ */ E(db, L({
				as: a.slots.baseTextField,
				ownerState: a,
				placeholder: t.current.getLocaleText("columnsManagementSearchTitle"),
				inputRef: n,
				className: c.searchInput,
				onChange: j,
				size: "small",
				type: "search",
				slotProps: {
					input: {
						startAdornment: /* @__PURE__ */ E(a.slots.quickFilterIcon, { fontSize: "small" }),
						endAdornment: /* @__PURE__ */ E(a.slots.baseIconButton, L({
							size: "small",
							"aria-label": t.current.getLocaleText("columnsManagementDeleteIconLabel"),
							style: o ? { visibility: "visible" } : { visibility: "hidden" },
							tabIndex: -1,
							onClick: F,
							edge: "end"
						}, a.slotProps?.baseIconButton, { children: /* @__PURE__ */ E(a.slots.quickFilterClearIcon, { fontSize: "small" }) }))
					},
					htmlInput: { "aria-label": t.current.getLocaleText("columnsManagementSearchTitle") }
				},
				autoComplete: "off",
				fullWidth: !0
			}, a.slotProps?.baseTextField, b))
		}),
		/* @__PURE__ */ E(lb, {
			ownerState: a,
			children: /* @__PURE__ */ D(cb, {
				className: c.root,
				ownerState: a,
				children: [k.map((e) => /* @__PURE__ */ E(mb, L({
					as: a.slots.baseCheckbox,
					className: c.row,
					disabled: e.hideable === !1 || u,
					checked: i[e.field] !== !1,
					onChange: T,
					name: e.field,
					inputRef: ne(e) ? ee : void 0,
					label: e.headerName || e.field,
					density: "compact",
					fullWidth: !0
				}, a.slotProps?.baseCheckbox), e.field)), k.length === 0 && /* @__PURE__ */ E(pb, {
					ownerState: a,
					children: t.current.getLocaleText("columnsManagementNoColumns")
				})]
			})
		}),
		!g || !_ ? /* @__PURE__ */ D(fb, {
			ownerState: a,
			className: c.footer,
			children: [g ? /* @__PURE__ */ E("span", {}) : /* @__PURE__ */ E(a.slots.baseCheckbox, L({
				disabled: M.length === 0 || u,
				checked: N,
				indeterminate: !N && !P,
				onChange: () => A(!N),
				name: t.current.getLocaleText("columnsManagementShowHideAllText"),
				label: t.current.getLocaleText("columnsManagementShowHideAllText"),
				density: "compact"
			}, a.slotProps?.baseCheckbox)), _ ? null : /* @__PURE__ */ E(a.slots.baseButton, L({
				onClick: () => t.current.setColumnVisibilityModel(r),
				disabled: C || u
			}, a.slotProps?.baseButton, { children: t.current.getLocaleText("columnsManagementReset") }))]
		}) : null
	] });
}
process.env.NODE_ENV !== "production" && (sb.propTypes = {
	autoFocusSearchField: q.default.bool,
	disableResetButton: q.default.bool,
	disableShowHideToggle: q.default.bool,
	getTogglableColumns: q.default.func,
	searchDebounceMs: q.default.number,
	searchInputProps: q.default.object,
	searchPredicate: q.default.func,
	sort: q.default.oneOf(["asc", "desc"]),
	toggleAllMode: q.default.oneOf(["all", "filteredOnly"])
});
var cb = I("div", {
	name: "MuiDataGrid",
	slot: "ColumnsManagement"
})({
	display: "flex",
	flexDirection: "column",
	padding: H.spacing(.5, 1.5)
}), lb = I(ib, {
	name: "MuiDataGrid",
	slot: "ColumnsManagementScrollArea"
})({ maxHeight: 300 }), ub = I("div", {
	name: "MuiDataGrid",
	slot: "ColumnsManagementHeader"
})({
	padding: H.spacing(1.5, 2),
	borderBottom: `1px solid ${H.colors.border.base}`
}), db = I(Vo, {
	name: "MuiDataGrid",
	slot: "ColumnsManagementSearchInput"
})({ [`& .${be.input}::-webkit-search-decoration,
      & .${be.input}::-webkit-search-cancel-button,
      & .${be.input}::-webkit-search-results-button,
      & .${be.input}::-webkit-search-results-decoration`]: { display: "none" } }), fb = I("div", {
	name: "MuiDataGrid",
	slot: "ColumnsManagementFooter"
})({
	padding: H.spacing(1, 1, 1, 1.5),
	display: "flex",
	justifyContent: "space-between",
	borderTop: `1px solid ${H.colors.border.base}`
}), pb = I("div", {
	name: "MuiDataGrid",
	slot: "ColumnsManagementEmptyText"
})({
	padding: H.spacing(1, 0),
	alignSelf: "center",
	font: H.typography.font.body
}), mb = I(Vo, {
	name: "MuiDataGrid",
	slot: "ColumnsManagementRow"
})({}), hb = z(function(e, t) {
	let { children: n, slotProps: r = {} } = e, i = r.button || {}, a = r.tooltip || {}, o = V(), s = B(), c = kt(), l = kt(), [u, d] = O.useState(!1), f = O.useRef(null), p = St(t, f), m = (e) => {
		d((e) => !e), i.onClick?.(e);
	}, h = () => d(!1);
	return n == null ? null : /* @__PURE__ */ D(O.Fragment, { children: [/* @__PURE__ */ E(s.slots.baseTooltip, L({
		title: o.current.getLocaleText("toolbarExportLabel"),
		enterDelay: 1e3
	}, s.slotProps?.baseTooltip, a, { children: /* @__PURE__ */ E(s.slots.baseButton, L({
		size: "small",
		startIcon: /* @__PURE__ */ E(s.slots.exportIcon, {}),
		"aria-expanded": u,
		"aria-label": o.current.getLocaleText("toolbarExportLabel"),
		"aria-haspopup": "menu",
		"aria-controls": u ? l : void 0,
		id: c
	}, s.slotProps?.baseButton, i, {
		onClick: m,
		ref: p,
		children: o.current.getLocaleText("toolbarExport")
	})) })), /* @__PURE__ */ E(Vc, {
		open: u,
		target: f.current,
		onClose: h,
		position: "bottom-end",
		children: /* @__PURE__ */ E(s.slots.baseMenuList, {
			id: l,
			className: U.menuList,
			"aria-labelledby": c,
			autoFocusItem: u,
			children: O.Children.map(n, (e) => /* @__PURE__ */ O.isValidElement(e) ? /* @__PURE__ */ O.cloneElement(e, { hideMenu: h }) : e)
		})
	})] });
});
process.env.NODE_ENV !== "production" && (hb.displayName = "GridToolbarExportContainer"), process.env.NODE_ENV !== "production" && (hb.propTypes = { slotProps: q.default.object });
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/toolbar/GridToolbarExport.js
var gb = ["hideMenu", "options"], _b = ["hideMenu", "options"], vb = [
	"csvOptions",
	"printOptions",
	"excelOptions"
];
function yb(e) {
	let t = V(), n = B(), { hideMenu: r, options: i } = e, a = R(e, gb);
	return /* @__PURE__ */ E(n.slots.baseMenuItem, L({ onClick: () => {
		t.current.exportDataAsCsv(i), r?.();
	} }, a, { children: t.current.getLocaleText("toolbarExportCSV") }));
}
process.env.NODE_ENV !== "production" && (yb.propTypes = {
	hideMenu: q.default.func,
	options: q.default.shape({
		allColumns: q.default.bool,
		delimiter: q.default.string,
		disableToolbarButton: q.default.bool,
		escapeFormulas: q.default.bool,
		fields: q.default.arrayOf(q.default.string),
		fileName: q.default.string,
		getRowsToExport: q.default.func,
		includeColumnGroupsHeaders: q.default.bool,
		includeHeaders: q.default.bool,
		shouldAppendQuotes: q.default.bool,
		utf8WithBom: q.default.bool
	})
});
function bb(e) {
	let t = V(), n = B(), { hideMenu: r, options: i } = e, a = R(e, _b);
	return /* @__PURE__ */ E(n.slots.baseMenuItem, L({ onClick: () => {
		t.current.exportDataAsPrint(i), r?.();
	} }, a, { children: t.current.getLocaleText("toolbarExportPrint") }));
}
process.env.NODE_ENV !== "production" && (bb.propTypes = {
	hideMenu: q.default.func,
	options: q.default.shape({
		allColumns: q.default.bool,
		bodyClassName: q.default.string,
		copyStyles: q.default.bool,
		disableToolbarButton: q.default.bool,
		fields: q.default.arrayOf(q.default.string),
		fileName: q.default.string,
		getRowsToExport: q.default.func,
		hideFooter: q.default.bool,
		hideToolbar: q.default.bool,
		includeCheckboxes: q.default.bool,
		pageStyle: q.default.oneOfType([q.default.func, q.default.string])
	})
});
var xb = z(function(e, t) {
	let n = e, { csvOptions: r = {}, printOptions: i = {}, excelOptions: a } = n, o = R(n, vb), s = V().current.unstable_applyPipeProcessors("exportMenu", [], {
		excelOptions: a,
		csvOptions: r,
		printOptions: i
	}).sort((e, t) => e.componentName > t.componentName ? 1 : -1);
	return s.length === 0 ? null : /* @__PURE__ */ E(hb, L({}, o, {
		ref: t,
		children: s.map((e, t) => /* @__PURE__ */ O.cloneElement(e.component, { key: t }))
	}));
});
process.env.NODE_ENV !== "production" && (xb.displayName = "GridToolbarExport"), process.env.NODE_ENV !== "production" && (xb.propTypes = {
	csvOptions: q.default.object,
	printOptions: q.default.object,
	slotProps: q.default.object
});
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/quickFilter/QuickFilterContext.js
var Sb = /* @__PURE__ */ O.createContext(void 0);
process.env.NODE_ENV !== "production" && (Sb.displayName = "QuickFilterContext");
function Cb() {
	let e = O.useContext(Sb);
	if (e === void 0) throw Error("MUI X: Missing context. Quick Filter subcomponents must be placed within a <QuickFilter /> component.");
	return e;
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/quickFilter/QuickFilter.js
var wb = [
	"render",
	"className",
	"parser",
	"formatter",
	"debounceMs",
	"defaultExpanded",
	"expanded",
	"onExpandedChange"
], Tb = (e) => e.split(" ").filter((e) => e !== ""), Eb = (e) => e.join(" ");
function Db(e) {
	let t = B(), { render: n, className: r, parser: i = Tb, formatter: a = Eb, debounceMs: o = t.filterDebounceMs, defaultExpanded: s, expanded: c, onExpandedChange: l } = e, u = R(e, wb), d = V(), f = O.useRef(null), p = O.useRef(null), m = W(d, kl), [h, g] = O.useState(a(m ?? [])), [_, v] = O.useState(s ?? h.length > 0), y = c ?? _, b = O.useMemo(() => ({
		value: h,
		expanded: y
	}), [h, y]), x = typeof r == "function" ? r(b) : r, S = O.useRef(null), C = kt(), w = O.useCallback((e) => {
		l && l(e), c === void 0 && v(e);
	}, [l, c]), T = O.useRef(m);
	O.useEffect(() => {
		$m(T.current, m) || (T.current = m, g((e) => $m(i(e), m) ? e : a(m ?? [])));
	}, [
		m,
		a,
		i
	]);
	let D = O.useRef(!0), k = O.useRef(y);
	O.useEffect(() => {
		if (D.current) {
			D.current = !1;
			return;
		}
		k.current !== y && (y ? requestAnimationFrame(() => {
			f.current?.focus({ preventScroll: !0 });
		}) : p.current?.focus({ preventScroll: !0 }), k.current = y);
	}, [y]);
	let A = O.useMemo(() => Zy((e) => {
		let t = i(e);
		T.current = t, d.current.setQuickFilterValues(t);
	}, o), [
		d,
		o,
		i
	]);
	O.useEffect(() => A.clear, [A]);
	let j = O.useCallback((e) => {
		let t = e.target.value;
		g(t), A(t);
	}, [A]), M = O.useCallback(() => {
		g(""), d.current.setQuickFilterValues([]), f.current?.focus();
	}, [d, f]), N = O.useMemo(() => ({
		controlRef: f,
		triggerRef: p,
		state: b,
		controlId: C,
		clearValue: M,
		onValueChange: j,
		onExpandedChange: w
	}), [
		C,
		b,
		j,
		M,
		w
	]);
	Ct(() => {
		S.current && p.current && S.current.style.setProperty("--trigger-width", `${p.current?.offsetWidth}px`);
	}, []);
	let P = B_("div", n, L({ className: x }, u, { ref: S }), b);
	return /* @__PURE__ */ E(Sb.Provider, {
		value: N,
		children: P
	});
}
process.env.NODE_ENV !== "production" && (Db.propTypes = {
	className: q.default.oneOfType([q.default.func, q.default.string]),
	debounceMs: q.default.number,
	defaultExpanded: q.default.bool,
	expanded: q.default.bool,
	formatter: q.default.func,
	onExpandedChange: q.default.func,
	parser: q.default.func,
	render: q.default.oneOfType([q.default.element, q.default.func])
});
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/quickFilter/QuickFilterControl.js
var Ob = [
	"render",
	"className",
	"slotProps",
	"onKeyDown",
	"onChange"
], kb = z(function(e, t) {
	let { render: n, className: r, slotProps: i, onKeyDown: a, onChange: o } = e, s = R(e, Ob), c = B(), { state: l, controlId: u, controlRef: d, onValueChange: f, onExpandedChange: p, clearValue: m } = Cb(), h = typeof r == "function" ? r(l) : r, g = St(d, t), _ = B_(c.slots.baseTextField, n, L({}, c.slotProps?.baseTextField, {
		slotProps: L({ htmlInput: L({
			role: "searchbox",
			id: u,
			tabIndex: l.expanded ? void 0 : -1
		}, i?.htmlInput, { onBlur: (e) => {
			l.value === "" && p(!1), i?.htmlInput?.onBlur?.(e);
		} }) }, i),
		value: l.value,
		className: h
	}, s, {
		onChange: (e) => {
			l.expanded || p(!0), f(e), o?.(e);
		},
		onKeyDown: (e) => {
			e.key === "Escape" && (l.value === "" ? p(!1) : m()), a?.(e);
		},
		ref: g
	}), l);
	return /* @__PURE__ */ E(O.Fragment, { children: _ });
});
process.env.NODE_ENV !== "production" && (kb.displayName = "QuickFilterControl"), process.env.NODE_ENV !== "production" && (kb.propTypes = {
	autoComplete: q.default.string,
	autoFocus: q.default.bool,
	className: q.default.oneOfType([q.default.func, q.default.string]),
	color: q.default.oneOf(["error", "primary"]),
	disabled: q.default.bool,
	error: q.default.bool,
	fullWidth: q.default.bool,
	helperText: q.default.string,
	id: q.default.string,
	inputRef: q.default.oneOfType([q.default.func, q.default.shape({ current: q.default.object })]),
	label: q.default.node,
	multiline: q.default.bool,
	placeholder: q.default.string,
	render: q.default.oneOfType([q.default.element, q.default.func]),
	role: q.default.string,
	size: q.default.oneOf(["medium", "small"]),
	slotProps: q.default.object,
	style: q.default.object,
	tabIndex: q.default.number,
	type: q.default.string,
	value: q.default.string
});
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/quickFilter/QuickFilterClear.js
var Ab = [
	"render",
	"className",
	"onClick"
], jb = z(function(e, t) {
	let { render: n, className: r, onClick: i } = e, a = R(e, Ab), o = B(), { state: s, clearValue: c } = Cb(), l = typeof r == "function" ? r(s) : r, u = B_(o.slots.baseIconButton, n, L({}, o.slotProps?.baseIconButton, {
		className: l,
		tabIndex: -1
	}, a, {
		onClick: (e) => {
			c(), i?.(e);
		},
		ref: t
	}), s);
	return /* @__PURE__ */ E(O.Fragment, { children: u });
});
process.env.NODE_ENV !== "production" && (jb.displayName = "QuickFilterClear"), process.env.NODE_ENV !== "production" && (jb.propTypes = {
	className: q.default.oneOfType([q.default.func, q.default.string]),
	color: q.default.oneOf([
		"default",
		"inherit",
		"primary"
	]),
	disabled: q.default.bool,
	edge: q.default.oneOf([
		"end",
		"start",
		!1
	]),
	id: q.default.string,
	label: q.default.string,
	render: q.default.oneOfType([q.default.element, q.default.func]),
	role: q.default.string,
	size: q.default.oneOf([
		"large",
		"medium",
		"small"
	]),
	style: q.default.object,
	tabIndex: q.default.number,
	title: q.default.string,
	touchRippleRef: q.default.any
});
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/quickFilter/QuickFilterTrigger.js
var Mb = [
	"render",
	"className",
	"onClick"
], Nb = z(function(e, t) {
	let { render: n, className: r, onClick: i } = e, a = R(e, Mb), o = B(), { state: s, controlId: c, onExpandedChange: l, triggerRef: u } = Cb(), d = typeof r == "function" ? r(s) : r, f = St(u, t), p = (e) => {
		l(!s.expanded), i?.(e);
	}, m = B_(o.slots.baseButton, n, L({}, o.slotProps?.baseButton, {
		className: d,
		"aria-controls": c,
		"aria-expanded": s.expanded
	}, a, {
		onClick: p,
		ref: f
	}), s);
	return /* @__PURE__ */ E(O.Fragment, { children: m });
});
process.env.NODE_ENV !== "production" && (Nb.displayName = "QuickFilterTrigger"), process.env.NODE_ENV !== "production" && (Nb.propTypes = {
	className: q.default.oneOfType([q.default.func, q.default.string]),
	disabled: q.default.bool,
	id: q.default.string,
	render: q.default.oneOfType([q.default.element, q.default.func]),
	role: q.default.string,
	size: q.default.oneOf([
		"large",
		"medium",
		"small"
	]),
	startIcon: q.default.node,
	style: q.default.object,
	tabIndex: q.default.number,
	title: q.default.string,
	touchRippleRef: q.default.any
});
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/toolbar/GridToolbarQuickFilter.js
var Pb = [
	"quickFilterParser",
	"quickFilterFormatter",
	"debounceMs",
	"className",
	"slotProps"
], Fb = ["ref", "slotProps"], Ib = (e) => {
	let { classes: t } = e;
	return Bi({
		root: ["toolbarQuickFilter"],
		trigger: ["toolbarQuickFilterTrigger"],
		control: ["toolbarQuickFilterControl"]
	}, jn, t);
}, Lb = I("div", {
	name: "MuiDataGrid",
	slot: "ToolbarQuickFilter"
})({
	display: "grid",
	alignItems: "center"
}), Rb = I(X_, {
	name: "MuiDataGrid",
	slot: "ToolbarQuickFilterTrigger"
})(({ ownerState: e }) => ({
	gridArea: "1 / 1",
	width: "min-content",
	height: "min-content",
	zIndex: 1,
	opacity: e.expanded ? 0 : 1,
	pointerEvents: e.expanded ? "none" : "auto",
	transition: H.transition(["opacity"])
})), zb = I((e) => {
	throw Error("Failed assertion: should not be rendered");
}, {
	name: "MuiDataGrid",
	slot: "ToolbarQuickFilterControl"
})(({ ownerState: e }) => ({
	gridArea: "1 / 1",
	overflowX: "clip",
	width: e.expanded ? 260 : "var(--trigger-width)",
	opacity: e.expanded ? 1 : 0,
	transition: H.transition(["width", "opacity"])
}));
function Bb(e) {
	let t = V(), n = B(), r = {
		classes: n.classes,
		expanded: !1
	}, i = Ib(r), { quickFilterParser: a, quickFilterFormatter: o, debounceMs: s, className: c, slotProps: l } = e, u = R(e, Pb);
	return /* @__PURE__ */ E(Db, {
		parser: a,
		formatter: o,
		debounceMs: s,
		render: (e, a) => {
			let o = L({}, r, { expanded: a.expanded });
			return /* @__PURE__ */ D(Lb, L({}, e, {
				className: xt(i.root, c),
				children: [/* @__PURE__ */ E(Nb, { render: (e) => /* @__PURE__ */ E(n.slots.baseTooltip, {
					title: t.current.getLocaleText("toolbarQuickFilterLabel"),
					enterDelay: 0,
					children: /* @__PURE__ */ E(Rb, L({ className: i.trigger }, e, {
						ownerState: o,
						color: "default",
						"aria-disabled": a.expanded,
						children: /* @__PURE__ */ E(n.slots.quickFilterIcon, { fontSize: "small" })
					}))
				}) }), /* @__PURE__ */ E(kb, { render: (e) => {
					let { ref: r, slotProps: a } = e, s = R(e, Fb);
					return /* @__PURE__ */ E(zb, L({
						as: n.slots.baseTextField,
						className: i.control,
						ownerState: o,
						inputRef: r,
						"aria-label": t.current.getLocaleText("toolbarQuickFilterLabel"),
						placeholder: t.current.getLocaleText("toolbarQuickFilterPlaceholder"),
						size: "small",
						slotProps: L({ input: L({
							startAdornment: /* @__PURE__ */ E(n.slots.quickFilterIcon, { fontSize: "small" }),
							endAdornment: s.value ? /* @__PURE__ */ E(jb, { render: /* @__PURE__ */ E(n.slots.baseIconButton, {
								size: "small",
								edge: "end",
								"aria-label": t.current.getLocaleText("toolbarQuickFilterDeleteIconLabel"),
								children: /* @__PURE__ */ E(n.slots.quickFilterClearIcon, { fontSize: "small" })
							}) }) : null
						}, a?.input) }, a)
					}, n.slotProps?.baseTextField, s, l?.root, u));
				} })]
			}));
		}
	});
}
process.env.NODE_ENV !== "production" && (Bb.propTypes = {
	className: q.default.string,
	debounceMs: q.default.number,
	quickFilterFormatter: q.default.func,
	quickFilterParser: q.default.func,
	slotProps: q.default.object
});
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/filterPanel/FilterPanelTrigger.js
var Vb = [
	"render",
	"className",
	"onClick",
	"onPointerUp"
], Hb = z(function(e, t) {
	let { render: n, className: r, onClick: i, onPointerUp: a } = e, o = R(e, Vb), s = B(), c = kt(), l = kt(), u = V(), d = W(u, Um), f = d.open && d.openedPanelValue === Gm.filters, p = {
		open: f,
		filterCount: W(u, Bl).length
	}, m = typeof r == "function" ? r(p) : r, { filterPanelTriggerRef: h } = w_(), g = St(t, h), _ = (e) => {
		f ? u.current.hidePreferences() : u.current.showPreferences(Gm.filters, l, c), i?.(e);
	}, v = (e) => {
		f && e.stopPropagation(), a?.(e);
	}, y = B_(s.slots.baseButton, n, L({}, s.slotProps?.baseButton, {
		id: c,
		"aria-haspopup": "true",
		"aria-expanded": f ? "true" : void 0,
		"aria-controls": f ? l : void 0,
		onClick: _,
		onPointerUp: v,
		className: m
	}, o, { ref: g }), p);
	return /* @__PURE__ */ E(O.Fragment, { children: y });
});
process.env.NODE_ENV !== "production" && (Hb.displayName = "FilterPanelTrigger"), process.env.NODE_ENV !== "production" && (Hb.propTypes = {
	className: q.default.oneOfType([q.default.func, q.default.string]),
	disabled: q.default.bool,
	id: q.default.string,
	render: q.default.oneOfType([q.default.element, q.default.func]),
	role: q.default.string,
	size: q.default.oneOf([
		"large",
		"medium",
		"small"
	]),
	startIcon: q.default.node,
	style: q.default.object,
	tabIndex: q.default.number,
	title: q.default.string,
	touchRippleRef: q.default.any
});
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/columnsPanel/ColumnsPanelTrigger.js
var Ub = [
	"render",
	"className",
	"onClick",
	"onPointerUp"
], Wb = z(function(e, t) {
	let { render: n, className: r, onClick: i, onPointerUp: a } = e, o = R(e, Ub), s = B(), c = kt(), l = kt(), u = V(), d = W(u, Um), f = d.open && d.openedPanelValue === Gm.columns, p = { open: f }, m = typeof r == "function" ? r(p) : r, { columnsPanelTriggerRef: h } = w_(), g = St(t, h), _ = (e) => {
		f ? u.current.hidePreferences() : u.current.showPreferences(Gm.columns, l, c), i?.(e);
	}, v = (e) => {
		f && e.stopPropagation(), a?.(e);
	}, y = B_(s.slots.baseButton, n, L({}, s.slotProps?.baseButton, {
		id: c,
		"aria-haspopup": "true",
		"aria-expanded": f ? "true" : void 0,
		"aria-controls": f ? l : void 0,
		className: m
	}, o, {
		onPointerUp: v,
		onClick: _,
		ref: g
	}), p);
	return /* @__PURE__ */ E(O.Fragment, { children: y });
});
process.env.NODE_ENV !== "production" && (Wb.displayName = "ColumnsPanelTrigger"), process.env.NODE_ENV !== "production" && (Wb.propTypes = {
	className: q.default.oneOfType([q.default.func, q.default.string]),
	disabled: q.default.bool,
	id: q.default.string,
	render: q.default.oneOfType([q.default.element, q.default.func]),
	role: q.default.string,
	size: q.default.oneOf([
		"large",
		"medium",
		"small"
	]),
	startIcon: q.default.node,
	style: q.default.object,
	tabIndex: q.default.number,
	title: q.default.string,
	touchRippleRef: q.default.any
});
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/export/ExportCsv.js
var Gb = [
	"render",
	"options",
	"onClick"
], Kb = z(function(e, t) {
	let { render: n, options: r, onClick: i } = e, a = R(e, Gb), o = B(), s = V(), c = B_(o.slots.baseButton, n, L({}, o.slotProps?.baseButton, { onClick: (e) => {
		s.current.exportDataAsCsv(r), i?.(e);
	} }, a, { ref: t }));
	return /* @__PURE__ */ E(O.Fragment, { children: c });
});
process.env.NODE_ENV !== "production" && (Kb.displayName = "ExportCsv"), process.env.NODE_ENV !== "production" && (Kb.propTypes = {
	className: q.default.string,
	disabled: q.default.bool,
	id: q.default.string,
	options: q.default.shape({
		allColumns: q.default.bool,
		delimiter: q.default.string,
		escapeFormulas: q.default.bool,
		fields: q.default.arrayOf(q.default.string),
		fileName: q.default.string,
		getRowsToExport: q.default.func,
		includeColumnGroupsHeaders: q.default.bool,
		includeHeaders: q.default.bool,
		shouldAppendQuotes: q.default.bool,
		utf8WithBom: q.default.bool
	}),
	render: q.default.oneOfType([q.default.element, q.default.func]),
	role: q.default.string,
	size: q.default.oneOf([
		"large",
		"medium",
		"small"
	]),
	startIcon: q.default.node,
	style: q.default.object,
	tabIndex: q.default.number,
	title: q.default.string,
	touchRippleRef: q.default.any
});
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/export/ExportPrint.js
var qb = [
	"render",
	"options",
	"onClick"
], Jb = z(function(e, t) {
	let { render: n, options: r, onClick: i } = e, a = R(e, qb), o = B(), s = V(), c = B_(o.slots.baseButton, n, L({}, o.slotProps?.baseButton, { onClick: (e) => {
		s.current.exportDataAsPrint(r), i?.(e);
	} }, a, { ref: t }));
	return /* @__PURE__ */ E(O.Fragment, { children: c });
});
process.env.NODE_ENV !== "production" && (Jb.displayName = "ExportPrint"), process.env.NODE_ENV !== "production" && (Jb.propTypes = {
	className: q.default.string,
	disabled: q.default.bool,
	id: q.default.string,
	options: q.default.shape({
		allColumns: q.default.bool,
		bodyClassName: q.default.string,
		copyStyles: q.default.bool,
		fields: q.default.arrayOf(q.default.string),
		fileName: q.default.string,
		getRowsToExport: q.default.func,
		hideFooter: q.default.bool,
		hideToolbar: q.default.bool,
		includeCheckboxes: q.default.bool,
		pageStyle: q.default.oneOfType([q.default.func, q.default.string])
	}),
	render: q.default.oneOfType([q.default.element, q.default.func]),
	role: q.default.string,
	size: q.default.oneOf([
		"large",
		"medium",
		"small"
	]),
	startIcon: q.default.node,
	style: q.default.object,
	tabIndex: q.default.number,
	title: q.default.string,
	touchRippleRef: q.default.any
});
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/toolbarV8/GridToolbar.js
var Yb = ["className"], Xb = ["className"], Zb = [
	"showQuickFilter",
	"quickFilterProps",
	"csvOptions",
	"printOptions",
	"mainControls",
	"additionalExportMenuItems"
], Qb = (e) => {
	let { classes: t } = e;
	return Bi({
		divider: ["toolbarDivider"],
		label: ["toolbarLabel"]
	}, jn, t);
}, $b = I(Vo, {
	name: "MuiDataGrid",
	slot: "ToolbarDivider"
})({
	height: "50%",
	margin: H.spacing(0, .5)
}), ex = I("span", {
	name: "MuiDataGrid",
	slot: "ToolbarLabel"
})({
	flex: 1,
	font: H.typography.font.large,
	fontWeight: H.typography.fontWeight.medium,
	margin: H.spacing(0, .5),
	textOverflow: "ellipsis",
	overflow: "hidden",
	whiteSpace: "nowrap"
});
function tx(e) {
	let t = R(e, Yb), n = B(), r = Qb(n);
	return /* @__PURE__ */ E($b, L({
		as: n.slots.baseDivider,
		orientation: "vertical",
		className: r.divider
	}, t));
}
process.env.NODE_ENV !== "production" && (tx.propTypes = {
	className: q.default.string,
	orientation: q.default.oneOf(["horizontal", "vertical"])
});
function nx(e) {
	let t = R(e, Xb);
	return /* @__PURE__ */ E(ex, L({ className: Qb(B()).label }, t));
}
function rx(e) {
	let { showQuickFilter: t = !0, quickFilterProps: n, csvOptions: r, printOptions: i, mainControls: a, additionalExportMenuItems: o } = e, s = R(e, Zb), c = V(), l = B(), [u, d] = O.useState(!1), f = O.useRef(null), p = kt(), m = kt(), h = !r?.disableToolbarButton || !i?.disableToolbarButton || o, g = () => d(!1);
	return /* @__PURE__ */ D(J_, L({}, s, { children: [
		l.label && /* @__PURE__ */ E(nx, { children: l.label }),
		a || /* @__PURE__ */ D(O.Fragment, { children: [!l.disableColumnSelector && /* @__PURE__ */ E(l.slots.baseTooltip, {
			title: c.current.getLocaleText("toolbarColumns"),
			children: /* @__PURE__ */ E(Wb, {
				render: /* @__PURE__ */ E(X_, {}),
				children: /* @__PURE__ */ E(l.slots.columnSelectorIcon, { fontSize: "small" })
			})
		}), !l.disableColumnFilter && /* @__PURE__ */ E(l.slots.baseTooltip, {
			title: c.current.getLocaleText("toolbarFilters"),
			children: /* @__PURE__ */ E(Hb, { render: (e, t) => /* @__PURE__ */ E(X_, L({}, e, {
				color: t.filterCount > 0 ? "primary" : "default",
				children: /* @__PURE__ */ E(l.slots.baseBadge, {
					badgeContent: t.filterCount,
					color: "primary",
					variant: "dot",
					children: /* @__PURE__ */ E(l.slots.openFilterButtonIcon, { fontSize: "small" })
				})
			})) })
		})] }),
		h && (!l.disableColumnFilter || !l.disableColumnSelector) && /* @__PURE__ */ E(tx, {}),
		h && /* @__PURE__ */ D(O.Fragment, { children: [/* @__PURE__ */ E(l.slots.baseTooltip, {
			title: c.current.getLocaleText("toolbarExport"),
			disableInteractive: u,
			children: /* @__PURE__ */ E(X_, {
				ref: f,
				id: m,
				"aria-controls": p,
				"aria-haspopup": "true",
				"aria-expanded": u ? "true" : void 0,
				onClick: () => d(!u),
				children: /* @__PURE__ */ E(l.slots.exportIcon, { fontSize: "small" })
			})
		}), /* @__PURE__ */ E(Vc, {
			target: f.current,
			open: u,
			onClose: g,
			position: "bottom-end",
			children: /* @__PURE__ */ D(l.slots.baseMenuList, L({
				id: p,
				"aria-labelledby": m,
				autoFocusItem: !0
			}, l.slotProps?.baseMenuList, { children: [
				!i?.disableToolbarButton && /* @__PURE__ */ E(Jb, {
					render: /* @__PURE__ */ E(l.slots.baseMenuItem, L({}, l.slotProps?.baseMenuItem)),
					options: i,
					onClick: g,
					children: c.current.getLocaleText("toolbarExportPrint")
				}),
				!r?.disableToolbarButton && /* @__PURE__ */ E(Kb, {
					render: /* @__PURE__ */ E(l.slots.baseMenuItem, L({}, l.slotProps?.baseMenuItem)),
					options: r,
					onClick: g,
					children: c.current.getLocaleText("toolbarExportCSV")
				}),
				o?.(g)
			] }))
		})] }),
		t && /* @__PURE__ */ D(O.Fragment, { children: [/* @__PURE__ */ E(tx, {}), /* @__PURE__ */ E(Bb, L({}, n))] })
	] }));
}
process.env.NODE_ENV !== "production" && (rx.propTypes = {
	additionalExportMenuItems: q.default.func,
	additionalItems: q.default.node,
	csvOptions: q.default.object,
	printOptions: q.default.object,
	quickFilterProps: q.default.shape({
		className: q.default.string,
		debounceMs: q.default.number,
		quickFilterFormatter: q.default.func,
		quickFilterParser: q.default.func,
		slotProps: q.default.object
	}),
	showQuickFilter: q.default.bool,
	slotProps: q.default.object,
	sx: q.default.oneOfType([
		q.default.arrayOf(q.default.oneOfType([
			q.default.func,
			q.default.object,
			q.default.bool
		])),
		q.default.func,
		q.default.object
	])
});
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/GridSelectedRowCount.js
var ix = ["className", "selectedRowCount"], ax = (e) => {
	let { classes: t } = e;
	return Bi({ root: ["selectedRowCount"] }, jn, t);
}, ox = Cm("div", {
	name: "MuiDataGrid",
	slot: "SelectedRowCount"
})({
	alignItems: "center",
	display: "flex",
	margin: H.spacing(0, 2),
	visibility: "hidden",
	width: 0,
	height: 0,
	[H.breakpoints.up("sm")]: {
		visibility: "visible",
		width: "auto",
		height: "auto"
	}
}), sx = z(function(e, t) {
	let { className: n, selectedRowCount: r } = e, i = R(e, ix), a = V(), o = B(), s = ax(o), c = a.current.getLocaleText("footerRowSelected")(r);
	return /* @__PURE__ */ E(ox, L({
		className: xt(s.root, n),
		ownerState: o
	}, i, {
		ref: t,
		children: c
	}));
});
process.env.NODE_ENV !== "production" && (sx.displayName = "GridSelectedRowCount"), process.env.NODE_ENV !== "production" && (sx.propTypes = {
	selectedRowCount: q.default.number.isRequired,
	sx: q.default.oneOfType([
		q.default.arrayOf(q.default.oneOfType([
			q.default.func,
			q.default.object,
			q.default.bool
		])),
		q.default.func,
		q.default.object
	])
});
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/GridFooter.js
var cx = z(function(e, t) {
	let n = V(), r = B(), i = W(n, Ka), a = W(n, Gl), o = W(n, Rl);
	return /* @__PURE__ */ D(F_, L({}, e, {
		ref: t,
		children: [
			!r.hideFooterSelectedRowCount && a > 0 ? /* @__PURE__ */ E(sx, { selectedRowCount: a }) : /* @__PURE__ */ E("div", {}),
			!r.hideFooterRowCount && !r.pagination ? /* @__PURE__ */ E(r.slots.footerRowCount, L({}, r.slotProps?.footerRowCount, {
				rowCount: i,
				visibleRowCount: o
			})) : null,
			r.pagination && !r.hideFooterPagination && r.slots.pagination && /* @__PURE__ */ E(r.slots.pagination, L({}, r.slotProps?.pagination))
		]
	}));
});
process.env.NODE_ENV !== "production" && (cx.displayName = "GridFooter"), process.env.NODE_ENV !== "production" && (cx.propTypes = { sx: q.default.oneOfType([
	q.default.arrayOf(q.default.oneOfType([
		q.default.func,
		q.default.object,
		q.default.bool
	])),
	q.default.func,
	q.default.object
]) });
//#endregion
//#region node_modules/@mui/x-data-grid/esm/internals/utils/getPinnedCellOffset.js
var lx = (e, t, n, r, i, a) => {
	let o;
	switch (e) {
		case Qc.LEFT:
			o = r[n];
			break;
		case Qc.RIGHT:
			o = i - r[n] - t + a;
			break;
		default:
			o = void 0;
			break;
	}
	return Number.isNaN(o) && (o = void 0), o;
}, ux = (e, t, n, r, i, a) => {
	let o = t === n - 1;
	return a?.startsWith("border") && e === Qc.LEFT && o ? !0 : r ? e === Qc.LEFT ? !0 : e === Qc.RIGHT ? !o : !o || i : !1;
}, dx = (e, t, n, r) => r?.startsWith("border") ? e === Qc.RIGHT && t === 0 : n && e === Qc.RIGHT && t === 0, fx = [
	"skeletonRowsCount",
	"visibleColumns",
	"showFirstRowBorder"
], px = I("div", {
	name: "MuiDataGrid",
	slot: "SkeletonLoadingOverlay"
})({
	minWidth: "100%",
	width: "max-content",
	height: "100%",
	overflow: "clip"
}), mx = (e) => {
	let { classes: t } = e;
	return Bi({ root: ["skeletonLoadingOverlay"] }, jn, t);
}, hx = (e) => parseInt(e.getAttribute("data-colindex"), 10), gx = z(function(e, t) {
	let n = B(), { slots: r } = n, i = Sc(), a = mx({ classes: n.classes }), o = O.useRef(null), s = St(o, t), c = V(), l = W(c, ja), u = W(c, Ma), d = W(c, Xs), f = O.useMemo(() => d.filter((e) => e <= u).length, [u, d]), { skeletonRowsCount: p, visibleColumns: m, showFirstRowBorder: h } = e, g = R(e, fx), _ = W(c, Gs), v = O.useMemo(() => _.slice(0, f), [_, f]), y = W(c, Js), b = O.useCallback((e) => {
		if (y.left.findIndex((t) => t.field === e) !== -1) return Qc.LEFT;
		if (y.right.findIndex((t) => t.field === e) !== -1) return Qc.RIGHT;
	}, [y.left, y.right]), x = O.useMemo(() => {
		let e = [];
		for (let t = 0; t < p; t += 1) {
			let a = [];
			for (let e = 0; e < v.length; e += 1) {
				let o = v[e], s = b(o.field), c = s === Qc.LEFT, u = s === Qc.RIGHT, f = n_(s, i), p = f ? y[f].length : v.length - y.left.length - y.right.length, h = f ? y[f].findIndex((e) => e.field === o.field) : e - y.left.length, g = l.hasScrollY ? l.scrollbarSize : 0, _ = r_({}, i, s, lx(s, o.computedWidth, e, d, l.columnsTotalWidth, g)), x = l.columnsTotalWidth < l.viewportOuterSize.width, S = ux(s, h, p, n.showCellVerticalBorder, x, n.pinnedColumnsSectionSeparator), C = dx(s, h, n.showCellVerticalBorder, n.pinnedColumnsSectionSeparator), w = e === v.length - 1, T = u && h === 0, D = T && x, O = w && !T && x, k = l.viewportOuterSize.width - l.columnsTotalWidth, A = Math.max(0, k), j = /* @__PURE__ */ E(r.skeletonCell, {
					width: A,
					empty: !0
				}, `skeleton-filler-column-${t}`);
				D && a.push(j), a.push(/* @__PURE__ */ E(r.skeletonCell, {
					field: o.field,
					type: o.type,
					align: o.align,
					width: "var(--width)",
					height: l.rowHeight,
					"data-colindex": e,
					empty: m && !m.has(o.field),
					className: xt(c && U["cell--pinnedLeft"], u && U["cell--pinnedRight"], S && U["cell--withRightBorder"], C && U["cell--withLeftBorder"]),
					style: L({ "--width": `${o.computedWidth}px` }, _)
				}, `skeleton-column-${t}-${o.field}`)), O && a.push(j);
			}
			e.push(/* @__PURE__ */ E("div", {
				className: xt(U.row, U.rowSkeleton, t === 0 && !h && U["row--firstVisible"]),
				children: a
			}, `skeleton-row-${t}`));
		}
		return e;
	}, [
		p,
		v,
		b,
		i,
		y,
		l.hasScrollY,
		l.scrollbarSize,
		l.columnsTotalWidth,
		l.viewportOuterSize.width,
		l.rowHeight,
		d,
		n.showCellVerticalBorder,
		n.pinnedColumnsSectionSeparator,
		r,
		m,
		h
	]);
	return K(c, "columnResize", (e) => {
		let { colDef: t, width: n } = e, r = o.current?.querySelectorAll(`[data-field="${rv(t.field)}"]`);
		if (!r) throw Error("MUI X: Expected skeleton cells to be defined with `data-field` attribute.");
		let i = v.findIndex((e) => e.field === t.field), a = b(t.field), s = a === Qc.LEFT, c = a === Qc.RIGHT, l = getComputedStyle(r[0]).getPropertyValue("--width"), u = parseInt(l, 10) - n;
		r && r.forEach((e) => {
			e.style.setProperty("--width", `${n}px`);
		}), s && (o.current?.querySelectorAll(`.${U["cell--pinnedLeft"]}`))?.forEach((e) => {
			hx(e) > i && (e.style.left = `${parseInt(getComputedStyle(e).left, 10) - u}px`);
		}), c && (o.current?.querySelectorAll(`.${U["cell--pinnedRight"]}`))?.forEach((e) => {
			hx(e) < i && (e.style.right = `${parseInt(getComputedStyle(e).right, 10) + u}px`);
		});
	}), /* @__PURE__ */ E(px, L({ className: a.root }, g, {
		ref: s,
		children: x
	}));
});
process.env.NODE_ENV !== "production" && (gx.displayName = "GridSkeletonLoadingOverlayInner");
var _x = z(function(e, t) {
	let n = W(V(), ja), r = n?.viewportInnerSize.height ?? 0;
	return /* @__PURE__ */ E(gx, L({}, e, {
		skeletonRowsCount: Math.ceil(r / n.rowHeight),
		ref: t
	}));
});
process.env.NODE_ENV !== "production" && (_x.displayName = "GridSkeletonLoadingOverlay");
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/GridLoadingOverlay.js
var vx = [
	"variant",
	"noRowsVariant",
	"style"
], yx = {
	"circular-progress": {
		component: (e) => e.slots.baseCircularProgress,
		style: {}
	},
	"linear-progress": {
		component: (e) => e.slots.baseLinearProgress,
		style: { display: "block" }
	},
	skeleton: {
		component: () => _x,
		style: { display: "block" }
	}
}, bx = z(function(e, t) {
	let { variant: n = "linear-progress", noRowsVariant: r = "skeleton", style: i } = e, a = R(e, vx), o = V(), s = B(), c = yx[W(o, Wa) === 0 ? r : n], l = c.component(s);
	return /* @__PURE__ */ E(z_, L({ style: L({}, c.style, i) }, a, {
		ref: t,
		children: /* @__PURE__ */ E(l, {})
	}));
});
process.env.NODE_ENV !== "production" && (bx.displayName = "GridLoadingOverlay"), process.env.NODE_ENV !== "production" && (bx.propTypes = {
	noRowsVariant: q.default.oneOf([
		"circular-progress",
		"linear-progress",
		"skeleton"
	]),
	sx: q.default.oneOfType([
		q.default.arrayOf(q.default.oneOfType([
			q.default.func,
			q.default.object,
			q.default.bool
		])),
		q.default.func,
		q.default.object
	]),
	variant: q.default.oneOf([
		"circular-progress",
		"linear-progress",
		"skeleton"
	])
});
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/GridNoRowsOverlay.js
var xx = z(function(e, t) {
	return /* @__PURE__ */ E(z_, L({}, e, {
		ref: t,
		children: V().current.getLocaleText("noRowsLabel")
	}));
});
process.env.NODE_ENV !== "production" && (xx.displayName = "GridNoRowsOverlay"), process.env.NODE_ENV !== "production" && (xx.propTypes = { sx: q.default.oneOfType([
	q.default.arrayOf(q.default.oneOfType([
		q.default.func,
		q.default.object,
		q.default.bool
	])),
	q.default.func,
	q.default.object
]) });
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/GridNoColumnsOverlay.js
var Sx = z(function(e, t) {
	let n = B(), r = V(), i = W(r, Bs), a = () => {
		r.current.showPreferences(Gm.columns);
	}, o = !n.disableColumnSelector && i.length > 0;
	return /* @__PURE__ */ D(z_, L({}, e, {
		ref: t,
		children: [r.current.getLocaleText("noColumnsOverlayLabel"), o && /* @__PURE__ */ E(n.slots.baseButton, L({ size: "small" }, n.slotProps?.baseButton, {
			onClick: a,
			children: r.current.getLocaleText("noColumnsOverlayManageColumns")
		}))]
	}));
});
process.env.NODE_ENV !== "production" && (Sx.displayName = "GridNoColumnsOverlay"), process.env.NODE_ENV !== "production" && (Sx.propTypes = { sx: q.default.oneOfType([
	q.default.arrayOf(q.default.oneOfType([
		q.default.func,
		q.default.object,
		q.default.bool
	])),
	q.default.func,
	q.default.object
]) });
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/GridPagination.js
var Cx = I(Vo, { slot: "internal" })({
	maxHeight: "calc(100% + 1px)",
	flexGrow: 1
});
function wx() {
	let e = V(), t = B(), n = W(e, Cu), r = W(e, wu), i = W(e, Ou), { paginationMode: a, loading: o } = t, s = r === -1 && a === "server" && o, c = O.useMemo(() => Math.max(0, i - 1), [i]), l = O.useMemo(() => r === -1 || n.page <= c ? n.page : c, [
		c,
		n.page,
		r
	]), u = O.useCallback((t) => {
		e.current.setPageSize(t);
	}, [e]), d = O.useCallback((t, n) => {
		e.current.setPage(n);
	}, [e]), f = (e) => {
		for (let n = 0; n < t.pageSizeOptions.length; n += 1) {
			let r = t.pageSizeOptions[n];
			if (typeof r == "number") {
				if (r === e) return !0;
			} else if (r.value === e) return !0;
		}
		return !1;
	};
	if (process.env.NODE_ENV !== "production") {
		let e = O.useRef(!1), r = t.paginationModel?.pageSize ?? n.pageSize;
		!e.current && !t.autoPageSize && !f(r) && (console.warn([`MUI X: The page size \`${n.pageSize}\` is not present in the \`pageSizeOptions\`.`, "Add it to show the pagination select."].join("\n")), e.current = !0);
	}
	let p = f(n.pageSize) ? t.pageSizeOptions : [];
	return /* @__PURE__ */ E(Cx, L({
		as: t.slots.basePagination,
		count: r,
		page: l,
		rowsPerPageOptions: p,
		rowsPerPage: n.pageSize,
		onPageChange: d,
		onRowsPerPageChange: u,
		disabled: s
	}, t.slotProps?.basePagination));
}
process.env.NODE_ENV !== "production" && (wx.propTypes = { component: q.default.elementType });
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/GridRowCount.js
var Tx = [
	"className",
	"rowCount",
	"visibleRowCount"
], Ex = (e) => {
	let { classes: t } = e;
	return Bi({ root: ["rowCount"] }, jn, t);
}, Dx = Cm("div", {
	name: "MuiDataGrid",
	slot: "RowCount"
})({
	alignItems: "center",
	display: "flex",
	margin: H.spacing(0, 2)
}), Ox = z(function(e, t) {
	let { className: n, rowCount: r, visibleRowCount: i } = e, a = R(e, Tx), o = V(), s = B(), c = Ex(s);
	if (r === 0) return null;
	let l = i < r ? o.current.getLocaleText("footerTotalVisibleRows")(i, r) : r.toLocaleString();
	return /* @__PURE__ */ D(Dx, L({
		className: xt(c.root, n),
		ownerState: s
	}, a, {
		ref: t,
		children: [
			o.current.getLocaleText("footerTotalRows"),
			" ",
			l
		]
	}));
});
process.env.NODE_ENV !== "production" && (Ox.displayName = "GridRowCount"), process.env.NODE_ENV !== "production" && (Ox.propTypes = {
	rowCount: q.default.number.isRequired,
	sx: q.default.oneOfType([
		q.default.arrayOf(q.default.oneOfType([
			q.default.func,
			q.default.object,
			q.default.bool
		])),
		q.default.func,
		q.default.object
	]),
	visibleRowCount: q.default.number.isRequired
});
//#endregion
//#region node_modules/@mui/x-data-grid/esm/utils/composeGridClasses.js
function kx(e, t) {
	return Bi(t, jn, e);
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/hooks/features/rowReorder/gridRowReorderSelector.js
var Ax = ka((e) => e.rowReorder), jx = G(Ax, (e) => e?.isActive ?? !1), Mx = G(Ax, (e) => e?.dropTarget ?? {
	rowId: null,
	position: null
});
G(Mx, (e) => e.rowId ?? null);
var Nx = G(Mx, (e, t) => e.rowId === t ? e.position : null);
G(Ax, (e) => e?.draggedRowId ?? null);
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/GridRowDragAndDropOverlay.js
var Px = I("div", {
	name: "MuiDataGrid",
	slot: "RowDragOverlay",
	shouldForwardProp: (e) => dm(e) && e !== "action"
})(({ theme: e, action: t }) => L({
	position: "absolute",
	left: 0,
	right: 0,
	top: 0,
	bottom: 0,
	pointerEvents: "none",
	zIndex: 1
}, t === "above" && { "&::before": {
	pointerEvents: "none",
	content: "\"\"",
	position: "absolute",
	top: 0,
	left: 0,
	right: 0,
	height: "2px",
	backgroundColor: (e.vars || e).palette.primary.main
} }, t === "below" && { "&::after": {
	pointerEvents: "none",
	content: "\"\"",
	position: "absolute",
	bottom: "-2px",
	left: 0,
	right: 0,
	height: "2px",
	backgroundColor: (e.vars || e).palette.primary.main
} }, t === "inside" && { backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / 0.1)` : le(e.palette.primary.main, .1) })), Fx = /* @__PURE__ */ O.memo(function(e) {
	let { rowId: t, className: n } = e, r = W(Zn(), Nx, t);
	return r ? /* @__PURE__ */ E(Px, {
		action: r,
		className: n
	}) : null;
});
process.env.NODE_ENV !== "production" && (Fx.displayName = "GridRowDragAndDropOverlay");
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/GridRow.js
var Ix = /* @__PURE__ */ "selected.rowId.row.index.style.rowHeight.className.visibleColumns.pinnedColumns.offsetLeft.columnsTotalWidth.firstColumnIndex.lastColumnIndex.focusedColumnIndex.isFirstVisible.isLastVisible.isNotVisible.showBottomBorder.scrollbarWidth.gridHasFiller.onClick.onDoubleClick.onMouseEnter.onMouseLeave.onMouseOut.onMouseOver".split("."), Lx = G(Bm, (e, { rowReordering: t, treeData: n }) => !t || n ? !1 : !!xl(e)), Rx = z(function(e, t) {
	let { selected: n, rowId: r, row: i, index: a, style: o, rowHeight: s, className: c, visibleColumns: l, pinnedColumns: u, offsetLeft: d, columnsTotalWidth: f, firstColumnIndex: p, lastColumnIndex: m, focusedColumnIndex: h, isFirstVisible: g, isLastVisible: _, isNotVisible: v, showBottomBorder: y, scrollbarWidth: b, gridHasFiller: x, onClick: S, onDoubleClick: C, onMouseEnter: w, onMouseLeave: T, onMouseOut: k, onMouseOver: A } = e, j = R(e, Ix), M = Zn(), N = jc(), P = O.useRef(null), ee = B(), te = Ag(M, ee), ne = W(M, Tl), F = W(M, Xs), re = ee.rowReordering, ie = ee.treeData, ae = W(M, Lx, {
		rowReordering: re,
		treeData: ie
	}), oe = W(M, jx), se = St(P, t), ce = Ya(M, r), le = W(M, Vm, {
		rowId: r,
		editMode: ee.editMode
	}), ue = ee.editMode === bs.Row, de = h !== void 0, I = de && h >= u.left.length && h < p, fe = de && h < l.length - u.right.length && h >= m, pe = kx(ee.classes, { root: [
		"row",
		n && "selected",
		ue && "row--editable",
		le && "row--editing",
		g && "row--firstVisible",
		_ && "row--lastVisible",
		y && "row--borderBottom",
		s === "auto" && "row--dynamicHeight"
	] }), me = N.hooks.useGridRowAriaAttributes();
	O.useLayoutEffect(() => {
		if (te.range) {
			let e = M.current.getRowIndexRelativeToVisibleRows(r);
			e !== void 0 && M.current.unstable_setLastMeasuredRowIndex(e);
		}
		if (P.current && s === "auto") return M.current.observeRowHeight(P.current, r);
	}, [
		M,
		te.range,
		s,
		r
	]);
	let he = O.useCallback((e, t) => (n) => {
		cv(n) || M.current.getRow(r) && (M.current.publishEvent(e, M.current.getRowParams(r), n), t && t(n));
	}, [M, r]), ge = O.useCallback((e) => {
		let t = nv(e.target, U.cell)?.getAttribute("data-field");
		t && (t === Lu.field || t === "__detail_panel_toggle__" || t === "__reorder__" || M.current.getCellMode(r, t) === xs.Edit || M.current.getColumn(t)?.type === "actions") || he("rowClick", S)(e);
	}, [
		M,
		S,
		he,
		r
	]), { slots: _e, slotProps: ve, disableColumnReorder: ye } = ee, be = W(M, () => L({}, M.current.getRowHeightEntry(r)), void 0, Wn), xe = O.useMemo(() => {
		if (v) return {
			opacity: 0,
			width: 0,
			height: 0
		};
		let e = L({}, o, {
			maxHeight: s === "auto" ? "none" : s,
			minHeight: s,
			"--height": typeof s == "number" ? `${s}px` : s
		});
		if (be.spacingTop) {
			let t = ee.rowSpacingType === "border" ? "borderTopWidth" : "marginTop";
			e[t] = be.spacingTop;
		}
		if (be.spacingBottom) {
			let t = ee.rowSpacingType === "border" ? "borderBottomWidth" : "marginBottom", n = e[t];
			typeof n != "number" && (n = parseInt(n || "0", 10)), n += be.spacingBottom, e[t] = n;
		}
		return e;
	}, [
		v,
		s,
		o,
		be.spacingTop,
		be.spacingBottom,
		ee.rowSpacingType
	]);
	if (!ce) return null;
	let Se = M.current.unstable_applyPipeProcessors("rowClassName", [], r), Ce = me(ce, a);
	if (typeof ee.getRowClassName == "function") {
		let e = a - (te.range?.firstRowIndex || 0), t = L({}, M.current.getRowParams(r), {
			isFirstVisible: e === 0,
			isLastVisible: e === te.rows.length - 1,
			indexRelativeToCurrentPage: e
		});
		Se.push(ee.getRowClassName(t));
	}
	let we = (e, t, n, a, o = Qc.NONE) => {
		let c = M.current.unstable_getCellColSpanInfo(r, n);
		if (c?.spannedByColSpan) return null;
		let l = c?.cellProps.width ?? e.computedWidth, u = c?.cellProps.colSpan ?? 1, d = lx(o, e.computedWidth, n, F, f, b);
		if (ce.type === "skeletonRow") return /* @__PURE__ */ E(_e.skeletonCell, {
			type: e.type,
			width: l,
			height: s,
			field: e.field,
			align: e.align
		}, e.field);
		let p = e.field === "__reorder__", m = !(ye || e.disableReorder), h = ae && !ne.length, g = !(m || p && h || oe), _ = o === Qc.VIRTUAL, v = dx(o, t, ee.showCellVerticalBorder, ee.pinnedColumnsSectionSeparator), y = ux(o, t, a, ee.showCellVerticalBorder, x, ee.pinnedColumnsSectionSeparator);
		return /* @__PURE__ */ E(_e.cell, L({
			column: e,
			width: l,
			rowId: r,
			align: e.align || "left",
			colIndex: n,
			colSpan: u,
			disableDragEvents: g,
			isNotVisible: _,
			pinnedOffset: d,
			pinnedPosition: o,
			showLeftBorder: v,
			showRightBorder: y,
			row: i,
			rowNode: ce
		}, ve?.cell), e.field);
	};
	process.env.NODE_ENV !== "production" && (we.displayName = "getCell");
	let Te = u.left.map((e, t) => we(e, t, t, u.left.length, Qc.LEFT)), Ee = u.right.map((e, t) => we(e, t, l.length - u.right.length + t, u.right.length, Qc.RIGHT)), De = l.length - u.left.length - u.right.length, Oe = [];
	I && Oe.push(we(l[h], h - u.left.length, h, De, Qc.VIRTUAL));
	for (let e = p; e < m; e += 1) {
		let t = l[e], n = e - u.left.length;
		t && Oe.push(we(t, n, e, De));
	}
	fe && Oe.push(we(l[h], h - u.left.length, h, De, Qc.VIRTUAL));
	let ke = i ? {
		onClick: ge,
		onDoubleClick: he("rowDoubleClick", C),
		onMouseEnter: he("rowMouseEnter", w),
		onMouseLeave: he("rowMouseLeave", T),
		onMouseOut: he("rowMouseOut", k),
		onMouseOver: he("rowMouseOver", A)
	} : null;
	return /* @__PURE__ */ D("div", L({
		"data-id": r,
		"data-rowindex": a,
		role: "row",
		className: xt(...Se, pe.root, c),
		style: xe
	}, Ce, ke, j, {
		ref: se,
		children: [
			Te,
			/* @__PURE__ */ E("div", {
				role: "presentation",
				className: U.cellOffsetLeft,
				style: { width: d }
			}),
			Oe,
			/* @__PURE__ */ E("div", {
				role: "presentation",
				className: xt(U.cell, U.cellEmpty)
			}),
			Ee,
			/* @__PURE__ */ E(Fx, { rowId: r })
		]
	}));
});
process.env.NODE_ENV !== "production" && (Rx.displayName = "GridRow"), process.env.NODE_ENV !== "production" && (Rx.propTypes = {
	columnsTotalWidth: q.default.number.isRequired,
	firstColumnIndex: q.default.number.isRequired,
	focusedColumnIndex: q.default.number,
	gridHasFiller: q.default.bool.isRequired,
	index: q.default.number.isRequired,
	isFirstVisible: q.default.bool.isRequired,
	isLastVisible: q.default.bool.isRequired,
	isNotVisible: q.default.bool.isRequired,
	lastColumnIndex: q.default.number.isRequired,
	offsetLeft: q.default.number.isRequired,
	onClick: q.default.func,
	onDoubleClick: q.default.func,
	onMouseEnter: q.default.func,
	onMouseLeave: q.default.func,
	pinnedColumns: q.default.object.isRequired,
	row: q.default.object.isRequired,
	rowHeight: q.default.oneOfType([q.default.oneOf(["auto"]), q.default.number]).isRequired,
	rowId: q.default.oneOfType([q.default.number, q.default.string]).isRequired,
	scrollbarWidth: q.default.number.isRequired,
	selected: q.default.bool.isRequired,
	showBottomBorder: q.default.bool.isRequired,
	visibleColumns: q.default.arrayOf(q.default.object).isRequired
});
var zx = Co(Rx), Bx = () => {
	let e = Zn(), t = B(), n = W(e, Gs), r = W(e, Ll), i = W(e, Gd), a = W(e, ro), o = t["aria-label"], s = t["aria-labelledby"], c = !o && !s && t.label;
	return {
		role: "grid",
		"aria-label": c ? t.label : o,
		"aria-labelledby": s,
		"aria-colcount": n.length,
		"aria-rowcount": i + 1 + a + r,
		"aria-multiselectable": Zl(t)
	};
}, Vx = () => {
	let e = Zn(), t = W(e, Gd);
	return O.useCallback((n, r) => {
		let i = {};
		return i["aria-rowindex"] = r + t + 2, n && e.current.isRowSelectable(n.id) && (i["aria-selected"] = e.current.isRowSelected(n.id)), i;
	}, [e, t]);
}, Hx = (e) => {
	let t = O.useCallback((t, n, r) => {
		let i = Ya(e, t), a = Ya(e, n);
		if (!i) throw Error(`MUI X: No row with id #${t} found.`);
		if (!a) throw Error(`MUI X: No row with id #${n} found.`);
		if (i.type !== "leaf") throw Error("MUI X: The row reordering does not support reordering of footer or grouping rows.");
		if (r === "inside") throw Error("MUI X: The 'inside' position is only supported for tree data. Use 'above' or 'below' for flat data.");
		let o = Hl(e), s = o[n];
		if (s === void 0) throw Error(`MUI X: Target row with id #${n} not found in current view.`);
		let c = o[t];
		if (c === void 0) throw Error(`MUI X: Source row with id #${t} not found in current view.`);
		let l = s < c ? "up" : "down", u;
		u = l === "up" ? r === "above" ? s : s + 1 : r === "above" ? s - 1 : s, u !== c && (e.current.setState((t) => {
			let n = Ja(e)[io], r = [...n.children];
			return r.splice(u, 0, r.splice(c, 1)[0]), L({}, t, { rows: L({}, t.rows, { tree: L({}, t.rows.tree, { [io]: L({}, n, { children: r }) }) }) });
		}), e.current.publishEvent("rowsSet"));
	}, [e]);
	return {
		setRowIndex: O.useCallback((t, n) => {
			let r = Ya(e, t);
			if (!r) throw Error(`MUI X: No row with id #${t} found.`);
			if (r.type !== "leaf") throw Error("MUI X: The row reordering does not support reordering of footer or grouping rows.");
			e.current.setState((r) => {
				let i = Ja(e)[io], a = i.children, o = a.findIndex((e) => e === t);
				if (o === -1 || o === n) return r;
				let s = [...a];
				return s.splice(n, 0, s.splice(o, 1)[0]), L({}, r, { rows: L({}, r.rows, { tree: L({}, r.rows.tree, { [io]: L({}, i, { children: s }) }) }) });
			}), e.current.publishEvent("rowsSet");
		}, [e]),
		setRowPosition: t
	};
}, Ux = (e) => {
	let t = O.useCallback((t, n) => {
		let r = e.current.getColumn(n), i = e.current.getRow(t);
		if (!i) throw Error(`No row with id #${t} found`);
		return !r || !r.valueGetter ? i[n] : r.valueGetter(i[r.field], i, r, e);
	}, [e]), n = O.useCallback((t, n) => lo(t, n, e), [e]);
	return {
		getCellValue: t,
		getRowValue: n,
		getRowFormattedValue: O.useCallback((t, r) => {
			let i = n(t, r);
			return !r || !r.valueFormatter ? i : r.valueFormatter(i, t, r, e);
		}, [e, n])
	};
}, Wx = () => O.useCallback((e) => !ho(e.rowNode), []);
//#endregion
//#region node_modules/@mui/x-data-grid/esm/context/GridContextProvider.js
function Gx({ privateApiRef: e, configuration: t, props: n, children: r }) {
	let i = O.useRef(e.current.getPublicApi());
	return /* @__PURE__ */ E(Ac.Provider, {
		value: t,
		children: /* @__PURE__ */ E(sn.Provider, {
			value: n,
			children: /* @__PURE__ */ E(Xn.Provider, {
				value: e,
				children: /* @__PURE__ */ E(un.Provider, {
					value: i,
					children: /* @__PURE__ */ E(T_, { children: /* @__PURE__ */ E(Ic, { children: r }) })
				})
			})
		})
	});
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/hooks/core/useGridRefs.js
var Kx = (e) => {
	let t = O.useRef(null), n = O.useRef(null), r = O.useRef(null), i = O.useRef(null), a = O.useRef(null), o = O.useRef(null);
	e.current.register("public", { rootElementRef: t }), e.current.register("private", {
		mainElementRef: n,
		virtualScrollerRef: r,
		virtualScrollbarVerticalRef: i,
		virtualScrollbarHorizontalRef: a,
		columnHeadersContainerRef: o
	});
}, qx = (e) => {
	let t = Sc();
	e.current.state.isRtl === void 0 && (e.current.state.isRtl = t);
	let n = O.useRef(!0);
	O.useEffect(() => {
		n.current ? n.current = !1 : e.current.setState((e) => L({}, e, { isRtl: t }));
	}, [e, t]);
}, Jx = ds() && window.localStorage.getItem("DEBUG") != null, Yx = () => {}, Xx = {
	debug: Yx,
	info: Yx,
	warn: Yx,
	error: Yx
}, Zx = [
	"debug",
	"info",
	"warn",
	"error"
];
function Qx(e, t, n = console) {
	let r = Zx.indexOf(t);
	if (r === -1) throw Error(`MUI X: Log level ${t} not recognized.`);
	return Zx.reduce((t, i, a) => (a >= r ? t[i] = (...t) => {
		let [r, ...a] = t;
		n[i](`MUI X: ${e} - ${r}`, ...a);
	} : t[i] = Yx, t), {});
}
var $x = (e, t) => {
	pf(e, { getLogger: O.useCallback((e) => Jx ? Qx(e, "debug", t.logger) : t.logLevel ? Qx(e, t.logLevel.toString(), t.logger) : Xx, [t.logLevel, t.logger]) }, "private");
}, eS = (e, t) => {
	let n = O.useCallback((e) => {
		if (t.localeText[e] == null) throw Error(`Missing translation for key ${e}.`);
		return t.localeText[e];
	}, [t.localeText]);
	e.current.register("public", { getLocaleText: n });
}, tS = /* @__PURE__ */ function(e) {
	return e.DataSource = "dataSource", e.RowTree = "rowTree", e;
}({}), nS = (e, t, n, r) => {
	let i = O.useCallback(() => {
		e.current.registerStrategyProcessor(t, n, r);
	}, [
		e,
		r,
		n,
		t
	]);
	gf(() => {
		i();
	});
	let a = O.useRef(!0);
	O.useEffect(() => {
		a.current ? a.current = !1 : i();
	}, [i]);
}, rS = "none", iS = {
	dataSourceRowsUpdate: tS.DataSource,
	rowTreeCreation: tS.RowTree,
	filtering: tS.RowTree,
	sorting: tS.RowTree,
	visibleRowsLookupCreation: tS.RowTree
}, aS = (e) => {
	let t = O.useRef(/* @__PURE__ */ new Map()), n = O.useRef({});
	pf(e, {
		registerStrategyProcessor: O.useCallback((t, r, i) => {
			let a = () => {
				let e = n.current[r], i = R(e, [t].map(Fg));
				n.current[r] = i;
			};
			n.current[r] || (n.current[r] = {});
			let o = n.current[r], s = o[t];
			return o[t] = i, !s || s === i || t === e.current.getActiveStrategy(iS[r]) && e.current.publishEvent("activeStrategyProcessorChange", r), a;
		}, [e]),
		applyStrategyProcessor: O.useCallback((t, r) => {
			let i = e.current.getActiveStrategy(iS[t]);
			if (i == null) throw Error("Can't apply a strategy processor before defining an active strategy");
			let a = n.current[t];
			if (!a || !a[i]) throw Error(`No processor found for processor "${t}" on strategy "${i}"`);
			let o = a[i];
			return o(r);
		}, [e]),
		getActiveStrategy: O.useCallback((e) => Array.from(t.current.entries()).find(([, t]) => t.group === e ? t.isAvailable() : !1)?.[0] ?? "none", []),
		setStrategyAvailability: O.useCallback((n, r, i) => {
			t.current.set(r, {
				group: n,
				isAvailable: i
			}), e.current.publishEvent("strategyAvailabilityChange");
		}, [e])
	}, "private");
}, oS = (e) => {
	let t = O.useRef({}), n = O.useCallback((e) => {
		t.current[e.stateId] = e;
	}, []), r = O.useCallback((n, r) => {
		let i;
		if (i = ls(n) ? n(e.current.state) : n, e.current.state === i) return !1;
		let a = { current: { state: i } }, o = !1, s = [];
		if (Object.keys(t.current).forEach((n) => {
			let r = t.current[n], i = r.stateSelector(e), c = r.stateSelector(a);
			c !== i && (s.push({
				stateId: r.stateId,
				hasPropChanged: c !== r.propModel
			}), r.propModel !== void 0 && c !== r.propModel && (o = !0));
		}), s.length > 1) throw Error(`You're not allowed to update several sub-state in one transaction. You already updated ${s[0].stateId}, therefore, you're not allowed to update ${s.map((e) => e.stateId).join(", ")} in the same transaction.`);
		if (o || (e.current.state = i, e.current.publishEvent("stateChange", i), e.current.store.update(i)), s.length === 1) {
			let { stateId: n, hasPropChanged: i } = s[0], c = t.current[n], l = c.stateSelector(a);
			c.propOnChange && i && c.propOnChange(l, {
				reason: r,
				api: e.current
			}), o || e.current.publishEvent(c.changeEvent, l, { reason: r });
		}
		return !o;
	}, [e]), i = O.useCallback((t, n, r) => e.current.setState((e) => L({}, e, { [t]: n(e[t]) }), r), [e]), a = { setState: r }, o = {
		updateControlState: i,
		registerControlState: n
	};
	pf(e, a, "public"), pf(e, o, "private");
}, sS = (e, t) => L({}, e, { props: {
	listView: t.listView,
	getRowId: t.getRowId,
	isCellEditable: t.isCellEditable,
	isRowSelectable: t.isRowSelectable,
	dataSource: t.dataSource
} }), cS = (e, t) => {
	let n = O.useRef(!0);
	O.useEffect(() => {
		if (n.current) {
			n.current = !1;
			return;
		}
		e.current.setState((e) => L({}, e, { props: {
			listView: t.listView,
			getRowId: t.getRowId,
			isCellEditable: t.isCellEditable,
			isRowSelectable: t.isRowSelectable,
			dataSource: t.dataSource
		} }));
	}, [
		e,
		t.listView,
		t.getRowId,
		t.isCellEditable,
		t.isRowSelectable,
		t.dataSource
	]);
}, lS = (e, t) => {
	Kx(e), cS(e, t), qx(e), $x(e, t), oS(e), Ig(e), aS(e), eS(e, t), e.current.register("private", { rootProps: t });
}, uS = (e, t, n, r) => {
	let i = O.useRef(r), a = O.useRef(!1);
	r !== i.current && (a.current = !1, i.current = r), a.current ||= (t.current.state = e(t.current.state, n, t), !0);
};
//#endregion
//#region node_modules/@mui/x-data-grid/esm/hooks/features/export/serializers/csvSerializer.js
function dS(e, t) {
	if (e == null) return "";
	let n = typeof e == "string" ? e : `${e}`;
	if (t.shouldAppendQuotes || t.escapeFormulas) {
		let e = n.replace(/"/g, "\"\"");
		return t.escapeFormulas && [
			"=",
			"+",
			"-",
			"@",
			"	",
			"\r"
		].includes(e[0]) ? `"'${e}"` : [
			t.delimiter,
			"\n",
			"\r",
			"\""
		].some((e) => n.includes(e)) ? `"${e}"` : e;
	}
	return n;
}
var fS = (e, t) => {
	let { csvOptions: n, ignoreValueFormatter: r } = t, i;
	if (r) {
		let t = e.colDef.type;
		i = t === "number" ? String(e.value) : t === "date" || t === "dateTime" ? e.value?.toISOString() : typeof e.value?.toString == "function" ? e.value.toString() : e.value;
	} else i = e.formattedValue;
	return dS(i, n);
}, pS = class {
	rowString = "";
	isEmpty = !0;
	constructor(e) {
		this.options = e;
	}
	addValue(e) {
		this.isEmpty || (this.rowString += this.options.csvOptions.delimiter), typeof this.options.sanitizeCellValue == "function" ? this.rowString += this.options.sanitizeCellValue(e, this.options.csvOptions) : this.rowString += e, this.isEmpty = !1;
	}
	getRowString() {
		return this.rowString;
	}
}, mS = ({ id: e, columns: t, getCellParams: n, csvOptions: r, ignoreValueFormatter: i }) => {
	let a = new pS({ csvOptions: r });
	return t.forEach((t) => {
		let o = n(e, t.field);
		String(o.formattedValue) === "[object Object]" && In(["MUI X: When the value of a field is an object or a `renderCell` is provided, the CSV export might not display the value correctly.", "You can provide a `valueFormatter` with a string representation to be used."]), a.addValue(fS(o, {
			ignoreValueFormatter: i,
			csvOptions: r
		}));
	}), a.getRowString();
};
function hS(e) {
	let { columns: t, rowIds: n, csvOptions: r, ignoreValueFormatter: i, apiRef: a } = e, o = n.reduce((e, n) => `${e}${mS({
		id: n,
		columns: t,
		getCellParams: a.current.getCellParams,
		ignoreValueFormatter: i,
		csvOptions: r
	})}\r\n`, "").trim();
	if (!r.includeHeaders) return o;
	let s = t.filter((e) => e.field !== Lu.field), c = [];
	if (r.includeColumnGroupsHeaders) {
		let e = a.current.getAllGroupDetails(), t = 0, n = s.reduce((e, n) => {
			let r = a.current.getColumnGroupPath(n.field);
			return e[n.field] = r, t = Math.max(t, r.length), e;
		}, {});
		for (let i = 0; i < t; i += 1) {
			let t = new pS({
				csvOptions: r,
				sanitizeCellValue: dS
			});
			c.push(t), s.forEach((r) => {
				let a = e[(n[r.field] || [])[i]];
				t.addValue(a ? a.headerName || a.groupId : "");
			});
		}
	}
	let l = new pS({
		csvOptions: r,
		sanitizeCellValue: dS
	});
	return s.forEach((e) => {
		l.addValue(e.headerName || e.field);
	}), c.push(l), `${`${c.map((e) => e.getRowString()).join("\r\n")}\r\n`}${o}`.trim();
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/hooks/features/clipboard/useGridClipboard.js
function gS(e) {
	let t = document.createElement("span");
	t.style.whiteSpace = "pre", t.style.userSelect = "all", t.style.opacity = "0px", t.textContent = e, document.body.appendChild(t);
	let n = document.createRange();
	n.selectNode(t);
	let r = window.getSelection();
	r.removeAllRanges(), r.addRange(n);
	try {
		document.execCommand("copy");
	} finally {
		document.body.removeChild(t);
	}
}
function _S(e) {
	navigator.clipboard ? navigator.clipboard.writeText(e).catch(() => {
		gS(e);
	}) : gS(e);
}
function vS(e) {
	return !!(window.getSelection()?.toString() || e && (e.selectionEnd || 0) - (e.selectionStart || 0) > 0);
}
var yS = (e, t) => {
	let n = t.ignoreValueFormatterDuringExport, r = (typeof n == "object" ? n?.clipboardExport : n) || !1, i = t.clipboardCopyCellDelimiter;
	hf(e, () => e.current.rootElementRef.current, "keydown", O.useCallback((t) => {
		if (!kc(t) || vS(t.target)) return;
		let n = "";
		if (Gl(e) > 0) n = e.current.getDataAsCsv({
			includeHeaders: !1,
			delimiter: i,
			shouldAppendQuotes: !1,
			escapeFormulas: !1
		});
		else {
			let t = su(e);
			t && (n = fS(e.current.getCellParams(t.id, t.field), {
				csvOptions: {
					delimiter: i,
					shouldAppendQuotes: !1,
					escapeFormulas: !1
				},
				ignoreValueFormatter: r
			}));
		}
		n = e.current.unstable_applyPipeProcessors("clipboardCopy", n), n && (_S(n), e.current.publishEvent("clipboardCopy", n));
	}, [
		e,
		r,
		i
	])), No(e, "clipboardCopy", t.onClipboardCopy);
}, bS = (e) => L({}, e, { columnMenu: { open: !1 } }), xS = (e) => {
	let t = mf(e, "useGridColumnMenu"), n = O.useRef({}), r = O.useCallback(() => {
		n.current.wheel?.(), n.current.touchMove?.();
	}, []), i = O.useCallback(() => {
		r(), n.current.wheel = e.current.subscribeEvent("virtualScrollerWheel", e.current.hideColumnMenu), n.current.touchMove = e.current.subscribeEvent("virtualScrollerTouchMove", e.current.hideColumnMenu);
	}, [e, r]), a = O.useCallback((n) => {
		let r = Cf(e), a = {
			open: !0,
			field: n
		};
		(a.open !== r.open || a.field !== r.field) && (e.current.setState((e) => e.columnMenu.open && e.columnMenu.field === n ? e : (t.debug("Opening Column Menu"), i(), L({}, e, { columnMenu: {
			open: !0,
			field: n
		} }))), e.current.hidePreferences());
	}, [
		e,
		t,
		i
	]), o = O.useCallback(() => {
		let n = Cf(e);
		if (n.field) {
			let t = Vs(e), r = Us(e), i = Bs(e), a = n.field;
			if (t[a] || (a = i[0]), r[a] === !1) {
				let e = i.filter((e) => e === a ? !0 : r[e] !== !1), t = e.indexOf(a);
				a = e[t + 1] || e[t - 1];
			}
			e.current.setColumnHeaderFocus(a);
		}
		let i = {
			open: !1,
			field: void 0
		};
		(i.open !== n.open || i.field !== n.field) && e.current.setState((e) => (t.debug("Hiding Column Menu"), r(), L({}, e, { columnMenu: i })));
	}, [
		e,
		t,
		r
	]);
	pf(e, {
		showColumnMenu: a,
		hideColumnMenu: o,
		toggleColumnMenu: O.useCallback((n) => {
			t.debug("Toggle Column Menu");
			let r = Cf(e);
			!r.open || r.field !== n ? a(n) : o();
		}, [
			e,
			t,
			a,
			o
		])
	}, "public"), K(e, "columnResizeStart", o);
}, SS = (e, t, n) => (n.current.caches.columns = { lastColumnsProp: t.columns }, L({}, e, {
	columns: Qd({
		apiRef: n,
		columnsToUpsert: t.columns,
		initialState: t.initialState?.columns,
		columnVisibilityModel: t.columnVisibilityModel ?? t.initialState?.columns?.columnVisibilityModel ?? {},
		keepOnlyColumnsToUpsert: !0
	}),
	pinnedColumns: e.pinnedColumns ?? Is
}));
function CS(e, t) {
	let n = mf(e, "useGridColumns");
	e.current.registerControlState({
		stateId: "visibleColumns",
		propModel: t.columnVisibilityModel,
		propOnChange: t.onColumnVisibilityModelChange,
		stateSelector: Us,
		changeEvent: "columnVisibilityModelChange"
	});
	let r = O.useCallback((t) => {
		n.debug("Updating columns state."), e.current.setState(wS(t)), e.current.publishEvent("columnsChange", t.orderedFields);
	}, [n, e]), i = O.useCallback((t) => Vs(e)[t], [e]), a = O.useCallback(() => Hs(e), [e]), o = O.useCallback(() => Gs(e), [e]), s = O.useCallback((t, n = !0) => (n ? Gs(e) : Hs(e)).findIndex((e) => e.field === t), [e]), c = O.useCallback((t) => {
		let n = s(t);
		return Xs(e)[n];
	}, [e, s]), l = O.useCallback((t) => {
		Us(e) !== t && (e.current.setState((n) => L({}, n, { columns: Qd({
			apiRef: e,
			columnsToUpsert: [],
			initialState: void 0,
			columnVisibilityModel: t,
			keepOnlyColumnsToUpsert: !1
		}) })), e.current.updateRenderContext?.());
	}, [e]), u = O.useCallback((t) => {
		let n = t;
		if (yf(e)) {
			let r = [], i = [], a = xf(e);
			if (t.forEach((e) => {
				a.has(e.field) ? r.push(e) : i.push(e);
			}), r.length > 0 && e.current.updateNonPivotColumns(r), i.length === 0) return;
			n = i;
		}
		r(Qd({
			apiRef: e,
			columnsToUpsert: n,
			initialState: void 0,
			keepOnlyColumnsToUpsert: !1,
			updateInitialVisibilityModel: !0
		}));
	}, [e, r]), d = O.useCallback((t, n) => {
		let r = Us(e);
		if (n !== (r[t] ?? !0)) {
			let i = L({}, r, { [t]: n });
			e.current.setColumnVisibilityModel(i);
		}
	}, [e]), f = O.useCallback((t) => Bs(e).findIndex((e) => e === t), [e]), p = O.useCallback((t, i) => {
		let a = Bs(e), o = f(t);
		if (o === i) return;
		n.debug(`Moving column ${t} to index ${i}`);
		let s = [...a], c = s.splice(o, 1)[0];
		s.splice(i, 0, c), r(L({}, zs(e), { orderedFields: s }));
		let l = {
			column: e.current.getColumn(t),
			targetIndex: e.current.getColumnIndexRelativeToVisibleColumns(t),
			oldIndex: o
		};
		e.current.publishEvent("columnIndexChange", l);
	}, [
		e,
		n,
		r,
		f
	]), m = {
		getColumn: i,
		getAllColumns: a,
		getColumnIndex: s,
		getColumnPosition: c,
		getVisibleColumns: o,
		getColumnIndexRelativeToVisibleColumns: f,
		updateColumns: u,
		setColumnVisibilityModel: l,
		setColumnVisibility: d,
		setColumnWidth: O.useCallback((t, i) => {
			n.debug(`Updating column ${t} width to ${i}`);
			let a = zs(e), o = a.lookup[t], s = L({}, o, {
				width: i,
				hasBeenResized: !0
			});
			r(Yd(L({}, a, { lookup: L({}, a.lookup, { [t]: s }) }), e.current.getRootDimensions())), e.current.publishEvent("columnWidthChange", {
				element: e.current.getColumnHeaderElement(t),
				colDef: s,
				width: i
			});
		}, [
			e,
			n,
			r
		])
	}, h = { setColumnIndex: p };
	pf(e, m, "public"), pf(e, h, t.signature === To.DataGrid ? "private" : "public");
	let g = O.useCallback((n, r) => {
		let i = {}, a = Us(e);
		(!r.exportOnlyDirtyModels || t.columnVisibilityModel != null || Object.keys(t.initialState?.columns?.columnVisibilityModel ?? {}).length > 0 || Object.keys(a).length > 0) && (i.columnVisibilityModel = a), i.orderedFields = Bs(e);
		let o = Hs(e), s = {};
		return o.forEach((e) => {
			if (e.hasBeenResized) {
				let t = {};
				Kd.forEach((n) => {
					let r = e[n];
					r === Infinity && (r = -1), t[n] = r;
				}), s[e.field] = t;
			}
		}), Object.keys(s).length > 0 && (i.dimensions = s), L({}, n, { columns: i });
	}, [
		e,
		t.columnVisibilityModel,
		t.initialState?.columns
	]), _ = O.useCallback((t, n) => {
		let r = n.stateToRestore.columns, i = r?.columnVisibilityModel;
		if (r == null) return t;
		let a = Qd({
			apiRef: e,
			columnsToUpsert: [],
			initialState: r,
			columnVisibilityModel: i,
			keepOnlyColumnsToUpsert: !1
		});
		return r != null && e.current.setState((e) => L({}, e, { columns: L({}, e.columns, {
			lookup: a.lookup,
			orderedFields: a.orderedFields,
			initialColumnVisibilityModel: a.initialColumnVisibilityModel
		}) })), i != null && e.current.setState((e) => L({}, e, { columns: L({}, e.columns, { columnVisibilityModel: i }) })), r != null && e.current.publishEvent("columnsChange", a.orderedFields), t;
	}, [e]), v = O.useCallback((e, n) => {
		if (n === Gm.columns) {
			let e = t.slots.columnsPanel;
			return /* @__PURE__ */ E(e, L({}, t.slotProps?.columnsPanel));
		}
		return e;
	}, [t.slots.columnsPanel, t.slotProps?.columnsPanel]);
	Lg(e, "columnMenu", O.useCallback((n) => {
		let r = yf(e);
		return t.disableColumnSelector || r ? n : [...n, "columnMenuColumnsItem"];
	}, [t.disableColumnSelector, e])), Lg(e, "exportState", g), Lg(e, "restoreState", _), Lg(e, "preferencePanel", v);
	let y = O.useRef(null);
	K(e, "viewportInnerSizeChange", (t) => {
		if (y.current !== t.width) {
			if (y.current = t.width, !Gs(e).some((e) => e.flex && e.flex > 0)) return;
			r(Yd(zs(e), e.current.getRootDimensions()));
		}
	}), Rg(e, "hydrateColumns", O.useCallback(() => {
		n.info("Columns pipe processing have changed, regenerating the columns"), r(Qd({
			apiRef: e,
			columnsToUpsert: [],
			initialState: void 0,
			keepOnlyColumnsToUpsert: !1
		}));
	}, [
		e,
		n,
		r
	])), O.useEffect(() => {
		e.current.caches.columns.lastColumnsProp !== t.columns && (e.current.caches.columns.lastColumnsProp = t.columns, n.info(`GridColumns have changed, new length ${t.columns.length}`), r(Qd({
			apiRef: e,
			initialState: void 0,
			columnsToUpsert: t.columns,
			keepOnlyColumnsToUpsert: !0,
			updateInitialVisibilityModel: !0,
			columnVisibilityModel: t.columnVisibilityModel
		})));
	}, [
		n,
		e,
		r,
		t.columns,
		t.columnVisibilityModel
	]), O.useEffect(() => {
		t.columnVisibilityModel !== void 0 && e.current.setColumnVisibilityModel(t.columnVisibilityModel);
	}, [
		e,
		n,
		t.columnVisibilityModel
	]);
}
function wS(e) {
	return (t) => L({}, t, { columns: e });
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/hooks/features/density/useGridDensity.js
var TS = (e, t) => L({}, e, { density: t.initialState?.density ?? t.density ?? "standard" }), ES = (e, t) => {
	let n = mf(e, "useDensity");
	e.current.registerControlState({
		stateId: "density",
		propModel: t.density,
		propOnChange: t.onDensityChange,
		stateSelector: Io,
		changeEvent: "densityChange"
	}), pf(e, { setDensity: wt((t) => {
		Io(e) !== t && (n.debug(`Set grid density to ${t}`), e.current.setState((e) => L({}, e, { density: t })));
	}) }, "public");
	let r = O.useCallback((n, r) => {
		let i = Io(e);
		return !r.exportOnlyDirtyModels || t.density != null || t.initialState?.density != null ? L({}, n, { density: i }) : n;
	}, [
		e,
		t.density,
		t.initialState?.density
	]), i = O.useCallback((t, n) => {
		let r = n.stateToRestore?.density ? n.stateToRestore.density : Io(e);
		return e.current.setState((e) => L({}, e, { density: r })), t;
	}, [e]);
	Lg(e, "exportState", r), Lg(e, "restoreState", i), O.useEffect(() => {
		t.density && e.current.setDensity(t.density);
	}, [e, t.density]);
};
//#endregion
//#region node_modules/@mui/x-data-grid/esm/utils/exportAs.js
function DS(e, t = "csv", n = document.title || "untitled") {
	let r = `${n}.${t}`;
	if ("download" in HTMLAnchorElement.prototype) {
		let t = URL.createObjectURL(e), n = document.createElement("a");
		n.href = t, n.download = r, n.click(), setTimeout(() => {
			URL.revokeObjectURL(t);
		});
		return;
	}
	throw Error("MUI X: exportAs not supported.");
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/hooks/features/export/utils.js
var OS = ({ apiRef: e, options: t }) => {
	let n = Hs(e);
	return t.fields ? t.fields.reduce((e, t) => {
		let r = n.find((e) => e.field === t);
		return r && e.push(r), e;
	}, []) : (t.allColumns ? n : Gs(e)).filter((e) => e.disableExport !== !0);
}, kS = ({ apiRef: e }) => {
	let t = Fl(e), n = Ja(e), r = Gl(e), i = t.filter((e) => n[e].type !== "footer"), a = no(e), o = a?.top?.map((e) => e.id) || [], s = a?.bottom?.map((e) => e.id) || [];
	if (i.unshift(...o), i.push(...s), r > 0) {
		let t = Kl(e);
		return i.filter((e) => t.has(e));
	}
	return i;
}, AS = (e, t) => {
	let n = mf(e, "useGridCsvExport"), r = t.ignoreValueFormatterDuringExport, i = (typeof r == "object" ? r?.csvExport : r) || !1, a = O.useCallback((t = {}) => (n.debug("Get data as CSV"), hS({
		columns: OS({
			apiRef: e,
			options: t
		}),
		rowIds: (t.getRowsToExport ?? kS)({ apiRef: e }),
		csvOptions: {
			delimiter: t.delimiter || ",",
			shouldAppendQuotes: t.shouldAppendQuotes ?? !0,
			includeHeaders: t.includeHeaders ?? !0,
			includeColumnGroupsHeaders: t.includeColumnGroupsHeaders ?? !0,
			escapeFormulas: t.escapeFormulas ?? !0
		},
		ignoreValueFormatter: i,
		apiRef: e
	})), [
		n,
		e,
		i
	]);
	pf(e, {
		getDataAsCsv: a,
		exportDataAsCsv: O.useCallback((e) => {
			n.debug("Export data as CSV");
			let t = a(e);
			DS(new Blob([e?.utf8WithBom ? new Uint8Array([
				239,
				187,
				191
			]) : "", t], { type: "text/csv" }), "csv", e?.fileName);
		}, [n, a])
	}, "public"), Lg(e, "exportMenu", O.useCallback((e, t) => t.csvOptions?.disableToolbarButton ? e : [...e, {
		component: /* @__PURE__ */ E(yb, { options: t.csvOptions }),
		componentName: "csvExport"
	}], []));
};
//#endregion
//#region node_modules/@mui/x-internals/esm/export/loadStyleSheets.js
function jS(e, t, n) {
	let r = [], i = t.querySelectorAll("style, link[rel='stylesheet']");
	for (let t = 0; t < i.length; t += 1) {
		let a = i[t], o = e.createElement(a.tagName);
		if (a.tagName === "STYLE") {
			let t = a.sheet;
			if (t) {
				let n = "";
				for (let e = 0; e < t.cssRules.length; e += 1) typeof t.cssRules[e].cssText == "string" && (n += `${t.cssRules[e].cssText}\r\n`);
				o.appendChild(e.createTextNode(n));
			}
		} else if (a.getAttribute("href")) {
			for (let e = 0; e < a.attributes.length; e += 1) {
				let t = a.attributes[e];
				t && o.setAttribute(t.nodeName, t.nodeValue || "");
			}
			r.push(new Promise((e) => {
				o.addEventListener("load", () => e());
			}));
		}
		n && o.setAttribute("nonce", n), e.head.appendChild(o), n && o.setAttribute("nonce", n);
	}
	return r;
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/hooks/features/pagination/useGridPaginationModel.js
var MS = (e, t, n) => {
	let r = e.paginationModel, i = e.rowCount, a = n?.pageSize ?? r.pageSize, o = gu(i, a, n?.page ?? r.page);
	n && (n?.page !== r.page || n?.pageSize !== r.pageSize) && (r = n);
	let s = a === -1 ? 0 : vu(r.page, o);
	return s !== r.page && (r = L({}, r, { page: s })), yu(r.pageSize, t), r;
}, NS = (e, t) => {
	let n = mf(e, "useGridPaginationModel"), r = W(e, Lo), i = O.useRef(Ol(e)), a = Math.floor(t.rowHeight * r);
	e.current.registerControlState({
		stateId: "paginationModel",
		propModel: t.paginationModel,
		propOnChange: t.onPaginationModelChange,
		stateSelector: Cu,
		changeEvent: "paginationModelChange"
	});
	let o = O.useCallback((t) => {
		let r = Cu(e);
		t !== r.page && (n.debug(`Setting page to ${t}`), e.current.setPaginationModel({
			page: t,
			pageSize: r.pageSize
		}));
	}, [e, n]), s = O.useMemo(() => Zy(o, 0), [o]);
	pf(e, {
		setPage: o,
		setPageSize: O.useCallback((t) => {
			let r = Cu(e);
			t !== r.pageSize && (n.debug(`Setting page size to ${t}`), e.current.setPaginationModel({
				pageSize: t,
				page: r.page
			}));
		}, [e, n]),
		setPaginationModel: O.useCallback((r) => {
			r !== Cu(e) && (n.debug("Setting 'paginationModel' to", r), e.current.setState((e) => L({}, e, { pagination: L({}, e.pagination, { paginationModel: MS(e.pagination, t.signature, r) }) }), "setPaginationModel"));
		}, [
			e,
			n,
			t.signature
		])
	}, "public");
	let c = O.useCallback((n, r) => {
		let i = Cu(e);
		return !r.exportOnlyDirtyModels || t.paginationModel != null || t.initialState?.pagination?.paginationModel != null || i.page !== 0 && i.pageSize !== hu(t.autoPageSize) ? L({}, n, { pagination: L({}, n.pagination, { paginationModel: i }) }) : n;
	}, [
		e,
		t.paginationModel,
		t.initialState?.pagination?.paginationModel,
		t.autoPageSize
	]), l = O.useCallback((n, r) => {
		let i = r.stateToRestore.pagination?.paginationModel ? L({}, _u(t.autoPageSize), r.stateToRestore.pagination?.paginationModel) : Cu(e);
		return e.current.setState((e) => L({}, e, { pagination: L({}, e.pagination, { paginationModel: MS(e.pagination, t.signature, i) }) }), "stateRestorePreProcessing"), n;
	}, [
		e,
		t.autoPageSize,
		t.signature
	]);
	Lg(e, "exportState", c), Lg(e, "restoreState", l);
	let u = () => {
		let t = Cu(e);
		e.current.virtualScrollerRef?.current && e.current.scrollToIndexes({ rowIndex: t.page * t.pageSize });
	}, d = O.useCallback(() => {
		if (!t.autoPageSize) return;
		let n = e.current.getRootDimensions(), r = Math.max(1, Math.floor(n.viewportInnerSize.height / a));
		e.current.setPageSize(r);
	}, [
		e,
		t.autoPageSize,
		a
	]), f = O.useCallback((t) => {
		if (t == null) return;
		let n = Cu(e);
		if (n.page === 0) return;
		let r = Ou(e);
		n.page > r - 1 && queueMicrotask(() => {
			s(Math.max(0, r - 1));
		});
	}, [e, s]), p = O.useCallback(() => {
		Cu(e).page !== 0 && s(0), e.current.getScrollPosition().top !== 0 && e.current.scroll({ top: 0 });
	}, [e, s]), m = O.useMemo(() => Zy(p, 0), [p]), h = O.useCallback((t) => {
		let n = L({}, t, { items: Bl(e) });
		$m(n, i.current) || (i.current = n, m());
	}, [e, m]);
	K(e, "viewportInnerSizeChange", d), K(e, "paginationModelChange", u), K(e, "rowCountChange", f), K(e, "sortModelChange", m), K(e, "filterModelChange", h);
	let g = O.useRef(!0);
	O.useEffect(() => {
		if (g.current) {
			g.current = !1;
			return;
		}
		t.pagination && e.current.setState((e) => L({}, e, { pagination: L({}, e.pagination, { paginationModel: MS(e.pagination, t.signature, t.paginationModel) }) }));
	}, [
		e,
		t.paginationModel,
		t.signature,
		t.pagination
	]), O.useEffect(() => {
		e.current.setState((e) => {
			let n = t.pagination === !0;
			return e.pagination.paginationMode === t.paginationMode && e.pagination.enabled === n ? e : L({}, e, { pagination: L({}, e.pagination, {
				paginationMode: t.paginationMode,
				enabled: n
			}) });
		});
	}, [
		e,
		t.paginationMode,
		t.pagination
	]), O.useEffect(d, [d]);
};
//#endregion
//#region node_modules/@mui/x-data-grid/esm/hooks/features/export/useGridPrintExport.js
function PS() {
	return new Promise((e) => {
		requestAnimationFrame(() => {
			e();
		});
	});
}
function FS(e) {
	let t = document.createElement("iframe");
	return t.style.position = "absolute", t.style.width = "0px", t.style.height = "0px", t.title = e || document.title, t;
}
var IS = (e, t) => {
	let n = e.current.rootElementRef.current !== null, r = mf(e, "useGridPrintExport"), i = O.useRef(null), a = O.useRef(null), o = O.useRef({}), s = O.useRef([]), c = O.useRef(null);
	O.useEffect(() => {
		i.current = Zm(e.current.rootElementRef.current);
	}, [e, n]);
	let l = O.useCallback((t, n, r) => new Promise((i) => {
		let a = OS({
			apiRef: e,
			options: {
				fields: t,
				allColumns: n
			}
		}).map((e) => e.field), o = Hs(e), s = {};
		o.forEach((e) => {
			s[e.field] = a.includes(e.field);
		}), r && (s[Lu.field] = !0), e.current.setColumnVisibilityModel(s), i();
	}), [e]), u = O.useCallback((t) => {
		let n = t({ apiRef: e }).reduce((t, n) => {
			let r = e.current.getRow(n);
			return r[ao] || t.push(r), t;
		}, []);
		e.current.setRows(n);
	}, [e]), d = O.useCallback((t, n) => {
		let r = L({
			copyStyles: !0,
			hideToolbar: !1,
			hideFooter: !1,
			includeCheckboxes: !1
		}, n), a = t.contentDocument;
		if (!a) return;
		let o = e.current.rootElementRef.current, s = o.cloneNode(!0), c = s.querySelector(`.${U.virtualScrollerContent}`), l = s.querySelector(`.${U.main}`);
		if (l.style.overflow = "visible", s.querySelector(`.${U.virtualScrollerRenderZone}`).style.position = "static", c.style.flexBasis = "auto", s.querySelector(`.${U["scrollbar--vertical"]}`)?.remove(), !(c.nextSibling instanceof HTMLElement && c.nextSibling.classList.contains(U.filler))) {
			let e = document.createElement("div");
			e.style.height = gg, c.insertAdjacentElement("afterend", e);
		}
		let u = s.querySelector(`.${U.footerContainer}`);
		r.hideToolbar && s.querySelector(`.${U.toolbar}`)?.remove(), r.hideFooter && u && u.remove(), s.style.height = "auto", s.style.boxSizing = "content-box", !r.hideFooter && u && (u.style.width = "100%");
		let d = document.createElement("div");
		d.appendChild(s), a.body.style.marginTop = "0px", a.body.innerHTML = d.innerHTML;
		let f = typeof r.pageStyle == "function" ? r.pageStyle() : r.pageStyle;
		if (typeof f == "string") {
			let e = a.createElement("style");
			e.appendChild(a.createTextNode(f)), a.head.appendChild(e);
		}
		r.bodyClassName && a.body.classList.add(...r.bodyClassName.split(" "));
		let p = [];
		if (r.copyStyles) {
			let e = o.getRootNode();
			p = jS(a, e.constructor.name === "ShadowRoot" ? e : i.current);
		}
		process.env.NODE_ENV !== "test" && Promise.all(p).then(() => {
			t.contentWindow.print();
		});
	}, [e, i]), f = O.useCallback((t) => {
		i.current.body.removeChild(t), e.current.restoreState(a.current || {}), a.current?.columns?.columnVisibilityModel || e.current.setColumnVisibilityModel(o.current), e.current.setState((e) => L({}, e, { virtualization: c.current })), e.current.setRows(s.current), a.current = null, o.current = {}, s.current = [];
	}, [e]);
	pf(e, { exportDataAsPrint: O.useCallback(async (n) => {
		if (r.debug("Export data as Print"), !e.current.rootElementRef.current) throw Error("MUI X: No grid root element available.");
		if (a.current = e.current.exportState(), o.current = Us(e), s.current = e.current.getSortedRows().filter((e) => !e[ao]), t.pagination) {
			let t = {
				page: 0,
				pageSize: Ll(e)
			};
			e.current.setState((e) => L({}, e, { pagination: L({}, e.pagination, { paginationModel: MS(e.pagination, "DataGridPro", t) }) }));
		}
		c.current = e.current.state.virtualization, e.current.unstable_setVirtualization(!1), await l(n?.fields, n?.allColumns, n?.includeCheckboxes), u(n?.getRowsToExport ?? kS), await PS();
		let p = FS(n?.fileName);
		process.env.NODE_ENV === "test" ? (i.current.body.appendChild(p), d(p, n), f(p)) : (p.onload = () => {
			d(p, n), p.contentWindow.matchMedia("print").addEventListener("change", (e) => {
				e.matches === !1 && f(p);
			});
		}, i.current.body.appendChild(p));
	}, [
		t,
		r,
		e,
		d,
		f,
		l,
		u
	]) }, "public"), Lg(e, "exportMenu", O.useCallback((e, t) => t.printOptions?.disableToolbarButton ? e : [...e, {
		component: /* @__PURE__ */ E(bb, { options: t.printOptions }),
		componentName: "printExport"
	}], []));
}, LS = (e, t, n) => L({}, e, {
	filter: L({ filterModel: rc(t.filterModel ?? t.initialState?.filter?.filterModel ?? Ns(), t.disableMultipleColumnsFiltering, n) }, Ms),
	visibleRowsLookup: {}
}), RS = (e) => e.filteredRowsLookup;
function zS(e, t) {
	return e.current.applyStrategyProcessor("visibleRowsLookupCreation", {
		tree: t.rows.tree,
		filteredRowsLookup: t.filter.filteredRowsLookup
	});
}
function BS() {
	return na(Object.values);
}
var VS = (e, t, n) => {
	let r = mf(e, "useGridFilter");
	e.current.registerControlState({
		stateId: "filter",
		propModel: t.filterModel,
		propOnChange: t.onFilterModelChange,
		stateSelector: Ol,
		changeEvent: "filterModelChange"
	});
	let i = O.useCallback(() => {
		e.current.setState((t) => {
			let n = Ol(e), r = e.current.getFilterState(n), i = L({}, t, { filter: L({}, t.filter, r) });
			return L({}, i, { visibleRowsLookup: zS(e, i) });
		}), e.current.publishEvent("filteredRowsSet");
	}, [e]), a = O.useCallback((e, n) => n == null || n.filterable === !1 || t.disableColumnFilter ? e : [...e, "columnMenuFilterItem"], [t.disableColumnFilter]), o = O.useCallback((t) => {
		let n = Ol(e), r = [...n.items], i = r.findIndex((e) => e.id === t.id);
		i === -1 ? r.push(t) : r[i] = t, e.current.setFilterModel(L({}, n, { items: r }), "upsertFilterItem");
	}, [e]), s = O.useCallback((t) => {
		let n = Ol(e), r = [...n.items];
		t.forEach((e) => {
			let t = r.findIndex((t) => t.id === e.id);
			t === -1 ? r.push(e) : r[t] = e;
		}), e.current.setFilterModel(L({}, n, { items: r }), "upsertFilterItems");
	}, [e]), c = O.useCallback((t) => {
		let n = Ol(e), r = n.items.filter((e) => e.id !== t.id);
		r.length !== n.items.length && e.current.setFilterModel(L({}, n, { items: r }), "deleteFilterItem");
	}, [e]), l = O.useCallback((n, i, a) => {
		if (r.debug("Displaying filter panel"), n) {
			let r = Ol(e), i = r.items.filter((t) => {
				if (t.value !== void 0) return !(Array.isArray(t.value) && t.value.length === 0);
				let n = e.current.getColumn(t.field).filterOperators?.find((e) => e.value === t.operator);
				return !(n?.requiresFilterValue === void 0 || n?.requiresFilterValue);
			}), a, o = i.find((e) => e.field === n), s = e.current.getColumn(n);
			a = o ? i : t.disableMultipleColumnsFiltering ? [nc({
				field: n,
				operator: s.filterOperators[0].value
			}, e)] : [...i, nc({
				field: n,
				operator: s.filterOperators[0].value
			}, e)], e.current.setFilterModel(L({}, r, { items: a }));
		}
		e.current.showPreferences(Gm.filters, i, a);
	}, [
		e,
		r,
		t.disableMultipleColumnsFiltering
	]), u = O.useCallback(() => {
		r.debug("Hiding filter panel"), e.current.hidePreferences();
	}, [e, r]), d = O.useCallback((t) => {
		let n = Ol(e);
		n.logicOperator !== t && e.current.setFilterModel(L({}, n, { logicOperator: t }), "changeLogicOperator");
	}, [e]), f = O.useCallback((t) => {
		let n = Ol(e);
		$m(n.quickFilterValues, t) || e.current.setFilterModel(L({}, n, { quickFilterValues: [...t] }));
	}, [e]), p = O.useCallback((n, i) => {
		Ol(e) !== n && (r.debug("Setting filter model"), e.current.updateControlState("filter", ic(n, t.disableMultipleColumnsFiltering, e), i), e.current.unstable_applyFilters());
	}, [
		e,
		r,
		t.disableMultipleColumnsFiltering
	]), m = O.useCallback((r) => {
		let i = rc(r, t.disableMultipleColumnsFiltering, e), a = n.hooks.useFilterValueGetter(e, t), o = t.filterMode === "client" ? dc(i, a, e, t.disableEval) : null;
		return L({}, e.current.applyStrategyProcessor("filtering", {
			isRowMatchingFilters: o,
			filterModel: i ?? Ns(),
			filterValueGetter: a
		}), { filterModel: i });
	}, [
		e,
		n.hooks,
		t
	]);
	pf(e, {
		setFilterLogicOperator: d,
		unstable_applyFilters: i,
		deleteFilterItem: c,
		upsertFilterItem: o,
		upsertFilterItems: s,
		setFilterModel: p,
		showFilterPanel: l,
		hideFilterPanel: u,
		setQuickFilterValues: f,
		ignoreDiacritics: t.ignoreDiacritics,
		getFilterState: m
	}, "public");
	let h = O.useCallback((n, r) => {
		let i = Ol(e);
		return i.items.forEach((e) => {
			delete e.fromInput;
		}), !r.exportOnlyDirtyModels || t.filterModel != null || t.initialState?.filter?.filterModel != null || !$m(i, Ns()) ? L({}, n, { filter: { filterModel: i } }) : n;
	}, [
		e,
		t.filterModel,
		t.initialState?.filter?.filterModel
	]), g = O.useCallback((n, r) => {
		let i = r.stateToRestore.filter?.filterModel;
		return i == null ? n : (e.current.updateControlState("filter", ic(i, t.disableMultipleColumnsFiltering, e), "restoreState"), L({}, n, { callbacks: [...n.callbacks, e.current.unstable_applyFilters] }));
	}, [e, t.disableMultipleColumnsFiltering]), _ = O.useCallback((e, n) => {
		if (n === Gm.filters) {
			let e = t.slots.filterPanel;
			return /* @__PURE__ */ E(e, L({}, t.slotProps?.filterPanel));
		}
		return e;
	}, [t.slots.filterPanel, t.slotProps?.filterPanel]), { getRowId: v } = t, y = Vn(BS), b = O.useCallback((n) => {
		if (t.filterMode !== "client" || !n.isRowMatchingFilters || !n.filterModel.items.length && !n.filterModel.quickFilterValues?.length) return Ms;
		let r = qa(e), i = {}, { isRowMatchingFilters: a } = n, o = {}, s = {
			passingFilterItems: null,
			passingQuickFilterValues: null
		}, c = y.current(e.current.state.rows.dataRowIdToModelLookup);
		for (let t = 0; t < c.length; t += 1) {
			let r = c[t], l = v ? v(r) : r.id;
			a(r, void 0, s);
			let u = mc([s.passingFilterItems], [s.passingQuickFilterValues], n.filterModel, n.filterValueGetter, e, o);
			u || (i[l] = u);
		}
		let l = "auto-generated-group-footer-root";
		return r[l] && (i[l] = !0), {
			filteredRowsLookup: i,
			filteredChildrenCountLookup: {},
			filteredDescendantCountLookup: {}
		};
	}, [
		e,
		t.filterMode,
		v,
		y
	]);
	Lg(e, "columnMenu", a), Lg(e, "exportState", h), Lg(e, "restoreState", g), Lg(e, "preferencePanel", _), nS(e, rS, "filtering", b), nS(e, rS, "visibleRowsLookupCreation", RS);
	let x = O.useCallback(() => {
		r.debug("onColUpdated - GridColumns changed, applying filters");
		let t = Ol(e), n = Vs(e), i = t.items.filter((e) => e.field && n[e.field]);
		i.length < t.items.length && e.current.setFilterModel(L({}, t, { items: i }));
	}, [e, r]), S = O.useCallback((t) => {
		t === "filtering" && e.current.unstable_applyFilters();
	}, [e]), C = O.useCallback(() => {
		e.current.setState((t) => L({}, t, { visibleRowsLookup: zS(e, t) }));
	}, [e]);
	K(e, "rowsSet", i), K(e, "columnsChange", x), K(e, "activeStrategyProcessorChange", S), K(e, "rowExpansionChange", C), K(e, "columnVisibilityModelChange", () => {
		let t = Ol(e);
		t.quickFilterValues?.length && lc(t) && i();
	}), gf(() => {
		t.signature === "DataGrid" && i();
	}), Ct(() => {
		t.filterModel !== void 0 && e.current.setFilterModel(t.filterModel);
	}, [
		e,
		r,
		t.filterModel
	]);
}, HS = (e) => L({}, e, {
	focus: {
		cell: null,
		columnHeader: null,
		columnHeaderFilter: null,
		columnGroupHeader: null
	},
	tabIndex: {
		cell: null,
		columnHeader: null,
		columnHeaderFilter: null,
		columnGroupHeader: null
	}
}), US = (e, t) => {
	let n = mf(e, "useGridFocus"), r = O.useRef(null), i = e.current.rootElementRef.current !== null, a = O.useCallback((t, n) => {
		t && e.current.getRow(t.id) && e.current.publishEvent("cellFocusOut", e.current.getCellParams(t.id, t.field), n);
	}, [e]), o = O.useCallback((t, r) => {
		let i = su(e);
		if (i?.id === t && i?.field === r) {
			if (e.current.getCellMode(t, r) !== "view") return;
			let n = e.current.getCellElement(t, r);
			if (!n) return;
			let i = e.current.rootElementRef.current, a = Zm(i), o = a.activeElement;
			if (!(!o || o === a.body || o === a.documentElement || i?.contains(o)) || n.contains(a.activeElement)) return;
			if (Xg()) n.focus({ preventScroll: !0 });
			else {
				let t = e.current.getScrollPosition();
				n.focus(), e.current.scroll(t);
			}
			return;
		}
		e.current.setState((e) => (n.debug(`Focusing on cell with id=${t} and field=${r}`), L({}, e, {
			tabIndex: {
				cell: {
					id: t,
					field: r
				},
				columnHeader: null,
				columnHeaderFilter: null,
				columnGroupHeader: null
			},
			focus: {
				cell: {
					id: t,
					field: r
				},
				columnHeader: null,
				columnHeaderFilter: null,
				columnGroupHeader: null
			}
		}))), e.current.getRow(t) && (i && a(i, {}), e.current.publishEvent("cellFocusIn", e.current.getCellParams(t, r)));
	}, [
		e,
		n,
		a
	]), s = O.useCallback((t, r = {}) => {
		a(su(e), r), e.current.setState((e) => (n.debug(`Focusing on column header with colIndex=${t}`), L({}, e, {
			tabIndex: {
				columnHeader: { field: t },
				columnHeaderFilter: null,
				cell: null,
				columnGroupHeader: null
			},
			focus: {
				columnHeader: { field: t },
				columnHeaderFilter: null,
				cell: null,
				columnGroupHeader: null
			}
		})));
	}, [
		e,
		n,
		a
	]), c = O.useCallback((t, r = {}) => {
		a(su(e), r), e.current.setState((e) => (n.debug(`Focusing on column header filter with colIndex=${t}`), L({}, e, {
			tabIndex: {
				columnHeader: null,
				columnHeaderFilter: { field: t },
				cell: null,
				columnGroupHeader: null
			},
			focus: {
				columnHeader: null,
				columnHeaderFilter: { field: t },
				cell: null,
				columnGroupHeader: null
			}
		})));
	}, [
		e,
		n,
		a
	]), l = O.useCallback((t, n, r = {}) => {
		let i = su(e);
		i && e.current.publishEvent("cellFocusOut", e.current.getCellParams(i.id, i.field), r), e.current.setState((e) => L({}, e, {
			tabIndex: {
				columnGroupHeader: {
					field: t,
					depth: n
				},
				columnHeader: null,
				columnHeaderFilter: null,
				cell: null
			},
			focus: {
				columnGroupHeader: {
					field: t,
					depth: n
				},
				columnHeader: null,
				columnHeaderFilter: null,
				cell: null
			}
		}));
	}, [e]), u = O.useCallback(() => lu(e), [e]), d = O.useCallback((n, r, i) => {
		let a = e.current.getColumnIndex(r), o = Gs(e), s = kg(e, {
			pagination: t.pagination,
			paginationMode: t.paginationMode
		}), c = no(e), l = [].concat(c.top || [], s.rows, c.bottom || []), u = l.findIndex((e) => e.id === n);
		i === "right" ? a += 1 : i === "left" ? --a : u += 1, a >= o.length ? (u += 1, u < l.length && (a = 0)) : a < 0 && (--u, u >= 0 && (a = o.length - 1)), u = ps(u, 0, l.length - 1);
		let d = l[u];
		if (!d) return;
		let f = e.current.unstable_getCellColSpanInfo(d.id, a);
		f && f.spannedByColSpan && (i === "left" || i === "below" ? a = f.leftVisibleCellIndex : i === "right" && (a = f.rightVisibleCellIndex)), a = ps(a, 0, o.length - 1);
		let p = o[a];
		e.current.setCellFocus(d.id, p.field);
	}, [
		e,
		t.pagination,
		t.paginationMode
	]), f = O.useCallback(({ id: t, field: n }) => {
		e.current.setCellFocus(t, n);
	}, [e]), p = O.useCallback((t, n) => {
		Oc(n) || n.key === "Enter" || n.key === "Tab" || n.key === "Shift" || Tc(n.key) || e.current.setCellFocus(t.id, t.field);
	}, [e]), m = O.useCallback(({ field: t }, n) => {
		n.target === n.currentTarget && e.current.setColumnHeaderFocus(t, n);
	}, [e]), h = O.useCallback(({ fields: t, depth: n }, r) => {
		if (r.target !== r.currentTarget) return;
		let i = lu(e);
		i !== null && i.depth === n && t.includes(i.field) || e.current.setColumnGroupHeaderFocus(t[0], n, r);
	}, [e]), g = O.useCallback((t, r) => {
		r.relatedTarget?.getAttribute("class")?.includes(U.columnHeader) || (n.debug("Clearing focus"), e.current.setState((e) => L({}, e, { focus: {
			cell: null,
			columnHeader: null,
			columnHeaderFilter: null,
			columnGroupHeader: null
		} })));
	}, [n, e]), _ = O.useCallback((e) => {
		r.current = e;
	}, []), v = O.useCallback((t) => {
		let n = r.current;
		r.current = null;
		let i = su(e);
		if (e.current.unstable_applyPipeProcessors("canUpdateFocus", !0, {
			event: t,
			cell: n
		})) {
			if (!i) {
				n && e.current.setCellFocus(n.id, n.field);
				return;
			}
			n?.id === i.id && n?.field === i.field || e.current.getCellElement(i.id, i.field)?.contains(t.target) || (n ? e.current.setCellFocus(n.id, n.field) : (e.current.setState((e) => L({}, e, { focus: {
				cell: null,
				columnHeader: null,
				columnHeaderFilter: null,
				columnGroupHeader: null
			} })), a(i, t)));
		}
	}, [e, a]), y = O.useCallback((t) => {
		if (t.cellMode === "view") return;
		let n = su(e);
		(n?.id !== t.id || n?.field !== t.field) && e.current.setCellFocus(t.id, t.field);
	}, [e]), b = O.useCallback(() => {
		let n = su(e);
		if (n && !e.current.getRow(n.id)) {
			let r = n.id, i = null;
			if (r !== void 0) {
				let n = e.current.getRowElement(r), a = n?.dataset.rowindex ? Number(n?.dataset.rowindex) : 0, o = kg(e, {
					pagination: t.pagination,
					paginationMode: t.paginationMode
				});
				i = o.rows[ps(a, 0, o.rows.length - 1)]?.id ?? null;
			}
			e.current.setState((e) => L({}, e, { focus: {
				cell: i === null ? null : {
					id: i,
					field: n.field
				},
				columnHeader: null,
				columnHeaderFilter: null,
				columnGroupHeader: null
			} }));
		}
	}, [
		e,
		t.pagination,
		t.paginationMode
	]), x = O.useMemo(() => Zy(b, 0), [b]), S = wt(() => {
		let n = su(e);
		if (!n) return;
		let r = kg(e, {
			pagination: t.pagination,
			paginationMode: t.paginationMode
		});
		if (r.rows.find((e) => e.id === n.id) || r.rows.length === 0) return;
		let i = Gs(e);
		e.current.setState((e) => L({}, e, { tabIndex: {
			cell: {
				id: r.rows[0].id,
				field: i[0].field
			},
			columnGroupHeader: null,
			columnHeader: null,
			columnHeaderFilter: null
		} }));
	}), C = {
		setCellFocus: o,
		setColumnHeaderFocus: s,
		setColumnHeaderFilterFocus: c
	}, w = {
		moveFocusToRelativeCell: d,
		setColumnGroupHeaderFocus: l,
		getColumnGroupHeaderFocus: u
	};
	pf(e, C, "public"), pf(e, w, "private"), O.useEffect(() => {
		let t = Zm(e.current.rootElementRef.current);
		return t.addEventListener("mouseup", v), () => {
			t.removeEventListener("mouseup", v);
		};
	}, [
		e,
		i,
		v
	]), K(e, "columnHeaderBlur", g), K(e, "cellDoubleClick", f), K(e, "cellMouseDown", _), K(e, "cellKeyDown", p), K(e, "cellModeChange", y), K(e, "columnHeaderFocus", m), K(e, "columnGroupHeaderFocus", h), K(e, "rowsSet", x), K(e, "paginationModelChange", S);
}, WS = ({ currentColIndex: e, firstColIndex: t, lastColIndex: n, isRtl: r }) => {
	if (r) {
		if (e < n) return e + 1;
	} else if (!r && e > t) return e - 1;
	return null;
}, GS = ({ currentColIndex: e, firstColIndex: t, lastColIndex: n, isRtl: r }) => {
	if (r) {
		if (e > t) return e - 1;
	} else if (!r && e < n) return e + 1;
	return null;
};
function KS(e, t, n, r) {
	let i = Xh.selectors.hiddenCells(e.current.virtualizer.store.state);
	if (!i[t]?.[n]) return t;
	let a = Fl(e), o = a.indexOf(t) + (r === "down" ? 1 : -1);
	for (; o >= 0 && o < a.length;) {
		let e = a[o];
		if (!i[e]?.[n]) return e;
		o += r === "down" ? 1 : -1;
	}
	return t;
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/hooks/features/keyboardNavigation/useGridKeyboardNavigation.js
var qS = Oa(Mu, no, (e, t) => (t.top || []).concat(e.rows, t.bottom || [])), JS = (e, t) => {
	let n = mf(e, "useGridKeyboardNavigation"), r = Sc(), i = O.useCallback(() => qS(e), [e]), a = t.signature !== "DataGrid" && t.headerFilters, o = O.useCallback((t, r, i = "left", a = "up") => {
		let o = Ml(e), s = e.current.unstable_getCellColSpanInfo(r, t);
		s && s.spannedByColSpan && (i === "left" ? t = s.leftVisibleCellIndex : i === "right" && (t = s.rightVisibleCellIndex));
		let c = Ks(e)[t], l = KS(e, r, t, a), u = o.findIndex((e) => e.id === l);
		n.debug(`Navigating to cell row ${u}, col ${t}`), e.current.scrollToIndexes({
			colIndex: t,
			rowIndex: u
		}), e.current.setCellFocus(l, c);
	}, [e, n]), s = O.useCallback((t, r) => {
		n.debug(`Navigating to header col ${t}`), e.current.scrollToIndexes({ colIndex: t });
		let i = e.current.getVisibleColumns()[t].field;
		e.current.setColumnHeaderFocus(i, r);
	}, [e, n]), c = O.useCallback((t, r) => {
		n.debug(`Navigating to header filter col ${t}`), e.current.scrollToIndexes({ colIndex: t });
		let i = e.current.getVisibleColumns()[t].field;
		e.current.setColumnHeaderFilterFocus(i, r);
	}, [e, n]), l = O.useCallback((t, r, i) => {
		n.debug(`Navigating to header col ${t}`), e.current.scrollToIndexes({ colIndex: t });
		let { field: a } = e.current.getVisibleColumns()[t];
		e.current.setColumnGroupHeaderFocus(a, r, i);
	}, [e, n]), u = O.useCallback((e) => i()[e]?.id, [i]), d = O.useCallback((n, d) => {
		let f = d.currentTarget.querySelector(`.${U.columnHeaderTitleContainerContent}`);
		if (f && f.contains(d.target) && n.field !== Lu.field || !Tc(d.key) && d.key !== "Tab" && d.key !== "Enter" || d.key === "Tab" && (t.tabNavigation === "none" || t.tabNavigation === "content" && d.shiftKey)) return;
		let p = i(), m = e.current.getViewportPageSize(), h = n.field ? e.current.getColumnIndex(n.field) : 0, g = p.length > 0 ? 0 : null, _ = p.length > 0 ? p.length - 1 : null, v = Math.max(0, Gs(e).length - 1), y = Gd(e), b = !0;
		if (d.key === "Tab" && t.tabNavigation === "content" && !d.shiftKey) {
			g !== null && (o(0, u(g)), d.preventDefault());
			return;
		}
		switch (d.key) {
			case "ArrowDown":
				a ? c(h, d) : g !== null && o(h, u(g));
				break;
			case "ArrowRight": {
				let e = GS({
					currentColIndex: h,
					firstColIndex: 0,
					lastColIndex: v,
					isRtl: r
				});
				e !== null && s(e, d);
				break;
			}
			case "ArrowLeft": {
				let e = WS({
					currentColIndex: h,
					firstColIndex: 0,
					lastColIndex: v,
					isRtl: r
				});
				e !== null && s(e, d);
				break;
			}
			case "ArrowUp":
				y > 0 && l(h, y - 1, d);
				break;
			case "PageDown":
				g !== null && _ !== null && o(h, u(Math.min(g + m, _)));
				break;
			case "Home":
				s(0, d);
				break;
			case "End":
				s(v, d);
				break;
			case "Enter":
				(d.ctrlKey || d.metaKey) && e.current.toggleColumnMenu(n.field);
				break;
			case "Tab":
				d.shiftKey ? h === 0 ? y > 0 ? l(v, y - 1, d) : b = !1 : s(h - 1, d) : h === v ? a ? c(0, d) : t.tabNavigation === "all" && g !== null ? o(0, u(g)) : b = !1 : s(h + 1, d);
				break;
			case " ": break;
			default: b = !1;
		}
		b && d.preventDefault();
	}, [
		e,
		t.tabNavigation,
		i,
		a,
		c,
		o,
		u,
		r,
		s,
		l
	]), f = O.useCallback((n, a) => {
		let l = zd(e) === n.field;
		if (Bd(e) === n.field || l && a.key !== "Tab" || !Tc(a.key) && a.key !== "Tab" || a.key === "Tab" && (t.tabNavigation === "none" || t.tabNavigation === "content" && a.shiftKey)) return;
		let d = i(), f = e.current.getViewportPageSize(), p = n.field ? e.current.getColumnIndex(n.field) : 0, m = d.length > 0 ? 0 : null, h = d.length > 0 ? d.length - 1 : null, g = Math.max(0, Gs(e).length - 1), _ = !0;
		if (a.key === "Tab" && t.tabNavigation === "content" && !a.shiftKey) {
			m !== null && (o(0, u(m)), a.preventDefault());
			return;
		}
		switch (a.key) {
			case "ArrowDown":
				m !== null && o(p, u(m));
				break;
			case "ArrowRight": {
				let e = GS({
					currentColIndex: p,
					firstColIndex: 0,
					lastColIndex: g,
					isRtl: r
				});
				e !== null && c(e, a);
				break;
			}
			case "ArrowLeft": {
				let t = WS({
					currentColIndex: p,
					firstColIndex: 0,
					lastColIndex: g,
					isRtl: r
				});
				t === null ? e.current.setColumnHeaderFilterFocus(n.field, a) : c(t, a);
				break;
			}
			case "ArrowUp":
				s(p, a);
				break;
			case "PageDown":
				m !== null && h !== null && o(p, u(Math.min(m + f, h)));
				break;
			case "Home":
				c(0, a);
				break;
			case "End":
				c(g, a);
				break;
			case "Tab":
				a.shiftKey ? p === 0 ? s(g, a) : c(p - 1, a) : p === g ? t.tabNavigation === "all" && m !== null ? o(0, u(m)) : _ = !1 : c(p + 1, a);
				break;
			case " ": break;
			default: _ = !1;
		}
		_ && a.preventDefault();
	}, [
		e,
		t.tabNavigation,
		i,
		c,
		r,
		s,
		o,
		u
	]), p = O.useCallback((n, r) => {
		let a = lu(e);
		if (a === null) return;
		let { field: c, depth: d } = a, { fields: f, depth: p, maxDepth: m } = n;
		if (!Tc(r.key) && r.key !== "Tab" || r.key === "Tab" && (t.tabNavigation === "none" || t.tabNavigation === "content" && r.shiftKey)) return;
		let h = i(), g = e.current.getViewportPageSize(), _ = e.current.getColumnIndex(c), v = c ? e.current.getColumnIndex(c) : 0, y = h.length > 0 ? 0 : null, b = h.length > 0 ? h.length - 1 : null, x = Math.max(0, Gs(e).length - 1), S = !0;
		if (r.key === "Tab" && t.tabNavigation === "content" && !r.shiftKey) {
			y !== null && (o(0, u(y)), r.preventDefault());
			return;
		}
		switch (r.key) {
			case "ArrowDown":
				p === m - 1 ? s(_, r) : l(_, d + 1, r);
				break;
			case "ArrowUp":
				p > 0 && l(_, d - 1, r);
				break;
			case "ArrowRight": {
				let e = f.length - f.indexOf(c) - 1;
				_ + e + 1 <= x && l(_ + e + 1, d, r);
				break;
			}
			case "ArrowLeft": {
				let e = f.indexOf(c);
				_ - e - 1 >= 0 && l(_ - e - 1, d, r);
				break;
			}
			case "PageDown":
				y !== null && b !== null && o(v, u(Math.min(y + g, b)));
				break;
			case "Home":
				l(0, d, r);
				break;
			case "End":
				l(x, d, r);
				break;
			case "Tab":
				if (r.shiftKey) {
					let e = _ - f.indexOf(c) - 1;
					e < 0 ? p === 0 ? S = !1 : l(x, d - 1, r) : l(e, d, r);
				} else {
					let e = _ + (f.length - f.indexOf(c) - 1) + 1;
					e > x && p === m - 1 ? s(0, r) : e > x ? l(0, d + 1, r) : l(e, d, r);
				}
				break;
			case " ": break;
			default: S = !1;
		}
		S && r.preventDefault();
	}, [
		e,
		t.tabNavigation,
		i,
		s,
		l,
		o,
		u
	]), m = O.useCallback((n, l) => {
		if (cv(l)) return;
		let d = e.current.getCellParams(n.id, n.field);
		if (d.cellMode === xs.Edit || !Tc(l.key) && l.key !== "Tab" || l.key === "Tab" && (t.tabNavigation === "none" || t.tabNavigation === "header" && !l.shiftKey) || !e.current.unstable_applyPipeProcessors("canUpdateFocus", !0, {
			event: l,
			cell: d
		})) return;
		let f = i();
		if (f.length === 0) return;
		let p = a ? c : s, m = e.current.getViewportPageSize(), h = n.field ? e.current.getColumnIndex(n.field) : 0, g = f.findIndex((e) => e.id === n.id), _ = f.length - 1, v = Math.max(0, Gs(e).length - 1), y = !0;
		if (l.key === "Tab" && t.tabNavigation === "header" && l.shiftKey) {
			p(v, l), l.preventDefault();
			return;
		}
		switch (l.key) {
			case "ArrowDown":
				g < _ && o(h, u(g + 1), r ? "right" : "left", "down");
				break;
			case "ArrowUp":
				g > 0 ? o(h, u(g - 1)) : p(h, l);
				break;
			case "ArrowRight": {
				let e = GS({
					currentColIndex: h,
					firstColIndex: 0,
					lastColIndex: v,
					isRtl: r
				});
				e !== null && o(e, u(g), r ? "left" : "right");
				break;
			}
			case "ArrowLeft": {
				let e = WS({
					currentColIndex: h,
					firstColIndex: 0,
					lastColIndex: v,
					isRtl: r
				});
				e !== null && o(e, u(g), r ? "right" : "left");
				break;
			}
			case "Tab":
				l.shiftKey ? h === 0 && g === 0 ? t.tabNavigation === "all" ? p(v, l) : y = !1 : h === 0 ? o(v, u(g - 1)) : o(h - 1, u(g), "left") : h === v ? g === _ ? y = !1 : o(0, u(g + 1)) : o(h + 1, u(g), "right");
				break;
			case " ": {
				if (n.field === "__detail_panel_toggle__") break;
				let e = n.colDef;
				if (e && (e.field === "__tree_data_group__" || t_(e.field)) || e && e.type === "longText") break;
				!l.shiftKey && g < _ && o(h, u(Math.min(g + m, _)));
				break;
			}
			case "PageDown":
				g < _ && o(h, u(Math.min(g + m, _)));
				break;
			case "PageUp": {
				let e = Math.max(g - m, 0);
				e !== g && e >= 0 ? o(h, u(e)) : s(h, l);
				break;
			}
			case "Home":
				l.ctrlKey || l.metaKey || l.shiftKey ? o(0, u(0)) : o(0, u(g));
				break;
			case "End":
				l.ctrlKey || l.metaKey || l.shiftKey ? o(v, u(_)) : o(v, u(g));
				break;
			default: y = !1;
		}
		y && l.preventDefault();
	}, [
		e,
		t.tabNavigation,
		i,
		r,
		o,
		u,
		a,
		c,
		s
	]);
	Lg(e, "canStartEditing", O.useCallback((e, { event: t }) => t.key === " " ? !1 : e, [])), K(e, "columnHeaderKeyDown", d), K(e, "headerFilterKeyDown", f), K(e, "columnGroupHeaderKeyDown", p), K(e, "cellKeyDown", m);
}, YS = (e, t) => {
	let n = mf(e, "useGridRowCount"), r = Vn(() => Cu(e).pageSize);
	e.current.registerControlState({
		stateId: "paginationRowCount",
		propModel: t.rowCount,
		propOnChange: t.onRowCountChange,
		stateSelector: wu,
		changeEvent: "rowCountChange"
	}), pf(e, { setRowCount: O.useCallback((t) => {
		wu(e) !== t && (n.debug("Setting 'rowCount' to", t), e.current.setState((e) => L({}, e, { pagination: L({}, e.pagination, { rowCount: t }) })));
	}, [e, n]) }, "public");
	let i = O.useCallback((n, r) => {
		let i = wu(e);
		return !r.exportOnlyDirtyModels || t.rowCount != null || t.initialState?.pagination?.rowCount != null ? L({}, n, { pagination: L({}, n.pagination, { rowCount: i }) }) : n;
	}, [
		e,
		t.rowCount,
		t.initialState?.pagination?.rowCount
	]), a = O.useCallback((t, n) => {
		let r = n.stateToRestore.pagination?.rowCount ? n.stateToRestore.pagination.rowCount : wu(e);
		return e.current.setState((e) => L({}, e, { pagination: L({}, e.pagination, { rowCount: r }) })), t;
	}, [e]);
	Lg(e, "exportState", i), Lg(e, "restoreState", a), K(e, "paginationModelChange", O.useCallback((n) => {
		t.paginationMode === "client" || !r.current || n.pageSize !== r.current && (r.current = n.pageSize, wu(e) === -1 && e.current.setPage(0));
	}, [
		t.paginationMode,
		r,
		e
	])), O.useEffect(() => {
		t.paginationMode === "server" && t.rowCount != null && e.current.setRowCount(t.rowCount);
	}, [
		e,
		t.paginationMode,
		t.rowCount
	]), Ta(e.current.store, () => {
		if (Tu(e).hasNextPage === !1) return !0;
		if (t.paginationMode === "client") return Rl(e);
	}, (t, n) => {
		if (n === !0 && wu(e) !== -1) {
			let t = Rl(e), n = Cu(e);
			e.current.setRowCount(n.pageSize * n.page + t);
		} else typeof n == "number" && e.current.setRowCount(n);
	}), O.useEffect(() => {
		t.paginationMode === "client" && e.current.setRowCount(Rl(e));
	}, [e, t.paginationMode]);
}, XS = (e, t) => {
	let n = mf(e, "useGridPaginationMeta");
	e.current.registerControlState({
		stateId: "paginationMeta",
		propModel: t.paginationMeta,
		propOnChange: t.onPaginationMetaChange,
		stateSelector: Tu,
		changeEvent: "paginationMetaChange"
	}), pf(e, { setPaginationMeta: O.useCallback((t) => {
		Tu(e) !== t && (n.debug("Setting 'paginationMeta' to", t), e.current.setState((e) => L({}, e, { pagination: L({}, e.pagination, { meta: t }) })));
	}, [e, n]) }, "public");
	let r = O.useCallback((n, r) => {
		let i = Tu(e);
		return !r.exportOnlyDirtyModels || t.paginationMeta != null || t.initialState?.pagination?.meta != null ? L({}, n, { pagination: L({}, n.pagination, { meta: i }) }) : n;
	}, [
		e,
		t.paginationMeta,
		t.initialState?.pagination?.meta
	]), i = O.useCallback((t, n) => {
		let r = n.stateToRestore.pagination?.meta ? n.stateToRestore.pagination.meta : Tu(e);
		return e.current.setState((e) => L({}, e, { pagination: L({}, e.pagination, { meta: r }) })), t;
	}, [e]);
	Lg(e, "exportState", r), Lg(e, "restoreState", i), O.useEffect(() => {
		t.paginationMeta && e.current.setPaginationMeta(t.paginationMeta);
	}, [e, t.paginationMeta]);
}, ZS = (e, t) => {
	let n = L({}, _u(t.autoPageSize), t.paginationModel ?? t.initialState?.pagination?.paginationModel);
	yu(n.pageSize, t.signature);
	let r = t.rowCount ?? t.initialState?.pagination?.rowCount ?? (t.paginationMode === "client" ? e.rows?.totalRowCount : void 0), i = t.paginationMeta ?? t.initialState?.pagination?.meta ?? {};
	return L({}, e, { pagination: L({}, e.pagination, {
		paginationModel: n,
		rowCount: r,
		meta: i,
		enabled: t.pagination === !0,
		paginationMode: t.paginationMode
	}) });
}, QS = (e, t) => {
	XS(e, t), NS(e, t), YS(e, t);
}, $S = (e, t) => L({}, e, { preferencePanel: t.initialState?.preferencePanel ?? { open: !1 } }), eC = (e, t) => {
	let n = mf(e, "useGridPreferencesPanel"), r = O.useCallback(() => {
		e.current.setState((t) => {
			if (!t.preferencePanel.open) return t;
			n.debug("Hiding Preferences Panel");
			let r = Um(e);
			return e.current.publishEvent("preferencePanelClose", { openedPanelValue: r.openedPanelValue }), L({}, t, { preferencePanel: { open: !1 } });
		});
	}, [e, n]);
	pf(e, {
		showPreferences: O.useCallback((t, r, i) => {
			n.debug("Opening Preferences Panel"), e.current.setState((e) => L({}, e, { preferencePanel: L({}, e.preferencePanel, {
				open: !0,
				openedPanelValue: t,
				panelId: r,
				labelId: i
			}) })), e.current.publishEvent("preferencePanelOpen", { openedPanelValue: t });
		}, [n, e]),
		hidePreferences: r
	}, "public");
	let i = O.useCallback((n, r) => {
		let i = Um(e);
		return !r.exportOnlyDirtyModels || t.initialState?.preferencePanel != null || i.open ? L({}, n, { preferencePanel: i }) : n;
	}, [e, t.initialState?.preferencePanel]), a = O.useCallback((t, n) => {
		let r = n.stateToRestore.preferencePanel;
		return r != null && e.current.setState((e) => L({}, e, { preferencePanel: r })), t;
	}, [e]);
	Lg(e, "exportState", i), Lg(e, "restoreState", a);
}, tC = (e) => {
	switch (e.type) {
		case "boolean": return !1;
		case "date":
		case "dateTime":
		case "number": return;
		case "singleSelect": return null;
		default: return "";
	}
}, nC = ["id", "field"], rC = ["id", "field"], iC = (e, t) => {
	let [n, r] = O.useState({}), i = O.useRef(n), a = O.useRef({}), { processRowUpdate: o, onProcessRowUpdateError: s, cellModesModel: c, onCellModesModelChange: l } = t, u = (e) => (...n) => {
		t.editMode === bs.Cell && e(...n);
	}, d = O.useCallback((t, n) => {
		let r = e.current.getCellParams(t, n);
		if (!e.current.isCellEditable(r)) throw Error(`MUI X: The cell with id=${t} and field=${n} is not editable.`);
	}, [e]), f = O.useCallback((t, n, r) => {
		if (e.current.getCellMode(t, n) !== r) throw Error(`MUI X: The cell with id=${t} and field=${n} is not in ${r} mode.`);
	}, [e]), p = O.useCallback((t, n) => {
		if (!t.isEditable || t.cellMode === xs.Edit) return;
		let r = L({}, t, { reason: Ds.cellDoubleClick });
		e.current.publishEvent("cellEditStart", r, n);
	}, [e]), m = O.useCallback((t, n) => {
		if (t.cellMode === xs.View || e.current.getCellMode(t.id, t.field) === xs.View) return;
		let r = L({}, t, { reason: Os.cellFocusOut });
		e.current.publishEvent("cellEditStop", r, n);
	}, [e]), h = O.useCallback((t, n) => {
		if (t.cellMode === xs.Edit) {
			if (n.which === 229) return;
			let r;
			if (n.key === "Escape" ? r = Os.escapeKeyDown : n.key === "Enter" ? r = Os.enterKeyDown : n.key === "Tab" && (r = n.shiftKey ? Os.shiftTabKeyDown : Os.tabKeyDown, n.preventDefault()), r) {
				let i = L({}, t, { reason: r });
				e.current.publishEvent("cellEditStop", i, n);
			}
		} else if (t.isEditable) {
			let r;
			if (!e.current.unstable_applyPipeProcessors("canStartEditing", !0, {
				event: n,
				cellParams: t,
				editMode: "cell"
			})) return;
			if (wc(n) ? r = Ds.printableKeyDown : Oc(n) ? r = Ds.pasteKeyDown : n.key === "Enter" ? (r = Ds.enterKeyDown, n.preventDefault()) : (n.key === "Backspace" || n.key === "Delete") && (r = Ds.deleteKeyDown), r) {
				let i = L({}, t, {
					reason: r,
					key: n.key
				});
				e.current.publishEvent("cellEditStart", i, n);
			}
		}
	}, [e]), g = O.useCallback((t) => {
		let { id: n, field: r, reason: i } = t, a = {
			id: n,
			field: r
		};
		(i === Ds.printableKeyDown || i === Ds.deleteKeyDown || i === Ds.pasteKeyDown) && (a.deleteValue = !0), e.current.startCellEditMode(a);
	}, [e]), _ = O.useCallback((t) => {
		let { id: n, field: r, reason: i } = t;
		e.current.runPendingEditCellValueMutation(n, r);
		let a;
		i === Os.enterKeyDown ? a = "below" : i === Os.tabKeyDown ? a = "right" : i === Os.shiftTabKeyDown && (a = "left");
		let o = i === "escapeKeyDown";
		e.current.stopCellEditMode({
			id: n,
			field: r,
			ignoreModifications: o,
			cellToFocusAfter: a
		});
	}, [e]);
	K(e, "cellDoubleClick", u(p)), K(e, "cellFocusOut", u(m)), K(e, "cellKeyDown", u(h)), K(e, "cellEditStart", u(g)), K(e, "cellEditStop", u(_)), No(e, "cellEditStart", t.onCellEditStart), No(e, "cellEditStop", ((t) => async (...n) => {
		if (t) {
			let { id: r, field: i } = n[0];
			e.current.state.editRows[r][i]?.error || t(...n);
		}
	})(t.onCellEditStop));
	let v = O.useCallback((t, n) => {
		let r = Bm(e);
		return r[t] && r[t][n] ? xs.Edit : xs.View;
	}, [e]), y = wt((n) => {
		let a = n !== t.cellModesModel;
		l && a && l(n, { api: e.current }), !(t.cellModesModel && a) && (r(n), i.current = n, e.current.publishEvent("cellModesModelChange", n));
	}), b = O.useCallback((e, t, n) => {
		let r = L({}, i.current);
		if (n !== null) r[e] = L({}, r[e], { [t]: L({}, n) });
		else {
			let n = r[e];
			r[e] = R(n, [t].map(Fg)), Object.keys(r[e]).length === 0 && delete r[e];
		}
		y(r);
	}, [y]), x = O.useCallback((t, n, r) => {
		e.current.setState((e) => {
			let i = L({}, e.editRows);
			return r === null ? (delete i[t][n], Object.keys(i[t]).length === 0 && delete i[t]) : i[t] = L({}, i[t], { [n]: L({}, r) }), L({}, e, { editRows: i });
		});
	}, [e]), S = O.useCallback((e) => {
		let { id: t, field: n } = e, r = R(e, nC);
		d(t, n), f(t, n, xs.View), b(t, n, L({ mode: xs.Edit }, r));
	}, [
		d,
		f,
		b
	]), C = wt(async (t) => {
		let { id: n, field: r, deleteValue: i, initialValue: a } = t, o = e.current.getCellValue(n, r), s = o;
		i ? s = tC(e.current.getColumn(r)) : a && (s = a);
		let c = e.current.getColumn(r), l = !!c.preProcessEditCellProps && i, u = {
			value: s,
			error: !1,
			isProcessingProps: l
		};
		if (x(n, r, u), e.current.setCellFocus(n, r), l && (u = await Promise.resolve(c.preProcessEditCellProps({
			id: n,
			row: e.current.getRow(n),
			props: u,
			hasChanged: s !== o
		})), e.current.getCellMode(n, r) === xs.Edit)) {
			let t = Bm(e);
			x(n, r, L({}, u, {
				value: t[n][r].value,
				isProcessingProps: !1
			}));
		}
	}), w = O.useCallback((e) => {
		let { id: t, field: n } = e, r = R(e, rC);
		f(t, n, xs.Edit), b(t, n, L({ mode: xs.View }, r));
	}, [f, b]), T = wt(async (n) => {
		let { id: r, field: i, ignoreModifications: c, cellToFocusAfter: l = "none" } = n;
		f(r, i, xs.Edit), e.current.runPendingEditCellValueMutation(r, i);
		let u = () => {
			x(r, i, null), b(r, i, null), l !== "none" && e.current.moveFocusToRelativeCell(r, i, l);
		};
		if (c) {
			u();
			return;
		}
		let { error: d, isProcessingProps: p } = Bm(e)[r][i], m = e.current.getRow(r);
		if (d || p) {
			a.current[r][i].mode = xs.Edit, b(r, i, { mode: xs.Edit });
			return;
		}
		let h = e.current.getRowWithUpdatedValuesFromCellEditing(r, i);
		if (t.dataSource?.updateRow) {
			if ($m(m, h)) {
				u();
				return;
			}
			let t = () => {
				a.current[r][i].mode = xs.Edit, b(r, i, { mode: xs.Edit });
			}, n = {
				rowId: r,
				updatedRow: h,
				previousRow: m
			};
			try {
				await e.current.dataSource.editRow(n), u();
			} catch {
				t();
			}
		} else if (o) {
			let t = (e) => {
				a.current[r][i].mode = xs.Edit, b(r, i, { mode: xs.Edit }), s ? s(e) : In([
					"MUI X: A call to `processRowUpdate()` threw an error which was not handled because `onProcessRowUpdateError()` is missing.",
					"To handle the error pass a callback to the `onProcessRowUpdateError()` prop, for example `<DataGrid onProcessRowUpdateError={(error) => ...} />`.",
					"For more detail, see https://mui.com/x/react-data-grid/editing/persistence/."
				], "error");
			};
			try {
				Promise.resolve(o(h, m, { rowId: r })).then((t) => {
					e.current.updateRows([t]), u();
				}).catch(t);
			} catch (e) {
				t(e);
			}
		} else e.current.updateRows([h]), u();
	}), E = O.useCallback(async (t) => {
		let { id: n, field: r, value: i, debounceMs: a, unstable_skipValueParser: o } = t;
		d(n, r), f(n, r, xs.Edit);
		let s = e.current.getColumn(r), c = e.current.getRow(n), l = i;
		s.valueParser && !o && (l = s.valueParser(i, c, s, e));
		let u = Bm(e), p = L({}, u[n][r], {
			value: l,
			changeReason: a ? "debouncedSetEditCellValue" : "setEditCellValue"
		});
		if (s.preProcessEditCellProps) {
			let e = i !== u[n][r].value;
			p = L({}, p, { isProcessingProps: !0 }), x(n, r, p), p = await Promise.resolve(s.preProcessEditCellProps({
				id: n,
				row: c,
				props: p,
				hasChanged: e
			}));
		}
		return e.current.getCellMode(n, r) === xs.View ? !1 : (u = Bm(e), p = L({}, p, { isProcessingProps: !1 }), p.value = s.preProcessEditCellProps ? u[n][r].value : l, x(n, r, p), u = Bm(e), !u[n]?.[r]?.error);
	}, [
		e,
		d,
		f,
		x
	]), D = O.useCallback((t, n) => {
		let r = e.current.getColumn(n), i = Bm(e), a = e.current.getRow(t);
		if (!i[t] || !i[t][n]) return e.current.getRow(t);
		let { value: o } = i[t][n];
		return r.valueSetter ? r.valueSetter(o, a, r, e) : L({}, a, { [n]: o });
	}, [e]), k = {
		getCellMode: v,
		startCellEditMode: S,
		stopCellEditMode: w
	}, A = {
		setCellEditingEditCellValue: E,
		getRowWithUpdatedValuesFromCellEditing: D
	};
	pf(e, k, "public"), pf(e, A, "private"), O.useEffect(() => {
		c && y(c);
	}, [c, y]), Ct(() => {
		let t = qa(e), r = a.current;
		a.current = gs(n), Object.entries(n).forEach(([n, i]) => {
			Object.entries(i).forEach(([i, a]) => {
				let o = r[n]?.[i]?.mode || xs.View, s = t[n] ? e.current.getRowId(t[n]) : n;
				a.mode === xs.Edit && o === xs.View ? C(L({
					id: s,
					field: i
				}, a)) : a.mode === xs.View && o === xs.Edit && T(L({
					id: s,
					field: i
				}, a));
			});
		});
	}, [
		e,
		n,
		C,
		T
	]);
}, aC = ["id"], oC = ["id"], sC = (e, t) => {
	let [n, r] = O.useState({}), i = O.useRef(n), a = O.useRef({}), o = O.useRef({}), s = O.useRef(void 0), c = O.useRef(null), { processRowUpdate: l, onProcessRowUpdateError: u, rowModesModel: d, onRowModesModelChange: f } = t, p = (e) => (...n) => {
		t.editMode === bs.Row && e(...n);
	}, m = O.useCallback((t, n) => {
		let r = e.current.getCellParams(t, n);
		if (!e.current.isCellEditable(r)) throw Error(`MUI X: The cell with id=${t} and field=${n} is not editable.`);
	}, [e]), h = O.useCallback((t, n) => {
		if (e.current.getRowMode(t) !== n) throw Error(`MUI X: The row with id=${t} is not in ${n} mode.`);
	}, [e]), g = O.useCallback((t) => {
		let n = Bm(e);
		return Object.values(n[t]).some((e) => e.error);
	}, [e]), _ = O.useCallback((t, n) => {
		if (!t.isEditable || e.current.getRowMode(t.id) === Ss.Edit) return;
		let r = L({}, e.current.getRowParams(t.id), {
			field: t.field,
			reason: ks.cellDoubleClick
		});
		e.current.publishEvent("rowEditStart", r, n);
	}, [e]), v = O.useCallback((e) => {
		c.current = e;
	}, []), y = O.useCallback((t, n) => {
		t.isEditable && e.current.getRowMode(t.id) !== Ss.View && (c.current = null, s.current = setTimeout(() => {
			if (c.current?.id !== t.id) {
				if (!e.current.getRow(t.id) || e.current.getRowMode(t.id) === Ss.View || g(t.id)) return;
				let r = L({}, e.current.getRowParams(t.id), {
					field: t.field,
					reason: As.rowFocusOut
				});
				e.current.publishEvent("rowEditStop", r, n);
			}
		}));
	}, [e, g]);
	O.useEffect(() => () => {
		clearTimeout(s.current);
	}, []);
	let b = O.useCallback((t, n) => {
		if (t.cellMode === Ss.Edit) {
			if (n.which === 229) return;
			let r;
			if (n.key === "Escape") r = As.escapeKeyDown;
			else if (n.key === "Enter") r = As.enterKeyDown;
			else if (n.key === "Tab") {
				let i = Ks(e).filter((n) => e.current.getColumn(n).type === "actions" ? !0 : e.current.isCellEditable(e.current.getCellParams(t.id, n)));
				if (n.shiftKey ? t.field === i[0] && (r = As.shiftTabKeyDown) : t.field === i[i.length - 1] && (r = As.tabKeyDown), n.preventDefault(), !r) {
					let r = i.findIndex((e) => e === t.field), a = i[n.shiftKey ? r - 1 : r + 1];
					e.current.setCellFocus(t.id, a);
				}
			}
			if (r) {
				if (r !== As.escapeKeyDown && g(t.id)) return;
				let i = L({}, e.current.getRowParams(t.id), {
					reason: r,
					field: t.field
				});
				e.current.publishEvent("rowEditStop", i, n);
			}
		} else if (t.isEditable) {
			let r;
			if (!e.current.unstable_applyPipeProcessors("canStartEditing", !0, {
				event: n,
				cellParams: t,
				editMode: "row"
			})) return;
			if (wc(n) || Oc(n) ? r = ks.printableKeyDown : n.key === "Enter" ? r = ks.enterKeyDown : (n.key === "Backspace" || n.key === "Delete") && (r = ks.deleteKeyDown), r) {
				let i = L({}, e.current.getRowParams(t.id), {
					field: t.field,
					reason: r,
					key: d && wc(n) ? n.key : void 0
				});
				e.current.publishEvent("rowEditStart", i, n);
			}
		}
	}, [
		e,
		g,
		d
	]), x = O.useCallback((t) => {
		let { id: n, field: r, reason: i } = t, a = {
			id: n,
			fieldToFocus: r
		};
		(i === ks.printableKeyDown || i === ks.deleteKeyDown) && (d && i === ks.printableKeyDown && t.key && r ? a.initialValue = t.key : a.deleteValue = !!r), e.current.startRowEditMode(a);
	}, [e, d]), S = O.useCallback((t) => {
		let { id: n, reason: r, field: i } = t;
		e.current.runPendingEditCellValueMutation(n);
		let a;
		r === As.enterKeyDown ? a = "below" : r === As.tabKeyDown ? a = "right" : r === As.shiftTabKeyDown && (a = "left");
		let o = r === "escapeKeyDown";
		e.current.stopRowEditMode({
			id: n,
			ignoreModifications: o,
			field: i,
			cellToFocusAfter: a
		});
	}, [e]);
	K(e, "cellDoubleClick", p(_)), K(e, "cellFocusIn", p(v)), K(e, "cellFocusOut", p(y)), K(e, "cellKeyDown", p(b)), K(e, "rowEditStart", p(x)), K(e, "rowEditStop", p(S)), No(e, "rowEditStart", t.onRowEditStart), No(e, "rowEditStop", t.onRowEditStop);
	let C = O.useCallback((n) => Vm(e, {
		rowId: n,
		editMode: t.editMode
	}) ? Ss.Edit : Ss.View, [e, t.editMode]), w = wt((n) => {
		let a = n !== t.rowModesModel;
		f && a && f(n, { api: e.current }), !(t.rowModesModel && a) && (r(n), i.current = n, e.current.publishEvent("rowModesModelChange", n));
	}), T = O.useCallback((e, t) => {
		let n = L({}, i.current);
		t === null ? delete n[e] : n[e] = L({}, t), w(n);
	}, [w]), E = O.useCallback((t, n) => {
		e.current.setState((e) => {
			let r = L({}, e.editRows);
			return n === null ? delete r[t] : r[t] = n, L({}, e, { editRows: r });
		});
	}, [e]), D = O.useCallback((t, n, r) => {
		e.current.setState((e) => {
			let i = L({}, e.editRows);
			return r === null ? (delete i[t][n], Object.keys(i[t]).length === 0 && delete i[t]) : i[t] = L({}, i[t], { [n]: L({}, r) }), L({}, e, { editRows: i });
		});
	}, [e]), k = O.useCallback((e) => {
		let { id: t } = e, n = R(e, aC);
		h(t, Ss.View), T(t, L({ mode: Ss.Edit }, n));
	}, [h, T]), A = wt((t) => {
		let { id: n, fieldToFocus: r, deleteValue: i, initialValue: a } = t, s = e.current.getRow(n), c = Hs(e), l = c.reduce((t, o) => {
			let s = o.field;
			if (!e.current.getCellParams(n, s).isEditable) return t;
			let c = e.current.getColumn(s), l = e.current.getCellValue(n, s);
			return r === s && (i || a) && (i ? l = tC(c) : a && (l = a)), t[s] = {
				value: l,
				error: !1,
				isProcessingProps: c.editable && !!c.preProcessEditCellProps && i
			}, t;
		}, {});
		o.current[n] = s, E(n, l), r && e.current.setCellFocus(n, r), c.filter((t) => e.current.getCellParams(n, t.field).isEditable && t.editable && !!t.preProcessEditCellProps && i).forEach((t) => {
			let r = t.field, o = e.current.getCellValue(n, r), c = i ? tC(t) : a ?? o;
			Promise.resolve(t.preProcessEditCellProps({
				id: n,
				row: s,
				props: l[r],
				hasChanged: c !== o
			})).then((t) => {
				e.current.getRowMode(n) === Ss.Edit && D(n, r, L({}, t, {
					value: Bm(e)[n][r].value,
					isProcessingProps: !1
				}));
			});
		});
	}), j = O.useCallback((e) => {
		let { id: t } = e, n = R(e, oC);
		h(t, Ss.Edit), T(t, L({ mode: Ss.View }, n));
	}, [h, T]), M = wt(async (n) => {
		let { id: r, ignoreModifications: i, field: s, cellToFocusAfter: c = "none" } = n;
		e.current.runPendingEditCellValueMutation(r);
		let d = () => {
			c !== "none" && s && e.current.moveFocusToRelativeCell(r, s, c), E(r, null), T(r, null), delete o.current[r];
		};
		if (i && e.current.getRow(r)) {
			d();
			return;
		}
		let f = Bm(e);
		if (!f[r]) {
			d();
			return;
		}
		let p = o.current[r];
		if (Object.values(f[r]).some((e) => e.isProcessingProps)) {
			a.current[r].mode = Ss.Edit;
			return;
		}
		if (g(r)) {
			a.current[r].mode = Ss.Edit, T(r, { mode: Ss.Edit });
			return;
		}
		let m = e.current.getRowWithUpdatedValuesFromRowEditing(r);
		if (t.dataSource?.updateRow) {
			if ($m(p, m)) {
				d();
				return;
			}
			let t = () => {
				a.current[r].mode = Ss.Edit, T(r, { mode: Ss.Edit });
			}, n = {
				rowId: r,
				updatedRow: m,
				previousRow: p
			};
			try {
				await e.current.dataSource.editRow(n), d();
			} catch {
				t();
			}
		} else if (l) {
			let t = (e) => {
				a.current[r] && (a.current[r].mode = Ss.Edit, T(r, { mode: Ss.Edit })), u ? u(e) : In([
					"MUI X: A call to `processRowUpdate()` threw an error which was not handled because `onProcessRowUpdateError()` is missing.",
					"To handle the error pass a callback to the `onProcessRowUpdateError()` prop, for example `<DataGrid onProcessRowUpdateError={(error) => ...} />`.",
					"For more detail, see https://mui.com/x/react-data-grid/editing/persistence/."
				], "error");
			};
			try {
				Promise.resolve(l(m, p, { rowId: r })).then((t) => {
					e.current.getRow(r) && e.current.updateRows([t]), d();
				}).catch(t);
			} catch (e) {
				t(e);
			}
		} else e.current.getRow(r) && e.current.updateRows([m]), d();
	}), N = O.useCallback((t) => {
		let { id: n, field: r, value: i, debounceMs: a, unstable_skipValueParser: o } = t;
		m(n, r);
		let s = e.current.getColumn(r), c = e.current.getRow(n), l = i;
		s.valueParser && !o && (l = s.valueParser(i, c, s, e));
		let u = Bm(e), d = L({}, u[n][r], {
			value: l,
			changeReason: a ? "debouncedSetEditCellValue" : "setEditCellValue"
		});
		return s.preProcessEditCellProps || D(n, r, d), new Promise((t) => {
			let i = [];
			if (s.preProcessEditCellProps) {
				let a = d.value !== u[n][r].value;
				d = L({}, d, { isProcessingProps: !0 }), D(n, r, d);
				let o = u[n], f = R(o, [r].map(Fg)), p = Promise.resolve(s.preProcessEditCellProps({
					id: n,
					row: c,
					props: d,
					hasChanged: a,
					otherFieldsProps: f
				})).then((i) => {
					if (e.current.getRowMode(n) === Ss.View) {
						t(!1);
						return;
					}
					u = Bm(e), i = L({}, i, { isProcessingProps: !1 }), i.value = s.preProcessEditCellProps ? u[n][r].value : l, D(n, r, i);
				});
				i.push(p);
			}
			Object.entries(u[n]).forEach(([a, o]) => {
				if (a === r) return;
				let s = e.current.getColumn(a);
				if (!s.preProcessEditCellProps) return;
				o = L({}, o, { isProcessingProps: !0 }), D(n, a, o), u = Bm(e);
				let l = u[n], d = R(l, [a].map(Fg)), f = Promise.resolve(s.preProcessEditCellProps({
					id: n,
					row: c,
					props: o,
					hasChanged: !1,
					otherFieldsProps: d
				})).then((r) => {
					if (e.current.getRowMode(n) === Ss.View) {
						t(!1);
						return;
					}
					r = L({}, r, { isProcessingProps: !1 }), D(n, a, r);
				});
				i.push(f);
			}), Promise.all(i).then(() => {
				e.current.getRowMode(n) === Ss.Edit ? (u = Bm(e), t(!u[n][r].error)) : t(!1);
			});
		});
	}, [
		e,
		m,
		D
	]), P = O.useCallback((t) => {
		let n = Bm(e), r = e.current.getRow(t);
		if (!n[t]) return e.current.getRow(t);
		let i = L({}, o.current[t], r);
		return Object.entries(n[t]).forEach(([t, n]) => {
			let r = e.current.getColumn(t);
			r?.valueSetter ? i = r.valueSetter(n.value, i, r, e) : i[t] = n.value;
		}), i;
	}, [e]), ee = {
		getRowMode: C,
		startRowEditMode: k,
		stopRowEditMode: j
	}, te = {
		setRowEditingEditCellValue: N,
		getRowWithUpdatedValuesFromRowEditing: P
	};
	pf(e, ee, "public"), pf(e, te, "private"), O.useEffect(() => {
		d && w(d);
	}, [d, w]), Ct(() => {
		let t = qa(e), r = a.current;
		a.current = gs(n);
		let i = new Set([...Object.keys(n), ...Object.keys(r)]);
		Array.from(i).forEach((i) => {
			let a = n[i] ?? { mode: Ss.View }, o = r[i]?.mode || Ss.View, s = t[i] ? e.current.getRowId(t[i]) : i;
			a.mode === Ss.Edit && o === Ss.View ? A(L({ id: s }, a)) : a.mode === Ss.View && o === Ss.Edit && M(L({ id: s }, a));
		});
	}, [
		e,
		n,
		E,
		A,
		M,
		T
	]);
}, cC = (e) => L({}, e, { editRows: {} }), lC = (e, t, n) => {
	iC(e, t), sC(e, t);
	let r = O.useRef({}), { isCellEditable: i } = t, a = n.hooks.useIsCellEditable(e, t), o = O.useCallback((e) => !a(e) || !e.colDef.editable || !e.colDef.renderEditCell ? !1 : i ? i(e) : !0, [i, a]), s = (e, t, n, i) => {
		if (!n) {
			i();
			return;
		}
		if (r.current[e] || (r.current[e] = {}), r.current[e][t]) {
			let [n] = r.current[e][t];
			clearTimeout(n);
		}
		let a = () => {
			let [n] = r.current[e][t];
			clearTimeout(n), i(), delete r.current[e][t];
		}, o = setTimeout(() => {
			i(), delete r.current[e][t];
		}, n);
		r.current[e][t] = [o, a];
	};
	O.useEffect(() => {
		let e = r.current;
		return () => {
			Object.entries(e).forEach(([t, n]) => {
				Object.keys(n).forEach((n) => {
					let [r] = e[t][n];
					clearTimeout(r), delete e[t][n];
				});
			});
		};
	}, []);
	let c = O.useCallback((e, t) => {
		if (r.current[e]) {
			if (!t) Object.keys(r.current[e]).forEach((t) => {
				let [, n] = r.current[e][t];
				n();
			});
			else if (r.current[e][t]) {
				let [, n] = r.current[e][t];
				n();
			}
		}
	}, []), l = {
		isCellEditable: o,
		setEditCellValue: O.useCallback((n) => {
			let { id: r, field: i, debounceMs: a } = n;
			return new Promise((o) => {
				s(r, i, a, async () => {
					let a = t.editMode === bs.Row ? e.current.setRowEditingEditCellValue : e.current.setCellEditingEditCellValue;
					e.current.getCellMode(r, i) === xs.Edit && o(await a(n));
				});
			});
		}, [e, t.editMode]),
		getRowWithUpdatedValues: O.useCallback((n, r) => t.editMode === bs.Cell ? e.current.getRowWithUpdatedValuesFromCellEditing(n, r) : e.current.getRowWithUpdatedValuesFromRowEditing(n), [e, t.editMode]),
		unstable_getEditCellMeta: O.useCallback((t, n) => Bm(e)[t]?.[n] ?? null, [e])
	}, u = { runPendingEditCellValueMutation: c };
	pf(e, l, "public"), pf(e, u, "private");
}, uC = (e, t, n) => {
	let r = !!t.dataSource;
	return n.current.caches.rows = uo({
		rows: r ? [] : t.rows,
		getRowId: t.getRowId,
		loading: t.loading,
		rowCount: t.rowCount
	}), L({}, e, { rows: po({
		apiRef: n,
		rowCountProp: t.rowCount,
		loadingProp: r ? !0 : t.loading,
		previousTree: null,
		previousTreeDepths: null
	}) });
}, dC = (e, t, n) => {
	if (process.env.NODE_ENV !== "production") try {
		Object.freeze(t.rows);
	} catch {}
	let r = mf(e, "useGridRows"), i = O.useRef(Date.now()), a = O.useRef(t.rowCount), o = zo(), { setRowIndex: s, setRowPosition: c } = n.hooks.useGridRowsOverridableMethods(e, t), l = O.useCallback((t) => {
		let n = qa(e)[t];
		if (n) return n;
		let r = Ya(e, t);
		return r && ho(r) ? { [ao]: t } : null;
	}, [e]), u = O.useCallback((t) => ql(e, t), [e]), d = O.useCallback(({ cache: n, throttle: r }) => {
		let a = () => {
			i.current = Date.now(), e.current.setState((n) => L({}, n, { rows: po({
				apiRef: e,
				rowCountProp: t.rowCount,
				loadingProp: t.loading,
				previousTree: Ja(e),
				previousTreeDepths: Qa(e),
				previousGroupsToFetch: Xa(e)
			}) })), e.current.publishEvent("rowsSet");
		};
		if (o.clear(), e.current.caches.rows = n, !r) {
			a();
			return;
		}
		let s = t.throttleRowsMs - (Date.now() - i.current);
		if (s > 0) {
			o.start(s, a);
			return;
		}
		a();
	}, [
		t.throttleRowsMs,
		t.rowCount,
		t.loading,
		e,
		o
	]), f = O.useCallback((n) => {
		if (r.debug(`Updating all rows, new length ${n.length}`), !t.dataSource && yf(e)) {
			e.current.updateNonPivotRows(n, !1);
			return;
		}
		let i = uo({
			rows: n,
			getRowId: t.getRowId,
			loading: t.loading,
			rowCount: t.rowCount
		});
		i.rowsBeforePartialUpdates = e.current.caches.rows.rowsBeforePartialUpdates, d({
			cache: i,
			throttle: !0
		});
	}, [
		r,
		t.getRowId,
		t.dataSource,
		t.loading,
		t.rowCount,
		d,
		e
	]), p = O.useCallback((n) => {
		if (t.signature === To.DataGrid && n.length > 1) throw Error(["MUI X: You cannot update several rows at once in `apiRef.current.updateRows` on the DataGrid.", "You need to upgrade to DataGridPro or DataGridPremium component to unlock this feature."].join("\n"));
		if (!t.dataSource && yf(e)) {
			e.current.updateNonPivotRows(n);
			return;
		}
		d({
			cache: _o({
				updates: yo(e, n, t.getRowId),
				getRowId: t.getRowId,
				previousCache: e.current.caches.rows
			}),
			throttle: !0
		});
	}, [
		t.signature,
		t.dataSource,
		t.getRowId,
		d,
		e
	]), m = O.useCallback((n, r) => {
		d({
			cache: _o({
				updates: yo(e, n, t.getRowId),
				getRowId: t.getRowId,
				previousCache: e.current.caches.rows,
				groupKeys: r ?? []
			}),
			throttle: !1
		});
	}, [
		t.getRowId,
		d,
		e
	]), h = O.useCallback((t) => {
		r.debug(`Setting loading to ${t}`), e.current.setState((e) => L({}, e, { rows: L({}, e.rows, { loading: t }) })), e.current.caches.rows.loadingPropBeforePartialUpdates = t;
	}, [e, r]), g = O.useCallback(() => {
		let t = eo(e), n = qa(e);
		return new Map(t.map((e) => [e, n[e] ?? {}]));
	}, [e]), _ = O.useCallback(() => Wa(e), [e]), v = O.useCallback(() => eo(e), [e]), y = O.useCallback((t) => {
		let { rowIdToIndexMap: n } = kg(e);
		return n.get(t);
	}, [e]), b = O.useCallback((t, n) => {
		let r = Ya(e, t);
		if (!r) throw Error(`MUI X: No row with id #${t} found.`);
		if (r.type !== "group") throw Error("MUI X: Only group nodes can be expanded or collapsed.");
		let i = L({}, r, { childrenExpanded: n });
		e.current.setState((e) => L({}, e, { rows: L({}, e.rows, { tree: L({}, e.rows.tree, { [t]: i }) }) })), e.current.publishEvent("rowExpansionChange", i);
	}, [e]), x = O.useCallback(() => {
		let t = L({}, Ja(e)), n = (e) => {
			let r = t[e];
			r?.type === "group" && (t[e] = L({}, r, { childrenExpanded: !0 }), r.children.forEach(n));
		};
		n(io), e.current.setState((e) => L({}, e, { rows: L({}, e.rows, { tree: t }) })), e.current.publishEvent("rowExpansionChange", t[io]);
	}, [e]), S = O.useCallback(() => {
		let t = L({}, Ja(e)), n = (e) => {
			let r = t[e];
			r?.type === "group" && (t[e] = L({}, r, { childrenExpanded: !1 }), r.children.forEach(n));
		};
		n(io), e.current.setState((e) => L({}, e, { rows: L({}, e.rows, { tree: t }) })), e.current.publishEvent("rowExpansionChange", t[io]);
	}, [e]), C = O.useCallback((t) => Ya(e, t) ?? null, [e]), w = O.useCallback(({ skipAutoGeneratedRows: t = !0, groupId: n, applySorting: r, applyFiltering: i, directChildrenOnly: a = !1 }) => {
		let o = Ja(e), s;
		if (r) {
			let r = o[n];
			if (!r) return [];
			let i = Cl(e);
			s = [];
			let c = i.findIndex((e) => e === n) + 1;
			for (let e = c; e < i.length && (a ? o[i[e]].depth === r.depth + 1 : o[i[e]].depth > r.depth); e += 1) {
				let n = i[e];
				(!t || !ho(o[n])) && s.push(n);
			}
		} else s = go(o, n, t, a);
		if (i) {
			let t = jl(e);
			s = xl(t) ? s : s.filter((e) => t[e] !== !1);
		}
		return s;
	}, [e]), T = {
		getRow: l,
		setLoading: h,
		getRowId: u,
		getRowModels: g,
		getRowsCount: _,
		getAllRowIds: v,
		setRows: f,
		updateRows: p,
		getRowNode: C,
		getRowIndexRelativeToVisibleRows: y,
		unstable_replaceRows: O.useCallback((n, r) => {
			if (t.signature === To.DataGrid && r.length > 1) throw Error(["MUI X: You cannot replace rows using `apiRef.current.unstable_replaceRows` on the DataGrid.", "You need to upgrade to DataGridPro or DataGridPremium component to unlock this feature."].join("\n"));
			if (r.length === 0) return;
			if ($a(e) > 1) throw Error("`apiRef.current.unstable_replaceRows` is not compatible with tree data and row grouping");
			let i = L({}, Ja(e)), a = L({}, qa(e)), o = i[io], s = [...o.children], c = /* @__PURE__ */ new Set();
			for (let e = 0; e < r.length; e += 1) {
				let o = r[e], l = co(o, t.getRowId, "A row was provided without id when calling replaceRows()."), [u] = s.splice(n + e, 1, l);
				c.has(u) || (delete a[u], delete i[u]);
				let d = {
					id: l,
					depth: 0,
					parent: io,
					type: "leaf",
					groupingKey: null
				};
				a[l] = o, i[l] = d, c.add(l);
			}
			i[io] = L({}, o, { children: s });
			let l = s.filter((e) => i[e]?.type === "leaf");
			e.current.caches.rows.dataRowIdToModelLookup = a, e.current.setState((e) => L({}, e, { rows: L({}, e.rows, {
				loading: t.loading,
				totalRowCount: Math.max(t.rowCount || 0, s.length),
				dataRowIdToModelLookup: a,
				dataRowIds: l,
				tree: i
			}) })), e.current.publishEvent("rowsSet");
		}, [
			e,
			t.signature,
			t.getRowId,
			t.loading,
			t.rowCount
		])
	}, E = {
		setRowIndex: s,
		setRowPosition: c,
		setRowChildrenExpansion: b,
		getRowGroupChildren: w,
		expandAllRows: x,
		collapseAllRows: S
	}, D = { updateNestedRows: m }, k = O.useCallback(() => {
		r.info("Row grouping pre-processing have changed, regenerating the row tree");
		let n;
		n = e.current.caches.rows.rowsBeforePartialUpdates === t.rows ? L({}, e.current.caches.rows, { updates: {
			type: "full",
			rows: eo(e)
		} }) : uo({
			rows: t.rows,
			getRowId: t.getRowId,
			loading: t.loading,
			rowCount: t.rowCount
		}), d({
			cache: n,
			throttle: !1
		});
	}, [
		r,
		e,
		t.rows,
		t.getRowId,
		t.loading,
		t.rowCount,
		d
	]), A = Vn(() => t.dataSource), j = O.useCallback((e) => {
		if (t.dataSource && t.dataSource !== A.current) {
			A.current = t.dataSource;
			return;
		}
		e === "rowTreeCreation" && k();
	}, [
		k,
		A,
		t.dataSource
	]), M = O.useCallback(() => {
		e.current.getActiveStrategy(tS.RowTree) !== Za(e) && k();
	}, [e, k]);
	K(e, "activeStrategyProcessorChange", j), K(e, "strategyAvailabilityChange", M), Rg(e, "hydrateRows", O.useCallback(() => {
		e.current.setState((n) => {
			let r = e.current.unstable_applyPipeProcessors("hydrateRows", {
				tree: Ja(e),
				treeDepths: Qa(e),
				dataRowIds: eo(e),
				dataRowIdToModelLookup: qa(e)
			});
			return L({}, n, { rows: L({}, n.rows, r, { totalTopLevelRowCount: fo({
				tree: r.tree,
				rowCountProp: t.rowCount
			}) }) });
		}), e.current.publishEvent("rowsSet");
	}, [e, t.rowCount])), pf(e, T, "public"), pf(e, E, t.signature === To.DataGrid ? "private" : "public"), pf(e, D, "private");
	let N = O.useRef(!0);
	O.useEffect(() => {
		if (N.current) {
			N.current = !1;
			return;
		}
		let n = !1;
		t.rowCount !== a.current && (n = !0, a.current = t.rowCount);
		let i = t.dataSource ? to(e) : t.rows, o = e.current.caches.rows.rowsBeforePartialUpdates === i, s = e.current.caches.rows.loadingPropBeforePartialUpdates === t.loading, c = e.current.caches.rows.rowCountPropBeforePartialUpdates === t.rowCount;
		o && (s || (e.current.setState((e) => L({}, e, { rows: L({}, e.rows, { loading: t.loading }) })), e.current.caches.rows.loadingPropBeforePartialUpdates = t.loading), c || (e.current.setState((e) => L({}, e, { rows: L({}, e.rows, {
			totalRowCount: Math.max(t.rowCount || 0, e.rows.totalRowCount),
			totalTopLevelRowCount: Math.max(t.rowCount || 0, e.rows.totalTopLevelRowCount)
		}) })), e.current.caches.rows.rowCountPropBeforePartialUpdates = t.rowCount), !n) || (r.debug(`Updating all rows, new length ${i?.length}`), d({
			cache: uo({
				rows: i,
				getRowId: t.getRowId,
				loading: t.loading,
				rowCount: t.rowCount
			}),
			throttle: !1
		}));
	}, [
		t.rows,
		t.rowCount,
		t.getRowId,
		t.loading,
		t.dataSource,
		r,
		d,
		e
	]);
}, fC = (e) => {
	let t = { [io]: L({}, oo(), { children: e }) };
	for (let n = 0; n < e.length; n += 1) {
		let r = e[n];
		t[r] = {
			id: r,
			depth: 0,
			parent: io,
			type: "leaf",
			groupingKey: null
		};
	}
	return {
		groupingName: rS,
		tree: t,
		treeDepths: { 0: e.length },
		dataRowIds: e
	};
}, pC = ({ previousTree: e, actions: t }) => {
	let n = L({}, e), r = {};
	for (let e = 0; e < t.remove.length; e += 1) {
		let i = t.remove[e];
		r[i] = !0, delete n[i];
	}
	for (let e = 0; e < t.insert.length; e += 1) {
		let r = t.insert[e];
		n[r] = {
			id: r,
			depth: 0,
			parent: io,
			type: "leaf",
			groupingKey: null
		};
	}
	let i = n[io], a = [...i.children, ...t.insert];
	return Object.values(r).length && (a = a.filter((e) => !r[e])), n[io] = L({}, i, { children: a }), {
		groupingName: rS,
		tree: n,
		treeDepths: { 0: a.length },
		dataRowIds: a
	};
}, mC = (e) => e.updates.type === "full" ? fC(e.updates.rows) : pC({
	previousTree: e.previousTree,
	actions: e.updates.actions
}), hC = (e) => {
	nS(e, rS, "rowTreeCreation", mC);
}, gC = class extends Error {};
function _C(e, t, n) {
	let r = O.useCallback((t) => ({
		field: t,
		colDef: e.current.getColumn(t)
	}), [e]), i = O.useCallback((t) => {
		let n = e.current.getRow(t);
		if (!n) throw new gC(`No row with id #${t} found`);
		return {
			id: t,
			columns: e.current.getAllColumns(),
			row: n
		};
	}, [e]), a = O.useCallback((t, n, r, { cellMode: i, colDef: a, hasFocus: o, rowNode: s, tabIndex: c, value: l, formattedValue: u }) => {
		let d = {
			id: t,
			field: n,
			row: r,
			rowNode: s,
			colDef: a,
			cellMode: i,
			hasFocus: o,
			tabIndex: c,
			value: l === void 0 ? e.current.getRowValue(r, a) : l,
			formattedValue: u === void 0 ? e.current.getRowFormattedValue(r, a) : u,
			isEditable: !1,
			api: e.current
		};
		return d.isEditable = a && e.current.isCellEditable(d), d;
	}, [e]), o = O.useCallback((n, r) => {
		let i = e.current.getRow(n), a = Ya(e, n);
		if (!i || !a) throw new gC(`No row with id #${n} found`);
		let o = su(e), s = du(e), c = e.current.getCellMode(n, r);
		return e.current.getCellParamsForRow(n, r, i, {
			colDef: t.listView && t.listViewColumn?.field === r ? Rs(e) : e.current.getColumn(r),
			rowNode: a,
			hasFocus: o !== null && o.field === r && o.id === n,
			tabIndex: s && s.field === r && s.id === n ? 0 : -1,
			cellMode: c
		});
	}, [
		e,
		t.listView,
		t.listViewColumn?.field
	]), s = O.useCallback((t) => e.current.rootElementRef.current ? iv(e.current.rootElementRef.current, t) : null, [e]), c = O.useCallback((t) => e.current.rootElementRef.current ? ov(e.current.rootElementRef.current, t) : null, [e]), l = O.useCallback((t, n) => e.current.rootElementRef.current ? sv(e.current.rootElementRef.current, {
		id: t,
		field: n
	}) : null, [e]), u = n.hooks.useGridParamsOverridableMethods(e), d = {
		getCellValue: u.getCellValue,
		getCellParams: o,
		getCellElement: l,
		getRowValue: u.getRowValue,
		getRowFormattedValue: u.getRowFormattedValue,
		getRowParams: i,
		getRowElement: c,
		getColumnHeaderParams: r,
		getColumnHeaderElement: s
	}, f = { getCellParamsForRow: a };
	pf(e, d, "public"), pf(e, f, "private");
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/hooks/features/rowSelection/useGridRowSelection.js
var vC = {
	type: "include",
	ids: /* @__PURE__ */ new Set()
}, yC = (e, t) => L({}, e, { rowSelection: t.rowSelection ? t.rowSelectionModel ?? vC : vC }), bC = (e, t) => {
	let n = mf(e, "useGridSelection"), r = W(e, $a) > 1, i = t.signature !== To.DataGrid && (t.rowSelectionPropagation?.parents || t.rowSelectionPropagation?.descendants) && r, a = O.useMemo(() => t.rowSelectionModel, [t.rowSelectionModel]), o = O.useRef(null);
	e.current.registerControlState({
		stateId: "rowSelection",
		propModel: a,
		propOnChange: t.onRowSelectionModelChange,
		stateSelector: Ul,
		changeEvent: "rowSelectionChange"
	});
	let { checkboxSelection: s, disableRowSelectionOnClick: c, isRowSelectable: l } = t, u = Zl(t), d = O.useCallback((t) => {
		let n = t, r = o.current ?? t, i = e.current.isRowSelected(t);
		if (i) {
			let t = Nl(e), i = t.findIndex((e) => e === r), a = t.findIndex((e) => e === n);
			if (i === a) return;
			n = i > a ? t[a + 1] : t[a - 1];
		}
		o.current = t, e.current.selectRowRange({
			startId: r,
			endId: n
		}, !i);
	}, [e]), f = wt(() => t.pagination && t.checkboxSelectionVisibleOnly && t.paginationMode === "client" ? ju(e) : Nl(e)), p = O.useCallback((r, i) => {
		if (t.signature === To.DataGrid && !u && (r.type !== "include" || r.ids.size > 1)) throw Error(["MUI X: `rowSelectionModel` can only contain 1 item in DataGrid.", "You need to upgrade to DataGridPro or DataGridPremium component to unlock multiple selection."].join("\n"));
		if (Ul(e) !== r) {
			if (n.debug("Setting selection model"), o.current !== null) {
				let e = r.ids.has(o.current);
				(r.type === "include" && !e || r.type === "exclude" && e) && (o.current = null);
			}
			e.current.setState((e) => L({}, e, { rowSelection: t.rowSelection ? r : vC }), i);
		}
	}, [
		e,
		n,
		t.rowSelection,
		t.signature,
		u
	]), m = O.useCallback((t) => Wl(e).has(t), [e]), h = O.useCallback((n) => {
		if (t.rowSelection === !1) return !1;
		if (t.keepNonExistentRowsSelected && !e.current.getRow(n)) return !0;
		if (l && !l(e.current.getRowParams(n))) return !1;
		let r = Ya(e, n);
		return !(r?.type === "footer" || r?.type === "pinnedRow");
	}, [
		e,
		t.rowSelection,
		t.keepNonExistentRowsSelected,
		l
	]), g = O.useCallback(() => Kl(e), [e]), _ = O.useCallback((r, a = !0, s = !1) => {
		if (!e.current.isRowSelectable(r)) return;
		let c = Ja(e);
		if (o.current = a ? r : null, s) {
			n.debug(`Setting selection for row ${r}`);
			let o = {
				type: "include",
				ids: /* @__PURE__ */ new Set()
			}, s = (e) => {
				o.ids.add(e);
			};
			a && (s(r), i && eu(e, c, r, t.rowSelectionPropagation?.descendants ?? !1, t.rowSelectionPropagation?.parents ?? !1, s)), e.current.setRowSelectionModel(o, "singleRowSelection");
		} else {
			n.debug(`Toggling selection for row ${r}`);
			let o = Ul(e), s = {
				type: o.type,
				ids: new Set(o.ids)
			}, l = Es(s);
			l.unselect(r);
			let d = (e) => {
				l.select(e);
			};
			a ? (d(r), i && eu(e, c, r, t.rowSelectionPropagation?.descendants ?? !1, t.rowSelectionPropagation?.parents ?? !1, d)) : i && tu(e, c, r, t.rowSelectionPropagation?.descendants ?? !1, t.rowSelectionPropagation?.parents ?? !1, (e) => {
				l.unselect(e);
			}), (s.type === "include" && s.ids.size < 2 || u) && e.current.setRowSelectionModel(s, "singleRowSelection");
		}
	}, [
		e,
		n,
		i,
		t.rowSelectionPropagation?.descendants,
		t.rowSelectionPropagation?.parents,
		u
	]), v = O.useCallback((r, a = !0, o = !1) => {
		if (n.debug("Setting selection for several rows"), t.rowSelection === !1) return;
		let s = Ja(e), c = /* @__PURE__ */ new Set();
		for (let t = 0; t < r.length; t += 1) {
			let n = r[t];
			e.current.isRowSelectable(n) && c.add(n);
		}
		let l = Ul(e), d;
		if (o) {
			if (d = {
				type: "include",
				ids: c
			}, a) {
				let n = Es(d);
				if (i) {
					let r = (e) => {
						n.select(e);
					};
					for (let n of c) eu(e, s, n, t.rowSelectionPropagation?.descendants ?? !1, t.rowSelectionPropagation?.parents ?? !1, r);
				}
			} else d.ids = /* @__PURE__ */ new Set();
			if (l.type === d.type && d.ids.size === l.ids.size && Array.from(d.ids).every((e) => l.ids.has(e))) return;
		} else {
			d = {
				type: l.type,
				ids: new Set(l.ids)
			};
			let n = Es(d), r = (e) => {
				n.select(e);
			}, o = (e) => {
				n.unselect(e);
			};
			for (let l of c) a ? (n.select(l), i && eu(e, s, l, t.rowSelectionPropagation?.descendants ?? !1, t.rowSelectionPropagation?.parents ?? !1, r)) : (o(l), i && tu(e, s, l, t.rowSelectionPropagation?.descendants ?? !1, t.rowSelectionPropagation?.parents ?? !1, o));
		}
		(d.type === "include" && d.ids.size < 2 || u) && e.current.setRowSelectionModel(d, "multipleRowsSelection");
	}, [
		n,
		i,
		u,
		e,
		t.rowSelectionPropagation?.descendants,
		t.rowSelectionPropagation?.parents,
		t.rowSelection
	]), y = O.useCallback((n) => {
		if (!r || !i || n.type === "exclude" || n.ids.size === 0 && n.type === "include") return n;
		let a = {
			type: n.type,
			ids: new Set(n.ids)
		}, o = Ja(e), s = Es(a), c = (e) => {
			s.select(e);
		};
		for (let r of n.ids) eu(e, o, r, t.rowSelectionPropagation?.descendants ?? !1, t.rowSelectionPropagation?.parents ?? !1, c, s);
		return a;
	}, [
		e,
		t.rowSelectionPropagation?.descendants,
		t.rowSelectionPropagation?.parents,
		r,
		i
	]), b = O.useCallback(({ startId: t, endId: r }, i = !0, a = !1) => {
		if (!e.current.getRow(t) || !e.current.getRow(r)) return;
		n.debug(`Expanding selection from row ${t} to row ${r}`);
		let o = Nl(e), s = o.indexOf(t), c = o.indexOf(r), [l, u] = s > c ? [c, s] : [s, c], d = o.slice(l, u + 1);
		e.current.selectRows(d, i, a);
	}, [e, n]), x = {
		selectRow: _,
		setRowSelectionModel: p,
		getSelectedRows: g,
		isRowSelected: m,
		isRowSelectable: h
	}, S = {
		selectRows: v,
		selectRowRange: b,
		getPropagatedRowSelectionModel: y
	};
	pf(e, x, "public"), pf(e, S, t.signature === To.DataGrid ? "private" : "public");
	let C = O.useRef(!0), w = O.useCallback(() => {
		if (C.current) return;
		let n = Ul(e), i = qa(e), a = Ja(e), o = jl(e), s = (e) => t.filterMode === "server" ? !i[e] : !a[e] || o[e] === !1, c = {
			type: n.type,
			ids: new Set(n.ids)
		}, l = Es(c), u = !1;
		for (let e of n.ids) {
			if (s(e)) {
				if (t.keepNonExistentRowsSelected) continue;
				l.unselect(e), u = !0;
				continue;
			}
			if (!t.rowSelectionPropagation?.parents) continue;
			let n = a[e];
			if (n?.type === "group") {
				if (n.isAutoGenerated) {
					l.unselect(e), u = !0;
					continue;
				}
				n.children.every((e) => o[e] === !1) || (l.unselect(e), u = !0);
			}
		}
		let d = r && t.rowSelectionPropagation?.parents && (c.ids.size > 0 || c.type === "exclude");
		if (u || d) if (d) if (c.type === "exclude") {
			let n = f(), r = [];
			for (let e = 0; e < n.length; e += 1) {
				let i = n[e];
				(t.keepNonExistentRowsSelected || !s(i)) && l.has(i) && r.push(i);
			}
			e.current.selectRows(r, !0, !0);
		} else e.current.selectRows(Array.from(c.ids), !0, !0);
		else e.current.setRowSelectionModel(c, "multipleRowsSelection");
	}, [
		e,
		r,
		t.rowSelectionPropagation?.parents,
		t.keepNonExistentRowsSelected,
		t.filterMode,
		f
	]), T = O.useCallback((t, n) => {
		let r = n.metaKey || n.ctrlKey, i = !s && !r && !Ec(n), a = !u || i, o = e.current.isRowSelected(t), c = Gl(e) > 1 && a || !o;
		e.current.selectRow(t, c, a);
	}, [
		e,
		u,
		s
	]), E = O.useCallback((t, n) => {
		if (c) return;
		let r = n.target.closest(`.${U.cell}`)?.getAttribute("data-field");
		r !== Lu.field && r !== "__detail_panel_toggle__" && (r && e.current.getColumn(r)?.type === "actions" || Ya(e, t.id).type !== "pinnedRow" && (n.shiftKey && u ? d(t.id) : T(t.id, n)));
	}, [
		c,
		u,
		e,
		d,
		T
	]), D = O.useCallback((e, t) => {
		u && t.shiftKey && window.getSelection()?.removeAllRanges();
	}, [u]), k = O.useCallback((t, n) => {
		u && n.nativeEvent.shiftKey ? d(t.id) : e.current.selectRow(t.id, t.value, !u);
	}, [
		e,
		d,
		u
	]), A = O.useCallback((n) => {
		let i = Ol(e), a = kl(e), o = i.items.length > 0 || a?.some((e) => e.length);
		!t.isRowSelectable && !t.checkboxSelectionVisibleOnly && (!r || t.rowSelectionPropagation?.descendants) && !o && !t.disableRowSelectionExcludeModel ? e.current.setRowSelectionModel({
			type: n ? "exclude" : "include",
			ids: /* @__PURE__ */ new Set()
		}, "multipleRowsSelection") : e.current.selectRows(f(), n);
	}, [
		e,
		f,
		t.checkboxSelectionVisibleOnly,
		t.isRowSelectable,
		t.rowSelectionPropagation?.descendants,
		t.disableRowSelectionExcludeModel,
		r
	]), j = O.useCallback((e) => {
		A(e.value);
	}, [A]), M = O.useCallback((t, n) => {
		if (e.current.getCellMode(t.id, t.field) !== xs.Edit && !cv(n)) {
			if (Tc(n.key) && n.shiftKey) {
				let r = su(e);
				if (r && r.id !== t.id) {
					n.preventDefault();
					let i = e.current.isRowSelected(r.id);
					if (!u) {
						e.current.selectRow(r.id, !i, !0);
						return;
					}
					let a = e.current.getRowIndexRelativeToVisibleRows(r.id), o = e.current.getRowIndexRelativeToVisibleRows(t.id), s, c;
					a > o ? i ? (s = o, c = a - 1) : (s = o, c = a) : i ? (s = a + 1, c = o) : (s = a, c = o);
					let l = kg(e), d = [];
					for (let e = s; e <= c; e += 1) d.push(l.rows[e].id);
					e.current.selectRows(d, !i);
					return;
				}
			}
			if (n.key === " " && n.shiftKey) {
				n.preventDefault(), T(t.id, n);
				return;
			}
			String.fromCharCode(n.keyCode) === "A" && (n.ctrlKey || n.metaKey) && (n.preventDefault(), u && A(!0));
		}
	}, [
		e,
		u,
		T,
		A
	]), N = wt(() => {
		if (!t.rowSelection) {
			e.current.setRowSelectionModel(vC);
			return;
		}
		if (a === void 0) return;
		if (!i || !r || a.type === "include" && a.ids.size === 0) {
			e.current.setRowSelectionModel(a);
			return;
		}
		let n = e.current.getPropagatedRowSelectionModel(a);
		if (n.type !== a.type || n.ids.size !== a.ids.size || !Array.from(a.ids).every((e) => n.ids.has(e))) {
			e.current.setRowSelectionModel(n);
			return;
		}
		e.current.setRowSelectionModel(a);
	});
	K(e, "filteredRowsSet", _s(t.rowSelection, w)), K(e, "rowClick", _s(t.rowSelection, E)), K(e, "rowSelectionCheckboxChange", _s(t.rowSelection, k)), K(e, "headerSelectionCheckboxChange", j), K(e, "cellMouseDown", _s(t.rowSelection, D)), K(e, "cellKeyDown", _s(t.rowSelection, M)), O.useEffect(() => {
		N();
	}, [
		e,
		a,
		t.rowSelection,
		N
	]);
	let P = a != null;
	O.useEffect(() => {
		if (P || !t.rowSelection || typeof h != "function") return;
		let n = Ul(e);
		if (n.type !== "include") return;
		let r = /* @__PURE__ */ new Set();
		for (let e of n.ids) h(e) && r.add(e);
		r.size < n.ids.size && e.current.setRowSelectionModel({
			type: n.type,
			ids: r
		});
	}, [
		e,
		h,
		P,
		t.rowSelection
	]), O.useEffect(() => {
		if (!t.rowSelection || P) return;
		let n = Ul(e);
		!u && (n.type === "include" && n.ids.size > 1 || n.type === "exclude") && e.current.setRowSelectionModel(vC);
	}, [
		e,
		u,
		s,
		P,
		t.rowSelection
	]), O.useEffect(() => {
		t.rowSelection;
	}, [t.rowSelection, w]), O.useEffect(() => {
		C.current &&= !1;
	}, []);
}, xC = (e) => {
	let { classes: t } = e;
	return O.useMemo(() => Bi({
		cellCheckbox: ["cellCheckbox"],
		columnHeaderCheckbox: ["columnHeaderCheckbox"]
	}, jn, t), [t]);
}, SC = (e, t) => {
	let n = xC({ classes: t.classes });
	Lg(e, "hydrateColumns", O.useCallback((r) => {
		let i = L({}, Lu, {
			cellClassName: n.cellCheckbox,
			headerClassName: n.columnHeaderCheckbox,
			headerName: e.current.getLocaleText("checkboxSelectionHeaderName")
		}), a = t.checkboxSelection, o = r.lookup[Iu] != null;
		return a && !o ? (r.lookup[Iu] = i, r.orderedFields = [Iu, ...r.orderedFields]) : !a && o ? (delete r.lookup[Iu], r.orderedFields = r.orderedFields.filter((e) => e !== Iu)) : a && o && (r.lookup[Iu] = L({}, i, r.lookup[Iu]), t.columns.some((e) => e.field === "__check__") || (r.orderedFields = [Iu, ...r.orderedFields.filter((e) => e !== Iu)])), r;
	}, [
		e,
		n,
		t.columns,
		t.checkboxSelection
	]));
}, CC = (e, t) => L({}, e, { sorting: {
	sortModel: qo(t.sortModel ?? t.initialState?.sorting?.sortModel ?? [], t.disableMultipleColumnsSorting),
	sortedRows: []
} }), wC = (e, t) => {
	let n = mf(e, "useGridSorting");
	e.current.registerControlState({
		stateId: "sortModel",
		propModel: t.sortModel,
		propOnChange: t.onSortModelChange,
		stateSelector: Tl,
		changeEvent: "sortModelChange"
	});
	let r = O.useCallback((t, n) => {
		let r = Tl(e), i = r.findIndex((e) => e.field === t), a = [...r];
		return i > -1 ? n?.sort == null ? a.splice(i, 1) : a.splice(i, 1, n) : a = [...r, n], a;
	}, [e]), i = O.useCallback((n, r) => {
		let i = Tl(e).find((e) => e.field === n.field);
		if (i) {
			let e = r === void 0 ? $o(n.sortingOrder ?? t.sortingOrder, i.sort) : r;
			return e === void 0 ? void 0 : L({}, i, { sort: e });
		}
		return {
			field: n.field,
			sort: r === void 0 ? $o(n.sortingOrder ?? t.sortingOrder) : r
		};
	}, [e, t.sortingOrder]), a = O.useCallback((e, n) => n == null || n.sortable === !1 || t.disableColumnSorting ? e : (n.sortingOrder || t.sortingOrder).some((e) => !!e) ? [...e, "columnMenuSortItem"] : e, [t.sortingOrder, t.disableColumnSorting]), o = O.useCallback(() => {
		e.current.setState((r) => {
			if (t.sortingMode === "server") return n.debug("Skipping sorting rows as sortingMode = server"), L({}, r, { sorting: L({}, r.sorting, { sortedRows: go(Ja(e), io, !1) }) });
			let i = Qo(Tl(e), e), a = e.current.applyStrategyProcessor("sorting", { sortRowList: i });
			return L({}, r, { sorting: L({}, r.sorting, { sortedRows: a }) });
		}), e.current.publishEvent("sortedRowsSet");
	}, [
		e,
		n,
		t.sortingMode
	]), s = O.useCallback((r) => {
		Tl(e) !== r && (n.debug("Setting sort model"), e.current.setState(Jo(r, t.disableMultipleColumnsSorting)), e.current.applySorting());
	}, [
		e,
		n,
		t.disableMultipleColumnsSorting
	]), c = O.useCallback((n, a, o) => {
		let s = e.current.getColumn(n), c = i(s, a), l;
		l = !o || t.disableMultipleColumnsSorting ? c?.sort == null ? [] : [c] : r(s.field, c), e.current.setSortModel(l);
	}, [
		e,
		r,
		i,
		t.disableMultipleColumnsSorting
	]);
	pf(e, {
		getSortModel: O.useCallback(() => Tl(e), [e]),
		getSortedRows: O.useCallback(() => wl(e).map((e) => e.model), [e]),
		getSortedRowIds: O.useCallback(() => Cl(e), [e]),
		getRowIdFromRowIndex: O.useCallback((t) => e.current.getSortedRowIds()[t], [e]),
		setSortModel: s,
		sortColumn: c,
		applySorting: o
	}, "public");
	let l = O.useCallback((n, r) => {
		let i = Tl(e);
		return !r.exportOnlyDirtyModels || t.sortModel != null || t.initialState?.sorting?.sortModel != null || i.length > 0 ? L({}, n, { sorting: { sortModel: i } }) : n;
	}, [
		e,
		t.sortModel,
		t.initialState?.sorting?.sortModel
	]), u = O.useCallback((n, r) => {
		let i = r.stateToRestore.sorting?.sortModel;
		return i == null ? n : (e.current.setState(Jo(i, t.disableMultipleColumnsSorting)), L({}, n, { callbacks: [...n.callbacks, e.current.applySorting] }));
	}, [e, t.disableMultipleColumnsSorting]), d = O.useCallback((t) => {
		let n = Ja(e), r = n[io], i = t.sortRowList ? t.sortRowList(r.children.map((e) => n[e])) : [...r.children];
		return r.footerId != null && i.push(r.footerId), i;
	}, [e]);
	Lg(e, "exportState", l), Lg(e, "restoreState", u), nS(e, rS, "sorting", d);
	let f = O.useCallback(({ field: e, colDef: n }, r) => {
		!n.sortable || t.disableColumnSorting || c(e, void 0, t.multipleColumnsSortingMode === "always" || r.shiftKey || r.metaKey || r.ctrlKey);
	}, [
		c,
		t.disableColumnSorting,
		t.multipleColumnsSortingMode
	]), p = O.useCallback(({ field: e, colDef: n }, r) => {
		!n.sortable || t.disableColumnSorting || r.key === "Enter" && !r.ctrlKey && !r.metaKey && c(e, void 0, t.multipleColumnsSortingMode === "always" || r.shiftKey);
	}, [
		c,
		t.disableColumnSorting,
		t.multipleColumnsSortingMode
	]), m = O.useCallback(() => {
		let t = Tl(e), n = Vs(e);
		if (t.length > 0) {
			let r = t.filter((e) => n[e.field]);
			r.length < t.length && e.current.setSortModel(r);
		}
	}, [e]), h = O.useCallback((t) => {
		t === "sorting" && e.current.applySorting();
	}, [e]);
	Lg(e, "columnMenu", a), K(e, "columnHeaderClick", f), K(e, "columnHeaderKeyDown", p), K(e, "rowsSet", e.current.applySorting), K(e, "columnsChange", m), K(e, "activeStrategyProcessorChange", h), gf(() => {
		t.signature === "DataGrid" && e.current.applySorting();
	}), Ct(() => {
		t.sortModel !== void 0 && e.current.setSortModel(t.sortModel);
	}, [e, t.sortModel]);
};
//#endregion
//#region node_modules/@mui/x-data-grid/esm/hooks/features/scroll/useGridScroll.js
function TC(e) {
	let { containerSize: t, scrollPosition: n, elementSize: r, elementOffset: i } = e, a = i + r;
	if (r > t) return i;
	if (a - t > n) return a - t;
	if (i < n) return i;
}
var EC = (e, t) => {
	let n = Sc(), r = mf(e, "useGridScroll"), i = e.current.columnHeadersContainerRef, a = e.current.virtualScrollerRef, o = O.useCallback((n) => {
		let i = ja(e), o = Wa(e), s = Gs(e);
		if (n.rowIndex != null && o === 0 || s.length === 0) return !1;
		r.debug(`Scrolling to cell at row ${n.rowIndex}, col: ${n.colIndex} `);
		let c = {};
		if (n.colIndex !== void 0 && s[n.colIndex]) {
			let t = Xs(e), r;
			if (n.rowIndex !== void 0) {
				let t = Ml(e)[n.rowIndex]?.id, i = e.current.unstable_getCellColSpanInfo(t, n.colIndex);
				i && !i.spannedByColSpan && (r = i.cellProps.width);
			}
			r === void 0 && (r = s[n.colIndex].computedWidth), c.left = TC({
				containerSize: i.viewportOuterSize.width,
				scrollPosition: Math.abs(a.current?.scrollLeft ?? 0),
				elementSize: r,
				elementOffset: t[n.colIndex]
			});
		}
		if (n.rowIndex !== void 0) {
			let r = Ha(e), o = Eu(e), s = Du(e), l = t.pagination ? n.rowIndex - o * s : n.rowIndex, u = r.positions[l + 1] ? r.positions[l + 1] - r.positions[l] : r.currentPageTotalHeight - r.positions[l];
			c.top = TC({
				containerSize: i.viewportInnerSize.height,
				scrollPosition: a.current?.scrollTop ?? 0,
				elementSize: u,
				elementOffset: r.positions[l]
			});
		}
		return c = e.current.unstable_applyPipeProcessors("scrollToIndexes", c, n), c.left !== void 0 || c.top !== void 0 ? (e.current.scroll(c), !0) : !1;
	}, [
		r,
		e,
		a,
		t.pagination
	]);
	pf(e, {
		scroll: O.useCallback((e) => {
			if (a.current && e.left !== void 0 && i.current) {
				let t = n ? -1 : 1;
				i.current.scrollLeft = e.left, a.current.scrollLeft = t * e.left, r.debug(`Scrolling left: ${e.left}`);
			}
			a.current && e.top !== void 0 && (a.current.scrollTop = e.top, r.debug(`Scrolling top: ${e.top}`)), r.debug("Scrolling, updating container, and viewport");
		}, [
			a,
			n,
			i,
			r
		]),
		scrollToIndexes: o,
		getScrollPosition: O.useCallback(() => a?.current ? {
			top: a.current.scrollTop,
			left: a.current.scrollLeft
		} : {
			top: 0,
			left: 0
		}, [a])
	}, "public");
};
//#endregion
//#region node_modules/@mui/x-data-grid/esm/hooks/features/events/useGridEvents.js
function DC(e, t) {
	No(e, "columnHeaderClick", t.onColumnHeaderClick), No(e, "columnHeaderContextMenu", t.onColumnHeaderContextMenu), No(e, "columnHeaderDoubleClick", t.onColumnHeaderDoubleClick), No(e, "columnHeaderOver", t.onColumnHeaderOver), No(e, "columnHeaderOut", t.onColumnHeaderOut), No(e, "columnHeaderEnter", t.onColumnHeaderEnter), No(e, "columnHeaderLeave", t.onColumnHeaderLeave), No(e, "cellClick", t.onCellClick), No(e, "cellDoubleClick", t.onCellDoubleClick), No(e, "cellKeyDown", t.onCellKeyDown), No(e, "preferencePanelClose", t.onPreferencePanelClose), No(e, "preferencePanelOpen", t.onPreferencePanelOpen), No(e, "menuOpen", t.onMenuOpen), No(e, "menuClose", t.onMenuClose), No(e, "rowDoubleClick", t.onRowDoubleClick), No(e, "rowClick", t.onRowClick), No(e, "stateChange", t.onStateChange);
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/hooks/features/dimensions/useGridDimensions.js
var OC = {
	width: 0,
	height: 0
}, kC = {
	isReady: !1,
	root: OC,
	viewportOuterSize: OC,
	viewportInnerSize: OC,
	contentSize: OC,
	minimumSize: OC,
	hasScrollX: !1,
	hasScrollY: !1,
	scrollbarSize: 0,
	headerHeight: 0,
	groupHeaderHeight: 0,
	headerFilterHeight: 0,
	rowWidth: 0,
	rowHeight: 0,
	columnsTotalWidth: 0,
	leftPinnedWidth: 0,
	rightPinnedWidth: 0,
	headersTotalHeight: 0,
	topContainerHeight: 0,
	bottomContainerHeight: 0,
	autoHeight: !1,
	minimalContentHeight: void 0
}, AC = (e, t, n) => {
	let r = L({}, kC, PC(t, n, Lo(n), Js(n)));
	return n.current.store.state.dimensions = r, L({}, e, { dimensions: r });
}, jC = G(Gs, Xs, (e, t) => {
	let n = e.length;
	return n === 0 ? 0 : eh(t[n - 1] + e[n - 1].computedWidth, 1);
});
function MC(e, t) {
	let n = O.useCallback(() => ja(e), [e]);
	if (pf(e, { getRootDimensions: n }, "public"), pf(e, {
		updateDimensions: () => e.current.virtualizer.api.updateDimensions(),
		getViewportPageSize: () => e.current.virtualizer.api.getViewportPageSize()
	}, "private"), No(e, "rootMount", (t) => {
		NC(t, ja(e));
	}), No(e, "debouncedResize", t.onResize), process.env.NODE_ENV !== "production") {
		let r = mf(e, "useResizeContainer"), i = O.useRef(!1);
		No(e, "resize", (e) => {
			n().isReady && (e.height === 0 && !i.current && !t.autoHeight && !rg && (r.error([
				"The parent DOM element of the Data Grid has an empty height.",
				"Please make sure that this element has an intrinsic height.",
				"The grid displays with a height of 0px.",
				"",
				"More details: https://mui.com/r/x-data-grid-no-dimensions."
			].join("\n")), i.current = !0), e.width === 0 && !i.current && !rg && (r.error([
				"The parent DOM element of the Data Grid has an empty width.",
				"Please make sure that this element has an intrinsic width.",
				"The grid displays with a width of 0px.",
				"",
				"More details: https://mui.com/r/x-data-grid-no-dimensions."
			].join("\n")), i.current = !0));
		});
	}
	Ta(e.current.store, (e) => e.dimensions, (t, n) => {
		n.isReady && (e.current.rootElementRef.current && NC(e.current.rootElementRef.current, n), FC(n.viewportInnerSize, t.viewportInnerSize) || e.current.publishEvent("viewportInnerSizeChange", n.viewportInnerSize), e.current.publishEvent("debouncedResize", n.root));
	});
}
function NC(e, t) {
	let n = (t, n) => e.style.setProperty(t, n);
	n("--DataGrid-hasScrollX", `${Number(t.hasScrollX)}`), n("--DataGrid-hasScrollY", `${Number(t.hasScrollY)}`), n("--DataGrid-scrollbarSize", `${t.scrollbarSize}px`), n("--DataGrid-rowWidth", `${t.rowWidth}px`), n("--DataGrid-columnsTotalWidth", `${t.columnsTotalWidth}px`), n("--DataGrid-leftPinnedWidth", `${t.leftPinnedWidth}px`), n("--DataGrid-rightPinnedWidth", `${t.rightPinnedWidth}px`), n("--DataGrid-headerHeight", `${t.headerHeight}px`), n("--DataGrid-headersTotalHeight", `${t.headersTotalHeight}px`), n("--DataGrid-topContainerHeight", `${t.topContainerHeight}px`), n("--DataGrid-bottomContainerHeight", `${t.bottomContainerHeight}px`), n("--height", `${t.rowHeight}px`);
}
function PC(e, t, n, r) {
	let i = xo(e.rowHeight, Mg.rowHeight, So);
	return {
		rowHeight: Math.floor(i * n),
		headerHeight: Math.floor(e.columnHeaderHeight * n),
		groupHeaderHeight: Math.floor((e.columnGroupHeaderHeight ?? e.columnHeaderHeight) * n),
		headerFilterHeight: Math.floor((e.headerFilterHeight ?? e.columnHeaderHeight) * n),
		columnsTotalWidth: jC(t),
		headersTotalHeight: $d(t, e),
		leftPinnedWidth: r.left.reduce((e, t) => e + t.computedWidth, 0),
		rightPinnedWidth: r.right.reduce((e, t) => e + t.computedWidth, 0)
	};
}
function FC(e, t) {
	return e.width === t.width && e.height === t.height;
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/hooks/features/statePersistence/useGridStatePersistence.js
var IC = (e) => {
	pf(e, {
		exportState: O.useCallback((t = {}) => e.current.unstable_applyPipeProcessors("exportState", {}, t), [e]),
		restoreState: O.useCallback((t) => {
			e.current.unstable_applyPipeProcessors("restoreState", { callbacks: [] }, { stateToRestore: t }).callbacks.forEach((e) => {
				e();
			});
		}, [e])
	}, "public");
}, LC = (e) => {
	let t = () => e.current.virtualizer.api.resetColSpan(), n = (...t) => e.current.virtualizer.api.getCellColSpanInfo(...t), r = (...t) => {
		e.current.virtualizer.api.calculateColSpan(...t);
	}, i = { unstable_getCellColSpanInfo: n }, a = {
		resetColSpan: t,
		calculateColSpan: r
	};
	pf(e, i, "public"), pf(e, a, "private"), K(e, "columnOrderChange", t);
}, RC = ["groupId", "children"], zC = (e) => {
	let t = {};
	for (let n = 0; n < e.length; n += 1) {
		let r = e[n];
		if (js(r)) continue;
		let { groupId: i, children: a } = r, o = R(r, RC);
		if (!i) throw Error("MUI X: An element of the columnGroupingModel does not have either `field` or `groupId`.");
		process.env.NODE_ENV !== "production" && !a && console.warn(`MUI X: group groupId=${i} has no children.`);
		let s = L({}, o, { groupId: i }), c = zC(a);
		if (c[i] !== void 0 || t[i] !== void 0) throw Error(`MUI X: The groupId ${i} is used multiple times in the columnGroupingModel.`);
		Object.assign(t, c), t[i] = s;
	}
	return t;
}, BC = (e, t, n) => {
	if (js(e)) {
		if (n[e.field] !== void 0) throw Error([
			"MUI X: columnGroupingModel contains duplicated field",
			`column field ${e.field} occurs two times in the grouping model:`,
			`- ${n[e.field].join(" > ")}`,
			`- ${t.join(" > ")}`
		].join("\n"));
		n[e.field] = t;
		return;
	}
	let { groupId: r, children: i } = e;
	i.forEach((e) => {
		BC(e, [...t, r], n);
	});
}, VC = (e) => {
	if (!e) return {};
	let t = {};
	return e.forEach((e) => {
		BC(e, [], t);
	}), t;
}, HC = (e, t, n) => {
	let r = (e) => t[e] ?? [], i = [], a = Math.max(0, ...e.map((e) => r(e).length)), o = (e, t, n) => {
		let i = r(e), a = r(t);
		for (let e = 0; e <= n; e += 1) if (i[e] !== a[e]) return !1;
		return !0;
	}, s = (e, t) => {
		let r = n?.left, i = n?.right, a = !!r?.includes(e), o = !!r?.includes(t), s = !!i?.includes(e), c = !!i?.includes(t);
		return a !== o || s !== c;
	};
	for (let t = 0; t < a; t += 1) {
		let n = [];
		for (let i = 0; i < e.length; i += 1) {
			let a = e[i], c = r(a)[t] ?? null;
			if (n.length === 0) {
				n.push({
					columnFields: [a],
					groupId: c
				});
				continue;
			}
			let l = n[n.length - 1], u = l.columnFields[l.columnFields.length - 1];
			l.groupId !== c || !o(u, a, t) || s(u, a) ? n.push({
				columnFields: [a],
				groupId: c
			}) : l.columnFields.push(a);
		}
		i.push(n);
	}
	return i;
}, UC = (e, t, n) => {
	if (n.current.caches.columnGrouping = { lastColumnGroupingModel: t.columnGroupingModel }, !t.columnGroupingModel) return L({}, e, { columnGrouping: void 0 });
	let r = Bs(n), i = Ks(n), a = zC(t.columnGroupingModel ?? []), o = VC(t.columnGroupingModel ?? []);
	return L({}, e, { columnGrouping: {
		lookup: a,
		unwrappedGroupingModel: o,
		headerStructure: HC(r, o, n.current.state.pinnedColumns ?? {}),
		maxDepth: i.length === 0 ? 0 : Math.max(...i.map((e) => o[e]?.length ?? 0))
	} });
}, WC = (e, t) => {
	pf(e, {
		getColumnGroupPath: O.useCallback((t) => Hd(e)[t] ?? [], [e]),
		getAllGroupDetails: O.useCallback(() => Ud(e), [e])
	}, "public");
	let n = O.useCallback(() => {
		let n = VC(t.columnGroupingModel ?? []);
		e.current.setState((e) => {
			let t = HC(e.columns?.orderedFields ?? [], n, e.pinnedColumns ?? {});
			return L({}, e, { columnGrouping: L({}, e.columnGrouping, { headerStructure: t }) });
		});
	}, [e, t.columnGroupingModel]), r = O.useCallback((t) => {
		if (!t && !e.current.caches.columnGrouping.lastColumnGroupingModel) return;
		e.current.caches.columnGrouping.lastColumnGroupingModel = t;
		let n = e.current.getPinnedColumns?.() ?? {}, r = Bs(e), i = Ks(e), a = zC(t ?? []), o = VC(t ?? []), s = HC(r, o, n), c = i.length === 0 ? 0 : Math.max(...i.map((e) => o[e]?.length ?? 0));
		e.current.setState((e) => L({}, e, { columnGrouping: {
			lookup: a,
			unwrappedGroupingModel: o,
			headerStructure: s,
			maxDepth: c
		} }));
	}, [e]);
	K(e, "columnIndexChange", n), K(e, "columnsChange", () => {
		r(t.columnGroupingModel);
	}), K(e, "columnVisibilityModelChange", () => {
		r(t.columnGroupingModel);
	}), O.useEffect(() => {
		t.columnGroupingModel !== e.current.caches.columnGrouping.lastColumnGroupingModel && r(t.columnGroupingModel);
	}, [
		e,
		r,
		t.columnGroupingModel
	]);
};
//#endregion
//#region node_modules/@mui/x-data-grid/esm/utils/createControllablePromise.js
function GC() {
	let e, t, n = new Promise((n, r) => {
		e = n, t = r;
	});
	return n.resolve = e, n.reject = t, n;
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/hooks/features/columnResize/useGridColumnResize.js
function KC(e, t) {
	if (t !== void 0 && e.changedTouches) {
		for (let n = 0; n < e.changedTouches.length; n += 1) {
			let r = e.changedTouches[n];
			if (r.identifier === t) return {
				x: r.clientX,
				y: r.clientY
			};
		}
		return !1;
	}
	return {
		x: e.clientX,
		y: e.clientY
	};
}
function qC(e, t, n, r) {
	let i = e;
	return r === "Right" ? i += t - n.left : i += n.right - t, Math.round(i);
}
function JC(e, t, n) {
	return n === "Left" ? e - t.left : t.right - e;
}
function YC(e) {
	return e === "Right" ? "Left" : "Right";
}
function XC(e, t) {
	let n = e.classList.contains(U["columnSeparator--sideRight"]) ? "Right" : "Left";
	return t ? YC(n) : n;
}
function ZC(e, t) {
	return t === Fs.LEFT ? e ? "--DataGrid-rightPinnedWidth" : "--DataGrid-leftPinnedWidth" : e ? "--DataGrid-leftPinnedWidth" : "--DataGrid-rightPinnedWidth";
}
function QC(e, t, n) {
	return n === Fs.LEFT ? t ? e.rightPinnedWidth : e.leftPinnedWidth : t ? e.leftPinnedWidth : e.rightPinnedWidth;
}
function $C(e) {
	e.preventDefault(), e.stopImmediatePropagation();
}
function ew(e) {
	let t = O.useRef(void 0), n = () => cg(e), r = W(e, n);
	return O.useEffect(() => {
		t.current && r === !1 && (t.current.resolve(), t.current = void 0);
	}), () => {
		if (!t.current) {
			if (n() === !1) return Promise.resolve();
			t.current = GC();
		}
		return t.current;
	};
}
function tw(e, t) {
	if (e.length < 4) return e;
	let n = e.slice();
	n.sort((e, t) => e - t);
	let r = n[Math.floor(n.length * .25)], i = n[Math.floor(n.length * .75) - 1], a = i - r, o = a < 5 ? 5 : a * t;
	return n.filter((e) => e > r - o && e < i + o);
}
function nw(e, t, n) {
	let r = {}, i = e.current.rootElementRef.current;
	i.classList.add(U.autosizing);
	let a = t.includeHeaderFilters && Rd(e);
	return n.forEach((n) => {
		let i = Cv(e.current, n.field).map((e) => e.getBoundingClientRect().width ?? 0), o = t.includeOutliers ? i : tw(i, t.outliersFactor);
		if (t.includeHeaders) {
			let t = xv(e.current, n.field);
			if (t) {
				let e = t.querySelector(`.${U.columnHeaderTitleContainer}`), n = Array.from(e.children), r = t.querySelector(`.${U.menuIcon}`), i = window.getComputedStyle(e, null), a = parseInt(i.gap, 10) || 0, s = window.getComputedStyle(t, null), c = parseInt(s.paddingLeft, 10) + parseInt(s.paddingRight, 10), l = 0, u = 0;
				for (let e = 0; e < n.length; e += 1) {
					let t = n[e];
					t.clientWidth > 0 && (l += 1, u += t.scrollWidth);
				}
				u += 1;
				let d = u + a * (l - 1) + c + (r?.clientWidth ?? 0);
				o.push(d);
			}
		}
		if (a) {
			let t = Sv(e.current, n.field);
			if (t) {
				let e = window.getComputedStyle(t, null), n = parseInt(e.paddingLeft, 10) + parseInt(e.paddingRight, 10), r = t.scrollWidth + n;
				o.push(r);
			}
		}
		let s = n.minWidth !== -Infinity && n.minWidth !== void 0, c = n.maxWidth !== Infinity && n.maxWidth !== void 0, l = s ? n.minWidth : 0, u = c ? n.maxWidth : Infinity, d = o.length === 0 ? 0 : Math.max(...o);
		r[n.field] = ps(d, l, u);
	}), i.classList.remove(U.autosizing), r;
}
var rw = (e) => L({}, e, { columnResize: { resizingColumnField: "" } });
function iw() {
	return {
		colDef: void 0,
		initialColWidth: 0,
		initialTotalWidth: 0,
		previousMouseClickEvent: void 0,
		columnHeaderElement: void 0,
		headerFilterElement: void 0,
		groupHeaderElements: [],
		cellElements: [],
		leftPinnedCellsAfter: [],
		rightPinnedCellsBefore: [],
		fillerLeft: void 0,
		fillerRight: void 0,
		leftPinnedHeadersAfter: [],
		rightPinnedHeadersBefore: []
	};
}
var aw = (e, t) => {
	let n = Sc(), r = mf(e, "useGridColumnResize"), i = Vn(iw).current, a = O.useRef(null), o = O.useRef(null), s = zo(), c = O.useRef(void 0), l = (t) => {
		r.debug(`Updating width to ${t} for col ${i.colDef.field}`);
		let a = t - i.columnHeaderElement.offsetWidth, o = t - i.initialColWidth;
		if (o > 0) {
			let t = i.initialTotalWidth + o;
			e.current.rootElementRef?.current?.style.setProperty("--DataGrid-rowWidth", `${t}px`);
		}
		i.colDef.computedWidth = t, i.colDef.width = t, i.colDef.flex = 0, i.columnHeaderElement.style.width = `${t}px`;
		let s = i.headerFilterElement;
		s && (s.style.width = `${t}px`), i.groupHeaderElements.forEach((e) => {
			let n = e, r;
			r = n.getAttribute("aria-colspan") === "1" ? `${t}px` : `${n.offsetWidth + a}px`, n.style.width = r;
		}), i.cellElements.forEach((e) => {
			let n = e, r;
			r = n.getAttribute("aria-colspan") === "1" ? `${t}px` : `${n.offsetWidth + a}px`, n.style.setProperty("--width", r);
		});
		let c = ja(e), l = e.current.unstable_applyPipeProcessors("isColumnPinned", !1, i.colDef.field);
		l === Fs.LEFT && (ow(i.fillerLeft, "width", a), i.leftPinnedCellsAfter.forEach((e) => {
			ow(e, "left", a);
		}), i.leftPinnedHeadersAfter.forEach((e) => {
			ow(e, "left", a);
		}), e.current.rootElementRef?.current?.style.setProperty(ZC(n, l), `${QC(c, n, l) + o}px`)), l === Fs.RIGHT && (ow(i.fillerRight, "width", a), i.rightPinnedCellsBefore.forEach((e) => {
			ow(e, "right", a);
		}), i.rightPinnedHeadersBefore.forEach((e) => {
			ow(e, "right", a);
		}), e.current.rootElementRef?.current?.style.setProperty(ZC(n, l), `${QC(c, n, l) + o}px`));
	}, u = (t) => {
		if (v(), i.previousMouseClickEvent) {
			let n = i.previousMouseClickEvent, r = n.timeStamp, a = n.clientX, o = n.clientY;
			if (t.timeStamp - r < 300 && t.clientX === a && t.clientY === o) {
				i.previousMouseClickEvent = void 0, e.current.publishEvent("columnResizeStop", null, t);
				return;
			}
		}
		if (i.colDef) {
			e.current.setColumnWidth(i.colDef.field, i.colDef.width), r.debug(`Updating col ${i.colDef.field} with new width: ${i.colDef.width}`);
			let t = zs(e);
			i.groupHeaderElements.forEach((e) => {
				let n = dv(e), r = e, i = `${n.reduce((e, n) => t.columnVisibilityModel[n] === !1 ? e : e + t.lookup[n].computedWidth, 0)}px`;
				r.style.width = i;
			});
		}
		s.start(0, () => {
			e.current.publishEvent("columnResizeStop", null, t);
		});
	}, d = () => {
		i.columnHeaderElement && (i.cellElements = pv(i.columnHeaderElement, e.current));
	}, f = (t, r, s) => {
		let c = e.current.rootElementRef.current;
		i.initialColWidth = t.computedWidth, i.initialTotalWidth = e.current.getRootDimensions().rowWidth, i.colDef = t, i.columnHeaderElement = uv(e.current.columnHeadersContainerRef.current, t.field);
		let l = c.querySelector(`.${U.headerFilterRow} [data-field="${rv(t.field)}"]`);
		l && (i.headerFilterElement = l), i.groupHeaderElements = fv(e.current.columnHeadersContainerRef?.current, t.field), d(), i.fillerLeft = mv(e.current, n ? "filler--pinnedRight" : "filler--pinnedLeft"), i.fillerRight = mv(e.current, n ? "filler--pinnedLeft" : "filler--pinnedRight");
		let u = e.current.unstable_applyPipeProcessors("isColumnPinned", !1, i.colDef.field);
		i.leftPinnedCellsAfter = u === Fs.LEFT ? gv(e.current, i.columnHeaderElement, n) : [], i.rightPinnedCellsBefore = u === Fs.RIGHT ? _v(e.current, i.columnHeaderElement, n) : [], i.leftPinnedHeadersAfter = u === Fs.LEFT ? yv(e.current, i.columnHeaderElement, n) : [], i.rightPinnedHeadersBefore = u === Fs.RIGHT ? bv(e.current, i.columnHeaderElement, n) : [], o.current = XC(r, n), a.current = JC(s, i.columnHeaderElement.getBoundingClientRect(), o.current);
	}, p = wt(u), m = wt((t) => {
		if (t.buttons === 0) {
			p(t);
			return;
		}
		let n = qC(a.current, t.clientX, i.columnHeaderElement.getBoundingClientRect(), o.current);
		n = ps(n, i.colDef.minWidth, i.colDef.maxWidth), l(n);
		let r = {
			element: i.columnHeaderElement,
			colDef: i.colDef,
			width: n
		};
		e.current.publishEvent("columnResize", r, t);
	}), h = wt((e) => {
		KC(e, c.current) && u(e);
	}), g = wt((t) => {
		let n = KC(t, c.current);
		if (!n) return;
		if (t.type === "mousemove" && t.buttons === 0) {
			h(t);
			return;
		}
		let r = qC(a.current, n.x, i.columnHeaderElement.getBoundingClientRect(), o.current);
		r = ps(r, i.colDef.minWidth, i.colDef.maxWidth), l(r);
		let s = {
			element: i.columnHeaderElement,
			colDef: i.colDef,
			width: r
		};
		e.current.publishEvent("columnResize", s, t);
	}), _ = wt((t) => {
		let n = nv(t.target, U["columnSeparator--resizable"]);
		if (!n) return;
		let i = t.changedTouches[0];
		i != null && (c.current = i.identifier);
		let a = lv(nv(t.target, U.columnHeader)), o = e.current.getColumn(a);
		r.debug(`Start Resize on col ${o.field}`), e.current.publishEvent("columnResizeStart", { field: a }, t), f(o, n, i.clientX);
		let s = Zm(t.currentTarget);
		s.addEventListener("touchmove", g), s.addEventListener("touchend", h);
	}), v = O.useCallback(() => {
		let t = Zm(e.current.rootElementRef.current);
		t.body.style.removeProperty("cursor"), t.removeEventListener("mousemove", m), t.removeEventListener("mouseup", p), t.removeEventListener("touchmove", g), t.removeEventListener("touchend", h), setTimeout(() => {
			t.removeEventListener("click", $C, !0);
		}, 100), i.columnHeaderElement && (i.columnHeaderElement.style.pointerEvents = "unset");
	}, [
		e,
		i,
		m,
		p,
		g,
		h
	]), y = O.useCallback(({ field: t }) => {
		e.current.setState((e) => L({}, e, { columnResize: L({}, e.columnResize, { resizingColumnField: t }) }));
	}, [e]), b = O.useCallback(() => {
		e.current.setState((e) => L({}, e, { columnResize: L({}, e.columnResize, { resizingColumnField: "" }) }));
	}, [e]), x = wt(({ colDef: t }, n) => {
		if (n.button !== 0 || !n.currentTarget.classList.contains(U["columnSeparator--resizable"])) return;
		n.preventDefault(), r.debug(`Start Resize on col ${t.field}`), e.current.publishEvent("columnResizeStart", { field: t.field }, n), f(t, n.currentTarget, n.clientX);
		let a = Zm(e.current.rootElementRef.current);
		a.body.style.cursor = "col-resize", i.previousMouseClickEvent = n.nativeEvent, a.addEventListener("mousemove", m), a.addEventListener("mouseup", p), a.addEventListener("click", $C, !0);
	}), S = wt((n, r) => {
		if (t.disableAutosize || r.button !== 0) return;
		let i = e.current.state.columns.lookup[n.field];
		i.resizable !== !1 && e.current.autosizeColumns(L({}, t.autosizeOptions, {
			disableColumnVirtualization: !1,
			columns: [i.field]
		}));
	}), C = ew(e), w = O.useRef(!1), T = O.useCallback(async (n) => {
		if (!e.current.rootElementRef?.current || w.current) return;
		w.current = !0;
		let r = zs(e), i = L({}, zm, n, { columns: n?.columns ?? r.orderedFields });
		i.columns = i.columns.filter((e) => r.columnVisibilityModel[e] !== !1);
		let a = i.columns.map((t) => e.current.state.columns.lookup[t]);
		try {
			!t.disableVirtualization && i.disableColumnVirtualization && (e.current.unstable_setColumnVirtualization(!1), await C());
			let n = nw(e, i, a), o = a.map((e) => L({}, e, {
				width: n[e.field],
				computedWidth: n[e.field],
				flex: 0
			}));
			if (i.expand) {
				let t = r.orderedFields.map((e) => r.lookup[e]).filter((e) => r.columnVisibilityModel[e.field] !== !1).reduce((e, t) => e + (n[t.field] ?? t.computedWidth ?? t.width), 0), i = e.current.getRootDimensions().viewportInnerSize.width - t;
				if (i > 0) {
					let e = i / (o.length || 1);
					o.forEach((t) => {
						t.width += e, t.computedWidth += e;
					});
				}
			}
			e.current.updateColumns(o), o.forEach((t, n) => {
				if (t.width !== a[n].width) {
					let n = t.width;
					e.current.publishEvent("columnWidthChange", {
						element: e.current.getColumnHeaderElement(t.field),
						colDef: t,
						width: n
					});
				}
			});
		} finally {
			t.disableVirtualization || e.current.unstable_setColumnVirtualization(!0), w.current = !1;
		}
	}, [
		e,
		C,
		t.disableVirtualization
	]);
	O.useEffect(() => v, [v]), Ca(() => {
		t.autosizeOnMount && Promise.resolve().then(() => {
			e.current.autosizeColumns(t.autosizeOptions);
		});
	}), hf(e, () => e.current.columnHeadersContainerRef?.current, "touchstart", _, { passive: !0 }), pf(e, { autosizeColumns: T }, "public"), K(e, "columnResizeStop", b), K(e, "columnResizeStart", y), K(e, "columnSeparatorMouseDown", x), K(e, "columnSeparatorDoubleClick", S), K(e, "rowsSet", () => {
		Rm(e) !== "" && requestAnimationFrame(() => {
			d();
		});
	}), No(e, "columnResize", t.onColumnResize), No(e, "columnWidthChange", t.onColumnWidthChange);
};
function ow(e, t, n) {
	e && (e.style[t] = `${Math.round(parseFloat(e.style[t])) + n}px`);
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/hooks/features/rows/gridRowSpanningUtils.js
function sw(e, t) {
	return e.firstRowIndex >= t.firstRowIndex && e.lastRowIndex <= t.lastRowIndex ? null : e.firstRowIndex >= t.firstRowIndex && e.lastRowIndex > t.lastRowIndex ? {
		firstRowIndex: t.lastRowIndex,
		lastRowIndex: e.lastRowIndex
	} : e.firstRowIndex < t.firstRowIndex && e.lastRowIndex <= t.lastRowIndex ? {
		firstRowIndex: e.firstRowIndex,
		lastRowIndex: t.firstRowIndex - 1
	} : e;
}
function cw(e) {
	return e.firstRowIndex !== 0 || e.lastRowIndex !== 0;
}
var lw = (e, t, n) => {
	if (!e) return null;
	let r = e[t.field];
	return t.rowSpanValueGetter ? t.rowSpanValueGetter(r, e, t, n) : lo(e, t, n);
}, uw = {
	caches: {
		spannedCells: {},
		hiddenCells: {},
		hiddenCellOriginMap: {}
	},
	processedRange: {
		firstRowIndex: 0,
		lastRowIndex: 0
	}
}, dw = (e, t, n, r, i, a) => {
	let o = e.current.virtualizer, s = a ? uw : Xh.selectors.state(o.store.state), c = L({}, s.caches.spannedCells), l = L({}, s.caches.hiddenCells), u = L({}, s.caches.hiddenCellOriginMap), d = {
		firstRowIndex: Math.min(s.processedRange.firstRowIndex, i.firstRowIndex),
		lastRowIndex: Math.max(s.processedRange.lastRowIndex, i.lastRowIndex)
	};
	return t.forEach((t, a) => {
		for (let o = i.firstRowIndex; o < i.lastRowIndex; o += 1) {
			let s = n[o];
			if (l[s.id]?.[a]) continue;
			let d = lw(s.model, t, e);
			if (d == null) continue;
			let f = s.id, p = o, m = 0, h = [];
			if (o === i.firstRowIndex) {
				let i = o - 1, s = n[i];
				for (; i >= r.firstRowIndex && s && lw(s.model, t, e) === d;) {
					let e = n[i + 1];
					l[e.id] ? l[e.id][a] = !0 : l[e.id] = { [a]: !0 }, h.push(o), m += 1, f = s.id, p = i, --i, s = n[i];
				}
			}
			h.forEach((e) => {
				u[e] ? u[e][a] = p : u[e] = { [a]: p };
			});
			let g = o + 1;
			for (; g <= r.lastRowIndex && n[g] && lw(n[g].model, t, e) === d;) {
				let e = n[g];
				l[e.id] ? l[e.id][a] = !0 : l[e.id] = { [a]: !0 }, u[g] ? u[g][a] = p : u[g] = { [a]: p }, g += 1, m += 1;
			}
			m > 0 && (c[f] ? c[f][a] = m + 1 : c[f] = { [a]: m + 1 });
		}
	}), {
		caches: {
			spannedCells: c,
			hiddenCells: l,
			hiddenCellOriginMap: u
		},
		processedRange: d
	};
}, fw = (e) => L({}, e, { rowSpanning: uw }), pw = (e, t) => {
	let n = O.useCallback((t, n = !1) => {
		let r = e.current.virtualizer.store, { range: i, rows: a } = kg(e);
		if (n && r.set("rowSpanning", uw), i === null || !cw(t)) return;
		let o = n ? uw : Xh.selectors.state(r.state), s = sw({
			firstRowIndex: t.firstRowIndex,
			lastRowIndex: Math.min(t.lastRowIndex, i.lastRowIndex - i.firstRowIndex + 1)
		}, o.processedRange);
		if (s === null) return;
		let c = dw(e, Gs(e), a, i, s, n), l = Object.keys(c.caches.spannedCells).length, u = Object.keys(c.caches.hiddenCells).length, d = Object.keys(o.caches.spannedCells).length, f = Object.keys(o.caches.hiddenCells).length;
		!(n || l !== d || u !== f) || l === 0 && d === 0 || r.set("rowSpanning", c);
	}, [e]), { schedule: r, cancel: i } = _f(n), a = O.useCallback(() => {
		let t = lg(e);
		cw(t) && r(t, !0);
	}, [e, r]);
	K(e, "renderedRowsIntervalChange", _s(t.rowSpanning, (e) => {
		n(e, i());
	})), K(e, "sortedRowsSet", _s(t.rowSpanning, a)), K(e, "paginationModelChange", _s(t.rowSpanning, a)), K(e, "filteredRowsSet", _s(t.rowSpanning, a)), K(e, "columnsChange", _s(t.rowSpanning, a)), K(e, "rowExpansionChange", _s(t.rowSpanning, a)), O.useEffect(() => {
		let r = e.current.virtualizer?.store;
		r && (t.rowSpanning ? r.state.rowSpanning === uw && n(lg(e)) : r.state.rowSpanning !== uw && r.set("rowSpanning", uw));
	}, [
		e,
		t.rowSpanning,
		n
	]);
}, mw = (e, t, n) => L({}, e, { listViewColumn: t.listViewColumn ? L({}, t.listViewColumn, { computedWidth: gw(n) }) : void 0 });
function hw(e, t) {
	let n = () => {
		e.current.setState((t) => t.listViewColumn ? L({}, t, { listViewColumn: L({}, t.listViewColumn, { computedWidth: gw(e) }) }) : t);
	}, r = O.useRef(null);
	K(e, "viewportInnerSizeChange", (e) => {
		r.current !== e.width && (r.current = e.width, n());
	}), K(e, "columnVisibilityModelChange", n), Ct(() => {
		let n = t.listViewColumn;
		n && e.current.setState((t) => L({}, t, { listViewColumn: L({}, n, { computedWidth: gw(e) }) }));
	}, [e, t.listViewColumn]), O.useEffect(() => {
		t.listView && !t.listViewColumn && In([
			"MUI X: The `listViewColumn` prop must be set if `listView` is enabled.",
			"To fix, pass a column definition to the `listViewColumn` prop, e.g. `{ field: \"example\", renderCell: (params) => <div>{params.row.id}</div> }`.",
			"For more details, see https://mui.com/x/react-data-grid/list-view/"
		]);
	}, [t.listView, t.listViewColumn]);
}
function gw(e) {
	return ja(e).viewportInnerSize.width;
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/hooks/features/dataSource/gridDataSourceSelector.js
var _w = G(Ol, Tl, Cu, (e, t, n) => ({
	groupKeys: [],
	paginationModel: n,
	sortModel: t,
	filterModel: e,
	start: n.page * n.pageSize,
	end: n.page * n.pageSize + n.pageSize - 1
})), vw = /* @__PURE__ */ function(e) {
	return e.Default = "set-flat-rows", e.LazyLoading = "replace-row-range", e.GroupedData = "set-grouped-rows", e;
}({}), yw = class {
	constructor(e) {
		this.chunkSize = e;
	}
	getCacheKeys = (e) => {
		if (this.chunkSize < 1 || typeof e.start != "number") return [e];
		let t = [];
		for (let n = e.start; n <= e.end; n += this.chunkSize) {
			let r = Math.min(n + this.chunkSize - 1, e.end);
			t.push(L({}, e, {
				start: n,
				end: r
			}));
		}
		return t;
	};
	splitResponse = (e, t) => {
		let n = this.getCacheKeys(e);
		if (n.length === 1) return new Map([[e, t]]);
		let r = /* @__PURE__ */ new Map();
		return n.forEach((n) => {
			let i = n.end === e.end, a = L({}, t, {
				pageInfo: L({}, t.pageInfo, {
					hasNextPage: t.pageInfo?.hasNextPage !== void 0 && !i ? !0 : t.pageInfo?.hasNextPage,
					nextCursor: t.pageInfo?.nextCursor !== void 0 && !i ? t.rows[n.end + 1].id : t.pageInfo?.nextCursor
				}),
				rows: typeof n.start != "number" || typeof e.start != "number" ? t.rows : t.rows.slice(n.start - e.start, n.end - e.start + 1)
			});
			r.set(n, a);
		}), r;
	};
	static mergeResponses = (e) => e.length === 1 ? e[0] : e.reduce((e, t) => L({}, t, { rows: [...e.rows, ...t.rows] }), {
		rows: [],
		rowCount: 0,
		pageInfo: {}
	});
}, bw = ["skipCache", "keepChildrenExpanded"], xw = {
	clear: () => {},
	get: () => void 0,
	set: () => {}
};
function Sw(e, t = {}) {
	return e === null ? xw : e ?? new fg(t);
}
var Cw = (e, t, n = {}) => {
	let r = O.useCallback(() => {
		e.current.setStrategyAvailability(tS.DataSource, vw.Default, t.dataSource ? () => !0 : () => !1);
	}, [e, t.dataSource]), [i, a] = O.useState(e.current.getActiveStrategy(tS.DataSource)), o = O.useMemo(() => i === vw.Default || i === vw.GroupedData, [i]), s = W(e, Cu), c = O.useRef(0), l = O.useRef(null), u = t.onDataSourceError, d = t.dataSourceRevalidateMs, f = Vn(() => {
		if (!t.pagination) return new yw(s.pageSize);
		let e = t.pageSizeOptions.map((e) => typeof e == "number" ? e : e.value).sort((e, t) => e - t);
		return new yw(Math.min(s.pageSize, e[0]));
	}).current, [p, m] = O.useState(() => Sw(t.dataSourceCache, n.cacheOptions)), h = O.useCallback(async (r, i) => {
		let a = t.dataSource?.getRows;
		if (!a) return;
		if (r && r !== io && t.signature !== "DataGrid") {
			n.fetchRowChildren?.([r]);
			return;
		}
		n.clearDataSourceState?.();
		let s = i || {}, { skipCache: l, keepChildrenExpanded: d } = s, m = R(s, bw), h = L({}, _w(e), e.current.unstable_applyPipeProcessors("getRowsParams", {}), m), g = f.getCacheKeys(h).map((e) => p.get(e));
		if (!l && g.every((e) => e !== void 0)) {
			e.current.applyStrategyProcessor("dataSourceRowsUpdate", {
				response: yw.mergeResponses(g),
				fetchParams: h,
				options: {
					skipCache: l,
					keepChildrenExpanded: d
				}
			});
			return;
		}
		(o || e.current.getRowsCount() === 0) && e.current.setLoading(!0);
		let _ = c.current + 1;
		c.current = _;
		try {
			let t = await a(h);
			f.splitResponse(h, t).forEach((e, t) => p.set(t, e)), c.current === _ && e.current.applyStrategyProcessor("dataSourceRowsUpdate", {
				response: t,
				fetchParams: h,
				options: {
					skipCache: l,
					keepChildrenExpanded: d
				}
			});
		} catch (t) {
			c.current === _ && (e.current.applyStrategyProcessor("dataSourceRowsUpdate", {
				error: t,
				fetchParams: h,
				options: {
					skipCache: l,
					keepChildrenExpanded: d
				}
			}), typeof u == "function" ? u(new pg({
				message: t?.message,
				params: h,
				cause: t
			})) : In([
				"MUI X: A call to `dataSource.getRows()` threw an error which was not handled because `onDataSourceError()` is missing.",
				"To handle the error pass a callback to the `onDataSourceError` prop, for example `<DataGrid onDataSourceError={(error) => ...} />`.",
				"For more detail, see https://mui.com/x/react-data-grid/server-side-data/#error-handling."
			], "error"));
		} finally {
			o && c.current === _ && e.current.setLoading(!1);
		}
	}, [
		f,
		p,
		e,
		o,
		t.dataSource?.getRows,
		u,
		n,
		t.signature
	]), g = O.useCallback(() => {
		a(e.current.getActiveStrategy(tS.DataSource));
	}, [e]), _ = n.fetchRowChildren, v = wt(async () => {
		let n = t.dataSource?.getRows;
		if (!n || !o) return;
		let r = () => {
			if (i !== vw.GroupedData || !_) return;
			let t = Ja(e), n = Mu(e).rows.reduce((e, n) => {
				let r = t[n.id];
				return r.type === "group" && r.id !== io && r.childrenExpanded === !0 && e.push(n.id), e;
			}, []);
			n.length > 0 && _(n, { showChildrenLoading: !1 });
		}, a = L({}, _w(e), e.current.unstable_applyPipeProcessors("getRowsParams", {}));
		if (f.getCacheKeys(a).map((e) => p.get(e)).every((e) => e !== void 0)) {
			r();
			return;
		}
		try {
			let t = await n(a);
			if (!$m(a, L({}, _w(e), e.current.unstable_applyPipeProcessors("getRowsParams", {})))) return;
			f.splitResponse(a, t).forEach((e, t) => p.set(t, e)), e.current.applyStrategyProcessor("dataSourceRowsUpdate", {
				response: t,
				fetchParams: a,
				options: {}
			}), r();
		} catch {}
	}), y = O.useCallback(() => {
		l.current !== null && (clearInterval(l.current), l.current = null);
	}, []), b = wt(() => {
		y(), !(d <= 0 || !o) && (l.current = setInterval(v, d));
	}), x = O.useCallback((t) => {
		if ("error" in t) {
			e.current.setRows([]);
			return;
		}
		let { response: n } = t;
		n.rowCount !== void 0 && e.current.setRowCount(n.rowCount), e.current.setRows(n.rows), e.current.unstable_applyPipeProcessors("processDataSourceRows", {
			params: t.fetchParams,
			response: n
		}, !0), b();
	}, [e, b]), S = t.dataSource?.updateRow, C = n.handleEditRow, w = { dataSource: {
		fetchRows: h,
		cache: p,
		editRow: O.useCallback(async (t) => {
			if (S) try {
				let n = await S(t);
				return typeof C == "function" ? (C(t, n), n) : (n && !$m(n, t.previousRow) && e.current.dataSource.cache.clear(), e.current.updateNestedRows([n], []), n);
			} catch (e) {
				throw typeof u == "function" ? u(new mg({
					message: e?.message,
					params: t,
					cause: e
				})) : In([
					"MUI X: A call to `dataSource.updateRow()` threw an error which was not handled because `onDataSourceError()` is missing.",
					"To handle the error pass a callback to the `onDataSourceError` prop, for example `<DataGrid onDataSourceError={(error) => ...} />`.",
					"For more detail, see https://mui.com/x/react-data-grid/server-side-data/#error-handling."
				], "error"), e;
			}
		}, [
			e,
			S,
			u,
			C
		])
	} }, T = O.useMemo(() => Zy(h, 0), [h]), E = O.useCallback(() => {
		e.current.setRows([]), y(), T();
	}, [
		y,
		T,
		e
	]), D = O.useRef(!0);
	return O.useEffect(() => {
		if (D.current) {
			D.current = !1;
			return;
		}
		if (t.dataSourceCache === void 0) return;
		let e = Sw(t.dataSourceCache, n.cacheOptions);
		m((t) => t === e ? t : e);
	}, [t.dataSourceCache, n.cacheOptions]), O.useEffect(() => {
		o || y();
	}, [o, y]), O.useEffect(() => {
		d <= 0 && y();
	}, [d, y]), O.useEffect(() => y, [y]), O.useEffect(() => {
		if (!(i !== vw.Default && i !== vw.LazyLoading && i !== vw.GroupedData)) return t.dataSource && (y(), e.current.setRows([]), e.current.dataSource.cache.clear(), e.current.dataSource.fetchRows()), () => {
			c.current += 1;
		};
	}, [
		e,
		t.dataSource,
		i,
		y
	]), {
		api: { public: w },
		debouncedFetchRows: T,
		strategyProcessor: {
			strategyName: vw.Default,
			group: "dataSourceRowsUpdate",
			processor: x
		},
		setStrategyAvailability: r,
		startPolling: b,
		stopPolling: y,
		cacheChunkManager: f,
		cache: p,
		events: {
			strategyAvailabilityChange: g,
			sortModelChange: _s(o, E),
			filterModelChange: _s(o, E),
			paginationModelChange: _s(o, E)
		}
	};
}, ww = (e, t) => {
	let { api: n, strategyProcessor: r, events: i, setStrategyAvailability: a } = Cw(e, t);
	pf(e, n.public, "public"), nS(e, r.strategyName, r.group, r.processor), Object.entries(i).forEach(([t, n]) => {
		K(e, t, n);
	}), O.useEffect(() => {
		a();
	}, [a]);
}, Tw = (e, t, n) => {
	lS(e, t), SC(e, t), hC(e), uS(sS, e, t), uS(yC, e, t), uS(SS, e, t), uS(uC, e, t), uS(ZS, e, t), uS(cC, e, t), uS(HS, e, t), uS(CC, e, t), uS($S, e, t), uS(LS, e, t), uS(fw, e, t), uS(TS, e, t), uS(rw, e, t), uS(bS, e, t), uS(UC, e, t), uS(ag, e, t), uS(AC, e, t), uS(zg, e, t), uS(mw, e, t), JS(e, t), bC(e, t), CS(e, t), dC(e, t, n), pw(e, t), _C(e, t, n), LC(e), WC(e, t), lC(e, t, n), US(e, t), eC(e, t), VS(e, t, n), wC(e, t), ES(e, t), aw(e, t), QS(e, t), EC(e, t), xS(e), AS(e, t), IS(e, t), yS(e, t), MC(e, t), DC(e, t), IC(e), og(e, t), hw(e, t), ww(e, t), gf(() => {
		e.current.runAppliersForPendingProcessors();
	}), O.useEffect(() => {
		e.current.runAppliersForPendingProcessors();
	});
}, Ew = (e) => {
	let { classes: t, headerAlign: n, isDragging: r, isLastColumn: i, showLeftBorder: a, showRightBorder: o, groupId: s, pinnedPosition: c } = e;
	return Bi({
		root: [
			"columnHeader",
			n && `columnHeader--align${ip(n)}`,
			r && "columnHeader--moving",
			o && "columnHeader--withRightBorder",
			a && "columnHeader--withLeftBorder",
			"withBorderColor",
			s === null ? "columnHeader--emptyGroup" : "columnHeader--filledGroup",
			c === Qc.LEFT && "columnHeader--pinnedLeft",
			c === Qc.RIGHT && "columnHeader--pinnedRight",
			i && "columnHeader--last"
		],
		draggableContainer: ["columnHeaderDraggableContainer"],
		titleContainer: ["columnHeaderTitleContainer", "withBorderColor"],
		titleContainerContent: ["columnHeaderTitleContainerContent"]
	}, jn, t);
};
function Dw(e) {
	let { groupId: t, width: n, depth: r, maxDepth: i, fields: a, height: o, colIndex: s, hasFocus: c, tabIndex: l, isLastColumn: u, pinnedPosition: d, pinnedOffset: f } = e, p = B(), m = Sc(), h = O.useRef(null), g = V(), _ = W(g, Ud), v = t ? _[t] : {}, { headerName: y = t ?? "", description: b = "", headerAlign: x = void 0 } = v, S, C = t && _[t]?.renderHeaderGroup, w = O.useMemo(() => ({
		groupId: t,
		headerName: y,
		description: b,
		depth: r,
		maxDepth: i,
		fields: a,
		colIndex: s,
		isLastColumn: u
	}), [
		t,
		y,
		b,
		r,
		i,
		a,
		s,
		u
	]);
	t && C && (S = C(w));
	let T = L({}, e, {
		classes: p.classes,
		headerAlign: x,
		depth: r,
		isDragging: !1
	}), D = y ?? t, k = kt(), A = t === null ? `empty-group-cell-${k}` : t, j = Ew(T);
	O.useLayoutEffect(() => {
		if (c) {
			let e = h.current.querySelector("[tabindex=\"0\"]") || h.current;
			if (!e) return;
			if (Xg()) e.focus({ preventScroll: !0 });
			else {
				let t = g.current.getScrollPosition();
				e.focus(), g.current.scroll(t);
			}
		}
	}, [g, c]);
	let M = O.useCallback((e) => (t) => {
		cv(t) || g.current.publishEvent(e, w, t);
	}, [g, w]), N = O.useMemo(() => ({
		onKeyDown: M("columnGroupHeaderKeyDown"),
		onFocus: M("columnGroupHeaderFocus"),
		onBlur: M("columnGroupHeaderBlur")
	}), [M]), P = typeof v.headerClassName == "function" ? v.headerClassName(w) : v.headerClassName, ee = O.useMemo(() => r_(L({}, e.style), m, d, f), [
		d,
		f,
		e.style,
		m
	]);
	return /* @__PURE__ */ E(Lv, L({
		ref: h,
		classes: j,
		columnMenuOpen: !1,
		colIndex: s,
		height: o,
		isResizing: !1,
		sortDirection: null,
		hasFocus: !1,
		tabIndex: l,
		isDraggable: !1,
		headerComponent: S,
		headerClassName: P,
		description: b,
		elementId: A,
		width: n,
		columnMenuIconButton: null,
		columnTitleIconButtons: null,
		resizable: !1,
		label: D,
		"aria-colspan": a.length,
		"data-fields": `|-${a.join("-|-")}-|`,
		style: ee
	}, N));
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/GridScrollbarFillerCell.js
var Ow = {
	root: U.scrollbarFiller,
	pinnedRight: U["scrollbarFiller--pinnedRight"]
};
function kw({ pinnedRight: e }) {
	return /* @__PURE__ */ E("div", {
		role: "presentation",
		className: xt(Ow.root, e && Ow.pinnedRight)
	});
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/hooks/features/columnHeaders/useGridColumnHeaders.js
var Aw = I("div", {
	name: "MuiDataGrid",
	slot: "ColumnHeaderRow"
})({ display: "flex" }), jw = (e) => {
	let { visibleColumns: t, sortColumnLookup: n, filterColumnLookup: r, columnHeaderTabIndexState: i, columnGroupHeaderTabIndexState: a, columnHeaderFocus: o, columnGroupHeaderFocus: s, headerGroupingMaxDepth: c, columnMenuState: l, columnVisibility: u, columnGroupsHeaderStructure: d, hasOtherElementInTabSequence: f } = e, [p, m] = O.useState(""), [h, g] = O.useState(""), _ = Zn(), v = B(), y = W(_, Hd), b = W(_, Xs), x = W(_, ug), S = W(_, Js), C = W(_, Vs), w = Fh(b, x, S.left.length), T = W(_, Ma), k = W(_, Ia), A = W(_, La), j = W(_, Ra), M = W(_, Ba), N = O.useCallback((e) => g(e.field), []), P = O.useCallback(() => g(""), []), ee = O.useCallback((e) => m(e.field), []), te = O.useCallback(() => m(""), []), ne = O.useMemo(() => S.left.length ? {
		firstColumnIndex: 0,
		lastColumnIndex: S.left.length
	} : null, [S.left.length]), F = O.useMemo(() => S.right.length ? {
		firstColumnIndex: t.length - S.right.length,
		lastColumnIndex: t.length
	} : null, [S.right.length, t.length]);
	K(_, "columnResizeStart", N), K(_, "columnResizeStop", P), K(_, "columnHeaderDragStart", ee), K(_, "columnHeaderDragEndNative", te);
	let re = (e) => {
		let { renderContext: n = x } = e || {}, r = n.firstColumnIndex, i = Math.min(n.lastColumnIndex, t.length);
		return {
			renderedColumns: t.slice(r, i),
			firstColumnToRender: r,
			lastColumnToRender: i
		};
	}, ie = (e, t, n, r = !1) => {
		let i = e?.position === Qc.RIGHT, a = e?.position === void 0, o = S.right.length > 0 && i || S.right.length === 0 && a, s = w - n;
		return /* @__PURE__ */ D(O.Fragment, { children: [
			a && /* @__PURE__ */ E("div", {
				role: "presentation",
				style: { width: s }
			}),
			t,
			a && /* @__PURE__ */ E("div", {
				role: "presentation",
				className: xt(U.filler, r && U["filler--borderBottom"])
			}),
			o && /* @__PURE__ */ E(kw, { pinnedRight: i })
		] });
	};
	process.env.NODE_ENV !== "production" && (ie.displayName = "getFillers");
	let ae = (e, t = {}) => {
		let { renderedColumns: a, firstColumnToRender: s } = re(e), c = [];
		for (let u = 0; u < a.length; u += 1) {
			let d = a[u], m = s + u, g = m === 0, _ = i !== null && i.field === d.field || g && !f ? 0 : -1, y = o !== null && o.field === d.field, x = l.open && l.field === d.field, S = e?.position, C = lx(S, d.computedWidth, m, b, T, M), w = S === Qc.RIGHT ? a[u - 1] : a[u + 1], D = w ? o !== null && o.field === w.field : !1, O = u, j = a.length, N = dx(S, O, v.showColumnVerticalBorder, v.pinnedColumnsSectionSeparator), P = ux(S, O, j, v.showColumnVerticalBorder, k, v.pinnedColumnsSectionSeparator);
			c.push(/* @__PURE__ */ E(Bv, L({}, n[d.field], {
				columnMenuOpen: x,
				filterItemsCounter: r[d.field] && r[d.field].length,
				headerHeight: A,
				isDragging: d.field === p,
				colDef: d,
				colIndex: m,
				isResizing: h === d.field,
				isLast: m === b.length - 1,
				hasFocus: y,
				tabIndex: _,
				pinnedPosition: S,
				pinnedOffset: C,
				isSiblingFocused: D,
				showLeftBorder: N,
				showRightBorder: P
			}, t), d.field));
		}
		return ie(e, c, 0);
	}, oe = () => /* @__PURE__ */ D(Aw, {
		role: "row",
		"aria-rowindex": c + 1,
		ownerState: v,
		className: U["row--borderBottom"],
		style: { height: A },
		children: [
			ne && ae({
				position: Qc.LEFT,
				renderContext: ne
			}, { disableReorder: !0 }),
			ae({ renderContext: x }),
			F && ae({
				position: Qc.RIGHT,
				renderContext: F
			}, {
				disableReorder: !0,
				separatorSide: Mv.Left
			})
		]
	});
	process.env.NODE_ENV !== "production" && (oe.displayName = "getColumnHeadersRow");
	let se = ({ depth: e, params: n }) => {
		let r = re(n);
		if (r.renderedColumns.length === 0) return null;
		let { firstColumnToRender: i, lastColumnToRender: o } = r, l = d[e], f = t[i].field, p = y[f]?.[e] ?? null, m = l.findIndex(({ groupId: e, columnFields: t }) => e === p && t.includes(f)), h = t[o - 1].field, g = y[h]?.[e] ?? null, _ = l.findIndex(({ groupId: e, columnFields: t }) => e === g && t.includes(h)), x = l.slice(m, _ + 1).map((e) => L({}, e, { columnFields: e.columnFields.filter((e) => u[e] !== !1) })).filter((e) => e.columnFields.length > 0), S = x[0].columnFields.indexOf(f), w = x[0].columnFields.slice(0, S).reduce((e, t) => e + (C[t].computedWidth ?? 0), 0), D = i;
		return ie(n, x.map(({ groupId: t, columnFields: r }, i) => {
			let o = s !== null && s.depth === e && r.includes(s.field), l = a !== null && a.depth === e && r.includes(a.field) ? 0 : -1, u = {
				groupId: t,
				width: r.reduce((e, t) => e + C[t].computedWidth, 0),
				fields: r,
				colIndex: D,
				hasFocus: o,
				tabIndex: l
			}, d = n.position, f = lx(d, u.width, D, b, T, M);
			D += r.length;
			let p = i;
			return d === Qc.LEFT && (p = D - 1), /* @__PURE__ */ E(Dw, {
				groupId: t,
				width: u.width,
				fields: u.fields,
				colIndex: u.colIndex,
				depth: e,
				isLastColumn: i === x.length - 1,
				maxDepth: c,
				height: j,
				hasFocus: o,
				tabIndex: l,
				pinnedPosition: d,
				pinnedOffset: f,
				showLeftBorder: dx(d, p, v.showColumnVerticalBorder, v.pinnedColumnsSectionSeparator),
				showRightBorder: ux(d, p, x.length, v.showColumnVerticalBorder, k, v.pinnedColumnsSectionSeparator)
			}, i);
		}), w);
	};
	return {
		renderContext: x,
		leftRenderContext: ne,
		rightRenderContext: F,
		pinnedColumns: S,
		visibleColumns: t,
		columnPositions: b,
		getFillers: ie,
		getColumnHeadersRow: oe,
		getColumnsToRender: re,
		getColumnGroupHeadersRows: () => {
			if (c === 0) return null;
			let e = [];
			for (let t = 0; t < c; t += 1) e.push(/* @__PURE__ */ D(Aw, {
				role: "row",
				"aria-rowindex": t + 1,
				ownerState: v,
				style: { height: j },
				children: [
					ne && se({
						depth: t,
						params: {
							position: Qc.LEFT,
							renderContext: ne,
							maxLastColumn: ne.lastColumnIndex
						}
					}),
					se({
						depth: t,
						params: { renderContext: x }
					}),
					F && se({
						depth: t,
						params: {
							position: Qc.RIGHT,
							renderContext: F,
							maxLastColumn: F.lastColumnIndex
						}
					})
				]
			}, t));
			return e;
		},
		getPinnedCellOffset: lx,
		isDragging: !!p,
		getInnerProps: () => ({ role: "rowgroup" })
	};
}, Mw = ["className"], Nw = (e) => {
	let { classes: t } = e;
	return Bi({ root: ["columnHeaders"] }, jn, t);
}, Pw = Cm("div", {
	name: "MuiDataGrid",
	slot: "ColumnHeaders"
})({
	display: "flex",
	flexDirection: "column",
	borderTopLeftRadius: "var(--unstable_DataGrid-radius)",
	borderTopRightRadius: "var(--unstable_DataGrid-radius)"
}), Fw = z(function(e, t) {
	let { className: n } = e, r = R(e, Mw), i = B();
	return /* @__PURE__ */ E(Pw, L({
		className: xt(Nw(i).root, n),
		ownerState: i
	}, r, {
		role: "presentation",
		ref: t
	}));
});
process.env.NODE_ENV !== "production" && (Fw.displayName = "GridBaseColumnHeaders");
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/GridColumnHeaders.js
var Iw = [
	"className",
	"visibleColumns",
	"sortColumnLookup",
	"filterColumnLookup",
	"columnHeaderTabIndexState",
	"columnGroupHeaderTabIndexState",
	"columnHeaderFocus",
	"columnGroupHeaderFocus",
	"headerGroupingMaxDepth",
	"columnMenuState",
	"columnVisibility",
	"columnGroupsHeaderStructure",
	"hasOtherElementInTabSequence"
], Lw = z(function(e, t) {
	let { visibleColumns: n, sortColumnLookup: r, filterColumnLookup: i, columnHeaderTabIndexState: a, columnGroupHeaderTabIndexState: o, columnHeaderFocus: s, columnGroupHeaderFocus: c, headerGroupingMaxDepth: l, columnMenuState: u, columnVisibility: d, columnGroupsHeaderStructure: f, hasOtherElementInTabSequence: p } = e, m = R(e, Iw), { getInnerProps: h, getColumnHeadersRow: g, getColumnGroupHeadersRows: _ } = jw({
		visibleColumns: n,
		sortColumnLookup: r,
		filterColumnLookup: i,
		columnHeaderTabIndexState: a,
		columnGroupHeaderTabIndexState: o,
		columnHeaderFocus: s,
		columnGroupHeaderFocus: c,
		headerGroupingMaxDepth: l,
		columnMenuState: u,
		columnVisibility: d,
		columnGroupsHeaderStructure: f,
		hasOtherElementInTabSequence: p
	});
	return /* @__PURE__ */ D(Fw, L({}, m, h(), {
		ref: t,
		children: [_(), g()]
	}));
});
process.env.NODE_ENV !== "production" && (Lw.displayName = "GridColumnHeaders"), process.env.NODE_ENV !== "production" && (Lw.propTypes = {
	columnGroupHeaderFocus: q.default.shape({
		depth: q.default.number.isRequired,
		field: q.default.string.isRequired
	}),
	columnGroupHeaderTabIndexState: q.default.shape({
		depth: q.default.number.isRequired,
		field: q.default.string.isRequired
	}),
	columnGroupsHeaderStructure: q.default.arrayOf(q.default.arrayOf(q.default.shape({
		columnFields: q.default.arrayOf(q.default.string).isRequired,
		groupId: q.default.string
	}))).isRequired,
	columnHeaderFocus: q.default.shape({ field: q.default.string.isRequired }),
	columnHeaderTabIndexState: q.default.shape({ field: q.default.string.isRequired }),
	columnMenuState: q.default.shape({
		field: q.default.string,
		open: q.default.bool.isRequired
	}).isRequired,
	columnVisibility: q.default.object.isRequired,
	filterColumnLookup: q.default.object.isRequired,
	hasOtherElementInTabSequence: q.default.bool.isRequired,
	headerGroupingMaxDepth: q.default.number.isRequired,
	sortColumnLookup: q.default.object.isRequired,
	visibleColumns: q.default.arrayOf(q.default.object).isRequired
});
var Rw = Co(Lw);
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/GridDetailPanels.js
function zw(e) {
	return null;
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/GridPinnedRows.js
function Bw(e) {
	return null;
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/GridNoResultsOverlay.js
var Vw = z(function(e, t) {
	return /* @__PURE__ */ E(z_, L({}, e, {
		ref: t,
		children: V().current.getLocaleText("noResultsOverlayLabel")
	}));
});
process.env.NODE_ENV !== "production" && (Vw.displayName = "GridNoResultsOverlay");
//#endregion
//#region node_modules/@mui/x-data-grid/esm/components/virtualization/GridBottomContainer.js
var Hw = () => Bi({ root: ["bottomContainer"] }, jn, {}), Uw = I("div", {
	slot: "internal",
	shouldForwardProp: void 0
})({
	position: "sticky",
	zIndex: 40,
	bottom: "calc(var(--DataGrid-hasScrollX) * var(--DataGrid-scrollbarSize))"
});
function Ww(e) {
	return /* @__PURE__ */ E(Uw, L({}, e, {
		className: xt(Hw().root, U["container--bottom"]),
		role: "presentation"
	}));
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/constants/defaultGridSlotsComponents.js
var Gw = L({}, Oi, {
	cell: l_,
	skeletonCell: v_,
	columnHeaderFilterIconButton: $v,
	columnHeaderSortIcon: Zv,
	columnMenu: gy,
	columnHeaders: Rw,
	detailPanels: zw,
	bottomContainer: Ww,
	footer: cx,
	footerRowCount: Ox,
	toolbar: rx,
	pinnedRows: Bw,
	loadingOverlay: bx,
	noResultsOverlay: Vw,
	noRowsOverlay: xx,
	noColumnsOverlay: Sx,
	pagination: wx,
	filterPanel: Xy,
	columnsPanel: xy,
	columnsManagement: sb,
	panel: Ey,
	row: zx
}), Kw = {
	disableMultipleColumnsFiltering: !0,
	disableMultipleColumnsSorting: !0,
	throttleRowsMs: void 0,
	hideFooterRowCount: !1,
	pagination: !0,
	checkboxSelectionVisibleOnly: !1,
	disableColumnReorder: !0,
	keepColumnPositionIfDraggedOutside: !1,
	signature: "DataGrid",
	listView: !1
}, qw = (e) => L({}, Kw, e.dataSource ? {
	filterMode: "server",
	sortingMode: "server",
	paginationMode: "server"
} : {}), Jw = Gw, Yw = (e) => {
	let t = fe(), n = O.useMemo(() => wm({
		props: e,
		theme: t,
		name: "MuiDataGrid"
	}), [t, e]), r = O.useMemo(() => L({}, wo, n.localeText), [n.localeText]), i = O.useMemo(() => Zg({
		defaultSlots: Jw,
		slots: n.slots
	}), [n.slots]), a = O.useMemo(() => Object.keys(Mg).reduce((e, t) => (e[t] = n[t] ?? Mg[t], e), {}), [n]);
	return O.useMemo(() => L({}, n, a, {
		localeText: r,
		slots: i
	}, qw(n)), [
		n,
		r,
		i,
		a
	]);
}, Xw = class {
	maxListeners = 20;
	warnOnce = !1;
	events = {};
	on(e, t, n = {}) {
		let r = this.events[e];
		if (r || (r = {
			highPriority: /* @__PURE__ */ new Map(),
			regular: /* @__PURE__ */ new Map()
		}, this.events[e] = r), n.isFirst ? r.highPriority.set(t, !0) : r.regular.set(t, !0), process.env.NODE_ENV !== "production") {
			let t = r.highPriority.size + r.regular.size;
			t > this.maxListeners && !this.warnOnce && (this.warnOnce = !0, console.warn([`Possible EventEmitter memory leak detected. ${t} ${e} listeners added.`].join("\n")));
		}
	}
	removeListener(e, t) {
		this.events[e] && (this.events[e].regular.delete(t), this.events[e].highPriority.delete(t));
	}
	removeAllListeners() {
		this.events = {};
	}
	emit(e, ...t) {
		let n = this.events[e];
		if (!n) return;
		let r = Array.from(n.highPriority.keys()), i = Array.from(n.regular.keys());
		for (let e = r.length - 1; e >= 0; --e) {
			let i = r[e];
			n.highPriority.has(i) && i.apply(this, t);
		}
		for (let e = 0; e < i.length; e += 1) {
			let r = i[e];
			n.regular.has(r) && r.apply(this, t);
		}
	}
	once(e, t) {
		let n = this;
		this.on(e, function r(...i) {
			n.removeListener(e, r), t.apply(n, i);
		});
	}
}, Zw = Symbol("mui.api_private"), Qw = (e) => e.isPropagationStopped !== void 0, $w = 0;
function eT(e) {
	let t = e.current?.[Zw];
	if (t) return t;
	let n = {}, r = {
		state: n,
		store: Da.create(n),
		instanceId: { id: $w }
	};
	return $w += 1, r.getPublicApi = () => e.current, r.register = (t, n) => {
		Object.keys(n).forEach((i) => {
			let a = n[i], o = r[i];
			if (o?.spying === !0 ? o.target = a : r[i] = a, t === "public") {
				let t = e.current, n = t[i];
				n?.spying === !0 ? n.target = a : t[i] = a;
			}
		});
	}, r.register("private", {
		caches: {},
		eventManager: new Xw()
	}), r;
}
function tT(e) {
	return {
		get state() {
			return e.current.state;
		},
		get store() {
			return e.current.store;
		},
		get instanceId() {
			return e.current.instanceId;
		},
		[Zw]: e.current
	};
}
function nT(e, t) {
	let n = O.useRef(null), r = O.useRef(null);
	r.current ||= eT(n), n.current ||= tT(r);
	let i = O.useCallback((...e) => {
		let [n, i, a = {}] = e;
		if (a.defaultMuiPrevented = !1, Qw(a) && a.isPropagationStopped()) return;
		let o = t.signature === To.DataGridPro || t.signature === To.DataGridPremium ? { api: r.current.getPublicApi() } : {};
		r.current.eventManager.emit(n, i, a, o);
	}, [r, t.signature]);
	return pf(r, {
		subscribeEvent: O.useCallback((e, t, n) => {
			r.current.eventManager.on(e, t, n);
			let i = r.current;
			return () => {
				i.eventManager.removeListener(e, t);
			};
		}, [r]),
		publishEvent: i
	}, "public"), e && !e.current?.state && (e.current = n.current), O.useImperativeHandle(e, () => n.current, [n]), O.useEffect(() => {
		let e = r.current;
		return () => {
			e.publishEvent("unmount");
		};
	}, [r]), r;
}
//#endregion
//#region node_modules/@mui/x-data-grid/esm/DataGrid/DataGrid.js
var rT = { hooks: {
	useCSSVariables: ur,
	useGridAriaAttributes: Bx,
	useGridRowAriaAttributes: Vx,
	useGridRowsOverridableMethods: Hx,
	useGridParamsOverridableMethods: Ux,
	useIsCellEditable: Wx,
	useCellAggregationResult: () => null,
	useFilterValueGetter: (e) => e.current.getRowValue
} }, iT = function(e, t) {
	let n = Yw(e), r = nT(n.apiRef, n);
	return Tw(r, n, rT), process.env.NODE_ENV !== "production" && $g(n, Qg), /* @__PURE__ */ E(Gx, {
		privateApiRef: r,
		configuration: rT,
		props: n,
		children: /* @__PURE__ */ E(j_, L({
			className: n.className,
			style: n.style,
			sx: n.sx
		}, n.slotProps?.root, { ref: t }))
	});
};
process.env.NODE_ENV !== "production" && (iT.displayName = "DataGridRaw");
var aT = /* @__PURE__ */ O.memo(z(iT));
process.env.NODE_ENV !== "production" && (aT.displayName = "DataGrid"), iT.propTypes = {
	apiRef: q.default.shape({ current: q.default.object }),
	"aria-label": q.default.string,
	"aria-labelledby": q.default.string,
	autoHeight: q.default.bool,
	autoPageSize: q.default.bool,
	autosizeOnMount: q.default.bool,
	autosizeOptions: q.default.shape({
		columns: q.default.arrayOf(q.default.string),
		disableColumnVirtualization: q.default.bool,
		expand: q.default.bool,
		includeHeaders: q.default.bool,
		includeOutliers: q.default.bool,
		outliersFactor: q.default.number
	}),
	cellModesModel: q.default.object,
	checkboxSelection: q.default.bool,
	classes: q.default.object,
	className: q.default.string,
	clipboardCopyCellDelimiter: q.default.string,
	columnBufferPx: q.default.number,
	columnFilterDebounceMs: q.default.number,
	columnGroupHeaderHeight: q.default.number,
	columnGroupingModel: q.default.arrayOf(q.default.object),
	columnHeaderHeight: q.default.number,
	columns: q.default.arrayOf(q.default.object).isRequired,
	columnVisibilityModel: q.default.object,
	dataSource: q.default.shape({
		getRows: q.default.func.isRequired,
		updateRow: q.default.func
	}),
	dataSourceCache: q.default.shape({
		clear: q.default.func.isRequired,
		get: q.default.func.isRequired,
		set: q.default.func.isRequired
	}),
	dataSourceRevalidateMs: q.default.number,
	density: q.default.oneOf([
		"comfortable",
		"compact",
		"standard"
	]),
	disableAutosize: q.default.bool,
	disableColumnFilter: q.default.bool,
	disableColumnMenu: q.default.bool,
	disableColumnResize: q.default.bool,
	disableColumnSelector: q.default.bool,
	disableColumnSorting: q.default.bool,
	disableDensitySelector: q.default.bool,
	disableEval: q.default.bool,
	disableMultipleRowSelection: q.default.bool,
	disableRowSelectionExcludeModel: q.default.bool,
	disableRowSelectionOnClick: q.default.bool,
	disableVirtualization: q.default.bool,
	editMode: q.default.oneOf(["cell", "row"]),
	estimatedRowCount: q.default.number,
	experimentalFeatures: q.default.shape({ warnIfFocusStateIsNotSynced: q.default.bool }),
	filterDebounceMs: q.default.number,
	filterMode: q.default.oneOf(["client", "server"]),
	filterModel: q.default.shape({
		items: q.default.arrayOf(q.default.shape({
			field: q.default.string.isRequired,
			id: q.default.oneOfType([q.default.number, q.default.string]),
			operator: q.default.string.isRequired,
			value: q.default.any
		})).isRequired,
		logicOperator: q.default.oneOf(["and", "or"]),
		quickFilterExcludeHiddenColumns: q.default.bool,
		quickFilterLogicOperator: q.default.oneOf(["and", "or"]),
		quickFilterValues: q.default.array
	}),
	getCellClassName: q.default.func,
	getDetailPanelContent: q.default.func,
	getEstimatedRowHeight: q.default.func,
	getRowClassName: q.default.func,
	getRowHeight: q.default.func,
	getRowId: q.default.func,
	getRowSpacing: q.default.func,
	hideFooter: q.default.bool,
	hideFooterPagination: q.default.bool,
	hideFooterSelectedRowCount: q.default.bool,
	ignoreDiacritics: q.default.bool,
	ignoreValueFormatterDuringExport: q.default.oneOfType([q.default.shape({
		clipboardExport: q.default.bool,
		csvExport: q.default.bool
	}), q.default.bool]),
	initialState: q.default.object,
	isCellEditable: q.default.func,
	isRowSelectable: q.default.func,
	keepNonExistentRowsSelected: q.default.bool,
	label: q.default.string,
	loading: q.default.bool,
	localeText: q.default.object,
	logger: q.default.shape({
		debug: q.default.func.isRequired,
		error: q.default.func.isRequired,
		info: q.default.func.isRequired,
		warn: q.default.func.isRequired
	}),
	logLevel: q.default.oneOf([
		"debug",
		"error",
		"info",
		"warn",
		!1
	]),
	nonce: q.default.string,
	onCellClick: q.default.func,
	onCellDoubleClick: q.default.func,
	onCellEditStart: q.default.func,
	onCellEditStop: q.default.func,
	onCellKeyDown: q.default.func,
	onCellModesModelChange: q.default.func,
	onClipboardCopy: q.default.func,
	onColumnHeaderClick: q.default.func,
	onColumnHeaderContextMenu: q.default.func,
	onColumnHeaderDoubleClick: q.default.func,
	onColumnHeaderEnter: q.default.func,
	onColumnHeaderLeave: q.default.func,
	onColumnHeaderOut: q.default.func,
	onColumnHeaderOver: q.default.func,
	onColumnOrderChange: q.default.func,
	onColumnResize: q.default.func,
	onColumnVisibilityModelChange: q.default.func,
	onColumnWidthChange: q.default.func,
	onDataSourceError: q.default.func,
	onDensityChange: q.default.func,
	onFilterModelChange: q.default.func,
	onMenuClose: q.default.func,
	onMenuOpen: q.default.func,
	onPaginationMetaChange: q.default.func,
	onPaginationModelChange: q.default.func,
	onPreferencePanelClose: q.default.func,
	onPreferencePanelOpen: q.default.func,
	onProcessRowUpdateError: q.default.func,
	onResize: q.default.func,
	onRowClick: q.default.func,
	onRowCountChange: q.default.func,
	onRowDoubleClick: q.default.func,
	onRowEditStart: q.default.func,
	onRowEditStop: q.default.func,
	onRowModesModelChange: q.default.func,
	onRowSelectionModelChange: q.default.func,
	onSortModelChange: q.default.func,
	onStateChange: q.default.func,
	pageSizeOptions: q.default.arrayOf(q.default.oneOfType([q.default.number, q.default.shape({
		label: q.default.string.isRequired,
		value: q.default.number.isRequired
	})]).isRequired),
	pagination: q.default.oneOf([!0]),
	paginationMeta: q.default.shape({ hasNextPage: q.default.bool }),
	paginationMode: q.default.oneOf(["client", "server"]),
	paginationModel: q.default.shape({
		page: q.default.number.isRequired,
		pageSize: q.default.number.isRequired
	}),
	processRowUpdate: q.default.func,
	resizeThrottleMs: q.default.number,
	rowBufferPx: q.default.number,
	rowCount: q.default.number,
	rowHeight: q.default.number,
	rowModesModel: q.default.object,
	rows: q.default.arrayOf(q.default.object),
	rowSelection: q.default.bool,
	rowSelectionModel: q.default.shape({
		ids: q.default.instanceOf(Set).isRequired,
		type: q.default.oneOf(["exclude", "include"]).isRequired
	}),
	rowSpacingType: q.default.oneOf(["border", "margin"]),
	rowSpanning: q.default.bool,
	scrollbarSize: q.default.number,
	showCellVerticalBorder: q.default.bool,
	showColumnVerticalBorder: q.default.bool,
	showToolbar: q.default.bool,
	slotProps: q.default.object,
	slots: q.default.object,
	sortingMode: q.default.oneOf(["client", "server"]),
	sortingOrder: q.default.arrayOf(q.default.oneOf(["asc", "desc"])),
	sortModel: q.default.arrayOf(q.default.shape({
		field: q.default.string.isRequired,
		sort: q.default.oneOf(["asc", "desc"])
	})),
	style: q.default.object,
	sx: q.default.oneOfType([
		q.default.arrayOf(q.default.oneOfType([
			q.default.func,
			q.default.object,
			q.default.bool
		])),
		q.default.func,
		q.default.object
	]),
	virtualizeColumnsWithAutoRowHeight: q.default.bool
};
//#endregion
//#region src/utility/validation.js
var oT = (e) => {
	if (e === null) return !0;
	let t = typeof e;
	return t === "string" || t === "number" || t === "boolean" || t === "undefined" || t === "symbol" || t === "bigint" || t === "int";
}, sT = (e) => e == null, cT = (e, t) => sT(e) ? "" : e.toLowerCase().split(t).map((e) => e.charAt(0).toUpperCase() + e.slice(1)).join(" "), lT = "Values", uT = "Containers", dT = (e, t, n, r) => {
	let i = r || {
		[lT]: /* @__PURE__ */ new Map(),
		[uT]: /* @__PURE__ */ new Map()
	}, a = e ? t : "root", o = {
		parent: e,
		path: a,
		value: n,
		children: [],
		root: e ? e.root : null,
		containerIndex: i
	};
	return e || (o.root = o), i[lT].set(a, n), i[uT].set(a, o), Object.freeze(o);
}, fT = (e, t, n) => {
	let r = dT(e, t, n, e.containerIndex);
	return {
		...e,
		children: [...e.children, r]
	};
}, pT = (e, t) => e.containerIndex[uT].get(t), mT = (e, t) => {
	for (let [n, r] of e.containerIndex[lT].entries()) t(n, r);
}, hT = (e, t) => {
	for (let [, n] of e.containerIndex[uT].entries()) t(n);
}, gT = (e, t, n = 2) => {
	mT(e, (e, r) => {
		let i = Object.keys(r);
		for (let a = 0; a < i.length; a++) {
			let o = e.split(".");
			o.push(i[a]);
			let s = o.slice(2).join("."), c = r[i[a]];
			o.length > n && oT(c) && t({
				i: a,
				value: c,
				path: s,
				fullpath: o.join("."),
				key: e,
				containerValue: r
			});
		}
	});
}, _T = (e, t, n, r) => {
	if (!e || !t) return e;
	let i = e.containerIndex[uT].get(t);
	if (!i) return console.warn(`Container at path "${t}" not found.`), e;
	let a = {};
	a[n] = r;
	let o = {
		...i.value,
		...a
	}, s = dT(i.parent, i.path, o, e.containerIndex);
	e.containerIndex[uT].set(t, s), e.containerIndex[lT].set(t, o);
	let c = s;
	for (; c.parent;) {
		let t = c.parent, n = t.children.map((e) => e.path === c.path ? c : e), r = c.path.split("."), i = r.slice(r.length - 1), a = { ...e.containerIndex[lT].get(t.path) };
		a[i] = o;
		let s = Object.freeze({
			...t,
			children: n,
			value: a
		});
		e.containerIndex[uT].set(s.path, s), c = s;
	}
	return e.containerIndex[uT].get("root");
}, vT = (e = null, t = [], n = "_", ...r) => {
	e === null && (e = dT(null, "root", r.length === 0 ? {} : r[0]), t = ["root"]);
	let i = (e, t) => {
		let r = e.value;
		return typeof r == "object" && r && (Array.isArray(r) ? r.forEach((r, a) => {
			if (typeof r == "object" && r) {
				let o = [...t, String(a)];
				i(fT(e, o.join(n), r).children.at(-1), o);
			}
		}) : Object.entries(r).forEach(([r, a]) => {
			if (typeof a == "object" && a) {
				let o = [...t, r];
				i(fT(e, o.join(n), a).children.at(-1), o);
			}
		})), e;
	};
	return i(e, t);
}, yT = ({ inputKey: e, inputProps: t }) => {
	let n = Object.keys(t.defaultValue)[0], r = t.defaultValue[n], [i, a] = ce(/* @__PURE__ */ E(l, {
		type: "text",
		onChange: t.onChange,
		defaultValue: r
	})), o = (e, n) => {
		a(k.cloneElement(i, {
			...t,
			defaultValue: r,
			name: e + "." + n
		}));
	}, [s, c] = ce(/* @__PURE__ */ E(l, {
		type: "text",
		...t,
		defaultValue: n,
		onChange: (t) => o(e, t.target.value)
	}));
	return F(() => {
		o(e, n);
	}, []), /* @__PURE__ */ D(g, {
		direction: "horizontal",
		gap: 2,
		children: [s, i]
	});
}, bT = N(null);
function xT(e, t) {
	let n = null;
	return e != null && (n = e[1]), { getTheme: function() {
		return t ?? (n == null ? null : n.getTheme());
	} };
}
function ST() {
	let e = ne(bT);
	return e ?? function(e, ...t) {
		let n = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
		r.append("code", e);
		for (let e of t) r.append("v", e);
		throw n.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
	}(8), e;
}
//#endregion
//#region node_modules/lexical/Lexical.prod.mjs
function J(e, ...t) {
	let n = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
	r.append("code", e);
	for (let e of t) r.append("v", e);
	throw n.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
function CT(e, ...t) {
	let n = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
	r.append("code", e);
	for (let e of t) r.append("v", e);
	n.search = r.toString(), console.warn(`Minified Lexical warning #${e}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
var wT = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, TT = wT && "documentMode" in document ? document.documentMode : null, ET = wT && /Mac|iPod|iPhone|iPad/.test(navigator.platform), DT = wT && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent), OT = !(!wT || !("InputEvent" in window) || TT) && "getTargetRanges" in new window.InputEvent("input"), kT = wT && /Version\/[\d.]+.*Safari/.test(navigator.userAgent), AT = wT && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, jT = wT && /Android/.test(navigator.userAgent), MT = wT && /^(?=.*Chrome).*/i.test(navigator.userAgent), NT = wT && jT && MT, PT = wT && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && ET && !MT, FT = 0, IT = 1, LT = 2, RT = 1, zT = 2, BT = 3, VT = 4, HT = 5, UT = 6, WT = kT || AT || PT ? "\xA0" : "​", GT = "\n\n", KT = DT ? "\xA0" : WT, qT = {
	bold: 1,
	capitalize: 1024,
	code: 16,
	highlight: 128,
	italic: 2,
	lowercase: 256,
	strikethrough: 4,
	subscript: 32,
	superscript: 64,
	underline: 8,
	uppercase: 512
}, JT = {
	directionless: 1,
	unmergeable: 2
}, YT = {
	center: 2,
	end: 6,
	justify: 4,
	left: 1,
	right: 3,
	start: 5
}, XT = {
	[zT]: "center",
	[UT]: "end",
	[VT]: "justify",
	[RT]: "left",
	[BT]: "right",
	[HT]: "start"
}, ZT = {
	normal: 0,
	segmented: 2,
	token: 1
}, QT = {
	[FT]: "normal",
	[LT]: "segmented",
	[IT]: "token"
}, $T = "$config";
function eE(e, t, n, r, i, a) {
	let o = e.getFirstChild();
	for (; o !== null;) {
		let e = o.__key;
		o.__parent === t && (Q(o) && eE(o, e, n, r, i, a), n.has(e) || a.delete(e), i.push(e)), o = o.getNextSibling();
	}
}
var tE = !1, nE = 0;
function rE(e) {
	nE = e.timeStamp;
}
function iE(e, t, n) {
	let r = e.nodeName === "BR", i = t.__lexicalLineBreak;
	return i && (e === i || r && e.previousSibling === i) || r && sj(e, n) !== void 0;
}
function aE(e, t, n) {
	let r = Xj(Hj(n)), i = null, a = null;
	r !== null && r.anchorNode === e && (i = r.anchorOffset, a = r.focusOffset);
	let o = e.nodeValue;
	o !== null && bj(t, o, i, a, !1);
}
function oE(e, t, n) {
	if (X(e)) {
		let t = e.anchor.getNode();
		if (t.is(n) && e.format !== t.getFormat()) return !1;
	}
	return XA(t) && n.isAttached();
}
function sE(e, t, n, r) {
	for (let i = e; i && !dM(i); i = Ij(i)) {
		let e = sj(i, t);
		if (e !== void 0) {
			let t = aj(e, n);
			if (t) return yA(t) || !Qj(i) ? void 0 : [i, t];
		} else if (i === r) return [r, fj(n)];
	}
}
function cE(e, t, n) {
	tE = !0;
	let r = performance.now() - nE > 100;
	try {
		pA(e, () => {
			let i = Z() || function(e) {
				return e.getEditorState().read(() => {
					let e = Z();
					return e === null ? null : e.clone();
				});
			}(e), a = /* @__PURE__ */ new Map(), o = e.getRootElement(), s = e._editorState, c = e._blockCursorElement, l = !1, u = "";
			for (let n = 0; n < t.length; n++) {
				let d = t[n], f = d.type, p = d.target, m = sE(p, e, s, o);
				if (!m) continue;
				let [h, g] = m;
				if (f === "characterData") r && Y(g) && XA(p) && oE(i, p, g) && aE(p, g, e);
				else if (f === "childList") {
					l = !0;
					let t = d.addedNodes;
					for (let n = 0; n < t.length; n++) {
						let r = t[n], i = oj(r), a = r.parentNode;
						if (a != null && r !== c && i === null && !iE(r, a, e)) {
							if (DT) {
								let e = (Qj(r) ? r.innerText : null) || r.nodeValue;
								e && (u += e);
							}
							a.removeChild(r);
						}
					}
					let n = d.removedNodes, r = n.length;
					if (r > 0) {
						let t = 0;
						for (let i = 0; i < r; i++) {
							let r = n[i];
							(iE(r, p, e) || c === r) && (p.appendChild(r), t++);
						}
						r !== t && a.set(h, g);
					}
				}
			}
			if (a.size > 0) for (let [t, n] of a) n.reconcileObservedMutation(t, e);
			let d = n.takeRecords();
			if (d.length > 0) {
				for (let t = 0; t < d.length; t++) {
					let n = d[t], r = n.addedNodes, i = n.target;
					for (let t = 0; t < r.length; t++) {
						let n = r[t], a = n.parentNode;
						a == null || n.nodeName !== "BR" || iE(n, i, e) || a.removeChild(n);
					}
				}
				n.takeRecords();
			}
			i !== null && (l && pj(i), DT && Pj(e) && i.insertRawText(u));
		});
	} finally {
		tE = !1;
	}
}
function lE(e) {
	let t = e._observer;
	t !== null && cE(e, t.takeRecords(), t);
}
function uE(e) {
	(function(e) {
		nE === 0 && Hj(e).addEventListener("textInput", rE, !0);
	})(e), e._observer = new MutationObserver((t, n) => {
		cE(e, t, n);
	});
}
var dE = class {
	key;
	parse;
	unparse;
	isEqual;
	defaultValue;
	constructor(e, t) {
		this.key = e, this.parse = t.parse.bind(t), this.unparse = (t.unparse || vE).bind(t), this.isEqual = (t.isEqual || Object.is).bind(t), this.defaultValue = this.parse(void 0);
	}
};
function fE(e, t) {
	return new dE(e, t);
}
function pE(e) {
	let t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set();
	for (let r = typeof e == "function" ? e : e.replace; r.prototype && r.prototype.getType !== void 0; r = Object.getPrototypeOf(r)) {
		let { ownNodeConfig: e } = pM(r);
		if (e && e.stateConfigs) for (let r of e.stateConfigs) {
			let e;
			"stateConfig" in r ? (e = r.stateConfig, r.flat && n.add(e.key)) : e = r, t.set(e.key, e);
		}
	}
	return {
		flatKeys: n,
		sharedConfigMap: t
	};
}
var mE = class e {
	node;
	knownState;
	unknownState;
	sharedNodeState;
	size;
	constructor(e, t, n = void 0, r = /* @__PURE__ */ new Map(), i = void 0) {
		this.node = e, this.sharedNodeState = t, this.unknownState = n, this.knownState = r;
		let { sharedConfigMap: a } = this.sharedNodeState;
		this.size = i === void 0 ? function(e, t, n) {
			let r = n.size;
			if (t) for (let i in t) {
				let t = e.get(i);
				t && n.has(t) || r++;
			}
			return r;
		}(a, n, r) : i;
	}
	getValue(e) {
		let t = this.knownState.get(e);
		if (t !== void 0) return t;
		this.sharedNodeState.sharedConfigMap.set(e.key, e);
		let n = e.defaultValue;
		if (this.unknownState && e.key in this.unknownState) {
			let t = this.unknownState[e.key];
			t !== void 0 && (n = e.parse(t)), this.updateFromKnown(e, n);
		}
		return n;
	}
	getInternalState() {
		return [this.unknownState, this.knownState];
	}
	toJSON() {
		let e = { ...this.unknownState }, t = {};
		for (let [t, n] of this.knownState) t.isEqual(n, t.defaultValue) ? delete e[t.key] : e[t.key] = t.unparse(n);
		for (let n of this.sharedNodeState.flatKeys) n in e && (t[n] = e[n], delete e[n]);
		return _E(e) && (t.$ = e), t;
	}
	getWritable(t) {
		if (this.node === t) return this;
		let { sharedNodeState: n, unknownState: r } = this, i = new Map(this.knownState);
		return new e(t, n, function(e, t, n) {
			let r;
			if (n) for (let [i, a] of Object.entries(n)) {
				let n = e.get(i);
				n ? t.has(n) || t.set(n, n.parse(a)) : (r ||= {}, r[i] = a);
			}
			return r;
		}(n.sharedConfigMap, i, r), i, this.size);
	}
	updateFromKnown(e, t) {
		let n = e.key;
		this.sharedNodeState.sharedConfigMap.set(n, e);
		let { knownState: r, unknownState: i } = this;
		r.has(e) || i && n in i || (i && (delete i[n], this.unknownState = _E(i)), this.size++), r.set(e, t);
	}
	updateFromUnknown(e, t) {
		let n = this.sharedNodeState.sharedConfigMap.get(e);
		n ? this.updateFromKnown(n, n.parse(t)) : (this.unknownState = this.unknownState || {}, e in this.unknownState || this.size++, this.unknownState[e] = t);
	}
	updateFromJSON(e) {
		let { knownState: t } = this;
		for (let e of t.keys()) t.set(e, e.defaultValue);
		if (this.size = t.size, this.unknownState = void 0, e) for (let [t, n] of Object.entries(e)) this.updateFromUnknown(t, n);
	}
};
function hE(e) {
	let t = e.getWritable(), n = t.__state ? t.__state.getWritable(t) : new mE(t, gE(t));
	return t.__state = n, n;
}
function gE(e) {
	return e.__state ? e.__state.sharedNodeState : zA(iM(), e.getType()).sharedNodeState;
}
function _E(e) {
	if (e) for (let t in e) return e;
}
function vE(e) {
	return e;
}
function yE(e, t, n) {
	for (let [r, i] of t.knownState) {
		if (e.has(r.key)) continue;
		e.add(r.key);
		let t = n ? n.getValue(r) : r.defaultValue;
		if (t !== i && !r.isEqual(t, i)) return !0;
	}
	return !1;
}
function bE(e, t, n) {
	let { unknownState: r } = t, i = n ? n.unknownState : void 0;
	if (r) {
		for (let [t, n] of Object.entries(r)) if (!e.has(t) && (e.add(t), n !== (i ? i[t] : void 0))) return !0;
	}
	return !1;
}
function xE(e, t) {
	let n = e.__state;
	return n && n.node === e ? n.getWritable(t) : n;
}
function SE(e, t) {
	let n = e.__mode, r = e.__format, i = e.__style, a = t.__mode, o = t.__format, s = t.__style, c = e.__state, l = t.__state;
	return (n === null || n === a) && (r === null || r === o) && (i === null || i === s) && (e.__state === null || c === l || function(e, t) {
		if (e === t) return !0;
		if (e && t && e.size !== t.size) return !1;
		let n = /* @__PURE__ */ new Set();
		return !(e && yE(n, e, t) || t && yE(n, t, e) || e && bE(n, e, t) || t && bE(n, t, e));
	}(c, l));
}
function CE(e, t) {
	let n = e.mergeWithSibling(t), r = eA()._normalizedNodes;
	return r.add(e.__key), r.add(t.__key), n;
}
function wE(e) {
	let t, n, r = e;
	if (r.__text !== "" || !r.isSimpleText() || r.isUnmergeable()) {
		for (; (t = r.getPreviousSibling()) !== null && Y(t) && t.isSimpleText() && !t.isUnmergeable();) {
			if (t.__text !== "") {
				if (SE(t, r)) {
					r = CE(t, r);
					break;
				}
				break;
			}
			t.remove();
		}
		for (; (n = r.getNextSibling()) !== null && Y(n) && n.isSimpleText() && !n.isUnmergeable();) {
			if (n.__text !== "") {
				if (SE(r, n)) {
					r = CE(r, n);
					break;
				}
				break;
			}
			n.remove();
		}
	} else r.remove();
}
function TE(e) {
	return EE(e.anchor), EE(e.focus), e;
}
function EE(e) {
	for (; e.type === "element";) {
		let t = e.getNode(), n = e.offset, r, i;
		if (n === t.getChildrenSize() ? (r = t.getChildAtIndex(n - 1), i = !0) : (r = t.getChildAtIndex(n), i = !1), Y(r)) {
			e.set(r.__key, i ? r.getTextContentSize() : 0, "text", !0);
			break;
		}
		if (!Q(r)) break;
		e.set(r.__key, i ? r.getChildrenSize() : 0, "element", !0);
	}
}
var DE, OE, kE, AE, jE, ME, NE, PE, FE, IE, LE = "", RE = null, zE = null, BE = !1, VE = !1;
function HE(e, t) {
	let n = NE.get(e);
	if (t !== null) {
		let n = oD(e);
		n.parentNode === t && t.removeChild(n);
	}
	if (PE.has(e) || OE._keyToDOMMap.delete(e), Q(n)) {
		let e = eD(n, NE);
		UE(e, 0, e.length - 1, null);
	}
	n !== void 0 && jj(IE, kE, AE, n, "destroyed");
}
function UE(e, t, n, r) {
	for (let i = t; i <= n; ++i) {
		let t = e[i];
		t !== void 0 && HE(t, r);
	}
}
function WE(e, t) {
	e.setProperty("text-align", t);
}
var GE = "40px";
function KE(e, t) {
	let n = DE.theme.indent;
	if (typeof n == "string") {
		let r = e.classList.contains(n);
		t > 0 && !r ? e.classList.add(n) : t < 1 && r && e.classList.remove(n);
	}
	if (t === 0) return void e.style.setProperty("padding-inline-start", "");
	let r = getComputedStyle(OE._rootElement || e).getPropertyValue("--lexical-indent-base-value") || GE;
	e.style.setProperty("padding-inline-start", `calc(${t} * ${r})`);
}
function qE(e, t) {
	let n = e.style;
	t === 0 ? WE(n, "") : t === 1 ? WE(n, "left") : t === 2 ? WE(n, "center") : t === 3 ? WE(n, "right") : t === 4 ? WE(n, "justify") : t === 5 ? WE(n, "start") : t === 6 && WE(n, "end");
}
function JE(e, t) {
	let n = function(e) {
		let t = e.__dir;
		if (t !== null) return t;
		if (xA(e)) return null;
		let n = e.getParentOrThrow();
		return xA(n) && n.__dir === null ? "auto" : null;
	}(t);
	n === null ? e.removeAttribute("dir") : e.dir = n;
}
function YE(e, t) {
	let n = PE.get(e);
	n === void 0 && J(60);
	let r = n.createDOM(DE, OE);
	if (function(e, t, n) {
		let r = n._keyToDOMMap;
		(function(e, t, n) {
			let r = `__lexicalKey_${t._key}`;
			e[r] = n;
		})(t, n, e), r.set(e, t);
	}(e, r, OE), Y(n) ? r.setAttribute("data-lexical-text", "true") : yA(n) && r.setAttribute("data-lexical-decorator", "true"), Q(n)) {
		let e = n.__indent, t = n.__size;
		if (JE(r, n), e !== 0 && KE(r, e), t !== 0) {
			let e = t - 1;
			XE(eD(n, PE), n, 0, e, n.getDOMSlot(r));
		}
		let i = n.__format;
		i !== 0 && qE(r, i), n.isInline() || QE(null, n, r);
	} else {
		let t = n.getTextContent();
		if (yA(n)) {
			let t = n.decorate(OE, DE);
			t !== null && nD(e, t), r.contentEditable = "false";
		}
		LE += t;
	}
	return t !== null && t.insertChild(r), jj(IE, kE, AE, n, "created"), r;
}
function XE(e, t, n, r, i) {
	let a = LE;
	LE = "";
	let o = n;
	for (; o <= r; ++o) {
		YE(e[o], i);
		let t = PE.get(e[o]);
		t !== null && Y(t) ? RE === null && (RE = t.getFormat(), zE = t.getStyle()) : Q(t) && o < r && !t.isInline() && (LE += GT);
	}
	i.element.__lexicalTextContent = LE, LE = a + LE;
}
function ZE(e, t) {
	if (e) {
		let n = e.__last;
		if (n) {
			let e = t.get(n);
			if (e) return UO(e) ? "line-break" : yA(e) && e.isInline() ? "decorator" : null;
		}
		return "empty";
	}
	return null;
}
function QE(e, t, n) {
	let r = ZE(e, NE), i = ZE(t, PE);
	r !== i && t.getDOMSlot(n).setManagedLineBreak(i);
}
function $E(e, t, n) {
	var r;
	RE = null, zE = null, function(e, t, n) {
		let r = LE, i = e.__size, a = t.__size;
		LE = "";
		let o = n.element;
		if (i === 1 && a === 1) {
			let n = e.__first, r = t.__first;
			if (n === r) tD(n, o);
			else {
				let e = oD(n), t = YE(r, null);
				try {
					o.replaceChild(t, e);
				} catch (i) {
					if (typeof i == "object" && i) {
						let a = `${i.toString()} Parent: ${o.tagName}, new child: {tag: ${t.tagName} key: ${r}}, old child: {tag: ${e.tagName}, key: ${n}}.`;
						throw Error(a);
					}
					throw i;
				}
				HE(n, null);
			}
			let i = PE.get(r);
			Y(i) && RE === null && (RE = i.getFormat(), zE = i.getStyle());
		} else {
			let r = eD(e, NE), s = eD(t, PE);
			if (r.length !== i && J(227), s.length !== a && J(228), i === 0) a !== 0 && XE(s, 0, 0, a - 1, n);
			else if (a === 0) {
				if (i !== 0) {
					let e = n.after == null && n.before == null && n.element.__lexicalLineBreak == null;
					UE(r, 0, i - 1, e ? null : o), e && (o.textContent = "");
				}
			} else (function(e, t, n, r, i, a) {
				let o = r - 1, s = i - 1, c, l, u = a.getFirstChild(), d = 0, f = 0;
				for (; d <= o && f <= s;) {
					let e = t[d], r = n[f];
					if (e === r) u = rD(tD(r, a.element)), d++, f++;
					else {
						if (l === void 0 && (l = iD(n, f)), c === void 0) c = iD(t, d);
						else if (!c.has(e)) {
							d++;
							continue;
						}
						if (!l.has(e)) {
							u = rD(oD(e)), HE(e, a.element), d++, c.delete(e);
							continue;
						}
						if (c.has(r)) {
							let e = Fj(OE, r);
							e !== u && a.withBefore(u).insertChild(e), u = rD(tD(r, a.element)), d++, f++;
						} else YE(r, a.withBefore(u)), f++;
					}
					let i = PE.get(r);
					i !== null && Y(i) ? RE === null && (RE = i.getFormat(), zE = i.getStyle()) : Q(i) && f <= s && !i.isInline() && (LE += GT);
				}
				let p = d > o, m = f > s;
				if (p && !m) {
					let e = n[s + 1], t = e === void 0 ? null : OE.getElementByKey(e);
					XE(n, 0, f, s, a.withBefore(t));
				} else m && !p && UE(t, d, o, a.element);
			})(0, r, s, i, a, n);
		}
		o.__lexicalTextContent = LE, LE = r + LE;
	}(e, t, t.getDOMSlot(n)), r = t, RE == null || RE === r.__textFormat || VE || r.setTextFormat(RE), function(e) {
		zE == null || zE === e.__textStyle || VE || e.setTextStyle(zE);
	}(t);
}
function eD(e, t) {
	let n = [], r = e.__first;
	for (; r !== null;) {
		let e = t.get(r);
		e === void 0 && J(101), n.push(r), r = e.__next;
	}
	return n;
}
function tD(e, t) {
	let n = NE.get(e), r = PE.get(e);
	n !== void 0 && r !== void 0 || J(61);
	let i = BE || ME.has(e) || jE.has(e), a = Fj(OE, e);
	if (n === r && !i) {
		let e;
		if (Q(n)) {
			let t = a.__lexicalTextContent;
			typeof t == "string" ? e = t : (e = n.getTextContent(), a.__lexicalTextContent = e);
		} else e = n.getTextContent();
		return LE += e, a;
	}
	if (n !== r && i && jj(IE, kE, AE, r, "updated"), r.updateDOM(n, a, DE)) {
		let n = YE(e, null);
		return t === null && J(62), t.replaceChild(n, a), HE(e, null), n;
	}
	if (Q(n)) {
		Q(r) || J(334, e);
		let t = r.__indent;
		(BE || t !== n.__indent) && KE(a, t);
		let o = r.__format;
		if ((BE || o !== n.__format) && qE(a, o), i) $E(n, r, a), xA(r) || r.isInline() || QE(n, r, a);
		else {
			let e = a.__lexicalTextContent, t;
			typeof e == "string" ? t = e : (t = n.getTextContent(), a.__lexicalTextContent = t), LE += t;
		}
		if ((BE || r.__dir !== n.__dir) && (JE(a, r), xA(r) && !BE)) for (let e of r.getChildren()) Q(e) && JE(Fj(OE, e.getKey()), e);
	} else {
		let t = r.getTextContent();
		if (yA(r)) {
			let t = r.decorate(OE, DE);
			t !== null && nD(e, t);
		}
		LE += t;
	}
	if (!VE && xA(r) && r.__cachedText !== LE) {
		let e = r.getWritable();
		e.__cachedText = LE, r = e;
	}
	return a;
}
function nD(e, t) {
	let n = OE._pendingDecorators, r = OE._decorators;
	if (n === null) {
		if (r[e] === t) return;
		n = lj(OE);
	}
	n[e] = t;
}
function rD(e) {
	let t = e.nextSibling;
	return t !== null && t === OE._blockCursorElement && (t = t.nextSibling), t;
}
function iD(e, t) {
	let n = /* @__PURE__ */ new Set();
	for (let r = t; r < e.length; r++) n.add(e[r]);
	return n;
}
function aD(e, t, n, r, i, a) {
	LE = "", BE = r === 2, OE = n, DE = n._config, kE = n._nodes, AE = OE._listeners.mutation, jE = i, ME = a, NE = e._nodeMap, PE = t._nodeMap, VE = t._readOnly, FE = new Map(n._keyToDOMMap);
	let o = /* @__PURE__ */ new Map();
	return IE = o, tD("root", null), OE = void 0, kE = void 0, jE = void 0, ME = void 0, NE = void 0, PE = void 0, DE = void 0, FE = void 0, IE = void 0, o;
}
function oD(e) {
	let t = FE.get(e);
	return t === void 0 && J(75, e), t;
}
function sD(e) {
	return { type: e };
}
var cD = sD("SELECTION_CHANGE_COMMAND"), lD = sD("SELECTION_INSERT_CLIPBOARD_NODES_COMMAND"), uD = sD("CLICK_COMMAND"), dD = sD("BEFORE_INPUT_COMMAND"), fD = sD("INPUT_COMMAND"), pD = sD("COMPOSITION_START_COMMAND"), mD = sD("COMPOSITION_END_COMMAND"), hD = sD("DELETE_CHARACTER_COMMAND"), gD = sD("INSERT_LINE_BREAK_COMMAND"), _D = sD("INSERT_PARAGRAPH_COMMAND"), vD = sD("CONTROLLED_TEXT_INSERTION_COMMAND"), yD = sD("PASTE_COMMAND"), bD = sD("REMOVE_TEXT_COMMAND"), xD = sD("DELETE_WORD_COMMAND"), SD = sD("DELETE_LINE_COMMAND"), CD = sD("FORMAT_TEXT_COMMAND"), wD = sD("UNDO_COMMAND"), TD = sD("REDO_COMMAND"), ED = sD("KEYDOWN_COMMAND"), DD = sD("KEY_ARROW_RIGHT_COMMAND"), OD = sD("MOVE_TO_END"), kD = sD("KEY_ARROW_LEFT_COMMAND"), AD = sD("MOVE_TO_START"), jD = sD("KEY_ARROW_UP_COMMAND"), MD = sD("KEY_ARROW_DOWN_COMMAND"), ND = sD("KEY_ENTER_COMMAND"), PD = sD("KEY_SPACE_COMMAND"), FD = sD("KEY_BACKSPACE_COMMAND"), ID = sD("KEY_ESCAPE_COMMAND"), LD = sD("KEY_DELETE_COMMAND"), RD = sD("KEY_TAB_COMMAND"), zD = sD("INSERT_TAB_COMMAND"), BD = sD("INDENT_CONTENT_COMMAND"), VD = sD("OUTDENT_CONTENT_COMMAND"), HD = sD("DROP_COMMAND"), UD = sD("FORMAT_ELEMENT_COMMAND"), WD = sD("DRAGSTART_COMMAND"), GD = sD("DRAGOVER_COMMAND"), KD = sD("DRAGEND_COMMAND"), qD = sD("COPY_COMMAND"), JD = sD("CUT_COMMAND"), YD = sD("SELECT_ALL_COMMAND"), XD = sD("FOCUS_COMMAND"), ZD = sD("BLUR_COMMAND"), QD = sD("KEY_MODIFIER_COMMAND"), $D = Object.freeze({}), eO = [
	["keydown", function(e, t) {
		tO = e.timeStamp, nO = e.key, !t.isComposing() && $(t, ED, e);
	}],
	["pointerdown", function(e, t) {
		let n = e.target, r = e.pointerType;
		$j(n) && r !== "touch" && r !== "pen" && e.button === 0 && pA(t, () => {
			HA(n) || (cO = !0);
		});
	}],
	["compositionstart", function(e, t) {
		$(t, pD, e);
	}],
	["compositionend", function(e, t) {
		DT ? uO = !0 : AT || !kT && !PT ? $(t, mD, e) : (dO = !0, fO = e.data);
	}],
	["input", function(e, t) {
		e.stopPropagation(), pA(t, () => {
			t.dispatchCommand(fD, e);
		}, { event: e }), iO = null;
	}],
	["click", function(e, t) {
		pA(t, () => {
			let n = Z(), r = Xj(Hj(t)), i = Mk();
			if (r) {
				if (X(n)) {
					let t = n.anchor, a = t.getNode();
					if (t.type === "element" && t.offset === 0 && n.isCollapsed() && !xA(a) && dj().getChildrenSize() === 1 && a.getTopLevelElementOrThrow().isEmpty() && i !== null && n.is(i)) r.removeAllRanges(), n.dirty = !0;
					else if (e.detail === 3 && !n.isCollapsed() && a !== n.focus.getNode()) {
						let e = hM(a, (e) => Q(e) && !e.isInline());
						Q(e) && e.select(0);
					}
				} else if (e.pointerType === "touch" || e.pointerType === "pen") {
					let n = r.anchorNode;
					(Qj(n) || XA(n)) && pj(jk(i, r, t, e));
				}
			}
			$(t, uD, e);
		});
	}],
	["cut", $D],
	["copy", $D],
	["dragstart", $D],
	["dragover", $D],
	["dragend", $D],
	["paste", $D],
	["focus", $D],
	["blur", $D],
	["drop", $D]
];
OT && eO.push(["beforeinput", (e, t) => function(e, t) {
	let n = e.inputType;
	n === "deleteCompositionText" || DT && Pj(t) || n !== "insertCompositionText" && $(t, dD, e);
}(e, t)]);
var tO = 0, nO = null, rO = 0, iO = null, aO = /* @__PURE__ */ new WeakMap(), oO = /* @__PURE__ */ new WeakMap(), sO = !1, cO = !1, lO = !1, uO = !1, dO = !1, fO = "", pO = null, mO = [
	0,
	"",
	0,
	"root",
	0
];
function hO(e, t, n, r, i) {
	let a = e.anchor, o = e.focus, s = a.getNode(), c = eA(), l = Xj(Hj(c)), u = l === null ? null : l.anchorNode, d = a.key, f = c.getElementByKey(d), p = n.length;
	return d !== o.key || !Y(s) || (!i && (!OT || rO < r + 50) || s.isDirty() && p < 2 || hj(n)) && a.offset !== o.offset && !s.isComposing() || YA(s) || s.isDirty() && p > 1 || (i || !OT) && f !== null && !s.isComposing() && u !== QA(f) || l !== null && t !== null && (!t.collapsed || t.startContainer !== l.anchorNode || t.startOffset !== l.anchorOffset) || !s.isComposing() && (s.getFormat() !== e.format || s.getStyle() !== e.style) || function(e, t) {
		if (t.isSegmented()) return !0;
		if (!e.isCollapsed()) return !1;
		let n = e.anchor.offset, r = t.getParentOrThrow(), i = JA(t);
		return n === 0 ? !t.canInsertTextBefore() || !r.canInsertTextBefore() && !t.isComposing() || i || function(e) {
			let t = e.getPreviousSibling();
			return (Y(t) || Q(t) && t.isInline()) && !t.canInsertTextAfter();
		}(t) : n === t.getTextContentSize() && (!t.canInsertTextAfter() || !r.canInsertTextAfter() && !t.isComposing() || i);
	}(e, s);
}
function gO(e, t) {
	return XA(e) && e.nodeValue !== null && t !== 0 && t !== e.nodeValue.length;
}
function _O(e, t, n) {
	let { anchorNode: r, anchorOffset: i, focusNode: a, focusOffset: o } = e;
	sO && (sO = !1, gO(r, i) && gO(a, o) && !pO) || pA(t, () => {
		if (!n) return void pj(null);
		if (!WA(t, r, a)) return;
		let s = Z();
		if (pO && X(s) && s.isCollapsed()) {
			let e = s.anchor, t = pO.anchor;
			(e.key === t.key && e.offset === t.offset + 1 || e.offset === 1 && t.getNode().is(e.getNode().getPreviousSibling())) && (s = pO.clone(), pj(s));
		}
		if (pO = null, X(s)) {
			let n = s.anchor, r = n.getNode();
			if (s.isCollapsed()) {
				e.type === "Range" && e.anchorNode === e.focusNode && (s.dirty = !0);
				let i = Hj(t).event, a = i ? i.timeStamp : performance.now(), [o, c, l, u, d] = mO, f = dj(), p = !1 === t.isComposing() && f.getTextContent() === "";
				if (a < d + 200 && n.offset === l && n.key === u) vO(s, o, c);
				else if (n.type === "text") Y(r) || J(141), yO(s, r);
				else if (n.type === "element" && !p) {
					Q(r) || J(259);
					let e = n.getNode();
					e.isEmpty() ? function(e, t) {
						vO(e, t.getTextFormat(), t.getTextStyle());
					}(s, e) : vO(s, 0, "");
				}
			} else {
				let e = n.key, t = s.focus.key, r = s.getNodes(), a = r.length, c = s.isBackward(), l = c ? o : i, u = c ? i : o, d = c ? t : e, f = c ? e : t, p = 2047, m = !1;
				for (let e = 0; e < a; e++) {
					let t = r[e], n = t.getTextContentSize();
					if (Y(t) && n !== 0 && !(e === 0 && t.__key === d && l === n || e === a - 1 && t.__key === f && u === 0) && (m = !0, p &= t.getFormat(), p === 0)) break;
				}
				s.format = m ? p : 0;
			}
		}
		$(t, cD, void 0);
	});
}
function vO(e, t, n) {
	e.format === t && e.style === n || (e.format = t, e.style = n, e.dirty = !0);
}
function yO(e, t) {
	vO(e, t.getFormat(), t.getStyle());
}
function bO(e) {
	if (!e.getTargetRanges) return null;
	let t = e.getTargetRanges();
	return t.length === 0 ? null : t[0];
}
function xO(e) {
	let t = e.inputType, n = bO(e), r = eA(), i = Z();
	if (t === "deleteContentBackward") {
		if (i === null) {
			let e = Mk();
			if (!X(e)) return !0;
			pj(e.clone());
		}
		if (X(i)) {
			let t = i.anchor.key === i.focus.key;
			if (a = e.timeStamp, nO === "MediaLast" && a < tO + 30 && r.isComposing() && t) {
				if (rj(null), tO = 0, setTimeout(() => {
					pA(r, () => {
						rj(null);
					});
				}, 30), X(i)) {
					let e = i.anchor.getNode();
					e.markDirty(), Y(e) || J(142), yO(i, e);
				}
			} else {
				rj(null), e.preventDefault();
				let n = i.anchor.getNode(), a = n.getTextContent(), o = n.canInsertTextAfter(), s = i.anchor.offset === 0 && i.focus.offset === a.length, c = NT && t && !s && o;
				if (c && i.isCollapsed() && (c = !yA(Nj(i.anchor, !0))), !c) {
					$(r, hD, !0);
					let e = Z();
					NT && X(e) && e.isCollapsed() && (pO = e, setTimeout(() => pO = null));
				}
			}
			return !0;
		}
	}
	var a;
	if (!X(i)) return !0;
	let o = e.data;
	iO !== null && yj(!1, r, iO), i.dirty && iO === null || !i.isCollapsed() || xA(i.anchor.getNode()) || n === null || i.applyDOMRange(n), iO = null;
	let s = i.anchor, c = i.focus, l = s.getNode(), u = c.getNode();
	if (t === "insertText" || t === "insertTranspose") {
		if (o === "\n") e.preventDefault(), $(r, gD, !1);
		else if (o === GT) e.preventDefault(), $(r, _D, void 0);
		else if (o == null && e.dataTransfer) {
			let t = e.dataTransfer.getData("text/plain");
			e.preventDefault(), i.insertRawText(t);
		} else o != null && hO(i, n, o, e.timeStamp, !0) ? (e.preventDefault(), $(r, vD, o)) : iO = o;
		return rO = e.timeStamp, !0;
	}
	switch (e.preventDefault(), t) {
		case "insertFromYank":
		case "insertFromDrop":
		case "insertReplacementText":
			$(r, vD, e);
			break;
		case "insertFromComposition":
			rj(null), $(r, vD, e);
			break;
		case "insertLineBreak":
			rj(null), $(r, gD, !1);
			break;
		case "insertParagraph":
			rj(null), lO && !AT ? (lO = !1, $(r, gD, !1)) : $(r, _D, void 0);
			break;
		case "insertFromPaste":
		case "insertFromPasteAsQuotation":
			$(r, yD, e);
			break;
		case "deleteByComposition":
			(function(e, t) {
				return e !== t || Q(e) || Q(t) || !JA(e) || !JA(t);
			})(l, u) && $(r, bD, e);
			break;
		case "deleteByDrag":
		case "deleteByCut":
			$(r, bD, e);
			break;
		case "deleteContent":
			$(r, hD, !1);
			break;
		case "deleteWordBackward":
			$(r, xD, !0);
			break;
		case "deleteWordForward":
			$(r, xD, !1);
			break;
		case "deleteHardLineBackward":
		case "deleteSoftLineBackward":
			$(r, SD, !0);
			break;
		case "deleteContentForward":
		case "deleteHardLineForward":
		case "deleteSoftLineForward":
			$(r, SD, !1);
			break;
		case "formatStrikeThrough":
			$(r, CD, "strikethrough");
			break;
		case "formatBold":
			$(r, CD, "bold");
			break;
		case "formatItalic":
			$(r, CD, "italic");
			break;
		case "formatUnderline":
			$(r, CD, "underline");
			break;
		case "historyUndo":
			$(r, wD, void 0);
			break;
		case "historyRedo": $(r, TD, void 0);
	}
	return !0;
}
function SO(e) {
	if (Qj(e.target) && HA(e.target)) return !0;
	let t = eA(), n = Z(), r = e.data, i = bO(e);
	if (r != null && X(n) && hO(n, i, r, e.timeStamp, !1)) {
		uO &&= (TO(t, r), !1);
		let i = n.anchor.getNode(), a = Xj(Hj(t));
		if (a === null) return !0;
		let o = n.isBackward(), s = o ? n.anchor.offset : n.focus.offset, c = o ? n.focus.offset : n.anchor.offset;
		OT && !n.isCollapsed() && Y(i) && a.anchorNode !== null && i.getTextContent().slice(0, s) + r + i.getTextContent().slice(s + c) === vj(a.anchorNode) || $(t, vD, r);
		let l = r.length;
		DT && l > 1 && e.inputType === "insertCompositionText" && !t.isComposing() && (n.anchor.offset -= l), NT && t.isComposing() && (tO = 0, rj(null));
	} else yj(!1, t, r === null ? void 0 : r), uO &&= (TO(t, r || void 0), !1);
	return function() {
		Zk(), lE(eA());
	}(), !0;
}
function CO(e) {
	let t = eA(), n = Z();
	if (X(n) && !t.isComposing()) {
		let r = n.anchor, i = n.anchor.getNode();
		rj(r.key), Rj(RO), (e.timeStamp < tO + 30 || r.type === "element" || !n.isCollapsed() || i.getFormat() !== n.format || Y(i) && i.getStyle() !== n.style) && $(t, vD, KT);
	}
	return !0;
}
function wO(e) {
	return TO(eA(), e.data), Rj(zO), !0;
}
function TO(e, t) {
	let n = e._compositionKey;
	if (rj(null), n !== null && t != null) {
		if (t === "") {
			let t = aj(n), r = QA(e.getElementByKey(n));
			if (r !== null && r.nodeValue !== null && Y(t)) {
				let n = Xj(Hj(e)), i = null, a = null;
				n !== null && n.anchorNode === r && (i = n.anchorOffset, a = n.focusOffset), bj(t, r.nodeValue, i, a, !0);
			}
			return;
		}
		if (t[t.length - 1] === "\n") {
			let t = Z();
			if (X(t) || _k(t)) {
				if (X(t)) {
					let e = t.focus;
					t.anchor.set(e.key, e.offset, e.type);
				}
				$(e, ND, null);
				return;
			}
		}
	}
	yj(!0, e, t);
}
function EO(e) {
	let t = eA();
	if (e.key == null) return !0;
	if (dO) {
		if (Dj(e)) return pA(t, () => {
			TO(t, fO);
		}), dO = !1, fO = "", !0;
		dO = !1, fO = "";
	}
	if (function(e) {
		return wj(e, "ArrowRight", { shiftKey: "any" });
	}(e)) $(t, DD, e);
	else if (function(e) {
		return wj(e, "ArrowRight", Tj);
	}(e)) $(t, OD, e);
	else if (function(e) {
		return wj(e, "ArrowLeft", { shiftKey: "any" });
	}(e)) $(t, kD, e);
	else if (function(e) {
		return wj(e, "ArrowLeft", Tj);
	}(e)) $(t, AD, e);
	else if (function(e) {
		return wj(e, "ArrowUp", {
			altKey: "any",
			shiftKey: "any"
		});
	}(e)) $(t, jD, e);
	else if (function(e) {
		return wj(e, "ArrowDown", {
			altKey: "any",
			shiftKey: "any"
		});
	}(e)) $(t, MD, e);
	else if (function(e) {
		return wj(e, "Enter", {
			altKey: "any",
			ctrlKey: "any",
			metaKey: "any",
			shiftKey: !0
		});
	}(e)) lO = !0, $(t, ND, e);
	else if (function(e) {
		return e.key === " ";
	}(e)) $(t, PD, e);
	else if (function(e) {
		return ET && wj(e, "o", { ctrlKey: !0 });
	}(e)) e.preventDefault(), lO = !0, $(t, gD, !0);
	else if (function(e) {
		return wj(e, "Enter", {
			altKey: "any",
			ctrlKey: "any",
			metaKey: "any"
		});
	}(e)) lO = !1, $(t, ND, e);
	else if (function(e) {
		return wj(e, "Backspace", { shiftKey: "any" }) || ET && wj(e, "h", { ctrlKey: !0 });
	}(e)) Dj(e) ? $(t, FD, e) : (e.preventDefault(), $(t, hD, !0));
	else if (function(e) {
		return e.key === "Escape";
	}(e)) $(t, ID, e);
	else if (function(e) {
		return wj(e, "Delete", {}) || ET && wj(e, "d", { ctrlKey: !0 });
	}(e)) (function(e) {
		return e.key === "Delete";
	})(e) ? $(t, LD, e) : (e.preventDefault(), $(t, hD, !1));
	else if (function(e) {
		return wj(e, "Backspace", Ej);
	}(e)) e.preventDefault(), $(t, xD, !0);
	else if (function(e) {
		return wj(e, "Delete", Ej);
	}(e)) e.preventDefault(), $(t, xD, !1);
	else if (function(e) {
		return ET && wj(e, "Backspace", { metaKey: !0 });
	}(e)) e.preventDefault(), $(t, SD, !0);
	else if (function(e) {
		return ET && (wj(e, "Delete", { metaKey: !0 }) || wj(e, "k", { ctrlKey: !0 }));
	}(e)) e.preventDefault(), $(t, SD, !1);
	else if (function(e) {
		return wj(e, "b", Tj);
	}(e)) e.preventDefault(), $(t, CD, "bold");
	else if (function(e) {
		return wj(e, "u", Tj);
	}(e)) e.preventDefault(), $(t, CD, "underline");
	else if (function(e) {
		return wj(e, "i", Tj);
	}(e)) e.preventDefault(), $(t, CD, "italic");
	else if (function(e) {
		return wj(e, "Tab", { shiftKey: "any" });
	}(e)) $(t, RD, e);
	else if (function(e) {
		return wj(e, "z", Tj);
	}(e)) e.preventDefault(), $(t, wD, void 0);
	else if (function(e) {
		return ET ? wj(e, "z", {
			metaKey: !0,
			shiftKey: !0
		}) : wj(e, "y", { ctrlKey: !0 }) || wj(e, "z", {
			ctrlKey: !0,
			shiftKey: !0
		});
	}(e)) e.preventDefault(), $(t, TD, void 0);
	else {
		let n = t._editorState._selection;
		n === null || X(n) ? Oj(e) && (e.preventDefault(), $(t, YD, e)) : function(e) {
			return wj(e, "c", Tj);
		}(e) ? (e.preventDefault(), $(t, qD, e)) : function(e) {
			return wj(e, "x", Tj);
		}(e) ? (e.preventDefault(), $(t, JD, e)) : Oj(e) && (e.preventDefault(), $(t, YD, e));
	}
	return function(e) {
		return e.ctrlKey || e.shiftKey || e.altKey || e.metaKey;
	}(e) && t.dispatchCommand(QD, e), !0;
}
function DO(e) {
	let t = e.__lexicalEventHandles;
	return t === void 0 && (t = [], e.__lexicalEventHandles = t), t;
}
var OO = /* @__PURE__ */ new Map();
function kO(e) {
	let t = Zj(e.target);
	if (t === null) return;
	let n = KA(t.anchorNode);
	if (n === null) return;
	cO && (cO = !1, pA(n, () => {
		let r = Mk(), i = t.anchorNode;
		(Qj(i) || XA(i)) && pj(jk(r, t, n, e));
	}));
	let r = gj(n), i = r[r.length - 1], a = i._key, o = OO.get(a), s = o || i;
	s !== n && _O(t, s, !1), _O(t, n, !0), n === i ? o && OO.delete(a) : OO.set(a, n);
}
function AO(e) {
	e._lexicalHandled = !0;
}
function jO(e) {
	return !0 === e._lexicalHandled;
}
function MO(e) {
	let t = aO.get(e);
	if (t === void 0) return;
	let n = oO.get(t);
	if (n === void 0) return;
	let r = n - 1;
	r >= 0 || J(164), aO.delete(e), oO.set(t, r), r === 0 && t.removeEventListener("selectionchange", kO);
	let i = qA(e);
	GA(i) ? (function(e) {
		if (e._parentEditor !== null) {
			let t = gj(e), n = t[t.length - 1]._key;
			OO.get(n) === e && OO.delete(n);
		} else OO.delete(e._key);
	}(i), e.__lexicalEditor = null) : i && J(198);
	let a = DO(e);
	for (let e = 0; e < a.length; e++) a[e]();
	e.__lexicalEventHandles = [];
}
function NO(e, t, n) {
	Zk();
	let r = e.__key, i = e.getParent();
	if (i === null) return;
	let a = function(e) {
		let t = Z();
		if (!X(t) || !Q(e)) return t;
		let { anchor: n, focus: r } = t, i = n.getNode(), a = r.getNode();
		return Bj(i, e) && n.set(e.__key, 0, "element"), Bj(a, e) && r.set(e.__key, 0, "element"), t;
	}(e), o = !1;
	if (X(a) && t) {
		let t = a.anchor, n = a.focus;
		t.key === r && (Fk(t, e, i, e.getPreviousSibling(), e.getNextSibling()), o = !0), n.key === r && (Fk(n, e, i, e.getPreviousSibling(), e.getNextSibling()), o = !0);
	} else _k(a) && t && e.isSelected() && e.selectPrevious();
	if (X(a) && t && !o) {
		let t = e.getIndexWithinParent();
		tj(e), Nk(a, i, t, -1);
	} else tj(e);
	n || Wj(i) || i.canBeEmpty() || !i.isEmpty() || NO(i, t), t && a && xA(i) && i.isEmpty() && i.selectEnd();
}
var PO = Symbol.for("ephemeral");
function FO(e) {
	return e[PO] || !1;
}
var IO = class {
	__type;
	__key;
	__parent;
	__prev;
	__next;
	__state;
	static getType() {
		let { ownNodeType: e } = pM(this);
		return e === void 0 && J(64, this.name), e;
	}
	static clone(e) {
		J(65, this.name);
	}
	$config() {
		return {};
	}
	config(e, t) {
		let n = t.extends || Object.getPrototypeOf(this.constructor);
		return Object.assign(t, {
			extends: n,
			type: e
		}), { [e]: t };
	}
	afterCloneFrom(e) {
		this.__key === e.__key ? (this.__parent = e.__parent, this.__next = e.__next, this.__prev = e.__prev, this.__state = e.__state) : e.__state && (this.__state = e.__state.getWritable(this));
	}
	static importDOM;
	constructor(e) {
		this.__type = this.constructor.getType(), this.__parent = null, this.__prev = null, this.__next = null, Object.defineProperty(this, "__state", {
			configurable: !0,
			enumerable: !1,
			value: void 0,
			writable: !0
		}), ej(this, e);
	}
	getType() {
		return this.__type;
	}
	isInline() {
		J(137, this.constructor.name);
	}
	isAttached() {
		let e = this.__key;
		for (; e !== null;) {
			if (e === "root") return !0;
			let t = aj(e);
			if (t === null) break;
			e = t.__parent;
		}
		return !1;
	}
	isSelected(e) {
		let t = e || Z();
		if (t == null) return !1;
		let n = t.getNodes().some((e) => e.__key === this.__key);
		if (Y(this)) return n;
		if (X(t) && t.anchor.type === "element" && t.focus.type === "element") {
			if (t.isCollapsed()) return !1;
			let e = this.getParent();
			if (yA(this) && this.isInline() && e) {
				let n = t.isBackward() ? t.focus : t.anchor;
				if (e.is(n.getNode()) && n.offset === e.getChildrenSize() && this.is(e.getLastChild())) return !1;
			}
		}
		return n;
	}
	getKey() {
		return this.__key;
	}
	getIndexWithinParent() {
		let e = this.getParent();
		if (e === null) return -1;
		let t = e.getFirstChild(), n = 0;
		for (; t !== null;) {
			if (this.is(t)) return n;
			n++, t = t.getNextSibling();
		}
		return -1;
	}
	getParent() {
		let e = this.getLatest().__parent;
		return e === null ? null : aj(e);
	}
	getParentOrThrow() {
		let e = this.getParent();
		return e === null && J(66, this.__key), e;
	}
	getTopLevelElement() {
		let e = this;
		for (; e !== null;) {
			let t = e.getParent();
			if (Wj(t)) return Q(e) || e === this && yA(e) || J(194), e;
			e = t;
		}
		return null;
	}
	getTopLevelElementOrThrow() {
		let e = this.getTopLevelElement();
		return e === null && J(67, this.__key), e;
	}
	getParents() {
		let e = [], t = this.getParent();
		for (; t !== null;) e.push(t), t = t.getParent();
		return e;
	}
	getParentKeys() {
		let e = [], t = this.getParent();
		for (; t !== null;) e.push(t.__key), t = t.getParent();
		return e;
	}
	getPreviousSibling() {
		let e = this.getLatest().__prev;
		return e === null ? null : aj(e);
	}
	getPreviousSiblings() {
		let e = [], t = this.getParent();
		if (t === null) return e;
		let n = t.getFirstChild();
		for (; n !== null && !n.is(this);) e.push(n), n = n.getNextSibling();
		return e;
	}
	getNextSibling() {
		let e = this.getLatest().__next;
		return e === null ? null : aj(e);
	}
	getNextSiblings() {
		let e = [], t = this.getNextSibling();
		for (; t !== null;) e.push(t), t = t.getNextSibling();
		return e;
	}
	getCommonAncestor(e) {
		let t = Q(this) ? this : this.getParent(), n = Q(e) ? e : e.getParent(), r = t && n ? qM(t, n) : null;
		return r ? r.commonAncestor : null;
	}
	is(e) {
		return e != null && this.__key === e.__key;
	}
	isBefore(e) {
		let t = qM(this, e);
		return t !== null && (t.type === "descendant" || (t.type === "branch" ? WM(t) === -1 : (t.type !== "same" && t.type !== "ancestor" && J(279), !1)));
	}
	isParentOf(e) {
		let t = qM(this, e);
		return t !== null && t.type === "ancestor";
	}
	getNodesBetween(e) {
		let t = this.isBefore(e), n = [], r = /* @__PURE__ */ new Set(), i = this;
		for (; i !== null;) {
			let a = i.__key;
			if (r.has(a) || (r.add(a), n.push(i)), i === e) break;
			let o = Q(i) ? t ? i.getFirstChild() : i.getLastChild() : null;
			if (o !== null) {
				i = o;
				continue;
			}
			let s = t ? i.getNextSibling() : i.getPreviousSibling();
			if (s !== null) {
				i = s;
				continue;
			}
			let c = i.getParentOrThrow();
			if (r.has(c.__key) || n.push(c), c === e) break;
			let l = null, u = c;
			do {
				if (u === null && J(68), l = t ? u.getNextSibling() : u.getPreviousSibling(), u = u.getParent(), u === null) break;
				l !== null || r.has(u.__key) || n.push(u);
			} while (l === null);
			i = l;
		}
		return t || n.reverse(), n;
	}
	isDirty() {
		let e = eA()._dirtyLeaves;
		return e !== null && e.has(this.__key);
	}
	getLatest() {
		if (FO(this)) return this;
		let e = aj(this.__key);
		return e === null && J(113), e;
	}
	getWritable() {
		if (FO(this)) return this;
		Zk();
		let e = $k(), t = eA(), n = e._nodeMap, r = this.__key, i = this.getLatest(), a = t._cloneNotNeeded, o = Z();
		if (o !== null && o.setCachedNodes(null), a.has(r)) return nj(i), i;
		let s = cM(i);
		return a.add(r), nj(s), n.set(r, s), s;
	}
	getTextContent() {
		return "";
	}
	getTextContentSize() {
		return this.getTextContent().length;
	}
	createDOM(e, t) {
		J(70);
	}
	updateDOM(e, t, n) {
		J(71);
	}
	exportDOM(e) {
		return { element: this.createDOM(e._config, e) };
	}
	exportJSON() {
		let e = this.__state ? this.__state.toJSON() : void 0;
		return {
			type: this.__type,
			version: 1,
			...e
		};
	}
	static importJSON(e) {
		J(18, this.name);
	}
	updateFromJSON(e) {
		return function(e, t) {
			let n = e.getWritable(), r = t.$, i = r;
			for (let e of gE(n).flatKeys) e in t && (i !== void 0 && i !== r || (i = { ...r }), i[e] = t[e]);
			return (n.__state || i) && hE(e).updateFromJSON(i), n;
		}(this, e);
	}
	static transform() {
		return null;
	}
	remove(e) {
		NO(this, !0, e);
	}
	replace(e, t) {
		Zk();
		let n = Z();
		n !== null && (n = n.clone()), Kj(this, e);
		let r = this.getLatest(), i = this.__key, a = e.__key, o = e.getWritable(), s = this.getParentOrThrow().getWritable(), c = s.__size;
		tj(o);
		let l = r.getPreviousSibling(), u = r.getNextSibling(), d = r.__prev, f = r.__next, p = r.__parent;
		if (NO(r, !1, !0), l === null ? s.__first = a : l.getWritable().__next = a, o.__prev = d, u === null ? s.__last = a : u.getWritable().__prev = a, o.__next = f, o.__parent = p, s.__size = c, t && (Q(this) && Q(o) || J(139), this.getChildren().forEach((e) => {
			o.append(e);
		})), X(n)) {
			pj(n);
			let e = n.anchor, t = n.focus;
			e.key === i && mk(e, o), t.key === i && mk(t, o);
		}
		return ij() === i && rj(a), o;
	}
	insertAfter(e, t = !0) {
		Zk(), Kj(this, e);
		let n = this.getWritable(), r = e.getWritable(), i = r.getParent(), a = Z(), o = !1, s = !1;
		if (i !== null) {
			let t = e.getIndexWithinParent();
			if (tj(r), X(a)) {
				let e = i.__key, n = a.anchor, r = a.focus;
				o = n.type === "element" && n.key === e && n.offset === t + 1, s = r.type === "element" && r.key === e && r.offset === t + 1;
			}
		}
		let c = this.getNextSibling(), l = this.getParentOrThrow().getWritable(), u = r.__key, d = n.__next;
		if (c === null ? l.__last = u : c.getWritable().__prev = u, l.__size++, n.__next = u, r.__next = d, r.__prev = n.__key, r.__parent = n.__parent, t && X(a)) {
			let e = this.getIndexWithinParent();
			Nk(a, l, e + 1);
			let t = l.__key;
			o && a.anchor.set(t, e + 2, "element"), s && a.focus.set(t, e + 2, "element");
		}
		return e;
	}
	insertBefore(e, t = !0) {
		Zk(), Kj(this, e);
		let n = this.getWritable(), r = e.getWritable(), i = r.__key;
		tj(r);
		let a = this.getPreviousSibling(), o = this.getParentOrThrow().getWritable(), s = n.__prev, c = this.getIndexWithinParent();
		a === null ? o.__first = i : a.getWritable().__next = i, o.__size++, n.__prev = i, r.__prev = s, r.__next = n.__key, r.__parent = n.__parent;
		let l = Z();
		return t && X(l) && Nk(l, this.getParentOrThrow(), c), e;
	}
	isParentRequired() {
		return !1;
	}
	createParentElementNode() {
		return AA();
	}
	selectStart() {
		return this.selectPrevious();
	}
	selectEnd() {
		return this.selectNext(0, 0);
	}
	selectPrevious(e, t) {
		Zk();
		let n = this.getPreviousSibling(), r = this.getParentOrThrow();
		if (n === null) return r.select(0, 0);
		if (Q(n)) return n.select();
		if (!Y(n)) {
			let e = n.getIndexWithinParent() + 1;
			return r.select(e, e);
		}
		return n.select(e, t);
	}
	selectNext(e, t) {
		Zk();
		let n = this.getNextSibling(), r = this.getParentOrThrow();
		if (n === null) return r.select();
		if (Q(n)) return n.select(0, 0);
		if (!Y(n)) {
			let e = n.getIndexWithinParent();
			return r.select(e, e);
		}
		return n.select(e, t);
	}
	markDirty() {
		this.getWritable();
	}
	reconcileObservedMutation(e, t) {
		this.markDirty();
	}
}, LO = "history-merge", RO = "composition-start", zO = "composition-end", BO = class e extends IO {
	static getType() {
		return "linebreak";
	}
	static clone(t) {
		return new e(t.__key);
	}
	constructor(e) {
		super(e);
	}
	getTextContent() {
		return "\n";
	}
	createDOM() {
		return document.createElement("br");
	}
	updateDOM() {
		return !1;
	}
	isInline() {
		return !0;
	}
	static importDOM() {
		return { br: (e) => function(e) {
			let t = e.parentElement;
			if (t !== null && nM(t)) {
				let n = t.firstChild;
				if (n === e || n.nextSibling === e && WO(n)) {
					let n = t.lastChild;
					if (n === e || n.previousSibling === e && WO(n)) return !0;
				}
			}
			return !1;
		}(e) || function(e) {
			let t = e.parentElement;
			if (t !== null && nM(t)) {
				let n = t.firstChild;
				if (n === e || n.nextSibling === e && WO(n)) return !1;
				let r = t.lastChild;
				if (r === e || r.previousSibling === e && WO(r)) return !0;
			}
			return !1;
		}(e) ? null : {
			conversion: VO,
			priority: 0
		} };
	}
	static importJSON(e) {
		return HO().updateFromJSON(e);
	}
};
function VO(e) {
	return { node: HO() };
}
function HO() {
	return Gj(new BO());
}
function UO(e) {
	return e instanceof BO;
}
function WO(e) {
	return XA(e) && /^( |\t|\r?\n)+$/.test(e.textContent || "");
}
function GO(e, t) {
	return 16 & t ? "code" : t & 128 ? "mark" : 32 & t ? "sub" : 64 & t ? "sup" : null;
}
function KO(e, t) {
	return 1 & t ? "strong" : 2 & t ? "em" : "span";
}
function qO(e, t, n, r, i) {
	let a = r.classList, o = Aj(i, "base");
	o !== void 0 && a.add(...o), o = Aj(i, "underlineStrikethrough");
	let s = !1, c = 8 & t && 4 & t;
	o !== void 0 && (8 & n && 4 & n ? (s = !0, c || a.add(...o)) : c && a.remove(...o));
	for (let e in qT) {
		let r = qT[e];
		if (o = Aj(i, e), o !== void 0) if (n & r) {
			if (s && (e === "underline" || e === "strikethrough")) {
				t & r && a.remove(...o);
				continue;
			}
			((t & r) === 0 || c && e === "underline" || e === "strikethrough") && a.add(...o);
		} else t & r && a.remove(...o);
	}
}
function JO(e, t, n) {
	let r = t.firstChild, i = n.isComposing(), a = e + (i ? WT : "");
	if (r == null) t.textContent = a;
	else {
		let e = r.nodeValue;
		if (e !== a) if (i || DT) {
			let [t, n, i] = function(e, t) {
				let n = e.length, r = t.length, i = 0, a = 0;
				for (; i < n && i < r && e[i] === t[i];) i++;
				for (; a + i < n && a + i < r && e[n - a - 1] === t[r - a - 1];) a++;
				return [
					i,
					n - i - a,
					t.slice(i, r - a)
				];
			}(e, a);
			n !== 0 && r.deleteData(t, n), r.insertData(t, i);
		} else r.nodeValue = a;
	}
}
function YO(e, t, n, r, i, a) {
	JO(i, e, t);
	let o = a.theme.text;
	o !== void 0 && qO(0, 0, r, e, o);
}
function XO(e, t) {
	let n = document.createElement(t);
	return n.appendChild(e), n;
}
var ZO = class e extends IO {
	__text;
	__format;
	__style;
	__mode;
	__detail;
	static getType() {
		return "text";
	}
	static clone(t) {
		return new e(t.__text, t.__key);
	}
	afterCloneFrom(e) {
		super.afterCloneFrom(e), this.__text = e.__text, this.__format = e.__format, this.__style = e.__style, this.__mode = e.__mode, this.__detail = e.__detail;
	}
	constructor(e = "", t) {
		super(t), this.__text = e, this.__format = 0, this.__style = "", this.__mode = 0, this.__detail = 0;
	}
	getFormat() {
		return this.getLatest().__format;
	}
	getDetail() {
		return this.getLatest().__detail;
	}
	getMode() {
		return QT[this.getLatest().__mode];
	}
	getStyle() {
		return this.getLatest().__style;
	}
	isToken() {
		return this.getLatest().__mode === 1;
	}
	isComposing() {
		return this.__key === ij();
	}
	isSegmented() {
		return this.getLatest().__mode === 2;
	}
	isDirectionless() {
		return !!(1 & this.getLatest().__detail);
	}
	isUnmergeable() {
		return !!(2 & this.getLatest().__detail);
	}
	hasFormat(e) {
		let t = qT[e];
		return (this.getFormat() & t) !== 0;
	}
	isSimpleText() {
		return this.__type === "text" && this.__mode === 0;
	}
	getTextContent() {
		return this.getLatest().__text;
	}
	getFormatFlags(e, t) {
		return $A(this.getLatest().__format, e, t);
	}
	canHaveFormat() {
		return !0;
	}
	isInline() {
		return !0;
	}
	createDOM(e, t) {
		let n = this.__format, r = GO(0, n), i = KO(0, n), a = r === null ? i : r, o = document.createElement(a), s = o;
		this.hasFormat("code") && o.setAttribute("spellcheck", "false"), r !== null && (s = document.createElement(i), o.appendChild(s)), YO(s, this, 0, n, this.__text, e);
		let c = this.__style;
		return c !== "" && (o.style.cssText = c), o;
	}
	updateDOM(e, t, n) {
		let r = this.__text, i = e.__format, a = this.__format, o = GO(0, i), s = GO(0, a), c = KO(0, i), l = KO(0, a);
		if ((o === null ? c : o) !== (s === null ? l : s)) return !0;
		if (o === s && c !== l) {
			let e = t.firstChild;
			e ?? J(48);
			let i = document.createElement(l);
			return YO(i, this, 0, a, r, n), t.replaceChild(i, e), !1;
		}
		let u = t;
		s !== null && o !== null && (u = t.firstChild, u ?? J(49)), JO(r, u, this);
		let d = n.theme.text;
		d !== void 0 && i !== a && qO(0, i, a, u, d);
		let f = e.__style, p = this.__style;
		return f !== p && (t.style.cssText = p), !1;
	}
	static importDOM() {
		return {
			"#text": () => ({
				conversion: nk,
				priority: 0
			}),
			b: () => ({
				conversion: $O,
				priority: 0
			}),
			code: () => ({
				conversion: ak,
				priority: 0
			}),
			em: () => ({
				conversion: ak,
				priority: 0
			}),
			i: () => ({
				conversion: ak,
				priority: 0
			}),
			mark: () => ({
				conversion: ak,
				priority: 0
			}),
			s: () => ({
				conversion: ak,
				priority: 0
			}),
			span: () => ({
				conversion: QO,
				priority: 0
			}),
			strong: () => ({
				conversion: ak,
				priority: 0
			}),
			sub: () => ({
				conversion: ak,
				priority: 0
			}),
			sup: () => ({
				conversion: ak,
				priority: 0
			}),
			u: () => ({
				conversion: ak,
				priority: 0
			})
		};
	}
	static importJSON(e) {
		return ok().updateFromJSON(e);
	}
	updateFromJSON(e) {
		return super.updateFromJSON(e).setTextContent(e.text).setFormat(e.format).setDetail(e.detail).setMode(e.mode).setStyle(e.style);
	}
	exportDOM(e) {
		let { element: t } = super.exportDOM(e);
		return Qj(t) || J(132), t.style.whiteSpace = "pre-wrap", this.hasFormat("lowercase") ? t.style.textTransform = "lowercase" : this.hasFormat("uppercase") ? t.style.textTransform = "uppercase" : this.hasFormat("capitalize") && (t.style.textTransform = "capitalize"), this.hasFormat("bold") && (t = XO(t, "b")), this.hasFormat("italic") && (t = XO(t, "i")), this.hasFormat("strikethrough") && (t = XO(t, "s")), this.hasFormat("underline") && (t = XO(t, "u")), { element: t };
	}
	exportJSON() {
		return {
			detail: this.getDetail(),
			format: this.getFormat(),
			mode: this.getMode(),
			style: this.getStyle(),
			text: this.getTextContent(),
			...super.exportJSON()
		};
	}
	selectionTransform(e, t) {}
	setFormat(e) {
		let t = this.getWritable();
		return t.__format = typeof e == "string" ? qT[e] : e, t;
	}
	setDetail(e) {
		let t = this.getWritable();
		return t.__detail = typeof e == "string" ? JT[e] : e, t;
	}
	setStyle(e) {
		let t = this.getWritable();
		return t.__style = e, t;
	}
	toggleFormat(e) {
		let t = $A(this.getFormat(), e, null);
		return this.setFormat(t);
	}
	toggleDirectionless() {
		let e = this.getWritable();
		return e.__detail ^= 1, e;
	}
	toggleUnmergeable() {
		let e = this.getWritable();
		return e.__detail ^= 2, e;
	}
	setMode(e) {
		let t = ZT[e];
		if (this.__mode === t) return this;
		let n = this.getWritable();
		return n.__mode = t, n;
	}
	setTextContent(e) {
		if (this.__text === e) return this;
		let t = this.getWritable();
		return t.__text = e, t;
	}
	select(e, t) {
		Zk();
		let n = e, r = t, i = Z(), a = this.getTextContent(), o = this.__key;
		if (typeof a == "string") {
			let e = a.length;
			n === void 0 && (n = e), r === void 0 && (r = e);
		} else n = 0, r = 0;
		if (!X(i)) return Ok(o, n, o, r, "text", "text");
		{
			let e = ij();
			e !== i.anchor.key && e !== i.focus.key || rj(o), i.setTextNodeRange(this, n, this, r);
		}
		return i;
	}
	selectStart() {
		return this.select(0, 0);
	}
	selectEnd() {
		let e = this.getTextContentSize();
		return this.select(e, e);
	}
	spliceText(e, t, n, r) {
		let i = this.getWritable(), a = i.__text, o = n.length, s = e;
		s < 0 && (s = o + s, s < 0 && (s = 0));
		let c = Z();
		if (r && X(c)) {
			let t = e + o;
			c.setTextNodeRange(i, t, i, t);
		}
		return i.__text = a.slice(0, s) + n + a.slice(s + t), i;
	}
	canInsertTextBefore() {
		return !0;
	}
	canInsertTextAfter() {
		return !0;
	}
	splitText(...e) {
		Zk();
		let t = this.getLatest(), n = t.getTextContent();
		if (n === "") return [];
		let r = t.__key, i = ij(), a = n.length;
		e.sort((e, t) => e - t), e.push(a);
		let o = [], s = e.length;
		for (let t = 0, r = 0; t < a && r <= s; r++) {
			let i = e[r];
			i > t && (o.push(n.slice(t, i)), t = i);
		}
		let c = o.length;
		if (c === 1) return [t];
		let l = o[0], u = t.getParent(), d, f = t.getFormat(), p = t.getStyle(), m = t.__detail, h = !1, g = null, _ = null, v = Z();
		if (X(v)) {
			let [e, t] = v.isBackward() ? [v.focus, v.anchor] : [v.anchor, v.focus];
			e.type === "text" && e.key === r && (g = e), t.type === "text" && t.key === r && (_ = t);
		}
		t.isSegmented() ? (d = ok(l), d.__format = f, d.__style = p, d.__detail = m, d.__state = xE(t, d), h = !0) : d = t.setTextContent(l);
		let y = [d];
		for (let e = 1; e < c; e++) {
			let n = ok(o[e]);
			n.__format = f, n.__style = p, n.__detail = m, n.__state = xE(t, n);
			let a = n.__key;
			i === r && rj(a), y.push(n);
		}
		let b = g ? g.offset : null, x = _ ? _.offset : null, S = 0;
		for (let e of y) {
			if (!g && !_) break;
			let t = S + e.getTextContentSize();
			if (g !== null && b !== null && b <= t && b >= S && (g.set(e.getKey(), b - S, "text"), b < t && (g = null)), _ !== null && x !== null && x <= t && x >= S) {
				_.set(e.getKey(), x - S, "text");
				break;
			}
			S = t;
		}
		if (u !== null) {
			(function(e) {
				let t = e.getPreviousSibling(), n = e.getNextSibling();
				t !== null && nj(t), n !== null && nj(n);
			})(this);
			let e = u.getWritable(), t = this.getIndexWithinParent();
			h ? (e.splice(t, 0, y), this.remove()) : e.splice(t, 1, y), X(v) && Nk(v, u, t, c - 1);
		}
		return y;
	}
	mergeWithSibling(e) {
		let t = e === this.getPreviousSibling();
		t || e === this.getNextSibling() || J(50);
		let n = this.__key, r = e.__key, i = this.__text, a = i.length;
		ij() === r && rj(n);
		let o = Z();
		if (X(o)) {
			let i = o.anchor, s = o.focus;
			i !== null && i.key === r && Ik(i, t, n, e, a), s !== null && s.key === r && Ik(s, t, n, e, a);
		}
		let s = e.__text, c = t ? s + i : i + s;
		this.setTextContent(c);
		let l = this.getWritable();
		return e.remove(), l;
	}
	isTextEntity() {
		return !1;
	}
};
function QO(e) {
	return {
		forChild: sk(e.style),
		node: null
	};
}
function $O(e) {
	let t = e, n = t.style.fontWeight === "normal";
	return {
		forChild: sk(t.style, n ? void 0 : "bold"),
		node: null
	};
}
var ek = /* @__PURE__ */ new WeakMap();
function tk(e) {
	if (!Qj(e)) return !1;
	if (e.nodeName === "PRE") return !0;
	let t = e.style.whiteSpace;
	return typeof t == "string" && t.startsWith("pre");
}
function nk(e) {
	let t = e;
	e.parentElement === null && J(129);
	let n = t.textContent || "";
	if (function(e) {
		let t, n = e.parentNode, r = [e];
		for (; n !== null && (t = ek.get(n)) === void 0 && !tk(n);) r.push(n), n = n.parentNode;
		let i = t === void 0 ? n : t;
		for (let e = 0; e < r.length; e++) ek.set(r[e], i);
		return i;
	}(t) !== null) {
		let e = n.split(/(\r?\n|\t)/), t = [], r = e.length;
		for (let n = 0; n < r; n++) {
			let r = e[n];
			r === "\n" || r === "\r\n" ? t.push(HO()) : r === "	" ? t.push(lk()) : r !== "" && t.push(ok(r));
		}
		return { node: t };
	}
	if (n = n.replace(/\r/g, "").replace(/[ \t\n]+/g, " "), n === "") return { node: null };
	if (n[0] === " ") {
		let e = t, r = !0;
		for (; e !== null && (e = rk(e, !1)) !== null;) {
			let t = e.textContent || "";
			if (t.length > 0) {
				/[ \t\n]$/.test(t) && (n = n.slice(1)), r = !1;
				break;
			}
		}
		r && (n = n.slice(1));
	}
	if (n[n.length - 1] === " ") {
		let e = t, r = !0;
		for (; e !== null && (e = rk(e, !0)) !== null;) if ((e.textContent || "").replace(/^( |\t|\r?\n)+/, "").length > 0) {
			r = !1;
			break;
		}
		r && (n = n.slice(0, n.length - 1));
	}
	return n === "" ? { node: null } : { node: ok(n) };
}
function rk(e, t) {
	let n = e;
	for (;;) {
		let e;
		for (; (e = t ? n.nextSibling : n.previousSibling) === null;) {
			let e = n.parentElement;
			if (e === null) return null;
			n = e;
		}
		if (n = e, Qj(n)) {
			let e = n.style.display;
			if (e === "" && !tM(n) || e !== "" && !e.startsWith("inline")) return null;
		}
		let r = n;
		for (; (r = t ? n.firstChild : n.lastChild) !== null;) n = r;
		if (XA(n)) return n;
		if (n.nodeName === "BR") return null;
	}
}
var ik = {
	code: "code",
	em: "italic",
	i: "italic",
	mark: "highlight",
	s: "strikethrough",
	strong: "bold",
	sub: "subscript",
	sup: "superscript",
	u: "underline"
};
function ak(e) {
	let t = ik[e.nodeName.toLowerCase()];
	return t === void 0 ? { node: null } : {
		forChild: sk(e.style, t),
		node: null
	};
}
function ok(e = "") {
	return Gj(new ZO(e));
}
function Y(e) {
	return e instanceof ZO;
}
function sk(e, t) {
	let n = e.fontWeight, r = e.textDecoration.split(" "), i = n === "700" || n === "bold", a = r.includes("line-through"), o = e.fontStyle === "italic", s = r.includes("underline"), c = e.verticalAlign;
	return (e) => Y(e) ? (i && !e.hasFormat("bold") && e.toggleFormat("bold"), a && !e.hasFormat("strikethrough") && e.toggleFormat("strikethrough"), o && !e.hasFormat("italic") && e.toggleFormat("italic"), s && !e.hasFormat("underline") && e.toggleFormat("underline"), c !== "sub" || e.hasFormat("subscript") || e.toggleFormat("subscript"), c !== "super" || e.hasFormat("superscript") || e.toggleFormat("superscript"), t && !e.hasFormat(t) && e.toggleFormat(t), e) : e;
}
var ck = class e extends ZO {
	static getType() {
		return "tab";
	}
	static clone(t) {
		return new e(t.__key);
	}
	constructor(e) {
		super("	", e), this.__detail = 2;
	}
	static importDOM() {
		return null;
	}
	createDOM(e) {
		let t = super.createDOM(e), n = Aj(e.theme, "tab");
		return n !== void 0 && t.classList.add(...n), t;
	}
	static importJSON(e) {
		return lk().updateFromJSON(e);
	}
	setTextContent(e) {
		return e !== "	" && e !== "" && CT(126), super.setTextContent("	");
	}
	spliceText(e, t, n, r) {
		return n === "" && t === 0 || n === "	" && t === 1 || J(286), this;
	}
	setDetail(e) {
		return e !== 2 && J(127), this;
	}
	setMode(e) {
		return e !== "normal" && J(128), this;
	}
	canInsertTextBefore() {
		return !1;
	}
	canInsertTextAfter() {
		return !1;
	}
};
function lk() {
	return Gj(new ck());
}
function uk(e) {
	return e instanceof ck;
}
var dk = class {
	key;
	offset;
	type;
	_selection;
	constructor(e, t, n) {
		this._selection = null, this.key = e, this.offset = t, this.type = n;
	}
	is(e) {
		return this.key === e.key && this.offset === e.offset && this.type === e.type;
	}
	isBefore(e) {
		return this.key === e.key ? this.offset < e.offset : UM(rN(JM(this, "next")), rN(JM(e, "next"))) < 0;
	}
	getNode() {
		let e = aj(this.key);
		return e === null && J(20), e;
	}
	set(e, t, n, r) {
		let i = this._selection, a = this.key;
		r && this.key === e && this.offset === t && this.type === n || (this.key = e, this.offset = t, this.type = n, Xk() || (ij() === a && rj(e), i !== null && (i.setCachedNodes(null), i.dirty = !0)));
	}
};
function fk(e, t, n) {
	return new dk(e, t, n);
}
function pk(e, t) {
	let n = t.__key, r = e.offset, i = "element";
	if (Y(t)) {
		i = "text";
		let e = t.getTextContentSize();
		r > e && (r = e);
	} else if (!Q(t)) {
		let e = t.getNextSibling();
		if (Y(e)) n = e.__key, r = 0, i = "text";
		else {
			let e = t.getParent();
			e && (n = e.__key, r = t.getIndexWithinParent() + 1);
		}
	}
	e.set(n, r, i);
}
function mk(e, t) {
	if (Q(t)) {
		let n = t.getLastDescendant();
		Q(n) || Y(n) ? pk(e, n) : pk(e, t);
	} else pk(e, t);
}
var hk = class e {
	_nodes;
	_cachedNodes;
	dirty;
	constructor(e) {
		this._cachedNodes = null, this._nodes = e, this.dirty = !1;
	}
	getCachedNodes() {
		return this._cachedNodes;
	}
	setCachedNodes(e) {
		this._cachedNodes = e;
	}
	is(e) {
		if (!_k(e)) return !1;
		let t = this._nodes, n = e._nodes;
		return t.size === n.size && Array.from(t).every((e) => n.has(e));
	}
	isCollapsed() {
		return !1;
	}
	isBackward() {
		return !1;
	}
	getStartEndPoints() {
		return null;
	}
	add(e) {
		this.dirty = !0, this._nodes.add(e), this._cachedNodes = null;
	}
	delete(e) {
		this.dirty = !0, this._nodes.delete(e), this._cachedNodes = null;
	}
	clear() {
		this.dirty = !0, this._nodes.clear(), this._cachedNodes = null;
	}
	has(e) {
		return this._nodes.has(e);
	}
	clone() {
		return new e(new Set(this._nodes));
	}
	extract() {
		return this.getNodes();
	}
	insertRawText(e) {}
	insertText() {}
	insertNodes(e) {
		let t = this.getNodes(), n = t.length, r = t[n - 1], i;
		if (Y(r)) i = r.select();
		else {
			let e = r.getIndexWithinParent() + 1;
			i = r.getParentOrThrow().select(e, e);
		}
		i.insertNodes(e);
		for (let e = 0; e < n; e++) t[e].remove();
	}
	getNodes() {
		let e = this._cachedNodes;
		if (e !== null) return e;
		let t = this._nodes, n = [];
		for (let e of t) {
			let t = aj(e);
			t !== null && n.push(t);
		}
		return Xk() || (this._cachedNodes = n), n;
	}
	getTextContent() {
		let e = this.getNodes(), t = "";
		for (let n = 0; n < e.length; n++) t += e[n].getTextContent();
		return t;
	}
	deleteNodes() {
		let e = this.getNodes();
		if ((Z() || Mk()) === this && e[0]) {
			let t = AM(e[0], "next");
			XM(VM(t, t));
		}
		for (let t of e) t.remove();
	}
};
function X(e) {
	return e instanceof gk;
}
var gk = class e {
	format;
	style;
	anchor;
	focus;
	_cachedNodes;
	dirty;
	constructor(e, t, n, r) {
		this.anchor = e, this.focus = t, e._selection = this, t._selection = this, this._cachedNodes = null, this.format = n, this.style = r, this.dirty = !1;
	}
	getCachedNodes() {
		return this._cachedNodes;
	}
	setCachedNodes(e) {
		this._cachedNodes = e;
	}
	is(e) {
		return !!X(e) && this.anchor.is(e.anchor) && this.focus.is(e.focus) && this.format === e.format && this.style === e.style;
	}
	isCollapsed() {
		return this.anchor.is(this.focus);
	}
	getNodes() {
		let e = this._cachedNodes;
		if (e !== null) return e;
		let t = function(e) {
			let t = [], [n, r] = e.getTextSlices();
			n && t.push(n.caret.origin);
			let i = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Set();
			for (let n of e) if (EM(n)) {
				let { origin: e } = n;
				t.length === 0 ? i.add(e) : (a.add(e), t.push(e));
			} else {
				let { origin: e } = n;
				Q(e) && a.has(e) || t.push(e);
			}
			if (r && t.push(r.caret.origin), TM(e.focus) && Q(e.focus.origin) && e.focus.getNodeAtCaret() === null) for (let n = PM(e.focus.origin, "previous"); EM(n) && i.has(n.origin) && !n.origin.isEmpty() && n.origin.is(t[t.length - 1]); n = IM(n)) i.delete(n.origin), t.pop();
			for (; t.length > 1;) {
				let e = t[t.length - 1];
				if (!Q(e) || a.has(e) || e.isEmpty() || i.has(e)) break;
				t.pop();
			}
			if (t.length === 0 && e.isCollapsed()) {
				let n = rN(e.anchor), r = rN(e.anchor.getFlipped()), i = (e) => wM(e) ? e.origin : e.getNodeAtCaret(), a = i(n) || i(r) || (e.anchor.getNodeAtCaret() ? n.origin : r.origin);
				t.push(a);
			}
			return t;
		}(oN(QM(this), "next"));
		return Xk() || (this._cachedNodes = t), t;
	}
	setTextNodeRange(e, t, n, r) {
		this.anchor.set(e.__key, t, "text"), this.focus.set(n.__key, r, "text");
	}
	getTextContent() {
		let e = this.getNodes();
		if (e.length === 0) return "";
		let t = e[0], n = e[e.length - 1], r = this.anchor, i = this.focus, a = r.isBefore(i), [o, s] = yk(this), c = "", l = !0;
		for (let u = 0; u < e.length; u++) {
			let d = e[u];
			if (Q(d) && !d.isInline()) l || (c += "\n"), l = !d.isEmpty();
			else if (l = !1, Y(d)) {
				let e = d.getTextContent();
				d === t ? d === n ? r.type === "element" && i.type === "element" && i.offset !== r.offset || (e = o < s ? e.slice(o, s) : e.slice(s, o)) : e = a ? e.slice(o) : e.slice(s) : d === n && (e = a ? e.slice(0, s) : e.slice(0, o)), c += e;
			} else !yA(d) && !UO(d) || d === n && this.isCollapsed() || (c += d.getTextContent());
		}
		return c;
	}
	applyDOMRange(e) {
		let t = eA(), n = t.getEditorState()._selection, r = Ek(e.startContainer, e.startOffset, e.endContainer, e.endOffset, t, n);
		if (r === null) return;
		let [i, a] = r;
		this.anchor.set(i.key, i.offset, i.type, !0), this.focus.set(a.key, a.offset, a.type, !0), TE(this);
	}
	clone() {
		let t = this.anchor, n = this.focus;
		return new e(fk(t.key, t.offset, t.type), fk(n.key, n.offset, n.type), this.format, this.style);
	}
	toggleFormat(e) {
		this.format = $A(this.format, e, null), this.dirty = !0;
	}
	setFormat(e) {
		this.format = e, this.dirty = !0;
	}
	setStyle(e) {
		this.style = e, this.dirty = !0;
	}
	hasFormat(e) {
		let t = qT[e];
		return (this.format & t) !== 0;
	}
	insertRawText(e) {
		let t = e.split(/(\r?\n|\t)/), n = [], r = t.length;
		for (let e = 0; e < r; e++) {
			let r = t[e];
			r === "\n" || r === "\r\n" ? n.push(HO()) : r === "	" ? n.push(lk()) : n.push(ok(r));
		}
		this.insertNodes(n);
	}
	insertText(e) {
		let t = this.anchor, n = this.focus, r = this.format, i = this.style, a = t, o = n;
		!this.isCollapsed() && n.isBefore(t) && (a = n, o = t), a.type === "element" && function(e, t, n, r) {
			let i = e.getNode(), a = i.getChildAtIndex(e.offset), o = ok();
			if (o.setFormat(n), o.setStyle(r), jA(a)) a.splice(0, 0, [o]);
			else {
				let e = xA(i) ? AA().append(o) : o;
				a === null ? i.append(e) : a.insertBefore(e);
			}
			e.is(t) && t.set(o.__key, 0, "text"), e.set(o.__key, 0, "text");
		}(a, o, r, i), o.type === "element" && YM(o, rN(JM(o, "next")));
		let s = a.offset, c = o.offset, l = this.getNodes(), u = l.length, d = l[0];
		Y(d) || J(26);
		let f = d.getTextContent().length, p = d.getParentOrThrow(), m = l[u - 1];
		if (u === 1 && o.type === "element" && (c = f, o.set(a.key, c, "text")), this.isCollapsed() && s === f && (YA(d) || !d.canInsertTextAfter() || !p.canInsertTextAfter() && d.getNextSibling() === null)) {
			let t = d.getNextSibling();
			if (Y(t) && t.canInsertTextBefore() && !YA(t) || (t = ok(), t.setFormat(r), t.setStyle(i), p.canInsertTextAfter() ? d.insertAfter(t) : p.insertAfter(t)), t.select(0, 0), d = t, e !== "") return void this.insertText(e);
		} else if (this.isCollapsed() && s === 0 && (YA(d) || !d.canInsertTextBefore() || !p.canInsertTextBefore() && d.getPreviousSibling() === null)) {
			let t = d.getPreviousSibling();
			if (Y(t) && !YA(t) || (t = ok(), t.setFormat(r), p.canInsertTextBefore() ? d.insertBefore(t) : p.insertBefore(t)), t.select(), d = t, e !== "") return void this.insertText(e);
		} else if (d.isSegmented() && s !== f) {
			let e = ok(d.getTextContent());
			e.setFormat(r), d.replace(e), d = e;
		} else if (!this.isCollapsed() && e !== "") {
			let t = m.getParent();
			if (!p.canInsertTextBefore() || !p.canInsertTextAfter() || Q(t) && (!t.canInsertTextBefore() || !t.canInsertTextAfter())) return this.insertText(""), Tk(this.anchor, this.focus), void this.insertText(e);
		}
		if (u === 1) {
			if (JA(d)) {
				let t = ok(e);
				t.select(), d.replace(t);
				return;
			}
			let t = d.getFormat(), n = d.getStyle();
			if (s !== c || t === r && n === i) {
				if (uk(d)) {
					let t = ok(e);
					t.setFormat(r), t.setStyle(i), t.select(), d.replace(t);
					return;
				}
			} else {
				if (d.getTextContent() !== "") {
					let t = ok(e);
					if (t.setFormat(r), t.setStyle(i), t.select(), s === 0) d.insertBefore(t, !1);
					else {
						let [e] = d.splitText(s);
						e.insertAfter(t, !1);
					}
					t.isComposing() && this.anchor.type === "text" && (this.anchor.offset -= e.length);
					return;
				}
				d.setFormat(r), d.setStyle(i);
			}
			let a = c - s;
			d = d.spliceText(s, a, e, !0), d.getTextContent() === "" ? d.remove() : this.anchor.type === "text" && (this.format = t, this.style = n, d.isComposing() && (this.anchor.offset -= e.length));
		} else {
			let t = new Set([...d.getParentKeys(), ...m.getParentKeys()]), n = Q(d) ? d : d.getParentOrThrow(), r = Q(m) ? m : m.getParentOrThrow(), i = m;
			if (!n.is(r) && r.isInline()) do
				i = r, r = r.getParentOrThrow();
			while (r.isInline());
			if (o.type === "text" && (c !== 0 || m.getTextContent() === "") || o.type === "element" && m.getIndexWithinParent() < c) if (Y(m) && !JA(m) && c !== m.getTextContentSize()) {
				if (m.isSegmented()) {
					let e = ok(m.getTextContent());
					m.replace(e), m = e;
				}
				xA(o.getNode()) || o.type !== "text" || (m = m.spliceText(0, c, "")), t.add(m.__key);
			} else {
				let e = m.getParentOrThrow();
				e.canBeEmpty() || e.getChildrenSize() !== 1 ? m.remove() : e.remove();
			}
			else t.add(m.__key);
			let a = r.getChildren(), p = new Set(l), h = n.is(r), g = n.isInline() && d.getNextSibling() === null ? n : d;
			for (let e = a.length - 1; e >= 0; e--) {
				let t = a[e];
				if (t.is(d) || Q(t) && t.isParentOf(d)) break;
				t.isAttached() && (!p.has(t) || t.is(i) ? h || g.insertAfter(t, !1) : t.remove());
			}
			if (!h) {
				let e = r, n = null;
				for (; e !== null;) {
					let r = e.getChildren(), i = r.length;
					(i === 0 || r[i - 1].is(n)) && (t.delete(e.__key), n = e), e = e.getParent();
				}
			}
			if (JA(d)) if (s === f) d.select();
			else {
				let t = ok(e);
				t.select(), d.replace(t);
			}
			else d = d.spliceText(s, f - s, e, !0), d.getTextContent() === "" ? d.remove() : this.anchor.type === "text" && (this.format = d.getFormat(), this.style = d.getStyle(), d.isComposing() && (this.anchor.offset -= e.length));
			for (let e = 1; e < u; e++) {
				let n = l[e], r = n.__key;
				t.has(r) || n.remove();
			}
		}
	}
	removeText() {
		let e = Z() === this;
		ZM(this, nN(QM(this))), e && Z() !== this && pj(this);
	}
	formatText(e, t = null) {
		if (this.isCollapsed()) return this.toggleFormat(e), void rj(null);
		let n = this.getNodes(), r = [];
		for (let e of n) Y(e) && r.push(e);
		let i = (t) => {
			n.forEach((n) => {
				if (Q(n)) {
					let r = n.getFormatFlags(e, t);
					n.setTextFormat(r);
				}
			});
		}, a = r.length;
		if (a === 0) return this.toggleFormat(e), rj(null), void i(t);
		let o = this.anchor, s = this.focus, c = this.isBackward(), l = c ? s : o, u = c ? o : s, d = 0, f = r[0], p = l.type === "element" ? 0 : l.offset;
		if (l.type === "text" && p === f.getTextContentSize() && (d = 1, f = r[1], p = 0), f == null) return;
		let m = f.getFormatFlags(e, t);
		i(m);
		let h = a - 1, g = r[h], _ = u.type === "text" ? u.offset : g.getTextContentSize();
		if (f.is(g)) {
			if (p === _) return;
			if (YA(f) || p === 0 && _ === f.getTextContentSize()) f.setFormat(m);
			else {
				let e = f.splitText(p, _), t = p === 0 ? e[0] : e[1];
				t.setFormat(m), l.type === "text" && l.set(t.__key, 0, "text"), u.type === "text" && u.set(t.__key, _ - p, "text");
			}
			this.format = m;
			return;
		}
		p === 0 || YA(f) || ([, f] = f.splitText(p), p = 0), f.setFormat(m);
		let v = g.getFormatFlags(e, m);
		_ > 0 && (_ === g.getTextContentSize() || YA(g) || ([g] = g.splitText(_)), g.setFormat(v));
		for (let t = d + 1; t < h; t++) {
			let n = r[t], i = n.getFormatFlags(e, v);
			n.setFormat(i);
		}
		l.type === "text" && l.set(f.__key, p, "text"), u.type === "text" && u.set(g.__key, _, "text"), this.format = m | v;
	}
	insertNodes(e) {
		if (e.length === 0) return;
		if (this.isCollapsed() || this.removeText(), this.anchor.key === "root") {
			this.insertParagraph();
			let t = Z();
			return X(t) || J(134), t.insertNodes(e);
		}
		let t = (this.isBackward() ? this.focus : this.anchor).getNode(), n = hM(t, rM), r = e[e.length - 1];
		if (Q(n) && "__language" in n) {
			if ("__language" in e[0]) this.insertText(e[0].getTextContent());
			else {
				let t = Vk(this);
				n.splice(t, 0, e), r.selectEnd();
			}
			return;
		}
		if (!e.some((e) => (Q(e) || yA(e)) && !e.isInline())) {
			Q(n) || J(211, t.constructor.name, t.getType());
			let i = Vk(this);
			n.splice(i, 0, e), r.selectEnd();
			return;
		}
		let i = function(e) {
			let t = AA(), n = null;
			for (let r = 0; r < e.length; r++) {
				let i = e[r], a = UO(i);
				if (a || yA(i) && i.isInline() || Q(i) && i.isInline() || Y(i) || i.isParentRequired()) {
					if (n === null && (n = i.createParentElementNode(), t.append(n), a)) continue;
					n !== null && n.append(i);
				} else t.append(i), n = null;
			}
			return t;
		}(e), a = i.getLastDescendant(), o = i.getChildren(), s = !Q(n) || !n.isEmpty() ? this.insertParagraph() : null, c = o[o.length - 1], l = o[0];
		var u;
		Q(u = l) && rM(u) && !u.isEmpty() && Q(n) && (!n.isEmpty() || n.canMergeWhenEmpty()) && (Q(n) || J(211, t.constructor.name, t.getType()), n.append(...l.getChildren()), l = o[1]), l && (n === null && J(212, t.constructor.name, t.getType()), function(e, t) {
			let n = t.getParentOrThrow().getLastChild(), r = t, i = [t];
			for (; r !== n;) r.getNextSibling() || J(140), r = r.getNextSibling(), i.push(r);
			let a = e;
			for (let e of i) a = a.insertAfter(e);
		}(n, l));
		let d = hM(a, rM);
		s && Q(d) && (s.canMergeWhenEmpty() || rM(c)) && (d.append(...s.getChildren()), s.remove()), Q(n) && n.isEmpty() && n.remove(), a.selectEnd();
		let f = Q(n) ? n.getLastChild() : null;
		UO(f) && d !== n && f.remove();
	}
	insertParagraph() {
		if (this.anchor.key === "root") {
			let e = AA();
			return dj().splice(this.anchor.offset, 0, [e]), e.select(), e;
		}
		let e = Vk(this), t = hM(this.anchor.getNode(), rM);
		Q(t) || J(213);
		let n = t.getChildAtIndex(e), r = n ? [n, ...n.getNextSiblings()] : [], i = t.insertNewAfter(this, !1);
		return i ? (i.append(...r), i.selectStart(), i) : null;
	}
	insertLineBreak(e) {
		let t = HO();
		if (this.insertNodes([t]), e) {
			let e = t.getParentOrThrow(), n = t.getIndexWithinParent();
			e.select(n, n);
		}
	}
	extract() {
		let e = [...this.getNodes()], t = e.length, n = e[0], r = e[t - 1], [i, a] = yk(this), o = this.isBackward(), [s, c] = o ? [this.focus, this.anchor] : [this.anchor, this.focus], [l, u] = o ? [a, i] : [i, a];
		if (t === 0) return [];
		if (t === 1) {
			if (Y(n) && !this.isCollapsed()) {
				let e = n.splitText(l, u), t = l === 0 ? e[0] : e[1];
				return t ? (s.set(t.getKey(), 0, "text"), c.set(t.getKey(), t.getTextContentSize(), "text"), [t]) : [];
			}
			return [n];
		}
		if (Y(n) && (l === n.getTextContentSize() ? e.shift() : l !== 0 && ([, n] = n.splitText(l), e[0] = n, s.set(n.getKey(), 0, "text"))), Y(r)) {
			let t = r.getTextContent().length;
			u === 0 ? e.pop() : u !== t && ([r] = r.splitText(u), e[e.length - 1] = r, c.set(r.getKey(), r.getTextContentSize(), "text"));
		}
		return e;
	}
	modify(e, t, n) {
		if (Uk(this, e, t, n)) return;
		let r = e === "move", i = eA(), a = Xj(Hj(i));
		if (!a) return;
		let o = i._blockCursorElement, s = i._rootElement, c = this.focus.getNode();
		if (s === null || o === null || !Q(c) || c.isInline() || c.canBeEmpty() || Yj(o, i, s), this.dirty) {
			let e = Fj(i, this.anchor.key), t = Fj(i, this.focus.key);
			this.anchor.type === "text" && (e = QA(e)), this.focus.type === "text" && (t = QA(t)), e && t && Lk(a, e, this.anchor.offset, t, this.focus.offset);
		}
		if (function(e, t, n, r) {
			e.modify(t, n, r);
		}(a, e, t ? "backward" : "forward", n), a.rangeCount > 0) {
			let e = a.getRangeAt(0), n = this.anchor.getNode(), i = xA(n) ? n : Uj(n);
			if (this.applyDOMRange(e), this.dirty = !0, !r) {
				let n = this.getNodes(), r = [], o = !1;
				for (let e = 0; e < n.length; e++) {
					let t = n[e];
					Bj(t, i) ? r.push(t) : o = !0;
				}
				if (o && r.length > 0) if (t) {
					let e = r[0];
					Q(e) ? e.selectStart() : e.getParentOrThrow().selectStart();
				} else {
					let e = r[r.length - 1];
					Q(e) ? e.selectEnd() : e.getParentOrThrow().selectEnd();
				}
				a.anchorNode === e.startContainer && a.anchorOffset === e.startOffset || function(e) {
					let t = e.focus, n = e.anchor, r = n.key, i = n.offset, a = n.type;
					n.set(t.key, t.offset, t.type, !0), t.set(r, i, a, !0);
				}(this);
			}
		}
		n === "lineboundary" && Uk(this, e, t, n, "decorators");
	}
	forwardDeletion(e, t, n) {
		if (!n && (e.type === "element" && Q(t) && e.offset === t.getChildrenSize() || e.type === "text" && e.offset === t.getTextContentSize())) {
			let e = t.getParent(), n = t.getNextSibling() || (e === null ? null : e.getNextSibling());
			if (Q(n) && n.isShadowRoot()) return !0;
		}
		return !1;
	}
	deleteCharacter(e) {
		let t = this.isCollapsed();
		if (this.isCollapsed()) {
			let t = this.anchor, n = t.getNode();
			if (this.forwardDeletion(t, n, e)) return;
			let r = zM(JM(t, e ? "previous" : "next"));
			if (r.getTextSlices().every((e) => e === null || e.distance === 0)) {
				let e = { type: "initial" };
				for (let t of r.iterNodeCarets("shadowRoot")) if (EM(t)) {
					if (!t.origin.isInline()) {
						if (t.origin.isShadowRoot()) {
							if (e.type === "merge-block") break;
							if (Q(r.anchor.origin) && r.anchor.origin.isEmpty()) {
								let e = rN(t);
								ZM(this, VM(e, e)), r.anchor.origin.remove();
							}
							return;
						}
						e.type !== "merge-next-block" && e.type !== "merge-block" || (e = {
							block: e.block,
							caret: t,
							type: "merge-block"
						});
					}
				} else {
					if (e.type === "merge-block") break;
					if (TM(t)) {
						if (Q(t.origin)) {
							if (t.origin.isInline()) {
								if (!t.origin.isParentOf(r.anchor.origin)) break;
							} else e = {
								block: t.origin,
								type: "merge-next-block"
							};
							continue;
						}
						if (yA(t.origin)) {
							if (!t.origin.isIsolated()) if (e.type === "merge-next-block" && (t.origin.isKeyboardSelectable() || !t.origin.isInline()) && Q(r.anchor.origin) && r.anchor.origin.isEmpty()) {
								r.anchor.origin.remove();
								let e = Ak();
								e.add(t.origin.getKey()), pj(e);
							} else t.origin.remove();
							return;
						}
						break;
					}
				}
				if (e.type === "merge-block") {
					let { caret: t, block: n } = e;
					return ZM(this, VM(!t.origin.isEmpty() && n.isEmpty() ? $M(AM(n, t.direction)) : r.anchor, t)), this.removeText();
				}
			}
			let i = this.focus;
			if (this.modify("extend", e, "character"), this.isCollapsed()) {
				if (e && t.offset === 0 && bk(this, t.getNode())) return;
			} else {
				let r = i.type === "text" ? i.getNode() : null;
				if (n = t.type === "text" ? t.getNode() : null, r !== null && r.isSegmented()) {
					let t = i.offset, a = r.getTextContentSize();
					if (r.is(n) || e && t !== a || !e && t !== 0) return void Sk(r, e, t);
				} else if (n !== null && n.isSegmented()) {
					let i = t.offset, a = n.getTextContentSize();
					if (n.is(r) || e && i !== 0 || !e && i !== a) return void Sk(n, e, i);
				}
				(function(e, t) {
					let n = e.anchor, r = e.focus, i = n.getNode();
					if (i === r.getNode() && n.type === "text" && r.type === "text") {
						let e = n.offset, a = r.offset, o = e < a, s = o ? e : a, c = o ? a : e, l = c - 1;
						s !== l && (function(e) {
							return !(hj(e) || xk(e));
						})(i.getTextContent().slice(s, c)) && (t ? r.set(r.key, l, r.type) : n.set(n.key, l, n.type));
					}
				})(this, e);
			}
		}
		if (this.removeText(), e && !t && this.isCollapsed() && this.anchor.type === "element" && this.anchor.offset === 0) {
			let e = this.anchor.getNode();
			e.isEmpty() && xA(e.getParent()) && e.getPreviousSibling() === null && bk(this, e);
		}
	}
	deleteLine(e) {
		this.isCollapsed() && this.modify("extend", e, "lineboundary"), this.isCollapsed() ? this.deleteCharacter(e) : this.removeText();
	}
	deleteWord(e) {
		if (this.isCollapsed()) {
			let t = this.anchor, n = t.getNode();
			if (this.forwardDeletion(t, n, e)) return;
			this.modify("extend", e, "word");
		}
		this.removeText();
	}
	isBackward() {
		return this.focus.isBefore(this.anchor);
	}
	getStartEndPoints() {
		return [this.anchor, this.focus];
	}
};
function _k(e) {
	return e instanceof hk;
}
function vk(e) {
	let t = e.offset;
	if (e.type === "text") return t;
	let n = e.getNode();
	return t === n.getChildrenSize() ? n.getTextContent().length : 0;
}
function yk(e) {
	let t = e.getStartEndPoints();
	if (t === null) return [0, 0];
	let [n, r] = t;
	return n.type === "element" && r.type === "element" && n.key === r.key && n.offset === r.offset ? [0, 0] : [vk(n), vk(r)];
}
function bk(e, t) {
	for (let n = t; n; n = n.getParent()) {
		if (Q(n)) {
			if (n.collapseAtStart(e)) return !0;
			if (Wj(n)) break;
		}
		if (n.getPreviousSibling()) break;
	}
	return !1;
}
var xk = (() => {
	try {
		let e = /* @__PURE__ */ RegExp("\\p{Emoji}", "u"), t = e.test.bind(e);
		if (t("❤️") && t("#️⃣") && t("👍")) return t;
	} catch {}
	return () => !1;
})();
function Sk(e, t, n) {
	let r = e, i = r.getTextContent().split(/(?=\s)/g), a = i.length, o = 0, s = 0;
	for (let e = 0; e < a; e++) {
		let r = e === a - 1;
		if (s = o, o += i[e].length, t && o === n || o > n || r) {
			i.splice(e, 1), r && (s = void 0);
			break;
		}
	}
	let c = i.join("").trim();
	c === "" ? r.remove() : (r.setTextContent(c), r.select(s, s));
}
function Ck(e, t, n, r) {
	let i, a = t;
	if (Qj(e)) {
		let o = !1, s = e.childNodes, c = s.length, l = r._blockCursorElement;
		a === c && (o = !0, a = c - 1);
		let u = s[a], d = !1;
		if (u === l) u = s[a + 1], d = !0;
		else if (l !== null) {
			let n = l.parentNode;
			e === n && t > Array.prototype.indexOf.call(n.children, l) && a--;
		}
		if (i = mj(u), Y(i)) a = MM(i, o ? "next" : "previous");
		else {
			let s = mj(e);
			if (s === null) return null;
			if (Q(s)) {
				let c = r.getElementByKey(s.getKey());
				c === null && J(214);
				let l = s.getDOMSlot(c);
				[s, a] = l.resolveChildIndex(s, c, e, t), Q(s) || J(215), o && a >= s.getChildrenSize() && (a = Math.max(0, s.getChildrenSize() - 1));
				let u = s.getChildAtIndex(a);
				if (Q(u) && function(e, t, n) {
					let r = e.getParent();
					return n === null || r === null || !r.canBeEmpty() || r !== n.getNode();
				}(u, 0, n)) {
					let e = o ? u.getLastDescendant() : u.getFirstDescendant();
					e === null ? s = u : (u = e, s = Q(u) ? u : u.getParentOrThrow()), a = 0;
				}
				Y(u) ? (i = u, s = null, a = MM(u, o ? "next" : "previous")) : u !== s && o && !d && (Q(s) || J(216), a = Math.min(s.getChildrenSize(), a + 1));
			} else {
				let n = s.getIndexWithinParent();
				a = t === 0 && yA(s) && mj(e) === s ? n : n + 1, s = s.getParentOrThrow();
			}
			if (Q(s)) return fk(s.__key, a, "element");
		}
	} else i = mj(e);
	return Y(i) ? fk(i.__key, MM(i, a, "clamp"), "text") : null;
}
function wk(e, t, n) {
	let r = e.offset, i = e.getNode();
	if (r === 0) {
		let r = i.getPreviousSibling(), a = i.getParent();
		if (t) {
			if ((n || !t) && r === null && Q(a) && a.isInline()) {
				let t = a.getPreviousSibling();
				Y(t) && e.set(t.__key, t.getTextContent().length, "text");
			}
		} else Q(r) && !n && r.isInline() ? e.set(r.__key, r.getChildrenSize(), "element") : Y(r) && e.set(r.__key, r.getTextContent().length, "text");
	} else if (r === i.getTextContent().length) {
		let r = i.getNextSibling(), a = i.getParent();
		if (t && Q(r) && r.isInline()) e.set(r.__key, 0, "element");
		else if ((n || t) && r === null && Q(a) && a.isInline() && !a.canInsertTextAfter()) {
			let t = a.getNextSibling();
			Y(t) && e.set(t.__key, 0, "text");
		}
	}
}
function Tk(e, t, n) {
	if (e.type === "text" && t.type === "text") {
		let n = e.isBefore(t), r = e.is(t);
		wk(e, n, r), wk(t, !n, r), r && t.set(e.key, e.offset, e.type);
	}
}
function Ek(e, t, n, r, i, a) {
	if (e === null || n === null || !WA(i, e, n)) return null;
	let o = Ck(e, t, X(a) ? a.anchor : null, i);
	if (o === null) return null;
	let s = Ck(n, r, X(a) ? a.focus : null, i);
	if (s === null) return null;
	if (o.type === "element" && s.type === "element") {
		let t = mj(e), r = mj(n);
		if (yA(t) && yA(r)) return null;
	}
	return Tk(o, s), [o, s];
}
function Dk(e) {
	return Q(e) && !e.isInline();
}
function Ok(e, t, n, r, i, a) {
	let o = $k(), s = new gk(fk(e, t, i), fk(n, r, a), 0, "");
	return s.dirty = !0, o._selection = s, s;
}
function kk() {
	return new gk(fk("root", 0, "element"), fk("root", 0, "element"), 0, "");
}
function Ak() {
	return new hk(/* @__PURE__ */ new Set());
}
function jk(e, t, n, r) {
	let i = n._window;
	if (i === null) return null;
	let a = r || i.event, o = a ? a.type : void 0, s = o === "selectionchange", c = !tE && (s || o === "beforeinput" || o === "compositionstart" || o === "compositionend" || o === "click" && a && a.detail === 3 || o === "drop" || o === void 0), l, u, d, f;
	if (X(e) && !c) return e.clone();
	if (t === null) return null;
	if (l = t.anchorNode, u = t.focusNode, d = t.anchorOffset, f = t.focusOffset, (s || o === void 0) && X(e) && !WA(n, l, u)) return e.clone();
	let p = Ek(l, d, u, f, n, e);
	if (p === null) return null;
	let [m, h] = p, g = 0, _ = "";
	if (X(e)) {
		let t = e.anchor;
		if (m.key === t.key) g = e.format, _ = e.style;
		else {
			let e = m.getNode();
			Y(e) ? (g = e.getFormat(), _ = e.getStyle()) : Q(e) && (g = e.getTextFormat(), _ = e.getTextStyle());
		}
	}
	return new gk(m, h, g, _);
}
function Z() {
	return $k()._selection;
}
function Mk() {
	return eA()._editorState._selection;
}
function Nk(e, t, n, r = 1) {
	let i = e.anchor, a = e.focus, o = i.getNode(), s = a.getNode();
	if (!t.is(o) && !t.is(s)) return;
	let c = t.__key;
	if (e.isCollapsed()) {
		let t = i.offset;
		if (n <= t && r > 0 || n < t && r < 0) {
			let n = Math.max(0, t + r);
			i.set(c, n, "element"), a.set(c, n, "element"), Pk(e);
		}
	} else {
		let o = e.isBackward(), s = o ? a : i, l = s.getNode(), u = o ? i : a, d = u.getNode();
		if (t.is(l)) {
			let e = s.offset;
			(n <= e && r > 0 || n < e && r < 0) && s.set(c, Math.max(0, e + r), "element");
		}
		if (t.is(d)) {
			let e = u.offset;
			(n <= e && r > 0 || n < e && r < 0) && u.set(c, Math.max(0, e + r), "element");
		}
	}
	Pk(e);
}
function Pk(e) {
	let t = e.anchor, n = t.offset, r = e.focus, i = r.offset, a = t.getNode(), o = r.getNode();
	if (e.isCollapsed()) {
		if (!Q(a)) return;
		let e = a.getChildrenSize(), i = n >= e, o = i ? a.getChildAtIndex(e - 1) : a.getChildAtIndex(n);
		if (Y(o)) {
			let e = 0;
			i && (e = o.getTextContentSize()), t.set(o.__key, e, "text"), r.set(o.__key, e, "text");
		}
		return;
	}
	if (Q(a)) {
		let e = a.getChildrenSize(), r = n >= e, i = r ? a.getChildAtIndex(e - 1) : a.getChildAtIndex(n);
		if (Y(i)) {
			let e = 0;
			r && (e = i.getTextContentSize()), t.set(i.__key, e, "text");
		}
	}
	if (Q(o)) {
		let e = o.getChildrenSize(), t = i >= e, n = t ? o.getChildAtIndex(e - 1) : o.getChildAtIndex(i);
		if (Y(n)) {
			let e = 0;
			t && (e = n.getTextContentSize()), r.set(n.__key, e, "text");
		}
	}
}
function Fk(e, t, n, r, i) {
	let a = null, o = 0, s = null;
	r === null ? i !== null && (a = i.__key, Y(i) ? s = "text" : Q(i) && (s = "element")) : (a = r.__key, Y(r) ? (o = r.getTextContentSize(), s = "text") : Q(r) && (o = r.getChildrenSize(), s = "element")), a !== null && s !== null ? e.set(a, o, s) : (o = t.getIndexWithinParent(), o === -1 && (o = n.getChildrenSize()), e.set(n.__key, o, "element"));
}
function Ik(e, t, n, r, i) {
	e.type === "text" ? e.set(n, e.offset + (t ? 0 : i), "text") : e.offset > r.getIndexWithinParent() && e.set(e.key, e.offset - 1, "element");
}
function Lk(e, t, n, r, i) {
	try {
		e.setBaseAndExtent(t, n, r, i);
	} catch {}
}
function Rk(e, t, n) {
	let r = Fj(e, t.getKey());
	if (Q(t)) {
		let e = t.getDOMSlot(r);
		return [e.element, n + e.getFirstChildOffset()];
	}
	return [r, n];
}
function zk(e, t, n, r, i, a, o) {
	let s = r.anchorNode, c = r.focusNode, l = r.anchorOffset, u = r.focusOffset, d = document.activeElement;
	if (i.has("collaboration") && d !== a || d !== null && UA(d)) return;
	if (!X(t)) return void (e !== null && WA(n, s, c) && r.removeAllRanges());
	let f = t.anchor, p = t.focus, m = f.getNode(), h = p.getNode(), [g, _] = Rk(n, m, f.offset), [v, y] = Rk(n, h, p.offset), b = t.format, x = t.style, S = t.isCollapsed(), C = g, w = v, T = !1;
	var E, D, O, k, A;
	if ((f.type === "text" ? (C = QA(g), T = m.getFormat() !== b || m.getStyle() !== x) : X(e) && e.anchor.type === "text" && (T = !0), p.type === "text" && (w = QA(v)), C !== null && w !== null) && (S && (e === null || T || X(e) && (e.format !== b || e.style !== x)) && (E = b, D = x, O = _, k = f.key, A = performance.now(), mO = [
		E,
		D,
		O,
		k,
		A
	]), l !== _ || u !== y || s !== C || c !== w || r.type === "Range" && S || (d !== null && a.contains(d) || i.has("skip-selection-focus") || a.focus({ preventScroll: !0 }), f.type === "element"))) {
		if (Lk(r, C, _, w, y), !DT || !t.isCollapsed() || a === null || i.has("skip-selection-focus") || document.activeElement !== null && a.contains(document.activeElement) || a.focus({ preventScroll: !0 }), !i.has("skip-scroll-into-view") && t.isCollapsed() && a !== null && a === document.activeElement) {
			let e = X(t) && t.anchor.type === "element" ? C.childNodes[_] || null : r.rangeCount > 0 ? r.getRangeAt(0) : null;
			if (e !== null) {
				let t;
				if (e instanceof Text) {
					let n = document.createRange();
					n.selectNode(e), t = n.getBoundingClientRect();
				} else t = e.getBoundingClientRect();
				(function(e, t, n) {
					let r = Lj(n), i = Vj(r);
					if (r === null || i === null) return;
					let { top: a, bottom: o } = t, s = 0, c = 0, l = n;
					for (; l !== null;) {
						let t = l === r.body;
						if (t) s = 0, c = Hj(e).innerHeight;
						else {
							let e = l.getBoundingClientRect();
							s = e.top, c = e.bottom;
						}
						let n = 0;
						if (a < s ? n = -(s - a) : o > c && (n = o - c), n !== 0) if (t) i.scrollBy(0, n);
						else {
							let e = l.scrollTop;
							l.scrollTop += n;
							let t = l.scrollTop - e;
							a -= t, o -= t;
						}
						if (t) break;
						l = Ij(l);
					}
				})(n, t, a);
			}
		}
		sO = !0;
	}
}
function Bk(e) {
	let t = Z() || Mk();
	t === null && (t = dj().selectEnd()), t.insertNodes(e);
}
function Vk(e) {
	let t = e;
	e.isCollapsed() || t.removeText();
	let n = Z();
	X(n) && (t = n), X(t) || J(161);
	let r = t.anchor, i = r.getNode(), a = r.offset;
	for (; !rM(i);) {
		let e = i;
		if ([i, a] = Hk(i, a), e.is(i)) break;
	}
	return a;
}
function Hk(e, t) {
	let n = e.getParent();
	if (!n) {
		let e = AA();
		return dj().append(e), e.select(), [dj(), 0];
	}
	if (Y(e)) {
		let r = e.splitText(t);
		if (r.length === 0) return [n, e.getIndexWithinParent()];
		let i = t === 0 ? 0 : 1;
		return [n, r[0].getIndexWithinParent() + i];
	}
	if (!Q(e) || t === 0) return [n, e.getIndexWithinParent()];
	let r = e.getChildAtIndex(t);
	if (r) {
		let n = new gk(fk(e.__key, t, "element"), fk(e.__key, t, "element"), 0, ""), i = e.insertNewAfter(n);
		i && i.append(r, ...r.getNextSiblings());
	}
	return [n, e.getIndexWithinParent() + 1];
}
function Uk(e, t, n, r, i = "decorators-and-blocks") {
	if (t === "move" && r === "character" && !e.isCollapsed()) {
		let [t, r] = n === e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus];
		return r.set(t.key, t.offset, t.type), !0;
	}
	let a = JM(e.focus, n ? "previous" : "next"), o = r === "lineboundary", s = t === "move", c = a, l = i === "decorators-and-blocks";
	if (!iN(c)) {
		for (let e of c) {
			l = !1;
			let { origin: t } = e;
			if (!yA(t) || t.isIsolated() || (c = e, !o || !t.isInline())) break;
		}
		if (l) for (let e of zM(a).iterNodeCarets(t === "extend" ? "shadowRoot" : "root")) {
			if (EM(e)) e.origin.isInline() || (c = e);
			else {
				if (Q(e.origin)) continue;
				yA(e.origin) && !e.origin.isInline() && (c = e);
			}
			break;
		}
	}
	if (c === a) return !1;
	if (s && !o && yA(c.origin) && c.origin.isKeyboardSelectable()) {
		let e = Ak();
		return e.add(c.origin.getKey()), pj(e), !0;
	}
	return c = rN(c), s && YM(e.anchor, c), YM(e.focus, c), l || !o;
}
var Wk = null, Gk = null, Kk = !1, qk = !1, Jk = 0, Yk = {
	characterData: !0,
	childList: !0,
	subtree: !0
};
function Xk() {
	return Kk || Wk !== null && Wk._readOnly;
}
function Zk() {
	Kk && J(13);
}
function Qk() {
	Jk > 99 && J(14);
}
function $k() {
	return Wk === null && J(195, tA()), Wk;
}
function eA() {
	return Gk === null && J(196, tA()), Gk;
}
function tA() {
	let e = 0, t = /* @__PURE__ */ new Set(), n = FA.version;
	if (typeof window < "u") for (let r of document.querySelectorAll("[contenteditable]")) {
		let i = qA(r);
		if (GA(i)) e++;
		else if (i) {
			let e = String(i.constructor.version || "<0.17.1");
			e === n && (e += " (separately built, likely a bundler configuration issue)"), t.add(e);
		}
	}
	let r = ` Detected on the page: ${e} compatible editor(s) with version ${n}`;
	return t.size && (r += ` and incompatible editors with versions ${Array.from(t).join(", ")}`), r;
}
function nA() {
	return Gk;
}
function rA(e, t, n) {
	let r = t.__type, i = zA(e, r), a = n.get(r);
	a === void 0 && (a = Array.from(i.transforms), n.set(r, a));
	let o = a.length;
	for (let e = 0; e < o && (a[e](t), t.isAttached()); e++);
}
function iA(e, t) {
	return e !== void 0 && e.__key !== t && e.isAttached();
}
function aA(e, t) {
	if (!t) return;
	let n = e._updateTags, r = t;
	Array.isArray(t) || (r = [t]);
	for (let e of r) n.add(e);
}
function oA(e) {
	return sA(e, eA()._nodes);
}
function sA(e, t) {
	let n = e.type, r = t.get(n);
	r === void 0 && J(17, n);
	let i = r.klass;
	e.type !== i.getType() && J(18, i.name);
	let a = i.importJSON(e), o = e.children;
	if (Q(a) && Array.isArray(o)) for (let e = 0; e < o.length; e++) {
		let n = sA(o[e], t);
		a.append(n);
	}
	return a;
}
function cA(e, t, n) {
	let r = Wk, i = Kk, a = Gk;
	Wk = t, Kk = !0, Gk = e;
	try {
		return n();
	} finally {
		Wk = r, Kk = i, Gk = a;
	}
}
function lA(e, t) {
	let n = e._pendingEditorState, r = e._rootElement, i = e._headless || r === null;
	if (n === null) return;
	let a = e._editorState, o = a._selection, s = n._selection, c = e._dirtyType !== 0, l = Wk, u = Kk, d = Gk, f = e._updating, p = e._observer, m = null;
	if (e._pendingEditorState = null, e._editorState = n, !i && c && p !== null) {
		Gk = e, Wk = n, Kk = !1, e._updating = !0;
		try {
			let t = e._dirtyType, r = e._dirtyElements, i = e._dirtyLeaves;
			p.disconnect(), m = aD(a, n, e, t, r, i);
		} catch (t) {
			if (t instanceof Error && e._onError(t), qk) throw t;
			MA(e, null, r, n), uE(e), e._dirtyType = 2, qk = !0, lA(e, a), qk = !1;
			return;
		} finally {
			p.observe(r, Yk), e._updating = f, Wk = l, Kk = u, Gk = d;
		}
	}
	n._readOnly ||= !0;
	let h = e._dirtyLeaves, g = e._dirtyElements, _ = e._normalizedNodes, v = e._updateTags, y = e._deferred;
	c && (e._dirtyType = 0, e._cloneNotNeeded.clear(), e._dirtyLeaves = /* @__PURE__ */ new Set(), e._dirtyElements = /* @__PURE__ */ new Map(), e._normalizedNodes = /* @__PURE__ */ new Set(), e._updateTags = /* @__PURE__ */ new Set()), function(e, t) {
		let n = e._decorators, r = e._pendingDecorators || n, i = t._nodeMap, a;
		for (a in r) i.has(a) || (r === n && (r = lj(e)), delete r[a]);
	}(e, n);
	let b = i ? null : Xj(Hj(e));
	if (e._editable && b !== null && (c || s === null || s.dirty || !s.is(o)) && r !== null && !v.has("skip-dom-selection")) {
		Gk = e, Wk = n;
		try {
			if (p !== null && p.disconnect(), c || s === null || s.dirty) {
				let t = e._blockCursorElement;
				t !== null && Yj(t, e, r), zk(o, s, e, b, v, r);
			}
			(function(e, t, n) {
				let r = e._blockCursorElement;
				if (X(n) && n.isCollapsed() && n.anchor.type === "element" && t.contains(document.activeElement)) {
					let i = n.anchor, a = i.getNode(), o = i.offset, s = !1, c = null;
					if (o === a.getChildrenSize()) Jj(a.getChildAtIndex(o - 1)) && (s = !0);
					else {
						let t = a.getChildAtIndex(o);
						if (t !== null && Jj(t)) {
							let n = t.getPreviousSibling();
							(n === null || Jj(n)) && (s = !0, c = e.getElementByKey(t.__key));
						}
					}
					if (s) {
						let n = e.getElementByKey(a.__key);
						r === null && (e._blockCursorElement = r = function(e) {
							let t = e.theme, n = document.createElement("div");
							n.contentEditable = "false", n.setAttribute("data-lexical-cursor", "true");
							let r = t.blockCursor;
							return r !== void 0 && (typeof r == "string" && (r = t.blockCursor = dN(r)), r !== void 0 && n.classList.add(...r)), n;
						}(e._config)), t.style.caretColor = "transparent", c === null ? n.appendChild(r) : n.insertBefore(r, c);
						return;
					}
				}
				r !== null && Yj(r, e, t);
			})(e, r, s);
		} finally {
			p !== null && p.observe(r, Yk), Gk = d, Wk = l;
		}
	}
	m !== null && function(e, t, n, r, i) {
		let a = Array.from(e._listeners.mutation), o = a.length;
		for (let e = 0; e < o; e++) {
			let [o, s] = a[e];
			for (let e of s) {
				let a = t.get(e);
				a !== void 0 && o(a, {
					dirtyLeaves: r,
					prevEditorState: i,
					updateTags: n
				});
			}
		}
	}(e, m, v, h, a), X(s) || s === null || o !== null && o.is(s) || e.dispatchCommand(cD, void 0);
	let x = e._pendingDecorators;
	x !== null && (e._decorators = x, e._pendingDecorators = null, uA("decorator", e, !0, x)), function(e, t, n) {
		let r = uj(t), i = uj(n);
		r !== i && uA("textcontent", e, !0, i);
	}(e, t || a, n), uA("update", e, !0, {
		dirtyElements: g,
		dirtyLeaves: h,
		editorState: n,
		mutatedNodes: m,
		normalizedNodes: _,
		prevEditorState: t || a,
		tags: v
	}), function(e, t) {
		if (e._deferred = [], t.length !== 0) {
			let n = e._updating;
			e._updating = !0;
			try {
				for (let e = 0; e < t.length; e++) t[e]();
			} finally {
				e._updating = n;
			}
		}
	}(e, y), function(e) {
		let t = e._updates;
		if (t.length !== 0) {
			let n = t.shift();
			if (n) {
				let [t, r] = n;
				fA(e, t, r);
			}
		}
	}(e);
}
function uA(e, t, n, ...r) {
	let i = t._updating;
	t._updating = n;
	try {
		let n = Array.from(t._listeners[e]);
		for (let e = 0; e < n.length; e++) n[e].apply(null, r);
	} finally {
		t._updating = i;
	}
}
function dA(e, t) {
	let n = e._updates, r = t || !1;
	for (; n.length !== 0;) {
		let t = n.shift();
		if (t) {
			let [n, i] = t, a = e._pendingEditorState, o;
			i !== void 0 && (o = i.onUpdate, i.skipTransforms && (r = !0), i.discrete && (a === null && J(191), a._flushSync = !0), o && e._deferred.push(o), aA(e, i.tag)), a == null ? fA(e, n, i) : n();
		}
	}
	return r;
}
function fA(e, t, n) {
	let r = e._updateTags, i, a = !1, o = !1;
	n !== void 0 && (i = n.onUpdate, aA(e, n.tag), a = n.skipTransforms || !1, o = n.discrete || !1), i && e._deferred.push(i);
	let s = e._editorState, c = e._pendingEditorState, l = !1;
	(c === null || c._readOnly) && (c = e._pendingEditorState = SA(c || s), l = !0), c._flushSync = o;
	let u = Wk, d = Kk, f = Gk, p = e._updating;
	Wk = c, Kk = !1, e._updating = !0, Gk = e;
	let m = e._headless || e.getRootElement() === null;
	LA(null);
	try {
		l && (m ? s._selection !== null && (c._selection = s._selection.clone()) : c._selection = function(e, t) {
			let n = e.getEditorState()._selection, r = Xj(Hj(e));
			return X(n) || n == null ? jk(n, r, e, t) : n.clone();
		}(e, n && n.event || null));
		let r = e._compositionKey;
		t(), a = dA(e, a), function(e, t) {
			let n = t.getEditorState()._selection, r = e._selection;
			if (X(r)) {
				let e = r.anchor, t = r.focus, i;
				if (e.type === "text" && (i = e.getNode(), i.selectionTransform(n, r)), t.type === "text") {
					let e = t.getNode();
					i !== e && e.selectionTransform(n, r);
				}
			}
		}(c, e), e._dirtyType !== 0 && (a ? function(e, t) {
			let n = t._dirtyLeaves, r = e._nodeMap;
			for (let e of n) {
				let t = r.get(e);
				Y(t) && t.isAttached() && t.isSimpleText() && !t.isUnmergeable() && wE(t);
			}
		}(c, e) : function(e, t) {
			let n = t._dirtyLeaves, r = t._dirtyElements, i = e._nodeMap, a = ij(), o = /* @__PURE__ */ new Map(), s = n, c = s.size, l = r, u = l.size;
			for (; c > 0 || u > 0;) {
				if (c > 0) {
					t._dirtyLeaves = /* @__PURE__ */ new Set();
					for (let e of s) {
						let r = i.get(e);
						Y(r) && r.isAttached() && r.isSimpleText() && !r.isUnmergeable() && wE(r), r !== void 0 && iA(r, a) && rA(t, r, o), n.add(e);
					}
					if (s = t._dirtyLeaves, c = s.size, c > 0) {
						Jk++;
						continue;
					}
				}
				t._dirtyLeaves = /* @__PURE__ */ new Set(), t._dirtyElements = /* @__PURE__ */ new Map(), l.delete("root") && l.set("root", !0);
				for (let e of l) {
					let n = e[0], s = e[1];
					if (r.set(n, s), !s) continue;
					let c = i.get(n);
					c !== void 0 && iA(c, a) && rA(t, c, o);
				}
				s = t._dirtyLeaves, c = s.size, l = t._dirtyElements, u = l.size, Jk++;
			}
			t._dirtyLeaves = n, t._dirtyElements = r;
		}(c, e), dA(e), function(e, t, n, r) {
			let i = e._nodeMap, a = t._nodeMap, o = [];
			for (let [e] of r) {
				let t = a.get(e);
				t !== void 0 && (t.isAttached() || (Q(t) && eE(t, e, i, a, o, r), i.has(e) || r.delete(e), o.push(e)));
			}
			for (let e of o) a.delete(e);
			for (let e of n) {
				let t = a.get(e);
				t === void 0 || t.isAttached() || (i.has(e) || n.delete(e), a.delete(e));
			}
		}(s, c, e._dirtyLeaves, e._dirtyElements)), r !== e._compositionKey && (c._flushSync = !0);
		let i = c._selection;
		if (X(i)) {
			let e = c._nodeMap, t = i.anchor.key, n = i.focus.key;
			e.get(t) !== void 0 && e.get(n) !== void 0 || J(19);
		} else _k(i) && i._nodes.size === 0 && (c._selection = null);
	} catch (t) {
		t instanceof Error && e._onError(t), e._pendingEditorState = s, e._dirtyType = 2, e._cloneNotNeeded.clear(), e._dirtyLeaves = /* @__PURE__ */ new Set(), e._dirtyElements.clear(), lA(e);
		return;
	} finally {
		Wk = u, Kk = d, Gk = f, e._updating = p, Jk = 0;
	}
	e._dirtyType !== 0 || e._deferred.length > 0 || function(e, t) {
		let n = t.getEditorState()._selection, r = e._selection;
		if (r !== null) {
			if (r.dirty || !r.is(n)) return !0;
		} else if (n !== null) return !0;
		return !1;
	}(c, e) ? c._flushSync ? (c._flushSync = !1, lA(e)) : l && VA(() => {
		lA(e);
	}) : (c._flushSync = !1, l && (r.clear(), e._deferred = [], e._pendingEditorState = null));
}
function pA(e, t, n) {
	Gk === e && n === void 0 ? t() : fA(e, t, n);
}
var mA = class e {
	element;
	before;
	after;
	constructor(e, t, n) {
		this.element = e, this.before = t || null, this.after = n || null;
	}
	withBefore(t) {
		return new e(this.element, t, this.after);
	}
	withAfter(t) {
		return new e(this.element, this.before, t);
	}
	withElement(t) {
		return this.element === t ? this : new e(t, this.before, this.after);
	}
	insertChild(e) {
		let t = this.before || this.getManagedLineBreak();
		return t !== null && t.parentElement !== this.element && J(222), this.element.insertBefore(e, t), this;
	}
	removeChild(e) {
		return e.parentElement !== this.element && J(223), this.element.removeChild(e), this;
	}
	replaceChild(e, t) {
		return t.parentElement !== this.element && J(224), this.element.replaceChild(e, t), this;
	}
	getFirstChild() {
		let e = this.after ? this.after.nextSibling : this.element.firstChild;
		return e === this.before || e === this.getManagedLineBreak() ? null : e;
	}
	getManagedLineBreak() {
		return this.element.__lexicalLineBreak || null;
	}
	setManagedLineBreak(e) {
		if (e === null) this.removeManagedLineBreak();
		else {
			let t = e === "decorator" && (PT || AT || kT);
			this.insertManagedLineBreak(t);
		}
	}
	removeManagedLineBreak() {
		let e = this.getManagedLineBreak();
		if (e) {
			let t = this.element, n = e.nodeName === "IMG" ? e.nextSibling : null;
			n && t.removeChild(n), t.removeChild(e), t.__lexicalLineBreak = void 0;
		}
	}
	insertManagedLineBreak(e) {
		let t = this.getManagedLineBreak();
		if (t) {
			if (e === (t.nodeName === "IMG")) return;
			this.removeManagedLineBreak();
		}
		let n = this.element, r = this.before, i = document.createElement("br");
		if (n.insertBefore(i, r), e) {
			let e = document.createElement("img");
			e.setAttribute("data-lexical-linebreak", "true"), e.style.cssText = "display: inline !important; border: 0px !important; margin: 0px !important;", e.alt = "", n.insertBefore(e, i), n.__lexicalLineBreak = e;
		} else n.__lexicalLineBreak = i;
	}
	getFirstChildOffset() {
		let e = 0;
		for (let t = this.after; t !== null; t = t.previousSibling) e++;
		return e;
	}
	resolveChildIndex(e, t, n, r) {
		if (n === this.element) {
			let t = this.getFirstChildOffset();
			return [e, Math.min(t + e.getChildrenSize(), Math.max(t, r))];
		}
		let i = hA(t, n);
		i.push(r);
		let a = hA(t, this.element), o = e.getIndexWithinParent();
		for (let e = 0; e < a.length; e++) {
			let t = i[e], n = a[e];
			if (t === void 0 || t < n) break;
			if (t > n) {
				o += 1;
				break;
			}
		}
		return [e.getParentOrThrow(), o];
	}
};
function hA(e, t) {
	let n = [], r = t;
	for (; r !== e && r !== null; r = r.parentNode) {
		let e = 0;
		for (let t = r.previousSibling; t !== null; t = t.previousSibling) e++;
		n.push(e);
	}
	return r !== e && J(225), n.reverse();
}
var gA = class extends IO {
	__first;
	__last;
	__size;
	__format;
	__style;
	__indent;
	__dir;
	__textFormat;
	__textStyle;
	constructor(e) {
		super(e), this.__first = null, this.__last = null, this.__size = 0, this.__format = 0, this.__style = "", this.__indent = 0, this.__dir = null, this.__textFormat = 0, this.__textStyle = "";
	}
	afterCloneFrom(e) {
		super.afterCloneFrom(e), this.__key === e.__key && (this.__first = e.__first, this.__last = e.__last, this.__size = e.__size), this.__indent = e.__indent, this.__format = e.__format, this.__style = e.__style, this.__dir = e.__dir, this.__textFormat = e.__textFormat, this.__textStyle = e.__textStyle;
	}
	getFormat() {
		return this.getLatest().__format;
	}
	getFormatType() {
		return XT[this.getFormat()] || "";
	}
	getStyle() {
		return this.getLatest().__style;
	}
	getIndent() {
		return this.getLatest().__indent;
	}
	getChildren() {
		let e = [], t = this.getFirstChild();
		for (; t !== null;) e.push(t), t = t.getNextSibling();
		return e;
	}
	getChildrenKeys() {
		let e = [], t = this.getFirstChild();
		for (; t !== null;) e.push(t.__key), t = t.getNextSibling();
		return e;
	}
	getChildrenSize() {
		return this.getLatest().__size;
	}
	isEmpty() {
		return this.getChildrenSize() === 0;
	}
	isDirty() {
		let e = eA()._dirtyElements;
		return e !== null && e.has(this.__key);
	}
	isLastChild() {
		let e = this.getLatest(), t = this.getParentOrThrow().getLastChild();
		return t !== null && t.is(e);
	}
	getAllTextNodes() {
		let e = [], t = this.getFirstChild();
		for (; t !== null;) {
			if (Y(t) && e.push(t), Q(t)) {
				let n = t.getAllTextNodes();
				e.push(...n);
			}
			t = t.getNextSibling();
		}
		return e;
	}
	getFirstDescendant() {
		let e = this.getFirstChild();
		for (; Q(e);) {
			let t = e.getFirstChild();
			if (t === null) break;
			e = t;
		}
		return e;
	}
	getLastDescendant() {
		let e = this.getLastChild();
		for (; Q(e);) {
			let t = e.getLastChild();
			if (t === null) break;
			e = t;
		}
		return e;
	}
	getDescendantByIndex(e) {
		let t = this.getChildren(), n = t.length;
		if (e >= n) {
			let e = t[n - 1];
			return Q(e) && e.getLastDescendant() || e || null;
		}
		let r = t[e];
		return Q(r) && r.getFirstDescendant() || r || null;
	}
	getFirstChild() {
		let e = this.getLatest().__first;
		return e === null ? null : aj(e);
	}
	getFirstChildOrThrow() {
		let e = this.getFirstChild();
		return e === null && J(45, this.__key), e;
	}
	getLastChild() {
		let e = this.getLatest().__last;
		return e === null ? null : aj(e);
	}
	getLastChildOrThrow() {
		let e = this.getLastChild();
		return e === null && J(96, this.__key), e;
	}
	getChildAtIndex(e) {
		let t = this.getChildrenSize(), n, r;
		if (e < t / 2) {
			for (n = this.getFirstChild(), r = 0; n !== null && r <= e;) {
				if (r === e) return n;
				n = n.getNextSibling(), r++;
			}
			return null;
		}
		for (n = this.getLastChild(), r = t - 1; n !== null && r >= e;) {
			if (r === e) return n;
			n = n.getPreviousSibling(), r--;
		}
		return null;
	}
	getTextContent() {
		let e = "", t = this.getChildren(), n = t.length;
		for (let r = 0; r < n; r++) {
			let i = t[r];
			e += i.getTextContent(), Q(i) && r !== n - 1 && !i.isInline() && (e += GT);
		}
		return e;
	}
	getTextContentSize() {
		let e = 0, t = this.getChildren(), n = t.length;
		for (let r = 0; r < n; r++) {
			let i = t[r];
			e += i.getTextContentSize(), Q(i) && r !== n - 1 && !i.isInline() && (e += 2);
		}
		return e;
	}
	getDirection() {
		return this.getLatest().__dir;
	}
	getTextFormat() {
		return this.getLatest().__textFormat;
	}
	hasFormat(e) {
		if (e !== "") {
			let t = YT[e];
			return (this.getFormat() & t) !== 0;
		}
		return !1;
	}
	hasTextFormat(e) {
		let t = qT[e];
		return (this.getTextFormat() & t) !== 0;
	}
	getFormatFlags(e, t) {
		return $A(this.getLatest().__textFormat, e, t);
	}
	getTextStyle() {
		return this.getLatest().__textStyle;
	}
	select(e, t) {
		Zk();
		let n = Z(), r = e, i = t, a = this.getChildrenSize();
		if (!this.canBeEmpty()) {
			if (e === 0 && t === 0) {
				let e = this.getFirstChild();
				if (Y(e) || Q(e)) return e.select(0, 0);
			} else if (!(e !== void 0 && e !== a || t !== void 0 && t !== a)) {
				let e = this.getLastChild();
				if (Y(e) || Q(e)) return e.select();
			}
		}
		r === void 0 && (r = a), i === void 0 && (i = a);
		let o = this.__key;
		return X(n) ? (n.anchor.set(o, r, "element"), n.focus.set(o, i, "element"), n.dirty = !0, n) : Ok(o, r, o, i, "element", "element");
	}
	selectStart() {
		let e = this.getFirstDescendant();
		return e ? e.selectStart() : this.select();
	}
	selectEnd() {
		let e = this.getLastDescendant();
		return e ? e.selectEnd() : this.select();
	}
	clear() {
		let e = this.getWritable();
		return this.getChildren().forEach((e) => e.remove()), e;
	}
	append(...e) {
		return this.splice(this.getChildrenSize(), 0, e);
	}
	setDirection(e) {
		let t = this.getWritable();
		return t.__dir = e, t;
	}
	setFormat(e) {
		return this.getWritable().__format = e === "" ? 0 : YT[e], this;
	}
	setStyle(e) {
		return this.getWritable().__style = e || "", this;
	}
	setTextFormat(e) {
		let t = this.getWritable();
		return t.__textFormat = e, t;
	}
	setTextStyle(e) {
		let t = this.getWritable();
		return t.__textStyle = e, t;
	}
	setIndent(e) {
		return this.getWritable().__indent = e, this;
	}
	splice(e, t, n) {
		FO(this) && J(324, this.__key, this.__type);
		let r = this.getChildrenSize(), i = this.getWritable();
		e + t <= r || J(226, String(e), String(t), String(r));
		let a = i.__key, o = [], s = [], c = this.getChildAtIndex(e + t), l = null, u = r - t + n.length;
		if (e !== 0) if (e === r) l = this.getLastChild();
		else {
			let t = this.getChildAtIndex(e);
			t !== null && (l = t.getPreviousSibling());
		}
		if (t > 0) {
			let e = l === null ? this.getFirstChild() : l.getNextSibling();
			for (let n = 0; n < t; n++) {
				e === null && J(100);
				let t = e.getNextSibling(), n = e.__key;
				tj(e.getWritable()), s.push(n), e = t;
			}
		}
		let d = l;
		for (let e of n) {
			d !== null && e.is(d) && (l = d = d.getPreviousSibling());
			let t = e.getWritable();
			t.__parent === a && u--, tj(t);
			let n = e.__key;
			if (d === null) i.__first = n, t.__prev = null;
			else {
				let e = d.getWritable();
				e.__next = n, t.__prev = e.__key;
			}
			e.__key === a && J(76), t.__parent = a, o.push(n), d = e;
		}
		if (e + t === r) d !== null && (d.getWritable().__next = null, i.__last = d.__key);
		else if (c !== null) {
			let e = c.getWritable();
			if (d !== null) {
				let t = d.getWritable();
				e.__prev = d.__key, t.__next = c.__key;
			} else e.__prev = null;
		}
		if (i.__size = u, s.length) {
			let e = Z();
			if (X(e)) {
				let t = new Set(s), n = new Set(o), { anchor: r, focus: i } = e;
				_A(r, t, n) && Fk(r, r.getNode(), this, l, c), _A(i, t, n) && Fk(i, i.getNode(), this, l, c), u !== 0 || this.canBeEmpty() || Wj(this) || this.remove();
			}
		}
		return i;
	}
	getDOMSlot(e) {
		return new mA(e);
	}
	exportDOM(e) {
		let { element: t } = super.exportDOM(e);
		if (Qj(t)) {
			let e = this.getIndent();
			e > 0 && (t.style.paddingInlineStart = 40 * e + "px");
			let n = this.getDirection();
			n && (t.dir = n);
		}
		return { element: t };
	}
	exportJSON() {
		let e = {
			children: [],
			direction: this.getDirection(),
			format: this.getFormatType(),
			indent: this.getIndent(),
			...super.exportJSON()
		}, t = this.getTextFormat(), n = this.getTextStyle();
		return t === 0 && n === "" || Wj(this) || this.getChildren().some(Y) || (t !== 0 && (e.textFormat = t), n !== "" && (e.textStyle = n)), e;
	}
	updateFromJSON(e) {
		return super.updateFromJSON(e).setFormat(e.format).setIndent(e.indent).setDirection(e.direction).setTextFormat(e.textFormat || 0).setTextStyle(e.textStyle || "");
	}
	insertNewAfter(e, t) {
		return null;
	}
	canIndent() {
		return !0;
	}
	collapseAtStart(e) {
		return !1;
	}
	excludeFromCopy(e) {
		return !1;
	}
	canReplaceWith(e) {
		return !0;
	}
	canInsertAfter(e) {
		return !0;
	}
	canBeEmpty() {
		return !0;
	}
	canInsertTextBefore() {
		return !0;
	}
	canInsertTextAfter() {
		return !0;
	}
	isInline() {
		return !1;
	}
	isShadowRoot() {
		return !1;
	}
	canMergeWith(e) {
		return !1;
	}
	extractWithChild(e, t, n) {
		return !1;
	}
	canMergeWhenEmpty() {
		return !1;
	}
	reconcileObservedMutation(e, t) {
		let n = this.getDOMSlot(e), r = n.getFirstChild();
		for (let e = this.getFirstChild(); e; e = e.getNextSibling()) {
			let i = t.getElementByKey(e.getKey());
			i !== null && (r == null ? (n.insertChild(i), r = i) : r !== i && n.replaceChild(i, r), r = r.nextSibling);
		}
	}
};
function Q(e) {
	return e instanceof gA;
}
function _A(e, t, n) {
	let r = e.getNode();
	for (; r;) {
		let e = r.__key;
		if (t.has(e) && !n.has(e)) return !0;
		r = r.getParent();
	}
	return !1;
}
var vA = class extends IO {
	decorate(e, t) {
		return null;
	}
	isIsolated() {
		return !1;
	}
	isInline() {
		return !0;
	}
	isKeyboardSelectable() {
		return !0;
	}
};
function yA(e) {
	return e instanceof vA;
}
var bA = class e extends gA {
	__cachedText;
	static getType() {
		return "root";
	}
	static clone() {
		return new e();
	}
	constructor() {
		super("root"), this.__cachedText = null;
	}
	getTopLevelElementOrThrow() {
		J(51);
	}
	getTextContent() {
		let e = this.__cachedText;
		return !Xk() && eA()._dirtyType !== 0 || e === null ? super.getTextContent() : e;
	}
	remove() {
		J(52);
	}
	replace(e) {
		J(53);
	}
	insertBefore(e) {
		J(54);
	}
	insertAfter(e) {
		J(55);
	}
	updateDOM(e, t) {
		return !1;
	}
	splice(e, t, n) {
		for (let e of n) Q(e) || yA(e) || J(282);
		return super.splice(e, t, n);
	}
	static importJSON(e) {
		return dj().updateFromJSON(e);
	}
	collapseAtStart() {
		return !0;
	}
};
function xA(e) {
	return e instanceof bA;
}
function SA(e) {
	return new EA(new Map(e._nodeMap));
}
function CA() {
	return new EA(new Map([["root", new bA()]]));
}
function wA(e) {
	let t = e.exportJSON(), n = e.constructor;
	if (t.type !== n.getType() && J(130, n.name), Q(e)) {
		let r = t.children;
		Array.isArray(r) || J(59, n.name);
		let i = e.getChildren();
		for (let e = 0; e < i.length; e++) {
			let t = wA(i[e]);
			r.push(t);
		}
	}
	return t;
}
function TA(e) {
	return e instanceof EA;
}
var EA = class e {
	_nodeMap;
	_selection;
	_flushSync;
	_readOnly;
	constructor(e, t) {
		this._nodeMap = e, this._selection = t || null, this._flushSync = !1, this._readOnly = !1;
	}
	isEmpty() {
		return this._nodeMap.size === 1 && this._selection === null;
	}
	read(e, t) {
		return cA(t && t.editor || null, this, e);
	}
	clone(t) {
		let n = new e(this._nodeMap, t === void 0 ? this._selection : t);
		return n._readOnly = !0, n;
	}
	toJSON() {
		return cA(null, this, () => ({ root: wA(dj()) }));
	}
}, DA = class extends gA {
	static getType() {
		return "artificial";
	}
	createDOM(e) {
		return document.createElement("div");
	}
}, OA = class e extends gA {
	static getType() {
		return "paragraph";
	}
	static clone(t) {
		return new e(t.__key);
	}
	createDOM(e) {
		let t = document.createElement("p"), n = Aj(e.theme, "paragraph");
		return n !== void 0 && t.classList.add(...n), t;
	}
	updateDOM(e, t, n) {
		return !1;
	}
	static importDOM() {
		return { p: (e) => ({
			conversion: kA,
			priority: 0
		}) };
	}
	exportDOM(e) {
		let { element: t } = super.exportDOM(e);
		if (Qj(t)) {
			this.isEmpty() && t.append(document.createElement("br"));
			let e = this.getFormatType();
			e && (t.style.textAlign = e);
		}
		return { element: t };
	}
	static importJSON(e) {
		return AA().updateFromJSON(e);
	}
	exportJSON() {
		let e = super.exportJSON();
		if (e.textFormat === void 0 || e.textStyle === void 0) {
			let t = this.getChildren().find(Y);
			t ? (e.textFormat = t.getFormat(), e.textStyle = t.getStyle()) : (e.textFormat = this.getTextFormat(), e.textStyle = this.getTextStyle());
		}
		return e;
	}
	insertNewAfter(e, t) {
		let n = AA();
		n.setTextFormat(e.format), n.setTextStyle(e.style);
		let r = this.getDirection();
		return n.setDirection(r), n.setFormat(this.getFormatType()), n.setStyle(this.getStyle()), this.insertAfter(n, t), n;
	}
	collapseAtStart() {
		let e = this.getChildren();
		if (e.length === 0 || Y(e[0]) && e[0].getTextContent().trim() === "") {
			if (this.getNextSibling() !== null) return this.selectNext(), this.remove(), !0;
			if (this.getPreviousSibling() !== null) return this.selectPrevious(), this.remove(), !0;
		}
		return !1;
	}
};
function kA(e) {
	let t = AA();
	if (e.style && (t.setFormat(e.style.textAlign), uM(e, t)), t.getFormatType() === "") {
		let n = e.getAttribute("align");
		n && n && n in YT && t.setFormat(n);
	}
	return { node: t };
}
function AA() {
	return Gj(new OA());
}
function jA(e) {
	return e instanceof OA;
}
function MA(e, t, n, r) {
	let i = e._keyToDOMMap;
	i.clear(), e._editorState = CA(), e._pendingEditorState = r, e._compositionKey = null, e._dirtyType = 0, e._cloneNotNeeded.clear(), e._dirtyLeaves = /* @__PURE__ */ new Set(), e._dirtyElements.clear(), e._normalizedNodes = /* @__PURE__ */ new Set(), e._updateTags = /* @__PURE__ */ new Set(), e._updates = [], e._blockCursorElement = null;
	let a = e._observer;
	a !== null && (a.disconnect(), e._observer = null), t !== null && (t.textContent = ""), n !== null && (n.textContent = "", i.set("root", n));
}
function NA(e) {
	let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = e;
	for (; r;) {
		let { ownNodeConfig: e } = pM(r), i = r.transform;
		if (!n.has(i)) {
			n.add(i);
			let e = r.transform();
			e && t.add(e);
		}
		if (e) {
			let n = e.$transform;
			n && t.add(n), r = e.extends;
		} else {
			let e = Object.getPrototypeOf(r);
			r = e.prototype instanceof IO && e !== IO ? e : void 0;
		}
	}
	return t;
}
function PA(e) {
	let t = e || {}, n = nA(), r = t.theme || {}, i = e === void 0 ? n : t.parentEditor || null, a = t.disableEvents || !1, o = CA(), s = t.namespace || (i === null ? _j() : i._config.namespace), c = t.editorState, l = [
		bA,
		ZO,
		BO,
		ck,
		OA,
		DA,
		...t.nodes || []
	], { onError: u, html: d } = t, f = t.editable === void 0 || t.editable, p;
	if (e === void 0 && n !== null) p = n._nodes;
	else {
		p = /* @__PURE__ */ new Map();
		for (let e = 0; e < l.length; e++) {
			let t = l[e], n = null, r = null;
			if (typeof t != "function") {
				let e = t;
				t = e.replace, n = e.with, r = e.withKlass || null;
			}
			pM(t);
			let i = t.getType(), a = NA(t);
			p.set(i, {
				exportDOM: d && d.export ? d.export.get(t) : void 0,
				klass: t,
				replace: n,
				replaceWithKlass: r,
				sharedNodeState: pE(l[e]),
				transforms: a
			});
		}
	}
	let m = new FA(o, i, p, {
		disableEvents: a,
		namespace: s,
		theme: r
	}, u || console.error, function(e, t) {
		let n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), i = (e) => {
			Object.keys(e).forEach((t) => {
				let r = n.get(t);
				r === void 0 && (r = [], n.set(t, r)), r.push(e[t]);
			});
		};
		return e.forEach((e) => {
			let t = e.klass.importDOM;
			if (t == null || r.has(t)) return;
			r.add(t);
			let n = t.call(e.klass);
			n !== null && i(n);
		}), t && i(t), n;
	}(p, d ? d.import : void 0), f, e);
	return c !== void 0 && (m._pendingEditorState = c, m._dirtyType = 2), function(e) {
		e.registerCommand(dD, xO, 0), e.registerCommand(fD, SO, 0), e.registerCommand(pD, CO, 0), e.registerCommand(mD, wO, 0), e.registerCommand(ED, EO, 0);
	}(m), m;
}
var FA = class {
	static version;
	_headless;
	_parentEditor;
	_rootElement;
	_editorState;
	_pendingEditorState;
	_compositionKey;
	_deferred;
	_keyToDOMMap;
	_updates;
	_updating;
	_listeners;
	_commands;
	_nodes;
	_decorators;
	_pendingDecorators;
	_config;
	_dirtyType;
	_cloneNotNeeded;
	_dirtyLeaves;
	_dirtyElements;
	_normalizedNodes;
	_updateTags;
	_observer;
	_key;
	_onError;
	_htmlConversions;
	_window;
	_editable;
	_blockCursorElement;
	_createEditorArgs;
	constructor(e, t, n, r, i, a, o, s) {
		this._createEditorArgs = s, this._parentEditor = t, this._rootElement = null, this._editorState = e, this._pendingEditorState = null, this._compositionKey = null, this._deferred = [], this._keyToDOMMap = /* @__PURE__ */ new Map(), this._updates = [], this._updating = !1, this._listeners = {
			decorator: /* @__PURE__ */ new Set(),
			editable: /* @__PURE__ */ new Set(),
			mutation: /* @__PURE__ */ new Map(),
			root: /* @__PURE__ */ new Set(),
			textcontent: /* @__PURE__ */ new Set(),
			update: /* @__PURE__ */ new Set()
		}, this._commands = /* @__PURE__ */ new Map(), this._config = r, this._nodes = n, this._decorators = {}, this._pendingDecorators = null, this._dirtyType = 0, this._cloneNotNeeded = /* @__PURE__ */ new Set(), this._dirtyLeaves = /* @__PURE__ */ new Set(), this._dirtyElements = /* @__PURE__ */ new Map(), this._normalizedNodes = /* @__PURE__ */ new Set(), this._updateTags = /* @__PURE__ */ new Set(), this._observer = null, this._key = _j(), this._onError = i, this._htmlConversions = a, this._editable = o, this._headless = t !== null && t._headless, this._window = null, this._blockCursorElement = null;
	}
	isComposing() {
		return this._compositionKey != null;
	}
	registerUpdateListener(e) {
		let t = this._listeners.update;
		return t.add(e), () => {
			t.delete(e);
		};
	}
	registerEditableListener(e) {
		let t = this._listeners.editable;
		return t.add(e), () => {
			t.delete(e);
		};
	}
	registerDecoratorListener(e) {
		let t = this._listeners.decorator;
		return t.add(e), () => {
			t.delete(e);
		};
	}
	registerTextContentListener(e) {
		let t = this._listeners.textcontent;
		return t.add(e), () => {
			t.delete(e);
		};
	}
	registerRootListener(e) {
		let t = this._listeners.root;
		return e(this._rootElement, null), t.add(e), () => {
			e(null, this._rootElement), t.delete(e);
		};
	}
	registerCommand(e, t, n) {
		n === void 0 && J(35);
		let r = this._commands;
		r.has(e) || r.set(e, [
			/* @__PURE__ */ new Set(),
			/* @__PURE__ */ new Set(),
			/* @__PURE__ */ new Set(),
			/* @__PURE__ */ new Set(),
			/* @__PURE__ */ new Set()
		]);
		let i = r.get(e);
		i === void 0 && J(36, String(e));
		let a = i[n];
		return a.add(t), () => {
			a.delete(t), i.every((e) => e.size === 0) && r.delete(e);
		};
	}
	registerMutationListener(e, t, n) {
		let r = this.resolveRegisteredNodeAfterReplacements(this.getRegisteredNode(e)).klass, i = this._listeners.mutation, a = i.get(t);
		a === void 0 && (a = /* @__PURE__ */ new Set(), i.set(t, a)), a.add(r);
		let o = n && n.skipInitialization;
		return o !== void 0 && o || this.initializeMutationListener(t, r), () => {
			a.delete(r), a.size === 0 && i.delete(t);
		};
	}
	getRegisteredNode(e) {
		let t = this._nodes.get(e.getType());
		return t === void 0 && J(37, e.name), t;
	}
	resolveRegisteredNodeAfterReplacements(e) {
		for (; e.replaceWithKlass;) e = this.getRegisteredNode(e.replaceWithKlass);
		return e;
	}
	initializeMutationListener(e, t) {
		let n = this._editorState, r = sM(n).get(t.getType());
		if (!r) return;
		let i = /* @__PURE__ */ new Map();
		for (let e of r.keys()) i.set(e, "created");
		i.size > 0 && e(i, {
			dirtyLeaves: /* @__PURE__ */ new Set(),
			prevEditorState: n,
			updateTags: new Set(["registerMutationListener"])
		});
	}
	registerNodeTransformToKlass(e, t) {
		let n = this.getRegisteredNode(e);
		return n.transforms.add(t), n;
	}
	registerNodeTransform(e, t) {
		let n = this.registerNodeTransformToKlass(e, t), r = [n], i = n.replaceWithKlass;
		if (i != null) {
			let e = this.registerNodeTransformToKlass(i, t);
			r.push(e);
		}
		return function(e, t) {
			let n = sM(e.getEditorState()), r = [];
			for (let e of t) {
				let t = n.get(e);
				t && r.push(t);
			}
			r.length !== 0 && e.update(() => {
				for (let e of r) for (let t of e.keys()) {
					let e = aj(t);
					e && e.markDirty();
				}
			}, e._pendingEditorState === null ? { tag: LO } : void 0);
		}(this, r.map((e) => e.klass.getType())), () => {
			r.forEach((e) => e.transforms.delete(t));
		};
	}
	hasNode(e) {
		return this._nodes.has(e.getType());
	}
	hasNodes(e) {
		return e.every(this.hasNode.bind(this));
	}
	dispatchCommand(e, t) {
		return $(this, e, t);
	}
	getDecorators() {
		return this._decorators;
	}
	getRootElement() {
		return this._rootElement;
	}
	getKey() {
		return this._key;
	}
	setRootElement(e) {
		let t = this._rootElement;
		if (e !== t) {
			let n = Aj(this._config.theme, "root"), r = this._pendingEditorState || this._editorState;
			if (this._rootElement = e, MA(this, t, e, r), t !== null && (this._config.disableEvents || MO(t), n != null && t.classList.remove(...n)), e !== null) {
				let t = Vj(e), r = e.style;
				r.userSelect = "text", r.whiteSpace = "pre-wrap", r.wordBreak = "break-word", e.setAttribute("data-lexical-editor", "true"), this._window = t, this._dirtyType = 2, uE(this), this._updateTags.add(LO), lA(this), this._config.disableEvents || function(e, t) {
					let n = e.ownerDocument;
					aO.set(e, n);
					let r = oO.get(n) ?? 0;
					r < 1 && n.addEventListener("selectionchange", kO), oO.set(n, r + 1), e.__lexicalEditor = t;
					let i = DO(e);
					for (let n = 0; n < eO.length; n++) {
						let [r, a] = eO[n], o = typeof a == "function" ? (e) => {
							jO(e) || (AO(e), (t.isEditable() || r === "click") && a(e, t));
						} : (e) => {
							if (jO(e)) return;
							AO(e);
							let n = t.isEditable();
							switch (r) {
								case "cut": return n && $(t, JD, e);
								case "copy": return $(t, qD, e);
								case "paste": return n && $(t, yD, e);
								case "dragstart": return n && $(t, WD, e);
								case "dragover": return n && $(t, GD, e);
								case "dragend": return n && $(t, KD, e);
								case "focus": return n && $(t, XD, e);
								case "blur": return n && $(t, ZD, e);
								case "drop": return n && $(t, HD, e);
							}
						};
						e.addEventListener(r, o), i.push(() => {
							e.removeEventListener(r, o);
						});
					}
				}(e, this), n != null && e.classList.add(...n);
			} else this._window = null, this._updateTags.add(LO), lA(this);
			uA("root", this, !1, e, t);
		}
	}
	getElementByKey(e) {
		return this._keyToDOMMap.get(e) || null;
	}
	getEditorState() {
		return this._editorState;
	}
	setEditorState(e, t) {
		e.isEmpty() && J(38);
		let n = e;
		n._readOnly && (n = SA(e), n._selection = e._selection ? e._selection.clone() : null), lE(this);
		let r = this._pendingEditorState, i = this._updateTags, a = t === void 0 ? null : t.tag;
		r === null || r.isEmpty() || (a != null && i.add(a), lA(this)), this._pendingEditorState = n, this._dirtyType = 2, this._dirtyElements.set("root", !1), this._compositionKey = null, a != null && i.add(a), this._updating || lA(this);
	}
	parseEditorState(e, t) {
		return function(e, t, n) {
			let r = CA(), i = Wk, a = Kk, o = Gk, s = t._dirtyElements, c = t._dirtyLeaves, l = t._cloneNotNeeded, u = t._dirtyType;
			t._dirtyElements = /* @__PURE__ */ new Map(), t._dirtyLeaves = /* @__PURE__ */ new Set(), t._cloneNotNeeded = /* @__PURE__ */ new Set(), t._dirtyType = 0, Wk = r, Kk = !1, Gk = t, LA(null);
			try {
				let i = t._nodes;
				sA(e.root, i), n && n(), r._readOnly = !0;
			} catch (e) {
				e instanceof Error && t._onError(e);
			} finally {
				t._dirtyElements = s, t._dirtyLeaves = c, t._cloneNotNeeded = l, t._dirtyType = u, Wk = i, Kk = a, Gk = o;
			}
			return r;
		}(typeof e == "string" ? JSON.parse(e) : e, this, t);
	}
	read(e) {
		return lA(this), this.getEditorState().read(e, { editor: this });
	}
	update(e, t) {
		(function(e, t, n) {
			e._updating ? e._updates.push([t, n]) : fA(e, t, n);
		})(this, e, t);
	}
	focus(e, t = {}) {
		let n = this._rootElement;
		n !== null && (n.setAttribute("autocapitalize", "off"), pA(this, () => {
			let r = Z(), i = dj();
			r === null ? i.getChildrenSize() !== 0 && (t.defaultSelection === "rootStart" ? i.selectStart() : i.selectEnd()) : r.dirty || pj(r.clone()), Rj("focus"), zj(() => {
				n.removeAttribute("autocapitalize"), e && e();
			});
		}), this._pendingEditorState === null && n.removeAttribute("autocapitalize"));
	}
	blur() {
		let e = this._rootElement;
		e !== null && e.blur();
		let t = Xj(this._window);
		t !== null && t.removeAllRanges();
	}
	isEditable() {
		return this._editable;
	}
	setEditable(e) {
		this._editable !== e && (this._editable = e, uA("editable", this, !0, e));
	}
	toJSON() {
		return { editorState: this._editorState.toJSON() };
	}
};
FA.version = "0.41.0+prod.esm";
var IA = null;
function LA(e) {
	IA = e;
}
var RA = 1;
function zA(e, t) {
	let n = BA(e, t);
	return n === void 0 && J(30, t), n;
}
function BA(e, t) {
	return e._nodes.get(t);
}
var VA = typeof queueMicrotask == "function" ? queueMicrotask : (e) => {
	Promise.resolve().then(e);
};
function HA(e) {
	return yA(cj(e));
}
function UA(e) {
	let t = document.activeElement;
	if (!Qj(t)) return !1;
	let n = t.nodeName;
	return yA(cj(e)) && (n === "INPUT" || n === "TEXTAREA" || t.contentEditable === "true" && qA(t) == null);
}
function WA(e, t, n) {
	let r = e.getRootElement();
	try {
		return r !== null && r.contains(t) && r.contains(n) && t !== null && !UA(t) && KA(t) === e;
	} catch {
		return !1;
	}
}
function GA(e) {
	return e instanceof FA;
}
function KA(e) {
	let t = e;
	for (; t != null;) {
		let e = qA(t);
		if (GA(e)) return e;
		t = Ij(t);
	}
	return null;
}
function qA(e) {
	return e ? e.__lexicalEditor : null;
}
function JA(e) {
	return uk(e) || e.isToken();
}
function YA(e) {
	return JA(e) || e.isSegmented();
}
function XA(e) {
	return $j(e) && e.nodeType === 3;
}
function ZA(e) {
	return $j(e) && e.nodeType === 9;
}
function QA(e) {
	let t = e;
	for (; t != null;) {
		if (XA(t)) return t;
		t = t.firstChild;
	}
	return null;
}
function $A(e, t, n) {
	let r = qT[t];
	if (n !== null && (e & r) === (n & r)) return e;
	let i = e ^ r;
	return t === "subscript" ? i &= ~qT.superscript : t === "superscript" ? i &= ~qT.subscript : t === "lowercase" ? (i &= ~qT.uppercase, i &= ~qT.capitalize) : t === "uppercase" ? (i &= ~qT.lowercase, i &= ~qT.capitalize) : t === "capitalize" && (i &= ~qT.lowercase, i &= ~qT.uppercase), i;
}
function ej(e, t) {
	let n = function() {
		let e = IA;
		return IA = null, e;
	}();
	if ((t ||= n && n.__key) != null) return void (e.__key = t);
	Zk(), Qk();
	let r = eA(), i = $k(), a = "" + RA++;
	i._nodeMap.set(a, e), Q(e) ? r._dirtyElements.set(a, !0) : r._dirtyLeaves.add(a), r._cloneNotNeeded.add(a), r._dirtyType = 1, e.__key = a;
}
function tj(e) {
	let t = e.getParent();
	if (t !== null) {
		let n = e.getWritable(), r = t.getWritable(), i = e.getPreviousSibling(), a = e.getNextSibling(), o = a === null ? null : a.__key, s = i === null ? null : i.__key, c = i === null ? null : i.getWritable(), l = a === null ? null : a.getWritable();
		i === null && (r.__first = o), a === null && (r.__last = s), c !== null && (c.__next = o), l !== null && (l.__prev = s), n.__prev = null, n.__next = null, n.__parent = null, r.__size--;
	}
}
function nj(e) {
	Qk(), FO(e) && J(323, e.__key, e.__type);
	let t = e.getLatest(), n = t.__parent, r = $k(), i = eA(), a = r._nodeMap, o = i._dirtyElements;
	n !== null && function(e, t, n) {
		let r = e;
		for (; r !== null;) {
			if (n.has(r)) return;
			let e = t.get(r);
			if (e === void 0) break;
			n.set(r, !1), r = e.__parent;
		}
	}(n, a, o);
	let s = t.__key;
	i._dirtyType = 1, Q(e) ? o.set(s, !0) : i._dirtyLeaves.add(s);
}
function rj(e) {
	Zk();
	let t = eA(), n = t._compositionKey;
	if (e !== n) {
		if (t._compositionKey = e, n !== null) {
			let e = aj(n);
			e !== null && e.getWritable();
		}
		if (e !== null) {
			let t = aj(e);
			t !== null && t.getWritable();
		}
	}
}
function ij() {
	return Xk() ? null : eA()._compositionKey;
}
function aj(e, t) {
	let n = (t || $k())._nodeMap.get(e);
	return n === void 0 ? null : n;
}
function oj(e, t) {
	let n = sj(e, eA());
	return n === void 0 ? null : aj(n, t);
}
function sj(e, t) {
	return e[`__lexicalKey_${t._key}`];
}
function cj(e, t) {
	let n = e;
	for (; n != null;) {
		let e = oj(n, t);
		if (e !== null) return e;
		n = Ij(n);
	}
	return null;
}
function lj(e) {
	let t = e._decorators, n = Object.assign({}, t);
	return e._pendingDecorators = n, n;
}
function uj(e) {
	return e.read(() => dj().getTextContent());
}
function dj() {
	return fj($k());
}
function fj(e) {
	return e._nodeMap.get("root");
}
function pj(e) {
	Zk();
	let t = $k();
	e !== null && (e.dirty = !0, e.setCachedNodes(null)), t._selection = e;
}
function mj(e) {
	let t = eA(), n = function(e, t) {
		let n = e;
		for (; n != null;) {
			let e = sj(n, t);
			if (e !== void 0) return e;
			n = Ij(n);
		}
		return null;
	}(e, t);
	return n === null ? e === t.getRootElement() ? aj("root") : null : aj(n);
}
function hj(e) {
	return /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(e);
}
function gj(e) {
	let t = [], n = e;
	for (; n !== null;) t.push(n), n = n._parentEditor;
	return t;
}
function _j() {
	return Math.random().toString(36).replace(/[^a-z]+/g, "").substring(0, 5);
}
function vj(e) {
	return XA(e) ? e.nodeValue : null;
}
function yj(e, t, n) {
	let r = Xj(Hj(t));
	if (r === null) return;
	let i = r.anchorNode, { anchorOffset: a, focusOffset: o } = r;
	if (i !== null) {
		let t = vj(i), r = cj(i);
		if (t !== null && Y(r)) {
			if ((t === WT || t === KT) && n) {
				let e = n.length;
				t = n, a = e, o = e;
			}
			t !== null && bj(r, t, a, o, e);
		}
	}
}
function bj(e, t, n, r, i) {
	let a = e;
	if (a.isAttached() && (i || !a.isDirty())) {
		let o = a.isComposing(), s = t;
		if ((o || i) && (t.endsWith(WT) && (s = t.slice(0, -WT.length)), i)) {
			let e = KT, t;
			for (; (t = s.indexOf(e)) !== -1;) s = s.slice(0, t) + s.slice(t + e.length), n !== null && n > t && (n = Math.max(t, n - e.length)), r !== null && r > t && (r = Math.max(t, r - e.length));
		}
		let c = a.getTextContent();
		if (i || s !== c) {
			if (s === "") {
				if (rj(null), kT || AT || PT) a.remove();
				else {
					let e = eA();
					setTimeout(() => {
						e.update(() => {
							a.isAttached() && a.remove();
						});
					}, 20);
				}
				return;
			}
			let t = a.getParent(), i = Mk(), c = a.getTextContentSize(), l = ij(), u = a.getKey();
			if (a.isToken() || l !== null && u === l && !o || X(i) && (t !== null && !t.canInsertTextBefore() && i.anchor.offset === 0 || i.anchor.key === e.__key && i.anchor.offset === 0 && !a.canInsertTextBefore() && !o || i.focus.key === e.__key && i.focus.offset === c && !a.canInsertTextAfter() && !o)) return void a.markDirty();
			let d = Z();
			if (!X(d) || n === null || r === null) return void xj(a, s, d);
			if (d.setTextNodeRange(a, n, a, r), a.isSegmented()) {
				let e = ok(a.getTextContent());
				a.replace(e), a = e;
			}
			xj(a, s, d);
		}
	}
}
function xj(e, t, n) {
	if (e.setTextContent(t), X(n)) {
		let t = e.getKey();
		for (let r of ["anchor", "focus"]) {
			let i = n[r];
			i.type === "text" && i.key === t && (i.offset = MM(e, i.offset, "clamp"));
		}
	}
}
function Sj(e, t, n) {
	let r = t[n] || !1;
	return r === "any" || r === e[n];
}
function Cj(e, t) {
	return Sj(e, t, "altKey") && Sj(e, t, "ctrlKey") && Sj(e, t, "shiftKey") && Sj(e, t, "metaKey");
}
function wj(e, t, n) {
	if (!Cj(e, n)) return !1;
	if (e.key.toLowerCase() === t.toLowerCase()) return !0;
	if (t.length > 1 || e.key.length === 1 && e.key.charCodeAt(0) <= 127) return !1;
	let r = "Key" + t.toUpperCase();
	return e.code === r;
}
var Tj = {
	ctrlKey: !ET,
	metaKey: ET
}, Ej = {
	altKey: ET,
	ctrlKey: !ET
};
function Dj(e) {
	return e.key === "Backspace";
}
function Oj(e) {
	return wj(e, "a", Tj);
}
function kj(e) {
	let t = dj();
	if (X(e)) {
		let t = e.anchor, n = e.focus, r = t.getNode().getTopLevelElementOrThrow().getParentOrThrow();
		return t.set(r.getKey(), 0, "element"), n.set(r.getKey(), r.getChildrenSize(), "element"), TE(e), e;
	}
	{
		let e = t.select(0, t.getChildrenSize());
		return pj(TE(e)), e;
	}
}
function Aj(e, t) {
	e.__lexicalClassNameCache === void 0 && (e.__lexicalClassNameCache = {});
	let n = e.__lexicalClassNameCache, r = n[t];
	if (r !== void 0) return r;
	let i = e[t];
	if (typeof i == "string") {
		let e = dN(i);
		return n[t] = e, e;
	}
	return i;
}
function jj(e, t, n, r, i) {
	if (n.size === 0) return;
	let a = r.__type, o = r.__key, s = t.get(a);
	s === void 0 && J(33, a);
	let c = s.klass, l = e.get(c);
	l === void 0 && (l = /* @__PURE__ */ new Map(), e.set(c, l));
	let u = l.get(o), d = u === "destroyed" && i === "created";
	(u === void 0 || d) && l.set(o, d ? "updated" : i);
}
function Mj(e, t, n) {
	let r = e.getParent(), i = n, a = e;
	return r !== null && (t && n === 0 ? (i = a.getIndexWithinParent(), a = r) : t || n !== a.getChildrenSize() || (i = a.getIndexWithinParent() + 1, a = r)), a.getChildAtIndex(t ? i - 1 : i);
}
function Nj(e, t) {
	let n = e.offset;
	if (e.type === "element") return Mj(e.getNode(), t, n);
	{
		let r = e.getNode();
		if (t && n === 0 || !t && n === r.getTextContentSize()) {
			let e = t ? r.getPreviousSibling() : r.getNextSibling();
			return e === null ? Mj(r.getParentOrThrow(), t, r.getIndexWithinParent() + (t ? 0 : 1)) : e;
		}
	}
	return null;
}
function Pj(e) {
	let t = Hj(e).event, n = t && t.inputType;
	return n === "insertFromPaste" || n === "insertFromPasteAsQuotation";
}
function $(e, t, n) {
	return function(e, t, n) {
		let r = gj(e);
		for (let i = 4; i >= 0; i--) for (let a = 0; a < r.length; a++) {
			let o = r[a], s = o._commands.get(t);
			if (s !== void 0) {
				let t = s[i];
				if (t !== void 0) {
					let r = Array.from(t), i = r.length, a = !1;
					if (pA(o, () => {
						for (let t = 0; t < i; t++) if (r[t](n, e)) return void (a = !0);
					}), a) return a;
				}
			}
		}
		return !1;
	}(e, t, n);
}
function Fj(e, t) {
	let n = e._keyToDOMMap.get(t);
	return n === void 0 && J(75, t), n;
}
function Ij(e) {
	let t = e.assignedSlot || e.parentElement;
	return eM(t) ? t.host : t;
}
function Lj(e) {
	return ZA(e) ? e : Qj(e) ? e.ownerDocument : null;
}
function Rj(e) {
	Zk(), eA()._updateTags.add(e);
}
function zj(e) {
	Zk(), eA()._deferred.push(e);
}
function Bj(e, t) {
	let n = e.getParent();
	for (; n !== null;) {
		if (n.is(t)) return !0;
		n = n.getParent();
	}
	return !1;
}
function Vj(e) {
	let t = Lj(e);
	return t ? t.defaultView : null;
}
function Hj(e) {
	let t = e._window;
	return t === null && J(78), t;
}
function Uj(e) {
	let t = e.getParentOrThrow();
	for (; t !== null;) {
		if (Wj(t)) return t;
		t = t.getParentOrThrow();
	}
	return t;
}
function Wj(e) {
	return xA(e) || Q(e) && e.isShadowRoot();
}
function Gj(e) {
	let t = eA(), n = e.getType(), r = BA(t, n);
	r === void 0 && J(200, e.constructor.name, n);
	let { replace: i, replaceWithKlass: a } = r;
	if (i !== null) {
		let t = i(e), r = t.constructor;
		return a === null ? t instanceof e.constructor && r !== e.constructor || J(202, r.name, r.getType(), e.constructor.name, n) : t instanceof a || J(201, a.name, a.getType(), r.name, r.getType(), e.constructor.name, n), t.__key === e.__key && J(203, e.constructor.name, n, r.name, r.getType()), t;
	}
	return e;
}
function Kj(e, t) {
	!xA(e.getParent()) || Q(t) || yA(t) || J(99);
}
function qj(e) {
	let t = aj(e);
	return t === null && J(63, e), t;
}
function Jj(e) {
	return (yA(e) || Q(e) && !e.canBeEmpty()) && !e.isInline();
}
function Yj(e, t, n) {
	n.style.removeProperty("caret-color"), t._blockCursorElement = null;
	let r = e.parentElement;
	r !== null && r.removeChild(e);
}
function Xj(e) {
	return wT ? (e || window).getSelection() : null;
}
function Zj(e) {
	let t = Vj(e);
	return t ? t.getSelection() : null;
}
function Qj(e) {
	return $j(e) && e.nodeType === 1;
}
function $j(e) {
	return typeof e == "object" && !!e && "nodeType" in e && typeof e.nodeType == "number";
}
function eM(e) {
	return $j(e) && e.nodeType === 11;
}
function tM(e) {
	let t = /* @__PURE__ */ new RegExp(/^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|mark|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var|#text)$/, "i");
	return e.nodeName.match(t) !== null;
}
function nM(e) {
	let t = /* @__PURE__ */ new RegExp(/^(address|article|aside|blockquote|canvas|dd|div|dl|dt|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hr|li|main|nav|noscript|ol|p|pre|section|table|td|tfoot|ul|video)$/, "i");
	return e.nodeName.match(t) !== null;
}
function rM(e) {
	if (yA(e) && !e.isInline()) return !0;
	if (!Q(e) || Wj(e)) return !1;
	let t = e.getFirstChild(), n = t === null || UO(t) || Y(t) || t.isInline();
	return !e.isInline() && !1 !== e.canBeEmpty() && n;
}
function iM() {
	return eA();
}
var aM = /* @__PURE__ */ new WeakMap(), oM = /* @__PURE__ */ new Map();
function sM(e) {
	if (!e._readOnly && e.isEmpty()) return oM;
	e._readOnly || J(192);
	let t = aM.get(e);
	return t || (t = function(e) {
		let t = /* @__PURE__ */ new Map();
		for (let [n, r] of e._nodeMap) {
			let e = r.__type, i = t.get(e);
			i || (i = /* @__PURE__ */ new Map(), t.set(e, i)), i.set(n, r);
		}
		return t;
	}(e), aM.set(e, t)), t;
}
function cM(e) {
	let t = e.constructor.clone(e);
	return t.afterCloneFrom(e), t;
}
function lM(e) {
	return (t = cM(e))[PO] = !0, t;
	var t;
}
function uM(e, t) {
	let n = parseInt(e.style.paddingInlineStart, 10) || 0, r = Math.round(n / 40);
	t.setIndent(r);
}
function dM(e) {
	return !0 === e.__lexicalUnmanaged;
}
function fM(e, t) {
	return function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t);
	}(e, t) && e[t] !== IO[t];
}
function pM(e) {
	let t = $T in e.prototype ? e.prototype[$T]() : void 0, n = function(e) {
		if (!(e === IO || e.prototype instanceof IO)) {
			let t = "<unknown>", n = "<unknown>";
			try {
				t = e.getType();
			} catch {}
			try {
				FA.version && (n = JSON.parse(FA.version));
			} catch {}
			J(290, e.name, t, n);
		}
		return e === vA || e === gA || e === IO;
	}(e), r = !n && fM(e, "getType") ? e.getType() : void 0, i, a = r;
	if (t) if (r) i = t[r];
	else for (let [e, n] of Object.entries(t)) a = e, i = n;
	if (!n && a && (fM(e, "getType") || (e.getType = () => a), fM(e, "clone") || (e.clone = (t) => (LA(t), new e())), fM(e, "importJSON") || (e.importJSON = i && i.$importJSON || ((t) => new e().updateFromJSON(t))), !fM(e, "importDOM") && i)) {
		let { importDOM: t } = i;
		t && (e.importDOM = () => t);
	}
	return {
		ownNodeConfig: i,
		ownNodeType: a
	};
}
function mM(e) {
	let t = iM();
	return Zk(), new (t.resolveRegisteredNodeAfterReplacements(t.getRegisteredNode(e))).klass();
}
var hM = (e, t) => {
	let n = e;
	for (; n != null && !xA(n);) {
		if (t(n)) return n;
		n = n.getParent();
	}
	return null;
}, gM = {
	next: "previous",
	previous: "next"
}, _M = class {
	origin;
	constructor(e) {
		this.origin = e;
	}
	[Symbol.iterator]() {
		return HM({
			hasNext: TM,
			initial: this.getAdjacentCaret(),
			map: (e) => e,
			step: (e) => e.getAdjacentCaret()
		});
	}
	getAdjacentCaret() {
		return AM(this.getNodeAtCaret(), this.direction);
	}
	getSiblingCaret() {
		return AM(this.origin, this.direction);
	}
	remove() {
		let e = this.getNodeAtCaret();
		return e && e.remove(), this;
	}
	replaceOrInsert(e, t) {
		let n = this.getNodeAtCaret();
		return e.is(this.origin) || e.is(n) || (n === null ? this.insert(e) : n.replace(e, t)), this;
	}
	splice(e, t, n = "next") {
		let r = n === this.direction ? t : Array.from(t).reverse(), i = this, a = this.getParentAtCaret(), o = /* @__PURE__ */ new Map();
		for (let t = i.getAdjacentCaret(); t !== null && o.size < e; t = t.getAdjacentCaret()) {
			let e = t.origin.getWritable();
			o.set(e.getKey(), e);
		}
		for (let e of r) {
			if (o.size > 0) {
				let t = i.getNodeAtCaret();
				if (t) {
					if (o.delete(t.getKey()), o.delete(e.getKey()), !(t.is(e) || i.origin.is(e))) {
						let n = e.getParent();
						n && n.is(a) && e.remove(), t.replace(e);
					}
				} else t === null && J(263, Array.from(o).join(" "));
			} else i.insert(e);
			i = AM(e, this.direction);
		}
		for (let e of o.values()) e.remove();
		return this;
	}
}, vM = class e extends _M {
	type = "child";
	getLatest() {
		let e = this.origin.getLatest();
		return e === this.origin ? this : PM(e, this.direction);
	}
	getParentCaret(e = "root") {
		return AM(xM(this.getParentAtCaret(), e), this.direction);
	}
	getFlipped() {
		let e = bM(this.direction);
		return AM(this.getNodeAtCaret(), e) || PM(this.origin, e);
	}
	getParentAtCaret() {
		return this.origin;
	}
	getChildCaret() {
		return this;
	}
	isSameNodeCaret(t) {
		return t instanceof e && this.direction === t.direction && this.origin.is(t.origin);
	}
	isSamePointCaret(e) {
		return this.isSameNodeCaret(e);
	}
}, yM = {
	root: xA,
	shadowRoot: Wj
};
function bM(e) {
	return gM[e];
}
function xM(e, t = "root") {
	return yM[t](e) ? null : e;
}
var SM = class e extends _M {
	type = "sibling";
	getLatest() {
		let e = this.origin.getLatest();
		return e === this.origin ? this : AM(e, this.direction);
	}
	getSiblingCaret() {
		return this;
	}
	getParentAtCaret() {
		return this.origin.getParent();
	}
	getChildCaret() {
		return Q(this.origin) ? PM(this.origin, this.direction) : null;
	}
	getParentCaret(e = "root") {
		return AM(xM(this.getParentAtCaret(), e), this.direction);
	}
	getFlipped() {
		let e = bM(this.direction);
		return AM(this.getNodeAtCaret(), e) || PM(this.origin.getParentOrThrow(), e);
	}
	isSamePointCaret(t) {
		return t instanceof e && this.direction === t.direction && this.origin.is(t.origin);
	}
	isSameNodeCaret(t) {
		return (t instanceof e || t instanceof CM) && this.direction === t.direction && this.origin.is(t.origin);
	}
}, CM = class e extends _M {
	type = "text";
	offset;
	constructor(e, t) {
		super(e), this.offset = t;
	}
	getLatest() {
		let e = this.origin.getLatest();
		return e === this.origin ? this : jM(e, this.direction, this.offset);
	}
	getParentAtCaret() {
		return this.origin.getParent();
	}
	getChildCaret() {
		return null;
	}
	getParentCaret(e = "root") {
		return AM(xM(this.getParentAtCaret(), e), this.direction);
	}
	getFlipped() {
		return jM(this.origin, bM(this.direction), this.offset);
	}
	isSamePointCaret(t) {
		return t instanceof e && this.direction === t.direction && this.origin.is(t.origin) && this.offset === t.offset;
	}
	isSameNodeCaret(t) {
		return (t instanceof SM || t instanceof e) && this.direction === t.direction && this.origin.is(t.origin);
	}
	getSiblingCaret() {
		return AM(this.origin, this.direction);
	}
};
function wM(e) {
	return e instanceof CM;
}
function TM(e) {
	return e instanceof SM;
}
function EM(e) {
	return e instanceof vM;
}
var DM = {
	next: class extends CM {
		direction = "next";
		getNodeAtCaret() {
			return this.origin.getNextSibling();
		}
		insert(e) {
			return this.origin.insertAfter(e), this;
		}
	},
	previous: class extends CM {
		direction = "previous";
		getNodeAtCaret() {
			return this.origin.getPreviousSibling();
		}
		insert(e) {
			return this.origin.insertBefore(e), this;
		}
	}
}, OM = {
	next: class extends SM {
		direction = "next";
		getNodeAtCaret() {
			return this.origin.getNextSibling();
		}
		insert(e) {
			return this.origin.insertAfter(e), this;
		}
	},
	previous: class extends SM {
		direction = "previous";
		getNodeAtCaret() {
			return this.origin.getPreviousSibling();
		}
		insert(e) {
			return this.origin.insertBefore(e), this;
		}
	}
}, kM = {
	next: class extends vM {
		direction = "next";
		getNodeAtCaret() {
			return this.origin.getFirstChild();
		}
		insert(e) {
			return this.origin.splice(0, 0, [e]), this;
		}
	},
	previous: class extends vM {
		direction = "previous";
		getNodeAtCaret() {
			return this.origin.getLastChild();
		}
		insert(e) {
			return this.origin.splice(this.origin.getChildrenSize(), 0, [e]), this;
		}
	}
};
function AM(e, t) {
	return e ? new OM[t](e) : null;
}
function jM(e, t, n) {
	return e ? new DM[t](e, MM(e, n)) : null;
}
function MM(e, t, n = "error") {
	let r = e.getTextContentSize(), i = t === "next" ? r : t === "previous" ? 0 : t;
	return (i < 0 || i > r) && (n !== "clamp" && CT(284, String(t), String(r), e.getKey()), i = i < 0 ? 0 : r), i;
}
function NM(e, t) {
	return new RM(e, t);
}
function PM(e, t) {
	return Q(e) ? new kM[t](e) : null;
}
function FM(e) {
	return e && e.getChildCaret() || e;
}
function IM(e) {
	return e && FM(e.getAdjacentCaret());
}
var LM = class e {
	type = "node-caret-range";
	direction;
	anchor;
	focus;
	constructor(e, t, n) {
		this.anchor = e, this.focus = t, this.direction = n;
	}
	getLatest() {
		let t = this.anchor.getLatest(), n = this.focus.getLatest();
		return t === this.anchor && n === this.focus ? this : new e(t, n, this.direction);
	}
	isCollapsed() {
		return this.anchor.isSamePointCaret(this.focus);
	}
	getTextSlices() {
		let e = (e) => {
			let t = this[e].getLatest();
			return wM(t) ? function(e, t) {
				let { direction: n, origin: r } = e;
				return NM(e, MM(r, t === "focus" ? bM(n) : n) - e.offset);
			}(t, e) : null;
		}, t = e("anchor"), n = e("focus");
		if (t && n) {
			let { caret: e } = t, { caret: r } = n;
			if (e.isSameNodeCaret(r)) return [NM(e, r.offset - e.offset), null];
		}
		return [t, n];
	}
	iterNodeCarets(e = "root") {
		let t = wM(this.anchor) ? this.anchor.getSiblingCaret() : this.anchor.getLatest(), n = this.focus.getLatest(), r = wM(n), i = (t) => t.isSameNodeCaret(n) ? null : IM(t) || t.getParentCaret(e);
		return HM({
			hasNext: (e) => e !== null && !(r && n.isSameNodeCaret(e)),
			initial: t.isSameNodeCaret(n) ? null : i(t),
			map: (e) => e,
			step: i
		});
	}
	[Symbol.iterator]() {
		return this.iterNodeCarets("root");
	}
}, RM = class {
	type = "slice";
	caret;
	distance;
	constructor(e, t) {
		this.caret = e, this.distance = t;
	}
	getSliceIndices() {
		let { distance: e, caret: { offset: t } } = this, n = t + e;
		return n < t ? [n, t] : [t, n];
	}
	getTextContent() {
		let [e, t] = this.getSliceIndices();
		return this.caret.origin.getTextContent().slice(e, t);
	}
	getTextContentSize() {
		return Math.abs(this.distance);
	}
	removeTextSlice() {
		let { caret: { origin: e, direction: t } } = this, [n, r] = this.getSliceIndices(), i = e.getTextContent();
		return jM(e.setTextContent(i.slice(0, n) + i.slice(r)), t, n);
	}
};
function zM(e) {
	return VM(e, AM(dj(), e.direction));
}
function BM(e) {
	return VM(e, e);
}
function VM(e, t) {
	return e.direction !== t.direction && J(265), new LM(e, t, e.direction);
}
function HM(e) {
	let { initial: t, hasNext: n, step: r, map: i } = e, a = t;
	return {
		[Symbol.iterator]() {
			return this;
		},
		next() {
			if (!n(a)) return {
				done: !0,
				value: void 0
			};
			let e = {
				done: !1,
				value: i(a)
			};
			return a = r(a), e;
		}
	};
}
function UM(e, t) {
	let n = qM(e.origin, t.origin);
	switch (n === null && J(275, e.origin.getKey(), t.origin.getKey()), n.type) {
		case "same": {
			let n = e.type === "text", r = t.type === "text";
			return n && r ? function(e, t) {
				return Math.sign(e - t);
			}(e.offset, t.offset) : e.type === t.type ? 0 : n ? -1 : r ? 1 : e.type === "child" ? -1 : 1;
		}
		case "ancestor": return e.type === "child" ? -1 : 1;
		case "descendant": return t.type === "child" ? 1 : -1;
		case "branch": return WM(n);
	}
}
function WM(e) {
	let { a: t, b: n } = e, r = t.__key, i = n.__key, a = t, o = n;
	for (; a && o; a = a.getNextSibling(), o = o.getNextSibling()) {
		if (a.__key === i) return -1;
		if (o.__key === r) return 1;
	}
	return a === null ? 1 : -1;
}
function GM(e, t) {
	return t.is(e);
}
function KM(e) {
	return Q(e) ? [e.getLatest(), null] : [e.getParent(), e.getLatest()];
}
function qM(e, t) {
	if (e.is(t)) return {
		commonAncestor: e,
		type: "same"
	};
	let n = /* @__PURE__ */ new Map();
	for (let [t, r] = KM(e); t; r = t, t = t.getParent()) n.set(t, r);
	for (let [r, i] = KM(t); r; i = r, r = r.getParent()) {
		let a = n.get(r);
		if (a !== void 0) return a === null ? (GM(e, r) || J(276), {
			commonAncestor: r,
			type: "ancestor"
		}) : i === null ? (GM(t, r) || J(277), {
			commonAncestor: r,
			type: "descendant"
		}) : ((Q(a) || GM(e, a)) && (Q(i) || GM(t, i)) && r.is(a.getParent()) && r.is(i.getParent()) || J(278), {
			a,
			b: i,
			commonAncestor: r,
			type: "branch"
		});
	}
	return null;
}
function JM(e, t) {
	let { type: n, key: r, offset: i } = e, a = qj(e.key);
	return n === "text" ? (Y(a) || J(266, a.getType(), r), jM(a, t, i)) : (Q(a) || J(267, a.getType(), r), sN(a, e.offset, t));
}
function YM(e, t) {
	let { origin: n, direction: r } = t, i = r === "next";
	wM(t) ? e.set(n.getKey(), t.offset, "text") : TM(t) ? Y(n) ? e.set(n.getKey(), MM(n, r), "text") : e.set(n.getParentOrThrow().getKey(), n.getIndexWithinParent() + (i ? 1 : 0), "element") : (EM(t) && Q(n) || J(268), e.set(n.getKey(), i ? 0 : n.getChildrenSize(), "element"));
}
function XM(e) {
	let t = Z(), n = X(t) ? t : kk();
	return ZM(n, e), pj(n), n;
}
function ZM(e, t) {
	YM(e.anchor, t.anchor), YM(e.focus, t.focus);
}
function QM(e) {
	let { anchor: t, focus: n } = e, r = JM(t, "next"), i = JM(n, "next"), a = UM(r, i) <= 0 ? "next" : "previous";
	return VM(aN(r, a), aN(i, a));
}
function $M(e) {
	let { direction: t, origin: n } = e, r = AM(n, bM(t)).getNodeAtCaret();
	return r ? AM(r, t) : PM(n.getParentOrThrow(), t);
}
function eN(e, t = "root") {
	let n = [e];
	for (let r = EM(e) ? e.getParentCaret(t) : e.getSiblingCaret(); r !== null; r = r.getParentCaret(t)) n.push($M(r));
	return n;
}
function tN(e) {
	return !!e && e.origin.isAttached();
}
function nN(e, t = "removeEmptySlices") {
	if (e.isCollapsed()) return e;
	let n = "root", r = "next", i = t, a = oN(e, r), o = eN(a.anchor, n), s = eN(a.focus.getFlipped(), n), c = /* @__PURE__ */ new Set(), l = [];
	for (let e of a.iterNodeCarets(n)) if (EM(e)) c.add(e.origin.getKey());
	else if (TM(e)) {
		let { origin: t } = e;
		Q(t) && !c.has(t.getKey()) || l.push(t);
	}
	for (let e of l) e.remove();
	for (let e of a.getTextSlices()) {
		if (!e) continue;
		let { origin: t } = e.caret, n = t.getTextContentSize(), a = $M(AM(t, r)), c = t.getMode();
		if (Math.abs(e.distance) === n && i === "removeEmptySlices" || c === "token" && e.distance !== 0) a.remove();
		else if (e.distance !== 0) {
			i = "removeEmptySlices";
			let t = e.removeTextSlice(), n = e.caret.origin;
			if (c === "segmented") {
				let e = t.origin, n = ok(e.getTextContent()).setStyle(e.getStyle()).setFormat(e.getFormat());
				a.replaceOrInsert(n), t = jM(n, r, t.offset);
			}
			n.is(o[0].origin) && (o[0] = t), n.is(s[0].origin) && (s[0] = t.getFlipped());
		}
	}
	let u, d;
	for (let e of o) if (tN(e)) {
		u = rN(e);
		break;
	}
	for (let e of s) if (tN(e)) {
		d = rN(e);
		break;
	}
	let f = function(e, t, n) {
		if (!e || !t) return null;
		let r = e.getParentAtCaret(), i = t.getParentAtCaret();
		if (!r || !i) return null;
		let a = r.getParents().reverse();
		a.push(r);
		let o = i.getParents().reverse();
		o.push(i);
		let s = Math.min(a.length, o.length), c;
		for (c = 0; c < s && a[c] === o[c]; c++);
		let l = (e, t) => {
			let n;
			for (let r = c; r < e.length; r++) {
				let i = e[r];
				if (Wj(i)) return;
				!n && t(i) && (n = i);
			}
			return n;
		}, u = l(a, rM), d = u && l(o, (e) => n.has(e.getKey()) && rM(e));
		return u && d ? [u, d] : null;
	}(u, d, c);
	if (f) {
		let [e, t] = f;
		PM(e, "previous").splice(0, t.getChildren());
		let n = t.getParent();
		for (t.remove(!0); n && n.isEmpty();) {
			let e = n;
			n = n.getParent(), e.remove(!0);
		}
	}
	let p = [
		u,
		d,
		...o,
		...s
	].find(tN);
	if (p) return BM(aN(rN(p), e.direction));
	J(269, JSON.stringify(o.map((e) => e.origin.__key)));
}
function rN(e) {
	let t = function(e) {
		let t = e;
		for (; EM(t);) {
			let e = IM(t);
			if (!EM(e)) break;
			t = e;
		}
		return t;
	}(e.getLatest()), { direction: n } = t;
	if (Y(t.origin)) return wM(t) ? t : jM(t.origin, n, n);
	let r = t.getAdjacentCaret();
	return TM(r) && Y(r.origin) ? jM(r.origin, n, bM(n)) : t;
}
function iN(e) {
	return wM(e) && e.offset !== MM(e.origin, e.direction);
}
function aN(e, t) {
	return e.direction === t ? e : e.getFlipped();
}
function oN(e, t) {
	return e.direction === t ? e : VM(aN(e.focus, t), aN(e.anchor, t));
}
function sN(e, t, n) {
	let r = PM(e, "next");
	for (let e = 0; e < t; e++) {
		let e = r.getAdjacentCaret();
		if (e === null) break;
		r = e;
	}
	return aN(r, n);
}
function cN(e) {
	return e;
}
function lN(e) {
	return e;
}
function uN(e, t) {
	if (!t || e === t) return e;
	for (let n in t) if (e[n] !== t[n]) return {
		...e,
		...t
	};
	return e;
}
function dN(...e) {
	let t = [];
	for (let n of e) if (n && typeof n == "string") for (let [e] of n.matchAll(/\S+/g)) t.push(e);
	return t;
}
function fN(e, ...t) {
	let n = dN(...t);
	n.length > 0 && e.classList.add(...n);
}
function pN(...e) {
	return () => {
		for (let t = e.length - 1; t >= 0; t--) e[t]();
		e.length = 0;
	};
}
//#endregion
//#region node_modules/@lexical/react/LexicalComposer.prod.mjs
var mN = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, hN = mN ? ie : F, gN = { tag: LO };
function _N({ initialConfig: e, children: t }) {
	let n = ae(() => {
		let { theme: t, namespace: n, nodes: r, onError: i, editorState: a, html: o } = e, s = xT(null, t), c = PA({
			editable: e.editable,
			html: o,
			namespace: n,
			nodes: r,
			onError: (e) => i(e, c),
			theme: t
		});
		return function(e, t) {
			if (t !== null) {
				if (t === void 0) e.update(() => {
					let t = dj();
					if (t.isEmpty()) {
						let n = AA();
						t.append(n);
						let r = mN ? document.activeElement : null;
						(Z() !== null || r !== null && r === e.getRootElement()) && n.select();
					}
				}, gN);
				else if (t !== null) switch (typeof t) {
					case "string": {
						let n = e.parseEditorState(t);
						e.setEditorState(n, gN);
						break;
					}
					case "object":
						e.setEditorState(t, gN);
						break;
					case "function": e.update(() => {
						dj().isEmpty() && t(e);
					}, gN);
				}
			}
		}(c, a), [c, s];
	}, []);
	return hN(() => {
		let t = e.editable, [r] = n;
		r.setEditable(t === void 0 || t);
	}, []), E(bT.Provider, {
		value: n,
		children: t
	});
}
//#endregion
//#region node_modules/@lexical/react/useLexicalEditable.prod.mjs
var vN = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? ie : F;
function yN(e) {
	return {
		initialValueFn: () => e.isEditable(),
		subscribe: (t) => e.registerEditableListener(t)
	};
}
function bN() {
	return function(e) {
		let [t] = ST(), n = ae(() => e(t), [t, e]), [r, i] = ce(() => n.initialValueFn()), a = se(r);
		return vN(() => {
			let { initialValueFn: e, subscribe: t } = n, r = e();
			return a.current !== r && (a.current = r, i(r)), t((e) => {
				a.current = e, i(e);
			});
		}, [n, e]), r;
	}(yN);
}
//#endregion
//#region node_modules/@lexical/selection/LexicalSelection.prod.mjs
var xN = /* @__PURE__ */ new Map();
function SN(e) {
	let t = {};
	if (!e) return t;
	let n = e.split(";");
	for (let e of n) if (e !== "") {
		let [n, r] = e.split(/:([^]+)/);
		n && r && (t[n.trim()] = r.trim());
	}
	return t;
}
function CN(e) {
	let t = iM().getElementByKey(e.getKey());
	if (t === null) return null;
	let n = t.ownerDocument.defaultView;
	return n === null ? null : n.getComputedStyle(t);
}
function wN(e) {
	return CN(xA(e) ? e : e.getParentOrThrow());
}
function TN(e) {
	let t = wN(e);
	return t !== null && t.direction === "rtl";
}
function EN(e, t, n = "self") {
	let r = e.getStartEndPoints();
	if (t.isSelected(e) && !YA(t) && r !== null) {
		let [i, a] = r, o = e.isBackward(), s = i.getNode(), c = a.getNode(), l = t.is(s), u = t.is(c);
		if (l || u) {
			let [r, i] = yk(e), a = s.is(c), l = t.is(o ? c : s), u = t.is(o ? s : c), d, f = 0;
			a ? (f = r > i ? i : r, d = r > i ? r : i) : l ? (f = o ? i : r, d = void 0) : u && (f = 0, d = o ? r : i);
			let p = t.__text.slice(f, d);
			p !== t.__text && (n === "clone" && (t = lM(t)), t.__text = p);
		}
	}
	return t;
}
function DN(e) {
	let t = e.getStyle(), n = SN(t);
	xN.set(t, n);
}
function ON(e) {
	let t = kN(e);
	return t !== null && t.writingMode === "vertical-rl";
}
function kN(e) {
	let t = e.anchor.getNode();
	return Q(t) ? CN(t) : wN(t);
}
function AN(e, t) {
	let n = ON(e) ? !t : t;
	MN(e) && (n = !n);
	let r = JM(e.focus, n ? "previous" : "next");
	if (iN(r)) return !1;
	for (let e of zM(r)) {
		if (EM(e)) return !e.origin.isInline();
		if (!Q(e.origin)) {
			if (yA(e.origin)) return !0;
			break;
		}
	}
	return !1;
}
function jN(e, t, n, r) {
	e.modify(t ? "extend" : "move", n, r);
}
function MN(e) {
	let t = kN(e);
	return t !== null && t.direction === "rtl";
}
function NN(e, t, n) {
	let r = MN(e), i;
	i = ON(e) || r ? !n : n, jN(e, t, i, "character");
}
//#endregion
//#region node_modules/@lexical/utils/LexicalUtils.prod.mjs
function PN(e, ...t) {
	let n = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
	r.append("code", e);
	for (let e of t) r.append("v", e);
	throw n.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
var FN = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, IN = FN && "documentMode" in document ? document.documentMode : null;
FN && /Mac|iPod|iPhone|iPad/.test(navigator.platform), FN && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent), !(!FN || !("InputEvent" in window) || IN) && "getTargetRanges" in new window.InputEvent("input"), FN && /Version\/[\d.]+.*Safari/.test(navigator.userAgent), FN && /iPad|iPhone|iPod/.test(navigator.userAgent) && window.MSStream, FN && /Android/.test(navigator.userAgent), FN && /^(?=.*Chrome).*/i.test(navigator.userAgent), FN && /AppleWebKit\/[\d.]+/.test(navigator.userAgent);
function LN(e) {
	let t = hM(e, (e) => Q(e) && !e.isInline());
	return Q(t) || PN(4, e.__key), t;
}
function RN(e, t) {
	return e !== null && Object.getPrototypeOf(e).constructor.name === t.name;
}
function zN(e) {
	let t = Z();
	if (!X(t)) return !1;
	let n = /* @__PURE__ */ new Set(), r = t.getNodes();
	for (let t = 0; t < r.length; t++) {
		let i = r[t], a = i.getKey();
		if (n.has(a)) continue;
		let o = hM(i, (e) => Q(e) && !e.isInline());
		if (o === null) continue;
		let s = o.getKey();
		o.canIndent() && !n.has(s) && (n.add(s), e(o));
	}
	return n.size > 0;
}
//#endregion
//#region node_modules/@lexical/extension/LexicalExtension.prod.mjs
var BN = Symbol.for("preact-signals");
function VN() {
	if (GN > 1) return void GN--;
	let e, t = !1;
	for (; UN !== void 0;) {
		let n = UN;
		for (UN = void 0, KN++; n !== void 0;) {
			let r = n.o;
			if (n.o = void 0, n.f &= -3, !(8 & n.f) && XN(n)) try {
				n.c();
			} catch (n) {
				t ||= (e = n, !0);
			}
			n = r;
		}
	}
	if (KN = 0, GN--, t) throw e;
}
var HN, UN;
function WN(e) {
	let t = HN;
	HN = void 0;
	try {
		return e();
	} finally {
		HN = t;
	}
}
var GN = 0, KN = 0, qN = 0;
function JN(e) {
	if (HN === void 0) return;
	let t = e.n;
	return t === void 0 || t.t !== HN ? (t = {
		i: 0,
		S: e,
		p: HN.s,
		n: void 0,
		t: HN,
		e: void 0,
		x: void 0,
		r: t
	}, HN.s !== void 0 && (HN.s.n = t), HN.s = t, e.n = t, 32 & HN.f && e.S(t), t) : t.i === -1 ? (t.i = 0, t.n !== void 0 && (t.n.p = t.p, t.p !== void 0 && (t.p.n = t.n), t.p = HN.s, t.n = void 0, HN.s.n = t, HN.s = t), t) : void 0;
}
function YN(e, t) {
	this.v = e, this.i = 0, this.n = void 0, this.t = void 0, this.W = t?.watched, this.Z = t?.unwatched, this.name = t?.name;
}
function XN(e) {
	for (let t = e.s; t !== void 0; t = t.n) if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i) return !0;
	return !1;
}
function ZN(e) {
	for (let t = e.s; t !== void 0; t = t.n) {
		let n = t.S.n;
		if (n !== void 0 && (t.r = n), t.S.n = t, t.i = -1, t.n === void 0) {
			e.s = t;
			break;
		}
	}
}
function QN(e) {
	let t, n = e.s;
	for (; n !== void 0;) {
		let e = n.p;
		n.i === -1 ? (n.S.U(n), e !== void 0 && (e.n = n.n), n.n !== void 0 && (n.n.p = e)) : t = n, n.S.n = n.r, n.r !== void 0 && (n.r = void 0), n = e;
	}
	e.s = t;
}
function $N(e, t) {
	YN.call(this, void 0), this.x = e, this.s = void 0, this.g = qN - 1, this.f = 4, this.W = t?.watched, this.Z = t?.unwatched, this.name = t?.name;
}
function eP(e) {
	let t = e.u;
	if (e.u = void 0, typeof t == "function") {
		GN++;
		let n = HN;
		HN = void 0;
		try {
			t();
		} catch (t) {
			throw e.f &= -2, e.f |= 8, tP(e), t;
		} finally {
			HN = n, VN();
		}
	}
}
function tP(e) {
	for (let t = e.s; t !== void 0; t = t.n) t.S.U(t);
	e.x = void 0, e.s = void 0, eP(e);
}
function nP(e) {
	if (HN !== this) throw Error("Out-of-order effect");
	QN(this), HN = e, this.f &= -2, 8 & this.f && tP(this), VN();
}
function rP(e, t) {
	this.x = e, this.u = void 0, this.s = void 0, this.o = void 0, this.f = 32, this.name = t?.name;
}
function iP(e, t) {
	let n = new rP(e, t);
	try {
		n.c();
	} catch (e) {
		throw n.d(), e;
	}
	let r = n.d.bind(n);
	return r[Symbol.dispose] = r, r;
}
YN.prototype.brand = BN, YN.prototype.h = function() {
	return !0;
}, YN.prototype.S = function(e) {
	let t = this.t;
	t !== e && e.e === void 0 && (e.x = t, this.t = e, t === void 0 ? WN(() => {
		var e;
		(e = this.W) == null || e.call(this);
	}) : t.e = e);
}, YN.prototype.U = function(e) {
	if (this.t !== void 0) {
		let t = e.e, n = e.x;
		t !== void 0 && (t.x = n, e.e = void 0), n !== void 0 && (n.e = t, e.x = void 0), e === this.t && (this.t = n, n === void 0 && WN(() => {
			var e;
			(e = this.Z) == null || e.call(this);
		}));
	}
}, YN.prototype.subscribe = function(e) {
	return iP(() => {
		let t = this.value, n = HN;
		HN = void 0;
		try {
			e(t);
		} finally {
			HN = n;
		}
	}, { name: "sub" });
}, YN.prototype.valueOf = function() {
	return this.value;
}, YN.prototype.toString = function() {
	return this.value + "";
}, YN.prototype.toJSON = function() {
	return this.value;
}, YN.prototype.peek = function() {
	let e = HN;
	HN = void 0;
	try {
		return this.value;
	} finally {
		HN = e;
	}
}, Object.defineProperty(YN.prototype, "value", {
	get() {
		let e = JN(this);
		return e !== void 0 && (e.i = this.i), this.v;
	},
	set(e) {
		if (e !== this.v) {
			if (KN > 100) throw Error("Cycle detected");
			this.v = e, this.i++, qN++, GN++;
			try {
				for (let e = this.t; e !== void 0; e = e.x) e.t.N();
			} finally {
				VN();
			}
		}
	}
}), $N.prototype = new YN(), $N.prototype.h = function() {
	if (this.f &= -3, 1 & this.f) return !1;
	if ((36 & this.f) == 32 || (this.f &= -5, this.g === qN)) return !0;
	if (this.g = qN, this.f |= 1, this.i > 0 && !XN(this)) return this.f &= -2, !0;
	let e = HN;
	try {
		ZN(this), HN = this;
		let e = this.x();
		(16 & this.f || this.v !== e || this.i === 0) && (this.v = e, this.f &= -17, this.i++);
	} catch (e) {
		this.v = e, this.f |= 16, this.i++;
	}
	return HN = e, QN(this), this.f &= -2, !0;
}, $N.prototype.S = function(e) {
	if (this.t === void 0) {
		this.f |= 36;
		for (let e = this.s; e !== void 0; e = e.n) e.S.S(e);
	}
	YN.prototype.S.call(this, e);
}, $N.prototype.U = function(e) {
	if (this.t !== void 0 && (YN.prototype.U.call(this, e), this.t === void 0)) {
		this.f &= -33;
		for (let e = this.s; e !== void 0; e = e.n) e.S.U(e);
	}
}, $N.prototype.N = function() {
	if (!(2 & this.f)) {
		this.f |= 6;
		for (let e = this.t; e !== void 0; e = e.x) e.t.N();
	}
}, Object.defineProperty($N.prototype, "value", { get() {
	if (1 & this.f) throw Error("Cycle detected");
	let e = JN(this);
	if (this.h(), e !== void 0 && (e.i = this.i), 16 & this.f) throw this.v;
	return this.v;
} }), rP.prototype.c = function() {
	let e = this.S();
	try {
		if (8 & this.f || this.x === void 0) return;
		let e = this.x();
		typeof e == "function" && (this.u = e);
	} finally {
		e();
	}
}, rP.prototype.S = function() {
	if (1 & this.f) throw Error("Cycle detected");
	this.f |= 1, this.f &= -9, eP(this), ZN(this), GN++;
	let e = HN;
	return HN = this, nP.bind(this, e);
}, rP.prototype.N = function() {
	2 & this.f || (this.f |= 2, this.o = UN, UN = this);
}, rP.prototype.d = function() {
	this.f |= 8, 1 & this.f || tP(this);
}, rP.prototype.dispose = function() {
	this.d();
};
function aP(e) {
	return (typeof e.nodes == "function" ? e.nodes() : e.nodes) || [];
}
fE("format", { parse: (e) => typeof e == "number" ? e : 0 });
function oP(e, ...t) {
	let n = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
	r.append("code", e);
	for (let e of t) r.append("v", e);
	throw n.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
function sP(e, t) {
	if (e && t && !Array.isArray(t) && typeof e == "object" && typeof t == "object") {
		let n = e, r = t;
		for (let e in r) n[e] = sP(n[e], r[e]);
		return e;
	}
	return t;
}
var cP = 0, lP = 1, uP = 2, dP = 3, fP = 4, pP = 5, mP = 6, hP = 7;
function gP(e) {
	return e.id === cP;
}
function _P(e) {
	return e.id === uP;
}
function vP(e) {
	return function(e) {
		return e.id === lP;
	}(e) || oP(305, String(e.id), String(lP)), Object.assign(e, { id: uP });
}
var yP = /* @__PURE__ */ new Set(), bP = class {
	builder;
	configs;
	_dependency;
	_peerNameSet;
	extension;
	state;
	_signal;
	constructor(e, t) {
		this.builder = e, this.extension = t, this.configs = /* @__PURE__ */ new Set(), this.state = { id: cP };
	}
	mergeConfigs() {
		let e = this.extension.config || {}, t = this.extension.mergeConfig ? this.extension.mergeConfig.bind(this.extension) : uN;
		for (let n of this.configs) e = t(e, n);
		return e;
	}
	init(e) {
		let t = this.state;
		_P(t) || oP(306, String(t.id));
		let n = {
			getDependency: this.getInitDependency.bind(this),
			getDirectDependentNames: this.getDirectDependentNames.bind(this),
			getPeer: this.getInitPeer.bind(this),
			getPeerNameSet: this.getPeerNameSet.bind(this)
		}, r = {
			...n,
			getDependency: this.getDependency.bind(this),
			getInitResult: this.getInitResult.bind(this),
			getPeer: this.getPeer.bind(this)
		}, i = function(e, t, n) {
			return Object.assign(e, {
				config: t,
				id: dP,
				registerState: n
			});
		}(t, this.mergeConfigs(), n), a;
		this.state = i, this.extension.init && (a = this.extension.init(e, i.config, n)), this.state = function(e, t, n) {
			return Object.assign(e, {
				id: fP,
				initResult: t,
				registerState: n
			});
		}(i, a, r);
	}
	build(e) {
		let t = this.state, n;
		t.id !== fP && oP(307, String(t.id), String(pP)), this.extension.build && (n = this.extension.build(e, t.config, t.registerState));
		let r = {
			...t.registerState,
			getOutput: () => n,
			getSignal: this.getSignal.bind(this)
		};
		this.state = function(e, t, n) {
			return Object.assign(e, {
				id: pP,
				output: t,
				registerState: n
			});
		}(t, n, r);
	}
	register(e, t) {
		this._signal = t;
		let n = this.state;
		n.id !== pP && oP(308, String(n.id), String(pP));
		let r = this.extension.register && this.extension.register(e, n.config, n.registerState);
		return this.state = function(e) {
			return Object.assign(e, { id: mP });
		}(n), () => {
			let e = this.state;
			e.id !== hP && oP(309, String(n.id), String(hP)), this.state = function(e) {
				return Object.assign(e, { id: pP });
			}(e), r && r();
		};
	}
	afterRegistration(e) {
		let t = this.state, n;
		return t.id !== mP && oP(310, String(t.id), String(mP)), this.extension.afterRegistration && (n = this.extension.afterRegistration(e, t.config, t.registerState)), this.state = function(e) {
			return Object.assign(e, { id: hP });
		}(t), n;
	}
	getSignal() {
		return this._signal === void 0 && oP(311), this._signal;
	}
	getInitResult() {
		this.extension.init === void 0 && oP(312, this.extension.name);
		let e = this.state;
		return function(e) {
			return e.id >= fP;
		}(e) || oP(313, String(e.id), String(fP)), e.initResult;
	}
	getInitPeer(e) {
		let t = this.builder.extensionNameMap.get(e);
		return t ? t.getExtensionInitDependency() : void 0;
	}
	getExtensionInitDependency() {
		let e = this.state;
		return function(e) {
			return e.id >= dP;
		}(e) || oP(314, String(e.id), String(dP)), { config: e.config };
	}
	getPeer(e) {
		let t = this.builder.extensionNameMap.get(e);
		return t ? t.getExtensionDependency() : void 0;
	}
	getInitDependency(e) {
		let t = this.builder.getExtensionRep(e);
		return t === void 0 && oP(315, this.extension.name, e.name), t.getExtensionInitDependency();
	}
	getDependency(e) {
		let t = this.builder.getExtensionRep(e);
		return t === void 0 && oP(315, this.extension.name, e.name), t.getExtensionDependency();
	}
	getState() {
		let e = this.state;
		return function(e) {
			return e.id >= hP;
		}(e) || oP(316, String(e.id), String(hP)), e;
	}
	getDirectDependentNames() {
		return this.builder.incomingEdges.get(this.extension.name) || yP;
	}
	getPeerNameSet() {
		let e = this._peerNameSet;
		return e || (e = new Set((this.extension.peerDependencies || []).map(([e]) => e)), this._peerNameSet = e), e;
	}
	getExtensionDependency() {
		if (!this._dependency) {
			let e = this.state;
			(function(e) {
				return e.id >= pP;
			})(e) || oP(317, this.extension.name), this._dependency = {
				config: e.config,
				init: e.initResult,
				output: e.output
			};
		}
		return this._dependency;
	}
}, xP = { tag: LO };
function SP() {
	let e = dj();
	e.isEmpty() && e.append(AA());
}
var CP = cN({
	config: lN({
		setOptions: xP,
		updateOptions: xP
	}),
	init: ({ $initialEditorState: e = SP }) => ({
		$initialEditorState: e,
		initialized: !1
	}),
	afterRegistration(e, { updateOptions: t, setOptions: n }, r) {
		let i = r.getInitResult();
		if (!i.initialized) {
			i.initialized = !0;
			let { $initialEditorState: r } = i;
			if (TA(r)) e.setEditorState(r, n);
			else if (typeof r == "function") e.update(() => {
				r(e);
			}, t);
			else if (r && (typeof r == "string" || typeof r == "object")) {
				let t = e.parseEditorState(r);
				e.setEditorState(t, n);
			}
		}
		return () => {};
	},
	name: "@lexical/extension/InitialState",
	nodes: [
		bA,
		ZO,
		BO,
		ck,
		OA
	]
}), wP = Symbol.for("@lexical/extension/LexicalBuilder");
function TP() {}
function EP(e) {
	throw e;
}
function DP(e) {
	return Array.isArray(e) ? e : [e];
}
var OP = "0.41.0+prod.esm", kP = class e {
	roots;
	extensionNameMap;
	outgoingConfigEdges;
	incomingEdges;
	conflicts;
	_sortedExtensionReps;
	PACKAGE_VERSION;
	constructor(e) {
		this.outgoingConfigEdges = /* @__PURE__ */ new Map(), this.incomingEdges = /* @__PURE__ */ new Map(), this.extensionNameMap = /* @__PURE__ */ new Map(), this.conflicts = /* @__PURE__ */ new Map(), this.PACKAGE_VERSION = OP, this.roots = e;
		for (let t of e) this.addExtension(t);
	}
	static fromExtensions(t) {
		let n = [DP(CP)];
		for (let e of t) n.push(DP(e));
		return new e(n);
	}
	static maybeFromEditor(t) {
		let n = t[wP];
		return n && (n.PACKAGE_VERSION !== OP && oP(292, n.PACKAGE_VERSION, OP), n instanceof e || oP(293)), n;
	}
	static fromEditor(t) {
		let n = e.maybeFromEditor(t);
		return n === void 0 && oP(294), n;
	}
	constructEditor() {
		let { $initialEditorState: e, onError: t, ...n } = this.buildCreateEditorArgs(), r = Object.assign(PA({
			...n,
			...t ? { onError: (e) => {
				t(e, r);
			} } : {}
		}), { [wP]: this });
		for (let e of this.sortedExtensionReps()) e.build(r);
		return r;
	}
	buildEditor() {
		let e = TP;
		function t() {
			try {
				e();
			} finally {
				e = TP;
			}
		}
		let n = Object.assign(this.constructEditor(), {
			dispose: t,
			[Symbol.dispose]: t
		});
		return e = pN(this.registerEditor(n), () => n.setRootElement(null)), n;
	}
	hasExtensionByName(e) {
		return this.extensionNameMap.has(e);
	}
	getExtensionRep(e) {
		let t = this.extensionNameMap.get(e.name);
		if (t) return t.extension !== e && oP(295, e.name), t;
	}
	addEdge(e, t, n) {
		let r = this.outgoingConfigEdges.get(e);
		r ? r.set(t, n) : this.outgoingConfigEdges.set(e, new Map([[t, n]]));
		let i = this.incomingEdges.get(t);
		i ? i.add(e) : this.incomingEdges.set(t, new Set([e]));
	}
	addExtension(e) {
		this._sortedExtensionReps !== void 0 && oP(296);
		let [t] = DP(e);
		typeof t.name != "string" && oP(297, typeof t.name);
		let n = this.extensionNameMap.get(t.name);
		if (n !== void 0 && n.extension !== t && oP(298, t.name), !n) {
			n = new bP(this, t), this.extensionNameMap.set(t.name, n);
			let e = this.conflicts.get(t.name);
			typeof e == "string" && oP(299, t.name, e);
			for (let e of t.conflictsWith || []) this.extensionNameMap.has(e) && oP(299, t.name, e), this.conflicts.set(e, t.name);
			for (let e of t.dependencies || []) {
				let n = DP(e);
				this.addEdge(t.name, n[0].name, n.slice(1)), this.addExtension(n);
			}
			for (let [e, n] of t.peerDependencies || []) this.addEdge(t.name, e, n ? [n] : []);
		}
	}
	sortedExtensionReps() {
		if (this._sortedExtensionReps) return this._sortedExtensionReps;
		let e = [], t = (n, r) => {
			let i = n.state;
			if (_P(i)) return;
			let a = n.extension.name;
			var o;
			gP(i) || oP(300, a, r || "[unknown]"), gP(o = i) || oP(304, String(o.id), String(cP)), i = Object.assign(o, { id: lP }), n.state = i;
			let s = this.outgoingConfigEdges.get(a);
			if (s) for (let e of s.keys()) {
				let n = this.extensionNameMap.get(e);
				n && t(n, a);
			}
			i = vP(i), n.state = i, e.push(n);
		};
		for (let e of this.extensionNameMap.values()) gP(e.state) && t(e);
		for (let t of e) for (let [e, n] of this.outgoingConfigEdges.get(t.extension.name) || []) if (n.length > 0) {
			let t = this.extensionNameMap.get(e);
			if (t) for (let e of n) t.configs.add(e);
		}
		for (let [e, ...t] of this.roots) if (t.length > 0) {
			let n = this.extensionNameMap.get(e.name);
			n === void 0 && oP(301, e.name);
			for (let e of t) n.configs.add(e);
		}
		return this._sortedExtensionReps = e, this._sortedExtensionReps;
	}
	registerEditor(e) {
		let t = this.sortedExtensionReps(), n = new AbortController(), r = [() => n.abort()], i = n.signal;
		for (let n of t) {
			let t = n.register(e, i);
			t && r.push(t);
		}
		for (let n of t) {
			let t = n.afterRegistration(e);
			t && r.push(t);
		}
		return pN(...r);
	}
	buildCreateEditorArgs() {
		let e = {}, t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), i = {}, a = {}, o = this.sortedExtensionReps();
		for (let s of o) {
			let { extension: o } = s;
			if (o.onError !== void 0 && (e.onError = o.onError), o.disableEvents !== void 0 && (e.disableEvents = o.disableEvents), o.parentEditor !== void 0 && (e.parentEditor = o.parentEditor), o.editable !== void 0 && (e.editable = o.editable), o.namespace !== void 0 && (e.namespace = o.namespace), o.$initialEditorState !== void 0 && (e.$initialEditorState = o.$initialEditorState), o.nodes) for (let e of aP(o)) {
				if (typeof e != "function") {
					let t = n.get(e.replace);
					t && oP(302, o.name, e.replace.name, t.extension.name), n.set(e.replace, s);
				}
				t.add(e);
			}
			if (o.html) {
				if (o.html.export) for (let [e, t] of o.html.export.entries()) r.set(e, t);
				o.html.import && Object.assign(i, o.html.import);
			}
			o.theme && sP(a, o.theme);
		}
		Object.keys(a).length > 0 && (e.theme = a), t.size && (e.nodes = [...t]);
		let s = Object.keys(i).length > 0, c = r.size > 0;
		(s || c) && (e.html = {}, s && (e.html.import = i), c && (e.html.export = r));
		for (let t of o) t.init(e);
		return e.onError ||= EP, e;
	}
}, AP = class e extends vA {
	static getType() {
		return "horizontalrule";
	}
	static clone(t) {
		return new e(t.__key);
	}
	static importJSON(e) {
		return MP().updateFromJSON(e);
	}
	static importDOM() {
		return { hr: () => ({
			conversion: jP,
			priority: 0
		}) };
	}
	exportDOM() {
		return { element: document.createElement("hr") };
	}
	createDOM(e) {
		let t = document.createElement("hr");
		return fN(t, e.theme.hr), t;
	}
	getTextContent() {
		return "\n";
	}
	isInline() {
		return !1;
	}
	updateDOM() {
		return !1;
	}
};
function jP() {
	return { node: MP() };
}
function MP() {
	return mM(AP);
}
//#endregion
//#region node_modules/@lexical/react/LexicalReactProviderExtension.prod.mjs
var NP = cN({ name: "@lexical/react/ReactProvider" });
//#endregion
//#region node_modules/@lexical/text/LexicalText.prod.mjs
function PP() {
	return dj().getTextContent();
}
function FP(e, t = !0) {
	if (e) return !1;
	let n = PP();
	return t && (n = n.trim()), n === "";
}
function IP(e) {
	if (!FP(e, !1)) return !1;
	let t = dj().getChildren(), n = t.length;
	if (n > 1) return !1;
	for (let e = 0; e < n; e++) {
		let n = t[e];
		if (yA(n)) return !1;
		if (Q(n)) {
			if (!jA(n) || n.__indent !== 0) return !1;
			let t = n.getChildren(), r = t.length;
			for (let n = 0; n < r; n++) {
				let n = t[e];
				if (!Y(n)) return !1;
			}
		}
	}
	return !0;
}
function LP(e) {
	return () => IP(e);
}
//#endregion
//#region node_modules/@lexical/dragon/LexicalDragon.prod.mjs
function RP(e) {
	let t = window.location.origin, n = (n) => {
		if (n.origin !== t) return;
		let r = e.getRootElement();
		if (document.activeElement !== r) return;
		let i = n.data;
		if (typeof i == "string") {
			let t;
			try {
				t = JSON.parse(i);
			} catch {
				return;
			}
			if (t && t.protocol === "nuanria_messaging" && t.type === "request") {
				let r = t.payload;
				if (r && r.functionId === "makeChanges") {
					let t = r.args;
					if (t) {
						let [r, i, a, o, s] = t;
						e.update(() => {
							let e = Z();
							if (X(e)) {
								let t = e.anchor, c = t.getNode(), l = 0, u = 0;
								if (Y(c) && r >= 0 && i >= 0 && (l = r, u = r + i, e.setTextNodeRange(c, l, c, u)), l === u && a === "" || (e.insertRawText(a), c = t.getNode()), Y(c)) {
									l = o, u = o + s;
									let t = c.getTextContentSize();
									l = l > t ? t : l, u = u > t ? t : u, e.setTextNodeRange(c, l, c, u);
								}
								n.stopImmediatePropagation();
							}
						});
					}
				}
			}
		}
	};
	return window.addEventListener("message", n, !0), () => {
		window.removeEventListener("message", n, !0);
	};
}
//#endregion
//#region node_modules/@lexical/html/LexicalHtml.prod.mjs
function zP(e, t) {
	let n = ZA(t) ? t.body.childNodes : t.childNodes, r = [], i = [];
	for (let t of n) if (!HP.has(t.nodeName)) {
		let n = UP(t, e, i, !1);
		n !== null && (r = r.concat(n));
	}
	return function(e) {
		for (let t of e) t.getNextSibling() instanceof DA && t.insertAfter(HO());
		for (let t of e) {
			let e = t.getChildren();
			for (let n of e) t.insertBefore(n);
			t.remove();
		}
	}(i), r;
}
function BP(e, t) {
	if (typeof document > "u" || typeof window > "u" && global.window === void 0) throw Error("To use $generateHtmlFromNodes in headless mode please initialize a headless browser implementation such as JSDom before calling this function.");
	let n = document.createElement("div"), r = dj().getChildren();
	for (let i = 0; i < r.length; i++) VP(e, r[i], n, t);
	return n.innerHTML;
}
function VP(e, t, n, r = null) {
	let i = r === null || t.isSelected(r), a = Q(t) && t.excludeFromCopy("html"), o = t;
	r !== null && Y(t) && (o = EN(r, t, "clone"));
	let s = Q(o) ? o.getChildren() : [], c = BA(e, o.getType()), l;
	l = c && c.exportDOM !== void 0 ? c.exportDOM(e, o) : o.exportDOM(e);
	let { element: u, after: d } = l;
	if (!u) return !1;
	let f = document.createDocumentFragment();
	for (let n = 0; n < s.length; n++) {
		let a = s[n], o = VP(e, a, f, r);
		!i && Q(t) && o && t.extractWithChild(a, r, "html") && (i = !0);
	}
	if (i && !a) {
		if ((Qj(u) || eM(u)) && u.append(f), n.append(u), d) {
			let e = d.call(o, u);
			e && (eM(u) ? u.replaceChildren(e) : u.replaceWith(e));
		}
	} else n.append(f);
	return i;
}
var HP = new Set(["STYLE", "SCRIPT"]);
function UP(e, t, n, r, i = /* @__PURE__ */ new Map(), a) {
	let o = [];
	if (HP.has(e.nodeName)) return o;
	let s = null, c = function(e, t) {
		let { nodeName: n } = e, r = t._htmlConversions.get(n.toLowerCase()), i = null;
		if (r !== void 0) for (let t of r) {
			let n = t(e);
			n !== null && (i === null || (i.priority || 0) <= (n.priority || 0)) && (i = n);
		}
		return i === null ? null : i.conversion;
	}(e, t), l = c ? c(e) : null, u = null;
	if (l !== null) {
		u = l.after;
		let t = l.node;
		if (s = Array.isArray(t) ? t[t.length - 1] : t, s !== null) {
			for (let [, e] of i) if (s = e(s, a), !s) break;
			s && o.push(...Array.isArray(t) ? t : [s]);
		}
		l.forChild != null && i.set(e.nodeName, l.forChild);
	}
	let d = e.childNodes, f = [], p = (s == null || !Wj(s)) && (s != null && Dk(s) || r);
	for (let e = 0; e < d.length; e++) f.push(...UP(d[e], t, n, p, new Map(i), s));
	return u != null && (f = u(f)), nM(e) && (f = WP(e, f, p ? () => {
		let e = new DA();
		return n.push(e), e;
	} : AA)), s == null ? f.length > 0 ? o = o.concat(f) : nM(e) && function(e) {
		return e.nextSibling == null || e.previousSibling == null ? !1 : tM(e.nextSibling) && tM(e.previousSibling);
	}(e) && (o = o.concat(HO())) : Q(s) && s.append(...f), o;
}
function WP(e, t, n) {
	let r = e.style.textAlign, i = [], a = [];
	for (let e = 0; e < t.length; e++) {
		let o = t[e];
		if (Dk(o)) r && !o.getFormat() && o.setFormat(r), i.push(o);
		else if (a.push(o), e === t.length - 1 || e < t.length - 1 && Dk(t[e + 1])) {
			let e = n();
			e.setFormat(r), e.append(...a), i.push(e), a = [];
		}
	}
	return i;
}
//#endregion
//#region node_modules/@lexical/clipboard/LexicalClipboard.prod.mjs
function GP(e, ...t) {
	let n = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
	r.append("code", e);
	for (let e of t) r.append("v", e);
	throw n.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
function KP(e, t = Z()) {
	return t ?? GP(166), X(t) && t.isCollapsed() || t.getNodes().length === 0 ? "" : BP(e, t);
}
function qP(e, t = Z()) {
	return t ?? GP(166), X(t) && t.isCollapsed() || t.getNodes().length === 0 ? null : JSON.stringify(ZP(e, t));
}
function JP(e, t, n) {
	let r = e.getData("application/x-lexical-editor");
	if (r) try {
		let e = JSON.parse(r);
		if (e.namespace === n._config.namespace && Array.isArray(e.nodes)) return YP(n, QP(e.nodes), t);
	} catch (e) {
		console.error(e);
	}
	let i = e.getData("text/html"), a = e.getData("text/plain");
	if (i && a !== i) try {
		return YP(n, zP(n, new DOMParser().parseFromString(function(e) {
			return window.trustedTypes && window.trustedTypes.createPolicy ? window.trustedTypes.createPolicy("lexical", { createHTML: (e) => e }).createHTML(e) : e;
		}(i), "text/html")), t);
	} catch (e) {
		console.error(e);
	}
	let o = a || e.getData("text/uri-list");
	if (o != null) if (X(t)) {
		let e = o.split(/(\r?\n|\t)/);
		e[e.length - 1] === "" && e.pop();
		for (let t = 0; t < e.length; t++) {
			let n = Z();
			if (X(n)) {
				let r = e[t];
				r === "\n" || r === "\r\n" ? n.insertParagraph() : r === "	" ? n.insertNodes([lk()]) : n.insertText(r);
			}
		}
	} else t.insertRawText(o);
}
function YP(e, t, n) {
	e.dispatchCommand(lD, {
		nodes: t,
		selection: n
	}) || (n.insertNodes(t), function(e) {
		if (X(e) && e.isCollapsed()) {
			let t = e.anchor, n = null, r = JM(t, "previous");
			if (r) if (wM(r)) n = r.origin;
			else {
				let e = VM(r, PM(dj(), "next").getFlipped());
				for (let t of e) {
					if (Y(t.origin)) {
						n = t.origin;
						break;
					}
					if (Q(t.origin) && !t.origin.isInline()) break;
				}
			}
			if (n && Y(n)) {
				let t = n.getFormat(), r = n.getStyle();
				e.format === t && e.style === r || (e.format = t, e.style = r, e.dirty = !0);
			}
		}
	}(n));
}
function XP(e, t, n, r = []) {
	let i = t === null || n.isSelected(t), a = Q(n) && n.excludeFromCopy("html"), o = n;
	t !== null && Y(o) && (o = EN(t, o, "clone"));
	let s = Q(o) ? o.getChildren() : [], c = function(e) {
		let t = e.exportJSON(), n = e.constructor;
		if (t.type !== n.getType() && GP(58, n.name), Q(e)) {
			let e = t.children;
			Array.isArray(e) || GP(59, n.name);
		}
		return t;
	}(o);
	Y(o) && o.getTextContentSize() === 0 && (i = !1);
	for (let r = 0; r < s.length; r++) {
		let a = s[r], o = XP(e, t, a, c.children);
		!i && Q(n) && o && n.extractWithChild(a, t, "clone") && (i = !0);
	}
	if (i && !a) r.push(c);
	else if (Array.isArray(c.children)) for (let e = 0; e < c.children.length; e++) {
		let t = c.children[e];
		r.push(t);
	}
	return i;
}
function ZP(e, t) {
	let n = [], r = dj().getChildren();
	for (let i = 0; i < r.length; i++) XP(e, t, r[i], n);
	return {
		namespace: e._config.namespace,
		nodes: n
	};
}
function QP(e) {
	let t = [];
	for (let n = 0; n < e.length; n++) {
		let r = e[n], i = oA(r);
		Y(i) && DN(i), t.push(i);
	}
	return t;
}
var $P = null;
async function eF(e, t, n) {
	if ($P !== null) return !1;
	if (t !== null) return new Promise((r, i) => {
		e.update(() => {
			r(tF(e, t, n));
		});
	});
	let r = e.getRootElement(), i = e._window || window, a = i.document, o = Xj(i);
	if (r === null || o === null) return !1;
	let s = a.createElement("span");
	s.style.cssText = "position: fixed; top: -1000px;", s.append(a.createTextNode("#")), r.append(s);
	let c = new Range();
	return c.setStart(s, 0), c.setEnd(s, 1), o.removeAllRanges(), o.addRange(c), new Promise((t, r) => {
		let o = e.registerCommand(qD, (r) => (RN(r, ClipboardEvent) && (o(), $P !== null && (i.clearTimeout($P), $P = null), t(tF(e, r, n))), !0), 4);
		$P = i.setTimeout(() => {
			o(), $P = null, t(!1);
		}, 50), a.execCommand("copy"), s.remove();
	});
}
function tF(e, t, n) {
	if (n === void 0) {
		let t = Xj(e._window), r = Z();
		if (!r || r.isCollapsed() || !t) return !1;
		let i = t.anchorNode, a = t.focusNode;
		if (i !== null && a !== null && !WA(e, i, a)) return !1;
		n = rF(r);
	}
	t.preventDefault();
	let r = t.clipboardData;
	return r !== null && (iF(r, n), !0);
}
var nF = [["text/html", KP], ["application/x-lexical-editor", qP]];
function rF(e = Z()) {
	let t = { "text/plain": e ? e.getTextContent() : "" };
	if (e) {
		let n = iM();
		for (let [r, i] of nF) {
			let a = i(n, e);
			a !== null && (t[r] = a);
		}
	}
	return t;
}
function iF(e, t) {
	for (let [n] of nF) t[n] === void 0 && e.setData(n, "");
	for (let n in t) {
		let r = t[n];
		r !== void 0 && e.setData(n, r);
	}
}
//#endregion
//#region node_modules/@lexical/rich-text/LexicalRichText.prod.mjs
function aF(e, t) {
	if (document.caretRangeFromPoint !== void 0) {
		let n = document.caretRangeFromPoint(e, t);
		return n === null ? null : {
			node: n.startContainer,
			offset: n.startOffset
		};
	}
	if (document.caretPositionFromPoint !== "undefined") {
		let n = document.caretPositionFromPoint(e, t);
		return n === null ? null : {
			node: n.offsetNode,
			offset: n.offset
		};
	}
	return null;
}
var oF = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, sF = oF && "documentMode" in document ? document.documentMode : null, cF = oF && /Mac|iPod|iPhone|iPad/.test(navigator.platform), lF = !(!oF || !("InputEvent" in window) || sF) && "getTargetRanges" in new window.InputEvent("input"), uF = oF && /Version\/[\d.]+.*Safari/.test(navigator.userAgent), dF = oF && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, fF = oF && /^(?=.*Chrome).*/i.test(navigator.userAgent), pF = oF && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && cF && !fF, mF = sD("DRAG_DROP_PASTE_FILE"), hF = class e extends gA {
	static getType() {
		return "quote";
	}
	static clone(t) {
		return new e(t.__key);
	}
	createDOM(e) {
		let t = document.createElement("blockquote");
		return fN(t, e.theme.quote), t;
	}
	updateDOM(e, t) {
		return !1;
	}
	static importDOM() {
		return { blockquote: (e) => ({
			conversion: bF,
			priority: 0
		}) };
	}
	exportDOM(e) {
		let { element: t } = super.exportDOM(e);
		if (Qj(t)) {
			this.isEmpty() && t.append(document.createElement("br"));
			let e = this.getFormatType();
			e && (t.style.textAlign = e);
			let n = this.getDirection();
			n && (t.dir = n);
		}
		return { element: t };
	}
	static importJSON(e) {
		return gF().updateFromJSON(e);
	}
	insertNewAfter(e, t) {
		let n = AA(), r = this.getDirection();
		return n.setDirection(r), this.insertAfter(n, t), n;
	}
	collapseAtStart() {
		let e = AA();
		return this.getChildren().forEach((t) => e.append(t)), this.replace(e), !0;
	}
	canMergeWhenEmpty() {
		return !0;
	}
};
function gF() {
	return Gj(new hF());
}
var _F = class e extends gA {
	__tag;
	static getType() {
		return "heading";
	}
	static clone(t) {
		return new e(t.__tag, t.__key);
	}
	constructor(e, t) {
		super(t), this.__tag = e;
	}
	getTag() {
		return this.__tag;
	}
	setTag(e) {
		let t = this.getWritable();
		return this.__tag = e, t;
	}
	createDOM(e) {
		let t = this.__tag, n = document.createElement(t), r = e.theme.heading;
		if (r !== void 0) {
			let e = r[t];
			fN(n, e);
		}
		return n;
	}
	updateDOM(e, t, n) {
		return e.__tag !== this.__tag;
	}
	static importDOM() {
		return {
			h1: (e) => ({
				conversion: yF,
				priority: 0
			}),
			h2: (e) => ({
				conversion: yF,
				priority: 0
			}),
			h3: (e) => ({
				conversion: yF,
				priority: 0
			}),
			h4: (e) => ({
				conversion: yF,
				priority: 0
			}),
			h5: (e) => ({
				conversion: yF,
				priority: 0
			}),
			h6: (e) => ({
				conversion: yF,
				priority: 0
			}),
			p: (e) => {
				let t = e.firstChild;
				return t !== null && vF(t) ? {
					conversion: () => ({ node: null }),
					priority: 3
				} : null;
			},
			span: (e) => vF(e) ? {
				conversion: (e) => ({ node: xF("h1") }),
				priority: 3
			} : null
		};
	}
	exportDOM(e) {
		let { element: t } = super.exportDOM(e);
		if (Qj(t)) {
			this.isEmpty() && t.append(document.createElement("br"));
			let e = this.getFormatType();
			e && (t.style.textAlign = e);
			let n = this.getDirection();
			n && (t.dir = n);
		}
		return { element: t };
	}
	static importJSON(e) {
		return xF(e.tag).updateFromJSON(e);
	}
	updateFromJSON(e) {
		return super.updateFromJSON(e).setTag(e.tag);
	}
	exportJSON() {
		return {
			...super.exportJSON(),
			tag: this.getTag()
		};
	}
	insertNewAfter(e, t = !0) {
		let n = e ? e.anchor.offset : 0, r = this.getLastDescendant(), i = !r || e && e.anchor.key === r.getKey() && n === r.getTextContentSize() || !e ? AA() : xF(this.getTag()), a = this.getDirection();
		if (i.setDirection(a), this.insertAfter(i, t), n === 0 && !this.isEmpty() && e) {
			let e = AA();
			e.select(), this.replace(e, !0);
		}
		return i;
	}
	collapseAtStart() {
		let e = this.isEmpty() ? AA() : xF(this.getTag());
		return this.getChildren().forEach((t) => e.append(t)), this.replace(e), !0;
	}
	extractWithChild() {
		return !0;
	}
};
function vF(e) {
	return e.nodeName.toLowerCase() === "span" && e.style.fontSize === "26pt";
}
function yF(e) {
	let t = e.nodeName.toLowerCase(), n = null;
	return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6" || (n = xF(t), e.style !== null && (uM(e, n), n.setFormat(e.style.textAlign))), { node: n };
}
function bF(e) {
	let t = gF();
	return e.style !== null && (t.setFormat(e.style.textAlign), uM(e, t)), { node: t };
}
function xF(e = "h1") {
	return Gj(new _F(e));
}
function SF(e) {
	let t = null;
	if (RN(e, DragEvent) ? t = e.dataTransfer : RN(e, ClipboardEvent) && (t = e.clipboardData), t === null) return [
		!1,
		[],
		!1
	];
	let n = t.types, r = n.includes("Files"), i = n.includes("text/html") || n.includes("text/plain");
	return [
		r,
		Array.from(t.files),
		i
	];
}
function CF(e) {
	return yA(cj(e));
}
function wF(e) {
	for (let t of [
		"lowercase",
		"uppercase",
		"capitalize"
	]) e.hasFormat(t) && e.toggleFormat(t);
}
function TF(e) {
	return pN(e.registerCommand(uD, (e) => {
		let t = Z();
		return !!_k(t) && (t.clear(), !0);
	}, 0), e.registerCommand(hD, (e) => {
		let t = Z();
		return X(t) ? (t.deleteCharacter(e), !0) : !!_k(t) && (t.deleteNodes(), !0);
	}, 0), e.registerCommand(xD, (e) => {
		let t = Z();
		return !!X(t) && (t.deleteWord(e), !0);
	}, 0), e.registerCommand(SD, (e) => {
		let t = Z();
		return !!X(t) && (t.deleteLine(e), !0);
	}, 0), e.registerCommand(vD, (t) => {
		let n = Z();
		if (typeof t == "string") n !== null && n.insertText(t);
		else {
			if (n === null) return !1;
			let r = t.dataTransfer;
			if (r != null) JP(r, n, e);
			else if (X(n)) {
				let e = t.data;
				return e && n.insertText(e), !0;
			}
		}
		return !0;
	}, 0), e.registerCommand(bD, () => {
		let e = Z();
		return !!X(e) && (e.removeText(), !0);
	}, 0), e.registerCommand(CD, (e) => {
		let t = Z();
		return !!X(t) && (t.formatText(e), !0);
	}, 0), e.registerCommand(UD, (e) => {
		let t = Z();
		if (!X(t) && !_k(t)) return !1;
		let n = t.getNodes();
		for (let t of n) {
			let n = hM(t, (e) => Q(e) && !e.isInline());
			n !== null && n.setFormat(e);
		}
		return !0;
	}, 0), e.registerCommand(gD, (e) => {
		let t = Z();
		return !!X(t) && (t.insertLineBreak(e), !0);
	}, 0), e.registerCommand(_D, () => {
		let e = Z();
		return !!X(e) && (e.insertParagraph(), !0);
	}, 0), e.registerCommand(zD, () => {
		let e = lk(), t = Z();
		return X(t) && (e.setFormat(t.format), e.setStyle(t.style)), Bk([e]), !0;
	}, 0), e.registerCommand(BD, () => zN((e) => {
		let t = e.getIndent();
		e.setIndent(t + 1);
	}), 0), e.registerCommand(VD, () => zN((e) => {
		let t = e.getIndent();
		t > 0 && e.setIndent(Math.max(0, t - 1));
	}), 0), e.registerCommand(jD, (e) => {
		let t = Z();
		if (_k(t)) {
			let n = t.getNodes();
			if (n.length > 0) return e.preventDefault(), n[0].selectPrevious(), !0;
		} else if (X(t)) {
			let n = Nj(t.focus, !0);
			if (!e.shiftKey && yA(n) && !n.isIsolated() && !n.isInline()) return n.selectPrevious(), e.preventDefault(), !0;
		}
		return !1;
	}, 0), e.registerCommand(MD, (e) => {
		let t = Z();
		if (_k(t)) {
			let n = t.getNodes();
			if (n.length > 0) return e.preventDefault(), n[0].selectNext(0, 0), !0;
		} else if (X(t)) {
			if (function(e) {
				let t = e.focus;
				return t.key === "root" && t.offset === dj().getChildrenSize();
			}(t)) return e.preventDefault(), !0;
			let n = Nj(t.focus, !1);
			if (!e.shiftKey && yA(n) && !n.isIsolated() && !n.isInline()) return n.selectNext(), e.preventDefault(), !0;
		}
		return !1;
	}, 0), e.registerCommand(kD, (e) => {
		let t = Z();
		if (_k(t)) {
			let n = t.getNodes();
			if (n.length > 0) return e.preventDefault(), TN(n[0]) ? n[0].selectNext(0, 0) : n[0].selectPrevious(), !0;
		}
		if (!X(t)) return !1;
		if (AN(t, !0)) {
			let n = e.shiftKey;
			return e.preventDefault(), NN(t, n, !0), !0;
		}
		return !1;
	}, 0), e.registerCommand(DD, (e) => {
		let t = Z();
		if (_k(t)) {
			let n = t.getNodes();
			if (n.length > 0) return e.preventDefault(), TN(n[0]) ? n[0].selectPrevious() : n[0].selectNext(0, 0), !0;
		}
		if (!X(t)) return !1;
		let n = e.shiftKey;
		return !!AN(t, !1) && (e.preventDefault(), NN(t, n, !1), !0);
	}, 0), e.registerCommand(FD, (t) => {
		if (CF(t.target)) return !1;
		let n = Z();
		if (X(n)) {
			if (function(e) {
				if (!e.isCollapsed()) return !1;
				let { anchor: t } = e;
				if (t.offset !== 0) return !1;
				let n = t.getNode();
				if (xA(n)) return !1;
				let r = LN(n);
				return r.getIndent() > 0 && (r.is(n) || n.is(r.getFirstDescendant()));
			}(n)) return t.preventDefault(), e.dispatchCommand(VD, void 0);
			if (dF && navigator.language === "ko-KR") return !1;
		} else if (!_k(n)) return !1;
		return t.preventDefault(), e.dispatchCommand(hD, !0);
	}, 0), e.registerCommand(LD, (t) => {
		if (CF(t.target)) return !1;
		let n = Z();
		return !(!X(n) && !_k(n)) && (t.preventDefault(), e.dispatchCommand(hD, !1));
	}, 0), e.registerCommand(ND, (t) => {
		let n = Z();
		if (!X(n)) return !1;
		if (wF(n), t !== null) {
			if ((dF || uF || pF) && lF) return !1;
			if (t.preventDefault(), t.shiftKey) return e.dispatchCommand(gD, !1);
		}
		return e.dispatchCommand(_D, void 0);
	}, 0), e.registerCommand(ID, () => !!X(Z()) && (e.blur(), !0), 0), e.registerCommand(HD, (t) => {
		let [, n] = SF(t);
		if (n.length > 0) {
			let r = aF(t.clientX, t.clientY);
			if (r !== null) {
				let { offset: t, node: i } = r, a = cj(i);
				if (a !== null) {
					let e = kk();
					if (Y(a)) e.anchor.set(a.getKey(), t, "text"), e.focus.set(a.getKey(), t, "text");
					else {
						let t = a.getParentOrThrow().getKey(), n = a.getIndexWithinParent() + 1;
						e.anchor.set(t, n, "element"), e.focus.set(t, n, "element");
					}
					pj(TE(e));
				}
				e.dispatchCommand(mF, n);
			}
			return t.preventDefault(), !0;
		}
		return !!X(Z());
	}, 0), e.registerCommand(WD, (e) => {
		let [t] = SF(e), n = Z();
		return !(t && !X(n));
	}, 0), e.registerCommand(GD, (e) => {
		let [t] = SF(e), n = Z();
		if (t && !X(n)) return !1;
		let r = aF(e.clientX, e.clientY);
		return r !== null && yA(cj(r.node)) && e.preventDefault(), !0;
	}, 0), e.registerCommand(YD, () => (kj(), !0), 0), e.registerCommand(qD, (t) => (eF(e, RN(t, ClipboardEvent) ? t : null), !0), 0), e.registerCommand(JD, (t) => (async function(e, t) {
		await eF(t, RN(e, ClipboardEvent) ? e : null), t.update(() => {
			let e = Z();
			X(e) ? e.removeText() : _k(e) && e.getNodes().forEach((e) => e.remove());
		});
	}(t, e), !0), 0), e.registerCommand(yD, (t) => {
		let [, n, r] = SF(t);
		return n.length > 0 && !r ? (e.dispatchCommand(mF, n), !0) : $j(t.target) && UA(t.target) ? !1 : Z() !== null && (function(e, t) {
			e.preventDefault(), t.update(() => {
				let n = Z(), r = RN(e, InputEvent) || RN(e, KeyboardEvent) ? null : e.clipboardData;
				r != null && n !== null && JP(r, n, t);
			}, { tag: "paste" });
		}(t, e), !0);
	}, 0), e.registerCommand(PD, (e) => {
		let t = Z();
		return X(t) && wF(t), !1;
	}, 0), e.registerCommand(RD, (e) => {
		let t = Z();
		return X(t) && wF(t), !1;
	}, 0));
}
//#endregion
//#region node_modules/@lexical/react/LexicalRichTextPlugin.prod.mjs
function EF(e, ...t) {
	let n = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
	r.append("code", e);
	for (let e of t) r.append("v", e);
	throw n.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
var DF = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? ie : F;
function OF({ editor: e, ErrorBoundary: t }) {
	return function(e, t) {
		let [n, r] = ce(() => e.getDecorators());
		return DF(() => e.registerDecoratorListener((e) => {
			rt(() => {
				r(e);
			});
		}), [e]), F(() => {
			r(e.getDecorators());
		}, [e]), ae(() => {
			let r = [], i = Object.keys(n);
			for (let a = 0; a < i.length; a++) {
				let o = i[a], s = E(t, {
					onError: (t) => e._onError(t),
					children: E(M, {
						fallback: null,
						children: n[o]
					})
				}), c = e.getElementByKey(o);
				c !== null && r.push(nt(s, c, o));
			}
			return r;
		}, [
			t,
			n,
			e
		]);
	}(e, t);
}
function kF({ editor: e, ErrorBoundary: t }) {
	return function(e) {
		let t = kP.maybeFromEditor(e);
		if (t && t.hasExtensionByName(NP.name)) {
			for (let e of ["@lexical/plain-text", "@lexical/rich-text"]) t.hasExtensionByName(e) && EF(320, e);
			return !0;
		}
		return !1;
	}(e) ? null : E(OF, {
		editor: e,
		ErrorBoundary: t
	});
}
function AF(e) {
	return e.getEditorState().read(LP(e.isComposing()));
}
function jF({ contentEditable: e, placeholder: t = null, ErrorBoundary: n }) {
	let [r] = ST();
	return function(e) {
		DF(() => pN(TF(e), RP(e)), [e]);
	}(r), D(T, { children: [
		e,
		E(MF, { content: t }),
		E(kF, {
			editor: r,
			ErrorBoundary: n
		})
	] });
}
function MF({ content: e }) {
	let [t] = ST(), n = function(e) {
		let [t, n] = ce(() => AF(e));
		return DF(() => {
			function t() {
				n(AF(e));
			}
			return t(), pN(e.registerUpdateListener(() => {
				t();
			}), e.registerEditableListener(() => {
				t();
			}));
		}, [e]), t;
	}(t), r = bN();
	return n ? typeof e == "function" ? e(r) : e : null;
}
//#endregion
//#region node_modules/@lexical/react/LexicalContentEditable.prod.mjs
var NF = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? ie : F;
function PF({ editor: e, ariaActiveDescendant: t, ariaAutoComplete: n, ariaControls: r, ariaDescribedBy: i, ariaErrorMessage: a, ariaExpanded: o, ariaInvalid: s, ariaLabel: c, ariaLabelledBy: l, ariaMultiline: u, ariaOwns: d, ariaRequired: f, autoCapitalize: p, className: m, id: h, role: g = "textbox", spellCheck: _ = !0, style: v, tabIndex: y, "data-testid": b, ...x }, S) {
	let [C, w] = ce(e.isEditable()), T = te((t) => {
		t && t.ownerDocument && t.ownerDocument.defaultView ? e.setRootElement(t) : e.setRootElement(null);
	}, [e]), D = ae(() => function(...e) {
		return (t) => {
			for (let n of e) typeof n == "function" ? n(t) : n != null && (n.current = t);
		};
	}(S, T), [T, S]);
	return NF(() => (w(e.isEditable()), e.registerEditableListener((e) => {
		w(e);
	})), [e]), E("div", {
		"aria-activedescendant": C ? t : void 0,
		"aria-autocomplete": C ? n : "none",
		"aria-controls": C ? r : void 0,
		"aria-describedby": i,
		...a == null ? {} : { "aria-errormessage": a },
		"aria-expanded": C && g === "combobox" ? !!o : void 0,
		...s == null ? {} : { "aria-invalid": s },
		"aria-label": c,
		"aria-labelledby": l,
		"aria-multiline": u,
		"aria-owns": C ? d : void 0,
		"aria-readonly": !C || void 0,
		"aria-required": f,
		autoCapitalize: p,
		className: m,
		contentEditable: C,
		"data-testid": b,
		id: h,
		ref: D,
		role: g,
		spellCheck: _,
		style: v,
		tabIndex: y,
		...x
	});
}
var FF = ee(PF);
function IF(e) {
	return e.getEditorState().read(LP(e.isComposing()));
}
var LF = ee(RF);
function RF(e, t) {
	let { placeholder: n, ...r } = e, [i] = ST();
	return D(T, { children: [E(FF, {
		editor: i,
		...r,
		ref: t
	}), n != null && E(zF, {
		editor: i,
		content: n
	})] });
}
function zF({ content: e, editor: t }) {
	let n = function(e) {
		let [t, n] = ce(() => IF(e));
		return NF(() => {
			function t() {
				n(IF(e));
			}
			return t(), pN(e.registerUpdateListener(() => {
				t();
			}), e.registerEditableListener(() => {
				t();
			}));
		}, [e]), t;
	}(t), [r, i] = ce(t.isEditable());
	if (ie(() => (i(t.isEditable()), t.registerEditableListener((e) => {
		i(e);
	})), [t]), !n) return null;
	let a = null;
	return typeof e == "function" ? a = e(r) : e !== null && (a = e), a === null ? null : E("div", {
		"aria-hidden": !0,
		children: a
	});
}
//#endregion
//#region node_modules/react-error-boundary/dist/react-error-boundary.js
var BF = N(null), VF = {
	didCatch: !1,
	error: null
}, HF = class extends A {
	constructor(e) {
		super(e), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = VF;
	}
	static getDerivedStateFromError(e) {
		return {
			didCatch: !0,
			error: e
		};
	}
	resetErrorBoundary(...e) {
		let { error: t } = this.state;
		t !== null && (this.props.onReset?.({
			args: e,
			reason: "imperative-api"
		}), this.setState(VF));
	}
	componentDidCatch(e, t) {
		this.props.onError?.(e, t);
	}
	componentDidUpdate(e, t) {
		let { didCatch: n } = this.state, { resetKeys: r } = this.props;
		n && t.error !== null && UF(e.resetKeys, r) && (this.props.onReset?.({
			next: r,
			prev: e.resetKeys,
			reason: "keys"
		}), this.setState(VF));
	}
	render() {
		let { children: e, fallbackRender: t, FallbackComponent: n, fallback: r } = this.props, { didCatch: i, error: a } = this.state, o = e;
		if (i) {
			let e = {
				error: a,
				resetErrorBoundary: this.resetErrorBoundary
			};
			if (typeof t == "function") o = t(e);
			else if (n) o = P(n, e);
			else if (r !== void 0) o = r;
			else throw a;
		}
		return P(BF.Provider, { value: {
			didCatch: i,
			error: a,
			resetErrorBoundary: this.resetErrorBoundary
		} }, o);
	}
};
function UF(e = [], t = []) {
	return e.length !== t.length || e.some((e, n) => !Object.is(e, t[n]));
}
//#endregion
//#region node_modules/@lexical/react/LexicalErrorBoundary.prod.mjs
function WF({ children: e, onError: t }) {
	return E(HF, {
		fallback: E("div", {
			style: {
				border: "1px solid #f00",
				color: "#f00",
				padding: "8px"
			},
			children: "An error was thrown."
		}),
		onError: t,
		children: e
	});
}
//#endregion
//#region src/components/file_viewer/file_viewer.jsx
var GF = ({ fileData: e, onChange: t, name: n }) => {
	let [r] = ST(), i = se("");
	return F(() => {
		e && (async () => {
			let t = "";
			t = typeof e == "object" && e ? e || JSON.stringify(e, null, 2) : String(e), t !== i.current && (i.current = t, r.update(() => {
				let e = dj();
				e.clear();
				let n = new DOMParser(), i = t.includes("<") && t.includes(">") ? t : `<div>${t.replace(/\n/g, "<br/>")}</div>`, a = zP(r, n.parseFromString(i, "text/html"));
				a.length > 0 && e.append(...a);
			}));
		})();
	}, [e, r]), F(() => r.registerUpdateListener(({ editorState: e }) => {
		e.read(() => {
			let e = BP(r);
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
}, KF = ({ fileData: e, subtype: n, inputProps: r }) => /* @__PURE__ */ E(t, {
	sx: { width: "100%" },
	children: /* @__PURE__ */ E(m, {
		variant: "outlined",
		sx: {
			p: 2,
			minHeight: "200px",
			position: "relative"
		},
		children: /* @__PURE__ */ D(_N, {
			initialConfig: {
				namespace: "MyEditor",
				nodes: [OA, ZO],
				theme: {},
				onError: (e) => console.error("Lexical Error:", e),
				editable: n !== 0
			},
			children: [/* @__PURE__ */ E(jF, {
				contentEditable: /* @__PURE__ */ E(LF, { style: {
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
				ErrorBoundary: WF
			}), /* @__PURE__ */ E(GF, {
				fileData: e,
				onChange: r.onChange,
				name: r.name
			})]
		})
	})
}), qF = /* @__PURE__ */ ut(((e) => {
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
})), JF = /* @__PURE__ */ ut(((e) => {
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
})), YF = (/* @__PURE__ */ ut(((e) => {
	var t = qF(), n = JF(), r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
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
		if (xe(e, ArrayBuffer) || e && xe(e.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (xe(e, SharedArrayBuffer) || e && xe(e.buffer, SharedArrayBuffer))) return h(e, t, n);
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
		if (xe(e, Uint8Array)) {
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
		if (e.length !== void 0) return typeof e.length != "number" || Se(e.length) ? o(0) : p(e);
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
		if (xe(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), xe(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), !s.isBuffer(e) || !s.isBuffer(t)) throw TypeError("The \"buf1\", \"buf2\" arguments must be one of type Buffer or Uint8Array");
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
			if (xe(t, Uint8Array)) i + t.length > r.length ? (s.isBuffer(t) || (t = s.from(t)), t.copy(r, i)) : Uint8Array.prototype.set.call(r, t, i);
			else if (s.isBuffer(t)) t.copy(r, i);
			else throw TypeError("\"list\" argument must be an Array of Buffers");
			i += t.length;
		}
		return r;
	};
	function y(e, t) {
		if (s.isBuffer(e)) return e.length;
		if (ArrayBuffer.isView(e) || xe(e, ArrayBuffer)) return e.byteLength;
		if (typeof e != "string") throw TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + typeof e);
		let n = e.length, r = arguments.length > 2 && arguments[2] === !0;
		if (!r && n === 0) return 0;
		let i = !1;
		for (;;) switch (t) {
			case "ascii":
			case "latin1":
			case "binary": return n;
			case "utf8":
			case "utf-8": return ge(e).length;
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return n * 2;
			case "hex": return n >>> 1;
			case "base64": return ye(e).length;
			default:
				if (i) return r ? -1 : ge(e).length;
				t = ("" + t).toLowerCase(), i = !0;
		}
	}
	s.byteLength = y;
	function b(e, t, n) {
		let r = !1;
		if ((t === void 0 || t < 0) && (t = 0), t > this.length || ((n === void 0 || n > this.length) && (n = this.length), n <= 0) || (n >>>= 0, t >>>= 0, n <= t)) return "";
		for (e ||= "utf8";;) switch (e) {
			case "hex": return ee(this, t, n);
			case "utf8":
			case "utf-8": return A(this, t, n);
			case "ascii": return N(this, t, n);
			case "latin1":
			case "binary": return P(this, t, n);
			case "base64": return k(this, t, n);
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return te(this, t, n);
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
		return e === 0 ? "" : arguments.length === 0 ? A(this, 0, e) : b.apply(this, arguments);
	}, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(e) {
		if (!s.isBuffer(e)) throw TypeError("Argument must be a Buffer");
		return this === e ? !0 : s.compare(this, e) === 0;
	}, s.prototype.inspect = function() {
		let t = "", n = e.INSPECT_MAX_BYTES;
		return t = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(), this.length > n && (t += " ... "), "<Buffer " + t + ">";
	}, r && (s.prototype[r] = s.prototype.inspect), s.prototype.compare = function(e, t, n, r, i) {
		if (xe(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), !s.isBuffer(e)) throw TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof e);
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
		if (typeof n == "string" ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, Se(n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
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
			if (Se(r)) return o;
			e[n + o] = r;
		}
		return o;
	}
	function T(e, t, n, r) {
		return be(ge(t, e.length - n), e, n, r);
	}
	function E(e, t, n, r) {
		return be(_e(t), e, n, r);
	}
	function D(e, t, n, r) {
		return be(ye(t), e, n, r);
	}
	function O(e, t, n, r) {
		return be(ve(t, e.length - n), e, n, r);
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
			case "utf-16le": return O(this, e, t, n);
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
	function k(e, n, r) {
		return n === 0 && r === e.length ? t.fromByteArray(e) : t.fromByteArray(e.slice(n, r));
	}
	function A(e, t, n) {
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
		return M(r);
	}
	var j = 4096;
	function M(e) {
		let t = e.length;
		if (t <= j) return String.fromCharCode.apply(String, e);
		let n = "", r = 0;
		for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += j));
		return n;
	}
	function N(e, t, n) {
		let r = "";
		n = Math.min(e.length, n);
		for (let i = t; i < n; ++i) r += String.fromCharCode(e[i] & 127);
		return r;
	}
	function P(e, t, n) {
		let r = "";
		n = Math.min(e.length, n);
		for (let i = t; i < n; ++i) r += String.fromCharCode(e[i]);
		return r;
	}
	function ee(e, t, n) {
		let r = e.length;
		(!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
		let i = "";
		for (let r = t; r < n; ++r) i += Ce[e[r]];
		return i;
	}
	function te(e, t, n) {
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
	function ne(e, t, n) {
		if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
		if (e + t > n) throw RangeError("Trying to access beyond buffer length");
	}
	s.prototype.readUintLE = s.prototype.readUIntLE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || ne(e, t, this.length);
		let r = this[e], i = 1, a = 0;
		for (; ++a < t && (i *= 256);) r += this[e + a] * i;
		return r;
	}, s.prototype.readUintBE = s.prototype.readUIntBE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || ne(e, t, this.length);
		let r = this[e + --t], i = 1;
		for (; t > 0 && (i *= 256);) r += this[e + --t] * i;
		return r;
	}, s.prototype.readUint8 = s.prototype.readUInt8 = function(e, t) {
		return e >>>= 0, t || ne(e, 1, this.length), this[e];
	}, s.prototype.readUint16LE = s.prototype.readUInt16LE = function(e, t) {
		return e >>>= 0, t || ne(e, 2, this.length), this[e] | this[e + 1] << 8;
	}, s.prototype.readUint16BE = s.prototype.readUInt16BE = function(e, t) {
		return e >>>= 0, t || ne(e, 2, this.length), this[e] << 8 | this[e + 1];
	}, s.prototype.readUint32LE = s.prototype.readUInt32LE = function(e, t) {
		return e >>>= 0, t || ne(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
	}, s.prototype.readUint32BE = s.prototype.readUInt32BE = function(e, t) {
		return e >>>= 0, t || ne(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
	}, s.prototype.readBigUInt64LE = we(function(e) {
		e >>>= 0, fe(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && pe(e, this.length - 8);
		let r = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24, i = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + n * 2 ** 24;
		return BigInt(r) + (BigInt(i) << BigInt(32));
	}), s.prototype.readBigUInt64BE = we(function(e) {
		e >>>= 0, fe(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && pe(e, this.length - 8);
		let r = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e], i = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n;
		return (BigInt(r) << BigInt(32)) + BigInt(i);
	}), s.prototype.readIntLE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || ne(e, t, this.length);
		let r = this[e], i = 1, a = 0;
		for (; ++a < t && (i *= 256);) r += this[e + a] * i;
		return i *= 128, r >= i && (r -= 2 ** (8 * t)), r;
	}, s.prototype.readIntBE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || ne(e, t, this.length);
		let r = t, i = 1, a = this[e + --r];
		for (; r > 0 && (i *= 256);) a += this[e + --r] * i;
		return i *= 128, a >= i && (a -= 2 ** (8 * t)), a;
	}, s.prototype.readInt8 = function(e, t) {
		return e >>>= 0, t || ne(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e];
	}, s.prototype.readInt16LE = function(e, t) {
		e >>>= 0, t || ne(e, 2, this.length);
		let n = this[e] | this[e + 1] << 8;
		return n & 32768 ? n | 4294901760 : n;
	}, s.prototype.readInt16BE = function(e, t) {
		e >>>= 0, t || ne(e, 2, this.length);
		let n = this[e + 1] | this[e] << 8;
		return n & 32768 ? n | 4294901760 : n;
	}, s.prototype.readInt32LE = function(e, t) {
		return e >>>= 0, t || ne(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
	}, s.prototype.readInt32BE = function(e, t) {
		return e >>>= 0, t || ne(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
	}, s.prototype.readBigInt64LE = we(function(e) {
		e >>>= 0, fe(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && pe(e, this.length - 8);
		let r = this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (n << 24);
		return (BigInt(r) << BigInt(32)) + BigInt(t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24);
	}), s.prototype.readBigInt64BE = we(function(e) {
		e >>>= 0, fe(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && pe(e, this.length - 8);
		let r = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
		return (BigInt(r) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n);
	}), s.prototype.readFloatLE = function(e, t) {
		return e >>>= 0, t || ne(e, 4, this.length), n.read(this, e, !0, 23, 4);
	}, s.prototype.readFloatBE = function(e, t) {
		return e >>>= 0, t || ne(e, 4, this.length), n.read(this, e, !1, 23, 4);
	}, s.prototype.readDoubleLE = function(e, t) {
		return e >>>= 0, t || ne(e, 8, this.length), n.read(this, e, !0, 52, 8);
	}, s.prototype.readDoubleBE = function(e, t) {
		return e >>>= 0, t || ne(e, 8, this.length), n.read(this, e, !1, 52, 8);
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
	function re(e, t, n, r, i) {
		I(t, r, i, e, n, 7);
		let a = Number(t & BigInt(4294967295));
		e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a;
		let o = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, n;
	}
	function ie(e, t, n, r, i) {
		I(t, r, i, e, n, 7);
		let a = Number(t & BigInt(4294967295));
		e[n + 7] = a, a >>= 8, e[n + 6] = a, a >>= 8, e[n + 5] = a, a >>= 8, e[n + 4] = a;
		let o = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[n + 3] = o, o >>= 8, e[n + 2] = o, o >>= 8, e[n + 1] = o, o >>= 8, e[n] = o, n + 8;
	}
	s.prototype.writeBigUInt64LE = we(function(e, t = 0) {
		return re(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
	}), s.prototype.writeBigUInt64BE = we(function(e, t = 0) {
		return ie(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
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
	}, s.prototype.writeBigInt64LE = we(function(e, t = 0) {
		return re(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
	}), s.prototype.writeBigInt64BE = we(function(e, t = 0) {
		return ie(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
	});
	function ae(e, t, n, r, i, a) {
		if (n + r > e.length || n < 0) throw RangeError("Index out of range");
	}
	function oe(e, t, r, i, a) {
		return t = +t, r >>>= 0, a || ae(e, t, r, 4, 34028234663852886e22, -34028234663852886e22), n.write(e, t, r, i, 23, 4), r + 4;
	}
	s.prototype.writeFloatLE = function(e, t, n) {
		return oe(this, e, t, !0, n);
	}, s.prototype.writeFloatBE = function(e, t, n) {
		return oe(this, e, t, !1, n);
	};
	function se(e, t, r, i, a) {
		return t = +t, r >>>= 0, a || ae(e, t, r, 8, 17976931348623157e292, -17976931348623157e292), n.write(e, t, r, i, 52, 8), r + 8;
	}
	s.prototype.writeDoubleLE = function(e, t, n) {
		return se(this, e, t, !0, n);
	}, s.prototype.writeDoubleBE = function(e, t, n) {
		return se(this, e, t, !1, n);
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
	var ce = {};
	function le(e, t, n) {
		ce[e] = class extends n {
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
	le("ERR_BUFFER_OUT_OF_BOUNDS", function(e) {
		return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
	}, RangeError), le("ERR_INVALID_ARG_TYPE", function(e, t) {
		return `The "${e}" argument must be of type number. Received type ${typeof t}`;
	}, TypeError), le("ERR_OUT_OF_RANGE", function(e, t, n) {
		let r = `The value of "${e}" is out of range.`, i = n;
		return Number.isInteger(n) && Math.abs(n) > 2 ** 32 ? i = ue(String(n)) : typeof n == "bigint" && (i = String(n), (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (i = ue(i)), i += "n"), r += ` It must be ${t}. Received ${i}`, r;
	}, RangeError);
	function ue(e) {
		let t = "", n = e.length, r = e[0] === "-" ? 1 : 0;
		for (; n >= r + 4; n -= 3) t = `_${e.slice(n - 3, n)}${t}`;
		return `${e.slice(0, n)}${t}`;
	}
	function de(e, t, n) {
		fe(t, "offset"), (e[t] === void 0 || e[t + n] === void 0) && pe(t, e.length - (n + 1));
	}
	function I(e, t, n, r, i, a) {
		if (e > n || e < t) {
			let r = typeof t == "bigint" ? "n" : "", i;
			throw i = a > 3 ? t === 0 || t === BigInt(0) ? `>= 0${r} and < 2${r} ** ${(a + 1) * 8}${r}` : `>= -(2${r} ** ${(a + 1) * 8 - 1}${r}) and < 2 ** ${(a + 1) * 8 - 1}${r}` : `>= ${t}${r} and <= ${n}${r}`, new ce.ERR_OUT_OF_RANGE("value", i, e);
		}
		de(r, i, a);
	}
	function fe(e, t) {
		if (typeof e != "number") throw new ce.ERR_INVALID_ARG_TYPE(t, "number", e);
	}
	function pe(e, t, n) {
		throw Math.floor(e) === e ? t < 0 ? new ce.ERR_BUFFER_OUT_OF_BOUNDS() : new ce.ERR_OUT_OF_RANGE(n || "offset", `>= ${n ? 1 : 0} and <= ${t}`, e) : (fe(e, n), new ce.ERR_OUT_OF_RANGE(n || "offset", "an integer", e));
	}
	var me = /[^+/0-9A-Za-z-_]/g;
	function he(e) {
		if (e = e.split("=")[0], e = e.trim().replace(me, ""), e.length < 2) return "";
		for (; e.length % 4 != 0;) e += "=";
		return e;
	}
	function ge(e, t) {
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
	function _e(e) {
		let t = [];
		for (let n = 0; n < e.length; ++n) t.push(e.charCodeAt(n) & 255);
		return t;
	}
	function ve(e, t) {
		let n, r, i, a = [];
		for (let o = 0; o < e.length && !((t -= 2) < 0); ++o) n = e.charCodeAt(o), r = n >> 8, i = n % 256, a.push(i), a.push(r);
		return a;
	}
	function ye(e) {
		return t.toByteArray(he(e));
	}
	function be(e, t, n, r) {
		let i;
		for (i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
		return i;
	}
	function xe(e, t) {
		return e instanceof t || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === t.name;
	}
	function Se(e) {
		return e !== e;
	}
	var Ce = (function() {
		let e = "0123456789abcdef", t = Array(256);
		for (let n = 0; n < 16; ++n) {
			let r = n * 16;
			for (let i = 0; i < 16; ++i) t[r + i] = e[n] + e[i];
		}
		return t;
	})();
	function we(e) {
		return typeof BigInt > "u" ? Te : e;
	}
	function Te() {
		throw Error("BigInt not supported");
	}
})))(), XF = async (e) => {
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
}, ZF = (e) => {
	e = atob(e);
	let t = new ArrayBuffer(e.length), n = new Uint8Array(t);
	for (let t = 0; t < e.length; t++) n[t] = e.charCodeAt(t);
	return n;
}, QF = [
	"src",
	"style",
	"wrapperStyle",
	"iconWrapperStyle",
	"onLoad",
	"onError",
	"alt",
	"height",
	"width",
	"position",
	"fit",
	"showLoading",
	"errorIcon",
	"shift",
	"distance",
	"shiftDuration",
	"bgColor",
	"duration",
	"easing",
	"className",
	"wrapperClassName",
	"iconWrapperClassName"
];
function $F() {
	return $F = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, $F.apply(this, arguments);
}
function eI(e, t) {
	if (e == null) return {};
	var n = {}, r = Object.keys(e), i, a;
	for (a = 0; a < r.length; a++) i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n;
}
var tI = C(/* @__PURE__ */ O.createElement("path", { d: "M21 5v6.59l-2.29-2.3c-.39-.39-1.03-.39-1.42 0L14 12.59 10.71 9.3a.9959.9959 0 0 0-1.41 0L6 12.59 3 9.58V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2zm-3 6.42 3 3.01V19c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-6.58l2.29 2.29c.39.39 1.02.39 1.41 0l3.3-3.3 3.29 3.29c.39.39 1.02.39 1.41 0l3.3-3.28z" }), "BrokenImageIcon"), nI = I("img")({ "@keyframes materialize": {
	"0%": { filter: "saturate(20%) contrast(50%) brightness(120%)" },
	"75%": { filter: "saturate(60%) contrast(100%) brightness(100%)" },
	"100%": { filter: "saturate(100%) contrast(100%) brightness(100%)" }
} });
function rI(e) {
	var t, n = e.src, r = e.style, i = e.wrapperStyle, a = e.iconWrapperStyle, o = e.onLoad, s = e.onError, c = e.alt, l = c === void 0 ? "" : c, u = e.height, d = u === void 0 ? "100%" : u, f = e.width, p = f === void 0 ? "100%" : f, m = e.position, h = m === void 0 ? "relative" : m, g = e.fit, _ = g === void 0 ? "cover" : g, v = e.showLoading, y = v === void 0 ? !1 : v, b = e.errorIcon, x = b === void 0 ? !0 : b, S = e.shift, C = S === void 0 ? !1 : S, w = e.distance, T = w === void 0 ? 100 : w, E = e.shiftDuration, D = E === void 0 ? null : E, k = e.bgColor, A = k === void 0 ? "inherit" : k, j = e.duration, M = j === void 0 ? 3e3 : j, N = e.easing, P = N === void 0 ? "cubic-bezier(0.7, 0, 0.6, 1)" : N, ee = e.className, te = ee === void 0 ? "" : ee, ne = e.wrapperClassName, F = ne === void 0 ? "" : ne, re = e.iconWrapperClassName, ie = re === void 0 ? "" : re, ae = eI(e, QF), oe = O.useState(!1), se = oe[0], ce = oe[1], le = O.useState(!1), ue = le[0], de = le[1];
	function I() {
		ce(!0), de(!1), o && o();
	}
	function fe() {
		de(!0), ce(!1), s && s();
	}
	var pe = (t = {}, t[C] = se ? 0 : T, t), me = {
		root: $F({
			width: p,
			height: d,
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			backgroundColor: A
		}, i),
		image: $F({
			position: h,
			width: "100%",
			height: "100%",
			objectFit: _,
			transitionProperty: (C ? C + ", " : "") + "opacity",
			transitionDuration: (C ? (D || M * .3) + "ms, " : "") + M / 2 + "ms",
			transitionTimingFunction: P,
			opacity: se ? 1 : 0,
			animation: se ? "materialize " + M + "ms 1 " + P : ""
		}, !!C && pe, r),
		icons: $F({
			width: "100%",
			marginLeft: "-100%",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			opacity: se ? 0 : 1
		}, a)
	}, he = typeof x != "boolean" && x || /* @__PURE__ */ O.createElement(tI, { style: {
		fontSize: 56,
		color: "#bdbdbd"
	} }), ge = typeof y != "boolean" && y || /* @__PURE__ */ O.createElement(_e, {
		size: 56,
		thickness: 6
	});
	return /* @__PURE__ */ O.createElement("div", {
		style: me.root,
		className: "mui-image-wrapper " + F
	}, /* @__PURE__ */ O.createElement(nI, $F({
		src: n,
		alt: l,
		style: me.image,
		className: "mui-image-img " + te,
		onLoad: I,
		onError: fe
	}, ae)), (!!y || !!x) && /* @__PURE__ */ O.createElement("div", {
		style: me.icons,
		className: "mui-image-iconWrapper " + ie
	}, !!x && ue && he, !!y && !ue && !se && ge));
}
rI.propTypes = process.env.NODE_ENV === "production" ? {} : {
	src: q.default.string.isRequired,
	alt: q.default.string,
	height: q.default.oneOfType([q.default.number, q.default.string]),
	width: q.default.oneOfType([q.default.number, q.default.string]),
	style: q.default.object,
	className: q.default.string,
	showLoading: q.default.oneOfType([q.default.bool, q.default.node]),
	errorIcon: q.default.oneOfType([q.default.bool, q.default.node]),
	shift: q.default.oneOf([
		!1,
		null,
		"top",
		"bottom",
		"left",
		"right"
	]),
	distance: q.default.oneOfType([q.default.number, q.default.string]),
	shiftDuration: q.default.number,
	bgColor: q.default.string,
	wrapperStyle: q.default.object,
	iconWrapperStyle: q.default.object,
	wrapperClassName: q.default.string,
	iconWrapperClassName: q.default.string,
	duration: q.default.number,
	easing: q.default.string,
	onLoad: q.default.func,
	onError: q.default.func,
	position: q.default.oneOf([
		"static",
		"relative",
		"absolute",
		"fixed",
		"sticky",
		"inherit",
		"initial",
		"revert",
		"unset"
	]),
	fit: q.default.oneOf([
		"contain",
		"cover",
		"fill",
		"none",
		"scale-down",
		"inherit",
		"initial",
		"revert",
		"unset"
	])
};
//#endregion
//#region src/components/image_viewer/image_viewer.jsx
var iI = "data:image/#{encoding};base64,#{data}", aI = ({ data: e, encoding: t, alt: n }) => {
	let r = iI, [i, a] = ce(void 0);
	return sT(t) && (t = "png"), sT(n) && (n = "ERROR"), XF(new Blob([ZF(e)])).then((e) => {
		r = r.replace("#{encoding}", t), r = r.replace("#{data}", YF.Buffer.from(e).toString("base64")), a(r);
	}), /* @__PURE__ */ E(rI, {
		src: i,
		fluid: !0,
		alt: n
	});
}, oI = (e) => {
	let t = "", n = Object.keys(e).map((t) => {
		let n = e[t];
		return sT(n) ? "" : `${encodeURIComponent(t)}=${encodeURIComponent(n)}`;
	}).filter((e) => e !== "").join("&");
	if (n) {
		let e = t.indexOf("#");
		e !== -1 && (t = t.slice(0, e)), t += (t.indexOf("?") === -1 ? "?" : "&") + n;
	}
	return t;
}, sI = (e, { baseHeaders: t, handleErr: n, handleFinally: r, debug: i } = {}) => {
	let a = {
		"Content-Type": "application/json",
		...t
	}, o = (e) => {
		console.log(e);
	}, s = ({ endpoint: t, inputHeaders: s, fetchParams: c, args: l }) => {
		sT(t) && (t = "");
		let u = e + t, d = {
			method: "GET",
			headers: {
				...a,
				...s
			},
			...c
		};
		return sT(l) || (d.method === "POST" && (d.body = JSON.stringify(l)), d.method === "GET" && (u += oI(l))), fetch(u, d).catch((e) => n(e)).finally(() => {
			i && o({
				endpoint: t,
				inputHeaders: s,
				fetchParams: c
			}), !sT(r) && r({
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
sI("http://localhost:8080/", {
	handleErr: (e) => console.log(e),
	debug: !0
});
//#endregion
//#region src/utility/api.js
var cI = ({ endpoint: e, handleErr: t }) => {
	sT(t) && (t = (e) => console.log(e));
	let n = sI(e, { handleErr: t });
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
}, lI = (e, t) => () => e.get(t), uI = ({ jsxKey: e, endpoint: t, inputProps: n }) => {
	let [r, i] = ce([/* @__PURE__ */ E("option", {
		value: n.defaultValue,
		children: n.defaultValue
	}, e + "-" + n.defaultValue)]), a = cI({ endpoint: t });
	return F(() => {
		a.selectOptions().then((t) => {
			i(Object.keys(t).map((n) => {
				let r = t[n][Object.keys(t[n])[1]], i = t[n][Object.keys(t[n])[0]];
				return /* @__PURE__ */ E("option", {
					value: i,
					children: r
				}, e + "-" + n);
			}));
		});
	}, []), /* @__PURE__ */ E(h, {
		...n,
		defaultValue: n.defaultValue,
		children: [...r || /* @__PURE__ */ E(T, {})]
	}, e);
}, dI = ({ jsxKey: e, key: t, inputProps: n }) => {
	let r;
	return t.charAt(t.length - 1) === "D" && t.charAt(t.length - 2) === "I" || t.charAt(t.length - 1) === "S" && t.charAt(t.length - 2) === "D" ? (t.charAt(t.length - 1) === "D" && t.charAt(t.length - 2) === "I" && (r = t.slice(5, t.length - 2)), t.charAt(t.length - 1) === "S" && t.charAt(t.length - 2) === "D" && (r = t.slice(5, t.length - 3), n = {
		...n,
		multiple: !0
	}), /* @__PURE__ */ E(uI, {
		endpoint: r,
		jsxKey: e,
		inputProps: n
	})) : null;
}, fI = () => ({ formRef: e, jsxKey: t, key: n, currentType: r, inputProps: i }) => {
	let a = dI({
		jsxKey: t,
		key: n,
		inputProps: i
	});
	if (!sT(a)) return a;
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
	if (a = /* @__PURE__ */ E(d, {
		type: "text",
		disableUnderline: !0,
		readOnly: !0,
		sx: o,
		...i
	}, t), r === "number" || r === "bigint") return /* @__PURE__ */ E(d, {
		type: "number",
		disableUnderline: !0,
		readOnly: !0,
		sx: o,
		...i
	}, t);
	if (r === "boolean") return /* @__PURE__ */ E(_, {
		...i,
		defaultChecked: i.defaultValue
	}, t);
	if (r === "object") {
		if (i.defaultValue.Subtype === 17) return /* @__PURE__ */ E(aI, { data: pT(_I(e), n.slice(0, n.lastIndexOf(".")))?.value.Data }, t);
		if (i.defaultValue.Subtype === 16 || i.defaultValue.Subtype === 0) {
			let r = pT(_I(e), n.slice(0, n.lastIndexOf(".")));
			return i.name = n.slice(0, n.lastIndexOf(".")) + ".Data", /* @__PURE__ */ E(KF, {
				fileData: JSON.stringify(r?.value.Data, null, 2),
				inputProps: i,
				subtype: i.defaultValue.Subtype
			}, t);
		}
		if (i.defaultValue.Subtype === 18) {
			let r = pT(_I(e), n.slice(0, n.lastIndexOf(".")));
			return i.name = n.slice(0, n.lastIndexOf(".")) + ".Data", /* @__PURE__ */ E(KF, {
				fileData: r?.value.Data,
				inputProps: i,
				subtype: i.defaultValue.Subtype
			}, t);
		}
		if (!sT(i.defaultValue.Subtype) || !sT(i.defaultValue.Data)) return null;
		if (Array.isArray(i.defaultValue)) return Object.keys(i.defaultValue).map((e) => /* @__PURE__ */ E(d, {
			type: "text",
			disableUnderline: !0,
			readOnly: !0,
			sx: o,
			...i,
			defaultValue: i.defaultValue[e]
		}, t));
		if (sT(i.defaultValue)) return;
		let r = Object.keys(i.defaultValue)[0];
		return typeof i.defaultValue[r] == "object" ? null : /* @__PURE__ */ E(yT, {
			inputKey: n,
			inputProps: i
		});
	}
	return a;
}, pI = (e, t = {}) => ({
	index: 0,
	elements: {},
	nameIndex: {},
	labels: {},
	element_component: {},
	container: void 0,
	handleOnClose: void 0,
	elementSelector: e || fI(),
	context: t
}), mI = (e) => {
	e.current.handleOnClose();
}, hI = (e, t) => {
	let n = e.current;
	n.handleClose = t, e.current = n;
}, gI = (e, t) => {
	let n = e.current;
	sT(n) || (n.container = t), e.current = n;
}, _I = (e) => e.current.container, vI = (e, n) => {
	let r = e.current, i = r.labels[n], a = r.element_component[n];
	return i === "None" ? /* @__PURE__ */ E(T, { children: a }) : /* @__PURE__ */ D(g, {
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
}, yI = (e) => {
	let t = {};
	return Object.keys(e.current.nameIndex).map((n, r) => {
		t[n] = vI(e, r);
	}), /* @__PURE__ */ E(g, {
		direction: "column",
		gap: 0,
		children: Object.keys(t).map((e) => t[e])
	});
}, bI = (e) => {
	let t = e.current;
	return { onChange: (n) => {
		let r = n.target.value, i = n.target.selectedOptions;
		if (!sT(i)) {
			let e = [].slice.call(i);
			r = e.map((e) => e.value), e.length === 1 && (r = r[0]);
		}
		n.target.type === "datetime-local" && (r = new Date(Date.parse(r)).toISOString());
		let a = n.target.name, o = t.nameIndex[a];
		sT(o) && (t.nameIndex[a] = t.index, o = t.index, e.current = t), t.elements[o] = r;
		let s = a.split("."), c = s.slice(0, s.length - 1).join("."), l = s.slice(s.length - 1);
		sT(pT(_I(e), c)) && (c = s.slice(0, s.length - 2).join(".")), n.target.type === "checkbox" && (r = n.currentTarget.checked), e.current = t, gI(e, _T(_I(e), c, l, r)), e.current = t;
	} };
}, xI = (e, t) => {
	let n = e.current, r = n.nameIndex[t];
	return n.elements[r];
}, SI = (e, t, n) => {
	let r = typeof n, i = e.current, a = t + i.index, o = {
		name: t,
		defaultValue: xI(e, t),
		onChange: bI(e).onChange,
		sx: { width: "100%" }
	};
	return i.elementSelector({
		key: t,
		formRef: e,
		jsxKey: a,
		currentType: r,
		inputProps: o
	});
}, CI = (e, t, n) => {
	let r = e.current;
	if (sT(r.nameIndex[t])) {
		r.nameIndex[t] = r.index, r.elements[r.index] = n;
		let i = SI(e, t, n);
		if (!sT(i)) {
			let e = cT(t.replace(/root\./, ""), "."), n = e.split(" "), a = n[n.length - 1];
			/^\d+$/.test(a) ? r.labels[r.index] = "None" : r.labels[r.index] = /* @__PURE__ */ E(p, {
				column: t,
				children: e
			}, "Label" + t + r.index), r.element_component[r.index] = i, r.index++;
		}
	}
	e.current = r;
}, wI = (e, t) => e.current.nameIndex[t], TI = (e, t) => {
	let n = e.current;
	delete n.labels[wI(e, t)], e.current = n;
}, EI = ({ formRef: e, container: t }) => {
	hT(t, (t) => {
		let n = t.path, r = t.value;
		if (Array.isArray(r)) {
			let t = [];
			Object.keys(r).forEach((e) => {
				sT(r[e]) || Array.isArray(r[e]) || t.push(r[e]);
			}), t.length > 0 && CI(e, n, t);
			return;
		}
		Object.keys(r).forEach((t) => {
			sT(r[t]) || (typeof r[t] == "object" && Object.keys(r[t]).forEach((i) => {
				let a = {};
				a[i] = r[t][i], CI(e, n + "." + t + "." + i, a);
			}), oT(r[t]) && CI(e, n + "." + t, r[t]));
		});
	});
}, DI = w(/* @__PURE__ */ E("path", { d: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm2 16H8v-2h8zm0-4H8v-2h8zm-3-5V3.5L18.5 9z" }), "Description"), OI = N(null), kI = () => ne(OI), AI = (e, t = !0) => {
	let n = kI();
	return (r) => {
		t && r ? n?.register(e, r) : n?.unregister(e);
	};
}, jI = ({ title: e, getSchema: n, handleSave: r, elementSelector: i, footerButtons: a, refKey: o, register_component: s = !1 }) => {
	let c = AI(o, s), l = se(null), [d, f] = ce(!1), p = () => {
		f(!1);
	};
	l.current ||= pI(i, { setShow: (e) => {
		f(e);
	} }), ie(() => (c(l.current), () => c(null)), [c]);
	let [m, h] = ce(void 0), [_, b] = ce(0);
	return a ||= [], /* @__PURE__ */ D(g, {
		direction: "row",
		gap: 3,
		children: [/* @__PURE__ */ E(u, {
			onClick: async () => {
				try {
					gI(l, vT(null, [], ".", await n())), hI(l, p), EI({
						formRef: l,
						container: _I(l)
					}), h(yI(l)), f(!0);
				} catch (e) {
					console.error("Failed to load schema:", e);
				}
			},
			children: /* @__PURE__ */ E(DI, { sx: { color: "red" } })
		}), /* @__PURE__ */ E(yt, {
			title: e,
			body: /* @__PURE__ */ D(t, {
				sx: { width: "100%" },
				children: [
					/* @__PURE__ */ E(t, {
						sx: {
							borderBottom: 1,
							borderColor: "divider"
						},
						children: /* @__PURE__ */ D(y, {
							value: _,
							onChange: (e, t) => b(t),
							"aria-label": "custom tabs",
							children: [/* @__PURE__ */ E(v, { label: "File Upload" }), /* @__PURE__ */ E(v, { label: "File Viewer" })]
						})
					}),
					_ === 0 && /* @__PURE__ */ E(t, {
						sx: {
							borderBottom: 1,
							borderColor: "divider",
							width: "100%"
						},
						children: m
					}),
					_ === 1 && /* @__PURE__ */ E(t, {
						sx: { p: 3 },
						children: /* @__PURE__ */ E("pre", { children: JSON.stringify(_I(l)?.value, null, 2) })
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
}, MI = ({ refreshGrid: e, api: t, id: n, title: r, footerButtons: i }) => /* @__PURE__ */ E(jI, {
	title: r,
	button_title: "Update",
	getSchema: lI(t, n),
	handleSave: (r) => {
		t.update(r, n).then(() => e());
	},
	footerButtons: i,
	register_component: !0,
	refKey: "update_modal"
}), NI = ({ handleRefreshGrid: e, api: t, id: n, params: r }) => /* @__PURE__ */ E(g, {
	direction: "row",
	gap: 1,
	children: /* @__PURE__ */ E(MI, {
		...r,
		refreshGrid: e,
		api: t,
		id: n
	})
}), PI = w(/* @__PURE__ */ E("path", { d: "M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z" }), "Download"), FI = w(/* @__PURE__ */ E("path", { d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }), "Close"), II = (e, t) => {
	let n = e.current;
	n && (n.endpoint = t);
}, LI = (e) => e.current.endpoint, RI = (e, t) => {
	let n = e.current;
	gT(t, (e) => {
		let t = e.value, r = e.path, i = typeof t;
		if (n.headers_ri[r] !== void 0) return;
		let a = "string";
		i === "number" ? a = "number" : r.toLowerCase().includes("date") || r.toLowerCase().includes("modified") ? a = "date" : i === "string" && (a = "string"), n.headers[n.index] = {
			field: r,
			type: a,
			headerName: r
		}, n.rows[n.index] = [], n.headers_ri[r] = n.index, n.index++;
	}), e.current = n;
}, zI = (e, t) => {
	let n = e.current;
	n && (n.rows = [], n.row_count = 0, n.headers.forEach(() => {
		n.rows.push([]);
	}), gT(t, (e) => {
		if (oT(e.value)) {
			let t = n.headers_ri[e.path];
			t !== void 0 && n.rows[t].push(e.value);
		}
	}), e.current = n);
}, BI = (e) => {
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
}, VI = (e) => {
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
		renderCell: tL(e)
	}), n;
}, HI = (e) => e.current.paginationModel, UI = (e, t) => {
	let n = e.current;
	n && (n.args = t, e.current = n);
}, WI = (e, t) => {
	let n = e.current;
	n && (n.args = {
		...n.args,
		...t
	}, e.current = n);
}, GI = (e, t) => {
	let n = e.current;
	n && (n.args.sortModel = JSON.stringify(t), e.current = n);
}, KI = (e, t) => {
	let n = e.current;
	n && (n.args.filterModel = JSON.stringify(t), e.current = n);
}, qI = (e, t) => () => {
	let n = e.current;
	n && (n.paginationModel = t, n.args.paginationModel = JSON.stringify(t), e.current = n);
}, JI = (e, t) => {
	let n = e.current;
	n && (n.fetch_params = t, e.current = n);
}, YI = (e) => e.current.fetch_params, XI = (e, t) => ({ getRows: async (n) => {
	let r = e.current;
	if (!r) return {
		rows: [],
		rowCount: 0
	};
	KI(e, n.filterModel), GI(e, n.sortModel);
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
		Array.isArray(t) && t.length === 0 || sT(t) || (s[e] = t);
	}), sT(n.sortModel) || Array.isArray(n.sortModel) && n.sortModel.length === 0 && delete s.sortModel, sT(n.filterModel) || Array.isArray(n.filterModel.items) && n.filterModel.items.length === 0 && delete s.filterModel;
	let c = await r.api.at("/" + r.endpoint, {
		fetchParams: {
			method: "GET",
			...YI(e)
		},
		args: s
	}), l = vT(null, [], ".", c.results);
	return RI(e, l), zI(e, l), r.row_count = c.pagination?.total || 0, e.current = r, t(), {
		rows: BI(e),
		rowCount: c.pagination?.total || 0
	};
} }), ZI = (e, t) => {
	let n = e.current;
	n && (n.args.search = t, e.current = n);
}, QI = (e) => e.current.datasource, $I = (e) => {
	let t = e.current;
	t && t.refresh();
}, eL = (e) => (t) => {
	let n = e.current;
	if (!n || n.rows.length === 0) return;
	let r = t.ids, i = n.rows[0].length, a = Array.from({ length: i }, (e, t) => t).filter((e) => {
		let t = n.rows[0][e];
		return r.has(t);
	});
	n.selected_data = n.rows.map((e) => a.map((t) => e[t])), n.selected_ids = t, e.current = n;
}, tL = (e) => {
	let r = kI();
	return (i) => {
		let a = e.current;
		if (!a) return;
		let o = "white";
		i.row.stage === "rejected" && (o = "red"), i.row.stage === "approved" && (o = "green");
		let s = /* @__PURE__ */ D(g, {
			direction: "column",
			justifyContent: "space-between",
			spacing: 2,
			sx: { width: "100%" },
			children: [/* @__PURE__ */ D(g, {
				gap: 3,
				direction: "row",
				children: [
					i.row.item_id,
					/* @__PURE__ */ E(t, {
						sx: {
							backgroundColor: o,
							color: "black",
							borderRadius: 2,
							px: 1.5,
							fontSize: "0.875rem"
						},
						children: i.row.stage
					}),
					/* @__PURE__ */ E(t, { sx: { flexGrow: 1 } }, "spacer"),
					/* @__PURE__ */ E(u, {
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
						children: /* @__PURE__ */ E(FI, {})
					})
				]
			}), /* @__PURE__ */ D(g, {
				gap: 3,
				direction: "row",
				children: [i.row.code, i.row.description]
			})]
		});
		return /* @__PURE__ */ E(NI, {
			params: {
				footerButtons: [
					/* @__PURE__ */ E(n, {
						variant: "outlined",
						sx: {
							color: "black",
							backgroundColor: "white",
							borderColor: "black"
						},
						startIcon: /* @__PURE__ */ E(PI, {}),
						children: "Extract"
					}),
					/* @__PURE__ */ E(t, { sx: { flexGrow: 1 } }, "spacer"),
					/* @__PURE__ */ E(n, {
						sx: { backgroundColor: "red" },
						variant: "contained",
						children: "Reject"
					}),
					/* @__PURE__ */ E(_t, {
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
			handleRefreshGrid: () => $I(e),
			api: a.api,
			id: i.id
		});
	};
}, nL = ({ api: e, endpoint: t, row_details: n, refKey: r, register_component: i = !1, toolbar: a = !1, checkbox_select: o = !1 }) => {
	let s = AI(r, i), c = se(null), [, l] = ce(!1), [u, d] = ce({
		page: 0,
		pageSize: 5
	}), [f, p] = ce(0), m = ki(), h = () => ({
		gridRef: m,
		index: 0,
		headers: [],
		headers_ri: {},
		rows: [],
		row_count: 0,
		datasource: XI(c, g),
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
	return c.current ||= h(), ie(() => (s(c.current), () => s(null)), [s]), /* @__PURE__ */ E(aT, {
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
		columns: VI(c),
		dataSource: QI(c),
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
		onRowSelectionModelChange: (e) => eL(c)(e),
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
			console.error("DataGrid Error Type:", e.name), console.error("DataGrid Error Message:", e.message), e.cause && (console.group("Original Error Cause"), console.error("Message:", e.cause.message), console.error("Stack:", e.cause.stack), console.groupEnd()), e instanceof pg ? console.warn("Fetch failed. Check your API mock or network.") : console.warn("Row update failed.");
		}
	});
};
//#endregion
//#region node_modules/tslib/tslib.es6.mjs
function rL(e, t, n, r) {
	function i(e) {
		return e instanceof n ? e : new n(function(t) {
			t(e);
		});
	}
	return new (n ||= Promise)(function(n, a) {
		function o(e) {
			try {
				c(r.next(e));
			} catch (e) {
				a(e);
			}
		}
		function s(e) {
			try {
				c(r.throw(e));
			} catch (e) {
				a(e);
			}
		}
		function c(e) {
			e.done ? n(e.value) : i(e.value).then(o, s);
		}
		c((r = r.apply(e, t || [])).next());
	});
}
//#endregion
//#region node_modules/file-selector/dist/es2015/file.js
var iL = new Map([
	["1km", "application/vnd.1000minds.decision-model+xml"],
	["3dml", "text/vnd.in3d.3dml"],
	["3ds", "image/x-3ds"],
	["3g2", "video/3gpp2"],
	["3gp", "video/3gp"],
	["3gpp", "video/3gpp"],
	["3mf", "model/3mf"],
	["7z", "application/x-7z-compressed"],
	["7zip", "application/x-7z-compressed"],
	["123", "application/vnd.lotus-1-2-3"],
	["aab", "application/x-authorware-bin"],
	["aac", "audio/x-acc"],
	["aam", "application/x-authorware-map"],
	["aas", "application/x-authorware-seg"],
	["abw", "application/x-abiword"],
	["ac", "application/vnd.nokia.n-gage.ac+xml"],
	["ac3", "audio/ac3"],
	["acc", "application/vnd.americandynamics.acc"],
	["ace", "application/x-ace-compressed"],
	["acu", "application/vnd.acucobol"],
	["acutc", "application/vnd.acucorp"],
	["adp", "audio/adpcm"],
	["aep", "application/vnd.audiograph"],
	["afm", "application/x-font-type1"],
	["afp", "application/vnd.ibm.modcap"],
	["ahead", "application/vnd.ahead.space"],
	["ai", "application/pdf"],
	["aif", "audio/x-aiff"],
	["aifc", "audio/x-aiff"],
	["aiff", "audio/x-aiff"],
	["air", "application/vnd.adobe.air-application-installer-package+zip"],
	["ait", "application/vnd.dvb.ait"],
	["ami", "application/vnd.amiga.ami"],
	["amr", "audio/amr"],
	["apk", "application/vnd.android.package-archive"],
	["apng", "image/apng"],
	["appcache", "text/cache-manifest"],
	["application", "application/x-ms-application"],
	["apr", "application/vnd.lotus-approach"],
	["arc", "application/x-freearc"],
	["arj", "application/x-arj"],
	["asc", "application/pgp-signature"],
	["asf", "video/x-ms-asf"],
	["asm", "text/x-asm"],
	["aso", "application/vnd.accpac.simply.aso"],
	["asx", "video/x-ms-asf"],
	["atc", "application/vnd.acucorp"],
	["atom", "application/atom+xml"],
	["atomcat", "application/atomcat+xml"],
	["atomdeleted", "application/atomdeleted+xml"],
	["atomsvc", "application/atomsvc+xml"],
	["atx", "application/vnd.antix.game-component"],
	["au", "audio/x-au"],
	["avi", "video/x-msvideo"],
	["avif", "image/avif"],
	["aw", "application/applixware"],
	["azf", "application/vnd.airzip.filesecure.azf"],
	["azs", "application/vnd.airzip.filesecure.azs"],
	["azv", "image/vnd.airzip.accelerator.azv"],
	["azw", "application/vnd.amazon.ebook"],
	["b16", "image/vnd.pco.b16"],
	["bat", "application/x-msdownload"],
	["bcpio", "application/x-bcpio"],
	["bdf", "application/x-font-bdf"],
	["bdm", "application/vnd.syncml.dm+wbxml"],
	["bdoc", "application/x-bdoc"],
	["bed", "application/vnd.realvnc.bed"],
	["bh2", "application/vnd.fujitsu.oasysprs"],
	["bin", "application/octet-stream"],
	["blb", "application/x-blorb"],
	["blorb", "application/x-blorb"],
	["bmi", "application/vnd.bmi"],
	["bmml", "application/vnd.balsamiq.bmml+xml"],
	["bmp", "image/bmp"],
	["book", "application/vnd.framemaker"],
	["box", "application/vnd.previewsystems.box"],
	["boz", "application/x-bzip2"],
	["bpk", "application/octet-stream"],
	["bpmn", "application/octet-stream"],
	["bsp", "model/vnd.valve.source.compiled-map"],
	["btif", "image/prs.btif"],
	["buffer", "application/octet-stream"],
	["bz", "application/x-bzip"],
	["bz2", "application/x-bzip2"],
	["c", "text/x-c"],
	["c4d", "application/vnd.clonk.c4group"],
	["c4f", "application/vnd.clonk.c4group"],
	["c4g", "application/vnd.clonk.c4group"],
	["c4p", "application/vnd.clonk.c4group"],
	["c4u", "application/vnd.clonk.c4group"],
	["c11amc", "application/vnd.cluetrust.cartomobile-config"],
	["c11amz", "application/vnd.cluetrust.cartomobile-config-pkg"],
	["cab", "application/vnd.ms-cab-compressed"],
	["caf", "audio/x-caf"],
	["cap", "application/vnd.tcpdump.pcap"],
	["car", "application/vnd.curl.car"],
	["cat", "application/vnd.ms-pki.seccat"],
	["cb7", "application/x-cbr"],
	["cba", "application/x-cbr"],
	["cbr", "application/x-cbr"],
	["cbt", "application/x-cbr"],
	["cbz", "application/x-cbr"],
	["cc", "text/x-c"],
	["cco", "application/x-cocoa"],
	["cct", "application/x-director"],
	["ccxml", "application/ccxml+xml"],
	["cdbcmsg", "application/vnd.contact.cmsg"],
	["cda", "application/x-cdf"],
	["cdf", "application/x-netcdf"],
	["cdfx", "application/cdfx+xml"],
	["cdkey", "application/vnd.mediastation.cdkey"],
	["cdmia", "application/cdmi-capability"],
	["cdmic", "application/cdmi-container"],
	["cdmid", "application/cdmi-domain"],
	["cdmio", "application/cdmi-object"],
	["cdmiq", "application/cdmi-queue"],
	["cdr", "application/cdr"],
	["cdx", "chemical/x-cdx"],
	["cdxml", "application/vnd.chemdraw+xml"],
	["cdy", "application/vnd.cinderella"],
	["cer", "application/pkix-cert"],
	["cfs", "application/x-cfs-compressed"],
	["cgm", "image/cgm"],
	["chat", "application/x-chat"],
	["chm", "application/vnd.ms-htmlhelp"],
	["chrt", "application/vnd.kde.kchart"],
	["cif", "chemical/x-cif"],
	["cii", "application/vnd.anser-web-certificate-issue-initiation"],
	["cil", "application/vnd.ms-artgalry"],
	["cjs", "application/node"],
	["cla", "application/vnd.claymore"],
	["class", "application/octet-stream"],
	["clkk", "application/vnd.crick.clicker.keyboard"],
	["clkp", "application/vnd.crick.clicker.palette"],
	["clkt", "application/vnd.crick.clicker.template"],
	["clkw", "application/vnd.crick.clicker.wordbank"],
	["clkx", "application/vnd.crick.clicker"],
	["clp", "application/x-msclip"],
	["cmc", "application/vnd.cosmocaller"],
	["cmdf", "chemical/x-cmdf"],
	["cml", "chemical/x-cml"],
	["cmp", "application/vnd.yellowriver-custom-menu"],
	["cmx", "image/x-cmx"],
	["cod", "application/vnd.rim.cod"],
	["coffee", "text/coffeescript"],
	["com", "application/x-msdownload"],
	["conf", "text/plain"],
	["cpio", "application/x-cpio"],
	["cpp", "text/x-c"],
	["cpt", "application/mac-compactpro"],
	["crd", "application/x-mscardfile"],
	["crl", "application/pkix-crl"],
	["crt", "application/x-x509-ca-cert"],
	["crx", "application/x-chrome-extension"],
	["cryptonote", "application/vnd.rig.cryptonote"],
	["csh", "application/x-csh"],
	["csl", "application/vnd.citationstyles.style+xml"],
	["csml", "chemical/x-csml"],
	["csp", "application/vnd.commonspace"],
	["csr", "application/octet-stream"],
	["css", "text/css"],
	["cst", "application/x-director"],
	["csv", "text/csv"],
	["cu", "application/cu-seeme"],
	["curl", "text/vnd.curl"],
	["cww", "application/prs.cww"],
	["cxt", "application/x-director"],
	["cxx", "text/x-c"],
	["dae", "model/vnd.collada+xml"],
	["daf", "application/vnd.mobius.daf"],
	["dart", "application/vnd.dart"],
	["dataless", "application/vnd.fdsn.seed"],
	["davmount", "application/davmount+xml"],
	["dbf", "application/vnd.dbf"],
	["dbk", "application/docbook+xml"],
	["dcr", "application/x-director"],
	["dcurl", "text/vnd.curl.dcurl"],
	["dd2", "application/vnd.oma.dd2+xml"],
	["ddd", "application/vnd.fujixerox.ddd"],
	["ddf", "application/vnd.syncml.dmddf+xml"],
	["dds", "image/vnd.ms-dds"],
	["deb", "application/x-debian-package"],
	["def", "text/plain"],
	["deploy", "application/octet-stream"],
	["der", "application/x-x509-ca-cert"],
	["dfac", "application/vnd.dreamfactory"],
	["dgc", "application/x-dgc-compressed"],
	["dic", "text/x-c"],
	["dir", "application/x-director"],
	["dis", "application/vnd.mobius.dis"],
	["disposition-notification", "message/disposition-notification"],
	["dist", "application/octet-stream"],
	["distz", "application/octet-stream"],
	["djv", "image/vnd.djvu"],
	["djvu", "image/vnd.djvu"],
	["dll", "application/octet-stream"],
	["dmg", "application/x-apple-diskimage"],
	["dmn", "application/octet-stream"],
	["dmp", "application/vnd.tcpdump.pcap"],
	["dms", "application/octet-stream"],
	["dna", "application/vnd.dna"],
	["doc", "application/msword"],
	["docm", "application/vnd.ms-word.template.macroEnabled.12"],
	["docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
	["dot", "application/msword"],
	["dotm", "application/vnd.ms-word.template.macroEnabled.12"],
	["dotx", "application/vnd.openxmlformats-officedocument.wordprocessingml.template"],
	["dp", "application/vnd.osgi.dp"],
	["dpg", "application/vnd.dpgraph"],
	["dra", "audio/vnd.dra"],
	["drle", "image/dicom-rle"],
	["dsc", "text/prs.lines.tag"],
	["dssc", "application/dssc+der"],
	["dtb", "application/x-dtbook+xml"],
	["dtd", "application/xml-dtd"],
	["dts", "audio/vnd.dts"],
	["dtshd", "audio/vnd.dts.hd"],
	["dump", "application/octet-stream"],
	["dvb", "video/vnd.dvb.file"],
	["dvi", "application/x-dvi"],
	["dwd", "application/atsc-dwd+xml"],
	["dwf", "model/vnd.dwf"],
	["dwg", "image/vnd.dwg"],
	["dxf", "image/vnd.dxf"],
	["dxp", "application/vnd.spotfire.dxp"],
	["dxr", "application/x-director"],
	["ear", "application/java-archive"],
	["ecelp4800", "audio/vnd.nuera.ecelp4800"],
	["ecelp7470", "audio/vnd.nuera.ecelp7470"],
	["ecelp9600", "audio/vnd.nuera.ecelp9600"],
	["ecma", "application/ecmascript"],
	["edm", "application/vnd.novadigm.edm"],
	["edx", "application/vnd.novadigm.edx"],
	["efif", "application/vnd.picsel"],
	["ei6", "application/vnd.pg.osasli"],
	["elc", "application/octet-stream"],
	["emf", "image/emf"],
	["eml", "message/rfc822"],
	["emma", "application/emma+xml"],
	["emotionml", "application/emotionml+xml"],
	["emz", "application/x-msmetafile"],
	["eol", "audio/vnd.digital-winds"],
	["eot", "application/vnd.ms-fontobject"],
	["eps", "application/postscript"],
	["epub", "application/epub+zip"],
	["es", "application/ecmascript"],
	["es3", "application/vnd.eszigno3+xml"],
	["esa", "application/vnd.osgi.subsystem"],
	["esf", "application/vnd.epson.esf"],
	["et3", "application/vnd.eszigno3+xml"],
	["etx", "text/x-setext"],
	["eva", "application/x-eva"],
	["evy", "application/x-envoy"],
	["exe", "application/octet-stream"],
	["exi", "application/exi"],
	["exp", "application/express"],
	["exr", "image/aces"],
	["ext", "application/vnd.novadigm.ext"],
	["ez", "application/andrew-inset"],
	["ez2", "application/vnd.ezpix-album"],
	["ez3", "application/vnd.ezpix-package"],
	["f", "text/x-fortran"],
	["f4v", "video/mp4"],
	["f77", "text/x-fortran"],
	["f90", "text/x-fortran"],
	["fbs", "image/vnd.fastbidsheet"],
	["fcdt", "application/vnd.adobe.formscentral.fcdt"],
	["fcs", "application/vnd.isac.fcs"],
	["fdf", "application/vnd.fdf"],
	["fdt", "application/fdt+xml"],
	["fe_launch", "application/vnd.denovo.fcselayout-link"],
	["fg5", "application/vnd.fujitsu.oasysgp"],
	["fgd", "application/x-director"],
	["fh", "image/x-freehand"],
	["fh4", "image/x-freehand"],
	["fh5", "image/x-freehand"],
	["fh7", "image/x-freehand"],
	["fhc", "image/x-freehand"],
	["fig", "application/x-xfig"],
	["fits", "image/fits"],
	["flac", "audio/x-flac"],
	["fli", "video/x-fli"],
	["flo", "application/vnd.micrografx.flo"],
	["flv", "video/x-flv"],
	["flw", "application/vnd.kde.kivio"],
	["flx", "text/vnd.fmi.flexstor"],
	["fly", "text/vnd.fly"],
	["fm", "application/vnd.framemaker"],
	["fnc", "application/vnd.frogans.fnc"],
	["fo", "application/vnd.software602.filler.form+xml"],
	["for", "text/x-fortran"],
	["fpx", "image/vnd.fpx"],
	["frame", "application/vnd.framemaker"],
	["fsc", "application/vnd.fsc.weblaunch"],
	["fst", "image/vnd.fst"],
	["ftc", "application/vnd.fluxtime.clip"],
	["fti", "application/vnd.anser-web-funds-transfer-initiation"],
	["fvt", "video/vnd.fvt"],
	["fxp", "application/vnd.adobe.fxp"],
	["fxpl", "application/vnd.adobe.fxp"],
	["fzs", "application/vnd.fuzzysheet"],
	["g2w", "application/vnd.geoplan"],
	["g3", "image/g3fax"],
	["g3w", "application/vnd.geospace"],
	["gac", "application/vnd.groove-account"],
	["gam", "application/x-tads"],
	["gbr", "application/rpki-ghostbusters"],
	["gca", "application/x-gca-compressed"],
	["gdl", "model/vnd.gdl"],
	["gdoc", "application/vnd.google-apps.document"],
	["geo", "application/vnd.dynageo"],
	["geojson", "application/geo+json"],
	["gex", "application/vnd.geometry-explorer"],
	["ggb", "application/vnd.geogebra.file"],
	["ggt", "application/vnd.geogebra.tool"],
	["ghf", "application/vnd.groove-help"],
	["gif", "image/gif"],
	["gim", "application/vnd.groove-identity-message"],
	["glb", "model/gltf-binary"],
	["gltf", "model/gltf+json"],
	["gml", "application/gml+xml"],
	["gmx", "application/vnd.gmx"],
	["gnumeric", "application/x-gnumeric"],
	["gpg", "application/gpg-keys"],
	["gph", "application/vnd.flographit"],
	["gpx", "application/gpx+xml"],
	["gqf", "application/vnd.grafeq"],
	["gqs", "application/vnd.grafeq"],
	["gram", "application/srgs"],
	["gramps", "application/x-gramps-xml"],
	["gre", "application/vnd.geometry-explorer"],
	["grv", "application/vnd.groove-injector"],
	["grxml", "application/srgs+xml"],
	["gsf", "application/x-font-ghostscript"],
	["gsheet", "application/vnd.google-apps.spreadsheet"],
	["gslides", "application/vnd.google-apps.presentation"],
	["gtar", "application/x-gtar"],
	["gtm", "application/vnd.groove-tool-message"],
	["gtw", "model/vnd.gtw"],
	["gv", "text/vnd.graphviz"],
	["gxf", "application/gxf"],
	["gxt", "application/vnd.geonext"],
	["gz", "application/gzip"],
	["gzip", "application/gzip"],
	["h", "text/x-c"],
	["h261", "video/h261"],
	["h263", "video/h263"],
	["h264", "video/h264"],
	["hal", "application/vnd.hal+xml"],
	["hbci", "application/vnd.hbci"],
	["hbs", "text/x-handlebars-template"],
	["hdd", "application/x-virtualbox-hdd"],
	["hdf", "application/x-hdf"],
	["heic", "image/heic"],
	["heics", "image/heic-sequence"],
	["heif", "image/heif"],
	["heifs", "image/heif-sequence"],
	["hej2", "image/hej2k"],
	["held", "application/atsc-held+xml"],
	["hh", "text/x-c"],
	["hjson", "application/hjson"],
	["hlp", "application/winhlp"],
	["hpgl", "application/vnd.hp-hpgl"],
	["hpid", "application/vnd.hp-hpid"],
	["hps", "application/vnd.hp-hps"],
	["hqx", "application/mac-binhex40"],
	["hsj2", "image/hsj2"],
	["htc", "text/x-component"],
	["htke", "application/vnd.kenameaapp"],
	["htm", "text/html"],
	["html", "text/html"],
	["hvd", "application/vnd.yamaha.hv-dic"],
	["hvp", "application/vnd.yamaha.hv-voice"],
	["hvs", "application/vnd.yamaha.hv-script"],
	["i2g", "application/vnd.intergeo"],
	["icc", "application/vnd.iccprofile"],
	["ice", "x-conference/x-cooltalk"],
	["icm", "application/vnd.iccprofile"],
	["ico", "image/x-icon"],
	["ics", "text/calendar"],
	["ief", "image/ief"],
	["ifb", "text/calendar"],
	["ifm", "application/vnd.shana.informed.formdata"],
	["iges", "model/iges"],
	["igl", "application/vnd.igloader"],
	["igm", "application/vnd.insors.igm"],
	["igs", "model/iges"],
	["igx", "application/vnd.micrografx.igx"],
	["iif", "application/vnd.shana.informed.interchange"],
	["img", "application/octet-stream"],
	["imp", "application/vnd.accpac.simply.imp"],
	["ims", "application/vnd.ms-ims"],
	["in", "text/plain"],
	["ini", "text/plain"],
	["ink", "application/inkml+xml"],
	["inkml", "application/inkml+xml"],
	["install", "application/x-install-instructions"],
	["iota", "application/vnd.astraea-software.iota"],
	["ipfix", "application/ipfix"],
	["ipk", "application/vnd.shana.informed.package"],
	["irm", "application/vnd.ibm.rights-management"],
	["irp", "application/vnd.irepository.package+xml"],
	["iso", "application/x-iso9660-image"],
	["itp", "application/vnd.shana.informed.formtemplate"],
	["its", "application/its+xml"],
	["ivp", "application/vnd.immervision-ivp"],
	["ivu", "application/vnd.immervision-ivu"],
	["jad", "text/vnd.sun.j2me.app-descriptor"],
	["jade", "text/jade"],
	["jam", "application/vnd.jam"],
	["jar", "application/java-archive"],
	["jardiff", "application/x-java-archive-diff"],
	["java", "text/x-java-source"],
	["jhc", "image/jphc"],
	["jisp", "application/vnd.jisp"],
	["jls", "image/jls"],
	["jlt", "application/vnd.hp-jlyt"],
	["jng", "image/x-jng"],
	["jnlp", "application/x-java-jnlp-file"],
	["joda", "application/vnd.joost.joda-archive"],
	["jp2", "image/jp2"],
	["jpe", "image/jpeg"],
	["jpeg", "image/jpeg"],
	["jpf", "image/jpx"],
	["jpg", "image/jpeg"],
	["jpg2", "image/jp2"],
	["jpgm", "video/jpm"],
	["jpgv", "video/jpeg"],
	["jph", "image/jph"],
	["jpm", "video/jpm"],
	["jpx", "image/jpx"],
	["js", "application/javascript"],
	["json", "application/json"],
	["json5", "application/json5"],
	["jsonld", "application/ld+json"],
	["jsonl", "application/jsonl"],
	["jsonml", "application/jsonml+json"],
	["jsx", "text/jsx"],
	["jxr", "image/jxr"],
	["jxra", "image/jxra"],
	["jxrs", "image/jxrs"],
	["jxs", "image/jxs"],
	["jxsc", "image/jxsc"],
	["jxsi", "image/jxsi"],
	["jxss", "image/jxss"],
	["kar", "audio/midi"],
	["karbon", "application/vnd.kde.karbon"],
	["kdb", "application/octet-stream"],
	["kdbx", "application/x-keepass2"],
	["key", "application/x-iwork-keynote-sffkey"],
	["kfo", "application/vnd.kde.kformula"],
	["kia", "application/vnd.kidspiration"],
	["kml", "application/vnd.google-earth.kml+xml"],
	["kmz", "application/vnd.google-earth.kmz"],
	["kne", "application/vnd.kinar"],
	["knp", "application/vnd.kinar"],
	["kon", "application/vnd.kde.kontour"],
	["kpr", "application/vnd.kde.kpresenter"],
	["kpt", "application/vnd.kde.kpresenter"],
	["kpxx", "application/vnd.ds-keypoint"],
	["ksp", "application/vnd.kde.kspread"],
	["ktr", "application/vnd.kahootz"],
	["ktx", "image/ktx"],
	["ktx2", "image/ktx2"],
	["ktz", "application/vnd.kahootz"],
	["kwd", "application/vnd.kde.kword"],
	["kwt", "application/vnd.kde.kword"],
	["lasxml", "application/vnd.las.las+xml"],
	["latex", "application/x-latex"],
	["lbd", "application/vnd.llamagraphics.life-balance.desktop"],
	["lbe", "application/vnd.llamagraphics.life-balance.exchange+xml"],
	["les", "application/vnd.hhe.lesson-player"],
	["less", "text/less"],
	["lgr", "application/lgr+xml"],
	["lha", "application/octet-stream"],
	["link66", "application/vnd.route66.link66+xml"],
	["list", "text/plain"],
	["list3820", "application/vnd.ibm.modcap"],
	["listafp", "application/vnd.ibm.modcap"],
	["litcoffee", "text/coffeescript"],
	["lnk", "application/x-ms-shortcut"],
	["log", "text/plain"],
	["lostxml", "application/lost+xml"],
	["lrf", "application/octet-stream"],
	["lrm", "application/vnd.ms-lrm"],
	["ltf", "application/vnd.frogans.ltf"],
	["lua", "text/x-lua"],
	["luac", "application/x-lua-bytecode"],
	["lvp", "audio/vnd.lucent.voice"],
	["lwp", "application/vnd.lotus-wordpro"],
	["lzh", "application/octet-stream"],
	["m1v", "video/mpeg"],
	["m2a", "audio/mpeg"],
	["m2v", "video/mpeg"],
	["m3a", "audio/mpeg"],
	["m3u", "text/plain"],
	["m3u8", "application/vnd.apple.mpegurl"],
	["m4a", "audio/x-m4a"],
	["m4p", "application/mp4"],
	["m4s", "video/iso.segment"],
	["m4u", "application/vnd.mpegurl"],
	["m4v", "video/x-m4v"],
	["m13", "application/x-msmediaview"],
	["m14", "application/x-msmediaview"],
	["m21", "application/mp21"],
	["ma", "application/mathematica"],
	["mads", "application/mads+xml"],
	["maei", "application/mmt-aei+xml"],
	["mag", "application/vnd.ecowin.chart"],
	["maker", "application/vnd.framemaker"],
	["man", "text/troff"],
	["manifest", "text/cache-manifest"],
	["map", "application/json"],
	["mar", "application/octet-stream"],
	["markdown", "text/markdown"],
	["mathml", "application/mathml+xml"],
	["mb", "application/mathematica"],
	["mbk", "application/vnd.mobius.mbk"],
	["mbox", "application/mbox"],
	["mc1", "application/vnd.medcalcdata"],
	["mcd", "application/vnd.mcd"],
	["mcurl", "text/vnd.curl.mcurl"],
	["md", "text/markdown"],
	["mdb", "application/x-msaccess"],
	["mdi", "image/vnd.ms-modi"],
	["mdx", "text/mdx"],
	["me", "text/troff"],
	["mesh", "model/mesh"],
	["meta4", "application/metalink4+xml"],
	["metalink", "application/metalink+xml"],
	["mets", "application/mets+xml"],
	["mfm", "application/vnd.mfmp"],
	["mft", "application/rpki-manifest"],
	["mgp", "application/vnd.osgeo.mapguide.package"],
	["mgz", "application/vnd.proteus.magazine"],
	["mid", "audio/midi"],
	["midi", "audio/midi"],
	["mie", "application/x-mie"],
	["mif", "application/vnd.mif"],
	["mime", "message/rfc822"],
	["mj2", "video/mj2"],
	["mjp2", "video/mj2"],
	["mjs", "application/javascript"],
	["mk3d", "video/x-matroska"],
	["mka", "audio/x-matroska"],
	["mkd", "text/x-markdown"],
	["mks", "video/x-matroska"],
	["mkv", "video/x-matroska"],
	["mlp", "application/vnd.dolby.mlp"],
	["mmd", "application/vnd.chipnuts.karaoke-mmd"],
	["mmf", "application/vnd.smaf"],
	["mml", "text/mathml"],
	["mmr", "image/vnd.fujixerox.edmics-mmr"],
	["mng", "video/x-mng"],
	["mny", "application/x-msmoney"],
	["mobi", "application/x-mobipocket-ebook"],
	["mods", "application/mods+xml"],
	["mov", "video/quicktime"],
	["movie", "video/x-sgi-movie"],
	["mp2", "audio/mpeg"],
	["mp2a", "audio/mpeg"],
	["mp3", "audio/mpeg"],
	["mp4", "video/mp4"],
	["mp4a", "audio/mp4"],
	["mp4s", "application/mp4"],
	["mp4v", "video/mp4"],
	["mp21", "application/mp21"],
	["mpc", "application/vnd.mophun.certificate"],
	["mpd", "application/dash+xml"],
	["mpe", "video/mpeg"],
	["mpeg", "video/mpeg"],
	["mpg", "video/mpeg"],
	["mpg4", "video/mp4"],
	["mpga", "audio/mpeg"],
	["mpkg", "application/vnd.apple.installer+xml"],
	["mpm", "application/vnd.blueice.multipass"],
	["mpn", "application/vnd.mophun.application"],
	["mpp", "application/vnd.ms-project"],
	["mpt", "application/vnd.ms-project"],
	["mpy", "application/vnd.ibm.minipay"],
	["mqy", "application/vnd.mobius.mqy"],
	["mrc", "application/marc"],
	["mrcx", "application/marcxml+xml"],
	["ms", "text/troff"],
	["mscml", "application/mediaservercontrol+xml"],
	["mseed", "application/vnd.fdsn.mseed"],
	["mseq", "application/vnd.mseq"],
	["msf", "application/vnd.epson.msf"],
	["msg", "application/vnd.ms-outlook"],
	["msh", "model/mesh"],
	["msi", "application/x-msdownload"],
	["msl", "application/vnd.mobius.msl"],
	["msm", "application/octet-stream"],
	["msp", "application/octet-stream"],
	["msty", "application/vnd.muvee.style"],
	["mtl", "model/mtl"],
	["mts", "model/vnd.mts"],
	["mus", "application/vnd.musician"],
	["musd", "application/mmt-usd+xml"],
	["musicxml", "application/vnd.recordare.musicxml+xml"],
	["mvb", "application/x-msmediaview"],
	["mvt", "application/vnd.mapbox-vector-tile"],
	["mwf", "application/vnd.mfer"],
	["mxf", "application/mxf"],
	["mxl", "application/vnd.recordare.musicxml"],
	["mxmf", "audio/mobile-xmf"],
	["mxml", "application/xv+xml"],
	["mxs", "application/vnd.triscape.mxs"],
	["mxu", "video/vnd.mpegurl"],
	["n-gage", "application/vnd.nokia.n-gage.symbian.install"],
	["n3", "text/n3"],
	["nb", "application/mathematica"],
	["nbp", "application/vnd.wolfram.player"],
	["nc", "application/x-netcdf"],
	["ncx", "application/x-dtbncx+xml"],
	["nfo", "text/x-nfo"],
	["ngdat", "application/vnd.nokia.n-gage.data"],
	["nitf", "application/vnd.nitf"],
	["nlu", "application/vnd.neurolanguage.nlu"],
	["nml", "application/vnd.enliven"],
	["nnd", "application/vnd.noblenet-directory"],
	["nns", "application/vnd.noblenet-sealer"],
	["nnw", "application/vnd.noblenet-web"],
	["npx", "image/vnd.net-fpx"],
	["nq", "application/n-quads"],
	["nsc", "application/x-conference"],
	["nsf", "application/vnd.lotus-notes"],
	["nt", "application/n-triples"],
	["ntf", "application/vnd.nitf"],
	["numbers", "application/x-iwork-numbers-sffnumbers"],
	["nzb", "application/x-nzb"],
	["oa2", "application/vnd.fujitsu.oasys2"],
	["oa3", "application/vnd.fujitsu.oasys3"],
	["oas", "application/vnd.fujitsu.oasys"],
	["obd", "application/x-msbinder"],
	["obgx", "application/vnd.openblox.game+xml"],
	["obj", "model/obj"],
	["oda", "application/oda"],
	["odb", "application/vnd.oasis.opendocument.database"],
	["odc", "application/vnd.oasis.opendocument.chart"],
	["odf", "application/vnd.oasis.opendocument.formula"],
	["odft", "application/vnd.oasis.opendocument.formula-template"],
	["odg", "application/vnd.oasis.opendocument.graphics"],
	["odi", "application/vnd.oasis.opendocument.image"],
	["odm", "application/vnd.oasis.opendocument.text-master"],
	["odp", "application/vnd.oasis.opendocument.presentation"],
	["ods", "application/vnd.oasis.opendocument.spreadsheet"],
	["odt", "application/vnd.oasis.opendocument.text"],
	["oga", "audio/ogg"],
	["ogex", "model/vnd.opengex"],
	["ogg", "audio/ogg"],
	["ogv", "video/ogg"],
	["ogx", "application/ogg"],
	["omdoc", "application/omdoc+xml"],
	["onepkg", "application/onenote"],
	["onetmp", "application/onenote"],
	["onetoc", "application/onenote"],
	["onetoc2", "application/onenote"],
	["opf", "application/oebps-package+xml"],
	["opml", "text/x-opml"],
	["oprc", "application/vnd.palm"],
	["opus", "audio/ogg"],
	["org", "text/x-org"],
	["osf", "application/vnd.yamaha.openscoreformat"],
	["osfpvg", "application/vnd.yamaha.openscoreformat.osfpvg+xml"],
	["osm", "application/vnd.openstreetmap.data+xml"],
	["otc", "application/vnd.oasis.opendocument.chart-template"],
	["otf", "font/otf"],
	["otg", "application/vnd.oasis.opendocument.graphics-template"],
	["oth", "application/vnd.oasis.opendocument.text-web"],
	["oti", "application/vnd.oasis.opendocument.image-template"],
	["otp", "application/vnd.oasis.opendocument.presentation-template"],
	["ots", "application/vnd.oasis.opendocument.spreadsheet-template"],
	["ott", "application/vnd.oasis.opendocument.text-template"],
	["ova", "application/x-virtualbox-ova"],
	["ovf", "application/x-virtualbox-ovf"],
	["owl", "application/rdf+xml"],
	["oxps", "application/oxps"],
	["oxt", "application/vnd.openofficeorg.extension"],
	["p", "text/x-pascal"],
	["p7a", "application/x-pkcs7-signature"],
	["p7b", "application/x-pkcs7-certificates"],
	["p7c", "application/pkcs7-mime"],
	["p7m", "application/pkcs7-mime"],
	["p7r", "application/x-pkcs7-certreqresp"],
	["p7s", "application/pkcs7-signature"],
	["p8", "application/pkcs8"],
	["p10", "application/x-pkcs10"],
	["p12", "application/x-pkcs12"],
	["pac", "application/x-ns-proxy-autoconfig"],
	["pages", "application/x-iwork-pages-sffpages"],
	["pas", "text/x-pascal"],
	["paw", "application/vnd.pawaafile"],
	["pbd", "application/vnd.powerbuilder6"],
	["pbm", "image/x-portable-bitmap"],
	["pcap", "application/vnd.tcpdump.pcap"],
	["pcf", "application/x-font-pcf"],
	["pcl", "application/vnd.hp-pcl"],
	["pclxl", "application/vnd.hp-pclxl"],
	["pct", "image/x-pict"],
	["pcurl", "application/vnd.curl.pcurl"],
	["pcx", "image/x-pcx"],
	["pdb", "application/x-pilot"],
	["pde", "text/x-processing"],
	["pdf", "application/pdf"],
	["pem", "application/x-x509-user-cert"],
	["pfa", "application/x-font-type1"],
	["pfb", "application/x-font-type1"],
	["pfm", "application/x-font-type1"],
	["pfr", "application/font-tdpfr"],
	["pfx", "application/x-pkcs12"],
	["pgm", "image/x-portable-graymap"],
	["pgn", "application/x-chess-pgn"],
	["pgp", "application/pgp"],
	["php", "application/x-httpd-php"],
	["php3", "application/x-httpd-php"],
	["php4", "application/x-httpd-php"],
	["phps", "application/x-httpd-php-source"],
	["phtml", "application/x-httpd-php"],
	["pic", "image/x-pict"],
	["pkg", "application/octet-stream"],
	["pki", "application/pkixcmp"],
	["pkipath", "application/pkix-pkipath"],
	["pkpass", "application/vnd.apple.pkpass"],
	["pl", "application/x-perl"],
	["plb", "application/vnd.3gpp.pic-bw-large"],
	["plc", "application/vnd.mobius.plc"],
	["plf", "application/vnd.pocketlearn"],
	["pls", "application/pls+xml"],
	["pm", "application/x-perl"],
	["pml", "application/vnd.ctc-posml"],
	["png", "image/png"],
	["pnm", "image/x-portable-anymap"],
	["portpkg", "application/vnd.macports.portpkg"],
	["pot", "application/vnd.ms-powerpoint"],
	["potm", "application/vnd.ms-powerpoint.presentation.macroEnabled.12"],
	["potx", "application/vnd.openxmlformats-officedocument.presentationml.template"],
	["ppa", "application/vnd.ms-powerpoint"],
	["ppam", "application/vnd.ms-powerpoint.addin.macroEnabled.12"],
	["ppd", "application/vnd.cups-ppd"],
	["ppm", "image/x-portable-pixmap"],
	["pps", "application/vnd.ms-powerpoint"],
	["ppsm", "application/vnd.ms-powerpoint.slideshow.macroEnabled.12"],
	["ppsx", "application/vnd.openxmlformats-officedocument.presentationml.slideshow"],
	["ppt", "application/powerpoint"],
	["pptm", "application/vnd.ms-powerpoint.presentation.macroEnabled.12"],
	["pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation"],
	["pqa", "application/vnd.palm"],
	["prc", "application/x-pilot"],
	["pre", "application/vnd.lotus-freelance"],
	["prf", "application/pics-rules"],
	["provx", "application/provenance+xml"],
	["ps", "application/postscript"],
	["psb", "application/vnd.3gpp.pic-bw-small"],
	["psd", "application/x-photoshop"],
	["psf", "application/x-font-linux-psf"],
	["pskcxml", "application/pskc+xml"],
	["pti", "image/prs.pti"],
	["ptid", "application/vnd.pvi.ptid1"],
	["pub", "application/x-mspublisher"],
	["pvb", "application/vnd.3gpp.pic-bw-var"],
	["pwn", "application/vnd.3m.post-it-notes"],
	["pya", "audio/vnd.ms-playready.media.pya"],
	["pyv", "video/vnd.ms-playready.media.pyv"],
	["qam", "application/vnd.epson.quickanime"],
	["qbo", "application/vnd.intu.qbo"],
	["qfx", "application/vnd.intu.qfx"],
	["qps", "application/vnd.publishare-delta-tree"],
	["qt", "video/quicktime"],
	["qwd", "application/vnd.quark.quarkxpress"],
	["qwt", "application/vnd.quark.quarkxpress"],
	["qxb", "application/vnd.quark.quarkxpress"],
	["qxd", "application/vnd.quark.quarkxpress"],
	["qxl", "application/vnd.quark.quarkxpress"],
	["qxt", "application/vnd.quark.quarkxpress"],
	["ra", "audio/x-realaudio"],
	["ram", "audio/x-pn-realaudio"],
	["raml", "application/raml+yaml"],
	["rapd", "application/route-apd+xml"],
	["rar", "application/x-rar"],
	["ras", "image/x-cmu-raster"],
	["rcprofile", "application/vnd.ipunplugged.rcprofile"],
	["rdf", "application/rdf+xml"],
	["rdz", "application/vnd.data-vision.rdz"],
	["relo", "application/p2p-overlay+xml"],
	["rep", "application/vnd.businessobjects"],
	["res", "application/x-dtbresource+xml"],
	["rgb", "image/x-rgb"],
	["rif", "application/reginfo+xml"],
	["rip", "audio/vnd.rip"],
	["ris", "application/x-research-info-systems"],
	["rl", "application/resource-lists+xml"],
	["rlc", "image/vnd.fujixerox.edmics-rlc"],
	["rld", "application/resource-lists-diff+xml"],
	["rm", "audio/x-pn-realaudio"],
	["rmi", "audio/midi"],
	["rmp", "audio/x-pn-realaudio-plugin"],
	["rms", "application/vnd.jcp.javame.midlet-rms"],
	["rmvb", "application/vnd.rn-realmedia-vbr"],
	["rnc", "application/relax-ng-compact-syntax"],
	["rng", "application/xml"],
	["roa", "application/rpki-roa"],
	["roff", "text/troff"],
	["rp9", "application/vnd.cloanto.rp9"],
	["rpm", "audio/x-pn-realaudio-plugin"],
	["rpss", "application/vnd.nokia.radio-presets"],
	["rpst", "application/vnd.nokia.radio-preset"],
	["rq", "application/sparql-query"],
	["rs", "application/rls-services+xml"],
	["rsa", "application/x-pkcs7"],
	["rsat", "application/atsc-rsat+xml"],
	["rsd", "application/rsd+xml"],
	["rsheet", "application/urc-ressheet+xml"],
	["rss", "application/rss+xml"],
	["rtf", "text/rtf"],
	["rtx", "text/richtext"],
	["run", "application/x-makeself"],
	["rusd", "application/route-usd+xml"],
	["rv", "video/vnd.rn-realvideo"],
	["s", "text/x-asm"],
	["s3m", "audio/s3m"],
	["saf", "application/vnd.yamaha.smaf-audio"],
	["sass", "text/x-sass"],
	["sbml", "application/sbml+xml"],
	["sc", "application/vnd.ibm.secure-container"],
	["scd", "application/x-msschedule"],
	["scm", "application/vnd.lotus-screencam"],
	["scq", "application/scvp-cv-request"],
	["scs", "application/scvp-cv-response"],
	["scss", "text/x-scss"],
	["scurl", "text/vnd.curl.scurl"],
	["sda", "application/vnd.stardivision.draw"],
	["sdc", "application/vnd.stardivision.calc"],
	["sdd", "application/vnd.stardivision.impress"],
	["sdkd", "application/vnd.solent.sdkm+xml"],
	["sdkm", "application/vnd.solent.sdkm+xml"],
	["sdp", "application/sdp"],
	["sdw", "application/vnd.stardivision.writer"],
	["sea", "application/octet-stream"],
	["see", "application/vnd.seemail"],
	["seed", "application/vnd.fdsn.seed"],
	["sema", "application/vnd.sema"],
	["semd", "application/vnd.semd"],
	["semf", "application/vnd.semf"],
	["senmlx", "application/senml+xml"],
	["sensmlx", "application/sensml+xml"],
	["ser", "application/java-serialized-object"],
	["setpay", "application/set-payment-initiation"],
	["setreg", "application/set-registration-initiation"],
	["sfd-hdstx", "application/vnd.hydrostatix.sof-data"],
	["sfs", "application/vnd.spotfire.sfs"],
	["sfv", "text/x-sfv"],
	["sgi", "image/sgi"],
	["sgl", "application/vnd.stardivision.writer-global"],
	["sgm", "text/sgml"],
	["sgml", "text/sgml"],
	["sh", "application/x-sh"],
	["shar", "application/x-shar"],
	["shex", "text/shex"],
	["shf", "application/shf+xml"],
	["shtml", "text/html"],
	["sid", "image/x-mrsid-image"],
	["sieve", "application/sieve"],
	["sig", "application/pgp-signature"],
	["sil", "audio/silk"],
	["silo", "model/mesh"],
	["sis", "application/vnd.symbian.install"],
	["sisx", "application/vnd.symbian.install"],
	["sit", "application/x-stuffit"],
	["sitx", "application/x-stuffitx"],
	["siv", "application/sieve"],
	["skd", "application/vnd.koan"],
	["skm", "application/vnd.koan"],
	["skp", "application/vnd.koan"],
	["skt", "application/vnd.koan"],
	["sldm", "application/vnd.ms-powerpoint.slide.macroenabled.12"],
	["sldx", "application/vnd.openxmlformats-officedocument.presentationml.slide"],
	["slim", "text/slim"],
	["slm", "text/slim"],
	["sls", "application/route-s-tsid+xml"],
	["slt", "application/vnd.epson.salt"],
	["sm", "application/vnd.stepmania.stepchart"],
	["smf", "application/vnd.stardivision.math"],
	["smi", "application/smil"],
	["smil", "application/smil"],
	["smv", "video/x-smv"],
	["smzip", "application/vnd.stepmania.package"],
	["snd", "audio/basic"],
	["snf", "application/x-font-snf"],
	["so", "application/octet-stream"],
	["spc", "application/x-pkcs7-certificates"],
	["spdx", "text/spdx"],
	["spf", "application/vnd.yamaha.smaf-phrase"],
	["spl", "application/x-futuresplash"],
	["spot", "text/vnd.in3d.spot"],
	["spp", "application/scvp-vp-response"],
	["spq", "application/scvp-vp-request"],
	["spx", "audio/ogg"],
	["sql", "application/x-sql"],
	["src", "application/x-wais-source"],
	["srt", "application/x-subrip"],
	["sru", "application/sru+xml"],
	["srx", "application/sparql-results+xml"],
	["ssdl", "application/ssdl+xml"],
	["sse", "application/vnd.kodak-descriptor"],
	["ssf", "application/vnd.epson.ssf"],
	["ssml", "application/ssml+xml"],
	["sst", "application/octet-stream"],
	["st", "application/vnd.sailingtracker.track"],
	["stc", "application/vnd.sun.xml.calc.template"],
	["std", "application/vnd.sun.xml.draw.template"],
	["stf", "application/vnd.wt.stf"],
	["sti", "application/vnd.sun.xml.impress.template"],
	["stk", "application/hyperstudio"],
	["stl", "model/stl"],
	["stpx", "model/step+xml"],
	["stpxz", "model/step-xml+zip"],
	["stpz", "model/step+zip"],
	["str", "application/vnd.pg.format"],
	["stw", "application/vnd.sun.xml.writer.template"],
	["styl", "text/stylus"],
	["stylus", "text/stylus"],
	["sub", "text/vnd.dvb.subtitle"],
	["sus", "application/vnd.sus-calendar"],
	["susp", "application/vnd.sus-calendar"],
	["sv4cpio", "application/x-sv4cpio"],
	["sv4crc", "application/x-sv4crc"],
	["svc", "application/vnd.dvb.service"],
	["svd", "application/vnd.svd"],
	["svg", "image/svg+xml"],
	["svgz", "image/svg+xml"],
	["swa", "application/x-director"],
	["swf", "application/x-shockwave-flash"],
	["swi", "application/vnd.aristanetworks.swi"],
	["swidtag", "application/swid+xml"],
	["sxc", "application/vnd.sun.xml.calc"],
	["sxd", "application/vnd.sun.xml.draw"],
	["sxg", "application/vnd.sun.xml.writer.global"],
	["sxi", "application/vnd.sun.xml.impress"],
	["sxm", "application/vnd.sun.xml.math"],
	["sxw", "application/vnd.sun.xml.writer"],
	["t", "text/troff"],
	["t3", "application/x-t3vm-image"],
	["t38", "image/t38"],
	["taglet", "application/vnd.mynfc"],
	["tao", "application/vnd.tao.intent-module-archive"],
	["tap", "image/vnd.tencent.tap"],
	["tar", "application/x-tar"],
	["tcap", "application/vnd.3gpp2.tcap"],
	["tcl", "application/x-tcl"],
	["td", "application/urc-targetdesc+xml"],
	["teacher", "application/vnd.smart.teacher"],
	["tei", "application/tei+xml"],
	["teicorpus", "application/tei+xml"],
	["tex", "application/x-tex"],
	["texi", "application/x-texinfo"],
	["texinfo", "application/x-texinfo"],
	["text", "text/plain"],
	["tfi", "application/thraud+xml"],
	["tfm", "application/x-tex-tfm"],
	["tfx", "image/tiff-fx"],
	["tga", "image/x-tga"],
	["tgz", "application/x-tar"],
	["thmx", "application/vnd.ms-officetheme"],
	["tif", "image/tiff"],
	["tiff", "image/tiff"],
	["tk", "application/x-tcl"],
	["tmo", "application/vnd.tmobile-livetv"],
	["toml", "application/toml"],
	["torrent", "application/x-bittorrent"],
	["tpl", "application/vnd.groove-tool-template"],
	["tpt", "application/vnd.trid.tpt"],
	["tr", "text/troff"],
	["tra", "application/vnd.trueapp"],
	["trig", "application/trig"],
	["trm", "application/x-msterminal"],
	["ts", "video/mp2t"],
	["tsd", "application/timestamped-data"],
	["tsv", "text/tab-separated-values"],
	["ttc", "font/collection"],
	["ttf", "font/ttf"],
	["ttl", "text/turtle"],
	["ttml", "application/ttml+xml"],
	["twd", "application/vnd.simtech-mindmapper"],
	["twds", "application/vnd.simtech-mindmapper"],
	["txd", "application/vnd.genomatix.tuxedo"],
	["txf", "application/vnd.mobius.txf"],
	["txt", "text/plain"],
	["u8dsn", "message/global-delivery-status"],
	["u8hdr", "message/global-headers"],
	["u8mdn", "message/global-disposition-notification"],
	["u8msg", "message/global"],
	["u32", "application/x-authorware-bin"],
	["ubj", "application/ubjson"],
	["udeb", "application/x-debian-package"],
	["ufd", "application/vnd.ufdl"],
	["ufdl", "application/vnd.ufdl"],
	["ulx", "application/x-glulx"],
	["umj", "application/vnd.umajin"],
	["unityweb", "application/vnd.unity"],
	["uoml", "application/vnd.uoml+xml"],
	["uri", "text/uri-list"],
	["uris", "text/uri-list"],
	["urls", "text/uri-list"],
	["usdz", "model/vnd.usdz+zip"],
	["ustar", "application/x-ustar"],
	["utz", "application/vnd.uiq.theme"],
	["uu", "text/x-uuencode"],
	["uva", "audio/vnd.dece.audio"],
	["uvd", "application/vnd.dece.data"],
	["uvf", "application/vnd.dece.data"],
	["uvg", "image/vnd.dece.graphic"],
	["uvh", "video/vnd.dece.hd"],
	["uvi", "image/vnd.dece.graphic"],
	["uvm", "video/vnd.dece.mobile"],
	["uvp", "video/vnd.dece.pd"],
	["uvs", "video/vnd.dece.sd"],
	["uvt", "application/vnd.dece.ttml+xml"],
	["uvu", "video/vnd.uvvu.mp4"],
	["uvv", "video/vnd.dece.video"],
	["uvva", "audio/vnd.dece.audio"],
	["uvvd", "application/vnd.dece.data"],
	["uvvf", "application/vnd.dece.data"],
	["uvvg", "image/vnd.dece.graphic"],
	["uvvh", "video/vnd.dece.hd"],
	["uvvi", "image/vnd.dece.graphic"],
	["uvvm", "video/vnd.dece.mobile"],
	["uvvp", "video/vnd.dece.pd"],
	["uvvs", "video/vnd.dece.sd"],
	["uvvt", "application/vnd.dece.ttml+xml"],
	["uvvu", "video/vnd.uvvu.mp4"],
	["uvvv", "video/vnd.dece.video"],
	["uvvx", "application/vnd.dece.unspecified"],
	["uvvz", "application/vnd.dece.zip"],
	["uvx", "application/vnd.dece.unspecified"],
	["uvz", "application/vnd.dece.zip"],
	["vbox", "application/x-virtualbox-vbox"],
	["vbox-extpack", "application/x-virtualbox-vbox-extpack"],
	["vcard", "text/vcard"],
	["vcd", "application/x-cdlink"],
	["vcf", "text/x-vcard"],
	["vcg", "application/vnd.groove-vcard"],
	["vcs", "text/x-vcalendar"],
	["vcx", "application/vnd.vcx"],
	["vdi", "application/x-virtualbox-vdi"],
	["vds", "model/vnd.sap.vds"],
	["vhd", "application/x-virtualbox-vhd"],
	["vis", "application/vnd.visionary"],
	["viv", "video/vnd.vivo"],
	["vlc", "application/videolan"],
	["vmdk", "application/x-virtualbox-vmdk"],
	["vob", "video/x-ms-vob"],
	["vor", "application/vnd.stardivision.writer"],
	["vox", "application/x-authorware-bin"],
	["vrml", "model/vrml"],
	["vsd", "application/vnd.visio"],
	["vsf", "application/vnd.vsf"],
	["vss", "application/vnd.visio"],
	["vst", "application/vnd.visio"],
	["vsw", "application/vnd.visio"],
	["vtf", "image/vnd.valve.source.texture"],
	["vtt", "text/vtt"],
	["vtu", "model/vnd.vtu"],
	["vxml", "application/voicexml+xml"],
	["w3d", "application/x-director"],
	["wad", "application/x-doom"],
	["wadl", "application/vnd.sun.wadl+xml"],
	["war", "application/java-archive"],
	["wasm", "application/wasm"],
	["wav", "audio/x-wav"],
	["wax", "audio/x-ms-wax"],
	["wbmp", "image/vnd.wap.wbmp"],
	["wbs", "application/vnd.criticaltools.wbs+xml"],
	["wbxml", "application/wbxml"],
	["wcm", "application/vnd.ms-works"],
	["wdb", "application/vnd.ms-works"],
	["wdp", "image/vnd.ms-photo"],
	["weba", "audio/webm"],
	["webapp", "application/x-web-app-manifest+json"],
	["webm", "video/webm"],
	["webmanifest", "application/manifest+json"],
	["webp", "image/webp"],
	["wg", "application/vnd.pmi.widget"],
	["wgt", "application/widget"],
	["wks", "application/vnd.ms-works"],
	["wm", "video/x-ms-wm"],
	["wma", "audio/x-ms-wma"],
	["wmd", "application/x-ms-wmd"],
	["wmf", "image/wmf"],
	["wml", "text/vnd.wap.wml"],
	["wmlc", "application/wmlc"],
	["wmls", "text/vnd.wap.wmlscript"],
	["wmlsc", "application/vnd.wap.wmlscriptc"],
	["wmv", "video/x-ms-wmv"],
	["wmx", "video/x-ms-wmx"],
	["wmz", "application/x-msmetafile"],
	["woff", "font/woff"],
	["woff2", "font/woff2"],
	["word", "application/msword"],
	["wpd", "application/vnd.wordperfect"],
	["wpl", "application/vnd.ms-wpl"],
	["wps", "application/vnd.ms-works"],
	["wqd", "application/vnd.wqd"],
	["wri", "application/x-mswrite"],
	["wrl", "model/vrml"],
	["wsc", "message/vnd.wfa.wsc"],
	["wsdl", "application/wsdl+xml"],
	["wspolicy", "application/wspolicy+xml"],
	["wtb", "application/vnd.webturbo"],
	["wvx", "video/x-ms-wvx"],
	["x3d", "model/x3d+xml"],
	["x3db", "model/x3d+fastinfoset"],
	["x3dbz", "model/x3d+binary"],
	["x3dv", "model/x3d-vrml"],
	["x3dvz", "model/x3d+vrml"],
	["x3dz", "model/x3d+xml"],
	["x32", "application/x-authorware-bin"],
	["x_b", "model/vnd.parasolid.transmit.binary"],
	["x_t", "model/vnd.parasolid.transmit.text"],
	["xaml", "application/xaml+xml"],
	["xap", "application/x-silverlight-app"],
	["xar", "application/vnd.xara"],
	["xav", "application/xcap-att+xml"],
	["xbap", "application/x-ms-xbap"],
	["xbd", "application/vnd.fujixerox.docuworks.binder"],
	["xbm", "image/x-xbitmap"],
	["xca", "application/xcap-caps+xml"],
	["xcs", "application/calendar+xml"],
	["xdf", "application/xcap-diff+xml"],
	["xdm", "application/vnd.syncml.dm+xml"],
	["xdp", "application/vnd.adobe.xdp+xml"],
	["xdssc", "application/dssc+xml"],
	["xdw", "application/vnd.fujixerox.docuworks"],
	["xel", "application/xcap-el+xml"],
	["xenc", "application/xenc+xml"],
	["xer", "application/patch-ops-error+xml"],
	["xfdf", "application/vnd.adobe.xfdf"],
	["xfdl", "application/vnd.xfdl"],
	["xht", "application/xhtml+xml"],
	["xhtml", "application/xhtml+xml"],
	["xhvml", "application/xv+xml"],
	["xif", "image/vnd.xiff"],
	["xl", "application/excel"],
	["xla", "application/vnd.ms-excel"],
	["xlam", "application/vnd.ms-excel.addin.macroEnabled.12"],
	["xlc", "application/vnd.ms-excel"],
	["xlf", "application/xliff+xml"],
	["xlm", "application/vnd.ms-excel"],
	["xls", "application/vnd.ms-excel"],
	["xlsb", "application/vnd.ms-excel.sheet.binary.macroEnabled.12"],
	["xlsm", "application/vnd.ms-excel.sheet.macroEnabled.12"],
	["xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
	["xlt", "application/vnd.ms-excel"],
	["xltm", "application/vnd.ms-excel.template.macroEnabled.12"],
	["xltx", "application/vnd.openxmlformats-officedocument.spreadsheetml.template"],
	["xlw", "application/vnd.ms-excel"],
	["xm", "audio/xm"],
	["xml", "application/xml"],
	["xns", "application/xcap-ns+xml"],
	["xo", "application/vnd.olpc-sugar"],
	["xop", "application/xop+xml"],
	["xpi", "application/x-xpinstall"],
	["xpl", "application/xproc+xml"],
	["xpm", "image/x-xpixmap"],
	["xpr", "application/vnd.is-xpr"],
	["xps", "application/vnd.ms-xpsdocument"],
	["xpw", "application/vnd.intercon.formnet"],
	["xpx", "application/vnd.intercon.formnet"],
	["xsd", "application/xml"],
	["xsl", "application/xml"],
	["xslt", "application/xslt+xml"],
	["xsm", "application/vnd.syncml+xml"],
	["xspf", "application/xspf+xml"],
	["xul", "application/vnd.mozilla.xul+xml"],
	["xvm", "application/xv+xml"],
	["xvml", "application/xv+xml"],
	["xwd", "image/x-xwindowdump"],
	["xyz", "chemical/x-xyz"],
	["xz", "application/x-xz"],
	["yaml", "text/yaml"],
	["yang", "application/yang"],
	["yin", "application/yin+xml"],
	["yml", "text/yaml"],
	["ymp", "text/x-suse-ymp"],
	["z", "application/x-compress"],
	["z1", "application/x-zmachine"],
	["z2", "application/x-zmachine"],
	["z3", "application/x-zmachine"],
	["z4", "application/x-zmachine"],
	["z5", "application/x-zmachine"],
	["z6", "application/x-zmachine"],
	["z7", "application/x-zmachine"],
	["z8", "application/x-zmachine"],
	["zaz", "application/vnd.zzazz.deck+xml"],
	["zip", "application/zip"],
	["zir", "application/vnd.zul"],
	["zirz", "application/vnd.zul"],
	["zmm", "application/vnd.handheld-entertainment+xml"],
	["zsh", "text/x-scriptzsh"]
]);
function aL(e, t, n) {
	let r = oL(e), { webkitRelativePath: i } = e, a = typeof t == "string" ? t : typeof i == "string" && i.length > 0 ? i : `./${e.name}`;
	return typeof r.path != "string" && sL(r, "path", a), n !== void 0 && Object.defineProperty(r, "handle", {
		value: n,
		writable: !1,
		configurable: !1,
		enumerable: !0
	}), sL(r, "relativePath", a), r;
}
function oL(e) {
	let { name: t } = e;
	if (t && t.lastIndexOf(".") !== -1 && !e.type) {
		let n = t.split(".").pop().toLowerCase(), r = iL.get(n);
		r && Object.defineProperty(e, "type", {
			value: r,
			writable: !1,
			configurable: !1,
			enumerable: !0
		});
	}
	return e;
}
function sL(e, t, n) {
	Object.defineProperty(e, t, {
		value: n,
		writable: !1,
		configurable: !1,
		enumerable: !0
	});
}
//#endregion
//#region node_modules/file-selector/dist/es2015/file-selector.js
var cL = [".DS_Store", "Thumbs.db"];
function lL(e) {
	return rL(this, void 0, void 0, function* () {
		return fL(e) && uL(e.dataTransfer) ? hL(e.dataTransfer, e.type) : dL(e) ? pL(e) : Array.isArray(e) && e.every((e) => "getFile" in e && typeof e.getFile == "function") ? mL(e) : [];
	});
}
function uL(e) {
	return fL(e);
}
function dL(e) {
	return fL(e) && fL(e.target);
}
function fL(e) {
	return typeof e == "object" && !!e;
}
function pL(e) {
	return _L(e.target.files).map((e) => aL(e));
}
function mL(e) {
	return rL(this, void 0, void 0, function* () {
		return (yield Promise.all(e.map((e) => e.getFile()))).map((e) => aL(e));
	});
}
function hL(e, t) {
	return rL(this, void 0, void 0, function* () {
		if (e.items) {
			let n = _L(e.items).filter((e) => e.kind === "file");
			return t === "drop" ? gL(yL(yield Promise.all(n.map(vL)))) : n;
		}
		return gL(_L(e.files).map((e) => aL(e)));
	});
}
function gL(e) {
	return e.filter((e) => cL.indexOf(e.name) === -1);
}
function _L(e) {
	if (e === null) return [];
	let t = [];
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		t.push(r);
	}
	return t;
}
function vL(e) {
	if (typeof e.webkitGetAsEntry != "function") return bL(e);
	let t = e.webkitGetAsEntry();
	return t && t.isDirectory ? SL(t) : bL(e, t);
}
function yL(e) {
	return e.reduce((e, t) => [...e, ...Array.isArray(t) ? yL(t) : [t]], []);
}
function bL(e, t) {
	return rL(this, void 0, void 0, function* () {
		if (globalThis.isSecureContext && typeof e.getAsFileSystemHandle == "function") {
			let t = yield e.getAsFileSystemHandle();
			if (t === null) throw Error(`${e} is not a File`);
			if (t !== void 0) {
				let e = yield t.getFile();
				return e.handle = t, aL(e);
			}
		}
		let n = e.getAsFile();
		if (!n) throw Error(`${e} is not a File`);
		return aL(n, t?.fullPath ?? void 0);
	});
}
function xL(e) {
	return rL(this, void 0, void 0, function* () {
		return e.isDirectory ? SL(e) : CL(e);
	});
}
function SL(e) {
	let t = e.createReader();
	return new Promise((e, n) => {
		let r = [];
		function i() {
			t.readEntries((t) => rL(this, void 0, void 0, function* () {
				if (t.length) {
					let e = Promise.all(t.map(xL));
					r.push(e), i();
				} else try {
					e(yield Promise.all(r));
				} catch (e) {
					n(e);
				}
			}), (e) => {
				n(e);
			});
		}
		i();
	});
}
function CL(e) {
	return rL(this, void 0, void 0, function* () {
		return new Promise((t, n) => {
			e.file((n) => {
				t(aL(n, e.fullPath));
			}, (e) => {
				n(e);
			});
		});
	});
}
//#endregion
//#region node_modules/react-dropzone/dist/es/utils/index.js
var wL = /* @__PURE__ */ ft((/* @__PURE__ */ ut(((e) => {
	e.__esModule = !0, e.default = function(e, t) {
		if (e && t) {
			var n = Array.isArray(t) ? t : t.split(",");
			if (n.length === 0) return !0;
			var r = e.name || "", i = (e.type || "").toLowerCase(), a = i.replace(/\/.*$/, "");
			return n.some(function(e) {
				var t = e.trim().toLowerCase();
				return t.charAt(0) === "." ? r.toLowerCase().endsWith(t) : t.endsWith("/*") ? a === t.replace(/\/.*$/, "") : i === t;
			});
		}
		return !0;
	};
})))());
function TL(e) {
	return OL(e) || DL(e) || PL(e) || EL();
}
function EL() {
	throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function DL(e) {
	if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function OL(e) {
	if (Array.isArray(e)) return FL(e);
}
function kL(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function AL(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? kL(Object(n), !0).forEach(function(t) {
			jL(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : kL(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function jL(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function ML(e, t) {
	return LL(e) || IL(e, t) || PL(e, t) || NL();
}
function NL() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function PL(e, t) {
	if (e) {
		if (typeof e == "string") return FL(e, t);
		var n = Object.prototype.toString.call(e).slice(8, -1);
		if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
		if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return FL(e, t);
	}
}
function FL(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function IL(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r = [], i = !0, a = !1, o, s;
		try {
			for (n = n.call(e); !(i = (o = n.next()).done) && (r.push(o.value), !(t && r.length === t)); i = !0);
		} catch (e) {
			a = !0, s = e;
		} finally {
			try {
				!i && n.return != null && n.return();
			} finally {
				if (a) throw s;
			}
		}
		return r;
	}
}
function LL(e) {
	if (Array.isArray(e)) return e;
}
var RL = typeof wL.default == "function" ? wL.default : wL.default.default, zL = "file-invalid-type", BL = "file-too-large", VL = "file-too-small", HL = "too-many-files", UL = function() {
	var e = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "").split(",");
	return {
		code: zL,
		message: `File type must be ${e.length > 1 ? `one of ${e.join(", ")}` : e[0]}`
	};
}, WL = function(e) {
	return {
		code: BL,
		message: `File is larger than ${e} ${e === 1 ? "byte" : "bytes"}`
	};
}, GL = function(e) {
	return {
		code: VL,
		message: `File is smaller than ${e} ${e === 1 ? "byte" : "bytes"}`
	};
}, KL = {
	code: HL,
	message: "Too many files"
};
function qL(e) {
	return e.type === "" && typeof e.getAsFile == "function";
}
function JL(e, t) {
	var n = e.type === "application/x-moz-file" || RL(e, t) || qL(e);
	return [n, n ? null : UL(t)];
}
function YL(e, t, n) {
	if (XL(e.size)) {
		if (XL(t) && XL(n)) {
			if (e.size > n) return [!1, WL(n)];
			if (e.size < t) return [!1, GL(t)];
		} else if (XL(t) && e.size < t) return [!1, GL(t)];
		else if (XL(n) && e.size > n) return [!1, WL(n)];
	}
	return [!0, null];
}
function XL(e) {
	return e != null;
}
function ZL(e) {
	var t = e.files, n = e.accept, r = e.minSize, i = e.maxSize, a = e.multiple, o = e.maxFiles, s = e.validator;
	return !a && t.length > 1 || a && o >= 1 && t.length > o ? !1 : t.every(function(e) {
		var t = ML(JL(e, n), 1)[0], a = ML(YL(e, r, i), 1)[0], o = s ? s(e) : null;
		return t && a && !o;
	});
}
function QL(e) {
	return typeof e.isPropagationStopped == "function" ? e.isPropagationStopped() : e.cancelBubble === void 0 ? !1 : e.cancelBubble;
}
function $L(e) {
	return e.dataTransfer ? Array.prototype.some.call(e.dataTransfer.types, function(e) {
		return e === "Files" || e === "application/x-moz-file";
	}) : !!e.target && !!e.target.files;
}
function eR(e) {
	e.preventDefault();
}
function tR(e) {
	return e.indexOf("MSIE") !== -1 || e.indexOf("Trident/") !== -1;
}
function nR(e) {
	return e.indexOf("Edge/") !== -1;
}
function rR() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
	return tR(e) || nR(e);
}
function iR() {
	var e = [...arguments];
	return function(t) {
		var n = [...arguments].slice(1);
		return e.some(function(e) {
			return !QL(t) && e && e.apply(void 0, [t].concat(n)), QL(t);
		});
	};
}
function aR() {
	return "showOpenFilePicker" in window;
}
function oR(e) {
	return XL(e) ? [{
		description: "Files",
		accept: Object.entries(e).filter(function(e) {
			var t = ML(e, 2), n = t[0], r = t[1], i = !0;
			return uR(n) || (console.warn(`Skipped "${n}" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.`), i = !1), (!Array.isArray(r) || !r.every(dR)) && (console.warn(`Skipped "${n}" because an invalid file extension was provided.`), i = !1), i;
		}).reduce(function(e, t) {
			var n = ML(t, 2), r = n[0], i = n[1];
			return AL(AL({}, e), {}, jL({}, r, i));
		}, {})
	}] : e;
}
function sR(e) {
	if (XL(e)) return Object.entries(e).reduce(function(e, t) {
		var n = ML(t, 2), r = n[0], i = n[1];
		return [].concat(TL(e), [r], TL(i));
	}, []).filter(function(e) {
		return uR(e) || dR(e);
	}).join(",");
}
function cR(e) {
	return e instanceof DOMException && (e.name === "AbortError" || e.code === e.ABORT_ERR);
}
function lR(e) {
	return e instanceof DOMException && (e.name === "SecurityError" || e.code === e.SECURITY_ERR);
}
function uR(e) {
	return e === "audio/*" || e === "video/*" || e === "image/*" || e === "text/*" || e === "application/*" || /\w+\/[-+.\w]+/g.test(e);
}
function dR(e) {
	return /^.*\.[\w]+$/.test(e);
}
//#endregion
//#region node_modules/react-dropzone/dist/es/index.js
var fR = ["children"], pR = ["open"], mR = [
	"refKey",
	"role",
	"onKeyDown",
	"onFocus",
	"onBlur",
	"onClick",
	"onDragEnter",
	"onDragOver",
	"onDragLeave",
	"onDrop"
], hR = [
	"refKey",
	"onChange",
	"onClick"
];
function gR(e) {
	return yR(e) || vR(e) || SR(e) || _R();
}
function _R() {
	throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function vR(e) {
	if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function yR(e) {
	if (Array.isArray(e)) return CR(e);
}
function bR(e, t) {
	return TR(e) || wR(e, t) || SR(e, t) || xR();
}
function xR() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function SR(e, t) {
	if (e) {
		if (typeof e == "string") return CR(e, t);
		var n = Object.prototype.toString.call(e).slice(8, -1);
		if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
		if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return CR(e, t);
	}
}
function CR(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function wR(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r = [], i = !0, a = !1, o, s;
		try {
			for (n = n.call(e); !(i = (o = n.next()).done) && (r.push(o.value), !(t && r.length === t)); i = !0);
		} catch (e) {
			a = !0, s = e;
		} finally {
			try {
				!i && n.return != null && n.return();
			} finally {
				if (a) throw s;
			}
		}
		return r;
	}
}
function TR(e) {
	if (Array.isArray(e)) return e;
}
function ER(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function DR(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? ER(Object(n), !0).forEach(function(t) {
			OR(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ER(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function OR(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function kR(e, t) {
	if (e == null) return {};
	var n = AR(e, t), r, i;
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (i = 0; i < a.length; i++) r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
	}
	return n;
}
function AR(e, t) {
	if (e == null) return {};
	var n = {}, r = Object.keys(e), i, a;
	for (a = 0; a < r.length; a++) i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n;
}
var jR = /* @__PURE__ */ ee(function(e, t) {
	var n = e.children, r = PR(kR(e, fR)), i = r.open, a = kR(r, pR);
	return re(t, function() {
		return { open: i };
	}, [i]), /* @__PURE__ */ k.createElement(j, null, n(DR(DR({}, a), {}, { open: i })));
});
jR.displayName = "Dropzone";
var MR = {
	disabled: !1,
	getFilesFromEvent: lL,
	maxSize: Infinity,
	minSize: 0,
	multiple: !0,
	maxFiles: 0,
	preventDropOnDocument: !0,
	noClick: !1,
	noKeyboard: !1,
	noDrag: !1,
	noDragEventsBubbling: !1,
	validator: null,
	useFsAccessApi: !1,
	autoFocus: !1
};
jR.defaultProps = MR, jR.propTypes = {
	children: q.default.func,
	accept: q.default.objectOf(q.default.arrayOf(q.default.string)),
	multiple: q.default.bool,
	preventDropOnDocument: q.default.bool,
	noClick: q.default.bool,
	noKeyboard: q.default.bool,
	noDrag: q.default.bool,
	noDragEventsBubbling: q.default.bool,
	minSize: q.default.number,
	maxSize: q.default.number,
	maxFiles: q.default.number,
	disabled: q.default.bool,
	getFilesFromEvent: q.default.func,
	onFileDialogCancel: q.default.func,
	onFileDialogOpen: q.default.func,
	useFsAccessApi: q.default.bool,
	autoFocus: q.default.bool,
	onDragEnter: q.default.func,
	onDragLeave: q.default.func,
	onDragOver: q.default.func,
	onDrop: q.default.func,
	onDropAccepted: q.default.func,
	onDropRejected: q.default.func,
	onError: q.default.func,
	validator: q.default.func
};
var NR = {
	isFocused: !1,
	isFileDialogActive: !1,
	isDragActive: !1,
	isDragAccept: !1,
	isDragReject: !1,
	isDragGlobal: !1,
	acceptedFiles: [],
	fileRejections: []
};
function PR() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = DR(DR({}, MR), e), n = t.accept, r = t.disabled, i = t.getFilesFromEvent, a = t.maxSize, o = t.minSize, s = t.multiple, c = t.maxFiles, l = t.onDragEnter, u = t.onDragLeave, d = t.onDragOver, f = t.onDrop, p = t.onDropAccepted, m = t.onDropRejected, h = t.onFileDialogCancel, g = t.onFileDialogOpen, _ = t.useFsAccessApi, v = t.autoFocus, y = t.preventDropOnDocument, b = t.noClick, x = t.noKeyboard, S = t.noDrag, C = t.noDragEventsBubbling, w = t.onError, T = t.validator, E = ae(function() {
		return sR(n);
	}, [n]), D = ae(function() {
		return oR(n);
	}, [n]), O = ae(function() {
		return typeof g == "function" ? g : IR;
	}, [g]), k = ae(function() {
		return typeof h == "function" ? h : IR;
	}, [h]), A = se(null), j = se(null), M = bR(oe(FR, NR), 2), N = M[0], P = M[1], ee = N.isFocused, ne = N.isFileDialogActive, re = se(typeof window < "u" && window.isSecureContext && _ && aR()), ie = function() {
		!re.current && ne && setTimeout(function() {
			j.current && (j.current.files.length || (P({ type: "closeDialog" }), k()));
		}, 300);
	};
	F(function() {
		return window.addEventListener("focus", ie, !1), function() {
			window.removeEventListener("focus", ie, !1);
		};
	}, [
		j,
		ne,
		k,
		re
	]);
	var ce = se([]), le = se([]), ue = function(e) {
		A.current && A.current.contains(e.target) || (e.preventDefault(), ce.current = []);
	};
	F(function() {
		return y && (document.addEventListener("dragover", eR, !1), document.addEventListener("drop", ue, !1)), function() {
			y && (document.removeEventListener("dragover", eR), document.removeEventListener("drop", ue));
		};
	}, [A, y]), F(function() {
		var e = function(e) {
			le.current = [].concat(gR(le.current), [e.target]), $L(e) && P({
				isDragGlobal: !0,
				type: "setDragGlobal"
			});
		}, t = function(e) {
			le.current = le.current.filter(function(t) {
				return t !== e.target && t !== null;
			}), !(le.current.length > 0) && P({
				isDragGlobal: !1,
				type: "setDragGlobal"
			});
		}, n = function() {
			le.current = [], P({
				isDragGlobal: !1,
				type: "setDragGlobal"
			});
		}, r = function() {
			le.current = [], P({
				isDragGlobal: !1,
				type: "setDragGlobal"
			});
		};
		return document.addEventListener("dragenter", e, !1), document.addEventListener("dragleave", t, !1), document.addEventListener("dragend", n, !1), document.addEventListener("drop", r, !1), function() {
			document.removeEventListener("dragenter", e), document.removeEventListener("dragleave", t), document.removeEventListener("dragend", n), document.removeEventListener("drop", r);
		};
	}, [A]), F(function() {
		return !r && v && A.current && A.current.focus(), function() {};
	}, [
		A,
		v,
		r
	]);
	var de = te(function(e) {
		w ? w(e) : console.error(e);
	}, [w]), I = te(function(e) {
		e.preventDefault(), e.persist(), we(e), ce.current = [].concat(gR(ce.current), [e.target]), $L(e) && Promise.resolve(i(e)).then(function(t) {
			if (!(QL(e) && !C)) {
				var n = t.length, r = n > 0 && ZL({
					files: t,
					accept: E,
					minSize: o,
					maxSize: a,
					multiple: s,
					maxFiles: c,
					validator: T
				});
				P({
					isDragAccept: r,
					isDragReject: n > 0 && !r,
					isDragActive: !0,
					type: "setDraggedFiles"
				}), l && l(e);
			}
		}).catch(function(e) {
			return de(e);
		});
	}, [
		i,
		l,
		de,
		C,
		E,
		o,
		a,
		s,
		c,
		T
	]), fe = te(function(e) {
		e.preventDefault(), e.persist(), we(e);
		var t = $L(e);
		if (t && e.dataTransfer) try {
			e.dataTransfer.dropEffect = "copy";
		} catch {}
		return t && d && d(e), !1;
	}, [d, C]), pe = te(function(e) {
		e.preventDefault(), e.persist(), we(e);
		var t = ce.current.filter(function(e) {
			return A.current && A.current.contains(e);
		}), n = t.indexOf(e.target);
		n !== -1 && t.splice(n, 1), ce.current = t, !(t.length > 0) && (P({
			type: "setDraggedFiles",
			isDragActive: !1,
			isDragAccept: !1,
			isDragReject: !1
		}), $L(e) && u && u(e));
	}, [
		A,
		u,
		C
	]), me = te(function(e, t) {
		var n = [], r = [];
		e.forEach(function(e) {
			var t = bR(JL(e, E), 2), i = t[0], s = t[1], c = bR(YL(e, o, a), 2), l = c[0], u = c[1], d = T ? T(e) : null;
			if (i && l && !d) n.push(e);
			else {
				var f = [s, u];
				d && (f = f.concat(d)), r.push({
					file: e,
					errors: f.filter(function(e) {
						return e;
					})
				});
			}
		}), (!s && n.length > 1 || s && c >= 1 && n.length > c) && (n.forEach(function(e) {
			r.push({
				file: e,
				errors: [KL]
			});
		}), n.splice(0)), P({
			acceptedFiles: n,
			fileRejections: r,
			type: "setFiles"
		}), f && f(n, r, t), r.length > 0 && m && m(r, t), n.length > 0 && p && p(n, t);
	}, [
		P,
		s,
		E,
		o,
		a,
		c,
		f,
		p,
		m,
		T
	]), he = te(function(e) {
		e.preventDefault(), e.persist(), we(e), ce.current = [], $L(e) && Promise.resolve(i(e)).then(function(t) {
			QL(e) && !C || me(t, e);
		}).catch(function(e) {
			return de(e);
		}), P({ type: "reset" });
	}, [
		i,
		me,
		de,
		C
	]), ge = te(function() {
		if (re.current) {
			P({ type: "openDialog" }), O();
			var e = {
				multiple: s,
				types: D
			};
			window.showOpenFilePicker(e).then(function(e) {
				return i(e);
			}).then(function(e) {
				me(e, null), P({ type: "closeDialog" });
			}).catch(function(e) {
				cR(e) ? (k(e), P({ type: "closeDialog" })) : lR(e) ? (re.current = !1, j.current ? (j.current.value = null, j.current.click()) : de(/* @__PURE__ */ Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))) : de(e);
			});
			return;
		}
		j.current && (P({ type: "openDialog" }), O(), j.current.value = null, j.current.click());
	}, [
		P,
		O,
		k,
		_,
		me,
		de,
		D,
		s
	]), _e = te(function(e) {
		!A.current || !A.current.isEqualNode(e.target) || (e.key === " " || e.key === "Enter" || e.keyCode === 32 || e.keyCode === 13) && (e.preventDefault(), ge());
	}, [A, ge]), ve = te(function() {
		P({ type: "focus" });
	}, []), ye = te(function() {
		P({ type: "blur" });
	}, []), be = te(function() {
		b || (rR() ? setTimeout(ge, 0) : ge());
	}, [b, ge]), xe = function(e) {
		return r ? null : e;
	}, Se = function(e) {
		return x ? null : xe(e);
	}, Ce = function(e) {
		return S ? null : xe(e);
	}, we = function(e) {
		C && e.stopPropagation();
	}, Te = ae(function() {
		return function() {
			var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.refKey, n = t === void 0 ? "ref" : t, i = e.role, a = e.onKeyDown, o = e.onFocus, s = e.onBlur, c = e.onClick, l = e.onDragEnter, u = e.onDragOver, d = e.onDragLeave, f = e.onDrop, p = kR(e, mR);
			return DR(DR(OR({
				onKeyDown: Se(iR(a, _e)),
				onFocus: Se(iR(o, ve)),
				onBlur: Se(iR(s, ye)),
				onClick: xe(iR(c, be)),
				onDragEnter: Ce(iR(l, I)),
				onDragOver: Ce(iR(u, fe)),
				onDragLeave: Ce(iR(d, pe)),
				onDrop: Ce(iR(f, he)),
				role: typeof i == "string" && i !== "" ? i : "presentation"
			}, n, A), !r && !x ? { tabIndex: 0 } : {}), p);
		};
	}, [
		A,
		_e,
		ve,
		ye,
		be,
		I,
		fe,
		pe,
		he,
		x,
		S,
		r
	]), Ee = te(function(e) {
		e.stopPropagation();
	}, []), De = ae(function() {
		return function() {
			var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.refKey, n = t === void 0 ? "ref" : t, r = e.onChange, i = e.onClick, a = kR(e, hR);
			return DR(DR({}, OR({
				accept: E,
				multiple: s,
				type: "file",
				style: {
					border: 0,
					clip: "rect(0, 0, 0, 0)",
					clipPath: "inset(50%)",
					height: "1px",
					margin: "0 -1px -1px 0",
					overflow: "hidden",
					padding: 0,
					position: "absolute",
					width: "1px",
					whiteSpace: "nowrap"
				},
				onChange: xe(iR(r, he)),
				onClick: xe(iR(i, Ee)),
				tabIndex: -1
			}, n, j)), a);
		};
	}, [
		j,
		n,
		s,
		he,
		r
	]);
	return DR(DR({}, N), {}, {
		isFocused: ee && !r,
		getRootProps: Te,
		getInputProps: De,
		rootRef: A,
		inputRef: j,
		open: xe(ge)
	});
}
function FR(e, t) {
	/* istanbul ignore next */
	switch (t.type) {
		case "focus": return DR(DR({}, e), {}, { isFocused: !0 });
		case "blur": return DR(DR({}, e), {}, { isFocused: !1 });
		case "openDialog": return DR(DR({}, NR), {}, { isFileDialogActive: !0 });
		case "closeDialog": return DR(DR({}, e), {}, { isFileDialogActive: !1 });
		case "setDraggedFiles": return DR(DR({}, e), {}, {
			isDragActive: t.isDragActive,
			isDragAccept: t.isDragAccept,
			isDragReject: t.isDragReject
		});
		case "setFiles": return DR(DR({}, e), {}, {
			acceptedFiles: t.acceptedFiles,
			fileRejections: t.fileRejections,
			isDragReject: !1
		});
		case "setDragGlobal": return DR(DR({}, e), {}, { isDragGlobal: t.isDragGlobal });
		case "reset": return DR({}, NR);
		default: return e;
	}
}
function IR() {}
//#endregion
//#region node_modules/@mui/icons-material/esm/CloudUpload.js
var LR = w(/* @__PURE__ */ E("path", { d: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M14 13v4h-4v-4H7l5-5 5 5z" }), "CloudUpload"), RR = w(/* @__PURE__ */ E("path", { d: "M2.01 21 23 12 2.01 3 2 10l15 2-15 2z" }), "Send"), zR = ({ loading: e, value: n }) => /* @__PURE__ */ E(t, {
	sx: {
		position: "relative",
		display: "inline-flex"
	},
	children: /* @__PURE__ */ D(f, {
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
}), BR = ({ ...e }) => /* @__PURE__ */ E(u, {
	...e,
	children: /* @__PURE__ */ E(RR, {})
}), VR = (e, t) => {
	let n = e.current;
	n && (n.setProgressValue(t), n.progressValue = t, e.current = n);
}, HR = (e) => !e || !e.current ? 1 : e.current.progressValue, UR = ({ refKey: e, register_component: t, onDropSuccess: n, onSend: r }) => {
	let [i, a] = ce(""), [o, s] = ce(!1), [c, l] = ce(0), d = AI(e, t), p = se({
		progressValue: 0,
		setProgressValue: l
	}), { getRootProps: m, getInputProps: h, open: g, isDragActive: _ } = PR({
		onDrop: te((e) => {
			if (e.length > 0) {
				let t = p.current;
				s(!0), t.setProgressValue = l, n(p, e), p.current = t;
			}
		}, [n]),
		noClick: !0,
		noKeyboard: !0,
		multiple: !1
	});
	ie(() => (d(p.current), () => d(null)), [d]);
	let { ref: v, ...y } = m(), x = o || c == 100 ? /* @__PURE__ */ E(zR, {
		loading: !0,
		value: c
	}) : /* @__PURE__ */ E(BR, {
		onClick: r,
		sx: { color: c === 100 ? "red" : "inherit" }
	});
	return /* @__PURE__ */ E(b, {
		variant: "outlined",
		value: i,
		onChange: (e) => a(e.target.value),
		slotProps: { input: {
			...y,
			inputRef: v,
			startAdornment: /* @__PURE__ */ D(f, {
				position: "start",
				children: [/* @__PURE__ */ E("input", { ...h() }), /* @__PURE__ */ E(u, {
					onClick: g,
					children: /* @__PURE__ */ E(LR, {})
				})]
			}),
			endAdornment: x
		} },
		sx: {
			backgroundColor: _ ? "action.hover" : "inherit",
			"& .MuiOutlinedInput-root": { transition: "background-color 0.2s" }
		}
	});
}, WR = ({ api: e, title: t, grid_endpoint: n, row_details: r, buttons: i, refKey: a }) => {
	let o = i?.map((e) => e);
	return /* @__PURE__ */ D(g, {
		direction: "column",
		gap: 2,
		children: [/* @__PURE__ */ D(g, {
			justifyContent: "space-between",
			alignItems: "center",
			direction: "row",
			children: [/* @__PURE__ */ E(S, {
				sx: {
					whiteSpace: "nowrap",
					overflow: "hidden",
					textOverflow: "ellipsis"
				},
				children: t
			}), /* @__PURE__ */ E(g, {
				direction: "row",
				gap: 1,
				sx: {
					justifyContent: "flex-end",
					width: "50%"
				},
				children: o
			})]
		}), /* @__PURE__ */ E(nL, {
			api: e,
			endpoint: n,
			row_details: r,
			refKey: a
		})]
	});
}, GR = ({ children: e }) => /* @__PURE__ */ D(t, { children: [
	/* @__PURE__ */ E(ht, {}),
	e,
	/* @__PURE__ */ E(gt, {})
] }), KR = ({ children: e }) => {
	let t = se({}), n = ae(() => ({
		register: (e, n) => {
			t.current[e] = n;
		},
		unregister: (e) => {
			delete t.current[e];
		},
		get: (e) => t.current[e] || null,
		registry: () => t.current
	}), []);
	return /* @__PURE__ */ E(OI.Provider, {
		value: n,
		children: e
	});
}, qR = ({ children: e }) => /* @__PURE__ */ E(KR, { children: /* @__PURE__ */ E(GR, { children: /* @__PURE__ */ E(g, {
	direction: "column",
	gap: 2,
	children: e
}) }) });
//#endregion
export { CI as AddElement, cI as Api, _t as ApiButton, vt as CenteredContainer, yt as CenteredModal, mI as Close, XI as DataSourceWrapper, TI as DeleteLabel, _I as GetContainer, QI as GetDatasource, wI as GetElementIndex, SI as GetElementTypes, xI as GetElementValue, yI as GetElements, LI as GetEndpoint, YI as GetFetchParams, VI as GetHeaders, HI as GetPaginationModel, HR as GetProgressValue, BI as GetRows, vI as GetSet, WR as GridWithButtons, qR as HFCenteredLayout, lI as HandleGet, GR as HeaderFooterLayout, pI as InitialTypeFormBuilderRefState, sT as IsNullOrUndefined, oT as IsPrimitive, tL as ModalCellRendererWrapper, zR as ProgressAdornment, KR as RefProvider, $I as Refresh, dI as SelectAssociation, BR as SendIconButton, UI as SetArgs, gI as SetContainer, II as SetEndpoint, JI as SetFetchParams, KI as SetFilterModel, hI as SetHandleClose, RI as SetHeadersFromJson, WI as SetOrAddArgs, qI as SetPaginationModel, VR as SetProgressValue, zI as SetRowsFromJson, ZI as SetSearch, eL as SetSelectedRows, GI as SetSortModel, cT as TitleCase, EI as TypeFormBuilder, ht as UIAppBar, gt as UIBottomNav, UR as UIInput, nL as UITable, bI as UpdateElementValues };
