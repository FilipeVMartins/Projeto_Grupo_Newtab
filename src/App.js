import React from 'react';
import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom';


import Home from './pages/Home/Home';
import About from './pages/About/About';


import './App.css';

export default class App extends React.Component {











  render() {
    return (
      <div className="App">
      <BrowserRouter>

        <header className="App-header">
          <nav className="App-nav">
            <NavLink exact to="/" className="App-link" activeClassName="App-link-CurrentPage" >
              Home
            </NavLink>
            <NavLink exact to="/About" className="App-link" activeClassName="App-link-CurrentPage" >
              About
            </NavLink>
          </nav>
        </header>


        <div className="App-content">
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/About" exact={true} component={() => <About scrollFunction={'this.contentScrollPage'} />} />
          </Switch>
        </div>
      
        <footer className="App-footer">
            <div>
            </div>
        </footer>

      </BrowserRouter>
    </div>
      );
    }
}
