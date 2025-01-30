## project setup
node -v
npm -v

--Navigate to your workspace and create a new project folder:
mkdir my-express-app
cd my-express-app

--Initialize a new Node.js project:
npm init -y

--Install Express.js and other essential dependencies:
npm install express dotenv cors morgan

--Modify package.json → add scripts:
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}

--Depending on your project, you may need:
npm install mongoose       # MongoDB ORM
npm install bcryptjs       # Password hashing
npm install jsonwebtoken   # JWT authentication
npm install express-validator # Validation middleware


my-express-app/
│── node_modules/
│── src/
│   ├── routes/
│   │   ├── userRoutes.js
│   │   ├── productRoutes.js
│   ├── controllers/
│   │   ├── userController.js
│   │   ├── productController.js
│   ├── models/
│   │   ├── userModel.js
│   │   ├── productModel.js
│   ├── config/
│   │   ├── db.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   ├── index.js
│── .env
│── .gitignore
│── package.json
│── README.md

MVC is a design pattern used to organize backend applications by separating concerns into three main components:

1️⃣ Model (M) – Handles data and business logic (interacts with the database).
2️⃣ View (V) – Represents the UI (for frontend apps; not used much in backend APIs).
3️⃣ Controller (C) – Manages requests, processes data via the Model, and returns responses.

How MVC Works in Node.js & Express
🔹 The client (frontend/postman/browser) sends a request →
🔹 The controller processes it →
🔹 The model interacts with the database →
🔹 The controller sends a response back to the client.

Project Structure (Example)
📂 backend-project/
├── 📂 controllers/ (Handles requests)
│ ├── userController.js
│ ├── postController.js
│
├── 📂 models/ (Database schema)
│ ├── userModel.js
│ ├── postModel.js
│
├── 📂 routes/ (API routes)
│ ├── userRoutes.js
│ ├── postRoutes.js
│
├── 📂 config/ (DB connection, env variables)
│ ├── db.js
│
├── 📂 middlewares/ (Auth, error handling)
│ ├── authMiddleware.js
│
├── server.js (Main entry file)

