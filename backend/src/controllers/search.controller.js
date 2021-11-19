const fetch = require('node-fetch');
const searchModel = require('../models/search.model');
const searchCtrl = {};

searchCtrl.getSearch = async (req, res) => {
  let query = req.params.query;
  let baseURL = `https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=4`;

  try {
    let response = await fetch(baseURL);
    let data = await response.json();
    res.json(await searchModel(data));
  } catch (error) {
    console.log('Ocurrio un error: ', error);
  }
};

module.exports = searchCtrl;
