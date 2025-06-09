'use client'

import { useEffect } from 'react'
import Image from 'next/image'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <Image
            src="/error-illustration.svg"
            alt="Error"
            width={300}
            height={200}
            className="mx-auto"
            priority
          />
        </div>
        
        <h1 className="text-6xl font-bold text-red-600 mb-4">500</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Something went wrong!
        </h2>
        <p className="text-gray-600 mb-8">
          We're sorry, but something unexpected happened. Please try again.
        </p>
        
        {process.env.NODE_ENV === 'development' && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 text-left">
            <h3 className="font-semibold text-red-800 mb-2">Error Details:</h3>
            <p className="text-red-700 text-sm font-mono">
              {error.message}
            </p>
            {error.digest && (
              <p className="text-red-600 text-xs mt-2">
                Error ID: {error.digest}
              </p>
            )}
          </div>
        )}
        
        <div className="space-y-4">
          <button
            onClick={reset}
            className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
          >
            Try Again
          </button>
          
          <div>
            <a
              href="/"
              className="text-red-600 hover:text-red-800 underline"
            >
              Go Home
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
