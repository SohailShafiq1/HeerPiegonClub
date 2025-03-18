import { IoAddCircleOutline } from "react-icons/io5"; 
import React from 'react'
import style from './tournament.module.css'
const s = style
const Tournament = () => {
  return (
    <div className={s.container}>
      <div className={s.top}>
        <h1>
            Tournament
        </h1>
        
        <IoAddCircleOutline className={s.add} />
        
      </div>
    </div>
  )
}

export default Tournament
