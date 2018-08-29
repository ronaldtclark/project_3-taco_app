import React from 'react';
import '../index.css'


const Tacos = (props) => {
  console.log(props, " this is props in Tacos component")
  // this is now your 
  
   const tacoList = props.tacos.map((taco, i) => {

    console.log()
      return (
        <div id="leaderboard">
          <li key={taco._id}>
            <span class="rating">{taco.rating}</span>
            <span class="name">{taco.name}</span>
            <span class="restaurant">{taco.restaurant}</span>
            <button onClick={props.upVote.bind(null, taco)}>Upvote</button>
            <button onClick={props.downVote.bind(null, taco._id, i)}>Downvote</button>
          </li>
        </div>
      )
    });
  
  return(
    <ul>
      {tacoList}
    </ul>
  )
}

export default Tacos;

