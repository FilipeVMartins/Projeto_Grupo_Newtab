import React from 'react';
import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom';

// lançar mensagens de aviso ao user
import { ToastContainer } from 'react-toastify';

//pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import SearchListing from './pages/SearchListing/SearchListing';

//style
import './App.css';

export default class App extends React.Component {

  render() {
    return (
      <div className="App">
      <BrowserRouter>

        {/* <header className="App-header">
          <nav className="App-nav">
            <NavLink exact to="/" className="App-link" activeClassName="App-link-CurrentPage" >
              Home
            </NavLink>
            <NavLink exact to="/About" className="App-link" activeClassName="App-link-CurrentPage" >
              About
            </NavLink>
          </nav>
        </header> 
        
        this belongs to header component (David), it's going to recieve one prop of display (none or block) for each button (total four), it's going to be imported within each page and so will the footer component.
        */}


        <Switch>
          {/* add your Route here */}
          <Route path="/" exact={true} component={Home} />
          <Route path="/About" exact={true} component={() => <About scrollFunction={'this.contentScrollPage'} />} />
          <Route path="/Login" exact={true} component={Login} />
          <Route path="/SearchListing" exact={true} component={SearchListing} />
        </Switch>

        <ToastContainer autoClose={3000} />

      </BrowserRouter>
    </div>
      );
    }
}
