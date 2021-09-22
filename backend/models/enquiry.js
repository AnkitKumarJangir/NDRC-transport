const mongoose = require('mongoose');

const Enquiry = mongoose.model('Enquiry',{
    name: {type:String},
    email:{type:String},
    height:{type:String},
    weight: {type:String},
    width:{type:String},
    freight:{type:String},
    from: {type:String},
    to:{type:String}
});
module.exports =Enquiry;