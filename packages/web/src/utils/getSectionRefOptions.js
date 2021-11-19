import parseSectionRef from './parseSectionRef';

// Looks through notes to pick up all existing section ref types which dynamically generates options for the filter
function getSectionRefOptions(notes) {
  const sectionRefs = [];
  const options = [];
  notes.forEach(note => {
    const { sectionRef } = note;
    if (sectionRef && sectionRef.length && !sectionRefs.includes(sectionRef)) {
      sectionRefs.push(sectionRef);
      options.push({
        text: parseSectionRef(sectionRef),
        value: sectionRef
      })
    }
  });
  return options;
}

export default getSectionRefOptions;