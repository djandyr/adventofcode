from utils.api import get_input
import pandas as pd

series = pd.Series(get_input(1))
def extract_calibration_value(s):
    digits = ''.join(filter(str.isdigit, s))
    return int(digits[0] + digits[-1]) if digits else 0

# Part One
print(series.str.findall('\d').apply(extract_calibration_value).sum())
# Part Two
num_dict = {'zero': 'z0o', 'one': 'o1e', 'two': 't2o', 'three': 't3e', 'four': 'f4r', 'five': 'f5e', 'six': 's6x', 'seven': 's7n', 'eight': 'e8t', 'nine': 'n9e'}
print(series.replace(num_dict, regex=True).str.findall('\d').apply(extract_calibration_value).sum())