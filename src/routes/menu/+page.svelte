<script>
	let { data } = $props();

	// Handle case where data might not be loaded yet
	const menuData = $derived((data && 'menuData' in data && data.menuData) || []);
	const categories = $derived((data && 'categories' in data && data.categories) || []);
</script>

<svelte:head>
	<title>Menu - The Donair Guys</title>
	<meta
		name="description"
		content="Explore our delicious menu of authentic donairs, wraps, and Mediterranean favorites."
	/>
</svelte:head>

<main class="container">
	<div class="menu-header">
		<h1>Our Menu</h1>
		<p>Fresh ingredients, authentic flavors, made with love</p>
	</div>

	{#if menuData.length > 0}
		<div class="menu-content">
			{#each categories as category}
				<section class="menu-category">
					<h2>{category.name}</h2>
					{#if category.description}
						<p class="category-description">{category.description}</p>
					{/if}

					<div class="menu-items">
						{#each menuData.filter((item) => item.category === category.id) as item}
							<article class="menu-item">
								<div class="item-header">
									<h3>{item.name}</h3>
									<span class="price">${item.price}</span>
								</div>

								{#if item.description}
									<p class="item-description">{item.description}</p>
								{/if}

								{#if item.ingredients && item.ingredients.length > 0}
									<p class="ingredients">
										<span class="ingredients-label">Ingredients:</span>
										{item.ingredients.join(', ')}
									</p>
								{/if}

								{#if item.spicy}
									<span class="spicy-indicator" aria-label="Spicy item">🌶️</span>
								{/if}

								{#if item.vegetarian}
									<span class="vegetarian-indicator" aria-label="Vegetarian option">🥬</span>
								{/if}
							</article>
						{/each}
					</div>
				</section>
			{/each}
		</div>
	{:else}
		<div class="menu-loading">
			<p>Loading our delicious menu...</p>
			<p>If this takes too long, please <a href="/contact">contact us</a> directly.</p>
		</div>
	{/if}

	<div class="menu-footer">
		<p>All prices subject to change. Please ask about daily specials!</p>
		<div class="action-buttons">
			<a href="/contact" class="btn btn-primary">Order Now</a>
			<a href="/" class="btn btn-secondary">Back to Home</a>
		</div>
	</div>
</main>

<style>
	.menu-header {
		text-align: center;
		margin-bottom: 3rem;
		padding: 2rem 0;
	}

	.menu-header h1 {
		font-size: var(--text-4xl);
		color: var(--primary-600);
		margin-bottom: 0.5rem;
	}

	.menu-header p {
		font-size: var(--text-lg);
		color: var(--neutral-600);
	}

	.menu-category {
		margin-bottom: 3rem;
		padding-bottom: 2rem;
		border-bottom: 1px solid var(--neutral-200);
	}

	.menu-category:last-child {
		border-bottom: none;
	}

	.menu-category h2 {
		font-size: var(--text-2xl);
		color: var(--primary-700);
		margin-bottom: 1rem;
	}

	.category-description {
		color: var(--neutral-600);
		margin-bottom: 2rem;
		font-style: italic;
	}

	.menu-items {
		display: grid;
		gap: 1.5rem;
	}

	.menu-item {
		padding: 1.5rem;
		border: 1px solid var(--neutral-200);
		border-radius: 8px;
		background: var(--neutral-50);
		transition:
			transform 0.2s ease,
			box-shadow 0.2s ease;
	}

	.menu-item:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}

	.item-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 0.5rem;
	}

	.item-header h3 {
		font-size: var(--text-lg);
		color: var(--primary-600);
		margin: 0;
		flex: 1;
	}

	.price {
		font-size: var(--text-lg);
		font-weight: 600;
		color: var(--accent-600);
		margin-left: 1rem;
	}

	.item-description {
		color: var(--neutral-600);
		margin-bottom: 0.5rem;
		line-height: 1.5;
	}

	.ingredients {
		font-size: var(--text-sm);
		color: var(--neutral-500);
		margin-bottom: 0.5rem;
	}

	.ingredients-label {
		font-weight: 600;
	}

	.spicy-indicator,
	.vegetarian-indicator {
		display: inline-block;
		margin-right: 0.5rem;
		font-size: var(--text-sm);
	}

	.menu-loading {
		text-align: center;
		padding: 4rem 2rem;
		color: var(--neutral-600);
	}

	.menu-loading p {
		margin-bottom: 1rem;
	}

	.menu-loading a {
		color: var(--primary-600);
		text-decoration: underline;
	}

	.menu-footer {
		text-align: center;
		margin-top: 3rem;
		padding-top: 2rem;
		border-top: 1px solid var(--neutral-200);
	}

	.menu-footer p {
		color: var(--neutral-600);
		margin-bottom: 2rem;
		font-size: var(--text-sm);
	}

	.action-buttons {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	.btn {
		padding: 0.75rem 1.5rem;
		border-radius: 6px;
		text-decoration: none;
		font-weight: 600;
		transition: all 0.2s ease;
		display: inline-block;
	}

	.btn-primary {
		background: var(--primary-600);
		color: white;
	}

	.btn-primary:hover {
		background: var(--primary-700);
	}

	.btn-secondary {
		background: var(--neutral-200);
		color: var(--neutral-700);
	}

	.btn-secondary:hover {
		background: var(--neutral-300);
	}

	@media (max-width: 768px) {
		.item-header {
			flex-direction: column;
			align-items: flex-start;
		}

		.price {
			margin-left: 0;
			margin-top: 0.5rem;
		}

		.action-buttons {
			flex-direction: column;
			align-items: center;
		}

		.btn {
			width: 100%;
			max-width: 300px;
		}
	}
</style>
