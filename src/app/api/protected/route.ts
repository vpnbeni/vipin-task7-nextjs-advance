import { NextRequest, NextResponse } from 'next/server'
import { withAuth, withRateLimit, compose } from '@/helpers/api-middleware'

const handler = async (request: NextRequest, user: any) => {
  try {
    return NextResponse.json({
      message: 'This is a protected API route',
      user: {
        id: user.id,
        email: user.email,
        name: user.name
      },
      timestamp: new Date().toISOString(),
      method: request.method
    })
  } catch (error) {
    console.error('Protected route error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
export const GET = compose(
  withRateLimit,
  withAuth
)(handler)

export const POST = compose(
  withRateLimit,
  withAuth
)(handler)
