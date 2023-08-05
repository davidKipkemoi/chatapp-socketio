import React, { useState } from 'react'
import { Input,Button } from 'antd';
import Column from 'antd/es/table/Column';
export default function UserLogin(setUser) {
  const [user,setAUser] = useState('')
    function handleSetUser(){
      if(!user) return
      localStorage.setItem("user",user)
      setUser(user)
      localStorage.setItem("avatar",`https://picsum.photos/id/${_.random(1, 1000)}/200/300`)
      
    }
  return (
    <div>
      <div style={{display:"flex",flexDirection:Column}}>
      <img src="https://plus.unsplash.com/premium_photo-1681487872232-fa622a6dd59e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" 
      alt=""/>
      <h1> Enter Your Username</h1>
      </div>
      <div>
      <Input 
      value={user}
      onChange={e=>setAUser(e.target.value)}
      placeholder="Enter Username" />
      <Button ghost style={{ width:'10%' ,
      marginTop:"120px",
      height:50 ,
     fontWeight:'bold', 
    borderRadius:10 ,
    fontSize:18 ,}}
      // style={styles.button}
      onClick={()=>handleSetUser()}
      >
          Login
      </Button>
      </div>
    </div>
  )
}
