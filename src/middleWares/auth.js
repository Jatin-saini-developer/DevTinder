const adminAuth = (req, res, next)=>{
 console.log("Admin auth is getting checked");
 const token = "xyz";
 const authorization = token==="xyz";
 if(!authorization){
    res.status(404).send("unauthorized request");
 } else {
   next();
 }
 
}

module.exports = {adminAuth}