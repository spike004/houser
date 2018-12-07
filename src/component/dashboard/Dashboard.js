import React, { Component } from 'react';
import House from './../House/House';
import {Link} from 'react-router-dom';
import axios from'axios'



class Dashboard extends Component {
    state={
        properties:[]
    }
    removeProperty(id) {
        axios.delete(`/api/properties/${id}`)
        .then(()=>{
            axios.get('/api/properties').then((res)=>{
                this.setState({properties:res.data})
            })
        })
      }
    componentDidMount(){
        axios.get('/api/properties').then((response)=>{
          console.log(response)
          this.setState({properties:response.data})
        })
      }
    render() {
        let mappedProperties=this.state.properties.map((properties)=>{
        {return(
          <div>
            <p>{properties.propertyname}</p>
            <p>{properties.address}</p> 
            <p>{properties.city}</p>
            <p>{properties.state}</p>
            <p>{properties.zip}</p>
            
            <button key={properties.id} onClick={()=>this.removeProperty(`${properties.id}`)} >Remove</button>
            </div>
            
      
            
        )}})
        return (
            <div>
                <Link to='/wizard'><button>Add New Property</button></Link>

                <div></div>
                <House properties={mappedProperties}/> 
            </div>
        );
    }
}

export default Dashboard;