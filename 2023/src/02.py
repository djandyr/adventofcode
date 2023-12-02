from utils.api import get_input
import re

sum_games, sum_power = 0, 0

for line in get_input(2).read().splitlines():
    game, sets = line.split(':')

    color_limits = {"red": 12, "green": 13, "blue": 14}
    max_sets = {color: max(map(int, re.findall(f"(\d+) {color}", sets)), default=0) for color in color_limits}

    if all(max_sets[color] <= limit for color, limit in color_limits.items()):
        sum_games += int(re.search(r"\d+", game).group())

    sum_power += max_sets["red"] * max_sets["green"] * max_sets["blue"]

# Part 1
print("Sum of Game IDs:", sum_games)
# Part 2
print("Sum of Power:", sum_power)