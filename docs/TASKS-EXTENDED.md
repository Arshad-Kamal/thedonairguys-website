# The Donair Guys Website - Extended Task Implementation Guide

## Table of Contents

1. [Phase 2: Core Features - Detailed Implementation](#phase-2-core-features---detailed-implementation)
2. [Phase 3: Visual Design - Complete Guide](#phase-3-visual-design---complete-guide)
3. [Phase 4: Integration & Polish - Security Focus](#phase-4-integration--polish---security-focus)
4. [Phase 5: Testing & Launch - Comprehensive Checklist](#phase-5-testing--launch---comprehensive-checklist)
5. [Code Templates Repository](#code-templates-repository)
6. [Troubleshooting Guide](#troubleshooting-guide)
7. [Performance Optimization Checklist](#performance-optimization-checklist)
8. [Security Implementation Guide](#security-implementation-guide)

---

## Phase 2: Core Features - Detailed Implementation

### Day 3: Data Structure & Menu System

#### Task 3.1: Create Menu Data Structure

📋 **Prerequisites**: 
- Project structure complete
- Static folder exists
- Menu content from client

🎯 **Objective**: Create comprehensive menu.json with proper structure

📝 **Detailed Steps**:

1. **Create static/data/menu.json**:
```json
{
  "version": "1.0.0",
  "lastUpdated": "2024-01-15",
  "restaurant": {
    "name": "The Donair Guys",
    "tagline": "Authentic Halal Donairs",
    "certification": "Halal Certified"
  },
  "categories": [
    {
      "id": "donairs",
      "name": "Donairs",
      "displayOrder": 1,
      "description": "Our signature donairs with authentic spices",
      "items": [
        {
          "id": "classic-beef",
          "name": "Classic Beef Donair",
          "description": "Traditional spiced beef with fresh vegetables and our signature sauce",
          "price": 12.99,
          "sizes": [
            { "name": "Regular", "price": 12.99 },
            { "name": "Large", "price": 15.99 }
          ],
          "isAvailable": true,
          "isPopular": true,
          "isHalal": true,
          "image": "/images/menu/classic-beef.jpg",
          "allergens": ["gluten", "dairy"],
          "calories": "650-850"
        },
        {
          "id": "chicken-donair",
          "name": "Chicken Shawarma Donair",
          "description": "Marinated chicken with garlic sauce and pickles",
          "price": 11.99,
          "sizes": [
            { "name": "Regular", "price": 11.99 },
            { "name": "Large", "price": 14.99 }
          ],
          "isAvailable": true,
          "isPopular": true,
          "isHalal": true,
          "image": "/images/menu/chicken-donair.jpg",
          "allergens": ["gluten"],
          "calories": "550-750"
        }
      ]
    },
    {
      "id": "platters",
      "name": "Platters",
      "displayOrder": 2,
      "description": "Complete meals with rice, salad, and pita",
      "items": [
        {
          "id": "mixed-platter",
          "name": "Mixed Meat Platter",
          "description": "Beef and chicken with rice, salad, hummus, and pita bread",
          "price": 18.99,
          "isAvailable": true,
          "isPopular": false,
          "isHalal": true,
          "image": "/images/menu/mixed-platter.jpg",
          "allergens": ["gluten", "sesame"],
          "calories": "950"
        }
      ]
    },
    {
      "id": "sides",
      "name": "Sides & Extras",
      "displayOrder": 3,
      "description": "Add-ons and sides",
      "items": [
        {
          "id": "fries",
          "name": "Fresh Cut Fries",
          "description": "Hand-cut and seasoned",
          "price": 4.99,
          "isAvailable": true,
          "isHalal": true,
          "isVegetarian": true,
          "calories": "380"
        },
        {
          "id": "hummus",
          "name": "Hummus with Pita",
          "description": "Creamy chickpea dip with warm pita",
          "price": 6.99,
          "isAvailable": true,
          "isHalal": true,
          "isVegetarian": true,
          "allergens": ["gluten", "sesame"],
          "calories": "290"
        }
      ]
    },
    {
      "id": "beverages",
      "name": "Beverages",
      "displayOrder": 4,
      "description": "Drinks and refreshments",
      "items": [
        {
          "id": "soft-drinks",
          "name": "Soft Drinks",
          "description": "Coke, Sprite, Orange, Ginger Ale",
          "price": 2.99,
          "isAvailable": true,
          "isHalal": true
        },
        {
          "id": "ayran",
          "name": "Ayran",
          "description": "Traditional yogurt drink",
          "price": 3.99,
          "isAvailable": true,
          "isHalal": true,
          "allergens": ["dairy"]
        }
      ]
    }
  ],
  "orderingHours": {
    "monday": { "open": "11:00", "close": "21:00" },
    "tuesday": { "open": "11:00", "close": "21:00" },
    "wednesday": { "open": "11:00", "close": "21:00" },
    "thursday": { "open": "11:00", "close": "21:00" },
    "friday": { "open": "11:00", "close": "22:00" },
    "saturday": { "open": "12:00", "close": "22:00" },
    "sunday": { "open": "12:00", "close": "20:00" }
  },
  "orderingPlatform": {
    "name": "OrderNow",
    "url": "https://ordernow.com/thedonairguys",
    "minimumOrder": 15.00,
    "deliveryFee": 4.99
  }
}
```

✅ **Acceptance Criteria**:
- [ ] All menu items have required fields
- [ ] Prices are numbers, not strings
- [ ] Image paths are relative to static folder
- [ ] Hours match business requirements
- [ ] Halal certification noted

⚠️ **Common Mistakes**:
- Using absolute URLs for images
- Forgetting isHalal flag
- Missing allergen information
- Incorrect price formats

🧪 **Validation Test**:
```javascript
// In src/lib/utils/validateMenu.js
export function validateMenuData(menuData) {
  const errors = [];
  
  // Check required fields
  if (!menuData.version) errors.push("Missing version");
  if (!menuData.categories || !Array.isArray(menuData.categories)) {
    errors.push("Categories must be an array");
  }
  
  // Validate each category
  menuData.categories?.forEach((category, idx) => {
    if (!category.id) errors.push(`Category ${idx} missing ID`);
    if (!category.items || !Array.isArray(category.items)) {
      errors.push(`Category ${category.name} has invalid items`);
    }
    
    // Validate items
    category.items?.forEach((item, itemIdx) => {
      if (typeof item.price !== 'number') {
        errors.push(`${item.name}: Price must be a number`);
      }
      if (item.isAvailable === undefined) {
        errors.push(`${item.name}: Missing availability`);
      }
    });
  });
  
  if (errors.length > 0) {
    throw new Error(`Menu validation failed:\n${errors.join('\n')}`);
  }
  
  return true;
}
```

---

#### Task 3.2: Create Menu Component with Error Handling

📋 **Prerequisites**: 
- menu.json created
- Component folder exists

🎯 **Objective**: Build defensive Menu component

📝 **Detailed Implementation**:

1. **Create src/lib/components/Menu.svelte**:
```svelte
<script>
  import { onMount } from 'svelte';
  import { validateMenuData } from '$lib/utils/validateMenu.js';
  
  // Component state
  let menuData = null;
  let loading = true;
  let error = null;
  let selectedCategory = 'all';
  
  // Load menu data with error handling
  onMount(async () => {
    try {
      console.log('[MENU] Loading menu data...');
      
      const response = await fetch('/data/menu.json');
      
      if (!response.ok) {
        throw new Error(`Failed to load menu: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Validate data structure
      validateMenuData(data);
      
      menuData = data;
      console.log('[MENU] Loaded successfully:', data.categories.length, 'categories');
      
    } catch (err) {
      console.error('[MENU] Load failed:', err);
      error = err.message;
    } finally {
      loading = false;
    }
  });
  
  // Filter items by category
  $: filteredCategories = selectedCategory === 'all' 
    ? menuData?.categories || []
    : menuData?.categories.filter(cat => cat.id === selectedCategory) || [];
  
  // Format price with defensive checks
  function formatPrice(price) {
    if (typeof price !== 'number') {
      console.warn('[MENU] Invalid price:', price);
      return 'Price unavailable';
    }
    return `$${price.toFixed(2)}`;
  }
  
  // Handle missing images
  function handleImageError(event) {
    console.warn('[MENU] Image failed to load:', event.target.src);
    event.target.src = '/images/placeholder-menu.jpg';
    event.target.alt = 'Menu item image unavailable';
  }
</script>

<div class="menu-container">
  {#if loading}
    <!-- Loading State -->
    <div class="menu-loading" role="status" aria-live="polite">
      <div class="spinner"></div>
      <p>Loading delicious options...</p>
    </div>
    
  {:else if error}
    <!-- Error State -->
    <div class="menu-error" role="alert">
      <h2>Menu Temporarily Unavailable</h2>
      <p>{error}</p>
      <p>Please call us at <a href="tel:+17801234567">(780) 123-4567</a> to place an order.</p>
      <button on:click={() => location.reload()}>
        Try Again
      </button>
    </div>
    
  {:else if menuData}
    <!-- Success State -->
    <div class="menu-header">
      <h1>Our Menu</h1>
      {#if menuData.restaurant?.certification}
        <div class="halal-badge">
          <span>✓</span>
          {menuData.restaurant.certification}
        </div>
      {/if}
    </div>
    
    <!-- Category Filter -->
    <nav class="category-filter" role="navigation" aria-label="Menu categories">
      <button 
        class="filter-btn"
        class:active={selectedCategory === 'all'}
        on:click={() => selectedCategory = 'all'}
      >
        All Items
      </button>
      {#each menuData.categories as category}
        <button 
          class="filter-btn"
          class:active={selectedCategory === category.id}
          on:click={() => selectedCategory = category.id}
        >
          {category.name}
        </button>
      {/each}
    </nav>
    
    <!-- Menu Items Grid -->
    <div class="menu-grid">
      {#each filteredCategories as category}
        <section class="menu-category" aria-labelledby="category-{category.id}">
          <h2 id="category-{category.id}" class="category-title">
            {category.name}
          </h2>
          {#if category.description}
            <p class="category-description">{category.description}</p>
          {/if}
          
          <div class="items-grid">
            {#each category.items as item}
              <article class="menu-item" class:unavailable={!item.isAvailable}>
                {#if item.image}
                  <img 
                    src={item.image} 
                    alt={item.name}
                    loading="lazy"
                    on:error={handleImageError}
                  />
                {/if}
                
                <div class="item-content">
                  <h3 class="item-name">
                    {item.name}
                    {#if item.isPopular}
                      <span class="badge popular">Popular</span>
                    {/if}
                    {#if !item.isAvailable}
                      <span class="badge unavailable">Temporarily Unavailable</span>
                    {/if}
                  </h3>
                  
                  <p class="item-description">{item.description}</p>
                  
                  {#if item.sizes && item.sizes.length > 0}
                    <div class="item-sizes">
                      {#each item.sizes as size}
                        <span class="size-option">
                          {size.name}: {formatPrice(size.price)}
                        </span>
                      {/each}
                    </div>
                  {:else}
                    <p class="item-price">{formatPrice(item.price)}</p>
                  {/if}
                  
                  {#if item.allergens && item.allergens.length > 0}
                    <p class="item-allergens">
                      Contains: {item.allergens.join(', ')}
                    </p>
                  {/if}
                </div>
              </article>
            {/each}
          </div>
        </section>
      {/each}
    </div>
    
  {:else}
    <!-- No Data State -->
    <div class="menu-empty" role="status">
      <p>No menu items available at this time.</p>
    </div>
  {/if}
</div>

<style>
  .menu-container {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: var(--space-lg);
  }
  
  /* Loading State */
  .menu-loading {
    text-align: center;
    padding: var(--space-3xl) 0;
  }
  
  .spinner {
    width: 48px;
    height: 48px;
    margin: 0 auto var(--space-lg);
    border: 4px solid var(--color-light-gray);
    border-top-color: var(--color-primary);
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
  
  /* Error State */
  .menu-error {
    text-align: center;
    padding: var(--space-3xl);
    background: var(--color-light-gray);
    border-radius: 8px;
  }
  
  .menu-error h2 {
    color: var(--color-accent);
    margin-bottom: var(--space-md);
  }
  
  .menu-error button {
    margin-top: var(--space-lg);
    padding: var(--space-sm) var(--space-lg);
    background: var(--color-primary);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: var(--font-size-base);
  }
  
  .menu-error button:hover {
    background: var(--color-primary-dark);
  }
  
  /* Header */
  .menu-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--space-xl);
  }
  
  .halal-badge {
    display: flex;
    align-items: center;
    gap: var(--space-xs);
    padding: var(--space-xs) var(--space-md);
    background: var(--color-success);
    color: white;
    border-radius: 20px;
    font-size: var(--font-size-sm);
    font-weight: 600;
  }
  
  /* Category Filter */
  .category-filter {
    display: flex;
    gap: var(--space-sm);
    margin-bottom: var(--space-2xl);
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    padding-bottom: var(--space-sm);
  }
  
  .filter-btn {
    padding: var(--space-sm) var(--space-lg);
    background: white;
    border: 2px solid var(--color-light-gray);
    border-radius: 24px;
    cursor: pointer;
    white-space: nowrap;
    transition: all var(--duration-fast);
  }
  
  .filter-btn:hover {
    border-color: var(--color-primary);
  }
  
  .filter-btn.active {
    background: var(--color-primary);
    color: white;
    border-color: var(--color-primary);
  }
  
  /* Menu Grid */
  .menu-category {
    margin-bottom: var(--space-3xl);
  }
  
  .category-title {
    font-size: var(--font-size-2xl);
    margin-bottom: var(--space-sm);
    color: var(--color-primary);
  }
  
  .category-description {
    color: var(--color-gray);
    margin-bottom: var(--space-lg);
  }
  
  .items-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: var(--space-lg);
  }
  
  /* Menu Item Card */
  .menu-item {
    background: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: var(--shadow-md);
    transition: transform var(--duration-fast), box-shadow var(--duration-fast);
  }
  
  .menu-item:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }
  
  .menu-item.unavailable {
    opacity: 0.6;
  }
  
  .menu-item img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .item-content {
    padding: var(--space-lg);
  }
  
  .item-name {
    font-size: var(--font-size-xl);
    margin-bottom: var(--space-sm);
    display: flex;
    align-items: center;
    gap: var(--space-sm);
  }
  
  .badge {
    font-size: var(--font-size-xs);
    padding: 2px 8px;
    border-radius: 12px;
    font-weight: normal;
  }
  
  .badge.popular {
    background: var(--color-secondary);
    color: white;
  }
  
  .badge.unavailable {
    background: var(--color-gray);
    color: white;
  }
  
  .item-description {
    color: var(--color-dark-gray);
    margin-bottom: var(--space-md);
    font-size: var(--font-size-sm);
  }
  
  .item-price {
    font-size: var(--font-size-xl);
    font-weight: 600;
    color: var(--color-primary);
  }
  
  .item-sizes {
    display: flex;
    gap: var(--space-md);
    margin-bottom: var(--space-sm);
  }
  
  .size-option {
    font-size: var(--font-size-sm);
    color: var(--color-primary);
    font-weight: 600;
  }
  
  .item-allergens {
    font-size: var(--font-size-xs);
    color: var(--color-gray);
    font-style: italic;
    margin-top: var(--space-sm);
  }
  
  /* Mobile Responsive */
  @media (max-width: 768px) {
    .menu-container {
      padding: var(--space-md);
    }
    
    .menu-header {
      flex-direction: column;
      gap: var(--space-md);
      text-align: center;
    }
    
    .category-filter {
      justify-content: flex-start;
    }
    
    .items-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
```

✅ **Acceptance Criteria**:
- [ ] Loading state displays while fetching
- [ ] Error state shows helpful message
- [ ] Phone number is clickable in error state
- [ ] Category filtering works
- [ ] Unavailable items are visually distinct
- [ ] Images have fallback on error
- [ ] Responsive on mobile

⚠️ **Common Mistakes**:
- Not handling fetch errors
- Missing loading states
- No image error handling
- Forgetting ARIA labels
- Hard-coding data instead of fetching

---

### Day 4: Location & Contact Implementation

#### Task 4.1: Create Location Component with Hours Logic

📋 **Prerequisites**: 
- Menu component complete
- Business hours data available

🎯 **Objective**: Build location display with live hours checking

📝 **Implementation**:

1. **Create src/lib/components/Location.svelte**:
```svelte
<script>
  import { onMount, onDestroy } from 'svelte';
  
  // Business hours from config or props
  export let hours = {
    monday: { open: "11:00", close: "21:00" },
    tuesday: { open: "11:00", close: "21:00" },
    wednesday: { open: "11:00", close: "21:00" },
    thursday: { open: "11:00", close: "21:00" },
    friday: { open: "11:00", close: "22:00" },
    saturday: { open: "12:00", close: "22:00" },
    sunday: { open: "12:00", close: "20:00" }
  };
  
  export let address = {
    street: "123 Main Street",
    city: "Edmonton",
    province: "AB",
    postal: "T5X 1X1",
    country: "Canada"
  };
  
  export let phone = "(780) 123-4567";
  
  // State
  let currentTime = new Date();
  let isOpen = false;
  let nextStateChange = null;
  let interval;
  
  // Get day name
  const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  
  // Check if currently open
  function checkIfOpen() {
    const now = new Date();
    const dayName = dayNames[now.getDay()];
    const todayHours = hours[dayName];
    
    if (!todayHours || !todayHours.open || !todayHours.close) {
      console.warn('[LOCATION] No hours for', dayName);
      return { isOpen: false, nextChange: null };
    }
    
    // Parse times
    const [openHour, openMin] = todayHours.open.split(':').map(Number);
    const [closeHour, closeMin] = todayHours.close.split(':').map(Number);
    
    const openTime = new Date();
    openTime.setHours(openHour, openMin, 0, 0);
    
    const closeTime = new Date();
    closeTime.setHours(closeHour, closeMin, 0, 0);
    
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    const openMinutes = openHour * 60 + openMin;
    const closeMinutes = closeHour * 60 + closeMin;
    
    if (currentMinutes >= openMinutes && currentMinutes < closeMinutes) {
      // Currently open
      return {
        isOpen: true,
        nextChange: closeTime,
        minutesUntilChange: closeMinutes - currentMinutes
      };
    } else if (currentMinutes < openMinutes) {
      // Before opening
      return {
        isOpen: false,
        nextChange: openTime,
        minutesUntilChange: openMinutes - currentMinutes
      };
    } else {
      // After closing - check tomorrow
      const tomorrow = new Date(now);
      tomorrow.setDate(tomorrow.getDate() + 1);
      const tomorrowDay = dayNames[tomorrow.getDay()];
      const tomorrowHours = hours[tomorrowDay];
      
      if (tomorrowHours && tomorrowHours.open) {
        const [tOpenHour, tOpenMin] = tomorrowHours.open.split(':').map(Number);
        const tomorrowOpen = new Date(tomorrow);
        tomorrowOpen.setHours(tOpenHour, tOpenMin, 0, 0);
        
        return {
          isOpen: false,
          nextChange: tomorrowOpen,
          minutesUntilChange: null
        };
      }
    }
    
    return { isOpen: false, nextChange: null };
  }
  
  // Format phone for tel: link
  function formatPhoneForTel(phone) {
    return phone.replace(/\D/g, '');
  }
  
  // Format address for Google Maps
  function getMapUrl() {
    const query = encodeURIComponent(
      `${address.street}, ${address.city}, ${address.province} ${address.postal}`
    );
    return `https://www.google.com/maps/search/?api=1&query=${query}`;
  }
  
  // Update time
  function updateStatus() {
    currentTime = new Date();
    const status = checkIfOpen();
    isOpen = status.isOpen;
    nextStateChange = status.nextChange;
  }
  
  onMount(() => {
    updateStatus();
    // Update every minute
    interval = setInterval(updateStatus, 60000);
  });
  
  onDestroy(() => {
    if (interval) clearInterval(interval);
  });
</script>

<section class="location-section">
  <h2>Visit Us</h2>
  
  <!-- Open Status -->
  <div class="open-status" class:open={isOpen} class:closed={!isOpen}>
    <span class="status-indicator"></span>
    <span class="status-text">
      {isOpen ? 'Open Now' : 'Closed'}
    </span>
    {#if nextStateChange}
      <span class="status-detail">
        {isOpen ? 'Closes' : 'Opens'} at {nextStateChange.toLocaleTimeString('en-US', { 
          hour: 'numeric', 
          minute: '2-digit' 
        })}
      </span>
    {/if}
  </div>
  
  <!-- Address -->
  <div class="info-block">
    <h3>
      <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
      Address
    </h3>
    <address>
      {address.street}<br>
      {address.city}, {address.province} {address.postal}
    </address>
    <a 
      href={getMapUrl()} 
      target="_blank" 
      rel="noopener noreferrer"
      class="map-link"
    >
      Get Directions →
    </a>
  </div>
  
  <!-- Phone -->
  <div class="info-block">
    <h3>
      <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
      Phone
    </h3>
    <a href="tel:+1{formatPhoneForTel(phone)}" class="phone-link">
      {phone}
    </a>
    <p class="phone-note">Call to place an order</p>
  </div>
  
  <!-- Hours -->
  <div class="info-block">
    <h3>
      <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
      Hours
    </h3>
    <dl class="hours-list">
      {#each Object.entries(hours) as [day, times]}
        <div class="hours-row" class:today={dayNames[new Date().getDay()] === day}>
          <dt>{day.charAt(0).toUpperCase() + day.slice(1)}</dt>
          <dd>
            {#if times.open && times.close}
              {times.open} - {times.close}
            {:else}
              Closed
            {/if}
          </dd>
        </div>
      {/each}
    </dl>
  </div>
</section>

<style>
  .location-section {
    padding: var(--space-2xl) 0;
  }
  
  /*