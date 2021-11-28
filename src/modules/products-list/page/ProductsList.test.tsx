import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import ProductsList from './ProductsList';

describe('Products List Test: ', () => {
  test('should response algo', () => {
    render(
      <MemoryRouter>
        <ProductsList />
      </MemoryRouter>
    );
  });
});
