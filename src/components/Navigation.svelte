<script>
	import { createEventDispatcher } from 'svelte';
	import Button from './Button.svelte';
	import { tuning } from '../stores.js';
	import { Tunings } from '../models/Tuning.js';
	
	const dispatch = createEventDispatcher();
</script>

<style type="text/scss">
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 44px;
		padding: 0 16px;
	}
	
	h1 {
		font-family: var(--fontMedium);
		order: 2;
	}
	#navigation--settings-button {
		order: 1;
	}
	#navigation--tunings-button {
		order: 3;
	}
</style>

<nav class="navigation">
	<h1>Selah Scales</h1>
	<div id="navigation--settings-button"><Button animationDirection="left" disabled on:click={()=>{dispatch('showSettings')}}>Settings</Button></div>
	<div id="navigation--tunings-button"><Button animationDirection="right" mode="dropDown" on:click={() => tuning.update((value) => value.instrument == "Guitar" ? Tunings.mandola : Tunings.guitar )}>{$tuning.instrument}: {$tuning.name}</Button></div>
</nav>