<script>
	import { page } from '$app/state';

	// Mobile menu state
	let mobileMenuOpen = $state(false);

	// Handle mobile menu toggle
	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;

		// Prevent body scroll when menu is open
		if (mobileMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	}

	// Close mobile menu when clicking outside or on link
	function closeMobileMenu() {
		mobileMenuOpen = false;
		document.body.style.overflow = '';
	}

	// Check if current page matches href
	function isActive(href) {
		if (href === '/') {
			return page.url.pathname === '/';
		}
		return page.url.pathname.startsWith(href);
	}

	// Navigation items
	const navItems = [
		{ href: '/', label: 'Home' },
		{ href: '/menu', label: 'Menu' },
		{ href: '/contact', label: 'Contact' }
	];

	// Clean up on unmount
	$effect(() => {
		return () => {
			document.body.style.overflow = '';
		};
	});
</script>

<nav class="navbar" aria-label="Main navigation">
	<div class="nav-container">
		<!-- Logo/Brand -->
		<div class="nav-brand">
			<a href="/" class="brand-link" onclick={closeMobileMenu}>
				<span class="brand-text">The Donair Guys</span>
			</a>
		</div>

		<!-- Desktop Navigation -->
		<div class="nav-menu desktop-only">
			{#each navItems as item}
				<a
					href={item.href}
					class="nav-link"
					class:active={isActive(item.href)}
					aria-current={isActive(item.href) ? 'page' : undefined}
				>
					{item.label}
				</a>
			{/each}
		</div>

		<!-- Mobile Menu Button -->
		<button
			class="mobile-menu-button mobile-only"
			onclick={toggleMobileMenu}
			aria-expanded={mobileMenuOpen}
			aria-controls="mobile-menu"
			aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
		>
			<span class="hamburger-line" class:open={mobileMenuOpen}></span>
			<span class="hamburger-line" class:open={mobileMenuOpen}></span>
			<span class="hamburger-line" class:open={mobileMenuOpen}></span>
		</button>
	</div>

	<!-- Mobile Menu Overlay -->
	{#if mobileMenuOpen}
		<div class="mobile-menu-overlay" onclick={closeMobileMenu} role="presentation"></div>
	{/if}

	<!-- Mobile Menu -->
	<div id="mobile-menu" class="mobile-nav-menu" class:open={mobileMenuOpen} role="menu">
		{#each navItems as item}
			<a
				href={item.href}
				class="mobile-nav-link"
				class:active={isActive(item.href)}
				onclick={closeMobileMenu}
				role="menuitem"
				aria-current={isActive(item.href) ? 'page' : undefined}
			>
				{item.label}
			</a>
		{/each}
	</div>
</nav>

<style>
	.navbar {
		background: white;
		border-bottom: 1px solid var(--neutral-200);
		position: sticky;
		top: 0;
		z-index: 100;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
	}

	.nav-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 1rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 70px;
	}

	/* Brand/Logo */
	.nav-brand {
		flex-shrink: 0;
	}

	.brand-link {
		text-decoration: none;
		color: var(--primary-600);
		font-weight: 700;
		font-size: var(--text-xl);
		transition: color 0.2s ease;
	}

	.brand-link:hover {
		color: var(--primary-700);
	}

	.brand-text {
		display: inline-block;
	}

	/* Desktop Navigation */
	.nav-menu {
		display: flex;
		align-items: center;
		gap: 2rem;
	}

	.nav-link {
		text-decoration: none;
		color: var(--neutral-700);
		font-weight: 500;
		font-size: var(--text-base);
		padding: 0.5rem 0;
		transition: color 0.2s ease;
		position: relative;
	}

	.nav-link:hover {
		color: var(--primary-600);
	}

	.nav-link.active {
		color: var(--primary-600);
		font-weight: 600;
	}

	.nav-link.active::after {
		content: '';
		position: absolute;
		bottom: -2px;
		left: 0;
		right: 0;
		height: 2px;
		background: var(--primary-600);
	}

	/* Mobile Menu Button */
	.mobile-menu-button {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 40px;
		height: 40px;
		background: none;
		border: none;
		cursor: pointer;
		padding: 0;
		gap: 4px;
	}

	.hamburger-line {
		width: 24px;
		height: 2px;
		background: var(--neutral-700);
		transition: all 0.3s ease;
		transform-origin: center;
	}

	.hamburger-line.open:nth-child(1) {
		transform: rotate(45deg) translate(5px, 5px);
	}

	.hamburger-line.open:nth-child(2) {
		opacity: 0;
	}

	.hamburger-line.open:nth-child(3) {
		transform: rotate(-45deg) translate(7px, -6px);
	}

	/* Mobile Menu Overlay */
	.mobile-menu-overlay {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.5);
		z-index: 101;
	}

	/* Mobile Navigation Menu */
	.mobile-nav-menu {
		position: fixed;
		top: 70px;
		right: -100%;
		width: 280px;
		max-width: 90vw;
		height: calc(100vh - 70px);
		background: white;
		border-left: 1px solid var(--neutral-200);
		z-index: 102;
		transition: right 0.3s ease;
		padding: 2rem 0;
		overflow-y: auto;
	}

	.mobile-nav-menu.open {
		right: 0;
	}

	.mobile-nav-link {
		display: block;
		padding: 1rem 2rem;
		text-decoration: none;
		color: var(--neutral-700);
		font-weight: 500;
		font-size: var(--text-lg);
		border-bottom: 1px solid var(--neutral-100);
		transition: all 0.2s ease;
	}

	.mobile-nav-link:hover {
		background: var(--neutral-50);
		color: var(--primary-600);
	}

	.mobile-nav-link.active {
		color: var(--primary-600);
		font-weight: 600;
		background: var(--primary-50);
		border-left: 4px solid var(--primary-600);
	}

	/* Responsive helpers */
	.desktop-only {
		display: flex;
	}

	.mobile-only {
		display: none;
	}

	@media (max-width: 768px) {
		.desktop-only {
			display: none;
		}

		.mobile-only {
			display: flex;
		}

		.nav-container {
			padding: 0 1rem;
		}

		.brand-text {
			font-size: var(--text-lg);
		}
	}

	@media (max-width: 480px) {
		.nav-container {
			height: 60px;
		}

		.mobile-nav-menu {
			top: 60px;
			height: calc(100vh - 60px);
		}

		.brand-text {
			font-size: var(--text-base);
		}
	}

	/* Focus styles for accessibility */
	.nav-link:focus,
	.brand-link:focus,
	.mobile-menu-button:focus,
	.mobile-nav-link:focus {
		outline: 2px solid var(--primary-500);
		outline-offset: 2px;
	}

	/* Reduce motion for users who prefer it */
	@media (prefers-reduced-motion: reduce) {
		.hamburger-line,
		.mobile-nav-menu,
		.nav-link,
		.brand-link,
		.mobile-nav-link {
			transition: none;
		}
	}
</style>
