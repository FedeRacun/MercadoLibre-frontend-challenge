import {render, screen} from '@testing-library/react';
import {SearchBox} from './SearchBox';
import {MemoryRouter} from 'react-router-dom';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate
}));

test('renders learn react link', () => {
  render(
    <MemoryRouter>
      <SearchBox />
    </MemoryRouter>
  );
  const linkElement = screen.getByText(/Mercado Libre Argentina/);
  expect(linkElement).toBeInTheDocument();
});
