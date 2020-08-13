import Chord from './Chord.js';

const cache = {};

export default {
	forChordTypeWithRootNoteAndTuning: (chordType, rootNote, tuning, maxFrets = 7) => {
		const key = `${tuning.instrument}.${tuning.name}.${rootNote.name}.${chordType.shortName}`;
		if (cache[key]) {
			return cache[key];
		}
		
		const notes = rootNote.notesForChordType(chordType);
		
		const fingerboard = tuning.fingerboard.map(string =>
			// [null].concat(string.filter(({note}) => notes.map(({name}) => name).indexOf(note.name) != -1))
			string.filter(({note}) => notes.map(({name}) => name).indexOf(note.name) != -1)
		);
		
		function getCombos(strings) {
			const results = [];
			
			const fn = function (chord, strings) {
				if (strings.length == 0) {
					results.push(chord);
				}
				else {
					strings[0].forEach(note => fn(chord.concat([note]), strings.slice(1)));
				}
			};
			fn([], strings);
			
			return results;
		}
		
		const results = getCombos(fingerboard)
			// filter results that don't have each note
			.filter(chord => {
				let passes = true;
				notes.forEach(({name}) => {
					if (chord.map(chordNote => chordNote ? chordNote.note.name : 'x').indexOf(name) == -1) {
						passes = false;
					}
				});
				return passes;
			})
			// filter results that have more frets than maxFrets
			.filter(chord => {
				let lowestFret = null;
				let highestFret = null;
				
				chord.filter(note => note).forEach(note => {
					if (lowestFret == null || lowestFret > note.fret) {
						lowestFret = 0;// note.fret;
					}
					if (highestFret == null || highestFret < note.fret) {
						highestFret = note.fret;
					}
				});
				
				return (highestFret - lowestFret) <= maxFrets;
			})
			.map(notes => new Chord(rootNote, chordType, notes));
		
		cache[key] = results;
		
		return results;
	}
};