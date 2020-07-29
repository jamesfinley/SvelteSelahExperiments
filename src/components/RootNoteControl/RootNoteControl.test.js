import RootNoteControl from "./RootNoteControl.svelte";
import Notes, { Note } from "../../models/Note.js";
import { render, fireEvent } from '@testing-library/svelte';
import '@testing-library/jest-dom';

let component, getByText, getByTestId, calledNote;

import { rootNote } from '../../stores.js';

beforeEach(() => {
	({ component, getByText, getByTestId } = render(RootNoteControl));
	
	jest.spyOn(rootNote, 'update').mockImplementation((fn) => {
		calledNote = fn();
	});
});

describe('Buttons', () => {
	['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'].forEach(noteName => {
		it(`has ${noteName} button`, () => {
			expect(getByTestId(noteName)).toBeInTheDocument();
		});
	});
});

describe('Updates store', () => {
	['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'].forEach(noteName => {
		it(`clicks ${noteName} button`, () => {
			fireEvent.click(getByTestId(noteName));
			expect(calledNote.toString()).toBe(new Note(noteName).toString());
		});
	});
});

describe('Selected', () => {
	['C', 'D', 'E', 'F', 'G', 'A', 'B'].forEach(noteName => {
		it(`updates selected to ${noteName} when rootNote changes`, () => {
			rootNote.update(value => new Note(noteName));
			setTimeout(() => {
				expect(getByTestId(noteName).classList.contains('root-note-control--selected')).toBe(true);
			}, 100);
		});
	});
	['C#', 'D#', 'F#', 'G#', 'A#'].forEach(noteName => {
		it(`updates selected to ${noteName} when rootNote changes`, () => {
			rootNote.update(value => new Note(noteName));
			setTimeout(() => {
				expect(getByTestId(noteName.replace('#', '')).classList.contains('root-note-control--selected')).toBe(true);
				expect(getByTestId(noteName).classList.contains('root-note-control--selected')).toBe(true);
			}, 100);
		});
	});
})