import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Redux
import { store } from 'store'
import { Provider } from 'react-redux'

// Components
import Header from 'components/Header'
import Footer from 'components/Footer'
import Loader from 'components/Loader'

// Pages
import Login from 'pages/Login'
import Users from 'pages/Users'
import UserDetails from 'pages/UserDetails'

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
          </Routes>
        </main>
        <Footer />
        <Loader />
      </Router>
    </Provider>
  )
}

export default App
