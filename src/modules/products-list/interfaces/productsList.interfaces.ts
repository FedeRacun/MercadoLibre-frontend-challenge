export default interface productsListInterface {
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
}
