import { GITHUB_RELEASES_URL } from '../../lib/releases'
import { useReleases } from '../../hooks/useReleases'
import { ReleaseCard } from './ReleaseCard'

export function ReleaseList() {
  const { releases, loading, error } = useReleases()

  if (loading) {
    return (
      <div className="release-list">
        <div className="skeleton skeleton-card" />
        <div className="skeleton skeleton-card" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="release-list-error">
        <p>Could not load releases: {error}</p>
        <a href={GITHUB_RELEASES_URL} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          View releases on GitHub
        </a>
      </div>
    )
  }

  if (releases.length === 0) {
    return (
      <div className="release-list-error">
        <p>No releases found.</p>
        <a href={GITHUB_RELEASES_URL} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>
    )
  }

  return (
    <div className="release-list">
      {releases.map((release, index) => (
        <ReleaseCard key={release.tag} release={release} highlighted={index === 0} />
      ))}
    </div>
  )
}
