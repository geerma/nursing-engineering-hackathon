// import { auth, db } from "../../firebase/config";
// import { doc, getDoc } from "firebase/firestore";


// const getSurgeries = async () => {
//     const docRef = doc(db, "information", "gbVf8nsPkBzSMbUOKUHL");
//     const docSnap = await getDoc(docRef);

//     if (docSnap.exists()) {
//       const surgeriesData = docSnap.data();

//       console.log(informationData);
//       setSurgeries(surgeriesData);
//     } else {

//       console.log("No such information");
//     }
//   };
// useEffect(() => {
//     getSurvey();
//   }, []);
