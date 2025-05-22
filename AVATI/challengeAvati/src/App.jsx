import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { useAuth } from './hooks/useAuth'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import Home from './pages/Home/Home'
import PrivateRoute from './components/PrivateRoute' // importe o PrivateRoute que criou

const App = () => {
  const { auth, loading } = useAuth()

  if (loading) {
    return <p>Carregando...</p>
  }

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* Protegendo a Home */}
            <Route
              path="/"
              element={
                <PrivateRoute auth={auth}>
                  <Home />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
