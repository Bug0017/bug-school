<script lang="ts">
	import Building from 'carbon-pictograms-svelte/lib/Building.svelte';
	import { Form, TextInput, PasswordInput, Button } from 'carbon-components-svelte';

	import { useMutation } from '@sveltestack/svelte-query';
	import Login16 from 'carbon-icons-svelte/lib/Login16';
	import { goto } from '$app/navigation';
	import { loginUser } from '$lib/api/login';

	const mutation = useMutation((user) => loginUser(user), {
		onSuccess: (context) => {
			console.log(context);
			debugger;
			goto('/dashboard');
		},
		onError: (error) => {
			console.log(error);
		}
	});

	async function handleClick(event) {
		event.preventDefault();
		// @ts-ignore
		$mutation.mutate(new FormData(event.target));
	}
</script>

<div class="flex flex-col justify-center items-center h-screen space-y-5">
	<Building />

	{#if $mutation.error}
		<h5 on:click={() => $mutation.reset()}>Invalid Username and Password</h5>
	{/if}
	<Form class="space-y-5" on:submit={handleClick}>
		<TextInput labelText="User name" placeholder="Enter user name..." required name="username" />
		<PasswordInput
			required
			type="password"
			labelText="Password"
			placeholder="Enter password..."
			name="password"
		/>
		<Button icon={Login16} type="submit">Log in</Button>
	</Form>
</div>
