import { StyleSheet,Image, Text, TouchableOpacity, View } from "react-native";
import styles from './styles';
import FetchData from "../../getSurgeries";
export default function SurgeriesScreen({ navigation }) {
  const navigateAdult = () => {
    navigation.navigate("Adult");
  };


  const navigateSurgeries = () => {
    navigation.navigate("Surgeries");
  };

  return (
    <View style = {styles.container}>
     <FetchData />   

    </View>
  );
}
