const EXAMPLE_JSON = `{
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
}`

const FOLDER_STRUCTURE = `my-template/
├── main.typ      # Layout and styling (Typst)
├── input.json    # Data — one object per PDF output
└── assets/       # Optional images, fonts, etc.`

export function Templates() {
  return (
    <section id="templates" className="section">
      <div className="container">
        <h2 className="section-title">Start with ready-made templates</h2>
        <p className="section-lead">
          Not sure where to begin? The{' '}
          <a
            href="https://github.com/aegion-dynamic/stencil-templates"
            target="_blank"
            rel="noopener noreferrer"
          >
            stencil-templates
          </a>{' '}
          repository collects free, reusable Stencil templates anyone can use. Clone or
          download a template folder, point Stencil at it, and customize the layout and
          sample data.
        </p>

        <div className="templates-starters">
          <h3>Suggested starter templates</h3>
          <ul>
            <li>
              <strong>sample-letter</strong> — Simple business letter with company header,
              date, recipient, and body
            </li>
            <li>
              <strong>sample-memo</strong> — Internal memo with subject line and message
              body
            </li>
          </ul>
        </div>

        <div className="templates-steps">
          <h3>How to use a template</h3>
          <ol>
            <li>
              Download or clone{' '}
              <a
                href="https://github.com/aegion-dynamic/stencil-templates"
                target="_blank"
                rel="noopener noreferrer"
              >
                stencil-templates
              </a>
              .
            </li>
            <li>
              Copy a template folder (e.g. sample-letter/) into your Stencil templates
              folder.
            </li>
            <li>Open Stencil, select the template, edit input.json, and click Build.</li>
          </ol>
        </div>

        <div className="code-examples">
          <div className="code-block">
            <h4>Template folder structure</h4>
            <pre><code>{FOLDER_STRUCTURE}</code></pre>
          </div>
          <div className="code-block">
            <h4>Example input.json</h4>
            <pre><code>{EXAMPLE_JSON}</code></pre>
          </div>
        </div>

        <p className="templates-license">
          Templates in that repo are released under{' '}
          <a
            href="https://creativecommons.org/publicdomain/zero/1.0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CC0 1.0
          </a>{' '}
          — use them freely in personal and commercial projects.
        </p>
      </div>
    </section>
  )
}
