import React from 'react';

import './About.css';

import NavMenu from '../../components/Menu/NavMenu.jsx'

import Footer from "../../components/Footer/Footer.jsx"

import svg from '../../images/layout1/about-illustration.svg';

export default class About extends React.Component {

  render() {


    return (
    
      <div className="about-content">
          <div className="about-header">
            <header className="header">
                <NavMenu/>
            </header>
             <h1 className="about-sobre">Sobre o projeto</h1>
          </div>
          <div className="about-projeto">
            <div className="about-aside">
              <h3>O que é</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                  sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                   Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                     Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                      invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                      At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
                    no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                sed diam voluptua. At vero eos et accusam et justo duo dolores
              </p>
            </div>
            <img src={svg} alt="Logo" className="about-svg" />
          </div>
          <h1 className="about-we">Quem somos nós</h1>
          <div className="about-team">
            <div className="about-card">
              <div className="about-team-content">
                <div className='about-simulation-foto'></div>
                <h2>Nome Sobrenome</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...
                </p>
                <div className="about-socials">
                  <a href="#"><i className="fab fa-github"></i></a>
                  <a href="#"><i className="fas fa-envelope"></i></a>
                  <a href="#"><i className="fab fa-linkedin"></i></a>
                </div>
              </div>
            </div>

            <div className="about-card">
              <div className="about-team-content">
                <div className='about-simulation-foto'></div>
                <h2>Nome Sobrenome</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...
                </p>
                <div className="about-socials">
                  <a href="#"><i class="fab fa-github"></i></a>
                  <a href="#"><i class="fas fa-envelope"></i></a>
                  <a href="#"><i class="fab fa-linkedin"></i></a>
                </div>
              </div>
            </div>

            <div className="about-card">
              <div className="about-team-content">
                <div className='about-simulation-foto'></div>
                <h2>Nome Sobrenome</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...
                </p>
                <div className="about-socials">
                  <a href="#"><i class="fab fa-github"></i></a>
                  <a href="#"><i class="fas fa-envelope"></i></a>
                  <a href="#"><i class="fab fa-linkedin"></i></a>
                </div>
              </div>
            </div>

            <div className="about-card">
              <div className="about-team-content">
                <div className='about-simulation-foto'></div>
                <h2>Nome Sobrenome</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...
                </p>
                <div className="about-socials">
                  <a href="#"><i class="fab fa-github"></i></a>
                  <a href="#"><i class="fas fa-envelope"></i></a>
                  <a href="#"><i class="fab fa-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
          <footer>
           <Footer/>
          </footer>
      </div>
    );
  };
};
