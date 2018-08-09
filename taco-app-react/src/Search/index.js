import React, {Component} from 'react'




class Search extends Component {
  constructor() {
    super()
    this.state = {
      restaurant: ''
    }
  }


  handleSubmit = async () => {
    try {
      const searchResponse = await fetch ("https://api.yelp.com/v3/businesses/search?term=" + this.state.restaurant + "&location=Chicago", {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer gr0amugCLWzgKkSCIgPZnPI8e7cRXFuEprIOGszYzUIo9JH5kWT1LMMZUkIW0tOBpywUrjmxns-zKDh5FoGsj4_SPNZG_-WDeGAzOCESd0wG9ZX5tUOXIRo4H2poW3Yx'
        }
      }) 
      const parsedResponse = await searchResponse.json()

      console.log(searchResponse)    
    } catch (err) {
      console.log(err)
    }
  }

  handleChange = (e) => {
    this.setState({
      restaurant: e.target.value
    })
  }

  render() {
    return(
      <div>
        
          <input onChange={this.handleChange} type="search" value={this.state.restaurant} placeholder="Restaurant Name" />
          <button onClick={this.handleSubmit}>Search</button>
        
      </div>
      )
  }
}



export default Search;