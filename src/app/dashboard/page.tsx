'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import axios from 'axios'

interface User {
  id: string
  email: string
  name: string
}

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()

  useEffect(() => {
    fetchUser()
  }, [])

  const fetchUser = async () => {
    try {
      const { data } = await axios.get('/api/me')
      setUser(data.user)
    } catch {
      router.push('/login')
    }
  }

  const handleLogout = async () => {
    await axios.delete('/api/me')
    router.push('/login')
  }

  if (!user) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow p-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span>Welcome, {user.name}</span>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">Protected Dashboard</h2>
          <p className="text-gray-600 mb-4">
            This page is protected by middleware. Only authenticated users can access it.
          </p>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Image Optimization</h3>
            <Image
              src="/hero-image.svg"
              alt="Demo Image"
              width={400}
              height={200}
              className="rounded-lg shadow"
            />
          </div>

          <div className="border-t pt-4">
            <h3 className="text-lg font-semibold mb-2">User Information</h3>
            <div className="space-y-1">
              <p><strong>ID:</strong> {user.id}</p>
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
