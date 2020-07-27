<script>
	import { createEventDispatcher } from 'svelte';
	import Button from '../Button/Button.svelte';
	import { tuning } from '../../stores.js';
	import { Tunings } from '../../models/Tuning.js';
	
	const dispatch = createEventDispatcher();
	
	let tuningSelect = $tuning.instrument + "|" + $tuning.name;
	
	function changeTuning() {
		let [instrument, name] = tuningSelect.split("|");
		tuning.update(() => Tunings
								.find(({name: instrumentName}) => instrumentName == instrument)
								.tunings
								.find(({name: tuningName}) => tuningName == name));
	}
</script>

<style type="text/scss">
	@import 'Navigation';
</style>

<nav class="navigation">
	<h1>Selah Scales</h1>
	<div id="navigation--settings-button"><Button animationDirection="left" disabled on:click={()=>{dispatch('showSettings')}}>Settings</Button></div>
	<div id="navigation--tunings-button">
		<Button animationDirection="right" mode="dropDown">{$tuning.instrument}: {$tuning.name}</Button>
		<select bind:value={tuningSelect} on:change={changeTuning}>
			{#each Tunings as {name: instrument, tunings}}
				<optgroup label={instrument}>
					{#each tunings as {name}}
						<option value={instrument + "|" + name}>{name}</option>
					{/each}
				</optgroup>
			{/each}
		</select>
	</div>
</nav>