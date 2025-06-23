<script lang="ts">
	import Button from './Button.svelte';

	let {
		title,
		buttonText = null,
		buttonHref = null,
		buttonOnclick = null,
		buttonType = 'button',
		children
	}: {
		title: string;
		buttonText?: string | null;
		buttonHref?: string | null;
		buttonOnclick?: (() => void) | null;
		buttonType?: string;
		children: any;
	} = $props();
</script>

<div class="section">
	<div class="section-header">
		<h3 class="section-title">{title}</h3>
		{#if buttonText}
			<Button type={buttonHref ? 'link' : buttonType} href={buttonHref} onclick={buttonOnclick}>
				{buttonText}
			</Button>
		{/if}
	</div>
	<div class="section-content">
		{@render children()}
	</div>
</div>

<style lang="scss">
	.section {
		grid-column: span 2;
		@media (max-width: 1000px) {
			grid-column: span 4;
		}
		border-color: $red-color;
		border-style: solid;
		border-width: 2px;

		display: flex;
		flex-direction: column;
	}

	.section-header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
		align-items: center;
		background-color: $red-color;
		padding: 10px 15px;
		box-sizing: border-box;
	}

	.section-title {
		color: white;
		font-size: 1.5rem;
		margin: 0;
		padding: 0;
		font-weight: 100;
	}

	.section-content {
		padding: 10px;
		padding-top: 0;
	}
</style>
