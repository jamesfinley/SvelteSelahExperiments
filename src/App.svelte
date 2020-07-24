<script>
	import { Router, Link, Route, navigate } from "svelte-routing";
	
	import Navigation from './components/Navigation.svelte';
	import RootNoteControl from './components/RootNoteControl.svelte';
	import Tabs from './components/Tabs.svelte';
	
	import Fingerboard from './components/screens/Fingerboard.svelte';
	import Tablature from './components/screens/Tablature.svelte';
	import Staff from './components/screens/Staff.svelte';
	import Magic from './components/screens/Magic.svelte';
	
	export let url = "";
	
	function showSettings() {
		alert('Show Settings');
	}
</script>

<style>
	main {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100%;
	}
	
	main :global(.navigation) {
		flex-shrink: 0;
	}
	main :global(.tabs) {
		flex-shrink: 0;
	}
	
	.app--view {
		flex-grow: 1;
		overflow: auto;
	}
	
	main :global(.root-note-control) {
		margin: 0 16px 16px;
	}
</style>

<Router url="{url}">
<main>
	<Navigation
		on:showSettings={showSettings}
		/>
	<div class="app--view">
		<Route path="/tablature" component="{Tablature}" />
		<Route path="/staff" component="{Staff}" />
		<Route path="/magic" component="{Magic}" />
		<Route path="/">
			<Fingerboard />
		</Route>
	</div>
	<RootNoteControl />
	<Tabs
		on:showFingerboard={() => {navigate('/')}}
		on:showTablature={() => {navigate('/tablature')}}
		on:showStaff={() => {navigate('/staff')}}
		on:showMagic={() => {navigate('/magic')}}
		/>
</main>
</Router>