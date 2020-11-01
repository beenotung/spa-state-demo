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