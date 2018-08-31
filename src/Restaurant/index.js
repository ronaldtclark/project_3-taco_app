import React, {Component} from 'react';
import Search from '../Search'
import Tacos from '../Tacos'
import TacoContainer from '../TacoContainer'
import CreateTaco from '../CreateTaco'
import MapContainer from '../MapContainer'
import '../index.css'

class Restaurant extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      address: '',
      tacos: [],

    }
  }


  componentDidMount() {
    console.log(this.props.theRestaurant )
    
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


  render() {
    return(
      <div>
        
        
        <h2>Diamante Azul</h2>
        <div id="map">
        <MapContainer />
        </div>

        <h2>Tacos:</h2>
        <ul>
          <a href="http://localhost:3000/tacos/taco"><li>Taco de Asada</li></a>
          <a href="http://localhost:3000/tacos/taco"><li>Taco de Chorizo</li></a>
        </ul>

        <div id="addTaco">
          <CreateTaco addTaco={this.addTaco} />
        </div>

      </div>
    )
  }
}

export default Restaurant