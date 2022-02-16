<script>
	import '$lib/css/tailwindcss.css';
	import 'carbon-components-svelte/css/g100.css';
	import '$lib/css/app.css';

	import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query';
	const queryClient = new QueryClient();
</script>

<QueryClientProvider client={queryClient}>
	<slot />
</QueryClientProvider>

<style>
	@font-face {
		font-family: sure-italic;
		src: url(/fonts/OperatorMonoLig-MediumItalic.otf) format('opentype');
	}

	@font-face {
		font-family: sure;
		src: url(/fonts/OperatorMonoLig-Medium.otf) format('opentype');
	}
</style>
