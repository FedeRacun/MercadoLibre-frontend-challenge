import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import LayoutItem from './LayoutItem';

describe('Layout Item Test: ', () => {
  test('should create Layout Item component', () => {
    const mockResponse = {
      condition: 'Nuevo',
      sold_quantity: 0,
      free_shipping: true,
      id: 'MLA1114021609',
      picture: 'http://http2.mlstatic.com/D_872905-MLA46115014432_052021-I.jpg',
      price: {
        amount: '180.000',
        currency: 'ARS',
        decimals: 0
      },
      title: 'Apple iPhone 11 (128 Gb) - Morado'
    };

    render(
      <MemoryRouter>
        <LayoutItem product={mockResponse} />
      </MemoryRouter>
    );

    const titleElement = screen.getByText(/Apple iPhone 11/);
    expect(titleElement).toBeInTheDocument();
  });
});
