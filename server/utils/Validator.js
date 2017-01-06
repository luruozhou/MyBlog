import * as Lodash from 'lodash';
import {StringHash} from './helper';

var hop = Object.prototype.hasOwnProperty;

/**
 * 验证参数的有效性
 * @param data 传入的所有参数
 * @param requiredKeys 需要验证的参数
 * @param validatorNameMap 需要验证的参数类型
 */
export function validate(data, requiredKeys, validatorNameMap) {
    validatorNameMap = validatorNameMap || {};

    var requiredHash = new StringHash(requiredKeys);

    var keys = Lodash.union(Object.keys(data), requiredKeys);

    for (let key of keys) {
        let value = data[key];
        let required = requiredHash.exists(key);

        if (required || (value !== undefined && value !== '')) {
            var validatorOrKey = hop.call(validatorNameMap, key) ? validatorNameMap[key] : key;

            if (required && data[key] == null) {
                throw `Missing argument "${key}".`;
            } else {
                if (validatorOrKey instanceof RegExp) {
                    if (!validatorOrKey.test(value)) {
                        throw `Invalid value "${value}" for key ${key}.`;
                    }
                } else if (validatorOrKey instanceof Function) {
                    validatorOrKey(value, key);
                }
            }
        }
    }
}