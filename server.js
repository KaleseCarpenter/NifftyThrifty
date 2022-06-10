// npm init -y
// npm i express nodemon dotenv
// created 3 files {models -views-controllers} 
// npm install express-react-views react@16 react-dom@16 --save


const express = require('express');
const app = express()
require('dotenv').config()
// -------Links env


app.set('view engine', 'jsx');
// ---->needs 2 b viewAble

app.engine('jsx', require('express-react-views').createEngine());

//near the top, around other app.use() calls
app.use(express.urlencoded({extended:false}));


app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

// --------------------------{RequireStmnts}

// const Data = require('./models/products')
const Data = require('./models/products');

app.get('/products', (req, res) => {
    res.render('Index', {products: productData})
});


//put this above your Show route
app.get('/products/new', (req, res) => {
    res.render('New');
});

//add show route
app.get('/products/:indexOfProductsArray', (req, res) => {
    res.render('Show', {product: Data[req.params.indexOfProductsArray]}  );
});

// Post REQUEST
app.post('/products', (req, res) => {
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true; //do some data correction
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToPurchase = false; //do some data correction
    }
    Data.push(req.body);
    console.log(Data);
    res.redirect('/products'); //send the user back to /products
});


app.listen(3000, ()=>{
    console.log(`Currently Listening on PORT ${process.env.PORT}`)
})
