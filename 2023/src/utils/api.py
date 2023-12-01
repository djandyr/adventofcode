import requests
import datetime
from os.path import exists


def get_session_id(filename):
    with open(filename) as f:
        return f.read().strip()


def get_url(year, day):
    return f"https://adventofcode.com/{year}/day/{day}/input"


YEAR = datetime.date.today().year
SESSION_ID_FILE = "session.cookie"
SESSION = get_session_id(SESSION_ID_FILE)
HEADERS = {
    "User-Agent": "github.com/djandyr/adventofcode reddit:u/dj_andyr"
}
COOKIES = {"session": SESSION}

def get_input(day):
    path = f"inputs/{day:02d}"

    if not exists(path):
        url = get_url(YEAR, day)
        response = requests.get(url, headers=HEADERS, cookies=COOKIES)
        if not response.ok:
            raise RuntimeError(
                f"Request failed\n\tstatus code: {response.status_code}\n\tmessage: {response.content}"
            )
        with open(path, "w", encoding="utf-8") as f:
            f.write(response.text[:-1])

    return open(path, "r", encoding="utf-8")