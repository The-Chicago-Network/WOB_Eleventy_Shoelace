# Profile Maker

This script outputs .MD files from a JSON file containing an array of profile objects. These objects should be formatted as below. First convert your CSV to JSON via the [csvtojson cli](https://github.com/Keyang/node-csvtojson), first ensuring that you have changed all column headers to match the object properties below.

## Instructions
1. Install csvtojson, if necessary
``` bash
	npm i -g csvtojson
 ```
2. Export a CSV or all responses from JotForm, and change all headers to match the property names used in the template literals in profileMaker.js.
3. Convert your CSV to a JSON file called `data.json` via the [csvtojson cli](https://github.com/Keyang/node-csvtojson).
``` bash
csvtojson myfile.csv > data.json
```
4. Place `data.json` into the directory containing profileMaker.js
5. Execute `./node profileMaker.js`.
