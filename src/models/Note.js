import Scale from "./Scale.js";

export class Note {
	constructor(name) {
		if (typeof name != "string") {
			console.error("Note: name must be string");
			return;
		}
		
		this.name = name;
	}
	
	notesForScale(scale) {
		if (!scale || scale.constructor != Scale) {
			console.error("Note: notesForScale: scale must be Scale");
			return;
		}
		
		const notesInOrderPadded = notesInOrder.concat(notesInOrder);
		let index = notesInOrderPadded.indexOf(this);
		const notes = [this, ...scale.steps.map(step => {
			index += step * 2;
			return notesInOrderPadded[index];
		})];
		
		return notes;
	}
}

let Notes = {};
export let notesInOrder = [];
["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"].forEach(noteString => {
	let key = noteString.indexOf("#") > -1 ? noteString.toLowerCase().replace("#", "Sharp") : noteString.toLowerCase();
	let value = new Note(noteString);
	
	Notes[key] = value;
	notesInOrder.push(value);
});

export default Notes;