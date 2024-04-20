import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image ,Dimensions,Alert} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Sign = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirst] = useState('');
  const [lastName, setLast] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');

  const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
  };

  const handleSignIn = () => {
    let isValid = true;

    // Validate first name
    if (!firstName.trim()) {
      setFirstNameError('First name is required');
      isValid = false;
    } else {
      setFirstNameError('');
    }

    // Validate last name
    if (!lastName.trim()) {
      setLastNameError('Last name is required');
      isValid = false;
    } else {
      setLastNameError('');
    }

    // Validate email
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      isValid = false;
    } else {
      setEmailError('');
    }

    // Validate password
    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (isValid) {
      console.log('Signing in with:', firstName, lastName, email, password);
      navigation.navigate('Profile');
      firstName= firstName,
      lastName=lastName,
      email= email
    } else {
      Alert.alert('Validation Failed', 'Please check your inputs.');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./../../../assets/images/nuts.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      <Text style={styles.title}>Sign In</Text>

      {/* First Name Input */}
      <TextInput
        style={styles.input}
        onChangeText={setFirst}
        value={firstName}
        placeholder="First Name"
        placeholderTextColor="#999"
      />
      {firstNameError ? <Text style={styles.errorText}>{firstNameError}</Text> : null}

      {/* Last Name Input */}
      <TextInput
        style={styles.input}
        onChangeText={setLast}
        value={lastName}
        placeholder="Last Name"
        placeholderTextColor="#999"
      />
      {lastNameError ? <Text style={styles.errorText}>{lastNameError}</Text> : null}

      {/* Email Input */}
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor="#999"
      />
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

      {/* Password Input */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          secureTextEntry={!passwordVisible}
          autoCapitalize="none"
          placeholderTextColor="#999"
        />
        <TouchableOpacity
          style={styles.visibilityToggle}
          onPress={() => setPasswordVisible(!passwordVisible)}>
          {/* Toggle password visibility */}
        </TouchableOpacity>
      </View>
      {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

      {/* Sign In Button */}
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    width: '100%',
    textAlign: 'left',
    },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    marginVertical: 10,
    padding: 15,
    color: "#fff", // Sets the text color to white
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: 'transparent', // Consider setting a background color if the container has a darker theme
  },
  
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
  },
  backgroundImage: {
    width: windowWidth,
    height: windowHeight,
    position: 'absolute',
    opacity: 0.9,
  },
  visibilityToggle: {
    position: 'absolute',
    right: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
  button: {
    width: '100%',
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#007bff',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  socialSignIn: {
    marginTop: 20,
  },
  socialButton: {
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    width: '100%',
    alignItems: 'center',
  },
  socialText: {
    fontSize: 16,
  },
});

export default Sign;
