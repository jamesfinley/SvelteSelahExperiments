import { Note } from "./Note.js";

export default class NoteOnFret {
	constructor(note, fret = 0) {
		if (!note || note.constructor != Note) {
			console.error("NoteOnFret: note must be Note");
			return;
		}
		if (typeof fret != "number") {
			console.error("NoteOnFret: fret must be number");
			return;
		}
		
		this.note = note;
		this.fret = fret;
	}
}