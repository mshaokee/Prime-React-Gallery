import React, { Component } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList'
import Axios from 'axios';

class App extends Component {
  //create state to hold empty array, will hold gallery
  state = {
    images: []
  }

  //will always re-render
  componentDidMount(){
    console.log('in componentDidMount');
    this.getImages();
  };//end componentDidMount

  addLike = () => {
    console.log('clicked Like!');
    //Call PUT
    Axios({
      method: 'PUT',
      url: `./gallery/like/:id`
    }).then( response => {
      this.getImages();
    }).catch( error => {
      console.log(error);
      alert('Error in Axios PUT')
    });//end axios
  };//end addLike

  getImages = () =>  {
    console.log('in getImages');
    //call GET axios from "DB"
    Axios({
      method: 'GET',
      url: '/gallery'
    }).then((response) =>{
      //we want data from our response, then put inside of our empty array
      console.log(response.data);
      this.setState({
        images: response.data
      })
    }).catch((error) => {
      console.log(error);
      alert('Error. Check Console')
    });//end Axios
  };//end getImages

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        {/* call GalleryList to DOM */}
        {/* give props targeting images which should now have our gallery */}
        <GalleryList pictures={this.state.images}
                     
        />
      </div>
    );
  }
}

export default App;
