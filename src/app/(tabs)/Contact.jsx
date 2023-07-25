import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Linking,
} from "react-native";
import * as Contacts from "expo-contacts";
import { MaterialIcons } from "@expo/vector-icons";

export default function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === "granted") {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.PhoneNumbers, Contacts.Fields.DisplayName],
      });
      console.log(data);
      setContacts(data);
    }
  };

  const handleCall = (phoneNumber) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const renderContactItem = ({ item }) => (
    <TouchableOpacity
      style={styles.contactItem}
      onPress={() =>
        handleCall(item.phoneNumbers ? item.phoneNumbers[0].number : "")
      }
    >
      <MaterialIcons name="person" size={24} color="#666" style={styles.icon} />
      <View style={styles.contactDetails}>
        <Text style={styles.contactName}>{item.name}</Text>
        <Text style={styles.contactPhoneNumber}>
          {item.phoneNumbers ? item.phoneNumbers[0].number : "N/A"}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() =>
          handleCall(item.phoneNumbers ? item.phoneNumbers[0].number : "")
        }
      >
        <MaterialIcons
          name="call"
          size={24}
          color="#007AFF"
          style={styles.icon}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.contactsList}>
        {contacts.length > 0 ? (
          <FlatList
            data={contacts}
            keyExtractor={(item) => item.id}
            renderItem={renderContactItem}
            contentContainerStyle={styles.contactsListContent}
          />
        ) : (
          <Text style={styles.details}>No contacts found</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  contactsList: {
    flex: 1,
    marginTop: 40,
  },
  contactsListContent: {
    paddingBottom: 20,
  },
  contactItem: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  contactDetails: {
    flex: 1,
  },
  contactName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  contactPhoneNumber: {
    fontSize: 16,
    color: "#666",
  },
});
