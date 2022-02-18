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
	export let session;
</script>

<svelte:head>
	<title>Dashboard</title>
</svelte:head>
{JSON.stringify(session)}
<h3>dashboard</h3>
