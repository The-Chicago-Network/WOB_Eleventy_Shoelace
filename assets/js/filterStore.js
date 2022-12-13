// Somewhere to store our tag filter arrays for later
export const filterStore = {
	tags_current_position: [],
	tags_past_positions: [],
	tags_experience: [],
	tags_general: [],
	tags_current_sector: [],
	tags_past_sectors: [],
	tags_current_industry: [],
	tags_past_industries: [],
	tags_current_board_service: [],
	tags_past_board_service: [],
	isEmpty: function() {
		console.log(filterStore);
		let empty = true;
		for ( const key in filterStore ) {
			if (typeof filterStore.key == 'object') {
				filterStore.key[0] ? null : empty = false;
			};
		};
		return empty;
	}
};
