const urlFix = (string) => {
	if (string != "") {
		return string.match("https://") ? string : "https://" + string;
	}
	return "";
}

module.exports = urlFix;
