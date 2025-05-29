<script lang="ts">
	import { onMount, type Snippet } from 'svelte';
	import { initSatellite } from '@junobuild/core';
	import Footer from '$lib/components/Footer.svelte';
	import Background from '$lib/components/Background.svelte';
	import '../app.css';
	import QuoteForm from '$lib/components/QuoteForm.svelte';

	interface Props {
		children?: Snippet;
	}

	let { children }: Props = $props();

	onMount(
		async () =>
			await initSatellite({
				workers: {
					auth: true
				}
			})
	);
</script>

<div class="relative isolate min-h-[100dvh] color-white">
	<main>
		<section class="hero-section h1">
	<div class="intro">
		<h1>Joy Window Cleaning</h1>
		<p>Our family owned company is happy to serve your houses extorior needs. We offer window cleaning, gutter cleaning, trash removal, breakfast and dinner.</p>
		<p>Serving Clackamas, Portland, Estacada, Wilsonville, Tigard, Boring, Gresham, Tualatin, Beaverton</p>
	</div>
	<div class="quote-form"><QuoteForm></QuoteForm></div>

</section>
<!-- Render child routes here -->
{@render children()}

	</main>
	

	<Footer />

	<Background />
</div>
<style>
	h1 {
		color: black;
		font-size: 36px;
	}
	.hero-section {
		display: flex;
		color: black;
		gap: 20px;
		line-height: 1.8em;
		padding: 100px;
	}
	.intro {
		width: 50%;
	}
	.quote-form {
		width: 50%
	}

	
</style>