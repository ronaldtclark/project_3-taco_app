import React, {Component} from 'react';
import '../index.css'


class Login extends Component{
  constructor(){
    super();
    this.state = {
      username: '',
      password: ''
    }
  }


  handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const loginResponse = await fetch('http://localhost:8000/auth/login', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const parsedResponse = await loginResponse.json();

      if(parsedResponse.data = 'login successful'){
        this.props.history.push('/tacos');
      }

      console.log(parsedResponse, ' this is express api response');
    } catch (err) {
      return err
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  render(){
    return(
      <form id="login" onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input type='text' name='username' onChange={this.handleChange}/>
        </label>
        <label>
          Password:
          <input type='password' name='password' onChange={this.handleChange}/>
        </label>
        <input type='submit' value='Login'/>
      </form>
      )
  }

}

export default Login;