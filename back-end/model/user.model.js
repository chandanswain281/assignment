const mongoose = require('mongoose')
var hobbies_list = new mongoose.Schema({
    hobbie: {
        type: mongoose.Schema.Types.String,
        default: null
    }
});
var higher_edu_list = new mongoose.Schema({
    Education: {
        type: mongoose.Schema.Types.String,
        default: null
    }
});
var  userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Name: {
        type: mongoose.Schema.Types.String,
        required: true,
        trim: true
    },
    Email: {
        type: mongoose.Schema.Types.String,
        required: true,
        trim: true
    },
    Address: {
        type: mongoose.Schema.Types.String,
        required: true,
        trim: true
    },
    Hobbie: {
        type: [hobbies_list],
        required: true,
    },
    education: {
        type: [higher_edu_list],
        required: true,
    },
})

module.exports.userModel = mongoose.model('Users',userSchema)