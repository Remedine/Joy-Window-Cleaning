<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		href: string;
		ariaLabel: string;
		children: Snippet;
	}

	let { href, ariaLabel, children }: Props = $props();
</script>
<section class="hero-section">
	<div>
		<h1>Joy Window Cleaning</h1>
		<div>
			<p>Let the clear radiant light bring joy to your home!</p>
		</div>
	</div>
</section>

<a
	{href}
	rel="noreferrer noopener"
	target="_blank"
	aria-label={ariaLabel}
	class="hero-section"
>
	{@render children()}
</a>

<style>
	.hero-section {
		color: white;
	}
</style>