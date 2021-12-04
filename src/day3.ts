// --- Day 3: Binary Diagnostic ---
export const countBits = (diagnosticReport) => {
    const bitCount = [];
    for (const data of diagnosticReport) {
        data.split('').forEach((bit, index) => {
          if (!bitCount[index]) bitCount.push([0, 0]);
            if (bit === "0") {
                bitCount[index][0]++;
            }else{
                bitCount[index][1]++;
            }
        });
    }

    return bitCount;
}

export const powerConsumptionCalculator = (diagnosticReport) => {
    let gamma = '';
    let epsilon = '';
    let gammaInt = 0;
    let epsilonInt = 0;
    let bitCount = countBits(diagnosticReport);
    
    bitCount.forEach(([zero, one]) => { // First two binary elements start 0,1 in input source thus can safely assume sort order
        gamma += zero > one  ? '0' : '1';
        epsilon += zero > one ? '1' : '0';
    });

    gammaInt = parseInt(gamma, 2); // use radix to convert binary (base 2) to integer
    epsilonInt = parseInt(epsilon, 2);

    return gammaInt * epsilonInt;
}

export const lifeSupportCalculator = (diagnosticReport) => {

    const calculateOxygenRating = (list, index = 0) => {
        let mostCommonBit = "1";
        let bitCount = countBits(list);

        if(bitCount[index][0] > bitCount[index][1]) {
            mostCommonBit = "0"
        }

        const filteredList = list.filter((binary) => binary[index] === mostCommonBit);
        if (filteredList.length === 1) {
            return filteredList[0];
        }

        return calculateOxygenRating(filteredList, index + 1);
    }

    const calculateCo2Rating = (list, index = 0) => {
        let bitCount = countBits(list);
        let leastCommonBit = "0";

        if(bitCount[index][0] > bitCount[index][1]) {
            leastCommonBit = "1"
        }

        const filteredList = list.filter((binary) => binary[index] === leastCommonBit);
        if (filteredList.length === 1) {
            return filteredList[0];
        }

        return calculateCo2Rating(filteredList, index + 1);
    }

    const oxygenRating = calculateOxygenRating(diagnosticReport)
    const co2Rating = calculateCo2Rating(diagnosticReport)

    return parseInt(oxygenRating, 2) * parseInt(co2Rating, 2);
}