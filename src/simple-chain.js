import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
    arr: [],

    getLength() {
        return this.arr.length();
    },

    addLink(value) {
        if (arguments.length === 0) {
            this.arr.push('');
        } else {
            this.arr.push(value);
        }

        return this;
    },
    removeLink(position) {
        if (this.arr[position - 1] === undefined) {
            this.arr = [];
            throw new Error('You can\'t remove incorrect link!')
        }

        this.arr.splice(position - 1, 1);

        return this;
    },
    reverseChain() {
        this.arr = this.arr.reverse();

        return this;
    },
    finishChain() {
        let linkStr = this.arr.map(x => `( ${x} )`);

        this.arr = [];
        return linkStr.join('~~');
    }
};