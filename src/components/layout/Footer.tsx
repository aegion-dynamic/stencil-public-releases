import { Link } from 'react-router-dom'
import { assetUrl, homeAnchor } from '../../lib/paths'
import {
  GITHUB_DISCUSSIONS_URL,
  GITHUB_ISSUES_URL,
  GITHUB_RELEASES_URL,
} from '../../lib/releases'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src={assetUrl('favicon.svg')} alt="" width={24} height={24} />
          <p>Template-based document generation, powered by Typst.</p>
        </div>

        <div className="footer-links">
          <a href={homeAnchor('features')}>Features</a>
          <a href={homeAnchor('templates')}>Templates</a>
          <Link to="/download">Download</Link>
          <a
            href="https://github.com/aegion-dynamic/stencil-templates"
            target="_blank"
            rel="noopener noreferrer"
          >
            Templates repo
          </a>
          <a href={GITHUB_RELEASES_URL} target="_blank" rel="noopener noreferrer">
            Releases
          </a>
          <a href={GITHUB_ISSUES_URL} target="_blank" rel="noopener noreferrer">
            Report an issue
          </a>
          <a href={GITHUB_DISCUSSIONS_URL} target="_blank" rel="noopener noreferrer">
            Discussions
          </a>
        </div>

        <div className="footer-developer">
          <p className="footer-developer-label">Developed by</p>
          <div className="footer-aegion-logos">
            <a
              href="https://aegiondynamic.com"
              className="footer-aegion-logo-link footer-aegion-logo-link--dark"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Aegion Dynamic"
            >
              <img src={assetUrl('logo-dark.svg')} alt="" className="footer-aegion-logo" />
            </a>
            <a
              href="https://aegiondynamic.com"
              className="footer-aegion-logo-link footer-aegion-logo-link--light"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Aegion Dynamic"
            >
              <img src={assetUrl('logo-light.svg')} alt="" className="footer-aegion-logo" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
