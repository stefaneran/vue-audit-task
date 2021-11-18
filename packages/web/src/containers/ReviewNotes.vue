<template>
  <fragment>
    <header>
      <h1>Review notes</h1>
      <ButtonWithOptions @click="clickedButton" title="New" :options="['Task', 'Note']" />
    </header>
    <FiltersBar />
    <NotesList :notes="notes" />
    <Modal 
      v-model="showModal" 
      :title="`Create new ${newNoteType}`"
      :text="`Here are fields to create a new ${newNoteType}`" 
    />
  </fragment>
</template>

<script>
import { mapState } from 'vuex';
import ButtonWithOptions from '../components/ButtonWithOptions';
import FiltersBar from '../components/FiltersBar';
import NotesList from '../components/NotesList';
import Modal from '../components/Modal';
import filterNotes from '../utils/filterNotes';
export default {
  name: 'ReviewNotes',
  computed: mapState({
    notes: state => filterNotes(state.notes, state.users, state.filters)
  }),
  data() {
    return {
      newNoteType: 'Note',
      showModal: false
    }
  },
  mounted() {
    this.$store.dispatch('fetchUsers');
    this.$store.dispatch('fetchNotes');
  },
  methods: {
    clickedButton(option) {
      this.newNoteType = option;
      this.showModal = true;
    }
  },
  components: {
    ButtonWithOptions,
    FiltersBar,
    NotesList,
    Modal
  },
}
</script>

<style scoped>
  header {
    padding: 0 1rem;
    display: flex;
  }
</style>