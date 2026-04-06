# Mercedes-Benz Landing Page (2025)

A modern, fully responsive front-end landing page project inspired by Mercedes-Benz, featuring:
- Main showcase page: `mercedes-benz.html`
- SAV (Service After Sales) appointment page: `SAV.html`

This project includes comprehensive mobile responsiveness for all screen sizes (320px - 1920px+).

## ✨ Features

- **Fully Responsive Design**: Optimized for all devices from small phones (320px) to large desktops
- **Mobile-First Navigation**: Collapsible menu with smooth dropdown functionality
- **Interactive Car Listings**: Dynamic category switching with hover effects
- **Hero Sections**: Beautiful full-width hero images with responsive text overlays
- **Modern UI**: Clean design with smooth transitions and animations
- **Touch-Optimized**: Enhanced touch targets and mobile-friendly interactions

## 📱 Responsive Breakpoints

- **320px**: Extra small phones
- **375px**: Small phones (iPhone SE, etc.)
- **425px**: Medium phones
- **600px**: Large phones / Small tablets
- **768px**: Tablets / iPad
- **1024px**: Tablets landscape / Small laptops
- **1440px+**: Desktop / Large screens

## 📁 Project Structure

```text
landing_page_mercedes/
├─ mercedes-benz.html          # Main landing page
├─ SAV.html                     # Service appointment page
├─ titre.html                   # Additional page
├─ CSS/
│  ├─ mercedes.css             # Main stylesheet with responsive design
│  └─ sav.css                  # SAV page styles
├─ javascript/
│  ├─ java_script.js           # Main page interactivity
│  └─ script_SAV.js            # SAV form handling
├─ photo/                       # Images and assets
└─ vercel.json                 # Vercel deployment config
```

## 🚀 Deployment

This project is deployed on **Vercel** for optimal performance and global CDN delivery.

### Deploy to Vercel

1. Push your changes to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push to main branch

Or use Vercel CLI:
```bash
npm i -g vercel
vercel --prod
```

## ▶️ Run Locally

Use any static server. Examples:

**Using Python:**
```bash
python -m http.server 8000
# or on Windows
py -3 -m http.server 8000
```

**Using Node.js (http-server):**
```bash
npx http-server -p 8000
```

**Using VS Code Live Server:**
- Install Live Server extension
- Right-click on `mercedes-benz.html` → "Open with Live Server"

Then open:
- Main page: `http://localhost:8000/mercedes-benz.html`
- SAV page: `http://localhost:8000/SAV.html`

## 🛠 Tech Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox, Grid, and media queries
- **Vanilla JavaScript**: No framework dependencies
- **Responsive Design**: Mobile-first approach

## 🎨 Recent Updates

### Mobile Responsiveness (Latest)
- ✅ Added comprehensive media queries for all mobile breakpoints
- ✅ Improved mobile navigation with collapsible menu
- ✅ Fixed hero sections scaling on small screens
- ✅ Optimized grid layouts to stack on mobile
- ✅ Enhanced typography and spacing for readability
- ✅ Made all car listing cards fully responsive
- ✅ Optimized footer layout for mobile devices
- ✅ Fixed CSS errors and improved code quality
- ✅ Added touch-friendly interactions

### Bug Fixes
- Fixed CSS padding values missing units
- Corrected "lift" typo to "left" property
- Removed duplicate WhatsApp button styles
- Enhanced z-index for proper layering

## 👤 Repository

- Owner: `mrzakaria10`
- Repo: `landing_page_mercedes`
- Branch: `main`

## 📝 License

This is a student/learning project created for educational purposes.

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements!

