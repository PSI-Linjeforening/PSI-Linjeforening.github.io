<script>
	export const groups = ["Psykopatur", "PSIng"];

	import Sing from "svelte-icons/gi/GiSing.svelte";
	import Hiking from "svelte-icons/fa/FaHiking.svelte";
	import Facebook from "svelte-icons/io/IoLogoFacebook.svelte";
	import Camera from "svelte-icons/fa/FaCameraRetro.svelte";
</script>

<svelte:head>
	<title>Grupper</title>
</svelte:head>

<h1>Grupper:</h1>

<h3>
	<a class="icon" href="grupper/psykopatur">
		<Hiking />
		Psykopatur
	</a>
</h3>

<h3>
	<a class="icon" href="grupper/psing">
		<Sing />
		PSIng
	</a>
</h3>

<h3>
	<a class="icon" href="grupper/pr">
		<Camera />
		PR
	</a>
</h3>
