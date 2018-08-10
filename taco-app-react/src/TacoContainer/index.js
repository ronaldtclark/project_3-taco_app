import React, {Component} from 'react';
import Tacos from '../Tacos';
import CreateTaco from '../CreateTaco';
import EditTaco from '../EditTaco';
import {Route, Switch} from 'react-router-dom';



class TacoContainer extends Component {
  constructor(){
    super();
    this.state = {
      taco: '',
      tacos: [],
      showEdit: false,
      editTacoId: null,
      tacoToEdit: {
        name: '',
        restaurant: ''
      }
    }
  }


  componentDidMount(){
    this.getTacos().then((tacos) => {
      this.setState({
        tacos: tacos.data
      })
    }).catch((err) => {
      console.log(err)
    });
  }


  getTacos = async () => {
    const tacos = await fetch('http://localhost:9000/tacos', {
      credentials: 'include',
      method: 'GET'
    });
    const parsedTacos = await tacos.json();
    console.log(parsedTacos);
    return parsedTacos
  }


  addTaco = async (taco, e) => {
    e.preventDefault();
    try {
      const createTaco = await fetch('http://localhost:9000/tacos', { 
        method: 'POST',
        body: JSON.stringify(taco),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const parsedResponse = await createTaco.json(); 
      this.setState({tacos: [...this.state.tacos, parsedResponse.data]})
    } catch(err) {
      console.log(err);
    }
  }


  deleteTaco = async (id, e) => {
    e.preventDefault();
    console.log('deleteTaco function is being called, this is the id: ', id);
    try {
      const deleteTaco = await fetch('http://localhost:9000/tacos' + id, {
        method: 'DELETE'
      });
      const parsedResponse = await deleteTaco.json();
      this.setState({tacos: this.state.tacos.filter((taco, i) => taco._id !== id)});
    } catch(err){
      console.log(err);
    }
  }


  showModal = (id) => {
    const tacoToEdit = this.state.tacos.find((taco) => taco._id === id)
    this.setState({
      showEdit: true,
      editTacoId: id,
      tacoToEdit: {
        name: tacoToEdit.name,
        restaurant: tacoToEdit.restaurant
      }
    });
  }


  closeAndEdit = async (e) => {
    e.preventDefault();
    const taco = taco._id //********************************//
    console.log('close and edit')
      try {
        const editTaco = await fetch('http://localhost:9000/tacos' + this.state.editTacoId, {
          method: 'PUT',
          body: JSON.stringify(this.state.tacoToEdit),
          headers: {
            'Content-Type': 'application/json'
          }
        });

        const parsedResponse = await editTaco.json();

        const editedTacoArray = this.state.tacos.map((tacos) => {
          if(taco._id === this.state.editTacoId){
            console.log('found it! editing: ', taco)
            taco.name = parsedResponse.data.name
            taco.restaurant = parsedResponse.data.restaurant
          }
          return taco
        });

        this.setState({
          taco: editedTacoArray,
          showEdit: false
        })
      } catch(err) {
        console.log(err);
      }
  }


  handleFormChange = (e) => {
    const state = this.state;
    state.tacoToEdit[e.target.name] = e.target.value
    this.setState(state);
  }


  upVote = async (taco, e) => {
    console.log("upvote has been clicked on " + taco._id)
    const upVotedTaco = await fetch('http://localhost:9000/tacos/' + taco._id + '/upvote', { 
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(upVotedTaco)
    const parsedTaco = await upVotedTaco.json()
    console.log(parsedTaco)
    console.log(this.state.tacos)
    this.setState({tacos: parsedTaco})
  }


  downVote = async (tacoId, e) => {
    console.log("downvote has been clicked on " + tacoId)
    const downVotedTaco = await fetch('http://localhost:9000/tacos/' + tacoId + '/downvote', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const parsedTaco = await downVotedTaco.json()
    this.setState({tacos: parsedTaco})
  }


  render(){
    console.log(this.state)
    return(
      <div id="tacoContainer">
        <CreateTaco addTaco={this.addTaco} />

        <Tacos
          tacos={this.state.tacos}
          deleteTaco={this.deleteTaco}
          showModal={this.showModal}
          upVote={this.upVote}
          downVote={this.downVote}
        />


        {
          this.state.showEdit
          ?
          <EditTaco
            handleFormChange={this.handleFormChange}
            tacoToEdit={this.state.tacoToEdit}
            closeAndEdit={this.closeAndEdit}
          />
          :
          null
        }
        </div>
    )
  }
}



export default TacoContainer;



