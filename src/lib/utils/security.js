// security.js - Security utilities and templates
// COPY EXACTLY - Never modify these patterns per AI Coder Framework

console.log('[SECURITY] Security utilities loaded');

// SIMPLE input validation - copy exactly
export function handleUserInput(rawInput) {
	console.log('[INPUT] Received:', typeof rawInput);

	// Basic safety check
	if (!rawInput || typeof rawInput !== 'object') {
		throw new Error('Input must be an object');
	}

	// WHITELIST only allowed fields
	const allowed = ['name', 'email', 'message', 'phone'];
	const cleaned = {};

	for (const field of allowed) {
		if (typeof rawInput[field] === 'string') {
			cleaned[field] = rawInput[field].trim().slice(0, 1000);
		}
	}

	// One validation example
	if (cleaned.email && !cleaned.email.includes('@')) {
		throw new Error('Invalid email - missing @');
	}

	console.log('[INPUT] Cleaned:', Object.keys(cleaned));
	return cleaned;
}

// Simple timeout wrapper
export async function fetchWithTimeout(url, timeoutMs = 5000) {
	const controller = new AbortController();
	const timeout = setTimeout(() => controller.abort(), timeoutMs);

	try {
		return await fetch(url, { signal: controller.signal });
	} catch (error) {
		if (error.name === 'AbortError') {
			throw new Error(`Timeout: ${url} > ${timeoutMs}ms`);
		}
		throw error;
	} finally {
		clearTimeout(timeout);
	}
}

// Dead simple rate limiter
export const rateLimiter = {
	requests: new Map(),

	check(userId) {
		const now = Date.now();
		const userRequests = this.requests.get(userId) || [];
		const recentRequests = userRequests.filter(t => now - t < 60000);

		if (recentRequests.length >= 10) {
			throw new Error(`Rate limit: ${recentRequests.length}/10 per minute`);
		}

		recentRequests.push(now);
		this.requests.set(userId, recentRequests);
	}
};

// Simple lock mechanism
const locks = new Map();

export async function safeUpdate(userId, updateFn) {
	// Wait if locked
	while (locks.get(userId)) {
		await new Promise(r => setTimeout(r, 100));
	}

	locks.set(userId, true);
	try {
		return await updateFn();
	} finally {
		locks.delete(userId);
	}
}

// Phone number validation
export function validatePhoneInput(phone) {
	console.log('[PHONE] Validating:', phone);

	if (!phone || typeof phone !== 'string') {
		throw new Error('Phone must be a string');
	}

	// Remove all non-digits
	const cleaned = phone.replace(/\D/g, '');

	// Check length (10 or 11 digits for North America)
	if (cleaned.length < 10 || cleaned.length > 11) {
		throw new Error('Phone must be 10-11 digits');
	}

	// Format as (XXX) XXX-XXXX
	if (cleaned.length === 10) {
		return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
	} else if (cleaned.length === 11 && cleaned[0] === '1') {
		const tenDigit = cleaned.slice(1);
		return `(${tenDigit.slice(0, 3)}) ${tenDigit.slice(3, 6)}-${tenDigit.slice(6)}`;
	}

	throw new Error('Invalid phone format');
}

// Email validation (basic)
export function validateEmail(email) {
	console.log('[EMAIL] Validating:', email);

	if (!email || typeof email !== 'string') {
		throw new Error('Email must be a string');
	}

	const cleaned = email.trim().toLowerCase().slice(0, 100);

	// Basic email pattern
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	if (!emailPattern.test(cleaned)) {
		throw new Error('Invalid email format');
	}

	return cleaned;
}

// Sanitize HTML content
export function sanitizeHTML(input) {
	if (!input || typeof input !== 'string') {
		return '';
	}

	// Basic HTML escaping
	return input
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#x27;')
		.slice(0, 5000); // Limit length
}

// Validate and sanitize contact form
export function validateContactForm(formData) {
	console.log('[CONTACT] Validating form');

	try {
		const cleaned = handleUserInput(formData);

		// Additional contact form validation
		if (!cleaned.name) {
			throw new Error('Name is required');
		}

		if (!cleaned.email) {
			throw new Error('Email is required');
		}

		if (!cleaned.message) {
			throw new Error('Message is required');
		}

		// Validate email format
		cleaned.email = validateEmail(cleaned.email);

		// Validate phone if provided
		if (cleaned.phone) {
			cleaned.phone = validatePhoneInput(cleaned.phone);
		}

		// Sanitize message
		cleaned.message = sanitizeHTML(cleaned.message);

		return cleaned;

	} catch (error) {
		console.error('[CONTACT] Validation failed:', error.message);
		throw error;
	}
}

// Security headers for responses
export function getSecurityHeaders() {
	return {
		'X-Content-Type-Options': 'nosniff',
		'X-Frame-Options': 'DENY',
		'X-XSS-Protection': '1; mode=block',
		'Referrer-Policy': 'strict-origin-when-cross-origin',
		'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';"
	};
}

// Simple CSRF token generation (for future use)
export function generateCSRFToken() {
	return Array.from(crypto.getRandomValues(new Uint8Array(16)))
		.map(b => b.toString(16).padStart(2, '0'))
		.join('');
}

// Check if request is from allowed origin
export function checkOrigin(request, allowedOrigins = ['localhost', 'thedonairguys.ca']) {
	const origin = request.headers.get('origin');
	if (!origin) return true; // Same-origin requests don't have origin header

	const url = new URL(origin);
	return allowedOrigins.some(allowed => url.hostname.endsWith(allowed));
}

console.log('[SECURITY] All security utilities ready');
