// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

    handleClick = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }
    
    render() {
        return(
            <React.Fragment>
                <button
                    onClick={this.handleClick}
                    >
                        Cords
                    </button>
            </React.Fragment>
        )
    }
}
