export default class NoteOnFret {
	constructor(note, fret = 0) {
		if (typeof note != "string") {
			console.error("NoteOnString: note must be string");
			return;
		}
		if (typeof fret != "number") {
			console.error("NoteOnString: fret must be number");
			return;
		}
		
		this.note = note;
		this.fret = fret;
	}
}