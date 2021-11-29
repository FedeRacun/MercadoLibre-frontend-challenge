const fetch = require('node-fetch');
const productModel = require('../models/product.model');

const productCtrl = {};

/**
 * Obtengo los detalles del producto
 */
async function getDetail(id) {
  const baseURL = `https://api.mercadolibre.com/items/${id}/description`;
  const response = await fetch(baseURL);
  const data = await response.json();
  return data.plain_text;
}

/**
 * Obtengo el nombre de la categoria a la que pertenece el producto
 */
async function getCategoryName(categoryId) {
  const baseURL = `https://api.mercadolibre.com/categories/${categoryId}`;
  const response = await fetch(baseURL);
  const data = await response.json();
  return data.name;
}

/**
 * Junto los detalles de la publicacion, con el nombre de la categoria
 * y los detalles del producto y se lo envio al Model para que tenga la
 * estructura deseada
 */
productCtrl.getProductDetail = async (req, res) => {
  const id = req.params.id;
  const baseURL = `https://api.mercadolibre.com/items/${id}`;

  try {
    const response = await fetch(baseURL);
    const data = await response.json();
    const detail = await getDetail(id);

    data.category = await getCategoryName(data.category_id);
    res.json(productModel(data, detail));
  } catch (error) {
    console.log('Ocurrio un error: ', error);
  }
};

module.exports = productCtrl;
