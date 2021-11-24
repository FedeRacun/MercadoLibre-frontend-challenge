import React from 'react';

import './SearchBox.sass';

import {Link, useNavigate} from 'react-router-dom';

export const SearchBox: React.FC = () => {
  let navigate = useNavigate();

  function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    const query = event.target['query'].value;
    navigate(`items?search=${query}`);
  }

  return (
    <>
      <div className="search-box--container">
        <Link className="search-box--logo" to={'/'}>
          Mercado Libre Argentina - Donde compras y vendes de todo
        </Link>
        <form onSubmit={handleSubmit} className="search-box--form">
          <input name="query" type="text" placeholder="Busca productos, marcas y mas..." className="searchbox-input" />
          <button className="searchbox-input--button"></button>
        </form>
      </div>
    </>
  );
};
