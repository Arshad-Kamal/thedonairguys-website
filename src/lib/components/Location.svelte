<script>
	let { compact = false, showMap = true, showHours = true } = $props();

	// Location data - would normally come from config/CMS
	const locationData = {
		name: 'The Donair Guys',
		address: {
			street: '123 Main Street',
			city: 'Halifax',
			province: 'NS',
			postal: 'B3H 1A1',
			full: '123 Main Street, Halifax, NS B3H 1A1'
		},
		phone: '(902) 555-0123',
		email: 'info@thedonairguys.ca',
		coordinates: {
			lat: 44.6488,
			lng: -63.5752
		},
		hours: [
			{ day: 'Monday', hours: '11:00 AM - 10:00 PM', open: true },
			{ day: 'Tuesday', hours: '11:00 AM - 10:00 PM', open: true },
			{ day: 'Wednesday', hours: '11:00 AM - 10:00 PM', open: true },
			{ day: 'Thursday', hours: '11:00 AM - 10:00 PM', open: true },
			{ day: 'Friday', hours: '11:00 AM - 11:00 PM', open: true },
			{ day: 'Saturday', hours: '11:00 AM - 11:00 PM', open: true },
			{ day: 'Sunday', hours: '12:00 PM - 9:00 PM', open: true }
		]
	};

	// Get current status
	function getCurrentStatus() {
		const now = new Date();
		const currentDay = now
			.toLocaleDateString('en-US', { weekday: 'long' })
			.toLowerCase()
			.substring(0, 3);
		const currentTime = now.getHours() * 100 + now.getMinutes();

		// Simple status - would need more complex logic for real hours checking
		const todayHours = locationData.hours.find((h) => h.day.toLowerCase().startsWith(currentDay));

		if (!todayHours || !todayHours.open) {
			return { isOpen: false, message: 'Closed today' };
		}

		// Simplified - assume open during business hours
		if (currentTime >= 1100 && currentTime <= 2200) {
			return { isOpen: true, message: 'Open now' };
		}

		return { isOpen: false, message: 'Closed now' };
	}

	const status = $derived(getCurrentStatus());

	// Generate Google Maps URL
	function getMapUrl() {
		return `https://maps.google.com/?q=${encodeURIComponent(locationData.address.full)}`;
	}

	// Generate directions URL
	function getDirectionsUrl() {
		return `https://maps.google.com/maps/dir/?api=1&destination=${encodeURIComponent(locationData.address.full)}`;
	}
</script>

