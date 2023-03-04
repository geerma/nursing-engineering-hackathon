import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from './styles';

export default function AdolescentScreen({ navigation }) {


  const navigateChildInfo = () => {
    navigation.navigate("ChildInfo");
  };

  const navigateAdolescent = () => {
    navigation.navigate("Adolescent");
  };


  return (
    <View>
      <Text>Adolescent Screen</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigateChildInfo()}>
        <Text style={styles.buttonTitle}>Return</Text>
      </TouchableOpacity>
      
    </View>
  );
}


