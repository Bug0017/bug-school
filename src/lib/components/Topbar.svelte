<script>
	import { session } from '$app/stores';
	import { Link } from 'carbon-components-svelte';
	import NotificationNew16 from 'carbon-icons-svelte/lib/NotificationNew16';
	import Notification16 from 'carbon-icons-svelte/lib/Notification16';
	import Logout16 from 'carbon-icons-svelte/lib/Logout16';
	import { logout } from '$lib/api/logout';
	let notification = false;
</script>

<div class="flex justify-end mb-10">
	<div class="flex space-x-3">
		<div class="flex items-center justify-center w-12 h-12 bg-black">
			<Link
				class="link"
				on:click={async () => {
					await logout({
						// @ts-ignore
						sessionId: $session.body.session.id
					});
					document.cookie = 'sessionId' + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
					window.location.reload();
				}}
			>
				<Logout16 />
			</Link>
		</div>
		<div class="flex items-center justify-center w-12 h-12 bg-blue-700">
			<Link href="/">
				{#if notification}
					<NotificationNew16 class="w-6 h-6" />
				{:else}
					<Notification16 class="w-6 h-6" />
				{/if}
			</Link>
		</div>
		<div class="flex items-center justify-center w-12 h-12 bg-blue-700 bg-profile-img" />
	</div>
</div>

<style>
	.bg-profile-img {
		background-image: url('https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&q=80');
	}

	:global(.link) {
		cursor: pointer;
	}
</style>
