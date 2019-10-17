---

```html
<script>
	import Nested from './Nested.svelte';
</script>

<Nested />
```

[Repl](https://svelte.dev/repl/208f051b0df74cf3bc82e61bcd2f7241)

---

### Reactivity

```html
<script>
	let count = 0;

	function handleClick() {
		count += 1;
	}
</script>

<button type="button" on:click={handleClick}>
	Clicked {count} {count === 1 ? 'time' : 'times'}
</button>
```

[Repl](https://svelte.dev/repl/22109b3a46404727a9207411ae83d705)

---

### Reactive Declarations

> re-run this code whenever any of the referenced values change

---

```html
<script>
	let count = 0;
	$: doubled = count * 2;

	function handleClick() {
		count += 1;
	}
</script>

<button type="button" on:click={handleClick}>
	Clicked {count} {count === 1 ? 'time' : 'times'}
</button>

<p>{count} doubled is {doubled}</p>
```

[Repl](https://svelte.dev/repl/40af420ebd0c47418ae9c5fe15d356cb), [JS Label syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label)

---

<script>
	let count = 0;

  $: {
    console.log(count)
  }

	$: if (count >= 10) {
		alert(`count is dangerously high!`);
		count = 9;
	}

	function handleClick() {
		count += 1;
	}
</script>

[Repl](https://svelte.dev/repl/cff0069ff7a24d399b96671373e1c195)

---

### Component Props

```html
<!-- Spoiler.svelte -->
<script>
	export let answer = 'a mystery';
</script>
<p>The answer is {answer}</p>

<!-- Elsewhere -->
<Spoiler answer={42}/>
```

[Repl](https://svelte.dev/repl/ee1f5b92c2bc497b9810127407d1bbd4)

---

### Slots (aka Child Components)

```html
<!-- Box.svelte -->
<div class="box">
	<slot></slot>
</div>

<!-- App.svelte -->

<Box>
	<p>This goes to slot!</p>
</Box>
```

[Repl](https://svelte.dev/repl/e2a2a1875fcf4338865fc9cef39f70d6?version=3.12.1)

---

### Named Slots



---

### Conditionals

```html
<script>
	let user = { loggedIn: false };

	function toggle() {
		user.loggedIn = !user.loggedIn;
	}
</script>

{#if user.loggedIn}
	<button on:click={toggle}>
		Log out
	</button>
{:else}
	<button on:click={toggle}>
		Log in
	</button>
{/if}
```

---

### `each` Loop

```html
<h1>Shopping list</h1>
<ul>
	{#each items as item}
		<li>{item.name} x {item.qty}</li>
	{:else}
		<li>Nothing on your shopping list!</li>
	{/each}
</ul>
```

[Repl](https://svelte.dev/repl/49395cb154fa49a09ec92daa50d56ae3?version=3.12.1)

---

#### Item Key

```html
{#each things as thing (thing.id)}
	<Thing current={thing.color}/>
{/each}
```

[Repl](https://svelte.dev/repl/f76cfd019f7c4564b0391fc4ffa62e6c?version=3.12.1) (broken)

---

#### Destructuring & Indexing

```html
{#each things as { id, color }, i (id)}
	<Thing {i} current={color}/>
{/each}
```

[Repl](https://svelte.dev/repl/069b4f22a0084a9ab8b8eec92ea76ad2?version=3.12.1)

---

### Handling raw HTML

`{@html ...}`


```html
<script>
	let string = 'There is some <strong>HTML!!!</strong>';
</script>
<p>{string}</p>
<p>{@html string}</p>
```

---

### Await Block

```html
{#await promise}
	<p>...waiting</p>
{:then number}
	<p>The number is {number}</p>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
```

[Repl](https://svelte.dev/repl/e458c8a40bfd497e88f8145225361bf0?version=3.12.1)

---

### Debugging

`{@debug ...}`

```html
<script>
	let user = {
		firstname: 'Ada',
		lastname: 'Lovelace'
	};
</script>

{@debug user}

<h1>Hello {user.firstname}!</h1>
```

[Repl](https://svelte.dev/repl/407540e17ef74b86a00843da7d31e626?version=3.12.1)

