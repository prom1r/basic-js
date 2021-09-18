import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
    const strRepeat = String(str);

    if (!options) {
        return strRepeat;
    }

    const additionRepeat = options.addition !== undefined ? String(options.addition) : '';
    const separator = options.separator != null ? options.separator.toString() : '+';
    const additionSeparator = options.additionSeparator != null ? options.additionSeparator : '|';
    const repeatTimes = options.repeatTimes || 1;
    const additionRepeatTimes = options.additionRepeatTimes || 1;

    const additionRepeated = repeatString(additionRepeat, additionSeparator, additionRepeatTimes);
    const strAndAddition = strRepeat + additionRepeated;

    return repeatString(strAndAddition, separator, repeatTimes);
}

function repeatString(str, separator, repeatTimes) {
    if (repeatTimes === 1) {
        return str;
    }

    let strRepeat = '';
    for (let i = 0; i < repeatTimes; i++) {
        strRepeat += str;
        if (i !== repeatTimes - 1) {
            strRepeat += separator;
        }
    }

    return strRepeat;
}