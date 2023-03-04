import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from './styles';

export default function InboxScreen({ navigation }) {
    const navigateLogin = () => {
        navigation.navigate("Login");
      };
    
      return (
        <View>
          <Text>Inbox Screen</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigateLogin()}>
            <Text style={styles.buttonTitle}>Login</Text>
          </TouchableOpacity>
        </View>
      )
}