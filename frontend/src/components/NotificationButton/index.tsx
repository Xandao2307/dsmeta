import { useState } from 'react'
import './styles.css'
import icon from "../../assets/img/notification-icon.svg"

function NotificationButton() {
  return (
    <div className="dsmeta-red-btn">
        <img src={icon}/>
    </div>
  )
}

export default NotificationButton
