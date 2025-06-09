import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Next.js Basic Features
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Simple Next.js application with basic middleware, authentication, and image optimization.
          </p>

          {/* Simple Hero Image */}
          <div className="mb-8">
            <Image
              src="/hero-image.svg"
              alt="Next.js Features"
              width={600}
              height={300}
              className="mx-auto rounded-lg shadow-lg"
              priority
            />
          </div>

          {/* Simple Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">🔒 Basic Authentication</h3>
              <p className="text-gray-600">Simple login/logout with middleware protection</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">🖼️ Image Optimization</h3>
              <p className="text-gray-600">Next.js Image component with basic optimization</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">🚀 API Routes</h3>
              <p className="text-gray-600">Simple API endpoints for authentication</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">⚠️ Error Pages</h3>
              <p className="text-gray-600">Custom 404 and error handling</p>
            </div>
          </div>

          {/* Simple CTA */}
          <div className="text-center">
            <div className="space-x-4">
              <Link
                href="/login"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
              >
                Login
              </Link>
              <Link
                href="/dashboard"
                className="inline-block bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700"
              >
                Dashboard
              </Link>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Demo: user@example.com / password123
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
