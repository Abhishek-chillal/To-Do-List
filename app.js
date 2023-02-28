const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

const ListRoutes = require('./routes/list.js')

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static("public"));

mongoose.connect("mongodb+srv://admin-abhivc:****@cluster0.dlbs0.mongodb.net/todolistDB");

app.use(ListRoutes);

app.listen(3000,(err)=>{
    if(err){
        // console.log(err);
    }
    console.log('Server started at port 3000');
})

