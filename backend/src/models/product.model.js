const productModel = (product, detail) => {
  const numberWithDots = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  return {
    author: {
      name: 'Federico',
      lastname: 'Knispel'
    },
    items: {
      id: product.id,
      title: product.title,
      price: {
        currency: product.currency_id,
        amount: numberWithDots(product.price),
        decimals: parseInt(product.price.toString().slice(-2))
      },
      picture: product.thumbnail,
      condition: product.condition === 'new' ? 'Nuevo' : 'Usado',
      free_shipping: product.shipping.free_shipping,
      sold_quantity: product.sold_quantity,
      description: detail
    }
  };
};

module.exports = productModel;
