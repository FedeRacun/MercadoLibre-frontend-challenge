import ProductDetailInterface from './productDetail.interfaces';

export default interface ResponseAPIDetailInterface {
  items: ProductDetailInterface;
  author: {name: string; lastName: string};
}
