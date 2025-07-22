# React Component – CSS & Icons Example

This project shows how to use:

- ✅ Inline CSS
- ✅ Internal CSS (JS object)
- ✅ External CSS (linked in `public/index.html`)
- ✅ Icons using `react-icons`

---

## 📁 Structure
```
react-js-practice/
│
├── public/
│ └── CSS-Style/
│ └── style.css # External CSS file (linked via index.html)
│
├── src/
│ ├── Home.jsx # Main component demonstrating all CSS types and icons
│ └── index.js
```


---

## 🚀 Setup Instructions

1. **Install dependencies** (especially `react-icons`):
   ```bash
   npm install react-icons

2. **Link External CSS** (if using public folder):
Add this line inside public/index.html:
```<link rel="stylesheet" href="CSS-Style/style.css" />```

---

## 📌 Notes

- You can choose from **1000+ icons** from various libraries using [react-icons](https://react-icons.github.io/react-icons/).
  - Popular icon packs include: Font Awesome, Material Icons, Bootstrap Icons, Remix Icons, and more.

- For **modular or scoped CSS**, consider:
  - **CSS Modules** – for component-specific styles (`Component.module.css`)
  - **Tailwind CSS** – for utility-first and responsive styling
## 🛠 Dependencies

The following packages are required:

```json
{
  "react": "^18.2.0",
  "react-icons": "^4.12.0"
}
