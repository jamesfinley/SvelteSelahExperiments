import RootNoteControl from "./RootNoteControl.svelte";
import Notes from "../../models/Note.js";
import { render, fireEvent } from '@testing-library/svelte';
import '@testing-library/jest-dom';

let component, getByText, getByTestId, calledNote;

jest.mock('../../stores.js');
import { rootNote } from '../../stores.js';

beforeEach(() => {
	({ component, getByText, getByTestId } = render(RootNoteControl));
	
	jest.spyOn(rootNote, 'update').mockImplementation((fn) => {
		calledNote = fn();
	});
});

describe('Buttons', () => {
	it('has C button', () => {
		expect(getByTestId('C')).toBeInTheDocument();
	});
	it('has C# button', () => {
		expect(getByTestId('C#')).toBeInTheDocument();
	});
	it('has D button', () => {
		expect(getByTestId('D')).toBeInTheDocument();
	});
	it('has D# button', () => {
		expect(getByTestId('D#')).toBeInTheDocument();
	});
	it('has E button', () => {
		expect(getByTestId('E')).toBeInTheDocument();
	});
	it('has F button', () => {
		expect(getByTestId('F')).toBeInTheDocument();
	});
	it('has F# button', () => {
		expect(getByTestId('F#')).toBeInTheDocument();
	});
	it('has G button', () => {
		expect(getByTestId('G')).toBeInTheDocument();
	});
	it('has G# button', () => {
		expect(getByTestId('G#')).toBeInTheDocument();
	});
	it('has A button', () => {
		expect(getByTestId('A')).toBeInTheDocument();
	});
	it('has A# button', () => {
		expect(getByTestId('A#')).toBeInTheDocument();
	});
	it('has B button', () => {
		expect(getByTestId('B')).toBeInTheDocument();
	});
});

describe('Updates store', () => {
	it('clicks C button', () => {
		fireEvent.click(getByTestId('C'));
		expect(calledNote).toBe(Notes.c);
	});
	it('clicks C# button', () => {
		fireEvent.click(getByTestId('C#'));
		expect(calledNote).toBe(Notes.cSharp);
	});
	it('clicks D button', () => {
		fireEvent.click(getByTestId('D'));
		expect(calledNote).toBe(Notes.d);
	});
	it('clicks D# button', () => {
		fireEvent.click(getByTestId('D#'));
		expect(calledNote).toBe(Notes.dSharp);
	});
	it('clicks E button', () => {
		fireEvent.click(getByTestId('E'));
		expect(calledNote).toBe(Notes.e);
	});
	it('clicks F button', () => {
		fireEvent.click(getByTestId('F'));
		expect(calledNote).toBe(Notes.f);
	});
	it('clicks F# button', () => {
		fireEvent.click(getByTestId('F#'));
		expect(calledNote).toBe(Notes.fSharp);
	});
	it('clicks G button', () => {
		fireEvent.click(getByTestId('G'));
		expect(calledNote).toBe(Notes.g);
	});
	it('clicks G# button', () => {
		fireEvent.click(getByTestId('G#'));
		expect(calledNote).toBe(Notes.gSharp);
	});
	it('clicks A button', () => {
		fireEvent.click(getByTestId('A'));
		expect(calledNote).toBe(Notes.a);
	});
	it('clicks A# button', () => {
		fireEvent.click(getByTestId('A#'));
		expect(calledNote).toBe(Notes.aSharp);
	});
	it('clicks B button', () => {
		fireEvent.click(getByTestId('B'));
		expect(calledNote).toBe(Notes.b);
	});
})