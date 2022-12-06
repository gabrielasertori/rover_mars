class Map {
	constructor() {
		this._id		= 0,
		this._mapSizeX	= 0,
		this._mapSizeY	= 0
	}

	/**
	 * @param {number} x
	 */
	set mapSizeX(x) {
		this._mapSizeX = x;
	}

	/**
	 * @param {number} y
	 */
	set mapSizeY(y) {
		this._mapSizeY = y;
	}

	/**
	 * @param {number} id
	 */
	set id(id) {
		this._id = id;
	}
}

module.exports = Map;