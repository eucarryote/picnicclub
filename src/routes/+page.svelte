<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/Button.svelte';
	import PicnicSlide from '$lib/PicnicSlide.svelte';
	import { onMount } from 'svelte';

	let windowWidth = 0;

	function handleResize() {
		windowWidth = window.innerWidth;
	}

	onMount(() => {
		handleResize();
		window.addEventListener('resize', handleResize);
	});

	let { data } = $props();
</script>

<div class="about-section"></div>
<div class="picnic-section">
	<div style="display: flex; flex-direction:row; justify-content: space-between; width: 100%;">
		<h3 class="section-title">Upcoming Picnics</h3>
		<a href="picnic/add">
			<Button type="button">Add a Picnic</Button>
		</a>
	</div>
	<PicnicSlide picnics={data.picnics} />
</div>

<style lang="scss">
	.section-title {
		color: $red-color;
		font-size: 1.5rem;
		margin: 0;
		padding: 0;
		font-weight: 100;
	}

	.about-section {
		grid-column: span 2;
		background-color: $red-color;
		background-size: cover;

		border-radius: 10px;
	}

	.picnic-section {
		grid-column: span 2;
		border-color: $red-color;
		border-style: dashed;
		border-width: 2px;
		padding: 10px;

		display: flex;
		flex-direction: column;
	}
</style>