<div class="location-component" class:compact role="region" aria-labelledby="location-title">
	<div class="location-content">
		<header class="location-header">
			<h2 id="location-title" class="location-title">
				{compact ? 'Find Us' : 'Our Location'}
			</h2>
			<div class="status-indicator" class:open={status.isOpen} class:closed={!status.isOpen}>
				<span class="status-dot" aria-hidden="true"></span>
				<span class="status-text">{status.message}</span>
			</div>
		</header>

		<div class="location-details">
			<section class="address-section">
				<h3 class="section-title">Address</h3>
				<address class="address">
					<div class="address-line">{locationData.address.street}</div>
					<div class="address-line">
						{locationData.address.city}, {locationData.address.province}
						{locationData.address.postal}
					</div>
				</address>

				<div class="contact-info">
					<div class="contact-item">
						<span class="contact-label">Phone:</span>
						<a
							href="tel:{locationData.phone.replace(/[^0-9]/g, '')}"
							class="contact-link phone-link"
							aria-label="Call {locationData.phone}"
						>
							{locationData.phone}
						</a>
					</div>
					<div class="contact-item">
						<span class="contact-label">Email:</span>
						<a href="mailto:{locationData.email}" class="contact-link email-link">
							{locationData.email}
						</a>
					</div>
				</div>
			</section>

			{#if showHours && !compact}
				<section class="hours-section">
					<h3 class="section-title">Hours</h3>
					<div class="hours-list">
						{#each locationData.hours as dayHours}
							<div class="hours-row">
								<span class="day">{dayHours.day}:</span>
								<span class="hours" class:closed={!dayHours.open}>
									{dayHours.open ? dayHours.hours : 'Closed'}
								</span>
							</div>
						{/each}
					</div>
				</section>
			{/if}

			{#if showMap}
				<section class="map-section">
					<h3 class="section-title">Location</h3>
					<div class="map-placeholder">
						<div class="map-content">
							<div class="map-icon">📍</div>
							<p class="map-text">Interactive map coming soon</p>
							<div class="map-actions">
								<a href={getMapUrl()} target="_blank" rel="noopener noreferrer" class="map-link">
									View on Google Maps
								</a>
								<a
									href={getDirectionsUrl()}
									target="_blank"
									rel="noopener noreferrer"
									class="directions-link"
								>
									Get Directions
								</a>
							</div>
						</div>
					</div>
				</section>
			{/if}
		</div>
	</div>
</div>

<style>
	.location-component {
		background: white;
		border: 1px solid var(--neutral-200);
		border-radius: 12px;
		padding: 1.5rem;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
	}

	.location-component.compact {
		padding: 1rem;
	}

	.location-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 1.5rem;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.location-title {
		font-size: var(--text-xl);
		font-weight: 600;
		color: var(--primary-700);
		margin: 0;
	}

	.compact .location-title {
		font-size: var(--text-lg);
	}

	.status-indicator {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem 0.75rem;
		border-radius: 6px;
		font-size: var(--text-sm);
		font-weight: 500;
	}

	.status-indicator.open {
		background: #dcfce7;
		color: #166534;
	}

	.status-indicator.closed {
		background: #fef2f2;
		color: #dc2626;
	}

	.status-dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: currentColor;
	}

	.location-details {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.section-title {
		font-size: var(--text-base);
		font-weight: 600;
		color: var(--primary-600);
		margin-bottom: 0.75rem;
		border-bottom: 1px solid var(--neutral-200);
		padding-bottom: 0.25rem;
	}

	/* Address Section */
	.address {
		font-style: normal;
		margin-bottom: 1rem;
	}

	.address-line {
		color: var(--neutral-700);
		line-height: 1.4;
		margin-bottom: 0.25rem;
		font-weight: 500;
	}

	.contact-info {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.contact-item {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		flex-wrap: wrap;
	}

	.contact-label {
		font-weight: 600;
		color: var(--neutral-600);
		min-width: 60px;
	}

	.contact-link {
		color: var(--primary-600);
		text-decoration: none;
		transition: color 0.2s ease;
	}

	.contact-link:hover {
		color: var(--primary-700);
		text-decoration: underline;
	}

	/* Hours Section */
	.hours-list {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.hours-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.5rem 0;
		border-bottom: 1px solid var(--neutral-100);
	}

	.hours-row:last-child {
		border-bottom: none;
	}

	.day {
		font-weight: 600;
		color: var(--neutral-700);
		min-width: 80px;
	}

	.hours {
		color: var(--neutral-600);
		text-align: right;
	}

	.hours.closed {
		color: var(--neutral-400);
		font-style: italic;
	}

	/* Map Section */
	.map-placeholder {
		background: var(--neutral-50);
		border: 2px dashed var(--neutral-300);
		border-radius: 8px;
		padding: 2rem;
		text-align: center;
		min-height: 200px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.compact .map-placeholder {
		min-height: 150px;
		padding: 1.5rem;
	}

	.map-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	.map-icon {
		font-size: 2rem;
		opacity: 0.7;
	}

	.map-text {
		color: var(--neutral-600);
		font-size: var(--text-sm);
		margin: 0;
	}

	.map-actions {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		justify-content: center;
	}

	.map-link,
	.directions-link {
		color: var(--primary-600);
		text-decoration: underline;
		font-size: var(--text-sm);
		font-weight: 500;
		transition: color 0.2s ease;
	}

	.map-link:hover,
	.directions-link:hover {
		color: var(--primary-700);
	}

	/* Responsive Design */
	@media (max-width: 768px) {
		.location-header {
			flex-direction: column;
			align-items: flex-start;
		}

		.contact-item {
			flex-direction: column;
			align-items: flex-start;
			gap: 0.25rem;
		}

		.contact-label {
			min-width: auto;
		}

		.hours-row {
			flex-direction: column;
			align-items: flex-start;
			gap: 0.25rem;
		}

		.hours {
			text-align: left;
		}

		.map-actions {
			flex-direction: column;
		}
	}

	@media (max-width: 480px) {
		.location-component {
			padding: 1rem;
		}

		.map-placeholder {
			padding: 1rem;
			min-height: 120px;
		}

		.map-icon {
			font-size: 1.5rem;
		}
	}

	/* Focus styles for accessibility */
	.contact-link:focus,
	.map-link:focus,
	.directions-link:focus {
		outline: 2px solid var(--primary-500);
		outline-offset: 2px;
	}

	/* Reduce motion for users who prefer it */
	@media (prefers-reduced-motion: reduce) {
		.contact-link,
		.map-link,
		.directions-link {
			transition: none;
		}
	}

	/* High contrast mode support */
	@media (prefers-contrast: high) {
		.location-component {
			border-width: 2px;
		}

		.status-indicator {
			border: 1px solid currentColor;
		}
	}
</style>
