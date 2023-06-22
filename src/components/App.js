import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Redux
import { store } from 'store'
import { Provider } from 'react-redux'

// Components
import Header from 'components/Header'
import Footer from 'components/Footer'
import Loader from 'components/Loader'
import Modal from 'components/Modal'

// Pages
import Login from 'pages/Login'
import Users from 'pages/Users'
import UserDetails from 'pages/UserDetails'
import AddUser from 'pages/AddUser'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:id" element={<UserDetails />} />
            <Route path="/users/add" element={<AddUser />} />
          </Routes>
        </main>
        <Footer />
        <Loader />
        <Modal />
      </Router>
    </Provider>
  )
}

export default App
