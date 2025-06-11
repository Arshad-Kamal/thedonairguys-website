<script>
	import { page } from '$app/state';
</script>

<main>
	<div class="container">
		<div class="error-content">
			<h1 class="error-code">{page.status || 404}</h1>
			<h2 class="error-title">
				{page.status === 404 ? 'Page Not Found' : 'Something Went Wrong'}
			</h2>
			<p class="error-message">
				{page.error?.message || 'The page you are looking for does not exist.'}
			</p>
			<div class="actions">
				<a href="/" class="button">Back to Home</a>
			</div>
		</div>
	</div>
</main>

<style>
	main {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		background-color: var(--color-off-white);
	}

	.error-content {
		text-align: center;
		padding: var(--space-2xl);
	}

	.error-code {
		font-size: clamp(4rem, 10vw, 8rem);
		font-weight: 700;
		color: var(--color-primary);
		line-height: 1;
		margin-bottom: var(--space-md);
	}

	.error-title {
		font-size: var(--font-size-2xl);
		color: var(--color-dark-gray);
		margin-bottom: var(--space-lg);
		font-weight: 600;
	}

	.error-message {
		font-size: var(--font-size-lg);
		color: var(--color-gray);
		margin-bottom: var(--space-2xl);
		max-width: 500px;
		margin-left: auto;
		margin-right: auto;
	}

	.actions {
		margin-top: var(--space-xl);
	}

	.button {
		display: inline-block;
		padding: var(--space-md) var(--space-xl);
		background-color: var(--color-primary);
		color: var(--color-white);
		text-decoration: none;
		border-radius: 4px;
		font-weight: 500;
		transition: background-color var(--duration-fast);
		box-shadow: var(--shadow-md);
	}

	.button:hover {
		background-color: var(--color-primary-dark);
		box-shadow: var(--shadow-lg);
	}

	.button:focus {
		outline: 2px solid var(--color-primary);
		outline-offset: 2px;
	}

	@media (max-width: 640px) {
		.error-code {
			font-size: 4rem;
		}

		.error-title {
			font-size: var(--font-size-xl);
		}

		.error-message {
			font-size: var(--font-size-base);
		}
	}
</style>
