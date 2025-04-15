import './App.css'
import Auth from './hocs/Auth'
import Chat from './pages/Chat'
import Login from './pages/Login'
import Register from './pages/register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/chat' element={<Auth children={<Chat />}/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
