<script>
	export const groups = ["Psykopatur", "PSIng"];
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>Grupper</title>
</svelte:head>
<h1>Grupper</h1>

<ul>
	{#each groups as group}
		<li>
			<a rel="prefetch" href="grupper/{group.toLowerCase()}">{group}</a>
		</li>
	{/each}
</ul>
