// formatting.js - Utility functions for formatting data
// Price, phone, date, and text formatting utilities

console.log('[FORMATTING] Formatting utilities loaded');

// Format price for display
export function formatPrice(price) {
	console.log('[PRICE] Formatting:', price);

	// Handle various input types
	if (price === null || price === undefined) {
		return '$0.00';
	}

	let numericPrice;
	if (typeof price === 'string') {
		// Remove currency symbols and parse
		numericPrice = parseFloat(price.replace(/[$,]/g, ''));
	} else if (typeof price === 'number') {
		numericPrice = price;
	} else {
		console.warn('[PRICE] Invalid price type:', typeof price);
		return '$0.00';
	}

	// Validate number
	if (isNaN(numericPrice) || numericPrice < 0) {
		console.warn('[PRICE] Invalid price value:', numericPrice);
		return '$0.00';
	}

	// Format with 2 decimal places
	return '$' + numericPrice.toFixed(2);
}

// Format phone number for display
export function formatPhone(phone) {
	console.log('[PHONE] Formatting:', phone);

	if (!phone || typeof phone !== 'string') {
		return '';
	}

	// Remove all non-digits
	const cleaned = phone.replace(/\D/g, '');

	// Format based on length
	if (cleaned.length === 10) {
		// (XXX) XXX-XXXX
		return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
	} else if (cleaned.length === 11 && cleaned[0] === '1') {
		// 1 (XXX) XXX-XXXX
		const tenDigit = cleaned.slice(1);
		return `1 (${tenDigit.slice(0, 3)}) ${tenDigit.slice(3, 6)}-${tenDigit.slice(6)}`;
	} else if (cleaned.length === 7) {
		// XXX-XXXX (local number)
		return `${cleaned.slice(0, 3)}-${cleaned.slice(3)}`;
	}

	// Return original if we can't format
	console.warn('[PHONE] Could not format phone:', phone);
	return phone;
}

// Format phone for tel: links
export function formatPhoneForTel(phone) {
	if (!phone || typeof phone !== 'string') {
		return '';
	}

	// Remove all non-digits, keep only numbers
	const cleaned = phone.replace(/\D/g, '');

	// Add +1 for North American numbers if not present
	if (cleaned.length === 10) {
		return `+1${cleaned}`;
	} else if (cleaned.length === 11 && cleaned[0] === '1') {
		return `+${cleaned}`;
	}

	return `+1${cleaned}`;
}

// Format date for display
export function formatDate(date, options = {}) {
	console.log('[DATE] Formatting:', date);

	let dateObj;
	if (date instanceof Date) {
		dateObj = date;
	} else if (typeof date === 'string' || typeof date === 'number') {
		dateObj = new Date(date);
	} else {
		console.warn('[DATE] Invalid date:', date);
		return 'Invalid date';
	}

	if (isNaN(dateObj.getTime())) {
		console.warn('[DATE] Invalid date object:', date);
		return 'Invalid date';
	}

	const defaultOptions = /** @type {Intl.DateTimeFormatOptions} */ ({
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		timeZone: 'America/Halifax'
	});

	try {
		return dateObj.toLocaleDateString('en-CA', defaultOptions);
	} catch (error) {
		console.error('[DATE] Formatting error:', error.message);
		return dateObj.toLocaleDateString();
	}
}

// Format time for display
export function formatTime(date, options = {}) {
	console.log('[TIME] Formatting:', date);

	let dateObj;
	if (date instanceof Date) {
		dateObj = date;
	} else if (typeof date === 'string' || typeof date === 'number') {
		dateObj = new Date(date);
	} else {
		console.warn('[TIME] Invalid time:', date);
		return 'Invalid time';
	}

	if (isNaN(dateObj.getTime())) {
		console.warn('[TIME] Invalid time object:', date);
		return 'Invalid time';
	}

	const defaultOptions = /** @type {Intl.DateTimeFormatOptions} */ ({
		hour: 'numeric',
		minute: '2-digit',
		hour12: true,
		timeZone: 'America/Halifax'
	});

	try {
		return dateObj.toLocaleTimeString('en-CA', defaultOptions);
	} catch (error) {
		console.error('[TIME] Formatting error:', error.message);
		return dateObj.toLocaleTimeString();
	}
}

