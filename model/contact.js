var mongoose = require('mongoose')

var contactSchema = mongoose.Schema({
    name:{
        type:String
    },
    surname:{
        type:String
    },
    message:{
        type:String
    }
});

var contactModel = mongoose.model('ContactUs', contactSchema);

module.exports = contactModel;