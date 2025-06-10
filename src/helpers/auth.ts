export interface User {
  id: string
  email: string
  name: string
}

export function createToken(user: User): string {
  return btoa(JSON.stringify(user))
}

export function verifyToken(token: string): User | null {
  try {
    return JSON.parse(atob(token))
  } catch {
    return null
  }
}

export function validateUser(email: string, password: string): User | null {
  if (email === 'user@example.com' && password === 'password123') {
    return { id: '1', email: 'user@example.com', name: 'John Doe' }
  }
  return null
}
