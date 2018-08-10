import React, {Component} from 'react';

const EditTaco = (props) => {
  console.log(props, "this is props EditTaco")
  return(
    <div>
      <h4>Edit Taco</h4>
      <form onSubmit={props.closeAndEdit}>
        <label>
          Edit Taco Name:
          <input type="text" name="name" onChange={props.handleFormChange} value={props.tacoToEdit.name}/>
        </label>
        <label>
          <input type="text" name="restaurant" onChange={props.handleFormChange} value={props.tacoToEdit.restaurant} />
        </label>
        <input type="submit" value="Edit Taco" />
      </form>
    </div>
  )
};

export default EditTaco;