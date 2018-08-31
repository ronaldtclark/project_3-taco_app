import React from 'react'
import {Map, Marker} from 'google-maps-react'
import Search from '../Search'
import '../index.css'

const Location = (props) => {
  console.log(props, "this is Location props")
  const style = {
      width: '200px',
      height: '200px',
    }
  const eatHere = (restaurant, index) => {
    const name = 'Diamante Azul'
    const latitude = this.props.latitude
    const longitude = this.props.longitude
    // console.log(name, latitude, longitude)
    return <Marker key={index} name={name} position={{lat: latitude, lng: longitude}}/>
  }
  return (
    <Map google={props.google} style={style}>
      {eatHere}
    </Map>
    )
}

export default Location;