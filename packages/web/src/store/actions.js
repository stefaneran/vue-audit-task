import noralizeNoteData from '../utils/noralizeNoteData';

const actions = {
  fetchNotes: async function(context) {
    const response = await fetch('http://localhost:7000/api/notes', {
      method: 'GET',
    });
    const responseData = await response.json();
    const normalized = noralizeNoteData(responseData.data.notes);
    context.commit('saveFetchedNotes', normalized);
  },
  fetchUsers: async function(context) {
    const response = await fetch('http://localhost:7000/api/users', {
      method: 'GET',
    });
    const responseData = await response.json();
    context.commit('saveFetchedUsers', responseData.data.users);
  }
}

export default actions;