const getUsers = (req, res) => {
  res.send([{
    name: 'example',
    email: 'example@example.com',
  }]);
};

module.exports = { getUsers };
