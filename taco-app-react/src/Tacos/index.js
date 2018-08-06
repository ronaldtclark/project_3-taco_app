import React from 'react';

const Tacos = (props) => {
  const tacoList = props.tacos.map((taco, i) => {
    return (
      <li key={taco._id}>
        <span>{taco.name}</span>
        <small>{taco.restaurant}</small>
        <button onClick={props.deleteTaco.bind(null, taco._id)}>Delete</button>
        <button onClick={props.showModal.bind(null, taco._id, i)}>Edit</button>
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