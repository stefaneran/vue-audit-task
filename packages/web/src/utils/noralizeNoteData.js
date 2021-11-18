function noralizeNoteData(data) {
  return data.map(item => ({
      ...item,
      id: item._id.$oid,
      assignees: item.assignees.map(assignee => assignee.$oid),
      priority: item.priority.text.toLowerCase(),
      reporterId: item.reporterId.$oid,
      createdAt: item.createdAt.$date.substr(0, 10),
      updatedAt: item.updatedAt.$date.substr(0, 10)
  }))
}

export default noralizeNoteData;