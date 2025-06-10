import { NextRequest, NextResponse } from 'next/server'
import { createToken } from '@/helpers/auth'

export async function POST(request: NextRequest) {
  try {
    const { email, password, name } = await request.json()

    if (!email || !password || !name) {
      return NextResponse.json(
        { error: 'All fields required' },
        { status: 400 }
      )
    }

    const newUser = {
      id: Date.now().toString(),
      email,
      name
    }

    const token = createToken(newUser)
    const response = NextResponse.json({ message: 'Signup successful', user: newUser })

    response.cookies.set('auth-token', token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60
    })

    return response
  } catch (error) {
    return NextResponse.json({ error: 'Signup failed' }, { status: 500 })
  }
}
