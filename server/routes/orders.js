const { Router } = require('express');
const { getOrders } = require('../controller/ordersController');

const router = Router();

router.route('/')
  .get(getOrders);

module.exports = router;
