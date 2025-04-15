import React, { useState } from 'react'
import styles from "./auth.module.css";

const Register = () => {
  let [user, setUser] = useState({
    name: "",
    username: "",
    password: "",
    gender: ""
  })
  let [toastMessage, setToastMessage] = useState({ error: false, message: "" })

  function resetToast() {
    setTimeout(() => {
      setToastMessage({ error: false, message: "" })
    }, 5000)
  }

  const handleForm = (event) => {
    setUser((prevValue) => {
      return { ...prevValue, [event.target.name]: event.target.value }
    })
    // console.log(user)
  }

  const register = () => {
    event.preventDefault();
    fetch("http://localhost:8000/auth/register", {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" }
    })
      .then((response) => {
        if (response.status !== 201) {
          setToastMessage(({ error: true, message: "User already exists" }))
          resetToast()
          throw new Error("Something wrong")
        } else {
          return response.json()
        }
      }).then((data) => {
        setToastMessage({ error: false, message: data.message })
        resetToast()
        console.log(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (

    <div className={styles.container}>
      {
        toastMessage.message !== "" ? (
          <div className={toastMessage.error == true ? styles.toastSuccess : styles.toastError}>
            {toastMessage.message}
          </div>) : null
      }
      <form className={styles.form}>
        <h2 className={styles.title}>Register</h2>

        <label className={styles.label}>
          Name:
          <input type="text" name="name" onChange={handleForm} className={styles.input} />
        </label>

        <label className={styles.label}>
          Username:
          <input type="text" name="username" onChange={handleForm} className={styles.input} />
        </label>

        <label className={styles.label}>
          Password:
          <input type="password" name="password" onChange={handleForm} className={styles.input} />
        </label>

        <label className={styles.label}>
          Gender:
          <select name="gender" onChange={handleForm} className={styles.input}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </label>

        <button type="button" onClick={register} className={styles.button}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
