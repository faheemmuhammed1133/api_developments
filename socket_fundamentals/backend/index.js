import express from 'express'
import cors from "cors"
import http from 'http'
import {Server} from "socket.io";



const app = express()
const httpServer = http.createServer(app)
app.use(cors()) // main server all access

const io = new Server(httpServer,{
   cors:{
      origin:"*" // socket server all access
   }
},[])

let rooms = ["sports", "Science ", "Gaming"]
 
io.on("connection",(socket)=>{
   console.log(`client connected with id ${socket.id}`)

   // emiting rooms
   io.emit("loadRooms",rooms)

   // room joining 
   socket.on("joinroom",(data)=>{

      let room = rooms.find((name)=>{  // some give true or false  
         return data.roomname === name
      })
      if(room!==undefined){
         socket.join(room)
         io.to(room).emit("roomJoined",`${data.username} joined the ${room} room`)
      }
   })

   // socket.on("message",(data)=>{ // event on app.jsx  this is handler
   //    console.log(data)
   //    io.emit("toclient",data)  //  io.emit sends to every client wheras socket.emit only send to the specific socket which sent messagej
   // })

   socket.on("createchat",(data)=>{

      io.to(data.roomname).emit("getChat",{username:data.username,message:data.message})
   })

})








httpServer.listen(8000,()=>{
    console.log("server is up")
})