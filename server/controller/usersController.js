const { Users } = require('../db/models');

const getUsers = (req, res) => {
  Users.findAll()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => console.log(error));
};

module.exports = { getUsers };
