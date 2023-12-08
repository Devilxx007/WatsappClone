import React from 'react'
import { IconButton, Avatar } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddCommentIcon from '@mui/icons-material/AddComment';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import SearchIcon from '@mui/icons-material/Search';
import SidebarChat from './SidebarChat';
const Sidebar = () => {
    return (
        <div className=' w-[280px] '>                     {/* Side Bar Parent  */}
            <div className=' mt-1 flex flex-row justify-between '  > {/* Side Bar Header Icon  */}
                <Avatar className=' ml-1 hover:cursor-pointer' />
                <div className=' flex items-center justify-center'  >
                <IconButton>
                <DonutLargeIcon className=' hover:cursor-pointer' />
                </IconButton>
                <IconButton>
                <GroupsIcon className=' hover:cursor-pointer' />
                </IconButton>
                <IconButton>
                <AddCommentIcon className=' hover:cursor-pointer' />
                </IconButton>
                <IconButton>
                <MoreVertIcon className=' hover:cursor-pointer' />
                </IconButton>
                
                </div>
            </div>
            <div className=' mt-1 rounded-sm flex items-center justify-center'> {/* Side Bar Search Section  */}
                <div className=' flex bg-white rounded-3xl items-center justify-center '>
                <div >
                    <SearchIcon className=' ml-1 hover:cursor-pointer'/>
                </div>
                <input className=' outline-none border-none w-[250px] mt-2 mb-2 flex items-center justify-center text-center rounded-2xl border-red-400' placeholder='Search or Start new chat'/>
                </div>
                
            </div>
            <div className=' bg-white flex-col mt-2'> {/* Side Bar Chats  */}
                <SidebarChat AddNewChat />
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                </div> 
        </div>

    )
}

export default Sidebar
