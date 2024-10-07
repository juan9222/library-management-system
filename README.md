# Library Management System API

This project is a Node.js API for managing a library system, which includes books, users, and transactions. It uses PostgreSQL as the database and follows Clean Architecture principles.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Seeding the Database](#seeding-the-database)
- [Endpoints](#endpoints)
  - [Get All Books](#get-all-books)
  - [Borrow a Book](#borrow-a-book)
  - [Return a Book](#return-a-book)
  - [Get User's Borrowed Books](#get-users-borrowed-books)
  - [Get User's Borrowing History](#get-users-borrowing-history)

## Prerequisites

- Docker and Docker Compose installed on your machine

### On macOS (using Homebrew):

Install Docker:

   ```bash
    brew install --cask docker
   ```

Start Docker Desktop: After installation, open Docker Desktop from your Applications folder.

Install Docker Compose (already included with Docker Desktop): Docker Compose is bundled with Docker Desktop, so no extra steps are required.

### On Windows (using Windows Subsystem for Linux - WSL):

Install WSL 2 (if not installed):

   ```bash
    wsl --install
   ```
Install Docker Desktop for Windows: Download Docker Desktop from Docker's official site and follow the installer instructions.

## Installation

### 1. Clone the repository:
   ```bash
   git clone https://github.com/juan9222/library-management-system.git
   cd library-management-system
   ```
### 2. Install dependencies:
   ```bash
    npm install
   ```
### 3. Add the env variables before running 
   ```bash
    mv .env.example .env
   ```
### 3.Running the Application

Build and start the Docker containers:
   ```bash
   docker-compose up --build
   ```
The API will be running at http://localhost:9000.

## Endpoints

### Get All Books
URL: /api/v1/books
Method: GET
Description: Returns all books in the library.
Response Example:

   ```json
    [
        {
            "id": 1,
            "title": "The Great Gatsby",
            "author": "F. Scott Fitzgerald",
            "status": "available",
            "createdAt": "2024-08-01T00:00:00.000Z",
            "updatedAt": "2024-08-01T00:00:00.000Z"
        },
        {
            "id": 2,
            "title": "1984",
            "author": "George Orwell",
            "status": "borrowed",
            "createdAt": "2024-08-01T00:00:00.000Z",
            "updatedAt": "2024-08-01T00:00:00.000Z"
        }
    ]
   ```
   
### Borrow a Book
URL: /api/v1/borrow
Method: POST
Description: Allows a user to borrow a book.
Request Example:

   ```json
    {
        "userId": 1,
        "bookId": 1
    }
   ```
   
Response Example:

   ```json
    {
        "message": "Book borrowed successfully"
    }
   ```

### Return a Book
URL: /api/v1/return
Method: POST
Description: Allows a user to return a borrowed book.
Request Example:

   ```json
    {
        "userId": 1,
        "bookId": 1
    }
   ```
Response Example:

   ```json
    {
        "message": "Book returned successfully"
    }
   ```
### Get User's Borrowed Books
URL: /api/v1/users/:id/borrowed-books
Method: GET
Description: Fetches a list of books currently borrowed by a specific user.
Response Example:

   ```json
    [
        {
            "id": 1,
            "title": "The Great Gatsby",
            "author": "F. Scott Fitzgerald",
            "borrowDate": "2024-09-01T00:00:00.000Z",
            "returnDate": null
        }
    ]
   ```
    
### Get User's Borrowing History
URL: /api/v1/users/:id/history
Method: GET
Description: Fetches the borrowing history for a specific user.
Response Example:

   ```json
    [
        {
            "id": 1,
            "title": "The Great Gatsby",
            "author": "F. Scott Fitzgerald",
            "borrowDate": "2024-09-01T00:00:00.000Z",
            "returnDate": "2024-09-10T00:00:00.000Z"
        }
    ]
   ```