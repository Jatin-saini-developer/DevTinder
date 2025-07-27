const validator = require("validator");

const validateSignUpData = (req)=>{
const {firstName, lastName, email, password} = req.body;

if(!firstName || !lastName){
    throw new Error("Please enter a valid firstName & lastName")
}else if(!validator.isEmail(email)){
    throw new Error("Please enter a valid email id")
}else if(!validator.isStrongPassword(password)){
    throw new Error("please enter a strong password")
}

}

module.exports = validateSignUpData
