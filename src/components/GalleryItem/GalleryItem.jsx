import React, { Component } from 'react';

class GalleryItem extends Component {
    componentDidMount() {
        console.log('GalleryItem mounted');
    };//end componentDidMount

    render() {
        return (
            <h1>TEST ITEM</h1>
        );//end return
    };//end render
};//end class

export default GalleryItem;