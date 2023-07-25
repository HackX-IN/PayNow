import { Image, StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import { Feather } from "@expo/vector-icons";
import Buttons from "../../components/Buttons";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.title}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              flex: 1,
              textAlign: "center",
              marginLeft: 15,
            }}
          >
            My Profile
          </Text>
          <Feather name="edit-2" size={24} color="#1a87dd" />
        </View>
        <View style={styles.secondHeader}>
          <Image
            style={{ width: 80, height: 80, borderRadius: 50 }}
            source={{
              uri: "https://www.w3schools.com/howto/img_avatar.png",
            }}
          />
          <Text style={{ fontSize: 20, fontWeight: "700", margin: 8 }}>
            Inamul Hasan
          </Text>
        </View>
      </View>
      <View style={styles.Container2}>
        <Buttons name="My info" icon="person-outline" />
      </View>
      <View style={styles.Buttons}>
        <Buttons name="My cards" icon="card-outline" />
      </View>
      <View style={styles.Buttons}>
        <Buttons name="Settings" icon="md-settings-outline" />
      </View>
      <View style={styles.Buttons}>
        <Buttons name="Help Center" icon="chatbox-outline" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 10,
    height: 250,
    backgroundColor: "#f3f4f5",
  },
  title: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#f3f4f5",
    marginTop: 35,
  },
  searchIcon: {
    marginRight: 10,
  },
  secondHeader: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
    backgroundColor: "#f3f4f5",
  },
  Container2: {
    alignItems: "center",
    marginTop: 50,
    backgroundColor: "white",
    padding: 20,
  },
  Buttons: {
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
    marginTop: -20,
  },
});
