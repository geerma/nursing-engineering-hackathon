import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from './styles';

export default function AdultInformationScreen({ navigation }) {
  const navigateInformation = () => {
    navigation.navigate("Information");
  };


  const navigateAdult = () => {
    navigation.navigate("Adult");
  };

  const navigateChronicConditions = () => {
    navigation.navigate("ChronicConditions");
  };

  const navigateSurgeries = () => {
    navigation.navigate("Surgeries");
  };

  const navigateArriving = () => {
    navigation.navigate("Arriving");
  };

  const navigateGoingHome= () => {
    navigation.navigate("GoingHome");
  };
  

  return (
    <View style={styles.screen}>
      <Text style={styles.header}>Adult Information Screen</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigateChronicConditions()}>
        <Text style={styles.buttonTitle}>Chronic Conditions</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigateSurgeries()}>
        <Text style={styles.buttonTitle}>Surgeries</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigateArriving()}>
        <Text style={styles.buttonTitle}>Arriving to the Hospital</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigateGoingHome()}>
        <Text style={styles.buttonTitle}>Going Home/Recovery</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigateInformation()}>
        <Text style={styles.buttonTitle}>Return</Text>
      </TouchableOpacity>

    </View>
  );
}
