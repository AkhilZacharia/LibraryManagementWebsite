const express = require('express');

const booksRouter = express.Router();
function router(nav){
var books = [
    {
        title:'tom n jerry',
        author:"J Barberra",
        genre:'Cartoon',
        img:'tom.jpg'
    },
    {
        title:'Harry Potter',
        author:"J K Rowling",
        genre:'Fantasy',
        img:'harry.jpg'
    },
    {
        title:'Paathummayude Aadu',
        author:"Basheer",
        genre:'Novel',
        img:'basheer.jpg'
    }
];
booksRouter.get('/',(req,res)=>{
     res.render("books",{nav,title:'Library',books
    }); //books array
});
booksRouter.get('/:id',(req,res)=>{
    const id = req.params.id;
    res.render("book",{nav,title:'Books',book: books[id]});
});
    return booksRouter;
}
module.exports = router;