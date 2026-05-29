"""Extract text and images from all required PDFs."""
import os, sys, fitz  # PyMuPDF
import pdfplumber

BASE = r"d:\college\sem 4\ip\sahla"
OUT  = os.path.join(BASE, ".antigravity")
IMG_DIR = os.path.join(OUT, "extracted_images")
os.makedirs(IMG_DIR, exist_ok=True)

# All PDFs to process
pdfs = {
    # Database
    "db_lect4": r"subjects matrial\database\lectures\Lect4-ER_Model2.pdf",
    "db_lect5": r"subjects matrial\database\lectures\Lect5-Logical DB Design.pdf",
    "db_lect6": r"subjects matrial\database\lectures\Lect6-Extended_ER_Model.pdf",
    "db_lab7":  r"subjects matrial\database\sections\Lab 7.pdf",
    # Data Mining
    "dm_lect7": r"subjects matrial\data mining\lectures\Lec.7.D. M.  spring 2026.pdf",
    "dm_lect8": r"subjects matrial\data mining\lectures\Lec.8.D. M.  spring 2026.pdf",
    "dm_sec8":  r"subjects matrial\data mining\sections\Sec8_fuzzyControlSprinklerSimulator.pdf",
    "dm_sec9":  r"subjects matrial\data mining\sections\DM Sec 9 - Genetic_Algorithm.pdf",
}

for key, relpath in pdfs.items():
    fullpath = os.path.join(BASE, relpath)
    print(f"\n{'='*60}")
    print(f"Processing: {key} -> {relpath}")
    
    # --- Extract text with pdfplumber ---
    txt_out = os.path.join(OUT, f"{key}.txt")
    try:
        with pdfplumber.open(fullpath) as pdf:
            with open(txt_out, "w", encoding="utf-8") as f:
                for i, page in enumerate(pdf.pages, 1):
                    text = page.extract_text() or ""
                    f.write(f"--- Page {i} ---\n{text}\n\n")
        print(f"  Text -> {txt_out}  ({os.path.getsize(txt_out)} bytes)")
    except Exception as e:
        print(f"  TEXT ERROR: {e}")

    # --- Extract images with PyMuPDF ---
    img_subdir = os.path.join(IMG_DIR, key)
    os.makedirs(img_subdir, exist_ok=True)
    img_count = 0
    try:
        doc = fitz.open(fullpath)
        for page_num in range(len(doc)):
            page = doc[page_num]
            images = page.get_images(full=True)
            for img_idx, img_info in enumerate(images):
                xref = img_info[0]
                try:
                    base_image = doc.extract_image(xref)
                    if base_image:
                        ext = base_image.get("ext", "png")
                        img_bytes = base_image["image"]
                        # skip tiny images (icons, bullets)
                        w = base_image.get("width", 0)
                        h = base_image.get("height", 0)
                        if w < 50 or h < 50:
                            continue
                        img_path = os.path.join(img_subdir, f"p{page_num+1}_img{img_idx}.{ext}")
                        with open(img_path, "wb") as f:
                            f.write(img_bytes)
                        img_count += 1
                except Exception:
                    pass
        doc.close()
        print(f"  Images -> {img_subdir}  ({img_count} images)")
    except Exception as e:
        print(f"  IMAGE ERROR: {e}")

print("\n\nDONE!")
