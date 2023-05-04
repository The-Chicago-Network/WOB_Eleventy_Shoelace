const formatID = (string) => {
	return string.replace(/ /g,"_").replace(/[^a-zA-Z0-9_]/g,"").toLowerCase();
}

module.exports = formatID;
