import {day1} from '../src/day1';
import { expect } from 'chai';

describe('adventofcode', function () {
  it('day1', function () {
    let example: number[] = [199,200,208,210,200,207,240,269,260,263];
    expect(day1(example)).to.equal(7);

    const fs = require('fs')
    const input = fs.readFileSync('./tests/fixtures/day1-input.txt', 'utf8').toString().trim().split("\n").map(x => parseInt(x));
    expect(day1(input)).to.equal(1448);
  });
});
