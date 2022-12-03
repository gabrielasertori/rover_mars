import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

export function start_presentation() {
	first_instructions();
	processLineByLine().then(resp => console.log(resp));
}

function first_instructions() {
	console.log("Hello! Welcome to your Rovers help line");
	console.log("Please enter the file name from rovers_instructions file directory, like the exemple below:\nBests_Rovers.txt");
	console.log("Attention! Only txt files");
}

function processLineByLine() {
	let file;
	const possibleResp = ["y", "yes", "n", "no"];

	return new Promise((resolve, reject) => {
		rl.on('line', (input) => {
			if (!possibleResp.includes(input)) {
				console.log(`Received: ${input}. \nWant to continue [y/n]?`);
				file = input;
			} else if (input == "n" || input == "no") {
				console.log(`Enter new file: `);
				file = input;
			} else {
				rl.close();
				resolve(file);
			}
		});
	
		rl.on('close', () => {
			console.log(`Processing...`);
		});
	})
}
