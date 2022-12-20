import { Button as oe, Grid as w, CardMedia as $e, Typography as P, Box as $, Tabs as Tr, Tab as Er, responsiveFontSizes as Ae, createTheme as Me, ThemeProvider as _r, CssBaseline as Rr, useTheme as We, useMediaQuery as Ve, Dialog as Le, DialogTitle as Cr, DialogContent as Sr, TextField as le, DialogActions as Pr, Slide as Or, AppBar as kr, Toolbar as Dr, IconButton as jr, Paper as Fr, Autocomplete as Ir, FormControl as $r, InputLabel as Ar, Select as Mr, MenuItem as Wr, FormControlLabel as Vr, Checkbox as Lr } from "@mui/material";
import * as Ye from "react";
import ce from "react";
import { Close as Yr } from "@mui/icons-material";
import { getIn as K } from "formik";
var X = { exports: {} }, N = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fe;
function Gr() {
  if (Fe)
    return N;
  Fe = 1;
  var t = ce, i = Symbol.for("react.element"), l = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, u = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(d, h, v) {
    var g, _ = {}, S = null, k = null;
    v !== void 0 && (S = "" + v), h.key !== void 0 && (S = "" + h.key), h.ref !== void 0 && (k = h.ref);
    for (g in h)
      o.call(h, g) && !f.hasOwnProperty(g) && (_[g] = h[g]);
    if (d && d.defaultProps)
      for (g in h = d.defaultProps, h)
        _[g] === void 0 && (_[g] = h[g]);
    return { $$typeof: i, type: d, key: S, ref: k, props: _, _owner: u.current };
  }
  return N.Fragment = l, N.jsx = c, N.jsxs = c, N;
}
var B = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ie;
function Nr() {
  return Ie || (Ie = 1, process.env.NODE_ENV !== "production" && function() {
    var t = ce, i = Symbol.for("react.element"), l = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), d = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), k = Symbol.for("react.offscreen"), j = Symbol.iterator, A = "@@iterator";
    function W(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = j && e[j] || e[A];
      return typeof r == "function" ? r : null;
    }
    var D = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(e) {
      {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
          n[s - 1] = arguments[s];
        Ne("error", e, n);
      }
    }
    function Ne(e, r, n) {
      {
        var s = D.ReactDebugCurrentFrame, b = s.getStackAddendum();
        b !== "" && (r += "%s", n = n.concat([b]));
        var y = n.map(function(p) {
          return String(p);
        });
        y.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, y);
      }
    }
    var Be = !1, Ue = !1, ze = !1, He = !1, qe = !1, se;
    se = Symbol.for("react.module.reference");
    function Je(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === o || e === f || qe || e === u || e === v || e === g || He || e === k || Be || Ue || ze || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === _ || e.$$typeof === c || e.$$typeof === d || e.$$typeof === h || e.$$typeof === se || e.getModuleId !== void 0));
    }
    function Ke(e, r, n) {
      var s = e.displayName;
      if (s)
        return s;
      var b = r.displayName || r.name || "";
      return b !== "" ? n + "(" + b + ")" : n;
    }
    function ue(e) {
      return e.displayName || "Context";
    }
    function F(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case o:
          return "Fragment";
        case l:
          return "Portal";
        case f:
          return "Profiler";
        case u:
          return "StrictMode";
        case v:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            var r = e;
            return ue(r) + ".Consumer";
          case c:
            var n = e;
            return ue(n._context) + ".Provider";
          case h:
            return Ke(e, e.render, "ForwardRef");
          case _:
            var s = e.displayName || null;
            return s !== null ? s : F(e.type) || "Memo";
          case S: {
            var b = e, y = b._payload, p = b._init;
            try {
              return F(p(y));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var M = Object.assign, Y = 0, fe, de, me, he, pe, ve, ge;
    function be() {
    }
    be.__reactDisabledLog = !0;
    function Xe() {
      {
        if (Y === 0) {
          fe = console.log, de = console.info, me = console.warn, he = console.error, pe = console.group, ve = console.groupCollapsed, ge = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: be,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Y++;
      }
    }
    function Ze() {
      {
        if (Y--, Y === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: M({}, e, {
              value: fe
            }),
            info: M({}, e, {
              value: de
            }),
            warn: M({}, e, {
              value: me
            }),
            error: M({}, e, {
              value: he
            }),
            group: M({}, e, {
              value: pe
            }),
            groupCollapsed: M({}, e, {
              value: ve
            }),
            groupEnd: M({}, e, {
              value: ge
            })
          });
        }
        Y < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Z = D.ReactCurrentDispatcher, Q;
    function U(e, r, n) {
      {
        if (Q === void 0)
          try {
            throw Error();
          } catch (b) {
            var s = b.stack.trim().match(/\n( *(at )?)/);
            Q = s && s[1] || "";
          }
        return `
` + Q + e;
      }
    }
    var ee = !1, z;
    {
      var Qe = typeof WeakMap == "function" ? WeakMap : Map;
      z = new Qe();
    }
    function ye(e, r) {
      if (!e || ee)
        return "";
      {
        var n = z.get(e);
        if (n !== void 0)
          return n;
      }
      var s;
      ee = !0;
      var b = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var y;
      y = Z.current, Z.current = null, Xe();
      try {
        if (r) {
          var p = function() {
            throw Error();
          };
          if (Object.defineProperty(p.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(p, []);
            } catch (I) {
              s = I;
            }
            Reflect.construct(e, [], p);
          } else {
            try {
              p.call();
            } catch (I) {
              s = I;
            }
            e.call(p.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (I) {
            s = I;
          }
          e();
        }
      } catch (I) {
        if (I && s && typeof I.stack == "string") {
          for (var m = I.stack.split(`
`), C = s.stack.split(`
`), T = m.length - 1, E = C.length - 1; T >= 1 && E >= 0 && m[T] !== C[E]; )
            E--;
          for (; T >= 1 && E >= 0; T--, E--)
            if (m[T] !== C[E]) {
              if (T !== 1 || E !== 1)
                do
                  if (T--, E--, E < 0 || m[T] !== C[E]) {
                    var O = `
` + m[T].replace(" at new ", " at ");
                    return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), typeof e == "function" && z.set(e, O), O;
                  }
                while (T >= 1 && E >= 0);
              break;
            }
        }
      } finally {
        ee = !1, Z.current = y, Ze(), Error.prepareStackTrace = b;
      }
      var L = e ? e.displayName || e.name : "", je = L ? U(L) : "";
      return typeof e == "function" && z.set(e, je), je;
    }
    function er(e, r, n) {
      return ye(e, !1);
    }
    function rr(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function H(e, r, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ye(e, rr(e));
      if (typeof e == "string")
        return U(e);
      switch (e) {
        case v:
          return U("Suspense");
        case g:
          return U("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            return er(e.render);
          case _:
            return H(e.type, r, n);
          case S: {
            var s = e, b = s._payload, y = s._init;
            try {
              return H(y(b), r, n);
            } catch {
            }
          }
        }
      return "";
    }
    var q = Object.prototype.hasOwnProperty, xe = {}, we = D.ReactDebugCurrentFrame;
    function J(e) {
      if (e) {
        var r = e._owner, n = H(e.type, e._source, r ? r.type : null);
        we.setExtraStackFrame(n);
      } else
        we.setExtraStackFrame(null);
    }
    function tr(e, r, n, s, b) {
      {
        var y = Function.call.bind(q);
        for (var p in e)
          if (y(e, p)) {
            var m = void 0;
            try {
              if (typeof e[p] != "function") {
                var C = Error((s || "React class") + ": " + n + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw C.name = "Invariant Violation", C;
              }
              m = e[p](r, p, s, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (T) {
              m = T;
            }
            m && !(m instanceof Error) && (J(b), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", s || "React class", n, p, typeof m), J(null)), m instanceof Error && !(m.message in xe) && (xe[m.message] = !0, J(b), R("Failed %s type: %s", n, m.message), J(null));
          }
      }
    }
    var nr = Array.isArray;
    function re(e) {
      return nr(e);
    }
    function ar(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, n = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function ir(e) {
      try {
        return Te(e), !1;
      } catch {
        return !0;
      }
    }
    function Te(e) {
      return "" + e;
    }
    function Ee(e) {
      if (ir(e))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ar(e)), Te(e);
    }
    var G = D.ReactCurrentOwner, or = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, _e, Re, te;
    te = {};
    function lr(e) {
      if (q.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function cr(e) {
      if (q.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function sr(e, r) {
      if (typeof e.ref == "string" && G.current && r && G.current.stateNode !== r) {
        var n = F(G.current.type);
        te[n] || (R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', F(G.current.type), e.ref), te[n] = !0);
      }
    }
    function ur(e, r) {
      {
        var n = function() {
          _e || (_e = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function fr(e, r) {
      {
        var n = function() {
          Re || (Re = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var dr = function(e, r, n, s, b, y, p) {
      var m = {
        $$typeof: i,
        type: e,
        key: r,
        ref: n,
        props: p,
        _owner: y
      };
      return m._store = {}, Object.defineProperty(m._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(m, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.defineProperty(m, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: b
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    };
    function mr(e, r, n, s, b) {
      {
        var y, p = {}, m = null, C = null;
        n !== void 0 && (Ee(n), m = "" + n), cr(r) && (Ee(r.key), m = "" + r.key), lr(r) && (C = r.ref, sr(r, b));
        for (y in r)
          q.call(r, y) && !or.hasOwnProperty(y) && (p[y] = r[y]);
        if (e && e.defaultProps) {
          var T = e.defaultProps;
          for (y in T)
            p[y] === void 0 && (p[y] = T[y]);
        }
        if (m || C) {
          var E = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          m && ur(p, E), C && fr(p, E);
        }
        return dr(e, m, C, b, s, G.current, p);
      }
    }
    var ne = D.ReactCurrentOwner, Ce = D.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var r = e._owner, n = H(e.type, e._source, r ? r.type : null);
        Ce.setExtraStackFrame(n);
      } else
        Ce.setExtraStackFrame(null);
    }
    var ae;
    ae = !1;
    function ie(e) {
      return typeof e == "object" && e !== null && e.$$typeof === i;
    }
    function Se() {
      {
        if (ne.current) {
          var e = F(ne.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function hr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), n = e.lineNumber;
          return `

Check your code at ` + r + ":" + n + ".";
        }
        return "";
      }
    }
    var Pe = {};
    function pr(e) {
      {
        var r = Se();
        if (!r) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (r = `

Check the top-level render call using <` + n + ">.");
        }
        return r;
      }
    }
    function Oe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = pr(r);
        if (Pe[n])
          return;
        Pe[n] = !0;
        var s = "";
        e && e._owner && e._owner !== ne.current && (s = " It was passed a child from " + F(e._owner.type) + "."), V(e), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, s), V(null);
      }
    }
    function ke(e, r) {
      {
        if (typeof e != "object")
          return;
        if (re(e))
          for (var n = 0; n < e.length; n++) {
            var s = e[n];
            ie(s) && Oe(s, r);
          }
        else if (ie(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var b = W(e);
          if (typeof b == "function" && b !== e.entries)
            for (var y = b.call(e), p; !(p = y.next()).done; )
              ie(p.value) && Oe(p.value, r);
        }
      }
    }
    function vr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var n;
        if (typeof r == "function")
          n = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === h || r.$$typeof === _))
          n = r.propTypes;
        else
          return;
        if (n) {
          var s = F(r);
          tr(n, e.props, "prop", s, e);
        } else if (r.PropTypes !== void 0 && !ae) {
          ae = !0;
          var b = F(r);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", b || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function gr(e) {
      {
        for (var r = Object.keys(e.props), n = 0; n < r.length; n++) {
          var s = r[n];
          if (s !== "children" && s !== "key") {
            V(e), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", s), V(null);
            break;
          }
        }
        e.ref !== null && (V(e), R("Invalid attribute `ref` supplied to `React.Fragment`."), V(null));
      }
    }
    function De(e, r, n, s, b, y) {
      {
        var p = Je(e);
        if (!p) {
          var m = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var C = hr(b);
          C ? m += C : m += Se();
          var T;
          e === null ? T = "null" : re(e) ? T = "array" : e !== void 0 && e.$$typeof === i ? (T = "<" + (F(e.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : T = typeof e, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", T, m);
        }
        var E = mr(e, r, n, b, y);
        if (E == null)
          return E;
        if (p) {
          var O = r.children;
          if (O !== void 0)
            if (s)
              if (re(O)) {
                for (var L = 0; L < O.length; L++)
                  ke(O[L], e);
                Object.freeze && Object.freeze(O);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ke(O, e);
        }
        return e === o ? gr(E) : vr(E), E;
      }
    }
    function br(e, r, n) {
      return De(e, r, n, !0);
    }
    function yr(e, r, n) {
      return De(e, r, n, !1);
    }
    var xr = yr, wr = br;
    B.Fragment = o, B.jsx = xr, B.jsxs = wr;
  }()), B;
}
(function(t) {
  process.env.NODE_ENV === "production" ? t.exports = Gr() : t.exports = Nr();
})(X);
const Br = X.exports.Fragment, a = X.exports.jsx, x = X.exports.jsxs, it = (t) => {
  const {
    fileType: i,
    onChange: l,
    multiple: o,
    ...u
  } = t, f = i.join(",");
  return /* @__PURE__ */ x(oe, {
    component: "label",
    ...u,
    children: [t.children, /* @__PURE__ */ a("input", {
      hidden: !0,
      accept: f,
      multiple: o,
      type: "file",
      onChange: (c) => {
        l(c);
      }
    })]
  });
}, Ur = ({
  id: t,
  data: i = [],
  color: l = "background.default",
  commentColor: o = void 0,
  textColor: u = "",
  titleColor: f = "",
  labelContenido: c = void 0
}) => /* @__PURE__ */ a(w, {
  container: !0,
  sx: {
    display: "flex",
    flexDirection: "column"
  },
  children: i.map((d, h) => /* @__PURE__ */ x(w, {
    item: !0,
    sx: {
      display: "flex",
      flexDirection: "column"
    },
    mb: 2,
    children: [/* @__PURE__ */ x(w, {
      item: !0,
      sx: {
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: "row",
          md: "row",
          lg: "row",
          xl: "row"
        },
        p: 2
      },
      bgcolor: l,
      children: [d.foto ? /* @__PURE__ */ a(w, {
        item: !0,
        justifyContent: "center",
        alignItems: "center",
        children: /* @__PURE__ */ a($e, {
          component: "img",
          image: d.foto,
          alt: "Foto",
          sx: {
            width: 50,
            height: 50,
            margin: "auto"
          }
        })
      }) : "", /* @__PURE__ */ x(w, {
        container: !0,
        sx: {
          display: "flex",
          flexDirection: "column"
        },
        children: [/* @__PURE__ */ x(w, {
          item: !0,
          sx: {
            display: "flex",
            flexDirection: "row"
          },
          children: [/* @__PURE__ */ a(w, {
            item: !0,
            xs: !0,
            sx: {
              display: "flex",
              flexDirection: "row"
            },
            children: /* @__PURE__ */ a(P, {
              variant: "body1",
              color: f,
              justifyContent: "center",
              alignItems: "center",
              children: /* @__PURE__ */ a("b", {
                children: d.nombre
              })
            })
          }), /* @__PURE__ */ a(w, {
            item: !0,
            sx: {
              display: "flex",
              flexDirection: "row"
            },
            children: /* @__PURE__ */ a(P, {
              variant: "body1",
              fontSize: "14px",
              color: f,
              justifyContent: "center",
              alignItems: "center",
              children: new Date(d.fecha).toLocaleDateString()
            })
          })]
        }), /* @__PURE__ */ x(P, {
          variant: "body1",
          fontSize: "12px",
          color: "#555",
          justifyContent: "center",
          alignItems: "center",
          children: [d.cargo ? d.cargo : "", d.evaluacion ? `(${d.evaluacion})` : ""]
        })]
      })]
    }), /* @__PURE__ */ a(w, {
      container: !0,
      sx: {
        display: "flex",
        flexDirection: "row"
      },
      bgcolor: o || l,
      children: /* @__PURE__ */ x(w, {
        item: !0,
        xs: !0,
        sx: {
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row",
            md: "row",
            lg: "row",
            xl: "row"
          }
        },
        children: [c ? /* @__PURE__ */ a(P, {
          variant: "body1",
          color: "#555",
          justifyContent: "center",
          alignItems: "center",
          sx: {
            pl: 2
          },
          children: /* @__PURE__ */ a("b", {
            children: c
          })
        }) : "", /* @__PURE__ */ a(P, {
          variant: "body1",
          color: u,
          justifyContent: "center",
          alignItems: "center",
          align: "justify",
          sx: {
            pl: {
              xs: 2,
              sm: 1
            },
            pr: 2,
            pb: 1
          },
          children: d.comentario
        })]
      })
    })]
  }, `premed-comment-card-${t}-${h}`))
}), ot = (t) => {
  const {
    width: i,
    height: l,
    ...o
  } = t;
  return /* @__PURE__ */ a($, {
    sx: {
      margin: "auto",
      maxWidth: i,
      maxHeight: l,
      flexGrow: 0
    },
    children: /* @__PURE__ */ a(w, {
      item: !0,
      sm: !0,
      children: /* @__PURE__ */ a(w, {
        container: !0,
        sx: {
          display: "flex",
          flexDirection: {
            xs: "row",
            sm: "row",
            md: "row",
            lg: "row",
            xl: "row"
          }
        },
        children: /* @__PURE__ */ a(Ur, {
          ...o
        })
      })
    })
  });
}, zr = ({
  propertyKey: t,
  value: i,
  textColor: l,
  titleColor: o,
  flexD: u,
  align: f
}) => {
  const c = `${i}`;
  return /* @__PURE__ */ a(Br, {
    children: i != null && c !== " " && c !== "" && /* @__PURE__ */ x($, {
      sx: {
        display: "flex",
        flexDirection: u
      },
      alignItems: f,
      children: [/* @__PURE__ */ a(P, {
        variant: "body1",
        display: "inline",
        color: o,
        sx: {
          ml: 1
        },
        children: /* @__PURE__ */ x("b", {
          children: [Hr(t), ":"]
        })
      }), /* @__PURE__ */ a(P, {
        variant: "body1",
        display: "inline",
        sx: {
          ml: 1
        },
        color: l,
        children: `${i}`
      })]
    })
  });
}, Ge = ({
  data: t = {},
  startIndex: i = 0,
  finalIndex: l = 0,
  textColor: o = "",
  titleColor: u = "",
  flexD: f = "",
  align: c = ""
}) => /* @__PURE__ */ a(w, {
  item: !0,
  children: Object.entries(t).slice(i, l).map(([d, h], v) => /* @__PURE__ */ a(zr, {
    propertyKey: d,
    value: h,
    textColor: o,
    titleColor: u,
    flexD: f,
    align: c
  }, `premed-profile-card-${d.replace(" ", "")}-${v}`))
}), Hr = (t) => t.charAt(0).toUpperCase() + t.slice(1), qr = ({
  data: t = {},
  img: i = void 0,
  width: l = "auto",
  height: o = "100%",
  sizeRow: u = void 0,
  color: f = "background.default",
  textColor: c = "text.secondary",
  titleColor: d = "text.primary",
  flexD: h = "row",
  align: v = "center"
}) => {
  let g = 0;
  try {
    g = Kr(u, t);
  } catch (_) {
    console.error(_);
  }
  return /* @__PURE__ */ a($, {
    sx: {
      margin: "auto",
      maxWidth: l,
      maxHeight: o,
      flexGrow: 0
    },
    children: /* @__PURE__ */ x(w, {
      container: !0,
      justifyContent: "center",
      alignItems: "top",
      bgcolor: f,
      sx: {
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: "column",
          md: "row",
          lg: "row",
          xl: "row"
        }
      },
      children: [i ? /* @__PURE__ */ a(w, {
        item: !0,
        justifyContent: "center",
        alignItems: "center",
        bgcolor: f,
        children: /* @__PURE__ */ a($e, {
          component: "img",
          image: i,
          alt: "Foto",
          sx: {
            width: 120,
            height: 120,
            margin: "auto"
          }
        })
      }) : "", /* @__PURE__ */ a(w, {
        item: !0,
        sm: !0,
        sx: {
          p: 2
        },
        children: /* @__PURE__ */ x(w, {
          container: !0,
          sx: {
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "row",
              lg: "row",
              xl: "row"
            }
          },
          bgcolor: f,
          children: [/* @__PURE__ */ a(Ge, {
            data: t,
            startIndex: 0,
            finalIndex: g,
            textColor: c,
            titleColor: d,
            flexD: h,
            align: v
          }), g != Object.keys(t).length ? Jr(t, g, Object.keys(t).length, c, d, h, v) : ""]
        })
      })]
    })
  });
}, Jr = (t, i, l, o, u, f, c) => /* @__PURE__ */ a(Ge, {
  data: t,
  startIndex: i,
  finalIndex: l,
  textColor: o,
  titleColor: u,
  flexD: f,
  align: c
}), Kr = (t, i) => {
  let l = 0, o = "";
  if (typeof t == "string" ? t == "all" ? l = Object.keys(i).length : o = "The " + {
    sizeRow: t
  } + " value is not valid." : typeof t == "number" ? t != 0 && t <= Object.keys(i).length ? l = t : o = "The number " + {
    sizeRow: t
  } + " is not valid." : typeof t > "u" ? Object.keys(i).length >= 8 ? l = Math.round(Object.keys(i).length / 2) : l = Object.keys(i).length : o = "Invalid sizeRow value.", o.length <= 0)
    return l;
  throw new Error(o);
};
function Xr(t) {
  const {
    children: i,
    value: l,
    index: o,
    color: u,
    ...f
  } = t;
  return /* @__PURE__ */ a("div", {
    role: "tabpanel",
    hidden: l !== o,
    id: `simple-tabpanel-${o}`,
    "aria-labelledby": `simple-tab-${o}`,
    ...f,
    children: l === o && /* @__PURE__ */ a($, {
      sx: {
        p: 3,
        bgcolor: u
      },
      children: /* @__PURE__ */ a(P, {
        component: "div",
        children: i
      })
    })
  });
}
function Zr(t) {
  return {
    id: `simple-tab-${t}`,
    "aria-controls": `simple-tabpanel-${t}`
  };
}
const lt = ({
  data: t = [],
  textColor: i = "text.primary",
  color: l = "background.default",
  align: o = "center",
  activeColor: u = "primary.main",
  activeTextColor: f = "white"
}) => {
  const [c, d] = Ye.useState(0);
  return /* @__PURE__ */ x($, {
    sx: {
      p: 2,
      margin: "auto",
      maxWidth: "100%",
      maxHeight: "100%",
      flexGrow: 0
    },
    children: [/* @__PURE__ */ a($, {
      sx: {
        justifyContent: o,
        display: "flex"
      },
      children: /* @__PURE__ */ a(Tr, {
        value: c,
        onChange: (v, g) => {
          d(g);
        },
        sx: {
          "& button:hover": {
            backgroundColor: u,
            color: f
          },
          "& button": {
            color: i
          },
          "& button:focus": {
            backgroundColor: l
          },
          "& button:active": {
            backgroundColor: u,
            color: f
          },
          "& button.Mui-selected": {
            backgroundColor: u,
            color: f
          }
        },
        TabIndicatorProps: {
          sx: {
            display: "none",
            background: "primary.main"
          }
        },
        children: t.map((v, g) => /* @__PURE__ */ a(Er, {
          label: v.titulo,
          ...Zr(g)
        }, `premed-tabs-${g}`))
      })
    }), t.map((v, g) => /* @__PURE__ */ x(Xr, {
      value: c,
      index: g,
      color: l,
      children: [/* @__PURE__ */ a($, {
        sx: {
          pl: v.margin
        },
        children: /* @__PURE__ */ a(P, {
          variant: v.variant ? v.variant : "body2",
          sx: {
            fontWeight: v.bold ? "bold" : "none"
          },
          component: "div",
          children: /* @__PURE__ */ a("p", {
            children: v.description
          })
        })
      }), v.componente]
    }, `premed-tabpanel-${g}`))]
  });
};
Ae(Me({
  palette: {
    primary: {
      main: "#053777",
      contrastText: "#ffffff"
    },
    secondary: {
      main: "#ff9200",
      contrastText: "#e8e3e3"
    },
    background: {
      default: "#ecf0f5",
      paper: "#ffffff"
    },
    error: {
      main: "#e84b4b",
      contrastText: "#120707"
    },
    info: {
      main: "#247db8",
      contrastText: "#eae6e6"
    },
    warning: {
      main: "#ce0e12",
      contrastText: "#eae6e6"
    },
    success: {
      main: "#01854f"
    },
    divider: "rgba(148,158,166,0.4)",
    text: {
      primary: "#212529",
      secondary: "#555555"
    }
  },
  typography: {
    body1: {
      fontSize: "1rem"
    }
  },
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          "& .MuiDataGrid-virtualScrollerRenderZone": {
            "& .MuiDataGrid-row": {
              backgroundColor: "white"
            }
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#D5D8DC"
          }
        }
      }
    }
  }
}));
Ae(Me({
  palette: {
    primary: {
      main: "#232323",
      contrastText: "#ffffff"
    },
    secondary: {
      main: "#ff9200",
      contrastText: "#e8e3e3"
    },
    text: {
      primary: "#e8e8e8",
      secondary: "rgba(222,71,0,0.73)"
    },
    background: {
      default: "#343435",
      paper: "#1a1a1e"
    },
    error: {
      main: "#ff1300",
      contrastText: "#120707"
    },
    info: {
      main: "#247db8",
      contrastText: "#eae6e6"
    },
    warning: {
      main: "#ce0e12",
      contrastText: "#eae6e6"
    },
    success: {
      main: "#01854f"
    },
    divider: "rgba(148,158,166,0.4)"
  },
  typography: {
    body1: {
      fontSize: "1rem"
    }
  },
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          "& .MuiDataGrid-virtualScrollerRenderZone": {
            "& .MuiDataGrid-row": {
              backgroundColor: "white"
            }
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#D5D8DC"
          }
        }
      }
    }
  }
}));
const ct = ({
  themeName: t,
  children: i
}) => /* @__PURE__ */ x(_r, {
  theme: t,
  children: [/* @__PURE__ */ a(Rr, {
    enableColorScheme: !0
  }), i]
}), st = ({
  data: t = {},
  handleClose: i,
  open: l,
  onClick: o,
  titulo: u = "Inserte un comentario",
  label: f = "Observaci\xF3n",
  instruccion: c = !1
}) => {
  let d = "row", h, v = "center";
  c && (d = "column", h = "all", v = "left");
  const g = We(), _ = Ve(g.breakpoints.down("sm"));
  let S = "";
  const [k, j] = ce.useState(!0);
  return /* @__PURE__ */ a("div", {
    children: /* @__PURE__ */ x(Le, {
      fullWidth: !0,
      maxWidth: "md",
      fullScreen: _,
      onClose: i,
      "aria-labelledby": "customized-dialog-title",
      open: l,
      children: [/* @__PURE__ */ x(Cr, {
        children: [" ", u, " "]
      }), /* @__PURE__ */ x(Sr, {
        dividers: !0,
        children: [/* @__PURE__ */ a(qr, {
          data: t,
          color: "background.paper",
          sizeRow: h,
          flexD: d,
          align: v
        }), /* @__PURE__ */ a("p", {}), /* @__PURE__ */ a(P, {
          gutterBottom: !0,
          children: /* @__PURE__ */ x("b", {
            children: [" ", f, " "]
          })
        }), /* @__PURE__ */ a(le, {
          sx: {
            width: "100%"
          },
          placeholder: "Ingresar comentario(s)",
          multiline: !0,
          rows: 5,
          onChange: (W) => {
            S = W.target.value, S.replace(/ /g, "").length >= 10 ? j(!1) : j(!0);
          }
        })]
      }), /* @__PURE__ */ a("p", {}), /* @__PURE__ */ x(Pr, {
        children: [/* @__PURE__ */ a(oe, {
          variant: "outlined",
          color: "error",
          onClick: i,
          children: "Cancelar"
        }), /* @__PURE__ */ a(oe, {
          disabled: k,
          variant: "contained",
          color: "primary",
          onClick: () => {
            o(S), i(), j(!0);
          },
          children: "Agregar"
        })]
      })]
    })
  });
}, ut = ({
  data: t = []
}) => {
  let i = 0, l = 0, o = 12;
  t.map((c) => {
    c.width ? i += c.width : l += 1;
  }), Qr(t), o -= i, o /= l;
  const u = We(), f = Ve(u.breakpoints.down("md"));
  return /* @__PURE__ */ a(w, {
    container: !0,
    spacing: 1,
    sx: {
      display: "flex",
      flexDirection: {
        xs: "column",
        sm: "column",
        md: "row",
        lg: "row",
        xl: "row"
      }
    },
    children: t.map((c, d) => /* @__PURE__ */ a(w, {
      container: !0,
      item: !0,
      xs: f ? 12 : c.width ? c.width : o,
      children: /* @__PURE__ */ a(w, {
        container: !0,
        sx: {
          display: "flex",
          flexDirection: "column"
        },
        children: /* @__PURE__ */ x(w, {
          container: !0,
          sx: {
            height: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: c.alignVertical ? c.alignVertical == "top" ? "flex-start" : c.alignVertical == "bottom" ? "flex-end" : c.alignVertical == "center" ? "center" : "flex-start" : "flex-start",
            alignItems: c.alignHorizontal ? c.alignHorizontal == "left" ? "flex-start" : c.alignHorizontal == "right" ? "flex-end" : c.alignHorizontal == "center" ? "center" : "flex-start" : "flex-start"
          },
          children: [/* @__PURE__ */ a(w, {
            container: !0,
            sx: {
              display: "flex",
              flexDirection: "column",
              alignItems: c.alignTitulo ? c.alignTitulo == "left" ? "flex-start" : c.alignTitulo == "right" ? "flex-end" : c.alignTitulo == "center" ? "center" : "flex-start" : "flex-start"
            },
            children: /* @__PURE__ */ a($, {
              children: c.titulo ? /* @__PURE__ */ a(P, {
                variant: "body1",
                children: /* @__PURE__ */ a("b", {
                  children: c.titulo
                })
              }) : ""
            })
          }), /* @__PURE__ */ a($, {
            children: c.componente
          })]
        })
      })
    }, `premed-grid-${d}`))
  });
};
function Qr(t) {
  if (t.length > 0)
    return !0;
  throw new Error("La data debe de contener al menos un (1) elemento.");
}
const et = Ye.forwardRef(function(i, l) {
  return /* @__PURE__ */ a(Or, {
    direction: "up",
    ref: l,
    ...i
  });
}), ft = ({
  id: t,
  title: i,
  open: l,
  handleClose: o,
  children: u
}) => /* @__PURE__ */ a("div", {
  children: /* @__PURE__ */ x(Le, {
    id: t,
    fullScreen: !0,
    open: l,
    onClose: o,
    TransitionComponent: et,
    children: [/* @__PURE__ */ a(kr, {
      sx: {
        position: "relative"
      },
      children: /* @__PURE__ */ x(Dr, {
        children: [/* @__PURE__ */ a(jr, {
          edge: "start",
          color: "inherit",
          onClick: o,
          "aria-label": "close",
          children: /* @__PURE__ */ a(Yr, {})
        }), /* @__PURE__ */ a(P, {
          sx: {
            ml: 2,
            flex: 1
          },
          variant: "h6",
          component: "div",
          children: i
        })]
      })
    }), u]
  })
}), dt = ({
  label: t,
  bgcolor: i = "primary",
  color: l = "primary",
  variant: o = "h4",
  elevation: u = 2,
  align: f = "inherit"
}) => /* @__PURE__ */ a(Fr, {
  sx: {
    pl: "4%",
    bgcolor: `${i}.main`,
    color: `${l}.contrastText`,
    borderRadius: 0
  },
  elevation: u,
  children: /* @__PURE__ */ a(P, {
    component: "div",
    variant: o,
    align: f,
    children: t
  })
}), mt = (t) => {
  const i = K(t.form.touched, t.field.name), l = K(t.form.errors, t.field.name), {
    error: o,
    helperText: u,
    field: f,
    form: c,
    options: d,
    unstructured: h,
    getOptionLabel: v,
    ...g
  } = t, {
    setTouched: _,
    setFieldValue: S
  } = c, {
    name: k
  } = f;
  return /* @__PURE__ */ a(Ir, {
    options: d,
    getOptionLabel: v,
    onChange: (j, A) => {
      const W = A || null;
      if (_({
        [k]: W === null
      }), h !== null) {
        h == null || h.forEach((D) => S(D.key, A ? A[D.key] : D.defaultValue));
        return;
      }
      S(k, W);
    },
    onBlur: () => _({
      [k]: !0
    }),
    renderInput: (j) => /* @__PURE__ */ a(le, {
      error: o != null ? o : Boolean(i && l),
      helperText: u != null ? u : i && l ? l : void 0,
      ...j,
      ...f,
      ...g
    })
  });
}, ht = (t) => {
  const {
    error: i,
    field: l,
    form: o,
    options: u,
    ...f
  } = t, {
    setFieldValue: c
  } = o, {
    name: d
  } = l, {
    label: h
  } = f;
  return /* @__PURE__ */ x($r, {
    fullWidth: !0,
    children: [/* @__PURE__ */ a(Ar, {
      id: `premed-select-${h}`,
      children: h
    }), /* @__PURE__ */ a(Mr, {
      labelId: `premed-select-${h}`,
      ...l,
      onChange: (v) => {
        c(d, v.target.value);
      },
      ...f,
      children: u == null ? void 0 : u.map((v, g) => /* @__PURE__ */ a(Wr, {
        value: v.value,
        children: v.label
      }, `options-${g}-${v.value}`))
    })]
  });
}, pt = (t) => {
  const i = K(t.form.touched, t.field.name), l = K(t.form.errors, t.field.name), {
    error: o,
    helperText: u,
    field: f,
    form: c,
    ...d
  } = t;
  return /* @__PURE__ */ a(le, {
    variant: "outlined",
    error: o != null ? o : Boolean(i && l),
    helperText: u != null ? u : i && l ? l : void 0,
    ...d,
    ...f
  });
}, vt = (t) => {
  const {
    form: i,
    label: l,
    field: o,
    ...u
  } = t, {
    setFieldValue: f,
    values: c
  } = i, {
    name: d
  } = o;
  return /* @__PURE__ */ a(Vr, {
    control: /* @__PURE__ */ a(Lr, {}),
    label: l,
    checked: c[d],
    onChange: () => f(d, !c[d])
  });
};
export {
  it as PremedButtonFilePicker,
  st as PremedCommentDialog,
  ot as PremedCommentsCard,
  ut as PremedContainer,
  mt as PremedFormAutocomplete,
  vt as PremedFormCheckBox,
  ht as PremedFormSelect,
  pt as PremedFormTextField,
  ft as PremedFullDialog,
  qr as PremedProfileCard,
  dt as PremedSectionTitle,
  lt as PremedTabs,
  ct as PremedTheme
};
//# sourceMappingURL=premed-ui.js.map
