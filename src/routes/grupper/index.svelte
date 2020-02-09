<script>
	export const groups = ["Psykopatur", "PSIng"];

	import Sing from "svelte-icons/gi/GiSing.svelte";
	import Hiking from "svelte-icons/fa/FaHiking.svelte";
	import Icon from "../../components/Icon.svelte";
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
<h1>Grupper:</h1>

<a href="grupper/psykopatur">
	<h3>
		Psykopatur
		<Icon>
			<Hiking />
		</Icon>
	</h3>
</a>

<a href="grupper/psing">
	<h3>
		PSIng
		<Icon>
			<Sing />
		</Icon>
	</h3>
</a>
