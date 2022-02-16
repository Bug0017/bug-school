<script lang="ts">
	import Login from '$lib/components/Login.svelte';
</script>

<sectio class="flex flex-col sm:flex-row  min-h-screen w-screen">
	<div class="w-1/2 bg-fuchsia-50 h-screen bg-image" />
	<div class="w-1/2">
		<Login />
	</div>
</sectio>

<style>
	.bg-image {
		background-image: url('https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1232&q=80');
	}
</style>
