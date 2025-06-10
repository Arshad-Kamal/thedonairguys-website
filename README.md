# The Donair Guys Website

Official website for The Donair Guys restaurant in Edmonton, featuring their authentic halal donairs and Mediterranean cuisine.

## 🚀 Tech Stack

- **Framework**: SvelteKit (JavaScript)
- **Styling**: CSS with custom properties
- **Deployment**: Vercel
- **Development Tools**: ESLint, Prettier
- **Package Manager**: npm

## 📋 Prerequisites

- Node.js v18+ 
- npm v9+
- Git

## 🛠️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/thedonairguys-website.git
cd thedonairguys-website
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
```bash
# Copy the example env file
cp .env.example .env

# Edit .env and add your values:
# - PUBLIC_GOOGLE_MAPS_KEY: Your Google Maps API key
# - PUBLIC_SITE_URL: http://localhost:5173 (for local dev)
```

### 4. Run development server
```bash
npm run dev
```

The site will be available at http://localhost:5173

## 📁 Project Structure

```
thedonairguys/
├── src/
│   ├── routes/          # Page components and routing
│   │   ├── +layout.svelte
│   │   ├── +layout.js
│   │   ├── +page.svelte
│   │   ├── menu/
│   │   └── contact/
│   ├── lib/             # Shared code
│   │   ├── components/  # Reusable components
│   │   ├── utils/       # Utility functions
│   │   └── config.js    # Environment config
│   ├── app.html         # HTML template
│   └── app.css          # Global styles
├── static/              # Static assets
│   └── data/           # JSON data files
├── manifest.js          # Implementation tracking
└── package.json         # Dependencies
```

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint checks
- `npm run format` - Format code with Prettier
- `npm run check` - Type checking

## 🔧 Configuration Files

- `svelte.config.js` - SvelteKit configuration
- `vite.config.js` - Vite bundler configuration
- `.eslintrc.cjs` - ESLint rules
- `.prettierrc` - Prettier formatting rules
- `manifest.js` - Project implementation status tracker

## 🚀 Deployment

The project is configured for automatic deployment to Vercel:

1. Push changes to the `main` branch
2. Vercel automatically builds and deploys
3. Preview deployments are created for pull requests

### Manual Deployment
```bash
npm run build
# Deploy the build/ directory to your hosting service
```

## 🔒 Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `PUBLIC_GOOGLE_MAPS_KEY` | Google Maps API key | Yes | - |
| `PUBLIC_SITE_URL` | Site URL for meta tags | Yes | - |

## 📊 Implementation Status

Check `manifest.js` for current implementation status of all features. This file tracks:
- Feature completion status
- Files associated with each feature
- Warnings and blockers
- Project phase

## 🎨 Design System

The project uses CSS custom properties defined in `src/app.css`:
- Brand colors (browns, golds)
- Typography scale
- Spacing system
- Shadow definitions
- Animation durations

## 🧪 Quality Checks

Before committing:
1. Run `npm run lint` to check for linting errors
2. Run `npm run format` to ensure consistent formatting
3. Test in multiple browsers
4. Check mobile responsiveness

## 📝 Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Update `manifest.js` with implementation status
4. Test thoroughly
5. Commit with descriptive messages
6. Push and create a pull request

## 🐛 Troubleshooting

### Environment variables not loading
- Ensure `.env` file exists in project root
- Check variable names start with `PUBLIC_`
- Restart dev server after changes

### Build errors
- Clear build cache: `rm -rf .svelte-kit`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Check Node.js version (requires v18+)

## 📞 Contact

For questions about the website implementation, please refer to the PRD.md and TASKS.md files in the project.

---

**Project Status**: Foundation Phase - See `manifest.js` for details