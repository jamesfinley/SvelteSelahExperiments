import Tuning from "./Tuning.js";
import {notesInOrder} from "./Note.js";
import NoteOnFret from "./NoteOnFret.js";

export default class Fingerboard {
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