import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Next.js Advanced Features
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              A production-ready application demonstrating middleware, authentication,
              API routes, image optimization, and custom error pages.
            </p>
          </div>

          {/* Hero Image */}
          <div className="mt-10">
            <Image
              src="/hero-image.svg"
              alt="Next.js Advanced Features"
              width={800}
              height={400}
              className="mx-auto rounded-lg shadow-xl"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Production-Ready Implementation
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {/* Feature 1 */}
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  🔒
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Middleware Authentication</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Route protection with JWT tokens and automatic redirects for unauthorized access.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  🚀
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">API Routes with Middleware</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  RESTful API endpoints with proper error handling and authentication middleware.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  🖼️
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Image Optimization</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Automatic image optimization with responsive sizing and modern format delivery.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  ⚠️
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Custom Error Pages</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Beautiful 404 and 500 error pages with proper error boundaries and recovery options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to explore?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-200">
            Try the authentication system and explore the protected dashboard.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <Link
              href="/login"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-400"
            >
              Sign Up
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center px-5 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-blue-500"
            >
              View Gallery
            </Link>
          </div>
          <p className="mt-4 text-sm text-blue-200">
            Demo credentials: user@example.com / password123
          </p>
        </div>
      </div>
    </div>
  )
}
