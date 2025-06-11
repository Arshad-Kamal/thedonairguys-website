<script>
	export let heroVisible = false;
</script>

<section class="hero" class:visible={heroVisible}>
	<div class="hero-content">
		<div class="hero-text">
			<h1 class="hero-title">Edmonton's Favorite<br><span class="highlight">Halal Donairs</span></h1>
			<p class="hero-subtitle">Fresh daily ingredients, traditional recipes, 100% halal certified since 2018</p>
			<div class="hero-badge">
				<span class="badge-text">100% Halal Certified</span>
				<span class="badge-check">✓</span>
			</div>
			<div class="hero-actions">
				<button class="btn-primary">Order Now</button>
				<button class="btn-secondary">View Menu</button>
			</div>
		</div>
		<div class="hero-visual">
			<!-- CSS-only visual design per MVP approach -->
			<div class="gradient-circle"></div>
			<div class="floating-elements">
				<div class="element element-1"></div>
				<div class="element element-2"></div>
				<div class="element element-3"></div>
			</div>
		</div>
	</div>
	<div class="scroll-indicator">
		<span>Scroll to explore</span>
		<div class="scroll-arrow"></div>
	</div>
</section>

<style>
	/* Hero Section Styles - PRD Brand Colors Required */
	.hero {
		height: 100vh;
		background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		overflow: hidden;
		opacity: 0;
		transform: translateY(30px);
		transition: all 0.8s ease-out;
	}

	.hero.visible {
		opacity: 1;
		transform: translateY(0);
	}

	.hero-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		max-width: 1200px;
		padding: 0 2rem;
		align-items: center;
	}

	.hero-title {
		font-size: clamp(2.5rem, 5vw, 4rem);
		font-weight: 900;
		color: white;
		line-height: 1.1;
		margin-bottom: 1.5rem;
	}

	.highlight {
		color: var(--color-secondary);
		text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
	}

	.hero-subtitle {
		font-size: 1.2rem;
		color: rgba(255,255,255,0.9);
		margin-bottom: 2rem;
		line-height: 1.6;
	}

	.hero-badge {
		background: var(--color-secondary);
		color: var(--color-primary);
		padding: 1rem 2rem;
		border-radius: 50px;
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		font-weight: 700;
		margin-bottom: 2rem;
		box-shadow: 0 8px 24px rgba(248, 237, 35, 0.3);
		animation: float 3s ease-in-out infinite;
	}

	.badge-check {
		background: var(--color-success);
		color: white;
		width: 24px;
		height: 24px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.8rem;
	}

	.hero-actions {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.btn-primary {
		background: linear-gradient(135deg, var(--color-primary), #ff6b6b);
		color: white;
		padding: 1.2rem 2.5rem;
		border: none;
		border-radius: 50px;
		font-weight: 700;
		font-size: 1.1rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		cursor: pointer;
		transition: all 0.3s ease;
		box-shadow: 0 8px 24px rgba(237, 30, 36, 0.3);
	}

	.btn-primary:hover {
		transform: translateY(-3px) scale(1.02);
		box-shadow: 0 12px 32px rgba(237, 30, 36, 0.4);
	}

	.btn-secondary {
		background: transparent;
		color: white;
		border: 2px solid white;
		padding: 1.2rem 2.5rem;
		border-radius: 50px;
		font-weight: 700;
		font-size: 1.1rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		cursor: pointer;
		transition: all 0.3s ease;
	}

	.btn-secondary:hover {
		background: white;
		color: var(--color-primary);
		transform: translateY(-3px);
	}

	/* Visual Elements */
	.hero-visual {
		position: relative;
		height: 400px;
	}

	.gradient-circle {
		width: 300px;
		height: 300px;
		background: linear-gradient(45deg, var(--color-secondary), #ffd93d);
		border-radius: 50%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		opacity: 0.8;
		animation: pulse 4s ease-in-out infinite;
	}

	.floating-elements {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}

	.element {
		position: absolute;
		background: rgba(255,255,255,0.1);
		border-radius: 50%;
		animation: float 6s ease-in-out infinite;
	}

	.element-1 {
		width: 60px;
		height: 60px;
		top: 20%;
		left: 20%;
		animation-delay: 0s;
	}

	.element-2 {
		width: 40px;
		height: 40px;
		top: 60%;
		right: 30%;
		animation-delay: 2s;
	}

	.element-3 {
		width: 80px;
		height: 80px;
		bottom: 20%;
		left: 60%;
		animation-delay: 4s;
	}

	.scroll-indicator {
		position: absolute;
		bottom: 2rem;
		left: 50%;
		transform: translateX(-50%);
		color: white;
		text-align: center;
		animation: bounce 2s infinite;
	}

	.scroll-arrow {
		width: 20px;
		height: 20px;
		border-right: 2px solid white;
		border-bottom: 2px solid white;
		transform: rotate(45deg);
		margin: 0.5rem auto;
	}

	/* Animations */
	@keyframes float {
		0%, 100% { transform: translateY(0); }
		50% { transform: translateY(-20px); }
	}

	@keyframes pulse {
		0%, 100% { transform: translate(-50%, -50%) scale(1); }
		50% { transform: translate(-50%, -50%) scale(1.1); }
	}

	@keyframes bounce {
		0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
		40% { transform: translateX(-50%) translateY(-10px); }
		60% { transform: translateX(-50%) translateY(-5px); }
	}

	/* Mobile Responsive */
	@media (max-width: 768px) {
		.hero-content {
			grid-template-columns: 1fr;
			text-align: center;
			gap: 2rem;
		}

		.hero-visual {
			height: 200px;
		}

		.gradient-circle {
			width: 200px;
			height: 200px;
		}

		.hero-actions {
			justify-content: center;
		}

		.btn-primary, .btn-secondary {
			padding: 1rem 2rem;
			font-size: 1rem;
		}
	}

	/* Focus styles for accessibility */
	.btn-primary:focus, .btn-secondary:focus {
		outline: 3px solid rgba(255, 255, 255, 0.8);
		outline-offset: 2px;
	}

	/* Reduce motion for users who prefer it */
	@media (prefers-reduced-motion: reduce) {
		.hero,
		.btn-primary,
		.btn-secondary {
			transition: none;
		}

		.hero-badge,
		.gradient-circle,
		.element,
		.scroll-indicator {
			animation: none;
		}
	}
</style>
