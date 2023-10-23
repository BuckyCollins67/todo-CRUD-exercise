const mongoose = require('mongoose');
const todoTaskSchema = new mongoose.Schema({
title: {
    type: String,
    required: true
},
content: {
    type: String,
    required: true
},
date: {
    type: Date,
    default: Date.now
}
})
module.exports = mongoose.model('TodoTask',todoTaskSchema,'tasks');  //first is the name of the model, second is assigning it to the todoTaskSchema as you can see in the variables on line 2 at the top, and third is the collection name.  Third one isn't really needed.