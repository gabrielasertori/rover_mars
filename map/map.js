class Map {
	constructor(id) {
		this._id		= id.toString().length > 1 ? id : null,
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

	get id () {
		return this._id;
	}
}

module.exports = Map;