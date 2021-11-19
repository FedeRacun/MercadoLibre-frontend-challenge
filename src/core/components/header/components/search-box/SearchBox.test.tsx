import {render, screen} from '@testing-library/react';
import {SearchBox} from './SearchBox';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate
}));

test('renders learn react link', () => {
  render(<SearchBox />);
  const linkElement = screen.getByText(/Mercado Libre Argentina/);
  expect(linkElement).toBeInTheDocument();
});
