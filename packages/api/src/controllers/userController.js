const users = require('../../mockdata/dummy-data-users')

exports.getUsers = async (req, res) => {
  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users
    },
 });
}