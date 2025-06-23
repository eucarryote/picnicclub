<script lang="ts">
	import { goto } from '$app/navigation';
	import Section from '$lib/Section.svelte';
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

<Section
	title="Upcoming Picnics"
	buttonText="Add a Picnic"
	buttonOnclick={() => goto('/picnic/add')}
>
	<PicnicSlide picnics={data.picnics} />
</Section>

<style lang="scss">
	.about-section {
		grid-column: span 2;
		background-color: $red-color;
		background-size: cover;
		border-radius: 10px;
	}
</style>
