export const countPointsTwoLinesOverlap = (input) => {
    const coordinates: Map<string, number> = new Map();

    for (const [coord1, coord2] of input) {
        const [x1, y1] = coord1.split(",").map(Number); // ie: 2,1" to [2,1]
        const [x2, y2] = coord2.split(",").map(Number);
    
        // Only consider horizontal and vertical lines
        if (x1 === x2) { 
            const [yStart, yEnd] = [y1, y2].sort((a, b) => a - b);
            // Determine the number of points where at least two horizontal lines overlap
            for (let y = yStart; y <= yEnd; y++) {
                const key = [x1, y].join(); // ie: 2,1
                const count = coordinates.get(key) ?? 0;
                coordinates.set(key, count + 1);
          }
        } else if (y1 === y2) {
            const [xStart, xEnd] = [x1, x2].sort((a, b) => a - b);
            // Determine the number of points where at least two vertical lines overlap
            for (let x = xStart; x <= xEnd; x++) {
                const key = [x, y1].join();
                const count = coordinates.get(key) ?? 0;
                coordinates.set(key, count + 1);
          }
        }
    }

    let count = 0;
    for (const value of coordinates.values()) {
        if (value > 1) {
            count++;
        }
    }

    return count;
}

export const countPointsTwoLinesOverlapDiagonal = (input) => {
    const coordinates: Map<string, number> = new Map();

    for (const [coord1, coord2] of input) {
        const [x1, y1] = coord1.split(",").map(Number); // ie: 2,1" to [2,1]
        const [x2, y2] = coord2.split(",").map(Number);

        const xi = Math.sign(x2 - x1); // Horizontal increment
        const yi = Math.sign(y2 - y1); // Vertical increment

        const startPoint = [x1, y1].join();
        const count = coordinates.get(startPoint) ?? 0;
        coordinates.set(startPoint, count + 1)

        // Join points to line end
        let x = x1, y = y1;
        do {
            x += xi;
            y += yi;
            const point = [x, y].join();
            const count = coordinates.get(point) ?? 0;
            coordinates.set(point, count + 1);
        } while (x !== x2 || y !== y2);
    }

    let count = 0;
    for (const value of coordinates.values()) {
      if (value > 1) {
        count++;
      }
    }
  
    return count;
}
