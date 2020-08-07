export default class ChordType {
	constructor(name, shortName = ' ', intervals = []) {
		if (!name || name.constructor != String) {
			console.error("ChordType: name must be String");
			return;
		}
		if (!shortName || shortName.constructor != String) {
			console.error("ChordType: shortName must be String");
			return;
		}
		if (!Array.isArray(intervals)) {
			console.error("ChordType: intervals must be Array");
			return;
		}
		if (!intervals.every(interval => allIntervals.indexOf(interval) !== -1)) {
			console.error("ChordType: intervals must be Array of Intervals");
			return;
		}
		
		this.name = name;
		this.shortName = shortName;
		this.intervals = intervals;
	}
}

export const Intervals = {
	I: 'I',
	II: 'II',
	III: 'III',
	IV: 'IV',
	IVplus: 'IV+',
	V: 'V',
	VI: 'VI',
	VII: 'VII',
	i: 'i',
	ii: 'ii',
	iii: 'iii',
	iv: 'iv',
	v: 'v',
	vi: 'vi',
	vii: 'vii',
};

const allIntervals = Object.keys(Intervals).map(key => Intervals[key]);

export const ChordTypes = [
	new ChordType('major', 'maj', [Intervals.I, Intervals.III, Intervals.V]),
	new ChordType('minor', 'min', [Intervals.I, Intervals.iii, Intervals.V]),
	new ChordType('diminished', 'dim', [Intervals.I, Intervals.iii, Intervals.IVplus]),
	new ChordType('major 7th', 'maj7', [Intervals.I, Intervals.III, Intervals.V, Intervals.VII]),
	new ChordType('minor 7th', 'min7', [Intervals.I, Intervals.iii, Intervals.V, Intervals.vii]),
	new ChordType('dom seventh suspended fourth', '7sus', [Intervals.I, Intervals.IV, Intervals.V, Intervals.vii]),
	new ChordType('suspended second', 'sus2', [Intervals.I, Intervals.II, Intervals.V]),
	new ChordType('suspended fourth', 'sus4', [Intervals.I, Intervals.IV, Intervals.V]),
	new ChordType('seventh', '7', [Intervals.I, Intervals.III, Intervals.V, Intervals.vii]),
	new ChordType('fifth', '5', [Intervals.I, Intervals.V]),
	new ChordType('diminished 7', 'dim7', [Intervals.I, Intervals.iii, Intervals.IVplus, Intervals.vii]),
	new ChordType('minor 7th flat 5th', 'm7♭5', [Intervals.I, Intervals.iii, Intervals.IVplus, Intervals.vii]),
].reduce((obj, value) => {
	obj[value.name.replace(' ', '')] = value;
	return obj;
}, {});