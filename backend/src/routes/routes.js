const {Router} = require('express');
const router = Router();
const {getSearch} = require('../controllers/search.controller');
const {getProductDetail} = require('../controllers/product.controller');

//  BUSQUEDA
router.route('/?q=:query').get(getSearch);

//  PRODUCTO
router.route('/:id').get(getProductDetail);

module.exports = router;
