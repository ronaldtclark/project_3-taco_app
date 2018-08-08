import React from 'react';

const Tacos = (props) => {
  console.log(props, " this is props in Tacos component")
  // this is now your 
  
   const tacoList = props.tacos.map((taco, i) => {
      return (
        <li key={taco._id}>
          <span>{taco.name}</span>
          <small>{taco.restaurant}</small>
          <button onClick={props.upVote.bind(null, taco._id)}>Upvote</button>
          <button onClick={props.downVote.bind(null, taco._id, i)}>Downvote</button>
        </li>
      )
    });
  

  return(
    <ul>
      {tacoList}
    </ul>
  )
}

export default Tacos;