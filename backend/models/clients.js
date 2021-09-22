const mongoose = require('mongoose');

const Client = mongoose.model('Client',{

    name: {type:String},
    email:{type:String},
    massage:{type:String}
});
module.exports =Client;