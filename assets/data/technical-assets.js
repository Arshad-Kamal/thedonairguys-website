// technical-assets.js
// Technical assets including colors, fonts, and icons for The Donair Guys

export const technicalAssets = {
  // Color System (from PRD)
  colors: {
    // Brand Colors
    primary: {
      default: '#ed1e24',      // Donair Guys Red
      dark: '#d01118',
      light: '#ff6b6b',
      rgb: '237, 30, 36'
    },
    secondary: {
      default: '#f8ed23',      // Donair Guys Yellow
      dark: '#e6d900',
      light: '#ffd93d',
      rgb: '248, 237, 35'
    },

    // Backgrounds
    backgrounds: {
      white: '#ffffff',
      light: '#fafafa',
      yellowTint: '#fffdf0',
      redTint: '#fff5f5'
    },

    // Text Colors
    text: {
      primary: '#1a1a1a',
      secondary: '#4a4a4a',
      light: '#666666',
      white: '#ffffff'
    },

    // Accent Colors
    accent: {
      green: '#2ecc71',        // For halal badges
      redLight: '#ff6b6b',
      yellowLight: '#ffd93d'
    },

    // Gradients
    gradients: {
      primary: 'linear-gradient(135deg, #ed1e24, #ff6b6b)',
      secondary: 'linear-gradient(135deg, #f8ed23, #ffd93d)',
      brand: 'linear-gradient(135deg, #ed1e24, #f8ed23)',
      primaryHover: 'linear-gradient(135deg, #d01118, #ed1e24)',
      secondaryHover: 'linear-gradient(135deg, #e6d900, #f8ed23)'
    },

    // Borders
    borders: {
      light: '#e5e5e5',
      red: '#ffcfcf',
      yellow: '#fff3a3'
    },

    // Shadows
    shadows: {
      sm: '0 2px 8px rgba(0,0,0,0.08)',
      md: '0 4px 16px rgba(0,0,0,0.12)',
      lg: '0 8px 32px rgba(0,0,0,0.16)',
      red: '0 8px 24px rgba(237, 30, 36, 0.25)',
      yellow: '0 8px 24px rgba(248, 237, 35, 0.2)',
      hover: '0 12px 32px rgba(0,0,0,0.2)'
    }
  },

  // Typography System
  fonts: {
    // Font Families
    families: {
      heading: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      mono: "'Courier New', Courier, monospace"
    },

    // Font Sizes (based on 16px base, 1.25 scale)
    sizes: {
      xs: '0.75rem',      // 12px
      sm: '0.875rem',     // 14px
      base: '1rem',       // 16px
      lg: '1.25rem',      // 20px
      xl: '1.5rem',       // 24px
      '2xl': '2rem',      // 32px
      '3xl': '2.5rem',    // 40px
      '4xl': '3rem',      // 48px
      'hero': 'clamp(2.5rem, 8vw, 4.5rem)'  // Responsive hero
    },

    // Font Weights
    weights: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900
    },

    // Line Heights
    lineHeights: {
      tight: 1.1,
      snug: 1.2,
      normal: 1.5,
      relaxed: 1.75,
      loose: 2
    },

    // Letter Spacing
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em'
    }
  },

  // Icon System (Using Tailwind/Heroicons classes as placeholders)
  icons: {
    // Navigation Icons
    navigation: {
      menu: 'bars-3',
      close: 'x-mark',
      chevronDown: 'chevron-down',
      chevronRight: 'chevron-right',
      arrowRight: 'arrow-right',
      externalLink: 'arrow-top-right-on-square'
    },

    // Feature Icons
    features: {
      clock: 'clock',                    // Fresh daily
      checkBadge: 'check-badge',         // 100% Halal
      heart: 'heart',                    // Family owned
      star: 'star',                      // Quality
      fire: 'fire',                      // Popular items
      truck: 'truck',                    // Delivery
      mapPin: 'map-pin',                 // Location
      phone: 'phone',                    // Contact
      shoppingCart: 'shopping-cart'      // Order
    },

    // Social Media Icons (using brand names as placeholders)
    social: {
      instagram: 'instagram',
      facebook: 'facebook',
      tiktok: 'tiktok'
    },

    // Delivery Platform Icons
    delivery: {
      skipTheDishes: 'skip-logo',
      uberEats: 'uber-logo',
      doordash: 'doordash-logo'
    },

    // UI Icons
    ui: {
      plus: 'plus',
      minus: 'minus',
      check: 'check',
      info: 'information-circle',
      warning: 'exclamation-triangle',
      error: 'x-circle',
      search: 'magnifying-glass',
      filter: 'funnel',
      sort: 'arrows-up-down'
    },

    // Status Icons
    status: {
      halal: 'halal-certified',          // Custom halal icon
      vegetarian: 'leaf',                // Vegetarian
      spicy: 'fire',                     // Spicy level
      new: 'sparkles',                   // New item
      popular: 'trending-up'             // Popular item
    }
  },

  // Animation Durations (from PRD - performance focused)
  animations: {
    durations: {
      instant: '100ms',
      fast: '200ms',
      normal: '300ms',
      slow: '500ms',
      verySlow: '800ms'
    },

    easings: {
      default: 'cubic-bezier(0.4, 0, 0.2, 1)',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
    }
  },

  // Spacing System (8px base)
  spacing: {
    0: '0',
    1: '0.25rem',     // 4px
    2: '0.5rem',      // 8px
    3: '0.75rem',     // 12px
    4: '1rem',        // 16px
    5: '1.25rem',     // 20px
    6: '1.5rem',      // 24px
    8: '2rem',        // 32px
    10: '2.5rem',     // 40px
    12: '3rem',       // 48px
    16: '4rem',       // 64px
    20: '5rem',       // 80px
    24: '6rem'        // 96px
  },

  // Border Radius
  borderRadius: {
    none: '0',
    sm: '0.25rem',    // 4px
    default: '0.5rem', // 8px
    md: '0.75rem',    // 12px
    lg: '1rem',       // 16px
    xl: '1.5rem',     // 24px
    '2xl': '2rem',    // 32px
    full: '9999px'    // Pills/circles
  },

  // Breakpoints (mobile-first)
  breakpoints: {
    sm: '640px',      // Small devices
    md: '768px',      // Tablets
    lg: '1024px',     // Desktops
    xl: '1280px',     // Large desktops
    '2xl': '1536px'   // Extra large
  },

  // Z-Index Scale
  zIndex: {
    0: 0,
    10: 10,           // Base elements
    20: 20,           // Elevated cards
    30: 30,           // Sticky elements
    40: 40,           // Overlays
    50: 50,           // Modals
    999: 999          // Critical UI
  }
};

