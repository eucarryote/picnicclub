<script lang="ts">
	const { picnics } = $props();

	let current_picnic_index = $state(0);
	import type { Database } from '../../database.types';

	let current_picnic: Database['public']['Tables']['picnic']['Row'] = $derived(
		picnics[current_picnic_index]
	);

	function nextPicnic() {
		current_picnic_index = (current_picnic_index + 1) % picnics.length;
	}

	function previousPicnic() {
		current_picnic_index = (current_picnic_index - 1 + picnics.length) % picnics.length;
	}
</script>

<div class="picnic-slide">
	<div class="picnic-slide-content">
		<h2>{current_picnic.title}</h2>
		<p>{current_picnic.description}</p>
	</div>
	<div class="picnic-slide-image"></div>
</div>

<div class="slide-controls">
	<button onclick={previousPicnic}>Previous</button>
	<button onclick={nextPicnic}>Next</button>
</div>

<style lang="scss">
	.picnic-slide {
		display: flex;
		justify-content: space-between;
		border: 1px solid #ccc;
		border-radius: 8px;
		margin-top: 20px;
	}

	.picnic-slide-content {
		flex: 1;
		margin-right: 20px;

		h2 {
			color: $red-color; // Use your defined red color
			font-size: 24px;
			margin-bottom: 10px;
		}

		p {
			font-size: 16px;
		}
	}

	.picnic-slide-image img {
		max-width: 300px;
		border-radius: 8px;
	}

	.slide-controls {
		display: flex;
		justify-content: center;
		margin-top: 20px;
		gap: 10px;
	}
</style>
