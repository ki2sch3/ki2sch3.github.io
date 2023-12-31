function mf(e, t) {
	for (var n = 0; n < t.length; n++) {
		const r = t[n]
		if (typeof r != 'string' && !Array.isArray(r)) {
			for (const i in r)
				if (i !== 'default' && !(i in e)) {
					const l = Object.getOwnPropertyDescriptor(r, i)
					l && Object.defineProperty(e, i, l.get ? l : { enumerable: !0, get: () => r[i] })
				}
		}
	}
	return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }))
}
;(function () {
	const t = document.createElement('link').relList
	if (t && t.supports && t.supports('modulepreload')) return
	for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i)
	new MutationObserver((i) => {
		for (const l of i)
			if (l.type === 'childList')
				for (const o of l.addedNodes) o.tagName === 'LINK' && o.rel === 'modulepreload' && r(o)
	}).observe(document, { childList: !0, subtree: !0 })
	function n(i) {
		const l = {}
		return (
			i.integrity && (l.integrity = i.integrity),
			i.referrerPolicy && (l.referrerPolicy = i.referrerPolicy),
			i.crossOrigin === 'use-credentials'
				? (l.credentials = 'include')
				: i.crossOrigin === 'anonymous'
				? (l.credentials = 'omit')
				: (l.credentials = 'same-origin'),
			l
		)
	}
	function r(i) {
		if (i.ep) return
		i.ep = !0
		const l = n(i)
		fetch(i.href, l)
	}
})()
function Xo(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e
}
var gf = { exports: {} },
	Qo = {},
	vf = { exports: {} },
	le = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wl = Symbol.for('react.element'),
	jm = Symbol.for('react.portal'),
	Om = Symbol.for('react.fragment'),
	Mm = Symbol.for('react.strict_mode'),
	Im = Symbol.for('react.profiler'),
	Am = Symbol.for('react.provider'),
	Dm = Symbol.for('react.context'),
	zm = Symbol.for('react.forward_ref'),
	Fm = Symbol.for('react.suspense'),
	$m = Symbol.for('react.memo'),
	Bm = Symbol.for('react.lazy'),
	fc = Symbol.iterator
function Um(e) {
	return e === null || typeof e != 'object'
		? null
		: ((e = (fc && e[fc]) || e['@@iterator']), typeof e == 'function' ? e : null)
}
var yf = {
		isMounted: function () {
			return !1
		},
		enqueueForceUpdate: function () {},
		enqueueReplaceState: function () {},
		enqueueSetState: function () {},
	},
	wf = Object.assign,
	xf = {}
function gi(e, t, n) {
	;(this.props = e), (this.context = t), (this.refs = xf), (this.updater = n || yf)
}
gi.prototype.isReactComponent = {}
gi.prototype.setState = function (e, t) {
	if (typeof e != 'object' && typeof e != 'function' && e != null)
		throw Error(
			'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
		)
	this.updater.enqueueSetState(this, e, t, 'setState')
}
gi.prototype.forceUpdate = function (e) {
	this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
}
function Sf() {}
Sf.prototype = gi.prototype
function lu(e, t, n) {
	;(this.props = e), (this.context = t), (this.refs = xf), (this.updater = n || yf)
}
var ou = (lu.prototype = new Sf())
ou.constructor = lu
wf(ou, gi.prototype)
ou.isPureReactComponent = !0
var pc = Array.isArray,
	Ef = Object.prototype.hasOwnProperty,
	su = { current: null },
	Cf = { key: !0, ref: !0, __self: !0, __source: !0 }
function Tf(e, t, n) {
	var r,
		i = {},
		l = null,
		o = null
	if (t != null)
		for (r in (t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (l = '' + t.key), t))
			Ef.call(t, r) && !Cf.hasOwnProperty(r) && (i[r] = t[r])
	var a = arguments.length - 2
	if (a === 1) i.children = n
	else if (1 < a) {
		for (var s = Array(a), u = 0; u < a; u++) s[u] = arguments[u + 2]
		i.children = s
	}
	if (e && e.defaultProps) for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r])
	return { $$typeof: wl, type: e, key: l, ref: o, props: i, _owner: su.current }
}
function Vm(e, t) {
	return { $$typeof: wl, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner }
}
function au(e) {
	return typeof e == 'object' && e !== null && e.$$typeof === wl
}
function Hm(e) {
	var t = { '=': '=0', ':': '=2' }
	return (
		'$' +
		e.replace(/[=:]/g, function (n) {
			return t[n]
		})
	)
}
var hc = /\/+/g
function vs(e, t) {
	return typeof e == 'object' && e !== null && e.key != null ? Hm('' + e.key) : t.toString(36)
}
function ql(e, t, n, r, i) {
	var l = typeof e
	;(l === 'undefined' || l === 'boolean') && (e = null)
	var o = !1
	if (e === null) o = !0
	else
		switch (l) {
			case 'string':
			case 'number':
				o = !0
				break
			case 'object':
				switch (e.$$typeof) {
					case wl:
					case jm:
						o = !0
				}
		}
	if (o)
		return (
			(o = e),
			(i = i(o)),
			(e = r === '' ? '.' + vs(o, 0) : r),
			pc(i)
				? ((n = ''),
				  e != null && (n = e.replace(hc, '$&/') + '/'),
				  ql(i, t, n, '', function (u) {
						return u
				  }))
				: i != null &&
				  (au(i) &&
						(i = Vm(i, n + (!i.key || (o && o.key === i.key) ? '' : ('' + i.key).replace(hc, '$&/') + '/') + e)),
				  t.push(i)),
			1
		)
	if (((o = 0), (r = r === '' ? '.' : r + ':'), pc(e)))
		for (var a = 0; a < e.length; a++) {
			l = e[a]
			var s = r + vs(l, a)
			o += ql(l, t, n, s, i)
		}
	else if (((s = Um(e)), typeof s == 'function'))
		for (e = s.call(e), a = 0; !(l = e.next()).done; ) (l = l.value), (s = r + vs(l, a++)), (o += ql(l, t, n, s, i))
	else if (l === 'object')
		throw (
			((t = String(e)),
			Error(
				'Objects are not valid as a React child (found: ' +
					(t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) +
					'). If you meant to render a collection of children, use an array instead.'
			))
		)
	return o
}
function Nl(e, t, n) {
	if (e == null) return e
	var r = [],
		i = 0
	return (
		ql(e, r, '', '', function (l) {
			return t.call(n, l, i++)
		}),
		r
	)
}
function Wm(e) {
	if (e._status === -1) {
		var t = e._result
		;(t = t()),
			t.then(
				function (n) {
					;(e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n))
				},
				function (n) {
					;(e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n))
				}
			),
			e._status === -1 && ((e._status = 0), (e._result = t))
	}
	if (e._status === 1) return e._result.default
	throw e._result
}
var rt = { current: null },
	Jl = { transition: null },
	Gm = { ReactCurrentDispatcher: rt, ReactCurrentBatchConfig: Jl, ReactCurrentOwner: su }
le.Children = {
	map: Nl,
	forEach: function (e, t, n) {
		Nl(
			e,
			function () {
				t.apply(this, arguments)
			},
			n
		)
	},
	count: function (e) {
		var t = 0
		return (
			Nl(e, function () {
				t++
			}),
			t
		)
	},
	toArray: function (e) {
		return (
			Nl(e, function (t) {
				return t
			}) || []
		)
	},
	only: function (e) {
		if (!au(e)) throw Error('React.Children.only expected to receive a single React element child.')
		return e
	},
}
le.Component = gi
le.Fragment = Om
le.Profiler = Im
le.PureComponent = lu
le.StrictMode = Mm
le.Suspense = Fm
le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gm
le.cloneElement = function (e, t, n) {
	if (e == null) throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.')
	var r = wf({}, e.props),
		i = e.key,
		l = e.ref,
		o = e._owner
	if (t != null) {
		if (
			(t.ref !== void 0 && ((l = t.ref), (o = su.current)),
			t.key !== void 0 && (i = '' + t.key),
			e.type && e.type.defaultProps)
		)
			var a = e.type.defaultProps
		for (s in t) Ef.call(t, s) && !Cf.hasOwnProperty(s) && (r[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s])
	}
	var s = arguments.length - 2
	if (s === 1) r.children = n
	else if (1 < s) {
		a = Array(s)
		for (var u = 0; u < s; u++) a[u] = arguments[u + 2]
		r.children = a
	}
	return { $$typeof: wl, type: e.type, key: i, ref: l, props: r, _owner: o }
}
le.createContext = function (e) {
	return (
		(e = {
			$$typeof: Dm,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null,
			_defaultValue: null,
			_globalName: null,
		}),
		(e.Provider = { $$typeof: Am, _context: e }),
		(e.Consumer = e)
	)
}
le.createElement = Tf
le.createFactory = function (e) {
	var t = Tf.bind(null, e)
	return (t.type = e), t
}
le.createRef = function () {
	return { current: null }
}
le.forwardRef = function (e) {
	return { $$typeof: zm, render: e }
}
le.isValidElement = au
le.lazy = function (e) {
	return { $$typeof: Bm, _payload: { _status: -1, _result: e }, _init: Wm }
}
le.memo = function (e, t) {
	return { $$typeof: $m, type: e, compare: t === void 0 ? null : t }
}
le.startTransition = function (e) {
	var t = Jl.transition
	Jl.transition = {}
	try {
		e()
	} finally {
		Jl.transition = t
	}
}
le.unstable_act = function () {
	throw Error('act(...) is not supported in production builds of React.')
}
le.useCallback = function (e, t) {
	return rt.current.useCallback(e, t)
}
le.useContext = function (e) {
	return rt.current.useContext(e)
}
le.useDebugValue = function () {}
le.useDeferredValue = function (e) {
	return rt.current.useDeferredValue(e)
}
le.useEffect = function (e, t) {
	return rt.current.useEffect(e, t)
}
le.useId = function () {
	return rt.current.useId()
}
le.useImperativeHandle = function (e, t, n) {
	return rt.current.useImperativeHandle(e, t, n)
}
le.useInsertionEffect = function (e, t) {
	return rt.current.useInsertionEffect(e, t)
}
le.useLayoutEffect = function (e, t) {
	return rt.current.useLayoutEffect(e, t)
}
le.useMemo = function (e, t) {
	return rt.current.useMemo(e, t)
}
le.useReducer = function (e, t, n) {
	return rt.current.useReducer(e, t, n)
}
le.useRef = function (e) {
	return rt.current.useRef(e)
}
le.useState = function (e) {
	return rt.current.useState(e)
}
le.useSyncExternalStore = function (e, t, n) {
	return rt.current.useSyncExternalStore(e, t, n)
}
le.useTransition = function () {
	return rt.current.useTransition()
}
le.version = '18.2.0'
vf.exports = le
var P = vf.exports
const q = Xo(P),
	Ym = mf({ __proto__: null, default: q }, [P])
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Km = P,
	Xm = Symbol.for('react.element'),
	Qm = Symbol.for('react.fragment'),
	qm = Object.prototype.hasOwnProperty,
	Jm = Km.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	Zm = { key: !0, ref: !0, __self: !0, __source: !0 }
function kf(e, t, n) {
	var r,
		i = {},
		l = null,
		o = null
	n !== void 0 && (l = '' + n), t.key !== void 0 && (l = '' + t.key), t.ref !== void 0 && (o = t.ref)
	for (r in t) qm.call(t, r) && !Zm.hasOwnProperty(r) && (i[r] = t[r])
	if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r])
	return { $$typeof: Xm, type: e, key: l, ref: o, props: i, _owner: Jm.current }
}
Qo.Fragment = Qm
Qo.jsx = kf
Qo.jsxs = kf
gf.exports = Qo
var x = gf.exports,
	ea = {},
	Pf = { exports: {} },
	wt = {},
	_f = { exports: {} },
	bf = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (e) {
	function t(D, z) {
		var V = D.length
		D.push(z)
		e: for (; 0 < V; ) {
			var ee = (V - 1) >>> 1,
				re = D[ee]
			if (0 < i(re, z)) (D[ee] = z), (D[V] = re), (V = ee)
			else break e
		}
	}
	function n(D) {
		return D.length === 0 ? null : D[0]
	}
	function r(D) {
		if (D.length === 0) return null
		var z = D[0],
			V = D.pop()
		if (V !== z) {
			D[0] = V
			e: for (var ee = 0, re = D.length, Ne = re >>> 1; ee < Ne; ) {
				var xe = 2 * (ee + 1) - 1,
					Me = D[xe],
					oe = xe + 1,
					ae = D[oe]
				if (0 > i(Me, V))
					oe < re && 0 > i(ae, Me) ? ((D[ee] = ae), (D[oe] = V), (ee = oe)) : ((D[ee] = Me), (D[xe] = V), (ee = xe))
				else if (oe < re && 0 > i(ae, V)) (D[ee] = ae), (D[oe] = V), (ee = oe)
				else break e
			}
		}
		return z
	}
	function i(D, z) {
		var V = D.sortIndex - z.sortIndex
		return V !== 0 ? V : D.id - z.id
	}
	if (typeof performance == 'object' && typeof performance.now == 'function') {
		var l = performance
		e.unstable_now = function () {
			return l.now()
		}
	} else {
		var o = Date,
			a = o.now()
		e.unstable_now = function () {
			return o.now() - a
		}
	}
	var s = [],
		u = [],
		c = 1,
		p = null,
		m = 3,
		g = !1,
		y = !1,
		v = !1,
		E = typeof setTimeout == 'function' ? setTimeout : null,
		h = typeof clearTimeout == 'function' ? clearTimeout : null,
		d = typeof setImmediate < 'u' ? setImmediate : null
	typeof navigator < 'u' &&
		navigator.scheduling !== void 0 &&
		navigator.scheduling.isInputPending !== void 0 &&
		navigator.scheduling.isInputPending.bind(navigator.scheduling)
	function f(D) {
		for (var z = n(u); z !== null; ) {
			if (z.callback === null) r(u)
			else if (z.startTime <= D) r(u), (z.sortIndex = z.expirationTime), t(s, z)
			else break
			z = n(u)
		}
	}
	function w(D) {
		if (((v = !1), f(D), !y))
			if (n(s) !== null) (y = !0), Y(C)
			else {
				var z = n(u)
				z !== null && X(w, z.startTime - D)
			}
	}
	function C(D, z) {
		;(y = !1), v && ((v = !1), h(N), (N = -1)), (g = !0)
		var V = m
		try {
			for (f(z), p = n(s); p !== null && (!(p.expirationTime > z) || (D && !j())); ) {
				var ee = p.callback
				if (typeof ee == 'function') {
					;(p.callback = null), (m = p.priorityLevel)
					var re = ee(p.expirationTime <= z)
					;(z = e.unstable_now()), typeof re == 'function' ? (p.callback = re) : p === n(s) && r(s), f(z)
				} else r(s)
				p = n(s)
			}
			if (p !== null) var Ne = !0
			else {
				var xe = n(u)
				xe !== null && X(w, xe.startTime - z), (Ne = !1)
			}
			return Ne
		} finally {
			;(p = null), (m = V), (g = !1)
		}
	}
	var S = !1,
		b = null,
		N = -1,
		_ = 5,
		L = -1
	function j() {
		return !(e.unstable_now() - L < _)
	}
	function I() {
		if (b !== null) {
			var D = e.unstable_now()
			L = D
			var z = !0
			try {
				z = b(!0, D)
			} finally {
				z ? O() : ((S = !1), (b = null))
			}
		} else S = !1
	}
	var O
	if (typeof d == 'function')
		O = function () {
			d(I)
		}
	else if (typeof MessageChannel < 'u') {
		var F = new MessageChannel(),
			H = F.port2
		;(F.port1.onmessage = I),
			(O = function () {
				H.postMessage(null)
			})
	} else
		O = function () {
			E(I, 0)
		}
	function Y(D) {
		;(b = D), S || ((S = !0), O())
	}
	function X(D, z) {
		N = E(function () {
			D(e.unstable_now())
		}, z)
	}
	;(e.unstable_IdlePriority = 5),
		(e.unstable_ImmediatePriority = 1),
		(e.unstable_LowPriority = 4),
		(e.unstable_NormalPriority = 3),
		(e.unstable_Profiling = null),
		(e.unstable_UserBlockingPriority = 2),
		(e.unstable_cancelCallback = function (D) {
			D.callback = null
		}),
		(e.unstable_continueExecution = function () {
			y || g || ((y = !0), Y(C))
		}),
		(e.unstable_forceFrameRate = function (D) {
			0 > D || 125 < D
				? console.error(
						'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
				  )
				: (_ = 0 < D ? Math.floor(1e3 / D) : 5)
		}),
		(e.unstable_getCurrentPriorityLevel = function () {
			return m
		}),
		(e.unstable_getFirstCallbackNode = function () {
			return n(s)
		}),
		(e.unstable_next = function (D) {
			switch (m) {
				case 1:
				case 2:
				case 3:
					var z = 3
					break
				default:
					z = m
			}
			var V = m
			m = z
			try {
				return D()
			} finally {
				m = V
			}
		}),
		(e.unstable_pauseExecution = function () {}),
		(e.unstable_requestPaint = function () {}),
		(e.unstable_runWithPriority = function (D, z) {
			switch (D) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					break
				default:
					D = 3
			}
			var V = m
			m = D
			try {
				return z()
			} finally {
				m = V
			}
		}),
		(e.unstable_scheduleCallback = function (D, z, V) {
			var ee = e.unstable_now()
			switch (
				(typeof V == 'object' && V !== null
					? ((V = V.delay), (V = typeof V == 'number' && 0 < V ? ee + V : ee))
					: (V = ee),
				D)
			) {
				case 1:
					var re = -1
					break
				case 2:
					re = 250
					break
				case 5:
					re = 1073741823
					break
				case 4:
					re = 1e4
					break
				default:
					re = 5e3
			}
			return (
				(re = V + re),
				(D = { id: c++, callback: z, priorityLevel: D, startTime: V, expirationTime: re, sortIndex: -1 }),
				V > ee
					? ((D.sortIndex = V), t(u, D), n(s) === null && D === n(u) && (v ? (h(N), (N = -1)) : (v = !0), X(w, V - ee)))
					: ((D.sortIndex = re), t(s, D), y || g || ((y = !0), Y(C))),
				D
			)
		}),
		(e.unstable_shouldYield = j),
		(e.unstable_wrapCallback = function (D) {
			var z = m
			return function () {
				var V = m
				m = z
				try {
					return D.apply(this, arguments)
				} finally {
					m = V
				}
			}
		})
})(bf)
_f.exports = bf
var eg = _f.exports
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Lf = P,
	yt = eg
function $(e) {
	for (var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1; n < arguments.length; n++)
		t += '&args[]=' + encodeURIComponent(arguments[n])
	return (
		'Minified React error #' +
		e +
		'; visit ' +
		t +
		' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
	)
}
var Nf = new Set(),
	qi = {}
function Lr(e, t) {
	si(e, t), si(e + 'Capture', t)
}
function si(e, t) {
	for (qi[e] = t, e = 0; e < t.length; e++) Nf.add(t[e])
}
var wn = !(typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u'),
	ta = Object.prototype.hasOwnProperty,
	tg =
		/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	mc = {},
	gc = {}
function ng(e) {
	return ta.call(gc, e) ? !0 : ta.call(mc, e) ? !1 : tg.test(e) ? (gc[e] = !0) : ((mc[e] = !0), !1)
}
function rg(e, t, n, r) {
	if (n !== null && n.type === 0) return !1
	switch (typeof t) {
		case 'function':
		case 'symbol':
			return !0
		case 'boolean':
			return r
				? !1
				: n !== null
				? !n.acceptsBooleans
				: ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-')
		default:
			return !1
	}
}
function ig(e, t, n, r) {
	if (t === null || typeof t > 'u' || rg(e, t, n, r)) return !0
	if (r) return !1
	if (n !== null)
		switch (n.type) {
			case 3:
				return !t
			case 4:
				return t === !1
			case 5:
				return isNaN(t)
			case 6:
				return isNaN(t) || 1 > t
		}
	return !1
}
function it(e, t, n, r, i, l, o) {
	;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
		(this.attributeName = r),
		(this.attributeNamespace = i),
		(this.mustUseProperty = n),
		(this.propertyName = e),
		(this.type = t),
		(this.sanitizeURL = l),
		(this.removeEmptyString = o)
}
var We = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
	.split(' ')
	.forEach(function (e) {
		We[e] = new it(e, 0, !1, e, null, !1, !1)
	})
;[
	['acceptCharset', 'accept-charset'],
	['className', 'class'],
	['htmlFor', 'for'],
	['httpEquiv', 'http-equiv'],
].forEach(function (e) {
	var t = e[0]
	We[t] = new it(t, 1, !1, e[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
	We[e] = new it(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
	We[e] = new it(e, 2, !1, e, null, !1, !1)
})
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
	.split(' ')
	.forEach(function (e) {
		We[e] = new it(e, 3, !1, e.toLowerCase(), null, !1, !1)
	})
;['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
	We[e] = new it(e, 3, !0, e, null, !1, !1)
})
;['capture', 'download'].forEach(function (e) {
	We[e] = new it(e, 4, !1, e, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach(function (e) {
	We[e] = new it(e, 6, !1, e, null, !1, !1)
})
;['rowSpan', 'start'].forEach(function (e) {
	We[e] = new it(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var uu = /[\-:]([a-z])/g
function cu(e) {
	return e[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
	.split(' ')
	.forEach(function (e) {
		var t = e.replace(uu, cu)
		We[t] = new it(t, 1, !1, e, null, !1, !1)
	})
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
	var t = e.replace(uu, cu)
	We[t] = new it(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
})
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
	var t = e.replace(uu, cu)
	We[t] = new it(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach(function (e) {
	We[e] = new it(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
We.xlinkHref = new it('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)
;['src', 'href', 'action', 'formAction'].forEach(function (e) {
	We[e] = new it(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function du(e, t, n, r) {
	var i = We.hasOwnProperty(t) ? We[t] : null
	;(i !== null
		? i.type !== 0
		: r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
		(ig(t, n, i, r) && (n = null),
		r || i === null
			? ng(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
			: i.mustUseProperty
			? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : '') : n)
			: ((t = i.attributeName),
			  (r = i.attributeNamespace),
			  n === null
					? e.removeAttribute(t)
					: ((i = i.type),
					  (n = i === 3 || (i === 4 && n === !0) ? '' : '' + n),
					  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Tn = Lf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	Rl = Symbol.for('react.element'),
	Fr = Symbol.for('react.portal'),
	$r = Symbol.for('react.fragment'),
	fu = Symbol.for('react.strict_mode'),
	na = Symbol.for('react.profiler'),
	Rf = Symbol.for('react.provider'),
	jf = Symbol.for('react.context'),
	pu = Symbol.for('react.forward_ref'),
	ra = Symbol.for('react.suspense'),
	ia = Symbol.for('react.suspense_list'),
	hu = Symbol.for('react.memo'),
	An = Symbol.for('react.lazy'),
	Of = Symbol.for('react.offscreen'),
	vc = Symbol.iterator
function Si(e) {
	return e === null || typeof e != 'object'
		? null
		: ((e = (vc && e[vc]) || e['@@iterator']), typeof e == 'function' ? e : null)
}
var Ce = Object.assign,
	ys
function Ii(e) {
	if (ys === void 0)
		try {
			throw Error()
		} catch (n) {
			var t = n.stack.trim().match(/\n( *(at )?)/)
			ys = (t && t[1]) || ''
		}
	return (
		`
` +
		ys +
		e
	)
}
var ws = !1
function xs(e, t) {
	if (!e || ws) return ''
	ws = !0
	var n = Error.prepareStackTrace
	Error.prepareStackTrace = void 0
	try {
		if (t)
			if (
				((t = function () {
					throw Error()
				}),
				Object.defineProperty(t.prototype, 'props', {
					set: function () {
						throw Error()
					},
				}),
				typeof Reflect == 'object' && Reflect.construct)
			) {
				try {
					Reflect.construct(t, [])
				} catch (u) {
					var r = u
				}
				Reflect.construct(e, [], t)
			} else {
				try {
					t.call()
				} catch (u) {
					r = u
				}
				e.call(t.prototype)
			}
		else {
			try {
				throw Error()
			} catch (u) {
				r = u
			}
			e()
		}
	} catch (u) {
		if (u && r && typeof u.stack == 'string') {
			for (
				var i = u.stack.split(`
`),
					l = r.stack.split(`
`),
					o = i.length - 1,
					a = l.length - 1;
				1 <= o && 0 <= a && i[o] !== l[a];

			)
				a--
			for (; 1 <= o && 0 <= a; o--, a--)
				if (i[o] !== l[a]) {
					if (o !== 1 || a !== 1)
						do
							if ((o--, a--, 0 > a || i[o] !== l[a])) {
								var s =
									`
` + i[o].replace(' at new ', ' at ')
								return e.displayName && s.includes('<anonymous>') && (s = s.replace('<anonymous>', e.displayName)), s
							}
						while (1 <= o && 0 <= a)
					break
				}
		}
	} finally {
		;(ws = !1), (Error.prepareStackTrace = n)
	}
	return (e = e ? e.displayName || e.name : '') ? Ii(e) : ''
}
function lg(e) {
	switch (e.tag) {
		case 5:
			return Ii(e.type)
		case 16:
			return Ii('Lazy')
		case 13:
			return Ii('Suspense')
		case 19:
			return Ii('SuspenseList')
		case 0:
		case 2:
		case 15:
			return (e = xs(e.type, !1)), e
		case 11:
			return (e = xs(e.type.render, !1)), e
		case 1:
			return (e = xs(e.type, !0)), e
		default:
			return ''
	}
}
function la(e) {
	if (e == null) return null
	if (typeof e == 'function') return e.displayName || e.name || null
	if (typeof e == 'string') return e
	switch (e) {
		case $r:
			return 'Fragment'
		case Fr:
			return 'Portal'
		case na:
			return 'Profiler'
		case fu:
			return 'StrictMode'
		case ra:
			return 'Suspense'
		case ia:
			return 'SuspenseList'
	}
	if (typeof e == 'object')
		switch (e.$$typeof) {
			case jf:
				return (e.displayName || 'Context') + '.Consumer'
			case Rf:
				return (e._context.displayName || 'Context') + '.Provider'
			case pu:
				var t = e.render
				return (
					(e = e.displayName),
					e || ((e = t.displayName || t.name || ''), (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
					e
				)
			case hu:
				return (t = e.displayName || null), t !== null ? t : la(e.type) || 'Memo'
			case An:
				;(t = e._payload), (e = e._init)
				try {
					return la(e(t))
				} catch {}
		}
	return null
}
function og(e) {
	var t = e.type
	switch (e.tag) {
		case 24:
			return 'Cache'
		case 9:
			return (t.displayName || 'Context') + '.Consumer'
		case 10:
			return (t._context.displayName || 'Context') + '.Provider'
		case 18:
			return 'DehydratedFragment'
		case 11:
			return (
				(e = t.render),
				(e = e.displayName || e.name || ''),
				t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
			)
		case 7:
			return 'Fragment'
		case 5:
			return t
		case 4:
			return 'Portal'
		case 3:
			return 'Root'
		case 6:
			return 'Text'
		case 16:
			return la(t)
		case 8:
			return t === fu ? 'StrictMode' : 'Mode'
		case 22:
			return 'Offscreen'
		case 12:
			return 'Profiler'
		case 21:
			return 'Scope'
		case 13:
			return 'Suspense'
		case 19:
			return 'SuspenseList'
		case 25:
			return 'TracingMarker'
		case 1:
		case 0:
		case 17:
		case 2:
		case 14:
		case 15:
			if (typeof t == 'function') return t.displayName || t.name || null
			if (typeof t == 'string') return t
	}
	return null
}
function Jn(e) {
	switch (typeof e) {
		case 'boolean':
		case 'number':
		case 'string':
		case 'undefined':
			return e
		case 'object':
			return e
		default:
			return ''
	}
}
function Mf(e) {
	var t = e.type
	return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio')
}
function sg(e) {
	var t = Mf(e) ? 'checked' : 'value',
		n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
		r = '' + e[t]
	if (!e.hasOwnProperty(t) && typeof n < 'u' && typeof n.get == 'function' && typeof n.set == 'function') {
		var i = n.get,
			l = n.set
		return (
			Object.defineProperty(e, t, {
				configurable: !0,
				get: function () {
					return i.call(this)
				},
				set: function (o) {
					;(r = '' + o), l.call(this, o)
				},
			}),
			Object.defineProperty(e, t, { enumerable: n.enumerable }),
			{
				getValue: function () {
					return r
				},
				setValue: function (o) {
					r = '' + o
				},
				stopTracking: function () {
					;(e._valueTracker = null), delete e[t]
				},
			}
		)
	}
}
function jl(e) {
	e._valueTracker || (e._valueTracker = sg(e))
}
function If(e) {
	if (!e) return !1
	var t = e._valueTracker
	if (!t) return !0
	var n = t.getValue(),
		r = ''
	return e && (r = Mf(e) ? (e.checked ? 'true' : 'false') : e.value), (e = r), e !== n ? (t.setValue(e), !0) : !1
}
function mo(e) {
	if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null
	try {
		return e.activeElement || e.body
	} catch {
		return e.body
	}
}
function oa(e, t) {
	var n = t.checked
	return Ce({}, t, {
		defaultChecked: void 0,
		defaultValue: void 0,
		value: void 0,
		checked: n ?? e._wrapperState.initialChecked,
	})
}
function yc(e, t) {
	var n = t.defaultValue == null ? '' : t.defaultValue,
		r = t.checked != null ? t.checked : t.defaultChecked
	;(n = Jn(t.value != null ? t.value : n)),
		(e._wrapperState = {
			initialChecked: r,
			initialValue: n,
			controlled: t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
		})
}
function Af(e, t) {
	;(t = t.checked), t != null && du(e, 'checked', t, !1)
}
function sa(e, t) {
	Af(e, t)
	var n = Jn(t.value),
		r = t.type
	if (n != null)
		r === 'number'
			? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
			: e.value !== '' + n && (e.value = '' + n)
	else if (r === 'submit' || r === 'reset') {
		e.removeAttribute('value')
		return
	}
	t.hasOwnProperty('value') ? aa(e, t.type, n) : t.hasOwnProperty('defaultValue') && aa(e, t.type, Jn(t.defaultValue)),
		t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function wc(e, t, n) {
	if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
		var r = t.type
		if (!((r !== 'submit' && r !== 'reset') || (t.value !== void 0 && t.value !== null))) return
		;(t = '' + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t)
	}
	;(n = e.name),
		n !== '' && (e.name = ''),
		(e.defaultChecked = !!e._wrapperState.initialChecked),
		n !== '' && (e.name = n)
}
function aa(e, t, n) {
	;(t !== 'number' || mo(e.ownerDocument) !== e) &&
		(n == null
			? (e.defaultValue = '' + e._wrapperState.initialValue)
			: e.defaultValue !== '' + n && (e.defaultValue = '' + n))
}
var Ai = Array.isArray
function Zr(e, t, n, r) {
	if (((e = e.options), t)) {
		t = {}
		for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0
		for (n = 0; n < e.length; n++)
			(i = t.hasOwnProperty('$' + e[n].value)),
				e[n].selected !== i && (e[n].selected = i),
				i && r && (e[n].defaultSelected = !0)
	} else {
		for (n = '' + Jn(n), t = null, i = 0; i < e.length; i++) {
			if (e[i].value === n) {
				;(e[i].selected = !0), r && (e[i].defaultSelected = !0)
				return
			}
			t !== null || e[i].disabled || (t = e[i])
		}
		t !== null && (t.selected = !0)
	}
}
function ua(e, t) {
	if (t.dangerouslySetInnerHTML != null) throw Error($(91))
	return Ce({}, t, { value: void 0, defaultValue: void 0, children: '' + e._wrapperState.initialValue })
}
function xc(e, t) {
	var n = t.value
	if (n == null) {
		if (((n = t.children), (t = t.defaultValue), n != null)) {
			if (t != null) throw Error($(92))
			if (Ai(n)) {
				if (1 < n.length) throw Error($(93))
				n = n[0]
			}
			t = n
		}
		t == null && (t = ''), (n = t)
	}
	e._wrapperState = { initialValue: Jn(n) }
}
function Df(e, t) {
	var n = Jn(t.value),
		r = Jn(t.defaultValue)
	n != null &&
		((n = '' + n),
		n !== e.value && (e.value = n),
		t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
		r != null && (e.defaultValue = '' + r)
}
function Sc(e) {
	var t = e.textContent
	t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t)
}
function zf(e) {
	switch (e) {
		case 'svg':
			return 'http://www.w3.org/2000/svg'
		case 'math':
			return 'http://www.w3.org/1998/Math/MathML'
		default:
			return 'http://www.w3.org/1999/xhtml'
	}
}
function ca(e, t) {
	return e == null || e === 'http://www.w3.org/1999/xhtml'
		? zf(t)
		: e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
		? 'http://www.w3.org/1999/xhtml'
		: e
}
var Ol,
	Ff = (function (e) {
		return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
			? function (t, n, r, i) {
					MSApp.execUnsafeLocalFunction(function () {
						return e(t, n, r, i)
					})
			  }
			: e
	})(function (e, t) {
		if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e) e.innerHTML = t
		else {
			for (
				Ol = Ol || document.createElement('div'),
					Ol.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
					t = Ol.firstChild;
				e.firstChild;

			)
				e.removeChild(e.firstChild)
			for (; t.firstChild; ) e.appendChild(t.firstChild)
		}
	})
function Ji(e, t) {
	if (t) {
		var n = e.firstChild
		if (n && n === e.lastChild && n.nodeType === 3) {
			n.nodeValue = t
			return
		}
	}
	e.textContent = t
}
var $i = {
		animationIterationCount: !0,
		aspectRatio: !0,
		borderImageOutset: !0,
		borderImageSlice: !0,
		borderImageWidth: !0,
		boxFlex: !0,
		boxFlexGroup: !0,
		boxOrdinalGroup: !0,
		columnCount: !0,
		columns: !0,
		flex: !0,
		flexGrow: !0,
		flexPositive: !0,
		flexShrink: !0,
		flexNegative: !0,
		flexOrder: !0,
		gridArea: !0,
		gridRow: !0,
		gridRowEnd: !0,
		gridRowSpan: !0,
		gridRowStart: !0,
		gridColumn: !0,
		gridColumnEnd: !0,
		gridColumnSpan: !0,
		gridColumnStart: !0,
		fontWeight: !0,
		lineClamp: !0,
		lineHeight: !0,
		opacity: !0,
		order: !0,
		orphans: !0,
		tabSize: !0,
		widows: !0,
		zIndex: !0,
		zoom: !0,
		fillOpacity: !0,
		floodOpacity: !0,
		stopOpacity: !0,
		strokeDasharray: !0,
		strokeDashoffset: !0,
		strokeMiterlimit: !0,
		strokeOpacity: !0,
		strokeWidth: !0,
	},
	ag = ['Webkit', 'ms', 'Moz', 'O']
Object.keys($i).forEach(function (e) {
	ag.forEach(function (t) {
		;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), ($i[t] = $i[e])
	})
})
function $f(e, t, n) {
	return t == null || typeof t == 'boolean' || t === ''
		? ''
		: n || typeof t != 'number' || t === 0 || ($i.hasOwnProperty(e) && $i[e])
		? ('' + t).trim()
		: t + 'px'
}
function Bf(e, t) {
	e = e.style
	for (var n in t)
		if (t.hasOwnProperty(n)) {
			var r = n.indexOf('--') === 0,
				i = $f(n, t[n], r)
			n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, i) : (e[n] = i)
		}
}
var ug = Ce(
	{ menuitem: !0 },
	{
		area: !0,
		base: !0,
		br: !0,
		col: !0,
		embed: !0,
		hr: !0,
		img: !0,
		input: !0,
		keygen: !0,
		link: !0,
		meta: !0,
		param: !0,
		source: !0,
		track: !0,
		wbr: !0,
	}
)
function da(e, t) {
	if (t) {
		if (ug[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error($(137, e))
		if (t.dangerouslySetInnerHTML != null) {
			if (t.children != null) throw Error($(60))
			if (typeof t.dangerouslySetInnerHTML != 'object' || !('__html' in t.dangerouslySetInnerHTML)) throw Error($(61))
		}
		if (t.style != null && typeof t.style != 'object') throw Error($(62))
	}
}
function fa(e, t) {
	if (e.indexOf('-') === -1) return typeof t.is == 'string'
	switch (e) {
		case 'annotation-xml':
		case 'color-profile':
		case 'font-face':
		case 'font-face-src':
		case 'font-face-uri':
		case 'font-face-format':
		case 'font-face-name':
		case 'missing-glyph':
			return !1
		default:
			return !0
	}
}
var pa = null
function mu(e) {
	return (
		(e = e.target || e.srcElement || window),
		e.correspondingUseElement && (e = e.correspondingUseElement),
		e.nodeType === 3 ? e.parentNode : e
	)
}
var ha = null,
	ei = null,
	ti = null
function Ec(e) {
	if ((e = El(e))) {
		if (typeof ha != 'function') throw Error($(280))
		var t = e.stateNode
		t && ((t = ts(t)), ha(e.stateNode, e.type, t))
	}
}
function Uf(e) {
	ei ? (ti ? ti.push(e) : (ti = [e])) : (ei = e)
}
function Vf() {
	if (ei) {
		var e = ei,
			t = ti
		if (((ti = ei = null), Ec(e), t)) for (e = 0; e < t.length; e++) Ec(t[e])
	}
}
function Hf(e, t) {
	return e(t)
}
function Wf() {}
var Ss = !1
function Gf(e, t, n) {
	if (Ss) return e(t, n)
	Ss = !0
	try {
		return Hf(e, t, n)
	} finally {
		;(Ss = !1), (ei !== null || ti !== null) && (Wf(), Vf())
	}
}
function Zi(e, t) {
	var n = e.stateNode
	if (n === null) return null
	var r = ts(n)
	if (r === null) return null
	n = r[t]
	e: switch (t) {
		case 'onClick':
		case 'onClickCapture':
		case 'onDoubleClick':
		case 'onDoubleClickCapture':
		case 'onMouseDown':
		case 'onMouseDownCapture':
		case 'onMouseMove':
		case 'onMouseMoveCapture':
		case 'onMouseUp':
		case 'onMouseUpCapture':
		case 'onMouseEnter':
			;(r = !r.disabled) ||
				((e = e.type), (r = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
				(e = !r)
			break e
		default:
			e = !1
	}
	if (e) return null
	if (n && typeof n != 'function') throw Error($(231, t, typeof n))
	return n
}
var ma = !1
if (wn)
	try {
		var Ei = {}
		Object.defineProperty(Ei, 'passive', {
			get: function () {
				ma = !0
			},
		}),
			window.addEventListener('test', Ei, Ei),
			window.removeEventListener('test', Ei, Ei)
	} catch {
		ma = !1
	}
function cg(e, t, n, r, i, l, o, a, s) {
	var u = Array.prototype.slice.call(arguments, 3)
	try {
		t.apply(n, u)
	} catch (c) {
		this.onError(c)
	}
}
var Bi = !1,
	go = null,
	vo = !1,
	ga = null,
	dg = {
		onError: function (e) {
			;(Bi = !0), (go = e)
		},
	}
function fg(e, t, n, r, i, l, o, a, s) {
	;(Bi = !1), (go = null), cg.apply(dg, arguments)
}
function pg(e, t, n, r, i, l, o, a, s) {
	if ((fg.apply(this, arguments), Bi)) {
		if (Bi) {
			var u = go
			;(Bi = !1), (go = null)
		} else throw Error($(198))
		vo || ((vo = !0), (ga = u))
	}
}
function Nr(e) {
	var t = e,
		n = e
	if (e.alternate) for (; t.return; ) t = t.return
	else {
		e = t
		do (t = e), t.flags & 4098 && (n = t.return), (e = t.return)
		while (e)
	}
	return t.tag === 3 ? n : null
}
function Yf(e) {
	if (e.tag === 13) {
		var t = e.memoizedState
		if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated
	}
	return null
}
function Cc(e) {
	if (Nr(e) !== e) throw Error($(188))
}
function hg(e) {
	var t = e.alternate
	if (!t) {
		if (((t = Nr(e)), t === null)) throw Error($(188))
		return t !== e ? null : e
	}
	for (var n = e, r = t; ; ) {
		var i = n.return
		if (i === null) break
		var l = i.alternate
		if (l === null) {
			if (((r = i.return), r !== null)) {
				n = r
				continue
			}
			break
		}
		if (i.child === l.child) {
			for (l = i.child; l; ) {
				if (l === n) return Cc(i), e
				if (l === r) return Cc(i), t
				l = l.sibling
			}
			throw Error($(188))
		}
		if (n.return !== r.return) (n = i), (r = l)
		else {
			for (var o = !1, a = i.child; a; ) {
				if (a === n) {
					;(o = !0), (n = i), (r = l)
					break
				}
				if (a === r) {
					;(o = !0), (r = i), (n = l)
					break
				}
				a = a.sibling
			}
			if (!o) {
				for (a = l.child; a; ) {
					if (a === n) {
						;(o = !0), (n = l), (r = i)
						break
					}
					if (a === r) {
						;(o = !0), (r = l), (n = i)
						break
					}
					a = a.sibling
				}
				if (!o) throw Error($(189))
			}
		}
		if (n.alternate !== r) throw Error($(190))
	}
	if (n.tag !== 3) throw Error($(188))
	return n.stateNode.current === n ? e : t
}
function Kf(e) {
	return (e = hg(e)), e !== null ? Xf(e) : null
}
function Xf(e) {
	if (e.tag === 5 || e.tag === 6) return e
	for (e = e.child; e !== null; ) {
		var t = Xf(e)
		if (t !== null) return t
		e = e.sibling
	}
	return null
}
var Qf = yt.unstable_scheduleCallback,
	Tc = yt.unstable_cancelCallback,
	mg = yt.unstable_shouldYield,
	gg = yt.unstable_requestPaint,
	Le = yt.unstable_now,
	vg = yt.unstable_getCurrentPriorityLevel,
	gu = yt.unstable_ImmediatePriority,
	qf = yt.unstable_UserBlockingPriority,
	yo = yt.unstable_NormalPriority,
	yg = yt.unstable_LowPriority,
	Jf = yt.unstable_IdlePriority,
	qo = null,
	tn = null
function wg(e) {
	if (tn && typeof tn.onCommitFiberRoot == 'function')
		try {
			tn.onCommitFiberRoot(qo, e, void 0, (e.current.flags & 128) === 128)
		} catch {}
}
var zt = Math.clz32 ? Math.clz32 : Eg,
	xg = Math.log,
	Sg = Math.LN2
function Eg(e) {
	return (e >>>= 0), e === 0 ? 32 : (31 - ((xg(e) / Sg) | 0)) | 0
}
var Ml = 64,
	Il = 4194304
function Di(e) {
	switch (e & -e) {
		case 1:
			return 1
		case 2:
			return 2
		case 4:
			return 4
		case 8:
			return 8
		case 16:
			return 16
		case 32:
			return 32
		case 64:
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
			return e & 4194240
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return e & 130023424
		case 134217728:
			return 134217728
		case 268435456:
			return 268435456
		case 536870912:
			return 536870912
		case 1073741824:
			return 1073741824
		default:
			return e
	}
}
function wo(e, t) {
	var n = e.pendingLanes
	if (n === 0) return 0
	var r = 0,
		i = e.suspendedLanes,
		l = e.pingedLanes,
		o = n & 268435455
	if (o !== 0) {
		var a = o & ~i
		a !== 0 ? (r = Di(a)) : ((l &= o), l !== 0 && (r = Di(l)))
	} else (o = n & ~i), o !== 0 ? (r = Di(o)) : l !== 0 && (r = Di(l))
	if (r === 0) return 0
	if (t !== 0 && t !== r && !(t & i) && ((i = r & -r), (l = t & -t), i >= l || (i === 16 && (l & 4194240) !== 0)))
		return t
	if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
		for (e = e.entanglements, t &= r; 0 < t; ) (n = 31 - zt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i)
	return r
}
function Cg(e, t) {
	switch (e) {
		case 1:
		case 2:
		case 4:
			return t + 250
		case 8:
		case 16:
		case 32:
		case 64:
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
			return t + 5e3
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return -1
		case 134217728:
		case 268435456:
		case 536870912:
		case 1073741824:
			return -1
		default:
			return -1
	}
}
function Tg(e, t) {
	for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, l = e.pendingLanes; 0 < l; ) {
		var o = 31 - zt(l),
			a = 1 << o,
			s = i[o]
		s === -1 ? (!(a & n) || a & r) && (i[o] = Cg(a, t)) : s <= t && (e.expiredLanes |= a), (l &= ~a)
	}
}
function va(e) {
	return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function Zf() {
	var e = Ml
	return (Ml <<= 1), !(Ml & 4194240) && (Ml = 64), e
}
function Es(e) {
	for (var t = [], n = 0; 31 > n; n++) t.push(e)
	return t
}
function xl(e, t, n) {
	;(e.pendingLanes |= t),
		t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
		(e = e.eventTimes),
		(t = 31 - zt(t)),
		(e[t] = n)
}
function kg(e, t) {
	var n = e.pendingLanes & ~t
	;(e.pendingLanes = t),
		(e.suspendedLanes = 0),
		(e.pingedLanes = 0),
		(e.expiredLanes &= t),
		(e.mutableReadLanes &= t),
		(e.entangledLanes &= t),
		(t = e.entanglements)
	var r = e.eventTimes
	for (e = e.expirationTimes; 0 < n; ) {
		var i = 31 - zt(n),
			l = 1 << i
		;(t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~l)
	}
}
function vu(e, t) {
	var n = (e.entangledLanes |= t)
	for (e = e.entanglements; n; ) {
		var r = 31 - zt(n),
			i = 1 << r
		;(i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i)
	}
}
var pe = 0
function ep(e) {
	return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var tp,
	yu,
	np,
	rp,
	ip,
	ya = !1,
	Al = [],
	Hn = null,
	Wn = null,
	Gn = null,
	el = new Map(),
	tl = new Map(),
	zn = [],
	Pg =
		'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
			' '
		)
function kc(e, t) {
	switch (e) {
		case 'focusin':
		case 'focusout':
			Hn = null
			break
		case 'dragenter':
		case 'dragleave':
			Wn = null
			break
		case 'mouseover':
		case 'mouseout':
			Gn = null
			break
		case 'pointerover':
		case 'pointerout':
			el.delete(t.pointerId)
			break
		case 'gotpointercapture':
		case 'lostpointercapture':
			tl.delete(t.pointerId)
	}
}
function Ci(e, t, n, r, i, l) {
	return e === null || e.nativeEvent !== l
		? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: l, targetContainers: [i] }),
		  t !== null && ((t = El(t)), t !== null && yu(t)),
		  e)
		: ((e.eventSystemFlags |= r), (t = e.targetContainers), i !== null && t.indexOf(i) === -1 && t.push(i), e)
}
function _g(e, t, n, r, i) {
	switch (t) {
		case 'focusin':
			return (Hn = Ci(Hn, e, t, n, r, i)), !0
		case 'dragenter':
			return (Wn = Ci(Wn, e, t, n, r, i)), !0
		case 'mouseover':
			return (Gn = Ci(Gn, e, t, n, r, i)), !0
		case 'pointerover':
			var l = i.pointerId
			return el.set(l, Ci(el.get(l) || null, e, t, n, r, i)), !0
		case 'gotpointercapture':
			return (l = i.pointerId), tl.set(l, Ci(tl.get(l) || null, e, t, n, r, i)), !0
	}
	return !1
}
function lp(e) {
	var t = dr(e.target)
	if (t !== null) {
		var n = Nr(t)
		if (n !== null) {
			if (((t = n.tag), t === 13)) {
				if (((t = Yf(n)), t !== null)) {
					;(e.blockedOn = t),
						ip(e.priority, function () {
							np(n)
						})
					return
				}
			} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
				e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null
				return
			}
		}
	}
	e.blockedOn = null
}
function Zl(e) {
	if (e.blockedOn !== null) return !1
	for (var t = e.targetContainers; 0 < t.length; ) {
		var n = wa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
		if (n === null) {
			n = e.nativeEvent
			var r = new n.constructor(n.type, n)
			;(pa = r), n.target.dispatchEvent(r), (pa = null)
		} else return (t = El(n)), t !== null && yu(t), (e.blockedOn = n), !1
		t.shift()
	}
	return !0
}
function Pc(e, t, n) {
	Zl(e) && n.delete(t)
}
function bg() {
	;(ya = !1),
		Hn !== null && Zl(Hn) && (Hn = null),
		Wn !== null && Zl(Wn) && (Wn = null),
		Gn !== null && Zl(Gn) && (Gn = null),
		el.forEach(Pc),
		tl.forEach(Pc)
}
function Ti(e, t) {
	e.blockedOn === t &&
		((e.blockedOn = null), ya || ((ya = !0), yt.unstable_scheduleCallback(yt.unstable_NormalPriority, bg)))
}
function nl(e) {
	function t(i) {
		return Ti(i, e)
	}
	if (0 < Al.length) {
		Ti(Al[0], e)
		for (var n = 1; n < Al.length; n++) {
			var r = Al[n]
			r.blockedOn === e && (r.blockedOn = null)
		}
	}
	for (
		Hn !== null && Ti(Hn, e), Wn !== null && Ti(Wn, e), Gn !== null && Ti(Gn, e), el.forEach(t), tl.forEach(t), n = 0;
		n < zn.length;
		n++
	)
		(r = zn[n]), r.blockedOn === e && (r.blockedOn = null)
	for (; 0 < zn.length && ((n = zn[0]), n.blockedOn === null); ) lp(n), n.blockedOn === null && zn.shift()
}
var ni = Tn.ReactCurrentBatchConfig,
	xo = !0
function Lg(e, t, n, r) {
	var i = pe,
		l = ni.transition
	ni.transition = null
	try {
		;(pe = 1), wu(e, t, n, r)
	} finally {
		;(pe = i), (ni.transition = l)
	}
}
function Ng(e, t, n, r) {
	var i = pe,
		l = ni.transition
	ni.transition = null
	try {
		;(pe = 4), wu(e, t, n, r)
	} finally {
		;(pe = i), (ni.transition = l)
	}
}
function wu(e, t, n, r) {
	if (xo) {
		var i = wa(e, t, n, r)
		if (i === null) js(e, t, r, So, n), kc(e, r)
		else if (_g(i, e, t, n, r)) r.stopPropagation()
		else if ((kc(e, r), t & 4 && -1 < Pg.indexOf(e))) {
			for (; i !== null; ) {
				var l = El(i)
				if ((l !== null && tp(l), (l = wa(e, t, n, r)), l === null && js(e, t, r, So, n), l === i)) break
				i = l
			}
			i !== null && r.stopPropagation()
		} else js(e, t, r, null, n)
	}
}
var So = null
function wa(e, t, n, r) {
	if (((So = null), (e = mu(r)), (e = dr(e)), e !== null))
		if (((t = Nr(e)), t === null)) e = null
		else if (((n = t.tag), n === 13)) {
			if (((e = Yf(t)), e !== null)) return e
			e = null
		} else if (n === 3) {
			if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null
			e = null
		} else t !== e && (e = null)
	return (So = e), null
}
function op(e) {
	switch (e) {
		case 'cancel':
		case 'click':
		case 'close':
		case 'contextmenu':
		case 'copy':
		case 'cut':
		case 'auxclick':
		case 'dblclick':
		case 'dragend':
		case 'dragstart':
		case 'drop':
		case 'focusin':
		case 'focusout':
		case 'input':
		case 'invalid':
		case 'keydown':
		case 'keypress':
		case 'keyup':
		case 'mousedown':
		case 'mouseup':
		case 'paste':
		case 'pause':
		case 'play':
		case 'pointercancel':
		case 'pointerdown':
		case 'pointerup':
		case 'ratechange':
		case 'reset':
		case 'resize':
		case 'seeked':
		case 'submit':
		case 'touchcancel':
		case 'touchend':
		case 'touchstart':
		case 'volumechange':
		case 'change':
		case 'selectionchange':
		case 'textInput':
		case 'compositionstart':
		case 'compositionend':
		case 'compositionupdate':
		case 'beforeblur':
		case 'afterblur':
		case 'beforeinput':
		case 'blur':
		case 'fullscreenchange':
		case 'focus':
		case 'hashchange':
		case 'popstate':
		case 'select':
		case 'selectstart':
			return 1
		case 'drag':
		case 'dragenter':
		case 'dragexit':
		case 'dragleave':
		case 'dragover':
		case 'mousemove':
		case 'mouseout':
		case 'mouseover':
		case 'pointermove':
		case 'pointerout':
		case 'pointerover':
		case 'scroll':
		case 'toggle':
		case 'touchmove':
		case 'wheel':
		case 'mouseenter':
		case 'mouseleave':
		case 'pointerenter':
		case 'pointerleave':
			return 4
		case 'message':
			switch (vg()) {
				case gu:
					return 1
				case qf:
					return 4
				case yo:
				case yg:
					return 16
				case Jf:
					return 536870912
				default:
					return 16
			}
		default:
			return 16
	}
}
var $n = null,
	xu = null,
	eo = null
function sp() {
	if (eo) return eo
	var e,
		t = xu,
		n = t.length,
		r,
		i = 'value' in $n ? $n.value : $n.textContent,
		l = i.length
	for (e = 0; e < n && t[e] === i[e]; e++);
	var o = n - e
	for (r = 1; r <= o && t[n - r] === i[l - r]; r++);
	return (eo = i.slice(e, 1 < r ? 1 - r : void 0))
}
function to(e) {
	var t = e.keyCode
	return (
		'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
		e === 10 && (e = 13),
		32 <= e || e === 13 ? e : 0
	)
}
function Dl() {
	return !0
}
function _c() {
	return !1
}
function xt(e) {
	function t(n, r, i, l, o) {
		;(this._reactName = n),
			(this._targetInst = i),
			(this.type = r),
			(this.nativeEvent = l),
			(this.target = o),
			(this.currentTarget = null)
		for (var a in e) e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(l) : l[a]))
		return (
			(this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? Dl : _c),
			(this.isPropagationStopped = _c),
			this
		)
	}
	return (
		Ce(t.prototype, {
			preventDefault: function () {
				this.defaultPrevented = !0
				var n = this.nativeEvent
				n &&
					(n.preventDefault ? n.preventDefault() : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
					(this.isDefaultPrevented = Dl))
			},
			stopPropagation: function () {
				var n = this.nativeEvent
				n &&
					(n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
					(this.isPropagationStopped = Dl))
			},
			persist: function () {},
			isPersistent: Dl,
		}),
		t
	)
}
var vi = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function (e) {
			return e.timeStamp || Date.now()
		},
		defaultPrevented: 0,
		isTrusted: 0,
	},
	Su = xt(vi),
	Sl = Ce({}, vi, { view: 0, detail: 0 }),
	Rg = xt(Sl),
	Cs,
	Ts,
	ki,
	Jo = Ce({}, Sl, {
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
		getModifierState: Eu,
		button: 0,
		buttons: 0,
		relatedTarget: function (e) {
			return e.relatedTarget === void 0
				? e.fromElement === e.srcElement
					? e.toElement
					: e.fromElement
				: e.relatedTarget
		},
		movementX: function (e) {
			return 'movementX' in e
				? e.movementX
				: (e !== ki &&
						(ki && e.type === 'mousemove'
							? ((Cs = e.screenX - ki.screenX), (Ts = e.screenY - ki.screenY))
							: (Ts = Cs = 0),
						(ki = e)),
				  Cs)
		},
		movementY: function (e) {
			return 'movementY' in e ? e.movementY : Ts
		},
	}),
	bc = xt(Jo),
	jg = Ce({}, Jo, { dataTransfer: 0 }),
	Og = xt(jg),
	Mg = Ce({}, Sl, { relatedTarget: 0 }),
	ks = xt(Mg),
	Ig = Ce({}, vi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
	Ag = xt(Ig),
	Dg = Ce({}, vi, {
		clipboardData: function (e) {
			return 'clipboardData' in e ? e.clipboardData : window.clipboardData
		},
	}),
	zg = xt(Dg),
	Fg = Ce({}, vi, { data: 0 }),
	Lc = xt(Fg),
	$g = {
		Esc: 'Escape',
		Spacebar: ' ',
		Left: 'ArrowLeft',
		Up: 'ArrowUp',
		Right: 'ArrowRight',
		Down: 'ArrowDown',
		Del: 'Delete',
		Win: 'OS',
		Menu: 'ContextMenu',
		Apps: 'ContextMenu',
		Scroll: 'ScrollLock',
		MozPrintableKey: 'Unidentified',
	},
	Bg = {
		8: 'Backspace',
		9: 'Tab',
		12: 'Clear',
		13: 'Enter',
		16: 'Shift',
		17: 'Control',
		18: 'Alt',
		19: 'Pause',
		20: 'CapsLock',
		27: 'Escape',
		32: ' ',
		33: 'PageUp',
		34: 'PageDown',
		35: 'End',
		36: 'Home',
		37: 'ArrowLeft',
		38: 'ArrowUp',
		39: 'ArrowRight',
		40: 'ArrowDown',
		45: 'Insert',
		46: 'Delete',
		112: 'F1',
		113: 'F2',
		114: 'F3',
		115: 'F4',
		116: 'F5',
		117: 'F6',
		118: 'F7',
		119: 'F8',
		120: 'F9',
		121: 'F10',
		122: 'F11',
		123: 'F12',
		144: 'NumLock',
		145: 'ScrollLock',
		224: 'Meta',
	},
	Ug = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function Vg(e) {
	var t = this.nativeEvent
	return t.getModifierState ? t.getModifierState(e) : (e = Ug[e]) ? !!t[e] : !1
}
function Eu() {
	return Vg
}
var Hg = Ce({}, Sl, {
		key: function (e) {
			if (e.key) {
				var t = $g[e.key] || e.key
				if (t !== 'Unidentified') return t
			}
			return e.type === 'keypress'
				? ((e = to(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
				: e.type === 'keydown' || e.type === 'keyup'
				? Bg[e.keyCode] || 'Unidentified'
				: ''
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: Eu,
		charCode: function (e) {
			return e.type === 'keypress' ? to(e) : 0
		},
		keyCode: function (e) {
			return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
		},
		which: function (e) {
			return e.type === 'keypress' ? to(e) : e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
		},
	}),
	Wg = xt(Hg),
	Gg = Ce({}, Jo, {
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
	Nc = xt(Gg),
	Yg = Ce({}, Sl, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: Eu,
	}),
	Kg = xt(Yg),
	Xg = Ce({}, vi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
	Qg = xt(Xg),
	qg = Ce({}, Jo, {
		deltaX: function (e) {
			return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0
		},
		deltaY: function (e) {
			return 'deltaY' in e ? e.deltaY : 'wheelDeltaY' in e ? -e.wheelDeltaY : 'wheelDelta' in e ? -e.wheelDelta : 0
		},
		deltaZ: 0,
		deltaMode: 0,
	}),
	Jg = xt(qg),
	Zg = [9, 13, 27, 32],
	Cu = wn && 'CompositionEvent' in window,
	Ui = null
wn && 'documentMode' in document && (Ui = document.documentMode)
var ev = wn && 'TextEvent' in window && !Ui,
	ap = wn && (!Cu || (Ui && 8 < Ui && 11 >= Ui)),
	Rc = ' ',
	jc = !1
function up(e, t) {
	switch (e) {
		case 'keyup':
			return Zg.indexOf(t.keyCode) !== -1
		case 'keydown':
			return t.keyCode !== 229
		case 'keypress':
		case 'mousedown':
		case 'focusout':
			return !0
		default:
			return !1
	}
}
function cp(e) {
	return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
}
var Br = !1
function tv(e, t) {
	switch (e) {
		case 'compositionend':
			return cp(t)
		case 'keypress':
			return t.which !== 32 ? null : ((jc = !0), Rc)
		case 'textInput':
			return (e = t.data), e === Rc && jc ? null : e
		default:
			return null
	}
}
function nv(e, t) {
	if (Br) return e === 'compositionend' || (!Cu && up(e, t)) ? ((e = sp()), (eo = xu = $n = null), (Br = !1), e) : null
	switch (e) {
		case 'paste':
			return null
		case 'keypress':
			if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
				if (t.char && 1 < t.char.length) return t.char
				if (t.which) return String.fromCharCode(t.which)
			}
			return null
		case 'compositionend':
			return ap && t.locale !== 'ko' ? null : t.data
		default:
			return null
	}
}
var rv = {
	color: !0,
	date: !0,
	datetime: !0,
	'datetime-local': !0,
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
}
function Oc(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase()
	return t === 'input' ? !!rv[e.type] : t === 'textarea'
}
function dp(e, t, n, r) {
	Uf(r),
		(t = Eo(t, 'onChange')),
		0 < t.length && ((n = new Su('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }))
}
var Vi = null,
	rl = null
function iv(e) {
	Ep(e, 0)
}
function Zo(e) {
	var t = Hr(e)
	if (If(t)) return e
}
function lv(e, t) {
	if (e === 'change') return t
}
var fp = !1
if (wn) {
	var Ps
	if (wn) {
		var _s = 'oninput' in document
		if (!_s) {
			var Mc = document.createElement('div')
			Mc.setAttribute('oninput', 'return;'), (_s = typeof Mc.oninput == 'function')
		}
		Ps = _s
	} else Ps = !1
	fp = Ps && (!document.documentMode || 9 < document.documentMode)
}
function Ic() {
	Vi && (Vi.detachEvent('onpropertychange', pp), (rl = Vi = null))
}
function pp(e) {
	if (e.propertyName === 'value' && Zo(rl)) {
		var t = []
		dp(t, rl, e, mu(e)), Gf(iv, t)
	}
}
function ov(e, t, n) {
	e === 'focusin' ? (Ic(), (Vi = t), (rl = n), Vi.attachEvent('onpropertychange', pp)) : e === 'focusout' && Ic()
}
function sv(e) {
	if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Zo(rl)
}
function av(e, t) {
	if (e === 'click') return Zo(t)
}
function uv(e, t) {
	if (e === 'input' || e === 'change') return Zo(t)
}
function cv(e, t) {
	return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var $t = typeof Object.is == 'function' ? Object.is : cv
function il(e, t) {
	if ($t(e, t)) return !0
	if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1
	var n = Object.keys(e),
		r = Object.keys(t)
	if (n.length !== r.length) return !1
	for (r = 0; r < n.length; r++) {
		var i = n[r]
		if (!ta.call(t, i) || !$t(e[i], t[i])) return !1
	}
	return !0
}
function Ac(e) {
	for (; e && e.firstChild; ) e = e.firstChild
	return e
}
function Dc(e, t) {
	var n = Ac(e)
	e = 0
	for (var r; n; ) {
		if (n.nodeType === 3) {
			if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e }
			e = r
		}
		e: {
			for (; n; ) {
				if (n.nextSibling) {
					n = n.nextSibling
					break e
				}
				n = n.parentNode
			}
			n = void 0
		}
		n = Ac(n)
	}
}
function hp(e, t) {
	return e && t
		? e === t
			? !0
			: e && e.nodeType === 3
			? !1
			: t && t.nodeType === 3
			? hp(e, t.parentNode)
			: 'contains' in e
			? e.contains(t)
			: e.compareDocumentPosition
			? !!(e.compareDocumentPosition(t) & 16)
			: !1
		: !1
}
function mp() {
	for (var e = window, t = mo(); t instanceof e.HTMLIFrameElement; ) {
		try {
			var n = typeof t.contentWindow.location.href == 'string'
		} catch {
			n = !1
		}
		if (n) e = t.contentWindow
		else break
		t = mo(e.document)
	}
	return t
}
function Tu(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase()
	return (
		t &&
		((t === 'input' &&
			(e.type === 'text' || e.type === 'search' || e.type === 'tel' || e.type === 'url' || e.type === 'password')) ||
			t === 'textarea' ||
			e.contentEditable === 'true')
	)
}
function dv(e) {
	var t = mp(),
		n = e.focusedElem,
		r = e.selectionRange
	if (t !== n && n && n.ownerDocument && hp(n.ownerDocument.documentElement, n)) {
		if (r !== null && Tu(n)) {
			if (((t = r.start), (e = r.end), e === void 0 && (e = t), 'selectionStart' in n))
				(n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length))
			else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
				e = e.getSelection()
				var i = n.textContent.length,
					l = Math.min(r.start, i)
				;(r = r.end === void 0 ? l : Math.min(r.end, i)),
					!e.extend && l > r && ((i = r), (r = l), (l = i)),
					(i = Dc(n, l))
				var o = Dc(n, r)
				i &&
					o &&
					(e.rangeCount !== 1 ||
						e.anchorNode !== i.node ||
						e.anchorOffset !== i.offset ||
						e.focusNode !== o.node ||
						e.focusOffset !== o.offset) &&
					((t = t.createRange()),
					t.setStart(i.node, i.offset),
					e.removeAllRanges(),
					l > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)))
			}
		}
		for (t = [], e = n; (e = e.parentNode); )
			e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
		for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
			(e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top)
	}
}
var fv = wn && 'documentMode' in document && 11 >= document.documentMode,
	Ur = null,
	xa = null,
	Hi = null,
	Sa = !1
function zc(e, t, n) {
	var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
	Sa ||
		Ur == null ||
		Ur !== mo(r) ||
		((r = Ur),
		'selectionStart' in r && Tu(r)
			? (r = { start: r.selectionStart, end: r.selectionEnd })
			: ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
			  (r = {
					anchorNode: r.anchorNode,
					anchorOffset: r.anchorOffset,
					focusNode: r.focusNode,
					focusOffset: r.focusOffset,
			  })),
		(Hi && il(Hi, r)) ||
			((Hi = r),
			(r = Eo(xa, 'onSelect')),
			0 < r.length &&
				((t = new Su('onSelect', 'select', null, t, n)), e.push({ event: t, listeners: r }), (t.target = Ur))))
}
function zl(e, t) {
	var n = {}
	return (n[e.toLowerCase()] = t.toLowerCase()), (n['Webkit' + e] = 'webkit' + t), (n['Moz' + e] = 'moz' + t), n
}
var Vr = {
		animationend: zl('Animation', 'AnimationEnd'),
		animationiteration: zl('Animation', 'AnimationIteration'),
		animationstart: zl('Animation', 'AnimationStart'),
		transitionend: zl('Transition', 'TransitionEnd'),
	},
	bs = {},
	gp = {}
wn &&
	((gp = document.createElement('div').style),
	'AnimationEvent' in window ||
		(delete Vr.animationend.animation, delete Vr.animationiteration.animation, delete Vr.animationstart.animation),
	'TransitionEvent' in window || delete Vr.transitionend.transition)
function es(e) {
	if (bs[e]) return bs[e]
	if (!Vr[e]) return e
	var t = Vr[e],
		n
	for (n in t) if (t.hasOwnProperty(n) && n in gp) return (bs[e] = t[n])
	return e
}
var vp = es('animationend'),
	yp = es('animationiteration'),
	wp = es('animationstart'),
	xp = es('transitionend'),
	Sp = new Map(),
	Fc =
		'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
			' '
		)
function nr(e, t) {
	Sp.set(e, t), Lr(t, [e])
}
for (var Ls = 0; Ls < Fc.length; Ls++) {
	var Ns = Fc[Ls],
		pv = Ns.toLowerCase(),
		hv = Ns[0].toUpperCase() + Ns.slice(1)
	nr(pv, 'on' + hv)
}
nr(vp, 'onAnimationEnd')
nr(yp, 'onAnimationIteration')
nr(wp, 'onAnimationStart')
nr('dblclick', 'onDoubleClick')
nr('focusin', 'onFocus')
nr('focusout', 'onBlur')
nr(xp, 'onTransitionEnd')
si('onMouseEnter', ['mouseout', 'mouseover'])
si('onMouseLeave', ['mouseout', 'mouseover'])
si('onPointerEnter', ['pointerout', 'pointerover'])
si('onPointerLeave', ['pointerout', 'pointerover'])
Lr('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' '))
Lr('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' '))
Lr('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
Lr('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' '))
Lr('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' '))
Lr('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '))
var zi =
		'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
			' '
		),
	mv = new Set('cancel close invalid load scroll toggle'.split(' ').concat(zi))
function $c(e, t, n) {
	var r = e.type || 'unknown-event'
	;(e.currentTarget = n), pg(r, t, void 0, e), (e.currentTarget = null)
}
function Ep(e, t) {
	t = (t & 4) !== 0
	for (var n = 0; n < e.length; n++) {
		var r = e[n],
			i = r.event
		r = r.listeners
		e: {
			var l = void 0
			if (t)
				for (var o = r.length - 1; 0 <= o; o--) {
					var a = r[o],
						s = a.instance,
						u = a.currentTarget
					if (((a = a.listener), s !== l && i.isPropagationStopped())) break e
					$c(i, a, u), (l = s)
				}
			else
				for (o = 0; o < r.length; o++) {
					if (
						((a = r[o]), (s = a.instance), (u = a.currentTarget), (a = a.listener), s !== l && i.isPropagationStopped())
					)
						break e
					$c(i, a, u), (l = s)
				}
		}
	}
	if (vo) throw ((e = ga), (vo = !1), (ga = null), e)
}
function ve(e, t) {
	var n = t[Pa]
	n === void 0 && (n = t[Pa] = new Set())
	var r = e + '__bubble'
	n.has(r) || (Cp(t, e, 2, !1), n.add(r))
}
function Rs(e, t, n) {
	var r = 0
	t && (r |= 4), Cp(n, e, r, t)
}
var Fl = '_reactListening' + Math.random().toString(36).slice(2)
function ll(e) {
	if (!e[Fl]) {
		;(e[Fl] = !0),
			Nf.forEach(function (n) {
				n !== 'selectionchange' && (mv.has(n) || Rs(n, !1, e), Rs(n, !0, e))
			})
		var t = e.nodeType === 9 ? e : e.ownerDocument
		t === null || t[Fl] || ((t[Fl] = !0), Rs('selectionchange', !1, t))
	}
}
function Cp(e, t, n, r) {
	switch (op(t)) {
		case 1:
			var i = Lg
			break
		case 4:
			i = Ng
			break
		default:
			i = wu
	}
	;(n = i.bind(null, t, n, e)),
		(i = void 0),
		!ma || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (i = !0),
		r
			? i !== void 0
				? e.addEventListener(t, n, { capture: !0, passive: i })
				: e.addEventListener(t, n, !0)
			: i !== void 0
			? e.addEventListener(t, n, { passive: i })
			: e.addEventListener(t, n, !1)
}
function js(e, t, n, r, i) {
	var l = r
	if (!(t & 1) && !(t & 2) && r !== null)
		e: for (;;) {
			if (r === null) return
			var o = r.tag
			if (o === 3 || o === 4) {
				var a = r.stateNode.containerInfo
				if (a === i || (a.nodeType === 8 && a.parentNode === i)) break
				if (o === 4)
					for (o = r.return; o !== null; ) {
						var s = o.tag
						if (
							(s === 3 || s === 4) &&
							((s = o.stateNode.containerInfo), s === i || (s.nodeType === 8 && s.parentNode === i))
						)
							return
						o = o.return
					}
				for (; a !== null; ) {
					if (((o = dr(a)), o === null)) return
					if (((s = o.tag), s === 5 || s === 6)) {
						r = l = o
						continue e
					}
					a = a.parentNode
				}
			}
			r = r.return
		}
	Gf(function () {
		var u = l,
			c = mu(n),
			p = []
		e: {
			var m = Sp.get(e)
			if (m !== void 0) {
				var g = Su,
					y = e
				switch (e) {
					case 'keypress':
						if (to(n) === 0) break e
					case 'keydown':
					case 'keyup':
						g = Wg
						break
					case 'focusin':
						;(y = 'focus'), (g = ks)
						break
					case 'focusout':
						;(y = 'blur'), (g = ks)
						break
					case 'beforeblur':
					case 'afterblur':
						g = ks
						break
					case 'click':
						if (n.button === 2) break e
					case 'auxclick':
					case 'dblclick':
					case 'mousedown':
					case 'mousemove':
					case 'mouseup':
					case 'mouseout':
					case 'mouseover':
					case 'contextmenu':
						g = bc
						break
					case 'drag':
					case 'dragend':
					case 'dragenter':
					case 'dragexit':
					case 'dragleave':
					case 'dragover':
					case 'dragstart':
					case 'drop':
						g = Og
						break
					case 'touchcancel':
					case 'touchend':
					case 'touchmove':
					case 'touchstart':
						g = Kg
						break
					case vp:
					case yp:
					case wp:
						g = Ag
						break
					case xp:
						g = Qg
						break
					case 'scroll':
						g = Rg
						break
					case 'wheel':
						g = Jg
						break
					case 'copy':
					case 'cut':
					case 'paste':
						g = zg
						break
					case 'gotpointercapture':
					case 'lostpointercapture':
					case 'pointercancel':
					case 'pointerdown':
					case 'pointermove':
					case 'pointerout':
					case 'pointerover':
					case 'pointerup':
						g = Nc
				}
				var v = (t & 4) !== 0,
					E = !v && e === 'scroll',
					h = v ? (m !== null ? m + 'Capture' : null) : m
				v = []
				for (var d = u, f; d !== null; ) {
					f = d
					var w = f.stateNode
					if (
						(f.tag === 5 && w !== null && ((f = w), h !== null && ((w = Zi(d, h)), w != null && v.push(ol(d, w, f)))),
						E)
					)
						break
					d = d.return
				}
				0 < v.length && ((m = new g(m, y, null, n, c)), p.push({ event: m, listeners: v }))
			}
		}
		if (!(t & 7)) {
			e: {
				if (
					((m = e === 'mouseover' || e === 'pointerover'),
					(g = e === 'mouseout' || e === 'pointerout'),
					m && n !== pa && (y = n.relatedTarget || n.fromElement) && (dr(y) || y[xn]))
				)
					break e
				if (
					(g || m) &&
					((m = c.window === c ? c : (m = c.ownerDocument) ? m.defaultView || m.parentWindow : window),
					g
						? ((y = n.relatedTarget || n.toElement),
						  (g = u),
						  (y = y ? dr(y) : null),
						  y !== null && ((E = Nr(y)), y !== E || (y.tag !== 5 && y.tag !== 6)) && (y = null))
						: ((g = null), (y = u)),
					g !== y)
				) {
					if (
						((v = bc),
						(w = 'onMouseLeave'),
						(h = 'onMouseEnter'),
						(d = 'mouse'),
						(e === 'pointerout' || e === 'pointerover') &&
							((v = Nc), (w = 'onPointerLeave'), (h = 'onPointerEnter'), (d = 'pointer')),
						(E = g == null ? m : Hr(g)),
						(f = y == null ? m : Hr(y)),
						(m = new v(w, d + 'leave', g, n, c)),
						(m.target = E),
						(m.relatedTarget = f),
						(w = null),
						dr(c) === u && ((v = new v(h, d + 'enter', y, n, c)), (v.target = f), (v.relatedTarget = E), (w = v)),
						(E = w),
						g && y)
					)
						t: {
							for (v = g, h = y, d = 0, f = v; f; f = Dr(f)) d++
							for (f = 0, w = h; w; w = Dr(w)) f++
							for (; 0 < d - f; ) (v = Dr(v)), d--
							for (; 0 < f - d; ) (h = Dr(h)), f--
							for (; d--; ) {
								if (v === h || (h !== null && v === h.alternate)) break t
								;(v = Dr(v)), (h = Dr(h))
							}
							v = null
						}
					else v = null
					g !== null && Bc(p, m, g, v, !1), y !== null && E !== null && Bc(p, E, y, v, !0)
				}
			}
			e: {
				if (
					((m = u ? Hr(u) : window),
					(g = m.nodeName && m.nodeName.toLowerCase()),
					g === 'select' || (g === 'input' && m.type === 'file'))
				)
					var C = lv
				else if (Oc(m))
					if (fp) C = uv
					else {
						C = sv
						var S = ov
					}
				else
					(g = m.nodeName) && g.toLowerCase() === 'input' && (m.type === 'checkbox' || m.type === 'radio') && (C = av)
				if (C && (C = C(e, u))) {
					dp(p, C, n, c)
					break e
				}
				S && S(e, m, u),
					e === 'focusout' && (S = m._wrapperState) && S.controlled && m.type === 'number' && aa(m, 'number', m.value)
			}
			switch (((S = u ? Hr(u) : window), e)) {
				case 'focusin':
					;(Oc(S) || S.contentEditable === 'true') && ((Ur = S), (xa = u), (Hi = null))
					break
				case 'focusout':
					Hi = xa = Ur = null
					break
				case 'mousedown':
					Sa = !0
					break
				case 'contextmenu':
				case 'mouseup':
				case 'dragend':
					;(Sa = !1), zc(p, n, c)
					break
				case 'selectionchange':
					if (fv) break
				case 'keydown':
				case 'keyup':
					zc(p, n, c)
			}
			var b
			if (Cu)
				e: {
					switch (e) {
						case 'compositionstart':
							var N = 'onCompositionStart'
							break e
						case 'compositionend':
							N = 'onCompositionEnd'
							break e
						case 'compositionupdate':
							N = 'onCompositionUpdate'
							break e
					}
					N = void 0
				}
			else
				Br ? up(e, n) && (N = 'onCompositionEnd') : e === 'keydown' && n.keyCode === 229 && (N = 'onCompositionStart')
			N &&
				(ap &&
					n.locale !== 'ko' &&
					(Br || N !== 'onCompositionStart'
						? N === 'onCompositionEnd' && Br && (b = sp())
						: (($n = c), (xu = 'value' in $n ? $n.value : $n.textContent), (Br = !0))),
				(S = Eo(u, N)),
				0 < S.length &&
					((N = new Lc(N, e, null, n, c)),
					p.push({ event: N, listeners: S }),
					b ? (N.data = b) : ((b = cp(n)), b !== null && (N.data = b)))),
				(b = ev ? tv(e, n) : nv(e, n)) &&
					((u = Eo(u, 'onBeforeInput')),
					0 < u.length &&
						((c = new Lc('onBeforeInput', 'beforeinput', null, n, c)),
						p.push({ event: c, listeners: u }),
						(c.data = b)))
		}
		Ep(p, t)
	})
}
function ol(e, t, n) {
	return { instance: e, listener: t, currentTarget: n }
}
function Eo(e, t) {
	for (var n = t + 'Capture', r = []; e !== null; ) {
		var i = e,
			l = i.stateNode
		i.tag === 5 &&
			l !== null &&
			((i = l), (l = Zi(e, n)), l != null && r.unshift(ol(e, l, i)), (l = Zi(e, t)), l != null && r.push(ol(e, l, i))),
			(e = e.return)
	}
	return r
}
function Dr(e) {
	if (e === null) return null
	do e = e.return
	while (e && e.tag !== 5)
	return e || null
}
function Bc(e, t, n, r, i) {
	for (var l = t._reactName, o = []; n !== null && n !== r; ) {
		var a = n,
			s = a.alternate,
			u = a.stateNode
		if (s !== null && s === r) break
		a.tag === 5 &&
			u !== null &&
			((a = u),
			i
				? ((s = Zi(n, l)), s != null && o.unshift(ol(n, s, a)))
				: i || ((s = Zi(n, l)), s != null && o.push(ol(n, s, a)))),
			(n = n.return)
	}
	o.length !== 0 && e.push({ event: t, listeners: o })
}
var gv = /\r\n?/g,
	vv = /\u0000|\uFFFD/g
function Uc(e) {
	return (typeof e == 'string' ? e : '' + e)
		.replace(
			gv,
			`
`
		)
		.replace(vv, '')
}
function $l(e, t, n) {
	if (((t = Uc(t)), Uc(e) !== t && n)) throw Error($(425))
}
function Co() {}
var Ea = null,
	Ca = null
function Ta(e, t) {
	return (
		e === 'textarea' ||
		e === 'noscript' ||
		typeof t.children == 'string' ||
		typeof t.children == 'number' ||
		(typeof t.dangerouslySetInnerHTML == 'object' &&
			t.dangerouslySetInnerHTML !== null &&
			t.dangerouslySetInnerHTML.__html != null)
	)
}
var ka = typeof setTimeout == 'function' ? setTimeout : void 0,
	yv = typeof clearTimeout == 'function' ? clearTimeout : void 0,
	Vc = typeof Promise == 'function' ? Promise : void 0,
	wv =
		typeof queueMicrotask == 'function'
			? queueMicrotask
			: typeof Vc < 'u'
			? function (e) {
					return Vc.resolve(null).then(e).catch(xv)
			  }
			: ka
function xv(e) {
	setTimeout(function () {
		throw e
	})
}
function Os(e, t) {
	var n = t,
		r = 0
	do {
		var i = n.nextSibling
		if ((e.removeChild(n), i && i.nodeType === 8))
			if (((n = i.data), n === '/$')) {
				if (r === 0) {
					e.removeChild(i), nl(t)
					return
				}
				r--
			} else (n !== '$' && n !== '$?' && n !== '$!') || r++
		n = i
	} while (n)
	nl(t)
}
function Yn(e) {
	for (; e != null; e = e.nextSibling) {
		var t = e.nodeType
		if (t === 1 || t === 3) break
		if (t === 8) {
			if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break
			if (t === '/$') return null
		}
	}
	return e
}
function Hc(e) {
	e = e.previousSibling
	for (var t = 0; e; ) {
		if (e.nodeType === 8) {
			var n = e.data
			if (n === '$' || n === '$!' || n === '$?') {
				if (t === 0) return e
				t--
			} else n === '/$' && t++
		}
		e = e.previousSibling
	}
	return null
}
var yi = Math.random().toString(36).slice(2),
	Zt = '__reactFiber$' + yi,
	sl = '__reactProps$' + yi,
	xn = '__reactContainer$' + yi,
	Pa = '__reactEvents$' + yi,
	Sv = '__reactListeners$' + yi,
	Ev = '__reactHandles$' + yi
function dr(e) {
	var t = e[Zt]
	if (t) return t
	for (var n = e.parentNode; n; ) {
		if ((t = n[xn] || n[Zt])) {
			if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
				for (e = Hc(e); e !== null; ) {
					if ((n = e[Zt])) return n
					e = Hc(e)
				}
			return t
		}
		;(e = n), (n = e.parentNode)
	}
	return null
}
function El(e) {
	return (e = e[Zt] || e[xn]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
}
function Hr(e) {
	if (e.tag === 5 || e.tag === 6) return e.stateNode
	throw Error($(33))
}
function ts(e) {
	return e[sl] || null
}
var _a = [],
	Wr = -1
function rr(e) {
	return { current: e }
}
function ye(e) {
	0 > Wr || ((e.current = _a[Wr]), (_a[Wr] = null), Wr--)
}
function me(e, t) {
	Wr++, (_a[Wr] = e.current), (e.current = t)
}
var Zn = {},
	Qe = rr(Zn),
	ut = rr(!1),
	wr = Zn
function ai(e, t) {
	var n = e.type.contextTypes
	if (!n) return Zn
	var r = e.stateNode
	if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext
	var i = {},
		l
	for (l in n) i[l] = t[l]
	return (
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = t),
			(e.__reactInternalMemoizedMaskedChildContext = i)),
		i
	)
}
function ct(e) {
	return (e = e.childContextTypes), e != null
}
function To() {
	ye(ut), ye(Qe)
}
function Wc(e, t, n) {
	if (Qe.current !== Zn) throw Error($(168))
	me(Qe, t), me(ut, n)
}
function Tp(e, t, n) {
	var r = e.stateNode
	if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n
	r = r.getChildContext()
	for (var i in r) if (!(i in t)) throw Error($(108, og(e) || 'Unknown', i))
	return Ce({}, n, r)
}
function ko(e) {
	return (
		(e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Zn),
		(wr = Qe.current),
		me(Qe, e),
		me(ut, ut.current),
		!0
	)
}
function Gc(e, t, n) {
	var r = e.stateNode
	if (!r) throw Error($(169))
	n ? ((e = Tp(e, t, wr)), (r.__reactInternalMemoizedMergedChildContext = e), ye(ut), ye(Qe), me(Qe, e)) : ye(ut),
		me(ut, n)
}
var pn = null,
	ns = !1,
	Ms = !1
function kp(e) {
	pn === null ? (pn = [e]) : pn.push(e)
}
function Cv(e) {
	;(ns = !0), kp(e)
}
function ir() {
	if (!Ms && pn !== null) {
		Ms = !0
		var e = 0,
			t = pe
		try {
			var n = pn
			for (pe = 1; e < n.length; e++) {
				var r = n[e]
				do r = r(!0)
				while (r !== null)
			}
			;(pn = null), (ns = !1)
		} catch (i) {
			throw (pn !== null && (pn = pn.slice(e + 1)), Qf(gu, ir), i)
		} finally {
			;(pe = t), (Ms = !1)
		}
	}
	return null
}
var Gr = [],
	Yr = 0,
	Po = null,
	_o = 0,
	kt = [],
	Pt = 0,
	xr = null,
	mn = 1,
	gn = ''
function ar(e, t) {
	;(Gr[Yr++] = _o), (Gr[Yr++] = Po), (Po = e), (_o = t)
}
function Pp(e, t, n) {
	;(kt[Pt++] = mn), (kt[Pt++] = gn), (kt[Pt++] = xr), (xr = e)
	var r = mn
	e = gn
	var i = 32 - zt(r) - 1
	;(r &= ~(1 << i)), (n += 1)
	var l = 32 - zt(t) + i
	if (30 < l) {
		var o = i - (i % 5)
		;(l = (r & ((1 << o) - 1)).toString(32)),
			(r >>= o),
			(i -= o),
			(mn = (1 << (32 - zt(t) + i)) | (n << i) | r),
			(gn = l + e)
	} else (mn = (1 << l) | (n << i) | r), (gn = e)
}
function ku(e) {
	e.return !== null && (ar(e, 1), Pp(e, 1, 0))
}
function Pu(e) {
	for (; e === Po; ) (Po = Gr[--Yr]), (Gr[Yr] = null), (_o = Gr[--Yr]), (Gr[Yr] = null)
	for (; e === xr; )
		(xr = kt[--Pt]), (kt[Pt] = null), (gn = kt[--Pt]), (kt[Pt] = null), (mn = kt[--Pt]), (kt[Pt] = null)
}
var gt = null,
	mt = null,
	we = !1,
	Dt = null
function _p(e, t) {
	var n = _t(5, null, null, 0)
	;(n.elementType = 'DELETED'),
		(n.stateNode = t),
		(n.return = e),
		(t = e.deletions),
		t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n)
}
function Yc(e, t) {
	switch (e.tag) {
		case 5:
			var n = e.type
			return (
				(t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
				t !== null ? ((e.stateNode = t), (gt = e), (mt = Yn(t.firstChild)), !0) : !1
			)
		case 6:
			return (
				(t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
				t !== null ? ((e.stateNode = t), (gt = e), (mt = null), !0) : !1
			)
		case 13:
			return (
				(t = t.nodeType !== 8 ? null : t),
				t !== null
					? ((n = xr !== null ? { id: mn, overflow: gn } : null),
					  (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
					  (n = _t(18, null, null, 0)),
					  (n.stateNode = t),
					  (n.return = e),
					  (e.child = n),
					  (gt = e),
					  (mt = null),
					  !0)
					: !1
			)
		default:
			return !1
	}
}
function ba(e) {
	return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function La(e) {
	if (we) {
		var t = mt
		if (t) {
			var n = t
			if (!Yc(e, t)) {
				if (ba(e)) throw Error($(418))
				t = Yn(n.nextSibling)
				var r = gt
				t && Yc(e, t) ? _p(r, n) : ((e.flags = (e.flags & -4097) | 2), (we = !1), (gt = e))
			}
		} else {
			if (ba(e)) throw Error($(418))
			;(e.flags = (e.flags & -4097) | 2), (we = !1), (gt = e)
		}
	}
}
function Kc(e) {
	for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return
	gt = e
}
function Bl(e) {
	if (e !== gt) return !1
	if (!we) return Kc(e), (we = !0), !1
	var t
	if (
		((t = e.tag !== 3) &&
			!(t = e.tag !== 5) &&
			((t = e.type), (t = t !== 'head' && t !== 'body' && !Ta(e.type, e.memoizedProps))),
		t && (t = mt))
	) {
		if (ba(e)) throw (bp(), Error($(418)))
		for (; t; ) _p(e, t), (t = Yn(t.nextSibling))
	}
	if ((Kc(e), e.tag === 13)) {
		if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error($(317))
		e: {
			for (e = e.nextSibling, t = 0; e; ) {
				if (e.nodeType === 8) {
					var n = e.data
					if (n === '/$') {
						if (t === 0) {
							mt = Yn(e.nextSibling)
							break e
						}
						t--
					} else (n !== '$' && n !== '$!' && n !== '$?') || t++
				}
				e = e.nextSibling
			}
			mt = null
		}
	} else mt = gt ? Yn(e.stateNode.nextSibling) : null
	return !0
}
function bp() {
	for (var e = mt; e; ) e = Yn(e.nextSibling)
}
function ui() {
	;(mt = gt = null), (we = !1)
}
function _u(e) {
	Dt === null ? (Dt = [e]) : Dt.push(e)
}
var Tv = Tn.ReactCurrentBatchConfig
function Mt(e, t) {
	if (e && e.defaultProps) {
		;(t = Ce({}, t)), (e = e.defaultProps)
		for (var n in e) t[n] === void 0 && (t[n] = e[n])
		return t
	}
	return t
}
var bo = rr(null),
	Lo = null,
	Kr = null,
	bu = null
function Lu() {
	bu = Kr = Lo = null
}
function Nu(e) {
	var t = bo.current
	ye(bo), (e._currentValue = t)
}
function Na(e, t, n) {
	for (; e !== null; ) {
		var r = e.alternate
		if (
			((e.childLanes & t) !== t
				? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
				: r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
			e === n)
		)
			break
		e = e.return
	}
}
function ri(e, t) {
	;(Lo = e),
		(bu = Kr = null),
		(e = e.dependencies),
		e !== null && e.firstContext !== null && (e.lanes & t && (at = !0), (e.firstContext = null))
}
function Lt(e) {
	var t = e._currentValue
	if (bu !== e)
		if (((e = { context: e, memoizedValue: t, next: null }), Kr === null)) {
			if (Lo === null) throw Error($(308))
			;(Kr = e), (Lo.dependencies = { lanes: 0, firstContext: e })
		} else Kr = Kr.next = e
	return t
}
var fr = null
function Ru(e) {
	fr === null ? (fr = [e]) : fr.push(e)
}
function Lp(e, t, n, r) {
	var i = t.interleaved
	return i === null ? ((n.next = n), Ru(t)) : ((n.next = i.next), (i.next = n)), (t.interleaved = n), Sn(e, r)
}
function Sn(e, t) {
	e.lanes |= t
	var n = e.alternate
	for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
		(e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return)
	return n.tag === 3 ? n.stateNode : null
}
var Dn = !1
function ju(e) {
	e.updateQueue = {
		baseState: e.memoizedState,
		firstBaseUpdate: null,
		lastBaseUpdate: null,
		shared: { pending: null, interleaved: null, lanes: 0 },
		effects: null,
	}
}
function Np(e, t) {
	;(e = e.updateQueue),
		t.updateQueue === e &&
			(t.updateQueue = {
				baseState: e.baseState,
				firstBaseUpdate: e.firstBaseUpdate,
				lastBaseUpdate: e.lastBaseUpdate,
				shared: e.shared,
				effects: e.effects,
			})
}
function vn(e, t) {
	return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null }
}
function Kn(e, t, n) {
	var r = e.updateQueue
	if (r === null) return null
	if (((r = r.shared), se & 2)) {
		var i = r.pending
		return i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)), (r.pending = t), Sn(e, n)
	}
	return (
		(i = r.interleaved),
		i === null ? ((t.next = t), Ru(r)) : ((t.next = i.next), (i.next = t)),
		(r.interleaved = t),
		Sn(e, n)
	)
}
function no(e, t, n) {
	if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
		var r = t.lanes
		;(r &= e.pendingLanes), (n |= r), (t.lanes = n), vu(e, n)
	}
}
function Xc(e, t) {
	var n = e.updateQueue,
		r = e.alternate
	if (r !== null && ((r = r.updateQueue), n === r)) {
		var i = null,
			l = null
		if (((n = n.firstBaseUpdate), n !== null)) {
			do {
				var o = {
					eventTime: n.eventTime,
					lane: n.lane,
					tag: n.tag,
					payload: n.payload,
					callback: n.callback,
					next: null,
				}
				l === null ? (i = l = o) : (l = l.next = o), (n = n.next)
			} while (n !== null)
			l === null ? (i = l = t) : (l = l.next = t)
		} else i = l = t
		;(n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: l, shared: r.shared, effects: r.effects }),
			(e.updateQueue = n)
		return
	}
	;(e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t)
}
function No(e, t, n, r) {
	var i = e.updateQueue
	Dn = !1
	var l = i.firstBaseUpdate,
		o = i.lastBaseUpdate,
		a = i.shared.pending
	if (a !== null) {
		i.shared.pending = null
		var s = a,
			u = s.next
		;(s.next = null), o === null ? (l = u) : (o.next = u), (o = s)
		var c = e.alternate
		c !== null &&
			((c = c.updateQueue),
			(a = c.lastBaseUpdate),
			a !== o && (a === null ? (c.firstBaseUpdate = u) : (a.next = u), (c.lastBaseUpdate = s)))
	}
	if (l !== null) {
		var p = i.baseState
		;(o = 0), (c = u = s = null), (a = l)
		do {
			var m = a.lane,
				g = a.eventTime
			if ((r & m) === m) {
				c !== null &&
					(c = c.next = { eventTime: g, lane: 0, tag: a.tag, payload: a.payload, callback: a.callback, next: null })
				e: {
					var y = e,
						v = a
					switch (((m = t), (g = n), v.tag)) {
						case 1:
							if (((y = v.payload), typeof y == 'function')) {
								p = y.call(g, p, m)
								break e
							}
							p = y
							break e
						case 3:
							y.flags = (y.flags & -65537) | 128
						case 0:
							if (((y = v.payload), (m = typeof y == 'function' ? y.call(g, p, m) : y), m == null)) break e
							p = Ce({}, p, m)
							break e
						case 2:
							Dn = !0
					}
				}
				a.callback !== null &&
					a.lane !== 0 &&
					((e.flags |= 64), (m = i.effects), m === null ? (i.effects = [a]) : m.push(a))
			} else
				(g = { eventTime: g, lane: m, tag: a.tag, payload: a.payload, callback: a.callback, next: null }),
					c === null ? ((u = c = g), (s = p)) : (c = c.next = g),
					(o |= m)
			if (((a = a.next), a === null)) {
				if (((a = i.shared.pending), a === null)) break
				;(m = a), (a = m.next), (m.next = null), (i.lastBaseUpdate = m), (i.shared.pending = null)
			}
		} while (!0)
		if (
			(c === null && (s = p),
			(i.baseState = s),
			(i.firstBaseUpdate = u),
			(i.lastBaseUpdate = c),
			(t = i.shared.interleaved),
			t !== null)
		) {
			i = t
			do (o |= i.lane), (i = i.next)
			while (i !== t)
		} else l === null && (i.shared.lanes = 0)
		;(Er |= o), (e.lanes = o), (e.memoizedState = p)
	}
}
function Qc(e, t, n) {
	if (((e = t.effects), (t.effects = null), e !== null))
		for (t = 0; t < e.length; t++) {
			var r = e[t],
				i = r.callback
			if (i !== null) {
				if (((r.callback = null), (r = n), typeof i != 'function')) throw Error($(191, i))
				i.call(r)
			}
		}
}
var Rp = new Lf.Component().refs
function Ra(e, t, n, r) {
	;(t = e.memoizedState),
		(n = n(r, t)),
		(n = n == null ? t : Ce({}, t, n)),
		(e.memoizedState = n),
		e.lanes === 0 && (e.updateQueue.baseState = n)
}
var rs = {
	isMounted: function (e) {
		return (e = e._reactInternals) ? Nr(e) === e : !1
	},
	enqueueSetState: function (e, t, n) {
		e = e._reactInternals
		var r = nt(),
			i = Qn(e),
			l = vn(r, i)
		;(l.payload = t), n != null && (l.callback = n), (t = Kn(e, l, i)), t !== null && (Ft(t, e, i, r), no(t, e, i))
	},
	enqueueReplaceState: function (e, t, n) {
		e = e._reactInternals
		var r = nt(),
			i = Qn(e),
			l = vn(r, i)
		;(l.tag = 1),
			(l.payload = t),
			n != null && (l.callback = n),
			(t = Kn(e, l, i)),
			t !== null && (Ft(t, e, i, r), no(t, e, i))
	},
	enqueueForceUpdate: function (e, t) {
		e = e._reactInternals
		var n = nt(),
			r = Qn(e),
			i = vn(n, r)
		;(i.tag = 2), t != null && (i.callback = t), (t = Kn(e, i, r)), t !== null && (Ft(t, e, r, n), no(t, e, r))
	},
}
function qc(e, t, n, r, i, l, o) {
	return (
		(e = e.stateNode),
		typeof e.shouldComponentUpdate == 'function'
			? e.shouldComponentUpdate(r, l, o)
			: t.prototype && t.prototype.isPureReactComponent
			? !il(n, r) || !il(i, l)
			: !0
	)
}
function jp(e, t, n) {
	var r = !1,
		i = Zn,
		l = t.contextType
	return (
		typeof l == 'object' && l !== null
			? (l = Lt(l))
			: ((i = ct(t) ? wr : Qe.current), (r = t.contextTypes), (l = (r = r != null) ? ai(e, i) : Zn)),
		(t = new t(n, l)),
		(e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
		(t.updater = rs),
		(e.stateNode = t),
		(t._reactInternals = e),
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = i),
			(e.__reactInternalMemoizedMaskedChildContext = l)),
		t
	)
}
function Jc(e, t, n, r) {
	;(e = t.state),
		typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
		typeof t.UNSAFE_componentWillReceiveProps == 'function' && t.UNSAFE_componentWillReceiveProps(n, r),
		t.state !== e && rs.enqueueReplaceState(t, t.state, null)
}
function ja(e, t, n, r) {
	var i = e.stateNode
	;(i.props = n), (i.state = e.memoizedState), (i.refs = Rp), ju(e)
	var l = t.contextType
	typeof l == 'object' && l !== null ? (i.context = Lt(l)) : ((l = ct(t) ? wr : Qe.current), (i.context = ai(e, l))),
		(i.state = e.memoizedState),
		(l = t.getDerivedStateFromProps),
		typeof l == 'function' && (Ra(e, t, l, n), (i.state = e.memoizedState)),
		typeof t.getDerivedStateFromProps == 'function' ||
			typeof i.getSnapshotBeforeUpdate == 'function' ||
			(typeof i.UNSAFE_componentWillMount != 'function' && typeof i.componentWillMount != 'function') ||
			((t = i.state),
			typeof i.componentWillMount == 'function' && i.componentWillMount(),
			typeof i.UNSAFE_componentWillMount == 'function' && i.UNSAFE_componentWillMount(),
			t !== i.state && rs.enqueueReplaceState(i, i.state, null),
			No(e, n, i, r),
			(i.state = e.memoizedState)),
		typeof i.componentDidMount == 'function' && (e.flags |= 4194308)
}
function Pi(e, t, n) {
	if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
		if (n._owner) {
			if (((n = n._owner), n)) {
				if (n.tag !== 1) throw Error($(309))
				var r = n.stateNode
			}
			if (!r) throw Error($(147, e))
			var i = r,
				l = '' + e
			return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === l
				? t.ref
				: ((t = function (o) {
						var a = i.refs
						a === Rp && (a = i.refs = {}), o === null ? delete a[l] : (a[l] = o)
				  }),
				  (t._stringRef = l),
				  t)
		}
		if (typeof e != 'string') throw Error($(284))
		if (!n._owner) throw Error($(290, e))
	}
	return e
}
function Ul(e, t) {
	throw (
		((e = Object.prototype.toString.call(t)),
		Error($(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)))
	)
}
function Zc(e) {
	var t = e._init
	return t(e._payload)
}
function Op(e) {
	function t(h, d) {
		if (e) {
			var f = h.deletions
			f === null ? ((h.deletions = [d]), (h.flags |= 16)) : f.push(d)
		}
	}
	function n(h, d) {
		if (!e) return null
		for (; d !== null; ) t(h, d), (d = d.sibling)
		return null
	}
	function r(h, d) {
		for (h = new Map(); d !== null; ) d.key !== null ? h.set(d.key, d) : h.set(d.index, d), (d = d.sibling)
		return h
	}
	function i(h, d) {
		return (h = qn(h, d)), (h.index = 0), (h.sibling = null), h
	}
	function l(h, d, f) {
		return (
			(h.index = f),
			e
				? ((f = h.alternate), f !== null ? ((f = f.index), f < d ? ((h.flags |= 2), d) : f) : ((h.flags |= 2), d))
				: ((h.flags |= 1048576), d)
		)
	}
	function o(h) {
		return e && h.alternate === null && (h.flags |= 2), h
	}
	function a(h, d, f, w) {
		return d === null || d.tag !== 6 ? ((d = Bs(f, h.mode, w)), (d.return = h), d) : ((d = i(d, f)), (d.return = h), d)
	}
	function s(h, d, f, w) {
		var C = f.type
		return C === $r
			? c(h, d, f.props.children, w, f.key)
			: d !== null &&
			  (d.elementType === C || (typeof C == 'object' && C !== null && C.$$typeof === An && Zc(C) === d.type))
			? ((w = i(d, f.props)), (w.ref = Pi(h, d, f)), (w.return = h), w)
			: ((w = ao(f.type, f.key, f.props, null, h.mode, w)), (w.ref = Pi(h, d, f)), (w.return = h), w)
	}
	function u(h, d, f, w) {
		return d === null ||
			d.tag !== 4 ||
			d.stateNode.containerInfo !== f.containerInfo ||
			d.stateNode.implementation !== f.implementation
			? ((d = Us(f, h.mode, w)), (d.return = h), d)
			: ((d = i(d, f.children || [])), (d.return = h), d)
	}
	function c(h, d, f, w, C) {
		return d === null || d.tag !== 7
			? ((d = vr(f, h.mode, w, C)), (d.return = h), d)
			: ((d = i(d, f)), (d.return = h), d)
	}
	function p(h, d, f) {
		if ((typeof d == 'string' && d !== '') || typeof d == 'number')
			return (d = Bs('' + d, h.mode, f)), (d.return = h), d
		if (typeof d == 'object' && d !== null) {
			switch (d.$$typeof) {
				case Rl:
					return (f = ao(d.type, d.key, d.props, null, h.mode, f)), (f.ref = Pi(h, null, d)), (f.return = h), f
				case Fr:
					return (d = Us(d, h.mode, f)), (d.return = h), d
				case An:
					var w = d._init
					return p(h, w(d._payload), f)
			}
			if (Ai(d) || Si(d)) return (d = vr(d, h.mode, f, null)), (d.return = h), d
			Ul(h, d)
		}
		return null
	}
	function m(h, d, f, w) {
		var C = d !== null ? d.key : null
		if ((typeof f == 'string' && f !== '') || typeof f == 'number') return C !== null ? null : a(h, d, '' + f, w)
		if (typeof f == 'object' && f !== null) {
			switch (f.$$typeof) {
				case Rl:
					return f.key === C ? s(h, d, f, w) : null
				case Fr:
					return f.key === C ? u(h, d, f, w) : null
				case An:
					return (C = f._init), m(h, d, C(f._payload), w)
			}
			if (Ai(f) || Si(f)) return C !== null ? null : c(h, d, f, w, null)
			Ul(h, f)
		}
		return null
	}
	function g(h, d, f, w, C) {
		if ((typeof w == 'string' && w !== '') || typeof w == 'number') return (h = h.get(f) || null), a(d, h, '' + w, C)
		if (typeof w == 'object' && w !== null) {
			switch (w.$$typeof) {
				case Rl:
					return (h = h.get(w.key === null ? f : w.key) || null), s(d, h, w, C)
				case Fr:
					return (h = h.get(w.key === null ? f : w.key) || null), u(d, h, w, C)
				case An:
					var S = w._init
					return g(h, d, f, S(w._payload), C)
			}
			if (Ai(w) || Si(w)) return (h = h.get(f) || null), c(d, h, w, C, null)
			Ul(d, w)
		}
		return null
	}
	function y(h, d, f, w) {
		for (var C = null, S = null, b = d, N = (d = 0), _ = null; b !== null && N < f.length; N++) {
			b.index > N ? ((_ = b), (b = null)) : (_ = b.sibling)
			var L = m(h, b, f[N], w)
			if (L === null) {
				b === null && (b = _)
				break
			}
			e && b && L.alternate === null && t(h, b),
				(d = l(L, d, N)),
				S === null ? (C = L) : (S.sibling = L),
				(S = L),
				(b = _)
		}
		if (N === f.length) return n(h, b), we && ar(h, N), C
		if (b === null) {
			for (; N < f.length; N++)
				(b = p(h, f[N], w)), b !== null && ((d = l(b, d, N)), S === null ? (C = b) : (S.sibling = b), (S = b))
			return we && ar(h, N), C
		}
		for (b = r(h, b); N < f.length; N++)
			(_ = g(b, h, N, f[N], w)),
				_ !== null &&
					(e && _.alternate !== null && b.delete(_.key === null ? N : _.key),
					(d = l(_, d, N)),
					S === null ? (C = _) : (S.sibling = _),
					(S = _))
		return (
			e &&
				b.forEach(function (j) {
					return t(h, j)
				}),
			we && ar(h, N),
			C
		)
	}
	function v(h, d, f, w) {
		var C = Si(f)
		if (typeof C != 'function') throw Error($(150))
		if (((f = C.call(f)), f == null)) throw Error($(151))
		for (var S = (C = null), b = d, N = (d = 0), _ = null, L = f.next(); b !== null && !L.done; N++, L = f.next()) {
			b.index > N ? ((_ = b), (b = null)) : (_ = b.sibling)
			var j = m(h, b, L.value, w)
			if (j === null) {
				b === null && (b = _)
				break
			}
			e && b && j.alternate === null && t(h, b),
				(d = l(j, d, N)),
				S === null ? (C = j) : (S.sibling = j),
				(S = j),
				(b = _)
		}
		if (L.done) return n(h, b), we && ar(h, N), C
		if (b === null) {
			for (; !L.done; N++, L = f.next())
				(L = p(h, L.value, w)), L !== null && ((d = l(L, d, N)), S === null ? (C = L) : (S.sibling = L), (S = L))
			return we && ar(h, N), C
		}
		for (b = r(h, b); !L.done; N++, L = f.next())
			(L = g(b, h, N, L.value, w)),
				L !== null &&
					(e && L.alternate !== null && b.delete(L.key === null ? N : L.key),
					(d = l(L, d, N)),
					S === null ? (C = L) : (S.sibling = L),
					(S = L))
		return (
			e &&
				b.forEach(function (I) {
					return t(h, I)
				}),
			we && ar(h, N),
			C
		)
	}
	function E(h, d, f, w) {
		if (
			(typeof f == 'object' && f !== null && f.type === $r && f.key === null && (f = f.props.children),
			typeof f == 'object' && f !== null)
		) {
			switch (f.$$typeof) {
				case Rl:
					e: {
						for (var C = f.key, S = d; S !== null; ) {
							if (S.key === C) {
								if (((C = f.type), C === $r)) {
									if (S.tag === 7) {
										n(h, S.sibling), (d = i(S, f.props.children)), (d.return = h), (h = d)
										break e
									}
								} else if (
									S.elementType === C ||
									(typeof C == 'object' && C !== null && C.$$typeof === An && Zc(C) === S.type)
								) {
									n(h, S.sibling), (d = i(S, f.props)), (d.ref = Pi(h, S, f)), (d.return = h), (h = d)
									break e
								}
								n(h, S)
								break
							} else t(h, S)
							S = S.sibling
						}
						f.type === $r
							? ((d = vr(f.props.children, h.mode, w, f.key)), (d.return = h), (h = d))
							: ((w = ao(f.type, f.key, f.props, null, h.mode, w)), (w.ref = Pi(h, d, f)), (w.return = h), (h = w))
					}
					return o(h)
				case Fr:
					e: {
						for (S = f.key; d !== null; ) {
							if (d.key === S)
								if (
									d.tag === 4 &&
									d.stateNode.containerInfo === f.containerInfo &&
									d.stateNode.implementation === f.implementation
								) {
									n(h, d.sibling), (d = i(d, f.children || [])), (d.return = h), (h = d)
									break e
								} else {
									n(h, d)
									break
								}
							else t(h, d)
							d = d.sibling
						}
						;(d = Us(f, h.mode, w)), (d.return = h), (h = d)
					}
					return o(h)
				case An:
					return (S = f._init), E(h, d, S(f._payload), w)
			}
			if (Ai(f)) return y(h, d, f, w)
			if (Si(f)) return v(h, d, f, w)
			Ul(h, f)
		}
		return (typeof f == 'string' && f !== '') || typeof f == 'number'
			? ((f = '' + f),
			  d !== null && d.tag === 6
					? (n(h, d.sibling), (d = i(d, f)), (d.return = h), (h = d))
					: (n(h, d), (d = Bs(f, h.mode, w)), (d.return = h), (h = d)),
			  o(h))
			: n(h, d)
	}
	return E
}
var ci = Op(!0),
	Mp = Op(!1),
	Cl = {},
	nn = rr(Cl),
	al = rr(Cl),
	ul = rr(Cl)
function pr(e) {
	if (e === Cl) throw Error($(174))
	return e
}
function Ou(e, t) {
	switch ((me(ul, t), me(al, e), me(nn, Cl), (e = t.nodeType), e)) {
		case 9:
		case 11:
			t = (t = t.documentElement) ? t.namespaceURI : ca(null, '')
			break
		default:
			;(e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = ca(t, e))
	}
	ye(nn), me(nn, t)
}
function di() {
	ye(nn), ye(al), ye(ul)
}
function Ip(e) {
	pr(ul.current)
	var t = pr(nn.current),
		n = ca(t, e.type)
	t !== n && (me(al, e), me(nn, n))
}
function Mu(e) {
	al.current === e && (ye(nn), ye(al))
}
var Se = rr(0)
function Ro(e) {
	for (var t = e; t !== null; ) {
		if (t.tag === 13) {
			var n = t.memoizedState
			if (n !== null && ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')) return t
		} else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
			if (t.flags & 128) return t
		} else if (t.child !== null) {
			;(t.child.return = t), (t = t.child)
			continue
		}
		if (t === e) break
		for (; t.sibling === null; ) {
			if (t.return === null || t.return === e) return null
			t = t.return
		}
		;(t.sibling.return = t.return), (t = t.sibling)
	}
	return null
}
var Is = []
function Iu() {
	for (var e = 0; e < Is.length; e++) Is[e]._workInProgressVersionPrimary = null
	Is.length = 0
}
var ro = Tn.ReactCurrentDispatcher,
	As = Tn.ReactCurrentBatchConfig,
	Sr = 0,
	Ee = null,
	ze = null,
	$e = null,
	jo = !1,
	Wi = !1,
	cl = 0,
	kv = 0
function Ye() {
	throw Error($(321))
}
function Au(e, t) {
	if (t === null) return !1
	for (var n = 0; n < t.length && n < e.length; n++) if (!$t(e[n], t[n])) return !1
	return !0
}
function Du(e, t, n, r, i, l) {
	if (
		((Sr = l),
		(Ee = t),
		(t.memoizedState = null),
		(t.updateQueue = null),
		(t.lanes = 0),
		(ro.current = e === null || e.memoizedState === null ? Lv : Nv),
		(e = n(r, i)),
		Wi)
	) {
		l = 0
		do {
			if (((Wi = !1), (cl = 0), 25 <= l)) throw Error($(301))
			;(l += 1), ($e = ze = null), (t.updateQueue = null), (ro.current = Rv), (e = n(r, i))
		} while (Wi)
	}
	if (((ro.current = Oo), (t = ze !== null && ze.next !== null), (Sr = 0), ($e = ze = Ee = null), (jo = !1), t))
		throw Error($(300))
	return e
}
function zu() {
	var e = cl !== 0
	return (cl = 0), e
}
function Jt() {
	var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }
	return $e === null ? (Ee.memoizedState = $e = e) : ($e = $e.next = e), $e
}
function Nt() {
	if (ze === null) {
		var e = Ee.alternate
		e = e !== null ? e.memoizedState : null
	} else e = ze.next
	var t = $e === null ? Ee.memoizedState : $e.next
	if (t !== null) ($e = t), (ze = e)
	else {
		if (e === null) throw Error($(310))
		;(ze = e),
			(e = {
				memoizedState: ze.memoizedState,
				baseState: ze.baseState,
				baseQueue: ze.baseQueue,
				queue: ze.queue,
				next: null,
			}),
			$e === null ? (Ee.memoizedState = $e = e) : ($e = $e.next = e)
	}
	return $e
}
function dl(e, t) {
	return typeof t == 'function' ? t(e) : t
}
function Ds(e) {
	var t = Nt(),
		n = t.queue
	if (n === null) throw Error($(311))
	n.lastRenderedReducer = e
	var r = ze,
		i = r.baseQueue,
		l = n.pending
	if (l !== null) {
		if (i !== null) {
			var o = i.next
			;(i.next = l.next), (l.next = o)
		}
		;(r.baseQueue = i = l), (n.pending = null)
	}
	if (i !== null) {
		;(l = i.next), (r = r.baseState)
		var a = (o = null),
			s = null,
			u = l
		do {
			var c = u.lane
			if ((Sr & c) === c)
				s !== null &&
					(s = s.next =
						{ lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }),
					(r = u.hasEagerState ? u.eagerState : e(r, u.action))
			else {
				var p = { lane: c, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }
				s === null ? ((a = s = p), (o = r)) : (s = s.next = p), (Ee.lanes |= c), (Er |= c)
			}
			u = u.next
		} while (u !== null && u !== l)
		s === null ? (o = r) : (s.next = a),
			$t(r, t.memoizedState) || (at = !0),
			(t.memoizedState = r),
			(t.baseState = o),
			(t.baseQueue = s),
			(n.lastRenderedState = r)
	}
	if (((e = n.interleaved), e !== null)) {
		i = e
		do (l = i.lane), (Ee.lanes |= l), (Er |= l), (i = i.next)
		while (i !== e)
	} else i === null && (n.lanes = 0)
	return [t.memoizedState, n.dispatch]
}
function zs(e) {
	var t = Nt(),
		n = t.queue
	if (n === null) throw Error($(311))
	n.lastRenderedReducer = e
	var r = n.dispatch,
		i = n.pending,
		l = t.memoizedState
	if (i !== null) {
		n.pending = null
		var o = (i = i.next)
		do (l = e(l, o.action)), (o = o.next)
		while (o !== i)
		$t(l, t.memoizedState) || (at = !0),
			(t.memoizedState = l),
			t.baseQueue === null && (t.baseState = l),
			(n.lastRenderedState = l)
	}
	return [l, r]
}
function Ap() {}
function Dp(e, t) {
	var n = Ee,
		r = Nt(),
		i = t(),
		l = !$t(r.memoizedState, i)
	if (
		(l && ((r.memoizedState = i), (at = !0)),
		(r = r.queue),
		Fu($p.bind(null, n, r, e), [e]),
		r.getSnapshot !== t || l || ($e !== null && $e.memoizedState.tag & 1))
	) {
		if (((n.flags |= 2048), fl(9, Fp.bind(null, n, r, i, t), void 0, null), Be === null)) throw Error($(349))
		Sr & 30 || zp(n, t, i)
	}
	return i
}
function zp(e, t, n) {
	;(e.flags |= 16384),
		(e = { getSnapshot: t, value: n }),
		(t = Ee.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }), (Ee.updateQueue = t), (t.stores = [e]))
			: ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e))
}
function Fp(e, t, n, r) {
	;(t.value = n), (t.getSnapshot = r), Bp(t) && Up(e)
}
function $p(e, t, n) {
	return n(function () {
		Bp(t) && Up(e)
	})
}
function Bp(e) {
	var t = e.getSnapshot
	e = e.value
	try {
		var n = t()
		return !$t(e, n)
	} catch {
		return !0
	}
}
function Up(e) {
	var t = Sn(e, 1)
	t !== null && Ft(t, e, 1, -1)
}
function ed(e) {
	var t = Jt()
	return (
		typeof e == 'function' && (e = e()),
		(t.memoizedState = t.baseState = e),
		(e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: dl, lastRenderedState: e }),
		(t.queue = e),
		(e = e.dispatch = bv.bind(null, Ee, e)),
		[t.memoizedState, e]
	)
}
function fl(e, t, n, r) {
	return (
		(e = { tag: e, create: t, destroy: n, deps: r, next: null }),
		(t = Ee.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }), (Ee.updateQueue = t), (t.lastEffect = e.next = e))
			: ((n = t.lastEffect),
			  n === null ? (t.lastEffect = e.next = e) : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
		e
	)
}
function Vp() {
	return Nt().memoizedState
}
function io(e, t, n, r) {
	var i = Jt()
	;(Ee.flags |= e), (i.memoizedState = fl(1 | t, n, void 0, r === void 0 ? null : r))
}
function is(e, t, n, r) {
	var i = Nt()
	r = r === void 0 ? null : r
	var l = void 0
	if (ze !== null) {
		var o = ze.memoizedState
		if (((l = o.destroy), r !== null && Au(r, o.deps))) {
			i.memoizedState = fl(t, n, l, r)
			return
		}
	}
	;(Ee.flags |= e), (i.memoizedState = fl(1 | t, n, l, r))
}
function td(e, t) {
	return io(8390656, 8, e, t)
}
function Fu(e, t) {
	return is(2048, 8, e, t)
}
function Hp(e, t) {
	return is(4, 2, e, t)
}
function Wp(e, t) {
	return is(4, 4, e, t)
}
function Gp(e, t) {
	if (typeof t == 'function')
		return (
			(e = e()),
			t(e),
			function () {
				t(null)
			}
		)
	if (t != null)
		return (
			(e = e()),
			(t.current = e),
			function () {
				t.current = null
			}
		)
}
function Yp(e, t, n) {
	return (n = n != null ? n.concat([e]) : null), is(4, 4, Gp.bind(null, t, e), n)
}
function $u() {}
function Kp(e, t) {
	var n = Nt()
	t = t === void 0 ? null : t
	var r = n.memoizedState
	return r !== null && t !== null && Au(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e)
}
function Xp(e, t) {
	var n = Nt()
	t = t === void 0 ? null : t
	var r = n.memoizedState
	return r !== null && t !== null && Au(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e)
}
function Qp(e, t, n) {
	return Sr & 21
		? ($t(n, t) || ((n = Zf()), (Ee.lanes |= n), (Er |= n), (e.baseState = !0)), t)
		: (e.baseState && ((e.baseState = !1), (at = !0)), (e.memoizedState = n))
}
function Pv(e, t) {
	var n = pe
	;(pe = n !== 0 && 4 > n ? n : 4), e(!0)
	var r = As.transition
	As.transition = {}
	try {
		e(!1), t()
	} finally {
		;(pe = n), (As.transition = r)
	}
}
function qp() {
	return Nt().memoizedState
}
function _v(e, t, n) {
	var r = Qn(e)
	if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Jp(e))) Zp(t, n)
	else if (((n = Lp(e, t, n, r)), n !== null)) {
		var i = nt()
		Ft(n, e, r, i), eh(n, t, r)
	}
}
function bv(e, t, n) {
	var r = Qn(e),
		i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }
	if (Jp(e)) Zp(t, i)
	else {
		var l = e.alternate
		if (e.lanes === 0 && (l === null || l.lanes === 0) && ((l = t.lastRenderedReducer), l !== null))
			try {
				var o = t.lastRenderedState,
					a = l(o, n)
				if (((i.hasEagerState = !0), (i.eagerState = a), $t(a, o))) {
					var s = t.interleaved
					s === null ? ((i.next = i), Ru(t)) : ((i.next = s.next), (s.next = i)), (t.interleaved = i)
					return
				}
			} catch {
			} finally {
			}
		;(n = Lp(e, t, i, r)), n !== null && ((i = nt()), Ft(n, e, r, i), eh(n, t, r))
	}
}
function Jp(e) {
	var t = e.alternate
	return e === Ee || (t !== null && t === Ee)
}
function Zp(e, t) {
	Wi = jo = !0
	var n = e.pending
	n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t)
}
function eh(e, t, n) {
	if (n & 4194240) {
		var r = t.lanes
		;(r &= e.pendingLanes), (n |= r), (t.lanes = n), vu(e, n)
	}
}
var Oo = {
		readContext: Lt,
		useCallback: Ye,
		useContext: Ye,
		useEffect: Ye,
		useImperativeHandle: Ye,
		useInsertionEffect: Ye,
		useLayoutEffect: Ye,
		useMemo: Ye,
		useReducer: Ye,
		useRef: Ye,
		useState: Ye,
		useDebugValue: Ye,
		useDeferredValue: Ye,
		useTransition: Ye,
		useMutableSource: Ye,
		useSyncExternalStore: Ye,
		useId: Ye,
		unstable_isNewReconciler: !1,
	},
	Lv = {
		readContext: Lt,
		useCallback: function (e, t) {
			return (Jt().memoizedState = [e, t === void 0 ? null : t]), e
		},
		useContext: Lt,
		useEffect: td,
		useImperativeHandle: function (e, t, n) {
			return (n = n != null ? n.concat([e]) : null), io(4194308, 4, Gp.bind(null, t, e), n)
		},
		useLayoutEffect: function (e, t) {
			return io(4194308, 4, e, t)
		},
		useInsertionEffect: function (e, t) {
			return io(4, 2, e, t)
		},
		useMemo: function (e, t) {
			var n = Jt()
			return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
		},
		useReducer: function (e, t, n) {
			var r = Jt()
			return (
				(t = n !== void 0 ? n(t) : t),
				(r.memoizedState = r.baseState = t),
				(e = {
					pending: null,
					interleaved: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: e,
					lastRenderedState: t,
				}),
				(r.queue = e),
				(e = e.dispatch = _v.bind(null, Ee, e)),
				[r.memoizedState, e]
			)
		},
		useRef: function (e) {
			var t = Jt()
			return (e = { current: e }), (t.memoizedState = e)
		},
		useState: ed,
		useDebugValue: $u,
		useDeferredValue: function (e) {
			return (Jt().memoizedState = e)
		},
		useTransition: function () {
			var e = ed(!1),
				t = e[0]
			return (e = Pv.bind(null, e[1])), (Jt().memoizedState = e), [t, e]
		},
		useMutableSource: function () {},
		useSyncExternalStore: function (e, t, n) {
			var r = Ee,
				i = Jt()
			if (we) {
				if (n === void 0) throw Error($(407))
				n = n()
			} else {
				if (((n = t()), Be === null)) throw Error($(349))
				Sr & 30 || zp(r, t, n)
			}
			i.memoizedState = n
			var l = { value: n, getSnapshot: t }
			return (
				(i.queue = l),
				td($p.bind(null, r, l, e), [e]),
				(r.flags |= 2048),
				fl(9, Fp.bind(null, r, l, n, t), void 0, null),
				n
			)
		},
		useId: function () {
			var e = Jt(),
				t = Be.identifierPrefix
			if (we) {
				var n = gn,
					r = mn
				;(n = (r & ~(1 << (32 - zt(r) - 1))).toString(32) + n),
					(t = ':' + t + 'R' + n),
					(n = cl++),
					0 < n && (t += 'H' + n.toString(32)),
					(t += ':')
			} else (n = kv++), (t = ':' + t + 'r' + n.toString(32) + ':')
			return (e.memoizedState = t)
		},
		unstable_isNewReconciler: !1,
	},
	Nv = {
		readContext: Lt,
		useCallback: Kp,
		useContext: Lt,
		useEffect: Fu,
		useImperativeHandle: Yp,
		useInsertionEffect: Hp,
		useLayoutEffect: Wp,
		useMemo: Xp,
		useReducer: Ds,
		useRef: Vp,
		useState: function () {
			return Ds(dl)
		},
		useDebugValue: $u,
		useDeferredValue: function (e) {
			var t = Nt()
			return Qp(t, ze.memoizedState, e)
		},
		useTransition: function () {
			var e = Ds(dl)[0],
				t = Nt().memoizedState
			return [e, t]
		},
		useMutableSource: Ap,
		useSyncExternalStore: Dp,
		useId: qp,
		unstable_isNewReconciler: !1,
	},
	Rv = {
		readContext: Lt,
		useCallback: Kp,
		useContext: Lt,
		useEffect: Fu,
		useImperativeHandle: Yp,
		useInsertionEffect: Hp,
		useLayoutEffect: Wp,
		useMemo: Xp,
		useReducer: zs,
		useRef: Vp,
		useState: function () {
			return zs(dl)
		},
		useDebugValue: $u,
		useDeferredValue: function (e) {
			var t = Nt()
			return ze === null ? (t.memoizedState = e) : Qp(t, ze.memoizedState, e)
		},
		useTransition: function () {
			var e = zs(dl)[0],
				t = Nt().memoizedState
			return [e, t]
		},
		useMutableSource: Ap,
		useSyncExternalStore: Dp,
		useId: qp,
		unstable_isNewReconciler: !1,
	}
function fi(e, t) {
	try {
		var n = '',
			r = t
		do (n += lg(r)), (r = r.return)
		while (r)
		var i = n
	} catch (l) {
		i =
			`
Error generating stack: ` +
			l.message +
			`
` +
			l.stack
	}
	return { value: e, source: t, stack: i, digest: null }
}
function Fs(e, t, n) {
	return { value: e, source: null, stack: n ?? null, digest: t ?? null }
}
function Oa(e, t) {
	try {
		console.error(t.value)
	} catch (n) {
		setTimeout(function () {
			throw n
		})
	}
}
var jv = typeof WeakMap == 'function' ? WeakMap : Map
function th(e, t, n) {
	;(n = vn(-1, n)), (n.tag = 3), (n.payload = { element: null })
	var r = t.value
	return (
		(n.callback = function () {
			Io || ((Io = !0), (Va = r)), Oa(e, t)
		}),
		n
	)
}
function nh(e, t, n) {
	;(n = vn(-1, n)), (n.tag = 3)
	var r = e.type.getDerivedStateFromError
	if (typeof r == 'function') {
		var i = t.value
		;(n.payload = function () {
			return r(i)
		}),
			(n.callback = function () {
				Oa(e, t)
			})
	}
	var l = e.stateNode
	return (
		l !== null &&
			typeof l.componentDidCatch == 'function' &&
			(n.callback = function () {
				Oa(e, t), typeof r != 'function' && (Xn === null ? (Xn = new Set([this])) : Xn.add(this))
				var o = t.stack
				this.componentDidCatch(t.value, { componentStack: o !== null ? o : '' })
			}),
		n
	)
}
function nd(e, t, n) {
	var r = e.pingCache
	if (r === null) {
		r = e.pingCache = new jv()
		var i = new Set()
		r.set(t, i)
	} else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i))
	i.has(n) || (i.add(n), (e = Gv.bind(null, e, t, n)), t.then(e, e))
}
function rd(e) {
	do {
		var t
		if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e
		e = e.return
	} while (e !== null)
	return null
}
function id(e, t, n, r, i) {
	return e.mode & 1
		? ((e.flags |= 65536), (e.lanes = i), e)
		: (e === t
				? (e.flags |= 65536)
				: ((e.flags |= 128),
				  (n.flags |= 131072),
				  (n.flags &= -52805),
				  n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((t = vn(-1, 1)), (t.tag = 2), Kn(n, t, 1))),
				  (n.lanes |= 1)),
		  e)
}
var Ov = Tn.ReactCurrentOwner,
	at = !1
function tt(e, t, n, r) {
	t.child = e === null ? Mp(t, null, n, r) : ci(t, e.child, n, r)
}
function ld(e, t, n, r, i) {
	n = n.render
	var l = t.ref
	return (
		ri(t, i),
		(r = Du(e, t, n, r, l, i)),
		(n = zu()),
		e !== null && !at
			? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), En(e, t, i))
			: (we && n && ku(t), (t.flags |= 1), tt(e, t, r, i), t.child)
	)
}
function od(e, t, n, r, i) {
	if (e === null) {
		var l = n.type
		return typeof l == 'function' &&
			!Ku(l) &&
			l.defaultProps === void 0 &&
			n.compare === null &&
			n.defaultProps === void 0
			? ((t.tag = 15), (t.type = l), rh(e, t, l, r, i))
			: ((e = ao(n.type, null, r, t, t.mode, i)), (e.ref = t.ref), (e.return = t), (t.child = e))
	}
	if (((l = e.child), !(e.lanes & i))) {
		var o = l.memoizedProps
		if (((n = n.compare), (n = n !== null ? n : il), n(o, r) && e.ref === t.ref)) return En(e, t, i)
	}
	return (t.flags |= 1), (e = qn(l, r)), (e.ref = t.ref), (e.return = t), (t.child = e)
}
function rh(e, t, n, r, i) {
	if (e !== null) {
		var l = e.memoizedProps
		if (il(l, r) && e.ref === t.ref)
			if (((at = !1), (t.pendingProps = r = l), (e.lanes & i) !== 0)) e.flags & 131072 && (at = !0)
			else return (t.lanes = e.lanes), En(e, t, i)
	}
	return Ma(e, t, n, r, i)
}
function ih(e, t, n) {
	var r = t.pendingProps,
		i = r.children,
		l = e !== null ? e.memoizedState : null
	if (r.mode === 'hidden')
		if (!(t.mode & 1)) (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), me(Qr, pt), (pt |= n)
		else {
			if (!(n & 1073741824))
				return (
					(e = l !== null ? l.baseLanes | n : n),
					(t.lanes = t.childLanes = 1073741824),
					(t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
					(t.updateQueue = null),
					me(Qr, pt),
					(pt |= e),
					null
				)
			;(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				(r = l !== null ? l.baseLanes : n),
				me(Qr, pt),
				(pt |= r)
		}
	else l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n), me(Qr, pt), (pt |= r)
	return tt(e, t, i, n), t.child
}
function lh(e, t) {
	var n = t.ref
	;((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152))
}
function Ma(e, t, n, r, i) {
	var l = ct(n) ? wr : Qe.current
	return (
		(l = ai(t, l)),
		ri(t, i),
		(n = Du(e, t, n, r, l, i)),
		(r = zu()),
		e !== null && !at
			? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), En(e, t, i))
			: (we && r && ku(t), (t.flags |= 1), tt(e, t, n, i), t.child)
	)
}
function sd(e, t, n, r, i) {
	if (ct(n)) {
		var l = !0
		ko(t)
	} else l = !1
	if ((ri(t, i), t.stateNode === null)) lo(e, t), jp(t, n, r), ja(t, n, r, i), (r = !0)
	else if (e === null) {
		var o = t.stateNode,
			a = t.memoizedProps
		o.props = a
		var s = o.context,
			u = n.contextType
		typeof u == 'object' && u !== null ? (u = Lt(u)) : ((u = ct(n) ? wr : Qe.current), (u = ai(t, u)))
		var c = n.getDerivedStateFromProps,
			p = typeof c == 'function' || typeof o.getSnapshotBeforeUpdate == 'function'
		p ||
			(typeof o.UNSAFE_componentWillReceiveProps != 'function' && typeof o.componentWillReceiveProps != 'function') ||
			((a !== r || s !== u) && Jc(t, o, r, u)),
			(Dn = !1)
		var m = t.memoizedState
		;(o.state = m),
			No(t, r, o, i),
			(s = t.memoizedState),
			a !== r || m !== s || ut.current || Dn
				? (typeof c == 'function' && (Ra(t, n, c, r), (s = t.memoizedState)),
				  (a = Dn || qc(t, n, a, r, m, s, u))
						? (p ||
								(typeof o.UNSAFE_componentWillMount != 'function' && typeof o.componentWillMount != 'function') ||
								(typeof o.componentWillMount == 'function' && o.componentWillMount(),
								typeof o.UNSAFE_componentWillMount == 'function' && o.UNSAFE_componentWillMount()),
						  typeof o.componentDidMount == 'function' && (t.flags |= 4194308))
						: (typeof o.componentDidMount == 'function' && (t.flags |= 4194308),
						  (t.memoizedProps = r),
						  (t.memoizedState = s)),
				  (o.props = r),
				  (o.state = s),
				  (o.context = u),
				  (r = a))
				: (typeof o.componentDidMount == 'function' && (t.flags |= 4194308), (r = !1))
	} else {
		;(o = t.stateNode),
			Np(e, t),
			(a = t.memoizedProps),
			(u = t.type === t.elementType ? a : Mt(t.type, a)),
			(o.props = u),
			(p = t.pendingProps),
			(m = o.context),
			(s = n.contextType),
			typeof s == 'object' && s !== null ? (s = Lt(s)) : ((s = ct(n) ? wr : Qe.current), (s = ai(t, s)))
		var g = n.getDerivedStateFromProps
		;(c = typeof g == 'function' || typeof o.getSnapshotBeforeUpdate == 'function') ||
			(typeof o.UNSAFE_componentWillReceiveProps != 'function' && typeof o.componentWillReceiveProps != 'function') ||
			((a !== p || m !== s) && Jc(t, o, r, s)),
			(Dn = !1),
			(m = t.memoizedState),
			(o.state = m),
			No(t, r, o, i)
		var y = t.memoizedState
		a !== p || m !== y || ut.current || Dn
			? (typeof g == 'function' && (Ra(t, n, g, r), (y = t.memoizedState)),
			  (u = Dn || qc(t, n, u, r, m, y, s) || !1)
					? (c ||
							(typeof o.UNSAFE_componentWillUpdate != 'function' && typeof o.componentWillUpdate != 'function') ||
							(typeof o.componentWillUpdate == 'function' && o.componentWillUpdate(r, y, s),
							typeof o.UNSAFE_componentWillUpdate == 'function' && o.UNSAFE_componentWillUpdate(r, y, s)),
					  typeof o.componentDidUpdate == 'function' && (t.flags |= 4),
					  typeof o.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
					: (typeof o.componentDidUpdate != 'function' ||
							(a === e.memoizedProps && m === e.memoizedState) ||
							(t.flags |= 4),
					  typeof o.getSnapshotBeforeUpdate != 'function' ||
							(a === e.memoizedProps && m === e.memoizedState) ||
							(t.flags |= 1024),
					  (t.memoizedProps = r),
					  (t.memoizedState = y)),
			  (o.props = r),
			  (o.state = y),
			  (o.context = s),
			  (r = u))
			: (typeof o.componentDidUpdate != 'function' ||
					(a === e.memoizedProps && m === e.memoizedState) ||
					(t.flags |= 4),
			  typeof o.getSnapshotBeforeUpdate != 'function' ||
					(a === e.memoizedProps && m === e.memoizedState) ||
					(t.flags |= 1024),
			  (r = !1))
	}
	return Ia(e, t, n, r, l, i)
}
function Ia(e, t, n, r, i, l) {
	lh(e, t)
	var o = (t.flags & 128) !== 0
	if (!r && !o) return i && Gc(t, n, !1), En(e, t, l)
	;(r = t.stateNode), (Ov.current = t)
	var a = o && typeof n.getDerivedStateFromError != 'function' ? null : r.render()
	return (
		(t.flags |= 1),
		e !== null && o ? ((t.child = ci(t, e.child, null, l)), (t.child = ci(t, null, a, l))) : tt(e, t, a, l),
		(t.memoizedState = r.state),
		i && Gc(t, n, !0),
		t.child
	)
}
function oh(e) {
	var t = e.stateNode
	t.pendingContext ? Wc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Wc(e, t.context, !1),
		Ou(e, t.containerInfo)
}
function ad(e, t, n, r, i) {
	return ui(), _u(i), (t.flags |= 256), tt(e, t, n, r), t.child
}
var Aa = { dehydrated: null, treeContext: null, retryLane: 0 }
function Da(e) {
	return { baseLanes: e, cachePool: null, transitions: null }
}
function sh(e, t, n) {
	var r = t.pendingProps,
		i = Se.current,
		l = !1,
		o = (t.flags & 128) !== 0,
		a
	if (
		((a = o) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
		a ? ((l = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (i |= 1),
		me(Se, i & 1),
		e === null)
	)
		return (
			La(t),
			(e = t.memoizedState),
			e !== null && ((e = e.dehydrated), e !== null)
				? (t.mode & 1 ? (e.data === '$!' ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null)
				: ((o = r.children),
				  (e = r.fallback),
				  l
						? ((r = t.mode),
						  (l = t.child),
						  (o = { mode: 'hidden', children: o }),
						  !(r & 1) && l !== null ? ((l.childLanes = 0), (l.pendingProps = o)) : (l = ss(o, r, 0, null)),
						  (e = vr(e, r, n, null)),
						  (l.return = t),
						  (e.return = t),
						  (l.sibling = e),
						  (t.child = l),
						  (t.child.memoizedState = Da(n)),
						  (t.memoizedState = Aa),
						  e)
						: Bu(t, o))
		)
	if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null))) return Mv(e, t, o, r, a, i, n)
	if (l) {
		;(l = r.fallback), (o = t.mode), (i = e.child), (a = i.sibling)
		var s = { mode: 'hidden', children: r.children }
		return (
			!(o & 1) && t.child !== i
				? ((r = t.child), (r.childLanes = 0), (r.pendingProps = s), (t.deletions = null))
				: ((r = qn(i, s)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
			a !== null ? (l = qn(a, l)) : ((l = vr(l, o, n, null)), (l.flags |= 2)),
			(l.return = t),
			(r.return = t),
			(r.sibling = l),
			(t.child = r),
			(r = l),
			(l = t.child),
			(o = e.child.memoizedState),
			(o = o === null ? Da(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }),
			(l.memoizedState = o),
			(l.childLanes = e.childLanes & ~n),
			(t.memoizedState = Aa),
			r
		)
	}
	return (
		(l = e.child),
		(e = l.sibling),
		(r = qn(l, { mode: 'visible', children: r.children })),
		!(t.mode & 1) && (r.lanes = n),
		(r.return = t),
		(r.sibling = null),
		e !== null && ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
		(t.child = r),
		(t.memoizedState = null),
		r
	)
}
function Bu(e, t) {
	return (t = ss({ mode: 'visible', children: t }, e.mode, 0, null)), (t.return = e), (e.child = t)
}
function Vl(e, t, n, r) {
	return (
		r !== null && _u(r),
		ci(t, e.child, null, n),
		(e = Bu(t, t.pendingProps.children)),
		(e.flags |= 2),
		(t.memoizedState = null),
		e
	)
}
function Mv(e, t, n, r, i, l, o) {
	if (n)
		return t.flags & 256
			? ((t.flags &= -257), (r = Fs(Error($(422)))), Vl(e, t, o, r))
			: t.memoizedState !== null
			? ((t.child = e.child), (t.flags |= 128), null)
			: ((l = r.fallback),
			  (i = t.mode),
			  (r = ss({ mode: 'visible', children: r.children }, i, 0, null)),
			  (l = vr(l, i, o, null)),
			  (l.flags |= 2),
			  (r.return = t),
			  (l.return = t),
			  (r.sibling = l),
			  (t.child = r),
			  t.mode & 1 && ci(t, e.child, null, o),
			  (t.child.memoizedState = Da(o)),
			  (t.memoizedState = Aa),
			  l)
	if (!(t.mode & 1)) return Vl(e, t, o, null)
	if (i.data === '$!') {
		if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst
		return (r = a), (l = Error($(419))), (r = Fs(l, r, void 0)), Vl(e, t, o, r)
	}
	if (((a = (o & e.childLanes) !== 0), at || a)) {
		if (((r = Be), r !== null)) {
			switch (o & -o) {
				case 4:
					i = 2
					break
				case 16:
					i = 8
					break
				case 64:
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
				case 4194304:
				case 8388608:
				case 16777216:
				case 33554432:
				case 67108864:
					i = 32
					break
				case 536870912:
					i = 268435456
					break
				default:
					i = 0
			}
			;(i = i & (r.suspendedLanes | o) ? 0 : i),
				i !== 0 && i !== l.retryLane && ((l.retryLane = i), Sn(e, i), Ft(r, e, i, -1))
		}
		return Yu(), (r = Fs(Error($(421)))), Vl(e, t, o, r)
	}
	return i.data === '$?'
		? ((t.flags |= 128), (t.child = e.child), (t = Yv.bind(null, e)), (i._reactRetry = t), null)
		: ((e = l.treeContext),
		  (mt = Yn(i.nextSibling)),
		  (gt = t),
		  (we = !0),
		  (Dt = null),
		  e !== null && ((kt[Pt++] = mn), (kt[Pt++] = gn), (kt[Pt++] = xr), (mn = e.id), (gn = e.overflow), (xr = t)),
		  (t = Bu(t, r.children)),
		  (t.flags |= 4096),
		  t)
}
function ud(e, t, n) {
	e.lanes |= t
	var r = e.alternate
	r !== null && (r.lanes |= t), Na(e.return, t, n)
}
function $s(e, t, n, r, i) {
	var l = e.memoizedState
	l === null
		? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i })
		: ((l.isBackwards = t),
		  (l.rendering = null),
		  (l.renderingStartTime = 0),
		  (l.last = r),
		  (l.tail = n),
		  (l.tailMode = i))
}
function ah(e, t, n) {
	var r = t.pendingProps,
		i = r.revealOrder,
		l = r.tail
	if ((tt(e, t, r.children, n), (r = Se.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128)
	else {
		if (e !== null && e.flags & 128)
			e: for (e = t.child; e !== null; ) {
				if (e.tag === 13) e.memoizedState !== null && ud(e, n, t)
				else if (e.tag === 19) ud(e, n, t)
				else if (e.child !== null) {
					;(e.child.return = e), (e = e.child)
					continue
				}
				if (e === t) break e
				for (; e.sibling === null; ) {
					if (e.return === null || e.return === t) break e
					e = e.return
				}
				;(e.sibling.return = e.return), (e = e.sibling)
			}
		r &= 1
	}
	if ((me(Se, r), !(t.mode & 1))) t.memoizedState = null
	else
		switch (i) {
			case 'forwards':
				for (n = t.child, i = null; n !== null; )
					(e = n.alternate), e !== null && Ro(e) === null && (i = n), (n = n.sibling)
				;(n = i),
					n === null ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)),
					$s(t, !1, i, n, l)
				break
			case 'backwards':
				for (n = null, i = t.child, t.child = null; i !== null; ) {
					if (((e = i.alternate), e !== null && Ro(e) === null)) {
						t.child = i
						break
					}
					;(e = i.sibling), (i.sibling = n), (n = i), (i = e)
				}
				$s(t, !0, n, null, l)
				break
			case 'together':
				$s(t, !1, null, null, void 0)
				break
			default:
				t.memoizedState = null
		}
	return t.child
}
function lo(e, t) {
	!(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function En(e, t, n) {
	if ((e !== null && (t.dependencies = e.dependencies), (Er |= t.lanes), !(n & t.childLanes))) return null
	if (e !== null && t.child !== e.child) throw Error($(153))
	if (t.child !== null) {
		for (e = t.child, n = qn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
			(e = e.sibling), (n = n.sibling = qn(e, e.pendingProps)), (n.return = t)
		n.sibling = null
	}
	return t.child
}
function Iv(e, t, n) {
	switch (t.tag) {
		case 3:
			oh(t), ui()
			break
		case 5:
			Ip(t)
			break
		case 1:
			ct(t.type) && ko(t)
			break
		case 4:
			Ou(t, t.stateNode.containerInfo)
			break
		case 10:
			var r = t.type._context,
				i = t.memoizedProps.value
			me(bo, r._currentValue), (r._currentValue = i)
			break
		case 13:
			if (((r = t.memoizedState), r !== null))
				return r.dehydrated !== null
					? (me(Se, Se.current & 1), (t.flags |= 128), null)
					: n & t.child.childLanes
					? sh(e, t, n)
					: (me(Se, Se.current & 1), (e = En(e, t, n)), e !== null ? e.sibling : null)
			me(Se, Se.current & 1)
			break
		case 19:
			if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
				if (r) return ah(e, t, n)
				t.flags |= 128
			}
			if (
				((i = t.memoizedState),
				i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
				me(Se, Se.current),
				r)
			)
				break
			return null
		case 22:
		case 23:
			return (t.lanes = 0), ih(e, t, n)
	}
	return En(e, t, n)
}
var uh, za, ch, dh
uh = function (e, t) {
	for (var n = t.child; n !== null; ) {
		if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode)
		else if (n.tag !== 4 && n.child !== null) {
			;(n.child.return = n), (n = n.child)
			continue
		}
		if (n === t) break
		for (; n.sibling === null; ) {
			if (n.return === null || n.return === t) return
			n = n.return
		}
		;(n.sibling.return = n.return), (n = n.sibling)
	}
}
za = function () {}
ch = function (e, t, n, r) {
	var i = e.memoizedProps
	if (i !== r) {
		;(e = t.stateNode), pr(nn.current)
		var l = null
		switch (n) {
			case 'input':
				;(i = oa(e, i)), (r = oa(e, r)), (l = [])
				break
			case 'select':
				;(i = Ce({}, i, { value: void 0 })), (r = Ce({}, r, { value: void 0 })), (l = [])
				break
			case 'textarea':
				;(i = ua(e, i)), (r = ua(e, r)), (l = [])
				break
			default:
				typeof i.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = Co)
		}
		da(n, r)
		var o
		n = null
		for (u in i)
			if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
				if (u === 'style') {
					var a = i[u]
					for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''))
				} else
					u !== 'dangerouslySetInnerHTML' &&
						u !== 'children' &&
						u !== 'suppressContentEditableWarning' &&
						u !== 'suppressHydrationWarning' &&
						u !== 'autoFocus' &&
						(qi.hasOwnProperty(u) ? l || (l = []) : (l = l || []).push(u, null))
		for (u in r) {
			var s = r[u]
			if (((a = i != null ? i[u] : void 0), r.hasOwnProperty(u) && s !== a && (s != null || a != null)))
				if (u === 'style')
					if (a) {
						for (o in a) !a.hasOwnProperty(o) || (s && s.hasOwnProperty(o)) || (n || (n = {}), (n[o] = ''))
						for (o in s) s.hasOwnProperty(o) && a[o] !== s[o] && (n || (n = {}), (n[o] = s[o]))
					} else n || (l || (l = []), l.push(u, n)), (n = s)
				else
					u === 'dangerouslySetInnerHTML'
						? ((s = s ? s.__html : void 0),
						  (a = a ? a.__html : void 0),
						  s != null && a !== s && (l = l || []).push(u, s))
						: u === 'children'
						? (typeof s != 'string' && typeof s != 'number') || (l = l || []).push(u, '' + s)
						: u !== 'suppressContentEditableWarning' &&
						  u !== 'suppressHydrationWarning' &&
						  (qi.hasOwnProperty(u)
								? (s != null && u === 'onScroll' && ve('scroll', e), l || a === s || (l = []))
								: (l = l || []).push(u, s))
		}
		n && (l = l || []).push('style', n)
		var u = l
		;(t.updateQueue = u) && (t.flags |= 4)
	}
}
dh = function (e, t, n, r) {
	n !== r && (t.flags |= 4)
}
function _i(e, t) {
	if (!we)
		switch (e.tailMode) {
			case 'hidden':
				t = e.tail
				for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling)
				n === null ? (e.tail = null) : (n.sibling = null)
				break
			case 'collapsed':
				n = e.tail
				for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling)
				r === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null)
		}
}
function Ke(e) {
	var t = e.alternate !== null && e.alternate.child === e.child,
		n = 0,
		r = 0
	if (t)
		for (var i = e.child; i !== null; )
			(n |= i.lanes | i.childLanes),
				(r |= i.subtreeFlags & 14680064),
				(r |= i.flags & 14680064),
				(i.return = e),
				(i = i.sibling)
	else
		for (i = e.child; i !== null; )
			(n |= i.lanes | i.childLanes), (r |= i.subtreeFlags), (r |= i.flags), (i.return = e), (i = i.sibling)
	return (e.subtreeFlags |= r), (e.childLanes = n), t
}
function Av(e, t, n) {
	var r = t.pendingProps
	switch ((Pu(t), t.tag)) {
		case 2:
		case 16:
		case 15:
		case 0:
		case 11:
		case 7:
		case 8:
		case 12:
		case 9:
		case 14:
			return Ke(t), null
		case 1:
			return ct(t.type) && To(), Ke(t), null
		case 3:
			return (
				(r = t.stateNode),
				di(),
				ye(ut),
				ye(Qe),
				Iu(),
				r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
				(e === null || e.child === null) &&
					(Bl(t)
						? (t.flags |= 4)
						: e === null ||
						  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
						  ((t.flags |= 1024), Dt !== null && (Ga(Dt), (Dt = null)))),
				za(e, t),
				Ke(t),
				null
			)
		case 5:
			Mu(t)
			var i = pr(ul.current)
			if (((n = t.type), e !== null && t.stateNode != null))
				ch(e, t, n, r, i), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
			else {
				if (!r) {
					if (t.stateNode === null) throw Error($(166))
					return Ke(t), null
				}
				if (((e = pr(nn.current)), Bl(t))) {
					;(r = t.stateNode), (n = t.type)
					var l = t.memoizedProps
					switch (((r[Zt] = t), (r[sl] = l), (e = (t.mode & 1) !== 0), n)) {
						case 'dialog':
							ve('cancel', r), ve('close', r)
							break
						case 'iframe':
						case 'object':
						case 'embed':
							ve('load', r)
							break
						case 'video':
						case 'audio':
							for (i = 0; i < zi.length; i++) ve(zi[i], r)
							break
						case 'source':
							ve('error', r)
							break
						case 'img':
						case 'image':
						case 'link':
							ve('error', r), ve('load', r)
							break
						case 'details':
							ve('toggle', r)
							break
						case 'input':
							yc(r, l), ve('invalid', r)
							break
						case 'select':
							;(r._wrapperState = { wasMultiple: !!l.multiple }), ve('invalid', r)
							break
						case 'textarea':
							xc(r, l), ve('invalid', r)
					}
					da(n, l), (i = null)
					for (var o in l)
						if (l.hasOwnProperty(o)) {
							var a = l[o]
							o === 'children'
								? typeof a == 'string'
									? r.textContent !== a &&
									  (l.suppressHydrationWarning !== !0 && $l(r.textContent, a, e), (i = ['children', a]))
									: typeof a == 'number' &&
									  r.textContent !== '' + a &&
									  (l.suppressHydrationWarning !== !0 && $l(r.textContent, a, e), (i = ['children', '' + a]))
								: qi.hasOwnProperty(o) && a != null && o === 'onScroll' && ve('scroll', r)
						}
					switch (n) {
						case 'input':
							jl(r), wc(r, l, !0)
							break
						case 'textarea':
							jl(r), Sc(r)
							break
						case 'select':
						case 'option':
							break
						default:
							typeof l.onClick == 'function' && (r.onclick = Co)
					}
					;(r = i), (t.updateQueue = r), r !== null && (t.flags |= 4)
				} else {
					;(o = i.nodeType === 9 ? i : i.ownerDocument),
						e === 'http://www.w3.org/1999/xhtml' && (e = zf(n)),
						e === 'http://www.w3.org/1999/xhtml'
							? n === 'script'
								? ((e = o.createElement('div')), (e.innerHTML = '<script></script>'), (e = e.removeChild(e.firstChild)))
								: typeof r.is == 'string'
								? (e = o.createElement(n, { is: r.is }))
								: ((e = o.createElement(n)),
								  n === 'select' && ((o = e), r.multiple ? (o.multiple = !0) : r.size && (o.size = r.size)))
							: (e = o.createElementNS(e, n)),
						(e[Zt] = t),
						(e[sl] = r),
						uh(e, t, !1, !1),
						(t.stateNode = e)
					e: {
						switch (((o = fa(n, r)), n)) {
							case 'dialog':
								ve('cancel', e), ve('close', e), (i = r)
								break
							case 'iframe':
							case 'object':
							case 'embed':
								ve('load', e), (i = r)
								break
							case 'video':
							case 'audio':
								for (i = 0; i < zi.length; i++) ve(zi[i], e)
								i = r
								break
							case 'source':
								ve('error', e), (i = r)
								break
							case 'img':
							case 'image':
							case 'link':
								ve('error', e), ve('load', e), (i = r)
								break
							case 'details':
								ve('toggle', e), (i = r)
								break
							case 'input':
								yc(e, r), (i = oa(e, r)), ve('invalid', e)
								break
							case 'option':
								i = r
								break
							case 'select':
								;(e._wrapperState = { wasMultiple: !!r.multiple }), (i = Ce({}, r, { value: void 0 })), ve('invalid', e)
								break
							case 'textarea':
								xc(e, r), (i = ua(e, r)), ve('invalid', e)
								break
							default:
								i = r
						}
						da(n, i), (a = i)
						for (l in a)
							if (a.hasOwnProperty(l)) {
								var s = a[l]
								l === 'style'
									? Bf(e, s)
									: l === 'dangerouslySetInnerHTML'
									? ((s = s ? s.__html : void 0), s != null && Ff(e, s))
									: l === 'children'
									? typeof s == 'string'
										? (n !== 'textarea' || s !== '') && Ji(e, s)
										: typeof s == 'number' && Ji(e, '' + s)
									: l !== 'suppressContentEditableWarning' &&
									  l !== 'suppressHydrationWarning' &&
									  l !== 'autoFocus' &&
									  (qi.hasOwnProperty(l)
											? s != null && l === 'onScroll' && ve('scroll', e)
											: s != null && du(e, l, s, o))
							}
						switch (n) {
							case 'input':
								jl(e), wc(e, r, !1)
								break
							case 'textarea':
								jl(e), Sc(e)
								break
							case 'option':
								r.value != null && e.setAttribute('value', '' + Jn(r.value))
								break
							case 'select':
								;(e.multiple = !!r.multiple),
									(l = r.value),
									l != null
										? Zr(e, !!r.multiple, l, !1)
										: r.defaultValue != null && Zr(e, !!r.multiple, r.defaultValue, !0)
								break
							default:
								typeof i.onClick == 'function' && (e.onclick = Co)
						}
						switch (n) {
							case 'button':
							case 'input':
							case 'select':
							case 'textarea':
								r = !!r.autoFocus
								break e
							case 'img':
								r = !0
								break e
							default:
								r = !1
						}
					}
					r && (t.flags |= 4)
				}
				t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152))
			}
			return Ke(t), null
		case 6:
			if (e && t.stateNode != null) dh(e, t, e.memoizedProps, r)
			else {
				if (typeof r != 'string' && t.stateNode === null) throw Error($(166))
				if (((n = pr(ul.current)), pr(nn.current), Bl(t))) {
					if (
						((r = t.stateNode), (n = t.memoizedProps), (r[Zt] = t), (l = r.nodeValue !== n) && ((e = gt), e !== null))
					)
						switch (e.tag) {
							case 3:
								$l(r.nodeValue, n, (e.mode & 1) !== 0)
								break
							case 5:
								e.memoizedProps.suppressHydrationWarning !== !0 && $l(r.nodeValue, n, (e.mode & 1) !== 0)
						}
					l && (t.flags |= 4)
				} else (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)), (r[Zt] = t), (t.stateNode = r)
			}
			return Ke(t), null
		case 13:
			if (
				(ye(Se), (r = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
			) {
				if (we && mt !== null && t.mode & 1 && !(t.flags & 128)) bp(), ui(), (t.flags |= 98560), (l = !1)
				else if (((l = Bl(t)), r !== null && r.dehydrated !== null)) {
					if (e === null) {
						if (!l) throw Error($(318))
						if (((l = t.memoizedState), (l = l !== null ? l.dehydrated : null), !l)) throw Error($(317))
						l[Zt] = t
					} else ui(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
					Ke(t), (l = !1)
				} else Dt !== null && (Ga(Dt), (Dt = null)), (l = !0)
				if (!l) return t.flags & 65536 ? t : null
			}
			return t.flags & 128
				? ((t.lanes = n), t)
				: ((r = r !== null),
				  r !== (e !== null && e.memoizedState !== null) &&
						r &&
						((t.child.flags |= 8192), t.mode & 1 && (e === null || Se.current & 1 ? Fe === 0 && (Fe = 3) : Yu())),
				  t.updateQueue !== null && (t.flags |= 4),
				  Ke(t),
				  null)
		case 4:
			return di(), za(e, t), e === null && ll(t.stateNode.containerInfo), Ke(t), null
		case 10:
			return Nu(t.type._context), Ke(t), null
		case 17:
			return ct(t.type) && To(), Ke(t), null
		case 19:
			if ((ye(Se), (l = t.memoizedState), l === null)) return Ke(t), null
			if (((r = (t.flags & 128) !== 0), (o = l.rendering), o === null))
				if (r) _i(l, !1)
				else {
					if (Fe !== 0 || (e !== null && e.flags & 128))
						for (e = t.child; e !== null; ) {
							if (((o = Ro(e)), o !== null)) {
								for (
									t.flags |= 128,
										_i(l, !1),
										r = o.updateQueue,
										r !== null && ((t.updateQueue = r), (t.flags |= 4)),
										t.subtreeFlags = 0,
										r = n,
										n = t.child;
									n !== null;

								)
									(l = n),
										(e = r),
										(l.flags &= 14680066),
										(o = l.alternate),
										o === null
											? ((l.childLanes = 0),
											  (l.lanes = e),
											  (l.child = null),
											  (l.subtreeFlags = 0),
											  (l.memoizedProps = null),
											  (l.memoizedState = null),
											  (l.updateQueue = null),
											  (l.dependencies = null),
											  (l.stateNode = null))
											: ((l.childLanes = o.childLanes),
											  (l.lanes = o.lanes),
											  (l.child = o.child),
											  (l.subtreeFlags = 0),
											  (l.deletions = null),
											  (l.memoizedProps = o.memoizedProps),
											  (l.memoizedState = o.memoizedState),
											  (l.updateQueue = o.updateQueue),
											  (l.type = o.type),
											  (e = o.dependencies),
											  (l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
										(n = n.sibling)
								return me(Se, (Se.current & 1) | 2), t.child
							}
							e = e.sibling
						}
					l.tail !== null && Le() > pi && ((t.flags |= 128), (r = !0), _i(l, !1), (t.lanes = 4194304))
				}
			else {
				if (!r)
					if (((e = Ro(o)), e !== null)) {
						if (
							((t.flags |= 128),
							(r = !0),
							(n = e.updateQueue),
							n !== null && ((t.updateQueue = n), (t.flags |= 4)),
							_i(l, !0),
							l.tail === null && l.tailMode === 'hidden' && !o.alternate && !we)
						)
							return Ke(t), null
					} else
						2 * Le() - l.renderingStartTime > pi &&
							n !== 1073741824 &&
							((t.flags |= 128), (r = !0), _i(l, !1), (t.lanes = 4194304))
				l.isBackwards
					? ((o.sibling = t.child), (t.child = o))
					: ((n = l.last), n !== null ? (n.sibling = o) : (t.child = o), (l.last = o))
			}
			return l.tail !== null
				? ((t = l.tail),
				  (l.rendering = t),
				  (l.tail = t.sibling),
				  (l.renderingStartTime = Le()),
				  (t.sibling = null),
				  (n = Se.current),
				  me(Se, r ? (n & 1) | 2 : n & 1),
				  t)
				: (Ke(t), null)
		case 22:
		case 23:
			return (
				Gu(),
				(r = t.memoizedState !== null),
				e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
				r && t.mode & 1 ? pt & 1073741824 && (Ke(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ke(t),
				null
			)
		case 24:
			return null
		case 25:
			return null
	}
	throw Error($(156, t.tag))
}
function Dv(e, t) {
	switch ((Pu(t), t.tag)) {
		case 1:
			return ct(t.type) && To(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
		case 3:
			return (
				di(), ye(ut), ye(Qe), Iu(), (e = t.flags), e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
			)
		case 5:
			return Mu(t), null
		case 13:
			if ((ye(Se), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
				if (t.alternate === null) throw Error($(340))
				ui()
			}
			return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
		case 19:
			return ye(Se), null
		case 4:
			return di(), null
		case 10:
			return Nu(t.type._context), null
		case 22:
		case 23:
			return Gu(), null
		case 24:
			return null
		default:
			return null
	}
}
var Hl = !1,
	Xe = !1,
	zv = typeof WeakSet == 'function' ? WeakSet : Set,
	G = null
function Xr(e, t) {
	var n = e.ref
	if (n !== null)
		if (typeof n == 'function')
			try {
				n(null)
			} catch (r) {
				ke(e, t, r)
			}
		else n.current = null
}
function Fa(e, t, n) {
	try {
		n()
	} catch (r) {
		ke(e, t, r)
	}
}
var cd = !1
function Fv(e, t) {
	if (((Ea = xo), (e = mp()), Tu(e))) {
		if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd }
		else
			e: {
				n = ((n = e.ownerDocument) && n.defaultView) || window
				var r = n.getSelection && n.getSelection()
				if (r && r.rangeCount !== 0) {
					n = r.anchorNode
					var i = r.anchorOffset,
						l = r.focusNode
					r = r.focusOffset
					try {
						n.nodeType, l.nodeType
					} catch {
						n = null
						break e
					}
					var o = 0,
						a = -1,
						s = -1,
						u = 0,
						c = 0,
						p = e,
						m = null
					t: for (;;) {
						for (
							var g;
							p !== n || (i !== 0 && p.nodeType !== 3) || (a = o + i),
								p !== l || (r !== 0 && p.nodeType !== 3) || (s = o + r),
								p.nodeType === 3 && (o += p.nodeValue.length),
								(g = p.firstChild) !== null;

						)
							(m = p), (p = g)
						for (;;) {
							if (p === e) break t
							if ((m === n && ++u === i && (a = o), m === l && ++c === r && (s = o), (g = p.nextSibling) !== null))
								break
							;(p = m), (m = p.parentNode)
						}
						p = g
					}
					n = a === -1 || s === -1 ? null : { start: a, end: s }
				} else n = null
			}
		n = n || { start: 0, end: 0 }
	} else n = null
	for (Ca = { focusedElem: e, selectionRange: n }, xo = !1, G = t; G !== null; )
		if (((t = G), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (G = e)
		else
			for (; G !== null; ) {
				t = G
				try {
					var y = t.alternate
					if (t.flags & 1024)
						switch (t.tag) {
							case 0:
							case 11:
							case 15:
								break
							case 1:
								if (y !== null) {
									var v = y.memoizedProps,
										E = y.memoizedState,
										h = t.stateNode,
										d = h.getSnapshotBeforeUpdate(t.elementType === t.type ? v : Mt(t.type, v), E)
									h.__reactInternalSnapshotBeforeUpdate = d
								}
								break
							case 3:
								var f = t.stateNode.containerInfo
								f.nodeType === 1
									? (f.textContent = '')
									: f.nodeType === 9 && f.documentElement && f.removeChild(f.documentElement)
								break
							case 5:
							case 6:
							case 4:
							case 17:
								break
							default:
								throw Error($(163))
						}
				} catch (w) {
					ke(t, t.return, w)
				}
				if (((e = t.sibling), e !== null)) {
					;(e.return = t.return), (G = e)
					break
				}
				G = t.return
			}
	return (y = cd), (cd = !1), y
}
function Gi(e, t, n) {
	var r = t.updateQueue
	if (((r = r !== null ? r.lastEffect : null), r !== null)) {
		var i = (r = r.next)
		do {
			if ((i.tag & e) === e) {
				var l = i.destroy
				;(i.destroy = void 0), l !== void 0 && Fa(t, n, l)
			}
			i = i.next
		} while (i !== r)
	}
}
function ls(e, t) {
	if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
		var n = (t = t.next)
		do {
			if ((n.tag & e) === e) {
				var r = n.create
				n.destroy = r()
			}
			n = n.next
		} while (n !== t)
	}
}
function $a(e) {
	var t = e.ref
	if (t !== null) {
		var n = e.stateNode
		switch (e.tag) {
			case 5:
				e = n
				break
			default:
				e = n
		}
		typeof t == 'function' ? t(e) : (t.current = e)
	}
}
function fh(e) {
	var t = e.alternate
	t !== null && ((e.alternate = null), fh(t)),
		(e.child = null),
		(e.deletions = null),
		(e.sibling = null),
		e.tag === 5 &&
			((t = e.stateNode), t !== null && (delete t[Zt], delete t[sl], delete t[Pa], delete t[Sv], delete t[Ev])),
		(e.stateNode = null),
		(e.return = null),
		(e.dependencies = null),
		(e.memoizedProps = null),
		(e.memoizedState = null),
		(e.pendingProps = null),
		(e.stateNode = null),
		(e.updateQueue = null)
}
function ph(e) {
	return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function dd(e) {
	e: for (;;) {
		for (; e.sibling === null; ) {
			if (e.return === null || ph(e.return)) return null
			e = e.return
		}
		for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
			if (e.flags & 2 || e.child === null || e.tag === 4) continue e
			;(e.child.return = e), (e = e.child)
		}
		if (!(e.flags & 2)) return e.stateNode
	}
}
function Ba(e, t, n) {
	var r = e.tag
	if (r === 5 || r === 6)
		(e = e.stateNode),
			t
				? n.nodeType === 8
					? n.parentNode.insertBefore(e, t)
					: n.insertBefore(e, t)
				: (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)),
				  (n = n._reactRootContainer),
				  n != null || t.onclick !== null || (t.onclick = Co))
	else if (r !== 4 && ((e = e.child), e !== null))
		for (Ba(e, t, n), e = e.sibling; e !== null; ) Ba(e, t, n), (e = e.sibling)
}
function Ua(e, t, n) {
	var r = e.tag
	if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
	else if (r !== 4 && ((e = e.child), e !== null))
		for (Ua(e, t, n), e = e.sibling; e !== null; ) Ua(e, t, n), (e = e.sibling)
}
var Ve = null,
	It = !1
function Mn(e, t, n) {
	for (n = n.child; n !== null; ) hh(e, t, n), (n = n.sibling)
}
function hh(e, t, n) {
	if (tn && typeof tn.onCommitFiberUnmount == 'function')
		try {
			tn.onCommitFiberUnmount(qo, n)
		} catch {}
	switch (n.tag) {
		case 5:
			Xe || Xr(n, t)
		case 6:
			var r = Ve,
				i = It
			;(Ve = null),
				Mn(e, t, n),
				(Ve = r),
				(It = i),
				Ve !== null &&
					(It
						? ((e = Ve), (n = n.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
						: Ve.removeChild(n.stateNode))
			break
		case 18:
			Ve !== null &&
				(It
					? ((e = Ve), (n = n.stateNode), e.nodeType === 8 ? Os(e.parentNode, n) : e.nodeType === 1 && Os(e, n), nl(e))
					: Os(Ve, n.stateNode))
			break
		case 4:
			;(r = Ve), (i = It), (Ve = n.stateNode.containerInfo), (It = !0), Mn(e, t, n), (Ve = r), (It = i)
			break
		case 0:
		case 11:
		case 14:
		case 15:
			if (!Xe && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
				i = r = r.next
				do {
					var l = i,
						o = l.destroy
					;(l = l.tag), o !== void 0 && (l & 2 || l & 4) && Fa(n, t, o), (i = i.next)
				} while (i !== r)
			}
			Mn(e, t, n)
			break
		case 1:
			if (!Xe && (Xr(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
				try {
					;(r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount()
				} catch (a) {
					ke(n, t, a)
				}
			Mn(e, t, n)
			break
		case 21:
			Mn(e, t, n)
			break
		case 22:
			n.mode & 1 ? ((Xe = (r = Xe) || n.memoizedState !== null), Mn(e, t, n), (Xe = r)) : Mn(e, t, n)
			break
		default:
			Mn(e, t, n)
	}
}
function fd(e) {
	var t = e.updateQueue
	if (t !== null) {
		e.updateQueue = null
		var n = e.stateNode
		n === null && (n = e.stateNode = new zv()),
			t.forEach(function (r) {
				var i = Kv.bind(null, e, r)
				n.has(r) || (n.add(r), r.then(i, i))
			})
	}
}
function Ot(e, t) {
	var n = t.deletions
	if (n !== null)
		for (var r = 0; r < n.length; r++) {
			var i = n[r]
			try {
				var l = e,
					o = t,
					a = o
				e: for (; a !== null; ) {
					switch (a.tag) {
						case 5:
							;(Ve = a.stateNode), (It = !1)
							break e
						case 3:
							;(Ve = a.stateNode.containerInfo), (It = !0)
							break e
						case 4:
							;(Ve = a.stateNode.containerInfo), (It = !0)
							break e
					}
					a = a.return
				}
				if (Ve === null) throw Error($(160))
				hh(l, o, i), (Ve = null), (It = !1)
				var s = i.alternate
				s !== null && (s.return = null), (i.return = null)
			} catch (u) {
				ke(i, t, u)
			}
		}
	if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) mh(t, e), (t = t.sibling)
}
function mh(e, t) {
	var n = e.alternate,
		r = e.flags
	switch (e.tag) {
		case 0:
		case 11:
		case 14:
		case 15:
			if ((Ot(t, e), qt(e), r & 4)) {
				try {
					Gi(3, e, e.return), ls(3, e)
				} catch (v) {
					ke(e, e.return, v)
				}
				try {
					Gi(5, e, e.return)
				} catch (v) {
					ke(e, e.return, v)
				}
			}
			break
		case 1:
			Ot(t, e), qt(e), r & 512 && n !== null && Xr(n, n.return)
			break
		case 5:
			if ((Ot(t, e), qt(e), r & 512 && n !== null && Xr(n, n.return), e.flags & 32)) {
				var i = e.stateNode
				try {
					Ji(i, '')
				} catch (v) {
					ke(e, e.return, v)
				}
			}
			if (r & 4 && ((i = e.stateNode), i != null)) {
				var l = e.memoizedProps,
					o = n !== null ? n.memoizedProps : l,
					a = e.type,
					s = e.updateQueue
				if (((e.updateQueue = null), s !== null))
					try {
						a === 'input' && l.type === 'radio' && l.name != null && Af(i, l), fa(a, o)
						var u = fa(a, l)
						for (o = 0; o < s.length; o += 2) {
							var c = s[o],
								p = s[o + 1]
							c === 'style'
								? Bf(i, p)
								: c === 'dangerouslySetInnerHTML'
								? Ff(i, p)
								: c === 'children'
								? Ji(i, p)
								: du(i, c, p, u)
						}
						switch (a) {
							case 'input':
								sa(i, l)
								break
							case 'textarea':
								Df(i, l)
								break
							case 'select':
								var m = i._wrapperState.wasMultiple
								i._wrapperState.wasMultiple = !!l.multiple
								var g = l.value
								g != null
									? Zr(i, !!l.multiple, g, !1)
									: m !== !!l.multiple &&
									  (l.defaultValue != null
											? Zr(i, !!l.multiple, l.defaultValue, !0)
											: Zr(i, !!l.multiple, l.multiple ? [] : '', !1))
						}
						i[sl] = l
					} catch (v) {
						ke(e, e.return, v)
					}
			}
			break
		case 6:
			if ((Ot(t, e), qt(e), r & 4)) {
				if (e.stateNode === null) throw Error($(162))
				;(i = e.stateNode), (l = e.memoizedProps)
				try {
					i.nodeValue = l
				} catch (v) {
					ke(e, e.return, v)
				}
			}
			break
		case 3:
			if ((Ot(t, e), qt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
				try {
					nl(t.containerInfo)
				} catch (v) {
					ke(e, e.return, v)
				}
			break
		case 4:
			Ot(t, e), qt(e)
			break
		case 13:
			Ot(t, e),
				qt(e),
				(i = e.child),
				i.flags & 8192 &&
					((l = i.memoizedState !== null),
					(i.stateNode.isHidden = l),
					!l || (i.alternate !== null && i.alternate.memoizedState !== null) || (Hu = Le())),
				r & 4 && fd(e)
			break
		case 22:
			if (
				((c = n !== null && n.memoizedState !== null),
				e.mode & 1 ? ((Xe = (u = Xe) || c), Ot(t, e), (Xe = u)) : Ot(t, e),
				qt(e),
				r & 8192)
			) {
				if (((u = e.memoizedState !== null), (e.stateNode.isHidden = u) && !c && e.mode & 1))
					for (G = e, c = e.child; c !== null; ) {
						for (p = G = c; G !== null; ) {
							switch (((m = G), (g = m.child), m.tag)) {
								case 0:
								case 11:
								case 14:
								case 15:
									Gi(4, m, m.return)
									break
								case 1:
									Xr(m, m.return)
									var y = m.stateNode
									if (typeof y.componentWillUnmount == 'function') {
										;(r = m), (n = m.return)
										try {
											;(t = r), (y.props = t.memoizedProps), (y.state = t.memoizedState), y.componentWillUnmount()
										} catch (v) {
											ke(r, n, v)
										}
									}
									break
								case 5:
									Xr(m, m.return)
									break
								case 22:
									if (m.memoizedState !== null) {
										hd(p)
										continue
									}
							}
							g !== null ? ((g.return = m), (G = g)) : hd(p)
						}
						c = c.sibling
					}
				e: for (c = null, p = e; ; ) {
					if (p.tag === 5) {
						if (c === null) {
							c = p
							try {
								;(i = p.stateNode),
									u
										? ((l = i.style),
										  typeof l.setProperty == 'function'
												? l.setProperty('display', 'none', 'important')
												: (l.display = 'none'))
										: ((a = p.stateNode),
										  (s = p.memoizedProps.style),
										  (o = s != null && s.hasOwnProperty('display') ? s.display : null),
										  (a.style.display = $f('display', o)))
							} catch (v) {
								ke(e, e.return, v)
							}
						}
					} else if (p.tag === 6) {
						if (c === null)
							try {
								p.stateNode.nodeValue = u ? '' : p.memoizedProps
							} catch (v) {
								ke(e, e.return, v)
							}
					} else if (((p.tag !== 22 && p.tag !== 23) || p.memoizedState === null || p === e) && p.child !== null) {
						;(p.child.return = p), (p = p.child)
						continue
					}
					if (p === e) break e
					for (; p.sibling === null; ) {
						if (p.return === null || p.return === e) break e
						c === p && (c = null), (p = p.return)
					}
					c === p && (c = null), (p.sibling.return = p.return), (p = p.sibling)
				}
			}
			break
		case 19:
			Ot(t, e), qt(e), r & 4 && fd(e)
			break
		case 21:
			break
		default:
			Ot(t, e), qt(e)
	}
}
function qt(e) {
	var t = e.flags
	if (t & 2) {
		try {
			e: {
				for (var n = e.return; n !== null; ) {
					if (ph(n)) {
						var r = n
						break e
					}
					n = n.return
				}
				throw Error($(160))
			}
			switch (r.tag) {
				case 5:
					var i = r.stateNode
					r.flags & 32 && (Ji(i, ''), (r.flags &= -33))
					var l = dd(e)
					Ua(e, l, i)
					break
				case 3:
				case 4:
					var o = r.stateNode.containerInfo,
						a = dd(e)
					Ba(e, a, o)
					break
				default:
					throw Error($(161))
			}
		} catch (s) {
			ke(e, e.return, s)
		}
		e.flags &= -3
	}
	t & 4096 && (e.flags &= -4097)
}
function $v(e, t, n) {
	;(G = e), gh(e)
}
function gh(e, t, n) {
	for (var r = (e.mode & 1) !== 0; G !== null; ) {
		var i = G,
			l = i.child
		if (i.tag === 22 && r) {
			var o = i.memoizedState !== null || Hl
			if (!o) {
				var a = i.alternate,
					s = (a !== null && a.memoizedState !== null) || Xe
				a = Hl
				var u = Xe
				if (((Hl = o), (Xe = s) && !u))
					for (G = i; G !== null; )
						(o = G),
							(s = o.child),
							o.tag === 22 && o.memoizedState !== null ? md(i) : s !== null ? ((s.return = o), (G = s)) : md(i)
				for (; l !== null; ) (G = l), gh(l), (l = l.sibling)
				;(G = i), (Hl = a), (Xe = u)
			}
			pd(e)
		} else i.subtreeFlags & 8772 && l !== null ? ((l.return = i), (G = l)) : pd(e)
	}
}
function pd(e) {
	for (; G !== null; ) {
		var t = G
		if (t.flags & 8772) {
			var n = t.alternate
			try {
				if (t.flags & 8772)
					switch (t.tag) {
						case 0:
						case 11:
						case 15:
							Xe || ls(5, t)
							break
						case 1:
							var r = t.stateNode
							if (t.flags & 4 && !Xe)
								if (n === null) r.componentDidMount()
								else {
									var i = t.elementType === t.type ? n.memoizedProps : Mt(t.type, n.memoizedProps)
									r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
								}
							var l = t.updateQueue
							l !== null && Qc(t, l, r)
							break
						case 3:
							var o = t.updateQueue
							if (o !== null) {
								if (((n = null), t.child !== null))
									switch (t.child.tag) {
										case 5:
											n = t.child.stateNode
											break
										case 1:
											n = t.child.stateNode
									}
								Qc(t, o, n)
							}
							break
						case 5:
							var a = t.stateNode
							if (n === null && t.flags & 4) {
								n = a
								var s = t.memoizedProps
								switch (t.type) {
									case 'button':
									case 'input':
									case 'select':
									case 'textarea':
										s.autoFocus && n.focus()
										break
									case 'img':
										s.src && (n.src = s.src)
								}
							}
							break
						case 6:
							break
						case 4:
							break
						case 12:
							break
						case 13:
							if (t.memoizedState === null) {
								var u = t.alternate
								if (u !== null) {
									var c = u.memoizedState
									if (c !== null) {
										var p = c.dehydrated
										p !== null && nl(p)
									}
								}
							}
							break
						case 19:
						case 17:
						case 21:
						case 22:
						case 23:
						case 25:
							break
						default:
							throw Error($(163))
					}
				Xe || (t.flags & 512 && $a(t))
			} catch (m) {
				ke(t, t.return, m)
			}
		}
		if (t === e) {
			G = null
			break
		}
		if (((n = t.sibling), n !== null)) {
			;(n.return = t.return), (G = n)
			break
		}
		G = t.return
	}
}
function hd(e) {
	for (; G !== null; ) {
		var t = G
		if (t === e) {
			G = null
			break
		}
		var n = t.sibling
		if (n !== null) {
			;(n.return = t.return), (G = n)
			break
		}
		G = t.return
	}
}
function md(e) {
	for (; G !== null; ) {
		var t = G
		try {
			switch (t.tag) {
				case 0:
				case 11:
				case 15:
					var n = t.return
					try {
						ls(4, t)
					} catch (s) {
						ke(t, n, s)
					}
					break
				case 1:
					var r = t.stateNode
					if (typeof r.componentDidMount == 'function') {
						var i = t.return
						try {
							r.componentDidMount()
						} catch (s) {
							ke(t, i, s)
						}
					}
					var l = t.return
					try {
						$a(t)
					} catch (s) {
						ke(t, l, s)
					}
					break
				case 5:
					var o = t.return
					try {
						$a(t)
					} catch (s) {
						ke(t, o, s)
					}
			}
		} catch (s) {
			ke(t, t.return, s)
		}
		if (t === e) {
			G = null
			break
		}
		var a = t.sibling
		if (a !== null) {
			;(a.return = t.return), (G = a)
			break
		}
		G = t.return
	}
}
var Bv = Math.ceil,
	Mo = Tn.ReactCurrentDispatcher,
	Uu = Tn.ReactCurrentOwner,
	bt = Tn.ReactCurrentBatchConfig,
	se = 0,
	Be = null,
	Re = null,
	He = 0,
	pt = 0,
	Qr = rr(0),
	Fe = 0,
	pl = null,
	Er = 0,
	os = 0,
	Vu = 0,
	Yi = null,
	st = null,
	Hu = 0,
	pi = 1 / 0,
	fn = null,
	Io = !1,
	Va = null,
	Xn = null,
	Wl = !1,
	Bn = null,
	Ao = 0,
	Ki = 0,
	Ha = null,
	oo = -1,
	so = 0
function nt() {
	return se & 6 ? Le() : oo !== -1 ? oo : (oo = Le())
}
function Qn(e) {
	return e.mode & 1
		? se & 2 && He !== 0
			? He & -He
			: Tv.transition !== null
			? (so === 0 && (so = Zf()), so)
			: ((e = pe), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : op(e.type))), e)
		: 1
}
function Ft(e, t, n, r) {
	if (50 < Ki) throw ((Ki = 0), (Ha = null), Error($(185)))
	xl(e, n, r),
		(!(se & 2) || e !== Be) &&
			(e === Be && (!(se & 2) && (os |= n), Fe === 4 && Fn(e, He)),
			dt(e, r),
			n === 1 && se === 0 && !(t.mode & 1) && ((pi = Le() + 500), ns && ir()))
}
function dt(e, t) {
	var n = e.callbackNode
	Tg(e, t)
	var r = wo(e, e === Be ? He : 0)
	if (r === 0) n !== null && Tc(n), (e.callbackNode = null), (e.callbackPriority = 0)
	else if (((t = r & -r), e.callbackPriority !== t)) {
		if ((n != null && Tc(n), t === 1))
			e.tag === 0 ? Cv(gd.bind(null, e)) : kp(gd.bind(null, e)),
				wv(function () {
					!(se & 6) && ir()
				}),
				(n = null)
		else {
			switch (ep(r)) {
				case 1:
					n = gu
					break
				case 4:
					n = qf
					break
				case 16:
					n = yo
					break
				case 536870912:
					n = Jf
					break
				default:
					n = yo
			}
			n = Th(n, vh.bind(null, e))
		}
		;(e.callbackPriority = t), (e.callbackNode = n)
	}
}
function vh(e, t) {
	if (((oo = -1), (so = 0), se & 6)) throw Error($(327))
	var n = e.callbackNode
	if (ii() && e.callbackNode !== n) return null
	var r = wo(e, e === Be ? He : 0)
	if (r === 0) return null
	if (r & 30 || r & e.expiredLanes || t) t = Do(e, r)
	else {
		t = r
		var i = se
		se |= 2
		var l = wh()
		;(Be !== e || He !== t) && ((fn = null), (pi = Le() + 500), gr(e, t))
		do
			try {
				Hv()
				break
			} catch (a) {
				yh(e, a)
			}
		while (!0)
		Lu(), (Mo.current = l), (se = i), Re !== null ? (t = 0) : ((Be = null), (He = 0), (t = Fe))
	}
	if (t !== 0) {
		if ((t === 2 && ((i = va(e)), i !== 0 && ((r = i), (t = Wa(e, i)))), t === 1))
			throw ((n = pl), gr(e, 0), Fn(e, r), dt(e, Le()), n)
		if (t === 6) Fn(e, r)
		else {
			if (
				((i = e.current.alternate),
				!(r & 30) &&
					!Uv(i) &&
					((t = Do(e, r)), t === 2 && ((l = va(e)), l !== 0 && ((r = l), (t = Wa(e, l)))), t === 1))
			)
				throw ((n = pl), gr(e, 0), Fn(e, r), dt(e, Le()), n)
			switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
				case 0:
				case 1:
					throw Error($(345))
				case 2:
					ur(e, st, fn)
					break
				case 3:
					if ((Fn(e, r), (r & 130023424) === r && ((t = Hu + 500 - Le()), 10 < t))) {
						if (wo(e, 0) !== 0) break
						if (((i = e.suspendedLanes), (i & r) !== r)) {
							nt(), (e.pingedLanes |= e.suspendedLanes & i)
							break
						}
						e.timeoutHandle = ka(ur.bind(null, e, st, fn), t)
						break
					}
					ur(e, st, fn)
					break
				case 4:
					if ((Fn(e, r), (r & 4194240) === r)) break
					for (t = e.eventTimes, i = -1; 0 < r; ) {
						var o = 31 - zt(r)
						;(l = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~l)
					}
					if (
						((r = i),
						(r = Le() - r),
						(r =
							(120 > r
								? 120
								: 480 > r
								? 480
								: 1080 > r
								? 1080
								: 1920 > r
								? 1920
								: 3e3 > r
								? 3e3
								: 4320 > r
								? 4320
								: 1960 * Bv(r / 1960)) - r),
						10 < r)
					) {
						e.timeoutHandle = ka(ur.bind(null, e, st, fn), r)
						break
					}
					ur(e, st, fn)
					break
				case 5:
					ur(e, st, fn)
					break
				default:
					throw Error($(329))
			}
		}
	}
	return dt(e, Le()), e.callbackNode === n ? vh.bind(null, e) : null
}
function Wa(e, t) {
	var n = Yi
	return (
		e.current.memoizedState.isDehydrated && (gr(e, t).flags |= 256),
		(e = Do(e, t)),
		e !== 2 && ((t = st), (st = n), t !== null && Ga(t)),
		e
	)
}
function Ga(e) {
	st === null ? (st = e) : st.push.apply(st, e)
}
function Uv(e) {
	for (var t = e; ; ) {
		if (t.flags & 16384) {
			var n = t.updateQueue
			if (n !== null && ((n = n.stores), n !== null))
				for (var r = 0; r < n.length; r++) {
					var i = n[r],
						l = i.getSnapshot
					i = i.value
					try {
						if (!$t(l(), i)) return !1
					} catch {
						return !1
					}
				}
		}
		if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n)
		else {
			if (t === e) break
			for (; t.sibling === null; ) {
				if (t.return === null || t.return === e) return !0
				t = t.return
			}
			;(t.sibling.return = t.return), (t = t.sibling)
		}
	}
	return !0
}
function Fn(e, t) {
	for (t &= ~Vu, t &= ~os, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
		var n = 31 - zt(t),
			r = 1 << n
		;(e[n] = -1), (t &= ~r)
	}
}
function gd(e) {
	if (se & 6) throw Error($(327))
	ii()
	var t = wo(e, 0)
	if (!(t & 1)) return dt(e, Le()), null
	var n = Do(e, t)
	if (e.tag !== 0 && n === 2) {
		var r = va(e)
		r !== 0 && ((t = r), (n = Wa(e, r)))
	}
	if (n === 1) throw ((n = pl), gr(e, 0), Fn(e, t), dt(e, Le()), n)
	if (n === 6) throw Error($(345))
	return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), ur(e, st, fn), dt(e, Le()), null
}
function Wu(e, t) {
	var n = se
	se |= 1
	try {
		return e(t)
	} finally {
		;(se = n), se === 0 && ((pi = Le() + 500), ns && ir())
	}
}
function Cr(e) {
	Bn !== null && Bn.tag === 0 && !(se & 6) && ii()
	var t = se
	se |= 1
	var n = bt.transition,
		r = pe
	try {
		if (((bt.transition = null), (pe = 1), e)) return e()
	} finally {
		;(pe = r), (bt.transition = n), (se = t), !(se & 6) && ir()
	}
}
function Gu() {
	;(pt = Qr.current), ye(Qr)
}
function gr(e, t) {
	;(e.finishedWork = null), (e.finishedLanes = 0)
	var n = e.timeoutHandle
	if ((n !== -1 && ((e.timeoutHandle = -1), yv(n)), Re !== null))
		for (n = Re.return; n !== null; ) {
			var r = n
			switch ((Pu(r), r.tag)) {
				case 1:
					;(r = r.type.childContextTypes), r != null && To()
					break
				case 3:
					di(), ye(ut), ye(Qe), Iu()
					break
				case 5:
					Mu(r)
					break
				case 4:
					di()
					break
				case 13:
					ye(Se)
					break
				case 19:
					ye(Se)
					break
				case 10:
					Nu(r.type._context)
					break
				case 22:
				case 23:
					Gu()
			}
			n = n.return
		}
	if (
		((Be = e),
		(Re = e = qn(e.current, null)),
		(He = pt = t),
		(Fe = 0),
		(pl = null),
		(Vu = os = Er = 0),
		(st = Yi = null),
		fr !== null)
	) {
		for (t = 0; t < fr.length; t++)
			if (((n = fr[t]), (r = n.interleaved), r !== null)) {
				n.interleaved = null
				var i = r.next,
					l = n.pending
				if (l !== null) {
					var o = l.next
					;(l.next = i), (r.next = o)
				}
				n.pending = r
			}
		fr = null
	}
	return e
}
function yh(e, t) {
	do {
		var n = Re
		try {
			if ((Lu(), (ro.current = Oo), jo)) {
				for (var r = Ee.memoizedState; r !== null; ) {
					var i = r.queue
					i !== null && (i.pending = null), (r = r.next)
				}
				jo = !1
			}
			if (
				((Sr = 0), ($e = ze = Ee = null), (Wi = !1), (cl = 0), (Uu.current = null), n === null || n.return === null)
			) {
				;(Fe = 1), (pl = t), (Re = null)
				break
			}
			e: {
				var l = e,
					o = n.return,
					a = n,
					s = t
				if (((t = He), (a.flags |= 32768), s !== null && typeof s == 'object' && typeof s.then == 'function')) {
					var u = s,
						c = a,
						p = c.tag
					if (!(c.mode & 1) && (p === 0 || p === 11 || p === 15)) {
						var m = c.alternate
						m
							? ((c.updateQueue = m.updateQueue), (c.memoizedState = m.memoizedState), (c.lanes = m.lanes))
							: ((c.updateQueue = null), (c.memoizedState = null))
					}
					var g = rd(o)
					if (g !== null) {
						;(g.flags &= -257), id(g, o, a, l, t), g.mode & 1 && nd(l, u, t), (t = g), (s = u)
						var y = t.updateQueue
						if (y === null) {
							var v = new Set()
							v.add(s), (t.updateQueue = v)
						} else y.add(s)
						break e
					} else {
						if (!(t & 1)) {
							nd(l, u, t), Yu()
							break e
						}
						s = Error($(426))
					}
				} else if (we && a.mode & 1) {
					var E = rd(o)
					if (E !== null) {
						!(E.flags & 65536) && (E.flags |= 256), id(E, o, a, l, t), _u(fi(s, a))
						break e
					}
				}
				;(l = s = fi(s, a)), Fe !== 4 && (Fe = 2), Yi === null ? (Yi = [l]) : Yi.push(l), (l = o)
				do {
					switch (l.tag) {
						case 3:
							;(l.flags |= 65536), (t &= -t), (l.lanes |= t)
							var h = th(l, s, t)
							Xc(l, h)
							break e
						case 1:
							a = s
							var d = l.type,
								f = l.stateNode
							if (
								!(l.flags & 128) &&
								(typeof d.getDerivedStateFromError == 'function' ||
									(f !== null && typeof f.componentDidCatch == 'function' && (Xn === null || !Xn.has(f))))
							) {
								;(l.flags |= 65536), (t &= -t), (l.lanes |= t)
								var w = nh(l, a, t)
								Xc(l, w)
								break e
							}
					}
					l = l.return
				} while (l !== null)
			}
			Sh(n)
		} catch (C) {
			;(t = C), Re === n && n !== null && (Re = n = n.return)
			continue
		}
		break
	} while (!0)
}
function wh() {
	var e = Mo.current
	return (Mo.current = Oo), e === null ? Oo : e
}
function Yu() {
	;(Fe === 0 || Fe === 3 || Fe === 2) && (Fe = 4), Be === null || (!(Er & 268435455) && !(os & 268435455)) || Fn(Be, He)
}
function Do(e, t) {
	var n = se
	se |= 2
	var r = wh()
	;(Be !== e || He !== t) && ((fn = null), gr(e, t))
	do
		try {
			Vv()
			break
		} catch (i) {
			yh(e, i)
		}
	while (!0)
	if ((Lu(), (se = n), (Mo.current = r), Re !== null)) throw Error($(261))
	return (Be = null), (He = 0), Fe
}
function Vv() {
	for (; Re !== null; ) xh(Re)
}
function Hv() {
	for (; Re !== null && !mg(); ) xh(Re)
}
function xh(e) {
	var t = Ch(e.alternate, e, pt)
	;(e.memoizedProps = e.pendingProps), t === null ? Sh(e) : (Re = t), (Uu.current = null)
}
function Sh(e) {
	var t = e
	do {
		var n = t.alternate
		if (((e = t.return), t.flags & 32768)) {
			if (((n = Dv(n, t)), n !== null)) {
				;(n.flags &= 32767), (Re = n)
				return
			}
			if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
			else {
				;(Fe = 6), (Re = null)
				return
			}
		} else if (((n = Av(n, t, pt)), n !== null)) {
			Re = n
			return
		}
		if (((t = t.sibling), t !== null)) {
			Re = t
			return
		}
		Re = t = e
	} while (t !== null)
	Fe === 0 && (Fe = 5)
}
function ur(e, t, n) {
	var r = pe,
		i = bt.transition
	try {
		;(bt.transition = null), (pe = 1), Wv(e, t, n, r)
	} finally {
		;(bt.transition = i), (pe = r)
	}
	return null
}
function Wv(e, t, n, r) {
	do ii()
	while (Bn !== null)
	if (se & 6) throw Error($(327))
	n = e.finishedWork
	var i = e.finishedLanes
	if (n === null) return null
	if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error($(177))
	;(e.callbackNode = null), (e.callbackPriority = 0)
	var l = n.lanes | n.childLanes
	if (
		(kg(e, l),
		e === Be && ((Re = Be = null), (He = 0)),
		(!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
			Wl ||
			((Wl = !0),
			Th(yo, function () {
				return ii(), null
			})),
		(l = (n.flags & 15990) !== 0),
		n.subtreeFlags & 15990 || l)
	) {
		;(l = bt.transition), (bt.transition = null)
		var o = pe
		pe = 1
		var a = se
		;(se |= 4),
			(Uu.current = null),
			Fv(e, n),
			mh(n, e),
			dv(Ca),
			(xo = !!Ea),
			(Ca = Ea = null),
			(e.current = n),
			$v(n),
			gg(),
			(se = a),
			(pe = o),
			(bt.transition = l)
	} else e.current = n
	if (
		(Wl && ((Wl = !1), (Bn = e), (Ao = i)),
		(l = e.pendingLanes),
		l === 0 && (Xn = null),
		wg(n.stateNode),
		dt(e, Le()),
		t !== null)
	)
		for (r = e.onRecoverableError, n = 0; n < t.length; n++)
			(i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest })
	if (Io) throw ((Io = !1), (e = Va), (Va = null), e)
	return (
		Ao & 1 && e.tag !== 0 && ii(),
		(l = e.pendingLanes),
		l & 1 ? (e === Ha ? Ki++ : ((Ki = 0), (Ha = e))) : (Ki = 0),
		ir(),
		null
	)
}
function ii() {
	if (Bn !== null) {
		var e = ep(Ao),
			t = bt.transition,
			n = pe
		try {
			if (((bt.transition = null), (pe = 16 > e ? 16 : e), Bn === null)) var r = !1
			else {
				if (((e = Bn), (Bn = null), (Ao = 0), se & 6)) throw Error($(331))
				var i = se
				for (se |= 4, G = e.current; G !== null; ) {
					var l = G,
						o = l.child
					if (G.flags & 16) {
						var a = l.deletions
						if (a !== null) {
							for (var s = 0; s < a.length; s++) {
								var u = a[s]
								for (G = u; G !== null; ) {
									var c = G
									switch (c.tag) {
										case 0:
										case 11:
										case 15:
											Gi(8, c, l)
									}
									var p = c.child
									if (p !== null) (p.return = c), (G = p)
									else
										for (; G !== null; ) {
											c = G
											var m = c.sibling,
												g = c.return
											if ((fh(c), c === u)) {
												G = null
												break
											}
											if (m !== null) {
												;(m.return = g), (G = m)
												break
											}
											G = g
										}
								}
							}
							var y = l.alternate
							if (y !== null) {
								var v = y.child
								if (v !== null) {
									y.child = null
									do {
										var E = v.sibling
										;(v.sibling = null), (v = E)
									} while (v !== null)
								}
							}
							G = l
						}
					}
					if (l.subtreeFlags & 2064 && o !== null) (o.return = l), (G = o)
					else
						e: for (; G !== null; ) {
							if (((l = G), l.flags & 2048))
								switch (l.tag) {
									case 0:
									case 11:
									case 15:
										Gi(9, l, l.return)
								}
							var h = l.sibling
							if (h !== null) {
								;(h.return = l.return), (G = h)
								break e
							}
							G = l.return
						}
				}
				var d = e.current
				for (G = d; G !== null; ) {
					o = G
					var f = o.child
					if (o.subtreeFlags & 2064 && f !== null) (f.return = o), (G = f)
					else
						e: for (o = d; G !== null; ) {
							if (((a = G), a.flags & 2048))
								try {
									switch (a.tag) {
										case 0:
										case 11:
										case 15:
											ls(9, a)
									}
								} catch (C) {
									ke(a, a.return, C)
								}
							if (a === o) {
								G = null
								break e
							}
							var w = a.sibling
							if (w !== null) {
								;(w.return = a.return), (G = w)
								break e
							}
							G = a.return
						}
				}
				if (((se = i), ir(), tn && typeof tn.onPostCommitFiberRoot == 'function'))
					try {
						tn.onPostCommitFiberRoot(qo, e)
					} catch {}
				r = !0
			}
			return r
		} finally {
			;(pe = n), (bt.transition = t)
		}
	}
	return !1
}
function vd(e, t, n) {
	;(t = fi(n, t)), (t = th(e, t, 1)), (e = Kn(e, t, 1)), (t = nt()), e !== null && (xl(e, 1, t), dt(e, t))
}
function ke(e, t, n) {
	if (e.tag === 3) vd(e, e, n)
	else
		for (; t !== null; ) {
			if (t.tag === 3) {
				vd(t, e, n)
				break
			} else if (t.tag === 1) {
				var r = t.stateNode
				if (
					typeof t.type.getDerivedStateFromError == 'function' ||
					(typeof r.componentDidCatch == 'function' && (Xn === null || !Xn.has(r)))
				) {
					;(e = fi(n, e)), (e = nh(t, e, 1)), (t = Kn(t, e, 1)), (e = nt()), t !== null && (xl(t, 1, e), dt(t, e))
					break
				}
			}
			t = t.return
		}
}
function Gv(e, t, n) {
	var r = e.pingCache
	r !== null && r.delete(t),
		(t = nt()),
		(e.pingedLanes |= e.suspendedLanes & n),
		Be === e &&
			(He & n) === n &&
			(Fe === 4 || (Fe === 3 && (He & 130023424) === He && 500 > Le() - Hu) ? gr(e, 0) : (Vu |= n)),
		dt(e, t)
}
function Eh(e, t) {
	t === 0 && (e.mode & 1 ? ((t = Il), (Il <<= 1), !(Il & 130023424) && (Il = 4194304)) : (t = 1))
	var n = nt()
	;(e = Sn(e, t)), e !== null && (xl(e, t, n), dt(e, n))
}
function Yv(e) {
	var t = e.memoizedState,
		n = 0
	t !== null && (n = t.retryLane), Eh(e, n)
}
function Kv(e, t) {
	var n = 0
	switch (e.tag) {
		case 13:
			var r = e.stateNode,
				i = e.memoizedState
			i !== null && (n = i.retryLane)
			break
		case 19:
			r = e.stateNode
			break
		default:
			throw Error($(314))
	}
	r !== null && r.delete(t), Eh(e, n)
}
var Ch
Ch = function (e, t, n) {
	if (e !== null)
		if (e.memoizedProps !== t.pendingProps || ut.current) at = !0
		else {
			if (!(e.lanes & n) && !(t.flags & 128)) return (at = !1), Iv(e, t, n)
			at = !!(e.flags & 131072)
		}
	else (at = !1), we && t.flags & 1048576 && Pp(t, _o, t.index)
	switch (((t.lanes = 0), t.tag)) {
		case 2:
			var r = t.type
			lo(e, t), (e = t.pendingProps)
			var i = ai(t, Qe.current)
			ri(t, n), (i = Du(null, t, r, e, i, n))
			var l = zu()
			return (
				(t.flags |= 1),
				typeof i == 'object' && i !== null && typeof i.render == 'function' && i.$$typeof === void 0
					? ((t.tag = 1),
					  (t.memoizedState = null),
					  (t.updateQueue = null),
					  ct(r) ? ((l = !0), ko(t)) : (l = !1),
					  (t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null),
					  ju(t),
					  (i.updater = rs),
					  (t.stateNode = i),
					  (i._reactInternals = t),
					  ja(t, r, e, n),
					  (t = Ia(null, t, r, !0, l, n)))
					: ((t.tag = 0), we && l && ku(t), tt(null, t, i, n), (t = t.child)),
				t
			)
		case 16:
			r = t.elementType
			e: {
				switch (
					(lo(e, t),
					(e = t.pendingProps),
					(i = r._init),
					(r = i(r._payload)),
					(t.type = r),
					(i = t.tag = Qv(r)),
					(e = Mt(r, e)),
					i)
				) {
					case 0:
						t = Ma(null, t, r, e, n)
						break e
					case 1:
						t = sd(null, t, r, e, n)
						break e
					case 11:
						t = ld(null, t, r, e, n)
						break e
					case 14:
						t = od(null, t, r, Mt(r.type, e), n)
						break e
				}
				throw Error($(306, r, ''))
			}
			return t
		case 0:
			return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : Mt(r, i)), Ma(e, t, r, i, n)
		case 1:
			return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : Mt(r, i)), sd(e, t, r, i, n)
		case 3:
			e: {
				if ((oh(t), e === null)) throw Error($(387))
				;(r = t.pendingProps), (l = t.memoizedState), (i = l.element), Np(e, t), No(t, r, null, n)
				var o = t.memoizedState
				if (((r = o.element), l.isDehydrated))
					if (
						((l = {
							element: r,
							isDehydrated: !1,
							cache: o.cache,
							pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
							transitions: o.transitions,
						}),
						(t.updateQueue.baseState = l),
						(t.memoizedState = l),
						t.flags & 256)
					) {
						;(i = fi(Error($(423)), t)), (t = ad(e, t, r, n, i))
						break e
					} else if (r !== i) {
						;(i = fi(Error($(424)), t)), (t = ad(e, t, r, n, i))
						break e
					} else
						for (
							mt = Yn(t.stateNode.containerInfo.firstChild),
								gt = t,
								we = !0,
								Dt = null,
								n = Mp(t, null, r, n),
								t.child = n;
							n;

						)
							(n.flags = (n.flags & -3) | 4096), (n = n.sibling)
				else {
					if ((ui(), r === i)) {
						t = En(e, t, n)
						break e
					}
					tt(e, t, r, n)
				}
				t = t.child
			}
			return t
		case 5:
			return (
				Ip(t),
				e === null && La(t),
				(r = t.type),
				(i = t.pendingProps),
				(l = e !== null ? e.memoizedProps : null),
				(o = i.children),
				Ta(r, i) ? (o = null) : l !== null && Ta(r, l) && (t.flags |= 32),
				lh(e, t),
				tt(e, t, o, n),
				t.child
			)
		case 6:
			return e === null && La(t), null
		case 13:
			return sh(e, t, n)
		case 4:
			return (
				Ou(t, t.stateNode.containerInfo),
				(r = t.pendingProps),
				e === null ? (t.child = ci(t, null, r, n)) : tt(e, t, r, n),
				t.child
			)
		case 11:
			return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : Mt(r, i)), ld(e, t, r, i, n)
		case 7:
			return tt(e, t, t.pendingProps, n), t.child
		case 8:
			return tt(e, t, t.pendingProps.children, n), t.child
		case 12:
			return tt(e, t, t.pendingProps.children, n), t.child
		case 10:
			e: {
				if (
					((r = t.type._context),
					(i = t.pendingProps),
					(l = t.memoizedProps),
					(o = i.value),
					me(bo, r._currentValue),
					(r._currentValue = o),
					l !== null)
				)
					if ($t(l.value, o)) {
						if (l.children === i.children && !ut.current) {
							t = En(e, t, n)
							break e
						}
					} else
						for (l = t.child, l !== null && (l.return = t); l !== null; ) {
							var a = l.dependencies
							if (a !== null) {
								o = l.child
								for (var s = a.firstContext; s !== null; ) {
									if (s.context === r) {
										if (l.tag === 1) {
											;(s = vn(-1, n & -n)), (s.tag = 2)
											var u = l.updateQueue
											if (u !== null) {
												u = u.shared
												var c = u.pending
												c === null ? (s.next = s) : ((s.next = c.next), (c.next = s)), (u.pending = s)
											}
										}
										;(l.lanes |= n), (s = l.alternate), s !== null && (s.lanes |= n), Na(l.return, n, t), (a.lanes |= n)
										break
									}
									s = s.next
								}
							} else if (l.tag === 10) o = l.type === t.type ? null : l.child
							else if (l.tag === 18) {
								if (((o = l.return), o === null)) throw Error($(341))
								;(o.lanes |= n), (a = o.alternate), a !== null && (a.lanes |= n), Na(o, n, t), (o = l.sibling)
							} else o = l.child
							if (o !== null) o.return = l
							else
								for (o = l; o !== null; ) {
									if (o === t) {
										o = null
										break
									}
									if (((l = o.sibling), l !== null)) {
										;(l.return = o.return), (o = l)
										break
									}
									o = o.return
								}
							l = o
						}
				tt(e, t, i.children, n), (t = t.child)
			}
			return t
		case 9:
			return (
				(i = t.type),
				(r = t.pendingProps.children),
				ri(t, n),
				(i = Lt(i)),
				(r = r(i)),
				(t.flags |= 1),
				tt(e, t, r, n),
				t.child
			)
		case 14:
			return (r = t.type), (i = Mt(r, t.pendingProps)), (i = Mt(r.type, i)), od(e, t, r, i, n)
		case 15:
			return rh(e, t, t.type, t.pendingProps, n)
		case 17:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : Mt(r, i)),
				lo(e, t),
				(t.tag = 1),
				ct(r) ? ((e = !0), ko(t)) : (e = !1),
				ri(t, n),
				jp(t, r, i),
				ja(t, r, i, n),
				Ia(null, t, r, !0, e, n)
			)
		case 19:
			return ah(e, t, n)
		case 22:
			return ih(e, t, n)
	}
	throw Error($(156, t.tag))
}
function Th(e, t) {
	return Qf(e, t)
}
function Xv(e, t, n, r) {
	;(this.tag = e),
		(this.key = n),
		(this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
		(this.index = 0),
		(this.ref = null),
		(this.pendingProps = t),
		(this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
		(this.mode = r),
		(this.subtreeFlags = this.flags = 0),
		(this.deletions = null),
		(this.childLanes = this.lanes = 0),
		(this.alternate = null)
}
function _t(e, t, n, r) {
	return new Xv(e, t, n, r)
}
function Ku(e) {
	return (e = e.prototype), !(!e || !e.isReactComponent)
}
function Qv(e) {
	if (typeof e == 'function') return Ku(e) ? 1 : 0
	if (e != null) {
		if (((e = e.$$typeof), e === pu)) return 11
		if (e === hu) return 14
	}
	return 2
}
function qn(e, t) {
	var n = e.alternate
	return (
		n === null
			? ((n = _t(e.tag, t, e.key, e.mode)),
			  (n.elementType = e.elementType),
			  (n.type = e.type),
			  (n.stateNode = e.stateNode),
			  (n.alternate = e),
			  (e.alternate = n))
			: ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
		(n.flags = e.flags & 14680064),
		(n.childLanes = e.childLanes),
		(n.lanes = e.lanes),
		(n.child = e.child),
		(n.memoizedProps = e.memoizedProps),
		(n.memoizedState = e.memoizedState),
		(n.updateQueue = e.updateQueue),
		(t = e.dependencies),
		(n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
		(n.sibling = e.sibling),
		(n.index = e.index),
		(n.ref = e.ref),
		n
	)
}
function ao(e, t, n, r, i, l) {
	var o = 2
	if (((r = e), typeof e == 'function')) Ku(e) && (o = 1)
	else if (typeof e == 'string') o = 5
	else
		e: switch (e) {
			case $r:
				return vr(n.children, i, l, t)
			case fu:
				;(o = 8), (i |= 8)
				break
			case na:
				return (e = _t(12, n, t, i | 2)), (e.elementType = na), (e.lanes = l), e
			case ra:
				return (e = _t(13, n, t, i)), (e.elementType = ra), (e.lanes = l), e
			case ia:
				return (e = _t(19, n, t, i)), (e.elementType = ia), (e.lanes = l), e
			case Of:
				return ss(n, i, l, t)
			default:
				if (typeof e == 'object' && e !== null)
					switch (e.$$typeof) {
						case Rf:
							o = 10
							break e
						case jf:
							o = 9
							break e
						case pu:
							o = 11
							break e
						case hu:
							o = 14
							break e
						case An:
							;(o = 16), (r = null)
							break e
					}
				throw Error($(130, e == null ? e : typeof e, ''))
		}
	return (t = _t(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = l), t
}
function vr(e, t, n, r) {
	return (e = _t(7, e, r, t)), (e.lanes = n), e
}
function ss(e, t, n, r) {
	return (e = _t(22, e, r, t)), (e.elementType = Of), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e
}
function Bs(e, t, n) {
	return (e = _t(6, e, null, t)), (e.lanes = n), e
}
function Us(e, t, n) {
	return (
		(t = _t(4, e.children !== null ? e.children : [], e.key, t)),
		(t.lanes = n),
		(t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
		t
	)
}
function qv(e, t, n, r, i) {
	;(this.tag = t),
		(this.containerInfo = e),
		(this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
		(this.timeoutHandle = -1),
		(this.callbackNode = this.pendingContext = this.context = null),
		(this.callbackPriority = 0),
		(this.eventTimes = Es(0)),
		(this.expirationTimes = Es(-1)),
		(this.entangledLanes =
			this.finishedLanes =
			this.mutableReadLanes =
			this.expiredLanes =
			this.pingedLanes =
			this.suspendedLanes =
			this.pendingLanes =
				0),
		(this.entanglements = Es(0)),
		(this.identifierPrefix = r),
		(this.onRecoverableError = i),
		(this.mutableSourceEagerHydrationData = null)
}
function Xu(e, t, n, r, i, l, o, a, s) {
	return (
		(e = new qv(e, t, n, a, s)),
		t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
		(l = _t(3, null, null, t)),
		(e.current = l),
		(l.stateNode = e),
		(l.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: null,
			transitions: null,
			pendingSuspenseBoundaries: null,
		}),
		ju(l),
		e
	)
}
function Jv(e, t, n) {
	var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
	return { $$typeof: Fr, key: r == null ? null : '' + r, children: e, containerInfo: t, implementation: n }
}
function kh(e) {
	if (!e) return Zn
	e = e._reactInternals
	e: {
		if (Nr(e) !== e || e.tag !== 1) throw Error($(170))
		var t = e
		do {
			switch (t.tag) {
				case 3:
					t = t.stateNode.context
					break e
				case 1:
					if (ct(t.type)) {
						t = t.stateNode.__reactInternalMemoizedMergedChildContext
						break e
					}
			}
			t = t.return
		} while (t !== null)
		throw Error($(171))
	}
	if (e.tag === 1) {
		var n = e.type
		if (ct(n)) return Tp(e, n, t)
	}
	return t
}
function Ph(e, t, n, r, i, l, o, a, s) {
	return (
		(e = Xu(n, r, !0, e, i, l, o, a, s)),
		(e.context = kh(null)),
		(n = e.current),
		(r = nt()),
		(i = Qn(n)),
		(l = vn(r, i)),
		(l.callback = t ?? null),
		Kn(n, l, i),
		(e.current.lanes = i),
		xl(e, i, r),
		dt(e, r),
		e
	)
}
function as(e, t, n, r) {
	var i = t.current,
		l = nt(),
		o = Qn(i)
	return (
		(n = kh(n)),
		t.context === null ? (t.context = n) : (t.pendingContext = n),
		(t = vn(l, o)),
		(t.payload = { element: e }),
		(r = r === void 0 ? null : r),
		r !== null && (t.callback = r),
		(e = Kn(i, t, o)),
		e !== null && (Ft(e, i, o, l), no(e, i, o)),
		o
	)
}
function zo(e) {
	if (((e = e.current), !e.child)) return null
	switch (e.child.tag) {
		case 5:
			return e.child.stateNode
		default:
			return e.child.stateNode
	}
}
function yd(e, t) {
	if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
		var n = e.retryLane
		e.retryLane = n !== 0 && n < t ? n : t
	}
}
function Qu(e, t) {
	yd(e, t), (e = e.alternate) && yd(e, t)
}
function Zv() {
	return null
}
var _h =
	typeof reportError == 'function'
		? reportError
		: function (e) {
				console.error(e)
		  }
function qu(e) {
	this._internalRoot = e
}
us.prototype.render = qu.prototype.render = function (e) {
	var t = this._internalRoot
	if (t === null) throw Error($(409))
	as(e, t, null, null)
}
us.prototype.unmount = qu.prototype.unmount = function () {
	var e = this._internalRoot
	if (e !== null) {
		this._internalRoot = null
		var t = e.containerInfo
		Cr(function () {
			as(null, e, null, null)
		}),
			(t[xn] = null)
	}
}
function us(e) {
	this._internalRoot = e
}
us.prototype.unstable_scheduleHydration = function (e) {
	if (e) {
		var t = rp()
		e = { blockedOn: null, target: e, priority: t }
		for (var n = 0; n < zn.length && t !== 0 && t < zn[n].priority; n++);
		zn.splice(n, 0, e), n === 0 && lp(e)
	}
}
function Ju(e) {
	return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function cs(e) {
	return !(
		!e ||
		(e.nodeType !== 1 &&
			e.nodeType !== 9 &&
			e.nodeType !== 11 &&
			(e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
	)
}
function wd() {}
function ey(e, t, n, r, i) {
	if (i) {
		if (typeof r == 'function') {
			var l = r
			r = function () {
				var u = zo(o)
				l.call(u)
			}
		}
		var o = Ph(t, r, e, 0, null, !1, !1, '', wd)
		return (e._reactRootContainer = o), (e[xn] = o.current), ll(e.nodeType === 8 ? e.parentNode : e), Cr(), o
	}
	for (; (i = e.lastChild); ) e.removeChild(i)
	if (typeof r == 'function') {
		var a = r
		r = function () {
			var u = zo(s)
			a.call(u)
		}
	}
	var s = Xu(e, 0, !1, null, null, !1, !1, '', wd)
	return (
		(e._reactRootContainer = s),
		(e[xn] = s.current),
		ll(e.nodeType === 8 ? e.parentNode : e),
		Cr(function () {
			as(t, s, n, r)
		}),
		s
	)
}
function ds(e, t, n, r, i) {
	var l = n._reactRootContainer
	if (l) {
		var o = l
		if (typeof i == 'function') {
			var a = i
			i = function () {
				var s = zo(o)
				a.call(s)
			}
		}
		as(t, o, e, i)
	} else o = ey(n, t, e, i, r)
	return zo(o)
}
tp = function (e) {
	switch (e.tag) {
		case 3:
			var t = e.stateNode
			if (t.current.memoizedState.isDehydrated) {
				var n = Di(t.pendingLanes)
				n !== 0 && (vu(t, n | 1), dt(t, Le()), !(se & 6) && ((pi = Le() + 500), ir()))
			}
			break
		case 13:
			Cr(function () {
				var r = Sn(e, 1)
				if (r !== null) {
					var i = nt()
					Ft(r, e, 1, i)
				}
			}),
				Qu(e, 1)
	}
}
yu = function (e) {
	if (e.tag === 13) {
		var t = Sn(e, 134217728)
		if (t !== null) {
			var n = nt()
			Ft(t, e, 134217728, n)
		}
		Qu(e, 134217728)
	}
}
np = function (e) {
	if (e.tag === 13) {
		var t = Qn(e),
			n = Sn(e, t)
		if (n !== null) {
			var r = nt()
			Ft(n, e, t, r)
		}
		Qu(e, t)
	}
}
rp = function () {
	return pe
}
ip = function (e, t) {
	var n = pe
	try {
		return (pe = e), t()
	} finally {
		pe = n
	}
}
ha = function (e, t, n) {
	switch (t) {
		case 'input':
			if ((sa(e, n), (t = n.name), n.type === 'radio' && t != null)) {
				for (n = e; n.parentNode; ) n = n.parentNode
				for (
					n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
					t < n.length;
					t++
				) {
					var r = n[t]
					if (r !== e && r.form === e.form) {
						var i = ts(r)
						if (!i) throw Error($(90))
						If(r), sa(r, i)
					}
				}
			}
			break
		case 'textarea':
			Df(e, n)
			break
		case 'select':
			;(t = n.value), t != null && Zr(e, !!n.multiple, t, !1)
	}
}
Hf = Wu
Wf = Cr
var ty = { usingClientEntryPoint: !1, Events: [El, Hr, ts, Uf, Vf, Wu] },
	bi = { findFiberByHostInstance: dr, bundleType: 0, version: '18.2.0', rendererPackageName: 'react-dom' },
	ny = {
		bundleType: bi.bundleType,
		version: bi.version,
		rendererPackageName: bi.rendererPackageName,
		rendererConfig: bi.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: Tn.ReactCurrentDispatcher,
		findHostInstanceByFiber: function (e) {
			return (e = Kf(e)), e === null ? null : e.stateNode
		},
		findFiberByHostInstance: bi.findFiberByHostInstance || Zv,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
	}
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
	var Gl = __REACT_DEVTOOLS_GLOBAL_HOOK__
	if (!Gl.isDisabled && Gl.supportsFiber)
		try {
			;(qo = Gl.inject(ny)), (tn = Gl)
		} catch {}
}
wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ty
wt.createPortal = function (e, t) {
	var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
	if (!Ju(t)) throw Error($(200))
	return Jv(e, t, null, n)
}
wt.createRoot = function (e, t) {
	if (!Ju(e)) throw Error($(299))
	var n = !1,
		r = '',
		i = _h
	return (
		t != null &&
			(t.unstable_strictMode === !0 && (n = !0),
			t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
			t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
		(t = Xu(e, 1, !1, null, null, n, !1, r, i)),
		(e[xn] = t.current),
		ll(e.nodeType === 8 ? e.parentNode : e),
		new qu(t)
	)
}
wt.findDOMNode = function (e) {
	if (e == null) return null
	if (e.nodeType === 1) return e
	var t = e._reactInternals
	if (t === void 0)
		throw typeof e.render == 'function' ? Error($(188)) : ((e = Object.keys(e).join(',')), Error($(268, e)))
	return (e = Kf(t)), (e = e === null ? null : e.stateNode), e
}
wt.flushSync = function (e) {
	return Cr(e)
}
wt.hydrate = function (e, t, n) {
	if (!cs(t)) throw Error($(200))
	return ds(null, e, t, !0, n)
}
wt.hydrateRoot = function (e, t, n) {
	if (!Ju(e)) throw Error($(405))
	var r = (n != null && n.hydratedSources) || null,
		i = !1,
		l = '',
		o = _h
	if (
		(n != null &&
			(n.unstable_strictMode === !0 && (i = !0),
			n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
			n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
		(t = Ph(t, null, e, 1, n ?? null, i, !1, l, o)),
		(e[xn] = t.current),
		ll(e),
		r)
	)
		for (e = 0; e < r.length; e++)
			(n = r[e]),
				(i = n._getVersion),
				(i = i(n._source)),
				t.mutableSourceEagerHydrationData == null
					? (t.mutableSourceEagerHydrationData = [n, i])
					: t.mutableSourceEagerHydrationData.push(n, i)
	return new us(t)
}
wt.render = function (e, t, n) {
	if (!cs(t)) throw Error($(200))
	return ds(null, e, t, !1, n)
}
wt.unmountComponentAtNode = function (e) {
	if (!cs(e)) throw Error($(40))
	return e._reactRootContainer
		? (Cr(function () {
				ds(null, null, e, !1, function () {
					;(e._reactRootContainer = null), (e[xn] = null)
				})
		  }),
		  !0)
		: !1
}
wt.unstable_batchedUpdates = Wu
wt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
	if (!cs(n)) throw Error($(200))
	if (e == null || e._reactInternals === void 0) throw Error($(38))
	return ds(e, t, n, !1, r)
}
wt.version = '18.2.0-next-9e3b772b8-20220608'
function bh() {
	if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bh)
		} catch (e) {
			console.error(e)
		}
}
bh(), (Pf.exports = wt)
var Zu = Pf.exports
const ry = Xo(Zu),
	iy = mf({ __proto__: null, default: ry }, [Zu])
var xd = Zu
;(ea.createRoot = xd.createRoot), (ea.hydrateRoot = xd.hydrateRoot)
/**
 * @remix-run/router v1.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Pe() {
	return (
		(Pe = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t]
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
			  }),
		Pe.apply(this, arguments)
	)
}
var be
;(function (e) {
	;(e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE')
})(be || (be = {}))
const Sd = 'popstate'
function ly(e) {
	e === void 0 && (e = {})
	function t(r, i) {
		let { pathname: l, search: o, hash: a } = r.location
		return hl(
			'',
			{ pathname: l, search: o, hash: a },
			(i.state && i.state.usr) || null,
			(i.state && i.state.key) || 'default'
		)
	}
	function n(r, i) {
		return typeof i == 'string' ? i : kr(i)
	}
	return sy(t, n, null, e)
}
function ne(e, t) {
	if (e === !1 || e === null || typeof e > 'u') throw new Error(t)
}
function Tr(e, t) {
	if (!e) {
		typeof console < 'u' && console.warn(t)
		try {
			throw new Error(t)
		} catch {}
	}
}
function oy() {
	return Math.random().toString(36).substr(2, 8)
}
function Ed(e, t) {
	return { usr: e.state, key: e.key, idx: t }
}
function hl(e, t, n, r) {
	return (
		n === void 0 && (n = null),
		Pe({ pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' }, typeof t == 'string' ? kn(t) : t, {
			state: n,
			key: (t && t.key) || r || oy(),
		})
	)
}
function kr(e) {
	let { pathname: t = '/', search: n = '', hash: r = '' } = e
	return (
		n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
		r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
		t
	)
}
function kn(e) {
	let t = {}
	if (e) {
		let n = e.indexOf('#')
		n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)))
		let r = e.indexOf('?')
		r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e)
	}
	return t
}
function sy(e, t, n, r) {
	r === void 0 && (r = {})
	let { window: i = document.defaultView, v5Compat: l = !1 } = r,
		o = i.history,
		a = be.Pop,
		s = null,
		u = c()
	u == null && ((u = 0), o.replaceState(Pe({}, o.state, { idx: u }), ''))
	function c() {
		return (o.state || { idx: null }).idx
	}
	function p() {
		a = be.Pop
		let E = c(),
			h = E == null ? null : E - u
		;(u = E), s && s({ action: a, location: v.location, delta: h })
	}
	function m(E, h) {
		a = be.Push
		let d = hl(v.location, E, h)
		n && n(d, E), (u = c() + 1)
		let f = Ed(d, u),
			w = v.createHref(d)
		try {
			o.pushState(f, '', w)
		} catch (C) {
			if (C instanceof DOMException && C.name === 'DataCloneError') throw C
			i.location.assign(w)
		}
		l && s && s({ action: a, location: v.location, delta: 1 })
	}
	function g(E, h) {
		a = be.Replace
		let d = hl(v.location, E, h)
		n && n(d, E), (u = c())
		let f = Ed(d, u),
			w = v.createHref(d)
		o.replaceState(f, '', w), l && s && s({ action: a, location: v.location, delta: 0 })
	}
	function y(E) {
		let h = i.location.origin !== 'null' ? i.location.origin : i.location.href,
			d = typeof E == 'string' ? E : kr(E)
		return ne(h, 'No window.location.(origin|href) available to create URL for href: ' + d), new URL(d, h)
	}
	let v = {
		get action() {
			return a
		},
		get location() {
			return e(i, o)
		},
		listen(E) {
			if (s) throw new Error('A history only accepts one active listener')
			return (
				i.addEventListener(Sd, p),
				(s = E),
				() => {
					i.removeEventListener(Sd, p), (s = null)
				}
			)
		},
		createHref(E) {
			return t(i, E)
		},
		createURL: y,
		encodeLocation(E) {
			let h = y(E)
			return { pathname: h.pathname, search: h.search, hash: h.hash }
		},
		push: m,
		replace: g,
		go(E) {
			return o.go(E)
		},
	}
	return v
}
var Te
;(function (e) {
	;(e.data = 'data'), (e.deferred = 'deferred'), (e.redirect = 'redirect'), (e.error = 'error')
})(Te || (Te = {}))
const ay = new Set(['lazy', 'caseSensitive', 'path', 'id', 'index', 'children'])
function uy(e) {
	return e.index === !0
}
function Ya(e, t, n, r) {
	return (
		n === void 0 && (n = []),
		r === void 0 && (r = {}),
		e.map((i, l) => {
			let o = [...n, l],
				a = typeof i.id == 'string' ? i.id : o.join('-')
			if (
				(ne(i.index !== !0 || !i.children, 'Cannot specify children on an index route'),
				ne(
					!r[a],
					'Found a route id collision on id "' + a + `".  Route id's must be globally unique within Data Router usages`
				),
				uy(i))
			) {
				let s = Pe({}, i, t(i), { id: a })
				return (r[a] = s), s
			} else {
				let s = Pe({}, i, t(i), { id: a, children: void 0 })
				return (r[a] = s), i.children && (s.children = Ya(i.children, t, o, r)), s
			}
		})
	)
}
function qr(e, t, n) {
	n === void 0 && (n = '/')
	let r = typeof t == 'string' ? kn(t) : t,
		i = wi(r.pathname || '/', n)
	if (i == null) return null
	let l = Lh(e)
	dy(l)
	let o = null
	for (let a = 0; o == null && a < l.length; ++a) o = xy(l[a], Cy(i))
	return o
}
function cy(e, t) {
	let { route: n, pathname: r, params: i } = e
	return { id: n.id, pathname: r, params: i, data: t[n.id], handle: n.handle }
}
function Lh(e, t, n, r) {
	t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '')
	let i = (l, o, a) => {
		let s = {
			relativePath: a === void 0 ? l.path || '' : a,
			caseSensitive: l.caseSensitive === !0,
			childrenIndex: o,
			route: l,
		}
		s.relativePath.startsWith('/') &&
			(ne(
				s.relativePath.startsWith(r),
				'Absolute route path "' +
					s.relativePath +
					'" nested under path ' +
					('"' + r + '" is not valid. An absolute child route path ') +
					'must start with the combined path of all its parent routes.'
			),
			(s.relativePath = s.relativePath.slice(r.length)))
		let u = yn([r, s.relativePath]),
			c = n.concat(s)
		l.children &&
			l.children.length > 0 &&
			(ne(
				l.index !== !0,
				'Index routes must not have child routes. Please remove ' + ('all child routes from route path "' + u + '".')
			),
			Lh(l.children, t, c, u)),
			!(l.path == null && !l.index) && t.push({ path: u, score: yy(u, l.index), routesMeta: c })
	}
	return (
		e.forEach((l, o) => {
			var a
			if (l.path === '' || !((a = l.path) != null && a.includes('?'))) i(l, o)
			else for (let s of Nh(l.path)) i(l, o, s)
		}),
		t
	)
}
function Nh(e) {
	let t = e.split('/')
	if (t.length === 0) return []
	let [n, ...r] = t,
		i = n.endsWith('?'),
		l = n.replace(/\?$/, '')
	if (r.length === 0) return i ? [l, ''] : [l]
	let o = Nh(r.join('/')),
		a = []
	return (
		a.push(...o.map((s) => (s === '' ? l : [l, s].join('/')))),
		i && a.push(...o),
		a.map((s) => (e.startsWith('/') && s === '' ? '/' : s))
	)
}
function dy(e) {
	e.sort((t, n) =>
		t.score !== n.score
			? n.score - t.score
			: wy(
					t.routesMeta.map((r) => r.childrenIndex),
					n.routesMeta.map((r) => r.childrenIndex)
			  )
	)
}
const fy = /^:\w+$/,
	py = 3,
	hy = 2,
	my = 1,
	gy = 10,
	vy = -2,
	Cd = (e) => e === '*'
function yy(e, t) {
	let n = e.split('/'),
		r = n.length
	return (
		n.some(Cd) && (r += vy),
		t && (r += hy),
		n.filter((i) => !Cd(i)).reduce((i, l) => i + (fy.test(l) ? py : l === '' ? my : gy), r)
	)
}
function wy(e, t) {
	return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function xy(e, t) {
	let { routesMeta: n } = e,
		r = {},
		i = '/',
		l = []
	for (let o = 0; o < n.length; ++o) {
		let a = n[o],
			s = o === n.length - 1,
			u = i === '/' ? t : t.slice(i.length) || '/',
			c = Sy({ path: a.relativePath, caseSensitive: a.caseSensitive, end: s }, u)
		if (!c) return null
		Object.assign(r, c.params)
		let p = a.route
		l.push({ params: r, pathname: yn([i, c.pathname]), pathnameBase: _y(yn([i, c.pathnameBase])), route: p }),
			c.pathnameBase !== '/' && (i = yn([i, c.pathnameBase]))
	}
	return l
}
function Sy(e, t) {
	typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 })
	let [n, r] = Ey(e.path, e.caseSensitive, e.end),
		i = t.match(n)
	if (!i) return null
	let l = i[0],
		o = l.replace(/(.)\/+$/, '$1'),
		a = i.slice(1)
	return {
		params: r.reduce((u, c, p) => {
			let { paramName: m, isOptional: g } = c
			if (m === '*') {
				let v = a[p] || ''
				o = l.slice(0, l.length - v.length).replace(/(.)\/+$/, '$1')
			}
			const y = a[p]
			return g && !y ? (u[m] = void 0) : (u[m] = Ty(y || '', m)), u
		}, {}),
		pathname: l,
		pathnameBase: o,
		pattern: e,
	}
}
function Ey(e, t, n) {
	t === void 0 && (t = !1),
		n === void 0 && (n = !0),
		Tr(
			e === '*' || !e.endsWith('*') || e.endsWith('/*'),
			'Route path "' +
				e +
				'" will be treated as if it were ' +
				('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
				'always follow a `/` in the pattern. To get rid of this warning, ' +
				('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
		)
	let r = [],
		i =
			'^' +
			e
				.replace(/\/*\*?$/, '')
				.replace(/^\/*/, '/')
				.replace(/[\\.*+^${}|()[\]]/g, '\\$&')
				.replace(
					/\/:(\w+)(\?)?/g,
					(o, a, s) => (r.push({ paramName: a, isOptional: s != null }), s ? '/?([^\\/]+)?' : '/([^\\/]+)')
				)
	return (
		e.endsWith('*')
			? (r.push({ paramName: '*' }), (i += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
			: n
			? (i += '\\/*$')
			: e !== '' && e !== '/' && (i += '(?:(?=\\/|$))'),
		[new RegExp(i, t ? void 0 : 'i'), r]
	)
}
function Cy(e) {
	try {
		return decodeURI(e)
	} catch (t) {
		return (
			Tr(
				!1,
				'The URL path "' +
					e +
					'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
					('encoding (' + t + ').')
			),
			e
		)
	}
}
function Ty(e, t) {
	try {
		return decodeURIComponent(e)
	} catch (n) {
		return (
			Tr(
				!1,
				'The value for the URL param "' +
					t +
					'" will not be decoded because' +
					(' the string "' + e + '" is a malformed URL segment. This is probably') +
					(' due to a bad percent encoding (' + n + ').')
			),
			e
		)
	}
}
function wi(e, t) {
	if (t === '/') return e
	if (!e.toLowerCase().startsWith(t.toLowerCase())) return null
	let n = t.endsWith('/') ? t.length - 1 : t.length,
		r = e.charAt(n)
	return r && r !== '/' ? null : e.slice(n) || '/'
}
function ky(e, t) {
	t === void 0 && (t = '/')
	let { pathname: n, search: r = '', hash: i = '' } = typeof e == 'string' ? kn(e) : e
	return { pathname: n ? (n.startsWith('/') ? n : Py(n, t)) : t, search: by(r), hash: Ly(i) }
}
function Py(e, t) {
	let n = t.replace(/\/+$/, '').split('/')
	return (
		e.split('/').forEach((i) => {
			i === '..' ? n.length > 1 && n.pop() : i !== '.' && n.push(i)
		}),
		n.length > 1 ? n.join('/') : '/'
	)
}
function Vs(e, t, n, r) {
	return (
		"Cannot include a '" +
		e +
		"' character in a manually specified " +
		('`to.' + t + '` field [' + JSON.stringify(r) + '].  Please separate it out to the ') +
		('`to.' + n + '` field. Alternatively you may provide the full path as ') +
		'a string in <Link to="..."> and the router will parse it for you.'
	)
}
function Rh(e) {
	return e.filter((t, n) => n === 0 || (t.route.path && t.route.path.length > 0))
}
function ec(e, t) {
	let n = Rh(e)
	return t ? n.map((r, i) => (i === e.length - 1 ? r.pathname : r.pathnameBase)) : n.map((r) => r.pathnameBase)
}
function tc(e, t, n, r) {
	r === void 0 && (r = !1)
	let i
	typeof e == 'string'
		? (i = kn(e))
		: ((i = Pe({}, e)),
		  ne(!i.pathname || !i.pathname.includes('?'), Vs('?', 'pathname', 'search', i)),
		  ne(!i.pathname || !i.pathname.includes('#'), Vs('#', 'pathname', 'hash', i)),
		  ne(!i.search || !i.search.includes('#'), Vs('#', 'search', 'hash', i)))
	let l = e === '' || i.pathname === '',
		o = l ? '/' : i.pathname,
		a
	if (o == null) a = n
	else {
		let p = t.length - 1
		if (!r && o.startsWith('..')) {
			let m = o.split('/')
			for (; m[0] === '..'; ) m.shift(), (p -= 1)
			i.pathname = m.join('/')
		}
		a = p >= 0 ? t[p] : '/'
	}
	let s = ky(i, a),
		u = o && o !== '/' && o.endsWith('/'),
		c = (l || o === '.') && n.endsWith('/')
	return !s.pathname.endsWith('/') && (u || c) && (s.pathname += '/'), s
}
const yn = (e) => e.join('/').replace(/\/\/+/g, '/'),
	_y = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
	by = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
	Ly = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e)
class nc {
	constructor(t, n, r, i) {
		i === void 0 && (i = !1),
			(this.status = t),
			(this.statusText = n || ''),
			(this.internal = i),
			r instanceof Error ? ((this.data = r.toString()), (this.error = r)) : (this.data = r)
	}
}
function jh(e) {
	return (
		e != null &&
		typeof e.status == 'number' &&
		typeof e.statusText == 'string' &&
		typeof e.internal == 'boolean' &&
		'data' in e
	)
}
const Oh = ['post', 'put', 'patch', 'delete'],
	Ny = new Set(Oh),
	Ry = ['get', ...Oh],
	jy = new Set(Ry),
	Oy = new Set([301, 302, 303, 307, 308]),
	My = new Set([307, 308]),
	Hs = {
		state: 'idle',
		location: void 0,
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0,
	},
	Iy = {
		state: 'idle',
		data: void 0,
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0,
	},
	Li = { state: 'unblocked', proceed: void 0, reset: void 0, location: void 0 },
	Mh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
	Ay = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
	Ih = 'remix-router-transitions'
function Dy(e) {
	const t = e.window ? e.window : typeof window < 'u' ? window : void 0,
		n = typeof t < 'u' && typeof t.document < 'u' && typeof t.document.createElement < 'u',
		r = !n
	ne(e.routes.length > 0, 'You must provide a non-empty routes array to createRouter')
	let i
	if (e.mapRouteProperties) i = e.mapRouteProperties
	else if (e.detectErrorBoundary) {
		let k = e.detectErrorBoundary
		i = (T) => ({ hasErrorBoundary: k(T) })
	} else i = Ay
	let l = {},
		o = Ya(e.routes, i, void 0, l),
		a,
		s = e.basename || '/',
		u = Pe(
			{
				v7_fetcherPersist: !1,
				v7_normalizeFormMethod: !1,
				v7_partialHydration: !1,
				v7_prependBasename: !1,
				v7_relativeSplatPath: !1,
			},
			e.future
		),
		c = null,
		p = new Set(),
		m = null,
		g = null,
		y = null,
		v = e.hydrationData != null,
		E = qr(o, e.history.location, s),
		h = null
	if (E == null) {
		let k = Tt(404, { pathname: e.history.location.pathname }),
			{ matches: T, route: R } = Rd(o)
		;(E = T), (h = { [R.id]: k })
	}
	let d,
		f = E.some((k) => k.route.lazy),
		w = E.some((k) => k.route.loader)
	if (f) d = !1
	else if (!w) d = !0
	else if (u.v7_partialHydration) {
		let k = e.hydrationData ? e.hydrationData.loaderData : null,
			T = e.hydrationData ? e.hydrationData.errors : null
		d = E.every(
			(R) =>
				R.route.loader &&
				R.route.loader.hydrate !== !0 &&
				((k && k[R.route.id] !== void 0) || (T && T[R.route.id] !== void 0))
		)
	} else d = e.hydrationData != null
	let C,
		S = {
			historyAction: e.history.action,
			location: e.history.location,
			matches: E,
			initialized: d,
			navigation: Hs,
			restoreScrollPosition: e.hydrationData != null ? !1 : null,
			preventScrollReset: !1,
			revalidation: 'idle',
			loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
			actionData: (e.hydrationData && e.hydrationData.actionData) || null,
			errors: (e.hydrationData && e.hydrationData.errors) || h,
			fetchers: new Map(),
			blockers: new Map(),
		},
		b = be.Pop,
		N = !1,
		_,
		L = !1,
		j = new Map(),
		I = null,
		O = !1,
		F = !1,
		H = [],
		Y = [],
		X = new Map(),
		D = 0,
		z = -1,
		V = new Map(),
		ee = new Set(),
		re = new Map(),
		Ne = new Map(),
		xe = new Set(),
		Me = new Map(),
		oe = new Map(),
		ae = !1
	function Ie() {
		if (
			((c = e.history.listen((k) => {
				let { action: T, location: R, delta: B } = k
				if (ae) {
					ae = !1
					return
				}
				Tr(
					oe.size === 0 || B != null,
					'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.'
				)
				let W = Ge({ currentLocation: S.location, nextLocation: R, historyAction: T })
				if (W && B != null) {
					;(ae = !0),
						e.history.go(B * -1),
						Ue(W, {
							state: 'blocked',
							location: R,
							proceed() {
								Ue(W, { state: 'proceeding', proceed: void 0, reset: void 0, location: R }), e.history.go(B)
							},
							reset() {
								let J = new Map(S.blockers)
								J.set(W, Li), Ae({ blockers: J })
							},
						})
					return
				}
				return St(T, R)
			})),
			n)
		) {
			Ky(t, j)
			let k = () => Xy(t, j)
			t.addEventListener('pagehide', k), (I = () => t.removeEventListener('pagehide', k))
		}
		return S.initialized || St(be.Pop, S.location, { initialHydration: !0 }), C
	}
	function lt() {
		c && c(),
			I && I(),
			p.clear(),
			_ && _.abort(),
			S.fetchers.forEach((k, T) => Vt(T)),
			S.blockers.forEach((k, T) => Nn(T))
	}
	function ln(k) {
		return p.add(k), () => p.delete(k)
	}
	function Ae(k, T) {
		T === void 0 && (T = {}), (S = Pe({}, S, k))
		let R = [],
			B = []
		u.v7_fetcherPersist &&
			S.fetchers.forEach((W, J) => {
				W.state === 'idle' && (xe.has(J) ? B.push(J) : R.push(J))
			}),
			[...p].forEach((W) =>
				W(S, {
					deletedFetchers: B,
					unstable_viewTransitionOpts: T.viewTransitionOpts,
					unstable_flushSync: T.flushSync === !0,
				})
			),
			u.v7_fetcherPersist && (R.forEach((W) => S.fetchers.delete(W)), B.forEach((W) => Vt(W)))
	}
	function Bt(k, T, R) {
		var B, W
		let { flushSync: J } = R === void 0 ? {} : R,
			M =
				S.actionData != null &&
				S.navigation.formMethod != null &&
				At(S.navigation.formMethod) &&
				S.navigation.state === 'loading' &&
				((B = k.state) == null ? void 0 : B._isRedirect) !== !0,
			U
		T.actionData
			? Object.keys(T.actionData).length > 0
				? (U = T.actionData)
				: (U = null)
			: M
			? (U = S.actionData)
			: (U = null)
		let A = T.loaderData ? Nd(S.loaderData, T.loaderData, T.matches || [], T.errors) : S.loaderData,
			K = S.blockers
		K.size > 0 && ((K = new Map(K)), K.forEach((ie, ue) => K.set(ue, Li)))
		let te =
			N === !0 ||
			(S.navigation.formMethod != null &&
				At(S.navigation.formMethod) &&
				((W = k.state) == null ? void 0 : W._isRedirect) !== !0)
		a && ((o = a), (a = void 0)),
			O ||
				b === be.Pop ||
				(b === be.Push ? e.history.push(k, k.state) : b === be.Replace && e.history.replace(k, k.state))
		let Q
		if (b === be.Pop) {
			let ie = j.get(S.location.pathname)
			ie && ie.has(k.pathname)
				? (Q = { currentLocation: S.location, nextLocation: k })
				: j.has(k.pathname) && (Q = { currentLocation: k, nextLocation: S.location })
		} else if (L) {
			let ie = j.get(S.location.pathname)
			ie ? ie.add(k.pathname) : ((ie = new Set([k.pathname])), j.set(S.location.pathname, ie)),
				(Q = { currentLocation: S.location, nextLocation: k })
		}
		Ae(
			Pe({}, T, {
				actionData: U,
				loaderData: A,
				historyAction: b,
				location: k,
				initialized: !0,
				navigation: Hs,
				revalidation: 'idle',
				restoreScrollPosition: On(k, T.matches || S.matches),
				preventScrollReset: te,
				blockers: K,
			}),
			{ viewTransitionOpts: Q, flushSync: J === !0 }
		),
			(b = be.Pop),
			(N = !1),
			(L = !1),
			(O = !1),
			(F = !1),
			(H = []),
			(Y = [])
	}
	async function _n(k, T) {
		if (typeof k == 'number') {
			e.history.go(k)
			return
		}
		let R = Ka(
				S.location,
				S.matches,
				s,
				u.v7_prependBasename,
				k,
				u.v7_relativeSplatPath,
				T == null ? void 0 : T.fromRouteId,
				T == null ? void 0 : T.relative
			),
			{ path: B, submission: W, error: J } = Td(u.v7_normalizeFormMethod, !1, R, T),
			M = S.location,
			U = hl(S.location, B, T && T.state)
		U = Pe({}, U, e.history.encodeLocation(U))
		let A = T && T.replace != null ? T.replace : void 0,
			K = be.Push
		A === !0
			? (K = be.Replace)
			: A === !1 ||
			  (W != null && At(W.formMethod) && W.formAction === S.location.pathname + S.location.search && (K = be.Replace))
		let te = T && 'preventScrollReset' in T ? T.preventScrollReset === !0 : void 0,
			Q = (T && T.unstable_flushSync) === !0,
			ie = Ge({ currentLocation: M, nextLocation: U, historyAction: K })
		if (ie) {
			Ue(ie, {
				state: 'blocked',
				location: U,
				proceed() {
					Ue(ie, { state: 'proceeding', proceed: void 0, reset: void 0, location: U }), _n(k, T)
				},
				reset() {
					let ue = new Map(S.blockers)
					ue.set(ie, Li), Ae({ blockers: ue })
				},
			})
			return
		}
		return await St(K, U, {
			submission: W,
			pendingError: J,
			preventScrollReset: te,
			replace: T && T.replace,
			enableViewTransition: T && T.unstable_viewTransition,
			flushSync: Q,
		})
	}
	function Or() {
		if ((sn(), Ae({ revalidation: 'loading' }), S.navigation.state !== 'submitting')) {
			if (S.navigation.state === 'idle') {
				St(S.historyAction, S.location, { startUninterruptedRevalidation: !0 })
				return
			}
			St(b || S.historyAction, S.navigation.location, { overrideNavigation: S.navigation })
		}
	}
	async function St(k, T, R) {
		_ && _.abort(),
			(_ = null),
			(b = k),
			(O = (R && R.startUninterruptedRevalidation) === !0),
			jn(S.location, S.matches),
			(N = (R && R.preventScrollReset) === !0),
			(L = (R && R.enableViewTransition) === !0)
		let B = a || o,
			W = R && R.overrideNavigation,
			J = qr(B, T, s),
			M = (R && R.flushSync) === !0
		if (!J) {
			let ue = Tt(404, { pathname: T.pathname }),
				{ matches: ge, route: Z } = Rd(B)
			un(), Bt(T, { matches: ge, loaderData: {}, errors: { [Z.id]: ue } }, { flushSync: M })
			return
		}
		if (S.initialized && !F && Uy(S.location, T) && !(R && R.submission && At(R.submission.formMethod))) {
			Bt(T, { matches: J }, { flushSync: M })
			return
		}
		_ = new AbortController()
		let U = Ri(e.history, T, _.signal, R && R.submission),
			A,
			K
		if (R && R.pendingError) K = { [Xi(J).route.id]: R.pendingError }
		else if (R && R.submission && At(R.submission.formMethod)) {
			let ue = await Mr(U, T, R.submission, J, { replace: R.replace, flushSync: M })
			if (ue.shortCircuited) return
			;(A = ue.pendingActionData),
				(K = ue.pendingActionError),
				(W = Ws(T, R.submission)),
				(M = !1),
				(U = new Request(U.url, { signal: U.signal }))
		}
		let {
			shortCircuited: te,
			loaderData: Q,
			errors: ie,
		} = await Je(
			U,
			T,
			J,
			W,
			R && R.submission,
			R && R.fetcherSubmission,
			R && R.replace,
			R && R.initialHydration === !0,
			M,
			A,
			K
		)
		te || ((_ = null), Bt(T, Pe({ matches: J }, A ? { actionData: A } : {}, { loaderData: Q, errors: ie })))
	}
	async function Mr(k, T, R, B, W) {
		W === void 0 && (W = {}), sn()
		let J = Gy(T, R)
		Ae({ navigation: J }, { flushSync: W.flushSync === !0 })
		let M,
			U = Qa(B, T)
		if (!U.route.action && !U.route.lazy)
			M = { type: Te.error, error: Tt(405, { method: k.method, pathname: T.pathname, routeId: U.route.id }) }
		else if (((M = await Ni('action', k, U, B, l, i, s, u.v7_relativeSplatPath)), k.signal.aborted))
			return { shortCircuited: !0 }
		if (mr(M)) {
			let A
			return (
				W && W.replace != null ? (A = W.replace) : (A = M.location === S.location.pathname + S.location.search),
				await de(S, M, { submission: R, replace: A }),
				{ shortCircuited: !0 }
			)
		}
		if (Jr(M)) {
			let A = Xi(B, U.route.id)
			return (
				(W && W.replace) !== !0 && (b = be.Push),
				{ pendingActionData: {}, pendingActionError: { [A.route.id]: M.error } }
			)
		}
		if (hr(M)) throw Tt(400, { type: 'defer-action' })
		return { pendingActionData: { [U.route.id]: M.data } }
	}
	async function Je(k, T, R, B, W, J, M, U, A, K, te) {
		let Q = B || Ws(T, W),
			ie = W || J || Md(Q),
			ue = a || o,
			[ge, Z] = kd(e.history, S, R, ie, T, u.v7_partialHydration && U === !0, F, H, Y, xe, re, ee, ue, s, K, te)
		if (
			(un((fe) => !(R && R.some((he) => he.route.id === fe)) || (ge && ge.some((he) => he.route.id === fe))),
			(z = ++D),
			ge.length === 0 && Z.length === 0)
		) {
			let fe = an()
			return (
				Bt(
					T,
					Pe(
						{ matches: R, loaderData: {}, errors: te || null },
						K ? { actionData: K } : {},
						fe ? { fetchers: new Map(S.fetchers) } : {}
					),
					{ flushSync: A }
				),
				{ shortCircuited: !0 }
			)
		}
		if (!O && (!u.v7_partialHydration || !U)) {
			Z.forEach((he) => {
				let Qt = S.fetchers.get(he.key),
					Ll = ji(void 0, Qt ? Qt.data : void 0)
				S.fetchers.set(he.key, Ll)
			})
			let fe = K || S.actionData
			Ae(
				Pe(
					{ navigation: Q },
					fe ? (Object.keys(fe).length === 0 ? { actionData: null } : { actionData: fe }) : {},
					Z.length > 0 ? { fetchers: new Map(S.fetchers) } : {}
				),
				{ flushSync: A }
			)
		}
		Z.forEach((fe) => {
			X.has(fe.key) && Ze(fe.key), fe.controller && X.set(fe.key, fe.controller)
		})
		let Ct = () => Z.forEach((fe) => Ze(fe.key))
		_ && _.signal.addEventListener('abort', Ct)
		let { results: xi, loaderResults: cn, fetcherResults: jt } = await Ln(S.matches, R, ge, Z, k)
		if (k.signal.aborted) return { shortCircuited: !0 }
		_ && _.signal.removeEventListener('abort', Ct), Z.forEach((fe) => X.delete(fe.key))
		let Yt = jd(xi)
		if (Yt) {
			if (Yt.idx >= ge.length) {
				let fe = Z[Yt.idx - ge.length].key
				ee.add(fe)
			}
			return await de(S, Yt.result, { replace: M }), { shortCircuited: !0 }
		}
		let { loaderData: Ar, errors: ce } = Ld(S, R, ge, cn, te, Z, jt, Me)
		Me.forEach((fe, he) => {
			fe.subscribe((Qt) => {
				;(Qt || fe.done) && Me.delete(he)
			})
		})
		let ft = an(),
			Kt = Et(z),
			Xt = ft || Kt || Z.length > 0
		return Pe({ loaderData: Ar, errors: ce }, Xt ? { fetchers: new Map(S.fetchers) } : {})
	}
	function Ir(k, T, R, B) {
		if (r)
			throw new Error(
				"router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
			)
		X.has(k) && Ze(k)
		let W = (B && B.unstable_flushSync) === !0,
			J = a || o,
			M = Ka(
				S.location,
				S.matches,
				s,
				u.v7_prependBasename,
				R,
				u.v7_relativeSplatPath,
				T,
				B == null ? void 0 : B.relative
			),
			U = qr(J, M, s)
		if (!U) {
			Ut(k, T, Tt(404, { pathname: M }), { flushSync: W })
			return
		}
		let { path: A, submission: K, error: te } = Td(u.v7_normalizeFormMethod, !0, M, B)
		if (te) {
			Ut(k, T, te, { flushSync: W })
			return
		}
		let Q = Qa(U, A)
		if (((N = (B && B.preventScrollReset) === !0), K && At(K.formMethod))) {
			bn(k, T, A, Q, U, W, K)
			return
		}
		re.set(k, { routeId: T, path: A }), on(k, T, A, Q, U, W, K)
	}
	async function bn(k, T, R, B, W, J, M) {
		if ((sn(), re.delete(k), !B.route.action && !B.route.lazy)) {
			let he = Tt(405, { method: M.formMethod, pathname: R, routeId: T })
			Ut(k, T, he, { flushSync: J })
			return
		}
		let U = S.fetchers.get(k)
		ot(k, Yy(M, U), { flushSync: J })
		let A = new AbortController(),
			K = Ri(e.history, R, A.signal, M)
		X.set(k, A)
		let te = D,
			Q = await Ni('action', K, B, W, l, i, s, u.v7_relativeSplatPath)
		if (K.signal.aborted) {
			X.get(k) === A && X.delete(k)
			return
		}
		if (u.v7_fetcherPersist && xe.has(k)) {
			if (mr(Q) || Jr(Q)) {
				ot(k, In(void 0))
				return
			}
		} else {
			if (mr(Q))
				if ((X.delete(k), z > te)) {
					ot(k, In(void 0))
					return
				} else return ee.add(k), ot(k, ji(M)), de(S, Q, { fetcherSubmission: M })
			if (Jr(Q)) {
				Ut(k, T, Q.error)
				return
			}
		}
		if (hr(Q)) throw Tt(400, { type: 'defer-action' })
		let ie = S.navigation.location || S.location,
			ue = Ri(e.history, ie, A.signal),
			ge = a || o,
			Z = S.navigation.state !== 'idle' ? qr(ge, S.navigation.location, s) : S.matches
		ne(Z, "Didn't find any matches after fetcher action")
		let Ct = ++D
		V.set(k, Ct)
		let xi = ji(M, Q.data)
		S.fetchers.set(k, xi)
		let [cn, jt] = kd(e.history, S, Z, M, ie, !1, F, H, Y, xe, re, ee, ge, s, { [B.route.id]: Q.data }, void 0)
		jt
			.filter((he) => he.key !== k)
			.forEach((he) => {
				let Qt = he.key,
					Ll = S.fetchers.get(Qt),
					Rm = ji(void 0, Ll ? Ll.data : void 0)
				S.fetchers.set(Qt, Rm), X.has(Qt) && Ze(Qt), he.controller && X.set(Qt, he.controller)
			}),
			Ae({ fetchers: new Map(S.fetchers) })
		let Yt = () => jt.forEach((he) => Ze(he.key))
		A.signal.addEventListener('abort', Yt)
		let { results: Ar, loaderResults: ce, fetcherResults: ft } = await Ln(S.matches, Z, cn, jt, ue)
		if (A.signal.aborted) return
		A.signal.removeEventListener('abort', Yt), V.delete(k), X.delete(k), jt.forEach((he) => X.delete(he.key))
		let Kt = jd(Ar)
		if (Kt) {
			if (Kt.idx >= cn.length) {
				let he = jt[Kt.idx - cn.length].key
				ee.add(he)
			}
			return de(S, Kt.result)
		}
		let { loaderData: Xt, errors: fe } = Ld(S, S.matches, cn, ce, void 0, jt, ft, Me)
		if (S.fetchers.has(k)) {
			let he = In(Q.data)
			S.fetchers.set(k, he)
		}
		Et(Ct),
			S.navigation.state === 'loading' && Ct > z
				? (ne(b, 'Expected pending action'),
				  _ && _.abort(),
				  Bt(S.navigation.location, { matches: Z, loaderData: Xt, errors: fe, fetchers: new Map(S.fetchers) }))
				: (Ae({ errors: fe, loaderData: Nd(S.loaderData, Xt, Z, fe), fetchers: new Map(S.fetchers) }), (F = !1))
	}
	async function on(k, T, R, B, W, J, M) {
		let U = S.fetchers.get(k)
		ot(k, ji(M, U ? U.data : void 0), { flushSync: J })
		let A = new AbortController(),
			K = Ri(e.history, R, A.signal)
		X.set(k, A)
		let te = D,
			Q = await Ni('loader', K, B, W, l, i, s, u.v7_relativeSplatPath)
		if ((hr(Q) && (Q = (await zh(Q, K.signal, !0)) || Q), X.get(k) === A && X.delete(k), !K.signal.aborted)) {
			if (xe.has(k)) {
				ot(k, In(void 0))
				return
			}
			if (mr(Q))
				if (z > te) {
					ot(k, In(void 0))
					return
				} else {
					ee.add(k), await de(S, Q)
					return
				}
			if (Jr(Q)) {
				Ut(k, T, Q.error)
				return
			}
			ne(!hr(Q), 'Unhandled fetcher deferred data'), ot(k, In(Q.data))
		}
	}
	async function de(k, T, R) {
		let { submission: B, fetcherSubmission: W, replace: J } = R === void 0 ? {} : R
		T.revalidate && (F = !0)
		let M = hl(k.location, T.location, { _isRedirect: !0 })
		if ((ne(M, 'Expected a location on the redirect navigation'), n)) {
			let ie = !1
			if (T.reloadDocument) ie = !0
			else if (Mh.test(T.location)) {
				const ue = e.history.createURL(T.location)
				ie = ue.origin !== t.location.origin || wi(ue.pathname, s) == null
			}
			if (ie) {
				J ? t.location.replace(T.location) : t.location.assign(T.location)
				return
			}
		}
		_ = null
		let U = J === !0 ? be.Replace : be.Push,
			{ formMethod: A, formAction: K, formEncType: te } = k.navigation
		!B && !W && A && K && te && (B = Md(k.navigation))
		let Q = B || W
		if (My.has(T.status) && Q && At(Q.formMethod))
			await St(U, M, { submission: Pe({}, Q, { formAction: T.location }), preventScrollReset: N })
		else {
			let ie = Ws(M, B)
			await St(U, M, { overrideNavigation: ie, fetcherSubmission: W, preventScrollReset: N })
		}
	}
	async function Ln(k, T, R, B, W) {
		let J = await Promise.all([
				...R.map((A) => Ni('loader', W, A, T, l, i, s, u.v7_relativeSplatPath)),
				...B.map((A) =>
					A.matches && A.match && A.controller
						? Ni(
								'loader',
								Ri(e.history, A.path, A.controller.signal),
								A.match,
								A.matches,
								l,
								i,
								s,
								u.v7_relativeSplatPath
						  )
						: { type: Te.error, error: Tt(404, { pathname: A.path }) }
				),
			]),
			M = J.slice(0, R.length),
			U = J.slice(R.length)
		return (
			await Promise.all([
				Od(
					k,
					R,
					M,
					M.map(() => W.signal),
					!1,
					S.loaderData
				),
				Od(
					k,
					B.map((A) => A.match),
					U,
					B.map((A) => (A.controller ? A.controller.signal : null)),
					!0
				),
			]),
			{ results: J, loaderResults: M, fetcherResults: U }
		)
	}
	function sn() {
		;(F = !0),
			H.push(...un()),
			re.forEach((k, T) => {
				X.has(T) && (Y.push(T), Ze(T))
			})
	}
	function ot(k, T, R) {
		R === void 0 && (R = {}),
			S.fetchers.set(k, T),
			Ae({ fetchers: new Map(S.fetchers) }, { flushSync: (R && R.flushSync) === !0 })
	}
	function Ut(k, T, R, B) {
		B === void 0 && (B = {})
		let W = Xi(S.matches, T)
		Vt(k), Ae({ errors: { [W.route.id]: R }, fetchers: new Map(S.fetchers) }, { flushSync: (B && B.flushSync) === !0 })
	}
	function or(k) {
		return u.v7_fetcherPersist && (Ne.set(k, (Ne.get(k) || 0) + 1), xe.has(k) && xe.delete(k)), S.fetchers.get(k) || Iy
	}
	function Vt(k) {
		let T = S.fetchers.get(k)
		X.has(k) && !(T && T.state === 'loading' && V.has(k)) && Ze(k),
			re.delete(k),
			V.delete(k),
			ee.delete(k),
			xe.delete(k),
			S.fetchers.delete(k)
	}
	function Ht(k) {
		if (u.v7_fetcherPersist) {
			let T = (Ne.get(k) || 0) - 1
			T <= 0 ? (Ne.delete(k), xe.add(k)) : Ne.set(k, T)
		} else Vt(k)
		Ae({ fetchers: new Map(S.fetchers) })
	}
	function Ze(k) {
		let T = X.get(k)
		ne(T, 'Expected fetch controller: ' + k), T.abort(), X.delete(k)
	}
	function Wt(k) {
		for (let T of k) {
			let R = or(T),
				B = In(R.data)
			S.fetchers.set(T, B)
		}
	}
	function an() {
		let k = [],
			T = !1
		for (let R of ee) {
			let B = S.fetchers.get(R)
			ne(B, 'Expected fetcher: ' + R), B.state === 'loading' && (ee.delete(R), k.push(R), (T = !0))
		}
		return Wt(k), T
	}
	function Et(k) {
		let T = []
		for (let [R, B] of V)
			if (B < k) {
				let W = S.fetchers.get(R)
				ne(W, 'Expected fetcher: ' + R), W.state === 'loading' && (Ze(R), V.delete(R), T.push(R))
			}
		return Wt(T), T.length > 0
	}
	function sr(k, T) {
		let R = S.blockers.get(k) || Li
		return oe.get(k) !== T && oe.set(k, T), R
	}
	function Nn(k) {
		S.blockers.delete(k), oe.delete(k)
	}
	function Ue(k, T) {
		let R = S.blockers.get(k) || Li
		ne(
			(R.state === 'unblocked' && T.state === 'blocked') ||
				(R.state === 'blocked' && T.state === 'blocked') ||
				(R.state === 'blocked' && T.state === 'proceeding') ||
				(R.state === 'blocked' && T.state === 'unblocked') ||
				(R.state === 'proceeding' && T.state === 'unblocked'),
			'Invalid blocker state transition: ' + R.state + ' -> ' + T.state
		)
		let B = new Map(S.blockers)
		B.set(k, T), Ae({ blockers: B })
	}
	function Ge(k) {
		let { currentLocation: T, nextLocation: R, historyAction: B } = k
		if (oe.size === 0) return
		oe.size > 1 && Tr(!1, 'A router only supports one blocker at a time')
		let W = Array.from(oe.entries()),
			[J, M] = W[W.length - 1],
			U = S.blockers.get(J)
		if (!(U && U.state === 'proceeding') && M({ currentLocation: T, nextLocation: R, historyAction: B })) return J
	}
	function un(k) {
		let T = []
		return (
			Me.forEach((R, B) => {
				;(!k || k(B)) && (R.cancel(), T.push(B), Me.delete(B))
			}),
			T
		)
	}
	function Rn(k, T, R) {
		if (((m = k), (y = T), (g = R || null), !v && S.navigation === Hs)) {
			v = !0
			let B = On(S.location, S.matches)
			B != null && Ae({ restoreScrollPosition: B })
		}
		return () => {
			;(m = null), (y = null), (g = null)
		}
	}
	function Gt(k, T) {
		return (
			(g &&
				g(
					k,
					T.map((B) => cy(B, S.loaderData))
				)) ||
			k.key
		)
	}
	function jn(k, T) {
		if (m && y) {
			let R = Gt(k, T)
			m[R] = y()
		}
	}
	function On(k, T) {
		if (m) {
			let R = Gt(k, T),
				B = m[R]
			if (typeof B == 'number') return B
		}
		return null
	}
	function De(k) {
		;(l = {}), (a = Ya(k, i, void 0, l))
	}
	return (
		(C = {
			get basename() {
				return s
			},
			get future() {
				return u
			},
			get state() {
				return S
			},
			get routes() {
				return o
			},
			get window() {
				return t
			},
			initialize: Ie,
			subscribe: ln,
			enableScrollRestoration: Rn,
			navigate: _n,
			fetch: Ir,
			revalidate: Or,
			createHref: (k) => e.history.createHref(k),
			encodeLocation: (k) => e.history.encodeLocation(k),
			getFetcher: or,
			deleteFetcher: Ht,
			dispose: lt,
			getBlocker: sr,
			deleteBlocker: Nn,
			_internalFetchControllers: X,
			_internalActiveDeferreds: Me,
			_internalSetRoutes: De,
		}),
		C
	)
}
function zy(e) {
	return e != null && (('formData' in e && e.formData != null) || ('body' in e && e.body !== void 0))
}
function Ka(e, t, n, r, i, l, o, a) {
	let s, u
	if (o) {
		s = []
		for (let p of t)
			if ((s.push(p), p.route.id === o)) {
				u = p
				break
			}
	} else (s = t), (u = t[t.length - 1])
	let c = tc(i || '.', ec(s, l), wi(e.pathname, n) || e.pathname, a === 'path')
	return (
		i == null && ((c.search = e.search), (c.hash = e.hash)),
		(i == null || i === '' || i === '.') &&
			u &&
			u.route.index &&
			!rc(c.search) &&
			(c.search = c.search ? c.search.replace(/^\?/, '?index&') : '?index'),
		r && n !== '/' && (c.pathname = c.pathname === '/' ? n : yn([n, c.pathname])),
		kr(c)
	)
}
function Td(e, t, n, r) {
	if (!r || !zy(r)) return { path: n }
	if (r.formMethod && !Wy(r.formMethod)) return { path: n, error: Tt(405, { method: r.formMethod }) }
	let i = () => ({ path: n, error: Tt(400, { type: 'invalid-body' }) }),
		l = r.formMethod || 'get',
		o = e ? l.toUpperCase() : l.toLowerCase(),
		a = Dh(n)
	if (r.body !== void 0) {
		if (r.formEncType === 'text/plain') {
			if (!At(o)) return i()
			let m =
				typeof r.body == 'string'
					? r.body
					: r.body instanceof FormData || r.body instanceof URLSearchParams
					? Array.from(r.body.entries()).reduce((g, y) => {
							let [v, E] = y
							return (
								'' +
								g +
								v +
								'=' +
								E +
								`
`
							)
					  }, '')
					: String(r.body)
			return {
				path: n,
				submission: {
					formMethod: o,
					formAction: a,
					formEncType: r.formEncType,
					formData: void 0,
					json: void 0,
					text: m,
				},
			}
		} else if (r.formEncType === 'application/json') {
			if (!At(o)) return i()
			try {
				let m = typeof r.body == 'string' ? JSON.parse(r.body) : r.body
				return {
					path: n,
					submission: {
						formMethod: o,
						formAction: a,
						formEncType: r.formEncType,
						formData: void 0,
						json: m,
						text: void 0,
					},
				}
			} catch {
				return i()
			}
		}
	}
	ne(typeof FormData == 'function', 'FormData is not available in this environment')
	let s, u
	if (r.formData) (s = Xa(r.formData)), (u = r.formData)
	else if (r.body instanceof FormData) (s = Xa(r.body)), (u = r.body)
	else if (r.body instanceof URLSearchParams) (s = r.body), (u = bd(s))
	else if (r.body == null) (s = new URLSearchParams()), (u = new FormData())
	else
		try {
			;(s = new URLSearchParams(r.body)), (u = bd(s))
		} catch {
			return i()
		}
	let c = {
		formMethod: o,
		formAction: a,
		formEncType: (r && r.formEncType) || 'application/x-www-form-urlencoded',
		formData: u,
		json: void 0,
		text: void 0,
	}
	if (At(c.formMethod)) return { path: n, submission: c }
	let p = kn(n)
	return t && p.search && rc(p.search) && s.append('index', ''), (p.search = '?' + s), { path: kr(p), submission: c }
}
function Fy(e, t) {
	let n = e
	if (t) {
		let r = e.findIndex((i) => i.route.id === t)
		r >= 0 && (n = e.slice(0, r))
	}
	return n
}
function kd(e, t, n, r, i, l, o, a, s, u, c, p, m, g, y, v) {
	let E = v ? Object.values(v)[0] : y ? Object.values(y)[0] : void 0,
		h = e.createURL(t.location),
		d = e.createURL(i),
		f = v ? Object.keys(v)[0] : void 0,
		C = Fy(n, f).filter((b, N) => {
			let { route: _ } = b
			if (_.lazy) return !0
			if (_.loader == null) return !1
			if (l) return _.loader.hydrate ? !0 : t.loaderData[_.id] === void 0 && (!t.errors || t.errors[_.id] === void 0)
			if ($y(t.loaderData, t.matches[N], b) || a.some((I) => I === b.route.id)) return !0
			let L = t.matches[N],
				j = b
			return Pd(
				b,
				Pe({ currentUrl: h, currentParams: L.params, nextUrl: d, nextParams: j.params }, r, {
					actionResult: E,
					defaultShouldRevalidate:
						o || h.pathname + h.search === d.pathname + d.search || h.search !== d.search || Ah(L, j),
				})
			)
		}),
		S = []
	return (
		c.forEach((b, N) => {
			if (l || !n.some((O) => O.route.id === b.routeId) || u.has(N)) return
			let _ = qr(m, b.path, g)
			if (!_) {
				S.push({ key: N, routeId: b.routeId, path: b.path, matches: null, match: null, controller: null })
				return
			}
			let L = t.fetchers.get(N),
				j = Qa(_, b.path),
				I = !1
			p.has(N)
				? (I = !1)
				: s.includes(N)
				? (I = !0)
				: L && L.state !== 'idle' && L.data === void 0
				? (I = o)
				: (I = Pd(
						j,
						Pe(
							{
								currentUrl: h,
								currentParams: t.matches[t.matches.length - 1].params,
								nextUrl: d,
								nextParams: n[n.length - 1].params,
							},
							r,
							{ actionResult: E, defaultShouldRevalidate: o }
						)
				  )),
				I &&
					S.push({ key: N, routeId: b.routeId, path: b.path, matches: _, match: j, controller: new AbortController() })
		}),
		[C, S]
	)
}
function $y(e, t, n) {
	let r = !t || n.route.id !== t.route.id,
		i = e[n.route.id] === void 0
	return r || i
}
function Ah(e, t) {
	let n = e.route.path
	return e.pathname !== t.pathname || (n != null && n.endsWith('*') && e.params['*'] !== t.params['*'])
}
function Pd(e, t) {
	if (e.route.shouldRevalidate) {
		let n = e.route.shouldRevalidate(t)
		if (typeof n == 'boolean') return n
	}
	return t.defaultShouldRevalidate
}
async function _d(e, t, n) {
	if (!e.lazy) return
	let r = await e.lazy()
	if (!e.lazy) return
	let i = n[e.id]
	ne(i, 'No route found in manifest')
	let l = {}
	for (let o in r) {
		let s = i[o] !== void 0 && o !== 'hasErrorBoundary'
		Tr(
			!s,
			'Route "' +
				i.id +
				'" has a static property "' +
				o +
				'" defined but its lazy function is also returning a value for this property. ' +
				('The lazy route property "' + o + '" will be ignored.')
		),
			!s && !ay.has(o) && (l[o] = r[o])
	}
	Object.assign(i, l), Object.assign(i, Pe({}, t(i), { lazy: void 0 }))
}
async function Ni(e, t, n, r, i, l, o, a, s) {
	s === void 0 && (s = {})
	let u,
		c,
		p,
		m = (v) => {
			let E,
				h = new Promise((d, f) => (E = f))
			return (
				(p = () => E()),
				t.signal.addEventListener('abort', p),
				Promise.race([v({ request: t, params: n.params, context: s.requestContext }), h])
			)
		}
	try {
		let v = n.route[e]
		if (n.route.lazy)
			if (v) {
				let E,
					h = await Promise.all([
						m(v).catch((d) => {
							E = d
						}),
						_d(n.route, l, i),
					])
				if (E) throw E
				c = h[0]
			} else if ((await _d(n.route, l, i), (v = n.route[e]), v)) c = await m(v)
			else if (e === 'action') {
				let E = new URL(t.url),
					h = E.pathname + E.search
				throw Tt(405, { method: t.method, pathname: h, routeId: n.route.id })
			} else return { type: Te.data, data: void 0 }
		else if (v) c = await m(v)
		else {
			let E = new URL(t.url),
				h = E.pathname + E.search
			throw Tt(404, { pathname: h })
		}
		ne(
			c !== void 0,
			'You defined ' +
				(e === 'action' ? 'an action' : 'a loader') +
				' for route ' +
				('"' + n.route.id + '" but didn\'t return anything from your `' + e + '` ') +
				'function. Please return a value or `null`.'
		)
	} catch (v) {
		;(u = Te.error), (c = v)
	} finally {
		p && t.signal.removeEventListener('abort', p)
	}
	if (Hy(c)) {
		let v = c.status
		if (Oy.has(v)) {
			let h = c.headers.get('Location')
			if ((ne(h, 'Redirects returned/thrown from loaders/actions must have a Location header'), !Mh.test(h)))
				h = Ka(new URL(t.url), r.slice(0, r.indexOf(n) + 1), o, !0, h, a)
			else if (!s.isStaticRequest) {
				let d = new URL(t.url),
					f = h.startsWith('//') ? new URL(d.protocol + h) : new URL(h),
					w = wi(f.pathname, o) != null
				f.origin === d.origin && w && (h = f.pathname + f.search + f.hash)
			}
			if (s.isStaticRequest) throw (c.headers.set('Location', h), c)
			return {
				type: Te.redirect,
				status: v,
				location: h,
				revalidate: c.headers.get('X-Remix-Revalidate') !== null,
				reloadDocument: c.headers.get('X-Remix-Reload-Document') !== null,
			}
		}
		if (s.isRouteRequest) throw { type: u === Te.error ? Te.error : Te.data, response: c }
		let E
		try {
			let h = c.headers.get('Content-Type')
			h && /\bapplication\/json\b/.test(h) ? (E = await c.json()) : (E = await c.text())
		} catch (h) {
			return { type: Te.error, error: h }
		}
		return u === Te.error
			? { type: u, error: new nc(v, c.statusText, E), headers: c.headers }
			: { type: Te.data, data: E, statusCode: c.status, headers: c.headers }
	}
	if (u === Te.error) return { type: u, error: c }
	if (Vy(c)) {
		var g, y
		return {
			type: Te.deferred,
			deferredData: c,
			statusCode: (g = c.init) == null ? void 0 : g.status,
			headers: ((y = c.init) == null ? void 0 : y.headers) && new Headers(c.init.headers),
		}
	}
	return { type: Te.data, data: c }
}
function Ri(e, t, n, r) {
	let i = e.createURL(Dh(t)).toString(),
		l = { signal: n }
	if (r && At(r.formMethod)) {
		let { formMethod: o, formEncType: a } = r
		;(l.method = o.toUpperCase()),
			a === 'application/json'
				? ((l.headers = new Headers({ 'Content-Type': a })), (l.body = JSON.stringify(r.json)))
				: a === 'text/plain'
				? (l.body = r.text)
				: a === 'application/x-www-form-urlencoded' && r.formData
				? (l.body = Xa(r.formData))
				: (l.body = r.formData)
	}
	return new Request(i, l)
}
function Xa(e) {
	let t = new URLSearchParams()
	for (let [n, r] of e.entries()) t.append(n, typeof r == 'string' ? r : r.name)
	return t
}
function bd(e) {
	let t = new FormData()
	for (let [n, r] of e.entries()) t.append(n, r)
	return t
}
function By(e, t, n, r, i) {
	let l = {},
		o = null,
		a,
		s = !1,
		u = {}
	return (
		n.forEach((c, p) => {
			let m = t[p].route.id
			if ((ne(!mr(c), 'Cannot handle redirect results in processLoaderData'), Jr(c))) {
				let g = Xi(e, m),
					y = c.error
				r && ((y = Object.values(r)[0]), (r = void 0)),
					(o = o || {}),
					o[g.route.id] == null && (o[g.route.id] = y),
					(l[m] = void 0),
					s || ((s = !0), (a = jh(c.error) ? c.error.status : 500)),
					c.headers && (u[m] = c.headers)
			} else
				hr(c) ? (i.set(m, c.deferredData), (l[m] = c.deferredData.data)) : (l[m] = c.data),
					c.statusCode != null && c.statusCode !== 200 && !s && (a = c.statusCode),
					c.headers && (u[m] = c.headers)
		}),
		r && ((o = r), (l[Object.keys(r)[0]] = void 0)),
		{ loaderData: l, errors: o, statusCode: a || 200, loaderHeaders: u }
	)
}
function Ld(e, t, n, r, i, l, o, a) {
	let { loaderData: s, errors: u } = By(t, n, r, i, a)
	for (let c = 0; c < l.length; c++) {
		let { key: p, match: m, controller: g } = l[c]
		ne(o !== void 0 && o[c] !== void 0, 'Did not find corresponding fetcher result')
		let y = o[c]
		if (!(g && g.signal.aborted))
			if (Jr(y)) {
				let v = Xi(e.matches, m == null ? void 0 : m.route.id)
				;(u && u[v.route.id]) || (u = Pe({}, u, { [v.route.id]: y.error })), e.fetchers.delete(p)
			} else if (mr(y)) ne(!1, 'Unhandled fetcher revalidation redirect')
			else if (hr(y)) ne(!1, 'Unhandled fetcher deferred data')
			else {
				let v = In(y.data)
				e.fetchers.set(p, v)
			}
	}
	return { loaderData: s, errors: u }
}
function Nd(e, t, n, r) {
	let i = Pe({}, t)
	for (let l of n) {
		let o = l.route.id
		if (
			(t.hasOwnProperty(o) ? t[o] !== void 0 && (i[o] = t[o]) : e[o] !== void 0 && l.route.loader && (i[o] = e[o]),
			r && r.hasOwnProperty(o))
		)
			break
	}
	return i
}
function Xi(e, t) {
	return (
		(t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
			.reverse()
			.find((r) => r.route.hasErrorBoundary === !0) || e[0]
	)
}
function Rd(e) {
	let t = e.length === 1 ? e[0] : e.find((n) => n.index || !n.path || n.path === '/') || { id: '__shim-error-route__' }
	return { matches: [{ params: {}, pathname: '', pathnameBase: '', route: t }], route: t }
}
function Tt(e, t) {
	let { pathname: n, routeId: r, method: i, type: l } = t === void 0 ? {} : t,
		o = 'Unknown Server Error',
		a = 'Unknown @remix-run/router error'
	return (
		e === 400
			? ((o = 'Bad Request'),
			  i && n && r
					? (a =
							'You made a ' +
							i +
							' request to "' +
							n +
							'" but ' +
							('did not provide a `loader` for route "' + r + '", ') +
							'so there is no way to handle the request.')
					: l === 'defer-action'
					? (a = 'defer() is not supported in actions')
					: l === 'invalid-body' && (a = 'Unable to encode submission body'))
			: e === 403
			? ((o = 'Forbidden'), (a = 'Route "' + r + '" does not match URL "' + n + '"'))
			: e === 404
			? ((o = 'Not Found'), (a = 'No route matches URL "' + n + '"'))
			: e === 405 &&
			  ((o = 'Method Not Allowed'),
			  i && n && r
					? (a =
							'You made a ' +
							i.toUpperCase() +
							' request to "' +
							n +
							'" but ' +
							('did not provide an `action` for route "' + r + '", ') +
							'so there is no way to handle the request.')
					: i && (a = 'Invalid request method "' + i.toUpperCase() + '"')),
		new nc(e || 500, o, new Error(a), !0)
	)
}
function jd(e) {
	for (let t = e.length - 1; t >= 0; t--) {
		let n = e[t]
		if (mr(n)) return { result: n, idx: t }
	}
}
function Dh(e) {
	let t = typeof e == 'string' ? kn(e) : e
	return kr(Pe({}, t, { hash: '' }))
}
function Uy(e, t) {
	return e.pathname !== t.pathname || e.search !== t.search
		? !1
		: e.hash === ''
		? t.hash !== ''
		: e.hash === t.hash
		? !0
		: t.hash !== ''
}
function hr(e) {
	return e.type === Te.deferred
}
function Jr(e) {
	return e.type === Te.error
}
function mr(e) {
	return (e && e.type) === Te.redirect
}
function Vy(e) {
	let t = e
	return (
		t &&
		typeof t == 'object' &&
		typeof t.data == 'object' &&
		typeof t.subscribe == 'function' &&
		typeof t.cancel == 'function' &&
		typeof t.resolveData == 'function'
	)
}
function Hy(e) {
	return (
		e != null &&
		typeof e.status == 'number' &&
		typeof e.statusText == 'string' &&
		typeof e.headers == 'object' &&
		typeof e.body < 'u'
	)
}
function Wy(e) {
	return jy.has(e.toLowerCase())
}
function At(e) {
	return Ny.has(e.toLowerCase())
}
async function Od(e, t, n, r, i, l) {
	for (let o = 0; o < n.length; o++) {
		let a = n[o],
			s = t[o]
		if (!s) continue
		let u = e.find((p) => p.route.id === s.route.id),
			c = u != null && !Ah(u, s) && (l && l[s.route.id]) !== void 0
		if (hr(a) && (i || c)) {
			let p = r[o]
			ne(p, 'Expected an AbortSignal for revalidating fetcher deferred result'),
				await zh(a, p, i).then((m) => {
					m && (n[o] = m || n[o])
				})
		}
	}
}
async function zh(e, t, n) {
	if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
		if (n)
			try {
				return { type: Te.data, data: e.deferredData.unwrappedData }
			} catch (i) {
				return { type: Te.error, error: i }
			}
		return { type: Te.data, data: e.deferredData.data }
	}
}
function rc(e) {
	return new URLSearchParams(e).getAll('index').some((t) => t === '')
}
function Qa(e, t) {
	let n = typeof t == 'string' ? kn(t).search : t.search
	if (e[e.length - 1].route.index && rc(n || '')) return e[e.length - 1]
	let r = Rh(e)
	return r[r.length - 1]
}
function Md(e) {
	let { formMethod: t, formAction: n, formEncType: r, text: i, formData: l, json: o } = e
	if (!(!t || !n || !r)) {
		if (i != null) return { formMethod: t, formAction: n, formEncType: r, formData: void 0, json: void 0, text: i }
		if (l != null) return { formMethod: t, formAction: n, formEncType: r, formData: l, json: void 0, text: void 0 }
		if (o !== void 0) return { formMethod: t, formAction: n, formEncType: r, formData: void 0, json: o, text: void 0 }
	}
}
function Ws(e, t) {
	return t
		? {
				state: 'loading',
				location: e,
				formMethod: t.formMethod,
				formAction: t.formAction,
				formEncType: t.formEncType,
				formData: t.formData,
				json: t.json,
				text: t.text,
		  }
		: {
				state: 'loading',
				location: e,
				formMethod: void 0,
				formAction: void 0,
				formEncType: void 0,
				formData: void 0,
				json: void 0,
				text: void 0,
		  }
}
function Gy(e, t) {
	return {
		state: 'submitting',
		location: e,
		formMethod: t.formMethod,
		formAction: t.formAction,
		formEncType: t.formEncType,
		formData: t.formData,
		json: t.json,
		text: t.text,
	}
}
function ji(e, t) {
	return e
		? {
				state: 'loading',
				formMethod: e.formMethod,
				formAction: e.formAction,
				formEncType: e.formEncType,
				formData: e.formData,
				json: e.json,
				text: e.text,
				data: t,
		  }
		: {
				state: 'loading',
				formMethod: void 0,
				formAction: void 0,
				formEncType: void 0,
				formData: void 0,
				json: void 0,
				text: void 0,
				data: t,
		  }
}
function Yy(e, t) {
	return {
		state: 'submitting',
		formMethod: e.formMethod,
		formAction: e.formAction,
		formEncType: e.formEncType,
		formData: e.formData,
		json: e.json,
		text: e.text,
		data: t ? t.data : void 0,
	}
}
function In(e) {
	return {
		state: 'idle',
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0,
		data: e,
	}
}
function Ky(e, t) {
	try {
		let n = e.sessionStorage.getItem(Ih)
		if (n) {
			let r = JSON.parse(n)
			for (let [i, l] of Object.entries(r || {})) l && Array.isArray(l) && t.set(i, new Set(l || []))
		}
	} catch {}
}
function Xy(e, t) {
	if (t.size > 0) {
		let n = {}
		for (let [r, i] of t) n[r] = [...i]
		try {
			e.sessionStorage.setItem(Ih, JSON.stringify(n))
		} catch (r) {
			Tr(!1, 'Failed to save applied view transitions in sessionStorage (' + r + ').')
		}
	}
}
/**
 * React Router v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ml() {
	return (
		(ml = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t]
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
			  }),
		ml.apply(this, arguments)
	)
}
const fs = P.createContext(null),
	Fh = P.createContext(null),
	Rr = P.createContext(null),
	ps = P.createContext(null),
	jr = P.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
	$h = P.createContext(null)
function Qy(e, t) {
	let { relative: n } = t === void 0 ? {} : t
	Tl() || ne(!1)
	let { basename: r, navigator: i } = P.useContext(Rr),
		{ hash: l, pathname: o, search: a } = Uh(e, { relative: n }),
		s = o
	return r !== '/' && (s = o === '/' ? r : yn([r, o])), i.createHref({ pathname: s, search: a, hash: l })
}
function Tl() {
	return P.useContext(ps) != null
}
function kl() {
	return Tl() || ne(!1), P.useContext(ps).location
}
function Bh(e) {
	P.useContext(Rr).static || P.useLayoutEffect(e)
}
function qy() {
	let { isDataRoute: e } = P.useContext(jr)
	return e ? u0() : Jy()
}
function Jy() {
	Tl() || ne(!1)
	let e = P.useContext(fs),
		{ basename: t, future: n, navigator: r } = P.useContext(Rr),
		{ matches: i } = P.useContext(jr),
		{ pathname: l } = kl(),
		o = JSON.stringify(ec(i, n.v7_relativeSplatPath)),
		a = P.useRef(!1)
	return (
		Bh(() => {
			a.current = !0
		}),
		P.useCallback(
			function (u, c) {
				if ((c === void 0 && (c = {}), !a.current)) return
				if (typeof u == 'number') {
					r.go(u)
					return
				}
				let p = tc(u, JSON.parse(o), l, c.relative === 'path')
				e == null && t !== '/' && (p.pathname = p.pathname === '/' ? t : yn([t, p.pathname])),
					(c.replace ? r.replace : r.push)(p, c.state, c)
			},
			[t, r, o, l, e]
		)
	)
}
function Uh(e, t) {
	let { relative: n } = t === void 0 ? {} : t,
		{ future: r } = P.useContext(Rr),
		{ matches: i } = P.useContext(jr),
		{ pathname: l } = kl(),
		o = JSON.stringify(ec(i, r.v7_relativeSplatPath))
	return P.useMemo(() => tc(e, JSON.parse(o), l, n === 'path'), [e, o, l, n])
}
function Zy(e, t, n, r) {
	Tl() || ne(!1)
	let { navigator: i } = P.useContext(Rr),
		{ matches: l } = P.useContext(jr),
		o = l[l.length - 1],
		a = o ? o.params : {}
	o && o.pathname
	let s = o ? o.pathnameBase : '/'
	o && o.route
	let u = kl(),
		c
	if (t) {
		var p
		let E = typeof t == 'string' ? kn(t) : t
		s === '/' || ((p = E.pathname) != null && p.startsWith(s)) || ne(!1), (c = E)
	} else c = u
	let m = c.pathname || '/',
		g = s === '/' ? m : m.slice(s.length) || '/',
		y = qr(e, { pathname: g }),
		v = i0(
			y &&
				y.map((E) =>
					Object.assign({}, E, {
						params: Object.assign({}, a, E.params),
						pathname: yn([s, i.encodeLocation ? i.encodeLocation(E.pathname).pathname : E.pathname]),
						pathnameBase:
							E.pathnameBase === '/'
								? s
								: yn([s, i.encodeLocation ? i.encodeLocation(E.pathnameBase).pathname : E.pathnameBase]),
					})
				),
			l,
			n,
			r
		)
	return t && v
		? P.createElement(
				ps.Provider,
				{
					value: {
						location: ml({ pathname: '/', search: '', hash: '', state: null, key: 'default' }, c),
						navigationType: be.Pop,
					},
				},
				v
		  )
		: v
}
function e0() {
	let e = a0(),
		t = jh(e) ? e.status + ' ' + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
		n = e instanceof Error ? e.stack : null,
		i = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' },
		l = null
	return P.createElement(
		P.Fragment,
		null,
		P.createElement('h2', null, 'Unexpected Application Error!'),
		P.createElement('h3', { style: { fontStyle: 'italic' } }, t),
		n ? P.createElement('pre', { style: i }, n) : null,
		l
	)
}
const t0 = P.createElement(e0, null)
class n0 extends P.Component {
	constructor(t) {
		super(t), (this.state = { location: t.location, revalidation: t.revalidation, error: t.error })
	}
	static getDerivedStateFromError(t) {
		return { error: t }
	}
	static getDerivedStateFromProps(t, n) {
		return n.location !== t.location || (n.revalidation !== 'idle' && t.revalidation === 'idle')
			? { error: t.error, location: t.location, revalidation: t.revalidation }
			: {
					error: t.error !== void 0 ? t.error : n.error,
					location: n.location,
					revalidation: t.revalidation || n.revalidation,
			  }
	}
	componentDidCatch(t, n) {
		console.error('React Router caught the following error during render', t, n)
	}
	render() {
		return this.state.error !== void 0
			? P.createElement(
					jr.Provider,
					{ value: this.props.routeContext },
					P.createElement($h.Provider, { value: this.state.error, children: this.props.component })
			  )
			: this.props.children
	}
}
function r0(e) {
	let { routeContext: t, match: n, children: r } = e,
		i = P.useContext(fs)
	return (
		i &&
			i.static &&
			i.staticContext &&
			(n.route.errorElement || n.route.ErrorBoundary) &&
			(i.staticContext._deepestRenderedBoundaryId = n.route.id),
		P.createElement(jr.Provider, { value: t }, r)
	)
}
function i0(e, t, n, r) {
	var i
	if ((t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null)) {
		var l
		if ((l = n) != null && l.errors) e = n.matches
		else return null
	}
	let o = e,
		a = (i = n) == null ? void 0 : i.errors
	if (a != null) {
		let c = o.findIndex((p) => p.route.id && (a == null ? void 0 : a[p.route.id]))
		c >= 0 || ne(!1), (o = o.slice(0, Math.min(o.length, c + 1)))
	}
	let s = !1,
		u = -1
	if (n && r && r.v7_partialHydration)
		for (let c = 0; c < o.length; c++) {
			let p = o[c]
			if (((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (u = c), p.route.id)) {
				let { loaderData: m, errors: g } = n,
					y = p.route.loader && m[p.route.id] === void 0 && (!g || g[p.route.id] === void 0)
				if (p.route.lazy || y) {
					;(s = !0), u >= 0 ? (o = o.slice(0, u + 1)) : (o = [o[0]])
					break
				}
			}
		}
	return o.reduceRight((c, p, m) => {
		let g,
			y = !1,
			v = null,
			E = null
		n &&
			((g = a && p.route.id ? a[p.route.id] : void 0),
			(v = p.route.errorElement || t0),
			s &&
				(u < 0 && m === 0
					? (c0('route-fallback', !1), (y = !0), (E = null))
					: u === m && ((y = !0), (E = p.route.hydrateFallbackElement || null))))
		let h = t.concat(o.slice(0, m + 1)),
			d = () => {
				let f
				return (
					g
						? (f = v)
						: y
						? (f = E)
						: p.route.Component
						? (f = P.createElement(p.route.Component, null))
						: p.route.element
						? (f = p.route.element)
						: (f = c),
					P.createElement(r0, {
						match: p,
						routeContext: { outlet: c, matches: h, isDataRoute: n != null },
						children: f,
					})
				)
			}
		return n && (p.route.ErrorBoundary || p.route.errorElement || m === 0)
			? P.createElement(n0, {
					location: n.location,
					revalidation: n.revalidation,
					component: v,
					error: g,
					children: d(),
					routeContext: { outlet: null, matches: h, isDataRoute: !0 },
			  })
			: d()
	}, null)
}
var Vh = (function (e) {
		return (
			(e.UseBlocker = 'useBlocker'), (e.UseRevalidator = 'useRevalidator'), (e.UseNavigateStable = 'useNavigate'), e
		)
	})(Vh || {}),
	Fo = (function (e) {
		return (
			(e.UseBlocker = 'useBlocker'),
			(e.UseLoaderData = 'useLoaderData'),
			(e.UseActionData = 'useActionData'),
			(e.UseRouteError = 'useRouteError'),
			(e.UseNavigation = 'useNavigation'),
			(e.UseRouteLoaderData = 'useRouteLoaderData'),
			(e.UseMatches = 'useMatches'),
			(e.UseRevalidator = 'useRevalidator'),
			(e.UseNavigateStable = 'useNavigate'),
			(e.UseRouteId = 'useRouteId'),
			e
		)
	})(Fo || {})
function l0(e) {
	let t = P.useContext(fs)
	return t || ne(!1), t
}
function o0(e) {
	let t = P.useContext(Fh)
	return t || ne(!1), t
}
function s0(e) {
	let t = P.useContext(jr)
	return t || ne(!1), t
}
function Hh(e) {
	let t = s0(),
		n = t.matches[t.matches.length - 1]
	return n.route.id || ne(!1), n.route.id
}
function a0() {
	var e
	let t = P.useContext($h),
		n = o0(Fo.UseRouteError),
		r = Hh(Fo.UseRouteError)
	return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function u0() {
	let { router: e } = l0(Vh.UseNavigateStable),
		t = Hh(Fo.UseNavigateStable),
		n = P.useRef(!1)
	return (
		Bh(() => {
			n.current = !0
		}),
		P.useCallback(
			function (i, l) {
				l === void 0 && (l = {}),
					n.current && (typeof i == 'number' ? e.navigate(i) : e.navigate(i, ml({ fromRouteId: t }, l)))
			},
			[e, t]
		)
	)
}
const Id = {}
function c0(e, t, n) {
	!t && !Id[e] && (Id[e] = !0)
}
function d0(e) {
	let {
		basename: t = '/',
		children: n = null,
		location: r,
		navigationType: i = be.Pop,
		navigator: l,
		static: o = !1,
		future: a,
	} = e
	Tl() && ne(!1)
	let s = t.replace(/^\/*/, '/'),
		u = P.useMemo(
			() => ({ basename: s, navigator: l, static: o, future: ml({ v7_relativeSplatPath: !1 }, a) }),
			[s, a, l, o]
		)
	typeof r == 'string' && (r = kn(r))
	let { pathname: c = '/', search: p = '', hash: m = '', state: g = null, key: y = 'default' } = r,
		v = P.useMemo(() => {
			let E = wi(c, s)
			return E == null ? null : { location: { pathname: E, search: p, hash: m, state: g, key: y }, navigationType: i }
		}, [s, c, p, m, g, y, i])
	return v == null
		? null
		: P.createElement(Rr.Provider, { value: u }, P.createElement(ps.Provider, { children: n, value: v }))
}
new Promise(() => {})
function f0(e) {
	let t = { hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null }
	return (
		e.Component && Object.assign(t, { element: P.createElement(e.Component), Component: void 0 }),
		e.HydrateFallback &&
			Object.assign(t, { hydrateFallbackElement: P.createElement(e.HydrateFallback), HydrateFallback: void 0 }),
		e.ErrorBoundary && Object.assign(t, { errorElement: P.createElement(e.ErrorBoundary), ErrorBoundary: void 0 }),
		t
	)
}
/**
 * React Router DOM v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function gl() {
	return (
		(gl = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t]
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
			  }),
		gl.apply(this, arguments)
	)
}
function p0(e, t) {
	if (e == null) return {}
	var n = {},
		r = Object.keys(e),
		i,
		l
	for (l = 0; l < r.length; l++) (i = r[l]), !(t.indexOf(i) >= 0) && (n[i] = e[i])
	return n
}
function h0(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function m0(e, t) {
	return e.button === 0 && (!t || t === '_self') && !h0(e)
}
const g0 = [
	'onClick',
	'relative',
	'reloadDocument',
	'replace',
	'state',
	'target',
	'to',
	'preventScrollReset',
	'unstable_viewTransition',
]
function v0(e, t) {
	return Dy({
		basename: t == null ? void 0 : t.basename,
		future: gl({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
		history: ly({ window: t == null ? void 0 : t.window }),
		hydrationData: (t == null ? void 0 : t.hydrationData) || y0(),
		routes: e,
		mapRouteProperties: f0,
		window: t == null ? void 0 : t.window,
	}).initialize()
}
function y0() {
	var e
	let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData
	return t && t.errors && (t = gl({}, t, { errors: w0(t.errors) })), t
}
function w0(e) {
	if (!e) return null
	let t = Object.entries(e),
		n = {}
	for (let [r, i] of t)
		if (i && i.__type === 'RouteErrorResponse') n[r] = new nc(i.status, i.statusText, i.data, i.internal === !0)
		else if (i && i.__type === 'Error') {
			if (i.__subType) {
				let l = window[i.__subType]
				if (typeof l == 'function')
					try {
						let o = new l(i.message)
						;(o.stack = ''), (n[r] = o)
					} catch {}
			}
			if (n[r] == null) {
				let l = new Error(i.message)
				;(l.stack = ''), (n[r] = l)
			}
		} else n[r] = i
	return n
}
const x0 = P.createContext({ isTransitioning: !1 }),
	S0 = P.createContext(new Map()),
	E0 = 'startTransition',
	Ad = Ym[E0],
	C0 = 'flushSync',
	Dd = iy[C0]
function T0(e) {
	Ad ? Ad(e) : e()
}
function Oi(e) {
	Dd ? Dd(e) : e()
}
class k0 {
	constructor() {
		;(this.status = 'pending'),
			(this.promise = new Promise((t, n) => {
				;(this.resolve = (r) => {
					this.status === 'pending' && ((this.status = 'resolved'), t(r))
				}),
					(this.reject = (r) => {
						this.status === 'pending' && ((this.status = 'rejected'), n(r))
					})
			}))
	}
}
function P0(e) {
	let { fallbackElement: t, router: n, future: r } = e,
		[i, l] = P.useState(n.state),
		[o, a] = P.useState(),
		[s, u] = P.useState({ isTransitioning: !1 }),
		[c, p] = P.useState(),
		[m, g] = P.useState(),
		[y, v] = P.useState(),
		E = P.useRef(new Map()),
		{ v7_startTransition: h } = r || {},
		d = P.useCallback(
			(b) => {
				h ? T0(b) : b()
			},
			[h]
		),
		f = P.useCallback(
			(b, N) => {
				let { deletedFetchers: _, unstable_flushSync: L, unstable_viewTransitionOpts: j } = N
				_.forEach((O) => E.current.delete(O)),
					b.fetchers.forEach((O, F) => {
						O.data !== void 0 && E.current.set(F, O.data)
					})
				let I = n.window == null || typeof n.window.document.startViewTransition != 'function'
				if (!j || I) {
					L ? Oi(() => l(b)) : d(() => l(b))
					return
				}
				if (L) {
					Oi(() => {
						m && (c && c.resolve(), m.skipTransition()),
							u({
								isTransitioning: !0,
								flushSync: !0,
								currentLocation: j.currentLocation,
								nextLocation: j.nextLocation,
							})
					})
					let O = n.window.document.startViewTransition(() => {
						Oi(() => l(b))
					})
					O.finished.finally(() => {
						Oi(() => {
							p(void 0), g(void 0), a(void 0), u({ isTransitioning: !1 })
						})
					}),
						Oi(() => g(O))
					return
				}
				m
					? (c && c.resolve(),
					  m.skipTransition(),
					  v({ state: b, currentLocation: j.currentLocation, nextLocation: j.nextLocation }))
					: (a(b),
					  u({ isTransitioning: !0, flushSync: !1, currentLocation: j.currentLocation, nextLocation: j.nextLocation }))
			},
			[n.window, m, c, E, d]
		)
	P.useLayoutEffect(() => n.subscribe(f), [n, f]),
		P.useEffect(() => {
			s.isTransitioning && !s.flushSync && p(new k0())
		}, [s]),
		P.useEffect(() => {
			if (c && o && n.window) {
				let b = o,
					N = c.promise,
					_ = n.window.document.startViewTransition(async () => {
						d(() => l(b)), await N
					})
				_.finished.finally(() => {
					p(void 0), g(void 0), a(void 0), u({ isTransitioning: !1 })
				}),
					g(_)
			}
		}, [d, o, c, n.window]),
		P.useEffect(() => {
			c && o && i.location.key === o.location.key && c.resolve()
		}, [c, m, i.location, o]),
		P.useEffect(() => {
			!s.isTransitioning &&
				y &&
				(a(y.state),
				u({ isTransitioning: !0, flushSync: !1, currentLocation: y.currentLocation, nextLocation: y.nextLocation }),
				v(void 0))
		}, [s.isTransitioning, y]),
		P.useEffect(() => {}, [])
	let w = P.useMemo(
			() => ({
				createHref: n.createHref,
				encodeLocation: n.encodeLocation,
				go: (b) => n.navigate(b),
				push: (b, N, _) => n.navigate(b, { state: N, preventScrollReset: _ == null ? void 0 : _.preventScrollReset }),
				replace: (b, N, _) =>
					n.navigate(b, { replace: !0, state: N, preventScrollReset: _ == null ? void 0 : _.preventScrollReset }),
			}),
			[n]
		),
		C = n.basename || '/',
		S = P.useMemo(() => ({ router: n, navigator: w, static: !1, basename: C }), [n, w, C])
	return P.createElement(
		P.Fragment,
		null,
		P.createElement(
			fs.Provider,
			{ value: S },
			P.createElement(
				Fh.Provider,
				{ value: i },
				P.createElement(
					S0.Provider,
					{ value: E.current },
					P.createElement(
						x0.Provider,
						{ value: s },
						P.createElement(
							d0,
							{
								basename: C,
								location: i.location,
								navigationType: i.historyAction,
								navigator: w,
								future: { v7_relativeSplatPath: n.future.v7_relativeSplatPath },
							},
							i.initialized || n.future.v7_partialHydration
								? P.createElement(_0, { routes: n.routes, future: n.future, state: i })
								: t
						)
					)
				)
			)
		),
		null
	)
}
function _0(e) {
	let { routes: t, future: n, state: r } = e
	return Zy(t, void 0, r, n)
}
const b0 = typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u',
	L0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
	Fi = P.forwardRef(function (t, n) {
		let {
				onClick: r,
				relative: i,
				reloadDocument: l,
				replace: o,
				state: a,
				target: s,
				to: u,
				preventScrollReset: c,
				unstable_viewTransition: p,
			} = t,
			m = p0(t, g0),
			{ basename: g } = P.useContext(Rr),
			y,
			v = !1
		if (typeof u == 'string' && L0.test(u) && ((y = u), b0))
			try {
				let f = new URL(window.location.href),
					w = u.startsWith('//') ? new URL(f.protocol + u) : new URL(u),
					C = wi(w.pathname, g)
				w.origin === f.origin && C != null ? (u = C + w.search + w.hash) : (v = !0)
			} catch {}
		let E = Qy(u, { relative: i }),
			h = N0(u, { replace: o, state: a, target: s, preventScrollReset: c, relative: i, unstable_viewTransition: p })
		function d(f) {
			r && r(f), f.defaultPrevented || h(f)
		}
		return P.createElement('a', gl({}, m, { href: y || E, onClick: v || l ? r : d, ref: n, target: s }))
	})
var zd
;(function (e) {
	;(e.UseScrollRestoration = 'useScrollRestoration'),
		(e.UseSubmit = 'useSubmit'),
		(e.UseSubmitFetcher = 'useSubmitFetcher'),
		(e.UseFetcher = 'useFetcher'),
		(e.useViewTransitionState = 'useViewTransitionState')
})(zd || (zd = {}))
var Fd
;(function (e) {
	;(e.UseFetcher = 'useFetcher'), (e.UseFetchers = 'useFetchers'), (e.UseScrollRestoration = 'useScrollRestoration')
})(Fd || (Fd = {}))
function N0(e, t) {
	let {
			target: n,
			replace: r,
			state: i,
			preventScrollReset: l,
			relative: o,
			unstable_viewTransition: a,
		} = t === void 0 ? {} : t,
		s = qy(),
		u = kl(),
		c = Uh(e, { relative: o })
	return P.useCallback(
		(p) => {
			if (m0(p, n)) {
				p.preventDefault()
				let m = r !== void 0 ? r : kr(u) === kr(c)
				s(e, { replace: m, state: i, preventScrollReset: l, relative: o, unstable_viewTransition: a })
			}
		},
		[u, s, c, r, i, n, e, l, o, a]
	)
}
var Wh = { exports: {} },
	R0 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
	j0 = R0,
	O0 = j0
function Gh() {}
function Yh() {}
Yh.resetWarningCache = Gh
var M0 = function () {
	function e(r, i, l, o, a, s) {
		if (s !== O0) {
			var u = new Error(
				'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
			)
			throw ((u.name = 'Invariant Violation'), u)
		}
	}
	e.isRequired = e
	function t() {
		return e
	}
	var n = {
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
		checkPropTypes: Yh,
		resetWarningCache: Gh,
	}
	return (n.PropTypes = n), n
}
Wh.exports = M0()
var I0 = Wh.exports
const _e = Xo(I0)
function $d(e, t) {
	var n = Object.keys(e)
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e)
		t &&
			(r = r.filter(function (i) {
				return Object.getOwnPropertyDescriptor(e, i).enumerable
			})),
			n.push.apply(n, r)
	}
	return n
}
function Bd(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] != null ? arguments[t] : {}
		t % 2
			? $d(Object(n), !0).forEach(function (r) {
					Kh(e, r, n[r])
			  })
			: Object.getOwnPropertyDescriptors
			? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
			: $d(Object(n)).forEach(function (r) {
					Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
			  })
	}
	return e
}
function uo(e) {
	'@babel/helpers - typeof'
	return (
		typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
			? (uo = function (t) {
					return typeof t
			  })
			: (uo = function (t) {
					return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
						? 'symbol'
						: typeof t
			  }),
		uo(e)
	)
}
function Kh(e, t, n) {
	return (
		t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e
	)
}
function A0(e, t) {
	return D0(e) || z0(e, t) || F0(e, t) || $0()
}
function D0(e) {
	if (Array.isArray(e)) return e
}
function z0(e, t) {
	var n = e && ((typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'])
	if (n != null) {
		var r = [],
			i = !0,
			l = !1,
			o,
			a
		try {
			for (n = n.call(e); !(i = (o = n.next()).done) && (r.push(o.value), !(t && r.length === t)); i = !0);
		} catch (s) {
			;(l = !0), (a = s)
		} finally {
			try {
				!i && n.return != null && n.return()
			} finally {
				if (l) throw a
			}
		}
		return r
	}
}
function F0(e, t) {
	if (e) {
		if (typeof e == 'string') return Ud(e, t)
		var n = Object.prototype.toString.call(e).slice(8, -1)
		if ((n === 'Object' && e.constructor && (n = e.constructor.name), n === 'Map' || n === 'Set')) return Array.from(e)
		if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ud(e, t)
	}
}
function Ud(e, t) {
	;(t == null || t > e.length) && (t = e.length)
	for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
	return r
}
function $0() {
	throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
var B0 = function (t) {
		var n = q.useRef(t)
		return (
			q.useEffect(
				function () {
					n.current = t
				},
				[t]
			),
			n.current
		)
	},
	$o = function (t) {
		return t !== null && uo(t) === 'object'
	},
	Vd = '[object Object]',
	U0 = function e(t, n) {
		if (!$o(t) || !$o(n)) return t === n
		var r = Array.isArray(t),
			i = Array.isArray(n)
		if (r !== i) return !1
		var l = Object.prototype.toString.call(t) === Vd,
			o = Object.prototype.toString.call(n) === Vd
		if (l !== o) return !1
		if (!l && !r) return t === n
		var a = Object.keys(t),
			s = Object.keys(n)
		if (a.length !== s.length) return !1
		for (var u = {}, c = 0; c < a.length; c += 1) u[a[c]] = !0
		for (var p = 0; p < s.length; p += 1) u[s[p]] = !0
		var m = Object.keys(u)
		if (m.length !== a.length) return !1
		var g = t,
			y = n,
			v = function (h) {
				return e(g[h], y[h])
			}
		return m.every(v)
	},
	V0 = function (t, n, r) {
		return $o(t)
			? Object.keys(t).reduce(function (i, l) {
					var o = !$o(n) || !U0(t[l], n[l])
					return r.includes(l)
						? (o && console.warn('Unsupported prop change: options.'.concat(l, ' is not a mutable property.')), i)
						: o
						? Bd(Bd({}, i || {}), {}, Kh({}, l, t[l]))
						: i
			  }, null)
			: null
	},
	Xh = q.createContext(null)
Xh.displayName = 'ElementsContext'
var H0 = function (t, n) {
		if (!t)
			throw new Error(
				'Could not find Elements context; You need to wrap the part of your app that '.concat(
					n,
					' in an <Elements> provider.'
				)
			)
		return t
	},
	Qh = q.createContext(null)
Qh.displayName = 'CartElementContext'
var W0 = function (t, n) {
	if (!t)
		throw new Error(
			'Could not find Elements context; You need to wrap the part of your app that '.concat(
				n,
				' in an <Elements> provider.'
			)
		)
	return t
}
_e.any, _e.object
var Hd = function (t) {
		var n = q.useContext(Xh)
		return H0(n, t)
	},
	Wd = function (t) {
		var n = q.useContext(Qh)
		return W0(n, t)
	}
_e.func.isRequired
var et = function (t, n, r) {
		var i = !!r,
			l = q.useRef(r)
		q.useEffect(
			function () {
				l.current = r
			},
			[r]
		),
			q.useEffect(
				function () {
					if (!i || !t) return function () {}
					var o = function () {
						l.current && l.current.apply(l, arguments)
					}
					return (
						t.on(n, o),
						function () {
							t.off(n, o)
						}
					)
				},
				[i, n, t, l]
			)
	},
	G0 = function (t) {
		return t.charAt(0).toUpperCase() + t.slice(1)
	},
	je = function (t, n) {
		var r = ''.concat(G0(t), 'Element'),
			i = function (s) {
				var u = s.id,
					c = s.className,
					p = s.options,
					m = p === void 0 ? {} : p,
					g = s.onBlur,
					y = s.onFocus,
					v = s.onReady,
					E = s.onChange,
					h = s.onEscape,
					d = s.onClick,
					f = s.onLoadError,
					w = s.onLoaderStart,
					C = s.onNetworksChange,
					S = s.onCheckout,
					b = s.onLineItemClick,
					N = s.onConfirm,
					_ = s.onCancel,
					L = s.onShippingAddressChange,
					j = s.onShippingRateChange,
					I = Hd('mounts <'.concat(r, '>')),
					O = I.elements,
					F = q.useState(null),
					H = A0(F, 2),
					Y = H[0],
					X = H[1],
					D = q.useRef(null),
					z = q.useRef(null),
					V = Wd('mounts <'.concat(r, '>')),
					ee = V.setCart,
					re = V.setCartState
				et(Y, 'blur', g),
					et(Y, 'focus', y),
					et(Y, 'escape', h),
					et(Y, 'click', d),
					et(Y, 'loaderror', f),
					et(Y, 'loaderstart', w),
					et(Y, 'networkschange', C),
					et(Y, 'lineitemclick', b),
					et(Y, 'confirm', N),
					et(Y, 'cancel', _),
					et(Y, 'shippingaddresschange', L),
					et(Y, 'shippingratechange', j)
				var Ne
				t === 'cart'
					? (Ne = function (Ie) {
							re(Ie), v && v(Ie)
					  })
					: v &&
					  (t === 'payButton'
							? (Ne = v)
							: (Ne = function () {
									v(Y)
							  })),
					et(Y, 'ready', Ne)
				var xe =
					t === 'cart'
						? function (ae) {
								re(ae), E && E(ae)
						  }
						: E
				et(Y, 'change', xe)
				var Me =
					t === 'cart'
						? function (ae) {
								re(ae), S && S(ae)
						  }
						: S
				et(Y, 'checkout', Me),
					q.useLayoutEffect(
						function () {
							if (D.current === null && O && z.current !== null) {
								var ae = O.create(t, m)
								t === 'cart' && ee && ee(ae), (D.current = ae), X(ae), ae.mount(z.current)
							}
						},
						[O, m, ee]
					)
				var oe = B0(m)
				return (
					q.useEffect(
						function () {
							if (D.current) {
								var ae = V0(m, oe, ['paymentRequest'])
								ae && D.current.update(ae)
							}
						},
						[m, oe]
					),
					q.useLayoutEffect(function () {
						return function () {
							D.current && (D.current.destroy(), (D.current = null))
						}
					}, []),
					q.createElement('div', { id: u, className: c, ref: z })
				)
			},
			l = function (s) {
				Hd('mounts <'.concat(r, '>')), Wd('mounts <'.concat(r, '>'))
				var u = s.id,
					c = s.className
				return q.createElement('div', { id: u, className: c })
			},
			o = n ? l : i
		return (
			(o.propTypes = {
				id: _e.string,
				className: _e.string,
				onChange: _e.func,
				onBlur: _e.func,
				onFocus: _e.func,
				onReady: _e.func,
				onEscape: _e.func,
				onClick: _e.func,
				onLoadError: _e.func,
				onLoaderStart: _e.func,
				onNetworksChange: _e.func,
				onCheckout: _e.func,
				onLineItemClick: _e.func,
				onConfirm: _e.func,
				onCancel: _e.func,
				onShippingAddressChange: _e.func,
				onShippingRateChange: _e.func,
				options: _e.object,
			}),
			(o.displayName = r),
			(o.__elementType = t),
			o
		)
	},
	Oe = typeof window > 'u'
je('auBankAccount', Oe)
var Y0 = je('card', Oe)
je('cardNumber', Oe)
je('cardExpiry', Oe)
je('cardCvc', Oe)
je('fpxBank', Oe)
je('iban', Oe)
je('idealBank', Oe)
je('p24Bank', Oe)
je('epsBank', Oe)
je('payment', Oe)
je('payButton', Oe)
je('paymentRequestButton', Oe)
je('linkAuthentication', Oe)
je('address', Oe)
je('shippingAddress', Oe)
je('cart', Oe)
je('paymentMethodMessaging', Oe)
je('affirmMessage', Oe)
je('afterpayClearpayMessage', Oe)
var ic = Object.defineProperty,
	K0 = Object.getOwnPropertyDescriptor,
	X0 = Object.getOwnPropertyNames,
	Q0 = Object.prototype.hasOwnProperty,
	q0 = (e, t) => {
		for (var n in t) ic(e, n, { get: t[n], enumerable: !0 })
	},
	J0 = (e, t, n, r) => {
		if ((t && typeof t == 'object') || typeof t == 'function')
			for (let i of X0(t))
				!Q0.call(e, i) && i !== n && ic(e, i, { get: () => t[i], enumerable: !(r = K0(t, i)) || r.enumerable })
		return e
	},
	Z0 = (e) => J0(ic({}, '__esModule', { value: !0 }), e),
	Gd = (e, t, n) =>
		new Promise((r, i) => {
			var l = (s) => {
					try {
						a(n.next(s))
					} catch (u) {
						i(u)
					}
				},
				o = (s) => {
					try {
						a(n.throw(s))
					} catch (u) {
						i(u)
					}
				},
				a = (s) => (s.done ? r(s.value) : Promise.resolve(s.value).then(l, o))
			a((n = n.apply(e, t)).next())
		}),
	qh = {}
q0(qh, {
	SubmissionError: () => cr,
	appendExtraData: () => co,
	createClient: () => Jh,
	getDefaultClient: () => xw,
	isSubmissionError: () => uw,
})
var qa = Z0(qh),
	Un = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
	ew = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/
function tw(e) {
	e = String(e)
	for (var t, n, r, i, l = '', o = 0, a = e.length % 3; o < e.length; ) {
		if ((n = e.charCodeAt(o++)) > 255 || (r = e.charCodeAt(o++)) > 255 || (i = e.charCodeAt(o++)) > 255)
			throw new TypeError(
				"Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range."
			)
		;(t = (n << 16) | (r << 8) | i),
			(l += Un.charAt((t >> 18) & 63) + Un.charAt((t >> 12) & 63) + Un.charAt((t >> 6) & 63) + Un.charAt(t & 63))
	}
	return a ? l.slice(0, a - 3) + '==='.substring(a) : l
}
function nw(e) {
	if (((e = String(e).replace(/[\t\n\f\r ]+/g, '')), !ew.test(e)))
		throw new TypeError("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.")
	e += '=='.slice(2 - (e.length & 3))
	for (var t, n = '', r, i, l = 0; l < e.length; )
		(t =
			(Un.indexOf(e.charAt(l++)) << 18) |
			(Un.indexOf(e.charAt(l++)) << 12) |
			((r = Un.indexOf(e.charAt(l++))) << 6) |
			(i = Un.indexOf(e.charAt(l++)))),
			(n +=
				r === 64
					? String.fromCharCode((t >> 16) & 255)
					: i === 64
					? String.fromCharCode((t >> 16) & 255, (t >> 8) & 255)
					: String.fromCharCode((t >> 16) & 255, (t >> 8) & 255, t & 255))
	return n
}
var rw = () =>
		navigator.webdriver ||
		!!document.documentElement.getAttribute(nw('d2ViZHJpdmVy')) ||
		!!window.callPhantom ||
		!!window._phantom,
	iw = class {
		constructor() {
			;(this.loadedAt = Date.now()), (this.webdriver = rw())
		}
		data() {
			return { loadedAt: this.loadedAt, webdriver: this.webdriver }
		}
	},
	lw = class {
		constructor(t) {
			;(this.kind = 'success'), (this.next = t.next)
		}
	}
function ow(e) {
	return 'next' in e && typeof e.next == 'string'
}
var sw = class {
	constructor(t, n) {
		;(this.paymentIntentClientSecret = t), (this.resubmitKey = n), (this.kind = 'stripePluginPending')
	}
}
function aw(e) {
	if ('stripe' in e && 'resubmitKey' in e && typeof e.resubmitKey == 'string') {
		let { stripe: t } = e
		return (
			typeof t == 'object' &&
			t != null &&
			'paymentIntentClientSecret' in t &&
			typeof t.paymentIntentClientSecret == 'string'
		)
	}
	return !1
}
function uw(e) {
	return e.kind === 'error'
}
var cr = class {
	constructor(...e) {
		;(this.kind = 'error'), (this.formErrors = []), (this.fieldErrors = new Map())
		var t
		for (let n of e) {
			if (!n.field) {
				this.formErrors.push({ code: n.code && cw(n.code) ? n.code : 'UNSPECIFIED', message: n.message })
				continue
			}
			let r = (t = this.fieldErrors.get(n.field)) != null ? t : []
			r.push({ code: n.code && fw(n.code) ? n.code : 'UNSPECIFIED', message: n.message }),
				this.fieldErrors.set(n.field, r)
		}
	}
	getFormErrors() {
		return [...this.formErrors]
	}
	getFieldErrors(e) {
		var t
		return (t = this.fieldErrors.get(e)) != null ? t : []
	}
	getAllFieldErrors() {
		return Array.from(this.fieldErrors)
	}
}
function cw(e) {
	return e in dw
}
var dw = {
	BLOCKED: 'BLOCKED',
	EMPTY: 'EMPTY',
	FILES_TOO_BIG: 'FILES_TOO_BIG',
	FORM_NOT_FOUND: 'FORM_NOT_FOUND',
	INACTIVE: 'INACTIVE',
	NO_FILE_UPLOADS: 'NO_FILE_UPLOADS',
	PROJECT_NOT_FOUND: 'PROJECT_NOT_FOUND',
	TOO_MANY_FILES: 'TOO_MANY_FILES',
}
function fw(e) {
	return e in pw
}
var pw = {
	REQUIRED_FIELD_EMPTY: 'REQUIRED_FIELD_EMPTY',
	REQUIRED_FIELD_MISSING: 'REQUIRED_FIELD_MISSING',
	STRIPE_CLIENT_ERROR: 'STRIPE_CLIENT_ERROR',
	STRIPE_SCA_ERROR: 'STRIPE_SCA_ERROR',
	TYPE_EMAIL: 'TYPE_EMAIL',
	TYPE_NUMERIC: 'TYPE_NUMERIC',
	TYPE_TEXT: 'TYPE_TEXT',
}
function hw(e) {
	return (
		('errors' in e && Array.isArray(e.errors) && e.errors.every((t) => typeof t.message == 'string')) ||
		('error' in e && typeof e.error == 'string')
	)
}
var mw = '3.0.1',
	gw = (e) => tw(JSON.stringify(e)),
	vw = (e) => {
		let t = `@formspree/core@${mw}`
		return e ? `${e} ${t}` : t
	}
function co(e, t, n) {
	e instanceof FormData ? e.append(t, n) : (e[t] = n)
}
function yw(e) {
	return e !== null && typeof e == 'object'
}
var ww = class {
	constructor(t = {}) {
		;(this.project = t.project), (this.stripe = t.stripe), typeof window < 'u' && (this.session = new iw())
	}
	submitForm(t, n) {
		return Gd(this, arguments, function* (r, i, l = {}) {
			let o = l.endpoint || 'https://formspree.io',
				a = this.project ? `${o}/p/${this.project}/f/${r}` : `${o}/f/${r}`,
				s = { Accept: 'application/json', 'Formspree-Client': vw(l.clientName) }
			this.session && (s['Formspree-Session-Data'] = gw(this.session.data())),
				i instanceof FormData || (s['Content-Type'] = 'application/json')
			function u(p) {
				return Gd(this, null, function* () {
					try {
						let m = yield (yield fetch(a, {
							method: 'POST',
							mode: 'cors',
							body: p instanceof FormData ? p : JSON.stringify(p),
							headers: s,
						})).json()
						if (yw(m)) {
							if (hw(m)) return Array.isArray(m.errors) ? new cr(...m.errors) : new cr({ message: m.error })
							if (aw(m)) return new sw(m.stripe.paymentIntentClientSecret, m.resubmitKey)
							if (ow(m)) return new lw({ next: m.next })
						}
						return new cr({ message: 'Unexpected response format' })
					} catch (m) {
						let g = m instanceof Error ? m.message : `Unknown error while posting to Formspree: ${JSON.stringify(m)}`
						return new cr({ message: g })
					}
				})
			}
			if (this.stripe && l.createPaymentMethod) {
				let p = yield l.createPaymentMethod()
				if (p.error)
					return new cr({
						code: 'STRIPE_CLIENT_ERROR',
						field: 'paymentMethod',
						message: 'Error creating payment method',
					})
				co(i, 'paymentMethod', p.paymentMethod.id)
				let m = yield u(i)
				if (m.kind === 'error') return m
				if (m.kind === 'stripePluginPending') {
					let g = yield this.stripe.handleCardAction(m.paymentIntentClientSecret)
					if (g.error)
						return new cr({ code: 'STRIPE_CLIENT_ERROR', field: 'paymentMethod', message: 'Stripe SCA error' })
					i instanceof FormData ? i.delete('paymentMethod') : delete i.paymentMethod,
						co(i, 'paymentIntent', g.paymentIntent.id),
						co(i, 'resubmitKey', m.resubmitKey)
					let y = yield u(i)
					return Yd(y), y
				}
				return m
			}
			let c = yield u(i)
			return Yd(c), c
		})
	}
}
function Yd(e) {
	let { kind: t } = e
	if (t !== 'success' && t !== 'error') throw new Error(`Unexpected submission result (kind: ${t})`)
}
var Jh = (e) => new ww(e),
	xw = () => (Gs || (Gs = Jh()), Gs),
	Gs,
	Zh = {}
Object.defineProperty(Zh, '__esModule', { value: !0 })
function fo(e) {
	'@babel/helpers - typeof'
	return (
		typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
			? (fo = function (t) {
					return typeof t
			  })
			: (fo = function (t) {
					return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
						? 'symbol'
						: typeof t
			  }),
		fo(e)
	)
}
var em = 'https://js.stripe.com/v3',
	Sw = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
	Kd =
		'loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used',
	Ew = function () {
		for (var t = document.querySelectorAll('script[src^="'.concat(em, '"]')), n = 0; n < t.length; n++) {
			var r = t[n]
			if (Sw.test(r.src)) return r
		}
		return null
	},
	Cw = function (t) {
		var n = t && !t.advancedFraudSignals ? '?advancedFraudSignals=false' : '',
			r = document.createElement('script')
		r.src = ''.concat(em).concat(n)
		var i = document.head || document.body
		if (!i) throw new Error('Expected document.body not to be null. Stripe.js requires a <body> element.')
		return i.appendChild(r), r
	},
	Tw = function (t, n) {
		!t || !t._registerWrapper || t._registerWrapper({ name: 'stripe-js', version: '1.54.2', startTime: n })
	},
	Yl = null,
	kw = function (t) {
		return (
			Yl !== null ||
				(Yl = new Promise(function (n, r) {
					if (typeof window > 'u' || typeof document > 'u') {
						n(null)
						return
					}
					if ((window.Stripe && t && console.warn(Kd), window.Stripe)) {
						n(window.Stripe)
						return
					}
					try {
						var i = Ew()
						i && t ? console.warn(Kd) : i || (i = Cw(t)),
							i.addEventListener('load', function () {
								window.Stripe ? n(window.Stripe) : r(new Error('Stripe.js not available'))
							}),
							i.addEventListener('error', function () {
								r(new Error('Failed to load Stripe.js'))
							})
					} catch (l) {
						r(l)
						return
					}
				})),
			Yl
		)
	},
	Pw = function (t, n, r) {
		if (t === null) return null
		var i = t.apply(void 0, n)
		return Tw(i, r), i
	},
	Xd = function (t) {
		var n = `invalid load parameters; expected object of shape

    {advancedFraudSignals: boolean}

but received

    `.concat(
			JSON.stringify(t),
			`
`
		)
		if (t === null || fo(t) !== 'object') throw new Error(n)
		if (Object.keys(t).length === 1 && typeof t.advancedFraudSignals == 'boolean') return t
		throw new Error(n)
	},
	po,
	Ja = !1,
	tm = function () {
		for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r]
		Ja = !0
		var i = Date.now()
		return kw(po).then(function (l) {
			return Pw(l, n, i)
		})
	}
tm.setLoadParameters = function (e) {
	if (Ja && po) {
		var t = Xd(e),
			n = Object.keys(t),
			r = n.reduce(function (i, l) {
				var o
				return i && e[l] === ((o = po) === null || o === void 0 ? void 0 : o[l])
			}, !0)
		if (r) return
	}
	if (Ja) throw new Error('You cannot change load parameters after calling loadStripe')
	po = Xd(e)
}
Zh.loadStripe = tm
function Qd(e) {
	let { prefix: t, field: n, errors: r, ...i } = e
	if (r == null) return null
	let l = n ? r.getFieldErrors(n) : r.getFormErrors()
	return l.length === 0
		? null
		: q.createElement('div', { ...i }, t ? `${t} ` : null, l.map((o) => o.message).join(', '))
}
var _w = q.createContext(null)
function bw() {
	return P.useContext(_w) ?? { client: qa.getDefaultClient() }
}
var Lw = '2.5.1',
	Nw = `@formspree/react@${Lw}`
function Rw(e, t = {}) {
	let n = bw(),
		{ client: r = n.client, extraData: i, onError: l, onSuccess: o, origin: a } = t,
		{ stripe: s } = r,
		u = P.useMemo(() => (s == null ? void 0 : s.elements().getElement(Y0)), [s])
	return async function (c) {
		let p = jw(c) ? Ow(c) : c
		if (typeof i == 'object')
			for (let [g, y] of Object.entries(i)) {
				let v
				typeof y == 'function' ? (v = await y()) : (v = y), v !== void 0 && qa.appendExtraData(p, g, v)
			}
		let m = await r.submitForm(e, p, {
			endpoint: a,
			clientName: Nw,
			createPaymentMethod:
				s && u ? () => s.createPaymentMethod({ type: 'card', card: u, billing_details: Mw(p) }) : void 0,
		})
		qa.isSubmissionError(m) ? l == null || l(m) : o == null || o(m)
	}
}
function jw(e) {
	return 'preventDefault' in e && typeof e.preventDefault == 'function'
}
function Ow(e) {
	e.preventDefault()
	let t = e.currentTarget
	if (t.tagName != 'FORM') throw new Error('submit was triggered for a non-form element')
	return new FormData(t)
}
function Mw(e) {
	let t = { address: Iw(e) }
	for (let n of ['name', 'email', 'phone']) {
		let r = e instanceof FormData ? e.get(n) : e[n]
		r && typeof r == 'string' && (t[n] = r)
	}
	return t
}
function Iw(e) {
	let t = {}
	for (let [n, r] of [
		['address_line1', 'line1'],
		['address_line2', 'line2'],
		['address_city', 'city'],
		['address_country', 'country'],
		['address_state', 'state'],
		['address_postal_code', 'postal_code'],
	]) {
		let i = e instanceof FormData ? e.get(n) : e[n]
		i && typeof i == 'string' && (t[r] = i)
	}
	return t
}
function Aw(e, t = {}) {
	let [n, r] = P.useState(null),
		[i, l] = P.useState(null),
		[o, a] = P.useState(!1),
		[s, u] = P.useState(!1)
	if (!e) throw new Error('You must provide a form key or hashid (e.g. useForm("myForm") or useForm("123xyz")')
	let c = Rw(e, {
		client: t.client,
		extraData: t.data,
		onError(p) {
			r(p), a(!1), u(!1)
		},
		onSuccess(p) {
			r(null), l(p), a(!1), u(!0)
		},
		origin: t.endpoint,
	})
	return [
		{ errors: n, result: i, submitting: o, succeeded: s },
		async function (p) {
			a(!0), await c(p)
		},
		function () {
			r(null), l(null), a(!1), u(!1)
		},
	]
}
const Dw = [
		{ title: 'gmail', link: 'mailto:mollydcxxiii@gmail.com' },
		{ title: 'linkedin', href: 'https://www.linkedin.com/in/kir4che/' },
		{ title: 'github', href: 'https://github.com/kir4che' },
		{ title: 'instagram', href: 'https://www.instagram.com/kir4che/' },
	],
	nm = () =>
		Dw.map((e) =>
			x.jsx('a', {
				href: e.link,
				target: '_blank',
				className: `${e.title}__icon`,
				children: x.jsx('img', { src: `assets/icons/${e.title}.png`, alt: e.title }),
			})
		),
	zw = () => {
		const [e, t] = Aw('xdoqokeg')
		return (
			P.useEffect(() => {
				e.succeeded &&
					(alert('傳送成功，我會盡快回覆您的訊息，謝謝！'),
					(document.getElementsByTagName('input')[0].value = ''),
					(document.getElementsByTagName('textarea')[0].value = ''),
					(e.succeeded = !1))
			}, [e.succeeded]),
			x.jsxs('div', {
				id: 'contact',
				className: 'px-4 py-8 bg-center bg-no-repeat bg-cover xs:px-8 lg:px-0 lg:py-16 bg-wave',
				children: [
					x.jsx('h2', { className: 'pb-1 mx-auto mb-4 border-b-4 border-pink-500 w-fit', children: '與我聯繫' }),
					x.jsx('p', { className: 'font-light text-center', children: '如果您有任何問題或建議，歡迎與我聯繫！' }),
					x.jsx('div', { className: 'flex items-center justify-center mt-5 mb-10 space-x-4', children: x.jsx(nm, {}) }),
					x.jsxs('form', {
						onSubmit: t,
						className: 'max-w-screen-sm mx-auto space-y-6',
						children: [
							x.jsxs('div', {
								className: 'space-y-4 text-sm',
								children: [
									x.jsx('input', {
										id: 'email',
										type: 'email',
										name: 'email',
										placeholder: '電子郵件',
										className:
											'shadow-sm bg-gray-50 border border-gray-300 rounded-lg outline-none block w-full p-2.5 ',
										required: !0,
									}),
									x.jsx(Qd, { prefix: 'Email', field: 'email', errors: e.errors }),
									x.jsx('textarea', {
										id: 'message',
										name: 'message',
										placeholder: '訊息內容',
										rows: '6',
										className: 'block p-2.5 w-full bg-gray-50 rounded-lg shadow-sm border outline-none border-gray-300',
										required: !0,
									}),
									x.jsx(Qd, { prefix: 'Message', field: 'message', errors: e.errors }),
									x.jsx('p', { className: 'text-xs text-text-primary/60', children: '* 發送前請確認內容無誤，謝謝！' }),
								],
							}),
							x.jsx('button', {
								type: 'submit',
								className: 'block py-3 mx-auto font-medium tracking-widest text-white bg-pink-600 rounded-full px-28',
								disabled: e.submitting,
								children: '傳送',
							}),
						],
					}),
				],
			})
		)
	},
	Fw = () =>
		x.jsxs('div', {
			id: 'experience',
			className: 'max-w-screen-sm px-4 py-16 mx-auto space-y-6 xs:px-8 lg:px-0',
			children: [
				x.jsx('h2', { className: 'pb-1 mx-auto border-b-4 border-pink-500 w-fit', children: '工作經歷' }),
				x.jsx('div', {
					className: 'space-y-4',
					children: x.jsxs('details', {
						className: 'group space-y-3 [&_summary::-webkit-details-marker]:hidden',
						open: !0,
						children: [
							x.jsxs('summary', {
								className:
									'flex items-center justify-between px-4 py-3 font-medium tracking-wide text-white bg-pink-500 rounded-md cursor-pointer',
								children: [
									x.jsxs('p', {
										className: 'flex flex-col justify-between w-full pl-2 pr-4 font-medium xs:flex-row',
										children: [
											x.jsx('span', { children: '前端工程實習生 @ mrhost' }),
											x.jsx('span', { children: '2022.11 － 2023.05' }),
										],
									}),
									x.jsx('svg', {
										xmlns: 'http://www.w3.org/2000/svg',
										fill: 'none',
										viewBox: '0 0 24 24',
										stroke: 'currentColor',
										className: 'w-5 h-5 transition duration-300 shrink-0 group-open:-rotate-180',
										children: x.jsx('path', {
											strokeLinecap: 'round',
											strokeLinejoin: 'round',
											strokeWidth: '2',
											d: 'M19 9l-7 7-7-7',
										}),
									}),
								],
							}),
							x.jsxs('div', {
								className: 'p-4 space-y-3 border-2 border-pink-500 rounded-md',
								children: [
									x.jsxs('div', {
										className: 'flex items-center gap-4 text-[0.8rem]',
										children: [
											x.jsxs('p', {
												className: 'flex items-center gap-1',
												children: [
													x.jsx('svg', {
														xmlns: 'http://www.w3.org/2000/svg',
														width: '18',
														height: '18',
														viewBox: '0 0 24 24',
														children: x.jsx('path', {
															d: 'M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z',
														}),
													}),
													x.jsx('span', { children: '臺北市信義區' }),
												],
											}),
											x.jsxs('p', {
												className: 'flex items-center gap-2',
												children: [
													x.jsx('svg', {
														xmlns: 'http://www.w3.org/2000/svg',
														width: '18',
														height: '18',
														viewBox: '0 0 24 24',
														children: x.jsx('path', {
															d: 'M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z',
														}),
													}),
													x.jsx('a', {
														href: 'https://www.mrhost.com.tw/',
														target: '_blank',
														className: 'hover:underline hover:text-pink-500',
														rel: 'noreferrer',
														children: 'mrhost',
													}),
												],
											}),
										],
									}),
									x.jsxs('ul', {
										className: 'pl-5 leading-7 list-disc',
										children: [
											x.jsx('li', { children: '利用 Apps Script 自動化 Google 試算表的工作流程' }),
											x.jsx('li', { children: '維使用 Bootstrap 5 構建一頁式網站' }),
											x.jsx('li', { children: '透過 SiteMinder 協助旅館上架資訊、房型，以及調整價格。' }),
											x.jsx('li', { children: '建立 SOP 確保日常工作流程的正確及一致性' }),
											x.jsx('li', { children: '於 Wordpress 撰寫 SEO 文章，並協助提交 Sitemap。' }),
										],
									}),
									x.jsx('ul', {
										className: 'flex items-center flex-wrap tracking-wide gap-2 pt-2 text-[0.8rem] font-light',
										children: ['App Script', 'HTML', 'CSS', 'BootStrap 5', 'SiteMinder', 'WordPress'].map((e, t) =>
											x.jsx('li', { className: 'px-3.5 py-0.5 rounded-full bg-pink-200', children: e }, t)
										),
									}),
								],
							}),
						],
					}),
				}),
			],
		}),
	$w = () =>
		x.jsxs('footer', {
			className: 'flex items-center justify-between w-screen h-6 px-2 bg-pink-500',
			children: [
				x.jsx('p', {
					className: 'text-xs font-light text-center text-white',
					children: 'Copyright © Molly Su All Rights Reserved.',
				}),
				x.jsxs('p', {
					className: 'text-xs font-light text-center text-white',
					children: ['icons by', ' ', x.jsx('a', { target: '_blank', href: 'https://icons8.com', children: 'Icons8' })],
				}),
			],
		}),
	Bw = () => {
		const [e, t] = P.useState('')
		return x.jsx('header', {
			className: 'sticky top-0 z-20 bg-white',
			children: x.jsx('nav', {
				className: 'px-4 lg:px-6 py-2.5',
				children: x.jsxs('div', {
					className: 'flex flex-wrap items-center justify-between max-w-screen-xl mx-auto',
					children: [
						x.jsxs('a', {
							href: '/',
							className: 'flex',
							children: [
								x.jsx('img', { src: 'assets/images/logo.png', className: 'h-8', alt: 'Logo' }),
								x.jsx('span', {
									className: 'self-center text-xl font-semibold whitespace-nowrap',
									children: 'kir4che',
								}),
							],
						}),
						x.jsx('div', {
							className: 'items-center justify-between hidden w-full lg:flex lg:w-auto',
							children: x.jsxs('ul', {
								className: 'flex flex-col text-sm font-medium lg:flex-row lg:space-x-8',
								children: [
									x.jsx('li', {
										children: x.jsx(Fi, {
											to: '/#skill',
											className: `${
												e !== 'skill' ? '' : 'text-pink-600'
											} block py-2 pl-3 border-b border-gray-100 transition-opacity duration-100 lg:border-0 lg:p-0`,
											onMouseOver: () => t('skill'),
											onMouseLeave: () => t(''),
											children: '專業技能',
										}),
									}),
									x.jsx('li', {
										children: x.jsx(Fi, {
											to: '/#experience',
											className: `${
												e !== 'experience' ? '' : 'text-pink-600'
											} block py-2 pl-3 border-b border-gray-100 transition-opacity duration-100 g:border-0 lg:p-0`,
											onMouseOver: () => t('experience'),
											onMouseLeave: () => t(''),
											children: '工作經歷',
										}),
									}),
									x.jsx('li', {
										children: x.jsx(Fi, {
											to: '/#portfolio',
											className: `${
												e !== 'portfolio' ? '' : 'text-pink-600'
											} block py-2 pl-3 border-b border-gray-100 transition-opacity duration-100 lg:border-0 lg:p-0`,
											onMouseOver: () => t('portfolio'),
											onMouseLeave: () => t(''),
											children: '作品集',
										}),
									}),
									x.jsx('li', {
										children: x.jsx(Fi, {
											to: '/#contact',
											className: `${
												e !== 'contact' ? '' : 'text-pink-600'
											} block py-2 pl-3 border-b border-gray-100 transition-opacity duration-100 lg:border-0 lg:p-0`,
											onMouseOver: () => t('contact'),
											onMouseLeave: () => t(''),
											children: '與我聯繫',
										}),
									}),
								],
							}),
						}),
						x.jsx('div', { className: 'flex items-center space-x-2.5', children: x.jsx(nm, {}) }),
					],
				}),
			}),
		})
	},
	rm = ({ children: e }) =>
		x.jsxs(x.Fragment, { children: [x.jsx(Bw, {}), x.jsx('main', { children: e }), x.jsx($w, {})] }),
	Uw = ({ video: e, open: t, setOpen: n, targetRef: r }) => (
		P.useEffect(() => {
			e !== '' && t
				? ((document.body.style.overflow = 'hidden'), r.current.scrollIntoView({ behavior: 'smooth' }))
				: (document.body.style.overflow = 'unset')
		}, [e, t]),
		x.jsxs('div', {
			className: `${t ? 'block' : 'hidden'} relative top-0 left-0`,
			children: [
				x.jsx('video', {
					width: '800',
					className: 'fixed top-0 bottom-0 left-0 right-0 z-30 m-auto rounded-md',
					preload: !0,
					controls: !0,
					children: x.jsx('source', { src: `assets/videos/${e}.mp4`, type: 'video/mp4' }),
				}),
				x.jsx('div', { className: 'absolute z-20 w-screen h-screen bg-black opacity-50', onClick: () => n('') }),
			],
		})
	),
	Vw = () => {
		const e = P.useRef(null),
			[t, n] = P.useState('')
		return x.jsxs(x.Fragment, {
			children: [
				x.jsx(Uw, { video: t, open: t !== '', setOpen: n, targetRef: e }, t),
				x.jsxs('div', {
					id: 'portfolio',
					ref: e,
					className: 'pt-16 mx-auto',
					children: [
						x.jsx('h2', { className: 'pb-1 mx-auto mb-4 border-b-4 border-pink-500 w-fit', children: '小小作品集' }),
						x.jsx('p', {
							className: 'font-light text-center',
							children: '以下作品皆可點擊標題前往網站，或者點擊圖片觀看展示影片。',
						}),
						x.jsxs('div', {
							className: 'flex flex-col flex-wrap justify-center gap-4 mt-8 sm:flex-row',
							children: [
								x.jsxs('section', {
									className: 'px-3 py-2 space-y-2 rounded-md sm:w-72 md:w-92',
									children: [
										x.jsx('a', {
											href: 'https://yelp-clone-react.vercel.app/',
											target: '_blank',
											rel: 'noreferrer',
											className: 'hover:underline',
											children: x.jsx('p', { className: 'font-medium', children: '仿 Yelp 網站' }),
										}),
										x.jsxs('div', {
											className: 'work__mask',
											onClick: () => n('yelp-clone-react'),
											children: [
												x.jsxs('p', {
													className: 'work__mask__title',
													children: [
														x.jsx('img', {
															width: '24',
															height: '20',
															src: 'https://img.icons8.com/material-outlined/40/ffffff/external-link.png',
															alt: 'external-link',
														}),
														x.jsx('span', { children: '影片展示' }),
													],
												}),
												x.jsx('img', {
													src: 'assets/images/yelp-clone-react.png',
													className: 'object-cover w-full sm:object-top h-60 sm:h-44',
													alt: 'work',
												}),
												x.jsx('div', { class: 'work__mask__bg' }),
											],
										}),
										x.jsxs('ul', {
											className: 'flex flex-wrap text-xs text-text-primary/80 gap-x-2',
											children: [
												x.jsx('li', { children: '# React.js (React Router Dom)' }),
												x.jsx('li', { children: '# JavaScript' }),
												x.jsx('li', { children: '# Tailwind CSS' }),
												x.jsx('li', { children: '# Yelp Fusion API' }),
												x.jsx('li', { children: '# React Google Maps' }),
												x.jsx('li', { children: '# RWD' }),
											],
										}),
									],
								}),
								x.jsxs('section', {
									className: 'px-3 py-2 space-y-2 rounded-md sm:w-72 md:w-92',
									children: [
										x.jsx('a', {
											href: 'https://github.com/kir4che/lamamia-blog',
											target: '_blank',
											rel: 'noreferrer',
											className: 'hover:underline',
											children: x.jsx('p', { className: 'font-medium', children: '個人部落格' }),
										}),
										x.jsxs('div', {
											className: 'work__mask',
											onClick: () => n('lamamia-blog'),
											children: [
												x.jsxs('p', {
													className: 'work__mask__title',
													children: [
														x.jsx('img', {
															width: '24',
															height: '20',
															src: 'https://img.icons8.com/material-outlined/40/ffffff/external-link.png',
															alt: 'external-link',
														}),
														x.jsx('span', { children: '影片展示' }),
													],
												}),
												x.jsx('img', {
													src: 'assets/images/lamamia-blog.png',
													className: 'object-cover w-full sm:object-top h-60 sm:h-44',
													alt: 'work',
												}),
												x.jsx('div', { class: 'work__mask__bg' }),
											],
										}),
										x.jsxs('ul', {
											className: 'flex flex-wrap text-xs text-text-primary/80 gap-x-2',
											children: [
												x.jsx('li', { children: '# Next.js (NextAuth)' }),
												x.jsx('li', { children: '# Mongoose ODM' }),
												x.jsx('li', { children: '# TypeScript' }),
												x.jsx('li', { children: '# SWR' }),
												x.jsx('li', { children: '# Tailwind CSS' }),
												x.jsx('li', { children: '# RWD' }),
												x.jsx('li', { children: '# SendGrid Mail' }),
											],
										}),
									],
								}),
								x.jsxs('section', {
									className: 'px-3 py-2 space-y-2 rounded-md sm:w-72 md:w-92',
									children: [
										x.jsx('a', {
											href: 'https://kir4che.github.io/legislative-campaign-official-website/',
											target: '_blank',
											rel: 'noreferrer',
											className: 'hover:underline',
											children: x.jsx('p', { className: 'font-medium', children: '立委競選官網' }),
										}),
										x.jsxs('div', {
											className: 'work__mask',
											onClick: () => n('legislative-campaign'),
											children: [
												x.jsxs('p', {
													className: 'work__mask__title',
													children: [
														x.jsx('img', {
															width: '24',
															height: '20',
															src: 'https://img.icons8.com/material-outlined/40/ffffff/external-link.png',
															alt: 'external-link',
														}),
														x.jsx('span', { children: '影片展示' }),
													],
												}),
												x.jsx('img', {
													src: 'assets/images/legislative-campaign.png',
													className: 'object-cover w-full sm:object-top h-60 sm:h-44',
													alt: 'work',
												}),
												x.jsx('div', { class: 'work__mask__bg' }),
											],
										}),
										x.jsxs('ul', {
											className: 'flex flex-wrap text-xs text-text-primary/80 gap-x-2',
											children: [
												x.jsx('li', { children: '# React.js' }),
												x.jsx('li', { children: '# TypeScript' }),
												x.jsx('li', { children: '# Tailwind CSS' }),
												x.jsx('li', { children: '# Radix UI' }),
												x.jsx('li', { children: '# RWD' }),
												x.jsx('li', { children: '# Vite' }),
											],
										}),
									],
								}),
								x.jsxs('section', {
									className: 'px-3 py-2 space-y-2 rounded-md sm:w-72 md:w-92',
									children: [
										x.jsx('a', {
											href: 'https://space-tourism-website-livid.vercel.app/',
											target: '_blank',
											rel: 'noreferrer',
											className: 'hover:underline',
											children: x.jsx('p', { className: 'font-medium', children: '航空旅遊介紹網站' }),
										}),
										x.jsxs('div', {
											className: 'work__mask',
											onClick: () => n('space-tourism'),
											children: [
												x.jsxs('p', {
													className: 'work__mask__title',
													children: [
														x.jsx('img', {
															width: '24',
															height: '20',
															src: 'https://img.icons8.com/material-outlined/40/ffffff/external-link.png',
															alt: 'external-link',
														}),
														x.jsx('span', { children: '影片展示' }),
													],
												}),
												x.jsx('img', {
													src: 'assets/images/space-tourism.png',
													className: 'object-cover w-full sm:object-top h-60 sm:h-44',
													alt: 'work',
												}),
												x.jsx('div', { class: 'work__mask__bg' }),
											],
										}),
										x.jsxs('ul', {
											className: 'flex flex-wrap text-xs text-text-primary/80 gap-x-2',
											children: [
												x.jsx('li', { children: '# React.js (React Router Dom、React Burger Menu)' }),
												x.jsx('li', { children: '# TypeScript' }),
												x.jsx('li', { children: '# Tailwind CSS' }),
												x.jsx('li', { children: '# RWD' }),
											],
										}),
									],
								}),
								x.jsxs('section', {
									className: 'px-3 py-2 space-y-2 rounded-md sm:w-72 md:w-92',
									children: [
										x.jsx('a', {
											href: 'https://kir4che.github.io/starbucks-clone/',
											target: '_blank',
											rel: 'noreferrer',
											className: 'hover:underline',
											children: x.jsx('p', { className: 'font-medium', children: '切版練習' }),
										}),
										x.jsx('img', {
											src: 'assets/images/starbucks-clone.png',
											className: 'object-cover w-full sm:object-top h-60 sm:h-44',
											alt: 'work',
										}),
										x.jsxs('ul', {
											className: 'flex flex-wrap text-xs text-text-primary/80 gap-x-2',
											children: [
												x.jsx('li', { children: '# JavaScript' }),
												x.jsx('li', { children: '# SCSS' }),
												x.jsx('li', { children: '# RWD' }),
												x.jsx('li', { children: '# Vite' }),
											],
										}),
									],
								}),
								x.jsxs('section', {
									className: 'px-3 py-2 space-y-2 rounded-md sm:w-72 md:w-92',
									children: [
										x.jsx('a', {
											href: 'https://kir4che.github.io/sushi-man/',
											target: '_blank',
											rel: 'noreferrer',
											className: 'hover:underline',
											children: x.jsx('p', { className: 'font-medium', children: '切版練習' }),
										}),
										x.jsx('img', {
											src: 'assets/images/sushi-man.png',
											className: 'object-cover w-full sm:object-top h-60 sm:h-44',
											alt: 'work',
										}),
										x.jsxs('ul', {
											className: 'flex flex-wrap text-xs text-text-primary/80 gap-x-2',
											children: [
												x.jsx('li', { children: '# JavaScript' }),
												x.jsx('li', { children: '# SCSS' }),
												x.jsx('li', { children: '# AOS' }),
												x.jsx('li', { children: '# RWD' }),
												x.jsx('li', { children: '# Vite' }),
											],
										}),
									],
								}),
							],
						}),
					],
				}),
			],
		})
	},
	hi = Math.min,
	yr = Math.max,
	Bo = Math.round,
	Kl = Math.floor,
	er = (e) => ({ x: e, y: e }),
	Hw = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' },
	Ww = { start: 'end', end: 'start' }
function Za(e, t, n) {
	return yr(e, hi(t, n))
}
function Pl(e, t) {
	return typeof e == 'function' ? e(t) : e
}
function Pr(e) {
	return e.split('-')[0]
}
function _l(e) {
	return e.split('-')[1]
}
function im(e) {
	return e === 'x' ? 'y' : 'x'
}
function lc(e) {
	return e === 'y' ? 'height' : 'width'
}
function hs(e) {
	return ['top', 'bottom'].includes(Pr(e)) ? 'y' : 'x'
}
function oc(e) {
	return im(hs(e))
}
function Gw(e, t, n) {
	n === void 0 && (n = !1)
	const r = _l(e),
		i = oc(e),
		l = lc(i)
	let o = i === 'x' ? (r === (n ? 'end' : 'start') ? 'right' : 'left') : r === 'start' ? 'bottom' : 'top'
	return t.reference[l] > t.floating[l] && (o = Uo(o)), [o, Uo(o)]
}
function Yw(e) {
	const t = Uo(e)
	return [eu(e), t, eu(t)]
}
function eu(e) {
	return e.replace(/start|end/g, (t) => Ww[t])
}
function Kw(e, t, n) {
	const r = ['left', 'right'],
		i = ['right', 'left'],
		l = ['top', 'bottom'],
		o = ['bottom', 'top']
	switch (e) {
		case 'top':
		case 'bottom':
			return n ? (t ? i : r) : t ? r : i
		case 'left':
		case 'right':
			return t ? l : o
		default:
			return []
	}
}
function Xw(e, t, n, r) {
	const i = _l(e)
	let l = Kw(Pr(e), n === 'start', r)
	return i && ((l = l.map((o) => o + '-' + i)), t && (l = l.concat(l.map(eu)))), l
}
function Uo(e) {
	return e.replace(/left|right|bottom|top/g, (t) => Hw[t])
}
function Qw(e) {
	return { top: 0, right: 0, bottom: 0, left: 0, ...e }
}
function lm(e) {
	return typeof e != 'number' ? Qw(e) : { top: e, right: e, bottom: e, left: e }
}
function Vo(e) {
	return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height }
}
function qd(e, t, n) {
	let { reference: r, floating: i } = e
	const l = hs(t),
		o = oc(t),
		a = lc(o),
		s = Pr(t),
		u = l === 'y',
		c = r.x + r.width / 2 - i.width / 2,
		p = r.y + r.height / 2 - i.height / 2,
		m = r[a] / 2 - i[a] / 2
	let g
	switch (s) {
		case 'top':
			g = { x: c, y: r.y - i.height }
			break
		case 'bottom':
			g = { x: c, y: r.y + r.height }
			break
		case 'right':
			g = { x: r.x + r.width, y: p }
			break
		case 'left':
			g = { x: r.x - i.width, y: p }
			break
		default:
			g = { x: r.x, y: r.y }
	}
	switch (_l(t)) {
		case 'start':
			g[o] -= m * (n && u ? -1 : 1)
			break
		case 'end':
			g[o] += m * (n && u ? -1 : 1)
			break
	}
	return g
}
const qw = async (e, t, n) => {
	const { placement: r = 'bottom', strategy: i = 'absolute', middleware: l = [], platform: o } = n,
		a = l.filter(Boolean),
		s = await (o.isRTL == null ? void 0 : o.isRTL(t))
	let u = await o.getElementRects({ reference: e, floating: t, strategy: i }),
		{ x: c, y: p } = qd(u, r, s),
		m = r,
		g = {},
		y = 0
	for (let v = 0; v < a.length; v++) {
		const { name: E, fn: h } = a[v],
			{
				x: d,
				y: f,
				data: w,
				reset: C,
			} = await h({
				x: c,
				y: p,
				initialPlacement: r,
				placement: m,
				strategy: i,
				middlewareData: g,
				rects: u,
				platform: o,
				elements: { reference: e, floating: t },
			})
		if (((c = d ?? c), (p = f ?? p), (g = { ...g, [E]: { ...g[E], ...w } }), C && y <= 50)) {
			y++,
				typeof C == 'object' &&
					(C.placement && (m = C.placement),
					C.rects &&
						(u = C.rects === !0 ? await o.getElementRects({ reference: e, floating: t, strategy: i }) : C.rects),
					({ x: c, y: p } = qd(u, m, s))),
				(v = -1)
			continue
		}
	}
	return { x: c, y: p, placement: m, strategy: i, middlewareData: g }
}
async function om(e, t) {
	var n
	t === void 0 && (t = {})
	const { x: r, y: i, platform: l, rects: o, elements: a, strategy: s } = e,
		{
			boundary: u = 'clippingAncestors',
			rootBoundary: c = 'viewport',
			elementContext: p = 'floating',
			altBoundary: m = !1,
			padding: g = 0,
		} = Pl(t, e),
		y = lm(g),
		E = a[m ? (p === 'floating' ? 'reference' : 'floating') : p],
		h = Vo(
			await l.getClippingRect({
				element:
					(n = await (l.isElement == null ? void 0 : l.isElement(E))) == null || n
						? E
						: E.contextElement || (await (l.getDocumentElement == null ? void 0 : l.getDocumentElement(a.floating))),
				boundary: u,
				rootBoundary: c,
				strategy: s,
			})
		),
		d = p === 'floating' ? { ...o.floating, x: r, y: i } : o.reference,
		f = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(a.floating)),
		w = (await (l.isElement == null ? void 0 : l.isElement(f)))
			? (await (l.getScale == null ? void 0 : l.getScale(f))) || { x: 1, y: 1 }
			: { x: 1, y: 1 },
		C = Vo(
			l.convertOffsetParentRelativeRectToViewportRelativeRect
				? await l.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: d, offsetParent: f, strategy: s })
				: d
		)
	return {
		top: (h.top - C.top + y.top) / w.y,
		bottom: (C.bottom - h.bottom + y.bottom) / w.y,
		left: (h.left - C.left + y.left) / w.x,
		right: (C.right - h.right + y.right) / w.x,
	}
}
const Jw = (e) => ({
		name: 'arrow',
		options: e,
		async fn(t) {
			const { x: n, y: r, placement: i, rects: l, platform: o, elements: a, middlewareData: s } = t,
				{ element: u, padding: c = 0 } = Pl(e, t) || {}
			if (u == null) return {}
			const p = lm(c),
				m = { x: n, y: r },
				g = oc(i),
				y = lc(g),
				v = await o.getDimensions(u),
				E = g === 'y',
				h = E ? 'top' : 'left',
				d = E ? 'bottom' : 'right',
				f = E ? 'clientHeight' : 'clientWidth',
				w = l.reference[y] + l.reference[g] - m[g] - l.floating[y],
				C = m[g] - l.reference[g],
				S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(u))
			let b = S ? S[f] : 0
			;(!b || !(await (o.isElement == null ? void 0 : o.isElement(S)))) && (b = a.floating[f] || l.floating[y])
			const N = w / 2 - C / 2,
				_ = b / 2 - v[y] / 2 - 1,
				L = hi(p[h], _),
				j = hi(p[d], _),
				I = L,
				O = b - v[y] - j,
				F = b / 2 - v[y] / 2 + N,
				H = Za(I, F, O),
				Y = !s.arrow && _l(i) != null && F != H && l.reference[y] / 2 - (F < I ? L : j) - v[y] / 2 < 0,
				X = Y ? (F < I ? F - I : F - O) : 0
			return { [g]: m[g] + X, data: { [g]: H, centerOffset: F - H - X, ...(Y && { alignmentOffset: X }) }, reset: Y }
		},
	}),
	Zw = function (e) {
		return (
			e === void 0 && (e = {}),
			{
				name: 'flip',
				options: e,
				async fn(t) {
					var n, r
					const { placement: i, middlewareData: l, rects: o, initialPlacement: a, platform: s, elements: u } = t,
						{
							mainAxis: c = !0,
							crossAxis: p = !0,
							fallbackPlacements: m,
							fallbackStrategy: g = 'bestFit',
							fallbackAxisSideDirection: y = 'none',
							flipAlignment: v = !0,
							...E
						} = Pl(e, t)
					if ((n = l.arrow) != null && n.alignmentOffset) return {}
					const h = Pr(i),
						d = Pr(a) === a,
						f = await (s.isRTL == null ? void 0 : s.isRTL(u.floating)),
						w = m || (d || !v ? [Uo(a)] : Yw(a))
					!m && y !== 'none' && w.push(...Xw(a, v, y, f))
					const C = [a, ...w],
						S = await om(t, E),
						b = []
					let N = ((r = l.flip) == null ? void 0 : r.overflows) || []
					if ((c && b.push(S[h]), p)) {
						const I = Gw(i, o, f)
						b.push(S[I[0]], S[I[1]])
					}
					if (((N = [...N, { placement: i, overflows: b }]), !b.every((I) => I <= 0))) {
						var _, L
						const I = (((_ = l.flip) == null ? void 0 : _.index) || 0) + 1,
							O = C[I]
						if (O) return { data: { index: I, overflows: N }, reset: { placement: O } }
						let F =
							(L = N.filter((H) => H.overflows[0] <= 0).sort((H, Y) => H.overflows[1] - Y.overflows[1])[0]) == null
								? void 0
								: L.placement
						if (!F)
							switch (g) {
								case 'bestFit': {
									var j
									const H =
										(j = N.map((Y) => [Y.placement, Y.overflows.filter((X) => X > 0).reduce((X, D) => X + D, 0)]).sort(
											(Y, X) => Y[1] - X[1]
										)[0]) == null
											? void 0
											: j[0]
									H && (F = H)
									break
								}
								case 'initialPlacement':
									F = a
									break
							}
						if (i !== F) return { reset: { placement: F } }
					}
					return {}
				},
			}
		)
	}
async function ex(e, t) {
	const { placement: n, platform: r, elements: i } = e,
		l = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)),
		o = Pr(n),
		a = _l(n),
		s = hs(n) === 'y',
		u = ['left', 'top'].includes(o) ? -1 : 1,
		c = l && s ? -1 : 1,
		p = Pl(t, e)
	let {
		mainAxis: m,
		crossAxis: g,
		alignmentAxis: y,
	} = typeof p == 'number'
		? { mainAxis: p, crossAxis: 0, alignmentAxis: null }
		: { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...p }
	return (
		a && typeof y == 'number' && (g = a === 'end' ? y * -1 : y), s ? { x: g * c, y: m * u } : { x: m * u, y: g * c }
	)
}
const tx = function (e) {
		return (
			e === void 0 && (e = 0),
			{
				name: 'offset',
				options: e,
				async fn(t) {
					var n, r
					const { x: i, y: l, placement: o, middlewareData: a } = t,
						s = await ex(t, e)
					return o === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset
						? {}
						: { x: i + s.x, y: l + s.y, data: { ...s, placement: o } }
				},
			}
		)
	},
	nx = function (e) {
		return (
			e === void 0 && (e = {}),
			{
				name: 'shift',
				options: e,
				async fn(t) {
					const { x: n, y: r, placement: i } = t,
						{
							mainAxis: l = !0,
							crossAxis: o = !1,
							limiter: a = {
								fn: (E) => {
									let { x: h, y: d } = E
									return { x: h, y: d }
								},
							},
							...s
						} = Pl(e, t),
						u = { x: n, y: r },
						c = await om(t, s),
						p = hs(Pr(i)),
						m = im(p)
					let g = u[m],
						y = u[p]
					if (l) {
						const E = m === 'y' ? 'top' : 'left',
							h = m === 'y' ? 'bottom' : 'right',
							d = g + c[E],
							f = g - c[h]
						g = Za(d, g, f)
					}
					if (o) {
						const E = p === 'y' ? 'top' : 'left',
							h = p === 'y' ? 'bottom' : 'right',
							d = y + c[E],
							f = y - c[h]
						y = Za(d, y, f)
					}
					const v = a.fn({ ...t, [m]: g, [p]: y })
					return { ...v, data: { x: v.x - n, y: v.y - r } }
				},
			}
		)
	}
function tr(e) {
	return sm(e) ? (e.nodeName || '').toLowerCase() : '#document'
}
function vt(e) {
	var t
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function Pn(e) {
	var t
	return (t = (sm(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}
function sm(e) {
	return e instanceof Node || e instanceof vt(e).Node
}
function Cn(e) {
	return e instanceof Element || e instanceof vt(e).Element
}
function rn(e) {
	return e instanceof HTMLElement || e instanceof vt(e).HTMLElement
}
function Jd(e) {
	return typeof ShadowRoot > 'u' ? !1 : e instanceof ShadowRoot || e instanceof vt(e).ShadowRoot
}
function bl(e) {
	const { overflow: t, overflowX: n, overflowY: r, display: i } = Rt(e)
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !['inline', 'contents'].includes(i)
}
function rx(e) {
	return ['table', 'td', 'th'].includes(tr(e))
}
function sc(e) {
	const t = ac(),
		n = Rt(e)
	return (
		n.transform !== 'none' ||
		n.perspective !== 'none' ||
		(n.containerType ? n.containerType !== 'normal' : !1) ||
		(!t && (n.backdropFilter ? n.backdropFilter !== 'none' : !1)) ||
		(!t && (n.filter ? n.filter !== 'none' : !1)) ||
		['transform', 'perspective', 'filter'].some((r) => (n.willChange || '').includes(r)) ||
		['paint', 'layout', 'strict', 'content'].some((r) => (n.contain || '').includes(r))
	)
}
function ix(e) {
	let t = mi(e)
	for (; rn(t) && !ms(t); ) {
		if (sc(t)) return t
		t = mi(t)
	}
	return null
}
function ac() {
	return typeof CSS > 'u' || !CSS.supports ? !1 : CSS.supports('-webkit-backdrop-filter', 'none')
}
function ms(e) {
	return ['html', 'body', '#document'].includes(tr(e))
}
function Rt(e) {
	return vt(e).getComputedStyle(e)
}
function gs(e) {
	return Cn(e)
		? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
		: { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset }
}
function mi(e) {
	if (tr(e) === 'html') return e
	const t = e.assignedSlot || e.parentNode || (Jd(e) && e.host) || Pn(e)
	return Jd(t) ? t.host : t
}
function am(e) {
	const t = mi(e)
	return ms(t) ? (e.ownerDocument ? e.ownerDocument.body : e.body) : rn(t) && bl(t) ? t : am(t)
}
function vl(e, t, n) {
	var r
	t === void 0 && (t = []), n === void 0 && (n = !0)
	const i = am(e),
		l = i === ((r = e.ownerDocument) == null ? void 0 : r.body),
		o = vt(i)
	return l
		? t.concat(o, o.visualViewport || [], bl(i) ? i : [], o.frameElement && n ? vl(o.frameElement) : [])
		: t.concat(i, vl(i, [], n))
}
function um(e) {
	const t = Rt(e)
	let n = parseFloat(t.width) || 0,
		r = parseFloat(t.height) || 0
	const i = rn(e),
		l = i ? e.offsetWidth : n,
		o = i ? e.offsetHeight : r,
		a = Bo(n) !== l || Bo(r) !== o
	return a && ((n = l), (r = o)), { width: n, height: r, $: a }
}
function uc(e) {
	return Cn(e) ? e : e.contextElement
}
function li(e) {
	const t = uc(e)
	if (!rn(t)) return er(1)
	const n = t.getBoundingClientRect(),
		{ width: r, height: i, $: l } = um(t)
	let o = (l ? Bo(n.width) : n.width) / r,
		a = (l ? Bo(n.height) : n.height) / i
	return (!o || !Number.isFinite(o)) && (o = 1), (!a || !Number.isFinite(a)) && (a = 1), { x: o, y: a }
}
const lx = er(0)
function cm(e) {
	const t = vt(e)
	return !ac() || !t.visualViewport ? lx : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
}
function ox(e, t, n) {
	return t === void 0 && (t = !1), !n || (t && n !== vt(e)) ? !1 : t
}
function _r(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1)
	const i = e.getBoundingClientRect(),
		l = uc(e)
	let o = er(1)
	t && (r ? Cn(r) && (o = li(r)) : (o = li(e)))
	const a = ox(l, n, r) ? cm(l) : er(0)
	let s = (i.left + a.x) / o.x,
		u = (i.top + a.y) / o.y,
		c = i.width / o.x,
		p = i.height / o.y
	if (l) {
		const m = vt(l),
			g = r && Cn(r) ? vt(r) : r
		let y = m.frameElement
		for (; y && r && g !== m; ) {
			const v = li(y),
				E = y.getBoundingClientRect(),
				h = Rt(y),
				d = E.left + (y.clientLeft + parseFloat(h.paddingLeft)) * v.x,
				f = E.top + (y.clientTop + parseFloat(h.paddingTop)) * v.y
			;(s *= v.x), (u *= v.y), (c *= v.x), (p *= v.y), (s += d), (u += f), (y = vt(y).frameElement)
		}
	}
	return Vo({ width: c, height: p, x: s, y: u })
}
function sx(e) {
	let { rect: t, offsetParent: n, strategy: r } = e
	const i = rn(n),
		l = Pn(n)
	if (n === l) return t
	let o = { scrollLeft: 0, scrollTop: 0 },
		a = er(1)
	const s = er(0)
	if ((i || (!i && r !== 'fixed')) && ((tr(n) !== 'body' || bl(l)) && (o = gs(n)), rn(n))) {
		const u = _r(n)
		;(a = li(n)), (s.x = u.x + n.clientLeft), (s.y = u.y + n.clientTop)
	}
	return {
		width: t.width * a.x,
		height: t.height * a.y,
		x: t.x * a.x - o.scrollLeft * a.x + s.x,
		y: t.y * a.y - o.scrollTop * a.y + s.y,
	}
}
function ax(e) {
	return Array.from(e.getClientRects())
}
function dm(e) {
	return _r(Pn(e)).left + gs(e).scrollLeft
}
function ux(e) {
	const t = Pn(e),
		n = gs(e),
		r = e.ownerDocument.body,
		i = yr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
		l = yr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight)
	let o = -n.scrollLeft + dm(e)
	const a = -n.scrollTop
	return Rt(r).direction === 'rtl' && (o += yr(t.clientWidth, r.clientWidth) - i), { width: i, height: l, x: o, y: a }
}
function cx(e, t) {
	const n = vt(e),
		r = Pn(e),
		i = n.visualViewport
	let l = r.clientWidth,
		o = r.clientHeight,
		a = 0,
		s = 0
	if (i) {
		;(l = i.width), (o = i.height)
		const u = ac()
		;(!u || (u && t === 'fixed')) && ((a = i.offsetLeft), (s = i.offsetTop))
	}
	return { width: l, height: o, x: a, y: s }
}
function dx(e, t) {
	const n = _r(e, !0, t === 'fixed'),
		r = n.top + e.clientTop,
		i = n.left + e.clientLeft,
		l = rn(e) ? li(e) : er(1),
		o = e.clientWidth * l.x,
		a = e.clientHeight * l.y,
		s = i * l.x,
		u = r * l.y
	return { width: o, height: a, x: s, y: u }
}
function Zd(e, t, n) {
	let r
	if (t === 'viewport') r = cx(e, n)
	else if (t === 'document') r = ux(Pn(e))
	else if (Cn(t)) r = dx(t, n)
	else {
		const i = cm(e)
		r = { ...t, x: t.x - i.x, y: t.y - i.y }
	}
	return Vo(r)
}
function fm(e, t) {
	const n = mi(e)
	return n === t || !Cn(n) || ms(n) ? !1 : Rt(n).position === 'fixed' || fm(n, t)
}
function fx(e, t) {
	const n = t.get(e)
	if (n) return n
	let r = vl(e, [], !1).filter((a) => Cn(a) && tr(a) !== 'body'),
		i = null
	const l = Rt(e).position === 'fixed'
	let o = l ? mi(e) : e
	for (; Cn(o) && !ms(o); ) {
		const a = Rt(o),
			s = sc(o)
		!s && a.position === 'fixed' && (i = null),
			(
				l
					? !s && !i
					: (!s && a.position === 'static' && !!i && ['absolute', 'fixed'].includes(i.position)) ||
					  (bl(o) && !s && fm(e, o))
			)
				? (r = r.filter((c) => c !== o))
				: (i = a),
			(o = mi(o))
	}
	return t.set(e, r), r
}
function px(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e
	const o = [...(n === 'clippingAncestors' ? fx(t, this._c) : [].concat(n)), r],
		a = o[0],
		s = o.reduce((u, c) => {
			const p = Zd(t, c, i)
			return (
				(u.top = yr(p.top, u.top)),
				(u.right = hi(p.right, u.right)),
				(u.bottom = hi(p.bottom, u.bottom)),
				(u.left = yr(p.left, u.left)),
				u
			)
		}, Zd(t, a, i))
	return { width: s.right - s.left, height: s.bottom - s.top, x: s.left, y: s.top }
}
function hx(e) {
	return um(e)
}
function mx(e, t, n) {
	const r = rn(t),
		i = Pn(t),
		l = n === 'fixed',
		o = _r(e, !0, l, t)
	let a = { scrollLeft: 0, scrollTop: 0 }
	const s = er(0)
	if (r || (!r && !l))
		if (((tr(t) !== 'body' || bl(i)) && (a = gs(t)), r)) {
			const u = _r(t, !0, l, t)
			;(s.x = u.x + t.clientLeft), (s.y = u.y + t.clientTop)
		} else i && (s.x = dm(i))
	return { x: o.left + a.scrollLeft - s.x, y: o.top + a.scrollTop - s.y, width: o.width, height: o.height }
}
function ef(e, t) {
	return !rn(e) || Rt(e).position === 'fixed' ? null : t ? t(e) : e.offsetParent
}
function pm(e, t) {
	const n = vt(e)
	if (!rn(e)) return n
	let r = ef(e, t)
	for (; r && rx(r) && Rt(r).position === 'static'; ) r = ef(r, t)
	return r && (tr(r) === 'html' || (tr(r) === 'body' && Rt(r).position === 'static' && !sc(r))) ? n : r || ix(e) || n
}
const gx = async function (e) {
	let { reference: t, floating: n, strategy: r } = e
	const i = this.getOffsetParent || pm,
		l = this.getDimensions
	return { reference: mx(t, await i(n), r), floating: { x: 0, y: 0, ...(await l(n)) } }
}
function vx(e) {
	return Rt(e).direction === 'rtl'
}
const yx = {
	convertOffsetParentRelativeRectToViewportRelativeRect: sx,
	getDocumentElement: Pn,
	getClippingRect: px,
	getOffsetParent: pm,
	getElementRects: gx,
	getClientRects: ax,
	getDimensions: hx,
	getScale: li,
	isElement: Cn,
	isRTL: vx,
}
function wx(e, t) {
	let n = null,
		r
	const i = Pn(e)
	function l() {
		clearTimeout(r), n && n.disconnect(), (n = null)
	}
	function o(a, s) {
		a === void 0 && (a = !1), s === void 0 && (s = 1), l()
		const { left: u, top: c, width: p, height: m } = e.getBoundingClientRect()
		if ((a || t(), !p || !m)) return
		const g = Kl(c),
			y = Kl(i.clientWidth - (u + p)),
			v = Kl(i.clientHeight - (c + m)),
			E = Kl(u),
			d = { rootMargin: -g + 'px ' + -y + 'px ' + -v + 'px ' + -E + 'px', threshold: yr(0, hi(1, s)) || 1 }
		let f = !0
		function w(C) {
			const S = C[0].intersectionRatio
			if (S !== s) {
				if (!f) return o()
				S
					? o(!1, S)
					: (r = setTimeout(() => {
							o(!1, 1e-7)
					  }, 100))
			}
			f = !1
		}
		try {
			n = new IntersectionObserver(w, { ...d, root: i.ownerDocument })
		} catch {
			n = new IntersectionObserver(w, d)
		}
		n.observe(e)
	}
	return o(!0), l
}
function xx(e, t, n, r) {
	r === void 0 && (r = {})
	const {
			ancestorScroll: i = !0,
			ancestorResize: l = !0,
			elementResize: o = typeof ResizeObserver == 'function',
			layoutShift: a = typeof IntersectionObserver == 'function',
			animationFrame: s = !1,
		} = r,
		u = uc(e),
		c = i || l ? [...(u ? vl(u) : []), ...vl(t)] : []
	c.forEach((h) => {
		i && h.addEventListener('scroll', n, { passive: !0 }), l && h.addEventListener('resize', n)
	})
	const p = u && a ? wx(u, n) : null
	let m = -1,
		g = null
	o &&
		((g = new ResizeObserver((h) => {
			let [d] = h
			d &&
				d.target === u &&
				g &&
				(g.unobserve(t),
				cancelAnimationFrame(m),
				(m = requestAnimationFrame(() => {
					g && g.observe(t)
				}))),
				n()
		})),
		u && !s && g.observe(u),
		g.observe(t))
	let y,
		v = s ? _r(e) : null
	s && E()
	function E() {
		const h = _r(e)
		v && (h.x !== v.x || h.y !== v.y || h.width !== v.width || h.height !== v.height) && n(),
			(v = h),
			(y = requestAnimationFrame(E))
	}
	return (
		n(),
		() => {
			c.forEach((h) => {
				i && h.removeEventListener('scroll', n), l && h.removeEventListener('resize', n)
			}),
				p && p(),
				g && g.disconnect(),
				(g = null),
				s && cancelAnimationFrame(y)
		}
	)
}
const tf = (e, t, n) => {
	const r = new Map(),
		i = { platform: yx, ...n },
		l = { ...i.platform, _c: r }
	return qw(e, t, { ...i, platform: l })
}
var hm = { exports: {} }
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ ;(function (e) {
	;(function () {
		var t = {}.hasOwnProperty
		function n() {
			for (var l = '', o = 0; o < arguments.length; o++) {
				var a = arguments[o]
				a && (l = i(l, r(a)))
			}
			return l
		}
		function r(l) {
			if (typeof l == 'string' || typeof l == 'number') return l
			if (typeof l != 'object') return ''
			if (Array.isArray(l)) return n.apply(null, l)
			if (l.toString !== Object.prototype.toString && !l.toString.toString().includes('[native code]'))
				return l.toString()
			var o = ''
			for (var a in l) t.call(l, a) && l[a] && (o = i(o, a))
			return o
		}
		function i(l, o) {
			return o ? (l ? l + ' ' + o : l + o) : l
		}
		e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n)
	})()
})(hm)
var Sx = hm.exports
const tu = Xo(Sx)
var nf = {}
const Ex = 'react-tooltip-core-styles',
	Cx = 'react-tooltip-base-styles',
	rf = { core: !1, base: !1 }
function lf({ css: e, id: t = Cx, type: n = 'base', ref: r }) {
	var i, l
	if (
		!e ||
		typeof document > 'u' ||
		rf[n] ||
		(n === 'core' &&
			typeof process < 'u' &&
			!((i = process == null ? void 0 : nf) === null || i === void 0) &&
			i.REACT_TOOLTIP_DISABLE_CORE_STYLES) ||
		(n !== 'base' &&
			typeof process < 'u' &&
			!((l = process == null ? void 0 : nf) === null || l === void 0) &&
			l.REACT_TOOLTIP_DISABLE_BASE_STYLES)
	)
		return
	n === 'core' && (t = Ex), r || (r = {})
	const { insertAt: o } = r
	if (document.getElementById(t))
		return void console.warn(`[react-tooltip] Element with id '${t}' already exists. Call \`removeStyle()\` first`)
	const a = document.head || document.getElementsByTagName('head')[0],
		s = document.createElement('style')
	;(s.id = t),
		(s.type = 'text/css'),
		o === 'top' && a.firstChild ? a.insertBefore(s, a.firstChild) : a.appendChild(s),
		s.styleSheet ? (s.styleSheet.cssText = e) : s.appendChild(document.createTextNode(e)),
		(rf[n] = !0)
}
const of = (e, t, n) => {
		let r = null
		return function (...i) {
			const l = () => {
				;(r = null), n || e.apply(this, i)
			}
			n && !r && (e.apply(this, i), (r = setTimeout(l, t))), n || (r && clearTimeout(r), (r = setTimeout(l, t)))
		}
	},
	Tx = 'DEFAULT_TOOLTIP_ID',
	kx = {
		anchorRefs: new Set(),
		activeAnchor: { current: null },
		attach: () => {},
		detach: () => {},
		setActiveAnchor: () => {},
	},
	Px = P.createContext({ getTooltipData: () => kx })
function mm(e = Tx) {
	return P.useContext(Px).getTooltipData(e)
}
const _x = typeof window < 'u' ? P.useLayoutEffect : P.useEffect,
	bx = (e) => {
		if (!(e instanceof HTMLElement || e instanceof SVGElement)) return !1
		const t = getComputedStyle(e)
		return ['overflow', 'overflow-x', 'overflow-y'].some((n) => {
			const r = t.getPropertyValue(n)
			return r === 'auto' || r === 'scroll'
		})
	},
	sf = (e) => {
		if (!e) return null
		let t = e.parentElement
		for (; t; ) {
			if (bx(t)) return t
			t = t.parentElement
		}
		return document.scrollingElement || document.documentElement
	},
	af = async ({
		elementReference: e = null,
		tooltipReference: t = null,
		tooltipArrowReference: n = null,
		place: r = 'top',
		offset: i = 10,
		strategy: l = 'absolute',
		middlewares: o = [tx(Number(i)), Zw({ fallbackAxisSideDirection: 'start' }), nx({ padding: 5 })],
		border: a,
	}) => {
		if (!e) return { tooltipStyles: {}, tooltipArrowStyles: {}, place: r }
		if (t === null) return { tooltipStyles: {}, tooltipArrowStyles: {}, place: r }
		const s = o
		return n
			? (s.push(Jw({ element: n, padding: 5 })),
			  tf(e, t, { placement: r, strategy: l, middleware: s }).then(
					({ x: u, y: c, placement: p, middlewareData: m }) => {
						var g, y
						const v = { left: `${u}px`, top: `${c}px`, border: a },
							{ x: E, y: h } = (g = m.arrow) !== null && g !== void 0 ? g : { x: 0, y: 0 },
							d =
								(y = { top: 'bottom', right: 'left', bottom: 'top', left: 'right' }[p.split('-')[0]]) !== null &&
								y !== void 0
									? y
									: 'bottom',
							f = a && { borderBottom: a, borderRight: a }
						let w = 0
						if (a) {
							const C = `${a}`.match(/(\d+)px/)
							w = C != null && C[1] ? Number(C[1]) : 1
						}
						return {
							tooltipStyles: v,
							tooltipArrowStyles: {
								left: E != null ? `${E}px` : '',
								top: h != null ? `${h}px` : '',
								right: '',
								bottom: '',
								...f,
								[d]: `-${4 + w}px`,
							},
							place: p,
						}
					}
			  ))
			: tf(e, t, { placement: 'bottom', strategy: l, middleware: s }).then(({ x: u, y: c, placement: p }) => ({
					tooltipStyles: { left: `${u}px`, top: `${c}px` },
					tooltipArrowStyles: {},
					place: p,
			  }))
	}
var zr = {
		tooltip: 'core-styles-module_tooltip__3vRRp',
		fixed: 'core-styles-module_fixed__pcSol',
		arrow: 'core-styles-module_arrow__cvMwQ',
		noArrow: 'core-styles-module_noArrow__xock6',
		clickable: 'core-styles-module_clickable__ZuTTB',
		show: 'core-styles-module_show__Nt9eE',
		closing: 'core-styles-module_closing__sGnxF',
	},
	Ys = {
		tooltip: 'styles-module_tooltip__mnnfp',
		arrow: 'styles-module_arrow__K0L3T',
		dark: 'styles-module_dark__xNqje',
		light: 'styles-module_light__Z6W-X',
		success: 'styles-module_success__A2AKt',
		warning: 'styles-module_warning__SCK0X',
		error: 'styles-module_error__JvumD',
		info: 'styles-module_info__BWdHW',
	}
const Lx = ({
		forwardRef: e,
		id: t,
		className: n,
		classNameArrow: r,
		variant: i = 'dark',
		anchorId: l,
		anchorSelect: o,
		place: a = 'top',
		offset: s = 10,
		events: u = ['hover'],
		openOnClick: c = !1,
		positionStrategy: p = 'absolute',
		middlewares: m,
		wrapper: g,
		delayShow: y = 0,
		delayHide: v = 0,
		float: E = !1,
		hidden: h = !1,
		noArrow: d = !1,
		clickable: f = !1,
		closeOnEsc: w = !1,
		closeOnScroll: C = !1,
		closeOnResize: S = !1,
		openEvents: b,
		closeEvents: N,
		globalCloseEvents: _,
		imperativeModeOnly: L,
		style: j,
		position: I,
		afterShow: O,
		afterHide: F,
		content: H,
		contentWrapperRef: Y,
		isOpen: X,
		setIsOpen: D,
		activeAnchor: z,
		setActiveAnchor: V,
		border: ee,
		opacity: re,
		arrowColor: Ne,
		role: xe = 'tooltip',
	}) => {
		var Me
		const oe = P.useRef(null),
			ae = P.useRef(null),
			Ie = P.useRef(null),
			lt = P.useRef(null),
			ln = P.useRef(null),
			[Ae, Bt] = P.useState(a),
			[_n, Or] = P.useState({}),
			[St, Mr] = P.useState({}),
			[Je, Ir] = P.useState(!1),
			[bn, on] = P.useState(!1),
			[de, Ln] = P.useState(null),
			sn = P.useRef(!1),
			ot = P.useRef(null),
			{ anchorRefs: Ut, setActiveAnchor: or } = mm(t),
			Vt = P.useRef(!1),
			[Ht, Ze] = P.useState([]),
			Wt = P.useRef(!1),
			an = c || u.includes('click'),
			Et =
				an || (b == null ? void 0 : b.click) || (b == null ? void 0 : b.dblclick) || (b == null ? void 0 : b.mousedown),
			sr = b ? { ...b } : { mouseenter: !0, focus: !0, click: !1, dblclick: !1, mousedown: !1 }
		!b && an && Object.assign(sr, { mouseenter: !1, focus: !1, click: !0 })
		const Nn = N ? { ...N } : { mouseleave: !0, blur: !0, click: !1, dblclick: !1, mouseup: !1 }
		!N && an && Object.assign(Nn, { mouseleave: !1, blur: !1 })
		const Ue = _ ? { ..._ } : { escape: w || !1, scroll: C || !1, resize: S || !1, clickOutsideAnchor: Et || !1 }
		L &&
			(Object.assign(sr, { mouseenter: !1, focus: !1, click: !1, dblclick: !1, mousedown: !1 }),
			Object.assign(Nn, { mouseleave: !1, blur: !1, click: !1, dblclick: !1, mouseup: !1 }),
			Object.assign(Ue, { escape: !1, scroll: !1, resize: !1, clickOutsideAnchor: !1 })),
			_x(
				() => (
					(Wt.current = !0),
					() => {
						Wt.current = !1
					}
				),
				[]
			)
		const Ge = (M) => {
			Wt.current &&
				(M && on(!0),
				setTimeout(() => {
					Wt.current && (D == null || D(M), X === void 0 && Ir(M))
				}, 10))
		}
		P.useEffect(() => {
			if (X === void 0) return () => null
			X && on(!0)
			const M = setTimeout(() => {
				Ir(X)
			}, 10)
			return () => {
				clearTimeout(M)
			}
		}, [X]),
			P.useEffect(() => {
				if (Je !== sn.current)
					if ((ln.current && clearTimeout(ln.current), (sn.current = Je), Je)) O == null || O()
					else {
						const M = ((U) => {
							const A = U.match(/^([\d.]+)(m?s?)$/)
							if (!A) return 0
							const [, K, te] = A
							return te !== 's' && te !== 'ms' ? 0 : Number(K) * (te === 'ms' ? 1 : 1e3)
						})(getComputedStyle(document.body).getPropertyValue('--rt-transition-show-delay'))
						ln.current = setTimeout(() => {
							on(!1), Ln(null), F == null || F()
						}, M + 25)
					}
			}, [Je])
		const un = (M = y) => {
				Ie.current && clearTimeout(Ie.current),
					(Ie.current = setTimeout(() => {
						Ge(!0)
					}, M))
			},
			Rn = (M = v) => {
				lt.current && clearTimeout(lt.current),
					(lt.current = setTimeout(() => {
						Vt.current || Ge(!1)
					}, M))
			},
			Gt = (M) => {
				var U
				if (!M) return
				const A = (U = M.currentTarget) !== null && U !== void 0 ? U : M.target
				if (!(A != null && A.isConnected)) return V(null), void or({ current: null })
				y ? un() : Ge(!0), V(A), or({ current: A }), lt.current && clearTimeout(lt.current)
			},
			jn = () => {
				f ? Rn(v || 100) : v ? Rn() : Ge(!1), Ie.current && clearTimeout(Ie.current)
			},
			On = ({ x: M, y: U }) => {
				var A
				const K = {
					getBoundingClientRect: () => ({ x: M, y: U, width: 0, height: 0, top: U, left: M, right: M, bottom: U }),
				}
				af({
					place: (A = de == null ? void 0 : de.place) !== null && A !== void 0 ? A : a,
					offset: s,
					elementReference: K,
					tooltipReference: oe.current,
					tooltipArrowReference: ae.current,
					strategy: p,
					middlewares: m,
					border: ee,
				}).then((te) => {
					Object.keys(te.tooltipStyles).length && Or(te.tooltipStyles),
						Object.keys(te.tooltipArrowStyles).length && Mr(te.tooltipArrowStyles),
						Bt(te.place)
				})
			},
			De = (M) => {
				if (!M) return
				const U = M,
					A = { x: U.clientX, y: U.clientY }
				On(A), (ot.current = A)
			},
			k = (M) => {
				var U
				if (!Je) return
				const A = M.target
				;(!((U = oe.current) === null || U === void 0) && U.contains(A)) ||
					[document.querySelector(`[id='${l}']`), ...Ht].some((K) => (K == null ? void 0 : K.contains(A))) ||
					(Ge(!1), Ie.current && clearTimeout(Ie.current))
			},
			T = of(Gt, 50, !0),
			R = of(jn, 50, !0),
			B = P.useCallback(() => {
				var M, U
				const A = (M = de == null ? void 0 : de.position) !== null && M !== void 0 ? M : I
				A
					? On(A)
					: E
					? ot.current && On(ot.current)
					: z != null &&
					  z.isConnected &&
					  af({
							place: (U = de == null ? void 0 : de.place) !== null && U !== void 0 ? U : a,
							offset: s,
							elementReference: z,
							tooltipReference: oe.current,
							tooltipArrowReference: ae.current,
							strategy: p,
							middlewares: m,
							border: ee,
					  }).then((K) => {
							Wt.current &&
								(Object.keys(K.tooltipStyles).length && Or(K.tooltipStyles),
								Object.keys(K.tooltipArrowStyles).length && Mr(K.tooltipArrowStyles),
								Bt(K.place))
					  })
			}, [Je, z, H, j, a, de == null ? void 0 : de.place, s, p, I, de == null ? void 0 : de.position, E])
		P.useEffect(() => {
			var M, U
			const A = new Set(Ut)
			Ht.forEach((ce) => {
				A.add({ current: ce })
			})
			const K = document.querySelector(`[id='${l}']`)
			K && A.add({ current: K })
			const te = () => {
					Ge(!1)
				},
				Q = sf(z),
				ie = sf(oe.current)
			Ue.scroll &&
				(window.addEventListener('scroll', te),
				Q == null || Q.addEventListener('scroll', te),
				ie == null || ie.addEventListener('scroll', te))
			let ue = null
			Ue.resize
				? window.addEventListener('resize', te)
				: z && oe.current && (ue = xx(z, oe.current, B, { ancestorResize: !0, elementResize: !0, layoutShift: !0 }))
			const ge = (ce) => {
				ce.key === 'Escape' && Ge(!1)
			}
			Ue.escape && window.addEventListener('keydown', ge), Ue.clickOutsideAnchor && window.addEventListener('click', k)
			const Z = [],
				Ct = (ce) => {
					;(Je && (ce == null ? void 0 : ce.target) === z) || Gt(ce)
				},
				xi = (ce) => {
					Je && (ce == null ? void 0 : ce.target) === z && jn()
				},
				cn = ['mouseenter', 'mouseleave', 'focus', 'blur'],
				jt = ['click', 'dblclick', 'mousedown', 'mouseup']
			Object.entries(sr).forEach(([ce, ft]) => {
				ft &&
					(cn.includes(ce)
						? Z.push({ event: ce, listener: T })
						: jt.includes(ce) && Z.push({ event: ce, listener: Ct }))
			}),
				Object.entries(Nn).forEach(([ce, ft]) => {
					ft &&
						(cn.includes(ce)
							? Z.push({ event: ce, listener: R })
							: jt.includes(ce) && Z.push({ event: ce, listener: xi }))
				}),
				E && Z.push({ event: 'mousemove', listener: De })
			const Yt = () => {
					Vt.current = !0
				},
				Ar = () => {
					;(Vt.current = !1), jn()
				}
			return (
				f &&
					!Et &&
					((M = oe.current) === null || M === void 0 || M.addEventListener('mouseenter', Yt),
					(U = oe.current) === null || U === void 0 || U.addEventListener('mouseleave', Ar)),
				Z.forEach(({ event: ce, listener: ft }) => {
					A.forEach((Kt) => {
						var Xt
						;(Xt = Kt.current) === null || Xt === void 0 || Xt.addEventListener(ce, ft)
					})
				}),
				() => {
					var ce, ft
					Ue.scroll &&
						(window.removeEventListener('scroll', te),
						Q == null || Q.removeEventListener('scroll', te),
						ie == null || ie.removeEventListener('scroll', te)),
						Ue.resize ? window.removeEventListener('resize', te) : ue == null || ue(),
						Ue.clickOutsideAnchor && window.removeEventListener('click', k),
						Ue.escape && window.removeEventListener('keydown', ge),
						f &&
							!Et &&
							((ce = oe.current) === null || ce === void 0 || ce.removeEventListener('mouseenter', Yt),
							(ft = oe.current) === null || ft === void 0 || ft.removeEventListener('mouseleave', Ar)),
						Z.forEach(({ event: Kt, listener: Xt }) => {
							A.forEach((fe) => {
								var he
								;(he = fe.current) === null || he === void 0 || he.removeEventListener(Kt, Xt)
							})
						})
				}
			)
		}, [z, B, bn, Ut, Ht, b, N, _, an]),
			P.useEffect(() => {
				var M, U
				let A =
					(U = (M = de == null ? void 0 : de.anchorSelect) !== null && M !== void 0 ? M : o) !== null && U !== void 0
						? U
						: ''
				!A && t && (A = `[data-tooltip-id='${t}']`)
				const K = new MutationObserver((te) => {
					const Q = [],
						ie = []
					te.forEach((ue) => {
						if (
							(ue.type === 'attributes' &&
								ue.attributeName === 'data-tooltip-id' &&
								ue.target.getAttribute('data-tooltip-id') === t &&
								Q.push(ue.target),
							ue.type === 'childList')
						) {
							if (z) {
								const ge = [...ue.removedNodes].filter((Z) => Z.nodeType === 1)
								if (A)
									try {
										ie.push(...ge.filter((Z) => Z.matches(A))),
											ie.push(...ge.flatMap((Z) => [...Z.querySelectorAll(A)]))
									} catch {}
								ge.some((Z) => {
									var Ct
									return (
										!!(!((Ct = Z == null ? void 0 : Z.contains) === null || Ct === void 0) && Ct.call(Z, z)) &&
										(on(!1),
										Ge(!1),
										V(null),
										Ie.current && clearTimeout(Ie.current),
										lt.current && clearTimeout(lt.current),
										!0)
									)
								})
							}
							if (A)
								try {
									const ge = [...ue.addedNodes].filter((Z) => Z.nodeType === 1)
									Q.push(...ge.filter((Z) => Z.matches(A))), Q.push(...ge.flatMap((Z) => [...Z.querySelectorAll(A)]))
								} catch {}
						}
					}),
						(Q.length || ie.length) && Ze((ue) => [...ue.filter((ge) => !ie.includes(ge)), ...Q])
				})
				return (
					K.observe(document.body, {
						childList: !0,
						subtree: !0,
						attributes: !0,
						attributeFilter: ['data-tooltip-id'],
					}),
					() => {
						K.disconnect()
					}
				)
			}, [t, o, de == null ? void 0 : de.anchorSelect, z]),
			P.useEffect(() => {
				B()
			}, [B]),
			P.useEffect(() => {
				if (!(Y != null && Y.current)) return () => null
				const M = new ResizeObserver(() => {
					setTimeout(() => B())
				})
				return (
					M.observe(Y.current),
					() => {
						M.disconnect()
					}
				)
			}, [H, Y == null ? void 0 : Y.current]),
			P.useEffect(() => {
				var M
				const U = document.querySelector(`[id='${l}']`),
					A = [...Ht, U]
				;(z && A.includes(z)) || V((M = Ht[0]) !== null && M !== void 0 ? M : U)
			}, [l, Ht, z]),
			P.useEffect(
				() => () => {
					Ie.current && clearTimeout(Ie.current), lt.current && clearTimeout(lt.current)
				},
				[]
			),
			P.useEffect(() => {
				var M
				let U = (M = de == null ? void 0 : de.anchorSelect) !== null && M !== void 0 ? M : o
				if ((!U && t && (U = `[data-tooltip-id='${t}']`), U))
					try {
						const A = Array.from(document.querySelectorAll(U))
						Ze(A)
					} catch {
						Ze([])
					}
			}, [t, o, de == null ? void 0 : de.anchorSelect])
		const W = (Me = de == null ? void 0 : de.content) !== null && Me !== void 0 ? Me : H,
			J = Je && Object.keys(_n).length > 0
		return (
			P.useImperativeHandle(e, () => ({
				open: (M) => {
					if (M != null && M.anchorSelect)
						try {
							document.querySelector(M.anchorSelect)
						} catch {
							return void console.warn(`[react-tooltip] "${M.anchorSelect}" is not a valid CSS selector`)
						}
					Ln(M ?? null), M != null && M.delay ? un(M.delay) : Ge(!0)
				},
				close: (M) => {
					M != null && M.delay ? Rn(M.delay) : Ge(!1)
				},
				activeAnchor: z,
				place: Ae,
				isOpen: !!(bn && !h && W && J),
			})),
			bn && !h && W
				? q.createElement(
						g,
						{
							id: t,
							role: xe,
							className: tu(
								'react-tooltip',
								zr.tooltip,
								Ys.tooltip,
								Ys[i],
								n,
								`react-tooltip__place-${Ae}`,
								zr[J ? 'show' : 'closing'],
								J ? 'react-tooltip__show' : 'react-tooltip__closing',
								p === 'fixed' && zr.fixed,
								f && zr.clickable
							),
							onTransitionEnd: (M) => {
								ln.current && clearTimeout(ln.current),
									Je || M.propertyName !== 'opacity' || (on(!1), Ln(null), F == null || F())
							},
							style: { ...j, ..._n, opacity: re !== void 0 && J ? re : void 0 },
							ref: oe,
						},
						W,
						q.createElement(g, {
							className: tu('react-tooltip-arrow', zr.arrow, Ys.arrow, r, d && zr.noArrow),
							style: {
								...St,
								background: Ne ? `linear-gradient(to right bottom, transparent 50%, ${Ne} 50%)` : void 0,
							},
							ref: ae,
						})
				  )
				: null
		)
	},
	Nx = ({ content: e }) => q.createElement('span', { dangerouslySetInnerHTML: { __html: e } }),
	uf = (e, t) => !('CSS' in window && 'supports' in window.CSS) || window.CSS.supports(e, t),
	Rx = q.forwardRef(
		(
			{
				id: e,
				anchorId: t,
				anchorSelect: n,
				content: r,
				html: i,
				render: l,
				className: o,
				classNameArrow: a,
				variant: s = 'dark',
				place: u = 'top',
				offset: c = 10,
				wrapper: p = 'div',
				children: m = null,
				events: g = ['hover'],
				openOnClick: y = !1,
				positionStrategy: v = 'absolute',
				middlewares: E,
				delayShow: h = 0,
				delayHide: d = 0,
				float: f = !1,
				hidden: w = !1,
				noArrow: C = !1,
				clickable: S = !1,
				closeOnEsc: b = !1,
				closeOnScroll: N = !1,
				closeOnResize: _ = !1,
				openEvents: L,
				closeEvents: j,
				globalCloseEvents: I,
				imperativeModeOnly: O = !1,
				style: F,
				position: H,
				isOpen: Y,
				disableStyleInjection: X = !1,
				border: D,
				opacity: z,
				arrowColor: V,
				setIsOpen: ee,
				afterShow: re,
				afterHide: Ne,
				role: xe = 'tooltip',
			},
			Me
		) => {
			const [oe, ae] = P.useState(r),
				[Ie, lt] = P.useState(i),
				[ln, Ae] = P.useState(u),
				[Bt, _n] = P.useState(s),
				[Or, St] = P.useState(c),
				[Mr, Je] = P.useState(h),
				[Ir, bn] = P.useState(d),
				[on, de] = P.useState(f),
				[Ln, sn] = P.useState(w),
				[ot, Ut] = P.useState(p),
				[or, Vt] = P.useState(g),
				[Ht, Ze] = P.useState(v),
				[Wt, an] = P.useState(null),
				[Et, sr] = P.useState(null),
				Nn = P.useRef(X),
				{ anchorRefs: Ue, activeAnchor: Ge } = mm(e),
				un = (De) =>
					De == null
						? void 0
						: De.getAttributeNames().reduce((k, T) => {
								var R
								return (
									T.startsWith('data-tooltip-') &&
										(k[T.replace(/^data-tooltip-/, '')] =
											(R = De == null ? void 0 : De.getAttribute(T)) !== null && R !== void 0 ? R : null),
									k
								)
						  }, {}),
				Rn = (De) => {
					const k = {
						place: (T) => {
							var R
							Ae((R = T) !== null && R !== void 0 ? R : u)
						},
						content: (T) => {
							ae(T ?? r)
						},
						html: (T) => {
							lt(T ?? i)
						},
						variant: (T) => {
							var R
							_n((R = T) !== null && R !== void 0 ? R : s)
						},
						offset: (T) => {
							St(T === null ? c : Number(T))
						},
						wrapper: (T) => {
							var R
							Ut((R = T) !== null && R !== void 0 ? R : p)
						},
						events: (T) => {
							const R = T == null ? void 0 : T.split(' ')
							Vt(R ?? g)
						},
						'position-strategy': (T) => {
							var R
							Ze((R = T) !== null && R !== void 0 ? R : v)
						},
						'delay-show': (T) => {
							Je(T === null ? h : Number(T))
						},
						'delay-hide': (T) => {
							bn(T === null ? d : Number(T))
						},
						float: (T) => {
							de(T === null ? f : T === 'true')
						},
						hidden: (T) => {
							sn(T === null ? w : T === 'true')
						},
						'class-name': (T) => {
							an(T)
						},
					}
					Object.values(k).forEach((T) => T(null)),
						Object.entries(De).forEach(([T, R]) => {
							var B
							;(B = k[T]) === null || B === void 0 || B.call(k, R)
						})
				}
			P.useEffect(() => {
				ae(r)
			}, [r]),
				P.useEffect(() => {
					lt(i)
				}, [i]),
				P.useEffect(() => {
					Ae(u)
				}, [u]),
				P.useEffect(() => {
					_n(s)
				}, [s]),
				P.useEffect(() => {
					St(c)
				}, [c]),
				P.useEffect(() => {
					Je(h)
				}, [h]),
				P.useEffect(() => {
					bn(d)
				}, [d]),
				P.useEffect(() => {
					de(f)
				}, [f]),
				P.useEffect(() => {
					sn(w)
				}, [w]),
				P.useEffect(() => {
					Ze(v)
				}, [v]),
				P.useEffect(() => {
					Nn.current !== X && console.warn('[react-tooltip] Do not change `disableStyleInjection` dynamically.')
				}, [X]),
				P.useEffect(() => {
					typeof window < 'u' &&
						window.dispatchEvent(
							new CustomEvent('react-tooltip-inject-styles', { detail: { disableCore: X === 'core', disableBase: X } })
						)
				}, []),
				P.useEffect(() => {
					var De
					const k = new Set(Ue)
					let T = n
					if ((!T && e && (T = `[data-tooltip-id='${e}']`), T))
						try {
							document.querySelectorAll(T).forEach((M) => {
								k.add({ current: M })
							})
						} catch {
							console.warn(`[react-tooltip] "${T}" is not a valid CSS selector`)
						}
					const R = document.querySelector(`[id='${t}']`)
					if ((R && k.add({ current: R }), !k.size)) return () => null
					const B = (De = Et ?? R) !== null && De !== void 0 ? De : Ge.current,
						W = new MutationObserver((M) => {
							M.forEach((U) => {
								var A
								if (
									!B ||
									U.type !== 'attributes' ||
									!(!((A = U.attributeName) === null || A === void 0) && A.startsWith('data-tooltip-'))
								)
									return
								const K = un(B)
								Rn(K)
							})
						}),
						J = { attributes: !0, childList: !1, subtree: !1 }
					if (B) {
						const M = un(B)
						Rn(M), W.observe(B, J)
					}
					return () => {
						W.disconnect()
					}
				}, [Ue, Ge, Et, t, n]),
				P.useEffect(() => {
					F != null &&
						F.border &&
						console.warn('[react-tooltip] Do not set `style.border`. Use `border` prop instead.'),
						D && !uf('border', `${D}`) && console.warn(`[react-tooltip] "${D}" is not a valid \`border\`.`),
						F != null &&
							F.opacity &&
							console.warn('[react-tooltip] Do not set `style.opacity`. Use `opacity` prop instead.'),
						z && !uf('opacity', `${z}`) && console.warn(`[react-tooltip] "${z}" is not a valid \`opacity\`.`)
				}, [])
			let Gt = m
			const jn = P.useRef(null)
			if (l) {
				const De = l({ content: oe ?? null, activeAnchor: Et })
				Gt = De ? q.createElement('div', { ref: jn, className: 'react-tooltip-content-wrapper' }, De) : null
			} else oe && (Gt = oe)
			Ie && (Gt = q.createElement(Nx, { content: Ie }))
			const On = {
				forwardRef: Me,
				id: e,
				anchorId: t,
				anchorSelect: n,
				className: tu(o, Wt),
				classNameArrow: a,
				content: Gt,
				contentWrapperRef: jn,
				place: ln,
				variant: Bt,
				offset: Or,
				wrapper: ot,
				events: or,
				openOnClick: y,
				positionStrategy: Ht,
				middlewares: E,
				delayShow: Mr,
				delayHide: Ir,
				float: on,
				hidden: Ln,
				noArrow: C,
				clickable: S,
				closeOnEsc: b,
				closeOnScroll: N,
				closeOnResize: _,
				openEvents: L,
				closeEvents: j,
				globalCloseEvents: I,
				imperativeModeOnly: O,
				style: F,
				position: H,
				isOpen: Y,
				border: D,
				opacity: z,
				arrowColor: V,
				setIsOpen: ee,
				afterShow: re,
				afterHide: Ne,
				activeAnchor: Et,
				setActiveAnchor: (De) => sr(De),
				role: xe,
			}
			return q.createElement(Lx, { ...On })
		}
	)
typeof window < 'u' &&
	window.addEventListener('react-tooltip-inject-styles', (e) => {
		e.detail.disableCore ||
			lf({
				css: ':root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9;--rt-transition-show-delay:0.15s;--rt-transition-closing-delay:0.15s}.core-styles-module_tooltip__3vRRp{position:absolute;top:0;left:0;pointer-events:none;opacity:0;will-change:opacity}.core-styles-module_fixed__pcSol{position:fixed}.core-styles-module_arrow__cvMwQ{position:absolute;background:inherit}.core-styles-module_noArrow__xock6{display:none}.core-styles-module_clickable__ZuTTB{pointer-events:auto}.core-styles-module_show__Nt9eE{opacity:var(--rt-opacity);transition:opacity var(--rt-transition-show-delay)ease-out}.core-styles-module_closing__sGnxF{opacity:0;transition:opacity var(--rt-transition-closing-delay)ease-in}',
				type: 'core',
			}),
			e.detail.disableBase ||
				lf({
					css: `
.styles-module_tooltip__mnnfp{padding:8px 16px;border-radius:3px;font-size:90%;width:max-content}.styles-module_arrow__K0L3T{width:8px;height:8px}[class*='react-tooltip__place-top']>.styles-module_arrow__K0L3T{transform:rotate(45deg)}[class*='react-tooltip__place-right']>.styles-module_arrow__K0L3T{transform:rotate(135deg)}[class*='react-tooltip__place-bottom']>.styles-module_arrow__K0L3T{transform:rotate(225deg)}[class*='react-tooltip__place-left']>.styles-module_arrow__K0L3T{transform:rotate(315deg)}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}`,
					type: 'base',
				})
	})
function cf(e) {
	return e !== null && typeof e == 'object' && 'constructor' in e && e.constructor === Object
}
function cc(e, t) {
	e === void 0 && (e = {}),
		t === void 0 && (t = {}),
		Object.keys(t).forEach((n) => {
			typeof e[n] > 'u' ? (e[n] = t[n]) : cf(t[n]) && cf(e[n]) && Object.keys(t[n]).length > 0 && cc(e[n], t[n])
		})
}
const gm = {
	body: {},
	addEventListener() {},
	removeEventListener() {},
	activeElement: { blur() {}, nodeName: '' },
	querySelector() {
		return null
	},
	querySelectorAll() {
		return []
	},
	getElementById() {
		return null
	},
	createEvent() {
		return { initEvent() {} }
	},
	createElement() {
		return {
			children: [],
			childNodes: [],
			style: {},
			setAttribute() {},
			getElementsByTagName() {
				return []
			},
		}
	},
	createElementNS() {
		return {}
	},
	importNode() {
		return null
	},
	location: { hash: '', host: '', hostname: '', href: '', origin: '', pathname: '', protocol: '', search: '' },
}
function lr() {
	const e = typeof document < 'u' ? document : {}
	return cc(e, gm), e
}
const jx = {
	document: gm,
	navigator: { userAgent: '' },
	location: { hash: '', host: '', hostname: '', href: '', origin: '', pathname: '', protocol: '', search: '' },
	history: { replaceState() {}, pushState() {}, go() {}, back() {} },
	CustomEvent: function () {
		return this
	},
	addEventListener() {},
	removeEventListener() {},
	getComputedStyle() {
		return {
			getPropertyValue() {
				return ''
			},
		}
	},
	Image() {},
	Date() {},
	screen: {},
	setTimeout() {},
	clearTimeout() {},
	matchMedia() {
		return {}
	},
	requestAnimationFrame(e) {
		return typeof setTimeout > 'u' ? (e(), null) : setTimeout(e, 0)
	},
	cancelAnimationFrame(e) {
		typeof setTimeout > 'u' || clearTimeout(e)
	},
}
function qe() {
	const e = typeof window < 'u' ? window : {}
	return cc(e, jx), e
}
function Ox(e) {
	return (
		e === void 0 && (e = ''),
		e
			.trim()
			.split(' ')
			.filter((t) => !!t.trim())
	)
}
function Mx(e) {
	const t = e
	Object.keys(t).forEach((n) => {
		try {
			t[n] = null
		} catch {}
		try {
			delete t[n]
		} catch {}
	})
}
function yl(e, t) {
	return t === void 0 && (t = 0), setTimeout(e, t)
}
function hn() {
	return Date.now()
}
function Ix(e) {
	const t = qe()
	let n
	return (
		t.getComputedStyle && (n = t.getComputedStyle(e, null)),
		!n && e.currentStyle && (n = e.currentStyle),
		n || (n = e.style),
		n
	)
}
function Ax(e, t) {
	t === void 0 && (t = 'x')
	const n = qe()
	let r, i, l
	const o = Ix(e)
	return (
		n.WebKitCSSMatrix
			? ((i = o.transform || o.webkitTransform),
			  i.split(',').length > 6 &&
					(i = i
						.split(', ')
						.map((a) => a.replace(',', '.'))
						.join(', ')),
			  (l = new n.WebKitCSSMatrix(i === 'none' ? '' : i)))
			: ((l =
					o.MozTransform ||
					o.OTransform ||
					o.MsTransform ||
					o.msTransform ||
					o.transform ||
					o.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,')),
			  (r = l.toString().split(','))),
		t === 'x' && (n.WebKitCSSMatrix ? (i = l.m41) : r.length === 16 ? (i = parseFloat(r[12])) : (i = parseFloat(r[4]))),
		t === 'y' && (n.WebKitCSSMatrix ? (i = l.m42) : r.length === 16 ? (i = parseFloat(r[13])) : (i = parseFloat(r[5]))),
		i || 0
	)
}
function Xl(e) {
	return (
		typeof e == 'object' && e !== null && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === 'Object'
	)
}
function Dx(e) {
	return typeof window < 'u' && typeof window.HTMLElement < 'u'
		? e instanceof HTMLElement
		: e && (e.nodeType === 1 || e.nodeType === 11)
}
function ht() {
	const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
		t = ['__proto__', 'constructor', 'prototype']
	for (let n = 1; n < arguments.length; n += 1) {
		const r = n < 0 || arguments.length <= n ? void 0 : arguments[n]
		if (r != null && !Dx(r)) {
			const i = Object.keys(Object(r)).filter((l) => t.indexOf(l) < 0)
			for (let l = 0, o = i.length; l < o; l += 1) {
				const a = i[l],
					s = Object.getOwnPropertyDescriptor(r, a)
				s !== void 0 &&
					s.enumerable &&
					(Xl(e[a]) && Xl(r[a])
						? r[a].__swiper__
							? (e[a] = r[a])
							: ht(e[a], r[a])
						: !Xl(e[a]) && Xl(r[a])
						? ((e[a] = {}), r[a].__swiper__ ? (e[a] = r[a]) : ht(e[a], r[a]))
						: (e[a] = r[a]))
			}
		}
	}
	return e
}
function Ql(e, t, n) {
	e.style.setProperty(t, n)
}
function vm(e) {
	let { swiper: t, targetPosition: n, side: r } = e
	const i = qe(),
		l = -t.translate
	let o = null,
		a
	const s = t.params.speed
	;(t.wrapperEl.style.scrollSnapType = 'none'), i.cancelAnimationFrame(t.cssModeFrameID)
	const u = n > l ? 'next' : 'prev',
		c = (m, g) => (u === 'next' && m >= g) || (u === 'prev' && m <= g),
		p = () => {
			;(a = new Date().getTime()), o === null && (o = a)
			const m = Math.max(Math.min((a - o) / s, 1), 0),
				g = 0.5 - Math.cos(m * Math.PI) / 2
			let y = l + g * (n - l)
			if ((c(y, n) && (y = n), t.wrapperEl.scrollTo({ [r]: y }), c(y, n))) {
				;(t.wrapperEl.style.overflow = 'hidden'),
					(t.wrapperEl.style.scrollSnapType = ''),
					setTimeout(() => {
						;(t.wrapperEl.style.overflow = ''), t.wrapperEl.scrollTo({ [r]: y })
					}),
					i.cancelAnimationFrame(t.cssModeFrameID)
				return
			}
			t.cssModeFrameID = i.requestAnimationFrame(p)
		}
	p()
}
function en(e, t) {
	return t === void 0 && (t = ''), [...e.children].filter((n) => n.matches(t))
}
function Ho(e) {
	try {
		console.warn(e)
		return
	} catch {}
}
function Wo(e, t) {
	t === void 0 && (t = [])
	const n = document.createElement(e)
	return n.classList.add(...(Array.isArray(t) ? t : Ox(t))), n
}
function zx(e) {
	const t = qe(),
		n = lr(),
		r = e.getBoundingClientRect(),
		i = n.body,
		l = e.clientTop || i.clientTop || 0,
		o = e.clientLeft || i.clientLeft || 0,
		a = e === t ? t.scrollY : e.scrollTop,
		s = e === t ? t.scrollX : e.scrollLeft
	return { top: r.top + a - l, left: r.left + s - o }
}
function Fx(e, t) {
	const n = []
	for (; e.previousElementSibling; ) {
		const r = e.previousElementSibling
		t ? r.matches(t) && n.push(r) : n.push(r), (e = r)
	}
	return n
}
function $x(e, t) {
	const n = []
	for (; e.nextElementSibling; ) {
		const r = e.nextElementSibling
		t ? r.matches(t) && n.push(r) : n.push(r), (e = r)
	}
	return n
}
function Vn(e, t) {
	return qe().getComputedStyle(e, null).getPropertyValue(t)
}
function Go(e) {
	let t = e,
		n
	if (t) {
		for (n = 0; (t = t.previousSibling) !== null; ) t.nodeType === 1 && (n += 1)
		return n
	}
}
function Yo(e, t) {
	const n = []
	let r = e.parentElement
	for (; r; ) t ? r.matches(t) && n.push(r) : n.push(r), (r = r.parentElement)
	return n
}
function nu(e, t, n) {
	const r = qe()
	return n
		? e[t === 'width' ? 'offsetWidth' : 'offsetHeight'] +
				parseFloat(r.getComputedStyle(e, null).getPropertyValue(t === 'width' ? 'margin-right' : 'margin-top')) +
				parseFloat(r.getComputedStyle(e, null).getPropertyValue(t === 'width' ? 'margin-left' : 'margin-bottom'))
		: e.offsetWidth
}
function Bx(e) {
	let { swiper: t, extendParams: n, on: r, emit: i } = e
	const l = lr(),
		o = qe()
	;(t.keyboard = { enabled: !1 }), n({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } })
	function a(c) {
		if (!t.enabled) return
		const { rtlTranslate: p } = t
		let m = c
		m.originalEvent && (m = m.originalEvent)
		const g = m.keyCode || m.charCode,
			y = t.params.keyboard.pageUpDown,
			v = y && g === 33,
			E = y && g === 34,
			h = g === 37,
			d = g === 39,
			f = g === 38,
			w = g === 40
		if (
			(!t.allowSlideNext && ((t.isHorizontal() && d) || (t.isVertical() && w) || E)) ||
			(!t.allowSlidePrev && ((t.isHorizontal() && h) || (t.isVertical() && f) || v))
		)
			return !1
		if (
			!(m.shiftKey || m.altKey || m.ctrlKey || m.metaKey) &&
			!(
				l.activeElement &&
				l.activeElement.nodeName &&
				(l.activeElement.nodeName.toLowerCase() === 'input' || l.activeElement.nodeName.toLowerCase() === 'textarea')
			)
		) {
			if (t.params.keyboard.onlyInViewport && (v || E || h || d || f || w)) {
				let C = !1
				if (
					Yo(t.el, `.${t.params.slideClass}, swiper-slide`).length > 0 &&
					Yo(t.el, `.${t.params.slideActiveClass}`).length === 0
				)
					return
				const S = t.el,
					b = S.clientWidth,
					N = S.clientHeight,
					_ = o.innerWidth,
					L = o.innerHeight,
					j = zx(S)
				p && (j.left -= S.scrollLeft)
				const I = [
					[j.left, j.top],
					[j.left + b, j.top],
					[j.left, j.top + N],
					[j.left + b, j.top + N],
				]
				for (let O = 0; O < I.length; O += 1) {
					const F = I[O]
					if (F[0] >= 0 && F[0] <= _ && F[1] >= 0 && F[1] <= L) {
						if (F[0] === 0 && F[1] === 0) continue
						C = !0
					}
				}
				if (!C) return
			}
			t.isHorizontal()
				? ((v || E || h || d) && (m.preventDefault ? m.preventDefault() : (m.returnValue = !1)),
				  (((E || d) && !p) || ((v || h) && p)) && t.slideNext(),
				  (((v || h) && !p) || ((E || d) && p)) && t.slidePrev())
				: ((v || E || f || w) && (m.preventDefault ? m.preventDefault() : (m.returnValue = !1)),
				  (E || w) && t.slideNext(),
				  (v || f) && t.slidePrev()),
				i('keyPress', g)
		}
	}
	function s() {
		t.keyboard.enabled || (l.addEventListener('keydown', a), (t.keyboard.enabled = !0))
	}
	function u() {
		t.keyboard.enabled && (l.removeEventListener('keydown', a), (t.keyboard.enabled = !1))
	}
	r('init', () => {
		t.params.keyboard.enabled && s()
	}),
		r('destroy', () => {
			t.keyboard.enabled && u()
		}),
		Object.assign(t.keyboard, { enable: s, disable: u })
}
function Ux(e) {
	let { swiper: t, extendParams: n, on: r, emit: i } = e
	const l = qe()
	n({
		mousewheel: {
			enabled: !1,
			releaseOnEdges: !1,
			invert: !1,
			forceToAxis: !1,
			sensitivity: 1,
			eventsTarget: 'container',
			thresholdDelta: null,
			thresholdTime: null,
			noMousewheelClass: 'swiper-no-mousewheel',
		},
	}),
		(t.mousewheel = { enabled: !1 })
	let o,
		a = hn(),
		s
	const u = []
	function c(f) {
		let b = 0,
			N = 0,
			_ = 0,
			L = 0
		return (
			'detail' in f && (N = f.detail),
			'wheelDelta' in f && (N = -f.wheelDelta / 120),
			'wheelDeltaY' in f && (N = -f.wheelDeltaY / 120),
			'wheelDeltaX' in f && (b = -f.wheelDeltaX / 120),
			'axis' in f && f.axis === f.HORIZONTAL_AXIS && ((b = N), (N = 0)),
			(_ = b * 10),
			(L = N * 10),
			'deltaY' in f && (L = f.deltaY),
			'deltaX' in f && (_ = f.deltaX),
			f.shiftKey && !_ && ((_ = L), (L = 0)),
			(_ || L) && f.deltaMode && (f.deltaMode === 1 ? ((_ *= 40), (L *= 40)) : ((_ *= 800), (L *= 800))),
			_ && !b && (b = _ < 1 ? -1 : 1),
			L && !N && (N = L < 1 ? -1 : 1),
			{ spinX: b, spinY: N, pixelX: _, pixelY: L }
		)
	}
	function p() {
		t.enabled && (t.mouseEntered = !0)
	}
	function m() {
		t.enabled && (t.mouseEntered = !1)
	}
	function g(f) {
		return (t.params.mousewheel.thresholdDelta && f.delta < t.params.mousewheel.thresholdDelta) ||
			(t.params.mousewheel.thresholdTime && hn() - a < t.params.mousewheel.thresholdTime)
			? !1
			: f.delta >= 6 && hn() - a < 60
			? !0
			: (f.direction < 0
					? (!t.isEnd || t.params.loop) && !t.animating && (t.slideNext(), i('scroll', f.raw))
					: (!t.isBeginning || t.params.loop) && !t.animating && (t.slidePrev(), i('scroll', f.raw)),
			  (a = new l.Date().getTime()),
			  !1)
	}
	function y(f) {
		const w = t.params.mousewheel
		if (f.direction < 0) {
			if (t.isEnd && !t.params.loop && w.releaseOnEdges) return !0
		} else if (t.isBeginning && !t.params.loop && w.releaseOnEdges) return !0
		return !1
	}
	function v(f) {
		let w = f,
			C = !0
		if (!t.enabled || f.target.closest(`.${t.params.mousewheel.noMousewheelClass}`)) return
		const S = t.params.mousewheel
		t.params.cssMode && w.preventDefault()
		let b = t.el
		t.params.mousewheel.eventsTarget !== 'container' && (b = document.querySelector(t.params.mousewheel.eventsTarget))
		const N = b && b.contains(w.target)
		if (!t.mouseEntered && !N && !S.releaseOnEdges) return !0
		w.originalEvent && (w = w.originalEvent)
		let _ = 0
		const L = t.rtlTranslate ? -1 : 1,
			j = c(w)
		if (S.forceToAxis)
			if (t.isHorizontal())
				if (Math.abs(j.pixelX) > Math.abs(j.pixelY)) _ = -j.pixelX * L
				else return !0
			else if (Math.abs(j.pixelY) > Math.abs(j.pixelX)) _ = -j.pixelY
			else return !0
		else _ = Math.abs(j.pixelX) > Math.abs(j.pixelY) ? -j.pixelX * L : -j.pixelY
		if (_ === 0) return !0
		S.invert && (_ = -_)
		let I = t.getTranslate() + _ * S.sensitivity
		if (
			(I >= t.minTranslate() && (I = t.minTranslate()),
			I <= t.maxTranslate() && (I = t.maxTranslate()),
			(C = t.params.loop ? !0 : !(I === t.minTranslate() || I === t.maxTranslate())),
			C && t.params.nested && w.stopPropagation(),
			!t.params.freeMode || !t.params.freeMode.enabled)
		) {
			const O = { time: hn(), delta: Math.abs(_), direction: Math.sign(_), raw: f }
			u.length >= 2 && u.shift()
			const F = u.length ? u[u.length - 1] : void 0
			if (
				(u.push(O),
				F ? (O.direction !== F.direction || O.delta > F.delta || O.time > F.time + 150) && g(O) : g(O),
				y(O))
			)
				return !0
		} else {
			const O = { time: hn(), delta: Math.abs(_), direction: Math.sign(_) },
				F = s && O.time < s.time + 500 && O.delta <= s.delta && O.direction === s.direction
			if (!F) {
				s = void 0
				let H = t.getTranslate() + _ * S.sensitivity
				const Y = t.isBeginning,
					X = t.isEnd
				if (
					(H >= t.minTranslate() && (H = t.minTranslate()),
					H <= t.maxTranslate() && (H = t.maxTranslate()),
					t.setTransition(0),
					t.setTranslate(H),
					t.updateProgress(),
					t.updateActiveIndex(),
					t.updateSlidesClasses(),
					((!Y && t.isBeginning) || (!X && t.isEnd)) && t.updateSlidesClasses(),
					t.params.loop && t.loopFix({ direction: O.direction < 0 ? 'next' : 'prev', byMousewheel: !0 }),
					t.params.freeMode.sticky)
				) {
					clearTimeout(o), (o = void 0), u.length >= 15 && u.shift()
					const D = u.length ? u[u.length - 1] : void 0,
						z = u[0]
					if ((u.push(O), D && (O.delta > D.delta || O.direction !== D.direction))) u.splice(0)
					else if (u.length >= 15 && O.time - z.time < 500 && z.delta - O.delta >= 1 && O.delta <= 6) {
						const V = _ > 0 ? 0.8 : 0.2
						;(s = O),
							u.splice(0),
							(o = yl(() => {
								t.slideToClosest(t.params.speed, !0, void 0, V)
							}, 0))
					}
					o ||
						(o = yl(() => {
							;(s = O), u.splice(0), t.slideToClosest(t.params.speed, !0, void 0, 0.5)
						}, 500))
				}
				if (
					(F || i('scroll', w),
					t.params.autoplay && t.params.autoplayDisableOnInteraction && t.autoplay.stop(),
					S.releaseOnEdges && (H === t.minTranslate() || H === t.maxTranslate()))
				)
					return !0
			}
		}
		return w.preventDefault ? w.preventDefault() : (w.returnValue = !1), !1
	}
	function E(f) {
		let w = t.el
		t.params.mousewheel.eventsTarget !== 'container' && (w = document.querySelector(t.params.mousewheel.eventsTarget)),
			w[f]('mouseenter', p),
			w[f]('mouseleave', m),
			w[f]('wheel', v)
	}
	function h() {
		return t.params.cssMode
			? (t.wrapperEl.removeEventListener('wheel', v), !0)
			: t.mousewheel.enabled
			? !1
			: (E('addEventListener'), (t.mousewheel.enabled = !0), !0)
	}
	function d() {
		return t.params.cssMode
			? (t.wrapperEl.addEventListener(event, v), !0)
			: t.mousewheel.enabled
			? (E('removeEventListener'), (t.mousewheel.enabled = !1), !0)
			: !1
	}
	r('init', () => {
		!t.params.mousewheel.enabled && t.params.cssMode && d(), t.params.mousewheel.enabled && h()
	}),
		r('destroy', () => {
			t.params.cssMode && h(), t.mousewheel.enabled && d()
		}),
		Object.assign(t.mousewheel, { enable: h, disable: d })
}
function ym(e, t, n, r) {
	return (
		e.params.createElements &&
			Object.keys(r).forEach((i) => {
				if (!n[i] && n.auto === !0) {
					let l = en(e.el, `.${r[i]}`)[0]
					l || ((l = Wo('div', r[i])), (l.className = r[i]), e.el.append(l)), (n[i] = l), (t[i] = l)
				}
			}),
		n
	)
}
function Vx(e) {
	let { swiper: t, extendParams: n, on: r, emit: i } = e
	n({
		navigation: {
			nextEl: null,
			prevEl: null,
			hideOnClick: !1,
			disabledClass: 'swiper-button-disabled',
			hiddenClass: 'swiper-button-hidden',
			lockClass: 'swiper-button-lock',
			navigationDisabledClass: 'swiper-navigation-disabled',
		},
	}),
		(t.navigation = { nextEl: null, prevEl: null })
	const l = (v) => (Array.isArray(v) ? v : [v]).filter((E) => !!E)
	function o(v) {
		let E
		return v && typeof v == 'string' && t.isElement && ((E = t.el.querySelector(v)), E)
			? E
			: (v &&
					(typeof v == 'string' && (E = [...document.querySelectorAll(v)]),
					t.params.uniqueNavElements &&
						typeof v == 'string' &&
						E.length > 1 &&
						t.el.querySelectorAll(v).length === 1 &&
						(E = t.el.querySelector(v))),
			  v && !E ? v : E)
	}
	function a(v, E) {
		const h = t.params.navigation
		;(v = l(v)),
			v.forEach((d) => {
				d &&
					(d.classList[E ? 'add' : 'remove'](...h.disabledClass.split(' ')),
					d.tagName === 'BUTTON' && (d.disabled = E),
					t.params.watchOverflow && t.enabled && d.classList[t.isLocked ? 'add' : 'remove'](h.lockClass))
			})
	}
	function s() {
		const { nextEl: v, prevEl: E } = t.navigation
		if (t.params.loop) {
			a(E, !1), a(v, !1)
			return
		}
		a(E, t.isBeginning && !t.params.rewind), a(v, t.isEnd && !t.params.rewind)
	}
	function u(v) {
		v.preventDefault(), !(t.isBeginning && !t.params.loop && !t.params.rewind) && (t.slidePrev(), i('navigationPrev'))
	}
	function c(v) {
		v.preventDefault(), !(t.isEnd && !t.params.loop && !t.params.rewind) && (t.slideNext(), i('navigationNext'))
	}
	function p() {
		const v = t.params.navigation
		if (
			((t.params.navigation = ym(t, t.originalParams.navigation, t.params.navigation, {
				nextEl: 'swiper-button-next',
				prevEl: 'swiper-button-prev',
			})),
			!(v.nextEl || v.prevEl))
		)
			return
		let E = o(v.nextEl),
			h = o(v.prevEl)
		Object.assign(t.navigation, { nextEl: E, prevEl: h }), (E = l(E)), (h = l(h))
		const d = (f, w) => {
			f && f.addEventListener('click', w === 'next' ? c : u),
				!t.enabled && f && f.classList.add(...v.lockClass.split(' '))
		}
		E.forEach((f) => d(f, 'next')), h.forEach((f) => d(f, 'prev'))
	}
	function m() {
		let { nextEl: v, prevEl: E } = t.navigation
		;(v = l(v)), (E = l(E))
		const h = (d, f) => {
			d.removeEventListener('click', f === 'next' ? c : u),
				d.classList.remove(...t.params.navigation.disabledClass.split(' '))
		}
		v.forEach((d) => h(d, 'next')), E.forEach((d) => h(d, 'prev'))
	}
	r('init', () => {
		t.params.navigation.enabled === !1 ? y() : (p(), s())
	}),
		r('toEdge fromEdge lock unlock', () => {
			s()
		}),
		r('destroy', () => {
			m()
		}),
		r('enable disable', () => {
			let { nextEl: v, prevEl: E } = t.navigation
			if (((v = l(v)), (E = l(E)), t.enabled)) {
				s()
				return
			}
			;[...v, ...E].filter((h) => !!h).forEach((h) => h.classList.add(t.params.navigation.lockClass))
		}),
		r('click', (v, E) => {
			let { nextEl: h, prevEl: d } = t.navigation
			;(h = l(h)), (d = l(d))
			const f = E.target
			if (t.params.navigation.hideOnClick && !d.includes(f) && !h.includes(f)) {
				if (
					t.pagination &&
					t.params.pagination &&
					t.params.pagination.clickable &&
					(t.pagination.el === f || t.pagination.el.contains(f))
				)
					return
				let w
				h.length
					? (w = h[0].classList.contains(t.params.navigation.hiddenClass))
					: d.length && (w = d[0].classList.contains(t.params.navigation.hiddenClass)),
					i(w === !0 ? 'navigationShow' : 'navigationHide'),
					[...h, ...d].filter((C) => !!C).forEach((C) => C.classList.toggle(t.params.navigation.hiddenClass))
			}
		})
	const g = () => {
			t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(' ')), p(), s()
		},
		y = () => {
			t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(' ')), m()
		}
	Object.assign(t.navigation, { enable: g, disable: y, update: s, init: p, destroy: m })
}
function Mi(e) {
	return (
		e === void 0 && (e = ''),
		`.${e
			.trim()
			.replace(/([\.:!+\/])/g, '\\$1')
			.replace(/ /g, '.')}`
	)
}
function Hx(e) {
	let { swiper: t, extendParams: n, on: r, emit: i } = e
	const l = 'swiper-pagination'
	n({
		pagination: {
			el: null,
			bulletElement: 'span',
			clickable: !1,
			hideOnClick: !1,
			renderBullet: null,
			renderProgressbar: null,
			renderFraction: null,
			renderCustom: null,
			progressbarOpposite: !1,
			type: 'bullets',
			dynamicBullets: !1,
			dynamicMainBullets: 1,
			formatFractionCurrent: (d) => d,
			formatFractionTotal: (d) => d,
			bulletClass: `${l}-bullet`,
			bulletActiveClass: `${l}-bullet-active`,
			modifierClass: `${l}-`,
			currentClass: `${l}-current`,
			totalClass: `${l}-total`,
			hiddenClass: `${l}-hidden`,
			progressbarFillClass: `${l}-progressbar-fill`,
			progressbarOppositeClass: `${l}-progressbar-opposite`,
			clickableClass: `${l}-clickable`,
			lockClass: `${l}-lock`,
			horizontalClass: `${l}-horizontal`,
			verticalClass: `${l}-vertical`,
			paginationDisabledClass: `${l}-disabled`,
		},
	}),
		(t.pagination = { el: null, bullets: [] })
	let o,
		a = 0
	const s = (d) => (Array.isArray(d) ? d : [d]).filter((f) => !!f)
	function u() {
		return (
			!t.params.pagination.el || !t.pagination.el || (Array.isArray(t.pagination.el) && t.pagination.el.length === 0)
		)
	}
	function c(d, f) {
		const { bulletActiveClass: w } = t.params.pagination
		d &&
			((d = d[`${f === 'prev' ? 'previous' : 'next'}ElementSibling`]),
			d &&
				(d.classList.add(`${w}-${f}`),
				(d = d[`${f === 'prev' ? 'previous' : 'next'}ElementSibling`]),
				d && d.classList.add(`${w}-${f}-${f}`)))
	}
	function p(d) {
		const f = d.target.closest(Mi(t.params.pagination.bulletClass))
		if (!f) return
		d.preventDefault()
		const w = Go(f) * t.params.slidesPerGroup
		if (t.params.loop) {
			if (t.realIndex === w) return
			t.slideToLoop(w)
		} else t.slideTo(w)
	}
	function m() {
		const d = t.rtl,
			f = t.params.pagination
		if (u()) return
		let w = t.pagination.el
		w = s(w)
		let C, S
		const b = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
			N = t.params.loop ? Math.ceil(b / t.params.slidesPerGroup) : t.snapGrid.length
		if (
			(t.params.loop
				? ((S = t.previousRealIndex || 0),
				  (C = t.params.slidesPerGroup > 1 ? Math.floor(t.realIndex / t.params.slidesPerGroup) : t.realIndex))
				: typeof t.snapIndex < 'u'
				? ((C = t.snapIndex), (S = t.previousSnapIndex))
				: ((S = t.previousIndex || 0), (C = t.activeIndex || 0)),
			f.type === 'bullets' && t.pagination.bullets && t.pagination.bullets.length > 0)
		) {
			const _ = t.pagination.bullets
			let L, j, I
			if (
				(f.dynamicBullets &&
					((o = nu(_[0], t.isHorizontal() ? 'width' : 'height', !0)),
					w.forEach((O) => {
						O.style[t.isHorizontal() ? 'width' : 'height'] = `${o * (f.dynamicMainBullets + 4)}px`
					}),
					f.dynamicMainBullets > 1 &&
						S !== void 0 &&
						((a += C - (S || 0)), a > f.dynamicMainBullets - 1 ? (a = f.dynamicMainBullets - 1) : a < 0 && (a = 0)),
					(L = Math.max(C - a, 0)),
					(j = L + (Math.min(_.length, f.dynamicMainBullets) - 1)),
					(I = (j + L) / 2)),
				_.forEach((O) => {
					const F = [
						...['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map((H) => `${f.bulletActiveClass}${H}`),
					]
						.map((H) => (typeof H == 'string' && H.includes(' ') ? H.split(' ') : H))
						.flat()
					O.classList.remove(...F)
				}),
				w.length > 1)
			)
				_.forEach((O) => {
					const F = Go(O)
					F === C
						? O.classList.add(...f.bulletActiveClass.split(' '))
						: t.isElement && O.setAttribute('part', 'bullet'),
						f.dynamicBullets &&
							(F >= L && F <= j && O.classList.add(...`${f.bulletActiveClass}-main`.split(' ')),
							F === L && c(O, 'prev'),
							F === j && c(O, 'next'))
				})
			else {
				const O = _[C]
				if (
					(O && O.classList.add(...f.bulletActiveClass.split(' ')),
					t.isElement &&
						_.forEach((F, H) => {
							F.setAttribute('part', H === C ? 'bullet-active' : 'bullet')
						}),
					f.dynamicBullets)
				) {
					const F = _[L],
						H = _[j]
					for (let Y = L; Y <= j; Y += 1) _[Y] && _[Y].classList.add(...`${f.bulletActiveClass}-main`.split(' '))
					c(F, 'prev'), c(H, 'next')
				}
			}
			if (f.dynamicBullets) {
				const O = Math.min(_.length, f.dynamicMainBullets + 4),
					F = (o * O - o) / 2 - I * o,
					H = d ? 'right' : 'left'
				_.forEach((Y) => {
					Y.style[t.isHorizontal() ? H : 'top'] = `${F}px`
				})
			}
		}
		w.forEach((_, L) => {
			if (
				(f.type === 'fraction' &&
					(_.querySelectorAll(Mi(f.currentClass)).forEach((j) => {
						j.textContent = f.formatFractionCurrent(C + 1)
					}),
					_.querySelectorAll(Mi(f.totalClass)).forEach((j) => {
						j.textContent = f.formatFractionTotal(N)
					})),
				f.type === 'progressbar')
			) {
				let j
				f.progressbarOpposite
					? (j = t.isHorizontal() ? 'vertical' : 'horizontal')
					: (j = t.isHorizontal() ? 'horizontal' : 'vertical')
				const I = (C + 1) / N
				let O = 1,
					F = 1
				j === 'horizontal' ? (O = I) : (F = I),
					_.querySelectorAll(Mi(f.progressbarFillClass)).forEach((H) => {
						;(H.style.transform = `translate3d(0,0,0) scaleX(${O}) scaleY(${F})`),
							(H.style.transitionDuration = `${t.params.speed}ms`)
					})
			}
			f.type === 'custom' && f.renderCustom
				? ((_.innerHTML = f.renderCustom(t, C + 1, N)), L === 0 && i('paginationRender', _))
				: (L === 0 && i('paginationRender', _), i('paginationUpdate', _)),
				t.params.watchOverflow && t.enabled && _.classList[t.isLocked ? 'add' : 'remove'](f.lockClass)
		})
	}
	function g() {
		const d = t.params.pagination
		if (u()) return
		const f =
			t.virtual && t.params.virtual.enabled
				? t.virtual.slides.length
				: t.grid && t.params.grid.rows > 1
				? t.slides.length / Math.ceil(t.params.grid.rows)
				: t.slides.length
		let w = t.pagination.el
		w = s(w)
		let C = ''
		if (d.type === 'bullets') {
			let S = t.params.loop ? Math.ceil(f / t.params.slidesPerGroup) : t.snapGrid.length
			t.params.freeMode && t.params.freeMode.enabled && S > f && (S = f)
			for (let b = 0; b < S; b += 1)
				d.renderBullet
					? (C += d.renderBullet.call(t, b, d.bulletClass))
					: (C += `<${d.bulletElement} ${t.isElement ? 'part="bullet"' : ''} class="${d.bulletClass}"></${
							d.bulletElement
					  }>`)
		}
		d.type === 'fraction' &&
			(d.renderFraction
				? (C = d.renderFraction.call(t, d.currentClass, d.totalClass))
				: (C = `<span class="${d.currentClass}"></span> / <span class="${d.totalClass}"></span>`)),
			d.type === 'progressbar' &&
				(d.renderProgressbar
					? (C = d.renderProgressbar.call(t, d.progressbarFillClass))
					: (C = `<span class="${d.progressbarFillClass}"></span>`)),
			(t.pagination.bullets = []),
			w.forEach((S) => {
				d.type !== 'custom' && (S.innerHTML = C || ''),
					d.type === 'bullets' && t.pagination.bullets.push(...S.querySelectorAll(Mi(d.bulletClass)))
			}),
			d.type !== 'custom' && i('paginationRender', w[0])
	}
	function y() {
		t.params.pagination = ym(t, t.originalParams.pagination, t.params.pagination, { el: 'swiper-pagination' })
		const d = t.params.pagination
		if (!d.el) return
		let f
		typeof d.el == 'string' && t.isElement && (f = t.el.querySelector(d.el)),
			!f && typeof d.el == 'string' && (f = [...document.querySelectorAll(d.el)]),
			f || (f = d.el),
			!(!f || f.length === 0) &&
				(t.params.uniqueNavElements &&
					typeof d.el == 'string' &&
					Array.isArray(f) &&
					f.length > 1 &&
					((f = [...t.el.querySelectorAll(d.el)]),
					f.length > 1 && (f = f.filter((w) => Yo(w, '.swiper')[0] === t.el)[0])),
				Array.isArray(f) && f.length === 1 && (f = f[0]),
				Object.assign(t.pagination, { el: f }),
				(f = s(f)),
				f.forEach((w) => {
					d.type === 'bullets' && d.clickable && w.classList.add(...(d.clickableClass || '').split(' ')),
						w.classList.add(d.modifierClass + d.type),
						w.classList.add(t.isHorizontal() ? d.horizontalClass : d.verticalClass),
						d.type === 'bullets' &&
							d.dynamicBullets &&
							(w.classList.add(`${d.modifierClass}${d.type}-dynamic`),
							(a = 0),
							d.dynamicMainBullets < 1 && (d.dynamicMainBullets = 1)),
						d.type === 'progressbar' && d.progressbarOpposite && w.classList.add(d.progressbarOppositeClass),
						d.clickable && w.addEventListener('click', p),
						t.enabled || w.classList.add(d.lockClass)
				}))
	}
	function v() {
		const d = t.params.pagination
		if (u()) return
		let f = t.pagination.el
		f &&
			((f = s(f)),
			f.forEach((w) => {
				w.classList.remove(d.hiddenClass),
					w.classList.remove(d.modifierClass + d.type),
					w.classList.remove(t.isHorizontal() ? d.horizontalClass : d.verticalClass),
					d.clickable && (w.classList.remove(...(d.clickableClass || '').split(' ')), w.removeEventListener('click', p))
			})),
			t.pagination.bullets && t.pagination.bullets.forEach((w) => w.classList.remove(...d.bulletActiveClass.split(' ')))
	}
	r('changeDirection', () => {
		if (!t.pagination || !t.pagination.el) return
		const d = t.params.pagination
		let { el: f } = t.pagination
		;(f = s(f)),
			f.forEach((w) => {
				w.classList.remove(d.horizontalClass, d.verticalClass),
					w.classList.add(t.isHorizontal() ? d.horizontalClass : d.verticalClass)
			})
	}),
		r('init', () => {
			t.params.pagination.enabled === !1 ? h() : (y(), g(), m())
		}),
		r('activeIndexChange', () => {
			typeof t.snapIndex > 'u' && m()
		}),
		r('snapIndexChange', () => {
			m()
		}),
		r('snapGridLengthChange', () => {
			g(), m()
		}),
		r('destroy', () => {
			v()
		}),
		r('enable disable', () => {
			let { el: d } = t.pagination
			d && ((d = s(d)), d.forEach((f) => f.classList[t.enabled ? 'remove' : 'add'](t.params.pagination.lockClass)))
		}),
		r('lock unlock', () => {
			m()
		}),
		r('click', (d, f) => {
			const w = f.target,
				C = s(t.pagination.el)
			if (
				t.params.pagination.el &&
				t.params.pagination.hideOnClick &&
				C &&
				C.length > 0 &&
				!w.classList.contains(t.params.pagination.bulletClass)
			) {
				if (
					t.navigation &&
					((t.navigation.nextEl && w === t.navigation.nextEl) || (t.navigation.prevEl && w === t.navigation.prevEl))
				)
					return
				const S = C[0].classList.contains(t.params.pagination.hiddenClass)
				i(S === !0 ? 'paginationShow' : 'paginationHide'),
					C.forEach((b) => b.classList.toggle(t.params.pagination.hiddenClass))
			}
		})
	const E = () => {
			t.el.classList.remove(t.params.pagination.paginationDisabledClass)
			let { el: d } = t.pagination
			d && ((d = s(d)), d.forEach((f) => f.classList.remove(t.params.pagination.paginationDisabledClass))),
				y(),
				g(),
				m()
		},
		h = () => {
			t.el.classList.add(t.params.pagination.paginationDisabledClass)
			let { el: d } = t.pagination
			d && ((d = s(d)), d.forEach((f) => f.classList.add(t.params.pagination.paginationDisabledClass))), v()
		}
	Object.assign(t.pagination, { enable: E, disable: h, render: g, update: m, init: y, destroy: v })
}
let Ks
function Wx() {
	const e = qe(),
		t = lr()
	return {
		smoothScroll: t.documentElement && t.documentElement.style && 'scrollBehavior' in t.documentElement.style,
		touch: !!('ontouchstart' in e || (e.DocumentTouch && t instanceof e.DocumentTouch)),
	}
}
function wm() {
	return Ks || (Ks = Wx()), Ks
}
let Xs
function Gx(e) {
	let { userAgent: t } = e === void 0 ? {} : e
	const n = wm(),
		r = qe(),
		i = r.navigator.platform,
		l = t || r.navigator.userAgent,
		o = { ios: !1, android: !1 },
		a = r.screen.width,
		s = r.screen.height,
		u = l.match(/(Android);?[\s\/]+([\d.]+)?/)
	let c = l.match(/(iPad).*OS\s([\d_]+)/)
	const p = l.match(/(iPod)(.*OS\s([\d_]+))?/),
		m = !c && l.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
		g = i === 'Win32'
	let y = i === 'MacIntel'
	const v = [
		'1024x1366',
		'1366x1024',
		'834x1194',
		'1194x834',
		'834x1112',
		'1112x834',
		'768x1024',
		'1024x768',
		'820x1180',
		'1180x820',
		'810x1080',
		'1080x810',
	]
	return (
		!c &&
			y &&
			n.touch &&
			v.indexOf(`${a}x${s}`) >= 0 &&
			((c = l.match(/(Version)\/([\d.]+)/)), c || (c = [0, 1, '13_0_0']), (y = !1)),
		u && !g && ((o.os = 'android'), (o.android = !0)),
		(c || m || p) && ((o.os = 'ios'), (o.ios = !0)),
		o
	)
}
function Yx(e) {
	return e === void 0 && (e = {}), Xs || (Xs = Gx(e)), Xs
}
let Qs
function Kx() {
	const e = qe()
	let t = !1
	function n() {
		const r = e.navigator.userAgent.toLowerCase()
		return r.indexOf('safari') >= 0 && r.indexOf('chrome') < 0 && r.indexOf('android') < 0
	}
	if (n()) {
		const r = String(e.navigator.userAgent)
		if (r.includes('Version/')) {
			const [i, l] = r
				.split('Version/')[1]
				.split(' ')[0]
				.split('.')
				.map((o) => Number(o))
			t = i < 16 || (i === 16 && l < 2)
		}
	}
	return {
		isSafari: t || n(),
		needPerspectiveFix: t,
		isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),
	}
}
function Xx() {
	return Qs || (Qs = Kx()), Qs
}
function Qx(e) {
	let { swiper: t, on: n, emit: r } = e
	const i = qe()
	let l = null,
		o = null
	const a = () => {
			!t || t.destroyed || !t.initialized || (r('beforeResize'), r('resize'))
		},
		s = () => {
			!t ||
				t.destroyed ||
				!t.initialized ||
				((l = new ResizeObserver((p) => {
					o = i.requestAnimationFrame(() => {
						const { width: m, height: g } = t
						let y = m,
							v = g
						p.forEach((E) => {
							let { contentBoxSize: h, contentRect: d, target: f } = E
							;(f && f !== t.el) ||
								((y = d ? d.width : (h[0] || h).inlineSize), (v = d ? d.height : (h[0] || h).blockSize))
						}),
							(y !== m || v !== g) && a()
					})
				})),
				l.observe(t.el))
		},
		u = () => {
			o && i.cancelAnimationFrame(o), l && l.unobserve && t.el && (l.unobserve(t.el), (l = null))
		},
		c = () => {
			!t || t.destroyed || !t.initialized || r('orientationchange')
		}
	n('init', () => {
		if (t.params.resizeObserver && typeof i.ResizeObserver < 'u') {
			s()
			return
		}
		i.addEventListener('resize', a), i.addEventListener('orientationchange', c)
	}),
		n('destroy', () => {
			u(), i.removeEventListener('resize', a), i.removeEventListener('orientationchange', c)
		})
}
function qx(e) {
	let { swiper: t, extendParams: n, on: r, emit: i } = e
	const l = [],
		o = qe(),
		a = function (c, p) {
			p === void 0 && (p = {})
			const m = o.MutationObserver || o.WebkitMutationObserver,
				g = new m((y) => {
					if (t.__preventObserver__) return
					if (y.length === 1) {
						i('observerUpdate', y[0])
						return
					}
					const v = function () {
						i('observerUpdate', y[0])
					}
					o.requestAnimationFrame ? o.requestAnimationFrame(v) : o.setTimeout(v, 0)
				})
			g.observe(c, {
				attributes: typeof p.attributes > 'u' ? !0 : p.attributes,
				childList: typeof p.childList > 'u' ? !0 : p.childList,
				characterData: typeof p.characterData > 'u' ? !0 : p.characterData,
			}),
				l.push(g)
		},
		s = () => {
			if (t.params.observer) {
				if (t.params.observeParents) {
					const c = Yo(t.hostEl)
					for (let p = 0; p < c.length; p += 1) a(c[p])
				}
				a(t.hostEl, { childList: t.params.observeSlideChildren }), a(t.wrapperEl, { attributes: !1 })
			}
		},
		u = () => {
			l.forEach((c) => {
				c.disconnect()
			}),
				l.splice(0, l.length)
		}
	n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }), r('init', s), r('destroy', u)
}
var Jx = {
	on(e, t, n) {
		const r = this
		if (!r.eventsListeners || r.destroyed || typeof t != 'function') return r
		const i = n ? 'unshift' : 'push'
		return (
			e.split(' ').forEach((l) => {
				r.eventsListeners[l] || (r.eventsListeners[l] = []), r.eventsListeners[l][i](t)
			}),
			r
		)
	},
	once(e, t, n) {
		const r = this
		if (!r.eventsListeners || r.destroyed || typeof t != 'function') return r
		function i() {
			r.off(e, i), i.__emitterProxy && delete i.__emitterProxy
			for (var l = arguments.length, o = new Array(l), a = 0; a < l; a++) o[a] = arguments[a]
			t.apply(r, o)
		}
		return (i.__emitterProxy = t), r.on(e, i, n)
	},
	onAny(e, t) {
		const n = this
		if (!n.eventsListeners || n.destroyed || typeof e != 'function') return n
		const r = t ? 'unshift' : 'push'
		return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n
	},
	offAny(e) {
		const t = this
		if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t
		const n = t.eventsAnyListeners.indexOf(e)
		return n >= 0 && t.eventsAnyListeners.splice(n, 1), t
	},
	off(e, t) {
		const n = this
		return (
			!n.eventsListeners ||
				n.destroyed ||
				!n.eventsListeners ||
				e.split(' ').forEach((r) => {
					typeof t > 'u'
						? (n.eventsListeners[r] = [])
						: n.eventsListeners[r] &&
						  n.eventsListeners[r].forEach((i, l) => {
								;(i === t || (i.__emitterProxy && i.__emitterProxy === t)) && n.eventsListeners[r].splice(l, 1)
						  })
				}),
			n
		)
	},
	emit() {
		const e = this
		if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e
		let t, n, r
		for (var i = arguments.length, l = new Array(i), o = 0; o < i; o++) l[o] = arguments[o]
		return (
			typeof l[0] == 'string' || Array.isArray(l[0])
				? ((t = l[0]), (n = l.slice(1, l.length)), (r = e))
				: ((t = l[0].events), (n = l[0].data), (r = l[0].context || e)),
			n.unshift(r),
			(Array.isArray(t) ? t : t.split(' ')).forEach((s) => {
				e.eventsAnyListeners &&
					e.eventsAnyListeners.length &&
					e.eventsAnyListeners.forEach((u) => {
						u.apply(r, [s, ...n])
					}),
					e.eventsListeners &&
						e.eventsListeners[s] &&
						e.eventsListeners[s].forEach((u) => {
							u.apply(r, n)
						})
			}),
			e
		)
	},
}
function Zx() {
	const e = this
	let t, n
	const r = e.el
	typeof e.params.width < 'u' && e.params.width !== null ? (t = e.params.width) : (t = r.clientWidth),
		typeof e.params.height < 'u' && e.params.height !== null ? (n = e.params.height) : (n = r.clientHeight),
		!((t === 0 && e.isHorizontal()) || (n === 0 && e.isVertical())) &&
			((t = t - parseInt(Vn(r, 'padding-left') || 0, 10) - parseInt(Vn(r, 'padding-right') || 0, 10)),
			(n = n - parseInt(Vn(r, 'padding-top') || 0, 10) - parseInt(Vn(r, 'padding-bottom') || 0, 10)),
			Number.isNaN(t) && (t = 0),
			Number.isNaN(n) && (n = 0),
			Object.assign(e, { width: t, height: n, size: e.isHorizontal() ? t : n }))
}
function eS() {
	const e = this
	function t(L, j) {
		return parseFloat(L.getPropertyValue(e.getDirectionLabel(j)) || 0)
	}
	const n = e.params,
		{ wrapperEl: r, slidesEl: i, size: l, rtlTranslate: o, wrongRTL: a } = e,
		s = e.virtual && n.virtual.enabled,
		u = s ? e.virtual.slides.length : e.slides.length,
		c = en(i, `.${e.params.slideClass}, swiper-slide`),
		p = s ? e.virtual.slides.length : c.length
	let m = []
	const g = [],
		y = []
	let v = n.slidesOffsetBefore
	typeof v == 'function' && (v = n.slidesOffsetBefore.call(e))
	let E = n.slidesOffsetAfter
	typeof E == 'function' && (E = n.slidesOffsetAfter.call(e))
	const h = e.snapGrid.length,
		d = e.slidesGrid.length
	let f = n.spaceBetween,
		w = -v,
		C = 0,
		S = 0
	if (typeof l > 'u') return
	typeof f == 'string' && f.indexOf('%') >= 0
		? (f = (parseFloat(f.replace('%', '')) / 100) * l)
		: typeof f == 'string' && (f = parseFloat(f)),
		(e.virtualSize = -f),
		c.forEach((L) => {
			o ? (L.style.marginLeft = '') : (L.style.marginRight = ''), (L.style.marginBottom = ''), (L.style.marginTop = '')
		}),
		n.centeredSlides &&
			n.cssMode &&
			(Ql(r, '--swiper-centered-offset-before', ''), Ql(r, '--swiper-centered-offset-after', ''))
	const b = n.grid && n.grid.rows > 1 && e.grid
	b ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides()
	let N
	const _ =
		n.slidesPerView === 'auto' &&
		n.breakpoints &&
		Object.keys(n.breakpoints).filter((L) => typeof n.breakpoints[L].slidesPerView < 'u').length > 0
	for (let L = 0; L < p; L += 1) {
		N = 0
		let j
		if ((c[L] && (j = c[L]), b && e.grid.updateSlide(L, j, c), !(c[L] && Vn(j, 'display') === 'none'))) {
			if (n.slidesPerView === 'auto') {
				_ && (c[L].style[e.getDirectionLabel('width')] = '')
				const I = getComputedStyle(j),
					O = j.style.transform,
					F = j.style.webkitTransform
				if ((O && (j.style.transform = 'none'), F && (j.style.webkitTransform = 'none'), n.roundLengths))
					N = e.isHorizontal() ? nu(j, 'width', !0) : nu(j, 'height', !0)
				else {
					const H = t(I, 'width'),
						Y = t(I, 'padding-left'),
						X = t(I, 'padding-right'),
						D = t(I, 'margin-left'),
						z = t(I, 'margin-right'),
						V = I.getPropertyValue('box-sizing')
					if (V && V === 'border-box') N = H + D + z
					else {
						const { clientWidth: ee, offsetWidth: re } = j
						N = H + Y + X + D + z + (re - ee)
					}
				}
				O && (j.style.transform = O), F && (j.style.webkitTransform = F), n.roundLengths && (N = Math.floor(N))
			} else
				(N = (l - (n.slidesPerView - 1) * f) / n.slidesPerView),
					n.roundLengths && (N = Math.floor(N)),
					c[L] && (c[L].style[e.getDirectionLabel('width')] = `${N}px`)
			c[L] && (c[L].swiperSlideSize = N),
				y.push(N),
				n.centeredSlides
					? ((w = w + N / 2 + C / 2 + f),
					  C === 0 && L !== 0 && (w = w - l / 2 - f),
					  L === 0 && (w = w - l / 2 - f),
					  Math.abs(w) < 1 / 1e3 && (w = 0),
					  n.roundLengths && (w = Math.floor(w)),
					  S % n.slidesPerGroup === 0 && m.push(w),
					  g.push(w))
					: (n.roundLengths && (w = Math.floor(w)),
					  (S - Math.min(e.params.slidesPerGroupSkip, S)) % e.params.slidesPerGroup === 0 && m.push(w),
					  g.push(w),
					  (w = w + N + f)),
				(e.virtualSize += N + f),
				(C = N),
				(S += 1)
		}
	}
	if (
		((e.virtualSize = Math.max(e.virtualSize, l) + E),
		o && a && (n.effect === 'slide' || n.effect === 'coverflow') && (r.style.width = `${e.virtualSize + f}px`),
		n.setWrapperSize && (r.style[e.getDirectionLabel('width')] = `${e.virtualSize + f}px`),
		b && e.grid.updateWrapperSize(N, m),
		!n.centeredSlides)
	) {
		const L = []
		for (let j = 0; j < m.length; j += 1) {
			let I = m[j]
			n.roundLengths && (I = Math.floor(I)), m[j] <= e.virtualSize - l && L.push(I)
		}
		;(m = L), Math.floor(e.virtualSize - l) - Math.floor(m[m.length - 1]) > 1 && m.push(e.virtualSize - l)
	}
	if (s && n.loop) {
		const L = y[0] + f
		if (n.slidesPerGroup > 1) {
			const j = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / n.slidesPerGroup),
				I = L * n.slidesPerGroup
			for (let O = 0; O < j; O += 1) m.push(m[m.length - 1] + I)
		}
		for (let j = 0; j < e.virtual.slidesBefore + e.virtual.slidesAfter; j += 1)
			n.slidesPerGroup === 1 && m.push(m[m.length - 1] + L), g.push(g[g.length - 1] + L), (e.virtualSize += L)
	}
	if ((m.length === 0 && (m = [0]), f !== 0)) {
		const L = e.isHorizontal() && o ? 'marginLeft' : e.getDirectionLabel('marginRight')
		c.filter((j, I) => (!n.cssMode || n.loop ? !0 : I !== c.length - 1)).forEach((j) => {
			j.style[L] = `${f}px`
		})
	}
	if (n.centeredSlides && n.centeredSlidesBounds) {
		let L = 0
		y.forEach((I) => {
			L += I + (f || 0)
		}),
			(L -= f)
		const j = L - l
		m = m.map((I) => (I <= 0 ? -v : I > j ? j + E : I))
	}
	if (n.centerInsufficientSlides) {
		let L = 0
		if (
			(y.forEach((j) => {
				L += j + (f || 0)
			}),
			(L -= f),
			L < l)
		) {
			const j = (l - L) / 2
			m.forEach((I, O) => {
				m[O] = I - j
			}),
				g.forEach((I, O) => {
					g[O] = I + j
				})
		}
	}
	if (
		(Object.assign(e, { slides: c, snapGrid: m, slidesGrid: g, slidesSizesGrid: y }),
		n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
	) {
		Ql(r, '--swiper-centered-offset-before', `${-m[0]}px`),
			Ql(r, '--swiper-centered-offset-after', `${e.size / 2 - y[y.length - 1] / 2}px`)
		const L = -e.snapGrid[0],
			j = -e.slidesGrid[0]
		;(e.snapGrid = e.snapGrid.map((I) => I + L)), (e.slidesGrid = e.slidesGrid.map((I) => I + j))
	}
	if (
		(p !== u && e.emit('slidesLengthChange'),
		m.length !== h && (e.params.watchOverflow && e.checkOverflow(), e.emit('snapGridLengthChange')),
		g.length !== d && e.emit('slidesGridLengthChange'),
		n.watchSlidesProgress && e.updateSlidesOffset(),
		e.emit('slidesUpdated'),
		!s && !n.cssMode && (n.effect === 'slide' || n.effect === 'fade'))
	) {
		const L = `${n.containerModifierClass}backface-hidden`,
			j = e.el.classList.contains(L)
		p <= n.maxBackfaceHiddenSlides ? j || e.el.classList.add(L) : j && e.el.classList.remove(L)
	}
}
function tS(e) {
	const t = this,
		n = [],
		r = t.virtual && t.params.virtual.enabled
	let i = 0,
		l
	typeof e == 'number' ? t.setTransition(e) : e === !0 && t.setTransition(t.params.speed)
	const o = (a) => (r ? t.slides[t.getSlideIndexByData(a)] : t.slides[a])
	if (t.params.slidesPerView !== 'auto' && t.params.slidesPerView > 1)
		if (t.params.centeredSlides)
			(t.visibleSlides || []).forEach((a) => {
				n.push(a)
			})
		else
			for (l = 0; l < Math.ceil(t.params.slidesPerView); l += 1) {
				const a = t.activeIndex + l
				if (a > t.slides.length && !r) break
				n.push(o(a))
			}
	else n.push(o(t.activeIndex))
	for (l = 0; l < n.length; l += 1)
		if (typeof n[l] < 'u') {
			const a = n[l].offsetHeight
			i = a > i ? a : i
		}
	;(i || i === 0) && (t.wrapperEl.style.height = `${i}px`)
}
function nS() {
	const e = this,
		t = e.slides,
		n = e.isElement ? (e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop) : 0
	for (let r = 0; r < t.length; r += 1)
		t[r].swiperSlideOffset = (e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) - n - e.cssOverflowAdjustment()
}
function rS(e) {
	e === void 0 && (e = (this && this.translate) || 0)
	const t = this,
		n = t.params,
		{ slides: r, rtlTranslate: i, snapGrid: l } = t
	if (r.length === 0) return
	typeof r[0].swiperSlideOffset > 'u' && t.updateSlidesOffset()
	let o = -e
	i && (o = e),
		r.forEach((s) => {
			s.classList.remove(n.slideVisibleClass, n.slideFullyVisibleClass)
		}),
		(t.visibleSlidesIndexes = []),
		(t.visibleSlides = [])
	let a = n.spaceBetween
	typeof a == 'string' && a.indexOf('%') >= 0
		? (a = (parseFloat(a.replace('%', '')) / 100) * t.size)
		: typeof a == 'string' && (a = parseFloat(a))
	for (let s = 0; s < r.length; s += 1) {
		const u = r[s]
		let c = u.swiperSlideOffset
		n.cssMode && n.centeredSlides && (c -= r[0].swiperSlideOffset)
		const p = (o + (n.centeredSlides ? t.minTranslate() : 0) - c) / (u.swiperSlideSize + a),
			m = (o - l[0] + (n.centeredSlides ? t.minTranslate() : 0) - c) / (u.swiperSlideSize + a),
			g = -(o - c),
			y = g + t.slidesSizesGrid[s],
			v = g >= 0 && g <= t.size - t.slidesSizesGrid[s]
		;((g >= 0 && g < t.size - 1) || (y > 1 && y <= t.size) || (g <= 0 && y >= t.size)) &&
			(t.visibleSlides.push(u), t.visibleSlidesIndexes.push(s), r[s].classList.add(n.slideVisibleClass)),
			v && r[s].classList.add(n.slideFullyVisibleClass),
			(u.progress = i ? -p : p),
			(u.originalProgress = i ? -m : m)
	}
}
function iS(e) {
	const t = this
	if (typeof e > 'u') {
		const c = t.rtlTranslate ? -1 : 1
		e = (t && t.translate && t.translate * c) || 0
	}
	const n = t.params,
		r = t.maxTranslate() - t.minTranslate()
	let { progress: i, isBeginning: l, isEnd: o, progressLoop: a } = t
	const s = l,
		u = o
	if (r === 0) (i = 0), (l = !0), (o = !0)
	else {
		i = (e - t.minTranslate()) / r
		const c = Math.abs(e - t.minTranslate()) < 1,
			p = Math.abs(e - t.maxTranslate()) < 1
		;(l = c || i <= 0), (o = p || i >= 1), c && (i = 0), p && (i = 1)
	}
	if (n.loop) {
		const c = t.getSlideIndexByData(0),
			p = t.getSlideIndexByData(t.slides.length - 1),
			m = t.slidesGrid[c],
			g = t.slidesGrid[p],
			y = t.slidesGrid[t.slidesGrid.length - 1],
			v = Math.abs(e)
		v >= m ? (a = (v - m) / y) : (a = (v + y - g) / y), a > 1 && (a -= 1)
	}
	Object.assign(t, { progress: i, progressLoop: a, isBeginning: l, isEnd: o }),
		(n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) && t.updateSlidesProgress(e),
		l && !s && t.emit('reachBeginning toEdge'),
		o && !u && t.emit('reachEnd toEdge'),
		((s && !l) || (u && !o)) && t.emit('fromEdge'),
		t.emit('progress', i)
}
function lS() {
	const e = this,
		{ slides: t, params: n, slidesEl: r, activeIndex: i } = e,
		l = e.virtual && n.virtual.enabled,
		o = e.grid && n.grid && n.grid.rows > 1,
		a = (p) => en(r, `.${n.slideClass}${p}, swiper-slide${p}`)[0]
	t.forEach((p) => {
		p.classList.remove(n.slideActiveClass, n.slideNextClass, n.slidePrevClass)
	})
	let s, u, c
	if (l)
		if (n.loop) {
			let p = i - e.virtual.slidesBefore
			p < 0 && (p = e.virtual.slides.length + p),
				p >= e.virtual.slides.length && (p -= e.virtual.slides.length),
				(s = a(`[data-swiper-slide-index="${p}"]`))
		} else s = a(`[data-swiper-slide-index="${i}"]`)
	else
		o
			? ((s = t.filter((p) => p.column === i)[0]),
			  (c = t.filter((p) => p.column === i + 1)[0]),
			  (u = t.filter((p) => p.column === i - 1)[0]))
			: (s = t[i])
	s &&
		(s.classList.add(n.slideActiveClass),
		o
			? (c && c.classList.add(n.slideNextClass), u && u.classList.add(n.slidePrevClass))
			: ((c = $x(s, `.${n.slideClass}, swiper-slide`)[0]),
			  n.loop && !c && (c = t[0]),
			  c && c.classList.add(n.slideNextClass),
			  (u = Fx(s, `.${n.slideClass}, swiper-slide`)[0]),
			  n.loop && !u === 0 && (u = t[t.length - 1]),
			  u && u.classList.add(n.slidePrevClass))),
		e.emitSlidesClasses()
}
const ho = (e, t) => {
		if (!e || e.destroyed || !e.params) return
		const n = () => (e.isElement ? 'swiper-slide' : `.${e.params.slideClass}`),
			r = t.closest(n())
		if (r) {
			let i = r.querySelector(`.${e.params.lazyPreloaderClass}`)
			!i &&
				e.isElement &&
				(r.shadowRoot
					? (i = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`))
					: requestAnimationFrame(() => {
							r.shadowRoot && ((i = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`)), i && i.remove())
					  })),
				i && i.remove()
		}
	},
	qs = (e, t) => {
		if (!e.slides[t]) return
		const n = e.slides[t].querySelector('[loading="lazy"]')
		n && n.removeAttribute('loading')
	},
	ru = (e) => {
		if (!e || e.destroyed || !e.params) return
		let t = e.params.lazyPreloadPrevNext
		const n = e.slides.length
		if (!n || !t || t < 0) return
		t = Math.min(t, n)
		const r = e.params.slidesPerView === 'auto' ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
			i = e.activeIndex
		if (e.params.grid && e.params.grid.rows > 1) {
			const o = i,
				a = [o - t]
			a.push(...Array.from({ length: t }).map((s, u) => o + r + u)),
				e.slides.forEach((s, u) => {
					a.includes(s.column) && qs(e, u)
				})
			return
		}
		const l = i + r - 1
		if (e.params.rewind || e.params.loop)
			for (let o = i - t; o <= l + t; o += 1) {
				const a = ((o % n) + n) % n
				;(a < i || a > l) && qs(e, a)
			}
		else for (let o = Math.max(i - t, 0); o <= Math.min(l + t, n - 1); o += 1) o !== i && (o > l || o < i) && qs(e, o)
	}
function oS(e) {
	const { slidesGrid: t, params: n } = e,
		r = e.rtlTranslate ? e.translate : -e.translate
	let i
	for (let l = 0; l < t.length; l += 1)
		typeof t[l + 1] < 'u'
			? r >= t[l] && r < t[l + 1] - (t[l + 1] - t[l]) / 2
				? (i = l)
				: r >= t[l] && r < t[l + 1] && (i = l + 1)
			: r >= t[l] && (i = l)
	return n.normalizeSlideIndex && (i < 0 || typeof i > 'u') && (i = 0), i
}
function sS(e) {
	const t = this,
		n = t.rtlTranslate ? t.translate : -t.translate,
		{ snapGrid: r, params: i, activeIndex: l, realIndex: o, snapIndex: a } = t
	let s = e,
		u
	const c = (g) => {
		let y = g - t.virtual.slidesBefore
		return y < 0 && (y = t.virtual.slides.length + y), y >= t.virtual.slides.length && (y -= t.virtual.slides.length), y
	}
	if ((typeof s > 'u' && (s = oS(t)), r.indexOf(n) >= 0)) u = r.indexOf(n)
	else {
		const g = Math.min(i.slidesPerGroupSkip, s)
		u = g + Math.floor((s - g) / i.slidesPerGroup)
	}
	if ((u >= r.length && (u = r.length - 1), s === l && !t.params.loop)) {
		u !== a && ((t.snapIndex = u), t.emit('snapIndexChange'))
		return
	}
	if (s === l && t.params.loop && t.virtual && t.params.virtual.enabled) {
		t.realIndex = c(s)
		return
	}
	const p = t.grid && i.grid && i.grid.rows > 1
	let m
	if (t.virtual && i.virtual.enabled && i.loop) m = c(s)
	else if (p) {
		const g = t.slides.filter((v) => v.column === s)[0]
		let y = parseInt(g.getAttribute('data-swiper-slide-index'), 10)
		Number.isNaN(y) && (y = Math.max(t.slides.indexOf(g), 0)), (m = Math.floor(y / i.grid.rows))
	} else if (t.slides[s]) {
		const g = t.slides[s].getAttribute('data-swiper-slide-index')
		g ? (m = parseInt(g, 10)) : (m = s)
	} else m = s
	Object.assign(t, {
		previousSnapIndex: a,
		snapIndex: u,
		previousRealIndex: o,
		realIndex: m,
		previousIndex: l,
		activeIndex: s,
	}),
		t.initialized && ru(t),
		t.emit('activeIndexChange'),
		t.emit('snapIndexChange'),
		(t.initialized || t.params.runCallbacksOnInit) && (o !== m && t.emit('realIndexChange'), t.emit('slideChange'))
}
function aS(e, t) {
	const n = this,
		r = n.params
	let i = e.closest(`.${r.slideClass}, swiper-slide`)
	!i &&
		n.isElement &&
		t &&
		t.length > 1 &&
		t.includes(e) &&
		[...t.slice(t.indexOf(e) + 1, t.length)].forEach((a) => {
			!i && a.matches && a.matches(`.${r.slideClass}, swiper-slide`) && (i = a)
		})
	let l = !1,
		o
	if (i) {
		for (let a = 0; a < n.slides.length; a += 1)
			if (n.slides[a] === i) {
				;(l = !0), (o = a)
				break
			}
	}
	if (i && l)
		(n.clickedSlide = i),
			n.virtual && n.params.virtual.enabled
				? (n.clickedIndex = parseInt(i.getAttribute('data-swiper-slide-index'), 10))
				: (n.clickedIndex = o)
	else {
		;(n.clickedSlide = void 0), (n.clickedIndex = void 0)
		return
	}
	r.slideToClickedSlide && n.clickedIndex !== void 0 && n.clickedIndex !== n.activeIndex && n.slideToClickedSlide()
}
var uS = {
	updateSize: Zx,
	updateSlides: eS,
	updateAutoHeight: tS,
	updateSlidesOffset: nS,
	updateSlidesProgress: rS,
	updateProgress: iS,
	updateSlidesClasses: lS,
	updateActiveIndex: sS,
	updateClickedSlide: aS,
}
function cS(e) {
	e === void 0 && (e = this.isHorizontal() ? 'x' : 'y')
	const t = this,
		{ params: n, rtlTranslate: r, translate: i, wrapperEl: l } = t
	if (n.virtualTranslate) return r ? -i : i
	if (n.cssMode) return i
	let o = Ax(l, e)
	return (o += t.cssOverflowAdjustment()), r && (o = -o), o || 0
}
function dS(e, t) {
	const n = this,
		{ rtlTranslate: r, params: i, wrapperEl: l, progress: o } = n
	let a = 0,
		s = 0
	const u = 0
	n.isHorizontal() ? (a = r ? -e : e) : (s = e),
		i.roundLengths && ((a = Math.floor(a)), (s = Math.floor(s))),
		(n.previousTranslate = n.translate),
		(n.translate = n.isHorizontal() ? a : s),
		i.cssMode
			? (l[n.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = n.isHorizontal() ? -a : -s)
			: i.virtualTranslate ||
			  (n.isHorizontal() ? (a -= n.cssOverflowAdjustment()) : (s -= n.cssOverflowAdjustment()),
			  (l.style.transform = `translate3d(${a}px, ${s}px, ${u}px)`))
	let c
	const p = n.maxTranslate() - n.minTranslate()
	p === 0 ? (c = 0) : (c = (e - n.minTranslate()) / p),
		c !== o && n.updateProgress(e),
		n.emit('setTranslate', n.translate, t)
}
function fS() {
	return -this.snapGrid[0]
}
function pS() {
	return -this.snapGrid[this.snapGrid.length - 1]
}
function hS(e, t, n, r, i) {
	e === void 0 && (e = 0), t === void 0 && (t = this.params.speed), n === void 0 && (n = !0), r === void 0 && (r = !0)
	const l = this,
		{ params: o, wrapperEl: a } = l
	if (l.animating && o.preventInteractionOnTransition) return !1
	const s = l.minTranslate(),
		u = l.maxTranslate()
	let c
	if ((r && e > s ? (c = s) : r && e < u ? (c = u) : (c = e), l.updateProgress(c), o.cssMode)) {
		const p = l.isHorizontal()
		if (t === 0) a[p ? 'scrollLeft' : 'scrollTop'] = -c
		else {
			if (!l.support.smoothScroll) return vm({ swiper: l, targetPosition: -c, side: p ? 'left' : 'top' }), !0
			a.scrollTo({ [p ? 'left' : 'top']: -c, behavior: 'smooth' })
		}
		return !0
	}
	return (
		t === 0
			? (l.setTransition(0), l.setTranslate(c), n && (l.emit('beforeTransitionStart', t, i), l.emit('transitionEnd')))
			: (l.setTransition(t),
			  l.setTranslate(c),
			  n && (l.emit('beforeTransitionStart', t, i), l.emit('transitionStart')),
			  l.animating ||
					((l.animating = !0),
					l.onTranslateToWrapperTransitionEnd ||
						(l.onTranslateToWrapperTransitionEnd = function (m) {
							!l ||
								l.destroyed ||
								(m.target === this &&
									(l.wrapperEl.removeEventListener('transitionend', l.onTranslateToWrapperTransitionEnd),
									(l.onTranslateToWrapperTransitionEnd = null),
									delete l.onTranslateToWrapperTransitionEnd,
									n && l.emit('transitionEnd')))
						}),
					l.wrapperEl.addEventListener('transitionend', l.onTranslateToWrapperTransitionEnd))),
		!0
	)
}
var mS = { getTranslate: cS, setTranslate: dS, minTranslate: fS, maxTranslate: pS, translateTo: hS }
function gS(e, t) {
	const n = this
	n.params.cssMode ||
		((n.wrapperEl.style.transitionDuration = `${e}ms`), (n.wrapperEl.style.transitionDelay = e === 0 ? '0ms' : '')),
		n.emit('setTransition', e, t)
}
function xm(e) {
	let { swiper: t, runCallbacks: n, direction: r, step: i } = e
	const { activeIndex: l, previousIndex: o } = t
	let a = r
	if ((a || (l > o ? (a = 'next') : l < o ? (a = 'prev') : (a = 'reset')), t.emit(`transition${i}`), n && l !== o)) {
		if (a === 'reset') {
			t.emit(`slideResetTransition${i}`)
			return
		}
		t.emit(`slideChangeTransition${i}`),
			a === 'next' ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`)
	}
}
function vS(e, t) {
	e === void 0 && (e = !0)
	const n = this,
		{ params: r } = n
	r.cssMode || (r.autoHeight && n.updateAutoHeight(), xm({ swiper: n, runCallbacks: e, direction: t, step: 'Start' }))
}
function yS(e, t) {
	e === void 0 && (e = !0)
	const n = this,
		{ params: r } = n
	;(n.animating = !1), !r.cssMode && (n.setTransition(0), xm({ swiper: n, runCallbacks: e, direction: t, step: 'End' }))
}
var wS = { setTransition: gS, transitionStart: vS, transitionEnd: yS }
function xS(e, t, n, r, i) {
	e === void 0 && (e = 0),
		t === void 0 && (t = this.params.speed),
		n === void 0 && (n = !0),
		typeof e == 'string' && (e = parseInt(e, 10))
	const l = this
	let o = e
	o < 0 && (o = 0)
	const {
		params: a,
		snapGrid: s,
		slidesGrid: u,
		previousIndex: c,
		activeIndex: p,
		rtlTranslate: m,
		wrapperEl: g,
		enabled: y,
	} = l
	if ((l.animating && a.preventInteractionOnTransition) || (!y && !r && !i)) return !1
	const v = Math.min(l.params.slidesPerGroupSkip, o)
	let E = v + Math.floor((o - v) / l.params.slidesPerGroup)
	E >= s.length && (E = s.length - 1)
	const h = -s[E]
	if (a.normalizeSlideIndex)
		for (let f = 0; f < u.length; f += 1) {
			const w = -Math.floor(h * 100),
				C = Math.floor(u[f] * 100),
				S = Math.floor(u[f + 1] * 100)
			typeof u[f + 1] < 'u'
				? w >= C && w < S - (S - C) / 2
					? (o = f)
					: w >= C && w < S && (o = f + 1)
				: w >= C && (o = f)
		}
	if (
		l.initialized &&
		o !== p &&
		((!l.allowSlideNext && (m ? h > l.translate && h > l.minTranslate() : h < l.translate && h < l.minTranslate())) ||
			(!l.allowSlidePrev && h > l.translate && h > l.maxTranslate() && (p || 0) !== o))
	)
		return !1
	o !== (c || 0) && n && l.emit('beforeSlideChangeStart'), l.updateProgress(h)
	let d
	if (
		(o > p ? (d = 'next') : o < p ? (d = 'prev') : (d = 'reset'),
		(m && -h === l.translate) || (!m && h === l.translate))
	)
		return (
			l.updateActiveIndex(o),
			a.autoHeight && l.updateAutoHeight(),
			l.updateSlidesClasses(),
			a.effect !== 'slide' && l.setTranslate(h),
			d !== 'reset' && (l.transitionStart(n, d), l.transitionEnd(n, d)),
			!1
		)
	if (a.cssMode) {
		const f = l.isHorizontal(),
			w = m ? h : -h
		if (t === 0) {
			const C = l.virtual && l.params.virtual.enabled
			C && ((l.wrapperEl.style.scrollSnapType = 'none'), (l._immediateVirtual = !0)),
				C && !l._cssModeVirtualInitialSet && l.params.initialSlide > 0
					? ((l._cssModeVirtualInitialSet = !0),
					  requestAnimationFrame(() => {
							g[f ? 'scrollLeft' : 'scrollTop'] = w
					  }))
					: (g[f ? 'scrollLeft' : 'scrollTop'] = w),
				C &&
					requestAnimationFrame(() => {
						;(l.wrapperEl.style.scrollSnapType = ''), (l._immediateVirtual = !1)
					})
		} else {
			if (!l.support.smoothScroll) return vm({ swiper: l, targetPosition: w, side: f ? 'left' : 'top' }), !0
			g.scrollTo({ [f ? 'left' : 'top']: w, behavior: 'smooth' })
		}
		return !0
	}
	return (
		l.setTransition(t),
		l.setTranslate(h),
		l.updateActiveIndex(o),
		l.updateSlidesClasses(),
		l.emit('beforeTransitionStart', t, r),
		l.transitionStart(n, d),
		t === 0
			? l.transitionEnd(n, d)
			: l.animating ||
			  ((l.animating = !0),
			  l.onSlideToWrapperTransitionEnd ||
					(l.onSlideToWrapperTransitionEnd = function (w) {
						!l ||
							l.destroyed ||
							(w.target === this &&
								(l.wrapperEl.removeEventListener('transitionend', l.onSlideToWrapperTransitionEnd),
								(l.onSlideToWrapperTransitionEnd = null),
								delete l.onSlideToWrapperTransitionEnd,
								l.transitionEnd(n, d)))
					}),
			  l.wrapperEl.addEventListener('transitionend', l.onSlideToWrapperTransitionEnd)),
		!0
	)
}
function SS(e, t, n, r) {
	e === void 0 && (e = 0),
		t === void 0 && (t = this.params.speed),
		n === void 0 && (n = !0),
		typeof e == 'string' && (e = parseInt(e, 10))
	const i = this,
		l = i.grid && i.params.grid && i.params.grid.rows > 1
	let o = e
	if (i.params.loop)
		if (i.virtual && i.params.virtual.enabled) o = o + i.virtual.slidesBefore
		else {
			let a
			if (l) {
				const m = o * i.params.grid.rows
				a = i.slides.filter((g) => g.getAttribute('data-swiper-slide-index') * 1 === m)[0].column
			} else a = i.getSlideIndexByData(o)
			const s = l ? Math.ceil(i.slides.length / i.params.grid.rows) : i.slides.length,
				{ centeredSlides: u } = i.params
			let c = i.params.slidesPerView
			c === 'auto'
				? (c = i.slidesPerViewDynamic())
				: ((c = Math.ceil(parseFloat(i.params.slidesPerView, 10))), u && c % 2 === 0 && (c = c + 1))
			let p = s - a < c
			if ((u && (p = p || a < Math.ceil(c / 2)), p)) {
				const m = u
					? a < i.activeIndex
						? 'prev'
						: 'next'
					: a - i.activeIndex - 1 < i.params.slidesPerView
					? 'next'
					: 'prev'
				i.loopFix({
					direction: m,
					slideTo: !0,
					activeSlideIndex: m === 'next' ? a + 1 : a - s + 1,
					slideRealIndex: m === 'next' ? i.realIndex : void 0,
				})
			}
			if (l) {
				const m = o * i.params.grid.rows
				o = i.slides.filter((g) => g.getAttribute('data-swiper-slide-index') * 1 === m)[0].column
			} else o = i.getSlideIndexByData(o)
		}
	return (
		requestAnimationFrame(() => {
			i.slideTo(o, t, n, r)
		}),
		i
	)
}
function ES(e, t, n) {
	e === void 0 && (e = this.params.speed), t === void 0 && (t = !0)
	const r = this,
		{ enabled: i, params: l, animating: o } = r
	if (!i) return r
	let a = l.slidesPerGroup
	l.slidesPerView === 'auto' &&
		l.slidesPerGroup === 1 &&
		l.slidesPerGroupAuto &&
		(a = Math.max(r.slidesPerViewDynamic('current', !0), 1))
	const s = r.activeIndex < l.slidesPerGroupSkip ? 1 : a,
		u = r.virtual && l.virtual.enabled
	if (l.loop) {
		if (o && !u && l.loopPreventsSliding) return !1
		if (
			(r.loopFix({ direction: 'next' }),
			(r._clientLeft = r.wrapperEl.clientLeft),
			r.activeIndex === r.slides.length - 1 && l.cssMode)
		)
			return (
				requestAnimationFrame(() => {
					r.slideTo(r.activeIndex + s, e, t, n)
				}),
				!0
			)
	}
	return l.rewind && r.isEnd ? r.slideTo(0, e, t, n) : r.slideTo(r.activeIndex + s, e, t, n)
}
function CS(e, t, n) {
	e === void 0 && (e = this.params.speed), t === void 0 && (t = !0)
	const r = this,
		{ params: i, snapGrid: l, slidesGrid: o, rtlTranslate: a, enabled: s, animating: u } = r
	if (!s) return r
	const c = r.virtual && i.virtual.enabled
	if (i.loop) {
		if (u && !c && i.loopPreventsSliding) return !1
		r.loopFix({ direction: 'prev' }), (r._clientLeft = r.wrapperEl.clientLeft)
	}
	const p = a ? r.translate : -r.translate
	function m(h) {
		return h < 0 ? -Math.floor(Math.abs(h)) : Math.floor(h)
	}
	const g = m(p),
		y = l.map((h) => m(h))
	let v = l[y.indexOf(g) - 1]
	if (typeof v > 'u' && i.cssMode) {
		let h
		l.forEach((d, f) => {
			g >= d && (h = f)
		}),
			typeof h < 'u' && (v = l[h > 0 ? h - 1 : h])
	}
	let E = 0
	if (
		(typeof v < 'u' &&
			((E = o.indexOf(v)),
			E < 0 && (E = r.activeIndex - 1),
			i.slidesPerView === 'auto' &&
				i.slidesPerGroup === 1 &&
				i.slidesPerGroupAuto &&
				((E = E - r.slidesPerViewDynamic('previous', !0) + 1), (E = Math.max(E, 0)))),
		i.rewind && r.isBeginning)
	) {
		const h =
			r.params.virtual && r.params.virtual.enabled && r.virtual ? r.virtual.slides.length - 1 : r.slides.length - 1
		return r.slideTo(h, e, t, n)
	} else if (i.loop && r.activeIndex === 0 && i.cssMode)
		return (
			requestAnimationFrame(() => {
				r.slideTo(E, e, t, n)
			}),
			!0
		)
	return r.slideTo(E, e, t, n)
}
function TS(e, t, n) {
	e === void 0 && (e = this.params.speed), t === void 0 && (t = !0)
	const r = this
	return r.slideTo(r.activeIndex, e, t, n)
}
function kS(e, t, n, r) {
	e === void 0 && (e = this.params.speed), t === void 0 && (t = !0), r === void 0 && (r = 0.5)
	const i = this
	let l = i.activeIndex
	const o = Math.min(i.params.slidesPerGroupSkip, l),
		a = o + Math.floor((l - o) / i.params.slidesPerGroup),
		s = i.rtlTranslate ? i.translate : -i.translate
	if (s >= i.snapGrid[a]) {
		const u = i.snapGrid[a],
			c = i.snapGrid[a + 1]
		s - u > (c - u) * r && (l += i.params.slidesPerGroup)
	} else {
		const u = i.snapGrid[a - 1],
			c = i.snapGrid[a]
		s - u <= (c - u) * r && (l -= i.params.slidesPerGroup)
	}
	return (l = Math.max(l, 0)), (l = Math.min(l, i.slidesGrid.length - 1)), i.slideTo(l, e, t, n)
}
function PS() {
	const e = this,
		{ params: t, slidesEl: n } = e,
		r = t.slidesPerView === 'auto' ? e.slidesPerViewDynamic() : t.slidesPerView
	let i = e.clickedIndex,
		l
	const o = e.isElement ? 'swiper-slide' : `.${t.slideClass}`
	if (t.loop) {
		if (e.animating) return
		;(l = parseInt(e.clickedSlide.getAttribute('data-swiper-slide-index'), 10)),
			t.centeredSlides
				? i < e.loopedSlides - r / 2 || i > e.slides.length - e.loopedSlides + r / 2
					? (e.loopFix(),
					  (i = e.getSlideIndex(en(n, `${o}[data-swiper-slide-index="${l}"]`)[0])),
					  yl(() => {
							e.slideTo(i)
					  }))
					: e.slideTo(i)
				: i > e.slides.length - r
				? (e.loopFix(),
				  (i = e.getSlideIndex(en(n, `${o}[data-swiper-slide-index="${l}"]`)[0])),
				  yl(() => {
						e.slideTo(i)
				  }))
				: e.slideTo(i)
	} else e.slideTo(i)
}
var _S = {
	slideTo: xS,
	slideToLoop: SS,
	slideNext: ES,
	slidePrev: CS,
	slideReset: TS,
	slideToClosest: kS,
	slideToClickedSlide: PS,
}
function bS(e) {
	const t = this,
		{ params: n, slidesEl: r } = t
	if (!n.loop || (t.virtual && t.params.virtual.enabled)) return
	const i = () => {
			en(r, `.${n.slideClass}, swiper-slide`).forEach((p, m) => {
				p.setAttribute('data-swiper-slide-index', m)
			})
		},
		l = t.grid && n.grid && n.grid.rows > 1,
		o = n.slidesPerGroup * (l ? n.grid.rows : 1),
		a = t.slides.length % o !== 0,
		s = l && t.slides.length % n.grid.rows !== 0,
		u = (c) => {
			for (let p = 0; p < c; p += 1) {
				const m = t.isElement ? Wo('swiper-slide', [n.slideBlankClass]) : Wo('div', [n.slideClass, n.slideBlankClass])
				t.slidesEl.append(m)
			}
		}
	if (a) {
		if (n.loopAddBlankSlides) {
			const c = o - (t.slides.length % o)
			u(c), t.recalcSlides(), t.updateSlides()
		} else
			Ho(
				'Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)'
			)
		i()
	} else if (s) {
		if (n.loopAddBlankSlides) {
			const c = n.grid.rows - (t.slides.length % n.grid.rows)
			u(c), t.recalcSlides(), t.updateSlides()
		} else
			Ho(
				'Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)'
			)
		i()
	} else i()
	t.loopFix({ slideRealIndex: e, direction: n.centeredSlides ? void 0 : 'next' })
}
function LS(e) {
	let {
		slideRealIndex: t,
		slideTo: n = !0,
		direction: r,
		setTranslate: i,
		activeSlideIndex: l,
		byController: o,
		byMousewheel: a,
	} = e === void 0 ? {} : e
	const s = this
	if (!s.params.loop) return
	s.emit('beforeLoopFix')
	const { slides: u, allowSlidePrev: c, allowSlideNext: p, slidesEl: m, params: g } = s,
		{ centeredSlides: y } = g
	if (((s.allowSlidePrev = !0), (s.allowSlideNext = !0), s.virtual && g.virtual.enabled)) {
		n &&
			(!g.centeredSlides && s.snapIndex === 0
				? s.slideTo(s.virtual.slides.length, 0, !1, !0)
				: g.centeredSlides && s.snapIndex < g.slidesPerView
				? s.slideTo(s.virtual.slides.length + s.snapIndex, 0, !1, !0)
				: s.snapIndex === s.snapGrid.length - 1 && s.slideTo(s.virtual.slidesBefore, 0, !1, !0)),
			(s.allowSlidePrev = c),
			(s.allowSlideNext = p),
			s.emit('loopFix')
		return
	}
	let v = g.slidesPerView
	v === 'auto'
		? (v = s.slidesPerViewDynamic())
		: ((v = Math.ceil(parseFloat(g.slidesPerView, 10))), y && v % 2 === 0 && (v = v + 1))
	const E = g.slidesPerGroupAuto ? v : g.slidesPerGroup
	let h = E
	h % E !== 0 && (h += E - (h % E)), (h += g.loopAdditionalSlides), (s.loopedSlides = h)
	const d = s.grid && g.grid && g.grid.rows > 1
	u.length < v + h
		? Ho(
				'Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters'
		  )
		: d && g.grid.fill === 'row' && Ho('Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`')
	const f = [],
		w = []
	let C = s.activeIndex
	typeof l > 'u' ? (l = s.getSlideIndex(u.filter((O) => O.classList.contains(g.slideActiveClass))[0])) : (C = l)
	const S = r === 'next' || !r,
		b = r === 'prev' || !r
	let N = 0,
		_ = 0
	const L = d ? Math.ceil(u.length / g.grid.rows) : u.length,
		I = (d ? u[l].column : l) + (y && typeof i > 'u' ? -v / 2 + 0.5 : 0)
	if (I < h) {
		N = Math.max(h - I, E)
		for (let O = 0; O < h - I; O += 1) {
			const F = O - Math.floor(O / L) * L
			if (d) {
				const H = L - F - 1
				for (let Y = u.length - 1; Y >= 0; Y -= 1) u[Y].column === H && f.push(Y)
			} else f.push(L - F - 1)
		}
	} else if (I + v > L - h) {
		_ = Math.max(I - (L - h * 2), E)
		for (let O = 0; O < _; O += 1) {
			const F = O - Math.floor(O / L) * L
			d
				? u.forEach((H, Y) => {
						H.column === F && w.push(Y)
				  })
				: w.push(F)
		}
	}
	if (
		((s.__preventObserver__ = !0),
		requestAnimationFrame(() => {
			s.__preventObserver__ = !1
		}),
		b &&
			f.forEach((O) => {
				;(u[O].swiperLoopMoveDOM = !0), m.prepend(u[O]), (u[O].swiperLoopMoveDOM = !1)
			}),
		S &&
			w.forEach((O) => {
				;(u[O].swiperLoopMoveDOM = !0), m.append(u[O]), (u[O].swiperLoopMoveDOM = !1)
			}),
		s.recalcSlides(),
		g.slidesPerView === 'auto'
			? s.updateSlides()
			: d &&
			  ((f.length > 0 && b) || (w.length > 0 && S)) &&
			  s.slides.forEach((O, F) => {
					s.grid.updateSlide(F, O, s.slides)
			  }),
		g.watchSlidesProgress && s.updateSlidesOffset(),
		n)
	) {
		if (f.length > 0 && b) {
			if (typeof t > 'u') {
				const O = s.slidesGrid[C],
					H = s.slidesGrid[C + N] - O
				a
					? s.setTranslate(s.translate - H)
					: (s.slideTo(C + N, 0, !1, !0),
					  i &&
							((s.touchEventsData.startTranslate = s.touchEventsData.startTranslate - H),
							(s.touchEventsData.currentTranslate = s.touchEventsData.currentTranslate - H)))
			} else if (i) {
				const O = d ? f.length / g.grid.rows : f.length
				s.slideTo(s.activeIndex + O, 0, !1, !0), (s.touchEventsData.currentTranslate = s.translate)
			}
		} else if (w.length > 0 && S)
			if (typeof t > 'u') {
				const O = s.slidesGrid[C],
					H = s.slidesGrid[C - _] - O
				a
					? s.setTranslate(s.translate - H)
					: (s.slideTo(C - _, 0, !1, !0),
					  i &&
							((s.touchEventsData.startTranslate = s.touchEventsData.startTranslate - H),
							(s.touchEventsData.currentTranslate = s.touchEventsData.currentTranslate - H)))
			} else {
				const O = d ? w.length / g.grid.rows : w.length
				s.slideTo(s.activeIndex - O, 0, !1, !0)
			}
	}
	if (((s.allowSlidePrev = c), (s.allowSlideNext = p), s.controller && s.controller.control && !o)) {
		const O = { slideRealIndex: t, direction: r, setTranslate: i, activeSlideIndex: l, byController: !0 }
		Array.isArray(s.controller.control)
			? s.controller.control.forEach((F) => {
					!F.destroyed &&
						F.params.loop &&
						F.loopFix({ ...O, slideTo: F.params.slidesPerView === g.slidesPerView ? n : !1 })
			  })
			: s.controller.control instanceof s.constructor &&
			  s.controller.control.params.loop &&
			  s.controller.control.loopFix({
					...O,
					slideTo: s.controller.control.params.slidesPerView === g.slidesPerView ? n : !1,
			  })
	}
	s.emit('loopFix')
}
function NS() {
	const e = this,
		{ params: t, slidesEl: n } = e
	if (!t.loop || (e.virtual && e.params.virtual.enabled)) return
	e.recalcSlides()
	const r = []
	e.slides.forEach((i) => {
		const l = typeof i.swiperSlideIndex > 'u' ? i.getAttribute('data-swiper-slide-index') * 1 : i.swiperSlideIndex
		r[l] = i
	}),
		e.slides.forEach((i) => {
			i.removeAttribute('data-swiper-slide-index')
		}),
		r.forEach((i) => {
			n.append(i)
		}),
		e.recalcSlides(),
		e.slideTo(e.realIndex, 0)
}
var RS = { loopCreate: bS, loopFix: LS, loopDestroy: NS }
function jS(e) {
	const t = this
	if (!t.params.simulateTouch || (t.params.watchOverflow && t.isLocked) || t.params.cssMode) return
	const n = t.params.touchEventsTarget === 'container' ? t.el : t.wrapperEl
	t.isElement && (t.__preventObserver__ = !0),
		(n.style.cursor = 'move'),
		(n.style.cursor = e ? 'grabbing' : 'grab'),
		t.isElement &&
			requestAnimationFrame(() => {
				t.__preventObserver__ = !1
			})
}
function OS() {
	const e = this
	;(e.params.watchOverflow && e.isLocked) ||
		e.params.cssMode ||
		(e.isElement && (e.__preventObserver__ = !0),
		(e[e.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = ''),
		e.isElement &&
			requestAnimationFrame(() => {
				e.__preventObserver__ = !1
			}))
}
var MS = { setGrabCursor: jS, unsetGrabCursor: OS }
function IS(e, t) {
	t === void 0 && (t = this)
	function n(r) {
		if (!r || r === lr() || r === qe()) return null
		r.assignedSlot && (r = r.assignedSlot)
		const i = r.closest(e)
		return !i && !r.getRootNode ? null : i || n(r.getRootNode().host)
	}
	return n(t)
}
function df(e, t, n) {
	const r = qe(),
		{ params: i } = e,
		l = i.edgeSwipeDetection,
		o = i.edgeSwipeThreshold
	return l && (n <= o || n >= r.innerWidth - o) ? (l === 'prevent' ? (t.preventDefault(), !0) : !1) : !0
}
function AS(e) {
	const t = this,
		n = lr()
	let r = e
	r.originalEvent && (r = r.originalEvent)
	const i = t.touchEventsData
	if (r.type === 'pointerdown') {
		if (i.pointerId !== null && i.pointerId !== r.pointerId) return
		i.pointerId = r.pointerId
	} else r.type === 'touchstart' && r.targetTouches.length === 1 && (i.touchId = r.targetTouches[0].identifier)
	if (r.type === 'touchstart') {
		df(t, r, r.targetTouches[0].pageX)
		return
	}
	const { params: l, touches: o, enabled: a } = t
	if (!a || (!l.simulateTouch && r.pointerType === 'mouse') || (t.animating && l.preventInteractionOnTransition)) return
	!t.animating && l.cssMode && l.loop && t.loopFix()
	let s = r.target
	if (
		(l.touchEventsTarget === 'wrapper' && !t.wrapperEl.contains(s)) ||
		('which' in r && r.which === 3) ||
		('button' in r && r.button > 0) ||
		(i.isTouched && i.isMoved)
	)
		return
	const u = !!l.noSwipingClass && l.noSwipingClass !== '',
		c = r.composedPath ? r.composedPath() : r.path
	u && r.target && r.target.shadowRoot && c && (s = c[0])
	const p = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`,
		m = !!(r.target && r.target.shadowRoot)
	if (l.noSwiping && (m ? IS(p, s) : s.closest(p))) {
		t.allowClick = !0
		return
	}
	if (l.swipeHandler && !s.closest(l.swipeHandler)) return
	;(o.currentX = r.pageX), (o.currentY = r.pageY)
	const g = o.currentX,
		y = o.currentY
	if (!df(t, r, g)) return
	Object.assign(i, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }),
		(o.startX = g),
		(o.startY = y),
		(i.touchStartTime = hn()),
		(t.allowClick = !0),
		t.updateSize(),
		(t.swipeDirection = void 0),
		l.threshold > 0 && (i.allowThresholdMove = !1)
	let v = !0
	s.matches(i.focusableElements) && ((v = !1), s.nodeName === 'SELECT' && (i.isTouched = !1)),
		n.activeElement && n.activeElement.matches(i.focusableElements) && n.activeElement !== s && n.activeElement.blur()
	const E = v && t.allowTouchMove && l.touchStartPreventDefault
	;(l.touchStartForcePreventDefault || E) && !s.isContentEditable && r.preventDefault(),
		l.freeMode && l.freeMode.enabled && t.freeMode && t.animating && !l.cssMode && t.freeMode.onTouchStart(),
		t.emit('touchStart', r)
}
function DS(e) {
	const t = lr(),
		n = this,
		r = n.touchEventsData,
		{ params: i, touches: l, rtlTranslate: o, enabled: a } = n
	if (!a || (!i.simulateTouch && e.pointerType === 'mouse')) return
	let s = e
	if (
		(s.originalEvent && (s = s.originalEvent),
		s.type === 'pointermove' && (r.touchId !== null || s.pointerId !== r.pointerId))
	)
		return
	let u
	if (s.type === 'touchmove') {
		if (((u = [...s.changedTouches].filter((S) => S.identifier === r.touchId)[0]), !u || u.identifier !== r.touchId))
			return
	} else u = s
	if (!r.isTouched) {
		r.startMoving && r.isScrolling && n.emit('touchMoveOpposite', s)
		return
	}
	const c = u.pageX,
		p = u.pageY
	if (s.preventedByNestedSwiper) {
		;(l.startX = c), (l.startY = p)
		return
	}
	if (!n.allowTouchMove) {
		s.target.matches(r.focusableElements) || (n.allowClick = !1),
			r.isTouched && (Object.assign(l, { startX: c, startY: p, currentX: c, currentY: p }), (r.touchStartTime = hn()))
		return
	}
	if (i.touchReleaseOnEdges && !i.loop) {
		if (n.isVertical()) {
			if ((p < l.startY && n.translate <= n.maxTranslate()) || (p > l.startY && n.translate >= n.minTranslate())) {
				;(r.isTouched = !1), (r.isMoved = !1)
				return
			}
		} else if ((c < l.startX && n.translate <= n.maxTranslate()) || (c > l.startX && n.translate >= n.minTranslate()))
			return
	}
	if (t.activeElement && s.target === t.activeElement && s.target.matches(r.focusableElements)) {
		;(r.isMoved = !0), (n.allowClick = !1)
		return
	}
	r.allowTouchCallbacks && n.emit('touchMove', s),
		(l.previousX = l.currentX),
		(l.previousY = l.currentY),
		(l.currentX = c),
		(l.currentY = p)
	const m = l.currentX - l.startX,
		g = l.currentY - l.startY
	if (n.params.threshold && Math.sqrt(m ** 2 + g ** 2) < n.params.threshold) return
	if (typeof r.isScrolling > 'u') {
		let S
		;(n.isHorizontal() && l.currentY === l.startY) || (n.isVertical() && l.currentX === l.startX)
			? (r.isScrolling = !1)
			: m * m + g * g >= 25 &&
			  ((S = (Math.atan2(Math.abs(g), Math.abs(m)) * 180) / Math.PI),
			  (r.isScrolling = n.isHorizontal() ? S > i.touchAngle : 90 - S > i.touchAngle))
	}
	if (
		(r.isScrolling && n.emit('touchMoveOpposite', s),
		typeof r.startMoving > 'u' && (l.currentX !== l.startX || l.currentY !== l.startY) && (r.startMoving = !0),
		r.isScrolling)
	) {
		r.isTouched = !1
		return
	}
	if (!r.startMoving) return
	;(n.allowClick = !1),
		!i.cssMode && s.cancelable && s.preventDefault(),
		i.touchMoveStopPropagation && !i.nested && s.stopPropagation()
	let y = n.isHorizontal() ? m : g,
		v = n.isHorizontal() ? l.currentX - l.previousX : l.currentY - l.previousY
	i.oneWayMovement && ((y = Math.abs(y) * (o ? 1 : -1)), (v = Math.abs(v) * (o ? 1 : -1))),
		(l.diff = y),
		(y *= i.touchRatio),
		o && ((y = -y), (v = -v))
	const E = n.touchesDirection
	;(n.swipeDirection = y > 0 ? 'prev' : 'next'), (n.touchesDirection = v > 0 ? 'prev' : 'next')
	const h = n.params.loop && !i.cssMode,
		d = (n.touchesDirection === 'next' && n.allowSlideNext) || (n.touchesDirection === 'prev' && n.allowSlidePrev)
	if (!r.isMoved) {
		if (
			(h && d && n.loopFix({ direction: n.swipeDirection }),
			(r.startTranslate = n.getTranslate()),
			n.setTransition(0),
			n.animating)
		) {
			const S = new window.CustomEvent('transitionend', { bubbles: !0, cancelable: !0 })
			n.wrapperEl.dispatchEvent(S)
		}
		;(r.allowMomentumBounce = !1),
			i.grabCursor && (n.allowSlideNext === !0 || n.allowSlidePrev === !0) && n.setGrabCursor(!0),
			n.emit('sliderFirstMove', s)
	}
	let f
	if (
		(new Date().getTime(), r.isMoved && r.allowThresholdMove && E !== n.touchesDirection && h && d && Math.abs(y) >= 1)
	) {
		Object.assign(l, { startX: c, startY: p, currentX: c, currentY: p, startTranslate: r.currentTranslate }),
			(r.loopSwapReset = !0),
			(r.startTranslate = r.currentTranslate)
		return
	}
	n.emit('sliderMove', s), (r.isMoved = !0), (r.currentTranslate = y + r.startTranslate)
	let w = !0,
		C = i.resistanceRatio
	if (
		(i.touchReleaseOnEdges && (C = 0),
		y > 0
			? (h &&
					d &&
					!f &&
					r.allowThresholdMove &&
					r.currentTranslate >
						(i.centeredSlides ? n.minTranslate() - n.slidesSizesGrid[n.activeIndex + 1] : n.minTranslate()) &&
					n.loopFix({ direction: 'prev', setTranslate: !0, activeSlideIndex: 0 }),
			  r.currentTranslate > n.minTranslate() &&
					((w = !1),
					i.resistance &&
						(r.currentTranslate = n.minTranslate() - 1 + (-n.minTranslate() + r.startTranslate + y) ** C)))
			: y < 0 &&
			  (h &&
					d &&
					!f &&
					r.allowThresholdMove &&
					r.currentTranslate <
						(i.centeredSlides
							? n.maxTranslate() + n.slidesSizesGrid[n.slidesSizesGrid.length - 1]
							: n.maxTranslate()) &&
					n.loopFix({
						direction: 'next',
						setTranslate: !0,
						activeSlideIndex:
							n.slides.length -
							(i.slidesPerView === 'auto' ? n.slidesPerViewDynamic() : Math.ceil(parseFloat(i.slidesPerView, 10))),
					}),
			  r.currentTranslate < n.maxTranslate() &&
					((w = !1),
					i.resistance &&
						(r.currentTranslate = n.maxTranslate() + 1 - (n.maxTranslate() - r.startTranslate - y) ** C))),
		w && (s.preventedByNestedSwiper = !0),
		!n.allowSlideNext &&
			n.swipeDirection === 'next' &&
			r.currentTranslate < r.startTranslate &&
			(r.currentTranslate = r.startTranslate),
		!n.allowSlidePrev &&
			n.swipeDirection === 'prev' &&
			r.currentTranslate > r.startTranslate &&
			(r.currentTranslate = r.startTranslate),
		!n.allowSlidePrev && !n.allowSlideNext && (r.currentTranslate = r.startTranslate),
		i.threshold > 0)
	)
		if (Math.abs(y) > i.threshold || r.allowThresholdMove) {
			if (!r.allowThresholdMove) {
				;(r.allowThresholdMove = !0),
					(l.startX = l.currentX),
					(l.startY = l.currentY),
					(r.currentTranslate = r.startTranslate),
					(l.diff = n.isHorizontal() ? l.currentX - l.startX : l.currentY - l.startY)
				return
			}
		} else {
			r.currentTranslate = r.startTranslate
			return
		}
	!i.followFinger ||
		i.cssMode ||
		(((i.freeMode && i.freeMode.enabled && n.freeMode) || i.watchSlidesProgress) &&
			(n.updateActiveIndex(), n.updateSlidesClasses()),
		i.freeMode && i.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(),
		n.updateProgress(r.currentTranslate),
		n.setTranslate(r.currentTranslate))
}
function zS(e) {
	const t = this,
		n = t.touchEventsData
	let r = e
	r.originalEvent && (r = r.originalEvent)
	let i
	if (r.type === 'touchend' || r.type === 'touchcancel') {
		if (((i = [...r.changedTouches].filter((C) => C.identifier === n.touchId)[0]), !i || i.identifier !== n.touchId))
			return
	} else {
		if (n.touchId !== null || r.pointerId !== n.pointerId) return
		i = r
	}
	if (
		['pointercancel', 'pointerout', 'pointerleave', 'contextmenu'].includes(r.type) &&
		!(['pointercancel', 'contextmenu'].includes(r.type) && (t.browser.isSafari || t.browser.isWebView))
	)
		return
	;(n.pointerId = null), (n.touchId = null)
	const { params: o, touches: a, rtlTranslate: s, slidesGrid: u, enabled: c } = t
	if (!c || (!o.simulateTouch && r.pointerType === 'mouse')) return
	if ((n.allowTouchCallbacks && t.emit('touchEnd', r), (n.allowTouchCallbacks = !1), !n.isTouched)) {
		n.isMoved && o.grabCursor && t.setGrabCursor(!1), (n.isMoved = !1), (n.startMoving = !1)
		return
	}
	o.grabCursor &&
		n.isMoved &&
		n.isTouched &&
		(t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
		t.setGrabCursor(!1)
	const p = hn(),
		m = p - n.touchStartTime
	if (t.allowClick) {
		const C = r.path || (r.composedPath && r.composedPath())
		t.updateClickedSlide((C && C[0]) || r.target, C),
			t.emit('tap click', r),
			m < 300 && p - n.lastClickTime < 300 && t.emit('doubleTap doubleClick', r)
	}
	if (
		((n.lastClickTime = hn()),
		yl(() => {
			t.destroyed || (t.allowClick = !0)
		}),
		!n.isTouched ||
			!n.isMoved ||
			!t.swipeDirection ||
			(a.diff === 0 && !n.loopSwapReset) ||
			(n.currentTranslate === n.startTranslate && !n.loopSwapReset))
	) {
		;(n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1)
		return
	}
	;(n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1)
	let g
	if ((o.followFinger ? (g = s ? t.translate : -t.translate) : (g = -n.currentTranslate), o.cssMode)) return
	if (o.freeMode && o.freeMode.enabled) {
		t.freeMode.onTouchEnd({ currentPos: g })
		return
	}
	const y = g >= -t.maxTranslate() && !t.params.loop
	let v = 0,
		E = t.slidesSizesGrid[0]
	for (let C = 0; C < u.length; C += C < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup) {
		const S = C < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup
		typeof u[C + S] < 'u'
			? (y || (g >= u[C] && g < u[C + S])) && ((v = C), (E = u[C + S] - u[C]))
			: (y || g >= u[C]) && ((v = C), (E = u[u.length - 1] - u[u.length - 2]))
	}
	let h = null,
		d = null
	o.rewind &&
		(t.isBeginning
			? (d = o.virtual && o.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1)
			: t.isEnd && (h = 0))
	const f = (g - u[v]) / E,
		w = v < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup
	if (m > o.longSwipesMs) {
		if (!o.longSwipes) {
			t.slideTo(t.activeIndex)
			return
		}
		t.swipeDirection === 'next' && (f >= o.longSwipesRatio ? t.slideTo(o.rewind && t.isEnd ? h : v + w) : t.slideTo(v)),
			t.swipeDirection === 'prev' &&
				(f > 1 - o.longSwipesRatio
					? t.slideTo(v + w)
					: d !== null && f < 0 && Math.abs(f) > o.longSwipesRatio
					? t.slideTo(d)
					: t.slideTo(v))
	} else {
		if (!o.shortSwipes) {
			t.slideTo(t.activeIndex)
			return
		}
		t.navigation && (r.target === t.navigation.nextEl || r.target === t.navigation.prevEl)
			? r.target === t.navigation.nextEl
				? t.slideTo(v + w)
				: t.slideTo(v)
			: (t.swipeDirection === 'next' && t.slideTo(h !== null ? h : v + w),
			  t.swipeDirection === 'prev' && t.slideTo(d !== null ? d : v))
	}
}
function ff() {
	const e = this,
		{ params: t, el: n } = e
	if (n && n.offsetWidth === 0) return
	t.breakpoints && e.setBreakpoint()
	const { allowSlideNext: r, allowSlidePrev: i, snapGrid: l } = e,
		o = e.virtual && e.params.virtual.enabled
	;(e.allowSlideNext = !0), (e.allowSlidePrev = !0), e.updateSize(), e.updateSlides(), e.updateSlidesClasses()
	const a = o && t.loop
	;(t.slidesPerView === 'auto' || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides && !a
		? e.slideTo(e.slides.length - 1, 0, !1, !0)
		: e.params.loop && !o
		? e.slideToLoop(e.realIndex, 0, !1, !0)
		: e.slideTo(e.activeIndex, 0, !1, !0),
		e.autoplay &&
			e.autoplay.running &&
			e.autoplay.paused &&
			(clearTimeout(e.autoplay.resizeTimeout),
			(e.autoplay.resizeTimeout = setTimeout(() => {
				e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
			}, 500))),
		(e.allowSlidePrev = i),
		(e.allowSlideNext = r),
		e.params.watchOverflow && l !== e.snapGrid && e.checkOverflow()
}
function FS(e) {
	const t = this
	t.enabled &&
		(t.allowClick ||
			(t.params.preventClicks && e.preventDefault(),
			t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
}
function $S() {
	const e = this,
		{ wrapperEl: t, rtlTranslate: n, enabled: r } = e
	if (!r) return
	;(e.previousTranslate = e.translate),
		e.isHorizontal() ? (e.translate = -t.scrollLeft) : (e.translate = -t.scrollTop),
		e.translate === 0 && (e.translate = 0),
		e.updateActiveIndex(),
		e.updateSlidesClasses()
	let i
	const l = e.maxTranslate() - e.minTranslate()
	l === 0 ? (i = 0) : (i = (e.translate - e.minTranslate()) / l),
		i !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
		e.emit('setTranslate', e.translate, !1)
}
function BS(e) {
	const t = this
	ho(t, e.target), !(t.params.cssMode || (t.params.slidesPerView !== 'auto' && !t.params.autoHeight)) && t.update()
}
function US() {
	const e = this
	e.documentTouchHandlerProceeded ||
		((e.documentTouchHandlerProceeded = !0), e.params.touchReleaseOnEdges && (e.el.style.touchAction = 'auto'))
}
const Sm = (e, t) => {
	const n = lr(),
		{ params: r, el: i, wrapperEl: l, device: o } = e,
		a = !!r.nested,
		s = t === 'on' ? 'addEventListener' : 'removeEventListener',
		u = t
	n[s]('touchstart', e.onDocumentTouchStart, { passive: !1, capture: a }),
		i[s]('touchstart', e.onTouchStart, { passive: !1 }),
		i[s]('pointerdown', e.onTouchStart, { passive: !1 }),
		n[s]('touchmove', e.onTouchMove, { passive: !1, capture: a }),
		n[s]('pointermove', e.onTouchMove, { passive: !1, capture: a }),
		n[s]('touchend', e.onTouchEnd, { passive: !0 }),
		n[s]('pointerup', e.onTouchEnd, { passive: !0 }),
		n[s]('pointercancel', e.onTouchEnd, { passive: !0 }),
		n[s]('touchcancel', e.onTouchEnd, { passive: !0 }),
		n[s]('pointerout', e.onTouchEnd, { passive: !0 }),
		n[s]('pointerleave', e.onTouchEnd, { passive: !0 }),
		n[s]('contextmenu', e.onTouchEnd, { passive: !0 }),
		(r.preventClicks || r.preventClicksPropagation) && i[s]('click', e.onClick, !0),
		r.cssMode && l[s]('scroll', e.onScroll),
		r.updateOnWindowResize
			? e[u](o.ios || o.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', ff, !0)
			: e[u]('observerUpdate', ff, !0),
		i[s]('load', e.onLoad, { capture: !0 })
}
function VS() {
	const e = this,
		{ params: t } = e
	;(e.onTouchStart = AS.bind(e)),
		(e.onTouchMove = DS.bind(e)),
		(e.onTouchEnd = zS.bind(e)),
		(e.onDocumentTouchStart = US.bind(e)),
		t.cssMode && (e.onScroll = $S.bind(e)),
		(e.onClick = FS.bind(e)),
		(e.onLoad = BS.bind(e)),
		Sm(e, 'on')
}
function HS() {
	Sm(this, 'off')
}
var WS = { attachEvents: VS, detachEvents: HS }
const pf = (e, t) => e.grid && t.grid && t.grid.rows > 1
function GS() {
	const e = this,
		{ realIndex: t, initialized: n, params: r, el: i } = e,
		l = r.breakpoints
	if (!l || (l && Object.keys(l).length === 0)) return
	const o = e.getBreakpoint(l, e.params.breakpointsBase, e.el)
	if (!o || e.currentBreakpoint === o) return
	const s = (o in l ? l[o] : void 0) || e.originalParams,
		u = pf(e, r),
		c = pf(e, s),
		p = r.enabled
	u && !c
		? (i.classList.remove(`${r.containerModifierClass}grid`, `${r.containerModifierClass}grid-column`),
		  e.emitContainerClasses())
		: !u &&
		  c &&
		  (i.classList.add(`${r.containerModifierClass}grid`),
		  ((s.grid.fill && s.grid.fill === 'column') || (!s.grid.fill && r.grid.fill === 'column')) &&
				i.classList.add(`${r.containerModifierClass}grid-column`),
		  e.emitContainerClasses()),
		['navigation', 'pagination', 'scrollbar'].forEach((h) => {
			if (typeof s[h] > 'u') return
			const d = r[h] && r[h].enabled,
				f = s[h] && s[h].enabled
			d && !f && e[h].disable(), !d && f && e[h].enable()
		})
	const m = s.direction && s.direction !== r.direction,
		g = r.loop && (s.slidesPerView !== r.slidesPerView || m),
		y = r.loop
	m && n && e.changeDirection(), ht(e.params, s)
	const v = e.params.enabled,
		E = e.params.loop
	Object.assign(e, {
		allowTouchMove: e.params.allowTouchMove,
		allowSlideNext: e.params.allowSlideNext,
		allowSlidePrev: e.params.allowSlidePrev,
	}),
		p && !v ? e.disable() : !p && v && e.enable(),
		(e.currentBreakpoint = o),
		e.emit('_beforeBreakpoint', s),
		n &&
			(g
				? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
				: !y && E
				? (e.loopCreate(t), e.updateSlides())
				: y && !E && e.loopDestroy()),
		e.emit('breakpoint', s)
}
function YS(e, t, n) {
	if ((t === void 0 && (t = 'window'), !e || (t === 'container' && !n))) return
	let r = !1
	const i = qe(),
		l = t === 'window' ? i.innerHeight : n.clientHeight,
		o = Object.keys(e).map((a) => {
			if (typeof a == 'string' && a.indexOf('@') === 0) {
				const s = parseFloat(a.substr(1))
				return { value: l * s, point: a }
			}
			return { value: a, point: a }
		})
	o.sort((a, s) => parseInt(a.value, 10) - parseInt(s.value, 10))
	for (let a = 0; a < o.length; a += 1) {
		const { point: s, value: u } = o[a]
		t === 'window' ? i.matchMedia(`(min-width: ${u}px)`).matches && (r = s) : u <= n.clientWidth && (r = s)
	}
	return r || 'max'
}
var KS = { setBreakpoint: GS, getBreakpoint: YS }
function XS(e, t) {
	const n = []
	return (
		e.forEach((r) => {
			typeof r == 'object'
				? Object.keys(r).forEach((i) => {
						r[i] && n.push(t + i)
				  })
				: typeof r == 'string' && n.push(t + r)
		}),
		n
	)
}
function QS() {
	const e = this,
		{ classNames: t, params: n, rtl: r, el: i, device: l } = e,
		o = XS(
			[
				'initialized',
				n.direction,
				{ 'free-mode': e.params.freeMode && n.freeMode.enabled },
				{ autoheight: n.autoHeight },
				{ rtl: r },
				{ grid: n.grid && n.grid.rows > 1 },
				{ 'grid-column': n.grid && n.grid.rows > 1 && n.grid.fill === 'column' },
				{ android: l.android },
				{ ios: l.ios },
				{ 'css-mode': n.cssMode },
				{ centered: n.cssMode && n.centeredSlides },
				{ 'watch-progress': n.watchSlidesProgress },
			],
			n.containerModifierClass
		)
	t.push(...o), i.classList.add(...t), e.emitContainerClasses()
}
function qS() {
	const e = this,
		{ el: t, classNames: n } = e
	t.classList.remove(...n), e.emitContainerClasses()
}
var JS = { addClasses: QS, removeClasses: qS }
function ZS() {
	const e = this,
		{ isLocked: t, params: n } = e,
		{ slidesOffsetBefore: r } = n
	if (r) {
		const i = e.slides.length - 1,
			l = e.slidesGrid[i] + e.slidesSizesGrid[i] + r * 2
		e.isLocked = e.size > l
	} else e.isLocked = e.snapGrid.length === 1
	n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
		n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
		t && t !== e.isLocked && (e.isEnd = !1),
		t !== e.isLocked && e.emit(e.isLocked ? 'lock' : 'unlock')
}
var e1 = { checkOverflow: ZS },
	iu = {
		init: !0,
		direction: 'horizontal',
		oneWayMovement: !1,
		touchEventsTarget: 'wrapper',
		initialSlide: 0,
		speed: 300,
		cssMode: !1,
		updateOnWindowResize: !0,
		resizeObserver: !0,
		nested: !1,
		createElements: !1,
		eventsPrefix: 'swiper',
		enabled: !0,
		focusableElements: 'input, select, option, textarea, button, video, label',
		width: null,
		height: null,
		preventInteractionOnTransition: !1,
		userAgent: null,
		url: null,
		edgeSwipeDetection: !1,
		edgeSwipeThreshold: 20,
		autoHeight: !1,
		setWrapperSize: !1,
		virtualTranslate: !1,
		effect: 'slide',
		breakpoints: void 0,
		breakpointsBase: 'window',
		spaceBetween: 0,
		slidesPerView: 1,
		slidesPerGroup: 1,
		slidesPerGroupSkip: 0,
		slidesPerGroupAuto: !1,
		centeredSlides: !1,
		centeredSlidesBounds: !1,
		slidesOffsetBefore: 0,
		slidesOffsetAfter: 0,
		normalizeSlideIndex: !0,
		centerInsufficientSlides: !1,
		watchOverflow: !0,
		roundLengths: !1,
		touchRatio: 1,
		touchAngle: 45,
		simulateTouch: !0,
		shortSwipes: !0,
		longSwipes: !0,
		longSwipesRatio: 0.5,
		longSwipesMs: 300,
		followFinger: !0,
		allowTouchMove: !0,
		threshold: 5,
		touchMoveStopPropagation: !1,
		touchStartPreventDefault: !0,
		touchStartForcePreventDefault: !1,
		touchReleaseOnEdges: !1,
		uniqueNavElements: !0,
		resistance: !0,
		resistanceRatio: 0.85,
		watchSlidesProgress: !1,
		grabCursor: !1,
		preventClicks: !0,
		preventClicksPropagation: !0,
		slideToClickedSlide: !1,
		loop: !1,
		loopAddBlankSlides: !0,
		loopAdditionalSlides: 0,
		loopPreventsSliding: !0,
		rewind: !1,
		allowSlidePrev: !0,
		allowSlideNext: !0,
		swipeHandler: null,
		noSwiping: !0,
		noSwipingClass: 'swiper-no-swiping',
		noSwipingSelector: null,
		passiveListeners: !0,
		maxBackfaceHiddenSlides: 10,
		containerModifierClass: 'swiper-',
		slideClass: 'swiper-slide',
		slideBlankClass: 'swiper-slide-blank',
		slideActiveClass: 'swiper-slide-active',
		slideVisibleClass: 'swiper-slide-visible',
		slideFullyVisibleClass: 'swiper-slide-fully-visible',
		slideNextClass: 'swiper-slide-next',
		slidePrevClass: 'swiper-slide-prev',
		wrapperClass: 'swiper-wrapper',
		lazyPreloaderClass: 'swiper-lazy-preloader',
		lazyPreloadPrevNext: 0,
		runCallbacksOnInit: !0,
		_emitClasses: !1,
	}
function t1(e, t) {
	return function (r) {
		r === void 0 && (r = {})
		const i = Object.keys(r)[0],
			l = r[i]
		if (typeof l != 'object' || l === null) {
			ht(t, r)
			return
		}
		if (
			(e[i] === !0 && (e[i] = { enabled: !0 }),
			i === 'navigation' && e[i] && e[i].enabled && !e[i].prevEl && !e[i].nextEl && (e[i].auto = !0),
			['pagination', 'scrollbar'].indexOf(i) >= 0 && e[i] && e[i].enabled && !e[i].el && (e[i].auto = !0),
			!(i in e && 'enabled' in l))
		) {
			ht(t, r)
			return
		}
		typeof e[i] == 'object' && !('enabled' in e[i]) && (e[i].enabled = !0), e[i] || (e[i] = { enabled: !1 }), ht(t, r)
	}
}
const Js = {
		eventsEmitter: Jx,
		update: uS,
		translate: mS,
		transition: wS,
		slide: _S,
		loop: RS,
		grabCursor: MS,
		events: WS,
		breakpoints: KS,
		checkOverflow: e1,
		classes: JS,
	},
	Zs = {}
let dc = class dn {
	constructor() {
		let t, n
		for (var r = arguments.length, i = new Array(r), l = 0; l < r; l++) i[l] = arguments[l]
		i.length === 1 && i[0].constructor && Object.prototype.toString.call(i[0]).slice(8, -1) === 'Object'
			? (n = i[0])
			: ([t, n] = i),
			n || (n = {}),
			(n = ht({}, n)),
			t && !n.el && (n.el = t)
		const o = lr()
		if (n.el && typeof n.el == 'string' && o.querySelectorAll(n.el).length > 1) {
			const c = []
			return (
				o.querySelectorAll(n.el).forEach((p) => {
					const m = ht({}, n, { el: p })
					c.push(new dn(m))
				}),
				c
			)
		}
		const a = this
		;(a.__swiper__ = !0),
			(a.support = wm()),
			(a.device = Yx({ userAgent: n.userAgent })),
			(a.browser = Xx()),
			(a.eventsListeners = {}),
			(a.eventsAnyListeners = []),
			(a.modules = [...a.__modules__]),
			n.modules && Array.isArray(n.modules) && a.modules.push(...n.modules)
		const s = {}
		a.modules.forEach((c) => {
			c({
				params: n,
				swiper: a,
				extendParams: t1(n, s),
				on: a.on.bind(a),
				once: a.once.bind(a),
				off: a.off.bind(a),
				emit: a.emit.bind(a),
			})
		})
		const u = ht({}, iu, s)
		return (
			(a.params = ht({}, u, Zs, n)),
			(a.originalParams = ht({}, a.params)),
			(a.passedParams = ht({}, n)),
			a.params &&
				a.params.on &&
				Object.keys(a.params.on).forEach((c) => {
					a.on(c, a.params.on[c])
				}),
			a.params && a.params.onAny && a.onAny(a.params.onAny),
			Object.assign(a, {
				enabled: a.params.enabled,
				el: t,
				classNames: [],
				slides: [],
				slidesGrid: [],
				snapGrid: [],
				slidesSizesGrid: [],
				isHorizontal() {
					return a.params.direction === 'horizontal'
				},
				isVertical() {
					return a.params.direction === 'vertical'
				},
				activeIndex: 0,
				realIndex: 0,
				isBeginning: !0,
				isEnd: !1,
				translate: 0,
				previousTranslate: 0,
				progress: 0,
				velocity: 0,
				animating: !1,
				cssOverflowAdjustment() {
					return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
				},
				allowSlideNext: a.params.allowSlideNext,
				allowSlidePrev: a.params.allowSlidePrev,
				touchEventsData: {
					isTouched: void 0,
					isMoved: void 0,
					allowTouchCallbacks: void 0,
					touchStartTime: void 0,
					isScrolling: void 0,
					currentTranslate: void 0,
					startTranslate: void 0,
					allowThresholdMove: void 0,
					focusableElements: a.params.focusableElements,
					lastClickTime: 0,
					clickTimeout: void 0,
					velocities: [],
					allowMomentumBounce: void 0,
					startMoving: void 0,
					pointerId: null,
					touchId: null,
				},
				allowClick: !0,
				allowTouchMove: a.params.allowTouchMove,
				touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
				imagesToLoad: [],
				imagesLoaded: 0,
			}),
			a.emit('_swiper'),
			a.params.init && a.init(),
			a
		)
	}
	getDirectionLabel(t) {
		return this.isHorizontal()
			? t
			: {
					width: 'height',
					'margin-top': 'margin-left',
					'margin-bottom ': 'margin-right',
					'margin-left': 'margin-top',
					'margin-right': 'margin-bottom',
					'padding-left': 'padding-top',
					'padding-right': 'padding-bottom',
					marginRight: 'marginBottom',
			  }[t]
	}
	getSlideIndex(t) {
		const { slidesEl: n, params: r } = this,
			i = en(n, `.${r.slideClass}, swiper-slide`),
			l = Go(i[0])
		return Go(t) - l
	}
	getSlideIndexByData(t) {
		return this.getSlideIndex(this.slides.filter((n) => n.getAttribute('data-swiper-slide-index') * 1 === t)[0])
	}
	recalcSlides() {
		const t = this,
			{ slidesEl: n, params: r } = t
		t.slides = en(n, `.${r.slideClass}, swiper-slide`)
	}
	enable() {
		const t = this
		t.enabled || ((t.enabled = !0), t.params.grabCursor && t.setGrabCursor(), t.emit('enable'))
	}
	disable() {
		const t = this
		t.enabled && ((t.enabled = !1), t.params.grabCursor && t.unsetGrabCursor(), t.emit('disable'))
	}
	setProgress(t, n) {
		const r = this
		t = Math.min(Math.max(t, 0), 1)
		const i = r.minTranslate(),
			o = (r.maxTranslate() - i) * t + i
		r.translateTo(o, typeof n > 'u' ? 0 : n), r.updateActiveIndex(), r.updateSlidesClasses()
	}
	emitContainerClasses() {
		const t = this
		if (!t.params._emitClasses || !t.el) return
		const n = t.el.className
			.split(' ')
			.filter((r) => r.indexOf('swiper') === 0 || r.indexOf(t.params.containerModifierClass) === 0)
		t.emit('_containerClasses', n.join(' '))
	}
	getSlideClasses(t) {
		const n = this
		return n.destroyed
			? ''
			: t.className
					.split(' ')
					.filter((r) => r.indexOf('swiper-slide') === 0 || r.indexOf(n.params.slideClass) === 0)
					.join(' ')
	}
	emitSlidesClasses() {
		const t = this
		if (!t.params._emitClasses || !t.el) return
		const n = []
		t.slides.forEach((r) => {
			const i = t.getSlideClasses(r)
			n.push({ slideEl: r, classNames: i }), t.emit('_slideClass', r, i)
		}),
			t.emit('_slideClasses', n)
	}
	slidesPerViewDynamic(t, n) {
		t === void 0 && (t = 'current'), n === void 0 && (n = !1)
		const r = this,
			{ params: i, slides: l, slidesGrid: o, slidesSizesGrid: a, size: s, activeIndex: u } = r
		let c = 1
		if (typeof i.slidesPerView == 'number') return i.slidesPerView
		if (i.centeredSlides) {
			let p = l[u] ? l[u].swiperSlideSize : 0,
				m
			for (let g = u + 1; g < l.length; g += 1) l[g] && !m && ((p += l[g].swiperSlideSize), (c += 1), p > s && (m = !0))
			for (let g = u - 1; g >= 0; g -= 1) l[g] && !m && ((p += l[g].swiperSlideSize), (c += 1), p > s && (m = !0))
		} else if (t === 'current')
			for (let p = u + 1; p < l.length; p += 1) (n ? o[p] + a[p] - o[u] < s : o[p] - o[u] < s) && (c += 1)
		else for (let p = u - 1; p >= 0; p -= 1) o[u] - o[p] < s && (c += 1)
		return c
	}
	update() {
		const t = this
		if (!t || t.destroyed) return
		const { snapGrid: n, params: r } = t
		r.breakpoints && t.setBreakpoint(),
			[...t.el.querySelectorAll('[loading="lazy"]')].forEach((o) => {
				o.complete && ho(t, o)
			}),
			t.updateSize(),
			t.updateSlides(),
			t.updateProgress(),
			t.updateSlidesClasses()
		function i() {
			const o = t.rtlTranslate ? t.translate * -1 : t.translate,
				a = Math.min(Math.max(o, t.maxTranslate()), t.minTranslate())
			t.setTranslate(a), t.updateActiveIndex(), t.updateSlidesClasses()
		}
		let l
		if (r.freeMode && r.freeMode.enabled && !r.cssMode) i(), r.autoHeight && t.updateAutoHeight()
		else {
			if ((r.slidesPerView === 'auto' || r.slidesPerView > 1) && t.isEnd && !r.centeredSlides) {
				const o = t.virtual && r.virtual.enabled ? t.virtual.slides : t.slides
				l = t.slideTo(o.length - 1, 0, !1, !0)
			} else l = t.slideTo(t.activeIndex, 0, !1, !0)
			l || i()
		}
		r.watchOverflow && n !== t.snapGrid && t.checkOverflow(), t.emit('update')
	}
	changeDirection(t, n) {
		n === void 0 && (n = !0)
		const r = this,
			i = r.params.direction
		return (
			t || (t = i === 'horizontal' ? 'vertical' : 'horizontal'),
			t === i ||
				(t !== 'horizontal' && t !== 'vertical') ||
				(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),
				r.el.classList.add(`${r.params.containerModifierClass}${t}`),
				r.emitContainerClasses(),
				(r.params.direction = t),
				r.slides.forEach((l) => {
					t === 'vertical' ? (l.style.width = '') : (l.style.height = '')
				}),
				r.emit('changeDirection'),
				n && r.update()),
			r
		)
	}
	changeLanguageDirection(t) {
		const n = this
		;(n.rtl && t === 'rtl') ||
			(!n.rtl && t === 'ltr') ||
			((n.rtl = t === 'rtl'),
			(n.rtlTranslate = n.params.direction === 'horizontal' && n.rtl),
			n.rtl
				? (n.el.classList.add(`${n.params.containerModifierClass}rtl`), (n.el.dir = 'rtl'))
				: (n.el.classList.remove(`${n.params.containerModifierClass}rtl`), (n.el.dir = 'ltr')),
			n.update())
	}
	mount(t) {
		const n = this
		if (n.mounted) return !0
		let r = t || n.params.el
		if ((typeof r == 'string' && (r = document.querySelector(r)), !r)) return !1
		;(r.swiper = n),
			r.parentNode && r.parentNode.host && r.parentNode.host.nodeName === 'SWIPER-CONTAINER' && (n.isElement = !0)
		const i = () => `.${(n.params.wrapperClass || '').trim().split(' ').join('.')}`
		let o = r && r.shadowRoot && r.shadowRoot.querySelector ? r.shadowRoot.querySelector(i()) : en(r, i())[0]
		return (
			!o &&
				n.params.createElements &&
				((o = Wo('div', n.params.wrapperClass)),
				r.append(o),
				en(r, `.${n.params.slideClass}`).forEach((a) => {
					o.append(a)
				})),
			Object.assign(n, {
				el: r,
				wrapperEl: o,
				slidesEl: n.isElement && !r.parentNode.host.slideSlots ? r.parentNode.host : o,
				hostEl: n.isElement ? r.parentNode.host : r,
				mounted: !0,
				rtl: r.dir.toLowerCase() === 'rtl' || Vn(r, 'direction') === 'rtl',
				rtlTranslate:
					n.params.direction === 'horizontal' && (r.dir.toLowerCase() === 'rtl' || Vn(r, 'direction') === 'rtl'),
				wrongRTL: Vn(o, 'display') === '-webkit-box',
			}),
			!0
		)
	}
	init(t) {
		const n = this
		if (n.initialized || n.mount(t) === !1) return n
		n.emit('beforeInit'),
			n.params.breakpoints && n.setBreakpoint(),
			n.addClasses(),
			n.updateSize(),
			n.updateSlides(),
			n.params.watchOverflow && n.checkOverflow(),
			n.params.grabCursor && n.enabled && n.setGrabCursor(),
			n.params.loop && n.virtual && n.params.virtual.enabled
				? n.slideTo(n.params.initialSlide + n.virtual.slidesBefore, 0, n.params.runCallbacksOnInit, !1, !0)
				: n.slideTo(n.params.initialSlide, 0, n.params.runCallbacksOnInit, !1, !0),
			n.params.loop && n.loopCreate(),
			n.attachEvents()
		const i = [...n.el.querySelectorAll('[loading="lazy"]')]
		return (
			n.isElement && i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),
			i.forEach((l) => {
				l.complete
					? ho(n, l)
					: l.addEventListener('load', (o) => {
							ho(n, o.target)
					  })
			}),
			ru(n),
			(n.initialized = !0),
			ru(n),
			n.emit('init'),
			n.emit('afterInit'),
			n
		)
	}
	destroy(t, n) {
		t === void 0 && (t = !0), n === void 0 && (n = !0)
		const r = this,
			{ params: i, el: l, wrapperEl: o, slides: a } = r
		return (
			typeof r.params > 'u' ||
				r.destroyed ||
				(r.emit('beforeDestroy'),
				(r.initialized = !1),
				r.detachEvents(),
				i.loop && r.loopDestroy(),
				n &&
					(r.removeClasses(),
					l.removeAttribute('style'),
					o.removeAttribute('style'),
					a &&
						a.length &&
						a.forEach((s) => {
							s.classList.remove(
								i.slideVisibleClass,
								i.slideFullyVisibleClass,
								i.slideActiveClass,
								i.slideNextClass,
								i.slidePrevClass
							),
								s.removeAttribute('style'),
								s.removeAttribute('data-swiper-slide-index')
						})),
				r.emit('destroy'),
				Object.keys(r.eventsListeners).forEach((s) => {
					r.off(s)
				}),
				t !== !1 && ((r.el.swiper = null), Mx(r)),
				(r.destroyed = !0)),
			null
		)
	}
	static extendDefaults(t) {
		ht(Zs, t)
	}
	static get extendedDefaults() {
		return Zs
	}
	static get defaults() {
		return iu
	}
	static installModule(t) {
		dn.prototype.__modules__ || (dn.prototype.__modules__ = [])
		const n = dn.prototype.__modules__
		typeof t == 'function' && n.indexOf(t) < 0 && n.push(t)
	}
	static use(t) {
		return Array.isArray(t) ? (t.forEach((n) => dn.installModule(n)), dn) : (dn.installModule(t), dn)
	}
}
Object.keys(Js).forEach((e) => {
	Object.keys(Js[e]).forEach((t) => {
		dc.prototype[t] = Js[e][t]
	})
})
dc.use([Qx, qx])
const Em = [
	'eventsPrefix',
	'injectStyles',
	'injectStylesUrls',
	'modules',
	'init',
	'_direction',
	'oneWayMovement',
	'touchEventsTarget',
	'initialSlide',
	'_speed',
	'cssMode',
	'updateOnWindowResize',
	'resizeObserver',
	'nested',
	'focusableElements',
	'_enabled',
	'_width',
	'_height',
	'preventInteractionOnTransition',
	'userAgent',
	'url',
	'_edgeSwipeDetection',
	'_edgeSwipeThreshold',
	'_freeMode',
	'_autoHeight',
	'setWrapperSize',
	'virtualTranslate',
	'_effect',
	'breakpoints',
	'breakpointsBase',
	'_spaceBetween',
	'_slidesPerView',
	'maxBackfaceHiddenSlides',
	'_grid',
	'_slidesPerGroup',
	'_slidesPerGroupSkip',
	'_slidesPerGroupAuto',
	'_centeredSlides',
	'_centeredSlidesBounds',
	'_slidesOffsetBefore',
	'_slidesOffsetAfter',
	'normalizeSlideIndex',
	'_centerInsufficientSlides',
	'_watchOverflow',
	'roundLengths',
	'touchRatio',
	'touchAngle',
	'simulateTouch',
	'_shortSwipes',
	'_longSwipes',
	'longSwipesRatio',
	'longSwipesMs',
	'_followFinger',
	'allowTouchMove',
	'_threshold',
	'touchMoveStopPropagation',
	'touchStartPreventDefault',
	'touchStartForcePreventDefault',
	'touchReleaseOnEdges',
	'uniqueNavElements',
	'_resistance',
	'_resistanceRatio',
	'_watchSlidesProgress',
	'_grabCursor',
	'preventClicks',
	'preventClicksPropagation',
	'_slideToClickedSlide',
	'_loop',
	'loopAdditionalSlides',
	'loopAddBlankSlides',
	'loopPreventsSliding',
	'_rewind',
	'_allowSlidePrev',
	'_allowSlideNext',
	'_swipeHandler',
	'_noSwiping',
	'noSwipingClass',
	'noSwipingSelector',
	'passiveListeners',
	'containerModifierClass',
	'slideClass',
	'slideActiveClass',
	'slideVisibleClass',
	'slideFullyVisibleClass',
	'slideNextClass',
	'slidePrevClass',
	'slideBlankClass',
	'wrapperClass',
	'lazyPreloaderClass',
	'lazyPreloadPrevNext',
	'runCallbacksOnInit',
	'observer',
	'observeParents',
	'observeSlideChildren',
	'a11y',
	'_autoplay',
	'_controller',
	'coverflowEffect',
	'cubeEffect',
	'fadeEffect',
	'flipEffect',
	'creativeEffect',
	'cardsEffect',
	'hashNavigation',
	'history',
	'keyboard',
	'mousewheel',
	'_navigation',
	'_pagination',
	'parallax',
	'_scrollbar',
	'_thumbs',
	'virtual',
	'zoom',
	'control',
]
function br(e) {
	return (
		typeof e == 'object' &&
		e !== null &&
		e.constructor &&
		Object.prototype.toString.call(e).slice(8, -1) === 'Object' &&
		!e.__swiper__
	)
}
function oi(e, t) {
	const n = ['__proto__', 'constructor', 'prototype']
	Object.keys(t)
		.filter((r) => n.indexOf(r) < 0)
		.forEach((r) => {
			typeof e[r] > 'u'
				? (e[r] = t[r])
				: br(t[r]) && br(e[r]) && Object.keys(t[r]).length > 0
				? t[r].__swiper__
					? (e[r] = t[r])
					: oi(e[r], t[r])
				: (e[r] = t[r])
		})
}
function Cm(e) {
	return e === void 0 && (e = {}), e.navigation && typeof e.navigation.nextEl > 'u' && typeof e.navigation.prevEl > 'u'
}
function Tm(e) {
	return e === void 0 && (e = {}), e.pagination && typeof e.pagination.el > 'u'
}
function km(e) {
	return e === void 0 && (e = {}), e.scrollbar && typeof e.scrollbar.el > 'u'
}
function Pm(e) {
	e === void 0 && (e = '')
	const t = e
			.split(' ')
			.map((r) => r.trim())
			.filter((r) => !!r),
		n = []
	return (
		t.forEach((r) => {
			n.indexOf(r) < 0 && n.push(r)
		}),
		n.join(' ')
	)
}
function n1(e) {
	return e === void 0 && (e = ''), e ? (e.includes('swiper-wrapper') ? e : `swiper-wrapper ${e}`) : 'swiper-wrapper'
}
function r1(e) {
	let {
		swiper: t,
		slides: n,
		passedParams: r,
		changedParams: i,
		nextEl: l,
		prevEl: o,
		scrollbarEl: a,
		paginationEl: s,
	} = e
	const u = i.filter((_) => _ !== 'children' && _ !== 'direction' && _ !== 'wrapperClass'),
		{ params: c, pagination: p, navigation: m, scrollbar: g, virtual: y, thumbs: v } = t
	let E, h, d, f, w, C, S, b
	i.includes('thumbs') && r.thumbs && r.thumbs.swiper && c.thumbs && !c.thumbs.swiper && (E = !0),
		i.includes('controller') &&
			r.controller &&
			r.controller.control &&
			c.controller &&
			!c.controller.control &&
			(h = !0),
		i.includes('pagination') &&
			r.pagination &&
			(r.pagination.el || s) &&
			(c.pagination || c.pagination === !1) &&
			p &&
			!p.el &&
			(d = !0),
		i.includes('scrollbar') &&
			r.scrollbar &&
			(r.scrollbar.el || a) &&
			(c.scrollbar || c.scrollbar === !1) &&
			g &&
			!g.el &&
			(f = !0),
		i.includes('navigation') &&
			r.navigation &&
			(r.navigation.prevEl || o) &&
			(r.navigation.nextEl || l) &&
			(c.navigation || c.navigation === !1) &&
			m &&
			!m.prevEl &&
			!m.nextEl &&
			(w = !0)
	const N = (_) => {
		t[_] &&
			(t[_].destroy(),
			_ === 'navigation'
				? (t.isElement && (t[_].prevEl.remove(), t[_].nextEl.remove()),
				  (c[_].prevEl = void 0),
				  (c[_].nextEl = void 0),
				  (t[_].prevEl = void 0),
				  (t[_].nextEl = void 0))
				: (t.isElement && t[_].el.remove(), (c[_].el = void 0), (t[_].el = void 0)))
	}
	i.includes('loop') && t.isElement && (c.loop && !r.loop ? (C = !0) : !c.loop && r.loop ? (S = !0) : (b = !0)),
		u.forEach((_) => {
			if (br(c[_]) && br(r[_]))
				Object.assign(c[_], r[_]),
					(_ === 'navigation' || _ === 'pagination' || _ === 'scrollbar') && 'enabled' in r[_] && !r[_].enabled && N(_)
			else {
				const L = r[_]
				;(L === !0 || L === !1) && (_ === 'navigation' || _ === 'pagination' || _ === 'scrollbar')
					? L === !1 && N(_)
					: (c[_] = r[_])
			}
		}),
		u.includes('controller') &&
			!h &&
			t.controller &&
			t.controller.control &&
			c.controller &&
			c.controller.control &&
			(t.controller.control = c.controller.control),
		i.includes('children') && n && y && c.virtual.enabled
			? ((y.slides = n), y.update(!0))
			: i.includes('virtual') && y && c.virtual.enabled && (n && (y.slides = n), y.update(!0)),
		i.includes('children') && n && c.loop && (b = !0),
		E && v.init() && v.update(!0),
		h && (t.controller.control = c.controller.control),
		d &&
			(t.isElement &&
				(!s || typeof s == 'string') &&
				((s = document.createElement('div')),
				s.classList.add('swiper-pagination'),
				s.part.add('pagination'),
				t.el.appendChild(s)),
			s && (c.pagination.el = s),
			p.init(),
			p.render(),
			p.update()),
		f &&
			(t.isElement &&
				(!a || typeof a == 'string') &&
				((a = document.createElement('div')),
				a.classList.add('swiper-scrollbar'),
				a.part.add('scrollbar'),
				t.el.appendChild(a)),
			a && (c.scrollbar.el = a),
			g.init(),
			g.updateSize(),
			g.setTranslate()),
		w &&
			(t.isElement &&
				((!l || typeof l == 'string') &&
					((l = document.createElement('div')),
					l.classList.add('swiper-button-next'),
					(l.innerHTML = t.hostEl.constructor.nextButtonSvg),
					l.part.add('button-next'),
					t.el.appendChild(l)),
				(!o || typeof o == 'string') &&
					((o = document.createElement('div')),
					o.classList.add('swiper-button-prev'),
					(o.innerHTML = t.hostEl.constructor.prevButtonSvg),
					o.part.add('button-prev'),
					t.el.appendChild(o))),
			l && (c.navigation.nextEl = l),
			o && (c.navigation.prevEl = o),
			m.init(),
			m.update()),
		i.includes('allowSlideNext') && (t.allowSlideNext = r.allowSlideNext),
		i.includes('allowSlidePrev') && (t.allowSlidePrev = r.allowSlidePrev),
		i.includes('direction') && t.changeDirection(r.direction, !1),
		(C || b) && t.loopDestroy(),
		(S || b) && t.loopCreate(),
		t.update()
}
function i1(e, t) {
	e === void 0 && (e = {}), t === void 0 && (t = !0)
	const n = { on: {} },
		r = {},
		i = {}
	oi(n, iu), (n._emitClasses = !0), (n.init = !1)
	const l = {},
		o = Em.map((s) => s.replace(/_/, '')),
		a = Object.assign({}, e)
	return (
		Object.keys(a).forEach((s) => {
			typeof e[s] > 'u' ||
				(o.indexOf(s) >= 0
					? br(e[s])
						? ((n[s] = {}), (i[s] = {}), oi(n[s], e[s]), oi(i[s], e[s]))
						: ((n[s] = e[s]), (i[s] = e[s]))
					: s.search(/on[A-Z]/) === 0 && typeof e[s] == 'function'
					? t
						? (r[`${s[2].toLowerCase()}${s.substr(3)}`] = e[s])
						: (n.on[`${s[2].toLowerCase()}${s.substr(3)}`] = e[s])
					: (l[s] = e[s]))
		}),
		['navigation', 'pagination', 'scrollbar'].forEach((s) => {
			n[s] === !0 && (n[s] = {}), n[s] === !1 && delete n[s]
		}),
		{ params: n, passedParams: i, rest: l, events: r }
	)
}
function l1(e, t) {
	let { el: n, nextEl: r, prevEl: i, paginationEl: l, scrollbarEl: o, swiper: a } = e
	Cm(t) &&
		r &&
		i &&
		((a.params.navigation.nextEl = r),
		(a.originalParams.navigation.nextEl = r),
		(a.params.navigation.prevEl = i),
		(a.originalParams.navigation.prevEl = i)),
		Tm(t) && l && ((a.params.pagination.el = l), (a.originalParams.pagination.el = l)),
		km(t) && o && ((a.params.scrollbar.el = o), (a.originalParams.scrollbar.el = o)),
		a.init(n)
}
function o1(e, t, n, r, i) {
	const l = []
	if (!t) return l
	const o = (s) => {
		l.indexOf(s) < 0 && l.push(s)
	}
	if (n && r) {
		const s = r.map(i),
			u = n.map(i)
		s.join('') !== u.join('') && o('children'), r.length !== n.length && o('children')
	}
	return (
		Em.filter((s) => s[0] === '_')
			.map((s) => s.replace(/_/, ''))
			.forEach((s) => {
				if (s in e && s in t)
					if (br(e[s]) && br(t[s])) {
						const u = Object.keys(e[s]),
							c = Object.keys(t[s])
						u.length !== c.length
							? o(s)
							: (u.forEach((p) => {
									e[s][p] !== t[s][p] && o(s)
							  }),
							  c.forEach((p) => {
									e[s][p] !== t[s][p] && o(s)
							  }))
					} else e[s] !== t[s] && o(s)
			}),
		l
	)
}
const s1 = (e) => {
	!e ||
		e.destroyed ||
		!e.params.virtual ||
		(e.params.virtual && !e.params.virtual.enabled) ||
		(e.updateSlides(),
		e.updateProgress(),
		e.updateSlidesClasses(),
		e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
}
function Ko() {
	return (
		(Ko = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t]
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
			  }),
		Ko.apply(this, arguments)
	)
}
function _m(e) {
	return e.type && e.type.displayName && e.type.displayName.includes('SwiperSlide')
}
function bm(e) {
	const t = []
	return (
		q.Children.toArray(e).forEach((n) => {
			_m(n) ? t.push(n) : n.props && n.props.children && bm(n.props.children).forEach((r) => t.push(r))
		}),
		t
	)
}
function a1(e) {
	const t = [],
		n = { 'container-start': [], 'container-end': [], 'wrapper-start': [], 'wrapper-end': [] }
	return (
		q.Children.toArray(e).forEach((r) => {
			if (_m(r)) t.push(r)
			else if (r.props && r.props.slot && n[r.props.slot]) n[r.props.slot].push(r)
			else if (r.props && r.props.children) {
				const i = bm(r.props.children)
				i.length > 0 ? i.forEach((l) => t.push(l)) : n['container-end'].push(r)
			} else n['container-end'].push(r)
		}),
		{ slides: t, slots: n }
	)
}
function u1(e, t, n) {
	if (!n) return null
	const r = (c) => {
			let p = c
			return c < 0 ? (p = t.length + c) : p >= t.length && (p = p - t.length), p
		},
		i = e.isHorizontal() ? { [e.rtlTranslate ? 'right' : 'left']: `${n.offset}px` } : { top: `${n.offset}px` },
		{ from: l, to: o } = n,
		a = e.params.loop ? -t.length : 0,
		s = e.params.loop ? t.length * 2 : t.length,
		u = []
	for (let c = a; c < s; c += 1) c >= l && c <= o && u.push(t[r(c)])
	return u.map((c, p) => q.cloneElement(c, { swiper: e, style: i, key: `slide-${p}` }))
}
function Qi(e, t) {
	return typeof window > 'u' ? P.useEffect(e, t) : P.useLayoutEffect(e, t)
}
const hf = P.createContext(null),
	c1 = P.createContext(null),
	Lm = P.forwardRef(function (e, t) {
		let { className: n, tag: r = 'div', wrapperTag: i = 'div', children: l, onSwiper: o, ...a } = e === void 0 ? {} : e,
			s = !1
		const [u, c] = P.useState('swiper'),
			[p, m] = P.useState(null),
			[g, y] = P.useState(!1),
			v = P.useRef(!1),
			E = P.useRef(null),
			h = P.useRef(null),
			d = P.useRef(null),
			f = P.useRef(null),
			w = P.useRef(null),
			C = P.useRef(null),
			S = P.useRef(null),
			b = P.useRef(null),
			{ params: N, passedParams: _, rest: L, events: j } = i1(a),
			{ slides: I, slots: O } = a1(l),
			F = () => {
				y(!g)
			}
		Object.assign(N.on, {
			_containerClasses(z, V) {
				c(V)
			},
		})
		const H = () => {
			Object.assign(N.on, j), (s = !0)
			const z = { ...N }
			if ((delete z.wrapperClass, (h.current = new dc(z)), h.current.virtual && h.current.params.virtual.enabled)) {
				h.current.virtual.slides = I
				const V = { cache: !1, slides: I, renderExternal: m, renderExternalUpdate: !1 }
				oi(h.current.params.virtual, V), oi(h.current.originalParams.virtual, V)
			}
		}
		E.current || H(), h.current && h.current.on('_beforeBreakpoint', F)
		const Y = () => {
				s ||
					!j ||
					!h.current ||
					Object.keys(j).forEach((z) => {
						h.current.on(z, j[z])
					})
			},
			X = () => {
				!j ||
					!h.current ||
					Object.keys(j).forEach((z) => {
						h.current.off(z, j[z])
					})
			}
		P.useEffect(() => () => {
			h.current && h.current.off('_beforeBreakpoint', F)
		}),
			P.useEffect(() => {
				!v.current && h.current && (h.current.emitSlidesClasses(), (v.current = !0))
			}),
			Qi(() => {
				if ((t && (t.current = E.current), !!E.current))
					return (
						h.current.destroyed && H(),
						l1(
							{
								el: E.current,
								nextEl: w.current,
								prevEl: C.current,
								paginationEl: S.current,
								scrollbarEl: b.current,
								swiper: h.current,
							},
							N
						),
						o && o(h.current),
						() => {
							h.current && !h.current.destroyed && h.current.destroy(!0, !1)
						}
					)
			}, []),
			Qi(() => {
				Y()
				const z = o1(_, d.current, I, f.current, (V) => V.key)
				return (
					(d.current = _),
					(f.current = I),
					z.length &&
						h.current &&
						!h.current.destroyed &&
						r1({
							swiper: h.current,
							slides: I,
							passedParams: _,
							changedParams: z,
							nextEl: w.current,
							prevEl: C.current,
							scrollbarEl: b.current,
							paginationEl: S.current,
						}),
					() => {
						X()
					}
				)
			}),
			Qi(() => {
				s1(h.current)
			}, [p])
		function D() {
			return N.virtual
				? u1(h.current, I, p)
				: I.map((z, V) => q.cloneElement(z, { swiper: h.current, swiperSlideIndex: V }))
		}
		return q.createElement(
			r,
			Ko({ ref: E, className: Pm(`${u}${n ? ` ${n}` : ''}`) }, L),
			q.createElement(
				c1.Provider,
				{ value: h.current },
				O['container-start'],
				q.createElement(i, { className: n1(N.wrapperClass) }, O['wrapper-start'], D(), O['wrapper-end']),
				Cm(N) &&
					q.createElement(
						q.Fragment,
						null,
						q.createElement('div', { ref: C, className: 'swiper-button-prev' }),
						q.createElement('div', { ref: w, className: 'swiper-button-next' })
					),
				km(N) && q.createElement('div', { ref: b, className: 'swiper-scrollbar' }),
				Tm(N) && q.createElement('div', { ref: S, className: 'swiper-pagination' }),
				O['container-end']
			)
		)
	})
Lm.displayName = 'Swiper'
const Nm = P.forwardRef(function (e, t) {
	let {
		tag: n = 'div',
		children: r,
		className: i = '',
		swiper: l,
		zoom: o,
		lazy: a,
		virtualIndex: s,
		swiperSlideIndex: u,
		...c
	} = e === void 0 ? {} : e
	const p = P.useRef(null),
		[m, g] = P.useState('swiper-slide'),
		[y, v] = P.useState(!1)
	function E(w, C, S) {
		C === p.current && g(S)
	}
	Qi(() => {
		if ((typeof u < 'u' && (p.current.swiperSlideIndex = u), t && (t.current = p.current), !(!p.current || !l))) {
			if (l.destroyed) {
				m !== 'swiper-slide' && g('swiper-slide')
				return
			}
			return (
				l.on('_slideClass', E),
				() => {
					l && l.off('_slideClass', E)
				}
			)
		}
	}),
		Qi(() => {
			l && p.current && !l.destroyed && g(l.getSlideClasses(p.current))
		}, [l])
	const h = {
			isActive: m.indexOf('swiper-slide-active') >= 0,
			isVisible: m.indexOf('swiper-slide-visible') >= 0,
			isPrev: m.indexOf('swiper-slide-prev') >= 0,
			isNext: m.indexOf('swiper-slide-next') >= 0,
		},
		d = () => (typeof r == 'function' ? r(h) : r),
		f = () => {
			v(!0)
		}
	return q.createElement(
		n,
		Ko({ ref: p, className: Pm(`${m}${i ? ` ${i}` : ''}`), 'data-swiper-slide-index': s, onLoad: f }, c),
		o &&
			q.createElement(
				hf.Provider,
				{ value: h },
				q.createElement(
					'div',
					{ className: 'swiper-zoom-container', 'data-swiper-zoom': typeof o == 'number' ? o : void 0 },
					d(),
					a && !y && q.createElement('div', { className: 'swiper-lazy-preloader' })
				)
			),
		!o &&
			q.createElement(
				hf.Provider,
				{ value: h },
				d(),
				a && !y && q.createElement('div', { className: 'swiper-lazy-preloader' })
			)
	)
})
Nm.displayName = 'SwiperSlide'
const d1 = () => {
		const e = {
			前端開發: [
				{ name: 'HTML5', icon: 'https://img.icons8.com/color/100/html-5--v1.png', desc: '' },
				{ name: 'CSS3', icon: 'https://img.icons8.com/color/100/css3.png', desc: '' },
				{
					name: 'JavaScript',
					icon: 'https://img.icons8.com/color/100/javascript--v1.png',
					desc: '熟悉基本語法 (ES6+),AJAX 串接第三方 API,運用 Apache ECharts 視覺化圖表庫',
				},
				{
					name: 'React.js',
					icon: 'https://img.icons8.com/color/100/react-native.png',
					desc: '熟悉使用 React.js 開發網站, React Router v6 管理路由',
				},
				{
					name: 'Redux',
					icon: 'https://img.icons8.com/color/100/redux.png',
					desc: '略懂基本概念,略懂 RTK 基本使用方式',
				},
				{
					name: 'Next.js',
					icon: 'https://img.icons8.com/color/100/nextjs.png',
					desc: '可用 Next.js 開發網站,使用過 NextAuth 管理登入狀態、實作第三方登入',
				},
				{
					name: 'TypeScript',
					icon: 'https://img.icons8.com/color/100/typescript.png',
					desc: '了解基本語法,了解如何運用型別化名、介面',
				},
				{
					name: 'Sass',
					icon: 'https://img.icons8.com/color/100/sass.png',
					desc: '了解基本使用方式 (變數、巢狀、混入、繼承)',
				},
				{ name: 'Bootstrap', icon: 'https://img.icons8.com/color/100/bootstrap--v2.png', desc: '略懂基本使用方式' },
				{
					name: 'Tailwind CSS',
					icon: 'https://img.icons8.com/color/100/tailwindcss.png',
					desc: '熟悉 Tailwind CSS,了解如何自訂樣式,切版 RWD 網站',
				},
				{ name: 'Material UI', icon: 'assets/icons/materialui.png', desc: '' },
			],
			後端開發: [
				{ name: 'Node.js', icon: 'https://img.icons8.com/color/100/nodejs.png', desc: '' },
				{
					name: 'Express.js',
					icon: 'https://img.icons8.com/color/100/express-js.png',
					desc: '了解如何創建基本路由,搭配 Mongoose 連至 MongoDB 以建立模型',
				},
				{ name: 'MySQL', icon: 'https://img.icons8.com/color/100/mysql-logo.png', desc: '熟悉查詢語法' },
				{ name: 'MongoDB', icon: 'https://img.icons8.com/color/100/mongodb.png', desc: '略懂查詢語法' },
				{ name: 'Mongoose ODM', icon: 'https://img.icons8.com/color/100/mongoose.png', desc: '' },
			],
			程式語言: [
				{ name: 'JavaScript', icon: 'https://img.icons8.com/color/100/javascript--v1.png', desc: '' },
				{ name: 'TypeScript', icon: 'https://img.icons8.com/color/100/typescript.png', desc: '' },
				{
					name: 'Java',
					icon: 'https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png',
					desc: '熟悉​基本語法,具有簡易視窗程式的開發經驗 (Java Swing)',
				},
				{
					name: 'Python',
					icon: 'https://img.icons8.com/color/48/python--v1.png',
					desc: '熟悉基本語法,具有基礎爬蟲的經驗,使用過 BeautifulSoup、Selenium 套件',
				},
			],
			其他工具: [
				{
					name: 'GitHub',
					icon: 'https://img.icons8.com/fluency/100/github.png',
					desc: '使用 GitHub Pages 部署靜態網頁',
				},
				{ name: 'Git', icon: 'https://img.icons8.com/color/100/git.png', desc: '熟悉基本指令' },
				{
					name: 'Postman',
					icon: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/100/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png',
					desc: '了解如何測試 API',
				},
				{ name: 'Figma', icon: 'https://img.icons8.com/color/100/figma--v1.png', desc: '依照 Figma 進行切版' },
				{ name: 'Adobe XD', icon: 'https://img.icons8.com/color/100/adobe-xd--v1.png', desc: '依照 Adobe XD 進行切版' },
				{
					name: 'WordPress',
					icon: 'https://img.icons8.com/fluency/100/wordpress.png',
					desc: '有自己的 WordPress 部落格，使用 Elementor 撰寫文章。',
				},
			],
		}
		return x.jsxs('div', {
			id: 'skill',
			className: 'pt-16',
			children: [
				x.jsx('h2', { className: 'pb-1 mx-auto mb-4 border-b-4 border-pink-500 w-fit', children: '專業技能' }),
				x.jsx('p', {
					className: 'font-light text-center',
					children: '以下為我目前所學習的技能，並且持續學習中，未來會持續更新。',
				}),
				x.jsx('p', { className: 'p-1 text-xs text-center', children: '(懸浮於圖示上可查看我於該技能的程度說明)' }),
				x.jsx('section', {
					className: 'p-4 mt-8 bg-pink-300',
					children: x.jsx(Lm, {
						cssMode: !0,
						navigation: !0,
						pagination: !0,
						mousewheel: !0,
						keyboard: !0,
						loop: !0,
						style: {
							'--swiper-navigation-color': '#FF7EA1',
							'--swiper-pagination-color': '#FF7EA1',
							'--swiper-navigation-size': '1.25rem',
						},
						className: 'max-w-screen-md bg-white rounded-xl',
						modules: [Vx, Hx, Ux, Bx],
						children: ['前端開發', '後端開發', '程式語言', '其他工具'].map((t, n) =>
							x.jsx(
								Nm,
								{
									className: 'px-8 pt-3 pb-12',
									children: x.jsx(f1, {
										title: t,
										children: e[t].map((r, i) =>
											x.jsxs(
												'li',
												{
													className: `${r.name.length > 10 ? 'w-26' : 'w-20'} space-y-1 text-center`,
													children: [
														x.jsx('img', {
															'data-tooltip-id': r.name,
															width: '60',
															height: '60',
															src: r.icon,
															className: 'mx-auto',
															alt: r.name,
														}),
														x.jsx(Rx, {
															id: r.name,
															content:
																r.desc !== '' &&
																r.desc
																	.split(',')
																	.map((l, o) =>
																		x.jsx(
																			'li',
																			{
																				className: `text-left ${r.desc.includes(',') ? 'list-disc ml-2' : ''}`,
																				children: l,
																			},
																			o
																		)
																	),
															place: 'bottom',
															style: { backgroundColor: '#333333', color: '#fff' },
														}),
														x.jsx('p', { children: r.name }),
													],
												},
												i
											)
										),
									}),
								},
								n
							)
						),
					}),
				}),
			],
		})
	},
	f1 = ({ title: e, children: t }) =>
		x.jsxs(x.Fragment, {
			children: [
				x.jsx('h3', { className: 'px-4 mx-auto mb-5 text-white bg-pink-600 rounded-full w-fit', children: e }),
				x.jsx('ul', { className: 'flex flex-wrap justify-center gap-5', children: t }),
			],
		}),
	p1 = () => {
		const { hash: e, key: t } = kl()
		return (
			P.useEffect(() => {
				if (e) {
					const n = document.getElementById(e.substring(1))
					n == null || n.scrollIntoView()
				}
			}, [t, e]),
			x.jsxs(rm, {
				children: [
					x.jsxs('div', {
						className:
							'flex py-20 lg:py-24 items-center gap-8 lg:gap-20 justify-center flex-col lg:flex-row ml-0 lg:ml-20 rounded-s-[5rem] bg-pink-100',
						children: [
							x.jsxs('div', {
								className: 'flex flex-col items-center max-w-md lg:items-start',
								children: [
									x.jsx('p', {
										className:
											'px-3 text-sm text-white bg-pink-500 border-2 border-pink-500 lg:mx-0 rounded-t-xl rounded-br-xl w-fit',
										children: '嗨，我是',
									}),
									x.jsxs('div', {
										className: 'mt-2 space-y-6 text-center lg:text-left',
										children: [
											x.jsx('h1', { className: 'font-rubikDoodleShadow', children: 'Molly Su' }),
											x.jsx('p', {
												className: 'px-4 text-sm leading-6 xs:px-0 opacity-80',
												children:
													'一位熱愛前端的學生，目前就讀於國立臺北科技大學資訊與財金管理系，熱衷於學習新技術，並且希望將所學的知識實際應用在專案中。',
											}),
										],
									}),
									x.jsxs(Fi, {
										to: '/about',
										className:
											'flex lg:ml-auto items-center gap-1 mt-3 mb-5 text-sm font-medium text-pink-500 border-b-[1.5px] border-pink-100 hover:border-pink-400',
										children: [
											'了解更多',
											x.jsx('svg', {
												xmlns: 'http://www.w3.org/2000/svg',
												width: '12',
												height: '12',
												viewBox: '0 0 24 24',
												fill: '#FF9CB6',
												children: x.jsx('path', { d: 'M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' }),
											}),
										],
									}),
									x.jsxs('div', {
										children: [
											x.jsx('a', {
												href: 'mailto:mollydcxxiii@gmail.com',
												className: 'relative z-10 text-lg',
												children: 'mollydcxxiii@gmail.com',
											}),
											x.jsx('hr', { className: 'relative w-full border-4 border-pink-300 bottom-2' }),
										],
									}),
								],
							}),
							x.jsx('img', { src: 'assets/images/banner.png', className: 'w-72', alt: 'banner' }),
						],
					}),
					x.jsx(d1, {}),
					x.jsx(Vw, {}),
					x.jsx(Fw, {}),
					x.jsx(zw, {}),
				],
			})
		)
	},
	h1 = () =>
		x.jsxs(rm, {
			children: [
				x.jsxs('div', {
					className: 'flex flex-col items-center justify-center gap-8 py-12 bg-pink-100 lg:gap-16 lg:flex-row',
					children: [
						x.jsx('img', {
							src: 'assets/images/molly.jpg',
							className:
								'object-cover rounded w-96 h-80 hover:origin-center hover:-rotate-3 hover:duration-300 hover:ease-linear hover:scale-105',
							alt: 'banner',
						}),
						x.jsxs('div', {
							className: 'flex flex-col items-center max-w-md lg:items-start',
							children: [
								x.jsx('p', {
									className:
										'px-3 text-sm text-white bg-pink-500 border-2 border-pink-500 lg:mx-0 rounded-t-xl rounded-br-xl w-fit',
									children: '嗨，我是',
								}),
								x.jsxs('div', {
									className: 'mt-2 mb-5 space-y-6 text-center lg:text-left',
									children: [
										x.jsx('h1', { className: 'font-rubikDoodleShadow', children: 'Molly Su' }),
										x.jsxs('p', {
											className: 'px-4 text-sm leading-6 xs:px-0 opacity-80',
											children: [
												'2002 年出生於臺灣新北，目前就讀於國立臺北科技大學資訊與財金管理系。高中時接觸了 Visual Basic，發現了對程式設計的熱忱，從而開啟了我的程式之路；在大學時期，我開始接觸前端，',
												x.jsx('span', {
													className: 'text-pink-700',
													children: '能夠快速地將自己的想法實現在畫面上，讓我對前端產生了濃厚的興趣',
												}),
												'，並且希望能夠在該領域中不斷精進自己，也期許自己能夠成為一名優秀的前端工程師。',
											],
										}),
									],
								}),
								x.jsxs('div', {
									children: [
										x.jsx('a', {
											href: 'mailto:mollydcxxiii@gmail.com',
											className: 'relative z-10 text-lg',
											children: 'mollydcxxiii@gmail.com',
										}),
										x.jsx('hr', { className: 'relative w-full border-4 border-pink-300 bottom-2' }),
									],
								}),
							],
						}),
					],
				}),
				x.jsxs('div', {
					className: 'max-w-4xl px-4 py-12 mx-auto space-y-12 lg:px-0',
					children: [
						x.jsxs('section', {
							children: [
								x.jsx('h2', { className: 'pb-1 mb-5 border-b-4 border-pink-500 w-fit', children: '性格特質' }),
								x.jsxs('div', {
									className: 'space-y-3',
									children: [
										x.jsx('h3', {
											className: 'text-xl font-bold tracking-wide text-pink-600',
											children: 'ISTJ（代表動物：河狸）',
										}),
										x.jsxs('div', {
											className: 'flex flex-col gap-2 sm:gap-4 sm:items-center sm:flex-row',
											children: [
												x.jsx('img', {
													src: 'assets/images/beaver.png',
													className: 'object-contain w-36',
													alt: '16personalities',
												}),
												x.jsxs('ul', {
													className: 'pl-5 leading-9 list-disc',
													children: [
														x.jsx('li', { children: '責任感極強的使命必達型工作者' }),
														x.jsx('li', { children: '對任何事都認真而專注，擁有縝密、嚴謹的工作思維。' }),
														x.jsx('li', { children: '善於訂定規範、整理 + 優化的雙軌式工作風格' }),
													],
												}),
											],
										}),
										x.jsx('ul', {
											className: 'flex flex-wrap items-center tracking-wide gap-2 pt-2 text-[0.8rem] font-light',
											children: ['熱衷學習', '喜歡嘗試', '善於獨立作業', '坦率', '耐心', '慢熱'].map((e, t) =>
												x.jsx('li', { className: 'px-3.5 py-0.5 rounded-full bg-pink-200', children: e }, t)
											),
										}),
									],
								}),
							],
						}),
						x.jsxs('section', {
							children: [
								x.jsx('h2', { className: 'pb-1 mb-5 border-b-4 border-pink-500 w-fit', children: '學習歷程' }),
								x.jsxs('div', {
									className: 'flex flex-col-reverse justify-between gap-2 mb-6 xs:gap-0 xs:flex-row',
									children: [
										x.jsxs('div', {
											className: 'flex gap-3',
											children: [
												x.jsx('img', { src: 'assets/images/ntut.jpg', className: 'object-cover w-16', alt: 'ntut' }),
												x.jsxs('div', {
													children: [
														x.jsx('h3', { children: '國立臺北科技大學' }),
														x.jsx('p', { className: 'text-sm opacity-80', children: '資訊與財金管理系' }),
													],
												}),
											],
										}),
										x.jsx('p', { className: 'text-sm tracking-wide opacity-60', children: '2020.09 - 2024.06' }),
									],
								}),
								x.jsxs('div', {
									className: 'flex flex-col-reverse justify-between gap-2 xs:flex-row xs:gap-0',
									children: [
										x.jsxs('div', {
											className: 'flex gap-3',
											children: [
												x.jsx('img', { src: 'assets/images/slhs.jpg', className: 'object-cover w-16', alt: 'slhs' }),
												x.jsxs('div', {
													children: [
														x.jsx('h3', { children: '臺北市立士林高級商業職業學校' }),
														x.jsx('p', { className: 'text-sm opacity-80', children: '資料處理科' }),
													],
												}),
											],
										}),
										x.jsx('p', { className: 'text-sm tracking-wide opacity-60', children: '2017.09 - 2020.06' }),
									],
								}),
							],
						}),
						x.jsxs('section', {
							children: [
								x.jsx('h2', { className: 'pb-1 mb-3 border-b-4 border-pink-500 w-fit', children: '日常興趣' }),
								x.jsx('p', {
									className: 'mb-5 text-sm leading-6 opacity-80',
									children: '閒暇之餘，我也會從事一些其他活動，例如：',
								}),
								x.jsxs('div', {
									className: 'grid w-full grid-cols-2 gap-4 lg:grid-cols-3',
									children: [
										x.jsxs('div', {
											className: 'bg-white rounded-b-lg shadow-md lg:w-72',
											children: [
												x.jsx('img', {
													src: 'assets/images/paint.png',
													className: 'object-cover object-center w-full h-40 rounded-t-lg md:h-48',
													alt: 'paint',
												}),
												x.jsx('p', { className: 'p-2 text-center', children: '繪畫' }),
											],
										}),
										x.jsxs('div', {
											className: 'bg-white rounded-b-lg shadow-md lg:w-72',
											children: [
												x.jsx('img', {
													src: 'assets/images/digitalnotebook.png',
													className: 'object-cover object-center w-full h-40 md:h-48',
													alt: 'digital-notebook',
												}),
												x.jsx('p', { className: 'p-2 text-center', children: '數位手帳設計' }),
											],
										}),
										x.jsxs('div', {
											className: 'bg-white rounded-b-lg shadow-md lg:w-72',
											children: [
												x.jsx('img', {
													src: 'assets/images/beading.png',
													className: 'object-cover object-center w-full h-40 rounded-t-lg md:h-48',
													alt: 'beading',
												}),
												x.jsx('p', { className: 'p-2 text-center', children: '串珠' }),
											],
										}),
										x.jsxs('div', {
											className: 'bg-white rounded-b-lg shadow-md lg:w-72',
											children: [
												x.jsx('img', {
													src: 'assets/images/food.jpg',
													className: 'object-cover object-center w-full h-40 rounded-t-lg md:h-48',
													alt: 'food',
												}),
												x.jsx('p', { className: 'p-2 text-center', children: '探索美食' }),
											],
										}),
										x.jsxs('div', {
											className: 'bg-white rounded-b-lg shadow-md lg:w-72',
											children: [
												x.jsx('img', {
													src: 'assets/images/bass.jpg',
													className: 'object-cover object-center w-full h-40 rounded-t-lg md:h-48',
													alt: 'bass',
												}),
												x.jsx('p', { className: 'p-2 text-center', children: '貝斯彈奏' }),
											],
										}),
										x.jsxs('div', {
											className: 'bg-white rounded-b-lg shadow-md lg:w-72',
											children: [
												x.jsx('img', {
													src: 'assets/images/lol.jpg',
													className: 'object-cover object-center w-full h-40 rounded-t-lg md:h-48',
													alt: 'lol',
												}),
												x.jsx('p', { className: 'p-2 text-center', children: '觀看電競比賽' }),
											],
										}),
									],
								}),
							],
						}),
					],
				}),
			],
		}),
	m1 = v0(
		[
			{ path: '/', element: x.jsx(p1, {}) },
			{ path: '/about', element: x.jsx(h1, {}) },
		],
		{ basename: '/' }
	)
ea.createRoot(document.getElementById('root')).render(x.jsx(q.StrictMode, { children: x.jsx(P0, { router: m1 }) }))
