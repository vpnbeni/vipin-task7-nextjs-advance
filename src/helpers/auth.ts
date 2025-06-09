// Simple auth functions for demo
export interface User {
  id: string
  email: string
  name: string
}

// Create simple token
export function createToken(user: User): string {
  return btoa(JSON.stringify(user))
}

// Verify simple token
export function verifyToken(token: string): User | null {
  try {
    return JSON.parse(atob(token))
  } catch {
    return null
  }
}

// Simple user check
export function validateUser(email: string, password: string): User | null {
  if (email === 'user@example.com' && password === 'password123') {
    return { id: '1', email: 'user@example.com', name: 'John Doe' }
  }
  return null
}
