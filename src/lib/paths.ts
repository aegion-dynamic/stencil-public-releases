export const baseUrl = import.meta.env.BASE_URL

export function assetUrl(path: string): string {
  return `${baseUrl}${path.replace(/^\//, '')}`
}

export function homeAnchor(hash: string): string {
  return `${baseUrl}#${hash.replace(/^#/, '')}`
}
