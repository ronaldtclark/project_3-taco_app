import React from 'react';

const Tacos = (props) => {
  console.log(props, " this is props in Tacos component")
  
   const tacoList = props.tacos.map((taco, i) => {
    console.log()

      return (
        <div id="leaderboard">
          <li key={taco._id}>
            <span>{taco.name}</span>
            <span>{taco.restaurant}</span>
            <button onClick={props.upVote.bind(null, taco._id)}>Upvote</button>
            <span>{taco.rating}</span>
            <button onClick={props.downVote.bind(null, taco._id)}>Downvote</button>
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