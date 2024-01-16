// Handle newline characters and colons in YAML frontmatter
const sanitize = (string, allowNewLine) => {
	let newString = string;
	if (allowNewLine) { // Remove excessive newlines and replace all with <br /> tags
		newString = newString.replace(/(?:(?:\\n|\n)+(?:\\n+|\n+|\s+)+)+/gm, "<br /><br />").replace(/\n/g, "<br />");
	}
	return newString = newString.replace(/§/g, "")
		.replace(/ +/g, " ")
		.replace(/ +(?= )/g, "")
		.replace(/:/g, "&#58;")
		.replace(/![a-zA-Z]/, "");
}

module.exports = sanitize;
