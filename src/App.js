import ChatBoxReceiver,{ChatBoxSender} from "./components/ChatBox";
function App() {
  return (
  
   
   
    <div style={{background:"black", height:"100vH"}}>
    <ChatBoxReceiver user="David" 
    avatar="https://img.freepik.com/free-photo/fashion-boy-with-yellow-jacket-blue-pants_71767-96.jpg?w=740&t=st=1691254842~exp=1691255442~hmac=25c847fca8b3d60c1c5ae65b8572d9c8321ea61037dcb273204b03eed45f410f" 
    message="Tubonge"/>

    <ChatBoxSender user="Kiprich" 
     avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" 
     message="Niambie"/>
   </div>
 
  );
}

export default App;
