import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TacoContainer from './TacoContainer';
import Login from './Login';
import {Route, Switch} from 'react-router-dom';
import Header from './Header';
// import Leaderboard from './Leaderboard'
import Search from './Search'

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
        <Header />
    
        <Search />
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/tacos' component={TacoContainer} />
          <Route component={My404} />
        </Switch>
      </main>
    );
  }

export default App;
