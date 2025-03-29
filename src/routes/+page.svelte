<script lang="ts">
	import Button from '$lib/Button.svelte';
	import { onMount } from 'svelte';

	let snips = ['foo', 'bar', 'baz', 'foo', 'bar', 'baz', 'foo', 'bar', 'baz'];
	let website = 'https://www.google.com';

	let windowWidth = 0;

	function handleResize() {
		windowWidth = window.innerWidth;
	}

	onMount(() => {
		handleResize();
		window.addEventListener('resize', handleResize);
	});
</script>

{#snippet bentoWindow(title: string, src: string)}
	<div class="window">
		<div class="title-bar">
			<span class="title">{title}</span>
			<div class="buttons">
				<div class="button close"></div>
				<div class="button minimize"></div>
				<div class="button maximize"></div>
			</div>
		</div>
		<div class="content">
			<iframe {title} {src} frameborder="0"></iframe>
		</div>
	</div>
{/snippet}

<div class="bento">
	<div class="page-title-container">
		<h1 class="page-title">Picnic Club</h1>
	</div>
	{#each snips as snip}
		{@render bentoWindow(snip, website)}
	{/each}
</div>

<Button>Click me</Button>

<style lang="scss">
	.page-title-container {
		margin-top: 12px;
		grid-column: span 3;
	}

	.page-title {
		color: $red-color;
		font-size: 26.1vw;
		font-weight: 100;
		line-height: 100%;
		letter-spacing: -0.05em;
		margin: 0;
		padding: 0;
	}

	@media (max-width: 768px) {
		.page-title {
			font-size: 23.5vw;
		}
	}

	.bento {
		display: grid;
		grid-template-columns: repeat(3, minmax(30px, 1fr));
		grid-auto-rows: minmax(150px, auto);
		gap: 0px;
		width: 100%;
	}

	.window {
		width: 100%;
		height: 100%;
		border: 2px solid $red-color;
		box-shadow: 4px 4px 0 darken($red-color, 5%);

		.title-bar {
			background-color: $red-color;
			color: white;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 5px;
			font-size: 14px;
		}

		.title-bar .title {
			text-transform: uppercase;
		}
	}

	.buttons {
		display: flex;
		gap: 5px;
	}

	.button {
		width: 10px;
		height: 10px;
		border: 1px solid white;
		background-color: $red-color;
		color: $red-color;
	}

	.content {
		padding: 10px;
		font-size: 14px;
	}
</style>
