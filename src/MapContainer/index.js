import React, {Component} from 'react'
import Location from '../Location'
import {GoogleApiWrapper} from 'google-maps-react'
import '../index.css'

class MapContainer extends Component {
  constructor() {
    super()
    this.state = {
      latitude: 41.9849251, 
      longitude: -87.6688748
    }
  }
  render() {
    console.log(this.props.restaurants, "this is restaurants in MapContainer")
    return(
    <div className="map">
      <div style={{display: "flex", justifyContent: "center"}}>
        <div style={{height: "200px", width: "200px"}}>
          <Location google={this.props.google} latitude={this.props.latitude} longitude={this.props.longitude}/>
        </div>
      </div>
    </div>
       
    )
  }
}




export default GoogleApiWrapper({ 
    apiKey: ('AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg')
    })(MapContainer)