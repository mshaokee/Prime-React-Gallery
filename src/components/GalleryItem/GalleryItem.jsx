import React, { Component } from 'react';

class GalleryItem extends Component {

    state = {
        descriptionVisible: false //setting to false doesn't show our info first
    };//end state

    componentDidMount() {
        console.log('GalleryItem mounted');
    };//end componentDidMount

    handleClick = () => {
        console.log('clicking description');
        this.setState({
            descriptionVisible: !this.state.descriptionVisible //this way it can toggle, opposite of state
        });//end setState
    };//end handleClick



    render() {
        //log to test state on clicks
        console.log('WHAT STATE AM I IN', this.state);
        //letting our description be empty
        let details;
        //if statement, on click should change variable to our set stuff
        if(!this.state.descriptionVisible){
            details = (
                <img
                    onClick={this.handleClick}
                    className="photo"
                    key={this.props.singlePic.id}
                    src={this.props.singlePic.path}
                    alt={this.props.singlePic.description}
                />
            )
        } else if (this.state.descriptionVisible){
            details = (
                <>
                <h2>{this.props.singlePic.description}</h2>
                <button onClick={this.handleClick}>View Image</button>
                </>
            );//end details
        };//end if

        let photo = this.props.singlePic;

        return (
            <>
                {/* render images */}
                <span>{details}</span>
                {/* likes */}
                <p>Likes: {this.props.singlePic.likes}</p>
                {/* call addLike function being passed down */}
                {/* <button onClick={this.props.addLike}>Add Like</button> */}
                <button onClick={ () => this.props.addLike(photo)}>Add Like</button>
            </>
        );//end return
    };//end render
};//end class

export default GalleryItem;

