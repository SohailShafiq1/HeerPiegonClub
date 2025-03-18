import React from 'react'
import style from './admin.module.css'
import Navbar from './Navbar'
import Tournament from './Pages/Touraments/Tournament'
import Post from './Pages/Posts/Post'
import News from './Pages/News/News'

const s = style
const Admin = () => {
  return (
    <div className={s.admin}>
      <Navbar/>
      <Tournament/>
      <News/>
      <Post/>

    </div>
  )
}

export default Admin
