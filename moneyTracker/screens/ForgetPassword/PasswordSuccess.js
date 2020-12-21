import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const PasswordSuccess = () => {
  let navigation = useNavigation();

  return (
    <View style={styles.password_success_container}>
      <Image
        source={require('../../assets/images/success_password.png')}
        style={styles.image}
      />
      <Text style={styles.heading}>Whoo Whoo</Text>
      <Text style={styles.sub_heading}>
        Your password has been reset sucessfully
      </Text>
      <Text style={[styles.sub_heading]}>Now login with your new password</Text>
      <View style={styles.button_container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.button_text}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  password_success_container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#236B80',
  },
  image: {
    height: 150,
    width: 150,
    alignSelf: 'center',
  },
  heading: {
    fontFamily: 'Arimo-Regular',
    fontSize: 28,
    letterSpacing: 1,
    marginVertical: 20,
    color: 'white',
    textAlign: 'center',
  },
  sub_heading: {
    fontFamily: 'Arimo-Regular',
    fontSize: 16,
    paddingHorizontal: 20,
    color: '#CAC9C9',
    paddingBottom: 3,
    textAlign: 'center',
  },
  button_container: {
    paddingHorizontal: 20,
  },
  button: {
    marginTop: 40,
    backgroundColor: '#154e5e',
    paddingVertical: 20,
    borderRadius: 10,
    elevation: 8,
  },
  button_text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    letterSpacing: 1,
    fontFamily: 'Arimo-Regular',
  },
});

export default PasswordSuccess;
