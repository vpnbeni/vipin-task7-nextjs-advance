import Image from 'next/image'
import Link from 'next/link'

export default function GalleryPage() {
  const images = [
    {
      src: '/hero-image.svg',
      alt: 'Hero Image',
      title: 'Responsive Hero Image',
      description: 'Automatically optimized with responsive sizing'
    },
    {
      src: '/next.svg',
      alt: 'Next.js Logo',
      title: 'Next.js Logo',
      description: 'SVG optimization with priority loading'
    },
    {
      src: '/vercel.svg',
      alt: 'Vercel Logo',
      title: 'Vercel Logo',
      description: 'Lazy loading demonstration'
    },
    {
      src: '/file.svg',
      alt: 'File Icon',
      title: 'File Icon',
      description: 'Small icon with fixed dimensions'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center">
                <Image
                  src="/next.svg"
                  alt="Logo"
                  width={32}
                  height={32}
                  className="h-8 w-auto"
                />
                <span className="ml-2 text-xl font-semibold">Image Gallery</span>
              </Link>
              <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">
                Dashboard
              </Link>
            </div>
            <div className="flex items-center">
              <Link
                href="/login"
                className="text-gray-600 hover:text-gray-900 px-3 py-2"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Next.js Image Optimization Gallery
            </h1>
            <p className="text-gray-600 max-w-3xl">
              This gallery demonstrates various features of the Next.js Image component including 
              responsive sizing, lazy loading, priority loading, and automatic format optimization.
            </p>
          </div>

          {/* Hero Image Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Hero Image with Priority Loading</h2>
            <div className="relative">
              <Image
                src="/hero-image.svg"
                alt="Hero Image"
                width={1200}
                height={600}
                className="rounded-lg shadow-lg w-full"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>
            <p className="text-sm text-gray-600 mt-2">
              This image uses <code className="bg-gray-100 px-1 rounded">priority</code> loading 
              and responsive <code className="bg-gray-100 px-1 rounded">sizes</code> attribute.
            </p>
          </div>

          {/* Image Grid */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Responsive Image Grid</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                    <p className="text-gray-600 text-sm">{image.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fixed Size Images */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Fixed Size Images</h2>
            <div className="flex flex-wrap gap-4">
              <div className="text-center">
                <Image
                  src="/next.svg"
                  alt="Next.js Logo Small"
                  width={64}
                  height={64}
                  className="mx-auto mb-2"
                />
                <p className="text-sm text-gray-600">64x64px</p>
              </div>
              <div className="text-center">
                <Image
                  src="/next.svg"
                  alt="Next.js Logo Medium"
                  width={96}
                  height={96}
                  className="mx-auto mb-2"
                />
                <p className="text-sm text-gray-600">96x96px</p>
              </div>
              <div className="text-center">
                <Image
                  src="/next.svg"
                  alt="Next.js Logo Large"
                  width={128}
                  height={128}
                  className="mx-auto mb-2"
                />
                <p className="text-sm text-gray-600">128x128px</p>
              </div>
            </div>
          </div>

          {/* Features Info */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">
              Next.js Image Optimization Features
            </h3>
            <ul className="space-y-2 text-blue-800">
              <li>• Automatic format optimization (WebP, AVIF when supported)</li>
              <li>• Responsive image sizing with the <code>sizes</code> attribute</li>
              <li>• Lazy loading by default (except when <code>priority</code> is set)</li>
              <li>• Automatic blur placeholder generation</li>
              <li>• Built-in performance optimizations</li>
              <li>• Support for both local and remote images</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}
