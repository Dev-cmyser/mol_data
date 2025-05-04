import os
import json

MAX_CHARS = 1_000

EXTENSIONS = {
    ".ts", ".tsx", ".js",
    ".html", ".tree",
    ".txt", ".md", ".json", ".yaml", ".yml", ".xml", ".css"
}

raw_dir = "mol_docs"
out_file = "data/train.jsonl"

os.makedirs(os.path.dirname(out_file), exist_ok=True)

def split_text_by_chars(text, max_chars):
    return [text[i:i+max_chars] for i in range(0, len(text), max_chars)]

with open(out_file, "w", encoding="utf-8") as fout:
    for root, _, files in os.walk(raw_dir):
        for fname in files:
            _, ext = os.path.splitext(fname.lower())
            if ext not in EXTENSIONS:
                continue

            path = os.path.join(root, fname)
            try:
                with open(path, encoding="utf-8") as f:
                    text = f.read().strip()
            except (UnicodeDecodeError, PermissionError):
                continue

            if not text:
                continue

            chunks = split_text_by_chars(text, MAX_CHARS)
            for chunk in chunks:
                if chunk.strip():
                    entry = {"prompt": chunk, "completion": ""}
                    fout.write(json.dumps(entry, ensure_ascii=False) + "\n")
