import { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

import { auth, db } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";

export default function SurgeriesScreen({ navigation }) {
  const [surgeries, setSurgeries] = useState();

  const getSurgeries = async () => {
    const docRef = doc(db, "information", "gbVf8nsPkBzSMbUOKUHL");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const surgeriesData = docSnap.data();

      console.log(surgeriesData);
      setSurgeries(surgeriesData);
    } else {

      console.log("No such information");
    }
  };

  useEffect(() => {
    getSurgeries();
  }, []);

  return (
    <View style={styles.container}>
    </View>
  );
}
