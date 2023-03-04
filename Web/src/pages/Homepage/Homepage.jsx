import React from 'react'
import "./Homepage.css"
import NavBar from "../../components/Navbar/Navbar"


function Homepage() {
  return (
    <>
      <div className='homepage-container'>
        <div className='navbar'>
          <NavBar />
        </div>
        <div className='homepage-content'>
          <h1>Welcome to the My Health Information Main Page</h1>
          <p>News items, videos, or other content goes here.</p>
        </div>
      </div>
    </>

  )
}

export default Homepage