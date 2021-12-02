// --- Day 1: Sonar Sweep ---
// Filter number of times a sea level depth increases from previous measurement
export function filterDepthIncrease(depth, index, report) {
  return report[index] > report[index - 1];
}

// Filter by sums of a three-measurement sliding window.
export function filterDepthIncreaseByThreeSlidingWindowSum(depth, index, report) {
  return (depth + report[index+1] + report[index + 2]) > (depth + report[index - 1] + report[index + 1]);
}