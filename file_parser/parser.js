const normalize		= require('./normalize.js');
const parseSize		= require('./parseSize.js');
const parsePosition = require('./parsePosition.js');
const parseMoves	= require('./parseMoves.js');
const Observer		= require('../observer/observer.js');

function parser(data) {
	const observer			= new Observer();
	const dataNormalized	= normalize(data);
	console.log(observer.id);

	parseSize(dataNormalized[0]);
	for (let i = 1; i < dataNormalized.length; i++) {
		parsePosition(dataNormalized[i]);
		parseMoves(dataNormalized[i]);
	}
}

module.exports = parser;