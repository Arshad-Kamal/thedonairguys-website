<!-- Menu Page - PRD: Hero banner with category navigation -->
<script>
	import { onMount } from 'svelte';

	let { data } = $props();
	let heroVisible = $state(false);

	// Handle case where data might not be loaded yet
	const menuData = $derived((data && 'menuData' in data && data.menuData) || []);
	const categories = $derived((data && 'categories' in data && data.categories) || []);

	onMount(() => {
		heroVisible = true;
	});
</script>

<svelte:head>
	<title>Our Menu - The Donair Guys</title>
	<meta name="description" content="Explore our complete menu of 100% halal donairs, pizza, burgers, poutine, wings and salads. Fresh ingredients, authentic flavors." />
</svelte:head>

<main class="menu-page">
	<section class="menu-hero" class:visible={heroVisible}>
		<div class="hero-background">
			<div class="gradient-overlay"></div>
			<div class="floating-food-icons">
				<div class="food-icon icon-1">🥙</div>
				<div class="food-icon icon-2">🍕</div>
				<div class="food-icon icon-3">🍔</div>
				<div class="food-icon icon-4">🍟</div>
				<div class="food-icon icon-5">🥗</div>
			</div>
		</div>
		<div class="hero-content">
			<div class="halal-badge rotating">
				<span>100% Halal</span>
			</div>
			<h1 class="hero-title">Our Menu</h1>
			<p class="hero-subtitle">Authentic flavors, fresh ingredients, traditional recipes</p>
		</div>
	</section>

	<div class="container">

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
	</div>
</main>

<style>
	.menu-hero {
		height: 40vh;
		min-height: 400px;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		opacity: 0;
		transform: translateY(30px);
		transition: all 0.8s ease-out;
	}

	.menu-hero.visible {
		opacity: 1;
		transform: translateY(0);
	}

	.hero-background {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 1;
	}

	.gradient-overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
		opacity: 0.9;
	}

	.floating-food-icons {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}

	.food-icon {
		position: absolute;
		font-size: 2rem;
		opacity: 0.3;
		animation: floatFood 8s ease-in-out infinite;
	}

	.icon-1 { top: 20%; left: 10%; animation-delay: 0s; }
	.icon-2 { top: 30%; right: 15%; animation-delay: 1.6s; }
	.icon-3 { bottom: 30%; left: 20%; animation-delay: 3.2s; }
	.icon-4 { bottom: 20%; right: 25%; animation-delay: 4.8s; }
	.icon-5 { top: 50%; left: 50%; animation-delay: 6.4s; }

	.hero-content {
		position: relative;
		z-index: 2;
		text-align: center;
		color: white;
	}

	.halal-badge {
		background: var(--color-secondary);
		color: var(--color-primary);
		padding: 0.8rem 1.5rem;
		border-radius: 50px;
		font-weight: 700;
		display: inline-block;
		margin-bottom: 2rem;
		box-shadow: 0 8px 24px rgba(248, 237, 35, 0.3);
	}

	.halal-badge.rotating {
		animation: slowRotate 20s linear infinite;
	}

	.hero-title {
		font-size: clamp(3rem, 6vw, 5rem);
		font-weight: 900;
		margin-bottom: 1rem;
		text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
		background: linear-gradient(45deg, white, var(--color-secondary));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.hero-subtitle {
		font-size: 1.2rem;
		opacity: 0.9;
		max-width: 600px;
		margin: 0 auto;
	}

	@keyframes floatFood {
		0%, 100% { transform: translateY(0) rotate(0deg); }
		25% { transform: translateY(-20px) rotate(90deg); }
		50% { transform: translateY(-10px) rotate(180deg); }
		75% { transform: translateY(-30px) rotate(270deg); }
	}

	@keyframes slowRotate {
		from { transform: rotate(0deg); }
		to { transform: rotate(360deg); }
	}

	/* Mobile Responsive */
	@media (max-width: 768px) {
		.menu-hero {
			height: 50vh;
			min-height: 300px;
		}

		.food-icon {
			font-size: 1.5rem;
		}

		.hero-title {
			font-size: 2.5rem;
		}
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
