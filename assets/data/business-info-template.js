// business-info-template.js
// Template for collecting The Donair Guys business information
// Fill in all fields with actual data from the business owner

export const businessInfo = {
  // Basic Information
  name: "The Donair Guys",
  tagline: "Authentic Halal Donairs", // Update with actual tagline if different
  description:
    "Craving authentic halal donairs in Edmonton? The Donair Guys delivers the real deal with 100% halal-certified meats, hand-carved daily and wrapped in warm, pillowy pita. Located in Edmonton's heart, we're your trusted destination for traditional Middle Eastern flavors that satisfy every bite. From our signature garlic sauce to perfectly spiced lamb and chicken, experience why Edmonton locals choose us for genuine halal donair perfection. Taste the difference authentic makes – visit The Donair Guys today!",

  // Contact Information
  contact: {
    phone: "(780) 244-0104", // FILL_IN: Actual phone number
    phoneDisplay: "(780) 244-0104", // How it should be displayed
    phoneLink: "tel:+17802440104", // Format for tel: links
    email: "contact@thedonairguys.ca", // Business email
    emailDisplay: "Contact Us", // Or use actual email
  },

  // Location
  location: {
    streetAddress: "6609 177 St NW",
    city: "Edmonton",
    province: "AB",
    postalCode: "T5T 4J5", // FILL_IN: Actual postal code
    country: "Canada",

    // Full formatted address for display
    fullAddress: "6609 177 St NW, Edmonton, AB T5T 4J5",

    // For map/directions
    googleMapsUrl: "https://maps.app.goo.gl/tjZiuvBMGLTAS2rp9",
    coordinates: {
      latitude: 53.5023475, // FILL_IN: Actual latitude
      longitude: -113.6293241, // FILL_IN: Actual longitude
    },
  },

  // Operating Hours
  hours: {
    // Regular hours (use 24-hour format)
    regular: {
      monday: { open: "11:00", close: "02:00", closed: false },
      tuesday: { open: "11:00", close: "02:00", closed: false },
      wednesday: { open: "11:00", close: "02:00", closed: false },
      thursday: { open: "11:00", close: "02:00", closed: false },
      friday: { open: "11:00", close: "02:00", closed: false }, // Check if Friday different
      saturday: { open: "11:00", close: "02:00", closed: false },
      sunday: { open: "11:00", close: "02:00", closed: false }, // Check Sunday hours
    },

    // Holiday hours or special closures
    specialHours: {
      // Example format:
      // "2024-12-25": { closed: true, note: "Closed for Christmas" },
      // "2024-01-01": { open: "14:00", close: "20:00", note: "New Year's Day - Limited Hours" },
    },

    // General notes about hours
    hoursNote: "Hours may vary on holidays",
  },

  // Social Media
  social: {
    instagram: {
      handle: "@thedonairguys", // FILL_IN: Actual Instagram handle
      url: "https://instagram.com/thedonairguys", // FILL_IN: Full URL
    },
    facebook: {
      handle: "thedonairguysedmonton", // FILL_IN: Facebook page name
      url: "https://facebook.com/thedonairguysedmonton", // FILL_IN: Full URL
    },
    // Add other social platforms if applicable
    tiktok: {
      handle: "", // FILL_IN if applicable
      url: "", // FILL_IN if applicable
    },
  },

  // Delivery & Ordering
  ordering: {
    // Online ordering platforms
    platforms: {
      skipTheDishes: {
        available: true, // Set to false if not available
        url: "FILL_IN: Skip the Dishes URL",
        minimumOrder: 0, // FILL_IN: Minimum order amount if any
      },
      uberEats: {
        available: true, // Set to false if not available
        url: "FILL_IN: Uber Eats URL",
        minimumOrder: 0, // FILL_IN: Minimum order amount if any
      },
      doordash: {
        available: false, // Set to true if available
        url: "",
        minimumOrder: 0,
      },
    },

    // Ordering preferences
    preferredPlatform: "skipTheDishes", // or "uberEats" or "phone"
    phoneOrdersAccepted: true,
    pickupAvailable: true,
    deliveryAvailable: true,
    cateringAvailable: true,
  },

  // Business Features
  features: {
    halal: true,
    halalCertification: "FILL_IN: Certification details or authority",
    vegetarianOptions: true,
    veganOptions: false, // Update if vegan options available
    glutenFreeOptions: false, // Update if gluten-free options available

    // Payment methods
    paymentMethods: {
      cash: true,
      debit: true,
      credit: true,
      applePay: false, // Update if available
      googlePay: false, // Update if available
    },

    // Amenities
    amenities: {
      dineIn: true,
      takeout: true,
      delivery: false,
      wheelchair: true, // Wheelchair accessible
      parking: "Plenty of parking",
      wifi: false, // Update if WiFi available
    },
  },

  // SEO & Marketing
  seo: {
    metaDescription:
      "Craving authentic halal donairs in Edmonton? The Donair Guys serves 100% certified halal meats with traditional flavors. Taste the difference!",
    keywords: [
      "donair",
      "halal",
      "Edmonton",
      "Middle Eastern food",
      "shawarma",
      "Mediterranean",
      // Add more relevant keywords
    ],
  },

  // Legal/Business Info
  legal: {
    businessName: "The Donair Guys", // Official registered business name
    yearEstablished: "2018",
    // Add any other legal info needed for footer
  },

  // Additional Notes
  notes: {
    // Any special notes or information not covered above
    specialOffers: "FILL_IN: Any ongoing promotions or specials",
    story: "FILL_IN: Brief story about the business (optional)",
    ownerMessage: "FILL_IN: Welcome message from owner (optional)",
  },
};

// Validation helper
export function validateBusinessInfo() {
  const required = [
    "contact.phone",
    "location.streetAddress",
    "location.postalCode",
  ];

  const missing = [];

  for (const path of required) {
    const value = path
      .split(".")
      .reduce((obj, key) => obj?.[key], businessInfo);
    if (!value || value.includes("FILL_IN")) {
      missing.push(path);
    }
  }

  if (missing.length > 0) {
    console.warn("Missing required business info:", missing);
    return false;
  }

  return true;
}
