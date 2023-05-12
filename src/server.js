const { MongoClient } = require('mongodb');
const mongoose = require('mongoose')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

// Configure MongoDB connection
const uri = 'mongodb+srv://elar:superdatabase@todos.xqgxziw.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

// Connecting to MongoDB
async function connect() {
    try {
        await mongoose.connect(uri)
        console.log("Connected to MongoDB")
    } catch (error) {
        console.error(error)
    }
}

connect();

// API endpoint to handle todo creation




app.post('/api/todos', (req, res) => {
  const { date, title } = req.body; 

  // Creating a new todo
  const todo = { date, title };

  // Saving the todo to MongoDB
  const db = client.db('calendar');
  const collection = db.collection('todos');
  collection.insertOne(todo)
    .then(() => {
      console.log('Todo created successfully');
      res.sendStatus(201); // Send a success response
    })
    .catch(error => {
      console.error('Error creating todo:', error);
      res.sendStatus(500); // Send an error response
    });
});

// Starting the server
app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});