import os
import json

MAX_CHARS = 1_000
MAX_FILE_SIZE = 24 * 1024 * 1024  # 10 MB in bytes

EXTENSIONS = {
    ".ts", ".tsx", ".js",
    ".html", ".tree",
    ".txt", ".md", ".json", ".yaml", ".yml", ".xml", ".css"
}

raw_dir = "mol_docs"
out_dir = "data"
out_file_prefix = "train"

os.makedirs(out_dir, exist_ok=True)

def split_text_by_chars(text, max_chars):
    return [text[i:i+max_chars] for i in range(0, len(text), max_chars)]

def get_output_filename(file_number):
    return os.path.join(out_dir, f"{out_file_prefix}_{file_number:03d}.txt")

file_number = 1
current_file_size = 0
fout = open(get_output_filename(file_number), "w", encoding="utf-8")

try:
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
                    chunk_data = chunk + "\n"
                    chunk_size = len(chunk_data.encode('utf-8'))

                    # Check if we need to create a new file
                    if current_file_size + chunk_size > MAX_FILE_SIZE and current_file_size > 0:
                        fout.close()
                        file_number += 1
                        current_file_size = 0
                        fout = open(get_output_filename(file_number), "w", encoding="utf-8")
                        print(f"Created new file: {get_output_filename(file_number)}")

                    fout.write(chunk_data)
                    current_file_size += chunk_size

finally:
    fout.close()
    print(f"Data split into {file_number} files")
