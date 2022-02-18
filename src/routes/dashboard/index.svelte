<script context="module">
	export async function load({ session }) {
		if (session.body.session) {
			return {
				props: {
					session
				}
			};
		}

		return {
			status: 302,
			redirect: '/'
		};
	}
</script>

<script>
	import { useQuery } from '@sveltestack/svelte-query';
	import { fetchData } from '$lib/api/fetchData';

	export let session;

	const queryResult = useQuery('data', fetchData);

	$: {
		if ($queryResult.isSuccess) {
			console.log($queryResult.data);
		}
	}
</script>

<svelte:head>
	<title>Dashboard</title>
</svelte:head>
<h3>dashboard</h3>
