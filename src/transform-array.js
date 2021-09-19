import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('\'arr\' parameter must be an instance of the Array!')
    }

    const result = arr.slice();

    let steps = result.length;
    let i = 0;
    while (i < steps) {
        if (result[i] === 'delete') {
            i++;

            continue;
        }

        switch (result[i]) {
            case '--discard-next':
                result[i] = 'delete';

                if (result[i + 1]) {
                    result[i + 1] = 'delete';
                }

                break;
            case '--discard-prev':
                result[i] = 'delete';

                if (result[i - 1]) {
                    result[i - 1] = 'delete';
                }

                break;
            case '--double-next':
                result[i] = 'delete';

                if (result[i + 1]) {
                    result.splice(i + 1, 0, result[i + 1]);

                    steps++;
                    i++;
                }
                break;
            case '--double-prev':
                result[i] = 'delete';

                if (result[i - 1]) {
                    result.splice(i - 1, 0, result[i - 1]);

                    steps++;
                    i++;
                }

                break;
        }

        i++;
    }

    return result.filter(x => x !== 'delete');
}