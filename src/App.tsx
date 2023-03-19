import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home/Home'
import { Header } from './Components/Header/Header'
import './App.css'

function App () {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='videos/:videoId' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
