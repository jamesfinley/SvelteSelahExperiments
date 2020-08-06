import Chord from './Chord.js';
import Notes, { notesInOrder } from './Note.js';
import NoteOnFret from "./NoteOnFret.js";
import ChordType from "./ChordType.js";

const faker = require('faker');

let chord, rootNote, notes, type, spy;

beforeEach(() => {
	rootNote = faker.random.arrayElement(notesInOrder);
	type = new ChordType(faker.random.words());
	notes = Array.from(Array(faker.random.number({
		'min': 1,
		'max': 7
	})).keys()).map(() => {
		return new NoteOnFret(faker.random.arrayElement(notesInOrder), faker.random.number({
			'min': 0,
			'max': 5
		}));
	});
	chord = new Chord(rootNote, type, notes);
	
	spy = jest.spyOn(global.console, 'error');
})

describe('Root Note', () => {
	it('has rootNote', () => {
		expect(chord.rootNote).toBe(rootNote);
	});
	
	it('consoles error when rootNote is not Note', () => {
		rootNote = faker.random.number();
		chord = new Chord(rootNote, type, notes);
		
		expect(spy).toHaveBeenCalled();
	});
});

describe('Type', () => {
	it('has type', () => {
		expect(chord.type).toBe(type);
	});
	
	it('consoles error when type is not ChordType', () => {
		type = faker.random.number();
		chord = new Chord(rootNote, type, notes);
		
		expect(spy).toHaveBeenCalled();
	});
});

describe('Notes', () => {
	it('has notes', () => {
		expect(chord.notes).toBe(notes);
	});
	
	it('consoles error when notes is not array', () => {
		notes = faker.random.number();
		chord = new Chord(rootNote, type, notes);
		
		expect(spy).toHaveBeenCalled();
	});
	
	it('consoles error when notes is not array of NoteOnFret', () => {
		notes = [faker.random.number(), faker.random.number(), faker.random.number()];
		chord = new Chord(rootNote, type, notes);
		
		expect(spy).toHaveBeenCalled();
	});
	
	it('does not console error when notes is array of null', () => {
		notes = [null, null, new NoteOnFret(faker.random.arrayElement(notesInOrder), faker.random.number({
			'min': 0,
			'max': 5
		}))];
		chord = new Chord(rootNote, type, notes);
		
		expect(spy).not.toHaveBeenCalled();
	});
});