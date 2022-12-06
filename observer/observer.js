class Observer {
	constructor(id, planet) {
		this._id		= id,
		this._planet	= planet,
		this._numRovers = 0,
		this._rovers	= []
	}

	get id() {
		return this._id;
	}

	get planet() {
		return this._planet;
	}

	get numRovers() {
		return this._numRovers;
	}

	set planet(planet) {
		this._planet = planet;
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
	set rovers(roverId) {
		this._rovers.push(roverId);
	}

	get rovers() {
		return this._rovers;
	}
}

module.exports = Observer;