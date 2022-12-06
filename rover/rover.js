class Rover {
	constructor(id, posX, posY, dir) {
		this._id	= id.toString().length > 2 ? id : null,
		this._posX	= posX,
		this._posY	= posY,
		this._dir	= dir
	}

	set id(id) {
		this._id = id;
	}

	get id() {
		return this._id;
	}

	set posX(x) {
		this._posX = x;
	}

	get posX() {
		return this._posX;
	}

	set posY(y) {
		this._posY = y;
	}

	get posY() {
		return this._posY;
	}

	set dir(dir) {
		this._posX = x;
	}

	get dir() {
		return this._dir;
	}
}

module.exports = Rover;