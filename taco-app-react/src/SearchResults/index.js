import React, {Component} from 'react'
import Search from '../Search'


class SearchResults extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
  
    return(
      <ul>
        <li><a href="#">{Search.restaurantList}</a></li>
      </ul> 


      )
  }

}










export default SearchResults