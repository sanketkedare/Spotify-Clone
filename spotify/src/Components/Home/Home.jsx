import React from 'react'
import Sidebar from './SideBar/Sidebar'
import Navbar from './Navbar/Navbar'
import PlayBar from './Play/PlayBar'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      Home Component
      <Sidebar/>
      <Navbar/>
      <PlayBar/>
      <Outlet/>
    </div>
  )
}

export default Home
