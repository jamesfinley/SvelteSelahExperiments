<script>
	import Notes from "../models/Note.js";
	import { createEventDispatcher } from 'svelte';
	
	const dispatch = createEventDispatcher();
	
	export let rootNote;
	
	const rootClass = "root-note-control--root";
	const accidentalClass = "root-note-control--accidental";
	const selectedClass = 'root-note-control--selected';
	
	function noteIsSelected(base, rootNote, expected1, expected2) {
		const rootNoteName = rootNote.name;
		if (expected1 && expected2) {
			return base + ' ' + (rootNoteName == expected1.name || rootNoteName == expected2.name ? selectedClass : '');
		}
		return base + ' ' + (rootNoteName == expected1.name ? selectedClass : '');
	}
	function rootNoteIsSelected(rootNote, expected1, expected2) {
		return noteIsSelected(rootClass, rootNote, expected1, expected2);
	}
	function accidentalNoteIsSelected(rootNote, expected1, expected2) {
		return noteIsSelected(accidentalClass, rootNote, expected1, expected2);
	}
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
		class={rootNoteIsSelected(rootNote, Notes.c, Notes.cSharp)}
		on:click={() => {dispatch('changeRootNote', {rootNote: Notes.c})}}>
		C
	</button>
	<button
		class={accidentalNoteIsSelected(rootNote, Notes.cSharp)}
		on:click={() => {dispatch('changeRootNote', {rootNote: Notes.cSharp})}}>
		#
	</button>
	<button
		class={rootNoteIsSelected(rootNote, Notes.d, Notes.dSharp)}
		on:click={() => {dispatch('changeRootNote', {rootNote: Notes.d})}}>
		D
	</button>
	<button
		class={accidentalNoteIsSelected(rootNote, Notes.dSharp)}
		on:click={() => {dispatch('changeRootNote', {rootNote: Notes.dSharp})}}>
		#
	</button>
	<button
		class={rootNoteIsSelected(rootNote, Notes.e)}
		on:click={() => {dispatch('changeRootNote', {rootNote: Notes.e})}}>
		E
	</button>
	<button
		class={rootNoteIsSelected(rootNote, Notes.f, Notes.fSharp)}
		on:click={() => {dispatch('changeRootNote', {rootNote: Notes.f})}}>
		F
	</button>
	<button
		class={accidentalNoteIsSelected(rootNote, Notes.fSharp)}
		on:click={() => {dispatch('changeRootNote', {rootNote: Notes.fSharp})}}>
		#
	</button>
	<button
		class={rootNoteIsSelected(rootNote, Notes.g, Notes.gSharp)}
		on:click={() => {dispatch('changeRootNote', {rootNote: Notes.g})}}>
		G
	</button>
	<button
		class={accidentalNoteIsSelected(rootNote, Notes.gSharp)}
		on:click={() => {dispatch('changeRootNote', {rootNote: Notes.gSharp})}}>
		#
	</button>
	<button
		class={rootNoteIsSelected(rootNote, Notes.a, Notes.aSharp)}
		on:click={() => {dispatch('changeRootNote', {rootNote: Notes.a})}}>
		A
	</button>
	<button
		class={accidentalNoteIsSelected(rootNote, Notes.aSharp)}
		on:click={() => {dispatch('changeRootNote', {rootNote: Notes.aSharp})}}>
		#
	</button>
	<button
		class={rootNoteIsSelected(rootNote, Notes.b)}
		on:click={() => {dispatch('changeRootNote', {rootNote: Notes.b})}}>
		B
	</button>
</nav>