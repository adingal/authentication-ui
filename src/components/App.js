import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Components
import Header from 'components/Header'
import Footer from 'components/Footer'

// Pages
import Login from 'pages/Login'
import Users from 'pages/Users'
import UserDetails from 'pages/UserDetails'

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UserDetails />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
