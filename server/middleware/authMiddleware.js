const jwt= require("jsonwebtoken");

module.exports=function(req,res,next){
    const token=req.header("Authorization");
    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }
    try{
        const tokenString=token.replace("Bearer ","");
        const decoded=jwt.verify(tokenString,'secret_key_change_me_later');
        req.user=decoded;
        next();
    }catch (err) {
        res.status(401).json({ message: 'Token is not valid' });
    }
}