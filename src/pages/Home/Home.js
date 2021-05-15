import React from 'react';

import './Home.css';

import { ReactComponent as SearchIcon } from '../../images/layout1/icon-search.svg';

export default class Home extends React.Component {

  render() {
    const logo = require('../../images/layout1/hero-bg-mobile.jpg'); // with require

    return (
      <div className="home-content">

        <div className="home-header">
          <div className="home-nav" >
          </div>

          <div className="home-title-input-wrapper">
            <div className="home-header-title">
              <h1>Encontre hashtags de maneira fácil</h1>
              <h3>Digite o que deseja no campo de buscas e confira os resultados do Twitter abaixo</h3>
            </div>

            <div className="home-input-wrapper">
              <SearchIcon className="search-icon" />
              <form>
                <input placeholder="Buscar..."></input>
              </form>
            </div>
          </div>

        </div>


        <div className="home-results">
          <div className="results-title">
            <h2>Exibindo os 10 resultados mais recentes para #<span>natureza</span></h2>
          </div>

        </div>
      </div>
    );
  };
};
