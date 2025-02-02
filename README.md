# User Management App (MongoDB + Node.js + Express)

This is a simple user management web application that allows you to Create, Read, Update, and Delete (CRUD) users. It also includes search, sorting, and pagination features.

## Features:

- MongoDB Integration – Stores user data in MongoDB
- CRUD Operations – Add, view, edit, and delete users
- Search – Find users by name
- Sorting & Filtering – Sort users by name or age
- Pagination – Navigate large datasets efficiently
- Styled UI – Responsive & clean design with a table for displaying users

## Installation & Setup

### Prerequisites:

Install Node.js from https://nodejs.org/en/download/
Install MongoDB (Compass or Atlas) from https://www.mongodb.com/try/download/compass

Clone the repository: `git clone https://github.com/neroframe/mongo-crud-app.git`
then `cd mongo-crud-app`

Install dependencies: `npm install`

### Set up environment variables:

Create a .env file in the project root. In this file Add the following variable: `MONGO_URI=mongodb://localhost:27017/usersDB`

Start the application: `node server.js`
The server will be running at http://localhost:5000/.
