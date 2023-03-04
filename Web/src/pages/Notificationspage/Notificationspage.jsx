import React, { useState } from 'react'
import "./Notificationspage.css"
import { VscAccount } from "react-icons/vsc";
import newUsers from "./new-users.json"
import systemUpdate from "./system-update.json"
import educationUpdate from "./education-update.json"
import NavBar from '../../components/Navbar/Navbar';

const Notificationspage = () => {

  return (
    <div className="notpage-container">
      <div className='navbar'>
        <NavBar />
      </div>
      <div className="notpage-content">
        <div id="inx9u" className="gjs-row">
          <div className="gjs-cell" id="ignxt">
            <h2>New Users</h2>
            {
              newUsers.map((item) => (
                <div className="gjs-row" id="iivl" key={item.id}>
                  <div className="gjs-cell" id="ixzi">
                    <VscAccount id='icon' />
                  </div>
                  <div className="gjs-cell" id="igqj">
                    <p>{item.first_name} {item.last_name}</p>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="gjs-cell" id="ic6b">
            <h2>Update on system</h2>
            {
              systemUpdate.map((item) => (
                <div className="gjs-row" id="ih5k" key={item.id}>
                  <div className="gjs-cell" id="i9v3">
                    <h4>{item.title}</h4>
                  </div>
                  <div className="gjs-cell" id="i3fd">
                    <p>{item.description}</p>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="gjs-cell" id="i1fco">
            <h2>Update on Education</h2>
            {
              educationUpdate.map((item) => (
                <div className="gjs-row" id="iua2">
                  <div className="gjs-cell" id="i5ds">
                    <h4>{item.title}</h4>
                  </div>
                  <div className="gjs-cell" id="iwfe">
                    <p>{item.description}</p>
                  </div>
                  <div className="gjs-cell" id="igps">
                    <p>{item.url}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notificationspage