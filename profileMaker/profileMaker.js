const fs = require("fs");
const generateFiles = require('./modules/generateFiles.js');

// Create object from JSON file
const data = fs.readFileSync("./data.json");
const obj = JSON.parse(data);

// Assign paths
const exportPath = "./profiles/";
const mkdirPath = "./profiles";

// Create ./profiles if it doesn't exist
fs.access(mkdirPath, (error) => {
  if (error) {
    fs.mkdir(mkdirPath, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log(`Successfully created ${mkdirPath}.`);
      }
    });
  } else {
    console.log(`${mkdirPath} already exists; skipping.`);
  }
});


// Generate MD files in ./profiles
generateFiles(obj, exportPath);
