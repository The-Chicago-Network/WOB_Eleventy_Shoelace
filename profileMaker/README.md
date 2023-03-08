# Profile Maker

This script outputs .MD files from a JSON file containing an array of profile objects. These objects should be formatted as below. First convert your CSV to JSON via the [csvtojson cli](https://github.com/Keyang/node-csvtojson), first ensuring that you have changed all column headers to match the object properties below.

## Instructions
1. Export a CSV or all responses from JotForm, and change all headers to match the property names used in the template literals in profileMaker.js.
2. Convert your CSV to a JSON file called `data.json` via the [csvtojson cli](https://github.com/Keyang/node-csvtojson).
    * Nesting in the JSON output can be accomplished via dot syntax in column headers, EG `name.prefix`.
    * Arrays can be accomplished like so: `levelOne.levelTwo.0.property`, where 0 = the array index.
3. Place `data.json` into the directory containing profileMaker.js
4. Execute `./node profileMaker.js`.
