import { NextRequest, NextResponse } from 'next/server'
import { validateUser, createToken } from '@/helpers/auth'

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    // Check credentials
    const user = validateUser(email, password)
    if (!user) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    // Create token and set cookie
    const token = createToken(user)
    const response = NextResponse.json({ message: 'Login successful', user })

    response.cookies.set('auth-token', token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 // 24 hours
    })

    return response
  } catch (error) {
    return NextResponse.json({ error: 'Login failed' }, { status: 500 })
  }
}