import {search} from 'https://unpkg.com/@lyrasearch/lyra@0.3.1/dist/esm/src/lyra.js';
import { profiles } from './instantiateDatabase.js';

export const runSearch = (properties, term, resultsLimit) => {
	return search(profiles, {
		term: term,
		properties: properties,
		limit: resultsLimit
	});
}
