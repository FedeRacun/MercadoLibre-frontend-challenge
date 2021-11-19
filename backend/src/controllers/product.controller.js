const fetch = require('node-fetch');
const productModel = require('../models/product.model');

const productCtrl = {};

productCtrl.getProductDetail = async (req, res) => {
  let id = req.params.id;
  let baseURL = `https://api.mercadolibre.com/items/${id}`;

  try {
    let response = await fetch(baseURL);
    let data = await response.json();
    let detail = await getDetail(id);
    res.json(productModel(data, detail));
  } catch (error) {
    console.log('Ocurrio un error: ', error);
  }
};

async function getDetail(id) {
  let baseURL = `https://api.mercadolibre.com/items/${id}/description`;
  let response = await fetch(baseURL);
  let data = await response.json();
  return data.plain_text;
}

module.exports = productCtrl;
