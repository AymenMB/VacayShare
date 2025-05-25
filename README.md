# VacayShare

![VacayShare Dashboard](dashboard.png)

## Overview

VacayShare is a modern social media platform designed for travelers to share their vacation experiences. Built with Next.js 15 and leveraging the latest React features, VacayShare provides a responsive, interactive platform where users can share stories, photos, and connect with fellow travelers.

## Features

- **User Authentication**: Secure user authentication powered by Clerk
- **Feed System**: Real-time feed showing posts from users you follow
- **Story Sharing**: 24-hour expiring stories for quick vacation updates
- **Post Management**: Create, view, and delete posts with image uploads
- **Social Interactions**: Like posts, comment on content, and follow other users
- **Profile Management**: Customize your profile with personal details and cover images
- **Friend Requests**: Send, accept, or decline follow/friend requests
- **Responsive Design**: Fully responsive UI for mobile, tablet, and desktop devices
- **Media Gallery**: View collections of media posts from users
- **Blocking System**: Block unwanted users for privacy

## Technology Stack

### Frontend

- **Next.js 15**: With experimental React compiler and Progressive Rendering (PPR)
- **React 19**: Using latest React features including Server Components
- **TailwindCSS**: For responsive and utility-first styling
- **TypeScript**: For type safety and better developer experience

### Backend

- **Next.js API Routes**: Serverless functions for API endpoints
- **Prisma**: ORM for database management
- **MySQL**: Relational database for data persistence
- **Clerk**: User authentication and management
- **Cloudinary**: Image upload and management

## Project Structure

```
├── public/            # Static assets
├── src/
│   ├── app/           # Next.js app directory
│   │   ├── api/       # API routes
│   │   ├── profile/   # Profile pages
│   │   ├── settings/  # Settings pages
│   │   └── page.tsx   # Homepage
│   ├── components/    # React components
│   │   ├── feed/      # Feed related components
│   │   ├── leftMenu/  # Left sidebar components
│   │   └── rightMenu/ # Right sidebar components
│   ├── lib/           # Utility functions and server actions
│   └── middleware.ts  # Next.js middleware
└── prisma/            # Prisma schema and migrations
```

## Core Features Explained

### Feed System

The feed displays posts from the current user and users they follow, ordered by creation date. It supports text and image posts with interactive elements like likes and comments.

### Story Feature

Users can create stories that expire after 24 hours, providing a way to share quick updates that don't remain permanent.

### Social Interactions

- **Following System**: Users can follow others to see their content in their feed
- **Privacy Controls**: Block users to prevent them from seeing your content
- **Friend Requests**: Send and receive follow requests with notifications

### Profile Customization

Users can customize their profiles with:

- Profile pictures
- Cover images
- Personal information (name, location, work, school)
- Bio/description
- Website links

## Getting Started

### Prerequisites

- Node.js 18+
- MySQL database
- Clerk account for authentication
- Cloudinary account for image uploads

### Installation

1. Clone the repository

```bash
git clone https://github.com/AymenMB/VacayShare.git
cd VacayShare
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables
   Create a `.env` file in the root directory with the following variables:

```
# Database
DATABASE_URL="mysql://username:password@localhost:3306/vacayshare"

# Clerk Auth
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_*****
CLERK_SECRET_KEY=sk_*****
CLERK_WEBHOOK_SECRET=whsec_*****

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
```

4. Set up the database

```bash
npx prisma db push
```

5. Run the development server

```bash
npm run dev
```

## Deployment

This application can be deployed to services like Vercel or Netlify for frontend, with a separate database host like PlanetScale or Railway.

## Future Features

- Direct messaging system
- Location tagging for posts
- Trending hashtags
- Enhanced media support (videos, albums)
- Advanced search capabilities
- Travel recommendations based on friends' posts

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspiration from modern social media platforms
- Built with Next.js and React
- Authentication by Clerk
- Image hosting by Cloudinary
