import React, { Component } from 'react';

class House extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
               <div>{this.props.properties}</div> 
            </div>
        );
    }
}

export default House;
