'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal=d;
var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};var typeOf=z;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}
});
reactIs_development.AsyncMode;
reactIs_development.ConcurrentMode;
reactIs_development.ContextConsumer;
reactIs_development.ContextProvider;
reactIs_development.Element;
reactIs_development.ForwardRef;
reactIs_development.Fragment;
reactIs_development.Lazy;
reactIs_development.Memo;
reactIs_development.Portal;
reactIs_development.Profiler;
reactIs_development.StrictMode;
reactIs_development.Suspense;
reactIs_development.isAsyncMode;
reactIs_development.isConcurrentMode;
reactIs_development.isContextConsumer;
reactIs_development.isContextProvider;
reactIs_development.isElement;
reactIs_development.isForwardRef;
reactIs_development.isFragment;
reactIs_development.isLazy;
reactIs_development.isMemo;
reactIs_development.isPortal;
reactIs_development.isProfiler;
reactIs_development.isStrictMode;
reactIs_development.isSuspense;
reactIs_development.isValidElementType;
reactIs_development.typeOf;

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret$1 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);

var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = has$1;

  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning$1(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning$1(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has$1(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has$1(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

// Polyfill for creating CustomEvents on IE9/10/11

// code pulled from:
// https://github.com/d4tocchini/customevent-polyfill
// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent#Polyfill

(function() {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    var ce = new window.CustomEvent('test', { cancelable: true });
    ce.preventDefault();
    if (ce.defaultPrevented !== true) {
      // IE has problems with .preventDefault() on custom events
      // http://stackoverflow.com/questions/23349191
      throw new Error('Could not prevent default');
    }
  } catch (e) {
    var CustomEvent = function(event, params) {
      var evt, origPrevent;
      params = params || {};
      params.bubbles = !!params.bubbles;
      params.cancelable = !!params.cancelable;

      evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(
        event,
        params.bubbles,
        params.cancelable,
        params.detail
      );
      origPrevent = evt.preventDefault;
      evt.preventDefault = function() {
        origPrevent.call(this);
        try {
          Object.defineProperty(this, 'defaultPrevented', {
            get: function() {
              return true;
            }
          });
        } catch (e) {
          this.defaultPrevented = true;
        }
      };
      return evt;
    };

    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent; // expose definition to window
  }
})();

(function () {
    var throttle = function (type, name) {
        var running = false;
        var func = function () {
            if (running) {
                return;
            }
            running = true;
            requestAnimationFrame(function () {
                window.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        window.addEventListener(type, func);
    };
    throttle('resize', 'resizeAutoZoom');
})();

var defaultI18n = {
    zoom: 'Automatic zoom',
    originalSize: 'Original size',
    scaleUp: 'Scale up',
    scaleDown: 'Scale down',
    rotateLeft: 'Rotate left',
    rotateRight: 'Rotate right',
    download: 'Download',
    printLabel: 'Print',
};
var I18nContext = React__default['default'].createContext(defaultI18n);

var ZoomSelectBox = (function (_super) {
    __extends(ZoomSelectBox, _super);
    function ZoomSelectBox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.createSelectOptions = function (_a) {
            var originalSize = _a.originalSize, zoom = _a.zoom;
            return [
                {
                    id: 'automated',
                    text: "" + zoom,
                },
                {
                    id: '50-percent',
                    text: '50%',
                    value: 50,
                },
                {
                    id: '75-percent',
                    text: '75%',
                    value: 75,
                },
                {
                    id: 'original',
                    text: originalSize + " (100%)",
                    value: 100,
                },
                {
                    id: '125-percent',
                    text: '125%',
                    value: 125,
                },
                {
                    id: '150-percent',
                    text: '150%',
                    value: 150,
                },
                {
                    id: '200-percent',
                    text: '200%',
                    value: 200,
                },
                {
                    id: '300-percent',
                    text: '300%',
                    value: 300,
                },
                {
                    id: '400-percent',
                    text: '400%',
                    value: 400,
                },
                {
                    id: 'calculated',
                },
            ];
        };
        _this.showCalculatedScale = function (i18nData) {
            var scale = _this.props.scale;
            return _this.createSelectOptions(i18nData).filter(function (option) { return option.value === scale; }).length === 0 && scale % 10 === 0
                ? scale
                : 0;
        };
        return _this;
    }
    ZoomSelectBox.prototype.render = function () {
        var _this = this;
        var _a = this.props, autoZoom = _a.autoZoom, scale = _a.scale, setScale = _a.setScale;
        return (React__default['default'].createElement(I18nContext.Consumer, null, function (i18nData) { return (React__default['default'].createElement("div", { className: "dropdown-toolbar-container" },
            React__default['default'].createElement("span", { className: "dropdown-toolbar" },
                React__default['default'].createElement("select", { value: scale, onChange: function (e) {
                        setScale(parseInt(e.target.value, 10));
                    } }, _this.createSelectOptions(i18nData).map(function (_a) {
                    var id = _a.id, text = _a.text, value = _a.value;
                    switch (id) {
                        case 'calculated':
                            return (React__default['default'].createElement("option", { key: id + "-" + scale, value: _this.showCalculatedScale(i18nData), hidden: true, disabled: true }, scale + "%"));
                        case 'automated':
                            return (autoZoom && (React__default['default'].createElement("option", { key: id + "-" + scale, value: -1 }, text)));
                        default:
                            return (React__default['default'].createElement("option", { key: id, value: value }, text));
                    }
                }))))); }));
    };
    ZoomSelectBox.propTypes = {
        scale: propTypes.number.isRequired,
        setScale: propTypes.func.isRequired,
    };
    return ZoomSelectBox;
}(React.PureComponent));

var PdfControls = function (_a) {
    var autoZoom = _a.autoZoom, downloadBtn = _a.downloadBtn, onDownload = _a.onDownload, onPrint = _a.onPrint, onZoomIn = _a.onZoomIn, onZoomOut = _a.onZoomOut, onRotateRight = _a.onRotateRight, onRotateLeft = _a.onRotateLeft, scale = _a.scale, setScale = _a.setScale;
    return (React__default['default'].createElement("div", { className: "renderer-controls" },
        React__default['default'].createElement("div", null,
            React__default['default'].createElement(I18nContext.Consumer, null, function (_a) {
                var scaleDown = _a.scaleDown, scaleUp = _a.scaleUp;
                return (React__default['default'].createElement("div", { className: "button-group" },
                    React__default['default'].createElement("button", { className: "renderer-controls-button", type: "button", onClick: onZoomOut },
                        React__default['default'].createElement("span", { className: "zoom-out-label" }, scaleDown)),
                    React__default['default'].createElement("div", { className: "split-button-seperator" }),
                    React__default['default'].createElement("button", { className: "renderer-controls-button", type: "button", onClick: onZoomIn },
                        React__default['default'].createElement("span", { className: "zoom-in-label" }, scaleUp))));
            }),
            React__default['default'].createElement(ZoomSelectBox, { autoZoom: autoZoom, scale: scale, setScale: setScale }),
            React__default['default'].createElement(I18nContext.Consumer, null, function (_a) {
                var scaleDown = _a.scaleDown, scaleUp = _a.scaleUp, download = _a.download, printLabel = _a.printLabel;
                return (React__default['default'].createElement(React.Fragment, null,
                    React__default['default'].createElement("div", { className: "button-group" },
                        React__default['default'].createElement("button", { className: "renderer-controls-button", type: "button", onClick: onRotateLeft },
                            React__default['default'].createElement("span", { className: "rotate-left-label" }, scaleDown)),
                        React__default['default'].createElement("div", { className: "split-button-seperator" }),
                        React__default['default'].createElement("button", { className: "renderer-controls-button", type: "button", onClick: onRotateRight },
                            React__default['default'].createElement("span", { className: "rotate-right-label" }, scaleUp))),
                    downloadBtn && (React__default['default'].createElement("div", { className: "button-group" },
                        React__default['default'].createElement("button", { className: "renderer-controls-button", type: "button", onClick: onDownload },
                            React__default['default'].createElement("span", { className: "download-label" }, download)))),
                    React__default['default'].createElement("div", { className: "button-group" },
                        React__default['default'].createElement("button", { className: "renderer-controls-button", type: "button", onClick: onPrint },
                            React__default['default'].createElement("span", { className: "print-label" }, printLabel)))));
            }))));
};

var isDataSchema = function (url) {
    var i = 0, ii = url.length;
    while (i < ii && url[i].trim() === '') {
        i++;
    }
    return url.substring(i, i + 5).toLowerCase() === 'data:';
};
var getPDFFileNameFromURL = function (url) {
    var defaultFilename = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'document.pdf';
    if (typeof url !== 'string') {
        return defaultFilename;
    }
    if (isDataSchema(url)) {
        console.warn('getPDFFileNameFromURL: ' + 'ignoring "data:" URL for performance reasons.');
        return defaultFilename;
    }
    var reURI = /^(?:(?:[^:]+:)?\/\/[^\/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/;
    var reFilename = /[^\/?#=]+\.pdf\b(?!.*\.pdf\b)/i;
    var splitURI = reURI.exec(url);
    var suggestedFilename = null;
    if (splitURI) {
        suggestedFilename = reFilename.exec(splitURI[1]) || reFilename.exec(splitURI[2]) || reFilename.exec(splitURI[3]);
    }
    if (suggestedFilename) {
        suggestedFilename = suggestedFilename[0];
        if (suggestedFilename.includes('%')) {
            try {
                var suggestedFilenameResult = reFilename.exec(decodeURIComponent(suggestedFilename));
                if (suggestedFilenameResult) {
                    suggestedFilename = suggestedFilenameResult[0];
                }
            }
            catch (ex) { }
        }
    }
    return suggestedFilename || defaultFilename;
};

var ipp = require('ipp');
var roundToNearest = function (numToRound, numToRoundTo) {
    return Math.round(numToRound / numToRoundTo) * numToRoundTo;
};
var _a = require('pdfjs-dist/web/pdf_viewer'), PDFViewer = _a.PDFViewer, DownloadManager = _a.DownloadManager, EventBus = _a.EventBus;
var initialState$1 = {
    scale: 100,
    isLoading: true,
    firstPageWidth: 0,
};
var PdfRenderer = (function (_super) {
    __extends(PdfRenderer, _super);
    function PdfRenderer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = initialState$1;
        _this.autoFitScale = function () {
            var firstPageWith = _this.pdfViewer._pages[0].viewport.width;
            var currentScale = _this.pdfViewer._pages[0].scale;
            var originalWidth = firstPageWith / currentScale;
            var containerWidth = _this.container.current && _this.container.current.offsetWidth < 1020
                ? _this.container.current.offsetWidth - 56
                : 1019;
            var nextScale = -1;
            if (_this.container.current) {
                nextScale = Math.abs(containerWidth) / originalWidth;
            }
            _this.setScale(nextScale * 100);
        };
        _this.setScale = function (scale) {
            var autoZoom = _this.props.autoZoom;
            if (autoZoom && scale < 0) {
                _this.autoFitScale();
                return;
            }
            var nextScale = scale >= 10 ? scale : 10;
            _this.setState(function () { return ({ scale: nextScale }); });
            _this.pdfViewer.currentScaleValue = nextScale / 100;
        };
        _this.zoomIn = function () {
            var scale = _this.state.scale;
            scale = roundToNearest(scale, 10);
            var newScale;
            if (scale >= 110 && scale < 990) {
                newScale = scale + 20;
            }
            else if (scale === 75 || scale === 125) {
                newScale = scale + 5;
            }
            else {
                newScale = scale + 10;
            }
            if (newScale > 1000)
                return;
            _this.setScale(newScale);
        };
        _this.zoomOut = function () {
            var scale = _this.state.scale;
            scale = scale === 125 ? scale : roundToNearest(scale, 10);
            var newScale;
            if (scale > 110 && scale !== 125) {
                newScale = scale - 20;
            }
            else if (scale === 75 || scale === 125) {
                newScale = scale - 5;
            }
            else {
                newScale = scale - 10;
            }
            if (newScale <= 0)
                return;
            _this.setScale(newScale);
        };
        _this.rotateRight = function () {
            var currentRotation = _this.pdfViewer.pagesRotation;
            _this.pdfViewer.pagesRotation = currentRotation + 90;
        };
        _this.rotateLeft = function () {
            var currentRotation = _this.pdfViewer.pagesRotation;
            _this.pdfViewer.pagesRotation = currentRotation - 90;
        };
        _this.download = function () { return __awaiter(_this, void 0, void 0, function () {
            var pdfDoc, url, filename, downloadByUrl, data, blob;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pdfDoc = this.props.pdfDoc;
                        url = pdfDoc._transport._params.url;
                        filename = this.props.downloadName || getPDFFileNameFromURL(url);
                        downloadByUrl = function () {
                            _this.downloadManager.downloadUrl(url, filename);
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, this.props.pdfDoc.getData()];
                    case 2:
                        data = _a.sent();
                        blob = new Blob([data], { type: 'application/pdf' });
                        this.downloadManager.download(blob, url, filename);
                        return [3, 4];
                    case 3:
                        _a.sent();
                        downloadByUrl();
                        return [3, 4];
                    case 4: return [2];
                }
            });
        }); };
        _this.doIPPPrint = function (printURL, blob) { return __awaiter(_this, void 0, void 0, function () {
            var arrbuffer, buffer, printer, msg;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, blob.arrayBuffer()];
                    case 1:
                        arrbuffer = _a.sent();
                        buffer = Buffer.from(arrbuffer);
                        printer = ipp.Printer(printURL);
                        msg = {
                            'operation-attributes-tag': {
                                'document-format': 'application/pdf',
                            },
                            data: buffer
                        };
                        printer.execute('Print-Job', msg, function (err, res) {
                            if (err) {
                                console.error(err);
                                if (_this.props.failureCallback) {
                                    _this.props.failureCallback();
                                }
                            }
                            else {
                                if (_this.props.successCallback) {
                                    _this.props.successCallback();
                                }
                            }
                            console.log(res);
                        });
                        return [2];
                }
            });
        }); };
        _this.doHTTPPrint = function (printURL, blob) { return __awaiter(_this, void 0, void 0, function () {
            var formData;
            var _this = this;
            return __generator(this, function (_a) {
                formData = new FormData();
                formData.append('pdf', blob, 'test.pdf');
                fetch(printURL, {
                    method: 'POST',
                    body: formData,
                })
                    .then(function (response) {
                    if (response.ok) {
                        if (_this.props.successCallback) {
                            _this.props.successCallback();
                        }
                    }
                    else {
                        if (_this.props.failureCallback) {
                            _this.props.failureCallback();
                        }
                    }
                })
                    .catch(function (error) {
                    console.error('Error:', error);
                    if (_this.props.failureCallback) {
                        _this.props.failureCallback();
                    }
                });
                return [2];
            });
        }); };
        _this.onPrint = function () { return __awaiter(_this, void 0, void 0, function () {
            var data, printURL, blob, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4, this.props.pdfDoc.getData()];
                    case 1:
                        data = _a.sent();
                        return [4, this.props.printURL];
                    case 2:
                        printURL = _a.sent();
                        if (!printURL) {
                            throw new Error('No print URL provided');
                        }
                        blob = new Blob([data], { type: 'application/pdf' });
                        if (printURL.startsWith('ipp')) {
                            this.doIPPPrint(printURL, blob);
                        }
                        else {
                            this.doHTTPPrint(printURL, blob);
                        }
                        return [3, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.error('Problem executing print job. Error: ', err_1);
                        return [3, 4];
                    case 4: return [2];
                }
            });
        }); };
        _this.container = React__default['default'].createRef();
        _this.pdfViewer = null;
        _this.downloadManager = new DownloadManager({
            disableCreateObjectURL: false,
        });
        _this.printSrc = '';
        return _this;
    }
    PdfRenderer.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, autoZoom, pdfDoc;
            return __generator(this, function (_b) {
                _a = this.props, autoZoom = _a.autoZoom, pdfDoc = _a.pdfDoc;
                this.pdfViewer = new PDFViewer({
                    container: this.container.current,
                    eventBus: new EventBus(),
                });
                this.pdfViewer.setDocument(pdfDoc);
                if (autoZoom) {
                    window.addEventListener('resizeAutoZoom', this.autoFitScale);
                }
                this.rePosition();
                this.setState(function () { return ({ isLoading: false }); });
                return [2];
            });
        });
    };
    PdfRenderer.prototype.componentDidUpdate = function (prevProps) {
        var _a = this.props, pdfDoc = _a.pdfDoc, pdfChangeHook = _a.pdfChangeHook;
        if (pdfDoc !== prevProps.pdfDoc) {
            if (typeof pdfChangeHook === 'function') {
                pdfChangeHook(String(prevProps.activeIndex), {
                    zoom: this.state.scale,
                    rotation: this.pdfViewer.pagesRotation,
                    scrollTop: this.container.current && this.container.current.scrollTop,
                    scrollLeft: this.container.current && this.container.current.scrollLeft,
                });
            }
            this.pdfViewer.setDocument(pdfDoc);
            this.rePosition();
        }
    };
    PdfRenderer.prototype.componentWillUnmount = function () {
        if (this.props.autoZoom) {
            window.removeEventListener('resizeAutoZoom', this.autoFitScale);
        }
    };
    PdfRenderer.prototype.rePosition = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, autoZoom, zoom, rotation, scrollTop, scrollLeft;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.props, autoZoom = _a.autoZoom, zoom = _a.zoom, rotation = _a.rotation, scrollTop = _a.scrollTop, scrollLeft = _a.scrollLeft;
                        return [4, this.pdfViewer.firstPagePromise];
                    case 1:
                        _b.sent();
                        if (rotation) {
                            this.pdfViewer.pagesRotation = rotation;
                        }
                        if (zoom) {
                            this.setScale(zoom);
                        }
                        else if (!zoom && autoZoom) {
                            this.autoFitScale();
                        }
                        if (typeof scrollTop !== 'undefined') {
                            this.setScrollTop(scrollTop);
                        }
                        if (typeof scrollLeft !== 'undefined') {
                            this.setScrollLeft(scrollLeft);
                        }
                        return [2];
                }
            });
        });
    };
    PdfRenderer.prototype.setScrollTop = function (scrollTop) {
        if (this.container.current) {
            this.container.current.scrollTop = scrollTop;
        }
    };
    PdfRenderer.prototype.setScrollLeft = function (scrollLeft) {
        if (this.container.current) {
            this.container.current.scrollLeft = scrollLeft;
        }
    };
    PdfRenderer.prototype.render = function () {
        var _a = this.state, isLoading = _a.isLoading, scale = _a.scale;
        var _b = this.props, autoZoom = _b.autoZoom, controls = _b.controls, downloadBtn = _b.downloadBtn, i18nData = _b.i18nData;
        return (React__default['default'].createElement("div", { className: "renderer-container" },
            controls && (React__default['default'].createElement(I18nContext.Provider, { value: __assign(__assign({}, defaultI18n), i18nData) },
                React__default['default'].createElement(PdfControls, { autoZoom: autoZoom, downloadBtn: downloadBtn, scale: scale, setScale: this.setScale, onDownload: this.download, onPrint: this.onPrint, onZoomIn: this.zoomIn, onZoomOut: this.zoomOut, onRotateRight: this.rotateRight, onRotateLeft: this.rotateLeft }))),
            React__default['default'].createElement("div", { ref: this.container, className: "renderer-target-container " + (!controls ? 'no-controls' : '') + " " },
                React__default['default'].createElement("div", { id: "viewer", className: "pdfViewer " + (isLoading ? 'hidden' : '') }))));
    };
    PdfRenderer.defaultProps = {
        activeIndex: '0',
        autoZoom: true,
        controls: true,
        downloadBtn: true,
        i18nData: defaultI18n,
        pdfChangeHook: null,
        rotation: 0,
        scrollTop: 0,
        scrollLeft: 0,
        printURL: '',
        successCallback: function () { },
        failureCallback: function () { }
    };
    return PdfRenderer;
}(React.PureComponent));

