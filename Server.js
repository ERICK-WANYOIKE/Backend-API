/// reqiure express
const express = require('express');
/// intialise express 
const server = express();

///import the modal

const UserModel = require('./models/UserModel.js');

// Import mongoose to connect to MongoDB Atlas
const mongoose = require('mongoose');
const connectionString = "mongodb+srv://admin01:wanyoike01@cluster0.bb8cp.mongodb.net/astrol_2021?retryWrites=true&w=majority"
const connectionConfig ={
    useNewUrlParser: true,
    useUnifiedTopology: true
};



mongoose
.connect(connectionString, connectionConfig)
.then(
    () => {
        console.log('DB is connected');
    }
)
.catch(
    (dbError) => {
        console.log('error occurred', dbError);
    }
);

// A method to process a GET HTTP request.
// server.get(path, callbackFunction)
server.get('/about',  (req , res)=>{
    res.send(
       `<html>
       <h1>Hello steve</h1>
       </html>`
    )
});

server.get('/users', 
    (req, res) => {

        UserModel
        .find()
        .then(
            (dbDocument)=>{
                res.send(dbDocument)
            }
        )
        .catch(
            (error) => {
                console.log(error)
            }
        )

    }
)


server.post(
    '/users/create',
    (req, res) => {

        // Use the UserModel to create a new document
        UserModel
        .create(
            {
                firstName: "stevison",
                lastName: "jobs",
                email: "stevisonjobs@gmail.com"
            }
        )
        .then(
            (dbDocument) => {
                res.send(dbDocument);
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        );
    }
);




///// server.listen(portNumber, callbackFunction)
/// starting the server
server.listen(
3001,()=>{
    console.log("server is listening to port 3000")
}
);

