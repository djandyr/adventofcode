from utils.api import get_input
import re

part_numbers, line_map, part, gear_ratio = [], {}, set(), 0
lines = [line.strip() for line in get_input(3)]

for i, line in enumerate(lines):
    for match in re.finditer(r'\d+', line):
        index = len(part_numbers)
        part_numbers.append(int(match.group()))
        for column in range(match.start(), match.end()):
            line_map[(i, column)] = index

for i, line in enumerate(lines):
    for item in re.finditer(r'[^\.\d]', line):
        gear = set()
        for l in range(i-1, i+2):
            for c in range(item.start()-1, item.start()+2):
                if (l, c) in line_map:
                    part.add(line_map[l, c])
                    gear.add(line_map[l, c])
        if len(gear) == 2:
            gear_ratio += part_numbers[gear.pop()] * part_numbers[gear.pop()]

# Part 1
print("Sum of all part numbers:", sum(part_numbers[i] for i in part))
# Part 2
print("Sum of all gear ratios:", gear_ratio)