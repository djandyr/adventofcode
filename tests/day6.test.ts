// https://adventofcode.com/2021/day/6

import {simulateLanternFish} from '../src/day6';
import { expect } from 'chai';
const fs = require('fs');

describe('adventofcode', function () {
  it('day6', function () {

    const generateInput = (path) => {
        return fs
        .readFileSync(path)
        .toString()
        .split(",") // Split on newline
        .map(Number); // Parse string into a number
    }

    const example = generateInput('./tests/fixtures/day6-input-example.txt')
    const input = generateInput('./tests/fixtures/day6-input.txt')

    // Part 1
    expect(simulateLanternFish(example,80)).to.equal(5934)
    expect(simulateLanternFish(input,80)).to.equal(388419)
    // Part 2
    expect(simulateLanternFish(example, 256)).to.equal(26984457539);
    expect(simulateLanternFish(input, 256)).to.equal(1740449478328);
  });
});