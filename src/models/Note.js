import Scale, { Scales } from "./Scale.js";
import { ChordTypes, Intervals } from "./ChordType.js";

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
		
		const majorIntervals = [Intervals.I, Intervals.II, Intervals.III, Intervals.IV, Intervals.V, Intervals.VI, Intervals.VII];
		const minorIntervals = [Intervals.i, Intervals.ii, Intervals.iii, Intervals.iv, Intervals.v, Intervals.vi, Intervals.vii];
		
		if (majorIntervals.indexOf(interval) != -1) {
			return majorScaleNotes[majorIntervals.indexOf(interval)];
		}
		if (minorIntervals.indexOf(interval) != -1) {
			return minorScaleNotes[minorIntervals.indexOf(interval)];
		}
		
		switch (interval) {
			case Intervals.IVplus:
				return majorScaleNotes[3].makeFlat();
				break;
		}
		
		return null;
	}
	
	notesForChordType(chordType) {
		return chordType.intervals.map(interval => this.noteForInterval(interval));
	}
	
	chordsForScale(scale) {
		const scaleNotes = this.notesForScale(scale);
		return scaleNotes
			.map(note => ({
					key: note,
					value: Object.keys(ChordTypes)
						.map(key => ChordTypes[key])
						.filter(chordType => !note.notesForChordType(chordType)
												.some(note => scaleNotes.indexOf(note) == -1)
						)
				})
			)
			.reduce((obj, value) => {
				obj[value.key.name] = value.value;
				return obj;
			}, {});
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