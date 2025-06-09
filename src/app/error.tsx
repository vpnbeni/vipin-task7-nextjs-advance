'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600 mb-4">Error</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Something went wrong!
        </h2>
        <p className="text-gray-600 mb-8">
          {error.message || 'An unexpected error occurred.'}
        </p>

        <button
          onClick={reset}
          className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700"
        >
          Try Again
        </button>
      </div>
    </div>
  )
}
