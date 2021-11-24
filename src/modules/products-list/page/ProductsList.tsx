import React, {useEffect, useState} from 'react';
import {useSearchParams} from 'react-router-dom';

import './ProductsList.sass';

// Components
import {LayoutItem} from '../../../shared/components/layout-item/LayoutItem';

// Intefaces
import ResponseAPIInterface from '../interfaces/responseApiList.interface';
import {SpinerComponent} from '../../../shared/components/loader-spinner/LoaderSpinner';

export const ProductsList: React.FC = () => {
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
        <div className="products-container">
          <SpinerComponent />
        </div>
      ) : products?.items.length ? (
        products?.items.map((product: any) => {
          return <LayoutItem key={product.id} product={product} />;
        })
      ) : (
        <div className="products-container">
          <span> Lo sentimos, pero no encontramos resultados para su busqueda... </span>
        </div>
      )}
    </>
  );
};
