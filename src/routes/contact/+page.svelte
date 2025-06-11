<!-- Contact Page - PRD: Hero split layout with map and contact info -->
<script>
	import { onMount } from 'svelte';

	let pageVisible = false;

	onMount(() => {
		pageVisible = true;
	});

	const businessInfo = {
		name: "The Donair Guys",
		phone: "(780) 244-0104",
		address: "6609 177 St NW, Edmonton, AB T5T 4J5",
		email: "info@thedonairguys.ca",
		hours: {
			"Monday": "11:00 AM - 2:00 AM",
			"Tuesday": "11:00 AM - 2:00 AM",
			"Wednesday": "11:00 AM - 2:00 AM",
			"Thursday": "11:00 AM - 2:00 AM",
			"Friday": "11:00 AM - 2:00 AM",
			"Saturday": "11:00 AM - 2:00 AM",
			"Sunday": "11:00 AM - 2:00 AM"
		}
	};

	function handlePhoneClick() {
		window.location.href = `tel:${businessInfo.phone}`;
	}

	function handleDirectionsClick() {
		const address = encodeURIComponent(businessInfo.address);
		window.open(`https://maps.google.com/?q=${address}`, '_blank');
	}
</script>

<svelte:head>
	<title>Contact Us - The Donair Guys</title>
	<meta name="description" content="Visit us at 6609 177 St NW, Edmonton. Call (780) 244-0104 to order. Open 11 AM - 2 AM daily." />
</svelte:head>

<main class="contact-page" class:visible={pageVisible}>
	<section class="contact-hero">
		<div class="hero-split">
			<!-- Map Section -->
			<div class="map-section">
				<div class="map-container">
					<div class="static-map">
						<!-- Static map placeholder - MVP approach -->
						<div class="map-placeholder">
							<div class="map-pin">📍</div>
							<p class="map-text">The Donair Guys<br>West Edmonton</p>
						</div>
						<div class="map-overlay">
							<button class="directions-btn" on:click={handleDirectionsClick}>
								Get Directions
							</button>
						</div>
					</div>
				</div>
			</div>

			<!-- Contact Info Section -->
			<div class="contact-section">
				<div class="contact-content">
					<h1 class="contact-title">Visit Us Today</h1>
					<p class="contact-subtitle">Edmonton's favorite halal donair destination</p>

					<div class="contact-card">
						<div class="contact-item">
							<div class="contact-icon">📍</div>
							<div class="contact-details">
								<h3>Location</h3>
								<p>{businessInfo.address}</p>
							</div>
						</div>

						<div class="contact-item">
							<div class="contact-icon">📞</div>
							<div class="contact-details">
								<h3>Phone</h3>
								<button class="phone-btn" on:click={handlePhoneClick}>
									{businessInfo.phone}
								</button>
							</div>
						</div>

						<div class="contact-item">
							<div class="contact-icon">⏰</div>
							<div class="contact-details">
								<h3>Hours</h3>
								<p>Open Daily: 11:00 AM - 2:00 AM</p>
							</div>
						</div>
					</div>

					<div class="action-buttons">
						<button class="btn-primary" on:click={handlePhoneClick}>
							Call Now
						</button>
						<button class="btn-secondary" on:click={handleDirectionsClick}>
							Get Directions
						</button>
					</div>
				</div>
			</div>
		</div>
	</section>
</main>



