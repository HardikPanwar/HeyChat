import React, { useState } from 'react'
import SideBar from '../components/SideBar/SideBar'
import ChatContainer from '../components/ChatContainer/ChatContainer'
import RightSideBar from '../components/ChatSideBar/RightSideBar'

const HomePage = () => {
  const [selectedUser, setSelectedUser] = useState(false)
  return (
    <div className='border w-full h-screen'>
        <div className={`backdrop-blur-xl overflow-hidden h-[100%] grid grid-cols-1 relative ${selectedUser ? 'md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]' : 'md:grid-cols-2'}`}>
          <SideBar selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
          <ChatContainer selectedUser={selectedUser} setSelectedUser={setSelectedUser} />  
          <RightSideBar selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
        </div>
    </div>
  )
}

export default HomePage