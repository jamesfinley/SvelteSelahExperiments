import Chord from "./Chord.svelte";

import { render } from '@testing-library/svelte';
import '@testing-library/jest-dom';
const faker = require('faker');

import Notes, { notesInOrder } from "../../models/Note.js";
import NoteOnFret from "../../models/NoteOnFret.js";

let rerender, component, getByText, findByText, getByTestId;

let rootNote, type, notes, chord, showName, showWholeName;

const myRerender = () => {
	chord = {
		rootNote,
		type,
		notes
	};
	
	rerender({
		props: {
			chord,
			showName,
			showWholeName,
		}
	});
};

beforeEach(() => {
	showName = undefined;
	showWholeName = undefined;
	rootNote = faker.random.arrayElement(notesInOrder);
	type = {
		name: "major"
	};
	notes = Array.from(Array(faker.random.number({
	    'min': 1,
	    'max': 7
	})).keys()).map(() => {
		return new NoteOnFret(faker.random.arrayElement(notesInOrder), faker.random.number({
			'min': 0,
			'max': 12
		}));
	})
	
	chord = {
		rootNote,
		type,
		notes
	};
	
	({ rerender, component, getByText, findByText, getByTestId } = render(Chord, { chord, showName, showWholeName }));
});

it('shows chord name', () => {
	showName = true;
	myRerender();
	
	expect(getByText(type.name)).toBeInTheDocument();
});

it('shows chord name', () => {
	showWholeName = true;
	myRerender();
	
	expect(getByText(`${rootNote.name} ${type.name}`)).toBeInTheDocument();
});

it('shows each string', () => {
	notes.forEach((note, index) => {
		expect(getByTestId(`string--${index}`)).toBeInTheDocument();
	});
});

it('shows each note', () => {
	notes.forEach((note, index) => {
		const string = getByTestId(`string--${index}`);
		// TODO: see that note is on string
		//expect(getByTestId(`string--${index}`)).toBeInTheDocument();
	});
});