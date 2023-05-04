const fs = require("fs");
const generateFrontmatter = require('./generateFrontmatter.js');
const formatID = require('./formatID.js');
const printName = require('./printName.js');

const generateFiles = (object, exportPath) => {
	for (const x in object) {
		const namepath = `${exportPath}${formatID(printName(object[x].name))}.md`;
		fs.writeFileSync(
			namepath,
			generateFrontmatter(object[x]),
						 (err) => {
							 if (err) {
								 console.log(err);
							 }
						 }
		);
	}
};

module.exports = generateFiles;
