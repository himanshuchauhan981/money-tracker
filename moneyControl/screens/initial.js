import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const image = {uri: 'https://reactjs.org/logo-og.png'};

const Start = () => (
  <View style={styles.container}>
    <ImageBackground
      source={require('../assets/images/moneyBackground.jpg')}
      resizeMode="cover"
      style={styles.image}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.signupButton]}>
          <Text style={[styles.buttonText, styles.textColor]}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.loginButton]}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
  },
  text: {
    color: 'grey',
    fontSize: 30,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'column-reverse',
    paddingHorizontal: 30,
    paddingVertical: 50,
    width: '100%',
  },
  button: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginBottom: 10,
    borderRadius: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8.65,
    elevation: 8,
  },
  buttonText: {
    fontSize: 24,
    lineHeight: 30,
    letterSpacing: 2,
    textAlign: 'center',
    fontWeight: '700',
  },
  signupButton: {
    backgroundColor: 'blue',
  },
  loginButton: {
    backgroundColor: 'white',
  },
  textColor: {
    color: 'white',
  },
});

export default Start;
