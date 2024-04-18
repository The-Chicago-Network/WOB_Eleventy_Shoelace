const sanitizeHtml = require('sanitize-html');
const urlFixer = require('./urlFixer.js');
const config = require('../config.json');
const returnTagStrings = require('./returnTagStrings.js');
const formatID = require('./formatID.js');
const printName = require('./printName.js');
const sanitize = require('./sanitize.js');
const tagSplitter = require('./tagSplitter.js');
const boardSpitter = require('./boardSpitter.js');
const formatHeadshotURL = require('./formatHeadshotURL.js');

const generateFrontmatter = (object) => {
return `---
layout: layouts/profile.liquid
title: ${printName(object.name)}
id: ${formatID(printName(object.name))}
first: ${object.name.first}
middle: ${object.name.middle}
last: ${object.name.last}
suffix: ${object.name.suffix}
currentTitle: ${sanitize(object.currentTitle, true)}
currentOrg: ${sanitize(object.currentOrg, true)}
bio: ${sanitize(sanitizeHtml(object.bio, {
	allowedTags: ['br'],
	allowedAttributes: {}
}), true)}
linkedin: ${urlFixer(object.linkedin)}
tiktok: ${urlFixer(object.tiktok)}
twitter: ${urlFixer(object.twitter)}
aboutme: ${urlFixer(object.aboutme)}
insta: ${urlFixer(object.insta)}
orgURL: ${urlFixer(object.orgURL)}
snapchat: ${urlFixer(object.snapchat)}
personalURL: ${urlFixer(object.personalURL)}
smallHeadshotURL: ${formatHeadshotURL(object.originalHeadshotURL, true)}
originalHeadshotURL: ${formatHeadshotURL(object.originalHeadshotURL, true)}
tags-experience: ${tagSplitter(object.tags.currentexperience)}${tagSplitter(object.tags.pastexperience)}
tags-current-industries: ${tagSplitter(object.tags.currentindustries)}
tags-current-position: ${tagSplitter(object.tags.currentposition)}
tags-past-industries: ${tagSplitter(object.tags.pastindustries)}
tags-past-position: ${tagSplitter(object.tags.pastposition)}
tags-current-board-service: ${returnTagStrings(object, config.currentBoardStringMap, 'boards', 'name')}
tags-past-board-service: ${returnTagStrings(object, config.pastBoardStringMap, 'boards', 'name')}
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

module.exports = generateFrontmatter;
