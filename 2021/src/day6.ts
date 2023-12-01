/**
 * Find a way to simulate lanternfish. 
 * How many lanternfish would there be after 80 days?
 * 
 * @param input  
 * @param days 
 * @returns 
 */
export const simulateLanternFish = (input: [], days: number): number => {
    // Lantern fish internal timer between 0-8 days
    const internalTimer = new Array(9).fill(0);

    // Count each lantern fish timing
    for (const time of input) {
        internalTimer[+time] += 1;
    }

    for (let day = 0; day < days; day++) {
        // Find internal timer that has reached 0
        const count = internalTimer.shift();
         // Lanternfish that creates a new fish, resets its timer to 6 days
        internalTimer[6] += count;
         // New lanternfish starts with an internal timer of 8 days
        internalTimer[8] = count;
    }

    return internalTimer.reduce((a, b) => a + b); // Sum of laternfish
  };