import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from './styles';

export default function ArrivingToHospitalScreen({ navigation }) {



  const navigateAdult = () => {
    navigation.navigate("Adult");
  };

  const navigateArriving = () => {
    navigation.navigate("Arriving");
  };

  return (
    <View>
      <Text>Arriving to the Hospital</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigateAdult()}>
        <Text style={styles.buttonTitle}>Return</Text>
      </TouchableOpacity>
    </View>
  );
}
