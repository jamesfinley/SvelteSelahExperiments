<script>
	export let chord;
	export let showName = false;
	export let showWholeName = false;
</script>

<div class="chord">
	<div
		data-testid="strings"
		class="chord--strings"
		style="--stringCount: {chord.notes.length};"
	>
		{#each chord.notes as note, index}
			<div
				data-testid="string--{index}"
				class="chord--string"
				style="--string: {index};"
			>
				<div
					data-testid="note"
					class="chord--string--note"
					style="--fret: {note.fret};"
				></div>
			</div>
		{/each}
	</div>

	{#if showName || showWholeName}
		<span class="chord--name">{#if showWholeName}{chord.rootNote.name}{/if} {chord.type.name}</span>
	{/if}
</div>