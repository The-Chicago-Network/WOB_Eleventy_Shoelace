import { tagData } from './tagData.js';
import { spacesOrUnderscores } from './spacesOrUnderscores.js'

export const populateSelect = (targetSelectID) => {
	for (let i = 0; i < tagData.categories[targetSelectID].tags.length; i++) {
		const selectItem = document.querySelector('.filters');
		const item = selectItem.content.cloneNode(true);
		const filterContainer = document.querySelector(`#${targetSelectID}`);
		const displayname = tagData.categories[targetSelectID].tags[i].displayName;

		item.querySelector('sl-option').setAttribute('value', spacesOrUnderscores(displayname)); // sl-option values cannot contain spaces, so spacesOrUnderscores() will swap them to underscores
		item.querySelector('sl-option').innerHTML = `${displayname}`;

		filterContainer.appendChild(item);
	}
}