// Helper functions

// Get CSS custom properties string
export function getCSSVariables() {
  return `
    :root {
      /* Brand Colors */
      --primary: ${technicalAssets.colors.primary.default};
      --primary-dark: ${technicalAssets.colors.primary.dark};
      --secondary: ${technicalAssets.colors.secondary.default};
      --secondary-dark: ${technicalAssets.colors.secondary.dark};

      /* Backgrounds */
      --bg-white: ${technicalAssets.colors.backgrounds.white};
      --bg-light: ${technicalAssets.colors.backgrounds.light};
      --bg-yellow-tint: ${technicalAssets.colors.backgrounds.yellowTint};
      --bg-red-tint: ${technicalAssets.colors.backgrounds.redTint};

      /* Text */
      --text-primary: ${technicalAssets.colors.text.primary};
      --text-secondary: ${technicalAssets.colors.text.secondary};
      --text-light: ${technicalAssets.colors.text.light};

      /* Accent Colors */
      --accent-red-light: ${technicalAssets.colors.accent.redLight};
      --accent-yellow-light: ${technicalAssets.colors.accent.yellowLight};
      --accent-green: ${technicalAssets.colors.accent.green};

      /* Gradients */
      --gradient-primary: ${technicalAssets.colors.gradients.primary};
      --gradient-secondary: ${technicalAssets.colors.gradients.secondary};
      --gradient-brand: ${technicalAssets.colors.gradients.brand};

      /* Shadows */
      --shadow-sm: ${technicalAssets.colors.shadows.sm};
      --shadow-md: ${technicalAssets.colors.shadows.md};
      --shadow-lg: ${technicalAssets.colors.shadows.lg};
      --shadow-red: ${technicalAssets.colors.shadows.red};
      --shadow-yellow: ${technicalAssets.colors.shadows.yellow};
    }
  `;
}

// Get Tailwind config object
export function getTailwindTheme() {
  return {
    colors: {
      brand: {
        red: technicalAssets.colors.primary.default,
        'red-dark': technicalAssets.colors.primary.dark,
        yellow: technicalAssets.colors.secondary.default,
        'yellow-dark': technicalAssets.colors.secondary.dark
      }
    },
    fontFamily: {
      sans: technicalAssets.fonts.families.body.split(','),
      heading: technicalAssets.fonts.families.heading.split(',')
    },
    extend: {
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'spin-slow': 'spin 3s linear infinite'
      }
    }
  };
}

// Get icon by name (returns Tailwind/Heroicon class)
export function getIcon(category, name) {
  return technicalAssets.icons[category]?.[name] || 'question-mark-circle';
}

// Get color value
export function getColor(path) {
  const keys = path.split('.');
  let value = technicalAssets.colors;
  for (const key of keys) {
    value = value[key];
  }
  return value;
}
