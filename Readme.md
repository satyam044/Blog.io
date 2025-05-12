# Blog.io - Blogging Platform Backend
Blog.io is a powerful backend service that allows users to read, write, and comment on blog posts.
All user activity is tracked and managed using MongoDB.

## ✨ Features
User authentication using JWT and cookies.

Create blog posts.

Comment on any user's blog post.

Upload and manage blog images using Multer.

Track all activities and store them in MongoDB.

Server-side rendering with EJS templates.

Environment variable management with dotenv.

## 🚀 Tech Stack
Node.js

Express.js

MongoDB with Mongoose

EJS (for views)

JWT (authentication)

Multer (for file uploads)

Cookie-Parser (for session management)

Dotenv (for environment configuration)

## 📦 Dependencies
"dependencies": {
  "cookie-parser": "^1.4.7",
  "dotenv": "^16.5.0",
  "ejs": "^3.1.10",
  "express": "^5.1.0",
  "jsonwebtoken": "^9.0.2",
  "mongoose": "^8.14.1",
  "multer": "^1.4.5-lts.2"
},
"devDependencies": {
  "nodemon": "^3.1.10"
}

## 🛠 Main Functionalities
Authentication

Sign up / Log in with JWT-based authentication.

Blog Management

Create, read, update, and delete blog posts.

Upload images with posts.

Comments

Add comments to any blog post.

Track who commented and when.

Tracking

All blog posts, user actions, and comments are logged in MongoDB.