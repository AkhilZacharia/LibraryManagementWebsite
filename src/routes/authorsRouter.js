const express = require('express');
const authorsRouter = express.Router();
function router(nav){
    const authors =[
           {
            name:" Thakazhi Sivasankara Pillai",
            works:"Kayar, Chemmeen,...",
            genre:'Novel,Short stories',
            img:'thakazhi.jpg'
        },
        {
            name:" Vaikom Muhammad Basheer",
            works:"Balyakalasakhi, Pathummayude Aadu,...",
            genre:'	Novel, short story, essays, memoirs',
            img:'basheer.jpg'
        },
        {
            name:" Sir Arthur Conan Doyle",
            works:"A Study in Scarlet,The Hound of the Baskervilles,...",
            genre:'Novel,Short stories',
            img:'doyle.jpg'
        }
        ]
    authorsRouter.get('/',(req,res)=>{
        res.render('authors',{nav,authors})
    })
    return authorsRouter;
}
module.exports = router;