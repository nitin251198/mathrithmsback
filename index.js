const express = require('express');
const Users = require('')

const port = process.env.PORT || 5000;

//initialize express
const app = express();

//Bodyparser
app.use(express.json());

//
app.use('/api/users', Users);

//Middleware error handling
app.use((error, req, res, next) => {
    res.status(error.code || 500);
    res.json(error.message || 'an unknown error occurred !');
})



//listining on port 5000
app.listen(port, () => {
    console.log("server is runing on port :" + port)
});
