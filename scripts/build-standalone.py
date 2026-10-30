"""Fold the standalone Vite build into one self-contained HTML file for sharing.

Usage: npm run build:standalone
Output: dist/second-spin-preview.html (open it in any browser; needs internet only for fonts and the map).
"""
import pathlib
import re

root = pathlib.Path(__file__).resolve().parent.parent
build = root / "dist" / "standalone"
html = (build / "index.html").read_text()


def inline_script(match: re.Match) -> str:
    js = (build / match.group(1)).read_text()
    # A literal "</script" inside the code would end the tag early.
    js = js.replace("</script", "<\\/script")
    return f'<script type="module">{js}</script>'


def inline_style(match: re.Match) -> str:
    css = (build / match.group(1)).read_text()
    return f"<style>{css}</style>"


html = re.sub(r'<script type="module" crossorigin src="\./([^"]+)"></script>', inline_script, html)
html = re.sub(r'<link rel="stylesheet" crossorigin href="\./([^"]+)">', inline_style, html)

leftover = re.findall(r'(?:src|href)="\./assets/[^"]+"', html)
if leftover:
    raise SystemExit(f"Not inlined: {leftover}")

banner = "<!-- Second Spin Thrift website preview, shared for feedback. Not the live site. -->\n"
out = root / "dist" / "second-spin-preview.html"
out.write_text(banner + html)
print(f"Wrote {out.relative_to(root)} ({out.stat().st_size / 1e6:.1f} MB)")
