import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from './styles';

export default function RegistrationScreen({ navigation }) {
  const navigateLogin = () => {
    navigation.navigate("Login");
  };

  const navigateRegistration = () => {
    navigation.navigate("Registration");
  };

  return (
    <View>
      <Text>Registration Screen</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigateLogin()}>
        <Text style={styles.buttonTitle}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
