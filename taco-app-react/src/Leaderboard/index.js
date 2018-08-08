import React, {Component} from 'react'

const Leaderboard = (props) => {
// DO NOT USER

  const tacoList = props.tacos.map((taco, i) => {
    return (
      <li key={taco._id}>
        <span>{taco.name}</span>
        <small>{taco.description}</small>
        <button onClick={props.upVote.bind(null, taco._id)}>Upvote</button>
        <button onClick={props.downVote.bind(null, taco._id, i)}>Downvote</button>
      </li>
      )
  });




export default Leaderboard