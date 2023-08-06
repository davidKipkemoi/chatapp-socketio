import React, { useEffect, useState } from 'react'
import socketIOClient from "socket.io-client"
import ChatBoxReceiver,{ChatBoxSender} from  './ChatBox';
import UserLogin from "./UserLogin"
import InputText from "./InputText";


export default function ChatContainer() {
  let socketio = socketIOClient("http://localhost:5000")
  const[chats,setChats]=useState([])
  const[user,setUser]=useState(localStorage.getItem("user"))
  const avatar=(localStorage.getItem("avatar"))

  useEffect(()=>{
    socketio.on("chat",senderChats=>{
      setChats(senderChats)
    })

   
  })
  function sendChatToSocket(chat){
    socketio.emit('chat',chat)
  }

  function addMessage(chat){
    const newChat = {...chat, user:localStorage.getItem("user"),avatar}
    setChats([...chats,newChat])
    sendChatToSocket([...chats,newChat])
  }

  function handleLogout(){
    localStorage.removeItem("user")
    localStorage.removeItem("avatar")
    setUser("")
  }
  function ChatsList(){
    return  (<div>
    {
      chats.map((chat,index)=>{
        if(chat.user === user) return <ChatBoxSender key={index} message={chat.message} avatar={chat.avatar} user={chat.user}/>
        return <ChatBoxReceiver key={index} message={chat.message}  avatar={chat.avatar} user={chat.user}/>
      })
    }
  </div>)
  }

  return (
    <div>
     {
      user ? 
      <div>
          <div style={{display:'flex', flexDirection:"row", justifyContent:"space-between"}}>
            <h4 style={{color:"white"}}> Username:{user}</h4>
            
            <p style={{color:"red", cursor:"pointer"}} onClick={()=>handleLogout()}>Logout</p>
          </div>
          <ChatsList/>
          <InputText addMessage={addMessage} />
      </div>
      :<UserLogin setUser={setUser}/>
     }
    </div>
  )
}
