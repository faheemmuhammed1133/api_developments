import { useEffect, useRef, useState } from "react";
import styles from "../app.module.css";
import { data, useParams } from "react-router-dom";
import { io } from "socket.io-client";

function ChatRoom() {
  const params = useParams();

  let [message, setMessage] = useState("");
  let [messages, setMessages] = useState([]);
  let [username, setUsername] = useState("");

  let socket = useRef(null); // change useRef var using var.current
  

  useEffect(() => {
    socket.current = io("http://localhost:8000");

    socket.current.emit("joinroom", { roomname: params.roomname, username: "Saurabh" });

    socket.current.on("roomJoined", (data) => {
      console.log(data);
    });

    socket.current.on("getChat", (data) => {
      setMessages((prevValue)=>{
        return [...prevValue,data]
      })
    });

    return ()=>{
      socket.current.disconnect()
    }

  }, []);

  function sendChatMsg() {
   socket.current.emit("createchat", {
      roomname: params.roomname,
      username: username,
      message: message,
    });
  }

  return (
    <>
      <div className={styles.chatroom}>
        <div className={styles.chatlogger}>
          {
            messages.map((msg,index)=>{
              return (<div key={index}>
                <h3 >{msg.username} : {msg.message} </h3>
                </div>)
            })
          }
        </div>
        <div className={styles.createchat}>
          <input
            type="text"
            placeholder="write username"
            onChange={(event) => setUsername(event.target.value)}
          ></input>
          <input
            type="text"
            placeholder="write message"
            onChange={(event) => setMessage(event.target.value)}
          ></input>
          <button onClick={sendChatMsg}>send</button>
        </div>
      </div>
    </>
  );
}

export default ChatRoom;
