<template>
	<div>
		<div class="filters-container">
			<FilterTextInput 
				class="filter-item"
				label="Quick search"
				inputName="title" 
				:value="title" 
			/>
			<FilterTabs 
				class="filter-item"
				label="Type"
				inputName="type" 
				:value="type" 
				:options="types" 
			/>
			<FilterTabs 
				class="filter-item"
				label="Priority"
				inputName="priority" 
				:value="priority" 
				:options="priorities" 
			/>
			<FilterAutocomplete 
				class="filter-item"
				label="Reporter" 
				inputName="reporter"
				:value="reporter"
				:options="userOptions"
				:multiple="false"
			/>
			<FilterAutocomplete 
				class="filter-item"
				label="Assignees" 
				inputName="assignees"
				:value="assignees"
				:options="userOptions"
				:multiple="true"
			/>
			<FilterAutocomplete 
				class="filter-item"
				label="Section" 
				inputName="section"
				:value="section"
				:options="sectionOptions"
				:multiple="false"
			/>
			<FilterDatePicker
				class="filter-item"
				:date="date"
			/>
		</div>
		<span class="clear-filters" @click="clearFilters">Clear Applied Filters</span>
	</div>
</template>

<script>
import { mapState } from "vuex";
import FilterTextInput from './FilterInputs/FilterTextInput';
import FilterTabs from "./FilterInputs/FilterTabs";
import FilterAutocomplete from './FilterInputs/FilterAutocomplete';
import FilterDatePicker from './FilterInputs/FilterDatePicker';
import { type, priority } from "../types";
import getUserOptions from '../utils/getUserOptions'
import getSectionRefOptions from '../utils/getSectionRefOptions'

export default {
  name: "FiltersBar",
  computed: mapState({
		userOptions: state => getUserOptions(state.users),
		sectionOptions: state => getSectionRefOptions(state.notes),
    title: state => state.filters.title,
    type: state => state.filters.type,
    priority: state => state.filters.priority,
    reporter: state => state.filters.reporter,
    assignees: state => state.filters.assignees,
    section: state => state.filters.section,
    date: state => state.filters.date,
  }),
  data() {
    return {
      types: Object.entries(type),
      priorities: Object.entries(priority)
    };
  },
  methods: {
		clearFilters() {
			this.$store.commit('clearFilters');
		}
  },
  components: {
		FilterTextInput,
    FilterTabs,
		FilterAutocomplete,
		FilterDatePicker
  },
};
</script>

<style scoped>
	.filters-container {
		width: 100vw;
		max-width: 100vw;
		display: flex;
		justify-content: space-between;
		padding: 1rem;
	}
	.filter-item {
		margin-right: 1rem;
	}
	.clear-filters {
		cursor: pointer;
		text-decoration: underline;
		position: relative;
		top: -1.5rem;
		margin-left: 1rem;
	}
</style>