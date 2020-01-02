<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`grupper.json`)
      .then(r => r.json())
      .then(groups => {
        return { groups };
      });
  }
</script>

<script>
  export let groups;
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
      <a rel="prefetch" href="grupper/{group.slug}">{group.title}</a>
    </li>
  {/each}
</ul>
