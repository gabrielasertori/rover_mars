class Observer {
	constructor(id, planet) {
		this._id		= id,
		this._planet	= planet,
		this._numRovers = 0,
		this._rovers	= []
	}

	/**
	 * @param {number} num
	 */
	set numRovers(num) {
		this._numRovers = num;
	}

	/**
	 * @param {Array} numRover
	 */
	set rovers(numRover) {
		for (let rover of numRover) {
			this._rovers[rover] = numRover;
		}
	}
}

module.exports = Observer;