// Truncate text with ellipsis
export function truncateText(text, maxLength = 100) {
	if (!text || typeof text !== 'string') {
		return '';
	}

	if (text.length <= maxLength) {
		return text;
	}

	// Find last space before maxLength to avoid cutting words
	const truncated = text.slice(0, maxLength);
	const lastSpace = truncated.lastIndexOf(' ');

	if (lastSpace > maxLength * 0.8) {
		return truncated.slice(0, lastSpace) + '...';
	}

	return truncated + '...';
}

// Capitalize first letter of each word
export function titleCase(text) {
	if (!text || typeof text !== 'string') {
		return '';
	}

	return text
		.toLowerCase()
		.split(' ')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
}

// Format postal code (Canadian)
export function formatPostalCode(postal) {
	if (!postal || typeof postal !== 'string') {
		return '';
	}

	// Remove spaces and convert to uppercase
	const cleaned = postal.replace(/\s/g, '').toUpperCase();

	// Canadian postal code format: A1A 1A1
	if (cleaned.length === 6 && /^[A-Z]\d[A-Z]\d[A-Z]\d$/.test(cleaned)) {
		return `${cleaned.slice(0, 3)} ${cleaned.slice(3)}`;
	}

	// Return original if we can't format
	return postal;
}

// Format address for display
export function formatAddress(address) {
	if (!address || typeof address !== 'object') {
		return '';
	}

	const parts = [];

	if (address.street) parts.push(address.street);
	if (address.city) parts.push(address.city);
	if (address.province) parts.push(address.province);
	if (address.postal) parts.push(formatPostalCode(address.postal));

	return parts.join(', ');
}

// Format ingredients list
export function formatIngredients(ingredients) {
	if (!Array.isArray(ingredients)) {
		return '';
	}

	if (ingredients.length === 0) {
		return '';
	}

	if (ingredients.length === 1) {
		return ingredients[0];
	}

	if (ingredients.length === 2) {
		return ingredients.join(' and ');
	}

	// For 3+ items: "A, B, and C"
	const lastItem = ingredients[ingredients.length - 1];
	const otherItems = ingredients.slice(0, -1);
	return otherItems.join(', ') + ', and ' + lastItem;
}

// Format hours for display
export function formatHours(hours) {
	if (!hours || typeof hours !== 'object') {
		return 'Hours not available';
	}

	if (hours.closed) {
		return 'Closed';
	}

	if (hours.open && hours.close) {
		return `${hours.open} - ${hours.close}`;
	}

	return 'Hours not available';
}

// Slugify text for URLs
export function slugify(text) {
	if (!text || typeof text !== 'string') {
		return '';
	}

	return text
		.toLowerCase()
		.trim()
		.replace(/[^\w\s-]/g, '') // Remove special characters
		.replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
		.replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

// Format file size
export function formatFileSize(bytes) {
	if (typeof bytes !== 'number' || bytes < 0) {
		return '0 B';
	}

	const units = ['B', 'KB', 'MB', 'GB'];
	let size = bytes;
	let unitIndex = 0;

	while (size >= 1024 && unitIndex < units.length - 1) {
		size /= 1024;
		unitIndex++;
	}

	return `${size.toFixed(unitIndex === 0 ? 0 : 1)} ${units[unitIndex]}`;
}

// Format percentage
export function formatPercentage(value, decimals = 1) {
	if (typeof value !== 'number' || isNaN(value)) {
		return '0%';
	}

	return `${(value * 100).toFixed(decimals)}%`;
}

// Format currency without symbol (for calculations)
export function parseCurrency(currencyString) {
	if (typeof currencyString !== 'string') {
		return 0;
	}

	const cleaned = currencyString.replace(/[$,\s]/g, '');
	const parsed = parseFloat(cleaned);

	return isNaN(parsed) ? 0 : parsed;
}

console.log('[FORMATTING] All formatting utilities ready');
