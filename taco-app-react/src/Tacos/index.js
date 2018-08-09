import React from 'react';

const Tacos = (props) => {
  console.log(props, " this is props in Tacos component")
  
   const tacoList = props.tacos.map((taco, i) => {
    console.log()
      return (
        <div id="leaderboard">
          <li key={taco._id}>
            <span>{taco.rating}</span>
            <span>{taco.name}</span>
            <small>{taco.restaurant}</small>
            <button onClick={props.upVote.bind(null, taco._id, i)}>Upvote</button>
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

// <link href="https://fonts.googleapis.com/css?family=Cabin+Sketch" rel="stylesheet">