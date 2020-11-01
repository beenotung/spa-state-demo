# SPA State Management Demo

This repo demo how to do simple state update (and trigger re-render) with varies of SPA framework.

The example used is simply getting two numbers from input, then display the sum.

## Frameworks
- [Svelte](#svelte)
- [React](#react)

### Svelte
<details>
<summary>

[App.svelte](./svelte-calc/src/App.svelte)

</summary>

```html
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

</details>

### React
<details>
<summary>

[App.tsx](./react-calc/src/App.tsx)

</summary>

```typescript jsx
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  let [a, setA] = useState(1);
  let [b, setB] = useState(1);
  let [c, setC] = useState(a + b);
  useEffect(() => {
    setC(a + b);
  }, [a, b]);
  return (
    <>
      <input
        type="number"
        value={a}
        onInput={(e) => setA((e.target as HTMLInputElement).valueAsNumber)}
      />
      +
      <input
        type="number"
        value={b}
        onInput={(e) => setB((e.target as HTMLInputElement).valueAsNumber)}
      />
      =<span className="answer">{c}</span>
    </>
  );
}

export default App;
```

</details>

<details>
<summary>

[App.css](./react-calc/src/App.css)

</summary>

```css
.answer {
  color: green;
}
```

</details>
