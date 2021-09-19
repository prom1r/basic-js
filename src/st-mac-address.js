import { NotImplementedError } from '../extensions/index.js';

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
export default function isMAC48Address(n) {
    const numbers = n.split('-');
    if (numbers.length !== 6) {
        return false;
    }

    return numbers.every(n => isHex(n[0]) && isHex(n[1]));
}

function isHex(n) {
    return (n >= '0' && n <= '9') || (n >= 'A' && n <= 'F');
}