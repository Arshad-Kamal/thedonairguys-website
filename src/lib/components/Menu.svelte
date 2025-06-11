<script>
	let { menuData = [], categories = [], loading = false } = $props();

	// Handle loading state and data validation
	const validMenuData = $derived(Array.isArray(menuData) ? menuData : []);
	const validCategories = $derived(Array.isArray(categories) ? categories : []);

	// Filter items by category
	function getItemsByCategory(categoryId) {
		return validMenuData.filter((item) => item.category === categoryId);
	}

	// Format price for display
	function formatPrice(price) {
		if (typeof price === 'number') {
			return price.toFixed(2);
		}
		return price || '0.00';
	}
</script>

<div class="menu-component" role="region" aria-label="Restaurant menu">
	{#if loading}
		<div class="menu-loading" role="status" aria-live="polite">
			<div class="loading-spinner"></div>
			<p>Loading our delicious menu...</p>
		</div>
	{:else if validCategories.length > 0}
		<div class="menu-content">
			{#each validCategories as category}
				{@const categoryItems = getItemsByCategory(category.id)}
				{#if categoryItems.length > 0}
					<section class="menu-category" id="category-{category.id}">
						<header class="category-header">
							<h2 class="category-title">{category.name}</h2>
							{#if category.description}
								<p class="category-description">{category.description}</p>
							{/if}
						</header>

						<div class="menu-items" role="list">
							{#each categoryItems as item}
								<article class="menu-item" role="listitem">
									<div class="item-content">
										<div class="item-header">
											<h3 class="item-name">{item.name}</h3>
											<span class="item-price" aria-label="Price: ${formatPrice(item.price)}">
												${formatPrice(item.price)}
											</span>
										</div>

										{#if item.description}
											<p class="item-description">{item.description}</p>
										{/if}

										{#if item.ingredients && item.ingredients.length > 0}
											<div class="item-ingredients">
												<span class="ingredients-label">Ingredients:</span>
												<span class="ingredients-list">{item.ingredients.join(', ')}</span>
											</div>
										{/if}

										<div class="item-tags">
											{#if item.spicy}
												<span class="tag tag-spicy" aria-label="Spicy item" title="Spicy">
													🌶️ Spicy
												</span>
											{/if}
											{#if item.vegetarian}
												<span
													class="tag tag-vegetarian"
													aria-label="Vegetarian option"
													title="Vegetarian"
												>
													🥬 Vegetarian
												</span>
											{/if}
											{#if item.popular}
												<span
													class="tag tag-popular"
													aria-label="Popular item"
													title="Customer favorite"
												>
													⭐ Popular
												</span>
											{/if}
										</div>
									</div>
								</article>
							{/each}
						</div>
					</section>
				{/if}
			{/each}
		</div>
	{:else}
		<div class="menu-empty" role="status">
			<div class="empty-icon">🍽️</div>
			<h2>Menu Coming Soon</h2>
			<p>
				We're preparing something delicious for you. Please check back soon or <a href="/contact"
					>contact us</a
				> for more information.
			</p>
		</div>
	{/if}
</div>

<style>
	.menu-component {
		width: 100%;
	}

	/* Loading State */
	.menu-loading {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 4rem 2rem;
		text-align: center;
		color: var(--neutral-600);
	}

	.loading-spinner {
		width: 40px;
		height: 40px;
		border: 3px solid var(--neutral-300);
		border-top: 3px solid var(--primary-600);
		border-radius: 50%;
		animation: spin 1s linear infinite;
		margin-bottom: 1rem;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	/* Menu Content */
	.menu-content {
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
	}

	.menu-category {
		padding-bottom: 2rem;
		border-bottom: 1px solid var(--neutral-200);
	}

	.menu-category:last-child {
		border-bottom: none;
		padding-bottom: 0;
	}

	.category-header {
		margin-bottom: 1.5rem;
	}

	.category-title {
		font-size: var(--text-2xl);
		font-weight: 700;
		color: var(--primary-700);
		margin-bottom: 0.5rem;
		line-height: 1.3;
	}

	.category-description {
		color: var(--neutral-600);
		font-size: var(--text-base);
		font-style: italic;
		margin: 0;
		line-height: 1.5;
	}

	/* Menu Items */
	.menu-items {
		display: grid;
		gap: 1.5rem;
	}

	.menu-item {
		background: var(--neutral-50);
		border: 1px solid var(--neutral-200);
		border-radius: 12px;
		padding: 1.5rem;
		transition: all 0.2s ease;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
	}

	.menu-item:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
		border-color: var(--primary-300);
	}

	.item-content {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.item-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 1rem;
	}

	.item-name {
		font-size: var(--text-lg);
		font-weight: 600;
		color: var(--primary-700);
		margin: 0;
		line-height: 1.3;
		flex: 1;
	}

	.item-price {
		font-size: var(--text-xl);
		font-weight: 700;
		color: var(--accent-600);
		white-space: nowrap;
	}

	.item-description {
		color: var(--neutral-700);
		font-size: var(--text-base);
		line-height: 1.5;
		margin: 0;
	}

	.item-ingredients {
		font-size: var(--text-sm);
		color: var(--neutral-600);
	}

	.ingredients-label {
		font-weight: 600;
		color: var(--neutral-700);
	}

	.ingredients-list {
		margin-left: 0.5rem;
	}

	.item-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-top: 0.25rem;
	}

	.tag {
		display: inline-flex;
		align-items: center;
		gap: 0.25rem;
		padding: 0.25rem 0.5rem;
		border-radius: 4px;
		font-size: var(--text-xs);
		font-weight: 500;
		white-space: nowrap;
	}

	.tag-spicy {
		background: #fef3c7;
		color: #d97706;
		border: 1px solid #fbbf24;
	}

	.tag-vegetarian {
		background: #dcfce7;
		color: #166534;
		border: 1px solid #86efac;
	}

	.tag-popular {
		background: #ddd6fe;
		color: #7c3aed;
		border: 1px solid #c4b5fd;
	}

	/* Empty State */
	.menu-empty {
		text-align: center;
		padding: 4rem 2rem;
		color: var(--neutral-600);
	}

	.empty-icon {
		font-size: 4rem;
		margin-bottom: 1rem;
		opacity: 0.7;
	}

	.menu-empty h2 {
		font-size: var(--text-2xl);
		color: var(--primary-600);
		margin-bottom: 1rem;
	}

	.menu-empty p {
		font-size: var(--text-base);
		line-height: 1.6;
		max-width: 500px;
		margin: 0 auto;
	}

	.menu-empty a {
		color: var(--primary-600);
		text-decoration: underline;
	}

	.menu-empty a:hover {
		color: var(--primary-700);
	}

	/* Responsive Design */
	@media (max-width: 768px) {
		.item-header {
			flex-direction: column;
			align-items: flex-start;
			gap: 0.5rem;
		}

		.item-price {
			font-size: var(--text-lg);
		}

		.category-title {
			font-size: var(--text-xl);
		}

		.menu-item {
			padding: 1.25rem;
		}

		.item-tags {
			flex-direction: column;
			align-items: flex-start;
		}
	}

	@media (max-width: 480px) {
		.menu-loading,
		.menu-empty {
			padding: 2rem 1rem;
		}

		.empty-icon {
			font-size: 3rem;
		}

		.menu-empty h2 {
			font-size: var(--text-xl);
		}
	}

	/* Focus styles for accessibility */
	.menu-item:focus-within {
		outline: 2px solid var(--primary-500);
		outline-offset: 2px;
	}

	/* Reduce motion for users who prefer it */
	@media (prefers-reduced-motion: reduce) {
		.menu-item,
		.loading-spinner {
			transition: none;
			animation: none;
		}
	}

	/* High contrast mode support */
	@media (prefers-contrast: high) {
		.menu-item {
			border-width: 2px;
		}

		.tag {
			border-width: 2px;
		}
	}
</style>
