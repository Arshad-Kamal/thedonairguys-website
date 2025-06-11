<script>
	let { compact = false, showStatus = true, highlightToday = true } = $props();

	// Hours data - would normally come from config/CMS
	const hoursData = {
		regular: [
			{ day: 'Monday', dayShort: 'Mon', hours: '11:00 AM - 10:00 PM', open: true },
			{ day: 'Tuesday', dayShort: 'Tue', hours: '11:00 AM - 10:00 PM', open: true },
			{ day: 'Wednesday', dayShort: 'Wed', hours: '11:00 AM - 10:00 PM', open: true },
			{ day: 'Thursday', dayShort: 'Thu', hours: '11:00 AM - 10:00 PM', open: true },
			{ day: 'Friday', dayShort: 'Fri', hours: '11:00 AM - 11:00 PM', open: true },
			{ day: 'Saturday', dayShort: 'Sat', hours: '11:00 AM - 11:00 PM', open: true },
			{ day: 'Sunday', dayShort: 'Sun', hours: '12:00 PM - 9:00 PM', open: true }
		],
		special: [],
		timezone: 'Atlantic Time (AT)'
	};

	// Get current day information
	function getCurrentDayInfo() {
		const now = new Date();
		const currentDayIndex = now.getDay(); // 0 = Sunday, 1 = Monday, etc.

		// Adjust index to match our array (Monday = 0)
		const adjustedIndex = currentDayIndex === 0 ? 6 : currentDayIndex - 1;

		return {
			index: adjustedIndex,
			name: hoursData.regular[adjustedIndex]?.day || 'Unknown'
		};
	}

	// Get current status
	function getCurrentStatus() {
		const now = new Date();
		const currentTime = now.getHours() * 100 + now.getMinutes();
		const currentDay = getCurrentDayInfo();
		const todayHours = hoursData.regular[currentDay.index];

		if (!todayHours || !todayHours.open) {
			return {
				isOpen: false,
				message: 'Closed today',
				nextOpen: getNextOpenTime()
			};
		}

		// Parse hours - simplified logic
		const hoursText = todayHours.hours;
		if (hoursText.includes('11:00 AM') && hoursText.includes('PM')) {
			const closingHour = hoursText.includes('11:00 PM') ? 2300 : 2200;

			if (currentTime >= 1100 && currentTime <= closingHour) {
				return {
					isOpen: true,
					message: 'Open now',
					closingTime: closingHour
				};
			}
		}

		return {
			isOpen: false,
			message: 'Closed now',
			nextOpen: getNextOpenTime()
		};
	}

	// Get next opening time
	function getNextOpenTime() {
		const now = new Date();
		const tomorrow = new Date(now);
		tomorrow.setDate(tomorrow.getDate() + 1);

		const tomorrowIndex = tomorrow.getDay() === 0 ? 6 : tomorrow.getDay() - 1;
		const tomorrowHours = hoursData.regular[tomorrowIndex];

		if (tomorrowHours && tomorrowHours.open) {
			return `Opens tomorrow at ${tomorrowHours.hours.split(' - ')[0]}`;
		}

		return 'Check back soon';
	}

	const currentDay = $derived(getCurrentDayInfo());
	const status = $derived(getCurrentStatus());

	// Format hours for display
	function formatHours(hours, isOpen) {
		if (!isOpen) return 'Closed';
		return hours;
	}

	// Check if day is today
	function isToday(index) {
		return highlightToday && index === currentDay.index;
	}
</script>

