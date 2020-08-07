<script>
	import { rootNote, scale, tuning } from '../../../stores.js';
	
	import Chord from '../../Chord/Chord.svelte';
	import ChordModel from '../../../models/Chord.js';
	import ChordType from '../../../models/ChordType.js';
	import Notes from '../../../models/Note.js';
	import NoteOnFret from '../../../models/NoteOnFret.js';
	
	function getNumberWithOrdinal(n) {
		const s = ["th", "st", "nd", "rd"],
		      v = n % 100;
		return n + (s[(v - 20) % 10] || s[v] || s[0]);
	}
</script>

<svelte:head>
	<title>Selah Scales &raquo; Magic</title>
</svelte:head>

<style type="text/scss">
	@import "Magic";
</style>

<div class="magic">
	{#each $rootNote.notesForScale($scale) as $note, index}
		<section class="magic--degree">
			<h2 class="magic--degree--header">Chords in {getNumberWithOrdinal(index + 1)} Degree: {$note.name}</h2>
			<div class="magic--degree--chords">
				<Chord fretCount=7 chord={new ChordModel(
				Notes.c,
				new ChordType('major'),
				[
				new NoteOnFret(Notes.c, 0),
				new NoteOnFret(Notes.g, 0),
				new NoteOnFret(Notes.e, 2),
				new NoteOnFret(Notes.c, 3),
				])} />
				<Chord fretCount=7 chord={new ChordModel(
				Notes.c,
				new ChordType('major'),
				[
				new NoteOnFret(Notes.c, 7),
				new NoteOnFret(Notes.g, 5),
				new NoteOnFret(Notes.e, 2),
				new NoteOnFret(Notes.c, 3),
				])} />
				<Chord fretCount=7 chord={new ChordModel(
				Notes.c,
				new ChordType('major'),
				[
				new NoteOnFret(Notes.c, 0),
				new NoteOnFret(Notes.g, 0),
				new NoteOnFret(Notes.e, 2),
				new NoteOnFret(Notes.c, 3),
				])} />
				<Chord fretCount=7 chord={new ChordModel(
				Notes.c,
				new ChordType('major'),
				[
				new NoteOnFret(Notes.c, 7),
				new NoteOnFret(Notes.g, 5),
				new NoteOnFret(Notes.e, 2),
				new NoteOnFret(Notes.c, 3),
				])} />
				<Chord fretCount=7 chord={new ChordModel(
				Notes.c,
				new ChordType('major'),
				[
				new NoteOnFret(Notes.c, 0),
				new NoteOnFret(Notes.g, 0),
				new NoteOnFret(Notes.e, 2),
				new NoteOnFret(Notes.c, 3),
				])} />
				<Chord fretCount=7 chord={new ChordModel(
				Notes.c,
				new ChordType('major'),
				[
				new NoteOnFret(Notes.c, 7),
				new NoteOnFret(Notes.g, 5),
				new NoteOnFret(Notes.e, 2),
				new NoteOnFret(Notes.c, 3),
				])} />
			</div>
		</section>
	{/each}
</div>