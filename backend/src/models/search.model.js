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

  const numberWithDots = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

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
    categories: data.available_filters[0].values.reduce((prev, current) => (prev.results > current.results ? prev : current))
  };
};

module.exports = searchModel;
