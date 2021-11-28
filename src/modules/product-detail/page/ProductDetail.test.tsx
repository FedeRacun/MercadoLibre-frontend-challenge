import {render, screen} from '@testing-library/react';
import ProductDetail from './ProductDetail';

describe('Products List Test: ', () => {
  test('should response algo', () => {
    render(<ProductDetail />);
  });
});
