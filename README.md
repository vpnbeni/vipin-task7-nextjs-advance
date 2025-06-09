# Next.js Advanced Features - Production Application

A comprehensive Next.js application demonstrating advanced features including middleware authentication, custom error pages, API routes with middleware, and image optimization.

## 🚀 Features Implemented

### 1. **Middleware for Authentication**
- Route protection using Next.js middleware
- JWT-like token validation
- Automatic redirects for unauthorized access
- Security headers implementation

### 2. **Custom App and Document Components**
- Enhanced layout with proper metadata
- Custom error boundaries
- Global loading states
- SEO optimization

### 3. **API Routes with Middleware**
- RESTful authentication endpoints (`/api/login`, `/api/signup`, `/api/me`)
- Protected API routes with authentication middleware
- Rate limiting implementation
- CORS handling
- Proper error handling and status codes

### 4. **Image Optimization with next/image**
- Responsive image sizing
- Priority loading for above-the-fold images
- Lazy loading for performance
- Automatic format optimization (WebP, AVIF)
- Multiple sizing demonstrations

### 5. **Custom Error Pages**
- Custom 404 page (`not-found.tsx`)
- Global error page (`error.tsx`)
- Loading states (`loading.tsx`)
- User-friendly error messages

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── login/route.ts          # Login endpoint
│   │   ├── signup/route.ts         # Signup endpoint
│   │   ├── me/route.ts             # User info & logout
│   │   └── protected/route.ts      # Protected API demo
│   ├── dashboard/page.tsx          # Protected dashboard
│   ├── profile/page.tsx            # Protected profile page
│   ├── gallery/page.tsx            # Image optimization demo
│   ├── login/page.tsx              # Login form
│   ├── signup/page.tsx             # Signup form
│   ├── layout.tsx                  # Root layout
│   ├── page.tsx                    # Home page
│   ├── not-found.tsx               # Custom 404 page
│   ├── error.tsx                   # Global error page
│   └── loading.tsx                 # Loading component
├── helpers/
│   ├── auth.ts                     # Authentication utilities
│   └── api-middleware.ts           # API middleware functions
└── middleware.ts                   # Route protection middleware
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

### Alternative Credentials
- **Email:** `admin@example.com`
- **Password:** `admin123`

### Testing Authentication Flow

1. **Visit Protected Routes:** Try accessing `/dashboard` or `/profile` without logging in
2. **Middleware Redirect:** You'll be redirected to `/login` with a return URL
3. **Login:** Use the demo credentials to log in
4. **Access Granted:** You'll be redirected to the originally requested page
5. **API Testing:** Use the "Test Protected API" button on the dashboard

## 🖼️ Image Optimization Features

Visit `/gallery` to see demonstrations of:

- **Responsive Images:** Automatic sizing based on viewport
- **Priority Loading:** Critical images load first
- **Lazy Loading:** Off-screen images load when needed
- **Format Optimization:** Automatic WebP/AVIF delivery
- **Fixed Dimensions:** Consistent sizing for UI elements

## 🛡️ Security Features

### Middleware Protection
- Route-based authentication
- Token validation
- Security headers (X-Frame-Options, X-Content-Type-Options, etc.)
- Automatic redirects

### API Security
- HTTP-only cookies for token storage
- Rate limiting on API endpoints
- CORS configuration
- Input validation
- Error handling without information leakage

## 🎨 UI/UX Features

### Error Handling
- **404 Page:** Custom not-found page with navigation
- **500 Page:** Error boundary with retry functionality
- **Loading States:** Smooth loading indicators
- **Form Validation:** Client-side validation with error messages

### Responsive Design
- Mobile-first approach
- Tailwind CSS for styling
- Responsive navigation
- Optimized for all screen sizes

## 🧪 Testing the Implementation

### 1. Middleware Testing
```bash
# Try accessing protected routes without authentication
curl http://localhost:3000/dashboard
# Should redirect to login page
```

### 2. API Testing
```bash
# Test login endpoint
curl -X POST http://localhost:3000/api/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"password123"}'

# Test protected API (requires authentication)
curl http://localhost:3000/api/protected \
  -H "Cookie: auth-token=<your-token>"
```

### 3. Error Page Testing
- Visit `/non-existent-page` to see the 404 page
- Trigger an error in development to see the error boundary

## 📚 Key Learning Points

This implementation demonstrates:

1. **Production-Ready Architecture:** Proper separation of concerns
2. **Security Best Practices:** Authentication, authorization, and security headers
3. **Performance Optimization:** Image optimization and lazy loading
4. **User Experience:** Error handling and loading states
5. **Modern Next.js Features:** App Router, middleware, and API routes

## 🔧 Built With

- **Next.js 15.3.3** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React 19** - UI library

## 📝 Notes for 1-Year Experience Developer

This implementation includes:
- **Comments explaining complex logic**
- **Simple authentication (not production-grade crypto)**
- **Basic error handling patterns**
- **Straightforward middleware implementation**
- **Clear separation of concerns**
- **Practical examples over complex abstractions**

The code is written to be educational and demonstrates real-world patterns while remaining accessible to developers with 1 year of experience.
