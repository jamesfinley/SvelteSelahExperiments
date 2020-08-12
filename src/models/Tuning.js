import NoteOnFret from "./NoteOnFret.js";
import Notes, { Note, notesInOrder } from "./Note.js";
import Scale from "./Scale.js";

export default class Tuning {
	constructor(name, instrument, noteOnFrets, diatonic = false, maxFrets = 4) {
		if (typeof name != "string") {
			console.error("Tuning: name must be string");
			return;
		}
		if (typeof instrument != "string") {
			console.error("Tuning: instrument must be string");
			return;
		}
		if (!Array.isArray(noteOnFrets) || !noteOnFrets.every(noteOnFret => noteOnFret.constructor == NoteOnFret)) {
			console.error("Tuning: noteOnFrets must be array of NoteOnFret");
			return;
		}
		if (typeof diatonic != "boolean") {
			console.error("Tuning: diatonic must be boolean");
			return;
		}
		if (typeof maxFrets != "number") {
			console.error("Tuning: maxFrets must be number");
			return;
		}
		
		this.name = name;
		this.instrument = instrument;
		this.noteOnFrets = noteOnFrets;
		this.diatonic = diatonic;
		this.maxFrets = maxFrets;
		
		this.fingerboard = this.noteOnFrets.map(noteOnFret => {
			let index = notesInOrder.indexOf(noteOnFret.note);
			
			return [noteOnFret, ...Array.from(Array(12).keys()).map((value, fret) => {
				index = index == notesInOrder.length - 1 ? 0 : index + 1;
				return new NoteOnFret(notesInOrder[index], fret + 1);
			})];
		});
	}
	
	fingerboardForScale(scale, rootNote) {
		if (!scale || scale.constructor != Scale) {
			console.error("Tuning: fingerboardForScale must be Scale");
			return;
		}
		if (!rootNote || rootNote.constructor != Note) {
			console.error("Tuning: fingerboardForScale must be Note");
			return;
		}
		
		const notesForScale = rootNote.notesForScale(scale).map(({name}) => name);
		return this.fingerboard.map(
			notesOnString => notesOnString.filter(
				({note: {name: noteName}}) => notesForScale.some(scaleNoteName => scaleNoteName == noteName)
			)
		);
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
				],
				false,
				4,
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
				],
				false,
				7,
			)
		]
	},
	{
		name: "Mandolin",
		tunings: [
			new Tuning(
				"Standard",
				"Mandolin",
				[
					new NoteOnFret(Notes.g),
					new NoteOnFret(Notes.d),
					new NoteOnFret(Notes.a),
					new NoteOnFret(Notes.e),
				],
				false,
				7,
			)
		]
	},
	{
		name: "Ukulele",
		tunings: [
			new Tuning(
				"Standard",
				"Ukulele",
				[
					new NoteOnFret(Notes.g),
					new NoteOnFret(Notes.c),
					new NoteOnFret(Notes.e),
					new NoteOnFret(Notes.a),
				],
				false,
				5,
			)
		]
	}
];