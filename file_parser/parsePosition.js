const Rover = require('../rover/rover.js')

function parsePosition(data, observer) {
	const dataSplited	= data.split(' ');

	if (dataSplited.length == 3) {
		if (Number(dataSplited[0]) && Number(dataSplited[1])) {
			const rover = new Rover(101, dataSplited[0], dataSplited[1], dataSplited[2]);
			observer.numRovers = observer.numRovers + 1;
			observer.rovers = rover.id;
		}
	}

}

module.exports = parsePosition;