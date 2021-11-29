export default interface ProductsListInterface {
  product: {
    condition: string;
    free_shipping: boolean;
    id: string;
    picture: string;
    price: {
      amount: string;
      currency: string;
      decimals: number;
    };
    title: string;
  };
}
