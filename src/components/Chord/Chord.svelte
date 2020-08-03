<script>
	export let chord;
	export let showName = false;
	export let showWholeName = false;
</script>

<style type="text/scss">
	@import 'Chord';
</style>

<div class="chord">
	<div
		data-testid="strings"
		class="chord--strings"
		style="--stringCount: {chord.notes.length}; --fretCount: 6;"
	>
		{#each [1, 2, 3, 4, 5] as fret}
			<div
				data-testid="fret--{fret}"
				class="chord--strings--fret"
				style="--fret: {fret};" />
		{/each}
		{#each chord.notes as note, index}
			<div
				data-testid="string--{index}"
				class="chord--strings--string"
				data-string={index}
				style="--string: {index};"
			>
				<div
					data-testid="note-dot"
					class="chord--strings--string--note-dot"
					data-fret={note.fret}
					style="--fret: {note.fret};"
				></div>
				<div
					data-testid="note"
					class="chord--strings--string--note"
					data-fret={note.fret}
				>{note.note.name}</div>
			</div>
		{/each}
	</div>

	{#if showName || showWholeName}
		<span class="chord--name">{#if showWholeName}{chord.rootNote.name}{/if} {chord.type.name}</span>
	{/if}
</div>