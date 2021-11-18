const notes = require('../../mockdata/dummy-data-reviewnotes')

exports.getNotes = async (req, res) => {
  res.status(200).json({
    status: 'success',
    results: notes.length,
    data: {
      notes
    },
 });
}