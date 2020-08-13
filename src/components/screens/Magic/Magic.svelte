<script>
	import { rootNote, scale, tuning } from '../../../stores.js';
	
	import Chord from '../../Chord/Chord.svelte';
	import Voicings from '../../../models/Voicings.js';
	
	function getNumberWithOrdinal(n) {
		const s = ["th", "st", "nd", "rd"],
		      v = n % 100;
		return n + (s[(v - 20) % 10] || s[v] || s[0]);
	}
	
	$: chordTypesForNotes = $rootNote.chordsForScale($scale);
	$: chordsForNotes = $rootNote.notesForScale($scale)
							.map(note => ({
								key: note,
								value: chordTypesForNotes[note.name]
								.map(chordType => {
									const chords = Voicings.forChordTypeWithRootNoteAndTuning(chordType, note, $tuning, $tuning.maxFrets - 1);
									return chords ? {key: chordType, value: chords[0]} : null;
								})
								.filter(chord => chord)
								.reduce((acc, {key: { shortName }, value}) => ({[shortName]: value, ...acc}), {})
							}))
							.reduce((acc, {key: { name }, value}) => ({[name]: value, ...acc}), {});
</script>

<svelte:head>
	<title>Selah Scales &raquo; Magic</title>
</svelte:head>

<style type="text/scss">
	@import "Magic";
</style>

<div class="magic">
	{#each $rootNote.notesForScale($scale) as note, index}
		<section class="magic--degree">
			<h2 class="magic--degree--header">Chords in {getNumberWithOrdinal(index + 1)} Degree: {note.name}</h2>
			<div class="magic--degree--chords">
				{#each chordTypesForNotes[note.name] as chordType}
					{#if chordsForNotes[note.name][chordType.shortName]}
						<Chord
							fretCount={$tuning.maxFrets}
							showName
							chord={chordsForNotes[note.name][chordType.shortName]}
							/>
					{/if}
				{/each}
			</div>
		</section>
	{/each}
</div>