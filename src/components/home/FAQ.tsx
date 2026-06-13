import { useState, type ReactNode } from 'react'
import { GITHUB_DISCUSSIONS_URL, GITHUB_ISSUES_URL } from '../../lib/releases'

const FAQ_ITEMS: { question: string; answer: ReactNode }[] = [
  {
    question: 'Do I need to know Typst?',
    answer:
      'Helpful, but not required to start. Use the free templates as-is, change text in input.json, and learn Typst as you customize layouts.',
  },
  {
    question: 'How is this different from mail merge in Word?',
    answer:
      'Stencil uses code-based templates (Typst) instead of .docx files. That means better consistency, easier versioning in Git, and batch builds without opening Office.',
  },
  {
    question: 'Where are my files stored?',
    answer:
      'You choose a templates folder and an outputs folder in Settings. Everything stays local on your computer.',
  },
  {
    question: 'Can I import data from Excel?',
    answer:
      'Yes. Use Import on the Input tab to load an .xlsx file (rows need a key column plus your field columns), or Export to share data with teammates.',
  },
  {
    question: 'Can I add signatures after generating PDFs?',
    answer:
      'Yes. Open a PDF in the Output tab, place signature or image overlays, and save or export the annotated file.',
  },
  {
    question: 'Are the templates free?',
    answer:
      'Yes. Templates in stencil-templates are CC0. No attribution required, though credit is appreciated.',
  },
  {
    question: 'Can I contribute templates?',
    answer:
      'Contributions welcome on GitHub. Each template should be a self-contained folder with main.typ, input.json, and a short README describing fields and usage.',
  },
  {
    question: 'How do I report a bug or ask a question?',
    answer: (
      <>
        File a bug or feature request on{' '}
        <a href={GITHUB_ISSUES_URL} target="_blank" rel="noopener noreferrer">
          GitHub Issues
        </a>
        . For questions, ideas, and general discussion, visit{' '}
        <a href={GITHUB_DISCUSSIONS_URL} target="_blank" rel="noopener noreferrer">
          GitHub Discussions
        </a>
        .
      </>
    ),
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="section section-alt">
      <div className="container narrow">
        <h2 className="section-title">FAQ</h2>
        <div className="faq-list">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div key={item.question} className={`faq-item${isOpen ? ' faq-item--open' : ''}`}>
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  {item.question}
                  <span className="faq-chevron" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && <p className="faq-answer">{item.answer}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
