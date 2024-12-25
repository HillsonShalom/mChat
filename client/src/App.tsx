
import { useEffect, useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import Login from './components/Login'
import Register from './components/Register'
import LandingPage from './components/LandingPage'
import { Token } from './types/DTOs/token'
import { useAppDispatch, useAppSelector } from './store/store'
import { DataStatus } from './types/redux'
import fetchProfile from './store/reducers/userReducer'
import socket from './socket/io'

function App() {
  const [page, setPage] = useState<"login" | "register" | "main" | "landing">("landing");
  const dispatch = useAppDispatch()
  const statusUser = useAppSelector(s => s.user.status)

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      const {exp} = JSON.parse(atob(token.split('.')[1])) as Token
      const currentTime = Math.floor(Date.now() / 1000);
      if (exp < currentTime) { setPage("login")}
      // כאן להפעיל את הפונקציה שטוענת את הנתונים ורק כשהסטטוס ברידקס משתנה - לשנות לדף הראשי
      dispatch(fetchProfile());
      socket.connect()
      socket.on('connect', () => {
        console.log("socket connected.");
      })
      socket.on('disconnect', () => {
        console.log("socket disconnected");
      })
    } else {
      setPage("login")
    }
    // console.log(atob(localStorage.getItem("token")!.split('.')[1]));
  }, [])

  useEffect(() => {
    if (statusUser === DataStatus.SUCCESS) setPage('main')
  }, [statusUser])

  return (
    <div>
      {page === 'landing' && <LandingPage/>}
      {page === "login" && <Login nav={() => {setPage("register")}} goin={() => {setPage("main")}}/>}
      {page === "register" && <Register nav={() => {setPage("login")}} goin={() => {setPage("main")}}/>}
      {page === "main" && <Layout/>}
    </div>
  )
}

export default App
