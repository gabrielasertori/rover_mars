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

module.exports = normalize;