export class Note {
	constructor(name) {
		if (typeof name != "string") {
			console.error("Note: name must be string");
			return;
		}
		
		this.name = name;
	}
}

let Notes = {
	c: new Note("C"),
	cSharp: new Note("C#"),
	d: new Note("D"),
	dSharp: new Note("D#"),
	e: new Note("E"),
	f: new Note("F"),
	fSharp: new Note("F#"),
	g: new Note("G"),
	gSharp: new Note("G#"),
	a: new Note("A"),
	aSharp: new Note("A#"),
	b: new Note("B"),
};

export default Notes;

export const notesInOrder = [Notes.c, Notes.cSharp, Notes.d, Notes.dSharp, Notes.e, Notes.f, Notes.fSharp, Notes.g, Notes.gSharp, Notes.a, Notes.aSharp, Notes.b];