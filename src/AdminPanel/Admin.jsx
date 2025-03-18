import React from 'react'
import style from './admin.module.css'
import Navbar from './Navbar'
import Tournament from './Pages/Touraments/Tournament'

const s = style
const Admin = () => {
  return (
    <div className={s.admin}>
      <Navbar/>
      <Tournament/>
    </div>
  )
}

export default Admin
