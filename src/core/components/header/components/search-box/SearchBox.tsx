import React from 'react';
import {useNavigate} from 'react-router-dom';
import './SearchBox.sass';

export const SearchBox: React.FC = () => {
  let navigate = useNavigate();

  function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    const query = event.target['query'].value;
    navigate(`items?search=${query}`);
  }

  return (
    <>
      <div className="nav-header--container">
        <a className="nav-header--logo" href="/">
          Mercado Libre Argentina - Donde compras y vendes de todo
        </a>
        <form onSubmit={handleSubmit} className="navbar-header--searchbox">
          <input name="query" type="text" placeholder="Busca productos, marcas y mas..." className="searchbox-input" />
          <button className="searchbox-input--button"></button>
        </form>
      </div>
    </>
  );
};
