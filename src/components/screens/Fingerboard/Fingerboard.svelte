<script>
	import { rootNote, tuning, scale } from '../../../stores.js';
</script>

<svelte:head>
	<title>Selah Scales &raquo; Fingerboard</title>
</svelte:head>

<style type="text/scss">
	@import 'Fingerboard';
</style>

<div class="fingerboard--wrapper">
	<div data-testid="fingerboard" class="fingerboard" style="--strings: {$tuning.noteOnFrets.length}">
		{#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as fret}
			<div class="fingerboard--fret" data-fret={fret} />
		{/each}
		<div class="fingerboard--strings">
			{#each $tuning.fingerboardForScale($scale, $rootNote) as notesOnString, index}
				<div data-testid="string--{index}" class="fingerboard--string">
					{#each notesOnString as {fret, note}}
						<div
							class="fingerboard--string--note {note == $rootNote ? "fingerboard--string--note--root" : ""}"
							data-fret={fret}
						>
							{note.name}
						</div>
					{/each}
				</div>
			{/each}
		</div>
	</div>
</div>