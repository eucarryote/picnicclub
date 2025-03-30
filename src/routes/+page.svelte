<script lang="ts">
	import Button from '$lib/Button.svelte';
	import { onMount } from 'svelte';

	let windowWidth = 0;

	function handleResize() {
		windowWidth = window.innerWidth;
	}

	onMount(() => {
		handleResize();
		window.addEventListener('resize', handleResize);
	});
</script>

<div class="bento">
	<div class="page-title-container">
		<h1 class="page-title">Picnic Club</h1>
	</div>
	<div class="about-section"></div>
	<div class="picnic-section">
		<div
			style="display: flex; flex-direction:row; justify-content: space-between; padding: 20px; width: 100%;"
		>
			<h3 class="section-title">Next Picnic</h3>
			<Button>Submit a Picnic</Button>
		</div>
	</div>
</div>

<style lang="scss">
	.page-title-container {
		margin-top: 12px;
		grid-column: span 4;
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

	.section-title {
		color: $red-color;
		font-size: 1.5rem;
		margin: 0;
		padding: 0;
		font-weight: 100;
	}

	@media (max-width: 768px) {
		.page-title {
			font-size: 23.5vw;
		}
	}

	.bento {
		display: grid;
		grid-template-columns: repeat(4, minmax(30px, 1fr));
		grid-auto-rows: minmax(150px, auto);
		gap: 0rem 3rem;
		width: 100%;
	}

	.about-section {
		grid-column: span 2;
		background-color: $red-color;
		background-size: cover;

		margin-top: 20px;
		border-radius: 10px;
	}

	.picnic-section {
		grid-column: span 2;
		border-color: $red-color;
		border-style: dashed;
		border-width: 2px;

		margin-top: 20px;
		display: flex;
	}
</style>
