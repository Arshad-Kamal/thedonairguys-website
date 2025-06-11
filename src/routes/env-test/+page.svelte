<script>
	import { config } from '$lib/config.js';
	import { PUBLIC_SITE_URL } from '$env/static/public';
	import { dev } from '$app/environment';

	// Test data
	const envStatus = {
		siteUrl: PUBLIC_SITE_URL,
		isDev: dev,
		isProd: !dev,
		configWorking: !!config,
		timestamp: new Date().toISOString()
	};
</script>

<svelte:head>
	<title>Environment Variables Test - The Donair Guys</title>
	<meta name="description" content="Test page for environment variables" />
</svelte:head>

<div class="container">
	<header>
		<h1>🧪 Environment Variables Test</h1>
		<p>Testing SvelteKit 2.0 environment variable configuration</p>
	</header>

	<main>
		<section class="test-results">
			<h2>✅ Test Results</h2>

			<div class="result-card">
				<h3>PUBLIC_SITE_URL</h3>
				<p class="value">{envStatus.siteUrl}</p>
				<p class="status {envStatus.siteUrl ? 'success' : 'error'}">
					{envStatus.siteUrl ? '✅ Working' : '❌ Missing'}
				</p>
			</div>

			<div class="result-card">
				<h3>Environment Mode</h3>
				<p class="value">{envStatus.isDev ? 'Development' : 'Production'}</p>
				<p class="status success">✅ Working</p>
			</div>

			<div class="result-card">
				<h3>Config Module</h3>
				<p class="value">{envStatus.configWorking ? 'Loaded Successfully' : 'Failed to Load'}</p>
				<p class="status {envStatus.configWorking ? 'success' : 'error'}">
					{envStatus.configWorking ? '✅ Working' : '❌ Error'}
				</p>
			</div>

			<div class="result-card">
				<h3>Config Values</h3>
				<pre class="json">{JSON.stringify(config, null, 2)}</pre>
			</div>
		</section>

		<section class="instructions">
			<h2>📋 Instructions</h2>
			<p>If all tests show ✅ Working, your environment variables are properly configured!</p>
			<p>If any test shows ❌ Error, check your <code>.env</code> file in the project root.</p>

			<div class="env-example">
				<h3>Expected .env file content:</h3>
				<pre>PUBLIC_SITE_URL=http://localhost:5173</pre>
			</div>
		</section>

		<section class="debug-info">
			<h2>🔍 Debug Information</h2>
			<ul>
				<li><strong>Test Time:</strong> {envStatus.timestamp}</li>
				<li><strong>SvelteKit Version:</strong> 2.0+</li>
				<li><strong>Environment System:</strong> $env/static/public</li>
				<li><strong>Config Import:</strong> Working</li>
			</ul>
		</section>
	</main>

	<footer>
		<p><a href="/">← Back to Home</a></p>
	</footer>
</div>

<style>
	.container {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
	}

	header {
		text-align: center;
		margin-bottom: 3rem;
	}

	h1 {
		color: #2563eb;
		margin-bottom: 0.5rem;
	}

	h2 {
		color: #1f2937;
		border-bottom: 2px solid #e5e7eb;
		padding-bottom: 0.5rem;
		margin-bottom: 1.5rem;
	}

	.test-results {
		margin-bottom: 3rem;
	}

	.result-card {
		background: #f9fafb;
		border: 1px solid #e5e7eb;
		border-radius: 8px;
		padding: 1.5rem;
		margin-bottom: 1rem;
	}

	.result-card h3 {
		margin: 0 0 0.5rem 0;
		color: #374151;
	}

	.value {
		font-weight: 600;
		font-size: 1.1rem;
		margin: 0.5rem 0;
		color: #1f2937;
	}

	.status {
		font-weight: 600;
		margin: 0;
	}

	.status.success {
		color: #059669;
	}

	.status.error {
		color: #dc2626;
	}

	.json {
		background: #1f2937;
		color: #e5e7eb;
		padding: 1rem;
		border-radius: 4px;
		overflow-x: auto;
		font-size: 0.9rem;
	}

	.instructions {
		background: #eff6ff;
		border-left: 4px solid #2563eb;
		padding: 1.5rem;
		margin-bottom: 2rem;
		border-radius: 0 8px 8px 0;
	}

	.env-example {
		margin-top: 1rem;
	}

	.env-example pre {
		background: #374151;
		color: #e5e7eb;
		padding: 1rem;
		border-radius: 4px;
		font-size: 0.9rem;
	}

	.debug-info {
		background: #f3f4f6;
		padding: 1.5rem;
		border-radius: 8px;
		margin-bottom: 2rem;
	}

	.debug-info ul {
		margin: 0;
		padding-left: 1.5rem;
	}

	.debug-info li {
		margin-bottom: 0.5rem;
	}

	code {
		background: #e5e7eb;
		padding: 0.2rem 0.4rem;
		border-radius: 3px;
		font-family: 'Courier New', monospace;
		font-size: 0.9rem;
	}

	footer {
		text-align: center;
		margin-top: 3rem;
		padding-top: 2rem;
		border-top: 1px solid #e5e7eb;
	}

	footer a {
		color: #2563eb;
		text-decoration: none;
		font-weight: 500;
	}

	footer a:hover {
		text-decoration: underline;
	}
</style>