var PdfjsLib$1 = require('pdfjs-dist/build/pdf');
var initialState = {
    files: [],
    activeIndex: '0',
    listVisible: false,
    overlayMode: false,
};
var PdfMultiViewer = (function (_super) {
    __extends(PdfMultiViewer, _super);
    function PdfMultiViewer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = initialState;
        _this.changePdf = function (activeIndex, file) { return function () {
            var _a = _this.state, overlayMode = _a.overlayMode, listVisible = _a.listVisible;
            if (!file.pdfProxy)
                return;
            _this.setState(function () { return ({ activeIndex: activeIndex }); });
            if (overlayMode && listVisible)
                _this.toggleList();
        }; };
        _this.toggleList = function () {
            return _this.setState(function (state) { return ({ listVisible: !state.listVisible }); });
        };
        _this.setOverlayMode = function (currentContainerWidth) {
            var containerWidth = currentContainerWidth ||
                (_this.viewerContainer.current &&
                    _this.viewerContainer.current.offsetWidth);
            var overlayMode = _this.state.overlayMode;
            if (containerWidth &&
                containerWidth >= 330 &&
                containerWidth <= 667 &&
                !overlayMode) {
                _this.setState(function () { return ({ overlayMode: true }); });
            }
            else if (overlayMode && containerWidth && containerWidth > 667) {
                _this.setState(function () { return ({ overlayMode: false }); });
            }
        };
        _this.getViewerContainerWidth = function () {
            return (_this.viewerContainer.current &&
                _this.viewerContainer.current.offsetWidth) ||
                undefined;
        };
        _this.onResizeEvent = function () { return _this.setOverlayMode(_this.getViewerContainerWidth()); };
        _this.rememberPosition = function (index, position) {
            return _this.setState(function (state) { return ({
                files: state.files.map(function (pdfFile, pdfIndex) {
                    if (pdfIndex !== Number(index))
                        return pdfFile;
                    return __assign(__assign({}, pdfFile), position);
                }),
            }); });
        };
        PdfjsLib$1.GlobalWorkerOptions.workerSrc =
            '//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.5.207/pdf.worker.js';
        _this.worker = new PdfjsLib$1.PDFWorker('pdf-viewer');
        _this.viewerContainer = React__default['default'].createRef();
        _this.state.activeIndex = String(props.startIndex);
        _this.state.files = _this.props.pdfs.map(function (pdf) {
            return typeof pdf === 'object'
                ? __assign(__assign({}, pdf), { pdfProxy: null }) : {
                source: pdf,
                pdfProxy: null,
            };
        });
        return _this;
    }
    PdfMultiViewer.prototype.loadPdfDocuments = function () {
        var _this = this;
        this.state.files.forEach(function (file, index) { return __awaiter(_this, void 0, void 0, function () {
            var pdfDoc;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, PdfjsLib$1.getDocument({
                            url: file.source,
                            worker: this.worker,
                        }).promise];
                    case 1:
                        pdfDoc = _a.sent();
                        this.setState(function (state) { return ({
                            files: state.files.map(function (pdfFile, pdfIndex) {
                                if (pdfIndex !== index)
                                    return pdfFile;
                                return __assign(__assign({}, pdfFile), { pdfProxy: pdfDoc });
                            }),
                        }); });
                        return [2];
                }
            });
        }); });
    };
    PdfMultiViewer.prototype.renderListItems = function () {
        var _this = this;
        var activeIndex = this.state.activeIndex;
        var i18nData = this.props.i18nData;
        return this.state.files.map(function (file, index) { return (React__default['default'].createElement("li", { className: "pdf-viewer-list-item" + (file.pdfProxy ? ' loaded' : '') + (activeIndex === String(index) ? ' active' : ''), key: file.source, onClick: _this.changePdf(String(index), file) },
            file.title || file.source,
            file.pdfProxy && (React__default['default'].createElement("div", { className: "pdf-viewer-list-item-meta" },
                i18nData.pages,
                ": ",
                file.pdfProxy.numPages)))); });
    };
    PdfMultiViewer.prototype.componentDidMount = function () {
        window.addEventListener('resizeAutoZoom', this.onResizeEvent);
        this.setOverlayMode(this.getViewerContainerWidth());
        this.loadPdfDocuments();
    };
    PdfMultiViewer.prototype.componentWillUnmount = function () {
        window.removeEventListener('resizeAutoZoom', this.onResizeEvent);
        this.worker.destroy();
    };
    PdfMultiViewer.prototype.render = function () {
        var _a = this.state, activeIndex = _a.activeIndex, files = _a.files, listVisible = _a.listVisible, overlayMode = _a.overlayMode;
        var pdfToShow = files[Number(activeIndex)];
        var _b = this.props, autoZoom = _b.autoZoom, controls = _b.controls, i18nData = _b.i18nData, downloadName = _b.downloadName, printURL = _b.printURL, onSuccess = _b.onSuccess, onFailure = _b.onFailure;
        return (React__default['default'].createElement("div", { className: "pdf-multi-viewer", ref: this.viewerContainer },
            React__default['default'].createElement("div", { className: "pdf-multi-viewer-option-bar" },
                React__default['default'].createElement("button", { className: "viewer-controls-button" + (listVisible ? ' toggled' : ''), onClick: this.toggleList },
                    React__default['default'].createElement("span", { className: "toggle-list-label" }, "Toggle list")),
                React__default['default'].createElement("button", { className: "pdf-viewer-close-button", onClick: this.props.onClose },
                    React__default['default'].createElement("span", { className: "close-label" }))),
            React__default['default'].createElement("ul", { className: "pdf-viewer-list" + (!listVisible ? ' hidden' : '') + (overlayMode ? ' overlay' : '') }, this.renderListItems()),
            React__default['default'].createElement("div", { className: "pdf-viewer-multi-renderer" }, pdfToShow.pdfProxy && (React__default['default'].createElement(PdfRenderer, { activeIndex: activeIndex, autoZoom: autoZoom, controls: controls, downloadName: downloadName, pdfDoc: pdfToShow.pdfProxy, i18nData: i18nData, pdfChangeHook: this.rememberPosition, zoom: pdfToShow.zoom, rotation: pdfToShow.rotation, scrollTop: pdfToShow.scrollTop, scrollLeft: pdfToShow.scrollLeft, printURL: printURL, successCallback: onSuccess, failureCallback: onFailure })))));
    };
    PdfMultiViewer.defaultProps = {
        autoZoom: true,
        controls: true,
        startIndex: '0',
        i18nData: {
            pages: 'Pages',
        },
        onClose: function () { },
        printURL: '',
        onSuccess: function () { },
        onFailure: function () { }
    };
    return PdfMultiViewer;
}(React.PureComponent));

var PdfjsLib = require('pdfjs-dist/build/pdf');

exports.PdfMultiViewer = PdfMultiViewer;
exports.PdfRenderer = PdfRenderer;
exports.PdfjsLib = PdfjsLib;
