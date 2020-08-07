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

export const ChordTypes = {
	'major': new ChordType('major', [Intervals.I, Intervals.III, Intervals.V]),
	'minor': new ChordType('minor', [Intervals.I, Intervals.iii, Intervals.V]),
}