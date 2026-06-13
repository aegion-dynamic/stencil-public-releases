export const GITHUB_OWNER = 'aegion-dynamic'
export const GITHUB_REPO = 'stencil-public-releases'
export const GITHUB_REPO_URL = `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}`
export const GITHUB_RELEASES_URL = `${GITHUB_REPO_URL}/releases`
export const GITHUB_ISSUES_URL = `${GITHUB_REPO_URL}/issues`
export const GITHUB_DISCUSSIONS_URL = `${GITHUB_REPO_URL}/discussions`

export type Platform = 'macos' | 'windows' | 'linux'

export interface GitHubAsset {
  name: string
  browser_download_url: string
  size: number
}

export interface GitHubRelease {
  tag_name: string
  name: string
  published_at: string
  html_url: string
  body: string | null
  assets: GitHubAsset[]
}

export interface PlatformDownload {
  platform: Platform
  label: string
  asset: GitHubAsset
}

export interface ParsedRelease {
  tag: string
  name: string
  publishedAt: string
  htmlUrl: string
  downloads: PlatformDownload[]
}

const INSTALLER_PATTERNS: { platform: Platform; test: RegExp; label: string; priority: number }[] = [
  { platform: 'macos', test: /\.dmg$/i, label: 'macOS (.dmg)', priority: 1 },
  { platform: 'macos', test: /-arm64-mac\.zip$/i, label: 'Apple Silicon (.zip)', priority: 2 },
  { platform: 'macos', test: /-mac\.zip$/i, label: 'Intel Mac (.zip)', priority: 3 },
  { platform: 'windows', test: /-setup\.exe$/i, label: 'Windows (.exe)', priority: 1 },
  { platform: 'linux', test: /\.AppImage$/i, label: 'Linux (AppImage)', priority: 1 },
  { platform: 'linux', test: /\.deb$/i, label: 'Linux (.deb)', priority: 2 },
]

function isExcludedAsset(name: string): boolean {
  return (
    name.endsWith('.blockmap') ||
    name.endsWith('.yml') ||
    name.endsWith('.yaml')
  )
}

function assetScore(name: string): number {
  const lower = name.toLowerCase()
  if (lower.startsWith('stencil')) return 2
  if (lower.startsWith('template-printer')) return 0
  return 1
}

export function parseReleaseAssets(assets: GitHubAsset[]): PlatformDownload[] {
  const candidates: (PlatformDownload & { priority: number; score: number })[] = []

  for (const asset of assets) {
    if (isExcludedAsset(asset.name)) continue

    for (const pattern of INSTALLER_PATTERNS) {
      if (pattern.test.test(asset.name)) {
        candidates.push({
          platform: pattern.platform,
          label: pattern.label,
          asset,
          priority: pattern.priority,
          score: assetScore(asset.name),
        })
        break
      }
    }
  }

  candidates.sort((a, b) => {
    if (a.platform !== b.platform) return a.platform.localeCompare(b.platform)
    if (a.score !== b.score) return b.score - a.score
    return a.priority - b.priority
  })

  const seen = new Set<string>()
  const result: PlatformDownload[] = []

  for (const candidate of candidates) {
    const key = `${candidate.platform}:${candidate.label}`
    if (seen.has(key)) continue
    seen.add(key)
    result.push({
      platform: candidate.platform,
      label: candidate.label,
      asset: candidate.asset,
    })
  }

  return result
}

export function getPrimaryDownload(
  downloads: PlatformDownload[],
  platform: Platform,
): PlatformDownload | undefined {
  const platformDownloads = downloads.filter((d) => d.platform === platform)
  if (platformDownloads.length === 0) return undefined
  return platformDownloads[0]
}

export function detectPlatform(): Platform {
  if (typeof navigator === 'undefined') return 'macos'

  const ua = navigator.userAgent.toLowerCase()
  const platform = navigator.platform?.toLowerCase() ?? ''

  if (ua.includes('win') || platform.includes('win')) return 'windows'
  if (ua.includes('linux') || platform.includes('linux')) return 'linux'
  return 'macos'
}

export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} MB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function parseRelease(release: GitHubRelease): ParsedRelease {
  return {
    tag: release.tag_name,
    name: release.name || release.tag_name,
    publishedAt: release.published_at,
    htmlUrl: release.html_url,
    downloads: parseReleaseAssets(release.assets),
  }
}

export async function fetchReleases(): Promise<ParsedRelease[]> {
  const response = await fetch(
    `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/releases`,
  )

  if (!response.ok) {
    throw new Error(`Failed to fetch releases (${response.status})`)
  }

  const data: GitHubRelease[] = await response.json()
  return data.map(parseRelease)
}

export const PLATFORM_LABELS: Record<Platform, string> = {
  macos: 'macOS',
  windows: 'Windows',
  linux: 'Linux',
}
