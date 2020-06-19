const express = require('express');
const signupRouter = express.Router();
function router(navbarinvalid){
    signupRouter.get('/',(req,res)=>{
        res.render('signup',{navbarinvalid})
    })
    return signupRouter;
}
module.exports = router;