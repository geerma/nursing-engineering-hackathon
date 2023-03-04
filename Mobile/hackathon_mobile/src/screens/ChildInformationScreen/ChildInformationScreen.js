import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from './styles';

export default function ChildInformationScreen({ navigation }) {

  const navigateInformation = () => {
    navigation.navigate("Information");
  };

  
  const navigateChildInfo = () => {
    navigation.navigate("ChildInfo");
  };

  const navigateNeonate = () => {
    navigation.navigate("Neonate");
  };
  const navigateChild = () => {
    navigation.navigate("Child");
  };

  const navigateAdolescent = () => {
    navigation.navigate("Adolescent");
  };


  




  return (
    <View>
      <Text>Child Information Screen </Text>
      <TouchableOpacity style={styles.button} onPress={() => navigateNeonate()}>
        <Text style={styles.buttonTitle}>Neonate</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.button} onPress={() => navigateChild()}>
        <Text style={styles.buttonTitle}>Child</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigateAdolescent()}>
        <Text style={styles.buttonTitle}>Adolescent</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigateInformation()}>
        <Text style={styles.buttonTitle}>Return</Text>
      </TouchableOpacity>
      
    </View>
  );
}
