import React, {Component} from 'react'

class Register extends Component {
  constructor(){
    super()
    this.state = {
      username: '',
      password: '',

    }
  }

  handleSubmit = async (e) => {
    const theBody = JSON.stringify(this.state)
    e.preventDefault()
    try {
      const registerResponse = await fetch('http://localhost:8000/auth/register', {
        method: 'POST',
        credentials: 'include',
        body: theBody,
        header: {
          'Content-Type': 'application/json'
        }
      })
      const registerResponseJSON = await registerResponse.json()
      console.log(registerResponseJSON, 'this is registerResponseJSON')
      // some shit here about this.props.register and registerResponseJSON.userId
      
    } catch(err) {
      console.log(err)
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render(){
    return(
      <form id="register" onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input type='text' name='username' onChange={this.handleChange}/>
        </label>
        <label>
          Password:
          <input type='password' name='password' onChange={this.handleChange}/>
        </label>
        <input type='submit' value='Register' />
      </form>
      )
  }


 

}

export default Register