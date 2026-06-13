import { Link, NavLink } from 'react-router-dom'
import { assetUrl, homeAnchor } from '../../lib/paths'
import { GITHUB_DISCUSSIONS_URL, GITHUB_ISSUES_URL } from '../../lib/releases'

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="logo">
          <img src={assetUrl('favicon.svg')} alt="" width={28} height={28} />
          <span>Stencil</span>
        </Link>

        <nav className="nav" aria-label="Main">
          <a href={homeAnchor('features')}>Features</a>
          <a href={homeAnchor('templates')}>Templates</a>
          <NavLink to="/download">Download</NavLink>
          <a href={GITHUB_ISSUES_URL} target="_blank" rel="noopener noreferrer">
            Issues
          </a>
          <a href={GITHUB_DISCUSSIONS_URL} target="_blank" rel="noopener noreferrer">
            Discussions
          </a>
        </nav>

        <Link to="/download" className="btn btn-primary btn-nav">
          Download
        </Link>
      </div>
    </header>
  )
}
