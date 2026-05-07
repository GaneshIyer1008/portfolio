# Ganesh Iyer's Portfolio Website

## 🚀 Overview

A modern, dark-themed portfolio website built with clean, modular HTML, CSS, and JavaScript. Featuring smooth animations, responsive design, and optimized performance.

**Live Demo:** [Visit Portfolio](https://GaneshIyer1008.github.io)

## 🎨 Design Features

### Dark Theme
- **Color Scheme**: Deep dark backgrounds with electric blue accents
- **Accessibility**: High contrast ratios for readability
- **Modern Look**: Contemporary gradient and glassmorphism effects

### Animations
- ✨ Smooth fade-in and slide-up animations on scroll
- 🎯 Staggered animations for project cards
- 💫 Hover effects with transforms and glows
- 🔄 Parallax effects on hero section
- ⚡ Optimized for 60fps performance

### Responsive Design
- 📱 Mobile-first approach
- 🖥️ Breakpoints for tablets and desktops
- ⌨️ Keyboard navigation support
- 🎨 Touch-friendly interactive elements

## 📁 Project Structure

```
portfolio/
├── index.html                          # Main HTML file
├── REFACTORING_NOTES.md               # Detailed refactoring documentation
├── README.md                          # This file
├── .gitignore
│
├── assets/
│   ├── css/
│   │   ├── style.css                  # Main stylesheet (900+ lines)
│   │   │   - CSS variables for theming
│   │   │   - Layout & typography
│   │   │   - All section styles
│   │   │   - Responsive breakpoints
│   │   │
│   │   ├── components.css             # Reusable component styles
│   │   │   - Buttons (.btn-primary, .btn-secondary)
│   │   │   - Skill badges
│   │   │   - Cards
│   │   │   - Utility classes
│   │   │
│   │   └── animations.css             # All animation definitions
│   │       - Keyframe animations
│   │       - Scroll-triggered animations
│   │       - Transition utilities
│   │       - Reduced motion preferences
│   │
│   ├── js/
│   │   ├── script.js                  # Core functionality
│   │   │   - Mobile menu toggle
│   │   │   - Navigation active state
│   │   │   - Smooth scrolling
│   │   │   - Utility functions
│   │   │
│   │   └── animations.js              # Animation handlers
│   │       - Intersection Observer setup
│   │       - Scroll animations
│   │       - Stagger animations
│   │       - Performance optimization
│   │
│   └── img/
│       ├── Ganesh_Professional.jpeg   # Profile picture
│       └── ganesh_photo.jpg           # Backup photo
```

## 🎯 Sections

### 1. **Navigation Bar**
- Fixed top navigation with blur backdrop effect
- Active link highlighting with animated underline
- Mobile hamburger menu with toggle animation
- Smooth scroll behavior

### 2. **Hero Section**
- Animated gradient background
- Profile picture with hover zoom effect
- Call-to-action buttons
- Scroll indicator animation
- Responsive grid layout

### 3. **About Section**
- Bio with highlighted key interests
- Technical skills with interactive badges
- Background color change for visual separation
- Semantic HTML structure

### 4. **Projects Section**
- 4 Featured projects with placeholders:
  - Xterra Robotics RL Internship
  - NOMADZ RoboCup Motion Control
  - ETH Course Projects
  - NTU Singapore Project
- Project cards with hover lift effects
- Categorized with tags
- Staggered fade-in animations

### 5. **Publications Section**
- Research publications showcase
- Link to Google Scholar
- Publication cards with hover effects
- Citation information ready to populate

### 6. **Contact Section**
- Call-to-action message
- Social media links:
  - Email (omkaar0791@gmail.com)
  - GitHub (GaneshIyer1008)
  - LinkedIn (Ganesh Iyer)
  - Google Scholar (Publications)
- Interactive icon buttons

### 7. **Footer**
- Copyright information
- Tech stack mention
- Heartbeat animation

## 🎨 Color Palette

| Element | Color | Hex Code |
|---------|-------|----------|
| Primary Background | Deep Dark | `#0a0e27` |
| Secondary Background | Dark Accent | `#1a1f3a` |
| Tertiary Background | Lighter Dark | `#242d47` |
| Primary Text | Light | `#e0e6ff` |
| Secondary Text | Muted | `#b0b8d4` |
| Accent - Primary | Electric Blue | `#00d9ff` |
| Accent - Secondary | Vibrant Purple | `#7c3aed` |
| Border | Subtle White | `rgba(255, 255, 255, 0.1)` |

## 🎭 Animation Specifications

### Fade-In
- **Duration**: 0.6s
- **Easing**: ease-in-out
- **Trigger**: On page load or scroll

### Slide-Up
- **Duration**: 0.8s
- **Easing**: cubic-bezier(0.34, 1.56, 0.64, 1)
- **Stagger**: 0.1s between elements

### Hover Effects
- **Scale**: 1.02x to 1.05x
- **Shadow**: Dynamic glow effect
- **Duration**: 0.3s smooth transition

### Scroll Parallax
- **Hero Gradient**: 0.5x scroll speed
- **Text Elements**: Fade-in on viewport enter
- **Staggered Animations**: nth-child delays

## 📱 Responsive Breakpoints

```css
/* Desktop */
Default styles: 1200px+

/* Tablet */
@media (max-width: 768px)
- Single column layouts
- Adjusted font sizes
- Mobile menu active
- Flex column direction

/* Mobile */
@media (max-width: 480px)
- Further reduced font sizes
- Single column grids
- Centered elements
- Optimized touch targets
```

## 🛠️ CSS Variables

All styles use CSS custom properties for easy theming:

```css
:root {
    --color-bg-primary: #0a0e27;
    --color-accent-primary: #00d9ff;
    --spacing-lg: 2rem;
    --transition-base: 0.3s ease-in-out;
    /* ... and 30+ more variables */
}
```

To change the theme, simply update the `:root` variables in `style.css`.

## 📚 Component Classes

### Buttons
```html
<a href="#" class="btn btn-primary">Primary Button</a>
<a href="#" class="btn btn-secondary">Secondary Button</a>
```

### Skills
```html
<div class="skill-badge">Python</div>
<div class="skill-badge">PyTorch</div>
```

### Animations
```html
<div data-animate="fade-in">Fades in on load</div>
<div data-animate="slide-up">Slides up on scroll</div>
```

## 🚀 Performance Optimizations

✅ **CSS Optimizations**
- Minimal repaints with transform/opacity
- CSS Grid & Flexbox for layout
- Variables for reduced code duplication

✅ **JavaScript Optimizations**
- Intersection Observer for scroll animations
- Debounced/throttled event listeners
- Passive event listeners for scroll
- No jQuery dependencies

✅ **Loading Performance**
- Critical CSS inlined
- Async JavaScript loading
- Optimized images with proper sizes
- Lazy loading ready

✅ **Accessibility**
- Semantic HTML5 structure
- ARIA labels where needed
- Keyboard navigation
- High contrast dark theme
- Reduced motion preferences

## 🔧 Customization Guide

### Update Personal Info
Edit `index.html` sections:
- Hero section: Name, subtitle, tagline
- About section: Bio text
- Social links: Contact information

### Add New Projects
In the projects section, copy a project card:
```html
<article class="project-card" data-animate="fade-in">
    <div class="project-inner">
        <div class="project-tags">
            <span class="tag">Your Tag</span>
        </div>
        <h3 class="project-title">Your Project</h3>
        <p class="project-description">Description</p>
        <ul class="project-links">
            <li><a href="#" class="link-arrow">More →</a></li>
        </ul>
    </div>
</article>
```

### Modify Colors
Update CSS variables in `style.css`:
```css
:root {
    --color-accent-primary: #your-color;
    --color-bg-primary: #your-bg-color;
    /* Update other colors as needed */
}
```

### Change Animations
Modify timing in `animations.css` or `style.css`:
```css
@keyframes fadeIn {
    duration: 1s; /* Change duration */
    easing: ease-out; /* Change easing */
}
```

## 📖 Browser Support

| Browser | Minimum Version |
|---------|-----------------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |
| Mobile Browsers | iOS Safari 14+, Chrome Mobile 90+ |

## ✨ Features Highlights

- ✅ Dark theme with modern aesthetics
- ✅ Smooth scroll animations (fade, slide, scale)
- ✅ Responsive mobile-first design
- ✅ Fast performance (60fps animations)
- ✅ Modular CSS architecture
- ✅ No external dependencies
- ✅ Semantic HTML structure
- ✅ Accessibility compliant
- ✅ Easy to customize
- ✅ SEO optimized

## 🔮 Future Enhancements

- [ ] Dark/Light theme toggle
- [ ] Search functionality for projects
- [ ] Filter by project tags
- [ ] GitHub API integration for live projects
- [ ] Blog section
- [ ] Newsletter subscription
- [ ] Comments on projects
- [ ] Analytics integration
- [ ] PWA capabilities
- [ ] Multi-language support

## 📝 Version History

**v1.0.0** - Initial Release
- Complete dark theme redesign
- Modular CSS architecture
- Smooth scroll animations
- Responsive mobile design
- All core sections implemented

## 📄 License

This portfolio is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork, modify, and use this portfolio template for your own needs!

## 📞 Contact

- **Email**: omkaar0791@gmail.com
- **GitHub**: [GaneshIyer1008](https://github.com/GaneshIyer1008)
- **LinkedIn**: [Ganesh Iyer](https://www.linkedin.com/in/ganesh-iyer-62a360226/)
- **Google Scholar**: [Profile](https://scholar.google.com/citations?user=gVqKmrsAAAAJ&hl=en)

---

**Last Updated**: May 7, 2026
**Built With**: HTML5, CSS3, Vanilla JavaScript
**Theme**: Dark Mode with Electric Blue Accents
**Performance**: Optimized for 60fps animations
