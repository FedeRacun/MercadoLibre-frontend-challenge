// Sass
import './ProductDetail.sass';

// React
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

// Components
import {SpinerComponent} from '../../../shared/components/loader-spinner/LoaderSpinner';

// Interfaces
import ProductDetailInterface from '../interfaces/productDetail.interfaces';
import ResponseAPIDetailInterface from '../interfaces/responseApiDetail.interfaces';

export default function ProductDetail() {
  const [isLoading, setLoading] = useState<boolean>();
  const [product, setProduct] = useState<ProductDetailInterface>();
  const {id} = useParams();

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const baseUrl = `http://localhost:4000/api/items/${id}`;
      const respuesta = await fetch(baseUrl);
      const data: ResponseAPIDetailInterface = await respuesta.json();
      setProduct(data.items);
      setLoading(false);
    };

    getData();
  }, [id]);

  return (
    <div className="product-detail-container">
      {!isLoading && !!product?.id ? (
        <div className="product-container">
          <section className="section-product--buy">
            <picture>
              <img loading="lazy" src={product.picture} alt={product.title} height={680} width={680} />
            </picture>

            <div className="section-product--specs">
              <div className="specs-container">
                <div className="product-status">
                  <span>{product.condition} - </span>
                  <span>{product.sold_quantity} vendidos</span>
                </div>

                <div className="product-title">
                  <span>{product.title}</span>
                </div>

                <div className="product-price">
                  <span className="product-price--amount">${product.price.amount}</span>

                  <span className="product-price--decimals">{product.price.decimals ? ',' + product.price.decimals : null}</span>
                </div>
              </div>

              <div className="button-container">
                <button className="button-comprar" aria-label="Comprar">
                  Comprar
                </button>
              </div>
            </div>
          </section>

          <section className="section-detail">
            <span className="section-detail--title">Descripcion del producto</span>

            <div className="section-detail--description">
              <span>{product.description}</span>
            </div>
          </section>
        </div>
      ) : (
        <SpinerComponent />
      )}
    </div>
  );
}
