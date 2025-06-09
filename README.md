# Next.js Basic Features - Simple Application

A simple Next.js application demonstrating basic features including middleware authentication, custom error pages, API routes, and image optimization.

## 🚀 Features Implemented

### 1. **Basic Middleware for Authentication**
- Simple route protection using Next.js middleware
- Basic token validation
- Automatic redirects for unauthorized access

### 2. **Simple Layout and Error Handling**
- Basic layout with minimal metadata
- Custom error pages
- Simple loading states

### 3. **Basic API Routes**
- Simple authentication endpoints (`/api/login`, `/api/me`)
- Basic error handling
- Cookie-based authentication

### 4. **Basic Image Optimization**
- Next.js Image component usage
- Simple image optimization
- Basic responsive images

### 5. **Custom Error Pages**
- Simple 404 page (`not-found.tsx`)
- Basic error page (`error.tsx`)
- Simple loading component (`loading.tsx`)

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── login/route.ts          # Login endpoint
│   │   └── me/route.ts             # User info & logout
│   ├── dashboard/page.tsx          # Protected dashboard
│   ├── login/page.tsx              # Login form
│   ├── layout.tsx                  # Root layout
│   ├── page.tsx                    # Home page
│   ├── not-found.tsx               # Custom 404 page
│   ├── error.tsx                   # Global error page
│   └── loading.tsx                 # Loading component
├── helpers/
│   └── auth.ts                     # Simple auth utilities
└── middleware.ts                   # Basic route protection
```

## 🛠 Getting Started

### Prerequisites
- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd vipin-task7-nextjs-advance
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔐 Authentication Demo

### Demo Credentials
- **Email:** `user@example.com`
- **Password:** `password123`

### Testing Authentication Flow

1. **Visit Protected Route:** Try accessing `/dashboard` without logging in
2. **Middleware Redirect:** You'll be redirected to `/login`
3. **Login:** Use the demo credentials to log in
4. **Access Granted:** You'll be redirected to the dashboard

## 🖼️ Image Optimization

The dashboard shows a simple example of:
- Next.js Image component usage
- Basic image optimization
- Responsive image sizing

## 🛡️ Security Features

### Basic Middleware Protection
- Simple route-based authentication
- Token validation
- Automatic redirects

### Basic API Security
- HTTP-only cookies for token storage
- Simple input validation
- Basic error handling

## 🎨 UI/UX Features

### Error Handling
- **404 Page:** Simple not-found page
- **Error Page:** Basic error boundary
- **Loading States:** Simple loading indicators

### Simple Design
- Clean, minimal interface
- Tailwind CSS for styling
- Basic responsive design

## 🧪 Testing the Implementation

### 1. Middleware Testing
- Try accessing `/dashboard` without authentication
- Should redirect to login page

### 2. API Testing
- Use the login form to test authentication
- Check that cookies are set properly

### 3. Error Page Testing
- Visit `/non-existent-page` to see the 404 page

## 📚 Key Learning Points

This simplified implementation demonstrates:

1. **Basic Architecture:** Simple, clean code structure
2. **Essential Security:** Basic authentication and protection
3. **Core Features:** Middleware, API routes, image optimization
4. **Error Handling:** Custom error pages and boundaries
5. **Next.js Basics:** App Router, middleware, and API routes

## 🔧 Built With

- **Next.js 15.3.3** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React 19** - UI library

## 📝 Notes for 1-Year Experience Developer

This simplified implementation includes:
- **Clean, readable code**
- **Basic authentication (demo purposes only)**
- **Simple error handling**
- **Straightforward middleware**
- **Clear file structure**
- **Minimal complexity**

The code focuses on core concepts without advanced patterns, making it perfect for developers with 1 year of experience to understand and learn from.
