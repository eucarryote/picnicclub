<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import Button from '$lib/Button.svelte';
</script>

<form
	method="POST"
	class="picnic-form"
	use:enhance={({ formElement, formData, action, cancel }) => {
		return async ({ result }) => {
			console.log('Form submitted:', formData);
			if (result.type === 'redirect') {
				goto(result.location);
			} else {
				await applyAction(result);
			}
		};
	}}
>
	<label>
		Title*
		<input type="text" name="title" required />
	</label>
	<label>
		Description*
		<textarea name="description"></textarea>
	</label>
	<label>
		Organizer Name*
		<input type="text" name="organizer_name" />
	</label>
	<label>
		Organizer Email*
		<input type="email" name="email" />
	</label>
	<label>
		Location*
		<input type="text" name="location" />
	</label>
	<label>
		Meeting Place
		<input type="text" name="meeting_place" />
	</label>
	<div style="display: flex; justify-content:space-between; ">
		<Button type="button" onclick={() => goto('/')}>Cancel</Button>
		<Button type="submit">Add Picnic</Button>
	</div>
</form>

<style lang="scss">
	.picnic-form {
		grid-column: span 4;
		display: flex;
		flex-direction: column;
		gap: 10px;
		width: 100%;
		max-width: 400px;
		margin: 20px auto;

		label {
			display: flex;
			flex-direction: column;
			font-size: 16px;
			width: 100%;

			input,
			textarea {
				padding: 8px;
				margin-top: 5px;
				border: 1px solid #ccc;
				border-radius: 4px;
			}
		}
	}
</style>
