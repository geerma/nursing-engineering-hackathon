import React, { useEffect, useState } from 'react';
import styles from "./SearchPage.css";
import Data from "./mock-patients.json"; //test patient data, change later

const Searchpage = () => {
  const [query, setQuery] = useState("");
  const [patient, setPatient] = useState("");

  return (
    <div className={styles.searchpage}>
      {/* <Navbar /> */}
      <h1>Search For a Patient</h1>
      <div className='searchpatient'>
        <input placeholder="Enter Patient Name" onChange={event => setQuery(event.target.value)} />
        {/* <input placeholder="Enter Patient DOB" onChange={event => setQuery(event.target.value)} />
        <input placeholder="Enter Patient Email" onChange={event => setQuery(event.target.value)} />
        <input placeholder="Enter Patient Health Number" onChange={event => setQuery(event.target.value)} />
        <input placeholder="Enter Patient Username" onChange={event => setQuery(event.target.value)} /> */}
      </div>
      <div className='patientinfo'>
        {
          Data.filter(post => {
            if (query === '') {
              return null;
            } else if (post.first_name.toLowerCase().includes(query.toLowerCase())) {
              return post;
            }
          }).map((post, index) => (
            <div className={styles.resultbox} key={index}>
              <p>{post.first_name}</p>
              <p>{post.email}</p>
              <button onClick={(e) => this.setPatient(post.id)}>
                Choose this patient
              </button>
            </div>
          ))
        }
      </div>
      <div className='patientinfo'>
        <h1>Select the cart item to send to the patient</h1>
      </div>
    </div>
  )
}

export default Searchpage