# Users-Edit-Project
👥 Users Management Web App
A simple yet powerful user management system built with Node.js, Express.js, and MongoDB. It allows creating, reading, updating, and deleting (CRUD) user profiles with secure password handling and session management.

🚀 Features
🏠 Home Page

View all existing users

Add a new user account

🔐 Authentication & Security

Passwords are securely hashed with bcrypt

Session management using cookie-parser

👤 User Profiles

View a list of all users

Edit user profile information

Delete a user profile

📦 MongoDB Storage

All user data is stored in MongoDB with Mongoose schemas

🛠️ Tech Stack
Layer	Technology
Backend	Node.js, Express.js
Database	MongoDB, Mongoose
Security	bcrypt, cookie-parser
Frontend	HTML, CSS, JavaScript (Vanilla or EJS)

📂 Project Structure
```
users-app/
├── models/
│   └── User.js
├── views/
│   ├── read.ejs
│   ├── edit.ejs
│   └── index.ejs
├── public/images/
│   └── user.jpg
├── app.js
├── .env
├── package.json
└── README.md
```
⚙️ Setup Instructions
1. Clone the Repository
```
git clone https://github.com/yourusername/users-app.git
cd users-app
```
2. Install Dependencies
```
npm install
```
3. Create a .env File
```
PORT=3000
MONGO_URI=mongodb://localhost:27017/usersdb
SECRET=your_cookie_secret
```
4. Run the App
```
node app.js
Visit http://localhost:3000 in your browser.
```
🧪 Core Functionalities
📄 List all users

➕ Add new users

🛠️ Edit user profiles

❌ Delete user accounts

🔒 Hashed passwords with bcrypt

🍪 Session support with cookie-parser

Screenshots

📄 License
This project is licensed under the MIT License.

