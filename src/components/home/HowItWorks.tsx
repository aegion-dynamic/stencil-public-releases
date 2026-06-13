const STEPS = [
  {
    number: '1',
    title: 'Pick or create a template',
    description:
      'Each template is a folder with a main.typ file (and optional assets). Stencil discovers every folder that contains main.typ in your templates directory.',
  },
  {
    number: '2',
    title: 'Add your data',
    description:
      'Edit input.json in the app. Each top-level key becomes one output file. Or import an .xlsx spreadsheet and export it back when you are done.',
  },
  {
    number: '3',
    title: 'Build',
    description:
      'Click Build. Stencil compiles each entry to a PDF named main-{key}.pdf in your outputs folder.',
  },
  {
    number: '4',
    title: 'Preview and finish',
    description:
      'Review PDFs in the built-in viewer. Place signature or image overlays where needed, then save or export the annotated PDF.',
  },
]

export function HowItWorks() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">How it works</h2>
        <div className="steps-grid">
          {STEPS.map((step) => (
            <div key={step.number} className="step-card">
              <span className="step-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
