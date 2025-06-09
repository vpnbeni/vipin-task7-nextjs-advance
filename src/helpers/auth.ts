// Simple JWT-like token functions (for demo purposes)
// In production, use a proper JWT library like jsonwebtoken

export interface User {
  id: string
  email: string
  name: string
}

// Simple token encoding (not secure, for demo only)
export function createToken(user: User): string {
  const payload = {
    user,
    exp: Date.now() + (24 * 60 * 60 * 1000) // 24 hours
  }
  return btoa(JSON.stringify(payload))
}

// Simple token decoding
export function verifyToken(token: string): User | null {
  try {
    const payload = JSON.parse(atob(token))
    
    // Check if token is expired
    if (payload.exp < Date.now()) {
      return null
    }
    
    return payload.user
  } catch (error) {
    return null
  }
}

// Mock user database (in production, use a real database)
const users: User[] = [
  { id: '1', email: 'user@example.com', name: 'John Doe' },
  { id: '2', email: 'admin@example.com', name: 'Admin User' }
]

export function findUserByEmail(email: string): User | undefined {
  return users.find(user => user.email === email)
}

export function validatePassword(email: string, password: string): boolean {
  // Simple validation (in production, hash passwords properly)
  const validCredentials = [
    { email: 'user@example.com', password: 'password123' },
    { email: 'admin@example.com', password: 'admin123' }
  ]
  
  return validCredentials.some(cred => 
    cred.email === email && cred.password === password
  )
}
