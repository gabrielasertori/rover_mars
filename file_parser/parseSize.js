const { map_obj }	= require('../map/map_obj.js');

function parseSize(size) {
	if (size) {
		const sizeSplited = size.split(' ');

		if (sizeSplited.length > 0 && sizeSplited.length <= 2) {
			map_obj.mapSizeX	= Number(sizeSplited[0]);
			map_obj.mapSizeY	= Number(sizeSplited[1]);
		}
	}
}

module.exports = parseSize;