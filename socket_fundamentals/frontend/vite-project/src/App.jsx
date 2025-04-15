import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Rooms from './pages/Rooms'
import ChatRoom from './pages/ChatRoom'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Rooms/>}></Route>
        <Route path='/chatroom/:roomname' element={<ChatRoom/>}></Route>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
