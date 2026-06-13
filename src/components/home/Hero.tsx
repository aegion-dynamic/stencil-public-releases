import { DownloadButtons } from '../download/DownloadButtons'
import { assetUrl } from '../../lib/paths'

export function Hero() {
  return (
    <section className="hero section">
      <div className="container hero-inner">
        <div className="hero-content">
          <p className="eyebrow">Template-based PDF generation</p>
          <h1>Turn templates into PDFs at scale.</h1>
          <p className="hero-subtitle">
            Stencil is a desktop app for generating professional PDF documents from Typst
            templates. Fill in JSON (or import a spreadsheet), hit Build, and get one PDF
            per record, with live preview and optional signatures.
          </p>
          <DownloadButtons showOlderLink />
          <a
            href="https://github.com/aegion-dynamic/stencil-templates"
            className="hero-secondary-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Browse free templates →
          </a>
        </div>
        <div className="hero-visual">
          <div className="hero-video-frame">
            <video
              className="hero-video"
              src={assetUrl('Stencil-Fast-1.mp4')}
              autoPlay
              muted
              loop
              playsInline
              aria-label="Stencil desktop app demo: building PDFs from Typst templates"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
