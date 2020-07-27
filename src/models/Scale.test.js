import Scale from './Scale.js';

const faker = require('faker');
let name;
let steps;
let scale;

const spy = jest.spyOn(global.console, 'error');

beforeEach(() => {
	name = faker.random.words();
	steps = [1,2,3].map(() => faker.random.number());
	scale = new Scale(name, steps);
});

describe('Name', () => {
	it('has name', () => {
		expect(scale.name).toBe(name);
	});
	
	it('consoles error when name is not string', () => {
		name = faker.random.number();
		scale = new Scale(name, steps);
		
		expect(spy).toHaveBeenCalled();
	});
});

describe('Steps', () => {
	it('has steps', () => {
		expect(scale.steps).toBe(steps);
	});
	
	it('consoles error when steps is not an array', () => {
		steps = faker.random.words();
		scale = new Scale(name, steps);
		
		expect(spy).toHaveBeenCalled();
	});
	
	it('consoles error when steps is not an array of numbers', () => {
		steps = [1,2,3].map(() => faker.random.words());
		scale = new Scale(name, steps);
		
		expect(spy).toHaveBeenCalled();
	});
});