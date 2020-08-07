import Chord from "./Chord.svelte";
import ChordModel from "../../models/Chord.js";
import ChordType from "../../models/ChordType.js";

import { render } from '@testing-library/svelte';
import '@testing-library/jest-dom';
import { queryAllByTestId } from '@testing-library/dom/dist/@testing-library/dom.umd.js'
const faker = require('faker');

import Notes, { notesInOrder } from "../../models/Note.js";
import NoteOnFret from "../../models/NoteOnFret.js";

let rerender, component, getByText, findByText, getByTestId;

let rootNote, type, notes, chord, showName, showWholeName, fretCount;

const myRerender = () => {
	chord = new ChordModel(rootNote, type, notes);
	
	rerender({
		props: {
			chord,
			showName,
			showWholeName,
			fretCount,
		}
	});
};

beforeEach(() => {
	showName = undefined;
	showWholeName = undefined;
	rootNote = faker.random.arrayElement(notesInOrder);
	type = new ChordType(faker.random.words(), faker.random.words());
	notes = Array.from(Array(faker.random.number({
	    'min': 2,
	    'max': 7
	})).keys()).map(() => {
		return new NoteOnFret(faker.random.arrayElement(notesInOrder), faker.random.number({
			'min': 1,
			'max': 5
		}));
	});
	
	chord = new ChordModel(rootNote, type, notes);
	fretCount = 6;
	
	({ rerender, component, getByText, findByText, getByTestId } = render(Chord, { chord, showName, showWholeName, fretCount }));
});

it('shows chord name', () => {
	showName = true;
	myRerender();
	
	expect(getByText(type.shortName)).toBeInTheDocument();
});

it('shows chord name', () => {
	showWholeName = true;
	myRerender();
	
	expect(getByText(`${rootNote.name} ${type.shortName}`)).toBeInTheDocument();
});

it('has string count', () => {
	expect(getByTestId('strings')).toHaveAttribute('style', `--stringCount: ${notes.length}; --fretCount: 6;`);
});

it('shows each fret', () => {
	fretCount = 3;
	myRerender();
	
	let fretArray = Array.from(Array(parseInt(fretCount)).keys());
	fretArray.shift();
	
	fretArray.forEach(fret => {
		expect(getByTestId(`fret--${fret}`)).toBeInTheDocument();
	})
});

it('shows each string', () => {
	notes.forEach((note, index) => {
		const string = getByTestId(`string--${index}`);
		expect(string).toBeInTheDocument();
		expect(string).toHaveAttribute('data-string', `${index}`);
		expect(string).toHaveAttribute('style', `--string: ${index};`);
	});
});

it('shows each note dot', () => {
	notes.forEach((note, index) => {
		const string = getByTestId(`string--${index}`);
		const noteEls = queryAllByTestId(string, 'note-dot');
		expect(noteEls).toHaveLength(1);
		const noteEl = noteEls[0];
		expect(noteEl).toHaveAttribute('data-fret', `${notes[index].fret}`);
		expect(noteEl).toHaveAttribute('style', `--fret: ${notes[index].fret};`);
	});
});

it('shows each note', () => {
	notes.forEach((note, index) => {
		const string = getByTestId(`string--${index}`);
		const noteEls = queryAllByTestId(string, 'note');
		expect(noteEls).toHaveLength(1);
		const noteEl = noteEls[0];
	});
});

it('shows open symbols', () => {
	notes = Array.from(Array(faker.random.number({
		'min': 2,
		'max': 7
	})).keys()).map(string => {
		return new NoteOnFret(faker.random.arrayElement(notesInOrder), string == 0 ? 0 : faker.random.number({
			'min': 0,
			'max': 5
		}));
	});
	
	chord = new ChordModel(rootNote, type, notes);
	myRerender();
	
	const string = getByTestId(`string--0`);
	const noteEls = queryAllByTestId(string, 'open');
	expect(noteEls).toHaveLength(1);
	const noteEl = noteEls[0];
	expect(noteEl).toHaveClass('chord--strings--string--open');
});

it('does not show open symbols on notes not on 0 fret', () => {
	notes = Array.from(Array(faker.random.number({
		'min': 2,
		'max': 7
	})).keys()).map(string => {
		return new NoteOnFret(faker.random.arrayElement(notesInOrder), string == 0 ? 0 : faker.random.number({
			'min': 0,
			'max': 5
		}));
	});
	
	chord = new ChordModel(rootNote, type, notes);
	myRerender();
	
	notes.forEach((note, index) => {
		if (note.fret != 0) {
			const string = getByTestId(`string--${index}`);
			const noteEls = queryAllByTestId(string, 'open');
			expect(noteEls).toHaveLength(0);
		}
	});
});

it('shows mute symbols', () => {
	notes = Array.from(Array(faker.random.number({
		'min': 2,
		'max': 7
	})).keys()).map(string => {
		return string == 0 ? null : new NoteOnFret(faker.random.arrayElement(notesInOrder), faker.random.number({
			'min': 0,
			'max': 5
		}));
	});
	
	chord = new ChordModel(rootNote, type, notes);
	myRerender();
	
	const string = getByTestId(`string--0`);
	const noteEls = queryAllByTestId(string, 'mute');
	expect(noteEls).toHaveLength(1);
	const noteEl = noteEls[0];
	expect(noteEl).toHaveClass('chord--strings--string--mute');
});

it('does not show mute symbols on notes not on 0 fret', () => {
	notes = Array.from(Array(faker.random.number({
		'min': 2,
		'max': 7
	})).keys()).map(string => {
		return string == 0 ? null : new NoteOnFret(faker.random.arrayElement(notesInOrder), faker.random.number({
			'min': 0,
			'max': 5
		}));
	});
	
	chord = new ChordModel(rootNote, type, notes);
	myRerender();
	
	notes.forEach((note, index) => {
		if (note !== null) {
			const string = getByTestId(`string--${index}`);
			const noteEls = queryAllByTestId(string, 'mute');
			expect(noteEls).toHaveLength(0);
		}
	});
});