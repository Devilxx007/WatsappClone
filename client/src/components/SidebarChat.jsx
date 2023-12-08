import React from 'react'
import { Avatar } from '@mui/material';
const SidebarChat = ({AddNewChat}) => {

    const createNew = () =>{
        const newchat = prompt("Enter New Chat Name: ")
        if (newchat) {
            //something
        }
    }

  return !AddNewChat ? (
    <div className=' flex hover:bg-[#ebebeb] rounded-sm items-center p-[15px] border-b-2 border-[#f6f6f6]' >
      <Avatar src=''/>
      <div className=' flex ml-1 flex-col justify-center  items-center'>
      <h1>Name</h1>
      <p>Last Message</p>
      </div>
      
    </div>
  ) : (
    <div className=' hover:bg-[#ebebeb]' onClick={createNew}>
        <h1 className=' text-lg font-bold ml-1'>Add New Chat</h1>
    </div>
    
  )
}

export default SidebarChat
