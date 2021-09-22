
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/meanDB', { useNewUrlParser: true,useUnifiedTopology: true, useFindAndModify: false  },(err)=>{
    if(!err){
        console.log('Connection Successful')
    }else{
        console.log('Error in connection' + err)
    }
})

module.exports =mongoose;
