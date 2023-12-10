import './App.css';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import { useEffect, useState } from 'react';
import Pusher from "pusher-js";
import axios from "./axios.js"
function App() {
  const [messages,setmessages] = useState([])

  useEffect(()=>{
    axios.get('/messages/sync').then(response => {
      setmessages(response.data)
    })
  },[])

   useEffect(()=>{
    const pusher = new Pusher('c86c9783663f81c2d543', {
      cluster: 'ap2'
    },[]);

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (data) => {
      setmessages([...messages,data])
    });

    return ()=>{
      channel.unbind_all()
      channel.unsubscribe()
    }
  },[messages])

  console.log(messages)
  return (
    <div className='  h-screen flex flex-col items-center bg-[#dadbd3] ' >
      <div className=' bg-green-400 w-screen h-[80px]'></div>
      <div className=' bg-[#FAF9F6] absolute h-[90vh] w-[90vw] mt-5 flex shadow-lg rounded-sm '>
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
