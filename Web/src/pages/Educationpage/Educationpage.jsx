import React, { useEffect, useState } from 'react';
import './Educationpage.css';
import CartData from '../../mock-carts.json'; //test cart data, change later
import { collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase/config.js';
import NavBar from '../../components/Navbar/Navbar';

const Educationpage = () => {
  const [cartQuery, setCartQuery] = useState('');
  const [cart, setCart] = useState('');
  const [docSnap, setDocSnap] = useState(null);

  return (
    <div className='educationpage-container'>
      <div className='navbar'>
        <NavBar />
      </div>
      <div className='educationpage-content'>
        <h1>Education Page</h1>
        <div className="searchcart">
          <input
            placeholder="Searchbar"
            onChange={(event) => setCartQuery(event.target.value)}
          />
        </div>
        <div className="cartinfo">
          {CartData.filter((postCart) => {
            if (cartQuery === '') {
              return postCart;
            } else if (
              postCart.title.toLowerCase().includes(cartQuery.toLowerCase())
            ) {
              return postCart;
            }
          }).map((postCart, index) => (
            <div className="resultbox" key={index}>
              <p>{postCart.title}</p>
              <p>{postCart.url}</p>
              <button onClick={(e) => setCart(postCart.id)}>
                Learn more
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Educationpage