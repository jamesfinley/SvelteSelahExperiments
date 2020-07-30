<script>
	export let chord;
	export let showName = false;
	export let showWholeName = false;
</script>

<div class="chord">
	<div class="chord--strings">
		{#each chord.notes as note, index}
			<div data-testid="string--{index}" class="chord--string"></div>
		{/each}
	</div>

	{#if showName || showWholeName}
		<span class="chord--name">{#if showWholeName}{chord.rootNote.name}{/if} {chord.type.name}</span>
	{/if}
</div>