<script>
	import Chord from '../Chord/Chord.svelte';
	import ChordModel from '../../models/Chord.js';
	import ChordType from '../../models/ChordType.js';
	import Notes from '../../models/Note.js';
	import NoteOnFret from '../../models/NoteOnFret.js';
	
	let chord = new ChordModel(Notes.c, new ChordType('major'), [
		new NoteOnFret(Notes.c, 0),
		new NoteOnFret(Notes.g, 0),
		new NoteOnFret(Notes.e, 2),
		new NoteOnFret(Notes.c, 3),
		new NoteOnFret(Notes.c, 3),
		new NoteOnFret(Notes.c, 3),
	]);
</script>

<svelte:head>
	<title>Selah Scales &raquo; Magic</title>
</svelte:head>

<Chord chord={chord} />