import React, { Component } from 'react';

class GalleryItem extends Component {

    

    componentDidMount() {
        console.log('GalleryItem mounted');
    };//end componentDidMount

    handleClick = () => {
        console.log('clicking description');
        
    };//end handleClick

    render() {
        return (
            <>
                {/* render images */}
                <img
                    className="photo"
                    key={this.props.singlePic.id}
                    src={this.props.singlePic.path}
                    alt={this.props.singlePic.description}
                />
                <button onClick={this.handleClick}>Description</button>
                {/* if user clicks, show description */}


            </>
        );//end return
    };//end render
};//end class

export default GalleryItem;

