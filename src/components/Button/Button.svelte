<script>
	import { createEventDispatcher } from 'svelte';
	
	export let animationDirection = 'left';
	export let mode = "button";
	export let disabled = false;

	const dispatch = createEventDispatcher();
	function clickHandler() {
		dispatch('click');
	}
</script>

<style type="text/scss">
	@import 'Button';
</style>

<button disabled={disabled} on:click={clickHandler} class="btn btn-{animationDirection}"><slot></slot></button>