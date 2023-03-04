import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from './styles';

export default function GoingHomeScreen({ navigation }) {

  const navigateAdult = () => {
    navigation.navigate("Adult");
  };

  const navigateGoingHome = () => {
    navigation.navigate("GoingHome");
  };


  return (
    <View>
      <Text>Going Home</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigateAdult()}>
        <Text style={styles.buttonTitle}>Return</Text>
      </TouchableOpacity>
    </View>
  );
}
