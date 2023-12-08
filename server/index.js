import express from 'express';
import mongoose from 'mongoose';
import Messages from './models/messages.js';

const app = express();
const port = process.env.PORT || 9000;

// DB config
const connection_url = 'mongodb+srv://admin:aryan123@cluster0.ie4adjh.mongodb.net/watsappdb?retryWrites=true&w=majority';
mongoose.connect(connection_url, {}).then(() => {
  console.log('MongoDB connected successfully');
}).catch((error) => {
  console.error('MongoDB connection error:', error);
});

// middleware
app.use(express.json());

// API ROUTES
app.post('/messages/new', async (req, res) => {
  const message = req.body;
  try {
    let data = new Messages(message)
    let result = await data.save()
    res.send(result)
  } catch (error) {
    console.log(error)
  }
});

// Listen
app.listen(port, () => console.log(`Listening on : ${port}`));