<div class="hours-component" class:compact role="region" aria-labelledby="hours-title">
	<div class="hours-content">
		<header class="hours-header">
			<h2 id="hours-title" class="hours-title">
				{compact ? 'Hours' : 'Business Hours'}
			</h2>

			{#if showStatus}
				<div class="status-indicator" class:open={status.isOpen} class:closed={!status.isOpen}>
					<span class="status-dot" aria-hidden="true"></span>
					<span class="status-text">{status.message}</span>
				</div>
			{/if}
		</header>

		<div class="hours-list" role="list">
			{#each hoursData.regular as dayHours, index}
				<div
					class="hours-row"
					class:today={isToday(index)}
					class:closed={!dayHours.open}
					role="listitem"
				>
					<span class="day-name" class:bold={isToday(index)}>
						{compact ? dayHours.dayShort : dayHours.day}
						{#if isToday(index)}
							<span class="today-indicator" aria-label="Today">(Today)</span>
						{/if}
					</span>
					<span class="day-hours" class:closed={!dayHours.open}>
						{formatHours(dayHours.hours, dayHours.open)}
					</span>
				</div>
			{/each}
		</div>

		{#if !compact}
			<div class="hours-footer">
				{#if hoursData.special.length > 0}
					<div class="special-hours">
						<h3 class="special-title">Special Hours</h3>
						{#each hoursData.special as special}
							<p class="special-item">{special.date}: {special.hours}</p>
						{/each}
					</div>
				{/if}

				<div class="hours-note">
					<p class="timezone">All times in {hoursData.timezone}</p>
					{#if status.nextOpen}
						<p class="next-open">{status.nextOpen}</p>
					{/if}
				</div>
			</div>
		{/if}
	</div>
</div>

<style>
	.hours-component {
		background: white;
		border: 1px solid var(--neutral-200);
		border-radius: 12px;
		padding: 1.5rem;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
	}

	.hours-component.compact {
		padding: 1rem;
		border-radius: 8px;
	}

	.hours-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 1.5rem;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.hours-title {
		font-size: var(--text-xl);
		font-weight: 600;
		color: var(--primary-700);
		margin: 0;
	}

	.compact .hours-title {
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
		white-space: nowrap;
	}

	.status-indicator.open {
		background: #dcfce7;
		color: #166534;
		border: 1px solid #86efac;
	}

	.status-indicator.closed {
		background: #fef2f2;
		color: #dc2626;
		border: 1px solid #fecaca;
	}

	.status-dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: currentColor;
		animation: pulse 2s infinite;
	}

	@keyframes pulse {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.5;
		}
	}

	.hours-list {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.hours-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.75rem 0;
		border-bottom: 1px solid var(--neutral-100);
		transition: background-color 0.2s ease;
	}

	.hours-row:last-child {
		border-bottom: none;
	}

	.hours-row.today {
		background: var(--primary-50);
		border-radius: 6px;
		padding: 0.75rem 1rem;
		border-bottom: 1px solid var(--primary-200);
	}

	.hours-row.today:last-child {
		border-bottom: none;
	}

	.hours-row.closed {
		opacity: 0.7;
	}

	.day-name {
		font-weight: 500;
		color: var(--neutral-700);
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.day-name.bold {
		font-weight: 600;
		color: var(--primary-700);
	}

	.today-indicator {
		font-size: var(--text-xs);
		color: var(--primary-600);
		font-weight: 500;
	}

	.compact .today-indicator {
		display: none;
	}

	.day-hours {
		color: var(--neutral-600);
		font-weight: 500;
		text-align: right;
	}

	.day-hours.closed {
		color: var(--neutral-400);
		font-style: italic;
	}

	.hours-row.today .day-hours {
		color: var(--primary-700);
		font-weight: 600;
	}

	.hours-footer {
		margin-top: 1.5rem;
		padding-top: 1rem;
		border-top: 1px solid var(--neutral-200);
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.special-hours {
		background: var(--accent-50);
		padding: 1rem;
		border-radius: 6px;
		border-left: 4px solid var(--accent-500);
	}

	.special-title {
		font-size: var(--text-base);
		font-weight: 600;
		color: var(--accent-700);
		margin-bottom: 0.5rem;
	}

	.special-item {
		font-size: var(--text-sm);
		color: var(--accent-600);
		margin-bottom: 0.25rem;
	}

	.special-item:last-child {
		margin-bottom: 0;
	}

	.hours-note {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.timezone {
		font-size: var(--text-sm);
		color: var(--neutral-500);
		margin: 0;
	}

	.next-open {
		font-size: var(--text-sm);
		color: var(--primary-600);
		font-weight: 500;
		margin: 0;
	}

	/* Responsive Design */
	@media (max-width: 768px) {
		.hours-header {
			flex-direction: column;
			align-items: flex-start;
		}

		.status-indicator {
			align-self: flex-start;
		}

		.hours-row {
			flex-direction: column;
			align-items: flex-start;
			gap: 0.25rem;
		}

		.hours-row.today {
			padding: 1rem;
		}

		.day-hours {
			text-align: left;
		}

		.hours-note {
			text-align: center;
		}
	}

	@media (max-width: 480px) {
		.hours-component {
			padding: 1rem;
		}

		.hours-header {
			margin-bottom: 1rem;
		}

		.hours-footer {
			margin-top: 1rem;
			padding-top: 1rem;
		}
	}

	/* Focus styles for accessibility */
	.hours-component:focus-within {
		outline: 2px solid var(--primary-500);
		outline-offset: 2px;
	}

	/* Reduce motion for users who prefer it */
	@media (prefers-reduced-motion: reduce) {
		.hours-row,
		.status-dot {
			transition: none;
			animation: none;
		}
	}

	/* High contrast mode support */
	@media (prefers-contrast: high) {
		.hours-component {
			border-width: 2px;
		}

		.status-indicator {
			border-width: 2px;
		}

		.hours-row.today {
			border: 2px solid var(--primary-500);
		}
	}
</style>
