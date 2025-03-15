import React from 'react'
import style from './Navbar.module.css'
const s  = style
import logo from '../../../../assets/logo.png' 
const Navbar = () => {
  return (
    <div className={s.container} >
      <div className={s.logo}>
        <img src={logo} alt="" />
      </div>
      <div className={s.navbar}>
        <button>
                Home
        </button>
        <button>
                Weather
        </button>
        <button>
                Tournaments
        </button>
        <button>
                Contact Us
        </button>
      </div>
      <div className={s.language}>
        <button>
            Urdu
        </button>
        <button>
            English
        </button>
      </div>
    </div>
  )
}

export default Navbar
