// timeouts.js - Timeout utilities and wrappers
// COPY EXACTLY - Never modify these patterns per AI Coder Framework

console.log('[TIMEOUTS] Timeout utilities loaded');

// Simple timeout wrapper - copy exactly from framework
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

// Generic async operation timeout wrapper
export async function withTimeout(asyncOperation, timeoutMs = 5000, operationName = 'operation') {
	console.log(`[TIMEOUT] Starting ${operationName} with ${timeoutMs}ms timeout`);

	return new Promise(async (resolve, reject) => {
		const timeout = setTimeout(() => {
			reject(new Error(`Timeout: ${operationName} > ${timeoutMs}ms`));
		}, timeoutMs);

		try {
			const result = await asyncOperation();
			clearTimeout(timeout);
			console.log(`[TIMEOUT] ${operationName} completed successfully`);
			resolve(result);
		} catch (error) {
			clearTimeout(timeout);
			console.error(`[TIMEOUT] ${operationName} failed:`, error.message);
			reject(error);
		}
	});
}

// Database query timeout wrapper
export async function dbQueryWithTimeout(queryFn, timeoutMs = 2000) {
	return withTimeout(queryFn, timeoutMs, 'database query');
}

// API call timeout wrapper
export async function apiCallWithTimeout(apiFn, timeoutMs = 5000) {
	return withTimeout(apiFn, timeoutMs, 'API call');
}

// File operation timeout wrapper
export async function fileOpWithTimeout(fileOp, timeoutMs = 3000) {
	return withTimeout(fileOp, timeoutMs, 'file operation');
}

// Simple delay function with timeout
export function delay(ms) {
	if (typeof ms !== 'number' || ms < 0) {
		throw new Error('Delay must be a positive number');
	}

	return new Promise(resolve => setTimeout(resolve, ms));
}

// Retry with timeout and exponential backoff
export async function retryWithTimeout(
	asyncOperation,
	maxRetries = 3,
	baseDelay = 1000,
	timeoutMs = 5000,
	operationName = 'retry operation'
) {
	console.log(`[RETRY] Starting ${operationName} with ${maxRetries} retries`);

	for (let attempt = 1; attempt <= maxRetries; attempt++) {
		try {
			return await withTimeout(asyncOperation, timeoutMs, `${operationName} attempt ${attempt}`);
		} catch (error) {
			console.warn(`[RETRY] Attempt ${attempt} failed:`, error.message);

			if (attempt === maxRetries) {
				console.error(`[RETRY] All ${maxRetries} attempts failed for ${operationName}`);
				throw new Error(`${operationName} failed after ${maxRetries} attempts: ${error.message}`);
			}

			// Exponential backoff: 1s, 2s, 4s, etc.
			const delayMs = baseDelay * Math.pow(2, attempt - 1);
			console.log(`[RETRY] Waiting ${delayMs}ms before attempt ${attempt + 1}`);
			await delay(delayMs);
		}
	}
}

// Rate limited function executor
export class RateLimitedExecutor {
	constructor(maxConcurrent = 5, delayBetweenCalls = 100) {
		this.maxConcurrent = maxConcurrent;
		this.delayBetweenCalls = delayBetweenCalls;
		this.running = 0;
		this.queue = [];
	}

	async execute(asyncOperation, timeoutMs = 5000, operationName = 'rate limited operation') {
		return new Promise((resolve, reject) => {
			this.queue.push({
				operation: asyncOperation,
				timeout: timeoutMs,
				name: operationName,
				resolve,
				reject
			});

			this.processQueue();
		});
	}

	async processQueue() {
		if (this.running >= this.maxConcurrent || this.queue.length === 0) {
			return;
		}

		const { operation, timeout, name, resolve, reject } = this.queue.shift();
		this.running++;

		try {
			const result = await withTimeout(operation, timeout, name);
			resolve(result);
		} catch (error) {
			reject(error);
		} finally {
			this.running--;

			// Add delay between calls to prevent overwhelming
			if (this.delayBetweenCalls > 0) {
				await delay(this.delayBetweenCalls);
			}

			// Process next item in queue
			this.processQueue();
		}
	}
}

// Menu data loading with timeout
export async function loadMenuWithTimeout(dataLoader, timeoutMs = 3000) {
	console.log('[MENU] Loading menu data with timeout');

	try {
		return await withTimeout(dataLoader, timeoutMs, 'menu data loading');
	} catch (error) {
		console.error('[MENU] Failed to load menu data:', error.message);
		// Return empty fallback data
		return {
			categories: [],
			items: [],
			error: error.message
		};
	}
}

// Contact form submission with timeout
export async function submitContactWithTimeout(submitFn, timeoutMs = 10000) {
	console.log('[CONTACT] Submitting contact form with timeout');

	try {
		return await withTimeout(submitFn, timeoutMs, 'contact form submission');
	} catch (error) {
		console.error('[CONTACT] Form submission failed:', error.message);
		throw new Error(`Contact form submission failed: ${error.message}`);
	}
}

// Image loading with timeout (for future use)
export async function loadImageWithTimeout(imageSrc, timeoutMs = 8000) {
	console.log('[IMAGE] Loading image with timeout:', imageSrc);

	const loadImage = () => {
		return new Promise((resolve, reject) => {
			const img = new Image();
			img.onload = () => resolve(img);
			img.onerror = () => reject(new Error(`Failed to load image: ${imageSrc}`));
			img.src = imageSrc;
		});
	};

	return withTimeout(loadImage, timeoutMs, `image loading: ${imageSrc}`);
}

// Batch operation with timeout and concurrency control
export async function batchWithTimeout(
	operations,
	batchSize = 3,
	timeoutMs = 5000,
	operationName = 'batch operation'
) {
	console.log(`[BATCH] Processing ${operations.length} operations in batches of ${batchSize}`);

	const results = [];
	const errors = [];

	for (let i = 0; i < operations.length; i += batchSize) {
		const batch = operations.slice(i, i + batchSize);
		const batchPromises = batch.map((op, index) =>
			withTimeout(op, timeoutMs, `${operationName} ${i + index + 1}`)
				.catch(error => {
					errors.push({ index: i + index, error });
					return null; // Continue with other operations
				})
		);

		const batchResults = await Promise.all(batchPromises);
		results.push(...batchResults);

		// Small delay between batches
		if (i + batchSize < operations.length) {
			await delay(100);
		}
	}

	if (errors.length > 0) {
		console.warn(`[BATCH] ${errors.length} operations failed:`, errors);
	}

	return {
		results: results.filter(r => r !== null),
		errors,
		total: operations.length,
		successful: results.filter(r => r !== null).length
	};
}

// Create a timeout manager for cleanup
export class TimeoutManager {
	constructor() {
		this.timeouts = new Set();
	}

	setTimeout(callback, delay) {
		const timeoutId = setTimeout(() => {
			this.timeouts.delete(timeoutId);
			callback();
		}, delay);

		this.timeouts.add(timeoutId);
		return timeoutId;
	}

	clearTimeout(timeoutId) {
		if (this.timeouts.has(timeoutId)) {
			clearTimeout(timeoutId);
			this.timeouts.delete(timeoutId);
		}
	}

	clearAll() {
		for (const timeoutId of this.timeouts) {
			clearTimeout(timeoutId);
		}
		this.timeouts.clear();
		console.log('[TIMEOUT] All timeouts cleared');
	}
}

// Global timeout manager instance
export const globalTimeoutManager = new TimeoutManager();

// Cleanup function for page unmount
export function cleanupTimeouts() {
	globalTimeoutManager.clearAll();
}

console.log('[TIMEOUTS] All timeout utilities ready');
