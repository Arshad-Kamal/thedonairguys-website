<script>
	// Hero content - would normally come from CMS/config
	const heroContent = {
		headline: 'Authentic Halifax Donairs',
		tagline: 'Made with love, served with pride',
		description:
			'Experience the real taste of Halifax with our authentic donairs, made fresh daily using traditional recipes and the finest ingredients.',
		primaryCTA: {
			text: 'View Our Menu',
			href: '/menu'
		},
		secondaryCTA: {
			text: 'Contact Us',
			href: '/contact'
		}
	};

	// Simple animation state
	let heroVisible = $state(false);

	// Set hero visible on mount for animation
	$effect(() => {
		heroVisible = true;
	});
</script>

<section class="hero" class:visible={heroVisible} aria-labelledby="hero-title">
	<div class="hero-container">
		<div class="hero-content">
			<div class="hero-text">
				<h1 id="hero-title" class="hero-headline">
					{heroContent.headline}
				</h1>

				<p class="hero-tagline">
					{heroContent.tagline}
				</p>

				<p class="hero-description">
					{heroContent.description}
				</p>

				<div class="hero-actions">
					<a
						href={heroContent.primaryCTA.href}
						class="btn btn-primary btn-large"
						aria-describedby="hero-description"
					>
						{heroContent.primaryCTA.text}
					</a>

					<a href={heroContent.secondaryCTA.href} class="btn btn-secondary btn-large">
						{heroContent.secondaryCTA.text}
					</a>
				</div>
			</div>

			<div class="hero-visual">
				<div class="visual-placeholder">
					<div class="donair-icon">🥙</div>
					<p class="visual-text">Fresh • Authentic • Local</p>
				</div>
			</div>
		</div>

		<div class="hero-scroll-indicator" aria-hidden="true">
			<span class="scroll-text">Scroll to explore</span>
			<div class="scroll-arrow">↓</div>
		</div>
	</div>
</section>

<style>
	.hero {
		background: linear-gradient(
			135deg,
			var(--primary-600) 0%,
			var(--primary-700) 50%,
			var(--accent-600) 100%
		);
		color: white;
		min-height: 90vh;
		display: flex;
		align-items: center;
		position: relative;
		overflow: hidden;
	}

	.hero::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.1);
		z-index: 1;
	}

	.hero-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem 1rem;
		position: relative;
		z-index: 2;
		width: 100%;
	}

	.hero-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
		align-items: center;
		min-height: 500px;
	}

	.hero-text {
		opacity: 0;
		transform: translateY(30px);
		transition: all 0.8s ease;
	}

	.hero.visible .hero-text {
		opacity: 1;
		transform: translateY(0);
	}

	.hero-headline {
		font-size: var(--text-hero);
		font-weight: 700;
		line-height: 1.1;
		margin-bottom: 1rem;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
	}

	.hero-tagline {
		font-size: var(--text-2xl);
		font-weight: 300;
		margin-bottom: 1.5rem;
		color: var(--neutral-100);
		font-style: italic;
	}

	.hero-description {
		font-size: var(--text-lg);
		line-height: 1.6;
		margin-bottom: 2rem;
		color: var(--neutral-200);
		max-width: 500px;
	}

	.hero-actions {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.btn {
		padding: 0.75rem 1.5rem;
		border-radius: 8px;
		text-decoration: none;
		font-weight: 600;
		font-size: var(--text-base);
		transition: all 0.3s ease;
		display: inline-block;
		text-align: center;
		border: 2px solid transparent;
		cursor: pointer;
	}

	.btn-large {
		padding: 1rem 2rem;
		font-size: var(--text-lg);
	}

	.btn-primary {
		background: white;
		color: var(--primary-700);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
	}

	.btn-primary:hover {
		background: var(--neutral-100);
		transform: translateY(-2px);
		box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
	}

	.btn-secondary {
		background: transparent;
		color: white;
		border-color: white;
	}

	.btn-secondary:hover {
		background: white;
		color: var(--primary-700);
		transform: translateY(-2px);
	}

	.hero-visual {
		display: flex;
		justify-content: center;
		align-items: center;
		opacity: 0;
		transform: translateX(30px);
		transition: all 0.8s ease 0.3s;
	}

	.hero.visible .hero-visual {
		opacity: 1;
		transform: translateX(0);
	}

	.visual-placeholder {
		background: rgba(255, 255, 255, 0.1);
		border: 2px solid rgba(255, 255, 255, 0.3);
		border-radius: 20px;
		padding: 3rem 2rem;
		text-align: center;
		backdrop-filter: blur(10px);
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
		min-height: 300px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.donair-icon {
		font-size: 6rem;
		margin-bottom: 1rem;
		animation: float 3s ease-in-out infinite;
	}

	.visual-text {
		font-size: var(--text-xl);
		font-weight: 600;
		color: var(--neutral-100);
		margin: 0;
		letter-spacing: 0.1em;
	}

	.hero-scroll-indicator {
		position: absolute;
		bottom: 2rem;
		left: 50%;
		transform: translateX(-50%);
		text-align: center;
		opacity: 0.7;
		animation: bounce 2s infinite;
	}

	.scroll-text {
		display: block;
		font-size: var(--text-sm);
		margin-bottom: 0.5rem;
		color: var(--neutral-200);
	}

	.scroll-arrow {
		font-size: var(--text-xl);
		color: var(--neutral-300);
	}

	/* Animations */
	@keyframes float {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-10px);
		}
	}

	@keyframes bounce {
		0%,
		20%,
		50%,
		80%,
		100% {
			transform: translateX(-50%) translateY(0);
		}
		40% {
			transform: translateX(-50%) translateY(-10px);
		}
		60% {
			transform: translateX(-50%) translateY(-5px);
		}
	}

	/* Responsive Design */
	@media (max-width: 968px) {
		.hero-content {
			grid-template-columns: 1fr;
			gap: 2rem;
			text-align: center;
		}

		.hero-headline {
			font-size: var(--text-4xl);
		}

		.hero-tagline {
			font-size: var(--text-xl);
		}

		.hero-description {
			font-size: var(--text-base);
			max-width: none;
		}

		.visual-placeholder {
			padding: 2rem 1.5rem;
			min-height: 200px;
		}

		.donair-icon {
			font-size: 4rem;
		}

		.visual-text {
			font-size: var(--text-lg);
		}
	}

	@media (max-width: 640px) {
		.hero {
			min-height: 80vh;
		}

		.hero-container {
			padding: 1rem;
		}

		.hero-headline {
			font-size: var(--text-3xl);
		}

		.hero-tagline {
			font-size: var(--text-lg);
		}

		.hero-actions {
			flex-direction: column;
			align-items: center;
		}

		.btn {
			width: 100%;
			max-width: 280px;
		}

		.hero-scroll-indicator {
			bottom: 1rem;
		}
	}

	/* Focus styles for accessibility */
	.btn:focus {
		outline: 3px solid rgba(255, 255, 255, 0.8);
		outline-offset: 2px;
	}

	/* Reduce motion for users who prefer it */
	@media (prefers-reduced-motion: reduce) {
		.hero-text,
		.hero-visual,
		.btn {
			transition: none;
		}

		.donair-icon,
		.hero-scroll-indicator {
			animation: none;
		}
	}

	/* High contrast mode support */
	@media (prefers-contrast: high) {
		.hero {
			background: var(--primary-800);
		}

		.btn-primary {
			border: 2px solid var(--neutral-900);
		}

		.visual-placeholder {
			border-color: white;
		}
	}
</style>
