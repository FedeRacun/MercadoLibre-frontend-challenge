import productsListInterface from './productsList.interfaces';

export default interface ResponseAPIInterface {
  items: productsListInterface[];
  categories: string;
  author: {name: string; lastname: string};
}
