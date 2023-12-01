import {calculateCoordinates, calculateCoordinatesWithAim} from '../src/day2';
import { expect } from 'chai';

describe('adventofcode', function () {
  it('day2', function () {
    const fs = require("fs");
    const example = [
      ["forward", 5],
      ["down", 5],
      ["forward", 8],
      ["up", 3],
      ["down", 8],
      ["forward", 2]
    ];

    let coordinates1 = calculateCoordinates(example);
    expect(coordinates1.x * coordinates1.y).to.equal(150);

    // Normalise input in 2D array ie: [['forward',1]]
    const input = fs
      .readFileSync("./tests/fixtures/day2-input.txt")
      .toString()
      .split("\n")
      .map((x) => x.split(" "))
      .map(([a, b]) => [a, Number(b)] as const)
      
    let coordinates2 = calculateCoordinates(input);
    expect(coordinates2.x * coordinates2.y).to.equal(2187380);

    // Part 2
    let coordinates3 = calculateCoordinatesWithAim(example);
    expect(coordinates3.x * coordinates3.y).to.equal(900);

    let coordinates4 = calculateCoordinatesWithAim(input);
    expect(coordinates4.x * coordinates4.y).to.equal(2086357770);
  });
});