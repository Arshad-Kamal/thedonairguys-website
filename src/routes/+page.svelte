<!-- Homepage Hero Section - PRD Reference: "Homepage > Hero Section" -->
<script>
	import Hero from '$lib/components/Hero.svelte';
	import FeatureCards from '$lib/components/FeatureCards.svelte';
	import { onMount } from 'svelte';

	let heroVisible = false;

	onMount(() => {
		heroVisible = true;
	});
</script>

<svelte:head>
	<title>The Donair Guys - Authentic Halal Donairs Edmonton</title>
	<meta name="description" content="Edmonton's favorite 100% Halal donairs, pizza, burgers & more. Family-owned since 2018. Order online or call (780) 244-0104." />
</svelte:head>

<main class="homepage">
	<Hero {heroVisible} />
	<FeatureCards />
	<!-- Additional sections will be added in subsequent tasks -->
</main>

<style>
	.homepage {
		min-height: 100vh;
	}
</style>
