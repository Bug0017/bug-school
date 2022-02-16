<script lang="ts">
	import Building from 'carbon-pictograms-svelte/lib/Building.svelte';
	import { Form, TextInput, PasswordInput, Button } from 'carbon-components-svelte';

	import Login16 from 'carbon-icons-svelte/lib/Login16';
</script>

<div class="flex flex-col justify-center items-center h-screen space-y-5">
	<Building />
	<Form class="space-y-5">
		<TextInput labelText="User name" placeholder="Enter user name..." required />
		<PasswordInput required type="password" labelText="Password" placeholder="Enter password..." />
		<Button icon={Login16}>Log in</Button>
	</Form>
</div>
