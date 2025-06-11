<script>
	// Footer data - would normally come from config/CMS
	const businessInfo = {
		name: 'The Donair Guys',
		address: {
			street: '123 Main Street',
			city: 'Halifax',
			province: 'NS',
			postal: 'B3H 1A1'
		},
		phone: '(902) 555-0123',
		email: 'info@thedonairguys.ca'
	};

	const navLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/menu', label: 'Menu' },
		{ href: '/contact', label: 'Contact' }
	];

	const currentYear = new Date().getFullYear();
</script>

<footer class="footer">
	<div class="footer-container">
		<div class="footer-content">
			<!-- Business Info Section -->
			<div class="footer-section">
				<h3 class="footer-title">{businessInfo.name}</h3>
				<div class="business-info">
					<address class="address">
						{businessInfo.address.street}<br />
						{businessInfo.address.city}, {businessInfo.address.province}
						{businessInfo.address.postal}
					</address>

					<div class="contact-info">
						<p>
							<strong>Phone:</strong>
							<a href="tel:{businessInfo.phone.replace(/[^0-9]/g, '')}" class="contact-link">
								{businessInfo.phone}
							</a>
						</p>
						<p>
							<strong>Email:</strong>
							<a href="mailto:{businessInfo.email}" class="contact-link">
								{businessInfo.email}
							</a>
						</p>
					</div>
				</div>
			</div>

			<!-- Quick Links Section -->
			<div class="footer-section">
				<h3 class="footer-title">Quick Links</h3>
				<nav class="footer-nav" aria-label="Footer navigation">
					<ul class="footer-links">
						{#each navLinks as link}
							<li>
								<a href={link.href} class="footer-link">
									{link.label}
								</a>
							</li>
						{/each}
					</ul>
				</nav>
			</div>

			<!-- Hours Section -->
			<div class="footer-section">
				<h3 class="footer-title">Hours</h3>
				<div class="hours-info">
					<p><strong>Mon-Thu:</strong> 11:00 AM - 10:00 PM</p>
					<p><strong>Fri-Sat:</strong> 11:00 AM - 11:00 PM</p>
					<p><strong>Sunday:</strong> 12:00 PM - 9:00 PM</p>
				</div>
			</div>

			<!-- Social Media Section (Placeholder for MVP) -->
			<div class="footer-section">
				<h3 class="footer-title">Follow Us</h3>
				<div class="social-links">
					<p class="social-placeholder">Social media links coming soon!</p>
					<p class="social-note">Stay tuned for updates on Facebook and Instagram</p>
				</div>
			</div>
		</div>

		<!-- Footer Bottom -->
		<div class="footer-bottom">
			<div class="footer-bottom-content">
				<p class="copyright">
					&copy; {currentYear}
					{businessInfo.name}. All rights reserved.
				</p>
				<p class="tagline">Authentic donairs made with love in Halifax</p>
			</div>
		</div>
	</div>
</footer>

<style>
	.footer {
		background: var(--neutral-800);
		color: var(--neutral-200);
		margin-top: auto;
	}

	.footer-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 1rem;
	}

	.footer-content {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;
		padding: 3rem 0 2rem 0;
	}

	.footer-section {
		display: flex;
		flex-direction: column;
	}

	.footer-title {
		font-size: var(--text-lg);
		font-weight: 600;
		color: var(--primary-400);
		margin-bottom: 1rem;
		border-bottom: 2px solid var(--primary-600);
		padding-bottom: 0.25rem;
		width: fit-content;
	}

	/* Business Info Styles */
	.business-info {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.address {
		font-style: normal;
		line-height: 1.5;
		color: var(--neutral-300);
	}

	.contact-info p {
		margin-bottom: 0.5rem;
		color: var(--neutral-300);
	}

	.contact-link {
		color: var(--primary-400);
		text-decoration: none;
		transition: color 0.2s ease;
	}

	.contact-link:hover {
		color: var(--primary-300);
		text-decoration: underline;
	}

	/* Navigation Styles */
	.footer-nav ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.footer-nav li {
		margin-bottom: 0.5rem;
	}

	.footer-link {
		color: var(--neutral-300);
		text-decoration: none;
		transition: color 0.2s ease;
		display: inline-block;
		padding: 0.25rem 0;
	}

	.footer-link:hover {
		color: var(--primary-400);
	}

	/* Hours Styles */
	.hours-info p {
		margin-bottom: 0.5rem;
		color: var(--neutral-300);
		line-height: 1.4;
	}

	.hours-info strong {
		color: var(--neutral-200);
		min-width: 70px;
		display: inline-block;
	}

	/* Social Media Styles */
	.social-links {
		color: var(--neutral-400);
	}

	.social-placeholder {
		font-weight: 500;
		margin-bottom: 0.5rem;
	}

	.social-note {
		font-size: var(--text-sm);
		font-style: italic;
	}

	/* Footer Bottom */
	.footer-bottom {
		border-top: 1px solid var(--neutral-700);
		padding: 1.5rem 0;
	}

	.footer-bottom-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.copyright {
		color: var(--neutral-400);
		font-size: var(--text-sm);
		margin: 0;
	}

	.tagline {
		color: var(--neutral-500);
		font-size: var(--text-sm);
		font-style: italic;
		margin: 0;
	}

	/* Responsive Design */
	@media (max-width: 768px) {
		.footer-content {
			grid-template-columns: 1fr;
			gap: 2rem;
			padding: 2rem 0 1.5rem 0;
		}

		.footer-section {
			text-align: left;
		}

		.footer-title {
			font-size: var(--text-base);
		}

		.footer-bottom-content {
			flex-direction: column;
			text-align: center;
			gap: 0.5rem;
		}

		.business-info {
			gap: 1.5rem;
		}
	}

	@media (max-width: 480px) {
		.footer-container {
			padding: 0 0.75rem;
		}

		.footer-content {
			padding: 1.5rem 0 1rem 0;
		}

		.footer-section {
			margin-bottom: 0.5rem;
		}
	}

	/* Focus styles for accessibility */
	.footer-link:focus,
	.contact-link:focus {
		outline: 2px solid var(--primary-400);
		outline-offset: 2px;
	}

	/* Reduce motion for users who prefer it */
	@media (prefers-reduced-motion: reduce) {
		.footer-link,
		.contact-link {
			transition: none;
		}
	}
</style>
