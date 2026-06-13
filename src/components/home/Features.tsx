const FEATURES = [
  {
    title: 'Typst-powered layouts',
    description:
      'Modern, code-based typesetting with crisp typography and predictable output.',
  },
  {
    title: 'Batch generation',
    description:
      'One template, many PDFs, ideal for mail-merge-style workflows without Word.',
  },
  {
    title: 'JSON & spreadsheet input',
    description:
      'Edit data in a JSON editor, or import/export Excel for non-technical teammates.',
  },
  {
    title: 'Built-in template editor',
    description: 'Edit .typ, .json, and related files without leaving the app.',
  },
  {
    title: 'PDF preview',
    description: 'Inspect output immediately after a build.',
  },
  {
    title: 'Signatures & images',
    description:
      'Drag signature or image overlays onto pages and export flattened PDFs.',
  },
  {
    title: 'Local-first',
    description: 'Templates and outputs live on your machine. You control the folders.',
  },
  {
    title: 'Cross-platform',
    description: 'Available for macOS, Windows, and Linux.',
  },
]

export function Features() {
  return (
    <section id="features" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Features</h2>
        <div className="features-grid">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
