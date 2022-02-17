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

	import { Button } from 'carbon-components-svelte';
	import View32 from 'carbon-icons-svelte/lib/View32';
	export let studentId;
</script>

<section class="flex flex-col">
	<div class="flex justify-end mt-10">
		<Button icon={View32} on:click={() => goto(`/dashboard/students/${studentId}`)}>View</Button>
	</div>
</section>
