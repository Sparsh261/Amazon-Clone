const usersModel = require('../models/usersModels.js');

const getAllUsers = async(req,res)=>{
    const allUsers = await usersModel.find();
    res.send(allUsers)
}

const addUsers = async(req,res) => {
    const {name,email,password} = req.body;
    usersModel.create({
        name:name,
        email:email,
        password:password
    })
    res.json({
        status:"success"
    })
}

const verifyUsers = async(req,res) => {
    const {email,password} = req.body;
    const user = usersModel.findOne({email:email,password:password})
    if(!user){
        res.json({
            msg:"Invalid credentials"
        })
    } 
    else{
        res.json({
            users:user
        })
    }
}

module.exports = {
    getAllUsers,
    addUsers
}