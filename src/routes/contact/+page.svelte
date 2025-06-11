<script>
	let { data } = $props();

	// Contact information - these would normally come from config or CMS
	const contactInfo = {
		name: 'The Donair Guys',
		address: {
			street: '123 Main Street',
			city: 'Halifax',
			province: 'NS',
			postal: 'B3H 1A1'
		},
		phone: '(902) 555-0123',
		email: 'info@thedonairguys.ca',
		hours: [
			{ day: 'Monday', hours: '11:00 AM - 10:00 PM' },
			{ day: 'Tuesday', hours: '11:00 AM - 10:00 PM' },
			{ day: 'Wednesday', hours: '11:00 AM - 10:00 PM' },
			{ day: 'Thursday', hours: '11:00 AM - 10:00 PM' },
			{ day: 'Friday', hours: '11:00 AM - 11:00 PM' },
			{ day: 'Saturday', hours: '11:00 AM - 11:00 PM' },
			{ day: 'Sunday', hours: '12:00 PM - 9:00 PM' }
		]
	};

	// Simple form state
	let formData = $state({
		name: '',
		email: '',
		phone: '',
		message: ''
	});

	let formStatus = $state('idle'); // idle, submitting, success, error
	let formMessage = $state('');

	// Basic form validation
	function validateForm() {
		if (!formData.name.trim()) {
			throw new Error('Name is required');
		}
		if (!formData.email.trim() || !formData.email.includes('@')) {
			throw new Error('Valid email is required');
		}
		if (!formData.message.trim()) {
			throw new Error('Message is required');
		}

		// Basic sanitization
		formData.name = formData.name.trim().slice(0, 100);
		formData.email = formData.email.trim().slice(0, 100);
		formData.phone = formData.phone.trim().slice(0, 20);
		formData.message = formData.message.trim().slice(0, 1000);
	}

	async function handleSubmit(event) {
		event.preventDefault();
		formStatus = 'submitting';
		formMessage = '';

		try {
			validateForm();

			// TODO: Implement actual form submission
			// For now, just simulate success
			await new Promise((resolve) => setTimeout(resolve, 1000));

			formStatus = 'success';
			formMessage = "Thank you for your message! We'll get back to you soon.";

			// Reset form
			formData = { name: '', email: '', phone: '', message: '' };
		} catch (error) {
			formStatus = 'error';
			formMessage = error.message;
			console.error('[CONTACT] Form error:', error.message);
		}
	}
</script>

<svelte:head>
	<title>Contact Us - The Donair Guys</title>
	<meta
		name="description"
		content="Get in touch with The Donair Guys. Find our location, hours, and contact information."
	/>
</svelte:head>

