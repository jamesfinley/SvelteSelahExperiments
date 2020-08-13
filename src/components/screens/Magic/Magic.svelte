<script>
	import { rootNote, scale, tuning } from '../../../stores.js';
	import Chord from '../../Chord/Chord.svelte';
	
	function getNumberWithOrdinal(n) {
		const s = ["th", "st", "nd", "rd"],
		      v = n % 100;
		return n + (s[(v - 20) % 10] || s[v] || s[0]);
	}
	
	$: chordTypesForNotes = $rootNote.chordTypesForScale($scale);
	$: chordsForNotes = $rootNote.chordsForScale($scale, $tuning);
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