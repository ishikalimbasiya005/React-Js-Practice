# React Redux CRUD (MockAPI)

A simple React + Redux application that performs **CRUD** (Create and Read) operations using [MockAPI](https://mockapi.io).

## 🧩 Features

- Insert user data (name, email, password)
- Fetch and display all user data
- State management with Redux and Redux Thunk
- API integration using Axios and Fetch


## 🚀 How to Run

 **Clone the repo**
   ```bash
   git clone https://github.com/your-username/react-redux-crud.git
   cd react-redux-crud
```

## 🔗 API Used
All operations are done via:
```https://6884aa93745306380a38fe61.mockapi.io/myapi/API/users```

---

## 🔧 Required Packages
bash
```npm install axios redux react-redux redux-thunk```

---

## 🧠 Tech Stack

- ⚛️ React  
- 📦 Redux  
- 🔁 Redux Thunk  
- 📡 Axios  
- 🌐 Fetch API  
- 🧪 MockAPI.io

---

  ## ✨ Features

- 📝 Insert new user data (name, email, password)
- 📄 Fetch and display user data in a table
- 🚦 Loading and error handling with Redux
- 🔍 State management using Redux + Redux Thunk middleware

---

## 🧠 Notes

- On submit, the form posts the user data to MockAPI and updates the Redux state.
- Redux DevTools Extension can help trace actions and state changes easily.
- Axios is used for `GET` requests, and the native `fetch` is used for `POST`.
