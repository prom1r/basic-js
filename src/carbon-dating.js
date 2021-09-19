import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity) {
    if (typeof sampleActivity !== 'string') {
        return false;
    }

    const currentActivity = Number(sampleActivity);
    if (Number.isNaN(currentActivity) || currentActivity > MODERN_ACTIVITY || currentActivity <= 0) {
        return false;
    }

    const k = 0.693 / HALF_LIFE_PERIOD;
    const lnN0N = Math.log(MODERN_ACTIVITY / currentActivity);

    const age = Math.ceil(lnN0N / k);

    return age;
}