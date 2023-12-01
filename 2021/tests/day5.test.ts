// https://adventofcode.com/2021/day/5

import {plotHorizonalVerticalLines, plotLines, overlapCounter} from '../src/day5';
import { expect } from 'chai';
const fs = require('fs');

describe('adventofcode', function () {
  it('day5', function () {
    
    const generateInput = (path) => {
        return fs
        .readFileSync(path)
        .toString()
        .split('\n')
        .map((line) => line.split(" -> "))
    }


    const input = generateInput('./tests/fixtures/day5-input.txt');
    const example = generateInput('./tests/fixtures/day5-input-example.txt');

    // Part 1
    expect(overlapCounter(plotHorizonalVerticalLines(example))).to.equal(5);
    expect(overlapCounter(plotHorizonalVerticalLines(input))).to.equal(6397);

    // Part 2
    expect(overlapCounter(plotLines(example))).to.equal(12);
    expect(overlapCounter(plotLines(input))).to.equal(22335);
  });
});