import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import LayoutItem from './LayoutItem';

describe('Products List Test: ', () => {
  test('should response algo', () => {
    const objPrueba = {
      condition: 'string',
      free_shipping: true,
      id: 'string',
      picture: 'string',
      price: {
        amount: 'string',
        currency: 'string',
        decimals: 1
      },
      title: 'Titulo'
    };

    render(
      <MemoryRouter>
        <LayoutItem product={objPrueba} />
      </MemoryRouter>
    );

    const linkElement = screen.getByText(/Titulo/);
    expect(linkElement).toBeInTheDocument();
  });
});
