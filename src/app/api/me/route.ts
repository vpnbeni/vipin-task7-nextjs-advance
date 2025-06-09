import { NextRequest, NextResponse } from 'next/server'
import { verifyToken } from '@/helpers/auth'

export async function GET(request: NextRequest) {
  const token = request.cookies.get('auth-token')?.value

  if (!token) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
  }

  const user = verifyToken(token)
  if (!user) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
  }

  return NextResponse.json({ user })
}

export async function DELETE() {
  const response = NextResponse.json({ message: 'Logged out' })
  response.cookies.set('auth-token', '', { maxAge: 0 })
  return response
}