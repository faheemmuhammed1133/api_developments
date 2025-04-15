import { useEffect, useState } from "react"
import styles from  '../app.module.css'
import { io } from "socket.io-client"
import { Link } from "react-router-dom"


function Rooms() {
   
   
   let [rooms, setRooms] =useState([])
   
useEffect(()=>{
   
   const socket = io("http://localhost:8000")
      
  socket.on("loadRooms",(data)=>{
    console.log(data)
    setRooms(data)
  })

  return ()=>{
   socket.disconnect()
  }
},[])

  return (
    <>
    <h1>WELCOME</h1>
    {
      rooms.map((room,index)=>{
        return (
          <div key={index}
           className={styles.rooms}
           >
            <div className={styles.room}>
            <h2 >{room}</h2>
            <Link to={"/chatroom/"+room} className={styles.btn}>Join room</Link>
            </div>
          </div>
        )
      })
    }
    </>
    
    )
   }
   
   export default Rooms
   
   
   {/* <div 
   className={styles.chat}
   >
   <input onChange={(event)=>{setMessage(event.target.value)
   }} ></input>
   <button onClick={sendMessage}>send message</button>
   {
       messages.map((msg,index)=>{
         return (
           <p key={index}>{msg}</p>
         )
       })
     }</div> */}