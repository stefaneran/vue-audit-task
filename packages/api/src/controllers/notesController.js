const notes = require('../../mockdata/dummy-data-reviewnotes')

exports.getNotes = async (req, res) => {
  const { limit, offset } = req.query;
  // Imitate DB query with LIMIT and OFFSET
  const responseData = [];
  for (let i = offset; i < offset + limit; i++) {
    if (notes[i]) {
      responseData.push(notes[i])
    }
  }
  res.status(200).json({
    status: 'success',
    results: responseData.length,
    data: {
      notes: responseData
    },
 });
}