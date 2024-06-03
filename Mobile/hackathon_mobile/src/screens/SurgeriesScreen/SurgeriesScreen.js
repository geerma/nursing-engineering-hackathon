import { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

import { auth, db } from "../../firebase/config";
import { doc, getDoc, collection, getDocs, } from "firebase/firestore";

// Adult Surgery Screen
export default function SurgeriesScreen({ navigation }) {
  const [allSurgeries, setAllSurgeries] = useState([]);
  const [surgeryData, setSurgeryData] = useState();

  const getAllSurgeries = async () => {
    const querySnapshot = await getDocs(collection(db, "information"));
    let allSurgeriesArray = new Array();
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      allSurgeriesArray.push(doc.data().description);
    });
    setAllSurgeries(allSurgeriesArray);
  }

  const getSurgeryInformation = async (key_id) => {
    let doc_id;
    // Hard coding in doc_id directly for prototype
    if (key_id == 0) {
      doc_id = "DfaFeGAYMdIIkLWOms5T"
    } else if (key_id == 1) {
      doc_id = "gbVf8nsPkBzSMbUOKUHL"
    } else {
      console.error("No doc_id");
    }

    const docRef = doc(db, "information", doc_id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const surgeryData = docSnap.data();
      console.log(surgeryData);
      setSurgeryData(surgeryData);
    } else {
      console.log("No such information");
    }
  };

  useEffect(() => {
    getAllSurgeries();
  }, []);

  return (
    <View style={styles.container}>
      {allSurgeries.map((surgery, id) => (
        <TouchableOpacity key={id} style={styles.button} onPress={() => getSurgeryInformation(id)}>
          <Text style={styles.buttonTitle}>{surgery}</Text>
        </TouchableOpacity>
      ))}
      {surgeryData &&
        <View style={styles.container}>
          <Text style={styles.surgery_information}>Surgery Name: {surgeryData.description}</Text>
          <Text style={styles.surgery_information}>Surgery Information: {surgeryData.information}</Text>
          <Text style={styles.surgery_information}>Surgery Duration: {surgeryData.duration}</Text>
          <Text style={styles.surgery_information}>Surgery Expected Recovery: {surgeryData.recovery}</Text>
        </View>
      }
    </View>
  );
}
