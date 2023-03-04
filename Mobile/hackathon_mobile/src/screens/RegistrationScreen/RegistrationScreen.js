import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";

import { auth } from "../../firebase/config";
import { useEffect, useState } from "react";

import { createUserWithEmailAndPassword } from "firebase/auth";

export default function RegistrationScreen({ navigation }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleRegister = () => {
    if (password == "") {
      alert("Enter a Password");
      return;
    }
    if (password != confirmPassword) {
      alert("Verify your Password");
      return;
    } else {
      alert("Registered");
    }

    createUserWithEmailAndPassword(auth, email, password)
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

  return (
    <View style={styles.screen}>
      <Text style={styles.header}>Registration Screen</Text>

      <TextInput
        style={styles.input}
        placeholder="FullName"
        onChangeText={(text) => setFullName(text)}
        value={fullName}
        autoCapitalize="none"
      />

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

      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        onChangeText={(text) => setConfirmPassword(text)}
        value={confirmPassword}
        autoCapitalize="none"
      />

      <TouchableOpacity style={styles.button} onPress={() => handleRegister()}>
        <Text style={styles.buttonTitle}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}
