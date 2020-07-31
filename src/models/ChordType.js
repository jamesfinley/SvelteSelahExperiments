export default class ChordType {
	constructor(name) {
		if (!name || name.constructor != String) {
			console.error("ChordType: name must be String");
			return;
		}
		
		this.name = name;
	}
}