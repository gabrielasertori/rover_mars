function parsePosition(data) {
	const dataSplited = data.split(' ');

	if (dataSplited.length == 3) {
		if (Number(dataSplited[0]) && Number(dataSplited[1])) {
			console.log("é posição");
		}
	}

}

module.exports = parsePosition;