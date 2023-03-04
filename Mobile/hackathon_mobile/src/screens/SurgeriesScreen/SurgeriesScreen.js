import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from './styles';

export default function SurgeriesScreen({ navigation }) {
  const navigateAdult = () => {
    navigation.navigate("Adult");
  };


  const navigateSurgeries = () => {
    navigation.navigate("Surgeries");
  };

  return (
    <View>
      <Text>Surgeries</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigateAdult()}>
        <Text style={styles.buttonTitle}>Return</Text>
      </TouchableOpacity>
    </View>
  );
}
