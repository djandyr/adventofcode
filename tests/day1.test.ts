// https://adventofcode.com/2021/day/1

import {filterDepthIncrease, filterDepthIncreaseByThreeSlidingWindowSum} from '../src/day1';
import { expect } from 'chai';

describe('adventofcode', function () {
  it('day1', function () {

    // Part One
    let example: number[] = [199,200,208,210,200,207,240,269,260,263];
    expect(example.filter(filterDepthIncrease).length).to.equal(7);

    const fs = require('fs')
    const input = fs.readFileSync('./tests/fixtures/day1-input.txt', 'utf8').toString().trim().split("\n").map(x => parseInt(x));
    expect(input.filter(filterDepthIncrease).length).to.equal(1448);

    // Part Two
    expect(input.filter(filterDepthIncreaseByThreeSlidingWindowSum).length).to.equal(1471);
  });
});
