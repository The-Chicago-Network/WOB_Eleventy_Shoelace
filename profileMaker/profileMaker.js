// Require filesystem module
const fs = require("fs");

// Create object from JSON file
const data = fs.readFileSync("./data.json");
const obj = JSON.parse(data);

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

// Handle newline characters and colons in YAML frontmatter
const sanitize = (string, allowNewline) => {
    let newString = string;
    if (allowNewline) {
        newString = newString.replace(/\n+/g, "<br /><br />");
    }
    return newString.replace(/:/g, "&#58;");
}

// Split and format tag strings
const tagSplitter = (string) => {
  if (string) {
    const splitString = string.split("\n");
    let newString = "";
    splitString.forEach((x) => {
      newString += `\n    - ${x}`;
    });
    return sanitize(newString, false);
  }
  return "";
};

// Format board data into strings
const boardSpitter = (arr) => {
  let newString = "";
  arr.forEach((x) => {
    if (x.name) {
      newString += `\n    - ${x.name}, ${x.position}`;
    }
    return "";
  });
  return sanitize(newString, false);
};

// Format full name
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

// Format ID
const formatID = (string) => {
  return string.replace(/-/g,"_").replace(/[^a-zA-Z0-9_]/g,"").toLowerCase();
}

// Format headshot URL
const formatHeadshotURL = (string, smallSize) => {
  let newString = string.replace(/https:\/\/www\.jotform\.com\/uploads\/tcnintern\/.*?\/.*?\//,"");
  const formatRegex = new RegExp(/\.jpg|\.jpeg|\.gif|\.webm|\.tif|\.tiff|\.png/, 'g');
  if (smallSize) {
    return `assets/images/headshots/${newString.replace(formatRegex, "_converted_scaled.avif")}`;
  }
  return `assets/images/headshots/full_size_avif/${newString.replace(formatRegex, "_converted.avif")}`;
}

// TODO refactor these two silly functions
const currentBoardTags = (object) => {
  let newString = "";
  object.boards.currentcorporateprivate[0].name != '' ? newString += `\n    - Corporate Private` : null;
  object.boards.currentcorporatepublic[0].name != '' ? newString += `\n    - Corporate Public` : null;
  object.boards.currentnonprofit[0].name != '' ? newString += `\n    - Nonprofit` : null;
  object.boards.currentspac[0].name != '' ? newString += `\n    - SPAC` : null;
  object.boards.currentvc[0].name != '' ? newString += `\n    - VC` : null;
  object.boards.currentprivateequity[0].name != '' ? newString += `\n    - Private Equity` : null;
  return newString;
}

const pastBoardTags = (object) => {
  let newString = "";
  object.boards.pastcorporateprivate[0].name != '' ? newString += `\n    - Corporate Private` : null;
  object.boards.pastcorporatepublic[0].name != '' ? newString += `\n    - Corporate Public` : null;
  object.boards.pastnonprofit[0].name != '' ? newString += `\n    - Nonprofit` : null;
  object.boards.pastspac[0].name != '' ? newString += `\n    - SPAC` : null;
  object.boards.pastvc[0].name != '' ? newString += `\n    - VC` : null;
  object.boards.pastprivateequity[0].name != '' ? newString += `\n    - Private Equity` : null;
  return newString;
}

// Convert profile data into frontmatter
const generateFrontmatter = (object) => {
  return `---
layout: layouts/profile.liquid
title: ${printName(object.name)}
id: ${formatID(object.id)}
prefix: ${object.name.prefix}
first: ${object.name.first}
middle: ${object.name.middle}
last: ${object.name.last}
suffix: ${object.name.suffix}
currentTitle: ${sanitize(object.currentTitle, true)}
currentOrg: ${sanitize(object.currentOrg, true)}
bio: ${sanitize(object.bio, true)}
linkedin: ${object.linkedin}
tiktok: ${object.tiktok}
twitter: ${object.twitter}
aboutme: ${object.aboutme}
insta: ${object.insta}
orgURL: ${object.orgURL}
snapchat: ${object.snapchat}
personalURL: ${object.personalURL}
smallHeadshotURL: ${formatHeadshotURL(object.headshotURL, true)}
originalHeadshotURL: ${formatHeadshotURL(object.headshotURL, true)}
tags-experience: ${tagSplitter(object.tags.currentexperience)}${tagSplitter(object.tags.pastexperience)}
tags-current-industries: ${tagSplitter(object.tags.currentindustries)}
tags-current-position: ${tagSplitter(object.tags.currentposition)}
tags-past-industries: ${tagSplitter(object.tags.pastindustries)}
tags-past-position: ${tagSplitter(object.tags.pastposition)}
tags-current-board-service: ${currentBoardTags(object)}
tags-past-board-service: ${pastBoardTags(object)}
boards-current-corporate-private: ${boardSpitter(object.boards.currentcorporateprivate)}
boards-current-corporate-public: ${boardSpitter(object.boards.currentcorporatepublic)}
boards-current-nonprofit: ${boardSpitter(object.boards.currentnonprofit)}
boards-current-privateequity: ${boardSpitter(object.boards.currentprivateequity)}
boards-current-spac: ${boardSpitter(object.boards.currentspac)}
boards-current-vc: ${boardSpitter(object.boards.currentvc)}
boards-past-corporate-private: ${boardSpitter(object.boards.pastcorporateprivate)}
boards-past-corporate-public: ${boardSpitter(object.boards.pastcorporatepublic)}
boards-past-nonprofit: ${boardSpitter(object.boards.pastnonprofit)}
boards-past-privateequity: ${boardSpitter(object.boards.pastprivateequity)}
boards-past-spac: ${boardSpitter(object.boards.pastspac)}
boards-past-vc: ${boardSpitter(object.boards.pastvc)}
---`;
};

// Generate MD files in ./profiles
const generateFiles = (object) => {
  for (const x in object) {
    const namepath = `${exportPath}${formatID(obj[x].id)}.md`;
    fs.writeFileSync(
      namepath,
      generateFrontmatter(obj[x]),
      (err) => {
        if (err) {
          console.log(err);
        }
      }
    );
  }
};

// Go!
generateFiles(obj);
