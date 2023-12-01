/**
 * Determine the horizontal position that the crabs can align to using the least fuel possible 
 * How much fuel must they spend to align to that position?
 * 
 * @param input 
 * @param part2
 * @returns 
 */
export const calculateMinFuel = (input: [], part2 = false) => {
    const minPos = (Math.min(...input))
    const maxPos = (Math.max(...input))

    let minFuel = Math.pow(10, 1000) // Initialize with high number

    for(let pos = minPos; pos < maxPos; pos++) {
        let totalFuel = 0;
        for(const crab of input) {
            
            if(part2) {
                // Part 2: Fuel spent to move by n is the sum of all integers from 1 to n: (1+n)*(n/2)
                const distance = Math.abs(crab - pos);
                totalFuel += (1 + distance) * distance / 2;
            }else{
                // Part 1
                totalFuel += Math.abs(crab - pos);
            }
        }

        minFuel = Math.min(totalFuel, minFuel);
    }

    return minFuel;
}