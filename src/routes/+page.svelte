<div class="window">
	<div class="title-bar">
		<span class="title">PiCNiC CLUB</span>
		<div class="buttons">
			<div class="button close"></div>
			<div class="button minimize"></div>
			<div class="button maximize"></div>
		</div>
	</div>
	<div class="content">
		<p>Welcome to the Mac OS System 1.0!</p>
	</div>
</div>

<style lang="scss">
	.window {
		width: 300px;
		border: 2px solid $red-color;
		box-shadow: 4px 4px 0 darken($red-color, 5%);
	}

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
