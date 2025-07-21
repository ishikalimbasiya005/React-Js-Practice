# 🧠 React JS Practice

This repository contains my React learning and practice code.  
Each component or concept is saved in a separate file or folder to keep things organized and easy to reuse.

---

 ### 📁 Project Structure
 ```
react-js-practice/
├── node_module
├── public/
│ └── index.html
├── src/
│ └── framework/
│ ├── Mui.jsx
│ ├── AntDesign.jsx
│ └── ...more files..
│ ├── index.js
├── package-lock.json
├── package.json
├── README.md
```

---

## ⚙️ How to Run This Code

Anyone can run this project by following these simple steps:

### ✅ Step 1: Install React App (Base Project)

Open terminal or CMD and run:

```bash
npx create-react-app react-js-practice

```
This will automatically create the following folders and files :
```
react-js-practice/
├── node_modules/         # All required dependencies
├── package.json          # Project configuration and dependencies
├── package-lock.json     # Exact version lock for dependencies
├── public/               # Contains index.html and other static files
└── src/                  # Your React source code (App.js, index.js, etc.)
```


### ✅ Step 2: Add My Code

After creating the base React app, follow these steps to use the practice files from this repository:

1. **Clone or download** this GitHub repository.

2. **Copy all folders** (like `framework/`, `api/`, etc.) into your local React app's `src/` folder.



### ✅step 3: index.js (Inside `src/` Folder)

This is the main entry point of your React app. It connects your root React component (e.g., `<App />`, `<Mui />`, etc.) to the actual HTML DOM.

Here’s the example code:

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import Mui from './FrameWork/Mui.jsx'; // Import your component (e.g., from framework folder)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Mui />
  </>
);
```


### ✅ Step 4: Run the React App

Now start the React development server by running:

```bash
npm start
```
This will open your app automatically in the browser at:
``` http://localhost:3000 ```

---


## 🗂 Component-Specific Instructions

Each file inside `src/framework/` (like `Mui.jsx`, `ButtonDemo.jsx`, etc.) is a separate learning file.  
Some components may include their own `README.md` files explaining how they work in detail.

---
## 🧾 Requirements

- ✅ Node.js installed  
- ✅ Internet connection to install packages  
- ✅ Code editor (like VS Code)

---

## 📌 Goal

This project is created for learning React step-by-step.  
Each folder/file is written to practice different topics and frameworks.

## 📬 Connect with Me

If you find this useful or want to collaborate, feel free to connect:

- 🌐 GitHub: https://github.com/ishikalimbasiya005
- 💼 LinkedIn: www.linkedin.com/in/ishikalimbasiya

---

Thanks for visiting my repository! 😊  
Keep learning and styling! 💻🎨




