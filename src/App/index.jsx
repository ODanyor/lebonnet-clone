import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import Routes from "./Routes"

// Layouts
import Navbar from "./layouts/navbar/Navbar"
import Footer from "./layouts/footer/Footer"

import axios from "axios"
import jwtDecode from "jwt-decode"

// Redux
import store from "./redux/store"
import { SET_AUTHENTICATED } from "./redux/types"
import { logOut } from "./redux/actions/userActions"

axios.defaults.baseURL =
  "https://europe-west2-lebonnet-0000.cloudfunctions.net/api"

const token = localStorage.Token
if (token) {
  const decodedToken = jwtDecode(token)
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logOut())
    window.location.href = "/account"
  } else {
    store.dispatch({ type: SET_AUTHENTICATED })
    axios.defaults.headers.common["Authorization"] = token
  }
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes />
      <Footer />
    </Router>
  )
}

export default App
