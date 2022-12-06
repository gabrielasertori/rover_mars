const normalize		= require('./normalize.js');
const parseSize		= require('./parseSize.js');
const parsePosition = require('./parsePosition.js');
const parseMoves	= require('./parseMoves.js');
const Observer		= require('../observer/observer.js');

function parser(data) {
	const observer			= new Observer(1);
	const dataNormalized	= normalize(data);

	parseSize(dataNormalized[0], observer);
	for (let i = 1; i < dataNormalized.length; i++) {
		parsePosition(dataNormalized[i], observer);
		parseMoves(dataNormalized[i], observer);
	}
}

module.exports = parser;