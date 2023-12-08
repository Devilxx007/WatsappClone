import React from 'react'
import { Avatar,IconButton } from '@mui/material';
import EmojiEmotionsTwoToneIcon from '@mui/icons-material/EmojiEmotionsTwoTone';
import MicNoneTwoToneIcon from '@mui/icons-material/MicNoneTwoTone';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
const Chat = () => {
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
      <div className='  mt-1 h-[525px] overflow-scroll'>{/* Chat body  */}
      <div className=' ml-1 bg-white relative mt-5 p-2 rounded-[10px] w-fit'>
        <p className=' '>
          <span className=' absolute top-[-20px]'>Name</span>
          This is the Message
          <span className=' relative bottom-[-9px] ml-2 text-[8px]'>
            {new Date().toUTCString()}
          </span> 
        </p>
      </div>
      <div className=' ml-1 bg-white relative ml-auto bg-[#dcf8c6] mt-5 p-2 rounded-[10px] w-fit'>
        <p className=' '>
          <span className=' absolute top-[-20px]'>Name</span>
          This is the Message
          <span className=' relative bottom-[-9px] ml-2 text-[8px]'>
            {new Date().toUTCString()}
          </span> 
        </p>
      </div>
      <div className=' ml-1 bg-white relative mt-5 p-2 rounded-[10px] w-fit'>
        <p className=' '>
          <span className=' absolute top-[-20px]'>Name</span>
          This is the Message
          <span className=' relative bottom-[-9px] ml-2 text-[8px]'>
            {new Date().toUTCString()}
          </span> 
        </p>
      </div>
      </div>  
      <div className='  bg-[#f5f5f5] flex  mt-1 items-center p-2 justify-between'>        {/* Chat footer  */}
      <EmojiEmotionsTwoToneIcon className=' hover:cursor-pointer'/>
      <input placeholder='Type a message ' className=' border-none rounded-lg w-[450px] outline-none'/>
      <SendIcon className=' hover:cursor-pointer'/>
      <MicNoneTwoToneIcon className=' hover:cursor-pointer'/>
      </div>  
    </div>
  )
}

export default Chat
