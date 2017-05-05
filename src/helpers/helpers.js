helpers = {}

helpers.garbageCollection = () => {
	Object.keys(Memory.creeps).forEach( (creep) => {
		if (!Memory.creeps[creep]) {
			delete Memory.creeps[creep];
		}
	})
}

export default helpers;