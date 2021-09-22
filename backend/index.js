
const express = require("express");
const cors = require("cors");
const Client = require('./models/clients');
const Enquiry=require('./models/enquiry');
const { Router } = require("express");
const ObjectId=require("mongoose").Types.ObjectId;

const mongoose = require('./db.js');

const app = express();

var corsOptions = {
  origin: "http://localhost:4200"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to  application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
  const mongoose = require('mongoose');
});

app.post('/clients',(req,res)=>{
  let clt= new Client({
      name: req.body.name,
      email:req.body.email,
      massage:req.body.massage
  });
  clt.save((err,doc)=>{
      if(err)
      {
          console.log('error in post data' +err);
      }
      else{
          res.send(doc);
      }
  })
})
//get api for clients

app.get('/clients',(req,res)=>{
    Client.find((err,doc)=>{
      if(err)
      {
          console.log('error in get data' +err);
      }
      else{
          res.send(doc);
      }    
    })
  });

// get by id
app.get('/clients/:id',(req,res)=>{
  if(ObjectId.isValid(req.params.id)){
 Client.findById(req.params.id,(err,doc)=>{
    if(err)
    {
        console.log('error in get by id data' +err);
    }
    else{
        res.send(doc);
    }    
  })
  }
  else{
    return res.status(400).send('no record found with id ' + req.params.id)
  }
 
});

//Delete Api for clients

app.delete('/clients/:id',(req,res)=>{
  
  if(ObjectId.isValid(req.params.id)){
    console.log(req.params.id);
Client.deleteOne({_id:req.params.id}).then(
  result=>{
    res.status(200).json(
      {
        message:'suceessfully deleted'
      }
    )
  }
)
.catch(err=>{
  res.status(500).json({
    message:'error'
  })
})
  }
  else{
    return res.status(400).send('no record found with id ' + req.params.id)
  }
 
});


// update Api  for clients
app.put('/clients/:id',(req,res)=>{
  if(ObjectId.isValid(req.params.id)){
    let clt= {
      name: req.body.name,
      email:req.body.email,
      massage:req.body.massage
  }
 Client.findOneAndUpdate(req.params.id,{$set:clt},{new:true},(err,doc)=>{
    if(err)
    {
        console.log('error in get by id data' +err);
    }
    else{
        res.send(doc);
    }    
  })
  }
  else{
    return res.status(400).send('no record found with id ' + req.params.id)
  }
 
});
// base path : localhost:8080/enquiry
//post api for enquiry

app.post('/enquiry',(req,res)=>{
  let enq= new Enquiry({
    name: req.body.name,
    email: req.body.email,
    height: req.body.height,
    weight:  req.body.weight,
    width: req.body.width,
    freight: req.body.freight,
    from:  req.body.from,
    to: req.body.to
  });
  enq.save((err,doc)=>{
      if(err)
      {
          console.log('error in post data' +err);
      }
      else{
          res.send(doc);
      }
  })
})

//get api for enquiry

app.get('/enquiry',(req,res)=>{
  Enquiry.find((err,doc)=>{
    if(err)
    {
        console.log('error in get data' +err);
    }
    else{
        res.send(doc);
    }    
  })
});

// get by id for enquiry
app.get('/enquiry/:id',(req,res)=>{
  if(ObjectId.isValid(req.params.id)){
 Enquiry.findById(req.params.id,(err,doc)=>{
    if(err)
    {
        console.log('error in get by id data' +err);
    }
    else{
        res.send(doc);
    }    
  })
  }
  else{
    return res.status(400).send('no record found with id ' + req.params.id)
  }
 
});

//Delete Api for enquiry

app.delete('/enquiry/:id',(req,res)=>{
  
  if(ObjectId.isValid(req.params.id)){
    console.log(req.params.id);
Enquiry.deleteOne({_id:req.params.id}).then(
  result=>{
    res.status(200).json(
      {
        message:'suceessfully deleted'
      }
    )
  }
)
.catch(err=>{
  res.status(500).json({
    message:'error'
  })
})
  }
  else{
    return res.status(400).send('no record found with id ' + req.params.id)
  }
 
});

// update Api  for enquiry
app.put('/Enquiry/:id',(req,res)=>{
  if(ObjectId.isValid(req.params.id)){
    let enq= {
      name: req.body.name,
      email: req.body.email,
      height: req.body.height,
      weight:  req.body.weight,
      width: req.body.width,
      freight: req.body.freight,
      from:  req.body.from,
      to: req.body.to
  }
 Enquiry.findOneAndUpdate(req.params.id,{$set:enq},{new:true},(err,doc)=>{
    if(err)
    {
        console.log('error in get by id data' +err);
    }
    else{
        res.send(doc);
    }    
  })
  }
  else{
    return res.status(400).send('no record found with id ' + req.params.id)
  }
 
});


app.use('./clients',Router);
app.use('./enquiry',Router);
