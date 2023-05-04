const sanitize = require('./sanitize.js');

// Split and format tag strings
const tagSplitter = (string) => {
	if (string) {
		const splitString = string.split("\n");
		let newString = "";
		splitString.forEach((x) => {
			newString += `\n    - ${x}`;
		});
		return sanitize(newString, false);
	}
	return "";
};

module.exports = tagSplitter;
