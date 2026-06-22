# Todo App with Authentication

A simple full-stack Todo application built using **HTML, JavaScript, Express.js, JWT, and Local Storage**.

## Features

* User Sign Up
* User Login
* JWT Token Generation
* Logout Functionality
* Create Todos
* Update Existing Todos
* Delete Todos
* Local Storage Persistence
* Dynamic DOM Manipulation
* Express.js Backend

## Tech Stack

### Frontend

* HTML
* JavaScript
* Axios

### Backend

* Node.js
* Express.js
* JSON Web Tokens (JWT)

## Project Structure

```
├── backend.js
├── index.html
├── login.html
├── signin.html
├── record.html
└── README.md
```

## Installation

1. Clone the repository

```bash
git clone <repository-url>
```

2. Install dependencies

```bash
npm install express jsonwebtoken
```

3. Start the server

```bash
node backend.js
```

4. Open your browser

```
http://localhost:4000
```

## How It Works

1. New users can create an account through the Sign Up page.
2. Existing users can log in using their credentials.
3. After successful authentication, a JWT token is generated and stored in Local Storage.
4. Users can add, update, and delete todos.
5. Todos are persisted using the browser's Local Storage.

## Learning Objectives

This project was built to practice:

* REST API development with Express.js
* User Authentication using JWT
* Client-Server Communication
* DOM Manipulation
* Local Storage Usage
* CRUD Operations
* Full-Stack JavaScript Development

## Future Improvements

* Password Hashing using bcrypt
* MongoDB Database Integration
* Protected Routes using JWT Verification Middleware
* User-specific Todo Storage
* Better UI/UX Design
* Deployment on Render/Vercel

## Author

Kartik Joshi
