// React
import React, {Suspense, useEffect, useState} from 'react';
import {useSearchParams} from 'react-router-dom';

// SASS
import './ProductsList.sass';

// Intefaces
import ResponseAPIInterface from '../interfaces/responseApiList.interface';

// Components
import {SpinerComponent} from '../../../shared/components/loader-spinner/LoaderSpinner';
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

  return (
    <>
      {isLoading ? (
        <SpinerComponent />
      ) : products?.items.length ? (
        products.items.map((product: any) => {
          return (
            <Suspense fallback={<SpinerComponent />}>
              <LayoutItem key={product.id} product={product} />
            </Suspense>
          );
        })
      ) : (
        <div className="products-container">
          <span> Lo sentimos, pero no encontramos resultados para su busqueda... </span>
        </div>
      )}
    </>
  );
}
