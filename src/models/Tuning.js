import NoteOnFret from "./NoteOnFret.js";
import { notesInOrder } from "./Note.js";

export default class Tuning {
	constructor(name, instrument, noteOnFrets, diatonic = false) {
		if (typeof name != "string") {
			console.error("Tuning: name must be string");
			return;
		}
		if (typeof instrument != "string") {
			console.error("Tuning: instrument must be string");
			return;
		}
		if (!Array.isArray(noteOnFrets)) {
			console.error("Tuning: noteOnStrings must be array");
			return;
		}
		if (!noteOnFrets.every(noteOnFret => noteOnFret.constructor == NoteOnFret)) {
			console.error("Tuning: noteOnFrets must be array of NoteOnFret");
			return;
		}
		if (typeof diatonic != "boolean") {
			console.error("Tuning: diatonic must be boolean");
			return;
		}
		
		this.name = name;
		this.instrument = instrument;
		this.noteOnFrets = noteOnFrets;
		this.diatonic = diatonic;
		this.fingerboard = new Fingerboard(this);
	}
}

class Fingerboard {
	constructor(tuning) {
		if (!tuning || tuning.constructor != Tuning) {
			console.error("Fingerboard: tuning must be Tuning");
			return;
		}
		
		this.tuning = tuning;
		this.notesOnStrings = this.tuning.noteOnFrets.map((startingNote) => this.notesStartingAt(startingNote));
	}
	
	notesStartingAt(noteOnFret, frets = 12) {
		if (!noteOnFret || noteOnFret.constructor != NoteOnFret) {
			console.error("Fingerboard: notesStartingAt: noteOnFret must be a NoteOnFret");
		}
		if (!frets || typeof frets != "number") {
			console.error("Fingerboard: notesStartingAt: frets must be a number");
		}
		
		let noteOnFrets = [noteOnFret];
		
		let index = notesInOrder.indexOf(noteOnFret.note);
		let fret = noteOnFret.fret;
		
		while (noteOnFrets.length < frets + 1) {
			index++;
			fret++;
			if (index == notesInOrder.length) {
				index = 0;
			}
			noteOnFrets.push(new NoteOnFret(notesInOrder[index], fret));
		}
		
		return noteOnFrets;
	}
}