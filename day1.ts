// --- Day 1: Sonar Sweep ---
let depthReport: number[] = [199,200,208,210,200,207,240,269,260,263];
let count =+ depthReport.reduce(function(prev, curr) {
  return prev > curr ?? 0 ? 1 : 0;
});

console.log(count);