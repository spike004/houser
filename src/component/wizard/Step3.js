import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Step3 extends Component {
    constructor(){
        super()
        this.goBack = this.goBack.bind(this);
    }
    goBack(){
        this.props.history.goBack();
    }
    render() {
        return (
            <div>
                <button onClick={this.goBack}>Previous</button>
            </div>
        );
    }
}

export default Step3;