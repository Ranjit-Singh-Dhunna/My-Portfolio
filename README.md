# 🌐 Portfolio Website

A modern, interactive portfolio built with **React 19 + Vite 6**, featuring **3D Spline integration, motion effects, parallax, and a modular section-based architecture**.  

---

## 🚀 Product Features

### 🔝 Responsive, Sticky Navbar
**File:** `src/sections/navbar.jsx`  
- Smooth eased scrolling  
- Mobile dropdown menu  
- Active link highlighting  

### 🎬 Hero Section with Parallax + 3D Spline
**Files:**  
- `src/sections/Hero.jsx`  
- `src/components/parallaxBackground.jsx`  
- `src/components/SplineViewer.jsx`  

Features: Full-bleed hero, layered parallax depth, embedded 3D Spline scene.  

### ✨ Animated Headline & Content
**Files:**  
- `src/components/HeroText.jsx`  
- `src/components/Marquee.jsx`  
- `src/components/OrbitingCircles.jsx`  

Features: Modern motion/scroll effects with custom easing.  

### 🧑‍💻 About Section
**File:** `src/sections/About.jsx`  
- Story + philosophy card  
- Subtle hover accents & animated underlines  

### 🖼 Projects Gallery
**Files:**  
- `src/sections/Projects.jsx`  
- `src/components/Project.jsx`  
- `src/components/ProjectDetails.jsx`  

Features: Card layout with icons, details, and consistent visual system.  

### ⏳ Hackathons Timeline
**Files:**  
- `src/sections/Hackathons.jsx`  
- `src/components/Timeline.jsx`  

Features: Chronological accomplishments in a clean timeline UI.  

### 💬 Testimonials
**File:** `src/sections/Testimonial.jsx`  
- Styled endorsements focused on readability.  

### 📩 Contact Form (EmailJS)
**File:** `src/sections/Contact.jsx`  
- Integrated with [EmailJS](https://www.emailjs.com/) via `@emailjs/browser`  

### 🦶 Footer & Branding
**Files:**  
- `src/sections/Footer.jsx`  
- `index.html`  
- `public/assets/favicon.svg`  

Custom favicon + page title: **“Ranjit’s Intro”**  

---

## 🎨 Visual / UX Highlights
- **Parallax + Motion:** `parallaxBackground.jsx` with smooth easing  
- **3D Integration:** `SplineViewer.jsx` embedded in hero  
- **Consistent Theme:** Tailwind-driven system with accent color `#E0BFD7`  
- **Mobile-first:** Navbar collapses into animated mobile menu  

---

## 🛠 Tech Stack

- **Framework:** React 19 + Vite 6  
  - `src/main.jsx`, `index.html`, `package.json`  
- **Styling:** Tailwind CSS 4 (`@tailwindcss/vite`, `tailwind-merge`)  
- **Animation:** `motion`, `@gsap/react`  
- **3D/Canvas:** `@react-three/fiber`, `@react-three/drei`, `three`, `maath`  
- **UI/Icons:** `lucide-react`  
- **Responsive:** `react-responsive`  
- **Email:** `@emailjs/browser`  
- **Other Components:** `cobe` globe (`src/components/globe.jsx`)  
- **Tooling:** ESLint 9, Vite React plugin  
- **Deployment:** Netlify (`netlify.toml` with SPA redirects)  

📦 **Exact dependencies:** See [`package.json`](./package.json).  

---

## 🏗 Architecture

- **Sections:** `src/sections/` → `Hero.jsx`, `About.jsx`, `Projects.jsx`, `Hackathons.jsx`, `Testimonial.jsx`, `Contact.jsx`, `Footer.jsx`, `navbar.jsx`  
- **Reusable Components:** `src/components/` → `HeroText.jsx`, `parallaxBackground.jsx`, `SplineViewer.jsx`, `Particles.jsx`, `Timeline.jsx`, `Project*.jsx`, etc.  
- **SPA Routing:** Handled via Netlify SPA redirects  

---

## ⚡ Performance & DX
- Fast builds with **Vite + tree-shaking**  
- Static hosting with **Netlify caching defaults**  
- Case-sensitive imports for Linux-safe CI  

---

## 🖥 How to Run Locally

```bash
npm install
npm run dev

# Build
npm run build
npm run preview

