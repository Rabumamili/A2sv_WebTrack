# Job Listing Platform with Authentication

Welcome to the Job Listing Platform! This application showcases job listings and integrates user authentication with NextAuth.js, state management with Redux, and data fetching with RTK Query. Users can sign in with their Google accounts, explore job opportunities, and manage their session seamlessly.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [Usage](#usage)
- [Authentication Flow](#authentication-flow)
- [Job Listing Functionality](#job-listing-functionality)
- [Directory Structure](#directory-structure)

## Features

- Authentication with Google via NextAuth.js
- Comprehensive job listing with searching capabilities
- Secure routes requiring user authentication
- State management through Redux and RTK Query
- Responsive and dynamic UI

## Technologies

- **Next.js**: Framework for server-rendered React applications.
- **React**: Library for building user interfaces.
- **NextAuth.js**: Authentication library tailored for Next.js applications.
- **Redux Toolkit**: Tool for state management.
- **RTK Query**: Tool for data fetching and caching, integrated with Redux.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Jest**: Framework for unit testing.
- **Cypress**: End-to-end testing framework.

## Setup

### Prerequisites

- Node.js (version 14.x or higher)
- npm or yarn
- Google Cloud Console account to configure OAuth credentials

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Rabumamili/auth.git
   cd auth/FinalTask
3. Create a `.env.local` file in the root directory and add your environment variables:

   ```bash
   NEXTAUTH_URL=http://localhost:3000
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   NEXTAUTH_SECRET=your_secret
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Usage

### Authentication

- Users can authenticate using their Google accounts.
- The application verifies whether a user is logged in and will redirect to the login page if authentication is required.
- Session details are managed through `useSession` from `next-auth/react`.

### Job Listing

- Job information is retrieved via RTK Query's `useGetJobsQuery`.
- Jobs can be organized either alphabetically or by relevance.
- To avoid unnecessary re-renders, job data is optimized with `useMemo`.

### Navigation

- The `Nav` component dynamically updates to show appropriate links and a login/logout button based on the current user's authentication status.

## Authentication Flow

1. **Sign In**: Users are directed to sign in with their Google account using `NextAuth.js`.
2. **Session Management**: Once logged in, session data is handled by NextAuth and is accessible across the application.
3. **Protected Routes**: Pages that require authentication will redirect unauthenticated users to the login page.
4. **Sign Out**: Users have the option to log out, which ends their session and redirects them to the homepage or login page.

## Job Listing Functionality

- **Job Data**: Retrieved from a backend API using RTK Query.
- **Searching**: Job search functionality is handled via RTK Query.

- **UI Components**: Job listings are presented using the `JobCard` component.
## schreenshoots
