import React, {Component} from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'

class GalleryList extends Component{
    componentDidMount(){
        console.log('GalleryList mounted');
    };//end componentDidMount

    render(){
        return(
            <div>
                <GalleryItem />
            </div>
        );//end return
    };//end render
};//end class

export default GalleryList;