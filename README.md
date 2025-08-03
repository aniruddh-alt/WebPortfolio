# Pixel Portfolio - Interactive Web Portfolio

A pixelated, game-inspired portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features retro aesthetics, smooth animations, and interactive elements that showcase professional experience, projects, and achievements in a unique gaming style.

## ✨ Features

- **Retro Gaming Aesthetic**: Pixel-perfect design with 8-bit inspired colors and animations
- **Fully Interactive**: Smooth scrolling navigation, hover effects, and interactive elements
- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Modern Tech Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Comprehensive Sections**:
  - Hero with animated introduction
  - Professional experience timeline
  - Interactive project showcase
  - Achievements and certifications
  - Academic publications
  - Research interests
  - University Honors Program experiences
  - Year-in-review retrospectives
  - Fun personal interests and mini-games

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/WebPortfolio.git
   cd WebPortfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom pixel-themed utilities
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Press Start 2P (Google Fonts)

## 🎨 Design System

### Colors
- **Primary Green**: `#00ff41` - Main accent color
- **Blue**: `#0080ff` - Secondary actions
- **Purple**: `#8040ff` - Special highlights
- **Pink**: `#ff40ff` - Creative elements
- **Yellow**: `#ffff00` - Warnings and attention
- **Red**: `#ff4040` - Errors and important items

### Components
- **PixelButton**: Retro-styled buttons with hover effects
- **PixelCard**: Container components with solid borders
- **PixelText**: Typography with pixel-perfect styling
- **Navigation**: Smooth scrolling navigation with active states

## 📂 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
├── components/
│   ├── sections/            # Main content sections
│   │   ├── Hero.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Achievements.tsx
│   │   ├── Publications.tsx
│   │   ├── Research.tsx
│   │   ├── UHP.tsx
│   │   ├── YearReviews.tsx
│   │   └── FunStuff.tsx
│   ├── PixelButton.tsx      # Reusable button component
│   ├── PixelCard.tsx        # Reusable card component
│   ├── PixelText.tsx        # Typography component
│   ├── Navigation.tsx       # Navigation bar
│   └── Footer.tsx           # Footer component
└── lib/
    └── utils.ts             # Utility functions
```

## 🎮 Interactive Features

- **Dynamic Role Display**: Animated text cycling through different roles
- **Skill Progress Bars**: Animated progress indicators
- **Project Filtering**: Interactive project category filtering
- **Mini Game**: Simple code point collector game
- **Hover Effects**: Pixel-perfect hover animations throughout
- **Smooth Scrolling**: Seamless navigation between sections
- **Responsive Timeline**: Interactive experience timeline

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Mobile: 320px and up
- Tablet: 768px and up  
- Desktop: 1024px and up
- Large screens: 1280px and up

## ⚡ Performance

- **Next.js App Router**: Optimized routing and rendering
- **Component Lazy Loading**: Efficient loading of components
- **Optimized Images**: Next.js Image optimization
- **Minimal Bundle Size**: Tree-shaking and code splitting

## 🎯 Customization

To customize this portfolio for your own use:

1. **Update Personal Information**: Edit the data in each section component
2. **Modify Colors**: Update the color scheme in `tailwind.config.js`
3. **Add/Remove Sections**: Modify the imports and components in `app/page.tsx`
4. **Customize Animations**: Adjust Framer Motion animations in component files
5. **Update Metadata**: Change SEO information in `app/layout.tsx`

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel --prod
```

### Other Platforms
```bash
npm run build
npm start
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/WebPortfolio/issues).

## 📞 Contact

- **Website**: [yourwebsite.com](https://yourwebsite.com)
- **Email**: your.email@example.com
- **LinkedIn**: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- **GitHub**: [Your GitHub](https://github.com/yourusername)

---

Made with ❤️ and ☕ by [Your Name]