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

<button
	data-testid="button"
	disabled={disabled}
	class="btn btn-animation-{animationDirection} btn-mode-{mode}"
	on:click={clickHandler}
>
	<slot></slot>
</button>