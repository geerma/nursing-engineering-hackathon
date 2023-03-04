import { useEffect, useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";

import { auth } from "../../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigateRegistration = () => {
    navigation.navigate("Registration");
  };

  const navigateHome = () => {
    navigation.navigate("Home");
  };

  const navigateInbox = () => {
    navigation.navigate("Inbox");
  };
  const navigateInformation = () => {
    navigation.navigate("Information");
  };

  const navigateMyAccount = () => {
    navigation.navigate("MyAccount");
  };

  useEffect(() => {
    console.log("UseEffect");
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("You are signed in as", user);
        navigation.navigate("Home");
      }
    });

    return unsubscribe;
  }, []);

  const handleLogin = () => {
    console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.header}>Login Screen</Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        onChangeText={(text) => setEmail(text)}
        value={email}
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
        autoCapitalize="none"
      />

      <TouchableOpacity style={styles.button} onPress={() => handleLogin()}>
        <Text style={styles.buttonTitle}>Log in</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.link}>
        <Text style={styles.link}>Forgot Password</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.link}>
        <Text style={styles.link}>Privacy</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navigation}
        onPress={() => navigateRegistration()}
      >
        <Text style={styles.navigationTitle}>GoToRegistration</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navigation}
        onPress={() => navigateHome()}
      >
        <Text style={styles.navigationTitle}>GoToHome</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navigation}
        onPress={() => navigateInbox()}
      >
        <Text style={styles.navigationTitle}>GoToInbox</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.navigation} onPress={() => navigateInformation()}>
        <Text style={styles.navigationTitle}>GoToInformation</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navigation}
        onPress={() => navigateMyAccount()}
      >
        <Text style={styles.navigationTitle}>GoToMyAccount</Text>
      </TouchableOpacity>

    </View>
  );
}
