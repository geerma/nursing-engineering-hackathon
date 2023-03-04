import React, { useState } from 'react'
import "./Notificationspage.css"
import { VscAccount } from "react-icons/vsc";
import newUsers from "./newusers.json"

const Notificationspage = () => {

  return (
  <div id="inx9u" className="gjs-row">
      <div className="gjs-cell" id="ignxt">
        <h2>New Users</h2>
        {
          newUsers.map((item) => (
              <div className="gjs-row" id="iivl" key={item.id}>
                <div className="gjs-cell" id="ixzi">
                    <VscAccount id='icon'/>
                </div>
                <div className="gjs-cell" id="igqj">
                <p>{item.first_name} { item.last_name}</p>
                </div>
              </div>
          ))
        }
    </div>
      <div className="gjs-cell" id="ic6b">
        <h2>Update on system</h2>
    </div>
      <div className="gjs-cell" id="i1fco">
        <h2>Update on Education</h2>
    </div>
  </div>

  )
}

export default Notificationspage