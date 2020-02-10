<script>
	export let segment;
</script>

<style>
	nav {
		font-weight: 350;
		padding: 0 1em;
		padding-bottom: 3em;
		background-color: rgb(159, 43, 226);
		background: linear-gradient(
				rgba(159, 43, 226, 0.9) 20%,
				rgba(207, 77, 207, 0.9)
			),
			center center / 105vw no-repeat url("/images/brain-mono.png");
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

	a {
		margin: 1em 0.5em 0 0.5em;
		display: block;
		font-size: 1.5em;
		color: ivory;
		position: relative;
	}

	a::after,
	.selected::after {
		height: 2px;
		background-color: rgba(255, 255, 255, 0.5);
	}

	.selected::after {
		background-color: rgb(214, 83, 226);
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
