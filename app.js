const express = require('express');
const app = new express();
const navbarinvalid =[{link:'/login',name:'Home'},{link:'/login',name:'Login'},{link:'/signup',name:'Signup'}]
const nav = [{link:'/index',name:'Home'},{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/addbook',name:'Add Books'}]
const booksRouter = require('./src/routes/booksRouter')(nav);
const authorsRouter = require('./src/routes/authorsRouter')(nav);
const indexRouter = require('./src/routes/indexRouter')(nav);
const signupRouter = require('./src/routes/signupRouter')(navbarinvalid);
const loginRouter = require('./src/routes/loginRouter')(navbarinvalid);
const addBookRouter = require('./src/routes/addBookRouter')(nav);

app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/addBook',addBookRouter);
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/signup',signupRouter)
app.use('/login',loginRouter)
app.use('/index',indexRouter)
app.get('/',(req,res)=>{
     res.render("login",{navbarinvalid,title:'Library',success:"/index"});
});
app.listen(5000,()=>{
    console.log("5000");
});