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
    it('day3', function () {
        // Part 1
        const powerConsumption1 = powerConsumptionCalculator(example); 
        expect(powerConsumption1).to.equal(198); 

        const powerConsumption2 = powerConsumptionCalculator(input); 
        expect(powerConsumption2).to.equal(2583164);

        // Part 2
        const lifeSupportRating1 = lifeSupportCalculator(example); 
        expect(lifeSupportRating1).to.equal(230); 

        const lifeSupportRating2 = lifeSupportCalculator(input); 
        expect(lifeSupportRating2).to.equal(2784375);
    });
});