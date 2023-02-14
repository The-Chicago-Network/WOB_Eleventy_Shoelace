import { buildResultCards } from './buildResultCards.js';
import { emptyNest } from './emptyNest.js';
import { runSearch } from './runSearch.js';

// Holds filter states and renders page elements on change.
export let filterStore = {
	tags_current_position: [],
	tags_past_positions: [],
	tags_experience: [],
	tags_general: [],
	tags_current_sector: [],
	tags_past_sectors: [],
	tags_current_industries: [],
	tags_past_industries: [],
	tags_current_board_service: [],
	tags_past_board_service: [],
	isEmpty: function() {
		let empty = true;
		for ( const key in filterStore ) {
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
	// Pass the contents of a watched input element to this[key]
	update: function(key, watchedElementIndex) {
		this[key] = this.watchedElements[watchedElementIndex].value.flat(Infinity);
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
		buildResultCards(filteredResults, outputContainer);
	},
	// Add event listeners to each input element to be watched for changes
	watch: function(outputContainer) {
		// Add event listener to each watched element
		for (let i=0; i< this.watchedElements.length; i++) {
			this.watchedElements[i].addEventListener('sl-change', event => {
				//let filteredResults = this.searchResults.hits;
				let key = this.watchedElements[i].id;
				// Update this.key with value of watched element with matching ID
				this.update(key, i);
				this.isEmpty && !this.searchResults ? null : this.render(this.searchResults, outputContainer);
			})
		}
	}
};
