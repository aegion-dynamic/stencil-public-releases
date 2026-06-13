import { Link } from 'react-router-dom'
import { DownloadButtons } from '../download/DownloadButtons'

export function DownloadCta() {
  return (
    <section id="download" className="section section-cta">
      <div className="container narrow cta-inner">
        <h2 className="section-title">Ready to generate your first batch?</h2>
        <p className="section-lead">
          Download Stencil for your platform, add a template from{' '}
          <a
            href="https://github.com/aegion-dynamic/stencil-templates"
            target="_blank"
            rel="noopener noreferrer"
          >
            stencil-templates
          </a>
          , and build your first PDFs in minutes.
        </p>
        <DownloadButtons showOlderLink />
        <Link to="/download" className="cta-all-releases">
          View all releases and download options →
        </Link>
      </div>
    </section>
  )
}
