import React from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

const Edit= ({ navigation }) => {
  // Add state for form fields if necessary

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>
      {/* Add TextInput components for each editable field */}
      <TextInput style={styles.input} placeholder="Name" />
      <TextInput style={styles.input} placeholder="Email" />
      {/* More inputs as needed */}
      
      <Button title="Save" onPress={() => navigation.goBack()} /> {/* Implement save logic */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
  },
  // Add more styles as needed
});

export default Edit;
