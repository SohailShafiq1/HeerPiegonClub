import React from 'react'
import style from './events.module.css'
const s = style
import event from '../../../../assets/event.png'
const Events = () => {
  return (
    <div className={s.container}>
      <img src={event} alt="" />
    </div>
  )
}

export default Events;
