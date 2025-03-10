import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper(matrix) {
    const result = [];

    for (let i = 0; i < matrix.length; i++) {
        result[i] = [];

        for (let j = 0; j < matrix[i].length; j++) {
            let sum = 0;
            sum += sumMine(matrix, i - 1, j);
            sum += sumMine(matrix, i - 1, j - 1);
            sum += sumMine(matrix, i, j - 1);
            sum += sumMine(matrix, i + 1, j - 1);
            sum += sumMine(matrix, i + 1, j);
            sum += sumMine(matrix, i + 1, j + 1);
            sum += sumMine(matrix, i, j + 1);
            sum += sumMine(matrix, i - 1, j + 1);

            result[i].push(sum);
        }
    }

    return result;
}

function sumMine(matrix, i, j) {
    const row = matrix[i];
    if (row === undefined) {
        return 0;
    }

    const column = row[j];
    if (column === undefined) {
        return 0;
    }

    return Number(column);
}