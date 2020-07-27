import Tuning from './Tuning.js';
import NoteOnFret from "./NoteOnFret.js";
import Notes, { notesInOrder } from "./Note.js";
const faker = require('faker');

let name, instrument, noteOnFrets, diatonic, tuning, spy;

beforeEach(() => {
	name = faker.random.words();
	instrument = faker.random.words();
	noteOnFrets = [0,1,2].map(() => new NoteOnFret(faker.random.arrayElement(notesInOrder)));
	diatonic = faker.random.boolean();
	tuning = new Tuning(name, instrument, noteOnFrets, diatonic);
	spy = jest.spyOn(global.console, 'error');
});

describe('Name', () => {
	it('has name', () => {
		expect(tuning.name).toBe(name);
	});
	
	it('consoles error when name is not string', () => {
		name = faker.random.number();
		tuning = new Tuning(name, instrument, noteOnFrets, diatonic);
		
		expect(spy).toHaveBeenCalled();
	});
});

describe('Instrument', () => {
	it('has instrument', () => {
		expect(tuning.instrument).toBe(instrument);
	});
	
	it('consoles error when instrument is not string', () => {
		instrument = faker.random.number();
		tuning = new Tuning(name, instrument, noteOnFrets, diatonic);
		
		expect(spy).toHaveBeenCalled();
	});
});

describe('Note On Frets', () => {
	it('has noteOnFrets', () => {
		expect(tuning.noteOnFrets).toBe(noteOnFrets);
	});
	
	it('consoles error when noteOnFrets is not an array', () => {
		noteOnFrets = faker.random.words();
		tuning = new Tuning(name, instrument, noteOnFrets, diatonic);
		
		expect(spy).toHaveBeenCalled();
	});
	
	it('consoles error when noteOnFrets is not an array of NoteOnFret', () => {
		noteOnFrets = [1,2,3].map(() => faker.random.words());
		tuning = new Tuning(name, instrument, noteOnFrets, diatonic);
		
		expect(spy).toHaveBeenCalled();
	});
});

describe('Diatonic', () => {
	it('has diatonic', () => {
		expect(tuning.diatonic).toBe(diatonic);
	});
	
	it('consoles error when diatonic is not boolean', () => {
		diatonic = faker.random.number();
		tuning = new Tuning(name, instrument, noteOnFrets, diatonic);
		
		expect(spy).toHaveBeenCalled();
	});
});

describe('Fingerboard', () => {
	it('is array', () => {
		expect(Array.isArray(tuning.fingerboard)).toBe(true);
	});
	
	it('is array of arrays', () => {
		tuning.fingerboard.forEach((string) => {
			expect(Array.isArray(string)).toBe(true);
		});
	});
	
	it('is array of arrays of NoteOnFret', () => {
		tuning.fingerboard.forEach(string => {
			string.forEach(noteOnFret => {
				expect(noteOnFret.constructor == NoteOnFret).toBe(true);
			});
		});
	});
	
	it('has same number of strings as notes initialized with', () => {
		const stringCount = tuning.noteOnFrets.length;
		expect(tuning.fingerboard.length).toBe(stringCount);
	});
	
	it('has strings starting on same notes initialized with', () => {
		const stringNotes = noteOnFrets.map(({note}) => note);
		const fingerboardStringNotes = tuning.fingerboard.map(string => string[0].note);
		
		fingerboardStringNotes.forEach((fingerboardStringNotes, index) => {
			expect(fingerboardStringNotes.name).toBe(stringNotes[index].name);
		});
	});
	
	// TODO: has strings with notes ascending from initialized starting notes
	// TODO: has strings with frets descending from initialized starting notes
});