import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, TouchableOpacity, TextInput } from 'react-native';

const coffeeSizes = ['Small', 'Medium', 'Large'];
const sugarLevels = ['No Sugar', 'Less Sugar', 'Regular Sugar', 'Extra Sugar'];

const Order = ({ navigation }) => {
  const [selectedSize, setSelectedSize] = useState('Medium');
  const [selectedSugar, setSelectedSugar] = useState('Regular Sugar');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [quantity, setQuantity] = useState('');

  // Placeholder function for order submission
  const submitOrder = () => {
    alert(`Order placed for a ${selectedSize} coffee with ${selectedSugar}.`);
    // Here, you would typically send the order details to your backend server
    // For simplicity, we're just showing an alert and then going back
    navigation.goBack();
  };

  const Download =() =>{
    
  }

  return (
    <View style={styles.fullScreen}>
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Customize Your Coffee</Text>

      <Text style={styles.subtitle}>Select Size:</Text>
      <View style={styles.optionsContainer}>
        {coffeeSizes.map((size) => (
          <TouchableOpacity
            key={size}
            style={[styles.option, selectedSize === size && styles.selectedOption]}
            onPress={() => setSelectedSize(size)}
          >
            <Text style={styles.optionText}>{size}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.subtitle}>Select Sugar Level:</Text>
      <View style={styles.optionsContainer}>
        {sugarLevels.map((level) => (
          <TouchableOpacity
            key={level}
            style={[styles.option, selectedSugar === level && styles.selectedOption]}
            onPress={() => setSelectedSugar(level)}
          >
            <Text style={styles.optionText}>{level}</Text>
          </TouchableOpacity>
        ))}
      </View >

      <Text style={styles.quantityLabel}>Quantity</Text>
      <TextInput
        style={styles.quantityInput}
        value={quantity}
        onChangeText={setQuantity} // Update state on input change
        keyboardType="numeric" // Ensuring only numbers can be entered
        placeholder="Enter quantity"
      />


      
      <View style={styles.paymentSection}>
        <Text style={styles.paymentTitle}>Make Payment</Text>
        <TextInput
          style={styles.input}
          placeholder="Card Number"
          keyboardType="numeric"
          value={cardNumber}
          onChangeText={setCardNumber}
        />
        <TextInput
          style={styles.input}
          placeholder="Expiry Date (MM/YY)"
          maxLength={5}
          value={expiryDate}
          onChangeText={setExpiryDate}
        />
        <TextInput
          style={styles.input}
          placeholder="CVV"
          keyboardType="numeric"
          maxLength={3}
          secureTextEntry
          value={cvv}
          onChangeText={setCvv}
        />
      </View>

      <Button style={styles.place} title="Place Order" onPress={submitOrder} />
      <Button style={styles.place }title="Download reciept " onPress={Download}/>
      
      
    </ScrollView>
    {/* Navigation Bar */}
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
    backgroundColor: '#FFF9F1',
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0, // Ensure no padding is affecting layout
    paddingBottom: 5, // Add padding at the bottom to push content up from the navbar
    backgroundColor: '#FFF7EC', // A warm off-white background
  },
  title: {
    marginTop: 9,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#5D4037',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#080604',
    alignContent: 'center',
    marginLeft: 10,
    marginTop: 20,
    marginBottom: 10,
  },
  quantityLabel:{
    flexDirection: "column", // This assumes you want items to be laid out horizontally
  justifyContent: "flex-start",
  borderColor:"#777",
  borderRadius:200,
  marginTop: 5,
  fontSize:20,
  fontWeight:"bold"
  },
  optionsContainer: {
    flexDirection: 'column',
    marginBottom: 30,
    marginTop: 4,
    justifyContent: 'space-around',
    width: '100%',
  },
  option: {
    backgroundColor: '#D7CCC8',
    padding: 12,
    marginTop: 4,
    marginBottom: 6,
    marginLeft:80,
    marginRight:80,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    alignItems: "center"
  },
  selectedOption: {
    backgroundColor: '#8D6E63',
    
  },
  optionText: {
    color: '#3E2723',
    fontSize: 16,
  },
  paymentSection: {
    width: '100%',
    marginTop: 10,
    marginBottom: 20,
  },
  paymentTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#5D4037',
    marginBottom: 20,
    marginLeft:130,
    alignItems: "center",
    alignContent: "center",
    justifyContent: 'center'
  },
  input: {
    width: '90%',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#BDBDBD',
    borderRadius: 20,
    padding: 15,
    fontSize: 16,
    color: '#616161',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginLeft:20,
    marginRight:10
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
place: {
  backgroundColor: '#007bff',  // Primary blue color
  padding: 15,
  borderRadius: 5,
  alignItems: 'center',
  justifyContent: 'center',
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
},
buttonText: {
  color: '#fff', // White text color
  fontSize: 16,
  fontWeight: 'bold',
}
});

export default Order;