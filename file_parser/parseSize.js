const Map = require('../map/map.js');

function parseSize(size, observer) {
	if (size) {
		const map			= new Map(11);
		observer.planet		= map.id;
		const sizeSplited	= size.split(' ');

		if (sizeSplited.length > 0 && sizeSplited.length <= 2) {
			map.mapSizeX	= Number(sizeSplited[0]);
			map.mapSizeY	= Number(sizeSplited[1]);
		}
	}
}

module.exports = parseSize;