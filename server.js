//imports
const express = require('express');
const morgan = require('morgan');
const routes = require('./routes');

//sets up server
const port = process.env.PORT || 4000;
const app = express();

//middleware 
app.use(morgan('dev'));//server logging
app.use(express.json()); //JSON parsing

//API routes 
app.use('/api/v1/user', routes.user);
app.use('/api/v1/groupticket', routes.groupticket);
app.use('/api/v1/individualticket', routes.individualticket);
app.use('/api/v1/location', routes.location);
app.use('/api/v1/item', routes.item);
app.use('/api/v1/friend', routes.friend);
app.use('/api/v1/login', routes.login);


app.get('/', (req, res) => {
    res.send('Bill Buddy!')
});

//connection
app.listen(port, () => { console.log(`Listening to the smooth sound 🎧 of port ${port}`) });