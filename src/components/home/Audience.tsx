const AUDIENCES = [
  {
    title: 'Operations & admin',
    description: 'Generate batches of letters, memos, or forms from a spreadsheet.',
  },
  {
    title: 'Small teams',
    description: 'One person maintains the template; others only fill data.',
  },
  {
    title: 'Developers & power users',
    description:
      'Typst gives you version-controlled, diff-friendly layouts instead of fragile Word templates.',
  },
  {
    title: 'Anyone tired of manual PDF assembly',
    description: 'Layout once, data many times.',
  },
]

export function Audience() {
  return (
    <section className="section section-alt">
      <div className="container">
        <h2 className="section-title">Who it is for</h2>
        <div className="audience-grid">
          {AUDIENCES.map((item) => (
            <div key={item.title} className="audience-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
