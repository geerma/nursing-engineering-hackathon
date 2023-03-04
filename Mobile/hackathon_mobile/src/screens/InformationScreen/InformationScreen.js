import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export default function InformationScreen({ navigation }) {
  const navigateLogin = () => {
    navigation.navigate("Login");
  };
  const navigateInformation = () => {
    navigation.navigate("Information");
  };

  const navigateAdult = () => {
    navigation.navigate("Adult");
  };

  const navigateChildInfo = () => {
    navigation.navigate("ChildInfo");
  };


  return (
    <View>
      <Text>Information</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateAdult()}
      >
        <Text style={styles.buttonTitle}>Adult</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigateChildInfo()}>
        <Text style={styles.buttonTitle}>Child</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigateLogin()}>
        <Text style={styles.buttonTitle}>Return</Text>
      </TouchableOpacity>
    </View>
  );
}
