import NoteOnFret from "./NoteOnFret.js";
import Notes, { notesInOrder } from "./Note.js";

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
		
		this.fingerboard = this.noteOnFrets.map(noteOnFret => {
			let index = notesInOrder.indexOf(noteOnFret.note);
			
			return [noteOnFret, ...Array.from(Array(12).keys()).map((value, fret) => {
				index++;
				if (index == notesInOrder.length) {
					index = 0;
				}
				return new NoteOnFret(notesInOrder[index], fret + 1);
			})];
		});
	}
}

export const Tunings = [
	{
		name: "Guitar",
		tunings: [
			new Tuning(
				"Standard",
				"Guitar",
				[
					new NoteOnFret(Notes.e),
					new NoteOnFret(Notes.a),
					new NoteOnFret(Notes.d),
					new NoteOnFret(Notes.g),
					new NoteOnFret(Notes.b),
					new NoteOnFret(Notes.e),
				]
			)
		]
	},
	{
		name: "Mandola",
		tunings: [
			new Tuning(
				"Standard",
				"Mandola",
				[
					new NoteOnFret(Notes.c),
					new NoteOnFret(Notes.g),
					new NoteOnFret(Notes.d),
					new NoteOnFret(Notes.a),
				]
			)
		]
	}
];