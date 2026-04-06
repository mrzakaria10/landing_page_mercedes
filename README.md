# Mercedes-Benz Landing Page (2025)

A front-end landing page project inspired by Mercedes-Benz, with:
- Main showcase page: `mercedes-benz.html`
- SAV appointment page: `SAV.html`

This update includes responsive improvements for phone screens, JavaScript bug fixes, and UI enhancements.

## ✅ What was fixed

### 1) New top banner
Added a top header banner on main pages:
- **"Mercedes-Benz Version 2025"**

### 2) Blocking issues fixed
- Removed conflicting/duplicate JavaScript logic in `javascript/java_script.js`
- Removed invalid Swiper usage that had no matching HTML structure
- Rebuilt category switching (`showcategory`) to avoid runtime conflicts
- Made slider behavior safer and responsive
- Corrected broken SAV link from `/HTML/mercedes-benz.html` to `mercedes-benz.html`
- Fixed problematic absolute asset references in key HTML head resources

### 3) Mobile responsiveness improvements
Applied responsive updates in:
- `CSS/mercedes.css`
- `CSS/sav.css`

Improvements include:
- Better navigation behavior on narrow screens
- Responsive model cards and button layouts
- Better hero section scaling
- Responsive grids and footer layout
- Improved SAV form layout for tablets and phones

## 📁 Project structure

```text
landing_page_mercedes/
├─ mercedes-benz.html
├─ SAV.html
├─ titre.html
├─ TicketController.java
├─ CSS/
│  ├─ mercedes.css
│  └─ sav.css
├─ javascript/
│  ├─ java_script.js
│  └─ script_SAV.js
└─ photo/
```

## ▶️ Run locally

Use any static server. Example with Python launcher on Windows:

```bash
py -3 -m http.server 8000 --directory .
```

Then open:
- `http://localhost:8000/mercedes-benz.html`
- `http://localhost:8000/SAV.html`

## 🛠 Tech stack
- HTML5
- CSS3
- Vanilla JavaScript

## 👤 Repository
- Owner: `mrzakaria10`
- Repo: `landing_page_mercedes`
- Branch: `main`

## Notes
- This project is static front-end; no build step is required.
- `TicketController.java` appears to be unrelated to static page runtime.
