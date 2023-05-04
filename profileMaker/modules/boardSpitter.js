const sanitize = require('./sanitize.js');


// Format board data into strings
const boardSpitter = (arr) => {
	let newString = "";
	arr.forEach((x) => {
		if (x.name && x.name != "<") {
			newString += `\n    - ${x.name}, ${x.position}`;
		}
		return "";
	});
	return sanitize(newString, false);
};

module.exports = boardSpitter;
