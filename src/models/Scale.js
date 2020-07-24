export default class Scale {
	constructor(name, steps) {
		if (typeof name != "string") {
			console.error("Scale: name must be string");
			return;
		}
		if (!Array.isArray(steps) || !steps.every(step => typeof step == "number")) {
			console.error("Scale: steps must be array of number");
			return;
		}
		
		this.name = name;
		this.steps = steps;
	}
}

export let Scales = {
	major: new Scale("major", [1, 1, 0.5, 1, 1, 1]),
	minor: new Scale("minor", [1, 0.5, 1, 1, 0.5, 1]),
	minorPentatonic: new Scale("minor pentatonic", [1.5, 1, 1, 1.5]),
};