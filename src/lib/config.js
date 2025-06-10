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
