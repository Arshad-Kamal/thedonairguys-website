# The Donair Guys Website PRD

## Project Overview

### Business Context
- **Name**: The Donair Guys
- **Type**: 100% Halal Fast Food Restaurant
- **Location**: 6609 177 St NW, Edmonton, AB T5T 4K3
- **Founded**: 2018
- **Core Offering**: Halal Donairs, Pizza, Burgers, Poutine, Wings, Salads

### Technical Mandate
- **Framework**: SvelteKit with Svelte 5
- **Language**: JavaScript only (NO TypeScript - defensive minimalism)
- **Deployment**: Vercel (zero-configuration deployment)
- **Approach**: Defensive Minimalism with Controlled Beauty
- **Design Philosophy**: Visual impact through simplicity, not complexity
- **Animation Strategy**: Performance-first animations using CSS transforms and Svelte transitions
- **Security**: Fail-loud, timeout everything, validate all inputs
- **Complexity**: One feature = One file, max 500 lines per file

### Brand Guidelines
- **Primary Color**: #ed1e24 (Red)
- **Secondary Color**: #f8ed23 (Yellow) 
- **Supporting Colors**: Use darker shades for contrast when needed
- **Background**: Clean white (#ffffff) with strategic color blocks
- **Typography**: Modern sans-serif (Inter or similar)
- **Tone**: Bold, energetic, appetizing, memorable

## Design Cohesion Guidelines

### Visual Consistency Throughout
1. **Every page must include**:
   - At least one gradient element (button, badge, or section)
   - Yellow accent in some form
   - Consistent shadow styles
   - Animated elements on scroll
   - Bold typography for headlines

2. **Section Transitions**:
   - Use wave dividers or diagonal cuts between sections
   - Alternate white backgrounds with colored accents
   - Maintain visual flow with consistent spacing

3. **Brand Expression**:
   - Red = Action, urgency, appetite (CTAs, prices, alerts)
   - Yellow = Joy, highlight, attention (badges, accents, features)
   - Gradients = Premium, special, important elements
   - White = Breathing space, content focus

4. **Interaction Patterns**:
   - All buttons must have hover animations
   - Cards lift and show shadows on hover
   - Links have sliding underlines or color transitions
   - Images zoom or pan slightly on hover
   - Form fields have focus animations

## Quick Design Consistency Checklist

Before implementing any page or component, verify:
- [ ] **Red is visible** - At least 2 red elements per viewport
- [ ] **Yellow accent exists** - At least 1 yellow element visible
- [ ] **One gradient element** - Button, badge, or section
- [ ] **Animation present** - At least 1 animated element (can be subtle)
- [ ] **Bold headlines** - Large, impactful typography
- [ ] **White space** - Clean separation between sections
- [ ] **Shadows consistent** - Using defined shadow variables
- [ ] **Mobile simplified** - Reduced effects for performance
- [ ] **Performance verified** - 60fps with Chrome DevTools
- [ ] **Errors fail loud** - Console.error with clear location

This ensures brand consistency without over-complicating.

### SEO Implementation

#### Meta Tags (app.html)
```html
<!-- COPY EXACTLY - Update content only -->
<meta name="description" content="Edmonton's favorite 100% Halal donairs, pizza, burgers & more. Family-owned since 2018. Order online or call 780-123-4567. Located in Callingwood.">
<meta property="og:title" content="The Donair Guys - 100% Halal Fast Food">
<meta property="og:description" content="Fresh daily Halal donairs, pizza, burgers in West Edmonton">
<meta property="og:image" content="%sveltekit.assets%/og-image.jpg">
<meta property="og:type" content="restaurant">
```

#### Schema Markup (Homepage only)
```html
<!-- Add to +page.svelte - COPY EXACTLY -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "The Donair Guys",
  "image": "%sveltekit.assets%/logo.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "6609 177 St NW",
    "addressLocality": "Edmonton",
    "addressRegion": "AB",
    "postalCode": "T5T 4K3"
  },
  "telephone": "+17801234567",
  "servesCuisine": "Middle Eastern, Fast Food",
  "priceRange": "$",
  "openingHours": "Mo-Su 11:00-22:00"
}
</script>
```

## CSS Styling Guide

### Color Palette
```css
:root {
  /* Brand Colors */
  --primary: #ed1e24;
  --primary-dark: #d01118;
  --secondary: #f8ed23;
  --secondary-dark: #e6d900;
  
  /* Light Theme Base */
  --bg-white: #ffffff;
  --bg-light: #fafafa;
  --bg-yellow-tint: #fffdf0;
  --bg-red-tint: #fff5f5;
  
  /* Text */
  --text-primary: #1a1a1a;
  --text-secondary: #4a4a4a;
  --text-light: #666666;
  
  /* Accent Colors */
  --accent-red-light: #ff6b6b;
  --accent-yellow-light: #ffd93d;
  --accent-green: #2ecc71;
  
  /* Gradients */
  --gradient-primary: linear-gradient(135deg, #ed1e24, #ff6b6b);
  --gradient-secondary: linear-gradient(135deg, #f8ed23, #ffd93d);
  --gradient-brand: linear-gradient(135deg, #ed1e24, #f8ed23);
  
  /* Borders */
  --border-light: #e5e5e5;
  --border-red: #ffcfcf;
  --border-yellow: #fff3a3;
  
  /* Shadows */
  --shadow-sm: 0 2px 8px rgba(0,0,0,0.08);
  --shadow-md: 0 4px 16px rgba(0,0,0,0.12);
  --shadow-lg: 0 8px 32px rgba(0,0,0,0.16);
  --shadow-red: 0 8px 24px rgba(237, 30, 36, 0.25);
  --shadow-yellow: 0 8px 24px rgba(248, 237, 35, 0.2);
  --shadow-hover: 0 12px 32px rgba(0,0,0,0.2);
}
```

### Typography Scale
```css
/* Based on 16px base, 1.25 scale */
.text-xs { font-size: 0.75rem; }    /* 12px */
.text-sm { font-size: 0.875rem; }   /* 14px */
.text-base { font-size: 1rem; }     /* 16px */
.text-lg { font-size: 1.25rem; }    /* 20px */
.text-xl { font-size: 1.5rem; }     /* 24px */
.text-2xl { font-size: 2rem; }      /* 32px */
.text-3xl { font-size: 2.5rem; }    /* 40px */
.text-4xl { font-size: 3rem; }      /* 48px */
.text-hero { 
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  font-weight: 900;
  line-height: 0.9;
}
```

### Component Styling Examples

#### Gradient Primary Button
```css
.btn-primary {
  background: var(--gradient-primary);
  color: white;
  padding: 1.2rem 2.5rem;
  border: none;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.btn-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--gradient-brand);
  opacity: 0;
  z-index: -1;
  transition: opacity 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: var(--shadow-red);
}

.btn-primary:hover::before {
  opacity: 1;
}
```

#### Dynamic Menu Card
```css
.menu-card {
  background: var(--bg-white);
  border: 2px solid transparent;
  border-radius: 20px;
  padding: 1.5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.menu-card::before {
  content: '';
  position: absolute;
  top: -2px;
  right: -2px;
  bottom: -2px;
  left: -2px;
  background: var(--gradient-brand);
  border-radius: 20px;
  opacity: 0;
  z-index: -1;
  transition: opacity 0.3s ease;
}

.menu-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: var(--shadow-hover);
}

.menu-card:hover::before {
  opacity: 1;
}

.menu-card .price-badge {
  background: var(--gradient-primary);
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 30px;
  font-weight: 700;
  font-size: 1.2rem;
  display: inline-block;
  box-shadow: var(--shadow-red);
}
```

#### Animated Section Divider
```css
.wave-divider {
  position: relative;
  height: 100px;
  overflow: hidden;
  background: var(--secondary);
}

.wave-divider svg {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.wave-divider path {
  fill: var(--bg-white);
  animation: wave 20s linear infinite;
}

@keyframes wave {
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
}
```

#### Hero Badge
```css
.halal-badge {
  background: var(--gradient-secondary);
  color: var(--text-primary);
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 900;
  font-size: 1.2rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: var(--shadow-yellow);
  animation: float 3s ease-in-out infinite;
  position: relative;
}

.halal-badge::after {
  content: '✓';
  position: absolute;
  top: -5px;
  right: -5px;
  background: var(--accent-green);
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  box-shadow: 0 4px 12px rgba(46, 204, 113, 0.4);
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
```

### Caching Strategy (Simple)

```javascript
// svelte.config.js - Pre-rendering for performance
export default {
  kit: {
    adapter: adapter({
      runtime: 'nodejs20.x'
    }),
    prerender: {
      entries: ['/', '/menu', '/contact'] // Static pages
    },
    serviceWorker: {
      register: false // NO service worker (defensive minimalism)
    }
  }
};
```

Caching headers are configured in vercel.json (see Deployment Configuration section above)

## Core Features (CRITICAL Priority)

### 1. Menu Display System
**Purpose**: Display complete menu with categories, items, and prices
**Data Source Strategy**:
- **Primary**: Static JSON file (menu.json) in /static directory
- **Fallback**: Phone ordering message if JSON fails to load
- **Future**: API integration possible post-launch (not in MVP)
**Implementation Requirements**:
- Menu data from versioned menu.json file
- JSON validation on load with clear error if malformed
- Categories: Donairs, Pizza, Burgers, Poutine, Wings, Salads
- Each item must have: name, description, price, halal certification badge
- Image loading with timeout (5 seconds max)
- Fail loudly if menu data unavailable
- Error message: "Menu temporarily unavailable. Please call [phone] to order"

### 2. Location & Hours Module
**Purpose**: Display restaurant location, hours, and contact info
**Implementation Requirements**:
- Static hours data in config file
- Google Maps integration with API key validation
- Phone number click-to-call functionality
- Address click-to-navigate functionality
- Timeout for map load (10 seconds)

### Media Requirements
- **Hero Video** (Desktop only):
  - Format: MP4 (H.264), max 10MB
  - Resolution: 1920x1080
  - No audio track
  - Poster image required
  - Lazy load with intersection observer
- **Hero Image** (Mobile fallback):
  - Format: WebP with JPEG fallback
  - Max 200KB
  - Responsive sizes via srcset
- **Menu Images**:
  - Format: WebP with JPEG fallback
  - Max 100KB per image
  - Lazy load all below fold

---

## Design & Animation Requirements

### Visual Design Philosophy
**Approach**: Bold, appetizing fast-casual aesthetic with vibrant energy
- Clean white base with strategic pops of brand colors
- Bold use of red (#ed1e24) and yellow (#f8ed23) throughout
- Gradient accents and color-blocked sections
- Full-width hero sections with vibrant food photography
- Dynamic shadows and bold hover effects
- Playful yet professional design elements
- Mobile-first responsive design with thumb-friendly interactions

### Animation Strategy (Performance-First)
**Principles**:
- Use only CSS transforms and opacity (60fps guaranteed)
- Svelte built-in transitions over JavaScript animations
- No complex scroll-jacking or parallax on mobile
- Respect prefers-reduced-motion settings
- Clear duration limits for all animation types

### Animation Duration Limits
- **User-triggered**: 200-300ms max (hover, click, focus)
- **Scroll reveals**: 400-600ms max (content appearing)
- **Page transitions**: 400ms max
- **Ambient/decorative**: 3-20s (subtle background effects only)
- **Loading indicators**: Continuous until complete

### Approved Animation Patterns

#### 1. Hero Section Animations
```css
/* Simple fade-in with scale - COPY EXACTLY */
.hero-content {
  animation: heroReveal 0.8s ease-out forwards;
}

@keyframes heroReveal {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
```

#### 2. Menu Item Hover Effects
```css
/* Card lift on hover - COPY EXACTLY */
.menu-item {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.menu-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.15);
}
```

#### 3. Scroll-Triggered Reveals (Intersection Observer)
```javascript
// scroll-reveal.js - COPY EXACTLY
export function scrollReveal(node, options = {}) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, ...options });

  observer.observe(node);
  
  return {
    destroy() {
      observer.disconnect();
    }
  };
}
```

#### 4. Button Interactions
```svelte
<!-- OrderButton.svelte snippet -->
<button 
  class="order-btn"
  on:click={handleOrderClick}
  disabled={!isOpen}
>
  {#if loading}
    <span class="spinner" />
  {:else}
    Order Online
  {/if}
</button>

<style>
  .order-btn {
    background: var(--primary);
    transition: all 0.2s ease;
    position: relative;
    overflow: hidden;
  }
  
  .order-btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(237, 30, 36, 0.3);
  }
  
  .order-btn:active {
    transform: translateY(0);
  }
</style>
```

### Visual Elements

#### 1. Hero Section
- Full viewport height with video/image background
- Gradient overlay for text readability
- Animated tagline appearance
- Floating "100% Halal" badge
- Smooth scroll indicator

#### 2. Menu Grid
- Staggered card entrance (max 50ms delay between items)
- High-quality food photography (lazy loaded)
- Price badges with subtle glow effect
- Category filter with smooth transitions

#### 3. Location Section
- Split layout: Map on left, info on right (desktop)
- Stacked on mobile with map first
- Animated hour indicators (current day highlighted)
- Pulsing map marker

#### 4. Micro-Interactions
- Button hover states (lift + shadow)
- Link underline animations
- Form field focus effects
- Loading spinner for async operations
- Success/error toast notifications

### Performance Constraints
- No animation libraries over 50KB
- CSS animations preferred over JS
- GPU-accelerated properties only
- Debounce scroll events (100ms minimum)
- Single RAF loop for multiple animations
- Image loading with blur-up effect

---

## Technical Architecture

### Browser Support (Minimal)
- Chrome 120+ (latest 2 versions)
- Firefox 120+ (latest 2 versions)
- Safari 16+ (latest 2 versions)
- Edge 120+ (latest 2 versions)
- Mobile browsers: Chrome/Safari on iOS/Android
- NO Internet Explorer support required

### Performance Budgets
- Initial JS: < 150KB (gzipped)
- Initial CSS: < 50KB (gzipped)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Total page weight: < 2MB
- Core Web Vitals: MUST pass all thresholds

### SEO Requirements (Minimal)
- Meta tags: title (60 chars), description (160 chars)
- Schema markup: Restaurant type with menu
- Open Graph tags for social sharing
- Mobile-friendly responsive design
- Clean URL structure (/menu, /contact)
- robots.txt and sitemap.xml
- Canonical URLs for all pages
- Alt text for all images

### File Structure (STRICT)
```
/src
  /routes
    +page.svelte          [Homepage - max 300 lines]
    +layout.svelte        [Base layout - max 200 lines]
    menu/+page.svelte     [Menu page - max 400 lines]
    contact/+page.svelte  [Contact page - max 300 lines]
  /lib
    /components
      Header.svelte       [max 150 lines]
      Footer.svelte       [max 150 lines]
      MenuItem.svelte     [max 100 lines]
      HoursDisplay.svelte [max 100 lines]
      OrderButton.svelte  [max 50 lines]
      HeroSection.svelte  [max 200 lines]
      ScrollReveal.svelte [max 50 lines]
    /stores
      menu.js            [Menu state - max 200 lines]
      ui.js              [UI state for animations - max 100 lines]
    /utils
      validation.js      [Input validation - max 100 lines]
      timeouts.js        [Timeout wrappers - max 100 lines]
      animations.js      [Animation utilities - max 150 lines]
    /security
      sanitize.js        [Input sanitization - max 150 lines]
  /static
    manifest.js          [REQUIRED - Implementation status]
    menu.json            [Menu data - versioned]
    /images              [Menu item images]
    /videos              [Hero background video - max 10MB]
app.css                  [Global styles - max 300 lines]
```

### Caching Strategy (Simple)

```javascript
// svelte.config.js - Basic static asset caching
kit: {
  serviceWorker: {
    register: false // NO service worker (defensive minimalism)
  },
  prerender: {
    entries: ['/', '/menu', '/contact'] // Pre-render static pages
  }
}
```

```
# static/_headers (Netlify/Vercel)
/images/*
  Cache-Control: public, max-age=31536000

/menu.json
  Cache-Control: public, max-age=3600

/*.js
/*.css
  Cache-Control: public, max-age=86400
```

### Security Templates (COPY EXACTLY)

#### Input Validation
```javascript
// validation.js - COPY EXACTLY
export function validatePhoneInput(raw) {
  console.log('[VALIDATE] Phone input:', typeof raw);
  
  if (!raw || typeof raw !== 'string') {
    throw new Error('Phone must be string');
  }
  
  const cleaned = raw.replace(/\D/g, '').slice(0, 15);
  
  if (cleaned.length < 10) {
    throw new Error('Phone too short');
  }
  
  console.log('[VALIDATE] Phone cleaned:', cleaned.length);
  return cleaned;
}
```

#### ORM Link Handler
```javascript
// OrderButton.svelte - COPY EXACTLY
export function handleOrderClick(isOpen) {
  console.log('[ORDER] Click attempt, open:', isOpen);
  
  if (!isOpen) {
    throw new Error('CLOSED: Orders only during business hours');
  }
  
  const ormUrl = import.meta.env.PUBLIC_ORM_URL;
  
  if (!ormUrl || !ormUrl.startsWith('https://')) {
    throw new Error('ORDER SYSTEM: Invalid URL configuration');
  }
  
  console.log('[ORDER] Redirecting to ORM');
  window.open(ormUrl, '_blank', 'noopener,noreferrer');
}
```

#### API Timeout Wrapper
```javascript
// timeouts.js - COPY EXACTLY
export async function fetchWithTimeout(url, options = {}, timeoutMs = 5000) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  
  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal
    });
    return response;
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new Error(`TIMEOUT: ${url} exceeded ${timeoutMs}ms`);
    }
    throw error;
  } finally {
    clearTimeout(timeout);
  }
}
```

### Data Structure (Static JSON)

```json
// static/menu.json - EXAMPLE STRUCTURE
{
  "version": "1.0.0",
  "lastUpdated": "2024-01-15",
  "categories": [
    {
      "id": "donairs",
      "name": "Donairs",
      "displayOrder": 1,
      "items": [
        {
          "id": "d1",
          "name": "Regular Donair",
          "description": "Classic beef donair with sweet sauce",
          "price": 12.99,
          "isAvailable": true,
          "image": "/images/regular-donair.jpg"
        }
      ]
    }
  ]
}
```

**Data Management Requirements**:
- Menu updates via JSON file replacement in GitHub
- Vercel automatically redeploys on git push
- Version tracking for cache busting
- Validate JSON structure on load
- Clear error if JSON malformed
- NO dynamic menu updates
- Menu cached for 1 hour on CDN (see vercel.json)

### Environment Variables (REQUIRED)

```bash
# .env.local (for local development)
PUBLIC_GOOGLE_MAPS_KEY=your_dev_key_here
PUBLIC_ORM_URL=https://ordering-test.platform.com/donairguys
PUBLIC_PHONE_NUMBER=7801234567
PUBLIC_SITE_URL=http://localhost:5173

# Production variables set in Vercel Dashboard
# All PUBLIC_ prefixed variables are exposed to client
# Validation on startup REQUIRED - fail loud if missing
```

---

## Implementation Checklist

### Phase 1: Foundation (Days 1-2)
- [ ] Setup SvelteKit with Svelte 5 (JavaScript only)
- [ ] Initialize Git repository
- [ ] Connect GitHub repo to Vercel
- [ ] Configure Vercel environment variables
- [ ] Create manifest.js with all features as "NOT_STARTED"
- [ ] Implement environment validation (fail on missing)
- [ ] Setup basic routing structure
- [ ] Configure CSS variables and base styles

### Phase 2: Core Features (Days 3-5)
- [ ] Create static menu.json with test data
- [ ] Build menu display with error handling
- [ ] Implement location/hours components
- [ ] Add contact page with map
- [ ] Setup responsive grid layouts

### Phase 3: Visual Design (Days 6-8)
- [ ] Implement hero sections with media
- [ ] Add scroll-triggered animations
- [ ] Create hover effects for cards
- [ ] Build loading states
- [ ] Apply brand colors throughout

### Phase 4: Integration & Polish (Days 9-10)
- [ ] Connect ORM link with hours checking
- [ ] Integrate Google Maps
- [ ] Add phone click handlers
- [ ] Test all timeouts and error states
- [ ] Optimize images and performance

### Phase 5: Testing & Launch (Days 11-12)
- [ ] Cross-browser testing
- [ ] Mobile device testing  
- [ ] Performance audit (Lighthouse)
- [ ] SEO checklist completion
- [ ] Final manifest.js update
- [ ] Deploy to Vercel production
- [ ] Configure custom domain
- [ ] Verify SSL certificate
- [ ] Test preview deployments
- [ ] Monitor initial traffic

---

## Error Handling Strategy

### User-Facing Errors
```javascript
// Standard error format - COPY EXACTLY
function showError(title, userMessage, technicalError) {
  console.error(`[ERROR] ${title}:`, technicalError);
  return {
    title,
    message: userMessage,
    action: "Call us at 780-123-4567"
  };
}

// Example usage:
showError(
  "Menu Unavailable",
  "Our online menu is temporarily down",
  error.message
);
```

### Error Priority
1. **Menu fails**: Show phone number prominently
2. **Map fails**: Show text address
3. **Images fail**: Show alt text
4. **ORM unavailable**: Disable button, show hours
5. **Any API timeout**: Fallback to static content

### NO External Error Tracking
- Console.error for all errors (local debugging only)
- No Sentry, Rollbar, or analytics (defensive minimalism)
- User sees friendly message + phone number always

---

## Performance Limits

| Resource | Limit | Action if Exceeded |
|----------|-------|-------------------|
| Page Load | 3 seconds | Show loading spinner |
| API/JSON Load | 5 seconds | Show timeout error |
| Image Load | 10 seconds | Show alt text |
| Map Load | 10 seconds | Show text address |
| Menu Items | 200 max | Simple pagination |
| Hero Video | 10MB max | Use image fallback |
| Hero Image | 200KB max | Optimize further |
| Menu Image | 100KB max | Reduce quality |
| Animation FPS | 60fps min | Disable animations |
| Concurrent Animations | 5 max | Queue or skip |
| Scroll Debounce | 100ms | Throttle handler |

## Animation Performance Monitoring

```javascript
// performance-monitor.js - COPY EXACTLY
export function monitorAnimations() {
  let frameCount = 0;
  let lastTime = performance.now();
  
  function checkFPS() {
    frameCount++;
    const currentTime = performance.now();
    
    if (currentTime >= lastTime + 1000) {
      const fps = Math.round(frameCount * 1000 / (currentTime - lastTime));
      
      if (fps < 30) {
        console.error(`[PERF] Low FPS: ${fps}`);
        document.body.classList.add('reduce-animations');
      }
      
      frameCount = 0;
      lastTime = currentTime;
    }
    
    requestAnimationFrame(checkFPS);
  }
  
  // Only monitor if animations enabled
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    checkFPS();
  }
}

// Initialize in app.html or root layout
// Call monitorAnimations() after DOM ready
```

### CSS for Reduced Animations
```css
/* app.css - Fallback for poor performance */
.reduce-animations * {
  animation-duration: 0.01ms !important;
  animation-iteration-count: 1 !important;
  transition-duration: 0.01ms !important;
}
```

---

## Content Requirements

### Homepage
1. **Hero Section** (Full viewport height)
   - Background: Split design - 60% vibrant food video/image, 40% solid yellow
   - Diagonal or wave separator between sections
   - Bold animated headline: "Edmonton's Favorite Halal Donairs"
   - Subheadline with typewriter effect on yellow background
   - Floating "100% Halal Certified" badge with bounce animation
   - CTA buttons: "Order Now" (gradient red) and "View Menu" (gradient yellow)
   - Animated scroll indicator with pulsing effect

2. **Feature Cards** (3-column grid on colored background)
   - Alternating red and yellow gradient backgrounds
   - White cards with bold colored shadows
   - Icons with rotation animations on hover
   - "Fresh Daily" with spinning clock icon
   - "100% Halal" with pulsing checkmark
   - "Family Owned" with beating heart icon
   - Cards slide up with staggered timing on scroll

3. **Menu Preview** 
   - Wave-pattern section divider (yellow to white)
   - "Fan Favorites" with gradient text effect
   - Menu cards with gradient borders on hover
   - Food images with zoom effect on hover
   - Prices in bold gradient badges
   - "See Full Menu" button with arrow sliding animation

4. **About Section**
   - Diagonal split: Story on red background, image on white
   - "Since 2018" in large outlined text as background element
   - Text slides in from left, image from right
   - Parallax scrolling brand pattern in background

5. **Location Preview**
   - Yellow accent wall behind map
   - Custom animated map marker (pulsing red pin)
   - Hours card with gradient shadow
   - Phone number with jiggle animation on hover
   - "Get Directions" button with sliding background

### Menu Page
1. **Hero Banner** (40vh height)
   - Gradient overlay (red to yellow) over food collage
   - Bold "Our Menu" with 3D text effect
   - "100% Halal" badge rotating slowly
   - Animated food icons floating in background

2. **Category Navigation** (Sticky with blur backdrop)
   - Pills with gradient backgrounds
   - Active category scales up slightly
   - Smooth sliding underline between categories
   - Background blur effect when scrolling

3. **Menu Grid**
   - Alternating white and light yellow row backgrounds
   - Menu item cards with:
     - Image with Ken Burns effect on hover
     - Name in bold with red underline on hover
     - Description with fade-in animation
     - Price in gradient pill with pulse effect
     - Halal icon with green glow
   - Cards tilt slightly on hover (3D effect)
   - Staggered entrance with spring animation

4. **Floating Order Button**
   - Gradient background with wave animation
   - Scales up when scrolling stops
   - Bounces when becoming available
   - Disabled state with grayscale effect

5. **Footer CTA Section**
   - Red background with pattern overlay
   - "Can't decide? Call us!" in bold yellow
   - Phone number with shake animation on hover
   - Operating hours in contrasting cards

### Contact Page
1. **Hero Split Layout**
   - Left: Map with animated route drawing
   - Right: Bold gradient background (yellow to red)
   - Contact info overlaid on gradient side
   - Parallax effect between sections on scroll

2. **Contact Card** (Glass effect over gradient)
   - Semi-transparent white with backdrop blur
   - Gradient border animation
   - Address with bouncing location icon
   - Phone with gradient button and ripple effect
   - Email with slide-in underline on hover
   - Social icons with rotation on hover

3. **Hours Grid**
   - Cards for each day with gradient shadows
   - Current day with animated gradient background
   - "Open Now" badge with pulsing glow
   - "Closed" in red with strikethrough animation
   - Time slots with staggered fade-in

4. **Action Buttons Section**
   - "Order Online" with liquid gradient animation
   - "Call Now" with phone icon jumping
   - Buttons grow and tilt on hover
   - Background pattern of food illustrations

5. **Community Section**
   - Full-width yellow background with wave edges
   - "Since 2018" as large watermark text
   - Edmonton skyline silhouette animation
   - Testimonial cards with gradient shadows
   - Local awards/recognition badges floating

---

## Deployment Configuration (Vercel)

### Vercel Setup
```javascript
// svelte.config.js - MINIMAL CONFIG
import adapter from '@sveltejs/adapter-vercel';

const config = {
  kit: {
    adapter: adapter({
      runtime: 'nodejs20.x' // Stable Node version
    })
  }
};

export default config;
```

### Environment Variables (Vercel Dashboard)
```bash
# Production Environment Variables
PUBLIC_GOOGLE_MAPS_KEY=your_production_key
PUBLIC_ORM_URL=https://ordering.platform.com/donairguys
PUBLIC_PHONE_NUMBER=7801234567
PUBLIC_SITE_URL=https://thedonairguys.ca

# Vercel automatically provides:
# VERCEL_URL - deployment URL
# VERCEL_ENV - production/preview/development
```

### Caching Headers (vercel.json)
```json
{
  "headers": [
    {
      "source": "/images/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/menu.json",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=3600, s-maxage=86400"
        }
      ]
    },
    {
      "source": "/(.*).js",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=86400, immutable"
        }
      ]
    }
  ]
}
```

### Deployment Process
1. **Connect GitHub Repository**
   - Link GitHub account to Vercel
   - Select repository
   - Vercel auto-detects SvelteKit

2. **Configure Build Settings**
   - Framework Preset: SvelteKit (auto-detected)
   - Build Command: `npm run build` (default)
   - Output Directory: (leave empty - auto)
   - Install Command: `npm install` (default)

3. **Environment Variables**
   - Add all PUBLIC_ variables in Vercel dashboard
   - Variables available during build and runtime

4. **Deploy**
   - Automatic deployment on git push
   - Preview deployments for pull requests
   - Instant rollback capability

### Vercel Features Utilized
- **Edge Network**: Global CDN for static assets
- **Serverless Functions**: For dynamic routes
- **Preview Deployments**: Test before production
- **Analytics**: Basic traffic monitoring (free tier)
- **Automatic HTTPS**: SSL certificate included

### Vercel Limitations (Defensive Minimalism Compatible)
- **NO WebSockets**: Serverless nature prevents socket.io
- **NO Long-running processes**: 10-second function timeout
- **NO Server-side state**: Each request is isolated
- **NO File system writes**: Read-only except /tmp
- **Perfect for our needs**: Simple restaurant website

### Domain Setup
1. Add custom domain in Vercel dashboard
2. Update DNS records:
   - A record: 76.76.21.21
   - CNAME: cname.vercel-dns.com
3. Automatic SSL certificate provisioning

### Vercel Free Tier Limits (More than enough)
- 100GB bandwidth/month
- 100 hours build time/month  
- Unlimited static requests
- 1M serverless function executions
- Perfect for restaurant website traffic

---

## Mobile-First Design Requirements

### Touch Interactions
- Minimum tap target: 44x44px
- Swipe gestures for image galleries only
- No hover-dependent functionality
- Thumb-friendly navigation (bottom 2/3 of screen)

### Mobile Performance
- Reduce gradient complexity to solid colors
- Disable wave/diagonal animations
- Simplify hover effects to tap effects
- Use static backgrounds instead of patterns
- Reduce simultaneous animations to 3 max
- Lazy load all images below fold
- Compress hero images to 200KB max mobile
- Use srcset for responsive images

### Mobile-Specific Adjustments
- Gradient buttons → Solid color with shadow
- Wave dividers → Simple straight edges
- Diagonal sections → Stacked rectangles
- Floating elements → Fixed position
- Complex animations → Simple fades

### Responsive Breakpoints
- Mobile: 320px - 768px
- Tablet: 768px - 1024px  
- Desktop: 1024px+
- Max content width: 1400px

---

## Success Metrics

1. **Page Load**: < 3 seconds on 3G
2. **First Contentful Paint**: < 1.5 seconds  
3. **Time to Interactive**: < 3.5 seconds
4. **Animation Performance**: 60fps on 90% of devices
5. **Error Rate**: < 0.1% for timeouts
6. **Availability**: 99.9% uptime (Vercel SLA)
7. **Mobile Usage**: Optimized for 100% mobile
8. **Order Path**: < 3 clicks to ORM link
9. **Lighthouse Score**: 90+ on all metrics
10. **Core Web Vitals**: Pass all thresholds
11. **Deployment Speed**: < 60 seconds (Vercel)

---

## Forbidden Patterns

### NEVER Use:
1. Mock menu data without loud warnings
2. Hardcoded prices in components
3. TODO comments
4. Placeholder images without fallback
5. Infinite scroll
6. Complex parallax on mobile
7. JavaScript animation libraries (GSAP, Anime.js, etc.)
8. ScrollSmoother or fake scroll implementations
9. Canvas animations or WebGL
10. Multiple RAF loops
11. Deep component nesting (>3 levels)
12. Dynamic imports without error handling
13. LocalStorage for critical data
14. Animations over 600ms for user actions
15. More than 5 simultaneous animations
16. Autoplay videos with sound
17. Colors outside brand palette (#ed1e24, #f8ed23, grays)
18. More than 3 font weights
19. Gradient text on body copy (headers only)
20. Animation on mobile that drops below 30fps

### ALLOWED Animations:
1. CSS transforms and opacity only
2. Svelte built-in transitions (fade, fly, slide)
3. Intersection Observer for scroll triggers
4. Single RAF loop if needed
5. CSS animations under 300ms for interactions
6. Smooth scroll with CSS scroll-behavior
7. Simple hover effects
8. Loading spinners
9. Image lazy loading with blur-up
10. Staggered reveals (max 300ms total)

### ALWAYS Include:
1. Timeout on every external call
2. Validation on every input
3. Manifest.js updates
4. Clear error messages
5. Phone ordering fallback
6. Loading states
7. Error boundaries
8. Simple, flat structure
9. Loud failure modes
10. Complete implementations
11. prefers-reduced-motion checks
12. Animation performance monitoring
13. Mobile-first approach
14. Image optimization
15. Proper meta tags for SEO

---

## Maintenance Mode

If any critical system fails:
1. Site remains available
2. Shows static information
3. Promotes phone ordering
4. Logs failure details
5. Notifies administrator

---

## Implementation Notes

### Manifest.js Example
```javascript
// static/manifest.js - MUST UPDATE WITH EVERY CHANGE
export const IMPLEMENTATION_STATUS = {
  _lastUpdated: "2024-12-15 14:30",
  _phase: "Phase 1",
  
  routing: {
    status: "COMPLETE",
    files: ["+layout.svelte", "+page.svelte", "menu/+page.svelte"]
  },
  
  menu: {
    status: "IN_PROGRESS", 
    hasRealData: false,
    blocker: "Creating menu.json structure"
  },
  
  ordering: {
    status: "NOT_STARTED",
    blocker: "Need ORM URL from client"
  },
  
  maps: {
    status: "NOT_STARTED",
    blocker: "Need Google Maps API key"
  }
};
```

### Remember:
- You WILL forget previous implementations
- Check manifest.js before assuming
- Context verification FIRST
- No silent placeholders
- Fail loud and clear
- One feature = One file
- Real data or error
- Timeouts save lives
- Simple > Clever
- Complete > Perfect
- Beautiful through simplicity
- Performance > Visual complexity

### Design Balance:
The goal is to create a visually stunning, memorable website that stands out in Edmonton's restaurant scene while maintaining defensive coding principles. Achieve beauty through:
- **Bold use of brand colors** - Red and yellow prominently featured
- **Dynamic gradients** - Brand color combinations for visual impact
- **Playful animations** - Subtle movement that delights users
- **Creative layouts** - Diagonal splits, waves, and unique sections
- **High-contrast design** - Bold typography and color blocking
- **Interactive elements** - Hover effects, micro-animations
- **Pattern overlays** - Subtle textures for depth
- **Strategic white space** - Breathing room between bold elements

NOT through:
- Complex JavaScript animation libraries
- Heavy performance-killing effects
- Scroll-jacking or parallax on mobile
- Canvas/WebGL effects
- Autoplay videos with sound
- Excessive simultaneous animations
- Dark or muted color schemes
- Generic template designs

### Standard Response Format:
```
=== CONTEXT CHECK ===
Visible files: [list]
Current task: [description]
Can see previous work: [YES/NO]
=====================

[If NO: Request specific files]
[If YES: Proceed with implementation]
```

---

## Final Verification

Before marking any feature complete:
- [ ] Real data source connected
- [ ] All timeouts implemented
- [ ] Error messages helpful
- [ ] Manifest.js updated
- [ ] No TODOs remain
- [ ] File under 500 lines
- [ ] Security patterns copied exactly
- [ ] Fails loud when broken
- [ ] Phone fallback available
- [ ] Zero mock data
- [ ] Animations at 60fps
- [ ] Mobile performance verified
- [ ] Images optimized and lazy loaded
- [ ] Bold design elements on every page
- [ ] Brand colors (red/yellow) prominently used
- [ ] Gradient elements implemented
- [ ] Hover animations on all interactive elements
- [ ] Visual consistency across all pages
- [ ] Reduced motion respected
- [ ] Touch targets 44px minimum
- [ ] Loading states for all async operations
- [ ] Lighthouse score 90+
- [ ] No complex animation libraries used
- [ ] Vercel deployment successful
- [ ] Preview deployments working