import noralizeNoteData from '../utils/noralizeNoteData';

const actions = {
  fetchNotes: async function(context) {
    const url = new URL("http://localhost:7000/api/notes")
    const params = { limit: 10, offset: context.state.notesOffset }
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    const response = await fetch(url, {
      method: 'GET'
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