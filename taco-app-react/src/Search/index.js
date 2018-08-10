import React, {Component} from 'react'




class Search extends Component {
  constructor() {
    super()
    this.state = {
      restaurant: '',
      searchResults: []
    }
  }


  handleSubmit = async () => {
    try {
      const searchResponse = await fetch ("http://localhost:9000/tacos/search/" + this.state.restaurant, {
        method: 'GET',
      }) 
      const parsedResponse = await searchResponse.json()

      console.log(parsedResponse.businesses)
      this.setState({
        searchResults: parsedResponse.businesses
      })

    } catch (err) {
      console.log(err)
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
        console.log(business.name)
        return(
          <h1>{business.name}</h1>
        )
      })
    return(
      <div>
        
          <input onChange={this.handleChange} type="search" value={this.state.restaurant} placeholder="Restaurant Name" />
          <button onClick={this.handleSubmit}>Search</button>
          <ul>
            <li>{restaurantList.name}</li>
          </ul>
        
      </div>
      )
  }
}



export default Search;