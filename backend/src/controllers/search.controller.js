const fetch = require('node-fetch');
const searchModel = require('../models/search.model');
const searchCtrl = {};

/**
 * Obtengo la data de la API y se la envio al model antes de responder al front
 */
searchCtrl.getSearch = async (req, res) => {
  let query = req.params.query;
  let baseURL = `https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=4`;

  try {
    let response = await fetch(baseURL);
    let data = await response.json();
    res.json(await searchModel(data));
  } catch (error) {
    console.error('Ocurrio un error: ', error);
    res.status(500).send('Ocurrio un error al consultar a la API de MeLi', error);
  }
};

module.exports = searchCtrl;
