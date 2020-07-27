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

<style type="text/scss">
	@import 'App';
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
		<Route path="/" component="{Fingerboard}" />
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