// config.js - SvelteKit 2.0 Environment Configuration
// CRITICAL: Uses proper SvelteKit environment modules

import { PUBLIC_SITE_URL } from '$env/static/public';
import { dev } from '$app/environment';

// Simple validation function
function validateConfig() {
	console.log('=== SVELTEKIT CONFIG VALIDATION ===');

	// Check PUBLIC_SITE_URL
	if (!PUBLIC_SITE_URL) {
		console.error('❌ PUBLIC_SITE_URL is missing from .env file');
		throw new Error(
			'CANNOT START: Missing required environment variable PUBLIC_SITE_URL\n\n' +
				'Please add this to your .env file:\n' +
				'PUBLIC_SITE_URL=http://localhost:5173\n\n' +
				'Make sure the .env file is in your project root directory.'
		);
	}

	console.log('✅ PUBLIC_SITE_URL:', PUBLIC_SITE_URL);
	console.log('✅ Environment:', dev ? 'development' : 'production');
	console.log('=== CONFIG VALIDATION COMPLETE ===\n');
}

// Run validation
validateConfig();

// Export validated configuration
export const config = {
	siteUrl: PUBLIC_SITE_URL,
	isDev: dev,
	isProd: !dev,
	baseUrl: PUBLIC_SITE_URL
};

// Default export
export default config;
