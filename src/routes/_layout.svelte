<script>
	import Nav from "../components/Nav.svelte";

	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: #fafafa;
		box-shadow: 0 0 3px 0px rgba(100, 100, 100, 0.4);
		border-radius: 2.5px;
		padding: 2em;
		margin: 0.8em auto;
		box-sizing: border-box;
	}

	@media (max-width: 56em) {
		main {
			box-shadow: none;
			border-radius: 0;
		}
	}
</style>

<Nav {segment} />

<main>
	<slot />
</main>
