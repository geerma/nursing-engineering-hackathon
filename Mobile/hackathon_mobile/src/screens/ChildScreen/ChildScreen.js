import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from './styles';

export default function ChildScreen({ navigation }) {


  const navigateChild = () => {
    navigation.navigate("Child ");
  };

  const navigateChildInfo = () => {
    navigation.navigate("ChildInfo");
  };


  return (
    <View>
      <Text>Child Screen</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigateChildInfo()}>
        <Text style={styles.buttonTitle}>Return</Text>
      </TouchableOpacity>
      
    </View>
  );
}
