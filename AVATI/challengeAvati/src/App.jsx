import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { useAuth } from './hooks/useAuth'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import Home from './pages/Home/Home'


const App = () => {

  const {auth, loading} = useAuth()
  
  if(loading){
    return <p>Carregando...</p>
  }

  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <div className='container'>
          <Routes>
            <Route path='/login' element={!auth ? <Login/> : <Navigate to={"/"}/>}/>
            <Route path='/register' element={!auth ? <Register/> : <Navigate to={"/"}/>}/>
            <Route path='/' element={auth ? <Home/> : <Navigate to={"/login"}/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App