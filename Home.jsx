import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions, Animated } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const coffeeOptions = [
  { id: 1, name: 'Espresso 12$', description: 'Strong and bold coffee with a rich aroma.', image: require('./../../../assets/images/ex1.png') },
  { id: 2, name: 'Cappuccino 10$', description: 'Light and frothy. A classic favorite.', image: require('./../../../assets/images/cup1.png') },
  { id: 3, name: 'Latte 5$', description: 'Smooth and creamy. A soothing drink.', image: require('./../../../assets/images/la1.png') },
  { id: 4, name: 'Latte-Dark 6$', description: 'Rich and deep with a dark twist.', image: require('./../../../assets/images/ld1.png') },
  { id: 5, name: 'Americano 10$', description: 'Espresso with added hot water. Simple and strong.', image: require('./../../../assets/images/am1.png') },
  { id: 6, name: 'Mocha 5$', description: 'Chocolate and coffee combined for a delightful treat.', image: require('./../../../assets/images/mo1.png') },
  { id: 7, name: 'Macchiato 8$', description: 'Espresso with a dash of frothy steamed milk.', image: require('./../../../assets/images/ma1.png') },
  { id: 8, name: 'Irish Coffee 10$', description: 'Coffee with whiskey and cream, not for the faint of heart.', image: require('./../../../assets/images/i1.png') },
  { id: 9, name: 'Flat White 12$', description: 'Strong coffee with a velvet smooth layer of steamed milk.', image: require('./../../../assets/images/fa1.png') },
  { id: 10, name: 'Iced Coffee 5$', description: 'Chilled coffee with ice, perfect for hot days.', image: require('./../../../assets/images/ic1.png') }
];

export default function HomeScreen({ navigation }) {
  const [selectedCoffee, setSelectedCoffee] = useState(null);
  const scaleValues = useRef(coffeeOptions.reduce((acc, item) => {
    acc[item.id] = new Animated.Value(1); // Initial scale is 1
    return acc;
  }, {})).current;

  useEffect(() => {
    if (selectedCoffee !== null) {
      Animated.spring(scaleValues[selectedCoffee], {
        toValue: 1.1, // Scale up the selected card a bit
        friction: 3, // Bounciness of the animation
        useNativeDriver: true,
      }).start();
    }
    // Scale down all other cards
    Object.keys(scaleValues).forEach(id => {
      if (parseInt(id) !== selectedCoffee) {
        Animated.spring(scaleValues[id], {
          toValue: 1, // Return to original scale
          friction: 3,
          useNativeDriver: true,
        }).start();
      }
    });
  }, [selectedCoffee, scaleValues]);

  return (
    <View style={styles.fullScreen}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.banner}>
          <Text style={styles.bannerText}>Welcome to Our Coffee Shop!</Text>
        </View>

        <Text style={styles.sectionTitle}>Choose Your Coffee</Text>
        <View style={styles.coffeeList}>
          {coffeeOptions.map((coffee) => (
            <TouchableOpacity key={coffee.id} style={styles.coffeeCard} onPress={() => setSelectedCoffee(coffee.id)}>
              <Image source={coffee.image} style={styles.coffeeImage} />
              <Text style={styles.coffeeName}>{coffee.name}</Text>
              {selectedCoffee === coffee.id && (
                <Text style={styles.coffeeDescription}>{coffee.description}</Text>
              )}
            </TouchableOpacity>
          ))}
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
}

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    backgroundColor: '#f5eadc',
  },
  container: {
    alignItems: 'center',
    padding: 20,
  },
  banner: {
    width: '100%',
    padding: 20,
    borderRadius: 200,
    marginBottom: 25,
    backgroundColor: '#e88f4a',
  },
  bannerText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#5D4037',
    marginBottom: 15,
    marginTop: 5
  },
  coffeeList: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  coffeeCard: {
    width: 170,
    alignItems: 'center',
    margin: 8,
    padding: 15,
    backgroundColor: '#f2e2dc',
    borderRadius: 20,
    shadowColor: "#050402",
    shadowOffset: { width: 8, height: 8 },
    shadowOpacity: 0.27,
    shadowRadius: 5,
    elevation: 9,
  },
  coffeeImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 12,
  },
  coffeeName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 1
  },
  coffeeDescription: {
    marginTop: 5,
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
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
