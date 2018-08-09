import React, {Component} from 'react'

const Leaderboard = (props) => {
  const taco = {
  name: "Al Pastor Taco",
  restaurant: "Big Star"
}
  render (
    // return (
      <div className="Leaderboard">
        <ul className="TacoList">
          <li className="TacoBar">
            {props.taco.name} 
            {props.taco.restaurant}
            <img src="https://i.imgur.com/uOearNP.png?1"/>
            <img src="https://i.imgur.com/7jDbAoH.png?1"/>
          </li>
        </ul>
      </div>
    )
  }






export default Leaderboard