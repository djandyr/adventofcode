// https://adventofcode.com/2021/day/4

import {BingoBoard, createBoards, calculateFirstWinnerScore, calculateLastWinnerScore} from '../src/day4';
import { expect } from 'chai';

const fs = require('fs');
const readline = require('readline');

describe('adventofcode', function () {
    it('day4', async function () {

        const BOARD_SIZE = 5;
        const generateInput = (path) => {
            return fs
            .readFileSync(path)
            .toString()
            .trim()
            .split('\n')
            .filter(x => x !== '');
        }

        // Part 1 Example
        const example = generateInput('./tests/fixtures/day4-input-example.txt');
        const firstWinner1 = calculateFirstWinnerScore(example, BOARD_SIZE);
        expect(firstWinner1).to.equal(4512);

        // Part 1
        const input = generateInput('./tests/fixtures/day4-input.txt');
        const firstWinner2 = calculateFirstWinnerScore(input, BOARD_SIZE);
        expect(firstWinner2).to.equal(69579);

        // Part 2 Example
        const example2 = generateInput('./tests/fixtures/day4-input-example.txt');
        const lastWinner1 = calculateLastWinnerScore(example2, BOARD_SIZE);
        expect(lastWinner1).to.equal(1924);

        // Part 2
        const input2 = generateInput('./tests/fixtures/day4-input.txt');
        const lastWinner2 = calculateLastWinnerScore(input2, BOARD_SIZE);
        expect(lastWinner2).to.equal(14877);
    });
});