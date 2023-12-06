from utils.api import get_input

def process_mapping(seeds, ranges):
    mapping = []
    for seed in seeds:
        for dest, source, range in ranges:
            if source <= seed < source + range:
                mapping.append(seed - source + dest)
                break
        else:
            mapping.append(seed)
    return mapping

seeds_list, *mappings = get_input(5).read().split("\n\n")
seeds = list(map(int, seeds_list.split(":")[1].split()))
seeds_pairs = [(seeds[i], seeds[i] + seeds[i + 1]) for i in range(0, len(seeds), 2)]

for mapping in mappings:
    ranges = [list(map(int, line.split())) for line in mapping.splitlines()[1:]]
    seeds = process_mapping(seeds, ranges)

    pairs = []
    for start, end in seeds_pairs:
        for dest, source, range in ranges:
            max_start = max(start, source)
            min_end = min(end, source + range)

            if max_start < min_end:
                pairs.append((max_start - source + dest, min_end - source + dest))

                if max_start > start:
                    seeds_pairs.append((start, max_start))
                if min_end < end:
                    seeds_pairs.append((min_end, end))
                break
        else:
            pairs.append((start, end))
    seeds_pairs = pairs

# Part 1
print(min(seeds))
# Part 2
print(min(seeds_pairs)[0])