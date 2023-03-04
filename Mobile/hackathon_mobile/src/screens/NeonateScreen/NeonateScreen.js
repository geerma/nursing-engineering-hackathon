import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from './styles';

export default function NeonateScreen({ navigation }) {

  const navigateChildInfo = () => {
    navigation.navigate("ChildInfo");
  };
  
  const NeonateScreen = () => {
    navigation.navigate("Neonate");
  };

  return (
    <View>
      <Text>Neonate Screen</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigateChildInfo()}>
        <Text style={styles.buttonTitle}>Return</Text>
      </TouchableOpacity>
      
    </View>
  );
}
