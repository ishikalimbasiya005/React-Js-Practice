# React CRUD with PHP Backend (Using Axios & FormData)

This is a simple React.js CRUD (Create, Read, Update, Delete) application that interacts with a PHP backend using REST APIs. It includes login functionality and handles data via `FormData` using `axios`.

## 📁 Features

- 🔐 Login Authentication
- ➕ Create new records
- 📄 Read user records
- 📝 Update existing records
- ❌ Delete records
- 🔃 Logout system using `localStorage`
- ✅ All API calls made using Axios

---

## 🛠️ Technologies Used

**Frontend:**
- React.js
- Axios
- React Router DOM
- useRef, useEffect, useState hooks

**Backend:**
- PHP scripts for insert, read, update, delete, login, and fetch single record
- MySQL (via `phpMyAdmin` or custom database)

---


---

## 🌐 APIs Used

| API URL                                      | Method | Description            |
|---------------------------------------------|--------|------------------------|
| `/insert-data.php`                          | POST   | Insert new user        |
| `/login-data.php`                           | POST   | Login verification     |
| `/get-data.php`                             | GET    | Get all users          |
| `/delete-data.php`                          | POST   | Delete a user by ID    |
| `/edit-data.php`                            | POST   | Update user by ID      |
| `/single-data.php`                          | POST   | Fetch single user info |

---

## 🚀 How to Run

### 🔧 Frontend Setup (React)
```bash
npm install
npm start
```

---

### ✅ Required Commands
```
npm install axios react-router-dom
npm init -f
npm i
npm i express
```


