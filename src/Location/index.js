import React from 'react'
import {Map, Marker} from 'google-maps-react'

const EatHere = (props) => {
  console.log(props, "this is EatHere props")
  const style = {
      width: '400px',
      height: '400px'
    }
  const eatHere = props.restaurants.map((restaurant, index) => {
    const name = restaurant.name
    const latitude = restaurant.coordinates.latitude
    const longitude = business.coordinates.longitude
    console.log(name, latitude, longitude)
    return <Marker key={index} name={name} position={{lat: latitude, lng: longitude}}/>
  })
  return (
    <Map google={props.google} style={style}>
      {eatHere}
    </Map>
    )
}

export default EatHere;