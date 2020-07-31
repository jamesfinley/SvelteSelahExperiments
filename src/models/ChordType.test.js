import ChordType from './ChordType.js';

const faker = require('faker');

let chordType, name, spy;

beforeEach(() => {
	name = faker.random.words();
	chordType = new ChordType(name);
	
	spy = jest.spyOn(global.console, 'error');
})

it('has name', () => {
	expect(chordType.name).toBe(name);
});
it('consoles error when name is not String', () => {
	name = faker.random.number();
	chordType = new ChordType(name);
	
	expect(spy).toHaveBeenCalled();
});