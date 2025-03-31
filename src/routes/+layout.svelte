<script>
	import '../styles/global.scss';
</script>

<div class="bento">
	<div class="page-title-container">
		<h1 class="page-title">Picnic Club</h1>
	</div>
	<slot></slot>
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
</style>
