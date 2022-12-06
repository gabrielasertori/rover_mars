function parseMoves(data, observer) {
	for (let ch of data) {
		if (Number(ch)) {
			console.log("Errado");
			break ;
		} else {
			console.log("é movimento")
		}
	}

}

module.exports = parseMoves;