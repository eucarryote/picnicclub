<script lang="ts">
	let { children } = $props();

	let confetti = $state(false);

	let confettiStart = $state([0, 0]);
	const confettiDuration = 350;

	function throwConfetti(event: { clientX: number; clientY: number }) {
		confetti = true;
		confettiStart = [event.clientX, event.clientY];

		setTimeout(() => {
			confetti = false;
		}, confettiDuration);
	}
</script>

<div class="relative">
	<button onclick={throwConfetti}>
		{@render children()}
	</button>

	{#if confetti}
		<div class="confetti">
			{#each new Array(100) as _, i}
				<span
					class="piece"
					style="--start-x: {confettiStart[0]}px; --start-y: {confettiStart[1]}px; --translate-x: {Math.random() *
						200 -
						100}px; --translate-y: {Math.random() * 200 - 100}px;"
				></span>
			{/each}
		</div>
	{/if}
</div>

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

	.confetti {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
	}

	.piece {
		position: fixed;
		width: 10px;
		height: 10px;
		background-color: $red-color;
		border-radius: 50%;
		pointer-events: none;
		top: var(--start-y);
		left: var(--start-x);
		animation: confetti 350ms ease-out forwards;
	}

	@keyframes confetti {
		0% {
			opacity: 1;
			transform: translate(0, 0);
		}
		100% {
			opacity: 0;
			transform: translate(var(--translate-x), var(--translate-y));
		}
	}
</style>
