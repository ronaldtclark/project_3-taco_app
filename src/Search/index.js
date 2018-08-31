import React, {Component} from 'react'
import TacoContainer from '../TacoContainer'
import Restaurant from '../Restaurant'
import Location from '../Location'
import App from '../App'
import '../index.css'





class Search extends Component {
  constructor() {
    super()
    this.state = {
      restaurant: '',
      restaurants: [],
      tacos: [],
      taco: ''
    }
  }



  handleSubmit = async () => {
    try {
      const searchResponse = await fetch ('http://localhost:8000/tacos/search/' + this.state.restaurant, {
        method: 'GET'
      }) 
      const parsedResponse = await searchResponse.json()

      console.log(parsedResponse.businesses, "this is parsedResponse.business")
      this.setState({
        restaurants: parsedResponse.businesses
      })
      console.log(this.state.restaurants)
    } catch (err) {
      console.log(err)
    }
  }

  

  handleChange = (e) => {
    this.setState({
      restaurant: e.target.value
    })
  }

  chooseOne = (e) => {
    e.preventDefault()
      let theOne = this.state.restaurants[0]
      console.log(theOne, "this is the One")
      // this.props.restaurantInfo(theOne)
    // restFor Restaurant component -- 
    // set in a f passed downfrom Appjs, currentRestaurant will live in App.js
    // pass the entire restaurant iobject into the function
    }
  

  render(){
    console.log(this.state, " this is this.state in render() in Search")
    // createa a variable of JSX by mapping over the data in state and render below 
      const restaurantList = this.state.restaurants.map((business, i) => {
        return(
          
          <li key={business.id} >{business.name}</li>
          
        )
      })
    return(
      <div>
          
          <h2>--Find Restaurant--</h2>
          <div id="restSearch">
          <input onChange={this.handleChange} type="search" value={this.state.restaurant} placeholder="Restaurant Name" />
          <button onClick={this.handleSubmit}>Search</button>
          </div>

          <ul>
            <a href="http://localhost:3000/restaurant" onClick={this.chooseOne}>{restaurantList}</a>
          </ul>

         
                
      </div>
      )
  }
}



export default Search;
