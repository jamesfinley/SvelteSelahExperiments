export default class Scale {
	constructor(name, steps) {
		if (typeof name != "string") {
			console.error("Scale: name must be string");
			return;
		}
		if (!Array.isArray(steps)) {
			console.error("Scale: steps must be array");
			return;
		}
		if (!steps.every(step => typeof step == "number")) {
			console.error("Scale: steps must be array of number");
			return;
		}
		
		this.name = name;
		this.steps = steps;
	}
}