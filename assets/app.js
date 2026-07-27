var Jv = Object.create;
var Kf = Object.defineProperty;
var wv = Object.getOwnPropertyDescriptor;
var Wv = Object.getOwnPropertyNames;
var $v = Object.getPrototypeOf,
  kv = Object.prototype.hasOwnProperty;
var Fl = (l, t) => () => (t || l((t = { exports: {} }).exports, t), t.exports);
var Fv = (l, t, a, e) => {
  if ((t && typeof t == "object") || typeof t == "function")
    for (let u of Wv(t))
      !kv.call(l, u) &&
        u !== a &&
        Kf(l, u, {
          get: () => t[u],
          enumerable: !(e = wv(t, u)) || e.enumerable,
        });
  return l;
};
var za = (l, t, a) => (
  (a = l != null ? Jv($v(l)) : {}),
  Fv(
    t || !l || !l.__esModule
      ? Kf(a, "default", { value: l, enumerable: !0 })
      : a,
    l,
  )
);
var to = Fl((k) => {
  "use strict";
  function ti(l, t) {
    var a = l.length;
    l.push(t);
    l: for (; 0 < a; ) {
      var e = (a - 1) >>> 1,
        u = l[e];
      if (0 < bu(u, t)) ((l[e] = t), (l[a] = u), (a = e));
      else break l;
    }
  }
  function Il(l) {
    return l.length === 0 ? null : l[0];
  }
  function zu(l) {
    if (l.length === 0) return null;
    var t = l[0],
      a = l.pop();
    if (a !== t) {
      l[0] = a;
      l: for (var e = 0, u = l.length, n = u >>> 1; e < n; ) {
        var i = 2 * (e + 1) - 1,
          c = l[i],
          f = i + 1,
          v = l[f];
        if (0 > bu(c, a))
          f < u && 0 > bu(v, c)
            ? ((l[e] = v), (l[f] = a), (e = f))
            : ((l[e] = c), (l[i] = a), (e = i));
        else if (f < u && 0 > bu(v, a)) ((l[e] = v), (l[f] = a), (e = f));
        else break l;
      }
    }
    return t;
  }
  function bu(l, t) {
    var a = l.sortIndex - t.sortIndex;
    return a !== 0 ? a : l.id - t.id;
  }
  k.unstable_now = void 0;
  typeof performance == "object" && typeof performance.now == "function"
    ? ((Jf = performance),
      (k.unstable_now = function () {
        return Jf.now();
      }))
    : ((In = Date),
      (wf = In.now()),
      (k.unstable_now = function () {
        return In.now() - wf;
      }));
  var Jf,
    In,
    wf,
    nt = [],
    _t = [],
    Iv = 1,
    Gl = null,
    gl = 3,
    ai = !1,
    he = !1,
    ge = !1,
    ei = !1,
    kf = typeof setTimeout == "function" ? setTimeout : null,
    Ff = typeof clearTimeout == "function" ? clearTimeout : null,
    Wf = typeof setImmediate < "u" ? setImmediate : null;
  function pu(l) {
    for (var t = Il(_t); t !== null; ) {
      if (t.callback === null) zu(_t);
      else if (t.startTime <= l)
        (zu(_t), (t.sortIndex = t.expirationTime), ti(nt, t));
      else break;
      t = Il(_t);
    }
  }
  function ui(l) {
    if (((ge = !1), pu(l), !he))
      if (Il(nt) !== null) ((he = !0), Ea || ((Ea = !0), Ta()));
      else {
        var t = Il(_t);
        t !== null && ni(ui, t.startTime - l);
      }
  }
  var Ea = !1,
    re = -1,
    If = 5,
    Pf = -1;
  function lo() {
    return ei ? !0 : !(k.unstable_now() - Pf < If);
  }
  function Pn() {
    if (((ei = !1), Ea)) {
      var l = k.unstable_now();
      Pf = l;
      var t = !0;
      try {
        l: {
          ((he = !1), ge && ((ge = !1), Ff(re), (re = -1)), (ai = !0));
          var a = gl;
          try {
            t: {
              for (
                pu(l), Gl = Il(nt);
                Gl !== null && !(Gl.expirationTime > l && lo());
              ) {
                var e = Gl.callback;
                if (typeof e == "function") {
                  ((Gl.callback = null), (gl = Gl.priorityLevel));
                  var u = e(Gl.expirationTime <= l);
                  if (((l = k.unstable_now()), typeof u == "function")) {
                    ((Gl.callback = u), pu(l), (t = !0));
                    break t;
                  }
                  (Gl === Il(nt) && zu(nt), pu(l));
                } else zu(nt);
                Gl = Il(nt);
              }
              if (Gl !== null) t = !0;
              else {
                var n = Il(_t);
                (n !== null && ni(ui, n.startTime - l), (t = !1));
              }
            }
            break l;
          } finally {
            ((Gl = null), (gl = a), (ai = !1));
          }
          t = void 0;
        }
      } finally {
        t ? Ta() : (Ea = !1);
      }
    }
  }
  var Ta;
  typeof Wf == "function"
    ? (Ta = function () {
        Wf(Pn);
      })
    : typeof MessageChannel < "u"
      ? ((li = new MessageChannel()),
        ($f = li.port2),
        (li.port1.onmessage = Pn),
        (Ta = function () {
          $f.postMessage(null);
        }))
      : (Ta = function () {
          kf(Pn, 0);
        });
  var li, $f;
  function ni(l, t) {
    re = kf(function () {
      l(k.unstable_now());
    }, t);
  }
  k.unstable_IdlePriority = 5;
  k.unstable_ImmediatePriority = 1;
  k.unstable_LowPriority = 4;
  k.unstable_NormalPriority = 3;
  k.unstable_Profiling = null;
  k.unstable_UserBlockingPriority = 2;
  k.unstable_cancelCallback = function (l) {
    l.callback = null;
  };
  k.unstable_forceFrameRate = function (l) {
    0 > l || 125 < l
      ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
        )
      : (If = 0 < l ? Math.floor(1e3 / l) : 5);
  };
  k.unstable_getCurrentPriorityLevel = function () {
    return gl;
  };
  k.unstable_next = function (l) {
    switch (gl) {
      case 1:
      case 2:
      case 3:
        var t = 3;
        break;
      default:
        t = gl;
    }
    var a = gl;
    gl = t;
    try {
      return l();
    } finally {
      gl = a;
    }
  };
  k.unstable_requestPaint = function () {
    ei = !0;
  };
  k.unstable_runWithPriority = function (l, t) {
    switch (l) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        l = 3;
    }
    var a = gl;
    gl = l;
    try {
      return t();
    } finally {
      gl = a;
    }
  };
  k.unstable_scheduleCallback = function (l, t, a) {
    var e = k.unstable_now();
    switch (
      (typeof a == "object" && a !== null
        ? ((a = a.delay), (a = typeof a == "number" && 0 < a ? e + a : e))
        : (a = e),
      l)
    ) {
      case 1:
        var u = -1;
        break;
      case 2:
        u = 250;
        break;
      case 5:
        u = 1073741823;
        break;
      case 4:
        u = 1e4;
        break;
      default:
        u = 5e3;
    }
    return (
      (u = a + u),
      (l = {
        id: Iv++,
        callback: t,
        priorityLevel: l,
        startTime: a,
        expirationTime: u,
        sortIndex: -1,
      }),
      a > e
        ? ((l.sortIndex = a),
          ti(_t, l),
          Il(nt) === null &&
            l === Il(_t) &&
            (ge ? (Ff(re), (re = -1)) : (ge = !0), ni(ui, a - e)))
        : ((l.sortIndex = u),
          ti(nt, l),
          he || ai || ((he = !0), Ea || ((Ea = !0), Ta()))),
      l
    );
  };
  k.unstable_shouldYield = lo;
  k.unstable_wrapCallback = function (l) {
    var t = gl;
    return function () {
      var a = gl;
      gl = t;
      try {
        return l.apply(this, arguments);
      } finally {
        gl = a;
      }
    };
  };
});
var eo = Fl((ky, ao) => {
  "use strict";
  ao.exports = to();
});
var ho = Fl((_) => {
  "use strict";
  var fi = Symbol.for("react.transitional.element"),
    Pv = Symbol.for("react.portal"),
    lm = Symbol.for("react.fragment"),
    tm = Symbol.for("react.strict_mode"),
    am = Symbol.for("react.profiler"),
    em = Symbol.for("react.consumer"),
    um = Symbol.for("react.context"),
    nm = Symbol.for("react.forward_ref"),
    im = Symbol.for("react.suspense"),
    cm = Symbol.for("react.memo"),
    fo = Symbol.for("react.lazy"),
    fm = Symbol.for("react.activity"),
    uo = Symbol.iterator;
  function om(l) {
    return l === null || typeof l != "object"
      ? null
      : ((l = (uo && l[uo]) || l["@@iterator"]),
        typeof l == "function" ? l : null);
  }
  var oo = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    so = Object.assign,
    vo = {};
  function Oa(l, t, a) {
    ((this.props = l),
      (this.context = t),
      (this.refs = vo),
      (this.updater = a || oo));
  }
  Oa.prototype.isReactComponent = {};
  Oa.prototype.setState = function (l, t) {
    if (typeof l != "object" && typeof l != "function" && l != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables.",
      );
    this.updater.enqueueSetState(this, l, t, "setState");
  };
  Oa.prototype.forceUpdate = function (l) {
    this.updater.enqueueForceUpdate(this, l, "forceUpdate");
  };
  function mo() {}
  mo.prototype = Oa.prototype;
  function oi(l, t, a) {
    ((this.props = l),
      (this.context = t),
      (this.refs = vo),
      (this.updater = a || oo));
  }
  var si = (oi.prototype = new mo());
  si.constructor = oi;
  so(si, Oa.prototype);
  si.isPureReactComponent = !0;
  var no = Array.isArray;
  function ci() {}
  var J = { H: null, A: null, T: null, S: null },
    yo = Object.prototype.hasOwnProperty;
  function di(l, t, a) {
    var e = a.ref;
    return {
      $$typeof: fi,
      type: l,
      key: t,
      ref: e !== void 0 ? e : null,
      props: a,
    };
  }
  function sm(l, t) {
    return di(l.type, t, l.props);
  }
  function vi(l) {
    return typeof l == "object" && l !== null && l.$$typeof === fi;
  }
  function dm(l) {
    var t = { "=": "=0", ":": "=2" };
    return (
      "$" +
      l.replace(/[=:]/g, function (a) {
        return t[a];
      })
    );
  }
  var io = /\/+/g;
  function ii(l, t) {
    return typeof l == "object" && l !== null && l.key != null
      ? dm("" + l.key)
      : t.toString(36);
  }
  function vm(l) {
    switch (l.status) {
      case "fulfilled":
        return l.value;
      case "rejected":
        throw l.reason;
      default:
        switch (
          (typeof l.status == "string"
            ? l.then(ci, ci)
            : ((l.status = "pending"),
              l.then(
                function (t) {
                  l.status === "pending" &&
                    ((l.status = "fulfilled"), (l.value = t));
                },
                function (t) {
                  l.status === "pending" &&
                    ((l.status = "rejected"), (l.reason = t));
                },
              )),
          l.status)
        ) {
          case "fulfilled":
            return l.value;
          case "rejected":
            throw l.reason;
        }
    }
    throw l;
  }
  function Aa(l, t, a, e, u) {
    var n = typeof l;
    (n === "undefined" || n === "boolean") && (l = null);
    var i = !1;
    if (l === null) i = !0;
    else
      switch (n) {
        case "bigint":
        case "string":
        case "number":
          i = !0;
          break;
        case "object":
          switch (l.$$typeof) {
            case fi:
            case Pv:
              i = !0;
              break;
            case fo:
              return ((i = l._init), Aa(i(l._payload), t, a, e, u));
          }
      }
    if (i)
      return (
        (u = u(l)),
        (i = e === "" ? "." + ii(l, 0) : e),
        no(u)
          ? ((a = ""),
            i != null && (a = i.replace(io, "$&/") + "/"),
            Aa(u, t, a, "", function (v) {
              return v;
            }))
          : u != null &&
            (vi(u) &&
              (u = sm(
                u,
                a +
                  (u.key == null || (l && l.key === u.key)
                    ? ""
                    : ("" + u.key).replace(io, "$&/") + "/") +
                  i,
              )),
            t.push(u)),
        1
      );
    i = 0;
    var c = e === "" ? "." : e + ":";
    if (no(l))
      for (var f = 0; f < l.length; f++)
        ((e = l[f]), (n = c + ii(e, f)), (i += Aa(e, t, a, n, u)));
    else if (((f = om(l)), typeof f == "function"))
      for (l = f.call(l), f = 0; !(e = l.next()).done; )
        ((e = e.value), (n = c + ii(e, f++)), (i += Aa(e, t, a, n, u)));
    else if (n === "object") {
      if (typeof l.then == "function") return Aa(vm(l), t, a, e, u);
      throw (
        (t = String(l)),
        Error(
          "Objects are not valid as a React child (found: " +
            (t === "[object Object]"
              ? "object with keys {" + Object.keys(l).join(", ") + "}"
              : t) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return i;
  }
  function Tu(l, t, a) {
    if (l == null) return l;
    var e = [],
      u = 0;
    return (
      Aa(l, e, "", "", function (n) {
        return t.call(a, n, u++);
      }),
      e
    );
  }
  function mm(l) {
    if (l._status === -1) {
      var t = l._result;
      ((t = t()),
        t.then(
          function (a) {
            (l._status === 0 || l._status === -1) &&
              ((l._status = 1), (l._result = a));
          },
          function (a) {
            (l._status === 0 || l._status === -1) &&
              ((l._status = 2), (l._result = a));
          },
        ),
        l._status === -1 && ((l._status = 0), (l._result = t)));
    }
    if (l._status === 1) return l._result.default;
    throw l._result;
  }
  var co =
      typeof reportError == "function"
        ? reportError
        : function (l) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof l == "object" &&
                  l !== null &&
                  typeof l.message == "string"
                    ? String(l.message)
                    : String(l),
                error: l,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", l);
              return;
            }
            console.error(l);
          },
    ym = {
      map: Tu,
      forEach: function (l, t, a) {
        Tu(
          l,
          function () {
            t.apply(this, arguments);
          },
          a,
        );
      },
      count: function (l) {
        var t = 0;
        return (
          Tu(l, function () {
            t++;
          }),
          t
        );
      },
      toArray: function (l) {
        return (
          Tu(l, function (t) {
            return t;
          }) || []
        );
      },
      only: function (l) {
        if (!vi(l))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return l;
      },
    };
  _.Activity = fm;
  _.Children = ym;
  _.Component = Oa;
  _.Fragment = lm;
  _.Profiler = am;
  _.PureComponent = oi;
  _.StrictMode = tm;
  _.Suspense = im;
  _.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = J;
  _.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function (l) {
      return J.H.useMemoCache(l);
    },
  };
  _.cache = function (l) {
    return function () {
      return l.apply(null, arguments);
    };
  };
  _.cacheSignal = function () {
    return null;
  };
  _.cloneElement = function (l, t, a) {
    if (l == null)
      throw Error(
        "The argument must be a React element, but you passed " + l + ".",
      );
    var e = so({}, l.props),
      u = l.key;
    if (t != null)
      for (n in (t.key !== void 0 && (u = "" + t.key), t))
        !yo.call(t, n) ||
          n === "key" ||
          n === "__self" ||
          n === "__source" ||
          (n === "ref" && t.ref === void 0) ||
          (e[n] = t[n]);
    var n = arguments.length - 2;
    if (n === 1) e.children = a;
    else if (1 < n) {
      for (var i = Array(n), c = 0; c < n; c++) i[c] = arguments[c + 2];
      e.children = i;
    }
    return di(l.type, u, e);
  };
  _.createContext = function (l) {
    return (
      (l = {
        $$typeof: um,
        _currentValue: l,
        _currentValue2: l,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
      }),
      (l.Provider = l),
      (l.Consumer = { $$typeof: em, _context: l }),
      l
    );
  };
  _.createElement = function (l, t, a) {
    var e,
      u = {},
      n = null;
    if (t != null)
      for (e in (t.key !== void 0 && (n = "" + t.key), t))
        yo.call(t, e) &&
          e !== "key" &&
          e !== "__self" &&
          e !== "__source" &&
          (u[e] = t[e]);
    var i = arguments.length - 2;
    if (i === 1) u.children = a;
    else if (1 < i) {
      for (var c = Array(i), f = 0; f < i; f++) c[f] = arguments[f + 2];
      u.children = c;
    }
    if (l && l.defaultProps)
      for (e in ((i = l.defaultProps), i)) u[e] === void 0 && (u[e] = i[e]);
    return di(l, n, u);
  };
  _.createRef = function () {
    return { current: null };
  };
  _.forwardRef = function (l) {
    return { $$typeof: nm, render: l };
  };
  _.isValidElement = vi;
  _.lazy = function (l) {
    return { $$typeof: fo, _payload: { _status: -1, _result: l }, _init: mm };
  };
  _.memo = function (l, t) {
    return { $$typeof: cm, type: l, compare: t === void 0 ? null : t };
  };
  _.startTransition = function (l) {
    var t = J.T,
      a = {};
    J.T = a;
    try {
      var e = l(),
        u = J.S;
      (u !== null && u(a, e),
        typeof e == "object" &&
          e !== null &&
          typeof e.then == "function" &&
          e.then(ci, co));
    } catch (n) {
      co(n);
    } finally {
      (t !== null && a.types !== null && (t.types = a.types), (J.T = t));
    }
  };
  _.unstable_useCacheRefresh = function () {
    return J.H.useCacheRefresh();
  };
  _.use = function (l) {
    return J.H.use(l);
  };
  _.useActionState = function (l, t, a) {
    return J.H.useActionState(l, t, a);
  };
  _.useCallback = function (l, t) {
    return J.H.useCallback(l, t);
  };
  _.useContext = function (l) {
    return J.H.useContext(l);
  };
  _.useDebugValue = function () {};
  _.useDeferredValue = function (l, t) {
    return J.H.useDeferredValue(l, t);
  };
  _.useEffect = function (l, t) {
    return J.H.useEffect(l, t);
  };
  _.useEffectEvent = function (l) {
    return J.H.useEffectEvent(l);
  };
  _.useId = function () {
    return J.H.useId();
  };
  _.useImperativeHandle = function (l, t, a) {
    return J.H.useImperativeHandle(l, t, a);
  };
  _.useInsertionEffect = function (l, t) {
    return J.H.useInsertionEffect(l, t);
  };
  _.useLayoutEffect = function (l, t) {
    return J.H.useLayoutEffect(l, t);
  };
  _.useMemo = function (l, t) {
    return J.H.useMemo(l, t);
  };
  _.useOptimistic = function (l, t) {
    return J.H.useOptimistic(l, t);
  };
  _.useReducer = function (l, t, a) {
    return J.H.useReducer(l, t, a);
  };
  _.useRef = function (l) {
    return J.H.useRef(l);
  };
  _.useState = function (l) {
    return J.H.useState(l);
  };
  _.useSyncExternalStore = function (l, t, a) {
    return J.H.useSyncExternalStore(l, t, a);
  };
  _.useTransition = function () {
    return J.H.useTransition();
  };
  _.version = "19.2.6";
});
var Eu = Fl((Iy, go) => {
  "use strict";
  go.exports = ho();
});
var So = Fl((Sl) => {
  "use strict";
  var hm = Eu();
  function ro(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      l +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function Nt() {}
  var rl = {
      d: {
        f: Nt,
        r: function () {
          throw Error(ro(522));
        },
        D: Nt,
        C: Nt,
        L: Nt,
        m: Nt,
        X: Nt,
        S: Nt,
        M: Nt,
      },
      p: 0,
      findDOMNode: null,
    },
    gm = Symbol.for("react.portal");
  function rm(l, t, a) {
    var e =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: gm,
      key: e == null ? null : "" + e,
      children: l,
      containerInfo: t,
      implementation: a,
    };
  }
  var Se = hm.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function Au(l, t) {
    if (l === "font") return "";
    if (typeof t == "string") return t === "use-credentials" ? t : "";
  }
  Sl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = rl;
  Sl.createPortal = function (l, t) {
    var a =
      2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11))
      throw Error(ro(299));
    return rm(l, t, null, a);
  };
  Sl.flushSync = function (l) {
    var t = Se.T,
      a = rl.p;
    try {
      if (((Se.T = null), (rl.p = 2), l)) return l();
    } finally {
      ((Se.T = t), (rl.p = a), rl.d.f());
    }
  };
  Sl.preconnect = function (l, t) {
    typeof l == "string" &&
      (t
        ? ((t = t.crossOrigin),
          (t =
            typeof t == "string" ? (t === "use-credentials" ? t : "") : void 0))
        : (t = null),
      rl.d.C(l, t));
  };
  Sl.prefetchDNS = function (l) {
    typeof l == "string" && rl.d.D(l);
  };
  Sl.preinit = function (l, t) {
    if (typeof l == "string" && t && typeof t.as == "string") {
      var a = t.as,
        e = Au(a, t.crossOrigin),
        u = typeof t.integrity == "string" ? t.integrity : void 0,
        n = typeof t.fetchPriority == "string" ? t.fetchPriority : void 0;
      a === "style"
        ? rl.d.S(l, typeof t.precedence == "string" ? t.precedence : void 0, {
            crossOrigin: e,
            integrity: u,
            fetchPriority: n,
          })
        : a === "script" &&
          rl.d.X(l, {
            crossOrigin: e,
            integrity: u,
            fetchPriority: n,
            nonce: typeof t.nonce == "string" ? t.nonce : void 0,
          });
    }
  };
  Sl.preinitModule = function (l, t) {
    if (typeof l == "string")
      if (typeof t == "object" && t !== null) {
        if (t.as == null || t.as === "script") {
          var a = Au(t.as, t.crossOrigin);
          rl.d.M(l, {
            crossOrigin: a,
            integrity: typeof t.integrity == "string" ? t.integrity : void 0,
            nonce: typeof t.nonce == "string" ? t.nonce : void 0,
          });
        }
      } else t == null && rl.d.M(l);
  };
  Sl.preload = function (l, t) {
    if (
      typeof l == "string" &&
      typeof t == "object" &&
      t !== null &&
      typeof t.as == "string"
    ) {
      var a = t.as,
        e = Au(a, t.crossOrigin);
      rl.d.L(l, a, {
        crossOrigin: e,
        integrity: typeof t.integrity == "string" ? t.integrity : void 0,
        nonce: typeof t.nonce == "string" ? t.nonce : void 0,
        type: typeof t.type == "string" ? t.type : void 0,
        fetchPriority:
          typeof t.fetchPriority == "string" ? t.fetchPriority : void 0,
        referrerPolicy:
          typeof t.referrerPolicy == "string" ? t.referrerPolicy : void 0,
        imageSrcSet: typeof t.imageSrcSet == "string" ? t.imageSrcSet : void 0,
        imageSizes: typeof t.imageSizes == "string" ? t.imageSizes : void 0,
        media: typeof t.media == "string" ? t.media : void 0,
      });
    }
  };
  Sl.preloadModule = function (l, t) {
    if (typeof l == "string")
      if (t) {
        var a = Au(t.as, t.crossOrigin);
        rl.d.m(l, {
          as: typeof t.as == "string" && t.as !== "script" ? t.as : void 0,
          crossOrigin: a,
          integrity: typeof t.integrity == "string" ? t.integrity : void 0,
        });
      } else rl.d.m(l);
  };
  Sl.requestFormReset = function (l) {
    rl.d.r(l);
  };
  Sl.unstable_batchedUpdates = function (l, t) {
    return l(t);
  };
  Sl.useFormState = function (l, t, a) {
    return Se.H.useFormState(l, t, a);
  };
  Sl.useFormStatus = function () {
    return Se.H.useHostTransitionStatus();
  };
  Sl.version = "19.2.6";
});
var zo = Fl((lh, po) => {
  "use strict";
  function bo() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bo);
      } catch (l) {
        console.error(l);
      }
  }
  (bo(), (po.exports = So()));
});
var Rv = Fl((kn) => {
  "use strict";
  var cl = eo(),
    ws = Eu(),
    Sm = zo();
  function b(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      l +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function Ws(l) {
    return !(!l || (l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11));
  }
  function uu(l) {
    var t = l,
      a = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do ((t = l), (t.flags & 4098) !== 0 && (a = t.return), (l = t.return));
      while (l);
    }
    return t.tag === 3 ? a : null;
  }
  function $s(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function ks(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function To(l) {
    if (uu(l) !== l) throw Error(b(188));
  }
  function bm(l) {
    var t = l.alternate;
    if (!t) {
      if (((t = uu(l)), t === null)) throw Error(b(188));
      return t !== l ? null : l;
    }
    for (var a = l, e = t; ; ) {
      var u = a.return;
      if (u === null) break;
      var n = u.alternate;
      if (n === null) {
        if (((e = u.return), e !== null)) {
          a = e;
          continue;
        }
        break;
      }
      if (u.child === n.child) {
        for (n = u.child; n; ) {
          if (n === a) return (To(u), l);
          if (n === e) return (To(u), t);
          n = n.sibling;
        }
        throw Error(b(188));
      }
      if (a.return !== e.return) ((a = u), (e = n));
      else {
        for (var i = !1, c = u.child; c; ) {
          if (c === a) {
            ((i = !0), (a = u), (e = n));
            break;
          }
          if (c === e) {
            ((i = !0), (e = u), (a = n));
            break;
          }
          c = c.sibling;
        }
        if (!i) {
          for (c = n.child; c; ) {
            if (c === a) {
              ((i = !0), (a = n), (e = u));
              break;
            }
            if (c === e) {
              ((i = !0), (e = n), (a = u));
              break;
            }
            c = c.sibling;
          }
          if (!i) throw Error(b(189));
        }
      }
      if (a.alternate !== e) throw Error(b(190));
    }
    if (a.tag !== 3) throw Error(b(188));
    return a.stateNode.current === a ? l : t;
  }
  function Fs(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (((t = Fs(l)), t !== null)) return t;
      l = l.sibling;
    }
    return null;
  }
  var $ = Object.assign,
    pm = Symbol.for("react.element"),
    Ou = Symbol.for("react.transitional.element"),
    Me = Symbol.for("react.portal"),
    Ha = Symbol.for("react.fragment"),
    Is = Symbol.for("react.strict_mode"),
    Ji = Symbol.for("react.profiler"),
    Ps = Symbol.for("react.consumer"),
    mt = Symbol.for("react.context"),
    xc = Symbol.for("react.forward_ref"),
    wi = Symbol.for("react.suspense"),
    Wi = Symbol.for("react.suspense_list"),
    Lc = Symbol.for("react.memo"),
    Dt = Symbol.for("react.lazy"),
    $i = Symbol.for("react.activity"),
    zm = Symbol.for("react.memo_cache_sentinel"),
    Eo = Symbol.iterator;
  function be(l) {
    return l === null || typeof l != "object"
      ? null
      : ((l = (Eo && l[Eo]) || l["@@iterator"]),
        typeof l == "function" ? l : null);
  }
  var Tm = Symbol.for("react.client.reference");
  function ki(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Tm ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Ha:
        return "Fragment";
      case Ji:
        return "Profiler";
      case Is:
        return "StrictMode";
      case wi:
        return "Suspense";
      case Wi:
        return "SuspenseList";
      case $i:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Me:
          return "Portal";
        case mt:
          return l.displayName || "Context";
        case Ps:
          return (l._context.displayName || "Context") + ".Consumer";
        case xc:
          var t = l.render;
          return (
            (l = l.displayName),
            l ||
              ((l = t.displayName || t.name || ""),
              (l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef")),
            l
          );
        case Lc:
          return (
            (t = l.displayName || null),
            t !== null ? t : ki(l.type) || "Memo"
          );
        case Dt:
          ((t = l._payload), (l = l._init));
          try {
            return ki(l(t));
          } catch {}
      }
    return null;
  }
  var _e = Array.isArray,
    O = ws.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    j = Sm.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    ia = { pending: !1, data: null, method: null, action: null },
    Fi = [],
    Ca = -1;
  function et(l) {
    return { current: l };
  }
  function sl(l) {
    0 > Ca || ((l.current = Fi[Ca]), (Fi[Ca] = null), Ca--);
  }
  function K(l, t) {
    (Ca++, (Fi[Ca] = l.current), (l.current = t));
  }
  var at = et(null),
    Ve = et(null),
    Qt = et(null),
    un = et(null);
  function nn(l, t) {
    switch ((K(Qt, t), K(Ve, l), K(at, null), t.nodeType)) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? Us(l) : 0;
        break;
      default:
        if (((l = t.tagName), (t = t.namespaceURI)))
          ((t = Us(t)), (l = bv(t, l)));
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    (sl(at), K(at, l));
  }
  function ka() {
    (sl(at), sl(Ve), sl(Qt));
  }
  function Ii(l) {
    l.memoizedState !== null && K(un, l);
    var t = at.current,
      a = bv(t, l.type);
    t !== a && (K(Ve, l), K(at, a));
  }
  function cn(l) {
    (Ve.current === l && (sl(at), sl(Ve)),
      un.current === l && (sl(un), (tu._currentValue = ia)));
  }
  var mi, Ao;
  function aa(l) {
    if (mi === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        ((mi = (t && t[1]) || ""),
          (Ao =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      mi +
      l +
      Ao
    );
  }
  var yi = !1;
  function hi(l, t) {
    if (!l || yi) return "";
    yi = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var e = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var S = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(S.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(S, []);
                } catch (h) {
                  var y = h;
                }
                Reflect.construct(l, [], S);
              } else {
                try {
                  S.call();
                } catch (h) {
                  y = h;
                }
                l.call(S.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (h) {
                y = h;
              }
              (S = l()) &&
                typeof S.catch == "function" &&
                S.catch(function () {});
            }
          } catch (h) {
            if (h && y && typeof h.stack == "string") return [h.stack, y.stack];
          }
          return [null, null];
        },
      };
      e.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        e.DetermineComponentFrameRoot,
        "name",
      );
      u &&
        u.configurable &&
        Object.defineProperty(e.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var n = e.DetermineComponentFrameRoot(),
        i = n[0],
        c = n[1];
      if (i && c) {
        var f = i.split(`
`),
          v = c.split(`
`);
        for (
          u = e = 0;
          e < f.length && !f[e].includes("DetermineComponentFrameRoot");
        )
          e++;
        for (; u < v.length && !v[u].includes("DetermineComponentFrameRoot"); )
          u++;
        if (e === f.length || u === v.length)
          for (
            e = f.length - 1, u = v.length - 1;
            1 <= e && 0 <= u && f[e] !== v[u];
          )
            u--;
        for (; 1 <= e && 0 <= u; e--, u--)
          if (f[e] !== v[u]) {
            if (e !== 1 || u !== 1)
              do
                if ((e--, u--, 0 > u || f[e] !== v[u])) {
                  var g =
                    `
` + f[e].replace(" at new ", " at ");
                  return (
                    l.displayName &&
                      g.includes("<anonymous>") &&
                      (g = g.replace("<anonymous>", l.displayName)),
                    g
                  );
                }
              while (1 <= e && 0 <= u);
            break;
          }
      }
    } finally {
      ((yi = !1), (Error.prepareStackTrace = a));
    }
    return (a = l ? l.displayName || l.name : "") ? aa(a) : "";
  }
  function Em(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return aa(l.type);
      case 16:
        return aa("Lazy");
      case 13:
        return l.child !== t && t !== null
          ? aa("Suspense Fallback")
          : aa("Suspense");
      case 19:
        return aa("SuspenseList");
      case 0:
      case 15:
        return hi(l.type, !1);
      case 11:
        return hi(l.type.render, !1);
      case 1:
        return hi(l.type, !0);
      case 31:
        return aa("Activity");
      default:
        return "";
    }
  }
  function Oo(l) {
    try {
      var t = "",
        a = null;
      do ((t += Em(l, a)), (a = l), (l = l.return));
      while (l);
      return t;
    } catch (e) {
      return (
        `
Error generating stack: ` +
        e.message +
        `
` +
        e.stack
      );
    }
  }
  var Pi = Object.prototype.hasOwnProperty,
    Zc = cl.unstable_scheduleCallback,
    gi = cl.unstable_cancelCallback,
    Am = cl.unstable_shouldYield,
    Om = cl.unstable_requestPaint,
    Hl = cl.unstable_now,
    Mm = cl.unstable_getCurrentPriorityLevel,
    l0 = cl.unstable_ImmediatePriority,
    t0 = cl.unstable_UserBlockingPriority,
    fn = cl.unstable_NormalPriority,
    _m = cl.unstable_LowPriority,
    a0 = cl.unstable_IdlePriority,
    Nm = cl.log,
    Dm = cl.unstable_setDisableYieldValue,
    nu = null,
    Cl = null;
  function Bt(l) {
    if (
      (typeof Nm == "function" && Dm(l),
      Cl && typeof Cl.setStrictMode == "function")
    )
      try {
        Cl.setStrictMode(nu, l);
      } catch {}
  }
  var Rl = Math.clz32 ? Math.clz32 : Cm,
    Um = Math.log,
    Hm = Math.LN2;
  function Cm(l) {
    return ((l >>>= 0), l === 0 ? 32 : (31 - ((Um(l) / Hm) | 0)) | 0);
  }
  var Mu = 256,
    _u = 262144,
    Nu = 4194304;
  function ea(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function qn(l, t, a) {
    var e = l.pendingLanes;
    if (e === 0) return 0;
    var u = 0,
      n = l.suspendedLanes,
      i = l.pingedLanes;
    l = l.warmLanes;
    var c = e & 134217727;
    return (
      c !== 0
        ? ((e = c & ~n),
          e !== 0
            ? (u = ea(e))
            : ((i &= c),
              i !== 0
                ? (u = ea(i))
                : a || ((a = c & ~l), a !== 0 && (u = ea(a)))))
        : ((c = e & ~n),
          c !== 0
            ? (u = ea(c))
            : i !== 0
              ? (u = ea(i))
              : a || ((a = e & ~l), a !== 0 && (u = ea(a)))),
      u === 0
        ? 0
        : t !== 0 &&
            t !== u &&
            (t & n) === 0 &&
            ((n = u & -u),
            (a = t & -t),
            n >= a || (n === 32 && (a & 4194048) !== 0))
          ? t
          : u
    );
  }
  function iu(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function Rm(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function e0() {
    var l = Nu;
    return ((Nu <<= 1), (Nu & 62914560) === 0 && (Nu = 4194304), l);
  }
  function ri(l) {
    for (var t = [], a = 0; 31 > a; a++) t.push(l);
    return t;
  }
  function cu(l, t) {
    ((l.pendingLanes |= t),
      t !== 268435456 &&
        ((l.suspendedLanes = 0), (l.pingedLanes = 0), (l.warmLanes = 0)));
  }
  function qm(l, t, a, e, u, n) {
    var i = l.pendingLanes;
    ((l.pendingLanes = a),
      (l.suspendedLanes = 0),
      (l.pingedLanes = 0),
      (l.warmLanes = 0),
      (l.expiredLanes &= a),
      (l.entangledLanes &= a),
      (l.errorRecoveryDisabledLanes &= a),
      (l.shellSuspendCounter = 0));
    var c = l.entanglements,
      f = l.expirationTimes,
      v = l.hiddenUpdates;
    for (a = i & ~a; 0 < a; ) {
      var g = 31 - Rl(a),
        S = 1 << g;
      ((c[g] = 0), (f[g] = -1));
      var y = v[g];
      if (y !== null)
        for (v[g] = null, g = 0; g < y.length; g++) {
          var h = y[g];
          h !== null && (h.lane &= -536870913);
        }
      a &= ~S;
    }
    (e !== 0 && u0(l, e, 0),
      n !== 0 && u === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(i & ~t)));
  }
  function u0(l, t, a) {
    ((l.pendingLanes |= t), (l.suspendedLanes &= ~t));
    var e = 31 - Rl(t);
    ((l.entangledLanes |= t),
      (l.entanglements[e] = l.entanglements[e] | 1073741824 | (a & 261930)));
  }
  function n0(l, t) {
    var a = (l.entangledLanes |= t);
    for (l = l.entanglements; a; ) {
      var e = 31 - Rl(a),
        u = 1 << e;
      ((u & t) | (l[e] & t) && (l[e] |= t), (a &= ~u));
    }
  }
  function i0(l, t) {
    var a = t & -t;
    return (
      (a = (a & 42) !== 0 ? 1 : Vc(a)),
      (a & (l.suspendedLanes | t)) !== 0 ? 0 : a
    );
  }
  function Vc(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function Kc(l) {
    return (
      (l &= -l),
      2 < l ? (8 < l ? ((l & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function c0() {
    var l = j.p;
    return l !== 0 ? l : ((l = window.event), l === void 0 ? 32 : Uv(l.type));
  }
  function Mo(l, t) {
    var a = j.p;
    try {
      return ((j.p = l), t());
    } finally {
      j.p = a;
    }
  }
  var Pt = Math.random().toString(36).slice(2),
    vl = "__reactFiber$" + Pt,
    Ol = "__reactProps$" + Pt,
    ce = "__reactContainer$" + Pt,
    lc = "__reactEvents$" + Pt,
    Bm = "__reactListeners$" + Pt,
    Ym = "__reactHandles$" + Pt,
    _o = "__reactResources$" + Pt,
    fu = "__reactMarker$" + Pt;
  function Jc(l) {
    (delete l[vl], delete l[Ol], delete l[lc], delete l[Bm], delete l[Ym]);
  }
  function Ra(l) {
    var t = l[vl];
    if (t) return t;
    for (var a = l.parentNode; a; ) {
      if ((t = a[ce] || a[vl])) {
        if (
          ((a = t.alternate),
          t.child !== null || (a !== null && a.child !== null))
        )
          for (l = Bs(l); l !== null; ) {
            if ((a = l[vl])) return a;
            l = Bs(l);
          }
        return t;
      }
      ((l = a), (a = l.parentNode));
    }
    return null;
  }
  function fe(l) {
    if ((l = l[vl] || l[ce])) {
      var t = l.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return l;
    }
    return null;
  }
  function Ne(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(b(33));
  }
  function Za(l) {
    var t = l[_o];
    return (
      t ||
        (t = l[_o] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function ol(l) {
    l[fu] = !0;
  }
  var f0 = new Set(),
    o0 = {};
  function ga(l, t) {
    (Fa(l, t), Fa(l + "Capture", t));
  }
  function Fa(l, t) {
    for (o0[l] = t, l = 0; l < t.length; l++) f0.add(t[l]);
  }
  var Gm = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    No = {},
    Do = {};
  function jm(l) {
    return Pi.call(Do, l)
      ? !0
      : Pi.call(No, l)
        ? !1
        : Gm.test(l)
          ? (Do[l] = !0)
          : ((No[l] = !0), !1);
  }
  function Zu(l, t, a) {
    if (jm(t))
      if (a === null) l.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var e = t.toLowerCase().slice(0, 5);
            if (e !== "data-" && e !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + a);
      }
  }
  function Du(l, t, a) {
    if (a === null) l.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + a);
    }
  }
  function it(l, t, a, e) {
    if (e === null) l.removeAttribute(a);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(a);
          return;
      }
      l.setAttributeNS(t, a, "" + e);
    }
  }
  function Xl(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function s0(l) {
    var t = l.type;
    return (
      (l = l.nodeName) &&
      l.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Xm(l, t, a) {
    var e = Object.getOwnPropertyDescriptor(l.constructor.prototype, t);
    if (
      !l.hasOwnProperty(t) &&
      typeof e < "u" &&
      typeof e.get == "function" &&
      typeof e.set == "function"
    ) {
      var u = e.get,
        n = e.set;
      return (
        Object.defineProperty(l, t, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (i) {
            ((a = "" + i), n.call(this, i));
          },
        }),
        Object.defineProperty(l, t, { enumerable: e.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (i) {
            a = "" + i;
          },
          stopTracking: function () {
            ((l._valueTracker = null), delete l[t]);
          },
        }
      );
    }
  }
  function tc(l) {
    if (!l._valueTracker) {
      var t = s0(l) ? "checked" : "value";
      l._valueTracker = Xm(l, t, "" + l[t]);
    }
  }
  function d0(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var a = t.getValue(),
      e = "";
    return (
      l && (e = s0(l) ? (l.checked ? "true" : "false") : l.value),
      (l = e),
      l !== a ? (t.setValue(l), !0) : !1
    );
  }
  function on(l) {
    if (
      ((l = l || (typeof document < "u" ? document : void 0)), typeof l > "u")
    )
      return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Qm = /[\n"\\]/g;
  function Ll(l) {
    return l.replace(Qm, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function ac(l, t, a, e, u, n, i, c) {
    ((l.name = ""),
      i != null &&
      typeof i != "function" &&
      typeof i != "symbol" &&
      typeof i != "boolean"
        ? (l.type = i)
        : l.removeAttribute("type"),
      t != null
        ? i === "number"
          ? ((t === 0 && l.value === "") || l.value != t) &&
            (l.value = "" + Xl(t))
          : l.value !== "" + Xl(t) && (l.value = "" + Xl(t))
        : (i !== "submit" && i !== "reset") || l.removeAttribute("value"),
      t != null
        ? ec(l, i, Xl(t))
        : a != null
          ? ec(l, i, Xl(a))
          : e != null && l.removeAttribute("value"),
      u == null && n != null && (l.defaultChecked = !!n),
      u != null &&
        (l.checked = u && typeof u != "function" && typeof u != "symbol"),
      c != null &&
      typeof c != "function" &&
      typeof c != "symbol" &&
      typeof c != "boolean"
        ? (l.name = "" + Xl(c))
        : l.removeAttribute("name"));
  }
  function v0(l, t, a, e, u, n, i, c) {
    if (
      (n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        typeof n != "boolean" &&
        (l.type = n),
      t != null || a != null)
    ) {
      if (!((n !== "submit" && n !== "reset") || t != null)) {
        tc(l);
        return;
      }
      ((a = a != null ? "" + Xl(a) : ""),
        (t = t != null ? "" + Xl(t) : a),
        c || t === l.value || (l.value = t),
        (l.defaultValue = t));
    }
    ((e = e ?? u),
      (e = typeof e != "function" && typeof e != "symbol" && !!e),
      (l.checked = c ? l.checked : !!e),
      (l.defaultChecked = !!e),
      i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean" &&
        (l.name = i),
      tc(l));
  }
  function ec(l, t, a) {
    (t === "number" && on(l.ownerDocument) === l) ||
      l.defaultValue === "" + a ||
      (l.defaultValue = "" + a);
  }
  function Va(l, t, a, e) {
    if (((l = l.options), t)) {
      t = {};
      for (var u = 0; u < a.length; u++) t["$" + a[u]] = !0;
      for (a = 0; a < l.length; a++)
        ((u = t.hasOwnProperty("$" + l[a].value)),
          l[a].selected !== u && (l[a].selected = u),
          u && e && (l[a].defaultSelected = !0));
    } else {
      for (a = "" + Xl(a), t = null, u = 0; u < l.length; u++) {
        if (l[u].value === a) {
          ((l[u].selected = !0), e && (l[u].defaultSelected = !0));
          return;
        }
        t !== null || l[u].disabled || (t = l[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function m0(l, t, a) {
    if (
      t != null &&
      ((t = "" + Xl(t)), t !== l.value && (l.value = t), a == null)
    ) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = a != null ? "" + Xl(a) : "";
  }
  function y0(l, t, a, e) {
    if (t == null) {
      if (e != null) {
        if (a != null) throw Error(b(92));
        if (_e(e)) {
          if (1 < e.length) throw Error(b(93));
          e = e[0];
        }
        a = e;
      }
      (a == null && (a = ""), (t = a));
    }
    ((a = Xl(t)),
      (l.defaultValue = a),
      (e = l.textContent),
      e === a && e !== "" && e !== null && (l.value = e),
      tc(l));
  }
  function Ia(l, t) {
    if (t) {
      var a = l.firstChild;
      if (a && a === l.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var xm = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function Uo(l, t, a) {
    var e = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? e
        ? l.setProperty(t, "")
        : t === "float"
          ? (l.cssFloat = "")
          : (l[t] = "")
      : e
        ? l.setProperty(t, a)
        : typeof a != "number" || a === 0 || xm.has(t)
          ? t === "float"
            ? (l.cssFloat = a)
            : (l[t] = ("" + a).trim())
          : (l[t] = a + "px");
  }
  function h0(l, t, a) {
    if (t != null && typeof t != "object") throw Error(b(62));
    if (((l = l.style), a != null)) {
      for (var e in a)
        !a.hasOwnProperty(e) ||
          (t != null && t.hasOwnProperty(e)) ||
          (e.indexOf("--") === 0
            ? l.setProperty(e, "")
            : e === "float"
              ? (l.cssFloat = "")
              : (l[e] = ""));
      for (var u in t)
        ((e = t[u]), t.hasOwnProperty(u) && a[u] !== e && Uo(l, u, e));
    } else for (var n in t) t.hasOwnProperty(n) && Uo(l, n, t[n]);
  }
  function wc(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Lm = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Zm =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Vu(l) {
    return Zm.test("" + l)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : l;
  }
  function yt() {}
  var uc = null;
  function Wc(l) {
    return (
      (l = l.target || l.srcElement || window),
      l.correspondingUseElement && (l = l.correspondingUseElement),
      l.nodeType === 3 ? l.parentNode : l
    );
  }
  var qa = null,
    Ka = null;
  function Ho(l) {
    var t = fe(l);
    if (t && (l = t.stateNode)) {
      var a = l[Ol] || null;
      l: switch (((l = t.stateNode), t.type)) {
        case "input":
          if (
            (ac(
              l,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name,
            ),
            (t = a.name),
            a.type === "radio" && t != null)
          ) {
            for (a = l; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                'input[name="' + Ll("" + t) + '"][type="radio"]',
              ),
                t = 0;
              t < a.length;
              t++
            ) {
              var e = a[t];
              if (e !== l && e.form === l.form) {
                var u = e[Ol] || null;
                if (!u) throw Error(b(90));
                ac(
                  e,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name,
                );
              }
            }
            for (t = 0; t < a.length; t++)
              ((e = a[t]), e.form === l.form && d0(e));
          }
          break l;
        case "textarea":
          m0(l, a.value, a.defaultValue);
          break l;
        case "select":
          ((t = a.value), t != null && Va(l, !!a.multiple, t, !1));
      }
    }
  }
  var Si = !1;
  function g0(l, t, a) {
    if (Si) return l(t, a);
    Si = !0;
    try {
      var e = l(t);
      return e;
    } finally {
      if (
        ((Si = !1),
        (qa !== null || Ka !== null) &&
          (Jn(), qa && ((t = qa), (l = Ka), (Ka = qa = null), Ho(t), l)))
      )
        for (t = 0; t < l.length; t++) Ho(l[t]);
    }
  }
  function Ke(l, t) {
    var a = l.stateNode;
    if (a === null) return null;
    var e = a[Ol] || null;
    if (e === null) return null;
    a = e[t];
    l: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((e = !e.disabled) ||
          ((l = l.type),
          (e = !(
            l === "button" ||
            l === "input" ||
            l === "select" ||
            l === "textarea"
          ))),
          (l = !e));
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (a && typeof a != "function") throw Error(b(231, t, typeof a));
    return a;
  }
  var bt = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    nc = !1;
  if (bt)
    try {
      ((Ma = {}),
        Object.defineProperty(Ma, "passive", {
          get: function () {
            nc = !0;
          },
        }),
        window.addEventListener("test", Ma, Ma),
        window.removeEventListener("test", Ma, Ma));
    } catch {
      nc = !1;
    }
  var Ma,
    Yt = null,
    $c = null,
    Ku = null;
  function r0() {
    if (Ku) return Ku;
    var l,
      t = $c,
      a = t.length,
      e,
      u = "value" in Yt ? Yt.value : Yt.textContent,
      n = u.length;
    for (l = 0; l < a && t[l] === u[l]; l++);
    var i = a - l;
    for (e = 1; e <= i && t[a - e] === u[n - e]; e++);
    return (Ku = u.slice(l, 1 < e ? 1 - e : void 0));
  }
  function Ju(l) {
    var t = l.keyCode;
    return (
      "charCode" in l
        ? ((l = l.charCode), l === 0 && t === 13 && (l = 13))
        : (l = t),
      l === 10 && (l = 13),
      32 <= l || l === 13 ? l : 0
    );
  }
  function Uu() {
    return !0;
  }
  function Co() {
    return !1;
  }
  function Ml(l) {
    function t(a, e, u, n, i) {
      ((this._reactName = a),
        (this._targetInst = u),
        (this.type = e),
        (this.nativeEvent = n),
        (this.target = i),
        (this.currentTarget = null));
      for (var c in l)
        l.hasOwnProperty(c) && ((a = l[c]), (this[c] = a ? a(n) : n[c]));
      return (
        (this.isDefaultPrevented = (
          n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
        )
          ? Uu
          : Co),
        (this.isPropagationStopped = Co),
        this
      );
    }
    return (
      $(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = Uu));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = Uu));
        },
        persist: function () {},
        isPersistent: Uu,
      }),
      t
    );
  }
  var ra = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (l) {
        return l.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Bn = Ml(ra),
    ou = $({}, ra, { view: 0, detail: 0 }),
    Vm = Ml(ou),
    bi,
    pi,
    pe,
    Yn = $({}, ou, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: kc,
      button: 0,
      buttons: 0,
      relatedTarget: function (l) {
        return l.relatedTarget === void 0
          ? l.fromElement === l.srcElement
            ? l.toElement
            : l.fromElement
          : l.relatedTarget;
      },
      movementX: function (l) {
        return "movementX" in l
          ? l.movementX
          : (l !== pe &&
              (pe && l.type === "mousemove"
                ? ((bi = l.screenX - pe.screenX), (pi = l.screenY - pe.screenY))
                : (pi = bi = 0),
              (pe = l)),
            bi);
      },
      movementY: function (l) {
        return "movementY" in l ? l.movementY : pi;
      },
    }),
    Ro = Ml(Yn),
    Km = $({}, Yn, { dataTransfer: 0 }),
    Jm = Ml(Km),
    wm = $({}, ou, { relatedTarget: 0 }),
    zi = Ml(wm),
    Wm = $({}, ra, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    $m = Ml(Wm),
    km = $({}, ra, {
      clipboardData: function (l) {
        return "clipboardData" in l ? l.clipboardData : window.clipboardData;
      },
    }),
    Fm = Ml(km),
    Im = $({}, ra, { data: 0 }),
    qo = Ml(Im),
    Pm = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    l1 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    t1 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function a1(l) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(l)
      : (l = t1[l])
        ? !!t[l]
        : !1;
  }
  function kc() {
    return a1;
  }
  var e1 = $({}, ou, {
      key: function (l) {
        if (l.key) {
          var t = Pm[l.key] || l.key;
          if (t !== "Unidentified") return t;
        }
        return l.type === "keypress"
          ? ((l = Ju(l)), l === 13 ? "Enter" : String.fromCharCode(l))
          : l.type === "keydown" || l.type === "keyup"
            ? l1[l.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: kc,
      charCode: function (l) {
        return l.type === "keypress" ? Ju(l) : 0;
      },
      keyCode: function (l) {
        return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
      },
      which: function (l) {
        return l.type === "keypress"
          ? Ju(l)
          : l.type === "keydown" || l.type === "keyup"
            ? l.keyCode
            : 0;
      },
    }),
    u1 = Ml(e1),
    n1 = $({}, Yn, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Bo = Ml(n1),
    i1 = $({}, ou, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: kc,
    }),
    c1 = Ml(i1),
    f1 = $({}, ra, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    o1 = Ml(f1),
    s1 = $({}, Yn, {
      deltaX: function (l) {
        return "deltaX" in l
          ? l.deltaX
          : "wheelDeltaX" in l
            ? -l.wheelDeltaX
            : 0;
      },
      deltaY: function (l) {
        return "deltaY" in l
          ? l.deltaY
          : "wheelDeltaY" in l
            ? -l.wheelDeltaY
            : "wheelDelta" in l
              ? -l.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    d1 = Ml(s1),
    v1 = $({}, ra, { newState: 0, oldState: 0 }),
    m1 = Ml(v1),
    y1 = [9, 13, 27, 32],
    Fc = bt && "CompositionEvent" in window,
    He = null;
  bt && "documentMode" in document && (He = document.documentMode);
  var h1 = bt && "TextEvent" in window && !He,
    S0 = bt && (!Fc || (He && 8 < He && 11 >= He)),
    Yo = " ",
    Go = !1;
  function b0(l, t) {
    switch (l) {
      case "keyup":
        return y1.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function p0(l) {
    return (
      (l = l.detail),
      typeof l == "object" && "data" in l ? l.data : null
    );
  }
  var Ba = !1;
  function g1(l, t) {
    switch (l) {
      case "compositionend":
        return p0(t);
      case "keypress":
        return t.which !== 32 ? null : ((Go = !0), Yo);
      case "textInput":
        return ((l = t.data), l === Yo && Go ? null : l);
      default:
        return null;
    }
  }
  function r1(l, t) {
    if (Ba)
      return l === "compositionend" || (!Fc && b0(l, t))
        ? ((l = r0()), (Ku = $c = Yt = null), (Ba = !1), l)
        : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return S0 && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var S1 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function jo(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!S1[l.type] : t === "textarea";
  }
  function z0(l, t, a, e) {
    (qa ? (Ka ? Ka.push(e) : (Ka = [e])) : (qa = e),
      (t = _n(t, "onChange")),
      0 < t.length &&
        ((a = new Bn("onChange", "change", null, a, e)),
        l.push({ event: a, listeners: t })));
  }
  var Ce = null,
    Je = null;
  function b1(l) {
    gv(l, 0);
  }
  function Gn(l) {
    var t = Ne(l);
    if (d0(t)) return l;
  }
  function Xo(l, t) {
    if (l === "change") return t;
  }
  var T0 = !1;
  bt &&
    (bt
      ? ((Cu = "oninput" in document),
        Cu ||
          ((Ti = document.createElement("div")),
          Ti.setAttribute("oninput", "return;"),
          (Cu = typeof Ti.oninput == "function")),
        (Hu = Cu))
      : (Hu = !1),
    (T0 = Hu && (!document.documentMode || 9 < document.documentMode)));
  var Hu, Cu, Ti;
  function Qo() {
    Ce && (Ce.detachEvent("onpropertychange", E0), (Je = Ce = null));
  }
  function E0(l) {
    if (l.propertyName === "value" && Gn(Je)) {
      var t = [];
      (z0(t, Je, l, Wc(l)), g0(b1, t));
    }
  }
  function p1(l, t, a) {
    l === "focusin"
      ? (Qo(), (Ce = t), (Je = a), Ce.attachEvent("onpropertychange", E0))
      : l === "focusout" && Qo();
  }
  function z1(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Gn(Je);
  }
  function T1(l, t) {
    if (l === "click") return Gn(t);
  }
  function E1(l, t) {
    if (l === "input" || l === "change") return Gn(t);
  }
  function A1(l, t) {
    return (l === t && (l !== 0 || 1 / l === 1 / t)) || (l !== l && t !== t);
  }
  var Bl = typeof Object.is == "function" ? Object.is : A1;
  function we(l, t) {
    if (Bl(l, t)) return !0;
    if (
      typeof l != "object" ||
      l === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var a = Object.keys(l),
      e = Object.keys(t);
    if (a.length !== e.length) return !1;
    for (e = 0; e < a.length; e++) {
      var u = a[e];
      if (!Pi.call(t, u) || !Bl(l[u], t[u])) return !1;
    }
    return !0;
  }
  function xo(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function Lo(l, t) {
    var a = xo(l);
    l = 0;
    for (var e; a; ) {
      if (a.nodeType === 3) {
        if (((e = l + a.textContent.length), l <= t && e >= t))
          return { node: a, offset: t - l };
        l = e;
      }
      l: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break l;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = xo(a);
    }
  }
  function A0(l, t) {
    return l && t
      ? l === t
        ? !0
        : l && l.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? A0(l, t.parentNode)
            : "contains" in l
              ? l.contains(t)
              : l.compareDocumentPosition
                ? !!(l.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function O0(l) {
    l =
      l != null &&
      l.ownerDocument != null &&
      l.ownerDocument.defaultView != null
        ? l.ownerDocument.defaultView
        : window;
    for (var t = on(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) l = t.contentWindow;
      else break;
      t = on(l.document);
    }
    return t;
  }
  function Ic(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (l.type === "text" ||
          l.type === "search" ||
          l.type === "tel" ||
          l.type === "url" ||
          l.type === "password")) ||
        t === "textarea" ||
        l.contentEditable === "true")
    );
  }
  var O1 = bt && "documentMode" in document && 11 >= document.documentMode,
    Ya = null,
    ic = null,
    Re = null,
    cc = !1;
  function Zo(l, t, a) {
    var e =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    cc ||
      Ya == null ||
      Ya !== on(e) ||
      ((e = Ya),
      "selectionStart" in e && Ic(e)
        ? (e = { start: e.selectionStart, end: e.selectionEnd })
        : ((e = (
            (e.ownerDocument && e.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (e = {
            anchorNode: e.anchorNode,
            anchorOffset: e.anchorOffset,
            focusNode: e.focusNode,
            focusOffset: e.focusOffset,
          })),
      (Re && we(Re, e)) ||
        ((Re = e),
        (e = _n(ic, "onSelect")),
        0 < e.length &&
          ((t = new Bn("onSelect", "select", null, t, a)),
          l.push({ event: t, listeners: e }),
          (t.target = Ya))));
  }
  function ta(l, t) {
    var a = {};
    return (
      (a[l.toLowerCase()] = t.toLowerCase()),
      (a["Webkit" + l] = "webkit" + t),
      (a["Moz" + l] = "moz" + t),
      a
    );
  }
  var Ga = {
      animationend: ta("Animation", "AnimationEnd"),
      animationiteration: ta("Animation", "AnimationIteration"),
      animationstart: ta("Animation", "AnimationStart"),
      transitionrun: ta("Transition", "TransitionRun"),
      transitionstart: ta("Transition", "TransitionStart"),
      transitioncancel: ta("Transition", "TransitionCancel"),
      transitionend: ta("Transition", "TransitionEnd"),
    },
    Ei = {},
    M0 = {};
  bt &&
    ((M0 = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Ga.animationend.animation,
      delete Ga.animationiteration.animation,
      delete Ga.animationstart.animation),
    "TransitionEvent" in window || delete Ga.transitionend.transition);
  function Sa(l) {
    if (Ei[l]) return Ei[l];
    if (!Ga[l]) return l;
    var t = Ga[l],
      a;
    for (a in t) if (t.hasOwnProperty(a) && a in M0) return (Ei[l] = t[a]);
    return l;
  }
  var _0 = Sa("animationend"),
    N0 = Sa("animationiteration"),
    D0 = Sa("animationstart"),
    M1 = Sa("transitionrun"),
    _1 = Sa("transitionstart"),
    N1 = Sa("transitioncancel"),
    U0 = Sa("transitionend"),
    H0 = new Map(),
    fc =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  fc.push("scrollEnd");
  function kl(l, t) {
    (H0.set(l, t), ga(t, [l]));
  }
  var sn =
      typeof reportError == "function"
        ? reportError
        : function (l) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof l == "object" &&
                  l !== null &&
                  typeof l.message == "string"
                    ? String(l.message)
                    : String(l),
                error: l,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", l);
              return;
            }
            console.error(l);
          },
    jl = [],
    ja = 0,
    Pc = 0;
  function jn() {
    for (var l = ja, t = (Pc = ja = 0); t < l; ) {
      var a = jl[t];
      jl[t++] = null;
      var e = jl[t];
      jl[t++] = null;
      var u = jl[t];
      jl[t++] = null;
      var n = jl[t];
      if (((jl[t++] = null), e !== null && u !== null)) {
        var i = e.pending;
        (i === null ? (u.next = u) : ((u.next = i.next), (i.next = u)),
          (e.pending = u));
      }
      n !== 0 && C0(a, u, n);
    }
  }
  function Xn(l, t, a, e) {
    ((jl[ja++] = l),
      (jl[ja++] = t),
      (jl[ja++] = a),
      (jl[ja++] = e),
      (Pc |= e),
      (l.lanes |= e),
      (l = l.alternate),
      l !== null && (l.lanes |= e));
  }
  function lf(l, t, a, e) {
    return (Xn(l, t, a, e), dn(l));
  }
  function ba(l, t) {
    return (Xn(l, null, null, t), dn(l));
  }
  function C0(l, t, a) {
    l.lanes |= a;
    var e = l.alternate;
    e !== null && (e.lanes |= a);
    for (var u = !1, n = l.return; n !== null; )
      ((n.childLanes |= a),
        (e = n.alternate),
        e !== null && (e.childLanes |= a),
        n.tag === 22 &&
          ((l = n.stateNode), l === null || l._visibility & 1 || (u = !0)),
        (l = n),
        (n = n.return));
    return l.tag === 3
      ? ((n = l.stateNode),
        u &&
          t !== null &&
          ((u = 31 - Rl(a)),
          (l = n.hiddenUpdates),
          (e = l[u]),
          e === null ? (l[u] = [t]) : e.push(t),
          (t.lane = a | 536870912)),
        n)
      : null;
  }
  function dn(l) {
    if (50 < Le) throw ((Le = 0), (Dc = null), Error(b(185)));
    for (var t = l.return; t !== null; ) ((l = t), (t = l.return));
    return l.tag === 3 ? l.stateNode : null;
  }
  var Xa = {};
  function D1(l, t, a, e) {
    ((this.tag = l),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = e),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function Dl(l, t, a, e) {
    return new D1(l, t, a, e);
  }
  function tf(l) {
    return ((l = l.prototype), !(!l || !l.isReactComponent));
  }
  function gt(l, t) {
    var a = l.alternate;
    return (
      a === null
        ? ((a = Dl(l.tag, t, l.key, l.mode)),
          (a.elementType = l.elementType),
          (a.type = l.type),
          (a.stateNode = l.stateNode),
          (a.alternate = l),
          (l.alternate = a))
        : ((a.pendingProps = t),
          (a.type = l.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = l.flags & 65011712),
      (a.childLanes = l.childLanes),
      (a.lanes = l.lanes),
      (a.child = l.child),
      (a.memoizedProps = l.memoizedProps),
      (a.memoizedState = l.memoizedState),
      (a.updateQueue = l.updateQueue),
      (t = l.dependencies),
      (a.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (a.sibling = l.sibling),
      (a.index = l.index),
      (a.ref = l.ref),
      (a.refCleanup = l.refCleanup),
      a
    );
  }
  function R0(l, t) {
    l.flags &= 65011714;
    var a = l.alternate;
    return (
      a === null
        ? ((l.childLanes = 0),
          (l.lanes = t),
          (l.child = null),
          (l.subtreeFlags = 0),
          (l.memoizedProps = null),
          (l.memoizedState = null),
          (l.updateQueue = null),
          (l.dependencies = null),
          (l.stateNode = null))
        : ((l.childLanes = a.childLanes),
          (l.lanes = a.lanes),
          (l.child = a.child),
          (l.subtreeFlags = 0),
          (l.deletions = null),
          (l.memoizedProps = a.memoizedProps),
          (l.memoizedState = a.memoizedState),
          (l.updateQueue = a.updateQueue),
          (l.type = a.type),
          (t = a.dependencies),
          (l.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      l
    );
  }
  function wu(l, t, a, e, u, n) {
    var i = 0;
    if (((e = l), typeof l == "function")) tf(l) && (i = 1);
    else if (typeof l == "string")
      i = Cy(l, a, at.current)
        ? 26
        : l === "html" || l === "head" || l === "body"
          ? 27
          : 5;
    else
      l: switch (l) {
        case $i:
          return (
            (l = Dl(31, a, t, u)),
            (l.elementType = $i),
            (l.lanes = n),
            l
          );
        case Ha:
          return ca(a.children, u, n, t);
        case Is:
          ((i = 8), (u |= 24));
          break;
        case Ji:
          return (
            (l = Dl(12, a, t, u | 2)),
            (l.elementType = Ji),
            (l.lanes = n),
            l
          );
        case wi:
          return (
            (l = Dl(13, a, t, u)),
            (l.elementType = wi),
            (l.lanes = n),
            l
          );
        case Wi:
          return (
            (l = Dl(19, a, t, u)),
            (l.elementType = Wi),
            (l.lanes = n),
            l
          );
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case mt:
                i = 10;
                break l;
              case Ps:
                i = 9;
                break l;
              case xc:
                i = 11;
                break l;
              case Lc:
                i = 14;
                break l;
              case Dt:
                ((i = 16), (e = null));
                break l;
            }
          ((i = 29),
            (a = Error(b(130, l === null ? "null" : typeof l, ""))),
            (e = null));
      }
    return (
      (t = Dl(i, a, t, u)),
      (t.elementType = l),
      (t.type = e),
      (t.lanes = n),
      t
    );
  }
  function ca(l, t, a, e) {
    return ((l = Dl(7, l, e, t)), (l.lanes = a), l);
  }
  function Ai(l, t, a) {
    return ((l = Dl(6, l, null, t)), (l.lanes = a), l);
  }
  function q0(l) {
    var t = Dl(18, null, null, 0);
    return ((t.stateNode = l), t);
  }
  function Oi(l, t, a) {
    return (
      (t = Dl(4, l.children !== null ? l.children : [], l.key, t)),
      (t.lanes = a),
      (t.stateNode = {
        containerInfo: l.containerInfo,
        pendingChildren: null,
        implementation: l.implementation,
      }),
      t
    );
  }
  var Vo = new WeakMap();
  function Zl(l, t) {
    if (typeof l == "object" && l !== null) {
      var a = Vo.get(l);
      return a !== void 0
        ? a
        : ((t = { value: l, source: t, stack: Oo(t) }), Vo.set(l, t), t);
    }
    return { value: l, source: t, stack: Oo(t) };
  }
  var Qa = [],
    xa = 0,
    vn = null,
    We = 0,
    Ql = [],
    xl = 0,
    $t = null,
    Pl = 1,
    lt = "";
  function dt(l, t) {
    ((Qa[xa++] = We), (Qa[xa++] = vn), (vn = l), (We = t));
  }
  function B0(l, t, a) {
    ((Ql[xl++] = Pl), (Ql[xl++] = lt), (Ql[xl++] = $t), ($t = l));
    var e = Pl;
    l = lt;
    var u = 32 - Rl(e) - 1;
    ((e &= ~(1 << u)), (a += 1));
    var n = 32 - Rl(t) + u;
    if (30 < n) {
      var i = u - (u % 5);
      ((n = (e & ((1 << i) - 1)).toString(32)),
        (e >>= i),
        (u -= i),
        (Pl = (1 << (32 - Rl(t) + u)) | (a << u) | e),
        (lt = n + l));
    } else ((Pl = (1 << n) | (a << u) | e), (lt = l));
  }
  function af(l) {
    l.return !== null && (dt(l, 1), B0(l, 1, 0));
  }
  function ef(l) {
    for (; l === vn; )
      ((vn = Qa[--xa]), (Qa[xa] = null), (We = Qa[--xa]), (Qa[xa] = null));
    for (; l === $t; )
      (($t = Ql[--xl]),
        (Ql[xl] = null),
        (lt = Ql[--xl]),
        (Ql[xl] = null),
        (Pl = Ql[--xl]),
        (Ql[xl] = null));
  }
  function Y0(l, t) {
    ((Ql[xl++] = Pl),
      (Ql[xl++] = lt),
      (Ql[xl++] = $t),
      (Pl = t.id),
      (lt = t.overflow),
      ($t = l));
  }
  var ml = null,
    W = null,
    q = !1,
    xt = null,
    Vl = !1,
    oc = Error(b(519));
  function kt(l) {
    var t = Error(
      b(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw ($e(Zl(t, l)), oc);
  }
  function Ko(l) {
    var t = l.stateNode,
      a = l.type,
      e = l.memoizedProps;
    switch (((t[vl] = l), (t[Ol] = e), a)) {
      case "dialog":
        (U("cancel", t), U("close", t));
        break;
      case "iframe":
      case "object":
      case "embed":
        U("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Pe.length; a++) U(Pe[a], t);
        break;
      case "source":
        U("error", t);
        break;
      case "img":
      case "image":
      case "link":
        (U("error", t), U("load", t));
        break;
      case "details":
        U("toggle", t);
        break;
      case "input":
        (U("invalid", t),
          v0(
            t,
            e.value,
            e.defaultValue,
            e.checked,
            e.defaultChecked,
            e.type,
            e.name,
            !0,
          ));
        break;
      case "select":
        U("invalid", t);
        break;
      case "textarea":
        (U("invalid", t), y0(t, e.value, e.defaultValue, e.children));
    }
    ((a = e.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      t.textContent === "" + a ||
      e.suppressHydrationWarning === !0 ||
      Sv(t.textContent, a)
        ? (e.popover != null && (U("beforetoggle", t), U("toggle", t)),
          e.onScroll != null && U("scroll", t),
          e.onScrollEnd != null && U("scrollend", t),
          e.onClick != null && (t.onclick = yt),
          (t = !0))
        : (t = !1),
      t || kt(l, !0));
  }
  function Jo(l) {
    for (ml = l.return; ml; )
      switch (ml.tag) {
        case 5:
        case 31:
        case 13:
          Vl = !1;
          return;
        case 27:
        case 3:
          Vl = !0;
          return;
        default:
          ml = ml.return;
      }
  }
  function _a(l) {
    if (l !== ml) return !1;
    if (!q) return (Jo(l), (q = !0), !1);
    var t = l.tag,
      a;
    if (
      ((a = t !== 3 && t !== 27) &&
        ((a = t === 5) &&
          ((a = l.type),
          (a =
            !(a !== "form" && a !== "button") || qc(l.type, l.memoizedProps))),
        (a = !a)),
      a && W && kt(l),
      Jo(l),
      t === 13)
    ) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(b(317));
      W = qs(l);
    } else if (t === 31) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(b(317));
      W = qs(l);
    } else
      t === 27
        ? ((t = W), la(l.type) ? ((l = jc), (jc = null), (W = l)) : (W = t))
        : (W = ml ? Jl(l.stateNode.nextSibling) : null);
    return !0;
  }
  function da() {
    ((W = ml = null), (q = !1));
  }
  function Mi() {
    var l = xt;
    return (
      l !== null &&
        (El === null ? (El = l) : El.push.apply(El, l), (xt = null)),
      l
    );
  }
  function $e(l) {
    xt === null ? (xt = [l]) : xt.push(l);
  }
  var sc = et(null),
    pa = null,
    ht = null;
  function Ht(l, t, a) {
    (K(sc, t._currentValue), (t._currentValue = a));
  }
  function rt(l) {
    ((l._currentValue = sc.current), sl(sc));
  }
  function dc(l, t, a) {
    for (; l !== null; ) {
      var e = l.alternate;
      if (
        ((l.childLanes & t) !== t
          ? ((l.childLanes |= t), e !== null && (e.childLanes |= t))
          : e !== null && (e.childLanes & t) !== t && (e.childLanes |= t),
        l === a)
      )
        break;
      l = l.return;
    }
  }
  function vc(l, t, a, e) {
    var u = l.child;
    for (u !== null && (u.return = l); u !== null; ) {
      var n = u.dependencies;
      if (n !== null) {
        var i = u.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var c = n;
          n = u;
          for (var f = 0; f < t.length; f++)
            if (c.context === t[f]) {
              ((n.lanes |= a),
                (c = n.alternate),
                c !== null && (c.lanes |= a),
                dc(n.return, a, l),
                e || (i = null));
              break l;
            }
          n = c.next;
        }
      } else if (u.tag === 18) {
        if (((i = u.return), i === null)) throw Error(b(341));
        ((i.lanes |= a),
          (n = i.alternate),
          n !== null && (n.lanes |= a),
          dc(i, a, l),
          (i = null));
      } else i = u.child;
      if (i !== null) i.return = u;
      else
        for (i = u; i !== null; ) {
          if (i === l) {
            i = null;
            break;
          }
          if (((u = i.sibling), u !== null)) {
            ((u.return = i.return), (i = u));
            break;
          }
          i = i.return;
        }
      u = i;
    }
  }
  function oe(l, t, a, e) {
    l = null;
    for (var u = t, n = !1; u !== null; ) {
      if (!n) {
        if ((u.flags & 524288) !== 0) n = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var i = u.alternate;
        if (i === null) throw Error(b(387));
        if (((i = i.memoizedProps), i !== null)) {
          var c = u.type;
          Bl(u.pendingProps.value, i.value) ||
            (l !== null ? l.push(c) : (l = [c]));
        }
      } else if (u === un.current) {
        if (((i = u.alternate), i === null)) throw Error(b(387));
        i.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (l !== null ? l.push(tu) : (l = [tu]));
      }
      u = u.return;
    }
    (l !== null && vc(t, l, a, e), (t.flags |= 262144));
  }
  function mn(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!Bl(l.context._currentValue, l.memoizedValue)) return !0;
      l = l.next;
    }
    return !1;
  }
  function va(l) {
    ((pa = l),
      (ht = null),
      (l = l.dependencies),
      l !== null && (l.firstContext = null));
  }
  function yl(l) {
    return G0(pa, l);
  }
  function Ru(l, t) {
    return (pa === null && va(l), G0(l, t));
  }
  function G0(l, t) {
    var a = t._currentValue;
    if (((t = { context: t, memoizedValue: a, next: null }), ht === null)) {
      if (l === null) throw Error(b(308));
      ((ht = t),
        (l.dependencies = { lanes: 0, firstContext: t }),
        (l.flags |= 524288));
    } else ht = ht.next = t;
    return a;
  }
  var U1 =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var l = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (a, e) {
                  l.push(e);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                l.forEach(function (a) {
                  return a();
                }));
            };
          },
    H1 = cl.unstable_scheduleCallback,
    C1 = cl.unstable_NormalPriority,
    ul = {
      $$typeof: mt,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function uf() {
    return { controller: new U1(), data: new Map(), refCount: 0 };
  }
  function su(l) {
    (l.refCount--,
      l.refCount === 0 &&
        H1(C1, function () {
          l.controller.abort();
        }));
  }
  var qe = null,
    mc = 0,
    Pa = 0,
    Ja = null;
  function R1(l, t) {
    if (qe === null) {
      var a = (qe = []);
      ((mc = 0),
        (Pa = Uf()),
        (Ja = {
          status: "pending",
          value: void 0,
          then: function (e) {
            a.push(e);
          },
        }));
    }
    return (mc++, t.then(wo, wo), t);
  }
  function wo() {
    if (--mc === 0 && qe !== null) {
      Ja !== null && (Ja.status = "fulfilled");
      var l = qe;
      ((qe = null), (Pa = 0), (Ja = null));
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function q1(l, t) {
    var a = [],
      e = {
        status: "pending",
        value: null,
        reason: null,
        then: function (u) {
          a.push(u);
        },
      };
    return (
      l.then(
        function () {
          ((e.status = "fulfilled"), (e.value = t));
          for (var u = 0; u < a.length; u++) (0, a[u])(t);
        },
        function (u) {
          for (e.status = "rejected", e.reason = u, u = 0; u < a.length; u++)
            (0, a[u])(void 0);
        },
      ),
      e
    );
  }
  var Wo = O.S;
  O.S = function (l, t) {
    ((Fd = Hl()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        R1(l, t),
      Wo !== null && Wo(l, t));
  };
  var fa = et(null);
  function nf() {
    var l = fa.current;
    return l !== null ? l : V.pooledCache;
  }
  function Wu(l, t) {
    t === null ? K(fa, fa.current) : K(fa, t.pool);
  }
  function j0() {
    var l = nf();
    return l === null ? null : { parent: ul._currentValue, pool: l };
  }
  var se = Error(b(460)),
    cf = Error(b(474)),
    Qn = Error(b(542)),
    yn = { then: function () {} };
  function $o(l) {
    return ((l = l.status), l === "fulfilled" || l === "rejected");
  }
  function X0(l, t, a) {
    switch (
      ((a = l[a]),
      a === void 0 ? l.push(t) : a !== t && (t.then(yt, yt), (t = a)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((l = t.reason), Fo(l), l);
      default:
        if (typeof t.status == "string") t.then(yt, yt);
        else {
          if (((l = V), l !== null && 100 < l.shellSuspendCounter))
            throw Error(b(482));
          ((l = t),
            (l.status = "pending"),
            l.then(
              function (e) {
                if (t.status === "pending") {
                  var u = t;
                  ((u.status = "fulfilled"), (u.value = e));
                }
              },
              function (e) {
                if (t.status === "pending") {
                  var u = t;
                  ((u.status = "rejected"), (u.reason = e));
                }
              },
            ));
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((l = t.reason), Fo(l), l);
        }
        throw ((oa = t), se);
    }
  }
  function ua(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function"
        ? ((oa = a), se)
        : a;
    }
  }
  var oa = null;
  function ko() {
    if (oa === null) throw Error(b(459));
    var l = oa;
    return ((oa = null), l);
  }
  function Fo(l) {
    if (l === se || l === Qn) throw Error(b(483));
  }
  var wa = null,
    ke = 0;
  function qu(l) {
    var t = ke;
    return ((ke += 1), wa === null && (wa = []), X0(wa, l, t));
  }
  function ze(l, t) {
    ((t = t.props.ref), (l.ref = t !== void 0 ? t : null));
  }
  function Bu(l, t) {
    throw t.$$typeof === pm
      ? Error(b(525))
      : ((l = Object.prototype.toString.call(t)),
        Error(
          b(
            31,
            l === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : l,
          ),
        ));
  }
  function Q0(l) {
    function t(s, o) {
      if (l) {
        var m = s.deletions;
        m === null ? ((s.deletions = [o]), (s.flags |= 16)) : m.push(o);
      }
    }
    function a(s, o) {
      if (!l) return null;
      for (; o !== null; ) (t(s, o), (o = o.sibling));
      return null;
    }
    function e(s) {
      for (var o = new Map(); s !== null; )
        (s.key !== null ? o.set(s.key, s) : o.set(s.index, s), (s = s.sibling));
      return o;
    }
    function u(s, o) {
      return ((s = gt(s, o)), (s.index = 0), (s.sibling = null), s);
    }
    function n(s, o, m) {
      return (
        (s.index = m),
        l
          ? ((m = s.alternate),
            m !== null
              ? ((m = m.index), m < o ? ((s.flags |= 67108866), o) : m)
              : ((s.flags |= 67108866), o))
          : ((s.flags |= 1048576), o)
      );
    }
    function i(s) {
      return (l && s.alternate === null && (s.flags |= 67108866), s);
    }
    function c(s, o, m, r) {
      return o === null || o.tag !== 6
        ? ((o = Ai(m, s.mode, r)), (o.return = s), o)
        : ((o = u(o, m)), (o.return = s), o);
    }
    function f(s, o, m, r) {
      var E = m.type;
      return E === Ha
        ? g(s, o, m.props.children, r, m.key)
        : o !== null &&
            (o.elementType === E ||
              (typeof E == "object" &&
                E !== null &&
                E.$$typeof === Dt &&
                ua(E) === o.type))
          ? ((o = u(o, m.props)), ze(o, m), (o.return = s), o)
          : ((o = wu(m.type, m.key, m.props, null, s.mode, r)),
            ze(o, m),
            (o.return = s),
            o);
    }
    function v(s, o, m, r) {
      return o === null ||
        o.tag !== 4 ||
        o.stateNode.containerInfo !== m.containerInfo ||
        o.stateNode.implementation !== m.implementation
        ? ((o = Oi(m, s.mode, r)), (o.return = s), o)
        : ((o = u(o, m.children || [])), (o.return = s), o);
    }
    function g(s, o, m, r, E) {
      return o === null || o.tag !== 7
        ? ((o = ca(m, s.mode, r, E)), (o.return = s), o)
        : ((o = u(o, m)), (o.return = s), o);
    }
    function S(s, o, m) {
      if (
        (typeof o == "string" && o !== "") ||
        typeof o == "number" ||
        typeof o == "bigint"
      )
        return ((o = Ai("" + o, s.mode, m)), (o.return = s), o);
      if (typeof o == "object" && o !== null) {
        switch (o.$$typeof) {
          case Ou:
            return (
              (m = wu(o.type, o.key, o.props, null, s.mode, m)),
              ze(m, o),
              (m.return = s),
              m
            );
          case Me:
            return ((o = Oi(o, s.mode, m)), (o.return = s), o);
          case Dt:
            return ((o = ua(o)), S(s, o, m));
        }
        if (_e(o) || be(o))
          return ((o = ca(o, s.mode, m, null)), (o.return = s), o);
        if (typeof o.then == "function") return S(s, qu(o), m);
        if (o.$$typeof === mt) return S(s, Ru(s, o), m);
        Bu(s, o);
      }
      return null;
    }
    function y(s, o, m, r) {
      var E = o !== null ? o.key : null;
      if (
        (typeof m == "string" && m !== "") ||
        typeof m == "number" ||
        typeof m == "bigint"
      )
        return E !== null ? null : c(s, o, "" + m, r);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case Ou:
            return m.key === E ? f(s, o, m, r) : null;
          case Me:
            return m.key === E ? v(s, o, m, r) : null;
          case Dt:
            return ((m = ua(m)), y(s, o, m, r));
        }
        if (_e(m) || be(m)) return E !== null ? null : g(s, o, m, r, null);
        if (typeof m.then == "function") return y(s, o, qu(m), r);
        if (m.$$typeof === mt) return y(s, o, Ru(s, m), r);
        Bu(s, m);
      }
      return null;
    }
    function h(s, o, m, r, E) {
      if (
        (typeof r == "string" && r !== "") ||
        typeof r == "number" ||
        typeof r == "bigint"
      )
        return ((s = s.get(m) || null), c(o, s, "" + r, E));
      if (typeof r == "object" && r !== null) {
        switch (r.$$typeof) {
          case Ou:
            return (
              (s = s.get(r.key === null ? m : r.key) || null),
              f(o, s, r, E)
            );
          case Me:
            return (
              (s = s.get(r.key === null ? m : r.key) || null),
              v(o, s, r, E)
            );
          case Dt:
            return ((r = ua(r)), h(s, o, m, r, E));
        }
        if (_e(r) || be(r))
          return ((s = s.get(m) || null), g(o, s, r, E, null));
        if (typeof r.then == "function") return h(s, o, m, qu(r), E);
        if (r.$$typeof === mt) return h(s, o, m, Ru(o, r), E);
        Bu(o, r);
      }
      return null;
    }
    function p(s, o, m, r) {
      for (
        var E = null, B = null, T = o, D = (o = 0), C = null;
        T !== null && D < m.length;
        D++
      ) {
        T.index > D ? ((C = T), (T = null)) : (C = T.sibling);
        var Y = y(s, T, m[D], r);
        if (Y === null) {
          T === null && (T = C);
          break;
        }
        (l && T && Y.alternate === null && t(s, T),
          (o = n(Y, o, D)),
          B === null ? (E = Y) : (B.sibling = Y),
          (B = Y),
          (T = C));
      }
      if (D === m.length) return (a(s, T), q && dt(s, D), E);
      if (T === null) {
        for (; D < m.length; D++)
          ((T = S(s, m[D], r)),
            T !== null &&
              ((o = n(T, o, D)),
              B === null ? (E = T) : (B.sibling = T),
              (B = T)));
        return (q && dt(s, D), E);
      }
      for (T = e(T); D < m.length; D++)
        ((C = h(T, s, D, m[D], r)),
          C !== null &&
            (l && C.alternate !== null && T.delete(C.key === null ? D : C.key),
            (o = n(C, o, D)),
            B === null ? (E = C) : (B.sibling = C),
            (B = C)));
      return (
        l &&
          T.forEach(function (Mt) {
            return t(s, Mt);
          }),
        q && dt(s, D),
        E
      );
    }
    function A(s, o, m, r) {
      if (m == null) throw Error(b(151));
      for (
        var E = null, B = null, T = o, D = (o = 0), C = null, Y = m.next();
        T !== null && !Y.done;
        D++, Y = m.next()
      ) {
        T.index > D ? ((C = T), (T = null)) : (C = T.sibling);
        var Mt = y(s, T, Y.value, r);
        if (Mt === null) {
          T === null && (T = C);
          break;
        }
        (l && T && Mt.alternate === null && t(s, T),
          (o = n(Mt, o, D)),
          B === null ? (E = Mt) : (B.sibling = Mt),
          (B = Mt),
          (T = C));
      }
      if (Y.done) return (a(s, T), q && dt(s, D), E);
      if (T === null) {
        for (; !Y.done; D++, Y = m.next())
          ((Y = S(s, Y.value, r)),
            Y !== null &&
              ((o = n(Y, o, D)),
              B === null ? (E = Y) : (B.sibling = Y),
              (B = Y)));
        return (q && dt(s, D), E);
      }
      for (T = e(T); !Y.done; D++, Y = m.next())
        ((Y = h(T, s, D, Y.value, r)),
          Y !== null &&
            (l && Y.alternate !== null && T.delete(Y.key === null ? D : Y.key),
            (o = n(Y, o, D)),
            B === null ? (E = Y) : (B.sibling = Y),
            (B = Y)));
      return (
        l &&
          T.forEach(function (Kv) {
            return t(s, Kv);
          }),
        q && dt(s, D),
        E
      );
    }
    function x(s, o, m, r) {
      if (
        (typeof m == "object" &&
          m !== null &&
          m.type === Ha &&
          m.key === null &&
          (m = m.props.children),
        typeof m == "object" && m !== null)
      ) {
        switch (m.$$typeof) {
          case Ou:
            l: {
              for (var E = m.key; o !== null; ) {
                if (o.key === E) {
                  if (((E = m.type), E === Ha)) {
                    if (o.tag === 7) {
                      (a(s, o.sibling),
                        (r = u(o, m.props.children)),
                        (r.return = s),
                        (s = r));
                      break l;
                    }
                  } else if (
                    o.elementType === E ||
                    (typeof E == "object" &&
                      E !== null &&
                      E.$$typeof === Dt &&
                      ua(E) === o.type)
                  ) {
                    (a(s, o.sibling),
                      (r = u(o, m.props)),
                      ze(r, m),
                      (r.return = s),
                      (s = r));
                    break l;
                  }
                  a(s, o);
                  break;
                } else t(s, o);
                o = o.sibling;
              }
              m.type === Ha
                ? ((r = ca(m.props.children, s.mode, r, m.key)),
                  (r.return = s),
                  (s = r))
                : ((r = wu(m.type, m.key, m.props, null, s.mode, r)),
                  ze(r, m),
                  (r.return = s),
                  (s = r));
            }
            return i(s);
          case Me:
            l: {
              for (E = m.key; o !== null; ) {
                if (o.key === E)
                  if (
                    o.tag === 4 &&
                    o.stateNode.containerInfo === m.containerInfo &&
                    o.stateNode.implementation === m.implementation
                  ) {
                    (a(s, o.sibling),
                      (r = u(o, m.children || [])),
                      (r.return = s),
                      (s = r));
                    break l;
                  } else {
                    a(s, o);
                    break;
                  }
                else t(s, o);
                o = o.sibling;
              }
              ((r = Oi(m, s.mode, r)), (r.return = s), (s = r));
            }
            return i(s);
          case Dt:
            return ((m = ua(m)), x(s, o, m, r));
        }
        if (_e(m)) return p(s, o, m, r);
        if (be(m)) {
          if (((E = be(m)), typeof E != "function")) throw Error(b(150));
          return ((m = E.call(m)), A(s, o, m, r));
        }
        if (typeof m.then == "function") return x(s, o, qu(m), r);
        if (m.$$typeof === mt) return x(s, o, Ru(s, m), r);
        Bu(s, m);
      }
      return (typeof m == "string" && m !== "") ||
        typeof m == "number" ||
        typeof m == "bigint"
        ? ((m = "" + m),
          o !== null && o.tag === 6
            ? (a(s, o.sibling), (r = u(o, m)), (r.return = s), (s = r))
            : (a(s, o), (r = Ai(m, s.mode, r)), (r.return = s), (s = r)),
          i(s))
        : a(s, o);
    }
    return function (s, o, m, r) {
      try {
        ke = 0;
        var E = x(s, o, m, r);
        return ((wa = null), E);
      } catch (T) {
        if (T === se || T === Qn) throw T;
        var B = Dl(29, T, null, s.mode);
        return ((B.lanes = r), (B.return = s), B);
      }
    };
  }
  var ma = Q0(!0),
    x0 = Q0(!1),
    Ut = !1;
  function ff(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function yc(l, t) {
    ((l = l.updateQueue),
      t.updateQueue === l &&
        (t.updateQueue = {
          baseState: l.baseState,
          firstBaseUpdate: l.firstBaseUpdate,
          lastBaseUpdate: l.lastBaseUpdate,
          shared: l.shared,
          callbacks: null,
        }));
  }
  function Lt(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function Zt(l, t, a) {
    var e = l.updateQueue;
    if (e === null) return null;
    if (((e = e.shared), (G & 2) !== 0)) {
      var u = e.pending;
      return (
        u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
        (e.pending = t),
        (t = dn(l)),
        C0(l, null, a),
        t
      );
    }
    return (Xn(l, e, t, a), dn(l));
  }
  function Be(l, t, a) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (a & 4194048) !== 0))
    ) {
      var e = t.lanes;
      ((e &= l.pendingLanes), (a |= e), (t.lanes = a), n0(l, a));
    }
  }
  function _i(l, t) {
    var a = l.updateQueue,
      e = l.alternate;
    if (e !== null && ((e = e.updateQueue), a === e)) {
      var u = null,
        n = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var i = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null,
          };
          (n === null ? (u = n = i) : (n = n.next = i), (a = a.next));
        } while (a !== null);
        n === null ? (u = n = t) : (n = n.next = t);
      } else u = n = t;
      ((a = {
        baseState: e.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: n,
        shared: e.shared,
        callbacks: e.callbacks,
      }),
        (l.updateQueue = a));
      return;
    }
    ((l = a.lastBaseUpdate),
      l === null ? (a.firstBaseUpdate = t) : (l.next = t),
      (a.lastBaseUpdate = t));
  }
  var hc = !1;
  function Ye() {
    if (hc) {
      var l = Ja;
      if (l !== null) throw l;
    }
  }
  function Ge(l, t, a, e) {
    hc = !1;
    var u = l.updateQueue;
    Ut = !1;
    var n = u.firstBaseUpdate,
      i = u.lastBaseUpdate,
      c = u.shared.pending;
    if (c !== null) {
      u.shared.pending = null;
      var f = c,
        v = f.next;
      ((f.next = null), i === null ? (n = v) : (i.next = v), (i = f));
      var g = l.alternate;
      g !== null &&
        ((g = g.updateQueue),
        (c = g.lastBaseUpdate),
        c !== i &&
          (c === null ? (g.firstBaseUpdate = v) : (c.next = v),
          (g.lastBaseUpdate = f)));
    }
    if (n !== null) {
      var S = u.baseState;
      ((i = 0), (g = v = f = null), (c = n));
      do {
        var y = c.lane & -536870913,
          h = y !== c.lane;
        if (h ? (R & y) === y : (e & y) === y) {
          (y !== 0 && y === Pa && (hc = !0),
            g !== null &&
              (g = g.next =
                {
                  lane: 0,
                  tag: c.tag,
                  payload: c.payload,
                  callback: null,
                  next: null,
                }));
          l: {
            var p = l,
              A = c;
            y = t;
            var x = a;
            switch (A.tag) {
              case 1:
                if (((p = A.payload), typeof p == "function")) {
                  S = p.call(x, S, y);
                  break l;
                }
                S = p;
                break l;
              case 3:
                p.flags = (p.flags & -65537) | 128;
              case 0:
                if (
                  ((p = A.payload),
                  (y = typeof p == "function" ? p.call(x, S, y) : p),
                  y == null)
                )
                  break l;
                S = $({}, S, y);
                break l;
              case 2:
                Ut = !0;
            }
          }
          ((y = c.callback),
            y !== null &&
              ((l.flags |= 64),
              h && (l.flags |= 8192),
              (h = u.callbacks),
              h === null ? (u.callbacks = [y]) : h.push(y)));
        } else
          ((h = {
            lane: y,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null,
          }),
            g === null ? ((v = g = h), (f = S)) : (g = g.next = h),
            (i |= y));
        if (((c = c.next), c === null)) {
          if (((c = u.shared.pending), c === null)) break;
          ((h = c),
            (c = h.next),
            (h.next = null),
            (u.lastBaseUpdate = h),
            (u.shared.pending = null));
        }
      } while (!0);
      (g === null && (f = S),
        (u.baseState = f),
        (u.firstBaseUpdate = v),
        (u.lastBaseUpdate = g),
        n === null && (u.shared.lanes = 0),
        (It |= i),
        (l.lanes = i),
        (l.memoizedState = S));
    }
  }
  function L0(l, t) {
    if (typeof l != "function") throw Error(b(191, l));
    l.call(t);
  }
  function Z0(l, t) {
    var a = l.callbacks;
    if (a !== null)
      for (l.callbacks = null, l = 0; l < a.length; l++) L0(a[l], t);
  }
  var le = et(null),
    hn = et(0);
  function Io(l, t) {
    ((l = Et), K(hn, l), K(le, t), (Et = l | t.baseLanes));
  }
  function gc() {
    (K(hn, Et), K(le, le.current));
  }
  function of() {
    ((Et = hn.current), sl(le), sl(hn));
  }
  var Yl = et(null),
    Kl = null;
  function Ct(l) {
    var t = l.alternate;
    (K(ll, ll.current & 1),
      K(Yl, l),
      Kl === null &&
        (t === null || le.current !== null || t.memoizedState !== null) &&
        (Kl = l));
  }
  function rc(l) {
    (K(ll, ll.current), K(Yl, l), Kl === null && (Kl = l));
  }
  function V0(l) {
    l.tag === 22
      ? (K(ll, ll.current), K(Yl, l), Kl === null && (Kl = l))
      : Rt(l);
  }
  function Rt() {
    (K(ll, ll.current), K(Yl, Yl.current));
  }
  function Nl(l) {
    (sl(Yl), Kl === l && (Kl = null), sl(ll));
  }
  var ll = et(0);
  function gn(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && ((a = a.dehydrated), a === null || Yc(a) || Gc(a)))
          return t;
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === "forwards" ||
          t.memoizedProps.revealOrder === "backwards" ||
          t.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          t.memoizedProps.revealOrder === "together")
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var pt = 0,
    N = null,
    Z = null,
    al = null,
    rn = !1,
    Wa = !1,
    ya = !1,
    Sn = 0,
    Fe = 0,
    $a = null,
    B1 = 0;
  function I() {
    throw Error(b(321));
  }
  function sf(l, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < l.length; a++)
      if (!Bl(l[a], t[a])) return !1;
    return !0;
  }
  function df(l, t, a, e, u, n) {
    return (
      (pt = n),
      (N = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (O.H = l === null || l.memoizedState === null ? zd : Tf),
      (ya = !1),
      (n = a(e, u)),
      (ya = !1),
      Wa && (n = J0(t, a, e, u)),
      K0(l),
      n
    );
  }
  function K0(l) {
    O.H = Ie;
    var t = Z !== null && Z.next !== null;
    if (((pt = 0), (al = Z = N = null), (rn = !1), (Fe = 0), ($a = null), t))
      throw Error(b(300));
    l === null ||
      nl ||
      ((l = l.dependencies), l !== null && mn(l) && (nl = !0));
  }
  function J0(l, t, a, e) {
    N = l;
    var u = 0;
    do {
      if ((Wa && ($a = null), (Fe = 0), (Wa = !1), 25 <= u))
        throw Error(b(301));
      if (((u += 1), (al = Z = null), l.updateQueue != null)) {
        var n = l.updateQueue;
        ((n.lastEffect = null),
          (n.events = null),
          (n.stores = null),
          n.memoCache != null && (n.memoCache.index = 0));
      }
      ((O.H = Td), (n = t(a, e)));
    } while (Wa);
    return n;
  }
  function Y1() {
    var l = O.H,
      t = l.useState()[0];
    return (
      (t = typeof t.then == "function" ? du(t) : t),
      (l = l.useState()[0]),
      (Z !== null ? Z.memoizedState : null) !== l && (N.flags |= 1024),
      t
    );
  }
  function vf() {
    var l = Sn !== 0;
    return ((Sn = 0), l);
  }
  function mf(l, t, a) {
    ((t.updateQueue = l.updateQueue), (t.flags &= -2053), (l.lanes &= ~a));
  }
  function yf(l) {
    if (rn) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        (t !== null && (t.pending = null), (l = l.next));
      }
      rn = !1;
    }
    ((pt = 0), (al = Z = N = null), (Wa = !1), (Fe = Sn = 0), ($a = null));
  }
  function bl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (al === null ? (N.memoizedState = al = l) : (al = al.next = l), al);
  }
  function tl() {
    if (Z === null) {
      var l = N.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = Z.next;
    var t = al === null ? N.memoizedState : al.next;
    if (t !== null) ((al = t), (Z = l));
    else {
      if (l === null)
        throw N.alternate === null ? Error(b(467)) : Error(b(310));
      ((Z = l),
        (l = {
          memoizedState: Z.memoizedState,
          baseState: Z.baseState,
          baseQueue: Z.baseQueue,
          queue: Z.queue,
          next: null,
        }),
        al === null ? (N.memoizedState = al = l) : (al = al.next = l));
    }
    return al;
  }
  function xn() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function du(l) {
    var t = Fe;
    return (
      (Fe += 1),
      $a === null && ($a = []),
      (l = X0($a, l, t)),
      (t = N),
      (al === null ? t.memoizedState : al.next) === null &&
        ((t = t.alternate),
        (O.H = t === null || t.memoizedState === null ? zd : Tf)),
      l
    );
  }
  function Ln(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return du(l);
      if (l.$$typeof === mt) return yl(l);
    }
    throw Error(b(438, String(l)));
  }
  function hf(l) {
    var t = null,
      a = N.updateQueue;
    if ((a !== null && (t = a.memoCache), t == null)) {
      var e = N.alternate;
      e !== null &&
        ((e = e.updateQueue),
        e !== null &&
          ((e = e.memoCache),
          e != null &&
            (t = {
              data: e.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      a === null && ((a = xn()), (N.updateQueue = a)),
      (a.memoCache = t),
      (a = t.data[t.index]),
      a === void 0)
    )
      for (a = t.data[t.index] = Array(l), e = 0; e < l; e++) a[e] = zm;
    return (t.index++, a);
  }
  function zt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function $u(l) {
    var t = tl();
    return gf(t, Z, l);
  }
  function gf(l, t, a) {
    var e = l.queue;
    if (e === null) throw Error(b(311));
    e.lastRenderedReducer = a;
    var u = l.baseQueue,
      n = e.pending;
    if (n !== null) {
      if (u !== null) {
        var i = u.next;
        ((u.next = n.next), (n.next = i));
      }
      ((t.baseQueue = u = n), (e.pending = null));
    }
    if (((n = l.baseState), u === null)) l.memoizedState = n;
    else {
      t = u.next;
      var c = (i = null),
        f = null,
        v = t,
        g = !1;
      do {
        var S = v.lane & -536870913;
        if (S !== v.lane ? (R & S) === S : (pt & S) === S) {
          var y = v.revertLane;
          if (y === 0)
            (f !== null &&
              (f = f.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: v.action,
                  hasEagerState: v.hasEagerState,
                  eagerState: v.eagerState,
                  next: null,
                }),
              S === Pa && (g = !0));
          else if ((pt & y) === y) {
            ((v = v.next), y === Pa && (g = !0));
            continue;
          } else
            ((S = {
              lane: 0,
              revertLane: v.revertLane,
              gesture: null,
              action: v.action,
              hasEagerState: v.hasEagerState,
              eagerState: v.eagerState,
              next: null,
            }),
              f === null ? ((c = f = S), (i = n)) : (f = f.next = S),
              (N.lanes |= y),
              (It |= y));
          ((S = v.action),
            ya && a(n, S),
            (n = v.hasEagerState ? v.eagerState : a(n, S)));
        } else
          ((y = {
            lane: S,
            revertLane: v.revertLane,
            gesture: v.gesture,
            action: v.action,
            hasEagerState: v.hasEagerState,
            eagerState: v.eagerState,
            next: null,
          }),
            f === null ? ((c = f = y), (i = n)) : (f = f.next = y),
            (N.lanes |= S),
            (It |= S));
        v = v.next;
      } while (v !== null && v !== t);
      if (
        (f === null ? (i = n) : (f.next = c),
        !Bl(n, l.memoizedState) && ((nl = !0), g && ((a = Ja), a !== null)))
      )
        throw a;
      ((l.memoizedState = n),
        (l.baseState = i),
        (l.baseQueue = f),
        (e.lastRenderedState = n));
    }
    return (u === null && (e.lanes = 0), [l.memoizedState, e.dispatch]);
  }
  function Ni(l) {
    var t = tl(),
      a = t.queue;
    if (a === null) throw Error(b(311));
    a.lastRenderedReducer = l;
    var e = a.dispatch,
      u = a.pending,
      n = t.memoizedState;
    if (u !== null) {
      a.pending = null;
      var i = (u = u.next);
      do ((n = l(n, i.action)), (i = i.next));
      while (i !== u);
      (Bl(n, t.memoizedState) || (nl = !0),
        (t.memoizedState = n),
        t.baseQueue === null && (t.baseState = n),
        (a.lastRenderedState = n));
    }
    return [n, e];
  }
  function w0(l, t, a) {
    var e = N,
      u = tl(),
      n = q;
    if (n) {
      if (a === void 0) throw Error(b(407));
      a = a();
    } else a = t();
    var i = !Bl((Z || u).memoizedState, a);
    if (
      (i && ((u.memoizedState = a), (nl = !0)),
      (u = u.queue),
      rf(k0.bind(null, e, u, l), [l]),
      u.getSnapshot !== t || i || (al !== null && al.memoizedState.tag & 1))
    ) {
      if (
        ((e.flags |= 2048),
        te(9, { destroy: void 0 }, $0.bind(null, e, u, a, t), null),
        V === null)
      )
        throw Error(b(349));
      n || (pt & 127) !== 0 || W0(e, t, a);
    }
    return a;
  }
  function W0(l, t, a) {
    ((l.flags |= 16384),
      (l = { getSnapshot: t, value: a }),
      (t = N.updateQueue),
      t === null
        ? ((t = xn()), (N.updateQueue = t), (t.stores = [l]))
        : ((a = t.stores), a === null ? (t.stores = [l]) : a.push(l)));
  }
  function $0(l, t, a, e) {
    ((t.value = a), (t.getSnapshot = e), F0(t) && I0(l));
  }
  function k0(l, t, a) {
    return a(function () {
      F0(t) && I0(l);
    });
  }
  function F0(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var a = t();
      return !Bl(l, a);
    } catch {
      return !0;
    }
  }
  function I0(l) {
    var t = ba(l, 2);
    t !== null && Al(t, l, 2);
  }
  function Sc(l) {
    var t = bl();
    if (typeof l == "function") {
      var a = l;
      if (((l = a()), ya)) {
        Bt(!0);
        try {
          a();
        } finally {
          Bt(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = l),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: zt,
        lastRenderedState: l,
      }),
      t
    );
  }
  function P0(l, t, a, e) {
    return ((l.baseState = a), gf(l, Z, typeof e == "function" ? e : zt));
  }
  function G1(l, t, a, e, u) {
    if (Vn(l)) throw Error(b(485));
    if (((l = t.action), l !== null)) {
      var n = {
        payload: u,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (i) {
          n.listeners.push(i);
        },
      };
      (O.T !== null ? a(!0) : (n.isTransition = !1),
        e(n),
        (a = t.pending),
        a === null
          ? ((n.next = t.pending = n), ld(t, n))
          : ((n.next = a.next), (t.pending = a.next = n)));
    }
  }
  function ld(l, t) {
    var a = t.action,
      e = t.payload,
      u = l.state;
    if (t.isTransition) {
      var n = O.T,
        i = {};
      O.T = i;
      try {
        var c = a(u, e),
          f = O.S;
        (f !== null && f(i, c), Po(l, t, c));
      } catch (v) {
        bc(l, t, v);
      } finally {
        (n !== null && i.types !== null && (n.types = i.types), (O.T = n));
      }
    } else
      try {
        ((n = a(u, e)), Po(l, t, n));
      } catch (v) {
        bc(l, t, v);
      }
  }
  function Po(l, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (e) {
            ls(l, t, e);
          },
          function (e) {
            return bc(l, t, e);
          },
        )
      : ls(l, t, a);
  }
  function ls(l, t, a) {
    ((t.status = "fulfilled"),
      (t.value = a),
      td(t),
      (l.state = a),
      (t = l.pending),
      t !== null &&
        ((a = t.next),
        a === t ? (l.pending = null) : ((a = a.next), (t.next = a), ld(l, a))));
  }
  function bc(l, t, a) {
    var e = l.pending;
    if (((l.pending = null), e !== null)) {
      e = e.next;
      do ((t.status = "rejected"), (t.reason = a), td(t), (t = t.next));
      while (t !== e);
    }
    l.action = null;
  }
  function td(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function ad(l, t) {
    return t;
  }
  function ts(l, t) {
    if (q) {
      var a = V.formState;
      if (a !== null) {
        l: {
          var e = N;
          if (q) {
            if (W) {
              t: {
                for (var u = W, n = Vl; u.nodeType !== 8; ) {
                  if (!n) {
                    u = null;
                    break t;
                  }
                  if (((u = Jl(u.nextSibling)), u === null)) {
                    u = null;
                    break t;
                  }
                }
                ((n = u.data), (u = n === "F!" || n === "F" ? u : null));
              }
              if (u) {
                ((W = Jl(u.nextSibling)), (e = u.data === "F!"));
                break l;
              }
            }
            kt(e);
          }
          e = !1;
        }
        e && (t = a[0]);
      }
    }
    return (
      (a = bl()),
      (a.memoizedState = a.baseState = t),
      (e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ad,
        lastRenderedState: t,
      }),
      (a.queue = e),
      (a = Sd.bind(null, N, e)),
      (e.dispatch = a),
      (e = Sc(!1)),
      (n = zf.bind(null, N, !1, e.queue)),
      (e = bl()),
      (u = { state: t, dispatch: null, action: l, pending: null }),
      (e.queue = u),
      (a = G1.bind(null, N, u, n, a)),
      (u.dispatch = a),
      (e.memoizedState = l),
      [t, a, !1]
    );
  }
  function as(l) {
    var t = tl();
    return ed(t, Z, l);
  }
  function ed(l, t, a) {
    if (
      ((t = gf(l, t, ad)[0]),
      (l = $u(zt)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var e = du(t);
      } catch (i) {
        throw i === se ? Qn : i;
      }
    else e = t;
    t = tl();
    var u = t.queue,
      n = u.dispatch;
    return (
      a !== t.memoizedState &&
        ((N.flags |= 2048),
        te(9, { destroy: void 0 }, j1.bind(null, u, a), null)),
      [e, n, l]
    );
  }
  function j1(l, t) {
    l.action = t;
  }
  function es(l) {
    var t = tl(),
      a = Z;
    if (a !== null) return ed(t, a, l);
    (tl(), (t = t.memoizedState), (a = tl()));
    var e = a.queue.dispatch;
    return ((a.memoizedState = l), [t, e, !1]);
  }
  function te(l, t, a, e) {
    return (
      (l = { tag: l, create: a, deps: e, inst: t, next: null }),
      (t = N.updateQueue),
      t === null && ((t = xn()), (N.updateQueue = t)),
      (a = t.lastEffect),
      a === null
        ? (t.lastEffect = l.next = l)
        : ((e = a.next), (a.next = l), (l.next = e), (t.lastEffect = l)),
      l
    );
  }
  function ud() {
    return tl().memoizedState;
  }
  function ku(l, t, a, e) {
    var u = bl();
    ((N.flags |= l),
      (u.memoizedState = te(
        1 | t,
        { destroy: void 0 },
        a,
        e === void 0 ? null : e,
      )));
  }
  function Zn(l, t, a, e) {
    var u = tl();
    e = e === void 0 ? null : e;
    var n = u.memoizedState.inst;
    Z !== null && e !== null && sf(e, Z.memoizedState.deps)
      ? (u.memoizedState = te(t, n, a, e))
      : ((N.flags |= l), (u.memoizedState = te(1 | t, n, a, e)));
  }
  function us(l, t) {
    ku(8390656, 8, l, t);
  }
  function rf(l, t) {
    Zn(2048, 8, l, t);
  }
  function X1(l) {
    N.flags |= 4;
    var t = N.updateQueue;
    if (t === null) ((t = xn()), (N.updateQueue = t), (t.events = [l]));
    else {
      var a = t.events;
      a === null ? (t.events = [l]) : a.push(l);
    }
  }
  function nd(l) {
    var t = tl().memoizedState;
    return (
      X1({ ref: t, nextImpl: l }),
      function () {
        if ((G & 2) !== 0) throw Error(b(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function id(l, t) {
    return Zn(4, 2, l, t);
  }
  function cd(l, t) {
    return Zn(4, 4, l, t);
  }
  function fd(l, t) {
    if (typeof t == "function") {
      l = l();
      var a = t(l);
      return function () {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return (
        (l = l()),
        (t.current = l),
        function () {
          t.current = null;
        }
      );
  }
  function od(l, t, a) {
    ((a = a != null ? a.concat([l]) : null), Zn(4, 4, fd.bind(null, t, l), a));
  }
  function Sf() {}
  function sd(l, t) {
    var a = tl();
    t = t === void 0 ? null : t;
    var e = a.memoizedState;
    return t !== null && sf(t, e[1]) ? e[0] : ((a.memoizedState = [l, t]), l);
  }
  function dd(l, t) {
    var a = tl();
    t = t === void 0 ? null : t;
    var e = a.memoizedState;
    if (t !== null && sf(t, e[1])) return e[0];
    if (((e = l()), ya)) {
      Bt(!0);
      try {
        l();
      } finally {
        Bt(!1);
      }
    }
    return ((a.memoizedState = [e, t]), e);
  }
  function bf(l, t, a) {
    return a === void 0 || ((pt & 1073741824) !== 0 && (R & 261930) === 0)
      ? (l.memoizedState = t)
      : ((l.memoizedState = a), (l = Pd()), (N.lanes |= l), (It |= l), a);
  }
  function vd(l, t, a, e) {
    return Bl(a, t)
      ? a
      : le.current !== null
        ? ((l = bf(l, a, e)), Bl(l, t) || (nl = !0), l)
        : (pt & 42) === 0 || ((pt & 1073741824) !== 0 && (R & 261930) === 0)
          ? ((nl = !0), (l.memoizedState = a))
          : ((l = Pd()), (N.lanes |= l), (It |= l), t);
  }
  function md(l, t, a, e, u) {
    var n = j.p;
    j.p = n !== 0 && 8 > n ? n : 8;
    var i = O.T,
      c = {};
    ((O.T = c), zf(l, !1, t, a));
    try {
      var f = u(),
        v = O.S;
      if (
        (v !== null && v(c, f),
        f !== null && typeof f == "object" && typeof f.then == "function")
      ) {
        var g = q1(f, e);
        je(l, t, g, ql(l));
      } else je(l, t, e, ql(l));
    } catch (S) {
      je(l, t, { then: function () {}, status: "rejected", reason: S }, ql());
    } finally {
      ((j.p = n),
        i !== null && c.types !== null && (i.types = c.types),
        (O.T = i));
    }
  }
  function Q1() {}
  function pc(l, t, a, e) {
    if (l.tag !== 5) throw Error(b(476));
    var u = yd(l).queue;
    md(
      l,
      u,
      t,
      ia,
      a === null
        ? Q1
        : function () {
            return (hd(l), a(e));
          },
    );
  }
  function yd(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: ia,
      baseState: ia,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: zt,
        lastRenderedState: ia,
      },
      next: null,
    };
    var a = {};
    return (
      (t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: zt,
          lastRenderedState: a,
        },
        next: null,
      }),
      (l.memoizedState = t),
      (l = l.alternate),
      l !== null && (l.memoizedState = t),
      t
    );
  }
  function hd(l) {
    var t = yd(l);
    (t.next === null && (t = l.alternate.memoizedState),
      je(l, t.next.queue, {}, ql()));
  }
  function pf() {
    return yl(tu);
  }
  function gd() {
    return tl().memoizedState;
  }
  function rd() {
    return tl().memoizedState;
  }
  function x1(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = ql();
          l = Lt(a);
          var e = Zt(t, l, a);
          (e !== null && (Al(e, t, a), Be(e, t, a)),
            (t = { cache: uf() }),
            (l.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function L1(l, t, a) {
    var e = ql();
    ((a = {
      lane: e,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Vn(l)
        ? bd(t, a)
        : ((a = lf(l, t, a, e)), a !== null && (Al(a, l, e), pd(a, t, e))));
  }
  function Sd(l, t, a) {
    var e = ql();
    je(l, t, a, e);
  }
  function je(l, t, a, e) {
    var u = {
      lane: e,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Vn(l)) bd(t, u);
    else {
      var n = l.alternate;
      if (
        l.lanes === 0 &&
        (n === null || n.lanes === 0) &&
        ((n = t.lastRenderedReducer), n !== null)
      )
        try {
          var i = t.lastRenderedState,
            c = n(i, a);
          if (((u.hasEagerState = !0), (u.eagerState = c), Bl(c, i)))
            return (Xn(l, t, u, 0), V === null && jn(), !1);
        } catch {}
      if (((a = lf(l, t, u, e)), a !== null))
        return (Al(a, l, e), pd(a, t, e), !0);
    }
    return !1;
  }
  function zf(l, t, a, e) {
    if (
      ((e = {
        lane: 2,
        revertLane: Uf(),
        gesture: null,
        action: e,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Vn(l))
    ) {
      if (t) throw Error(b(479));
    } else ((t = lf(l, a, e, 2)), t !== null && Al(t, l, 2));
  }
  function Vn(l) {
    var t = l.alternate;
    return l === N || (t !== null && t === N);
  }
  function bd(l, t) {
    Wa = rn = !0;
    var a = l.pending;
    (a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
      (l.pending = t));
  }
  function pd(l, t, a) {
    if ((a & 4194048) !== 0) {
      var e = t.lanes;
      ((e &= l.pendingLanes), (a |= e), (t.lanes = a), n0(l, a));
    }
  }
  var Ie = {
    readContext: yl,
    use: Ln,
    useCallback: I,
    useContext: I,
    useEffect: I,
    useImperativeHandle: I,
    useLayoutEffect: I,
    useInsertionEffect: I,
    useMemo: I,
    useReducer: I,
    useRef: I,
    useState: I,
    useDebugValue: I,
    useDeferredValue: I,
    useTransition: I,
    useSyncExternalStore: I,
    useId: I,
    useHostTransitionStatus: I,
    useFormState: I,
    useActionState: I,
    useOptimistic: I,
    useMemoCache: I,
    useCacheRefresh: I,
  };
  Ie.useEffectEvent = I;
  var zd = {
      readContext: yl,
      use: Ln,
      useCallback: function (l, t) {
        return ((bl().memoizedState = [l, t === void 0 ? null : t]), l);
      },
      useContext: yl,
      useEffect: us,
      useImperativeHandle: function (l, t, a) {
        ((a = a != null ? a.concat([l]) : null),
          ku(4194308, 4, fd.bind(null, t, l), a));
      },
      useLayoutEffect: function (l, t) {
        return ku(4194308, 4, l, t);
      },
      useInsertionEffect: function (l, t) {
        ku(4, 2, l, t);
      },
      useMemo: function (l, t) {
        var a = bl();
        t = t === void 0 ? null : t;
        var e = l();
        if (ya) {
          Bt(!0);
          try {
            l();
          } finally {
            Bt(!1);
          }
        }
        return ((a.memoizedState = [e, t]), e);
      },
      useReducer: function (l, t, a) {
        var e = bl();
        if (a !== void 0) {
          var u = a(t);
          if (ya) {
            Bt(!0);
            try {
              a(t);
            } finally {
              Bt(!1);
            }
          }
        } else u = t;
        return (
          (e.memoizedState = e.baseState = u),
          (l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: l,
            lastRenderedState: u,
          }),
          (e.queue = l),
          (l = l.dispatch = L1.bind(null, N, l)),
          [e.memoizedState, l]
        );
      },
      useRef: function (l) {
        var t = bl();
        return ((l = { current: l }), (t.memoizedState = l));
      },
      useState: function (l) {
        l = Sc(l);
        var t = l.queue,
          a = Sd.bind(null, N, t);
        return ((t.dispatch = a), [l.memoizedState, a]);
      },
      useDebugValue: Sf,
      useDeferredValue: function (l, t) {
        var a = bl();
        return bf(a, l, t);
      },
      useTransition: function () {
        var l = Sc(!1);
        return (
          (l = md.bind(null, N, l.queue, !0, !1)),
          (bl().memoizedState = l),
          [!1, l]
        );
      },
      useSyncExternalStore: function (l, t, a) {
        var e = N,
          u = bl();
        if (q) {
          if (a === void 0) throw Error(b(407));
          a = a();
        } else {
          if (((a = t()), V === null)) throw Error(b(349));
          (R & 127) !== 0 || W0(e, t, a);
        }
        u.memoizedState = a;
        var n = { value: a, getSnapshot: t };
        return (
          (u.queue = n),
          us(k0.bind(null, e, n, l), [l]),
          (e.flags |= 2048),
          te(9, { destroy: void 0 }, $0.bind(null, e, n, a, t), null),
          a
        );
      },
      useId: function () {
        var l = bl(),
          t = V.identifierPrefix;
        if (q) {
          var a = lt,
            e = Pl;
          ((a = (e & ~(1 << (32 - Rl(e) - 1))).toString(32) + a),
            (t = "_" + t + "R_" + a),
            (a = Sn++),
            0 < a && (t += "H" + a.toString(32)),
            (t += "_"));
        } else ((a = B1++), (t = "_" + t + "r_" + a.toString(32) + "_"));
        return (l.memoizedState = t);
      },
      useHostTransitionStatus: pf,
      useFormState: ts,
      useActionState: ts,
      useOptimistic: function (l) {
        var t = bl();
        t.memoizedState = t.baseState = l;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = a),
          (t = zf.bind(null, N, !0, a)),
          (a.dispatch = t),
          [l, t]
        );
      },
      useMemoCache: hf,
      useCacheRefresh: function () {
        return (bl().memoizedState = x1.bind(null, N));
      },
      useEffectEvent: function (l) {
        var t = bl(),
          a = { impl: l };
        return (
          (t.memoizedState = a),
          function () {
            if ((G & 2) !== 0) throw Error(b(440));
            return a.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Tf = {
      readContext: yl,
      use: Ln,
      useCallback: sd,
      useContext: yl,
      useEffect: rf,
      useImperativeHandle: od,
      useInsertionEffect: id,
      useLayoutEffect: cd,
      useMemo: dd,
      useReducer: $u,
      useRef: ud,
      useState: function () {
        return $u(zt);
      },
      useDebugValue: Sf,
      useDeferredValue: function (l, t) {
        var a = tl();
        return vd(a, Z.memoizedState, l, t);
      },
      useTransition: function () {
        var l = $u(zt)[0],
          t = tl().memoizedState;
        return [typeof l == "boolean" ? l : du(l), t];
      },
      useSyncExternalStore: w0,
      useId: gd,
      useHostTransitionStatus: pf,
      useFormState: as,
      useActionState: as,
      useOptimistic: function (l, t) {
        var a = tl();
        return P0(a, Z, l, t);
      },
      useMemoCache: hf,
      useCacheRefresh: rd,
    };
  Tf.useEffectEvent = nd;
  var Td = {
    readContext: yl,
    use: Ln,
    useCallback: sd,
    useContext: yl,
    useEffect: rf,
    useImperativeHandle: od,
    useInsertionEffect: id,
    useLayoutEffect: cd,
    useMemo: dd,
    useReducer: Ni,
    useRef: ud,
    useState: function () {
      return Ni(zt);
    },
    useDebugValue: Sf,
    useDeferredValue: function (l, t) {
      var a = tl();
      return Z === null ? bf(a, l, t) : vd(a, Z.memoizedState, l, t);
    },
    useTransition: function () {
      var l = Ni(zt)[0],
        t = tl().memoizedState;
      return [typeof l == "boolean" ? l : du(l), t];
    },
    useSyncExternalStore: w0,
    useId: gd,
    useHostTransitionStatus: pf,
    useFormState: es,
    useActionState: es,
    useOptimistic: function (l, t) {
      var a = tl();
      return Z !== null
        ? P0(a, Z, l, t)
        : ((a.baseState = l), [l, a.queue.dispatch]);
    },
    useMemoCache: hf,
    useCacheRefresh: rd,
  };
  Td.useEffectEvent = nd;
  function Di(l, t, a, e) {
    ((t = l.memoizedState),
      (a = a(e, t)),
      (a = a == null ? t : $({}, t, a)),
      (l.memoizedState = a),
      l.lanes === 0 && (l.updateQueue.baseState = a));
  }
  var zc = {
    enqueueSetState: function (l, t, a) {
      l = l._reactInternals;
      var e = ql(),
        u = Lt(e);
      ((u.payload = t),
        a != null && (u.callback = a),
        (t = Zt(l, u, e)),
        t !== null && (Al(t, l, e), Be(t, l, e)));
    },
    enqueueReplaceState: function (l, t, a) {
      l = l._reactInternals;
      var e = ql(),
        u = Lt(e);
      ((u.tag = 1),
        (u.payload = t),
        a != null && (u.callback = a),
        (t = Zt(l, u, e)),
        t !== null && (Al(t, l, e), Be(t, l, e)));
    },
    enqueueForceUpdate: function (l, t) {
      l = l._reactInternals;
      var a = ql(),
        e = Lt(a);
      ((e.tag = 2),
        t != null && (e.callback = t),
        (t = Zt(l, e, a)),
        t !== null && (Al(t, l, a), Be(t, l, a)));
    },
  };
  function ns(l, t, a, e, u, n, i) {
    return (
      (l = l.stateNode),
      typeof l.shouldComponentUpdate == "function"
        ? l.shouldComponentUpdate(e, n, i)
        : t.prototype && t.prototype.isPureReactComponent
          ? !we(a, e) || !we(u, n)
          : !0
    );
  }
  function is(l, t, a, e) {
    ((l = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(a, e),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(a, e),
      t.state !== l && zc.enqueueReplaceState(t, t.state, null));
  }
  function ha(l, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var e in t) e !== "ref" && (a[e] = t[e]);
    }
    if ((l = l.defaultProps)) {
      a === t && (a = $({}, a));
      for (var u in l) a[u] === void 0 && (a[u] = l[u]);
    }
    return a;
  }
  function Ed(l) {
    sn(l);
  }
  function Ad(l) {
    console.error(l);
  }
  function Od(l) {
    sn(l);
  }
  function bn(l, t) {
    try {
      var a = l.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (e) {
      setTimeout(function () {
        throw e;
      });
    }
  }
  function cs(l, t, a) {
    try {
      var e = l.onCaughtError;
      e(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function Tc(l, t, a) {
    return (
      (a = Lt(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        bn(l, t);
      }),
      a
    );
  }
  function Md(l) {
    return ((l = Lt(l)), (l.tag = 3), l);
  }
  function _d(l, t, a, e) {
    var u = a.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var n = e.value;
      ((l.payload = function () {
        return u(n);
      }),
        (l.callback = function () {
          cs(t, a, e);
        }));
    }
    var i = a.stateNode;
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (l.callback = function () {
        (cs(t, a, e),
          typeof u != "function" &&
            (Vt === null ? (Vt = new Set([this])) : Vt.add(this)));
        var c = e.stack;
        this.componentDidCatch(e.value, {
          componentStack: c !== null ? c : "",
        });
      });
  }
  function Z1(l, t, a, e, u) {
    if (
      ((a.flags |= 32768),
      e !== null && typeof e == "object" && typeof e.then == "function")
    ) {
      if (
        ((t = a.alternate),
        t !== null && oe(t, a, u, !0),
        (a = Yl.current),
        a !== null)
      ) {
        switch (a.tag) {
          case 31:
          case 13:
            return (
              Kl === null ? An() : a.alternate === null && P === 0 && (P = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = u),
              e === yn
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null ? (a.updateQueue = new Set([e])) : t.add(e),
                  Qi(l, e, u)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              e === yn
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([e]),
                      }),
                      (a.updateQueue = t))
                    : ((a = t.retryQueue),
                      a === null ? (t.retryQueue = new Set([e])) : a.add(e)),
                  Qi(l, e, u)),
              !1
            );
        }
        throw Error(b(435, a.tag));
      }
      return (Qi(l, e, u), An(), !1);
    }
    if (q)
      return (
        (t = Yl.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = u),
            e !== oc && ((l = Error(b(422), { cause: e })), $e(Zl(l, a))))
          : (e !== oc && ((t = Error(b(423), { cause: e })), $e(Zl(t, a))),
            (l = l.current.alternate),
            (l.flags |= 65536),
            (u &= -u),
            (l.lanes |= u),
            (e = Zl(e, a)),
            (u = Tc(l.stateNode, e, u)),
            _i(l, u),
            P !== 4 && (P = 2)),
        !1
      );
    var n = Error(b(520), { cause: e });
    if (
      ((n = Zl(n, a)),
      xe === null ? (xe = [n]) : xe.push(n),
      P !== 4 && (P = 2),
      t === null)
    )
      return !0;
    ((e = Zl(e, a)), (a = t));
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (l = u & -u),
            (a.lanes |= l),
            (l = Tc(a.stateNode, e, l)),
            _i(a, l),
            !1
          );
        case 1:
          if (
            ((t = a.type),
            (n = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (n !== null &&
                  typeof n.componentDidCatch == "function" &&
                  (Vt === null || !Vt.has(n)))))
          )
            return (
              (a.flags |= 65536),
              (u &= -u),
              (a.lanes |= u),
              (u = Md(u)),
              _d(u, l, a, e),
              _i(a, u),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var Ef = Error(b(461)),
    nl = !1;
  function dl(l, t, a, e) {
    t.child = l === null ? x0(t, null, a, e) : ma(t, l.child, a, e);
  }
  function fs(l, t, a, e, u) {
    a = a.render;
    var n = t.ref;
    if ("ref" in e) {
      var i = {};
      for (var c in e) c !== "ref" && (i[c] = e[c]);
    } else i = e;
    return (
      va(t),
      (e = df(l, t, a, i, n, u)),
      (c = vf()),
      l !== null && !nl
        ? (mf(l, t, u), Tt(l, t, u))
        : (q && c && af(t), (t.flags |= 1), dl(l, t, e, u), t.child)
    );
  }
  function os(l, t, a, e, u) {
    if (l === null) {
      var n = a.type;
      return typeof n == "function" &&
        !tf(n) &&
        n.defaultProps === void 0 &&
        a.compare === null
        ? ((t.tag = 15), (t.type = n), Nd(l, t, n, e, u))
        : ((l = wu(a.type, null, e, t, t.mode, u)),
          (l.ref = t.ref),
          (l.return = t),
          (t.child = l));
    }
    if (((n = l.child), !Af(l, u))) {
      var i = n.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : we), a(i, e) && l.ref === t.ref)
      )
        return Tt(l, t, u);
    }
    return (
      (t.flags |= 1),
      (l = gt(n, e)),
      (l.ref = t.ref),
      (l.return = t),
      (t.child = l)
    );
  }
  function Nd(l, t, a, e, u) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (we(n, e) && l.ref === t.ref)
        if (((nl = !1), (t.pendingProps = e = n), Af(l, u)))
          (l.flags & 131072) !== 0 && (nl = !0);
        else return ((t.lanes = l.lanes), Tt(l, t, u));
    }
    return Ec(l, t, a, e, u);
  }
  function Dd(l, t, a, e) {
    var u = e.children,
      n = l !== null ? l.memoizedState : null;
    if (
      (l === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      e.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((n = n !== null ? n.baseLanes | a : a), l !== null)) {
          for (e = t.child = l.child, u = 0; e !== null; )
            ((u = u | e.lanes | e.childLanes), (e = e.sibling));
          e = u & ~n;
        } else ((e = 0), (t.child = null));
        return ss(l, t, n, a, e);
      }
      if ((a & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          l !== null && Wu(t, n !== null ? n.cachePool : null),
          n !== null ? Io(t, n) : gc(),
          V0(t));
      else
        return (
          (e = t.lanes = 536870912),
          ss(l, t, n !== null ? n.baseLanes | a : a, a, e)
        );
    } else
      n !== null
        ? (Wu(t, n.cachePool), Io(t, n), Rt(t), (t.memoizedState = null))
        : (l !== null && Wu(t, null), gc(), Rt(t));
    return (dl(l, t, u, a), t.child);
  }
  function De(l, t) {
    return (
      (l !== null && l.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }
  function ss(l, t, a, e, u) {
    var n = nf();
    return (
      (n = n === null ? null : { parent: ul._currentValue, pool: n }),
      (t.memoizedState = { baseLanes: a, cachePool: n }),
      l !== null && Wu(t, null),
      gc(),
      V0(t),
      l !== null && oe(l, t, e, !0),
      (t.childLanes = u),
      null
    );
  }
  function Fu(l, t) {
    return (
      (t = pn({ mode: t.mode, children: t.children }, l.mode)),
      (t.ref = l.ref),
      (l.child = t),
      (t.return = l),
      t
    );
  }
  function ds(l, t, a) {
    return (
      ma(t, l.child, null, a),
      (l = Fu(t, t.pendingProps)),
      (l.flags |= 2),
      Nl(t),
      (t.memoizedState = null),
      l
    );
  }
  function V1(l, t, a) {
    var e = t.pendingProps,
      u = (t.flags & 128) !== 0;
    if (((t.flags &= -129), l === null)) {
      if (q) {
        if (e.mode === "hidden")
          return ((l = Fu(t, e)), (t.lanes = 536870912), De(null, l));
        if (
          (rc(t),
          (l = W)
            ? ((l = zv(l, Vl)),
              (l = l !== null && l.data === "&" ? l : null),
              l !== null &&
                ((t.memoizedState = {
                  dehydrated: l,
                  treeContext: $t !== null ? { id: Pl, overflow: lt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = q0(l)),
                (a.return = t),
                (t.child = a),
                (ml = t),
                (W = null)))
            : (l = null),
          l === null)
        )
          throw kt(t);
        return ((t.lanes = 536870912), null);
      }
      return Fu(t, e);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var i = n.dehydrated;
      if ((rc(t), u))
        if (t.flags & 256) ((t.flags &= -257), (t = ds(l, t, a)));
        else if (t.memoizedState !== null)
          ((t.child = l.child), (t.flags |= 128), (t = null));
        else throw Error(b(558));
      else if (
        (nl || oe(l, t, a, !1), (u = (a & l.childLanes) !== 0), nl || u)
      ) {
        if (
          ((e = V),
          e !== null && ((i = i0(e, a)), i !== 0 && i !== n.retryLane))
        )
          throw ((n.retryLane = i), ba(l, i), Al(e, l, i), Ef);
        (An(), (t = ds(l, t, a)));
      } else
        ((l = n.treeContext),
          (W = Jl(i.nextSibling)),
          (ml = t),
          (q = !0),
          (xt = null),
          (Vl = !1),
          l !== null && Y0(t, l),
          (t = Fu(t, e)),
          (t.flags |= 4096));
      return t;
    }
    return (
      (l = gt(l.child, { mode: e.mode, children: e.children })),
      (l.ref = t.ref),
      (t.child = l),
      (l.return = t),
      l
    );
  }
  function Iu(l, t) {
    var a = t.ref;
    if (a === null) l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(b(284));
      (l === null || l.ref !== a) && (t.flags |= 4194816);
    }
  }
  function Ec(l, t, a, e, u) {
    return (
      va(t),
      (a = df(l, t, a, e, void 0, u)),
      (e = vf()),
      l !== null && !nl
        ? (mf(l, t, u), Tt(l, t, u))
        : (q && e && af(t), (t.flags |= 1), dl(l, t, a, u), t.child)
    );
  }
  function vs(l, t, a, e, u, n) {
    return (
      va(t),
      (t.updateQueue = null),
      (a = J0(t, e, a, u)),
      K0(l),
      (e = vf()),
      l !== null && !nl
        ? (mf(l, t, n), Tt(l, t, n))
        : (q && e && af(t), (t.flags |= 1), dl(l, t, a, n), t.child)
    );
  }
  function ms(l, t, a, e, u) {
    if ((va(t), t.stateNode === null)) {
      var n = Xa,
        i = a.contextType;
      (typeof i == "object" && i !== null && (n = yl(i)),
        (n = new a(e, n)),
        (t.memoizedState =
          n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = zc),
        (t.stateNode = n),
        (n._reactInternals = t),
        (n = t.stateNode),
        (n.props = e),
        (n.state = t.memoizedState),
        (n.refs = {}),
        ff(t),
        (i = a.contextType),
        (n.context = typeof i == "object" && i !== null ? yl(i) : Xa),
        (n.state = t.memoizedState),
        (i = a.getDerivedStateFromProps),
        typeof i == "function" && (Di(t, a, i, e), (n.state = t.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function" ||
          (typeof n.UNSAFE_componentWillMount != "function" &&
            typeof n.componentWillMount != "function") ||
          ((i = n.state),
          typeof n.componentWillMount == "function" && n.componentWillMount(),
          typeof n.UNSAFE_componentWillMount == "function" &&
            n.UNSAFE_componentWillMount(),
          i !== n.state && zc.enqueueReplaceState(n, n.state, null),
          Ge(t, e, n, u),
          Ye(),
          (n.state = t.memoizedState)),
        typeof n.componentDidMount == "function" && (t.flags |= 4194308),
        (e = !0));
    } else if (l === null) {
      n = t.stateNode;
      var c = t.memoizedProps,
        f = ha(a, c);
      n.props = f;
      var v = n.context,
        g = a.contextType;
      ((i = Xa), typeof g == "object" && g !== null && (i = yl(g)));
      var S = a.getDerivedStateFromProps;
      ((g =
        typeof S == "function" ||
        typeof n.getSnapshotBeforeUpdate == "function"),
        (c = t.pendingProps !== c),
        g ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((c || v !== i) && is(t, n, e, i)),
        (Ut = !1));
      var y = t.memoizedState;
      ((n.state = y),
        Ge(t, e, n, u),
        Ye(),
        (v = t.memoizedState),
        c || y !== v || Ut
          ? (typeof S == "function" && (Di(t, a, S, e), (v = t.memoizedState)),
            (f = Ut || ns(t, a, f, e, y, v, i))
              ? (g ||
                  (typeof n.UNSAFE_componentWillMount != "function" &&
                    typeof n.componentWillMount != "function") ||
                  (typeof n.componentWillMount == "function" &&
                    n.componentWillMount(),
                  typeof n.UNSAFE_componentWillMount == "function" &&
                    n.UNSAFE_componentWillMount()),
                typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = e),
                (t.memoizedState = v)),
            (n.props = e),
            (n.state = v),
            (n.context = i),
            (e = f))
          : (typeof n.componentDidMount == "function" && (t.flags |= 4194308),
            (e = !1)));
    } else {
      ((n = t.stateNode),
        yc(l, t),
        (i = t.memoizedProps),
        (g = ha(a, i)),
        (n.props = g),
        (S = t.pendingProps),
        (y = n.context),
        (v = a.contextType),
        (f = Xa),
        typeof v == "object" && v !== null && (f = yl(v)),
        (c = a.getDerivedStateFromProps),
        (v =
          typeof c == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function") ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((i !== S || y !== f) && is(t, n, e, f)),
        (Ut = !1),
        (y = t.memoizedState),
        (n.state = y),
        Ge(t, e, n, u),
        Ye());
      var h = t.memoizedState;
      i !== S ||
      y !== h ||
      Ut ||
      (l !== null && l.dependencies !== null && mn(l.dependencies))
        ? (typeof c == "function" && (Di(t, a, c, e), (h = t.memoizedState)),
          (g =
            Ut ||
            ns(t, a, g, e, y, h, f) ||
            (l !== null && l.dependencies !== null && mn(l.dependencies)))
            ? (v ||
                (typeof n.UNSAFE_componentWillUpdate != "function" &&
                  typeof n.componentWillUpdate != "function") ||
                (typeof n.componentWillUpdate == "function" &&
                  n.componentWillUpdate(e, h, f),
                typeof n.UNSAFE_componentWillUpdate == "function" &&
                  n.UNSAFE_componentWillUpdate(e, h, f)),
              typeof n.componentDidUpdate == "function" && (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof n.componentDidUpdate != "function" ||
                (i === l.memoizedProps && y === l.memoizedState) ||
                (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate != "function" ||
                (i === l.memoizedProps && y === l.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = e),
              (t.memoizedState = h)),
          (n.props = e),
          (n.state = h),
          (n.context = f),
          (e = g))
        : (typeof n.componentDidUpdate != "function" ||
            (i === l.memoizedProps && y === l.memoizedState) ||
            (t.flags |= 4),
          typeof n.getSnapshotBeforeUpdate != "function" ||
            (i === l.memoizedProps && y === l.memoizedState) ||
            (t.flags |= 1024),
          (e = !1));
    }
    return (
      (n = e),
      Iu(l, t),
      (e = (t.flags & 128) !== 0),
      n || e
        ? ((n = t.stateNode),
          (a =
            e && typeof a.getDerivedStateFromError != "function"
              ? null
              : n.render()),
          (t.flags |= 1),
          l !== null && e
            ? ((t.child = ma(t, l.child, null, u)),
              (t.child = ma(t, null, a, u)))
            : dl(l, t, a, u),
          (t.memoizedState = n.state),
          (l = t.child))
        : (l = Tt(l, t, u)),
      l
    );
  }
  function ys(l, t, a, e) {
    return (da(), (t.flags |= 256), dl(l, t, a, e), t.child);
  }
  var Ui = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Hi(l) {
    return { baseLanes: l, cachePool: j0() };
  }
  function Ci(l, t, a) {
    return ((l = l !== null ? l.childLanes & ~a : 0), t && (l |= Ul), l);
  }
  function Ud(l, t, a) {
    var e = t.pendingProps,
      u = !1,
      n = (t.flags & 128) !== 0,
      i;
    if (
      ((i = n) ||
        (i =
          l !== null && l.memoizedState === null ? !1 : (ll.current & 2) !== 0),
      i && ((u = !0), (t.flags &= -129)),
      (i = (t.flags & 32) !== 0),
      (t.flags &= -33),
      l === null)
    ) {
      if (q) {
        if (
          (u ? Ct(t) : Rt(t),
          (l = W)
            ? ((l = zv(l, Vl)),
              (l = l !== null && l.data !== "&" ? l : null),
              l !== null &&
                ((t.memoizedState = {
                  dehydrated: l,
                  treeContext: $t !== null ? { id: Pl, overflow: lt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = q0(l)),
                (a.return = t),
                (t.child = a),
                (ml = t),
                (W = null)))
            : (l = null),
          l === null)
        )
          throw kt(t);
        return (Gc(l) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var c = e.children;
      return (
        (e = e.fallback),
        u
          ? (Rt(t),
            (u = t.mode),
            (c = pn({ mode: "hidden", children: c }, u)),
            (e = ca(e, u, a, null)),
            (c.return = t),
            (e.return = t),
            (c.sibling = e),
            (t.child = c),
            (e = t.child),
            (e.memoizedState = Hi(a)),
            (e.childLanes = Ci(l, i, a)),
            (t.memoizedState = Ui),
            De(null, e))
          : (Ct(t), Ac(t, c))
      );
    }
    var f = l.memoizedState;
    if (f !== null && ((c = f.dehydrated), c !== null)) {
      if (n)
        t.flags & 256
          ? (Ct(t), (t.flags &= -257), (t = Ri(l, t, a)))
          : t.memoizedState !== null
            ? (Rt(t), (t.child = l.child), (t.flags |= 128), (t = null))
            : (Rt(t),
              (c = e.fallback),
              (u = t.mode),
              (e = pn({ mode: "visible", children: e.children }, u)),
              (c = ca(c, u, a, null)),
              (c.flags |= 2),
              (e.return = t),
              (c.return = t),
              (e.sibling = c),
              (t.child = e),
              ma(t, l.child, null, a),
              (e = t.child),
              (e.memoizedState = Hi(a)),
              (e.childLanes = Ci(l, i, a)),
              (t.memoizedState = Ui),
              (t = De(null, e)));
      else if ((Ct(t), Gc(c))) {
        if (((i = c.nextSibling && c.nextSibling.dataset), i)) var v = i.dgst;
        ((i = v),
          (e = Error(b(419))),
          (e.stack = ""),
          (e.digest = i),
          $e({ value: e, source: null, stack: null }),
          (t = Ri(l, t, a)));
      } else if (
        (nl || oe(l, t, a, !1), (i = (a & l.childLanes) !== 0), nl || i)
      ) {
        if (
          ((i = V),
          i !== null && ((e = i0(i, a)), e !== 0 && e !== f.retryLane))
        )
          throw ((f.retryLane = e), ba(l, e), Al(i, l, e), Ef);
        (Yc(c) || An(), (t = Ri(l, t, a)));
      } else
        Yc(c)
          ? ((t.flags |= 192), (t.child = l.child), (t = null))
          : ((l = f.treeContext),
            (W = Jl(c.nextSibling)),
            (ml = t),
            (q = !0),
            (xt = null),
            (Vl = !1),
            l !== null && Y0(t, l),
            (t = Ac(t, e.children)),
            (t.flags |= 4096));
      return t;
    }
    return u
      ? (Rt(t),
        (c = e.fallback),
        (u = t.mode),
        (f = l.child),
        (v = f.sibling),
        (e = gt(f, { mode: "hidden", children: e.children })),
        (e.subtreeFlags = f.subtreeFlags & 65011712),
        v !== null ? (c = gt(v, c)) : ((c = ca(c, u, a, null)), (c.flags |= 2)),
        (c.return = t),
        (e.return = t),
        (e.sibling = c),
        (t.child = e),
        De(null, e),
        (e = t.child),
        (c = l.child.memoizedState),
        c === null
          ? (c = Hi(a))
          : ((u = c.cachePool),
            u !== null
              ? ((f = ul._currentValue),
                (u = u.parent !== f ? { parent: f, pool: f } : u))
              : (u = j0()),
            (c = { baseLanes: c.baseLanes | a, cachePool: u })),
        (e.memoizedState = c),
        (e.childLanes = Ci(l, i, a)),
        (t.memoizedState = Ui),
        De(l.child, e))
      : (Ct(t),
        (a = l.child),
        (l = a.sibling),
        (a = gt(a, { mode: "visible", children: e.children })),
        (a.return = t),
        (a.sibling = null),
        l !== null &&
          ((i = t.deletions),
          i === null ? ((t.deletions = [l]), (t.flags |= 16)) : i.push(l)),
        (t.child = a),
        (t.memoizedState = null),
        a);
  }
  function Ac(l, t) {
    return (
      (t = pn({ mode: "visible", children: t }, l.mode)),
      (t.return = l),
      (l.child = t)
    );
  }
  function pn(l, t) {
    return ((l = Dl(22, l, null, t)), (l.lanes = 0), l);
  }
  function Ri(l, t, a) {
    return (
      ma(t, l.child, null, a),
      (l = Ac(t, t.pendingProps.children)),
      (l.flags |= 2),
      (t.memoizedState = null),
      l
    );
  }
  function hs(l, t, a) {
    l.lanes |= t;
    var e = l.alternate;
    (e !== null && (e.lanes |= t), dc(l.return, t, a));
  }
  function qi(l, t, a, e, u, n) {
    var i = l.memoizedState;
    i === null
      ? (l.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: e,
          tail: a,
          tailMode: u,
          treeForkCount: n,
        })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = e),
        (i.tail = a),
        (i.tailMode = u),
        (i.treeForkCount = n));
  }
  function Hd(l, t, a) {
    var e = t.pendingProps,
      u = e.revealOrder,
      n = e.tail;
    e = e.children;
    var i = ll.current,
      c = (i & 2) !== 0;
    if (
      (c ? ((i = (i & 1) | 2), (t.flags |= 128)) : (i &= 1),
      K(ll, i),
      dl(l, t, e, a),
      (e = q ? We : 0),
      !c && l !== null && (l.flags & 128) !== 0)
    )
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13) l.memoizedState !== null && hs(l, a, t);
        else if (l.tag === 19) hs(l, a, t);
        else if (l.child !== null) {
          ((l.child.return = l), (l = l.child));
          continue;
        }
        if (l === t) break l;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t) break l;
          l = l.return;
        }
        ((l.sibling.return = l.return), (l = l.sibling));
      }
    switch (u) {
      case "forwards":
        for (a = t.child, u = null; a !== null; )
          ((l = a.alternate),
            l !== null && gn(l) === null && (u = a),
            (a = a.sibling));
        ((a = u),
          a === null
            ? ((u = t.child), (t.child = null))
            : ((u = a.sibling), (a.sibling = null)),
          qi(t, !1, u, a, n, e));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, u = t.child, t.child = null; u !== null; ) {
          if (((l = u.alternate), l !== null && gn(l) === null)) {
            t.child = u;
            break;
          }
          ((l = u.sibling), (u.sibling = a), (a = u), (u = l));
        }
        qi(t, !0, a, null, n, e);
        break;
      case "together":
        qi(t, !1, null, null, void 0, e);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Tt(l, t, a) {
    if (
      (l !== null && (t.dependencies = l.dependencies),
      (It |= t.lanes),
      (a & t.childLanes) === 0)
    )
      if (l !== null) {
        if ((oe(l, t, a, !1), (a & t.childLanes) === 0)) return null;
      } else return null;
    if (l !== null && t.child !== l.child) throw Error(b(153));
    if (t.child !== null) {
      for (
        l = t.child, a = gt(l, l.pendingProps), t.child = a, a.return = t;
        l.sibling !== null;
      )
        ((l = l.sibling),
          (a = a.sibling = gt(l, l.pendingProps)),
          (a.return = t));
      a.sibling = null;
    }
    return t.child;
  }
  function Af(l, t) {
    return (l.lanes & t) !== 0
      ? !0
      : ((l = l.dependencies), !!(l !== null && mn(l)));
  }
  function K1(l, t, a) {
    switch (t.tag) {
      case 3:
        (nn(t, t.stateNode.containerInfo),
          Ht(t, ul, l.memoizedState.cache),
          da());
        break;
      case 27:
      case 5:
        Ii(t);
        break;
      case 4:
        nn(t, t.stateNode.containerInfo);
        break;
      case 10:
        Ht(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), rc(t), null);
        break;
      case 13:
        var e = t.memoizedState;
        if (e !== null)
          return e.dehydrated !== null
            ? (Ct(t), (t.flags |= 128), null)
            : (a & t.child.childLanes) !== 0
              ? Ud(l, t, a)
              : (Ct(t), (l = Tt(l, t, a)), l !== null ? l.sibling : null);
        Ct(t);
        break;
      case 19:
        var u = (l.flags & 128) !== 0;
        if (
          ((e = (a & t.childLanes) !== 0),
          e || (oe(l, t, a, !1), (e = (a & t.childLanes) !== 0)),
          u)
        ) {
          if (e) return Hd(l, t, a);
          t.flags |= 128;
        }
        if (
          ((u = t.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          K(ll, ll.current),
          e)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), Dd(l, t, a, t.pendingProps));
      case 24:
        Ht(t, ul, l.memoizedState.cache);
    }
    return Tt(l, t, a);
  }
  function Cd(l, t, a) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps) nl = !0;
      else {
        if (!Af(l, a) && (t.flags & 128) === 0) return ((nl = !1), K1(l, t, a));
        nl = (l.flags & 131072) !== 0;
      }
    else ((nl = !1), q && (t.flags & 1048576) !== 0 && B0(t, We, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        l: {
          var e = t.pendingProps;
          if (((l = ua(t.elementType)), (t.type = l), typeof l == "function"))
            tf(l)
              ? ((e = ha(l, e)), (t.tag = 1), (t = ms(null, t, l, e, a)))
              : ((t.tag = 0), (t = Ec(null, t, l, e, a)));
          else {
            if (l != null) {
              var u = l.$$typeof;
              if (u === xc) {
                ((t.tag = 11), (t = fs(null, t, l, e, a)));
                break l;
              } else if (u === Lc) {
                ((t.tag = 14), (t = os(null, t, l, e, a)));
                break l;
              }
            }
            throw ((t = ki(l) || l), Error(b(306, t, "")));
          }
        }
        return t;
      case 0:
        return Ec(l, t, t.type, t.pendingProps, a);
      case 1:
        return ((e = t.type), (u = ha(e, t.pendingProps)), ms(l, t, e, u, a));
      case 3:
        l: {
          if ((nn(t, t.stateNode.containerInfo), l === null))
            throw Error(b(387));
          e = t.pendingProps;
          var n = t.memoizedState;
          ((u = n.element), yc(l, t), Ge(t, e, null, a));
          var i = t.memoizedState;
          if (
            ((e = i.cache),
            Ht(t, ul, e),
            e !== n.cache && vc(t, [ul], a, !0),
            Ye(),
            (e = i.element),
            n.isDehydrated)
          )
            if (
              ((n = { element: e, isDehydrated: !1, cache: i.cache }),
              (t.updateQueue.baseState = n),
              (t.memoizedState = n),
              t.flags & 256)
            ) {
              t = ys(l, t, e, a);
              break l;
            } else if (e !== u) {
              ((u = Zl(Error(b(424)), t)), $e(u), (t = ys(l, t, e, a)));
              break l;
            } else
              for (
                l = t.stateNode.containerInfo,
                  l.nodeType === 9
                    ? (l = l.body)
                    : (l = l.nodeName === "HTML" ? l.ownerDocument.body : l),
                  W = Jl(l.firstChild),
                  ml = t,
                  q = !0,
                  xt = null,
                  Vl = !0,
                  a = x0(t, null, e, a),
                  t.child = a;
                a;
              )
                ((a.flags = (a.flags & -3) | 4096), (a = a.sibling));
          else {
            if ((da(), e === u)) {
              t = Tt(l, t, a);
              break l;
            }
            dl(l, t, e, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          Iu(l, t),
          l === null
            ? (a = Gs(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = a)
              : q ||
                ((a = t.type),
                (l = t.pendingProps),
                (e = Nn(Qt.current).createElement(a)),
                (e[vl] = t),
                (e[Ol] = l),
                hl(e, a, l),
                ol(e),
                (t.stateNode = e))
            : (t.memoizedState = Gs(
                t.type,
                l.memoizedProps,
                t.pendingProps,
                l.memoizedState,
              )),
          null
        );
      case 27:
        return (
          Ii(t),
          l === null &&
            q &&
            ((e = t.stateNode = Tv(t.type, t.pendingProps, Qt.current)),
            (ml = t),
            (Vl = !0),
            (u = W),
            la(t.type) ? ((jc = u), (W = Jl(e.firstChild))) : (W = u)),
          dl(l, t, t.pendingProps.children, a),
          Iu(l, t),
          l === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          l === null &&
            q &&
            ((u = e = W) &&
              ((e = by(e, t.type, t.pendingProps, Vl)),
              e !== null
                ? ((t.stateNode = e),
                  (ml = t),
                  (W = Jl(e.firstChild)),
                  (Vl = !1),
                  (u = !0))
                : (u = !1)),
            u || kt(t)),
          Ii(t),
          (u = t.type),
          (n = t.pendingProps),
          (i = l !== null ? l.memoizedProps : null),
          (e = n.children),
          qc(u, n) ? (e = null) : i !== null && qc(u, i) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((u = df(l, t, Y1, null, null, a)), (tu._currentValue = u)),
          Iu(l, t),
          dl(l, t, e, a),
          t.child
        );
      case 6:
        return (
          l === null &&
            q &&
            ((l = a = W) &&
              ((a = py(a, t.pendingProps, Vl)),
              a !== null
                ? ((t.stateNode = a), (ml = t), (W = null), (l = !0))
                : (l = !1)),
            l || kt(t)),
          null
        );
      case 13:
        return Ud(l, t, a);
      case 4:
        return (
          nn(t, t.stateNode.containerInfo),
          (e = t.pendingProps),
          l === null ? (t.child = ma(t, null, e, a)) : dl(l, t, e, a),
          t.child
        );
      case 11:
        return fs(l, t, t.type, t.pendingProps, a);
      case 7:
        return (dl(l, t, t.pendingProps, a), t.child);
      case 8:
        return (dl(l, t, t.pendingProps.children, a), t.child);
      case 12:
        return (dl(l, t, t.pendingProps.children, a), t.child);
      case 10:
        return (
          (e = t.pendingProps),
          Ht(t, t.type, e.value),
          dl(l, t, e.children, a),
          t.child
        );
      case 9:
        return (
          (u = t.type._context),
          (e = t.pendingProps.children),
          va(t),
          (u = yl(u)),
          (e = e(u)),
          (t.flags |= 1),
          dl(l, t, e, a),
          t.child
        );
      case 14:
        return os(l, t, t.type, t.pendingProps, a);
      case 15:
        return Nd(l, t, t.type, t.pendingProps, a);
      case 19:
        return Hd(l, t, a);
      case 31:
        return V1(l, t, a);
      case 22:
        return Dd(l, t, a, t.pendingProps);
      case 24:
        return (
          va(t),
          (e = yl(ul)),
          l === null
            ? ((u = nf()),
              u === null &&
                ((u = V),
                (n = uf()),
                (u.pooledCache = n),
                n.refCount++,
                n !== null && (u.pooledCacheLanes |= a),
                (u = n)),
              (t.memoizedState = { parent: e, cache: u }),
              ff(t),
              Ht(t, ul, u))
            : ((l.lanes & a) !== 0 && (yc(l, t), Ge(t, null, null, a), Ye()),
              (u = l.memoizedState),
              (n = t.memoizedState),
              u.parent !== e
                ? ((u = { parent: e, cache: e }),
                  (t.memoizedState = u),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = u),
                  Ht(t, ul, e))
                : ((e = n.cache),
                  Ht(t, ul, e),
                  e !== u.cache && vc(t, [ul], a, !0))),
          dl(l, t, t.pendingProps.children, a),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(b(156, t.tag));
  }
  function ct(l) {
    l.flags |= 4;
  }
  function Bi(l, t, a, e, u) {
    if (((t = (l.mode & 32) !== 0) && (t = !1), t)) {
      if (((l.flags |= 16777216), (u & 335544128) === u))
        if (l.stateNode.complete) l.flags |= 8192;
        else if (av()) l.flags |= 8192;
        else throw ((oa = yn), cf);
    } else l.flags &= -16777217;
  }
  function gs(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (((l.flags |= 16777216), !Ov(t)))
      if (av()) l.flags |= 8192;
      else throw ((oa = yn), cf);
  }
  function Yu(l, t) {
    (t !== null && (l.flags |= 4),
      l.flags & 16384 &&
        ((t = l.tag !== 22 ? e0() : 536870912), (l.lanes |= t), (ae |= t)));
  }
  function Te(l, t) {
    if (!q)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var a = null; t !== null; )
            (t.alternate !== null && (a = t), (t = t.sibling));
          a === null ? (l.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = l.tail;
          for (var e = null; a !== null; )
            (a.alternate !== null && (e = a), (a = a.sibling));
          e === null
            ? t || l.tail === null
              ? (l.tail = null)
              : (l.tail.sibling = null)
            : (e.sibling = null);
      }
  }
  function w(l) {
    var t = l.alternate !== null && l.alternate.child === l.child,
      a = 0,
      e = 0;
    if (t)
      for (var u = l.child; u !== null; )
        ((a |= u.lanes | u.childLanes),
          (e |= u.subtreeFlags & 65011712),
          (e |= u.flags & 65011712),
          (u.return = l),
          (u = u.sibling));
    else
      for (u = l.child; u !== null; )
        ((a |= u.lanes | u.childLanes),
          (e |= u.subtreeFlags),
          (e |= u.flags),
          (u.return = l),
          (u = u.sibling));
    return ((l.subtreeFlags |= e), (l.childLanes = a), t);
  }
  function J1(l, t, a) {
    var e = t.pendingProps;
    switch ((ef(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (w(t), null);
      case 1:
        return (w(t), null);
      case 3:
        return (
          (a = t.stateNode),
          (e = null),
          l !== null && (e = l.memoizedState.cache),
          t.memoizedState.cache !== e && (t.flags |= 2048),
          rt(ul),
          ka(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (l === null || l.child === null) &&
            (_a(t)
              ? ct(t)
              : l === null ||
                (l.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Mi())),
          w(t),
          null
        );
      case 26:
        var u = t.type,
          n = t.memoizedState;
        return (
          l === null
            ? (ct(t),
              n !== null ? (w(t), gs(t, n)) : (w(t), Bi(t, u, null, e, a)))
            : n
              ? n !== l.memoizedState
                ? (ct(t), w(t), gs(t, n))
                : (w(t), (t.flags &= -16777217))
              : ((l = l.memoizedProps),
                l !== e && ct(t),
                w(t),
                Bi(t, u, l, e, a)),
          null
        );
      case 27:
        if (
          (cn(t),
          (a = Qt.current),
          (u = t.type),
          l !== null && t.stateNode != null)
        )
          l.memoizedProps !== e && ct(t);
        else {
          if (!e) {
            if (t.stateNode === null) throw Error(b(166));
            return (w(t), null);
          }
          ((l = at.current),
            _a(t) ? Ko(t, l) : ((l = Tv(u, e, a)), (t.stateNode = l), ct(t)));
        }
        return (w(t), null);
      case 5:
        if ((cn(t), (u = t.type), l !== null && t.stateNode != null))
          l.memoizedProps !== e && ct(t);
        else {
          if (!e) {
            if (t.stateNode === null) throw Error(b(166));
            return (w(t), null);
          }
          if (((n = at.current), _a(t))) Ko(t, n);
          else {
            var i = Nn(Qt.current);
            switch (n) {
              case 1:
                n = i.createElementNS("http://www.w3.org/2000/svg", u);
                break;
              case 2:
                n = i.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                break;
              default:
                switch (u) {
                  case "svg":
                    n = i.createElementNS("http://www.w3.org/2000/svg", u);
                    break;
                  case "math":
                    n = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u,
                    );
                    break;
                  case "script":
                    ((n = i.createElement("div")),
                      (n.innerHTML = "<script><\/script>"),
                      (n = n.removeChild(n.firstChild)));
                    break;
                  case "select":
                    ((n =
                      typeof e.is == "string"
                        ? i.createElement("select", { is: e.is })
                        : i.createElement("select")),
                      e.multiple
                        ? (n.multiple = !0)
                        : e.size && (n.size = e.size));
                    break;
                  default:
                    n =
                      typeof e.is == "string"
                        ? i.createElement(u, { is: e.is })
                        : i.createElement(u);
                }
            }
            ((n[vl] = t), (n[Ol] = e));
            l: for (i = t.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6) n.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                ((i.child.return = i), (i = i.child));
                continue;
              }
              if (i === t) break l;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === t) break l;
                i = i.return;
              }
              ((i.sibling.return = i.return), (i = i.sibling));
            }
            t.stateNode = n;
            l: switch ((hl(n, u, e), u)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!e.autoFocus;
                break l;
              case "img":
                e = !0;
                break l;
              default:
                e = !1;
            }
            e && ct(t);
          }
        }
        return (
          w(t),
          Bi(t, t.type, l === null ? null : l.memoizedProps, t.pendingProps, a),
          null
        );
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== e && ct(t);
        else {
          if (typeof e != "string" && t.stateNode === null) throw Error(b(166));
          if (((l = Qt.current), _a(t))) {
            if (
              ((l = t.stateNode),
              (a = t.memoizedProps),
              (e = null),
              (u = ml),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  e = u.memoizedProps;
              }
            ((l[vl] = t),
              (l = !!(
                l.nodeValue === a ||
                (e !== null && e.suppressHydrationWarning === !0) ||
                Sv(l.nodeValue, a)
              )),
              l || kt(t, !0));
          } else
            ((l = Nn(l).createTextNode(e)), (l[vl] = t), (t.stateNode = l));
        }
        return (w(t), null);
      case 31:
        if (((a = t.memoizedState), l === null || l.memoizedState !== null)) {
          if (((e = _a(t)), a !== null)) {
            if (l === null) {
              if (!e) throw Error(b(318));
              if (
                ((l = t.memoizedState),
                (l = l !== null ? l.dehydrated : null),
                !l)
              )
                throw Error(b(557));
              l[vl] = t;
            } else
              (da(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (w(t), (l = !1));
          } else
            ((a = Mi()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = a),
              (l = !0));
          if (!l) return t.flags & 256 ? (Nl(t), t) : (Nl(t), null);
          if ((t.flags & 128) !== 0) throw Error(b(558));
        }
        return (w(t), null);
      case 13:
        if (
          ((e = t.memoizedState),
          l === null ||
            (l.memoizedState !== null && l.memoizedState.dehydrated !== null))
        ) {
          if (((u = _a(t)), e !== null && e.dehydrated !== null)) {
            if (l === null) {
              if (!u) throw Error(b(318));
              if (
                ((u = t.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(b(317));
              u[vl] = t;
            } else
              (da(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (w(t), (u = !1));
          } else
            ((u = Mi()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = u),
              (u = !0));
          if (!u) return t.flags & 256 ? (Nl(t), t) : (Nl(t), null);
        }
        return (
          Nl(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = a), t)
            : ((a = e !== null),
              (l = l !== null && l.memoizedState !== null),
              a &&
                ((e = t.child),
                (u = null),
                e.alternate !== null &&
                  e.alternate.memoizedState !== null &&
                  e.alternate.memoizedState.cachePool !== null &&
                  (u = e.alternate.memoizedState.cachePool.pool),
                (n = null),
                e.memoizedState !== null &&
                  e.memoizedState.cachePool !== null &&
                  (n = e.memoizedState.cachePool.pool),
                n !== u && (e.flags |= 2048)),
              a !== l && a && (t.child.flags |= 8192),
              Yu(t, t.updateQueue),
              w(t),
              null)
        );
      case 4:
        return (ka(), l === null && Hf(t.stateNode.containerInfo), w(t), null);
      case 10:
        return (rt(t.type), w(t), null);
      case 19:
        if ((sl(ll), (e = t.memoizedState), e === null)) return (w(t), null);
        if (((u = (t.flags & 128) !== 0), (n = e.rendering), n === null))
          if (u) Te(e, !1);
          else {
            if (P !== 0 || (l !== null && (l.flags & 128) !== 0))
              for (l = t.child; l !== null; ) {
                if (((n = gn(l)), n !== null)) {
                  for (
                    t.flags |= 128,
                      Te(e, !1),
                      l = n.updateQueue,
                      t.updateQueue = l,
                      Yu(t, l),
                      t.subtreeFlags = 0,
                      l = a,
                      a = t.child;
                    a !== null;
                  )
                    (R0(a, l), (a = a.sibling));
                  return (
                    K(ll, (ll.current & 1) | 2),
                    q && dt(t, e.treeForkCount),
                    t.child
                  );
                }
                l = l.sibling;
              }
            e.tail !== null &&
              Hl() > Tn &&
              ((t.flags |= 128), (u = !0), Te(e, !1), (t.lanes = 4194304));
          }
        else {
          if (!u)
            if (((l = gn(n)), l !== null)) {
              if (
                ((t.flags |= 128),
                (u = !0),
                (l = l.updateQueue),
                (t.updateQueue = l),
                Yu(t, l),
                Te(e, !0),
                e.tail === null &&
                  e.tailMode === "hidden" &&
                  !n.alternate &&
                  !q)
              )
                return (w(t), null);
            } else
              2 * Hl() - e.renderingStartTime > Tn &&
                a !== 536870912 &&
                ((t.flags |= 128), (u = !0), Te(e, !1), (t.lanes = 4194304));
          e.isBackwards
            ? ((n.sibling = t.child), (t.child = n))
            : ((l = e.last),
              l !== null ? (l.sibling = n) : (t.child = n),
              (e.last = n));
        }
        return e.tail !== null
          ? ((l = e.tail),
            (e.rendering = l),
            (e.tail = l.sibling),
            (e.renderingStartTime = Hl()),
            (l.sibling = null),
            (a = ll.current),
            K(ll, u ? (a & 1) | 2 : a & 1),
            q && dt(t, e.treeForkCount),
            l)
          : (w(t), null);
      case 22:
      case 23:
        return (
          Nl(t),
          of(),
          (e = t.memoizedState !== null),
          l !== null
            ? (l.memoizedState !== null) !== e && (t.flags |= 8192)
            : e && (t.flags |= 8192),
          e
            ? (a & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (w(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : w(t),
          (a = t.updateQueue),
          a !== null && Yu(t, a.retryQueue),
          (a = null),
          l !== null &&
            l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (a = l.memoizedState.cachePool.pool),
          (e = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (e = t.memoizedState.cachePool.pool),
          e !== a && (t.flags |= 2048),
          l !== null && sl(fa),
          null
        );
      case 24:
        return (
          (a = null),
          l !== null && (a = l.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          rt(ul),
          w(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(b(156, t.tag));
  }
  function w1(l, t) {
    switch ((ef(t), t.tag)) {
      case 1:
        return (
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 3:
        return (
          rt(ul),
          ka(),
          (l = t.flags),
          (l & 65536) !== 0 && (l & 128) === 0
            ? ((t.flags = (l & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (cn(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((Nl(t), t.alternate === null)) throw Error(b(340));
          da();
        }
        return (
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 13:
        if (
          (Nl(t), (l = t.memoizedState), l !== null && l.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(b(340));
          da();
        }
        return (
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 19:
        return (sl(ll), null);
      case 4:
        return (ka(), null);
      case 10:
        return (rt(t.type), null);
      case 22:
      case 23:
        return (
          Nl(t),
          of(),
          l !== null && sl(fa),
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 24:
        return (rt(ul), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Rd(l, t) {
    switch ((ef(t), t.tag)) {
      case 3:
        (rt(ul), ka());
        break;
      case 26:
      case 27:
      case 5:
        cn(t);
        break;
      case 4:
        ka();
        break;
      case 31:
        t.memoizedState !== null && Nl(t);
        break;
      case 13:
        Nl(t);
        break;
      case 19:
        sl(ll);
        break;
      case 10:
        rt(t.type);
        break;
      case 22:
      case 23:
        (Nl(t), of(), l !== null && sl(fa));
        break;
      case 24:
        rt(ul);
    }
  }
  function vu(l, t) {
    try {
      var a = t.updateQueue,
        e = a !== null ? a.lastEffect : null;
      if (e !== null) {
        var u = e.next;
        a = u;
        do {
          if ((a.tag & l) === l) {
            e = void 0;
            var n = a.create,
              i = a.inst;
            ((e = n()), (i.destroy = e));
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (c) {
      Q(t, t.return, c);
    }
  }
  function Ft(l, t, a) {
    try {
      var e = t.updateQueue,
        u = e !== null ? e.lastEffect : null;
      if (u !== null) {
        var n = u.next;
        e = n;
        do {
          if ((e.tag & l) === l) {
            var i = e.inst,
              c = i.destroy;
            if (c !== void 0) {
              ((i.destroy = void 0), (u = t));
              var f = a,
                v = c;
              try {
                v();
              } catch (g) {
                Q(u, f, g);
              }
            }
          }
          e = e.next;
        } while (e !== n);
      }
    } catch (g) {
      Q(t, t.return, g);
    }
  }
  function qd(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var a = l.stateNode;
      try {
        Z0(t, a);
      } catch (e) {
        Q(l, l.return, e);
      }
    }
  }
  function Bd(l, t, a) {
    ((a.props = ha(l.type, l.memoizedProps)), (a.state = l.memoizedState));
    try {
      a.componentWillUnmount();
    } catch (e) {
      Q(l, t, e);
    }
  }
  function Xe(l, t) {
    try {
      var a = l.ref;
      if (a !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var e = l.stateNode;
            break;
          case 30:
            e = l.stateNode;
            break;
          default:
            e = l.stateNode;
        }
        typeof a == "function" ? (l.refCleanup = a(e)) : (a.current = e);
      }
    } catch (u) {
      Q(l, t, u);
    }
  }
  function tt(l, t) {
    var a = l.ref,
      e = l.refCleanup;
    if (a !== null)
      if (typeof e == "function")
        try {
          e();
        } catch (u) {
          Q(l, t, u);
        } finally {
          ((l.refCleanup = null),
            (l = l.alternate),
            l != null && (l.refCleanup = null));
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (u) {
          Q(l, t, u);
        }
      else a.current = null;
  }
  function Yd(l) {
    var t = l.type,
      a = l.memoizedProps,
      e = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          break l;
        case "img":
          a.src ? (e.src = a.src) : a.srcSet && (e.srcset = a.srcSet);
      }
    } catch (u) {
      Q(l, l.return, u);
    }
  }
  function Yi(l, t, a) {
    try {
      var e = l.stateNode;
      (my(e, l.type, a, t), (e[Ol] = t));
    } catch (u) {
      Q(l, l.return, u);
    }
  }
  function Gd(l) {
    return (
      l.tag === 5 ||
      l.tag === 3 ||
      l.tag === 26 ||
      (l.tag === 27 && la(l.type)) ||
      l.tag === 4
    );
  }
  function Gi(l) {
    l: for (;;) {
      for (; l.sibling === null; ) {
        if (l.return === null || Gd(l.return)) return null;
        l = l.return;
      }
      for (
        l.sibling.return = l.return, l = l.sibling;
        l.tag !== 5 && l.tag !== 6 && l.tag !== 18;
      ) {
        if (
          (l.tag === 27 && la(l.type)) ||
          l.flags & 2 ||
          l.child === null ||
          l.tag === 4
        )
          continue l;
        ((l.child.return = l), (l = l.child));
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Oc(l, t, a) {
    var e = l.tag;
    if (e === 5 || e === 6)
      ((l = l.stateNode),
        t
          ? (a.nodeType === 9
              ? a.body
              : a.nodeName === "HTML"
                ? a.ownerDocument.body
                : a
            ).insertBefore(l, t)
          : ((t =
              a.nodeType === 9
                ? a.body
                : a.nodeName === "HTML"
                  ? a.ownerDocument.body
                  : a),
            t.appendChild(l),
            (a = a._reactRootContainer),
            a != null || t.onclick !== null || (t.onclick = yt)));
    else if (
      e !== 4 &&
      (e === 27 && la(l.type) && ((a = l.stateNode), (t = null)),
      (l = l.child),
      l !== null)
    )
      for (Oc(l, t, a), l = l.sibling; l !== null; )
        (Oc(l, t, a), (l = l.sibling));
  }
  function zn(l, t, a) {
    var e = l.tag;
    if (e === 5 || e === 6)
      ((l = l.stateNode), t ? a.insertBefore(l, t) : a.appendChild(l));
    else if (
      e !== 4 &&
      (e === 27 && la(l.type) && (a = l.stateNode), (l = l.child), l !== null)
    )
      for (zn(l, t, a), l = l.sibling; l !== null; )
        (zn(l, t, a), (l = l.sibling));
  }
  function jd(l) {
    var t = l.stateNode,
      a = l.memoizedProps;
    try {
      for (var e = l.type, u = t.attributes; u.length; )
        t.removeAttributeNode(u[0]);
      (hl(t, e, a), (t[vl] = l), (t[Ol] = a));
    } catch (n) {
      Q(l, l.return, n);
    }
  }
  var vt = !1,
    el = !1,
    ji = !1,
    rs = typeof WeakSet == "function" ? WeakSet : Set,
    fl = null;
  function W1(l, t) {
    if (((l = l.containerInfo), (Cc = Cn), (l = O0(l)), Ic(l))) {
      if ("selectionStart" in l)
        var a = { start: l.selectionStart, end: l.selectionEnd };
      else
        l: {
          a = ((a = l.ownerDocument) && a.defaultView) || window;
          var e = a.getSelection && a.getSelection();
          if (e && e.rangeCount !== 0) {
            a = e.anchorNode;
            var u = e.anchorOffset,
              n = e.focusNode;
            e = e.focusOffset;
            try {
              (a.nodeType, n.nodeType);
            } catch {
              a = null;
              break l;
            }
            var i = 0,
              c = -1,
              f = -1,
              v = 0,
              g = 0,
              S = l,
              y = null;
            t: for (;;) {
              for (
                var h;
                S !== a || (u !== 0 && S.nodeType !== 3) || (c = i + u),
                  S !== n || (e !== 0 && S.nodeType !== 3) || (f = i + e),
                  S.nodeType === 3 && (i += S.nodeValue.length),
                  (h = S.firstChild) !== null;
              )
                ((y = S), (S = h));
              for (;;) {
                if (S === l) break t;
                if (
                  (y === a && ++v === u && (c = i),
                  y === n && ++g === e && (f = i),
                  (h = S.nextSibling) !== null)
                )
                  break;
                ((S = y), (y = S.parentNode));
              }
              S = h;
            }
            a = c === -1 || f === -1 ? null : { start: c, end: f };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      Rc = { focusedElem: l, selectionRange: a }, Cn = !1, fl = t;
      fl !== null;
    )
      if (
        ((t = fl), (l = t.child), (t.subtreeFlags & 1028) !== 0 && l !== null)
      )
        ((l.return = t), (fl = l));
      else
        for (; fl !== null; ) {
          switch (((t = fl), (n = t.alternate), (l = t.flags), t.tag)) {
            case 0:
              if (
                (l & 4) !== 0 &&
                ((l = t.updateQueue),
                (l = l !== null ? l.events : null),
                l !== null)
              )
                for (a = 0; a < l.length; a++)
                  ((u = l[a]), (u.ref.impl = u.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                ((l = void 0),
                  (a = t),
                  (u = n.memoizedProps),
                  (n = n.memoizedState),
                  (e = a.stateNode));
                try {
                  var p = ha(a.type, u);
                  ((l = e.getSnapshotBeforeUpdate(p, n)),
                    (e.__reactInternalSnapshotBeforeUpdate = l));
                } catch (A) {
                  Q(a, a.return, A);
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (
                  ((l = t.stateNode.containerInfo), (a = l.nodeType), a === 9)
                )
                  Bc(l);
                else if (a === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Bc(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(b(163));
          }
          if (((l = t.sibling), l !== null)) {
            ((l.return = t.return), (fl = l));
            break;
          }
          fl = t.return;
        }
  }
  function Xd(l, t, a) {
    var e = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        (ot(l, a), e & 4 && vu(5, a));
        break;
      case 1:
        if ((ot(l, a), e & 4))
          if (((l = a.stateNode), t === null))
            try {
              l.componentDidMount();
            } catch (i) {
              Q(a, a.return, i);
            }
          else {
            var u = ha(a.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              l.componentDidUpdate(u, t, l.__reactInternalSnapshotBeforeUpdate);
            } catch (i) {
              Q(a, a.return, i);
            }
          }
        (e & 64 && qd(a), e & 512 && Xe(a, a.return));
        break;
      case 3:
        if ((ot(l, a), e & 64 && ((l = a.updateQueue), l !== null))) {
          if (((t = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            Z0(l, t);
          } catch (i) {
            Q(a, a.return, i);
          }
        }
        break;
      case 27:
        t === null && e & 4 && jd(a);
      case 26:
      case 5:
        (ot(l, a), t === null && e & 4 && Yd(a), e & 512 && Xe(a, a.return));
        break;
      case 12:
        ot(l, a);
        break;
      case 31:
        (ot(l, a), e & 4 && Ld(l, a));
        break;
      case 13:
        (ot(l, a),
          e & 4 && Zd(l, a),
          e & 64 &&
            ((l = a.memoizedState),
            l !== null &&
              ((l = l.dehydrated),
              l !== null && ((a = ey.bind(null, a)), zy(l, a)))));
        break;
      case 22:
        if (((e = a.memoizedState !== null || vt), !e)) {
          ((t = (t !== null && t.memoizedState !== null) || el), (u = vt));
          var n = el;
          ((vt = e),
            (el = t) && !n ? st(l, a, (a.subtreeFlags & 8772) !== 0) : ot(l, a),
            (vt = u),
            (el = n));
        }
        break;
      case 30:
        break;
      default:
        ot(l, a);
    }
  }
  function Qd(l) {
    var t = l.alternate;
    (t !== null && ((l.alternate = null), Qd(t)),
      (l.child = null),
      (l.deletions = null),
      (l.sibling = null),
      l.tag === 5 && ((t = l.stateNode), t !== null && Jc(t)),
      (l.stateNode = null),
      (l.return = null),
      (l.dependencies = null),
      (l.memoizedProps = null),
      (l.memoizedState = null),
      (l.pendingProps = null),
      (l.stateNode = null),
      (l.updateQueue = null));
  }
  var F = null,
    Tl = !1;
  function ft(l, t, a) {
    for (a = a.child; a !== null; ) (xd(l, t, a), (a = a.sibling));
  }
  function xd(l, t, a) {
    if (Cl && typeof Cl.onCommitFiberUnmount == "function")
      try {
        Cl.onCommitFiberUnmount(nu, a);
      } catch {}
    switch (a.tag) {
      case 26:
        (el || tt(a, t),
          ft(l, t, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a)));
        break;
      case 27:
        el || tt(a, t);
        var e = F,
          u = Tl;
        (la(a.type) && ((F = a.stateNode), (Tl = !1)),
          ft(l, t, a),
          Ze(a.stateNode),
          (F = e),
          (Tl = u));
        break;
      case 5:
        el || tt(a, t);
      case 6:
        if (
          ((e = F),
          (u = Tl),
          (F = null),
          ft(l, t, a),
          (F = e),
          (Tl = u),
          F !== null)
        )
          if (Tl)
            try {
              (F.nodeType === 9
                ? F.body
                : F.nodeName === "HTML"
                  ? F.ownerDocument.body
                  : F
              ).removeChild(a.stateNode);
            } catch (n) {
              Q(a, t, n);
            }
          else
            try {
              F.removeChild(a.stateNode);
            } catch (n) {
              Q(a, t, n);
            }
        break;
      case 18:
        F !== null &&
          (Tl
            ? ((l = F),
              Cs(
                l.nodeType === 9
                  ? l.body
                  : l.nodeName === "HTML"
                    ? l.ownerDocument.body
                    : l,
                a.stateNode,
              ),
              ie(l))
            : Cs(F, a.stateNode));
        break;
      case 4:
        ((e = F),
          (u = Tl),
          (F = a.stateNode.containerInfo),
          (Tl = !0),
          ft(l, t, a),
          (F = e),
          (Tl = u));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (Ft(2, a, t), el || Ft(4, a, t), ft(l, t, a));
        break;
      case 1:
        (el ||
          (tt(a, t),
          (e = a.stateNode),
          typeof e.componentWillUnmount == "function" && Bd(a, t, e)),
          ft(l, t, a));
        break;
      case 21:
        ft(l, t, a);
        break;
      case 22:
        ((el = (e = el) || a.memoizedState !== null), ft(l, t, a), (el = e));
        break;
      default:
        ft(l, t, a);
    }
  }
  function Ld(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate), l !== null && ((l = l.memoizedState), l !== null))
    ) {
      l = l.dehydrated;
      try {
        ie(l);
      } catch (a) {
        Q(t, t.return, a);
      }
    }
  }
  function Zd(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate),
      l !== null &&
        ((l = l.memoizedState), l !== null && ((l = l.dehydrated), l !== null)))
    )
      try {
        ie(l);
      } catch (a) {
        Q(t, t.return, a);
      }
  }
  function $1(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return (t === null && (t = l.stateNode = new rs()), t);
      case 22:
        return (
          (l = l.stateNode),
          (t = l._retryCache),
          t === null && (t = l._retryCache = new rs()),
          t
        );
      default:
        throw Error(b(435, l.tag));
    }
  }
  function Gu(l, t) {
    var a = $1(l);
    t.forEach(function (e) {
      if (!a.has(e)) {
        a.add(e);
        var u = uy.bind(null, l, e);
        e.then(u, u);
      }
    });
  }
  function pl(l, t) {
    var a = t.deletions;
    if (a !== null)
      for (var e = 0; e < a.length; e++) {
        var u = a[e],
          n = l,
          i = t,
          c = i;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (la(c.type)) {
                ((F = c.stateNode), (Tl = !1));
                break l;
              }
              break;
            case 5:
              ((F = c.stateNode), (Tl = !1));
              break l;
            case 3:
            case 4:
              ((F = c.stateNode.containerInfo), (Tl = !0));
              break l;
          }
          c = c.return;
        }
        if (F === null) throw Error(b(160));
        (xd(n, i, u),
          (F = null),
          (Tl = !1),
          (n = u.alternate),
          n !== null && (n.return = null),
          (u.return = null));
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; ) (Vd(t, l), (t = t.sibling));
  }
  var $l = null;
  function Vd(l, t) {
    var a = l.alternate,
      e = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (pl(t, l),
          zl(l),
          e & 4 && (Ft(3, l, l.return), vu(3, l), Ft(5, l, l.return)));
        break;
      case 1:
        (pl(t, l),
          zl(l),
          e & 512 && (el || a === null || tt(a, a.return)),
          e & 64 &&
            vt &&
            ((l = l.updateQueue),
            l !== null &&
              ((e = l.callbacks),
              e !== null &&
                ((a = l.shared.hiddenCallbacks),
                (l.shared.hiddenCallbacks = a === null ? e : a.concat(e))))));
        break;
      case 26:
        var u = $l;
        if (
          (pl(t, l),
          zl(l),
          e & 512 && (el || a === null || tt(a, a.return)),
          e & 4)
        ) {
          var n = a !== null ? a.memoizedState : null;
          if (((e = l.memoizedState), a === null))
            if (e === null)
              if (l.stateNode === null) {
                l: {
                  ((e = l.type),
                    (a = l.memoizedProps),
                    (u = u.ownerDocument || u));
                  t: switch (e) {
                    case "title":
                      ((n = u.getElementsByTagName("title")[0]),
                        (!n ||
                          n[fu] ||
                          n[vl] ||
                          n.namespaceURI === "http://www.w3.org/2000/svg" ||
                          n.hasAttribute("itemprop")) &&
                          ((n = u.createElement(e)),
                          u.head.insertBefore(
                            n,
                            u.querySelector("head > title"),
                          )),
                        hl(n, e, a),
                        (n[vl] = l),
                        ol(n),
                        (e = n));
                      break l;
                    case "link":
                      var i = Xs("link", "href", u).get(e + (a.href || ""));
                      if (i) {
                        for (var c = 0; c < i.length; c++)
                          if (
                            ((n = i[c]),
                            n.getAttribute("href") ===
                              (a.href == null || a.href === ""
                                ? null
                                : a.href) &&
                              n.getAttribute("rel") ===
                                (a.rel == null ? null : a.rel) &&
                              n.getAttribute("title") ===
                                (a.title == null ? null : a.title) &&
                              n.getAttribute("crossorigin") ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            i.splice(c, 1);
                            break t;
                          }
                      }
                      ((n = u.createElement(e)),
                        hl(n, e, a),
                        u.head.appendChild(n));
                      break;
                    case "meta":
                      if (
                        (i = Xs("meta", "content", u).get(
                          e + (a.content || ""),
                        ))
                      ) {
                        for (c = 0; c < i.length; c++)
                          if (
                            ((n = i[c]),
                            n.getAttribute("content") ===
                              (a.content == null ? null : "" + a.content) &&
                              n.getAttribute("name") ===
                                (a.name == null ? null : a.name) &&
                              n.getAttribute("property") ===
                                (a.property == null ? null : a.property) &&
                              n.getAttribute("http-equiv") ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              n.getAttribute("charset") ===
                                (a.charSet == null ? null : a.charSet))
                          ) {
                            i.splice(c, 1);
                            break t;
                          }
                      }
                      ((n = u.createElement(e)),
                        hl(n, e, a),
                        u.head.appendChild(n));
                      break;
                    default:
                      throw Error(b(468, e));
                  }
                  ((n[vl] = l), ol(n), (e = n));
                }
                l.stateNode = e;
              } else Qs(u, l.type, l.stateNode);
            else l.stateNode = js(u, e, l.memoizedProps);
          else
            n !== e
              ? (n === null
                  ? a.stateNode !== null &&
                    ((a = a.stateNode), a.parentNode.removeChild(a))
                  : n.count--,
                e === null
                  ? Qs(u, l.type, l.stateNode)
                  : js(u, e, l.memoizedProps))
              : e === null &&
                l.stateNode !== null &&
                Yi(l, l.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        (pl(t, l),
          zl(l),
          e & 512 && (el || a === null || tt(a, a.return)),
          a !== null && e & 4 && Yi(l, l.memoizedProps, a.memoizedProps));
        break;
      case 5:
        if (
          (pl(t, l),
          zl(l),
          e & 512 && (el || a === null || tt(a, a.return)),
          l.flags & 32)
        ) {
          u = l.stateNode;
          try {
            Ia(u, "");
          } catch (p) {
            Q(l, l.return, p);
          }
        }
        (e & 4 &&
          l.stateNode != null &&
          ((u = l.memoizedProps), Yi(l, u, a !== null ? a.memoizedProps : u)),
          e & 1024 && (ji = !0));
        break;
      case 6:
        if ((pl(t, l), zl(l), e & 4)) {
          if (l.stateNode === null) throw Error(b(162));
          ((e = l.memoizedProps), (a = l.stateNode));
          try {
            a.nodeValue = e;
          } catch (p) {
            Q(l, l.return, p);
          }
        }
        break;
      case 3:
        if (
          ((tn = null),
          (u = $l),
          ($l = Dn(t.containerInfo)),
          pl(t, l),
          ($l = u),
          zl(l),
          e & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            ie(t.containerInfo);
          } catch (p) {
            Q(l, l.return, p);
          }
        ji && ((ji = !1), Kd(l));
        break;
      case 4:
        ((e = $l),
          ($l = Dn(l.stateNode.containerInfo)),
          pl(t, l),
          zl(l),
          ($l = e));
        break;
      case 12:
        (pl(t, l), zl(l));
        break;
      case 31:
        (pl(t, l),
          zl(l),
          e & 4 &&
            ((e = l.updateQueue),
            e !== null && ((l.updateQueue = null), Gu(l, e))));
        break;
      case 13:
        (pl(t, l),
          zl(l),
          l.child.flags & 8192 &&
            (l.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (Kn = Hl()),
          e & 4 &&
            ((e = l.updateQueue),
            e !== null && ((l.updateQueue = null), Gu(l, e))));
        break;
      case 22:
        u = l.memoizedState !== null;
        var f = a !== null && a.memoizedState !== null,
          v = vt,
          g = el;
        if (
          ((vt = v || u),
          (el = g || f),
          pl(t, l),
          (el = g),
          (vt = v),
          zl(l),
          e & 8192)
        )
          l: for (
            t = l.stateNode,
              t._visibility = u ? t._visibility & -2 : t._visibility | 1,
              u && (a === null || f || vt || el || na(l)),
              a = null,
              t = l;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                f = a = t;
                try {
                  if (((n = f.stateNode), u))
                    ((i = n.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"));
                  else {
                    c = f.stateNode;
                    var S = f.memoizedProps.style,
                      y =
                        S != null && S.hasOwnProperty("display")
                          ? S.display
                          : null;
                    c.style.display =
                      y == null || typeof y == "boolean" ? "" : ("" + y).trim();
                  }
                } catch (p) {
                  Q(f, f.return, p);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                f = t;
                try {
                  f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                } catch (p) {
                  Q(f, f.return, p);
                }
              }
            } else if (t.tag === 18) {
              if (a === null) {
                f = t;
                try {
                  var h = f.stateNode;
                  u ? Rs(h, !0) : Rs(f.stateNode, !1);
                } catch (p) {
                  Q(f, f.return, p);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === l) &&
              t.child !== null
            ) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              (a === t && (a = null), (t = t.return));
            }
            (a === t && (a = null),
              (t.sibling.return = t.return),
              (t = t.sibling));
          }
        e & 4 &&
          ((e = l.updateQueue),
          e !== null &&
            ((a = e.retryQueue),
            a !== null && ((e.retryQueue = null), Gu(l, a))));
        break;
      case 19:
        (pl(t, l),
          zl(l),
          e & 4 &&
            ((e = l.updateQueue),
            e !== null && ((l.updateQueue = null), Gu(l, e))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (pl(t, l), zl(l));
    }
  }
  function zl(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var a, e = l.return; e !== null; ) {
          if (Gd(e)) {
            a = e;
            break;
          }
          e = e.return;
        }
        if (a == null) throw Error(b(160));
        switch (a.tag) {
          case 27:
            var u = a.stateNode,
              n = Gi(l);
            zn(l, n, u);
            break;
          case 5:
            var i = a.stateNode;
            a.flags & 32 && (Ia(i, ""), (a.flags &= -33));
            var c = Gi(l);
            zn(l, c, i);
            break;
          case 3:
          case 4:
            var f = a.stateNode.containerInfo,
              v = Gi(l);
            Oc(l, v, f);
            break;
          default:
            throw Error(b(161));
        }
      } catch (g) {
        Q(l, l.return, g);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function Kd(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        (Kd(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (l = l.sibling));
      }
  }
  function ot(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (Xd(l, t.alternate, t), (t = t.sibling));
  }
  function na(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (Ft(4, t, t.return), na(t));
          break;
        case 1:
          tt(t, t.return);
          var a = t.stateNode;
          (typeof a.componentWillUnmount == "function" && Bd(t, t.return, a),
            na(t));
          break;
        case 27:
          Ze(t.stateNode);
        case 26:
        case 5:
          (tt(t, t.return), na(t));
          break;
        case 22:
          t.memoizedState === null && na(t);
          break;
        case 30:
          na(t);
          break;
        default:
          na(t);
      }
      l = l.sibling;
    }
  }
  function st(l, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var e = t.alternate,
        u = l,
        n = t,
        i = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          (st(u, n, a), vu(4, n));
          break;
        case 1:
          if (
            (st(u, n, a),
            (e = n),
            (u = e.stateNode),
            typeof u.componentDidMount == "function")
          )
            try {
              u.componentDidMount();
            } catch (v) {
              Q(e, e.return, v);
            }
          if (((e = n), (u = e.updateQueue), u !== null)) {
            var c = e.stateNode;
            try {
              var f = u.shared.hiddenCallbacks;
              if (f !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < f.length; u++)
                  L0(f[u], c);
            } catch (v) {
              Q(e, e.return, v);
            }
          }
          (a && i & 64 && qd(n), Xe(n, n.return));
          break;
        case 27:
          jd(n);
        case 26:
        case 5:
          (st(u, n, a), a && e === null && i & 4 && Yd(n), Xe(n, n.return));
          break;
        case 12:
          st(u, n, a);
          break;
        case 31:
          (st(u, n, a), a && i & 4 && Ld(u, n));
          break;
        case 13:
          (st(u, n, a), a && i & 4 && Zd(u, n));
          break;
        case 22:
          (n.memoizedState === null && st(u, n, a), Xe(n, n.return));
          break;
        case 30:
          break;
        default:
          st(u, n, a);
      }
      t = t.sibling;
    }
  }
  function Of(l, t) {
    var a = null;
    (l !== null &&
      l.memoizedState !== null &&
      l.memoizedState.cachePool !== null &&
      (a = l.memoizedState.cachePool.pool),
      (l = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (l = t.memoizedState.cachePool.pool),
      l !== a && (l != null && l.refCount++, a != null && su(a)));
  }
  function Mf(l, t) {
    ((l = null),
      t.alternate !== null && (l = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== l && (t.refCount++, l != null && su(l)));
  }
  function Wl(l, t, a, e) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (Jd(l, t, a, e), (t = t.sibling));
  }
  function Jd(l, t, a, e) {
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (Wl(l, t, a, e), u & 2048 && vu(9, t));
        break;
      case 1:
        Wl(l, t, a, e);
        break;
      case 3:
        (Wl(l, t, a, e),
          u & 2048 &&
            ((l = null),
            t.alternate !== null && (l = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== l && (t.refCount++, l != null && su(l))));
        break;
      case 12:
        if (u & 2048) {
          (Wl(l, t, a, e), (l = t.stateNode));
          try {
            var n = t.memoizedProps,
              i = n.id,
              c = n.onPostCommit;
            typeof c == "function" &&
              c(
                i,
                t.alternate === null ? "mount" : "update",
                l.passiveEffectDuration,
                -0,
              );
          } catch (f) {
            Q(t, t.return, f);
          }
        } else Wl(l, t, a, e);
        break;
      case 31:
        Wl(l, t, a, e);
        break;
      case 13:
        Wl(l, t, a, e);
        break;
      case 23:
        break;
      case 22:
        ((n = t.stateNode),
          (i = t.alternate),
          t.memoizedState !== null
            ? n._visibility & 2
              ? Wl(l, t, a, e)
              : Qe(l, t)
            : n._visibility & 2
              ? Wl(l, t, a, e)
              : ((n._visibility |= 2),
                Da(l, t, a, e, (t.subtreeFlags & 10256) !== 0 || !1)),
          u & 2048 && Of(i, t));
        break;
      case 24:
        (Wl(l, t, a, e), u & 2048 && Mf(t.alternate, t));
        break;
      default:
        Wl(l, t, a, e);
    }
  }
  function Da(l, t, a, e, u) {
    for (
      u = u && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;
    ) {
      var n = l,
        i = t,
        c = a,
        f = e,
        v = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          (Da(n, i, c, f, u), vu(8, i));
          break;
        case 23:
          break;
        case 22:
          var g = i.stateNode;
          (i.memoizedState !== null
            ? g._visibility & 2
              ? Da(n, i, c, f, u)
              : Qe(n, i)
            : ((g._visibility |= 2), Da(n, i, c, f, u)),
            u && v & 2048 && Of(i.alternate, i));
          break;
        case 24:
          (Da(n, i, c, f, u), u && v & 2048 && Mf(i.alternate, i));
          break;
        default:
          Da(n, i, c, f, u);
      }
      t = t.sibling;
    }
  }
  function Qe(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = l,
          e = t,
          u = e.flags;
        switch (e.tag) {
          case 22:
            (Qe(a, e), u & 2048 && Of(e.alternate, e));
            break;
          case 24:
            (Qe(a, e), u & 2048 && Mf(e.alternate, e));
            break;
          default:
            Qe(a, e);
        }
        t = t.sibling;
      }
  }
  var Ue = 8192;
  function Na(l, t, a) {
    if (l.subtreeFlags & Ue)
      for (l = l.child; l !== null; ) (wd(l, t, a), (l = l.sibling));
  }
  function wd(l, t, a) {
    switch (l.tag) {
      case 26:
        (Na(l, t, a),
          l.flags & Ue &&
            l.memoizedState !== null &&
            Ry(a, $l, l.memoizedState, l.memoizedProps));
        break;
      case 5:
        Na(l, t, a);
        break;
      case 3:
      case 4:
        var e = $l;
        (($l = Dn(l.stateNode.containerInfo)), Na(l, t, a), ($l = e));
        break;
      case 22:
        l.memoizedState === null &&
          ((e = l.alternate),
          e !== null && e.memoizedState !== null
            ? ((e = Ue), (Ue = 16777216), Na(l, t, a), (Ue = e))
            : Na(l, t, a));
        break;
      default:
        Na(l, t, a);
    }
  }
  function Wd(l) {
    var t = l.alternate;
    if (t !== null && ((l = t.child), l !== null)) {
      t.child = null;
      do ((t = l.sibling), (l.sibling = null), (l = t));
      while (l !== null);
    }
  }
  function Ee(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var e = t[a];
          ((fl = e), kd(e, l));
        }
      Wd(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) ($d(l), (l = l.sibling));
  }
  function $d(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        (Ee(l), l.flags & 2048 && Ft(9, l, l.return));
        break;
      case 3:
        Ee(l);
        break;
      case 12:
        Ee(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null &&
        t._visibility & 2 &&
        (l.return === null || l.return.tag !== 13)
          ? ((t._visibility &= -3), Pu(l))
          : Ee(l);
        break;
      default:
        Ee(l);
    }
  }
  function Pu(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var e = t[a];
          ((fl = e), kd(e, l));
        }
      Wd(l);
    }
    for (l = l.child; l !== null; ) {
      switch (((t = l), t.tag)) {
        case 0:
        case 11:
        case 15:
          (Ft(8, t, t.return), Pu(t));
          break;
        case 22:
          ((a = t.stateNode),
            a._visibility & 2 && ((a._visibility &= -3), Pu(t)));
          break;
        default:
          Pu(t);
      }
      l = l.sibling;
    }
  }
  function kd(l, t) {
    for (; fl !== null; ) {
      var a = fl;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Ft(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var e = a.memoizedState.cachePool.pool;
            e != null && e.refCount++;
          }
          break;
        case 24:
          su(a.memoizedState.cache);
      }
      if (((e = a.child), e !== null)) ((e.return = a), (fl = e));
      else
        l: for (a = l; fl !== null; ) {
          e = fl;
          var u = e.sibling,
            n = e.return;
          if ((Qd(e), e === a)) {
            fl = null;
            break l;
          }
          if (u !== null) {
            ((u.return = n), (fl = u));
            break l;
          }
          fl = n;
        }
    }
  }
  var k1 = {
      getCacheForType: function (l) {
        var t = yl(ul),
          a = t.data.get(l);
        return (a === void 0 && ((a = l()), t.data.set(l, a)), a);
      },
      cacheSignal: function () {
        return yl(ul).controller.signal;
      },
    },
    F1 = typeof WeakMap == "function" ? WeakMap : Map,
    G = 0,
    V = null,
    H = null,
    R = 0,
    X = 0,
    _l = null,
    Gt = !1,
    de = !1,
    _f = !1,
    Et = 0,
    P = 0,
    It = 0,
    sa = 0,
    Nf = 0,
    Ul = 0,
    ae = 0,
    xe = null,
    El = null,
    Mc = !1,
    Kn = 0,
    Fd = 0,
    Tn = 1 / 0,
    En = null,
    Vt = null,
    il = 0,
    Kt = null,
    ee = null,
    St = 0,
    _c = 0,
    Nc = null,
    Id = null,
    Le = 0,
    Dc = null;
  function ql() {
    return (G & 2) !== 0 && R !== 0 ? R & -R : O.T !== null ? Uf() : c0();
  }
  function Pd() {
    if (Ul === 0)
      if ((R & 536870912) === 0 || q) {
        var l = _u;
        ((_u <<= 1), (_u & 3932160) === 0 && (_u = 262144), (Ul = l));
      } else Ul = 536870912;
    return ((l = Yl.current), l !== null && (l.flags |= 32), Ul);
  }
  function Al(l, t, a) {
    (((l === V && (X === 2 || X === 9)) || l.cancelPendingCommit !== null) &&
      (ue(l, 0), jt(l, R, Ul, !1)),
      cu(l, a),
      ((G & 2) === 0 || l !== V) &&
        (l === V && ((G & 2) === 0 && (sa |= a), P === 4 && jt(l, R, Ul, !1)),
        ut(l)));
  }
  function lv(l, t, a) {
    if ((G & 6) !== 0) throw Error(b(327));
    var e = (!a && (t & 127) === 0 && (t & l.expiredLanes) === 0) || iu(l, t),
      u = e ? ly(l, t) : Xi(l, t, !0),
      n = e;
    do {
      if (u === 0) {
        de && !e && jt(l, t, 0, !1);
        break;
      } else {
        if (((a = l.current.alternate), n && !I1(a))) {
          ((u = Xi(l, t, !1)), (n = !1));
          continue;
        }
        if (u === 2) {
          if (((n = t), l.errorRecoveryDisabledLanes & n)) var i = 0;
          else
            ((i = l.pendingLanes & -536870913),
              (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0));
          if (i !== 0) {
            t = i;
            l: {
              var c = l;
              u = xe;
              var f = c.current.memoizedState.isDehydrated;
              if ((f && (ue(c, i).flags |= 256), (i = Xi(c, i, !1)), i !== 2)) {
                if (_f && !f) {
                  ((c.errorRecoveryDisabledLanes |= n), (sa |= n), (u = 4));
                  break l;
                }
                ((n = El),
                  (El = u),
                  n !== null &&
                    (El === null ? (El = n) : El.push.apply(El, n)));
              }
              u = i;
            }
            if (((n = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          (ue(l, 0), jt(l, t, 0, !0));
          break;
        }
        l: {
          switch (((e = l), (n = u), n)) {
            case 0:
            case 1:
              throw Error(b(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              jt(e, t, Ul, !Gt);
              break l;
            case 2:
              El = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(b(329));
          }
          if ((t & 62914560) === t && ((u = Kn + 300 - Hl()), 10 < u)) {
            if ((jt(e, t, Ul, !Gt), qn(e, 0, !0) !== 0)) break l;
            ((St = t),
              (e.timeoutHandle = pv(
                Ss.bind(
                  null,
                  e,
                  a,
                  El,
                  En,
                  Mc,
                  t,
                  Ul,
                  sa,
                  ae,
                  Gt,
                  n,
                  "Throttled",
                  -0,
                  0,
                ),
                u,
              )));
            break l;
          }
          Ss(e, a, El, En, Mc, t, Ul, sa, ae, Gt, n, null, -0, 0);
        }
      }
      break;
    } while (!0);
    ut(l);
  }
  function Ss(l, t, a, e, u, n, i, c, f, v, g, S, y, h) {
    if (
      ((l.timeoutHandle = -1),
      (S = t.subtreeFlags),
      S & 8192 || (S & 16785408) === 16785408)
    ) {
      ((S = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: yt,
      }),
        wd(t, n, S));
      var p =
        (n & 62914560) === n ? Kn - Hl() : (n & 4194048) === n ? Fd - Hl() : 0;
      if (((p = qy(S, p)), p !== null)) {
        ((St = n),
          (l.cancelPendingCommit = p(
            ps.bind(null, l, t, n, a, e, u, i, c, f, g, S, null, y, h),
          )),
          jt(l, n, i, !v));
        return;
      }
    }
    ps(l, t, n, a, e, u, i, c, f);
  }
  function I1(l) {
    for (var t = l; ; ) {
      var a = t.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        t.flags & 16384 &&
        ((a = t.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var e = 0; e < a.length; e++) {
          var u = a[e],
            n = u.getSnapshot;
          u = u.value;
          try {
            if (!Bl(n(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = t.child), t.subtreeFlags & 16384 && a !== null))
        ((a.return = t), (t = a));
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function jt(l, t, a, e) {
    ((t &= ~Nf),
      (t &= ~sa),
      (l.suspendedLanes |= t),
      (l.pingedLanes &= ~t),
      e && (l.warmLanes |= t),
      (e = l.expirationTimes));
    for (var u = t; 0 < u; ) {
      var n = 31 - Rl(u),
        i = 1 << n;
      ((e[n] = -1), (u &= ~i));
    }
    a !== 0 && u0(l, a, t);
  }
  function Jn() {
    return (G & 6) === 0 ? (mu(0, !1), !1) : !0;
  }
  function Df() {
    if (H !== null) {
      if (X === 0) var l = H.return;
      else ((l = H), (ht = pa = null), yf(l), (wa = null), (ke = 0), (l = H));
      for (; l !== null; ) (Rd(l.alternate, l), (l = l.return));
      H = null;
    }
  }
  function ue(l, t) {
    var a = l.timeoutHandle;
    (a !== -1 && ((l.timeoutHandle = -1), gy(a)),
      (a = l.cancelPendingCommit),
      a !== null && ((l.cancelPendingCommit = null), a()),
      (St = 0),
      Df(),
      (V = l),
      (H = a = gt(l.current, null)),
      (R = t),
      (X = 0),
      (_l = null),
      (Gt = !1),
      (de = iu(l, t)),
      (_f = !1),
      (ae = Ul = Nf = sa = It = P = 0),
      (El = xe = null),
      (Mc = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var e = l.entangledLanes;
    if (e !== 0)
      for (l = l.entanglements, e &= t; 0 < e; ) {
        var u = 31 - Rl(e),
          n = 1 << u;
        ((t |= l[u]), (e &= ~n));
      }
    return ((Et = t), jn(), a);
  }
  function tv(l, t) {
    ((N = null),
      (O.H = Ie),
      t === se || t === Qn
        ? ((t = ko()), (X = 3))
        : t === cf
          ? ((t = ko()), (X = 4))
          : (X =
              t === Ef
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (_l = t),
      H === null && ((P = 1), bn(l, Zl(t, l.current))));
  }
  function av() {
    var l = Yl.current;
    return l === null
      ? !0
      : (R & 4194048) === R
        ? Kl === null
        : (R & 62914560) === R || (R & 536870912) !== 0
          ? l === Kl
          : !1;
  }
  function ev() {
    var l = O.H;
    return ((O.H = Ie), l === null ? Ie : l);
  }
  function uv() {
    var l = O.A;
    return ((O.A = k1), l);
  }
  function An() {
    ((P = 4),
      Gt || ((R & 4194048) !== R && Yl.current !== null) || (de = !0),
      ((It & 134217727) === 0 && (sa & 134217727) === 0) ||
        V === null ||
        jt(V, R, Ul, !1));
  }
  function Xi(l, t, a) {
    var e = G;
    G |= 2;
    var u = ev(),
      n = uv();
    ((V !== l || R !== t) && ((En = null), ue(l, t)), (t = !1));
    var i = P;
    l: do
      try {
        if (X !== 0 && H !== null) {
          var c = H,
            f = _l;
          switch (X) {
            case 8:
              (Df(), (i = 6));
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              Yl.current === null && (t = !0);
              var v = X;
              if (((X = 0), (_l = null), La(l, c, f, v), a && de)) {
                i = 0;
                break l;
              }
              break;
            default:
              ((v = X), (X = 0), (_l = null), La(l, c, f, v));
          }
        }
        (P1(), (i = P));
        break;
      } catch (g) {
        tv(l, g);
      }
    while (!0);
    return (
      t && l.shellSuspendCounter++,
      (ht = pa = null),
      (G = e),
      (O.H = u),
      (O.A = n),
      H === null && ((V = null), (R = 0), jn()),
      i
    );
  }
  function P1() {
    for (; H !== null; ) nv(H);
  }
  function ly(l, t) {
    var a = G;
    G |= 2;
    var e = ev(),
      u = uv();
    V !== l || R !== t
      ? ((En = null), (Tn = Hl() + 500), ue(l, t))
      : (de = iu(l, t));
    l: do
      try {
        if (X !== 0 && H !== null) {
          t = H;
          var n = _l;
          t: switch (X) {
            case 1:
              ((X = 0), (_l = null), La(l, t, n, 1));
              break;
            case 2:
            case 9:
              if ($o(n)) {
                ((X = 0), (_l = null), bs(t));
                break;
              }
              ((t = function () {
                ((X !== 2 && X !== 9) || V !== l || (X = 7), ut(l));
              }),
                n.then(t, t));
              break l;
            case 3:
              X = 7;
              break l;
            case 4:
              X = 5;
              break l;
            case 7:
              $o(n)
                ? ((X = 0), (_l = null), bs(t))
                : ((X = 0), (_l = null), La(l, t, n, 7));
              break;
            case 5:
              var i = null;
              switch (H.tag) {
                case 26:
                  i = H.memoizedState;
                case 5:
                case 27:
                  var c = H;
                  if (i ? Ov(i) : c.stateNode.complete) {
                    ((X = 0), (_l = null));
                    var f = c.sibling;
                    if (f !== null) H = f;
                    else {
                      var v = c.return;
                      v !== null ? ((H = v), wn(v)) : (H = null);
                    }
                    break t;
                  }
              }
              ((X = 0), (_l = null), La(l, t, n, 5));
              break;
            case 6:
              ((X = 0), (_l = null), La(l, t, n, 6));
              break;
            case 8:
              (Df(), (P = 6));
              break l;
            default:
              throw Error(b(462));
          }
        }
        ty();
        break;
      } catch (g) {
        tv(l, g);
      }
    while (!0);
    return (
      (ht = pa = null),
      (O.H = e),
      (O.A = u),
      (G = a),
      H !== null ? 0 : ((V = null), (R = 0), jn(), P)
    );
  }
  function ty() {
    for (; H !== null && !Am(); ) nv(H);
  }
  function nv(l) {
    var t = Cd(l.alternate, l, Et);
    ((l.memoizedProps = l.pendingProps), t === null ? wn(l) : (H = t));
  }
  function bs(l) {
    var t = l,
      a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = vs(a, t, t.pendingProps, t.type, void 0, R);
        break;
      case 11:
        t = vs(a, t, t.pendingProps, t.type.render, t.ref, R);
        break;
      case 5:
        yf(t);
      default:
        (Rd(a, t), (t = H = R0(t, Et)), (t = Cd(a, t, Et)));
    }
    ((l.memoizedProps = l.pendingProps), t === null ? wn(l) : (H = t));
  }
  function La(l, t, a, e) {
    ((ht = pa = null), yf(t), (wa = null), (ke = 0));
    var u = t.return;
    try {
      if (Z1(l, u, t, a, R)) {
        ((P = 1), bn(l, Zl(a, l.current)), (H = null));
        return;
      }
    } catch (n) {
      if (u !== null) throw ((H = u), n);
      ((P = 1), bn(l, Zl(a, l.current)), (H = null));
      return;
    }
    t.flags & 32768
      ? (q || e === 1
          ? (l = !0)
          : de || (R & 536870912) !== 0
            ? (l = !1)
            : ((Gt = l = !0),
              (e === 2 || e === 9 || e === 3 || e === 6) &&
                ((e = Yl.current),
                e !== null && e.tag === 13 && (e.flags |= 16384))),
        iv(t, l))
      : wn(t);
  }
  function wn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        iv(t, Gt);
        return;
      }
      l = t.return;
      var a = J1(t.alternate, t, Et);
      if (a !== null) {
        H = a;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        H = t;
        return;
      }
      H = t = l;
    } while (t !== null);
    P === 0 && (P = 5);
  }
  function iv(l, t) {
    do {
      var a = w1(l.alternate, l);
      if (a !== null) {
        ((a.flags &= 32767), (H = a));
        return;
      }
      if (
        ((a = l.return),
        a !== null &&
          ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !t && ((l = l.sibling), l !== null))
      ) {
        H = l;
        return;
      }
      H = l = a;
    } while (l !== null);
    ((P = 6), (H = null));
  }
  function ps(l, t, a, e, u, n, i, c, f) {
    l.cancelPendingCommit = null;
    do Wn();
    while (il !== 0);
    if ((G & 6) !== 0) throw Error(b(327));
    if (t !== null) {
      if (t === l.current) throw Error(b(177));
      if (
        ((n = t.lanes | t.childLanes),
        (n |= Pc),
        qm(l, a, n, i, c, f),
        l === V && ((H = V = null), (R = 0)),
        (ee = t),
        (Kt = l),
        (St = a),
        (_c = n),
        (Nc = u),
        (Id = e),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((l.callbackNode = null),
            (l.callbackPriority = 0),
            ny(fn, function () {
              return (dv(), null);
            }))
          : ((l.callbackNode = null), (l.callbackPriority = 0)),
        (e = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || e)
      ) {
        ((e = O.T), (O.T = null), (u = j.p), (j.p = 2), (i = G), (G |= 4));
        try {
          W1(l, t, a);
        } finally {
          ((G = i), (j.p = u), (O.T = e));
        }
      }
      ((il = 1), cv(), fv(), ov());
    }
  }
  function cv() {
    if (il === 1) {
      il = 0;
      var l = Kt,
        t = ee,
        a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        ((a = O.T), (O.T = null));
        var e = j.p;
        j.p = 2;
        var u = G;
        G |= 4;
        try {
          Vd(t, l);
          var n = Rc,
            i = O0(l.containerInfo),
            c = n.focusedElem,
            f = n.selectionRange;
          if (
            i !== c &&
            c &&
            c.ownerDocument &&
            A0(c.ownerDocument.documentElement, c)
          ) {
            if (f !== null && Ic(c)) {
              var v = f.start,
                g = f.end;
              if ((g === void 0 && (g = v), "selectionStart" in c))
                ((c.selectionStart = v),
                  (c.selectionEnd = Math.min(g, c.value.length)));
              else {
                var S = c.ownerDocument || document,
                  y = (S && S.defaultView) || window;
                if (y.getSelection) {
                  var h = y.getSelection(),
                    p = c.textContent.length,
                    A = Math.min(f.start, p),
                    x = f.end === void 0 ? A : Math.min(f.end, p);
                  !h.extend && A > x && ((i = x), (x = A), (A = i));
                  var s = Lo(c, A),
                    o = Lo(c, x);
                  if (
                    s &&
                    o &&
                    (h.rangeCount !== 1 ||
                      h.anchorNode !== s.node ||
                      h.anchorOffset !== s.offset ||
                      h.focusNode !== o.node ||
                      h.focusOffset !== o.offset)
                  ) {
                    var m = S.createRange();
                    (m.setStart(s.node, s.offset),
                      h.removeAllRanges(),
                      A > x
                        ? (h.addRange(m), h.extend(o.node, o.offset))
                        : (m.setEnd(o.node, o.offset), h.addRange(m)));
                  }
                }
              }
            }
            for (S = [], h = c; (h = h.parentNode); )
              h.nodeType === 1 &&
                S.push({ element: h, left: h.scrollLeft, top: h.scrollTop });
            for (
              typeof c.focus == "function" && c.focus(), c = 0;
              c < S.length;
              c++
            ) {
              var r = S[c];
              ((r.element.scrollLeft = r.left), (r.element.scrollTop = r.top));
            }
          }
          ((Cn = !!Cc), (Rc = Cc = null));
        } finally {
          ((G = u), (j.p = e), (O.T = a));
        }
      }
      ((l.current = t), (il = 2));
    }
  }
  function fv() {
    if (il === 2) {
      il = 0;
      var l = Kt,
        t = ee,
        a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        ((a = O.T), (O.T = null));
        var e = j.p;
        j.p = 2;
        var u = G;
        G |= 4;
        try {
          Xd(l, t.alternate, t);
        } finally {
          ((G = u), (j.p = e), (O.T = a));
        }
      }
      il = 3;
    }
  }
  function ov() {
    if (il === 4 || il === 3) {
      ((il = 0), Om());
      var l = Kt,
        t = ee,
        a = St,
        e = Id;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (il = 5)
        : ((il = 0), (ee = Kt = null), sv(l, l.pendingLanes));
      var u = l.pendingLanes;
      if (
        (u === 0 && (Vt = null),
        Kc(a),
        (t = t.stateNode),
        Cl && typeof Cl.onCommitFiberRoot == "function")
      )
        try {
          Cl.onCommitFiberRoot(nu, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (e !== null) {
        ((t = O.T), (u = j.p), (j.p = 2), (O.T = null));
        try {
          for (var n = l.onRecoverableError, i = 0; i < e.length; i++) {
            var c = e[i];
            n(c.value, { componentStack: c.stack });
          }
        } finally {
          ((O.T = t), (j.p = u));
        }
      }
      ((St & 3) !== 0 && Wn(),
        ut(l),
        (u = l.pendingLanes),
        (a & 261930) !== 0 && (u & 42) !== 0
          ? l === Dc
            ? Le++
            : ((Le = 0), (Dc = l))
          : (Le = 0),
        mu(0, !1));
    }
  }
  function sv(l, t) {
    (l.pooledCacheLanes &= t) === 0 &&
      ((t = l.pooledCache), t != null && ((l.pooledCache = null), su(t)));
  }
  function Wn() {
    return (cv(), fv(), ov(), dv());
  }
  function dv() {
    if (il !== 5) return !1;
    var l = Kt,
      t = _c;
    _c = 0;
    var a = Kc(St),
      e = O.T,
      u = j.p;
    try {
      ((j.p = 32 > a ? 32 : a), (O.T = null), (a = Nc), (Nc = null));
      var n = Kt,
        i = St;
      if (((il = 0), (ee = Kt = null), (St = 0), (G & 6) !== 0))
        throw Error(b(331));
      var c = G;
      if (
        ((G |= 4),
        $d(n.current),
        Jd(n, n.current, i, a),
        (G = c),
        mu(0, !1),
        Cl && typeof Cl.onPostCommitFiberRoot == "function")
      )
        try {
          Cl.onPostCommitFiberRoot(nu, n);
        } catch {}
      return !0;
    } finally {
      ((j.p = u), (O.T = e), sv(l, t));
    }
  }
  function zs(l, t, a) {
    ((t = Zl(a, t)),
      (t = Tc(l.stateNode, t, 2)),
      (l = Zt(l, t, 2)),
      l !== null && (cu(l, 2), ut(l)));
  }
  function Q(l, t, a) {
    if (l.tag === 3) zs(l, l, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          zs(t, l, a);
          break;
        } else if (t.tag === 1) {
          var e = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof e.componentDidCatch == "function" &&
              (Vt === null || !Vt.has(e)))
          ) {
            ((l = Zl(a, l)),
              (a = Md(2)),
              (e = Zt(t, a, 2)),
              e !== null && (_d(a, e, t, l), cu(e, 2), ut(e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Qi(l, t, a) {
    var e = l.pingCache;
    if (e === null) {
      e = l.pingCache = new F1();
      var u = new Set();
      e.set(t, u);
    } else ((u = e.get(t)), u === void 0 && ((u = new Set()), e.set(t, u)));
    u.has(a) ||
      ((_f = !0), u.add(a), (l = ay.bind(null, l, t, a)), t.then(l, l));
  }
  function ay(l, t, a) {
    var e = l.pingCache;
    (e !== null && e.delete(t),
      (l.pingedLanes |= l.suspendedLanes & a),
      (l.warmLanes &= ~a),
      V === l &&
        (R & a) === a &&
        (P === 4 || (P === 3 && (R & 62914560) === R && 300 > Hl() - Kn)
          ? (G & 2) === 0 && ue(l, 0)
          : (Nf |= a),
        ae === R && (ae = 0)),
      ut(l));
  }
  function vv(l, t) {
    (t === 0 && (t = e0()), (l = ba(l, t)), l !== null && (cu(l, t), ut(l)));
  }
  function ey(l) {
    var t = l.memoizedState,
      a = 0;
    (t !== null && (a = t.retryLane), vv(l, a));
  }
  function uy(l, t) {
    var a = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var e = l.stateNode,
          u = l.memoizedState;
        u !== null && (a = u.retryLane);
        break;
      case 19:
        e = l.stateNode;
        break;
      case 22:
        e = l.stateNode._retryCache;
        break;
      default:
        throw Error(b(314));
    }
    (e !== null && e.delete(t), vv(l, a));
  }
  function ny(l, t) {
    return Zc(l, t);
  }
  var On = null,
    Ua = null,
    Uc = !1,
    Mn = !1,
    xi = !1,
    Xt = 0;
  function ut(l) {
    (l !== Ua &&
      l.next === null &&
      (Ua === null ? (On = Ua = l) : (Ua = Ua.next = l)),
      (Mn = !0),
      Uc || ((Uc = !0), cy()));
  }
  function mu(l, t) {
    if (!xi && Mn) {
      xi = !0;
      do
        for (var a = !1, e = On; e !== null; ) {
          if (!t)
            if (l !== 0) {
              var u = e.pendingLanes;
              if (u === 0) var n = 0;
              else {
                var i = e.suspendedLanes,
                  c = e.pingedLanes;
                ((n = (1 << (31 - Rl(42 | l) + 1)) - 1),
                  (n &= u & ~(i & ~c)),
                  (n = n & 201326741 ? (n & 201326741) | 1 : n ? n | 2 : 0));
              }
              n !== 0 && ((a = !0), Ts(e, n));
            } else
              ((n = R),
                (n = qn(
                  e,
                  e === V ? n : 0,
                  e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
                )),
                (n & 3) === 0 || iu(e, n) || ((a = !0), Ts(e, n)));
          e = e.next;
        }
      while (a);
      xi = !1;
    }
  }
  function iy() {
    mv();
  }
  function mv() {
    Mn = Uc = !1;
    var l = 0;
    Xt !== 0 && hy() && (l = Xt);
    for (var t = Hl(), a = null, e = On; e !== null; ) {
      var u = e.next,
        n = yv(e, t);
      (n === 0
        ? ((e.next = null),
          a === null ? (On = u) : (a.next = u),
          u === null && (Ua = a))
        : ((a = e), (l !== 0 || (n & 3) !== 0) && (Mn = !0)),
        (e = u));
    }
    ((il !== 0 && il !== 5) || mu(l, !1), Xt !== 0 && (Xt = 0));
  }
  function yv(l, t) {
    for (
      var a = l.suspendedLanes,
        e = l.pingedLanes,
        u = l.expirationTimes,
        n = l.pendingLanes & -62914561;
      0 < n;
    ) {
      var i = 31 - Rl(n),
        c = 1 << i,
        f = u[i];
      (f === -1
        ? ((c & a) === 0 || (c & e) !== 0) && (u[i] = Rm(c, t))
        : f <= t && (l.expiredLanes |= c),
        (n &= ~c));
    }
    if (
      ((t = V),
      (a = R),
      (a = qn(
        l,
        l === t ? a : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
      )),
      (e = l.callbackNode),
      a === 0 ||
        (l === t && (X === 2 || X === 9)) ||
        l.cancelPendingCommit !== null)
    )
      return (
        e !== null && e !== null && gi(e),
        (l.callbackNode = null),
        (l.callbackPriority = 0)
      );
    if ((a & 3) === 0 || iu(l, a)) {
      if (((t = a & -a), t === l.callbackPriority)) return t;
      switch ((e !== null && gi(e), Kc(a))) {
        case 2:
        case 8:
          a = t0;
          break;
        case 32:
          a = fn;
          break;
        case 268435456:
          a = a0;
          break;
        default:
          a = fn;
      }
      return (
        (e = hv.bind(null, l)),
        (a = Zc(a, e)),
        (l.callbackPriority = t),
        (l.callbackNode = a),
        t
      );
    }
    return (
      e !== null && e !== null && gi(e),
      (l.callbackPriority = 2),
      (l.callbackNode = null),
      2
    );
  }
  function hv(l, t) {
    if (il !== 0 && il !== 5)
      return ((l.callbackNode = null), (l.callbackPriority = 0), null);
    var a = l.callbackNode;
    if (Wn() && l.callbackNode !== a) return null;
    var e = R;
    return (
      (e = qn(
        l,
        l === V ? e : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
      )),
      e === 0
        ? null
        : (lv(l, e, t),
          yv(l, Hl()),
          l.callbackNode != null && l.callbackNode === a
            ? hv.bind(null, l)
            : null)
    );
  }
  function Ts(l, t) {
    if (Wn()) return null;
    lv(l, t, !0);
  }
  function cy() {
    ry(function () {
      (G & 6) !== 0 ? Zc(l0, iy) : mv();
    });
  }
  function Uf() {
    if (Xt === 0) {
      var l = Pa;
      (l === 0 && ((l = Mu), (Mu <<= 1), (Mu & 261888) === 0 && (Mu = 256)),
        (Xt = l));
    }
    return Xt;
  }
  function Es(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean"
      ? null
      : typeof l == "function"
        ? l
        : Vu("" + l);
  }
  function As(l, t) {
    var a = t.ownerDocument.createElement("input");
    return (
      (a.name = t.name),
      (a.value = t.value),
      l.id && a.setAttribute("form", l.id),
      t.parentNode.insertBefore(a, t),
      (l = new FormData(l)),
      a.parentNode.removeChild(a),
      l
    );
  }
  function fy(l, t, a, e, u) {
    if (t === "submit" && a && a.stateNode === u) {
      var n = Es((u[Ol] || null).action),
        i = e.submitter;
      i &&
        ((t = (t = i[Ol] || null)
          ? Es(t.formAction)
          : i.getAttribute("formAction")),
        t !== null && ((n = t), (i = null)));
      var c = new Bn("action", "action", null, e, u);
      l.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (e.defaultPrevented) {
                if (Xt !== 0) {
                  var f = i ? As(u, i) : new FormData(u);
                  pc(
                    a,
                    { pending: !0, data: f, method: u.method, action: n },
                    null,
                    f,
                  );
                }
              } else
                typeof n == "function" &&
                  (c.preventDefault(),
                  (f = i ? As(u, i) : new FormData(u)),
                  pc(
                    a,
                    { pending: !0, data: f, method: u.method, action: n },
                    n,
                    f,
                  ));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (ju = 0; ju < fc.length; ju++)
    ((Xu = fc[ju]),
      (Os = Xu.toLowerCase()),
      (Ms = Xu[0].toUpperCase() + Xu.slice(1)),
      kl(Os, "on" + Ms));
  var Xu, Os, Ms, ju;
  kl(_0, "onAnimationEnd");
  kl(N0, "onAnimationIteration");
  kl(D0, "onAnimationStart");
  kl("dblclick", "onDoubleClick");
  kl("focusin", "onFocus");
  kl("focusout", "onBlur");
  kl(M1, "onTransitionRun");
  kl(_1, "onTransitionStart");
  kl(N1, "onTransitionCancel");
  kl(U0, "onTransitionEnd");
  Fa("onMouseEnter", ["mouseout", "mouseover"]);
  Fa("onMouseLeave", ["mouseout", "mouseover"]);
  Fa("onPointerEnter", ["pointerout", "pointerover"]);
  Fa("onPointerLeave", ["pointerout", "pointerover"]);
  ga(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(
      " ",
    ),
  );
  ga(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " ",
    ),
  );
  ga("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
  ga(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" "),
  );
  ga(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" "),
  );
  ga(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
  );
  var Pe =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    oy = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Pe),
    );
  function gv(l, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < l.length; a++) {
      var e = l[a],
        u = e.event;
      e = e.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var i = e.length - 1; 0 <= i; i--) {
            var c = e[i],
              f = c.instance,
              v = c.currentTarget;
            if (((c = c.listener), f !== n && u.isPropagationStopped()))
              break l;
            ((n = c), (u.currentTarget = v));
            try {
              n(u);
            } catch (g) {
              sn(g);
            }
            ((u.currentTarget = null), (n = f));
          }
        else
          for (i = 0; i < e.length; i++) {
            if (
              ((c = e[i]),
              (f = c.instance),
              (v = c.currentTarget),
              (c = c.listener),
              f !== n && u.isPropagationStopped())
            )
              break l;
            ((n = c), (u.currentTarget = v));
            try {
              n(u);
            } catch (g) {
              sn(g);
            }
            ((u.currentTarget = null), (n = f));
          }
      }
    }
  }
  function U(l, t) {
    var a = t[lc];
    a === void 0 && (a = t[lc] = new Set());
    var e = l + "__bubble";
    a.has(e) || (rv(t, l, 2, !1), a.add(e));
  }
  function Li(l, t, a) {
    var e = 0;
    (t && (e |= 4), rv(a, l, e, t));
  }
  var Qu = "_reactListening" + Math.random().toString(36).slice(2);
  function Hf(l) {
    if (!l[Qu]) {
      ((l[Qu] = !0),
        f0.forEach(function (a) {
          a !== "selectionchange" && (oy.has(a) || Li(a, !1, l), Li(a, !0, l));
        }));
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Qu] || ((t[Qu] = !0), Li("selectionchange", !1, t));
    }
  }
  function rv(l, t, a, e) {
    switch (Uv(t)) {
      case 2:
        var u = Gy;
        break;
      case 8:
        u = jy;
        break;
      default:
        u = Bf;
    }
    ((a = u.bind(null, t, a, l)),
      (u = void 0),
      !nc ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (u = !0),
      e
        ? u !== void 0
          ? l.addEventListener(t, a, { capture: !0, passive: u })
          : l.addEventListener(t, a, !0)
        : u !== void 0
          ? l.addEventListener(t, a, { passive: u })
          : l.addEventListener(t, a, !1));
  }
  function Zi(l, t, a, e, u) {
    var n = e;
    if ((t & 1) === 0 && (t & 2) === 0 && e !== null)
      l: for (;;) {
        if (e === null) return;
        var i = e.tag;
        if (i === 3 || i === 4) {
          var c = e.stateNode.containerInfo;
          if (c === u) break;
          if (i === 4)
            for (i = e.return; i !== null; ) {
              var f = i.tag;
              if ((f === 3 || f === 4) && i.stateNode.containerInfo === u)
                return;
              i = i.return;
            }
          for (; c !== null; ) {
            if (((i = Ra(c)), i === null)) return;
            if (((f = i.tag), f === 5 || f === 6 || f === 26 || f === 27)) {
              e = n = i;
              continue l;
            }
            c = c.parentNode;
          }
        }
        e = e.return;
      }
    g0(function () {
      var v = n,
        g = Wc(a),
        S = [];
      l: {
        var y = H0.get(l);
        if (y !== void 0) {
          var h = Bn,
            p = l;
          switch (l) {
            case "keypress":
              if (Ju(a) === 0) break l;
            case "keydown":
            case "keyup":
              h = u1;
              break;
            case "focusin":
              ((p = "focus"), (h = zi));
              break;
            case "focusout":
              ((p = "blur"), (h = zi));
              break;
            case "beforeblur":
            case "afterblur":
              h = zi;
              break;
            case "click":
              if (a.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              h = Ro;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              h = Jm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              h = c1;
              break;
            case _0:
            case N0:
            case D0:
              h = $m;
              break;
            case U0:
              h = o1;
              break;
            case "scroll":
            case "scrollend":
              h = Vm;
              break;
            case "wheel":
              h = d1;
              break;
            case "copy":
            case "cut":
            case "paste":
              h = Fm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              h = Bo;
              break;
            case "toggle":
            case "beforetoggle":
              h = m1;
          }
          var A = (t & 4) !== 0,
            x = !A && (l === "scroll" || l === "scrollend"),
            s = A ? (y !== null ? y + "Capture" : null) : y;
          A = [];
          for (var o = v, m; o !== null; ) {
            var r = o;
            if (
              ((m = r.stateNode),
              (r = r.tag),
              (r !== 5 && r !== 26 && r !== 27) ||
                m === null ||
                s === null ||
                ((r = Ke(o, s)), r != null && A.push(lu(o, r, m))),
              x)
            )
              break;
            o = o.return;
          }
          0 < A.length &&
            ((y = new h(y, p, null, a, g)), S.push({ event: y, listeners: A }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (
            ((y = l === "mouseover" || l === "pointerover"),
            (h = l === "mouseout" || l === "pointerout"),
            y &&
              a !== uc &&
              (p = a.relatedTarget || a.fromElement) &&
              (Ra(p) || p[ce]))
          )
            break l;
          if (
            (h || y) &&
            ((y =
              g.window === g
                ? g
                : (y = g.ownerDocument)
                  ? y.defaultView || y.parentWindow
                  : window),
            h
              ? ((p = a.relatedTarget || a.toElement),
                (h = v),
                (p = p ? Ra(p) : null),
                p !== null &&
                  ((x = uu(p)),
                  (A = p.tag),
                  p !== x || (A !== 5 && A !== 27 && A !== 6)) &&
                  (p = null))
              : ((h = null), (p = v)),
            h !== p)
          ) {
            if (
              ((A = Ro),
              (r = "onMouseLeave"),
              (s = "onMouseEnter"),
              (o = "mouse"),
              (l === "pointerout" || l === "pointerover") &&
                ((A = Bo),
                (r = "onPointerLeave"),
                (s = "onPointerEnter"),
                (o = "pointer")),
              (x = h == null ? y : Ne(h)),
              (m = p == null ? y : Ne(p)),
              (y = new A(r, o + "leave", h, a, g)),
              (y.target = x),
              (y.relatedTarget = m),
              (r = null),
              Ra(g) === v &&
                ((A = new A(s, o + "enter", p, a, g)),
                (A.target = m),
                (A.relatedTarget = x),
                (r = A)),
              (x = r),
              h && p)
            )
              t: {
                for (A = sy, s = h, o = p, m = 0, r = s; r; r = A(r)) m++;
                r = 0;
                for (var E = o; E; E = A(E)) r++;
                for (; 0 < m - r; ) ((s = A(s)), m--);
                for (; 0 < r - m; ) ((o = A(o)), r--);
                for (; m--; ) {
                  if (s === o || (o !== null && s === o.alternate)) {
                    A = s;
                    break t;
                  }
                  ((s = A(s)), (o = A(o)));
                }
                A = null;
              }
            else A = null;
            (h !== null && _s(S, y, h, A, !1),
              p !== null && x !== null && _s(S, x, p, A, !0));
          }
        }
        l: {
          if (
            ((y = v ? Ne(v) : window),
            (h = y.nodeName && y.nodeName.toLowerCase()),
            h === "select" || (h === "input" && y.type === "file"))
          )
            var B = Xo;
          else if (jo(y))
            if (T0) B = E1;
            else {
              B = z1;
              var T = p1;
            }
          else
            ((h = y.nodeName),
              !h ||
              h.toLowerCase() !== "input" ||
              (y.type !== "checkbox" && y.type !== "radio")
                ? v && wc(v.elementType) && (B = Xo)
                : (B = T1));
          if (B && (B = B(l, v))) {
            z0(S, B, a, g);
            break l;
          }
          (T && T(l, y, v),
            l === "focusout" &&
              v &&
              y.type === "number" &&
              v.memoizedProps.value != null &&
              ec(y, "number", y.value));
        }
        switch (((T = v ? Ne(v) : window), l)) {
          case "focusin":
            (jo(T) || T.contentEditable === "true") &&
              ((Ya = T), (ic = v), (Re = null));
            break;
          case "focusout":
            Re = ic = Ya = null;
            break;
          case "mousedown":
            cc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((cc = !1), Zo(S, a, g));
            break;
          case "selectionchange":
            if (O1) break;
          case "keydown":
          case "keyup":
            Zo(S, a, g);
        }
        var D;
        if (Fc)
          l: {
            switch (l) {
              case "compositionstart":
                var C = "onCompositionStart";
                break l;
              case "compositionend":
                C = "onCompositionEnd";
                break l;
              case "compositionupdate":
                C = "onCompositionUpdate";
                break l;
            }
            C = void 0;
          }
        else
          Ba
            ? b0(l, a) && (C = "onCompositionEnd")
            : l === "keydown" &&
              a.keyCode === 229 &&
              (C = "onCompositionStart");
        (C &&
          (S0 &&
            a.locale !== "ko" &&
            (Ba || C !== "onCompositionStart"
              ? C === "onCompositionEnd" && Ba && (D = r0())
              : ((Yt = g),
                ($c = "value" in Yt ? Yt.value : Yt.textContent),
                (Ba = !0))),
          (T = _n(v, C)),
          0 < T.length &&
            ((C = new qo(C, l, null, a, g)),
            S.push({ event: C, listeners: T }),
            D ? (C.data = D) : ((D = p0(a)), D !== null && (C.data = D)))),
          (D = h1 ? g1(l, a) : r1(l, a)) &&
            ((C = _n(v, "onBeforeInput")),
            0 < C.length &&
              ((T = new qo("onBeforeInput", "beforeinput", null, a, g)),
              S.push({ event: T, listeners: C }),
              (T.data = D))),
          fy(S, l, v, a, g));
      }
      gv(S, t);
    });
  }
  function lu(l, t, a) {
    return { instance: l, listener: t, currentTarget: a };
  }
  function _n(l, t) {
    for (var a = t + "Capture", e = []; l !== null; ) {
      var u = l,
        n = u.stateNode;
      if (
        ((u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          n === null ||
          ((u = Ke(l, a)),
          u != null && e.unshift(lu(l, u, n)),
          (u = Ke(l, t)),
          u != null && e.push(lu(l, u, n))),
        l.tag === 3)
      )
        return e;
      l = l.return;
    }
    return [];
  }
  function sy(l) {
    if (l === null) return null;
    do l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function _s(l, t, a, e, u) {
    for (var n = t._reactName, i = []; a !== null && a !== e; ) {
      var c = a,
        f = c.alternate,
        v = c.stateNode;
      if (((c = c.tag), f !== null && f === e)) break;
      ((c !== 5 && c !== 26 && c !== 27) ||
        v === null ||
        ((f = v),
        u
          ? ((v = Ke(a, n)), v != null && i.unshift(lu(a, v, f)))
          : u || ((v = Ke(a, n)), v != null && i.push(lu(a, v, f)))),
        (a = a.return));
    }
    i.length !== 0 && l.push({ event: t, listeners: i });
  }
  var dy = /\r\n?/g,
    vy = /\u0000|\uFFFD/g;
  function Ns(l) {
    return (typeof l == "string" ? l : "" + l)
      .replace(
        dy,
        `
`,
      )
      .replace(vy, "");
  }
  function Sv(l, t) {
    return ((t = Ns(t)), Ns(l) === t);
  }
  function L(l, t, a, e, u, n) {
    switch (a) {
      case "children":
        typeof e == "string"
          ? t === "body" || (t === "textarea" && e === "") || Ia(l, e)
          : (typeof e == "number" || typeof e == "bigint") &&
            t !== "body" &&
            Ia(l, "" + e);
        break;
      case "className":
        Du(l, "class", e);
        break;
      case "tabIndex":
        Du(l, "tabindex", e);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Du(l, a, e);
        break;
      case "style":
        h0(l, e, n);
        break;
      case "data":
        if (t !== "object") {
          Du(l, "data", e);
          break;
        }
      case "src":
      case "href":
        if (e === "" && (t !== "a" || a !== "href")) {
          l.removeAttribute(a);
          break;
        }
        if (
          e == null ||
          typeof e == "function" ||
          typeof e == "symbol" ||
          typeof e == "boolean"
        ) {
          l.removeAttribute(a);
          break;
        }
        ((e = Vu("" + e)), l.setAttribute(a, e));
        break;
      case "action":
      case "formAction":
        if (typeof e == "function") {
          l.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof n == "function" &&
            (a === "formAction"
              ? (t !== "input" && L(l, t, "name", u.name, u, null),
                L(l, t, "formEncType", u.formEncType, u, null),
                L(l, t, "formMethod", u.formMethod, u, null),
                L(l, t, "formTarget", u.formTarget, u, null))
              : (L(l, t, "encType", u.encType, u, null),
                L(l, t, "method", u.method, u, null),
                L(l, t, "target", u.target, u, null)));
        if (e == null || typeof e == "symbol" || typeof e == "boolean") {
          l.removeAttribute(a);
          break;
        }
        ((e = Vu("" + e)), l.setAttribute(a, e));
        break;
      case "onClick":
        e != null && (l.onclick = yt);
        break;
      case "onScroll":
        e != null && U("scroll", l);
        break;
      case "onScrollEnd":
        e != null && U("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (e != null) {
          if (typeof e != "object" || !("__html" in e)) throw Error(b(61));
          if (((a = e.__html), a != null)) {
            if (u.children != null) throw Error(b(60));
            l.innerHTML = a;
          }
        }
        break;
      case "multiple":
        l.multiple = e && typeof e != "function" && typeof e != "symbol";
        break;
      case "muted":
        l.muted = e && typeof e != "function" && typeof e != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          e == null ||
          typeof e == "function" ||
          typeof e == "boolean" ||
          typeof e == "symbol"
        ) {
          l.removeAttribute("xlink:href");
          break;
        }
        ((a = Vu("" + e)),
          l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        e != null && typeof e != "function" && typeof e != "symbol"
          ? l.setAttribute(a, "" + e)
          : l.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        e && typeof e != "function" && typeof e != "symbol"
          ? l.setAttribute(a, "")
          : l.removeAttribute(a);
        break;
      case "capture":
      case "download":
        e === !0
          ? l.setAttribute(a, "")
          : e !== !1 &&
              e != null &&
              typeof e != "function" &&
              typeof e != "symbol"
            ? l.setAttribute(a, e)
            : l.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        e != null &&
        typeof e != "function" &&
        typeof e != "symbol" &&
        !isNaN(e) &&
        1 <= e
          ? l.setAttribute(a, e)
          : l.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        e == null || typeof e == "function" || typeof e == "symbol" || isNaN(e)
          ? l.removeAttribute(a)
          : l.setAttribute(a, e);
        break;
      case "popover":
        (U("beforetoggle", l), U("toggle", l), Zu(l, "popover", e));
        break;
      case "xlinkActuate":
        it(l, "http://www.w3.org/1999/xlink", "xlink:actuate", e);
        break;
      case "xlinkArcrole":
        it(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", e);
        break;
      case "xlinkRole":
        it(l, "http://www.w3.org/1999/xlink", "xlink:role", e);
        break;
      case "xlinkShow":
        it(l, "http://www.w3.org/1999/xlink", "xlink:show", e);
        break;
      case "xlinkTitle":
        it(l, "http://www.w3.org/1999/xlink", "xlink:title", e);
        break;
      case "xlinkType":
        it(l, "http://www.w3.org/1999/xlink", "xlink:type", e);
        break;
      case "xmlBase":
        it(l, "http://www.w3.org/XML/1998/namespace", "xml:base", e);
        break;
      case "xmlLang":
        it(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", e);
        break;
      case "xmlSpace":
        it(l, "http://www.w3.org/XML/1998/namespace", "xml:space", e);
        break;
      case "is":
        Zu(l, "is", e);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) ||
          (a[0] !== "o" && a[0] !== "O") ||
          (a[1] !== "n" && a[1] !== "N")) &&
          ((a = Lm.get(a) || a), Zu(l, a, e));
    }
  }
  function Hc(l, t, a, e, u, n) {
    switch (a) {
      case "style":
        h0(l, e, n);
        break;
      case "dangerouslySetInnerHTML":
        if (e != null) {
          if (typeof e != "object" || !("__html" in e)) throw Error(b(61));
          if (((a = e.__html), a != null)) {
            if (u.children != null) throw Error(b(60));
            l.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof e == "string"
          ? Ia(l, e)
          : (typeof e == "number" || typeof e == "bigint") && Ia(l, "" + e);
        break;
      case "onScroll":
        e != null && U("scroll", l);
        break;
      case "onScrollEnd":
        e != null && U("scrollend", l);
        break;
      case "onClick":
        e != null && (l.onclick = yt);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!o0.hasOwnProperty(a))
          l: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((u = a.endsWith("Capture")),
              (t = a.slice(2, u ? a.length - 7 : void 0)),
              (n = l[Ol] || null),
              (n = n != null ? n[a] : null),
              typeof n == "function" && l.removeEventListener(t, n, u),
              typeof e == "function")
            ) {
              (typeof n != "function" &&
                n !== null &&
                (a in l
                  ? (l[a] = null)
                  : l.hasAttribute(a) && l.removeAttribute(a)),
                l.addEventListener(t, e, u));
              break l;
            }
            a in l
              ? (l[a] = e)
              : e === !0
                ? l.setAttribute(a, "")
                : Zu(l, a, e);
          }
    }
  }
  function hl(l, t, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (U("error", l), U("load", l));
        var e = !1,
          u = !1,
          n;
        for (n in a)
          if (a.hasOwnProperty(n)) {
            var i = a[n];
            if (i != null)
              switch (n) {
                case "src":
                  e = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(b(137, t));
                default:
                  L(l, t, n, i, a, null);
              }
          }
        (u && L(l, t, "srcSet", a.srcSet, a, null),
          e && L(l, t, "src", a.src, a, null));
        return;
      case "input":
        U("invalid", l);
        var c = (n = i = u = null),
          f = null,
          v = null;
        for (e in a)
          if (a.hasOwnProperty(e)) {
            var g = a[e];
            if (g != null)
              switch (e) {
                case "name":
                  u = g;
                  break;
                case "type":
                  i = g;
                  break;
                case "checked":
                  f = g;
                  break;
                case "defaultChecked":
                  v = g;
                  break;
                case "value":
                  n = g;
                  break;
                case "defaultValue":
                  c = g;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (g != null) throw Error(b(137, t));
                  break;
                default:
                  L(l, t, e, g, a, null);
              }
          }
        v0(l, n, c, f, v, i, u, !1);
        return;
      case "select":
        (U("invalid", l), (e = i = n = null));
        for (u in a)
          if (a.hasOwnProperty(u) && ((c = a[u]), c != null))
            switch (u) {
              case "value":
                n = c;
                break;
              case "defaultValue":
                i = c;
                break;
              case "multiple":
                e = c;
              default:
                L(l, t, u, c, a, null);
            }
        ((t = n),
          (a = i),
          (l.multiple = !!e),
          t != null ? Va(l, !!e, t, !1) : a != null && Va(l, !!e, a, !0));
        return;
      case "textarea":
        (U("invalid", l), (n = u = e = null));
        for (i in a)
          if (a.hasOwnProperty(i) && ((c = a[i]), c != null))
            switch (i) {
              case "value":
                e = c;
                break;
              case "defaultValue":
                u = c;
                break;
              case "children":
                n = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(b(91));
                break;
              default:
                L(l, t, i, c, a, null);
            }
        y0(l, e, u, n);
        return;
      case "option":
        for (f in a)
          a.hasOwnProperty(f) &&
            ((e = a[f]), e != null) &&
            (f === "selected"
              ? (l.selected =
                  e && typeof e != "function" && typeof e != "symbol")
              : L(l, t, f, e, a, null));
        return;
      case "dialog":
        (U("beforetoggle", l), U("toggle", l), U("cancel", l), U("close", l));
        break;
      case "iframe":
      case "object":
        U("load", l);
        break;
      case "video":
      case "audio":
        for (e = 0; e < Pe.length; e++) U(Pe[e], l);
        break;
      case "image":
        (U("error", l), U("load", l));
        break;
      case "details":
        U("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        (U("error", l), U("load", l));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (v in a)
          if (a.hasOwnProperty(v) && ((e = a[v]), e != null))
            switch (v) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(b(137, t));
              default:
                L(l, t, v, e, a, null);
            }
        return;
      default:
        if (wc(t)) {
          for (g in a)
            a.hasOwnProperty(g) &&
              ((e = a[g]), e !== void 0 && Hc(l, t, g, e, a, void 0));
          return;
        }
    }
    for (c in a)
      a.hasOwnProperty(c) && ((e = a[c]), e != null && L(l, t, c, e, a, null));
  }
  function my(l, t, a, e) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null,
          n = null,
          i = null,
          c = null,
          f = null,
          v = null,
          g = null;
        for (h in a) {
          var S = a[h];
          if (a.hasOwnProperty(h) && S != null)
            switch (h) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                f = S;
              default:
                e.hasOwnProperty(h) || L(l, t, h, null, e, S);
            }
        }
        for (var y in e) {
          var h = e[y];
          if (((S = a[y]), e.hasOwnProperty(y) && (h != null || S != null)))
            switch (y) {
              case "type":
                n = h;
                break;
              case "name":
                u = h;
                break;
              case "checked":
                v = h;
                break;
              case "defaultChecked":
                g = h;
                break;
              case "value":
                i = h;
                break;
              case "defaultValue":
                c = h;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (h != null) throw Error(b(137, t));
                break;
              default:
                h !== S && L(l, t, y, h, e, S);
            }
        }
        ac(l, i, c, f, v, g, n, u);
        return;
      case "select":
        h = i = c = y = null;
        for (n in a)
          if (((f = a[n]), a.hasOwnProperty(n) && f != null))
            switch (n) {
              case "value":
                break;
              case "multiple":
                h = f;
              default:
                e.hasOwnProperty(n) || L(l, t, n, null, e, f);
            }
        for (u in e)
          if (
            ((n = e[u]),
            (f = a[u]),
            e.hasOwnProperty(u) && (n != null || f != null))
          )
            switch (u) {
              case "value":
                y = n;
                break;
              case "defaultValue":
                c = n;
                break;
              case "multiple":
                i = n;
              default:
                n !== f && L(l, t, u, n, e, f);
            }
        ((t = c),
          (a = i),
          (e = h),
          y != null
            ? Va(l, !!a, y, !1)
            : !!e != !!a &&
              (t != null ? Va(l, !!a, t, !0) : Va(l, !!a, a ? [] : "", !1)));
        return;
      case "textarea":
        h = y = null;
        for (c in a)
          if (
            ((u = a[c]),
            a.hasOwnProperty(c) && u != null && !e.hasOwnProperty(c))
          )
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                L(l, t, c, null, e, u);
            }
        for (i in e)
          if (
            ((u = e[i]),
            (n = a[i]),
            e.hasOwnProperty(i) && (u != null || n != null))
          )
            switch (i) {
              case "value":
                y = u;
                break;
              case "defaultValue":
                h = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(b(91));
                break;
              default:
                u !== n && L(l, t, i, u, e, n);
            }
        m0(l, y, h);
        return;
      case "option":
        for (var p in a)
          ((y = a[p]),
            a.hasOwnProperty(p) &&
              y != null &&
              !e.hasOwnProperty(p) &&
              (p === "selected" ? (l.selected = !1) : L(l, t, p, null, e, y)));
        for (f in e)
          ((y = e[f]),
            (h = a[f]),
            e.hasOwnProperty(f) &&
              y !== h &&
              (y != null || h != null) &&
              (f === "selected"
                ? (l.selected =
                    y && typeof y != "function" && typeof y != "symbol")
                : L(l, t, f, y, e, h)));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var A in a)
          ((y = a[A]),
            a.hasOwnProperty(A) &&
              y != null &&
              !e.hasOwnProperty(A) &&
              L(l, t, A, null, e, y));
        for (v in e)
          if (
            ((y = e[v]),
            (h = a[v]),
            e.hasOwnProperty(v) && y !== h && (y != null || h != null))
          )
            switch (v) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (y != null) throw Error(b(137, t));
                break;
              default:
                L(l, t, v, y, e, h);
            }
        return;
      default:
        if (wc(t)) {
          for (var x in a)
            ((y = a[x]),
              a.hasOwnProperty(x) &&
                y !== void 0 &&
                !e.hasOwnProperty(x) &&
                Hc(l, t, x, void 0, e, y));
          for (g in e)
            ((y = e[g]),
              (h = a[g]),
              !e.hasOwnProperty(g) ||
                y === h ||
                (y === void 0 && h === void 0) ||
                Hc(l, t, g, y, e, h));
          return;
        }
    }
    for (var s in a)
      ((y = a[s]),
        a.hasOwnProperty(s) &&
          y != null &&
          !e.hasOwnProperty(s) &&
          L(l, t, s, null, e, y));
    for (S in e)
      ((y = e[S]),
        (h = a[S]),
        !e.hasOwnProperty(S) ||
          y === h ||
          (y == null && h == null) ||
          L(l, t, S, y, e, h));
  }
  function Ds(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function yy() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var l = 0, t = 0, a = performance.getEntriesByType("resource"), e = 0;
        e < a.length;
        e++
      ) {
        var u = a[e],
          n = u.transferSize,
          i = u.initiatorType,
          c = u.duration;
        if (n && c && Ds(i)) {
          for (i = 0, c = u.responseEnd, e += 1; e < a.length; e++) {
            var f = a[e],
              v = f.startTime;
            if (v > c) break;
            var g = f.transferSize,
              S = f.initiatorType;
            g &&
              Ds(S) &&
              ((f = f.responseEnd), (i += g * (f < c ? 1 : (c - v) / (f - v))));
          }
          if ((--e, (t += (8 * (n + i)) / (u.duration / 1e3)), l++, 10 < l))
            break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection &&
      ((l = navigator.connection.downlink), typeof l == "number")
      ? l
      : 5;
  }
  var Cc = null,
    Rc = null;
  function Nn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Us(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function bv(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function qc(l, t) {
    return (
      l === "textarea" ||
      l === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Vi = null;
  function hy() {
    var l = window.event;
    return l && l.type === "popstate"
      ? l === Vi
        ? !1
        : ((Vi = l), !0)
      : ((Vi = null), !1);
  }
  var pv = typeof setTimeout == "function" ? setTimeout : void 0,
    gy = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Hs = typeof Promise == "function" ? Promise : void 0,
    ry =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Hs < "u"
          ? function (l) {
              return Hs.resolve(null).then(l).catch(Sy);
            }
          : pv;
  function Sy(l) {
    setTimeout(function () {
      throw l;
    });
  }
  function la(l) {
    return l === "head";
  }
  function Cs(l, t) {
    var a = t,
      e = 0;
    do {
      var u = a.nextSibling;
      if ((l.removeChild(a), u && u.nodeType === 8))
        if (((a = u.data), a === "/$" || a === "/&")) {
          if (e === 0) {
            (l.removeChild(u), ie(t));
            return;
          }
          e--;
        } else if (
          a === "$" ||
          a === "$?" ||
          a === "$~" ||
          a === "$!" ||
          a === "&"
        )
          e++;
        else if (a === "html") Ze(l.ownerDocument.documentElement);
        else if (a === "head") {
          ((a = l.ownerDocument.head), Ze(a));
          for (var n = a.firstChild; n; ) {
            var i = n.nextSibling,
              c = n.nodeName;
            (n[fu] ||
              c === "SCRIPT" ||
              c === "STYLE" ||
              (c === "LINK" && n.rel.toLowerCase() === "stylesheet") ||
              a.removeChild(n),
              (n = i));
          }
        } else a === "body" && Ze(l.ownerDocument.body);
      a = u;
    } while (a);
    ie(t);
  }
  function Rs(l, t) {
    var a = l;
    l = 0;
    do {
      var e = a.nextSibling;
      if (
        (a.nodeType === 1
          ? t
            ? ((a._stashedDisplay = a.style.display),
              (a.style.display = "none"))
            : ((a.style.display = a._stashedDisplay || ""),
              a.getAttribute("style") === "" && a.removeAttribute("style"))
          : a.nodeType === 3 &&
            (t
              ? ((a._stashedText = a.nodeValue), (a.nodeValue = ""))
              : (a.nodeValue = a._stashedText || "")),
        e && e.nodeType === 8)
      )
        if (((a = e.data), a === "/$")) {
          if (l === 0) break;
          l--;
        } else (a !== "$" && a !== "$?" && a !== "$~" && a !== "$!") || l++;
      a = e;
    } while (a);
  }
  function Bc(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (((t = t.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (Bc(a), Jc(a));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(a);
    }
  }
  function by(l, t, a, e) {
    for (; l.nodeType === 1; ) {
      var u = a;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!e && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (e) {
        if (!l[fu])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (
                ((n = l.getAttribute("rel")),
                n === "stylesheet" && l.hasAttribute("data-precedence"))
              )
                break;
              if (
                n !== u.rel ||
                l.getAttribute("href") !==
                  (u.href == null || u.href === "" ? null : u.href) ||
                l.getAttribute("crossorigin") !==
                  (u.crossOrigin == null ? null : u.crossOrigin) ||
                l.getAttribute("title") !== (u.title == null ? null : u.title)
              )
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (
                ((n = l.getAttribute("src")),
                (n !== (u.src == null ? null : u.src) ||
                  l.getAttribute("type") !== (u.type == null ? null : u.type) ||
                  l.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  n &&
                  l.hasAttribute("async") &&
                  !l.hasAttribute("itemprop"))
              )
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && l.getAttribute("name") === n) return l;
      } else return l;
      if (((l = Jl(l.nextSibling)), l === null)) break;
    }
    return null;
  }
  function py(l, t, a) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !a) ||
        ((l = Jl(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function zv(l, t) {
    for (; l.nodeType !== 8; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !t) ||
        ((l = Jl(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function Yc(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function Gc(l) {
    return (
      l.data === "$!" ||
      (l.data === "$?" && l.ownerDocument.readyState !== "loading")
    );
  }
  function zy(l, t) {
    var a = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || a.readyState !== "loading") t();
    else {
      var e = function () {
        (t(), a.removeEventListener("DOMContentLoaded", e));
      };
      (a.addEventListener("DOMContentLoaded", e), (l._reactRetry = e));
    }
  }
  function Jl(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = l.data),
          t === "$" ||
            t === "$!" ||
            t === "$?" ||
            t === "$~" ||
            t === "&" ||
            t === "F!" ||
            t === "F")
        )
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return l;
  }
  var jc = null;
  function qs(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "/$" || a === "/&") {
          if (t === 0) return Jl(l.nextSibling);
          t--;
        } else
          (a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&") ||
            t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function Bs(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (t === 0) return l;
          t--;
        } else (a !== "/$" && a !== "/&") || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function Tv(l, t, a) {
    switch (((t = Nn(a)), l)) {
      case "html":
        if (((l = t.documentElement), !l)) throw Error(b(452));
        return l;
      case "head":
        if (((l = t.head), !l)) throw Error(b(453));
        return l;
      case "body":
        if (((l = t.body), !l)) throw Error(b(454));
        return l;
      default:
        throw Error(b(451));
    }
  }
  function Ze(l) {
    for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
    Jc(l);
  }
  var wl = new Map(),
    Ys = new Set();
  function Dn(l) {
    return typeof l.getRootNode == "function"
      ? l.getRootNode()
      : l.nodeType === 9
        ? l
        : l.ownerDocument;
  }
  var At = j.d;
  j.d = { f: Ty, r: Ey, D: Ay, C: Oy, L: My, m: _y, X: Dy, S: Ny, M: Uy };
  function Ty() {
    var l = At.f(),
      t = Jn();
    return l || t;
  }
  function Ey(l) {
    var t = fe(l);
    t !== null && t.tag === 5 && t.type === "form" ? hd(t) : At.r(l);
  }
  var ve = typeof document > "u" ? null : document;
  function Ev(l, t, a) {
    var e = ve;
    if (e && typeof t == "string" && t) {
      var u = Ll(t);
      ((u = 'link[rel="' + l + '"][href="' + u + '"]'),
        typeof a == "string" && (u += '[crossorigin="' + a + '"]'),
        Ys.has(u) ||
          (Ys.add(u),
          (l = { rel: l, crossOrigin: a, href: t }),
          e.querySelector(u) === null &&
            ((t = e.createElement("link")),
            hl(t, "link", l),
            ol(t),
            e.head.appendChild(t))));
    }
  }
  function Ay(l) {
    (At.D(l), Ev("dns-prefetch", l, null));
  }
  function Oy(l, t) {
    (At.C(l, t), Ev("preconnect", l, t));
  }
  function My(l, t, a) {
    At.L(l, t, a);
    var e = ve;
    if (e && l && t) {
      var u = 'link[rel="preload"][as="' + Ll(t) + '"]';
      t === "image" && a && a.imageSrcSet
        ? ((u += '[imagesrcset="' + Ll(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" &&
            (u += '[imagesizes="' + Ll(a.imageSizes) + '"]'))
        : (u += '[href="' + Ll(l) + '"]');
      var n = u;
      switch (t) {
        case "style":
          n = ne(l);
          break;
        case "script":
          n = me(l);
      }
      wl.has(n) ||
        ((l = $(
          {
            rel: "preload",
            href: t === "image" && a && a.imageSrcSet ? void 0 : l,
            as: t,
          },
          a,
        )),
        wl.set(n, l),
        e.querySelector(u) !== null ||
          (t === "style" && e.querySelector(yu(n))) ||
          (t === "script" && e.querySelector(hu(n))) ||
          ((t = e.createElement("link")),
          hl(t, "link", l),
          ol(t),
          e.head.appendChild(t)));
    }
  }
  function _y(l, t) {
    At.m(l, t);
    var a = ve;
    if (a && l) {
      var e = t && typeof t.as == "string" ? t.as : "script",
        u =
          'link[rel="modulepreload"][as="' + Ll(e) + '"][href="' + Ll(l) + '"]',
        n = u;
      switch (e) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = me(l);
      }
      if (
        !wl.has(n) &&
        ((l = $({ rel: "modulepreload", href: l }, t)),
        wl.set(n, l),
        a.querySelector(u) === null)
      ) {
        switch (e) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(hu(n))) return;
        }
        ((e = a.createElement("link")),
          hl(e, "link", l),
          ol(e),
          a.head.appendChild(e));
      }
    }
  }
  function Ny(l, t, a) {
    At.S(l, t, a);
    var e = ve;
    if (e && l) {
      var u = Za(e).hoistableStyles,
        n = ne(l);
      t = t || "default";
      var i = u.get(n);
      if (!i) {
        var c = { loading: 0, preload: null };
        if ((i = e.querySelector(yu(n)))) c.loading = 5;
        else {
          ((l = $({ rel: "stylesheet", href: l, "data-precedence": t }, a)),
            (a = wl.get(n)) && Cf(l, a));
          var f = (i = e.createElement("link"));
          (ol(f),
            hl(f, "link", l),
            (f._p = new Promise(function (v, g) {
              ((f.onload = v), (f.onerror = g));
            })),
            f.addEventListener("load", function () {
              c.loading |= 1;
            }),
            f.addEventListener("error", function () {
              c.loading |= 2;
            }),
            (c.loading |= 4),
            ln(i, t, e));
        }
        ((i = { type: "stylesheet", instance: i, count: 1, state: c }),
          u.set(n, i));
      }
    }
  }
  function Dy(l, t) {
    At.X(l, t);
    var a = ve;
    if (a && l) {
      var e = Za(a).hoistableScripts,
        u = me(l),
        n = e.get(u);
      n ||
        ((n = a.querySelector(hu(u))),
        n ||
          ((l = $({ src: l, async: !0 }, t)),
          (t = wl.get(u)) && Rf(l, t),
          (n = a.createElement("script")),
          ol(n),
          hl(n, "link", l),
          a.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        e.set(u, n));
    }
  }
  function Uy(l, t) {
    At.M(l, t);
    var a = ve;
    if (a && l) {
      var e = Za(a).hoistableScripts,
        u = me(l),
        n = e.get(u);
      n ||
        ((n = a.querySelector(hu(u))),
        n ||
          ((l = $({ src: l, async: !0, type: "module" }, t)),
          (t = wl.get(u)) && Rf(l, t),
          (n = a.createElement("script")),
          ol(n),
          hl(n, "link", l),
          a.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        e.set(u, n));
    }
  }
  function Gs(l, t, a, e) {
    var u = (u = Qt.current) ? Dn(u) : null;
    if (!u) throw Error(b(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((t = ne(a.href)),
            (a = Za(u).hoistableStyles),
            (e = a.get(t)),
            e ||
              ((e = { type: "style", instance: null, count: 0, state: null }),
              a.set(t, e)),
            e)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          l = ne(a.href);
          var n = Za(u).hoistableStyles,
            i = n.get(l);
          if (
            (i ||
              ((u = u.ownerDocument || u),
              (i = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              n.set(l, i),
              (n = u.querySelector(yu(l))) &&
                !n._p &&
                ((i.instance = n), (i.state.loading = 5)),
              wl.has(l) ||
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                wl.set(l, a),
                n || Hy(u, l, a, i.state))),
            t && e === null)
          )
            throw Error(b(528, ""));
          return i;
        }
        if (t && e !== null) throw Error(b(529, ""));
        return null;
      case "script":
        return (
          (t = a.async),
          (a = a.src),
          typeof a == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = me(a)),
              (a = Za(u).hoistableScripts),
              (e = a.get(t)),
              e ||
                ((e = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                a.set(t, e)),
              e)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(b(444, l));
    }
  }
  function ne(l) {
    return 'href="' + Ll(l) + '"';
  }
  function yu(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Av(l) {
    return $({}, l, { "data-precedence": l.precedence, precedence: null });
  }
  function Hy(l, t, a, e) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (e.loading = 1)
      : ((t = l.createElement("link")),
        (e.preload = t),
        t.addEventListener("load", function () {
          return (e.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (e.loading |= 2);
        }),
        hl(t, "link", a),
        ol(t),
        l.head.appendChild(t));
  }
  function me(l) {
    return '[src="' + Ll(l) + '"]';
  }
  function hu(l) {
    return "script[async]" + l;
  }
  function js(l, t, a) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var e = l.querySelector('style[data-href~="' + Ll(a.href) + '"]');
          if (e) return ((t.instance = e), ol(e), e);
          var u = $({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (e = (l.ownerDocument || l).createElement("style")),
            ol(e),
            hl(e, "style", u),
            ln(e, a.precedence, l),
            (t.instance = e)
          );
        case "stylesheet":
          u = ne(a.href);
          var n = l.querySelector(yu(u));
          if (n) return ((t.state.loading |= 4), (t.instance = n), ol(n), n);
          ((e = Av(a)),
            (u = wl.get(u)) && Cf(e, u),
            (n = (l.ownerDocument || l).createElement("link")),
            ol(n));
          var i = n;
          return (
            (i._p = new Promise(function (c, f) {
              ((i.onload = c), (i.onerror = f));
            })),
            hl(n, "link", e),
            (t.state.loading |= 4),
            ln(n, a.precedence, l),
            (t.instance = n)
          );
        case "script":
          return (
            (n = me(a.src)),
            (u = l.querySelector(hu(n)))
              ? ((t.instance = u), ol(u), u)
              : ((e = a),
                (u = wl.get(n)) && ((e = $({}, a)), Rf(e, u)),
                (l = l.ownerDocument || l),
                (u = l.createElement("script")),
                ol(u),
                hl(u, "link", e),
                l.head.appendChild(u),
                (t.instance = u))
          );
        case "void":
          return null;
        default:
          throw Error(b(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((e = t.instance), (t.state.loading |= 4), ln(e, a.precedence, l));
    return t.instance;
  }
  function ln(l, t, a) {
    for (
      var e = a.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        u = e.length ? e[e.length - 1] : null,
        n = u,
        i = 0;
      i < e.length;
      i++
    ) {
      var c = e[i];
      if (c.dataset.precedence === t) n = c;
      else if (n !== u) break;
    }
    n
      ? n.parentNode.insertBefore(l, n.nextSibling)
      : ((t = a.nodeType === 9 ? a.head : a), t.insertBefore(l, t.firstChild));
  }
  function Cf(l, t) {
    (l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.title == null && (l.title = t.title));
  }
  function Rf(l, t) {
    (l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.integrity == null && (l.integrity = t.integrity));
  }
  var tn = null;
  function Xs(l, t, a) {
    if (tn === null) {
      var e = new Map(),
        u = (tn = new Map());
      u.set(a, e);
    } else ((u = tn), (e = u.get(a)), e || ((e = new Map()), u.set(a, e)));
    if (e.has(l)) return e;
    for (
      e.set(l, null), a = a.getElementsByTagName(l), u = 0;
      u < a.length;
      u++
    ) {
      var n = a[u];
      if (
        !(
          n[fu] ||
          n[vl] ||
          (l === "link" && n.getAttribute("rel") === "stylesheet")
        ) &&
        n.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var i = n.getAttribute(t) || "";
        i = l + i;
        var c = e.get(i);
        c ? c.push(n) : e.set(i, [n]);
      }
    }
    return e;
  }
  function Qs(l, t, a) {
    ((l = l.ownerDocument || l),
      l.head.insertBefore(
        a,
        t === "title" ? l.querySelector("head > title") : null,
      ));
  }
  function Cy(l, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        return t.rel === "stylesheet"
          ? ((l = t.disabled), typeof t.precedence == "string" && l == null)
          : !0;
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Ov(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function Ry(l, t, a, e) {
    if (
      a.type === "stylesheet" &&
      (typeof e.media != "string" || matchMedia(e.media).matches !== !1) &&
      (a.state.loading & 4) === 0
    ) {
      if (a.instance === null) {
        var u = ne(e.href),
          n = t.querySelector(yu(u));
        if (n) {
          ((t = n._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (l.count++, (l = Un.bind(l)), t.then(l, l)),
            (a.state.loading |= 4),
            (a.instance = n),
            ol(n));
          return;
        }
        ((n = t.ownerDocument || t),
          (e = Av(e)),
          (u = wl.get(u)) && Cf(e, u),
          (n = n.createElement("link")),
          ol(n));
        var i = n;
        ((i._p = new Promise(function (c, f) {
          ((i.onload = c), (i.onerror = f));
        })),
          hl(n, "link", e),
          (a.instance = n));
      }
      (l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(a, t),
        (t = a.state.preload) &&
          (a.state.loading & 3) === 0 &&
          (l.count++,
          (a = Un.bind(l)),
          t.addEventListener("load", a),
          t.addEventListener("error", a)));
    }
  }
  var Ki = 0;
  function qy(l, t) {
    return (
      l.stylesheets && l.count === 0 && an(l, l.stylesheets),
      0 < l.count || 0 < l.imgCount
        ? function (a) {
            var e = setTimeout(function () {
              if ((l.stylesheets && an(l, l.stylesheets), l.unsuspend)) {
                var n = l.unsuspend;
                ((l.unsuspend = null), n());
              }
            }, 6e4 + t);
            0 < l.imgBytes && Ki === 0 && (Ki = 62500 * yy());
            var u = setTimeout(
              function () {
                if (
                  ((l.waitingForImages = !1),
                  l.count === 0 &&
                    (l.stylesheets && an(l, l.stylesheets), l.unsuspend))
                ) {
                  var n = l.unsuspend;
                  ((l.unsuspend = null), n());
                }
              },
              (l.imgBytes > Ki ? 50 : 800) + t,
            );
            return (
              (l.unsuspend = a),
              function () {
                ((l.unsuspend = null), clearTimeout(e), clearTimeout(u));
              }
            );
          }
        : null
    );
  }
  function Un() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) an(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        ((this.unsuspend = null), l());
      }
    }
  }
  var Hn = null;
  function an(l, t) {
    ((l.stylesheets = null),
      l.unsuspend !== null &&
        (l.count++,
        (Hn = new Map()),
        t.forEach(By, l),
        (Hn = null),
        Un.call(l)));
  }
  function By(l, t) {
    if (!(t.state.loading & 4)) {
      var a = Hn.get(l);
      if (a) var e = a.get(null);
      else {
        ((a = new Map()), Hn.set(l, a));
        for (
          var u = l.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            n = 0;
          n < u.length;
          n++
        ) {
          var i = u[n];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") &&
            (a.set(i.dataset.precedence, i), (e = i));
        }
        e && a.set(null, e);
      }
      ((u = t.instance),
        (i = u.getAttribute("data-precedence")),
        (n = a.get(i) || e),
        n === e && a.set(null, u),
        a.set(i, u),
        this.count++,
        (e = Un.bind(this)),
        u.addEventListener("load", e),
        u.addEventListener("error", e),
        n
          ? n.parentNode.insertBefore(u, n.nextSibling)
          : ((l = l.nodeType === 9 ? l.head : l),
            l.insertBefore(u, l.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var tu = {
    $$typeof: mt,
    Provider: null,
    Consumer: null,
    _currentValue: ia,
    _currentValue2: ia,
    _threadCount: 0,
  };
  function Yy(l, t, a, e, u, n, i, c, f) {
    ((this.tag = 1),
      (this.containerInfo = l),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = ri(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = ri(0)),
      (this.hiddenUpdates = ri(null)),
      (this.identifierPrefix = e),
      (this.onUncaughtError = u),
      (this.onCaughtError = n),
      (this.onRecoverableError = i),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = f),
      (this.incompleteTransitions = new Map()));
  }
  function Mv(l, t, a, e, u, n, i, c, f, v, g, S) {
    return (
      (l = new Yy(l, t, a, i, f, v, g, S, c)),
      (t = 1),
      n === !0 && (t |= 24),
      (n = Dl(3, null, null, t)),
      (l.current = n),
      (n.stateNode = l),
      (t = uf()),
      t.refCount++,
      (l.pooledCache = t),
      t.refCount++,
      (n.memoizedState = { element: e, isDehydrated: a, cache: t }),
      ff(n),
      l
    );
  }
  function _v(l) {
    return l ? ((l = Xa), l) : Xa;
  }
  function Nv(l, t, a, e, u, n) {
    ((u = _v(u)),
      e.context === null ? (e.context = u) : (e.pendingContext = u),
      (e = Lt(t)),
      (e.payload = { element: a }),
      (n = n === void 0 ? null : n),
      n !== null && (e.callback = n),
      (a = Zt(l, e, t)),
      a !== null && (Al(a, l, t), Be(a, l, t)));
  }
  function xs(l, t) {
    if (((l = l.memoizedState), l !== null && l.dehydrated !== null)) {
      var a = l.retryLane;
      l.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function qf(l, t) {
    (xs(l, t), (l = l.alternate) && xs(l, t));
  }
  function Dv(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = ba(l, 67108864);
      (t !== null && Al(t, l, 67108864), qf(l, 67108864));
    }
  }
  function Ls(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = ql();
      t = Vc(t);
      var a = ba(l, t);
      (a !== null && Al(a, l, t), qf(l, t));
    }
  }
  var Cn = !0;
  function Gy(l, t, a, e) {
    var u = O.T;
    O.T = null;
    var n = j.p;
    try {
      ((j.p = 2), Bf(l, t, a, e));
    } finally {
      ((j.p = n), (O.T = u));
    }
  }
  function jy(l, t, a, e) {
    var u = O.T;
    O.T = null;
    var n = j.p;
    try {
      ((j.p = 8), Bf(l, t, a, e));
    } finally {
      ((j.p = n), (O.T = u));
    }
  }
  function Bf(l, t, a, e) {
    if (Cn) {
      var u = Xc(e);
      if (u === null) (Zi(l, t, e, Rn, a), Zs(l, e));
      else if (Qy(u, l, t, a, e)) e.stopPropagation();
      else if ((Zs(l, e), t & 4 && -1 < Xy.indexOf(l))) {
        for (; u !== null; ) {
          var n = fe(u);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var i = ea(n.pendingLanes);
                  if (i !== 0) {
                    var c = n;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                      var f = 1 << (31 - Rl(i));
                      ((c.entanglements[1] |= f), (i &= ~f));
                    }
                    (ut(n), (G & 6) === 0 && ((Tn = Hl() + 500), mu(0, !1)));
                  }
                }
                break;
              case 31:
              case 13:
                ((c = ba(n, 2)), c !== null && Al(c, n, 2), Jn(), qf(n, 2));
            }
          if (((n = Xc(e)), n === null && Zi(l, t, e, Rn, a), n === u)) break;
          u = n;
        }
        u !== null && e.stopPropagation();
      } else Zi(l, t, e, null, a);
    }
  }
  function Xc(l) {
    return ((l = Wc(l)), Yf(l));
  }
  var Rn = null;
  function Yf(l) {
    if (((Rn = null), (l = Ra(l)), l !== null)) {
      var t = uu(l);
      if (t === null) l = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (((l = $s(t)), l !== null)) return l;
          l = null;
        } else if (a === 31) {
          if (((l = ks(t)), l !== null)) return l;
          l = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return ((Rn = l), null);
  }
  function Uv(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Mm()) {
          case l0:
            return 2;
          case t0:
            return 8;
          case fn:
          case _m:
            return 32;
          case a0:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Qc = !1,
    Jt = null,
    wt = null,
    Wt = null,
    au = new Map(),
    eu = new Map(),
    qt = [],
    Xy =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function Zs(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        Jt = null;
        break;
      case "dragenter":
      case "dragleave":
        wt = null;
        break;
      case "mouseover":
      case "mouseout":
        Wt = null;
        break;
      case "pointerover":
      case "pointerout":
        au.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        eu.delete(t.pointerId);
    }
  }
  function Ae(l, t, a, e, u, n) {
    return l === null || l.nativeEvent !== n
      ? ((l = {
          blockedOn: t,
          domEventName: a,
          eventSystemFlags: e,
          nativeEvent: n,
          targetContainers: [u],
        }),
        t !== null && ((t = fe(t)), t !== null && Dv(t)),
        l)
      : ((l.eventSystemFlags |= e),
        (t = l.targetContainers),
        u !== null && t.indexOf(u) === -1 && t.push(u),
        l);
  }
  function Qy(l, t, a, e, u) {
    switch (t) {
      case "focusin":
        return ((Jt = Ae(Jt, l, t, a, e, u)), !0);
      case "dragenter":
        return ((wt = Ae(wt, l, t, a, e, u)), !0);
      case "mouseover":
        return ((Wt = Ae(Wt, l, t, a, e, u)), !0);
      case "pointerover":
        var n = u.pointerId;
        return (au.set(n, Ae(au.get(n) || null, l, t, a, e, u)), !0);
      case "gotpointercapture":
        return (
          (n = u.pointerId),
          eu.set(n, Ae(eu.get(n) || null, l, t, a, e, u)),
          !0
        );
    }
    return !1;
  }
  function Hv(l) {
    var t = Ra(l.target);
    if (t !== null) {
      var a = uu(t);
      if (a !== null) {
        if (((t = a.tag), t === 13)) {
          if (((t = $s(a)), t !== null)) {
            ((l.blockedOn = t),
              Mo(l.priority, function () {
                Ls(a);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = ks(a)), t !== null)) {
            ((l.blockedOn = t),
              Mo(l.priority, function () {
                Ls(a);
              }));
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function en(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var a = Xc(l.nativeEvent);
      if (a === null) {
        a = l.nativeEvent;
        var e = new a.constructor(a.type, a);
        ((uc = e), a.target.dispatchEvent(e), (uc = null));
      } else return ((t = fe(a)), t !== null && Dv(t), (l.blockedOn = a), !1);
      t.shift();
    }
    return !0;
  }
  function Vs(l, t, a) {
    en(l) && a.delete(t);
  }
  function xy() {
    ((Qc = !1),
      Jt !== null && en(Jt) && (Jt = null),
      wt !== null && en(wt) && (wt = null),
      Wt !== null && en(Wt) && (Wt = null),
      au.forEach(Vs),
      eu.forEach(Vs));
  }
  function xu(l, t) {
    l.blockedOn === t &&
      ((l.blockedOn = null),
      Qc ||
        ((Qc = !0),
        cl.unstable_scheduleCallback(cl.unstable_NormalPriority, xy)));
  }
  var Lu = null;
  function Ks(l) {
    Lu !== l &&
      ((Lu = l),
      cl.unstable_scheduleCallback(cl.unstable_NormalPriority, function () {
        Lu === l && (Lu = null);
        for (var t = 0; t < l.length; t += 3) {
          var a = l[t],
            e = l[t + 1],
            u = l[t + 2];
          if (typeof e != "function") {
            if (Yf(e || a) === null) continue;
            break;
          }
          var n = fe(a);
          n !== null &&
            (l.splice(t, 3),
            (t -= 3),
            pc(n, { pending: !0, data: u, method: a.method, action: e }, e, u));
        }
      }));
  }
  function ie(l) {
    function t(f) {
      return xu(f, l);
    }
    (Jt !== null && xu(Jt, l),
      wt !== null && xu(wt, l),
      Wt !== null && xu(Wt, l),
      au.forEach(t),
      eu.forEach(t));
    for (var a = 0; a < qt.length; a++) {
      var e = qt[a];
      e.blockedOn === l && (e.blockedOn = null);
    }
    for (; 0 < qt.length && ((a = qt[0]), a.blockedOn === null); )
      (Hv(a), a.blockedOn === null && qt.shift());
    if (((a = (l.ownerDocument || l).$$reactFormReplay), a != null))
      for (e = 0; e < a.length; e += 3) {
        var u = a[e],
          n = a[e + 1],
          i = u[Ol] || null;
        if (typeof n == "function") i || Ks(a);
        else if (i) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (((u = n), (i = n[Ol] || null))) c = i.formAction;
            else if (Yf(u) !== null) continue;
          } else c = i.action;
          (typeof c == "function" ? (a[e + 1] = c) : (a.splice(e, 3), (e -= 3)),
            Ks(a));
        }
      }
  }
  function Cv() {
    function l(n) {
      n.canIntercept &&
        n.info === "react-transition" &&
        n.intercept({
          handler: function () {
            return new Promise(function (i) {
              return (u = i);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      (u !== null && (u(), (u = null)), e || setTimeout(a, 20));
    }
    function a() {
      if (!e && !navigation.transition) {
        var n = navigation.currentEntry;
        n &&
          n.url != null &&
          navigation.navigate(n.url, {
            state: n.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var e = !1,
        u = null;
      return (
        navigation.addEventListener("navigate", l),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(a, 100),
        function () {
          ((e = !0),
            navigation.removeEventListener("navigate", l),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            u !== null && (u(), (u = null)));
        }
      );
    }
  }
  function Gf(l) {
    this._internalRoot = l;
  }
  $n.prototype.render = Gf.prototype.render = function (l) {
    var t = this._internalRoot;
    if (t === null) throw Error(b(409));
    var a = t.current,
      e = ql();
    Nv(a, e, l, t, null, null);
  };
  $n.prototype.unmount = Gf.prototype.unmount = function () {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      (Nv(l.current, 2, null, l, null, null), Jn(), (t[ce] = null));
    }
  };
  function $n(l) {
    this._internalRoot = l;
  }
  $n.prototype.unstable_scheduleHydration = function (l) {
    if (l) {
      var t = c0();
      l = { blockedOn: null, target: l, priority: t };
      for (var a = 0; a < qt.length && t !== 0 && t < qt[a].priority; a++);
      (qt.splice(a, 0, l), a === 0 && Hv(l));
    }
  };
  var Js = ws.version;
  if (Js !== "19.2.6") throw Error(b(527, Js, "19.2.6"));
  j.findDOMNode = function (l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function"
        ? Error(b(188))
        : ((l = Object.keys(l).join(",")), Error(b(268, l)));
    return (
      (l = bm(t)),
      (l = l !== null ? Fs(l) : null),
      (l = l === null ? null : l.stateNode),
      l
    );
  };
  var Ly = {
    bundleType: 0,
    version: "19.2.6",
    rendererPackageName: "react-dom",
    currentDispatcherRef: O,
    reconcilerVersion: "19.2.6",
  };
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
    ((Oe = __REACT_DEVTOOLS_GLOBAL_HOOK__), !Oe.isDisabled && Oe.supportsFiber)
  )
    try {
      ((nu = Oe.inject(Ly)), (Cl = Oe));
    } catch {}
  var Oe;
  kn.createRoot = function (l, t) {
    if (!Ws(l)) throw Error(b(299));
    var a = !1,
      e = "",
      u = Ed,
      n = Ad,
      i = Od;
    return (
      t != null &&
        (t.unstable_strictMode === !0 && (a = !0),
        t.identifierPrefix !== void 0 && (e = t.identifierPrefix),
        t.onUncaughtError !== void 0 && (u = t.onUncaughtError),
        t.onCaughtError !== void 0 && (n = t.onCaughtError),
        t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
      (t = Mv(l, 1, !1, null, null, a, e, null, u, n, i, Cv)),
      (l[ce] = t.current),
      Hf(l),
      new Gf(t)
    );
  };
  kn.hydrateRoot = function (l, t, a) {
    if (!Ws(l)) throw Error(b(299));
    var e = !1,
      u = "",
      n = Ed,
      i = Ad,
      c = Od,
      f = null;
    return (
      a != null &&
        (a.unstable_strictMode === !0 && (e = !0),
        a.identifierPrefix !== void 0 && (u = a.identifierPrefix),
        a.onUncaughtError !== void 0 && (n = a.onUncaughtError),
        a.onCaughtError !== void 0 && (i = a.onCaughtError),
        a.onRecoverableError !== void 0 && (c = a.onRecoverableError),
        a.formState !== void 0 && (f = a.formState)),
      (t = Mv(l, 1, !0, t, a ?? null, e, u, f, n, i, c, Cv)),
      (t.context = _v(null)),
      (a = t.current),
      (e = ql()),
      (e = Vc(e)),
      (u = Lt(e)),
      (u.callback = null),
      Zt(a, u, e),
      (a = e),
      (t.current.lanes = a),
      cu(t, a),
      ut(t),
      (l[ce] = t.current),
      Hf(l),
      new $n(t)
    );
  };
  kn.version = "19.2.6";
});
var Yv = Fl((ah, Bv) => {
  "use strict";
  function qv() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qv);
      } catch (l) {
        console.error(l);
      }
  }
  (qv(), (Bv.exports = Rv()));
});
var jv = Fl((Fn) => {
  "use strict";
  var Zy = Symbol.for("react.transitional.element"),
    Vy = Symbol.for("react.fragment");
  function Gv(l, t, a) {
    var e = null;
    if (
      (a !== void 0 && (e = "" + a),
      t.key !== void 0 && (e = "" + t.key),
      "key" in t)
    ) {
      a = {};
      for (var u in t) u !== "key" && (a[u] = t[u]);
    } else a = t;
    return (
      (t = a.ref),
      { $$typeof: Zy, type: l, key: e, ref: t !== void 0 ? t : null, props: a }
    );
  }
  Fn.Fragment = Vy;
  Fn.jsx = Gv;
  Fn.jsxs = Gv;
});
var gu = Fl((nh, Xv) => {
  "use strict";
  Xv.exports = jv();
});
var Zv = za(Yv());
var ye = [
    {
      slug: "sophya-compound",
      title: {
        en: "Sophya Compound",
        ar: "\u0643\u0645\u0628\u0648\u0646\u062F \u0635\u0648\u0641\u064A\u0627",
      },
      sector: "landscape",
      sectorLabel: {
        en: "Landscape & Irrigation",
        ar: "\u0644\u0627\u0646\u062F\u0633\u0643\u064A\u0628 \u0648\u0634\u0628\u0643\u0627\u062A \u0631\u064A",
      },
      status: {
        en: "Ongoing",
        ar: "\u062C\u0627\u0631\u064D \u0627\u0644\u062A\u0646\u0641\u064A\u0630",
      },
      location: {
        en: "Elmokattam - Cairo",
        ar: "\u0627\u0644\u0645\u0642\u0637\u0645 - \u0627\u0644\u0642\u0627\u0647\u0631\u0629",
      },
      image: "/assets/images/sophya-compound.jpg",
      lead: {
        en: "Integrated landscape, irrigation and exterior development works.",
        ar: "\u0623\u0639\u0645\u0627\u0644 \u0645\u062A\u0643\u0627\u0645\u0644\u0629 \u0644\u0644\u0627\u0646\u062F\u0633\u0643\u064A\u0628 \u0648\u0634\u0628\u0643\u0627\u062A \u0627\u0644\u0631\u064A \u0648\u0627\u0644\u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u062E\u0627\u0631\u062C\u064A.",
      },
      overview: {
        en: "Giants General Contracting is delivering the outdoor development scope for Sophya Compound through coordinated landscape, irrigation and exterior works. The project is currently under execution.",
        ar: "\u062A\u0646\u0641\u0630 \u0634\u0631\u0643\u0629 \u062C\u0627\u064A\u0646\u062A\u0633 \u0644\u0644\u0645\u0642\u0627\u0648\u0644\u0627\u062A \u0627\u0644\u0639\u0627\u0645\u0629 \u0646\u0637\u0627\u0642 \u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u062E\u0627\u0631\u062C\u064A \u0628\u0643\u0645\u0628\u0648\u0646\u062F \u0635\u0648\u0641\u064A\u0627 \u0645\u0646 \u062E\u0644\u0627\u0644 \u062A\u0646\u0633\u064A\u0642 \u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0644\u0627\u0646\u062F\u0633\u0643\u064A\u0628 \u0648\u0634\u0628\u0643\u0627\u062A \u0627\u0644\u0631\u064A \u0648\u0627\u0644\u062A\u0634\u0637\u064A\u0628\u0627\u062A \u0627\u0644\u062E\u0627\u0631\u062C\u064A\u0629. \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u062C\u0627\u0631\u064D \u062A\u0646\u0641\u064A\u0630\u0647 \u062D\u0627\u0644\u064A\u064B\u0627.",
      },
      scope: [
        {
          en: "Site preparation",
          ar: "\u062A\u062C\u0647\u064A\u0632 \u0627\u0644\u0645\u0648\u0642\u0639",
        },
        {
          en: "Irrigation network installation",
          ar: "\u062A\u0646\u0641\u064A\u0630 \u0634\u0628\u0643\u0629 \u0627\u0644\u0631\u064A",
        },
        
        {
          en: "Softscape and planting",
          ar: "\u062A\u0646\u0641\u064A\u0630 \u0627\u0644\u0633\u0648\u0641\u062A \u0633\u0643\u064A\u0628 \u0648\u0627\u0644\u0632\u0631\u0627\u0639\u0627\u062A",
        },
        {
          en: "Testing and handover",
          ar: "\u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A \u0648\u0627\u0644\u062A\u0633\u0644\u064A\u0645",
        },
      ],
    },
    {
      slug: "district-9-mall",
      title: {
        en: "District 9 Mall",
        ar: "\u0645\u0648\u0644 \u062F\u064A\u0633\u062A\u0631\u064A\u0643\u062A 9",
      },
      sector: "landscape",
      sectorLabel: {
        en: "Commercial Landscape",
        ar: "\u0644\u0627\u0646\u062F\u0633\u0643\u064A\u0628 \u062A\u062C\u0627\u0631\u064A",
      },
      status: {
        en: "Executed \xB7 Maintenance Contract",
        ar: "\u062A\u0645 \u0627\u0644\u062A\u0646\u0641\u064A\u0630 \xB7 \u0635\u064A\u0627\u0646\u0629 \u0645\u0633\u062A\u0645\u0631\u0629",
      },
      location: {
        en: "6th of October - Giza",
        ar: "\u0627\u0644\u0633\u0627\u062F\u0633 \u0645\u0646 \u0623\u0643\u062A\u0648\u0628\u0631 - \u0627\u0644\u062C\u064A\u0632\u0629",
      },
      image: "/assets/images/district-9-mall.jpg",
      lead: {
        en: "From site mobilization to complete landscape execution and ongoing maintenance.",
        ar: "\u0645\u0646 \u062A\u062C\u0647\u064A\u0632 \u0627\u0644\u0645\u0648\u0642\u0639 \u0625\u0644\u0649 \u0627\u0644\u062A\u0646\u0641\u064A\u0630 \u0627\u0644\u0643\u0627\u0645\u0644 \u0644\u0644\u0627\u0646\u062F\u0633\u0643\u064A\u0628 \u0648\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0635\u064A\u0627\u0646\u0629 \u0627\u0644\u0645\u0633\u062A\u0645\u0631\u0629.",
      },
      overview: {
        en: "The site was received as vacant land. Giants planned the site layout, established the temporary facilities and mobilized the work areas before executing the irrigation network, hardscape and softscape. Following completion, the company was awarded ongoing landscape and irrigation maintenance contracts.",
        ar: "\u062A\u0645 \u0627\u0633\u062A\u0644\u0627\u0645 \u0627\u0644\u0645\u0648\u0642\u0639 \u0643\u0623\u0631\u0636 \u0641\u0636\u0627\u0621\u060C \u0648\u0642\u0627\u0645\u062A \u062C\u0627\u064A\u0646\u062A\u0633 \u0628\u062A\u062E\u0637\u064A\u0637 \u0627\u0644\u0645\u0648\u0642\u0639 \u0648\u062A\u0648\u0632\u064A\u0639 \u0645\u0646\u0627\u0637\u0642 \u0627\u0644\u0639\u0645\u0644 \u0648\u0627\u0644\u0643\u0631\u0641\u0627\u0646\u0627\u062A \u0648\u062A\u062C\u0647\u064A\u0632 \u0627\u0644\u0645\u0648\u0642\u0639 \u0628\u0627\u0644\u0643\u0627\u0645\u0644\u060C \u062B\u0645 \u062A\u0646\u0641\u064A\u0630 \u0634\u0628\u0643\u0629 \u0627\u0644\u0631\u064A \u0648\u0627\u0644\u0647\u0627\u0631\u062F\u0633\u0643\u064A\u0628 \u0648\u0627\u0644\u0633\u0648\u0641\u062A \u0633\u0643\u064A\u0628. \u0648\u0628\u0639\u062F \u0627\u0646\u062A\u0647\u0627\u0621 \u0627\u0644\u062A\u0646\u0641\u064A\u0630 \u062A\u0645 \u0625\u0633\u0646\u0627\u062F \u0639\u0642\u0648\u062F \u0635\u064A\u0627\u0646\u0629 \u0627\u0644\u0644\u0627\u0646\u062F\u0633\u0643\u064A\u0628 \u0648\u0634\u0628\u0643\u0627\u062A \u0627\u0644\u0631\u064A \u0644\u0644\u0634\u0631\u0643\u0629.",
      },
      scope: [
        
        {
          en: "Irrigation network installation",
          ar: "\u062A\u0646\u0641\u064A\u0630 \u0634\u0628\u0643\u0629 \u0627\u0644\u0631\u064A",
        },
        {
          en: "Hardscape works",
          ar: "\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0647\u0627\u0631\u062F\u0633\u0643\u064A\u0628",
        },
        {
          en: "Softscape and planting",
          ar: "\u0627\u0644\u0633\u0648\u0641\u062A \u0633\u0643\u064A\u0628 \u0648\u0627\u0644\u0632\u0631\u0627\u0639\u0627\u062A",
        },
        {
          en: "Landscape and irrigation maintenance",
          ar: "\u0635\u064A\u0627\u0646\u0629 \u0627\u0644\u0644\u0627\u0646\u062F\u0633\u0643\u064A\u0628 \u0648\u0634\u0628\u0643\u0627\u062A \u0627\u0644\u0631\u064A",
        },
      ],
    },
    {
      slug: "private-villas-landscape",
      title: {
        en: "Private Villas Landscape",
        ar: "\u0644\u0627\u0646\u062F\u0633\u0643\u064A\u0628 \u0641\u064A\u0644\u0627\u062A \u062E\u0627\u0635\u0629",
      },
      sector: "landscape",
      sectorLabel: {
        en: "Residential Landscape",
        ar: "\u0644\u0627\u0646\u062F\u0633\u0643\u064A\u0628 \u0633\u0643\u0646\u064A",
      },
      status: {
        en: "50+ Villas Executed \u00B7 Ongoing Maintenance contracts",
        ar: "\u062A\u0645 \u062A\u0646\u0641\u064A\u0630 \u0623\u0643\u062B\u0631 \u0645\u0646 50 \u0641\u064A\u0644\u0627 \u0645\u0639 \u0635\u064A\u0627\u0646\u0629 \u0645\u0633\u062A\u0645\u0631\u0629",
      },
      location: {
        en: "Multiple Compounds across 6th of October & Sheikh Zayed",
        ar: "\u0643\u0645\u0628\u0648\u0646\u062F\u0627\u062A \u0645\u062A\u0639\u062F\u062F\u0629 \u0641\u064A \u0627\u0644\u0633\u0627\u062F\u0633 \u0645\u0646 \u0623\u0643\u062A\u0648\u0628\u0631 \u0648\u0627\u0644\u0634\u064A\u062E \u0632\u0627\u064A\u062F",
      },
      image: "/assets/images/villa-project.jpg",
      lead: {
        en: "Tailored outdoor environments for private residences.",
        ar: "\u0645\u0633\u0627\u062D\u0627\u062A \u062E\u0627\u0631\u062C\u064A\u0629 \u0645\u062A\u0643\u0627\u0645\u0644\u0629 \u0648\u0645\u062E\u0635\u0635\u0629 \u0644\u0644\u0641\u064A\u0644\u0627\u062A \u0627\u0644\u0633\u0643\u0646\u064A\u0629.",
      },
      overview: {
        en: "A selection of private villa works combining efficient irrigation, durable hardscape and carefully coordinated planting to create complete outdoor living environments.",
        ar: "\u0645\u062C\u0645\u0648\u0639\u0629 \u0645\u0646 \u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0641\u064A\u0644\u0627\u062A \u0627\u0644\u062E\u0627\u0635\u0629 \u062A\u062C\u0645\u0639 \u0628\u064A\u0646 \u0634\u0628\u0643\u0627\u062A \u0627\u0644\u0631\u064A \u0627\u0644\u0641\u0639\u0627\u0644\u0629 \u0648\u0627\u0644\u0647\u0627\u0631\u062F\u0633\u0643\u064A\u0628 \u0648\u0627\u0644\u0632\u0631\u0627\u0639\u0627\u062A \u0627\u0644\u0645\u0646\u0633\u0642\u0629 \u0644\u062A\u0643\u0648\u064A\u0646 \u0645\u0633\u0627\u062D\u0627\u062A \u062E\u0627\u0631\u062C\u064A\u0629 \u0645\u062A\u0643\u0627\u0645\u0644\u0629.",
      },
      scope: [
        {
          en: "Landscape execution",
          ar: "\u062A\u0646\u0641\u064A\u0630 \u0627\u0644\u0644\u0627\u0646\u062F\u0633\u0643\u064A\u0628",
        },
        {
          en: "Automatic irrigation systems",
          ar: "\u0634\u0628\u0643\u0627\u062A \u0627\u0644\u0631\u064A \u0627\u0644\u0623\u0648\u062A\u0648\u0645\u0627\u062A\u064A\u0643\u064A\u0629",
        },
        {
          en: "Hardscape and outdoor features",
          ar: "\u0627\u0644\u0647\u0627\u0631\u062F\u0633\u0643\u064A\u0628 \u0648\u0627\u0644\u0639\u0646\u0627\u0635\u0631 \u0627\u0644\u062E\u0627\u0631\u062C\u064A\u0629",
        },
        {
          en: "Trees, shrubs and turf",
          ar: "\u0627\u0644\u0623\u0634\u062C\u0627\u0631 \u0648\u0627\u0644\u0634\u062C\u064A\u0631\u0627\u062A \u0648\u0627\u0644\u0645\u0633\u0637\u062D\u0627\u062A \u0627\u0644\u062E\u0636\u0631\u0627\u0621",
        },
        {
          en: "Rountine maintenance and seasonal works",
          ar: "\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0635\u064a\u0627\u0646\u0629 \u0627\u0644\u062f\u0648\u0631\u064a\u0629 \u0648\u0627\u0644\u0645\u0648\u0633\u0645\u064a\u0629",
        },
      ],
    },
    {
      slug: "beit-al-watan-buildings",
      title: {
        en: "Beit Al Watan Buildings",
        ar: "\u0639\u0645\u0627\u0631\u0627\u062A \u0628\u064A\u062A \u0627\u0644\u0648\u0637\u0646",
      },
      sector: "finishing",
      sectorLabel: {
        en: "Interior & Exterior Finishing",
        ar: "\u062A\u0634\u0637\u064A\u0628\u0627\u062A \u062F\u0627\u062E\u0644\u064A\u0629 \u0648\u062E\u0627\u0631\u062C\u064A\u0629",
      },
      status: {
        en: "Completed & Ongoing Buildings",
        ar: "\u0645\u0628\u0627\u0646\u064D \u0645\u0646\u062A\u0647\u064A\u0629 \u0648\u0623\u062E\u0631\u0649 \u062C\u0627\u0631\u064D \u062A\u0646\u0641\u064A\u0630\u0647\u0627",
      },
      location: {
        en: "5th Settlement - New Cairo",
        ar: "\u0627\u0644\u062A\u062C\u0645\u0639 \u0627\u0644\u062E\u0627\u0645\u0633 - \u0627\u0644\u0642\u0627\u0647\u0631\u0629 \u0627\u0644\u062C\u062F\u064A\u062F\u0629",
      },
      image: "/assets/images/WhatsApp Image 2026-07-27 at 3.25.21 AM.jpeg",
      lead: {
        en: "Coordinated fa\xE7ade and interior finishing across multiple residential buildings.",
        ar: "\u062A\u0646\u0633\u064A\u0642 \u0648\u062A\u0646\u0641\u064A\u0630 \u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0648\u0627\u062C\u0647\u0627\u062A \u0648\u0627\u0644\u062A\u0634\u0637\u064A\u0628\u0627\u062A \u0627\u0644\u062F\u0627\u062E\u0644\u064A\u0629 \u0644\u0639\u062F\u062F \u0645\u0646 \u0627\u0644\u0645\u0628\u0627\u0646\u064A \u0627\u0644\u0633\u0643\u0646\u064A\u0629.",
      },
      overview: {
        en: "Giants is delivering exterior fa\xE7ade and interior finishing packages across multiple residential buildings in Beit Al Watan. Some buildings have been completed while work continues on others.",
        ar: "\u062A\u0646\u0641\u0630 \u062C\u0627\u064A\u0646\u062A\u0633 \u062D\u0632\u0645 \u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0648\u0627\u062C\u0647\u0627\u062A \u0648\u0627\u0644\u062A\u0634\u0637\u064A\u0628\u0627\u062A \u0627\u0644\u062F\u0627\u062E\u0644\u064A\u0629 \u0644\u0639\u062F\u062F \u0645\u0646 \u0627\u0644\u0639\u0645\u0627\u0631\u0627\u062A \u0627\u0644\u0633\u0643\u0646\u064A\u0629 \u0641\u064A \u0628\u064A\u062A \u0627\u0644\u0648\u0637\u0646\u060C \u062D\u064A\u062B \u062A\u0645 \u0627\u0644\u0627\u0646\u062A\u0647\u0627\u0621 \u0645\u0646 \u0628\u0639\u0636 \u0627\u0644\u0645\u0628\u0627\u0646\u064A \u0648\u0645\u0627 \u0632\u0627\u0644\u062A \u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u062C\u0627\u0631\u064A\u0629 \u0641\u064A \u0645\u0628\u0627\u0646\u064D \u0623\u062E\u0631\u0649.",
      },
      scope: [
        {
          en: "Exterior fa\xE7ade works",
          ar: "\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0648\u0627\u062C\u0647\u0627\u062A \u0627\u0644\u062E\u0627\u0631\u062C\u064A\u0629",
        },
        {
          en: "Interior finishing",
          ar: "\u0627\u0644\u062A\u0634\u0637\u064A\u0628\u0627\u062A \u0627\u0644\u062F\u0627\u062E\u0644\u064A\u0629",
        },
        {
          en: "Materials and trades coordination",
          ar: "\u062A\u0646\u0633\u064A\u0642 \u0627\u0644\u062E\u0627\u0645\u0627\u062A \u0648\u0627\u0644\u0628\u0646\u0648\u062F",
        },
        {
          en: "Quality control and handover",
          ar: "\u0636\u0628\u0637 \u0627\u0644\u062C\u0648\u062F\u0629 \u0648\u0627\u0644\u062A\u0633\u0644\u064A\u0645",
        },
      ],
    },
    {
      slug: "private-villa-finishing",
      title: {
        en: "Private Villa Finishing",
        ar: "\u062A\u0634\u0637\u064A\u0628\u0627\u062A \u0641\u064A\u0644\u0627 \u062E\u0627\u0635\u0629",
      },
      sector: "finishing",
      sectorLabel: {
        en: "Turnkey Finishing",
        ar: "\u062A\u0634\u0637\u064A\u0628\u0627\u062A \u0645\u062A\u0643\u0627\u0645\u0644\u0629",
      },
      status: {
        en: "Delivered",
        ar: "\u062A\u0645 \u0627\u0644\u062A\u0633\u0644\u064A\u0645",
      },
      location: {
        en: "6th of October - Giza",
        ar: "\u0627\u0644\u0633\u0627\u062F\u0633 \u0645\u0646 \u0623\u0643\u062A\u0648\u0628\u0631 - \u0627\u0644\u062C\u064A\u0632\u0629",
      },
      image: "/assets/images/WhatsApp Image 2026-07-27 at 3.22.48 AM.jpeg",
      lead: {
        en: "Complete interior and exterior finishing delivered as one coordinated package.",
        ar: "\u062A\u0646\u0641\u064A\u0630 \u0645\u062A\u0643\u0627\u0645\u0644 \u0644\u0644\u062A\u0634\u0637\u064A\u0628\u0627\u062A \u0627\u0644\u062F\u0627\u062E\u0644\u064A\u0629 \u0648\u0627\u0644\u062E\u0627\u0631\u062C\u064A\u0629 \u0636\u0645\u0646 \u062D\u0632\u0645\u0629 \u0623\u0639\u0645\u0627\u0644 \u0648\u0627\u062D\u062F\u0629.",
      },
      overview: {
        en: "A coordinated turnkey finishing package covering interior spaces, exterior finishes, technical interfaces and final quality control.",
        ar: "\u062D\u0632\u0645\u0629 \u062A\u0634\u0637\u064A\u0628\u0627\u062A \u0645\u062A\u0643\u0627\u0645\u0644\u0629 \u062A\u0634\u0645\u0644 \u0627\u0644\u0641\u0631\u0627\u063A\u0627\u062A \u0627\u0644\u062F\u0627\u062E\u0644\u064A\u0629 \u0648\u0627\u0644\u062A\u0634\u0637\u064A\u0628\u0627\u062A \u0627\u0644\u062E\u0627\u0631\u062C\u064A\u0629 \u0648\u062A\u0646\u0633\u064A\u0642 \u0627\u0644\u0628\u0646\u0648\u062F \u0627\u0644\u0641\u0646\u064A\u0629 \u0648\u0623\u0639\u0645\u0627\u0644 \u0636\u0628\u0637 \u0627\u0644\u062C\u0648\u062F\u0629 \u0627\u0644\u0646\u0647\u0627\u0626\u064A\u0629.",
      },
      scope: [
        {
          en: "Interior finishing works",
          ar: "\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u062A\u0634\u0637\u064A\u0628\u0627\u062A \u0627\u0644\u062F\u0627\u062E\u0644\u064A\u0629",
        },
        {
          en: "Exterior finishing works",
          ar: "\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u062A\u0634\u0637\u064A\u0628\u0627\u062A \u0627\u0644\u062E\u0627\u0631\u062C\u064A\u0629",
        },
        {
          en: "MEP coordination",
          ar: "\u062A\u0646\u0633\u064A\u0642 \u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0643\u0647\u0631\u0648\u0645\u064A\u0643\u0627\u0646\u064A\u0643\u064A\u0629",
        },
        {
          en: "Snagging and handover",
          ar: "\u0627\u0644\u0627\u0633\u062A\u0644\u0627\u0645\u0627\u062A \u0648\u0627\u0644\u062A\u0633\u0644\u064A\u0645 \u0627\u0644\u0646\u0647\u0627\u0626\u064A",
        },
      ],
    },
    {
      slug: "private-apartment",
      title: {
        en: "Private Apartment",
        ar: "\u0634\u0642\u0629 \u062E\u0627\u0635\u0629",
      },
      sector: "finishing",
      sectorLabel: {
        en: "Interior Finishing",
        ar: "\u062A\u0634\u0637\u064A\u0628\u0627\u062A \u062F\u0627\u062E\u0644\u064A\u0629",
      },
      status: {
        en: "Delivered",
        ar: "\u062A\u0645 \u0627\u0644\u062A\u0633\u0644\u064A\u0645",
      },
      location: {
        en: "Residential Interior",
        ar: "\u062A\u0634\u0637\u064A\u0628\u0627\u062A \u0633\u0643\u0646\u064A\u0629",
      },
      image: "/assets/images/hero-landscape.jpg",
      lead: {
        en: "Interior design coordination and full finishing delivery.",
        ar: "\u062A\u0646\u0633\u064A\u0642 \u0627\u0644\u062A\u0635\u0645\u064A\u0645 \u0627\u0644\u062F\u0627\u062E\u0644\u064A \u0648\u0627\u0644\u062A\u0646\u0641\u064A\u0630 \u0627\u0644\u0643\u0627\u0645\u0644 \u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u062A\u0634\u0637\u064A\u0628\u0627\u062A.",
      },
      overview: {
        en: "Interior finishing delivered through coordinated civil, architectural and technical trades, with attention to detailing and final presentation.",
        ar: "\u062A\u0646\u0641\u064A\u0630 \u0627\u0644\u062A\u0634\u0637\u064A\u0628\u0627\u062A \u0627\u0644\u062F\u0627\u062E\u0644\u064A\u0629 \u0645\u0646 \u062E\u0644\u0627\u0644 \u062A\u0646\u0633\u064A\u0642 \u0627\u0644\u0628\u0646\u0648\u062F \u0627\u0644\u0645\u062F\u0646\u064A\u0629 \u0648\u0627\u0644\u0645\u0639\u0645\u0627\u0631\u064A\u0629 \u0648\u0627\u0644\u0641\u0646\u064A\u0629\u060C \u0645\u0639 \u0627\u0644\u0627\u0647\u062A\u0645\u0627\u0645 \u0628\u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644 \u0648\u062C\u0648\u062F\u0629 \u0627\u0644\u062A\u0633\u0644\u064A\u0645 \u0627\u0644\u0646\u0647\u0627\u0626\u064A.",
      },
      scope: [
        {
          en: "Architectural finishes",
          ar: "\u0627\u0644\u062A\u0634\u0637\u064A\u0628\u0627\u062A \u0627\u0644\u0645\u0639\u0645\u0627\u0631\u064A\u0629",
        },
        {
          en: "Ceilings and lighting coordination",
          ar: "\u062A\u0646\u0633\u064A\u0642 \u0627\u0644\u0623\u0633\u0642\u0641 \u0648\u0627\u0644\u0625\u0636\u0627\u0621\u0629",
        },
        {
          en: "Joinery and fixed elements",
          ar: "\u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u062E\u0634\u0628\u064A\u0629 \u0648\u0627\u0644\u0639\u0646\u0627\u0635\u0631 \u0627\u0644\u062B\u0627\u0628\u062A\u0629",
        },
        {
          en: "Final detailing and handover",
          ar: "\u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0646\u0647\u0627\u0626\u064A\u0629 \u0648\u0627\u0644\u062A\u0633\u0644\u064A\u0645",
        },
      ],
    },
    {
      slug: "agouza-rehabilitation-hospital",
      title: {
        en: "Mobility & Daily Living Training Facility",
        ar: "\u0645\u0646\u0634\u0623\u0629 \u062A\u062F\u0631\u064A\u0628 \u0627\u0644\u062D\u0631\u0643\u0629 \u0648\u0645\u0647\u0627\u0631\u0627\u062A \u0627\u0644\u062D\u064A\u0627\u0629 \u0627\u0644\u064A\u0648\u0645\u064A\u0629",
      },
      sector: "accessibility",
      sectorLabel: {
        en: "Accessibility Solutions",
        ar: "\u062D\u0644\u0648\u0644 \u0627\u0644\u0625\u062A\u0627\u062D\u0629",
      },
      status: {
        en: "Delivered",
        ar: "\u062A\u0645 \u0627\u0644\u062A\u0633\u0644\u064A\u0645",
      },
      location: {
        en: "Agouza Rehabilitation and Rheumatology Center",
        ar: "\u0645\u0631\u0643\u0632 \u062A\u0623\u0647\u064A\u0644 \u0627\u0644\u0639\u062C\u0648\u0632\u0629",
      },
      image: "/assets/images/WhatsApp Image 2026-07-27 at 2.54.46 AM (3).jpeg",
      lead: {
        en: "Practical rehabilitation and daily-living training environments designed around accessibility.",
        ar: "\u0628\u064A\u0626\u0627\u062A \u062A\u062F\u0631\u064A\u0628 \u0648\u062A\u0623\u0647\u064A\u0644 \u0639\u0645\u0644\u064A \u0645\u0635\u0645\u0645\u0629 \u0648\u0641\u0642 \u0645\u062A\u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0625\u062A\u0627\u062D\u0629 \u0648\u0633\u0647\u0648\u0644\u0629 \u0627\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645.",
      },
      overview: {
        en: "Specialized accessibility works created to support rehabilitation and daily-living training, including wheelchair practice areas and adapted functional spaces.",
        ar: "\u0623\u0639\u0645\u0627\u0644 \u0625\u062A\u0627\u062D\u0629 \u0645\u062A\u062E\u0635\u0635\u0629 \u0644\u062F\u0639\u0645 \u0627\u0644\u062A\u0623\u0647\u064A\u0644 \u0648\u0627\u0644\u062A\u062F\u0631\u064A\u0628 \u0639\u0644\u0649 \u0623\u0646\u0634\u0637\u0629 \u0627\u0644\u062D\u064A\u0627\u0629 \u0627\u0644\u064A\u0648\u0645\u064A\u0629\u060C \u0648\u062A\u0634\u0645\u0644 \u0645\u0646\u0627\u0637\u0642 \u062A\u062F\u0631\u064A\u0628 \u0644\u0644\u0643\u0631\u0627\u0633\u064A \u0627\u0644\u0645\u062A\u062D\u0631\u0643\u0629 \u0648\u0641\u0631\u0627\u063A\u0627\u062A \u0648\u0638\u064A\u0641\u064A\u0629 \u0645\u0647\u064A\u0623\u0629.",
      },
      scope: [
        {
          en: "Outdoor wheelchair training area",
          ar: "\u0645\u0646\u0637\u0642\u0629 \u062A\u062F\u0631\u064A\u0628 \u062E\u0627\u0631\u062C\u064A\u0629 \u0644\u0644\u0643\u0631\u0627\u0633\u064A \u0627\u0644\u0645\u062A\u062D\u0631\u0643\u0629",
        },
        {
          en: "Accessible bathroom",
          ar: "\u062D\u0645\u0627\u0645 \u0645\u0647\u064A\u0623 \u0644\u0630\u0648\u064A \u0627\u0644\u0625\u0639\u0627\u0642\u0629",
        },
        {
          en: "Accessible kitchen",
          ar: "\u0645\u0637\u0628\u062E \u0645\u0647\u064A\u0623",
        },
        {
          en: "Daily-living training facilities",
          ar: "\u0641\u0631\u0627\u063A\u0627\u062A \u062A\u062F\u0631\u064A\u0628 \u0623\u0646\u0634\u0637\u0629 \u0627\u0644\u062D\u064A\u0627\u0629 \u0627\u0644\u064A\u0648\u0645\u064A\u0629",
        },
      ],
    },
    {
      slug: "indoor-pool-ventilation",
      title: {
        en: "Indoor Swimming Pool Ventilation",
        ar: "\u062A\u0647\u0648\u064A\u0629 \u062D\u0645\u0627\u0645 \u0633\u0628\u0627\u062D\u0629 \u062F\u0627\u062E\u0644\u064A",
      },
      sector: "hvac",
      sectorLabel: {
        en: "HVAC & Mechanical Works",
        ar: "\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u062A\u0643\u064A\u064A\u0641 \u0648\u0627\u0644\u062A\u0647\u0648\u064A\u0629",
      },
      status: {
        en: "Delivered",
        ar: "\u062A\u0645 \u0627\u0644\u062A\u0633\u0644\u064A\u0645",
      },
      location: {
        en: "Agouza Rehabilitation and Rheumatology Center",
        ar: "\u0645\u0631\u0643\u0632 \u062A\u0623\u0647\u064A\u0644 \u0627\u0644\u0639\u062C\u0648\u0632\u0629",
      },
      image: "/assets/images/hero-landscape.jpg",
      lead: {
        en: "Mechanical ventilation and air-management works for an indoor swimming pool environment.",
        ar: "\u0623\u0639\u0645\u0627\u0644 \u062A\u0647\u0648\u064A\u0629 \u0645\u064A\u0643\u0627\u0646\u064A\u0643\u064A\u0629 \u0648\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0647\u0648\u0627\u0621 \u0644\u0628\u064A\u0626\u0629 \u062D\u0645\u0627\u0645 \u0633\u0628\u0627\u062D\u0629 \u062F\u0627\u062E\u0644\u064A.",
      },
      overview: {
        en: "A coordinated mechanical ventilation scope supporting air circulation, humidity management and a more comfortable indoor pool environment.",
        ar: "\u0646\u0637\u0627\u0642 \u0645\u062A\u0643\u0627\u0645\u0644 \u0644\u0644\u062A\u0647\u0648\u064A\u0629 \u0627\u0644\u0645\u064A\u0643\u0627\u0646\u064A\u0643\u064A\u0629 \u064A\u062F\u0639\u0645 \u062D\u0631\u0643\u0629 \u0627\u0644\u0647\u0648\u0627\u0621 \u0648\u0627\u0644\u062A\u062D\u0643\u0645 \u0641\u064A \u0627\u0644\u0631\u0637\u0648\u0628\u0629 \u0648\u062A\u062D\u0633\u064A\u0646 \u0627\u0644\u0628\u064A\u0626\u0629 \u0627\u0644\u062F\u0627\u062E\u0644\u064A\u0629 \u0644\u062D\u0645\u0627\u0645 \u0627\u0644\u0633\u0628\u0627\u062D\u0629.",
      },
      scope: [
        {
          en: "Mechanical ventilation",
          ar: "\u0627\u0644\u062A\u0647\u0648\u064A\u0629 \u0627\u0644\u0645\u064A\u0643\u0627\u0646\u064A\u0643\u064A\u0629",
        },
        {
          en: "Air circulation",
          ar: "\u062A\u0648\u0632\u064A\u0639 \u0648\u062D\u0631\u0643\u0629 \u0627\u0644\u0647\u0648\u0627\u0621",
        },
        {
          en: "Humidity management",
          ar: "\u0627\u0644\u062A\u062D\u0643\u0645 \u0641\u064A \u0627\u0644\u0631\u0637\u0648\u0628\u0629",
        },
        {
          en: "Testing and commissioning",
          ar: "\u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A \u0648\u0627\u0644\u062A\u0634\u063A\u064A\u0644",
        },
      ],
    },
    {
      slug: "site-mobilization-projects",
      title: {
        en: "Site Mobilization Projects",
        ar: "مشروعات تجهيز المواقع",
      },
      sector: "mobilization",
      sectorLabel: {
        en: "Site Mobilization",
        ar: "تجهيز المواقع",
      },
      status: {
        en: "3 Completed Projects",
        ar: "3 مشروعات مكتملة",
      },
      location: {
        en: "Belbeis \xB7 Ismailia \xB7 Damanhour",
        ar: "بلبيس \xB7 الإسماعيلية \xB7 دمنهور",
      },
      image: "/assets/images/03.jpg",
      lead: {
        en: "Complete site setup and logistics planning across three completed projects.",
        ar: "تجهيز متكامل للمواقع والتخطيط اللوجستي لثلاثة مشروعات مكتملة.",
      },
      overview: {
        en: "Giants completed site mobilization works across three projects in Belbeis, Ismailia and Damanhour. Each site was planned and organized to support a safe and efficient start to construction, including temporary facilities, work zones, access routes, storage areas and essential site services.",
        ar: "نفذت شركة جاينتس أعمال تجهيز المواقع لثلاثة مشروعات في بلبيس والإسماعيلية ودمنهور. تم تخطيط وتنظيم كل موقع لضمان بداية آمنة وفعالة لأعمال التنفيذ، بما يشمل المنشآت المؤقتة ومناطق العمل ومسارات الحركة ومناطق التخزين والخدمات الأساسية للموقع.",
      },
      scope: [
        {
          en: "Site survey, planning and setting out",
          ar: "معاينة الموقع والتخطيط وتوقيع التقسيمات",
        },
        {
          en: "Caravans and temporary facilities layout",
          ar: "تخطيط وتوزيع الكرفانات والمنشآت المؤقتة",
        },
        {
          en: "Access gates and internal circulation routes",
          ar: "تجهيز بوابات الدخول ومسارات الحركة الداخلية",
        },
        {
          en: "Work zones and storage areas",
          ar: "تحديد وتجهيز مناطق العمل والتخزين",
        },
        {
          en: "Temporary utilities and site services",
          ar: "تجهيز المرافق المؤقتة وخدمات الموقع",
        },
        {
          en: "Final inspection and handover of the mobilized site",
          ar: "المراجعة النهائية وتسليم الموقع بعد التجهيز",
        },
      ],
    },
  ],
  jf = {
    all: {
      en: "All Projects",
      ar: "\u0643\u0644 \u0627\u0644\u0645\u0634\u0631\u0648\u0639\u0627\u062A",
    },
    landscape: {
      en: "Landscape & Irrigation",
      ar: "\u0644\u0627\u0646\u062F\u0633\u0643\u064A\u0628 \u0648\u0634\u0628\u0643\u0627\u062A \u0631\u064A",
    },
    finishing: {
      en: "Finishing Works",
      ar: "\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u062A\u0634\u0637\u064A\u0628\u0627\u062A",
    },
    accessibility: {
      en: "Accessibility",
      ar: "\u062D\u0644\u0648\u0644 \u0627\u0644\u0625\u062A\u0627\u062D\u0629",
    },
    hvac: {
      en: "HVAC",
      ar: "\u062A\u0643\u064A\u064A\u0641 \u0648\u062A\u0647\u0648\u064A\u0629",
    },
    mobilization: {
      en: "Mobilization",
      ar: "تجهيز المواقع",
    },
  };
var Ot = za(Eu());
var d = za(gu()),
  z = (l, t) => l[t],
  M = {
    nav: {
      home: {
        en: "Home",
        ar: "\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629",
      },
      about: { en: "About", ar: "\u0645\u0646 \u0646\u062D\u0646" },
      services: {
        en: "Services",
        ar: "\u0627\u0644\u062E\u062F\u0645\u0627\u062A",
      },
      portfolio: {
        en: "Projects",
        ar: "\u0627\u0644\u0645\u0634\u0631\u0648\u0639\u0627\u062A",
      },
      contact: {
        en: "Contact",
        ar: "\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627",
      },
      quote: {
        en: "Start a project",
        ar: "\u0627\u0628\u062F\u0623 \u0645\u0634\u0631\u0648\u0639\u0643",
      },
    },
    hero: {
      eyebrow: {
        en: "LANDSCAPE \u2022 IRRIGATION \u2022 COMPLETE EXECUTION",
        ar: "\u0644\u0627\u0646\u062F\u0633\u0643\u064A\u0628 \u2022 \u0634\u0628\u0643\u0627\u062A \u0631\u064A \u2022 \u062A\u0646\u0641\u064A\u0630 \u0645\u062A\u0643\u0627\u0645\u0644",
      },
      titleA: {
        en: "Outdoor environments.",
        ar: "\u0645\u0633\u0627\u062D\u0627\u062A \u062E\u0627\u0631\u062C\u064A\u0629",
      },
      titleB: {
        en: "Built to perform.",
        ar: "\u0645\u0635\u0645\u0645\u0629 \u0644\u062A\u0633\u062A\u0645\u0631.",
      },
      copy: {
        en: "From site mobilization and irrigation networks to hardscape, planting, testing and long-term maintenance\u2014one team coordinates the complete scope.",
        ar: "\u0645\u0646 \u062A\u062C\u0647\u064A\u0632 \u0627\u0644\u0645\u0648\u0642\u0639 \u0648\u0634\u0628\u0643\u0627\u062A \u0627\u0644\u0631\u064A \u0625\u0644\u0649 \u0627\u0644\u0647\u0627\u0631\u062F\u0633\u0643\u064A\u0628 \u0648\u0627\u0644\u0632\u0631\u0627\u0639\u0627\u062A \u0648\u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A \u0648\u0627\u0644\u0635\u064A\u0627\u0646\u0629 \u0637\u0648\u064A\u0644\u0629 \u0627\u0644\u0645\u062F\u0649\u2014\u0641\u0631\u064A\u0642 \u0648\u0627\u062D\u062F \u064A\u062F\u064A\u0631 \u0646\u0637\u0627\u0642 \u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0628\u0627\u0644\u0643\u0627\u0645\u0644.",
      },
      projects: {
        en: "Explore our projects",
        ar: "\u0627\u0633\u062A\u0643\u0634\u0641 \u0645\u0634\u0631\u0648\u0639\u0627\u062A\u0646\u0627",
      },
      consult: {
        en: "Request a consultation",
        ar: "\u0627\u0637\u0644\u0628 \u0627\u0633\u062A\u0634\u0627\u0631\u0629",
      },
      featured: {
        en: "Featured expertise",
        ar: "\u0645\u062C\u0627\u0644\u0646\u0627 \u0627\u0644\u0631\u0626\u064A\u0633\u064A",
      },
      cardTitle: {
        en: "Integrated Landscape & Irrigation",
        ar: "\u062A\u0646\u0641\u064A\u0630 \u0645\u062A\u0643\u0627\u0645\u0644 \u0644\u0644\u0627\u0646\u062F\u0633\u0643\u064A\u0628 \u0648\u0634\u0628\u0643\u0627\u062A \u0627\u0644\u0631\u064A",
      },
      cardCopy: {
        en: "Coordinated execution from the first day on site through final handover and maintenance.",
        ar: "\u062A\u0646\u0641\u064A\u0630 \u0645\u0646\u0633\u0642 \u0645\u0646 \u0623\u0648\u0644 \u064A\u0648\u0645 \u0628\u0627\u0644\u0645\u0648\u0642\u0639 \u0648\u062D\u062A\u0649 \u0627\u0644\u062A\u0633\u0644\u064A\u0645 \u0627\u0644\u0646\u0647\u0627\u0626\u064A \u0648\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0635\u064A\u0627\u0646\u0629.",
      },
      view: {
        en: "View capability",
        ar: "\u0639\u0631\u0636 \u0646\u0637\u0627\u0642 \u0627\u0644\u0623\u0639\u0645\u0627\u0644",
      },
    },
    homeProjects: {
      eyebrow: {
        en: "SELECTED PROJECTS",
        ar: "\u0645\u0634\u0631\u0648\u0639\u0627\u062A \u0645\u062E\u062A\u0627\u0631\u0629",
      },
      title: {
        en: "Proof is in the execution.",
        ar: "\u0642\u0648\u0629 \u0627\u0644\u062A\u0646\u0641\u064A\u0630 \u062A\u0638\u0647\u0631 \u0641\u064A \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644.",
      },
      copy: {
        en: "Real work across residential, commercial and public developments.",
        ar: "\u0623\u0639\u0645\u0627\u0644 \u0641\u0639\u0644\u064A\u0629 \u0641\u064A \u0645\u0634\u0631\u0648\u0639\u0627\u062A \u0633\u0643\u0646\u064A\u0629 \u0648\u062A\u062C\u0627\u0631\u064A\u0629 \u0648\u0645\u0646\u0634\u0622\u062A \u0639\u0627\u0645\u0629.",
      },
      all: {
        en: "View all projects",
        ar: "\u0639\u0631\u0636 \u0643\u0644 \u0627\u0644\u0645\u0634\u0631\u0648\u0639\u0627\u062A",
      },
    },
    about: {
      eyebrow: {
        en: "ABOUT GIANTS",
        ar: "\u0639\u0646 \u062C\u0627\u064A\u0646\u062A\u0633",
      },
      title: {
        en: "One execution partner. Every outdoor stage.",
        ar: "\u0634\u0631\u064A\u0643 \u062A\u0646\u0641\u064A\u0630 \u0648\u0627\u062D\u062F \u0644\u0643\u0644 \u0645\u0631\u0627\u062D\u0644 \u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u062E\u0627\u0631\u062C\u064A\u0629.",
      },
      intro: {
        en: "Giants General Contracting specializes in complete landscape and irrigation execution, while also delivering finishing, accessibility and HVAC packages through coordinated technical teams.",
        ar: "\u062A\u062A\u062E\u0635\u0635 \u0634\u0631\u0643\u0629 \u062C\u0627\u064A\u0646\u062A\u0633 \u0644\u0644\u0645\u0642\u0627\u0648\u0644\u0627\u062A \u0627\u0644\u0639\u0627\u0645\u0629 \u0641\u064A \u0627\u0644\u062A\u0646\u0641\u064A\u0630 \u0627\u0644\u0645\u062A\u0643\u0627\u0645\u0644 \u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0644\u0627\u0646\u062F\u0633\u0643\u064A\u0628 \u0648\u0634\u0628\u0643\u0627\u062A \u0627\u0644\u0631\u064A\u060C \u0625\u0644\u0649 \u062C\u0627\u0646\u0628 \u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u062A\u0634\u0637\u064A\u0628\u0627\u062A \u0648\u062D\u0644\u0648\u0644 \u0627\u0644\u0625\u062A\u0627\u062D\u0629 \u0648\u0627\u0644\u062A\u0643\u064A\u064A\u0641 \u0648\u0627\u0644\u062A\u0647\u0648\u064A\u0629 \u0645\u0646 \u062E\u0644\u0627\u0644 \u0641\u0631\u0642 \u0641\u0646\u064A\u0629 \u0645\u0646\u0633\u0642\u0629.",
      },
      detail: {
        en: "Our role starts before construction activity begins: planning the site, organizing work areas and coordinating trades so each stage moves cleanly into the next.",
        ar: "\u064A\u0628\u062F\u0623 \u062F\u0648\u0631\u0646\u0627 \u0642\u0628\u0644 \u0628\u062F\u0627\u064A\u0629 \u0627\u0644\u062A\u0646\u0641\u064A\u0630 \u0627\u0644\u0641\u0639\u0644\u064A \u0645\u0646 \u062E\u0644\u0627\u0644 \u062A\u062E\u0637\u064A\u0637 \u0627\u0644\u0645\u0648\u0642\u0639 \u0648\u062A\u0646\u0638\u064A\u0645 \u0645\u0646\u0627\u0637\u0642 \u0627\u0644\u0639\u0645\u0644 \u0648\u062A\u0646\u0633\u064A\u0642 \u0627\u0644\u0628\u0646\u0648\u062F\u060C \u0644\u0636\u0645\u0627\u0646 \u0627\u0646\u062A\u0642\u0627\u0644 \u0643\u0644 \u0645\u0631\u062D\u0644\u0629 \u0628\u0633\u0644\u0627\u0633\u0629 \u0625\u0644\u0649 \u0627\u0644\u0645\u0631\u062D\u0644\u0629 \u0627\u0644\u062A\u0627\u0644\u064A\u0629.",
      },
      process: {
        en: "How we deliver",
        ar: "\u0645\u0646\u0647\u062C\u064A\u0629 \u0627\u0644\u062A\u0646\u0641\u064A\u0630",
      },
    },
    services: {
      eyebrow: {
        en: "OUR EXPERTISE",
        ar: "\u062E\u0628\u0631\u0627\u062A\u0646\u0627",
      },
      title: {
        en: "Landscape first. Multidisciplinary by design.",
        ar: "\u0627\u0644\u0644\u0627\u0646\u062F\u0633\u0643\u064A\u0628 \u0623\u0648\u0644\u064B\u0627\u060C \u0628\u062E\u0628\u0631\u0627\u062A \u0645\u062A\u0639\u062F\u062F\u0629 \u0627\u0644\u062A\u062E\u0635\u0635\u0627\u062A.",
      },
      copy: {
        en: "Our core sector is landscape and irrigation, supported by complementary construction capabilities.",
        ar: "\u0642\u0637\u0627\u0639\u0646\u0627 \u0627\u0644\u0631\u0626\u064A\u0633\u064A \u0647\u0648 \u0627\u0644\u0644\u0627\u0646\u062F\u0633\u0643\u064A\u0628 \u0648\u0634\u0628\u0643\u0627\u062A \u0627\u0644\u0631\u064A\u060C \u0645\u062F\u0639\u0648\u0645\u064B\u0627 \u0628\u062E\u0628\u0631\u0627\u062A \u062A\u0646\u0641\u064A\u0630\u064A\u0629 \u0645\u0643\u0645\u0644\u0629.",
      },
    },
    contact: {
      eyebrow: {
        en: "START A PROJECT",
        ar: "\u0627\u0628\u062F\u0623 \u0645\u0634\u0631\u0648\u0639\u0643",
      },
      title: {
        en: "Have a site ready for the next step?",
        ar: "\u0639\u0646\u062F\u0643 \u0645\u0648\u0642\u0639 \u062C\u0627\u0647\u0632 \u0644\u0644\u062E\u0637\u0648\u0629 \u0627\u0644\u062C\u0627\u064A\u0629\u061F",
      },
      copy: {
        en: "Tell us what needs to be built, developed or maintained. We will help define the execution scope.",
        ar: "\u0627\u0628\u0639\u062A \u0644\u0646\u0627 \u0627\u0644\u0645\u0637\u0644\u0648\u0628 \u062A\u0646\u0641\u064A\u0630\u0647 \u0623\u0648 \u062A\u0637\u0648\u064A\u0631\u0647 \u0623\u0648 \u0635\u064A\u0627\u0646\u062A\u0647\u060C \u0648\u0633\u0646\u0633\u0627\u0639\u062F\u0643 \u0641\u064A \u062A\u062D\u062F\u064A\u062F \u0646\u0637\u0627\u0642 \u0627\u0644\u0623\u0639\u0645\u0627\u0644.",
      },
      email: { en: "Email us", ar: "\u0631\u0627\u0633\u0644\u0646\u0627" },
      call: {
        en: "Call us",
        ar: "\u0627\u062A\u0635\u0644 \u0628\u0646\u0627",
      },
      whatsapp: { en: "WhatsApp", ar: "\u0648\u0627\u062A\u0633\u0627\u0628" },
    },
    portfolio: {
      eyebrow: {
        en: "OUR PORTFOLIO",
        ar: "\u0633\u0627\u0628\u0642\u0629 \u0627\u0644\u0623\u0639\u0645\u0627\u0644",
      },
      title: {
        en: "Projects across our expertise.",
        ar: "\u0645\u0634\u0631\u0648\u0639\u0627\u062A \u062A\u063A\u0637\u064A \u0645\u062C\u0627\u0644\u0627\u062A \u062E\u0628\u0631\u0627\u062A\u0646\u0627.",
      },
      copy: {
        en: "Explore completed and ongoing work, with landscape and irrigation at the center of our portfolio.",
        ar: "\u0627\u0633\u062A\u0643\u0634\u0641 \u0627\u0644\u0645\u0634\u0631\u0648\u0639\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u0647\u064A\u0629 \u0648\u0627\u0644\u062C\u0627\u0631\u064A \u062A\u0646\u0641\u064A\u0630\u0647\u0627\u060C \u0645\u0639 \u0625\u0628\u0631\u0627\u0632 \u0627\u0644\u0644\u0627\u0646\u062F\u0633\u0643\u064A\u0628 \u0648\u0634\u0628\u0643\u0627\u062A \u0627\u0644\u0631\u064A \u0643\u0642\u0637\u0627\u0639\u0646\u0627 \u0627\u0644\u0631\u0626\u064A\u0633\u064A.",
      },
    },
    detail: {
      back: {
        en: "Back to projects",
        ar: "\u0627\u0644\u0639\u0648\u062F\u0629 \u0644\u0644\u0645\u0634\u0631\u0648\u0639\u0627\u062A",
      },
      overview: {
        en: "Project overview",
        ar: "\u0646\u0628\u0630\u0629 \u0639\u0646 \u0627\u0644\u0645\u0634\u0631\u0648\u0639",
      },
      scope: {
        en: "Scope of work",
        ar: "\u0646\u0637\u0627\u0642 \u0627\u0644\u0623\u0639\u0645\u0627\u0644",
      },
      status: { en: "Status", ar: "\u0627\u0644\u062D\u0627\u0644\u0629" },
      sector: { en: "Sector", ar: "\u0627\u0644\u0642\u0637\u0627\u0639" },
      location: {
        en: "Project Location",
        ar: "\u0645\u0648\u0642\u0639 \u0627\u0644\u0645\u0634\u0631\u0648\u0639",
      },
      discuss: {
        en: "Discuss a similar project",
        ar: "\u0646\u0627\u0642\u0634 \u0645\u0634\u0631\u0648\u0639\u064B\u0627 \u0645\u0634\u0627\u0628\u0647\u064B\u0627",
      },
    },
  },
  Ky = [
    {
      number: "01",
      title: {
        en: "Landscape & Irrigation",
        ar: "\u0627\u0644\u0644\u0627\u0646\u062F\u0633\u0643\u064A\u0628 \u0648\u0634\u0628\u0643\u0627\u062A \u0627\u0644\u0631\u064A",
      },
      copy: {
        en: "Site preparation, automatic irrigation, hardscape, softscape, testing, handover and maintenance.",
        ar: "\u062A\u062C\u0647\u064A\u0632 \u0627\u0644\u0645\u0648\u0642\u0639 \u0648\u0634\u0628\u0643\u0627\u062A \u0627\u0644\u0631\u064A \u0627\u0644\u0623\u0648\u062A\u0648\u0645\u0627\u062A\u064A\u0643\u064A\u0629 \u0648\u0627\u0644\u0647\u0627\u0631\u062F\u0633\u0643\u064A\u0628 \u0648\u0627\u0644\u0633\u0648\u0641\u062A \u0633\u0643\u064A\u0628 \u0648\u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A \u0648\u0627\u0644\u062A\u0633\u0644\u064A\u0645 \u0648\u0627\u0644\u0635\u064A\u0627\u0646\u0629.",
      },
      featured: !0,
    },
    {
      number: "02",
      title: {
        en: "Finishing Works",
        ar: "\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u062A\u0634\u0637\u064A\u0628\u0627\u062A",
      },
      copy: {
        en: "Coordinated interior, exterior and fa\xE7ade finishing for residential and commercial buildings.",
        ar: "\u062A\u0634\u0637\u064A\u0628\u0627\u062A \u062F\u0627\u062E\u0644\u064A\u0629 \u0648\u062E\u0627\u0631\u062C\u064A\u0629 \u0648\u0648\u0627\u062C\u0647\u0627\u062A \u0644\u0644\u0645\u0628\u0627\u0646\u064A \u0627\u0644\u0633\u0643\u0646\u064A\u0629 \u0648\u0627\u0644\u062A\u062C\u0627\u0631\u064A\u0629.",
      },
    },
    {
      number: "03",
      title: {
        en: "Accessibility Solutions",
        ar: "\u062D\u0644\u0648\u0644 \u0627\u0644\u0625\u062A\u0627\u062D\u0629",
      },
      copy: {
        en: "Adapted functional spaces and training environments built around safe, independent use.",
        ar: "\u0641\u0631\u0627\u063A\u0627\u062A \u0648\u0638\u064A\u0641\u064A\u0629 \u0648\u0628\u064A\u0626\u0627\u062A \u062A\u062F\u0631\u064A\u0628 \u0645\u0647\u064A\u0623\u0629 \u0644\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u0622\u0645\u0646 \u0648\u0627\u0644\u0645\u0633\u062A\u0642\u0644.",
      },
    },
    {
      number: "04",
      title: {
        en: "HVAC Works",
        ar: "\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u062A\u0643\u064A\u064A\u0641 \u0648\u0627\u0644\u062A\u0647\u0648\u064A\u0629",
      },
      copy: {
        en: "Mechanical ventilation, air distribution, testing and commissioning for specialized environments.",
        ar: "\u0627\u0644\u062A\u0647\u0648\u064A\u0629 \u0627\u0644\u0645\u064A\u0643\u0627\u0646\u064A\u0643\u064A\u0629 \u0648\u062A\u0648\u0632\u064A\u0639 \u0627\u0644\u0647\u0648\u0627\u0621 \u0648\u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A \u0648\u0627\u0644\u062A\u0634\u063A\u064A\u0644 \u0644\u0644\u0628\u064A\u0626\u0627\u062A \u0627\u0644\u0645\u062A\u062E\u0635\u0635\u0629.",
      },
    },
  ],
  Jy = [
    {
      number: "01",
      en: "Mobilize & plan",
      ar: "\u0627\u0644\u062A\u062C\u0647\u064A\u0632 \u0648\u0627\u0644\u062A\u062E\u0637\u064A\u0637",
    },
    {
      number: "02",
      en: "Coordinate & execute",
      ar: "\u0627\u0644\u062A\u0646\u0633\u064A\u0642 \u0648\u0627\u0644\u062A\u0646\u0641\u064A\u0630",
    },
    {
      number: "03",
      en: "Test & hand over",
      ar: "\u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u0627\u062A \u0648\u0627\u0644\u062A\u0633\u0644\u064A\u0645",
    },
    {
      number: "04",
      en: "Maintain & support",
      ar: "\u0627\u0644\u0635\u064A\u0627\u0646\u0629 \u0648\u0627\u0644\u062F\u0639\u0645",
    },
  ];
function Xf() {
  let [l, t] = (0, Ot.useState)("en");
  return (
    (0, Ot.useEffect)(() => {
      let a = window.localStorage.getItem("giants-lang");
      (a === "ar" || a === "en") && t(a);
    }, []),
    (0, Ot.useEffect)(() => {
      ((document.documentElement.lang = l),
        (document.documentElement.dir = l === "ar" ? "rtl" : "ltr"),
        window.localStorage.setItem("giants-lang", l));
    }, [l]),
    { lang: l, setLang: t }
  );
}
function Qf({ lang: l, setLang: t, active: a }) {
  let [e, u] = (0, Ot.useState)(!1),
    n = () => u(!1);
  return (0, d.jsxs)("header", {
    className: "site-header",
    children: [
      (0, d.jsx)("a", {
        className: "brand",
        href: "/",
        "aria-label": "Giants General Contracting",
        children: (0, d.jsx)("img", {
          src: "/assets/images/logo.png",
          alt: "Giants General Contracting",
        }),
      }),
      (0, d.jsxs)("button", {
        className: "menu-button",
        type: "button",
        "aria-label": "Toggle navigation",
        "aria-expanded": e,
        onClick: () => u((i) => !i),
        children: [(0, d.jsx)("span", {}), (0, d.jsx)("span", {})],
      }),
      (0, d.jsxs)("nav", {
        className: e ? "site-nav open" : "site-nav",
        children: [
          (0, d.jsx)("a", {
            className: a === "home" ? "active" : "",
            href: "/",
            onClick: n,
            children: z(M.nav.home, l),
          }),
          (0, d.jsx)("a", {
            href: "/#about",
            onClick: n,
            children: z(M.nav.about, l),
          }),
          (0, d.jsx)("a", {
            href: "/#services",
            onClick: n,
            children: z(M.nav.services, l),
          }),
          (0, d.jsx)("a", {
            className: a === "portfolio" ? "active" : "",
            href: "/portfolio",
            onClick: n,
            children: z(M.nav.portfolio, l),
          }),
          (0, d.jsx)("a", {
            href: "/#contact",
            onClick: n,
            children: z(M.nav.contact, l),
          }),
        ],
      }),
      (0, d.jsxs)("div", {
        className: "header-actions",
        children: [
          (0, d.jsx)("button", {
            className: "lang-button",
            type: "button",
            onClick: () => t(l === "en" ? "ar" : "en"),
            "aria-label": "Change language",
            children: l === "en" ? "AR" : "EN",
          }),
          (0, d.jsxs)("a", {
            className: "header-cta",
            href: "/#contact",
            children: [
              z(M.nav.quote, l),
              (0, d.jsx)("span", { children: "\u2197" }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Qv({ project: l, lang: t }) {
  return (0, d.jsx)("article", {
    className: `project-card project-${l.sector}`,
    children: (0, d.jsxs)("a", {
      href: `/projects/${l.slug}`,
      children: [
        (0, d.jsx)("img", {
          src: l.image,
          alt: z(l.title, t),
          loading: "lazy",
        }),
        (0, d.jsx)("div", { className: "project-shade" }),
        (0, d.jsxs)("div", {
          className: "project-card-topline",
          children: [
            (0, d.jsx)("span", { children: z(l.sectorLabel, t) }),
            (0, d.jsx)("span", {
              className: "project-link-arrow",
              children: "\u2197",
            }),
          ],
        }),
        (0, d.jsxs)("div", {
          className: "project-card-copy",
          children: [
            (0, d.jsx)("p", { children: z(l.status, t) }),
            (0, d.jsx)("h3", { children: z(l.title, t) }),
            (0, d.jsx)("span", { children: z(l.lead, t) }),
          ],
        }),
      ],
    }),
  });
}
function xf({ lang: l }) {
  return (0, d.jsxs)("section", {
    className: "contact-section",
    id: "contact",
    children: [
      (0, d.jsxs)("div", {
        className: "contact-copy",
        children: [
          (0, d.jsx)("span", {
            className: "eyebrow gold",
            children: z(M.contact.eyebrow, l),
          }),
          (0, d.jsx)("h2", { children: z(M.contact.title, l) }),
          (0, d.jsx)("p", { children: z(M.contact.copy, l) }),
        ],
      }),
      (0, d.jsxs)("div", {
        className: "contact-actions",
        children: [
          (0, d.jsxs)("a", {
            href: "mailto:info@giantsgc.com",
            children: [
              (0, d.jsx)("span", { children: z(M.contact.email, l) }),
              (0, d.jsx)("strong", { children: "info@giantsgc.com" }),
              (0, d.jsx)("b", { children: "\u2197" }),
            ],
          }),
          (0, d.jsxs)("a", {
            href: "tel:+201281239563",
            children: [
              (0, d.jsx)("span", { children: z(M.contact.call, l) }),
              (0, d.jsx)("strong", { children: "+20 128 123 9563" }),
              (0, d.jsx)("b", { children: "\u2197" }),
            ],
          }),
          (0, d.jsxs)("a", {
            href: "https://wa.me/201281239563",
            children: [
              (0, d.jsx)("span", { children: z(M.contact.whatsapp, l) }),
              (0, d.jsx)("strong", {
                children:
                  l === "en"
                    ? "Start a conversation"
                    : "\u0627\u0628\u062F\u0623 \u0627\u0644\u0645\u062D\u0627\u062F\u062B\u0629",
              }),
              (0, d.jsx)("b", { children: "\u2197" }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Lf({ lang: l }) {
  return (0, d.jsxs)("footer", {
    className: "site-footer",
    children: [
      (0, d.jsxs)("div", {
        className: "footer-brand",
        children: [
          (0, d.jsx)("img", {
            src: "/assets/images/logo.png",
            alt: "Giants General Contracting",
          }),
          (0, d.jsx)("p", {
            children:
              l === "en"
                ? "Complete execution. One accountable partner."
                : "\u062A\u0646\u0641\u064A\u0630 \u0645\u062A\u0643\u0627\u0645\u0644. \u0634\u0631\u064A\u0643 \u0648\u0627\u062D\u062F \u0645\u0633\u0624\u0648\u0644.",
          }),
        ],
      }),
      (0, d.jsxs)("div", {
        className: "footer-links",
        children: [
          (0, d.jsx)("a", {
            href: "/#services",
            children: z(M.nav.services, l),
          }),
          (0, d.jsx)("a", {
            href: "/portfolio",
            children: z(M.nav.portfolio, l),
          }),
          (0, d.jsx)("a", { href: "/#contact", children: z(M.nav.contact, l) }),
        ],
      }),
      (0, d.jsx)("p", {
        className: "copyright",
        children:
          "\xA9 2026 Giants General Contracting. All Rights Reserved. \u2122 Giants General Contracting",
      }),
    ],
  });
}
function Zf() {
  let { lang: l, setLang: t } = Xf(),
    a = ye.slice(0, 4);
  return (0, d.jsxs)("main", {
    children: [
      (0, d.jsx)(Qf, { lang: l, setLang: t, active: "home" }),
      (0, d.jsxs)("section", {
        className: "hero-section",
        children: [
          (0, d.jsx)("div", { className: "hero-media" }),
          (0, d.jsx)("div", { className: "hero-overlay" }),
          (0, d.jsxs)("div", {
            className: "hero-main",
            children: [
              (0, d.jsxs)("div", {
                className: "hero-copy",
                children: [
                  (0, d.jsx)("span", {
                    className: "eyebrow light",
                    children: z(M.hero.eyebrow, l),
                  }),
                  (0, d.jsxs)("h1", {
                    children: [
                      (0, d.jsx)("span", { children: z(M.hero.titleA, l) }),
                      (0, d.jsx)("em", { children: z(M.hero.titleB, l) }),
                    ],
                  }),
                  (0, d.jsx)("p", { children: z(M.hero.copy, l) }),
                  (0, d.jsxs)("div", {
                    className: "hero-actions",
                    children: [
                      (0, d.jsxs)("a", {
                        className: "button button-gold",
                        href: "/portfolio",
                        children: [
                          z(M.hero.projects, l),
                          " ",
                          (0, d.jsx)("span", { children: "\u2197" }),
                        ],
                      }),
                      (0, d.jsxs)("a", {
                        className: "text-action",
                        href: "#contact",
                        children: [
                          z(M.hero.consult, l),
                          " ",
                          (0, d.jsx)("span", { children: "\u2193" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, d.jsxs)("a", {
                className: "hero-feature",
                href: "#services",
                children: [
                  (0, d.jsx)("span", {
                    className: "mini-label",
                    children: z(M.hero.featured, l),
                  }),
                  (0, d.jsx)("strong", { children: z(M.hero.cardTitle, l) }),
                  (0, d.jsx)("p", { children: z(M.hero.cardCopy, l) }),
                  (0, d.jsxs)("b", {
                    children: [z(M.hero.view, l), " \u2192"],
                  }),
                ],
              }),
            ],
          }),
          (0, d.jsxs)("div", {
            className: "hero-rail",
            children: [
              (0, d.jsx)("span", { children: "01" }),
              (0, d.jsx)("strong", {
                children:
                  l === "en"
                    ? "Landscape"
                    : "\u0644\u0627\u0646\u062F\u0633\u0643\u064A\u0628",
              }),
              (0, d.jsx)("i", {}),
              (0, d.jsx)("span", { children: "02" }),
              (0, d.jsx)("strong", {
                children:
                  l === "en"
                    ? "Irrigation"
                    : "\u0634\u0628\u0643\u0627\u062A \u0631\u064A",
              }),
              (0, d.jsx)("i", {}),
              (0, d.jsx)("span", { children: "03" }),
              (0, d.jsx)("strong", {
                children:
                  l === "en" ? "Maintenance" : "\u0635\u064A\u0627\u0646\u0629",
              }),
            ],
          }),
        ],
      }),
      (0, d.jsxs)("section", {
        className: "section projects-preview",
        id: "projects",
        children: [
          (0, d.jsxs)("div", {
            className: "section-heading",
            children: [
              (0, d.jsxs)("div", {
                children: [
                  (0, d.jsx)("span", {
                    className: "eyebrow",
                    children: z(M.homeProjects.eyebrow, l),
                  }),
                  (0, d.jsx)("h2", { children: z(M.homeProjects.title, l) }),
                ],
              }),
              (0, d.jsx)("p", { children: z(M.homeProjects.copy, l) }),
            ],
          }),
          (0, d.jsx)("div", {
            className: "project-grid preview-grid",
            children: a.map((e) =>
              (0, d.jsx)(Qv, { project: e, lang: l }, e.slug),
            ),
          }),
          (0, d.jsxs)("a", {
            className: "section-link",
            href: "/portfolio",
            children: [
              z(M.homeProjects.all, l),
              " ",
              (0, d.jsx)("span", { children: "\u2197" }),
            ],
          }),
        ],
      }),
      (0, d.jsxs)("section", {
        className: "about-section",
        id: "about",
        children: [
          (0, d.jsxs)("div", {
            className: "about-copy",
            children: [
              (0, d.jsx)("span", {
                className: "eyebrow gold",
                children: z(M.about.eyebrow, l),
              }),
              (0, d.jsx)("h2", { children: z(M.about.title, l) }),
              (0, d.jsx)("p", {
                className: "lead",
                children: z(M.about.intro, l),
              }),
              (0, d.jsx)("p", { children: z(M.about.detail, l) }),
            ],
          }),
          (0, d.jsxs)("div", {
            className: "process-panel",
            children: [
              (0, d.jsx)("span", {
                className: "eyebrow light",
                children: z(M.about.process, l),
              }),
              Jy.map((e) =>
                (0, d.jsxs)(
                  "div",
                  {
                    className: "process-step",
                    children: [
                      (0, d.jsx)("span", { children: e.number }),
                      (0, d.jsx)("strong", { children: e[l] }),
                      (0, d.jsx)("b", { children: "\u2197" }),
                    ],
                  },
                  e.number,
                ),
              ),
            ],
          }),
        ],
      }),
      (0, d.jsxs)("section", {
        className: "section services-section",
        id: "services",
        children: [
          (0, d.jsxs)("div", {
            className: "section-heading",
            children: [
              (0, d.jsxs)("div", {
                children: [
                  (0, d.jsx)("span", {
                    className: "eyebrow",
                    children: z(M.services.eyebrow, l),
                  }),
                  (0, d.jsx)("h2", { children: z(M.services.title, l) }),
                ],
              }),
              (0, d.jsx)("p", { children: z(M.services.copy, l) }),
            ],
          }),
          (0, d.jsx)("div", {
            className: "services-grid",
            children: Ky.map((e) =>
              (0, d.jsxs)(
                "article",
                {
                  className: e.featured
                    ? "service-card featured"
                    : "service-card",
                  children: [
                    (0, d.jsx)("span", { children: e.number }),
                    (0, d.jsx)("h3", { children: z(e.title, l) }),
                    (0, d.jsx)("p", { children: z(e.copy, l) }),
                    (0, d.jsx)("a", { href: "/portfolio", children: "\u2197" }),
                  ],
                },
                e.number,
              ),
            ),
          }),
        ],
      }),
      (0, d.jsx)(xf, { lang: l }),
      (0, d.jsx)(Lf, { lang: l }),
    ],
  });
}
function xv() {
  let { lang: l, setLang: t } = Xf(),
    [a, e] = (0, Ot.useState)("all"),
    u = (0, Ot.useMemo)(
      () => (a === "all" ? ye : ye.filter((n) => n.sector === a)),
      [a],
    );
  return (0, d.jsxs)("main", {
    children: [
      (0, d.jsx)(Qf, { lang: l, setLang: t, active: "portfolio" }),
      (0, d.jsxs)("section", {
        className: "portfolio-hero",
        children: [
          (0, d.jsxs)("div", {
            className: "portfolio-hero-copy",
            children: [
              (0, d.jsx)("span", {
                className: "eyebrow light",
                children: z(M.portfolio.eyebrow, l),
              }),
              (0, d.jsx)("h1", { children: z(M.portfolio.title, l) }),
              (0, d.jsx)("p", { children: z(M.portfolio.copy, l) }),
            ],
          }),
          (0, d.jsx)("div", { className: "portfolio-hero-image" }),
        ],
      }),
      (0, d.jsxs)("section", {
        className: "section portfolio-list",
        children: [
          (0, d.jsx)("div", {
            className: "filter-row",
            role: "group",
            "aria-label": "Project filters",
            children: Object.keys(jf).map((n) =>
              (0, d.jsx)(
                "button",
                {
                  type: "button",
                  className: a === n ? "active" : "",
                  onClick: () => e(n),
                  children: z(jf[n], l),
                },
                n,
              ),
            ),
          }),
          (0, d.jsx)("div", {
            className: "project-grid portfolio-grid",
            children: u.map((n) =>
              (0, d.jsx)(Qv, { project: n, lang: l }, n.slug),
            ),
          }),
        ],
      }),
      (0, d.jsx)(xf, { lang: l }),
      (0, d.jsx)(Lf, { lang: l }),
    ],
  });
}
function Lv({ project: l }) {
  let { lang: t, setLang: a } = Xf();
  return (0, d.jsxs)("main", {
    children: [
      (0, d.jsx)(Qf, { lang: t, setLang: a, active: "portfolio" }),
      (0, d.jsxs)("section", {
        className: "detail-hero",
        children: [
          (0, d.jsx)("img", { src: l.image, alt: z(l.title, t) }),
          (0, d.jsx)("div", { className: "detail-shade" }),
          (0, d.jsxs)("div", {
            className: "detail-title",
            children: [
              (0, d.jsxs)("a", {
                href: "/portfolio",
                children: ["\u2190 ", z(M.detail.back, t)],
              }),
              (0, d.jsx)("span", {
                className: "eyebrow light",
                children: z(l.sectorLabel, t),
              }),
              (0, d.jsx)("h1", { children: z(l.title, t) }),
              (0, d.jsx)("p", { children: z(l.lead, t) }),
            ],
          }),
        ],
      }),
      (0, d.jsxs)("section", {
        className: "detail-content",
        children: [
          (0, d.jsxs)("div", {
            className: "detail-overview",
            children: [
              (0, d.jsx)("span", {
                className: "eyebrow",
                children: z(M.detail.overview, t),
              }),
              (0, d.jsx)("h2", { children: z(l.lead, t) }),
              (0, d.jsx)("p", { children: z(l.overview, t) }),
              (0, d.jsxs)("a", {
                className: "button button-navy",
                href: "/#contact",
                children: [
                  z(M.detail.discuss, t),
                  " ",
                  (0, d.jsx)("span", { children: "\u2197" }),
                ],
              }),
            ],
          }),
          (0, d.jsxs)("aside", {
            className: "project-facts",
            children: [
              (0, d.jsxs)("div", {
                children: [
                  (0, d.jsx)("span", { children: z(M.detail.status, t) }),
                  (0, d.jsx)("strong", { children: z(l.status, t) }),
                ],
              }),
              (0, d.jsxs)("div", {
                children: [
                  (0, d.jsx)("span", { children: z(M.detail.sector, t) }),
                  (0, d.jsx)("strong", { children: z(l.sectorLabel, t) }),
                ],
              }),
              (0, d.jsxs)("div", {
                children: [
                  (0, d.jsx)("span", { children: z(M.detail.location, t) }),
                  (0, d.jsx)("strong", { children: z(l.location, t) }),
                ],
              }),
            ],
          }),
        ],
      }),
      (0, d.jsxs)("section", {
        className: "scope-section",
        children: [
          (0, d.jsx)("span", {
            className: "eyebrow light",
            children: z(M.detail.scope, t),
          }),
          (0, d.jsx)("div", {
            className: "scope-list",
            children: l.scope.map((e, u) =>
              (0, d.jsxs)(
                "div",
                {
                  children: [
                    (0, d.jsx)("span", {
                      children: String(u + 1).padStart(2, "0"),
                    }),
                    (0, d.jsx)("strong", { children: z(e, t) }),
                    (0, d.jsx)("b", { children: "\u2197" }),
                  ],
                },
                e.en,
              ),
            ),
          }),
        ],
      }),
      (0, d.jsx)(xf, { lang: t }),
      (0, d.jsx)(Lf, { lang: t }),
    ],
  });
}
var Su = za(gu());
function wy() {
  let l = window.location.pathname.replace(/\/+$/, "") || "/";
  if (l.endsWith("/portfolio") || l.endsWith("/portfolio/index.html"))
    return { type: "portfolio" };
  let t = "/projects/",
    a = l.indexOf(t);
  return a !== -1
    ? {
        type: "project",
        slug: l.slice(a + t.length).replace(/\/index\.html$/, ""),
      }
    : { type: "home" };
}
var Vf = wy(),
  ru;
if (Vf.type === "portfolio")
  ((document.title = "Projects | Giants General Contracting"),
    (ru = (0, Su.jsx)(xv, {})));
else if (Vf.type === "project") {
  let l = ye.find((t) => t.slug === Vf.slug);
  l
    ? ((document.title = `${l.title.en} | Giants General Contracting`),
      (ru = (0, Su.jsx)(Lv, { project: l })))
    : (ru = (0, Su.jsx)(Zf, {}));
} else ru = (0, Su.jsx)(Zf, {});
var Vv = document.getElementById("app");
if (!Vv) throw new Error("Missing app root");
(0, Zv.createRoot)(Vv).render(ru);
/*! Bundled license information:

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.js:
  (**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
