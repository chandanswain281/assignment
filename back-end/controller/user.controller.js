const mongoose = require('mongoose')
const userModel = require('../model/user.model')

let responseObj = (res, results, err) => {
    return res.send({
        'successmsg':  (results.length > 0 && results) ? 'Success' : ' failed',
        'response' : {
            "data": results
        },
        'error': err
    })
}
module.exports.getAll = async (req, res) => {
    try {
        let userinfo = await userModel.find({})
        responseObj(res, userinfo,'')
    } catch (error) {
        responseObj(res, "", error)
    }
}

module.exports.createUserInfo = async (req, res) => {
    try {
        let objectToSave = {}
        let reqBody = req.body;

        for(const key in reqBody) {
            if (reqBody.hasOwnProperty(key)) {
                objectToSave[key] = reqBody[key]
            }
        }
        objectToSave._id = mongoose.Types.ObjectId();

        let user = new userModel(objectToSave)
        await user.save()

        responseObj(res, objectToSave,'')
        
    } catch (error) {
        responseObj(res, "", error)
    }
}


