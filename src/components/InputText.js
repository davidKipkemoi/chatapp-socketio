import React from 'react'
const styles={
  button: {
    width:'10%' ,
    height:50 ,
    fontWeight:'bold', 
    borderRadius:10 ,
    fontSize:18 ,
    backgroundColor:'#34b7f1',
    borderWidth:0,
    color:'#fff'
  },
  textarea:{ 
     width:'60%' ,
     height:50 ,
     borderRadius:10, 
     borderWidth:0 , 
     padding:10 , 
     fontSize:18
    },
  textContainer:{
    display:"flex", 
    justifyContent:'space-evenly', 
    alignItems:'center'}
}
export default function InputText() {
  return (
    <div>InputText</div>
  )
}
