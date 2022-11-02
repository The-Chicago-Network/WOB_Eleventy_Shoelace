import { htmlDecode } from './htmlDecode.js';

// Build result cards
export const buildResultCards = (resultArray, resultsContainer) => {
	resultArray.forEach(x => {
		const resultTemplate = document.querySelector('.result');
		const result = resultTemplate.content.cloneNode(true);

		// Add unique info from searchResult
		result.querySelector('.resultHeader').innerHTML += `${x.name}`;
		result.querySelector('sl-avatar').setAttribute("image", `${x.smallHeadshotPath}`);
		result.querySelector('sl-button').setAttribute("href",`/profiles/${x.profileID}`);
		result.querySelector('.card-overview').innerHTML += `${htmlDecode(x.bio.slice(0, 450))}...`;
		resultsContainer.appendChild(result);
	});
}
