import React, {Component} from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

class MapContainer extends Component {
  constructor(){
    super();
    this.state = {
      restaurants: []
    }
  }

  fetchPlaces(mapProps, map) {
    const {google} = mapProps;
    const service = new google.maps.places.PlacesService(map);
  }

  render(){
    const style = {
      width: '400px',
      height: '400px'
    }
    return (
      <Map google={this.props.google}
        style={style}
        initialCenter={{
          lat: 41.8781,
          lng: -87.6298
        }}
        onReady={this.fetchPlaces}
        visible={true}
        zoom={2}
        onClick{this.onMapClicked}>

      <Marker
        onClick={this.onMarkerClick}
        name={'Current location'} />
      </Map>
    );
  }
}


export default GoogleApiWrapper({ 
    apiKey: ('AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg')
    })(MapContainer)

