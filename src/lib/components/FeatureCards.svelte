<!-- Feature Cards Component - PRD: 3-column grid with brand colors -->
<script>
	import { onMount } from 'svelte';

	let cardsVisible = false;

	onMount(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					cardsVisible = true;
					observer.unobserve(entry.target);
				}
			});
		}, { threshold: 0.1 });

		const section = document.querySelector('.feature-cards');
		if (section) observer.observe(section);

		return () => observer.disconnect();
	});

	const features = [
		{
			icon: '🕐',
			title: 'Fresh Daily',
			description: 'Made fresh every day with premium ingredients and traditional recipes',
			color: 'red'
		},
		{
			icon: '✓',
			title: '100% Halal',
			description: 'Certified halal ingredients and preparation methods you can trust',
			color: 'yellow'
		},
		{
			icon: '❤️',
			title: 'Family Owned',
			description: 'Proudly serving Edmonton families since 2018 with authentic flavors',
			color: 'red'
		}
	];
</script>

<section class="feature-cards" class:visible={cardsVisible}>
	<div class="container">
		<h2 class="section-title">Why Choose The Donair Guys?</h2>
		<div class="cards-grid">
			{#each features as feature, index}
				<div class="feature-card" class:red={feature.color === 'red'} class:yellow={feature.color === 'yellow'} style="animation-delay: {index * 0.2}s">
					<div class="card-icon" class:spin={cardsVisible}>
						{feature.icon}
					</div>
					<h3 class="card-title">{feature.title}</h3>
					<p class="card-description">{feature.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.feature-cards {
		padding: 5rem 0;
		background: linear-gradient(135deg, var(--color-off-white) 0%, var(--color-light-gray) 100%);
		position: relative;
		overflow: hidden;
	}

	.feature-cards::before {
		content: '';
		position: absolute;
		top: -50px;
		left: 0;
		right: 0;
		height: 100px;
		background: var(--color-secondary);
		transform: skewY(-2deg);
		z-index: 1;
	}

	.container {
		position: relative;
		z-index: 2;
	}

	.section-title {
		text-align: center;
		font-size: clamp(2rem, 4vw, 3rem);
		font-weight: 900;
		color: var(--color-primary);
		margin-bottom: 3rem;
		opacity: 0;
		transform: translateY(30px);
		transition: all 0.6s ease-out;
	}

	.visible .section-title {
		opacity: 1;
		transform: translateY(0);
	}

	.cards-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
		max-width: 1200px;
		margin: 0 auto;
	}

	.feature-card {
		background: white;
		padding: 2.5rem 2rem;
		border-radius: 20px;
		text-align: center;
		position: relative;
		overflow: hidden;
		opacity: 0;
		transform: translateY(50px) scale(0.9);
		transition: all 0.6s ease-out;
		box-shadow: 0 10px 30px rgba(0,0,0,0.1);
	}

	.visible .feature-card {
		opacity: 1;
		transform: translateY(0) scale(1);
	}

	.feature-card::before {
		content: '';
		position: absolute;
		top: -2px;
		left: -2px;
		right: -2px;
		bottom: -2px;
		border-radius: 20px;
		opacity: 0;
		z-index: -1;
		transition: opacity 0.3s ease;
	}

	.feature-card.red::before {
		background: linear-gradient(135deg, var(--color-primary), #ff6b6b);
	}

	.feature-card.yellow::before {
		background: linear-gradient(135deg, var(--color-secondary), #ffd93d);
	}

	.feature-card:hover {
		transform: translateY(-10px) scale(1.02);
		box-shadow: 0 20px 40px rgba(0,0,0,0.15);
	}

	.feature-card:hover::before {
		opacity: 1;
	}

	.card-icon {
		font-size: 3rem;
		margin-bottom: 1.5rem;
		display: inline-block;
		transition: transform 0.3s ease;
	}

	.card-icon.spin {
		animation: iconSpin 0.6s ease-out;
	}

	.card-title {
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--color-primary);
		margin-bottom: 1rem;
	}

	.card-description {
		color: var(--color-gray);
		line-height: 1.6;
		font-size: 1rem;
	}

	@keyframes iconSpin {
		0% { transform: rotate(0deg) scale(1); }
		50% { transform: rotate(180deg) scale(1.2); }
		100% { transform: rotate(360deg) scale(1); }
	}

	/* Mobile Responsive */
	@media (max-width: 768px) {
		.feature-cards {
			padding: 3rem 0;
		}

		.cards-grid {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}

		.feature-card {
			padding: 2rem 1.5rem;
		}
	}
</style>