<style>
	.contact-page {
		opacity: 0;
		transform: translateY(20px);
		transition: all 0.6s ease-out;
	}

	.contact-page.visible {
		opacity: 1;
		transform: translateY(0);
	}

	.contact-hero {
		min-height: 100vh;
		display: flex;
		align-items: center;
	}

	.hero-split {
		display: grid;
		grid-template-columns: 1fr 1fr;
		width: 100%;
		min-height: 100vh;
	}

	/* Map Section */
	.map-section {
		background: var(--color-light-gray);
		position: relative;
		overflow: hidden;
	}

	.map-container {
		height: 100%;
		position: relative;
	}

	.static-map {
		height: 100%;
		background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}

	.map-placeholder {
		text-align: center;
		color: white;
	}

	.map-pin {
		font-size: 4rem;
		margin-bottom: 1rem;
		animation: bounce 2s infinite;
	}

	.map-text {
		font-size: 1.2rem;
		font-weight: 600;
		line-height: 1.4;
	}

	.map-overlay {
		position: absolute;
		bottom: 2rem;
		left: 50%;
		transform: translateX(-50%);
	}

	.directions-btn {
		background: white;
		color: var(--color-primary);
		padding: 1rem 2rem;
		border: none;
		border-radius: 50px;
		font-weight: 700;
		cursor: pointer;
		transition: all 0.3s ease;
		box-shadow: 0 4px 16px rgba(0,0,0,0.2);
	}

	.directions-btn:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 24px rgba(0,0,0,0.3);
	}

	/* Contact Section */
	.contact-section {
		background: linear-gradient(135deg, var(--color-secondary) 0%, #ffd93d 100%);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 3rem;
	}

	.contact-content {
		max-width: 500px;
		width: 100%;
	}

	.contact-title {
		font-size: clamp(2.5rem, 4vw, 3.5rem);
		font-weight: 900;
		color: var(--color-primary);
		margin-bottom: 1rem;
		line-height: 1.1;
	}

	.contact-subtitle {
		font-size: 1.2rem;
		color: var(--color-dark-gray);
		margin-bottom: 3rem;
	}

	.contact-card {
		background: rgba(255,255,255,0.9);
		backdrop-filter: blur(10px);
		border-radius: 20px;
		padding: 2rem;
		margin-bottom: 2rem;
		border: 2px solid rgba(255,255,255,0.3);
		box-shadow: 0 8px 32px rgba(0,0,0,0.1);
	}

	.contact-item {
		display: flex;
		align-items: flex-start;
		gap: 1rem;
		margin-bottom: 1.5rem;
	}

	.contact-item:last-child {
		margin-bottom: 0;
	}

	.contact-icon {
		font-size: 1.5rem;
		width: 40px;
		height: 40px;
		background: var(--color-primary);
		color: white;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.contact-details h3 {
		font-weight: 700;
		color: var(--color-primary);
		margin-bottom: 0.5rem;
	}

	.contact-details p {
		color: var(--color-gray);
		line-height: 1.4;
	}

	.phone-btn {
		background: none;
		border: none;
		color: var(--color-primary);
		font-size: 1rem;
		font-weight: 600;
		cursor: pointer;
		text-decoration: underline;
		padding: 0;
		transition: color 0.3s ease;
	}

	.phone-btn:hover {
		color: var(--color-secondary);
	}

	.action-buttons {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.btn-primary {
		background: linear-gradient(135deg, var(--color-primary), #ff6b6b);
		color: white;
		padding: 1.2rem 2rem;
		border: none;
		border-radius: 50px;
		font-weight: 700;
		cursor: pointer;
		transition: all 0.3s ease;
		box-shadow: 0 4px 16px rgba(237, 30, 36, 0.3);
	}

	.btn-primary:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 24px rgba(237, 30, 36, 0.4);
	}

	.btn-secondary {
		background: transparent;
		color: var(--color-primary);
		border: 2px solid var(--color-primary);
		padding: 1.2rem 2rem;
		border-radius: 50px;
		font-weight: 700;
		cursor: pointer;
		transition: all 0.3s ease;
	}

	.btn-secondary:hover {
		background: var(--color-primary);
		color: white;
		transform: translateY(-2px);
	}

	@keyframes bounce {
		0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
		40% { transform: translateY(-10px); }
		60% { transform: translateY(-5px); }
	}

	/* Mobile Responsive */
	@media (max-width: 768px) {
		.hero-split {
			grid-template-columns: 1fr;
			grid-template-rows: 40vh 1fr;
		}

		.contact-section {
			padding: 2rem 1rem;
		}

		.contact-card {
			padding: 1.5rem;
		}

		.action-buttons {
			justify-content: center;
		}

		.btn-primary, .btn-secondary {
			flex: 1;
			min-width: 140px;
		}
	}
</style>
