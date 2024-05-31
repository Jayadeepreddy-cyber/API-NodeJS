const User=require('../users/models/user');
const bcrypt=require('bcrypt');
module.exports={
    findByEmail:async(email)=>{
        return await User.findOne({email});
    },
    findByUsername:async(username)=>{
        return await User.findOne({username});
    },
    findByUserID:async(userID)=>{
        return await User.findById(userID)
    },
    create:async(data)=>{
        //password Encryption
        data.password=bcrypt.hashSync(data.password,10);
        return await User.create(data);
    },
    isUserNameExists: async(username)=>{
        return await User.exists({username});
    },
    isEmailExists: async(email)=>{
        return await User.exists({email});
    },
};