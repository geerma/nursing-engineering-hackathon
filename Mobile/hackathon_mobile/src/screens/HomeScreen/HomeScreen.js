import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

import { auth } from "../../firebase/config";

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

  return (
    <View>
      <Text>Home Screen</Text>
      <TouchableOpacity style={styles.button} onPress={() => handleLogout()}>
        <Text style={styles.buttonTitle}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
