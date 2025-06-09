'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

interface User {
  id: string
  email: string
  name: string
}

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    fetchUser()
  }, [])

  const fetchUser = async () => {
    try {
      const response = await fetch('/api/me')
      if (response.ok) {
        const data = await response.json()
        setUser(data.user)
      } else {
        router.push('/login')
      }
    } catch (error) {
      console.error('Error fetching user:', error)
      router.push('/login')
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    try {
      await fetch('/api/me', { method: 'DELETE' })
      router.push('/login')
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Image
                src="/next.svg"
                alt="Logo"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              <span className="ml-2 text-xl font-semibold">Dashboard</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Welcome, {user?.name}</span>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              Protected Dashboard
            </h1>
            
            {/* Hero Image Demo */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Image Optimization Demo</h2>
              <div className="relative">
                <Image
                  src="/hero-image.svg"
                  alt="Hero Image"
                  width={800}
                  height={400}
                  className="rounded-lg shadow-lg"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <p className="text-gray-600 mt-2">
                This image is optimized using Next.js Image component with responsive sizing.
              </p>
            </div>

            {/* User Info */}
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">User Information</h2>
              <div className="space-y-2">
                <p><strong>ID:</strong> {user?.id}</p>
                <p><strong>Name:</strong> {user?.name}</p>
                <p><strong>Email:</strong> {user?.email}</p>
              </div>
            </div>

            {/* API Testing */}
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Protected API Route Test</h2>
              <button
                onClick={async () => {
                  try {
                    const response = await fetch('/api/protected')
                    const data = await response.json()
                    alert(JSON.stringify(data, null, 2))
                  } catch (error) {
                    alert('Error: ' + error)
                  }
                }}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mr-4"
              >
                Test Protected API
              </button>
              <p className="text-gray-600 mt-2">
                Click to test the protected API route that requires authentication.
              </p>
            </div>

            {/* Features Demo */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold mb-2">Middleware Protection</h3>
                <p className="text-gray-600">
                  This page is protected by Next.js middleware. Try accessing it without authentication.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold mb-2">API Routes</h3>
                <p className="text-gray-600">
                  Authentication is handled through custom API routes with proper error handling.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold mb-2">Image Optimization</h3>
                <p className="text-gray-600">
                  Images are automatically optimized and served in modern formats.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
