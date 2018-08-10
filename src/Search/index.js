import React, {Component} from 'react'
import CreateTaco from '../CreateTaco'
import TacoContainer from '../TacoContainer'
import '../index.css'





class Search extends Component {
  constructor() {
    super()
    this.state = {
      restaurant: '',
      searchResults: [],
      tacos: [],
      taco: ''
    }
  }


  handleSubmit = async () => {
    try {
      const searchResponse = await fetch ("https://ctdb.herokuapp.com/tacos/search/" + this.state.restaurant, {
        method: 'GET',
      }) 
      const parsedResponse = await searchResponse.json()

      console.log(parsedResponse.businesses, "this is parsedResponse.business")
      this.setState({
        searchResults: parsedResponse.businesses
      })

    } catch (err) {
      console.log(err)
    }
  }

  addTaco = async (taco, e) => {
    e.preventDefault();
    try {
      const createTaco = await fetch('https://ctdb.herokuapp.com/tacos', { 
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

  handleChange = (e) => {
    this.setState({
      restaurant: e.target.value
    })
  }



  render(){
    console.log(this.state)
    // createa a variable of JSX by mapping over the data in state and render below 
      const restaurantList = this.state.searchResults.map((business, i) => {
        console.log(business.name, "this is business.name")
        return(
          
          <span>{restaurantList}</span>
          
        )
      })
    return(
      <div>
          <div id="restSearch">
          <input onChange={this.handleChange} type="search" value={this.state.restaurant} placeholder="Restaurant Name" />
          <button onClick={this.handleSubmit}>Search</button>
          </div>
          
            {restaurantList.name}
            <div id="addTaco">
          <CreateTaco addTaco={this.addTaco} />
            </div>
        
      </div>
      )
  }
}



export default Search;
