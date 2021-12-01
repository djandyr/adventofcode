import {day1} from './src/day1';

const fs = require('fs');
const path = require('path');

describe('adventofcode', function () {
  it('day1', function () {
    let example: number[] = [199,200,208,210,200,207,240,269,260,263];
    expect(day1(example)).to.equal(7);

    let report  = fs
    .readFileSync(path.join(__dirname, 'day1-input.txt'), 'utf8')
    .toString()
    .trim()
    .split('\n')

    console.log(report);
  });
});