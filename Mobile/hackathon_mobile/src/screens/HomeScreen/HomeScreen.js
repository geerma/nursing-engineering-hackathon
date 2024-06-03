import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

import { useEffect } from "react";
import { auth, db } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";

import { signOut } from "firebase/auth";

export default function HomeScreen({ navigation }) {
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigation.navigate("Login");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };


  const navigateInbox = () => {
    navigation.navigate("Inbox");
  };
  const navigateInformation = () => {
    navigation.navigate("Information");
  };

  const navigateMyAccount = () => {
    navigation.navigate("MyAccount");
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.header}>Home Screen</Text>
      <TouchableOpacity
        style={styles.navigation}
        onPress={() => navigateInbox()}
      >
        <Text style={styles.navigationTitle}>GoToInbox</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.navigation} onPress={() => navigateInformation()}>
        <Text style={styles.navigationTitle}>GoToInformation</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navigation}
        onPress={() => navigateMyAccount()}
      >
        <Text style={styles.navigationTitle}>GoToMyAccount</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => handleLogout()}>
        <Text style={styles.buttonTitle}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
