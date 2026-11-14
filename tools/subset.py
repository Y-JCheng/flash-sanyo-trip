"""把霞鶩文楷 TC 縮減成只含網站用到的字，輸出到 fonts/。
改了行程文字之後要重跑一次：
  python subset.py <含 LXGWWenKaiTC-Regular.ttf / -Medium.ttf 的資料夾>
需要 fonttools 與 brotli。字型授權：SIL OFL 1.1（LXGW WenKai）。"""
import os, sys
from fontTools import subset

root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
src = sys.argv[1]
chars = set()
for f in ("data.js", "app.js", "index.html"):
    chars |= set(open(os.path.join(root, f), encoding="utf-8").read())
# 基本字：ASCII、常用標點、箭頭、方框與標記
chars |= set(chr(c) for c in range(0x20, 0x7F))
chars |= set("，。、；：！？「」『』（）〔〕【】—－～・·…→←↑↓＋－　〒☐✓行食遊宿山陽紅葉帖")
text = "".join(sorted(chars))

os.makedirs(os.path.join(root, "fonts"), exist_ok=True)
for name, out in (("Regular", "wenkai-regular"), ("Medium", "wenkai-bold")):
    opts = subset.Options()
    opts.flavor = "woff2"
    opts.layout_features = ["*"]
    opts.notdef_outline = True
    font = subset.load_font(os.path.join(src, "LXGWWenKaiTC-%s.ttf" % name), opts)
    s = subset.Subsetter(opts)
    s.populate(text=text)
    s.subset(font)
    dst = os.path.join(root, "fonts", out + ".woff2")
    subset.save_font(font, dst, opts)
    print(dst, os.path.getsize(dst) // 1024, "KB")
