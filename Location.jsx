import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';

const Location = ({ navigation }) => {
  const [selectedShop, setSelectedShop] = useState(null);

  const coffeeShops = [
    {
      id: 1,
      name: 'Expresso',
      position: { lat: 37.78825, lng: -122.4324 },
      image: require('./../../../assets/images/c1.png'),
      description: "A strong, full-bodied coffee with a rich aroma. Ideal for those who appreciate a robust flavor profile."
    },
    {
      id: 2,
      name: 'CoffeeMe',
      position: { lat: 37.79025, lng: -122.4344 },
      image: require('./../../../assets/images/c2.png'),
      description: "Perfect blend for a mid-day break, offering a balanced taste with subtle notes of caramel and chocolate."
    },
    {
      id: 3,
      name: 'CoffeeShop',
      position: { lat: 37.78825, lng: -122.4324 },
      image: require('./../../../assets/images/c3.png'),
      description: "A cozy place to enjoy your espresso amidst modern decor. Known for its artisanal brews."
    },
    {
      id: 4,
      name: 'Enjoy Coffee',
      position: { lat: 37.78825, lng: -122.4324 },
      image: require('./../../../assets/images/c4.png'),
      description: "Your perfect morning start with a cup of our signature blend, which is smooth and invigorating."
    },
    {
      id: 5,
      name: 'Coffeeyai',
      position: { lat: 37.79025, lng: -122.4344 },
      image: require('./../../../assets/images/c5.png'),
      description: "A smooth, light-bodied coffee that's perfect for those who enjoy a milder, easy-drinking option."
    },
    {
      id: 6,
      name: 'The Coffee Shop',
      position: { lat: 37.78825, lng: -122.4324 },
      image: require('./../../../assets/images/c6.png'),
      description: "Where friends meet to enjoy a wide range of international blends and freshly baked pastries."
    }
  ];

  const toggleModal = (shop) => {
    setSelectedShop(shop ? shop : null);
  };

  return (
    <View style={styles.fullScreen}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Locations</Text>
        {coffeeShops.map(shop => (
          <View key={shop.id} style={styles.shopContainer}>
            <TouchableOpacity onPress={() => toggleModal(shop)}>
              <Image source={shop.image} style={styles.image} />
            </TouchableOpacity>
            <Text style={styles.shopName}>{shop.name}</Text>
            <Text>Latitude: {shop.position.lat}</Text>
            <Text>Longitude: {shop.position.lng}</Text>
          </View>
        ))}
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
      {selectedShop && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={!!selectedShop}
          onRequestClose={() => toggleModal(null)}
        >
          <View style={styles.modalView}>
            <Image source={selectedShop.image} style={styles.modalImage} />
            <Text style={styles.modalText}>{selectedShop.name}</Text>
            <Text style={styles.modalText}>{selectedShop.description}</Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => toggleModal(null)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
    fullScreen: {
      flex: 1,
      backgroundColor: '#ede0ce',
    },
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    shopContainer: {
      marginBottom: 20,
      padding: 10,
      width: 370,
      backgroundColor: '#edeceb',
      borderRadius: 5,
      shadowRadius: 2,
      alignItems: 'center',
    },
    shopName: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    image: {
      width: 200,
      height: 150,
      borderRadius: 10,
      marginBottom: 10,
    },
    modalView: {
      marginTop:220,
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },
    modalImage: {
      width: '100%',
      height: 200,
      marginBottom: 15,
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    closeButton: {
      backgroundColor: '#2196F3',
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    closeButtonText: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
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

export default Location;
