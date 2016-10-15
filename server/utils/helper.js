
var OP = Object.prototype;
var AP = Array.prototype;
var hasOwn = OP.hasOwnProperty;

/**
 * 是否是对象自变量, {} 或 new Object() 的形式
 */
export function isObject(obj) {
    return OP.toString.call(obj) === '[object Object]';
}

/**
 * 是否是真数组, [] 或 new Array() 的形式
 */
export function isArray(obj) {
    return OP.toString.call(obj) === '[object Array]';
}

/**
 * 是否是函数
 */
export function isFunc(fn) {
    return fn instanceof Function;
}

/**
 * 是否是字符串
 */
export function isString(str) {
    return typeof(str) === 'string';
}

/**
 * 是否是布尔值
 */
export function isBoolean(bool) {
    return typeof(bool) === 'boolean';
}

/**
 * 是否是数字
 */
export function isNumber(num) {
    return typeof(num) === 'number' && !isNaN(num);
}

/**
 * 是否是纯粹对象
 */
export function isPlainObject(obj) {
    if (!obj || !isObject(obj) || obj.nodeType || obj === obj.window) {
        return false;
    }
    if (obj.constructor && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
        return false;
    }
    return true;
}
