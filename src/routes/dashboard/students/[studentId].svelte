<script context="module">
	export async function load({ params: { studentId } }) {
		return {
			props: {
				studentId
			}
		};
	}
</script>

<script>
	import { goto } from '$app/navigation';

	import { Button, Modal } from 'carbon-components-svelte';
	import Edit16 from 'carbon-icons-svelte/lib/Edit16';
	import Delete16 from 'carbon-icons-svelte/lib/Delete16';
	export let studentId;
	let open = false;
</script>

<section class="flex flex-col">
	<div class="flex justify-end mt-10 space-x-2">
		<Button icon={Edit16} on:click={() => goto(`/dashboard/students/edit/${studentId}`)}
			>Edit</Button
		>

		<Button
			icon={Delete16}
			kind="danger"
			on:click={() => {
				open = !open;
			}}>Delele</Button
		>
		<Modal
			bind:open
			modalHeading="Create database"
			primaryButtonText="Confirm"
			secondaryButtonText="Cancel"
			on:click:button--secondary={() => (open = false)}
			on:open
			on:close
			on:submit={() => (open = false)}
		>
			<p>Are u sure you want to delete the user who's id is {studentId}</p>
		</Modal>
	</div>
</section>
