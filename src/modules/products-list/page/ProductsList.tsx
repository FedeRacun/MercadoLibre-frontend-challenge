import React, {useEffect, useState} from 'react';
import {useSearchParams} from 'react-router-dom';
import {LayoutItem} from '../../../shared/components/layout-item/LayoutItem';

export const ProductsList: React.FC = () => {
  const [products, setProducts]: any = useState({items: [], categories: null, author: {name: '', lastname: ''}});
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const getData = async () => {
      const query = searchParams.get('search');
      const baseUrl = `http://localhost:4000/api/items/q=:${query}`;
      const respuesta = await fetch(baseUrl);
      const data = await respuesta.json();
      setProducts(data);
    };

    getData();
  }, [searchParams]);

  return (
    <>
      {products.items.map((product: any) => {
        return <LayoutItem product={product} />;
      })}
    </>
  );
};
