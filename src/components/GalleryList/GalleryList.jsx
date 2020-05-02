import React, {Component} from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'

class GalleryList extends Component{
    componentDidMount(){
        console.log('GalleryList mounted');
    };//end componentDidMount

    render(){
        return(
            <>
                <h1>Shaokee Moua presents: The Gallery!</h1>
                {/* test to see if array is working properly! */}
                {/* <h1>TEST{JSON.stringify(this.props.pictures)}</h1> */}
                {/* map, for each photo. return photos. */}
                {this.props.pictures.map( (photo, index)=>
                <div key={index}>
                    <GalleryItem singlePic={photo}
              
                    />
                </div>)}
            </>
        );//end return
    };//end render
};//end class

export default GalleryList;
