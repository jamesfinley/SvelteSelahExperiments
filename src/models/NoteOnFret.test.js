import NoteOnFret from './NoteOnFret.js';
import Notes, { notesInOrder } from "./Note.js";
const faker = require('faker');

let note, fret, noteOnFret, spy;

beforeEach(() => {
	note = faker.random.arrayElement(notesInOrder);
	fret = faker.random.number();
	noteOnFret = new NoteOnFret(note, fret);
	spy = jest.spyOn(global.console, 'error');
});

describe('Note', () => {
	it('has note', () => {
		expect(noteOnFret.note).toBe(note);
	});
	
	it('consoles error when note is not note', () => {
		note = faker.random.number();
		noteOnFret = new NoteOnFret(note, fret);
		
		expect(spy).toHaveBeenCalled();
	});
});

describe('Fret', () => {
	it('has fret', () => {
		expect(noteOnFret.fret).toBe(fret);
	});
	
	it('consoles error when fret is not fret', () => {
		fret = faker.random.words();
		noteOnFret = new NoteOnFret(note, fret);
		
		expect(spy).toHaveBeenCalled();
	});
});