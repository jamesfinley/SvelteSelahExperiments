import Scale from './Scale.js';

var faker = require('faker');

it('has name', () => {
	const name = faker.random.words();
	const steps = [1,2,3].map(() => faker.random.number());
	const scale = new Scale(name, steps);
	
	expect(scale.name).toBe(name);
});

it('consoles error when name is not string', () => {
	const name = faker.random.number();
	const steps = [1,2,3].map(() => faker.random.number());
	
	const spy = jest.spyOn(global.console, 'error');
	
	const scale = new Scale(name, steps);
	
	expect(spy).toHaveBeenCalled();
});

it('has steps', () => {
	const name = faker.random.words();
	const steps = [1,2,3].map(() => faker.random.number());
	const scale = new Scale(name, steps);
	
	expect(scale.steps).toBe(steps);
});

it('consoles error when steps is not an array', () => {
	const name = faker.random.words();
	const steps = faker.random.words();
	
	const spy = jest.spyOn(global.console, 'error');
	
	const scale = new Scale(name, steps);
	
	expect(spy).toHaveBeenCalled();
});

it('consoles error when steps is not an array of numbers', () => {
	const name = faker.random.words();
	const steps = [1,2,3].map(() => faker.random.words());
	
	const spy = jest.spyOn(global.console, 'error');
	
	const scale = new Scale(name, steps);
	
	expect(spy).toHaveBeenCalled();
});