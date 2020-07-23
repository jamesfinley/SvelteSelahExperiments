import NoteOnFret from "./NoteOnFret.js";
import Fingerboard from "./Fingerboard.js";

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