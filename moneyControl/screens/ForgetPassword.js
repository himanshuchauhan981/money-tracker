import React from 'react';
import {Image, Text, View, TextInput, StyleSheet} from 'react-native';
import FontistoIcon from 'react-native-vector-icons/Fontisto';

import {Icon} from 'react-native-elements';

const ForgetPassword = () => {
  return (
    <View style={styles.forget_password_container}>
      <View style={styles.icon_container}>
        <Image
          source={require('../assets/images/forget_password.png')}
          style={styles.icon}
        />
      </View>
      <View style={styles.heading_container}>
        <Text style={styles.heading}>Forget your password</Text>
        <Text style={styles.sub_heading}>
          Enter your email address.We will email you OTP to reset your password
          ?
        </Text>
      </View>
      <View style={styles.text_container}>
        <View style={styles.textbox}>
          <FontistoIcon
            name="email"
            size={30}
            color="#93278f"
            style={styles.text_icon}
          />
          <TextInput
            placeholder="Email Address"
            keyboardType="email-address"
            style={styles.email_textbox}
          />
        </View>
        <View style={styles.floating_button}>
          <Icon
            name="chevron-right"
            type="Entypo"
            raised
            size={30}
            reverse
            color="#03C4A1"
            onPress={() => console.log('ues')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  forget_password_container: {
    flex: 1,
    backgroundColor: '#248B86',
  },
  icon_container: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 150,
    height: 150,
  },
  heading_container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 45,
  },
  heading: {
    fontFamily: 'Arimo-Regular',
    fontSize: 25,
    color: 'white',
    letterSpacing: 2,
  },
  sub_heading: {
    textAlign: 'center',
    fontFamily: 'Arimo-Regular',
    color: '#E3E5E5',
    marginTop: 10,
    fontSize: 16,
    letterSpacing: 1,
  },
  text_container: {
    flex: 3,
    paddingHorizontal: 20,
    marginTop: 30,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  textbox: {
    backgroundColor: 'white',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 15,
    elevation: 8,
    flexDirection: 'row',
  },
  text_icon: {
    alignSelf: 'center',
  },
  floating_button: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 25,
  },
  email_textbox: {
    marginLeft: 10,
    flexGrow: 1,
  },
});

export default ForgetPassword;
