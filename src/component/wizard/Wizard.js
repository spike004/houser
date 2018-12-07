import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios'
import Step2 from './Step2'
class Wizard extends Component {
    state = {

        propertyname: '',
        address: '',
        city: '',
        state: '',
        zip:0,
        id:0,
        redirect:false

    }
      handlePropertyName(event){
       this.setState({propertyname:event.target.value})
       console.log(this.state.propertyname)
   }
      handleAddress(event){
       this.setState({address:event.target.value})
   }
      handleCity(event){
       this.setState({city:event.target.value})
   }
      handleState(event){
       this.setState({state:event.target.value})
   }
      handleZip(event){
       this.setState({zip:event.target.value})
   }
   
    createProperty(){
        let {propertyname,address,city,state,zip}=this.state;
            axios.post('/api/properties',{propertyname,address,city,state,zip}).then((res)=>{
                this.setState({propertyname:res.data, address:res.data,city:res.data,state:res.data,zip:res.data})
            }).then(()=>{
                this.setState({redirect:true})
            })
    }
                   
                
                 
    
   
    render() {
        const {redirect}=this.state;
        if(redirect){
            return <Redirect to='/'/>
        }

        return (
            <div>
                <h1>Name</h1>
                <input className="propertyname"  onChange={(e)=> this.handlePropertyName(e)}></input>
                <h1>Address</h1>
                <input className="address" onChange={(e)=>this.handleAddress(e)}></input>
                <h1>City</h1>
                <input className="city" onChange={(e)=>this.handleCity(e)}></input>
                <h1>state</h1>
                <input className="state" onChange={(e)=>this.handleState(e)}></input>
                <h1>zip</h1>
                <input className="zip" onChange={(e)=>this.handleZip(e)}></input>
               <Link to ='/wizard/step2'>
                <button>Next</button></Link>
                <button onClick={()=>this.createProperty()}>Complete</button>
                <Link to='/'><button>Cancel</button></Link>
            </div>
        );
    } 
} 

export default Wizard;