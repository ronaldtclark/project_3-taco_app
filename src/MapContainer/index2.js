import React from 'react'
import EatHere from '../Location'
import {GoogleApiWrapper} from 'google-maps-react'

class MapContainer extends Component {
  contructor() {
    super()
    this.state = {
      restaurants: []
    }
  }
  render() {
    console.log(this.props.restaurants, "this is restaurants in MapContainer")
    return(
      <EatHere google={this.props.google} restaurants={this.props.restaurants}/>
    )
  }
}




export default GoogleApiWrapper({ 
    apiKey: ('AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg')
    })(MapContainer)