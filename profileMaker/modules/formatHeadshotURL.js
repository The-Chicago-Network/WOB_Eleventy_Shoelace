const formatHeadshotURL = (string, smallSize) => {
	let newString = string.replace(/https:\/\/www\.jotform\.com\/uploads\/tcnintern\/.*?\/.*?\//,"");
	const formatRegex = new RegExp(/\.jpg|\.jpeg|\.gif|\.webm|\.tif|\.tiff|\.png/, 'g');
	if (smallSize) {
		return `assets/images/headshots/${newString.replace(formatRegex, "_converted_scaled.avif")}`;
	}
	return `assets/images/headshots/full_size_avif/${newString.replace(formatRegex, "_converted.avif")}`;
}

module.exports = formatHeadshotURL;
