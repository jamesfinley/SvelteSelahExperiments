export default class ChordType {
	constructor(name, intervals = []) {
		if (!name || name.constructor != String) {
			console.error("ChordType: name must be String");
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
	new ChordType('major', [Intervals.I, Intervals.III, Intervals.V]),
	new ChordType('minor', [Intervals.I, Intervals.iii, Intervals.V]),
	new ChordType('diminished', [Intervals.I, Intervals.iii, Intervals.IVplus]),
	new ChordType('major 7th', [Intervals.I, Intervals.III, Intervals.V, Intervals.VII]),
	new ChordType('minor 7th', [Intervals.I, Intervals.iii, Intervals.V, Intervals.vii]),
	new ChordType('seventh', [Intervals.I, Intervals.III, Intervals.V, Intervals.vii]),
	new ChordType('fifth', [Intervals.I, Intervals.V]),
	new ChordType('diminished 7', [Intervals.I, Intervals.iii, Intervals.IVplus, Intervals.vii]),
	new ChordType('minor 7th flat 5th', [Intervals.I, Intervals.iii, Intervals.IVplus, Intervals.vii]),
].reduce((obj, value) => {
	obj[value.name.replace(' ', '')] = value;
	return obj;
}, {});