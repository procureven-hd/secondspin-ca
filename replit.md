# Second Spin Thrift Website

## Overview

This is a full-stack web application for second spin thrift, a thrift store in Trenton, Ontario. It's a comprehensive landing page announcing the store's upcoming grand opening on September 6th, 2025. The application features sections for about, pricing comparisons, donations information, social media integration, and email notifications. Built with a React frontend and Express backend, using a PostgreSQL database with Drizzle ORM.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Forms**: React Hook Form with Zod validation (via @hookform/resolvers)

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Database ORM**: Drizzle ORM
- **Session Management**: Express sessions with PostgreSQL session store (connect-pg-simple)
- **Development**: tsx for TypeScript execution in development

### Key Design Decisions
- **Monorepo Structure**: Client, server, and shared code in a single repository
- **Type Safety**: Full TypeScript coverage across frontend, backend, and shared schemas
- **Component-First UI**: Radix UI provides accessible, unstyled components that are styled with Tailwind
- **Serverless-Ready**: Uses @neondatabase/serverless for PostgreSQL connections

## Key Components

### Directory Structure
```
/
├── client/               # React frontend
│   ├── src/
│   │   ├── components/ui/  # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   └── lib/           # Utility functions
├── server/               # Express backend
│   ├── routes.ts         # API route definitions
│   ├── storage.ts        # Database abstraction layer
│   └── vite.ts           # Vite integration for development
├── shared/               # Shared code between client and server
│   └── schema.ts         # Database schema and validation
└── migrations/           # Database migrations
```

### Database Schema
- **Users Table**: Basic user authentication (id, username, password)
- **Schema Definition**: Uses Drizzle ORM with PostgreSQL dialect
- **Validation**: Zod schemas for runtime validation derived from database schema

### UI System
- **Design System**: Custom Tailwind configuration with brand colors
- **Component Library**: shadcn/ui components built on Radix UI
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Accessibility**: Radix UI ensures WCAG compliance

## Data Flow

### Frontend to Backend
1. **API Requests**: Custom fetch wrapper with error handling and credentials
2. **Query Management**: TanStack Query handles caching, refetching, and state management
3. **Type Safety**: Shared schemas ensure consistent data structures

### Database Operations
1. **ORM Layer**: Drizzle ORM provides type-safe database operations
2. **Storage Interface**: Abstract storage layer allows for different implementations
3. **Migration System**: Drizzle Kit handles database schema migrations

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL driver for serverless environments
- **@radix-ui/***: Accessible UI component primitives
- **@tanstack/react-query**: Server state management
- **drizzle-orm**: Type-safe database ORM
- **express**: Web framework for Node.js
- **react**: UI library
- **tailwindcss**: Utility-first CSS framework
- **typescript**: Static type checking
- **vite**: Build tool and development server
- **wouter**: Lightweight routing
- **zod**: Schema validation

### Development Dependencies
- **@replit/vite-plugin-runtime-error-modal**: Error overlay for development
- **@replit/vite-plugin-cartographer**: Replit integration
- **tsx**: TypeScript execution for development

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds the React app to `dist/public`
2. **Backend Build**: esbuild bundles the Express server to `dist/index.js`
3. **Database**: Drizzle Kit pushes schema changes to PostgreSQL

### Environment Configuration
- **Development**: Uses tsx for TypeScript execution and Vite dev server
- **Production**: Compiled JavaScript with optimized static assets
- **Database**: PostgreSQL with connection via DATABASE_URL environment variable

### Hosting Requirements
- **Node.js Runtime**: ES modules support required
- **PostgreSQL Database**: Compatible with Neon or similar serverless PostgreSQL
- **Static File Serving**: Express serves built React app in production

### Key Features
- **Single Page Design**: Modern, responsive landing page with smooth scrolling navigation
- **Launch Announcement**: Grand opening details for September 6th, 2025 with 30% opening discount
- **Pricing Comparison**: Highlights competitive pricing vs national thrift chains
- **Donations Section**: Comprehensive guide for accepted/rejected donation items with sustainability messaging
- **Social Media Integration**: Authentic links to Facebook, Instagram, TikTok, and X
- **Email Notifications**: Functional email signup for launch updates
- **Local Focus**: Emphasizes community-based approach in Trenton, Ontario
- **Hot Module Replacement**: Vite provides instant feedback during development
- **Type Safety**: Full TypeScript coverage prevents runtime errors
- **Modern Stack**: Uses latest versions of React, Node.js, and PostgreSQL
- **Responsive Design**: Works on desktop and mobile devices
- **Accessibility**: WCAG-compliant UI components

### Recent Changes (January 31, 2025)
- Added comprehensive donations section with items accepted/rejected
- Integrated sustainability messaging about reducing waste and supporting circular economy
- Updated navigation to include "Donations" section in header and footer
- Organized donation categories with clear visual icons and detailed item lists
- Added call-to-action for donation drop-off after store opening