import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from './styles';

export default function ChildInformationScreen({ navigation }) {
  const navigateInformation = () => {
    navigation.navigate("Information");
  };


  const navigateChild = () => {
    navigation.navigate("Child ");
  };

  return (
    <View>
      <Text>Child Information Screen</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigateInformation()}>
        <Text style={styles.buttonTitle}>Return</Text>
      </TouchableOpacity>
      
    </View>
  );
}
