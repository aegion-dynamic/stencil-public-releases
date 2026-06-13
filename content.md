Here is landing-page copy grounded in what Stencil actually does in this repo: a desktop app that batch-generates PDFs from **Typst** templates and **JSON** input, with preview and signature/image overlays. You can drop this into a simple static site or README-style page.

---

## Page meta (SEO)

**Title:** Stencil — Template-based PDF generation  
**Description:** Generate polished PDF documents from Typst templates and JSON data. Batch-build letters, memos, and more on your desktop — free templates available.  
**Keywords:** PDF generation, Typst templates, document automation, batch PDF, mail merge alternative

---

## Hero

**Headline:** Turn templates into PDFs — at scale.

**Subheadline:** Stencil is a desktop app for generating professional PDF documents from Typst templates. Fill in JSON (or import a spreadsheet), hit Build, and get one PDF per record — with live preview and optional signatures.

**Primary CTA:** Download Stencil  
**Secondary CTA:** Browse free templates → [stencil-templates](https://github.com/aegion-dynamic/stencil-templates)

**One-liner (for nav/footer):** Template-based document generation, powered by Typst.

---

## Problem → solution

**The problem**  
You have a document layout you reuse — offer letters, memos, certificates, client packets — but copying and pasting into Word or exporting one PDF at a time does not scale.

**The solution**  
Stencil separates **layout** (a Typst template) from **data** (JSON or Excel). One template, many documents. Change the data, rebuild, done.

---

## How it works

**1. Pick or create a template**  
Each template is a folder with a `main.typ` file (and optional assets). Stencil discovers every folder that contains `main.typ` in your templates directory.

**2. Add your data**  
Edit `input.json` in the app — each top-level key becomes one output file. Or import an `.xlsx` spreadsheet and export it back when you are done.

**3. Build**  
Click **Build**. Stencil compiles each entry to a PDF named `main-{key}.pdf` in your outputs folder.

**4. Preview and finish**  
Review PDFs in the built-in viewer. Place signature or image overlays where needed, then save or export the annotated PDF.

---

## Features

| Feature | Description |
|--------|-------------|
| **Typst-powered layouts** | Modern, code-based typesetting with crisp typography and predictable output. |
| **Batch generation** | One template, many PDFs — ideal for mail-merge-style workflows without Word. |
| **JSON & spreadsheet input** | Edit data in a JSON editor, or import/export Excel for non-technical teammates. |
| **Built-in template editor** | Edit `.typ`, `.json`, and related files without leaving the app. |
| **PDF preview** | Inspect output immediately after a build. |
| **Signatures & images** | Drag signature or image overlays onto pages and export flattened PDFs. |
| **Local-first** | Templates and outputs live on your machine. You control the folders. |
| **Cross-platform** | Available for macOS, Windows, and Linux. |

---

## Free templates

**Section headline:** Start with ready-made templates

**Body:**  
Not sure where to begin? The [stencil-templates](https://github.com/aegion-dynamic/stencil-templates) repository collects free, reusable Stencil templates anyone can use. Clone or download a template folder, point Stencil at it, and customize the layout and sample data.

**License note:** Templates in that repo are released under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/) — use them freely in personal and commercial projects.

**Suggested starter templates** (for the repo README and landing page):

- **sample-letter** — Simple business letter with company header, date, recipient, and body  
- **sample-memo** — Internal memo with subject line and message body  
- *(Add as you publish)* invoice, certificate, employment offer, NDA cover sheet, etc.

**How to use a template (short instructions for landing page):**

1. Download or clone [stencil-templates](https://github.com/aegion-dynamic/stencil-templates).  
2. Copy a template folder (e.g. `sample-letter/`) into your Stencil templates folder.  
3. Open Stencil, select the template, edit `input.json`, and click **Build**.

**Template folder structure (for docs):**

```
my-template/
├── main.typ      # Layout and styling (Typst)
├── input.json    # Data — one object per PDF output
└── assets/       # Optional images, fonts, etc.
```

**Example `input.json` shape:**

```json
{
  "alice": {
    "document_title": "Welcome Letter",
    "company_name": "Acme Corp",
    "date": "12 June 2026",
    "recipient": "Alice Smith",
    "message": "Welcome aboard."
  },
  "bob": {
    "document_title": "Welcome Letter",
    "company_name": "Acme Corp",
    "date": "12 June 2026",
    "recipient": "Bob Jones",
    "message": "Welcome aboard."
  }
}
```

Each key (`alice`, `bob`) produces `main-alice.pdf` and `main-bob.pdf`.

---

## Who it is for

- **Operations & admin** — Generate batches of letters, memos, or forms from a spreadsheet.  
- **Small teams** — One person maintains the template; others only fill data.  
- **Developers & power users** — Typst gives you version-controlled, diff-friendly layouts instead of fragile Word templates.  
- **Anyone tired of manual PDF assembly** — Layout once, data many times.

---

## Why Typst?

Typst is a modern typesetting language designed for documents: fast compilation, clean syntax, and reliable PDF output. Stencil wraps Typst so you do not need the CLI — templates, data, build, and preview live in one desktop workflow.

---

## Download / CTA block

**Headline:** Ready to generate your first batch?

**Body:** Download Stencil for your platform, add a template from [stencil-templates](https://github.com/aegion-dynamic/stencil-templates), and build your first PDFs in minutes.

**Buttons:**  
- Download for macOS  
- Download for Windows  
- Download for Linux  

*(Point these at your release assets, e.g. `aegion-dynamic/stencil-public-releases`.)*

**Footer line:** Developed by [Aegion Dynamic](https://aegiondynamic.com)

---

## FAQ

**Do I need to know Typst?**  
Helpful, but not required to start. Use the free templates as-is, change text in `input.json`, and learn Typst as you customize layouts.

**How is this different from mail merge in Word?**  
Stencil uses code-based templates (Typst) instead of `.docx` files. That means better consistency, easier versioning in Git, and batch builds without opening Office.

**Where are my files stored?**  
You choose a templates folder and an outputs folder in Settings. Everything stays local on your computer.

**Can I import data from Excel?**  
Yes. Use **Import** on the Input tab to load an `.xlsx` file (rows need a `key` column plus your field columns), or **Export** to share data with teammates.

**Can I add signatures after generating PDFs?**  
Yes. Open a PDF in the Output tab, place signature or image overlays, and save or export the annotated file.

**Are the templates free?**  
Yes. Templates in [stencil-templates](https://github.com/aegion-dynamic/stencil-templates) are CC0 — no attribution required, though credit is appreciated.

**Can I contribute templates?**  
Contributions welcome on GitHub. Each template should be a self-contained folder with `main.typ`, `input.json`, and a short README describing fields and usage.

---

## Suggested content for `stencil-templates` README

You can paste this into the [stencil-templates](https://github.com/aegion-dynamic/stencil-templates) repo:

```markdown
# Stencil Templates

Free, reusable templates for [Stencil](https://github.com/aegion-dynamic/stencil) — template-based PDF generation powered by Typst.

## License

All templates in this repository are dedicated to the public domain under [CC0 1.0](LICENSE).

## Quick start

1. Install Stencil (desktop app).
2. Copy any template folder from this repo into your Stencil templates directory.
3. Open Stencil, select the template, edit `input.json`, and click **Build**.

## Template structure

Each template is a folder containing:

- `main.typ` — Typst layout; reads variables via `sys.inputs`
- `input.json` — Data map; each key generates one PDF (`main-{key}.pdf`)
- Optional assets (images, fonts)

## Available templates

| Template | Description |
|----------|-------------|
| `sample-letter` | Business letter with header, date, recipient, body |
| `sample-memo` | Internal memo with subject and body |

## Contributing

PRs welcome. Please include:
- `main.typ` and `input.json` with at least one example entry
- A one-line description in this README
- No proprietary logos or licensed fonts without permission
```

---

## Optional short sections for a minimal one-page layout

**Nav:** Features · Templates · Download · GitHub  

**Social proof placeholder:**  
> “We replaced our manual letter workflow with Stencil — one template, fifty PDFs in a click.”

**Closing tagline:**  
**Layout once. Data many times. PDFs everywhere.**

---

If you want this turned into actual HTML/React or wired into the app’s About/settings page, switch to Agent mode and say where it should live (standalone site vs. in-repo page). I can also draft individual template READMEs for each folder you plan to publish in `stencil-templates`.