# Dev Portfolio

A modern, responsive developer portfolio built with React, TypeScript, and Tailwind CSS. Features smooth animations, beautiful design, and optimized performance.

## 🚀 Features

- **Modern Design**: Clean, professional design with Material Design principles
- **Responsive**: Fully responsive across all device sizes
- **Animations**: Smooth animations powered by Framer Motion
- **Performance**: Optimized for fast loading and smooth interactions
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Type Safe**: Built with TypeScript for better development experience

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

## 🎨 Design System

The portfolio uses a custom color scheme with:
- **Primary**: Purple (#8B5CF6)
- **Secondary**: Green (#10B981)
- **Accent**: Gold (#F59E0B)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/dev-portfolio.git
cd dev-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🏗️ Build

To build the project for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🚀 Deployment

### GitHub Pages

1. Update the `vite.config.ts` file with your repository name:
```typescript
export default defineConfig({
  // ... other config
  base: '/your-repository-name/',
});
```

2. Update the `homepage` field in `package.json`:
```json
{
  "homepage": "https://YOUR_USERNAME.github.io/your-repository-name"
}
```

3. Deploy using GitHub Actions (workflow included) or manually:
```bash
npm run deploy
```

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── PageTransition.tsx
│   ├── AnimatedSection.tsx
│   ├── GradientButton.tsx
│   └── ScrollToTop.tsx
├── pages/              # Page components
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── SkillsPage.tsx
│   ├── ProjectsPage.tsx
│   ├── ExperiencePage.tsx
│   └── ContactPage.tsx
├── App.tsx            # Main app component
├── main.tsx           # Entry point
└── index.css          # Global styles
```

## 🎯 Customization

### Personal Information

Update the following files with your information:
- `src/pages/HomePage.tsx` - Hero section content
- `src/pages/AboutPage.tsx` - Personal story and details
- `src/pages/SkillsPage.tsx` - Your skills and expertise
- `src/pages/ProjectsPage.tsx` - Your projects
- `src/pages/ExperiencePage.tsx` - Work experience and education
- `src/pages/ContactPage.tsx` - Contact information

### Styling

The design system is configured in `tailwind.config.js`. You can customize:
- Colors in the `extend.colors` section
- Animations in the `extend.animation` section
- Fonts and other design tokens

### Images

Replace placeholder images with your own:
- Add your images to the `public` folder
- Update image URLs in the components
- Consider using a service like Pexels or Unsplash for stock photos

## 🔧 VS Code Setup

The project includes VS Code configuration for optimal development experience:
- **Settings**: Configured for TypeScript, Tailwind CSS, and formatting
- **Extensions**: Recommended extensions for the tech stack
- **Snippets**: Custom snippets for common patterns

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

If you have any questions or suggestions, feel free to reach out:
- Email: your.email@example.com
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- GitHub: [Your GitHub](https://github.com/yourusername)

---

⭐ If you found this helpful, please give it a star!