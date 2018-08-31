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
    this.setState({
      name: e.currentTarget.value
    })
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
  
  render(){
    return(
      <form onSubmit={this.props.addTaco.bind(this, this.state)}>
        <span>
          <label>
            Taco:
            <input type="text" name="name" onChange={this.updateTaco}/>
          </label>
        </span>
          <input type='Submit'/>
      </form>
      
    )
  }
}

export default CreateTaco;