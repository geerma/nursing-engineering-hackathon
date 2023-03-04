import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from './styles';

export default function HomeScreen({ navigation }) {
  
  const navigateLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View>
      <Text>Home Screen</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigateLogin()}>
        <Text style={styles.buttonTitle}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
