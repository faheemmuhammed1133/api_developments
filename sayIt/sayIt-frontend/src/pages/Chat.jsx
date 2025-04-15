import React, { useEffect, useState } from 'react'
import styles from "./chat.module.css"

function Chat() {
  let [results, setResult] = useState([])
  let [username, setUsername] = useState("")
  let data = JSON.parse(localStorage.getItem("sayit-info"))

  useEffect(() => {
    fetch("http://localhost:8000/users/search/" + username, {
      method: "GET",
      headers: { "Authorization": "Bearer " + data.token }
    }).then((response) => {
      return response.json()
    }).then((data) => {
      console.log(data)
      setResult(data)
    })
      .catch((err) => {
        console.log(err)
      })
  })

  return (
    <section className={styles.main}>
      <div className={styles.searchbox}>
        <input type='text' placeholder='Search by Name '
          onChange={(event) => { setUsername(event.target.value) }}
          className={styles.searchInput}></input>
      </div>
      <div className={styles.searchResult}>
        {
          results.map((e) => {
            return (
              <div className={styles.result}>
                <p> {e.name} <strong>{e.username}</strong></p>
                <button>message</button>
              </div>
            )
          })
        }

      </div>
      <div className={styles.chatbox}>

      </div>


    </section>
  )
}

export default Chat