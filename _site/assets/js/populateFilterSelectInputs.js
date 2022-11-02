import { tagData } from './tagData.js';

export const populateSelect = (targetSelectID) => {
	for (let i=0; i<tagData.categories[targetSelectID].tags.length; i++) {
		const selectItem = document.querySelector('.filters');
		const item = selectItem.content.cloneNode(true);
		const filterContainer = document.querySelector(`#${targetSelectID}`);
		const displayname = tagData.categories[targetSelectID].tags[i].displayName;

		item.querySelector('sl-menu-item').setAttribute('value', displayname );
		item.querySelector('sl-menu-item').innerHTML = `${displayname}`;

		filterContainer.appendChild(item);
	}
}
