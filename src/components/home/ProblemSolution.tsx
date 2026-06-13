export function ProblemSolution() {
  return (
    <section className="section section-alt">
      <div className="container">
        <div className="two-col">
          <div className="problem-block">
            <h2>The problem</h2>
            <p>
              You have a document layout you reuse — offer letters, memos, certificates,
              client packets — but copying and pasting into Word or exporting one PDF at a
              time does not scale.
            </p>
          </div>
          <div className="solution-block">
            <h2>The solution</h2>
            <p>
              Stencil separates <strong>layout</strong> (a Typst template) from{' '}
              <strong>data</strong> (JSON or Excel). One template, many documents. Change
              the data, rebuild, done.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