<main class="container">
	<div class="contact-header">
		<h1>Contact Us</h1>
		<p>We'd love to hear from you! Visit us, call us, or send us a message.</p>
	</div>

	<div class="contact-content">
		<div class="contact-info">
			<section class="info-section">
				<h2>Visit Us</h2>
				<div class="address">
					<p><strong>{contactInfo.name}</strong></p>
					<p>{contactInfo.address.street}</p>
					<p>
						{contactInfo.address.city}, {contactInfo.address.province}
						{contactInfo.address.postal}
					</p>
				</div>
			</section>

			<section class="info-section">
				<h2>Contact Info</h2>
				<div class="contact-details">
					<p>
						<strong>Phone:</strong>
						<a href="tel:{contactInfo.phone.replace(/[^0-9]/g, '')}" class="phone-link">
							{contactInfo.phone}
						</a>
					</p>
					<p>
						<strong>Email:</strong>
						<a href="mailto:{contactInfo.email}" class="email-link">
							{contactInfo.email}
						</a>
					</p>
				</div>
			</section>

			<section class="info-section">
				<h2>Hours</h2>
				<div class="hours-list">
					{#each contactInfo.hours as dayHours}
						<div class="hours-row">
							<span class="day">{dayHours.day}:</span>
							<span class="hours">{dayHours.hours}</span>
						</div>
					{/each}
				</div>
			</section>

			<section class="info-section">
				<h2>Find Us</h2>
				<div class="map-placeholder">
					<div class="map-content">
						<p>📍 Interactive map coming soon</p>
						<p>Located in the heart of Halifax</p>
						<a
							href="https://maps.google.com/?q={encodeURIComponent(
								contactInfo.address.street +
									', ' +
									contactInfo.address.city +
									', ' +
									contactInfo.address.province
							)}"
							target="_blank"
							rel="noopener noreferrer"
							class="map-link"
						>
							View on Google Maps
						</a>
					</div>
				</div>
			</section>
		</div>

		<div class="contact-form-container">
			<section class="info-section">
				<h2>Send Us a Message</h2>

				<form onsubmit={handleSubmit} class="contact-form" novalidate>
					<div class="form-group">
						<label for="name">Name *</label>
						<input
							type="text"
							id="name"
							bind:value={formData.name}
							required
							maxlength="100"
							disabled={formStatus === 'submitting'}
						/>
					</div>

					<div class="form-group">
						<label for="email">Email *</label>
						<input
							type="email"
							id="email"
							bind:value={formData.email}
							required
							maxlength="100"
							disabled={formStatus === 'submitting'}
						/>
					</div>

					<div class="form-group">
						<label for="phone">Phone</label>
						<input
							type="tel"
							id="phone"
							bind:value={formData.phone}
							maxlength="20"
							disabled={formStatus === 'submitting'}
						/>
					</div>

					<div class="form-group">
						<label for="message">Message *</label>
						<textarea
							id="message"
							bind:value={formData.message}
							required
							maxlength="1000"
							rows="5"
							disabled={formStatus === 'submitting'}
						></textarea>
					</div>

					{#if formMessage}
						<div
							class="form-message"
							class:success={formStatus === 'success'}
							class:error={formStatus === 'error'}
						>
							{formMessage}
						</div>
					{/if}

					<button type="submit" class="submit-btn" disabled={formStatus === 'submitting'}>
						{formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
					</button>
				</form>
			</section>
		</div>
	</div>

	<div class="contact-footer">
		<p>Ready to order? Give us a call or visit us today!</p>
		<a href="/" class="btn btn-primary">Back to Home</a>
	</div>
</main>

<style>
	.contact-header {
		text-align: center;
		margin-bottom: 3rem;
		padding: 2rem 0;
	}

	.contact-header h1 {
		font-size: var(--text-4xl);
		color: var(--primary-600);
		margin-bottom: 0.5rem;
	}

	.contact-header p {
		font-size: var(--text-lg);
		color: var(--neutral-600);
	}

	.contact-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
		margin-bottom: 3rem;
	}

	.info-section {
		margin-bottom: 2rem;
	}

	.info-section h2 {
		font-size: var(--text-xl);
		color: var(--primary-700);
		margin-bottom: 1rem;
	}

	.address p {
		margin-bottom: 0.25rem;
		color: var(--neutral-700);
	}

	.contact-details p {
		margin-bottom: 0.5rem;
		color: var(--neutral-700);
	}

	.phone-link,
	.email-link {
		color: var(--primary-600);
		text-decoration: none;
	}

	.phone-link:hover,
	.email-link:hover {
		text-decoration: underline;
	}

	.hours-list {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.hours-row {
		display: flex;
		justify-content: space-between;
		padding: 0.5rem 0;
		border-bottom: 1px solid var(--neutral-200);
	}

	.hours-row:last-child {
		border-bottom: none;
	}

	.day {
		font-weight: 600;
		color: var(--neutral-700);
	}

	.hours {
		color: var(--neutral-600);
	}

	.map-placeholder {
		background: var(--neutral-100);
		border: 2px dashed var(--neutral-300);
		border-radius: 8px;
		padding: 2rem;
		text-align: center;
		min-height: 200px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.map-content p {
		margin-bottom: 0.5rem;
		color: var(--neutral-600);
	}

	.map-link {
		color: var(--primary-600);
		text-decoration: underline;
	}

	.contact-form {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.form-group {
		display: flex;
		flex-direction: column;
	}

	.form-group label {
		font-weight: 600;
		color: var(--neutral-700);
		margin-bottom: 0.5rem;
	}

	.form-group input,
	.form-group textarea {
		padding: 0.75rem;
		border: 1px solid var(--neutral-300);
		border-radius: 6px;
		font-size: var(--text-base);
		background: white;
		transition: border-color 0.2s ease;
	}

	.form-group input:focus,
	.form-group textarea:focus {
		outline: none;
		border-color: var(--primary-500);
		box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
	}

	.form-group input:disabled,
	.form-group textarea:disabled {
		background: var(--neutral-100);
		cursor: not-allowed;
	}

	.form-message {
		padding: 1rem;
		border-radius: 6px;
		font-weight: 600;
	}

	.form-message.success {
		background: #dcfce7;
		color: #166534;
		border: 1px solid #bbf7d0;
	}

	.form-message.error {
		background: #fef2f2;
		color: #dc2626;
		border: 1px solid #fecaca;
	}

	.submit-btn {
		padding: 0.75rem 1.5rem;
		background: var(--primary-600);
		color: white;
		border: none;
		border-radius: 6px;
		font-size: var(--text-base);
		font-weight: 600;
		cursor: pointer;
		transition: background-color 0.2s ease;
	}

	.submit-btn:hover:not(:disabled) {
		background: var(--primary-700);
	}

	.submit-btn:disabled {
		background: var(--neutral-400);
		cursor: not-allowed;
	}

	.contact-footer {
		text-align: center;
		padding-top: 2rem;
		border-top: 1px solid var(--neutral-200);
	}

	.contact-footer p {
		color: var(--neutral-600);
		margin-bottom: 1.5rem;
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

	@media (max-width: 768px) {
		.contact-content {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.contact-header h1 {
			font-size: var(--text-3xl);
		}

		.hours-row {
			flex-direction: column;
			gap: 0.25rem;
		}

		.map-placeholder {
			min-height: 150px;
			padding: 1.5rem;
		}
	}
</style>
