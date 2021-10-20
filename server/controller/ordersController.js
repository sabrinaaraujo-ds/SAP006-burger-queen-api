const getOrders = (req, res) => {
  res.send([{
    client_name: 'example',
    table: 1,
    products: {
      name: 'misto quente',
      qtd: 2,
    },
  }]);
};

module.exports = { getOrders };
