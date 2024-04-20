import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity, TextInput, Alert  } from 'react-native';

const Settings = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [newPassword, setNewPassword] = useState('');
  const [themeDark, setThemeDark] = useState(false);
  const [silence, setSilence] = useState('');
  
  
  const toggleSilence = () => setSilence(previousState => !previousState);
  const toggleTheme = () => {
    setThemeDark(!themeDark);
  };
  const handleChangePassword = () => {
    if (newPassword.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters long');
    } else {
      // Here you would integrate the password change functionality
      Alert.alert('Success', 'Password changed successfully');
      setNewPassword('');
    }
  };

  const handleLogout = () => {
    // Here you would handle user logout
    navigation.navigate('Login');
  };
  const handleDeleteAccount=()=>{
    navigation.navigate('Sign');
  }
  const handleClearCache = () => {
    Alert.alert('Cache Cleared', 'All cached data has been cleared.');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      {/* Notification Switch */}
      <View style={styles.setting}>
        <Text style={styles.settingText}>Notifications</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={styles.setting}>
        <Text style={styles.settingText}>Dark Theme</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={themeDark ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={toggleTheme}
          value={themeDark}
        />
      </View >
      <View style={styles.setting}>
      <Text style={styles.settingText}>Silence</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={themeDark ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={toggleSilence}
          value={silence}
        />

      </View>
      
      {/* Change Password */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setNewPassword}
          value={newPassword}
          placeholder="Enter new password"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
          <Text style={styles.buttonText}>Change Password</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleClearCache}>
            <Text style={styles.buttonText}>Clear Cache</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleDeleteAccount}>
            <Text style={styles.buttonText}>Delete Account</Text>
            
        </TouchableOpacity>
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#cee4eb',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  settingText: {
    fontSize: 18,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom:20
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Settings;
