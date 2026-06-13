import {
  formatDate,
  formatFileSize,
  PLATFORM_LABELS,
  type ParsedRelease,
  type Platform,
} from '../../lib/releases'
import { PlatformIcon } from './PlatformIcon'

interface ReleaseCardProps {
  release: ParsedRelease
  highlighted?: boolean
}

const PLATFORMS: Platform[] = ['macos', 'windows', 'linux']

export function ReleaseCard({ release, highlighted = false }: ReleaseCardProps) {
  const downloadsByPlatform = PLATFORMS.map((platform) => ({
    platform,
    downloads: release.downloads.filter((d) => d.platform === platform),
  })).filter((group) => group.downloads.length > 0)

  return (
    <article className={`release-card${highlighted ? ' release-card--highlighted' : ''}`}>
      <header className="release-card-header">
        <div>
          <h3 className="release-card-title">{release.name}</h3>
          <p className="release-card-meta">
            {release.tag} · {formatDate(release.publishedAt)}
          </p>
        </div>
        <a
          href={release.htmlUrl}
          className="release-card-notes"
          target="_blank"
          rel="noopener noreferrer"
        >
          Release notes
        </a>
      </header>

      <div className="release-card-platforms">
        {downloadsByPlatform.map(({ platform, downloads }) => (
          <div key={platform} className="release-platform-group">
            <div className="release-platform-label">
              <PlatformIcon platform={platform} size={18} />
              {PLATFORM_LABELS[platform]}
            </div>
            <ul className="release-asset-list">
              {downloads.map((download) => (
                <li key={download.asset.name}>
                  <a
                    href={download.asset.browser_download_url}
                    className="release-asset-link"
                    download
                  >
                    <span>{download.label}</span>
                    <span className="release-asset-size">
                      {formatFileSize(download.asset.size)}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </article>
  )
}
