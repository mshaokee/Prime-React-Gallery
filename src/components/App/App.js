import React, { Component } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList'
import Axios from 'axios';

class App extends Component {

  componentDidMount(){
    console.log('in componentDidMount');
    this.getImages();
  };//end componentDidMount

  getImages = () =>  {
    console.log('in getImages');
    Axios({
      method: 'GET',
      url: '/gallery'
    }).then((response) =>{
      console.log(response.data);
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
        <GalleryList />
      </div>
    );
  }
}

export default App;
