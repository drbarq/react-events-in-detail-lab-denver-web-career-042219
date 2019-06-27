// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component {

    handleClick = (event) => {
        setTimeout(this.props.onDelayedClick, this.props.delay)
        // console.log(this.props.onDelayClick(event))

    }

    
    render() {
        return(
            <React.Fragment>
            <button
                onClick={this.handleClick}
                >
                    Delay Button
                </button>
            </React.Fragment>     
        )
    }

}