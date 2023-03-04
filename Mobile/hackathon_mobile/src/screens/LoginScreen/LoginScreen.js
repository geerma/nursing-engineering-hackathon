import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export default function LoginScreen({ navigation }) {
  const navigateLogin = () => {
    navigation.navigate("Login");
  };

  const navigateRegistration = () => {
    navigation.navigate("Registration");
  };

  const navigateHome = () => {
    navigation.navigate("Home");
  };

  const navigateInbox = () => {
    navigation.navigate("Inbox");
  };

  return (
    <View>
      <Text>Login Screen</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateRegistration()}
      >
        <Text style={styles.buttonTitle}>GoToRegistration</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigateHome()}>
        <Text style={styles.buttonTitle}>GoToHome</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigateInbox()}>
        <Text style={styles.buttonTitle}>GoToInbox</Text>
      </TouchableOpacity>
    </View>
  );
}
