import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity,Dimensions ,Image} from 'react-native';

// Sample images, replace with your actual images
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Front = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
        source={require('./../../../assets/images/front.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
            
            <Text style={styles.bannerText}>Welcome to the Best Coffee Shop</Text>

            <View style={styles.featuredSection}>
                <Text style={styles.sectionTitle}>Featured Coffee</Text>
                
                <Text style={styles.featuredText}>Try our special of the month: Gourmet Espresso</Text>
                
            </View>

            
            {/* Go to Login Button */}
            <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.navButtonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Sign')}>
                <Text style={styles.navButtonText}>Sign</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    bannerImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    },
    bannerText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 20,
        color: '#333',
    },
    navButton: {
        marginTop: 10,
        backgroundColor: 'darkorange',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
        marginBottom: 10, // Added for spacing between buttons if needed
    },
    navButtonText: {
        color: '#fff',
        fontSize: 18,
    },
    featuredSection: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
        
    },
    sectionTitle: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    featuredImage: {
        width: '100%',
        height: 180,
        borderRadius: 10,
        marginBottom: 10,
    },
    featuredText: {
        fontSize: 16,
        color: '#555',
        marginBottom: 10,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: '#a0522d',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
    navButton: {
        marginTop: 10,
        backgroundColor: 'darkorange',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
    },
    navButtonText: {
        color: '#fff',
        fontSize: 18,
    },
    backgroundImage: {
        width: windowWidth,
        height: windowHeight,
        position: 'absolute',
        opacity: 0.7,
      },
});

export default Front;
