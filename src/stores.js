import { writable } from 'svelte/store';
import Notes from "./models/Note.js";
import { Tunings } from "./models/Tuning.js";

export const rootNote = writable(Notes.c);
export const tuning = writable(Tunings.guitar);