class BaseCreep {
	constructor(props) {
		this.creep = props.creep; // this is the creep object which we use to refer to the creep
		this.parts = props.parts;
		this.className = props.name;
		this.description = props.description;
	}
	
	// Creating getters
	getCreep() {
		return this.creep;
	}

	getParts() {
		return this.parts;
	}

	getClassName() {
		return this.className;
	}

	getDescription() {
		return this.description;
	}

	// add something to memory, if the value is undefined, return the original value of that key instead
	remember(key, value) {
		if (value === undefined) {
			return this.creep.memory[key];
		}

		this.creep.memory[key] = value;

		return value;
	}
	
	// remove something from the creep's memory
	forget(key) {
		delete this.creep.memory[key];
	}
	
}

export default BaseCreep;