<script>
	import Notes from "../../models/Note.js";
	import { rootNote } from '../../stores.js';
	
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
	@import 'RootNoteControl';
</style>

<nav class="root-note-control">
	<button
		data-testid="C"
		class={rootNoteIsSelected($rootNote, Notes.c, Notes.cSharp)}
		on:click={() => rootNote.update(value => Notes.c)}>
		C
	</button>
	<button
		data-testid="C#"
		class={accidentalNoteIsSelected($rootNote, Notes.cSharp)}
		on:click={() => rootNote.update(value => Notes.cSharp)}>
		#
	</button>
	<button
		data-testid="D"
		class={rootNoteIsSelected($rootNote, Notes.d, Notes.dSharp)}
		on:click={() => rootNote.update(value => Notes.d)}>
		D
	</button>
	<button
		data-testid="D#"
		class={accidentalNoteIsSelected($rootNote, Notes.dSharp)}
		on:click={() => rootNote.update(value => Notes.dSharp)}>
		#
	</button>
	<button
		data-testid="E"
		class={rootNoteIsSelected($rootNote, Notes.e)}
		on:click={() => rootNote.update(value => Notes.e)}>
		E
	</button>
	<button
		data-testid="F"
		class={rootNoteIsSelected($rootNote, Notes.f, Notes.fSharp)}
		on:click={() => rootNote.update(value => Notes.f)}>
		F
	</button>
	<button
		data-testid="F#"
		class={accidentalNoteIsSelected($rootNote, Notes.fSharp)}
		on:click={() => rootNote.update(value => Notes.fSharp)}>
		#
	</button>
	<button
		data-testid="G"
		class={rootNoteIsSelected($rootNote, Notes.g, Notes.gSharp)}
		on:click={() => rootNote.update(value => Notes.g)}>
		G
	</button>
	<button
		data-testid="G#"
		class={accidentalNoteIsSelected($rootNote, Notes.gSharp)}
		on:click={() => rootNote.update(value => Notes.gSharp)}>
		#
	</button>
	<button
		data-testid="A"
		class={rootNoteIsSelected($rootNote, Notes.a, Notes.aSharp)}
		on:click={() => rootNote.update(value => Notes.a)}>
		A
	</button>
	<button
		data-testid="A#"
		class={accidentalNoteIsSelected($rootNote, Notes.aSharp)}
		on:click={() => rootNote.update(value => Notes.aSharp)}>
		#
	</button>
	<button
		data-testid="B"
		class={rootNoteIsSelected($rootNote, Notes.b)}
		on:click={() => rootNote.update(value => Notes.b)}>
		B
	</button>
</nav>