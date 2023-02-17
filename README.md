# Women Lead
 [![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)

Women Lead is a webapp from The Chicago Network that allows recruiters to search through a database of top Chicago women to find diverse, qualified candidates for board service.

Built with:
* [Eleventy](https://github.com/11ty/eleventy)
* [Shoelace](https://github.com/shoelace-style/shoelace)
* [Lyra](https://github.com/LyraSearch/lyra)
* [Sanitize.css](https://github.com/csstools/sanitize.css)

## License
This project is licensed under the GPLv3 license with the following exceptions:
* The contents of markdown files located in ./profiles, excluding frontmatter structure & field names.[^1]
* The contents of ./profileMaker/data.json, excluding object keys and structure.[^1]
* The contents of ./assets/images/

[^1]: To put it another way, the structure of these files is licensed under the GPLv3, but the profile content therein is not.

## Documentation
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
