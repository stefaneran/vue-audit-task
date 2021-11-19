import defaultFilters from './defaultFilters';

const mutations = {
	saveFetchedNotes(state, payload) {
		state.notes = [...state.notes, ...payload];
		state.notesOffset += payload.length;
	},
	saveFetchedUsers(state, payload) {
		const users = {};
		payload.forEach(user => {
			users[user.id] = user
		})
		state.users = users;
	},
	updateFilter(state, { property, value }) {
		state.filters[property] = value;
	},
	clearFilters(state) {
		state.filters = { ...defaultFilters };
	}
}

export default mutations;