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
