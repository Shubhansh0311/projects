const express = require("express")
const bodyParser = require("body-parser")

//❗❗❗❗❗❗ for database❗❗❗❗❗❗

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shubhansh');
console.log("db connected");

//after this we have to create schema 
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
});

//❗❗one table one schema one model , two table two model two schema and so on 


//schema is just a template we have to create a model there is nothing directly from the schema 

//whenever we want to create a class we use model 
                      

//actual model name decides the table within the database so it plays an important role 
            //   actual model name
            //               |
const User=mongoose.model('User',userSchema)









const cors = require("cors")// by using ❗cors  we can multiple url on a common local host 
const server = express();

//  ❗❗to use cors
server.use(cors())//to get access to local host for multiple windows
server.use(bodyParser.json())//now server will be able to read the data 


//❗❗❗❗❗❗creating an api
// server.get('/demo', (req, res) => {❗❗converting to the post  method in order to make it more secure also we've make chnges to the react 



//CRUD operation ------ ❌this is create operation ❌

//only in the case of create we create a new user 
//when object is not there
// create is also implemented using POST 
server.post('/demo', async(req, res) => {

//we can change the data base by creating this object 
//we can update or manupulate our data from this object
// we don't have to our database
//we have created the object from the model define above 
let user=new User();

// this is node schema  this is frontend react username
user.username=req.body.username;
user.email=req.body.email;
user.password=req.body.password;

// upto this data is only working in the js


// ❗❗now to save data into database mongodb has a ❗❗save()❗❗ function
const doc=await user.save();

console.log(doc);

res.json(doc)//not necessary we are sendind response or we can say feedback to the 



    // res.send("hello shubhansh")// by this we get the response from the api by get method
    //❌ console.log(req.body);//be default express does not provide access to the content of the body or we can say we have to use middle ware in order to get the data of the body for which we use the bodyParser 
    // console.log(req.body);//we get the data from the page of the react 

    //sending response
    //❗ res.send(req.body)//we can also use json which is better then send
    // res.json(req.body)

})


//here we are getting the data from the database through the get method
//we also different queries to execute 

server.get('/demo',async(req,res)=>{
    const docs= await User.find({})
    res.json(docs); //in order to see these at the frontend

})



server.listen(8080, () => {
    console.log("server is started");
})