import './App.css'
import Navbar from './components/Navbar'
import Create from './components/Create'
import { Route,Routes } from 'react-router-dom'
import Read from './components/Read'
import Update from './components/Update'

function App() {
  return (
    <div className="mx-auto">
      <Navbar/>
        <Routes>
          <Route path='/' element={<Create/>}></Route>
          <Route path='/peoplelist' element={<Read/>}></Route>
          <Route path='/update/:id' element={<Update/>}></Route>
        </Routes>
    </div>
  )
}

export default App
