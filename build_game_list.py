import json, os, re
from html.parser import HTMLParser

class TitleParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.in_title = False
        self.title = None
    def handle_starttag(self, tag, attrs):
        if tag.lower() == 'title':
            self.in_title = True
    def handle_endtag(self, tag):
        if tag.lower() == 'title':
            self.in_title = False
    def handle_data(self, data):
        if self.in_title and self.title is None:
            self.title = data.strip()

def title_of(path):
    try:
        with open(path, 'r', encoding='utf-8', errors='ignore') as f:
            data = f.read()
    except FileNotFoundError:
        return None
    parser = TitleParser()
    parser.feed(data)
    if parser.title:
        return parser.title
    m = re.search(r'<title[^>]*>(.*?)</title>', data, re.I|re.S)
    return m.group(1).strip() if m else None

base = os.path.join(os.getcwd(), 'demo')
games = []
for entry in sorted(os.listdir(base)):
    entry_path = os.path.join(base, entry)
    if not os.path.isdir(entry_path):
        continue
    desktop = os.path.join(entry_path, 'desktop')
    mobile = os.path.join(entry_path, 'mobile')
    if not os.path.isdir(desktop) and not os.path.isdir(mobile):
        continue
    game = {'name': None, 'ico': 'char_ico.jpg', 'fav': '0', 'play': {}}
    title = None
    if os.path.isdir(desktop):
        desktop_index = os.path.join(desktop, 'index.html')
        title = title_of(desktop_index) or title
        if os.path.exists(desktop_index):
            game['play']['desktop'] = f"demo/{entry}/desktop/index.html"
    if os.path.isdir(mobile):
        mobile_index = os.path.join(mobile, 'index.html')
        title = title_of(mobile_index) or title
        if os.path.exists(mobile_index):
            game['play']['mobile'] = f"demo/{entry}/mobile/index.html"
    if title is None:
        title = entry
    game['name'] = title
    games.append(game)

print(json.dumps({'content': games}, indent=2, ensure_ascii=False))
