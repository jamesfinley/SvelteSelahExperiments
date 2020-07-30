import Fingerboard from "./Fingerboard.svelte";
import Tuning from "../../../models/Tuning.js";
import NoteOnFret from "../../../models/NoteOnFret.js";
import Notes from "../../../models/Note.js";
const faker = require('faker');
import { render, fireEvent, cleanup } from '@testing-library/svelte';
import '@testing-library/jest-dom';

import { tuning } from '../../../stores.js';

let component, getByText, getByTestId;

beforeEach(() => {
	({ component, getByText, getByTestId } = render(Fingerboard));
	
	tuning.update(() => new Tuning(faker.random.words(), faker.random.words(), [
		new NoteOnFret(Notes.c),
		new NoteOnFret(Notes.g),
		new NoteOnFret(Notes.d),
		new NoteOnFret(Notes.a),
	]));
});
afterEach(() => {
  cleanup();
});

it('has style setting string count', () => {
	setTimeout(() => {
		expect(getByTestId('fingerboard')).hasAttribute('style', '--strings: 4')
	}, 100);
});

it('has strings', () => {
	expect(getByTestId('string--0')).toBeInTheDocument();
	expect(getByTestId('string--1')).toBeInTheDocument();
	expect(getByTestId('string--2')).toBeInTheDocument();
	expect(getByTestId('string--3')).toBeInTheDocument();
});

// TODO: only has strings matching Tuning

// Each note matches