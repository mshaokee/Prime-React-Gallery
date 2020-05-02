import React, {Component} from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'

class GalleryList extends Component{
    componentDidMount(){
        console.log('GalleryList mounted', this.props.pictures);
    };//end componentDidMount

    render(){
        return(
            <div>
                <h1>Shaokee Moua presents: The Gallery!</h1>
                <GalleryItem />
            </div>
        );//end return
    };//end render
};//end class

export default GalleryList;