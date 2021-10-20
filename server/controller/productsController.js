const getProducts = (req, res) => {
  res.send([{
    name: 'hamburger',
    price: 12,
  }]);
};

module.exports = { getProducts };
