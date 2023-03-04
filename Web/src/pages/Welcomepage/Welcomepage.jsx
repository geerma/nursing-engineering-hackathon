import React, { useState } from "react";
import './Welcomepage.css';
import NavBar from '../../components/Navbar/Navbar';

import { auth } from "../../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

const Welcomepage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Implement onAuthStateChanged

  const handleLogin = () => {
    console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="welcomepage-container">
      <div className='navbar'>
        <NavBar />
      </div>
      <div className="welcomepage-content">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h4>My Health Information</h4>
          <label>E-mail</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>

          <div>
            <span>Image 1</span>
            <span>Video</span>
            <span>Image 2</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcomepage;
