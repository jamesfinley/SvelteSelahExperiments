import Button from "./Button.svelte";
import { render, fireEvent } from '@testing-library/svelte';
const faker = require('faker');

let rerender, component, getByText, getByTestId, animationDirection, mode, disabled;

beforeEach(() => {
	animationDirection = faker.random.arrayElement(['left', 'right']);
	mode = faker.random.arrayElement(['button', 'dropdown']);
	disabled = false;
	
	({ rerender, component, getByText, getByTestId } = render(Button, {
		animationDirection,
		mode,
		disabled,
	}));
});

describe("Animation Direction", () => {
	it('has class', () => {
		const button = getByTestId('button');
		expect(button.classList.contains(`btn-animation-${animationDirection}`)).toBe(true);
	});
	it('defaults to left', () => {
		rerender({
			undefined,
			mode,
			disabled,
		});
		
		const button = getByTestId('button');
		expect(button.classList.contains(`btn-animation-left`)).toBe(true);
	});
});

describe("Mode", () => {
	it('has class', () => {
		const button = getByTestId('button');
		expect(button.classList.contains(`btn-mode-${mode}`)).toBe(true);
	});
	it('defaults to button', () => {
		rerender({
			animationDirection,
			undefined,
			disabled,
		});
		
		const button = getByTestId('button');
		expect(button.classList.contains(`btn-mode-button`)).toBe(true);
	});
});

describe("Disabled", () => {
	it('defaults to not', () => {
		const button = getByTestId('button');
		expect(button.disabled).toBe(false);
	});
	
	it('is disabled', () => {
		disabled = true;
		rerender({
			animationDirection,
			mode,
			disabled,
		});
		
		const button = getByTestId('button');
		expect(button.disabled).toBe(false);
	});
});

describe("Click Handler", () => {
	it('calls handler when clicked', () => {
		const button = getByTestId('button');
		const mockOnClick = jest.fn();
		component.$on('click', mockOnClick);
		
		fireEvent.click(button);
		
		expect(mockOnClick).toHaveBeenCalled();
	});
});

// TODO: test children