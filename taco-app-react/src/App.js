import React, { Component } from 'react';
import logo from './logo.svg';
import './index.css';
import TacoContainer from './TacoContainer';
import Login from './Login';
import {Route, Switch} from 'react-router-dom';
import Header from './Header';
import Search from './Search';
import Tacos from './Tacos';
import ShowTaco from './ShowTaco';
import SearchResults from './SearchResults'
// import Restaurant from './Restaurant'

const My404 = () => {
  return (
    <div>
      ERROR
    </div>
  )
}

const App = () => {
    return (
      <main>
      <h1>CTDB: Chicago Taco Database</h1>
        <Header />
    
       
       

        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/tacos' component={TacoContainer} />
          <Route exact path='/restaurant' component={Search} />
          <Route component={My404} />
        </Switch>
        
      </main>
    );
  }

export default App;
