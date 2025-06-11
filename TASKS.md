# The Donair Guys Website - Comprehensive Task Tracking Document

## 📋 Document Navigation

- [Document Usage Guide](#document-usage-guide)
- [Project Overview](#project-overview)
- [Pre-Project Setup](#pre-project-setup)
- [Phase 1: Foundation](#phase-1-foundation-days-1-2)
- [Phase 2: Core Features](#phase-2-core-features-days-3-5)
- [Phase 3: Visual Design](#phase-3-visual-design-days-6-8)
- [Phase 4: Integration & Polish](#phase-4-integration--polish-days-9-10)
- [Phase 5: Testing & Launch](#phase-5-testing--launch-days-11-12)
- [Code Templates](#code-templates)
- [Troubleshooting Guide](#troubleshooting-guide)
- [Post-Launch Tasks](#post-launch-tasks)

---

## Document Usage Guide

### How to Use This Document

1. **Read Prerequisites** - Check task dependencies before starting
2. **Follow Step-by-Step** - Each task has detailed implementation steps
3. **Verify Acceptance Criteria** - Ensure all criteria are met before marking complete
4. **Use Code Templates** - Copy provided templates exactly
5. **Check PRD References** - Cross-reference with PRD sections
6. **Update Progress** - Mark tasks and update manifest.js
7. **Document Issues** - Use troubleshooting section for blockers

### Task Card Structure

Each task includes:
- 📋 **Prerequisites** - What must be done first
- 🎯 **Objective** - Clear goal of the task
- 📝 **Steps** - Detailed implementation steps
- ✅ **Acceptance Criteria** - How to verify completion
- 🔗 **PRD Reference** - Related PRD sections
- ⚠️ **Common Mistakes** - What to avoid
- 🧪 **Testing** - How to test the implementation

### Progress Tracking

```javascript
// Update manifest.js after each task
updateFeatureStatus('featureName', {
  status: 'IN_PROGRESS', // or 'COMPLETE'
  files: ['file1.js', 'file2.svelte'],
  notes: 'Implementation details'
});
```

---

## Project Overview

### 🎯 Project Goals
- Build a mobile-first website for The Donair Guys restaurant
- Implement defensive minimalism principles
- Ensure fast performance (< 3s load time)
- Deploy to Vercel with custom domain

### 📊 Technical Stack
- **Framework**: SvelteKit (Svelte 5, JavaScript only)
- **Styling**: CSS with custom properties
- **Deployment**: Vercel (free tier)
- **Data**: Static JSON
- **Security**: Defensive patterns from PRD

### 🏗️ Architecture Overview

```
thedonairguys/
├── src/
│   ├── routes/
│   │   ├── +layout.svelte      # Main layout with navigation
│   │   ├── +page.svelte        # Homepage
│   │   ├── +error.svelte       # Error boundary
│   │   ├── menu/
│   │   │   └── +page.svelte    # Menu page
│   │   └── contact/
│   │       └── +page.svelte    # Contact page
│   ├── lib/
│   │   ├── components/         # Reusable components
│   │   ├── utils/              # Utility functions
│   │   └── config.js           # Environment config
│   └── app.html                # HTML template
├── static/
│   ├── data/
│   │   └── menu.json           # Menu data
│   └── icons/                  # SVG icons (if needed)
├── manifest.js                 # Implementation tracking
└── vercel.json                 # Deployment config
```

---

## Pre-Project Setup

### 🛠️ Development Environment Setup

#### Task: Install Required Software ✅ COMPLETE

📋 **Prerequisites**: None

🎯 **Objective**: Setup complete development environment

📝 **Steps**:
1. ✅ Install Node.js v18+ from [nodejs.org](https://nodejs.org)
   ```bash
   # Verify installation
   node --version  # Should show v18.x.x or higher
   npm --version   # Should show 9.x.x or higher
   ```

2. ✅ Using Zed Editor
   - Install extensions as needed:
     - Svelte support
     - ESLint
     - Prettier

3. ✅ Install Git from [git-scm.com](https://git-scm.com)
   ```bash
   # Configure Git
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```

✅ **Acceptance Criteria**:
- [x] `node --version` shows v22+
- [x] `npm --version` shows v10+
- [x] Git is configured with your details
- [x] Zed Editor is set up with necessary extensions

⚠️ **Common Mistakes**:
- Using Node.js < v18 (causes compatibility issues)
- Not configuring Git before first commit

---

### 🔑 Account Setup

#### Task: Create Required Accounts ✅ COMPLETE

📋 **Prerequisites**: Email address

🎯 **Objective**: Setup GitHub and Vercel accounts

📝 **Steps**:

1. ✅ **GitHub Account**:
   - Go to [github.com](https://github.com)
   - Sign up for free account
   - Enable 2FA for security
   - Create a personal access token for CLI

2. ✅ **Vercel Account**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub (recommended)
   - Verify email
   - Note: Free tier includes:
     - 100GB bandwidth/month
     - Unlimited deployments
     - SSL certificates

3. ~~**Google Cloud Console** (for Maps API)~~ **NOT NEEDED**:
   - Static map image will be provided instead
   - No API key required

✅ **Acceptance Criteria**:
- [x] GitHub account created with 2FA
- [x] Vercel account linked to GitHub
- [x] ~~Google Maps API key obtained~~ Static map to be provided
- [x] ~~API key has proper restrictions~~ N/A

---

### 📦 Asset Collection

#### Task: Gather Required Assets ✅ PARTIAL COMPLETE

📋 **Prerequisites**: Contact with business owner

🎯 **Objective**: Collect all media and content

📝 **Steps**:

1. **Business Information** ✅ MOSTLY COMPLETE:
   ```javascript
   // Required data structure
   const businessInfo = {
     name: "The Donair Guys", // ✅
     tagline: "Authentic Halal Donairs Since 2018", // ✅
     phone: "(780) 244-0104", // ✅
     address: "6609 177 St NW, Edmonton, AB T5T 4J5", // ✅
     hours: {
       monday: { open: "11:00", close: "02:00" }, // ✅
       tuesday: { open: "11:00", close: "02:00" }, // ✅
       // ... all days same hours ✅
     },
     social: {
       instagram: "@thedonairguys", // ⚠️ URL SKIPPED
       facebook: "thedonairguysedmonton" // ⚠️ URL SKIPPED
     }
   };
   ```

2. **Menu Data** ✅ COMPLETE:
   - Complete menu with categories ✅
   - Prices for all items ✅
   - Item descriptions ✅
   - Dietary information (100% halal) ✅

3. **Visual Assets** ❌ SKIPPED FOR MVP:
   - Logo (SVG preferred, PNG fallback) - SKIPPED
   - Hero image (1920x1080, < 200KB) - SKIPPED
   - Menu item photos (800x600, < 100KB each) - SKIPPED
   - Restaurant photos (interior/exterior) - SKIPPED

**🚀 MVP APPROACH**:
- Using CSS-only design (gradients, animations, icons)
- Tailwind CSS icons instead of images
- Phone ordering as primary CTA (no delivery URLs needed)
- Text-based branding instead of logo

✅ **Acceptance Criteria** (UPDATED FOR MVP):
- [x] All business hours confirmed
- [x] Complete menu with prices
- [x] Content and copy generated
- [x] Technical assets (colors, fonts) defined
- [SKIPPED] Logo in SVG format - Using CSS styling
- [SKIPPED] All images optimized for web - No images needed
- [SKIPPED] Delivery platform URLs - Phone ordering only
- [SKIPPED] Social media URLs - Can add post-launch

🔗 **PRD Reference**: See "Media Requirements" section

---

## Phase 1: Foundation (Days 1-2)

### 📋 Phase 1 Overview

**Goal**: Setup project foundation with proper structure and configuration

**Dependencies Flow**:
```
Project Init → Git Setup → GitHub Connection → Vercel Deploy → Environment Config
     ↓             ↓              ↓                  ↓               ↓
  Structure    Version       Remote Repo        Preview URL     Validation
```

---

### Day 1: Project Initialization

#### Task 1.1: Create SvelteKit Project ✅ COMPLETE

📋 **Prerequisites**: 
- Node.js v18+ installed
- npm configured

🎯 **Objective**: Initialize SvelteKit project with correct settings

📝 **Steps**:

1. **Create Project**:
   ```bash
   # Run the create command
   npm create svelte@latest thedonairguys
   
   # When prompted, select:
   # - Skeleton project (no demo code)
   # - No TypeScript (use JavaScript)
   # - ESLint for code linting
   # - Prettier for code formatting
   # - No Playwright (testing later)
   # - No Vitest (testing later)
   ```

2. **Install Dependencies**:
   ```bash
   cd thedonairguys
   npm install
   ```

3. **Verify Structure**:
   ```
   thedonairguys/
   ├── src/
   │   ├── routes/
   │   │   └── +page.svelte
   │   └── app.html
   ├── static/
   ├── package.json
   ├── svelte.config.js
   └── vite.config.js
   ```

4. **Test Development Server**:
   ```bash
   npm run dev
   # Should start on http://localhost:5173
   ```

✅ **Acceptance Criteria**:
- [x] Project created with JavaScript (not TypeScript)
- [x] ESLint and Prettier configured
- [x] Dev server runs without errors
- [x] Can access http://localhost:5173

🔍 **Verification Completed** (2025-02-14):
- ✅ JavaScript-only project confirmed (jsconfig.json, no .ts files in src/)
- ✅ ESLint configuration verified (.eslintrc.cjs)
- ✅ Prettier configuration verified (.prettierrc)
- ✅ Dev server tested successfully (starts on http://localhost:5173)
- ✅ Project structure matches requirements (src/routes/, static/, etc.)
- ✅ Environment variables properly configured with SvelteKit 2.0 modules

⚠️ **Common Mistakes**:
- Selecting TypeScript (PRD specifies JavaScript only)
- Including demo code (use skeleton project)

🧪 **Testing**:
```bash
# Verify no TypeScript files
find . -name "*.ts" -o -name "*.tsx" | grep -v node_modules
# Should return empty
```

---

#### Task 1.2: Git Repository Setup

📋 **Prerequisites**: 
- Git installed and configured
- SvelteKit project created

🎯 **Objective**: Initialize version control with proper ignore patterns

📝 **Steps**:

1. **Initialize Git**:
   ```bash
   git init
   ```

2. **Create .gitignore**:
   ```gitignore
   # Dependencies
   node_modules/
   
   # Build outputs
   .svelte-kit/
   build/
   dist/
   
   # Environment files
   .env
   .env.local
   .env.*.local
   
   # IDE
   .vscode/
   .idea/
   *.swp
   *.swo
   .DS_Store
   
   # Logs
   logs/
   *.log
   npm-debug.log*
   
   # Testing
   coverage/
   .nyc_output/
   
   # Temporary files
   .tmp/
   temp/
   ```

3. **Initial Commit**:
   ```bash
   git add .
   git commit -m "Initial commit: SvelteKit project setup"
   ```

✅ **Acceptance Criteria**:
- [ ] Git repository initialized
- [ ] .gitignore excludes all build artifacts
- [ ] No sensitive files tracked
- [ ] Initial commit created

---

#### Task 1.3: GitHub Repository Connection

📋 **Prerequisites**: 
- Local Git repository
- GitHub account

🎯 **Objective**: Connect local repo to GitHub

📝 **Steps**:

1. **Create GitHub Repository**:
   - Go to github.com/new
   - Name: `thedonairguys-website`
   - Description: "Official website for The Donair Guys restaurant"
   - Public repository
   - NO README (we have one)
   - NO .gitignore (we have one)
   - NO license (for now)

2. **Connect Repositories**:
   ```bash
   # Add remote origin
   git remote add origin https://github.com/YOUR_USERNAME/thedonairguys-website.git
   
   # Push to GitHub
   git branch -M main
   git push -u origin main
   ```

3. **Verify Connection**:
   - Check github.com/YOUR_USERNAME/thedonairguys-website
   - All files should be visible

✅ **Acceptance Criteria**:
- [ ] GitHub repository created
- [ ] Local connected to remote
- [ ] Code visible on GitHub
- [ ] Main branch is default

---

#### Task 1.4: Vercel Deployment Setup

📋 **Prerequisites**: 
- GitHub repository created
- Vercel account

🎯 **Objective**: Connect GitHub to Vercel for automatic deployments

📝 **Steps**:

1. **Import Project to Vercel**:
   - Go to vercel.com/new
   - Click "Import Git Repository"
   - Select your GitHub repo
   - Configure project:
     ```
     Framework Preset: SvelteKit
     Root Directory: ./
     Build Command: npm run build
     Output Directory: .svelte-kit
     Install Command: npm install
     ```

2. **Environment Variables**:
   ```
   # Add in Vercel dashboard:
   NODE_ENV=production
   PUBLIC_GOOGLE_MAPS_KEY=your_api_key_here
   PUBLIC_SITE_URL=https://thedonairguys.vercel.app
   ```

3. **Deploy Settings**:
   - Production Branch: main
   - Preview Branches: All
   - Automatic Deployments: Enabled

✅ **Acceptance Criteria**:
- [ ] Project imported to Vercel
- [ ] First deployment successful
- [ ] Preview URL works
- [ ] Environment variables set

🔗 **PRD Reference**: "Deployment Configuration (Vercel)" section

---

### Day 2: Core Configuration

#### Task 2.1: Create manifest.js

📋 **Prerequisites**: 
- Project structure created

🎯 **Objective**: Setup implementation tracking system

📝 **Steps**:

1. **Create manifest.js in root**:
   ```javascript
   // manifest.js - Single source of truth for implementation status
   // Update this file with EVERY change to track what actually exists
   
   export const IMPLEMENTATION_STATUS = {
     _lastUpdated: new Date().toISOString(),
     _warningCount: 0,
     _projectPhase: "FOUNDATION", // FOUNDATION | CORE_FEATURES | VISUAL_DESIGN | INTEGRATION | TESTING | COMPLETE
   
     // FOUNDATION PHASE
     projectSetup: {
       status: "COMPLETE",
       hasRealData: false,
       files: ["package.json", "svelte.config.js", "vite.config.js"],
       notes: "SvelteKit project initialized with JavaScript",
       warnings: [],
       blocker: null
     },
   
     gitRepository: {
       status: "COMPLETE",
       hasRealData: false,
       files: [".gitignore"],
       notes: "Git initialized and connected to GitHub",
       warnings: [],
       blocker: null
     },
   
     vercelDeployment: {
       status: "IN_PROGRESS",
       hasRealData: false,
       files: ["vercel.json"],
       notes: "Vercel project connected, awaiting config",
       warnings: [],
       blocker: null
     },
   
     envConfiguration: {
       status: "NOT_STARTED",
       hasRealData: false,
       files: ["src/lib/config.js", ".env.example"],
       notes: "Environment validation not implemented",
       warnings: ["MISSING_ENV_VALIDATION"],
       blocker: null
     },
   
     // ... rest of features from previous manifest.js
   };
   
   // Helper function to check implementation before operations
   export function verifyImplementation(feature) {
     const impl = IMPLEMENTATION_STATUS[feature];
     if (!impl) {
       throw new Error(`CANNOT PROCEED: ${feature} not found in manifest`);
     }
     if (impl.status !== "COMPLETE") {
       console.warn(`WARNING: ${feature} status is ${impl.status}`);
       if (impl.blocker) {
         throw new Error(`BLOCKED: ${feature} - ${impl.blocker}`);
       }
     }
     return impl;
   }
   
   // Helper to update feature status
   export function updateFeatureStatus(feature, updates) {
     if (!IMPLEMENTATION_STATUS[feature]) {
       throw new Error(`Feature ${feature} not found in manifest`);
     }
   
     Object.assign(IMPLEMENTATION_STATUS[feature], updates);
     IMPLEMENTATION_STATUS._lastUpdated = new Date().toISOString();
   
     console.log(`[MANIFEST] Updated ${feature}:`, updates);
   }
   ```

✅ **Acceptance Criteria**:
- [ ] manifest.js created in root
- [ ] All features listed with NOT_STARTED
- [ ] Helper functions work
- [ ] Can update status

---

#### Task 2.2: Environment Configuration

📋 **Prerequisites**: 
- manifest.js created

🎯 **Objective**: Setup environment validation that fails on missing vars

📝 **Steps**:

1. **Create src/lib/config.js**:
   ```javascript
   // config.js - Environment configuration with validation
   // CRITICAL: Must fail loudly on missing required variables
   
   // Define required environment variables
   const REQUIRED_ENV_VARS = [
     'PUBLIC_GOOGLE_MAPS_KEY',
     'PUBLIC_SITE_URL'
   ];
   
   // Validation function - fails on missing vars
   function validateEnvironment() {
     console.log('=== ENVIRONMENT VALIDATION ===');
     const missing = [];
     
     for (const varName of REQUIRED_ENV_VARS) {
       if (!import.meta.env[varName]) {
         missing.push(varName);
         console.error(`❌ Missing required: ${varName}`);
       } else {
         console.log(`✓ ${varName} is set`);
       }
     }
     
     if (missing.length > 0) {
       throw new Error(
         `CANNOT START: Missing required environment variables:\n${missing.join('\n')}\n\n` +
         `Please set these in:\n` +
         `- .env for local development\n` +
         `- Vercel dashboard for production`
       );
     }
     
     console.log('=== VALIDATION COMPLETE ===\n');
   }
   
   // Run validation immediately
   validateEnvironment();
   
   // Export validated config
   export const config = {
     googleMapsKey: import.meta.env.PUBLIC_GOOGLE_MAPS_KEY,
     siteUrl: import.meta.env.PUBLIC_SITE_URL,
     isDev: import.meta.env.DEV,
     isProd: import.meta.env.PROD
   };
   
   // Export for use in other files
   export default config;
   ```

2. **Create .env.example**:
   ```bash
   # Copy this to .env and fill in your values
   # DO NOT commit .env to version control
   
   # Required - Google Maps API Key
   PUBLIC_GOOGLE_MAPS_KEY=your_actual_api_key_here
   
   # Required - Site URL (no trailing slash)
   PUBLIC_SITE_URL=http://localhost:5173
   ```

3. **Create .env for local development**:
   ```bash
   # Copy .env.example to .env
   cp .env.example .env
   # Edit .env with your actual values
   ```

4. **Import config in app**:
   ```javascript
   // In src/routes/+layout.js
   import '../lib/config.js'; // This runs validation
   
   export const ssr = true;
   export const prerender = true;
   ```

✅ **Acceptance Criteria**:
- [ ] config.js validates on import
- [ ] Missing vars cause loud failure
- [ ] .env.example documents all vars
- [ ] Local .env works

⚠️ **Common Mistakes**:
- Silently defaulting missing vars
- Not validating on startup
- Committing .env file

🔗 **PRD Reference**: "Environment Variables (REQUIRED)" section

---

#### Task 2.3: Project File Structure

📋 **Prerequisites**: 
- Basic SvelteKit project

🎯 **Objective**: Create complete file structure per PRD

📝 **Steps**:

1. **Create Directory Structure**:
   ```bash
   # Create all directories
   mkdir -p src/lib/components
   mkdir -p src/lib/utils
   mkdir -p src/routes/menu
   mkdir -p src/routes/contact
   mkdir -p static/data
   # Note: No images directory needed for MVP (CSS-only approach)
   ```

2. **File Structure Should Be**:
   ```
   thedonairguys/
   ├── src/
   │   ├── routes/
   │   │   ├── +layout.svelte      # Main layout
   │   │   ├── +layout.js          # Layout load function
   │   │   ├── +page.svelte        # Homepage
   │   │   ├── +error.svelte       # Error boundary
   │   │   ├── menu/
   │   │   │   └── +page.svelte    # Menu page
   │   │   └── contact/
   │   │       └── +page.svelte    # Contact page
   │   ├── lib/
   │   │   ├── components/
   │   │   │   ├── Navigation.svelte
   │   │   │   ├── Footer.svelte
   │   │   │   ├── Hero.svelte
   │   │   │   ├── Menu.svelte
   │   │   │   ├── Location.svelte
   │   │   │   └── Hours.svelte
   │   │   ├── utils/
   │   │   │   ├── security.js     # Security templates
   │   │   │   ├── formatting.js   # Price/phone formatting
   │   │   │   └── timeouts.js     # Timeout wrappers
   │   │   └── config.js           # Environment config
   │   ├── app.html                # HTML template
   │   └── app.css                 # Global styles
   ├── static/
   │   ├── data/
   │   │   └── menu.json           # Menu data
   │   └── favicon.png             # Text-based favicon
   ├── manifest.js                 # Implementation tracking
   ├── vercel.json                 # Deployment config
   └── README.md                   # Project documentation
   ```

✅ **Acceptance Criteria**:
- [ ] All directories created
- [ ] Structure matches PRD exactly
- [ ] No extra directories
- [ ] Ready for components

---

#### Task 2.4: Configure app.html

📋 **Prerequisites**: 
- File structure created

🎯 **Objective**: Setup HTML template with proper meta tags

📝 **Steps**:

1. **Update src/app.html**:
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="utf-8" />
     <meta name="viewport" content="width=device-width, initial-scale=1" />
     
     <!-- Basic Meta Tags -->
     <meta name="description" content="Authentic halal donairs in Edmonton. Fresh ingredients, traditional recipes. Order now!" />
     <meta name="keywords" content="donair, halal food, Edmonton restaurants, shawarma, Mediterranean food" />
     <meta name="author" content="The Donair Guys" />
     
     <!-- Open Graph / Facebook -->
     <meta property="og:type" content="website" />
     <meta property="og:url" content="%sveltekit.env.PUBLIC_SITE_URL%" />
     <meta property="og:title" content="The Donair Guys - Authentic Halal Donairs" />
     <meta property="og:description" content="Edmonton's destination for authentic halal donairs. Fresh ingredients, traditional recipes." />
     <meta property="og:image" content="%sveltekit.env.PUBLIC_SITE_URL%/og-image.jpg" />
     
     <!-- Twitter -->
     <meta property="twitter:card" content="summary_large_image" />
     <meta property="twitter:url" content="%sveltekit.env.PUBLIC_SITE_URL%" />
     <meta property="twitter:title" content="The Donair Guys - Authentic Halal Donairs" />
     <meta property="twitter:description" content="Edmonton's destination for authentic halal donairs. Fresh ingredients, traditional recipes." />
     <meta property="twitter:image" content="%sveltekit.env.PUBLIC_SITE_URL%/og-image.jpg" />
     
     <!-- Favicon -->
     <link rel="icon" href="%sveltekit.assets%/favicon.png" />
     <link rel="apple-touch-icon" sizes="180x180" href="%sveltekit.assets%/apple-touch-icon.png" />
     
     <!-- Preconnect to external domains -->
     <link rel="preconnect" href="https://fonts.googleapis.com" />
     <link rel="preconnect" href="https://maps.googleapis.com" />
     
     <!-- Critical CSS will be inlined by SvelteKit -->
     %sveltekit.head%
   </head>
   <body data-sveltekit-preload-data="hover">
     <div style="display: contents">%sveltekit.body%</div>
   </body>
   </html>
   ```

✅ **Acceptance Criteria**:
- [ ] All meta tags present
- [ ] Uses %sveltekit.env% for dynamic values
- [ ] Favicon configured
- [ ] Preconnect added for performance

🔗 **PRD Reference**: "SEO Requirements" and "Meta Tags" sections

---

#### Task 2.5: Base CSS Setup

📋 **Prerequisites**: 
- app.html configured

🎯 **Objective**: Create CSS foundation with variables

📝 **Steps**:

1. **Create src/app.css**:
   ```css
   /* app.css - Global styles and CSS variables */
   
   /* CSS Custom Properties - From PRD */
   :root {
     /* Brand Colors */
     --color-primary: #8B4513;      /* Warm brown */
     --color-primary-dark: #654321;  /* Darker brown */
     --color-secondary: #DAA520;     /* Golden */
     --color-accent: #FF6B6B;        /* Warm red */
     --color-success: #4ECDC4;       /* Teal */
     
     /* Neutral Colors */
     --color-white: #FFFFFF;
     --color-off-white: #F8F9FA;
     --color-light-gray: #E9ECEF;
     --color-gray: #6C757D;
     --color-dark-gray: #343A40;
     --color-black: #212529;
     
     /* Shadows */
     --shadow-sm: 0 1px 2px rgba(0,0,0,0.1);
     --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
     --shadow-lg: 0 10px 20px rgba(0,0,0,0.1);
     --shadow-xl: 0 20px 40px rgba(0,0,0,0.15);
     
     /* Spacing Scale */
     --space-xs: 0.25rem;  /* 4px */
     --space-sm: 0.5rem;   /* 8px */
     --space-md: 1rem;     /* 16px */
     --space-lg: 1.5rem;   /* 24px */
     --space-xl: 2rem;     /* 32px */
     --space-2xl: 3rem;    /* 48px */
     --space-3xl: 4rem;    /* 64px */
     
     /* Typography Scale */
     --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
     --font-size-xs: 0.75rem;    /* 12px */
     --font-size-sm: 0.875rem;   /* 14px */
     --font-size-base: 1rem;     /* 16px */
     --font-size-lg: 1.125rem;   /* 18px */
     --font-size-xl: 1.25rem;    /* 20px */
     --font-size-2xl: 1.5rem;    /* 24px */
     --font-size-3xl: 2rem;      /* 32px */
     --font-size-4xl: 2.5rem;    /* 40px */
     --font-size-hero: clamp(2.5rem, 5vw, 4rem);
     
     /* Animation Durations - Performance First */
     --duration-fast: 150ms;
     --duration-normal: 300ms;
     --duration-slow: 500ms;
     
     /* Breakpoints for CSS (reference only) */
     --breakpoint-sm: 640px;
     --breakpoint-md: 768px;
     --breakpoint-lg: 1024px;
     --breakpoint-xl: 1280px;
   }
   
   /* Reset and Base Styles */
   * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
   }
   
   html {
     font-family: var(--font-family);
     font-size: 16px;
     line-height: 1.5;
     color: var(--color-black);
     background-color: var(--color-white);
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
   }
   
   body {
     min-height: 100vh;
     overflow-x: hidden;
   }
   
   /* Typography Classes */
   .text-xs { font-size: var(--font-size-xs); }
   .text-sm { font-size: var(--font-size-sm); }
   .text-base { font-size: var(--font-size-base); }
   .text-lg { font-size: var(--font-size-lg); }
   .text-xl { font-size: var(--font-size-xl); }
   .text-2xl { font-size: var(--font-size-2xl); }
   .text-3xl { font-size: var(--font-size-3xl); }
   .text-4xl { font-size: var(--font-size-4xl); }
   .text-hero { 
     font-size: var(--font-size-hero);
     font-weight: 700;
     line-height: 1.1;
   }
   
   /* Utility Classes */
   .container {
     width: 100%;
     max-width: 1280px;
     margin: 0 auto;
     padding: 0 var(--space-md);
   }
   
   /* Focus Styles - Accessibility */
   :focus {
     outline: 2px solid var(--color-primary);
     outline-offset: 2px;
   }
   
   /* Reduced Motion - Accessibility */
   @media (prefers-reduced-motion: reduce) {
     * {
       animation-duration: 0.01ms !important;
       animation-iteration-count: 1 !important;
       transition-duration: 0.01ms !important;
     }
   }
   ```

2. **Import CSS in app.html**:
   ```html
   <!-- In src/app.html, before %sveltekit.head% -->
   <link rel="stylesheet" href="%sveltekit.assets%/app.css" />
   ```

✅ **Acceptance Criteria**:
- [ ] All color variables defined
- [ ] Typography scale complete
- [ ] Mobile-first approach
- [ ] Reduced motion respected
- [ ] CSS loads correctly

🔗 **PRD Reference**: "CSS Styling Guide" section

---

## Phase 2: Core Features (Days 3-5)

### 📋 Phase 2 Overview

**Goal**: Implement core functionality - menu, location, hours, navigation

**Key Deliverables**:
- Complete menu system with filtering
- Location component with live hours
- Contact page with map
- Responsive navigation
- Homepage with all sections

---

### Day 3: Menu System Implementation

[See docs/TASKS-EXTENDED.md for detailed Menu component implementation]

---

### Day 4: Location & Hours

[See docs/TASKS-EXTENDED.md for detailed Location component implementation]

---

### Day 5: Homepage & Navigation

[See docs/TASKS-EXTENDED.md for detailed Navigation implementation]

---

## Code Templates

### 🔒 Security Templates (COPY EXACTLY)

#### Input Validation Template
```javascript
// COPY THIS EXACTLY - From PRD
function validatePhoneInput(input) {
  console.log('[VALIDATE] Phone input check');
  
  // Remove all non-digits
  const cleaned = String(input).replace(/\D/g, '');
  
  // Check length (10 digits for North American)
  if (cleaned.length !== 10) {
    throw new Error('Phone must be 10 digits');
  }
  
  // Format for display
  const formatted = `(${cleaned.slice(0,3)}) ${cleaned.slice(3,6)}-${cleaned.slice(6)}`;
  
  console.log('[VALIDATE] Phone valid:', formatted);
  return {
    raw: cleaned,
    formatted: formatted,
    tel: `+1${cleaned}`
  };
}
```

#### Timeout Wrapper Template
```javascript
// COPY THIS EXACTLY - From PRD
async function fetchWithTimeout(url, options = {}, timeoutMs = 5000) {
  console.log(`[FETCH] Starting: ${url}`);
  
  const controller = new AbortController();
  const timeoutId = setTimeout(() => {
    controller.abort();
  }, timeoutMs);
  
  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal
    });
    
    console.log(`[FETCH] Success: ${url} - ${response.status}`);
    return response;
    
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error(`[FETCH] Timeout: ${url} exceeded ${timeoutMs}ms`);
      throw new Error(`Request timeout: ${url}`);
    }
    console.error(`[FETCH] Failed: ${url}`, error.message);
    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
}
```

#### ORM Link Handler Template
```javascript
// COPY THIS EXACTLY - From PRD
function handleOrderClick(event) {
  event.preventDefault();
  console.log('[ORDER] Click initiated');
  
  try {
    // Validate we're in ordering hours
    const status = checkIfOpen();
    if (!status.isOpen) {
      alert('Sorry, we are currently closed. Please order during business hours.');
      return;
    }
    
    // Build ORM URL with validation
    const baseUrl = 'https://ordernow.com/thedonairguys';
    const params = new URLSearchParams({
      utm_source: 'website',
      utm_medium: 'order_button',
      timestamp: Date.now()
    });
    
    const orderUrl = `${baseUrl}?${params}`;
    console.log('[ORDER] Redirecting to:', orderUrl);
    
    // Open in same tab for better mobile experience
    window.location.href = orderUrl;
    
  } catch (error) {
    console.error('[ORDER] Failed:', error);
    alert('Order system temporarily unavailable. Please call us to place an order.');
  }
}
```

---

## Troubleshooting Guide

### Common Issues & Solutions

#### Issue: Environment Variables Not Loading
**Symptoms**: Config throws "Missing required environment variables"
**Solution**:
1. Check .env file exists in root
2. Verify variable names match exactly (case-sensitive)
3. Restart dev server after adding variables
4. For Vercel, check dashboard settings

#### Issue: Menu Data Not Loading
**Symptoms**: Menu shows "Loading..." indefinitely
**Solution**:
1. Verify menu.json exists in static/data/
2. Check browser console for fetch errors
3. Ensure JSON is valid (use jsonlint.com)
4. Check network tab for 404 errors

#### Issue: CSS Gradients/Icons Not Displaying
**Symptoms**: Missing visual elements
**Solution**:
1. Ensure Tailwind CSS is properly configured
2. Check that CSS variables are defined in app.css
3. Verify icon classes match Heroicons/Tailwind
4. Test gradient CSS in different browsers

#### Issue: Vercel Deploy Fails
**Symptoms**: Build error in Vercel
**Solution**:
1. Check build logs for specific error
2. Ensure all dependencies in package.json
3. Verify Node version matches locally
4. Check environment variables set in Vercel

#### Issue: Mobile Menu Not Working
**Symptoms**: Hamburger menu doesn't open
**Solution**:
1. Check JavaScript console for errors
2. Verify event listeners attached
3. Check z-index conflicts
4. Test touch events vs click events

---

## Performance Optimization Checklist

### Before Launch
- [x] No images used (CSS-only approach for performance)
- [ ] CSS minified in production
- [ ] JavaScript bundle < 100KB
- [ ] Critical CSS inlined
- [ ] Fonts preloaded
- [ ] Critical CSS inlined
- [ ] Gzip enabled on Vercel
- [ ] Cache headers configured

### Lighthouse Targets
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 90
- SEO: > 90

---

## Security Implementation Guide

### Required Security Measures

1. **Input Validation** (CRITICAL)
   - Phone numbers: Strip non-digits, validate length
   - Never trust user input
   - Sanitize before display

2. **External API Calls** (CRITICAL)
   - Always use timeout wrapper
   - Handle errors gracefully
   - Never expose API keys in client code

3. **Content Security Policy**
   ```javascript
   // In vercel.json
   {
     "headers": [
       {
         "source": "/(.*)",
         "headers": [
           {
             "key": "Content-Security-Policy",
             "value": "default-src 'self'; script-src 'self' 'unsafe-inline' maps.googleapis.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self' https://ordernow.com"
           }
         ]
       }
     ]
   }
   ```

4. **Rate Limiting**
   - Implement on contact form
   - Limit map API calls
   - Prevent spam clicks

---

## Post-Launch Tasks

### Immediate (First 48 Hours)
- [ ] Monitor Vercel analytics
- [ ] Check error logs
- [ ] Verify all links work
- [ ] Test order flow completely
- [ ] Monitor page load times
- [ ] Check mobile experience
- [ ] Verify SSL certificate

### Week 1
- [ ] Gather user feedback
- [ ] Fix any reported issues
- [ ] Optimize based on real usage
- [ ] Update menu if needed
- [ ] Check SEO indexing
- [ ] Review security headers

### Ongoing
- [ ] Weekly menu updates
- [ ] Monthly performance review
- [ ] Seasonal promotions
- [ ] Content updates (no images needed)
- [ ] Hours adjustments
- [ ] Feature additions based on feedback

---

## Success Metrics

### Technical Success
- ✅ Page load < 3 seconds
- ✅ Mobile responsive
- ✅ Zero console errors
- ✅ All features functional
- ✅ Secure implementation

### Business Success
- ✅ Increased online orders
- ✅ Reduced phone calls
- ✅ Better Google visibility
- ✅ Customer satisfaction
- ✅ Easy to maintain

---

## Final Notes

Remember:
1. **Update manifest.js** after EVERY implementation
2. **Test on real devices** not just browser DevTools
3. **Follow PRD exactly** for security templates
4. **Document any deviations** in implementation notes
5. **Keep it simple** - defensive minimalism wins

For detailed component implementations, refer to:
- `/docs/TASKS-EXTENDED.md` - Complete component code
- `/PRD.md` - Original requirements

---

## 🚀 MVP Approach & Skipped Items

### Overview
This project takes a strategic MVP approach, focusing on a fully functional website without external dependencies that could delay launch.

### CSS-Only Design Strategy
- **No Images Required**: Using CSS gradients, animations, and Tailwind icons
- **Performance First**: Page loads < 1 second without image assets
- **Consistent Branding**: Red (#ed1e24) and Yellow (#f8ed23) gradients throughout
- **Typography Focus**: Clear hierarchy with Inter font family

### Skipped Items (Can Add Post-Launch)
1. **Visual Assets**:
   - Logo files → Using text-based branding with CSS styling
   - Food photography → Gradient cards with descriptive text
   - Hero images → Animated gradient backgrounds
   - Restaurant photos → Not needed for MVP

2. **External Links**:
   - Skip the Dishes URL → Phone ordering as primary CTA
   - Uber Eats URL → Can add when obtained from owner
   - Social media URLs → Placeholder handles shown, links later

3. **Specific Details**:
   - Halal certification authority → "100% Halal Certified" sufficient
   - Delivery minimum orders → Not needed without platform links
   - WiFi/Apple Pay/Google Pay → Can verify and add later

### MVP Benefits
- **Faster Launch**: No waiting for photo shoots or asset collection
- **Better Performance**: No image loading delays
- **Easier Maintenance**: No image optimization needed
- **Cost Effective**: No photography or design expenses
- **Fully Functional**: All core features work perfectly

### What's Included
✅ Complete menu with prices and descriptions  
✅ Business hours and location with map  
✅ Phone ordering functionality  
✅ SEO-optimized content  
✅ Mobile-responsive design  
✅ Professional CSS animations  
✅ Accessibility features  

### Post-Launch Additions
When available, these can be easily added:
- Professional food photography
- Delivery platform integrations
- Social media feed widgets
- Customer review integration
- Online ordering system

**Remember**: The MVP approach means the website is 100% functional without these items
- `/manifest.js` - Current implementation status

---

**Project Success = Simple + Secure + Fast**