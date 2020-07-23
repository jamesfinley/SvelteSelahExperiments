<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
</script>

<style type="text/scss">
	nav {
		display: flex;
		border-top: 1px solid var(--foreground);
		background: var(--background);
	}
	button {
		flex-grow: 1;
		height: 48px;
		
		border: 0;
		background: transparent;
		color: var(--foreground);
		
		&[disabled] {
			opacity: 0.5;
		}
	}
</style>

<nav class="tabs">
	<button class="tabs--fingerboard" on:click={() => {dispatch('showFingerboard')}}>Fingerboard</button>
	<button disabled class="tabs--tablature" on:click={() => {dispatch('showTablature')}}>Tablature</button>
	<button disabled class="tabs--staff" on:click={() => {dispatch('showStaff')}}>Staff</button>
	<button disabled class="tabs--magic" on:click={() => {dispatch('showMagic')}}>Magic</button>
</nav>