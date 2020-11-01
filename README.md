# SPA State Management Demo

This repo demo how to do simple state update (and trigger re-render) with varies of SPA framework.

The example used is simply getting two numbers from input, then display the sum.

## Frameworks
- [Svelte](#svelte)

### Svelte
[App.svelte](./svelte-calc/src/App.svelte)
```sveltehtml
<script>
	let a = 1
	let b = 1
	let c
	$: c = a + b
</script>

<main>
	<input type="number" bind:value={a}>
	+
	<input type="number" bind:value={b}>
	=
	<span class="answer">{c}</span>
</main>

<style>
	.answer {
		color: green;
	}
</style>
```
