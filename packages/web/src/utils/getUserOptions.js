// Receives the collection of users kept in the store (serialized object) and returns them as array of label/value objects for the autocompletes
function getUserOptions(users) {
  return Object.entries(users).map(([id, user]) => ({ text: user.name, value: id }))
}

export default getUserOptions;