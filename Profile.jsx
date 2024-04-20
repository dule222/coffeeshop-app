import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Make sure to install expo icons

const Profile = ({ navigation }) => {
  const userData = {
    name: "Duleesha Wijesiri",
    email: "wijesiriduleesha@gmail.com",
    profilePic: "https://via.placeholder.com/150",
    bio: "Coffee enthusiast. Lover of technology and nature.",
    preferences: {
      favoriteCoffee: "Espresso",
      notifications: true,
    },
    socialLinks: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com"
    }
  };

  const handleLogout = () => {
    console.log('User logged out');
    navigation.navigate('Login');
  };

  const handleSettingsPress = () => {
    navigation.navigate('Settings');
  };
  

  return (
    <View style={styles.fullScreen}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.profileHeader}>
        <Image source={require('./../../../assets/images/gi1.png')} style={styles.profilePic} />

          <Text style={styles.Name}>{userData.name}</Text>
          <Text style={styles.userEmail}>{userData.email}</Text>
          <Text style={styles.userBio}>{userData.bio}</Text>
        </View>

        

        <View style={styles.preferenceSection}>
          <Text style={styles.sectionTitle}>Preferences</Text>
          <Text style={styles.preferenceText}>Favorite Coffee  : {userData.preferences.favoriteCoffee}</Text>
          <Text style={styles.preferenceText}>Notifications      : {userData.preferences.notifications ? 'Enabled' : 'Disabled'}</Text>
          <TouchableOpacity style={styles.settingsButton} onPress={handleSettingsPress}>
            <Text style={styles.settingsButtonText}>Settings</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>

        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={() => window.open(userData.socialLinks.twitter, '_blank')}>
            <Ionicons name="logo-twitter" size={30} color="#1DA1F2" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => window.open(userData.socialLinks.linkedin, '_blank')}>
            <Ionicons name="logo-linkedin" size={30} color="#0077B5" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => window.open(userData.socialLinks.google, '_blank')}>
            <Ionicons name="logo-google" size={30} color="#0077B5"></Ionicons>
          </TouchableOpacity>
        </View>

      </ScrollView>

      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Location')}>
          <Text style={styles.navText}>Location</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Order')}>
          <Text style={styles.navText}>Order</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>

        
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    backgroundColor: '#faf0d9',
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    paddingBottom: 20, // Make sure this matches the navbar height plus a little extra
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 50,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.30,
    shadowRadius: 3.84,
    elevation: 8,
  },
  profilePic: {
    width: 120,
    height: 120,
    borderRadius: 50,
    marginBottom: 40,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom:10,
    justifyContent:'center'
  },
  userEmail: {
    fontSize: 18,
    color: '#777',
    marginBottom:6
  },
  userBio: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
    paddingHorizontal: 2,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    marginRight:7,
    marginLeft:5,
    paddingLeft:7
  },
  preferenceSection: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
    paddingHorizontal:85
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingLeft:2
  },
  preferenceText: {
    fontSize: 16,
    marginBottom: 10,
  },
  settingsButton: {
    marginTop: 10,
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  settingsButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 5,
    paddingLeft:15,
    paddingRight:15,
  },
  logoutButton: {
    backgroundColor: '#d9534f',
    marginTop:5,
    padding: 15,
    paddingLeft:30,
    paddingRight:30,
    borderRadius: 20,
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 40,  // Ensuring it's well above the navbar
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  navBar: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd', // Lighter border color for subtlety
    backgroundColor: '#3b3021', // Clean white background
    padding: 12, // Slightly more padding for touchability
    shadowColor: '#000', // Adds shadow for a subtle lift effect
    shadowOffset: { width: 0, height: -2 }, // Shadow from the top down
    shadowOpacity: 0.1, // Light shadow for less visual weight
    shadowRadius: 3, // Soft shadow spread
    elevation: 100, // Ensures shadow on Android
},
navItem: {
    alignItems: 'center',
    flex: 1,
    padding: 10, // Padding for better touch response
},
navText: {
    fontSize: 14, // Smaller font size for aesthetic purposes
    color: '#fff', // Dark grey for readability
    fontWeight: '500', // Medium font weight for better visibility
},
navIcon: {
    marginBottom: 3, // Space between icon and text
},
activeNavItem: {
    borderTopWidth: 3, // Highlight for active tab
    borderTopColor: 'tomato', // Use a vibrant color to indicate selection
    paddingTop: 7, // Adjust padding to keep content aligned
},
activeNavText: {
    color: 'tomato', // Text color to match the active border
    fontWeight: '600', // Bold text for active item
},

});


export default Profile;
