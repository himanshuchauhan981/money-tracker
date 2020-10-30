import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const Initial = () => (
  <View style={styles.container}>
    <ImageBackground
      source={require('../assets/images/moneyBackground.jpg')}
      resizeMode="cover"
      style={styles.image}>
      <View style={{flex: 2}}></View>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Money Tracker</Text>
        <Text style={styles.subHeadingText}>Track every coin</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.loginButton]}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.signupButton]}>
          <Text style={[styles.buttonText, styles.textColor]}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
  },
  text: {
    color: 'grey',
    fontSize: 30,
    fontWeight: 'bold',
  },
  headingContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingText: {
    letterSpacing: 3,
    fontWeight: '400',
    fontSize: 40,
  },
  subHeadingText: {
    fontSize: 20,
  },
  buttonContainer: {
    flex: 1.5,
    flexDirection: 'column',
    justifyContent: 'flex-end',
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
    color: 'black',
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

export default Initial;
