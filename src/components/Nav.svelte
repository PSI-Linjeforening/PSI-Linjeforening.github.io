<script>
	export let segment;
</script>

<style>
	nav {
		font-weight: 300;
		padding: 0 1em;
		padding-bottom: 3em;
		background-color: rgb(159, 43, 226);
		background: linear-gradient(rgb(159, 43, 226) 20%, rgb(207, 77, 207));
		clip-path: ellipse(60% 80% at 50% 20%);
		-webkit-clip-path: ellipse(60% 80% at 50% 20%);
	}

	ul {
		margin: 0;
		padding: 0;
		display: flex;
		justify-content: space-around;
		flex-flow: row;
	}

	li {
		display: block;
		text-transform: uppercase;
	}

	.selected {
		position: relative;
		display: inline-block;
	}

	.selected::after {
		position: absolute;
		content: "";
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(214, 83, 226);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
		font-size: 1.5em;
		padding-bottom: 0;
		color: ivory;
		border-radius: 3px;
	}

	a:hover {
		position: relative;
		display: inline-block;
	}

	a:not(.selected):hover::after {
		position: absolute;
		content: "";
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgba(255, 255, 255, 0.5);
		display: block;
		bottom: -1px;
	}

	@media (max-width: 800px) {
		nav {
			padding-bottom: 1.5em;
		}
	}
</style>

<nav>
	<ul>
		<li>
			<a class:selected={segment === undefined} rel="prefetch" href=".">
				hjem
			</a>
		</li>
		<li>
			<a class:selected={segment === 'om'} rel="prefetch" href="om">om</a>
		</li>
		<li>
			<a
				rel="prefetch"
				class:selected={segment === 'grupper'}
				href="grupper">
				grupper
			</a>
		</li>
		<li>
			<a rel="prefetch" class:selected={segment === 'andre'} href="andre">
				andre
			</a>
		</li>
	</ul>
</nav>
