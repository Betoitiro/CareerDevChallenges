import React from 'react'
import './App.css'

//ReactRouter
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

//Hooks
import { useAuth } from './hooks/useAuth'

//componets
import Navbar from './components/Navbar'
import Footer from './components/Footer'

//pages
import Home from './pages/Home/Home'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import Editprofile from './pages/EditProfile/Editprofile'


const App = () => {

  const {auth, loading} = useAuth()

  if(loading){
    return <p>Carregando...</p>
  }
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path='/login' element={!auth ? <Login />: <Navigate to="/"/>} />
            <Route path='/register' element={!auth ? <Register /> : <Navigate to={"/"}/>} />
            <Route path='/' element={auth ? <Home /> : <Navigate to="/login"/>} />
            <Route path='/profile' element={auth ? <Editprofile /> : <Navigate to="/login"/>} />

          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App