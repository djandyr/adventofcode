// --- Day 1: Sonar Sweep ---
// Function to count number of times a sea level depth increases from previous measurement
export function day1(depths: Array<number>) {
  let countIncrease: number = 0;
  depths.reduce(function(previous, current) {
    if(current > previous ?? 0) countIncrease += 1;
    return current;
  });
  return countIncrease;
}