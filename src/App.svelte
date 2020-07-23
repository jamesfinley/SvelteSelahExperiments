<script>
	import { Router, Link, Route, navigate } from "svelte-routing";
	import Notes from "./models/Note.js";
	import NoteOnFret from "./models/NoteOnFret.js";
	import Tuning from "./models/Tuning.js";
	import { Scales } from "./models/Scale.js";
	
	import Navigation from './components/Navigation.svelte';
	import RootNoteControl from './components/RootNoteControl.svelte';
	import Tabs from './components/Tabs.svelte';
	
	import Fingerboard from './components/screens/Fingerboard.svelte';
	import Tablature from './components/screens/Tablature.svelte';
	import Staff from './components/screens/Staff.svelte';
	import Magic from './components/screens/Magic.svelte';
	
	export let url = "";
	
	let mandolaTuning = new Tuning(
		"Standard",
		"Mandola",
		[
			new NoteOnFret(Notes.c),
			new NoteOnFret(Notes.g),
			new NoteOnFret(Notes.d),
			new NoteOnFret(Notes.a),
		]
	);
	let guitarTuning = new Tuning(
		"Standard",
		"Guitar",
		[
			new NoteOnFret(Notes.e),
			new NoteOnFret(Notes.a),
			new NoteOnFret(Notes.d),
			new NoteOnFret(Notes.g),
			new NoteOnFret(Notes.b),
			new NoteOnFret(Notes.e),
		]
	);
	
	let tuning = mandolaTuning;
	let scale = Scales.major;
	
	function showSettings() {
		alert('Show Settings');
	}
	function showTunings() {
		tuning = tuning.instrument == "Guitar" ? mandolaTuning : guitarTuning;
	}
	function changeRootNote(newRootNote) {
		rootNote = newRootNote
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
		tuning={tuning}
		on:showSettings={showSettings}
		on:showTunings={showTunings}
		/>
	<div class="app--view">
		<Route path="/tablature" component="{Tablature}" />
		<Route path="/staff" component="{Staff}" />
		<Route path="/magic" component="{Magic}" />
		<Route path="/">
			<Fingerboard {...{tuning, scale}} />
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