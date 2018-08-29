import React, { Component } from 'react';
import './index.css';
import TacoContainer from './TacoContainer';
import Login from './Login';
import {Route, Switch} from 'react-router-dom';
import Header from './Header';
import Search from './Search';
import Tacos from './Tacos';
// import ShowTaco from './ShowTaco';
import SearchResults from './SearchResults'
// import Restaurant from './Restaurant'

const My404 = () => {
  return (
    <div>
      ERROR
    </div>
  )
}

class App extends Component {
  constructor(){
    super()
    this.state = {
      restaurants: [],
      tacos:[],
      username: '',
      userId: '',
      loggedIn: false,
      loginFail: false,
      registerFail: false,
    }
  }

  login = async (userLogin) => {
    const user = {
      username: userLogin.username,
      password: userLogin.password
    }
    try {
      const foundUserData = await fetch('http://localhost:8000/auth/login', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const foundUser = await foundUserData.json()
        if(foundUser.status === 200) {
          this.setState({
            username: foundUser.data.username,
            userId: foundUser.data.id,
            loggedIn: true
          })
        } else {
          this.setState({
            loginFail: true
          })
        }
    } catch(err) {
      return err
    }
  }

  register = async (registrationForm) => {
    try {
      const registrationData = await fetch('http://localhost:8000/auth/register', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const registration = await registrationData.json()
        if (registration.status === 200) {
          this.setState({
            username: registration.data.username,
            userId: registration.data.id, 
            loggedIn: true
          })
        } else {
          this.setState({
            registerFail: true
          })
        }
    } catch(err) {
      return err
    }
  }

  render() {  
    return (
      <main>
      <h1>CTDB: Chicago Taco Database</h1>
        <Header />
    
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/tacos' component={TacoContainer} />
          <Route exact path='/tacos/:id' component={Tacos} />
          <Route exact path='/restaurant' component={Search} />
          <Route component={My404} />
        </Switch>
        
      </main>
    );
  }
}  

export default App;
