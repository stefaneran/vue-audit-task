function capitalizeWord(word) {
  return `${word.charAt(0).toUpperCase()}${word.slice(1, word.length)}`
}

function parseSectionRef(sectionRef) {
  if (!sectionRef) return '';
  const stringSplit = sectionRef.split('-');
  // 'app' will always be the first word, so we remove it from the start
  stringSplit.shift();
  return stringSplit.reduce((acc = '', word) => `${acc} ${capitalizeWord(word)}`, '')
}

export default parseSectionRef;