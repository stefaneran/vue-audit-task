import dummyNotes from '../../mockdata/dummy-data-reviewnotes';
import dummyUsers from '../../mockdata/dummy-data-users';
import noralizeNoteData from '../utils/noralizeNoteData';

const actions = {
  fetchNotes(context) {
    setTimeout(() => {
      const normalized = noralizeNoteData(dummyNotes);
      context.commit('saveFetchedNotes', normalized);
    }, 200)
  },
  fetchUsers(context) {
    setTimeout(() => {
      context.commit('saveFetchedUsers', dummyUsers)
    }, 200)
  }
}

export default actions;