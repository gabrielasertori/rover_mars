const fs = require('fs');
const path = require('path');
const { map_obj } = require('../map/map_obj.js');

const fileName = "first_instructions.txt"
const filePath = path.join(__dirname, '..', 'instructions', fileName);

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  if (data) {
	parser(data);	  
  }
});

function parser(data) {
	const dataNormalized = normalize(data);
	parserSize(dataNormalized[0]);
	console.log("Fora da função " + map_obj.mapSizeX)
	console.log("Fora da função " + map_obj.mapSizeY)
	//parserPosition(data);
	//parserMoves(data);
}

function normalize(data) {
	const dataSplited	= data.split('\n');
	let dataParsed		= [];

	if (dataSplited.length > 0) {
		dataParsed = dataSplited.filter(function(value, index, arr){ 
			return value != '';
		});
	}

	return dataParsed;
}

function parserSize(size) {
	if (size) {
		const sizeSplited = size.split(' ');

		if (sizeSplited.length > 0 && sizeSplited.length <= 2) {
			map_obj.mapSizeX	= Number(sizeSplited[0]);
			map_obj.mapSizeY	= Number(sizeSplited[1]);
		}
	}
}
