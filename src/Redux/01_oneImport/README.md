# 📝 Redux Greeting Message App

A simple React + Redux example that displays a greeting message and changes it when a button is clicked.

---

## 🚀 How to Run

### 1. Install Dependencies

```bash
npm install redux react-redux
```

### 2. Start the App
```npm start```

---

## 🧠 Functionality

- `Mystore.js` uses Redux's `useSelector()` to read the greeting message from the global state.
- A button click triggers the `dispatch()` function with the `msg` action.
- The Redux reducer listens for the `'msg'` action type and updates the message.

### 🔽 Message Flow:
- **Default Message:** `Hi Guys`
- **After Click:** `Hello World`

## 🛠️ Technologies Used

- **React** – For building the UI components.
- **Redux** – For managing the application state.
- **React-Redux** – For connecting Redux with React components using hooks like `useSelector` and `useDispatch`.
