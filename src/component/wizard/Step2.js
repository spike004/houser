import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'
export default class Step2 extends Component{
    constructor(){
        super()
        this.goBack = this.goBack.bind(this);
    }
    state = {

       wizard:{}

    }
    goBack(){
        this.props.history.goBack();
    }
    // componentDidMount(){
    //     return (console.log(this.props.match.params))
    // }
    render(){
        return(
            <div>
                <h1>Image URL</h1>
                <input/>
                <button onClick={this.goBack}>Previous</button>
                <Link to ='/wizard/step3'><button>Next</button></Link>
            </div>
        )
    }
}