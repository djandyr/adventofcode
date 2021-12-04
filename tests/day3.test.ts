// https://adventofcode.com/2021/day/3

import {powerConsumptionCalculator, lifeSupportCalculator} from '../src/day3';
import { expect } from 'chai';

const fs = require('fs');

const example = fs
    .readFileSync("./tests/fixtures/day3-input-example.txt")
    .toString()
    .split("\n");

const input = fs
    .readFileSync("./tests/fixtures/day3-input.txt")
    .toString()
    .split("\n");

describe('adventofcode', function () {
    // Part 1
    it('day3-example', function () {
        const powerConsumption = powerConsumptionCalculator(example); 
        expect(powerConsumption).to.equal(198); 
    });  
    it('day3-input', function () {
        const powerConsumption = powerConsumptionCalculator(input); 
        expect(powerConsumption).to.equal(2583164);
    });
    // Part 2
    it('day3-part-2-example', function () {
        const lifeSupportRating = lifeSupportCalculator(example); 
        expect(lifeSupportRating).to.equal(230); 
    });  
    it('day3-part-2input', function () {
        const powerConsumption = lifeSupportCalculator(input); 
        expect(powerConsumption).to.equal(2784375);
    });
});