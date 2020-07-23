<script>
	import Notes from "../models/Note.js";
	import { createEventDispatcher } from 'svelte';
	
	const dispatch = createEventDispatcher();
	
	export let rootNote;
	
	$: cClasses = `root-note-control--root ${rootNote == 'C' || rootNote == 'C#' ? 'root-note-control--selected' : ''}`;
	$: dClasses = `root-note-control--root ${rootNote == 'D' || rootNote == 'D#' ? 'root-note-control--selected' : ''}`;
	$: eClasses = `root-note-control--root ${rootNote == 'E' ? 'root-note-control--selected' : ''}`;
	$: fClasses = `root-note-control--root ${rootNote == 'F' || rootNote == 'F#' ? 'root-note-control--selected' : ''}`;
	$: gClasses = `root-note-control--root ${rootNote == 'G' || rootNote == 'G#' ? 'root-note-control--selected' : ''}`;
	$: aClasses = `root-note-control--root ${rootNote == 'A' || rootNote == 'A#' ? 'root-note-control--selected' : ''}`;
	$: bClasses = `root-note-control--root ${rootNote == 'B' ? 'root-note-control--selected' : ''}`;
	
	$: cSharpClasses = `root-note-control--accidental ${rootNote == 'C#' ? 'root-note-control--selected' : ''}`;
	$: dSharpClasses = `root-note-control--accidental ${rootNote == 'D#' ? 'root-note-control--selected' : ''}`;
	$: fSharpClasses = `root-note-control--accidental ${rootNote == 'F#' ? 'root-note-control--selected' : ''}`;
	$: gSharpClasses = `root-note-control--accidental ${rootNote == 'G#' ? 'root-note-control--selected' : ''}`;
	$: aSharpClasses = `root-note-control--accidental ${rootNote == 'A#' ? 'root-note-control--selected' : ''}`;
</script>

<style type="text/scss">
	.root-note-control {
		display: flex;
		height: 44px;
		border: 2px solid var(--foreground);
		border-radius: 22px;
		box-sizing: border-box;
		overflow: hidden;
		font-family: var(--fontMedium);
	}
	.root-note-control button {
		border: 0;
		background: transparent;
		color: var(--foreground);
		
		&:hover, &.root-note-control--selected {
			background: var(--foreground);
			color: var(--background);
		}
	}
	
	.root-note-control--root {
		width: calc((100% / (7 + ((5 * 2) / 3))));
	}
	.root-note-control--accidental {
		width: calc((100% / (7 + ((5 * 2) / 3))) * (2/3));
	}
</style>

<nav class="root-note-control">
	<button
		class={cClasses}
		on:click={() => {dispatch('changeRootNote', {rootNote: Notes.c})}}>
		C
	</button>
	<button
		class={cSharpClasses}
		on:click={() => {dispatch('changeRootNote', {rootNote: Notes.cSharp})}}>
		#
	</button>
	<button
		class={dClasses}
		on:click={() => {dispatch('changeRootNote', {rootNote: Notes.d})}}>
		D
	</button>
	<button
		class={dSharpClasses}
		on:click={() => {dispatch('changeRootNote', {rootNote: Notes.dSharp})}}>
		#
	</button>
	<button
		class={eClasses}
		on:click={() => {dispatch('changeRootNote', {rootNote: Notes.e})}}>
		E
	</button>
	<button
		class={fClasses}
		on:click={() => {dispatch('changeRootNote', {rootNote: Notes.f})}}>
		F
	</button>
	<button
		class={fSharpClasses}
		on:click={() => {dispatch('changeRootNote', {rootNote: Notes.fSharp})}}>
		#
	</button>
	<button
		class={gClasses}
		on:click={() => {dispatch('changeRootNote', {rootNote: Notes.g})}}>
		G
	</button>
	<button
		class={gSharpClasses}
		on:click={() => {dispatch('changeRootNote', {rootNote: Notes.gSharp})}}>
		#
	</button>
	<button
		class={aClasses}
		on:click={() => {dispatch('changeRootNote', {rootNote: Notes.a})}}>
		A
	</button>
	<button
		class={aSharpClasses}
		on:click={() => {dispatch('changeRootNote', {rootNote: Notes.aSharp})}}>
		#
	</button>
	<button
		class={bClasses}
		on:click={() => {dispatch('changeRootNote', {rootNote: Notes.b})}}>
		B
	</button>
</nav>