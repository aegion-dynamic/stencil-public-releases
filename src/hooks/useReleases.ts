import { useCallback, useEffect, useState } from 'react'
import { fetchReleases, type ParsedRelease } from '../lib/releases'

interface UseReleasesResult {
  releases: ParsedRelease[]
  latest: ParsedRelease | null
  loading: boolean
  error: string | null
  refetch: () => void
}

export function useReleases(): UseReleasesResult {
  const [releases, setReleases] = useState<ParsedRelease[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [fetchKey, setFetchKey] = useState(0)

  const refetch = useCallback(() => {
    setLoading(true)
    setError(null)
    setFetchKey((key) => key + 1)
  }, [])

  useEffect(() => {
    let cancelled = false

    fetchReleases()
      .then((data) => {
        if (!cancelled) {
          setReleases(data)
          setLoading(false)
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Failed to load releases')
          setLoading(false)
        }
      })

    return () => {
      cancelled = true
    }
  }, [fetchKey])

  return {
    releases,
    latest: releases[0] ?? null,
    loading,
    error,
    refetch,
  }
}
