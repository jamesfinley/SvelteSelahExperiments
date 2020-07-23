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
	button {
		-webkit-appearance: none;
		
		height: 30px;
		padding: 0 8px;
		border: 2px solid var(--foreground);
		box-sizing: border-box;
		border-radius: 15px;
		background: transparent;
		font-size: 14px;
		font-family: var(--fontDemiBold);
		color: var(--foreground);
		
		&[disabled] {
			opacity: 0.5;
		}
	}
</style>

<button disabled={disabled} on:click={clickHandler} class="btn btn-{animationDirection}"><slot></slot></button>