import React, {Component} from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'

class GalleryList extends Component{
    componentDidMount(){
        console.log('GalleryList mounted', this.props.pictures);
    };//end componentDidMount

    render(){
        return(
            <div id="GalleryList">
                <h1>Shaokee Moua presents: The Gallery!</h1>
                {/* test to see if array is working properly! */}
                {/* <h1>TEST{JSON.stringify(this.props.pictures)}</h1> */}
                {/* map, for each photo. return photos. */}
                {this.props.pictures.map( (photo)=><img 
                 className="photo" 
                 key={photo.id}
                 src={photo.path} 
                 alt={photo.description}
                />)}
                <GalleryItem />
            </div>
        );//end return
    };//end render
};//end class

export default GalleryList;