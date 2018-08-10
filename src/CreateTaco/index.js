import React, {Component} from 'react';

class CreateTaco extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      restaurant: '',
      comments: ['']
    }
  }
  updateTaco = (e) => {
    this.setState({[e.currentTarget.name]: e.currentTarget.value});
  }

  

  render(){
    return(
      <form onSubmit={this.props.addTaco.bind(this, this.state)}>
        <span>
          <label>
            Taco:
            <input class="create" type="text" name="name" onChange={this.updateTaco}/>
          </label>
        </span>
        <span>
          <label>
            Restaurant:
            <input class="create" type="text" name="restaurant" onChange={this.updateTaco}/>
          </label>
          <input type='Submit'/>
        </span>
      </form>
      
    )
  }
}

export default CreateTaco;