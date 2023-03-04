import React, {useState} from 'react';
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import styles from "./styles";

export default function MyAccountScreen({ navigation }) {
  const [userFullName, setUserFullName] = useState('John Doe');
  const [userDateOfBirth, setUserDateOfBirth] = useState('01/01/2001');
  const [userEmail, setUserEmail] = useState('johndoe@gmail.com');
  const [userPassword, setUserPassword] = useState('password');
  const [userName, setUserName] = useState('johndoe');
  const [userEmergencyContactName, setUserEmergencyContactName] = useState('Penelope Garcia');
  const [userEmergencyContactNumber, setUserEmergencyContactNumber] = useState('4031234567');
  const navigateMyAccount = () => {
    navigation.navigate("MyAccount");
  };

  const navigateHome = () => {
    navigation.navigate("Home");
  };

  const navigateInbox = () => {
    navigation.navigate("Inbox");
  };

  const handleSaveButton = () => {

    if (!userFullName) {
        alert('Please fill Name');
        return;
      }
      if (!userDateOfBirth) {
        alert('Please fill Date of Birth');
        return;
      }
      if (!userEmail) {
        alert('Please fill Email');
        return;
      }
      if (!userPassword) {
        alert('Please fill Password');
        return;
      }
      if (!userName) {
        alert('Please fill userName');
        return;
      }
      if (!userEmergencyContactName) {
        alert('Please fill the name of your emergency contact');
        return;
      }
      if (!userEmergencyContactNumber) {
        alert('Please fill the number of your emergency contact');
        return;
      }

      //Data to send to database
      var dataToSend = {
        name: userFullName,
        dob: userDateOfBirth,
        email: userEmail,
        password: userPassword,
        userName: userName,
        emergencyContactName: userEmergencyContactName,
        emergencyContactNumber: userEmergencyContactNumber
      };
    }
      

  return (
    <View style={styles.screen}>
      <Text style={styles.header}>My Account</Text>

      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'center',
        }}>


            <TextInput
                style={styles.input}
                placeholder= {"Full Name: " + userFullName}
                onChangeText={(text) => setUserFullName(text)}
                value={userFullName}
                autoCapitalize="none"
            />

            <TextInput
                style={styles.input}
                placeholder= {"Date of Birth: " + userDateOfBirth}
                onChangeText={(text) => setUserDateOfBirth(text)}
                value={userDateOfBirth}
                autoCapitalize="none"
            />

            <TextInput
                style={styles.input}
                placeholder= {"Email: " + userEmail}
                onChangeText={(text) => setUserEmail(text)}
                value={userEmail}
                autoCapitalize="none"
            />

            <TextInput
                style={styles.input}
                placeholder= {"Password: " + userPassword}
                onChangeText={(text) => setUserPassword(text)}
                value={userPassword}
                autoCapitalize="none"
            />

            <TextInput
                style={styles.input}
                placeholder= {"User Name: "+ userName}
                onChangeText={(text) => setUserName(text)}
                value={userName}
                autoCapitalize="none"
            />

            <TextInput
                style={styles.input}
                placeholder= {"Contact Name: " + userEmergencyContactName}
                onChangeText={(text) => setUserEmergencyContactName(text)}
                value={userEmergencyContactName}
                autoCapitalize="none"
            />

            <TextInput
                style={styles.input}
                placeholder= {"Contact Number: " + userEmergencyContactNumber}
                onChangeText={(text) => setUserEmergencyContactNumber(text)}
                value={userEmergencyContactNumber}
                autoCapitalize="none"
            />


            <TouchableOpacity style={styles.button} onPress={() => handleSaveButton()}>
                <Text style={styles.buttonTitle}>Save</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.navigation}
                onPress={() => navigateMyAccount()}
            >
                <Text style={styles.navigationTitle}>GoToMyAccount</Text>

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
            
        </ScrollView>
    </View>
    );
    };