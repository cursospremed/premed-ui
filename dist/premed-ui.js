import { Button as oe, Grid as w, CardMedia as $e, Typography as S, Box as $, Tabs as yr, Tab as wr, responsiveFontSizes as Er, createTheme as _r, ThemeProvider as Tr, CssBaseline as Rr, useTheme as Ae, useMediaQuery as We, Dialog as Me, DialogTitle as Cr, DialogContent as Pr, TextField as le, DialogActions as Sr, Slide as Or, AppBar as kr, Toolbar as Dr, IconButton as jr, Paper as Fr, Autocomplete as Ir, FormControl as $r, InputLabel as Ar, Select as Wr, MenuItem as Mr, FormControlLabel as Vr, Checkbox as Lr } from "@mui/material";
import * as Ve from "react";
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
function Br() {
  if (Fe)
    return N;
  Fe = 1;
  var t = ce, o = Symbol.for("react.element"), l = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, u = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(d, h, p) {
    var g, T = {}, P = null, k = null;
    p !== void 0 && (P = "" + p), h.key !== void 0 && (P = "" + h.key), h.ref !== void 0 && (k = h.ref);
    for (g in h)
      a.call(h, g) && !f.hasOwnProperty(g) && (T[g] = h[g]);
    if (d && d.defaultProps)
      for (g in h = d.defaultProps, h)
        T[g] === void 0 && (T[g] = h[g]);
    return { $$typeof: o, type: d, key: P, ref: k, props: T, _owner: u.current };
  }
  return N.Fragment = l, N.jsx = c, N.jsxs = c, N;
}
var G = {};
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
    var t = ce, o = Symbol.for("react.element"), l = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), d = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), k = Symbol.for("react.offscreen"), j = Symbol.iterator, A = "@@iterator";
    function M(e) {
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
        Ye("error", e, n);
      }
    }
    function Ye(e, r, n) {
      {
        var s = D.ReactDebugCurrentFrame, b = s.getStackAddendum();
        b !== "" && (r += "%s", n = n.concat([b]));
        var x = n.map(function(v) {
          return String(v);
        });
        x.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, x);
      }
    }
    var Be = !1, Ne = !1, Ge = !1, Ue = !1, ze = !1, se;
    se = Symbol.for("react.module.reference");
    function He(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === a || e === f || ze || e === u || e === p || e === g || Ue || e === k || Be || Ne || Ge || typeof e == "object" && e !== null && (e.$$typeof === P || e.$$typeof === T || e.$$typeof === c || e.$$typeof === d || e.$$typeof === h || e.$$typeof === se || e.getModuleId !== void 0));
    }
    function qe(e, r, n) {
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
        case a:
          return "Fragment";
        case l:
          return "Portal";
        case f:
          return "Profiler";
        case u:
          return "StrictMode";
        case p:
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
            return qe(e, e.render, "ForwardRef");
          case T:
            var s = e.displayName || null;
            return s !== null ? s : F(e.type) || "Memo";
          case P: {
            var b = e, x = b._payload, v = b._init;
            try {
              return F(v(x));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var W = Object.assign, Y = 0, fe, de, me, he, ve, pe, ge;
    function be() {
    }
    be.__reactDisabledLog = !0;
    function Je() {
      {
        if (Y === 0) {
          fe = console.log, de = console.info, me = console.warn, he = console.error, ve = console.group, pe = console.groupCollapsed, ge = console.groupEnd;
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
    function Ke() {
      {
        if (Y--, Y === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: W({}, e, {
              value: fe
            }),
            info: W({}, e, {
              value: de
            }),
            warn: W({}, e, {
              value: me
            }),
            error: W({}, e, {
              value: he
            }),
            group: W({}, e, {
              value: ve
            }),
            groupCollapsed: W({}, e, {
              value: pe
            }),
            groupEnd: W({}, e, {
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
      var Xe = typeof WeakMap == "function" ? WeakMap : Map;
      z = new Xe();
    }
    function xe(e, r) {
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
      var x;
      x = Z.current, Z.current = null, Je();
      try {
        if (r) {
          var v = function() {
            throw Error();
          };
          if (Object.defineProperty(v.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(v, []);
            } catch (I) {
              s = I;
            }
            Reflect.construct(e, [], v);
          } else {
            try {
              v.call();
            } catch (I) {
              s = I;
            }
            e.call(v.prototype);
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
`), E = m.length - 1, _ = C.length - 1; E >= 1 && _ >= 0 && m[E] !== C[_]; )
            _--;
          for (; E >= 1 && _ >= 0; E--, _--)
            if (m[E] !== C[_]) {
              if (E !== 1 || _ !== 1)
                do
                  if (E--, _--, _ < 0 || m[E] !== C[_]) {
                    var O = `
` + m[E].replace(" at new ", " at ");
                    return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), typeof e == "function" && z.set(e, O), O;
                  }
                while (E >= 1 && _ >= 0);
              break;
            }
        }
      } finally {
        ee = !1, Z.current = x, Ke(), Error.prepareStackTrace = b;
      }
      var L = e ? e.displayName || e.name : "", je = L ? U(L) : "";
      return typeof e == "function" && z.set(e, je), je;
    }
    function Ze(e, r, n) {
      return xe(e, !1);
    }
    function Qe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function H(e, r, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return xe(e, Qe(e));
      if (typeof e == "string")
        return U(e);
      switch (e) {
        case p:
          return U("Suspense");
        case g:
          return U("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            return Ze(e.render);
          case T:
            return H(e.type, r, n);
          case P: {
            var s = e, b = s._payload, x = s._init;
            try {
              return H(x(b), r, n);
            } catch {
            }
          }
        }
      return "";
    }
    var q = Object.prototype.hasOwnProperty, ye = {}, we = D.ReactDebugCurrentFrame;
    function J(e) {
      if (e) {
        var r = e._owner, n = H(e.type, e._source, r ? r.type : null);
        we.setExtraStackFrame(n);
      } else
        we.setExtraStackFrame(null);
    }
    function er(e, r, n, s, b) {
      {
        var x = Function.call.bind(q);
        for (var v in e)
          if (x(e, v)) {
            var m = void 0;
            try {
              if (typeof e[v] != "function") {
                var C = Error((s || "React class") + ": " + n + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw C.name = "Invariant Violation", C;
              }
              m = e[v](r, v, s, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (E) {
              m = E;
            }
            m && !(m instanceof Error) && (J(b), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", s || "React class", n, v, typeof m), J(null)), m instanceof Error && !(m.message in ye) && (ye[m.message] = !0, J(b), R("Failed %s type: %s", n, m.message), J(null));
          }
      }
    }
    var rr = Array.isArray;
    function re(e) {
      return rr(e);
    }
    function tr(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, n = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function nr(e) {
      try {
        return Ee(e), !1;
      } catch {
        return !0;
      }
    }
    function Ee(e) {
      return "" + e;
    }
    function _e(e) {
      if (nr(e))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", tr(e)), Ee(e);
    }
    var B = D.ReactCurrentOwner, ir = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Te, Re, te;
    te = {};
    function ar(e) {
      if (q.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function or(e) {
      if (q.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function lr(e, r) {
      if (typeof e.ref == "string" && B.current && r && B.current.stateNode !== r) {
        var n = F(B.current.type);
        te[n] || (R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', F(B.current.type), e.ref), te[n] = !0);
      }
    }
    function cr(e, r) {
      {
        var n = function() {
          Te || (Te = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function sr(e, r) {
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
    var ur = function(e, r, n, s, b, x, v) {
      var m = {
        $$typeof: o,
        type: e,
        key: r,
        ref: n,
        props: v,
        _owner: x
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
    function fr(e, r, n, s, b) {
      {
        var x, v = {}, m = null, C = null;
        n !== void 0 && (_e(n), m = "" + n), or(r) && (_e(r.key), m = "" + r.key), ar(r) && (C = r.ref, lr(r, b));
        for (x in r)
          q.call(r, x) && !ir.hasOwnProperty(x) && (v[x] = r[x]);
        if (e && e.defaultProps) {
          var E = e.defaultProps;
          for (x in E)
            v[x] === void 0 && (v[x] = E[x]);
        }
        if (m || C) {
          var _ = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          m && cr(v, _), C && sr(v, _);
        }
        return ur(e, m, C, b, s, B.current, v);
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
    var ie;
    ie = !1;
    function ae(e) {
      return typeof e == "object" && e !== null && e.$$typeof === o;
    }
    function Pe() {
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
    function dr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), n = e.lineNumber;
          return `

Check your code at ` + r + ":" + n + ".";
        }
        return "";
      }
    }
    var Se = {};
    function mr(e) {
      {
        var r = Pe();
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
        var n = mr(r);
        if (Se[n])
          return;
        Se[n] = !0;
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
            ae(s) && Oe(s, r);
          }
        else if (ae(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var b = M(e);
          if (typeof b == "function" && b !== e.entries)
            for (var x = b.call(e), v; !(v = x.next()).done; )
              ae(v.value) && Oe(v.value, r);
        }
      }
    }
    function hr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var n;
        if (typeof r == "function")
          n = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === h || r.$$typeof === T))
          n = r.propTypes;
        else
          return;
        if (n) {
          var s = F(r);
          er(n, e.props, "prop", s, e);
        } else if (r.PropTypes !== void 0 && !ie) {
          ie = !0;
          var b = F(r);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", b || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function vr(e) {
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
    function De(e, r, n, s, b, x) {
      {
        var v = He(e);
        if (!v) {
          var m = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var C = dr(b);
          C ? m += C : m += Pe();
          var E;
          e === null ? E = "null" : re(e) ? E = "array" : e !== void 0 && e.$$typeof === o ? (E = "<" + (F(e.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : E = typeof e, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", E, m);
        }
        var _ = fr(e, r, n, b, x);
        if (_ == null)
          return _;
        if (v) {
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
        return e === a ? vr(_) : hr(_), _;
      }
    }
    function pr(e, r, n) {
      return De(e, r, n, !0);
    }
    function gr(e, r, n) {
      return De(e, r, n, !1);
    }
    var br = gr, xr = pr;
    G.Fragment = a, G.jsx = br, G.jsxs = xr;
  }()), G;
}
(function(t) {
  process.env.NODE_ENV === "production" ? t.exports = Br() : t.exports = Nr();
})(X);
const Gr = X.exports.Fragment, i = X.exports.jsx, y = X.exports.jsxs, ot = (t) => {
  const {
    fileType: o,
    onChange: l,
    multiple: a,
    ...u
  } = t, f = o.join(",");
  return /* @__PURE__ */ y(oe, {
    component: "label",
    ...u,
    children: [t.children, /* @__PURE__ */ i("input", {
      hidden: !0,
      accept: f,
      multiple: a,
      type: "file",
      onChange: (c) => {
        l(c);
      }
    })]
  });
}, Ur = ({
  id: t,
  data: o = [],
  color: l = "background.default",
  commentColor: a = void 0,
  textColor: u = "",
  titleColor: f = "",
  labelContenido: c = void 0
}) => /* @__PURE__ */ i(w, {
  container: !0,
  sx: {
    display: "flex",
    flexDirection: "column"
  },
  children: o.map((d, h) => /* @__PURE__ */ y(w, {
    item: !0,
    sx: {
      display: "flex",
      flexDirection: "column"
    },
    mb: 2,
    children: [/* @__PURE__ */ y(w, {
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
      children: [d.foto ? /* @__PURE__ */ i(w, {
        item: !0,
        justifyContent: "center",
        alignItems: "center",
        children: /* @__PURE__ */ i($e, {
          component: "img",
          image: d.foto,
          alt: "Foto",
          sx: {
            width: 50,
            height: 50,
            margin: "auto"
          }
        })
      }) : "", /* @__PURE__ */ y(w, {
        container: !0,
        sx: {
          display: "flex",
          flexDirection: "column"
        },
        children: [/* @__PURE__ */ y(w, {
          item: !0,
          sx: {
            display: "flex",
            flexDirection: "row"
          },
          children: [/* @__PURE__ */ i(w, {
            item: !0,
            xs: !0,
            sx: {
              display: "flex",
              flexDirection: "row"
            },
            children: /* @__PURE__ */ i(S, {
              variant: "body1",
              color: f,
              justifyContent: "center",
              alignItems: "center",
              children: /* @__PURE__ */ i("b", {
                children: d.nombre
              })
            })
          }), /* @__PURE__ */ i(w, {
            item: !0,
            sx: {
              display: "flex",
              flexDirection: "row"
            },
            children: /* @__PURE__ */ i(S, {
              variant: "body1",
              fontSize: "14px",
              color: f,
              justifyContent: "center",
              alignItems: "center",
              children: new Date(d.fecha).toLocaleDateString()
            })
          })]
        }), /* @__PURE__ */ y(S, {
          variant: "body1",
          fontSize: "12px",
          color: "#555",
          justifyContent: "center",
          alignItems: "center",
          children: [d.cargo ? d.cargo : "", d.evaluacion ? `(${d.evaluacion})` : ""]
        })]
      })]
    }), /* @__PURE__ */ i(w, {
      container: !0,
      sx: {
        display: "flex",
        flexDirection: "row"
      },
      bgcolor: a || l,
      children: /* @__PURE__ */ y(w, {
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
        children: [c ? /* @__PURE__ */ i(S, {
          variant: "body1",
          color: "#555",
          justifyContent: "center",
          alignItems: "center",
          sx: {
            pl: 2
          },
          children: /* @__PURE__ */ i("b", {
            children: c
          })
        }) : "", /* @__PURE__ */ i(S, {
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
}), lt = (t) => {
  const {
    width: o,
    height: l,
    ...a
  } = t;
  return /* @__PURE__ */ i($, {
    sx: {
      margin: "auto",
      maxWidth: o,
      maxHeight: l,
      flexGrow: 0
    },
    children: /* @__PURE__ */ i(w, {
      item: !0,
      sm: !0,
      children: /* @__PURE__ */ i(w, {
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
        children: /* @__PURE__ */ i(Ur, {
          ...a
        })
      })
    })
  });
}, zr = ({
  propertyKey: t,
  value: o,
  textColor: l,
  titleColor: a,
  flexD: u,
  align: f
}) => {
  const c = `${o}`;
  return /* @__PURE__ */ i(Gr, {
    children: o != null && c !== " " && c !== "" && /* @__PURE__ */ y($, {
      sx: {
        display: "flex",
        flexDirection: u
      },
      alignItems: f,
      children: [/* @__PURE__ */ i(S, {
        variant: "body1",
        display: "inline",
        color: a,
        sx: {
          ml: 1
        },
        children: /* @__PURE__ */ y("b", {
          children: [Hr(t), ":"]
        })
      }), /* @__PURE__ */ i(S, {
        variant: "body1",
        display: "inline",
        sx: {
          ml: 1
        },
        color: l,
        children: `${o}`
      })]
    })
  });
}, Le = ({
  data: t = {},
  startIndex: o = 0,
  finalIndex: l = 0,
  textColor: a = "",
  titleColor: u = "",
  flexD: f = "",
  align: c = ""
}) => /* @__PURE__ */ i(w, {
  item: !0,
  children: Object.entries(t).slice(o, l).map(([d, h], p) => /* @__PURE__ */ i(zr, {
    propertyKey: d,
    value: h,
    textColor: a,
    titleColor: u,
    flexD: f,
    align: c
  }, `premed-profile-card-${d.replace(" ", "")}-${p}`))
}), Hr = (t) => t.charAt(0).toUpperCase() + t.slice(1), qr = ({
  data: t = {},
  img: o = void 0,
  width: l = "auto",
  height: a = "100%",
  sizeRow: u = void 0,
  color: f = "background.default",
  textColor: c = "text.secondary",
  titleColor: d = "text.primary",
  flexD: h = "row",
  align: p = "center"
}) => {
  let g = 0;
  try {
    g = Kr(u, t);
  } catch (T) {
    console.error(T);
  }
  return /* @__PURE__ */ i($, {
    sx: {
      margin: "auto",
      maxWidth: l,
      maxHeight: a,
      flexGrow: 0
    },
    children: /* @__PURE__ */ y(w, {
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
      children: [o ? /* @__PURE__ */ i(w, {
        item: !0,
        justifyContent: "center",
        alignItems: "center",
        bgcolor: f,
        children: /* @__PURE__ */ i($e, {
          component: "img",
          image: o,
          alt: "Foto",
          sx: {
            width: 120,
            height: 120,
            margin: "auto"
          }
        })
      }) : "", /* @__PURE__ */ i(w, {
        item: !0,
        sm: !0,
        sx: {
          p: 2
        },
        children: /* @__PURE__ */ y(w, {
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
          children: [/* @__PURE__ */ i(Le, {
            data: t,
            startIndex: 0,
            finalIndex: g,
            textColor: c,
            titleColor: d,
            flexD: h,
            align: p
          }), g != Object.keys(t).length ? Jr(t, g, Object.keys(t).length, c, d, h, p) : ""]
        })
      })]
    })
  });
}, Jr = (t, o, l, a, u, f, c) => /* @__PURE__ */ i(Le, {
  data: t,
  startIndex: o,
  finalIndex: l,
  textColor: a,
  titleColor: u,
  flexD: f,
  align: c
}), Kr = (t, o) => {
  let l = 0, a = "";
  if (typeof t == "string" ? t == "all" ? l = Object.keys(o).length : a = "The " + {
    sizeRow: t
  } + " value is not valid." : typeof t == "number" ? t != 0 && t <= Object.keys(o).length ? l = t : a = "The number " + {
    sizeRow: t
  } + " is not valid." : typeof t > "u" ? Object.keys(o).length >= 8 ? l = Math.round(Object.keys(o).length / 2) : l = Object.keys(o).length : a = "Invalid sizeRow value.", a.length <= 0)
    return l;
  throw new Error(a);
};
function Xr(t) {
  const {
    children: o,
    value: l,
    index: a,
    color: u,
    ...f
  } = t;
  return /* @__PURE__ */ i("div", {
    role: "tabpanel",
    hidden: l !== a,
    id: `simple-tabpanel-${a}`,
    "aria-labelledby": `simple-tab-${a}`,
    ...f,
    children: l === a && /* @__PURE__ */ i($, {
      sx: {
        p: 3,
        bgcolor: u
      },
      children: /* @__PURE__ */ i(S, {
        component: "div",
        children: o
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
const ct = ({
  data: t = [],
  textColor: o = "text.primary",
  color: l = "background.default",
  align: a = "center",
  activeColor: u = "primary.main",
  activeTextColor: f = "white"
}) => {
  const [c, d] = Ve.useState(0);
  return /* @__PURE__ */ y($, {
    sx: {
      p: 2,
      margin: "auto",
      maxWidth: "100%",
      maxHeight: "100%",
      flexGrow: 0
    },
    children: [/* @__PURE__ */ i($, {
      sx: {
        justifyContent: a,
        display: "flex"
      },
      children: /* @__PURE__ */ i(yr, {
        value: c,
        onChange: (p, g) => {
          d(g);
        },
        sx: {
          "& button:hover": {
            backgroundColor: u,
            color: f
          },
          "& button": {
            color: o
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
        children: t.map((p, g) => /* @__PURE__ */ i(wr, {
          label: p.titulo,
          ...Zr(g)
        }, `premed-tabs-${g}`))
      })
    }), t.map((p, g) => /* @__PURE__ */ y(Xr, {
      value: c,
      index: g,
      color: l,
      children: [/* @__PURE__ */ i($, {
        sx: {
          pl: p.margin
        },
        children: /* @__PURE__ */ i(S, {
          variant: p.variant ? p.variant : "body2",
          sx: {
            fontWeight: p.bold ? "bold" : "none"
          },
          component: "div",
          children: /* @__PURE__ */ i("p", {
            children: p.description
          })
        })
      }), p.componente]
    }, `premed-tabpanel-${g}`))]
  });
}, Qr = Er(_r({
  palette: {
    primary: {
      main: "#1ab394",
      contrastText: "#ffffff"
    },
    secondary: {
      main: "#f58048",
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
      main: "#FB8C00",
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
})), st = ({
  children: t
}) => /* @__PURE__ */ y(Tr, {
  theme: Qr,
  children: [/* @__PURE__ */ i(Rr, {
    enableColorScheme: !0
  }), t]
}), ut = ({
  data: t = {},
  handleClose: o,
  open: l,
  onClick: a,
  titulo: u = "Inserte un comentario",
  label: f = "Observaci\xF3n",
  instruccion: c = !1
}) => {
  let d = "row", h, p = "center";
  c && (d = "column", h = "all", p = "left");
  const g = Ae(), T = We(g.breakpoints.down("sm"));
  let P = "";
  const [k, j] = ce.useState(!0);
  return /* @__PURE__ */ i("div", {
    children: /* @__PURE__ */ y(Me, {
      fullWidth: !0,
      maxWidth: "md",
      fullScreen: T,
      onClose: o,
      "aria-labelledby": "customized-dialog-title",
      open: l,
      children: [/* @__PURE__ */ y(Cr, {
        children: [" ", u, " "]
      }), /* @__PURE__ */ y(Pr, {
        dividers: !0,
        children: [/* @__PURE__ */ i(qr, {
          data: t,
          color: "background.paper",
          sizeRow: h,
          flexD: d,
          align: p
        }), /* @__PURE__ */ i("p", {}), /* @__PURE__ */ i(S, {
          gutterBottom: !0,
          children: /* @__PURE__ */ y("b", {
            children: [" ", f, " "]
          })
        }), /* @__PURE__ */ i(le, {
          sx: {
            width: "100%"
          },
          placeholder: "Ingresar comentario(s)",
          multiline: !0,
          rows: 5,
          onChange: (M) => {
            P = M.target.value, P.replace(/ /g, "").length >= 10 ? j(!1) : j(!0);
          }
        })]
      }), /* @__PURE__ */ i("p", {}), /* @__PURE__ */ y(Sr, {
        children: [/* @__PURE__ */ i(oe, {
          variant: "outlined",
          color: "error",
          onClick: o,
          children: "Cancelar"
        }), /* @__PURE__ */ i(oe, {
          disabled: k,
          variant: "contained",
          color: "primary",
          onClick: () => {
            a(P), o(), j(!0);
          },
          children: "Agregar"
        })]
      })]
    })
  });
}, ft = ({
  data: t = []
}) => {
  let o = 0, l = 0, a = 12;
  t.map((c) => {
    c.width ? o += c.width : l += 1;
  }), et(t), a -= o, a /= l;
  const u = Ae(), f = We(u.breakpoints.down("md"));
  return /* @__PURE__ */ i(w, {
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
    children: t.map((c, d) => /* @__PURE__ */ i(w, {
      container: !0,
      item: !0,
      xs: f ? 12 : c.width ? c.width : a,
      children: /* @__PURE__ */ i(w, {
        container: !0,
        sx: {
          display: "flex",
          flexDirection: "column"
        },
        children: /* @__PURE__ */ y(w, {
          container: !0,
          sx: {
            height: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: c.alignVertical ? c.alignVertical == "top" ? "flex-start" : c.alignVertical == "bottom" ? "flex-end" : c.alignVertical == "center" ? "center" : "flex-start" : "flex-start",
            alignItems: c.alignHorizontal ? c.alignHorizontal == "left" ? "flex-start" : c.alignHorizontal == "right" ? "flex-end" : c.alignHorizontal == "center" ? "center" : "flex-start" : "flex-start"
          },
          children: [/* @__PURE__ */ i(w, {
            container: !0,
            sx: {
              display: "flex",
              flexDirection: "column",
              alignItems: c.alignTitulo ? c.alignTitulo == "left" ? "flex-start" : c.alignTitulo == "right" ? "flex-end" : c.alignTitulo == "center" ? "center" : "flex-start" : "flex-start"
            },
            children: /* @__PURE__ */ i($, {
              children: c.titulo ? /* @__PURE__ */ i(S, {
                variant: "body1",
                children: /* @__PURE__ */ i("b", {
                  children: c.titulo
                })
              }) : ""
            })
          }), /* @__PURE__ */ i($, {
            children: c.componente
          })]
        })
      })
    }, `premed-grid-${d}`))
  });
};
function et(t) {
  if (t.length > 0)
    return !0;
  throw new Error("La data debe de contener al menos un (1) elemento.");
}
const rt = Ve.forwardRef(function(o, l) {
  return /* @__PURE__ */ i(Or, {
    direction: "up",
    ref: l,
    ...o
  });
}), dt = ({
  id: t,
  title: o,
  open: l,
  handleClose: a,
  children: u
}) => /* @__PURE__ */ i("div", {
  children: /* @__PURE__ */ y(Me, {
    id: t,
    fullScreen: !0,
    open: l,
    onClose: a,
    TransitionComponent: rt,
    children: [/* @__PURE__ */ i(kr, {
      sx: {
        position: "relative"
      },
      children: /* @__PURE__ */ y(Dr, {
        children: [/* @__PURE__ */ i(jr, {
          edge: "start",
          color: "inherit",
          onClick: a,
          "aria-label": "close",
          children: /* @__PURE__ */ i(Yr, {})
        }), /* @__PURE__ */ i(S, {
          sx: {
            ml: 2,
            flex: 1
          },
          variant: "h6",
          component: "div",
          children: o
        })]
      })
    }), u]
  })
}), mt = ({
  label: t,
  bgcolor: o = "primary",
  color: l = "primary",
  variant: a = "h4",
  elevation: u = 2,
  align: f = "inherit"
}) => /* @__PURE__ */ i(Fr, {
  sx: {
    pl: "4%",
    bgcolor: `${o}.main`,
    color: `${l}.contrastText`,
    borderRadius: 0
  },
  elevation: u,
  children: /* @__PURE__ */ i(S, {
    component: "div",
    variant: a,
    align: f,
    children: t
  })
}), ht = (t) => {
  const o = K(t.form.touched, t.field.name), l = K(t.form.errors, t.field.name), {
    error: a,
    helperText: u,
    field: f,
    form: c,
    options: d,
    unstructured: h,
    getOptionLabel: p,
    ...g
  } = t, {
    setTouched: T,
    setFieldValue: P
  } = c, {
    name: k
  } = f;
  return /* @__PURE__ */ i(Ir, {
    options: d,
    getOptionLabel: p,
    onChange: (j, A) => {
      const M = A || null;
      if (T({
        [k]: M === null
      }), h !== null) {
        h == null || h.forEach((D) => P(D.key, A ? A[D.key] : D.defaultValue));
        return;
      }
      P(k, M);
    },
    onBlur: () => T({
      [k]: !0
    }),
    renderInput: (j) => /* @__PURE__ */ i(le, {
      error: a != null ? a : Boolean(o && l),
      helperText: u != null ? u : o && l ? l : void 0,
      ...j,
      ...f,
      ...g
    })
  });
}, vt = (t) => {
  const {
    error: o,
    field: l,
    form: a,
    options: u,
    ...f
  } = t, {
    setFieldValue: c
  } = a, {
    name: d
  } = l, {
    label: h
  } = f;
  return /* @__PURE__ */ y($r, {
    fullWidth: !0,
    children: [/* @__PURE__ */ i(Ar, {
      id: `premed-select-${h}`,
      children: h
    }), /* @__PURE__ */ i(Wr, {
      labelId: `premed-select-${h}`,
      ...l,
      onChange: (p) => {
        c(d, p.target.value);
      },
      ...f,
      children: u == null ? void 0 : u.map((p, g) => /* @__PURE__ */ i(Mr, {
        value: p.value,
        children: p.label
      }, `options-${g}-${p.value}`))
    })]
  });
}, pt = (t) => {
  const o = K(t.form.touched, t.field.name), l = K(t.form.errors, t.field.name), {
    error: a,
    helperText: u,
    field: f,
    form: c,
    ...d
  } = t;
  return /* @__PURE__ */ i(le, {
    variant: "outlined",
    error: a != null ? a : Boolean(o && l),
    helperText: u != null ? u : o && l ? l : void 0,
    ...d,
    ...f
  });
}, gt = (t) => {
  const {
    form: o,
    label: l,
    field: a,
    ...u
  } = t, {
    setFieldValue: f,
    values: c
  } = o, {
    name: d
  } = a;
  return /* @__PURE__ */ i(Vr, {
    control: /* @__PURE__ */ i(Lr, {}),
    label: l,
    checked: c[d],
    onChange: () => f(d, !c[d])
  });
};
export {
  ot as PremedButtonFilePicker,
  ut as PremedCommentDialog,
  lt as PremedCommentsCard,
  ft as PremedContainer,
  ht as PremedFormAutocomplete,
  gt as PremedFormCheckBox,
  vt as PremedFormSelect,
  pt as PremedFormTextField,
  dt as PremedFullDialog,
  qr as PremedProfileCard,
  mt as PremedSectionTitle,
  ct as PremedTabs,
  st as PremedTheme
};
//# sourceMappingURL=premed-ui.js.map
