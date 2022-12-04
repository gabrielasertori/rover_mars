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
	parseSize(dataNormalized[0]);
	console.log("Fora da função " + map_obj.mapSizeX)
	console.log("Fora da função " + map_obj.mapSizeY)
	for (let i = 1; i < dataNormalized.length; i++) {
		parsePosition(dataNormalized[i]);
		//parserMoves(dataNormalized[i]);
	}
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

function parseSize(size) {
	if (size) {
		const sizeSplited = size.split(' ');

		if (sizeSplited.length > 0 && sizeSplited.length <= 2) {
			map_obj.mapSizeX	= Number(sizeSplited[0]);
			map_obj.mapSizeY	= Number(sizeSplited[1]);
		}
	}
}

function parsePosition(data) {
	const dataSplited	= data.split(' ');
	if (dataSplited.length > 0 && dataSplited.length <= 3) {
		
	}

}