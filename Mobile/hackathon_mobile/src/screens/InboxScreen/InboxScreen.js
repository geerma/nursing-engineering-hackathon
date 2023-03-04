import { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

import { auth, db } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { ScrollView } from "react-native-gesture-handler";

function Question({ survey, index }) {
  const [choice1, setChoice1] = useState(0);

  return (
    <View style={styles.question}>
      <Text>Question:</Text>
      {survey && <Text>{survey[index].text}</Text>}

      {survey[index].options.map((item, id) => (
        <TouchableOpacity
          style={styles.choiceButton}
          onPress={() => setChoice1(item.number)}
          key={id}
        >
          <Text style={styles.choiceTitle}>{item.text}</Text>
        </TouchableOpacity>
      ))}

      {choice1 == 1 && <Text>{survey[index].options[0].info_if_chosen}</Text>}
      {choice1 == 2 && <Text>{survey[index].options[1].info_if_chosen}</Text>}
      {choice1 == 3 && <Text>{survey[index].options[2].info_if_chosen}</Text>}
      {choice1 == 4 && <Text>{survey[index].options[3].info_if_chosen}</Text>}
    </View>
  );
}

export default function InboxScreen({ navigation }) {
  const [chat, setChat] = useState(0);
  const [survey, setSurvey] = useState();

  const getSurvey = async () => {
    const docRef = doc(db, "surveys", "RpQtpf1erPAfvekRDB5M");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const surveyData = docSnap.data().questions;

      console.log("Questions:-----------", surveyData[0]);
      setSurvey(surveyData);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  useEffect(() => {
    getSurvey();
  }, []);

  const handleSubmit = () => {
    console.log("Submitted");
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.header}>Inbox Screen</Text>

      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        {chat == 0 && (
          <TouchableOpacity style={styles.button} onPress={() => setChat(1)}>
            <Text style={styles.buttonTitle}>Chat 1</Text>
          </TouchableOpacity>
        )}

        {chat == 1 && (
          <>
            <Text style={styles.chatheader}>Chat 1</Text>
            <Question survey={survey} index={0} />
            <Question survey={survey} index={1} />
            <Question survey={survey} index={2} />
            <Question survey={survey} index={3} />
          </>
        )}

        <TouchableOpacity style={styles.button} onPress={() => setChat(0)}>
          <Text style={styles.buttonTitle}>Return to Inbox</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
