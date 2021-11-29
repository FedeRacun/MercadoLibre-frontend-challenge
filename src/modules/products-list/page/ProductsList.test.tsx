import {getByRole, render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import ProductsList from './ProductsList';

describe('Products List Test: ', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('Deberia mostrar el loading y luego que no se encontraron resultados', async () => {
    render(
      <MemoryRouter>
        <ProductsList />
      </MemoryRouter>
    );

    expect(await screen.findByText('Cargando...', {}, {timeout: 2000})).toBeInTheDocument();

    expect(
      await screen.findByText('Lo sentimos, pero no encontramos resultados para su busqueda...', {}, {timeout: 3000})
    ).toBeInTheDocument();
  });
});
