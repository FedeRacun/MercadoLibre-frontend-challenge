import {render, screen} from '@testing-library/react';
import ProductDetail from './ProductDetail';

describe('Product Detail Test: ', () => {
  test('should render ProductDetail component', () => {
    render(<ProductDetail />);
    const linkElement = screen.getByText(/Cargando.../);
    expect(linkElement).toBeInTheDocument();
  });
});
