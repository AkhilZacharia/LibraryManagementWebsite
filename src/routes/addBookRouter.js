const express = require('express');
const addBookRouter = express.Router();
function router(nav){
    addBookRouter.get('/',(req,res)=>{
        res.render('addbook',{nav,title:'Add Books'})
    })
    return addBookRouter;
}
module.exports = router;