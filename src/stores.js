import { writable } from 'svelte/store';
import Notes from "./models/Note.js";

export const rootNote = writable(Notes.c);