# Modern Company Landing Page

A modern, responsive company website built with React and Tailwind CSS.

This project is a complete single-page company website focused on clean typography, smooth interactions, responsive layouts, and modern UI patterns.

The website is designed for agencies, SaaS companies, startups, digital studios, portfolios, and other modern businesses.

---

## 🚀 Live Demo

[View Live Demo](https://modern-company-landing-ui.vercel.app/)

---

## 📸 Preview

### Desktop

![Desktop Preview](./screenshots/desktop.png)

### Mobile

![Mobile Preview](./screenshots/mobile.png)

---

## ✨ Features

- Modern company landing page
- Fully responsive design
- Responsive desktop and mobile navigation
- Mobile fullscreen navigation menu
- React Router navigation
- Smooth navigation between sections
- Animated navigation links
- Interactive CTA button
- Magnetic CTA button interaction
- Animated services section
- Animated number counters
- About section
- Services section
- Pricing section
- Monthly / yearly pricing toggle
- Contact section
- Interactive footer
- Hover animations and micro-interactions
- Responsive typography
- Modern spacing and layout system
- Reusable React components
- Tailwind CSS styling
- CSS Modules for custom animations
- Built with Vite

---

## 🛠️ Technologies

### Frontend

- **React**
- **JavaScript**
- **Tailwind CSS**
- **React Router**
- **Vite**

### Additional

- CSS Modules
- SVG icons
- Responsive CSS
- React Hooks

---

## 📂 Project Structure

```text
modern-company-landing-page/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   ├── Hero/
│   │   ├── Services/
│   │   ├── About/
│   │   ├── Pricing/
│   │   ├── Contact/
│   │   ├── layout/
│   │       ├── Header/
│   │       ├── MobileNav/
│   │       ├── Footer/
│   │ 
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── tailwind.config.js
└── vite.config.js
```

---

# 📱 Responsive Design

The website is designed to work across different screen sizes.

### Desktop

The desktop version includes:

- Floating rounded header
- Company logo
- Navigation links
- Animated navigation hover effect
- CTA button
- Large typography
- Multi-column layouts
- Interactive service rows
- Pricing cards
- Large interactive footer

### Mobile

The mobile version includes:

- Responsive header
- Mobile menu button
- Fullscreen mobile navigation
- Touch-friendly navigation links
- Responsive typography
- Stacked service layouts
- Responsive pricing cards
- Mobile-friendly footer

---

# 🧭 Website Sections

The website is structured as a single-page company experience.

## Hero

The hero section introduces the company and provides the main call-to-action.

The design focuses on:

- Large typography
- Clear messaging
- Strong visual hierarchy
- Responsive layout
- CTA interaction

---

## Services

The services section presents the company's main services using a clean editorial layout.

Example services:

1. Web Development
2. UI / UX Design
3. Digital Strategy

Each service includes:

- Service number
- Service title
- Description
- Hover interaction

The layout changes automatically depending on screen size.

---

## About

The About section introduces the company and communicates its approach, values, and capabilities.

The section uses a contrasting visual style to separate it from the other parts of the page.

---

## Pricing

The pricing section provides different plans and allows users to switch between:

- Monthly billing
- Yearly billing

The billing state is managed using React state.

Example:

```jsx
const [billingPeriod, setBillingPeriod] = useState("monthly");
```

---

## Contact

The contact section provides a clear way for visitors to start a conversation with the company.

It acts as the final conversion point before the footer.

---

## Footer

The footer contains:

- Animated company name
- Portfolio link
- GitHub link
- LinkedIn link
- Copyright information

The company name uses a custom hover interaction where neighboring characters respond to the hovered character.

---

# 🎨 Design

The design is inspired by modern digital agencies, SaaS websites, and creative studios.

The visual language focuses on:

- Minimalism
- Large typography
- Generous whitespace
- Rounded UI elements
- Subtle borders
- Soft backgrounds
- Micro-interactions
- Smooth transitions
- Strong visual hierarchy

The goal was to create a website that feels modern without relying on excessive animations.

---

# ⚡ Interactions

Several small interactions are implemented throughout the website.

### Navigation

Navigation links use a vertical text transition when hovered.

### CTA

The main CTA includes:

- Magnetic cursor movement
- Background color transition
- Arrow movement

### Services

Service rows respond to hover with:

- Horizontal movement
- Smooth transitions
- Visual emphasis

### Footer

The company name uses a character-based hover animation.

---

# 📦 Installation

Clone the repository:

```bash
git clone https://github.com/ashkangl/modern-company-landing-ui.git
```

Move into the project directory:

```bash
cd modern-company-landing-ui
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local development URL shown in your terminal.

---

# 🏗️ Build for Production

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

# 🚀 Deployment

This project can be deployed using platforms such as:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

The project is optimized for modern static hosting.

---

# 🔧 Customization

The website is designed to be easily customized.

You can change:

- Company name
- Logo
- Navigation links
- Services
- Pricing plans
- Colors
- Typography
- CTA text
- Contact information
- Social links
- Footer content

For example, the header supports configurable props:

```jsx
<Header
    logo="YOURCOMPANY"
    ctaText="Let's Talk"
/>
```

---

# 🧩 Reusable Components

The project separates the UI into reusable React components.

Examples include:

```text
Header
MobileNav
Services
Pricing
Footer
```

This makes it easier to reuse the design for different company websites and projects.

---

# 📚 What I Practiced

This project was also built as a practical React frontend project.

It helped practice:

- React component architecture
- React Hooks
- React Router
- React state management
- Responsive design
- Tailwind CSS
- CSS Modules
- CSS transitions
- Hover interactions
- Mobile navigation
- React Portals
- Reusable components
- Responsive layouts
- Modern landing page design

---

# 💡 Future Improvements

Possible future improvements include:

- Contact form backend
- Form validation
- Dark mode
- CMS integration
- Blog section
- Testimonials
- Real pricing data
- Authentication
- Database integration
- More advanced scroll animations
- Accessibility improvements
- SEO optimization
- Open Graph metadata
- Analytics integration

These features are intentionally not required for the current version.

---

# 📄 License

This project is available for learning and portfolio purposes.

Feel free to use the ideas and structure as inspiration for your own projects.

---

# 👨‍💻 Author

**Ashkan Golzad**

Frontend Developer focused on building modern web applications and user interfaces.

### Portfolio

https://ashkangolzad.ir

### GitHub

https://github.com/ashkangl

### LinkedIn

https://linkedin.com/in/ashkan-golzad

---

⭐ If you found this project useful, consider giving the repository a star.