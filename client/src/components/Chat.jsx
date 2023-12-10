import React, { useState } from 'react'
import { Avatar,IconButton } from '@mui/material';
import EmojiEmotionsTwoToneIcon from '@mui/icons-material/EmojiEmotionsTwoTone';
import MicNoneTwoToneIcon from '@mui/icons-material/MicNoneTwoTone';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import axios from '../axios.js';
const Chat = ({messages}) => {
  const [input ,setInput] = useState();

  const sendmessage = (e)=>{
    e.preventDefault();
    axios.post('/messages/new',{
      message : input,
      name: "Devil",
      timestamp:"Now", 
      received: true
    })
  }
  return (
    <div className=' bg-[#ebebeb] flex-1'> {/* Parent container of chat  */}
      <div className=' flex border-2 border-[#ebebeb] shadow-md p-1 justify-between items-center '>  {/* Chat header  */}
       <div className=' flex ml-1 items-center'>
        <Avatar />
        <h1 className=' ml-1'>Name</h1>
        </div>
        <div className=' justify-between'>
          <IconButton><SearchIcon/></IconButton>
          <IconButton><AttachFileIcon/></IconButton>
          <IconButton><MoreVertIcon/></IconButton>
        </div>
      </div> 
      <div className='  mt-1 h-[615px] pb-1 overflow-scroll bg-cover' style={{ backgroundImage : 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")'}}>{/* Chat body  */}
      {messages.map((message)=>
      <div  className={`${!message.received ? 'ml-auto relative mt-5 p-2 rounded-[10px] w-fit bg-green-200':'ml-1 bg-white relative mt-5 p-2 rounded-[10px] w-fit'} `}>
      <p className=' '>
        <span className=' absolute top-[-20px]'>{message.name}</span>
        {message.message}
        <span className=' relative bottom-[-9px] ml-2 text-[8px]'>
          {message.timestamp}
        </span> 
      </p>
    </div>
      )}
      </div>  
      <div className='   bg-[#f5f5f5] h-fit flex justify-between '>{/* Chat footer  */}
      <EmojiEmotionsTwoToneIcon className=' hover:cursor-pointer'/>
      <form className=' flex flex-row '>
      <input onChange={(e)=>setInput(e.target.value)} placeholder='Type a message ' className=' border-none rounded-lg w-[450px] outline-none'/>
      <button onClick={sendmessage} type='submit' ></button>
      </form>
      
      <MicNoneTwoToneIcon className=' hover:cursor-pointer'/>
      </div>  
    </div>
  )
}

export default Chat
