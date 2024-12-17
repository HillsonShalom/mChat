
import { useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import Login from './components/Login'
import Register from './components/Register'

function App() {
  const [page, setPage] = useState<"login" | "register" | "main">("login")

  return (
    <div>
      {page === "login" && <Login nav={() => {setPage("register")}} goin={() => {setPage("main")}}/>}
      {page === "register" && <Register nav={() => {setPage("login")}} goin={() => {setPage("main")}}/>}
      {page === "main" && <Layout/>}
    </div>
  )
}

export default App
