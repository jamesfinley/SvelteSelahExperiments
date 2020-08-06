<script>
	export let chord;
	export let showName = false;
	export let showWholeName = false;
	export let fretCount = 6;
	
	let fretArray = Array.from(Array(parseInt(fretCount)).keys());
	fretArray.shift();
</script>

<style type="text/scss">
	@import 'Chord';
</style>

<div class="chord" data-showing-name="{showName || showWholeName ? 'true' : 'false'}">
	<div
		data-testid="strings"
		class="chord--strings"
		style="--stringCount: {chord.notes.length}; --fretCount: {fretCount};"
	>
		{#each fretArray as fret}
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
				{#if note !== null}
					{#if note.fret !== 0}
						<div
							data-testid="note-dot"
							class="chord--strings--string--note-dot"
							data-fret={note.fret}
							style="--fret: {note.fret};"
						></div>
					{:else}
						<div
							data-testid="open"
							class="chord--strings--string--open"
							/>
					{/if}
					<div
						data-testid="note"
						class="chord--strings--string--note"
						data-fret={note.fret}
					>{note.note.name}</div>
				{:else}
					<div
						data-testid="mute"
						class="chord--strings--string--mute"
					/>
				{/if}
			</div>
		{/each}
	</div>

	{#if showName || showWholeName}
		<span class="chord--name">{#if showWholeName}{chord.rootNote.name}{/if} {chord.type.name}</span>
	{/if}
</div>