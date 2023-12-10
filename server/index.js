import express from 'express';
import mongoose from 'mongoose';
import Messages from './models/messages.js';
import cors from "cors"
import Pusher from 'pusher'

const pusher = new Pusher({
  appId: "1721945",
  key: "c86c9783663f81c2d543",
  secret: "8ab2b8837d480de1ec60",
  cluster: "ap2",
  useTLS: true
});

//app config

const app = express();
const port = process.env.PORT || 9000;

// DB config
const connection_url = 'mongodb+srv://admin:aryan123@cluster0.ie4adjh.mongodb.net/watsappdb?retryWrites=true&w=majority';
mongoose.connect(connection_url, {}).then(() => {
  console.log('MongoDB connected successfully');
}).catch((error) => {
  console.error('MongoDB connection error:', error);
});

const db = mongoose.connection
db.once('open', () => {
  console.log("DB opened")
  const msgCollection = db.collection('messagecontents')
  const changeStream = msgCollection.watch();
  changeStream.on('change', (change) => {
    console.log(change)
    //Triggering
    if (change.operationType == 'insert') {
      const messagedetails = change.fullDocument;
      pusher.trigger('messages','inserted',{
        name: messagedetails.name,
        message: messagedetails.message,
        timestamp: messagedetails.timestamp,
        recieved: messagedetails.recieved
      })
    } else{
      console.log("Error in triggering")
    }
  })


})




// middleware
app.use(express.json());
app.use(cors())


// API ROUTES
app.get('/messages/sync', async (req, res) => {
  let data = await Messages.find()
  res.send(data)
})

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
