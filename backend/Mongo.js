// mongo.js
const mongoose = require('mongoose');
 
const { MongoClient } = require('mongodb');

 const url = 'mongodb+srv://Amazon:Amazon@cluster0.metou6t.mongodb.net/Amazon?retryWrites=true&w=majority&appName=Cluster0';
// const client = new MongoClient(url);
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
async function connectToDatabase() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log('Error in connecting', error);
    }
}

// connectToDatabase();

module.exports = { connectToDatabase, client };
