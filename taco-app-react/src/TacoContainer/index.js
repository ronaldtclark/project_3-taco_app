import React, {Component} from 'react';
import Tacos from '../Tacos';
import CreateTaco from '../CreateTaco';
import EditTaco from '../EditTaco';

// CHANGE THE WORD TITLE

class TacoContainer extends Component {
  constructor(){
    super();
    this.state = {
      taco: [],
      showEdit: false,
      editTacoId: null,
      tacoToEdit: {
        title: '',
        description: ''

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
    const parsedTacos = tacos.json();

    return parsedTacos
  }


  addTaco = async (taco, e) => {
    e.preventDefault();
    try {
      const createTaco = await fetch('http://localhost:9000/tacos', { // Might need to be createdTaco
        method: 'POST',
        body: JSON.stringify(taco),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const parsedResponse = await createTaco.json(); // createdTaco?
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
    const tacoToEdit = this.state.tacos.find((movie) => movie._id === id)
    this.setState({
      showEdit: true,
      editTacoId: id,
        title: tacoToEdit.title,
        description: tacoToEdit.description
      }
    });
  }


  closeAndEdit = async (e) => {
    e.preventDefault();
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
            taco.title = parsedResponse.data.title
            movie.description = parsedResponse.data.description
          }
          return taco
        });

        this.setState({
          movie.editedTacoArray,
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


  render(){
    return(
      <div>
        <Tacos
          tacos={this.state.tacos}
          deleteTaco={this.deleteTaco}
          showModal={this.showModal}
        />

        <CreateTaco addTaco={this.addTaco} />

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







