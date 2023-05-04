const returnTagStrings = (object, map, parentKey, childKey)  => {

	let newString = "";

	for (let i = 0; i < map.length; i++) {
		object[parentKey][map[i][0]][0][childKey] ? newString += map[i][1] : null;
	}

	return newString
}

module.exports = returnTagStrings;
