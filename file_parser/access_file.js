const fs			= require('fs');
const path			= require('path');
const parser		= require('./parser.js');

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
