const numberWithDots = require('../utils/numberWithDots');

const searchModel = data => {
  if (data.results == '' || undefined || null) {
    return {
      author: {
        name: 'Federico',
        lastname: 'Knispel'
      },
      items: [],
      categories: null
    };
  }

  /**
   * La categoria puede estar tanto dentro de 'filters' como de 'available_filters',
   * como no estoy seguro por donde va a llegar, hago una busqueda recursiva por si el dia
   * de mañana esto cambia. Esta funcion recibe la respuesta de la API, la propiedad que
   * queremos buscar y nos devuelve la parte del objeto que contiene dicha propiedad
   */
  const findCategory = (response, id) => {
    if (!!response) {
      if (response['id'] === id) {
        return response;
      }

      let result;
      let prop;
      for (prop in response) {
        if (response.hasOwnProperty(prop) && typeof response[prop] === 'object') {
          result = findCategory(response[prop], id);
          if (result) {
            return result;
          }
        }
      }
      return result;
    }
  };

  /**
   * Devuelve un array con el listado de categorias a la que pertenece nuestro producto
   */
  const getFullPathCategory = category => {
    const arrayOfPath = category.values[0].path_from_root;
    let categories;

    if (!!arrayOfPath) {
      categories = arrayOfPath.map(element => element.name);

      return categories;
    }
    categories = category.values.reduce((prev, current) => (prev.results > current.results ? prev : current));
    categories = [categories.name];
    return categories;
  };

  return {
    author: {
      name: 'Federico',
      lastname: 'Knispel'
    },
    items: data.results.map(product => ({
      id: product.id,
      title: product.title,
      price: {
        currency: product.currency_id,
        amount: numberWithDots(product.price),
        decimals: parseInt(product.price.toString().slice(-2))
      },
      picture: product.thumbnail,
      condition: product.condition,
      free_shipping: product.shipping.free_shipping
    })),
    categories: getFullPathCategory(findCategory(data, 'category'))
  };
};

module.exports = searchModel;
