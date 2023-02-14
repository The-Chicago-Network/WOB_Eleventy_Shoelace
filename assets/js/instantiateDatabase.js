import { create, insert, remove, search } from "../../node_modules/@lyrasearch/lyra/dist/index.js";

export const profiles = await create({
	schema: {
		name: 'string',
		profileID: 'string',
		currentTitle: 'string',
		currentOrg: 'string',
		bio: 'string',
		smallHeadshotPath: 'string',
		largeHeadshotPath: 'string',
		tags_experience: 'string',
		tags_current_industries: 'string',
		tags_current_position: 'string',
		tags_past_industries: 'string',
		tags_past_position: 'string',
		tags_current_board_service: 'string',
		tags_past_board_service: 'string',
		boards_current_corporate_private: 'string',
		boards_current_corporate_public: 'string',
		boards_current_nonprofit: 'string',
		boards_current_privateequity: 'string',
		boards_current_spac: 'string',
		boards_current_vc: 'string',
		boards_past_corporate_private: 'string',
		boards_past_corporate_public: 'string',
		boards_past_nonprofit: 'string',
		boards_past_privateequity: 'string',
		boards_past_spac: 'string',
		boards_past_vc: 'string'
	},
});
