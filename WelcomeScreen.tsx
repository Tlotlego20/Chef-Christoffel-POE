import React from 'react';
import { View, Text, ImageBackground, Image, StyleSheet, TouchableOpacity, Button } from 'react-native';

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://img.freepik.com/premium-photo/chef-cooking-with-flame-frying-pan-kitchen-stove-chef-restaurant-kitchen-stove-with-pan_67394-1831.jpg' }} // Replace this with your background image URL or local path
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          {/* Add the logo here */}
          <Image
            source={{ uri: 'https://img.freepik.com/premium-vector/photo-vector-coloured-chef-logo-design-template_763111-106659.jpg' }} // Replace this with your logo URL or local path
            style={styles.logo}
          />
          <Text style={styles.subText}> Welcome to Chef Christoffel</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('HomeScreena')}
          >
           <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.0)', // This gives a slight overlay effect
    alignItems: 'center',
    paddingVertical: 0,
    paddingHorizontal: 0,
    borderRadius: 0,
    marginTop: '0%', // Adjusted margin to make space for logo
  },
  logo: {
    width: 100, // Set the width of the logo
    height: 100, // Set the height of the logo
    marginBottom: 20, // Space between logo and welcome text
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subText: {
    fontSize: 22,
    color: 'gray',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#ffffff00',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
});



