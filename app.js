const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const blogRoutes = require('./routes/blogRoutes');

//express app

const app = express();

//connect to mongodb 
const dbURI = 'mongodb+srv://netninja:Sa~taBarb4ra@nodetuts.hzn80.mongodb.net/nodetuts?retryWrites=true&w=majority'
mongoose.connect(dbURI)//listen for requests
   .then((result) => app.listen(3000))
   .catch((err) => console.log(err));
//register view engine
app.set('view engine', 'ejs');

//middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));


app.get('/', (req,res) => {
    //res.send('<p> home page </p>')
    res.redirect('/blogs')
});

app.get('/about', (req,res) => {
    // res.send('<p> about page </p>')

    res.render('about', { title: 'About' });
});

//blogs routes
app.use('/blogs', blogRoutes)

//404 page
//use .use to create middleware functions
app.use((req, res) => {
    res.status(404).render('404', { title: '404' })
});

