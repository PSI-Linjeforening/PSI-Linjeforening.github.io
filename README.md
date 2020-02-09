# PSI Linjeforening

## About

This is a repository for the PSI Linjeforening website. The site is built with sapper and svelte to generate static web pages. To read more about the template used for this project check out the `svelte-README.md` file or visit sapper at https://sapper.svelte.dev or svelte at https://svelte.dev.

## Getting started

### Development mode

To run project in development mode, run:

```shell
npm run dev
```

The site will then be avilable at http://localhost:5000 with debugging and hot-reload enabled, meaning you can change files and as soon as you save them, the changes will be applied in your browser.

### Production Mode

To build a static production version of this site, run:

```shell
npx sapper export
```

This will generate static html, css and javascript files for this website into the `__sapper__/export/` folder. You can then statically serve these files to host your site, for instance using npx serve:

```shell
npx serve __sapper__/export
```

## Icons

This site uses [svelte-icons](https://github.com/gibdig/svelte-icons). You can find all avilable icons [here](https://www.svelte-icons.gibdig.com).

Example to include a icon inline text:

```html
<script>
	// Import Facebook Messenger icon from fa (FontAwesome) collection.
	// Format should be "svelte-icons/{collection-code}/{icon-name}.svelte"
	// Where collection code is the same two first letter of the icon-name, just in lower case.
	// Lets call our import Messenger for simpler use later
	import Messenger from "svelte-icons/fa/FaFacebookMessenger.svelte";
	import Icon from "../components/AIcon.svelte";
</script>

<!-- Link Wrapper -->
<a href="https://m.me/psi.linjeforening">
	<!-- Include icon in paragraph to make them same line and size -->
	<p>
		<!-- An icon wrapper to easilly include icons -->
		<Icon>
			<!-- Our imported messenger icon -->
			<Messenger />
		</Icon>
		<!-- Text that continues on the same line -->
		Messenger PSI
	</p>
</a>
<p></p>
```

Example of a big clickable link icon:

```html
<script>
	import Facebook from "svelte-icons/io/IoLogoFacebook.svelte";
	import AIcon from "../components/AIcon.svelte";
</script>

<p>
	Følg oss på Facebook for oppdateringer og aktiviteter:
	<br />
	<!--- A icon wrapper which also makes the icon a link/anchor -->
	<AIcon size="3em" href="https://www.facebook.com/groups/400303520423813/">
		<!--- Our Facebook icon -->
		<Facebook />
	</AIcon>
</p>
```

The Icon wrapper component takes one (optional) property, `size`, which is a CSS value (default to `1em`, same size as current line of text).

The AIcon wrapper component takes two properties:
`size` (optional), same as Icon.
`href` (mandatory), where to link to.
