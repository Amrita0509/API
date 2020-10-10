const express = require('express');   //for building rest api
const bodyParser = require('body-parser');         // hels us to parse the request and create req.body object
const cors = require('cors');  //Provide express middleware to enable cors with various option

const app = express();   //object of express

const db = require("./models");
db.mongoose
       .connect(db.url,{
           useNewUrlParser : true,
           useUnifiedTopology: true
       })
       .then(() => {
           console.log("Connected to the database!");

       })
       .catch(err => {
           console.log("cannot connect to database!",err);
           process.exit();
       });

var corsOption = {
    origin : "http://localhost:8081"
};

app.use(cors(corsOption));

//parse request of the content type application/json
app.use(bodyParser.json());

//parse request of the content type application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//Simple route
app.get("/",(req,res) => {
    res.send({message: "Welcome to Bezkoder Application"})
});

require("./routes/tutorial.routes")(app);

//set port, listen for request
app.listen(3000,() => {
    console.log("Server is Running in port 3000");
});