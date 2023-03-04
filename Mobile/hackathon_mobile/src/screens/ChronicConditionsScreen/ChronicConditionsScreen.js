import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from './styles';

export default function ChronicConditionsScreen({ navigation }) {


  const navigateAdult = () => {
    navigation.navigate("Adult");
  };

  const navigateChronicConditions = () => {
    navigation.navigate("ChronicConditions");
  };

  return (
    <View>
      <Text>Chronic Conditions</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigateAdult()}>
        <Text style={styles.buttonTitle}>Return</Text>
      </TouchableOpacity>
    </View>
  );
}
