import React, { useEffect, useState } from 'react';
import "./SearchPage.css";
import PatientData from "../../mock-patients.json"; //test patient data, change later
import CartData from "../../mock-carts.json"; //test cart data, change later

const Searchpage = () => {
  const [patientQuery, setPatientQuery] = useState("");
  const [patient, setPatient] = useState("");
  const [cartQuery, setCartQuery] = useState("");
  const [cart, setCart] = useState("");

  return (
    <div className='searchpage'>
      {/* <Navbar /> */}
      <div className='searchpatient'>
        <h1>Search For a Patient</h1>
        <input placeholder="Enter Patient Name" onChange={event => setPatientQuery(event.target.value)} />
        {/* <input placeholder="Enter Patient DOB" onChange={event => setPatientQuery(event.target.value)} />
        <input placeholder="Enter Patient Email" onChange={event => setPatientQuery(event.target.value)} />
        <input placeholder="Enter Patient Health Number" onChange={event => setPatientQuery(event.target.value)} />
        <input placeholder="Enter Patient Username" onChange={event => setPatientQuery(event.target.value)} /> */}
      </div>
      <div className='patientinfo'>
        {
          PatientData.filter(postPatient => {
            if (patientQuery === '') {
              return null;
            } else if (postPatient.first_name.toLowerCase().includes(patientQuery.toLowerCase())) {
              return postPatient;
            }
          }).map((postPatient, index) => (
            <div className='resultbox' key={index}>
              <p>{postPatient.first_name}</p>
              <p>{postPatient.email}</p>
              <button onClick={(e) => this.setPatient(postPatient.id)}>
                Choose this patient
              </button>
            </div>
          ))
        }
      </div>
      <div className='searchcart'>
        <h1>Select the cart item to send to the patient</h1>
        <input placeholder="Enter Cart Item To Send" onChange={event => setCartQuery(event.target.value)} />
      </div>
      <div className='cartinfo'>
        {
          CartData.filter(postCart => {
            if (cartQuery === '') {
              return null;
            } else if (postCart.title.toLowerCase().includes(cartQuery.toLowerCase())) {
              return postCart;
            }
          }).map((postCart, index) => (
            <div className='resultbox' key={index}>
              <p>{postCart.title}</p>
              <p>{postCart.url}</p>
              <button onClick={(e) => this.setCart(postCart.id)}>
                Choose this cart item
              </button>
            </div>
          ))
        }
      </div>
      <button onClick={(e) => this.sendItem(patient, cart)}>
                Send chosen cart item to chosen patient
              </button>
    </div>
  )
}

export default Searchpage