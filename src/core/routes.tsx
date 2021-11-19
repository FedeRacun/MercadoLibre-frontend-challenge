import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {ProductDetail} from '../modules/product-detail/page/ProductDetail';
import {ProductsList} from '../modules/products-list/page/ProductsList';
import {PageContainer} from './components/page-container/PageContainer';
import {NotFoundPage} from '../modules/not-found-page/NotFoundPage';
import {Header} from './components/header/view/Header';

export const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<PageContainer />}>
          <Route path="items" element={<ProductsList />} />
          <Route path="items/:id" element={<ProductDetail />} />
        </Route>

        {/* Not Found Page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
