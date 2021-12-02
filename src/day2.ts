// --- Day 2: Dive! ---
// Calculate coordinates for horizontal position and depth (x,y)
export function calculateCoordinates(course:Array<any>) {
    let coordinates = {x:0, y:0}
    let calculator = {
        'forward': (unit:number) => (coordinates.x += unit),
        'up': (unit:number) => (coordinates.y -= unit),
        'down': (unit:number) => (coordinates.y += unit)
    }

    course.forEach((command) => {
        calculator[command[0]](command[1])
    });

    return coordinates;
}
// Calculate coordinates for horizontal position, depth and aim
export function calculateCoordinatesWithAim(course:Array<any>) {
    let coordinates = {x:0, y:0, aim: 0}
    let calculator = {
        'forward': (unit:number) => (coordinates.x += unit, coordinates.y += coordinates.aim * unit),
        'up': (unit:number) => (coordinates.aim -= unit),
        'down': (unit:number) => (coordinates.aim += unit)
    }

    course.forEach((command) => {
        calculator[command[0]](command[1])
    });

    return coordinates;
}