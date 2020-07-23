import { Note, notesInOrder } from "./Note.js";

export default class Scale {
	constructor(name, steps) {
		if (typeof name != "string") {
			console.error("Scale: name must be string");
			return;
		}
		if (!Array.isArray(steps)) {
			console.error("Scale: steps must be array");
			return;
		}
		if (!steps.every(step => typeof step == "number")) {
			console.error("Scale: steps must be array of number");
			return;
		}
		
		this.name = name;
		this.steps = steps;
	}
	
	notesForRootNote(rootNote) {
		if (!rootNote || rootNote.constructor != Note) {
			console.error("Scale: notesForRootNote: rootNote must be Note");
			return;
		}
		
		let notesInOrderPadded = notesInOrder.concat(notesInOrder);
		let notes = [rootNote];
		let index = notesInOrderPadded.indexOf(rootNote);
		this.steps.forEach((step) => {
			index += step * 2;
			notes.push(notesInOrderPadded[index]);
		});
		
		return notes;
	}
}