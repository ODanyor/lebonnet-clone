import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { ErrorBoundary } from "shared/utils/errorBoundary"

// Components
import { Routes } from "./routes"

// Containers
import { Layout } from "shared/containers"

function App() {
  return (
    <Router>
      <Layout>
        <ErrorBoundary>
          <Routes />
        </ErrorBoundary>
      </Layout>
    </Router>
  )
}

export default App
