import React from 'react';
import { ReactComponent as Logo } from '../../images/layout1/logo-white.svg';
import HomeIcon from '../../images/layout1/icon-home.svg';
import AboutIcon from '../../images/layout1/icon-info-circle.svg';
import LoginIcon from '../../images/layout1/icon-user-alt.svg';
import LogoutIcon from '../../images/layout1/icon-power-off.svg';
import {NavLink} from 'react-router-dom';

import './NavMenu.css';

export default class NavMenu extends React.Component {

  state = {
    displayHomeButton: false,
    displayAboutButton: false,
    displayLoginButton: false,
    displayLogoutButton: false
  }

  componentDidMount (){
    if (window.location.pathname === '/'){
        this.setState({displayAboutButton: true, displayLoginButton: true});
    } else
    if (window.location.pathname === '/About'){
        this.setState({displayHomeButton: true, displayLoginButton: true});
    } else
    if (window.location.pathname === '/Login'){
        this.setState({displayHomeButton: true});
    } else
    if (window.location.pathname === '/SearchListing'){
        this.setState({displayHomeButton: true, displayLogoutButton: true});
    }
  }

  render() {
    return (
      <div className="nav-menu">
          <Logo className="logo-img" />
          <nav className="app-nav">
            <NavLink exact to="/" className={`nav-link ${this.state.displayHomeButton ? '': 'hide-link'}`} activeClassName="App-link-CurrentPage" >
                    <img src={HomeIcon} alt="Home Icon" />
                    <h2>Home</h2>
            </NavLink>
            <NavLink exact to="/About" className={`nav-link ${this.state.displayAboutButton ? '': 'hide-link'}`} activeClassName="App-link-CurrentPage" >
                    <img src={AboutIcon} alt="Sobre Icon" />
                    <h2>Sobre</h2>
            </NavLink>
            <div className="margin-between-bluepink"></div>
            <NavLink exact to="/Login" className={`nav-link blue-link ${this.state.displayLoginButton ? '': 'hide-link'}`} activeClassName="App-link-CurrentPage" >
                    <img src={LoginIcon} alt="Login Icon" />
                    <h2>Login</h2>
            </NavLink>
            <NavLink exact to="/Logout" className={`nav-link blue-link ${this.state.displayLogoutButton ? '': 'hide-link'}`} activeClassName="App-link-CurrentPage" >
                    <img src={LogoutIcon} alt="Sair Icon" />
                    <h2>Sair</h2>
            </NavLink>
          </nav>
      </div>
    );
  };
};