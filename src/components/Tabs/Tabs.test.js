import Tabs from "./Tabs.svelte";
import { render, fireEvent } from '@testing-library/svelte';
import '@testing-library/jest-dom';

let component, getByText, getByTestId;

beforeEach(() => {
	({ component, getByText, getByTestId } = render(Tabs));
});

it('has Fingerboard tab', () => {
	expect(getByText('Fingerboard')).toBeInTheDocument();
});
it('has Tablature tab', () => {
	expect(getByText('Tablature')).toBeInTheDocument();
});
it('has Staff tab', () => {
	expect(getByText('Staff')).toBeInTheDocument();
});
it('has Magic tab', () => {
	expect(getByText('Magic')).toBeInTheDocument();
});

it('calls fingerboard handler when clicked', () => {
	const mockOnClick = jest.fn();
	component.$on('showFingerboard', mockOnClick);
	
	fireEvent.click(getByText('Fingerboard'));
	
	expect(mockOnClick).toHaveBeenCalled();
});
it('calls tablature handler when clicked', () => {
	const mockOnClick = jest.fn();
	component.$on('showTablature', mockOnClick);
	
	fireEvent.click(getByText('Tablature'));
	
	expect(mockOnClick).toHaveBeenCalled();
});
it('calls staff handler when clicked', () => {
	const mockOnClick = jest.fn();
	component.$on('showStaff', mockOnClick);
	
	fireEvent.click(getByText('Staff'));
	
	expect(mockOnClick).toHaveBeenCalled();
});
it('calls magic handler when clicked', () => {
	const mockOnClick = jest.fn();
	component.$on('showMagic', mockOnClick);
	
	fireEvent.click(getByText('Magic'));
	
	expect(mockOnClick).toHaveBeenCalled();
});