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
        if(this.state.descriptionVisible){
            details = (
                <h2>{this.props.singlePic.description}</h2>
            )
        };//end if

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
                {details}

            </>
        );//end return
    };//end render
};//end class

export default GalleryItem;

