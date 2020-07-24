import { writable } from 'svelte/store';
import Notes from "./models/Note.js";
import { Tunings } from "./models/Tuning.js";
import { Scales } from "./models/Scale.js";

export const rootNote = writable(Notes.c);
export const tuning = writable(Tunings.guitar);
export const scale = writable(Scales.major);