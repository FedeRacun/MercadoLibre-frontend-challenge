// React
import React, {Suspense, useEffect, useState} from 'react';
import {useSearchParams} from 'react-router-dom';

// SASS
import './ProductsList.sass';

// Intefaces
import ResponseAPIInterface from '../interfaces/responseApiList.interface';
import ProductsListInterface from '../interfaces/productsList.interfaces';

// Components
import {SpinerComponent} from '../../../shared/components/loader-spinner/LoaderSpinner';
import {BreadCrumb} from '../../../shared/components/bread-crumbs/BreadCrumb';
const LayoutItem = React.lazy(() => import('../../../shared/components/layout-item/LayoutItem'));

export default function ProductsList() {
  const [isLoading, setLoading] = useState<boolean>();
  const [products, setProducts] = useState<ResponseAPIInterface>();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const query = searchParams.get('search');
      const baseUrl = `http://localhost:4000/api/items/q=:${query}`;
      const respuesta = await fetch(baseUrl);
      const data: ResponseAPIInterface = await respuesta.json();
      setProducts(data);
      setLoading(false);
    };

    getData();
  }, [searchParams]);

  // LayoutContainer with lazy loading
  const LayoutContainer: React.FC<any> = ({product}: ProductsListInterface) => (
    <Suspense fallback={<SpinerComponent />}>
      <LayoutItem product={product} />
    </Suspense>
  );

  if (isLoading) {
    return <SpinerComponent />;
  }

  if (products?.items.length) {
    return (
      <div className="products-container">
        {/* Bread Crum */}
        <div className="products-container-category">
          {products.categories.map((category, index) => {
            return <BreadCrumb key={index} category={category} />;
          })}
        </div>

        {
          // Product item
          products.items.map((product: ProductsListInterface, index: number) => (
            <LayoutContainer key={'product-' + index} product={product} />
          ))
        }
      </div>
    );
  }

  return (
    <div className="empty-result">
      <span> Lo sentimos, pero no encontramos resultados para su busqueda... </span>
    </div>
  );
}
