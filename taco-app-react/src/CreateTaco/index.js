import React, {Component} from 'react';

class CreateTaco extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      restaurant: ''
    }
  }
  updateTaco = (e) => {
    this.setState({[e.currentTarget.name]: e.currentTarget.value});
  }


  render(){
    return(
      <form onSubmit={this.props.addTaco.bind(this, this.state)}>
        <label>
          Taco:
          <input type="text" name="name" onChange={this.updateTaco}/>
        </label>
        <label>
          Restaurant:
          <input type="text" name="restaurant" onChange={this.updateTaco}/>
        </label>
        <input type='Submit'/>
      </form>
    )
  }
}

export default CreateTaco;