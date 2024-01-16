import { buildResultCards } from './buildResultCards.js';
import { emptyNest } from './emptyNest.js';
import { spacesOrUnderscores } from './spacesOrUnderscores.js'


// Holds filter states and renders page elements on change.
export let filterStore = {
	tags_current_position: [],
	tags_past_positions: [],
	tags_experience: [],
	tags_general: [],
	tags_current_industries: [],
	tags_past_industries: [],
	tags_current_board_service: [],
	tags_past_board_service: [],
	isEmpty: function() {
		let empty = true;
		for (const key in filterStore) {
			if (key.match("tags")) {
				filterStore.key[0] ? null : empty = false;
			};
		};
		return empty;
	},
	watchedElements: [],
	searchResults: null,
	filterResultsByTag: function(resultsArr, tagsArr, targetProperty) {
		return resultsArr.filter((result) => {
			let allMatchesSuccessful = true;
			tagsArr.forEach(x => {
				new RegExp(`(^${x};)|(; ${x};)|(; ${x}$)|(^${x}$)`).test(result.document[targetProperty]) ? null : allMatchesSuccessful = false;
			})
			return allMatchesSuccessful;
		})
	},
	// Stores current number of filtered results
	resultCount: 0,
	getResultCount: function(resultsArr) {
		this.resultCount = resultsArr.length;
	},
	// Pass the contents (selected filters) of a watched input element (sl-select) to this[key]
	update: function(key, watchedElementIndex) {
		this[key] = this.watchedElements[watchedElementIndex].value.flat(Infinity).map(x => spacesOrUnderscores(x)); // sl-option values cannot contain spaces, so spacesOrUnderscores() will swap them to underscores
	},
	render: function(searchResults, outputContainer) {
		// Clear unfiltered search result from DOM
		emptyNest(outputContainer);
		let filteredResults = searchResults.hits;
		for (let key in filterStore) {
			if (key.match("tags")) {
				filteredResults = this.filterResultsByTag(filteredResults, filterStore[key], key);
			}
		}

		// Get elements to update with result count in filter dialog
		let resultCount = document.getElementById('resultCount');
		let resultWord = document.getElementById('resultWord');

		// Update this.resultCount
		this.getResultCount(filteredResults);

		// Update element text in filter dialog with result count
		resultCount.textContent = this.resultCount + `${this.resultCount != 1 ? ' results found.' : ' result found.'}`;

		buildResultCards(filteredResults, outputContainer);
	},
	// Add event listeners to each <sl-select> in the filter modal / dialog
	watch: function(outputContainer) {
		for (let i = 0; i < this.watchedElements.length; i++) {
			this.watchedElements[i].addEventListener('sl-change', event => {
				// Update this.key with the contents (selected filters) of a watched element (sl-select) with matching ID
				// For example, an array of selected filters from sl-select#tags_general would be passed to this.tags_general
				let key = this.watchedElements[i].id;
				this.update(key, i);
				this.isEmpty && !this.searchResults ? null : this.render(this.searchResults, outputContainer);
			})
		}
	}
};
