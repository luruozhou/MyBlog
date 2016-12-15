/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	__webpack_require__(16);
	
	__webpack_require__(18);
	
	__webpack_require__(19);

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/*!
	 * jQuery JavaScript Library v1.11.2
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2014-12-17T15:27Z
	 */
	
	(function (global, factory) {
	
		if (( false ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
			// For CommonJS and CommonJS-like environments where a proper window is present,
			// execute the factory and get jQuery
			// For environments that do not inherently posses a window with a document
			// (such as Node.js), expose a jQuery-making factory as module.exports
			// This accentuates the need for the creation of a real window
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info
			module.exports = global.document ? factory(global, true) : function (w) {
				if (!w.document) {
					throw new Error("jQuery requires a window with a document");
				}
				return factory(w);
			};
		} else {
			factory(global);
		}
	
		// Pass this if window is not defined yet
	})(typeof window !== "undefined" ? window : undefined, function (window, noGlobal) {
	
		// Can't do this because several apps including ASP.NET trace
		// the stack via arguments.caller.callee and Firefox dies if
		// you try to trace through "use strict" call chains. (#13335)
		// Support: Firefox 18+
		//
	
		var deletedIds = [];
	
		var _slice = deletedIds.slice;
	
		var concat = deletedIds.concat;
	
		var push = deletedIds.push;
	
		var indexOf = deletedIds.indexOf;
	
		var class2type = {};
	
		var toString = class2type.toString;
	
		var hasOwn = class2type.hasOwnProperty;
	
		var support = {};
	
		var version = "1.11.2",
	
	
		// Define a local copy of jQuery
		jQuery = function jQuery(selector, context) {
			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init(selector, context);
		},
	
	
		// Support: Android<4.1, IE<9
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	
	
		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		    rdashAlpha = /-([\da-z])/gi,
	
	
		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function fcamelCase(all, letter) {
			return letter.toUpperCase();
		};
	
		jQuery.fn = jQuery.prototype = {
			// The current version of jQuery being used
			jquery: version,
	
			constructor: jQuery,
	
			// Start with an empty selector
			selector: "",
	
			// The default length of a jQuery object is 0
			length: 0,
	
			toArray: function toArray() {
				return _slice.call(this);
			},
	
			// Get the Nth element in the matched element set OR
			// Get the whole matched element set as a clean array
			get: function get(num) {
				return num != null ?
	
				// Return just the one element from the set
				num < 0 ? this[num + this.length] : this[num] :
	
				// Return all the elements in a clean array
				_slice.call(this);
			},
	
			// Take an array of elements and push it onto the stack
			// (returning the new matched element set)
			pushStack: function pushStack(elems) {
	
				// Build a new jQuery matched element set
				var ret = jQuery.merge(this.constructor(), elems);
	
				// Add the old object onto the stack (as a reference)
				ret.prevObject = this;
				ret.context = this.context;
	
				// Return the newly-formed element set
				return ret;
			},
	
			// Execute a callback for every element in the matched set.
			// (You can seed the arguments with an array of args, but this is
			// only used internally.)
			each: function each(callback, args) {
				return jQuery.each(this, callback, args);
			},
	
			map: function map(callback) {
				return this.pushStack(jQuery.map(this, function (elem, i) {
					return callback.call(elem, i, elem);
				}));
			},
	
			slice: function slice() {
				return this.pushStack(_slice.apply(this, arguments));
			},
	
			first: function first() {
				return this.eq(0);
			},
	
			last: function last() {
				return this.eq(-1);
			},
	
			eq: function eq(i) {
				var len = this.length,
				    j = +i + (i < 0 ? len : 0);
				return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
			},
	
			end: function end() {
				return this.prevObject || this.constructor(null);
			},
	
			// For internal use only.
			// Behaves like an Array's method, not like a jQuery method.
			push: push,
			sort: deletedIds.sort,
			splice: deletedIds.splice
		};
	
		jQuery.extend = jQuery.fn.extend = function () {
			var src,
			    copyIsArray,
			    copy,
			    name,
			    options,
			    clone,
			    target = arguments[0] || {},
			    i = 1,
			    length = arguments.length,
			    deep = false;
	
			// Handle a deep copy situation
			if (typeof target === "boolean") {
				deep = target;
	
				// skip the boolean and the target
				target = arguments[i] || {};
				i++;
			}
	
			// Handle case when target is a string or something (possible in deep copy)
			if ((typeof target === "undefined" ? "undefined" : _typeof(target)) !== "object" && !jQuery.isFunction(target)) {
				target = {};
			}
	
			// extend jQuery itself if only one argument is passed
			if (i === length) {
				target = this;
				i--;
			}
	
			for (; i < length; i++) {
				// Only deal with non-null/undefined values
				if ((options = arguments[i]) != null) {
					// Extend the base object
					for (name in options) {
						src = target[name];
						copy = options[name];
	
						// Prevent never-ending loop
						if (target === copy) {
							continue;
						}
	
						// Recurse if we're merging plain objects or arrays
						if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
							if (copyIsArray) {
								copyIsArray = false;
								clone = src && jQuery.isArray(src) ? src : [];
							} else {
								clone = src && jQuery.isPlainObject(src) ? src : {};
							}
	
							// Never move original objects, clone them
							target[name] = jQuery.extend(deep, clone, copy);
	
							// Don't bring in undefined values
						} else if (copy !== undefined) {
							target[name] = copy;
						}
					}
				}
			}
	
			// Return the modified object
			return target;
		};
	
		jQuery.extend({
			// Unique for each copy of jQuery on the page
			expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
	
			// Assume jQuery is ready without the ready module
			isReady: true,
	
			error: function error(msg) {
				throw new Error(msg);
			},
	
			noop: function noop() {},
	
			// See test/unit/core.js for details concerning isFunction.
			// Since version 1.3, DOM methods and functions like alert
			// aren't supported. They return false on IE (#2968).
			isFunction: function isFunction(obj) {
				return jQuery.type(obj) === "function";
			},
	
			isArray: Array.isArray || function (obj) {
				return jQuery.type(obj) === "array";
			},
	
			isWindow: function isWindow(obj) {
				/* jshint eqeqeq: false */
				return obj != null && obj == obj.window;
			},
	
			isNumeric: function isNumeric(obj) {
				// parseFloat NaNs numeric-cast false positives (null|true|false|"")
				// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
				// subtraction forces infinities to NaN
				// adding 1 corrects loss of precision from parseFloat (#15100)
				return !jQuery.isArray(obj) && obj - parseFloat(obj) + 1 >= 0;
			},
	
			isEmptyObject: function isEmptyObject(obj) {
				var name;
				for (name in obj) {
					return false;
				}
				return true;
			},
	
			isPlainObject: function isPlainObject(obj) {
				var key;
	
				// Must be an Object.
				// Because of IE, we also have to check the presence of the constructor property.
				// Make sure that DOM nodes and window objects don't pass through, as well
				if (!obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
					return false;
				}
	
				try {
					// Not own constructor property must be Object
					if (obj.constructor && !hasOwn.call(obj, "constructor") && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
						return false;
					}
				} catch (e) {
					// IE8,9 Will throw exceptions on certain host objects #9897
					return false;
				}
	
				// Support: IE<9
				// Handle iteration over inherited properties before own properties.
				if (support.ownLast) {
					for (key in obj) {
						return hasOwn.call(obj, key);
					}
				}
	
				// Own properties are enumerated firstly, so to speed up,
				// if last one is own, then all properties are own.
				for (key in obj) {}
	
				return key === undefined || hasOwn.call(obj, key);
			},
	
			type: function type(obj) {
				if (obj == null) {
					return obj + "";
				}
				return (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
			},
	
			// Evaluates a script in a global context
			// Workarounds based on findings by Jim Driscoll
			// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
			globalEval: function globalEval(data) {
				if (data && jQuery.trim(data)) {
					// We use execScript on Internet Explorer
					// We use an anonymous function so that context is window
					// rather than jQuery in Firefox
					(window.execScript || function (data) {
						window["eval"].call(window, data);
					})(data);
				}
			},
	
			// Convert dashed to camelCase; used by the css and data modules
			// Microsoft forgot to hump their vendor prefix (#9572)
			camelCase: function camelCase(string) {
				return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
			},
	
			nodeName: function nodeName(elem, name) {
				return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
			},
	
			// args is for internal usage only
			each: function each(obj, callback, args) {
				var value,
				    i = 0,
				    length = obj.length,
				    isArray = isArraylike(obj);
	
				if (args) {
					if (isArray) {
						for (; i < length; i++) {
							value = callback.apply(obj[i], args);
	
							if (value === false) {
								break;
							}
						}
					} else {
						for (i in obj) {
							value = callback.apply(obj[i], args);
	
							if (value === false) {
								break;
							}
						}
					}
	
					// A special, fast, case for the most common use of each
				} else {
					if (isArray) {
						for (; i < length; i++) {
							value = callback.call(obj[i], i, obj[i]);
	
							if (value === false) {
								break;
							}
						}
					} else {
						for (i in obj) {
							value = callback.call(obj[i], i, obj[i]);
	
							if (value === false) {
								break;
							}
						}
					}
				}
	
				return obj;
			},
	
			// Support: Android<4.1, IE<9
			trim: function trim(text) {
				return text == null ? "" : (text + "").replace(rtrim, "");
			},
	
			// results is for internal usage only
			makeArray: function makeArray(arr, results) {
				var ret = results || [];
	
				if (arr != null) {
					if (isArraylike(Object(arr))) {
						jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
					} else {
						push.call(ret, arr);
					}
				}
	
				return ret;
			},
	
			inArray: function inArray(elem, arr, i) {
				var len;
	
				if (arr) {
					if (indexOf) {
						return indexOf.call(arr, elem, i);
					}
	
					len = arr.length;
					i = i ? i < 0 ? Math.max(0, len + i) : i : 0;
	
					for (; i < len; i++) {
						// Skip accessing in sparse arrays
						if (i in arr && arr[i] === elem) {
							return i;
						}
					}
				}
	
				return -1;
			},
	
			merge: function merge(first, second) {
				var len = +second.length,
				    j = 0,
				    i = first.length;
	
				while (j < len) {
					first[i++] = second[j++];
				}
	
				// Support: IE<9
				// Workaround casting of .length to NaN on otherwise arraylike objects (e.g., NodeLists)
				if (len !== len) {
					while (second[j] !== undefined) {
						first[i++] = second[j++];
					}
				}
	
				first.length = i;
	
				return first;
			},
	
			grep: function grep(elems, callback, invert) {
				var callbackInverse,
				    matches = [],
				    i = 0,
				    length = elems.length,
				    callbackExpect = !invert;
	
				// Go through the array, only saving the items
				// that pass the validator function
				for (; i < length; i++) {
					callbackInverse = !callback(elems[i], i);
					if (callbackInverse !== callbackExpect) {
						matches.push(elems[i]);
					}
				}
	
				return matches;
			},
	
			// arg is for internal usage only
			map: function map(elems, callback, arg) {
				var value,
				    i = 0,
				    length = elems.length,
				    isArray = isArraylike(elems),
				    ret = [];
	
				// Go through the array, translating each of the items to their new values
				if (isArray) {
					for (; i < length; i++) {
						value = callback(elems[i], i, arg);
	
						if (value != null) {
							ret.push(value);
						}
					}
	
					// Go through every key on the object,
				} else {
					for (i in elems) {
						value = callback(elems[i], i, arg);
	
						if (value != null) {
							ret.push(value);
						}
					}
				}
	
				// Flatten any nested arrays
				return concat.apply([], ret);
			},
	
			// A global GUID counter for objects
			guid: 1,
	
			// Bind a function to a context, optionally partially applying any
			// arguments.
			proxy: function proxy(fn, context) {
				var args, proxy, tmp;
	
				if (typeof context === "string") {
					tmp = fn[context];
					context = fn;
					fn = tmp;
				}
	
				// Quick check to determine if target is callable, in the spec
				// this throws a TypeError, but we will just return undefined.
				if (!jQuery.isFunction(fn)) {
					return undefined;
				}
	
				// Simulated bind
				args = _slice.call(arguments, 2);
				proxy = function proxy() {
					return fn.apply(context || this, args.concat(_slice.call(arguments)));
				};
	
				// Set the guid of unique handler to the same of original handler, so it can be removed
				proxy.guid = fn.guid = fn.guid || jQuery.guid++;
	
				return proxy;
			},
	
			now: function now() {
				return +new Date();
			},
	
			// jQuery.support is not used in Core but other projects attach their
			// properties to it so it needs to exist.
			support: support
		});
	
		// Populate the class2type map
		jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (i, name) {
			class2type["[object " + name + "]"] = name.toLowerCase();
		});
	
		function isArraylike(obj) {
			var length = obj.length,
			    type = jQuery.type(obj);
	
			if (type === "function" || jQuery.isWindow(obj)) {
				return false;
			}
	
			if (obj.nodeType === 1 && length) {
				return true;
			}
	
			return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
		}
		var Sizzle =
		/*!
	  * Sizzle CSS Selector Engine v2.2.0-pre
	  * http://sizzlejs.com/
	  *
	  * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
	  * Released under the MIT license
	  * http://jquery.org/license
	  *
	  * Date: 2014-12-16
	  */
		function (window) {
	
			var i,
			    support,
			    Expr,
			    getText,
			    isXML,
			    tokenize,
			    compile,
			    select,
			    outermostContext,
			    sortInput,
			    hasDuplicate,
	
	
			// Local document vars
			setDocument,
			    document,
			    docElem,
			    documentIsHTML,
			    rbuggyQSA,
			    rbuggyMatches,
			    matches,
			    contains,
	
	
			// Instance-specific data
			expando = "sizzle" + 1 * new Date(),
			    preferredDoc = window.document,
			    dirruns = 0,
			    done = 0,
			    classCache = createCache(),
			    tokenCache = createCache(),
			    compilerCache = createCache(),
			    sortOrder = function sortOrder(a, b) {
				if (a === b) {
					hasDuplicate = true;
				}
				return 0;
			},
	
	
			// General-purpose constants
			MAX_NEGATIVE = 1 << 31,
	
	
			// Instance methods
			hasOwn = {}.hasOwnProperty,
			    arr = [],
			    pop = arr.pop,
			    push_native = arr.push,
			    push = arr.push,
			    slice = arr.slice,
	
			// Use a stripped-down indexOf as it's faster than native
			// http://jsperf.com/thor-indexof-vs-for/5
			indexOf = function indexOf(list, elem) {
				var i = 0,
				    len = list.length;
				for (; i < len; i++) {
					if (list[i] === elem) {
						return i;
					}
				}
				return -1;
			},
			    booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
	
	
			// Regular expressions
	
			// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
			whitespace = "[\\x20\\t\\r\\n\\f]",
	
			// http://www.w3.org/TR/css3-syntax/#characters
			characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
	
	
			// Loosely modeled on CSS identifier characters
			// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
			// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
			identifier = characterEncoding.replace("w", "w#"),
	
	
			// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
			attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
			    pseudos = ":(" + characterEncoding + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" + ")\\)|)",
	
	
			// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
			rwhitespace = new RegExp(whitespace + "+", "g"),
			    rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
			    rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
			    rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
			    rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),
			    rpseudo = new RegExp(pseudos),
			    ridentifier = new RegExp("^" + identifier + "$"),
			    matchExpr = {
				"ID": new RegExp("^#(" + characterEncoding + ")"),
				"CLASS": new RegExp("^\\.(" + characterEncoding + ")"),
				"TAG": new RegExp("^(" + characterEncoding.replace("w", "w*") + ")"),
				"ATTR": new RegExp("^" + attributes),
				"PSEUDO": new RegExp("^" + pseudos),
				"CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
				"bool": new RegExp("^(?:" + booleans + ")$", "i"),
				// For use in libraries implementing .is()
				// We use this for POS matching in `select`
				"needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
			},
			    rinputs = /^(?:input|select|textarea|button)$/i,
			    rheader = /^h\d$/i,
			    rnative = /^[^{]+\{\s*\[native \w/,
	
	
			// Easily-parseable/retrievable ID or TAG or CLASS selectors
			rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			    rsibling = /[+~]/,
			    rescape = /'|\\/g,
	
	
			// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
			runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
			    funescape = function funescape(_, escaped, escapedWhitespace) {
				var high = "0x" + escaped - 0x10000;
				// NaN means non-codepoint
				// Support: Firefox<24
				// Workaround erroneous numeric interpretation of +"0x"
				return high !== high || escapedWhitespace ? escaped : high < 0 ?
				// BMP codepoint
				String.fromCharCode(high + 0x10000) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
			},
	
	
			// Used for iframes
			// See setDocument()
			// Removing the function wrapper causes a "Permission Denied"
			// error in IE
			unloadHandler = function unloadHandler() {
				setDocument();
			};
	
			// Optimize for push.apply( _, NodeList )
			try {
				push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
				// Support: Android<4.0
				// Detect silently failing push.apply
				arr[preferredDoc.childNodes.length].nodeType;
			} catch (e) {
				push = { apply: arr.length ?
	
					// Leverage slice if possible
					function (target, els) {
						push_native.apply(target, slice.call(els));
					} :
	
					// Support: IE<9
					// Otherwise append directly
					function (target, els) {
						var j = target.length,
						    i = 0;
						// Can't trust NodeList.length
						while (target[j++] = els[i++]) {}
						target.length = j - 1;
					}
				};
			}
	
			function Sizzle(selector, context, results, seed) {
				var match, elem, m, nodeType,
				// QSA vars
				i, groups, old, nid, newContext, newSelector;
	
				if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
					setDocument(context);
				}
	
				context = context || document;
				results = results || [];
				nodeType = context.nodeType;
	
				if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
	
					return results;
				}
	
				if (!seed && documentIsHTML) {
	
					// Try to shortcut find operations when possible (e.g., not under DocumentFragment)
					if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
						// Speed-up: Sizzle("#ID")
						if (m = match[1]) {
							if (nodeType === 9) {
								elem = context.getElementById(m);
								// Check parentNode to catch when Blackberry 4.6 returns
								// nodes that are no longer in the document (jQuery #6963)
								if (elem && elem.parentNode) {
									// Handle the case where IE, Opera, and Webkit return items
									// by name instead of ID
									if (elem.id === m) {
										results.push(elem);
										return results;
									}
								} else {
									return results;
								}
							} else {
								// Context is not a document
								if (context.ownerDocument && (elem = context.ownerDocument.getElementById(m)) && contains(context, elem) && elem.id === m) {
									results.push(elem);
									return results;
								}
							}
	
							// Speed-up: Sizzle("TAG")
						} else if (match[2]) {
							push.apply(results, context.getElementsByTagName(selector));
							return results;
	
							// Speed-up: Sizzle(".CLASS")
						} else if ((m = match[3]) && support.getElementsByClassName) {
							push.apply(results, context.getElementsByClassName(m));
							return results;
						}
					}
	
					// QSA path
					if (support.qsa && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
						nid = old = expando;
						newContext = context;
						newSelector = nodeType !== 1 && selector;
	
						// qSA works strangely on Element-rooted queries
						// We can work around this by specifying an extra ID on the root
						// and working up from there (Thanks to Andrew Dupont for the technique)
						// IE 8 doesn't work on object elements
						if (nodeType === 1 && context.nodeName.toLowerCase() !== "object") {
							groups = tokenize(selector);
	
							if (old = context.getAttribute("id")) {
								nid = old.replace(rescape, "\\$&");
							} else {
								context.setAttribute("id", nid);
							}
							nid = "[id='" + nid + "'] ";
	
							i = groups.length;
							while (i--) {
								groups[i] = nid + toSelector(groups[i]);
							}
							newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
							newSelector = groups.join(",");
						}
	
						if (newSelector) {
							try {
								push.apply(results, newContext.querySelectorAll(newSelector));
								return results;
							} catch (qsaError) {} finally {
								if (!old) {
									context.removeAttribute("id");
								}
							}
						}
					}
				}
	
				// All others
				return select(selector.replace(rtrim, "$1"), context, results, seed);
			}
	
			/**
	   * Create key-value caches of limited size
	   * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
	   *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	   *	deleting the oldest entry
	   */
			function createCache() {
				var keys = [];
	
				function cache(key, value) {
					// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
					if (keys.push(key + " ") > Expr.cacheLength) {
						// Only keep the most recent entries
						delete cache[keys.shift()];
					}
					return cache[key + " "] = value;
				}
				return cache;
			}
	
			/**
	   * Mark a function for special use by Sizzle
	   * @param {Function} fn The function to mark
	   */
			function markFunction(fn) {
				fn[expando] = true;
				return fn;
			}
	
			/**
	   * Support testing using an element
	   * @param {Function} fn Passed the created div and expects a boolean result
	   */
			function assert(fn) {
				var div = document.createElement("div");
	
				try {
					return !!fn(div);
				} catch (e) {
					return false;
				} finally {
					// Remove from its parent by default
					if (div.parentNode) {
						div.parentNode.removeChild(div);
					}
					// release memory in IE
					div = null;
				}
			}
	
			/**
	   * Adds the same handler for all of the specified attrs
	   * @param {String} attrs Pipe-separated list of attributes
	   * @param {Function} handler The method that will be applied
	   */
			function addHandle(attrs, handler) {
				var arr = attrs.split("|"),
				    i = attrs.length;
	
				while (i--) {
					Expr.attrHandle[arr[i]] = handler;
				}
			}
	
			/**
	   * Checks document order of two siblings
	   * @param {Element} a
	   * @param {Element} b
	   * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	   */
			function siblingCheck(a, b) {
				var cur = b && a,
				    diff = cur && a.nodeType === 1 && b.nodeType === 1 && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE);
	
				// Use IE sourceIndex if available on both nodes
				if (diff) {
					return diff;
				}
	
				// Check if b follows a
				if (cur) {
					while (cur = cur.nextSibling) {
						if (cur === b) {
							return -1;
						}
					}
				}
	
				return a ? 1 : -1;
			}
	
			/**
	   * Returns a function to use in pseudos for input types
	   * @param {String} type
	   */
			function createInputPseudo(type) {
				return function (elem) {
					var name = elem.nodeName.toLowerCase();
					return name === "input" && elem.type === type;
				};
			}
	
			/**
	   * Returns a function to use in pseudos for buttons
	   * @param {String} type
	   */
			function createButtonPseudo(type) {
				return function (elem) {
					var name = elem.nodeName.toLowerCase();
					return (name === "input" || name === "button") && elem.type === type;
				};
			}
	
			/**
	   * Returns a function to use in pseudos for positionals
	   * @param {Function} fn
	   */
			function createPositionalPseudo(fn) {
				return markFunction(function (argument) {
					argument = +argument;
					return markFunction(function (seed, matches) {
						var j,
						    matchIndexes = fn([], seed.length, argument),
						    i = matchIndexes.length;
	
						// Match elements found at the specified indexes
						while (i--) {
							if (seed[j = matchIndexes[i]]) {
								seed[j] = !(matches[j] = seed[j]);
							}
						}
					});
				});
			}
	
			/**
	   * Checks a node for validity as a Sizzle context
	   * @param {Element|Object=} context
	   * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	   */
			function testContext(context) {
				return context && typeof context.getElementsByTagName !== "undefined" && context;
			}
	
			// Expose support vars for convenience
			support = Sizzle.support = {};
	
			/**
	   * Detects XML nodes
	   * @param {Element|Object} elem An element or a document
	   * @returns {Boolean} True iff elem is a non-HTML XML node
	   */
			isXML = Sizzle.isXML = function (elem) {
				// documentElement is verified for cases where it doesn't yet exist
				// (such as loading iframes in IE - #4833)
				var documentElement = elem && (elem.ownerDocument || elem).documentElement;
				return documentElement ? documentElement.nodeName !== "HTML" : false;
			};
	
			/**
	   * Sets document-related variables once based on the current document
	   * @param {Element|Object} [doc] An element or document object to use to set the document
	   * @returns {Object} Returns the current document
	   */
			setDocument = Sizzle.setDocument = function (node) {
				var hasCompare,
				    parent,
				    doc = node ? node.ownerDocument || node : preferredDoc;
	
				// If no document and documentElement is available, return
				if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
					return document;
				}
	
				// Set our document
				document = doc;
				docElem = doc.documentElement;
				parent = doc.defaultView;
	
				// Support: IE>8
				// If iframe document is assigned to "document" variable and if iframe has been reloaded,
				// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
				// IE6-8 do not support the defaultView property so parent will be undefined
				if (parent && parent !== parent.top) {
					// IE11 does not have attachEvent, so all must suffer
					if (parent.addEventListener) {
						parent.addEventListener("unload", unloadHandler, false);
					} else if (parent.attachEvent) {
						parent.attachEvent("onunload", unloadHandler);
					}
				}
	
				/* Support tests
	   ---------------------------------------------------------------------- */
				documentIsHTML = !isXML(doc);
	
				/* Attributes
	   ---------------------------------------------------------------------- */
	
				// Support: IE<8
				// Verify that getAttribute really returns attributes and not properties
				// (excepting IE8 booleans)
				support.attributes = assert(function (div) {
					div.className = "i";
					return !div.getAttribute("className");
				});
	
				/* getElement(s)By*
	   ---------------------------------------------------------------------- */
	
				// Check if getElementsByTagName("*") returns only elements
				support.getElementsByTagName = assert(function (div) {
					div.appendChild(doc.createComment(""));
					return !div.getElementsByTagName("*").length;
				});
	
				// Support: IE<9
				support.getElementsByClassName = rnative.test(doc.getElementsByClassName);
	
				// Support: IE<10
				// Check if getElementById returns elements by name
				// The broken getElementById methods don't pick up programatically-set names,
				// so use a roundabout getElementsByName test
				support.getById = assert(function (div) {
					docElem.appendChild(div).id = expando;
					return !doc.getElementsByName || !doc.getElementsByName(expando).length;
				});
	
				// ID find and filter
				if (support.getById) {
					Expr.find["ID"] = function (id, context) {
						if (typeof context.getElementById !== "undefined" && documentIsHTML) {
							var m = context.getElementById(id);
							// Check parentNode to catch when Blackberry 4.6 returns
							// nodes that are no longer in the document #6963
							return m && m.parentNode ? [m] : [];
						}
					};
					Expr.filter["ID"] = function (id) {
						var attrId = id.replace(runescape, funescape);
						return function (elem) {
							return elem.getAttribute("id") === attrId;
						};
					};
				} else {
					// Support: IE6/7
					// getElementById is not reliable as a find shortcut
					delete Expr.find["ID"];
	
					Expr.filter["ID"] = function (id) {
						var attrId = id.replace(runescape, funescape);
						return function (elem) {
							var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
							return node && node.value === attrId;
						};
					};
				}
	
				// Tag
				Expr.find["TAG"] = support.getElementsByTagName ? function (tag, context) {
					if (typeof context.getElementsByTagName !== "undefined") {
						return context.getElementsByTagName(tag);
	
						// DocumentFragment nodes don't have gEBTN
					} else if (support.qsa) {
						return context.querySelectorAll(tag);
					}
				} : function (tag, context) {
					var elem,
					    tmp = [],
					    i = 0,
	
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName(tag);
	
					// Filter out possible comments
					if (tag === "*") {
						while (elem = results[i++]) {
							if (elem.nodeType === 1) {
								tmp.push(elem);
							}
						}
	
						return tmp;
					}
					return results;
				};
	
				// Class
				Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
					if (documentIsHTML) {
						return context.getElementsByClassName(className);
					}
				};
	
				/* QSA/matchesSelector
	   ---------------------------------------------------------------------- */
	
				// QSA and matchesSelector support
	
				// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
				rbuggyMatches = [];
	
				// qSa(:focus) reports false when true (Chrome 21)
				// We allow this because of a bug in IE8/9 that throws an error
				// whenever `document.activeElement` is accessed on an iframe
				// So, we allow :focus to pass through QSA all the time to avoid the IE error
				// See http://bugs.jquery.com/ticket/13378
				rbuggyQSA = [];
	
				if (support.qsa = rnative.test(doc.querySelectorAll)) {
					// Build QSA regex
					// Regex strategy adopted from Diego Perini
					assert(function (div) {
						// Select is set to empty string on purpose
						// This is to test IE's treatment of not explicitly
						// setting a boolean content attribute,
						// since its presence should be enough
						// http://bugs.jquery.com/ticket/12359
						docElem.appendChild(div).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\f]' msallowcapture=''>" + "<option selected=''></option></select>";
	
						// Support: IE8, Opera 11-12.16
						// Nothing should be selected when empty strings follow ^= or $= or *=
						// The test attribute must be unknown in Opera but "safe" for WinRT
						// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
						if (div.querySelectorAll("[msallowcapture^='']").length) {
							rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
						}
	
						// Support: IE8
						// Boolean attributes and "value" are not treated correctly
						if (!div.querySelectorAll("[selected]").length) {
							rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
						}
	
						// Support: Chrome<29, Android<4.2+, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.7+
						if (!div.querySelectorAll("[id~=" + expando + "-]").length) {
							rbuggyQSA.push("~=");
						}
	
						// Webkit/Opera - :checked should return selected option elements
						// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
						// IE8 throws error here and will not see later tests
						if (!div.querySelectorAll(":checked").length) {
							rbuggyQSA.push(":checked");
						}
	
						// Support: Safari 8+, iOS 8+
						// https://bugs.webkit.org/show_bug.cgi?id=136851
						// In-page `selector#id sibing-combinator selector` fails
						if (!div.querySelectorAll("a#" + expando + "+*").length) {
							rbuggyQSA.push(".#.+[+~]");
						}
					});
	
					assert(function (div) {
						// Support: Windows 8 Native Apps
						// The type and name attributes are restricted during .innerHTML assignment
						var input = doc.createElement("input");
						input.setAttribute("type", "hidden");
						div.appendChild(input).setAttribute("name", "D");
	
						// Support: IE8
						// Enforce case-sensitivity of name attribute
						if (div.querySelectorAll("[name=d]").length) {
							rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
						}
	
						// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
						// IE8 throws error here and will not see later tests
						if (!div.querySelectorAll(":enabled").length) {
							rbuggyQSA.push(":enabled", ":disabled");
						}
	
						// Opera 10-11 does not throw on post-comma invalid pseudos
						div.querySelectorAll("*,:x");
						rbuggyQSA.push(",.*:");
					});
				}
	
				if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
	
					assert(function (div) {
						// Check to see if it's possible to do matchesSelector
						// on a disconnected node (IE 9)
						support.disconnectedMatch = matches.call(div, "div");
	
						// This should fail with an exception
						// Gecko does not error, returns false instead
						matches.call(div, "[s!='']:x");
						rbuggyMatches.push("!=", pseudos);
					});
				}
	
				rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
				rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
	
				/* Contains
	   ---------------------------------------------------------------------- */
				hasCompare = rnative.test(docElem.compareDocumentPosition);
	
				// Element contains another
				// Purposefully does not implement inclusive descendent
				// As in, an element does not contain itself
				contains = hasCompare || rnative.test(docElem.contains) ? function (a, b) {
					var adown = a.nodeType === 9 ? a.documentElement : a,
					    bup = b && b.parentNode;
					return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
				} : function (a, b) {
					if (b) {
						while (b = b.parentNode) {
							if (b === a) {
								return true;
							}
						}
					}
					return false;
				};
	
				/* Sorting
	   ---------------------------------------------------------------------- */
	
				// Document order sorting
				sortOrder = hasCompare ? function (a, b) {
	
					// Flag for duplicate removal
					if (a === b) {
						hasDuplicate = true;
						return 0;
					}
	
					// Sort on method existence if only one input has compareDocumentPosition
					var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
					if (compare) {
						return compare;
					}
	
					// Calculate position if both inputs belong to the same document
					compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) :
	
					// Otherwise we know they are disconnected
					1;
	
					// Disconnected nodes
					if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
	
						// Choose the first element that is related to our preferred document
						if (a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
							return -1;
						}
						if (b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
							return 1;
						}
	
						// Maintain original order
						return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
					}
	
					return compare & 4 ? -1 : 1;
				} : function (a, b) {
					// Exit early if the nodes are identical
					if (a === b) {
						hasDuplicate = true;
						return 0;
					}
	
					var cur,
					    i = 0,
					    aup = a.parentNode,
					    bup = b.parentNode,
					    ap = [a],
					    bp = [b];
	
					// Parentless nodes are either documents or disconnected
					if (!aup || !bup) {
						return a === doc ? -1 : b === doc ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
	
						// If the nodes are siblings, we can do a quick check
					} else if (aup === bup) {
						return siblingCheck(a, b);
					}
	
					// Otherwise we need full lists of their ancestors for comparison
					cur = a;
					while (cur = cur.parentNode) {
						ap.unshift(cur);
					}
					cur = b;
					while (cur = cur.parentNode) {
						bp.unshift(cur);
					}
	
					// Walk down the tree looking for a discrepancy
					while (ap[i] === bp[i]) {
						i++;
					}
	
					return i ?
					// Do a sibling check if the nodes have a common ancestor
					siblingCheck(ap[i], bp[i]) :
	
					// Otherwise nodes in our document sort first
					ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
				};
	
				return doc;
			};
	
			Sizzle.matches = function (expr, elements) {
				return Sizzle(expr, null, null, elements);
			};
	
			Sizzle.matchesSelector = function (elem, expr) {
				// Set document vars if needed
				if ((elem.ownerDocument || elem) !== document) {
					setDocument(elem);
				}
	
				// Make sure that attribute selectors are quoted
				expr = expr.replace(rattributeQuotes, "='$1']");
	
				if (support.matchesSelector && documentIsHTML && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
	
					try {
						var ret = matches.call(elem, expr);
	
						// IE 9's matchesSelector returns false on disconnected nodes
						if (ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11) {
							return ret;
						}
					} catch (e) {}
				}
	
				return Sizzle(expr, document, null, [elem]).length > 0;
			};
	
			Sizzle.contains = function (context, elem) {
				// Set document vars if needed
				if ((context.ownerDocument || context) !== document) {
					setDocument(context);
				}
				return contains(context, elem);
			};
	
			Sizzle.attr = function (elem, name) {
				// Set document vars if needed
				if ((elem.ownerDocument || elem) !== document) {
					setDocument(elem);
				}
	
				var fn = Expr.attrHandle[name.toLowerCase()],
	
				// Don't get fooled by Object.prototype properties (jQuery #13807)
				val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
	
				return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
			};
	
			Sizzle.error = function (msg) {
				throw new Error("Syntax error, unrecognized expression: " + msg);
			};
	
			/**
	   * Document sorting and removing duplicates
	   * @param {ArrayLike} results
	   */
			Sizzle.uniqueSort = function (results) {
				var elem,
				    duplicates = [],
				    j = 0,
				    i = 0;
	
				// Unless we *know* we can detect duplicates, assume their presence
				hasDuplicate = !support.detectDuplicates;
				sortInput = !support.sortStable && results.slice(0);
				results.sort(sortOrder);
	
				if (hasDuplicate) {
					while (elem = results[i++]) {
						if (elem === results[i]) {
							j = duplicates.push(i);
						}
					}
					while (j--) {
						results.splice(duplicates[j], 1);
					}
				}
	
				// Clear input after sorting to release objects
				// See https://github.com/jquery/sizzle/pull/225
				sortInput = null;
	
				return results;
			};
	
			/**
	   * Utility function for retrieving the text value of an array of DOM nodes
	   * @param {Array|Element} elem
	   */
			getText = Sizzle.getText = function (elem) {
				var node,
				    ret = "",
				    i = 0,
				    nodeType = elem.nodeType;
	
				if (!nodeType) {
					// If no nodeType, this is expected to be an array
					while (node = elem[i++]) {
						// Do not traverse comment nodes
						ret += getText(node);
					}
				} else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
					// Use textContent for elements
					// innerText usage removed for consistency of new lines (jQuery #11153)
					if (typeof elem.textContent === "string") {
						return elem.textContent;
					} else {
						// Traverse its children
						for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
							ret += getText(elem);
						}
					}
				} else if (nodeType === 3 || nodeType === 4) {
					return elem.nodeValue;
				}
				// Do not include comment or processing instruction nodes
	
				return ret;
			};
	
			Expr = Sizzle.selectors = {
	
				// Can be adjusted by the user
				cacheLength: 50,
	
				createPseudo: markFunction,
	
				match: matchExpr,
	
				attrHandle: {},
	
				find: {},
	
				relative: {
					">": { dir: "parentNode", first: true },
					" ": { dir: "parentNode" },
					"+": { dir: "previousSibling", first: true },
					"~": { dir: "previousSibling" }
				},
	
				preFilter: {
					"ATTR": function ATTR(match) {
						match[1] = match[1].replace(runescape, funescape);
	
						// Move the given value to match[3] whether quoted or unquoted
						match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
	
						if (match[2] === "~=") {
							match[3] = " " + match[3] + " ";
						}
	
						return match.slice(0, 4);
					},
	
					"CHILD": function CHILD(match) {
						/* matches from matchExpr["CHILD"]
	     	1 type (only|nth|...)
	     	2 what (child|of-type)
	     	3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
	     	4 xn-component of xn+y argument ([+-]?\d*n|)
	     	5 sign of xn-component
	     	6 x of xn-component
	     	7 sign of y-component
	     	8 y of y-component
	     */
						match[1] = match[1].toLowerCase();
	
						if (match[1].slice(0, 3) === "nth") {
							// nth-* requires argument
							if (!match[3]) {
								Sizzle.error(match[0]);
							}
	
							// numeric x and y parameters for Expr.filter.CHILD
							// remember that false/true cast respectively to 0/1
							match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
							match[5] = +(match[7] + match[8] || match[3] === "odd");
	
							// other types prohibit arguments
						} else if (match[3]) {
							Sizzle.error(match[0]);
						}
	
						return match;
					},
	
					"PSEUDO": function PSEUDO(match) {
						var excess,
						    unquoted = !match[6] && match[2];
	
						if (matchExpr["CHILD"].test(match[0])) {
							return null;
						}
	
						// Accept quoted arguments as-is
						if (match[3]) {
							match[2] = match[4] || match[5] || "";
	
							// Strip excess characters from unquoted arguments
						} else if (unquoted && rpseudo.test(unquoted) && (
						// Get excess from tokenize (recursively)
						excess = tokenize(unquoted, true)) && (
						// advance to the next closing parenthesis
						excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
	
							// excess is a negative index
							match[0] = match[0].slice(0, excess);
							match[2] = unquoted.slice(0, excess);
						}
	
						// Return only captures needed by the pseudo filter method (type and argument)
						return match.slice(0, 3);
					}
				},
	
				filter: {
	
					"TAG": function TAG(nodeNameSelector) {
						var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
						return nodeNameSelector === "*" ? function () {
							return true;
						} : function (elem) {
							return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
						};
					},
	
					"CLASS": function CLASS(className) {
						var pattern = classCache[className + " "];
	
						return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
							return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
						});
					},
	
					"ATTR": function ATTR(name, operator, check) {
						return function (elem) {
							var result = Sizzle.attr(elem, name);
	
							if (result == null) {
								return operator === "!=";
							}
							if (!operator) {
								return true;
							}
	
							result += "";
	
							return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
						};
					},
	
					"CHILD": function CHILD(type, what, argument, first, last) {
						var simple = type.slice(0, 3) !== "nth",
						    forward = type.slice(-4) !== "last",
						    ofType = what === "of-type";
	
						return first === 1 && last === 0 ?
	
						// Shortcut for :nth-*(n)
						function (elem) {
							return !!elem.parentNode;
						} : function (elem, context, xml) {
							var cache,
							    outerCache,
							    node,
							    diff,
							    nodeIndex,
							    start,
							    dir = simple !== forward ? "nextSibling" : "previousSibling",
							    parent = elem.parentNode,
							    name = ofType && elem.nodeName.toLowerCase(),
							    useCache = !xml && !ofType;
	
							if (parent) {
	
								// :(first|last|only)-(child|of-type)
								if (simple) {
									while (dir) {
										node = elem;
										while (node = node[dir]) {
											if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
												return false;
											}
										}
										// Reverse direction for :only-* (if we haven't yet done so)
										start = dir = type === "only" && !start && "nextSibling";
									}
									return true;
								}
	
								start = [forward ? parent.firstChild : parent.lastChild];
	
								// non-xml :nth-child(...) stores cache data on `parent`
								if (forward && useCache) {
									// Seek `elem` from a previously-cached index
									outerCache = parent[expando] || (parent[expando] = {});
									cache = outerCache[type] || [];
									nodeIndex = cache[0] === dirruns && cache[1];
									diff = cache[0] === dirruns && cache[2];
									node = nodeIndex && parent.childNodes[nodeIndex];
	
									while (node = ++nodeIndex && node && node[dir] || (
	
									// Fallback to seeking `elem` from the start
									diff = nodeIndex = 0) || start.pop()) {
	
										// When found, cache indexes on `parent` and break
										if (node.nodeType === 1 && ++diff && node === elem) {
											outerCache[type] = [dirruns, nodeIndex, diff];
											break;
										}
									}
	
									// Use previously-cached element index if available
								} else if (useCache && (cache = (elem[expando] || (elem[expando] = {}))[type]) && cache[0] === dirruns) {
									diff = cache[1];
	
									// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
								} else {
									// Use the same loop as above to seek `elem` from the start
									while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
	
										if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
											// Cache the index of each encountered element
											if (useCache) {
												(node[expando] || (node[expando] = {}))[type] = [dirruns, diff];
											}
	
											if (node === elem) {
												break;
											}
										}
									}
								}
	
								// Incorporate the offset, then check against cycle size
								diff -= last;
								return diff === first || diff % first === 0 && diff / first >= 0;
							}
						};
					},
	
					"PSEUDO": function PSEUDO(pseudo, argument) {
						// pseudo-class names are case-insensitive
						// http://www.w3.org/TR/selectors/#pseudo-classes
						// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
						// Remember that setFilters inherits from pseudos
						var args,
						    fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
	
						// The user may use createPseudo to indicate that
						// arguments are needed to create the filter function
						// just as Sizzle does
						if (fn[expando]) {
							return fn(argument);
						}
	
						// But maintain support for old signatures
						if (fn.length > 1) {
							args = [pseudo, pseudo, "", argument];
							return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
								var idx,
								    matched = fn(seed, argument),
								    i = matched.length;
								while (i--) {
									idx = indexOf(seed, matched[i]);
									seed[idx] = !(matches[idx] = matched[i]);
								}
							}) : function (elem) {
								return fn(elem, 0, args);
							};
						}
	
						return fn;
					}
				},
	
				pseudos: {
					// Potentially complex pseudos
					"not": markFunction(function (selector) {
						// Trim the selector passed to compile
						// to avoid treating leading and trailing
						// spaces as combinators
						var input = [],
						    results = [],
						    matcher = compile(selector.replace(rtrim, "$1"));
	
						return matcher[expando] ? markFunction(function (seed, matches, context, xml) {
							var elem,
							    unmatched = matcher(seed, null, xml, []),
							    i = seed.length;
	
							// Match elements unmatched by `matcher`
							while (i--) {
								if (elem = unmatched[i]) {
									seed[i] = !(matches[i] = elem);
								}
							}
						}) : function (elem, context, xml) {
							input[0] = elem;
							matcher(input, null, xml, results);
							// Don't keep the element (issue #299)
							input[0] = null;
							return !results.pop();
						};
					}),
	
					"has": markFunction(function (selector) {
						return function (elem) {
							return Sizzle(selector, elem).length > 0;
						};
					}),
	
					"contains": markFunction(function (text) {
						text = text.replace(runescape, funescape);
						return function (elem) {
							return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
						};
					}),
	
					// "Whether an element is represented by a :lang() selector
					// is based solely on the element's language value
					// being equal to the identifier C,
					// or beginning with the identifier C immediately followed by "-".
					// The matching of C against the element's language value is performed case-insensitively.
					// The identifier C does not have to be a valid language name."
					// http://www.w3.org/TR/selectors/#lang-pseudo
					"lang": markFunction(function (lang) {
						// lang value must be a valid identifier
						if (!ridentifier.test(lang || "")) {
							Sizzle.error("unsupported lang: " + lang);
						}
						lang = lang.replace(runescape, funescape).toLowerCase();
						return function (elem) {
							var elemLang;
							do {
								if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
	
									elemLang = elemLang.toLowerCase();
									return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
								}
							} while ((elem = elem.parentNode) && elem.nodeType === 1);
							return false;
						};
					}),
	
					// Miscellaneous
					"target": function target(elem) {
						var hash = window.location && window.location.hash;
						return hash && hash.slice(1) === elem.id;
					},
	
					"root": function root(elem) {
						return elem === docElem;
					},
	
					"focus": function focus(elem) {
						return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
					},
	
					// Boolean properties
					"enabled": function enabled(elem) {
						return elem.disabled === false;
					},
	
					"disabled": function disabled(elem) {
						return elem.disabled === true;
					},
	
					"checked": function checked(elem) {
						// In CSS3, :checked should return both checked and selected elements
						// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
						var nodeName = elem.nodeName.toLowerCase();
						return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
					},
	
					"selected": function selected(elem) {
						// Accessing this property makes selected-by-default
						// options in Safari work properly
						if (elem.parentNode) {
							elem.parentNode.selectedIndex;
						}
	
						return elem.selected === true;
					},
	
					// Contents
					"empty": function empty(elem) {
						// http://www.w3.org/TR/selectors/#empty-pseudo
						// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
						//   but not by others (comment: 8; processing instruction: 7; etc.)
						// nodeType < 6 works because attributes (2) do not appear as children
						for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
							if (elem.nodeType < 6) {
								return false;
							}
						}
						return true;
					},
	
					"parent": function parent(elem) {
						return !Expr.pseudos["empty"](elem);
					},
	
					// Element/input types
					"header": function header(elem) {
						return rheader.test(elem.nodeName);
					},
	
					"input": function input(elem) {
						return rinputs.test(elem.nodeName);
					},
	
					"button": function button(elem) {
						var name = elem.nodeName.toLowerCase();
						return name === "input" && elem.type === "button" || name === "button";
					},
	
					"text": function text(elem) {
						var attr;
						return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && (
	
						// Support: IE<8
						// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
						(attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
					},
	
					// Position-in-collection
					"first": createPositionalPseudo(function () {
						return [0];
					}),
	
					"last": createPositionalPseudo(function (matchIndexes, length) {
						return [length - 1];
					}),
	
					"eq": createPositionalPseudo(function (matchIndexes, length, argument) {
						return [argument < 0 ? argument + length : argument];
					}),
	
					"even": createPositionalPseudo(function (matchIndexes, length) {
						var i = 0;
						for (; i < length; i += 2) {
							matchIndexes.push(i);
						}
						return matchIndexes;
					}),
	
					"odd": createPositionalPseudo(function (matchIndexes, length) {
						var i = 1;
						for (; i < length; i += 2) {
							matchIndexes.push(i);
						}
						return matchIndexes;
					}),
	
					"lt": createPositionalPseudo(function (matchIndexes, length, argument) {
						var i = argument < 0 ? argument + length : argument;
						for (; --i >= 0;) {
							matchIndexes.push(i);
						}
						return matchIndexes;
					}),
	
					"gt": createPositionalPseudo(function (matchIndexes, length, argument) {
						var i = argument < 0 ? argument + length : argument;
						for (; ++i < length;) {
							matchIndexes.push(i);
						}
						return matchIndexes;
					})
				}
			};
	
			Expr.pseudos["nth"] = Expr.pseudos["eq"];
	
			// Add button/input type pseudos
			for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
				Expr.pseudos[i] = createInputPseudo(i);
			}
			for (i in { submit: true, reset: true }) {
				Expr.pseudos[i] = createButtonPseudo(i);
			}
	
			// Easy API for creating new setFilters
			function setFilters() {}
			setFilters.prototype = Expr.filters = Expr.pseudos;
			Expr.setFilters = new setFilters();
	
			tokenize = Sizzle.tokenize = function (selector, parseOnly) {
				var matched,
				    match,
				    tokens,
				    type,
				    soFar,
				    groups,
				    preFilters,
				    cached = tokenCache[selector + " "];
	
				if (cached) {
					return parseOnly ? 0 : cached.slice(0);
				}
	
				soFar = selector;
				groups = [];
				preFilters = Expr.preFilter;
	
				while (soFar) {
	
					// Comma and first run
					if (!matched || (match = rcomma.exec(soFar))) {
						if (match) {
							// Don't consume trailing commas as valid
							soFar = soFar.slice(match[0].length) || soFar;
						}
						groups.push(tokens = []);
					}
	
					matched = false;
	
					// Combinators
					if (match = rcombinators.exec(soFar)) {
						matched = match.shift();
						tokens.push({
							value: matched,
							// Cast descendant combinators to space
							type: match[0].replace(rtrim, " ")
						});
						soFar = soFar.slice(matched.length);
					}
	
					// Filters
					for (type in Expr.filter) {
						if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
							matched = match.shift();
							tokens.push({
								value: matched,
								type: type,
								matches: match
							});
							soFar = soFar.slice(matched.length);
						}
					}
	
					if (!matched) {
						break;
					}
				}
	
				// Return the length of the invalid excess
				// if we're just parsing
				// Otherwise, throw an error or return tokens
				return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) :
				// Cache the tokens
				tokenCache(selector, groups).slice(0);
			};
	
			function toSelector(tokens) {
				var i = 0,
				    len = tokens.length,
				    selector = "";
				for (; i < len; i++) {
					selector += tokens[i].value;
				}
				return selector;
			}
	
			function addCombinator(matcher, combinator, base) {
				var dir = combinator.dir,
				    checkNonElements = base && dir === "parentNode",
				    doneName = done++;
	
				return combinator.first ?
				// Check against closest ancestor/preceding element
				function (elem, context, xml) {
					while (elem = elem[dir]) {
						if (elem.nodeType === 1 || checkNonElements) {
							return matcher(elem, context, xml);
						}
					}
				} :
	
				// Check against all ancestor/preceding elements
				function (elem, context, xml) {
					var oldCache,
					    outerCache,
					    newCache = [dirruns, doneName];
	
					// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
					if (xml) {
						while (elem = elem[dir]) {
							if (elem.nodeType === 1 || checkNonElements) {
								if (matcher(elem, context, xml)) {
									return true;
								}
							}
						}
					} else {
						while (elem = elem[dir]) {
							if (elem.nodeType === 1 || checkNonElements) {
								outerCache = elem[expando] || (elem[expando] = {});
								if ((oldCache = outerCache[dir]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
	
									// Assign to newCache so results back-propagate to previous elements
									return newCache[2] = oldCache[2];
								} else {
									// Reuse newcache so results back-propagate to previous elements
									outerCache[dir] = newCache;
	
									// A match means we're done; a fail means we have to keep checking
									if (newCache[2] = matcher(elem, context, xml)) {
										return true;
									}
								}
							}
						}
					}
				};
			}
	
			function elementMatcher(matchers) {
				return matchers.length > 1 ? function (elem, context, xml) {
					var i = matchers.length;
					while (i--) {
						if (!matchers[i](elem, context, xml)) {
							return false;
						}
					}
					return true;
				} : matchers[0];
			}
	
			function multipleContexts(selector, contexts, results) {
				var i = 0,
				    len = contexts.length;
				for (; i < len; i++) {
					Sizzle(selector, contexts[i], results);
				}
				return results;
			}
	
			function condense(unmatched, map, filter, context, xml) {
				var elem,
				    newUnmatched = [],
				    i = 0,
				    len = unmatched.length,
				    mapped = map != null;
	
				for (; i < len; i++) {
					if (elem = unmatched[i]) {
						if (!filter || filter(elem, context, xml)) {
							newUnmatched.push(elem);
							if (mapped) {
								map.push(i);
							}
						}
					}
				}
	
				return newUnmatched;
			}
	
			function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
				if (postFilter && !postFilter[expando]) {
					postFilter = setMatcher(postFilter);
				}
				if (postFinder && !postFinder[expando]) {
					postFinder = setMatcher(postFinder, postSelector);
				}
				return markFunction(function (seed, results, context, xml) {
					var temp,
					    i,
					    elem,
					    preMap = [],
					    postMap = [],
					    preexisting = results.length,
	
	
					// Get initial elements from seed or context
					elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
	
	
					// Prefilter to get matcher input, preserving a map for seed-results synchronization
					matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
					    matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || (seed ? preFilter : preexisting || postFilter) ?
	
					// ...intermediate processing is necessary
					[] :
	
					// ...otherwise use results directly
					results : matcherIn;
	
					// Find primary matches
					if (matcher) {
						matcher(matcherIn, matcherOut, context, xml);
					}
	
					// Apply postFilter
					if (postFilter) {
						temp = condense(matcherOut, postMap);
						postFilter(temp, [], context, xml);
	
						// Un-match failing elements by moving them back to matcherIn
						i = temp.length;
						while (i--) {
							if (elem = temp[i]) {
								matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
							}
						}
					}
	
					if (seed) {
						if (postFinder || preFilter) {
							if (postFinder) {
								// Get the final matcherOut by condensing this intermediate into postFinder contexts
								temp = [];
								i = matcherOut.length;
								while (i--) {
									if (elem = matcherOut[i]) {
										// Restore matcherIn since elem is not yet a final match
										temp.push(matcherIn[i] = elem);
									}
								}
								postFinder(null, matcherOut = [], temp, xml);
							}
	
							// Move matched elements from seed to results to keep them synchronized
							i = matcherOut.length;
							while (i--) {
								if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {
	
									seed[temp] = !(results[temp] = elem);
								}
							}
						}
	
						// Add elements to results, through postFinder if defined
					} else {
						matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
						if (postFinder) {
							postFinder(null, results, matcherOut, xml);
						} else {
							push.apply(results, matcherOut);
						}
					}
				});
			}
	
			function matcherFromTokens(tokens) {
				var checkContext,
				    matcher,
				    j,
				    len = tokens.length,
				    leadingRelative = Expr.relative[tokens[0].type],
				    implicitRelative = leadingRelative || Expr.relative[" "],
				    i = leadingRelative ? 1 : 0,
	
	
				// The foundational matcher ensures that elements are reachable from top-level context(s)
				matchContext = addCombinator(function (elem) {
					return elem === checkContext;
				}, implicitRelative, true),
				    matchAnyContext = addCombinator(function (elem) {
					return indexOf(checkContext, elem) > -1;
				}, implicitRelative, true),
				    matchers = [function (elem, context, xml) {
					var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
					// Avoid hanging onto element (issue #299)
					checkContext = null;
					return ret;
				}];
	
				for (; i < len; i++) {
					if (matcher = Expr.relative[tokens[i].type]) {
						matchers = [addCombinator(elementMatcher(matchers), matcher)];
					} else {
						matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
	
						// Return special upon seeing a positional matcher
						if (matcher[expando]) {
							// Find the next relative operator (if any) for proper handling
							j = ++i;
							for (; j < len; j++) {
								if (Expr.relative[tokens[j].type]) {
									break;
								}
							}
							return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice(0, i - 1).concat({ value: tokens[i - 2].type === " " ? "*" : "" })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
						}
						matchers.push(matcher);
					}
				}
	
				return elementMatcher(matchers);
			}
	
			function matcherFromGroupMatchers(elementMatchers, setMatchers) {
				var bySet = setMatchers.length > 0,
				    byElement = elementMatchers.length > 0,
				    superMatcher = function superMatcher(seed, context, xml, results, outermost) {
					var elem,
					    j,
					    matcher,
					    matchedCount = 0,
					    i = "0",
					    unmatched = seed && [],
					    setMatched = [],
					    contextBackup = outermostContext,
	
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]("*", outermost),
	
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1,
					    len = elems.length;
	
					if (outermost) {
						outermostContext = context !== document && context;
					}
	
					// Add elements passing elementMatchers directly to results
					// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
					// Support: IE<9, Safari
					// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
					for (; i !== len && (elem = elems[i]) != null; i++) {
						if (byElement && elem) {
							j = 0;
							while (matcher = elementMatchers[j++]) {
								if (matcher(elem, context, xml)) {
									results.push(elem);
									break;
								}
							}
							if (outermost) {
								dirruns = dirrunsUnique;
							}
						}
	
						// Track unmatched elements for set filters
						if (bySet) {
							// They will have gone through all possible matchers
							if (elem = !matcher && elem) {
								matchedCount--;
							}
	
							// Lengthen the array for every element, matched or not
							if (seed) {
								unmatched.push(elem);
							}
						}
					}
	
					// Apply set filters to unmatched elements
					matchedCount += i;
					if (bySet && i !== matchedCount) {
						j = 0;
						while (matcher = setMatchers[j++]) {
							matcher(unmatched, setMatched, context, xml);
						}
	
						if (seed) {
							// Reintegrate element matches to eliminate the need for sorting
							if (matchedCount > 0) {
								while (i--) {
									if (!(unmatched[i] || setMatched[i])) {
										setMatched[i] = pop.call(results);
									}
								}
							}
	
							// Discard index placeholder values to get only actual matches
							setMatched = condense(setMatched);
						}
	
						// Add matches to results
						push.apply(results, setMatched);
	
						// Seedless set matches succeeding multiple successful matchers stipulate sorting
						if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
	
							Sizzle.uniqueSort(results);
						}
					}
	
					// Override manipulation of globals by nested matchers
					if (outermost) {
						dirruns = dirrunsUnique;
						outermostContext = contextBackup;
					}
	
					return unmatched;
				};
	
				return bySet ? markFunction(superMatcher) : superMatcher;
			}
	
			compile = Sizzle.compile = function (selector, match /* Internal Use Only */) {
				var i,
				    setMatchers = [],
				    elementMatchers = [],
				    cached = compilerCache[selector + " "];
	
				if (!cached) {
					// Generate a function of recursive functions that can be used to check each element
					if (!match) {
						match = tokenize(selector);
					}
					i = match.length;
					while (i--) {
						cached = matcherFromTokens(match[i]);
						if (cached[expando]) {
							setMatchers.push(cached);
						} else {
							elementMatchers.push(cached);
						}
					}
	
					// Cache the compiled function
					cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
	
					// Save selector and tokenization
					cached.selector = selector;
				}
				return cached;
			};
	
			/**
	   * A low-level selection function that works with Sizzle's compiled
	   *  selector functions
	   * @param {String|Function} selector A selector or a pre-compiled
	   *  selector function built with Sizzle.compile
	   * @param {Element} context
	   * @param {Array} [results]
	   * @param {Array} [seed] A set of elements to match against
	   */
			select = Sizzle.select = function (selector, context, results, seed) {
				var i,
				    tokens,
				    token,
				    type,
				    find,
				    compiled = typeof selector === "function" && selector,
				    match = !seed && tokenize(selector = compiled.selector || selector);
	
				results = results || [];
	
				// Try to minimize operations if there is no seed and only one group
				if (match.length === 1) {
	
					// Take a shortcut and set the context if the root selector is an ID
					tokens = match[0] = match[0].slice(0);
					if (tokens.length > 2 && (token = tokens[0]).type === "ID" && support.getById && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
	
						context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
						if (!context) {
							return results;
	
							// Precompiled matchers will still verify ancestry, so step up a level
						} else if (compiled) {
							context = context.parentNode;
						}
	
						selector = selector.slice(tokens.shift().value.length);
					}
	
					// Fetch a seed set for right-to-left matching
					i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
					while (i--) {
						token = tokens[i];
	
						// Abort if we hit a combinator
						if (Expr.relative[type = token.type]) {
							break;
						}
						if (find = Expr.find[type]) {
							// Search, expanding context for leading sibling combinators
							if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
	
								// If seed is empty or no tokens remain, we can return early
								tokens.splice(i, 1);
								selector = seed.length && toSelector(tokens);
								if (!selector) {
									push.apply(results, seed);
									return results;
								}
	
								break;
							}
						}
					}
				}
	
				// Compile and execute a filtering function if one is not provided
				// Provide `match` to avoid retokenization if we modified the selector above
				(compiled || compile(selector, match))(seed, context, !documentIsHTML, results, rsibling.test(selector) && testContext(context.parentNode) || context);
				return results;
			};
	
			// One-time assignments
	
			// Sort stability
			support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
	
			// Support: Chrome 14-35+
			// Always assume duplicates if they aren't passed to the comparison function
			support.detectDuplicates = !!hasDuplicate;
	
			// Initialize against the default document
			setDocument();
	
			// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
			// Detached nodes confoundingly follow *each other*
			support.sortDetached = assert(function (div1) {
				// Should return 1, but returns 4 (following)
				return div1.compareDocumentPosition(document.createElement("div")) & 1;
			});
	
			// Support: IE<8
			// Prevent attribute/property "interpolation"
			// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
			if (!assert(function (div) {
				div.innerHTML = "<a href='#'></a>";
				return div.firstChild.getAttribute("href") === "#";
			})) {
				addHandle("type|href|height|width", function (elem, name, isXML) {
					if (!isXML) {
						return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
					}
				});
			}
	
			// Support: IE<9
			// Use defaultValue in place of getAttribute("value")
			if (!support.attributes || !assert(function (div) {
				div.innerHTML = "<input/>";
				div.firstChild.setAttribute("value", "");
				return div.firstChild.getAttribute("value") === "";
			})) {
				addHandle("value", function (elem, name, isXML) {
					if (!isXML && elem.nodeName.toLowerCase() === "input") {
						return elem.defaultValue;
					}
				});
			}
	
			// Support: IE<9
			// Use getAttributeNode to fetch booleans when getAttribute lies
			if (!assert(function (div) {
				return div.getAttribute("disabled") == null;
			})) {
				addHandle(booleans, function (elem, name, isXML) {
					var val;
					if (!isXML) {
						return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
					}
				});
			}
	
			return Sizzle;
		}(window);
	
		jQuery.find = Sizzle;
		jQuery.expr = Sizzle.selectors;
		jQuery.expr[":"] = jQuery.expr.pseudos;
		jQuery.unique = Sizzle.uniqueSort;
		jQuery.text = Sizzle.getText;
		jQuery.isXMLDoc = Sizzle.isXML;
		jQuery.contains = Sizzle.contains;
	
		var rneedsContext = jQuery.expr.match.needsContext;
	
		var rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/;
	
		var risSimple = /^.[^:#\[\.,]*$/;
	
		// Implement the identical functionality for filter and not
		function winnow(elements, qualifier, not) {
			if (jQuery.isFunction(qualifier)) {
				return jQuery.grep(elements, function (elem, i) {
					/* jshint -W018 */
					return !!qualifier.call(elem, i, elem) !== not;
				});
			}
	
			if (qualifier.nodeType) {
				return jQuery.grep(elements, function (elem) {
					return elem === qualifier !== not;
				});
			}
	
			if (typeof qualifier === "string") {
				if (risSimple.test(qualifier)) {
					return jQuery.filter(qualifier, elements, not);
				}
	
				qualifier = jQuery.filter(qualifier, elements);
			}
	
			return jQuery.grep(elements, function (elem) {
				return jQuery.inArray(elem, qualifier) >= 0 !== not;
			});
		}
	
		jQuery.filter = function (expr, elems, not) {
			var elem = elems[0];
	
			if (not) {
				expr = ":not(" + expr + ")";
			}
	
			return elems.length === 1 && elem.nodeType === 1 ? jQuery.find.matchesSelector(elem, expr) ? [elem] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
				return elem.nodeType === 1;
			}));
		};
	
		jQuery.fn.extend({
			find: function find(selector) {
				var i,
				    ret = [],
				    self = this,
				    len = self.length;
	
				if (typeof selector !== "string") {
					return this.pushStack(jQuery(selector).filter(function () {
						for (i = 0; i < len; i++) {
							if (jQuery.contains(self[i], this)) {
								return true;
							}
						}
					}));
				}
	
				for (i = 0; i < len; i++) {
					jQuery.find(selector, self[i], ret);
				}
	
				// Needed because $( selector, context ) becomes $( context ).find( selector )
				ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret);
				ret.selector = this.selector ? this.selector + " " + selector : selector;
				return ret;
			},
			filter: function filter(selector) {
				return this.pushStack(winnow(this, selector || [], false));
			},
			not: function not(selector) {
				return this.pushStack(winnow(this, selector || [], true));
			},
			is: function is(selector) {
				return !!winnow(this,
	
				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
			}
		});
	
		// Initialize a jQuery object
	
	
		// A central reference to the root jQuery(document)
		var rootjQuery,
	
	
		// Use the correct document accordingly with window argument (sandbox)
		document = window.document,
	
	
		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		    init = jQuery.fn.init = function (selector, context) {
			var match, elem;
	
			// HANDLE: $(""), $(null), $(undefined), $(false)
			if (!selector) {
				return this;
			}
	
			// Handle HTML strings
			if (typeof selector === "string") {
				if (selector.charAt(0) === "<" && selector.charAt(selector.length - 1) === ">" && selector.length >= 3) {
					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [null, selector, null];
				} else {
					match = rquickExpr.exec(selector);
				}
	
				// Match html or make sure no context is specified for #id
				if (match && (match[1] || !context)) {
	
					// HANDLE: $(html) -> $(array)
					if (match[1]) {
						context = context instanceof jQuery ? context[0] : context;
	
						// scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));
	
						// HANDLE: $(html, props)
						if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
							for (match in context) {
								// Properties of context are called as methods if possible
								if (jQuery.isFunction(this[match])) {
									this[match](context[match]);
	
									// ...and otherwise set as attributes
								} else {
									this.attr(match, context[match]);
								}
							}
						}
	
						return this;
	
						// HANDLE: $(#id)
					} else {
						elem = document.getElementById(match[2]);
	
						// Check parentNode to catch when Blackberry 4.6 returns
						// nodes that are no longer in the document #6963
						if (elem && elem.parentNode) {
							// Handle the case where IE and Opera return items
							// by name instead of ID
							if (elem.id !== match[2]) {
								return rootjQuery.find(selector);
							}
	
							// Otherwise, we inject the element directly into the jQuery object
							this.length = 1;
							this[0] = elem;
						}
	
						this.context = document;
						this.selector = selector;
						return this;
					}
	
					// HANDLE: $(expr, $(...))
				} else if (!context || context.jquery) {
					return (context || rootjQuery).find(selector);
	
					// HANDLE: $(expr, context)
					// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor(context).find(selector);
				}
	
				// HANDLE: $(DOMElement)
			} else if (selector.nodeType) {
				this.context = this[0] = selector;
				this.length = 1;
				return this;
	
				// HANDLE: $(function)
				// Shortcut for document ready
			} else if (jQuery.isFunction(selector)) {
				return typeof rootjQuery.ready !== "undefined" ? rootjQuery.ready(selector) :
				// Execute immediately if ready is not present
				selector(jQuery);
			}
	
			if (selector.selector !== undefined) {
				this.selector = selector.selector;
				this.context = selector.context;
			}
	
			return jQuery.makeArray(selector, this);
		};
	
		// Give the init function the jQuery prototype for later instantiation
		init.prototype = jQuery.fn;
	
		// Initialize central reference
		rootjQuery = jQuery(document);
	
		var rparentsprev = /^(?:parents|prev(?:Until|All))/,
	
		// methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};
	
		jQuery.extend({
			dir: function dir(elem, _dir, until) {
				var matched = [],
				    cur = elem[_dir];
	
				while (cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery(cur).is(until))) {
					if (cur.nodeType === 1) {
						matched.push(cur);
					}
					cur = cur[_dir];
				}
				return matched;
			},
	
			sibling: function sibling(n, elem) {
				var r = [];
	
				for (; n; n = n.nextSibling) {
					if (n.nodeType === 1 && n !== elem) {
						r.push(n);
					}
				}
	
				return r;
			}
		});
	
		jQuery.fn.extend({
			has: function has(target) {
				var i,
				    targets = jQuery(target, this),
				    len = targets.length;
	
				return this.filter(function () {
					for (i = 0; i < len; i++) {
						if (jQuery.contains(this, targets[i])) {
							return true;
						}
					}
				});
			},
	
			closest: function closest(selectors, context) {
				var cur,
				    i = 0,
				    l = this.length,
				    matched = [],
				    pos = rneedsContext.test(selectors) || typeof selectors !== "string" ? jQuery(selectors, context || this.context) : 0;
	
				for (; i < l; i++) {
					for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
						// Always skip document fragments
						if (cur.nodeType < 11 && (pos ? pos.index(cur) > -1 :
	
						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
	
							matched.push(cur);
							break;
						}
					}
				}
	
				return this.pushStack(matched.length > 1 ? jQuery.unique(matched) : matched);
			},
	
			// Determine the position of an element within
			// the matched set of elements
			index: function index(elem) {
	
				// No argument, return index in parent
				if (!elem) {
					return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
				}
	
				// index in selector
				if (typeof elem === "string") {
					return jQuery.inArray(this[0], jQuery(elem));
				}
	
				// Locate the position of the desired element
				return jQuery.inArray(
				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[0] : elem, this);
			},
	
			add: function add(selector, context) {
				return this.pushStack(jQuery.unique(jQuery.merge(this.get(), jQuery(selector, context))));
			},
	
			addBack: function addBack(selector) {
				return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
			}
		});
	
		function sibling(cur, dir) {
			do {
				cur = cur[dir];
			} while (cur && cur.nodeType !== 1);
	
			return cur;
		}
	
		jQuery.each({
			parent: function parent(elem) {
				var parent = elem.parentNode;
				return parent && parent.nodeType !== 11 ? parent : null;
			},
			parents: function parents(elem) {
				return jQuery.dir(elem, "parentNode");
			},
			parentsUntil: function parentsUntil(elem, i, until) {
				return jQuery.dir(elem, "parentNode", until);
			},
			next: function next(elem) {
				return sibling(elem, "nextSibling");
			},
			prev: function prev(elem) {
				return sibling(elem, "previousSibling");
			},
			nextAll: function nextAll(elem) {
				return jQuery.dir(elem, "nextSibling");
			},
			prevAll: function prevAll(elem) {
				return jQuery.dir(elem, "previousSibling");
			},
			nextUntil: function nextUntil(elem, i, until) {
				return jQuery.dir(elem, "nextSibling", until);
			},
			prevUntil: function prevUntil(elem, i, until) {
				return jQuery.dir(elem, "previousSibling", until);
			},
			siblings: function siblings(elem) {
				return jQuery.sibling((elem.parentNode || {}).firstChild, elem);
			},
			children: function children(elem) {
				return jQuery.sibling(elem.firstChild);
			},
			contents: function contents(elem) {
				return jQuery.nodeName(elem, "iframe") ? elem.contentDocument || elem.contentWindow.document : jQuery.merge([], elem.childNodes);
			}
		}, function (name, fn) {
			jQuery.fn[name] = function (until, selector) {
				var ret = jQuery.map(this, fn, until);
	
				if (name.slice(-5) !== "Until") {
					selector = until;
				}
	
				if (selector && typeof selector === "string") {
					ret = jQuery.filter(selector, ret);
				}
	
				if (this.length > 1) {
					// Remove duplicates
					if (!guaranteedUnique[name]) {
						ret = jQuery.unique(ret);
					}
	
					// Reverse order for parents* and prev-derivatives
					if (rparentsprev.test(name)) {
						ret = ret.reverse();
					}
				}
	
				return this.pushStack(ret);
			};
		});
		var rnotwhite = /\S+/g;
	
		// String to Object options format cache
		var optionsCache = {};
	
		// Convert String-formatted options into Object-formatted ones and store in cache
		function createOptions(options) {
			var object = optionsCache[options] = {};
			jQuery.each(options.match(rnotwhite) || [], function (_, flag) {
				object[flag] = true;
			});
			return object;
		}
	
		/*
	  * Create a callback list using the following parameters:
	  *
	  *	options: an optional list of space-separated options that will change how
	  *			the callback list behaves or a more traditional option object
	  *
	  * By default a callback list will act like an event callback list and can be
	  * "fired" multiple times.
	  *
	  * Possible options:
	  *
	  *	once:			will ensure the callback list can only be fired once (like a Deferred)
	  *
	  *	memory:			will keep track of previous values and will call any callback added
	  *					after the list has been fired right away with the latest "memorized"
	  *					values (like a Deferred)
	  *
	  *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	  *
	  *	stopOnFalse:	interrupt callings when a callback returns false
	  *
	  */
		jQuery.Callbacks = function (options) {
	
			// Convert options from String-formatted to Object-formatted if needed
			// (we check in cache first)
			options = typeof options === "string" ? optionsCache[options] || createOptions(options) : jQuery.extend({}, options);
	
			var // Flag to know if list is currently firing
			firing,
	
			// Last fire value (for non-forgettable lists)
			memory,
	
			// Flag to know if list was already fired
			_fired,
	
			// End of the loop when firing
			firingLength,
	
			// Index of currently firing callback (modified by remove if needed)
			firingIndex,
	
			// First callback to fire (used internally by add and fireWith)
			firingStart,
	
			// Actual callback list
			list = [],
	
			// Stack of fire calls for repeatable lists
			stack = !options.once && [],
	
			// Fire callbacks
			fire = function fire(data) {
				memory = options.memory && data;
				_fired = true;
				firingIndex = firingStart || 0;
				firingStart = 0;
				firingLength = list.length;
				firing = true;
				for (; list && firingIndex < firingLength; firingIndex++) {
					if (list[firingIndex].apply(data[0], data[1]) === false && options.stopOnFalse) {
						memory = false; // To prevent further calls using add
						break;
					}
				}
				firing = false;
				if (list) {
					if (stack) {
						if (stack.length) {
							fire(stack.shift());
						}
					} else if (memory) {
						list = [];
					} else {
						self.disable();
					}
				}
			},
	
			// Actual Callbacks object
			self = {
				// Add a callback or a collection of callbacks to the list
				add: function add() {
					if (list) {
						// First, we save the current length
						var start = list.length;
						(function add(args) {
							jQuery.each(args, function (_, arg) {
								var type = jQuery.type(arg);
								if (type === "function") {
									if (!options.unique || !self.has(arg)) {
										list.push(arg);
									}
								} else if (arg && arg.length && type !== "string") {
									// Inspect recursively
									add(arg);
								}
							});
						})(arguments);
						// Do we need to add the callbacks to the
						// current firing batch?
						if (firing) {
							firingLength = list.length;
							// With memory, if we're not firing then
							// we should call right away
						} else if (memory) {
							firingStart = start;
							fire(memory);
						}
					}
					return this;
				},
				// Remove a callback from the list
				remove: function remove() {
					if (list) {
						jQuery.each(arguments, function (_, arg) {
							var index;
							while ((index = jQuery.inArray(arg, list, index)) > -1) {
								list.splice(index, 1);
								// Handle firing indexes
								if (firing) {
									if (index <= firingLength) {
										firingLength--;
									}
									if (index <= firingIndex) {
										firingIndex--;
									}
								}
							}
						});
					}
					return this;
				},
				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function has(fn) {
					return fn ? jQuery.inArray(fn, list) > -1 : !!(list && list.length);
				},
				// Remove all callbacks from the list
				empty: function empty() {
					list = [];
					firingLength = 0;
					return this;
				},
				// Have the list do nothing anymore
				disable: function disable() {
					list = stack = memory = undefined;
					return this;
				},
				// Is it disabled?
				disabled: function disabled() {
					return !list;
				},
				// Lock the list in its current state
				lock: function lock() {
					stack = undefined;
					if (!memory) {
						self.disable();
					}
					return this;
				},
				// Is it locked?
				locked: function locked() {
					return !stack;
				},
				// Call all callbacks with the given context and arguments
				fireWith: function fireWith(context, args) {
					if (list && (!_fired || stack)) {
						args = args || [];
						args = [context, args.slice ? args.slice() : args];
						if (firing) {
							stack.push(args);
						} else {
							fire(args);
						}
					}
					return this;
				},
				// Call all the callbacks with the given arguments
				fire: function fire() {
					self.fireWith(this, arguments);
					return this;
				},
				// To know if the callbacks have already been called at least once
				fired: function fired() {
					return !!_fired;
				}
			};
	
			return self;
		};
	
		jQuery.extend({
	
			Deferred: function Deferred(func) {
				var tuples = [
				// action, add listener, listener list, final state
				["resolve", "done", jQuery.Callbacks("once memory"), "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"], ["notify", "progress", jQuery.Callbacks("memory")]],
				    _state = "pending",
				    _promise = {
					state: function state() {
						return _state;
					},
					always: function always() {
						deferred.done(arguments).fail(arguments);
						return this;
					},
					then: function then() /* fnDone, fnFail, fnProgress */{
						var fns = arguments;
						return jQuery.Deferred(function (newDefer) {
							jQuery.each(tuples, function (i, tuple) {
								var fn = jQuery.isFunction(fns[i]) && fns[i];
								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[tuple[1]](function () {
									var returned = fn && fn.apply(this, arguments);
									if (returned && jQuery.isFunction(returned.promise)) {
										returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify);
									} else {
										newDefer[tuple[0] + "With"](this === _promise ? newDefer.promise() : this, fn ? [returned] : arguments);
									}
								});
							});
							fns = null;
						}).promise();
					},
					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function promise(obj) {
						return obj != null ? jQuery.extend(obj, _promise) : _promise;
					}
				},
				    deferred = {};
	
				// Keep pipe for back-compat
				_promise.pipe = _promise.then;
	
				// Add list-specific methods
				jQuery.each(tuples, function (i, tuple) {
					var list = tuple[2],
					    stateString = tuple[3];
	
					// promise[ done | fail | progress ] = list.add
					_promise[tuple[1]] = list.add;
	
					// Handle state
					if (stateString) {
						list.add(function () {
							// state = [ resolved | rejected ]
							_state = stateString;
	
							// [ reject_list | resolve_list ].disable; progress_list.lock
						}, tuples[i ^ 1][2].disable, tuples[2][2].lock);
					}
	
					// deferred[ resolve | reject | notify ]
					deferred[tuple[0]] = function () {
						deferred[tuple[0] + "With"](this === deferred ? _promise : this, arguments);
						return this;
					};
					deferred[tuple[0] + "With"] = list.fireWith;
				});
	
				// Make the deferred a promise
				_promise.promise(deferred);
	
				// Call given func if any
				if (func) {
					func.call(deferred, deferred);
				}
	
				// All done!
				return deferred;
			},
	
			// Deferred helper
			when: function when(subordinate /* , ..., subordinateN */) {
				var i = 0,
				    resolveValues = _slice.call(arguments),
				    length = resolveValues.length,
	
	
				// the count of uncompleted subordinates
				remaining = length !== 1 || subordinate && jQuery.isFunction(subordinate.promise) ? length : 0,
	
	
				// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),
	
	
				// Update function for both resolve and progress values
				updateFunc = function updateFunc(i, contexts, values) {
					return function (value) {
						contexts[i] = this;
						values[i] = arguments.length > 1 ? _slice.call(arguments) : value;
						if (values === progressValues) {
							deferred.notifyWith(contexts, values);
						} else if (! --remaining) {
							deferred.resolveWith(contexts, values);
						}
					};
				},
				    progressValues,
				    progressContexts,
				    resolveContexts;
	
				// add listeners to Deferred subordinates; treat others as resolved
				if (length > 1) {
					progressValues = new Array(length);
					progressContexts = new Array(length);
					resolveContexts = new Array(length);
					for (; i < length; i++) {
						if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
							resolveValues[i].promise().done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject).progress(updateFunc(i, progressContexts, progressValues));
						} else {
							--remaining;
						}
					}
				}
	
				// if we're not waiting on anything, resolve the master
				if (!remaining) {
					deferred.resolveWith(resolveContexts, resolveValues);
				}
	
				return deferred.promise();
			}
		});
	
		// The deferred used on DOM ready
		var readyList;
	
		jQuery.fn.ready = function (fn) {
			// Add the callback
			jQuery.ready.promise().done(fn);
	
			return this;
		};
	
		jQuery.extend({
			// Is the DOM ready to be used? Set to true once it occurs.
			isReady: false,
	
			// A counter to track how many items to wait for before
			// the ready event fires. See #6781
			readyWait: 1,
	
			// Hold (or release) the ready event
			holdReady: function holdReady(hold) {
				if (hold) {
					jQuery.readyWait++;
				} else {
					jQuery.ready(true);
				}
			},
	
			// Handle when the DOM is ready
			ready: function ready(wait) {
	
				// Abort if there are pending holds or we're already ready
				if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
					return;
				}
	
				// Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
				if (!document.body) {
					return setTimeout(jQuery.ready);
				}
	
				// Remember that the DOM is ready
				jQuery.isReady = true;
	
				// If a normal DOM Ready event fired, decrement, and wait if need be
				if (wait !== true && --jQuery.readyWait > 0) {
					return;
				}
	
				// If there are functions bound, to execute
				readyList.resolveWith(document, [jQuery]);
	
				// Trigger any bound ready events
				if (jQuery.fn.triggerHandler) {
					jQuery(document).triggerHandler("ready");
					jQuery(document).off("ready");
				}
			}
		});
	
		/**
	  * Clean-up method for dom ready events
	  */
		function detach() {
			if (document.addEventListener) {
				document.removeEventListener("DOMContentLoaded", completed, false);
				window.removeEventListener("load", completed, false);
			} else {
				document.detachEvent("onreadystatechange", completed);
				window.detachEvent("onload", completed);
			}
		}
	
		/**
	  * The ready event handler and self cleanup method
	  */
		function completed() {
			// readyState === "complete" is good enough for us to call the dom ready in oldIE
			if (document.addEventListener || event.type === "load" || document.readyState === "complete") {
				detach();
				jQuery.ready();
			}
		}
	
		jQuery.ready.promise = function (obj) {
			if (!readyList) {
	
				readyList = jQuery.Deferred();
	
				// Catch cases where $(document).ready() is called after the browser event has already occurred.
				// we once tried to use readyState "interactive" here, but it caused issues like the one
				// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
				if (document.readyState === "complete") {
					// Handle it asynchronously to allow scripts the opportunity to delay ready
					setTimeout(jQuery.ready);
	
					// Standards-based browsers support DOMContentLoaded
				} else if (document.addEventListener) {
					// Use the handy event callback
					document.addEventListener("DOMContentLoaded", completed, false);
	
					// A fallback to window.onload, that will always work
					window.addEventListener("load", completed, false);
	
					// If IE event model is used
				} else {
					// Ensure firing before onload, maybe late but safe also for iframes
					document.attachEvent("onreadystatechange", completed);
	
					// A fallback to window.onload, that will always work
					window.attachEvent("onload", completed);
	
					// If IE and not a frame
					// continually check to see if the document is ready
					var top = false;
	
					try {
						top = window.frameElement == null && document.documentElement;
					} catch (e) {}
	
					if (top && top.doScroll) {
						(function doScrollCheck() {
							if (!jQuery.isReady) {
	
								try {
									// Use the trick by Diego Perini
									// http://javascript.nwbox.com/IEContentLoaded/
									top.doScroll("left");
								} catch (e) {
									return setTimeout(doScrollCheck, 50);
								}
	
								// detach all dom ready events
								detach();
	
								// and execute any waiting functions
								jQuery.ready();
							}
						})();
					}
				}
			}
			return readyList.promise(obj);
		};
	
		var strundefined =  true ? "undefined" : _typeof(undefined);
	
		// Support: IE<9
		// Iteration over object's inherited properties before its own
		var i;
		for (i in jQuery(support)) {
			break;
		}
		support.ownLast = i !== "0";
	
		// Note: most support tests are defined in their respective modules.
		// false until the test is run
		support.inlineBlockNeedsLayout = false;
	
		// Execute ASAP in case we need to set body.style.zoom
		jQuery(function () {
			// Minified: var a,b,c,d
			var val, div, body, container;
	
			body = document.getElementsByTagName("body")[0];
			if (!body || !body.style) {
				// Return for frameset docs that don't have a body
				return;
			}
	
			// Setup
			div = document.createElement("div");
			container = document.createElement("div");
			container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
			body.appendChild(container).appendChild(div);
	
			if (_typeof(div.style.zoom) !== strundefined) {
				// Support: IE<8
				// Check if natively block-level elements act like inline-block
				// elements when setting their display to 'inline' and giving
				// them layout
				div.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";
	
				support.inlineBlockNeedsLayout = val = div.offsetWidth === 3;
				if (val) {
					// Prevent IE 6 from affecting layout for positioned elements #11048
					// Prevent IE from shrinking the body in IE 7 mode #12869
					// Support: IE<8
					body.style.zoom = 1;
				}
			}
	
			body.removeChild(container);
		});
	
		(function () {
			var div = document.createElement("div");
	
			// Execute the test only if not already executed in another module.
			if (support.deleteExpando == null) {
				// Support: IE<9
				support.deleteExpando = true;
				try {
					delete div.test;
				} catch (e) {
					support.deleteExpando = false;
				}
			}
	
			// Null elements to avoid leaks in IE.
			div = null;
		})();
	
		/**
	  * Determines whether an object can have data
	  */
		jQuery.acceptData = function (elem) {
			var noData = jQuery.noData[(elem.nodeName + " ").toLowerCase()],
			    nodeType = +elem.nodeType || 1;
	
			// Do not set data on non-element DOM nodes because it will not be cleared (#8335).
			return nodeType !== 1 && nodeType !== 9 ? false :
	
			// Nodes accept data unless otherwise specified; rejection can be conditional
			!noData || noData !== true && elem.getAttribute("classid") === noData;
		};
	
		var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		    rmultiDash = /([A-Z])/g;
	
		function dataAttr(elem, key, data) {
			// If nothing was found internally, try to fetch any
			// data from the HTML5 data-* attribute
			if (data === undefined && elem.nodeType === 1) {
	
				var name = "data-" + key.replace(rmultiDash, "-$1").toLowerCase();
	
				data = elem.getAttribute(name);
	
				if (typeof data === "string") {
					try {
						data = data === "true" ? true : data === "false" ? false : data === "null" ? null :
						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data;
					} catch (e) {}
	
					// Make sure we set the data so it isn't changed later
					jQuery.data(elem, key, data);
				} else {
					data = undefined;
				}
			}
	
			return data;
		}
	
		// checks a cache object for emptiness
		function isEmptyDataObject(obj) {
			var name;
			for (name in obj) {
	
				// if the public data object is empty, the private is still empty
				if (name === "data" && jQuery.isEmptyObject(obj[name])) {
					continue;
				}
				if (name !== "toJSON") {
					return false;
				}
			}
	
			return true;
		}
	
		function internalData(elem, name, data, pvt /* Internal Use Only */) {
			if (!jQuery.acceptData(elem)) {
				return;
			}
	
			var ret,
			    thisCache,
			    internalKey = jQuery.expando,
	
	
			// We have to handle DOM nodes and JS objects differently because IE6-7
			// can't GC object references properly across the DOM-JS boundary
			isNode = elem.nodeType,
	
	
			// Only DOM nodes need the global jQuery cache; JS object data is
			// attached directly to the object so GC can occur automatically
			cache = isNode ? jQuery.cache : elem,
	
	
			// Only defining an ID for JS objects if its cache already exists allows
			// the code to shortcut on the same path as a DOM node with no cache
			id = isNode ? elem[internalKey] : elem[internalKey] && internalKey;
	
			// Avoid doing any more work than we need to when trying to get data on an
			// object that has no data at all
			if ((!id || !cache[id] || !pvt && !cache[id].data) && data === undefined && typeof name === "string") {
				return;
			}
	
			if (!id) {
				// Only DOM nodes need a new unique ID for each element since their data
				// ends up in the global cache
				if (isNode) {
					id = elem[internalKey] = deletedIds.pop() || jQuery.guid++;
				} else {
					id = internalKey;
				}
			}
	
			if (!cache[id]) {
				// Avoid exposing jQuery metadata on plain JS objects when the object
				// is serialized using JSON.stringify
				cache[id] = isNode ? {} : { toJSON: jQuery.noop };
			}
	
			// An object can be passed to jQuery.data instead of a key/value pair; this gets
			// shallow copied over onto the existing cache
			if ((typeof name === "undefined" ? "undefined" : _typeof(name)) === "object" || typeof name === "function") {
				if (pvt) {
					cache[id] = jQuery.extend(cache[id], name);
				} else {
					cache[id].data = jQuery.extend(cache[id].data, name);
				}
			}
	
			thisCache = cache[id];
	
			// jQuery data() is stored in a separate object inside the object's internal data
			// cache in order to avoid key collisions between internal data and user-defined
			// data.
			if (!pvt) {
				if (!thisCache.data) {
					thisCache.data = {};
				}
	
				thisCache = thisCache.data;
			}
	
			if (data !== undefined) {
				thisCache[jQuery.camelCase(name)] = data;
			}
	
			// Check for both converted-to-camel and non-converted data property names
			// If a data property was specified
			if (typeof name === "string") {
	
				// First Try to find as-is property data
				ret = thisCache[name];
	
				// Test for null|undefined property data
				if (ret == null) {
	
					// Try to find the camelCased property
					ret = thisCache[jQuery.camelCase(name)];
				}
			} else {
				ret = thisCache;
			}
	
			return ret;
		}
	
		function internalRemoveData(elem, name, pvt) {
			if (!jQuery.acceptData(elem)) {
				return;
			}
	
			var thisCache,
			    i,
			    isNode = elem.nodeType,
	
	
			// See jQuery.data for more information
			cache = isNode ? jQuery.cache : elem,
			    id = isNode ? elem[jQuery.expando] : jQuery.expando;
	
			// If there is already no cache entry for this object, there is no
			// purpose in continuing
			if (!cache[id]) {
				return;
			}
	
			if (name) {
	
				thisCache = pvt ? cache[id] : cache[id].data;
	
				if (thisCache) {
	
					// Support array or space separated string names for data keys
					if (!jQuery.isArray(name)) {
	
						// try the string as a key before any manipulation
						if (name in thisCache) {
							name = [name];
						} else {
	
							// split the camel cased version by spaces unless a key with the spaces exists
							name = jQuery.camelCase(name);
							if (name in thisCache) {
								name = [name];
							} else {
								name = name.split(" ");
							}
						}
					} else {
						// If "name" is an array of keys...
						// When data is initially created, via ("key", "val") signature,
						// keys will be converted to camelCase.
						// Since there is no way to tell _how_ a key was added, remove
						// both plain key and camelCase key. #12786
						// This will only penalize the array argument path.
						name = name.concat(jQuery.map(name, jQuery.camelCase));
					}
	
					i = name.length;
					while (i--) {
						delete thisCache[name[i]];
					}
	
					// If there is no data left in the cache, we want to continue
					// and let the cache object itself get destroyed
					if (pvt ? !isEmptyDataObject(thisCache) : !jQuery.isEmptyObject(thisCache)) {
						return;
					}
				}
			}
	
			// See jQuery.data for more information
			if (!pvt) {
				delete cache[id].data;
	
				// Don't destroy the parent cache unless the internal data object
				// had been the only thing left in it
				if (!isEmptyDataObject(cache[id])) {
					return;
				}
			}
	
			// Destroy the cache
			if (isNode) {
				jQuery.cleanData([elem], true);
	
				// Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
				/* jshint eqeqeq: false */
			} else if (support.deleteExpando || cache != cache.window) {
				/* jshint eqeqeq: true */
				delete cache[id];
	
				// When all else fails, null
			} else {
				cache[id] = null;
			}
		}
	
		jQuery.extend({
			cache: {},
	
			// The following elements (space-suffixed to avoid Object.prototype collisions)
			// throw uncatchable exceptions if you attempt to set expando properties
			noData: {
				"applet ": true,
				"embed ": true,
				// ...but Flash objects (which have this classid) *can* handle expandos
				"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
			},
	
			hasData: function hasData(elem) {
				elem = elem.nodeType ? jQuery.cache[elem[jQuery.expando]] : elem[jQuery.expando];
				return !!elem && !isEmptyDataObject(elem);
			},
	
			data: function data(elem, name, _data) {
				return internalData(elem, name, _data);
			},
	
			removeData: function removeData(elem, name) {
				return internalRemoveData(elem, name);
			},
	
			// For internal use only.
			_data: function _data(elem, name, data) {
				return internalData(elem, name, data, true);
			},
	
			_removeData: function _removeData(elem, name) {
				return internalRemoveData(elem, name, true);
			}
		});
	
		jQuery.fn.extend({
			data: function data(key, value) {
				var i,
				    name,
				    data,
				    elem = this[0],
				    attrs = elem && elem.attributes;
	
				// Special expections of .data basically thwart jQuery.access,
				// so implement the relevant behavior ourselves
	
				// Gets all values
				if (key === undefined) {
					if (this.length) {
						data = jQuery.data(elem);
	
						if (elem.nodeType === 1 && !jQuery._data(elem, "parsedAttrs")) {
							i = attrs.length;
							while (i--) {
	
								// Support: IE11+
								// The attrs elements can be null (#14894)
								if (attrs[i]) {
									name = attrs[i].name;
									if (name.indexOf("data-") === 0) {
										name = jQuery.camelCase(name.slice(5));
										dataAttr(elem, name, data[name]);
									}
								}
							}
							jQuery._data(elem, "parsedAttrs", true);
						}
					}
	
					return data;
				}
	
				// Sets multiple values
				if ((typeof key === "undefined" ? "undefined" : _typeof(key)) === "object") {
					return this.each(function () {
						jQuery.data(this, key);
					});
				}
	
				return arguments.length > 1 ?
	
				// Sets one value
				this.each(function () {
					jQuery.data(this, key, value);
				}) :
	
				// Gets one value
				// Try to fetch any internally stored data first
				elem ? dataAttr(elem, key, jQuery.data(elem, key)) : undefined;
			},
	
			removeData: function removeData(key) {
				return this.each(function () {
					jQuery.removeData(this, key);
				});
			}
		});
	
		jQuery.extend({
			queue: function queue(elem, type, data) {
				var queue;
	
				if (elem) {
					type = (type || "fx") + "queue";
					queue = jQuery._data(elem, type);
	
					// Speed up dequeue by getting out quickly if this is just a lookup
					if (data) {
						if (!queue || jQuery.isArray(data)) {
							queue = jQuery._data(elem, type, jQuery.makeArray(data));
						} else {
							queue.push(data);
						}
					}
					return queue || [];
				}
			},
	
			dequeue: function dequeue(elem, type) {
				type = type || "fx";
	
				var queue = jQuery.queue(elem, type),
				    startLength = queue.length,
				    fn = queue.shift(),
				    hooks = jQuery._queueHooks(elem, type),
				    next = function next() {
					jQuery.dequeue(elem, type);
				};
	
				// If the fx queue is dequeued, always remove the progress sentinel
				if (fn === "inprogress") {
					fn = queue.shift();
					startLength--;
				}
	
				if (fn) {
	
					// Add a progress sentinel to prevent the fx queue from being
					// automatically dequeued
					if (type === "fx") {
						queue.unshift("inprogress");
					}
	
					// clear up the last queue stop function
					delete hooks.stop;
					fn.call(elem, next, hooks);
				}
	
				if (!startLength && hooks) {
					hooks.empty.fire();
				}
			},
	
			// not intended for public consumption - generates a queueHooks object, or returns the current one
			_queueHooks: function _queueHooks(elem, type) {
				var key = type + "queueHooks";
				return jQuery._data(elem, key) || jQuery._data(elem, key, {
					empty: jQuery.Callbacks("once memory").add(function () {
						jQuery._removeData(elem, type + "queue");
						jQuery._removeData(elem, key);
					})
				});
			}
		});
	
		jQuery.fn.extend({
			queue: function queue(type, data) {
				var setter = 2;
	
				if (typeof type !== "string") {
					data = type;
					type = "fx";
					setter--;
				}
	
				if (arguments.length < setter) {
					return jQuery.queue(this[0], type);
				}
	
				return data === undefined ? this : this.each(function () {
					var queue = jQuery.queue(this, type, data);
	
					// ensure a hooks for this queue
					jQuery._queueHooks(this, type);
	
					if (type === "fx" && queue[0] !== "inprogress") {
						jQuery.dequeue(this, type);
					}
				});
			},
			dequeue: function dequeue(type) {
				return this.each(function () {
					jQuery.dequeue(this, type);
				});
			},
			clearQueue: function clearQueue(type) {
				return this.queue(type || "fx", []);
			},
			// Get a promise resolved when queues of a certain type
			// are emptied (fx is the type by default)
			promise: function promise(type, obj) {
				var tmp,
				    count = 1,
				    defer = jQuery.Deferred(),
				    elements = this,
				    i = this.length,
				    resolve = function resolve() {
					if (! --count) {
						defer.resolveWith(elements, [elements]);
					}
				};
	
				if (typeof type !== "string") {
					obj = type;
					type = undefined;
				}
				type = type || "fx";
	
				while (i--) {
					tmp = jQuery._data(elements[i], type + "queueHooks");
					if (tmp && tmp.empty) {
						count++;
						tmp.empty.add(resolve);
					}
				}
				resolve();
				return defer.promise(obj);
			}
		});
		var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
	
		var cssExpand = ["Top", "Right", "Bottom", "Left"];
	
		var isHidden = function isHidden(elem, el) {
			// isHidden might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
			return jQuery.css(elem, "display") === "none" || !jQuery.contains(elem.ownerDocument, elem);
		};
	
		// Multifunctional method to get and set values of a collection
		// The value/s can optionally be executed if it's a function
		var access = jQuery.access = function (elems, fn, key, value, chainable, emptyGet, raw) {
			var i = 0,
			    length = elems.length,
			    bulk = key == null;
	
			// Sets many values
			if (jQuery.type(key) === "object") {
				chainable = true;
				for (i in key) {
					jQuery.access(elems, fn, i, key[i], true, emptyGet, raw);
				}
	
				// Sets one value
			} else if (value !== undefined) {
				chainable = true;
	
				if (!jQuery.isFunction(value)) {
					raw = true;
				}
	
				if (bulk) {
					// Bulk operations run against the entire set
					if (raw) {
						fn.call(elems, value);
						fn = null;
	
						// ...except when executing function values
					} else {
						bulk = fn;
						fn = function fn(elem, key, value) {
							return bulk.call(jQuery(elem), value);
						};
					}
				}
	
				if (fn) {
					for (; i < length; i++) {
						fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
					}
				}
			}
	
			return chainable ? elems :
	
			// Gets
			bulk ? fn.call(elems) : length ? fn(elems[0], key) : emptyGet;
		};
		var rcheckableType = /^(?:checkbox|radio)$/i;
	
		(function () {
			// Minified: var a,b,c
			var input = document.createElement("input"),
			    div = document.createElement("div"),
			    fragment = document.createDocumentFragment();
	
			// Setup
			div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
	
			// IE strips leading whitespace when .innerHTML is used
			support.leadingWhitespace = div.firstChild.nodeType === 3;
	
			// Make sure that tbody elements aren't automatically inserted
			// IE will insert them into empty tables
			support.tbody = !div.getElementsByTagName("tbody").length;
	
			// Make sure that link elements get serialized correctly by innerHTML
			// This requires a wrapper element in IE
			support.htmlSerialize = !!div.getElementsByTagName("link").length;
	
			// Makes sure cloning an html5 element does not cause problems
			// Where outerHTML is undefined, this still works
			support.html5Clone = document.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>";
	
			// Check if a disconnected checkbox will retain its checked
			// value of true after appended to the DOM (IE6/7)
			input.type = "checkbox";
			input.checked = true;
			fragment.appendChild(input);
			support.appendChecked = input.checked;
	
			// Make sure textarea (and checkbox) defaultValue is properly cloned
			// Support: IE6-IE11+
			div.innerHTML = "<textarea>x</textarea>";
			support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
	
			// #11217 - WebKit loses check when the name is after the checked attribute
			fragment.appendChild(div);
			div.innerHTML = "<input type='radio' checked='checked' name='t'/>";
	
			// Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
			// old WebKit doesn't clone checked state correctly in fragments
			support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
	
			// Support: IE<9
			// Opera does not clone events (and typeof div.attachEvent === undefined).
			// IE9-10 clones events bound via attachEvent, but they don't trigger with .click()
			support.noCloneEvent = true;
			if (div.attachEvent) {
				div.attachEvent("onclick", function () {
					support.noCloneEvent = false;
				});
	
				div.cloneNode(true).click();
			}
	
			// Execute the test only if not already executed in another module.
			if (support.deleteExpando == null) {
				// Support: IE<9
				support.deleteExpando = true;
				try {
					delete div.test;
				} catch (e) {
					support.deleteExpando = false;
				}
			}
		})();
	
		(function () {
			var i,
			    eventName,
			    div = document.createElement("div");
	
			// Support: IE<9 (lack submit/change bubble), Firefox 23+ (lack focusin event)
			for (i in { submit: true, change: true, focusin: true }) {
				eventName = "on" + i;
	
				if (!(support[i + "Bubbles"] = eventName in window)) {
					// Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
					div.setAttribute(eventName, "t");
					support[i + "Bubbles"] = div.attributes[eventName].expando === false;
				}
			}
	
			// Null elements to avoid leaks in IE.
			div = null;
		})();
	
		var rformElems = /^(?:input|select|textarea)$/i,
		    rkeyEvent = /^key/,
		    rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
		    rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
		    rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;
	
		function returnTrue() {
			return true;
		}
	
		function returnFalse() {
			return false;
		}
	
		function safeActiveElement() {
			try {
				return document.activeElement;
			} catch (err) {}
		}
	
		/*
	  * Helper functions for managing events -- not part of the public interface.
	  * Props to Dean Edwards' addEvent library for many of the ideas.
	  */
		jQuery.event = {
	
			global: {},
	
			add: function add(elem, types, handler, data, selector) {
				var tmp,
				    events,
				    t,
				    handleObjIn,
				    special,
				    eventHandle,
				    handleObj,
				    handlers,
				    type,
				    namespaces,
				    origType,
				    elemData = jQuery._data(elem);
	
				// Don't attach events to noData or text/comment nodes (but allow plain objects)
				if (!elemData) {
					return;
				}
	
				// Caller can pass in an object of custom data in lieu of the handler
				if (handler.handler) {
					handleObjIn = handler;
					handler = handleObjIn.handler;
					selector = handleObjIn.selector;
				}
	
				// Make sure that the handler has a unique ID, used to find/remove it later
				if (!handler.guid) {
					handler.guid = jQuery.guid++;
				}
	
				// Init the element's event structure and main handler, if this is the first
				if (!(events = elemData.events)) {
					events = elemData.events = {};
				}
				if (!(eventHandle = elemData.handle)) {
					eventHandle = elemData.handle = function (e) {
						// Discard the second event of a jQuery.event.trigger() and
						// when an event is called after a page has unloaded
						return (typeof jQuery === "undefined" ? "undefined" : _typeof(jQuery)) !== strundefined && (!e || jQuery.event.triggered !== e.type) ? jQuery.event.dispatch.apply(eventHandle.elem, arguments) : undefined;
					};
					// Add elem as a property of the handle fn to prevent a memory leak with IE non-native events
					eventHandle.elem = elem;
				}
	
				// Handle multiple events separated by a space
				types = (types || "").match(rnotwhite) || [""];
				t = types.length;
				while (t--) {
					tmp = rtypenamespace.exec(types[t]) || [];
					type = origType = tmp[1];
					namespaces = (tmp[2] || "").split(".").sort();
	
					// There *must* be a type, no attaching namespace-only handlers
					if (!type) {
						continue;
					}
	
					// If event changes its type, use the special event handlers for the changed type
					special = jQuery.event.special[type] || {};
	
					// If selector defined, determine special event api type, otherwise given type
					type = (selector ? special.delegateType : special.bindType) || type;
	
					// Update special based on newly reset type
					special = jQuery.event.special[type] || {};
	
					// handleObj is passed to all event handlers
					handleObj = jQuery.extend({
						type: type,
						origType: origType,
						data: data,
						handler: handler,
						guid: handler.guid,
						selector: selector,
						needsContext: selector && jQuery.expr.match.needsContext.test(selector),
						namespace: namespaces.join(".")
					}, handleObjIn);
	
					// Init the event handler queue if we're the first
					if (!(handlers = events[type])) {
						handlers = events[type] = [];
						handlers.delegateCount = 0;
	
						// Only use addEventListener/attachEvent if the special events handler returns false
						if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
							// Bind the global event handler to the element
							if (elem.addEventListener) {
								elem.addEventListener(type, eventHandle, false);
							} else if (elem.attachEvent) {
								elem.attachEvent("on" + type, eventHandle);
							}
						}
					}
	
					if (special.add) {
						special.add.call(elem, handleObj);
	
						if (!handleObj.handler.guid) {
							handleObj.handler.guid = handler.guid;
						}
					}
	
					// Add to the element's handler list, delegates in front
					if (selector) {
						handlers.splice(handlers.delegateCount++, 0, handleObj);
					} else {
						handlers.push(handleObj);
					}
	
					// Keep track of which events have ever been used, for event optimization
					jQuery.event.global[type] = true;
				}
	
				// Nullify elem to prevent memory leaks in IE
				elem = null;
			},
	
			// Detach an event or set of events from an element
			remove: function remove(elem, types, handler, selector, mappedTypes) {
				var j,
				    handleObj,
				    tmp,
				    origCount,
				    t,
				    events,
				    special,
				    handlers,
				    type,
				    namespaces,
				    origType,
				    elemData = jQuery.hasData(elem) && jQuery._data(elem);
	
				if (!elemData || !(events = elemData.events)) {
					return;
				}
	
				// Once for each type.namespace in types; type may be omitted
				types = (types || "").match(rnotwhite) || [""];
				t = types.length;
				while (t--) {
					tmp = rtypenamespace.exec(types[t]) || [];
					type = origType = tmp[1];
					namespaces = (tmp[2] || "").split(".").sort();
	
					// Unbind all events (on this namespace, if provided) for the element
					if (!type) {
						for (type in events) {
							jQuery.event.remove(elem, type + types[t], handler, selector, true);
						}
						continue;
					}
	
					special = jQuery.event.special[type] || {};
					type = (selector ? special.delegateType : special.bindType) || type;
					handlers = events[type] || [];
					tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
	
					// Remove matching events
					origCount = j = handlers.length;
					while (j--) {
						handleObj = handlers[j];
	
						if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
							handlers.splice(j, 1);
	
							if (handleObj.selector) {
								handlers.delegateCount--;
							}
							if (special.remove) {
								special.remove.call(elem, handleObj);
							}
						}
					}
	
					// Remove generic event handler if we removed something and no more handlers exist
					// (avoids potential for endless recursion during removal of special event handlers)
					if (origCount && !handlers.length) {
						if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
							jQuery.removeEvent(elem, type, elemData.handle);
						}
	
						delete events[type];
					}
				}
	
				// Remove the expando if it's no longer used
				if (jQuery.isEmptyObject(events)) {
					delete elemData.handle;
	
					// removeData also checks for emptiness and clears the expando if empty
					// so use it instead of delete
					jQuery._removeData(elem, "events");
				}
			},
	
			trigger: function trigger(event, data, elem, onlyHandlers) {
				var handle,
				    ontype,
				    cur,
				    bubbleType,
				    special,
				    tmp,
				    i,
				    eventPath = [elem || document],
				    type = hasOwn.call(event, "type") ? event.type : event,
				    namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
	
				cur = tmp = elem = elem || document;
	
				// Don't do events on text and comment nodes
				if (elem.nodeType === 3 || elem.nodeType === 8) {
					return;
				}
	
				// focus/blur morphs to focusin/out; ensure we're not firing them right now
				if (rfocusMorph.test(type + jQuery.event.triggered)) {
					return;
				}
	
				if (type.indexOf(".") >= 0) {
					// Namespaced trigger; create a regexp to match event type in handle()
					namespaces = type.split(".");
					type = namespaces.shift();
					namespaces.sort();
				}
				ontype = type.indexOf(":") < 0 && "on" + type;
	
				// Caller can pass in a jQuery.Event object, Object, or just an event type string
				event = event[jQuery.expando] ? event : new jQuery.Event(type, (typeof event === "undefined" ? "undefined" : _typeof(event)) === "object" && event);
	
				// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
				event.isTrigger = onlyHandlers ? 2 : 3;
				event.namespace = namespaces.join(".");
				event.namespace_re = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
	
				// Clean up the event in case it is being reused
				event.result = undefined;
				if (!event.target) {
					event.target = elem;
				}
	
				// Clone any incoming data and prepend the event, creating the handler arg list
				data = data == null ? [event] : jQuery.makeArray(data, [event]);
	
				// Allow special events to draw outside the lines
				special = jQuery.event.special[type] || {};
				if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
					return;
				}
	
				// Determine event propagation path in advance, per W3C events spec (#9951)
				// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
				if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
	
					bubbleType = special.delegateType || type;
					if (!rfocusMorph.test(bubbleType + type)) {
						cur = cur.parentNode;
					}
					for (; cur; cur = cur.parentNode) {
						eventPath.push(cur);
						tmp = cur;
					}
	
					// Only add window if we got to document (e.g., not plain obj or detached DOM)
					if (tmp === (elem.ownerDocument || document)) {
						eventPath.push(tmp.defaultView || tmp.parentWindow || window);
					}
				}
	
				// Fire handlers on the event path
				i = 0;
				while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
	
					event.type = i > 1 ? bubbleType : special.bindType || type;
	
					// jQuery handler
					handle = (jQuery._data(cur, "events") || {})[event.type] && jQuery._data(cur, "handle");
					if (handle) {
						handle.apply(cur, data);
					}
	
					// Native handler
					handle = ontype && cur[ontype];
					if (handle && handle.apply && jQuery.acceptData(cur)) {
						event.result = handle.apply(cur, data);
						if (event.result === false) {
							event.preventDefault();
						}
					}
				}
				event.type = type;
	
				// If nobody prevented the default action, do it now
				if (!onlyHandlers && !event.isDefaultPrevented()) {
	
					if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && jQuery.acceptData(elem)) {
	
						// Call a native DOM method on the target with the same name name as the event.
						// Can't use an .isFunction() check here because IE6/7 fails that test.
						// Don't do default actions on window, that's where global variables be (#6170)
						if (ontype && elem[type] && !jQuery.isWindow(elem)) {
	
							// Don't re-trigger an onFOO event when we call its FOO() method
							tmp = elem[ontype];
	
							if (tmp) {
								elem[ontype] = null;
							}
	
							// Prevent re-triggering of the same event, since we already bubbled it above
							jQuery.event.triggered = type;
							try {
								elem[type]();
							} catch (e) {
								// IE<9 dies on focus/blur to hidden element (#1486,#12518)
								// only reproducible on winXP IE8 native, not IE9 in IE8 mode
							}
							jQuery.event.triggered = undefined;
	
							if (tmp) {
								elem[ontype] = tmp;
							}
						}
					}
				}
	
				return event.result;
			},
	
			dispatch: function dispatch(event) {
	
				// Make a writable jQuery.Event from the native event object
				event = jQuery.event.fix(event);
	
				var i,
				    ret,
				    handleObj,
				    matched,
				    j,
				    handlerQueue = [],
				    args = _slice.call(arguments),
				    handlers = (jQuery._data(this, "events") || {})[event.type] || [],
				    special = jQuery.event.special[event.type] || {};
	
				// Use the fix-ed jQuery.Event rather than the (read-only) native event
				args[0] = event;
				event.delegateTarget = this;
	
				// Call the preDispatch hook for the mapped type, and let it bail if desired
				if (special.preDispatch && special.preDispatch.call(this, event) === false) {
					return;
				}
	
				// Determine handlers
				handlerQueue = jQuery.event.handlers.call(this, event, handlers);
	
				// Run delegates first; they may want to stop propagation beneath us
				i = 0;
				while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
					event.currentTarget = matched.elem;
	
					j = 0;
					while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
	
						// Triggered event must either 1) have no namespace, or
						// 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
						if (!event.namespace_re || event.namespace_re.test(handleObj.namespace)) {
	
							event.handleObj = handleObj;
							event.data = handleObj.data;
	
							ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
	
							if (ret !== undefined) {
								if ((event.result = ret) === false) {
									event.preventDefault();
									event.stopPropagation();
								}
							}
						}
					}
				}
	
				// Call the postDispatch hook for the mapped type
				if (special.postDispatch) {
					special.postDispatch.call(this, event);
				}
	
				return event.result;
			},
	
			handlers: function handlers(event, _handlers) {
				var sel,
				    handleObj,
				    matches,
				    i,
				    handlerQueue = [],
				    delegateCount = _handlers.delegateCount,
				    cur = event.target;
	
				// Find delegate handlers
				// Black-hole SVG <use> instance trees (#13180)
				// Avoid non-left-click bubbling in Firefox (#3861)
				if (delegateCount && cur.nodeType && (!event.button || event.type !== "click")) {
	
					/* jshint eqeqeq: false */
					for (; cur != this; cur = cur.parentNode || this) {
						/* jshint eqeqeq: true */
	
						// Don't check non-elements (#13208)
						// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
						if (cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click")) {
							matches = [];
							for (i = 0; i < delegateCount; i++) {
								handleObj = _handlers[i];
	
								// Don't conflict with Object.prototype properties (#13203)
								sel = handleObj.selector + " ";
	
								if (matches[sel] === undefined) {
									matches[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) >= 0 : jQuery.find(sel, this, null, [cur]).length;
								}
								if (matches[sel]) {
									matches.push(handleObj);
								}
							}
							if (matches.length) {
								handlerQueue.push({ elem: cur, handlers: matches });
							}
						}
					}
				}
	
				// Add the remaining (directly-bound) handlers
				if (delegateCount < _handlers.length) {
					handlerQueue.push({ elem: this, handlers: _handlers.slice(delegateCount) });
				}
	
				return handlerQueue;
			},
	
			fix: function fix(event) {
				if (event[jQuery.expando]) {
					return event;
				}
	
				// Create a writable copy of the event object and normalize some properties
				var i,
				    prop,
				    copy,
				    type = event.type,
				    originalEvent = event,
				    fixHook = this.fixHooks[type];
	
				if (!fixHook) {
					this.fixHooks[type] = fixHook = rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {};
				}
				copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;
	
				event = new jQuery.Event(originalEvent);
	
				i = copy.length;
				while (i--) {
					prop = copy[i];
					event[prop] = originalEvent[prop];
				}
	
				// Support: IE<9
				// Fix target property (#1925)
				if (!event.target) {
					event.target = originalEvent.srcElement || document;
				}
	
				// Support: Chrome 23+, Safari?
				// Target should not be a text node (#504, #13143)
				if (event.target.nodeType === 3) {
					event.target = event.target.parentNode;
				}
	
				// Support: IE<9
				// For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
				event.metaKey = !!event.metaKey;
	
				return fixHook.filter ? fixHook.filter(event, originalEvent) : event;
			},
	
			// Includes some event props shared by KeyEvent and MouseEvent
			props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
	
			fixHooks: {},
	
			keyHooks: {
				props: "char charCode key keyCode".split(" "),
				filter: function filter(event, original) {
	
					// Add which for key events
					if (event.which == null) {
						event.which = original.charCode != null ? original.charCode : original.keyCode;
					}
	
					return event;
				}
			},
	
			mouseHooks: {
				props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
				filter: function filter(event, original) {
					var body,
					    eventDoc,
					    doc,
					    button = original.button,
					    fromElement = original.fromElement;
	
					// Calculate pageX/Y if missing and clientX/Y available
					if (event.pageX == null && original.clientX != null) {
						eventDoc = event.target.ownerDocument || document;
						doc = eventDoc.documentElement;
						body = eventDoc.body;
	
						event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
						event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
					}
	
					// Add relatedTarget, if necessary
					if (!event.relatedTarget && fromElement) {
						event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
					}
	
					// Add which for click: 1 === left; 2 === middle; 3 === right
					// Note: button is not normalized, so don't use it
					if (!event.which && button !== undefined) {
						event.which = button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0;
					}
	
					return event;
				}
			},
	
			special: {
				load: {
					// Prevent triggered image.load events from bubbling to window.load
					noBubble: true
				},
				focus: {
					// Fire native event if possible so blur/focus sequence is correct
					trigger: function trigger() {
						if (this !== safeActiveElement() && this.focus) {
							try {
								this.focus();
								return false;
							} catch (e) {
								// Support: IE<9
								// If we error on focus to hidden element (#1486, #12518),
								// let .trigger() run the handlers
							}
						}
					},
					delegateType: "focusin"
				},
				blur: {
					trigger: function trigger() {
						if (this === safeActiveElement() && this.blur) {
							this.blur();
							return false;
						}
					},
					delegateType: "focusout"
				},
				click: {
					// For checkbox, fire native event so checked state will be right
					trigger: function trigger() {
						if (jQuery.nodeName(this, "input") && this.type === "checkbox" && this.click) {
							this.click();
							return false;
						}
					},
	
					// For cross-browser consistency, don't fire native .click() on links
					_default: function _default(event) {
						return jQuery.nodeName(event.target, "a");
					}
				},
	
				beforeunload: {
					postDispatch: function postDispatch(event) {
	
						// Support: Firefox 20+
						// Firefox doesn't alert if the returnValue field is not set.
						if (event.result !== undefined && event.originalEvent) {
							event.originalEvent.returnValue = event.result;
						}
					}
				}
			},
	
			simulate: function simulate(type, elem, event, bubble) {
				// Piggyback on a donor event to simulate a different one.
				// Fake originalEvent to avoid donor's stopPropagation, but if the
				// simulated event prevents default then we do the same on the donor.
				var e = jQuery.extend(new jQuery.Event(), event, {
					type: type,
					isSimulated: true,
					originalEvent: {}
				});
				if (bubble) {
					jQuery.event.trigger(e, null, elem);
				} else {
					jQuery.event.dispatch.call(elem, e);
				}
				if (e.isDefaultPrevented()) {
					event.preventDefault();
				}
			}
		};
	
		jQuery.removeEvent = document.removeEventListener ? function (elem, type, handle) {
			if (elem.removeEventListener) {
				elem.removeEventListener(type, handle, false);
			}
		} : function (elem, type, handle) {
			var name = "on" + type;
	
			if (elem.detachEvent) {
	
				// #8545, #7054, preventing memory leaks for custom events in IE6-8
				// detachEvent needed property on element, by name of that event, to properly expose it to GC
				if (_typeof(elem[name]) === strundefined) {
					elem[name] = null;
				}
	
				elem.detachEvent(name, handle);
			}
		};
	
		jQuery.Event = function (src, props) {
			// Allow instantiation without the 'new' keyword
			if (!(this instanceof jQuery.Event)) {
				return new jQuery.Event(src, props);
			}
	
			// Event object
			if (src && src.type) {
				this.originalEvent = src;
				this.type = src.type;
	
				// Events bubbling up the document may have been marked as prevented
				// by a handler lower down the tree; reflect the correct value.
				this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined &&
				// Support: IE < 9, Android < 4.0
				src.returnValue === false ? returnTrue : returnFalse;
	
				// Event type
			} else {
				this.type = src;
			}
	
			// Put explicitly provided properties onto the event object
			if (props) {
				jQuery.extend(this, props);
			}
	
			// Create a timestamp if incoming event doesn't have one
			this.timeStamp = src && src.timeStamp || jQuery.now();
	
			// Mark it as fixed
			this[jQuery.expando] = true;
		};
	
		// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
		// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
		jQuery.Event.prototype = {
			isDefaultPrevented: returnFalse,
			isPropagationStopped: returnFalse,
			isImmediatePropagationStopped: returnFalse,
	
			preventDefault: function preventDefault() {
				var e = this.originalEvent;
	
				this.isDefaultPrevented = returnTrue;
				if (!e) {
					return;
				}
	
				// If preventDefault exists, run it on the original event
				if (e.preventDefault) {
					e.preventDefault();
	
					// Support: IE
					// Otherwise set the returnValue property of the original event to false
				} else {
					e.returnValue = false;
				}
			},
			stopPropagation: function stopPropagation() {
				var e = this.originalEvent;
	
				this.isPropagationStopped = returnTrue;
				if (!e) {
					return;
				}
				// If stopPropagation exists, run it on the original event
				if (e.stopPropagation) {
					e.stopPropagation();
				}
	
				// Support: IE
				// Set the cancelBubble property of the original event to true
				e.cancelBubble = true;
			},
			stopImmediatePropagation: function stopImmediatePropagation() {
				var e = this.originalEvent;
	
				this.isImmediatePropagationStopped = returnTrue;
	
				if (e && e.stopImmediatePropagation) {
					e.stopImmediatePropagation();
				}
	
				this.stopPropagation();
			}
		};
	
		// Create mouseenter/leave events using mouseover/out and event-time checks
		jQuery.each({
			mouseenter: "mouseover",
			mouseleave: "mouseout",
			pointerenter: "pointerover",
			pointerleave: "pointerout"
		}, function (orig, fix) {
			jQuery.event.special[orig] = {
				delegateType: fix,
				bindType: fix,
	
				handle: function handle(event) {
					var ret,
					    target = this,
					    related = event.relatedTarget,
					    handleObj = event.handleObj;
	
					// For mousenter/leave call the handler if related is outside the target.
					// NB: No relatedTarget if the mouse left/entered the browser window
					if (!related || related !== target && !jQuery.contains(target, related)) {
						event.type = handleObj.origType;
						ret = handleObj.handler.apply(this, arguments);
						event.type = fix;
					}
					return ret;
				}
			};
		});
	
		// IE submit delegation
		if (!support.submitBubbles) {
	
			jQuery.event.special.submit = {
				setup: function setup() {
					// Only need this for delegated form submit events
					if (jQuery.nodeName(this, "form")) {
						return false;
					}
	
					// Lazy-add a submit handler when a descendant form may potentially be submitted
					jQuery.event.add(this, "click._submit keypress._submit", function (e) {
						// Node name check avoids a VML-related crash in IE (#9807)
						var elem = e.target,
						    form = jQuery.nodeName(elem, "input") || jQuery.nodeName(elem, "button") ? elem.form : undefined;
						if (form && !jQuery._data(form, "submitBubbles")) {
							jQuery.event.add(form, "submit._submit", function (event) {
								event._submit_bubble = true;
							});
							jQuery._data(form, "submitBubbles", true);
						}
					});
					// return undefined since we don't need an event listener
				},
	
				postDispatch: function postDispatch(event) {
					// If form was submitted by the user, bubble the event up the tree
					if (event._submit_bubble) {
						delete event._submit_bubble;
						if (this.parentNode && !event.isTrigger) {
							jQuery.event.simulate("submit", this.parentNode, event, true);
						}
					}
				},
	
				teardown: function teardown() {
					// Only need this for delegated form submit events
					if (jQuery.nodeName(this, "form")) {
						return false;
					}
	
					// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
					jQuery.event.remove(this, "._submit");
				}
			};
		}
	
		// IE change delegation and checkbox/radio fix
		if (!support.changeBubbles) {
	
			jQuery.event.special.change = {
	
				setup: function setup() {
	
					if (rformElems.test(this.nodeName)) {
						// IE doesn't fire change on a check/radio until blur; trigger it on click
						// after a propertychange. Eat the blur-change in special.change.handle.
						// This still fires onchange a second time for check/radio after blur.
						if (this.type === "checkbox" || this.type === "radio") {
							jQuery.event.add(this, "propertychange._change", function (event) {
								if (event.originalEvent.propertyName === "checked") {
									this._just_changed = true;
								}
							});
							jQuery.event.add(this, "click._change", function (event) {
								if (this._just_changed && !event.isTrigger) {
									this._just_changed = false;
								}
								// Allow triggered, simulated change events (#11500)
								jQuery.event.simulate("change", this, event, true);
							});
						}
						return false;
					}
					// Delegated event; lazy-add a change handler on descendant inputs
					jQuery.event.add(this, "beforeactivate._change", function (e) {
						var elem = e.target;
	
						if (rformElems.test(elem.nodeName) && !jQuery._data(elem, "changeBubbles")) {
							jQuery.event.add(elem, "change._change", function (event) {
								if (this.parentNode && !event.isSimulated && !event.isTrigger) {
									jQuery.event.simulate("change", this.parentNode, event, true);
								}
							});
							jQuery._data(elem, "changeBubbles", true);
						}
					});
				},
	
				handle: function handle(event) {
					var elem = event.target;
	
					// Swallow native change events from checkbox/radio, we already triggered them above
					if (this !== elem || event.isSimulated || event.isTrigger || elem.type !== "radio" && elem.type !== "checkbox") {
						return event.handleObj.handler.apply(this, arguments);
					}
				},
	
				teardown: function teardown() {
					jQuery.event.remove(this, "._change");
	
					return !rformElems.test(this.nodeName);
				}
			};
		}
	
		// Create "bubbling" focus and blur events
		if (!support.focusinBubbles) {
			jQuery.each({ focus: "focusin", blur: "focusout" }, function (orig, fix) {
	
				// Attach a single capturing handler on the document while someone wants focusin/focusout
				var handler = function handler(event) {
					jQuery.event.simulate(fix, event.target, jQuery.event.fix(event), true);
				};
	
				jQuery.event.special[fix] = {
					setup: function setup() {
						var doc = this.ownerDocument || this,
						    attaches = jQuery._data(doc, fix);
	
						if (!attaches) {
							doc.addEventListener(orig, handler, true);
						}
						jQuery._data(doc, fix, (attaches || 0) + 1);
					},
					teardown: function teardown() {
						var doc = this.ownerDocument || this,
						    attaches = jQuery._data(doc, fix) - 1;
	
						if (!attaches) {
							doc.removeEventListener(orig, handler, true);
							jQuery._removeData(doc, fix);
						} else {
							jQuery._data(doc, fix, attaches);
						}
					}
				};
			});
		}
	
		jQuery.fn.extend({
	
			on: function on(types, selector, data, fn, /*INTERNAL*/one) {
				var type, origFn;
	
				// Types can be a map of types/handlers
				if ((typeof types === "undefined" ? "undefined" : _typeof(types)) === "object") {
					// ( types-Object, selector, data )
					if (typeof selector !== "string") {
						// ( types-Object, data )
						data = data || selector;
						selector = undefined;
					}
					for (type in types) {
						this.on(type, selector, data, types[type], one);
					}
					return this;
				}
	
				if (data == null && fn == null) {
					// ( types, fn )
					fn = selector;
					data = selector = undefined;
				} else if (fn == null) {
					if (typeof selector === "string") {
						// ( types, selector, fn )
						fn = data;
						data = undefined;
					} else {
						// ( types, data, fn )
						fn = data;
						data = selector;
						selector = undefined;
					}
				}
				if (fn === false) {
					fn = returnFalse;
				} else if (!fn) {
					return this;
				}
	
				if (one === 1) {
					origFn = fn;
					fn = function fn(event) {
						// Can use an empty set, since event contains the info
						jQuery().off(event);
						return origFn.apply(this, arguments);
					};
					// Use same guid so caller can remove using origFn
					fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
				}
				return this.each(function () {
					jQuery.event.add(this, types, fn, data, selector);
				});
			},
			one: function one(types, selector, data, fn) {
				return this.on(types, selector, data, fn, 1);
			},
			off: function off(types, selector, fn) {
				var handleObj, type;
				if (types && types.preventDefault && types.handleObj) {
					// ( event )  dispatched jQuery.Event
					handleObj = types.handleObj;
					jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
					return this;
				}
				if ((typeof types === "undefined" ? "undefined" : _typeof(types)) === "object") {
					// ( types-object [, selector] )
					for (type in types) {
						this.off(type, selector, types[type]);
					}
					return this;
				}
				if (selector === false || typeof selector === "function") {
					// ( types [, fn] )
					fn = selector;
					selector = undefined;
				}
				if (fn === false) {
					fn = returnFalse;
				}
				return this.each(function () {
					jQuery.event.remove(this, types, fn, selector);
				});
			},
	
			trigger: function trigger(type, data) {
				return this.each(function () {
					jQuery.event.trigger(type, data, this);
				});
			},
			triggerHandler: function triggerHandler(type, data) {
				var elem = this[0];
				if (elem) {
					return jQuery.event.trigger(type, data, elem, true);
				}
			}
		});
	
		function createSafeFragment(document) {
			var list = nodeNames.split("|"),
			    safeFrag = document.createDocumentFragment();
	
			if (safeFrag.createElement) {
				while (list.length) {
					safeFrag.createElement(list.pop());
				}
			}
			return safeFrag;
		}
	
		var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" + "header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
		    rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
		    rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
		    rleadingWhitespace = /^\s+/,
		    rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		    rtagName = /<([\w:]+)/,
		    rtbody = /<tbody/i,
		    rhtml = /<|&#?\w+;/,
		    rnoInnerhtml = /<(?:script|style|link)/i,
	
		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		    rscriptType = /^$|\/(?:java|ecma)script/i,
		    rscriptTypeMasked = /^true\/(.*)/,
		    rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
	
	
		// We have to close these tags to support XHTML (#13200)
		wrapMap = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			area: [1, "<map>", "</map>"],
			param: [1, "<object>", "</object>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
	
			// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
			// unless wrapped in a div with non-breaking characters in front of it.
			_default: support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
		},
		    safeFragment = createSafeFragment(document),
		    fragmentDiv = safeFragment.appendChild(document.createElement("div"));
	
		wrapMap.optgroup = wrapMap.option;
		wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
		wrapMap.th = wrapMap.td;
	
		function getAll(context, tag) {
			var elems,
			    elem,
			    i = 0,
			    found = _typeof(context.getElementsByTagName) !== strundefined ? context.getElementsByTagName(tag || "*") : _typeof(context.querySelectorAll) !== strundefined ? context.querySelectorAll(tag || "*") : undefined;
	
			if (!found) {
				for (found = [], elems = context.childNodes || context; (elem = elems[i]) != null; i++) {
					if (!tag || jQuery.nodeName(elem, tag)) {
						found.push(elem);
					} else {
						jQuery.merge(found, getAll(elem, tag));
					}
				}
			}
	
			return tag === undefined || tag && jQuery.nodeName(context, tag) ? jQuery.merge([context], found) : found;
		}
	
		// Used in buildFragment, fixes the defaultChecked property
		function fixDefaultChecked(elem) {
			if (rcheckableType.test(elem.type)) {
				elem.defaultChecked = elem.checked;
			}
		}
	
		// Support: IE<8
		// Manipulating tables requires a tbody
		function manipulationTarget(elem, content) {
			return jQuery.nodeName(elem, "table") && jQuery.nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr") ? elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")) : elem;
		}
	
		// Replace/restore the type attribute of script elements for safe DOM manipulation
		function disableScript(elem) {
			elem.type = (jQuery.find.attr(elem, "type") !== null) + "/" + elem.type;
			return elem;
		}
		function restoreScript(elem) {
			var match = rscriptTypeMasked.exec(elem.type);
			if (match) {
				elem.type = match[1];
			} else {
				elem.removeAttribute("type");
			}
			return elem;
		}
	
		// Mark scripts as having already been evaluated
		function setGlobalEval(elems, refElements) {
			var elem,
			    i = 0;
			for (; (elem = elems[i]) != null; i++) {
				jQuery._data(elem, "globalEval", !refElements || jQuery._data(refElements[i], "globalEval"));
			}
		}
	
		function cloneCopyEvent(src, dest) {
	
			if (dest.nodeType !== 1 || !jQuery.hasData(src)) {
				return;
			}
	
			var type,
			    i,
			    l,
			    oldData = jQuery._data(src),
			    curData = jQuery._data(dest, oldData),
			    events = oldData.events;
	
			if (events) {
				delete curData.handle;
				curData.events = {};
	
				for (type in events) {
					for (i = 0, l = events[type].length; i < l; i++) {
						jQuery.event.add(dest, type, events[type][i]);
					}
				}
			}
	
			// make the cloned public data object a copy from the original
			if (curData.data) {
				curData.data = jQuery.extend({}, curData.data);
			}
		}
	
		function fixCloneNodeIssues(src, dest) {
			var nodeName, e, data;
	
			// We do not need to do anything for non-Elements
			if (dest.nodeType !== 1) {
				return;
			}
	
			nodeName = dest.nodeName.toLowerCase();
	
			// IE6-8 copies events bound via attachEvent when using cloneNode.
			if (!support.noCloneEvent && dest[jQuery.expando]) {
				data = jQuery._data(dest);
	
				for (e in data.events) {
					jQuery.removeEvent(dest, e, data.handle);
				}
	
				// Event data gets referenced instead of copied if the expando gets copied too
				dest.removeAttribute(jQuery.expando);
			}
	
			// IE blanks contents when cloning scripts, and tries to evaluate newly-set text
			if (nodeName === "script" && dest.text !== src.text) {
				disableScript(dest).text = src.text;
				restoreScript(dest);
	
				// IE6-10 improperly clones children of object elements using classid.
				// IE10 throws NoModificationAllowedError if parent is null, #12132.
			} else if (nodeName === "object") {
				if (dest.parentNode) {
					dest.outerHTML = src.outerHTML;
				}
	
				// This path appears unavoidable for IE9. When cloning an object
				// element in IE9, the outerHTML strategy above is not sufficient.
				// If the src has innerHTML and the destination does not,
				// copy the src.innerHTML into the dest.innerHTML. #10324
				if (support.html5Clone && src.innerHTML && !jQuery.trim(dest.innerHTML)) {
					dest.innerHTML = src.innerHTML;
				}
			} else if (nodeName === "input" && rcheckableType.test(src.type)) {
				// IE6-8 fails to persist the checked state of a cloned checkbox
				// or radio button. Worse, IE6-7 fail to give the cloned element
				// a checked appearance if the defaultChecked value isn't also set
	
				dest.defaultChecked = dest.checked = src.checked;
	
				// IE6-7 get confused and end up setting the value of a cloned
				// checkbox/radio button to an empty string instead of "on"
				if (dest.value !== src.value) {
					dest.value = src.value;
				}
	
				// IE6-8 fails to return the selected option to the default selected
				// state when cloning options
			} else if (nodeName === "option") {
				dest.defaultSelected = dest.selected = src.defaultSelected;
	
				// IE6-8 fails to set the defaultValue to the correct value when
				// cloning other types of input fields
			} else if (nodeName === "input" || nodeName === "textarea") {
				dest.defaultValue = src.defaultValue;
			}
		}
	
		jQuery.extend({
			clone: function clone(elem, dataAndEvents, deepDataAndEvents) {
				var destElements,
				    node,
				    clone,
				    i,
				    srcElements,
				    inPage = jQuery.contains(elem.ownerDocument, elem);
	
				if (support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test("<" + elem.nodeName + ">")) {
					clone = elem.cloneNode(true);
	
					// IE<=8 does not properly clone detached, unknown element nodes
				} else {
					fragmentDiv.innerHTML = elem.outerHTML;
					fragmentDiv.removeChild(clone = fragmentDiv.firstChild);
				}
	
				if ((!support.noCloneEvent || !support.noCloneChecked) && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
	
					// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
					destElements = getAll(clone);
					srcElements = getAll(elem);
	
					// Fix all IE cloning issues
					for (i = 0; (node = srcElements[i]) != null; ++i) {
						// Ensure that the destination node is not null; Fixes #9587
						if (destElements[i]) {
							fixCloneNodeIssues(node, destElements[i]);
						}
					}
				}
	
				// Copy the events from the original to the clone
				if (dataAndEvents) {
					if (deepDataAndEvents) {
						srcElements = srcElements || getAll(elem);
						destElements = destElements || getAll(clone);
	
						for (i = 0; (node = srcElements[i]) != null; i++) {
							cloneCopyEvent(node, destElements[i]);
						}
					} else {
						cloneCopyEvent(elem, clone);
					}
				}
	
				// Preserve script evaluation history
				destElements = getAll(clone, "script");
				if (destElements.length > 0) {
					setGlobalEval(destElements, !inPage && getAll(elem, "script"));
				}
	
				destElements = srcElements = node = null;
	
				// Return the cloned set
				return clone;
			},
	
			buildFragment: function buildFragment(elems, context, scripts, selection) {
				var j,
				    elem,
				    contains,
				    tmp,
				    tag,
				    tbody,
				    wrap,
				    l = elems.length,
	
	
				// Ensure a safe fragment
				safe = createSafeFragment(context),
				    nodes = [],
				    i = 0;
	
				for (; i < l; i++) {
					elem = elems[i];
	
					if (elem || elem === 0) {
	
						// Add nodes directly
						if (jQuery.type(elem) === "object") {
							jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
	
							// Convert non-html into a text node
						} else if (!rhtml.test(elem)) {
							nodes.push(context.createTextNode(elem));
	
							// Convert html into DOM nodes
						} else {
							tmp = tmp || safe.appendChild(context.createElement("div"));
	
							// Deserialize a standard representation
							tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
							wrap = wrapMap[tag] || wrapMap._default;
	
							tmp.innerHTML = wrap[1] + elem.replace(rxhtmlTag, "<$1></$2>") + wrap[2];
	
							// Descend through wrappers to the right content
							j = wrap[0];
							while (j--) {
								tmp = tmp.lastChild;
							}
	
							// Manually add leading whitespace removed by IE
							if (!support.leadingWhitespace && rleadingWhitespace.test(elem)) {
								nodes.push(context.createTextNode(rleadingWhitespace.exec(elem)[0]));
							}
	
							// Remove IE's autoinserted <tbody> from table fragments
							if (!support.tbody) {
	
								// String was a <table>, *may* have spurious <tbody>
								elem = tag === "table" && !rtbody.test(elem) ? tmp.firstChild :
	
								// String was a bare <thead> or <tfoot>
								wrap[1] === "<table>" && !rtbody.test(elem) ? tmp : 0;
	
								j = elem && elem.childNodes.length;
								while (j--) {
									if (jQuery.nodeName(tbody = elem.childNodes[j], "tbody") && !tbody.childNodes.length) {
										elem.removeChild(tbody);
									}
								}
							}
	
							jQuery.merge(nodes, tmp.childNodes);
	
							// Fix #12392 for WebKit and IE > 9
							tmp.textContent = "";
	
							// Fix #12392 for oldIE
							while (tmp.firstChild) {
								tmp.removeChild(tmp.firstChild);
							}
	
							// Remember the top-level container for proper cleanup
							tmp = safe.lastChild;
						}
					}
				}
	
				// Fix #11356: Clear elements from fragment
				if (tmp) {
					safe.removeChild(tmp);
				}
	
				// Reset defaultChecked for any radios and checkboxes
				// about to be appended to the DOM in IE 6/7 (#8060)
				if (!support.appendChecked) {
					jQuery.grep(getAll(nodes, "input"), fixDefaultChecked);
				}
	
				i = 0;
				while (elem = nodes[i++]) {
	
					// #4087 - If origin and destination elements are the same, and this is
					// that element, do not do anything
					if (selection && jQuery.inArray(elem, selection) !== -1) {
						continue;
					}
	
					contains = jQuery.contains(elem.ownerDocument, elem);
	
					// Append to fragment
					tmp = getAll(safe.appendChild(elem), "script");
	
					// Preserve script evaluation history
					if (contains) {
						setGlobalEval(tmp);
					}
	
					// Capture executables
					if (scripts) {
						j = 0;
						while (elem = tmp[j++]) {
							if (rscriptType.test(elem.type || "")) {
								scripts.push(elem);
							}
						}
					}
				}
	
				tmp = null;
	
				return safe;
			},
	
			cleanData: function cleanData(elems, /* internal */acceptData) {
				var elem,
				    type,
				    id,
				    data,
				    i = 0,
				    internalKey = jQuery.expando,
				    cache = jQuery.cache,
				    deleteExpando = support.deleteExpando,
				    special = jQuery.event.special;
	
				for (; (elem = elems[i]) != null; i++) {
					if (acceptData || jQuery.acceptData(elem)) {
	
						id = elem[internalKey];
						data = id && cache[id];
	
						if (data) {
							if (data.events) {
								for (type in data.events) {
									if (special[type]) {
										jQuery.event.remove(elem, type);
	
										// This is a shortcut to avoid jQuery.event.remove's overhead
									} else {
										jQuery.removeEvent(elem, type, data.handle);
									}
								}
							}
	
							// Remove cache only if it was not already removed by jQuery.event.remove
							if (cache[id]) {
	
								delete cache[id];
	
								// IE does not allow us to delete expando properties from nodes,
								// nor does it have a removeAttribute function on Document nodes;
								// we must handle all of these cases
								if (deleteExpando) {
									delete elem[internalKey];
								} else if (_typeof(elem.removeAttribute) !== strundefined) {
									elem.removeAttribute(internalKey);
								} else {
									elem[internalKey] = null;
								}
	
								deletedIds.push(id);
							}
						}
					}
				}
			}
		});
	
		jQuery.fn.extend({
			text: function text(value) {
				return access(this, function (value) {
					return value === undefined ? jQuery.text(this) : this.empty().append((this[0] && this[0].ownerDocument || document).createTextNode(value));
				}, null, value, arguments.length);
			},
	
			append: function append() {
				return this.domManip(arguments, function (elem) {
					if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
						var target = manipulationTarget(this, elem);
						target.appendChild(elem);
					}
				});
			},
	
			prepend: function prepend() {
				return this.domManip(arguments, function (elem) {
					if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
						var target = manipulationTarget(this, elem);
						target.insertBefore(elem, target.firstChild);
					}
				});
			},
	
			before: function before() {
				return this.domManip(arguments, function (elem) {
					if (this.parentNode) {
						this.parentNode.insertBefore(elem, this);
					}
				});
			},
	
			after: function after() {
				return this.domManip(arguments, function (elem) {
					if (this.parentNode) {
						this.parentNode.insertBefore(elem, this.nextSibling);
					}
				});
			},
	
			remove: function remove(selector, keepData /* Internal Use Only */) {
				var elem,
				    elems = selector ? jQuery.filter(selector, this) : this,
				    i = 0;
	
				for (; (elem = elems[i]) != null; i++) {
	
					if (!keepData && elem.nodeType === 1) {
						jQuery.cleanData(getAll(elem));
					}
	
					if (elem.parentNode) {
						if (keepData && jQuery.contains(elem.ownerDocument, elem)) {
							setGlobalEval(getAll(elem, "script"));
						}
						elem.parentNode.removeChild(elem);
					}
				}
	
				return this;
			},
	
			empty: function empty() {
				var elem,
				    i = 0;
	
				for (; (elem = this[i]) != null; i++) {
					// Remove element nodes and prevent memory leaks
					if (elem.nodeType === 1) {
						jQuery.cleanData(getAll(elem, false));
					}
	
					// Remove any remaining nodes
					while (elem.firstChild) {
						elem.removeChild(elem.firstChild);
					}
	
					// If this is a select, ensure that it displays empty (#12336)
					// Support: IE<9
					if (elem.options && jQuery.nodeName(elem, "select")) {
						elem.options.length = 0;
					}
				}
	
				return this;
			},
	
			clone: function clone(dataAndEvents, deepDataAndEvents) {
				dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
				deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
	
				return this.map(function () {
					return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
				});
			},
	
			html: function html(value) {
				return access(this, function (value) {
					var elem = this[0] || {},
					    i = 0,
					    l = this.length;
	
					if (value === undefined) {
						return elem.nodeType === 1 ? elem.innerHTML.replace(rinlinejQuery, "") : undefined;
					}
	
					// See if we can take a shortcut and just use innerHTML
					if (typeof value === "string" && !rnoInnerhtml.test(value) && (support.htmlSerialize || !rnoshimcache.test(value)) && (support.leadingWhitespace || !rleadingWhitespace.test(value)) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
	
						value = value.replace(rxhtmlTag, "<$1></$2>");
	
						try {
							for (; i < l; i++) {
								// Remove element nodes and prevent memory leaks
								elem = this[i] || {};
								if (elem.nodeType === 1) {
									jQuery.cleanData(getAll(elem, false));
									elem.innerHTML = value;
								}
							}
	
							elem = 0;
	
							// If using innerHTML throws an exception, use the fallback method
						} catch (e) {}
					}
	
					if (elem) {
						this.empty().append(value);
					}
				}, null, value, arguments.length);
			},
	
			replaceWith: function replaceWith() {
				var arg = arguments[0];
	
				// Make the changes, replacing each context element with the new content
				this.domManip(arguments, function (elem) {
					arg = this.parentNode;
	
					jQuery.cleanData(getAll(this));
	
					if (arg) {
						arg.replaceChild(elem, this);
					}
				});
	
				// Force removal if there was no new content (e.g., from empty arguments)
				return arg && (arg.length || arg.nodeType) ? this : this.remove();
			},
	
			detach: function detach(selector) {
				return this.remove(selector, true);
			},
	
			domManip: function domManip(args, callback) {
	
				// Flatten any nested arrays
				args = concat.apply([], args);
	
				var first,
				    node,
				    hasScripts,
				    scripts,
				    doc,
				    fragment,
				    i = 0,
				    l = this.length,
				    set = this,
				    iNoClone = l - 1,
				    value = args[0],
				    isFunction = jQuery.isFunction(value);
	
				// We can't cloneNode fragments that contain checked, in WebKit
				if (isFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
					return this.each(function (index) {
						var self = set.eq(index);
						if (isFunction) {
							args[0] = value.call(this, index, self.html());
						}
						self.domManip(args, callback);
					});
				}
	
				if (l) {
					fragment = jQuery.buildFragment(args, this[0].ownerDocument, false, this);
					first = fragment.firstChild;
	
					if (fragment.childNodes.length === 1) {
						fragment = first;
					}
	
					if (first) {
						scripts = jQuery.map(getAll(fragment, "script"), disableScript);
						hasScripts = scripts.length;
	
						// Use the original fragment for the last item instead of the first because it can end up
						// being emptied incorrectly in certain situations (#8070).
						for (; i < l; i++) {
							node = fragment;
	
							if (i !== iNoClone) {
								node = jQuery.clone(node, true, true);
	
								// Keep references to cloned scripts for later restoration
								if (hasScripts) {
									jQuery.merge(scripts, getAll(node, "script"));
								}
							}
	
							callback.call(this[i], node, i);
						}
	
						if (hasScripts) {
							doc = scripts[scripts.length - 1].ownerDocument;
	
							// Reenable scripts
							jQuery.map(scripts, restoreScript);
	
							// Evaluate executable scripts on first document insertion
							for (i = 0; i < hasScripts; i++) {
								node = scripts[i];
								if (rscriptType.test(node.type || "") && !jQuery._data(node, "globalEval") && jQuery.contains(doc, node)) {
	
									if (node.src) {
										// Optional AJAX dependency, but won't run scripts if not present
										if (jQuery._evalUrl) {
											jQuery._evalUrl(node.src);
										}
									} else {
										jQuery.globalEval((node.text || node.textContent || node.innerHTML || "").replace(rcleanScript, ""));
									}
								}
							}
						}
	
						// Fix #11809: Avoid leaking memory
						fragment = first = null;
					}
				}
	
				return this;
			}
		});
	
		jQuery.each({
			appendTo: "append",
			prependTo: "prepend",
			insertBefore: "before",
			insertAfter: "after",
			replaceAll: "replaceWith"
		}, function (name, original) {
			jQuery.fn[name] = function (selector) {
				var elems,
				    i = 0,
				    ret = [],
				    insert = jQuery(selector),
				    last = insert.length - 1;
	
				for (; i <= last; i++) {
					elems = i === last ? this : this.clone(true);
					jQuery(insert[i])[original](elems);
	
					// Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
					push.apply(ret, elems.get());
				}
	
				return this.pushStack(ret);
			};
		});
	
		var iframe,
		    elemdisplay = {};
	
		/**
	  * Retrieve the actual display of a element
	  * @param {String} name nodeName of the element
	  * @param {Object} doc Document object
	  */
		// Called only from within defaultDisplay
		function actualDisplay(name, doc) {
			var style,
			    elem = jQuery(doc.createElement(name)).appendTo(doc.body),
	
	
			// getDefaultComputedStyle might be reliably used only on attached element
			display = window.getDefaultComputedStyle && (style = window.getDefaultComputedStyle(elem[0])) ?
	
			// Use of this method is a temporary fix (more like optmization) until something better comes along,
			// since it was removed from specification and supported only in FF
			style.display : jQuery.css(elem[0], "display");
	
			// We don't have any data stored on the element,
			// so use "detach" method as fast way to get rid of the element
			elem.detach();
	
			return display;
		}
	
		/**
	  * Try to determine the default display value of an element
	  * @param {String} nodeName
	  */
		function defaultDisplay(nodeName) {
			var doc = document,
			    display = elemdisplay[nodeName];
	
			if (!display) {
				display = actualDisplay(nodeName, doc);
	
				// If the simple way fails, read from inside an iframe
				if (display === "none" || !display) {
	
					// Use the already-created iframe if possible
					iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement);
	
					// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
					doc = (iframe[0].contentWindow || iframe[0].contentDocument).document;
	
					// Support: IE
					doc.write();
					doc.close();
	
					display = actualDisplay(nodeName, doc);
					iframe.detach();
				}
	
				// Store the correct default display
				elemdisplay[nodeName] = display;
			}
	
			return display;
		}
	
		(function () {
			var shrinkWrapBlocksVal;
	
			support.shrinkWrapBlocks = function () {
				if (shrinkWrapBlocksVal != null) {
					return shrinkWrapBlocksVal;
				}
	
				// Will be changed later if needed.
				shrinkWrapBlocksVal = false;
	
				// Minified: var b,c,d
				var div, body, container;
	
				body = document.getElementsByTagName("body")[0];
				if (!body || !body.style) {
					// Test fired too early or in an unsupported environment, exit.
					return;
				}
	
				// Setup
				div = document.createElement("div");
				container = document.createElement("div");
				container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
				body.appendChild(container).appendChild(div);
	
				// Support: IE6
				// Check if elements with layout shrink-wrap their children
				if (_typeof(div.style.zoom) !== strundefined) {
					// Reset CSS: box-sizing; display; margin; border
					div.style.cssText =
					// Support: Firefox<29, Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" + "box-sizing:content-box;display:block;margin:0;border:0;" + "padding:1px;width:1px;zoom:1";
					div.appendChild(document.createElement("div")).style.width = "5px";
					shrinkWrapBlocksVal = div.offsetWidth !== 3;
				}
	
				body.removeChild(container);
	
				return shrinkWrapBlocksVal;
			};
		})();
		var rmargin = /^margin/;
	
		var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
	
		var getStyles,
		    curCSS,
		    rposition = /^(top|right|bottom|left)$/;
	
		if (window.getComputedStyle) {
			getStyles = function getStyles(elem) {
				// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
				// IE throws on elements created in popups
				// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
				if (elem.ownerDocument.defaultView.opener) {
					return elem.ownerDocument.defaultView.getComputedStyle(elem, null);
				}
	
				return window.getComputedStyle(elem, null);
			};
	
			curCSS = function curCSS(elem, name, computed) {
				var width,
				    minWidth,
				    maxWidth,
				    ret,
				    style = elem.style;
	
				computed = computed || getStyles(elem);
	
				// getPropertyValue is only needed for .css('filter') in IE9, see #12537
				ret = computed ? computed.getPropertyValue(name) || computed[name] : undefined;
	
				if (computed) {
	
					if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
						ret = jQuery.style(elem, name);
					}
	
					// A tribute to the "awesome hack by Dean Edwards"
					// Chrome < 17 and Safari 5.0 uses "computed value" instead of "used value" for margin-right
					// Safari 5.1.7 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
					// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
					if (rnumnonpx.test(ret) && rmargin.test(name)) {
	
						// Remember the original values
						width = style.width;
						minWidth = style.minWidth;
						maxWidth = style.maxWidth;
	
						// Put in the new values to get a computed value out
						style.minWidth = style.maxWidth = style.width = ret;
						ret = computed.width;
	
						// Revert the changed values
						style.width = width;
						style.minWidth = minWidth;
						style.maxWidth = maxWidth;
					}
				}
	
				// Support: IE
				// IE returns zIndex value as an integer.
				return ret === undefined ? ret : ret + "";
			};
		} else if (document.documentElement.currentStyle) {
			getStyles = function getStyles(elem) {
				return elem.currentStyle;
			};
	
			curCSS = function curCSS(elem, name, computed) {
				var left,
				    rs,
				    rsLeft,
				    ret,
				    style = elem.style;
	
				computed = computed || getStyles(elem);
				ret = computed ? computed[name] : undefined;
	
				// Avoid setting ret to empty string here
				// so we don't default to auto
				if (ret == null && style && style[name]) {
					ret = style[name];
				}
	
				// From the awesome hack by Dean Edwards
				// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
	
				// If we're not dealing with a regular pixel number
				// but a number that has a weird ending, we need to convert it to pixels
				// but not position css attributes, as those are proportional to the parent element instead
				// and we can't measure the parent instead because it might trigger a "stacking dolls" problem
				if (rnumnonpx.test(ret) && !rposition.test(name)) {
	
					// Remember the original values
					left = style.left;
					rs = elem.runtimeStyle;
					rsLeft = rs && rs.left;
	
					// Put in the new values to get a computed value out
					if (rsLeft) {
						rs.left = elem.currentStyle.left;
					}
					style.left = name === "fontSize" ? "1em" : ret;
					ret = style.pixelLeft + "px";
	
					// Revert the changed values
					style.left = left;
					if (rsLeft) {
						rs.left = rsLeft;
					}
				}
	
				// Support: IE
				// IE returns zIndex value as an integer.
				return ret === undefined ? ret : ret + "" || "auto";
			};
		}
	
		function addGetHookIf(conditionFn, hookFn) {
			// Define the hook, we'll check on the first run if it's really needed.
			return {
				get: function get() {
					var condition = conditionFn();
	
					if (condition == null) {
						// The test was not ready at this point; screw the hook this time
						// but check again when needed next time.
						return;
					}
	
					if (condition) {
						// Hook not needed (or it's not possible to use it due to missing dependency),
						// remove it.
						// Since there are no other hooks for marginRight, remove the whole object.
						delete this.get;
						return;
					}
	
					// Hook needed; redefine it so that the support test is not executed again.
	
					return (this.get = hookFn).apply(this, arguments);
				}
			};
		}
	
		(function () {
			// Minified: var b,c,d,e,f,g, h,i
			var div, style, a, pixelPositionVal, boxSizingReliableVal, reliableHiddenOffsetsVal, reliableMarginRightVal;
	
			// Setup
			div = document.createElement("div");
			div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
			a = div.getElementsByTagName("a")[0];
			style = a && a.style;
	
			// Finish early in limited (non-browser) environments
			if (!style) {
				return;
			}
	
			style.cssText = "float:left;opacity:.5";
	
			// Support: IE<9
			// Make sure that element opacity exists (as opposed to filter)
			support.opacity = style.opacity === "0.5";
	
			// Verify style float existence
			// (IE uses styleFloat instead of cssFloat)
			support.cssFloat = !!style.cssFloat;
	
			div.style.backgroundClip = "content-box";
			div.cloneNode(true).style.backgroundClip = "";
			support.clearCloneStyle = div.style.backgroundClip === "content-box";
	
			// Support: Firefox<29, Android 2.3
			// Vendor-prefix box-sizing
			support.boxSizing = style.boxSizing === "" || style.MozBoxSizing === "" || style.WebkitBoxSizing === "";
	
			jQuery.extend(support, {
				reliableHiddenOffsets: function reliableHiddenOffsets() {
					if (reliableHiddenOffsetsVal == null) {
						computeStyleTests();
					}
					return reliableHiddenOffsetsVal;
				},
	
				boxSizingReliable: function boxSizingReliable() {
					if (boxSizingReliableVal == null) {
						computeStyleTests();
					}
					return boxSizingReliableVal;
				},
	
				pixelPosition: function pixelPosition() {
					if (pixelPositionVal == null) {
						computeStyleTests();
					}
					return pixelPositionVal;
				},
	
				// Support: Android 2.3
				reliableMarginRight: function reliableMarginRight() {
					if (reliableMarginRightVal == null) {
						computeStyleTests();
					}
					return reliableMarginRightVal;
				}
			});
	
			function computeStyleTests() {
				// Minified: var b,c,d,j
				var div, body, container, contents;
	
				body = document.getElementsByTagName("body")[0];
				if (!body || !body.style) {
					// Test fired too early or in an unsupported environment, exit.
					return;
				}
	
				// Setup
				div = document.createElement("div");
				container = document.createElement("div");
				container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
				body.appendChild(container).appendChild(div);
	
				div.style.cssText =
				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" + "box-sizing:border-box;display:block;margin-top:1%;top:1%;" + "border:1px;padding:1px;width:4px;position:absolute";
	
				// Support: IE<9
				// Assume reasonable values in the absence of getComputedStyle
				pixelPositionVal = boxSizingReliableVal = false;
				reliableMarginRightVal = true;
	
				// Check for getComputedStyle so that this code is not run in IE<9.
				if (window.getComputedStyle) {
					pixelPositionVal = (window.getComputedStyle(div, null) || {}).top !== "1%";
					boxSizingReliableVal = (window.getComputedStyle(div, null) || { width: "4px" }).width === "4px";
	
					// Support: Android 2.3
					// Div with explicit width and no margin-right incorrectly
					// gets computed margin-right based on width of container (#3333)
					// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
					contents = div.appendChild(document.createElement("div"));
	
					// Reset CSS: box-sizing; display; margin; border; padding
					contents.style.cssText = div.style.cssText =
					// Support: Firefox<29, Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" + "box-sizing:content-box;display:block;margin:0;border:0;padding:0";
					contents.style.marginRight = contents.style.width = "0";
					div.style.width = "1px";
	
					reliableMarginRightVal = !parseFloat((window.getComputedStyle(contents, null) || {}).marginRight);
	
					div.removeChild(contents);
				}
	
				// Support: IE8
				// Check if table cells still have offsetWidth/Height when they are set
				// to display:none and there are still other visible table cells in a
				// table row; if so, offsetWidth/Height are not reliable for use when
				// determining if an element has been hidden directly using
				// display:none (it is still safe to use offsets if a parent element is
				// hidden; don safety goggles and see bug #4512 for more information).
				div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
				contents = div.getElementsByTagName("td");
				contents[0].style.cssText = "margin:0;border:0;padding:0;display:none";
				reliableHiddenOffsetsVal = contents[0].offsetHeight === 0;
				if (reliableHiddenOffsetsVal) {
					contents[0].style.display = "";
					contents[1].style.display = "none";
					reliableHiddenOffsetsVal = contents[0].offsetHeight === 0;
				}
	
				body.removeChild(container);
			}
		})();
	
		// A method for quickly swapping in/out CSS properties to get correct calculations.
		jQuery.swap = function (elem, options, callback, args) {
			var ret,
			    name,
			    old = {};
	
			// Remember the old values, and insert the new ones
			for (name in options) {
				old[name] = elem.style[name];
				elem.style[name] = options[name];
			}
	
			ret = callback.apply(elem, args || []);
	
			// Revert the old values
			for (name in options) {
				elem.style[name] = old[name];
			}
	
			return ret;
		};
	
		var ralpha = /alpha\([^)]*\)/i,
		    ropacity = /opacity\s*=\s*([^)]*)/,
	
	
		// swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
		// see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		    rnumsplit = new RegExp("^(" + pnum + ")(.*)$", "i"),
		    rrelNum = new RegExp("^([+-])=(" + pnum + ")", "i"),
		    cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		    cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		    cssPrefixes = ["Webkit", "O", "Moz", "ms"];
	
		// return a css property mapped to a potentially vendor prefixed property
		function vendorPropName(style, name) {
	
			// shortcut for names that are not vendor prefixed
			if (name in style) {
				return name;
			}
	
			// check for vendor prefixed names
			var capName = name.charAt(0).toUpperCase() + name.slice(1),
			    origName = name,
			    i = cssPrefixes.length;
	
			while (i--) {
				name = cssPrefixes[i] + capName;
				if (name in style) {
					return name;
				}
			}
	
			return origName;
		}
	
		function showHide(elements, show) {
			var display,
			    elem,
			    hidden,
			    values = [],
			    index = 0,
			    length = elements.length;
	
			for (; index < length; index++) {
				elem = elements[index];
				if (!elem.style) {
					continue;
				}
	
				values[index] = jQuery._data(elem, "olddisplay");
				display = elem.style.display;
				if (show) {
					// Reset the inline display of this element to learn if it is
					// being hidden by cascaded rules or not
					if (!values[index] && display === "none") {
						elem.style.display = "";
					}
	
					// Set elements which have been overridden with display: none
					// in a stylesheet to whatever the default browser style is
					// for such an element
					if (elem.style.display === "" && isHidden(elem)) {
						values[index] = jQuery._data(elem, "olddisplay", defaultDisplay(elem.nodeName));
					}
				} else {
					hidden = isHidden(elem);
	
					if (display && display !== "none" || !hidden) {
						jQuery._data(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display"));
					}
				}
			}
	
			// Set the display of most of the elements in a second loop
			// to avoid the constant reflow
			for (index = 0; index < length; index++) {
				elem = elements[index];
				if (!elem.style) {
					continue;
				}
				if (!show || elem.style.display === "none" || elem.style.display === "") {
					elem.style.display = show ? values[index] || "" : "none";
				}
			}
	
			return elements;
		}
	
		function setPositiveNumber(elem, value, subtract) {
			var matches = rnumsplit.exec(value);
			return matches ?
			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || "px") : value;
		}
	
		function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
			var i = extra === (isBorderBox ? "border" : "content") ?
			// If we already have the right measurement, avoid augmentation
			4 :
			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,
			    val = 0;
	
			for (; i < 4; i += 2) {
				// both box models exclude margin, so add it if we want it
				if (extra === "margin") {
					val += jQuery.css(elem, extra + cssExpand[i], true, styles);
				}
	
				if (isBorderBox) {
					// border-box includes padding, so remove it if we want content
					if (extra === "content") {
						val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
					}
	
					// at this point, extra isn't border nor margin, so remove border
					if (extra !== "margin") {
						val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
					}
				} else {
					// at this point, extra isn't content, so add padding
					val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
	
					// at this point, extra isn't content nor padding, so add border
					if (extra !== "padding") {
						val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
					}
				}
			}
	
			return val;
		}
	
		function getWidthOrHeight(elem, name, extra) {
	
			// Start with offset property, which is equivalent to the border-box value
			var valueIsBorderBox = true,
			    val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			    styles = getStyles(elem),
			    isBorderBox = support.boxSizing && jQuery.css(elem, "boxSizing", false, styles) === "border-box";
	
			// some non-html elements return undefined for offsetWidth, so check for null/undefined
			// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
			// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
			if (val <= 0 || val == null) {
				// Fall back to computed then uncomputed css if necessary
				val = curCSS(elem, name, styles);
				if (val < 0 || val == null) {
					val = elem.style[name];
				}
	
				// Computed unit is not pixels. Stop here and return.
				if (rnumnonpx.test(val)) {
					return val;
				}
	
				// we need the check for style in case a browser which returns unreliable values
				// for getComputedStyle silently falls back to the reliable elem.style
				valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]);
	
				// Normalize "", auto, and prepare for extra
				val = parseFloat(val) || 0;
			}
	
			// use the active box-sizing model to add/subtract irrelevant styles
			return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px";
		}
	
		jQuery.extend({
			// Add in style property hooks for overriding the default
			// behavior of getting and setting a style property
			cssHooks: {
				opacity: {
					get: function get(elem, computed) {
						if (computed) {
							// We should always get a number back from opacity
							var ret = curCSS(elem, "opacity");
							return ret === "" ? "1" : ret;
						}
					}
				}
			},
	
			// Don't automatically add "px" to these possibly-unitless properties
			cssNumber: {
				"columnCount": true,
				"fillOpacity": true,
				"flexGrow": true,
				"flexShrink": true,
				"fontWeight": true,
				"lineHeight": true,
				"opacity": true,
				"order": true,
				"orphans": true,
				"widows": true,
				"zIndex": true,
				"zoom": true
			},
	
			// Add in properties whose names you wish to fix before
			// setting or getting the value
			cssProps: {
				// normalize float css property
				"float": support.cssFloat ? "cssFloat" : "styleFloat"
			},
	
			// Get and set the style property on a DOM Node
			style: function style(elem, name, value, extra) {
				// Don't set styles on text and comment nodes
				if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
					return;
				}
	
				// Make sure that we're working with the right name
				var ret,
				    type,
				    hooks,
				    origName = jQuery.camelCase(name),
				    style = elem.style;
	
				name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(style, origName));
	
				// gets hook for the prefixed version
				// followed by the unprefixed version
				hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
	
				// Check if we're setting a value
				if (value !== undefined) {
					type = typeof value === "undefined" ? "undefined" : _typeof(value);
	
					// convert relative number strings (+= or -=) to relative numbers. #7345
					if (type === "string" && (ret = rrelNum.exec(value))) {
						value = (ret[1] + 1) * ret[2] + parseFloat(jQuery.css(elem, name));
						// Fixes bug #9237
						type = "number";
					}
	
					// Make sure that null and NaN values aren't set. See: #7116
					if (value == null || value !== value) {
						return;
					}
	
					// If a number was passed in, add 'px' to the (except for certain CSS properties)
					if (type === "number" && !jQuery.cssNumber[origName]) {
						value += "px";
					}
	
					// Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
					// but it would mean to define eight (for every problematic property) identical functions
					if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
						style[name] = "inherit";
					}
	
					// If a hook was provided, use that value, otherwise just set the specified value
					if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
	
						// Support: IE
						// Swallow errors from 'invalid' CSS values (#5509)
						try {
							style[name] = value;
						} catch (e) {}
					}
				} else {
					// If a hook was provided get the non-computed value from there
					if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
						return ret;
					}
	
					// Otherwise just get the value from the style object
					return style[name];
				}
			},
	
			css: function css(elem, name, extra, styles) {
				var num,
				    val,
				    hooks,
				    origName = jQuery.camelCase(name);
	
				// Make sure that we're working with the right name
				name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(elem.style, origName));
	
				// gets hook for the prefixed version
				// followed by the unprefixed version
				hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
	
				// If a hook was provided get the computed value from there
				if (hooks && "get" in hooks) {
					val = hooks.get(elem, true, extra);
				}
	
				// Otherwise, if a way to get the computed value exists, use that
				if (val === undefined) {
					val = curCSS(elem, name, styles);
				}
	
				//convert "normal" to computed value
				if (val === "normal" && name in cssNormalTransform) {
					val = cssNormalTransform[name];
				}
	
				// Return, converting to number if forced or a qualifier was provided and val looks numeric
				if (extra === "" || extra) {
					num = parseFloat(val);
					return extra === true || jQuery.isNumeric(num) ? num || 0 : val;
				}
				return val;
			}
		});
	
		jQuery.each(["height", "width"], function (i, name) {
			jQuery.cssHooks[name] = {
				get: function get(elem, computed, extra) {
					if (computed) {
						// certain elements can have dimension info if we invisibly show them
						// however, it must have a current display style that would benefit from this
						return rdisplayswap.test(jQuery.css(elem, "display")) && elem.offsetWidth === 0 ? jQuery.swap(elem, cssShow, function () {
							return getWidthOrHeight(elem, name, extra);
						}) : getWidthOrHeight(elem, name, extra);
					}
				},
	
				set: function set(elem, value, extra) {
					var styles = extra && getStyles(elem);
					return setPositiveNumber(elem, value, extra ? augmentWidthOrHeight(elem, name, extra, support.boxSizing && jQuery.css(elem, "boxSizing", false, styles) === "border-box", styles) : 0);
				}
			};
		});
	
		if (!support.opacity) {
			jQuery.cssHooks.opacity = {
				get: function get(elem, computed) {
					// IE uses filters for opacity
					return ropacity.test((computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : computed ? "1" : "";
				},
	
				set: function set(elem, value) {
					var style = elem.style,
					    currentStyle = elem.currentStyle,
					    opacity = jQuery.isNumeric(value) ? "alpha(opacity=" + value * 100 + ")" : "",
					    filter = currentStyle && currentStyle.filter || style.filter || "";
	
					// IE has trouble with opacity if it does not have layout
					// Force it by setting the zoom level
					style.zoom = 1;
	
					// if setting opacity to 1, and no other filters exist - attempt to remove filter attribute #6652
					// if value === "", then remove inline opacity #12685
					if ((value >= 1 || value === "") && jQuery.trim(filter.replace(ralpha, "")) === "" && style.removeAttribute) {
	
						// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
						// if "filter:" is present at all, clearType is disabled, we want to avoid this
						// style.removeAttribute is IE Only, but so apparently is this code path...
						style.removeAttribute("filter");
	
						// if there is no filter style applied in a css rule or unset inline opacity, we are done
						if (value === "" || currentStyle && !currentStyle.filter) {
							return;
						}
					}
	
					// otherwise, set new filter values
					style.filter = ralpha.test(filter) ? filter.replace(ralpha, opacity) : filter + " " + opacity;
				}
			};
		}
	
		jQuery.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight, function (elem, computed) {
			if (computed) {
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// Work around by temporarily setting element display to inline-block
				return jQuery.swap(elem, { "display": "inline-block" }, curCSS, [elem, "marginRight"]);
			}
		});
	
		// These hooks are used by animate to expand properties
		jQuery.each({
			margin: "",
			padding: "",
			border: "Width"
		}, function (prefix, suffix) {
			jQuery.cssHooks[prefix + suffix] = {
				expand: function expand(value) {
					var i = 0,
					    expanded = {},
	
	
					// assumes a single number if not a string
					parts = typeof value === "string" ? value.split(" ") : [value];
	
					for (; i < 4; i++) {
						expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
					}
	
					return expanded;
				}
			};
	
			if (!rmargin.test(prefix)) {
				jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
			}
		});
	
		jQuery.fn.extend({
			css: function css(name, value) {
				return access(this, function (elem, name, value) {
					var styles,
					    len,
					    map = {},
					    i = 0;
	
					if (jQuery.isArray(name)) {
						styles = getStyles(elem);
						len = name.length;
	
						for (; i < len; i++) {
							map[name[i]] = jQuery.css(elem, name[i], false, styles);
						}
	
						return map;
					}
	
					return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
				}, name, value, arguments.length > 1);
			},
			show: function show() {
				return showHide(this, true);
			},
			hide: function hide() {
				return showHide(this);
			},
			toggle: function toggle(state) {
				if (typeof state === "boolean") {
					return state ? this.show() : this.hide();
				}
	
				return this.each(function () {
					if (isHidden(this)) {
						jQuery(this).show();
					} else {
						jQuery(this).hide();
					}
				});
			}
		});
	
		function Tween(elem, options, prop, end, easing) {
			return new Tween.prototype.init(elem, options, prop, end, easing);
		}
		jQuery.Tween = Tween;
	
		Tween.prototype = {
			constructor: Tween,
			init: function init(elem, options, prop, end, easing, unit) {
				this.elem = elem;
				this.prop = prop;
				this.easing = easing || "swing";
				this.options = options;
				this.start = this.now = this.cur();
				this.end = end;
				this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
			},
			cur: function cur() {
				var hooks = Tween.propHooks[this.prop];
	
				return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
			},
			run: function run(percent) {
				var eased,
				    hooks = Tween.propHooks[this.prop];
	
				if (this.options.duration) {
					this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
				} else {
					this.pos = eased = percent;
				}
				this.now = (this.end - this.start) * eased + this.start;
	
				if (this.options.step) {
					this.options.step.call(this.elem, this.now, this);
				}
	
				if (hooks && hooks.set) {
					hooks.set(this);
				} else {
					Tween.propHooks._default.set(this);
				}
				return this;
			}
		};
	
		Tween.prototype.init.prototype = Tween.prototype;
	
		Tween.propHooks = {
			_default: {
				get: function get(tween) {
					var result;
	
					if (tween.elem[tween.prop] != null && (!tween.elem.style || tween.elem.style[tween.prop] == null)) {
						return tween.elem[tween.prop];
					}
	
					// passing an empty string as a 3rd parameter to .css will automatically
					// attempt a parseFloat and fallback to a string if the parse fails
					// so, simple values such as "10px" are parsed to Float.
					// complex values such as "rotate(1rad)" are returned as is.
					result = jQuery.css(tween.elem, tween.prop, "");
					// Empty strings, null, undefined and "auto" are converted to 0.
					return !result || result === "auto" ? 0 : result;
				},
				set: function set(tween) {
					// use step hook for back compat - use cssHook if its there - use .style if its
					// available and use plain properties where available
					if (jQuery.fx.step[tween.prop]) {
						jQuery.fx.step[tween.prop](tween);
					} else if (tween.elem.style && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
						jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
					} else {
						tween.elem[tween.prop] = tween.now;
					}
				}
			}
		};
	
		// Support: IE <=9
		// Panic based approach to setting things on disconnected nodes
	
		Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
			set: function set(tween) {
				if (tween.elem.nodeType && tween.elem.parentNode) {
					tween.elem[tween.prop] = tween.now;
				}
			}
		};
	
		jQuery.easing = {
			linear: function linear(p) {
				return p;
			},
			swing: function swing(p) {
				return 0.5 - Math.cos(p * Math.PI) / 2;
			}
		};
	
		jQuery.fx = Tween.prototype.init;
	
		// Back Compat <1.8 extension point
		jQuery.fx.step = {};
	
		var fxNow,
		    timerId,
		    rfxtypes = /^(?:toggle|show|hide)$/,
		    rfxnum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i"),
		    rrun = /queueHooks$/,
		    animationPrefilters = [defaultPrefilter],
		    tweeners = {
			"*": [function (prop, value) {
				var tween = this.createTween(prop, value),
				    target = tween.cur(),
				    parts = rfxnum.exec(value),
				    unit = parts && parts[3] || (jQuery.cssNumber[prop] ? "" : "px"),
	
	
				// Starting value computation is required for potential unit mismatches
				start = (jQuery.cssNumber[prop] || unit !== "px" && +target) && rfxnum.exec(jQuery.css(tween.elem, prop)),
				    scale = 1,
				    maxIterations = 20;
	
				if (start && start[3] !== unit) {
					// Trust units reported by jQuery.css
					unit = unit || start[3];
	
					// Make sure we update the tween properties later on
					parts = parts || [];
	
					// Iteratively approximate from a nonzero starting point
					start = +target || 1;
	
					do {
						// If previous iteration zeroed out, double until we get *something*
						// Use a string for doubling factor so we don't accidentally see scale as unchanged below
						scale = scale || ".5";
	
						// Adjust and apply
						start = start / scale;
						jQuery.style(tween.elem, prop, start + unit);
	
						// Update scale, tolerating zero or NaN from tween.cur()
						// And breaking the loop if scale is unchanged or perfect, or if we've just had enough
					} while (scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations);
				}
	
				// Update tween properties
				if (parts) {
					start = tween.start = +start || +target || 0;
					tween.unit = unit;
					// If a +=/-= token was provided, we're doing a relative animation
					tween.end = parts[1] ? start + (parts[1] + 1) * parts[2] : +parts[2];
				}
	
				return tween;
			}]
		};
	
		// Animations created synchronously will run synchronously
		function createFxNow() {
			setTimeout(function () {
				fxNow = undefined;
			});
			return fxNow = jQuery.now();
		}
	
		// Generate parameters to create a standard animation
		function genFx(type, includeWidth) {
			var which,
			    attrs = { height: type },
			    i = 0;
	
			// if we include width, step value is 1 to do all cssExpand values,
			// if we don't include width, step value is 2 to skip over Left and Right
			includeWidth = includeWidth ? 1 : 0;
			for (; i < 4; i += 2 - includeWidth) {
				which = cssExpand[i];
				attrs["margin" + which] = attrs["padding" + which] = type;
			}
	
			if (includeWidth) {
				attrs.opacity = attrs.width = type;
			}
	
			return attrs;
		}
	
		function createTween(value, prop, animation) {
			var tween,
			    collection = (tweeners[prop] || []).concat(tweeners["*"]),
			    index = 0,
			    length = collection.length;
			for (; index < length; index++) {
				if (tween = collection[index].call(animation, prop, value)) {
	
					// we're done with this property
					return tween;
				}
			}
		}
	
		function defaultPrefilter(elem, props, opts) {
			/* jshint validthis: true */
			var prop,
			    value,
			    toggle,
			    tween,
			    hooks,
			    oldfire,
			    display,
			    checkDisplay,
			    anim = this,
			    orig = {},
			    style = elem.style,
			    hidden = elem.nodeType && isHidden(elem),
			    dataShow = jQuery._data(elem, "fxshow");
	
			// handle queue: false promises
			if (!opts.queue) {
				hooks = jQuery._queueHooks(elem, "fx");
				if (hooks.unqueued == null) {
					hooks.unqueued = 0;
					oldfire = hooks.empty.fire;
					hooks.empty.fire = function () {
						if (!hooks.unqueued) {
							oldfire();
						}
					};
				}
				hooks.unqueued++;
	
				anim.always(function () {
					// doing this makes sure that the complete handler will be called
					// before this completes
					anim.always(function () {
						hooks.unqueued--;
						if (!jQuery.queue(elem, "fx").length) {
							hooks.empty.fire();
						}
					});
				});
			}
	
			// height/width overflow pass
			if (elem.nodeType === 1 && ("height" in props || "width" in props)) {
				// Make sure that nothing sneaks out
				// Record all 3 overflow attributes because IE does not
				// change the overflow attribute when overflowX and
				// overflowY are set to the same value
				opts.overflow = [style.overflow, style.overflowX, style.overflowY];
	
				// Set display property to inline-block for height/width
				// animations on inline elements that are having width/height animated
				display = jQuery.css(elem, "display");
	
				// Test default display if display is currently "none"
				checkDisplay = display === "none" ? jQuery._data(elem, "olddisplay") || defaultDisplay(elem.nodeName) : display;
	
				if (checkDisplay === "inline" && jQuery.css(elem, "float") === "none") {
	
					// inline-level elements accept inline-block;
					// block-level elements need to be inline with layout
					if (!support.inlineBlockNeedsLayout || defaultDisplay(elem.nodeName) === "inline") {
						style.display = "inline-block";
					} else {
						style.zoom = 1;
					}
				}
			}
	
			if (opts.overflow) {
				style.overflow = "hidden";
				if (!support.shrinkWrapBlocks()) {
					anim.always(function () {
						style.overflow = opts.overflow[0];
						style.overflowX = opts.overflow[1];
						style.overflowY = opts.overflow[2];
					});
				}
			}
	
			// show/hide pass
			for (prop in props) {
				value = props[prop];
				if (rfxtypes.exec(value)) {
					delete props[prop];
					toggle = toggle || value === "toggle";
					if (value === (hidden ? "hide" : "show")) {
	
						// If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
						if (value === "show" && dataShow && dataShow[prop] !== undefined) {
							hidden = true;
						} else {
							continue;
						}
					}
					orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
	
					// Any non-fx value stops us from restoring the original display value
				} else {
					display = undefined;
				}
			}
	
			if (!jQuery.isEmptyObject(orig)) {
				if (dataShow) {
					if ("hidden" in dataShow) {
						hidden = dataShow.hidden;
					}
				} else {
					dataShow = jQuery._data(elem, "fxshow", {});
				}
	
				// store state if its toggle - enables .stop().toggle() to "reverse"
				if (toggle) {
					dataShow.hidden = !hidden;
				}
				if (hidden) {
					jQuery(elem).show();
				} else {
					anim.done(function () {
						jQuery(elem).hide();
					});
				}
				anim.done(function () {
					var prop;
					jQuery._removeData(elem, "fxshow");
					for (prop in orig) {
						jQuery.style(elem, prop, orig[prop]);
					}
				});
				for (prop in orig) {
					tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
	
					if (!(prop in dataShow)) {
						dataShow[prop] = tween.start;
						if (hidden) {
							tween.end = tween.start;
							tween.start = prop === "width" || prop === "height" ? 1 : 0;
						}
					}
				}
	
				// If this is a noop like .hide().hide(), restore an overwritten display value
			} else if ((display === "none" ? defaultDisplay(elem.nodeName) : display) === "inline") {
				style.display = display;
			}
		}
	
		function propFilter(props, specialEasing) {
			var index, name, easing, value, hooks;
	
			// camelCase, specialEasing and expand cssHook pass
			for (index in props) {
				name = jQuery.camelCase(index);
				easing = specialEasing[name];
				value = props[index];
				if (jQuery.isArray(value)) {
					easing = value[1];
					value = props[index] = value[0];
				}
	
				if (index !== name) {
					props[name] = value;
					delete props[index];
				}
	
				hooks = jQuery.cssHooks[name];
				if (hooks && "expand" in hooks) {
					value = hooks.expand(value);
					delete props[name];
	
					// not quite $.extend, this wont overwrite keys already present.
					// also - reusing 'index' from above because we have the correct "name"
					for (index in value) {
						if (!(index in props)) {
							props[index] = value[index];
							specialEasing[index] = easing;
						}
					}
				} else {
					specialEasing[name] = easing;
				}
			}
		}
	
		function Animation(elem, properties, options) {
			var result,
			    stopped,
			    index = 0,
			    length = animationPrefilters.length,
			    deferred = jQuery.Deferred().always(function () {
				// don't match elem in the :animated selector
				delete tick.elem;
			}),
			    tick = function tick() {
				if (stopped) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
				    remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
	
				// archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
				temp = remaining / animation.duration || 0,
				    percent = 1 - temp,
				    index = 0,
				    length = animation.tweens.length;
	
				for (; index < length; index++) {
					animation.tweens[index].run(percent);
				}
	
				deferred.notifyWith(elem, [animation, percent, remaining]);
	
				if (percent < 1 && length) {
					return remaining;
				} else {
					deferred.resolveWith(elem, [animation]);
					return false;
				}
			},
			    animation = deferred.promise({
				elem: elem,
				props: jQuery.extend({}, properties),
				opts: jQuery.extend(true, { specialEasing: {} }, options),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function createTween(prop, end) {
					var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
					animation.tweens.push(tween);
					return tween;
				},
				stop: function stop(gotoEnd) {
					var index = 0,
	
					// if we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
					if (stopped) {
						return this;
					}
					stopped = true;
					for (; index < length; index++) {
						animation.tweens[index].run(1);
					}
	
					// resolve when we played the last frame
					// otherwise, reject
					if (gotoEnd) {
						deferred.resolveWith(elem, [animation, gotoEnd]);
					} else {
						deferred.rejectWith(elem, [animation, gotoEnd]);
					}
					return this;
				}
			}),
			    props = animation.props;
	
			propFilter(props, animation.opts.specialEasing);
	
			for (; index < length; index++) {
				result = animationPrefilters[index].call(animation, elem, props, animation.opts);
				if (result) {
					return result;
				}
			}
	
			jQuery.map(props, createTween, animation);
	
			if (jQuery.isFunction(animation.opts.start)) {
				animation.opts.start.call(elem, animation);
			}
	
			jQuery.fx.timer(jQuery.extend(tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			}));
	
			// attach callbacks from options
			return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
		}
	
		jQuery.Animation = jQuery.extend(Animation, {
			tweener: function tweener(props, callback) {
				if (jQuery.isFunction(props)) {
					callback = props;
					props = ["*"];
				} else {
					props = props.split(" ");
				}
	
				var prop,
				    index = 0,
				    length = props.length;
	
				for (; index < length; index++) {
					prop = props[index];
					tweeners[prop] = tweeners[prop] || [];
					tweeners[prop].unshift(callback);
				}
			},
	
			prefilter: function prefilter(callback, prepend) {
				if (prepend) {
					animationPrefilters.unshift(callback);
				} else {
					animationPrefilters.push(callback);
				}
			}
		});
	
		jQuery.speed = function (speed, easing, fn) {
			var opt = speed && (typeof speed === "undefined" ? "undefined" : _typeof(speed)) === "object" ? jQuery.extend({}, speed) : {
				complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
				duration: speed,
				easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
			};
	
			opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;
	
			// normalize opt.queue - true/undefined/null -> "fx"
			if (opt.queue == null || opt.queue === true) {
				opt.queue = "fx";
			}
	
			// Queueing
			opt.old = opt.complete;
	
			opt.complete = function () {
				if (jQuery.isFunction(opt.old)) {
					opt.old.call(this);
				}
	
				if (opt.queue) {
					jQuery.dequeue(this, opt.queue);
				}
			};
	
			return opt;
		};
	
		jQuery.fn.extend({
			fadeTo: function fadeTo(speed, to, easing, callback) {
	
				// show any hidden elements after setting opacity to 0
				return this.filter(isHidden).css("opacity", 0).show()
	
				// animate to the value specified
				.end().animate({ opacity: to }, speed, easing, callback);
			},
			animate: function animate(prop, speed, easing, callback) {
				var empty = jQuery.isEmptyObject(prop),
				    optall = jQuery.speed(speed, easing, callback),
				    doAnimation = function doAnimation() {
					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation(this, jQuery.extend({}, prop), optall);
	
					// Empty animations, or finishing resolves immediately
					if (empty || jQuery._data(this, "finish")) {
						anim.stop(true);
					}
				};
				doAnimation.finish = doAnimation;
	
				return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
			},
			stop: function stop(type, clearQueue, gotoEnd) {
				var stopQueue = function stopQueue(hooks) {
					var stop = hooks.stop;
					delete hooks.stop;
					stop(gotoEnd);
				};
	
				if (typeof type !== "string") {
					gotoEnd = clearQueue;
					clearQueue = type;
					type = undefined;
				}
				if (clearQueue && type !== false) {
					this.queue(type || "fx", []);
				}
	
				return this.each(function () {
					var dequeue = true,
					    index = type != null && type + "queueHooks",
					    timers = jQuery.timers,
					    data = jQuery._data(this);
	
					if (index) {
						if (data[index] && data[index].stop) {
							stopQueue(data[index]);
						}
					} else {
						for (index in data) {
							if (data[index] && data[index].stop && rrun.test(index)) {
								stopQueue(data[index]);
							}
						}
					}
	
					for (index = timers.length; index--;) {
						if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
							timers[index].anim.stop(gotoEnd);
							dequeue = false;
							timers.splice(index, 1);
						}
					}
	
					// start the next in the queue if the last step wasn't forced
					// timers currently will call their complete callbacks, which will dequeue
					// but only if they were gotoEnd
					if (dequeue || !gotoEnd) {
						jQuery.dequeue(this, type);
					}
				});
			},
			finish: function finish(type) {
				if (type !== false) {
					type = type || "fx";
				}
				return this.each(function () {
					var index,
					    data = jQuery._data(this),
					    queue = data[type + "queue"],
					    hooks = data[type + "queueHooks"],
					    timers = jQuery.timers,
					    length = queue ? queue.length : 0;
	
					// enable finishing flag on private data
					data.finish = true;
	
					// empty the queue first
					jQuery.queue(this, type, []);
	
					if (hooks && hooks.stop) {
						hooks.stop.call(this, true);
					}
	
					// look for any active animations, and finish them
					for (index = timers.length; index--;) {
						if (timers[index].elem === this && timers[index].queue === type) {
							timers[index].anim.stop(true);
							timers.splice(index, 1);
						}
					}
	
					// look for any animations in the old queue and finish them
					for (index = 0; index < length; index++) {
						if (queue[index] && queue[index].finish) {
							queue[index].finish.call(this);
						}
					}
	
					// turn off finishing flag
					delete data.finish;
				});
			}
		});
	
		jQuery.each(["toggle", "show", "hide"], function (i, name) {
			var cssFn = jQuery.fn[name];
			jQuery.fn[name] = function (speed, easing, callback) {
				return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
			};
		});
	
		// Generate shortcuts for custom animations
		jQuery.each({
			slideDown: genFx("show"),
			slideUp: genFx("hide"),
			slideToggle: genFx("toggle"),
			fadeIn: { opacity: "show" },
			fadeOut: { opacity: "hide" },
			fadeToggle: { opacity: "toggle" }
		}, function (name, props) {
			jQuery.fn[name] = function (speed, easing, callback) {
				return this.animate(props, speed, easing, callback);
			};
		});
	
		jQuery.timers = [];
		jQuery.fx.tick = function () {
			var timer,
			    timers = jQuery.timers,
			    i = 0;
	
			fxNow = jQuery.now();
	
			for (; i < timers.length; i++) {
				timer = timers[i];
				// Checks the timer has not already been removed
				if (!timer() && timers[i] === timer) {
					timers.splice(i--, 1);
				}
			}
	
			if (!timers.length) {
				jQuery.fx.stop();
			}
			fxNow = undefined;
		};
	
		jQuery.fx.timer = function (timer) {
			jQuery.timers.push(timer);
			if (timer()) {
				jQuery.fx.start();
			} else {
				jQuery.timers.pop();
			}
		};
	
		jQuery.fx.interval = 13;
	
		jQuery.fx.start = function () {
			if (!timerId) {
				timerId = setInterval(jQuery.fx.tick, jQuery.fx.interval);
			}
		};
	
		jQuery.fx.stop = function () {
			clearInterval(timerId);
			timerId = null;
		};
	
		jQuery.fx.speeds = {
			slow: 600,
			fast: 200,
			// Default speed
			_default: 400
		};
	
		// Based off of the plugin by Clint Helfers, with permission.
		// http://blindsignals.com/index.php/2009/07/jquery-delay/
		jQuery.fn.delay = function (time, type) {
			time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
			type = type || "fx";
	
			return this.queue(type, function (next, hooks) {
				var timeout = setTimeout(next, time);
				hooks.stop = function () {
					clearTimeout(timeout);
				};
			});
		};
	
		(function () {
			// Minified: var a,b,c,d,e
			var input, div, select, a, opt;
	
			// Setup
			div = document.createElement("div");
			div.setAttribute("className", "t");
			div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
			a = div.getElementsByTagName("a")[0];
	
			// First batch of tests.
			select = document.createElement("select");
			opt = select.appendChild(document.createElement("option"));
			input = div.getElementsByTagName("input")[0];
	
			a.style.cssText = "top:1px";
	
			// Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
			support.getSetAttribute = div.className !== "t";
	
			// Get the style information from getAttribute
			// (IE uses .cssText instead)
			support.style = /top/.test(a.getAttribute("style"));
	
			// Make sure that URLs aren't manipulated
			// (IE normalizes it by default)
			support.hrefNormalized = a.getAttribute("href") === "/a";
	
			// Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
			support.checkOn = !!input.value;
	
			// Make sure that a selected-by-default option has a working selected property.
			// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
			support.optSelected = opt.selected;
	
			// Tests for enctype support on a form (#6743)
			support.enctype = !!document.createElement("form").enctype;
	
			// Make sure that the options inside disabled selects aren't marked as disabled
			// (WebKit marks them as disabled)
			select.disabled = true;
			support.optDisabled = !opt.disabled;
	
			// Support: IE8 only
			// Check if we can trust getAttribute("value")
			input = document.createElement("input");
			input.setAttribute("value", "");
			support.input = input.getAttribute("value") === "";
	
			// Check if an input maintains its value after becoming a radio
			input.value = "t";
			input.setAttribute("type", "radio");
			support.radioValue = input.value === "t";
		})();
	
		var rreturn = /\r/g;
	
		jQuery.fn.extend({
			val: function val(value) {
				var hooks,
				    ret,
				    isFunction,
				    elem = this[0];
	
				if (!arguments.length) {
					if (elem) {
						hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
	
						if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
							return ret;
						}
	
						ret = elem.value;
	
						return typeof ret === "string" ?
						// handle most common string cases
						ret.replace(rreturn, "") :
						// handle cases where value is null/undef or number
						ret == null ? "" : ret;
					}
	
					return;
				}
	
				isFunction = jQuery.isFunction(value);
	
				return this.each(function (i) {
					var val;
	
					if (this.nodeType !== 1) {
						return;
					}
	
					if (isFunction) {
						val = value.call(this, i, jQuery(this).val());
					} else {
						val = value;
					}
	
					// Treat null/undefined as ""; convert numbers to string
					if (val == null) {
						val = "";
					} else if (typeof val === "number") {
						val += "";
					} else if (jQuery.isArray(val)) {
						val = jQuery.map(val, function (value) {
							return value == null ? "" : value + "";
						});
					}
	
					hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
	
					// If set returns undefined, fall back to normal setting
					if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
						this.value = val;
					}
				});
			}
		});
	
		jQuery.extend({
			valHooks: {
				option: {
					get: function get(elem) {
						var val = jQuery.find.attr(elem, "value");
						return val != null ? val :
						// Support: IE10-11+
						// option.text throws exceptions (#14686, #14858)
						jQuery.trim(jQuery.text(elem));
					}
				},
				select: {
					get: function get(elem) {
						var value,
						    option,
						    options = elem.options,
						    index = elem.selectedIndex,
						    one = elem.type === "select-one" || index < 0,
						    values = one ? null : [],
						    max = one ? index + 1 : options.length,
						    i = index < 0 ? max : one ? index : 0;
	
						// Loop through all the selected options
						for (; i < max; i++) {
							option = options[i];
	
							// oldIE doesn't update selected after form reset (#2551)
							if ((option.selected || i === index) && (
							// Don't return options that are disabled or in a disabled optgroup
							support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {
	
								// Get the specific value for the option
								value = jQuery(option).val();
	
								// We don't need an array for one selects
								if (one) {
									return value;
								}
	
								// Multi-Selects return an array
								values.push(value);
							}
						}
	
						return values;
					},
	
					set: function set(elem, value) {
						var optionSet,
						    option,
						    options = elem.options,
						    values = jQuery.makeArray(value),
						    i = options.length;
	
						while (i--) {
							option = options[i];
	
							if (jQuery.inArray(jQuery.valHooks.option.get(option), values) >= 0) {
	
								// Support: IE6
								// When new option element is added to select box we need to
								// force reflow of newly added node in order to workaround delay
								// of initialization properties
								try {
									option.selected = optionSet = true;
								} catch (_) {
	
									// Will be executed only in IE6
									option.scrollHeight;
								}
							} else {
								option.selected = false;
							}
						}
	
						// Force browsers to behave consistently when non-matching value is set
						if (!optionSet) {
							elem.selectedIndex = -1;
						}
	
						return options;
					}
				}
			}
		});
	
		// Radios and checkboxes getter/setter
		jQuery.each(["radio", "checkbox"], function () {
			jQuery.valHooks[this] = {
				set: function set(elem, value) {
					if (jQuery.isArray(value)) {
						return elem.checked = jQuery.inArray(jQuery(elem).val(), value) >= 0;
					}
				}
			};
			if (!support.checkOn) {
				jQuery.valHooks[this].get = function (elem) {
					// Support: Webkit
					// "" is returned instead of "on" if a value isn't specified
					return elem.getAttribute("value") === null ? "on" : elem.value;
				};
			}
		});
	
		var nodeHook,
		    boolHook,
		    attrHandle = jQuery.expr.attrHandle,
		    ruseDefault = /^(?:checked|selected)$/i,
		    getSetAttribute = support.getSetAttribute,
		    getSetInput = support.input;
	
		jQuery.fn.extend({
			attr: function attr(name, value) {
				return access(this, jQuery.attr, name, value, arguments.length > 1);
			},
	
			removeAttr: function removeAttr(name) {
				return this.each(function () {
					jQuery.removeAttr(this, name);
				});
			}
		});
	
		jQuery.extend({
			attr: function attr(elem, name, value) {
				var hooks,
				    ret,
				    nType = elem.nodeType;
	
				// don't get/set attributes on text, comment and attribute nodes
				if (!elem || nType === 3 || nType === 8 || nType === 2) {
					return;
				}
	
				// Fallback to prop when attributes are not supported
				if (_typeof(elem.getAttribute) === strundefined) {
					return jQuery.prop(elem, name, value);
				}
	
				// All attributes are lowercase
				// Grab necessary hook if one is defined
				if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
					name = name.toLowerCase();
					hooks = jQuery.attrHooks[name] || (jQuery.expr.match.bool.test(name) ? boolHook : nodeHook);
				}
	
				if (value !== undefined) {
	
					if (value === null) {
						jQuery.removeAttr(elem, name);
					} else if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
						return ret;
					} else {
						elem.setAttribute(name, value + "");
						return value;
					}
				} else if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
					return ret;
				} else {
					ret = jQuery.find.attr(elem, name);
	
					// Non-existent attributes return null, we normalize to undefined
					return ret == null ? undefined : ret;
				}
			},
	
			removeAttr: function removeAttr(elem, value) {
				var name,
				    propName,
				    i = 0,
				    attrNames = value && value.match(rnotwhite);
	
				if (attrNames && elem.nodeType === 1) {
					while (name = attrNames[i++]) {
						propName = jQuery.propFix[name] || name;
	
						// Boolean attributes get special treatment (#10870)
						if (jQuery.expr.match.bool.test(name)) {
							// Set corresponding property to false
							if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
								elem[propName] = false;
								// Support: IE<9
								// Also clear defaultChecked/defaultSelected (if appropriate)
							} else {
								elem[jQuery.camelCase("default-" + name)] = elem[propName] = false;
							}
	
							// See #9699 for explanation of this approach (setting first, then removal)
						} else {
							jQuery.attr(elem, name, "");
						}
	
						elem.removeAttribute(getSetAttribute ? name : propName);
					}
				}
			},
	
			attrHooks: {
				type: {
					set: function set(elem, value) {
						if (!support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
							// Setting the type on a radio button after the value resets the value in IE6-9
							// Reset value to default in case type is set after value during creation
							var val = elem.value;
							elem.setAttribute("type", value);
							if (val) {
								elem.value = val;
							}
							return value;
						}
					}
				}
			}
		});
	
		// Hook for boolean attributes
		boolHook = {
			set: function set(elem, value, name) {
				if (value === false) {
					// Remove boolean attributes when set to false
					jQuery.removeAttr(elem, name);
				} else if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
					// IE<8 needs the *property* name
					elem.setAttribute(!getSetAttribute && jQuery.propFix[name] || name, name);
	
					// Use defaultChecked and defaultSelected for oldIE
				} else {
					elem[jQuery.camelCase("default-" + name)] = elem[name] = true;
				}
	
				return name;
			}
		};
	
		// Retrieve booleans specially
		jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (i, name) {
	
			var getter = attrHandle[name] || jQuery.find.attr;
	
			attrHandle[name] = getSetInput && getSetAttribute || !ruseDefault.test(name) ? function (elem, name, isXML) {
				var ret, handle;
				if (!isXML) {
					// Avoid an infinite loop by temporarily removing this function from the getter
					handle = attrHandle[name];
					attrHandle[name] = ret;
					ret = getter(elem, name, isXML) != null ? name.toLowerCase() : null;
					attrHandle[name] = handle;
				}
				return ret;
			} : function (elem, name, isXML) {
				if (!isXML) {
					return elem[jQuery.camelCase("default-" + name)] ? name.toLowerCase() : null;
				}
			};
		});
	
		// fix oldIE attroperties
		if (!getSetInput || !getSetAttribute) {
			jQuery.attrHooks.value = {
				set: function set(elem, value, name) {
					if (jQuery.nodeName(elem, "input")) {
						// Does not return so that setAttribute is also used
						elem.defaultValue = value;
					} else {
						// Use nodeHook if defined (#1954); otherwise setAttribute is fine
						return nodeHook && nodeHook.set(elem, value, name);
					}
				}
			};
		}
	
		// IE6/7 do not support getting/setting some attributes with get/setAttribute
		if (!getSetAttribute) {
	
			// Use this for any attribute in IE6/7
			// This fixes almost every IE6/7 issue
			nodeHook = {
				set: function set(elem, value, name) {
					// Set the existing or create a new attribute node
					var ret = elem.getAttributeNode(name);
					if (!ret) {
						elem.setAttributeNode(ret = elem.ownerDocument.createAttribute(name));
					}
	
					ret.value = value += "";
	
					// Break association with cloned elements by also using setAttribute (#9646)
					if (name === "value" || value === elem.getAttribute(name)) {
						return value;
					}
				}
			};
	
			// Some attributes are constructed with empty-string values when not defined
			attrHandle.id = attrHandle.name = attrHandle.coords = function (elem, name, isXML) {
				var ret;
				if (!isXML) {
					return (ret = elem.getAttributeNode(name)) && ret.value !== "" ? ret.value : null;
				}
			};
	
			// Fixing value retrieval on a button requires this module
			jQuery.valHooks.button = {
				get: function get(elem, name) {
					var ret = elem.getAttributeNode(name);
					if (ret && ret.specified) {
						return ret.value;
					}
				},
				set: nodeHook.set
			};
	
			// Set contenteditable to false on removals(#10429)
			// Setting to empty string throws an error as an invalid value
			jQuery.attrHooks.contenteditable = {
				set: function set(elem, value, name) {
					nodeHook.set(elem, value === "" ? false : value, name);
				}
			};
	
			// Set width and height to auto instead of 0 on empty string( Bug #8150 )
			// This is for removals
			jQuery.each(["width", "height"], function (i, name) {
				jQuery.attrHooks[name] = {
					set: function set(elem, value) {
						if (value === "") {
							elem.setAttribute(name, "auto");
							return value;
						}
					}
				};
			});
		}
	
		if (!support.style) {
			jQuery.attrHooks.style = {
				get: function get(elem) {
					// Return undefined in the case of empty string
					// Note: IE uppercases css property names, but if we were to .toLowerCase()
					// .cssText, that would destroy case senstitivity in URL's, like in "background"
					return elem.style.cssText || undefined;
				},
				set: function set(elem, value) {
					return elem.style.cssText = value + "";
				}
			};
		}
	
		var rfocusable = /^(?:input|select|textarea|button|object)$/i,
		    rclickable = /^(?:a|area)$/i;
	
		jQuery.fn.extend({
			prop: function prop(name, value) {
				return access(this, jQuery.prop, name, value, arguments.length > 1);
			},
	
			removeProp: function removeProp(name) {
				name = jQuery.propFix[name] || name;
				return this.each(function () {
					// try/catch handles cases where IE balks (such as removing a property on window)
					try {
						this[name] = undefined;
						delete this[name];
					} catch (e) {}
				});
			}
		});
	
		jQuery.extend({
			propFix: {
				"for": "htmlFor",
				"class": "className"
			},
	
			prop: function prop(elem, name, value) {
				var ret,
				    hooks,
				    notxml,
				    nType = elem.nodeType;
	
				// don't get/set properties on text, comment and attribute nodes
				if (!elem || nType === 3 || nType === 8 || nType === 2) {
					return;
				}
	
				notxml = nType !== 1 || !jQuery.isXMLDoc(elem);
	
				if (notxml) {
					// Fix name and attach hooks
					name = jQuery.propFix[name] || name;
					hooks = jQuery.propHooks[name];
				}
	
				if (value !== undefined) {
					return hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined ? ret : elem[name] = value;
				} else {
					return hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null ? ret : elem[name];
				}
			},
	
			propHooks: {
				tabIndex: {
					get: function get(elem) {
						// elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
						// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
						// Use proper attribute retrieval(#12072)
						var tabindex = jQuery.find.attr(elem, "tabindex");
	
						return tabindex ? parseInt(tabindex, 10) : rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ? 0 : -1;
					}
				}
			}
		});
	
		// Some attributes require a special call on IE
		// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
		if (!support.hrefNormalized) {
			// href/src property should get the full normalized URL (#10299/#12915)
			jQuery.each(["href", "src"], function (i, name) {
				jQuery.propHooks[name] = {
					get: function get(elem) {
						return elem.getAttribute(name, 4);
					}
				};
			});
		}
	
		// Support: Safari, IE9+
		// mis-reports the default selected property of an option
		// Accessing the parent's selectedIndex property fixes it
		if (!support.optSelected) {
			jQuery.propHooks.selected = {
				get: function get(elem) {
					var parent = elem.parentNode;
	
					if (parent) {
						parent.selectedIndex;
	
						// Make sure that it also works with optgroups, see #5701
						if (parent.parentNode) {
							parent.parentNode.selectedIndex;
						}
					}
					return null;
				}
			};
		}
	
		jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
			jQuery.propFix[this.toLowerCase()] = this;
		});
	
		// IE6/7 call enctype encoding
		if (!support.enctype) {
			jQuery.propFix.enctype = "encoding";
		}
	
		var rclass = /[\t\r\n\f]/g;
	
		jQuery.fn.extend({
			addClass: function addClass(value) {
				var classes,
				    elem,
				    cur,
				    clazz,
				    j,
				    finalValue,
				    i = 0,
				    len = this.length,
				    proceed = typeof value === "string" && value;
	
				if (jQuery.isFunction(value)) {
					return this.each(function (j) {
						jQuery(this).addClass(value.call(this, j, this.className));
					});
				}
	
				if (proceed) {
					// The disjunction here is for better compressibility (see removeClass)
					classes = (value || "").match(rnotwhite) || [];
	
					for (; i < len; i++) {
						elem = this[i];
						cur = elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : " ");
	
						if (cur) {
							j = 0;
							while (clazz = classes[j++]) {
								if (cur.indexOf(" " + clazz + " ") < 0) {
									cur += clazz + " ";
								}
							}
	
							// only assign if different to avoid unneeded rendering.
							finalValue = jQuery.trim(cur);
							if (elem.className !== finalValue) {
								elem.className = finalValue;
							}
						}
					}
				}
	
				return this;
			},
	
			removeClass: function removeClass(value) {
				var classes,
				    elem,
				    cur,
				    clazz,
				    j,
				    finalValue,
				    i = 0,
				    len = this.length,
				    proceed = arguments.length === 0 || typeof value === "string" && value;
	
				if (jQuery.isFunction(value)) {
					return this.each(function (j) {
						jQuery(this).removeClass(value.call(this, j, this.className));
					});
				}
				if (proceed) {
					classes = (value || "").match(rnotwhite) || [];
	
					for (; i < len; i++) {
						elem = this[i];
						// This expression is here for better compressibility (see addClass)
						cur = elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : "");
	
						if (cur) {
							j = 0;
							while (clazz = classes[j++]) {
								// Remove *all* instances
								while (cur.indexOf(" " + clazz + " ") >= 0) {
									cur = cur.replace(" " + clazz + " ", " ");
								}
							}
	
							// only assign if different to avoid unneeded rendering.
							finalValue = value ? jQuery.trim(cur) : "";
							if (elem.className !== finalValue) {
								elem.className = finalValue;
							}
						}
					}
				}
	
				return this;
			},
	
			toggleClass: function toggleClass(value, stateVal) {
				var type = typeof value === "undefined" ? "undefined" : _typeof(value);
	
				if (typeof stateVal === "boolean" && type === "string") {
					return stateVal ? this.addClass(value) : this.removeClass(value);
				}
	
				if (jQuery.isFunction(value)) {
					return this.each(function (i) {
						jQuery(this).toggleClass(value.call(this, i, this.className, stateVal), stateVal);
					});
				}
	
				return this.each(function () {
					if (type === "string") {
						// toggle individual class names
						var className,
						    i = 0,
						    self = jQuery(this),
						    classNames = value.match(rnotwhite) || [];
	
						while (className = classNames[i++]) {
							// check each className given, space separated list
							if (self.hasClass(className)) {
								self.removeClass(className);
							} else {
								self.addClass(className);
							}
						}
	
						// Toggle whole class name
					} else if (type === strundefined || type === "boolean") {
						if (this.className) {
							// store className if set
							jQuery._data(this, "__className__", this.className);
						}
	
						// If the element has a class name or if we're passed "false",
						// then remove the whole classname (if there was one, the above saved it).
						// Otherwise bring back whatever was previously saved (if anything),
						// falling back to the empty string if nothing was stored.
						this.className = this.className || value === false ? "" : jQuery._data(this, "__className__") || "";
					}
				});
			},
	
			hasClass: function hasClass(selector) {
				var className = " " + selector + " ",
				    i = 0,
				    l = this.length;
				for (; i < l; i++) {
					if (this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf(className) >= 0) {
						return true;
					}
				}
	
				return false;
			}
		});
	
		// Return jQuery for attributes-only inclusion
	
	
		jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function (i, name) {
	
			// Handle event binding
			jQuery.fn[name] = function (data, fn) {
				return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
			};
		});
	
		jQuery.fn.extend({
			hover: function hover(fnOver, fnOut) {
				return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
			},
	
			bind: function bind(types, data, fn) {
				return this.on(types, null, data, fn);
			},
			unbind: function unbind(types, fn) {
				return this.off(types, null, fn);
			},
	
			delegate: function delegate(selector, types, data, fn) {
				return this.on(types, selector, data, fn);
			},
			undelegate: function undelegate(selector, types, fn) {
				// ( namespace ) or ( selector, types [, fn] )
				return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
			}
		});
	
		var nonce = jQuery.now();
	
		var rquery = /\?/;
	
		var rvalidtokens = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
	
		jQuery.parseJSON = function (data) {
			// Attempt to parse using the native JSON parser first
			if (window.JSON && window.JSON.parse) {
				// Support: Android 2.3
				// Workaround failure to string-cast null input
				return window.JSON.parse(data + "");
			}
	
			var requireNonComma,
			    depth = null,
			    str = jQuery.trim(data + "");
	
			// Guard against invalid (and possibly dangerous) input by ensuring that nothing remains
			// after removing valid tokens
			return str && !jQuery.trim(str.replace(rvalidtokens, function (token, comma, open, close) {
	
				// Force termination if we see a misplaced comma
				if (requireNonComma && comma) {
					depth = 0;
				}
	
				// Perform no more replacements after returning to outermost depth
				if (depth === 0) {
					return token;
				}
	
				// Commas must not follow "[", "{", or ","
				requireNonComma = open || comma;
	
				// Determine new depth
				// array/object open ("[" or "{"): depth += true - false (increment)
				// array/object close ("]" or "}"): depth += false - true (decrement)
				// other cases ("," or primitive): depth += true - true (numeric cast)
				depth += !close - !open;
	
				// Remove this token
				return "";
			})) ? Function("return " + str)() : jQuery.error("Invalid JSON: " + data);
		};
	
		// Cross-browser xml parsing
		jQuery.parseXML = function (data) {
			var xml, tmp;
			if (!data || typeof data !== "string") {
				return null;
			}
			try {
				if (window.DOMParser) {
					// Standard
					tmp = new DOMParser();
					xml = tmp.parseFromString(data, "text/xml");
				} else {
					// IE
					xml = new ActiveXObject("Microsoft.XMLDOM");
					xml.async = "false";
					xml.loadXML(data);
				}
			} catch (e) {
				xml = undefined;
			}
			if (!xml || !xml.documentElement || xml.getElementsByTagName("parsererror").length) {
				jQuery.error("Invalid XML: " + data);
			}
			return xml;
		};
	
		var
		// Document location
		ajaxLocParts,
		    ajaxLocation,
		    rhash = /#.*$/,
		    rts = /([?&])_=[^&]*/,
		    rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
		    // IE leaves an \r character at EOL
		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		    rnoContent = /^(?:GET|HEAD)$/,
		    rprotocol = /^\/\//,
		    rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
	
	
		/* Prefilters
	  * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	  * 2) These are called:
	  *    - BEFORE asking for a transport
	  *    - AFTER param serialization (s.data is a string if s.processData is true)
	  * 3) key is the dataType
	  * 4) the catchall symbol "*" can be used
	  * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	  */
		prefilters = {},
	
	
		/* Transports bindings
	  * 1) key is the dataType
	  * 2) the catchall symbol "*" can be used
	  * 3) selection will start with transport dataType and THEN go to "*" if needed
	  */
		transports = {},
	
	
		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat("*");
	
		// #8138, IE may throw an exception when accessing
		// a field from window.location if document.domain has been set
		try {
			ajaxLocation = location.href;
		} catch (e) {
			// Use the href attribute of an A element
			// since IE will modify it given document.location
			ajaxLocation = document.createElement("a");
			ajaxLocation.href = "";
			ajaxLocation = ajaxLocation.href;
		}
	
		// Segment location into parts
		ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];
	
		// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
		function addToPrefiltersOrTransports(structure) {
	
			// dataTypeExpression is optional and defaults to "*"
			return function (dataTypeExpression, func) {
	
				if (typeof dataTypeExpression !== "string") {
					func = dataTypeExpression;
					dataTypeExpression = "*";
				}
	
				var dataType,
				    i = 0,
				    dataTypes = dataTypeExpression.toLowerCase().match(rnotwhite) || [];
	
				if (jQuery.isFunction(func)) {
					// For each dataType in the dataTypeExpression
					while (dataType = dataTypes[i++]) {
						// Prepend if requested
						if (dataType.charAt(0) === "+") {
							dataType = dataType.slice(1) || "*";
							(structure[dataType] = structure[dataType] || []).unshift(func);
	
							// Otherwise append
						} else {
							(structure[dataType] = structure[dataType] || []).push(func);
						}
					}
				}
			};
		}
	
		// Base inspection function for prefilters and transports
		function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
	
			var inspected = {},
			    seekingTransport = structure === transports;
	
			function inspect(dataType) {
				var selected;
				inspected[dataType] = true;
				jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
					var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
					if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
						options.dataTypes.unshift(dataTypeOrTransport);
						inspect(dataTypeOrTransport);
						return false;
					} else if (seekingTransport) {
						return !(selected = dataTypeOrTransport);
					}
				});
				return selected;
			}
	
			return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
		}
	
		// A special extend for ajax options
		// that takes "flat" options (not to be deep extended)
		// Fixes #9887
		function ajaxExtend(target, src) {
			var deep,
			    key,
			    flatOptions = jQuery.ajaxSettings.flatOptions || {};
	
			for (key in src) {
				if (src[key] !== undefined) {
					(flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
				}
			}
			if (deep) {
				jQuery.extend(true, target, deep);
			}
	
			return target;
		}
	
		/* Handles responses to an ajax request:
	  * - finds the right dataType (mediates between content-type and expected dataType)
	  * - returns the corresponding response
	  */
		function ajaxHandleResponses(s, jqXHR, responses) {
			var firstDataType,
			    ct,
			    finalDataType,
			    type,
			    contents = s.contents,
			    dataTypes = s.dataTypes;
	
			// Remove auto dataType and get content-type in the process
			while (dataTypes[0] === "*") {
				dataTypes.shift();
				if (ct === undefined) {
					ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
				}
			}
	
			// Check if we're dealing with a known content-type
			if (ct) {
				for (type in contents) {
					if (contents[type] && contents[type].test(ct)) {
						dataTypes.unshift(type);
						break;
					}
				}
			}
	
			// Check to see if we have a response for the expected dataType
			if (dataTypes[0] in responses) {
				finalDataType = dataTypes[0];
			} else {
				// Try convertible dataTypes
				for (type in responses) {
					if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
						finalDataType = type;
						break;
					}
					if (!firstDataType) {
						firstDataType = type;
					}
				}
				// Or just use first one
				finalDataType = finalDataType || firstDataType;
			}
	
			// If we found a dataType
			// We add the dataType to the list if needed
			// and return the corresponding response
			if (finalDataType) {
				if (finalDataType !== dataTypes[0]) {
					dataTypes.unshift(finalDataType);
				}
				return responses[finalDataType];
			}
		}
	
		/* Chain conversions given the request and the original response
	  * Also sets the responseXXX fields on the jqXHR instance
	  */
		function ajaxConvert(s, response, jqXHR, isSuccess) {
			var conv2,
			    current,
			    conv,
			    tmp,
			    prev,
			    converters = {},
	
			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();
	
			// Create converters map with lowercased keys
			if (dataTypes[1]) {
				for (conv in s.converters) {
					converters[conv.toLowerCase()] = s.converters[conv];
				}
			}
	
			current = dataTypes.shift();
	
			// Convert to each sequential dataType
			while (current) {
	
				if (s.responseFields[current]) {
					jqXHR[s.responseFields[current]] = response;
				}
	
				// Apply the dataFilter if provided
				if (!prev && isSuccess && s.dataFilter) {
					response = s.dataFilter(response, s.dataType);
				}
	
				prev = current;
				current = dataTypes.shift();
	
				if (current) {
	
					// There's only work to do if current dataType is non-auto
					if (current === "*") {
	
						current = prev;
	
						// Convert response if prev dataType is non-auto and differs from current
					} else if (prev !== "*" && prev !== current) {
	
						// Seek a direct converter
						conv = converters[prev + " " + current] || converters["* " + current];
	
						// If none found, seek a pair
						if (!conv) {
							for (conv2 in converters) {
	
								// If conv2 outputs current
								tmp = conv2.split(" ");
								if (tmp[1] === current) {
	
									// If prev can be converted to accepted input
									conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
									if (conv) {
										// Condense equivalence converters
										if (conv === true) {
											conv = converters[conv2];
	
											// Otherwise, insert the intermediate dataType
										} else if (converters[conv2] !== true) {
											current = tmp[0];
											dataTypes.unshift(tmp[1]);
										}
										break;
									}
								}
							}
						}
	
						// Apply converter (if not an equivalence)
						if (conv !== true) {
	
							// Unless errors are allowed to bubble, catch and return them
							if (conv && s["throws"]) {
								response = conv(response);
							} else {
								try {
									response = conv(response);
								} catch (e) {
									return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
								}
							}
						}
					}
				}
			}
	
			return { state: "success", data: response };
		}
	
		jQuery.extend({
	
			// Counter for holding the number of active queries
			active: 0,
	
			// Last-Modified header cache for next request
			lastModified: {},
			etag: {},
	
			ajaxSettings: {
				url: ajaxLocation,
				type: "GET",
				isLocal: rlocalProtocol.test(ajaxLocParts[1]),
				global: true,
				processData: true,
				async: true,
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
				/*
	   timeout: 0,
	   data: null,
	   dataType: null,
	   username: null,
	   password: null,
	   cache: null,
	   throws: false,
	   traditional: false,
	   headers: {},
	   */
	
				accepts: {
					"*": allTypes,
					text: "text/plain",
					html: "text/html",
					xml: "application/xml, text/xml",
					json: "application/json, text/javascript"
				},
	
				contents: {
					xml: /xml/,
					html: /html/,
					json: /json/
				},
	
				responseFields: {
					xml: "responseXML",
					text: "responseText",
					json: "responseJSON"
				},
	
				// Data converters
				// Keys separate source (or catchall "*") and destination types with a single space
				converters: {
	
					// Convert anything to text
					"* text": String,
	
					// Text to html (true = no transformation)
					"text html": true,
	
					// Evaluate text as a json expression
					"text json": jQuery.parseJSON,
	
					// Parse text as xml
					"text xml": jQuery.parseXML
				},
	
				// For options that shouldn't be deep extended:
				// you can add your own custom options here if
				// and when you create one that shouldn't be
				// deep extended (see ajaxExtend)
				flatOptions: {
					url: true,
					context: true
				}
			},
	
			// Creates a full fledged settings object into target
			// with both ajaxSettings and settings fields.
			// If target is omitted, writes into ajaxSettings.
			ajaxSetup: function ajaxSetup(target, settings) {
				return settings ?
	
				// Building a settings object
				ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) :
	
				// Extending ajaxSettings
				ajaxExtend(jQuery.ajaxSettings, target);
			},
	
			ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
			ajaxTransport: addToPrefiltersOrTransports(transports),
	
			// Main method
			ajax: function ajax(url, options) {
	
				// If url is an object, simulate pre-1.5 signature
				if ((typeof url === "undefined" ? "undefined" : _typeof(url)) === "object") {
					options = url;
					url = undefined;
				}
	
				// Force options to be an object
				options = options || {};
	
				var // Cross-domain detection vars
				parts,
	
				// Loop variable
				i,
	
				// URL without anti-cache param
				cacheURL,
	
				// Response headers as string
				responseHeadersString,
	
				// timeout handle
				timeoutTimer,
	
	
				// To know if global events are to be dispatched
				fireGlobals,
				    transport,
	
				// Response headers
				responseHeaders,
	
				// Create the final options object
				s = jQuery.ajaxSetup({}, options),
	
				// Callbacks context
				callbackContext = s.context || s,
	
				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,
	
				// Deferreds
				deferred = jQuery.Deferred(),
				    completeDeferred = jQuery.Callbacks("once memory"),
	
				// Status-dependent callbacks
				_statusCode = s.statusCode || {},
	
				// Headers (they are sent all at once)
				requestHeaders = {},
				    requestHeadersNames = {},
	
				// The jqXHR state
				state = 0,
	
				// Default abort message
				strAbort = "canceled",
	
				// Fake xhr
				jqXHR = {
					readyState: 0,
	
					// Builds headers hashtable if needed
					getResponseHeader: function getResponseHeader(key) {
						var match;
						if (state === 2) {
							if (!responseHeaders) {
								responseHeaders = {};
								while (match = rheaders.exec(responseHeadersString)) {
									responseHeaders[match[1].toLowerCase()] = match[2];
								}
							}
							match = responseHeaders[key.toLowerCase()];
						}
						return match == null ? null : match;
					},
	
					// Raw string
					getAllResponseHeaders: function getAllResponseHeaders() {
						return state === 2 ? responseHeadersString : null;
					},
	
					// Caches the header
					setRequestHeader: function setRequestHeader(name, value) {
						var lname = name.toLowerCase();
						if (!state) {
							name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
							requestHeaders[name] = value;
						}
						return this;
					},
	
					// Overrides response content-type header
					overrideMimeType: function overrideMimeType(type) {
						if (!state) {
							s.mimeType = type;
						}
						return this;
					},
	
					// Status-dependent callbacks
					statusCode: function statusCode(map) {
						var code;
						if (map) {
							if (state < 2) {
								for (code in map) {
									// Lazy-add the new callback in a way that preserves old ones
									_statusCode[code] = [_statusCode[code], map[code]];
								}
							} else {
								// Execute the appropriate callbacks
								jqXHR.always(map[jqXHR.status]);
							}
						}
						return this;
					},
	
					// Cancel the request
					abort: function abort(statusText) {
						var finalText = statusText || strAbort;
						if (transport) {
							transport.abort(finalText);
						}
						done(0, finalText);
						return this;
					}
				};
	
				// Attach deferreds
				deferred.promise(jqXHR).complete = completeDeferred.add;
				jqXHR.success = jqXHR.done;
				jqXHR.error = jqXHR.fail;
	
				// Remove hash character (#7531: and string promotion)
				// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
				// Handle falsy url in the settings object (#10093: consistency with old signature)
				// We also use the url parameter if available
				s.url = ((url || s.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//");
	
				// Alias method option to type as per ticket #12004
				s.type = options.method || options.type || s.method || s.type;
	
				// Extract dataTypes list
				s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(rnotwhite) || [""];
	
				// A cross-domain request is in order when we have a protocol:host:port mismatch
				if (s.crossDomain == null) {
					parts = rurl.exec(s.url.toLowerCase());
					s.crossDomain = !!(parts && (parts[1] !== ajaxLocParts[1] || parts[2] !== ajaxLocParts[2] || (parts[3] || (parts[1] === "http:" ? "80" : "443")) !== (ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? "80" : "443"))));
				}
	
				// Convert data if not already a string
				if (s.data && s.processData && typeof s.data !== "string") {
					s.data = jQuery.param(s.data, s.traditional);
				}
	
				// Apply prefilters
				inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
	
				// If request was aborted inside a prefilter, stop there
				if (state === 2) {
					return jqXHR;
				}
	
				// We can fire global events as of now if asked to
				// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
				fireGlobals = jQuery.event && s.global;
	
				// Watch for a new set of requests
				if (fireGlobals && jQuery.active++ === 0) {
					jQuery.event.trigger("ajaxStart");
				}
	
				// Uppercase the type
				s.type = s.type.toUpperCase();
	
				// Determine if request has content
				s.hasContent = !rnoContent.test(s.type);
	
				// Save the URL in case we're toying with the If-Modified-Since
				// and/or If-None-Match header later on
				cacheURL = s.url;
	
				// More options handling for requests with no content
				if (!s.hasContent) {
	
					// If data is available, append data to url
					if (s.data) {
						cacheURL = s.url += (rquery.test(cacheURL) ? "&" : "?") + s.data;
						// #9682: remove data so that it's not used in an eventual retry
						delete s.data;
					}
	
					// Add anti-cache in url if needed
					if (s.cache === false) {
						s.url = rts.test(cacheURL) ?
	
						// If there is already a '_' parameter, set its value
						cacheURL.replace(rts, "$1_=" + nonce++) :
	
						// Otherwise add one to the end
						cacheURL + (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++;
					}
				}
	
				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if (s.ifModified) {
					if (jQuery.lastModified[cacheURL]) {
						jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
					}
					if (jQuery.etag[cacheURL]) {
						jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
					}
				}
	
				// Set the correct header, if data is being sent
				if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
					jqXHR.setRequestHeader("Content-Type", s.contentType);
				}
	
				// Set the Accepts header for the server, depending on the dataType
				jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
	
				// Check for headers option
				for (i in s.headers) {
					jqXHR.setRequestHeader(i, s.headers[i]);
				}
	
				// Allow custom headers/mimetypes and early abort
				if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)) {
					// Abort if not done already and return
					return jqXHR.abort();
				}
	
				// aborting is no longer a cancellation
				strAbort = "abort";
	
				// Install callbacks on deferreds
				for (i in { success: 1, error: 1, complete: 1 }) {
					jqXHR[i](s[i]);
				}
	
				// Get transport
				transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
	
				// If no transport, we auto-abort
				if (!transport) {
					done(-1, "No Transport");
				} else {
					jqXHR.readyState = 1;
	
					// Send global event
					if (fireGlobals) {
						globalEventContext.trigger("ajaxSend", [jqXHR, s]);
					}
					// Timeout
					if (s.async && s.timeout > 0) {
						timeoutTimer = setTimeout(function () {
							jqXHR.abort("timeout");
						}, s.timeout);
					}
	
					try {
						state = 1;
						transport.send(requestHeaders, done);
					} catch (e) {
						// Propagate exception as error if not done
						if (state < 2) {
							done(-1, e);
							// Simply rethrow otherwise
						} else {
							throw e;
						}
					}
				}
	
				// Callback for when everything is done
				function done(status, nativeStatusText, responses, headers) {
					var isSuccess,
					    success,
					    error,
					    response,
					    modified,
					    statusText = nativeStatusText;
	
					// Called once
					if (state === 2) {
						return;
					}
	
					// State is "done" now
					state = 2;
	
					// Clear timeout if it exists
					if (timeoutTimer) {
						clearTimeout(timeoutTimer);
					}
	
					// Dereference transport for early garbage collection
					// (no matter how long the jqXHR object will be used)
					transport = undefined;
	
					// Cache response headers
					responseHeadersString = headers || "";
	
					// Set readyState
					jqXHR.readyState = status > 0 ? 4 : 0;
	
					// Determine if successful
					isSuccess = status >= 200 && status < 300 || status === 304;
	
					// Get response data
					if (responses) {
						response = ajaxHandleResponses(s, jqXHR, responses);
					}
	
					// Convert no matter what (that way responseXXX fields are always set)
					response = ajaxConvert(s, response, jqXHR, isSuccess);
	
					// If successful, handle type chaining
					if (isSuccess) {
	
						// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
						if (s.ifModified) {
							modified = jqXHR.getResponseHeader("Last-Modified");
							if (modified) {
								jQuery.lastModified[cacheURL] = modified;
							}
							modified = jqXHR.getResponseHeader("etag");
							if (modified) {
								jQuery.etag[cacheURL] = modified;
							}
						}
	
						// if no content
						if (status === 204 || s.type === "HEAD") {
							statusText = "nocontent";
	
							// if not modified
						} else if (status === 304) {
							statusText = "notmodified";
	
							// If we have data, let's convert it
						} else {
							statusText = response.state;
							success = response.data;
							error = response.error;
							isSuccess = !error;
						}
					} else {
						// We extract error from statusText
						// then normalize statusText and status for non-aborts
						error = statusText;
						if (status || !statusText) {
							statusText = "error";
							if (status < 0) {
								status = 0;
							}
						}
					}
	
					// Set data for the fake xhr object
					jqXHR.status = status;
					jqXHR.statusText = (nativeStatusText || statusText) + "";
	
					// Success/Error
					if (isSuccess) {
						deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
					} else {
						deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
					}
	
					// Status-dependent callbacks
					jqXHR.statusCode(_statusCode);
					_statusCode = undefined;
	
					if (fireGlobals) {
						globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
					}
	
					// Complete
					completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
	
					if (fireGlobals) {
						globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
						// Handle the global AJAX counter
						if (! --jQuery.active) {
							jQuery.event.trigger("ajaxStop");
						}
					}
				}
	
				return jqXHR;
			},
	
			getJSON: function getJSON(url, data, callback) {
				return jQuery.get(url, data, callback, "json");
			},
	
			getScript: function getScript(url, callback) {
				return jQuery.get(url, undefined, callback, "script");
			}
		});
	
		jQuery.each(["get", "post"], function (i, method) {
			jQuery[method] = function (url, data, callback, type) {
				// shift arguments if data argument was omitted
				if (jQuery.isFunction(data)) {
					type = type || callback;
					callback = data;
					data = undefined;
				}
	
				return jQuery.ajax({
					url: url,
					type: method,
					dataType: type,
					data: data,
					success: callback
				});
			};
		});
	
		jQuery._evalUrl = function (url) {
			return jQuery.ajax({
				url: url,
				type: "GET",
				dataType: "script",
				async: false,
				global: false,
				"throws": true
			});
		};
	
		jQuery.fn.extend({
			wrapAll: function wrapAll(html) {
				if (jQuery.isFunction(html)) {
					return this.each(function (i) {
						jQuery(this).wrapAll(html.call(this, i));
					});
				}
	
				if (this[0]) {
					// The elements to wrap the target around
					var wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
	
					if (this[0].parentNode) {
						wrap.insertBefore(this[0]);
					}
	
					wrap.map(function () {
						var elem = this;
	
						while (elem.firstChild && elem.firstChild.nodeType === 1) {
							elem = elem.firstChild;
						}
	
						return elem;
					}).append(this);
				}
	
				return this;
			},
	
			wrapInner: function wrapInner(html) {
				if (jQuery.isFunction(html)) {
					return this.each(function (i) {
						jQuery(this).wrapInner(html.call(this, i));
					});
				}
	
				return this.each(function () {
					var self = jQuery(this),
					    contents = self.contents();
	
					if (contents.length) {
						contents.wrapAll(html);
					} else {
						self.append(html);
					}
				});
			},
	
			wrap: function wrap(html) {
				var isFunction = jQuery.isFunction(html);
	
				return this.each(function (i) {
					jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
				});
			},
	
			unwrap: function unwrap() {
				return this.parent().each(function () {
					if (!jQuery.nodeName(this, "body")) {
						jQuery(this).replaceWith(this.childNodes);
					}
				}).end();
			}
		});
	
		jQuery.expr.filters.hidden = function (elem) {
			// Support: Opera <= 12.12
			// Opera reports offsetWidths and offsetHeights less than zero on some elements
			return elem.offsetWidth <= 0 && elem.offsetHeight <= 0 || !support.reliableHiddenOffsets() && (elem.style && elem.style.display || jQuery.css(elem, "display")) === "none";
		};
	
		jQuery.expr.filters.visible = function (elem) {
			return !jQuery.expr.filters.hidden(elem);
		};
	
		var r20 = /%20/g,
		    rbracket = /\[\]$/,
		    rCRLF = /\r?\n/g,
		    rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		    rsubmittable = /^(?:input|select|textarea|keygen)/i;
	
		function buildParams(prefix, obj, traditional, add) {
			var name;
	
			if (jQuery.isArray(obj)) {
				// Serialize array item.
				jQuery.each(obj, function (i, v) {
					if (traditional || rbracket.test(prefix)) {
						// Treat each array item as a scalar.
						add(prefix, v);
					} else {
						// Item is non-scalar (array or object), encode its numeric index.
						buildParams(prefix + "[" + ((typeof v === "undefined" ? "undefined" : _typeof(v)) === "object" ? i : "") + "]", v, traditional, add);
					}
				});
			} else if (!traditional && jQuery.type(obj) === "object") {
				// Serialize object item.
				for (name in obj) {
					buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
				}
			} else {
				// Serialize scalar item.
				add(prefix, obj);
			}
		}
	
		// Serialize an array of form elements or a set of
		// key/values into a query string
		jQuery.param = function (a, traditional) {
			var prefix,
			    s = [],
			    add = function add(key, value) {
				// If value is a function, invoke it and return its value
				value = jQuery.isFunction(value) ? value() : value == null ? "" : value;
				s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
			};
	
			// Set traditional to true for jQuery <= 1.3.2 behavior.
			if (traditional === undefined) {
				traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
			}
	
			// If an array was passed in, assume that it is an array of form elements.
			if (jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
				// Serialize the form elements
				jQuery.each(a, function () {
					add(this.name, this.value);
				});
			} else {
				// If traditional, encode the "old" way (the way 1.3.2 or older
				// did it), otherwise encode params recursively.
				for (prefix in a) {
					buildParams(prefix, a[prefix], traditional, add);
				}
			}
	
			// Return the resulting serialization
			return s.join("&").replace(r20, "+");
		};
	
		jQuery.fn.extend({
			serialize: function serialize() {
				return jQuery.param(this.serializeArray());
			},
			serializeArray: function serializeArray() {
				return this.map(function () {
					// Can add propHook for "elements" to filter or add form elements
					var elements = jQuery.prop(this, "elements");
					return elements ? jQuery.makeArray(elements) : this;
				}).filter(function () {
					var type = this.type;
					// Use .is(":disabled") so that fieldset[disabled] works
					return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
				}).map(function (i, elem) {
					var val = jQuery(this).val();
	
					return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function (val) {
						return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
					}) : { name: elem.name, value: val.replace(rCRLF, "\r\n") };
				}).get();
			}
		});
	
		// Create the request object
		// (This is still attached to ajaxSettings for backward compatibility)
		jQuery.ajaxSettings.xhr = window.ActiveXObject !== undefined ?
		// Support: IE6+
		function () {
	
			// XHR cannot access local files, always use ActiveX for that case
			return !this.isLocal &&
	
			// Support: IE7-8
			// oldIE XHR does not support non-RFC2616 methods (#13240)
			// See http://msdn.microsoft.com/en-us/library/ie/ms536648(v=vs.85).aspx
			// and http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9
			// Although this check for six methods instead of eight
			// since IE also does not support "trace" and "connect"
			/^(get|post|head|put|delete|options)$/i.test(this.type) && createStandardXHR() || createActiveXHR();
		} :
		// For all other browsers, use the standard XMLHttpRequest object
		createStandardXHR;
	
		var xhrId = 0,
		    xhrCallbacks = {},
		    xhrSupported = jQuery.ajaxSettings.xhr();
	
		// Support: IE<10
		// Open requests must be manually aborted on unload (#5280)
		// See https://support.microsoft.com/kb/2856746 for more info
		if (window.attachEvent) {
			window.attachEvent("onunload", function () {
				for (var key in xhrCallbacks) {
					xhrCallbacks[key](undefined, true);
				}
			});
		}
	
		// Determine support properties
		support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
		xhrSupported = support.ajax = !!xhrSupported;
	
		// Create transport if the browser can provide an xhr
		if (xhrSupported) {
	
			jQuery.ajaxTransport(function (options) {
				// Cross domain only allowed if supported through XMLHttpRequest
				if (!options.crossDomain || support.cors) {
	
					var _callback;
	
					return {
						send: function send(headers, complete) {
							var i,
							    xhr = options.xhr(),
							    id = ++xhrId;
	
							// Open the socket
							xhr.open(options.type, options.url, options.async, options.username, options.password);
	
							// Apply custom fields if provided
							if (options.xhrFields) {
								for (i in options.xhrFields) {
									xhr[i] = options.xhrFields[i];
								}
							}
	
							// Override mime type if needed
							if (options.mimeType && xhr.overrideMimeType) {
								xhr.overrideMimeType(options.mimeType);
							}
	
							// X-Requested-With header
							// For cross-domain requests, seeing as conditions for a preflight are
							// akin to a jigsaw puzzle, we simply never set it to be sure.
							// (it can always be set on a per-request basis or even using ajaxSetup)
							// For same-domain requests, won't change header if already provided.
							if (!options.crossDomain && !headers["X-Requested-With"]) {
								headers["X-Requested-With"] = "XMLHttpRequest";
							}
	
							// Set headers
							for (i in headers) {
								// Support: IE<9
								// IE's ActiveXObject throws a 'Type Mismatch' exception when setting
								// request header to a null-value.
								//
								// To keep consistent with other XHR implementations, cast the value
								// to string and ignore `undefined`.
								if (headers[i] !== undefined) {
									xhr.setRequestHeader(i, headers[i] + "");
								}
							}
	
							// Do send the request
							// This may raise an exception which is actually
							// handled in jQuery.ajax (so no try/catch here)
							xhr.send(options.hasContent && options.data || null);
	
							// Listener
							_callback = function callback(_, isAbort) {
								var status, statusText, responses;
	
								// Was never called and is aborted or complete
								if (_callback && (isAbort || xhr.readyState === 4)) {
									// Clean up
									delete xhrCallbacks[id];
									_callback = undefined;
									xhr.onreadystatechange = jQuery.noop;
	
									// Abort manually if needed
									if (isAbort) {
										if (xhr.readyState !== 4) {
											xhr.abort();
										}
									} else {
										responses = {};
										status = xhr.status;
	
										// Support: IE<10
										// Accessing binary-data responseText throws an exception
										// (#11426)
										if (typeof xhr.responseText === "string") {
											responses.text = xhr.responseText;
										}
	
										// Firefox throws an exception when accessing
										// statusText for faulty cross-domain requests
										try {
											statusText = xhr.statusText;
										} catch (e) {
											// We normalize with Webkit giving an empty statusText
											statusText = "";
										}
	
										// Filter status for non standard behaviors
	
										// If the request is local and we have data: assume a success
										// (success with no data won't get notified, that's the best we
										// can do given current implementations)
										if (!status && options.isLocal && !options.crossDomain) {
											status = responses.text ? 200 : 404;
											// IE - #1450: sometimes returns 1223 when it should be 204
										} else if (status === 1223) {
											status = 204;
										}
									}
								}
	
								// Call complete if needed
								if (responses) {
									complete(status, statusText, responses, xhr.getAllResponseHeaders());
								}
							};
	
							if (!options.async) {
								// if we're in sync mode we fire the callback
								_callback();
							} else if (xhr.readyState === 4) {
								// (IE6 & IE7) if it's in cache and has been
								// retrieved directly we need to fire the callback
								setTimeout(_callback);
							} else {
								// Add to the list of active xhr callbacks
								xhr.onreadystatechange = xhrCallbacks[id] = _callback;
							}
						},
	
						abort: function abort() {
							if (_callback) {
								_callback(undefined, true);
							}
						}
					};
				}
			});
		}
	
		// Functions to create xhrs
		function createStandardXHR() {
			try {
				return new window.XMLHttpRequest();
			} catch (e) {}
		}
	
		function createActiveXHR() {
			try {
				return new window.ActiveXObject("Microsoft.XMLHTTP");
			} catch (e) {}
		}
	
		// Install script dataType
		jQuery.ajaxSetup({
			accepts: {
				script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
			},
			contents: {
				script: /(?:java|ecma)script/
			},
			converters: {
				"text script": function textScript(text) {
					jQuery.globalEval(text);
					return text;
				}
			}
		});
	
		// Handle cache's special case and global
		jQuery.ajaxPrefilter("script", function (s) {
			if (s.cache === undefined) {
				s.cache = false;
			}
			if (s.crossDomain) {
				s.type = "GET";
				s.global = false;
			}
		});
	
		// Bind script tag hack transport
		jQuery.ajaxTransport("script", function (s) {
	
			// This transport only deals with cross domain requests
			if (s.crossDomain) {
	
				var script,
				    head = document.head || jQuery("head")[0] || document.documentElement;
	
				return {
	
					send: function send(_, callback) {
	
						script = document.createElement("script");
	
						script.async = true;
	
						if (s.scriptCharset) {
							script.charset = s.scriptCharset;
						}
	
						script.src = s.url;
	
						// Attach handlers for all browsers
						script.onload = script.onreadystatechange = function (_, isAbort) {
	
							if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {
	
								// Handle memory leak in IE
								script.onload = script.onreadystatechange = null;
	
								// Remove the script
								if (script.parentNode) {
									script.parentNode.removeChild(script);
								}
	
								// Dereference the script
								script = null;
	
								// Callback if not abort
								if (!isAbort) {
									callback(200, "success");
								}
							}
						};
	
						// Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
						// Use native DOM manipulation to avoid our domManip AJAX trickery
						head.insertBefore(script, head.firstChild);
					},
	
					abort: function abort() {
						if (script) {
							script.onload(undefined, true);
						}
					}
				};
			}
		});
	
		var oldCallbacks = [],
		    rjsonp = /(=)\?(?=&|$)|\?\?/;
	
		// Default jsonp settings
		jQuery.ajaxSetup({
			jsonp: "callback",
			jsonpCallback: function jsonpCallback() {
				var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
				this[callback] = true;
				return callback;
			}
		});
	
		// Detect, normalize options and install callbacks for jsonp requests
		jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {
	
			var callbackName,
			    overwritten,
			    responseContainer,
			    jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && !(s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data");
	
			// Handle iff the expected data type is "jsonp" or we have a parameter to set
			if (jsonProp || s.dataTypes[0] === "jsonp") {
	
				// Get callback name, remembering preexisting value associated with it
				callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
	
				// Insert callback into url or form data
				if (jsonProp) {
					s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
				} else if (s.jsonp !== false) {
					s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
				}
	
				// Use data converter to retrieve json after script execution
				s.converters["script json"] = function () {
					if (!responseContainer) {
						jQuery.error(callbackName + " was not called");
					}
					return responseContainer[0];
				};
	
				// force json dataType
				s.dataTypes[0] = "json";
	
				// Install callback
				overwritten = window[callbackName];
				window[callbackName] = function () {
					responseContainer = arguments;
				};
	
				// Clean-up function (fires after converters)
				jqXHR.always(function () {
					// Restore preexisting value
					window[callbackName] = overwritten;
	
					// Save back as free
					if (s[callbackName]) {
						// make sure that re-using the options doesn't screw things around
						s.jsonpCallback = originalSettings.jsonpCallback;
	
						// save the callback name for future use
						oldCallbacks.push(callbackName);
					}
	
					// Call if it was a function and we have a response
					if (responseContainer && jQuery.isFunction(overwritten)) {
						overwritten(responseContainer[0]);
					}
	
					responseContainer = overwritten = undefined;
				});
	
				// Delegate to script
				return "script";
			}
		});
	
		// data: string of html
		// context (optional): If specified, the fragment will be created in this context, defaults to document
		// keepScripts (optional): If true, will include scripts passed in the html string
		jQuery.parseHTML = function (data, context, keepScripts) {
			if (!data || typeof data !== "string") {
				return null;
			}
			if (typeof context === "boolean") {
				keepScripts = context;
				context = false;
			}
			context = context || document;
	
			var parsed = rsingleTag.exec(data),
			    scripts = !keepScripts && [];
	
			// Single tag
			if (parsed) {
				return [context.createElement(parsed[1])];
			}
	
			parsed = jQuery.buildFragment([data], context, scripts);
	
			if (scripts && scripts.length) {
				jQuery(scripts).remove();
			}
	
			return jQuery.merge([], parsed.childNodes);
		};
	
		// Keep a copy of the old load method
		var _load = jQuery.fn.load;
	
		/**
	  * Load a url into a page
	  */
		jQuery.fn.load = function (url, params, callback) {
			if (typeof url !== "string" && _load) {
				return _load.apply(this, arguments);
			}
	
			var selector,
			    response,
			    type,
			    self = this,
			    off = url.indexOf(" ");
	
			if (off >= 0) {
				selector = jQuery.trim(url.slice(off, url.length));
				url = url.slice(0, off);
			}
	
			// If it's a function
			if (jQuery.isFunction(params)) {
	
				// We assume that it's the callback
				callback = params;
				params = undefined;
	
				// Otherwise, build a param string
			} else if (params && (typeof params === "undefined" ? "undefined" : _typeof(params)) === "object") {
				type = "POST";
			}
	
			// If we have elements to modify, make the request
			if (self.length > 0) {
				jQuery.ajax({
					url: url,
	
					// if "type" variable is undefined, then "GET" method will be used
					type: type,
					dataType: "html",
					data: params
				}).done(function (responseText) {
	
					// Save response for use in complete callback
					response = arguments;
	
					self.html(selector ?
	
					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) :
	
					// Otherwise use the full result
					responseText);
				}).complete(callback && function (jqXHR, status) {
					self.each(callback, response || [jqXHR.responseText, status, jqXHR]);
				});
			}
	
			return this;
		};
	
		// Attach a bunch of functions for handling common AJAX events
		jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (i, type) {
			jQuery.fn[type] = function (fn) {
				return this.on(type, fn);
			};
		});
	
		jQuery.expr.filters.animated = function (elem) {
			return jQuery.grep(jQuery.timers, function (fn) {
				return elem === fn.elem;
			}).length;
		};
	
		var docElem = window.document.documentElement;
	
		/**
	  * Gets a window from an element
	  */
		function getWindow(elem) {
			return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 ? elem.defaultView || elem.parentWindow : false;
		}
	
		jQuery.offset = {
			setOffset: function setOffset(elem, options, i) {
				var curPosition,
				    curLeft,
				    curCSSTop,
				    curTop,
				    curOffset,
				    curCSSLeft,
				    calculatePosition,
				    position = jQuery.css(elem, "position"),
				    curElem = jQuery(elem),
				    props = {};
	
				// set position first, in-case top/left are set even on static elem
				if (position === "static") {
					elem.style.position = "relative";
				}
	
				curOffset = curElem.offset();
				curCSSTop = jQuery.css(elem, "top");
				curCSSLeft = jQuery.css(elem, "left");
				calculatePosition = (position === "absolute" || position === "fixed") && jQuery.inArray("auto", [curCSSTop, curCSSLeft]) > -1;
	
				// need to be able to calculate position if either top or left is auto and position is either absolute or fixed
				if (calculatePosition) {
					curPosition = curElem.position();
					curTop = curPosition.top;
					curLeft = curPosition.left;
				} else {
					curTop = parseFloat(curCSSTop) || 0;
					curLeft = parseFloat(curCSSLeft) || 0;
				}
	
				if (jQuery.isFunction(options)) {
					options = options.call(elem, i, curOffset);
				}
	
				if (options.top != null) {
					props.top = options.top - curOffset.top + curTop;
				}
				if (options.left != null) {
					props.left = options.left - curOffset.left + curLeft;
				}
	
				if ("using" in options) {
					options.using.call(elem, props);
				} else {
					curElem.css(props);
				}
			}
		};
	
		jQuery.fn.extend({
			offset: function offset(options) {
				if (arguments.length) {
					return options === undefined ? this : this.each(function (i) {
						jQuery.offset.setOffset(this, options, i);
					});
				}
	
				var docElem,
				    win,
				    box = { top: 0, left: 0 },
				    elem = this[0],
				    doc = elem && elem.ownerDocument;
	
				if (!doc) {
					return;
				}
	
				docElem = doc.documentElement;
	
				// Make sure it's not a disconnected DOM node
				if (!jQuery.contains(docElem, elem)) {
					return box;
				}
	
				// If we don't have gBCR, just use 0,0 rather than error
				// BlackBerry 5, iOS 3 (original iPhone)
				if (_typeof(elem.getBoundingClientRect) !== strundefined) {
					box = elem.getBoundingClientRect();
				}
				win = getWindow(doc);
				return {
					top: box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0),
					left: box.left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0)
				};
			},
	
			position: function position() {
				if (!this[0]) {
					return;
				}
	
				var offsetParent,
				    offset,
				    parentOffset = { top: 0, left: 0 },
				    elem = this[0];
	
				// fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
				if (jQuery.css(elem, "position") === "fixed") {
					// we assume that getBoundingClientRect is available when computed position is fixed
					offset = elem.getBoundingClientRect();
				} else {
					// Get *real* offsetParent
					offsetParent = this.offsetParent();
	
					// Get correct offsets
					offset = this.offset();
					if (!jQuery.nodeName(offsetParent[0], "html")) {
						parentOffset = offsetParent.offset();
					}
	
					// Add offsetParent borders
					parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", true);
					parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", true);
				}
	
				// Subtract parent offsets and element margins
				// note: when an element has margin: auto the offsetLeft and marginLeft
				// are the same in Safari causing offset.left to incorrectly be 0
				return {
					top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
					left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
				};
			},
	
			offsetParent: function offsetParent() {
				return this.map(function () {
					var offsetParent = this.offsetParent || docElem;
	
					while (offsetParent && !jQuery.nodeName(offsetParent, "html") && jQuery.css(offsetParent, "position") === "static") {
						offsetParent = offsetParent.offsetParent;
					}
					return offsetParent || docElem;
				});
			}
		});
	
		// Create scrollLeft and scrollTop methods
		jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (method, prop) {
			var top = /Y/.test(prop);
	
			jQuery.fn[method] = function (val) {
				return access(this, function (elem, method, val) {
					var win = getWindow(elem);
	
					if (val === undefined) {
						return win ? prop in win ? win[prop] : win.document.documentElement[method] : elem[method];
					}
	
					if (win) {
						win.scrollTo(!top ? val : jQuery(win).scrollLeft(), top ? val : jQuery(win).scrollTop());
					} else {
						elem[method] = val;
					}
				}, method, val, arguments.length, null);
			};
		});
	
		// Add the top/left cssHooks using jQuery.fn.position
		// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
		// getComputedStyle returns percent when specified for top/left/bottom/right
		// rather than make the css module depend on the offset module, we just check for it here
		jQuery.each(["top", "left"], function (i, prop) {
			jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed) {
				if (computed) {
					computed = curCSS(elem, prop);
					// if curCSS returns percentage, fallback to offset
					return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
				}
			});
		});
	
		// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
		jQuery.each({ Height: "height", Width: "width" }, function (name, type) {
			jQuery.each({ padding: "inner" + name, content: type, "": "outer" + name }, function (defaultExtra, funcName) {
				// margin is only for outerHeight, outerWidth
				jQuery.fn[funcName] = function (margin, value) {
					var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
					    extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
	
					return access(this, function (elem, type, value) {
						var doc;
	
						if (jQuery.isWindow(elem)) {
							// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
							// isn't a whole lot we can do. See pull request at this URL for discussion:
							// https://github.com/jquery/jquery/pull/764
							return elem.document.documentElement["client" + name];
						}
	
						// Get document width or height
						if (elem.nodeType === 9) {
							doc = elem.documentElement;
	
							// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height], whichever is greatest
							// unfortunately, this causes bug #3838 in IE6/8 only, but there is currently no good, small way to fix it.
							return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
						}
	
						return value === undefined ?
						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css(elem, type, extra) :
	
						// Set width or height on the element
						jQuery.style(elem, type, value, extra);
					}, type, chainable ? margin : undefined, chainable, null);
				};
			});
		});
	
		// The number of elements contained in the matched element set
		jQuery.fn.size = function () {
			return this.length;
		};
	
		jQuery.fn.andSelf = jQuery.fn.addBack;
	
		// Register as a named AMD module, since jQuery can be concatenated with other
		// files that may use define, but not via a proper concatenation script that
		// understands anonymous AMD modules. A named AMD is safest and most robust
		// way to register. Lowercase jquery is used because AMD module names are
		// derived from file names, and jQuery is normally delivered in a lowercase
		// file name. Do this after creating the global so that if an AMD module wants
		// to call noConflict to hide this version of jQuery, it will work.
	
		// Note that for maximum portability, libraries that are not jQuery should
		// declare themselves as anonymous modules, and avoid setting a global if an
		// AMD loader is present. jQuery is a special case. For more information, see
		// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
	
		if (true) {
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return jQuery;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		}
	
		var
		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,
	
	
		// Map over the $ in case of overwrite
		_$ = window.$;
	
		jQuery.noConflict = function (deep) {
			if (window.$ === jQuery) {
				window.$ = _$;
			}
	
			if (deep && window.jQuery === jQuery) {
				window.jQuery = _jQuery;
			}
	
			return jQuery;
		};
	
		// Expose jQuery and $ identifiers, even in
		// AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
		// and CommonJS for browser emulators (#13566)
		if ((typeof noGlobal === "undefined" ? "undefined" : _typeof(noGlobal)) === strundefined) {
			window.jQuery = window.$ = jQuery;
		}
	
		return jQuery;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 17 */,
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function($, module) {"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/*! Amaze UI v2.7.2 | by Amaze UI Team | (c) 2016 AllMobilize, Inc. | Licensed under MIT | 2016-08-17T16:17:24+0800 */
	!function (t, e) {
	  "object" == ( false ? "undefined" : _typeof(exports)) && "object" == ( false ? "undefined" : _typeof(module)) ? module.exports = e(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (e), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.AMUI = e(require("jquery")) : t.AMUI = e(t.jQuery);
	}(undefined, function (t) {
	  return function (t) {
	    function e(n) {
	      if (i[n]) return i[n].exports;var s = i[n] = { exports: {}, id: n, loaded: !1 };return t[n].call(s.exports, s, s.exports, e), s.loaded = !0, s.exports;
	    }var i = {};return e.m = t, e.c = i, e.p = "", e(0);
	  }([function (t, e, i) {
	    "use strict";
	    var n = i(1),
	        s = i(2);i(3), i(4), i(5), i(6), i(7), i(8), i(9), i(10), i(11), i(14), i(15), i(16), i(17), i(18), i(19), i(20), i(21), i(22), i(24), i(25), i(23), i(27), i(28), i(29), i(30), i(31), i(32), i(33), i(26), i(34), i(35), i(36), i(37), i(38), i(39), i(40), i(41), i(42), i(43), i(44), i(45), i(46), i(47), i(48), i(49), i(50), i(51), i(52), i(53), i(54), t.exports = n.AMUI = s;
	  }, function (e, i) {
	    e.exports = t;
	  }, function (t, e, i) {
	    "use strict";
	    var n = i(1);if ("undefined" == typeof n) throw new Error("Amaze UI 2.x requires jQuery :-(\n\u7231\u4E0A\u4E00\u5339\u91CE\u9A6C\uFF0C\u53EF\u4F60\u7684\u5BB6\u91CC\u6CA1\u6709\u8349\u539F\u2026");var s = n.AMUI || {},
	        o = n(window),
	        a = window.document,
	        r = n("html");s.VERSION = "2.7.2", s.support = {}, s.support.transition = function () {
	      var t = function () {
	        var t = a.body || a.documentElement,
	            e = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };for (var i in e) {
	          if (void 0 !== t.style[i]) return e[i];
	        }
	      }();return t && { end: t };
	    }(), s.support.animation = function () {
	      var t = function () {
	        var t = a.body || a.documentElement,
	            e = { WebkitAnimation: "webkitAnimationEnd", MozAnimation: "animationend", OAnimation: "oAnimationEnd oanimationend", animation: "animationend" };for (var i in e) {
	          if (void 0 !== t.style[i]) return e[i];
	        }
	      }();return t && { end: t };
	    }(), s.support.touch = "ontouchstart" in window && navigator.userAgent.toLowerCase().match(/mobile|tablet/) || window.DocumentTouch && document instanceof window.DocumentTouch || window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 0 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 0 || !1, s.support.mutationobserver = window.MutationObserver || window.WebKitMutationObserver || null, s.support.formValidation = "function" == typeof document.createElement("form").checkValidity, s.utils = {}, s.utils.debounce = function (t, e, i) {
	      var n;return function () {
	        var s = this,
	            o = arguments,
	            a = function a() {
	          n = null, i || t.apply(s, o);
	        },
	            r = i && !n;clearTimeout(n), n = setTimeout(a, e), r && t.apply(s, o);
	      };
	    }, s.utils.isInView = function (t, e) {
	      var i = n(t),
	          s = !(!i.width() && !i.height()) && "none" !== i.css("display");if (!s) return !1;var a = o.scrollLeft(),
	          r = o.scrollTop(),
	          l = i.offset(),
	          c = l.left,
	          u = l.top;return e = n.extend({ topOffset: 0, leftOffset: 0 }, e), u + i.height() >= r && u - e.topOffset <= r + o.height() && c + i.width() >= a && c - e.leftOffset <= a + o.width();
	    }, s.utils.parseOptions = s.utils.options = function (t) {
	      if (n.isPlainObject(t)) return t;var e = t ? t.indexOf("{") : -1,
	          i = {};if (e != -1) try {
	        i = new Function("", "var json = " + t.substr(e) + "; return JSON.parse(JSON.stringify(json));")();
	      } catch (s) {}return i;
	    }, s.utils.generateGUID = function (t) {
	      var e = t + "-" || "am-";do {
	        e += Math.random().toString(36).substring(2, 7);
	      } while (document.getElementById(e));return e;
	    }, s.utils.getAbsoluteUrl = function () {
	      var t;return function (e) {
	        return t || (t = document.createElement("a")), t.href = e, t.href;
	      };
	    }(), s.plugin = function (t, e, i) {
	      var o = n.fn[t];i = i || {}, n.fn[t] = function (o) {
	        var a,
	            r = Array.prototype.slice.call(arguments, 0),
	            l = r.slice(1),
	            c = this.each(function () {
	          var c = n(this),
	              u = "amui." + t,
	              h = i.dataOptions || "data-am-" + t,
	              d = c.data(u),
	              p = n.extend({}, s.utils.parseOptions(c.attr(h)), "object" == (typeof o === "undefined" ? "undefined" : _typeof(o)) && o);(d || "destroy" !== o) && (d || c.data(u, d = new e(this, p)), i.methodCall ? i.methodCall.call(c, r, d) : (i.before && i.before.call(c, r, d), "string" == typeof o && (a = "function" == typeof d[o] ? d[o].apply(d, l) : d[o]), i.after && i.after.call(c, r, d)));
	        });return void 0 === a ? c : a;
	      }, n.fn[t].Constructor = e, n.fn[t].noConflict = function () {
	        return n.fn[t] = o, this;
	      }, s[t] = e;
	    }, n.fn.emulateTransitionEnd = function (t) {
	      var e = !1,
	          i = this;n(this).one(s.support.transition.end, function () {
	        e = !0;
	      });var o = function o() {
	        e || n(i).trigger(s.support.transition.end), i.transitionEndTimmer = void 0;
	      };return this.transitionEndTimmer = setTimeout(o, t), this;
	    }, n.fn.redraw = function () {
	      return this.each(function () {
	        this.offsetHeight;
	      });
	    }, n.fn.transitionEnd = function (t) {
	      function e(s) {
	        t.call(this, s), i && n.off(i, e);
	      }var i = s.support.transition.end,
	          n = this;return t && i && n.on(i, e), this;
	    }, n.fn.removeClassRegEx = function () {
	      return this.each(function (t) {
	        var e = n(this).attr("class");if (!e || !t) return !1;var i = [];e = e.split(" ");for (var s = 0, o = e.length; s < o; s++) {
	          e[s].match(t) || i.push(e[s]);
	        }n(this).attr("class", i.join(" "));
	      });
	    }, n.fn.alterClass = function (t, e) {
	      var i = this;if (t.indexOf("*") === -1) return i.removeClass(t), e ? i.addClass(e) : i;var s = new RegExp("\\s" + t.replace(/\*/g, "[A-Za-z0-9-_]+").split(" ").join("\\s|\\s") + "\\s", "g");return i.each(function (t, e) {
	        for (var i = " " + e.className + " "; s.test(i);) {
	          i = i.replace(s, " ");
	        }e.className = n.trim(i);
	      }), e ? i.addClass(e) : i;
	    }, s.utils.rAF = function () {
	      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || function (t) {
	        return window.setTimeout(t, 1e3 / 60);
	      };
	    }(), s.utils.cancelAF = function () {
	      return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || function (t) {
	        window.clearTimeout(t);
	      };
	    }(), s.utils.measureScrollbar = function () {
	      if (document.body.clientWidth >= window.innerWidth) return 0;var t = n('<div style="width: 100px;height: 100px;overflow: scroll;position: absolute;top: -9999px;"></div>');n(document.body).append(t);var e = t[0].offsetWidth - t[0].clientWidth;return t.remove(), e;
	    }, s.utils.imageLoader = function (t, e) {
	      function i() {
	        e(t[0]);
	      }function n() {
	        if (this.one("load", i), /MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
	          var t = this.attr("src"),
	              e = t.match(/\?/) ? "&" : "?";e += "random=" + new Date().getTime(), this.attr("src", t + e);
	        }
	      }return t.attr("src") ? void (t[0].complete || 4 === t[0].readyState ? i() : n.call(t)) : void i();
	    }, s.template = function (t, e) {
	      var i = s.template;return i.cache[t] || (i.cache[t] = function () {
	        var e = t,
	            n = /^[\w\-]+$/.test(t) ? i.get(t) : (e = "template(string)", t),
	            s = 1,
	            o = ("try { " + (i.variable ? "var " + i.variable + " = this.stash;" : "with (this.stash) { ") + "this.ret += '" + n.replace(/<%/g, "\x11").replace(/%>/g, "\x13").replace(/'(?![^\x11\x13]+?\x13)/g, "\\x27").replace(/^\s*|\s*$/g, "").replace(/\n/g, function () {
	          return "';\nthis.line = " + ++s + "; this.ret += '\\n";
	        }).replace(/\x11-(.+?)\x13/g, "' + ($1) + '").replace(/\x11=(.+?)\x13/g, "' + this.escapeHTML($1) + '").replace(/\x11(.+?)\x13/g, "'; $1; this.ret += '") + "'; " + (i.variable ? "" : "}") + "return this.ret;} catch (e) { throw 'TemplateError: ' + e + ' (on " + e + "' + ' line ' + this.line + ')'; } //@ sourceURL=" + e + "\n").replace(/this\.ret \+= '';/g, ""),
	            a = new Function(o),
	            r = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&#x22;", "'": "&#x27;" },
	            l = function l(t) {
	          return ("" + t).replace(/[&<>\'\"]/g, function (t) {
	            return r[t];
	          });
	        };return function (t) {
	          return a.call(i.context = { escapeHTML: l, line: 1, ret: "", stash: t });
	        };
	      }()), e ? i.cache[t](e) : i.cache[t];
	    }, s.template.cache = {}, s.template.get = function (t) {
	      if (t) {
	        var e = document.getElementById(t);return e && e.innerHTML || "";
	      }
	    }, s.DOMWatchers = [], s.DOMReady = !1, s.ready = function (t) {
	      s.DOMWatchers.push(t), s.DOMReady && t(document);
	    }, s.DOMObserve = function (t, e, i) {
	      var o = s.support.mutationobserver;o && (e = n.isPlainObject(e) ? e : { childList: !0, subtree: !0 }, i = "function" == typeof i && i || function () {}, n(t).each(function () {
	        var t = this,
	            a = n(t);if (!a.data("am.observer")) try {
	          var r = new o(s.utils.debounce(function (e, n) {
	            i.call(t, e, n), a.trigger("changed.dom.amui");
	          }, 50));r.observe(t, e), a.data("am.observer", r);
	        } catch (l) {}
	      }));
	    }, n.fn.DOMObserve = function (t, e) {
	      return this.each(function () {
	        s.DOMObserve(this, t, e);
	      });
	    }, s.support.touch && r.addClass("am-touch"), n(document).on("changed.dom.amui", function (t) {
	      var e = t.target;n.each(s.DOMWatchers, function (t, i) {
	        i(e);
	      });
	    }), n(function () {
	      var t = n(document.body);s.DOMReady = !0, n.each(s.DOMWatchers, function (t, e) {
	        e(document);
	      }), s.DOMObserve("[data-am-observe]"), r.removeClass("no-js").addClass("js"), s.support.animation && r.addClass("cssanimations"), window.navigator.standalone && r.addClass("am-standalone"), n(".am-topbar-fixed-top").length && t.addClass("am-with-topbar-fixed-top"), n(".am-topbar-fixed-bottom").length && t.addClass("am-with-topbar-fixed-bottom");var e = n(".am-layout");e.find('[class*="md-block-grid"]').alterClass("md-block-grid-*"), e.find('[class*="lg-block-grid"]').alterClass("lg-block-grid"), n("[data-am-widget]").each(function () {
	        var t = n(this);0 === t.parents(".am-layout").length && t.addClass("am-no-layout");
	      });
	    }), t.exports = s;
	  }, function (t, e, i) {
	    "use strict";
	    function n(t, e, i) {
	      return setTimeout(l(t, i), e);
	    }function s(t, e, i) {
	      return !!Array.isArray(t) && (o(t, i[e], i), !0);
	    }function o(t, e, i) {
	      var n;if (t) if (t.forEach) t.forEach(e, i);else if (void 0 !== t.length) for (n = 0; n < t.length;) {
	        e.call(i, t[n], n, t), n++;
	      } else for (n in t) {
	        t.hasOwnProperty(n) && e.call(i, t[n], n, t);
	      }
	    }function a(t, e, i) {
	      var n = "DEPRECATED METHOD: " + e + "\n" + i + " AT \n";return function () {
	        var e = new Error("get-stack-trace"),
	            i = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
	            s = window.console && (window.console.warn || window.console.log);return s && s.call(window.console, n, i), t.apply(this, arguments);
	      };
	    }function r(t, e, i) {
	      var n,
	          s = e.prototype;n = t.prototype = Object.create(s), n.constructor = t, n._super = s, i && ut(n, i);
	    }function l(t, e) {
	      return function () {
	        return t.apply(e, arguments);
	      };
	    }function c(t, e) {
	      return (typeof t === "undefined" ? "undefined" : _typeof(t)) == ft ? t.apply(e ? e[0] || void 0 : void 0, e) : t;
	    }function u(t, e) {
	      return void 0 === t ? e : t;
	    }function h(t, e, i) {
	      o(f(e), function (e) {
	        t.addEventListener(e, i, !1);
	      });
	    }function d(t, e, i) {
	      o(f(e), function (e) {
	        t.removeEventListener(e, i, !1);
	      });
	    }function p(t, e) {
	      for (; t;) {
	        if (t == e) return !0;t = t.parentNode;
	      }return !1;
	    }function m(t, e) {
	      return t.indexOf(e) > -1;
	    }function f(t) {
	      return t.trim().split(/\s+/g);
	    }function v(t, e, i) {
	      if (t.indexOf && !i) return t.indexOf(e);for (var n = 0; n < t.length;) {
	        if (i && t[n][i] == e || !i && t[n] === e) return n;n++;
	      }return -1;
	    }function g(t) {
	      return Array.prototype.slice.call(t, 0);
	    }function y(t, e, i) {
	      for (var n = [], s = [], o = 0; o < t.length;) {
	        var a = e ? t[o][e] : t[o];v(s, a) < 0 && n.push(t[o]), s[o] = a, o++;
	      }return i && (n = e ? n.sort(function (t, i) {
	        return t[e] > i[e];
	      }) : n.sort()), n;
	    }function w(t, e) {
	      for (var i, n, s = e[0].toUpperCase() + e.slice(1), o = 0; o < pt.length;) {
	        if (i = pt[o], n = i ? i + s : e, n in t) return n;o++;
	      }
	    }function b() {
	      return Tt++;
	    }function T(t) {
	      var e = t.ownerDocument || t;return e.defaultView || e.parentWindow || window;
	    }function x(t, e) {
	      var i = this;this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function (e) {
	        c(t.options.enable, [t]) && i.handler(e);
	      }, this.init();
	    }function C(t) {
	      var e,
	          i = t.options.inputClass;return new (e = i ? i : Et ? _ : St ? q : Ct ? H : L)(t, E);
	    }function E(t, e, i) {
	      var n = i.pointers.length,
	          s = i.changedPointers.length,
	          o = e & Mt && n - s === 0,
	          a = e & (Nt | It) && n - s === 0;i.isFirst = !!o, i.isFinal = !!a, o && (t.session = {}), i.eventType = e, S(t, i), t.emit("hammer.input", i), t.recognize(i), t.session.prevInput = i;
	    }function S(t, e) {
	      var i = t.session,
	          n = e.pointers,
	          s = n.length;i.firstInput || (i.firstInput = F(e)), s > 1 && !i.firstMultiple ? i.firstMultiple = F(e) : 1 === s && (i.firstMultiple = !1);var o = i.firstInput,
	          a = i.firstMultiple,
	          r = a ? a.center : o.center,
	          l = e.center = A(n);e.timeStamp = yt(), e.deltaTime = e.timeStamp - o.timeStamp, e.angle = N(r, l), e.distance = P(r, l), k(i, e), e.offsetDirection = M(e.deltaX, e.deltaY);var c = $(e.deltaTime, e.deltaX, e.deltaY);e.overallVelocityX = c.x, e.overallVelocityY = c.y, e.overallVelocity = gt(c.x) > gt(c.y) ? c.x : c.y, e.scale = a ? O(a.pointers, n) : 1, e.rotation = a ? I(a.pointers, n) : 0, e.maxPointers = i.prevInput ? e.pointers.length > i.prevInput.maxPointers ? e.pointers.length : i.prevInput.maxPointers : e.pointers.length, D(i, e);var u = t.element;p(e.srcEvent.target, u) && (u = e.srcEvent.target), e.target = u;
	    }function k(t, e) {
	      var i = e.center,
	          n = t.offsetDelta || {},
	          s = t.prevDelta || {},
	          o = t.prevInput || {};e.eventType !== Mt && o.eventType !== Nt || (s = t.prevDelta = { x: o.deltaX || 0, y: o.deltaY || 0 }, n = t.offsetDelta = { x: i.x, y: i.y }), e.deltaX = s.x + (i.x - n.x), e.deltaY = s.y + (i.y - n.y);
	    }function D(t, e) {
	      var i,
	          n,
	          s,
	          o,
	          a = t.lastInterval || e,
	          r = e.timeStamp - a.timeStamp;if (e.eventType != It && (r > $t || void 0 === a.velocity)) {
	        var l = e.deltaX - a.deltaX,
	            c = e.deltaY - a.deltaY,
	            u = $(r, l, c);n = u.x, s = u.y, i = gt(u.x) > gt(u.y) ? u.x : u.y, o = M(l, c), t.lastInterval = e;
	      } else i = a.velocity, n = a.velocityX, s = a.velocityY, o = a.direction;e.velocity = i, e.velocityX = n, e.velocityY = s, e.direction = o;
	    }function F(t) {
	      for (var e = [], i = 0; i < t.pointers.length;) {
	        e[i] = { clientX: vt(t.pointers[i].clientX), clientY: vt(t.pointers[i].clientY) }, i++;
	      }return { timeStamp: yt(), pointers: e, center: A(e), deltaX: t.deltaX, deltaY: t.deltaY };
	    }function A(t) {
	      var e = t.length;if (1 === e) return { x: vt(t[0].clientX), y: vt(t[0].clientY) };for (var i = 0, n = 0, s = 0; s < e;) {
	        i += t[s].clientX, n += t[s].clientY, s++;
	      }return { x: vt(i / e), y: vt(n / e) };
	    }function $(t, e, i) {
	      return { x: e / t || 0, y: i / t || 0 };
	    }function M(t, e) {
	      return t === e ? Ot : gt(t) >= gt(e) ? t < 0 ? Lt : _t : e < 0 ? zt : Rt;
	    }function P(t, e, i) {
	      i || (i = Bt);var n = e[i[0]] - t[i[0]],
	          s = e[i[1]] - t[i[1]];return Math.sqrt(n * n + s * s);
	    }function N(t, e, i) {
	      i || (i = Bt);var n = e[i[0]] - t[i[0]],
	          s = e[i[1]] - t[i[1]];return 180 * Math.atan2(s, n) / Math.PI;
	    }function I(t, e) {
	      return N(e[1], e[0], Ut) + N(t[1], t[0], Ut);
	    }function O(t, e) {
	      return P(e[0], e[1], Ut) / P(t[0], t[1], Ut);
	    }function L() {
	      this.evEl = Xt, this.evWin = Yt, this.pressed = !1, x.apply(this, arguments);
	    }function _() {
	      this.evEl = Gt, this.evWin = Kt, x.apply(this, arguments), this.store = this.manager.session.pointerEvents = [];
	    }function z() {
	      this.evTarget = Qt, this.evWin = te, this.started = !1, x.apply(this, arguments);
	    }function R(t, e) {
	      var i = g(t.touches),
	          n = g(t.changedTouches);return e & (Nt | It) && (i = y(i.concat(n), "identifier", !0)), [i, n];
	    }function q() {
	      this.evTarget = ie, this.targetIds = {}, x.apply(this, arguments);
	    }function W(t, e) {
	      var i = g(t.touches),
	          n = this.targetIds;if (e & (Mt | Pt) && 1 === i.length) return n[i[0].identifier] = !0, [i, i];var s,
	          o,
	          a = g(t.changedTouches),
	          r = [],
	          l = this.target;if (o = i.filter(function (t) {
	        return p(t.target, l);
	      }), e === Mt) for (s = 0; s < o.length;) {
	        n[o[s].identifier] = !0, s++;
	      }for (s = 0; s < a.length;) {
	        n[a[s].identifier] && r.push(a[s]), e & (Nt | It) && delete n[a[s].identifier], s++;
	      }return r.length ? [y(o.concat(r), "identifier", !0), r] : void 0;
	    }function H() {
	      x.apply(this, arguments);var t = l(this.handler, this);this.touch = new q(this.manager, t), this.mouse = new L(this.manager, t), this.primaryTouch = null, this.lastTouches = [];
	    }function B(t, e) {
	      t & Mt ? (this.primaryTouch = e.changedPointers[0].identifier, U.call(this, e)) : t & (Nt | It) && U.call(this, e);
	    }function U(t) {
	      var e = t.changedPointers[0];if (e.identifier === this.primaryTouch) {
	        var i = { x: e.clientX, y: e.clientY };this.lastTouches.push(i);var n = this.lastTouches,
	            s = function s() {
	          var t = n.indexOf(i);t > -1 && n.splice(t, 1);
	        };setTimeout(s, ne);
	      }
	    }function V(t) {
	      for (var e = t.srcEvent.clientX, i = t.srcEvent.clientY, n = 0; n < this.lastTouches.length; n++) {
	        var s = this.lastTouches[n],
	            o = Math.abs(e - s.x),
	            a = Math.abs(i - s.y);if (o <= se && a <= se) return !0;
	      }return !1;
	    }function X(t, e) {
	      this.manager = t, this.set(e);
	    }function Y(t) {
	      if (m(t, ue)) return ue;var e = m(t, he),
	          i = m(t, de);return e && i ? ue : e || i ? e ? he : de : m(t, ce) ? ce : le;
	    }function j() {
	      if (!ae) return !1;var t = {},
	          e = window.CSS && window.CSS.supports;return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function (i) {
	        t[i] = !e || window.CSS.supports("touch-action", i);
	      }), t;
	    }function Z(t) {
	      this.options = ut({}, this.defaults, t || {}), this.id = b(), this.manager = null, this.options.enable = u(this.options.enable, !0), this.state = me, this.simultaneous = {}, this.requireFail = [];
	    }function G(t) {
	      return t & we ? "cancel" : t & ge ? "end" : t & ve ? "move" : t & fe ? "start" : "";
	    }function K(t) {
	      return t == Rt ? "down" : t == zt ? "up" : t == Lt ? "left" : t == _t ? "right" : "";
	    }function J(t, e) {
	      var i = e.manager;return i ? i.get(t) : t;
	    }function Q() {
	      Z.apply(this, arguments);
	    }function tt() {
	      Q.apply(this, arguments), this.pX = null, this.pY = null;
	    }function et() {
	      Q.apply(this, arguments);
	    }function it() {
	      Z.apply(this, arguments), this._timer = null, this._input = null;
	    }function nt() {
	      Q.apply(this, arguments);
	    }function st() {
	      Q.apply(this, arguments);
	    }function ot() {
	      Z.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0;
	    }function at(t, e) {
	      return e = e || {}, e.recognizers = u(e.recognizers, at.defaults.preset), new rt(t, e);
	    }function rt(t, e) {
	      this.options = ut({}, at.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = C(this), this.touchAction = new X(this, this.options.touchAction), lt(this, !0), o(this.options.recognizers, function (t) {
	        var e = this.add(new t[0](t[1]));t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3]);
	      }, this);
	    }function lt(t, e) {
	      var i = t.element;if (i.style) {
	        var n;o(t.options.cssProps, function (s, o) {
	          n = w(i.style, o), e ? (t.oldCssProps[n] = i.style[n], i.style[n] = s) : i.style[n] = t.oldCssProps[n] || "";
	        }), e || (t.oldCssProps = {});
	      }
	    }function ct(t, e) {
	      var i = document.createEvent("Event");i.initEvent(t, !0, !0), i.gesture = e, e.target.dispatchEvent(i);
	    }var ut,
	        ht = i(1),
	        dt = i(2),
	        pt = ["", "webkit", "Moz", "MS", "ms", "o"],
	        mt = document.createElement("div"),
	        ft = "function",
	        vt = Math.round,
	        gt = Math.abs,
	        yt = Date.now;ut = "function" != typeof Object.assign ? function (t) {
	      if (void 0 === t || null === t) throw new TypeError("Cannot convert undefined or null to object");for (var e = Object(t), i = 1; i < arguments.length; i++) {
	        var n = arguments[i];if (void 0 !== n && null !== n) for (var s in n) {
	          n.hasOwnProperty(s) && (e[s] = n[s]);
	        }
	      }return e;
	    } : Object.assign;var wt = a(function (t, e, i) {
	      for (var n = Object.keys(e), s = 0; s < n.length;) {
	        (!i || i && void 0 === t[n[s]]) && (t[n[s]] = e[n[s]]), s++;
	      }return t;
	    }, "extend", "Use `assign`."),
	        bt = a(function (t, e) {
	      return wt(t, e, !0);
	    }, "merge", "Use `assign`."),
	        Tt = 1,
	        xt = /mobile|tablet|ip(ad|hone|od)|android/i,
	        Ct = "ontouchstart" in window,
	        Et = void 0 !== w(window, "PointerEvent"),
	        St = Ct && xt.test(navigator.userAgent),
	        kt = "touch",
	        Dt = "pen",
	        Ft = "mouse",
	        At = "kinect",
	        $t = 25,
	        Mt = 1,
	        Pt = 2,
	        Nt = 4,
	        It = 8,
	        Ot = 1,
	        Lt = 2,
	        _t = 4,
	        zt = 8,
	        Rt = 16,
	        qt = Lt | _t,
	        Wt = zt | Rt,
	        Ht = qt | Wt,
	        Bt = ["x", "y"],
	        Ut = ["clientX", "clientY"];x.prototype = { handler: function handler() {}, init: function init() {
	        this.evEl && h(this.element, this.evEl, this.domHandler), this.evTarget && h(this.target, this.evTarget, this.domHandler), this.evWin && h(T(this.element), this.evWin, this.domHandler);
	      }, destroy: function destroy() {
	        this.evEl && d(this.element, this.evEl, this.domHandler), this.evTarget && d(this.target, this.evTarget, this.domHandler), this.evWin && d(T(this.element), this.evWin, this.domHandler);
	      } };var Vt = { mousedown: Mt, mousemove: Pt, mouseup: Nt },
	        Xt = "mousedown",
	        Yt = "mousemove mouseup";r(L, x, { handler: function handler(t) {
	        var e = Vt[t.type];e & Mt && 0 === t.button && (this.pressed = !0), e & Pt && 1 !== t.which && (e = Nt), this.pressed && (e & Nt && (this.pressed = !1), this.callback(this.manager, e, { pointers: [t], changedPointers: [t], pointerType: Ft, srcEvent: t }));
	      } });var jt = { pointerdown: Mt, pointermove: Pt, pointerup: Nt, pointercancel: It, pointerout: It },
	        Zt = { 2: kt, 3: Dt, 4: Ft, 5: At },
	        Gt = "pointerdown",
	        Kt = "pointermove pointerup pointercancel";window.MSPointerEvent && !window.PointerEvent && (Gt = "MSPointerDown", Kt = "MSPointerMove MSPointerUp MSPointerCancel"), r(_, x, { handler: function handler(t) {
	        var e = this.store,
	            i = !1,
	            n = t.type.toLowerCase().replace("ms", ""),
	            s = jt[n],
	            o = Zt[t.pointerType] || t.pointerType,
	            a = o == kt,
	            r = v(e, t.pointerId, "pointerId");s & Mt && (0 === t.button || a) ? r < 0 && (e.push(t), r = e.length - 1) : s & (Nt | It) && (i = !0), r < 0 || (e[r] = t, this.callback(this.manager, s, { pointers: e, changedPointers: [t], pointerType: o, srcEvent: t }), i && e.splice(r, 1));
	      } });var Jt = { touchstart: Mt, touchmove: Pt, touchend: Nt, touchcancel: It },
	        Qt = "touchstart",
	        te = "touchstart touchmove touchend touchcancel";r(z, x, { handler: function handler(t) {
	        var e = Jt[t.type];if (e === Mt && (this.started = !0), this.started) {
	          var i = R.call(this, t, e);e & (Nt | It) && i[0].length - i[1].length === 0 && (this.started = !1), this.callback(this.manager, e, { pointers: i[0], changedPointers: i[1], pointerType: kt, srcEvent: t });
	        }
	      } });var ee = { touchstart: Mt, touchmove: Pt, touchend: Nt, touchcancel: It },
	        ie = "touchstart touchmove touchend touchcancel";r(q, x, { handler: function handler(t) {
	        var e = ee[t.type],
	            i = W.call(this, t, e);i && this.callback(this.manager, e, { pointers: i[0], changedPointers: i[1], pointerType: kt, srcEvent: t });
	      } });var ne = 2500,
	        se = 25;r(H, x, { handler: function handler(t, e, i) {
	        var n = i.pointerType == kt,
	            s = i.pointerType == Ft;if (!(s && i.sourceCapabilities && i.sourceCapabilities.firesTouchEvents)) {
	          if (n) B.call(this, e, i);else if (s && V.call(this, i)) return;this.callback(t, e, i);
	        }
	      }, destroy: function destroy() {
	        this.touch.destroy(), this.mouse.destroy();
	      } });var oe = w(mt.style, "touchAction"),
	        ae = void 0 !== oe,
	        re = "compute",
	        le = "auto",
	        ce = "manipulation",
	        ue = "none",
	        he = "pan-x",
	        de = "pan-y",
	        pe = j();X.prototype = { set: function set(t) {
	        t == re && (t = this.compute()), ae && this.manager.element.style && pe[t] && (this.manager.element.style[oe] = t), this.actions = t.toLowerCase().trim();
	      }, update: function update() {
	        this.set(this.manager.options.touchAction);
	      }, compute: function compute() {
	        var t = [];return o(this.manager.recognizers, function (e) {
	          c(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()));
	        }), Y(t.join(" "));
	      }, preventDefaults: function preventDefaults(t) {
	        var e = t.srcEvent,
	            i = t.offsetDirection;if (this.manager.session.prevented) return void e.preventDefault();var n = this.actions,
	            s = m(n, ue) && !pe[ue],
	            o = m(n, de) && !pe[de],
	            a = m(n, he) && !pe[he];if (s) {
	          var r = 1 === t.pointers.length,
	              l = t.distance < 2,
	              c = t.deltaTime < 250;if (r && l && c) return;
	        }return a && o ? void 0 : s || o && i & qt || a && i & Wt ? this.preventSrc(e) : void 0;
	      }, preventSrc: function preventSrc(t) {
	        this.manager.session.prevented = !0, t.preventDefault();
	      } };var me = 1,
	        fe = 2,
	        ve = 4,
	        ge = 8,
	        ye = ge,
	        we = 16,
	        be = 32;Z.prototype = { defaults: {}, set: function set(t) {
	        return ut(this.options, t), this.manager && this.manager.touchAction.update(), this;
	      }, recognizeWith: function recognizeWith(t) {
	        if (s(t, "recognizeWith", this)) return this;var e = this.simultaneous;return t = J(t, this), e[t.id] || (e[t.id] = t, t.recognizeWith(this)), this;
	      }, dropRecognizeWith: function dropRecognizeWith(t) {
	        return s(t, "dropRecognizeWith", this) ? this : (t = J(t, this), delete this.simultaneous[t.id], this);
	      }, requireFailure: function requireFailure(t) {
	        if (s(t, "requireFailure", this)) return this;var e = this.requireFail;return t = J(t, this), v(e, t) === -1 && (e.push(t), t.requireFailure(this)), this;
	      }, dropRequireFailure: function dropRequireFailure(t) {
	        if (s(t, "dropRequireFailure", this)) return this;t = J(t, this);var e = v(this.requireFail, t);return e > -1 && this.requireFail.splice(e, 1), this;
	      }, hasRequireFailures: function hasRequireFailures() {
	        return this.requireFail.length > 0;
	      }, canRecognizeWith: function canRecognizeWith(t) {
	        return !!this.simultaneous[t.id];
	      }, emit: function emit(t) {
	        function e(e) {
	          i.manager.emit(e, t);
	        }var i = this,
	            n = this.state;n < ge && e(i.options.event + G(n)), e(i.options.event), t.additionalEvent && e(t.additionalEvent), n >= ge && e(i.options.event + G(n));
	      }, tryEmit: function tryEmit(t) {
	        return this.canEmit() ? this.emit(t) : void (this.state = be);
	      }, canEmit: function canEmit() {
	        for (var t = 0; t < this.requireFail.length;) {
	          if (!(this.requireFail[t].state & (be | me))) return !1;t++;
	        }return !0;
	      }, recognize: function recognize(t) {
	        var e = ut({}, t);return c(this.options.enable, [this, e]) ? (this.state & (ye | we | be) && (this.state = me), this.state = this.process(e), void (this.state & (fe | ve | ge | we) && this.tryEmit(e))) : (this.reset(), void (this.state = be));
	      }, process: function process(t) {}, getTouchAction: function getTouchAction() {}, reset: function reset() {} }, r(Q, Z, { defaults: { pointers: 1 }, attrTest: function attrTest(t) {
	        var e = this.options.pointers;return 0 === e || t.pointers.length === e;
	      }, process: function process(t) {
	        var e = this.state,
	            i = t.eventType,
	            n = e & (fe | ve),
	            s = this.attrTest(t);return n && (i & It || !s) ? e | we : n || s ? i & Nt ? e | ge : e & fe ? e | ve : fe : be;
	      } }), r(tt, Q, { defaults: { event: "pan", threshold: 10, pointers: 1, direction: Ht }, getTouchAction: function getTouchAction() {
	        var t = this.options.direction,
	            e = [];return t & qt && e.push(de), t & Wt && e.push(he), e;
	      }, directionTest: function directionTest(t) {
	        var e = this.options,
	            i = !0,
	            n = t.distance,
	            s = t.direction,
	            o = t.deltaX,
	            a = t.deltaY;return s & e.direction || (e.direction & qt ? (s = 0 === o ? Ot : o < 0 ? Lt : _t, i = o != this.pX, n = Math.abs(t.deltaX)) : (s = 0 === a ? Ot : a < 0 ? zt : Rt, i = a != this.pY, n = Math.abs(t.deltaY))), t.direction = s, i && n > e.threshold && s & e.direction;
	      }, attrTest: function attrTest(t) {
	        return Q.prototype.attrTest.call(this, t) && (this.state & fe || !(this.state & fe) && this.directionTest(t));
	      }, emit: function emit(t) {
	        this.pX = t.deltaX, this.pY = t.deltaY;var e = K(t.direction);e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t);
	      } }), r(et, Q, { defaults: { event: "pinch", threshold: 0, pointers: 2 }, getTouchAction: function getTouchAction() {
	        return [ue];
	      }, attrTest: function attrTest(t) {
	        return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & fe);
	      }, emit: function emit(t) {
	        if (1 !== t.scale) {
	          var e = t.scale < 1 ? "in" : "out";t.additionalEvent = this.options.event + e;
	        }this._super.emit.call(this, t);
	      } }), r(it, Z, { defaults: { event: "press", pointers: 1, time: 251, threshold: 9 }, getTouchAction: function getTouchAction() {
	        return [le];
	      }, process: function process(t) {
	        var e = this.options,
	            i = t.pointers.length === e.pointers,
	            s = t.distance < e.threshold,
	            o = t.deltaTime > e.time;if (this._input = t, !s || !i || t.eventType & (Nt | It) && !o) this.reset();else if (t.eventType & Mt) this.reset(), this._timer = n(function () {
	          this.state = ye, this.tryEmit();
	        }, e.time, this);else if (t.eventType & Nt) return ye;return be;
	      }, reset: function reset() {
	        clearTimeout(this._timer);
	      }, emit: function emit(t) {
	        this.state === ye && (t && t.eventType & Nt ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = yt(), this.manager.emit(this.options.event, this._input)));
	      } }), r(nt, Q, { defaults: { event: "rotate", threshold: 0, pointers: 2 }, getTouchAction: function getTouchAction() {
	        return [ue];
	      }, attrTest: function attrTest(t) {
	        return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & fe);
	      } }), r(st, Q, { defaults: { event: "swipe", threshold: 10, velocity: .3, direction: qt | Wt, pointers: 1 }, getTouchAction: function getTouchAction() {
	        return tt.prototype.getTouchAction.call(this);
	      }, attrTest: function attrTest(t) {
	        var e,
	            i = this.options.direction;return i & (qt | Wt) ? e = t.overallVelocity : i & qt ? e = t.overallVelocityX : i & Wt && (e = t.overallVelocityY), this._super.attrTest.call(this, t) && i & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && gt(e) > this.options.velocity && t.eventType & Nt;
	      }, emit: function emit(t) {
	        var e = K(t.offsetDirection);e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t);
	      } }), r(ot, Z, { defaults: { event: "tap", pointers: 1, taps: 1, interval: 300, time: 250, threshold: 9, posThreshold: 10 }, getTouchAction: function getTouchAction() {
	        return [ce];
	      }, process: function process(t) {
	        var e = this.options,
	            i = t.pointers.length === e.pointers,
	            s = t.distance < e.threshold,
	            o = t.deltaTime < e.time;if (this.reset(), t.eventType & Mt && 0 === this.count) return this.failTimeout();if (s && o && i) {
	          if (t.eventType != Nt) return this.failTimeout();var a = !this.pTime || t.timeStamp - this.pTime < e.interval,
	              r = !this.pCenter || P(this.pCenter, t.center) < e.posThreshold;this.pTime = t.timeStamp, this.pCenter = t.center, r && a ? this.count += 1 : this.count = 1, this._input = t;var l = this.count % e.taps;if (0 === l) return this.hasRequireFailures() ? (this._timer = n(function () {
	            this.state = ye, this.tryEmit();
	          }, e.interval, this), fe) : ye;
	        }return be;
	      }, failTimeout: function failTimeout() {
	        return this._timer = n(function () {
	          this.state = be;
	        }, this.options.interval, this), be;
	      }, reset: function reset() {
	        clearTimeout(this._timer);
	      }, emit: function emit() {
	        this.state == ye && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input));
	      } }), at.VERSION = "2.0.7", at.defaults = { domEvents: !1, touchAction: re, enable: !0, inputTarget: null, inputClass: null, preset: [[nt, { enable: !1 }], [et, { enable: !1 }, ["rotate"]], [st, { direction: qt }], [tt, { direction: qt }, ["swipe"]], [ot], [ot, { event: "doubletap", taps: 2 }, ["tap"]], [it]], cssProps: { userSelect: "none", touchSelect: "none", touchCallout: "none", contentZooming: "none", userDrag: "none", tapHighlightColor: "rgba(0,0,0,0)" } };var Te = 1,
	        xe = 2;rt.prototype = { set: function set(t) {
	        return ut(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this;
	      }, stop: function stop(t) {
	        this.session.stopped = t ? xe : Te;
	      }, recognize: function recognize(t) {
	        var e = this.session;if (!e.stopped) {
	          this.touchAction.preventDefaults(t);var i,
	              n = this.recognizers,
	              s = e.curRecognizer;(!s || s && s.state & ye) && (s = e.curRecognizer = null);for (var o = 0; o < n.length;) {
	            i = n[o], e.stopped === xe || s && i != s && !i.canRecognizeWith(s) ? i.reset() : i.recognize(t), !s && i.state & (fe | ve | ge) && (s = e.curRecognizer = i), o++;
	          }
	        }
	      }, get: function get(t) {
	        if (t instanceof Z) return t;for (var e = this.recognizers, i = 0; i < e.length; i++) {
	          if (e[i].options.event == t) return e[i];
	        }return null;
	      }, add: function add(t) {
	        if (s(t, "add", this)) return this;var e = this.get(t.options.event);return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t;
	      }, remove: function remove(t) {
	        if (s(t, "remove", this)) return this;if (t = this.get(t)) {
	          var e = this.recognizers,
	              i = v(e, t);i !== -1 && (e.splice(i, 1), this.touchAction.update());
	        }return this;
	      }, on: function on(t, e) {
	        if (void 0 !== t && void 0 !== e) {
	          var i = this.handlers;return o(f(t), function (t) {
	            i[t] = i[t] || [], i[t].push(e);
	          }), this;
	        }
	      }, off: function off(t, e) {
	        if (void 0 !== t) {
	          var i = this.handlers;return o(f(t), function (t) {
	            e ? i[t] && i[t].splice(v(i[t], e), 1) : delete i[t];
	          }), this;
	        }
	      }, emit: function emit(t, e) {
	        this.options.domEvents && ct(t, e);var i = this.handlers[t] && this.handlers[t].slice();if (i && i.length) {
	          e.type = t, e.preventDefault = function () {
	            e.srcEvent.preventDefault();
	          };for (var n = 0; n < i.length;) {
	            i[n](e), n++;
	          }
	        }
	      }, destroy: function destroy() {
	        this.element && lt(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null;
	      } }, ut(at, { INPUT_START: Mt, INPUT_MOVE: Pt, INPUT_END: Nt, INPUT_CANCEL: It, STATE_POSSIBLE: me, STATE_BEGAN: fe, STATE_CHANGED: ve, STATE_ENDED: ge, STATE_RECOGNIZED: ye, STATE_CANCELLED: we, STATE_FAILED: be, DIRECTION_NONE: Ot, DIRECTION_LEFT: Lt, DIRECTION_RIGHT: _t, DIRECTION_UP: zt, DIRECTION_DOWN: Rt, DIRECTION_HORIZONTAL: qt, DIRECTION_VERTICAL: Wt, DIRECTION_ALL: Ht, Manager: rt, Input: x, TouchAction: X, TouchInput: q, MouseInput: L, PointerEventInput: _, TouchMouseInput: H, SingleTouchInput: z, Recognizer: Z, AttrRecognizer: Q, Tap: ot, Pan: tt, Swipe: st, Pinch: et, Rotate: nt, Press: it, on: h, off: d, each: o, merge: bt, extend: wt, assign: ut, inherit: r, bindFn: l, prefixed: w }), function (t, e) {
	      function i(i, n) {
	        var s = t(i);s.data("hammer") || s.data("hammer", new e(s[0], n));
	      }t.fn.hammer = function (t) {
	        return this.each(function () {
	          i(this, t);
	        });
	      }, e.Manager.prototype.emit = function (e) {
	        return function (i, n) {
	          e.call(this, i, n), t(this.element).trigger({ type: i, gesture: n });
	        };
	      }(e.Manager.prototype.emit);
	    }(ht, at), t.exports = dt.Hammer = at;
	  }, function (t, e, i) {
	    "use strict";
	    function n() {
	      window.removeEventListener("load", n, !1), c = !0;
	    }function s(t) {
	      return u = u || new s.Class(t);
	    }function o(t, e) {
	      for (var i in e) {
	        t[i] = e[i];
	      }return t;
	    }function a() {
	      "#ath" == document.location.hash && history.replaceState("", window.document.title, document.location.href.split("#")[0]), h.test(document.location.href) && history.replaceState("", window.document.title, document.location.href.replace(h, "$1")), d.test(document.location.search) && history.replaceState("", window.document.title, document.location.href.replace(d, "$2"));
	    }var r = i(2),
	        l = "addEventListener" in window,
	        c = !1;"complete" === document.readyState ? c = !0 : l && window.addEventListener("load", n, !1);var u,
	        h = /\/ath(\/)?$/,
	        d = /([\?&]ath=[^&]*$|&ath=[^&]*(&))/;s.intl = { en_us: { ios: "To add this web app to the home screen: tap %icon and then <strong>Add to Home Screen</strong>.", android: 'To add this web app to the home screen open the browser option menu and tap on <strong>Add to homescreen</strong>. <small>The menu can be accessed by pressing the menu hardware button if your device has one, or by tapping the top right menu icon <span class="ath-action-icon">icon</span>.</small>' }, zh_cn: { ios: "\u5982\u8981\u628A\u5E94\u7528\u7A0B\u5F0F\u52A0\u81F3\u4E3B\u5C4F\u5E55,\u8BF7\u70B9\u51FB%icon, \u7136\u540E<strong>\u52A0\u81F3\u4E3B\u5C4F\u5E55</strong>", android: 'To add this web app to the home screen open the browser option menu and tap on <strong>Add to homescreen</strong>. <small>The menu can be accessed by pressing the menu hardware button if your device has one, or by tapping the top right menu icon <span class="ath-action-icon">icon</span>.</small>' }, zh_tw: { ios: "\u5982\u8981\u628A\u61C9\u7528\u7A0B\u5F0F\u52A0\u81F3\u4E3B\u5C4F\u5E55, \u8ACB\u9EDE\u64CA%icon, \u7136\u5F8C<strong>\u52A0\u81F3\u4E3B\u5C4F\u5E55</strong>.", android: 'To add this web app to the home screen open the browser option menu and tap on <strong>Add to homescreen</strong>. <small>The menu can be accessed by pressing the menu hardware button if your device has one, or by tapping the top right menu icon <span class="ath-action-icon">icon</span>.</small>' } };for (var p in s.intl) {
	      s.intl[p.substr(0, 2)] = s.intl[p];
	    }s.defaults = { appID: "org.cubiq.addtohome", fontSize: 15, debug: !1, logging: !1, modal: !1, mandatory: !1, autostart: !0, skipFirstVisit: !1, startDelay: 1, lifespan: 15, displayPace: 1440, maxDisplayCount: 0, icon: !0, message: "", validLocation: [], onInit: null, onShow: null, onRemove: null, onAdd: null, onPrivate: null, privateModeOverride: !1, detectHomescreen: !1 };var m = window.navigator.userAgent,
	        f = window.navigator;o(s, { hasToken: "#ath" == document.location.hash || h.test(document.location.href) || d.test(document.location.search), isRetina: window.devicePixelRatio && window.devicePixelRatio > 1, isIDevice: /iphone|ipod|ipad/i.test(m),
	      isMobileChrome: m.indexOf("Android") > -1 && /Chrome\/[.0-9]*/.test(m) && m.indexOf("Version") == -1, isMobileIE: m.indexOf("Windows Phone") > -1, language: f.language && f.language.toLowerCase().replace("-", "_") || "" }), s.language = s.language && s.language in s.intl ? s.language : "en_us", s.isMobileSafari = s.isIDevice && m.indexOf("Safari") > -1 && m.indexOf("CriOS") < 0, s.OS = s.isIDevice ? "ios" : s.isMobileChrome ? "android" : s.isMobileIE ? "windows" : "unsupported", s.OSVersion = m.match(/(OS|Android) (\d+[_\.]\d+)/), s.OSVersion = s.OSVersion && s.OSVersion[2] ? +s.OSVersion[2].replace("_", ".") : 0, s.isStandalone = "standalone" in window.navigator && window.navigator.standalone, s.isTablet = s.isMobileSafari && m.indexOf("iPad") > -1 || s.isMobileChrome && m.indexOf("Mobile") < 0, s.isCompatible = s.isMobileSafari && s.OSVersion >= 6 || s.isMobileChrome;var v = { lastDisplayTime: 0, returningVisitor: !1, displayCount: 0, optedout: !1, added: !1 };s.removeSession = function (t) {
	      try {
	        if (!localStorage) throw new Error("localStorage is not defined");localStorage.removeItem(t || s.defaults.appID);
	      } catch (e) {}
	    }, s.doLog = function (t) {
	      this.options.logging && console.log(t);
	    }, s.Class = function (t) {
	      if (this.doLog = s.doLog, this.options = o({}, s.defaults), o(this.options, t), this.options.debug && (this.options.logging = !0), l) {
	        if (this.options.mandatory = this.options.mandatory && ("standalone" in window.navigator || this.options.debug), this.options.modal = this.options.modal || this.options.mandatory, this.options.mandatory && (this.options.startDelay = -.5), this.options.detectHomescreen = this.options.detectHomescreen === !0 ? "hash" : this.options.detectHomescreen, this.options.debug && (s.isCompatible = !0, s.OS = "string" == typeof this.options.debug ? this.options.debug : "unsupported" == s.OS ? "android" : s.OS, s.OSVersion = "ios" == s.OS ? "8" : "4"), this.container = document.documentElement, this.session = this.getItem(this.options.appID), this.session = this.session ? JSON.parse(this.session) : void 0, !s.hasToken || s.isCompatible && this.session || (s.hasToken = !1, a()), !s.isCompatible) return void this.doLog("Add to homescreen: not displaying callout because device not supported");this.session = this.session || v;try {
	          if (!localStorage) throw new Error("localStorage is not defined");localStorage.setItem(this.options.appID, JSON.stringify(this.session)), s.hasLocalStorage = !0;
	        } catch (e) {
	          s.hasLocalStorage = !1, this.options.onPrivate && this.options.onPrivate.call(this);
	        }for (var i = !this.options.validLocation.length, n = this.options.validLocation.length; n--;) {
	          if (this.options.validLocation[n].test(document.location.href)) {
	            i = !0;break;
	          }
	        }if (this.getItem("addToHome") && this.optOut(), this.session.optedout) return void this.doLog("Add to homescreen: not displaying callout because user opted out");if (this.session.added) return void this.doLog("Add to homescreen: not displaying callout because already added to the homescreen");if (!i) return void this.doLog("Add to homescreen: not displaying callout because not a valid location");if (s.isStandalone) return this.session.added || (this.session.added = !0, this.updateSession(), this.options.onAdd && s.hasLocalStorage && this.options.onAdd.call(this)), void this.doLog("Add to homescreen: not displaying callout because in standalone mode");if (this.options.detectHomescreen) {
	          if (s.hasToken) return a(), this.session.added || (this.session.added = !0, this.updateSession(), this.options.onAdd && s.hasLocalStorage && this.options.onAdd.call(this)), void this.doLog("Add to homescreen: not displaying callout because URL has token, so we are likely coming from homescreen");"hash" == this.options.detectHomescreen ? history.replaceState("", window.document.title, document.location.href + "#ath") : "smartURL" == this.options.detectHomescreen ? history.replaceState("", window.document.title, document.location.href.replace(/(\/)?$/, "/ath$1")) : history.replaceState("", window.document.title, document.location.href + (document.location.search ? "&" : "?") + "ath=");
	        }if (!this.session.returningVisitor && (this.session.returningVisitor = !0, this.updateSession(), this.options.skipFirstVisit)) return void this.doLog("Add to homescreen: not displaying callout because skipping first visit");if (!this.options.privateModeOverride && !s.hasLocalStorage) return void this.doLog("Add to homescreen: not displaying callout because browser is in private mode");this.ready = !0, this.options.onInit && this.options.onInit.call(this), this.options.autostart && (this.doLog("Add to homescreen: autostart displaying callout"), this.show());
	      }
	    }, s.Class.prototype = { events: { load: "_delayedShow", error: "_delayedShow", orientationchange: "resize", resize: "resize", scroll: "resize", click: "remove", touchmove: "_preventDefault", transitionend: "_removeElements", webkitTransitionEnd: "_removeElements", MSTransitionEnd: "_removeElements" }, handleEvent: function handleEvent(t) {
	        var e = this.events[t.type];e && this[e](t);
	      }, show: function show(t) {
	        if (this.options.autostart && !c) return void setTimeout(this.show.bind(this), 50);if (this.shown) return void this.doLog("Add to homescreen: not displaying callout because already shown on screen");var e = Date.now(),
	            i = this.session.lastDisplayTime;if (t !== !0) {
	          if (!this.ready) return void this.doLog("Add to homescreen: not displaying callout because not ready");if (e - i < 6e4 * this.options.displayPace) return void this.doLog("Add to homescreen: not displaying callout because displayed recently");if (this.options.maxDisplayCount && this.session.displayCount >= this.options.maxDisplayCount) return void this.doLog("Add to homescreen: not displaying callout because displayed too many times already");
	        }this.shown = !0, this.session.lastDisplayTime = e, this.session.displayCount++, this.updateSession(), this.applicationIcon || ("ios" == s.OS ? this.applicationIcon = document.querySelector('head link[rel^=apple-touch-icon][sizes="152x152"],head link[rel^=apple-touch-icon][sizes="144x144"],head link[rel^=apple-touch-icon][sizes="120x120"],head link[rel^=apple-touch-icon][sizes="114x114"],head link[rel^=apple-touch-icon]') : this.applicationIcon = document.querySelector('head link[rel^="shortcut icon"][sizes="196x196"],head link[rel^=apple-touch-icon]'));var n = "";"object" == _typeof(this.options.message) && s.language in this.options.message ? n = this.options.message[s.language][s.OS] : "object" == _typeof(this.options.message) && s.OS in this.options.message ? n = this.options.message[s.OS] : this.options.message in s.intl ? n = s.intl[this.options.message][s.OS] : "" !== this.options.message ? n = this.options.message : s.OS in s.intl[s.language] && (n = s.intl[s.language][s.OS]), n = "<p>" + n.replace("%icon", '<span class="ath-action-icon">icon</span>') + "</p>", this.viewport = document.createElement("div"), this.viewport.className = "ath-viewport", this.options.modal && (this.viewport.className += " ath-modal"), this.options.mandatory && (this.viewport.className += " ath-mandatory"), this.viewport.style.position = "absolute", this.element = document.createElement("div"), this.element.className = "ath-container ath-" + s.OS + " ath-" + s.OS + (s.OSVersion + "").substr(0, 1) + " ath-" + (s.isTablet ? "tablet" : "phone"), this.element.style.cssText = "-webkit-transition-property:-webkit-transform,opacity;-webkit-transition-duration:0s;-webkit-transition-timing-function:ease-out;transition-property:transform,opacity;transition-duration:0s;transition-timing-function:ease-out;", this.element.style.webkitTransform = "translate3d(0,-" + window.innerHeight + "px,0)", this.element.style.transform = "translate3d(0,-" + window.innerHeight + "px,0)", this.options.icon && this.applicationIcon && (this.element.className += " ath-icon", this.img = document.createElement("img"), this.img.className = "ath-application-icon", this.img.addEventListener("load", this, !1), this.img.addEventListener("error", this, !1), this.img.src = this.applicationIcon.href, this.element.appendChild(this.img)), this.element.innerHTML += n, this.viewport.style.left = "-99999em", this.viewport.appendChild(this.element), this.container.appendChild(this.viewport), this.img ? this.doLog("Add to homescreen: not displaying callout because waiting for img to load") : this._delayedShow();
	      }, _delayedShow: function _delayedShow(t) {
	        setTimeout(this._show.bind(this), 1e3 * this.options.startDelay + 500);
	      }, _show: function _show() {
	        var t = this;this.updateViewport(), window.addEventListener("resize", this, !1), window.addEventListener("scroll", this, !1), window.addEventListener("orientationchange", this, !1), this.options.modal && document.addEventListener("touchmove", this, !0), this.options.mandatory || setTimeout(function () {
	          t.element.addEventListener("click", t, !0);
	        }, 1e3), setTimeout(function () {
	          t.element.style.webkitTransitionDuration = "1.2s", t.element.style.transitionDuration = "1.2s", t.element.style.webkitTransform = "translate3d(0,0,0)", t.element.style.transform = "translate3d(0,0,0)";
	        }, 0), this.options.lifespan && (this.removeTimer = setTimeout(this.remove.bind(this), 1e3 * this.options.lifespan)), this.options.onShow && this.options.onShow.call(this);
	      }, remove: function remove() {
	        clearTimeout(this.removeTimer), this.img && (this.img.removeEventListener("load", this, !1), this.img.removeEventListener("error", this, !1)), window.removeEventListener("resize", this, !1), window.removeEventListener("scroll", this, !1), window.removeEventListener("orientationchange", this, !1), document.removeEventListener("touchmove", this, !0), this.element.removeEventListener("click", this, !0), this.element.addEventListener("transitionend", this, !1), this.element.addEventListener("webkitTransitionEnd", this, !1), this.element.addEventListener("MSTransitionEnd", this, !1), this.element.style.webkitTransitionDuration = "0.3s", this.element.style.opacity = "0";
	      }, _removeElements: function _removeElements() {
	        this.element.removeEventListener("transitionend", this, !1), this.element.removeEventListener("webkitTransitionEnd", this, !1), this.element.removeEventListener("MSTransitionEnd", this, !1), this.container.removeChild(this.viewport), this.shown = !1, this.options.onRemove && this.options.onRemove.call(this);
	      }, updateViewport: function updateViewport() {
	        if (this.shown) {
	          this.viewport.style.width = window.innerWidth + "px", this.viewport.style.height = window.innerHeight + "px", this.viewport.style.left = window.scrollX + "px", this.viewport.style.top = window.scrollY + "px";var t = document.documentElement.clientWidth;this.orientation = t > document.documentElement.clientHeight ? "landscape" : "portrait";var e = "ios" == s.OS ? "portrait" == this.orientation ? screen.width : screen.height : screen.width;this.scale = screen.width > t ? 1 : e / window.innerWidth, this.element.style.fontSize = this.options.fontSize / this.scale + "px";
	        }
	      }, resize: function resize() {
	        clearTimeout(this.resizeTimer), this.resizeTimer = setTimeout(this.updateViewport.bind(this), 100);
	      }, updateSession: function updateSession() {
	        s.hasLocalStorage !== !1 && localStorage && localStorage.setItem(this.options.appID, JSON.stringify(this.session));
	      }, clearSession: function clearSession() {
	        this.session = v, this.updateSession();
	      }, getItem: function getItem(t) {
	        try {
	          if (!localStorage) throw new Error("localStorage is not defined");return localStorage.getItem(t);
	        } catch (e) {
	          s.hasLocalStorage = !1;
	        }
	      }, optOut: function optOut() {
	        this.session.optedout = !0, this.updateSession();
	      }, optIn: function optIn() {
	        this.session.optedout = !1, this.updateSession();
	      }, clearDisplayCount: function clearDisplayCount() {
	        this.session.displayCount = 0, this.updateSession();
	      }, _preventDefault: function _preventDefault(t) {
	        t.preventDefault(), t.stopPropagation();
	      } }, s.VERSION = "3.2.2", t.exports = r.addToHomescreen = s;
	  }, function (t, e, i) {
	    "use strict";
	    var n = i(1),
	        s = i(2),
	        o = function o(t, e) {
	      var i = this;this.options = n.extend({}, o.DEFAULTS, e), this.$element = n(t), this.$element.addClass("am-fade am-in").on("click.alert.amui", ".am-close", function () {
	        i.close();
	      });
	    };o.DEFAULTS = { removeElement: !0 }, o.prototype.close = function () {
	      function t() {
	        e.trigger("closed.alert.amui").remove();
	      }var e = this.$element;e.trigger("close.alert.amui").removeClass("am-in"), s.support.transition && e.hasClass("am-fade") ? e.one(s.support.transition.end, t).emulateTransitionEnd(200) : t();
	    }, s.plugin("alert", o), n(document).on("click.alert.amui.data-api", "[data-am-alert]", function (t) {
	      var e = n(t.target);e.is(".am-close") && n(this).alert("close");
	    }), t.exports = o;
	  }, function (t, e, i) {
	    "use strict";
	    var n = i(1),
	        s = i(2),
	        o = function o(t, e) {
	      this.$element = n(t), this.options = n.extend({}, o.DEFAULTS, e), this.isLoading = !1, this.hasSpinner = !1;
	    };o.DEFAULTS = { loadingText: "loading...", disabledClassName: "am-disabled", activeClassName: "am-active", spinner: void 0 }, o.prototype.setState = function (t, e) {
	      var i = this.$element,
	          o = "disabled",
	          a = i.data(),
	          r = this.options,
	          l = i.is("input") ? "val" : "html",
	          c = "am-btn-" + t + " " + r.disabledClassName;t += "Text", r.resetText || (r.resetText = i[l]()), s.support.animation && r.spinner && "html" === l && !this.hasSpinner && (r.loadingText = '<span class="am-icon-' + r.spinner + ' am-icon-spin"></span>' + r.loadingText, this.hasSpinner = !0), e = e || (void 0 === a[t] ? r[t] : a[t]), i[l](e), setTimeout(n.proxy(function () {
	        "loadingText" === t ? (i.addClass(c).attr(o, o), this.isLoading = !0) : this.isLoading && (i.removeClass(c).removeAttr(o), this.isLoading = !1);
	      }, this), 0);
	    }, o.prototype.toggle = function () {
	      var t = !0,
	          e = this.$element,
	          i = this.$element.parent('[class*="am-btn-group"]'),
	          n = o.DEFAULTS.activeClassName;if (i.length) {
	        var s = this.$element.find("input");"radio" == s.prop("type") && (s.prop("checked") && e.hasClass(n) ? t = !1 : i.find("." + n).removeClass(n)), t && s.prop("checked", !e.hasClass(n)).trigger("change");
	      }t && (e.toggleClass(n), e.hasClass(n) || e.blur());
	    }, s.plugin("button", o, { dataOptions: "data-am-loading", methodCall: function methodCall(t, e) {
	        "toggle" === t[0] ? e.toggle() : "string" == typeof t[0] && e.setState.apply(e, t);
	      } }), n(document).on("click.button.amui.data-api", "[data-am-button]", function (t) {
	      t.preventDefault();var e = n(t.target);e.hasClass("am-btn") || (e = e.closest(".am-btn")), e.button("toggle");
	    }), s.ready(function (t) {
	      n("[data-am-loading]", t).button(), n("[data-am-button]", t).find("input:checked").each(function () {
	        n(this).parent("label").addClass(o.DEFAULTS.activeClassName);
	      });
	    }), t.exports = s.button = o;
	  }, function (t, e, i) {
	    "use strict";
	    function n(t) {
	      return this.each(function () {
	        var e = s(this),
	            i = e.data("amui.collapse"),
	            n = s.extend({}, a.DEFAULTS, o.utils.options(e.attr("data-am-collapse")), "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t);!i && n.toggle && "open" === t && (t = !t), i || e.data("amui.collapse", i = new a(this, n)), "string" == typeof t && i[t]();
	      });
	    }var s = i(1),
	        o = i(2),
	        a = function a(t, e) {
	      this.$element = s(t), this.options = s.extend({}, a.DEFAULTS, e), this.transitioning = null, this.options.parent && (this.$parent = s(this.options.parent)), this.options.toggle && this.toggle();
	    };a.DEFAULTS = { toggle: !0 }, a.prototype.open = function () {
	      if (!this.transitioning && !this.$element.hasClass("am-in")) {
	        var t = s.Event("open.collapse.amui");if (this.$element.trigger(t), !t.isDefaultPrevented()) {
	          var e = this.$parent && this.$parent.find("> .am-panel > .am-in");if (e && e.length) {
	            var i = e.data("amui.collapse");if (i && i.transitioning) return;n.call(e, "close"), i || e.data("amui.collapse", null);
	          }this.$element.removeClass("am-collapse").addClass("am-collapsing").height(0), this.transitioning = 1;var a = function a() {
	            this.$element.removeClass("am-collapsing").addClass("am-collapse am-in").height("").trigger("opened.collapse.amui"), this.transitioning = 0;
	          };if (!o.support.transition) return a.call(this);var r = this.$element[0].scrollHeight;this.$element.one(o.support.transition.end, s.proxy(a, this)).emulateTransitionEnd(300).css({ height: r });
	        }
	      }
	    }, a.prototype.close = function () {
	      if (!this.transitioning && this.$element.hasClass("am-in")) {
	        var t = s.Event("close.collapse.amui");if (this.$element.trigger(t), !t.isDefaultPrevented()) {
	          this.$element.height(this.$element.height()).redraw(), this.$element.addClass("am-collapsing").removeClass("am-collapse am-in"), this.transitioning = 1;var e = function e() {
	            this.transitioning = 0, this.$element.trigger("closed.collapse.amui").removeClass("am-collapsing").addClass("am-collapse");
	          };return o.support.transition ? void this.$element.height(0).one(o.support.transition.end, s.proxy(e, this)).emulateTransitionEnd(300) : e.call(this);
	        }
	      }
	    }, a.prototype.toggle = function () {
	      this[this.$element.hasClass("am-in") ? "close" : "open"]();
	    }, s.fn.collapse = n, s(document).on("click.collapse.amui.data-api", "[data-am-collapse]", function (t) {
	      var e,
	          i = s(this),
	          a = o.utils.options(i.attr("data-am-collapse")),
	          r = a.target || t.preventDefault() || (e = i.attr("href")) && e.replace(/.*(?=#[^\s]+$)/, ""),
	          l = s(r),
	          c = l.data("amui.collapse"),
	          u = c ? "toggle" : a,
	          h = a.parent,
	          d = h && s(h);c && c.transitioning || (d && d.find("[data-am-collapse]").not(i).addClass("am-collapsed"), i[l.hasClass("am-in") ? "addClass" : "removeClass"]("am-collapsed")), n.call(l, u);
	    }), t.exports = o.collapse = a;
	  }, function (t, e, i) {
	    "use strict";
	    var n = i(1),
	        s = i(2),
	        o = n(document),
	        a = function a(t, e) {
	      if (this.$element = n(t), this.options = n.extend({}, a.DEFAULTS, e), this.format = r.parseFormat(this.options.format), this.$element.data("date", this.options.date), this.language = this.getLocale(this.options.locale), this.theme = this.options.theme, this.$picker = n(r.template).appendTo("body").on({ click: n.proxy(this.click, this) }), this.isInput = this.$element.is("input"), this.component = !!this.$element.is(".am-datepicker-date") && this.$element.find(".am-datepicker-add-on"), this.isInput ? this.$element.on({ "click.datepicker.amui": n.proxy(this.open, this), "keyup.datepicker.amui": n.proxy(this.update, this) }) : this.component ? this.component.on("click.datepicker.amui", n.proxy(this.open, this)) : this.$element.on("click.datepicker.amui", n.proxy(this.open, this)), this.minViewMode = this.options.minViewMode, "string" == typeof this.minViewMode) switch (this.minViewMode) {case "months":
	          this.minViewMode = 1;break;case "years":
	          this.minViewMode = 2;break;default:
	          this.minViewMode = 0;}if (this.viewMode = this.options.viewMode, "string" == typeof this.viewMode) switch (this.viewMode) {case "months":
	          this.viewMode = 1;break;case "years":
	          this.viewMode = 2;break;default:
	          this.viewMode = 0;}this.startViewMode = this.viewMode, this.weekStart = (this.options.weekStart || a.locales[this.language].weekStart || 0) % 7, this.weekEnd = (this.weekStart + 6) % 7, this.onRender = this.options.onRender, this.setTheme(), this.fillDow(), this.fillMonths(), this.update(), this.showMode();
	    };a.DEFAULTS = { locale: "zh_CN", format: "yyyy-mm-dd", weekStart: void 0, viewMode: 0, minViewMode: 0, date: "", theme: "", autoClose: 1, onRender: function onRender(t) {
	        return "";
	      } }, a.prototype.open = function (t) {
	      this.$picker.show(), this.height = this.component ? this.component.outerHeight() : this.$element.outerHeight(), this.place(), n(window).on("resize.datepicker.amui", n.proxy(this.place, this)), t && (t.stopPropagation(), t.preventDefault());var e = this;o.on("mousedown.datapicker.amui touchstart.datepicker.amui", function (t) {
	        0 === n(t.target).closest(".am-datepicker").length && e.close();
	      }), this.$element.trigger({ type: "open.datepicker.amui", date: this.date });
	    }, a.prototype.close = function () {
	      this.$picker.hide(), n(window).off("resize.datepicker.amui", this.place), this.viewMode = this.startViewMode, this.showMode(), this.isInput || n(document).off("mousedown.datapicker.amui touchstart.datepicker.amui", this.close), this.$element.trigger({ type: "close.datepicker.amui", date: this.date });
	    }, a.prototype.set = function () {
	      var t,
	          e = r.formatDate(this.date, this.format);this.isInput ? t = this.$element.attr("value", e) : (this.component && (t = this.$element.find("input").attr("value", e)), this.$element.data("date", e)), t && t.trigger("change");
	    }, a.prototype.setValue = function (t) {
	      "string" == typeof t ? this.date = r.parseDate(t, this.format) : this.date = new Date(t), this.set(), this.viewDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1, 0, 0, 0, 0), this.fill();
	    }, a.prototype.place = function () {
	      var t = this.component ? this.component.offset() : this.$element.offset(),
	          e = this.component ? this.component.width() : this.$element.width(),
	          i = t.top + this.height,
	          n = t.left,
	          s = o.width() - t.left - e,
	          a = this.isOutView();if (this.$picker.removeClass("am-datepicker-right"), this.$picker.removeClass("am-datepicker-up"), o.width() > 640) {
	        if (a.outRight) return this.$picker.addClass("am-datepicker-right"), void this.$picker.css({ top: i, left: "auto", right: s });a.outBottom && (this.$picker.addClass("am-datepicker-up"), i = t.top - this.$picker.outerHeight(!0));
	      } else n = 0;this.$picker.css({ top: i, left: n });
	    }, a.prototype.update = function (t) {
	      this.date = r.parseDate("string" == typeof t ? t : this.isInput ? this.$element.prop("value") : this.$element.data("date"), this.format), this.viewDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1, 0, 0, 0, 0), this.fill();
	    }, a.prototype.fillDow = function () {
	      for (var t = this.weekStart, e = "<tr>"; t < this.weekStart + 7;) {
	        e += '<th class="am-datepicker-dow">' + a.locales[this.language].daysMin[t++ % 7] + "</th>";
	      }e += "</tr>", this.$picker.find(".am-datepicker-days thead").append(e);
	    }, a.prototype.fillMonths = function () {
	      for (var t = "", e = 0; e < 12;) {
	        t += '<span class="am-datepicker-month">' + a.locales[this.language].monthsShort[e++] + "</span>";
	      }this.$picker.find(".am-datepicker-months td").append(t);
	    }, a.prototype.fill = function () {
	      var t = new Date(this.viewDate),
	          e = t.getFullYear(),
	          i = t.getMonth(),
	          n = this.date.valueOf(),
	          s = new Date(e, i - 1, 28, 0, 0, 0, 0),
	          o = r.getDaysInMonth(s.getFullYear(), s.getMonth()),
	          l = this.$picker.find(".am-datepicker-days .am-datepicker-select");"zh_CN" === this.language ? l.text(e + a.locales[this.language].year[0] + " " + a.locales[this.language].months[i]) : l.text(a.locales[this.language].months[i] + " " + e), s.setDate(o), s.setDate(o - (s.getDay() - this.weekStart + 7) % 7);var c = new Date(s);c.setDate(c.getDate() + 42), c = c.valueOf();for (var u, h, d, p = []; s.valueOf() < c;) {
	        s.getDay() === this.weekStart && p.push("<tr>"), u = this.onRender(s, 0), h = s.getFullYear(), d = s.getMonth(), d < i && h === e || h < e ? u += " am-datepicker-old" : (d > i && h === e || h > e) && (u += " am-datepicker-new"), s.valueOf() === n && (u += " am-active"), p.push('<td class="am-datepicker-day ' + u + '">' + s.getDate() + "</td>"), s.getDay() === this.weekEnd && p.push("</tr>"), s.setDate(s.getDate() + 1);
	      }this.$picker.find(".am-datepicker-days tbody").empty().append(p.join(""));var m = this.date.getFullYear(),
	          f = this.$picker.find(".am-datepicker-months").find(".am-datepicker-select").text(e);f = f.end().find("span").removeClass("am-active").removeClass("am-disabled");for (var v = 0; v < 12;) {
	        this.onRender(t.setFullYear(e, v), 1) && f.eq(v).addClass("am-disabled"), v++;
	      }m === e && f.eq(this.date.getMonth()).removeClass("am-disabled").addClass("am-active"), p = "", e = 10 * parseInt(e / 10, 10);var g,
	          y = this.$picker.find(".am-datepicker-years").find(".am-datepicker-select").text(e + "-" + (e + 9)).end().find("td"),
	          w = new Date(this.viewDate);e -= 1;for (var b = -1; b < 11; b++) {
	        g = this.onRender(w.setFullYear(e), 2), p += '<span class="' + g + (b === -1 || 10 === b ? " am-datepicker-old" : "") + (m === e ? " am-active" : "") + '">' + e + "</span>", e += 1;
	      }y.html(p);
	    }, a.prototype.click = function (t) {
	      t.stopPropagation(), t.preventDefault();var e,
	          i,
	          s = this.$picker.find(".am-datepicker-days").find(".am-active"),
	          o = this.$picker.find(".am-datepicker-months"),
	          a = o.find(".am-active").index(),
	          l = n(t.target).closest("span, td, th");if (1 === l.length) switch (l[0].nodeName.toLowerCase()) {case "th":
	          switch (l[0].className) {case "am-datepicker-switch":
	              this.showMode(1);break;case "am-datepicker-prev":case "am-datepicker-next":
	              this.viewDate["set" + r.modes[this.viewMode].navFnc].call(this.viewDate, this.viewDate["get" + r.modes[this.viewMode].navFnc].call(this.viewDate) + r.modes[this.viewMode].navStep * ("am-datepicker-prev" === l[0].className ? -1 : 1)), this.fill(), this.set();}break;case "span":
	          if (l.is(".am-disabled")) return;l.is(".am-datepicker-month") ? (e = l.parent().find("span").index(l), l.is(".am-active") ? this.viewDate.setMonth(e, s.text()) : this.viewDate.setMonth(e)) : (i = parseInt(l.text(), 10) || 0, l.is(".am-active") ? this.viewDate.setFullYear(i, a, s.text()) : this.viewDate.setFullYear(i)), 0 !== this.viewMode && (this.date = new Date(this.viewDate), this.$element.trigger({ type: "changeDate.datepicker.amui", date: this.date, viewMode: r.modes[this.viewMode].clsName })), this.showMode(-1), this.fill(), this.set();break;case "td":
	          if (l.is(".am-datepicker-day") && !l.is(".am-disabled")) {
	            var c = parseInt(l.text(), 10) || 1;e = this.viewDate.getMonth(), l.is(".am-datepicker-old") ? e -= 1 : l.is(".am-datepicker-new") && (e += 1), i = this.viewDate.getFullYear(), this.date = new Date(i, e, c, 0, 0, 0, 0), this.viewDate = new Date(i, e, Math.min(28, c), 0, 0, 0, 0), this.fill(), this.set(), this.$element.trigger({ type: "changeDate.datepicker.amui", date: this.date, viewMode: r.modes[this.viewMode].clsName }), this.options.autoClose && this.close();
	          }}
	    }, a.prototype.mousedown = function (t) {
	      t.stopPropagation(), t.preventDefault();
	    }, a.prototype.showMode = function (t) {
	      t && (this.viewMode = Math.max(this.minViewMode, Math.min(2, this.viewMode + t))), this.$picker.find(">div").hide().filter(".am-datepicker-" + r.modes[this.viewMode].clsName).show();
	    }, a.prototype.isOutView = function () {
	      var t = this.component ? this.component.offset() : this.$element.offset(),
	          e = { outRight: !1, outBottom: !1 },
	          i = this.$picker,
	          n = t.left + i.outerWidth(!0),
	          s = t.top + i.outerHeight(!0) + this.$element.innerHeight();return n > o.width() && (e.outRight = !0), s > o.height() && (e.outBottom = !0), e;
	    }, a.prototype.getLocale = function (t) {
	      return t || (t = navigator.language && navigator.language.split("-"), t[1] = t[1].toUpperCase(), t = t.join("_")), a.locales[t] || (t = "en_US"), t;
	    }, a.prototype.setTheme = function () {
	      this.theme && this.$picker.addClass("am-datepicker-" + this.theme);
	    }, a.locales = { en_US: { days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], weekStart: 0 }, zh_CN: { days: ["\u661F\u671F\u65E5", "\u661F\u671F\u4E00", "\u661F\u671F\u4E8C", "\u661F\u671F\u4E09", "\u661F\u671F\u56DB", "\u661F\u671F\u4E94", "\u661F\u671F\u516D"], daysShort: ["\u5468\u65E5", "\u5468\u4E00", "\u5468\u4E8C", "\u5468\u4E09", "\u5468\u56DB", "\u5468\u4E94", "\u5468\u516D"], daysMin: ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"], months: ["\u4E00\u6708", "\u4E8C\u6708", "\u4E09\u6708", "\u56DB\u6708", "\u4E94\u6708", "\u516D\u6708", "\u4E03\u6708", "\u516B\u6708", "\u4E5D\u6708", "\u5341\u6708", "\u5341\u4E00\u6708", "\u5341\u4E8C\u6708"], monthsShort: ["\u4E00\u6708", "\u4E8C\u6708", "\u4E09\u6708", "\u56DB\u6708", "\u4E94\u6708", "\u516D\u6708", "\u4E03\u6708", "\u516B\u6708", "\u4E5D\u6708", "\u5341\u6708", "\u5341\u4E00\u6708", "\u5341\u4E8C\u6708"], weekStart: 1, year: ["\u5E74"] } };var r = { modes: [{ clsName: "days", navFnc: "Month", navStep: 1 }, { clsName: "months", navFnc: "FullYear", navStep: 1 }, { clsName: "years", navFnc: "FullYear", navStep: 10 }], isLeapYear: function isLeapYear(t) {
	        return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0;
	      }, getDaysInMonth: function getDaysInMonth(t, e) {
	        return [31, r.isLeapYear(t) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e];
	      }, parseFormat: function parseFormat(t) {
	        var e = t.match(/[.\/\-\s].*?/),
	            i = t.split(/\W+/);if (!e || !i || 0 === i.length) throw new Error("Invalid date format.");return { separator: e, parts: i };
	      }, parseDate: function parseDate(t, e) {
	        var i,
	            n = t.split(e.separator);if (t = new Date(), t.setHours(0), t.setMinutes(0), t.setSeconds(0), t.setMilliseconds(0), n.length === e.parts.length) {
	          for (var s = t.getFullYear(), o = t.getDate(), a = t.getMonth(), r = 0, l = e.parts.length; r < l; r++) {
	            switch (i = parseInt(n[r], 10) || 1, e.parts[r]) {case "dd":case "d":
	                o = i, t.setDate(i);break;case "mm":case "m":
	                a = i - 1, t.setMonth(i - 1);break;case "yy":
	                s = 2e3 + i, t.setFullYear(2e3 + i);break;case "yyyy":
	                s = i, t.setFullYear(i);}
	          }t = new Date(s, a, o, 0, 0, 0);
	        }return t;
	      }, formatDate: function formatDate(t, e) {
	        var i = { d: t.getDate(), m: t.getMonth() + 1, yy: t.getFullYear().toString().substring(2), yyyy: t.getFullYear() },
	            n = [];i.dd = (i.d < 10 ? "0" : "") + i.d, i.mm = (i.m < 10 ? "0" : "") + i.m;for (var s = 0, o = e.parts.length; s < o; s++) {
	          n.push(i[e.parts[s]]);
	        }return n.join(e.separator);
	      }, headTemplate: '<thead><tr class="am-datepicker-header"><th class="am-datepicker-prev"><i class="am-datepicker-prev-icon"></i></th><th colspan="5" class="am-datepicker-switch"><div class="am-datepicker-select"></div></th><th class="am-datepicker-next"><i class="am-datepicker-next-icon"></i></th></tr></thead>', contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>' };r.template = '<div class="am-datepicker am-datepicker-dropdown"><div class="am-datepicker-caret"></div><div class="am-datepicker-days"><table class="am-datepicker-table">' + r.headTemplate + '<tbody></tbody></table></div><div class="am-datepicker-months"><table class="am-datepicker-table">' + r.headTemplate + r.contTemplate + '</table></div><div class="am-datepicker-years"><table class="am-datepicker-table">' + r.headTemplate + r.contTemplate + "</table></div></div>", s.plugin("datepicker", a), s.ready(function (t) {
	      n("[data-am-datepicker]").datepicker();
	    }), t.exports = s.datepicker = a;
	  }, function (t, e, i) {
	    "use strict";
	    var n = i(1),
	        s = i(2),
	        o = n(document),
	        a = s.support.transition,
	        r = function r() {
	      this.id = s.utils.generateGUID("am-dimmer"), this.$element = n(r.DEFAULTS.tpl, { id: this.id }), this.inited = !1, this.scrollbarWidth = 0, this.$used = n([]);
	    };r.DEFAULTS = { tpl: '<div class="am-dimmer" data-am-dimmer></div>' }, r.prototype.init = function () {
	      return this.inited || (n(document.body).append(this.$element), this.inited = !0, o.trigger("init.dimmer.amui"), this.$element.on("touchmove.dimmer.amui", function (t) {
	        t.preventDefault();
	      })), this;
	    }, r.prototype.open = function (t) {
	      this.inited || this.init();var e = this.$element;return t && (this.$used = this.$used.add(n(t))), this.checkScrollbar().setScrollbar(), e.show().trigger("open.dimmer.amui"), a && e.off(a.end), setTimeout(function () {
	        e.addClass("am-active");
	      }, 0), this;
	    }, r.prototype.close = function (t, e) {
	      function i() {
	        s.hide(), this.resetScrollbar();
	      }if (this.$used = this.$used.not(n(t)), !e && this.$used.length) return this;var s = this.$element;return s.removeClass("am-active").trigger("close.dimmer.amui"), i.call(this), this;
	    }, r.prototype.checkScrollbar = function () {
	      return this.scrollbarWidth = s.utils.measureScrollbar(), this;
	    }, r.prototype.setScrollbar = function () {
	      var t = n(document.body),
	          e = parseInt(t.css("padding-right") || 0, 10);return this.scrollbarWidth && t.css("padding-right", e + this.scrollbarWidth), t.addClass("am-dimmer-active"), this;
	    }, r.prototype.resetScrollbar = function () {
	      return n(document.body).css("padding-right", "").removeClass("am-dimmer-active"), this;
	    }, t.exports = s.dimmer = new r();
	  }, function (t, e, i) {
	    "use strict";
	    var n = i(1),
	        s = i(2),
	        o = s.support.animation,
	        a = function a(t, e) {
	      this.options = n.extend({}, a.DEFAULTS, e), e = this.options, this.$element = n(t), this.$toggle = this.$element.find(e.selector.toggle), this.$dropdown = this.$element.find(e.selector.dropdown), this.$boundary = e.boundary === window ? n(window) : this.$element.closest(e.boundary), this.$justify = e.justify && n(e.justify).length && n(e.justify) || void 0, !this.$boundary.length && (this.$boundary = n(window)), this.active = !!this.$element.hasClass("am-active"), this.animating = null, this.events();
	    };a.DEFAULTS = { animation: "am-animation-slide-top-fixed", boundary: window, justify: void 0, selector: { dropdown: ".am-dropdown-content", toggle: ".am-dropdown-toggle" }, trigger: "click" }, a.prototype.toggle = function () {
	      this.clear(), this.animating || this[this.active ? "close" : "open"]();
	    }, a.prototype.open = function (t) {
	      var e = this.$toggle,
	          i = this.$element,
	          s = this.$dropdown;if (!e.is(".am-disabled, :disabled") && !this.active) {
	        i.trigger("open.dropdown.amui").addClass("am-active"), e.trigger("focus"), this.checkDimensions(t);var a = n.proxy(function () {
	          i.trigger("opened.dropdown.amui"), this.active = !0, this.animating = 0;
	        }, this);o ? (this.animating = 1, s.addClass(this.options.animation).on(o.end + ".open.dropdown.amui", n.proxy(function () {
	          a(), s.removeClass(this.options.animation);
	        }, this))) : a();
	      }
	    }, a.prototype.close = function () {
	      if (this.active) {
	        var t = "am-dropdown-animation",
	            e = this.$element,
	            i = this.$dropdown;e.trigger("close.dropdown.amui");var s = n.proxy(function () {
	          e.removeClass("am-active").trigger("closed.dropdown.amui"), this.active = !1, this.animating = 0, this.$toggle.blur();
	        }, this);o ? (i.removeClass(this.options.animation), i.addClass(t), this.animating = 1, i.one(o.end + ".close.dropdown.amui", function () {
	          i.removeClass(t), s();
	        })) : s();
	      }
	    }, a.prototype.enable = function () {
	      this.$toggle.prop("disabled", !1);
	    }, a.prototype.disable = function () {
	      this.$toggle.prop("disabled", !0);
	    }, a.prototype.checkDimensions = function (t) {
	      if (this.$dropdown.length) {
	        var e = this.$dropdown;t && t.offset && e.offset(t.offset);var i = e.offset(),
	            s = e.outerWidth(),
	            o = this.$boundary.width(),
	            a = n.isWindow(this.boundary) && this.$boundary.offset() ? this.$boundary.offset().left : 0;this.$justify && e.css({ "min-width": this.$justify.css("width") }), s + (i.left - a) > o && this.$element.addClass("am-dropdown-flip");
	      }
	    }, a.prototype.clear = function () {
	      n("[data-am-dropdown]").not(this.$element).each(function () {
	        var t = n(this).data("amui.dropdown");t && t.close();
	      });
	    }, a.prototype.events = function () {
	      var t = "dropdown.amui",
	          e = this.$toggle;e.on("click." + t, n.proxy(function (t) {
	        t.preventDefault(), this.toggle();
	      }, this)), n(document).on("keydown.dropdown.amui", n.proxy(function (t) {
	        27 === t.keyCode && this.active && this.close();
	      }, this)).on("click.outer.dropdown.amui", n.proxy(function (t) {
	        !this.active || this.$element[0] !== t.target && this.$element.find(t.target).length || this.close();
	      }, this));
	    }, s.plugin("dropdown", a), s.ready(function (t) {
	      n("[data-am-dropdown]", t).dropdown();
	    }), n(document).on("click.dropdown.amui.data-api", ".am-dropdown form", function (t) {
	      t.stopPropagation();
	    }), t.exports = s.dropdown = a;
	  }, function (t, e, i) {
	    (function (e) {
	      var n = i(1),
	          s = i(2),
	          o = !0;n.flexslider = function (t, i) {
	        var s = n(t);s.vars = n.extend({}, n.flexslider.defaults, i);var a,
	            r = s.vars.namespace,
	            l = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
	            c = ("ontouchstart" in window || l || window.DocumentTouch && document instanceof DocumentTouch) && s.vars.touch,
	            u = "click touchend MSPointerUp keyup",
	            h = "",
	            d = "vertical" === s.vars.direction,
	            p = s.vars.reverse,
	            m = s.vars.itemWidth > 0,
	            f = "fade" === s.vars.animation,
	            v = "" !== s.vars.asNavFor,
	            g = {};n.data(t, "flexslider", s), g = { init: function init() {
	            s.animating = !1, s.currentSlide = parseInt(s.vars.startAt ? s.vars.startAt : 0, 10), isNaN(s.currentSlide) && (s.currentSlide = 0), s.animatingTo = s.currentSlide, s.atEnd = 0 === s.currentSlide || s.currentSlide === s.last, s.containerSelector = s.vars.selector.substr(0, s.vars.selector.search(" ")), s.slides = n(s.vars.selector, s), s.container = n(s.containerSelector, s), s.count = s.slides.length, s.syncExists = n(s.vars.sync).length > 0, "slide" === s.vars.animation && (s.vars.animation = "swing"), s.prop = d ? "top" : "marginLeft", s.args = {}, s.manualPause = !1, s.stopped = !1, s.started = !1, s.startTimeout = null, s.transitions = !s.vars.video && !f && s.vars.useCSS && function () {
	              var t = document.createElement("div"),
	                  e = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];for (var i in e) {
	                if (void 0 !== t.style[e[i]]) return s.pfx = e[i].replace("Perspective", "").toLowerCase(), s.prop = "-" + s.pfx + "-transform", !0;
	              }return !1;
	            }(), s.ensureAnimationEnd = "", "" !== s.vars.controlsContainer && (s.controlsContainer = n(s.vars.controlsContainer).length > 0 && n(s.vars.controlsContainer)), "" !== s.vars.manualControls && (s.manualControls = n(s.vars.manualControls).length > 0 && n(s.vars.manualControls)), "" !== s.vars.customDirectionNav && (s.customDirectionNav = 2 === n(s.vars.customDirectionNav).length && n(s.vars.customDirectionNav)), s.vars.randomize && (s.slides.sort(function () {
	              return Math.round(Math.random()) - .5;
	            }), s.container.empty().append(s.slides)), s.doMath(), s.setup("init"), s.vars.controlNav && g.controlNav.setup(), s.vars.directionNav && g.directionNav.setup(), s.vars.keyboard && (1 === n(s.containerSelector).length || s.vars.multipleKeyboard) && n(document).bind("keyup", function (t) {
	              var e = t.keyCode;if (!s.animating && (39 === e || 37 === e)) {
	                var i = 39 === e ? s.getTarget("next") : 37 === e && s.getTarget("prev");s.flexAnimate(i, s.vars.pauseOnAction);
	              }
	            }), s.vars.mousewheel && s.bind("mousewheel", function (t, e, i, n) {
	              t.preventDefault();var o = e < 0 ? s.getTarget("next") : s.getTarget("prev");s.flexAnimate(o, s.vars.pauseOnAction);
	            }), s.vars.pausePlay && g.pausePlay.setup(), s.vars.slideshow && s.vars.pauseInvisible && g.pauseInvisible.init(), s.vars.slideshow && (s.vars.pauseOnHover && s.hover(function () {
	              s.manualPlay || s.manualPause || s.pause();
	            }, function () {
	              s.manualPause || s.manualPlay || s.stopped || s.play();
	            }), s.vars.pauseInvisible && g.pauseInvisible.isHidden() || (s.vars.initDelay > 0 ? s.startTimeout = setTimeout(s.play, s.vars.initDelay) : s.play())), v && g.asNav.setup(), c && s.vars.touch && g.touch(), (!f || f && s.vars.smoothHeight) && n(window).bind("resize orientationchange focus", g.resize), s.find("img").attr("draggable", "false"), setTimeout(function () {
	              s.vars.start(s);
	            }, 200);
	          }, asNav: { setup: function setup() {
	              s.asNav = !0, s.animatingTo = Math.floor(s.currentSlide / s.move), s.currentItem = s.currentSlide, s.slides.removeClass(r + "active-slide").eq(s.currentItem).addClass(r + "active-slide"), l ? (t._slider = s, s.slides.each(function () {
	                var t = this;t._gesture = new MSGesture(), t._gesture.target = t, t.addEventListener("MSPointerDown", function (t) {
	                  t.preventDefault(), t.currentTarget._gesture && t.currentTarget._gesture.addPointer(t.pointerId);
	                }, !1), t.addEventListener("MSGestureTap", function (t) {
	                  t.preventDefault();var e = n(this),
	                      i = e.index();n(s.vars.asNavFor).data("flexslider").animating || e.hasClass("active") || (s.direction = s.currentItem < i ? "next" : "prev", s.flexAnimate(i, s.vars.pauseOnAction, !1, !0, !0));
	                });
	              })) : s.slides.on(u, function (t) {
	                t.preventDefault();var e = n(this),
	                    i = e.index(),
	                    o = e.offset().left - n(s).scrollLeft();o <= 0 && e.hasClass(r + "active-slide") ? s.flexAnimate(s.getTarget("prev"), !0) : n(s.vars.asNavFor).data("flexslider").animating || e.hasClass(r + "active-slide") || (s.direction = s.currentItem < i ? "next" : "prev", s.flexAnimate(i, s.vars.pauseOnAction, !1, !0, !0));
	              });
	            } }, controlNav: { setup: function setup() {
	              s.manualControls ? g.controlNav.setupManual() : g.controlNav.setupPaging();
	            }, setupPaging: function setupPaging() {
	              var t,
	                  e,
	                  i = "thumbnails" === s.vars.controlNav ? "control-thumbs" : "control-paging",
	                  o = 1;if (s.controlNavScaffold = n('<ol class="' + r + "control-nav " + r + i + '"></ol>'), s.pagingCount > 1) for (var a = 0; a < s.pagingCount; a++) {
	                e = s.slides.eq(a), void 0 === e.attr("data-thumb-alt") && e.attr("data-thumb-alt", "");var l = "" !== e.attr("data-thumb-alt") ? l = ' alt="' + e.attr("data-thumb-alt") + '"' : "";if (t = "thumbnails" === s.vars.controlNav ? '<img src="' + e.attr("data-thumb") + '"' + l + "/>" : '<a href="#">' + o + "</a>", "thumbnails" === s.vars.controlNav && !0 === s.vars.thumbCaptions) {
	                  var c = e.attr("data-thumbcaption");"" !== c && void 0 !== c && (t += '<span class="' + r + 'caption">' + c + "</span>");
	                }s.controlNavScaffold.append("<li>" + t + "<i></i></li>"), o++;
	              }s.controlsContainer ? n(s.controlsContainer).append(s.controlNavScaffold) : s.append(s.controlNavScaffold), g.controlNav.set(), g.controlNav.active(), s.controlNavScaffold.delegate("a, img", u, function (t) {
	                if (t.preventDefault(), "" === h || h === t.type) {
	                  var e = n(this),
	                      i = s.controlNav.index(e);e.hasClass(r + "active") || (s.direction = i > s.currentSlide ? "next" : "prev", s.flexAnimate(i, s.vars.pauseOnAction));
	                }"" === h && (h = t.type), g.setToClearWatchedEvent();
	              });
	            }, setupManual: function setupManual() {
	              s.controlNav = s.manualControls, g.controlNav.active(), s.controlNav.bind(u, function (t) {
	                if (t.preventDefault(), "" === h || h === t.type) {
	                  var e = n(this),
	                      i = s.controlNav.index(e);e.hasClass(r + "active") || (i > s.currentSlide ? s.direction = "next" : s.direction = "prev", s.flexAnimate(i, s.vars.pauseOnAction));
	                }"" === h && (h = t.type), g.setToClearWatchedEvent();
	              });
	            }, set: function set() {
	              var t = "thumbnails" === s.vars.controlNav ? "img" : "a";s.controlNav = n("." + r + "control-nav li " + t, s.controlsContainer ? s.controlsContainer : s);
	            }, active: function active() {
	              s.controlNav.removeClass(r + "active").eq(s.animatingTo).addClass(r + "active");
	            }, update: function update(t, e) {
	              s.pagingCount > 1 && "add" === t ? s.controlNavScaffold.append(n('<li><a href="#">' + s.count + "</a></li>")) : 1 === s.pagingCount ? s.controlNavScaffold.find("li").remove() : s.controlNav.eq(e).closest("li").remove(), g.controlNav.set(), s.pagingCount > 1 && s.pagingCount !== s.controlNav.length ? s.update(e, t) : g.controlNav.active();
	            } }, directionNav: { setup: function setup() {
	              var t = n('<ul class="' + r + 'direction-nav"><li class="' + r + 'nav-prev"><a class="' + r + 'prev" href="#">' + s.vars.prevText + '</a></li><li class="' + r + 'nav-next"><a class="' + r + 'next" href="#">' + s.vars.nextText + "</a></li></ul>");s.customDirectionNav ? s.directionNav = s.customDirectionNav : s.controlsContainer ? (n(s.controlsContainer).append(t), s.directionNav = n("." + r + "direction-nav li a", s.controlsContainer)) : (s.append(t), s.directionNav = n("." + r + "direction-nav li a", s)), g.directionNav.update(), s.directionNav.bind(u, function (t) {
	                t.preventDefault();var e;"" !== h && h !== t.type || (e = n(this).hasClass(r + "next") ? s.getTarget("next") : s.getTarget("prev"), s.flexAnimate(e, s.vars.pauseOnAction)), "" === h && (h = t.type), g.setToClearWatchedEvent();
	              });
	            }, update: function update() {
	              var t = r + "disabled";1 === s.pagingCount ? s.directionNav.addClass(t).attr("tabindex", "-1") : s.vars.animationLoop ? s.directionNav.removeClass(t).removeAttr("tabindex") : 0 === s.animatingTo ? s.directionNav.removeClass(t).filter("." + r + "prev").addClass(t).attr("tabindex", "-1") : s.animatingTo === s.last ? s.directionNav.removeClass(t).filter("." + r + "next").addClass(t).attr("tabindex", "-1") : s.directionNav.removeClass(t).removeAttr("tabindex");
	            } }, pausePlay: { setup: function setup() {
	              var t = n('<div class="' + r + 'pauseplay"><a href="#"></a></div>');s.controlsContainer ? (s.controlsContainer.append(t), s.pausePlay = n("." + r + "pauseplay a", s.controlsContainer)) : (s.append(t), s.pausePlay = n("." + r + "pauseplay a", s)), g.pausePlay.update(s.vars.slideshow ? r + "pause" : r + "play"), s.pausePlay.bind(u, function (t) {
	                t.preventDefault(), "" !== h && h !== t.type || (n(this).hasClass(r + "pause") ? (s.manualPause = !0, s.manualPlay = !1, s.pause()) : (s.manualPause = !1, s.manualPlay = !0, s.play())), "" === h && (h = t.type), g.setToClearWatchedEvent();
	              });
	            }, update: function update(t) {
	              "play" === t ? s.pausePlay.removeClass(r + "pause").addClass(r + "play").html(s.vars.playText) : s.pausePlay.removeClass(r + "play").addClass(r + "pause").html(s.vars.pauseText);
	            } }, touch: function touch() {
	            function i(e) {
	              e.stopPropagation(), s.animating ? e.preventDefault() : (s.pause(), t._gesture.addPointer(e.pointerId), C = 0, u = d ? s.h : s.w, v = Number(new Date()), c = m && p && s.animatingTo === s.last ? 0 : m && p ? s.limit - (s.itemW + s.vars.itemMargin) * s.move * s.animatingTo : m && s.currentSlide === s.last ? s.limit : m ? (s.itemW + s.vars.itemMargin) * s.move * s.currentSlide : p ? (s.last - s.currentSlide + s.cloneOffset) * u : (s.currentSlide + s.cloneOffset) * u);
	            }function n(i) {
	              i.stopPropagation();var n = i.target._slider;if (n) {
	                var s = -i.translationX,
	                    o = -i.translationY;return C += d ? o : s, h = C, b = d ? Math.abs(C) < Math.abs(-s) : Math.abs(C) < Math.abs(-o), i.detail === i.MSGESTURE_FLAG_INERTIA ? void e(function () {
	                  t._gesture.stop();
	                }) : void ((!b || Number(new Date()) - v > 500) && (i.preventDefault(), !f && n.transitions && (n.vars.animationLoop || (h = C / (0 === n.currentSlide && C < 0 || n.currentSlide === n.last && C > 0 ? Math.abs(C) / u + 2 : 1)), n.setProps(c + h, "setTouch"))));
	              }
	            }function o(t) {
	              t.stopPropagation();var e = t.target._slider;if (e) {
	                if (e.animatingTo === e.currentSlide && !b && null !== h) {
	                  var i = p ? -h : h,
	                      n = i > 0 ? e.getTarget("next") : e.getTarget("prev");e.canAdvance(n) && (Number(new Date()) - v < 550 && Math.abs(i) > 50 || Math.abs(i) > u / 2) ? e.flexAnimate(n, e.vars.pauseOnAction) : f || e.flexAnimate(e.currentSlide, e.vars.pauseOnAction, !0);
	                }a = null, r = null, h = null, c = null, C = 0;
	              }
	            }var a,
	                r,
	                c,
	                u,
	                h,
	                v,
	                g,
	                y,
	                _w,
	                b = !1,
	                T = 0,
	                x = 0,
	                C = 0;l ? (t.style.msTouchAction = "none", t._gesture = new MSGesture(), t._gesture.target = t, t.addEventListener("MSPointerDown", i, !1), t._slider = s, t.addEventListener("MSGestureChange", n, !1), t.addEventListener("MSGestureEnd", o, !1)) : (g = function g(e) {
	              s.animating ? e.preventDefault() : (window.navigator.msPointerEnabled || 1 === e.touches.length) && (s.pause(), u = d ? s.h : s.w, v = Number(new Date()), T = e.touches[0].pageX, x = e.touches[0].pageY, c = m && p && s.animatingTo === s.last ? 0 : m && p ? s.limit - (s.itemW + s.vars.itemMargin) * s.move * s.animatingTo : m && s.currentSlide === s.last ? s.limit : m ? (s.itemW + s.vars.itemMargin) * s.move * s.currentSlide : p ? (s.last - s.currentSlide + s.cloneOffset) * u : (s.currentSlide + s.cloneOffset) * u, a = d ? x : T, r = d ? T : x, t.addEventListener("touchmove", y, !1), t.addEventListener("touchend", _w, !1));
	            }, y = function y(t) {
	              T = t.touches[0].pageX, x = t.touches[0].pageY, h = d ? a - x : a - T, b = d ? Math.abs(h) < Math.abs(T - r) : Math.abs(h) < Math.abs(x - r);var e = 500;(!b || Number(new Date()) - v > e) && (t.preventDefault(), !f && s.transitions && (s.vars.animationLoop || (h /= 0 === s.currentSlide && h < 0 || s.currentSlide === s.last && h > 0 ? Math.abs(h) / u + 2 : 1), s.setProps(c + h, "setTouch")));
	            }, _w = function w(e) {
	              if (t.removeEventListener("touchmove", y, !1), s.animatingTo === s.currentSlide && !b && null !== h) {
	                var i = p ? -h : h,
	                    n = i > 0 ? s.getTarget("next") : s.getTarget("prev");s.canAdvance(n) && (Number(new Date()) - v < 550 && Math.abs(i) > 50 || Math.abs(i) > u / 2) ? s.flexAnimate(n, s.vars.pauseOnAction) : f || s.flexAnimate(s.currentSlide, s.vars.pauseOnAction, !0);
	              }t.removeEventListener("touchend", _w, !1), a = null, r = null, h = null, c = null;
	            }, t.addEventListener("touchstart", g, !1));
	          }, resize: function resize() {
	            !s.animating && s.is(":visible") && (m || s.doMath(), f ? g.smoothHeight() : m ? (s.slides.width(s.computedW), s.update(s.pagingCount), s.setProps()) : d ? (s.viewport.height(s.h), s.setProps(s.h, "setTotal")) : (s.vars.smoothHeight && g.smoothHeight(), s.newSlides.width(s.computedW), s.setProps(s.computedW, "setTotal")));
	          }, smoothHeight: function smoothHeight(t) {
	            if (!d || f) {
	              var e = f ? s : s.viewport;t ? e.animate({ height: s.slides.eq(s.animatingTo).innerHeight() }, t) : e.innerHeight(s.slides.eq(s.animatingTo).innerHeight());
	            }
	          }, sync: function sync(t) {
	            var e = n(s.vars.sync).data("flexslider"),
	                i = s.animatingTo;switch (t) {case "animate":
	                e.flexAnimate(i, s.vars.pauseOnAction, !1, !0);break;case "play":
	                e.playing || e.asNav || e.play();break;case "pause":
	                e.pause();}
	          }, uniqueID: function uniqueID(t) {
	            return t.filter("[id]").add(t.find("[id]")).each(function () {
	              var t = n(this);t.attr("id", t.attr("id") + "_clone");
	            }), t;
	          }, pauseInvisible: { visProp: null, init: function init() {
	              var t = g.pauseInvisible.getHiddenProp();if (t) {
	                var e = t.replace(/[H|h]idden/, "") + "visibilitychange";document.addEventListener(e, function () {
	                  g.pauseInvisible.isHidden() ? s.startTimeout ? clearTimeout(s.startTimeout) : s.pause() : s.started ? s.play() : s.vars.initDelay > 0 ? setTimeout(s.play, s.vars.initDelay) : s.play();
	                });
	              }
	            }, isHidden: function isHidden() {
	              var t = g.pauseInvisible.getHiddenProp();return !!t && document[t];
	            }, getHiddenProp: function getHiddenProp() {
	              var t = ["webkit", "moz", "ms", "o"];if ("hidden" in document) return "hidden";for (var e = 0; e < t.length; e++) {
	                if (t[e] + "Hidden" in document) return t[e] + "Hidden";
	              }return null;
	            } }, setToClearWatchedEvent: function setToClearWatchedEvent() {
	            clearTimeout(a), a = setTimeout(function () {
	              h = "";
	            }, 3e3);
	          } }, s.flexAnimate = function (t, e, i, o, a) {
	          if (s.vars.animationLoop || t === s.currentSlide || (s.direction = t > s.currentSlide ? "next" : "prev"), v && 1 === s.pagingCount && (s.direction = s.currentItem < t ? "next" : "prev"), !s.animating && (s.canAdvance(t, a) || i) && s.is(":visible")) {
	            if (v && o) {
	              var l = n(s.vars.asNavFor).data("flexslider");if (s.atEnd = 0 === t || t === s.count - 1, l.flexAnimate(t, !0, !1, !0, a), s.direction = s.currentItem < t ? "next" : "prev", l.direction = s.direction, Math.ceil((t + 1) / s.visible) - 1 === s.currentSlide || 0 === t) return s.currentItem = t, s.slides.removeClass(r + "active-slide").eq(t).addClass(r + "active-slide"), !1;s.currentItem = t, s.slides.removeClass(r + "active-slide").eq(t).addClass(r + "active-slide"), t = Math.floor(t / s.visible);
	            }if (s.animating = !0, s.animatingTo = t, e && s.pause(), s.vars.before(s), s.syncExists && !a && g.sync("animate"), s.vars.controlNav && g.controlNav.active(), m || s.slides.removeClass(r + "active-slide").eq(t).addClass(r + "active-slide"), s.atEnd = 0 === t || t === s.last, s.vars.directionNav && g.directionNav.update(), t === s.last && (s.vars.end(s), s.vars.animationLoop || s.pause()), f) c ? (s.slides.eq(s.currentSlide).css({ opacity: 0, zIndex: 1 }), s.slides.eq(t).css({ opacity: 1, zIndex: 2 }), s.wrapup(w)) : (s.slides.eq(s.currentSlide).css({ zIndex: 1 }).animate({ opacity: 0 }, s.vars.animationSpeed, s.vars.easing), s.slides.eq(t).css({ zIndex: 2 }).animate({ opacity: 1 }, s.vars.animationSpeed, s.vars.easing, s.wrapup));else {
	              var u,
	                  h,
	                  y,
	                  w = d ? s.slides.filter(":first").height() : s.computedW;m ? (u = s.vars.itemMargin, y = (s.itemW + u) * s.move * s.animatingTo, h = y > s.limit && 1 !== s.visible ? s.limit : y) : h = 0 === s.currentSlide && t === s.count - 1 && s.vars.animationLoop && "next" !== s.direction ? p ? (s.count + s.cloneOffset) * w : 0 : s.currentSlide === s.last && 0 === t && s.vars.animationLoop && "prev" !== s.direction ? p ? 0 : (s.count + 1) * w : p ? (s.count - 1 - t + s.cloneOffset) * w : (t + s.cloneOffset) * w, s.setProps(h, "", s.vars.animationSpeed), s.transitions ? (s.vars.animationLoop && s.atEnd || (s.animating = !1, s.currentSlide = s.animatingTo), s.container.unbind("webkitTransitionEnd transitionend"), s.container.bind("webkitTransitionEnd transitionend", function () {
	                clearTimeout(s.ensureAnimationEnd), s.wrapup(w);
	              }), clearTimeout(s.ensureAnimationEnd), s.ensureAnimationEnd = setTimeout(function () {
	                s.wrapup(w);
	              }, s.vars.animationSpeed + 100)) : s.container.animate(s.args, s.vars.animationSpeed, s.vars.easing, function () {
	                s.wrapup(w);
	              });
	            }s.vars.smoothHeight && g.smoothHeight(s.vars.animationSpeed);
	          }
	        }, s.wrapup = function (t) {
	          f || m || (0 === s.currentSlide && s.animatingTo === s.last && s.vars.animationLoop ? s.setProps(t, "jumpEnd") : s.currentSlide === s.last && 0 === s.animatingTo && s.vars.animationLoop && s.setProps(t, "jumpStart")), s.animating = !1, s.currentSlide = s.animatingTo, s.vars.after(s);
	        }, s.animateSlides = function () {
	          !s.animating && o && s.flexAnimate(s.getTarget("next"));
	        }, s.pause = function () {
	          clearInterval(s.animatedSlides), s.animatedSlides = null, s.playing = !1, s.vars.pausePlay && g.pausePlay.update("play"), s.syncExists && g.sync("pause");
	        }, s.play = function () {
	          s.playing && clearInterval(s.animatedSlides), s.animatedSlides = s.animatedSlides || setInterval(s.animateSlides, s.vars.slideshowSpeed), s.started = s.playing = !0, s.vars.pausePlay && g.pausePlay.update("pause"), s.syncExists && g.sync("play");
	        }, s.stop = function () {
	          s.pause(), s.stopped = !0;
	        }, s.canAdvance = function (t, e) {
	          var i = v ? s.pagingCount - 1 : s.last;return !!e || !(!v || s.currentItem !== s.count - 1 || 0 !== t || "prev" !== s.direction) || (!v || 0 !== s.currentItem || t !== s.pagingCount - 1 || "next" === s.direction) && !(t === s.currentSlide && !v) && (!!s.vars.animationLoop || (!s.atEnd || 0 !== s.currentSlide || t !== i || "next" === s.direction) && (!s.atEnd || s.currentSlide !== i || 0 !== t || "next" !== s.direction));
	        }, s.getTarget = function (t) {
	          return s.direction = t, "next" === t ? s.currentSlide === s.last ? 0 : s.currentSlide + 1 : 0 === s.currentSlide ? s.last : s.currentSlide - 1;
	        }, s.setProps = function (t, e, i) {
	          var n = function () {
	            var i = t ? t : (s.itemW + s.vars.itemMargin) * s.move * s.animatingTo,
	                n = function () {
	              if (m) return "setTouch" === e ? t : p && s.animatingTo === s.last ? 0 : p ? s.limit - (s.itemW + s.vars.itemMargin) * s.move * s.animatingTo : s.animatingTo === s.last ? s.limit : i;switch (e) {case "setTotal":
	                  return p ? (s.count - 1 - s.currentSlide + s.cloneOffset) * t : (s.currentSlide + s.cloneOffset) * t;case "setTouch":
	                  return p ? t : t;case "jumpEnd":
	                  return p ? t : s.count * t;case "jumpStart":
	                  return p ? s.count * t : t;default:
	                  return t;}
	            }();return n * -1 + "px";
	          }();s.transitions && (n = d ? "translate3d(0," + n + ",0)" : "translate3d(" + n + ",0,0)", i = void 0 !== i ? i / 1e3 + "s" : "0s", s.container.css("-" + s.pfx + "-transition-duration", i), s.container.css("transition-duration", i)), s.args[s.prop] = n, (s.transitions || void 0 === i) && s.container.css(s.args), s.container.css("transform", n);
	        }, s.setup = function (t) {
	          if (f) s.slides.css({ width: "100%", "float": "left", marginRight: "-100%", position: "relative" }), "init" === t && (c ? s.slides.css({ opacity: 0, display: "block", webkitTransition: "opacity " + s.vars.animationSpeed / 1e3 + "s ease", zIndex: 1 }).eq(s.currentSlide).css({ opacity: 1, zIndex: 2 }) : 0 == s.vars.fadeFirstSlide ? s.slides.css({ opacity: 0, display: "block", zIndex: 1 }).eq(s.currentSlide).css({ zIndex: 2 }).css({ opacity: 1 }) : s.slides.css({ opacity: 0, display: "block", zIndex: 1 }).eq(s.currentSlide).css({ zIndex: 2 }).animate({ opacity: 1 }, s.vars.animationSpeed, s.vars.easing)), s.vars.smoothHeight && g.smoothHeight();else {
	            var e, i;"init" === t && (s.viewport = n('<div class="' + r + 'viewport"></div>').css({ overflow: "hidden", position: "relative" }).appendTo(s).append(s.container), s.cloneCount = 0, s.cloneOffset = 0, p && (i = n.makeArray(s.slides).reverse(), s.slides = n(i), s.container.empty().append(s.slides))), s.vars.animationLoop && !m && (s.cloneCount = 2, s.cloneOffset = 1, "init" !== t && s.container.find(".clone").remove(), s.container.append(g.uniqueID(s.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(g.uniqueID(s.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))), s.newSlides = n(s.vars.selector, s), e = p ? s.count - 1 - s.currentSlide + s.cloneOffset : s.currentSlide + s.cloneOffset, d && !m ? (s.container.height(200 * (s.count + s.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function () {
	              s.newSlides.css({ display: "block" }), s.doMath(), s.viewport.height(s.h), s.setProps(e * s.h, "init");
	            }, "init" === t ? 100 : 0)) : (s.container.width(200 * (s.count + s.cloneCount) + "%"), s.setProps(e * s.computedW, "init"), setTimeout(function () {
	              s.doMath(), s.newSlides.css({ width: s.computedW, marginRight: s.computedM, "float": "left", display: "block" }), s.vars.smoothHeight && g.smoothHeight();
	            }, "init" === t ? 100 : 0));
	          }m || s.slides.removeClass(r + "active-slide").eq(s.currentSlide).addClass(r + "active-slide"), s.vars.init(s);
	        }, s.doMath = function () {
	          var t = s.slides.first(),
	              e = s.vars.itemMargin,
	              i = s.vars.minItems,
	              n = s.vars.maxItems;s.w = void 0 === s.viewport ? s.width() : s.viewport.width(), s.h = t.height(), s.boxPadding = t.outerWidth() - t.width(), m ? (s.itemT = s.vars.itemWidth + e, s.itemM = e, s.minW = i ? i * s.itemT : s.w, s.maxW = n ? n * s.itemT - e : s.w, s.itemW = s.minW > s.w ? (s.w - e * (i - 1)) / i : s.maxW < s.w ? (s.w - e * (n - 1)) / n : s.vars.itemWidth > s.w ? s.w : s.vars.itemWidth, s.visible = Math.floor(s.w / s.itemW), s.move = s.vars.move > 0 && s.vars.move < s.visible ? s.vars.move : s.visible, s.pagingCount = Math.ceil((s.count - s.visible) / s.move + 1), s.last = s.pagingCount - 1, s.limit = 1 === s.pagingCount ? 0 : s.vars.itemWidth > s.w ? s.itemW * (s.count - 1) + e * (s.count - 1) : (s.itemW + e) * s.count - s.w - e) : (s.itemW = s.w, s.itemM = e, s.pagingCount = s.count, s.last = s.count - 1), s.computedW = s.itemW - s.boxPadding, s.computedM = s.itemM;
	        }, s.update = function (t, e) {
	          s.doMath(), m || (t < s.currentSlide ? s.currentSlide += 1 : t <= s.currentSlide && 0 !== t && (s.currentSlide -= 1), s.animatingTo = s.currentSlide), s.vars.controlNav && !s.manualControls && ("add" === e && !m || s.pagingCount > s.controlNav.length ? g.controlNav.update("add") : ("remove" === e && !m || s.pagingCount < s.controlNav.length) && (m && s.currentSlide > s.last && (s.currentSlide -= 1, s.animatingTo -= 1), g.controlNav.update("remove", s.last))), s.vars.directionNav && g.directionNav.update();
	        }, s.addSlide = function (t, e) {
	          var i = n(t);s.count += 1, s.last = s.count - 1, d && p ? void 0 !== e ? s.slides.eq(s.count - e).after(i) : s.container.prepend(i) : void 0 !== e ? s.slides.eq(e).before(i) : s.container.append(i), s.update(e, "add"), s.slides = n(s.vars.selector + ":not(.clone)", s), s.setup(), s.vars.added(s);
	        }, s.removeSlide = function (t) {
	          var e = isNaN(t) ? s.slides.index(n(t)) : t;s.count -= 1, s.last = s.count - 1, isNaN(t) ? n(t, s.slides).remove() : d && p ? s.slides.eq(s.last).remove() : s.slides.eq(t).remove(), s.doMath(), s.update(e, "remove"), s.slides = n(s.vars.selector + ":not(.clone)", s), s.setup(), s.vars.removed(s);
	        }, g.init();
	      }, n(window).blur(function (t) {
	        o = !1;
	      }).focus(function (t) {
	        o = !0;
	      }), n.flexslider.defaults = { namespace: "am-", selector: ".am-slides > li", animation: "slide", easing: "swing", direction: "horizontal", reverse: !1, animationLoop: !0, smoothHeight: !1, startAt: 0, slideshow: !0, slideshowSpeed: 5e3, animationSpeed: 600, initDelay: 0, randomize: !1, fadeFirstSlide: !0, thumbCaptions: !1, pauseOnAction: !0, pauseOnHover: !1, pauseInvisible: !0, useCSS: !0, touch: !0, video: !1, controlNav: !0, directionNav: !0, prevText: " ", nextText: " ", keyboard: !0, multipleKeyboard: !1, mousewheel: !1, pausePlay: !1, pauseText: "Pause", playText: "Play", controlsContainer: "", manualControls: "", customDirectionNav: "", sync: "", asNavFor: "", itemWidth: 0, itemMargin: 0, minItems: 1, maxItems: 0, move: 0, allowOneSlide: !0, start: function start() {}, before: function before() {}, after: function after() {}, end: function end() {}, added: function added() {}, removed: function removed() {}, init: function init() {} }, n.fn.flexslider = function (t) {
	        var e = Array.prototype.slice.call(arguments, 1);if (void 0 === t && (t = {}), "object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) return this.each(function () {
	          var e = n(this),
	              i = t.selector ? t.selector : ".am-slides > li",
	              s = e.find(i);1 === s.length && t.allowOneSlide === !1 || 0 === s.length ? (s.fadeIn(400), t.start && t.start(e)) : void 0 === e.data("flexslider") && new n.flexslider(this, t);
	        });var i,
	            s = n(this).data("flexslider");switch (t) {case "next":
	            s.flexAnimate(s.getTarget("next"), !0);break;case "prev":case "previous":
	            s.flexAnimate(s.getTarget("prev"), !0);break;default:
	            "number" == typeof t ? s.flexAnimate(t, !0) : "string" == typeof t && (i = "function" == typeof s[t] ? s[t].apply(s, e) : s[t]);}return void 0 === i ? this : i;
	      }, s.ready(function (t) {
	        n("[data-am-flexslider]", t).each(function (t, e) {
	          var i = n(e),
	              o = s.utils.parseOptions(i.data("amFlexslider"));o.before = function (t) {
	            t._pausedTimer && (window.clearTimeout(t._pausedTimer), t._pausedTimer = null);
	          }, o.after = function (t) {
	            var e = t.vars.playAfterPaused;!e || isNaN(e) || t.playing || t.manualPause || t.manualPlay || t.stopped || (t._pausedTimer = window.setTimeout(function () {
	              t.play();
	            }, e));
	          }, i.flexslider(o);
	        });
	      }), t.exports = n.flexslider;
	    }).call(e, i(12).setImmediate);
	  }, function (t, e, i) {
	    (function (t, n) {
	      function s(t, e) {
	        this._id = t, this._clearFn = e;
	      }var o = i(13).nextTick,
	          a = Function.prototype.apply,
	          r = Array.prototype.slice,
	          l = {},
	          c = 0;e.setTimeout = function () {
	        return new s(a.call(setTimeout, window, arguments), clearTimeout);
	      }, e.setInterval = function () {
	        return new s(a.call(setInterval, window, arguments), clearInterval);
	      }, e.clearTimeout = e.clearInterval = function (t) {
	        t.close();
	      }, s.prototype.unref = s.prototype.ref = function () {}, s.prototype.close = function () {
	        this._clearFn.call(window, this._id);
	      }, e.enroll = function (t, e) {
	        clearTimeout(t._idleTimeoutId), t._idleTimeout = e;
	      }, e.unenroll = function (t) {
	        clearTimeout(t._idleTimeoutId), t._idleTimeout = -1;
	      }, e._unrefActive = e.active = function (t) {
	        clearTimeout(t._idleTimeoutId);var e = t._idleTimeout;e >= 0 && (t._idleTimeoutId = setTimeout(function () {
	          t._onTimeout && t._onTimeout();
	        }, e));
	      }, e.setImmediate = "function" == typeof t ? t : function (t) {
	        var i = c++,
	            n = !(arguments.length < 2) && r.call(arguments, 1);return l[i] = !0, o(function () {
	          l[i] && (n ? t.apply(null, n) : t.call(null), e.clearImmediate(i));
	        }), i;
	      }, e.clearImmediate = "function" == typeof n ? n : function (t) {
	        delete l[t];
	      };
	    }).call(e, i(12).setImmediate, i(12).clearImmediate);
	  }, function (t, e) {
	    function i(t) {
	      if (l === setTimeout) return setTimeout(t, 0);try {
	        return l(t, 0);
	      } catch (e) {
	        try {
	          return l.call(null, t, 0);
	        } catch (e) {
	          return l.call(this, t, 0);
	        }
	      }
	    }function n(t) {
	      if (c === clearTimeout) return clearTimeout(t);try {
	        return c(t);
	      } catch (e) {
	        try {
	          return c.call(null, t);
	        } catch (e) {
	          return c.call(this, t);
	        }
	      }
	    }function s() {
	      p && h && (p = !1, h.length ? d = h.concat(d) : m = -1, d.length && o());
	    }function o() {
	      if (!p) {
	        var t = i(s);p = !0;for (var e = d.length; e;) {
	          for (h = d, d = []; ++m < e;) {
	            h && h[m].run();
	          }m = -1, e = d.length;
	        }h = null, p = !1, n(t);
	      }
	    }function a(t, e) {
	      this.fun = t, this.array = e;
	    }function r() {}var l,
	        c,
	        u = t.exports = {};!function () {
	      try {
	        l = setTimeout;
	      } catch (t) {
	        l = function l() {
	          throw new Error("setTimeout is not defined");
	        };
	      }try {
	        c = clearTimeout;
	      } catch (t) {
	        c = function c() {
	          throw new Error("clearTimeout is not defined");
	        };
	      }
	    }();var h,
	        d = [],
	        p = !1,
	        m = -1;u.nextTick = function (t) {
	      var e = new Array(arguments.length - 1);if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) {
	        e[n - 1] = arguments[n];
	      }d.push(new a(t, e)), 1 !== d.length || p || i(o);
	    }, a.prototype.run = function () {
	      this.fun.apply(null, this.array);
	    }, u.title = "browser", u.browser = !0, u.env = {}, u.argv = [], u.version = "", u.versions = {}, u.on = r, u.addListener = r, u.once = r, u.off = r, u.removeListener = r, u.removeAllListeners = r, u.emit = r, u.binding = function (t) {
	      throw new Error("process.binding is not supported");
	    }, u.cwd = function () {
	      return "/";
	    }, u.chdir = function (t) {
	      throw new Error("process.chdir is not supported");
	    }, u.umask = function () {
	      return 0;
	    };
	  }, function (t, e, i) {
	    "use strict";
	    function n(t, e) {
	      this.wrapper = "string" == typeof t ? document.querySelector(t) : t, this.scroller = this.wrapper.children[0], this.scrollerStyle = this.scroller.style, this.options = { disablePointer: !a.hasPointer, disableTouch: a.hasPointer || !a.hasTouch, disableMouse: a.hasPointer || a.hasTouch, startX: 0, startY: 0, scrollY: !0, directionLockThreshold: 5, momentum: !0, bounce: !0, bounceTime: 600, bounceEasing: "", preventDefault: !0, preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ }, HWCompositing: !0, useTransition: !0, useTransform: !0, bindToWrapper: "undefined" == typeof window.onmousedown };for (var i in e) {
	        this.options[i] = e[i];
	      }this.translateZ = this.options.HWCompositing && a.hasPerspective ? " translateZ(0)" : "", this.options.useTransition = a.hasTransition && this.options.useTransition, this.options.useTransform = a.hasTransform && this.options.useTransform, this.options.eventPassthrough = this.options.eventPassthrough === !0 ? "vertical" : this.options.eventPassthrough, this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault, this.options.scrollY = "vertical" != this.options.eventPassthrough && this.options.scrollY, this.options.scrollX = "horizontal" != this.options.eventPassthrough && this.options.scrollX, this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough, this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold, this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? a.ease[this.options.bounceEasing] || a.ease.circular : this.options.bounceEasing, this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling, this.options.tap === !0 && (this.options.tap = "tap"), this.options.useTransition || this.options.useTransform || /relative|absolute/i.test(this.scrollerStyle.position) || (this.scrollerStyle.position = "relative"), this.x = 0, this.y = 0, this.directionX = 0, this.directionY = 0, this._events = {}, this._init(), this.refresh(), this.scrollTo(this.options.startX, this.options.startY), this.enable();
	    }var s = i(2),
	        o = s.utils.rAF,
	        a = function () {
	      function t(t) {
	        return n !== !1 && ("" === n ? t : n + t.charAt(0).toUpperCase() + t.substr(1));
	      }var e = {},
	          i = document.createElement("div").style,
	          n = function () {
	        for (var t, e = ["t", "webkitT", "MozT", "msT", "OT"], n = 0, s = e.length; n < s; n++) {
	          if (t = e[n] + "ransform", t in i) return e[n].substr(0, e[n].length - 1);
	        }return !1;
	      }();e.getTime = Date.now || function () {
	        return new Date().getTime();
	      }, e.extend = function (t, e) {
	        for (var i in e) {
	          t[i] = e[i];
	        }
	      }, e.addEvent = function (t, e, i, n) {
	        t.addEventListener(e, i, !!n);
	      }, e.removeEvent = function (t, e, i, n) {
	        t.removeEventListener(e, i, !!n);
	      }, e.prefixPointerEvent = function (t) {
	        return window.MSPointerEvent ? "MSPointer" + t.charAt(7).toUpperCase() + t.substr(8) : t;
	      }, e.momentum = function (t, e, i, n, s, o) {
	        var a,
	            r,
	            l = t - e,
	            c = Math.abs(l) / i;return o = void 0 === o ? 6e-4 : o, a = t + c * c / (2 * o) * (l < 0 ? -1 : 1), r = c / o, a < n ? (a = s ? n - s / 2.5 * (c / 8) : n, l = Math.abs(a - t), r = l / c) : a > 0 && (a = s ? s / 2.5 * (c / 8) : 0, l = Math.abs(t) + a, r = l / c), { destination: Math.round(a), duration: r };
	      };var s = t("transform");return e.extend(e, { hasTransform: s !== !1, hasPerspective: t("perspective") in i, hasTouch: "ontouchstart" in window, hasPointer: !(!window.PointerEvent && !window.MSPointerEvent), hasTransition: t("transition") in i }), e.isBadAndroid = function () {
	        var t = window.navigator.appVersion;if (/Android/.test(t) && !/Chrome\/\d/.test(t)) {
	          var e = t.match(/Safari\/(\d+.\d)/);return !(e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e.length >= 2) || parseFloat(e[1]) < 535.19;
	        }return !1;
	      }(), e.extend(e.style = {}, { transform: s, transitionTimingFunction: t("transitionTimingFunction"), transitionDuration: t("transitionDuration"), transitionDelay: t("transitionDelay"), transformOrigin: t("transformOrigin") }), e.hasClass = function (t, e) {
	        var i = new RegExp("(^|\\s)" + e + "(\\s|$)");return i.test(t.className);
	      }, e.addClass = function (t, i) {
	        if (!e.hasClass(t, i)) {
	          var n = t.className.split(" ");n.push(i), t.className = n.join(" ");
	        }
	      }, e.removeClass = function (t, i) {
	        if (e.hasClass(t, i)) {
	          var n = new RegExp("(^|\\s)" + i + "(\\s|$)", "g");t.className = t.className.replace(n, " ");
	        }
	      }, e.offset = function (t) {
	        for (var e = -t.offsetLeft, i = -t.offsetTop; t = t.offsetParent;) {
	          e -= t.offsetLeft, i -= t.offsetTop;
	        }return { left: e, top: i };
	      }, e.preventDefaultException = function (t, e) {
	        for (var i in e) {
	          if (e[i].test(t[i])) return !0;
	        }return !1;
	      }, e.extend(e.eventType = {}, { touchstart: 1, touchmove: 1, touchend: 1, mousedown: 2, mousemove: 2, mouseup: 2, pointerdown: 3, pointermove: 3, pointerup: 3, MSPointerDown: 3, MSPointerMove: 3, MSPointerUp: 3 }), e.extend(e.ease = {}, { quadratic: { style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)", fn: function fn(t) {
	            return t * (2 - t);
	          } }, circular: { style: "cubic-bezier(0.1, 0.57, 0.1, 1)", fn: function fn(t) {
	            return Math.sqrt(1 - --t * t);
	          } }, back: { style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)", fn: function fn(t) {
	            var e = 4;return (t -= 1) * t * ((e + 1) * t + e) + 1;
	          } }, bounce: { style: "", fn: function fn(t) {
	            return (t /= 1) < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
	          } }, elastic: { style: "", fn: function fn(t) {
	            var e = .22,
	                i = .4;return 0 === t ? 0 : 1 == t ? 1 : i * Math.pow(2, -10 * t) * Math.sin((t - e / 4) * (2 * Math.PI) / e) + 1;
	          } } }), e.tap = function (t, e) {
	        var i = document.createEvent("Event");i.initEvent(e, !0, !0), i.pageX = t.pageX, i.pageY = t.pageY, t.target.dispatchEvent(i);
	      }, e.click = function (t) {
	        var e,
	            i = t.target;/(SELECT|INPUT|TEXTAREA)/i.test(i.tagName) || (e = document.createEvent(window.MouseEvent ? "MouseEvents" : "Event"), e.initEvent("click", !0, !0), e.view = t.view || window, e.detail = 1, e.screenX = i.screenX || 0, e.screenY = i.screenY || 0, e.clientX = i.clientX || 0, e.clientY = i.clientY || 0, e.ctrlKey = !!t.ctrlKey, e.altKey = !!t.altKey, e.shiftKey = !!t.shiftKey, e.metaKey = !!t.metaKey, e.button = 0, e.relatedTarget = null, e._constructed = !0, i.dispatchEvent(e));
	      }, e;
	    }();n.prototype = { version: "5.2.0", _init: function _init() {
	        this._initEvents();
	      }, destroy: function destroy() {
	        this._initEvents(!0), clearTimeout(this.resizeTimeout), this.resizeTimeout = null, this._execEvent("destroy");
	      }, _transitionEnd: function _transitionEnd(t) {
	        t.target == this.scroller && this.isInTransition && (this._transitionTime(), this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1, this._execEvent("scrollEnd")));
	      }, _start: function _start(t) {
	        if (1 != a.eventType[t.type]) {
	          var e;if (e = t.which ? t.button : t.button < 2 ? 0 : 4 == t.button ? 1 : 2, 0 !== e) return;
	        }if (this.enabled && (!this.initiated || a.eventType[t.type] === this.initiated)) {
	          !this.options.preventDefault || a.isBadAndroid || a.preventDefaultException(t.target, this.options.preventDefaultException) || t.preventDefault();var i,
	              n = t.touches ? t.touches[0] : t;this.initiated = a.eventType[t.type], this.moved = !1, this.distX = 0, this.distY = 0, this.directionX = 0, this.directionY = 0, this.directionLocked = 0, this.startTime = a.getTime(), this.options.useTransition && this.isInTransition ? (this._transitionTime(), this.isInTransition = !1, i = this.getComputedPosition(), this._translate(Math.round(i.x), Math.round(i.y)), this._execEvent("scrollEnd")) : !this.options.useTransition && this.isAnimating && (this.isAnimating = !1, this._execEvent("scrollEnd")), this.startX = this.x, this.startY = this.y, this.absStartX = this.x, this.absStartY = this.y, this.pointX = n.pageX, this.pointY = n.pageY, this._execEvent("beforeScrollStart");
	        }
	      }, _move: function _move(t) {
	        if (this.enabled && a.eventType[t.type] === this.initiated) {
	          this.options.preventDefault && t.preventDefault();var e,
	              i,
	              n,
	              s,
	              o = t.touches ? t.touches[0] : t,
	              r = o.pageX - this.pointX,
	              l = o.pageY - this.pointY,
	              c = a.getTime();if (this.pointX = o.pageX, this.pointY = o.pageY, this.distX += r, this.distY += l, n = Math.abs(this.distX), s = Math.abs(this.distY), !(c - this.endTime > 300 && n < 10 && s < 10)) {
	            if (this.directionLocked || this.options.freeScroll || (n > s + this.options.directionLockThreshold ? this.directionLocked = "h" : s >= n + this.options.directionLockThreshold ? this.directionLocked = "v" : this.directionLocked = "n"), "h" == this.directionLocked) {
	              if ("vertical" == this.options.eventPassthrough) t.preventDefault();else if ("horizontal" == this.options.eventPassthrough) return void (this.initiated = !1);l = 0;
	            } else if ("v" == this.directionLocked) {
	              if ("horizontal" == this.options.eventPassthrough) t.preventDefault();else if ("vertical" == this.options.eventPassthrough) return void (this.initiated = !1);r = 0;
	            }r = this.hasHorizontalScroll ? r : 0, l = this.hasVerticalScroll ? l : 0, e = this.x + r, i = this.y + l, (e > 0 || e < this.maxScrollX) && (e = this.options.bounce ? this.x + r / 3 : e > 0 ? 0 : this.maxScrollX), (i > 0 || i < this.maxScrollY) && (i = this.options.bounce ? this.y + l / 3 : i > 0 ? 0 : this.maxScrollY), this.directionX = r > 0 ? -1 : r < 0 ? 1 : 0, this.directionY = l > 0 ? -1 : l < 0 ? 1 : 0, this.moved || this._execEvent("scrollStart"), this.moved = !0, this._translate(e, i), c - this.startTime > 300 && (this.startTime = c, this.startX = this.x, this.startY = this.y);
	          }
	        }
	      }, _end: function _end(t) {
	        if (this.enabled && a.eventType[t.type] === this.initiated) {
	          this.options.preventDefault && !a.preventDefaultException(t.target, this.options.preventDefaultException) && t.preventDefault();var e,
	              i,
	              n = (t.changedTouches ? t.changedTouches[0] : t, a.getTime() - this.startTime),
	              s = Math.round(this.x),
	              o = Math.round(this.y),
	              r = Math.abs(s - this.startX),
	              l = Math.abs(o - this.startY),
	              c = 0,
	              u = "";if (this.isInTransition = 0, this.initiated = 0, this.endTime = a.getTime(), !this.resetPosition(this.options.bounceTime)) return this.scrollTo(s, o), this.moved ? this._events.flick && n < 200 && r < 100 && l < 100 ? void this._execEvent("flick") : (this.options.momentum && n < 300 && (e = this.hasHorizontalScroll ? a.momentum(this.x, this.startX, n, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : { destination: s, duration: 0 }, i = this.hasVerticalScroll ? a.momentum(this.y, this.startY, n, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : { destination: o, duration: 0 }, s = e.destination, o = i.destination, c = Math.max(e.duration, i.duration), this.isInTransition = 1), s != this.x || o != this.y ? ((s > 0 || s < this.maxScrollX || o > 0 || o < this.maxScrollY) && (u = a.ease.quadratic), void this.scrollTo(s, o, c, u)) : void this._execEvent("scrollEnd")) : (this.options.tap && a.tap(t, this.options.tap), this.options.click && a.click(t), void this._execEvent("scrollCancel"));
	        }
	      }, _resize: function _resize() {
	        var t = this;clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function () {
	          t.refresh();
	        }, this.options.resizePolling);
	      }, resetPosition: function resetPosition(t) {
	        var e = this.x,
	            i = this.y;return t = t || 0, !this.hasHorizontalScroll || this.x > 0 ? e = 0 : this.x < this.maxScrollX && (e = this.maxScrollX), !this.hasVerticalScroll || this.y > 0 ? i = 0 : this.y < this.maxScrollY && (i = this.maxScrollY), (e != this.x || i != this.y) && (this.scrollTo(e, i, t, this.options.bounceEasing), !0);
	      }, disable: function disable() {
	        this.enabled = !1;
	      }, enable: function enable() {
	        this.enabled = !0;
	      }, refresh: function refresh() {
	        this.wrapper.offsetHeight;this.wrapperWidth = this.wrapper.clientWidth, this.wrapperHeight = this.wrapper.clientHeight, this.scrollerWidth = this.scroller.offsetWidth, this.scrollerHeight = this.scroller.offsetHeight, this.maxScrollX = this.wrapperWidth - this.scrollerWidth, this.maxScrollY = this.wrapperHeight - this.scrollerHeight, this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0, this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0, this.hasHorizontalScroll || (this.maxScrollX = 0, this.scrollerWidth = this.wrapperWidth), this.hasVerticalScroll || (this.maxScrollY = 0, this.scrollerHeight = this.wrapperHeight), this.endTime = 0, this.directionX = 0, this.directionY = 0, this.wrapperOffset = a.offset(this.wrapper), this._execEvent("refresh"), this.resetPosition();
	      }, on: function on(t, e) {
	        this._events[t] || (this._events[t] = []), this._events[t].push(e);
	      }, off: function off(t, e) {
	        if (this._events[t]) {
	          var i = this._events[t].indexOf(e);i > -1 && this._events[t].splice(i, 1);
	        }
	      }, _execEvent: function _execEvent(t) {
	        if (this._events[t]) {
	          var e = 0,
	              i = this._events[t].length;if (i) for (; e < i; e++) {
	            this._events[t][e].apply(this, [].slice.call(arguments, 1));
	          }
	        }
	      }, scrollBy: function scrollBy(t, e, i, n) {
	        t = this.x + t, e = this.y + e, i = i || 0, this.scrollTo(t, e, i, n);
	      }, scrollTo: function scrollTo(t, e, i, n) {
	        n = n || a.ease.circular, this.isInTransition = this.options.useTransition && i > 0;var s = this.options.useTransition && n.style;!i || s ? (s && (this._transitionTimingFunction(n.style), this._transitionTime(i)), this._translate(t, e)) : this._animate(t, e, i, n.fn);
	      }, scrollToElement: function scrollToElement(t, e, i, n, s) {
	        if (t = t.nodeType ? t : this.scroller.querySelector(t)) {
	          var o = a.offset(t);o.left -= this.wrapperOffset.left, o.top -= this.wrapperOffset.top, i === !0 && (i = Math.round(t.offsetWidth / 2 - this.wrapper.offsetWidth / 2)), n === !0 && (n = Math.round(t.offsetHeight / 2 - this.wrapper.offsetHeight / 2)), o.left -= i || 0, o.top -= n || 0, o.left = o.left > 0 ? 0 : o.left < this.maxScrollX ? this.maxScrollX : o.left, o.top = o.top > 0 ? 0 : o.top < this.maxScrollY ? this.maxScrollY : o.top, e = void 0 === e || null === e || "auto" === e ? Math.max(Math.abs(this.x - o.left), Math.abs(this.y - o.top)) : e, this.scrollTo(o.left, o.top, e, s);
	        }
	      }, _transitionTime: function _transitionTime(t) {
	        if (this.options.useTransition) {
	          t = t || 0;var e = a.style.transitionDuration;if (e && (this.scrollerStyle[e] = t + "ms", !t && a.isBadAndroid)) {
	            this.scrollerStyle[e] = "0.0001ms";var i = this;o(function () {
	              "0.0001ms" === i.scrollerStyle[e] && (i.scrollerStyle[e] = "0s");
	            });
	          }
	        }
	      }, _transitionTimingFunction: function _transitionTimingFunction(t) {
	        this.scrollerStyle[a.style.transitionTimingFunction] = t;
	      }, _translate: function _translate(t, e) {
	        this.options.useTransform ? this.scrollerStyle[a.style.transform] = "translate(" + t + "px," + e + "px)" + this.translateZ : (t = Math.round(t), e = Math.round(e), this.scrollerStyle.left = t + "px", this.scrollerStyle.top = e + "px"), this.x = t, this.y = e;
	      }, _initEvents: function _initEvents(t) {
	        var e = t ? a.removeEvent : a.addEvent,
	            i = this.options.bindToWrapper ? this.wrapper : window;e(window, "orientationchange", this), e(window, "resize", this), this.options.click && e(this.wrapper, "click", this, !0), this.options.disableMouse || (e(this.wrapper, "mousedown", this), e(i, "mousemove", this), e(i, "mousecancel", this), e(i, "mouseup", this)), a.hasPointer && !this.options.disablePointer && (e(this.wrapper, a.prefixPointerEvent("pointerdown"), this), e(i, a.prefixPointerEvent("pointermove"), this), e(i, a.prefixPointerEvent("pointercancel"), this), e(i, a.prefixPointerEvent("pointerup"), this)), a.hasTouch && !this.options.disableTouch && (e(this.wrapper, "touchstart", this), e(i, "touchmove", this), e(i, "touchcancel", this), e(i, "touchend", this)), e(this.scroller, "transitionend", this), e(this.scroller, "webkitTransitionEnd", this), e(this.scroller, "oTransitionEnd", this), e(this.scroller, "MSTransitionEnd", this);
	      }, getComputedPosition: function getComputedPosition() {
	        var t,
	            e,
	            i = window.getComputedStyle(this.scroller, null);return this.options.useTransform ? (i = i[a.style.transform].split(")")[0].split(", "), t = +(i[12] || i[4]), e = +(i[13] || i[5])) : (t = +i.left.replace(/[^-\d.]/g, ""), e = +i.top.replace(/[^-\d.]/g, "")), { x: t, y: e };
	      }, _animate: function _animate(t, e, i, n) {
	        function s() {
	          var d,
	              p,
	              m,
	              f = a.getTime();return f >= h ? (r.isAnimating = !1, r._translate(t, e), void (r.resetPosition(r.options.bounceTime) || r._execEvent("scrollEnd"))) : (f = (f - u) / i, m = n(f), d = (t - l) * m + l, p = (e - c) * m + c, r._translate(d, p), void (r.isAnimating && o(s)));
	        }var r = this,
	            l = this.x,
	            c = this.y,
	            u = a.getTime(),
	            h = u + i;this.isAnimating = !0, s();
	      }, handleEvent: function handleEvent(t) {
	        switch (t.type) {case "touchstart":case "pointerdown":case "MSPointerDown":case "mousedown":
	            this._start(t);break;case "touchmove":case "pointermove":case "MSPointerMove":case "mousemove":
	            this._move(t);break;case "touchend":case "pointerup":case "MSPointerUp":case "mouseup":case "touchcancel":case "pointercancel":case "MSPointerCancel":case "mousecancel":
	            this._end(t);break;case "orientationchange":case "resize":
	            this._resize();break;case "transitionend":case "webkitTransitionEnd":case "oTransitionEnd":case "MSTransitionEnd":
	            this._transitionEnd(t);break;case "wheel":case "DOMMouseScroll":case "mousewheel":
	            this._wheel(t);break;case "keydown":
	            this._key(t);break;case "click":
	            this.enabled && !t._constructed && (t.preventDefault(), t.stopPropagation());}
	      } }, n.utils = a, t.exports = s.iScroll = n;
	  }, function (t, e, i) {
	    "use strict";
	    function n(t, e) {
	      return this.each(function () {
	        var i = s(this),
	            n = i.data("amui.modal"),
	            o = "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t;n || i.data("amui.modal", n = new c(this, o)), "string" == typeof t ? n[t] && n[t](e) : n.toggle(t && t.relatedTarget || void 0);
	      });
	    }var s = i(1),
	        o = i(2),
	        a = i(9),
	        r = s(document),
	        l = o.support.transition,
	        c = function c(t, e) {
	      this.options = s.extend({}, c.DEFAULTS, e || {}), this.$element = s(t), this.$dialog = this.$element.find(".am-modal-dialog"), this.$element.attr("id") || this.$element.attr("id", o.utils.generateGUID("am-modal")), this.isPopup = this.$element.hasClass("am-popup"), this.isActions = this.$element.hasClass("am-modal-actions"), this.isPrompt = this.$element.hasClass("am-modal-prompt"), this.isLoading = this.$element.hasClass("am-modal-loading"), this.active = this.transitioning = this.relatedTarget = null, this.dimmer = this.options.dimmer ? a : { open: function open() {}, close: function close() {} }, this.events();
	    };c.DEFAULTS = { className: { active: "am-modal-active", out: "am-modal-out" }, selector: { modal: ".am-modal", active: ".am-modal-active" }, closeViaDimmer: !0, cancelable: !0, onConfirm: function onConfirm() {}, onCancel: function onCancel() {}, closeOnCancel: !0, closeOnConfirm: !0, dimmer: !0, height: void 0, width: void 0, duration: 300, transitionEnd: l && l.end + ".modal.amui" }, c.prototype.toggle = function (t) {
	      return this.active ? this.close() : this.open(t);
	    }, c.prototype.open = function (t) {
	      var e = this.$element,
	          i = this.options,
	          n = this.isPopup,
	          o = i.width,
	          a = i.height,
	          r = {};if (!this.active && this.$element.length) {
	        t && (this.relatedTarget = t), this.transitioning && (clearTimeout(e.transitionEndTimmer), e.transitionEndTimmer = null, e.trigger(i.transitionEnd).off(i.transitionEnd)), n && this.$element.show(), this.active = !0, e.trigger(s.Event("open.modal.amui", { relatedTarget: t })), this.dimmer.open(e), e.show().redraw(), n || this.isActions || (o && (r.width = parseInt(o, 10) + "px"), a && (r.height = parseInt(a, 10) + "px"), this.$dialog.css(r)), e.removeClass(i.className.out).addClass(i.className.active), this.transitioning = 1;var c = function c() {
	          e.trigger(s.Event("opened.modal.amui", { relatedTarget: t })), this.transitioning = 0, this.isPrompt && this.$dialog.find("input").eq(0).focus();
	        };return l ? void e.one(i.transitionEnd, s.proxy(c, this)).emulateTransitionEnd(i.duration) : c.call(this);
	      }
	    }, c.prototype.close = function (t) {
	      if (this.active) {
	        var e = this.$element,
	            i = this.options,
	            n = this.isPopup;this.transitioning && (clearTimeout(e.transitionEndTimmer), e.transitionEndTimmer = null, e.trigger(i.transitionEnd).off(i.transitionEnd), this.dimmer.close(e, !0)), this.$element.trigger(s.Event("close.modal.amui", { relatedTarget: t })), this.transitioning = 1;var o = function o() {
	          e.trigger("closed.modal.amui"), n && e.removeClass(i.className.out), e.hide(), this.transitioning = 0, this.dimmer.close(e, !1), this.active = !1;
	        };return e.removeClass(i.className.active).addClass(i.className.out), l ? void e.one(i.transitionEnd, s.proxy(o, this)).emulateTransitionEnd(i.duration) : o.call(this);
	      }
	    }, c.prototype.events = function () {
	      var t = this,
	          e = this.options,
	          i = this.$element,
	          n = this.dimmer.$element,
	          o = i.find(".am-modal-prompt-input"),
	          a = i.find("[data-am-modal-confirm]"),
	          r = i.find("[data-am-modal-cancel]"),
	          l = function l() {
	        var t = [];return o.each(function () {
	          t.push(s(this).val());
	        }), 0 === t.length ? void 0 : 1 === t.length ? t[0] : t;
	      };this.options.cancelable && i.on("keyup.modal.amui", function (e) {
	        t.active && 27 === e.which && (i.trigger("cancel.modal.amui"), t.close());
	      }), this.options.dimmer && this.options.closeViaDimmer && !this.isLoading && n.on("click.dimmer.modal.amui", function () {
	        t.close();
	      }), i.on("click.close.modal.amui", "[data-am-modal-close], .am-modal-btn", function (i) {
	        i.preventDefault();var n = s(this);n.is(a) ? e.closeOnConfirm && t.close() : n.is(r) ? e.closeOnCancel && t.close() : t.close();
	      }).on("click", function (t) {
	        s(t.target).is(i) && n.trigger("click.dimmer.modal.amui");
	      }), a.on("click.confirm.modal.amui", function () {
	        i.trigger(s.Event("confirm.modal.amui", { trigger: this }));
	      }), r.on("click.cancel.modal.amui", function () {
	        i.trigger(s.Event("cancel.modal.amui", { trigger: this }));
	      }), i.on("confirm.modal.amui", function (e) {
	        e.data = l(), t.options.onConfirm.call(t, e);
	      }).on("cancel.modal.amui", function (e) {
	        e.data = l(), t.options.onCancel.call(t, e);
	      });
	    }, s.fn.modal = n, r.on("click.modal.amui.data-api", "[data-am-modal]", function () {
	      var t = s(this),
	          e = o.utils.parseOptions(t.attr("data-am-modal")),
	          i = s(e.target || this.href && this.href.replace(/.*(?=#[^\s]+$)/, "")),
	          a = i.data("amui.modal") ? "toggle" : e;n.call(i, a, this);
	    }), t.exports = o.modal = c;
	  }, function (t, e, i) {
	    "use strict";
	    function n(t, e) {
	      var i = Array.prototype.slice.call(arguments, 1);return this.each(function () {
	        var n = s(this),
	            o = n.data("amui.offcanvas"),
	            a = s.extend({}, "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t);o || (n.data("amui.offcanvas", o = new c(this, a)), (!t || "object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) && o.open(e)), "string" == typeof t && o[t] && o[t].apply(o, i);
	      });
	    }var s = i(1),
	        o = i(2);i(3);var a,
	        r = s(window),
	        l = s(document),
	        c = function c(t, e) {
	      this.$element = s(t), this.options = s.extend({}, c.DEFAULTS, e), this.active = null, this.bindEvents();
	    };c.DEFAULTS = { duration: 300, effect: "overlay" }, c.prototype.open = function (t) {
	      var e = this,
	          i = this.$element;if (i.length && !i.hasClass("am-active")) {
	        var n = this.options.effect,
	            o = s("html"),
	            l = s("body"),
	            c = i.find(".am-offcanvas-bar").first(),
	            u = c.hasClass("am-offcanvas-bar-flip") ? -1 : 1;c.addClass("am-offcanvas-bar-" + n), a = { x: window.scrollX, y: window.scrollY }, i.addClass("am-active"), l.css({ width: window.innerWidth, height: r.height() }).addClass("am-offcanvas-page"), "overlay" !== n && l.css({ "margin-left": c.outerWidth() * u }).width(), o.css("margin-top", a.y * -1), setTimeout(function () {
	          c.addClass("am-offcanvas-bar-active").width();
	        }, 0), i.trigger("open.offcanvas.amui"), this.active = 1, i.on("click.offcanvas.amui", function (t) {
	          var i = s(t.target);i.hasClass("am-offcanvas-bar") || i.parents(".am-offcanvas-bar").first().length || (t.stopImmediatePropagation(), e.close());
	        }), o.on("keydown.offcanvas.amui", function (t) {
	          27 === t.keyCode && e.close();
	        });
	      }
	    }, c.prototype.close = function (t) {
	      function e() {
	        r.removeClass("am-offcanvas-page").css({ width: "", height: "", "margin-left": "", "margin-right": "" }), l.removeClass("am-active"), c.removeClass("am-offcanvas-bar-active"), n.css("margin-top", ""), window.scrollTo(a.x, a.y), l.trigger("closed.offcanvas.amui"), i.active = 0;
	      }var i = this,
	          n = s("html"),
	          r = s("body"),
	          l = this.$element,
	          c = l.find(".am-offcanvas-bar").first();l.length && this.active && l.hasClass("am-active") && (l.trigger("close.offcanvas.amui"), o.support.transition ? (setTimeout(function () {
	        c.removeClass("am-offcanvas-bar-active");
	      }, 0), r.css("margin-left", "").one(o.support.transition.end, function () {
	        e();
	      }).emulateTransitionEnd(this.options.duration)) : e(), l.off("click.offcanvas.amui"), n.off(".offcanvas.amui"));
	    }, c.prototype.bindEvents = function () {
	      var t = this;return l.on("click.offcanvas.amui", '[data-am-dismiss="offcanvas"]', function (e) {
	        e.preventDefault(), t.close();
	      }), r.on("resize.offcanvas.amui orientationchange.offcanvas.amui", function () {
	        t.active && t.close();
	      }), this.$element.hammer().on("swipeleft swipeleft", function (e) {
	        e.preventDefault(), t.close();
	      }), this;
	    }, s.fn.offCanvas = n, l.on("click.offcanvas.amui", "[data-am-offcanvas]", function (t) {
	      t.preventDefault();var e = s(this),
	          i = o.utils.parseOptions(e.data("amOffcanvas")),
	          a = s(i.target || this.href && this.href.replace(/.*(?=#[^\s]+$)/, "")),
	          r = a.data("amui.offcanvas") ? "open" : i;n.call(a, r, this);
	    }), t.exports = o.offcanvas = c;
	  }, function (t, e, i) {
	    "use strict";
	    var n = i(1),
	        s = i(2),
	        o = s.utils.rAF,
	        a = function a(t) {
	      var e = function e(_e, i) {
	        this.el = t(_e), this.zoomFactor = 1, this.lastScale = 1, this.offset = { x: 0, y: 0 }, this.options = t.extend({}, this.defaults, i), this.setupMarkup(), this.bindEvents(), this.update(), this.enable();
	      },
	          i = function i(t, e) {
	        return t + e;
	      },
	          n = function n(t, e) {
	        return t > e - .01 && t < e + .01;
	      };e.prototype = { defaults: { tapZoomFactor: 2, zoomOutFactor: 1.3, animationDuration: 300, maxZoom: 4, minZoom: .5, lockDragAxis: !1, use2d: !0, zoomStartEventName: "pz_zoomstart", zoomEndEventName: "pz_zoomend", dragStartEventName: "pz_dragstart", dragEndEventName: "pz_dragend", doubleTapEventName: "pz_doubletap" }, handleDragStart: function handleDragStart(t) {
	          this.el.trigger(this.options.dragStartEventName), this.stopAnimation(), this.lastDragPosition = !1, this.hasInteraction = !0, this.handleDrag(t);
	        }, handleDrag: function handleDrag(t) {
	          if (this.zoomFactor > 1) {
	            var e = this.getTouches(t)[0];this.drag(e, this.lastDragPosition), this.offset = this.sanitizeOffset(this.offset), this.lastDragPosition = e;
	          }
	        }, handleDragEnd: function handleDragEnd() {
	          this.el.trigger(this.options.dragEndEventName), this.end();
	        }, handleZoomStart: function handleZoomStart(t) {
	          this.el.trigger(this.options.zoomStartEventName), this.stopAnimation(), this.lastScale = 1, this.nthZoom = 0, this.lastZoomCenter = !1, this.hasInteraction = !0;
	        }, handleZoom: function handleZoom(t, e) {
	          var i = this.getTouchCenter(this.getTouches(t)),
	              n = e / this.lastScale;this.lastScale = e, this.nthZoom += 1, this.nthZoom > 3 && (this.scale(n, i), this.drag(i, this.lastZoomCenter)), this.lastZoomCenter = i;
	        }, handleZoomEnd: function handleZoomEnd() {
	          this.el.trigger(this.options.zoomEndEventName), this.end();
	        }, handleDoubleTap: function handleDoubleTap(t) {
	          var e = this.getTouches(t)[0],
	              i = this.zoomFactor > 1 ? 1 : this.options.tapZoomFactor,
	              n = this.zoomFactor,
	              s = function (t) {
	            this.scaleTo(n + t * (i - n), e);
	          }.bind(this);this.hasInteraction || (n > i && (e = this.getCurrentZoomCenter()), this.animate(this.options.animationDuration, s, this.swing), this.el.trigger(this.options.doubleTapEventName));
	        }, sanitizeOffset: function sanitizeOffset(t) {
	          var e = (this.zoomFactor - 1) * this.getContainerX(),
	              i = (this.zoomFactor - 1) * this.getContainerY(),
	              n = Math.max(e, 0),
	              s = Math.max(i, 0),
	              o = Math.min(e, 0),
	              a = Math.min(i, 0);return { x: Math.min(Math.max(t.x, o), n), y: Math.min(Math.max(t.y, a), s) };
	        }, scaleTo: function scaleTo(t, e) {
	          this.scale(t / this.zoomFactor, e);
	        }, scale: function scale(t, e) {
	          t = this.scaleZoomFactor(t), this.addOffset({ x: (t - 1) * (e.x + this.offset.x), y: (t - 1) * (e.y + this.offset.y) });
	        }, scaleZoomFactor: function scaleZoomFactor(t) {
	          var e = this.zoomFactor;return this.zoomFactor *= t, this.zoomFactor = Math.min(this.options.maxZoom, Math.max(this.zoomFactor, this.options.minZoom)), this.zoomFactor / e;
	        }, drag: function drag(t, e) {
	          e && (this.options.lockDragAxis ? Math.abs(t.x - e.x) > Math.abs(t.y - e.y) ? this.addOffset({ x: -(t.x - e.x), y: 0 }) : this.addOffset({ y: -(t.y - e.y), x: 0 }) : this.addOffset({ y: -(t.y - e.y), x: -(t.x - e.x) }));
	        }, getTouchCenter: function getTouchCenter(t) {
	          return this.getVectorAvg(t);
	        }, getVectorAvg: function getVectorAvg(t) {
	          return { x: t.map(function (t) {
	              return t.x;
	            }).reduce(i) / t.length, y: t.map(function (t) {
	              return t.y;
	            }).reduce(i) / t.length };
	        }, addOffset: function addOffset(t) {
	          this.offset = { x: this.offset.x + t.x, y: this.offset.y + t.y };
	        }, sanitize: function sanitize() {
	          this.zoomFactor < this.options.zoomOutFactor ? this.zoomOutAnimation() : this.isInsaneOffset(this.offset) && this.sanitizeOffsetAnimation();
	        }, isInsaneOffset: function isInsaneOffset(t) {
	          var e = this.sanitizeOffset(t);return e.x !== t.x || e.y !== t.y;
	        }, sanitizeOffsetAnimation: function sanitizeOffsetAnimation() {
	          var t = this.sanitizeOffset(this.offset),
	              e = { x: this.offset.x, y: this.offset.y },
	              i = function (i) {
	            this.offset.x = e.x + i * (t.x - e.x), this.offset.y = e.y + i * (t.y - e.y), this.update();
	          }.bind(this);this.animate(this.options.animationDuration, i, this.swing);
	        }, zoomOutAnimation: function zoomOutAnimation() {
	          var t = this.zoomFactor,
	              e = 1,
	              i = this.getCurrentZoomCenter(),
	              n = function (n) {
	            this.scaleTo(t + n * (e - t), i);
	          }.bind(this);this.animate(this.options.animationDuration, n, this.swing);
	        }, updateAspectRatio: function updateAspectRatio() {
	          this.setContainerY(this.getContainerX() / this.getAspectRatio());
	        }, getInitialZoomFactor: function getInitialZoomFactor() {
	          return this.container[0].offsetWidth / this.el[0].offsetWidth;
	        }, getAspectRatio: function getAspectRatio() {
	          return this.el[0].offsetWidth / this.el[0].offsetHeight;
	        }, getCurrentZoomCenter: function getCurrentZoomCenter() {
	          var t = this.container[0].offsetWidth * this.zoomFactor,
	              e = this.offset.x,
	              i = t - e - this.container[0].offsetWidth,
	              n = e / i,
	              s = n * this.container[0].offsetWidth / (n + 1),
	              o = this.container[0].offsetHeight * this.zoomFactor,
	              a = this.offset.y,
	              r = o - a - this.container[0].offsetHeight,
	              l = a / r,
	              c = l * this.container[0].offsetHeight / (l + 1);return 0 === i && (s = this.container[0].offsetWidth), 0 === r && (c = this.container[0].offsetHeight), { x: s, y: c };
	        }, canDrag: function canDrag() {
	          return !n(this.zoomFactor, 1);
	        }, getTouches: function getTouches(t) {
	          var e = this.container.offset();return Array.prototype.slice.call(t.touches).map(function (t) {
	            return { x: t.pageX - e.left, y: t.pageY - e.top };
	          });
	        }, animate: function animate(t, e, i, n) {
	          var s = new Date().getTime(),
	              a = function () {
	            if (this.inAnimation) {
	              var r = new Date().getTime() - s,
	                  l = r / t;r >= t ? (e(1), n && n(), this.update(), this.stopAnimation(), this.update()) : (i && (l = i(l)), e(l), this.update(), o(a));
	            }
	          }.bind(this);this.inAnimation = !0, o(a);
	        }, stopAnimation: function stopAnimation() {
	          this.inAnimation = !1;
	        }, swing: function swing(t) {
	          return -Math.cos(t * Math.PI) / 2 + .5;
	        }, getContainerX: function getContainerX() {
	          return this.container[0].offsetWidth;
	        }, getContainerY: function getContainerY() {
	          return this.container[0].offsetHeight;
	        }, setContainerY: function setContainerY(t) {
	          return this.container.height(t);
	        }, setupMarkup: function setupMarkup() {
	          this.container = t('<div class="pinch-zoom-container"></div>'), this.el.before(this.container), this.container.append(this.el), this.container.css({ overflow: "hidden", position: "relative" }), this.el.css({ "-webkit-transform-origin": "0% 0%", "-moz-transform-origin": "0% 0%", "-ms-transform-origin": "0% 0%", "-o-transform-origin": "0% 0%", "transform-origin": "0% 0%", position: "absolute" });
	        }, end: function end() {
	          this.hasInteraction = !1, this.sanitize(), this.update();
	        }, bindEvents: function bindEvents() {
	          s(this.container.get(0), this), t(window).on("resize", this.update.bind(this)), t(this.el).find("img").on("load", this.update.bind(this));
	        }, update: function update() {
	          this.updatePlaned || (this.updatePlaned = !0, setTimeout(function () {
	            this.updatePlaned = !1, this.updateAspectRatio();var t = this.getInitialZoomFactor() * this.zoomFactor,
	                e = -this.offset.x / t,
	                i = -this.offset.y / t,
	                n = "scale3d(" + t + ", " + t + ",1) translate3d(" + e + "px," + i + "px,0px)",
	                s = "scale(" + t + ", " + t + ") translate(" + e + "px," + i + "px)",
	                o = function () {
	              this.clone && (this.clone.remove(), delete this.clone);
	            }.bind(this);!this.options.use2d || this.hasInteraction || this.inAnimation ? (this.is3d = !0, o(), this.el.css({ "-webkit-transform": n, "-o-transform": s, "-ms-transform": s, "-moz-transform": s, transform: n })) : (this.is3d && (this.clone = this.el.clone(), this.clone.css("pointer-events", "none"), this.clone.appendTo(this.container), setTimeout(o, 200)), this.el.css({ "-webkit-transform": s, "-o-transform": s, "-ms-transform": s, "-moz-transform": s, transform: s }), this.is3d = !1);
	          }.bind(this), 0));
	        }, enable: function enable() {
	          this.enabled = !0;
	        }, disable: function disable() {
	          this.enabled = !1;
	        } };var s = function s(t, e) {
	        var i = null,
	            n = 0,
	            s = null,
	            o = null,
	            a = function a(t, n) {
	          if (i !== t) {
	            if (i && !t) switch (i) {case "zoom":
	                e.handleZoomEnd(n);break;case "drag":
	                e.handleDragEnd(n);}switch (t) {case "zoom":
	                e.handleZoomStart(n);break;case "drag":
	                e.handleDragStart(n);}
	          }i = t;
	        },
	            r = function r(t) {
	          2 === n ? a("zoom") : 1 === n && e.canDrag() ? a("drag", t) : a(null, t);
	        },
	            l = function l(t) {
	          return Array.prototype.slice.call(t).map(function (t) {
	            return { x: t.pageX, y: t.pageY };
	          });
	        },
	            c = function c(t, e) {
	          var i, n;return i = t.x - e.x, n = t.y - e.y, Math.sqrt(i * i + n * n);
	        },
	            u = function u(t, e) {
	          var i = c(t[0], t[1]),
	              n = c(e[0], e[1]);return n / i;
	        },
	            h = function h(t) {
	          t.stopPropagation(), t.preventDefault();
	        },
	            d = function d(t) {
	          var o = new Date().getTime();if (n > 1 && (s = null), o - s < 300) switch (h(t), e.handleDoubleTap(t), i) {case "zoom":
	              e.handleZoomEnd(t);break;case "drag":
	              e.handleDragEnd(t);}1 === n && (s = o);
	        },
	            p = !0;t.addEventListener("touchstart", function (t) {
	          e.enabled && (p = !0, n = t.touches.length, d(t));
	        }), t.addEventListener("touchmove", function (t) {
	          if (e.enabled) {
	            if (p) r(t), i && h(t), o = l(t.touches);else {
	              switch (i) {case "zoom":
	                  e.handleZoom(t, u(o, l(t.touches)));break;case "drag":
	                  e.handleDrag(t);}i && (h(t), e.update());
	            }p = !1;
	          }
	        }), t.addEventListener("touchend", function (t) {
	          e.enabled && (n = t.touches.length, r(t));
	        });
	      };return e;
	    };t.exports = s.pichzoom = a(n);
	  }, function (t, e, i) {
	    "use strict";
	    var n = i(1),
	        s = i(2),
	        o = n(window),
	        a = function a(t, e) {
	      this.options = n.extend({}, a.DEFAULTS, e), this.$element = n(t), this.active = null, this.$popover = this.options.target && n(this.options.target) || null, this.init(), this._bindEvents();
	    };a.DEFAULTS = { theme: null, trigger: "click", content: "", open: !1, target: null, tpl: '<div class="am-popover"><div class="am-popover-inner"></div><div class="am-popover-caret"></div></div>' }, a.prototype.init = function () {
	      function t() {
	        i.sizePopover();
	      }var e,
	          i = this,
	          o = this.$element;this.options.target || (this.$popover = this.getPopover(), this.setContent()), e = this.$popover, e.appendTo(n("body")), this.sizePopover(), o.on("open.popover.amui", function () {
	        n(window).on("resize.popover.amui", s.utils.debounce(t, 50));
	      }), o.on("close.popover.amui", function () {
	        n(window).off("resize.popover.amui", t);
	      }), this.options.open && this.open();
	    }, a.prototype.sizePopover = function () {
	      var t = this.$element,
	          e = this.$popover;if (e && e.length) {
	        var i = e.outerWidth(),
	            n = e.outerHeight(),
	            s = e.find(".am-popover-caret"),
	            a = s.outerWidth() / 2 || 8,
	            r = n + 8,
	            l = t.outerWidth(),
	            c = t.outerHeight(),
	            u = t.offset(),
	            h = t[0].getBoundingClientRect(),
	            d = o.height(),
	            p = o.width(),
	            m = 0,
	            f = 0,
	            v = 0,
	            g = 2,
	            y = "top";e.css({ left: "", top: "" }).removeClass("am-popover-left am-popover-right am-popover-top am-popover-bottom"), r - g < h.top + g ? m = u.top - r - g : r < d - h.top - h.height ? (y = "bottom", m = u.top + c + a + g) : (y = "middle", m = c / 2 + u.top - n / 2), "top" === y || "bottom" === y ? (f = l / 2 + u.left - i / 2, v = f, f < 5 && (f = 5), f + i > p && (f = p - i - 20), "top" === y && e.addClass("am-popover-top"), "bottom" === y && e.addClass("am-popover-bottom"), v -= f) : "middle" === y && (f = u.left - i - a, e.addClass("am-popover-left"), f < 5 && (f = u.left + l + a, e.removeClass("am-popover-left").addClass("am-popover-right")), f + i > p && (f = p - i - 5, e.removeClass("am-popover-left").addClass("am-popover-right"))), e.css({ top: m + "px", left: f + "px" });
	      }
	    }, a.prototype.toggle = function () {
	      return this[this.active ? "close" : "open"]();
	    }, a.prototype.open = function () {
	      var t = this.$popover;this.$element.trigger("open.popover.amui"), this.sizePopover(), t.show().addClass("am-active"), this.active = !0;
	    }, a.prototype.close = function () {
	      var t = this.$popover;this.$element.trigger("close.popover.amui"), t.removeClass("am-active").trigger("closed.popover.amui").hide(), this.active = !1;
	    }, a.prototype.getPopover = function () {
	      var t = s.utils.generateGUID("am-popover"),
	          e = [];return this.options.theme && n.each(this.options.theme.split(" "), function (t, i) {
	        e.push("am-popover-" + n.trim(i));
	      }), n(this.options.tpl).attr("id", t).addClass(e.join(" "));
	    }, a.prototype.setContent = function (t) {
	      t = t || this.options.content, this.$popover && this.$popover.find(".am-popover-inner").empty().html(t);
	    }, a.prototype._bindEvents = function () {
	      for (var t = "popover.amui", e = this.options.trigger.split(" "), i = e.length; i--;) {
	        var s = e[i];if ("click" === s) this.$element.on("click." + t, n.proxy(this.toggle, this));else {
	          var o = "hover" == s ? "mouseenter" : "focusin",
	              a = "hover" == s ? "mouseleave" : "focusout";this.$element.on(o + "." + t, n.proxy(this.open, this)), this.$element.on(a + "." + t, n.proxy(this.close, this));
	        }
	      }
	    }, a.prototype.destroy = function () {
	      this.$element.off(".popover.amui").removeData("amui.popover"), this.$popover.remove();
	    }, s.plugin("popover", a), s.ready(function (t) {
	      n("[data-am-popover]", t).popover();
	    }), t.exports = a;
	  }, function (t, e, i) {
	    "use strict";
	    var n = i(2),
	        s = function () {
	      function t(t, e, i) {
	        return t < e ? e : t > i ? i : t;
	      }function e(t) {
	        return 100 * (-1 + t);
	      }function i(t, i, n) {
	        var s;return s = "translate3d" === c.positionUsing ? { transform: "translate3d(" + e(t) + "%,0,0)" } : "translate" === c.positionUsing ? { transform: "translate(" + e(t) + "%,0)" } : { "margin-left": e(t) + "%" }, s.transition = "all " + i + "ms " + n, s;
	      }function n(t, e) {
	        var i = "string" == typeof t ? t : a(t);return i.indexOf(" " + e + " ") >= 0;
	      }function s(t, e) {
	        var i = a(t),
	            s = i + e;n(i, e) || (t.className = s.substring(1));
	      }function o(t, e) {
	        var i,
	            s = a(t);n(t, e) && (i = s.replace(" " + e + " ", " "), t.className = i.substring(1, i.length - 1));
	      }function a(t) {
	        return (" " + (t.className || "") + " ").replace(/\s+/gi, " ");
	      }function r(t) {
	        t && t.parentNode && t.parentNode.removeChild(t);
	      }var l = {};l.version = "0.2.0";var c = l.settings = { minimum: .08, easing: "ease", positionUsing: "", speed: 200, trickle: !0, trickleRate: .02, trickleSpeed: 800, showSpinner: !0, parent: "body", barSelector: '[role="nprogress-bar"]', spinnerSelector: '[role="nprogress-spinner"]', template: '<div class="nprogress-bar" role="nprogress-bar"><div class="nprogress-peg"></div></div><div class="nprogress-spinner" role="nprogress-spinner"><div class="nprogress-spinner-icon"></div></div>' };l.configure = function (t) {
	        var e, i;for (e in t) {
	          i = t[e], void 0 !== i && t.hasOwnProperty(e) && (c[e] = i);
	        }return this;
	      }, l.status = null, l.set = function (e) {
	        var n = l.isStarted();e = t(e, c.minimum, 1), l.status = 1 === e ? null : e;var s = l.render(!n),
	            o = s.querySelector(c.barSelector),
	            a = c.speed,
	            r = c.easing;return s.offsetWidth, u(function (t) {
	          "" === c.positionUsing && (c.positionUsing = l.getPositioningCSS()), h(o, i(e, a, r)), 1 === e ? (h(s, { transition: "none", opacity: 1 }), s.offsetWidth, setTimeout(function () {
	            h(s, { transition: "all " + a + "ms linear", opacity: 0 }), setTimeout(function () {
	              l.remove(), t();
	            }, a);
	          }, a)) : setTimeout(t, a);
	        }), this;
	      }, l.isStarted = function () {
	        return "number" == typeof l.status;
	      }, l.start = function () {
	        l.status || l.set(0);var t = function t() {
	          setTimeout(function () {
	            l.status && (l.trickle(), t());
	          }, c.trickleSpeed);
	        };return c.trickle && t(), this;
	      }, l.done = function (t) {
	        return t || l.status ? l.inc(.3 + .5 * Math.random()).set(1) : this;
	      }, l.inc = function (e) {
	        var i = l.status;return i ? ("number" != typeof e && (e = (1 - i) * t(Math.random() * i, .1, .95)), i = t(i + e, 0, .994), l.set(i)) : l.start();
	      }, l.trickle = function () {
	        return l.inc(Math.random() * c.trickleRate);
	      }, function () {
	        var t = 0,
	            e = 0;l.promise = function (i) {
	          return i && "resolved" !== i.state() ? (0 === e && l.start(), t++, e++, i.always(function () {
	            e--, 0 === e ? (t = 0, l.done()) : l.set((t - e) / t);
	          }), this) : this;
	        };
	      }(), l.render = function (t) {
	        if (l.isRendered()) return document.getElementById("nprogress");s(document.documentElement, "nprogress-busy");var i = document.createElement("div");i.id = "nprogress", i.innerHTML = c.template;var n,
	            o = i.querySelector(c.barSelector),
	            a = t ? "-100" : e(l.status || 0),
	            u = document.querySelector(c.parent);return h(o, { transition: "all 0 linear", transform: "translate3d(" + a + "%,0,0)" }), c.showSpinner || (n = i.querySelector(c.spinnerSelector), n && r(n)), u != document.body && s(u, "nprogress-custom-parent"), u.appendChild(i), i;
	      }, l.remove = function () {
	        o(document.documentElement, "nprogress-busy"), o(document.querySelector(c.parent), "nprogress-custom-parent");var t = document.getElementById("nprogress");t && r(t);
	      }, l.isRendered = function () {
	        return !!document.getElementById("nprogress");
	      }, l.getPositioningCSS = function () {
	        var t = document.body.style,
	            e = "WebkitTransform" in t ? "Webkit" : "MozTransform" in t ? "Moz" : "msTransform" in t ? "ms" : "OTransform" in t ? "O" : "";return e + "Perspective" in t ? "translate3d" : e + "Transform" in t ? "translate" : "margin";
	      };var u = function () {
	        function t() {
	          var i = e.shift();i && i(t);
	        }var e = [];return function (i) {
	          e.push(i), 1 == e.length && t();
	        };
	      }(),
	          h = function () {
	        function t(t) {
	          return t.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function (t, e) {
	            return e.toUpperCase();
	          });
	        }function e(t) {
	          var e = document.body.style;if (t in e) return t;for (var i, n = s.length, o = t.charAt(0).toUpperCase() + t.slice(1); n--;) {
	            if (i = s[n] + o, i in e) return i;
	          }return t;
	        }function i(i) {
	          return i = t(i), o[i] || (o[i] = e(i));
	        }function n(t, e, n) {
	          e = i(e), t.style[e] = n;
	        }var s = ["Webkit", "O", "Moz", "ms"],
	            o = {};return function (t, e) {
	          var i,
	              s,
	              o = arguments;if (2 == o.length) for (i in e) {
	            s = e[i], void 0 !== s && e.hasOwnProperty(i) && n(t, i, s);
	          } else n(t, o[1], o[2]);
	        };
	      }();return l;
	    }();t.exports = n.progress = s;
	  }, function (t, e, i) {
	    "use strict";
	    var n = i(1),
	        s = i(2),
	        o = i(17),
	        a = i(3),
	        r = s.support.animation,
	        l = s.support.transition,
	        c = function c(t, e) {
	      this.$element = n(t), this.$body = n(document.body), this.options = n.extend({}, c.DEFAULTS, e), this.$pureview = n(this.options.tpl).attr("id", s.utils.generateGUID("am-pureview")), this.$slides = null, this.transitioning = null, this.scrollbarWidth = 0, this.init();
	    };c.DEFAULTS = { tpl: '<div class="am-pureview am-pureview-bar-active"><ul class="am-pureview-slider"></ul><ul class="am-pureview-direction"><li class="am-pureview-prev"><a href=""></a></li><li class="am-pureview-next"><a href=""></a></li></ul><ol class="am-pureview-nav"></ol><div class="am-pureview-bar am-active"><span class="am-pureview-title"></span><div class="am-pureview-counter"><span class="am-pureview-current"></span> / <span class="am-pureview-total"></span></div></div><div class="am-pureview-actions am-active"><a href="javascript: void(0)" class="am-icon-chevron-left" data-am-close="pureview"></a></div></div>', className: { prevSlide: "am-pureview-slide-prev", nextSlide: "am-pureview-slide-next", onlyOne: "am-pureview-only", active: "am-active", barActive: "am-pureview-bar-active", activeBody: "am-pureview-active" }, selector: { slider: ".am-pureview-slider", close: '[data-am-close="pureview"]', total: ".am-pureview-total", current: ".am-pureview-current", title: ".am-pureview-title", actions: ".am-pureview-actions",
	        bar: ".am-pureview-bar", pinchZoom: ".am-pinch-zoom", nav: ".am-pureview-nav" }, shareBtn: !1, toggleToolbar: !0, target: "img", weChatImagePreview: !0 }, c.prototype.init = function () {
	      var t = this,
	          e = this.options,
	          i = this.$element,
	          s = this.$pureview;this.refreshSlides(), n("body").append(s), this.$title = s.find(e.selector.title), this.$current = s.find(e.selector.current), this.$bar = s.find(e.selector.bar), this.$actions = s.find(e.selector.actions), e.shareBtn && this.$actions.append('<a href="javascript: void(0)" class="am-icon-share-square-o" data-am-toggle="share"></a>'), this.$element.on("click.pureview.amui", e.target, function (i) {
	        i.preventDefault();var n = t.$images.index(this);e.weChatImagePreview && window.WeixinJSBridge ? window.WeixinJSBridge.invoke("imagePreview", { current: t.imgUrls[n], urls: t.imgUrls }) : t.open(n);
	      }), s.find(".am-pureview-direction").on("click.direction.pureview.amui", "li", function (e) {
	        e.preventDefault(), n(this).is(".am-pureview-prev") ? t.prevSlide() : t.nextSlide();
	      }), s.find(e.selector.nav).on("click.nav.pureview.amui", "li", function () {
	        var e = t.$navItems.index(n(this));t.activate(t.$slides.eq(e));
	      }), s.find(e.selector.close).on("click.close.pureview.amui", function (e) {
	        e.preventDefault(), t.close();
	      }), this.$slider.hammer().on("swipeleft.pureview.amui", function (e) {
	        e.preventDefault(), t.nextSlide();
	      }).on("swiperight.pureview.amui", function (e) {
	        e.preventDefault(), t.prevSlide();
	      }).on("press.pureview.amui", function (i) {
	        i.preventDefault(), e.toggleToolbar && t.toggleToolBar();
	      }), this.$slider.data("hammer").get("swipe").set({ direction: a.DIRECTION_HORIZONTAL, velocity: .35 }), i.DOMObserve({ childList: !0, subtree: !0 }, function (t, e) {}), i.on("changed.dom.amui", function (e) {
	        e.stopPropagation(), t.refreshSlides();
	      }), n(document).on("keydown.pureview.amui", n.proxy(function (t) {
	        var e = t.keyCode;37 == e ? this.prevSlide() : 39 == e ? this.nextSlide() : 27 == e && this.close();
	      }, this));
	    }, c.prototype.refreshSlides = function () {
	      this.$images = this.$element.find(this.options.target);var t = this,
	          e = this.options,
	          i = this.$pureview,
	          o = n([]),
	          a = n([]),
	          r = this.$images,
	          l = r.length;this.$slider = i.find(e.selector.slider), this.$nav = i.find(e.selector.nav);var c = "data-am-pureviewed";this.imgUrls = this.imgUrls || [], l && (1 === l && i.addClass(e.className.onlyOne), r.not("[" + c + "]").each(function (e, i) {
	        var r, l;"A" === i.nodeName ? (r = i.href, l = i.title || "") : (r = n(i).data("rel") || i.src, r = s.utils.getAbsoluteUrl(r), l = n(i).attr("alt") || ""), i.setAttribute(c, "1"), t.imgUrls.push(r), o = o.add(n('<li data-src="' + r + '" data-title="' + l + '"></li>')), a = a.add(n("<li>" + (e + 1) + "</li>"));
	      }), i.find(e.selector.total).text(l), this.$slider.append(o), this.$nav.append(a), this.$navItems = this.$nav.find("li"), this.$slides = this.$slider.find("li"));
	    }, c.prototype.loadImage = function (t, e) {
	      var i = "image-appended";if (!t.data(i)) {
	        var s = n("<img>", { src: t.data("src"), alt: t.data("title") });t.html(s).wrapInner('<div class="am-pinch-zoom"></div>').redraw();var a = t.find(this.options.selector.pinchZoom);a.data("amui.pinchzoom", new o(a[0], {})), t.data("image-appended", !0);
	      }e && e.call(this);
	    }, c.prototype.activate = function (t) {
	      var e = this.options,
	          i = this.$slides,
	          o = i.index(t),
	          a = t.data("title") || "",
	          r = e.className.active;i.find("." + r).is(t) || this.transitioning || (this.loadImage(t, function () {
	        s.utils.imageLoader(t.find("img"), function (e) {
	          t.find(".am-pinch-zoom").addClass("am-pureview-loaded"), n(e).addClass("am-img-loaded");
	        });
	      }), this.transitioning = 1, this.$title.text(a), this.$current.text(o + 1), i.removeClass(), t.addClass(r), i.eq(o - 1).addClass(e.className.prevSlide), i.eq(o + 1).addClass(e.className.nextSlide), this.$navItems.removeClass().eq(o).addClass(e.className.active), l ? t.one(l.end, n.proxy(function () {
	        this.transitioning = 0;
	      }, this)).emulateTransitionEnd(300) : this.transitioning = 0);
	    }, c.prototype.nextSlide = function () {
	      if (1 !== this.$slides.length) {
	        var t = this.$slides,
	            e = t.filter(".am-active"),
	            i = t.index(e),
	            n = "am-animation-right-spring";i + 1 >= t.length ? r && e.addClass(n).on(r.end, function () {
	          e.removeClass(n);
	        }) : this.activate(t.eq(i + 1));
	      }
	    }, c.prototype.prevSlide = function () {
	      if (1 !== this.$slides.length) {
	        var t = this.$slides,
	            e = t.filter(".am-active"),
	            i = this.$slides.index(e),
	            n = "am-animation-left-spring";0 === i ? r && e.addClass(n).on(r.end, function () {
	          e.removeClass(n);
	        }) : this.activate(t.eq(i - 1));
	      }
	    }, c.prototype.toggleToolBar = function () {
	      this.$pureview.toggleClass(this.options.className.barActive);
	    }, c.prototype.open = function (t) {
	      var e = t || 0;this.checkScrollbar(), this.setScrollbar(), this.activate(this.$slides.eq(e)), this.$pureview.show().redraw().addClass(this.options.className.active), this.$body.addClass(this.options.className.activeBody);
	    }, c.prototype.close = function () {
	      function t() {
	        this.$pureview.hide(), this.$body.removeClass(e.className.activeBody), this.resetScrollbar();
	      }var e = this.options;this.$pureview.removeClass(e.className.active), this.$slides.removeClass(), l ? this.$pureview.one(l.end, n.proxy(t, this)).emulateTransitionEnd(300) : t.call(this);
	    }, c.prototype.checkScrollbar = function () {
	      this.scrollbarWidth = s.utils.measureScrollbar();
	    }, c.prototype.setScrollbar = function () {
	      var t = parseInt(this.$body.css("padding-right") || 0, 10);this.scrollbarWidth && this.$body.css("padding-right", t + this.scrollbarWidth);
	    }, c.prototype.resetScrollbar = function () {
	      this.$body.css("padding-right", "");
	    }, s.plugin("pureview", c), s.ready(function (t) {
	      n("[data-am-pureview]", t).pureview();
	    }), t.exports = c;
	  }, function (t, e, i) {
	    "use strict";
	    var n = i(1),
	        s = i(2),
	        o = function o(t, e) {
	      if (s.support.animation) {
	        this.options = n.extend({}, o.DEFAULTS, e), this.$element = n(t);var i = function () {
	          s.utils.rAF.call(window, n.proxy(this.checkView, this));
	        }.bind(this);this.$window = n(window).on("scroll.scrollspy.amui", i).on("resize.scrollspy.amui orientationchange.scrollspy.amui", s.utils.debounce(i, 50)), this.timer = this.inViewState = this.initInView = null, i();
	      }
	    };o.DEFAULTS = { animation: "fade", className: { inView: "am-scrollspy-inview", init: "am-scrollspy-init" }, repeat: !0, delay: 0, topOffset: 0, leftOffset: 0 }, o.prototype.checkView = function () {
	      var t = this.$element,
	          e = this.options,
	          i = s.utils.isInView(t, e),
	          n = e.animation ? " am-animation-" + e.animation : "";i && !this.inViewState && (this.timer && clearTimeout(this.timer), this.initInView || (t.addClass(e.className.init), this.offset = t.offset(), this.initInView = !0, t.trigger("init.scrollspy.amui")), this.timer = setTimeout(function () {
	        i && t.addClass(e.className.inView + n).width();
	      }, e.delay), this.inViewState = !0, t.trigger("inview.scrollspy.amui")), !i && this.inViewState && e.repeat && (t.removeClass(e.className.inView + n), this.inViewState = !1, t.trigger("outview.scrollspy.amui"));
	    }, o.prototype.check = function () {
	      s.utils.rAF.call(window, n.proxy(this.checkView, this));
	    }, s.plugin("scrollspy", o), s.ready(function (t) {
	      n("[data-am-scrollspy]", t).scrollspy();
	    }), t.exports = o;
	  }, function (t, e, i) {
	    "use strict";
	    var n = i(1),
	        s = i(2);i(23);var o = function o(t, e) {
	      this.options = n.extend({}, o.DEFAULTS, e), this.$element = n(t), this.anchors = [], this.$links = this.$element.find('a[href^="#"]').each(function (t, e) {
	        this.anchors.push(n(e).attr("href"));
	      }.bind(this)), this.$targets = n(this.anchors.join(", "));var i = function () {
	        s.utils.rAF.call(window, n.proxy(this.process, this));
	      }.bind(this);this.$window = n(window).on("scroll.scrollspynav.amui", i).on("resize.scrollspynav.amui orientationchange.scrollspynav.amui", s.utils.debounce(i, 50)), i(), this.scrollProcess();
	    };o.DEFAULTS = { className: { active: "am-active" }, closest: !1, smooth: !0, offsetTop: 0 }, o.prototype.process = function () {
	      var t = this.$window.scrollTop(),
	          e = this.options,
	          i = [],
	          o = this.$links,
	          a = this.$targets;if (a.each(function (t, n) {
	        s.utils.isInView(n, e) && i.push(n);
	      }), i.length) {
	        var r;if (n.each(i, function (e, i) {
	          if (n(i).offset().top >= t) return r = n(i), !1;
	        }), !r) return;e.closest ? (o.closest(e.closest).removeClass(e.className.active), o.filter('a[href="#' + r.attr("id") + '"]').closest(e.closest).addClass(e.className.active)) : o.removeClass(e.className.active).filter('a[href="#' + r.attr("id") + '"]').addClass(e.className.active);
	      }
	    }, o.prototype.scrollProcess = function () {
	      var t = this.$links,
	          e = this.options;e.smooth && n.fn.smoothScroll && t.on("click", function (t) {
	        t.preventDefault();var i = n(this),
	            s = n(i.attr("href"));if (s) {
	          var o = e.offsetTop && !isNaN(parseInt(e.offsetTop)) && parseInt(e.offsetTop) || 0;n(window).smoothScroll({ position: s.offset().top - o });
	        }
	      });
	    }, s.plugin("scrollspynav", o), s.ready(function (t) {
	      n("[data-am-scrollspynav]", t).scrollspynav();
	    }), t.exports = o;
	  }, function (t, e, i) {
	    "use strict";
	    var n = i(1),
	        s = i(2),
	        o = s.utils.rAF,
	        a = s.utils.cancelAF,
	        r = !1,
	        l = function l(t, e) {
	      function i(t) {
	        return (t /= .5) < 1 ? .5 * Math.pow(t, 5) : .5 * (Math.pow(t - 2, 5) + 2);
	      }function s() {
	        p.off("touchstart.smoothscroll.amui", w), r = !1;
	      }function c(t) {
	        r && (u || (u = t), h = Math.min(1, Math.max((t - u) / y, 0)), d = Math.round(f + g * i(h)), g > 0 && d > m && (d = m), g < 0 && d < m && (d = m), v != d && p.scrollTop(d), v = d, d !== m ? (a(b), b = o(c)) : (a(b), s()));
	      }e = e || {};var u,
	          h,
	          d,
	          p = n(t),
	          m = parseInt(e.position) || l.DEFAULTS.position,
	          f = p.scrollTop(),
	          v = f,
	          g = m - f,
	          y = e.speed || Math.min(750, Math.min(1500, Math.abs(f - m))),
	          w = function w() {
	        s();
	      };if (!r && 0 !== g) {
	        p.on("touchstart.smoothscroll.amui", w), r = !0;var b = o(c);
	      }
	    };l.DEFAULTS = { position: 0 }, n.fn.smoothScroll = function (t) {
	      return this.each(function () {
	        new l(this, t);
	      });
	    }, n(document).on("click.smoothScroll.amui.data-api", "[data-am-smooth-scroll]", function (t) {
	      t.preventDefault();var e = s.utils.parseOptions(n(this).data("amSmoothScroll"));n(window).smoothScroll(e);
	    }), t.exports = l;
	  }, function (t, e, i) {
	    "use strict";
	    var n = i(1),
	        s = i(2);n.expr[":"].containsNC = function (t, e, i, n) {
	      return (t.textContent || t.innerText || "").toLowerCase().indexOf((i[3] || "").toLowerCase()) >= 0;
	    };var o = function o(t, e) {
	      this.$element = n(t), this.options = n.extend({}, o.DEFAULTS, { placeholder: t.getAttribute("placeholder") || o.DEFAULTS.placeholder }, e), this.$originalOptions = this.$element.find("option"), this.multiple = t.multiple, this.$selector = null, this.initialized = !1, this.init();
	    };o.DEFAULTS = { btnWidth: null, btnSize: null, btnStyle: "default", dropUp: 0, maxHeight: null, maxChecked: null, placeholder: "\u70B9\u51FB\u9009\u62E9...", selectedClass: "am-checked", disabledClass: "am-disabled", searchBox: !1, tpl: "<div class=\"am-selected am-dropdown <%= dropUp ? 'am-dropdown-up': '' %>\" id=\"<%= id %>\" data-am-dropdown>  <button type=\"button\" class=\"am-selected-btn am-btn am-dropdown-toggle\">    <span class=\"am-selected-status am-fl\"></span>    <i class=\"am-selected-icon am-icon-caret-<%= dropUp ? 'up' : 'down' %>\"></i>  </button>  <div class=\"am-selected-content am-dropdown-content\">    <h2 class=\"am-selected-header\"><span class=\"am-icon-chevron-left\">\u8FD4\u56DE</span></h2>   <% if (searchBox) { %>   <div class=\"am-selected-search\">     <input autocomplete=\"off\" class=\"am-form-field am-input-sm\" />   </div>   <% } %>    <ul class=\"am-selected-list\">      <% for (var i = 0; i < options.length; i++) { %>       <% var option = options[i] %>       <% if (option.header) { %>  <li data-group=\"<%= option.group %>\" class=\"am-selected-list-header\">       <%= option.text %></li>       <% } else { %>       <li class=\"<%= option.classNames%>\"          data-index=\"<%= option.index %>\"          data-group=\"<%= option.group || 0 %>\"          data-value=\"<%= option.value %>\" >         <span class=\"am-selected-text\"><%= option.text %></span>         <i class=\"am-icon-check\"></i></li>      <% } %>      <% } %>    </ul>    <div class=\"am-selected-hint\"></div>  </div></div>", listTpl: '<% for (var i = 0; i < options.length; i++) { %>       <% var option = options[i] %>       <% if (option.header) { %>  <li data-group="<%= option.group %>" class="am-selected-list-header">       <%= option.text %></li>       <% } else { %>       <li class="<%= option.classNames %>"          data-index="<%= option.index %>"          data-group="<%= option.group || 0 %>"          data-value="<%= option.value %>" >         <span class="am-selected-text"><%= option.text %></span>         <i class="am-icon-check"></i></li>      <% } %>      <% } %>' }, o.prototype.init = function () {
	      var t = this,
	          e = this.$element,
	          i = this.options;e.hide();var o = { id: s.utils.generateGUID("am-selected"), multiple: this.multiple, options: [], searchBox: i.searchBox, dropUp: i.dropUp, placeholder: i.placeholder };this.$selector = n(s.template(this.options.tpl, o)), this.$selector.css({ width: this.options.btnWidth }), this.$list = this.$selector.find(".am-selected-list"), this.$searchField = this.$selector.find(".am-selected-search input"), this.$hint = this.$selector.find(".am-selected-hint");var a = this.$selector.find(".am-selected-btn"),
	          r = [];i.btnSize && r.push("am-btn-" + i.btnSize), i.btnStyle && r.push("am-btn-" + i.btnStyle), a.addClass(r.join(" ")), this.$selector.dropdown({ justify: a }), e[0].disabled && this.disable(), i.maxHeight && this.$selector.find(".am-selected-list").css({ "max-height": i.maxHeight, "overflow-y": "scroll" });var l = [],
	          c = e.attr("minchecked"),
	          u = e.attr("maxchecked") || i.maxChecked;this.maxChecked = u || 1 / 0, e[0].required && l.push("\u5FC5\u9009"), (c || u) && (c && l.push("\u81F3\u5C11\u9009\u62E9 " + c + " \u9879"), u && l.push("\u81F3\u591A\u9009\u62E9 " + u + " \u9879")), this.$hint.text(l.join("\uFF0C")), this.renderOptions(), this.$element.after(this.$selector), this.dropdown = this.$selector.data("amui.dropdown"), this.$status = this.$selector.find(".am-selected-status"), setTimeout(function () {
	        t.syncData(), t.initialized = !0;
	      }, 0), this.bindEvents();
	    }, o.prototype.renderOptions = function () {
	      function t(t, e, s) {
	        if ("" === e.value) return !0;var o = "";e.disabled && (o += i.disabledClass), !e.disabled && e.selected && (o += i.selectedClass), n.push({ group: s, index: t, classNames: o, text: e.text, value: e.value });
	      }var e = this.$element,
	          i = this.options,
	          n = [],
	          o = e.find("optgroup");this.$originalOptions = this.$element.find("option"), this.multiple || null !== e.val() || this.$originalOptions.length && (this.$originalOptions.get(0).selected = !0), o.length ? o.each(function (e) {
	        n.push({ header: !0, group: e + 1, text: this.label }), o.eq(e).find("option").each(function (i, n) {
	          t(i, n, e);
	        });
	      }) : this.$originalOptions.each(function (e, i) {
	        t(e, i, null);
	      }), this.$list.html(s.template(i.listTpl, { options: n })), this.$shadowOptions = this.$list.find("> li").not(".am-selected-list-header");
	    }, o.prototype.setChecked = function (t) {
	      var e = this.options,
	          i = n(t),
	          s = i.hasClass(e.selectedClass);if (this.multiple) {
	        var o = this.$list.find("." + e.selectedClass).length;if (!s && this.maxChecked <= o) return this.$element.trigger("checkedOverflow.selected.amui", { selected: this }), !1;
	      } else {
	        if (this.dropdown.close(), s) return !1;this.$shadowOptions.not(i).removeClass(e.selectedClass);
	      }i.toggleClass(e.selectedClass), this.syncData(t);
	    }, o.prototype.syncData = function (t) {
	      var e = this,
	          i = this.options,
	          s = [],
	          o = n([]);if (this.$shadowOptions.filter("." + i.selectedClass).each(function () {
	        var i = n(this);s.push(i.find(".am-selected-text").text()), t || (o = o.add(e.$originalOptions.filter('[value="' + i.data("value") + '"]').prop("selected", !0)));
	      }), t) {
	        var a = n(t);this.$originalOptions.filter('[value="' + a.data("value") + '"]').prop("selected", a.hasClass(i.selectedClass));
	      } else this.$originalOptions.not(o).prop("selected", !1);this.$element.val() || (s = [i.placeholder]), this.$status.text(s.join(", ")), this.initialized && this.$element.trigger("change");
	    }, o.prototype.bindEvents = function () {
	      var t = this,
	          e = "am-selected-list-header",
	          i = s.utils.debounce(function (i) {
	        t.$shadowOptions.not("." + e).hide().filter(':containsNC("' + i.target.value + '")').show();
	      }, 100);this.$list.on("click", "> li", function (i) {
	        var s = n(this);!s.hasClass(t.options.disabledClass) && !s.hasClass(e) && t.setChecked(this);
	      }), this.$searchField.on("keyup.selected.amui", i), this.$selector.on("closed.dropdown.amui", function () {
	        t.$searchField.val(""), t.$shadowOptions.css({ display: "" });
	      }), this.$element.on("validated.field.validator.amui", function (e) {
	        if (e.validity) {
	          var i = e.validity.valid,
	              n = "am-invalid";t.$selector[(i ? "remove" : "add") + "Class"](n);
	        }
	      }), s.support.mutationobserver && (this.observer = new s.support.mutationobserver(function () {
	        t.$element.trigger("changed.selected.amui");
	      }), this.observer.observe(this.$element[0], { childList: !0, subtree: !0, characterData: !0 })), this.$element.on("changed.selected.amui", function () {
	        t.renderOptions(), t.syncData();
	      });
	    }, o.prototype.select = function (t) {
	      var e;e = "number" == typeof t ? this.$list.find("> li").not(".am-selected-list-header").eq(t) : "string" == typeof t ? this.$list.find(t) : n(t), e.trigger("click");
	    }, o.prototype.enable = function () {
	      this.$element.prop("disable", !1), this.$selector.dropdown("enable");
	    }, o.prototype.disable = function () {
	      this.$element.prop("disable", !0), this.$selector.dropdown("disable");
	    }, o.prototype.destroy = function () {
	      this.$element.removeData("amui.selected").show(), this.$selector.remove();
	    }, s.plugin("selected", o), s.ready(function (t) {
	      n("[data-am-selected]", t).selected();
	    }), t.exports = o;
	  }, function (t, e, i) {
	    "use strict";
	    i(15);var n = i(1),
	        s = i(2),
	        o = i(26),
	        a = document,
	        r = n(a),
	        l = function l(t) {
	      this.options = n.extend({}, l.DEFAULTS, t || {}), this.$element = null, this.$wechatQr = null, this.pics = null, this.inited = !1, this.active = !1;
	    };l.DEFAULTS = { sns: ["weibo", "qq", "qzone", "tqq", "wechat", "renren"], title: "\u5206\u4EAB\u5230", cancel: "\u53D6\u6D88", closeOnShare: !0, id: s.utils.generateGUID("am-share"), desc: "Hi\uFF0C\u5B64\u591C\u89C2\u5929\u8C61\uFF0C\u53D1\u73B0\u4E00\u4E2A\u4E0D\u9519\u7684\u897F\u897F\uFF0C\u5206\u4EAB\u4E00\u4E0B\u4E0B ;-)", via: "Amaze UI", tpl: '<div class="am-share am-modal-actions" id="<%= id %>"><h3 class="am-share-title"><%= title %></h3><ul class="am-share-sns am-avg-sm-3"><% for(var i = 0; i < sns.length; i++) {%><li><a href="<%= sns[i].shareUrl %>" data-am-share-to="<%= sns[i].id %>" ><i class="am-icon-<%= sns[i].icon %>"></i><span><%= sns[i].title %></span></a></li><% } %></ul><div class="am-share-footer"><button class="am-btn am-btn-default am-btn-block" data-am-share-close><%= cancel %></button></div></div>' }, l.SNS = { weibo: { title: "\u65B0\u6D6A\u5FAE\u535A", url: "http://service.weibo.com/share/share.php", width: 620, height: 450, icon: "weibo" }, qq: { title: "QQ \u597D\u53CB", url: "http://connect.qq.com/widget/shareqq/index.html", icon: "qq" }, qzone: { title: "QQ \u7A7A\u95F4", url: "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey", icon: "star" }, tqq: { title: "\u817E\u8BAF\u5FAE\u535A", url: "http://v.t.qq.com/share/share.php", icon: "tencent-weibo" }, wechat: { title: "\u5FAE\u4FE1", url: "[qrcode]", icon: "wechat" }, renren: { title: "\u4EBA\u4EBA\u7F51", url: "http://widget.renren.com/dialog/share", icon: "renren" }, douban: { title: "\u8C46\u74E3", url: "http://www.douban.com/recommend/", icon: "share-alt" }, mail: { title: "\u90AE\u4EF6\u5206\u4EAB", url: "mailto:", icon: "envelope-o" }, sms: { title: "\u77ED\u4FE1\u5206\u4EAB", url: "sms:", icon: "comment" } }, l.prototype.render = function () {
	      var t = this.options,
	          e = [],
	          i = encodeURIComponent(a.title),
	          o = encodeURIComponent(a.location),
	          r = "?body=" + i + o;return t.sns.forEach(function (n, s) {
	        if (l.SNS[n]) {
	          var a,
	              c = l.SNS[n];c.id = n, a = "mail" === n ? r + "&subject=" + t.desc : "sms" === n ? r : "?url=" + o + "&title=" + i, c.shareUrl = c.url + a, e.push(c);
	        }
	      }), s.template(t.tpl, n.extend({}, t, { sns: e }));
	    }, l.prototype.init = function () {
	      if (!this.inited) {
	        var t = this,
	            e = "[data-am-share-to]";r.ready(n.proxy(function () {
	          n("body").append(this.render()), this.$element = n("#" + this.options.id), this.$element.find("[data-am-share-close]").on("click.share.amui", function () {
	            t.close();
	          });
	        }, this)), r.on("click.share.amui", e, n.proxy(function (t) {
	          var i = n(t.target),
	              s = i.is(e) && i || i.parent(e),
	              o = s.attr("data-am-share-to");"mail" !== o && "sms" !== o && (t.preventDefault(), this.shareTo(o, this.setData(o))), this.close();
	        }, this)), this.inited = !0;
	      }
	    }, l.prototype.open = function () {
	      !this.inited && this.init(), this.$element && this.$element.modal("open"), this.$element.trigger("open.share.amui"), this.active = !0;
	    }, l.prototype.close = function () {
	      this.$element && this.$element.modal("close"), this.$element.trigger("close.share.amui"), this.active = !1;
	    }, l.prototype.toggle = function () {
	      this.active ? this.close() : this.open();
	    }, l.prototype.setData = function (t) {
	      if (t) {
	        var e = { url: a.location, title: a.title },
	            i = this.options.desc,
	            n = this.pics || [],
	            s = /^(qzone|qq|tqq)$/;if (s.test(t) && !n.length) {
	          for (var o = a.images, r = 0; r < o.length && r < 10; r++) {
	            !!o[r].src && n.push(encodeURIComponent(o[r].src));
	          }this.pics = n;
	        }switch (t) {case "qzone":
	            e.desc = i, e.site = this.options.via, e.pics = n.join("|");break;case "qq":
	            e.desc = i, e.site = this.options.via, e.pics = n[0];break;case "tqq":
	            e.pic = n.join("|");}return e;
	      }
	    }, l.prototype.shareTo = function (t, e) {
	      var i = l.SNS[t];if (i) {
	        if ("wechat" === t || "weixin" === t) return this.wechatQr();var n = [];for (var s in e) {
	          e[s] && n.push(s.toString() + "=" + ("pic" === s || "pics" === s ? e[s] : encodeURIComponent(e[s])));
	        }window.open(i.url + "?" + n.join("&"));
	      }
	    }, l.prototype.wechatQr = function () {
	      if (!this.$wechatQr) {
	        var t = s.utils.generateGUID("am-share-wechat"),
	            e = n("<div class=\"am-modal am-modal-no-btn am-share-wechat-qr\"><div class=\"am-modal-dialog\"><div class=\"am-modal-hd\">\u5206\u4EAB\u5230\u5FAE\u4FE1 <a href=\"\" class=\"am-close am-close-spin\" data-am-modal-close>&times;</a> </div><div class=\"am-modal-bd\"><div class=\"am-share-wx-qr\"></div><div class=\"am-share-wechat-tip\">\u6253\u5F00\u5FAE\u4FE1\uFF0C\u70B9\u51FB\u5E95\u90E8\u7684<em>\u53D1\u73B0</em>\uFF0C<br/> \u4F7F\u7528<em>\u626B\u4E00\u626B</em>\u5C06\u7F51\u9875\u5206\u4EAB\u81F3\u670B\u53CB\u5708</div></div></div></div>");e.attr("id", t);var i = new o({ render: "canvas", correctLevel: 0, text: a.location.href, width: 180, height: 180, background: "#fff", foreground: "#000" });e.find(".am-share-wx-qr").html(i), e.appendTo(n("body")), this.$wechatQr = n("#" + t);
	      }this.$wechatQr.modal("open");
	    };var c = new l();r.on("click.share.amui.data-api", '[data-am-toggle="share"]', function (t) {
	      t.preventDefault(), c.toggle();
	    }), t.exports = s.share = c;
	  }, function (t, e, i) {
	    function n(t) {
	      return t < 128 ? [t] : t < 2048 ? (c0 = 192 + (t >> 6), c1 = 128 + (63 & t), [c0, c1]) : (c0 = 224 + (t >> 12), c1 = 128 + (t >> 6 & 63), c2 = 128 + (63 & t), [c0, c1, c2]);
	    }function s(t) {
	      for (var e = [], i = 0; i < t.length; i++) {
	        for (var s = t.charCodeAt(i), o = n(s), a = 0; a < o.length; a++) {
	          e.push(o[a]);
	        }
	      }return e;
	    }function o(t, e) {
	      this.typeNumber = -1, this.errorCorrectLevel = e, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.rsBlocks = null, this.totalDataCount = -1, this.data = t, this.utf8bytes = s(t), this.make();
	    }function a(t, e) {
	      if (void 0 == t.length) throw new Error(t.length + "/" + e);for (var i = 0; i < t.length && 0 == t[i];) {
	        i++;
	      }this.num = new Array(t.length - i + e);for (var n = 0; n < t.length - i; n++) {
	        this.num[n] = t[n + i];
	      }
	    }function r() {
	      this.buffer = new Array(), this.length = 0;
	    }function n(t) {
	      return t < 128 ? [t] : t < 2048 ? (c0 = 192 + (t >> 6), c1 = 128 + (63 & t), [c0, c1]) : (c0 = 224 + (t >> 12), c1 = 128 + (t >> 6 & 63), c2 = 128 + (63 & t), [c0, c1, c2]);
	    }function s(t) {
	      for (var e = [], i = 0; i < t.length; i++) {
	        for (var s = t.charCodeAt(i), o = n(s), a = 0; a < o.length; a++) {
	          e.push(o[a]);
	        }
	      }return e;
	    }function o(t, e) {
	      this.typeNumber = -1, this.errorCorrectLevel = e, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.rsBlocks = null, this.totalDataCount = -1, this.data = t, this.utf8bytes = s(t), this.make();
	    }function a(t, e) {
	      if (void 0 == t.length) throw new Error(t.length + "/" + e);for (var i = 0; i < t.length && 0 == t[i];) {
	        i++;
	      }this.num = new Array(t.length - i + e);for (var n = 0; n < t.length - i; n++) {
	        this.num[n] = t[n + i];
	      }
	    }function r() {
	      this.buffer = new Array(), this.length = 0;
	    }var c = i(1),
	        u = i(2),
	        h = [],
	        d = function d(t) {
	      "string" == typeof t && (t = { text: t }), this.options = c.extend({}, { text: "", render: "", width: 256, height: 256, correctLevel: 3, background: "#ffffff", foreground: "#000000" }, t);for (var e = null, i = 0, n = h.length; i < n; i++) {
	        if (h[i].text == this.options.text && h[i].text.correctLevel == this.options.correctLevel) {
	          e = h[i].obj;break;
	        }
	      }if (i == n && (e = new o(this.options.text, this.options.correctLevel), h.push({ text: this.options.text, correctLevel: this.options.correctLevel, obj: e })), this.options.render) switch (this.options.render) {case "canvas":
	          return this.createCanvas(e);case "table":
	          return this.createTable(e);case "svg":
	          return this.createSVG(e);default:
	          return this.createDefault(e);}return this.createDefault(e);
	    };d.prototype.createDefault = function (t) {
	      var e = document.createElement("canvas");return e.getContext ? this.createCanvas(t) : document.createElementNS && document.createElementNS(SVG_NS, "svg").createSVGRect ? this.createSVG(t) : this.createTable(t);
	    }, d.prototype.createCanvas = function (t) {
	      var e = document.createElement("canvas");e.width = this.options.width, e.height = this.options.height;for (var i = e.getContext("2d"), n = (this.options.width / t.getModuleCount()).toPrecision(4), s = this.options.height / t.getModuleCount().toPrecision(4), o = 0; o < t.getModuleCount(); o++) {
	        for (var a = 0; a < t.getModuleCount(); a++) {
	          i.fillStyle = t.modules[o][a] ? this.options.foreground : this.options.background;var r = Math.ceil((a + 1) * n) - Math.floor(a * n),
	              l = Math.ceil((o + 1) * n) - Math.floor(o * n);i.fillRect(Math.round(a * n), Math.round(o * s), r, l);
	        }
	      }return e;
	    }, d.prototype.createTable = function (t) {
	      var e = [];e.push('<table style="border:0px; margin:0px; padding:0px; border-collapse:collapse; background-color: ' + this.options.background + ';">');var i = -1,
	          n = -1,
	          s = -1,
	          o = -1;i = s = Math.floor(this.options.width / t.getModuleCount()), n = o = Math.floor(this.options.height / t.getModuleCount()), s <= 0 && (i = t.getModuleCount() < 80 ? 2 : 1), o <= 0 && (n = t.getModuleCount() < 80 ? 2 : 1), foreTd = '<td style="border:0px; margin:0px; padding:0px; width:' + i + "px; background-color: " + this.options.foreground + '"></td>', backTd = '<td style="border:0px; margin:0px; padding:0px; width:' + i + "px; background-color: " + this.options.background + '"></td>', l = t.getModuleCount();for (var a = 0; a < l; a++) {
	        e.push('<tr style="border:0px; margin:0px; padding:0px; height: ' + n + 'px">');for (var r = 0; r < l; r++) {
	          e.push(t.modules[a][r] ? foreTd : backTd);
	        }e.push("</tr>");
	      }e.push("</table>");var c = document.createElement("span");return c.innerHTML = e.join(""), c.firstChild;
	    }, d.prototype.createSVG = function (t) {
	      for (var e, i, n, s, o = t.getModuleCount(), a = this.options.height / this.options.width, r = '<svg xmlns="http://www.w3.org/2000/svg" width="' + this.options.width + 'px" height="' + this.options.height + 'px" viewbox="0 0 ' + 10 * o + " " + 10 * o * a + '">', l = "<path ", u = ' style="stroke-width:0.5;stroke:' + this.options.foreground + ";fill:" + this.options.foreground + ';"></path>', h = ' style="stroke-width:0.5;stroke:' + this.options.background + ";fill:" + this.options.background + ';"></path>', d = 0; d < o; d++) {
	        for (var p = 0; p < o; p++) {
	          e = 10 * p, n = 10 * d * a, i = 10 * (p + 1), s = 10 * (d + 1) * a, r += l + 'd="M ' + e + "," + n + " L " + i + "," + n + " L " + i + "," + s + " L " + e + "," + s + ' Z"', r += t.modules[d][p] ? u : h;
	        }
	      }return r += "</svg>", c(r)[0];
	    }, o.prototype = { constructor: o, getModuleCount: function getModuleCount() {
	        return this.moduleCount;
	      }, make: function make() {
	        this.getRightType(), this.dataCache = this.createData(), this.createQrcode();
	      }, makeImpl: function makeImpl(t) {
	        this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount);for (var e = 0; e < this.moduleCount; e++) {
	          this.modules[e] = new Array(this.moduleCount);
	        }this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(!0, t), this.typeNumber >= 7 && this.setupTypeNumber(!0), this.mapData(this.dataCache, t);
	      }, setupPositionProbePattern: function setupPositionProbePattern(t, e) {
	        for (var i = -1; i <= 7; i++) {
	          if (!(t + i <= -1 || this.moduleCount <= t + i)) for (var n = -1; n <= 7; n++) {
	            e + n <= -1 || this.moduleCount <= e + n || (0 <= i && i <= 6 && (0 == n || 6 == n) || 0 <= n && n <= 6 && (0 == i || 6 == i) || 2 <= i && i <= 4 && 2 <= n && n <= 4 ? this.modules[t + i][e + n] = !0 : this.modules[t + i][e + n] = !1);
	          }
	        }
	      }, createQrcode: function createQrcode() {
	        for (var t = 0, e = 0, i = null, n = 0; n < 8; n++) {
	          this.makeImpl(n);var s = f.getLostPoint(this);(0 == n || t > s) && (t = s, e = n, i = this.modules);
	        }this.modules = i, this.setupTypeInfo(!1, e), this.typeNumber >= 7 && this.setupTypeNumber(!1);
	      }, setupTimingPattern: function setupTimingPattern() {
	        for (var t = 8; t < this.moduleCount - 8; t++) {
	          null == this.modules[t][6] && (this.modules[t][6] = t % 2 == 0, null == this.modules[6][t] && (this.modules[6][t] = t % 2 == 0));
	        }
	      }, setupPositionAdjustPattern: function setupPositionAdjustPattern() {
	        for (var t = f.getPatternPosition(this.typeNumber), e = 0; e < t.length; e++) {
	          for (var i = 0; i < t.length; i++) {
	            var n = t[e],
	                s = t[i];if (null == this.modules[n][s]) for (var o = -2; o <= 2; o++) {
	              for (var a = -2; a <= 2; a++) {
	                o == -2 || 2 == o || a == -2 || 2 == a || 0 == o && 0 == a ? this.modules[n + o][s + a] = !0 : this.modules[n + o][s + a] = !1;
	              }
	            }
	          }
	        }
	      }, setupTypeNumber: function setupTypeNumber(t) {
	        for (var e = f.getBCHTypeNumber(this.typeNumber), i = 0; i < 18; i++) {
	          var n = !t && 1 == (e >> i & 1);this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = n, this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = n;
	        }
	      }, setupTypeInfo: function setupTypeInfo(t, e) {
	        for (var i = p[this.errorCorrectLevel] << 3 | e, n = f.getBCHTypeInfo(i), s = 0; s < 15; s++) {
	          var o = !t && 1 == (n >> s & 1);s < 6 ? this.modules[s][8] = o : s < 8 ? this.modules[s + 1][8] = o : this.modules[this.moduleCount - 15 + s][8] = o;var o = !t && 1 == (n >> s & 1);s < 8 ? this.modules[8][this.moduleCount - s - 1] = o : s < 9 ? this.modules[8][15 - s - 1 + 1] = o : this.modules[8][15 - s - 1] = o;
	        }this.modules[this.moduleCount - 8][8] = !t;
	      }, createData: function createData() {
	        var t = new r(),
	            e = this.typeNumber > 9 ? 16 : 8;t.put(4, 4), t.put(this.utf8bytes.length, e);for (var i = 0, n = this.utf8bytes.length; i < n; i++) {
	          t.put(this.utf8bytes[i], 8);
	        }for (t.length + 4 <= 8 * this.totalDataCount && t.put(0, 4); t.length % 8 != 0;) {
	          t.putBit(!1);
	        }for (;;) {
	          if (t.length >= 8 * this.totalDataCount) break;if (t.put(o.PAD0, 8), t.length >= 8 * this.totalDataCount) break;t.put(o.PAD1, 8);
	        }return this.createBytes(t);
	      }, createBytes: function createBytes(t) {
	        for (var e = 0, i = 0, n = 0, s = this.rsBlock.length / 3, o = new Array(), r = 0; r < s; r++) {
	          for (var l = this.rsBlock[3 * r + 0], c = this.rsBlock[3 * r + 1], u = this.rsBlock[3 * r + 2], h = 0; h < l; h++) {
	            o.push([u, c]);
	          }
	        }for (var d = new Array(o.length), p = new Array(o.length), m = 0; m < o.length; m++) {
	          var v = o[m][0],
	              g = o[m][1] - v;i = Math.max(i, v), n = Math.max(n, g), d[m] = new Array(v);for (var r = 0; r < d[m].length; r++) {
	            d[m][r] = 255 & t.buffer[r + e];
	          }e += v;var y = f.getErrorCorrectPolynomial(g),
	              w = new a(d[m], y.getLength() - 1),
	              b = w.mod(y);p[m] = new Array(y.getLength() - 1);for (var r = 0; r < p[m].length; r++) {
	            var T = r + b.getLength() - p[m].length;p[m][r] = T >= 0 ? b.get(T) : 0;
	          }
	        }for (var x = new Array(this.totalDataCount), C = 0, r = 0; r < i; r++) {
	          for (var m = 0; m < o.length; m++) {
	            r < d[m].length && (x[C++] = d[m][r]);
	          }
	        }for (var r = 0; r < n; r++) {
	          for (var m = 0; m < o.length; m++) {
	            r < p[m].length && (x[C++] = p[m][r]);
	          }
	        }return x;
	      }, mapData: function mapData(t, e) {
	        for (var i = -1, n = this.moduleCount - 1, s = 7, o = 0, a = this.moduleCount - 1; a > 0; a -= 2) {
	          for (6 == a && a--;;) {
	            for (var r = 0; r < 2; r++) {
	              if (null == this.modules[n][a - r]) {
	                var l = !1;o < t.length && (l = 1 == (t[o] >>> s & 1));var c = f.getMask(e, n, a - r);c && (l = !l), this.modules[n][a - r] = l, s--, s == -1 && (o++, s = 7);
	              }
	            }if (n += i, n < 0 || this.moduleCount <= n) {
	              n -= i, i = -i;break;
	            }
	          }
	        }
	      } }, o.PAD0 = 236, o.PAD1 = 17;for (var p = [1, 0, 3, 2], m = { PATTERN000: 0, PATTERN001: 1, PATTERN010: 2, PATTERN011: 3, PATTERN100: 4, PATTERN101: 5, PATTERN110: 6, PATTERN111: 7 }, f = { PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]], G15: 1335, G18: 7973, G15_MASK: 21522, getBCHTypeInfo: function getBCHTypeInfo(t) {
	        for (var e = t << 10; f.getBCHDigit(e) - f.getBCHDigit(f.G15) >= 0;) {
	          e ^= f.G15 << f.getBCHDigit(e) - f.getBCHDigit(f.G15);
	        }return (t << 10 | e) ^ f.G15_MASK;
	      }, getBCHTypeNumber: function getBCHTypeNumber(t) {
	        for (var e = t << 12; f.getBCHDigit(e) - f.getBCHDigit(f.G18) >= 0;) {
	          e ^= f.G18 << f.getBCHDigit(e) - f.getBCHDigit(f.G18);
	        }return t << 12 | e;
	      }, getBCHDigit: function getBCHDigit(t) {
	        for (var e = 0; 0 != t;) {
	          e++, t >>>= 1;
	        }return e;
	      }, getPatternPosition: function getPatternPosition(t) {
	        return f.PATTERN_POSITION_TABLE[t - 1];
	      }, getMask: function getMask(t, e, i) {
	        switch (t) {case m.PATTERN000:
	            return (e + i) % 2 == 0;case m.PATTERN001:
	            return e % 2 == 0;case m.PATTERN010:
	            return i % 3 == 0;case m.PATTERN011:
	            return (e + i) % 3 == 0;case m.PATTERN100:
	            return (Math.floor(e / 2) + Math.floor(i / 3)) % 2 == 0;case m.PATTERN101:
	            return e * i % 2 + e * i % 3 == 0;case m.PATTERN110:
	            return (e * i % 2 + e * i % 3) % 2 == 0;case m.PATTERN111:
	            return (e * i % 3 + (e + i) % 2) % 2 == 0;default:
	            throw new Error("bad maskPattern:" + t);}
	      }, getErrorCorrectPolynomial: function getErrorCorrectPolynomial(t) {
	        for (var e = new a([1], 0), i = 0; i < t; i++) {
	          e = e.multiply(new a([1, v.gexp(i)], 0));
	        }return e;
	      }, getLostPoint: function getLostPoint(t) {
	        for (var e = t.getModuleCount(), i = 0, n = 0, s = 0; s < e; s++) {
	          for (var o = 0, a = t.modules[s][0], r = 0; r < e; r++) {
	            var l = t.modules[s][r];if (r < e - 6 && l && !t.modules[s][r + 1] && t.modules[s][r + 2] && t.modules[s][r + 3] && t.modules[s][r + 4] && !t.modules[s][r + 5] && t.modules[s][r + 6] && (r < e - 10 ? t.modules[s][r + 7] && t.modules[s][r + 8] && t.modules[s][r + 9] && t.modules[s][r + 10] && (i += 40) : r > 3 && t.modules[s][r - 1] && t.modules[s][r - 2] && t.modules[s][r - 3] && t.modules[s][r - 4] && (i += 40)), s < e - 1 && r < e - 1) {
	              var c = 0;l && c++, t.modules[s + 1][r] && c++, t.modules[s][r + 1] && c++, t.modules[s + 1][r + 1] && c++, 0 != c && 4 != c || (i += 3);
	            }a ^ l ? o++ : (a = l, o >= 5 && (i += 3 + o - 5), o = 1), l && n++;
	          }
	        }for (var r = 0; r < e; r++) {
	          for (var o = 0, a = t.modules[0][r], s = 0; s < e; s++) {
	            var l = t.modules[s][r];s < e - 6 && l && !t.modules[s + 1][r] && t.modules[s + 2][r] && t.modules[s + 3][r] && t.modules[s + 4][r] && !t.modules[s + 5][r] && t.modules[s + 6][r] && (s < e - 10 ? t.modules[s + 7][r] && t.modules[s + 8][r] && t.modules[s + 9][r] && t.modules[s + 10][r] && (i += 40) : s > 3 && t.modules[s - 1][r] && t.modules[s - 2][r] && t.modules[s - 3][r] && t.modules[s - 4][r] && (i += 40)), a ^ l ? o++ : (a = l, o >= 5 && (i += 3 + o - 5), o = 1);
	          }
	        }var u = Math.abs(100 * n / e / e - 50) / 5;return i += 10 * u;
	      } }, v = { glog: function glog(t) {
	        if (t < 1) throw new Error("glog(" + t + ")");return v.LOG_TABLE[t];
	      }, gexp: function gexp(t) {
	        for (; t < 0;) {
	          t += 255;
	        }for (; t >= 256;) {
	          t -= 255;
	        }return v.EXP_TABLE[t];
	      }, EXP_TABLE: new Array(256), LOG_TABLE: new Array(256) }, g = 0; g < 8; g++) {
	      v.EXP_TABLE[g] = 1 << g;
	    }for (var g = 8; g < 256; g++) {
	      v.EXP_TABLE[g] = v.EXP_TABLE[g - 4] ^ v.EXP_TABLE[g - 5] ^ v.EXP_TABLE[g - 6] ^ v.EXP_TABLE[g - 8];
	    }for (var g = 0; g < 255; g++) {
	      v.LOG_TABLE[v.EXP_TABLE[g]] = g;
	    }a.prototype = { get: function get(t) {
	        return this.num[t];
	      }, getLength: function getLength() {
	        return this.num.length;
	      }, multiply: function multiply(t) {
	        for (var e = new Array(this.getLength() + t.getLength() - 1), i = 0; i < this.getLength(); i++) {
	          for (var n = 0; n < t.getLength(); n++) {
	            e[i + n] ^= v.gexp(v.glog(this.get(i)) + v.glog(t.get(n)));
	          }
	        }return new a(e, 0);
	      }, mod: function mod(t) {
	        var e = this.getLength(),
	            i = t.getLength();if (e - i < 0) return this;for (var n = new Array(e), s = 0; s < e; s++) {
	          n[s] = this.get(s);
	        }for (; n.length >= i;) {
	          for (var o = v.glog(n[0]) - v.glog(t.get(0)), s = 0; s < t.getLength(); s++) {
	            n[s] ^= v.gexp(v.glog(t.get(s)) + o);
	          }for (; 0 == n[0];) {
	            n.shift();
	          }
	        }return new a(n, 0);
	      } };var y = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];o.prototype.getRightType = function () {
	      for (var t = 1; t < 41; t++) {
	        var e = y[4 * (t - 1) + this.errorCorrectLevel];if (void 0 == e) throw new Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + this.errorCorrectLevel);for (var i = e.length / 3, n = 0, s = 0; s < i; s++) {
	          var o = e[3 * s + 0],
	              a = e[3 * s + 2];n += a * o;
	        }var r = t > 9 ? 2 : 1;if (this.utf8bytes.length + r < n || 40 == t) {
	          this.typeNumber = t, this.rsBlock = e, this.totalDataCount = n;break;
	        }
	      }
	    }, r.prototype = { get: function get(t) {
	        var e = Math.floor(t / 8);return this.buffer[e] >>> 7 - t % 8 & 1;
	      }, put: function put(t, e) {
	        for (var i = 0; i < e; i++) {
	          this.putBit(t >>> e - i - 1 & 1);
	        }
	      }, putBit: function putBit(t) {
	        var e = Math.floor(this.length / 8);this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++;
	      } }, o.prototype = { constructor: o, getModuleCount: function getModuleCount() {
	        return this.moduleCount;
	      }, make: function make() {
	        this.getRightType(), this.dataCache = this.createData(), this.createQrcode();
	      }, makeImpl: function makeImpl(t) {
	        this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount);for (var e = 0; e < this.moduleCount; e++) {
	          this.modules[e] = new Array(this.moduleCount);
	        }this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(!0, t), this.typeNumber >= 7 && this.setupTypeNumber(!0), this.mapData(this.dataCache, t);
	      }, setupPositionProbePattern: function setupPositionProbePattern(t, e) {
	        for (var i = -1; i <= 7; i++) {
	          if (!(t + i <= -1 || this.moduleCount <= t + i)) for (var n = -1; n <= 7; n++) {
	            e + n <= -1 || this.moduleCount <= e + n || (0 <= i && i <= 6 && (0 == n || 6 == n) || 0 <= n && n <= 6 && (0 == i || 6 == i) || 2 <= i && i <= 4 && 2 <= n && n <= 4 ? this.modules[t + i][e + n] = !0 : this.modules[t + i][e + n] = !1);
	          }
	        }
	      }, createQrcode: function createQrcode() {
	        for (var t = 0, e = 0, i = null, n = 0; n < 8; n++) {
	          this.makeImpl(n);var s = f.getLostPoint(this);(0 == n || t > s) && (t = s, e = n, i = this.modules);
	        }this.modules = i, this.setupTypeInfo(!1, e), this.typeNumber >= 7 && this.setupTypeNumber(!1);
	      }, setupTimingPattern: function setupTimingPattern() {
	        for (var t = 8; t < this.moduleCount - 8; t++) {
	          null == this.modules[t][6] && (this.modules[t][6] = t % 2 == 0, null == this.modules[6][t] && (this.modules[6][t] = t % 2 == 0));
	        }
	      }, setupPositionAdjustPattern: function setupPositionAdjustPattern() {
	        for (var t = f.getPatternPosition(this.typeNumber), e = 0; e < t.length; e++) {
	          for (var i = 0; i < t.length; i++) {
	            var n = t[e],
	                s = t[i];if (null == this.modules[n][s]) for (var o = -2; o <= 2; o++) {
	              for (var a = -2; a <= 2; a++) {
	                o == -2 || 2 == o || a == -2 || 2 == a || 0 == o && 0 == a ? this.modules[n + o][s + a] = !0 : this.modules[n + o][s + a] = !1;
	              }
	            }
	          }
	        }
	      }, setupTypeNumber: function setupTypeNumber(t) {
	        for (var e = f.getBCHTypeNumber(this.typeNumber), i = 0; i < 18; i++) {
	          var n = !t && 1 == (e >> i & 1);this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = n, this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = n;
	        }
	      }, setupTypeInfo: function setupTypeInfo(t, e) {
	        for (var i = p[this.errorCorrectLevel] << 3 | e, n = f.getBCHTypeInfo(i), s = 0; s < 15; s++) {
	          var o = !t && 1 == (n >> s & 1);s < 6 ? this.modules[s][8] = o : s < 8 ? this.modules[s + 1][8] = o : this.modules[this.moduleCount - 15 + s][8] = o;var o = !t && 1 == (n >> s & 1);s < 8 ? this.modules[8][this.moduleCount - s - 1] = o : s < 9 ? this.modules[8][15 - s - 1 + 1] = o : this.modules[8][15 - s - 1] = o;
	        }this.modules[this.moduleCount - 8][8] = !t;
	      }, createData: function createData() {
	        var t = new r(),
	            e = this.typeNumber > 9 ? 16 : 8;t.put(4, 4), t.put(this.utf8bytes.length, e);for (var i = 0, n = this.utf8bytes.length; i < n; i++) {
	          t.put(this.utf8bytes[i], 8);
	        }for (t.length + 4 <= 8 * this.totalDataCount && t.put(0, 4); t.length % 8 != 0;) {
	          t.putBit(!1);
	        }for (;;) {
	          if (t.length >= 8 * this.totalDataCount) break;if (t.put(o.PAD0, 8), t.length >= 8 * this.totalDataCount) break;t.put(o.PAD1, 8);
	        }return this.createBytes(t);
	      }, createBytes: function createBytes(t) {
	        for (var e = 0, i = 0, n = 0, s = this.rsBlock.length / 3, o = new Array(), r = 0; r < s; r++) {
	          for (var l = this.rsBlock[3 * r + 0], c = this.rsBlock[3 * r + 1], u = this.rsBlock[3 * r + 2], h = 0; h < l; h++) {
	            o.push([u, c]);
	          }
	        }for (var d = new Array(o.length), p = new Array(o.length), m = 0; m < o.length; m++) {
	          var v = o[m][0],
	              g = o[m][1] - v;i = Math.max(i, v), n = Math.max(n, g), d[m] = new Array(v);for (var r = 0; r < d[m].length; r++) {
	            d[m][r] = 255 & t.buffer[r + e];
	          }e += v;var y = f.getErrorCorrectPolynomial(g),
	              w = new a(d[m], y.getLength() - 1),
	              b = w.mod(y);p[m] = new Array(y.getLength() - 1);for (var r = 0; r < p[m].length; r++) {
	            var T = r + b.getLength() - p[m].length;p[m][r] = T >= 0 ? b.get(T) : 0;
	          }
	        }for (var x = new Array(this.totalDataCount), C = 0, r = 0; r < i; r++) {
	          for (var m = 0; m < o.length; m++) {
	            r < d[m].length && (x[C++] = d[m][r]);
	          }
	        }for (var r = 0; r < n; r++) {
	          for (var m = 0; m < o.length; m++) {
	            r < p[m].length && (x[C++] = p[m][r]);
	          }
	        }return x;
	      }, mapData: function mapData(t, e) {
	        for (var i = -1, n = this.moduleCount - 1, s = 7, o = 0, a = this.moduleCount - 1; a > 0; a -= 2) {
	          for (6 == a && a--;;) {
	            for (var r = 0; r < 2; r++) {
	              if (null == this.modules[n][a - r]) {
	                var l = !1;o < t.length && (l = 1 == (t[o] >>> s & 1));var c = f.getMask(e, n, a - r);c && (l = !l), this.modules[n][a - r] = l, s--, s == -1 && (o++, s = 7);
	              }
	            }if (n += i, n < 0 || this.moduleCount <= n) {
	              n -= i, i = -i;break;
	            }
	          }
	        }
	      } }, o.PAD0 = 236, o.PAD1 = 17;for (var p = [1, 0, 3, 2], m = { PATTERN000: 0, PATTERN001: 1, PATTERN010: 2, PATTERN011: 3, PATTERN100: 4, PATTERN101: 5, PATTERN110: 6, PATTERN111: 7 }, f = { PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]], G15: 1335, G18: 7973, G15_MASK: 21522, getBCHTypeInfo: function getBCHTypeInfo(t) {
	        for (var e = t << 10; f.getBCHDigit(e) - f.getBCHDigit(f.G15) >= 0;) {
	          e ^= f.G15 << f.getBCHDigit(e) - f.getBCHDigit(f.G15);
	        }return (t << 10 | e) ^ f.G15_MASK;
	      }, getBCHTypeNumber: function getBCHTypeNumber(t) {
	        for (var e = t << 12; f.getBCHDigit(e) - f.getBCHDigit(f.G18) >= 0;) {
	          e ^= f.G18 << f.getBCHDigit(e) - f.getBCHDigit(f.G18);
	        }return t << 12 | e;
	      }, getBCHDigit: function getBCHDigit(t) {
	        for (var e = 0; 0 != t;) {
	          e++, t >>>= 1;
	        }return e;
	      }, getPatternPosition: function getPatternPosition(t) {
	        return f.PATTERN_POSITION_TABLE[t - 1];
	      }, getMask: function getMask(t, e, i) {
	        switch (t) {case m.PATTERN000:
	            return (e + i) % 2 == 0;case m.PATTERN001:
	            return e % 2 == 0;case m.PATTERN010:
	            return i % 3 == 0;case m.PATTERN011:
	            return (e + i) % 3 == 0;case m.PATTERN100:
	            return (Math.floor(e / 2) + Math.floor(i / 3)) % 2 == 0;case m.PATTERN101:
	            return e * i % 2 + e * i % 3 == 0;case m.PATTERN110:
	            return (e * i % 2 + e * i % 3) % 2 == 0;case m.PATTERN111:
	            return (e * i % 3 + (e + i) % 2) % 2 == 0;default:
	            throw new Error("bad maskPattern:" + t);}
	      }, getErrorCorrectPolynomial: function getErrorCorrectPolynomial(t) {
	        for (var e = new a([1], 0), i = 0; i < t; i++) {
	          e = e.multiply(new a([1, v.gexp(i)], 0));
	        }return e;
	      }, getLostPoint: function getLostPoint(t) {
	        for (var e = t.getModuleCount(), i = 0, n = 0, s = 0; s < e; s++) {
	          for (var o = 0, a = t.modules[s][0], r = 0; r < e; r++) {
	            var l = t.modules[s][r];if (r < e - 6 && l && !t.modules[s][r + 1] && t.modules[s][r + 2] && t.modules[s][r + 3] && t.modules[s][r + 4] && !t.modules[s][r + 5] && t.modules[s][r + 6] && (r < e - 10 ? t.modules[s][r + 7] && t.modules[s][r + 8] && t.modules[s][r + 9] && t.modules[s][r + 10] && (i += 40) : r > 3 && t.modules[s][r - 1] && t.modules[s][r - 2] && t.modules[s][r - 3] && t.modules[s][r - 4] && (i += 40)), s < e - 1 && r < e - 1) {
	              var c = 0;l && c++, t.modules[s + 1][r] && c++, t.modules[s][r + 1] && c++, t.modules[s + 1][r + 1] && c++, 0 != c && 4 != c || (i += 3);
	            }a ^ l ? o++ : (a = l, o >= 5 && (i += 3 + o - 5), o = 1), l && n++;
	          }
	        }for (var r = 0; r < e; r++) {
	          for (var o = 0, a = t.modules[0][r], s = 0; s < e; s++) {
	            var l = t.modules[s][r];s < e - 6 && l && !t.modules[s + 1][r] && t.modules[s + 2][r] && t.modules[s + 3][r] && t.modules[s + 4][r] && !t.modules[s + 5][r] && t.modules[s + 6][r] && (s < e - 10 ? t.modules[s + 7][r] && t.modules[s + 8][r] && t.modules[s + 9][r] && t.modules[s + 10][r] && (i += 40) : s > 3 && t.modules[s - 1][r] && t.modules[s - 2][r] && t.modules[s - 3][r] && t.modules[s - 4][r] && (i += 40)), a ^ l ? o++ : (a = l, o >= 5 && (i += 3 + o - 5), o = 1);
	          }
	        }var u = Math.abs(100 * n / e / e - 50) / 5;return i += 10 * u;
	      } }, v = { glog: function glog(t) {
	        if (t < 1) throw new Error("glog(" + t + ")");return v.LOG_TABLE[t];
	      }, gexp: function gexp(t) {
	        for (; t < 0;) {
	          t += 255;
	        }for (; t >= 256;) {
	          t -= 255;
	        }return v.EXP_TABLE[t];
	      }, EXP_TABLE: new Array(256), LOG_TABLE: new Array(256) }, g = 0; g < 8; g++) {
	      v.EXP_TABLE[g] = 1 << g;
	    }for (var g = 8; g < 256; g++) {
	      v.EXP_TABLE[g] = v.EXP_TABLE[g - 4] ^ v.EXP_TABLE[g - 5] ^ v.EXP_TABLE[g - 6] ^ v.EXP_TABLE[g - 8];
	    }for (var g = 0; g < 255; g++) {
	      v.LOG_TABLE[v.EXP_TABLE[g]] = g;
	    }a.prototype = { get: function get(t) {
	        return this.num[t];
	      }, getLength: function getLength() {
	        return this.num.length;
	      }, multiply: function multiply(t) {
	        for (var e = new Array(this.getLength() + t.getLength() - 1), i = 0; i < this.getLength(); i++) {
	          for (var n = 0; n < t.getLength(); n++) {
	            e[i + n] ^= v.gexp(v.glog(this.get(i)) + v.glog(t.get(n)));
	          }
	        }return new a(e, 0);
	      }, mod: function mod(t) {
	        var e = this.getLength(),
	            i = t.getLength();if (e - i < 0) return this;for (var n = new Array(e), s = 0; s < e; s++) {
	          n[s] = this.get(s);
	        }for (; n.length >= i;) {
	          for (var o = v.glog(n[0]) - v.glog(t.get(0)), s = 0; s < t.getLength(); s++) {
	            n[s] ^= v.gexp(v.glog(t.get(s)) + o);
	          }for (; 0 == n[0];) {
	            n.shift();
	          }
	        }return new a(n, 0);
	      } }, y = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]], o.prototype.getRightType = function () {
	      for (var t = 1; t < 41; t++) {
	        var e = y[4 * (t - 1) + this.errorCorrectLevel];if (void 0 == e) throw new Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + this.errorCorrectLevel);for (var i = e.length / 3, n = 0, s = 0; s < i; s++) {
	          var o = e[3 * s + 0],
	              a = e[3 * s + 2];n += a * o;
	        }var r = t > 9 ? 2 : 1;if (this.utf8bytes.length + r < n || 40 == t) {
	          this.typeNumber = t, this.rsBlock = e, this.totalDataCount = n;break;
	        }
	      }
	    }, r.prototype = { get: function get(t) {
	        var e = Math.floor(t / 8);return this.buffer[e] >>> 7 - t % 8 & 1;
	      }, put: function put(t, e) {
	        for (var i = 0; i < e; i++) {
	          this.putBit(t >>> e - i - 1 & 1);
	        }
	      }, putBit: function putBit(t) {
	        var e = Math.floor(this.length / 8);this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++;
	      } }, c.fn.qrcode = function (t) {
	      return this.each(function () {
	        c(this).append(new d(t));
	      });
	    }, t.exports = u.qrcode = d;
	  }, function (t, e, i) {
	    "use strict";
	    var n = i(1),
	        s = i(2),
	        o = function o(t, e) {
	      var i = this;this.options = n.extend({}, o.DEFAULTS, e), this.$element = n(t), this.sticked = null, this.inited = null, this.$holder = void 0, this.$window = n(window).on("scroll.sticky.amui", s.utils.debounce(n.proxy(this.checkPosition, this), 10)).on("resize.sticky.amui orientationchange.sticky.amui", s.utils.debounce(function () {
	        i.reset(!0, function () {
	          i.checkPosition();
	        });
	      }, 50)).on("load.sticky.amui", n.proxy(this.checkPosition, this)), this.offset = this.$element.offset(), this.init();
	    };o.DEFAULTS = { top: 0, bottom: 0, animation: "", className: { sticky: "am-sticky", resetting: "am-sticky-resetting", stickyBtm: "am-sticky-bottom", animationRev: "am-animation-reverse" } }, o.prototype.init = function () {
	      var t = this.check();if (!t) return !1;var e = this.$element,
	          i = "";n.each(e.css(["marginTop", "marginRight", "marginBottom", "marginLeft"]), function (t, e) {
	        return i += " " + e;
	      });var s = n('<div class="am-sticky-placeholder"></div>').css({ height: "absolute" !== e.css("position") ? e.outerHeight() : "", "float": "none" != e.css("float") ? e.css("float") : "", margin: i });return this.$holder = e.css("margin", 0).wrap(s).parent(), this.inited = 1, !0;
	    }, o.prototype.reset = function (t, e) {
	      var i = this.options,
	          n = this.$element,
	          o = i.animation ? " am-animation-" + i.animation : "",
	          a = function () {
	        n.css({ position: "", top: "", width: "", left: "", margin: 0 }), n.removeClass([o, i.className.animationRev, i.className.sticky, i.className.resetting].join(" ")), this.animating = !1, this.sticked = !1, this.offset = n.offset(), e && e();
	      }.bind(this);n.addClass(i.className.resetting), !t && i.animation && s.support.animation ? (this.animating = !0, n.removeClass(o).one(s.support.animation.end, function () {
	        a();
	      }).width(), n.addClass(o + " " + i.className.animationRev)) : a();
	    }, o.prototype.check = function () {
	      if (!this.$element.is(":visible")) return !1;var t = this.options.media;if (t) switch (typeof t === "undefined" ? "undefined" : _typeof(t)) {case "number":
	          if (window.innerWidth < t) return !1;break;case "string":
	          if (window.matchMedia && !window.matchMedia(t).matches) return !1;}return !0;
	    }, o.prototype.checkPosition = function () {
	      if (!this.inited) {
	        var t = this.init();if (!t) return;
	      }var e = this.options,
	          i = this.$window.scrollTop(),
	          n = e.top,
	          s = e.bottom,
	          o = this.$element,
	          a = e.animation ? " am-animation-" + e.animation : "",
	          r = [e.className.sticky, a].join(" ");"function" == typeof s && (s = s(this.$element));var l = i > this.$holder.offset().top;!this.sticked && l ? o.addClass(r) : this.sticked && !l && this.reset(), this.$holder.css({ height: o.is(":visible") && "absolute" !== o.css("position") ? o.outerHeight() : "" }), l && o.css({ top: n, left: this.$holder.offset().left, width: this.$holder.width() }), this.sticked = l;
	    }, s.plugin("sticky", o), n(window).on("load", function () {
	      n("[data-am-sticky]").sticky();
	    }), t.exports = o;
	  }, function (t, e, i) {
	    "use strict";
	    function n(t) {
	      var e,
	          i = Array.prototype.slice.call(arguments, 1);return this.each(function () {
	        var n = s(this),
	            a = n.is(".am-tabs") && n || n.closest(".am-tabs"),
	            r = a.data("amui.tabs"),
	            l = s.extend({}, o.utils.parseOptions(n.data("amTabs")), s.isPlainObject(t) && t);r || a.data("amui.tabs", r = new c(a[0], l)), "string" == typeof t && ("open" === t && n.is(".am-tabs-nav a") ? r.open(n) : e = "function" == typeof r[t] ? r[t].apply(r, i) : r[t]);
	      }), void 0 === e ? this : e;
	    }var s = i(1),
	        o = i(2),
	        a = i(3),
	        r = o.support.transition,
	        l = o.support.animation,
	        c = function c(t, e) {
	      this.$element = s(t), this.options = s.extend({}, c.DEFAULTS, e || {}), this.transitioning = this.activeIndex = null, this.refresh(), this.init();
	    };c.DEFAULTS = { selector: { nav: "> .am-tabs-nav", content: "> .am-tabs-bd", panel: "> .am-tab-panel" }, activeClass: "am-active" }, c.prototype.refresh = function () {
	      var t = this.options.selector;this.$tabNav = this.$element.find(t.nav), this.$navs = this.$tabNav.find("a"), this.$content = this.$element.find(t.content), this.$tabPanels = this.$content.find(t.panel);var e = this.$tabNav.find("> ." + this.options.activeClass);1 !== e.length ? this.open(0) : this.activeIndex = this.$navs.index(e.children("a"));
	    }, c.prototype.init = function () {
	      var t = this,
	          e = this.options;if (this.$element.on("click.tabs.amui", e.selector.nav + " a", function (e) {
	        e.preventDefault(), t.open(s(this));
	      }), !e.noSwipe) {
	        if (!this.$content.length) return this;var i = new a.Manager(this.$content[0]),
	            n = new a.Swipe({ direction: a.DIRECTION_HORIZONTAL });i.add(n), i.on("swipeleft", o.utils.debounce(function (e) {
	          e.preventDefault(), t.goTo("next");
	        }, 100)), i.on("swiperight", o.utils.debounce(function (e) {
	          e.preventDefault(), t.goTo("prev");
	        }, 100)), this._hammer = i;
	      }
	    }, c.prototype.open = function (t) {
	      var e = this.options.activeClass,
	          i = "number" == typeof t ? t : this.$navs.index(s(t));if (t = "number" == typeof t ? this.$navs.eq(i) : s(t), t && t.length && !this.transitioning && !t.parent("li").hasClass(e)) {
	        var n = this.$tabNav,
	            o = t.attr("href"),
	            a = /^#.+$/,
	            r = a.test(o) && this.$content.find(o) || this.$tabPanels.eq(i),
	            l = n.find("." + e + " a")[0],
	            c = s.Event("open.tabs.amui", { relatedTarget: l });t.trigger(c), c.isDefaultPrevented() || (this.activate(t.closest("li"), n), this.activate(r, this.$content, function () {
	          t.trigger({ type: "opened.tabs.amui", relatedTarget: l });
	        }), this.activeIndex = i);
	      }
	    }, c.prototype.activate = function (t, e, i) {
	      this.transitioning = !0;var n = this.options.activeClass,
	          o = e.find("> ." + n),
	          a = i && r && !!o.length;o.removeClass(n + " am-in"), t.addClass(n), a ? (t.redraw(), t.addClass("am-in")) : t.removeClass("am-fade");var l = s.proxy(function () {
	        i && i(), this.transitioning = !1;
	      }, this);a && !this.$content.is(".am-tabs-bd-ofv") ? o.one(r.end, l) : l();
	    }, c.prototype.goTo = function (t) {
	      var e = this.activeIndex,
	          i = "next" === t,
	          n = i ? "am-animation-right-spring" : "am-animation-left-spring";if (i && e + 1 >= this.$navs.length || !i && 0 === e) {
	        var s = this.$tabPanels.eq(e);l && s.addClass(n).on(l.end, function () {
	          s.removeClass(n);
	        });
	      } else this.open(i ? e + 1 : e - 1);
	    }, c.prototype.destroy = function () {
	      this.$element.off(".tabs.amui"), a.off(this.$content[0], "swipeleft swiperight"), this._hammer && this._hammer.destroy(), s.removeData(this.$element, "amui.tabs");
	    }, s.fn.tabs = n, o.ready(function (t) {
	      s("[data-am-tabs]", t).tabs();
	    }), s(document).on("click.tabs.amui.data-api", "[data-am-tabs] .am-tabs-nav a", function (t) {
	      t.preventDefault(), n.call(s(this), "open");
	    }), t.exports = o.tabs = c;
	  }, function (t, e, i) {
	    "use strict";
	    var n = i(1),
	        s = i(2),
	        o = function o(t, e) {
	      this.options = n.extend({}, o.DEFAULTS, e), this.$element = n(t), this.init();
	    };o.DEFAULTS = { checkboxClass: "am-ucheck-checkbox", radioClass: "am-ucheck-radio", checkboxTpl: '<span class="am-ucheck-icons"><i class="am-icon-unchecked"></i><i class="am-icon-checked"></i></span>', radioTpl: '<span class="am-ucheck-icons"><i class="am-icon-unchecked"></i><i class="am-icon-checked"></i></span>' }, o.prototype.init = function () {
	      var t = this.$element,
	          e = t[0],
	          i = this.options;"checkbox" === e.type ? t.addClass(i.checkboxClass).after(i.checkboxTpl) : "radio" === e.type && t.addClass(i.radioClass).after(i.radioTpl);
	    }, o.prototype.check = function () {
	      this.$element.prop("checked", !0).trigger("change.ucheck.amui").trigger("checked.ucheck.amui");
	    }, o.prototype.uncheck = function () {
	      this.$element.prop("checked", !1).trigger("change").trigger("unchecked.ucheck.amui");
	    }, o.prototype.toggle = function () {
	      this.$element.prop("checked", function (t, e) {
	        return !e;
	      }).trigger("change.ucheck.amui").trigger("toggled.ucheck.amui");
	    }, o.prototype.disable = function () {
	      this.$element.prop("disabled", !0).trigger("change.ucheck.amui").trigger("disabled.ucheck.amui");
	    }, o.prototype.enable = function () {
	      this.$element.prop("disabled", !1), this.$element.trigger("change.ucheck.amui").trigger("enabled.ucheck.amui");
	    }, o.prototype.destroy = function () {
	      this.$element.removeData("amui.ucheck").removeClass(this.options.checkboxClass + " " + this.options.radioClass).next(".am-ucheck-icons").remove().end().trigger("destroyed.ucheck.amui");
	    }, s.plugin("uCheck", o, { after: function after() {
	        s.support.touch && this.parent().hover(function () {
	          n(this).addClass("am-nohover");
	        }, function () {
	          n(this).removeClass("am-nohover");
	        });
	      } }), s.ready(function (t) {
	      n("[data-am-ucheck]", t).uCheck();
	    }), t.exports = o;
	  }, function (t, e, i) {
	    "use strict";
	    var n = i(1),
	        s = i(2),
	        o = function o(t, e) {
	      this.options = n.extend({}, o.DEFAULTS, e), this.options.patterns = n.extend({}, o.patterns, this.options.patterns);var i = this.options.locales;!o.validationMessages[i] && (this.options.locales = "zh_CN"), this.$element = n(t), this.init();
	    };o.DEFAULTS = { debug: !1, locales: "zh_CN", H5validation: !1, H5inputType: ["email", "url", "number"], patterns: {}, patternClassPrefix: "js-pattern-", activeClass: "am-active", inValidClass: "am-field-error", validClass: "am-field-valid", validateOnSubmit: !0, alwaysRevalidate: !1, allFields: ":input:not(:submit, :button, :disabled, .am-novalidate)", ignore: ":hidden:not([data-am-selected], .am-validate)", customEvents: "validate", keyboardFields: ":input:not(:submit, :button, :disabled, .am-novalidate)", keyboardEvents: "focusout, change", activeKeyup: !1, textareaMaxlenthKeyup: !0, pointerFields: 'input[type="range"]:not(:disabled, .am-novalidate), input[type="radio"]:not(:disabled, .am-novalidate), input[type="checkbox"]:not(:disabled, .am-novalidate), select:not(:disabled, .am-novalidate), option:not(:disabled, .am-novalidate)', pointerEvents: "click", onValid: function onValid(t) {}, onInValid: function onInValid(t) {}, markValid: function markValid(t) {
	        var e = this.options,
	            i = n(t.field),
	            s = i.closest(".am-form-group");i.addClass(e.validClass).removeClass(e.inValidClass), s.addClass("am-form-success").removeClass("am-form-error"), e.onValid.call(this, t);
	      }, markInValid: function markInValid(t) {
	        var e = this.options,
	            i = n(t.field),
	            s = i.closest(".am-form-group");i.addClass(e.inValidClass + " " + e.activeClass).removeClass(e.validClass), s.addClass("am-form-error").removeClass("am-form-success"), e.onInValid.call(this, t);
	      }, validate: function validate(t) {}, submit: null }, o.VERSION = "2.7.2", o.patterns = { email: /^((([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/, url: /^(https?|ftp):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/, number: /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/, dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/, integer: /^-?\d+$/ }, o.validationMessages = { zh_CN: { valueMissing: "\u8BF7\u586B\u5199\uFF08\u9009\u62E9\uFF09\u6B64\u5B57\u6BB5", customError: { tooShort: "\u81F3\u5C11\u586B\u5199 %s \u4E2A\u5B57\u7B26", checkedOverflow: "\u81F3\u591A\u9009\u62E9 %s \u9879", checkedUnderflow: "\u81F3\u5C11\u9009\u62E9 %s \u9879" }, patternMismatch: "\u8BF7\u6309\u7167\u8981\u6C42\u7684\u683C\u5F0F\u586B\u5199", rangeOverflow: "\u8BF7\u586B\u5199\u5C0F\u4E8E\u7B49\u4E8E %s \u7684\u503C", rangeUnderflow: "\u8BF7\u586B\u5199\u5927\u4E8E\u7B49\u4E8E %s \u7684\u503C", stepMismatch: "", tooLong: "\u81F3\u591A\u586B\u5199 %s \u4E2A\u5B57\u7B26", typeMismatch: "\u8BF7\u6309\u7167\u8981\u6C42\u7684\u7C7B\u578B\u586B\u5199" } }, o.ERROR_MAP = { tooShort: "minlength", checkedOverflow: "maxchecked", checkedUnderflow: "minchecked", rangeOverflow: "max", rangeUnderflow: "min", tooLong: "maxlength" }, o.prototype.init = function () {
	      function t(t) {
	        var e = t.toString();return e.substring(1, e.length - 1);
	      }function e(t, e, a) {
	        var r = e.split(","),
	            l = function l(t) {
	          i.validate(this);
	        };a && (l = s.utils.debounce(l, a)), n.each(r, function (e, i) {
	          o.on(i + ".validator.amui", t, l);
	        });
	      }var i = this,
	          o = this.$element,
	          a = this.options;return (!a.H5validation || !s.support.formValidation) && (o.attr("novalidate", "novalidate"), n.each(a.H5inputType, function (e, i) {
	        var n = o.find("input[type=" + i + "]");n.attr("pattern") || n.is("[class*=" + a.patternClassPrefix + "]") || n.attr("pattern", t(a.patterns[i]));
	      }), n.each(a.patterns, function (e, i) {
	        var n = o.find("." + a.patternClassPrefix + e);!n.attr("pattern") && n.attr("pattern", t(i));
	      }), o.on("submit.validator.amui", function (t) {
	        if ("function" == typeof a.submit) return a.submit.call(i, t);if (a.validateOnSubmit) {
	          var e = i.isFormValid();return "boolean" === n.type(e) ? e : !!o.data("amui.checked") || (n.when(e).then(function () {
	            o.data("amui.checked", !0).submit();
	          }, function () {
	            o.data("amui.checked", !1).find("." + a.inValidClass).eq(0).focus();
	          }), !1);
	        }
	      }), e(":input", a.customEvents), e(a.keyboardFields, a.keyboardEvents), e(a.pointerFields, a.pointerEvents), a.textareaMaxlenthKeyup && e("textarea[maxlength]", "keyup", 50), void (a.activeKeyup && e(".am-active", "keyup", 50)));
	    }, o.prototype.isValid = function (t) {
	      var e = n(t),
	          i = this.options;return (void 0 === e.data("validity") || i.alwaysRevalidate) && this.validate(t), e.data("validity") && e.data("validity").valid;
	    }, o.prototype.validate = function (t) {
	      var e = this,
	          i = this.$element,
	          s = this.options,
	          o = n(t),
	          a = o.data("equalTo");a && o.attr("pattern", "^" + i.find(a).val() + "$");var r = o.attr("pattern") || !1,
	          l = new RegExp(r),
	          c = null,
	          u = null,
	          h = o.is("[type=checkbox]") ? (u = i.find('input[name="' + t.name + '"]')).filter(":checked").length : o.is("[type=radio]") ? (c = this.$element.find('input[name="' + t.name + '"]')).filter(":checked").length > 0 : o.val();o = u && u.length ? u.first() : o;var d = void 0 !== o.attr("required") && "false" !== o.attr("required"),
	          p = parseInt(o.attr("maxlength"), 10),
	          m = parseInt(o.attr("minlength"), 10),
	          f = Number(o.attr("min")),
	          v = Number(o.attr("max")),
	          g = this.createValidity({ field: o[0], valid: !0 });if (s.debug && window.console && (console.log("Validate: value -> [" + h + ", regex -> [" + l + "], required -> " + d), console.log("Regex test: " + l.test(h) + ", Pattern: " + r)), !isNaN(p) && h.length > p && (g.valid = !1, g.tooLong = !0), !isNaN(m) && h.length < m && (g.valid = !1, g.customError = "tooShort"), !isNaN(f) && Number(h) < f && (g.valid = !1, g.rangeUnderflow = !0), !isNaN(v) && Number(h) > v && (g.valid = !1, g.rangeOverflow = !0), d && !h) g.valid = !1, g.valueMissing = !0;else if ((u || o.is('select[multiple="multiple"]')) && h) {
	        h = u ? h : h.length;var y = parseInt(o.attr("minchecked"), 10),
	            w = parseInt(o.attr("maxchecked"), 10);!isNaN(y) && h < y && (g.valid = !1, g.customError = "checkedUnderflow"), !isNaN(w) && h > w && (g.valid = !1, g.customError = "checkedOverflow");
	      } else r && !l.test(h) && h && (g.valid = !1, g.patternMismatch = !0);var b,
	          T = function T(t) {
	        this.markField(t);var i = n.Event("validated.field.validator.amui");i.validity = t, o.trigger(i).data("validity", t);var s = c || u;return s && s.not(o).data("validity", t).each(function () {
	          t.field = this, e.markField(t);
	        }), t;
	      };if ("function" == typeof s.validate && (b = s.validate.call(this, g)), b) {
	        var x = new n.Deferred();return o.data("amui.dfdValidity", x.promise()), n.when(b).always(function (t) {
	          x[t.valid ? "resolve" : "reject"](t), T.call(e, t);
	        });
	      }T.call(this, g);
	    }, o.prototype.markField = function (t) {
	      var e = this.options,
	          i = "mark" + (t.valid ? "" : "In") + "Valid";e[i] && e[i].call(this, t);
	    }, o.prototype.validateForm = function () {
	      var t = this,
	          e = this.$element,
	          i = this.options,
	          s = e.find(i.allFields).not(i.ignore),
	          o = [],
	          a = !0,
	          r = [],
	          l = n([]),
	          c = [],
	          u = !1;e.trigger("validate.form.validator.amui");var h = s.filter(function (t) {
	        var e;if ("INPUT" === this.tagName && "radio" === this.type) {
	          if (e = this.name, o[e] === !0) return !1;o[e] = !0;
	        }return !0;
	      });h.each(function () {
	        var i = n(this),
	            s = t.isValid(this),
	            o = i.data("validity");a = !!s && a, r.push(o), s || (l = l.add(n(this), e));var h = i.data("amui.dfdValidity");if (h) c.push(h), u = !0;else {
	          var d = new n.Deferred();c.push(d.promise()), d[s ? "resolve" : "reject"](o);
	        }
	      });var d = { valid: a, $invalidFields: l, validity: r, promises: c, async: u };return e.trigger("validated.form.validator.amui", d), d;
	    }, o.prototype.isFormValid = function () {
	      var t = this,
	          e = this.validateForm(),
	          i = function i(e) {
	        t.$element.trigger(e + ".validator.amui");
	      };if (e.async) {
	        var s = new n.Deferred();return n.when.apply(null, e.promises).then(function () {
	          s.resolve(), i("valid");
	        }, function () {
	          s.reject(), i("invalid");
	        }), s.promise();
	      }if (!e.valid) {
	        var o = e.$invalidFields.first();return o.is("[data-am-selected]") && (o = o.next(".am-selected").find(".am-selected-btn")), o.focus(), i("invalid"), !1;
	      }return i("valid"), !0;
	    }, o.prototype.createValidity = function (t) {
	      return n.extend({ customError: t.customError || !1, patternMismatch: t.patternMismatch || !1, rangeOverflow: t.rangeOverflow || !1, rangeUnderflow: t.rangeUnderflow || !1, stepMismatch: t.stepMismatch || !1, tooLong: t.tooLong || !1, typeMismatch: t.typeMismatch || !1, valid: t.valid || !0, valueMissing: t.valueMissing || !1 }, t);
	    }, o.prototype.getValidationMessage = function (t) {
	      var e,
	          i,
	          s = o.validationMessages[this.options.locales],
	          a = "%s",
	          r = n(t.field);return (r.is('[type="checkbox"]') || r.is('[type="radio"]')) && (r = this.$element.find("[name=" + r.attr("name") + "]").first()), n.each(t, function (t, i) {
	        return "field" === t || "valid" === t ? t : "customError" === t && i ? (e = i, s = s.customError, !1) : i === !0 ? (e = t, !1) : void 0;
	      }), i = s[e] || void 0, i && o.ERROR_MAP[e] && (i = i.replace(a, r.attr(o.ERROR_MAP[e]) || "\u89C4\u5B9A\u7684")), i;
	    }, o.prototype.removeMark = function () {
	      this.$element.find(".am-form-success, .am-form-error, ." + this.options.inValidClass + ", ." + this.options.validClass).removeClass(["am-form-success", "am-form-error", this.options.inValidClass, this.options.validClass].join(" "));
	    }, o.prototype.destroy = function () {
	      this.removeMark(), this.$element.removeData("amui.validator amui.checked").off(".validator.amui").find(this.options.allFields).removeData("validity amui.dfdValidity");
	    }, s.plugin("validator", o), s.ready(function (t) {
	      n("[data-am-validator]", t).validator();
	    }), t.exports = o;
	  }, function (t, e, i) {
	    "use strict";
	    var n = i(2),
	        s = { get: function get(t) {
	        var e,
	            i = encodeURIComponent(t) + "=",
	            n = document.cookie.indexOf(i),
	            s = null;return n > -1 && (e = document.cookie.indexOf(";", n), e == -1 && (e = document.cookie.length), s = decodeURIComponent(document.cookie.substring(n + i.length, e))), s;
	      }, set: function set(t, e, i, n, s, o) {
	        var a = encodeURIComponent(t) + "=" + encodeURIComponent(e);i instanceof Date && (a += "; expires=" + i.toUTCString()), n && (a += "; path=" + n), s && (a += "; domain=" + s), o && (a += "; secure"), document.cookie = a;
	      }, unset: function unset(t, e, i, n) {
	        this.set(t, "", new Date(0), e, i, n);
	      } };n.utils = n.utils || {}, t.exports = n.utils.cookie = s;
	  }, function (t, e, i) {
	    "use strict";
	    var n = i(2),
	        s = function () {
	      var t = "undefined" != typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
	          e = function () {
	        for (var t, e, i = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], n = 0, s = i.length, o = {}; n < s; n++) {
	          if (t = i[n], t && t[1] in document) {
	            for (n = 0, e = t.length; n < e; n++) {
	              o[i[0][n]] = t[n];
	            }return o;
	          }
	        }return !1;
	      }(),
	          i = { request: function request(i) {
	          var n = e.requestFullscreen;i = i || document.documentElement, /5\.1[\.\d]* Safari/.test(navigator.userAgent) ? i[n]() : i[n](t && Element.ALLOW_KEYBOARD_INPUT);
	        }, exit: function exit() {
	          document[e.exitFullscreen]();
	        }, toggle: function toggle(t) {
	          this.isFullscreen ? this.exit() : this.request(t);
	        }, raw: e };return !!e && (Object.defineProperties(i, { isFullscreen: { get: function get() {
	            return !!document[e.fullscreenElement];
	          } }, element: { enumerable: !0, get: function get() {
	            return document[e.fullscreenElement];
	          } }, enabled: { enumerable: !0, get: function get() {
	            return !!document[e.fullscreenEnabled];
	          } } }), i.VERSION = "3.0.0", i);
	    }();t.exports = n.fullscreen = s;
	  }, function (t, e, i) {
	    "use strict";
	    var n = i(1),
	        s = i(2);s.support.geolocation = window.navigator && window.navigator.geolocation;var o = s.support.geolocation,
	        a = function a(t) {
	      this.options = t || {};
	    };a.MESSAGES = { unsupportedBrowser: "Browser does not support location services", permissionDenied: "You have rejected access to your location", positionUnavailable: "Unable to determine your location", timeout: "Service timeout has been reached" }, a.ERROR_CODE = { 0: "unsupportedBrowser", 1: "permissionDenied", 2: "positionUnavailable", 3: "timeout" }, a.prototype.get = function (t) {
	      var e = this;t = n.extend({}, this.options, t);var i = new n.Deferred();return o ? this.watchID = o.getCurrentPosition(function (t) {
	        i.resolve.call(e, t);
	      }, function (t) {
	        i.reject(a.MESSAGES[a.ERROR_CODE[t.code]]);
	      }, t) : i.reject(a.MESSAGES.unsupportedBrowser), i.promise();
	    }, a.prototype.watch = function (t) {
	      if (o && (t = n.extend({}, this.options, t), n.isFunction(t.done))) {
	        this.clearWatch();var e = n.isFunction(t.fail) ? t.fail : null;return this.watchID = o.watchPosition(t.done, e, t), this.watchID;
	      }
	    }, a.prototype.clearWatch = function () {
	      o && this.watchID && (o.clearWatch(this.watchID), this.watchID = null);
	    }, t.exports = s.Geolocation = a;
	  }, function (t, e, i) {
	    (function (e) {
	      "use strict";
	      function n() {
	        try {
	          return l in r && r[l];
	        } catch (t) {
	          return !1;
	        }
	      }var s,
	          o = i(2),
	          a = {},
	          r = "undefined" != typeof window ? window : e,
	          l = "localStorage";a.disabled = !1, a.version = "1.3.20", a.set = function (t, e) {}, a.get = function (t, e) {}, a.has = function (t) {
	        return void 0 !== a.get(t);
	      }, a.remove = function (t) {}, a.clear = function () {}, a.transact = function (t, e, i) {
	        null == i && (i = e, e = null), null == e && (e = {});var n = a.get(t, e);i(n), a.set(t, n);
	      }, a.getAll = function () {}, a.forEach = function () {}, a.serialize = function (t) {
	        return JSON.stringify(t);
	      }, a.deserialize = function (t) {
	        if ("string" == typeof t) try {
	          return JSON.parse(t);
	        } catch (e) {
	          return t || void 0;
	        }
	      }, n() && (s = r[l], a.set = function (t, e) {
	        return void 0 === e ? a.remove(t) : (s.setItem(t, a.serialize(e)), e);
	      }, a.get = function (t, e) {
	        var i = a.deserialize(s.getItem(t));return void 0 === i ? e : i;
	      }, a.remove = function (t) {
	        s.removeItem(t);
	      }, a.clear = function () {
	        s.clear();
	      }, a.getAll = function () {
	        var t = {};return a.forEach(function (e, i) {
	          t[e] = i;
	        }), t;
	      }, a.forEach = function (t) {
	        for (var e = 0; e < s.length; e++) {
	          var i = s.key(e);t(i, a.get(i));
	        }
	      });try {
	        var c = "__storejs__";a.set(c, c), a.get(c) != c && (a.disabled = !0), a.remove(c);
	      } catch (u) {
	        a.disabled = !0;
	      }a.enabled = !a.disabled, t.exports = o.store = a;
	    }).call(e, function () {
	      return this;
	    }());
	  }, function (t, e, i) {
	    "use strict";
	    function n() {
	      var t = s('[data-am-widget="accordion"]'),
	          e = { item: ".am-accordion-item", title: ".am-accordion-title", body: ".am-accordion-bd", disabled: ".am-disabled" };t.each(function (t, i) {
	        var n = o.utils.parseOptions(s(i).attr("data-am-accordion")),
	            a = s(i).find(e.title);a.on("click.accordion.amui", function () {
	          var t = s(this).next(e.body),
	              o = s(this).parent(e.item),
	              a = t.data("amui.collapse");o.is(e.disabled) || (o.toggleClass("am-active"), a ? t.collapse("toggle") : t.collapse(), !n.multiple && s(i).children(".am-active").not(o).not(e.disabled).removeClass("am-active").find(e.body + ".am-in").collapse("close"));
	        });
	      });
	    }var s = i(1),
	        o = i(2);i(7), s(n), t.exports = o.accordion = { VERSION: "2.1.0", init: n };
	  }, function (t, e) {
	    "use strict";
	    t.exports = { VERSION: "2.0.1" };
	  }, function (t, e, i) {
	    "use strict";
	    function n() {
	      var t = s(".ds-thread"),
	          e = t.parent('[data-am-widget="duoshuo"]').attr("data-ds-short-name"),
	          i = ("https:" == document.location.protocol ? "https:" : "http:") + "//static.duoshuo.com/embed.js";if (t.length && e && (window.duoshuoQuery = { short_name: e }, !s('script[src="' + i + '"]').length)) {
	        var n = s("<script>", { async: !0, type: "text/javascript", src: i, charset: "utf-8" });s("body").append(n);
	      }
	    }var s = i(1),
	        o = i(2);s(window).on("load", n), t.exports = o.duoshuo = { VERSION: "2.0.1", init: n };
	  }, function (t, e, i) {
	    "use strict";
	    function n() {
	      s(".am-figure").each(function (t, e) {
	        var i,
	            n = o.utils.parseOptions(s(e).attr("data-am-figure")),
	            a = s(e);if (n.pureview) if ("auto" === n.pureview) {
	          var r = s.isImgZoomAble(a.find("img")[0]);r && a.pureview();
	        } else a.addClass("am-figure-zoomable").pureview();i = a.data("amui.pureview"), i && a.on("click", ":not(img)", function () {
	          i.open(0);
	        });
	      });
	    }var s = i(1),
	        o = i(2);i(20), s.isImgZoomAble = function (t) {
	      var e = new Image();e.src = t.src;var i = s(t).width() < e.width;return i && s(t).closest(".am-figure").addClass("am-figure-zoomable"), i;
	    }, s(window).on("load", n), t.exports = o.figure = { VERSION: "2.0.3", init: n };
	  }, function (t, e, i) {
	    "use strict";
	    function n() {
	      s(".am-footer-ysp").on("click", function () {
	        s("#am-footer-modal").modal();
	      });var t = o.utils.parseOptions(s(".am-footer").data("amFooter"));t.addToHS && a(), s('[data-rel="desktop"]').on("click", function (t) {
	        t.preventDefault(), window.AMPlatform ? window.AMPlatform.util.goDesktop() : (r.set("allmobilize", "desktop", "", "/"), window.location = window.location);
	      });
	    }var s = i(1),
	        o = i(2);i(15);var a = i(4),
	        r = i(31);s(n), t.exports = o.footer = { VERSION: "3.1.2", init: n };
	  }, function (t, e, i) {
	    "use strict";
	    function n() {
	      var t = s('[data-am-widget="gallery"]');t.each(function () {
	        var t = o.utils.parseOptions(s(this).attr("data-am-gallery"));t.pureview && ("object" == _typeof(t.pureview) ? s(this).pureview(t.pureview) : s(this).pureview());
	      });
	    }var s = i(1),
	        o = i(2);i(20), s(n), t.exports = o.gallery = { VERSION: "3.0.0", init: n };
	  }, function (t, e, i) {
	    "use strict";
	    function n() {
	      function t() {
	        i[(n.scrollTop() > 50 ? "add" : "remove") + "Class"]("am-active");
	      }var e = s('[data-am-widget="gotop"]'),
	          i = e.filter(".am-gotop-fixed"),
	          n = s(window);e.data("init") || (e.find("a").on("click", function (t) {
	        t.preventDefault(), n.smoothScroll();
	      }), t(), n.on("scroll.gotop.amui", o.utils.debounce(t, 100)), e.data("init", !0));
	    }var s = i(1),
	        o = i(2);i(23), s(n), t.exports = o.gotop = { VERSION: "4.0.2", init: n };
	  }, function (t, e, i) {
	    "use strict";
	    function n() {
	      s('[data-am-widget="header"]').each(function () {
	        if (s(this).hasClass("am-header-fixed")) return s("body").addClass("am-with-fixed-header"), !1;
	      });
	    }var s = i(1),
	        o = i(2);s(n), t.exports = o.header = { VERSION: "2.0.0", init: n };
	  }, function (t, e, i) {
	    "use strict";
	    var n = i(2);t.exports = n.intro = { VERSION: "4.0.2", init: function init() {} };
	  }, function (t, e, i) {
	    "use strict";
	    var n = i(2);t.exports = n.listNews = { VERSION: "4.0.0", init: function init() {} };
	  }, function (t, e, i) {
	    function n(t) {
	      var e = o("<script />", { id: "am-map-api-0" });o("body").append(e), e.on("load", function () {
	        console.log("load");var e = o("<script/>", { id: "am-map-api-1" });o("body").append(e), e.on("load", function () {
	          var e = document.createElement("script");e.textContent = "(" + t.toString() + ")();", o("body")[0].appendChild(e);
	        }).attr("src", "http://api.map.baidu.com/getscript?type=quick&file=feature&ak=WVAXZ05oyNRXS5egLImmentg&t=20140109092002");
	      }).attr("src", "http://api.map.baidu.com/getscript?type=quick&file=api&ak=WVAXZ05oyNRXS5egLImmentg&t=20140109092002");
	    }function s() {
	      var t = document.querySelector(".am-map"),
	          e = 116.331398,
	          i = 39.897445,
	          n = t.getAttribute("data-name"),
	          s = t.getAttribute("data-address"),
	          o = t.getAttribute("data-longitude") || e,
	          a = t.getAttribute("data-latitude") || i,
	          r = t.getAttribute("data-setZoom") || 17,
	          l = t.getAttribute("data-icon"),
	          c = new BMap.Map("bd-map"),
	          u = new BMap.Point(o, a);c.centerAndZoom(u, r), t.getAttribute("data-zoomControl") && c.addControl(new BMap.ZoomControl()), t.getAttribute("data-scaleControl") && c.addControl(new BMap.ScaleControl());var h = new BMap.Marker(u);l && h.setIcon(new BMap.Icon(l, new BMap.Size(40, 40)));var d = { width: 200, title: n },
	          p = new BMap.InfoWindow("\u5730\u5740\uFF1A" + s, d),
	          m = new BMap.Geocoder();o == e && a == i ? m.getPoint(s, function (t) {
	        t && (c.centerAndZoom(t, r), h.setPosition(t), c.addOverlay(h), c.openInfoWindow(p, t));
	      }, "") : m.getLocation(u, function (t) {
	        c.centerAndZoom(u, r), h.setPosition(u), c.addOverlay(h), s ? c.openInfoWindow(p, u) : c.openInfoWindow(new BMap.InfoWindow(s, d), u);
	      });
	    }var o = i(1),
	        a = i(2),
	        r = function r() {
	      o(".am-map").length && n(s);
	    };o(r), t.exports = a.map = { VERSION: "2.0.2", init: r };
	  }, function (t, e, i) {
	    "use strict";
	    function n() {
	      if (s("#mechat").length) {
	        var t = s('[data-am-widget="mechat"]'),
	            e = t.data("am-mechat-unitid"),
	            i = s("<script>", { charset: "utf-8", src: "http://mechatim.com/js/unit/button.js?id=" + e });s("body").append(i);
	      }
	    }var s = i(1),
	        o = i(2);s(window).on("load", n), t.exports = o.mechat = { VERSION: "2.0.1", init: n };
	  }, function (t, e, i) {
	    "use strict";
	    var n = i(1),
	        s = i(2),
	        o = i(14);i(16), i(7);var a = function a() {
	      var t = n('[data-am-widget="menu"]');t.find(".am-menu-nav .am-parent > a").on("click", function (t) {
	        t.preventDefault();var e = n(this),
	            i = e.parent(),
	            s = e.next(".am-menu-sub");i.toggleClass("am-open"), s.collapse("toggle"), i.siblings(".am-parent").removeClass("am-open").children(".am-menu-sub.am-in").collapse("close");
	      }), t.filter("[data-am-menu-collapse]").find("> .am-menu-toggle").on("click", function (t) {
	        t.preventDefault();var e = n(this),
	            i = e.next(".am-menu-nav");e.toggleClass("am-active"), i.collapse("toggle");
	      }), t.filter("[data-am-menu-offcanvas]").find("> .am-menu-toggle").on("click", function (t) {
	        t.preventDefault();var e = n(this),
	            i = e.next(".am-offcanvas");e.toggleClass("am-active"), i.offCanvas("open");
	      });var e = '.am-offcanvas[data-dismiss-on="click"]',
	          i = n(e);i.find("a").not(".am-parent>a").on("click", function (t) {
	        n(this).parents(e).offCanvas("close");
	      }), t.filter(".am-menu-one").each(function (t) {
	        var e,
	            i = n(this),
	            s = n('<div class="am-menu-nav-sub-wrap"></div>'),
	            a = 0,
	            r = i.find(".am-menu-nav"),
	            l = r.children("li");l.filter(".am-parent").each(function (t) {
	          n(this).attr("data-rel", "#am-menu-sub-" + t), n(this).find(".am-menu-sub").attr("id", "am-menu-sub-" + t).appendTo(s);
	        }), i.append(s), r.wrap('<div class="am-menu-nav-wrap" id="am-menu-' + t + '">'), l.each(function (t) {
	          a += parseFloat(n(this).css("width"));
	        }), r.width(a);var c = new o("#am-menu-" + t, { eventPassthrough: !0, scrollX: !0, scrollY: !1, preventDefault: !1 });l.on("click", function () {
	          var t = n(this);t.addClass("am-active").siblings().removeClass("am-active"), s.find(".am-menu-sub.am-in").collapse("close"), t.is(".am-parent") ? !t.hasClass(".am-open") && s.find(t.attr("data-rel")).collapse("open") : t.siblings().removeClass("am-open"), void 0 === e && (e = n(this).index() ? 0 : 1);var o,
	              a = n(this).index() > e,
	              l = n(this)[a ? "next" : "prev"](),
	              u = l.offset() || n(this).offset(),
	              h = i.offset(),
	              d = parseInt(i.css("padding-left"));(a ? u.left + u.width > h.left + h.width : u.left < h.left) && (o = r.offset(), c.scrollTo(a ? h.width - u.left + o.left - u.width - d : o.left - u.left, 0, 400)), e = n(this).index();
	        }), i.on("touchmove", function (t) {
	          t.preventDefault();
	        });
	      });
	    };n(a), t.exports = s.menu = { VERSION: "4.0.3", init: a };
	  }, function (t, e, i) {
	    "use strict";
	    function n() {
	      function t() {
	        u.append(b), u.find("li").not(".am-navbar-more").slice(i() - 1).appendTo(w), n.append(w);
	      }function e() {
	        return i() >= d ? (b.hide(), void w.find("li").insertBefore(b)) : (!n.find(".am-navbar-actions").length && t(), b.show(), void (u.find("li").length < i() ? w.find("li").slice(0, i() - u.find("li").length).insertBefore(b) : u.find("li").length > i() && (w.find("li").length ? u.find("li").not(b).slice(i() - 1).insertBefore(w.find("li").first()) : u.find("li").not(b).slice(i() - 1).appendTo(w))));
	      }function i() {
	        return Math.floor((l.width() - f) / m);
	      }var n = s('[data-am-widget="navbar"]');if (n.length) {
	        var l = s(window),
	            c = s("body"),
	            u = n.find(".am-navbar-nav"),
	            h = n.find("li"),
	            d = h.length,
	            p = u.attr("class") && parseInt(u.attr("class").match(/am-avg-sm-(\d+)/)[1]) || 3,
	            m = 60,
	            f = 16,
	            v = h.filter("[data-am-navbar-share]"),
	            g = h.filter("[data-am-navbar-qrcode]"),
	            y = "am-active",
	            w = s('<ul class="am-navbar-actions"></ul>', { id: o.utils.generateGUID("am-navbar-actions") }),
	            b = s("<li class=\"am-navbar-labels am-navbar-more\"><a href=\"javascript: void(0);\"><span class=\"am-icon-angle-up\"></span><span class=\"am-navbar-label\">\u66F4\u591A</span></a></li>");if ("fixed" == n.css("position") && c.addClass("am-with-fixed-navbar"), g.length) {
	          var T = "am-navbar-qrcode";if (C = s("#" + T), !C.length) {
	            var x = g.attr("data-am-navbar-qrcode"),
	                C = s('<div class="am-modal am-modal-no-btn" id=""><div class="am-modal-dialog"><div class="am-modal-bd"></div></div></div>', { id: T }),
	                E = C.find(".am-modal-bd");if (x) E.html('<img src="' + x + '"/>');else {
	              var S = new r({ render: "canvas", correctLevel: 0, text: window.location.href, width: 200, height: 200, background: "#fff", foreground: "#000" });E.html(S);
	            }c.append(C);
	          }g.on("click", function (t) {
	            t.preventDefault(), C.modal();
	          });
	        }d > p && d > i() && t(), n.on("click.navbar.amui", ".am-navbar-more", function (t) {
	          t.preventDefault(), b[w.hasClass(y) ? "removeClass" : "addClass"](y), w.toggleClass(y);
	        }), v.length && v.on("click.navbar.amui", function (t) {
	          t.preventDefault(), a.toggle();
	        }), l.on("resize.navbar.amui orientationchange.navbar.amui", o.utils.debounce(e, 150));
	      }
	    }var s = i(1),
	        o = i(2),
	        a = i(25),
	        r = i(26);i(15), s(n), t.exports = o.navbar = { VERSION: "2.0.2", init: n };
	  }, function (t, e, i) {
	    "use strict";
	    var n = i(2);t.exports = n.pagination = { VERSION: "3.0.1" };
	  }, function (t, e, i) {
	    "use strict";
	    function n() {
	      var t = s('[data-am-widget="paragraph"]');t.each(function (t) {
	        var e = s(this),
	            i = o.utils.parseOptions(e.attr("data-am-paragraph")),
	            n = t;i.pureview && e.pureview(), i.tableScrollable && e.find("table").each(function (t) {
	          s(this).width() > s(window).width() && s(this).scrollTable(n + "-" + t);
	        });
	      });
	    }var s = i(1),
	        o = i(2),
	        a = i(14);i(20), s.fn.scrollTable = function (t) {
	      var e,
	          i = s(this);i.wrap('<div class="am-paragraph-table-container" id="am-paragraph-table-' + t + '"><div class="am-paragraph-table-scroller"></div></div>'), e = i.parent(), e.width(i.width()), e.height(i.height()), new a("#am-paragraph-table-" + t, { eventPassthrough: !0, scrollX: !0, scrollY: !1, preventDefault: !1 });
	    }, s(window).on("load", n), t.exports = o.paragraph = { VERSION: "2.0.1", init: n };
	  }, function (t, e, i) {
	    "use strict";
	    function n() {
	      var t = s('[data-am-widget="slider"]');t.not(".am-slider-manual").each(function (t, e) {
	        var i = o.utils.parseOptions(s(e).attr("data-am-slider"));s(e).flexslider(i);
	      });
	    }var s = i(1),
	        o = i(2);i(11), s(n), t.exports = o.slider = { VERSION: "3.0.1", init: n };
	  }, function (t, e, i) {
	    "use strict";
	    function n() {
	      s('[data-am-widget="tabs"]').each(function () {
	        var t = s(this).data("amTabsNoswipe") ? { noSwipe: 1 } : {};s(this).tabs(t);
	      });
	    }var s = i(1),
	        o = i(2);i(28), s(n), t.exports = o.tab = { VERSION: "4.0.1", init: n };
	  }, function (t, e, i) {
	    "use strict";
	    var n = i(2);t.exports = n.titlebar = { VERSION: "4.0.1" };
	  }, function (t, e, i) {
	    "use strict";
	    function n() {
	      var t = s('[data-am-widget="wechatpay"]');return a ? void t.on("click", ".am-wechatpay-btn", function (t) {
	        t.preventDefault();var e = o.utils.parseOptions(s(this).parent().data("wechatPay"));return window.wx ? void wx.checkJsApi({ jsApiList: ["chooseWXPay"], success: function success(t) {
	            t.checkResult.chooseWXPay ? wx.chooseWXPay(e) : alert("\u5FAE\u4FE1\u7248\u672C\u4E0D\u652F\u6301\u652F\u4ED8\u63A5\u53E3\u6216\u6CA1\u6709\u5F00\u542F\uFF01");
	          }, fail: function fail() {
	            alert("\u8C03\u7528 checkJsApi \u63A5\u53E3\u65F6\u53D1\u751F\u9519\u8BEF!");
	          } }) : void alert("\u6CA1\u6709\u5FAE\u4FE1 JS SDK");
	      }) : (t.hide(), !1);
	    }var s = i(1),
	        o = i(2),
	        a = window.navigator.userAgent.indexOf("MicroMessenger") > -1,
	        r = n;s(r), t.exports = o.pay = { VERSION: "1.0.0", init: r };
	  }]);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5), __webpack_require__(6)(module)))

/***/ },
/* 19 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=article-list.js.map?v=0511d96b9b82d5fa6211