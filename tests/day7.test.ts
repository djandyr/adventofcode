// https://adventofcode.com/2021/day/7

import {calculateMinFuel} from '../src/day7';
import { expect } from 'chai';
const fs = require('fs');

describe('adventofcode', function () {
  it('day7', function () {

    const generateInput = (path) => {
        return fs
        .readFileSync(path)
        .toString()
        .split(",") // Split on newline
        .map(Number); // Parse string into a number
    }

    const example = generateInput('./tests/fixtures/day7-input-example.txt')
    const input = generateInput('./tests/fixtures/day7-input.txt')

    // Part 1
    expect(calculateMinFuel(example)).to.equal(37);
    expect(calculateMinFuel(input)).to.equal(353800)
    // Part 2
    expect(calculateMinFuel(example,true)).to.equal(168);
    expect(calculateMinFuel(input,true)).to.equal(98119739);
  });
});