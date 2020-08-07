import Scale, { Scales } from "./Scale.js";
import { Intervals } from "./ChordType.js";

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
		
		return [this, ...scale.steps.map(step => {
			index += step * 2;
			return notesInOrderPadded[index];
		})];
	}
	
	makeFlat() {
		let index = notesInOrder.map(({name}) => name).indexOf(this.name);
		if (index == -1) return this;
		
		index++;
		if (index == notesInOrder.length) index = 0;
		
		return notesInOrder[index];
	}
	
	noteForInterval(interval) {
		// get major and minor scale notes
		const majorScaleNotes = this.notesForScale(Scales.major);
		const minorScaleNotes = this.notesForScale(Scales.minor);
		
		switch (interval) {
			case Intervals.I:
				return majorScaleNotes[0];
				break;
			case Intervals.II:
				return majorScaleNotes[1];
				break;
			case Intervals.III:
				return majorScaleNotes[2];
				break;
			case Intervals.IV:
			return majorScaleNotes[3];
				break;
			case Intervals.IVplus:
				return majorScaleNotes[3].makeFlat();
				break;
			case Intervals.V:
				return majorScaleNotes[4];
				break;
			case Intervals.VI:
				return majorScaleNotes[5];
				break;
			case Intervals.VII:
				return majorScaleNotes[6];
				break;
			case Intervals.i:
				return minorScaleNotes[0];
				break;
			case Intervals.ii:
				return minorScaleNotes[1];
				break;
			case Intervals.iii:
				return minorScaleNotes[2];
				break;
			case Intervals.iv:
				return minorScaleNotes[3];
				break;
			case Intervals.v:
				return minorScaleNotes[4];
				break;
			case Intervals.vi:
				return minorScaleNotes[5];
				break;
			case Intervals.vii:
				return minorScaleNotes[6];
				break;
		}
		
		return null;
	}
	
	notesForChordType(chordType) {
		return chordType.intervals.map(interval => this.noteForInterval(interval));
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