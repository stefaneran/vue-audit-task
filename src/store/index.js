import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import defaultFilters from './defaultFilters';

Vue.use(Vuex)

const initialState = {
	notes: [],
	// Users are serialized by ID
	users: {},
	filters: { ...defaultFilters }
}

const store = new Vuex.Store({
	state: initialState,
	mutations,
	actions,
	getters
})

export default store;