<script>
	import {
		DataTable,
		Link,
		Modal,
		Pagination,
		Toolbar,
		ToolbarContent,
		ToolbarSearch,
		ToolbarMenu,
		ToolbarMenuItem,
		Button
	} from 'carbon-components-svelte';
	import Launch16 from 'carbon-icons-svelte/lib/Launch16';
	import TrashCan16 from 'carbon-icons-svelte/lib/TrashCan16';
	let open = false;
	let selectedId;
	let selectedName;
	function handleClick(row) {
		open = !open;
		selectedId = row.id;
		selectedName = row.name;
	}
</script>

<svelte:head>
	<title>Students</title>
</svelte:head>

<section class="flex flex-col space-y-6">
	<DataTable
		sortable
		title="Students"
		description="Your organization's active students."
		headers={[
			{ key: 'name', value: 'Name' },
			{ key: 'class', value: 'Class' },
			{ key: 'section', value: 'Section' },
			{ key: 'enrolledNo', value: 'Enrolled No.' },
			{ key: 'view', value: 'View' },
			{ key: 'delete', value: 'Delete' }
		]}
		rows={[
			{
				id: 'a',
				name: 'Surendar',
				class: '12',
				section: 'A',
				enrolledNo: 1212321
			},
			{
				id: 'b',
				name: 'vijay',
				class: '12',
				section: 'A',
				enrolledNo: 2123123
			},
			{
				id: 'c',
				name: 'Arun',
				class: '12',
				section: 'A',
				enrolledNo: 2131312
			}
		]}
	>
		<svelte:fragment slot="cell" let:row let:cell>
			{#if cell.key === 'view'}
				<Link icon={Launch16} href={`/dashboard/students/${row.id}`} />
			{:else if cell.key === 'delete'}
				<Button
					kind="danger-tertiary"
					iconDescription="Delete"
					icon={TrashCan16}
					size="small"
					on:click={() => handleClick(row)}
				/>
				<Modal
					bind:open
					modalHeading="Delete User"
					primaryButtonText="Confirm"
					secondaryButtonText="Cancel"
					on:click:button--secondary={() => (open = false)}
					on:open
					on:close
					on:submit={() => (open = false)}
				>
					<p>Are u want to delete {selectedName} who's id is {selectedId}.</p>
				</Modal>
			{:else}
				{cell.value}
			{/if}
		</svelte:fragment>
		<Toolbar>
			<ToolbarContent>
				<ToolbarSearch />
				<ToolbarMenu>
					<ToolbarMenuItem primaryFocus>Inactive Students</ToolbarMenuItem>
					<ToolbarMenuItem href="/dashboard/students">Active Studends</ToolbarMenuItem>
					<ToolbarMenuItem danger>Delete All Students</ToolbarMenuItem>
				</ToolbarMenu>
				<Button href="/dashboard/students/create">Create Student</Button>
			</ToolbarContent>
		</Toolbar>
	</DataTable>

	<Pagination totalItems={102} />
</section>
