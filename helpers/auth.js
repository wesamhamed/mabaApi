var jwt =require("jsonwebtoken");
var bcrypt =require("bcryptjs");

function getToken(user){
    const token=jwt.sign(user,"maba")
    return {token} ;
}
function hashPassword(password){
   const salt = bcrypt.genSaltSync(10); 
    return bcrypt.hashSync(password,salt);
}
function comparePassword(password,hash){
    return bcrypt.compare(password,hash);
}

module.exports={
    getToken,
    hashPassword,
    comparePassword
}