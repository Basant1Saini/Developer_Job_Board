# Developer Job Board

A modern job board application with role-based access control for Employers and Candidates, featuring job posting and application tracking capabilities.

## Tech Stack

- **MongoDB** - Database for storing user profiles, job postings, and applications
- **Express.js** - Backend framework for RESTful APIs
- **React** - Frontend library for user interface
- **Vite** - Build tool for fast development and optimized production builds
- **Node.js** - Runtime environment

*Note: This project uses modern versions of React, Express, and Mongoose, avoiding deprecated libraries and outdated methods for enhanced stability and security.*

## Project Structure

```
Developer_Job_Board/
├── client/          # React frontend (Vite)
├── server/          # Express.js backend
├── shared/          # Shared utilities and types
└── README.md
```

## Features

### User Roles
- **Candidates**: Browse jobs, apply, track applications
- **Employers**: Post jobs, manage applications, view candidate profiles

### Core Functionality
- User authentication and authorization
- Job posting and management
- Application submission and tracking
- Profile management
- Search and filtering

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Jobs
- `GET /api/jobs` - Get all jobs
- `POST /api/jobs` - Create job (Employer only)
- `GET /api/jobs/:id` - Get job details
- `PUT /api/jobs/:id` - Update job (Employer only)
- `DELETE /api/jobs/:id` - Delete job (Employer only)

### Applications
- `POST /api/applications` - Submit application (Candidate only)
- `GET /api/applications` - Get user applications
- `PUT /api/applications/:id` - Update application status (Employer only)

### Users
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile

## Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies for both client and server
3. Set up environment variables
4. Start MongoDB
5. Run development servers

### Environment Variables

**Server (.env)**
```
MONGODB_URI=mongodb://localhost:27017/job_board
JWT_SECRET=your_jwt_secret
PORT=5000
```

**Client (.env)**
```
VITE_API_URL=http://localhost:5000/api
```
