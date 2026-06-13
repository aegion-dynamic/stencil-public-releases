import { GITHUB_RELEASES_URL } from '../lib/releases'
import { DownloadButtons } from '../components/download/DownloadButtons'
import { ReleaseList } from '../components/download/ReleaseList'

export function DownloadPage() {
  return (
    <div className="download-page">
      <section className="section download-page-hero">
        <div className="container narrow">
          <h1>Download Stencil</h1>
          <p className="section-lead">
            Get the latest version for your platform, or browse all releases below.
          </p>
          <DownloadButtons compact />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">All releases</h2>
          <p className="section-lead">
            Every version published to{' '}
            <a href={GITHUB_RELEASES_URL} target="_blank" rel="noopener noreferrer">
              GitHub Releases
            </a>
            , with installers for macOS, Windows, and Linux.
          </p>
          <ReleaseList />
        </div>
      </section>
    </div>
  )
}
