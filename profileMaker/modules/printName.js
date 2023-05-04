const printName = (obj) => {
	let newString = "";
	for (const x in obj) {
		if (obj[x]) {
			if (newString) {
				newString += ` ${obj[x]}`;
			} else {
				newString += obj[x];
			}
		} else {
			continue;
		}
	}
	return newString;
};

module.exports = printName;
