<script>
	export let tuning;
	export let rootNote;
	export let scale;
	
	$: notesInScale = scale.notesForRootNote(rootNote);
</script>

<svelte:head>
	<title>Selah Scales &raquo; Fingerboard</title>
</svelte:head>

<style type="text/scss">
	$minWidthHeight: 60px;
	
	.fingerboard {
		position: relative;
		display: flex;
		width: calc(#{$minWidthHeight} * var(--strings));
		height: $minWidthHeight * 13;
		margin-bottom: 16px;
		
		&--wrapper {
			display: flex;
			justify-content: center;
		}
		
		&:before {
			content: "";
			position: absolute;
			top: $minWidthHeight - 2px;
			left: 0;
			right: 0;
			height: 4px;
			background: var(--foreground);
		}
		
		&--fret {
			position: absolute;
			width: 100%;
			height: 2px;
			background: var(--foreground);
			
			@for $i from 0 through 12 {
				&[data-fret="#{$i}"] {
					top: $i * $minWidthHeight + $minWidthHeight - 1;
				}
			}
		}
		
		&--string {
			position: relative;
			width: $minWidthHeight;
			font-size: 20px;
			
			&:before {
				content: "";
				position: absolute;
				top: $minWidthHeight;
				left: $minWidthHeight / 2 - 1px;
				bottom: 0;
				width: 2px;
				background: var(--foreground);
			}
			
			&--note {
				position: absolute;
				display: flex;
				justify-content: center;
				align-items: center;
				width: $minWidthHeight - 14px;
				height: $minWidthHeight - 14px;
				margin: 7px;
				background: var(--background);
				
				@for $i from 0 through 12 {
					&[data-fret="#{$i}"] {
						top: $i * $minWidthHeight;
					}
				}
				
				&--root {
					font-family: var(--fontDemiBold);
				}
			}
		}
	}
</style>

<div class="fingerboard--wrapper">
	<div class="fingerboard" style="--strings: {tuning.noteOnFrets.length}">
		{#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as fret}
			<div class="fingerboard--fret" data-fret={fret} />
		{/each}
		{#each tuning.fingerboard.notesOnStrings as notesOnString}
			<div class="fingerboard--string">
				{#each notesOnString.filter(noteOnFret => notesInScale.indexOf(noteOnFret.note) > -1) as {fret, note}}
					<div class="fingerboard--string--note {note == rootNote ? "fingerboard--string--note--root" : ""}" data-fret={fret}>{note}</div>
				{/each}
			</div>
		{/each}
	</div>
</div>