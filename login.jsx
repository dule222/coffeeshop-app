import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Dimensions ,Alert} from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateForm = () => {
    let isValid = true;

    if (!username.trim()) {
      setUsernameError('Username cannot be empty');
      isValid = false;
    } else {
      setUsernameError('');
    }

    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      isValid = false;
    } else {
      setPasswordError('');
    }

    return isValid;
  };

  const handleLogin = () => {
    if (validateForm()) {
      console.log('Username:', username);
      console.log('Password:', password);
      navigation.navigate('Home');
    } else {
      Alert.alert('Validation Failed', 'Please check your inputs.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image
        source={require('./../../../assets/images/coffeeimage.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      {/* Login Content */}
      <View style={styles.loginContent}>
        <Text style={styles.titleText}>ENJOY <Text style={styles.boldText}>YOUR COFFEE</Text></Text>
        
        <TextInput
          style={styles.input}
          onChangeText={setUsername}
          value={username}
          placeholder="Username....."
          placeholderTextColor="#999"
        />
        {usernameError ? <Text style={styles.errorText}>{usernameError}</Text> : null}
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Password....."
          placeholderTextColor="#999"
          secureTextEntry={true}
        />
        {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
        <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:80,
    borderRadius: 60
  },
  errorText: {
    alignSelf: 'flex-start',
    marginLeft: 20,
    color: 'red',
    marginTop: 8,
  },
  backgroundImage: {
    width: windowWidth,
    height: windowHeight,
    position: 'absolute',
    opacity: 0.8,
  },
  loginContent: {
    width: windowWidth * 0.9,
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: 20,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.7,
    shadowRadius: 20,
    elevation: 10,
  },
  titleText: {
    fontSize: 24,
    color: '#003366',
    textAlign: 'center',
    marginBottom: 30,
  },
  boldText: {
    fontWeight: 'bold',
    color: '#007bff',
  },
  input: {
    width: '100%',
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 20,
    marginTop: 15,
    fontSize: 18,
    color: '#333',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 2,
  },
  loginButton: {
    marginTop: 30,
    backgroundColor: '#007bff',
    paddingVertical: 10,
    width: '60%',
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
});
