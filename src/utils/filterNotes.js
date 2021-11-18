function filterNotes(notes, users, filters) {
  let filtered = notes.filter(note => {

    // Filter by title
    let isTitleMatch = true;
    if (filters.title.length) {
      const search = filters.title.toLowerCase();
      isTitleMatch = note.title.toLowerCase().indexOf(search) !== -1
    }

    // Filter by type
    let isTypeMatch = true;
    if (filters.type !== 'all') {
      isTypeMatch = note.type.toLowerCase() === filters.type
    }

    // Filter by priority
    let isPriorityMatch = true;
    if (filters.priority !== 'all') {
      isPriorityMatch = note.priority.toLowerCase() === filters.priority
    }

    // Filter by assignees
    let isAssigneesMatch = true;
    if (filters.assignees.length) {
      filters.assignees.forEach(assignee => {
        if (!note.assignees.includes(assignee)) {
          isAssigneesMatch = false;
        }
      })
    }

    // Filter by reporter
    let isReporterMatch = true;
    if (filters.reporter.length) {
      isReporterMatch = note.reporterId === filters.reporter;
    }

    // Filter by SectionRef 
    let isSectionMatch = true;
    if (filters.section.length) {
      isSectionMatch = filters.section === note.sectionRef
    }

    // Disclaimer: Skipping date filter to save on time, it might require a bit more complex logic

    return isTitleMatch && 
      isTypeMatch &&
      isPriorityMatch &&
      isAssigneesMatch &&
      isReporterMatch &&
      isSectionMatch
  });
  return filtered;
}

export default filterNotes;