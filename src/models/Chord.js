import { Note } from './Note.js';
import NoteOnFret from './NoteOnFret.js';
import ChordType from './ChordType.js';

export default class Chord {
	constructor(rootNote, type, notes) {
		if (!rootNote || rootNote.constructor != Note) {
			console.error("Chord: rootNote must be Note");
			return;
		}
		if (!type || type.constructor != ChordType) {
			console.error("Chord: type must be ChordType");
			return;
		}
		if (!Array.isArray(notes) || !notes.every(note => note === null || note.constructor == NoteOnFret)) {
			console.error("Chord: notes must be array of Note");
			return;
		}
		
		this.rootNote = rootNote;
		this.type = type;
		this.notes = notes;
	}
}