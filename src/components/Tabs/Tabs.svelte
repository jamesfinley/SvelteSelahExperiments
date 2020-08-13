<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
</script>

<style type="text/scss">
	@import 'Tabs';
</style>

<nav class="tabs">
	<button class="tabs--fingerboard" on:click={() => {dispatch('showFingerboard')}}>Fingerboard</button>
	<button disabled class="tabs--tablature" on:click={() => {dispatch('showTablature')}}>Tablature</button>
	<button disabled class="tabs--staff" on:click={() => {dispatch('showStaff')}}>Staff</button>
	<button class="tabs--magic" on:click={() => {dispatch('showMagic')}}>Magic</button>
</nav>