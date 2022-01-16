//imports
const express = require('express');
const morgan = require('morgan');
//const routes = require('./routes'); This will point to the routes folder 

//sets up server
const port = process.env.PORT || 4000;
const app = express();

//middleware 
app.use(morgan('dev'));//server logging
app.use(express.json()); //JSON parsing

//API routes 
// app.use('/api/v1/', routes);
// app.use('/api/v1/', roues);
// app.use('/api/v1/', routes);
app.get('/', (req, res) => {
    res.send('Hello World!')
});

//connection
app.listen(port, () => { console.log(`Listening to the smooth sound 🎧 of port ${port}`) });