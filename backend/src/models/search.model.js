const searchModel = data => {
  if (data.results == '' || undefined || null) {
    return {
      author: {
        name: 'Federico',
        lastname: 'Knispel'
      },
      items: '',
      categories: ''
    };
  }

  return {
    author: {
      name: 'Federico',
      lastname: 'Knispel'
    },
    items: data.results.map(item => ({
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: Math.round(item.price),
        decimals: parseInt(item.price.toString().slice(-2))
      },
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping
    })),
    categories: data.available_filters[0].values.reduce((prev, current) => (prev.results > current.results ? prev : current))
  };
};

module.exports = searchModel;
