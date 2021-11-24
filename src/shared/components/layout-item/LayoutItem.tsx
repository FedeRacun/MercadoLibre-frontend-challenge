// Sass
import './LayoutItem.sass';

// React Router
import {Link} from 'react-router-dom';

// Interfaces
import productsListInterface from '../../../modules/products-list/interfaces/productsList.interfaces';

export const LayoutItem: React.FC<{product: productsListInterface}> = ({product}) => {
  return (
    <>
      {
        <Link to={`/items/${product.id}`} className="layoutContainer">
          <img loading="lazy" className="layoutContainer-image" src={product.picture} alt={product.title} />

          <div>
            <div className="price-container">
              <span className="layoutContainer-price">
                $ {product.price.amount}
                {product.price.decimals ? `,${product.price.decimals}` : ''}
              </span>
              {product.free_shipping ? <div className="price-container--freeshiping">Envio Gratis</div> : null}
            </div>
            <div>
              <span className="title">{product.title}</span>
            </div>
          </div>
        </Link>
      }
    </>
  );
};
