'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export type ErrorFallBackProps = {
  error: Error
  reset?: () => void
}

export default function Error({ error, reset }: ErrorFallBackProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div
      style={{
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        minWidth: '100vw',
      }}
    >
      <h2>An error has been oncurred</h2>
      <p>{error.message}</p>

      <Link href="/" style={{ color: '#fff' }}>
        Return to home
      </Link>
    </div>
  )
}
