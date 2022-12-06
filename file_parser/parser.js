const normalize		= require('./normalize.js');
const parseSize		= require('./parseSize.js');
const parsePosition = require('./parsePosition.js');
const parseMoves = require('./parseMoves.js');

function parser(data) {
	const dataNormalized = normalize(data);
	parseSize(dataNormalized[0]);
	for (let i = 1; i < dataNormalized.length; i++) {
		parsePosition(dataNormalized[i]);
		parseMoves(dataNormalized[i]);
	}
}

module.exports = parser;