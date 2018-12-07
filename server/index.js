require('dotenv').config()
// const ctrl =require('./controller');
const express=require('express');
const bodyParser=require('body-parser');
const config=require('./controller')
const app = express();
const massive = require('massive');

app.use(bodyParser.json())

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.listen(`${config.port}`, () => {
        console.log('listening')
    })
    app.set('db', dbInstance)
    console.log('connected to the db')

})

app.get('/api/properties',(req,res)=>{
    const dbInstance=req.app.get('db')
    dbInstance.getAllProperties()
    .then((properties)=>{
        res.status(200).send(properties)
    })
})

app.post('/api/properties',(req,res)=>{
    const dbInstance=req.app.get('db');
    const {propertyname,address,city,state,zip}=req.body;
    dbInstance.createProperty(propertyname,address,city,state,zip)
    .then((property)=>{
        res.status(201).send(property[0])
    })
})

app.put('/api/properties/:id', (req,res)=>{
    const dbInstance=req.app.get('db');
    const {propertyname,address,city,state,zip}=req.body;
    const {id}=req.params;
    dbInstance.updateProduct(id,propertyname,address,city,state,zip)
    .then(()=>{
        res.sendStatus(200);
    })
})

app.delete('/api/properties/:id',(req,res)=>{
    const dbInstance=req.app.get('db');
    const {id}=req.params;
    dbInstance.deleteProperty(id)
    .then(()=>{
        res.sendStatus(200);
    })
})
