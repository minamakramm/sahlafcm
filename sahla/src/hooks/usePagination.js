import { useState, useMemo, useCallback } from 'react'
import { PAGINATION } from '@/lib/constants'

/**
 * Hook for client-side pagination.
 * Useful for paginating static data arrays.
 *
 * @param {Array} data - Full data array
 * @param {number} pageSize - Items per page (default: 20)
 */
export function usePagination(data = [], pageSize = PAGINATION.DEFAULT_PAGE_SIZE) {
  const [currentPage, setCurrentPage] = useState(1)

  const totalItems = data.length
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize))

  // Clamp current page to valid range
  const safePage = Math.min(currentPage, totalPages)

  const paginatedData = useMemo(() => {
    const start = (safePage - 1) * pageSize
    return data.slice(start, start + pageSize)
  }, [data, safePage, pageSize])

  const goToPage = useCallback(
    (page) => {
      setCurrentPage(Math.max(1, Math.min(page, totalPages)))
    },
    [totalPages]
  )

  const nextPage = useCallback(() => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
  }, [totalPages])

  const prevPage = useCallback(() => {
    setCurrentPage((prev) => Math.max(prev - 1, 1))
  }, [])

  const resetPage = useCallback(() => {
    setCurrentPage(1)
  }, [])

  return {
    data: paginatedData,
    currentPage: safePage,
    totalPages,
    totalItems,
    pageSize,
    hasNextPage: safePage < totalPages,
    hasPrevPage: safePage > 1,
    goToPage,
    nextPage,
    prevPage,
    resetPage,
  }
}
