import { Link, NavLink } from 'react-router-dom'
import { assetUrl, homeAnchor } from '../../lib/paths'

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
          <a
            href="https://github.com/aegion-dynamic/stencil-public-releases"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </nav>

        <Link to="/download" className="btn btn-primary btn-nav">
          Download
        </Link>
      </div>
    </header>
  )
}
