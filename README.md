# Women Lead
 [![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
 [![Netlify Status](https://api.netlify.com/api/v1/badges/337aba9b-0427-483c-8e76-b27436517605/deploy-status)](https://app.netlify.com/sites/lovely-toffee-bde8eb/deploys)

Women Lead is a webapp from The Chicago Network that allows recruiters to search through a database of top Chicago women to find diverse, qualified candidates for board service.

Built with:
* [Eleventy](https://github.com/11ty/eleventy)
* [Shoelace](https://github.com/shoelace-style/shoelace)
* [Orama](https://github.com/oramasearch/orama)
* [Sanitize.css](https://github.com/csstools/sanitize.css)
* [Decap CMS](https://decapcms.org/)

## License
This project is licensed under the GPLv3 license with the following exceptions:
* The contents of markdown files located in ./profiles, excluding frontmatter structure & field names.[^1]
* The contents of ./profileMaker/data.json, excluding object keys and structure.[^1]
* The contents of ./assets/images/

[^1]: To put it another way, the structure of these files is licensed under the GPLv3, but the profile content therein is not.

## Documentation
### Using profileMaker
profileMaker.js takes data.json, containing profile data, and spits out individual .md files into /profiles so that 11ty can turn them into HTML documents.

#### Setup
Install the `sanitize-html` node package, and Miller. For example, on Arch Linux:
```bash
npm install sanitize-html
sudo pacman -S miller
```

1. Ensure your data CSV column headers are as follows:
```csv
subDate,name.first,name.middle,name.last,name.suffix,email,currentTitle,currentOrg,bio,linkedin,tiktok,twitter,aboutme,insta,orgURL,snapchat,personalURL,originalHeadshotURL,resumeFile,tags.pastposition,tags.currentposition,tags.pastexperience,tags.currentexperience,tags.experience,tags.pastindustries,tags.currentindustries,boards.currentcorporatepublic.1.name,boards.currentcorporatepublic.1.position,boards.currentcorporatepublic.2.name,boards.currentcorporatepublic.2.position,boards.currentcorporatepublic.3.name,boards.currentcorporatepublic.3.position,boards.currentcorporatepublic.4.name,boards.currentcorporatepublic.4.position,boards.pastcorporatepublic.1.name,boards.pastcorporatepublic.1.position,boards.pastcorporatepublic.2.name,boards.pastcorporatepublic.2.position,boards.pastcorporatepublic.3.name,boards.pastcorporatepublic.3.position,boards.pastcorporatepublic.4.name,boards.pastcorporatepublic.4.position,boards.currentcorporateprivate.1.name,boards.currentcorporateprivate.1.position,boards.currentcorporateprivate.2.name,boards.currentcorporateprivate.2.position,boards.currentcorporateprivate.3.name,boards.currentcorporateprivate.3.position,boards.currentcorporateprivate.4.name,boards.currentcorporateprivate.4.position,boards.pastcorporateprivate.1.name,boards.pastcorporateprivate.1.position,boards.pastcorporateprivate.2.name,boards.pastcorporateprivate.2.position,boards.pastcorporateprivate.3.name,boards.pastcorporateprivate.3.position,boards.pastcorporateprivate.4.name,boards.pastcorporateprivate.4.position,boards.currentnonprofit.1.name,boards.currentnonprofit.1.position,boards.currentnonprofit.2.name,boards.currentnonprofit.2.position,boards.currentnonprofit.3.name,boards.currentnonprofit.3.position,boards.currentnonprofit.4.name,boards.currentnonprofit.4.position,boards.pastnonprofit.1.name,boards.pastnonprofit.1.position,boards.pastnonprofit.2.name,boards.pastnonprofit.2.position,boards.pastnonprofit.3.name,boards.pastnonprofit.3.position,boards.pastnonprofit.4.name,boards.pastnonprofit.4.position,boards.currentvc.1.name,boards.currentvc.1.position,boards.currentvc.2.name,boards.currentvc.2.position,boards.currentvc.3.name,boards.currentvc.3.position,boards.currentvc.4.name,boards.currentvc.4.position,boards.pastvc.1.name,boards.pastvc.1.position,boards.pastvc.2.name,boards.pastvc.2.position,boards.pastvc.3.name,boards.pastvc.3.position,boards.pastvc.4.name,boards.pastvc.4.position,boards.currentprivateequity.1.name,boards.currentprivateequity.1.position,boards.currentprivateequity.2.name,boards.currentprivateequity.2.position,boards.currentprivateequity.3.name,boards.currentprivateequity.3.position,boards.currentprivateequity.4.name,boards.currentprivateequity.4.position,boards.pastprivateequity.1.name,boards.pastprivateequity.1.position,boards.pastprivateequity.2.name,boards.pastprivateequity.2.position,boards.pastprivateequity.3.name,boards.pastprivateequity.3.position,boards.pastprivateequity.4.name,boards.pastprivateequity.4.position,boards.currentspac.1.name,boards.currentspac.1.position,boards.currentspac.2.name,boards.currentspac.2.position,boards.currentspac.3.name,boards.currentspac.3.position,boards.currentspac.4.name,boards.currentspac.4.position,boards.pastspac.1.name,boards.pastspac.1.position,boards.pastspac.2.name,boards.pastspac.2.position,boards.pastspac.3.name,boards.pastspac.3.position,boards.pastspac.4.name,boards.pastspac.4.position

```

2. Convert the CSV to data.json using Miller:
```bash
mlr --c2j cat myCSV.csv > data.json
```
3. Move data.json into /profileMaker and run:
```bash
node ./profileMaker.js
```

### Filtering and Rendering Results with filterStore
#### Rendering Filtered Results
/assets/js/filterStore.js manages state as it relates to user search-results filtering. `filterStore.render()` is used to render filtered results to the DOM. This method is also used to render initial search results as it may be used whether or not the user has selected any filters:
```javascript
// Pass search results to filterStore
filterStore.searchResults = searchResult;
// Render initial search results
filterStore.render(filterStore.searchResults, resultsContainer);
```
#### Watching Inputs
`filterStore.watch()` creates event listeners for each child-element of the element passed to it. These event listeners pass values to `filterStore[elementID]` as the user selects filters via the watched elements. `filterStore.watch();` then re-renders the search results.
