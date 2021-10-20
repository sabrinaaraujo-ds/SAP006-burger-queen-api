const { Router } = require('express');
const { getProducts } = require('../controller/productsController');

const router = Router();

router.route('/')
  .get(getProducts);

module.exports = router;
