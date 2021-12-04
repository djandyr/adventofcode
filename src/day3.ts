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

export const lifeSupportCalculator = (diagnosticReport:any) => {

    // Calculate rating for oxygen (o2) and carbon dioxide (co2)
    const calculateRating = (list:any, type: "o2" | "co2", index:number = 0) => {
        let commonBit = type === "o2" ? "1" : "0";
        let bitCount = countBits(list);

        // If bit count (at index) of "zeros" is greater than "ones"
        if(bitCount[index][0] > bitCount[index][1]) {
            commonBit = type === "o2" ? "0" : "1"
        }

        const filteredList = list.filter((binary) => binary[index] === commonBit);
        if (filteredList.length === 1) {
            return filteredList[0];
        }
 
        return calculateRating(filteredList, type, index + 1);
    }

    const oxygenRating = calculateRating(diagnosticReport, 'o2')
    const co2Rating = calculateRating(diagnosticReport, 'co2')

    return parseInt(oxygenRating, 2) * parseInt(co2Rating, 2);
}