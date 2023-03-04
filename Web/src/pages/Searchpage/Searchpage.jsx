// import React, { useEffect, useState } from 'react';
// import './SearchPage.css';
// import NavBar from '../../components/Navbar/Navbar';
// import PatientData from '../../mock-patients.json';
// import CartData from '../../mock-carts.json';
// import { collection, doc, getDoc, setDoc } from 'firebase/firestore';
// import { db } from '../../firebase/config.js';

// const Searchpage = () => {
//   const [patientQuery, setPatientQuery] = useState('');
//   const [patient, setPatient] = useState('');
//   const [cartQuery, setCartQuery] = useState('');
//   const [cart, setCart] = useState('');
//   const [docSnap, setDocSnap] = useState(null);

//   useEffect(() => {
//     const getDocSnap = async () => {
//       const docRef = doc(db, 'patient', 'QDGRfnwJMoAyDJDfBcFY');
//       const snap = await getDoc(docRef);
//       if (snap.exists()) {
//         setDocSnap(snap);
//       } else {
//         console.log('No such document!');
//       }
//     };
//     getDocSnap();
//   }, []);

//   const sendItem = () => {
//     console.log('Chosen patient:', patient);
//     console.log('Chosen cart item:', cart);
//   };

// //   // const sendItem = async () => {
// //   //   if (docSnap.exists()) {
// //   //     console.log("Document data:", docSnap.data());
// //   //   } else {
// //   //     // doc.data() will be undefined in this case
// //   //     console.log("No such document!");
// //   //   }
// //   // };

//   return (
//     <div className='searchpage'>
//       <NavBar />
//       <div className='searchpatient'>
//         <h1>Search For a Patient</h1>
//         <input
//           placeholder='Enter Patient Name'
//           onChange={(event) => setPatientQuery(event.target.value)}
//         />
//       </div>
//       <div className='patientinfo'>
//         {PatientData.filter((postPatient) => {
//           if (patientQuery === '') {
//             return null;
//           } else if (
//             postPatient.first_name
//               .toLowerCase()
//               .includes(patientQuery.toLowerCase())
//           ) {
//             return postPatient;
//           }
//         }).map((postPatient, index) => (
//           <div className='resultbox' key={index}>
//             <p>{postPatient.first_name}</p>
//             <p>{postPatient.email}</p>
//             <button onClick={() => setPatient(postPatient.id)}>
//               Choose this patient
//             </button>
//           </div>
//         ))}
//       </div>
//       <div className='searchcart'>
//         <h1>Select the cart item to send to the patient</h1>
//         <input
//           placeholder='Enter Cart Item To Send'
//           onChange={(event) => setCartQuery(event.target.value)}
//         />
//       </div>
//       <div className='cartinfo'>
//         {CartData.filter((postCart) => {
//           if (cartQuery === '') {
//             return null;
//           } else if (
//             postCart.title.toLowerCase().includes(cartQuery.toLowerCase())
//           ) {
//             return postCart;
//           }
//         }).map((postCart, index) => (
//           <div className='resultbox' key={index}>
//             <p>{postCart.title}</p>
//             <p>{postCart.url}</p>
//             <button onClick={() => setCart(postCart.id)}>
//               Choose this cart item
//             </button>
//           </div>
//         ))}
//       </div>
//       <button onClick={sendItem}>
//         Send chosen cart item to chosen patient
//       </button>
//     </div>
//   );
// };

// export default Searchpage;

import React, { useEffect, useState } from 'react';
import './Searchpage.css';
import NavBar from '../../components/Navbar/Navbar';
import PatientData from '../../mock-patients.json'; //test patient data, change later
import CartData from '../../mock-carts.json'; //test cart data, change later
import { collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase/config.js';

const docRef = doc(db, 'patient', 'QDGRfnwJMoAyDJDfBcFY');
const docSnap = await getDoc(docRef);

const Searchpage = () => {
  const [patientQuery, setPatientQuery] = useState('');
  const [patient, setPatient] = useState('');
  const [cartQuery, setCartQuery] = useState('');
  const [cart, setCart] = useState('');

  const sendItem = async () => {
    console.log('Chosen patient:', chosenPatientId);
    console.log('Chosen cart item:', chosenCartId);
  };

  return (
    <div className="searchpage-container">
      <div className='navbar'>
        <NavBar />
      </div>
      <div className="searchpage-content">
        <div className="searchpatient">
          <h1>Search For a Patient</h1>
          <input
            placeholder="Enter Patient Name"
            onChange={(event) => setPatientQuery(event.target.value)}
          />
        </div>
        <div className="patientinfo">
          {PatientData.filter((postPatient) => {
            if (patientQuery === '') {
              return null;
            } else if (
              postPatient.first_name
                .toLowerCase()
                .includes(patientQuery.toLowerCase())
            ) {
              return postPatient;
            }
          }).map((postPatient, index) => (
            <div className="resultbox" key={index}>
              <p>{postPatient.first_name}</p>
              <p>{postPatient.email}</p>
              <button onClick={(e) => this.setPatient(postPatient.id)}>
                Choose this patient
              </button>
            </div>
          ))}
        </div>
        <div className="searchcart">
          <h1>Select the cart item to send to the patient</h1>
          <input
            placeholder="Enter Cart Item To Send"
            onChange={(event) => setCartQuery(event.target.value)}
          />
        </div>
        <div className="cartinfo">
          {CartData.filter((postCart) => {
            if (cartQuery === '') {
              return null;
            } else if (
              postCart.title.toLowerCase().includes(cartQuery.toLowerCase())
            ) {
              return postCart;
            }
          }).map((postCart, index) => (
            <div className="resultbox" key={index}>
              <p>{postCart.title}</p>
              <p>{postCart.url}</p>
              <button onClick={(e) => this.setCart(postCart.id)}>
                Choose this cart item
              </button>
            </div>
          ))}
        </div>
        <button
          onClick={(e) => {
            sendItem();
          }}
        >
          Send chosen cart item to chosen patient
        </button>
      </div>
    </div>
  );
};

export default Searchpage;