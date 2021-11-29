import ProductsListInterface from './productsList.interfaces';

export default interface ResponseAPIInterface {
  items: ProductsListInterface[];
  categories: string[];
  author: {name: string; lastname: string};
}
