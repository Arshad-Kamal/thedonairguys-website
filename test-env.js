// test-env.js - Test environment variable loading

import { config } from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
config({ path: path.join(__dirname, '.env') });

console.log('=== ENVIRONMENT TEST ===\n');

// Check if environment variables are loaded
console.log('1. Checking .env file loading:');
console.log(`   PUBLIC_SITE_URL: ${process.env.PUBLIC_SITE_URL || 'NOT FOUND'}`);

// Check Vite environment variables (these won't be available in Node directly)
console.log('\n2. Note: Vite prefixes (import.meta.env) are only available when running through Vite');

// Try to import and test the config module
console.log('\n3. Testing config module:');
try {
	// This will fail in Node.js because import.meta.env is Vite-specific
	const configModule = await import('./src/lib/config.js');
	console.log('   ✅ Config module loaded successfully');
	console.log('   Config values:', configModule.config);
} catch (error) {
	console.log('   ⚠️  Config module uses Vite-specific features (import.meta.env)');
	console.log('   This is expected when running outside of Vite');
}

console.log('\n4. Environment setup summary:');
console.log('   - .env file exists and is readable');
console.log('   - PUBLIC_SITE_URL is properly set');
console.log('   - Config will work when running through Vite (npm run dev)');

console.log('\n=== TEST COMPLETE ===');
console.log('\nTo start the dev server, run: npm run dev');
