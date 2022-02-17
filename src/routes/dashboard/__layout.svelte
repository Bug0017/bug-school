<script context="module">
	export async function load(context) {
		return {
			props: {
				activePath: context.url.pathname.slice(1, context.url.pathname.length)
			}
		};
	}
</script>

<script>
	import Apps20 from 'carbon-icons-svelte/lib/Apps20';
	import UserProfileAlt20 from 'carbon-icons-svelte/lib/UserProfileAlt20';
	import Settings20 from 'carbon-icons-svelte/lib/Settings20';
	import UserMultiple16 from 'carbon-icons-svelte/lib/UserMultiple16';
	import UserIdentification20 from 'carbon-icons-svelte/lib/UserIdentification20';
	import { TooltipIcon } from 'carbon-components-svelte';
	import Topbar from '$lib/components/Topbar.svelte';
	export let activePath;
</script>

<section class="flex w-screen h-screeen">
	<div class="flex w-24 h-screen flex-col justify-between items-center pt-10 pb-10 custom-border">
		<div class="flex flex-col space-y-6">
			<a href="/dashboard">
				<TooltipIcon
					tooltipText="Dashboard"
					icon={Apps20}
					align="start"
					class={activePath === 'dashboard' ? 'active' : 'normal'}
				/>
			</a>
			<a href="/dashboard/staffs">
				<TooltipIcon
					tooltipText="Staffs"
					icon={UserProfileAlt20}
					align="start"
					class={activePath === 'dashboard/staffs' ? 'active' : 'normal'}
				/>
			</a>
			<a href="/dashboard/classes">
				<TooltipIcon
					tooltipText="Classes"
					icon={UserIdentification20}
					align="start"
					class={activePath === 'dashboard/classes' ? 'active' : 'normal'}
				/>
			</a>
			<a href="/dashboard/students">
				<TooltipIcon
					tooltipText="Students"
					icon={UserMultiple16}
					align="start"
					class={activePath === 'dashboard/students' ? 'active' : 'normal'}
				/>
			</a>
		</div>
		<div>
			<a href="/dashboard/settings">
				<TooltipIcon
					tooltipText="Settings"
					icon={Settings20}
					align="start"
					class={activePath === 'dashboard/settings' ? 'active' : 'normal'}
				/>
			</a>
		</div>
	</div>
	<div class="flex flex-col flex-grow p-10">
		<Topbar />
		<slot />
	</div>
</section>

<style>
	.custom-border {
		border-right: 1px solid #e6e6e6;
	}

	:global(.active svg) {
		fill: #0f62fe !important;
	}
	:global(.active svg:hover) {
		fill: rgb(255, 255, 255) !important;
	}

	:global(.normal svg:hover) {
		fill: #0f62fe !important;
	}
</style>
