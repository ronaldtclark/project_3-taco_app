import React, { Component } from 'react';
import './index.css';
import TacoContainer from './TacoContainer';
import Login from './Login';
import Register from './Register';
import {Route, Switch} from 'react-router-dom';
import Header from './Header';
import Search from './Search';
// import Tacos from './Tacos';
import MapContainer from './MapContainer';
// import ShowTaco from './ShowTaco';
import Restaurant from './Restaurant'

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
      theRestaurant: null,
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

  addTaco = async (taco, e) => {
    e.preventDefault();
    try {
      const createTaco = await fetch('http://localhost:8000/tacos', { 
        method: 'POST',
        body: JSON.stringify(taco),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const parsedResponse = await createTaco.json(); 
      this.setState({tacos: [...this.state.tacos, parsedResponse.data]})
    } catch(err) {
      console.log(err);
    }
  }

  restaurantInfo = (theOne) => {
    this.setState({ theRestaurant: theOne })
    console.log(this.state.theRestaurant, "this is theRestaurant in App")
  }

  render() {  
    return (
      <main>
      <h1>CTDB: Chicago Taco Database</h1>
        <Header />
        

        <Switch>
          <Route exact path='/auth/login' component={Login} />
          <Route exact path='/auth/register' component={Register} />
          <Route exact path='/tacos' component={TacoContainer} />

          <Route exact path='/search' component={Search} />
          <Route exact path='/restaurant' component={Restaurant} />
          <Route component={My404} />
        </Switch>
        

        
      
      </main>
    );
  }
}  

export default App;
