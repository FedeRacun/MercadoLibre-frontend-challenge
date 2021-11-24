export default interface ProductDetailInterface {
  condition: string;
  description: string;
  free_shipping: boolean;
  id: string;
  picture: string;
  price: {
    amount: number;
    currency: string;
    decimals: number;
  };
  sold_quantity: number;
  title: string;
}
