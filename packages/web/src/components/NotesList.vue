<template>
  <v-simple-table>
    <template v-slot:default>
      <tbody>
        <tr v-for="note in notes" :key="note.id">
          <Note :note="note" />
        </tr>
      </tbody>
    </template> 
  </v-simple-table>
</template>

<script>
import Note from './Note'
export default {
  name: 'NotesList',
  props: {
    notes: Array
  },
  components: {
    Note
  }
}
</script>

<style scoped>

</style>