from utils.api import get_input
import re

lines = get_input(4).read().splitlines()
card_score, winning_nums, points = 0, 0, 0
card_counts = [1] * len(lines)

for i, row in enumerate(lines):
    wins = row.split("|")[0].split(":")[1].split()
    nums = row.split("|")[1].split()
    for num in nums:
        if num in wins:
            winning_nums += 1
            if card_score == 0: card_score = 1
            else: card_score *= 2
    for x in range(winning_nums):
        card_counts[i + x + 1] += card_counts[i]
    points += card_score
    card_score, winning_nums = 0, 0

# Part 1
print(points)
# Part 2
print(sum(card_counts))
