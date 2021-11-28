// React
import {lazy, Suspense} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

// Components
import {PageContainer} from './components/page-container/PageContainer';
import {NotFoundPage} from '../modules/not-found-page/NotFoundPage';
import {Header} from './components/header/view/Header';
import {SpinerComponent} from '../shared/components/loader-spinner/LoaderSpinner';
const ProductsList = lazy(() => import('../modules/products-list/page/ProductsList'));
const ProductDetail = lazy(() => import('../modules/product-detail/page/ProductDetail'));

export const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<SpinerComponent />}>
        <Routes>
          <Route path="/" element={<PageContainer />}>
            <Route path="items" element={<ProductsList />} />
            <Route path="items/:id" element={<ProductDetail />} />
          </Route>

          {/* Not Found Page */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
