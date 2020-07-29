import { writable } from 'svelte/store';
import Notes from "../models/Note.js";

export const rootNote = (function () {
	const { subscribe, set, update } = writable(Notes.c);

	return {
		subscribe,
		set,
		update
	};
})();