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
	{#if current_picnic}
		<div class="picnic-slide-content">
			<h2>{current_picnic.title}</h2>
			<p>{current_picnic.description}</p>
		</div>
		<div class="picnic-slide-image"></div>
	{:else}
		<div class="picnic-slide-content">
			<h2>No Picnic Found</h2>
			<p>It seems like there are no picnics available at the moment.</p>
			<p>Please check back later or consider organizing a new picnic!</p>
		</div>
	{/if}
</div>

{#if picnics.length > 1}
	<div class="slide-controls">
		<button onclick={previousPicnic}>Previous</button>

		<span>{current_picnic_index + 1} / {picnics.length}</span>

		<button onclick={nextPicnic}>Next</button>
	</div>
{/if}

<style lang="scss">
	.picnic-slide {
		display: flex;
		justify-content: space-between;
		margin-top: 20px;
	}

	.picnic-slide-content {
		flex: 1;
		margin-right: 20px;

		h2 {
			color: $red-color;
			font-size: 24px;
			margin-bottom: 10px;
		}

		p {
			font-size: 16px;
		}
	}

	.slide-controls {
		display: flex;
		justify-content: center;
		margin-top: 20px;
		gap: 10px;
	}
</style>
