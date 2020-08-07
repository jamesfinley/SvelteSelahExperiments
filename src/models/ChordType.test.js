import ChordType, { Intervals } from './ChordType.js';

const faker = require('faker');

let chordType, name, intervals, spy;

beforeEach(() => {
	name = faker.random.words();
	intervals = [Intervals.I, Intervals.III, Intervals.V];
	chordType = new ChordType(name, intervals);
	
	spy = jest.spyOn(global.console, 'error');
})

describe('Name', () => {
	it('has name', () => {
		expect(chordType.name).toBe(name);
	});
	it('consoles error when name is not String', () => {
		name = faker.random.number();
		chordType = new ChordType(name, intervals);
		
		expect(spy).toHaveBeenCalled();
	});
});

describe('Intervals', () => {
	it('has intervals', () => {
		expect(chordType.intervals).toBe(intervals);
	});
	
	it('consoles error when intervals is not Array', () => {
		intervals = faker.random.number();
		chordType = new ChordType(name, intervals);
		expect(spy).toHaveBeenCalled();
	});
	
	it('consoles error when intervals is not Array of Intervals', () => {
		intervals = [faker.random.number(), faker.random.number()];
		chordType = new ChordType(name, intervals);
		expect(spy).toHaveBeenCalled();
	});
});