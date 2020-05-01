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
                <img class="photo" src="../images/baitcaster.JPG" />
                <img class="photo" src="../images/blackbeach.JPG" />
                <img class="photo" src="../images/firstcar.jpg" />
                <img class="photo" src="../images/gardenofgods.JPG" />
                <img class="photo" src="../images/subaru.jpg" />
                <img class="photo" src="../images/festival.JPG" />

            </div>
        );//end return
    };//end render
};//end class

export default GalleryList;