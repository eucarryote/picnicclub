<script lang="ts">
	let { children } = $props();
</script>

<button>
	{@render children()}
</button>

<style lang="scss">
	button {
		font-family: inherit;
		font-size: 14px;
		border: 2px solid $red-color;
		background-color: white;
		padding: 5px 10px;
		cursor: pointer;
		outline: none;
	}

	button:hover {
		background-color: $red-color;
		color: white;
	}
</style>
