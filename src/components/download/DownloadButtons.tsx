import { Link } from 'react-router-dom'
import {
  detectPlatform,
  getPrimaryDownload,
  GITHUB_RELEASES_URL,
  PLATFORM_LABELS,
  type Platform,
  type ParsedRelease,
} from '../../lib/releases'
import { useReleases } from '../../hooks/useReleases'
import { PlatformIcon } from './PlatformIcon'

interface DownloadButtonsProps {
  release?: ParsedRelease | null
  showAllPlatforms?: boolean
  showOlderLink?: boolean
  compact?: boolean
}

const PLATFORMS: Platform[] = ['macos', 'windows', 'linux']

function DownloadSkeleton() {
  return (
    <div className="download-buttons">
      <div className="skeleton skeleton-button" />
      <div className="download-buttons-row">
        <div className="skeleton skeleton-button-sm" />
        <div className="skeleton skeleton-button-sm" />
        <div className="skeleton skeleton-button-sm" />
      </div>
    </div>
  )
}

export function DownloadButtons({
  release: releaseProp,
  showAllPlatforms = true,
  showOlderLink = false,
  compact = false,
}: DownloadButtonsProps) {
  const { latest, loading, error } = useReleases()
  const release = releaseProp ?? latest
  const detectedPlatform = detectPlatform()

  if (loading && !release) {
    return <DownloadSkeleton />
  }

  if (error && !release) {
    return (
      <div className="download-buttons">
        <p className="download-error">Could not load releases. Download from GitHub instead.</p>
        <a href={GITHUB_RELEASES_URL} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>
    )
  }

  if (!release || release.downloads.length === 0) {
    return (
      <div className="download-buttons">
        <a href={GITHUB_RELEASES_URL} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Download from GitHub
        </a>
      </div>
    )
  }

  const primary = getPrimaryDownload(release.downloads, detectedPlatform)
  const primaryPlatform = primary?.platform ?? detectedPlatform

  return (
    <div className={`download-buttons${compact ? ' download-buttons--compact' : ''}`}>
      {primary && (
        <a
          href={primary.asset.browser_download_url}
          className="btn btn-primary btn-lg"
          download
        >
          <PlatformIcon platform={primaryPlatform} size={18} />
          Download for {PLATFORM_LABELS[primaryPlatform]}
        </a>
      )}

      {showAllPlatforms && (
        <div className="download-buttons-row">
          {PLATFORMS.map((platform) => {
            const download = getPrimaryDownload(release.downloads, platform)
            if (!download) return null
            const isActive = platform === detectedPlatform
            return (
              <a
                key={platform}
                href={download.asset.browser_download_url}
                className={`btn btn-secondary${isActive ? ' btn-secondary--active' : ''}`}
                download
              >
                <PlatformIcon platform={platform} size={16} />
                {PLATFORM_LABELS[platform]}
              </a>
            )
          })}
        </div>
      )}

      {showOlderLink && (
        <Link to="/download" className="download-older-link">
          All releases &amp; older versions →
        </Link>
      )}

      <p className="download-version">
        Latest: {release.name}
      </p>
    </div>
  )
}
